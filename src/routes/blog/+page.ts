import { getAllPosts } from '$lib/posts';

export const prerender = true;

export async function load() {
	return {
		posts: await getAllPosts()
	};
}
