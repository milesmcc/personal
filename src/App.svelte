<script>
  import Navbar from "./Navbar.svelte";
  import About from "./About.svelte";
</script>

<style>
  .container {
	max-width: 40em;
	padding-left: 2.5em;
	border: none;
	margin: 0;
  }

  .section {
	padding-top: 2em;
	max-width: inherit;
  }
</style>

<Navbar/>
<div class="container">
  <section class="section">
	<div class="columns is-mobile">
		<div class="column">
			<About/>
			<div id="contact"></div>
			<div id="portfolio"></div>
			<div id="elsewhere"></div>
		</div>
	</div>
  </section>
</div>
