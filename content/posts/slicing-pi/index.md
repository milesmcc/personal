---
title: "Calculating a slice of pi with trickery"
tags: ["math", "pi", "interactive", "blag"]
date: 2020-12-18T11:28:00-05:00
draft: true
mathjax: true
---

Let's calculate a slice of pi in your browser. (Please forgive the pun.) All we need is vanilla JavaScript, math, and a bit of trickery.

If you're reading this, you almost certainly don't need me to convince you that pi --- the ratio of any circle's circumference to its diameter, π --- is cool. It has infinitely many digits, and those digits never repeat. Wherever circles appear, pi is nearby. And the constant isn't limited to geometry: it appears in [all sorts of places](https://en.wikipedia.org/wiki/Pi#Role_and_characterizations_in_mathematics) across math, physics, engineering, and other disciplines.

While you won't be breaking the [world record](https://www.guinnessworldrecords.com/world-records/66179-most-accurate-value-of-pi#:~:text=The%20most%20accurate%20value%20of,over%208%20months%20in%20total.) of 50 trillion digits set by Timothy Mullican in early 2020, you'll easily surpass a thousand, and you'll learn about some cool algorithms along the way. And if you read to the end, you'll see how we "trick" JavaScript into using `BigInteger`s to reason about pi --- which, as you know, is very much _not_ an integer.

### Run it yourself

Let's get straight to it. Press 'Calculate' and watch the algorithm find pi! The flickering numbers are not random, nor are they just for effect --- at each step, you see the algorithm's best attempt at pi (and it gets more and more precise over time).

You can play with it below, then we'll explore how it works. If you're curious about the math, programming, context, and trickery behind this demonstration, be sure to read on.

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
            <button class="button ~urge @high" id="button-input" type="submit">Calculate</button>
        </div>
        <div class="flex-shrink mr-2 mb-2">
            <button class="button ~urge" onclick="document.querySelector('#pi-output').textContent = '(Output cleared!)';"  type="button">Clear</button>
        </div>
        <div class="flex-shrink mr-2 mb-2">
            <button class="button ~critical @high hidden" onclick="haltCalculations()" id="halt-input" type="button">Halt</button>
        </div>
    </div>
</form>

<div class="flex items-center">
    <progress class="progress ~urge hidden mb-2" value="0" max="1" id="progress-output"></progress>
    <p class="font-mono" id="stats-output">All systems go! Press 'Calculate' to run.</p>
</div>

<aside class="aside ~critical hidden" id="error-output"></aside>

<div class="font-mono section p-4 bg-neutral-100 overflow-y-auto max-h-screen">
    <span id="pi-output">Digits will appear here...</span>
</div>

Because this is pure JavaScript, it can get a bit unwieldy when working with more than around 100,000 digits --- it's hard to display that many digits on the page at once! As a result, this implementation doesn't strictly follow the asymptotic time complexity of the Chudnovsky algorithm, \\( {\displaystyle O(n\log(n)^{3})} \\).

On my computer, Chromium and WebKit-based browsers are about twice as fast as Firefox. Note that the times shown _exclude_ throttling, but might include some browser overhead that is only present when throttling is enabled (e.g., updating the progress bar and output). If you're using this as some kind of benchmark, be sure to disable throttling by setting it to `AFAP` (as fast as possible).

**A warning for Firefox users:** Firefox's `BigInteger` implementation tends to overflow at around 100,000 digits. If you get incorrect results, that's why. This may be fixed in a more recent version of Firefox.

### History of pi

The first written [approximations of pi](https://en.wikipedia.org/wiki/Approximations_of_%CF%80) appeared in Babylon and were accurate to around two base-10 decimal places. While that may not sound impressive, consider that correctly estimating pi to two decimal places is at most 0.2% away from the true value!

By 400 C.E., Chinese mathematicians correctly estimated the first seven digits of pi. There wasn't much improvement until the late middle ages when [John Manchin](https://en.wikipedia.org/wiki/John_Machin) correctly computed the first 100 digits using what we now call Machin's formula:

$$ {\frac  {\pi }{4}}=4\arctan {\frac  {1}{5}}-\arctan {\frac  {1}{239}} $$

He then computed the arctangents using a [Taylor series](https://en.wikipedia.org/wiki/Taylor_series) expansion. Machin's approach converged to pi far more quickly than other contemporary approaches, making hand-calculation feasible. Other mathematicians caught on to his approach, and [Machin-like formulas](https://en.wikipedia.org/wiki/Machin-like_formula) became among the most popular ways of computing pi until computer-driven approaches emerged in the 1950s.

### The Chudnovsky algorithm

For our calculation of pi, we'll be focusing on the [Chudnovsky algorithm](https://en.wikipedia.org/wiki/Chudnovsky_algorithm), which the [Chudnovsky brothers](https://en.wikipedia.org/wiki/Chudnovsky_brothers) published in 1988. This modern algorithm is quite efficient and was used for all the most recent world-record calculations of pi (including the 50 trillion digit record set in 2020). We won't do anything more than a superficial overview of this algorithm, but here it is in its full glory:

$$ {\displaystyle {\frac {1}{\pi }}=12\sum _{q=0}^{\infty }{\frac {(-1)^{q}(6q)!(545140134q+13591409)}{(3q)!(q!)^{3}\left(640320\right)^{3q+3/2}}}} $$

At a glance, you may notice that it is a [hypergeometric series](https://en.wikipedia.org/wiki/Generalized_hypergeometric_function), that it has several mystical constants, and yields the _reciprocal_ of pi. If you're curious, a more detailed proof is available [here](https://arxiv.org/abs/1809.00533). I'm not even going to pretend to fully understand this algorithm; maybe someday I will, but that day is not today. The core idea is that the more terms you include in the sum, the closer you get to pi --- and because this is a hypergeometric series, it approaches pi quite quickly.

Wikipedia suggests computing pi using an equivalent but more performant form, shown below.

$$ {\displaystyle {\frac {426880{\sqrt {10005}}}{\pi }}=\sum _{q=0}^{\infty }{\frac {(6q)!(545140134q+13591409)}{(3q)!(q!)^{3}\left(-262537412640768000\right)^{q}}}} $$

This is the version that we use. Built on Arthur Vause's excellent [JavaScript implementation](https://pi-calculator.netlify.app/), the demonstration above calculates pi to an arbitrary number of digits and updating the output as it goes.

### How it works

There are times that a line-by-line code walkthrough is interesting; I don't think this is one of those times. If you're curious about the code itself, you can view the unminified [source code](https://github.com/milesmcc/personal/blob/master/content/posts/slicing-pi/calc.js) on GitHub.

Instead, I want to explore the code at a higher level. The calculation was done entirely in vanilla JavaScript, so we use the built-in `BigInteger` implementation to carry out the calculation. As the name suggests, though, a `BigInteger` can only store _integers_ --- so how can we use them to compute pi, which is an irrational number?

Recall that a [rational number](https://en.wikipedia.org/wiki/Rational_number) is defined as any number that can be expressed as the quotient of two integers --- that is, \\( \frac{p}{q} \\) for any \\(p, q \in \mathbb{Z} \\). We now have a way to reason about all rational numbers with arbitrary precision!

The key idea is that we compute the numerator and denominators separately, shift the numerator by the necessary number of digits (so that our output is another integer), and only _then_ perform the division. (The one caveat is that we need to remember where to put the decimal place!) Taking a second look at the optimized Chudnovsky algorithm, note that both the numerator and denominator are just extraordinarily large integers:

$$ {\displaystyle {\frac {426880{\sqrt {10005}}}{\pi }}=\sum _{q=0}^{\infty }{\frac {(6q)!(545140134q+13591409)}{(3q)!(q!)^{3}\left(-262537412640768000\right)^{q}}}} $$

In fact, the hard part --- at least from a _programming_ perspective --- is calculating \\( \sqrt {10005} \\)! Fortunately, this calculation can also be approximated to arbitrary precision using our numerator-denominator "trick" with `BigInteger`s.

### A simplified example

Let's take a look at how we can use this fractional `BigInteger` approach to calculate one giant number divided by another: \\( \frac{x}{x + 1}, x = 1234567898765432123456789 \\).

If we just ask JavaScript to perform this calculation, it tells us that the answer is one:

```js
let x = 1234567898765432123456789;
console.log(x / (x + 1)); // => 1
```

Of course, we know that isn't true. JavaScript is lying to us! It's performing [floating-point arithmetic](https://en.wikipedia.org/wiki/Floating-point_arithmetic), which means that there is a certain level of precision it just can't achieve. In other words, the result of our operation is so close to `1` that JavaScript literally _thinks_ the result is `1`.

Instead, we need to use JavaScript's `BigInteger`. Using the process I described above, we're going to setup the numerator and denominators as big integers, then multiply the denominator by \\( 10^n \\), where \\(n\\) is the number of desired decimal places. Then, we're going to turn the result of the division into a string and just manually insert the decimal place (this is the 'trickery' part).

```js
// Note: the `n` suffix gives us a `BigInteger`
let precision = 40n;
let original = 1234567898765432123456789n;
let numerator = (original * (10n ** precision));
let denominator = original + 1;

// Here lies the trickery: manually adding a decimal!
// We could insert this decimal `precision` characters from
// the end, but because the values are fixed, we just hard-
// code it for the example.
let result = "0." + (numerator / denominator).toString();
console.log(result) // => 0.999999999999999999999999189999998380...
```

And there we have it! JavaScript outputs a number with more than 30 digits of precision --- _far_ more precise than what is possible with JavaScript's floating-point numbers. We give up some ergonomics and performance when using this approach, but it works! And it's hardly a hack: everything we're doing is mathematically sound and would work for any number. (I realize this example doesn't involve irrational numbers; the point is just to illustrate precision beyond what's possible with floating points.)

So have fun! How fast can your computer compute 1,000 digits of pi? How about 100,000? Can you get a million? Does the performance change when your device is plugged in compared to when it's on battery? I'm able to comfortably compute 100,000 digits in a little over one second with throttling disabled --- but your computer could probably beat mine.

### Acknowledgments

My JavaScript implementation of Chudnovsky's algorithm was heavily based on Arthur Vause's [implementation](https://pi-calculator.netlify.app/); I don't mention it earlier, but I also use his arbitrary-precision implementation for finding the square root of `10005`.

Thanks to everyone who offered to read over this piece to give advice both on the writing and the technical details --- I really appreciated all of your feedback.

If _you_ have any suggestions or feedback, please let me know! My email is on the home page of this site.
