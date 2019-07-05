<template>
  <div class="productBox">
    <!-- 筛选-->
    <div class="filtrate">
      <div
        class="filtrate-btn"
        :class="product ? 'active' : ''"
        @click="filtrateBtn(1)"
      >
        产品
        <van-icon :name="product ? pbottom:ptop "/>
      </div>
      <div
        class="filtrate-btn"
        :class="state ? 'active' : ''"
        @click="filtrateBtn(2)"
      >
        状态
        <van-icon :name="state ? sbottom:stop"/>
      </div>
    </div>
    <div class="maskBox" v-show="mask" :class="mask ?  'maskTop' : ''">
      <div
        :class="['btn',item.active && 'active']"
        v-for="(item,index) in productFilter[curFilterName]"
        :key="index"
        @click="filterProduct(item.id,index)"
      >{{item.name}}</div>
    </div>
    <!--列表-->
    <w-no-content
      :show="!productList.length"
      text="暂无产品"
    ></w-no-content>
    <ul
      class="productList"
      v-show="productList.length"
    >
      <li
        class="line"
        v-for="(item,index) in productList"
        :key="index"
        @click="toAudit(item)"
      >
        <img :src="item.img">
        <div class="box">
          <div class="btn">{{item.statusInfo}}</div>
          <div
            class="time right"
            v-show="item.finished_at"
          >到期时间：{{item.finished_at}}
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue';
import {
  Button, DropdownItem, DropdownMenu, Icon
} from 'vant';
import arrowTop from '@/assets/img/product/arrow-top.png';
import arrowBottom from '@/assets/img/product/arrow-bottom.png';
import WNoContent from '../../components/form/WNoContent';

Vue.use(DropdownMenu).use(DropdownItem);
Vue.use(Icon);
Vue.use(Button);
export default {
  name: 'MyProduct',
  mixins: [],
  components: { WNoContent },
  props: {},
  data() {
    return {
      value: 0,
      switch1: false,
      switch2: false,
      option: [
        { text: '全部商品', value: 0 },
        { text: '新款商品', value: 1 },
        { text: '活动商品', value: 2 }
      ],
      product: false,
      ptop: arrowTop,
      pbottom: arrowBottom,
      state: false,
      stop: arrowTop,
      sbottom: arrowBottom,
      mask: false,
      productList: [],
      productListOrgin: [],
      curFilterName: '',
      // 暂存已经筛选的条件
      curFilterValMap: {
        product_name: 'all',
        order_status: 'all'
      },
      productFilter: {
        filterProductOptions: [
          {
            name: '全部',
            id: 'all',
            active: true
          },
          {
            name: 'V1',
            id: 'V1',
            active: false
          },
          {
            name: 'V2',
            id: 'V2',
            active: false
          },
          {
            name: 'V3',
            id: 'V3',
            active: false
          },
          {
            name: 'V4',
            id: 'V4',
            active: false
          },
          {
            name: 'V5',
            id: 'V5',
            active: false
          }
        ],
        filterStateOptions: [
          {
            name: '全部',
            id: 'all',
            active: true
          },
          {
            name: '订单待提交',
            id: 0,
            active: false
          },
          {
            name: '审核中',
            id: 1,
            active: false
          },
          {
            name: '审核不通过',
            id: 2,
            active: false
          },
          {
            name: '收益中',
            id: 3,
            active: false
          },
          {
            name: '交易结束',
            id: 4,
            active: false
          }
        ]
      },

    };
  },
  created() {
    this.queryMyProducts();
  },
  methods: {
    filtrateBtn(row) {
      if (row === 1) {
        this.state = false;
        this.product = !this.product;
        this.curFilterName = 'filterProductOptions';
        this.mask = this.product;
      } else if (row === 2) {
        this.product = false;
        this.state = !this.state;
        this.curFilterName = 'filterStateOptions';
        this.mask = this.state;
      }
    },
    queryMyProducts() {
      /* 查询我的产品 */
      this.axGet(
        `v1/order/list/${this.userInfo.uuid}`
      ).then(({ status, data }) => {
        if (status === 200) {
          this.productList = data.map(v => ({
            ...v,
            img: require(`@/assets/img/product/product${v.product_name}.png`),
            statusInfo: {
              0: '订单待提交',
              1: '审核中',
              2: '审核不通过',
              3: '收益中',
              4: '交易结束'
            }[v.order_status]
          }));
          this.productListOrgin = [...this.productList];
        }
      });
    },
    filterProduct(id, index) {
      /* 筛选订单 */
      // 要筛选的字段
      let curFilterFiled;
      debugger;
      if (this.product) {
        curFilterFiled = 'product_name';
      } else {
        curFilterFiled = 'order_status';
      }
      this.curFilterValMap[curFilterFiled] = id;
      this.productList = this.productListOrgin.filter((v) => {
        let status = true;
        for (const filed in this.curFilterValMap) {
          const filedVal = this.curFilterValMap[filed];
          if (filedVal !== 'all' && filedVal !== v[filed]) {
            status = false;
            break;
          }
        }
        return status;
      });
      this.productFilter[this.curFilterName].forEach((v) => {
        v.active = false;
      });
      this.productFilter[this.curFilterName][index].active = true;

      this.filtrateBtn(this.product ? 1 : 2);
    },
    toAudit(item) {
      /* 审核 */
      this.$router.push({
        name: 'ProductAuditOrder',
        params: {
          orderId: item.id
        }
      });
    }
  }
};
</script>

