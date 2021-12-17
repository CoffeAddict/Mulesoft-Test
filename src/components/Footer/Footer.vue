<template>
    <div class="d-flex footer-container b-black">
      <div class="d-flex container">
        <MulesoftGrey/>
      </div>
    </div>
</template>

<script>

import MulesoftGrey from '@/components/Icons/MulesoftGrey.vue'

export default {
  name: 'Footer',
  components: {
    MulesoftGrey
  }
}
</script>

<style scoped lang="scss">
.footer-container {
  min-height: var(--footer-height);
  align-items: center;

  .container {
    height: min-content;
  }
}
</style>
