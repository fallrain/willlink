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
          src="@/assets/img/user/user-nomsg.png"
        >
      </div>
      <p class="sysAnnouncement-nomsg-tips mt82">还没有收到系统公告喔~</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SysAnnouncement'
};
</script>

<style scoped>

</style>
