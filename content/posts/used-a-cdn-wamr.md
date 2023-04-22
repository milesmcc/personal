---
title: "I accidentally broke one of my biggest sites because I used a CDN"
date: 2020-07-09T16:23:14Z
draft: true
tags: ["technical", "a17t", "css", "whoaremyrepresentatives"]
aliases: ["/errata/used-a-cdn-wamr/"]
---

I recently redesigned [WhoAreMyRepresentatives](https://whoaremyrepresentatives.org) with help from some [Politiwatch](https://politiwatch.org) volunteers. It's just a simple flask app, and setting up some kind of asset pipeline for the CSS felt like overkill, so I imported a17t (my CSS library) from a CDN.

All was well until I released a new version of a17t a few days ago. (You can probably see where this is going.) Emails started to roll in about the site "being broken," but because there weren't _that_ many reports and none of my uptime checks were failing, I assumed these were isolated incidents.

I was very wrong. Turns out that I imported the "latest" version of a17t from the CDN, so when I pushed the update, I accidentally broke nearly _all_ of the CSS on the site. The thing was impossible to read.