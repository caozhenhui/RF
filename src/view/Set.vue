<template>
  <div class="set">
    <h2>游戏设定</h2>
    <ul v-for="(item, index) in list" :key="index">
      <li>
        {{index + 1}}、{{item}}
      </li>
    </ul>
    <h2>个性披风外观</h2>
    <h3>阿克雷提亚(A族)-远装</h3>
    <div class="pf-img-box">
      <img src="../../static/images/a_y_1.png" alt="">
      <img src="../../static/images/a_y_2.png" alt="">
      <img src="../../static/images/a_y_3.png" alt="">
    </div>
    <h3>阿克雷提亚(A族)-近装</h3>
    <div class="pf-img-box">
      <img src="../../static/images/a_j_1.png" alt="">
      <img src="../../static/images/a_j_2.png" alt="">
      <img src="../../static/images/a_j_3.png" alt="">
    </div>
    <h3>阿克雷提亚(A族)-炮装</h3>
    <div class="pf-img-box">
      <img src="../../static/images/a_p_1.png" alt="">
      <img src="../../static/images/a_p_2.png" alt="">
      <img src="../../static/images/a_p_3.png" alt="">
    </div>

    <h3>贝尔托联邦(B族)-远装</h3>
    <div class="pf-img-box">
      <img src="../../static/images/b_y_1.png" alt="">
      <img src="../../static/images/b_y_2.png" alt="">
      <img src="../../static/images/b_y_3.png" alt="">
    </div>
    <h3>贝尔托联邦(B族)-近装</h3>
    <div class="pf-img-box">
      <img src="../../static/images/b_j_1.png" alt="">
      <img src="../../static/images/b_j_2.png" alt="">
      <img src="../../static/images/b_j_3.png" alt="">
    </div>
    <h3>贝尔托联邦(B族)-法装</h3>
    <div class="pf-img-box">
      <img src="../../static/images/b_f_1.png" alt="">
      <img src="../../static/images/b_f_2.png" alt="">
      <img src="../../static/images/b_f_3.png" alt="">
    </div>

    <h3>克拉(C族)-远装</h3>
    <div class="pf-img-box">
      <img src="../../static/images/c_y_1.png" alt="">
      <img src="../../static/images/c_y_2.png" alt="">
      <img src="../../static/images/c_y_3.png" alt="">
    </div>
    <h3>克拉(C族)-近装</h3>
    <div class="pf-img-box">
      <img src="../../static/images/c_j_1.png" alt="">
      <img src="../../static/images/c_j_2.png" alt="">
      <img src="../../static/images/c_j_3.png" alt="">
    </div>
    <h3>克拉(C族)-法装</h3>
    <div class="pf-img-box" style="margin-bottom:20px;">
      <img src="../../static/images/c_f_1.png" alt="">
      <img src="../../static/images/c_f_2.png" alt="">
      <img src="../../static/images/c_f_3.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Set',
  data () {
    return {
      list: [
        '人物最高开放：66级',
        '人物升级经验：8000倍',
        '召唤兽经验为：9.9E倍',
        '人物所有PT满',
        '开放在线时间自动获得商城点数，商城物品经过我们团队筛选',
        'BOSS票在商城购买，怪物攻击以及防御设定为中低',
        '开放PVP武器为PVP点数购买（不是主攻武器，主攻武器请往下看）',
        '全面开放里昂武器（不是主攻武器，主攻武器请往下看），这主要是做为辅助使用，请大家测试时善用此',
        '(主打武器）装备掉落机率较高，自然披风较低，那么依兰所有BOSS和孤立、野兽BOSS.自然、披风较高',
        '武器装备开放多多属性，自然使用官服的设定属性',
        'HP药水开放最高规格4000',
        'HQ出售各种羽石',
        '混沌改为PVP点购买',
        '投票要求等级最少50级以上，周（星期二00:00---星期六17:59）在线120分钟以上.贡献3000',
        '沙漠中心刷新刷钱小怪'
      ]
    }
  }
}
</script>

<style lang='scss' scoped>
.set{
  h2, h3{
    line-height: 60px;
  }
  ul{
    padding: 0 16px;
    li{
      line-height: 40px;
    }
  }
  h3{
     padding: 0 16px;
  }
  .pf-img-box{
    padding: 0 16px;
    width: 700px;
    height: 200px;
    display: flex;
    justify-content: space-between;
    img{
      width: 200px;
      height: 200px;
    }
  }
}
</style>
