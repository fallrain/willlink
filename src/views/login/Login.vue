<template>
  <div>
    <van-nav-bar
      right-text="免密登录"
    >
    </van-nav-bar>
    <div class="login-body">
      <p class="login-body-title">欢迎登录</p>
      <div class="login-body-group">
        <van-cell-group>
          <van-field
            v-model="form.name"
            placeholder="手机号/邮箱"
          >
          </van-field>
          <van-field
            v-model="form.password"
            type="password"
            placeholder="请输入密码"
          >
          </van-field>
        </van-cell-group>
        <div class="login-body-forget-par">
          <span class="login-body-forget">忘记密码？</span>
        </div>
      </div>
      <div class="login-body-btns">
        <button
          type="button"
          class="cm-btn"
        >登录</button>
        <p class="login-body-btns-register">
          <span>还没有账号？</span><span class="login-body-btns-register-link">立即注册</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Field, NavBar } from 'vant';


Vue.use(NavBar);
Vue.use(Field);
export default {
  name: 'Login',
  components: {
    'van-nav-bar': NavBar
  },
  data() {
    return {
      form: {
        name: '',
        password: ''
      }
    };
  }
};
</script>

<style scoped>

</style>
