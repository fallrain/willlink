<template>
  <div>
    <van-nav-bar
    >
    </van-nav-bar>
    <div class="forgetPassword-img-par">
      <img src="@/assets/img/register/register-suc@2x.png">
    </div>
    <p class="forgetPassword-name">注册成功</p>
    <p class="forgetPassword-tel">
      注册成功，<span class="link" @click="toLogin">立即登录</span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'RegisterSuc',
  methods: {
    toLogin() {
      /* 去登录页面 */
      this.$router.push({
        name: 'Login'
      });
    }
  }
};
</script>

<style scoped>

</style>
