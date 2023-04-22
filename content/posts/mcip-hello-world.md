---
title: "Dissecting \"Hello World\" in Java"
tags: ["mcip", "java", "technical"]
date: 2020-06-11T17:53:15Z
draft: true
---

> **Note:** this post is intended to formalize intuitions about Java for students in my AP CS course. This isn't supposed to be a "Hello World" tutorial! You'll need some existing experience with Java to find this useful.

Let's write a very simple Java program that prints `Hello, world!` to the console. This is just about the simplest program imaginable, and you should already feel comfortable with many of these concepts. Our goal here is to formalize the knowledge and intuitions you've already developed.

Don't worry about understanding what every little thing in the program means right now; just make sure you can follow along.

### Hello, world!

Without further ado, here's our Hello World program. It probably looks familiar.

If the code below can't run, try opening this page in incognito mode.

{{< embed url="https://repl.it/@milesmcc/Hello-World?lite=true" >}}

**The "Hello, world!" Repl. This is your first program! Congratulations.** Note that the actual code here starts with `class` and ends with `}`---the numbers on the left are line numbers, and aren't part of the program.

Click the green button to run the code. Do you see that the program printed out the text `Hello, world!` to the console? If so, great---it means that the program ran.

The **console** is the black section of the interface. This is also often called a *terminal*.

We're not going to break down what everything in our program means yet. For now, just take a second to see what happens if you change things. Try changing the text from `"Hello, world!"` to something else. What happens if you remove the quotes? What if you remove `void` or `static`? Does the program still run, or do you get an error?

### What's going on here?

There's a lot going on here, so let's take a deeper look at what everything in our Hello World program actually means.

Along the way, we're going to add **comments** to our code that explain what we're doing. It's important to write code in a way that's clear to both computers *and* people, so it's often helpful to leave comments to explain what we're doing when the syntax on its own might be confusing.

Java ignores comments---it doesn't try to run them---so you can use normal language inside them. They are only for you and others' who read your code, so there's no need to follow Java syntax. In Java, anything that comes between `//` and the end of a line is a comment. You can write multi-line comments by putting text between `/*` and `*/`.

### Defining a main class

`class Main { ... }` groups all the code between the brackets into a **class** called `Main`. We'll learn about classes in more detail later. For now, just think of them as a way to group code into concepts. In Minecraft, for example, a `Player` is a class, as is a `Pig`.

**Why "main"?** We named our class `Main` because inside Repl, the name of our file is `Main.java`. When you run a program, Java looks for the class with the same name as the file you're running. If we renamed this file to `HelloWorld.java`, we would need to name the class `HelloWorld` (because that's where Java would look to run our code).

{{< embed url="https://repl.it/@milesmcc/Commented-Hello-World?lite=true" >}}

Try editing one of those comments and running the code again. Does anything change? What happens if you remove `//`? What happens if you put `//` before `System.out.println("Hello, world!")`? Does the program still output anything? Why or why not?

### Defining a method

`public static void main(String[] args) { ... }` is a **method** called `main`**.** Methods are a way to group instructions together. For example, a player might have a method called `setFullHealth()` or `teleport()`. Don't worry about what `public`, `static`, and `void` mean---for now, just think of these words as "settings" that tell Java how to interpret our method.

