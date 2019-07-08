<template>
  <w-divider-wrap
    class="sysAnnouncementDetail-wrap"
  >
    <div class="found-main h100per">
      <!-- <div class="found-head-par">
         <div class="found-head-icons">
           <ul class="found-head-icons-list">
             <li class="found-head-icons-item">
               <img src="@/assets/img/found/wlw@2x.png" class="found-head-icons-img">
               <p class="found-head-icons-inf">AAA信用</p>
             </li>
             <li class="found-head-icons-item">
               <img src="@/assets/img/found/plane@2x.png" class="found-head-icons-img">
               <p class="found-head-icons-inf">银行托管</p>
             </li>
             <li class="found-head-icons-item">
               <img src="@/assets/img/found/cube@2x.png" class="found-head-icons-img">
               <p class="found-head-icons-inf">ICP许可证</p>
             </li>
             <li class="found-head-icons-item">
               <img src="@/assets/img/found/chanye@2x.png" class="found-head-icons-img">
               <p class="found-head-icons-inf">产业认证</p>
             </li>
           </ul>
         </div>
       </div>-->
      <div class="exchange-swipe-par">
        <van-swipe
          class="exchange-swipe"
          :autoplay="5000"
          indicator-color="#59C1B6"
        >
          <van-swipe-item
            v-for="(image, index) in images"
            :key="index"
          >
            <img
              class="found-swipe-img"
              :src="image"
            >
          </van-swipe-item>
        </van-swipe>
      </div>
      <ul class="found-ad-bg-list mt10">
        <li
          class="found-ad-bg-item"
          @click="toExchange"
        >
          <img
            class="found-ad-bg-item-img"
            src="@/assets/img/found/ad1@2x.png"
          >
        </li>
        <li
          class="found-ad-bg-item"
          @click="toExchange"
        >
          <img
            class="found-ad-bg-item-img"
            src="@/assets/img/found/CEBX@2x.png"
          >
        </li>
        <li
          @click="toExchange"
          class="found-ad-bg-item"
        >
          <img
            class="found-ad-bg-item-img"
            src="@/assets/img/found/w-market@2x.png"
          >
        </li>
      </ul>
      <div class="found-ranking">
        <p class="found-ranking-head">排行榜</p>
        <div class="found-ranking-tab-par">
          <div
            :class="['found-ranking-tab',tabIndex===1 && 'active']"
            @click="changeTab(1)"
          >
            <div
              slot="title"
              class="found-ranking-tab-title"
            >
              <i class="iconfont icon-huobiduihuan"></i>收益
            </div>
          </div>
          <div
            :class="['found-ranking-tab',tabIndex===2 && 'active']"
            @click="changeTab(2)"
          >
            <div
              slot="title"
              class="found-ranking-tab-title"
            >
              <i class="iconfont icon-web-icon-"></i>推广
            </div>
          </div>
        </div>
        <div
          v-show="tabIndex===1"
        >
          <ul class="found-ranking-income-list">
            <li class="found-ranking-income-item">
              <div class="found-ranking-income-item-left text-ellipsis">
                <img src="@/assets/img/found/jiangbei-@2x.png">
                收益一
              </div>
              <div class="found-ranking-income-item-right">
                本周累计收益：7627.38
              </div>
            </li>
            <li class="found-ranking-income-item">
              <div class="found-ranking-income-item-left text-ellipsis">
                <img src="@/assets/img/found/jiangbei-3@2x.png">
                收益一
              </div>
              <div class="found-ranking-income-item-right">
                本周累计收益：7627.38
              </div>
            </li>
            <li class="found-ranking-income-item">
              <div class="found-ranking-income-item-left text-ellipsis">
                <img src="@/assets/img/found/jiangbei-2@2x.png">
                收益一收益一收益一收益一收益一收益一收益一收益一收益一收益一
              </div>
              <div class="found-ranking-income-item-right">
                本周累计收益：7627.38
              </div>
            </li>
          </ul>
        </div>
        <div
          v-show="tabIndex===2"
        >
          <ul class="found-ranking-income-list">
            <li class="found-ranking-income-item">
              <div class="found-ranking-income-item-left text-ellipsis">
                <img src="@/assets/img/found/jiangbei-2@2x.png">
                收益二
              </div>
              <div class="found-ranking-income-item-right">
                本周累计收益：12.38
              </div>
            </li>
            <li class="found-ranking-income-item">
              <div class="found-ranking-income-item-left text-ellipsis">
                <img src="@/assets/img/found/jiangbei-3@2x.png">
                收益二
              </div>
              <div class="found-ranking-income-item-right">
                本周累计收益：12.38
              </div>
            </li>
            <li class="found-ranking-income-item">
              <div class="found-ranking-income-item-left text-ellipsis">
                <img src="@/assets/img/found/jiangbei-2@2x.png">
                收益一收益一收益一收益一收益一收益一收益一收益一收益一收益一
              </div>
              <div class="found-ranking-income-item-right">
                本周累计收益：7627.38
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </w-divider-wrap>
</template>

<script>
import Vue from 'vue';
import {
  Tab,
  Tabs,
  Swipe,
  SwipeItem
} from 'vant';

import WDividerWrap from '../../components/form/WDividerWrap';
import bg1 from '@/assets/img/found/found-head-bg@2x.png';
import bg2 from '@/assets/img/found/swiper-OKEX@2x.png';
import bg3 from '@/assets/img/found/swiper-shuzi@2x.png';

Vue.use(Tab).use(Tabs);
Vue.use(Swipe).use(SwipeItem);
export default {
  name: 'Found',
  components: { WDividerWrap },
  data() {
    return {
      tabIndex: 1, // 当前tabIndex
      images: [
        bg1,
        bg2,
        bg3,
      ],
    };
  },
  created() {
    this.queryRange();
  },
  methods: {
    toExchange() {
      /* 跳转交易所页面 */
      this.$router.push({
        name: 'Exchange'
      });
    },
    changeTab(index) {
      this.tabIndex = index;
      this.queryRange();
    },
    queryRange() {
      /* 查询排行 */
      const {
        tabIndex
      } = this;
      let url;
      if (tabIndex === 1) {
        url = 'v1/rank/order_profit';
      } else {
        url = 'v1/rank/spread_profit';
      }
      this.axGet(
        url
      ).then(({ status, data }) => {
        if (status === 200) {

        }
      });
    }
  }
};
</script>

<style scoped lang="scss">

</style>
