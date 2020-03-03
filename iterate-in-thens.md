
+++
Categories = ["Process"]
Description = ""
Tags = ["epic:principle"]
title = "Iterate in Thens"
+++

You should iterate sequentially on a focused chunk of work at a time. Once that chunk has been completed THEN start on the next chunk of work. This is opposed to doing multiple chunks of different of work in parallel.

## Why
* No context switching. Sequential working increases the chance that all relevant context associated with a chunk of work be kept in mind.
* Reduced possible errors. Focusing on one change at a time, means the possible outcomes (e.g. bugs, regressions) from that change are much smaller than if many changes are made at the same time.

## How

* Define tasks in a sequential way.
* When working, focus on a single task and capture additional tasks as a separate items.

## Content

Iterating on tasks by focusing on one chunk of work is generally better than trying to do too many things at once.

A example task may be to upgrade 3 cores libraries that 10 applications use.

### Iterating with an "ANDs" approach:

Go to the first application
update library 1 **AND** 2 **AND** 3 at the same time
**THEN** move on to the next application.

The complexity arises through having to work with lots of different changes which can be as follows:

* steps required to update 3 libraries.
* bugs arising from changing 3 libraries.
* The complex interactions that may arise from changing 3 libraries at the same time.
* Identifying which library a bug came from.

### Iterating in "THENs" approach:

Go to the first application
update library 1
**THEN** move onto to next application

This approach greatly focuses the context on an individual library and all the associated bugs or changes required.

The complexity is reduced to:

* steps required to update a single library.
* bugs arising from changing a library.

### Parallel working

Iterating also allows working in parallel, but the parallel task should be highly related or the same task.

Working across 10 applications at the same time to update a single library.

With all the 10 applications
search for the old library version
**THEN** replace with the new version
search for the old library method that is deprecated
**THEN** replace with the new supported method.
etcc..

## Definitions

* Chunk of work - An amount of work that you can be encapsulated into a task. This will vary with a persons experience.


## Contributors

<a class="contributor" alt="Adam Craven" href="https://github.com/adamcraven">
  <img src="https://github.com/adamcraven.png?size=80" width="40">
</a>
