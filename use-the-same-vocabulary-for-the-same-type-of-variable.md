+++
principle = "Use the same vocabulary for the same type of variable"
tags = ["variables", "code", "rule", "code review", "clean code"]
summary = ""
authors = []
contributors = ["AdamCraven"]
license = "CC BY-SA 4.0"
allow_dual_licensing_to_GPLv3 = true
original_source = "https://github.com/ryanmcdermott/clean-code-javascript"
original_source_is_canonical = false
crystalized = false
uid = "ecad0aa7-3006-4244-9e9d-961e32652db4"
+++
----

Bad:
```js
getUserInfo();
getClientData();
getCustomerRecord();
getPersonDateOfBirth();
```
Good:
```js
getUser();
getUserDateOfBirth();
```

## Why

* Using the same vocabulary creates clarity and understanding
* Reduces confusion

## Derivative work

> This work is a derivative of "clean-code-javascript" by Ryan Mcdermott, originally licensed under MIT. The original version can be found [here](https://github.com/ryanmcdermott/clean-code-javascript/tree/3ff9eba6d460f31db8146762bade4fcc32626762).