<script>
	import { goto } from '$app/navigation';
	let wordValue = '';
	const submitValue = () => {
		goto('/search/' + wordValue);
	};
	
</script>
<section>
<div class="container">
	<div class="search-filter">
		<div class="search">
			<form on:submit|preventDefault={submitValue}>
				<input required bind:value={wordValue} type="text" placeholder="Search Country" />
				<button>Search</button>
			</form>
		</div>
		
	</div>
</div>
</section>
<style>
	input,
	button {
		appearance: none;
		-webkit-appearance: none;
		-moz-appearance: none;
		all: unset;
		cursor: pointer;
	}
	section {
		max-width: 1200px;
		width: 90%;
		margin-inline: auto;
		margin-top: 2rem;
		font-size:clamp(0.94rem, calc(0.92rem + 0.11vw), 1.00rem);
	}
	.container {
		width: 100%;
	}
	.search-filter {
		display: flex;
		align-items: center;
		width: fit-content;

	}
	.search{ 
		background-color: #f1f1f1;
		padding: 1rem;
		border-radius: 0.5rem;
	}


	form {
		display: flex;
	}
	button {
		font-weight: bold;
		font-size: clamp(1.13rem, calc(1.08rem + 0.22vw), 1.25rem);
		text-align: center;
		border-radius: 0.3rem;
		padding: 0.3rem;
		background-color: rgb(193, 227, 243);
	}
	input {
		letter-spacing: 0.15rem;
		width: 70%;
		font-size: clamp(1.13rem, calc(1.08rem + 0.22vw), 1.25rem);
		padding: 0.3rem 0.5rem;
		border-bottom: 0.5px solid #ddd;
	}
</style>
