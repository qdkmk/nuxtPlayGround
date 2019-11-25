<template>
  <div class="container">
    <promo />
    <howto />
    <products />
    <promo>
      <template v-slot:img>
        <img src="/mycake2.png" alt="bag" />
      </template>
      <template v-slot:new>20%</template>
      <template v-slot:sale>Limited Time Sale</template>
      <template v-slot:collection>Until Sunday</template>
      <template v-slot:details>A Cake and Drink Set</template>
    </promo>
  </div>
</template>

<script>
import Promo from '~/components/Promo.vue'
import Products from '~/components/Products.vue'
import Howto from '~/components/Howto.vue'
export default {
  components: {
    Promo,
    Products,
    Howto
  }
}
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  width: 70vw;
  font-family: 'PT Serif', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif;
}
@media screen and (max-width: 699px) {
  .container {
    width: 90vw;
  }
}
</style>
