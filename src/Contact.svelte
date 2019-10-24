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
          using PGP.<FootnoteRef {scope} index="4" />
        </p>
        <p>
          When I have a physical institutional address&mdash;like a school
          mailroom&mdash;I will display it here.
        </p>
        <p>On GitHub, I am <a href="https://github.com/milesmcc">milesmcc</a>; this is where most of my projects live. On
          Twitter, I am <a href="https://twitter.com/MilesMcCain">@MilesMcCain</a>, but I don't post
          frequently.<FootnoteRef {scope} index="5" /> You can also find me on <a
            href="https://news.ycombinator.com/user?id=epoch_100">HN</a>, <a
            href="https://reddit.com/u/epoch_100">Reddit</a>, and <a href="https://keybase.io/rmrm">Keybase</a>.
      </div>
      <div class="column footnotes">
        <Footnote {scope} index="4">
          Beware: if you PGP encrypt your message, I won't be able to
          respond as quickly. It'd probably be better to just send a message
          on <a href="https://keybase.io/rmrm">Keybase</a>.
        </Footnote>
        <Footnote {scope} index="5">
          Take my Twitter&mdash;and all of Twitter, for that matter&mdash;with a grain of <a
            href="https://en.wikipedia.org/wiki/Salt_Bae">salt</a>.
        </Footnote>
      </div>
    </div>
  </div>
</section>