<script>
  import { onMount } from "svelte";

  export let index;
  export let scope;

  let updateFootnoteLocations = () => {
    let ref = document.getElementById(scope + "-footnote-reference-" + index);
    let self = document.getElementById(scope + "-footnote-" + index);
    if (ref.offsetTop > self.offsetTop) {
      // they have twin parents
      self.setAttribute(
        "style",
        "margin-top: " + (ref.offsetTop - self.offsetTop - 12) + "px"
      );
    }
  }

  onMount(() => {
      setTimeout(updateFootnoteLocations, 10);
  });
</script>

<style>
  .footnote {
    color: black;
    opacity: 0.5;
    font-size: 80%;
  }

  .footnote:focus-within {
    opacity: 0.9;
  }

  .footnote:not(:last-child) {
    margin-bottom: 1em;
  }
</style>

<article class="footnote" id="{scope}-footnote-{index}">
  <div class="columns is-mobile">
    <div class="column">
    <a
        href="#{scope}-footnote-reference-{index}"
        class="footnote-backreference">
        {index}.
      </a>
      <slot/>
    </div>
  </div>
</article>
