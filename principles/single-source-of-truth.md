
+++
Categories = ["Process"]
Description = ""
Tags = ["data", "solid"]
title = "One single source of truth"
+++

Data should be held in one location, duplicates of that data should be by reference only.

Modifications that happen to data in one place ensure that the change will propogate to rest of the application or system without having to update in multiple places, which can cause state to be lost or duplicate values not to be updated.

Exceptions: This principle is unlikely to apply between different team specilisations such as front-end vs backend, teams within an organisation, or between different systems caching vs database.


Further reading:
https://en.wikipedia.org/wiki/Single_source_of_truth
