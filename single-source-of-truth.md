+++
principle = "One single source of truth"
summary = "Data should be held in one location, duplicates of that data should be by reference only."
category = "Process"
tags = ["data"]
license = "CC BY-SA 4.0"
allow_dual_licensing_to_GPLv3 = true
authors= []
contributors = ["AdamCraven"]
uid = "violet-primate-gertruda"
+++

Data should be held in one location, duplicates of that data should be by reference only.

## Why

- Changes to data are always propagated to the rest of the system.
- Mutations to the data need only happen in one place.
- Single source of truth means no data will be out of sync or fail to be updated.

## How

Only allow data writes to happen in one location. Whether that be a call to a rest API, system call or other write actions.

Don't allow data to be stored anywhere but the single source of truth.

## Exceptions

**Highly distributed systems** Some systems rely on data consistency to be reached eventually or may never need to have accurate data.

<!--**Between teams** This principle is harder to apply between different team specialisations such as front-end vs backend, teams within an organisation, between different systems: caching vs database or large distributed systems.-->

## References

Further reading:
https://en.wikipedia.org/wiki/Single_source_of_truth
