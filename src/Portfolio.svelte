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
          everything by <a href="https://politiwatch.org">Politiwatch</a>,<FootnoteRef {scope} index="3"/> and
          <a href="https://www.foreignaffairs.com/articles/2019-08-02/not-your-fathers-bots">these</a>
          <a
            href="https://www.washingtonpost.com/news/monkey-cage/wp/2017/08/24/congress-keeps-quiet-on-u-s-drone-policy-and-thats-a-big-problem/">
            articles</a>. More granular information about these projects and my other work
          is available in the portfolio below.
        </p>
        <MajorSection title="Research" subtitle="disinformation, oversight, censorship" first=true>
          <article>
            <p class="heading is-marginless">Summer 2019 - present</p>
            <p><strong>All The News That's Fit to Fabricate: A Study of Synthetic Disinformation</strong></p>
            <p>Studying how synthetic (AI-generated) disinformation can deceive the public and masquerade as
              reliable, human-written news. Co-authoring with Dr. Sarah Kreps in collaboration with OpenAI.</p>
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
                several sections and top 10% of authors by downloads in the year following.</li>
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
            </ul>
          </article>

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
          <article>
            <p class="heading is-marginless">Summer 2019 - Present</p>
            <p><strong>PrivacySpy</strong> &mdash; with <a href="https://igor.fyi">Igor Barakaiev</a> &mdash; <a
                href="https://privacyspy.org">site</a>, <a href="https://github.com/Politiwatch/PrivacySpy-Core">source
                code</a> </p>
            <p>PrivacySpy monitors and rates privacy policies
              on a ten-point scale, so you can easily understand how your data is being treated online.</p>
            <MinorSection title="PrivacySpy in the New York Times">
              <p class="has-text-grey">"Privacy policies are long, boring and extremely consequential documents. [...]
                Which is why I am
                fascinated by Privacy Spy, a newly launched site that makes privacy policies more convenient and
                accessible. It’s a little like Wikipedia but for figuring out how a company is using — and misusing —
                your
                information." &mdash; <i>Charlie Warzel, writing in the <a
                    href="https://www.nytimes.com/2019/09/24/opinion/facebook-google-apps-data.html#link-6fea96a5">New
                    York Times</a></i>
            </MinorSection>
          </article>

          <article>
            <p class="heading is-marginless">Fall 2016 - Present</p>
            <p><strong>PolitiTweet</strong> &mdash; <a href="https://polititweet.org">site</a>, <a
                href="https://github.com/milesmcc/polititweet">source code</a></p>
            <p>PolitiTweet preserves the public record by archiving the Tweets of major public figures and prominently
              displaying those that have been deleted.</p>
            <MinorSection title="more of PolitiTweet in the media">
              <p>
                <a
                  href="https://www.nbcnews.com/nightly-news/video/wide-range-of-celebrities-accidentally-tweeted-russian-propaganda-during-2016-election-1087414339671">Nightly
                  News with Lester Holt</a>: "Wide Range of Celebrities Accidentally Tweeted Russian Propaganda During
                2016 Election" &mdash; "Famous Twitter users with big followers, from Ivanka Trump to comedians Trevor
                Noah and Sarah Silverman, inadvertently shared tweets that came from accounts linked to Russia,
                according to social media tracker PolitiTweet."
              </p>
              <p>
                <a
                  href="https://www.nbcnews.com/tech/social-media/trump-other-politicians-celebs-shared-boosted-russian-troll-tweets-n817036">NBC
                  News</a>: "Russian Trolls Duped Global Media And Nearly 40 Celebrities" &mdash; "Celebrities and
                global
                news outlets retweeted, republished and engaged with tweets by confirmed Kremlin-linked troll accounts
                thousands of times." (PolitiTweet named as primary source.)
              </p>
              <p><a href="http://money.cnn.com/2018/01/19/media/twitter-internet-research-agency-accounts/">CNN</a>:
                "Twitter to tell 677,775 people they interacted with Kremlin-linked trolls" &mdash; "Twitter will
                inform nearly 700,000 people in the U.S. that they either followed a Kremlin-linked troll account, or
                retweeted or liked a tweet sent by one of the accounts, the social media company said Friday."
                (PolitiTweet linked as source.)</p>
              <p><a
                  href="https://www.thedailybeast.com/michael-flynn-followed-russian-troll-accounts-pushed-their-messages-in-days-before-election">The
                  Daily Beast</a>: "Michael Flynn Followed Russian Troll Accounts, Pushed Their Messages in Days
                Before Election" &mdash; "Trump&rsquo;s notoriously Kremlin-friendly national security adviser
                amplified Russian messages right when they mattered most&mdash;in the days leading up to Nov. 8,
                2016."</p>
              <p><a href="https://ru.bellingcat.com/novosti/russia/2017/12/03/tengop/">Bellingcat</a>: "Как
                кремлевский тролль обманул всю Америку" &mdash; Russian investigative journalism piece exposing the
                propaganda account @TEN_GOP (and cites/is sourced by PolitiTweet). Written by Ben Nimmo and
                the&nbsp;<a href="https://ru.bellingcat.com/author/dfrlab/">Digital Forensic Research
                  Lab</a>&nbsp;(DFRLab).</p>
              <p><a
                  href="http://www.nydailynews.com/news/national/trump-nicki-minaj-thousand-duped-russian-twitter-bots-article-1.3825400">New
                  York Daily News</a>: "President Trump, Nicki Minaj, Ann Coulter among hundreds of thousands duped by
                Russian Twitter bots" &mdash; "Don. Jr has since deleted the February 2017 retweet from @TEN_GOP, but
                not before nearly 10,000 other social media users shared it, according to PolitiTweet, an online tool
                published by the nonpartisan, nonprofit tech organization, PolitiWatch."</p>
            </MinorSection>
          </article>

          <article>
            <p class="heading">Winter 2016 - Present</p>
            <p><strong>WhoAreMyRepresentatives.org</strong> &mdash; <a
                href="https://whoaremyrepresentatives.org">site</a></p>
            <p>WhoAreMyRepresentatives.org (WAMR) is a simple tool to look up the government representatives for any
              U.S. address.</p>
            <MinorSection title="more information about WAMR">
              <ul class="has-text-grey">
                <li>Used more than 1 million times and maintains steady traffic.</li>
                <li>Displayed in the top spot of&nbsp;<a href="https://news.ycombinator.com/item?id=13282847">Hacker
                    News</a>&nbsp;for over nine hours.</li>
                <li>Featured on&nbsp;<a
                    href="https://www.producthunt.com/posts/whoaremyrepresentatives">ProductHunt</a>.
                </li>
                <li>Hit the front page of&nbsp;<a
                    href="https://www.reddit.com/r/InternetIsBeautiful/comments/5kyn35/enter_your_address_and_out_everyone_who/">Reddit</a>
                  (5k+ upvotes).
                </li>
                <li>Received an (informal) invitation to visit Google.</li>
                <li>Shared by&nbsp;<a href="https://twitter.com/DaveLeeBBC/status/814865319290425344">Dave
                    Lee</a>,&nbsp;<a href="https://twitter.com/colinismyname/status/814907573522591744">Colin
                    Wright</a>,&nbsp;<a href="https://twitter.com/HANAtruly/status/823653522084216832">HANA</a>,&nbsp;<a
                    href="https://twitter.com/MikeElgan/status/815750507738206208">Mike Elgan</a>, and others.</li>
                <li>Featured in&nbsp;<a
                    href="https://boingboing.net/2017/01/03/find-out-who-represents-you-in.html">BoingBoing</a>,&nbsp;<a
                    href="https://www.bustle.com/p/how-to-call-your-representative-urge-them-to-boycott-the-inauguration-31044">Bustle</a>,&nbsp;<a
                    href="https://www.timeout.com/usa/blog/check-out-this-site-to-easily-find-out-who-your-representatives-are-and-how-to-contact-them-012517">TimeOut</a>&nbsp;(<a
                    href="https://www.timeout.com/newyork/blog/15-things-you-can-do-after-the-womens-march-to-stay-engaged-in-nyc-012417">twice</a>),
                  &amp; others.</li>
                <li>Linked to as an activism resource by Planned Parenthood.</li>
              </ul>
            </MinorSection>
          </article>
          <MinorSection title="additional projects">
            <ul>
              <li><a href="https://whyprivacymatters.org/">WhyPrivacyMatters.org</a>&nbsp;&mdash; a collaborative
                project to argue for privacy; translated into 14 languages (and counting); over 28&nbsp;<a
                  href="https://whyprivacymatters.org/CONTRIBUTORS.html">contributors</a>.
              </li>
              <li><a href="https://github.com/milesmcc/ieql">IEQL</a>&nbsp;&mdash; an Internet scanning system I
                created as part of an independent project course at Phillips Academy.</li>
              <li><a href="https://pollpa.org/">PollPA</a>&nbsp;&mdash; a live polling platform for Phillips Academy.
              </li>
              <li><a href="https://parussian.org/">PARussian</a>&nbsp;&mdash; a 2nd level textbook I created based on
                Русский Язык Для Всех for the Phillips Academy Russian Department.</li>
              <li><a href="https://foia.fyi/">Foia.fyi</a>&nbsp;&mdash; a simple website that simplifies the process
                of submitting a FOIA request.</li>
              <li><a href="https://armorlib.org/">ArmorLib</a>&nbsp;&mdash; a malware detection framework I created as
                part of a course at Phillips Academy.</li>
              <li><a href="https://concision.co/">Concision.co</a>&nbsp;&mdash; a simple word processing tool for
                quick copy-paste analysis.</li>
              <li><a href="https://openwi.re/">OPENWI:RE</a>&nbsp;&mdash; a weekly newsletter highlighting the best of
                the week&rsquo;s adversarial journalism and &ldquo;think&rdquo; pieces, with an emphasis on issues of
                foreign policy, digital privacy, and technology. (Discontinued.)</li>
              <li><a href="https://github.com/milesmcc/deaddrop">Deaddrop</a>&nbsp;&mdash; secure, authenticated, and
                monitored file 'dead drops.'</li>
              <li><a href="https://librenews.io/">LibreNews</a>&nbsp;&mdash; a free, open source, speedy, and deeply
                customizable breaking news notification system for Android phones. Over three thousand active daily
                users.</li>
              <li><a href="https://tbij.dronescout.org/">DroneScout API</a>&nbsp;&mdash; an API and web interface for
                processing the Bureau of Investigative Journalism's drone strike data.</li>
              <li><a href="https://530zulu.com/">530ZULU</a>&nbsp;&mdash; a twice daily concise email news briefing.
                (Discontinued.)</li>
              <li><a href="https://github.com/milesmcc/vog">Vog</a>&nbsp;&mdash; an open source browser extension
                (Firefox, Opera, and Chrome) for extracting open-graph data from a webpage without having to deal with
                source files.</li>
              <li>TrumpWire &mdash; a project (now defunct) that sent a SMS notification whenever Donald Trump signed
                an executive order.</li>
              <li><a href="https://github.com/milesmcc/Encompassed.press">Encompassed.press</a>&nbsp;&mdash; the
                single most encompassing and important news story, found automatically. (Discontinued.)</li>
              <li><a href="http://labs.md-c.com/">MD-C Labs</a>&nbsp;&mdash; a place for experimental web projects.
                Not production-ready, and from 3+ years ago.</li>
              <li><a href="https://bibleorquran.org/">BibleOrQuran.org</a>&nbsp;&mdash; a game to combat islamophobia;
                awarded "most wholesome [game] of 2016" by Reddit WebGames, 250+ upvotes on&nbsp;<a
                  href="https://www.reddit.com/r/WebGames/comments/50cwkn/bibleorquran_gives_you_a_random_verse_from_either/">post</a>
              </li>
            </ul>
          </MinorSection>
        </MajorSection>

        <MajorSection title="Academics" subtitle="classes, prizes, organizations">
          <p><strong>Phillips Academy Andover</strong> &mdash; high school &mdash; class of 2019</p>
          <article>
            <p class="has-text-weight-medium">Awards</p>
            <ul>
              <li>Aurelian Honor Society Award&nbsp;<em>(for character, scholarship, and leadership)</em></li>
              <li>Webster Prize&nbsp;<em>(for excellence in the social sciences)</em></li>
              <li>David G. Wood Fellowship&nbsp;<em>(for excellence in writing)</em></li>
              <li>Winfield M. Sides Prize&nbsp;<em>(for excellence in computer science)</em></li>
              <li>Scoville Award&nbsp;<em>(for an outstanding original paper or project)</em></li>
              <li>Top Score in Physics 400 prize exam</li>
            </ul>
            <p class="has-text-weight-medium">Athletics</p>
            <ul>
              <li>Varsity Rowing, 1st boat (11th grade)</li>
              <li>Wrestling (former)</li>
            </ul>
            <p class="has-text-weight-medium">Leadership Positions</p>
            <ul>
              <li><a href="https://blueshells.net/">Blueshells</a>&nbsp;<em>(founder)</em></li>
              <li><a href="https://techmasters.io/">Techmasters</a>&nbsp;<em>(co-president)</em></li>
              <li>Computer Science Club&nbsp;<em>(co-president)</em></li>
              <li>GSA&nbsp;<em>(gender &amp; sexuality alliance; co-president)</em></li>
              <li>Proctor&nbsp;<em>(Flagg House)</em></li>
            </ul>
          </article>
        </MajorSection>

        <MajorSection title="Professional" subtitle="News Catalyst, First Look Media, Torch">
          <article>
            <p class="heading is-marginless">November 2016 - Present</p>
            <p><a href="https://politiwatch.org/"><strong>Politiwatch</strong></a>: Using technology to promote
              political
              accountability, digital rights, and social awareness. (501c3 nonprofit.)</p>
            <MinorSection title="more information about Politiwatch">
              <ul>
                <li>I founded Politiwatch after I began to receive various threats for various projects I created. (See
                  projects below.) It has protected me against legal action, allowed me to build a brand for my sites,
                  and
                  eased the process of receiving tax-deductible financial donations.</li>
                <li>Politiwatch is an American 501(c)(3) nonpartisan, nonprofit organization that advocates for freedom
                  of
                  information, digital privacy rights, and political accountability. It was founded in 2016 with the
                  goal
                  of combating political ignorance, promoting privacy, and making civic information more accessible.
                </li>
                <li>Sponsors include Google (via their Google for Nonprofits program), ProtonMail, and DigitalOcean.
                </li>
              </ul>
            </MinorSection>
          </article>

          <article>
            <p class="heading is-marginless">Spring 2017, Spring 2018</p>
            <p><a href="https://pactf.com/"><strong>PACTF</strong></a>: a global cybersecurity competition with over
              1,000 teams and $20,000 in prizes.</p>
            <MinorSection title="more about PACTF">
              <ul>
                <li>After being a participant in PACTF 2016, in 2017 I became the project lead (with&nbsp;<a
                    href="https://github.com/Reichenbachian">Alex Reichenbach</a>).</li>
                <li>Managed sponsors, problem sets, advertising, and digital infrastructure (effectively the entire
                  competition, though I couldn't have done it without help from the project mentors and the rest of
                  the&nbsp;<a href="https://2017.pactf.com/about/">team</a>).</li>
                <li>Sponsors include Amazon, J.P. Morgan, DigitalOcean, ProtonMail, Cloudflare, Carnegie Mellon
                  University
                  CyLab (Security and Privacy Institute), Carnegie Mellon University Information Networking Institute,
                  and
                  Phillips Academy Andover.</li>
              </ul>
            </MinorSection>
          </article>

          <article>
            <p class="heading is-marginless">Summer 2018</p>
            <p><strong>First Look Media</strong>&nbsp;(parent of&nbsp;<em>The Intercept</em>): worked on
              the engineering team and with the research team (internship), primarily on authoring an IETF Internet
              Draft.</p>
            <MinorSection title="more about my time at FLM">
              <ul>
                <li>Worked to create an IETF Internet standard (currently a proposed standard) for OpenPGP cryptographic
                  keylist subscriptions, as implemented by Micah Lee's&nbsp;<a
                    href="https://github.com/firstlookmedia/gpgsync">GPGSync</a>.
                  The&nbsp;<code>Internet-Draft</code>&nbsp;is available&nbsp;<a
                    href="https://datatracker.ietf.org/doc/draft-mccain-keylist/">here</a>. (I am the primary/first
                  author.)</li>
                <li>Wrote an&nbsp;<a href="https://tech.firstlook.media/keylist-rfc-explainer">engineering blog
                    post</a>&nbsp;about the IETF project.</li>
                <li>Worked with the research team to perform data analysis on several unreleased datasets.</li>
                <li>Designed Presslist, a crowdsourced internal system to manage and track government contacts.</li>
              </ul>
            </MinorSection>
          </article>

          <article>
            <p class="heading is-marginless">Summer 2017</p>
            <p><strong>Torch</strong>: worked at a New York City tech+politics startup (internship).</p>
            <MinorSection title="more about my time at Torch">
              <ul>
                <li>Led the development of Torch&rsquo;s "scraping" technology (<a
                    href="https://github.com/torch1/openparser">OpenParser</a>).</li>
                <li>Rebranded a major element of the Torch platform, making the platform more immediately useful and
                  accessible to non-technical users.</li>
                <li>Provided the company with gigabytes of invaluable civic information.</li>
                <li>Position obtained after they reached out to me about&nbsp;<a
                    href="https://whoaremyrepresentatives.org/">WhyAreMyRepresentatives.org</a>.</li>
              </ul>
            </MinorSection>
          </article>
        </MajorSection>

        <MajorSection title="Miscellaneous" subtitle="competitions, skills, ham radio">
          <p>I am a licensed Ham Radio operator, and my callsign is KD2HZZ.</p>
          <p>I am comfortable programming in Python, Rust, and Java, as well as the
            typical web technologies (HTML+JS+CSS). I have some experience with cryptography
            and the network stack.</p>
          <p>I have a fair amount of experience with Linux&mdash;I use it as my daily driver.</p>
          <p>I love hackathons, whether it's as a participant or&mdash;as of recently&mdash;a judge.</p>
          <MinorSection title="hackathons and competitions">
            <ul>
              <li><strong>HackNEHS 1st place</strong>&nbsp;(Fall 2017): won first place in&nbsp;<a
                  href="https://www.hacknehs.com/">HackNEHS</a>, a 'hackathon' for New England high schools.</li>
              <li><strong>Blueprint (@ MIT) 2nd place</strong>&nbsp;(Winter 2018): won second place in&nbsp;<a
                  href="https://blueprint.hackmit.org/">Blueprint</a>, a national annual hackathon hosted at the MIT
                Media
                Lab.</li>
              <li><strong>Hack Exeter</strong>&nbsp;(Spring 2019): won the Developer's Award at Hack Exeter, a hackathon
                hosted at Phillips Exeter Academy.</li>
              <li><strong>CyberPatriot X</strong>&nbsp;(Fall-Winter 2018): competed in the Platinum division
                with&nbsp;<a href="https://blueshells.net/">Blueshells</a>.</li>
              <li><strong>HackACE 1st place (tied)</strong>&nbsp;(Winter 2017): tied for first place in&nbsp;<a
                  href="http://hackace.us/">HackACE</a>.</li>
            </ul>
          </MinorSection>
        </MajorSection>
      </div>
      <div class="column footnotes">
        <Footnote {scope} index="3">
          Especially <a href="https://polititweet.org">PolitiTweet</a>, though its servers are currently overloaded by people trying to scrape it (so if it doesn't load the first time, consider trying again).
        </Footnote>
      </div>
    </div>
  </div>
</section>