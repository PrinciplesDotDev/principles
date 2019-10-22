
+++
Categories = ["Process"]
Description = ""
Tags = ["errors", "debugging", "logs", "environment setup", "language choice"]
title = "Software must be easy to debug"
summary = "When software behaves unexpectedly, it should be easy to understand what is causing the problem."
+++


When software behaves unexpectedly, it should be easy to understand what is causing the problem.

## Why

* Problems can be understood without the need for issues.
* Time is reduced in fixing a problem.
* A program can be understood much better when tools are available for debugging.



One of the largest unaccounted for time sinks in engineering is figuring out unexpected problems. Bad debugging tools, poor error messages and bad logs increase the time taken to resolve an issue.

If an engineers environment is not setup in a way that can be used to easily pin down a problem, it takes longer than necessary to figure out the problem. Each time another issue occurs the inefficiency is compounded. Therefore, it is a productive use of time to ensure engineers environments are easy to debug.

This principle applies to every environment from a local machine to production. The easier it is to debug, the more productive a team can be.

## Examples

Specific implementations:

* Stacks traces
    * Should: Be Accurate and detailed
    * Should: work across asyncronous, parallel and concurrent code.
    * Shoud: Error reporting of line numbers should be accurate (e.g. when using sourcemaps)
* Debugger - Easy to use.
    * Should: Be attachable to a live runtime
    * SHould: Be able to be stepped through
    * SHould: show realtime states of properties and values.
* Errors messages - Be clear and concise
    * Should Not: Be swallowed or hidden
    * Should Not: Be generic or undescriptive
* Logs
    * Should: All key interactions of a system should be recorded, especially user interactions.
    * Should: Be captured by an external system that is easily searchable.

The examples above may mean some programming languages are less desirable for teams than others, due to not having these features.

Exceptions: Prototype or test code.
