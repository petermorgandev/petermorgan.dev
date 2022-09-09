---
title: How to Format Dates in Astro
slug: format-blog-post-dates-astro
description: Blog post publication dates on this site are stored in 1 format, but displayed in 2 formats. This post explains how that works.
publishDate: 9/9/22
tags: [javascript, astro]
---

## The Scenario

The design mockups for this website show the blog post publication dates in Month Day, Year format on the [homepage](/) and [blog page](/blog/), but show the same date on the individual blog post page in MM/DD/YY format. For example, the date for this blog is stored as 9/9/22. One benefit of using a static site generator like [Astro](https://astro.build) is the ability to manipulate data before it is output on the page.

## The Solution

This is where JavaScript and the `toLocaleDateString()` method comes in.
