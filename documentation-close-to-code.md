
+++
Categories = ["Code Quality"]
Description = ""
Tags = ["documentation"]
title = "Documentation should be as close as it can be to the code"
+++

Documentation, in all forms, should be as close as it can be to the code.

## Why

The further away documentation is from the source of the code as more *friction* is created in understanding the code, this will also slow down the teams output.

* If the documentation is not readily accessible, it will be used less and the more likely it will go unmaintained.


## How


To understand how it can be done, we need to look a the different levels of documentation, starting close to the code can getting further away.

### Text Editor - Use IDE features.

The text editor, through autocomplete and IDE ***live code commenting*** (what is it precisely?), provides the closest documentation by listing APIs methods and. Using an IDE with the ability to do that and also using a language which makes that functionality easier (such as a static language).

### Comments - Explains purpose of code and can be used for generated documention.

Commented code, that explains the purpose of the code. It can also be used to enrich generated documentation. If it is correctly formatted it can be used to generate accurate documentation. This is useful between bounded contexts (****tODO: EXPLAIN) or APIs between systems, as the documentation here should be thorough. This prevents the need for a separate file to document the API and the developer can evaluate quickly if the documentation is correct and will be spotted between code reviews.

### Unit tests - Live next to the files being tested.

Unit tests are concrete examples of how to interact with the code. These examples act as some of the best documentation available. They should be right next to the source code. It also provides the additional benefit of being able to see which files have tests or don't have tests.

### Integration tests - Sit within the module or application level.

Integration tests provide information on how the code should from a user perspective (e.g. selenium). Integration tests that relate to a single module, should be grouped with that module if that module can be run as a standalone "widget". Integration tests more commonly test the interaction of multiple modules interacting together and should be grouped with the application itself.

### General documentation - Be next to an applicable grouping.

General documentation, which is often seen on open source projects as README.md files, which are commonly written in markdown format should exist within the applicable logical grouping within a code base (e.g. a module or app folder that it is most relevant to). It is common to see README.md files at the top level of a project, but they can exist at any level. One side effect is the highest level README.md tends to either reference or link to lower level README.md files which contain more in depth documentation which is closer to the code.

### External documentation - Should be generated from the project.

External documentation, used for communicating to people external of your team, should exist within the applicable logical grouping within a code base (e.g. a module or app folder that it is most relevant to) and can be exported to an external wiki, rather than an external wiki edited away from the code base.


## Terms

* Define Module:


## Contributors 

<a class="contributor" alt="Adam Craven" href="https://github.com/adamcraven"><img src="https://github.com/adamcraven.png?size=80" width="40"></a>
