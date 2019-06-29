<template>
  <div class="videoBox">
    <div class="box" >
      <van-icon v-show="play" @click="videoBtn" class="bofang" :name="bofangImg" size="50"/>
      <img v-show="play" src="../../assets/img/product/product1.png" />
      <video id="media" src="http://www.w3school.com.cn/i/movie.ogg" controls="controls" width="100%" height="210px"></video>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Icon } from 'vant';
import bofang from '@/assets/img/product/bofang.png';

Vue.use(Icon);
export default {
  name: 'ProductVideo',
  mixins: [],
  components: {},
  props: {},
  data() {
    return {
      bofangImg: bofang,
      play: true
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  destroyed() {},
  methods: {
    videoBtn() {
      this.play = false;
      const myVideo = document.getElementById('media');
      myVideo.play();
    }
  }
};
</script>

<style scoped lang="scss">
.videoBox{
  * {
    box-sizing: border-box;
  }
  height: 100vh;
  position: relative;
  .box{
    width: 100%;
    height:210px;
    background:rgba(34,34,41,0.5);
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(0, -50%);
    .bofang{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 2;
    }
    img{
      position: absolute;
      top: 0;
      left: 0;
      height: 210px;
      width: 100%;
      display: inline-block;
      z-index: 1;
    }
  }
}
</style>
