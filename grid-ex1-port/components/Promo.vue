<template>
  <div class="promo__wrapper">
    <div class="img">
      <slot name="img">
        <img src="/mycake.png" alt="shoe" />
      </slot>
    </div>
    <div class="new">
      <slot name="new">New</slot>
    </div>
    <div class="sale">
      <slot name="sale">Sweets</slot>
    </div>
    <div class="collection">
      <slot name="collection">Collection</slot>
    </div>
    <div class="details">
      <slot name="details">New Products Of This Month</slot>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.promo__wrapper {
  // box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.6);
  display: grid;
  grid-template-columns: 60px 100px 1fr;
  grid-template-rows: 60px 60px 100px 20px 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  width: 90%;
  margin: auto;
  .new {
    grid-area: 1 / 1 / 5 / 4;
    color: #efefef;
    font-size: 28vmin;
    text-transform: uppercase;
    font-family: 'Montserrat', 'PT Serif', -apple-system, BlinkMacSystemFont,
      'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-weight: 300;
  }
  .sale {
    grid-area: 2 / 2 / 3 / 4;
    font-size: 8.5vmin;
    color: #d96528;
    font-style: italic;
  }
  .collection {
    grid-area: 3 / 3 / 4 / 4;
    font-size: 8.5vmin;
    font-style: italic;
  }
  .details {
    grid-area: 4 / 2 / 5 / 4;
    font-size: 2.5vmin;
    letter-spacing: 0.15em;
    text-transform: uppercase;
  }
  .img {
    max-width: 950px;
    max-height: 950px;
    grid-area: 3 / 3 / 6 / 4;
    img {
      width: 95%;
    }
  }
}

@media screen and (max-width: 650px) {
  .promo__wrapper {
    grid-template-columns: 25px 25px 1fr !important;
    grid-template-rows: 6vmin 5.5vmin 10vmin 20px 1fr !important;
  }
  .promo__wrapper {
    width: 100%;

    .new {
      font-size: 18vmin;
    }
    .sale {
      font-size: 6vmin;
    }
    .collection {
      font-size: 6vmin;
    }
    .details {
      font-size: 1.6vmin;
    }
  }
}
</style>
