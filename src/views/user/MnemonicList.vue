<template>
  <div>
    <van-nav-bar
      left-arrow
      :title="navTitle"
      @click-left="back"
    >
    </van-nav-bar>
    <div class="privateKeyImport-cnt mnemonicList-cnt">
      <w-item
        @rightClick="jump"
        urlName="MnemonicSetting"
        type="1"
      >
        <div
          slot="left"
          class="privateKeyImport-left-item"
        >
          <img
            class="privateKeyImport-item-typeImg"
            src="@/assets/img/user/WID@2x.png"
          >
          <span class="privateKeyImport-item-name">WID</span>
        </div>
        <div
          slot="right"
          class="mnemonicList-backup-status"
        >
          已备份
        </div>
      </w-item>
      <w-item
        @rightClick="jump"
        urlName="MnemonicSettingBackup"
        type="2"
      >
        <div
          slot="left"
          class="privateKeyImport-left-item"
        >
          <img
            class="privateKeyImport-item-typeImg"
            src="@/assets/img/user/USDT@2x.png"
          >
          <span class="privateKeyImport-item-name">USDT</span>
        </div>
        <div
          slot="right"
          class="mnemonicList-backup-status active"
        >
          未备份
        </div>
      </w-item>
      <w-item
        @rightClick="jump"
        urlName="MnemonicSetting"
        type="1"
      >
        <div
          slot="left"
          class="privateKeyImport-left-item"
        >
          <img
            class="privateKeyImport-item-typeImg"
            src="@/assets/img/user/BTC@2x.png"
          >
          <span class="privateKeyImport-item-name">BTC</span>
        </div>
        <div
          slot="right"
          class="mnemonicList-backup-status"
        >
          已备份
        </div>
      </w-item>
      <w-item
        @rightClick="jump"
        urlName="MnemonicSetting"
        type="1"
      >
        <div
          slot="left"
          class="privateKeyImport-left-item"
        >
          <img
            class="privateKeyImport-item-typeImg"
            src="@/assets/img/user/ETH@2x.png"
          >
          <span class="privateKeyImport-item-name">ETH</span>
        </div>
        <div
          slot="right"
          class="mnemonicList-backup-status"
        >
          已备份
        </div>
      </w-item>
      <w-item
        @rightClick="jump"
        urlName="MnemonicSetting"
        type="1"
      >
        <div
          slot="left"
          class="privateKeyImport-left-item"
        >
          <img
            class="privateKeyImport-item-typeImg"
            src="@/assets/img/user/EOS@2x.png"
          >
          <span class="privateKeyImport-item-name">EOS</span>
        </div>
        <div
          slot="right"
          class="mnemonicList-backup-status"
        >
          已备份
        </div>
      </w-item>
      <w-item
        @rightClick="jump"
        urlName="MnemonicSetting"
        type="1"
      >
        <div
          slot="left"
          class="privateKeyImport-left-item"
        >
          <img
            class="privateKeyImport-item-typeImg"
            src="@/assets/img/user/BCH@2x.png"
          >
          <span class="privateKeyImport-item-name">BCH</span>
        </div>
        <div
          slot="right"
          class="mnemonicList-backup-status"
        >
          已备份
        </div>
      </w-item>
    </div>
  </div>
</template>

<script>
import WItem from '../../components/form/WItem';

export default {
  name: 'MnemonicList',
  components: { WItem },
  methods: {
    jump(item) {
      this.$router.push({
        name: item.$attrs.urlName,
      });
    }
  }
};
</script>

<style scoped>

</style>
