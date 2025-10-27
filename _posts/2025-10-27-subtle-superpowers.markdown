---
layout: post
title: "Subtle Superpowers"
date: 2025-10-27 00:00:00
categories: nibbles
---

Living in the Rails and Phoenix ecosystems is full of beautifully executed conveniences that are easy to forget and hard to appreciate until you step outside for something. For example, when you test a controller in Rails you typically use a request spec, and it usually goes all the way through to the database in a transactional rollback approach. You get *real* testing of everything below the controller out of the box. In another framework like .NET, the standard practices for testing aren't as consistently established but it seems much more common to mock the service layer. Effectively you're unit testing the controller methods instead of integration testing from the HTTP perspective all the way down. But it's a similar amount of effort, and the speed differences are negligible for the confidence it gives. Rails devs are all reading this like, "none of this is new, Tim." But these standards and this consistency is really powerful in a way that is often overlooked by people who don't have to straddle ecosystems. It's one superpower among many for Rails and Phoenix.
