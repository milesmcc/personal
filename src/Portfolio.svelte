<script>
  import FootnoteRef from "./footnotes/FootnoteRef.svelte";
  import Footnote from "./footnotes/Footnote.svelte";
  import MajorSection from "./sections/MajorSection.svelte";

  const scope = "portfolio";
</script>

<style>

</style>

<section id="portfolio" class="bottombreak">
  <h3 class="title">Portfolio</h3>
  <div class="content">
    <div class="columns">
      <div class="column is-8">
        <MajorSection title="Research" subtitle="Disinformation, oversight, censorship" first=true>
          This is placeholder content.
        </MajorSection>
        <MajorSection title="Projects" subtitle="PolitiTweet, PrivacySpy, WAMR, etc">
          This is placeholder content.
        </MajorSection>
        <MajorSection title="Academics" subtitle="Classes, prizes, organizations">
          This is placeholder content.
        </MajorSection>
        <MajorSection title="Professional" subtitle="News Catalyst, First Look, Torch">
          This is placeholder content.
        </MajorSection>
        <MajorSection title="Miscellaneous" subtitle="Competitions, design, ham radio">
          This is placeholder content.
        </MajorSection>
      </div>
      <div class="column">

      </div>
    </div>
  </div>
</section>
