<script>
  import FootnoteRef from "./footnotes/FootnoteRef.svelte";
  import Footnote from "./footnotes/Footnote.svelte";

  const scope = "elsewhere";
</script>

<style>

</style>

<section id="elsewhere" class="bottombreak">
  <h3 class="title">Elsewhere</h3>
  <div class="content">
    <div class="columns">
      <div class="column is-8">
        <p>On GitHub, I am <a href="https://github.com/milesmcc">milesmcc</a>. Most of my projects live there.</p>
        <p>On Twitter, I am <a href="https://twitter.com/@MilesMcCain">@MilesMcCain</a>, but I don't post frequently.<FootnoteRef {scope} index=1 />
        </p>
        <p>On Hacker News, I am <a href="https://news.ycombinator.com/user?id=epoch_100">epoch_100</a>.</p>
        <p>On Reddit, I am (also) <a href="https://reddit.com/u/epoch_100">epoch_100</a>.</p>
      </div>
      <div class="column">
        <Footnote {scope} index=1>
          Take my Twitter&mdash;and all of Twitter, for that matter&mdash;with a grain of <a href="https://en.wikipedia.org/wiki/Salt_Bae">salt</a>.
        </Footnote>
      </div>
    </div>
  </div>
</section>
