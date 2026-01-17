import type { SvelteComponent } from 'svelte';

export interface BlogMetadata {
	title: string;
	date: string;
	description?: string;
	published?: boolean;
	draft?: boolean;
}

export interface BlogPost {
	slug: string;
	metadata: BlogMetadata;
	component: typeof SvelteComponent;
}
