<template>
  <div>
    <van-nav-bar
      left-arrow
      :title="navTitle"
      @click-left="back"
    >
    </van-nav-bar>
    <div class="privateKeyImport-cnt">
      <p class="privateKeyImport-cnt-head">选择删除钱包的币种</p>
      <div class="">

      </div>
      <w-item
        @rightClick="jump"
        urlName="PrivateKeyDel"
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
      </w-item>
      <w-item
        @rightClick="jump"
        urlName="PrivateKeyDel"
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
      </w-item>
      <w-item
        @rightClick="jump"
        urlName="PrivateKeyDel"
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
      </w-item>
      <w-item
        @rightClick="jump"
        urlName="PrivateKeyDel"
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
      </w-item>
      <w-item
        @rightClick="jump"
        urlName="PrivateKeyDel"
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
      </w-item>
      <w-item
        @rightClick="jump"
        urlName="PrivateKeyDel"
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
      </w-item>
    </div>
  </div>
</template>

<script>
import WItem from '../../components/form/WItem';

export default {
  name: 'PrivateKeyImportList',
  components: { WItem },
  methods: {
    jump(item) {
      this.$router.push({
        name: item.$attrs.urlName
      });
    }
  }
};
</script>

<style scoped>

</style>
