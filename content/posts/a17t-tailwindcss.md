---
title: "Why a17t is meant to be used with Tailwind CSS"
tags: ["a17t", "tailwindcss", "design"]
date: 2020-07-11T18:09:33Z
toc: false
draft: false
---

I designed [a17t](https://a17t.miles.land) to be used in conjunction with [Tailwind CSS](https://tailwindcss.com). I never use a17t without Tailwind, and I never use Tailwind without a17t.

Why? a17t is an atomic design toolkit. It provides around 30 atomic interface elements---small, "indivisible" elements like buttons, form inputs, and headers---and leaves everything else up to you. The elements themselves are deeply customizable, built with accessibility in mind, and don't come with any built-in spacing.

Most CSS frameworks provide hundreds of "batteries included" elements, and maybe you think omitting them in a17t is a strange decision. But as Tailwind CSS documentation notes, most CSS frameworks do too much:

> They come with all sorts of predesigned components like buttons, cards, and alerts that might help you move quickly at first, but cause more pain than they cure when it comes time to make your site stand out with a custom design.

The point of a17t isn't to give you everything you need to build an interface. Instead, the point is to minimize the amount of boilerplate code you write. Buttons and text inputs aren't what make your interface unique; it's how you use them that matters. When you use a17t, you don't need to worry about designing nice-looking form inputs. Instead, you think about the big picture of your interface.

This is where Tailwind comes in.

Tailwind provides utility classes like `grid`, `pb-2` (padding-bottom 2 units), and `border-lg`. You can think of Tailwind as "CSS shorthand": most Tailwind classes correspond to a single CSS attribute, so adding `class="font-bold"` to an HTML element is equivalent to adding `style="font-weight: 700"`, for example.

Tailwind and a17t work well together. You let a17t provide your core interface elements, then stitch them together using Tailwind. If you use a17t without Tailwind, you'll still need to write loads of CSS to specify your grid layout and spacing. And if you use Tailwind without a17t, you'll need to design your core interface elements from scratch---and for the vast majority of us, that's unnecessary.

In short: use a17t for your core interface elements, and use Tailwind to assemble them on the page.