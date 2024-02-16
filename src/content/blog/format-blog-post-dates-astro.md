---
title: Format Blog Post Dates in Astro
description: This post explains how JavaScript simplifies the process of storing blog post publication dates in 1 format and displaying them in 2 formats on my Astro site.
publishDate: 10/7/22
tags: [javascript, astro]
---

## The Problem

The design mockups for this website show the publication dates of blog posts in 2 different formats. On the [homepage](/) and [blog page](/blog/) the dates are displayed in `Month Day, Year` format. The individual blog post page displays the same date in `MM/DD/YY` format. I could manually input the date in both formats and specify which format to use on each page. Instead I chose to take advantage of [Astro's](https://astro.build) ability to manipulate data before it is output on the page.

## The Setup

Each blog post requires a `publishDate` key with a date value formatted as `MM/DD/YY` in the Frontmatter of its Markdown file. An optional `modifiedDate` key can also be included. For example, the date for this blog is stored as `10/7/22`.

## The Solution

JavaScript doesn't have the best reputation when it comes to handling dates, but I didn't run into too many issues finding my solution: the [toLocaleDateString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString) method. This method transforms a date from one format into another based on the options that you pass into it.[^1]

[^1]: The `toLocaleDateString()` method does more than what I specifically mentioned. I wanted to keep this post focused on my implementation and not a detailed explanation of the method.

### Homepage and Blog Page Implementation

```typescript
const dateOptions: object = {
	year: "numeric",
	month: "long",
	day: "numeric",
};

const formattedPublishDate = new Date(publishDate).toLocaleDateString("en-US", dateOptions);
```

### Individual Blog Post Page Implementation

```typescript
const dateOptions: object = {
	year: "2-digit",
	month: "numeric",
	day: "numeric",
};

const formattedPublishDate = new Date(publishDate).toLocaleDateString("en-US", dateOptions);

const formattedModifiedDate = new Date(modifiedDate).toLocaleDateString("en-US", dateOptions);
```

## Inevitable Comparisons

Sometimes I can't avoid comparing Astro to other systems/frameworks even though I try not to. The solution I implemented isn't overcomplicated and doesn't require a lot of extra code, but I feel like it could have been easier. Formatting dates like I have on this project is something that I imagine many developers would want to do. Perhaps someone else will come up with a better solution or the functionality will be added as an [Astro integration](https://docs.astro.build/en/guides/integrations-guide/). Until then, I am happy with my solution and hope this blog post helps you to implement something similar on your own Astro site.
