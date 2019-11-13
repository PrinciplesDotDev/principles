
+++
Categories = ["Process"]
Description = ""
Tags = ["errors", "debugging", "logs", "environment setup", "language choice", "productivity"]
title = "Software must be easy to debug"
summary = "When software behaves unexpectedly, it should be easy to understand what is causing the problem."
+++


When software behaves unexpectedly, it should be easy to understand what is causing the problem.

## Why

* Time is reduced in fixing a problem. A problem that can be understood without difficulty allows the developer to fix it rapidly, which greatly increases developer productivity.
* Frustration is reduced. *Friction* caused by not understanding a problem leads to frustration for the developer.


## How

* Ensure code has good metrics around them, such as logging, stack traces and error messages.
* Ensure the code can be easily debugged.

## Content

One of the largest unaccounted for time sinks in engineering is figuring out unexpected problems. Bad debugging tools, poor error messages and bad logs increase the time taken to resolve an issue.

If an engineers environment is not setup in a way that can be used to easily pin down a problem, it takes longer than necessary to figure out the problem. Each time another issue occurs the inefficiency is compounded. Therefore, it is a productive use of time to ensure engineers environments are easy to debug.

This principle applies to every environment from a local machine to production. The easier it is to debug, the more productive a team can be.

### Examples

Specific ideas on how to implement this principle: 

* Stacks traces
    * Should: Be accurate and detailed
    * Should: Work across asyncronous, parallel and concurrent code.
    * Should: Error reporting of line numbers should be accurate (e.g. when using sourcemaps)
* Debugger - Easy to use.
    * Should: Be attachable to a live runtime
    * Should: Be able to be stepped through
    * Should: show real-time states of properties and values.
* Errors messages - Be clear and concise
    * Should Not: Be swallowed or hidden
    * Should Not: Be generic or undescriptive
* Logs
    * Should: All key interactions of a system should be recorded, especially user interactions.
    * Should: Be captured by an external system that is easily searchable.

Some programming languages maybe less desirable for use with teams than others, due to not having these features.

