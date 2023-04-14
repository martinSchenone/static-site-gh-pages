<script>
    import Header from '../../../components/Header.svelte';
    export let data ;
    const {props} = data;
</script>

<Header/>
<main>
    <section>
		{#each props as country}
		<div class="img">
			<img src={country.flags.svg} alt="">
		</div>
		<div>
			<div class="texts">
					<div class="left">
						<p><b>Native name: </b>{country.name.official} </p>
						<p><b>Population: </b>{country.population} </p>
						<p><b>Region: </b> {country.region}</p>
						<p><b>Sub Region:</b> {country.subregion}</p>
						<p><b>Capital:</b> {country.capital}</p>
						<div class="border">
							<b>Border Countries:</b>
							<p class="borders">{country.borders}</p> 
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
section{
	margin-top: 4rem;
	width: 90%;
	max-width: 1200px;
	margin-inline: auto;
	display: flex;
	flex-direction: column;
	gap: 2rem;
}
.img{
	width: 100%;
	height: 100%;
}
.img > img{
	width: 100%;
	height: 100%;
}
.texts{
	padding: 1rem;
	font-size: clamp(1.13rem, calc(1.08rem + 0.22vw), 1.25rem);
}
.borders{
	background-color: #ccc9;
	width: fit-content;
	padding: 0.4rem;
	border-radius: 0.4rem;
	
}
@media all and (min-width:901px){
	section{
		flex-direction: row;
		justify-content: space-evenly;
		align-items: center;
	}
	.img{
		width: 50%;
	}
	.texts{
		display: flex;
		gap:2rem;
	}
}
@media all and (min-width:1800px){
	.texts{
		font-size: clamp(1.35rem, calc(1.28rem + 0.37vw), 1.56rem);
	}
}
</style>