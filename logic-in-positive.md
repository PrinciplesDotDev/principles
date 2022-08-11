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

Logic should in general be asking the question "Is this true?" instead of "Is this not true?"

## Why

- Logic written in the positive can be comprehended more quickly. This is especially true when there are multiple negative statements.

## How

- Write logic that asks: Is this true?


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
    if (black || white) {
        return true;
    }
    return false;
}
```

### Don't be afraid to declare extra variables to satisfy this principle.


In the case below it's quite tricky to parse the intention:

```
    var isUserAuthorised = user.isAuthenticated() && user.role.hasAccess(route) // positive
    var userAdmin = user.role.admin() // positive

    if (!isUserAuthorised && !userAdmin) { // negative && negative
        return;
    }

}
```

It needs to ask the question in a negative way to see if the code can proceed.


The next example turns the logic to the positive

```
    var isUserAuthorised = user.isAuthenticated() && user.role.hasAccess(route); // positive
    var isUserUnauthorised = !isUserAuthorised; // negative, but variable definition (isUserUnauthorised) makes it obvious
    var userAdmin = user.role.admin(); //positive
    var userNotAdmin = !userAdmin; // negative,  but variable definition (userNotAdmin) makes it obvious


    if (isUserUnauthorised && userNotAdmin) { // positive && positive
        return;
    }

}

```

Many engineers would be tempted to take out the second `isUserUnauthorised` and `userNotAdmin` because it can be argued that there's "less code", but this is a false victory - it reduces clarity.

We're asking if this statement is true, even though the language indicates `isUserUnauthorised`, a negative statement (e.g. is user not authorised). We are literally asking "is it true that the user is unauthorised" versus "is it false that the user is authorized". It's a subtle difference, but comprehension is better. People take longer to process negative sentences than positive ones (Clark & Chase, 1972; Just & Carpenter, 1971, 1976; Carpenter & Just, 1975).

You may wonder if you could skip the `isUserAuthorized` variable and create the variable as `isNotUserAuthorised`?

You could, but then logic would not be in the positive:

```
var isUserUnauthorized = !user.isAuthenticated() && !user.role.hasAccess(route);
```

Which again is harder to comprehend, as it asks "Is it false the user is authenticated and is it false the user role doesn't have access to this route?"
