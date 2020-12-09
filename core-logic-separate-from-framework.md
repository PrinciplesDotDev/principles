+++
principle = "Separate core logic from the framework"
description = "Core logic that is related to solving a business or domain problem should exist outside of a framework."
category = "Process"
tags = ["organization", "strategy"]
authors = ["github:AdamCraven"]
contributors = []
license = "CC BY-SA 4.0"
allow_dual_licensing_to_GPLv3 = true
crystalized = false
+++

Core logic that is related to solving a business or domain problem should exist outside of a framework.

## Why

- Core logic is the most valuable asset of the business. A framework change with the core logic integrated results in a loss of that asset. Separation from the framework keeps the asset whilst allowing the framework to change.
- Separating core logic lets you use your own principles instead of the frameworks. Frameworks provide structure and useful abstractions that make engineering easier. Yet, using a framework often means using its principles at the expense of your own.
- You can solve your business problem better. Because a framework is not created to solve your particular problem, it cannot know the best way to solve it.
- Code is easier to read. You only need to understand the programming language, not the framework.
- Code is easier to test. It is not wrapped in a framework's abstractions.

## How

The below example is from a redux framework in which a reducer - a redux concept - adds a todo item into the application:

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

Extracting the core logic, the framework code now looks like this:

```js
import { todoAdd } from "./todo";

function todosReducer(state = initialState, action) {
  switch (action.type) {
    case "todos/todoAdded": {
      return todoAdd(state, action.payload);
    }
  }
}
```

Core logic is then moved into a new file. Separate from the framework.

```js
function nextTodoId(todos) {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
  return maxId + 1;
}

function todoAdd(todos, text) {
  const nextId = nextTodoId(todos);
  const newToDoEntry = {
    id: nextId,
    text: text,
    completed: false,
  };
  return { ...todos, newToDoEntry };
}
```

## Exceptions

- If your core logic is trivial or has limited business value.

## Contributors

<a class="contributor" alt="Adam Craven" href="https://github.com/adamcraven">
  <img src="https://github.com/adamcraven.png?size=80" width="40">
</a>
