<template>
  <div class="d-flex">
    <Hero/>
    <Cards/>
  </div>
</template>

<script>

import Hero from './Hero.vue'
import Cards from './Cards.vue'

export default {
  name: 'BodyContent',
  components: {
    Hero,
    Cards
  }
}
</script>

<style scoped lang="scss">
.d-flex {
  flex-wrap: wrap;
}
</style>
