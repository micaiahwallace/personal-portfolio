<script>
	import PdfViewer from 'svelte-pdf';
	const resume_file = 'Micaiah_Wallace_Senior_Software_Engineer.pdf';
	const resume_url = '/' + resume_file;
</script>

<section>
	<a class="link" href={resume_url} download={resume_file}>Download</a>
	<span class="separator">{' '}</span>
	<a class="link" href={resume_url}>View</a>
</section>

<PdfViewer
	data={false}
	scale={1.42}
	showButtons={[]}
	showBorder={false}
	url="/Micaiah_Wallace_Senior_Software_Engineer.pdf"
/>

<style>
	section {
		position: relative;
		display: flex;
		justify-content: center;
		gap: 1rem;
		margin-bottom: 1rem;
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
