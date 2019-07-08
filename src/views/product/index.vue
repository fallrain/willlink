<template>
  <div class="productBox">
    <div class="swipeBox">
      <van-swipe :height="175" indicator-color="white">
        <van-swipe-item><img src="../../assets/img/product/banner.png"/></van-swipe-item>
        <van-swipe-item><img src="../../assets/img/product/banner.png"/></van-swipe-item>
        <van-swipe-item><img src="../../assets/img/product/banner.png"/></van-swipe-item>
        <van-swipe-item><img src="../../assets/img/product/banner.png"/></van-swipe-item>
      </van-swipe>
    </div>
    <div class="earnings">
      <div class="name">昨天收益</div>
      <div class="num">
        <van-field disabled :type="eyeType" input-align="right" v-model="value"/>
        <span>WCC</span>
      </div>
      <div class="btn" @click="eyeBtn">
        <img :src="eye?openImg:closeImg"/>
      </div>
    </div>
    <div class="productList">
      <div class="title">社区成员<!--<a>更多产品>></a>--></div>
      <ul>
        <li
          v-for="(item) in productList"
          :key="item.id"
          class="line"
        >
          <img :src="item.imgSrc"/>
          <button
            type="button"
            :disabled="/V[45]/.test(item.name)"
            :class="['btn',/V[45]/.test(item.name) && 'disabled']"
            @click="toBuy(item)"
          >开启
          </button>
        </li>
      </ul>
    </div>
    <!--底线-->
    <div class="divider">
      <div class="divider-text">我是有底线的</div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import {
  Field, Icon, Swipe, SwipeItem
} from 'vant';
import close from '@/assets/img/product/close-eye.png';
import open from '@/assets/img/product/open-eye.png';

Vue.use(Swipe).use(SwipeItem);
Vue.use(Field);
Vue.use(Icon);
export default {
  name: 'Product',
  mixins: [],
  components: {},
  props: {},
  data() {
    return {
      value: '+10,000.00',
      closeImg: close,
      openImg: open,
      eye: true,
      eyeType: 'text',
      productList: []
    };
  },
  computed: {},
  watch: {},
  created() {
    this.queryProduct();
  },
  mounted() {
  },
  destroyed() {
  },
  methods: {
    eyeBtn() {
      this.eye = !this.eye;
      if (this.eye === true) {
        this.eyeType = 'text';
      } else {
        this.eyeType = 'password';
      }
    },
    queryProduct() {
      /* 查询产品列表 */
      this.axGet('v1/products').then(({ status, data }) => {
        if (status === 200) {
          this.productList = data.data.map(v => ({
            ...v,
            imgSrc: require(`@/assets/img/product/product${v.name}.png`)
          }));
        }
      });
    },
    toBuy(item) {
      /* 去买入 */
      this.$router.push({
        name: 'ProductOrder',
        params: {
          productName: item.name,
          productId: item.id
        }
      });
    }
  }
};
</script>

<style scoped lang="scss">
  .productBox {
    .swipeBox {
      img {
        width: 100%;
        height: 100%;
        display: inline-block;
      }

      .van-swipe {
        .van-swipe__indicator--active {
          width: 10px;
          height: 5px;
          background: rgba(255, 255, 255, 1);
          border-radius: 3px;
        }
      }

    }

    .earnings {
      margin: 10px 15px;
      padding: 15px 36px;
      height: 75px;
      background: rgba(34, 34, 41, 1);
      border-radius: 10px;
      position: relative;

      .name {
        font-size: 14px;
        font-family: PingFang-SC-Medium;
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
      }

      .num {
        .van-cell {
          font-size: 25px;
          font-family: DIN-Medium;
          font-weight: 500;
          color: rgba(255, 255, 255, 1);
          background: rgba(34, 34, 41, 1);
          padding: 0;
          width: 70%;
          height: auto;
          line-height: 0;
          display: inline-block;

          &:after {
            border-bottom: none;
          }
        }

        span {
          display: inline-block;
          font-size: 12px;
          font-family: DIN-Medium;
          font-weight: 500;
          color: rgba(255, 255, 255, 1);
          margin-left: 6px;
          vertical-align: super;
        }
      }

      .btn {
        position: absolute;
        top: 26px;
        right: 36px;

        img {
          width: 15px;
          height: auto;
        }
      }
    }

    .productList {
      background: rgba(34, 34, 41, 1);
      padding: 16px 14px;

      .title {
        font-size: 17px;
        font-family: PingFang-SC-Heavy;
        font-weight: 800;
        color: rgba(89, 193, 182, 1);
        margin-bottom: 20px;

        a {
          font-size: 12px;
          font-family: PingFang-SC-Medium;
          font-weight: 500;
          color: rgba(255, 255, 255, 1);
          float: right;
        }
      }

      .line {
        margin-bottom: 8px;

        img {
          width: 72%;
          height: 70px;
          display: inline-block;
          float: left;
        }

        .btn {
          width: 50px;
          height: 20px;
          line-height: 20px;
          background: rgba(89, 193, 182, 1);
          border-radius: 5px;
          font-size: 12px;
          font-family: PingFang-SC-Medium;
          font-weight: 500;
          color: rgba(255, 255, 255, 1);
          margin: 25px 0 25px 25px;
          display: inline-block;
          text-align: center;

          &.disabled {
            background: #656476;
          }
        }
      }
    }

    .divider {
      margin: 30px 0;
    }
  }
</style>
