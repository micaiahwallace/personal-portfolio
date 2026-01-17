import { dev } from '$app/environment';
import type { BlogPost, BlogMetadata } from './types';

type MdsvexModule = {
	metadata: BlogMetadata;
	default: any;
};

export async function getAllPosts(): Promise<BlogPost[]> {
	const modules = import.meta.glob<MdsvexModule>('$lib/posts/*.md');

	const posts = await Promise.all(
		Object.entries(modules).map(async ([path, resolver]) => {
			const slug = path.split('/').pop()!.replace('.md', '');
			const mod = await resolver();

			return {
				slug,
				metadata: mod.metadata,
				component: mod.default
			};
		})
	);

	return posts
		.filter((post) => {
			const { published, draft } = post.metadata;

			// Explicitly unpublished: never show
			if (published === false) return false;

			// Drafts: dev only
			if (draft === true) return dev;

			return true;
		})
		.sort((a, b) => new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime());
}

export async function getPost(slug: string) {
	const posts = await getAllPosts();
	return posts.find((p) => p.slug === slug);
}
