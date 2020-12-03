+++
Categories = ["Process"]
Description = ""
Tags = ["bug free"]
title = "Separate your core logic from the framework"
principle = "Separate core logic from the framework"
description = ""
category = "Strategy"
tags = [""]
authors = ["github:AdamCraven"]
contributors = []
license = "CC BY-SA 4.0"
allow_dual_licensing_to_GPLv3 = true
crystalized = false
+++

Core logic that is related to solving a business or domain problem should exist outside of a framework.

The current framework used in the application shouldn't interfere with this this logic.

## Why

Core business logic code is the most valuable asset of the business. Integrating it into a framework means that once a framework changes, this asset is lost. Separating it from the framework allows the framework to change over time without throwing away that asset.

The framework is not created to solve your business problem. Frameworks are tools that provide a structured way of engineering and abstractions to make engineering easier. Using a new framework often means adopting the framework's principles and way of structuring your code at the expense of your own. And as the framework is not created to solve your particular problem, and it cannot know the best way to solve it.

Using both your team principles and the frameworks abstractions, you can solve your problem better than using a framework in it's entirety and can structure it in a more suitable way.

- Code comprehension is significantly easier, as it requires no special knowledge of the framework.
- Easy to test core logic, as it is not wrapped in a framework.

## How

The below example is taken from a redux framework example in which a reducer - a redux concept - is used to add a todo item to an object.

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
        // Core logic start
        {
          id: nextTodoId(state),
          text: action.payload,
          completed: false,
        },
        // Core logic end
      ];
    }
  }
}
```

Let's see how that would look if we still used the redux framework, but extracted the core logic into a separate piece:

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

Separated core logic:

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

## Resources

- Swift implementation of computed properties: https://docs.swift.org/swift-book/LanguageGuide/Properties.html#ID259
- VueJS explanation https://vuejs.org/v2/guide/computed.html

## Contributors

<a class="contributor" alt="Adam Craven" href="https://github.com/adamcraven">
  <img src="https://github.com/adamcraven.png?size=80" width="40">
</a>
