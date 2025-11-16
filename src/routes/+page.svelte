<script>
	import Projects from './Projects.svelte';
</script>

<section class="top-section">
	<div class="title">
		<p>Hello! My name is<span class="text-dark comma">,</span></p>
		<p class="fname">Micaiah</p>
		<p class="lname">Wallace</p>
	</div>
	<div class="summary">
		<p>full-stack software engineer ~ 11+ yrs</p>
		<p><b>Front-End</b> <span>TypeScript · React</span></p>
		<p><b>Back-End</b> <span>Node · Go · Python</span></p>
		<p><b>Dev-Ops</b> <span>AWS Lambda · Dynamo DB · Docker</span></p>
		<p><b>Tech</b> <span>WebSockets · Event Based Architecture · Performance Optimization</span></p>
	</div>
</section>

<Projects />

<style>
	.top-section {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: start;
		flex-wrap: wrap;
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

	.summary > p:nth-child(n + 2) {
		display: flex;
	}

	.summary > p:nth-child(n + 2) b {
		min-width: 150px;
	}

	.title {
		display: flex;
		flex-direction: column;
	}

	.comma {
		font-weight: bold;
		font-size: 1.3rem;
	}

	.title p {
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

		@keyframes shimmer2 {
		from {
			background-position-x: -276px;
		}
		to {
			background-position-x: 224px;
		}
	}

	.fname {
		display: inline;
		background: linear-gradient(290deg, var(--color-text-dark) 40%, rgba(255, 0, 225, 1) 50%, var(--color-text-dark) 60%);
		background-clip: text;
		background-position-x: -250px;
		animation: shimmer 0.6s linear 0.5s 1 normal forwards;
		padding-left: 70px;
		padding-right: 70px;
		margin-left: -70px;
		margin-right: -70px;
		color: transparent;
		font-size: 5rem;
	}

	.lname {
		font-size: 5rem;
		margin-top: -25px !important;
		color: transparent;
		background: linear-gradient(290deg, var(--color-text) 40%, rgba(255, 0, 225, 1) 50%, var(--color-text) 60%);
		background-clip: text;
		background-position-x: -276px;
		animation: shimmer2 0.6s linear 0.5s 1 normal forwards;
		padding-left: 70px;
		padding-right: 70px;
		margin-left: -70px;
		margin-right: -70px;
	}
</style>
