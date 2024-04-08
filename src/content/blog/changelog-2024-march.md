---
title: "Changelog: March 2024"
description: Links and learnings from the last month.
publishDate: 4/7/24
tags: [astro, changelog, firefox, javascript, wordpress]
---

## Astro DB Launches Alongside Astro Studio

[Astro DB](https://astro.build/db/) is a new hosted SQL database service from the core Astro development team. Databases are managed through the new [Astro Studio](https://studio.astro.build) web portal. When Astro first launched I had some concerns about its longevity. New web frameworks pop up all the time, but most do not gain traction. Lack of funding is one of the reasons that can happen. Hopefully Astro DB attracts enough paying customers to keep the team invested and further its development. We might even see third party hosting services or integrations (plugins) pop up to expand the Astro ecosystem.

## Destructuring an Object Inside of Array.prototype.map()

I use the `.map()` Array method all the time, but only recently learned that you can destructure an object when passing in a function to the method. Destructuring can be more hassle than it is worth when dealing with complex objects, but is useful more often than not when iterating over simple objects like in the example below.

```jsx
const users = [
	{
		age: 40,
		name: "Dave",
	},
	{
		age: 41,
		name: "John",
	},
];

<ul>
	{users.map(({ age, name }) => (
		<li key="name">
			{name}: {age}
		</li>
	))}
</ul>;
```

This is not a hidden, or undocumented, feature. [MDN shows destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map#using_map_to_reformat_objects_in_an_array) in their second example for using `.map()`. For whatever reason, my brain never connected the dots between the two. Thanks brain.

## Firefox Keyboard Shortcuts

Imagine my surprise when I copied a URL, pasted it into Firefox’s address bar, and the URL opened in a new window. Undoubtedly this was the result of triggering a shortcut I was not aware of, but which one? The answer is <kbd>Shift</kbd> + <kbd>Enter</kbd>. Firefox has an extensive set of [keyboard shortcuts](https://support.mozilla.org/en-US/kb/keyboard-shortcuts-perform-firefox-tasks-quickly#w_windows-tabs) - many more than I would have expected.

## The Scope of URLSearchParams

A few of my recent work projects dealt with handling URL search parameters. The first project was simple. A small amount of JavaScript was used to get the parameters, look for specific pairs of parameters and values, and change the content of the pages if the pairs were found. The second project was more complex and required the URL parameters to be conditionally updated based on data stored in React state. The [URLSearchParams interface](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams) provides all of the methods necessary to check if parameters exist, add/delete parameters, convert objects to a query string, and much more.

## WordPress Previews Local Development Environment

The local development experience has historically been one of WordPress’ major weaknesses. [Local](https://localwp.com) is one option, but some features are only available if you host your site on Flywheel or WP Engine. WordPress will soon be launching [Studio](https://developer.wordpress.com/studio/), their own local development environment. Studio’s full feature set is currently unknown, but I would assume that some features will only work if you host your site on WordPress.com. Hopefully you can still [run the local server](https://localwp.com/help-docs/getting-started/local-by-flywheel-faq/#do-i-have-to-be-a-flywheel-customer), like Local, even if you are hosting your site elsewhere.
