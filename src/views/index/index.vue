<template>
  <div class="">
    <div class="homeNav">
      <van-notice-bar left-icon="volume-o">公告：新版钱包上线公告</van-notice-bar>
      <div class="sweepBtn" @click="sweep"><van-icon :name="sweepImg" /></div>
    </div>
    <div class="homeBox">
      <!--总资产-->
      <div class="assetsBox">
        <div class="assetsBox-title">总资产</div>
        <div class="assetsBox-name">
          <div class="left">WCC</div>
          <div class="right">USDT</div>
          <div class="van-clearfix"></div>
        </div>
        <div class="assetsBox-num">
          <div class="left">{{totalWCC}}</div>
          <div class="right">{{totalUSDT}}</div>
          <div class="van-clearfix"></div>
        </div>
        <div class="assetsBox-border">
          <div class="bor-l" :style="{width: proportionUSDT+'%'}"></div>
          <div class="bor-r" :style="{width: 100-proportionUSDT+'%'}"></div>
        </div>
        <div class="assetsBox-earnings">
          <div class="name">社区收益</div>
          <div class="type">{{productProfitWCC}} WCC</div>
          <div class="type text-right">{{productProfitUSDT}} USDT</div>
        </div>
      </div>
      <!--产品状态-->
      <div class="stateBox" @click="homeProduct">
        <div class="stateBox-all left">
          全部产品<p>100</p>
        </div>
        <div class="stateBox-border left"></div>
        <div class="stateBox-earnings left">
          收益中产品<p>50</p>
        </div>
        <div class="stateBox-arrow right">
          <van-icon name="arrow" size="24" color="#838299"/>
        </div>
        <div class="van-clearfix"></div>
      </div>
      <!--全部产品-->
      <div class="assetsList">
        <div class="assetsList-title">
          全部产品<div class="assetsList-title-btn right" @click="homeAdd"><van-icon :name="addBtn" size="18" color="#838299"/>新增</div>
        </div>
        <div class="assetsList-line" @click="homeDetail">
          <img class="img left" src="@/assets/img/user/WCC@2x.png">
          <div class="name left">WCC</div>
          <div class="num right">
            <div class="">100,000,000.00</div>
            <div class="money">≈100,000,000.00 USDT</div>
          </div>
          <div class="van-clearfix"></div>
        </div>
        <div class="assetsList-line">
          <img class="img left" src="@/assets/img/user/USDT@2x.png">
          <div class="name left">USDT</div>
          <div class="num right">
            <div class="">34,212.67</div>
            <div class="money">≈34,212.67 USDT</div>
          </div>
          <div class="van-clearfix"></div>
        </div>
      </div>
      <!--底线-->
      <div class="divider"><div class="divider-text">我是有底线的</div></div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Icon, Image } from 'vant';
import add from '@/icon/add.png';
import sweep from '@/icon/sweep.png';

Vue.use(Icon);
Vue.use(Image);
export default {
  name: 'HomePage',
  mixins: [],
  components: {},
  props: {},
  data() {
    return {
      addBtn: add,
      sweepImg: sweep,
      totalWCC: 0,
      totalUSDT: 0,
      productProfitWCC: 0,
      productProfitUSDT: 0,
      proportionUSDT: 0// USDT所占比例
    };
  },
  computed: {},
  watch: {},
  created() {
    this.queryMyProperty();
  },
  methods: {
    homeProduct() {
      this.$router.push({ name: 'HomeProduct' });
    },
    homeAdd() {
      this.$router.push({ name: 'HomeAdd' });
    },
    homeDetail() {
      this.$router.push({ name: 'HomeDetail', params: { title: 'WCC' } });
    },
    sweep() {
      this.$router.push({ name: 'HomeSweep' });
    },
    queryMyProperty() {
      /* 查询用户财产（总） */
      this.axGet(`v1/member/total_profit/${this.userInfo.uuid}`).then(({ status, data }) => {
        if (status === 200) {
          this.totalWCC = data.total_wid;
          this.totalUSDT = data.total_usdt;
          this.productProfitWCC = data.product_profit;
          this.productProfitUSDT = data.product_profit;
          this.proportionUSDT = data.total_usdt * 100 / data.total_wid;
        }
      });
    }
  }
};
</script>

