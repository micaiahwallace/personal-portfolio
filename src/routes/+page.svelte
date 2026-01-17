<script lang="ts">
	import Projects from './Projects.svelte';

	function resetAnimation(event: MouseEvent) {
		const element = event.target as HTMLDivElement;
		element.classList.remove('animate-delay');
		element.style.animationName = 'initial';
		void element.offsetWidth;
		element.style.animationName = '';
	}
</script>

<section class="top-section">
	<div class="title">
		<p>Hello! My name is<span class="text-dark comma">,</span></p>
		<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<p id="fname" class="title-animation animate-delay" on:click={resetAnimation}>Micaiah</p>
		<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<p id="lname" class="title-animation animate-delay" on:click={resetAnimation}>Wallace</p>
	</div>
	<div class="summary">
		<p>full-stack software engineer ~ 11+ yrs</p>
		<p><b>Front-End</b> <span>TypeScript · React</span></p>
		<p><b>Back-End</b> <span>Node · Go · Python</span></p>
		<p><b>Dev-Ops</b> <span>AWS Lambda · Dynamo DB · Docker</span></p>
		<p><b>Interests</b> <span>Event Based Architecture · Performance Optimization</span></p>
		<p><b>&nbsp;</b> <span>Rust · Streaming Applications</span></p>
	</div>
</section>

<Projects />

<style>
	.top-section {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		overflow-x: auto;
		gap: 2rem;
		font-family: var(--font-mono);
	}

	.summary {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-self: stretch;
		border-left: solid 2px #ccc;
		padding-left: 1rem;
	}

	@media (max-width: 500px) {
		.summary p {
			margin-top: 0.4em;
			margin-bottom: 0.4em;
		}
	}

	.summary > p:nth-child(n + 2) {
		display: flex;
	}

	.summary > p:nth-child(n + 2) b {
		min-width: 150px;
	}

	.title {
		display: flex;
		flex-direction: column;
		overflow-x: hidden;
	}

	.comma {
		font-weight: bold;
		font-size: 1.3rem;
		color: var(--color-primary);
	}

	.title p {
		font-family: var(--font-mono);
		border: 0;
		margin-top: 0;
		margin-bottom: 0;
	}

	@keyframes shimmer {
		from {
			background-position-x: -250px;
		}
		to {
			background-position-x: 250px;
		}
	}

	.title-animation {
		background: linear-gradient(
			290deg,
			var(--color-text-dark) 25%,
			var(--color-primary) 50%,
			var(--color-text-dark) 75%
		);
		background-clip: text;
		background-position-x: -250px;
		animation-name: shimmer;
		animation-duration: 0.3s;
		animation-timing-function: ease-out;
		animation-iteration-count: 1;
		padding-left: 70px;
		padding-right: 70px;
		margin-left: -70px;
		margin-right: -70px;
		color: transparent;
		font-size: 5rem;
	}

	#fname.animate-delay {
		animation-delay: 0.5s;
	}

	#lname.animate-delay {
		animation-delay: 0.52s;
	}

	#lname {
		--color-text-dark: var(--color-text);
		margin-top: -25px !important;
	}
</style>
