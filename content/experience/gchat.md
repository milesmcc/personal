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

gchat is a real-time chat platform.

You can access the source code [here](https://github.com/GabrielBarros36/gchat) and use it [here](https://www.gchat.cloud/).

Its backend is written in Rust, with:
- Tokio for async support
- Axum for REST APIs
- Websockets for all chat functionalities

Its frontend is built in Typescript with Next.js.

gchat is deployed on a Digital Ocean droplet, with self-hosted PostgreSQL as a database and Nginx as a reverse proxy.
