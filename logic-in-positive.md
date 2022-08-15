+++
principle = "Logic should be in the positive"
summary = "Logic should in general be asking the question \"Is this true?\" instead of \"Is this not true?\""
tags = ["style", "practices"]
license = "CC BY-SA 4.0"
allow_dual_licensing_to_GPLv3 = true
authors= []
contributors = ["AdamCraven", "streamer45"]
uid = "amber-finch-jordain"
+++


Logic should be asking the question, "Is this true?" instead of "Is this not true?"

## Why

Logic written in the positive can be comprehended more quickly. People take longer to process negative sentences than positive ones (Clark & Chase, 1972; Just & Carpenter, 1971, 1976; Carpenter & Just, 1975). This is especially true when there are multiple negative statements.  Thus it increases clarity and reduces cognitive load.


## How

- Write logic that asks: Is this true?


The first statement is written in the negative:

```js
function isBlackOrWhite(black, white) {
    if (!black && !white) {
        return false;
    }
    return true;
}
```
The if statement is asking if it is "not black and not white.". Adding in the and operator further increases the difficulty in understanding.

Then written in the positive:

```js
function isBlackOrWhite(black, white) {
    if (black || white) {
        return true;
    }
    return false;
}
```

The if statement is asking the question "Is it black or white?"

### Don't be afraid to declare extra variables to satisfy this principle.


In the case below, there's some logic that will prevent the next part of the function from executing. However, it's quite tricky to parse the intention:

```js
var isUserAuthorised = user.isAuthenticated() && user.role.hasAccess(route) // positive
var userAdmin = user.role.admin() // positive

if (!isUserAuthorised || !userAdmin) { // negative and negative
    return;
}

```

It's asking the question in a negative way to see if the code can proceed.

In the next example, we turn the logic into the positive. This drastically increases clarity:

```js
var isUserAuthorised = user.isAuthenticated() && user.role.hasAccess(route); // positive
var isUserUnauthorised = !isUserAuthorised; // negative, but variable definition clarifies
var userAdmin = user.role.admin(); //positive
var userNotAdmin = !userAdmin; // negative,  but variable definition clarifies

if (isUserUnauthorised && userNotAdmin) { // positive && positive
    return;
}

```

We've added the variables `isUserAuthorized` and `userNotAdmin` for the sake of clarity. Many engineers would be tempted to take out the second `isUserUnauthorised` and `userNotAdmin` because it can be argued that there's "less code", but fewer lines of code isn't a benefit because it reduces clarity.

In this second example, we're asking if this statement is true, even though the language indicates `isUserUnauthorised`, a negative statement (e.g. is the user not authorised). We are literally asking, "is it true that the user is unauthorised" versus "is it false that the user is authorized". It's a subtle difference, but comprehension is better as people take longer to process negative sentences than positive ones (Clark & Chase, 1972; Just & Carpenter, 1971, 1976; Carpenter & Just, 1975).

You may wonder if you could skip the `isUserAuthorized` variable and create the variable as `isNotUserAuthorised` from the beginning?

You could, but then you would complicate the variable definition as logic would not be in the positive:

```js
var isUserUnauthorized = !user.isAuthenticated() && !user.role.hasAccess(route); // negative and negative
```

Which again is harder to comprehend, as it asks, "Is it false the user is authenticated and is it false the user role doesn't have access to this route?"
