+++
principle = "Murphy's law - design for errors"
tags = [""]
summary = ""
authors = [""]
contributors = [""]
license = "CC BY-SA 4.0"
allow_dual_licensing_to_GPLv3 = true
original_source_is_canonical = false
crystalized = false
uid = "f8496ae6-e5fd-4f32-b261-c67a3a0cf874"
+++
Whatever can go wrong, will go wrong. So a solution is better the less possibilities there are for something to go wrong.


##  Description

Although often cited like that, Murphy's Law actually is not a fatalistic comment stating "that life is unfair". Rather it is (or at least can be seen as) engineering advice to design everything in a way that avoids wrong usage. This applies to everything that is engineered in some way and in particular also to all kinds of [[glossary:modules]], (user) interfaces and systems.

Ideally an incorrect usage is strictly impossible. For example this is the case when the compiler will stop with an error if a certain mistake is made. And in the case of user interface design, a design is better when the user cannot make incorrect inputs as the given controls won't let him.

It is not always possible to design a system in such a way. But as systems are built and used by humans, one should strive for such "fool-proof" designs.

Note that Murphy's law also applies to every chunk of code. According to the paw the programmer will make mistakes while implementing the system. So it is better to implement a simple design, as this will have fewer possibilities to make implementation mistakes. Furthermore code is maintained. Bugfixes will be necessary present functionality will be changed and enhanced, so every piece of code will potentially be touched in future. So a design is better the fewer possibilities there are to introduce faults while doing maintenance work.


## Why

Systems are built and used by humans. And as humans always will make mistakes, there always will be some possibilities for a certain mistake. So if some mistake is possible, eventually there will be someone who makes this mistake. This applies likewise to system design, implementation, verification, maintenance and use as all these tasks are (partly) carried out by humans.

This means the fewer possibilities there are that a mistake is made, the fewer there will be. As mistakes are generally undesirable, a design is better when there are fewer possibilities for something to go wrong.

## Strategies

This is a very general principle so there is a large variety of possible strategies to adhere more to this principle largely depending on the given design problem:

  * Make use of static typing, so the compiler will report faults
  * Make the design simple, so there will be fewer implementation defects (see [[Keep It Simple Stupid]])
  * Use automatic testing to find defects
  * Avoid duplication and manual tasks, so necessary changes are not forgotten (see [[Don't Repeat Yourself]])
  * Use polymorphism instead of repeated switch statements
  * Use the same mechanisms wherever reasonably possible (see [[Uniformity Principle]])
  * Use consistent naming and models throughout the design (see [[Model Principle]])
  * ...


## History

The exact wording and who exactly coined the term, remains unknown. Nevertheless it can be stated that its origin is an experiment with a rocket sled conducted by Edward A. Murphy and John Paul Stapp. During this experiment some sensors have been wired incorrectly. A more accurate quote might read something like this: "If there's more than one possible outcome of a job or task, and one of those outcomes will result in disaster or an undesirable consequence, then somebody will do it that way." A more detailed version of the history of the experiment and the law can be found in ((Nick T. Spark: [[http://www.improb.com/airchives/paperair/volume9/v9i5/murphy/murphy0.html|The Fastest Man on Earth]]. In: Annals of Improbable Research)) and Wikipedia.


===== Evidence =====


  * The principle is widely known and its validity is assumed. Nevertheless, sometimes it is rather used as a kind of joke instead of design advice. See for example Jargon File: [Murphy's Law](http://www.catb.org/jargon/html/M/Murphys-Law.html)

===== Example =====

==== Example 1: Parameters ====

Suppose there are two methods of a string class ''replaceFirst()'' and ''replaceAll()'' which replace the first or all occurrences of a certain substring, respectively.

The following method signatures are a bad choice:
<code java>
replaceFirst(String pattern, string replacement)
replaceAll(String replacement, string pattern)
</code>
Eventually someone will mix up the order of the parameters leading to a fault in the software which is not detectable by the compiler.

So it is better to make parameter lists consistent:
<code java>
replaceFirst(String pattern, string replacement)
replaceAll(String pattern, string replacement)
</code>
This is less error prone. When for example a call to ''replaceFirst()'' is replaced by a call to ''replaceAll()'', one cannot forget to exchange the parameters anymore. This is how is is done in the [[http://docs.oracle.com/javase/7/docs/api/java/lang/String.html#replaceFirst(java.lang.String, java.lang.String)|Java API]].

But here still one could mix up the two string parameters. Although this is less likely, as having the substring to look for first is "natural", such a mistake is still possible. An alternative would be the following:
<code java>
replaceFirst(Pattern pattern, string replacement)
replaceAll(Pattern pattern, string replacement)
</code>
Here both methods expect a ''Pattern'' object instead of a regular expression expressed in a string. Mixing up the parameters is impossible in this case as the compiler would report that error. On the other hand using these methods becomes a bit more complicated:
<code java>
"This are a test.".replaceFirst(new Pattern("are"), "is");
</code>
((Note that in the Java API it would rather be ''Pattern.compile()'' instead of ''new Pattern()''; see [[http://docs.oracle.com/javase/7/docs/api/java/util/regex/Pattern.html|Java API: Pattern]]))
instead of
<code java>
"This are a test.".replaceFirst("are", "is");
</code>
The [[Keep It Simple Stupid|KISS-Principle]] is about this disadvantage.

==== Example 2: Casts and Generics ====

Another example for the application of Murphy's Law would be the avoidance of typecasts:

<code java>
List l = new ArrayList();
l.add(5);
return (Integer)l.get(0) * 3;
</code>

This works but it makes a cast necessary and every cast circumvents type checking by the compiler. This means it is theoretically possible that during maintenance someone will make a mistake and store a value other than Integer in the list:
<code java>
l.add("7");
</code>
Murphy's Law claims that however unlikely such a mistake might seem, eventually someone will make it. So it is better to avoid it. In this case this could be done using Generics:
<code java>
List<Integer> l = new ArrayList<Integer>();
l.add(5);
return l.get(0) * 3;
</code>
Here this mistake is impossible as the compiler only allows storing integers.

Note that the typecast is rather a symptom than the actual problem here. The problem is, that the ''List'' interface is not generic and the symptom is the typecast. The reason for this flaw is, that the ''List'' interface predates the introduction of generics in Java.


===== Description Status =====
/* Choose one of the following and comment out the rest: */
/*[[wiki:Stub]]*/
/*[[wiki:Incomplete]]*/
[[wiki:Complete]]


===== Further Reading =====

  * [[wp>Murphy's Law]]
  * [[wiki>MurphysLaw]]