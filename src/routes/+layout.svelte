<script>
	import Header from './Header.svelte';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';
	import './styles.css';

	inject({ mode: dev ? 'development' : 'production' });
</script>

<svelte:head>
	<title>Micaiah Wallace</title>
	<meta name="description" content="Micaiah Wallace" />
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
