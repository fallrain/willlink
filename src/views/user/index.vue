<template>
  <div class="user-main">
    <div class="user-head-par">
      <div class="user-head">
        <div class="portrait">
          <img :src="portraitDefault">
        </div>
        <div class="user-head-cnt">
          <p class="user-head-cnt-name">{{userInfo.mobile}}</p>
          <div class="user-head-cnt-lvl">
            <img
              v-if="userInfo.level"
              :src="lvlImg[userInfo.level]"
              class="img100per"
            >
          </div>
        </div>
        <div
          class="right"
          @click="toUserSetting"
        >
          <van-icon name="arrow"></van-icon>
        </div>
      </div>
    </div>
    <div class="user-ad">
      <div class="user-team">
        <div class="portrait">
          <img :src="teamIcon" class="img100per">
        </div>
        <div
          class="cnt"
          @click="toMyteam"
        >
          我的团队
        </div>
        <div class="right">查看权益</div>
      </div>
      <div class="user-invite">
        我的邀请码：837267 <img @click="copy(837267)" src="@/assets/img/user/fuzhi@2x.png">
      </div>
    </div>
    <div class="user-fn-par user-cell-par">
      <div class="user-cell-list">
        <van-cell
          @click="toSysAnnouncement"
        >
          <template
            slot="title"
          >
            <img
              class="user-cell-item-icon"
              src="@/assets/img/user/icon-user-sys@2x.png"
            >
            <span class="custom-text">系统公告</span>
          </template>
          <template
            slot="right-icon"
          >
            <div
              class="user-cell-item-msg-icon"
            >
              5
            </div>
          </template>

        </van-cell>
        <van-cell
          @click="toMyIncome"
        >
          <template
            slot="title"
          >
            <img
              class="user-cell-item-icon"
              src="@/assets/img/user/icon-myincome@2x.png"
            >
            <span class="custom-text">我的收益</span>
          </template>
        </van-cell>
      </div>
      <div class="user-cell-list">
        <van-cell
          @click="toPrivateKeyManagement"
        >
          <template
            slot="title"
          >
            <img
              class="user-cell-item-icon"
              src="@/assets/img/user/icon-yaoshi@2x.png"
            >
            <span class="custom-text">私钥管理</span>
          </template>
        </van-cell>
        <van-cell
          @click="toColdWalletLoad"
        >
          <template
            slot="title"
          >
            <img
              class="user-cell-item-icon"
              src="@/assets/img/user/icon-qianbao@2x.png"
            >
            <span class="custom-text">冷钱包加载</span>
          </template>
        </van-cell>
        <van-cell
          @click="toMnemonicList"
        >
          <template
            slot="title"
          >
            <img
              class="user-cell-item-icon"
              src="@/assets/img/user/icon-zhujici@2x.png"
            >
            <span class="custom-text">助记词设置</span>
          </template>
        </van-cell>
      </div>
      <div class="user-cell-list">
        <van-cell
          @click="toAboutUs"
        >
          <template
            slot="title"
          >
            <img
              class="user-cell-item-icon"
              src="@/assets/img/user/icon-guanyuwomen@2x.png"
            >
            <span class="custom-text">关于我们</span>
          </template>
        </van-cell>
        <van-cell
          @click="toFeedback"
        >
          <template
            slot="title"
          >
            <img
              class="user-cell-item-icon"
              src="@/assets/img/user/icon-wentifankui@2x.png"
            >
            <span class="custom-text">问题反馈</span>
          </template>
        </van-cell>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import {
  mapMutations
} from 'vuex';
import { Cell, CellGroup } from 'vant';
import mutationType from '@/store/mutations_types';
import portraitDefaultImg from '@/assets/img/user/user-default.jpeg';
import lvlImg1 from '@/assets/img/user/S1@2x.png';
import lvlImg2 from '@/assets/img/user/S2@2x.png';
import lvlImg3 from '@/assets/img/user/S3@2x.png';
import lvlImg4 from '@/assets/img/user/S4@2x.png';
import lvlImg5 from '@/assets/img/user/S5@2x.png';
import teamIcon from '@/assets/img/user/icon-team@2x.png';

Vue.use(Cell)
  .use(CellGroup);
export default {
  name: 'User',
  data() {
    return {
      portraitDefault: portraitDefaultImg,
      lvlImg: {
        0: '',
        1: lvlImg1,
        2: lvlImg2,
        3: lvlImg3,
        4: lvlImg4,
        5: lvlImg5
      },
      teamIcon
    };
  },
  created() {
    this.queryUserInfo();
  },
  methods: {
    ...mapMutations([
      mutationType.UPDATE_USER
    ]),
    toUserSetting() {
      /* 跳转个人设置页 */
      this.$router.push({
        name: 'UserSetting'
      });
    },
    toSysAnnouncement() {
      /* 跳转系统公告页面 */
      this.$router.push({
        name: 'SysAnnouncement'
      });
    },
    toMyteam() {
      /* 跳转我的团队页面 */
      this.$router.push({
        name: 'MyTeam'
      });
    },
    toMyIncome() {
      /* 跳转我的收益页面 */
      this.$router.push({
        name: 'MyIncome'
      });
    },
    toFeedback() {
      /* 跳转问题反馈页面 */
      this.$router.push({
        name: 'Feedback'
      });
    },
    toAboutUs() {
      /* 跳转关于我们页面 */
      this.$router.push({
        name: 'AboutUs'
      });
    },
    toPrivateKeyManagement() {
      /* 跳转私钥管理页面 */
      this.$router.push({
        name: 'PrivateKeyManagement'
      });
    },
    toColdWalletLoad() {
      /* 跳转冷钱包加载页面 */
      this.$router.push({
        name: 'ColdWalletLoad'
      });
    },
    toMnemonicList() {
      /* 跳转助记词设置页面 */
      this.$router.push({
        name: 'MnemonicList'
      });
    },
    async queryUserInfo() {
      /* 查询用户信息 */
      // 此接口不规范
      const data = await this.axGet('v1/me', {
        requestNoToast: true
      });
      this[mutationType.UPDATE_USER](data);
    }
  }
};
</script>

<style scoped lang="scss">

</style>
