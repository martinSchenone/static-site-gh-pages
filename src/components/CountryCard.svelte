<script>
	import countries from '../config/data.json';
</script>

<div class="container">
	{#each countries as country}
		<div class="card-container">
			<div class="img-container">
				<a svletekit:prefetch href={"/country/"+ country.name}>
				<img src={country.flags.png} alt={country.name} />
				</a>
			</div>
			<div class="text-container">
				<h2>{country.name}</h2>
				<p><b>Population:</b> {country.population}</p>
				<p><b>Region:</b> {country.region}</p>
				<p><b>Capital:</b> {country.capital}</p>
			</div>
		</div>
	{/each}
</div>

<style>
	.container {
		/* display: grid;
        grid-template-columns: repeat(auto-fit,minmax(350px,1fr));
        gap: 1rem;
        padding: 3rem; */
		display: flex;
		flex-wrap: wrap;
		gap: 5rem;
		justify-content: center;
		align-items: center;
	}
	.card-container {
		border-radius: 2rem;
		height: 50vh;
		background-color: #f0f0f0e8;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		width: 15rem;

	}
	.img-container {
		width: 15rem;
		height: 100%;
	}
	.img-container >a> img {
		height: 100%;
		width: 100%;
		object-fit: cover;
		border-radius: 0.5rem;
	}
	.text-container > h2 {
		font-size: 1rem;
	}
	.text-container{
		padding: 0.5rem;
	}
</style>
