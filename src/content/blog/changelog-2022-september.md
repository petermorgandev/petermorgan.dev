---
title: "Changelog: September 2022"
description: As fall quickly approaches it is time to check in on what I am currently working on and learning about.
publishDate: 9/10/22
modifiedDate: 9/11/22
tags: [astro, changelog, github]
---

As fall quickly approaches it is time to check in on what I am currently working on and learning about.

## This Website

This site is built with [Astro](https://astro.build): a relatively new static site generator. I spent some time experimenting with Astro before building this site, but never built a complete site with it. So far my experience has been mostly positive but I have run into a few issues along the way. [Version 1.0](https://astro.build/blog/astro-1/) was released only <span title="August 8, 2022">a month ago</span>, and the project is already up to version 1.2.1, so I can accept these issues as an early adopter.

## GitHub

Even though I have used GitHub <span title="I created my account in 2016, but only started using it consistently in 2019.">for years</span> there are still many features that I have not worked with before. I recently learned how to:

- Host this website on GitHub Pages with a custom domain name
- Configure a GitHub Action to deploy changes when commits are pushed
- [Automatically link commits](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/autolinked-references-and-urls#commit-shas) in issue comments
- Set branch protection rules to prevent commits directly to main branch

## Markdown

Markdown is implemented in seemingly everything I am interested in these days. [Obsidian](https://obsidian.md) - a personal knowledge base (second brain) application that I recently started using - stores all of its files in Markdown. Astro uses [Markdown](https://docs.astro.build/en/guides/markdown-content/) and [MDX](https://mdxjs.com) to create pages like the one you're on right now.

I already knew the basics of Markdown - like formatting headings and adding links to text - but never needed to use the more advanced features. For example, my blog post on [Sass Variables in Astro Components](/blog/sass-variables-in-astro-components/) uses footnotes. The ability to put the footnote anywhere in the file is convenient, but I can't decide whether or not I like breaking up the flow of the content. Thankfully the output on the blog post won't change if I decide to move all of the footnotes to the bottom of the file.
