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

export const collections = {
	blog: blogPostsCollection,
};
