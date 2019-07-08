<template>
  <div>
    <van-nav-bar
      left-arrow
      :title="navTitle"
      @click-left="back"
    >
    </van-nav-bar>
    <div class="privateKeyImport-cnt mnemonicSetting-cnt">
      <div class="mnemonicSetting-head">
        <p class="name">备份助记词</p>
        <p class="info">记下你的钱包助记词</p>
        <p class="info">助记词用于恢复钱包，将他抄写下来，并存放在安全的地方</p>
      </div>
      <div>
        <w-textarea
          v-model='word'
          :conuntMaxNumber="false"
          place-holder=""
          @handelInput="addressInput"
        ></w-textarea>
      </div>
      <div class="mnemonicSetting-btns">
        <button
          type="button"
          :class="['cm-btn','active']"
          @click="submit"
        >备份助记词
        </button>
        <p class="mnemonicSettingBackup-btm-tips">暂不</p>
      </div>
    </div>
  </div>
</template>

<script>

import WTextarea from '../../components/form/WTextarea';
import wValidateRules from '@/lib/wValidate/wValidateRules';

export default {
  name: 'MnemonicSettingBackup',
  components: { WTextarea },
  props: ['type'],
  data() {
    return {
      word: '',
      btnDisabled: true, // 按钮是否可点
      wordLst: [
        {
          id: 1,
          text: '啊'
        },
        {
          id: 2,
          text: '的'
        },
        {
          id: 3,
          text: '到'
        },
        {
          id: 4,
          text: '个'
        },
        {
          id: 5,
          text: '我'
        },
        {
          id: 6,
          text: '去'
        },
        {
          id: 7,
          text: '额'
        },
        {
          id: 8,
          text: '摁'
        }
      ]
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
    submit() {
      /* 确认 */
      this.$dialog.confirm({
        message: '你备份的助记词顺序验证正确，是否从WCC钱包移除该助记词?'
      });
    }
  }
};
</script>

<style scoped>

</style>
