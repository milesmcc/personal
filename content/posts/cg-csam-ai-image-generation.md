---
title: "AI image generators threaten child safety investigations"
tags: ["safety", "ai", "ncmec", "blag"]
date: 2023-08-31T12:05:00-07:00
draft: false
---

I believe that generative AI, developed and deployed thoughtfully, has the opportunity to profoundly reshape the world for the better. Emphasis on _developed and deployed thoughtfully_.

But when I discuss the safety risks of generative AI with peers and colleagues, my conversations are often framed around hypothetical future harms, ranging from election interference and harassment at scale to species-level existential risks.

The implicit assumption in these forward-looking discussions is that the risks of generative AI are largely ahead of us. For now, the thinking goes, we're (mostly) fine.

That's wrong. I want to share what I believe is among the most pressing present-day harms of generative AI: Image generation tools like Stable Diffusion throw a wrench into tech platforms' child safety investigative pipelines, hindering law enforcement's ability to stop hands-on abuse.

_A quick note: The challenge that AI image generation tools pose for child safety investigations is certainly not this technology's only present-day harm. For example, the FBI recently [issued a PSA](https://www.ic3.gov/Media/Y2023/PSA230605) warning that AI image generation tools are being used to generate non-consensual intimate imagery (NCII) for extortion. I focus on the impact toward child safety investigations because the issue is more subtle and lesser-known._

## The old online child safety pipeline

I'm not an expert in child safety investigations, but I did help develop and maintain a child sexual abuse material (CSAM) monitoring and reporting system at the [Stanford Internet Observatory](https://cyber.fsi.stanford.edu/io). Though other trust and safety work, I'm also somewhat familiar with how large platforms monitor and block the spread of CSAM. Here's a rough overview of how the process works in the United States:

* When a user posts media on a platform, automated systems scan that media to make sure that it is not CSAM. Two of the most prominent scanning systems are Microsoft's[  PhotoDNA](https://en.wikipedia.org/wiki/PhotoDNA) and Google's [Content Safety API](https://protectingchildren.google/#tools-to-fight-csam). PhotoDNA checks content against a database of known CSAM, while Google's Content Safety API can detect previously-unseen CSAM. Users can also report CSAM through in-platform reporting flows.

* When CSAM is detected --- either through automatic identification of previously-known CSAM, or through a combination of ML systems, human reports, and moderator review --- it's reported to the National Center for Missing and Exploited Children (NCMEC), which triages the report. NCMEC receives a _lot_ of reports --- more than [32 million](https://www.missingkids.org/content/dam/missingkids/pdfs/OJJDP-NCMEC-Transparency_2022-Calendar-Year.pdf) in 2022 --- so not every report can be investigated by law enforcement.

* One way that reports are triaged is based on whether the reported content has been previously seen online; content that has never been seen before often indicates abuse in progress. (Most of the CSAM reported to NCMEC is recirculated; in their transparency report, [they explain](https://www.missingkids.org/content/dam/missingkids/pdfs/OJJDP-NCMEC-Transparency_2022-Calendar-Year.pdf) that a "majority of uploaded files reported to the CyberTipline consists of existing, or previously seen, content that has circulated for years and continues to be traded and shared online among offenders.")

* Finally, NCMEC then flags actionable and/or high-priority reports to law enforcement for further investigation. A key factor in the priority of a report is the degree to which it suggests that a child is in imminent danger. In 2022, NCMEC [submitted](https://www.missingkids.org/cybertiplinedata#reports) roughly 49,000 of these "urgent" reports.

A key part of triage is whether the reported CSAM has been previously seen. After all, content that has been recirculating for years likely doesn't indicate active hands-on abuse, while newly seen content might. This important triage mechanism relies on the assumption that all depicted abuse actually happened. But what happens when that assumption breaks down?

## Child safety investigations meet AI image generation

The Stanford Internet Observatory and Thorn recently [released an excellent report](https://cyber.fsi.stanford.edu/io/news/ml-csam-report) on generative image models and CSAM. The report explains that image generation models can be used to generate realistic-looking sexually explicit content involving children:

> Near-realistic adult content is currently distributed online in public and private web and chat forums. This advancement has also enabled another type of imagery: material in the style of child sexual exploitation content.

This content, which the report calls computer-generated CSAM (CG-CSAM), is not hypothetical. It's real, and it's spreading online.

> Currently, the prevalence of CG-CSAM is small but growing. Based on an internal study by Thorn, less than 1% of CSAM files shared in a sample of communities dedicated to child sexual abuse are photorealistic CG-CSAM, but this has increased consistently since August 2022.

What are the implications for child safety investigations? The report does not mince words:

> In a scenario where highly realistic computer-generated CSAM (CG-CSAM) becomes highly prevalent online, the ability for NGOs and law enforcement to investigate and prosecute CSAM cases may be severely hindered.

As CG-CSAM becomes more common, it will constitute an increasingly large proportion of reports to NCMEC. Like all content, CG-CSAM will not be part of NCMEC's database of known CSAM when it is first generated.

But unlike non-CG-CSAM, this content does _not_ document hands-on abuse or necessarily suggest that a child is in imminent danger. Absent other information, investigators will not know whether the depicted victim is a real person.

As CG-CSAM becomes more common, the sheer volume of reports will [overwhelm](https://www.washingtonpost.com/technology/2023/06/19/artificial-intelligence-child-sex-abuse-images/) law enforcement, platforms, and NGOs; NCMEC will also lose a high-fidelity signal in their triage process.

Their already-hard job is about to get a lot harder.

## What can we do?

The Stanford Internet Observatory/Thorn report lays out a few potential mitigations, such as embedding watermarks in generated images and somehow biasing models against generating sexual content depicting minors. (Some open source models [already implement](https://github.com/huggingface/diffusers/blob/aedd78767c99f7bc26a532622d4006280cc6c00d/src/diffusers/pipelines/stable_diffusion_xl/pipeline_stable_diffusion_xl.py#L892) basic watermarking.)

But as the report itself notes, none of these mitigations are sustainable long-term. In trust and safety, you typically have an intelligent and motivated adversary; the "bad guys" can react and adapt to whatever protections you might implement, and some safeguards can backfire as vectors for further abuse.

For example, while there is little reason for CG-CSAM producers to _remove_ embedded watermarks, offenders might falsely apply watermarks to real CSAM in an effort to mask their activity. Some kind of cryptographic scheme with secure perceptual hashes may prevent this kind of abuse, but I am not aware of any kind of cryptographically secure perceptual hash, and even if one did exist, it's unclear how the broader cryptographic scheme would work.

(Plus, while it may be possible to embed some kind of watermark into models themselves, there are a number of existing open source models that do not contain such schemes; these existing models can now be used to generate CG-CSAM in perpetuity.)

One promising approach might be [generalized detection capabilities](https://www.nytimes.com/interactive/2023/06/28/technology/ai-detection-midjourney-stable-diffusion-dalle.html) for AI-generated imagery; for such a system to work in the context of CG-CSAM, it would need to both 1) generalize to many different models --- present and future --- and 2) be resistant to adversarial attempts to make real imagery appear AI-generated.

But more broadly, any long-term solution must tackle the issue systemically. Here, the fundamental problem is that "unseen imagery" previously strongly suggested active hands-on abuse; that is no longer necessarily the case. Are there alternative sources of investigative leads that might exist? I'm not sure. I hope so.

There's only one thing I know with certainty: The harms of generative AI are not far-off and hypothetical. They're real --- and they're here. We need to get to work.

_Thank you to David and Rhythm for reviewing drafts of this post. All errors remain my own._