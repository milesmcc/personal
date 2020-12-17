---
title: "Calculating a slice of pi"
tags: ["math", "pi", "interactive"]
date: 2020-12-16T16:21:04-05:00
toc: true
draft: true
mathjax: true
---

Let's calculate a slice of pi in your browser. (Please forgive the pun.)

If you're reading this, you almost certainly don't need me to convince you that pi --- the ratio of any circle's circumference to its diameter, π --- is cool. It has infinitely many digits, and those digits never repeat. Wherever circles appear, pi is nearby. The constant isn't limited to geometry, though: it appears in [all sorts of places](https://en.wikipedia.org/wiki/Pi#Role_and_characterizations_in_mathematics) across math, physics, engineering, and other disciplines.

There's a decent chance you know the first few digits of pi off the top of your head! I can recite around fifteen digits, plus or minus a few depending on the day: `3.14159265358979...`. This level of accuracy is good enough for almost all real-world applications (a circle the size of earth would have an error of only a few millimeters), but we can do better. We're going to calculate the first `n` digits of pi together using _your_ device. (You'll get to choose the value of `n` later.)

While you won't be breaking the [world record](https://www.guinnessworldrecords.com/world-records/66179-most-accurate-value-of-pi#:~:text=The%20most%20accurate%20value%20of,over%208%20months%20in%20total.) of 50 trillion digits set by Timothy Mullican in early 2020, you'll easily surpass a thousand, and you'll learn about some cool algorithms along the way. And if you read to the end, you'll see how we "trick" JavaScript into using `BigIntegers` to reason about pi --- which, as you know, is very much _not_ an integer.

### History of Pi

The first written [approximations of pi](https://en.wikipedia.org/wiki/Approximations_of_%CF%80) appeared in Babylon and Egypt, and were accurate to around two base-10 decimal places. While that may not sound impressive, consider that correctly estimating pi to two decimal places is at most 0.2% away from the true value!

By 400 C.E., Chinese mathematicians correctly estimated the first seven digits of pi. There wasn't much improvement until the late middle ages, when [John Manchin](https://en.wikipedia.org/wiki/John_Machin) correctly computed the first 100 digits using what we now call Machin's formula:

$$ {\frac  {\pi }{4}}=4\arctan {\frac  {1}{5}}-\arctan {\frac  {1}{239}} $$

He then computed the arctangents using a [Taylor series](https://en.wikipedia.org/wiki/Taylor_series) expansion. Machin's approach converged to pi far more quickly than other contemporary approaches, making hand-calculation feasible. Other mathematicians caught on to his approach, and [Machin-like formulas](https://en.wikipedia.org/wiki/Machin-like_formula) became among the most popular ways of computing pi until computer-driven approaches emerged in the 1950s.

### The Chudnovsky algorithm

For our calculation of pi, we'll be focusing on the [Chudnovsky algorithm](https://en.wikipedia.org/wiki/Chudnovsky_algorithm), which the [Chudnovsky brothers](https://en.wikipedia.org/wiki/Chudnovsky_brothers) published in 1988. This modern algorithm is quite efficient, and was used for all the most recent world-record calculations of pi (including the 50 trillion digit record set in 2020). We won't do anything more than a superficial overview of this algorithm, but here it is in its full glory:

$$ {\displaystyle {\frac {1}{\pi }}=12\sum _{q=0}^{\infty }{\frac {(-1)^{q}(6q)!(545140134q+13591409)}{(3q)!(q!)^{3}\left(640320\right)^{3q+3/2}}}} $$

At a glance, you may notice that it is a [hypergeometric series](https://en.wikipedia.org/wiki/Generalized_hypergeometric_function), that it has several mystical constants, and yields the _reciprocal_ of pi. If you're curious, a more detailed proof is available [here](https://arxiv.org/abs/1809.00533). I'm not even going to pretend to fully understand this algorithm; maybe someday I will, but that day is not today.

Wikipedia suggests computing pi using an equivalent but more performant form, shown below.

$$ {\displaystyle {\frac {426880{\sqrt {10005}}}{\pi }}=\sum _{q=0}^{\infty }{\frac {(6q)!(545140134q+13591409)}{(3q)!(q!)^{3}\left(-262537412640768000\right)^{q}}}} $$

This is the version that we'll be using. Building on Arthur Vause's excellent [JavaScript implementation](https://pi-calculator.netlify.app/), I've written a relatively short script that calculates pi to an arbitrary number of digits, updating the visualization below as it goes. You can play with it below, then we will explore how it works.

### Run it yourself

Have fun with the interactive calculator below! Because I implemented this in pure JavaScript, however, it can get a bit wieldy when working with more than around 100,000 digits --- this behavior is mostly just because it's hard to display that many digits on the page at once! Because of this browser overhead that I'm not entirely sure how to bypass, this implementation doesn't strictly follow the asymtotic time complexity of the Chudnovsky algorithm, \\( {\displaystyle O(n\log(n)^{3})} \\).

**A warning for Firefox users:** Firefox's `BigInteger` implementation tends to overflow at around 100,000 digits. If you get wrong results, that's why. This may be fixed in a more recent version of Firefox. On my computer, Chromium-based browsers are about twice as fast.

Once the calculation is complete, you'll see a few stats displayed about the computation. Note that the calculation times shown _excludes_ throttling, but might include some browser overhead from the throttling (e.g., updating the progress bar and output). If you're using this as some kind of benchmark, be sure to set the throttling to `AFAP` (as fast as possible).

<script src="calc.js"></script>

<form onsubmit="return initiateCalculation()">
    <div class="sm:grid gap-4 grid-cols-2 mb-3">
        <div>
            <p class="label">Digits</p>
            <input class="field my-1" type="number" placeholder="Digits to calculate..." value="1000" id="digits-input">
        </div>
        <div>
            <p class="label">Throttling</p>
            <div class="select my-1">
                <select name="throttle-input" id="throttle-input">
                    <option value="1">Super slow</option>
                    <option value="25">Slow</option>
                    <option value="50">Normal</option>
                    <option value="100">Brisk</option>
                    <option value="200">Fast</option>
                    <option value="0">AFAP (no throttling, may freeze)</option>
                </select>
            </div>
        </div>
    </div>
    <div class="flex flex-wrap">
        <div class="flex-shrink mr-2 mb-2">
            <button class="button ~urge !high" id="button-input" type="submit">Calculate</button>
        </div>
        <div class="flex-shrink mr-2 mb-2">
            <button class="button ~urge" onclick="document.querySelector('#pi-output').textContent = '(Output cleared!)';"  type="button">Clear</button>
        </div>
        <div class="flex-shrink mr-2 mb-2">
            <button class="button ~critical !high hidden" onclick="haltCalculations()" id="halt-input" type="button">Halt</button>
        </div>
    </div>
</form>

<div class="flex items-center">
    <progress class="progress ~urge !high hidden mb-2" value="0" max="1" id="progress-output"></progress>
    <p class="font-mono hidden" id="stats-output"></p>
</div>

<aside class="aside ~critical hidden" id="error-output"></aside>

<div class="font-mono section p-4 bg-neutral-200 overflow-y-auto max-h-screen">
    <span id="pi-output">Digits will appear here...</span>
</div>

### How it works

There are times that a line-by-line code walkthrough is interesting; I don't think this is one of those times. If you're curious about the code itself, you can view the unminified [source code](https://github.com/milesmcc/personal/blob/master/content/posts/slicing-pi/calc.js) on GitHub.

Instead, I want to explore the code at a higher level. The calculation was done entirely in vanilla JavaScript, so we use the built-in `BigInteger` implementation to carry out the calculation. As the name suggests, though, a `BigInteger` can only store _integers_ --- so how can we use them to compute pi, which is an irrational number?

Recall that a [rational number](https://en.wikipedia.org/wiki/Rational_number) is defined as any number that can be expressed as the quotient of two integers --- that is, \\( \frac{p}{q} \\) for any \\(p, q \in \mathbb{Z} \\). We now have a way to reason about all rational numbers with arbitrary precision!

The key idea is that we compute the numerator and denominators separately, shift the numerator by the necessary number of digits (so that our output is another integer), and only _then_ perform the division. (The one caveat is that we need to remember where to put the decimal place!) Taking a second look at the optimized Chudnovsky algorithm, note that the both the numerator and denominator are just extraordinarily large integers:

$$ {\displaystyle {\frac {426880{\sqrt {10005}}}{\pi }}=\sum _{q=0}^{\infty }{\frac {(6q)!(545140134q+13591409)}{(3q)!(q!)^{3}\left(-262537412640768000\right)^{q}}}} $$

In fact, the hard part --- at least from a _programming_ perspective --- is calculating \\( \sqrt {10005} \\)! Fortunately, this calculation can also be approximated to arbitrary precision using our numerator-denominator "trick" with `BigIntegers`.

### A simplified example

Let's take a look at how we can use this fractional `BigInteger` approach to calculate one giant number divided by another: \\( \frac{1234567898765432123456789}{1234567898765432123456790} \\). It may be hard to see, but the denominator is just the numerator plus one.

If we just ask JavaScript to perform this calculation, it tells us that the answer is one:

```javascript
let x = 1234567898765432123456789;
console.log(x / (x + 1)); // => 1
```

Of course, we know that isn't true. JavaScript is lying to us! It's performing [floating-point arithmetic](https://en.wikipedia.org/wiki/Floating-point_arithmetic), which means that there is a certain level of precision it just can't achieve. In other words, the result of our operation is so close to `1` that JavaScript literally _thinks_ the result is `1`.

Instead, we need to use JavaScript's `BigInteger`.

