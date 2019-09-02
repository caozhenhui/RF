<template>
  <div class="head-moudle">
    <img src="../../../static/images/header_bg.jpg">
    <h1>
      PVPRF
    </h1>
    <h2>
      专为喜欢PVP设置的RF服务器
    </h2>
    <ul class="head-moudle__memu">
      <li v-for="item in memuList"
          :key="item.id"
          @click="switcherRouter(item.id)">
        {{item.title}}
      </li>
    </ul>
    <!-- <div class="recharge">
      <a href="http://1.2pay.cc/3E41B71DC8CD92FC1EBF427FD2762C43C5F6EB1B232764F80B4D34B995F5AED0"
         target="_blank">充值</a>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'HeadMoudle',
  data () {
    return {
      activeIndex: '1',
      memuList: [
        { id: '1', title: '首页' },
        { id: '2', title: '账号注册' },
        { id: '3', title: '游戏设定' },
        { id: '4', title: '新手攻略' },
        { id: '5', title: '游戏下载' },
        { id: '6', title: '赞助展示' },
        { id: '7', title: '充值入口' }
      ]
    }
  },
  methods: {
    switcherRouter (id) {
      switch (id) {
        // 首页
        case '1': this.$router.push({ name: 'home' }); break
        // 注册
        case '2': this.$router.push({ name: 'register' }); break
        // 游戏特色
        case '3': this.$router.push({ name: 'set' }); break
        // 新手攻略
        case '4': this.$router.push({ name: 'strategy' }); break
        // 下载
        case '5': this.$router.push({ name: 'download' }); break
        // 赞助
        case '6': this.$router.push({ name: 'sponsor' }); break
        // 充值
        case '7': window.open('http://1.2pay.cc/3E41B71DC8CD92FC1EBF427FD2762C43C5F6EB1B232764F80B4D34B995F5AED0'); break
        default: break
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
    right: 250px;
    li {
      float: left;
      color: #fff;
      padding: 0 20px;
      cursor: pointer;
    }
    li:hover {
      color: #ccc;
    }
  }
  h1 {
    position: absolute;
    top: 320px;
    left: 200px;
    font-size: 50px;
    color: #fff;
  }
  h2 {
    position: absolute;
    top: 350px;
    left: 380px;
    color: #fff;
  }
  // .recharge a {
  //   position: absolute;
  //   right: 20px;
  //   top: 50%;
  //   transform: translateY(-50%);
  //   width: 100px;
  //   height: 50px;
  //   background: #ff8833;
  //   color: #fff;
  //   font-size: 18px;
  //   text-align: center;
  //   line-height: 50px;
  //   border-radius: 6px;
  // }
}
</style>
