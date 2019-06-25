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
  methods: {
    back() {
      /* 返回上一页 */
      this.$router.back();
    }
  }
};
