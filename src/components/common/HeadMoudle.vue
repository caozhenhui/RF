<template>
  <div class="head-moudle">
    <img src="../../../static/images/header_bg.jpg">
    <ul class="head-moudle__memu">
      <li v-for="item in memuList" :key="item.id" @click="switcherRouter(item.id)">
        {{item.title}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HeadMoudle',
  data () {
    return {
      activeIndex: '1',
      memuList: [
        {id: '1', title: '首页'},
        {id: '2', title: '账号注册'},
        {id: '3', title: '游戏设定'},
        {id: '4', title: '新手攻略'},
        {id: '5', title: '关于我们'},
        {id: '6', title: '游戏下载'}
      ]
    }
  },
  methods: {
    switcherRouter (id) {
      switch (id) {
        // 首页
        case '1': this.$router.push({name: 'home'}); break
        // 游戏特色
        case '3': this.$router.push({name: 'set'}); break
        default:break
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.head-moudle {
  height: 562px;
  position: relative;
  .head-moudle__memu {
    position: absolute;
    height: 50px;
    line-height: 50px;
    font-size: 18px;
    font-weight: 50px;
    z-index: 2;
    top: 14px;
    right: 360px;
    li{
      float: left;
      color: #fff;
      padding: 0 20px;
      cursor:pointer;
    }
    li:hover {
      color: #ccc;
    }
  }
}
</style>
