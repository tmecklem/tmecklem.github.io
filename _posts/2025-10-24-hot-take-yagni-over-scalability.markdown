---
layout: post
title: "The Scalability YAGNI trap"
date: 2025-10-24 00:00:00
categories: hot-takes
---

Don't sacrifice testability, simplicity, and joy over scalability (in either direction) until you _actually_ have the problem that needs them. If you get some scalability for free, great (thanks, Elixir!). But it's a great big YAGNI for most endeavors. The technology isn't the limiting factor early on... it's the idea that needs to be tested. Pick a solid majestic monolith and it's pretty likely you'll never have the kinds of scalability problems you're tempted to solve before you actually understand your production needs.

Microservices, k8s, cloud functions, I'm looking at you. It's almost a trope at this point: [](https://x.com/yatish_me/status/1977521025983324491)
