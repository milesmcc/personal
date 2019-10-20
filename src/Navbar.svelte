<script>
  export let colors;
  function offset(id) {
    let element = document.getElementById(id);
    if (element != null) {
      return element.offsetTop;
    }
  }
  function borderBottom(element) {
    console.log(element);
    let windowHeight = window.scrollY;
    if (windowHeight > offset(element)) {
      return "dashed";
    } else {
      return "solid";
    }
  }
</script>

<style>
  nav {
    position: fixed;
    padding-left: 2em;
    top: 0;
    left: 3em;
    width: 100vh;
    height: 60px;
    transform: rotate(90deg);
    -webkit-transform: rotate(90deg);
    transform-origin: top left;
    -webkit-transform-origin: top left;
    display: block;
    /* padding-top: 8px; */
  }

  li {
    border-bottom-width: 2px;
    border-bottom-style: solid !important;
    margin-right: 2em;
    float: left;
    font-weight: normal;
  }
</style>

<nav role="navigation" aria-label="primary navigation">
  <ul>
    <li class="about-li" style="border-bottom-style: {borderBottom('about')}">
      About
    </li>
    <li
      class="contact-li"
      style="border-bottom-style: {borderBottom('contact')}">
      Contact
    </li>
    <li
      class="portfolio-li"
      style="border-bottom-style: {borderBottom('portfolio')}">
      Portfolio
    </li>
    <li
      class="elsewhere-li"
      style="border-bottom-style: {borderBottom('elsewhere')}">
      Elsewhere
    </li>
  </ul>
</nav>
