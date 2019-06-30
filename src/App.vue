<template>
  <div id="app" class="app">
    <div class="app-container">
      <keep-alive
        :exclude="aliveExclude"
      >
        <router-view/>
      </keep-alive>
    </div>
    <div
      v-show="loadingShow"
      class="app-loading"
    >
      <van-loading
        color="#59C1B6"
      ></van-loading>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { mapState } from 'vuex';
import { Loading } from 'vant';

Vue.use(Loading);
export default {
  name: 'App',
  computed: mapState([
    'aliveExclude',
    'loadingShow'
  ])
};
</script>
<style lang="scss">
  @import 'assets/css/base';
</style>
<style>
  @import 'assets/font/iconfont.css';
</style>
<style lang="scss">
  @import 'assets/css/common';
</style>
