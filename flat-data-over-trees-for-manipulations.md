+++
Categories = ["Process"]
Description = ""
Tags = ["style"]
title = "Logic should be in the positive"
+++

Data manipulations should happen with flat data structures, over complex tree-like data structures.


## Why

* Logic written in the positive can be comprehended more quickly. This is especially true when there are multiple negative statements.


## How

* Write logic that asks: Is this true?


## Content


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
            location:"London",
            permissions: ["todo1", "todo2"]
        }
    ]
]}
```


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


## Exceptions

There are cases in which writing logic in the positive will make the code more difficult to understand. Especially logic that works by exclusion such as the below:

```js
// Return items that aren't trees
['tree','cat','dog'].filter(item => item !== 'tree');
// prints: ['cat','dog']
```

## Contributors

<a class="contributor" alt="Adam Craven" href="https://github.com/adamcraven"><img src="https://github.com/adamcraven.png?size=80" width="40"></a>
