<template>
<div class="swiper-container">
  <div class="swiper-wrapper">
    <div class="swiper-slide">Slide 1</div>
    <div class="swiper-slide">Slide 2</div>
    <div class="swiper-slide">Slide 3</div>
    <div class="swiper-slide">Slide 4</div>
    <div class="swiper-slide">Slide 5</div>
  </div>
</div>
</template>

<script>
import Swiper from 'swiper'
export default {
  name: 'Swiper',
  created () {
    /* eslint-disable no-new */
    this.$nextTick(() => {
      new Swiper('.swiper-container', {
        direction: 'vertical',
        loop: true,
        slidesPerView: 3,
        spaceBetween: 30,
        autoplay: 6000,
        autoplayDisableOnInteraction: false
      })
    })
  }
}
</script>
<style lang="scss" scoped>
.swiper-container {
  padding: 0 16px;
  height: 560px;
  .swiper-slide {
    border: 1px solid #ddd;
  }
}
</style>
