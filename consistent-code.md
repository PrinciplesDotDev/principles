+++
Categories = ["Code Quality"]
Description = ""
Tags = [""]
title = "Use Consistent Coding Conventions, automatically enforced"
+++

Code should be formatted the same way across a team and enforced automatically using tools.

## Why

* Code is more familiar. Code reviews, visual parsing and code comprehension all become easier.
* Less thinking required. New developers can adapt to coding standards straight away without knowing them, existing developers don't have to remember them.
* Learning happens rapidly. Coding conventions automatically enforced will expose the developer repeatedly to the same errors making learning comfortable and at their own pace.
* Less mistakes. Code errors are raised straight away. In some cases they are fixed automatically.
* Constrains choices. When there is less choice available, the team will be able to focus better at the task at hand.
* Reduces conflict. Pre-defined rules remove conflict from minor decisions such as spacing and formatting issues.

## How

* Use a static language to prevent errors.
* Use a linter (e.g. eslint, python) or formatter (e.g. gofmt).
* Adhere to common language conventions or standards (e.g. Python's pep8).
* In languages where a common convention hasn't been decided. Opt for popular third party configurations. There will be a higher chance that this will make third party libraries easier to read and the rules can be reduced to suit the teams preferences. It is significantly harder as a team to decide on possibly unknown individual rules from scratch than build your own standard.
* Ensure errors are raised in the IDE
* Enable all autofixing functionality such as "fix on save".
* Use advanced tools such a code cyclomatic complexity analysis to help further guide code consistency.

 
## Content

1. Show autofixing functionlity is eslint.


"Gofmt's style is no one's favorite, yet gofmt is everyone's favorite."


## Contributors

<a class="contributor" alt="Adam Craven" href="https://github.com/adamcraven">
  <img src="https://github.com/adamcraven.png?size=80" width="40">
</a>
