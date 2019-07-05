<template>
  <div>
    <van-nav-bar
      :title="navTitle"
      left-arrow
      @click-left="back"
    >
    </van-nav-bar>
    <w-no-content
      :show="!inComeList.length"
      text="暂无收益"
    ></w-no-content>
    <ul
      v-show="inComeList.length"
      class="myIncome-list mt10"
    >
      <li
        class="myIncome-item"
        v-for="(item) in inComeList"
        :key="item.id"
      >
        <div class="myIncome-item-left">
          <p class="name">收益</p>
          <p class="type mt10">{{'[' + item.type + ']'}}</p>
        </div>
        <div class="myIncome-item-right">
          <p class="time">{{item.dateTime}}</p>
          <p
            :class="{
              'income':true,
              mt10:true,
              positive:item.positive
            }"
          >{{item.positive?'+'+item.income:''+item.income}}</p>
        </div>
      </li>
    </ul>

  </div>
</template>

<script>
import WNoContent from '../../components/form/WNoContent';

export default {
  name: 'MyIncome',
  components: { WNoContent },
  data() {
    return {
      inComeList: [
        /* {
          id: 1,
          type: 'WID',
          dateTime: '2019-6-17 23:43',
          positive: true, // 是否为正数
          income: '20.00'
        } */
      ]
    };
  },
  created() {
    this.queryIncome();
  },
  methods: {
    queryIncome() {
      /* 查询我的收益 */
      this.axGet(
        `v1/member/profit_list/${11}`
      ).then(({ status, data }) => {
        if (status === 200) {
          this.inComeList = data.map(v => ({
            id: v.id || new Date().getTime(),
            type: 'WID',
            positive: v.profit >= 0,
            income: v.profit
          }));
        }
      });
    }
  }
};
</script>

<style scoped>

</style>
