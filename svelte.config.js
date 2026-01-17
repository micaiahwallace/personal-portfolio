import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import rehypeHighlight from 'rehype-highlight';
import { visit } from 'unist-util-visit';

function addHljsClass() {
	return (tree) => {
		visit(tree, 'element', (node) => {
			if (node.tagName === 'code') {
				const classes = node.properties?.className || [];
				// ensure it's always an array
				node.properties = node.properties || {};
				node.properties.className = Array.isArray(classes) ? classes : [classes];
				if (!node.properties.className.includes('hljs')) {
					node.properties.className.unshift('hljs');
				}
			}
		});
	};
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],

	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		mdsvex({ extensions: ['.md'], rehypePlugins: [rehypeHighlight, addHljsClass] })
	],

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter()
	}
};

export default config;
