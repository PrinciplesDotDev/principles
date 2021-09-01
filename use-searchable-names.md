+++
principle = "Use searchable names"
tags = ["variables", "code", "rule", "code review", "clean code"]
summary = ""
authors = []
contributors = ["AdamCraven"]
license = "CC BY-SA 4.0"
allow_dual_licensing_to_GPLv3 = true
original_source = "https://github.com/ryanmcdermott/clean-code-javascript"
original_source_is_canonical = false
crystalized = false
uid = "ef272889-c247-4879-882e-efd199ca9f53"
+++
We will read more code than we will ever write. It's important that the code we do write is readable and searchable. By not naming variables that end up being meaningful for understanding our program, we hurt our readers. Make your names searchable.

Bad:
```js
// What the heck is 86400000 for?
setTimeout(blastOff, 86400000);
```

Good:

```js
// Declare them as capitalized named constants.
const MILLISECONDS_PER_DAY = 60 * 60 * 24 * 1000; //86400000;

setTimeout(blastOff, MILLISECONDS_PER_DAY);
```
## Derivative work

> This work is a derivative of "clean-code-javascript" by Ryan Mcdermott, originally licensed under MIT. The original version can be found [here](https://github.com/ryanmcdermott/clean-code-javascript/tree/3ff9eba6d460f31db8146762bade4fcc32626762).