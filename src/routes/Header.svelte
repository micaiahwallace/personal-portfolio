<script>
	import { page } from '$app/state';
	import github from '$lib/images/github.svg';
	import linkedin from '$lib/images/linkedin.svg';
	import medium from '$lib/images/medium.svg';
	import stackoverflow from '$lib/images/stackoverflow.svg';
</script>

<header>
	<nav>
		<ul>
			<li aria-current={page.url.pathname === '/' ? 'page' : undefined}>
				<a class="link" href="/">About</a>
			</li>
			<li aria-current={page.url.pathname === '/resume' ? 'page' : undefined}>
				<a class="link" href="/resume">Résumé</a>
			</li>
			<li aria-current={page.url.pathname.startsWith('/blog') ? 'page' : undefined}>
				<a class="link" href="/blog">Blog</a>
			</li>
		</ul>
		<ul>
			<li>
				<a
					class="link"
					href="https://stackoverflow.com/users/1572535/micaiah-wallace"
					target="_blank"
					data-tooltip="Stack Overflow"
				>
					<img src={stackoverflow} alt="Stack Overflow" />
				</a>
			</li>
			<li>
				<a
					class="link"
					href="https://github.com/micaiahwallace/"
					target="_blank"
					data-tooltip="GitHub"
				>
					<img src={github} alt="GitHub" />
				</a>
			</li>

			<li>
				<a
					class="link"
					href="https://www.linkedin.com/in/micaiahwallace/"
					target="_blank"
					data-tooltip="LinkedIn"
				>
					<img src={linkedin} alt="LinkedIn" />
				</a>
			</li>
			<li>
				<a
					class="link"
					href="https://micaiah-wallace.medium.com/"
					target="_blank"
					data-tooltip="Medium"
				>
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

	a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
	}

	li[aria-current='page'] a::before {
		transform: scaleX(1);
	}
</style>
