<template>
  <div
    class="d-flex navbar-container">
    <div class="d-flex container">
      <MulesoftBlue/>
    </div>
  </div>
</template>

<script>

import MulesoftBlue from '../Icons/MulesoftBlue.vue'

export default {
  name: 'NavBar',
  components: {
    MulesoftBlue
  }
}
</script>

<style scoped lang="scss">
.navbar-container {
  min-height: var(--menu-height);
  max-height: var(--menu-height);

  .container {
    padding-top: 0.8125em;
    padding-bottom: 0.8125em;
  }
}
</style>
