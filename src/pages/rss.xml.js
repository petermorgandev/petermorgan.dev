import { getCollection } from "astro:content";
import rss from "@astrojs/rss";

export async function GET(context) {
	const unsortedPosts = await getCollection("blog");
	
	const sortedPosts = unsortedPosts.sort((a, b) => {
		return new Date(b.data.publishDate).valueOf() - new Date(a.data.publishDate).valueOf();
	});

	return rss({
		description: "Notes, code snippets, and reminders related to website development and technology.",
		site: context.site,
		title: "Blog Feed - Peter Morgan - Website Developer",
		items: sortedPosts.map((post) => ({
			description: post.data.description,
			link: `/blog/${post.slug}/`,
			pubDate: post.data.publishDate,
			title: post.data.title,
		})),
	});
}
