<template>
  <div>
    <van-nav-bar
      left-arrow
      :title="navTitle"
      @click-left="back"
    >
    </van-nav-bar>
    <div class="privateKeyImport-cnt">
      <p class="coldWalletLoad-head">钱包地址</p>
      <div class="privateKeyImport-form">
        <div class="coldWalletLoad-ta-par">
          <w-textarea
            v-model='form.address'
            :conuntMaxNumber="false"
            :readonly="true"
            place-holder=""
            @handelInput="addressInput"
          ></w-textarea>
        </div>
      </div>
      <div class="coldWalletLoad-btns">
        <button
          id="copyBtn"
          type="button"
          :class="['cm-btn','active']"
          @click="clipboardCopy"
        >复制
        </button>
      </div>
    </div>
  </div>
</template>

<script>

import WTextarea from '../../components/form/WTextarea';
import wValidateRules from '@/lib/wValidate/wValidateRules';

export default {
  name: 'ColdWalletLoad',
  components: { WTextarea },
  data() {
    return {
      form: {
        address: '8372u36ryfbdhstw63j48fje6qjsdkjgvhsjkdb87235hfe768yutjfye62twgstw5263egdh'
      },
      btnDisabled: true, // 按钮是否可点
      importStatus: ''// 导入状态
    };
  },
  mounted() {
    this.clipboardCopy();
  },
  beforeDestroy() {
    this.copyIns.destroy();
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
    clipboardCopy() {
      this.copyIns = this.copy('#copyBtn', this.form.address);
    }
  }
};
</script>

<style scoped>

</style>
