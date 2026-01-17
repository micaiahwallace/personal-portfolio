import { getPost, getAllPosts } from '$lib/posts';
import { error } from '@sveltejs/kit';

export const prerender = true;

export async function entries() {
	const posts = await getAllPosts();

	return posts.map((post) => ({
		slug: post.slug
	}));
}

export async function load({ params }) {
	const post = await getPost(params.slug);

	if (!post) {
		throw error(404, 'Post not found');
	}

	return post;
}
