+++
principle = "Don't add unneeded context"
tags = ["variables", "code", "rule", "code review", "clean code"]
summary = "Don't add the class/object names to properties"
authors = []
contributors = ["AdamCraven"]
license = "CC BY-SA 4.0"
allow_dual_licensing_to_GPLv3 = true
original_source = "https://github.com/ryanmcdermott/clean-code-javascript"
original_source_is_canonical = false
crystalized = false
uid = "0977e551-cf55-4497-acc7-91fd8f291eef"
+++

If your class/object name tells you something, don't repeat that in your variable name.

Bad:
```js
const Car = {
  carMake: "Honda",
  carModel: "Accord",
  carColor: "Blue"
};

function paintCar(car, color) {
  car.carColor = color;
}
```

Good:
```js
const Car = {
  make: "Honda",
  model: "Accord",
  color: "Blue"
};

function paintCar(car, color) {
  car.color = color;
}
```

## Why

* Context is already understood. You know that if you are in a class/object, adjusting the properties relate to that class/object.

## Derivative work

> This work is a derivative of "clean-code-javascript" by Ryan Mcdermott, originally licensed under MIT. The original version can be found [here](https://github.com/ryanmcdermott/clean-code-javascript/tree/3ff9eba6d460f31db8146762bade4fcc32626762).