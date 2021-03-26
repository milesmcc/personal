---
title: "Shynet will never be a SaaS"
tags: ["blag", "shynet", "open source"]
date: 2020-07-09T17:31:45Z
draft: false
---

Ever since I released [Shynet](https://github.com/milesmcc/shynet), my open source web analytics tool, several people have asked me if I plan to offer some kind of managed version of the service (presumably as some kind of SaaS). While these requests are super exciting and I sympathize with them—not everyone wants to manage their own servers, after all!—it's not something that I'm considering. Here's why.

## Self-hosting is the point of Shynet

When you use a third-party analytics tool—even one with a strict privacy policy—you're handing your visitors' data over to another company. Even if you trust that company to handle the data properly, the data isn't strictly in your control: the company can change ownership, adopt a different business model, or simply go out of business.

In general, if you care about privacy and control, self-hosting your analytics is better for both your visitors and yourself (or your company).

But not all self-hosted analytics tools are equal. Often, they're watered-down versions of paid services (e.g., [Fathom](https://github.com/usefathom/fathom)), or weren't designed for self-hosting (e.g., [Plausible](https://plausible.io/blog/self-hosted-web-analytics-beta)). Others, like [Matomo](https://matomo.org/), are mature and featureful, but also overly complex (and, if you ask me, a bit of a chore to work with).

The point of Shynet is to build an analytics tool that is self hosted, privacy friendly, and sleek — in that order. These priorities are reflected in Shynet's architecture: there's no Stripe billing integration, no account tiers, and certainly no concept of third-party access. Turning it into a SaaS would conflict with the core purpose of the project.

## I don't want your data

On a more practical level, offering Shynet as a SaaS would put me in control of troves of personal data. And [data is a liability](https://www.richie.fi/blog/data-is-a-liability.html) from both an ethical and legal perspective. I wouldn't touch it with a ten-foot pole.

If I misconfigure my database and someone breaks in (or something leaks out), I want that to be my problem—and *only* my problem. If Shynet were a SaaS, it'd be all my customers' problem, too. 

And while I built Shynet with security as a top priority, it's a complex piece of software and almost certainly has holes. If everyone self-hosts Shynet, vulnerabilities take more effort to exploit (after all, an attacker would need to target each instance individually).

## There are better tools elsewhere

I built Shynet to fill a gap I perceived among *self-hosted* analytics tools—not among analytics tools generally. There's little that Shynet offers that Fathom, Simple Analytics, or Plausible don't (though I do hope to change that over time). After all, Shynet's advantage is that it's designed to be self-hosted; without that, there's little to differentiate it from other analytics offerings.

Analytics is a crowded market. It's ruthlessly competitive. If you're willing to tolerate handing your visitors' data over to a third party, there are dozens of companies all fighting for your business. I don't want Shynet to be one of them.

## I've made up my mind

The fact that some people would be willing to pay for a hosted Shynet offering is endlessly exciting, and it's hard for me to turn those people down. But Shynet is an open source project, not a company, and I'd like to keep it that way.