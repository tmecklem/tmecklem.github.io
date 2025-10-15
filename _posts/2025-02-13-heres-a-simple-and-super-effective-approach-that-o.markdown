---
layout: post
title: "Here's a simple and super effective approach that only took a couple of weeks to initially implement and is helping me today to understand the metrics that matter to Launch Scout:
* we built a tiny, custom ETL app (in Elixir of course!) that pulls in and denormalizes data from various, disparate tools/services that we use, and
* we pointed Metabase on the resulting integrated database."
date: 2025-02-13 18:24:10
categories: longform
---

Here's a simple and super effective approach that only took a couple of weeks to initially implement and is helping me today to understand the metrics that matter to Launch Scout:
* we built a tiny, custom ETL app (in Elixir of course!) that pulls in and denormalizes data from various, disparate tools/services that we use, and
* we pointed Metabase on the resulting integrated database.

If you're thinking "Tim, that's just a warehouse database"... you're right. But I suspect most companies don't have access to critical decision-making information like this in one place (even if there are initiatives in place that are supposed to make it happen!).

No fancy cloud pipeline architecture, no drag and drop ETL gui, and no complex integration infrastructure that requires a senior architect to understand. Just an intimate understanding of the data we need & where to get it, experience in building minimal client APIs, and a little bit of glue data. We've got marketing, business development, sales, delivery, people support, invoicing, and AR information on the same scorecard, updated within an hour of the data changing.

We were on a meeting with our fantastic fractional CFO (Mikala Page, CPA and the team at Anders CPAs + Advisors) talking about an important new metric a couple of weeks ago, and within an hour of starting the work it was part of our live, consolidated scorecard. And Cursor and Claude took the time to add something new from a few hours to less than an hour in typical cases.

If you've struggled to get key information about your business in one place, it might be simpler than you think. I'm happy to share what we've done end-to-end... hit me up in LinkedIn Messaging.

(And if you're looking for Business Intelligence, Analytics, or Reporting help, we're a Metabase partner! https://lnkd.in/gRq8ENds)

[Original LinkedIn post](https://www.linkedin.com/feed/update/urn%3Ali%3Ashare%3A7295870382702481408)
