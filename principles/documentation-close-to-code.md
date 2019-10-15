
+++
Categories = ["Code Quality"]
Description = ""
Tags = ["documentation"]
title = "Documentation should be as close as it can be to the code"
+++

Documentation, in all forms, should be as close as it can be to the code.

The further away documentation is from the source of the code, the more *friction* will be created in understanding the code, the slower the teams output will be and the more likely it will go unmaintained.

There are many forms of documentation:

* IDEs - Documentation through autocompletion and inbuilt API tools.
* Comments - Explaining the purpose of the code (by convention, this already exists close to the code)
* Units tests - Understanding the interface of the code with concerete examples.
* Integration tests - Understanding of how the code works together with the rest of the application.
* General documentation - e.g. Readmes
* Generated documentation - Inter team documentation for using an API.
* Principle Driven Development - Documentation as to what principles the software team consider most important.

Note: Whilst good code should be self-documenting, it is not in itself classed as documentation.

**Example**

Unit tests should be next to the file that it is testing, not in a directory away from the source code.
Generated documentation should exist within the applicable logical grouping within a code base (e.g. within a mircoservice, module or app folder that it is most relevant to) and can be exported to an external wiki, rather than an external wiki edited away from the code base.
