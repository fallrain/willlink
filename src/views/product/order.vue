<template>
  <div class="orderBox">
    <div class="navBox">
      <van-nav-bar
        :title="productName+'产品'"
        left-arrow
        @click-left="back"
        class="main-header"
      >
      </van-nav-bar>
    </div>
    <div class="content">
      <div class="box">
        <div class="line text-left">融资金额<span>{{productAmount}}</span></div>
        <div class="line text-right">融资期限<span>365天</span></div>
        <div class="prompt">温馨提示：投资有风险，入市需谨慎！</div>
      </div>
      <div class="info">
        <div class="title">产品介绍</div>
        <div class="line">
          <div class="name text-left left">产品名称</div>
          <div class="type text-right right">{{productName}}</div>
        </div>
        <div class="line">
          <div class="name text-left left">产品编码</div>
          <div class="type text-right right">{{productCode}}</div>
        </div>
        <div class="line">
          <div class="name text-left left">产品金额</div>
          <div class="type text-right right">{{productAmount}}</div>
        </div>
        <div class="line">
          <div class="name text-left left">到期收益</div>
          <div class="type text-right right">{{totalAmount}}</div>
        </div>
        <div class="line">
          <div class="name text-left left">产品类型</div>
          <div class="type text-right right">{{type}}</div>
        </div>
      </div>
      <div class="info">
        <div class="title">收款方信息</div>
        <div class="line">
          <div class="name text-left left">收款钱包地址</div>
          <div class="type text-right right">{{address}}</div>
        </div>
        <div class="line">
          <div class="name text-left left">已成交记录</div>
          <div class="type text-right right">{{recordNum}}个</div>
        </div>
      </div>
      <div
        class="btn"
        @click="createOrder"
      >生成订单</div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { NavBar } from 'vant';

Vue.use(NavBar);
export default {
  name: 'ProductOrder',
  props: ['productId', 'productName'],
  data() {
    return {
      productCode: '',
      totalAmount: '',
      productAmount: '',
      type: '',
      address: '',
      recordNum: '',
    };
  },
  computed: {},
  watch: {},
  created() {
    this.queryDetail();
    this.queryPayeesInfo();
  },
  methods: {
    queryDetail() {
      /* 查询产品详情 */
      this.axGet(
        `v1/products/${this.productId}`
      ).then(({ status, data }) => {
        if (status === 200) {
          this.productCode = data.code;
          this.productAmount = data.limit_money;
          this.totalAmount = data.limit_money * data.profit;
          this.type = data.type;
          this.productProfit = data.profit;// 产品返利点，没必要放在data里
        }
      });
    },
    queryPayeesInfo() {
      /* 查询收款人信息 */
      this.axGet(
        `v1/config/info/${this.productId}`
      ).then(({ status, data }) => {
        if (status === 200) {
          this.address = data.receiving_account;
          this.recordNum = data.transaction_record;
        }
      });
    },
    createOrder() {
      /* 生成订单 */
      this.axPost(
        '/v1/order/save',
        {
          // 用户ID （必填，int）
          uuid: this.userInfo.uuid,
          // 用户手机/邮箱(必填，string)
          username: this.userInfo.mobile,
          // 产品ID（必填，int）
          pid: this.productId,
          // 产品名字(必填，string)
          product_name: this.productName,
          // 产品价格(必填，float(8,2))
          product_price: this.productAmount,
          product_profit: this.productProfit
        }
      ).then(({ status }) => {
        if (status === 200) {
          this.$toast({
            message: '订单生成成功',
            onClose: () => {
              this.$router.replace({
                name: 'HomeProduct'
              });
            }
          });
        }
      });
    }
  }
};
</script>

<style scoped lang="scss">
  .orderBox {
    * {
      box-sizing: border-box;
    }

    .content {
      .box {
        height: 93px;
        background: rgba(34, 34, 41, 1);
        padding: 20px 50px;
        margin-top: 10px;

        .line {
          width: 50%;
          display: inline-block;
          font-size: 14px;
          font-family: PingFang-SC-Medium;
          font-weight: 500;
          color: rgba(131, 130, 153, 1);

          span {
            font-size: 14px;
            font-family: PingFang-SC-Medium;
            font-weight: 500;
            color: rgba(255, 255, 255, 1);
            margin-left: 16px;
          }
        }

        .prompt {
          font-size: 10px;
          font-family: PingFang-SC-Medium;
          font-weight: 500;
          color: rgba(89, 193, 182, 1);
          margin-top: 15px;
        }
      }

      .info {
        padding: 15px 15px 0px 15px;
        margin-top: 10px;
        background: rgba(34, 34, 41, 1);

        .title {
          font-size: 17px;
          font-family: PingFang-SC-Heavy;
          font-weight: 800;
          color: rgba(89, 193, 182, 1);
          margin-bottom: 30px;
        }

        .line {
          margin-bottom: 10px;
          width: 100%;
          display: inline-block;

          .name {
            width: 30%;
            display: inline-block;
            font-size: 13px;
            font-family: PingFang-SC-Medium;
            font-weight: 500;
            color: rgba(255, 255, 255, 1);
            line-height: 34px;
          }

          .type {
            width: 70%;
            display: inline-block;
            font-size: 10px;
            font-family: PingFang-SC-Medium;
            font-weight: 500;
            color: rgba(131, 130, 153, 1);
            line-height: 34px;
            word-wrap: break-word;
            word-break: break-all;
          }
        }
      }

      .btn {
        font-size: 17px;
        font-family: PingFang-SC-Medium;
        font-weight: 500;
        color: rgba(245, 245, 245, 1);
        height: 43px;
        line-height: 43px;
        text-align: center;
        margin: 30px 30px;
        background: rgba(89, 193, 182, 1);
        box-shadow: 0px 5px 5px 0px rgba(89, 193, 182, 0.3);
        border-radius: 22px;
      }
    }
  }
</style>
