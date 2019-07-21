import { mapState } from 'vuex';
import mutationType from '@/store/mutations_types';
import { axGet } from '../lib/ajax';
import store from '@/store';

export default {
  async beforeRouteEnter(to, from, next) {
    /* 查询用户信息 */
    // 此接口不规范
    if (to.name === 'Login') {
      next();
      return;
    }
    if (JSON.stringify(store.state.user.userInfo) !== '{}') {
      next();
      return;
    }
    const data = await axGet('v1/me', {
      requestNoToast: true
    });
    store.commit(mutationType.UPDATE_USER, data);
    next();
  },
  data() {
    return {
      pageCfg: {
        page: {
          pageSize: 10,
          page: 1
        }
      }
    };
  },
  computed: {
    ...mapState({
      userInfo: state => state.user.userInfo,
      navTitle: state => state.states.text
    })
  },
  methods: {
    back() {
      /* 返回上一页 */
      this.$router.back();
    },
    copy(selector, text) {
      /* 复制功能 */
      const copyIns = this.wUtil.clipboardCopy(selector, text);
      copyIns.on('success', () => {
        this.$toast('复制成功');
      });

      copyIns.on('error', () => {
        this.$toast('复制失败，请手动复制');
      });
      return copyIns;
    }
  }
};
