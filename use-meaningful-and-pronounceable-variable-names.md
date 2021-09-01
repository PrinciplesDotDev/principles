+++
principle = "Use meaningful and pronounceable variable names"
tags = ["variables", "code", "team", "code review", "clean code"]
summary = ""
authors = []
contributors = ["AdamCraven"]
license = "CC BY-SA 4.0"
allow_dual_licensing_to_GPLv3 = true
original_source = "https://github.com/ryanmcdermott/clean-code-javascript#use-meaningful-and-pronounceable-variable-names"
original_source_is_canonical = false
crystalized = false
uid = "c028bb1b-d37b-48f3-a7cb-926e107df80c"
+++
----
Bad:

```js
const yyyymmdstr = moment().format("YYYY/MM/DD");
```

Good:
```js
const currentDate = moment().format("YYYY/MM/DD");
```

## Why

* Increases understanding
* Lowers cognitive load

## Derivative work

> This work is a derivative of "clean-code-javascript" by Ryan Mcdermott, originally licensed under MIT. The original version can be found [here](https://github.com/ryanmcdermott/clean-code-javascript/tree/3ff9eba6d460f31db8146762bade4fcc32626762?#use-meaningful-and-pronounceable-variable-names).