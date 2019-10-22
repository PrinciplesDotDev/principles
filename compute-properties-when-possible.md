+++
Categories = ["Process"]
Description = ""
Tags = ["bug free"]
title = "Compute properties when possible"
+++

Computed (or Derived) properties are properties that don't store values in memory, but return values when they are called by reading values from other properties or functions.

## Why

* Computed properties are easy to reason about. The relationships between properties are explicit and the ‘recipe’ for creating the property can be seen in the code where its method exists.
* There are less properties to set, so no bugs are created as a consequence of forgetting to do that.
* Computed properties lend themselves well to unit testing by having pre-defined inputs, which increases confidence in the code.

### Example


```js
class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  get fullName() {
      return `${this.firstName} ${this.lastName}`;
  }
}
```

fullname is computed by bringing together firstName and lastName. Fullname cannot be updated directly, either firstName or lastName must be updated.


## Exceptions

* Except in cases where performance is critical. As computed values are slower to access compared to values that are directly stored in memory.

## Resources

* Swift implementation of computed properties: https://docs.swift.org/swift-book/LanguageGuide/Properties.html#ID259
* VueJS explanation https://vuejs.org/v2/guide/computed.html


## Contributors

<a class="contributor" alt="Adam Craven" href="https://github.com/adamcraven">
  <img src="https://github.com/adamcraven.png?size=80" width="40">
</a>
