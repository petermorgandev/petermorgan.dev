---
title: How to Use Sass Variables in Astro Components
slug: sass-variables-in-astro-components
description: You can use Sass variables in Astro components even though it may not be a best practice. This blog post explains how.
publishDate: 9/11/22
tags: [astro, components, css, sass]
---

You can use Sass variables in Astro components even though it may not be a best practice.[^1]

[^1]: The process is not explained in [Astro's documentation](https://docs.astro.build/en/guides/styling/#sass).

Start by including a `<style lang="scss">` or `<style lang="sass">` element - depending on your preferred syntax - in your Astro component.

```astro
<style lang="scss">

</style>
```

Next use the `@import` rule[^2] inside of the `<style>` element to import the Sass file where your variables are stored. You must use the relative path to the file and cannot use an [import alias](https://docs.astro.build/en/guides/aliases/) like you could if you were importing a Sass file into the frontmatter of an Astro component.

[^2]: I am aware that the [Sass @import rule](https://sass-lang.com/documentation/at-rules/import) is no longer recommended and will [eventually be deprecated](https://github.com/sass/sass/blob/main/accepted/module-system.md#timeline).

```astro
<style lang="scss">
	@import "../styles/base/_variables.scss";
</style>
```

You are now able to use Sass variables in your components to create scoped styles. The example below includes 2 uses of Sass variable as well as Sass' nesting capabilities.

```astro
<style lang="scss">
	@import "../styles/base/_variables.scss";

	.smallerText {
		@media screen and (min-width: $breakpoint-sm) {
			display: block;
			font-size: 1.25rem;
			font-weight: $fw-normal;
			margin-bottom: 1rem;
		}
	}
</style>
```
