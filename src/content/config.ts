import { defineCollection, z } from "astro:content";

const blogPostsCollection = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		description: z.coerce.date(),
		modifiedDate: z.coerce.date().optional(),
		publishDate: z.string(),
		tags: z.array(z.string()).optional(),
	}),
});

export const collections = {
	"blog-posts": blogPostsCollection,
};
