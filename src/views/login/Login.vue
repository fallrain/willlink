<template>
  <div>
    <van-nav-bar
      :right-text="loginStatusName.navTitle"
      @click-right="changeLoginStatus"
    >
    </van-nav-bar>
    <div class="login-body">
      <p class="login-body-title">{{loginStatusName.title}}</p>
      <div
        v-if="loginStatus===1"
        class="login-body-group"
      >
        <van-field
          v-model="form.name"
          placeholder="手机号/邮箱"
          clearable
        >
        </van-field>
        <van-field
          v-model="form.password"
          type="password"
          placeholder="请输入密码"
          clearable
        >
        </van-field>
        <div class="login-body-forget-par">
          <span
            class="login-body-forget"
            @click="jumpForget"
          >忘记密码？</span>
        </div>
      </div>
      <div
        v-else
        class="login-body-group"
      >
        <van-field
          v-model="form.phone"
          placeholder="手机号"
          clearable
        >
        </van-field>
        <van-field
          v-model="form.verificationCode"
          type="password"
          placeholder="请输入验证码"
          clearable
        >
          <WVerificationcode
            slot="button"
          >
          </WVerificationcode>
        </van-field>
        <div class="login-body-forget-par">
          <span
            class="login-body-forget"
            @click="jumpForget"
          >忘记密码？</span>
        </div>
      </div>
      <div class="login-body-btns">
        <button
          type="button"
          class="cm-btn active"
        >登录
        </button>
        <p class="login-body-btns-register">
          <span>还没有账号？</span>
          <span
            class="login-body-btns-register-link"
            @click="toRegister"
          >立即注册</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Field } from 'vant';
import {
  WVerificationcode
} from '@/components/form';

Vue.use(Field);
export default {
  name: 'Login',
  components: {
    WVerificationcode
  },
  data() {
    return {
      loginStatus: 2, // 登录方式 1：账号登录 2：免密登录
      form: {
        name: '', // 账户名
        password: '', // 密码
        phone: '', // 手机号
        verificationCode: '' // 验证码
      }
    };
  },
  computed: {
    loginStatusName() {
      return {
        1: {
          title: '欢迎登录',
          navTitle: '免密登录'
        },
        2: {
          title: '免密登录',
          navTitle: '账号登录'
        }
      }[this.loginStatus];
    }
  },
  methods: {
    jumpForget() {
      /* 跳转忘记密码页面 */
      this.$router.push({
        name: 'ForgetPassword'
      });
    },
    changeLoginStatus() {
      /* 改变账号登录状态 */
      this.loginStatus = this.loginStatus === 1 ? 2 : 1;
    },
    toRegister() {
      /* 跳转注册页面 */
      this.$router.push({
        name: 'Register'
      });
    }
  }
};
</script>

<style scoped>

</style>
