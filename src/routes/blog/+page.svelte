<script lang="ts">
	import type { BlogPost } from '$lib/types';

	export let data: {
		posts: BlogPost[];
	};

	let query = '';
	let sort: 'date-desc' | 'date-asc' | 'title-asc' = 'date-desc';

	$: filteredPosts = data.posts
		.filter((post) => post.metadata.title.toLowerCase().includes(query.toLowerCase()))
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
</script>

<h1>Search Posts</h1>

<!-- Controls -->
<div class="controls">
	<input type="search" placeholder="Search by title…" bind:value={query} />

	<select bind:value={sort}>
		<option value="date-desc">Newest first</option>
		<option value="date-asc">Oldest first</option>
		<option value="title-asc">Title A–Z</option>
	</select>
</div>

<!-- Results -->
{#if filteredPosts.length === 0}
	<p>No posts found.</p>
{:else}
	<ul>
		{#each filteredPosts as post}
			<li>
				<a class="link" href={`/blog/${post.slug}`}>
					{post.metadata.title}
					{#if post.metadata.draft}
						<span class="draft">(Draft)</span>
					{/if}
				</a>

				<small>Posted: {post.metadata.date}</small>

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
		gap: 0.8rem;
	}

	.link {
		display: block;
		font-size: 24px;
		text-transform: none;
		align-self: flex-start;
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
