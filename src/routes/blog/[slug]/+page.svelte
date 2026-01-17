<script lang="ts">
	import type { BlogPost } from '$lib/types';

	export let data: BlogPost;
</script>

<article>
	<h1>
		{data.metadata.title}
		{#if data.metadata.draft}
			<span class="draft">(Draft)</span>
		{/if}
	</h1>
	<small>
		{data.metadata.date}
	</small>

	<svelte:component this={data.component} />
</article>
