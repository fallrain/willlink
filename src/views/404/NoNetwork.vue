<template>
  <div>
    <van-nav-bar
      left-arrow
      @click-left="back"
    >
    </van-nav-bar>
    <div>
      <div class="sysAnnouncement-img-par">
        <img
          class="img100per"
          src="@/assets/img/404/nonetwork.png"
        >
      </div>
      <p class="sysAnnouncement-nomsg-tips mt82">暂无网络~</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NoNetwork'
};
</script>

<style scoped>

</style>
