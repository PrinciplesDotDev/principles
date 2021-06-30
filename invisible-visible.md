+++
principle = "Make the invisible, visible"
description = "Make the hidden principles, ideas and behaviors which make up a technology organization understood and explicit"
category = "Strategy"
tags = ["pde", "epic", "leadership", "organization", "team", "individual", "strategic"]
license = "CC BY-SA 4.0"
allow_dual_licensing_to_GPLv3 = true
authors= ["AdamCraven"]
contributors = []
uid = "plum-swordfish-binni"
+++

Reveal relevant information that is hidden so it can be understood. By making hidden principles, ideas, and behaviors that make up a technology organization understood and explicit.

## Why

Understanding allows better outcomes. It improves productivity. Without understanding, chaos reigns supreme, and the systems and organizations that are based upon that reflect that, whether it be not understanding the business case or not understanding the software.

The greater the shared understanding in the team, the better the communication, efficiency, and effectiveness of the team members

## How

A few examples:

Data

* Create visualizations that create insight.
* Convert data into visualizations that are easier to understand. (e.g., grafana, splunk)
* Run calculations on the data to understand the content (e.g., average price, top sales)
* Use analytics within a system to increase feedback cycles.
* Data mining a dataset to reveal hidden patterns.

Code

* Use diagrams. Represent code in less abstract ways, such as drawing diagrams of a system using pen and paper or graphics design programs. This helps transmit mental models.
* Document systems visually.
* Log and visualize the results of a system.
* Use debuggers to be able to peer inside a system to see changes that are happening over time, rather than an input-output black-box.
* Use performance tools like flame-graphs to view what the system

Teams

* Use principles to communicate and build mental models that everyone can share in the team.
* Ask questions that seek to understand and illuminate.
* Use Principle-Driven Engineering as a guide to help make the invisible, visible.

Individuals

* Understand what you know, codifying your habits into understood actions and principles.
* Be intellectually honest and unafraid of being wrong. If you realize you are wrong, it allows you to learn rapidly.

## History

Making the invisible, visible is the principle that founded this project—the desire to share mental models and build capability for myself and my teams.

In many ways, all principles inherit from it. The result of that is that all principles implicitly:

* Increase understanding.
* Improve productivity.
* Share knowledge.
* Constrain behavior / action.
* Increase capability.
* Improve behavior / action.

## Article

How can you build anything if you don't understand it?

Yet in software, most of the time, we are precisely working in a system in which we can understand only a tiny part.

From building software or interacting with teams, most of the behavior is hidden. You don't know what other people are thinking - you cannot see their mental models. Nor do you know what's happening inside the CPU.

Making the invisible, visible is about revealing things that you currently don't understand - which are limiting your capability - by making them visible.

These are patterns, behaviors, structures, and interactions that make up a system or organization.

The idea is not to make everything visible, for that is impossible. It is to reveal what is valuable—from chunks of knowledge from other programmers, expressed in principles, to watching a user's request in production work its way through the system and being able to see all the side-effects it has on the system.

### In code

Have you ever had a bug that you've tried to solve through trial and error? You change something over and over in the hope that it fixes that problem.

The implication of not following the principle is less noticeable when you're developing locally because feedback cycles are short (i.e., you are on your local machine), and this approach works. But in production, feedback cycles are long, and the trial and error approach won't work.

Using this principle means ensuring a design to make complexity manageable and focuses on having the right tools throughout your stack.


### In teams
What about assumptions in teams? Have you ever had a team member that goes off for a few weeks to create software only for it to get to code review, and they've done it in a way that you wouldn't have expected?

This is because you don't share similar mental models on designing software, and there were no constraints to guide the design.
Sharing those models and understanding by making your principles visible means everyone on the team's code looks more familiar and easier to understand.
