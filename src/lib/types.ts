import type { SvelteComponent } from 'svelte';

export interface BlogMetadata {
	date: string;
	description?: string;
	draft?: boolean;
	published?: boolean;
	tags?: string[];
	title: string;
}

export interface BlogPost {
	slug: string;
	metadata: BlogMetadata;
	component: typeof SvelteComponent;
}
