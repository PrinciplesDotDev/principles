+++
principle = "Documentation should be close to the code"
summary = "Documentation, in all forms, should be as close as it can be to the code."
tags = ["documentation", "code", "practices"]
license = "CC BY-SA 4.0"
allow_dual_licensing_to_GPLv3 = true
authors= ["AdamCraven"]
contributors = []
uid = "teal-beaver-sandye"
+++
Documentation, in all forms, should be as close as it can be to the code.

## Why

- You will use the documentation. Less _friction_ equals more use. The further away documentation is, the less likely you will use it.
- Higher accuracy. As it is readily accessible for developers to edit.
- Up to date. Documentation checked in with the code will be applicable for that version of the code.

## How

- Keep the documentation with the source code.
- Use tools to generate external documentation from within the project rather than creating external wikis.

## Article

The goal is to bring documentation as close to the code as possible while maintaining a grouping that makes sense.

Below are specific examples of how this can be achieved in each area, starting close to the code and getting further away.

### Your Editor - Use IDE features

Use an editor with code completion, parameter info, quick info, and member lists. It provides the closest documentation by assisting a developer during the writing of code.

An example is Visual Studio Code's Intellisense: https://code.visualstudio.com/docs/editor/intellisense

### Comments - Next to the code

Commented code is a natural application of this principle that most developers naturally do.

You can **generate accurate documentation** from commented code. It means there will be no need for separate files to document the API. Additionally, it will more often be seen, referred to, and monitored (e.g., during code review), increasing the chance someone will keep it to date.

### Unit tests - Next to the code files

Unit tests are not just tests, but documentation, some of the best forms of documentation. Your tests should be next to the source code file. It also provides an additional benefit of being able to see which files have already got tests.

### Isolated components - Next to the component


Isolated components are components that are loaded separately from an application. They are clear examples of how you can use components. As with unit tests, they act as some of the best documentation available. It explicitly shows the dependencies, how the component works and what options are available for configuring the component.

Put them in the same folder as the component, don't separate them. Using a library like https://storybook.js.org/

### Integration tests - Within the module or application

Integration tests (http://softwaretestingfundamentals.com/integration-testing/), test the interaction of more than one module, often using a tool such as selenium or cypress. Integration tests related to a single module should exist next to that module if the module can be run standalone. Integration tests more commonly test the interaction of multiple modules interacting together and should be grouped with the application folder.

### General documentation - Within the codebase

General documentation should be next to the code. A typical implementation is README.md files in markdown format. They should exist within the applicable logical grouping within a codebase (e.g., a module or app folder that is most relevant). It is common to see README.md files at the top level of a project, but they can exist at any level. The top-level README.md can act as an index which references or links to other README.md files within folders below.

### External documentation - generated from the project

External documentation - used for communicating to people external of your team - should exist within a codebase where possible and then exported to an external wiki or a generated web page rather than an external wiki edited away from the codebase.
