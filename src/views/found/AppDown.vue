<template>
  <div>
    <van-nav-bar
      left-arrow
      :title="navTitle"
      @click-left="back"
    >
    </van-nav-bar>
    <div class="appDown-qrcode-par">
      <div class="appDown-qrcode">
        <img class="appDown-qrcode-img" src="@/assets/img/found/qrcode-example.png">
        <div class="appDown-qrcode-inf">
          <img src="@/assets/img/found/ios@2x.png">IOS专业版
        </div>
      </div>
      <div class="appDown-qrcode">
        <img class="appDown-qrcode-img" src="@/assets/img/found/qrcode-example.png">
        <div class="appDown-qrcode-inf">
          <img src="@/assets/img/found/anzhuo@2x.png">Android专业版
        </div>
      </div>
    </div>
    <div class="appDown-btns-par">
      <button
        type="button"
        class="cm-btn-primary"
        @click="toHome"
      >保存二维码</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppDown'
};
</script>

<style scoped>

</style>
