import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import ssl from 'vite-plugin-mkcert';

export default defineConfig({
	plugins: [sveltekit(), ssl()]
});
