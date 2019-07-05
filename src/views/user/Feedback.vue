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
          name="feedback"
          v-validate="'required'"
          data-vv-as="反馈内容"
        ></w-textarea>
        <div class="w-vee-error">{{ errors.first('feedback') }}</div>
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
          name="phone"
          v-validate="'required|phone'"
          data-vv-as="手机号"
        >
        </van-field>
        <div class="w-vee-error">{{ errors.first('phone') }}</div>
        <div class="feedback-btns-par">
          <button
            type="button"
            class="feedback-submit-btn"
            @click="submit"
          >提交
          </button>
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
    },
    submit() {
      /* 提交反馈 */
      this.$validator.validateAll().then((valid) => {
        if (valid) {
          this.axPost(
            'v1/feedback/save',
            {
              uuid: this.userInfo.uuid,
              context: this.form.feedback,
              mobile: this.form.phone,
              img_url: this.form.imgUrl.join(','),
            }
          ).then(({ status, data }) => {
            if (status === 200) {
              this.$router.push({
                name: 'FeedbackSuc'
              });
            }
          });
        }
      });
    }
  }
};
</script>

<style scoped>

</style>
