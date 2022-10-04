+++
principle = "Ensure UI components can be loaded separately from an application"
tags = ["front-end", "bug free", "practices"]
summary = ""
authors = ["AdamCraven"]
contributors = []
license = "CC BY-SA 4.0"
allow_dual_licensing_to_GPLv3 = true
original_source_is_canonical = false
crystalized = false
uid = "3bebda8d-9857-43e4-bcee-eb4962f58213"
+++
A component, which could be something as simple as a button or more complex - such as a video player - must load without the rest of the application. The most well-known versions of this concept are in the form of style guides or component libraries.

A couple of examples:

* [Lonely Planets Styleguide](https://rizzo.lonelyplanet.com/styleguide/ui-components/alerts)
* [Bootstrap](https://getbootstrap.com/docs/5.1/components/accordion/)

## Why

1. Encourages separation of concerns. Loading the component without loading the application ensures explicit dependencies and encourages good separation of concerns.
2. Interaction tests (e.g., using Selenium/Cypress) can be run on a component individually. The interaction tests are less brittle and can focus on the component rather than load the application and force it into the desired state before the tests run.
3. It allows quick discovery of unspecified states missed in the design specification. Toggling controls can view all states of the component, either with a debug UI such as [tweakpane](https://cocopon.github.io/tweakpane/) or a custom made one. It allows the discovery of unspecified states and is a quick way to test a component.
4. It speeds up development. You can do all initial development without having to load the rest of the application. The component can be loaded quickly, and the desired state can be configured or toggled. Compare this to the more common alternative: load up the whole app, navigate to that component and test each of its states by interacting with the application in pre-determined ways - which is much slower.
5. It provides excellent documentation. Having working examples of the component shows exactly how to load, use and configure the component. Combined with a debug UI, which exposes all of the component's intended configurations, it is the best documentation possible.

## How

* Use a library like https://storybook.js.org/ to load your components
* Create a separate bootstrapping (start-up script) HTML file where you can load up your component outside the application

## When to use

It's not always necessary to have a complete style guide. They are helpful in larger UI projects with larger respective budgets. What is essential is the ability to load the component independently without loading the rest of the application.
