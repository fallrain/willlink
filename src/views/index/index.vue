<template>
  <div class="homeBox">
    <!--总资产-->
    <div class="assetsBox">
      <div class="assetsBox-title">总资产</div>
      <div class="assetsBox-name">
        <div class="left">WID</div>
        <div class="right">USDT</div>
        <div class="van-clearfix"></div>
      </div>
      <div class="assetsBox-num">
        <div class="left">643,234,255.43</div>
        <div class="right">45,756,787.98</div>
        <div class="van-clearfix"></div>
      </div>
      <div class="assetsBox-border"></div>
      <div class="assetsBox-earnings">
        <div class="name">产品收益</div>
        <div class="type">1983257 WID</div>
        <div class="type">183275 USDT</div>
      </div>
    </div>
    <!--产品状态-->
    <div class="stateBox">
      <div class="stateBox-all left">
        全部资产<p>100</p>
      </div>
      <div class="stateBox-border left"></div>
      <div class="stateBox-earnings left">
        收益中产品<p>50</p>
      </div>
      <div class="stateBox-arrow right">
        <van-icon name="arrow" color="#838299"/>
      </div>
      <div class="van-clearfix"></div>
    </div>
    <!--全部资产-->
    <div class="assetsList">
      <div class="assetsList-title">
        全部资产<div class="assetsList-title-btn right"><van-icon name="add-o" color="#838299"/>新增</div>
      </div>
      <div class="assetsList-line">
        <img class="img left" src="../../icon/W.png">
        <div class="name left">WID</div>
        <div class="num right">
          <div class="">100,000,000.00</div>
          <div class="money">≈100,000,000.00 USDT</div>
        </div>
        <div class="van-clearfix"></div>
      </div>
      <div class="assetsList-line">
        <img class="img left" src="../../icon/W.png">
        <div class="name left">WID</div>
        <div class="num right">
          <div class="">100,000,000.00</div>
          <div class="money">≈100,000,000.00 USDT</div>
        </div>
        <div class="van-clearfix"></div>
      </div>
      <div class="assetsList-line">
        <img class="img left" src="../../icon/W.png">
        <div class="name left">WID</div>
        <div class="num right">
          <div class="">100,000,000.00</div>
          <div class="money">≈100,000,000.00 USDT</div>
        </div>
        <div class="van-clearfix"></div>
      </div>
      <div class="assetsList-line">
        <img class="img left" src="../../icon/W.png">
        <div class="name left">WID</div>
        <div class="num right">
          <div class="">100,000,000.00</div>
          <div class="money">≈100,000,000.00 USDT</div>
        </div>
        <div class="van-clearfix"></div>
      </div>
      <div class="assetsList-line">
        <img class="img left" src="../../icon/W.png">
        <div class="name left">WID</div>
        <div class="num right">
          <div class="">100,000,000.00</div>
          <div class="money">≈100,000,000.00 USDT</div>
        </div>
        <div class="van-clearfix"></div>
      </div>
      <div class="assetsList-line">
        <img class="img left" src="../../icon/W.png">
        <div class="name left">WID</div>
        <div class="num right">
          <div class="">100,000,000.00</div>
          <div class="money">≈100,000,000.00 USDT</div>
        </div>
        <div class="van-clearfix"></div>
      </div>
    </div>
    <!--底线-->
    <div class="divider"><div class="divider-text">我是有底线的</div></div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Icon, Image } from 'vant';

