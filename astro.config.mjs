import { defineConfig } from 'astro/config';

export default defineConfig({
	site: 'https://petermorgan.dev',
	markdown: {
    shikiConfig: {
			wrap: true
    },
  },
});
