<template>
<div class="home">
  <div class="swiper">
    <h2>游戏展示</h2>
    <swiper></swiper>
  </div>
    <div class="role">
      <h2>种族介绍</h2>
      <h3>Accretia-阿克雷提亚(A族)</h3>
      <p>极端的机甲文明建立的种族，机甲帝国只有不断的生产和进步才能维系帝国的稳定，以集体精神出发的帝国同当时银河系的统治者贝尔托联盟之间发生了关乎帝国存亡的战争，经过数场殊死之战，最终战胜了贝尔托同盟 ，但是胜利却带来了帝国的分裂，从此阿克雷提亚族开始了内部与外部漫无休止的战争。</p>
      <p class="only">专有职业：炮手</p>
      <h3>Bellato-贝尔托联邦(B族)</h3>
      <p>
        随着人类文明的不断发展，打造通往银河系和人类之间的太空贸易桥梁. 建立了许多殖民地和资源基地和贸易太空港。为了守护领地他们把分散的许多种族聚集后成立了联邦军 。 但是与机战士帝国军和精灵同盟军战斗中屡次失败后，渐渐地走向没落。 此后人类势力分为复兴联邦和独立联邦并开始了内战。
      </p>
      <p class="only">专有职业：机甲驾驶员</p>
      <h3>Cora-克拉(C族)</h3>
      <p>
        崇尚数字神蒂森的克拉人因宗教纷争内部引起了内讧.所谓洗礼战争是克拉内乱，战争结束后胜利成果落入了拥护黑暗系列魔法势力手中，此后他们建立了由一个法老为中心势力的强大宗教同盟国克拉。对于克拉人来说最为重要的是他们所崇尚的神,把最高统治者蒂森旨意释放到宇宙万物中的事情.精神文明比其它种族高度进化，所以觉得自己优越其它种族带有选民意识。
      </p>
      <p class="only">专有职业：召唤师</p>
      <h2>免责声明</h2>
      <p>本服务器纯粹为RF爱好者交流用,或想通过非官方渠道体验RF世界的玩家,一切免费。<br/>所用服务器程序与官方也有很大差别,如不能满足你的需求请支持官服。</p>
    </div>
  </div>
</template>

<script>
import Swiper from '@/components/home/swiper'
export default {
  name: 'Home',
  components: {
    Swiper
  }
}
</script>

<style scoped lang="scss">
  .home {
    height: 600px;
    overflow: hidden;
    .swiper {
      width: 480px;
      float: left;
      height: 600px;
      h2{
        line-height: 60px;
      }
    }
    .role {
      width: 800px;
      float: right;
      height: 600px;
      h2{
        line-height: 60px;
      }
      h3 {
        line-height: 50px;
      }
      p{
        padding: 0 16px;
      }
      .only {
        margin-top: 10px;
      }
    }
  }
</style>
