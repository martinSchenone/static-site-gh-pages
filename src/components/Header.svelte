<header class="header">
	<div class="container">
		<div class="title">
			<h2>Where in the World?</h2>
		</div>
		<div class="darkMode">
			<span><i class="fa-regular fa-moon" /></span>
			<button type="button" style="all:unset"> Dark Mode </button>
		</div>
	</div>
</header>

<style>
	header {
		width: 100%;
		height: 15vh;
		background-color: white;
        border-bottom: 1px solid #ccc;
	}
    .container{
        display: flex;
		justify-content: space-between;
		align-items: center;
        height: 100%;
        padding: 0rem 3rem;
    }
    .darkMode{
        display: flex;
        gap: 1rem;
        cursor: pointer;
        font-weight: 700;
        font-size: 1.1rem;
    }
    .title{
        font-weight: bold;
        font-size: 1.1rem;
    }
</style>
