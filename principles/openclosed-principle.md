+++
principle = "Open–closed principle"
tags = ["solid", "practices", "code", "team"]
summary = "Software entities should be open for extension, but closed for modification."
authors = ["Bertrand Meyer", "Robert C. Martin"]
contributors = ["AdamCraven"]
license = "CC BY-SA 4.0"
allow_dual_licensing_to_GPLv3 = true
original_source = "https://en.wikipedia.org/wiki/Open%E2%80%93closed_principle"
original_source_is_canonical = false
crystalized = false
uid = "db3f244b-8abd-4827-bc1a-34b6a62cbf73"
+++
In object-oriented programming, the open–closed principle states "software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification"; that is, such an entity can allow its behavior to be extended without modifying its source code.

The benefit to this is that it creates a layer of abstraction so implementations don't have to share the same code and encourages loose coupling.

## Meyer's open–closed principle

Bertrand Meyer is generally credited for having originated the term open–closed principle, which appeared in his 1988 book Object Oriented Software Construction.

A module will be said to be open if it is still available for extension. For example, it should be possible to add fields to the data structures it contains, or new elements to the set of functions it performs.
A module will be said to be closed if it is available for use by other modules. This assumes that the module has been given a well-defined, stable description (the interface in the sense of information hiding).

At the time Meyer was writing, adding fields or functions to a library inevitably required changes to any programs depending on that library. Meyer's proposed solution to this dilemma relied on the notion of object-oriented inheritance (specifically implementation inheritance):

A class is closed, since it may be compiled, stored in a library, baselined, and used by client classes. But it is also open, since any new class may use it as parent, adding new features. When a descendant class is defined, there is no need to change the original or to disturb its clients.

## Polymorphic open–closed principle

During the 1990s, the open–closed principle became popularly redefined to refer to the use of abstracted interfaces, where the implementations can be changed and multiple implementations could be created and polymorphically substituted for each other.

In contrast to Meyer's usage, this definition advocates inheritance from abstract base classes. Interface specifications can be reused through inheritance but implementation need not be. The existing interface is closed to modifications and new implementations must, at a minimum, implement that interface.

Robert C. Martin's 1996 article "The Open-Closed Principle" was one of the seminal writings to take this approach. In 2001 Craig Larman related the open–closed principle to the pattern by Alistair Cockburn called Protected Variations, and to the David Parnas discussion of information hiding.