<template>
  <div class="outBox">
    <div class="navBox">
      <van-nav-bar :title="title" left-arrow @click-left="onClickLeft" class="main-header"/>
    </div>
    <div class="content">
      <div class="infoBox">
        <div class="name">可用</div>
        <div class="num">100,000,000.00<span>WID</span></div>
      </div>
      <div class="formBox">
        <div class="line">
          <van-field v-model="form.address" placeholder="收款人钱包地址" />
        </div>
        <div class="line">
          <van-field v-model="form.num" placeholder="数量" />
        </div>
        <div class="line">
          <van-field v-model="form.note" placeholder="备注" />
        </div>
        <div class="line">
          <van-field disabled placeholder="手续费" >
            <van-button slot="button" class="text">0.0005WID</van-button>
          </van-field>
        </div>
        <van-button :disabled="disabled" class="btn" :class="disabled ? 'active' : ''">禁用状态</van-button>
      </div>
    </div>
  </div>

</template>

<script>
import Vue from 'vue';
import { NavBar, Field  } from 'vant';

Vue.use(NavBar);
Vue.use(Field);
export default {
  name: 'HomeRollOut',
  mixins: [],
  components: {},
  props: {},
  data() {
    return {
      title: '',
      disabled: false,
      form: {
        address: '',
        num: '',
        note: '',
        poundage: ''
      }
    };
  },
  computed: {},
  watch: {},
  created() {
    // 获取详情标题
    const navTitle = this.$router.history.current.params.title;
    if (navTitle !== undefined) {
      this.title = navTitle;
    }
  },
  mounted() {},
  destroyed() {},
  methods: {
    onClickLeft() {
      /* 返回上一页 */
      this.$router.back();
    }
  }
};
</script>

<style scoped lang="scss">
  .outBox {
    * {
      box-sizing: border-box;
    }
    .content{
      padding: 15px;
      .infoBox{
        height: 105px;
        border-radius:10px;
        background: url('../../icon/back.png') 50% no-repeat;
        background-size: 100% 100%;
        padding: 19px 35px 0 35px;
        .name{
          font-size:14px;
          font-family:PingFang-SC-Medium;
          font-weight:500;
          color:rgba(255,255,255,1);
          margin-bottom: 15px;
        }
        .num{
          font-size:25px;
          font-family:DIN-Medium;
          font-weight:500;
          color:rgba(255,255,255,1);
          span{
            font-size:13px;
            font-family:DIN-Medium;
            font-weight:500;
            color:rgba(255,255,255,1);
            margin-left: 9px;
          }
        }
      }
      .formBox{
        .line{
          &:last-of-type{
            border: none;
          }
          padding: 25px 0 5px 0;
          border-bottom: 1px solid rgba(71,78,102,.5);
          .van-cell{
            background:rgba(28,28,33,1);
            &:after{
              border: none;
            }
          }
          .text{
            font-size:14px;
            font-family:PingFang-SC-Medium;
            font-weight:500;
            color:rgba(71,78,102,1);
          }
        }
        .btn{
          width: 100%;
          display: inline-block;
          height:43px;
          line-height: 43px;
          text-align: center;
          background:rgba(101,100,118,1);
          box-shadow:0px 5px 5px 0px rgba(101,100,118,0.3);
          border-radius:22px;
          margin-top: 30px;
          &.active{
            background:rgba(89,193,182,1);
            box-shadow:0px 5px 5px 0px rgba(89,193,182,0.3);
          }
        }
      }
    }

  }
</style>
