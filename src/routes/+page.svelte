<script>
	import CountryCard from '../components/CountryCard.svelte';
	import Header from '../components/Header.svelte';
	export let data;
	
	
</script>

<Header />
<main>
	<CountryCard data={data}/>
</main>
