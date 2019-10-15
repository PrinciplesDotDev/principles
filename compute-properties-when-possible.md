
+++
Categories = ["Process"]
Description = ""
Tags = ["bug free"]
title = "Compute properties when possible"
+++

Computed (or Derived) properties are properties that return values only when they are accessed by reading other properties or functions.

Computed properties are easy to reason about. The relationships between properties are explicit and the ‘recipe’ for creating the property can be seen in the code where its method exists.

There is a reduced amount of properties to set, so no bugs are created as a consequence of forgetting to do that and it's easy to unit test a computed property throughly.

A common example of a computed property is below:

```
  class User {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstname} ${this.lastName}`;
    }
  }
```


Computed properties can also be used in many different contexts, such as an ETL process:


Raw data files => Computed properties => Output


Exceptions: If read performance is critical, computed values will slow down the output.
