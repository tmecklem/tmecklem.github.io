---
layout: post
title: "Distributed systems are hard. The essential complexity of a distributed system, meaning the lowest complexity that it can possibly have, is still very high. The internet is a distributed system."
date: 2025-07-03 13:44:06
categories: nibbles
---

Distributed systems are hard. The essential complexity of a distributed system, meaning the lowest complexity that it can possibly have, is still very high. The internet is a distributed system.

Many of the languages and stacks that power the Internet either ignore this complexity or assume that you are designing resiliency and fault tolerance at a different layer than your application.

One interesting observation: while a lot of people are using the massive data set of existing react applications and node code to suggest that LLMs should be used with those languages for the greatest benefit, I’m finding that it unlocks the strengths of other powerful stacks even more. For example, Elixir is a great language that operates well in distributed systems. It addresses a lot of those issues using abstractions that are built into the framework itself, rather than in a different layer of the architecture. If you know some of the fundamentals of these systems, Cursor makes writing a Phoenix application with features like end-to-end real time capability, fault tolerance, and resiliency much more accessible. It’s not a zero sum game, and now we’re able more than ever to pick the right tool for the job at hand.

[Original LinkedIn post](https://www.linkedin.com/feed/update/urn%3Ali%3Ashare%3A7346534201883574273)
