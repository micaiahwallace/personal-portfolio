<script lang="ts">
	import type { BlogPost } from '$lib/types';

	export let data: BlogPost;
</script>

<article>
	<span class="large">
		{data.metadata.title}
		{#if data.metadata.draft}
			<span class="draft">(Draft)</span>
		{/if}
	</span>

	<small>
		Posted: {data.metadata.date}
	</small>

	<hr />

	<div class="body">
		<svelte:component this={data.component} />
	</div>
</article>

<style>
	article {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.large {
		font-size: 24px;
		font-weight: bold;
		margin-bottom: 0.5rem;
		display: block;
	}

	hr {
		color: #f6f6f6;
	}

	.body {
		align-self: center;
		max-width: 900px;
		border-left: solid 2px #ccc;
		border-right: solid 2px #ccc;
		padding-left: 40px;
		padding-right: 40px;
	}
</style>
