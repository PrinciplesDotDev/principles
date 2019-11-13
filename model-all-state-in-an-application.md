

+++
Categories = ["Process"]
Description = "Test Description"
Tags = ["mvc", "model", "store"]
title = "Model all state in an application"
+++

A model (the M in MVC) holds the state, logic and rules of an application, it should ideally exist independently of the backend or front-end framework. You could replace a web app with an iOS app and the logic of the modelling layer would be the same.

All state should be modelled because modeling

The model is distilled knowledge - It records information and teachings within an area that is easy to find.

The model is an object - It has properties and methods that can be visualised as an entity, which makes conceptualisation of the program easier.


```
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
    get fullName() {
      return `${this.fullname} ${this.lastname}`;
    }
  }
```


There are many many types of models:

* Domain model - Captures the domain knowledge of the business, which is updated as business knowledge increases.
* View model - Encapsulates view information for the domain name.
* Data Model

Depending on the framework used, the model may look very different to what is above, but the concept will always exist. An example of this is Redux, the React framework. There is no model in the classic sense, but combining the reducer, store and state, the concept of the model exists there - Although in this case,

Some examples of the model concept in other languages and frameworks:

<ul>
<li><a href="https://docs.djangoproject.com/en/2.1/topics/db/models/" title="python models">Django Models</a></li>
<li><a href="https://guides.rubyonrails.org/active_record_basics.html" title="rails active record models">Rails Active Record</a></li>
<li><a href="http://www.javapractices.com/topic/TopicAction.do?Id=187" title="Java Model">Simple Java Model</a></li>
<li><a href="http://backbonejs.org/#Model" title="Backbone models">Backbone JavaScript</a></li>
</ul>

Further reading:

* [Types of Models](https://deviq.com/kinds-of-models/) - Types of modelling.
* [MVC, MVP, MVVM  Design Pattern](https://medium.com/@ankit.sinhal/mvc-mvp-and-mvvm-design-pattern-6e169567bbad) - Different patterns used in UI, not an exhaustive list.
* [ngWhatever - a Better Module structure for Angular](/a-better-module-structure-for-angular/) - An implementation of an advanced MVC design in classic angular.


References:

Domain Driven Design - Tackling Complexity at the Heart of Software
