<script>
	import { goto } from '$app/navigation';
	let wordValue = '';
	const submitValue = () => {
		goto('/search/' + wordValue);
	};
	let select;
	const valorOption = () =>{
		let valor = select;
		return console.log(valor)
	};
</script>

<div class="container">
	<div class="search-filter">
		<div class="search">
			<form on:submit|preventDefault={submitValue}>
				<input required bind:value={wordValue} type="text" placeholder="Search for a country" />
				<button>Search</button>
			</form>
		</div>
		<div class="filter">
			<select 
			bind:value={select}
			on:change={valorOption}
			name="filter" id="filter">
				<option value="All">Filter by Region</option>
				<option value="Africa">Africa</option>
				<option value="America">America</option>
				<option value="Asia">Asia</option>
				<option value="Europe">Europe</option>
				<option value="Oceania">Oceania</option>
			</select>
		</div>
	</div>
</div>

<style>
	input,
	select,
	button {
		appearance: none;
		-webkit-appearance: none;
		-moz-appearance: none;
		all: unset;
		cursor: pointer;
	}
	.container {
		width: 100%;
		height: 15vh;
	}
	.search-filter {
		height: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0rem 3rem;
	}
	.search,
	.filter {
		background-color: #f1f1f1;
		padding: 1rem;
		border-radius: 0.5rem;
	}

	.search {
		min-width: 30%;
	}
	form {
		display: flex;
	}
	button {
		font-weight: bold;
		font-size: 1.15rem;
		text-align: center;
		width: 30%;
		border-radius: 0.3rem;
		padding: 0.3rem;
		background-color: rgb(193, 227, 243);
	}
	input {
		letter-spacing: 0.15rem;
		width: 70%;
		padding: 0.3rem 0.5rem;
		border-bottom: 0.5px solid #ddd;
	}
</style>
