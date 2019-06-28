<template>
  <div class="detailBox">
    <van-nav-bar :title="title" left-arrow @click-left="onClickLeft" class="main-header"/>
  </div>
</template>

<script>
import Vue from 'vue';
import { Search } from 'vant';

Vue.use(Search);
export default {
  name: 'homeDetail',
  mixins: [],
  components: {},
  props: {},
  data() {
    return {
      value: '',
      title: 'WID'
    };
  },
  computed: {},
  watch: {},
  created() {
    console.log(this.$router.params);
    // if (this.$router.params['title'] === undefined) {
    // }
  },
  mounted() {},
  destroyed() {},
  methods: {
    onClickLeft() {

    },

  }
};
</script>

<style scoped lang="scss">
  .detailBox{
    * {
      box-sizing: border-box;
    }

  }
</style>
