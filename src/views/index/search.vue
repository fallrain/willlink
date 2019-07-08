<template>
  <div class="searchBox">
    <!--搜索-->
    <form action="/">
      <van-search
        v-model="value"
        placeholder="请输入搜索关键词"
        show-action
        background="#1C1C21"
        @search="onSearch"
        @cancel="onCancel"/>
    </form>
    <div class="box">
      <div class="title">搜索指定内容</div>
      <a>WCC</a>
      <a>BTC</a>
      <a>ETH</a>
      <a>EOS</a>
      <a>USDT</a>
      <a>BCH</a>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Search } from 'vant';

Vue.use(Search);
export default {
  name: 'HomeSearch',
  mixins: [],
  components: {},
  props: {},
  data() {
    return {
      value: '',
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  destroyed() {},
  methods: {
    onSearch() {

    },

  }
};
</script>

<style scoped lang="scss">
  .searchBox{
    * {
      box-sizing: border-box;
    }
    .van-search__content{
      background:rgba(47,47,56,1);
    }
    .van-cell{
      height:30px;
      line-height: 30px;
      background:rgba(47,47,56,1);
      border-radius:5px;
      padding: 0;
      color: #838299;
    }
    .van-field__left-icon .van-icon, .van-field__right-icon .van-icon{
      color: #838299!important;
    }
    .van-search__action{
      font-size:15px;
      font-family:PingFang-SC-Medium;
      font-weight:500;
      color:rgba(255,255,255,1);
    }
    .box{
      padding-top: 45px;
      text-align: center;
      .title{
        font-size:13px;
        font-family:PingFang-SC-Medium;
        font-weight:500;
        color:rgba(131,130,153,1);
        margin-bottom: 34px;
      }
      a{
        font-size:17px;
        font-family:PingFang-SC-Medium;
        font-weight:500;
        color:rgba(255,255,255,1);
        width: 33.333%;
        display: inline-block;
        margin-bottom: 34px;
      }
    }
  }
</style>
