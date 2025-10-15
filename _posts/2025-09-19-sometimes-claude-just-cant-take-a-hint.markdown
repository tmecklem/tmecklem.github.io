---
layout: post
title: "Sometimes Claude just can't take a hint."
date: 2025-09-19 15:24:29
categories: nibbles
---

Sometimes Claude just can't take a hint.

When people talk about how silly or stupid coding LLM tools can be sometimes, there's inevitably someone who posts a "skill issue" comment about how you just have to put a note in CLAUDE markdown or the Cursor rules in order for it to behave. I just saw it as a reply to someone who is clearly near the top of the software industry in their experience and productivity using the tools. Do you really think they haven't tried and experienced the limitations in hints, tools, and RAGs?

Just this week, I saw an LLM use and then ignore the results of a tool call I exposed. I prompted it to use the tool, how to use it, and to respond with the tool result. Like almost no room for failure. It made the call, and then responded with a completely different hallucination.

These tools are not rational thinkers who just need a file of convincing data. You can get the result you want most of the time, but you can't eliminate some of the stochastic edge cases like this through prompting and files.

You have to build guard rails around it in your code, and you have to apply common sense and have allowance for slop in using the tools. If there's a "skill issue", it's in the naiveté of thinking that a collection of markdown files will solve it all.

[Original LinkedIn post](https://www.linkedin.com/feed/update/urn%3Ali%3Ashare%3A7374825720117776385)
