<script>
	import countries from '../config/data.json';
</script>
<section>
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
</section>
<style>
	section {
		max-width: 1200px;
		width: 90%;
		margin-inline: auto;
		margin-top: 2rem;
		font-size:clamp(0.94rem, calc(0.92rem + 0.11vw), 1.00rem);
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
		height: 100%;
	}
	.img-container > a > img {
		height: 100%;
		width: 100%;
		object-fit: cover;
	}
	.text-container {
		background-color: rgb(233, 240, 248);	
		width: 100%;
		text-align: center;
		border-bottom-left-radius:1rem ;
		border-bottom-right-radius:1rem ;
	}

	@media all and (min-width:1501px){
		.text-container{
			font-size: 1.4rem;
		}
	}
</style>
