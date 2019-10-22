<script>
  import FootnoteRef from "./footnotes/FootnoteRef.svelte";
  import Footnote from "./footnotes/Footnote.svelte";
  import MajorSection from "./sections/MajorSection.svelte";
  import MinorSection from "./sections/MinorSection.svelte";

  const scope = "portfolio";
</script>

<style>

</style>

<section id="portfolio" class="bottombreak">
  <h3 class="title">Portfolio</h3>
  <div class="content">
    <div class="columns">
      <div class="column is-8">
        <p>
          The work I'm most proud of is <a href="https://privacyspy.org">PrivacySpy</a>,
          everything by <a href="https://politiwatch.org">Politiwatch</a>
          (especially <a href="https://polititweet.org">PolitiTweet</a>), and
          <a href="https://www.foreignaffairs.com/articles/2019-08-02/not-your-fathers-bots">these</a>
          <a
            href="https://www.washingtonpost.com/news/monkey-cage/wp/2017/08/24/congress-keeps-quiet-on-u-s-drone-policy-and-thats-a-big-problem/">
            articles</a>. More granular information about these projects and my other work
            is available in the portfolio below.
        </p>
        <MajorSection title="Research" subtitle="Disinformation, oversight, censorship">
          This is placeholder content.
          <MinorSection title="minor research projects">
            This is where the additional minor research project information would go.
          </MinorSection>
        </MajorSection>
        <MajorSection title="Projects" subtitle="PolitiTweet, PrivacySpy, and more">
          This is placeholder content.
        </MajorSection>
        <MajorSection title="Academics" subtitle="Classes, prizes, organizations">
          This is placeholder content.
        </MajorSection>
        <MajorSection title="Professional" subtitle="News Catalyst, First Look Media, Torch">
          This is placeholder content.
        </MajorSection>
        <MajorSection title="Miscellaneous" subtitle="Competitions, design, ham radio">
          This is placeholder content.
        </MajorSection>
      </div>
      <div class="column footnotes">

      </div>
    </div>
  </div>
</section>