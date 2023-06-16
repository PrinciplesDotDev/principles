+++
principle = "Figure out the problem, before the technology"
tags = ["organisation", "problem-solving", "team"]
summary = "Understand the problem first, then choose the appropriate technology to solve it."
authors = ["AdamCraven"]
contributors = [""]
license = "CC BY-SA 4.0"
allow_dual_licensing_to_GPLv3 = true
original_source_is_canonical = false
crystalized = false
uid = "8d0d0a58-b85e-4837-820d-28acf80bbd7b"
+++
Understand the problem first, then choose the appropriate technology to solve it. 

Choosing a technology before understanding the problem can lead to - at worst - disastrous business ending results. For example, your business needs to accept card payments from users. A small team might build a multi-cloud microservice architecture aiming for 99.9999% uptime (2.6s of downtime a month), that can scale to millions of users on thousands of machines written in the latest high-performance language. But the problem is accepting card payments for *a few thousand users*, not millions. A single integrated service that runs on 1 or 2 machines, with 99.9% uptime (43m 28s of downtime a month), would be more than adequate, be ready a year or two earlier, and at a lower level of complexity. Those missed card payments due to downtime will amount to a tiny proportion compared to the millions spent for the first over-engineered solution that may never release. Later on, once the app is running, you can evolve towards towards whatever the optimal solution may be.

Why does this happen in the first place? Technology is concrete, whilst problems are often abstract. It's much easier, and often more fun, to choose a technology and get direct feedback straight away rather than spend more effort on the initial cognitively demanding task of figuring out a problem (inevitably, wrong technology choices increase the cognitive load later on). Also, many teams are incentivised to learn a new technology rather than solve the problem (i.e. improve your CV).

## Why

* You build the application that is fitted to the problem from the beginning.
* It potentially allows the business to reduce its costs, earn millions in revenue, and billions in increased valuation - if you are incentivised appropriately, this is win-win.
* Avoids a prolonged development time, where you are getting no feedback.

## How

* Align incentives in the business to ensure that engineers benefit from the app being released. Without these incentives, engineers can be more aligned to improving their skillset rather than achieving business goals.
* Apply root-cause analysis methods like the [Many Whys](https://manywhys.org) to figure out your problem.
* Spend time upfront sketching out your application's business needs, working on the domain and ignoring the technology.
* [Reduce a problem to its lowest sensible abstraction](https://principles.dev/p/reduce-a-problem-to-its-lowest-sensible-abstraction/) from the beginning.


## Key Takeaways

* Understand the problem before choosing the technology.
* Overly complex solutions often stem from prioritising technology over the problem.
* Proper understanding avoids unnecessary costs, prolonged development time, and misalignment with business needs.
* Aligned incentives shift the focus from learning new technologies to solving problems.