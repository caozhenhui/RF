<template>
  <div class="strategy">
    <div class="menu">
      <div class="menu-item" @click="changeIsShow('A')">
        <img src="../../static/images/btn_a.jpg" alt="A">
      </div>
      <div class="menu-item" @click="changeIsShow('B')">
        <img src="../../static/images/btn_b.jpg" alt="B">
      </div>
      <div class="menu-item" @click="changeIsShow('C')">
        <img src="../../static/images/btn_c.jpg" alt="C">
      </div>
    </div>
    <strategy-a v-if="isShow === 'A'"></strategy-a>
    <strategy-b v-if="isShow === 'B'"></strategy-b>
    <strategy-c v-if="isShow === 'C'"></strategy-c>
  </div>
</template>

<script>
import StrategyA from '@/components/strategy/a'
import StrategyB from '@/components/strategy/b'
import StrategyC from '@/components/strategy/c'
export default {
  name: 'Strategy',
  components:{
    StrategyA, StrategyB, StrategyC
  },
  data () {
    return {
      isShow: 'A'
    }
  },
  methods: {
    changeIsShow (id) {
      this.isShow = id
    }
  }
}
</script>
<style lang="scss">
  .strategy {
    h1 {
      line-height: 60px;
    }
    h2{
      line-height: 60px;
    }
    p{
      line-height: 40px;
      padding: 0 16px;
    }
    .img-box {
      margin-left: 16px;
    }
  }
</style>

<style lang="scss" scoped>
  .strategy {
    .menu {
      margin-top: 20px;
      .menu-item{
        width: 185px;
        height: 59px;
        display: inline-block;
        border-radius: 6px;
        margin-right: 30px;
        overflow: hidden;
        cursor:pointer;
      }
    }
  }
</style>
