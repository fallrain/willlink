<template>
  <div>
    <van-nav-bar
      left-arrow
      :title="navTitle"
      @click-left="back"
    >
    </van-nav-bar>
    <div class="privateKeyImport-cnt">
      <p class="privateKeyImport-cnt-head">WID钱包的私钥地址为</p>
      <div class="privateKeyImport-form">
        <div class="privateKeyImport-form-ta-par">
          <w-textarea
            v-model='form.address'
            :conuntMaxNumber="false"
            place-holder=""
            @handelInput="addressInput"
          ></w-textarea>
        </div>
      </div>
      <div class="privateKeyImport-btns">
        <button
          type="button"
          :class="['cm-btn','active']"
          :readonly="true"
          @click="submit"
        >删除私钥
        </button>
      </div>
    </div>
  </div>
</template>

<script>

import WTextarea from '../../components/form/WTextarea';

export default {
  name: 'PrivateKeyDel',
  components: { WTextarea },
  data() {
    return {
      form: {
        address: '8372u36ryfbdhstw63j48fje6qj******************768yutjfye62twgstw5263egdh'
      },
    };
  },
  methods: {
    submit() {
      /* 删除私钥 */
      this.$dialog.confirm({
        message: '是否删除该私钥？'
      }).then(() => {
        this.$toast('删除成功');
      });
    }
  }
};
</script>

<style scoped>

</style>
