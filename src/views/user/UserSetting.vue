<template>
  <div>
    <van-nav-bar
      :title="navTitle"
      left-arrow
      @click-left="back"
    >
    </van-nav-bar>
    <div>
      <w-item
        class="userSetting-wItem-item mb20"
        title="头像"
      >
        <div slot="right">
          <img :src="portraitDefault" class="userSetting-portrait">
        </div>
      </w-item>
      <w-item
        title="账号"
        :value="account"
        @rightClick="toUpdatePhone"
      ></w-item>
      <w-item
        title="修改密码"
      ></w-item>
    </div>
    <div class="userSetting-btn-par">
      <button
        type="button"
        class="cm-btn active"
      >退出登录
      </button>
    </div>
  </div>
</template>

<script>
import WItem from '../../components/form/WItem';
import portraitDefault from '@/assets/img/user/user-default.jpeg';

export default {
  name: 'UserSetting',
  components: { WItem },
  data() {
    return {
      account: '15606711711',
      portraitDefault
    };
  },
  methods: {
    toUpdatePhone() {
      /* 跳转更新手机页面 */
      this.$router.push({
        name: 'UpdatePhone'
      });
    }
  }
};
</script>

<style scoped>

</style>
