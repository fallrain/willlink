<template>
  <div class="detailBox">
    <div class="navBox">
      <van-nav-bar :title="navTitle" left-arrow @click-left="onClickLeft" class="main-header"/>
      <div class="sweepBtn">
        <van-icon :name="sweepImg"/>
      </div>
    </div>
    <div class="content">
      <div class="box">
        <div class="name">WCC</div>
        <div class="num">{{totalWCC}}</div>
        <div class="operate">
          <div class="line" @click="intoBtn('WCC', totalWCC)">
            <van-icon :name="intoImg" size="13"/>
            转入
          </div>
          <div class="line" @click="rollOutBtn('WCC', totalWCC)">
            <van-icon :name="rollOutImg" size="13"/>
            转出
          </div>
        </div>
      </div>
      <div class="box">
        <div class="name">USDT</div>
        <div class="num">{{totalUSDT}}</div>
        <div class="operate">
          <div
            class="line"
            @click="intoBtn('USDT', totalUSDT)"
          >
            <van-icon :name="intoImg" size="13"/>
            转入
          </div>
          <div
            class="line"
            @click="rollOutBtn('USDT', totalUSDT)"
          >
            <van-icon :name="rollOutImg" size="13"/>
            转出
          </div>
        </div>
      </div>
      <div class="recordBox">
        <div class="record left">交易记录</div>
        <div class="time right" @click="timeBtn">2019年10月<i></i></div>
        <div class="van-clearfix"></div>
      </div>
    </div>
    <div class="timeSearch" v-show="time">
      <div class="line">前一个月</div>
      <div class="line">前三个月</div>
      <div class="line">前半年</div>
    </div>
    <div class="detailLine">
      <div class="mask" v-show="time"></div>
      <md-scroll-view
        ref="scrollView"
        :scrolling-x="false"
        @refreshing="detailRefresh"
      >
        <md-scroll-view-refresh
          slot="refresh"
          slot-scope="{ scrollTop, isRefreshActive, isRefreshing }"
          :scroll-top="50"
          :is-refreshing="isRefreshing"
          :is-refresh-active="isRefreshActive"
        ></md-scroll-view-refresh>
        <ul class="recordList">
          <li
            v-for="(item,index) in recordList"
            :key="index"
            class="box"
            @click="rolloutDetail"
          >
            <div class="line">
              <div class="name left">{{item.typeName}}</div>
              <div :class="['lable','left',item<4 && 'active']">{{item.statusName}}</div>
              <div :class="['num','right',item.assets<0 && 'active']">{{item.assets}}</div>
              <div class="van-clearfix"></div>
            </div>
            <div class="time">{{item.created_at}}</div>
          </li>
         <!-- <li class="box" @click="rolloutDetail">
            <div class="line">
              <div class="name left">Token合约转出</div>
              <div class="lable left active">进行中</div>
              <div class="num right">-10,000.00</div>
              <div class="van-clearfix"></div>
            </div>
            <div class="time">10-23 12:13</div>
          </li>
          <li class="box">
            <div class="line">
              <div class="name left">自动充值</div>
              <div class="lable left">已完成</div>
              <div class="num right active">+10,000.00</div>
              <div class="van-clearfix"></div>
            </div>
            <div class="time">10-23 12:13</div>
          </li>
          <li class="box">
            <div class="line">
              <div class="name left">融资回款</div>
              <div class="lable left">已完成</div>
              <div class="num right active">+10,000.00</div>
              <div class="van-clearfix"></div>
            </div>
            <div class="time">10-23 12:13</div>
          </li>
          <li class="box">
            <div class="line">
              <div class="name left">Token合约转出</div>
              <div class="lable left">已完成</div>
              <div class="num right">-10,000.00</div>
              <div class="van-clearfix"></div>
            </div>
            <div class="time">10-23 12:13</div>
          </li>
          <li class="box">
            <div class="line">
              <div class="name left">购买金融产品</div>
              <div class="lable left">已完成</div>
              <div class="num right">-10,000.00</div>
              <div class="van-clearfix"></div>
            </div>
            <div class="time">10-23 12:13</div>
          </li>-->
        </ul>
      </md-scroll-view>
      <w-text-line
        text="暂无记录"
        :show="!recordList.length"
      ></w-text-line>
    </div>
  </div>

