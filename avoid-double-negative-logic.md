+++
principle = "Avoid double negative logic"
description = "Conditional logic should avoid double negatives."
category = "Code Quality"
tags = ["logic"]
license = "CC BY-SA 4.0"
allow_dual_licensing_to_GPLv3 = true
authors= []
contributors = ["AdamCraven"]
uid = "rose-crab-celine"
+++

Conditional logic should avoid double negatives. e.g., "Is this not not true?"

## Why

- Double negatives are hard to comprehend.

## How

- Write logic that asks: Is this true. Instead of: Is this not not true?

## Example

A double negative conditional, which is hard to understand:

```js
if (!isNotSelected) {
    ...
```

Then written in the positive:

```js
if (isSelected) {
   ...
```

## References

- https://derickbailey.com/2014/03/27/double-negatives-in-code-dont-not-avoid-double-negative-boolean-logic/
- https://refactoring.com/catalog/removeDoubleNegative.html
- https://principles.dev/p/logic-in-positive/
