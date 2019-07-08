<template>
  <div>
    <van-nav-bar
      left-arrow
      :title="navTitle"
      @click-left="back"
    >
    </van-nav-bar>
    <div class="privateKeyImport-cnt">
      <p class="privateKeyImport-cnt-head">请输入WCC钱包的私钥地址</p>
      <div class="privateKeyImport-form">
        <div class="privateKeyImport-form-ta-par">
          <w-textarea
            v-model='form.address'
            :conuntMaxNumber="false"
            place-holder=""
            @handelInput="addressInput"
          ></w-textarea>
          <div
            v-show="importStatus"
            class="privateKeyImport-status"
            @click="hideImportStatus"
          >{{importStatus}}
          </div>
        </div>
        <p class="privateKeyImport-tips">
          <i class="iconfont icon-tanhao"></i>
          <span>仅支持WCC钱包私钥，请勿输入其他币种钱包的私钥</span>
        </p>
      </div>
      <div class="privateKeyImport-btns">
        <button
          type="button"
          :class="['cm-btn',!btnDisabled && 'active']"
          :disabled="btnDisabled"
          @click="submit"
        >开始导入
        </button>
      </div>
    </div>
  </div>
</template>

<script>

import WTextarea from '../../components/form/WTextarea';
import wValidateRules from '@/lib/wValidate/wValidateRules';

export default {
  name: 'PrivateKeyImport',
  components: { WTextarea },
  data() {
    return {
      form: {
        address: ''
      },
      btnDisabled: true, // 按钮是否可点
      importStatus: ''// 导入状态
    };
  },
  methods: {
    addressInput() {
      /* 免密登录输入框事件 */
      const { rules } = wValidateRules;
      const {
        address
      } = this.form;
      if (rules.required(address)) {
        this.btnDisabled = false;
      } else {
        this.btnDisabled = true;
      }
    },
    hideImportStatus() {
      this.importStatus = '';
    },
    submit() {
      /* 导入 */
      this.form.address = '';
      this.btnDisabled = true;
      this.importStatus = '导入成功';
      this.importStatus = '私钥错误，请重新输入！';
    }
  }
};
</script>

<style scoped>

</style>
