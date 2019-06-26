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
        <span @click="isShowActions=true">收不到验证码？</span>
      </p>
    </div>
    <van-action-sheet
      v-model="isShowActions"
      :actions="actions"
      cancel-text="取消"
      @select="onSelect"
    >
    </van-action-sheet>
  </div>
</template>

<script>
import Vue from 'vue';
import { ActionSheet, Field } from 'vant';
import wValidateRules from '@/lib/wValidate/wValidateRules';


Vue.use(ActionSheet);
Vue.use(Field);
export default {
  name: 'AddVerificationCode',
  props: ['updateAccount'],
  data() {
    return {
      btnDisabled: true,
      account: window.decodeURIComponent(this.updateAccount),
      verificationCode: '',
      isShowActions: false, // 展示下方action
      actions: [
        {
          name: '重新获取验证码'
        }
      ]
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
    onSelect(item) {
      /* 重新获取验证码 */
      console.log(item);
      this.isShowActions = false;
    },
    submit() {

    }
  }
};
</script>

<style scoped>

</style>
