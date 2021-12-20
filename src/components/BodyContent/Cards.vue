<template>
  <div class="container">
    <div class="d-flex top-grid">
      <div class="card remove-border">
        <span class="tag c-white b-magenta">mulesoft toolkit</span>
        <h2>Accelerate innovation for your organization</h2>
        <p>Download our toolkit to learn how MuleSoft removes roadblocks, enabling faster innovation than ever before.</p>
        <a href="#" class="c-light-blue-2">
          <Arrow/>
          Read case studies
        </a>
      </div>
      <div
        class="card image-card remove-border"
        v-background="{
          large: LargeImage,
          medium: MediumImage,
          small: SmallImage
        }">
      </div>
    </div>
    <div class="bottom-grid d-flex">
      <div class="card">
        <span class="text c-grey">CASE STUDIES</span>
        <h2>Explore our customer stories</h2>
        <p>Discover how organizations in your industry are leveraging MuleSoft to innovate faster than ever before</p>
        <a href="#" class="c-light-blue-2">
          <Arrow/>
          Read case studies
        </a>
      </div>
      <div class="card">
        <span class="text c-grey">BLOG</span>
        <h2>Get advice from IT leaders</h2>
        <p>Learn from experts who are using integration, APIs, and automation to deliver digital initiatives faster</p>
        <a href="#" class="c-light-blue-2">
          <Arrow/>
          Read case studies
        </a>
      </div>
      <div class="card">
        <span class="text c-grey">WEBCAST</span>
        <h2>Tune into our CIO webcast series</h2>
        <p>Hear directly from CIOs about how they’re delivering business outcomes faster for their organizations</p>
        <a href="#" class="c-light-blue-2">
          <Arrow/>
          Read case studies
        </a>
      </div>
    </div>
  </div>
</template>

<script>

import Arrow from '@/components/Icons/Arrow.vue'
import LargeImage from '@/assets/img/large-tile-image.jpg'
import MediumImage from '@/assets/img/large-tile-image-medium.jpg'
import SmallImage from '@/assets/img/large-tile-image-small.jpg'

export default {
  name: 'Cards',
  components: {
    Arrow
  },
  data () {
    return {
      LargeImage: LargeImage,
      MediumImage: MediumImage,
      SmallImage: SmallImage
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  padding-top: 5.75em;
  z-index: 2;
}
.card {
  box-shadow: 0 10px 30px rgba(0,0,0,.1);
  padding: 2.5em 1.875em;
  border-top: 5px solid #ccc;
  margin-bottom: 7.125em;

  &.image-card {
    box-shadow: none;
    padding: 0;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  &.remove-border {
    border: none;
  }

  &:first-of-type {
    width: 41%;
  }

  &:nth-of-type(2) {
    width: 59%;
  }

  .tag  {
    padding: .6em 1em .4em;
    border-radius: 5px;
    text-transform: uppercase;
    font-family: 'DIN Pro';
    font-weight: bold;
    line-height: 1em;
    font-size: 0.75em;
  }

  h2 {
    font-size: 1.375em;
    font-family: 'DIN Pro';
    max-width: 26.5em;
    line-height: 1.75em;
  }

  p {
    font-family: 'Open Sans';
    font-size: 1em;
    line-height: 2em;
  }

  a {
    font-family: 'Open Sans';
    font-weight: bold;
    font-size: 1em;
    line-height: 1.5em;
    text-decoration: none;

    :nth-child(1).icon {
      background-color: var(--light-blue-2);
      border-radius: 50%;
      padding: .16em .6em;
      margin-right: .5em;
      font-size: 16px;
      color: var(--white);
    }
  }
}

.bottom-grid {
  width: 100%;
  gap: 1em;

  .card {
    width: 33.33%;

    &:nth-child(1) {
      border-color: var(--light-blue-3);
    }

    &:nth-child(2) {
      border-color: var(--magenta);
    }

    &:nth-child(3) {
      border-color: var(--purple);
    }

    h2 {
      min-height: 4.125em;
      margin-top: 0;
    }

    p {
      margin-bottom: 2.75em;
    }

    .text {
      font-family: 'DIN Pro';
      font-weight: bold;
      font-size: 0.75em;
      letter-spacing: 5px;
    }
  }
}

@media screen and (max-width: 1000px) {
  .card {
    &:first-of-type {
      width: 43%;
    }

    &:nth-of-type(2) {
      width: 57%;
    }
  }

  .bottom-grid {
    $gap: 1.875em;
    flex-wrap: wrap;
    gap: $gap;
    margin-bottom: 4.9375em;

    .card {
      width: calc(50% - #{$gap});
      margin-bottom: 0;
    }
  }
}

@media screen and (max-width: 750px) {
  .top-grid {
    flex-direction: column-reverse;

    .card {
      width: 100%;

      &:nth-child(2) {
        padding-bottom: 52.7%;
        margin-bottom: 0;
      }
    }
  }

  .bottom-grid {
    margin-bottom: 5.6875em;

    .card {
      width: 100%;
      margin-bottom: 0;
    }
  }
}
</style>
