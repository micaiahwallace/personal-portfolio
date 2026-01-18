import { getAllPosts } from '$lib/posts';

export const prerender = true;

export async function load() {
	const posts = await getAllPosts();
	const allTags = Array.from(new Set(posts.flatMap((p) => p.metadata.tags ?? []))).sort();
	return {
		posts,
		allTags
	};
}
