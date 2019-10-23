<script>
  import FootnoteRef from "./footnotes/FootnoteRef.svelte";
  import Footnote from "./footnotes/Footnote.svelte";
  import MajorSection from "./sections/MajorSection.svelte";
  import MinorSection from "./sections/MinorSection.svelte";

  const scope = "portfolio";
</script>

<style>
  article {
    border-left: 2px solid lightgray;
    padding-left: 1em;
    margin-bottom: 2em;
  }
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
        <MajorSection title="Research" subtitle="Disinformation, oversight, censorship" first=true>

          <article>
            <p class="heading is-marginless">2016-2018</p>
            <p><strong>Origins of Oversight: A Machine-Assisted Analysis of Legislative Engagement on US Foreign
                Policy</strong></p>
            <p>Using computers to parse the entire congressional record and study the determinants of foreign policy
              oversight in Congress. Co-authored with Dr. Sarah Kreps, <a
                href="https://github.com/milesmcc/CongressionalDroneOversight">source code</a> available.</p>
            <ul>
              <li>Presented by Dr. Kreps at Yale, Columbia, Cornell, Georgetown, and UC Santa Barbara.</li>
              <li>Co-authored popular opinion piece in the <a
                  href="https://www.washingtonpost.com/news/monkey-cage/wp/2017/08/24/congress-keeps-quiet-on-u-s-drone-policy-and-thats-a-big-problem/">Washington
                  Post</a>.</li>
            </ul>
          </article>

          <article>
            <p class="heading is-marginless">Summer 2019 - present</p>
            <p><strong>All The News That's Fit to Fabricate: A Study of Synthetic Disinformation</strong></p>
            <p>Studying how synthetic (AI-generated) disinformation can deceive the public and masquerade as
              reliable, human-written news. Co-authoring with Dr. Sarah Kreps.</p>
            <ul>
              <li>Co-authored popular opinion piece in <a
                  href="https://www.foreignaffairs.com/articles/2019-08-02/not-your-fathers-bots">Foreign Affairs</a>.
              </li>
              <li><a href="https://openai.com/blog/gpt-2-6-month-follow-up/">Collaborated</a> with OpenAI, the creators
                of GPT-2.</li>
              <li>Presented by Dr. Kreps at Oxford.</li>
            </ul>
          </article>

          <article>
            <p class="heading is-marginless">Fall 2018</p>
            <p><strong>Deciphering Chinese Censorship: CensorScout and the Weibo Censorship Dashboard</strong></p>
            <p>Created <a href="https://github.com/DPCLab/CensorScout-Front">CensorScout</a> and the <a
                href="http://dpclab.org/china/dashboard/">Weibo Censorship Dashboard</a>,
              two pilot applications that make several steps toward increased transparency into censorship on Weibo and
              provide valuable—albeit limited—information regarding the state of Chinese Internet censorship.
              Co-authored with <a href="http://jeffreyshen.com/">Jeffrey Shen</a>.</p>
            <ul>
              <li>Published paper for open access on <a
                  href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3266193">SSRN</a>, made daily top-tens in
                several sections.</li>
              <li>Completed as part of <a href="https://dpclab.org">Digital Propaganda & Censorship</a>, an Independent
                Project at Phillips Academy under the mentorship of <a
                  href="https://en.wikipedia.org/wiki/John_Palfrey">John Palfrey</a>,
                Michael Barker, and Malgorzata Stergios.</li>
            </ul>
          </article>

          <article>
            <p class="heading is-marginless">Fall 2018</p>
            <p><strong>Russian Meddling: A Study of Russian Disinformation in American Social Sedia</strong></p>
            <p>Used machine learning to better understand the Russian disinformation campaign in the 2016 election.
              Released three <a href="https://dpclab.org/russia/">blog posts</a>, launched a <a
                href="https://twitter.com/TrackTheTrolls">Twitter bot</a>, an <a
                href="https://dpclab.org/russia/machine-learning-troll-detection/">open API</a>, and
              an <a href="https://dpclab.org/russia/troll-explorer/">interactive machine learning
                model</a>.</p>
            <ul>
              <li>Published paper for open access on <a
                  href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3266193">SSRN</a>, made daily top-tens in
                several sections.</li>
              <li>Completed as part of <a href="https://dpclab.org">Digital Propaganda & Censorship</a>, an Independent
                Project at Phillips Academy under the mentorship of <a
                  href="https://en.wikipedia.org/wiki/John_Palfrey">John Palfrey</a>,
                Michael Barker, and Malgorzata Stergios.</li>
              <li>Completed as part of <a href="https://dpclab.org">Digital Propaganda & Censorship</a>, an Independent
                Project at Phillips Academy under the mentorship of <a
                  href="https://en.wikipedia.org/wiki/John_Palfrey">John Palfrey</a>,
                Michael Barker, and Malgorzata Stergios.</li>
            </ul>
          </article>

          <MinorSection title="minor research projects">
            <p><strong>Campaigns Must Prepare for Deepfakes: This Is What Their Plan Should Look
                Like</strong>: contributed to the "deepfake response plan" <a
                href="https://carnegieendowment.org/2019/09/05/campaigns-must-prepare-for-deepfakes-this-is-what-their-plan-should-look-like-pub-79792">published</a>
              by the Carnegie Endowment
              for International Piece (by Kate Charlet and Danielle Citron)</p>
            <p><strong>How Members of Congress Talk About the National Security Agency</strong>: a
              <a href="https://worthhiding.com/2017/11/21/how-legislators-talk-about-the-nsa/">data-driven analysis</a>
              of how members of Congress talk about the NSA</p>
            <p><strong>A Quantitative Measure of Partisan Periphery</strong>: creating a
              mathematical (i.e. not subjective) measure of partisan periphery for my work with Sarah Kreps,
              <a href="https://worthhiding.com/2017/10/08/a-quantitative-measure-of-partisan-periphery/">published</a>
              on my blog, WorthHiding.com</p>
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