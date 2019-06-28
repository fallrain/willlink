<template>
  <w-divider-wrap>
    <div class="h100per">
      <van-nav-bar
        left-arrow
        :title="navTitle"
        @click-left="back"
        :right-text="hasAnnouncement?'全部已读':''"
        @click-right="setAllRead"
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
            v-for="(item) in announcementList"
            :key="item.id"
            :right-width="60"
            :on-close="del"
            :id="item.id"
            @click.native="toDetail"
          >
            <div class="sysAnnouncement-item-cnt">
              <div class="portrait">
                <img
                  v-if="item.img"
                  class="img100per"
                  :src="item.img"
                >
                <div
                  v-if="!item.isRead"
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
import { Button, SwipeCell } from 'vant';
import imgTest from '@/assets/img/user/user-default.jpeg';
import WDividerWrap from '../../components/form/WDividerWrap';

Vue.use(Button);
Vue.use(SwipeCell);
export default {
  name: 'SysAnnouncement',
  components: { WDividerWrap },
  data() {
    return {
      announcementList: [
        {
          id: 1,
          img: imgTest, // 此图片测试用，实际应该返回服务器图片地址
          title: '通知的大标题',
          content: '通知的内容通知的内容通知的内容通知的内容',
          date: '2019-6-17',
          time: '23:43',
          isRead: true// 是否已读
        },
        {
          id: 2,
          img: imgTest, // 此图片测试用，实际应该返回服务器图片地址
          title: '通知的大标题',
          content: '通知的内容通知的内容通知的内容通知的内容',
          date: '2019-6-17',
          time: '23:43',
          isRead: true
        },
        {
          id: 3,
          img: imgTest, // 此图片测试用，实际应该返回服务器图片地址
          title: '通知的大标题',
          content: '通知的内容通知的内容通知的内容通知的内容',
          date: '2019-6-17',
          time: '23:43',
          isRead: false
        }
      ]
    };
  },
  computed: {
    hasAnnouncement() {
      // 有系统消息
      return !!this.announcementList.length;
    }
  },
  methods: {
    setAllRead() {
      /* 设置全部已读 */
      this.$dialog.confirm({
        message: '确认全部标记为已读吗？'
      })
        .then(() => {
          this.announcementList.forEach((v) => {
            v.isRead = true;
          });
        });
    },
    del(clickPosition, instance) {
      /* 删除消息 */
      switch (clickPosition) {
        case 'left':
        case 'cell':
        case 'outside':
          instance.close();
          break;
        case 'right':
          this.$dialog.confirm({
            message: '确定删除吗？'
          })
            .then(() => {
              const index = this.announcementList.findIndex(v => v.id === instance.$attrs.id);
              this.announcementList.splice(index, 1);
              instance.close();
            });
          break;
        default:
          break;
      }
    },
    toDetail() {
      this.$router.push({
        name: 'SysAnnouncementDetail'
      });
    }
  }
};
</script>

<style scoped>

</style>
