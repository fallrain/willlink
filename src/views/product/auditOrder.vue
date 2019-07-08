<template>
  <div class="orderBox">
    <div class="navBox">
      <van-nav-bar
        :title="title"
        right-text="关闭"
        @click-right="back"
        class="main-header"
      >
      </van-nav-bar>
    </div>
    <div class="content">
      <div class="info">
        <div class="title">产品信息</div>
        <div class="line">
          <div class="name text-left left">产品名称</div>
          <div class="type text-right right">{{productName}}</div>
        </div>
        <div class="line">
          <div class="name text-left left">产品金额</div>
          <div class="type text-right right">{{productAmount}}</div>
        </div>
      </div>
      <div class="info">
        <div class="line">
          <div class="name text-left left">交易时间</div>
          <div class="type text-right right">{{payTime}}</div>
        </div>
        <div class="line">
          <div class="name text-left left">交易流水</div>
          <div class="type text-right right">{{orderNo}}</div>
        </div>
        <div class="line">
          <div class="name text-left left">收款人地址</div>
          <div class="type text-right right">{{address}}</div>
        </div>
      </div>
      <div class="info">
        <div class="line">
          <div class="name text-left left">转账流水号</div>
          <van-field
            class="typeBox text-left right productAuditOrder-typeBox"
            v-model="transactionNo"
            placeholder="转账流水号"
            :disabled="orderStatus!==0"
            clearable
          >
          </van-field>
          <div class="w-vee-error">{{ errors.first('transactionNo') }}</div>
        </div>
      </div>
      <div class="steps">
        <div class="title">订单状态</div>
        <van-steps direction="vertical" :active="curStep" active-color="#59C1B6">
          <van-step>
            <h3>提交订单</h3>
          </van-step>
          <van-step>
            <h3>审核中</h3>
          </van-step>
          <van-step>
            <h3>审核不通过</h3>
          </van-step>
          <van-step>
            <h3>收益中</h3>
          </van-step>
          <van-step>
            <h3>交易结束</h3>
          </van-step>
        </van-steps>
      </div>
      <div
        v-if="orderStatus===0 && btnShow"
        class="btn"
        @click="submit"
      >提交审核
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import {
  Field, NavBar, Step, Steps
} from 'vant';

Vue.use(NavBar);
Vue.use(Step).use(Steps);
Vue.use(Field);
export default {
  name: 'ProductAuditOrder',
  props: ['orderId'],
  components: {},
  data() {
    return {
      title: '',
      productName: '', // 产品金额
      payTime: '', // 产品金额
      productAmount: '', // 产品金额
      address: '', // 地址
      curStep: 0,
      transactionNo: '',
      orderNo: '',
      orderStatus: '',
      id: '',
      btnShow: true
    };
  },
  created() {
    this.queryOrderDetail();
  },
  methods: {
    onClickRight() {

    },
    queryOrderDetail() {
      /* 根据订单查询 */
      this.axGet(
        `v1/order/detail/${this.orderId}`
      ).then(({ status, data }) => {
        if (status === 200) {
          this.title = `${data.product_name}产品订单`;
          this.productName = data.product_name;
          this.productAmount = data.product_price;
          this.transactionNo = data.transaction_no;
          this.address = data.receiving_account;
          this.payTime = data.created_at;
          this.orderNo = data.order_no;
          this.orderStatus = data.order_status;
          this.curStep = data.order_status;
          this.id = data.id;
        }
      });
    },
    async submit() {
      /* 提交审核 */
      /* const valid = await this.$validator.validateAll();
      if (!valid) {
        return;
      } */
      this.axPost(
        'v1/order/pay',
        {
          oid: this.id,
          transaction: this.transactionNo
        }
      ).then(({ status }) => {
        if (status === 200) {
          this.btnShow = false;
          this.back();
        }
      });
    }
  }
};
</script>
<style lang="scss">

  .productAuditOrder-typeBox {
    .van-field__control {
      line-height: 30px;
    }
  }
</style>
<style scoped lang="scss">
  .orderBox {

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
        padding: 15px;
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

          .w-vee-error {
            clear: both;
            padding-left: 34%;
            margin-top: 8px;
          }

          &:last-of-type {
            margin-bottom: 0;
          }

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
            font-size: 13px;
            font-family: PingFang-SC-Medium;
            font-weight: 500;
            color: rgba(131, 130, 153, 1);
            line-height: 34px;
            word-wrap: break-word;
            word-break: break-all;
          }

          .typeBox {
            width: 70%;
            display: inline-block;
            height: 30px;
            line-height: 30px;
            background: rgba(47, 47, 56, 1);
            border-radius: 5px;
            font-size: 10px;
            font-family: PingFang-SC-Medium;
            font-weight: 500;
            color: rgba(131, 130, 153, 1);
            line-height: 34px;
            padding: 0 15px;

            &:after {
              display: none;
            }

            .van-field__control {
              line-height: 30px;
            }
          }
        }
      }

      .steps {
        padding: 0 15px;
        margin-top: 30px;

        .title {
          font-size: 13px;
          font-family: PingFang-SC-Medium;
          font-weight: 500;
          color: rgba(255, 255, 255, 1);
          line-height: 34px;
        }

        .van-steps {
          background: #1c1c21;
          margin-left: 35%;

          .van-step {
            padding: 10px 0 25px 0 !important;

            &:after {
              border: none !important;
            }

            &:before {
              border: none !important;
              height: 0 !important;
            }

            .van-icon-checked:before {
              content: '' !important;
              width: 8px !important;
              height: 8px !important;
              display: inline-block !important;
              border-radius: 50% !important;
            }
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
