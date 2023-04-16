+++
principle = "Logic should be in the positive"
summary = "Logic should ask, \"Is this true?\" instead of \"Is this not true?\""
tags = ["code", "comprehension", "cognitive", "individual", "focused","style", "practices"]
license = "CC BY-SA 4.0"
allow_dual_licensing_to_GPLv3 = true
authors= []
contributors = ["AdamCraven", "streamer45"]
uid = "amber-finch-jordain"
+++

Logic should ask, "Is this true?" instead of "Is this not true?"

## Why

People can comprehend logic written in a positive form more quickly. It takes longer to process negative sentences than positive ones (Clark & Chase, 1972; Just & Carpenter, 1971, 1976; Carpenter & Just, 1975) and only worsens when multiple negative statements exist.

## How

- [Write logic that asks: Is this true?](#write-logic-that-asks-is-this-true)
- [Avoid the word "Not"](#avoid-the-word-not)
- [When using negative statements, put them as a value - after the variable](#when-using-negative-statements-put-them-as-a-value-after-the-variable)
- [Avoid double-negative logic by using additional variables](#avoid-double-negative-logic-by-using-additional-variables)

### Write logic that asks: Is this true?

The first statement is written in the negative:

```js
function isBlackOrWhite(black, white) {
    if (!black && !white) {
        return false;
    }
    return true;
}
```


The statement's logic in plain English is: "not black and not white". These are two negative statements, which further increases the difficulty in understanding.

We can write this in the positive form, and the meaning becomes far clearer:

```js
function isBlackOrWhite(black, white) {
    if (black || white) {
        return true;
    }
    return false;
}
```

### Avoid the word "Not"

Not creates an inversion that is harder to understand. You should avoid using not and instead use words that are more precise in their meaning.



`isNotValid` -> `isInvalid`<br>
`isDeliveryNotOnTime` -> `isDeliveryLate`<br>
`isUserNotAdmin` -> `isUserNonAdmin` or `isUserUnprivileged`<br>




### When using negative statements, put them as a value - after the variable

You cannot avoid negative statements, as logic is often about exclusion. Variables also need to be defined in a way that meets your needs. Instead, you can move the negative logic to after the variable definition (the value):


`variable = !value` <br>


Do this:

```python
invalid = not self.is_valid()

if invalid:
	return
```

Or do this:

```python
valid = self.is_valid()
invalid = not valid

if invalid:
	return
```

But don't do this:

```python
valid = self.is_valid()

if not valid:
	return
```

### Avoid double-negative logic by using additional variables.

Moving negative logic after the variable definition can create double-negative logic. You can avoid double negative logic by first writing the logic in the positive, then inverting the result to a negative with an additional variable.

`variable1 = value && value` <br>
`variable2 = !variable1` <br>


Do this:

```python
valid = self.is_valid() and self.is_valid_in_external_validator() # two positive statements
invalid = not valid # A single negative statement

if invalid:
	return

```

Don't do this:

```python
invalid = not self.is_valid() or not self.is_valid_in_external_validator()  # double-negative statement

if invalid:
	return

```