<template>
  <div class="main">
    <!-- 头部导航栏-->
    <van-nav-bar :title="title" left-arrow @click-left="onClickLeft" class="main-header" v-show="topnav"/>
    <van-notice-bar class="hhhh" left-icon="volume-o" >公告：新版钱包上线公告</van-notice-bar>
    <!-- 内容区域-->
    <div class="mian-body" :class="{ptop: !bottomnav, pbottom: !topnav } " >
      <router-view/>
    </div>
    <!-- 底部导航栏-->
    <van-tabbar v-model="active" v-show="bottomnav">
      <van-tabbar-item icon="wap-home" to="/home" :replace="true">首页</van-tabbar-item>
      <van-tabbar-item icon="apps-o" to="/product" :replace="true">产品</van-tabbar-item>
      <van-tabbar-item icon="orders-o" to="/found" :replace="true">发现</van-tabbar-item>
      <van-tabbar-item icon="orders-o" to="/user" :replace="true">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import Vue from 'vue';
import { NavBar, Tabbar, TabbarItem, NoticeBar } from 'vant';

Vue.use(NavBar);
Vue.use(Tabbar).use(TabbarItem);
Vue.use(NoticeBar);
export default {
  name: 'Home',
  components: {

  },
  data() {
    return {
      active: 0,
      navList: ['HomePage', 'Product', 'Found', 'User']
    };
  },
  computed: {
    title() {
      return this.$store.state.states.text;
    },
    bottomnav() {
      return this.$store.state.states.bottomnav;
    },
    topnav() {
      console.log(this.$store.state.states.topnav)
      return this.$store.state.states.topnav;
    },
  },
  watch: {
    $route: {
      handler(val) {
        this.active = this.navList.indexOf(val.name);
      },
      // 深度观察监听
      deep: true
    }
  },
  created() {},
  mounted() {
    const routerName = this.$router.history.current.name;
    this.active = this.navList.indexOf(routerName);
  },
  methods: {
    onClickLeft() {
      this.$router.history.go(-1);
    },
  },
};
</script>

<style scoped lang="scss">
  .main {
    * {
      box-sizing: border-box;
    }
    height: 100vh;
    overflow: scroll;
    background:rgba(28,28,33,1);
    color: #fff;
    font-size: 14px;
    .mian-body{
      padding-left: 30px;
      padding-right: 30px;
    }
    .ptop{
      padding-top: 76px;
    }
    .pbottom{
      padding-bottom: 96px;
    }
    .van-notice-bar{
      height: 76px;
      background:rgba(34,34,41,1);
      font-size:20px;
      font-family:PingFang-SC-Medium;
      font-weight:500;
      color:rgba(131,130,153,1);
      padding: 0 30px;
      .van-icon{
        margin-right: 21px;
      }
    }
    .van-tabbar {
      height: 98px;
      background:rgba(34,34,41,1);
      &:after {
        border: none;
      }
      .van-tabbar-item {
        font-size:20px;
        font-family:PingFang-SC-Medium;
        font-weight:500;
        color:rgba(131,130,153,1);
        .van-tabbar-item__icon {
          background: red;
          font-size: 18px;
        }
      }
      .van-tabbar-item--active {
        color:rgba(89,193,182,1);

      }

    }
  }
</style>
