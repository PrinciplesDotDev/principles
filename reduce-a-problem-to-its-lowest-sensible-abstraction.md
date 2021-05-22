+++
principle = "Reduce a problem to its lowest sensible abstraction."
tags = ["process"]
summary = "Stating a problem in its lowest sensible abstraction helps you understand and develop accurate solutions to a problem."
authors = ["AdamCraven"]
contributors = [""]
license = "CC BY-SA 4.0"
allow_dual_licensing_to_GPLv3 = true
original_source_is_canonical = false
crystalized = false
uid = "fb28478b-005a-4348-9bbf-0d7e3da4429f"
+++
Stating a problem in its lowest sensible abstraction helps you understand and develop accurate solutions to a problem.

## Content

I was working on a web scraper that was performance-critical. I stated the problem as "I need to click buttons on this website and fill out forms fast."

To solve that problem, I decided that using an automated headless browser, controlled by [Puppeteer](https://developers.google.com/web/tools/puppeteer), was a good choice.

However, I soon found out it wasn't fast enough, and scaling would require a lot of computational resources.

Because I thought of the problem in those terms, I became stuck. Thoughts entered my mind: "What was faster than headless chrome?" "Years of development had gone into it. How could I possibly make it run faster?"

After thinking a while, I realized the problem was not clicking buttons on a website; it was: "I just need to parse HTML forms and submit them via post requests." It over-simplified the problem. But I'd found the lowest sensible abstraction.

After I'd stated the problem correctly, I realized I didn't need to use a browser at all. I re-built the scraper in Go, then parsed the HTML and submitted the forms via post requests. Without the complexity of the browser, I moved page processing down from around 50ms to 0.5ms - A 100x improvement.

If I'd stated the problem at the correct abstraction initially, I would have saved myself weeks of work.

Throughout my career, I've seen large projects based upon the wrong framing of a problem.

If someone at the beginning had sat down and stated the problem more accurately, the project would have developed in a completely different and more successful direction. It's also why having many experts with diverse backgrounds will often provide better results with this principle.

----


The business requirements help frame the problem. They often need to be understood to find the lowest sensible abstraction.



If the requirements have been needing to solve the problem even faster. I may have reduced the problem down to "I'm just working with HTTP protocols" Or "I'm just working with TCP packets", which would change the choice of language I'd used or problem.

You could carry on down, finding lower and lower abstractions like "I'm just reading and submitting 1s and 0s" or "I'm just interacting with electrical signals." and each problem space would

Lower down the abstraction ladder, things tend to require more complex solutions to solve them. For example, at the lowest level of abstraction, you may think about designing custom ASICs (hardware chips specifically designed for solving a problem).

Higher up the abstraction ladder, you're not going to be effectively frame the problem to find the right solution "I'm just clicking keys on a keyboard".

You can see how this would be an effective principle to use near the start of big projects. As once you've decided to go off in the wrong direction, sunk cost decision making (https://en.wikipedia.org/wiki/Sunk_cost) can kick in, and whole projects can continue in the wrong direction, always working at the wrong abstraction to solve a problem.

From the example above, clicking on pages on a website may have been fine if wasn't performance were critical. However, even without the performance requirements, stating the problem accurately presents more options when solving a solution.