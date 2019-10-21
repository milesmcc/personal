<script>
  function offset(id) {
    let element = document.querySelector("#" + id);
    if (element != null) {
      return element.offsetTop;
    }
  }

  function borderBottom(element) {
    console.log(element);
    let windowHeight = window.scrollY;
    console.log(offset(element));
    if (windowHeight > offset(element)) {
      return "dashed";
    } else {
      return "solid";
    }
  }
</script>

<style>
  nav {
    position: relative;
    padding-left: 2em;
    top: 0;
    text-align: right;
    display: block;
    /* padding-top: 8px; */
  }

  li {
    font-weight: normal;
  }

  a {
    border-bottom-width: 2px;
    padding-bottom: 3px;
    text-decoration: none !important;
    border-bottom-style: solid;
  }

  @media screen and (max-width: 768px) {
    nav {
      transform: rotate(90deg);
      -webkit-transform: rotate(90deg);
      transform-origin: top left;
      -webkit-transform-origin: top left;
      width: 100vh;
      height: 60px;
      position: fixed;
      left: 3em;
      margin-top: 8px;
    }

    li {
      margin-right: 2em;
      float: left;
    }
  }

  @media screen and (min-width: 769px) {
    li {
      margin-bottom: 1em;
    }

    nav {
      margin-right: 15px;
      position: sticky;
      top: 50px;
    }
  }
</style>

<nav role="navigation" aria-label="primary navigation">
  <ul>
    <li class="about-li">
      <a class="about-a" style="border-bottom-style: {borderBottom('about')}">
        About
      </a>
    </li>
    <li class="contact-li">
      <a
        class="contact-a"
        style="border-bottom-style: {borderBottom('contact')}">
        Contact
      </a>
    </li>
    <li class="portfolio-li">
      <a
        class="portfolio-a"
        style="border-bottom-style: {borderBottom('portfolio')}">
        Portfolio
      </a>
    </li>
    <li class="elsewhere-li">
      <a
        class="elsewhere-a"
        style="border-bottom-style: {borderBottom('elsewhere')}">
        Elsewhere
      </a>
    </li>
  </ul>
</nav>
