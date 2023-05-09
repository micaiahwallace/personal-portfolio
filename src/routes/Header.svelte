<script>
	import { page } from '$app/stores';
	import github from '$lib/images/github.svg';
	import linkedin from '$lib/images/linkedin.svg';
	import medium from '$lib/images/medium.svg';
</script>

<header>
	<nav>
		<ul>
			<li aria-current={$page.url.pathname === '/projects' ? 'page' : undefined}>
				<a href="/projects">Projects</a>
			</li>
			<li aria-current={$page.url.pathname === '/resume' ? 'page' : undefined}>
				<a href="/resume">Résumé</a>
			</li>
		</ul>
		<ul>
			<li>
				<a href="https://github.com/micaiahwallace">
					<img src={github} alt="GitHub" />
				</a>
			</li>
			<li>
				<a href="https://www.linkedin.com/in/micaiahwallace/">
					<img src={linkedin} alt="LinkedIn" />
				</a>
			</li>
			<li>
				<a href="https://micaiah-wallace.medium.com/">
					<img src={medium} alt="Medium" />
				</a>
			</li>
		</ul>
	</nav>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
	}

	nav {
		width: 100%;
		display: flex;
		justify-content: space-between;
		--background: rgba(255, 255, 255, 0.7);
	}

	img {
		height: 2em;
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 4em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
	}

	a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a::before {
		content: '';
		position: absolute;
		width: 100%;
		height: 4px;
		border-radius: 4px;
		background-color: #18272f;
		bottom: 0;
		left: 0;
		transform-origin: right;
		transform: scaleX(0);
		transition: transform 0.2s ease-in-out;
	}

	a:hover::before {
		transform-origin: left;
		transform: scaleX(1);
	}
</style>
