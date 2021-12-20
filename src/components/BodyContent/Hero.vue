<template>
  <div class="d-flex b-blue c-white w-100">
    <div class="container d-flex">
      <div class="text-side">
        <span class="over-text">overview</span>
        <h1>Integrate faster and <span class="c-light-blue-2">unlock your future</span></h1>
        <p>Create seamless digital experiences, products, and services – faster – with the #1 unified platform for integration, API management, and automation.</p>
        <a href="#" class="btn remove-default b-light-blue-2">See how</a>
      </div>
      <HeroBackground class="background-pattern"/>
      <div class="image-side d-flex">
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
  }
}
</script>

<style scoped lang="scss">
.container {
  position: relative;
}

.text-side, .image-side {
  width: 50%;
}

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
    padding: 1em 3.8em;
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
  right: -25%;
  bottom: 6%;
}

@media screen and (max-width: 1000px) {
  .container.d-flex {
    flex-wrap: wrap;
  }

  .text-side, .image-side {
    width: 100%;
  }

  .text-side {
    text-align: center;
  }

  h1, p {
    margin-left: auto;
    margin-right: auto;
  }

  .image-side img {
    position: initial;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 3.5em;
  }

  .background-pattern {
    right: -15%;
    bottom: 3%;
  }
}

@media screen and (max-width: 600px) {
  .image-side img {
    width: 100%;
    max-width: 386px;
    margin-bottom: 5.5em;
  }

  .background-pattern {
    right: -100%;
    bottom: 0;
    transform: scale(.95);
  }
}
</style>
