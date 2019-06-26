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
    }
  }
};
