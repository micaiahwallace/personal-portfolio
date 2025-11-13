<script lang="ts">
	import { onMount } from 'svelte';

	let PdfViewer: ConstructorOfATypedSvelteComponent;

	onMount(async () => {
		const module = await import('svelte-pdf');
		PdfViewer = module.default;
	});

	const resume_file = 'Micaiah_Wallace_Lead_Software_Engineer.pdf';
	const resume_url = '/' + resume_file;
</script>

<section>
	<a class="link" href={resume_url} download={resume_file}>Download</a>
	<span class="separator">{' '}</span>
	<a class="link" href={resume_url}>View</a>
</section>

<svelte:component
	this={PdfViewer}
	data={false}
	scale={1.42}
	showButtons={['Previous', 'Next', 'Print']}
	url="/Micaiah_Wallace_Lead_Software_Engineer.pdf"
/>

<noscript>
	<h3>Cannot display resume without JavaScript enabled.</h3>
	<h3>Please use the links above to download or view.</h3>
</noscript>

<style>
	section {
		position: relative;
		display: flex;
		justify-content: center;
		gap: 1rem;
		margin-bottom: 1rem;
	}

	noscript {
		margin-top: 20px;
		text-align: center;
	}

	section::after {
		content: '';
		position: absolute;
		width: 100%;
		height: 3px;
		border-radius: 3px;
		background: #ccc;
		bottom: -30px;
		left: 0;
	}

	.separator {
		align-self: stretch;
		border-left: solid 2px var(--color-text);
	}

	a::before {
		display: none;
	}
</style>
