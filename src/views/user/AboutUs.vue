<template>
  <w-divider-wrap
    class="sysAnnouncementDetail-wrap"
  >
    <div class="h100per">
      <van-nav-bar
        left-arrow
        :title="navTitle"
        @click-left="back"
      >
      </van-nav-bar>
      <div class="aboutUs-detail">
        <p class="aboutUs-title">关于WillLink</p>
        <p class="aboutUs-subtitle">
          致力于：研发及运用区块链分布式技术+价值数据技术+AI技术，
        </p>
        <p class="aboutUs-subtitle">
          构建：电商产业服务体系、数字经济服务体系、金融科技服务体系。
        </p>
        <div class="aboutUs-content">
          WillLink将构建以数据为关键要素的数字经济综合体。推动实体经济和数字经济融合发展，推动区块链、互联网、大数据、人工智能同实体经济
          深度融合，持续做好信息化和产业化深度融合这篇大文章，推进数据资源管理体系建设，发挥数据的基础资源作用和创新引擎作用，加快形成以创新
          为主要引领 和支撑的数字经济。
        </div>
        <div class="aboutUs-content">
          WillLink，集成了：数字资产身份ID、数字资产价值管理、数字资产支付结算网络、数字资产流通生态的超级用户服务应用平台 。
        </div>
        <div class="aboutUs-content">
          用户可以在WillLink的生态体系内：消费、交易、社交、游戏、广告等。
        </div>
        <div class="aboutUs-content">
          WillLink，提供了强大的生体体系支撑：金融科技服务、电商服务、OTC交易服务、企业STO服务、智能支付服务、智能溯源服务、社区服务等。
          “期待与您的合作，共创WillLink新未来。”
        </div>
      </div>
      <div class="aboutUs-content"></div>
    </div>
  </w-divider-wrap>
</template>

<script>
import WDividerWrap from '../../components/form/WDividerWrap';

export default {
  name: 'AboutUs',
  components: { WDividerWrap },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>

</style>
