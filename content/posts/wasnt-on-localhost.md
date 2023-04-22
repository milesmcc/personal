---
title: "Couldn't figure out why my CSS changes weren't being applied (turns out I was in prod)"
tags: ["frusturating", "debugging"]
date: 2020-07-11T19:45:50Z
draft: true
aliases: ["/errata/wasnt-on-localhost/"]
---

I know this is a pretty common mistake, but I just spent 20 minutes debugging a CSS issue before I realized that I was loading the "production" version of the site and not my local development version.

My local development server was being served at `https://localhost:1313`, but the page I was testing was `https://hugo--milesland.netlify.app/`. So _of course_ my fixes weren't working --- I wasn't loading the page with the fixes applied!

This isn't the first time this has happened to me, and it certainly won't be the last...