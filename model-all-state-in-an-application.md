+++
principle = "Model all state in an application"
tags = ["front-end", "bug-free", "practices"]
summary = "Create a structured representation of the system's state"
authors = ["AdamCraven"]
contributors = [""]
license = "CC BY-SA 4.0"
allow_dual_licensing_to_GPLv3 = true
original_source_is_canonical = false
crystalized = false
uid = "9c0353fe-47f3-4e72-946e-833d090aeab2"
+++
Create a structured representation of the system's state, usually as encapsulated objects, which humans can conceptually understand.

In a Model-View-Controller (MVC) application, the model is responsible for the application's state and non-UI-specific behavior.

A model (the M in MVC) holds the state, logic, and rules of an application, it exists independently of the UI. You could replace React with Vue, replace the DOM with an iPhone UI, and the application's logic would be untouched.

*Everything should be modeled.* There should be no state that exists within an application that goes un-modeled. Because when data is modeled, it creates structure in application. You can inspect, query, and interrogate it. When you view the model, you should be able to determine the structure and state of your application.

Modeling requires thought to design and a basic understanding of the domain of the application.

Depending on the framework used, the model may look very different from what is above, but the concept will always exist. An example of this is Redux, the React framework. There is no model in the classic sense, but it exists with the combination of the reducer, store, and state.


## Example

```js
// A basic User model in vanilla JS
class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  setFirstName (firstName) {
      this.firstName = firstName;
  }
  setLastName (lastName) {
      this.lastName = lastName;
  }
}
```

Or with a more functional approach:
```js
function setFirstName(userObject, firstName) {
    userObject.firstName = firstName;
    return userObject;
}
```


Some examples of the model concept in other languages and frameworks:

* [Django Models](https://docs.djangoproject.com/en/2.1/topics/db/models/)
* [Rails Active Record](https://guides.rubyonrails.org/active_record_basics.html)
[Simple Java Model](http://www.javapractices.com/topic/TopicAction.do?Id=187)
[Backbone JavaScript](http://backbonejs.org/#Model)

## Exceptions

* Avoiding time-based states, such as animations, can be a good idea. As this can add a lot of complexity.

## Further reading:

* [Types of Models](https://deviq.com/kinds-of-models/) - Types of modelling.
* [MVC, MVP, MVVM  Design Pattern](https://medium.com/@ankit.sinhal/mvc-mvp-and-mvvm-design-pattern-6e169567bbad) - Different patterns used in UI, not an exhaustive list.
* [ngWhatever - a Better Module structure for Angular](/a-better-module-structure-for-angular/) - An implementation of an advanced MVC design in classic angular.