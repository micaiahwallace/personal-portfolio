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
		<p>software engineer. web application developer. 9+ yrs</p>
		<p><b>Front-End</b> <span>TypeScript · React · Svelte</span></p>
		<p><b>Back-End</b> <span>Node · Go · Python</span></p>
		<p><b>Dev-Ops</b> <span>AWS Lambda · Dynamo DB · Docker</span></p>
		<p><b>Tech</b> <span>WebSockets · Event Based Architecture · Serverless</span></p>
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
		margin: 0;
	}

	.fname {
		color: var(--color-text-dark);
		font-size: 5rem;
		text-transform: uppercase;
	}

	.lname {
		font-size: 5rem;
		text-transform: uppercase;
		margin-top: -25px !important;
	}
</style>
