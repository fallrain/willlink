<template>
  <div class="addBox">
    <!--搜索-->
    <div class="searchBox">
      <div class="icon" @click="iconBtn"><img src="../../assets/img/product/search.png"/>搜索</div>
    </div>
    <!--列表-->
    <div class="line">
      <img class="left" src="../../icon/W.png"/>
      <div class="left text">WID</div>
      <van-switch class="right" v-model="checked" size="20px" active-color="#4CD954" inactive-color="#FFFFFF"/>
      <div class="van-clearfix"></div>
    </div>
    <div class="line">
      <img class="left" src="../../icon/W.png"/>
      <div class="left text">WID</div>
      <van-switch class="right" v-model="checked" size="20px" active-color="#4CD954" inactive-color="#FFFFFF"/>
      <div class="van-clearfix"></div>
    </div>
    <div class="line">
      <img class="left" src="../../icon/W.png"/>
      <div class="left text">WID</div>
      <van-switch class="right" v-model="checked1" size="20px" active-color="#4CD954" inactive-color="#FFFFFF"/>
      <div class="van-clearfix"></div>
    </div>
    <div class="line">
      <img class="left" src="../../icon/W.png"/>
      <div class="left text">WID</div>
      <van-switch class="right" v-model="checked" size="20px" active-color="#4CD954" inactive-color="#FFFFFF"/>
      <div class="van-clearfix"></div>
    </div>
    <div class="line">
      <img class="left" src="../../icon/W.png"/>
      <div class="left text">WID</div>
      <van-switch class="right" v-model="checked" size="20px" active-color="#4CD954" inactive-color="#FFFFFF"/>
      <div class="van-clearfix"></div>
    </div>
    <div class="line">
      <img class="left" src="../../icon/W.png"/>
      <div class="left text">WID</div>
      <van-switch class="right" v-model="checked" size="20px" active-color="#4CD954" inactive-color="#FFFFFF"/>
      <div class="van-clearfix"></div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Switch } from 'vant';

Vue.use(Switch);
export default {
  name: 'HomeAdd',
  mixins: [],
  components: {},
  props: {},
  data() {
    return {
      value: '',
      checked: true,
      checked1: false,
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  destroyed() {},
  methods: {
    iconBtn() {
      this.$router.push({ name: 'HomeSearch' });
    }
  }

};
</script>

<style scoped lang="scss">
.addBox{
  * {
    box-sizing: border-box;
  }
  .searchBox{
    height:30px;
    background:rgba(47,47,56,1);
    border-radius:5px;
    margin: 10px 15px;
    font-size:15px;
    font-family:PingFang-SC-Medium;
    font-weight:500;
    color:rgba(131,130,153,1);
    text-align: center;
    position: relative;
    input{
      width: 100%;
      height: 30px;
      line-height: 30px;
      display: inline-block;
      border: none;
      background:rgba(47,47,56,1);
      border-radius:5px;
    }
    .icon{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 30px;
      line-height: 30px;
      text-align: center;
      img{
        width: 12px;
        height: 12px;
        display: inline-block;
        margin-right: 6px;
        vertical-align: initial;
      }
    }
  }
  .line{
    height:70px;
    background:rgba(34,34,41,1);
    margin-bottom: 1px;
    padding: 20px 15px;
    position: relative;
    img{
      width:30px;
      height:30px;
      background:rgba(68,117,212,1);
      border-radius:15px;
      margin-right: 18px;
    }
    .text{
      font-size:15px;
      font-family:PingFang-SC-Medium;
      font-weight:500;
      color:rgba(255,255,255,1);
      line-height: 30px;
    }
    .van-switch{
      margin-top: 5px;
    }
  }
}
</style>
