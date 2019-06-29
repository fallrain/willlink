<template>
  <div class="orderBox">
    <div class="navBox">
      <van-nav-bar :title="title" left-arrow @click-left="onClickLeft" class="main-header"/>
    </div>
    <div class="content">
      <div class="box">
        <div class="line text-left">融资金额<span>5,000.00</span></div>
        <div class="line text-right">融资期限<span>9个月</span></div>
        <div class="prompt">温馨提示：投资有风险，入市需谨慎！</div>
      </div>
      <div class="info">
        <div class="title">产品介绍</div>
        <div class="line">
          <div class="name text-left left">产品名称</div>
          <div class="type text-right right">XXXXX金融产品</div>
        </div>
        <div class="line">
          <div class="name text-left left">产品编码</div>
          <div class="type text-right right">89257237568192490823582</div>
        </div>
        <div class="line">
          <div class="name text-left left">产品金额</div>
          <div class="type text-right right">50,000.00</div>
        </div>
        <div class="line">
          <div class="name text-left left">到期收益</div>
          <div class="type text-right right">5200.00</div>
        </div>
        <div class="line">
          <div class="name text-left left">产品类型</div>
          <div class="type text-right right">仓单</div>
        </div>
      </div>
      <div class="info">
        <div class="title">收款方信息</div>
        <div class="line">
          <div class="name text-left left">收款钱包地址</div>
          <div class="type text-right right">faf8523573879sfu7898ovbd12846238756459</div>
        </div>
        <div class="line">
          <div class="name text-left left">已成交记录</div>
          <div class="type text-right right">847个</div>
        </div>
      </div>
      <div class="btn">生成订单</div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { NavBar } from 'vant';

Vue.use(NavBar);
export default {
  name: 'ProductOrder',
  mixins: [],
  components: {},
  props: {},
  data() {
    return {
      title: 'V1产品',
    };
  },
  computed: {},
  watch: {},
  created() {
    // 获取详情标题
    const navTitle = this.$router.history.current.params.title;
    if (navTitle !== undefined) {
      this.title = navTitle;
    }
  },
  mounted() {},
  destroyed() {},
  methods: {

  }
};
</script>

<style scoped lang="scss">
.orderBox{
  * {
    box-sizing: border-box;
  }
  .content{
    .box{
      height:93px;
      background:rgba(34,34,41,1);
      padding: 20px 50px;
      margin-top: 10px;
      .line{
        width: 50%;
        display: inline-block;
        font-size:14px;
        font-family:PingFang-SC-Medium;
        font-weight:500;
        color:rgba(131,130,153,1);
        span{
          font-size:14px;
          font-family:PingFang-SC-Medium;
          font-weight:500;
          color:rgba(255,255,255,1);
          margin-left: 16px;
        }
      }
      .prompt{
        font-size:10px;
        font-family:PingFang-SC-Medium;
        font-weight:500;
        color:rgba(89,193,182,1);
        margin-top: 15px;
      }
    }
    .info{
      padding: 15px 15px 0px 15px;
      margin-top: 10px;
      background:rgba(34,34,41,1);
      .title{
        font-size:17px;
        font-family:PingFang-SC-Heavy;
        font-weight:800;
        color:rgba(89,193,182,1);
        margin-bottom: 30px;
      }
      .line{
        margin-bottom: 10px;
        width: 100%;
        display: inline-block;
        .name{
          width: 30%;
          display: inline-block;
          font-size:13px;
          font-family:PingFang-SC-Medium;
          font-weight:500;
          color:rgba(255,255,255,1);
          line-height:34px;
        }
        .type{
          width: 70%;
          display: inline-block;
          font-size:13px;
          font-family:PingFang-SC-Medium;
          font-weight:500;
          color:rgba(131,130,153,1);
          line-height:34px;
          word-wrap:break-word;
          word-break:break-all;
        }
      }
    }
    .btn{
      font-size:17px;
      font-family:PingFang-SC-Medium;
      font-weight:500;
      color:rgba(245,245,245,1);
      height:43px;
      line-height:43px;
      text-align: center;
      margin: 30px 30px;
      background:rgba(89,193,182,1);
      box-shadow:0px 5px 5px 0px rgba(89,193,182,0.3);
      border-radius:22px;
    }
  }
}
</style>
