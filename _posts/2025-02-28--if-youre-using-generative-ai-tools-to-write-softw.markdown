---
layout: post
title: "AI Without Tests Creates Tech Debt"
date: 2025-02-28 20:41:36
categories: nibbles
---

* If you're using generative AI tools to write software
* and you're not including automated tests with good coverage for new features in your codebase,
* then you're creating an absolute monster of technical debt.

I don't usually say things this definitively, but it's intuitively true for anyone with recent experience using AI tooling.

LLMs are such prolific code writing tools that it's incredibly easy to generate a bunch of code that works well in isolation but has no cohesion or internal structure across the rest of the application. The tools also have a tendency to get way off base and start modifying desired behavior, and because of the pace of generation it's easy to miss if there's not a safety net of tests and review to tell you a core expectation of your application is no longer satisfied.

[Original LinkedIn post](https://www.linkedin.com/feed/update/urn%3Ali%3Ashare%3A7301340788553068544)
