<template>
  <div>
    <van-nav-bar
      :title="navTitle"
      left-arrow
      @click-left="back"
    >
    </van-nav-bar>
    <ul class="myIncome-list mt10">
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
          >{{item.positive?'+'+item.income:'-'+item.income}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MyIncome',
  data() {
    return {
      inComeList: [
        {
          id: 1,
          type: 'WID',
          dateTime: '2019-6-17 23:43',
          positive: true, // 是否为正数
          income: '20.00'
        },
        {
          id: 1,
          type: 'WID',
          dateTime: '2019-6-17 23:43',
          positive: true, // 是否为正数
          income: '20.00'
        },
        {
          id: 1,
          type: 'WID',
          dateTime: '2019-6-17 23:43',
          positive: false, // 是否为正数
          income: '5.39'
        },
        {
          id: 1,
          type: 'WID',
          dateTime: '2019-6-17 23:43',
          positive: true, // 是否为正数
          income: '20.00'
        }
      ]
    };
  }
};
</script>

<style scoped>

</style>
