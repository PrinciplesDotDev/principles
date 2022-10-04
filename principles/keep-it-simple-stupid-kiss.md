+++
principle = "Keep It Simple Stupid (KISS)"
tags = ["epic", "code", "team"]
summary = "A simple solution is better than a complex one."
authors = []
contributors = ["crehn", "AdamCraven"]
license = "CC BY-SA 4.0"
allow_dual_licensing_to_GPLv3 = true
original_source_is_canonical = false
crystalized = false
uid = "8d4e4689-caf8-4da8-a4fb-66da2fee4e54"
+++
A simple solution is better than a complex one.

The KISS principle prioritizes clarity over cleverness. A solution may look dull or even "stupid," but understandable and straightforward. It claims there is no value in a solution being "clever" when a simpler solution would suffice.

It is easy to create sophisticated solutions for various problems in software, as modern programming languages, frameworks, and APIs have powerful features that enabled engineers to write "clever" solutions. The KISS principle states that a solution is better when simpler, so it uses less inheritance, less polymorphism, fewer classes, etc.

It does not mean that complex features should not be used, they should only be used when necessary, or there is a substantial advantage to be gained.

## Why

Simpler solutions are easier to maintain. This includes increased readability, understandability, and changeability. Furthermore, writing simple code is less error-prone.

The advantage of simplicity is even more significant when the person who maintains the software is not the one who wrote it. The maintainer might also be less familiar with sophisticated programming language features. So simple and stupid programs are easier to maintain because the maintainer needs less time to understand them and is less likely to introduce further defects.

One reason to create more complex code is to make it more flexible to accommodate further requirements. But you may not know what those future requirements are or if they will exist as envisioned.

> "When you make your code more flexible or sophisticated than it needs to be, you over-engineer it. Some do this because they believe they know their system's future requirements. The reason that it's best to make a design more flexible or sophisticated today is to accommodate the needs of tomorrow. That sounds reasonable, if you happen to be a psychic." - Refactoring to Patterns - Joshua Kerievsky.


## How

KISS is a very general principle to this principle, mainly depending on the given design problem:

  * Avoid inheritance, polymorphism, dynamic binding, and other complicated OOP concepts. Use delegation and simple if-constructs instead.
  * Avoid low-level optimization of algorithms, especially when involving Assembler, bit-operations, and pointers. Slower implementations will work just fine.
  * Use simple brute-force solutions instead of complicated algorithms. Slower algorithms will work in the first place.
  * Avoid numerous classes and methods as well as large code blocks
  * For slightly unrelated but smaller pieces of functionality, use private methods or functions instead of an additional class.
  * Avoid general solutions needing parameterization. A specific solution will suffice.


## History

American engineer Kelly Johnson coined the principle referring to the requirement that a military aircraft should be repairable with a limited set of tools under combat conditions.

## Derivative work

> This work is a derivative of "Keep It Simple Stupid (KISS)" by Christian Rehn, originally licensed under CC BY 4.0. The original version can be found [here](http://principles-wiki.net/principles:keep_it_simple_stupid?rev=1630269194).