<style scoped lang="scss">
  .homeNav{
    position: relative;
    .van-notice-bar{
      height: 44px;
      background:rgba(34,34,41,1);
      font-size:10px;
      font-family:PingFang-SC-Medium;
      font-weight:500;
      color:rgba(131,130,153,1);
      padding: 0 15px;
      .van-icon{
        margin-right: 10px;
      }
    }
    .sweepBtn{
      position: absolute;
      top: 0;
      right: 0;
      margin: 13px 15px;
    }
  }
  .homeBox{
    padding: 15px 15px 0 15px;
    * {
      box-sizing: border-box;
    }
    .assetsBox{
      width: 100%;
      height:175px;
      padding: 20px 25px 23px 25px;
      border-radius:10px;
      margin-bottom: 10px;
      background: url("../../icon/back.png") center no-repeat ;
      background-size: 100% 100%;
      /*background-image: linear-gradient(to left, #5FC3B5, #3f7e82) ;*/
      &-title{
        line-height: 14px;
        font-size:14px;
        font-family:PingFang-SC-Medium;
        font-weight:500;
        color:rgba(255,255,255,1);
        margin-bottom: 25px;
      }
      &-name{
        margin-bottom: 19px;
        height:10px;
        font-size:12px;
        font-family:PingFang-SC-Medium;
        font-weight:500;
        color:rgba(255,255,255,1);
      }
      &-num{
        height:15px;
        font-size:17px;
        font-family:DIN-Medium;
        font-weight:500;
        color:rgba(255,255,255,1);
        margin-bottom: 10px;
      }
      &-border{
        height:4px;
        background:rgba(255,255,255,0.1);
        border-radius: 2px;
        margin-bottom: 25px;
        position: relative;
        div{
          position: absolute;
          top: 0;
          height:4px;
          background:rgba(255,255,255,1);
        }
        .bor-l{
          left: 0;
          border-top-left-radius: 3px;
          border-bottom-left-radius: 3px;
          &:after{
            content: '';
            width: 6px;
            height: 4px;
            background: rgba(81,165,159,1);
            display: inline-block;
            transform: rotate(-60deg);
            position: absolute;
            top: 0;
            right: 0;
          }
        }
        .bor-r{
          right: 0;
          border-top-right-radius: 3px;
          border-bottom-right-radius: 3px;
        }
      }
      &-earnings{
        height: 12px;
        line-height: 12px;
        font-size: 13px;
        font-family:PingFang-SC-Medium;
        font-weight:500;
        color:rgba(255,255,255,1);
        .name{
          display: inline-block;
          width: 33.3333%;
        }
        .type{
          display: inline-block;
          width: 33.3333%;
        }
      }
    }
    .stateBox{
      height: 70px;
      line-height: 40px;
      background:rgba(34,34,41,1);
      border-radius: 10px;
      padding: 15px 20px;
      margin-bottom: 25px;
      font-size: 15px;
      font-family:PingFang-SC-Medium;
      font-weight:500;
      color:rgba(255,255,255,1);
      div{
        display: inline-block;
      }
      p{
        display: inline-block;
        margin-left: 16px;
        font-size: 18px;
        font-family:PingFang-SC-Heavy;
        font-weight:800;
        color:rgba(89,193,182,1);
      }
      &-border{
        width: 1px;
        height: 40px;
        background:rgba(101,100,118,1);
        margin: 0 25px;
      }
      &-arrow{
        line-height: 40px;
        margin-top: 7px;
      }

    }
    .assetsList{
      &-title{
        height: 17px;
        line-height: 17px;
        font-size: 17px;
        font-family:PingFang-SC-Heavy;
        font-weight:800;
        color:rgba(89,193,182,1);
        margin-bottom: 40px;
        &-btn{
          height: 17px;
          line-height: 17px;
          font-size: 12px;
          font-family:PingFang-SC-Medium;
          font-weight:500;
          color:rgba(255,255,255,1);
          display: inline-block;
          .van-icon{
            margin-right: 5px;
            vertical-align: sub;
          }
        }
      }
      &-line{
        height: 70px;
        padding: 20px 15px;
        background:rgba(51,51,63,1);
        border-radius: 10px;
        margin-bottom: 8px;
        position: relative;
        &:last-child{
          margin-bottom: 0;
        }
        .img{
          width: 30px;
          height: 30px;
          background:rgba(68,117,212,1);
          border-radius: 15px;
          display: inline-block;
        }
        .name{
          font-size: 15px;
          font-family:PingFang-SC-Medium;
          font-weight:500;
          color:rgba(255,255,255,1);
          line-height: 30px;
          display: inline-block;
          margin-left: 18px;
        }
        .num{
          position: absolute;
          top: 50%;
          right: 15px;
          transform: translate(0%, -50%);
          div{
            font-size: 18px;
            font-family:DIN-Medium;
            font-weight:500;
            color:rgba(230,230,230,1);
            &.money{
              font-size: 10px;
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
      margin: 13px 0;
      background:rgba(101,100,118,1);
      position: relative;
      &-text{
        position: absolute;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        background-color: rgba(28,28,33,1);
        padding: 0 23px;
        font-size: 10px;
        font-family:Adobe Heiti Std R;
        font-weight:normal;
        color:rgba(101,100,118,1);
      }
    }
  }
</style>
