<script lang="ts">
	let {
		label = 'tags:',
		tags = [],
		selectedTags = [],
		minimal = true,
		onToggleTag
	}: {
		label?: string;
		tags?: string[];
		selectedTags?: string[];
		minimal?: boolean;
		onToggleTag: (tag: string) => unknown;
	} = $props();
</script>

<small class="tags{minimal ? ' minimal' : ''}">
	{label}
	{#each tags as tag}
		<button
			class={selectedTags.includes(tag) ? 'active' : ''}
			onclick={(e) => {
				e.preventDefault();
				onToggleTag(tag);
			}}
		>
			{tag}
			{selectedTags.includes(tag) && !minimal ? 'X' : ''}
		</button>
	{/each}
</small>

<style>
	button {
		color: hsl(from var(--color-text) h s 80 / 1);
		margin-right: 7px;
		background: transparent;
		border: none;
		cursor: pointer;
	}

	.tags:not(.minimal) button {
		padding: 4px;
		border: solid 1px;
		border-radius: 12px;
	}

	button.active,
	button:hover {
		color: var(--color-text);
	}
</style>
