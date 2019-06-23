<template>
  <div id="app">
    <div class="container">
      <head-moudle></head-moudle>
      <router-view/>
    </div>
    <div class="foot-box">
      <footer-moudle></footer-moudle>
    </div>
  </div>
</template>

<script>
import HeadMoudle from './components/common/HeadMoudle'
import FooterMoudle from './components/common/FooterMoudle'
export default {
  name: 'App',
  components: {
    HeadMoudle, FooterMoudle
  }
}
</script>
<style lang="scss" scoped>
#app {
  width: 1280px;
  margin: 0 auto;
  .container {
    min-height: 100%;
    padding-bottom: 80px;
  }
  .foot-box {
    margin-top: -80px;
  }
}
</style>
