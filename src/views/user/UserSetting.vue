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
      <!--userInfo来自vuex-->
      <w-item
        title="账号"
        :value="userInfo.mobile"
        @rightClick="toUpdatePhone"
      ></w-item>
      <w-item
        title="修改密码"
        @rightClick="toUpdatePwd"
      ></w-item>
    </div>
    <div class="userSetting-btn-par">
      <button
        type="button"
        class="cm-btn active"
        @click="loginOut"
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
      portraitDefault
    };
  },
  methods: {
    toUpdatePhone() {
      /* 跳转更新手机页面 */
      this.$router.push({
        name: 'UpdatePhone'
      });
    },
    toUpdatePwd() {
      /* 跳转修改密码页面 */
      this.$router.push({
        name: 'UpdatePwd'
      });
    },
    loginOut() {
      /* 登出 */
      this.axGet('v1/logout').then(({ status }) => {
        if (status === 200) {
          this.$router.replace({
            name: 'Login'
          });
        }
      });
    }
  }
};
</script>

<style scoped>

</style>
