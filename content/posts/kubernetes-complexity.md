---
title: "Wait, did Kubernetes just reduce complexity?"
tags: ["ops", "technical", "kubernetes", "shynet", "blag"]
date: 2021-01-25T10:13:26-05:00
toc: false
draft: false
---

In February, my Google Cloud free credits will expire, so yesterday I decided to migrate many of my [Politiwatch](https://politiwatch.org) projects to Microsoft Azure (where I have recurring free credits). I thought this process would take days—but thanks to Kubernetes, it only took about 45 minutes.

### Wait, what? Why are you using Kubernetes?

For almost everyone, [Kubernetes](https://kubernetes.io)—the popular container-based infrastructure orchestration tool—is overkill. I'm no exception; it's overkill for me too. But because I want experience with it, I use Kubernetes to host almost all of my projects. I don't _need_ to do this, but most public clouds have such good managed Kubernetes offerings that it doesn't make my life much more difficult.

As a bonus, Kubernetes lets me cram all of my projects on a single small VM when traffic is low but automatically scale up when traffic is high using spot/preemptible instances—meaning that I end up paying significantly less on hosting than I otherwise would. (Even when using the managed Kubernetes offerings, I don't have to pay for the cluster itself—just the nodes that make it up.)

And finally, a bonus of using Kubernetes is that I have less vendor lock-in. Instead of using managed services (like Google's Memorystore), I just run a Redis instance in Kubernetes and wire everything together using Kubernetes' cluster network management. This is the biggest reason why migrating from Google Cloud to Microsoft Azure took so little time.

### So what did I actually migrate?

The biggest project that I migrated is [Shynet](https://github.com/milesmcc/shynet), my open source analytics tool. While my projects don't get _that_ much traffic—certainly not enough to warrant running multiple Shynet nodes behind a load balancer with separate worker processes—I still run Shynet in just about the most complicated way possible to ensure that when bugs arise in Shynet, I'm the first one to notice them.

My Shynet setup looks like this:

* Approximately three webserver instances behind a load balancer
* A small Redis instance to manage caching (which Shynet uses heavily) and a job queue
* Approximately three background workers to process ingested data
* A PostgreSQL database

While this setup isn't _that_ complicated, it's still overkill for me. But fortunately, everything is wired together using Kubernetes except the database, so when the time came to move this entire setup to a new cloud provider, it was trivial.

### How did the migration go down?

First, I exported the database on Google Cloud to a `.sql` file that I imported into a managed database on Azure.

Then, I edited some Kubernetes secret config files to point my Shynet nodes to the new database. (Really, I was just changing environment variables.) I connected to the new Kubernetes cluster on Azure, ran `kubectl apply -f secrets.yml` and `kubectl apply -f deployments.yml`, and waited for everything to come online.

Finally, I went to Cloudflare and pointed `shynet.rmrm.io` from the old Kubernetes cluster on Google Cloud to the new one on Azure.

And then I was done.

I didn't have to change how the webserver nodes connected to Redis—it's the same local host (`redis://shynet-redis.default.svc.cluster.local/1`). I only had to change the database host and update the DNS. And then everything was alive.

To be clear, I'm almost certainly not using Kubernetes to its full potential, so feel free to let me know if you see clear areas where I could improve. [Here](https://github.com/milesmcc/shynet/tree/dev/kubernetes) are my Shynet Kubernetes config files. I'm a bit hesitant about running the database inside Kubernetes as well, but that _would_ be a neat next step—Azure's managed database is expensive and not that good.

### Ok, so what?

Honestly, not much. I'm just feeling good. I use Kubernetes mostly as an exercise, and the fact that it helps me avoid platform lock-in is just an added bonus. But yesterday, as I was performing this migration, that lack of lock-in really came in handy.