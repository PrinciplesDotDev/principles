+++
principle = "Explicit Dependencies Principle"
tags = ["code", "team", "organization", "rdt"]
summary = "Methods and classes should explicitly require any collaborating objects they need in order to function correctly"
authors = []
contributors = ["AdamCraven"]
license = "CC BY-SA 4.0"
allow_dual_licensing_to_GPLv3 = true
original_source_is_canonical = false
crystalized = false
uid = "8aae10ca-79eb-46ea-946b-fe2d594b9701"
+++
Methods and classes should explicitly require (typically through method parameters or constructor parameters) any collaborating objects they need in order to function correctly.

If your classes require other classes to perform their operations, these other classes are dependencies.  These dependencies are implicit if they exist only in the code within your class, and not in its public interface.  Explicit dependencies appear most often in an object's constructor, for class-level dependencies, or in a particular method's parameter list, for more local dependencies.

Classes with implicit dependencies cost more to maintain than those with explicit dependencies.  They are more challenging to test because they are more tightly coupled to their collaborators.  They are more challenging to analyze for side effects, because the entire class's codebase must be searched for object instantiations or calls to static methods.  They are more brittle and more tightly coupled to their collaborators, resulting in more rigid and brittle designs.

Classes with explicit dependencies are more honest.  They state very clearly what they require in order to perform their particular function.  They tend to follow the [Principle of Least Surprise](http://en.wikipedia.org/wiki/Principle_of_least_astonishment) by not affecting parts of the application they didn't explicitly demonstrate they needed to affect.  Explicit dependencies can easily be swapped out with other implementations, whether in production or during testing or debugging.  This makes them much easier to maintain and far more open to change.

The Explicit Dependencies Principle is closely related to the [Dependency Inversion Principle](/p/dependency-inversion-principle) and the [Hollywood Principle](/p/hollywood-principle).

Consider the PersonalizedResponse class in this Gist, which can be constructed without any dependencies:

## Implicit Dependencies Example

```java
using System;
using System.IO;
using System.Linq;

namespace ImplicitDependencies
{
    class Program
    {
        static void Main(string[] args)
        {
            var customer = new Customer()
            {
                FavoriteColor = "Blue",
                Title = "Mr.",
                Fullname = "Steve Smith"
            };
            Context.CurrentCustomer = customer;

            var response = new PersonalizedResponse();

            Console.WriteLine(response.GetResponse());
            Console.ReadLine();
        }
    }

    public static class Context
    {
        public static Customer CurrentCustomer { get; set; }

        public static void Log(string message)
        {
            using (StreamWriter logFile = new StreamWriter(
                Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.MyDocuments),
                    "logfile.txt")))
            {
                logFile.WriteLine(message);
            }
        }
    }

    public class Customer
    {
        public string FavoriteColor { get; set; }
        public string Title { get; set; }
        public string Fullname { get; set; }
    }

    public class PersonalizedResponse
    {
        public string GetResponse()
        {
            Context.Log("Generating personalized response.");
            string formatString = "Good {0}, {1} {2}! Would you like a {3} widget today?";
            string timeOfDay = "afternoon";
            if (DateTime.Now.Hour < 12)
            {
                timeOfDay = "morning";
            }
            if (DateTime.Now.Hour > 17)
            {
                timeOfDay = "evening";
            }
            return String.Format(formatString, timeOfDay,
                Context.CurrentCustomer.Title,
                Context.CurrentCustomer.Fullname,
                Context.CurrentCustomer.FavoriteColor);
        }
    }
}
```

This class is clearly tightly coupled to the file system and the system clock, as well as a particular customer instance via the global Context class.  If we were to refactor this class to make its dependencies explicit, it might look something like this:

## Explicit Dependencies Example

```java
using System;
using System.IO;
using System.Linq;

namespace ExplicitDependencies
{
    class Program
    {
        static void Main(string[] args)
        {
            var customer = new Customer()
            {
                FavoriteColor = "Blue",
                Title = "Mr.",
                Fullname = "Steve Smith"
            };

            var response = new PersonalizedResponse(new SimpleFileLogger(), new SystemDateTime());

            Console.WriteLine(response.GetResponse(customer));
            Console.ReadLine();
        }
    }

    public interface ILogger
    {
        void Log(string message);
    }

    public class SimpleFileLogger : ILogger
    {
        public void Log(string message)
        {
            using (StreamWriter logFile = new StreamWriter(
                Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.MyDocuments),
                    "logfile.txt")))
            {
                logFile.WriteLine(message);
            }
        }
    }

    public interface IDateTime
    {
        DateTime Now { get; }
    }

    public class SystemDateTime : IDateTime
    {
        public DateTime Now
        {
            get
            {
                return DateTime.Now;
            }
        }
    }

    public class Customer
    {
        public string FavoriteColor { get; set; }
        public string Title { get; set; }
        public string Fullname { get; set; }
    }

    public class PersonalizedResponse
    {
        private readonly ILogger _logger;

        private readonly IDateTime _dateTime;

        public PersonalizedResponse(ILogger logger,
            IDateTime dateTime)
        {
            this._dateTime = dateTime;
            this._logger = logger;
        }

        public string GetResponse(Customer customer)
        {
            _logger.Log("Generating personalized response.");
            string formatString = "Good {0}, {1} {2}! Would you like a {3} widget today?";
            string timeOfDay = "afternoon";
            if (_dateTime.Now.Hour < 12)
            {
                timeOfDay = "morning";
            }
            if (_dateTime.Now.Hour > 17)
            {
                timeOfDay = "evening";
            }
            return String.Format(formatString, timeOfDay,
                customer.Title,
                customer.Fullname,
                customer.FavoriteColor);
        }
    }
}
```

In this case, the logging and time dependencies have been pulled into constructor parameters, while the customer being acted upon has been pulled into a method parameter.  The end result is code that can only be used when the things it needs have been provided for it (and whether you scope dependencies at the class or method level will depend on how the class uses them, how many methods reference the item in question, etc. - both options are shown here even though in this case everything could simply have been provided as method parameters).

## See Also

* [Dependency Inversion Principle](/p/dependency-inversion-principle/)

## References

* [New Is Glue](http://ardalis.com/new-is-glue)

## Derivative work

> This work is a derivative of "Explicit Dependencies Principle" by deviq, originally licensed under MIT. The original version can be found [here](https://deviq.com/principles/explicit-dependencies-principle).