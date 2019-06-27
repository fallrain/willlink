<template>
  <div class="main">
    <!-- 头部导航栏-->
    <van-nav-bar :title="title" left-arrow @click-left="onClickLeft" class="main-header" v-show="topnav"/>
    <!-- 内容区域-->
    <div class="mian-body" :class="{ptop: !bottomnav, pbottom: !topnav } " >
      <router-view/>
    </div>
    <!-- 底部导航栏-->
    <van-tabbar v-model="active" class="van-icon-size" v-show="bottomnav">
      <van-tabbar-item :icon="active !== 0 ? homeIcon : homeActiveIcon" to="/home" :replace="true">首页</van-tabbar-item>
      <van-tabbar-item :icon="active !== 1 ? productIcon : productActiveIcon" to="/product" :replace="true">产品</van-tabbar-item>
      <van-tabbar-item :icon="active !== 2 ? foundIcon : foundActiveIcon" to="/found" :replace="true">发现</van-tabbar-item>
      <van-tabbar-item :icon="active !== 3 ? userIcon : userActiveIcon" to="/user" :replace="true">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import Vue from 'vue';
import { NavBar, Tabbar, TabbarItem, NoticeBar } from 'vant';
import home from '@/icon/home.png';
import homeActive from '@/icon/home-active.png';
import product from '@/icon/product.png';
import productActive from '@/icon/product-active.png';
import found from '@/icon/found.png';
import foundActive from '@/icon/found-active.png';
import user from '@/icon/user.png';
import userActive from '@/icon/user-active.png';

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
      navList: ['HomePage', 'Product', 'Found', 'User'],
      homeIcon: home,
      homeActiveIcon: homeActive,
      productIcon: product,
      productActiveIcon: productActive,
      foundIcon: found,
      foundActiveIcon: foundActive,
      userIcon: user,
      userActiveIcon: userActive,
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
      return this.$store.state.states.topnav;
    },
    topnotice() {
      return this.$store.state.states.topnotice;
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
    .mian-body{
      /*padding-left: 30px;
      padding-right: 30px;*/
    }
    .ptop{
      // padding-top: 76px;
    }
    .pbottom{
      padding-bottom: 49px;
    }

    .van-tabbar {
      height: 49px;
      background:rgba(34,34,41,1);
      &:after {
        border: none;
      }
      .van-image{
        background: red;
        font-size: 18px;
        width: 36px!important;
        height: 36px!important;
      }
      .van-tabbar-item {
        font-size:10px;
        font-family:PingFang-SC-Medium;
        font-weight:500;
        color:rgba(131,130,153,1);

      }
      .van-tabbar-item--active {
        color:rgba(89,193,182,1);

      }

    }
  }
</style>
