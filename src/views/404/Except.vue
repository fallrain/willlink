<template>
  <div>
    <van-nav-bar
      left-arrow
      @click-left="back"
    >
    </van-nav-bar>
    <div>
      <div class="except-img-par">
        <img
          class="img100per"
          src="@/assets/img/404/expect@2x.png"
        >
      </div>
      <p class="sysAnnouncement-nomsg-tips mt82"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Except'
};
</script>

<style scoped>

</style>
