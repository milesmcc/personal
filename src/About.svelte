<script>
  import FootnoteRef from "./footnotes/FootnoteRef.svelte";
  import Footnote from "./footnotes/Footnote.svelte";

  const scope = "about";
</script>

<style>
  h1 {
    margin-top: -10px;
  }

  h1 {
    font-size: 56px;
  }
</style>

<section id="about" class="bottombreak">
  <div class="content">
    <div class="columns">
      <div class="column is-8">
        <p>
          I want to build systems that improve the world—and to learn something
          along the way. My interests include internet freedom, cybersecurity,
          government accountability, political science, and human-centered
          design.<FootnoteRef {scope} index="1" />
        </p>
        <p>
          My projects, research, and commentary have appeared in several major
          news outlets including the
          <i>Washington Post</i>, the
          <i>New York Times, NBC News, Foreign Affairs,</i>
          and the
          <i>Nightly News</i>
          with Lester Holt.<FootnoteRef {scope} index="2" />
          My research with
          <a href="https://en.wikipedia.org/wiki/Sarah_Kreps">
            Dr. Sarah Kreps
          </a>
          has been presented at Yale, Oxford, Columbia, and Cornell, among other
          institutions.
        </p>
        <p>
            I graduated from high school in June 2019. I decided to take a gap
            year,<FootnoteRef {scope} index="3" /> and will head to Stanford in September 2020.
        </p>
      </div>
      <div class="column is-4 footnotes">
        <Footnote
          {scope}
          index="1">Some of these fields may seem disparate. I try
            my best to make them overlap.</Footnote>
        <Footnote {scope} index="2">
          For more information and links to each media reference, please see my
          <a href="#portfolio">portfolio</a>.
        </Footnote>
      </div>
    </div>
  </div>
</section>
