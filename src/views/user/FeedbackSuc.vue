<template>
  <div>
    <van-nav-bar
      right-text="关闭"
      @click-right="back"
    >
    </van-nav-bar>
    <div class="forgetPassword-img-par">
      <img src="@/assets/img/register/register-suc@2x.png">
    </div>
    <p class="forgetPassword-name">反馈成功</p>
    <p class="forgetPassword-tel">
      问题反馈已成功提交
    </p>
    <div class="feedbackSuc-btns-par">
      <button
        type="button"
        class="cm-btn-primary"
        @click="toHome"
      >返回首页</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeedbackSuc',
  methods: {
    toHome() {
      /* 去登录页面 */
      this.$router.replace({
        name: 'User'
      });
    }
  }
};
</script>

<style scoped>

</style>
