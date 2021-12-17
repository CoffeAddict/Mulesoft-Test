<template>
  <div class="d-flex b-blue c-white w-100">
    <div class="container d-flex">
      <div class="text-side w-50">
        <span class="over-text">overview</span>
        <h1>Integrate faster and <span class="c-light-blue-2">unlock your future</span></h1>
        <p>Create seamless digital experiences, products, and services – faster – with the #1 unified platform for integration, API management, and automation.</p>
        <a href="#" class="btn remove-default b-light-blue-2">See how</a>
      </div>
      <HeroBackground class="background-pattern"/>
      <div class="image-side d-flex w-50">
        <img src="@/assets/img/banner-image.png" alt="Women using a laptop while starring at his floating robot assistant" >
      </div>
    </div>
  </div>
</template>

<script>

import HeroBackground from '@/components/Icons/HeroPattern.vue'

export default {
  name: 'Hero',
  components: {
    HeroBackground
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
.text-side {
  padding: 6.25em 0 5em 0;

  span.over-text {
    text-transform: uppercase;
    font-family: 'Din Pro';
    font-weight: bold;
    font-size: 0.87em;
    letter-spacing: .4em;
  }

  h1 {
    font-size: 2.8em;
    line-break: 3.43em;
    font-family: 'Din Pro';
    font-weight: 700;
    max-width: 10em;
    margin-top: 0.4em;
    margin-bottom: 0.2em;
  }

  p {
    font-size: 1.375em;
    line-height: 2em;
    max-width: 21.5em;
    margin-bottom: 2.5em;
  }

  .btn {
    padding: 1em 4em;
    font-weight: bold;

    &:hover {
      cursor: pointer;
    }
  }
}

.image-side {
  align-items: center;
  position: relative;

  img {
    position: absolute;
    right: 0;
    z-index: 1;
  }
}

.background-pattern {
  position: absolute;
  right: -7%;
}
</style>