<style scoped lang="scss">
  .productBox {
    .filtrate {
      padding: 10px 15px;

      .van-dropdown-menu {
        background: rgba(28, 28, 33, 1);

        &:after {
          border: none;
        }
      }

      &-btn {
        width: 63px;
        height: 25px;
        display: inline-block;
        line-height: 25px;
        background: rgba(34, 34, 41, 1);
        border-radius: 13px;
        font-size: 12px;
        font-family: PingFang-SC-Medium;
        font-weight: 500;
        color: rgba(131, 130, 153, 1);
        text-align: center;
        margin-right: 15px;

        &:last-child {
          margin-right: 0;
        }

        .van-image {
          width: 100% !important;
          height: 100% !important;
          vertical-align: middle;
        }

        i {
          margin-left: 5px;
          font-size: 10px;
          width: 8px;
          height: 5px;
        }

        &.active {
          color: rgba(89, 193, 182, 1);
        }
      }
    }

    .productList {
      .line {
        height: 150px;
        background: rgba(34, 34, 41, 1);
        padding: 10px 15px 15px 15px;
        margin-bottom: 8px;

        img {
          height: 90px;
          border-radius: 5px;
          margin-bottom: 10px;
        }

        .box {
          .btn {
            display: inline-block;
            height: 25px;
            line-height: 12px;
            background: rgba(89, 193, 182, 1);
            border-radius: 13px;
            font-size: 12px;
            font-family: PingFang-SC-Medium;
            font-weight: 500;
            color: rgba(255, 255, 255, 1);
            padding: 7px 13px;

            &.disabled {
              background: rgba(131, 130, 153, 1);
              border-radius: 13px;
            }
          }

          .time {
            height: 25px;
            line-height: 25px;
            font-size: 11px;
            font-family: PingFang-SC-Medium;
            font-weight: 500;
            color: rgba(131, 130, 153, 1);
            display: inline-block;
          }
        }
      }
    }

    .maskBox {
      position: fixed;
      right: 0;
      left: 0;
      bottom: 0;
      overflow: hidden;
      background: rgba(28, 28, 33, 0.8);
      z-index: 10;
      height: 100vh;
      padding: 15px 0 15px 20px;

      &.maskTop {
        top: 89px;
      }

      .btn {
        width: 75px;
        height: 25px;
        line-height: 25px;
        background: rgba(34, 34, 41, 1);
        border-radius: 5px;
        display: inline-block;
        font-size: 12px;
        font-family: PingFang-SC-Medium;
        font-weight: 500;
        color: rgba(131, 130, 153, 1);
        text-align: center;
        margin-right: 12px;
        margin-bottom: 15px;

        &.active {
          background: rgba(89, 193, 182, 1);
          color: rgba(255, 255, 255, 1);
        }
      }
    }
  }

</style>
