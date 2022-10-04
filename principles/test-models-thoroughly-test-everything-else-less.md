+++
principle = "Test models thoroughly, test everything else less"
tags = ["front-end", "bug free", "practices"]
summary = ""
authors = ["AdamCraven"]
contributors = []
license = "CC BY-SA 4.0"
allow_dual_licensing_to_GPLv3 = true
original_source_is_canonical = false
crystalized = false
uid = "b2bc1159-640c-403c-8c1c-613888efa4a6"
+++
Testing is the foundation to bug free code. It reduces complexity by both codifying logic at a point in time when the logic is understood and allowing the engineer to trust the complexity has been captured. Additionally, they act as documentation of the code and as a safety net to changes.

One of the biggest problems with UI testing comes from not knowing where to draw the line between the different types of tests. Following these principles, it becomes simple:

* unit level: models and utility methods should aim to have near 100% code coverage because they are the core of the application you are building.
* component level: testing a group of components will have a few tests because the core logic has been tested, and confidence will be high.
* automated interaction tests (e.g., Selenium/Cypress) will lightly test the whole application and the component.

Why so little testing above the models and utility methods? Because if the application is entirely model-based, there will be very little logic outside of the models, most of it will be glue code, and it will be self-evident when it doesn't work and caught quickly in interaction tests.

```js
  isValidUser() {
    this.isFirstNameValid()
    && this.isLastNameValid()
    && this.isEmailAddressValid()
    && this.isDateOfBirthValid()
    && this.isAllRequiredFieldsPresent();
  }
```

To test the example code above, test the individual methods thoroughly (e.g. isFirstNameValid method) and then test the computed method (e.g., isValidUser) with a single test for each fail state of the method. You will have drastically increased confidence in the code as the complexity is encoded in the tests and the expected behavior for the code is explicitly written down.


## Dependent principles

* [Model all state in an application](https://principles.dev/p/model-all-state-in-an-application/) - This principle is dependent upon using this principle.