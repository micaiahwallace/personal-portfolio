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

	<span class="dot-container">
		<div class="dot">&nbsp;</div>
		<div class="dot">&nbsp;</div>
	</span>

	{#if data.metadata.tags?.length}
		<p class="tags">
			tags:
			{#each data.metadata.tags as tag, i}
				<a class="tag-link active" href={`/blog?tag=${tag}`}>{tag}</a>{i <
				data.metadata.tags.length - 1
					? ', '
					: ''}
			{/each}
		</p>
	{/if}

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

	/* .link {
		text-transform: none;
	} */

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

	.tags {
		font-size: small;
		margin-top: 0;
	}

	.tag-link {
		display: inline-block;
		text-decoration: none;
		color: #ccc;
		margin-right: 7px;
	}

	.tag-link.active {
		color: inherit;
		text-decoration: underline;
	}

	hr {
		color: #f6f6f6;
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
