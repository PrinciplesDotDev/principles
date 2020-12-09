+++
principle = "Compute properties when possible"
description = ""
category = "Process"
tags = ["bug free"]
authors = ["github:AdamCraven"]
contributors = []
license = "CC BY-SA 4.0"
allow_dual_licensing_to_GPLv3 = true
+++

Computed (or Derived) properties are properties that don't store values in memory, but return values when they are called by reading values from other properties or functions.

## Why

- Computed properties are easy to reason about. The relationships between properties are explicit and the ‘recipe’ for creating the property can be seen in the code where its method exists.
- There are less properties to set, so no bugs are created as a consequence of forgetting to do that.
- Computed properties lend themselves well to unit testing by having pre-defined inputs, which increases confidence in the code.
- When upstream data changes, dependent downstream computed data will automatically be set into the correct state.

## How

The following properties can be converted to computed properties:

### Properties that rely on bringing together more than one property to return a value.

In this example, the 'fullName' property relies on firstName and lastName to return a value.

```js
class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = `${firstName} ${lastName}`;
  }
}
```

Which should be computed to produce an output:

```js
class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  get fullName() {
    // Computed property
    return `${this.firstname} ${this.lastName}`;
  }
}
```

### Properties that are transformed before they are saved

Properties that are adjusted before they are saved on a write:

```js
class Product {
  setWeight(weightInGrams) {
    this.weightInGrams = weightInGrams;
    this.weightInKg = convertToKg(weightInGrams);
    this.weightInPounds = convertToPounds(weightInGrams);
  }
}
```

Should instead become properties that are computed on read:

```js
class Product {
  setWeight(weightInGrams) {
    this.weightInGrams = weightInGrams;
  }
  get weightInKg() {
    return convertToKg(this.weightInGrams);
  }
  get weightInPounds() {
    return convertToPounds(this.weightInGrams);
  }
}
```

## Exceptions

- **When performance is critical**. Computed properties are slower to access than values directly stored in memory.

## Resources

- Swift implementation of computed properties: https://docs.swift.org/swift-book/LanguageGuide/Properties.html#ID259
- VueJS explanation https://vuejs.org/v2/guide/computed.html

## Contributors

<a class="contributor" alt="Adam Craven" href="https://github.com/adamcraven">
  <img src="https://github.com/adamcraven.png?size=80" width="40">
</a>
