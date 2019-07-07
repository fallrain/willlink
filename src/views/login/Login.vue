<template>
  <div>
    <van-nav-bar
      :right-text="loginStatusName.navTitle"
      @click-right="changeLoginStatus"
    >
    </van-nav-bar>
    <div class="login-body">
      <p class="login-body-title">{{loginStatusName.title}}</p>
      <div v-show="loginStatus===1">
        <div
          v-show="loginStatus===1"
          class="login-body-group"
        >
          <van-field
            v-model="form.name"
            placeholder="手机号/邮箱"
            clearable
            @input="pwdLoginInput"
            name="name"
            v-validate="'required|phoneOrEmail'"
            data-vv-as="手机号/邮箱"
          >
          </van-field>
          <div class="w-vee-error">{{ errors.first('name') }}</div>
          <van-field
            v-model="form.password"
            type="password"
            placeholder="请输入密码"
            clearable
            @input="pwdLoginInput"
            name="password"
            v-validate="'required|min:6'"
            data-vv-as="密码"
          >
          </van-field>
          <div class="w-vee-error">{{ errors.first('password') }}</div>
          <div class="login-body-forget-par">
            <span
              v-show="showPasswordError"
              class="login-body-password-error"
            >密码输入错误</span>
            <span
              class="login-body-forget"
              @click="jumpForget"
            >忘记密码？</span>
          </div>
        </div>
        <div class="login-body-btns">
          <button
            type="button"
            :class="['cm-btn',!pwdLoginDisabled && 'active']"
            :disabled="pwdLoginDisabled"
            @click="login"
          >登录
          </button>
        </div>
      </div>
      <div v-show="loginStatus===2">
        <div
          v-show="loginStatus===2"
          class="login-body-group"
        >
          <van-field
            v-model="form.phone"
            placeholder="手机号/邮箱"
            clearable
            @input="nopwdLoginInput"
          >
          </van-field>
          <van-field
            v-model="form.verificationCode"
            type="password"
            placeholder="请输入验证码"
            clearable
            @input="nopwdLoginInput"
          >
            <w-verificationcode
              slot="button"
              :phone="form.phone"
              :type="verificationcodeType"
              :beforeSend="validatePhone"
            >
            </w-verificationcode>
          </van-field>
          <div class="login-body-forget-par">
            <span
              v-show="showVerificationCodeError"
              class="login-body-password-error"
            >验证码错误</span>
          </div>
        </div>
        <div class="login-body-btns">
          <button
            type="button"
            :class="['cm-btn',!nopwdLoginDisabled && 'active']"
            :disabled="nopwdLoginDisabled"
          >登录
          </button>
        </div>
      </div>
      <p class="login-body-btns-register">
        <span>还没有账号？</span>
        <span
          class="login-body-btns-register-link"
          @click="toRegister"
        >立即注册</span>
      </p>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import {
  mapMutations
} from 'vuex';
import mutationType from '@/store/mutations_types';
import { Field } from 'vant';
import { WVerificationcode } from '@/components/form';
import wValidateRules from '@/lib/wValidate/wValidateRules';

Vue.use(Field);
export default {
  name: 'Login',
  components: {
    WVerificationcode
  },
  data() {
    return {
      loginStatus: 1, // 登录方式 1：账号登录 2：免密登录
      form: {
        name: '', // 账户名
        password: '', // 密码
        phone: '', // 手机号
        verificationCode: '' // 验证码
      },
      showVerificationCodeError: false, // 验证码错误
      showPasswordError: false, // 密码错误
      pwdLoginDisabled: true,
      nopwdLoginDisabled: true,
      verificationcodeType: 1// 发送验证码的类型，1手机，2邮箱
    };
  },
  computed: {
    loginStatusName() {
      return {
        1: {
          title: '欢迎登录',
          navTitle: '免密登录'
        },
        2: {
          title: '免密登录',
          navTitle: '账号登录'
        }
      }[this.loginStatus];
    }
  },
  methods: {
    ...mapMutations([
      mutationType.UPDATE_USER
    ]),
    jumpForget() {
      /* 跳转忘记密码页面 */
      this.$router.push({
        name: 'ForgetPassword'
      });
    },
    changeLoginStatus() {
      /* 改变账号登录状态 */
      this.loginStatus = this.loginStatus === 1 ? 2 : 1;
    },
    toRegister() {
      /* 跳转注册页面 */
      this.$router.push({
        name: 'Register'
      });
    },
    pwdLoginInput() {
      /* 账号密码登录输入框事件 */
      const { rules } = wValidateRules;
      const {
        name,
        password
      } = this.form;
      if ((rules.mobile(name) || rules.email(name)) && rules.required(password)) {
        this.pwdLoginDisabled = false;
      } else {
        this.pwdLoginDisabled = true;
      }
    },
    nopwdLoginInput() {
      /* 免密登录输入框事件 */
      const { rules } = wValidateRules;
      const {
        phone,
        verificationCode
      } = this.form;
      if (
        (rules.mobile(phone) || rules.email(phone))
        && rules.required(verificationCode)
        && rules.number(verificationCode)
        && rules.length(verificationCode, 6)
      ) {
        this.nopwdLoginDisabled = false;
      } else {
        this.nopwdLoginDisabled = true;
      }
    },
    validatePhone() {
      /* 点击发送验证码的时候，验证是否输入了手机号 */
      const { rules } = wValidateRules;
      const {
        phone
      } = this.form;
      let returnStatus = true;
      if (rules.mobile(phone)) {
        this.verificationcodeType = 1;
      } else if (rules.email(phone)) {
        this.verificationcodeType = 2;
      } else {
        returnStatus = false;
      }
      !returnStatus && (this.$toast('请输入正确的手机号或邮箱'));
      return returnStatus;
    },
    login() {
      /* 普通登录 */
      const {
        name: val,
        password
      } = this.form;
      this.axPost('v1/login', {
        val,
        password
      }).then(({ status, data }) => {
        if (status === 200) {
          localStorage.setItem('acces_token', `${data.token_type} ${data.acces_token}`);
          this.queryUserInfo().then(() => {
            this.$router.push({
              name: 'HomePage'
            });
          });
        }
      });
    },
    async queryUserInfo() {
      /* 查询用户信息 */
      // 此接口不规范
      const data = await this.axGet('v1/me', {
        requestNoToast: true
      });
      this[mutationType.UPDATE_USER](data);
    }
  }
};
</script>

<style scoped>

</style>
