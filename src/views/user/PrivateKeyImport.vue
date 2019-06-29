<template>
  <div>
    <van-nav-bar
      left-arrow
      :title="navTitle"
      @click-left="back"
    >
    </van-nav-bar>
    <div class="privateKeyManagement-list mt10">
      <w-item
        title="私钥导入"
        urlName="PrivateKeyImport"
        @rightClick="jump"
      ></w-item>
      <w-item
        title="私钥删除"
        urlName=""
        @rightClick="jump"
      ></w-item>
      <w-item
        title="私钥修改"
        urlName=""
        @rightClick="jump"
      ></w-item>
    </div>
  </div>
</template>

<script>
import WItem from '../../components/form/WItem';

export default {
  name: 'PrivateKeyImport',
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
