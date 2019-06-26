<template>
  <div class="updatePhone">
    <van-nav-bar
      :title="navTitle"
      left-arrow
      @click-left="back"
    >
    </van-nav-bar>
    <div class="updatePhone-tips">
      <p>更换账号后，下次登录可使用新账号登录。</p>
      <p>当前账号：{{userInfo.phone}}</p>
    </div>
    <van-field
      v-model="account"
      placeholder="请填写新的手机号或邮箱"
      clearable
      @input="pwdLoginInput"
    >
    </van-field>
    <div class="updatePhone-btns">
      <button
        type="button"
        :class="['cm-btn',!btnDisabled && 'active']"
        :disabled="btnDisabled"
        @click="toAddVerificationCode"
      >下一步
      </button>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Field } from 'vant';
import wValidateRules from '@/lib/wValidate/wValidateRules';

Vue.use(Field);
export default {
  name: 'UpdatePhone',
  data() {
    return {
      btnDisabled: true,
      account: ''
    };
  },
  methods: {
    pwdLoginInput() {
      /* 账号密码登录输入框事件 */
      const { rules } = wValidateRules;
      const {
        account
      } = this;
      if (rules.mobile(account) || rules.email(account)) {
        this.btnDisabled = false;
      } else {
        this.btnDisabled = true;
      }
    },
    toAddVerificationCode() {
      this.$router.push({
        name: 'AddVerificationCode',
        params: {
          updateAccount: window.encodeURIComponent(this.account)
        }
      });
    }
  }
};
</script>

<style scoped>

</style>
