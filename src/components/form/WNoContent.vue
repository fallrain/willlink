<template>
  <div v-show="show">
    <div class="sysAnnouncement-img-par">
      <img
        class="img100per"
        src="@/assets/img/user/user-nomsg.png"
      >
    </div>
    <p class="sysAnnouncement-nomsg-tips mt82">{{text}}~</p>
  </div>
</template>

<script>
export default {
  name: 'WNoContent',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: ''
    }
  }
};
</script>

<style scoped>

</style>
