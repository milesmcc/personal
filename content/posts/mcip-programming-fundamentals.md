---
title: "Fundamental concepts of programming"
tags: ["mcip", "java", "technical"]
date: 2020-06-08T17:50:13Z
toc: false
draft: true
---

> **Note:** this short post is intended to be a brief introduction to the idea of programming. It's written for students in my AP CS course, but I've decided to share it with the world as well.

A **computer program** is a list of instructions that a computer can execute. Despite being foundational to the modern world, computers themselves are pretty stupid—so these instructions are explicit and simple. A single instruction might ask for something like `add 1 and 2 together` or `print "Hello, world"`.

**Print** means "show text to the user". When computers were first developed, they *printed* their output on a long sheet of paper (like the receipt printer in most stores). While most programs today run on screens, the word "print" has stuck.

Of course, you can't just put `print "Hello, world!"` into a file and expect the computer to know how to run it. Computers want the instructions in a very specific format called a *binary* (which, as the name suggests, is just a bunch of ones and zeros). Fortunately for you, you pretty much never need to write a binary from scratch. Instead, you use a programming language.

### Programming Languages

A **programming language** is a way to write precise instructions for the computer in a more human-friendly way. Instead of zeros and ones, you write **code**: text in a format that's specific to the programming language you're using. Java code, for example, is text written in Java's format. This specific format is called a **syntax**, and it's analogous to the idea of grammar in English. 

What does code actually look like? Here's a snippet of Java code that would set a player (called `player` in this example) to full health:

```java
player.setHealth(20);
```

Notice that we *didn't* just write `set full health for the player` or `give the player full hearts`; instead we wrote `player.setHealth(20)`. Programming languages are very specific about the way you write things, and Java is no exception.

Why does 20 correspond to full health when programming in Minecraft? Each half heart is 1, so full health—10 hearts—is 20 half-hearts.

### Running Code

To turn your code into something your computer can actually understand (a *binary*), you use your programming language's **compiler.** A compiler reads code, processes it, and then generates a file that your computer can run. In the Java programming language, these binaries are called "Jar" files, and usually end with `.jar`. Other file extensions for compiled programs are `.exe` (on Windows) and `.app` (on Mac).

Even if you're running your code on a site like Codecademy or Repl (pronounced repple), your code is still being run through a compiler then executed—it's just happening on the website's servers, not your own computer.