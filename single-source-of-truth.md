
+++
Categories = ["Process"]
Description = ""
Tags = ["data", "solid"]
title = "One single source of truth"
+++

Data should be held in one location, duplicates of that data should be by reference only.


## Why

* Changes to data are always propogated to the rest of the system.
* Mutations to the data need only happen in one place.
* There is no chance of duplicate data, which can either be lost or fail to be updated.


## Exceptions

* This principle is unlikely to apply between different team specialisations such as front-end vs backend, teams within an organisation, between different systems caching vs database or large distributed systems.


## References
Further reading:
https://en.wikipedia.org/wiki/Single_source_of_truth


## Contributors

<a class="contributor" alt="Adam Craven" href="https://github.com/adamcraven">
  <img src="https://github.com/adamcraven.png?size=80" width="40">
</a>
