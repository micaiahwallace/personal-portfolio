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
			description:
				'Login by using your email address to receive a magic code. Create and manage real-time events in a drag-n-drop resource calendar view. Make sure to open on a second device to watch the updates real-time!',
			link: 'https://dev.colanderapp.io/',
			linkAlt: 'Colander App',
			github: 'https://github.com/colander-app/',
			githubAlt: 'GitHub'
		}
	];
</script>

<h1>Projects</h1>

<ul>
	{#each projects as project}
		<li>
			<div>
				<div class="project-title">
					<a href={project.link}>{project.title} <span class="muted">{project.summary}</span></a>
				</div>
				<div class="project-link">
					<a class="link" href={project.link} target="_blank" data-tooltip="View Project">
						<img src={external} alt={project.linkAlt} />
					</a>
					<a class="link" href={project.github} target="_blank" data-tooltip="Project GitHub">
						<img src={github} alt={project.githubAlt} />
					</a>
				</div>
			</div>
			<p>{project.description}</p>
		</li>
	{/each}
</ul>

<style>
	h1 {
		font-family: var(--font-mono);
		color: var(--color-text-dark);
		text-align: left;
		margin-top: 6rem;
		margin-bottom: 3rem;
		border-bottom: solid 2px #ccc;
	}

	.project-title > a {
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
		color: var(--color-primary);
	}

	.project-link {
		display: flex;
		flex-direction: row;
	}

	img {
		height: 35px;
	}

	a.link {
		padding: 0.5rem 0.5rem;
	}
</style>
