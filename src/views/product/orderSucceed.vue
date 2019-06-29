<template>
  <div class="orderSucceedBox">
    <div class="navBox">
      <van-nav-bar :title="title" right-text="关闭"   @click-right="onClickRight" class="main-header"/>
    </div>
    <div class="content">
      <img :src="succeedImg">
      <h1>审核已提交</h1>
      <h3>提交成功，请联系相关业务人员进行确认</h3>
      <div class="btn">查看详情</div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { NavBar } from 'vant';
import succeed from '@/assets/img/product/succeed.png';

Vue.use(NavBar);
export default {
  name: 'ProductOrderSucceed',
  mixins: [],
  components: {},
  props: {},
  data() {
    return {
      title: '',
      succeedImg: succeed
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  destroyed() {},
  methods: {
    onClickRight() {

    }
  }
};
</script>

<style scoped lang="scss">
  .orderSucceedBox {
    * {
      box-sizing: border-box;
    }
    .content{
      text-align: center;
      padding-top: 100px;
      img{
        width: 90px;
        height: 90px;
        display: inline-block;
        margin-bottom: 20px;
      }
      h1{
        font-size:20px;
        font-family:PingFang-SC-Heavy;
        font-weight:800;
        color:rgba(245,245,245,1);
        margin-bottom: 30px;
      }
      h3{
        font-size:16px;
        font-family:PingFang-SC-Medium;
        font-weight:500;
        color:rgba(192,195,204,1);
      }
      .btn{
        width:130px;
        display: inline-block;
        height:30px;
        line-height: 30px;
        margin-top: 75px;
        text-align: center;
        border:1px solid rgba(89,193,182,1);
        border-radius:15px;
        font-size:14px;
        font-family:PingFang-SC-Medium;
        font-weight:500;
        color:rgba(89,193,182,1);
      }
    }
  }
</style>
