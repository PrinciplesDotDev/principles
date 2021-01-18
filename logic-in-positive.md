+++
principle = "Logic should be in the positive"
summary = "Logic should in general be asking the question \"Is this true?\" instead of \"Is this not true?\""
category = "Process"
tags = ["style"]
license = "CC BY-SA 4.0"
allow_dual_licensing_to_GPLv3 = true
authors= []
contributors = ["AdamCraven"]
uid = "amber-finch-jordain"
+++

Logic should in general be asking the question "Is this true?" instead of "Is this not true?"

## Why

- Logic written in the positive can be comprehended more quickly. This is especially true when there are multiple negative statements.

## How

- Write logic that asks: Is this true?

## Content

### Example

The first statement written in the negative:

```js
isBlackOrWhite(black, white) => {
    if (!black && !white) {
        return false;
    }
    return true;
}
```

Then written in the positive:

```js
isBlackOrWhite(black, white) => {
    if (black && white) {
        return true;
    }
    return false;
}
```

## Exceptions

There are cases in which writing logic in the positive will make the code more difficult to understand. Especially logic that works by exclusion such as the below:

```js
// Return items that aren't trees
["tree", "cat", "dog"].filter((item) => item !== "tree");
// prints: ['cat','dog']
```
