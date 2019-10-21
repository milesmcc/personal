<script>
  import FootnoteRef from "./footnotes/FootnoteRef.svelte";
  import Footnote from "./footnotes/Footnote.svelte";

  const scope = "contact";
</script>

<style>

</style>

<section id="contact" class="bottombreak">
  <h3 class="title">Contact</h3>
  <div class="content">
    <div class="columns">
      <div class="column is-8">
        <p>
          You can email me at
          <a href="mailto:miles@rmrm.io">miles@rmrm.io</a>. 
          If you'd like, you can also encrypt your message to
          <a href="https://keybase.io/rmrm">F3C7 8280 DDBF 52A1</a>
          using PGP.<FootnoteRef {scope} index="1" />
        </p>
        <p>
          When I have a physical institutional address&mdash;like a school
          mailroom&mdash;I will display it here.
        </p>
      </div>
      <div class="column">
        <Footnote {scope} index="1">
          Beware: if you PGP encrypt your message, I won't be able to
          respond as quickly. It'd probably be better to just send a message
          on <a href="https://keybase.io/rmrm">Keybase</a>.
        </Footnote>
      </div>
    </div>
  </div>
</section>
