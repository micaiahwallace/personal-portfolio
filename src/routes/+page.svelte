<script>
	import external from '$lib/images/external-link.svg';
	import github from '$lib/images/github.svg';
</script>

<svelte:head>
	<title>Micaiah Wallace</title>
	<meta name="description" content="Micaiah Wallace's software projects" />
</svelte:head>

<ul>
	<li>
		<div>1. colanderapp.io <span class="muted">resource calendar</span></div>
		<div class="project-link">
			<a href="https://dev.colanderapp.io"><img src={external} alt="Colander App" /></a>
			<a href="https://github.com/colander-app"><img src={github} alt="GitHub" /></a>
		</div>
	</li>
</ul>

<style>
	ul {
		list-style-type: none;
		font-size: 1.5em;
	}

	ul > li {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 10px;
	}

	.muted {
		color: #8e8e8e;
	}

	.project-link {
		display: flex;
		flex-direction: row;
		gap: 0.5em;
	}

	.project-link > a > img {
		height: 35px;
	}
</style>
