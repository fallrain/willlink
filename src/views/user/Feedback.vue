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
      </div>
    </div>
  </w-divider-wrap>
</template>

<script>

import WTextarea from '../../components/form/WTextarea';

export default {
  name: 'Feedback',
  components: {
    WTextarea
  },
  data() {
    return {
      form: {
        feedback: ''
      }
    };
  }
};
</script>

<style scoped>

</style>
