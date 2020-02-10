+++
Categories = ["Process"]
Description = ""
Tags = ["infrastructure"]
title = "Treat things like cattle, not pets"
+++

Create things (infrastructure/code/data) in such a way that they can be disposed of when there is a problem or change required and replaced like a commodity item. Rather than something that is precious and needs careful management.

## Why

* More willing to accept changes. You don't need to protect something if it's disposable
* New features are significantly easier because instead of having to carefully transition data and build features around that transition, you can recreate things as needed.
* You can react quickly in error states. Re-deploying something is significantly faster than rebuilding a server from scratch and migrating config.
* No config drift. Servers aren't updated individually with packages via ssh, so the current working state of a server does not depend upon unknown current states.
* Less points of failure. Systems are designed in a way that it reduces single point of failure, so something going down is not necessarily a problem.
* Instills confidence in what you're building. If things are constantly being re-created.
* In emergencies, you will be able to react quickly.

## How

* Use containers to create self-contained builds that can be deployed.


## Content

Whilst the principle can be generally applied to many areas across the tech stack, it originally was authored by Randy Bias and originated from how to approach infrastructure, especially on the cloud.

The underlying terminology comes from contrasting two approaches:
<blockquote>
I emphasized the disposability of cattle and the uniqueness of pets.
</blockquote>

Description of pets:
<blockquote>
Servers or server pairs that are treated as indispensable or unique systems that can never be down. Typically they are manually built, managed, and “hand fed”. Examples include mainframes, solitary servers, HA loadbalancers/firewalls (active/active or active/passive), database systems designed as master/slave (active/passive), and so on.
</blockquote>


Description of Cattle:
<blockquote>
Arrays of more than two servers, that are built using automated tools, and are designed for failure, where no one, two, or even three servers are irreplaceable. Typically, during failure events no human intervention is required as the array exhibits attributes of “routing around failures” by restarting failed servers or replicating data through strategies like triple replication or erasure coding. Examples include web server arrays, multi-master datastores such as Cassandra clusters, multiple racks of gear put together in clusters, and just about anything that is load-balanced and multi-master.
</quote>

The general application of the principle:
<blockquote>
In the old way of doing things, we treat our servers like pets, for example Bob the mail server. If Bob goes down, it’s all hands on deck. The CEO can’t get his email and it’s the end of the world. In the new way, servers are numbered, like cattle in a herd. For example, www001 to www100. When one server goes down, it’s taken out back, shot, and replaced on the line.</blockquote>

You can read more about the history an application of the principle, in the references below.

## Definitions

* Containers -

## References

* (The history of cattle vs pets)[http://cloudscaling.com/blog/cloud-computing/the-history-of-pets-vs-cattle/]