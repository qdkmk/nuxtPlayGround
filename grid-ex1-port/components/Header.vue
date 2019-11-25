<template>
  <div class="header__wrapper">
    <div class="header__logo">
      <a href="#">
        <h1>
          <span>Dummy's</span>
          <span>Coffee</span>
        </h1>
      </a>
    </div>
    <div class="nav__wrapper">
      <ul>
        <li class="nav__list">
          <a href="#">
            <p>WORKS</p>
          </a>
        </li>
        <li class="nav__list">
          <a href="#">
            <p>SHOP</p>
          </a>
        </li>
        <li class="nav__list">
          <a href="#">
            <p>Contact</p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
* {
  text-decoration: none;
}
a:link,
a:visited {
  color: #333;
  text-decoration: none;
  display: inline-block;
  padding: 0.33333rem 0.5rem;
  line-height: 1;
  border-radius: 3px;
  border: none;
  margin-right: 0.5em;
}

a:active,
a:hover,
a:focus {
  color: #333;
  border: none;
}

.header__wrapper {
  //background-color: #6c2a0a;
  display: block;
  height: 40vh;
  text-align: center;
  width: 100vw;
  padding: 10vh;
  .header__logo {
    h1 {
      color: #333;
      font-size: 3rem;
      font-weight: normal;
      margin-bottom: 1rem;
    }
  }
  .nav__wrapper {
    border-top: 1px solid #bbb;
    border-bottom: 1px solid #bbb;
    margin: 5vh auto;
    ul {
      display: flex;
      justify-content: center;
      padding: 0 1.5rem;
      .nav__list {
        list-style: none;
        letter-spacing: 0.05rem;
        font-size: 0.8rem;
        margin: 0.5rem;
        p {
          font-family: 'Montserrat', 'PT Serif', -apple-system,
            BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
            sans-serif;
          font-weight: 300;
        }
      }
    }
  }
}

@media screen and (max-width: 650px) {
  .header__wrapper {
    height: 30vh;
    padding: 5vh 5vh 0;
    margin-bottom: 10vh;
    .nav__wrapper {
      margin: 2vh auto;
    }
  }
}
</style>
