<script>
  import Navbar from "./Navbar.svelte";
  import About from "./About.svelte";
  import Contact from "./Contact.svelte";
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
	  /* text-align: right; */
  }

  @media screen and (max-width: 768px) {
	  .is-fixed-touch {
		  position: fixed;
	  }
  }

  .is-readable-width {
	  max-width: 35em;
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
		<div class="column is-2 is-fixed-touch">
			<Navbar/>
		</div>
		<div class="column is-readable-width">
			<About/>
			<Contact/>
			<div id="portfolio"></div>
			<div id="elsewhere"></div>
		</div>
	</div>
  </section>
</div>