Vue.use(Icon);
Vue.use(Image);
export default {
  name: 'HomePage',
  mixins: [],
  components: {},
  props: {},
  data() {
    return {

    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  destroyed() {},
  methods: {}
};
</script>

<style scoped lang="scss">
  .homeBox{
    * {
      box-sizing: border-box;
    }
    .assetsBox{
      width: 100%;
      height:350px;
      padding: 40px 50px 45px 50px;
      border-radius:20px;
      margin-bottom: 20px;
      background-image: linear-gradient(to left, #5FC3B5, #3f7e82);
      &-title{
        line-height: 27px;
        font-size:28px;
        font-family:PingFang-SC-Medium;
        font-weight:500;
        color:rgba(255,255,255,1);
        margin-bottom: 49px;
      }
      &-name{
        margin-bottom: 38px;
        height:18px;
        font-size:24px;
        font-family:PingFang-SC-Medium;
        font-weight:500;
        color:rgba(255,255,255,1);
      }
      &-num{
        height:31px;
        font-size:34px;
        font-family:DIN-Medium;
        font-weight:500;
        color:rgba(255,255,255,1);
        margin-bottom: 20px;
      }
      &-border{
        height:8px;
        background:rgba(255,255,255,1);
        border-radius:3px;
        margin-bottom: 49px;
      }
      &-earnings{
        height:25px;
        line-height: 25px;
        font-size:26px;
        font-family:PingFang-SC-Medium;
        font-weight:500;
        color:rgba(255,255,255,1);
        .name{
          display: inline-block;
          margin-right: 20px;
        }
        .type{
          display: inline-block;
          padding-left: 61px;
        }
      }
    }
    .stateBox{
      height:140px;
      line-height: 80px;
      background:rgba(34,34,41,1);
      border-radius:20px;
      padding: 30px 40px;
      margin-bottom: 49px;
      font-size:30px;
      font-family:PingFang-SC-Medium;
      font-weight:500;
      color:rgba(255,255,255,1);
      div{
        display: inline-block;
      }
      p{
        display: inline-block;
        margin-left: 32px;
        font-size:35px;
        font-family:PingFang-SC-Heavy;
        font-weight:800;
        color:rgba(89,193,182,1);
      }
      &-border{
        width:2px;
        height:80px;
        background:rgba(101,100,118,1);
        margin: 0 50px;
      }

    }
    .assetsList{
      &-title{
        height:33px;
        line-height: 33px;
        font-size:34px;
        font-family:PingFang-SC-Heavy;
        font-weight:800;
        color:rgba(89,193,182,1);
        margin-bottom: 40px;
        &-btn{
          height:33px;
          line-height: 33px;
          font-size:24px;
          font-family:PingFang-SC-Medium;
          font-weight:500;
          color:rgba(255,255,255,1);
          display: inline-block;
          .van-icon{
            margin-right: 10px;
          }
        }
      }
      &-line{
        height: 140px;
        padding: 40px 30px;
        background:rgba(51,51,63,1);
        border-radius:20px;
        margin-bottom: 16px;
        position: relative;
        &:last-child{
          margin-bottom: 0;
        }
        .img{
          width:60px;
          height:60px;
          background:rgba(68,117,212,1);
          border-radius:30px;
          display: inline-block;
        }
        .name{
          font-size:30px;
          font-family:PingFang-SC-Medium;
          font-weight:500;
          color:rgba(255,255,255,1);
          line-height: 60px;
          display: inline-block;
          margin-left: 36px;
        }
        .num{
          position: absolute;
          top: 50%;
          right: 30px;
          transform: translate(0%, -50%);
          div{
            font-size:36px;
            font-family:DIN-Medium;
            font-weight:500;
            color:rgba(230,230,230,1);
            &.money{
              font-size:20px;
              font-family:PingFang-SC-Medium;
              font-weight:500;
              color:rgba(153,153,153,1);
            }
          }
        }
      }
    }
    .divider{
      height: 1px;
      width: 100%;
      margin: 49px 0;
      background:rgba(101,100,118,1);
      position: relative;
      &-text{
        position: absolute;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        background-color: rgba(28,28,33,1);
        padding: 0 45px;
        font-size:20px;
        font-family:Adobe Heiti Std R;
        font-weight:normal;
        color:rgba(101,100,118,1);
      }
    }
  }
</style>
