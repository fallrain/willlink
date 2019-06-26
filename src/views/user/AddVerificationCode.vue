<template>
  <div class="updatePhone">
    <van-nav-bar
      :title="navTitle"
      left-arrow
      @click-left="back"
    >
    </van-nav-bar>
    <div class="updatePhone-tips">
      <p>验证码已发送，请填写验证码</p>
      <!--<p>当前账号：{{userInfo.phone}}</p>-->
    </div>
    <van-field
      v-model="updateAccount"
      label="账号"
      placeholder="请填写新的手机号或邮箱"
      disabled
      input-align="center"
    >
    </van-field>
    <van-field
      v-model="verificationCode"
      label="验证码"
      placeholder="请输入验证码"
      clearable
      @input="verificationCodeInput"
      input-align="center"
    >
    </van-field>
    <div class="updatePhone-btns">
      <button
        type="button"
        :class="['cm-btn',!btnDisabled && 'active']"
        :disabled="btnDisabled"
        @click="submit"
      >提交
      </button>
      <p class="login-body-btns-register">
        <span>收不到验证码？？</span>
      </p>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Field } from 'vant';
import wValidateRules from '@/lib/wValidate/wValidateRules';

Vue.use(Field);
export default {
  name: 'AddVerificationCode',
  props: ['updateAccount'],
  data() {
    return {
      btnDisabled: true,
      account: window.decodeURIComponent(this.updateAccount),
      verificationCode: ''
    };
  },
  methods: {
    verificationCodeInput() {
      /* 账号密码登录输入框事件 */
      const { rules } = wValidateRules;
      const {
        verificationCode
      } = this;
      if (rules.required(verificationCode)) {
        this.btnDisabled = false;
      } else {
        this.btnDisabled = true;
      }
    },
    submit() {

    }
  }
};
</script>

<style scoped>

</style>
