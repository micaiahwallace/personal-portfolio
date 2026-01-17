<script lang="ts">
  import type { BlogPost } from '$lib/types';

  export let data: {
    posts: BlogPost[];
  };

  let query = '';
  let sort: 'date-desc' | 'date-asc' | 'title-asc' = 'date-desc';

  $: filteredPosts = data.posts
    .filter((post) =>
      post.metadata.title
        .toLowerCase()
        .includes(query.toLowerCase())
    )
    .slice()
    .sort((a, b) => {
      switch (sort) {
        case 'date-asc':
          return (
            new Date(a.metadata.date).getTime() -
            new Date(b.metadata.date).getTime()
          );

        case 'title-asc':
          return a.metadata.title.localeCompare(
            b.metadata.title
          );

        case 'date-desc':
        default:
          return (
            new Date(b.metadata.date).getTime() -
            new Date(a.metadata.date).getTime()
          );
      }
    });
</script>

<h1>Blog</h1>

<!-- Controls -->
<div class="controls">
  <input
    type="search"
    placeholder="Search by title…"
    bind:value={query}
  />

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
        <a href={`/blog/${post.slug}`}>
          <h2>{post.metadata.title}</h2>
        </a>

        <small>{post.metadata.date}</small>

        {#if post.metadata.description}
          <p>{post.metadata.description}</p>
        {/if}

        {#if post.metadata.draft}
          <span class="draft">Draft</span>
        {/if}
      </li>
    {/each}
  </ul>
{/if}

<style>
	ul {
		list-style-type: none;
	}
</style>
