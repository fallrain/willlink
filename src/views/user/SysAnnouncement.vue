<template>
  <w-divider-wrap>
    <div class="h100per">
      <van-nav-bar
        left-arrow
        :title="navTitle"
        @click-left="back"
        :right-text="hasAnnouncement?'全部已读':''"
      >
      </van-nav-bar>
      <div v-if="!hasAnnouncement">
        <div class="sysAnnouncement-img-par">
          <img
            class="img100per"
            src="@/assets/img/user/user-nomsg.png"
          >
        </div>
        <p class="sysAnnouncement-nomsg-tips mt82">还没有收到系统公告喔~</p>
      </div>
      <div
        v-else
      >
        <div
          class="sysAnnouncement-list mt10"
        >
          <van-swipe-cell
            class="sysAnnouncement-list-item"
            v-for="(item,index) in announcementList"
            :key="index"
            :right-width="60"
          >
            <div class="sysAnnouncement-item-cnt">
              <div class="portrait">
                <img
                  v-if="item.img"
                  class="img100per"
                  :src="item.img"
                >
                <div
                  v-if="item.isRead"
                  class="dot"
                ></div>
              </div>
              <div class="sysAnnouncement-item-cnt-cnt">
                <p class="sysAnnouncement-item-cnt-cnt-title text-ellipsis">{{item.title}}</p>
                <p class="sysAnnouncement-item-cnt-cnt-inf text-ellipsis">{{item.content}}</p>
              </div>
              <div class="right">
                <p class="time">{{item.date}}</p>
                <p class="time">{{item.time}}</p>
              </div>
            </div>
            <van-button
              square
              slot="right"
              type="danger"
              text="删除"
            ></van-button>
          </van-swipe-cell>
        </div>
      </div>
    </div>
  </w-divider-wrap>
</template>

<script>
import Vue from 'vue';
import { Button, Cell, SwipeCell } from 'vant';
import imgTest from '@/assets/img/user/user-default.jpeg';
import WDividerWrap from '../../components/form/WDividerWrap';

Vue.use(Button);
Vue.use(Cell);
Vue.use(SwipeCell);
export default {
  name: 'SysAnnouncement',
  components: { WDividerWrap },
  data() {
    return {
      hasAnnouncement: true, // 有系统消息
      announcementList: [
        {
          img: imgTest, // 此图片测试用，实际应该返回服务器图片地址
          title: '通知的大标题',
          content: '通知的内容通知的内容通知的内容通知的内容',
          date: '2019-6-17',
          time: '23:43',
          isRead: true// 是否已读
        },
        {
          img: imgTest, // 此图片测试用，实际应该返回服务器图片地址
          title: '通知的大标题',
          content: '通知的内容通知的内容通知的内容通知的内容',
          date: '2019-6-17',
          time: '23:43',
          isRead: true
        },
        {
          img: imgTest, // 此图片测试用，实际应该返回服务器图片地址
          title: '通知的大标题',
          content: '通知的内容通知的内容通知的内容通知的内容',
          date: '2019-6-17',
          time: '23:43',
          isRead: false
        }
      ]
    };
  }
};
</script>

<style scoped>

</style>
