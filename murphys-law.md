+++
principle = "Murphy's law"
tags = ["epic"]
summary = "Whatever can go wrong will go wrong. So a solution is better the fewer possibilities there are for something to go wrong."
authors = [""]
contributors = ["crehn", "adamcraven"]
license = "CC BY-SA 4.0"
allow_dual_licensing_to_GPLv3 = true
original_source_is_canonical = false
crystalized = false
uid = "f8496ae6-e5fd-4f32-b261-c67a3a0cf874"
+++
Whatever can go wrong will go wrong. So a solution is better the fewer possibilities there are for something to go wrong.

## Why

Systems are built and used by humans. And humans inevitably make mistakes. This applies likewise to system design, implementation, verification, maintenance and use as all these tasks are (partly) carried out by humans.

The fewer possibilities there are that mistakes are made, the fewer there will be. As errors are generally undesirable, a design is better when there are fewer possibilities for something to go wrong.

##  Description

Although often cited as a fatalistic comment, Murphy's Law is not stating "that life is unfair". Instead, it is (or at least can be seen as) engineering advice to design everything in a way that avoids incorrect usage. This applies to everything that is engineered in some way and in particular also to all kinds of modules, (user) interfaces and systems.

Ideally, incorrect usage is impossible. For example, this is the case when the compiler will stop with an error if a particular mistake is made. And in the case of user interface design, a design is better when the user cannot make incorrect inputs as the given controls won't let them.

It is not always possible to design a system in such a way. But as humans build and use systems, one should strive for such "fool-proof" designs.

Note that Murphy's Law also applies to every chunk of code. According to the Law, the programmer will make mistakes while implementing the system. So it is better to implement a simple design, as this will have fewer possibilities to make implementation mistakes. Furthermore, as code is maintained, bug fixes will be necessary as current functionality is changed or enhanced. A design is better the fewer possibilities there are to introduce faults while doing maintenance work.




## How

This is a very general principle so there is a large variety of possible strategies to adhere more to this principle mainly depending on the given design problem:

  * Make use of static typing so that the compiler will report faults
  * Make the design simple, so there will be fewer implementation defects
  * Use automatic testing to find defects
  * Avoid duplication and manual tasks, so necessary changes aren't forgotten
  * Use polymorphism instead of repeated switch statements
  * Use the same mechanisms wherever reasonably possible
  * Use consistent naming and models throughout the design


## History

The exact wording and who exactly coined the term, remains unknown. Nevertheless, it is stated that its origin is from an experiment with a rocket sled conducted by Edward A. Murphy and John Paul Stapp. During this experiment, some sensors have been wired incorrectly. A more accurate quote might read something like this: "If there's more than one possible outcome of a job or task, and one of those outcomes will result in disaster or an undesirable consequence, then somebody will do it that way." A more detailed version of the history of the experiment and the Law can be found in (Nick T. Spark: [The Fastest Man on Earth](http://www.improb.com/airchives/paperair/volume9/v9i5/murphy/murphy0.html) . In: Annals of Improbable Research)) and Wikipedia.
