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

## How 

Convert the following properties to computed properties.

* Properties that rely on two or more external properties to produce an output
* Properties that when written produce a different output to what the receiving function was given.

If a property is modified by an external function before it is saved. It can be computed on read instead by computing 

#### Example: Property that relies upon two or more external properties

```js
class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  get fullName() { // Computed property
      return `${this.firstname} ${this.lastName}`;
  }
}
```

#### Example: Property modified by an external function before save

Properties are saved on write:
```js
class Product {
  setWeight(weightInGrams) {
    this.weightInGrams = weightInGrams;
    this.weightInKg = convertToKg(weightInGrams);
    this.weightInPounds = convertToPounds(weightInGrams);
  }
}
```

Properties are created on read:
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

* **When performance is critical**. Computed properties are slower to access than values directly stored in memory.

## Resources:

* Swift implementation of computed properties: https://docs.swift.org/swift-book/LanguageGuide/Properties.html#ID259
* VueJS explanation https://vuejs.org/v2/guide/computed.html


## Contributors:

<a class="contributor" alt="Adam Craven" href="https://github.com/adamcraven">
  <img src="https://github.com/adamcraven.png?size=80" width="40">
</a>