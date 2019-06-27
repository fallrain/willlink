<template>
  <div class="user-main">
    <div class="user-head-par">
      <div class="user-head">
        <div class="portrait">
          <img :src="portraitDefault">
        </div>
        <div class="user-head-cnt">
          <p class="user-head-cnt-name">17283767445</p>
          <div class="user-head-cnt-lvl">
            <img :src="lvl" class="img100per">
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
        我的邀请码：837267 <img src="@/assets/img/user/fuzhi@2x.png">
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
import portraitDefaultImg from '@/assets/img/user/user-default.jpeg';
import lvlImg from '@/assets/img/user/S1@2x.png';
import teamIcon from '@/assets/img/user/icon-team@2x.png';
import { Cell, CellGroup } from 'vant';

Vue.use(Cell)
  .use(CellGroup);
export default {
  name: 'User',
  data() {
    return {
      portraitDefault: portraitDefaultImg,
      lvl: lvlImg,
      teamIcon
    };
  },
  methods: {
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
    }
  }
};
</script>

<style scoped lang="scss">

</style>
