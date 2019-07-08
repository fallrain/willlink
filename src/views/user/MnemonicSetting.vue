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
        <p class="name">设置助记词</p>
        <p class="info">请将您所想选择的单词输入至下方</p>
      </div>
      <div>
        <w-textarea
          v-model='word'
          :conuntMaxNumber="false"
          place-holder=""
          @handelInput="addressInput"
        ></w-textarea>
      </div>
      <div class="mnemonicSetting-word-list">
        <div
          class="mnemonicSetting-word-item"
          v-for="(item) in wordLst"
          :key="item.id"
        >{{item.text}}
        </div>
      </div>
      <div class="mnemonicSetting-word-change">
        <i class="iconfont icon-huanyipi"></i>换一换
      </div>
      <div class="mnemonicSetting-btns">
        <button
          type="button"
          :class="['cm-btn','active']"
          @click="submit"
        >确认
        </button>
      </div>
    </div>
  </div>
</template>

<script>

import WTextarea from '../../components/form/WTextarea';
import wValidateRules from '@/lib/wValidate/wValidateRules';

export default {
  name: 'MnemonicSetting',
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
