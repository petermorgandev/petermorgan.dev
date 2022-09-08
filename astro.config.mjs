import { defineConfig } from 'astro/config';

export default defineConfig({
	site: 'https://petermorgan.dev',
	trailingSlash: 'always',
	markdown: {
    shikiConfig: {
			wrap: true
    },
  },
});
