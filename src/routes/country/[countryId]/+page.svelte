<script>
    import Header from '../../../components/Header.svelte';
    export let data ;
    const {props} = data;
</script>

<Header/>
<main>
    <section>
		<div class="back">
			<span><a href="/">Back</a></span>
		</div>
		{#each props as country}

		<div class="img">
			<img src={country.flags.png} alt="">
		</div>

		<div>
			<div class="texts">
					<div class="left">
						<p><b>Native name: </b>{country.name.official} </p>
						<p><b>Population: </b>{country.population} </p>
						<p><b>Region: </b> {country.region}</p>
						<p><b>Sub Region:</b> {country.subregion}</p>
						<p><b>Capital:</b> {country.capital}</p>
						<div class="border">Border Countries:
							<span>{country.borders}</span> 
						</div>
					</div>
					<div class="right">
					<p><b>Top level domain:</b> {country.tld}</p>
					<p><b>Continents:</b> {country.continents
					}</p>
					<p><b>Languages:</b> {Object.values(country.languages).toString()}</p>
				</div>
			</div>
		</div>
		{/each}
    </section>
</main> 
<style>
	main {
		height: 100%;
		width: 100%;
		background-color: #white;
	}
	section {
		height: 90%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 3rem;
	}
	.back{
		display: flex;
		justify-content: center;
		align-items: center;
		width: 5rem;
		height: 5vh;
		position: absolute;
		bottom: 100px;
		left: 50px;
		border-radius: 0.5rem;
		background-color: #ddd;
		box-shadow: 0 0 8px #202020;
	}
	.img {
		height: 50vh;
		width: 30rem;
	}
	.img > img {
		height: 100%;
		max-width: 100%;
		object-fit: cover;
	}
	.texts {
		display: flex;
		max-width: 30rem;
		height: 50vh;
		gap: 5rem;
	}
	a{
		all:unset;
		cursor: pointer
		;
	}
	.border{
		position: absolute;
		bottom: 180px;
	}
	.border>span{
		padding:0.5rem;
		background-color:#ddd;
		border-radius: 0.5rem;
		font-weight: bold;
	}
	
</style>
