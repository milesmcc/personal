---
title: "“It's open source! We’ll let our customers fix it.”"
tags: ["open source", "responsibility", "blag"]
date: 2021-09-07T18:15:00Z
draft: false
---

In general, open source maintainers [owe you nothing](https://mikemcquaid.com/2018/03/19/open-source-maintainers-owe-you-nothing/). Despite maintainers often being volunteers, some users feel entitled to maintainers' time, submitting feature requests and expecting the maintainers to implement whatever they want. This is wrong. I repeat, open source maintainers owe you nothing.

But these refrains don't apply to all types of open source maintainers: Recently, I've been frustrated by the way that certain well-resourced corporate open source projects shift the burden of maintainence --- and improvement --- to users.

I'm talking about officially-maintained corporate open source "clients" for proprietary products. These sort of projects include the official [Stripe Python client](https://github.com/stripe/stripe-python) (which you must be a Stripe customer to use) and the Google-maintained [BigQuery components](https://github.com/apache/beam/tree/master/sdks/python/apache_beam/io/gcp) of the Apache Beam open source project (which is only useful to Google Cloud customers), to give just two examples. These projects are open source "wrappers" that make it possible for you to integrate proprietary products (that *you* pay for!) into your application.

If you run into a bug in one of these projects, I'd be frustrated if the maintainers suggested that you fix the issue yourself (or ignored the bug entirely). To use these wrapper projects, you must be a customer of the companies that maintain them, and these projects are *part* of those companies' product offerings. The way I see it, it's on the company to fix the bugs --- not on you.

### Google and Apache Beam

This post was prompted by my recent experience with [Apache Beam](https://beam.apache.org/). Beam is an open source project that provides "an advanced unified programming model" for writing "batch and streaming data processing jobs that run on any execution engine."

Beam was originally developed by Google, and it powers their proprietary [Dataflow](https://cloud.google.com/dataflow) product. Inside Apache Beam are official components maintained by Google for interfacing with BigQuery, another proprietary offering. BigQuery is a great product! I use it all the time for work, and have had a fantastic experience with it.

But last month, I filed a Beam bug report for an [issue](https://issues.apache.org/jira/projects/BEAM/issues/BEAM-12659?filter=allissues&orderby=created+DESC%2C+priority+DESC%2C+updated+DESC) in Beam's BigQuery integration (which, as far as I can tell, is officially maintained by Google). The gist of it is that when you're using the native Python Beam implementation, you can't upload data to BigQuery in large batches --- you can only stream it, which is significantly slower than batch uploading. While it's still mostly _usable_ (streaming the data into BigQuery instead of uploading it in one big batch works well enough), the issue makes uploading some large datasets prohibitively slow.

As of September 7 2021, the issue I filed has been neither acknowledged or triaged. That's totally understandable! I get that fixing bugs can take time, even on the most well-resourced open source projects. And I understand that the Beam maintainers have a lot to deal with. 

But if this issue goes unresolved for a long period of time, **my employer might pay me to fix the issue myself and contribute the change upstream**. That doesn't sit well with me. We pay Google a lot of money to use their products, and having to fix bugs in those products ourselves isn't what we signed up for.

While I'm lucky that my employer encourages contributing fixes and improvements to the open source projects we use, those projects are essentially always maintained by volunteers. I don't think it's our responsibility to fix the BigQuery integration in Beam.

Some of the Beam maintainers are volunteers, to be clear, and I don't think the responsibility to fix this issue falls on them either. Google contributed the BigQuery code to Beam as part of their Dataflow and BigQuery products, so I think the maintenance burden for those contributions falls to Google. Just because the specific code that's broken is open source doesn't mean that you should accept the maintenance burden yourself.

There's a broader question, which is whether Google transferred Beam to Apache to outsource the maintenance burden for the project as a whole to, as a friend of mine put it, "a community made of volunteers who don't owe you anything." But that's a topic for another post.

### Stripe does it right

Now let's take a look at the Stripe Python client library. [Stripe](https://stripe.com) is a company that makes processing online payments simple. In exchange for their payment processing, Stripe takes a small percentage of every transaction. Stripe --- as great a company as they may be --- doesn't maintain their Python client library for free. They maintain their Python client library because it's part of their product!

While Stripe's customers don't pay for access to the client library specifically, they do pay Stripe to make processing online payments easier, and having a well-maintained Python client library is an important part of Stripe's product offering.

Now imagine something broke in the Stripe Python client library, and you submitted a bug report. Wouldn't you be frustrated if Stripe responded by saying "Hey, we don't have the bandwidth to fix this right now, but you're welcome to submit a pull request and fix this yourself"? Excuse me? 

By submitting an issue, you're already providing your work to Stripe for free. (Perhaps their quality assurance team should have caught the issue!) By submitting a pull request, you would be essentially improving their product for them. Stripe could respond by saying that the issue isn't a priority, but it's certainly not *your responsibility* to fix their bugs.

Fortunately, this isn't what Stripe does. They are incredibly responsive and work with users to resolve issues (even when those [issues](https://github.com/stripe/stripe-python/issues/716) aren't necessarily with the Stripe client itself). They don't respond to feature requests by saying that they'd accept a pull request making the change.

Stripe appears to treat triaging, responding, and supporting the users of their Python library as another form of their (exceptional) customer support. They recognize that their Python library is an important part of their product, so supporting the users of the library is an important part of their customer support.

### What can you do?

Not all companies manage their open source wrapper projects like Stripe. So what can you do when you're running into an issue with an officially-maintained corporate open source "client" for a proprietary product? You can hope that the company will notice your issue and fix it themselves. Or you can vote with your wallet and move to a different provider (though this often isn't practical). Or you can give in and contribute a fix yourself, as I might soon have to do with BigQuery in Beam.

To be clear, I don't think that that helping large corporations directly or indirectly is somehow wrong, and I have nothing against proprietary software (though I'll always prefer open source software to a proprietary equivalent). If you want to submit a pull request to the Stripe Python client library or to the BigQuery integration in Beam, go ahead --- that's your choice! I'm just frustrated that a large, well-resourced corporation is shifting the maintenance burdens of its product to customers. And I worry this isn't uncommon.

_Aside: I recognize it's unclear whether these open source wrapper libraries are open source in any meaningful sense. As one reviewer argued, if you can't cut the vendor out entirely and run the project entirely yourself, it's not really "open source" at all._

_Thank you to everyone who provided valuable feedback on earlier drafts of this post, many of whom are [Recursers](https://recurse.com)._
