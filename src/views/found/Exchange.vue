<template>
  <div>
    <van-nav-bar
      left-arrow
      :title="navTitle"
      @click-left="back"
    >
    </van-nav-bar>
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
            class="exchange-swipe-img"
            :src="image"
          >
        </van-swipe-item>
      </van-swipe>
      <div class="exchange-swipe-tip">观看广告可获得额外收益</div>
    </div>
    <div class="exchange-apps">
      <div class="exchange-apps-head">
        <div class="exchange-apps-head-title">交易所</div>
        <div class="exchange-apps-head-opt">查看更多>></div>
      </div>
      <ul class="exchange-apps-list">
        <li
          v-for="(item) in appList"
          :key="item.id"
          class="exchange-apps-item"
        >
          <img
            class="exchange-apps-item-img"
            :src="item.img"
          >
          <button
            type="button"
            class="exchange-apps-item-btn"
            @click="toAppDown"
          >下载APP
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Swipe, SwipeItem } from 'vant';
import bg from '@/assets/img/found/exchange/725@2x.png';

Vue.use(Swipe).use(SwipeItem);
export default {
  name: 'Exchange',
  data() {
    return {
      images: [
        bg,
        bg,
        bg,
      ],
      appList: [
        {
          id: 1,
          img: require('@/assets/img/found/exchange/734@2x.png')
        },
        {
          id: 2,
          img: require('@/assets/img/found/exchange/760@2x.png')
        },
        {
          id: 3,
          img: require('@/assets/img/found/exchange/7601@2x.png')
        },
        {
          id: 4,
          img: require('@/assets/img/found/exchange/7602@2x.png')
        },
        {
          id: 5,
          img: require('@/assets/img/found/exchange/7603@2x.png')
        },
        {
          id: 6,
          img: require('@/assets/img/found/exchange/7604@2x.png')
        }
      ]
    };
  },
  methods: {
    toAppDown() {
      /* 跳转到app下载页面 */
      this.$router.push({
        name: 'AppDown'
      });
    }
  }
};
</script>

<style scoped>

</style>
