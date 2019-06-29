<template>
  <div class="orderBox">
    <div class="navBox">
      <van-nav-bar :title="title" right-text="关闭"   @click-right="onClickRight" class="main-header"/>
    </div>
    <div class="content">
      <div class="info">
        <div class="title">产品信息</div>
        <div class="line">
          <div class="name text-left left">产品名称</div>
          <div class="type text-right right">XXXXX金融产品</div>
        </div>
        <div class="line">
          <div class="name text-left left">产品金额</div>
          <div class="type text-right right">50,000.00</div>
        </div>
      </div>
      <div class="info">
        <div class="line">
          <div class="name text-left left">交易时间</div>
          <div class="type text-right right">2019-06-19 14:43</div>
        </div>
        <div class="line">
          <div class="name text-left left">交易流水</div>
          <div class="type text-right right">akjfhsk82957BFDJKH78345HJDG</div>
        </div>
        <div class="line">
          <div class="name text-left left">收款人地址</div>
          <div class="type text-right right">faf8523573879sfu7898ovbd12846238756459</div>
        </div>
      </div>
      <div class="info">
        <div class="line">
          <div class="name text-left left">转账流水号</div>
          <div class="typeBox text-left right">akjfhsk82957BFDJKH78345HJDG</div>
        </div>
      </div>
      <div class="steps">
        <div class="title">订单状态</div>
        <van-steps direction="vertical" :active="0" active-color="#59C1B6">
          <van-step>
            <h3>提交订单</h3>
          </van-step>
          <van-step>
            <h3>审核中</h3>
          </van-step>
          <van-step>
            <h3>收益中</h3>
          </van-step>
          <van-step>
            <h3>交易结束</h3>
          </van-step>
        </van-steps>
      </div>
      <div class="btn">提交审核</div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { NavBar, Step, Steps } from 'vant';

Vue.use(NavBar);
Vue.use(Step).use(Steps);
export default {
  name: 'ProductAuditOrder',
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
    onClickRight() {

    }
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
      padding: 15px;
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
        &:last-of-type{
          margin-bottom: 0;
        }
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
        .typeBox{
          width: 70%;
          display: inline-block;
          height:30px;
          line-height: 30px;
          background:rgba(47,47,56,1);
          border-radius:5px;
          font-size:13px;
          font-family:PingFang-SC-Medium;
          font-weight:500;
          color:rgba(131,130,153,1);
          line-height:34px;
          padding: 0 15px;
        }
      }
    }
    .steps{
      padding: 0 15px;
      margin-top: 30px;
      .title{
        font-size:13px;
        font-family:PingFang-SC-Medium;
        font-weight:500;
        color:rgba(255,255,255,1);
        line-height:34px;
      }
      .van-steps{
        background:#1c1c21;
        margin-left: 35%;
        .van-step{
          padding: 10px 0 25px 0!important;
          &:after{
            border: none!important;
          }
          &:before{
            border: none!important;
            height: 0!important;
          }
          .van-icon-checked:before{
            content: ''!important;
            width:8px!important;
            height:8px!important;
            display: inline-block!important;
            border-radius:50%!important;
          }
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
