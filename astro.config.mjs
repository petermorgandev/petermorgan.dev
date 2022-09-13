import { defineConfig } from 'astro/config';

export default defineConfig({
	site: 'https://petermorgan.dev',
	trailingSlash: 'always',
	markdown: {
		remarkRehype: {
			footnoteLabelTagName: "h2",
			footnoteLabelProperties: {
				className: ["visually-hidden"]
			}
		},
    shikiConfig: {
			theme: 'dark-plus',
			wrap: true
    },
  },
});
