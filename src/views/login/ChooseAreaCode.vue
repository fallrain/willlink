<template>
  <div class="chooseAreaCode">
    <van-nav-bar
      left-arrow
      title=""
      @click-left="back"
    >
    </van-nav-bar>
    <div class="chooseAreaCode-head">选择国家和地区</div>
    <van-search
      background="transparent"
      v-model="value"
      placeholder="搜索"
      @search="onSearch"
      @clear="onSearch"
    >
    </van-search>
    <w-abc-list
      :list="alphabets"
      @item-click="choose"
    ></w-abc-list>
  </div>
</template>

<script>
import Vue from 'vue';
import { Search } from 'vant';
import { mapMutations } from 'vuex';
import WAbcList from '../../components/form/WAbcList';

Vue.use(Search);

export default {
  name: 'ChooseAreaCode',
  components: { WAbcList },
  data() {
    return {
      alphabets: {
        A: [],
        B: [],
        C: [],
        D: [],
        E: [],
        F: [],
        G: [],
        H: [],
        I: [],
        K: [],
        L: [],
        M: [],
        N: [],
        O: [],
        P: [],
        Q: [],
        R: [],
        S: [],
        T: [],
        U: [],
        V: [],
        W: [],
        X: [],
        Y: [],
        Z: []
      },
      value: ''
    };
  },
  created() {
    this.query();
  },
  methods: {
    ...mapMutations(['changeAreaCode']),
    query() {
      this.axGet('v1/mobile_prefix').then(({ status, data }) => {
        if (status === 200) {
          data.forEach((v) => {
            // const alphabet = v.en_name.substring(0, 1).toUpperCase();
            this.alphabets.A.push(v);
            this.areaList = data;
          });
        }
      });
    },
    onSearch() {
      const reg = new RegExp(this.value);
      this.alphabets.A = this.areaList.filter(v => reg.test(v.cn_name));
    },
    choose(item) {
      this.changeAreaCode(item.mobile_prefix);
      this.back();
    }
  }
};
</script>

<style lang="scss">
  .chooseAreaCode-head {
    padding-left: 16px;
    margin-top: 30px;
    margin-bottom: 20px;
    color: #59C1B6;
    font-size: 24px;
  }

  .chooseAreaCode {
    .van-search{
      padding: 0 15px;
      margin-bottom: 10px;
    }
    .van-search__content{
      border-radius: 5px;
      background: #2F2F38;
      .van-cell{
        height: 30px;
        line-height: 30px;
        padding-top: 0;
        padding-bottom: 0;
      }
    }
  }
</style>
