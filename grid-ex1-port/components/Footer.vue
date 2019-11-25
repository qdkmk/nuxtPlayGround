<template>
  <section class="footer">
    <ul>
      <li>About</li>
      <li>Company</li>
      <li>Locations</li>
      <li>Contact</li>
      <li>Hours</li>
    </ul>
    <ul>
      <li>Twitter</li>
      <li>Facebook</li>
      <li>Instagram</li>
      <li>LinkedIn</li>
    </ul>
    <ul>
      <h4>Newsletter:</h4>
      <input type="text" />
    </ul>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.footer {
  background-color: #eee;
  width: 100%;
  display: grid;
  padding: 40px 10%;
  grid-template-columns: repeat(3, 1fr);
  font-family: 'Montserrat', 'PT Serif', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

ul {
  list-style: none;
  padding-left: 0;
  li {
    margin-bottom: 0.2rem;
  }
}

input {
  width: 100%;
}

@media screen and (min-width: 850px) {
  .footer {
    // padding: 40px !important;
  }
}
</style>
