
+++
Categories = ["Process"]
Description = ""
Tags = ["bug free"]
title = "Compute properties when possible"
+++

Computed (or Derived) properties are properties that return values only when they are accessed by reading other properties or functions.

## Why 

* Computed properties are easy to reason about. The relationships between properties are explicit and the ‘recipe’ for creating the property can be seen in the code where its method exists.
* There are less properties to set, so no bugs are created as a consequence of forgetting to do that.
* Finally, it is easy to unit test a computed property throughly and provide high levels of confidence in the code.

### Example

```
  class User {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstname} ${this.lastName}`;
    }
  }
```

## Exceptions

* Except in cases where performance is extremely critical, as runtime accessing of values is slightly slower

## Resources:

* Swift implementation of computed properties: https://docs.swift.org/swift-book/LanguageGuide/Properties.html#ID259
* VueJS explanation https://vuejs.org/v2/guide/computed.html



