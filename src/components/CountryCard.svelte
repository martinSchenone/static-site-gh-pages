<script>
	export let data;
	let searchTerm = '';
	$: searchCountry = data.props.filter((country) => {
		return country.name.common.toLowerCase().includes(searchTerm.toLowerCase());
	});
</script>

<section>
		<div class="search-filter">
			<div class="search">
				<form>
					<input required bind:value={searchTerm} type="text" placeholder="Search Country" />
				</form>
			</div>
		</div>
</section>
<section>
	<div class="container">
		{#if searchCountry.length == 0}
			 <h1>No se encontraron paises</h1>
		{:else}
		{#each searchCountry as country}
		<div class="card-container">
			<div class="img-container">
				<a svletekit:prefetch href={'/country/' + country.name.common}>
					<img src={country.flags.svg} alt={country.name} />
				</a>
			</div>
			<div class="text-container">
				<h2>{country.name.common}</h2>
				<p><b>Population:</b> {country.population}</p>
				<p><b>Region:</b> {country.region}</p>
				<p><b>Capital:</b> {country.capital}</p>
			</div>
		</div>
	{/each}
		{/if}
	</div>
</section>

<style>
	input {
		appearance: none;
		-webkit-appearance: none;
		-moz-appearance: none;
		all: unset;
		cursor: pointer;
	}

	
	.search-filter {
		display: flex;
	}
	.search {
		background-color: #f1f1f1;
		padding: 1rem;
	} 
	input {
		width: fit-content;
		letter-spacing: 0.15rem;
		font-size: clamp(1.13rem, calc(1.08rem + 0.22vw), 1.25rem);
		padding: 0.3rem 0.5rem;
		
	}
	input:focus{
		border-bottom: 1px solid #ddd;
	}
	section {
		max-width: 1200px;
		width: 90%;
		margin-inline: auto;
		margin-top: 2rem;
	}
	.container {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: 3rem;
		justify-items: center;
	}
	.card-container {
		border-radius: 1rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		width: 100%;
	}
	.img-container {
		width: 100%;
		height: 50%;
	}
	.img-container > a > img {
		height: 100%;
		width: 100%;
		object-fit: cover;
	}
	.text-container {
		background-color: rgb(233, 240, 248);
		width: 100%;
		max-height: 50%;
		text-align: center;
		border-bottom-left-radius: 1rem;
		border-bottom-right-radius: 1rem;
	}

	@media all and (min-width: 1501px) {
		.text-container {
			font-size: 1.4rem;
		}
	}
</style>
