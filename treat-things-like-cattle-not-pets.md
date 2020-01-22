+++
Categories = ["Process"]
Description = ""
Tags = ["infrastructure"]
title = "Treat things like cattle, not pets"
+++

Create things (infrastructure/code/data) in such a way that they can be treated like disposable commodities, rather than precious pets.

## Why

-- things can be disposed of.
-- You don't have to worry about losing something precious when the system crashes, a database fails, etc.
-- Your systems are designed in a way that can handle being taken out. No single point of failure.
-- Designing data this way, such as ETL processes, gives great flexibility to future
-- New features are significantly easier because instead of having to carefully transition data and build features around that transition, you can recreate the database when it is needed with new features such as timeseries, or a different database
-- Instills confidence in what you're building. If things are constantly being re-created.
-- More willing to accept change. You don't need to protect something if it's disposable. Pets you will be afraid to move the goalposts.



* You gain full control over the item
* Things can be rebuilt from scratch, you do not have to know a long list of steps to rebuild something.
* In emergencies, you will be able to react quickly.


* config drift
* secure in setup
* no unique servers
*

## Content

The principle originated from <insert name> and it's application to infrastructure in dev ops.
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


It is treating things as if they were


## Exceptions

Some things are unavoidably have to be treated like pets?


## References

* (The history of cattle vs pets)[http://cloudscaling.com/blog/cloud-computing/the-history-of-pets-vs-cattle/]