+++
Categories = ["Process"]
Description = ""
Tags = ["bug free"]
title = "Business logic separate from the framework"
+++

Core logic that is related to solving a business problem should exist outside of the framework and by solved using native language constructs.

## Why

- The business logic is the most valuable asset of the business, separating it from the framework allows the framework to change over time, without having to throw away the asset.
- easy to test
- This will nearly always result in cleaner often have the effect of separating IO based tasks.
- Code comprehension of business logic requires no special knowledge of the framework apart from understanding the programming language
- You're building

## How

Following is taken from a react redux example. In this example, it is adding a todo item.

```js
function nextTodoId(todos) {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
  return maxId + 1;
}

function todosReducer(state = initialState, action) {
  switch (action.type) {
    case "todos/todoAdded": {
      return [
        ...state,
        {
          id: nextTodoId(state),
          text: action.payload,
          completed: false,
        },
      ];
    }
  }
}
```

The business logic of adding the todo item is inside the frameworks' state changing code called a reducer.

Which should be computed to produce an output:

```js
import { todo } from "./todo";

function todosReducer(state = initialState, action) {
  switch (action.type) {
    case "todos/todoAdded": {
      return todo.add(state, action.payload);
    }
  }
}
```

Separate business logic file:

```js
function nextTodoId(todos) {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
  return maxId + 1;
}

class todo {
  static add(todos, text) {
    const nextId = nextTodoId(todos);
    const newToDoEntry = {
      id: nextId,
      text: text,
      completed: false,
    };
    return { ...todos, newToDoEntry };
  }
}
```

## Exceptions

- **When performance is critical**. Computed properties are slower to access than values directly stored in memory.

## Resources

- Swift implementation of computed properties: https://docs.swift.org/swift-book/LanguageGuide/Properties.html#ID259
- VueJS explanation https://vuejs.org/v2/guide/computed.html

## Contributors

<a class="contributor" alt="Adam Craven" href="https://github.com/adamcraven">
  <img src="https://github.com/adamcraven.png?size=80" width="40">
</a>
