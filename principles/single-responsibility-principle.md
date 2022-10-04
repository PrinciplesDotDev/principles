+++
principle = "Single-Responsibility Principle"
tags = ["solid", "practices", "code", "team", "organization"]
summary = "Every module, class or function in a computer program should have responsibility over a single part of that program's functionality, and it should encapsulate that part"
authors = ["Robert C. Martin"]
contributors = ["AdamCraven"]
license = "CC BY-SA 4.0"
allow_dual_licensing_to_GPLv3 = true
original_source_is_canonical = false
crystalized = false
uid = "fcd54e0e-4fb2-4dfc-a15e-c1772f9cfa92"
+++

The single-responsibility principle is a computer-programming principle that states that every module, class or function in a computer program should have responsibility over a single part of that program's functionality, and it should encapsulate that part. All of that module, class or function's services should be narrowly aligned with that responsibility.

Robert C. Martin, the originator of the term, expresses the principle as, "A class should have only one reason to change," although, because of confusion around the word "reason" he also stated "This principle is about people."

In some of his talks, he also argues that the principle is, in particular, about roles or actors. For example, while they might be the same person, the role of an accountant is different from a database administrator. Hence, each module should be responsible for each role.

## History
The term was introduced by Robert C. Martin in an article by the same name as part of his "Principles of Object Oriented Design" made popular by his 2003 book "Agile Software Development, Principles, Patterns, and Practices". Martin described it as being based on the principle of cohesion, as described by Tom DeMarco in his book "Structured Analysis and System Specification" and Meilir Page-Jones in "The Practical Guide to Structured Systems Design" In 2014 Martin wrote a blog post entitled [The Single Responsibility Principle](https://blog.cleancoder.com/uncle-bob/2014/05/08/SingleReponsibilityPrinciple.html) with a goal to clarify what was meant by the phrase "reason for change."


## Example

Martin defines a responsibility as a reason to change, and concludes that a class or module should have one, and only one, reason to be changed (e.g. rewritten).

As an example, consider a module that compiles and prints a report. Imagine such a module can be changed for two reasons. First, the content of the report could change. Second, the format of the report could change. These two things change for different causes. The single-responsibility principle says that these two aspects of the problem are really two separate responsibilities, and should, therefore, be in separate classes or modules. It would be a bad design to couple two things that change for different reasons at different times.

The reason it is important to keep a class focused on a single concern is that it makes the class more robust. Continuing with the foregoing example, if there is a change to the report compilation process, there is a greater danger that the printing code will break if it is part of the same class.

## Derivative work

> This work is a derivative of "Single-responsibility principle" by multiple authors, originally licensed under CC BY SA 3.0. The original version can be found [here](https://en.wikipedia.org/wiki/Single-responsibility_principle2).