<script>
  function offset(id) {
    let element = document.querySelector("#" + id);
    if (element != null) {
      return element.offsetTop;
    }
  }

  let borders = {
    about: "solid",
    portfolio: "dashed",
    elsewhere: "dashed",
    contact: "dashed",
  }
  
  function update() {
    let windowHeight = window.scrollY;
    for (let element of Object.keys(borders).reverse()) {
      if (windowHeight + 5 > offset(element)) {
        for (let otherElement of Object.keys(borders).filter(item => item !== element)) {
          borders[otherElement] = "dashed";
        }
        borders[element] = "solid"
        return;
      }
    }
  }
</script>

<style>
  nav {
    position: sticky;
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
      transform-origin: bottom left;
      -webkit-transform-origin: bottom left;
      margin-top: 1.1em;
      width: 75vh;
      margin-left: -0.2em;
      top: 50px;
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
      top: 50px;
    }
  }
</style>

<svelte:window on:scroll={update}/>

<nav role="navigation" aria-label="primary navigation">
  <ul>
    <li class="about-li">
      <a class="about-a" style="border-bottom-style: {borders['about']}" href="#about">
        About
      </a>
    </li>
    <li class="portfolio-li">
      <a
        class="portfolio-a"
        style="border-bottom-style: {borders['portfolio']}" href="#portfolio">
        Portfolio
      </a>
    </li>
    <li class="elsewhere-li">
      <a
        class="elsewhere-a"
        style="border-bottom-style: {borders['elsewhere']}" href="#elsewhere">
        Elsewhere
      </a>
    </li>
        <li class="contact-li">
      <a
        class="contact-a"
        style="border-bottom-style: {borders['contact']}" href="#contact">
        Contact
      </a>
    </li>
  </ul>
</nav>
