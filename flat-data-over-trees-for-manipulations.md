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
        },
        {
            username: "max",
            location:"London",
            permissions: ["todo3"]
        }
    ]
]}


const user = getUser() // adam
const visibleTodos = todos.get(user.permissions)

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
        },
        {   username: "max",
            location: "New York"
        }
    ],
    permissions: [{
        todo:"todo1",
        username: "adam",
    }, {
        todo:"todo2",
        username:"adam",
    }]
]}

const user = getUser() // adam
const perrmissionedTodos = data.permissions
    .filter((permission) => permissions.username === user))
    .map((permission) => (permission.todo))

const visibleTodos = todos.get(permissionedTodos)




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
