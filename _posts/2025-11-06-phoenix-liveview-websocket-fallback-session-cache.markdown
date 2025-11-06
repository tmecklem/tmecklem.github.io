---
layout: post
title: "Phoenix LiveView Websocket Fallback Session Cache"
date: 2025-11-06 00:00:00
categories: nibbles
---

If you ever run into a phoenix app continuing to fall back to longpoll even after you've configured the websocket correctly, clear the browser's session cache. (LiveView stores a fallback flag in the session). This is for you, future Tim.
