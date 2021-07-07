+++
principle = "Reduce a problem to its lowest sensible abstraction"
tags = ["process"]
summary = "Framing a problem in its lowest sensible abstraction helps you understand and develop accurate solutions to a problem."
authors = ["AdamCraven"]
contributors = [""]
license = "CC BY-SA 4.0"
allow_dual_licensing_to_GPLv3 = true
original_source_is_canonical = false
crystalized = false
uid = "fb28478b-005a-4348-9bbf-0d7e3da4429f"
+++

Framing a problem in its lowest sensible abstraction to help you understand and develop accurate solutions to a problem.

For example, for a business issue: I want to book an appointment rapidly on a website.

You can frame the problem in many different ways. From higher to lower abstractions:

I need to...

* click buttons on my mouse and move it to the right point across my screen very fast.
* click buttons on this website and fill out forms fast.
* parse the DOM to access the website and submit the forms.
* parse HTML forms and submit them via post requests.
* parse an HTTP response, submit an HTTP response
* parse TCP packets, submit a TCP response
* parse the electrical signals and submit an electrical response.

## Why

* Greatly increases chances of project success, as you're working at the optimum level to solve the problem.
* It helps you understand what capabilities are required to solve a problem. The team required to parse computer electrical signals would be very different from the team required to click buttons on a website.


----

When working on building a performance-critical web scraper, the problem in my mind was, "I need to click buttons on this website and fill out forms fast."

To solve that problem, I decided that the best way to solve that problem was using an automated headless browser, controlled by [Puppeteer](https://developers.google.com/web/tools/puppeteer).

However, I soon found out it wasn't fast enough, and scaling would require a lot of computational resources.

Because I thought of the problem in terms of clicking buttons, I became stuck. My thought process revolved around solving the problem I thought I had. "What is faster than headless chrome?" "Years of development had gone into it. How could I possibly make it run faster?"

After a while, I realized the problem was not clicking buttons on a website; it was: "I just need to parse HTML forms and submit them via post requests.". It over-simplified the problem. But I'd found the lowest sensible abstraction.

After I'd stated the problem correctly, I realized I didn't need to use a browser at all. I re-built the scraper in Go, then parsed the HTML and submitted the forms via post requests. Without the complexity of the browser, I moved page processing down from around 50ms to 0.5ms - A 100x improvement.

If I'd stated the problem at the correct abstraction initially, I would have saved myself weeks of work.

Throughout my career, I've seen large projects based upon the wrong framing of a problem.

If someone at the beginning had sat down and stated the problem more accurately, the project would have developed in a completely different and more successful direction. It's also why having many experts with diverse backgrounds will often provide better results with this principle.
