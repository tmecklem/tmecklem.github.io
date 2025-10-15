---
layout: post
title: "Friday PDF productivity hack (a day late): if you need to review the contents of a giant PDF file but Claude is complaining about it being too large, you don't necessarily have to go full-on RAG for it. A lot of times you can get by with the poppler pdftotext tool and just convert the PDF to text and let Claude handle it that way."
date: 2025-08-30 16:31:07
categories: nibbles
---

Friday PDF productivity hack (a day late): if you need to review the contents of a giant PDF file but Claude is complaining about it being too large, you don't necessarily have to go full-on RAG for it. A lot of times you can get by with the poppler pdftotext tool and just convert the PDF to text and let Claude handle it that way.

I usually do something like "pdftotext -layout [filename]" and it'll spit out the text version of the file and try to keep the layout preserved (super helpful to maintain the contextual relevance of things in the file).

If you get stuck trying this, let me know. I can help. If you do find that you need ongoing access to the file and other alongside and a RAG makes sense, also let me know. I would love to lend a hand and share what I know.

[Original LinkedIn post](https://www.linkedin.com/feed/update/urn%3Ali%3Ashare%3A7367594730026643456)
