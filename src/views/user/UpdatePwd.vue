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
    </div>
    <van-field
      v-model="userInfo.mobile"
      label="账号"
      readonly
    >
    </van-field>
    <van-field
      v-model="verificationCode"
      label="验证码"
      placeholder="请输入验证码"
      clearable
      @input="pwdInput"
    >
    </van-field>
    <van-field
      v-model="newPwd"
      class="mt10"
      type="password"
      label="新密码"
      placeholder="请输入新密码"
      clearable
      @input="pwdInput"
    >
    </van-field>
    <van-field
      v-model="newPwd2"
      type="password"
      label="新密码"
      placeholder="请再次输入新密码"
      clearable
      @input="pwdInput"
    >
    </van-field>
    <div class="updatePhone-btns">
      <button
        type="button"
        :class="['cm-btn',!btnDisabled && 'active']"
        :disabled="btnDisabled"
        @click="submit"
      >完成
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
  name: 'UpdatePwd',
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
      ],
      newPwd: '', // 新密码
      newPwd2: '', // 再次输入新密码
    };
  },
  methods: {
    pwdInput() {
      /* 账号密码登录输入框事件 */
      const { rules } = wValidateRules;
      const {
        verificationCode,
        newPwd,
        newPwd2
      } = this;
      if (
        rules.required(verificationCode)
        && rules.required(newPwd)
        && rules.required(newPwd2)
        && newPwd === newPwd2
      ) {
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
