import { getPost } from '$lib/posts';
import { error } from '@sveltejs/kit';

export const prerender = true;

export async function load({ params }) {
	const post = await getPost(params.slug);

	if (!post) {
		throw error(404, 'Post not found');
	}

	return post;
}
