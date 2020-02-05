+++
Categories = ["Process"]
Description = ""
Tags = ["style"]
title = "Logic should be in the positive"
+++

Test units of code throughly, so less

## Why

* The cartesian product of
* The number of tests to cover the rest of the application is greatly reduced. Because

* If you have 10 tests to test a unit, might only need 5 tests something that brings the unit together.
* If you test the thing that brings the unit together, then you need to test

* Logic written in the positive can be comprehended more quickly. This is especially true when there are multiple negative statements.


## How

* Write logic that asks: Is this true?


## Content

```js
function convertToMegabytes(bytes) {

}

function convertToTime() {

}
```

Imagine a function
```js
function unitFormatter(unit) {
    if (isDate(unit)) {
        return convertToTime(unit);
    }

    if (isBytes(unit)) {
        return convertToBytes(unit)
    }

    if (isPercentage(unit) {
        return convertUnitsToPercentage()
    })
}
```

Tests unit formatter:

* Test isDate
* Test isDate failing
* Test convertToTime
* Test convertToTime failing
* Test isBytes
* Test isBytesFailing
* Test convertToBytes
* Test convertToBytes failing
* Test isPercentage
* Test isPercentage failing
* Test convertUnitToPercentage
* Test convertUnitToPercentage failing


```js
const data = {
    todos: [
        {content:"clean shoes", id:"todo1"},
        {content:"wash hair", id:"todo2"}
        {content:"brush teeth", id:"todo3"}
    ],
    users:[
        {
            username: "adam",
            location: "London"
        }
    ],
    permissions: [{
        id:"todo1",
        usernames: ["adam"],
    }, {
        id:"todo2",
        usernames:["adam"]
    }]
]}

```


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


----


Testing is the foundation to bug free code. It reduces complexity by codifying logic at a point in time when the logic is understood. Tests clear the mind of having to hold all the complexity. They act as a documentation of the code and as a safety net to changes.

One of the biggest problems with UI testing comes from not knowing where to draw the line between the different types of tests. Following these principles, it becomes simple:

unit level: models and utility methods should aim to have nearing 100% code coverage.
component level: testing a group of components will have a few tests.
automated interaction tests (e.g. using Selenium/Cypress): will lightly test the whole application and test the component (more on that next). Why so little testing above the models and utility methods? Because if the application is completely model-based, there will be very little logic outside of the models, most of it will be glue code and it will be very obvious when it doesn’t work and caught easily in interaction tests.
  isValidUser() {
    this.isFirstNameValid()
    && this.isLastNameValid()
    && this.isEmailAddressValid()
    && this.isDateOfBirthValid()
    && this.isAllRequiredFieldsPresent();
  }
To test the example code above, test the individual methods thoroughly (e.g. isFirstNameValid method) and then test the computed method (e.g. isValidUser) with a single test for each fail state of the method. Confidence in the code will be increased drastically. The complexity is encoded in the tests and expected behaviour for the code is explicitly written down.

---


## Exceptions

There are cases in which writing logic in the positive will make the code more difficult to understand. Especially logic that works by exclusion such as the below:

```js
// Return items that aren't trees
['tree','cat','dog'].filter(item => item !== 'tree');
// prints: ['cat','dog']
```

## Contributors

<a class="contributor" alt="Adam Craven" href="https://github.com/adamcraven"><img src="https://github.com/adamcraven.png?size=80" width="40"></a>
