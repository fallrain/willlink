<template>
  <div>
    <van-nav-bar
      left-arrow
      @click-left="back"
      right-text="账号登录"
      @click-right="toLogin"
    >
    </van-nav-bar>
    <div class="login-body">
      <p class="login-body-title">快速注册</p>
      <div
        class="login-body-group"
      >
        <van-field
          v-model="form.phone"
          name="phone"
          placeholder="手机号/邮箱"
          clearable
          v-validate="'required|phoneOrEmail'"
          data-vv-as="手机号/邮箱"
        >
          <span
            slot="right-icon"
            class="w-vee-error"
          >此号码已经被注册</span>
        </van-field>
        <div class="w-vee-error">{{ errors.first('phone') }}</div>
        <van-field
          v-model="form.verificationCode"
          name="verificationCode"
          type="password"
          placeholder="请输入验证码"
          clearable
          v-validate="'required|digits:6'"
          data-vv-as="验证码"
        >
          <w-verificationcode
            slot="button"
            :phone="form.phone"
            :type="verificationcodeType"
            :beforeSend="validatePhone"
          >
          </w-verificationcode>
        </van-field>
        <div class="w-vee-error">{{ errors.first('verificationCode') }}</div>
        <div
          class="w-vee-error"
        >验证码错误
        </div>
        <van-field
          v-model="form.password"
          name="password"
          :type="passwordType"
          placeholder="请输入登录密码"
          clearable
          v-validate="'required|min:6'"
          data-vv-as="密码"
          ref="password"
        >
          <i
            slot="right-icon"
            :class="[
              'iconfont',
              'register-iconfont-eye',
              passwordType==='password'?'icon-yanjing':'icon-yanjing1'
            ]"
            @click="changePasswordType('passwordType')"
          ></i>
        </van-field>
        <div class="w-vee-error">{{ errors.first('password') }}</div>
        <van-field
          v-model="form.password2"
          name="password2"
          :type="password2Type"
          placeholder="请再次输入登录密码"
          clearable
          v-validate="'required|min:6|confirmed:password'"
          data-vv-as="密码"
        >
          <i
            slot="right-icon"
            :class="[
              'iconfont',
              'register-iconfont-eye',
              password2Type==='password'?'icon-yanjing':'icon-yanjing1'
            ]"
            @click="changePasswordType('password2Type')"
          ></i>
        </van-field>
        <div class="w-vee-error">{{ errors.first('password2') }}</div>
        <van-field
          v-model="form.invitationCode"
          name="invitationCode"
          type="password"
          placeholder="请输入邀请码"
          clearable

          v-validate="'required|digits:6'"
          data-vv-as="邀请码"
        >
        </van-field>
        <div class="w-vee-error">{{ errors.first('invitationCode') }}</div>
        <p class="register-invitationCode-tips">注：邀请码必须填写</p>
        <w-radio
          v-model="agree"
          :type=1
          inf="同意协议并完成注册"
        ></w-radio>
      </div>
      <div class="register-body-btns">
        <button
          type="button"
          class="cm-btn active"
          @click="register"
        >立即注册
        </button>
        <p
          class="register-protocol"
          @click="showProtocol"
        >
          《电子服务协议》
        </p>
      </div>
    </div>
    <w-model
      :show.sync="modelShow"
    >
      <div slot="content">
        <div class="register-protocol-model-title">服务条款</div>
        <div class="register-protocol-cnt">
          <p class="register-protocol-item">
            您认知并同意，XX公司可能会以非人工检索方式自动生成到第三方网页的链接，XX公司不存储、控制或修改该等第三方网页中的内容，
            且不对该等第三方网页或资源的可用性负责，亦不对该等网络或资源上的或从该等网站或资源获得的任何广告、产品或其他材料加以认可。
          <p>
          <p class="register-protocol-item">您理解并同意自主选择、使用服务的风险自负，并且对于因使用服务而对计算机系统造成的损坏或数据的丢失，您应承担全部责任。
          <p>
          <p class="register-protocol-item">
            在适用法律允许的最大范围内，XX公司明确表示不提供任何其他类型的保证，不论使明示的或默示的，包括但不限于适销性、适用性、可靠性、准确性、完整性、无病毒以及无错误的任
            何默示保证和责任。另外，在适用法律允许的最大范围内，XX公司并不担保服务一定能满足您的要求，也不担保服务不会被修改、中断或终止，
            并且对服务的及时性、安全性、错误发生，以及信息是否能准确、及时、顺利的传送均不作任何担保。
          <p>
          <p class="register-protocol-item">
            在适用法律允许的最大范围内，XX公司不就因您使用服务引起的或与服务有关的任何意外的、非直接的、特殊的、或间接的损害或请求
            （包括但不限于因人身伤害、因隐私泄漏、因未能履行包括诚信或合理谨慎在内的任何责任、因过失和因任何其他金钱上的损失或其他损失而造成的损害赔偿）承担任何责任。</p>
        </div>
      </div>
    </w-model>
  </div>
</template>

<script>
import Vue from 'vue';
import { Field } from 'vant';
import { WModel, WRadio, WVerificationcode } from '@/components/form';
import wValidateRules from '@/lib/wValidate/wValidateRules';

Vue.use(Field);
export default {
  name: 'Register',
  components: {
    WModel,
    WRadio,
    WVerificationcode
  },
  data() {
    return {
      form: {
        name: '', // 账户名
        password: '', // 密码
        password2: '', // 确认密码
        phone: '', // 手机号
        verificationCode: '', // 验证码
        invitationCode: ''// 邀请码
      },
      agree: 0, // 同意协议并完成注册
      modelShow: false, // 协议弹层显示隐藏
      verificationcodeType: 1, // 发送验证码的类型，1：手机，2：邮箱
      passwordType: 'password',
      password2Type: 'password'
    };
  },
  computed: {},
  methods: {
    toLogin() {
      /* 跳转账号登录页面 */
      this.$router.push({
        name: 'Login'
      });
    },
    showProtocol() {
      /* 显示协议弹层 */
      this.modelShow = true;
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
    changePasswordType(type) {
      /* 改变密码框类型 */
      const typeObj = {
        text: 'password',
        password: 'text'
      };
      this[type] = typeObj[this[type]];
    },
    async register() {
      if (await this.$validator.validateAll()) {
        if (this.agree !== 1) {
          this.$toast('请勾选同意协议');
          return;
        }
        const { status } = this.axPost('v1/register', {
          val: this.form.phone,
          password: this.form.password,
          re_password: this.form.password2,
          fuid: this.form.invitationCode,
          code: this.form.verificationCode
        });
        if (status === 200) {
          this.$router.push({
            name: 'RegisterSuc'
          });
        }
      }
    }
  }
};
</script>

<style scoped>

</style>
