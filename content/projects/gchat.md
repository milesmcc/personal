---
title: "gchat"
subtitle: "A real-time chat app in Rust"
category: 2-Projects
dateOverride: "S ’25"
showRelatedTag:
date: 2025-02-01
highlightSubtitle: true
weight: 1
---

gchat is a real-time chat platform built with Rust and NextJS.

It uses [gauth](https://github.com/GabrielBarros36/gauth), my (non-prod!) auth library.
- Access the source code [here](https://github.com/GabrielBarros36/gchat)
-  Use it [here](https://www.gchat.cloud/)

Its backend is written in Rust, with:
- Tokio for async support
- Axum for all API endpoints
- Websockets for all live chat functionalities
- Postgres for user management and message storage
- NextJS for frontend, hosted in Vercel
- DigitalOcean as a VPS
