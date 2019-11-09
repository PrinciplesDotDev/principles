
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

### Text Editor

The text editor, through autocomplete and IDE ***live code commenting*** (what is it precisely?), provides the closest documentation by listing APIs methods and. Using an IDE with the ability to do that and also using a language which makes that functionality easier (such as a static language).

### Comments

Commented code, that explains the purpose of the code. It can also be used to enrich generated documentation. If it is correctly formatted it can be used to generate accurate documentation. This is useful between bounded contexts (****tODO: EXPLAIN) or APIs between systems, as the documentation here should be thorough. This prevents the need for a separate file to document the API and the developer can evaluate quickly if the documentation is correct and will be spotted between code reviews.

### Unit tests

Unit tests are concrete examples of how to interact with the code. These examples act as some of the best documentation. They should be right next to the source code.



* IDEs - Documentation through autocompletion and inbuilt API tools.
* Comments - Explaining the purpose of the code (by convention, this already exists close to the code)
* Units tests - Understanding the interface of the code with concerete examples.
* Integration tests - Understanding of how the code works together with the rest of the application.
* General documentation - e.g. Readmes
* Generated documentation - Inter team documentation for using an API.
* Principle Driven Development - Documentation as to what principles the software team consider most important.

Note: Whilst good code should be self-documenting, it is not in itself classed as documentation.

### Example

Unit tests should be next to the file that it is testing, not in a directory away from the source code.
Generated documentation should exist within the applicable logical grouping within a code base (e.g. within a mircoservice, module or app folder that it is most relevant to) and can be exported to an external wiki, rather than an external wiki edited away from the code base.


## Contributors 

<a class="contributor" alt="Adam Craven" href="https://github.com/adamcraven"><img src="https://github.com/adamcraven.png?size=80" width="40"></a>
