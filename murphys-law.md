+++
principle = "Murphy's law"
tags = ["epic", "strategic"]
summary = "Whatever can go wrong will go wrong. So a solution is better the fewer possibilities there are for something to go wrong."
authors = [""]
contributors = ["crehn", "adamcraven"]
license = "CC BY-SA 4.0"
allow_dual_licensing_to_GPLv3 = true
original_source = "http://principles-wiki.net/principles:murphy_s_law"
original_source_is_canonical = false
crystalized = false
uid = "4473624c-9eba-499f-9967-f9caeaaef302"
+++
Whatever can go wrong will go wrong. So a solution is better the fewer possibilities there are for something to go wrong.

## Why

Systems are built and used by humans. And humans inevitably make mistakes.  So if a mistake is possible, eventually, it will occur.

As mistakes are undesirable - you should design a system in a way that reduces them. The fewer possibilities there are to make mistakes, the fewer there will be and a greater chance of producing higher-quality software.

This also applies to system design, implementation, verification, maintenance, and use. Because all these tasks are (partly) carried out by humans.


##  Description

Although often cited as a fatalistic comment, Murphy's Law is not stating "that life is unfair". Instead, it is (or at least can be seen as) engineering advice to design everything in a way that avoids incorrect usage. The Law applies to everything engineered, including all kinds of modules, [user] interfaces, and systems.

Ideally, incorrect usage should be impossible. For example, this is the case when the compiler will stop when detecting a mistake. And in the case of user interface design, a design is better when the user cannot make incorrect inputs as the given controls won't let them.

It is not always possible to design a system without mistakes. But as humans build and use systems, one should strive for such "fool-proof" designs.

Note that Murphy's Law also applies to every chunk of code. According to the Law, the programmer will make mistakes while implementing the system. So it is better to implement a simple design, as this will have fewer possibilities to make implementation mistakes. Furthermore, bug fixes will be necessary as current functionality is changed or enhanced as code is maintained. A design is better the fewer possibilities there are to introduce faults while doing maintenance work.


## How

This is a very general principle, so there is a large variety of possible strategies to adhere more to this principle, mainly depending on the given design problem:

  * Make use of static typing so that the compiler will report faults
  * Make the design simple, so there will be fewer implementation defects
  * Use automatic testing to find defects
  * Avoid duplication and manual tasks, so you don't forget necessary changes.
  * Use polymorphism instead of repeated switch statements
  * Use consistent naming throughout the design


## History

The exact wording and who exactly coined the term remains unknown. Nevertheless, it is stated that its origin is from an experiment with a rocket sled conducted by Edward A. Murphy and John Paul Stapp. During this experiment, a technician had wired some sensors incorrectly. Murphy - on recognizing the error - cursed the technician responsible and said, "If there is any way to do it wrong, he'll find it.". [^1]


## Further reading

  * http://wiki.c2.com/?MurphysLaw
  * https://en.wikipedia.org/wiki/Murphy%27s_law



[^1]: [Murphy's law origins](http://www.murphys-laws.com/murphy/murphy-true.html)


## Derivative work

> This work is a derivative of "Murphy's Law (ML)" by Christian Rehn, originally licensed under CC BY 4.0. The original version can be found [here](http://principles-wiki.net/principles:murphy_s_law?rev=1620763937).