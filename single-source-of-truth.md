
+++
Categories = ["Process"]
Description = ""
Tags = ["data", "solid"]
title = "One single source of truth"
+++

Data should be held in one location, duplicates of that data should be by reference only.


## Why

* Changes to data are always propagated to the rest of the system.
* Mutations to the data need only happen in one place.
* Single source of truth means no data will be out of sync or fail to be updated.

## How

Only allow data writes to happen in one location. Whether that be a call to a rest API, system call or other write actions.

Don't allow data to be stored anywhere but the single source of truth.

## Exceptions

**Highly distributed systems** Some systems rely on data consistency to be reached eventually or may never need to have accurate data.
<!--**Between teams** This principle is harder to apply between different team specialisations such as front-end vs backend, teams within an organisation, between different systems: caching vs database or large distributed systems.-->



## References
Further reading:
https://en.wikipedia.org/wiki/Single_source_of_truth


## Contributors

<a class="contributor" alt="Adam Craven" href="https://github.com/adamcraven">
  <img src="https://github.com/adamcraven.png?size=80" width="40">
</a>