</template>

<script>
import Vue from 'vue';
import {
  DatetimePicker, Icon, NavBar, Popup, Search
} from 'vant';
import sweep from '@/icon/sweep.png';
import into from '@/assets/img/home/into.png';
import rollOut from '@/assets/img/home/rollOut.png';
import bottom from '@/assets/img/home/arrow-bottom.png';
import { ScrollView, ScrollViewMore, ScrollViewRefresh } from 'mand-mobile';
import WTextLine from '../../components/form/WTextLine';

Vue.use(NavBar);
Vue.use(Icon);
Vue.use(Search);
Vue.use(Popup);
Vue.use(DatetimePicker);
export default {
  name: 'HomeDetail',
  mixins: [],
  components: {
    WTextLine,
    'md-scroll-view': ScrollView,
    'md-scroll-view-refresh': ScrollViewRefresh,
    // eslint-disable-next-line vue/no-unused-components
    'md-scroll-view-more': ScrollViewMore
  },
  props: {},
  data() {
    return {
      value: '',
      title: 'WCC',
      sweepImg: sweep,
      intoImg: into,
      rollOutImg: rollOut,
      bottomImg: bottom,
      time: false,
      totalWCC: '',
      totalUSDT: '',
      recordList: []
    };
  },
  computed: {},
  watch: {},
  created() {
    this.queryMyProperty();
    this.detailRefresh();
  },
  mounted() {
  },
  destroyed() {
  },
  methods: {
    onClickLeft() {
      /* 返回上一页 */
      this.$router.back();
    },
    timeBtn() {
      this.time = !this.time;
    },
    // 转入
    intoBtn(type, money) {
      this.$router.push({
        name: 'HomeInto',
        params: {
          title: `转入${type}`,
          money: `${money}`
        }
      });
    },
    // 转出
    rollOutBtn(type, money) {
      this.$router.push({
        name: 'HomeRollOut',
        params: {
          title: `转出${type}`,
          money: `${money}`
        }
      });
    },
    // 转出详情
    rolloutDetail() {
      this.$router.push({ name: 'HomeRollOutDetail' });
    },
    queryMyProperty() {
      /* 查询用户财产（总） */
      this.axGet(`v1/member/total_profit/${this.userInfo.uuid}`).then(({ status, data }) => {
        if (status === 200) {
          this.totalWCC = data.total_wid;
          this.totalUSDT = data.total_usdt;
          this.productProfitWCC = data.product_profit;
          this.productProfitUSDT = data.product_profit;
          this.proportionUSDT = data.total_usdt * 100 / data.total_wid;
        }
      });
    },
    resetTradeRrcord() {
      /* 重置 */
    },
    detailRefresh() {
      /**/
      return this.axGet(
        `v1/withdraw/record/10000${this.userInfo.uuid}`,
        {
          noLoading: true
        }
      ).then(({ status, data }) => {
        if (status === 200) {
          this.recordList = data.data.map(v => ({
            ...v,
            typeName: {
              0: 'Token合约转出',
              1: 'Token合约转入',
            }[v.name],
            statusName: {
              0: '提交审核',
              1: '审核通过',
              2: '审核不通过',
              3: '区块确认',
              4: '到账成功'
            }[v.status]
          }));
        }
        this.$refs.scrollView.finishRefresh();
      });
    }
  }
};
</script>

