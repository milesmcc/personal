---
title: "I thought it’d be a good idea to establish scopes at parse time"
subtitle: ""
tags: ["technical", "turtle", "blag"]
date: 2020-07-23T16:12:05Z
draft: false
aliases: ["/errata/parse-time-scopes/"]
---

Over the past week or so, I’ve been working on building my own simple interpreted programming language. My goal is to learn about language design, Lisp, and systems programming—all while building a language that is fun to use (and maybe, just maybe, one day I'll find it useful for something).

Even though the project has gone well so far (mostly thanks to the safety guarantees of the Rust programming language), I also made a *lot* of mistakes as I implemented the first version of the interpreter, and I'm sure I'll make many more over the course of the project.

I’ll write more about the process of building the language in a future series of posts, but thought I’d dedicate an errata post to one mistake I made in particular: trying to establish scopes at parse time.

> Note: this post is heavy on technical details, but completely devoid of code samples. That's because I don't want this post to be about syntax. Hopefully the explanation below isn't hopelessly abstract!

### How scopes are *supposed* to work

When you refer to a variable (identifier), I want the interpreter to first search the local scope for a value—for example, the current function invocation. Then, if it doesn’t find a value, I want it to search the (lexical) parent scope, and so on until eventually it reaches the root (lexical) scope.

If you call a function with arguments, for example, those arguments’ values should be bound in the scope of the function invocation—*not* in the scope of the calling function. That is to say that a function shouldn’t affect the scope where it’s called.

### How scopes *actually* ended up working

For some reason, I thought it would be a good idea to calculate scopes at parse time, so the scope tree roughly matched the parse tree. (This is a *very* naive way to implement lexical scoping, as I would soon learn.)

At first, this worked well! Functions weren’t affecting the scopes of where they were called from. But oh no — they *were* affecting the scope of where they were defined in ways they weren’t supposed to. For example, each time a function was called, it would reuse its old scope. This wasn't usually an issue, as my code was simple and single threaded, but it made recursion and multithreading nearly impossible.

### How scopes work now

I’ll save this for a future post, as I’m still figuring it out. Scopes are no longer computed at parse time, but instead created during evaluation. Functions, when they are defined, internally store a reference to _their_ parent scope so that lexical scoping works as expected (mostly for imports).

For now, it works. I still haven’t figured out a good namespace/module system, though, so everything is in flux until then...