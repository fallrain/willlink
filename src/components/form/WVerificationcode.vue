<template>
  <button
    :class="['btn-send-code',disabled && 'disabled']"
    type="button"
    @click="sendCode"
    :disabled="disabled"
  >{{btnText}}
  </button>
</template>
<script>
export default {
  name: 'WVerificationcode',
  props: [
    'time', // 倒计时时间
    'fun',
    'callBack', // 回调函数
    'errorCallBack', // 错误回调
    'afterSend',
    'phone' // 手机号
  ],
  data() {
    return {
      btnText: '获取验证码',
      disabled: false,
      trueTime: this.time || 60
    };
  },
  methods: {
    async sendCode() {
      /* 发送验证码 */
      if (this.fun && !this.fun()) {
        return;
      }

      if (this.afterSend) {
        this.afterSend();
      }
      let time = this.trueTime;
      this.disabled = true;
      this.btnText = `重新获取验证码(${time}s)`;
      const interval = setInterval(() => {
        this.btnText = `重新获取验证码(${--time}s)`;
        if (time < 1) {
          this.btnText = '获取验证码';
          this.disabled = false;
          clearInterval(interval);
        }
      }, 1000);
    }
  }
};
</script>
<style lang="scss">
  .btn-send-code{
    background: transparent;
    color: #59C1B6;
    font-size: 24px;
    &.disabled{
      color: #474E66;
    }
  }
</style>