**If you're really curious,** here's what public, static, and void mean here (note that you'll need to have completed the Codecademy units to understand these explanations):

`public` means that the method can be called from code outside of our class (in this case, the `Main` class). You can also mark methods as `private`, which means that only code *inside* your class can call the method.

`static` means that the method isn't associated with any particular instance of `Main`. Instead, it's bound to the class itself.

`void` means that the function doesn't return any value when called. If this were `int`, for example, then the function would need to return an integer.

> **Confused?** Don't worry. You'll understand these concepts with practice.

Right now, `main(String[] args) { ... }` is the important part of the method. The text that comes immediately before the parentheses is the **name** of the method (in our program, the method's name is `main`), and the part between the parentheses (`(String[] args)`) are the **arguments** of the method.

You can think of arguments as a way for methods to "ask" for information. For example, a teleport method needs to know the location to teleport the player to, so the destination location **would be an argument of the method.

When Java runs a program, it looks for a method called `main` to run. That's why we named our own method `main`: we want Java to run it when we start our program. The part of the method inside the brackets (which I shortened to `...` above) are the actual instructions that make up the method.

```
class Main {
	public static void main(String[] args) {
		// This is a valid Java program! You now know what's going on
		// here. This is the part of the method where we actually put
		// the things we want the computer to do.
	}
}

```

### Printing to the console

Finally, `System.out.println("Hello, world!");` is a **statement***.* You can think of a statement in Java as a single instruction for the computer to run. This statement tells the computer to print the text `Hello, world!` to the console. In Java, all statements end in semicolons.

**Why must all statements end in semicolons?** In Java, it turns out that line breaks don't actually *mean* anything. Like comments, they exist to make the program easier to read. A semicolon is how you tell Java that the statement is complete.

Let's break this statement down even further, though. Printing text isn't actually a single action; it's a bunch of actions! Internally, your computer actually prints each letter (and, in some cases, each pixel!) one by one. Fortunately, Java has a built-in *method* that does all this for us, and we access it as `System.out.println`.

Under the hood, what our statement is doing is telling Java to run *another* method called `System.out.println`. This statement---called a *method call*---is an extraordinarily common type of statement, and for good reason: it allows us to treat methods as *reusable* bundles of instructions that can be called whenever and however we want.

**The idea of a method can be difficult to grasp.** Here's a real-world analogy: imagine you have two lists of instructions, Morning Routine and Clean Up. Clean Up might have the tasks "brush teeth" and "make bed." Morning Routine might have the instructions "wake up," "drink water," and "do everything in Clean Up." In this analogy, Morning Routine and Clean Up represent methods, and the instruction inside Morning Routine to do everything in Clean Up represents a method call.

### Calling another method

By referring to `System.out.println` here inside *our* method, we're **calling** the method. When the computer runs our method (called `main`), it will see our call to `System.out.println` and will run all the code inside *that* method.

If we wanted to print a blank line to the console, we could run `System.out.println()`. This should make some intuitive sense: we know that arguments are what go between the parentheses when we call methods, so it makes sense that running `System.out.println` with no arguments would print an empty line. In our case, though, we want it to print "Hello, world!", so we pass `"Hello, world!"` as an argument to the method (by putting it between the parentheses).

### Literals and Expressions

There's one final part of our program that we haven't dissected yet: `"Hello, world!"`. This is ****called a **string literal,** and it represents raw text.

In programming, pieces of text are called **strings**. You can think of a string as a *string of characters.*

The quotes around `Hello, world!` indicate to Java that what's inside them shouldn't be treated as Java syntax, but instead as a string (raw text). Note that this is fundamentally different from a comment: string literals are included in your program as information, while comments are just thrown out.

More specifically, a string literal like `"Hello, world!"` is an **expression**. Just as a statement represents some kind of *action*, an expression represents some kind of *information*. `1` is an expression that represents the number one; `"Hello, world!"` is an expression that represents the text "Hello, world!". `1 + 2` is an expression as well: it represents one and two added together, which evaluates **to 3.

**Evaluation** is the process the computer performs when it turns an expression into a single, concrete value. For example, the computer evaluates `1 + 2` to get 3. Some expressions, like `1` and `"Hello, world!", are already in their simplest form---these expressions are called literals.

If the difference between literal and non-literal expressions is confusing to you, don't worry. You'll get an intuition for it over time, and it's not critical.

### Piecing it all together

We've now dissected the entire Hello World program, and hopefully formalized many of your intuitions about the way Java works. If you're still confused about methods, statements, and expressions, review this guide again and revisit your introductory Java materials. With practice, it will all become second nature in no time.
