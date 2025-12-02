---
layout: post
title: "AI needs technical oversight"
date: 2025-12-02 00:00:00
categories: nibbles
---

Despite my technical background, I almost shipped two features* to our internal production application that could have cost Launch Scout time and money today. I gave reasonable prompts, but the underlying technical issues with the solutions were nuanced and non-obvious to my trained eyes at first.

You know that I am bullish on the capabilities of these tools and the productivity gains from them. I just wanted to give the other side of it for why it's still important to have someone at the helm who understands the mental model of what's happening with the code.

*Nerdy details:
One feature was having a recurring job look at timestamps on a table to determine which records had been reviewed and which haven't. Claude built it in such a way that created a race condition that some important information would be lost, so I had to re-prompt it to use a "last seen" kind of timestamp model instead of a current date and time.

The other would have also resulted in a difficult to diagnose issue with actions from one OS process needing to communicate with another OS process. It didn't understand the state that needed to be shared between the two, and assumed it could access everything from a side that didn't have the correct context.
