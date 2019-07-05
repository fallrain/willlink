<template>
  <div class="outDetailBox">
    <div class="navBox">
      <van-nav-bar
        :title="navTitle"
        left-arrow
        @click-left="back"
        class="main-header"
      >
      </van-nav-bar>
    </div>
    <div class="content">
      <div class="action text-center">转出</div>
      <div class="money text-center">-10,000,000.00</div>
      <div class="state text-centerc">进行中</div>
      <div class="infoBox">
        <div class="line">
          <div class="left name">创建时间</div>
          <div class="right text-right type">{{createdTime}}</div>
          <div class="van-clearfix"></div>
        </div>
        <div class="line">
          <div class="left name">订单号</div>
          <div class="right text-right type">{{orderNo}}</div>
          <div class="van-clearfix"></div>
        </div>
        <div class="line">
          <div class="left name">收支方式</div>
          <div class="right text-right type">{{['WID','USDT'][type] || ''}}</div>
          <div class="van-clearfix"></div>
        </div>
        <div class="line">
          <div class="left name">收款地址</div>
          <div class="right text-right type">{{address}}</div>
          <div class="van-clearfix"></div>
        </div>
        <div class="line">
          <div class="left name">转账地址</div>
          <div class="right text-right type">{{paymentAddress}}</div>
          <div class="van-clearfix"></div>
        </div>
        <div class="line">
          <div class="left name">收支说明</div>
          <div class="right text-right type">WID转出</div>
          <div class="van-clearfix"></div>
        </div>
        <div class="line">
          <div class="left name">处理进度</div>
          <div class="right text-right type">
            <van-steps
              direction="vertical"
              active-color="#59C1B6"
              :active="step"
            >
              <van-step>
                <h3>提交审核</h3>
                <p>10-24 14:34</p>
              </van-step>
              <van-step>
                <h3>审核确认</h3>
                <p>10-24 14:34</p>
              </van-step>
              <van-step>
                <h3>审核不通过</h3>
                <p>10-24 14:34</p>
              </van-step>
              <van-step>
                <h3>区块确认</h3>
                <p>10-24 14:34</p>
              </van-step>
              <van-step>
                <h3>到账成功</h3>
                <p>10-24 14:34</p>
              </van-step>
            </van-steps>
          </div>
          <div class="van-clearfix"></div>
        </div>
        <div class="line">
          <div class="note">备注</div>
          <div class="remark">
            <van-field
              v-model="value"
              type="textarea"
              placeholder="请输入留言"
              rows="3"
              autosize
            >
            </van-field>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import {
  NavBar, Step, Steps, Field
} from 'vant';

Vue.use(NavBar);
Vue.use(Step).use(Steps);
Vue.use(Field);
export default {
  name: 'HomeRollOutDetail',
  mixins: [],
  components: {},
  props: ['id'],
  data() {
    return {
      createdTime: '',
      orderNo: '',
      address: '',
      paymentAddress: '',
      type: '',
      step: 0
    };
  },
  computed: {},
  created() {
    this.queryDetail();
  },
  methods: {
    queryDetail() {
      /* 查询转账详情 */
      this.axGet(
        `v1/withdraw/detail/${this.id}`
      ).then(({ status, data }) => {
        if (status === 200) {
          this.createdTime = data.created_at;
          this.orderNo = data.withdraw_no;
          this.address = data.user_wallet_address;
          this.paymentAddress = data.payment_address;
          this.type = data.currency_type;
          this.step = data.status;
        }
      });
    }
  }
};
</script>

<style scoped lang="scss">
  .outDetailBox{
    * {
      box-sizing: border-box;
    }
    .content{
      padding: 15px;
      .action{
        font-size:15px;
        font-family:PingFang-SC-Medium;
        font-weight:500;
        color:rgba(255,255,255,1);
        margin-bottom: 25px;
      }
      .money{
        font-size:26px;
        font-family:DIN-Medium;
        font-weight:500;
        color:rgba(255,255,255,1);
        margin-bottom: 15px;
      }
      .state{
        font-size:14px;
        font-family:PingFang-SC-Medium;
        font-weight:500;
        color:rgba(131,130,153,1);
        margin-bottom: 35px;
      }
      .infoBox{
        .line{
          margin-bottom: 12px;
          .name,.note{
            font-size:13px;
            font-family:PingFang-SC-Medium;
            font-weight:500;
            color:rgba(255,255,255,1);
            line-height:34px;
            display: inline-block;
            width: 30%;
          }
          .type{
            width: 70%;
            display: inline-block;
            font-size:13px;
            font-family:PingFang-SC-Medium;
            font-weight:500;
            color:rgba(131,130,153,1);
            line-height:34px;
            .van-steps{
              background:#1c1c21;
              width: 80%;
              float: right;
              .van-step{
                padding: 0 0 20px 0!important;
                &:after{
                  border: none!important;
                }
                &:before{
                  border: none!important;
                  height: 0!important;
                }
                .van-icon-checked:before{
                  content: ''!important;
                  width:8px!important;;
                  height:8px!important;;
                  border-radius:50%!important;;
                }
              }
            }
            h3{
              font-size:10px;
              font-family:PingFang-SC-Medium;
              font-weight:500;
              color:rgba(255,255,255,1);
              line-height:34px;
              display: inline-block;
            }
            p{
              font-size:10px;
              font-family:PingFang-SC-Medium;
              font-weight:500;
              color:rgba(131,130,153,1);
              line-height:34px;
              margin-left: 10px;
              display: inline-block;
            }
          }
          .van-cell{
            height:75px;
            background:rgba(47,47,56,1);
            border-radius:5px;
            padding: 10px;
            &:after {
              border-bottom: none;
            }
          }
        }
      }
    }
  }
</style>