<style scoped lang="scss">
  .detailBox {
    * {
      box-sizing: border-box;
    }

    position: relative;

    .navBox {
      .sweepBtn {
        position: absolute;
        top: 0;
        right: 0;
        z-index: 2;
        margin: 13px 15px;
      }
    }

    .content {
      padding: 15px;

      .box {
        height: 115px;
        padding: 20px 35px 15px 35px;
        border-radius: 10px;
        background: url('../../icon/back.png') 50% no-repeat;
        background-size: 100% 100%;
        margin-bottom: 8px;

        &:last-child {
          margin-bottom: 10px;
        }

        .name {
          height: 10px;
          font-size: 14px;
          font-family: PingFang-SC-Medium;
          font-weight: 500;
          color: rgba(255, 255, 255, 1);
          margin-bottom: 15px;
        }

        .num {
          height: 22px;
          font-size: 25px;
          font-family: DIN-Medium;
          font-weight: 500;
          color: rgba(255, 255, 255, 1);
          margin-bottom: 10px;
        }

        .operate {
          .line {
            width: 50%;
            display: inline-block;
            font-size: 12px;
            font-family: PingFang-SC-Medium;
            font-weight: 500;
            color: rgba(255, 255, 255, 1);

            .van-icon {
              vertical-align: middle;
              margin-right: 5px;
            }
          }
        }
      }

      .recordBox {
        .record {
          line-height: 25px;
          font-size: 15px;
          font-family: PingFang-SC-Medium;
          font-weight: 500;
          color: rgba(89, 193, 182, 1);
        }

        .time {
          width: 100px;
          height: 25px;
          line-height: 25px;
          text-align: center;
          background: rgba(34, 34, 41, 1);
          border-radius: 13px;
          font-size: 12px;
          font-family: PingFang-SC-Medium;
          font-weight: 500;
          color: rgba(131, 130, 153, 1);
          position: relative;

          i {
            width: 0px;
            height: 0px;
            color: white;
            text-align: center;
            border-top: 9px solid #838299;
            border-left: 6px solid transparent;
            border-right: 6px solid transparent;
            position: relative;
            top: 13px;
          }
        }
      }

    }

    .detailLine {
      position: relative;
      overflow: hidden;

      .mask {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 100vh;
        background: rgba(28, 28, 33, 0.8);
      }
    }

    .timeSearch {
      background: rgba(28, 28, 33, 0.8);
      padding: 0 15px 20px 15px;

      .line {
        background: rgba(34, 34, 41, 1);
        border-radius: 5px;
        padding: 7px 15px;
        font-size: 12px;
        font-family: PingFang-SC-Medium;
        font-weight: 500;
        color: rgba(131, 130, 153, 1);
        display: inline-block;
        margin-right: 15px;
      }
    }

    .recordList {
      .box {
        height: 70px;
        background: rgba(34, 34, 41, 1);
        padding: 18px 15px;
        margin-bottom: 1px;

        .line {
          * {
            display: inline-block;
          }
        }

        .name {
          font-size: 15px;
          font-family: PingFang-SC-Medium;
          font-weight: 500;
          color: rgba(255, 255, 255, 1);
          margin-right: 14px;
        }

        .lable {
          padding: 0 3px;
          background: rgba(55, 55, 66, 1);
          border-radius: 3px;
          font-size: 10px;
          font-family: Adobe Heiti Std R;
          font-weight: normal;
          color: rgba(131, 130, 153, 1);

          &.active {
            background: rgba(89, 193, 182, 1);
            color: rgba(255, 255, 255, 1);
          }

          .num {
            font-size: 18px;
            font-family: DIN-Medium;
            font-weight: 500;
            color: rgba(230, 230, 230, 1);

            &.active {
              color: rgba(255, 107, 107, 1);
            }
          }
        }

        .time {
          font-size: 12px;
          font-family: PingFang-SC-Medium;
          font-weight: 500;
          color: rgba(131, 130, 153, 1);
        }
      }
    }

  }
</style>
