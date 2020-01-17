+++
Categories = ["Process"]
Description = ""
Tags = ["infrastructure"]
title = "Treat things like cattle, not pets"
+++

Attempt to get to a point where you can treat things (infrastructure/code/data) like they are un-precious commodities. Which are disposable or can be replaced or rebuilt at any time. Don't treat them as if they are precious.

## Why

* Things can be rebuilt from scratch, you do not have to know a long list of steps to rebuild something.
* In emergencies, you will be able to react quickly.

## Content

The principle originated from
<blockquote>
I emphasized the disposability of cattle and the uniqueness of pets.
</blockquote>
Pets
<blockquote>


Servers or server pairs that are treated as indispensable or unique systems that can never be down. Typically they are manually built, managed, and “hand fed”. Examples include mainframes, solitary servers, HA loadbalancers/firewalls (active/active or active/passive), database systems designed as master/slave (active/passive), and so on.
</blockquote>


Cattle
<blockquote>
Arrays of more than two servers, that are built using automated tools, and are designed for failure, where no one, two, or even three servers are irreplaceable. Typically, during failure events no human intervention is required as the array exhibits attributes of “routing around failures” by restarting failed servers or replicating data through strategies like triple replication or erasure coding. Examples include web server arrays, multi-master datastores such as Cassandra clusters, multiple racks of gear put together in clusters, and just about anything that is load-balanced and multi-master.
</quote>


<blockquote>
In the old way of doing things, we treat our servers like pets, for example Bob the mail server. If Bob goes down, it’s all hands on deck. The CEO can’t get his email and it’s the end of the world. In the new way, servers are numbered, like cattle in a herd. For example, www001 to www100. When one server goes down, it’s taken out back, shot, and replaced on the line.</blockquote>

## References

* (The history of cattle vs pets)[http://cloudscaling.com/blog/cloud-computing/the-history-of-pets-vs-cattle/]