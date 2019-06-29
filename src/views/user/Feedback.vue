<template>
  <w-divider-wrap>
    <div class="h100per">
      <van-nav-bar
        :title="navTitle"
        left-arrow
        @click-left="back"
      >
      </van-nav-bar>
      <div class="feedback-form">
        <w-textarea
          v-model='form.feedback'
          :maxNumber='200'
          placeHolder='请留下您的问题反馈，我们将不断完善'
        ></w-textarea>
        <w-upload
          class="mt20"
          v-show="form.imgUrl.length < 3"
          :crop="false"
          inputOfFile="file"
          @imageuploaded="imageUploaded"
          :max-file-size="1024*1024*20"
          :maxWidth="1280"
          :compress="70"
          extensions="png,jpg,jpeg"
          inputAccept="image/jpg,image/jpeg,image/png"
          :url="uploadUrl"
          :multiple-size="3"
          @errorhandle="uploadError"
          :imgs="form.imgUrl"
          :delFun="delImg"
        ></w-upload>
        <van-field
          v-model="form.phone"
          class="mt30"
          placeholder="手机号"
          clearable
        >
        </van-field>
        <div class="feedback-btns-par">
          <button
            type="button"
            class="feedback-submit-btn"
          >提交</button>
        </div>
      </div>
    </div>
  </w-divider-wrap>
</template>

<script>
import Vue from 'vue';
import { Field } from 'vant';
import WTextarea from '../../components/form/WTextarea';
import WDividerWrap from '../../components/form/WDividerWrap';
import WUpload from '../../components/form/WUpload';

Vue.use(Field);
export default {
  name: 'Feedback',
  components: {
    WUpload,
    WDividerWrap,
    WTextarea
  },
  data() {
    return {
      form: {
        feedback: '',
        imgUrl: [],
        phone: ''
      },
      uploadUrl: `${process.env.base_url}document/upload`, // 上传服务器地址
    };
  },
  methods: {
    delImg(index) {
      /* 删除图片 */
      this.form.imgUrl.splice(index, 1);
    },
    imageUploaded({ code, value: data }) {
      if (code === '200') {
        this.form.imgUrl.push(data[0].url);
      }
    },
    uploadError() {
      this.$toast('上传失败');
    }
  }
};
</script>

<style scoped>

</style>
