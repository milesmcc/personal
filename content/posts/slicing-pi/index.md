---
title: "Calculating a slice of pi"
tags: ["math", "pi", "interactive"]
date: 2020-12-16T16:21:04-05:00
toc: true
draft: true
mathjax: true
---

Let's calculate a slice of pi. (Please forgive the pun.)

If you're reading this, you almost certainly don't need me to convince you that pi --- the ratio of any circle's circumference to its diameter, π --- is cool. It has infinitely many digits, and those digits never repeat. Wherever there are circles there is pi, but the constant isn't limited to geometry: it appears in [all sorts of places](https://en.wikipedia.org/wiki/Pi#Role_and_characterizations_in_mathematics) across math, physics, engineering, and other disciplines.

There's a decent chance you know the first few digits of pi off the top of your head! I can recite around fifteen digits, plus or minus a few depending on the day: `3.14159265358979...`. This level of accuracy is good enough for almost all real-world applications (a circle the size of earth would have an error of only a few millimeters), but we can do better. We're going to calculate the first `n` digits of pi together using _your_ device. (You'll get to choose the value of `n` later.)

While you won't be breaking the [world record](https://www.guinnessworldrecords.com/world-records/66179-most-accurate-value-of-pi#:~:text=The%20most%20accurate%20value%20of,over%208%20months%20in%20total.) of 50 trillion digits set by Timothy Mullican in early 2020, you'll easily surpass a thousand, and you'll learn about some cool algorithms along the way.

### History of Pi

The first written [approximations of pi](https://en.wikipedia.org/wiki/Approximations_of_%CF%80) appeared in Babylon and Egypt, and were accurate to around two base-10 decimal places. While that may not sound impressive, consider that correctly estimating pi to two decimal places is at most 0.2% away from the true value!

By 400 C.E., Chinese mathematicians correctly estimated the first seven digits of pi. There wasn't much improvement until the late middle ages, ...

### The Algorithm

For our calculation of pi, we'll be focusing on the [Chudnovsky algorithm](https://en.wikipedia.org/wiki/Chudnovsky_algorithm). This algorithm is quite efficient, and was used for all the most recent world-record calculations of pi (including the 50 trillion digit record set in 2020). We won't do anything more than a superficial overview of this algorithm, but here it is in its full glory:

$$ {\displaystyle {\frac {1}{\pi }}=12\sum _{q=0}^{\infty }{\frac {(-1)^{q}(6q)!(545140134q+13591409)}{(3q)!(q!)^{3}\left(640320\right)^{3q+3/2}}}} $$

At a glance, you may notice that it is a [hypergeometric series](https://en.wikipedia.org/wiki/Generalized_hypergeometric_function), that it has several mystical constants, and yields the _reciprocal_ of pi. If you're curious, a more detailed proof is available [here](https://arxiv.org/abs/1809.00533). I'm not even going to pretend to fully understand this algorithm; maybe someday I will, but that day is not today.

Wikipedia suggests computing pi using an equivalent but more performant form, shown below.

$$ {\displaystyle {\frac {426880{\sqrt {10005}}}{\pi }}=\sum _{q=0}^{\infty }{\frac {(6q)!(545140134q+13591409)}{(3q)!(q!)^{3}\left(-262537412640768000\right)^{q}}}} $$

Building on Arthur Vause's excellent [JavaScript implementation](https://pi-calculator.netlify.app/), I've written a relatively short script that calculates pi to an arbitrary number of digits, updating the visualization below as it goes. A warning: Firefox's implementation of big integers seems to overflow when calculating more than 100,000 digits. Beware!

<script src="calc.js"></script>

<div class="md:grid gap-4 grid-cols-2">
    <div>
        <p class="label">Digits</p>
        <input class="field my-1" type="number" placeholder="Digits to calculate..." value="1000" id="digits-input">
    </div>
    <div>
        <p class="label">Throttling</p>
        <div class="select my-1">
            <select name="throttle-input" id="throttle-input">
                <option value="200">Super slow</option>
                <option value="100">Slow</option>
                <option value="50">Normal</option>
                <option value="25">Brisk</option>
                <option value="1">Fast</option>
                <option value="0">AFAP (no throttling, may freeze)</option>
            </select>
        </div>
    </div>
</div>

<div class="md:flex">
    <div class="flex-shrink mr-2 mb-2">
        <button class="button ~urge !high" onclick="calculatePi()" id="button-input">Calculate!</button>
    </div>
    <div class="flex-shrink mr-2 mb-2">
        <button class="button ~urge" onclick="document.querySelector('#pi-output').textContent = '(Output cleared!)';">Clear</button>
    </div>
    <div class="flex-shrink mr-2 mb-2">
        <button class="button ~critical !high hidden" onclick="haltCalculations()" id="halt-input">Halt</button>
    </div>
    <div class="w-full mt-2">
        <progress class="progress ~urge !high" value="0" max="1" id="progress-output"></progress>
    </div>
</div>

<aside class="aside ~critical hidden" id="error-output"></aside>

<div class="font-mono section p-4 bg-neutral-200">
    <span id="pi-output">Digits will appear here...</span>
</div>
