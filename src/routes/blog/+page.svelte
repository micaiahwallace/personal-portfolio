<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import type { BlogPost } from '$lib/types';
	import { browser } from '$app/environment';
	import Tags from '$lib/tags.svelte';

	export let data: {
		posts: BlogPost[];
		allTags: string[];
	};

	let query = '';
	let sort: 'date-desc' | 'date-asc' | 'title-asc' = 'date-desc';

	const defaultExcludeTags = ['unlisted'];
	const baseTagFilter = data.allTags.filter((t) => !defaultExcludeTags.includes(t));

	let selectedTags: string[] = [];
	$: {
		if (browser) {
			selectedTags = ($page.url.searchParams.get('tag') ?? baseTagFilter.join(','))
				.split(',')
				.map((t) => t.trim())
				.filter((t) => !t.startsWith('-'))
				.filter(Boolean);
		}
	}

	$: filteredPosts = data.posts
		.filter((post) => {
			const matchesSearch = post.metadata.title.toLowerCase().includes(query.toLowerCase());
			const matchesTag = selectedTags.some((tag) => post.metadata.tags?.includes(tag));
			return matchesSearch && matchesTag;
		})
		.slice()
		.sort((a, b) => {
			switch (sort) {
				case 'date-asc':
					return new Date(a.metadata.date).getTime() - new Date(b.metadata.date).getTime();

				case 'title-asc':
					return a.metadata.title.localeCompare(b.metadata.title);

				case 'date-desc':
				default:
					return new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime();
			}
		});

	function toggleTag(tag: string) {
		const tags = new Set(selectedTags);
		tags.has(tag) ? tags.delete(tag) : tags.add(tag);

		const params = new URLSearchParams($page.url.searchParams);
		tags.size ? params.set('tag', [...tags].join(',')) : params.delete('tag');

		goto(`?${params.toString()}`, {
			keepFocus: true,
			replaceState: true
		});
	}
</script>

<!-- Controls -->
<div class="controls">
	<input type="search" placeholder="Search by title…" bind:value={query} />

	<select bind:value={sort}>
		<option value="date-desc">Newest first</option>
		<option value="date-asc">Oldest first</option>
		<option value="title-asc">Title A–Z</option>
	</select>
</div>

<Tags
	tags={data.allTags}
	{selectedTags}
	onToggleTag={toggleTag}
	label="filter by tags:"
	minimal={false}
/>

<!-- Results -->
{#if filteredPosts.length === 0}
	<p>No posts found. Try adjusting filters.</p>
{:else}
	<ul>
		{#each filteredPosts as post}
			<li>
				<div class="meta">
					<small>{post.metadata.date}</small>
					<Tags
						tags={post.metadata.tags}
						selectedTags={post.metadata.tags}
						onToggleTag={(tag) => goto(`?tag=${tag}`)}
						label="|"
					/>
				</div>

				<a class="link" href={`/blog/${post.slug}`}>
					{post.metadata.title}
					{#if post.metadata.draft}
						<span class="draft">(Draft)</span>
					{/if}
				</a>

				{#if post.metadata.description}
					<span>{post.metadata.description}</span>
				{/if}
			</li>
		{/each}
	</ul>
{/if}

<style>
	ul {
		list-style-type: none;
		padding-left: 0;
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	li {
		display: flex;
		flex-direction: column;
		gap: 0.45rem;
	}

	.link {
		display: block;
		font-size: 24px;
		text-transform: none;
		align-self: flex-start;
		letter-spacing: normal;
	}

	.meta {
		display: flex;
		align-items: center;
		gap: 0.4rem;
	}

	.controls {
		display: flex;
		gap: 1rem;
		margin-bottom: 1rem;
	}

	input[type='search'] {
		width: 100%;
		max-width: 500px;
	}

	input[type='search'],
	select {
		padding: 0.5rem;
		font-size: 1rem;
	}

	.draft {
		margin-left: 0.5rem;
		font-size: 0.75rem;
		opacity: 0.6;
	}
</style>
