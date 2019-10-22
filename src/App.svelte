<script>
	import Navbar from "./Navbar.svelte";
	import About from "./About.svelte";
	import Contact from "./Contact.svelte";
	import Portfolio from "./Portfolio.svelte";
	import Now from "./Now.svelte";
	import Footer from "./Footer.svelte";
</script>

<style>
	.container {
		padding-left: 2.5em;
		border: none;
		/* margin: 0; */
	}

	.section {
		padding-top: 2em;
		max-width: inherit;
	}

	h1 {
		font-size: 64px;
		font-weight: 700;
	}

	@media screen and (max-width: 768px) {
		.is-collapsed-mobile {
			width: 0px !important;
			margin: 0 !important;
			padding: 0 !important;
		}
	}

	@media screen and (min-width: 1024px) {
		h1 {
			margin-top: 75px;
		}
	}

	.is-readable-width {
		max-width: 50em;
	}
</style>

<div class="container">
	<section class="section">
		<div class="columns">
			<div class="column is-offset-2 is-readable-width">
				<h1 class="title name">R. Miles<br> McCain</h1>
			</div>
		</div>
		<div class="columns is-mobile">
			<div class="column is-2 is-collapsed-mobile">
				<Navbar />
			</div>
			<div class="column is-readable-width">
				<About />
				<Now />
				<Portfolio />
				<Contact />
				<Footer></Footer>
			</div>
		</div>
	</section>
</div>