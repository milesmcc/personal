---
date: 2020-08-15T22:10:32.744Z
title: Shynet had a security issue because I misunderstood CORS
tags:
  - technical
  - blag
  - shynet
aliases: ["/errata/shynet-had-a-security-issue-because-i-misunderstood-cors/"]
---
When I built [Shynet](https://github.com/milesmcc/shynet), my self-hosted analytics tool, one of my top priorities was making sure it didn’t require visitors to have JavaScript enabled. While Shynet will try to log visits using a JavaScript [tracker](https://shynet.rmrm.io/ingress/aa93dbb3-7d36-4de1-8642-5074c7e33c92/script.js), it will fall back to a 1x1 transparent tracking pixel if JavaScript isn’t enabled. Here is the Shynet tracking code for this site, for example:

```html
<noscript>
    <img src="https://shynet.rmrm.io/ingress/aa93dbb3-7d36-4de1-8642-5074c7e33c92/pixel.gif">
</noscript>
<script src="https://shynet.rmrm.io/ingress/aa93dbb3-7d36-4de1-8642-5074c7e33c92/script.js"></script>
```

Like any well-designed web system, Shynet appropriately sets CORS headers on these resources to ensure that its resources are only accessible from the intended domains—in this case, `miles.land`. (If you’re unfamiliar with CORS, here’s the short version: it’s a way to specify which sites are allowed to load a particular remote resource.)

In the case of Shynet, CORS headers ensure that only the intended sites are able to feed visitor information into Shynet’s database. This is helpful, as it prevents other people from accidentally embedding your tracking code on their site and messing up your analytics. (This happens more often than you’d think: because many of my sites are open source, people often fork them and forget to remove my tracking script!)

Up until a few days ago, Shynet did not verify origin information at the application level; instead, it relied on browsers to properly enforce CORS headers for the tracking script and the fallback pixel. This worked well for the primary JavaScript-based tracker, and I *thought* it worked well for the fallback pixel as well.

Then, someone opened [this issue](https://github.com/milesmcc/shynet/issues/65) in Shynet to ask whether it would be possible to load the tracking pixel if loading the tracking script failed due to CORS enforcement. This didn’t really make sense to me—surely if the JS script is failing due to CORS issues, so would the fallback pixel tracker!

Unfortunately, I was completely wrong. As VeryStrongFingers on GitHub pointed out, CORS headers [aren’t enforced for images at all](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#What_requests_use_CORS). In other words, anyone could bypass the origin checking in Shynet by just embedding the tracking pixel (without the `<noscript>` tag). When I designed Shynet’s origin management system, I assumed CORS applied to all resources. My assumption was wrong.

Fortunately, this was an [easy fix](https://github.com/milesmcc/shynet/commit/3e315f06edc71fa4eca7adf8e8197a708a5d5bb3): all I needed to do was verify origins on the application (server) side, and raise an `HTTP 403` (forbidden) if they didn’t check out. The fix is in Shynet v0.6.2.

All things considered, this wasn’t a major security vulnerability. In a worst case scenario, it would allow an attacker to feed analytics from an unrelated site into Shynet, which could be easily filtered out after-the-fact in the admin panel. But even if it wasn’t a major *security* issue, it was a relatively serious *soundness* issue—especially for those who rely on Shynet for accurate, precise analytics—and I’m glad it’s fixed.