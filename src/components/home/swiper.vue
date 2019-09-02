<template>
<div class="swiper-container">
  <div class="swiper-wrapper">
    <div class="swiper-slide">
      <img src="../../../static/images/swiper1.png"/>
    </div>
    <div class="swiper-slide">
      <img src="../../../static/images/swiper4.png"/>
    </div>
    <div class="swiper-slide">
      <img src="../../../static/images/swiper3.png"/>
    </div>
    <div class="swiper-slide">
      <img src="../../../static/images/swiper2.png"/>
    </div>
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
        spaceBetween: 10,
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
    width: 446px;
    height: 180px;
    overflow: hidden;
    border: 1px solid #ddd;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
