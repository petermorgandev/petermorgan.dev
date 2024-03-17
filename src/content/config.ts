import { defineCollection, z } from "astro:content";

const blogPostsCollection = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		description: z.string(),
		modifiedDate: z.string().optional(),
		publishDate: z.string(),
		tags: z.array(z.string()).optional(),
	}),
});

const contactLinksCollection = defineCollection({
	type: "data",
	schema: z.object({
		url: z.string().url(),
		order: z.number().optional(),
		image: z.object({
			light: z.string(),
			dark: z.string(),
			altText: z.string(),
		}),
	}),
});

const menuLinksCollection = defineCollection({
	type: "data",
	schema: z.object({
		label: z.string(),
		order: z.number().optional(),
		url: z.string(),
	}),
});

export const collections = {
	blog: blogPostsCollection,
	"contact-links": contactLinksCollection,
	"menu-links": menuLinksCollection,
};
