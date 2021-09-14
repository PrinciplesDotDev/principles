+++
principle = "Function arguments, ideally use 2 or fewer"
tags = ["functions", "code", "rule", "code review", "javascript", "clean code"]
summary = ""
authors = []
contributors = ["AdamCraven"]
license = "CC BY-SA 4.0"
allow_dual_licensing_to_GPLv3 = true
original_source = "https://github.com/ryanmcdermott/clean-code-javascript"
original_source_is_canonical = false
crystalized = false
uid = "23ca8406-6aec-4cd0-894d-04f3f9b84f99"
+++
Limiting the number of function parameters is incredibly important because it makes testing your function easier. Having more than three leads to a combinatorial explosion where you have to test tons of different cases with each separate argument.

One or two arguments is the ideal case, and you should avoid three if possible. You should consolidate anything more than that. Usually, if you have more than two arguments, then your function is trying to do too much. In cases where it's not, a higher-level object will suffice as an argument most of the time.

Since JavaScript allows you to make objects on the fly without a lot of class boilerplate, you can use an object if you are finding yourself needing a lot of arguments.

To make it obvious what properties the function expects, you can use the ES2015/ES6 destructuring syntax. This has a few advantages:

1. When someone looks at the function signature, it's immediately apparent what properties you are using.
2. You can use it to simulate named parameters.
3. Destructuring also clones the specified primitive values of the argument object passed into the function. This can help prevent side effects. Note: objects and arrays that are destructured from the argument object are NOT cloned.
4. Linters can warn you about unused properties, which would be impossible without destructuring.


Bad:
```js
function createMenu(title, body, buttonText, cancellable) {
  // ...
}

createMenu("Foo", "Bar", "Baz", true);
```

Good:
```js
function createMenu({ title, body, buttonText, cancellable }) {
  // ...
}

createMenu({
  title: "Foo",
  body: "Bar",
  buttonText: "Baz",
  cancellable: true
});
```

## Derivative work

> This work is a derivative of "clean-code-javascript" by Ryan Mcdermott, originally licensed under MIT. The original version can be found [here](https://github.com/ryanmcdermott/clean-code-javascript/tree/3ff9eba6d460f31db8146762bade4fcc32626762).