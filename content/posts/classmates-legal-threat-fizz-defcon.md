---
title: "When your classmates threaten you with felony charges"
tags: ["security", "legal threats", "fizz", "defcon", "blag", "speaking"]
date: 2023-08-28T09:38:00-07:00
draft: false
---

A few weeks ago, I was part of a talk at DEF CON 31 called [The Hackers, The Lawyers, and the Defense Fund](https://forum.defcon.org/node/245742). I was asked to share my experience receiving a legal threat for good-faith security research from my classmates.

This story has been told before (e.g., by my [friend Aditya](https://saligrama.io/blog/post/firebase-insecure-by-default/) who was also involved and by the [Stanford Daily](https://stanforddaily.com/2022/11/01/opinion-fizz-previously-compromised-its-users-privacy-it-may-do-so-again/)), but I wanted to share my talk here for posterity.

The following is an approximate transcript. (If the language feels terse, that's why.) I've added a few links and cleaned up some of the language for clarity.

## The hack itself

Hey everyone! I’m going to briefly share my experience receiving a legal threat for good-faith security research, and then I’m going to share three key takeaways I had from this quite unpleasant experience.

But first, shoutout to [Adi](https://saligrama.io) and the whole Applied Cybersecurity crew. Adi was one of my collaborators on this disclosure, and we wouldn’t have been able to stand up for ourselves like we did if it wasn’t for the Stanford Applied Cyber community.

Last October, a Stanford student startup called Fizz started getting popular on campus. It was an anonymous social media app that claimed to be something like “100% secure”. What could go wrong?

Well, me and few security-minded friends were drawn like moths to a flame when we heard that. Our classmates were posting quite sensitive stories on Fizz, and we wanted to make sure their information was secure.

So one Friday night, we decided to explore whether Fizz was really “100% secure” like they claimed. Well, dear reader, Fizz was not 100% secure. In fact, they hardly had any security protections at all.  

In only a few hours, we were able to gain full read and write access to their database, where they were storing all their user and post information — entirely deanonymized.

## Disclosing the vulnerability to Fizz

So we did what any good security researcher does: We responsibly disclosed what we found. We wrote a detailed vulnerability disclosure report. We suggested remediations. And we proactively agreed not to talk about our findings publicly before an embargo date to give them time to fix the issues. Then we sent them the report via email. 

At first, they were grateful. They thanked us for our report and said that fixing the issues was their top priority. Then a few weeks passed. They sent us some updates.

And then, one day, they sent us a threat. A *crazy* threat. I remember it vividly. I was just finishing a run when the email came in. And my heart rate went *up* after I stopped running. That’s not what’s supposed to happen.

They said that we had violated state and federal law. They threatened us with civil and criminal charges. 20 years in prison. They really just threw everything they could at us.

And at the end of their threat they had a demand: don’t ever talk about your findings publicly. Essentially, if you agree to silence, we won’t pursue legal action. We had five days to respond.

They wanted to scare us into silence.

## We're going to need a lawyer

What do you do when you get a letter like this? Well, I kind of freaked out. I was angry and scared.

Here’s the first thing my friend Cooper said in our disclosure group chat when we got the threat: “Stay calm. Don’t do anything fucking stupid. We’re going to need a lawyer.” If you can’t tell from his wisdom, it was not Cooper’s first time dealing with legal threats.

We started asking for help in our network, and within a few days, we were connected with Kurt and Andrew at the Electronic Frontier Foundation. Kurt and Andrew generously agreed to represent us in our response to the letter pro bono.

We walked them through our disclosure and all our documentation. And with their advice, we made the decision not to cave to Fizz's threats. That’s why I’m here on stage right now talking to you.

Kurt and Andrew drafted a response to Fizz. They really shut it down. (The Stanford Daily [published](https://stanforddaily.com/2022/11/01/opinion-fizz-previously-compromised-its-users-privacy-it-may-do-so-again/) Fizz’s threat and EFF’s response. I really recommend that you read these docs if you haven’t already. They're crazy.)

The Fizz team then asked to meet, and we were able to resolve the situation amicably. We pushed Fizz to proactively disclose the issues to their own users, which they eventually did.

## Reflecting on a stressful time

Now let’s take a quick step back. Getting a legal threat for our good-faith security research was incredibly stressful. And the fact that it came from our classmates added insult to injury.

I have three key takeaways from this experience I want to share.

1. _Keep your research above-board and well-documented._ Ahead of time, think about what you’re trying to accomplish with your research and make sure that you’re not crossing any ethical lines. A big reason why we were able to resolve this amicably — and why EFF was able to respond to Fizz’s threat so thoroughly — was that we played by the rules.

   We didn’t save or leak the data we had access to. We didn’t mess with anyone’s account. We didn’t cause any damage. And we kept detailed documented of everything we did. That clean documentation was incredibly helpful for us as we wrote up our vulnerability disclosure report. I imagine it also made Kurt and Andrew’s job representing us a lot easier.

2. _Stay calm._ I can’t tell you how much I wanted to curse out the Fizz team over email. But no. We had to keep it professional — even as they resorted to legal scare tactics.

   Your goal when you get a legal threat is to stay out of trouble. To resolve the situation. That’s it. The temporary satisfaction of saying “fuck you” isn’t worth giving up the possibility of an amicable resolution.

3. _Get a lawyer._ We could have tried to navigate the process on our own. But that would have been a profound mistake. They would have likely escalated. After all, they were banking on us being naive and caving to their scare tactics. Thankfully, Kurt and Andrew swooped in and saved the day.

   Now, not everyone has the ability to get EFF to represent them pro bono. But there are an increasing number of resources available to good-faith security researchers who face legal threats, and you should make use of them. Don’t try to fly solo.

Thank you.

![A photo of us after the talk. From left to right: Charley Snyder (Google), me, Harley Geiger (Venable), Kurt Opsahl (Filecoin Foundation), Hannah Zhao (EFF)](../classmates-legal-threat-fizz-defcon-media/talk.jpeg)

_I then handed things off to [Charley Snyder](https://twitter.com/charley_snyder_), the Head of Security Policy at Google, who spoke about his experience on the other side of the vulnerability disclosure process._
