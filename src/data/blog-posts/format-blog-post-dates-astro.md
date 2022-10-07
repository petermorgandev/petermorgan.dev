---
title: Format Blog Post Dates in Astro
slug: format-blog-post-dates-astro
description: I store publication dates for blog posts on this site in 1 format, but display them in 2 formats. This post explains how.
publishDate: 10/7/22
tags: [javascript, astro]
---

## The Problem

The design mockups for this website show the publication dates of blog posts in 2 different formats. On the [homepage](/) and [blog page](/blog/) the dates are displayed in in `Month Day, Year` format. The individual blog post page displays the same date in `MM/DD/YY` format. I could manually input the date in both formats and specify which format to use on each page. Instead I chose to take advantage of [Astro's](https://astro.build) ability to manipulate data before it is output on the page.

## The

The date for this blog post is

## The Solution

This is where JavaScript and the `toLocaleDateString()` method comes in - <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString">MDN docs</a>. This method is a given date into the locale (language)

For example, the date for this blog is stored as 10/7/22.
