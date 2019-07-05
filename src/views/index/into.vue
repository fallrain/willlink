<template>
  <div class="intoBox">
    <div class="navBox">
      <van-nav-bar :title="title" left-arrow @click-left="onClickLeft" class="main-header"/>
    </div>
    <div class="content">
      <div class="title">
        <i class="left"></i><span class="left">USDT</span>
      </div>
      <div class="name">注意该地址只接受USDT资产，如充值其他资产将无法找回</div>
      <div class="address">283sbbfgbngfi82395567fj345fjd283957kjdf34fdhgghfd5345</div>
      <div class="img">
        <img src="../../assets/img/home/code.png"/>
      </div>
      <div class="btn">复制收款地址</div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { NavBar, Icon } from 'vant';

Vue.use(NavBar);
Vue.use(Icon);
export default {
  name: 'HomeInto',
  mixins: [],
  components: {},
  props: ['title'],
  data() {
    return {
    };
  },
  computed: {},
  watch: {},
  created() {
  },
  mounted() {},
  destroyed() {},
  methods: {
    onClickLeft() {
      /* 返回上一页 */
      this.$router.back();
    }
  }
};
</script>

<style scoped lang="scss">
  .intoBox {
    * {
      box-sizing: border-box;
    }
    .content{
      padding: 40px 30px;
      .title{
        padding-bottom: 15px;
        margin-bottom: 9px;
        border-bottom: 1px solid rgba(71,78,102,0.5);
        height: 45px;
        display: inline-block;
        width: 100%;
        span{
          font-family:PingFang-SC-Medium;
          font-weight:500;
          line-height: 30px;
          font-size:15px;
          color:rgba(255,255,255,1);
        }
        i{
          width:30px;
          height:30px;
          background:rgba(68,117,212,1);
          border-radius:15px;
          margin-right: 20px;
          display: inline-block;
        }
      }
      .name{
        font-size:13px;
        font-family:PingFang-SC-Medium;
        font-weight:500;
        color:rgba(131,130,153,1);
        line-height:17px;
        margin-bottom: 45px;
      }
      .address{
        font-size:13px;
        font-family:PingFang-SC-Medium;
        font-weight:500;
        color:rgba(255,255,255,1);
        line-height:17px;
        word-wrap:break-word;
        word-break:break-all;
        margin-bottom: 30px;
      }
      .img{
        width:170px;
        height:170px;
        background:rgba(255,255,255,1);
        border-radius:10px;
        margin: 0 auto;
        img{
          width: 100%;
          height: 100%;
          display: inline-block;
        }
      }
      .btn{
        height:43px;
        line-height: 43px;
        text-align: center;
        background:rgba(89,193,182,1);
        box-shadow:0px 5px 5px 0px rgba(89,193,182,0.3);
        border-radius:22px;
        font-size:17px;
        font-family:PingFang-SC-Medium;
        font-weight:500;
        color:rgba(245,245,245,1);
        margin-top: 30px;
      }
    }
  }
</style>
