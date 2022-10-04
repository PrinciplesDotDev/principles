+++
principle = "Use default arguments instead of short circuiting or conditionals"
tags = ["variables", "code", "rule", "code review", "clean code", "clean code"]
summary = ""
authors = []
contributors = ["AdamCraven"]
license = "CC BY-SA 4.0"
allow_dual_licensing_to_GPLv3 = true
original_source = "https://github.com/ryanmcdermott/clean-code-javascript"
original_source_is_canonical = false
crystalized = false
uid = "f54b8b0f-f446-4cc9-9f98-50fe0bc844c2"
+++
Default arguments are often cleaner than short-circuiting. Be aware that if you use them, your function will only provide default values for undefined arguments. Other "falsy" values such as '', "", false, null, 0, and NaN, will not be replaced by a default value.

Bad:
```js
function createMicrobrewery(name) {
  const breweryName = name || "Hipster Brew Co.";
  // ...
}
```

Good:
```js
function createMicrobrewery(name = "Hipster Brew Co.") {
  // ...
}
```

## Derivative work

> This work is a derivative of "clean-code-javascript" by Ryan Mcdermott, originally licensed under MIT. The original version can be found [here](https://github.com/ryanmcdermott/clean-code-javascript/tree/3ff9eba6d460f31db8146762bade4fcc32626762).