<script>
	import Header from './Header.svelte';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';
	import './styles.css';
	import 'prism-themes/themes/prism-gruvbox-dark.css';

	inject({ mode: dev ? 'development' : 'production' });
</script>

<svelte:head>
	<title>Micaiah Wallace</title>
	<meta name="description" content="Micaiah Wallace - Portfolio" />
	<meta
		name="viewport"
		content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
	/>
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
	<link rel="manifest" href="/site.webmanifest" />
</svelte:head>

<div class="app">
	<Header />
	<main>
		<slot />
	</main>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 75rem;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
