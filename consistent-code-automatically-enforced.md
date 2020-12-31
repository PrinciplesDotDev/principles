+++
principle = "Use consistent coding conventions, automatically enforced"
description = "Code should be formatted the same way and enforced automatically using tools."
category = "Process"
tags = ["organization", "strategy"]
authors = ["AdamCraven"]
contributors = []
license = "CC BY-SA 4.0"
allow_dual_licensing_to_GPLv3 = true
uid = "ivory-hornet-dolley"
+++

Code should be formatted the same way and enforced automatically using tools.

## Why

- Code is read much more often than it is written. The more familiar the conventions the less time is spent on code reviews, visual parsing and code comprehension.
- Code conventions are learned quickly. Automatic enforcement exposes the developer repeatedly to the same errors making learning comfortable and at their own pace.
- Less mistakes. Code errors are raised straight away. In some cases they are fixed automatically.
- Constrains choices. More focus on engineering problems rather than distracted by inconsistent code or uncommon language features.
- Reduces conflict. Minor decisions, such as spacing and formatting, no longer need to be debated.

## How

- Use a static language to prevent errors.
- Use a linter (e.g. eslint, python) or formatter (e.g. gofmt) to enforce standards.
- Adhere to common language conventions or standards (e.g. Python's pep8).
- In languages where a common convention hasn't been decided. Opt for popular third party configurations. There will be a higher chance that this will make third party libraries easier to read and the rules can be reduced to suit the teams preferences.
- Link tools to IDE/Editor for rapid feedback.

[//]: # "## Content"
[//]: # "Code is read much more often than it is written. So it should be that care it taken "
[//]: # "Consistent code helps everyone on the team by reducing. "
[//]: # "1. Show autofixing functionlity is eslint."
[//]: # "It is significantly harder as a team to decide on possibly unknown individual rules from scratch and build your own standard."
[//]: # "Gofmt's style is no one's favorite, yet gofmt is everyone's favorite."

## References

https://www.python.org/dev/peps/pep-0008/

## Contributors

<a class="contributor" alt="Adam Craven" href="https://github.com/adamcraven">
  <img src="https://github.com/adamcraven.png?size=80" width="40">
</a>
