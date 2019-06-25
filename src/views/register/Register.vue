<template>
  <div>
    <van-nav-bar
      left-arrow
      @click-left="back"
      right-text="账号登录"
      @click-right="toLogin"
    >
    </van-nav-bar>
    <div class="login-body">
      <p class="login-body-title">快速注册</p>
      <div
        class="login-body-group"
      >
        <van-field
          v-model="form.phone"
          placeholder="手机号/邮箱"
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
        <van-field
          v-model="form.password"
          type="password"
          placeholder="请输入登录密码"
          clearable
        >
        </van-field>
        <van-field
          v-model="form.password2"
          type="password"
          placeholder="请再次输入登录密码"
          clearable
        >
        </van-field>
        <van-field
          v-model="form.invitationCode"
          type="password"
          placeholder="请输入邀请码"
          clearable
        >
        </van-field>
        <p class="register-invitationCode-tips">注：邀请码必须填写</p>
        <w-radio
          v-model="agree"
          :type=1
          inf="同意协议并完成注册"
        ></w-radio>
      </div>
      <div class="login-body-btns">
        <button
          type="button"
          class="cm-btn active"
        >立即注册
        </button>
        <p class="register-protocol">
          《电子服务协议》
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Field } from 'vant';
import {
  WRadio,
  WVerificationcode
} from '@/components/form';

Vue.use(Field);
export default {
  name: 'Register',
  components: {
    WRadio,
    WVerificationcode
  },
  data() {
    return {
      form: {
        name: '', // 账户名
        password: '', // 密码
        password2: '', // 确认密码
        phone: '', // 手机号
        verificationCode: '', // 验证码
        invitationCode: ''// 邀请码
      },
      agree: 0// 同意协议并完成注册
    };
  },
  computed: {},
  methods: {
    toLogin() {
      /* 跳转账号登录页面 */
      this.$router.push({
        name: 'Login'
      });
    },
    changeLoginStatus() {
      /* 改变账号登录状态 */
      this.loginStatus = this.loginStatus === 1 ? 2 : 1;
    }
  }
};
</script>

<style scoped>

</style>
