import { mapState } from 'vuex';

export default {
  async beforeRouteEnter(to, from, next) {
    next();
  },
  data() {
    return {
      pageCfg: {
        page: {
          pageSize: 10,
          pageNum: 1
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
    copy(text) {
      /* 复制功能 */
      const copySuc = this.wUtil.copy(text);
      setTimeout(() => {
        window.scroll(0, 0);
      });
      let msg;
      if (copySuc) {
        msg = '复制成功';
      } else {
        msg = '复制失败，请手动复制';
      }
      this.$toast(msg);
    }
  }
};
