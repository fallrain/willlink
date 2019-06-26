<template>
  <div class="productBox">
    <!-- 筛选-->
    <div class="filtrate">
      <div class="filtrate-btn" :class="product ? '' : 'active'" @click="filtrateBtn(1)">产品<van-icon :name="product ? ptop : pbottom" /></div>
      <div class="filtrate-btn" :class="state ? '' : 'active'" @click="filtrateBtn(2)">状态<van-icon :name="state ? stop : sbottom" /></div>
    </div>
    <div class="maskBox" v-show="mask" :class="mask ?  'maskTop' : ''">
      <div class="btn active">全部</div>
      <div class="btn">V1</div>
      <div class="btn">V2</div>
      <div class="btn">V3</div>
      <div class="btn">V4</div>
      <div class="btn">V5</div>
    </div>
    <!--列表-->
    <div class="productList">
      <div class="line">
        <img src="../../assets/img/product/product3.png"/>
        <div class="box">
          <div class="btn">订单待提交</div>
        </div>
      </div>
      <div class="line">
        <img src="../../assets/img/product/product2.png"/>
        <div class="box">
          <div class="btn">收益中</div>
          <div class="time right">到期时间：2020-6-20</div>
        </div>
      </div>
      <div class="line">
        <img src="../../assets/img/product/product1.png"/>
        <div class="box">
          <div class="btn disabled">交易结束</div>
          <div class="time right">到期时间：2020-6-20</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { DropdownMenu, DropdownItem, Icon, Button  } from 'vant';
import arrowTop from '@/assets/img/product/arrow-top.png';
import arrowBottom from '@/assets/img/product/arrow-bottom.png';

Vue.use(DropdownMenu).use(DropdownItem);
Vue.use(Icon);
Vue.use(Button);
export default {
  name: 'HomeProduct',
  mixins: [],
  components: {},
  props: {},
  data() {
    return {
      value: 0,
      switch1: false,
      switch2: false,
      option: [
        { text: '全部商品', value: 0 },
        { text: '新款商品', value: 1 },
        { text: '活动商品', value: 2 }
      ],
      product: true,
      ptop: arrowTop,
      pbottom: arrowBottom,
      state: true,
      stop: arrowTop,
      sbottom: arrowBottom,
      mask: false,
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  destroyed() {},
  methods: {
    filtrateBtn(row) {
      if (row === 1) {
        this.product = !this.product;
      } else if (row === 2) {
        this.state = !this.state;
      }
      this.mask = !this.mask;
    }
  }
};
</script>

<style scoped lang="scss">
  .productBox{
    * {
      box-sizing: border-box;
    }
    .filtrate{
      padding: 10px 15px;
      .van-dropdown-menu{
        background:rgba(28,28,33,1);
        &:after{
          border: none;
        }
      }
      &-btn{
        width: 63px;
        height: 25px;
        display: inline-block;
        line-height: 25px;
        background:rgba(34,34,41,1);
        border-radius: 13px;
        font-size: 12px;
        font-family:PingFang-SC-Medium;
        font-weight:500;
        color:rgba(131,130,153,1);
        text-align: center;
        margin-right: 15px;
        &:last-child{
          margin-right: 0;
        }
        .van-image{
          width: 100%!important;
          height: 100%!important;
          vertical-align: middle;
        }
        i{
          margin-left: 5px;
          font-size: 10px;
          width: 8px;
          height: 5px;
        }
        &.active{
          color:rgba(89,193,182,1);
        }
      }
    }
    .productList{
      .line{
        height: 150px;
        background:rgba(34,34,41,1);
        padding: 10px 15px 15px 15px;
        margin-bottom: 8px;
        img{
          height: 90px;
          border-radius: 5px;
          margin-bottom: 10px;
        }
        .box{
          .btn{
            display: inline-block;
            height: 25px;
            line-height: 12px;
            background:rgba(89,193,182,1);
            border-radius: 13px;
            font-size: 12px;
            font-family:PingFang-SC-Medium;
            font-weight:500;
            color:rgba(255,255,255,1);
            padding: 7px 13px;
            &.disabled{
              background:rgba(131,130,153,1);
              border-radius: 13px;
            }
          }
          .time{
            height: 25px;
            line-height: 25px;
            font-size: 11px;
            font-family:PingFang-SC-Medium;
            font-weight:500;
            color:rgba(131,130,153,1);
            display: inline-block;
          }
        }
      }
    }
    .maskBox{
      position: fixed;
      right: 0;
      left: 0;
      bottom: 0;
      overflow: hidden;
      background:rgba(28,28,33,0.8);
      z-index: 10;
      height: 100vh;
      padding: 20px 15px 20px 0;
      &.maskTop{
        top: 89px;
      }
      .btn{
        width: 75px;
        height: 25px;
        line-height: 25px;
        background:rgba(34,34,41,1);
        border-radius:5px;
        display: inline-block;
        font-size: 12px;
        font-family:PingFang-SC-Medium;
        font-weight:500;
        color:rgba(131,130,153,1);
        text-align: center;
        margin-right: 15px;
        margin-bottom: 15px;
        &.active{
          background:rgba(89,193,182,1);
          color:rgba(255,255,255,1);
        }
      }
    }
  }

</style>
