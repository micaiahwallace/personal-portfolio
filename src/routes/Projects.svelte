<script lang="ts">
	import external from '$lib/images/external-link.svg';
	import github from '$lib/images/github.svg';

	interface Project {
		title: string;
		summary: string;
		description: string;
		link: string;
		linkAlt: string;
		github: string;
		githubAlt: string;
	}

	const projects: Project[] = [
		{
			title: 'Colander',
			summary: 'resource planning calendar.',
			description: 'Login by using your email address to receive a magic link.',
			link: 'https://dev.colanderapp.io/',
			linkAlt: 'Colander App',
			github: 'https://github.com/colander-app/',
			githubAlt: 'GitHub'
		}
	];
</script>

<h2>Featured Projects</h2>

<ul>
	{#each projects as project}
		<li>
			<div>
				<a class="project-title" href={project.link}
					>{project.title} <span class="muted">{project.summary}</span></a
				>
				<div class="project-link">
					<a class="link" href={project.link} target="_blank">
						<img src={external} alt={project.linkAlt} />
					</a>
					<a class="link" href={project.github} target="_blank">
						<img src={github} alt={project.githubAlt} />
					</a>
				</div>
			</div>
			<p>{project.description}</p>
		</li>
	{/each}
</ul>

<style>
	h2 {
		color: var(--color-text-dark);
		text-align: center;
		margin-top: 4rem;
		margin-bottom: 3rem;
	}

	.project-title {
		font-size: 2rem;
		text-decoration: none;
		color: var(--color-text);
		font-weight: 700;
	}

	.project-title:hover {
		color: var(--color-text-dark);
	}

	ul {
		list-style-type: none;
		padding-left: 0;
		font-size: 1.5em;
	}

	ul > li {
		display: flex;
		flex-direction: column;
	}

	ul > li > div {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	p {
		font-size: 1rem;
	}

	.muted {
		color: #8e8e8e;
	}

	.project-link {
		display: flex;
		flex-direction: row;
	}

	img {
		height: 35px;
	}

	a {
		padding: 0 0.5rem;
	}
</style>
