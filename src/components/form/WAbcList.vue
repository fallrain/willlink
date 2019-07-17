<template>
  <div>
    <ol>
      <li
        v-for="(alphabetList,alphabet) in list"
        :key="alphabet"
        v-show="alphabetList.length"
      >
       <!-- <p class="HAbc-head">
          {{alphabet | toUpperCase}}
        </p>-->
        <ul class="HAbc-list">
          <li
            class="HAbc-item"
            v-for="(item,i) in alphabetList"
            :key="i"
            @click="itemClick(item)"
          >
            <span>{{item.cn_name}}</span>
            <span>+{{item.mobile_prefix}}</span>
          </li>
        </ul>
      </li>
    </ol>
  </div>
</template>
<script>
export default {
  name: 'WAbcList',
  props: {
    list: {
      type: Object
    }
  },
  created() {
  },
  methods: {
    itemClick(item) {
      this.$emit('item-click', item);
    }
  }
};
</script>
<style lang="scss">
  .HAbc-head {
    padding-left: 21px;
    font-size: 16px;
    color: #333232;
    background: #F8F8F8;
    height: 25px;
    line-height: 25px;
  }

  .HAbc-list {
    //background: #fff;
    padding: 2px 0;
  }

  .HAbc-item {
    display: flex;
    justify-content: space-between;
    padding-left: 15px;
    padding-right: 15px;
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    color: #fff;
    background: #2F2F38;
    border-bottom: 1px solid #222229;

    &:last-child {
      border-bottom: 0;
    }
  }
</style>
