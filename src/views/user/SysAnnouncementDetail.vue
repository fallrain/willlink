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
      <div class="sysAnnouncementDetail">
        <p class="sysAnnouncementDetail-title">节点升级，转账功能受到影响，请升级到最新版本</p>
        <p class="sysAnnouncementDetail-time">2019-6-17 23:43</p>
        <div class="sysAnnouncementDetail-content">
          以 8,940美元的价格计算，比特币的市值就会超过韩国的货币基数（准备货币）。而当前BTC报价9240美元，和众多法币相比，这使
          得比特币足以位列第九。如果按照推特CEO Jack Dorsey的对比
          特币互联网原生货币的定位，我们甚至可以称它是世界第九大货币。随着未来BTC价格的不断攀升，比特币有望不断提升自己的排名。
          哪个国家拥有世界上最大的货币基数？
          答案可能会让你大吃一惊。根据Crypto Voices编制的数据，到目前为止，黄金仍然是世界上最大的货币体系，供应总量接
          近8万亿美元。然而，“数字黄金”比特币也在努力追赶。
          那么，货币基数到底是什么呢？根据维基百科上的解释，它是指中央银行发行币值在外的计划数量与侨生的购物的通货总额。
          用一个公式表达：货币基数=流通中的通货+准备金。因此，一个国家的货币基数并不以其黄金储备来衡量。
        </div>
      </div>
    </div>
  </w-divider-wrap>
</template>

<script>
import Vue from 'vue';
import { Button, SwipeCell } from 'vant';
import WDividerWrap from '../../components/form/WDividerWrap';

Vue.use(Button);
Vue.use(SwipeCell);
export default {
  name: 'SysAnnouncementDetail',
  components: { WDividerWrap },
  data() {
    return {
    };
  },
  methods: {
  }
};
</script>

<style scoped>

</style>
