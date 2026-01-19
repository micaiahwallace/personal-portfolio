<script lang="ts">
	import { goto } from '$app/navigation';
	import Tags from '$lib/tags.svelte';
	import type { BlogPost } from '$lib/types';

	export let data: BlogPost;
</script>

<article>
	<span class="title">
		{data.metadata.title}
		{#if data.metadata.draft}
			<span class="draft">(Draft)</span>
		{/if}
	</span>

	{#if data.metadata.tags?.length}
		<div class="meta">
			<small>{data.metadata.date}</small>
			<Tags
				tags={data.metadata.tags}
				selectedTags={data.metadata.tags}
				onToggleTag={(tag) => goto(`/blog?tag=${tag}`)}
				label="|"
				minimal={true}
			/>
		</div>
	{/if}

	<span class="dot-container">
		<div class="dot">&nbsp;</div>
		<div class="dot">&nbsp;</div>
	</span>

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

	.title {
		font-size: 24px;
		font-weight: bold;
		margin-bottom: 0.5rem;
		display: block;
	}

	.meta {
		display: flex;
		align-items: center;
		gap: 0.4rem;
	}

	.dot-container {
		margin-top: 1rem;
		margin-bottom: 1rem;
		display: flex;
		gap: 0.6rem;
	}

	.dot {
		display: inline-block;
		width: 6px;
		height: 6px;
		border-radius: 3px;
		background-color: #eee;
	}

	.body {
		align-self: center;
		width: 100%;
		font-size: 20px;
	}

	@media (min-width: 768px) {
		.body {
			max-width: 60vw;
			border-left: solid 2px #ccc;
			border-right: solid 2px #ccc;
			padding-left: 40px;
			padding-right: 40px;
		}
	}
</style>
