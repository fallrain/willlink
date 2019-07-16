<template>
  <div class="outBox">
    <div class="navBox">
      <van-nav-bar
        :title="title"
        left-arrow @click-left="back"
        class="main-header"
      >
      </van-nav-bar>
    </div>
    <div class="content">
      <div class="infoBox">
        <div class="name">可用</div>
        <div class="num">{{money}}<span>WCC</span></div>
      </div>
      <div class="formBox">
        <div class="line">
          <van-field
            v-model="form.address"
            placeholder="收款人钱包地址"
            clearable
            name="address"
            v-validate="'required|enOrNumber'"
            data-vv-as="钱包地址"
          >
          </van-field>
        </div>
        <div class="w-vee-error">{{ errors.first('address') }}</div>
        <div class="line">
          <van-field
            v-model="form.num"
            placeholder="数量"
            clearable
            name="num"
            v-validate="'required|decimal'"
            data-vv-as="转出数量"
          >
          </van-field>
        </div>
        <div class="w-vee-error">{{ errors.first('num') }}</div>
        <div class="line">
          <van-field
            v-model="form.note"
            placeholder="备注"
            clearable
            name="note"
            v-validate="'max:20'"
            data-vv-as="备注"
          >
          </van-field>
        </div>
        <div class="w-vee-error">{{ errors.first('note') }}</div>
        <div class="line">
          <van-field disabled placeholder="手续费">
            <div slot="button" class="text">0</div>
          </van-field>
        </div>
        <button
          class="btn active"
          @click="submit"
        >提交申请
        </button>
      </div>
    </div>
  </div>

</template>

<script>
import Vue from 'vue';
import { Field, NavBar } from 'vant';

Vue.use(NavBar);
Vue.use(Field);
export default {
  name: 'HomeRollOut',
  mixins: [],
  components: {},
  props: ['title', 'money'],
  data() {
    return {
      disabled: false,
      form: {
        address: '',
        num: '',
        note: '',
        poundage: ''
      }
    };
  },
  created() {
  },
  mounted() {
  },
  destroyed() {
  },
  methods: {
    async submit() {
      const valid = await this.$validator.validateAll();
      if (!valid) {
        return;
      }
      if (this.money * 1 < this.form.num * 1) {
        this.$toast('转出数量不能大于可用数量');
        return;
      }
      const { status, data } = await this.axPost(
        'v1/withdraw/save',
        {
          uuid: this.userInfo.uuid,
          assets: this.form.num,
          user_wallet_address: this.form.address,
          remark: this.form.note,
          fee: 0
        }
      );
      if (status === 200) {
        this.$router.replace({
          name: 'HomeRollOutDetail',
          params: {
            id: data.withdraw_id
          }
        });
      }
    }
  }
};
</script>

<style scoped lang="scss">
  .outBox {

    .content {
      padding: 15px;

      .infoBox {
        height: 105px;
        border-radius: 10px;
        background: url('../../icon/back.png') 50% no-repeat;
        background-size: 100% 100%;
        padding: 19px 35px 0 35px;

        .name {
          font-size: 14px;
          font-family: PingFang-SC-Medium;
          font-weight: 500;
          color: rgba(255, 255, 255, 1);
          margin-bottom: 15px;
        }

        .num {
          font-size: 25px;
          font-family: DIN-Medium;
          font-weight: 500;
          color: rgba(255, 255, 255, 1);

          span {
            font-size: 13px;
            font-family: DIN-Medium;
            font-weight: 500;
            color: rgba(255, 255, 255, 1);
            margin-left: 9px;
          }
        }
      }

      .formBox {
        .line {
          &:last-of-type {
            border: none;
          }

          padding: 25px 0 5px 0;
          border-bottom: 1px solid rgba(71, 78, 102, .5);

          .van-cell {
            background: rgba(28, 28, 33, 1);

            &:after {
              border: none;
            }
          }

          .text {
            font-size: 14px;
            font-family: PingFang-SC-Medium;
            font-weight: 500;
            color: rgba(71, 78, 102, 1);
          }
        }

        .btn {
          width: 100%;
          display: inline-block;
          height: 43px;
          line-height: 43px;
          text-align: center;
          background: rgba(101, 100, 118, 1);
          box-shadow: 0px 5px 5px 0px rgba(101, 100, 118, 0.3);
          border-radius: 22px;
          margin-top: 30px;

          &.active {
            background: rgba(89, 193, 182, 1);
            box-shadow: 0px 5px 5px 0px rgba(89, 193, 182, 0.3);
          }
        }
      }
    }

  }
</style>
