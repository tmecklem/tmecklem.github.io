---
layout: post
title: "File this one under \"you don't know unless you ask\"."
date: 2025-09-05 14:59:48
categories: nibbles
---

File this one under "you don't know unless you ask".

I spent about a day prototyping a sophisticated feature involving visual WYSIWYG layout and PDF/image generation. Claude and I started with a "one-shot" prompt, in part because this is one of the first things I've tried to build with it that I didn't actually know how I wanted it to go. It did a fairly good job, but we hit the "vibe coding wall" where lack of tests will kill progress as soon as the LLM encounters a "small" problem and wrecks the codebase trying to fix it.

So we started over in a new branch, but I tried a new thing. I referenced the prototype branch in the iterative, smaller prompts, and we built something sustainable and production-worthy with tests. It did great! I actually thought it would struggle a lot with this, but when we got stuck I told it to use its browser and work through it with some guidance from me, and we built a better feature together than I could have done alone.

We're leveling up in speed _and_ in capability at the same time, which is really exciting and even maybe "joyful", if I can use that word in context with AI-first development.

[Original LinkedIn post](https://www.linkedin.com/feed/update/urn%3Ali%3Ashare%3A7369746077974982661)
