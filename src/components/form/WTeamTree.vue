<template>
  <div>
    <ol class="wTeamTree-list">
      <li
        :class="{
          'wTeamTree-item':true,
          'wTeamTree-list-mt25':i===2
        }"
        v-for="(item,i) in list"
        :key="i"
      >
        <div class="wTeamTree-item-portrait-par">
          <img :src="item.img" class="portrait">
          <img :src="lvlMap['lvlS'+item.lvl]" class="lvl">
        </div>
      </li>
    </ol>
  </div>
</template>

<script>
import lvlS1 from '@/assets/img/user/S1@2x.png';
import lvlS2 from '@/assets/img/user/S2@2x.png';
import lvlS3 from '@/assets/img/user/S3@2x.png';
import lvlS4 from '@/assets/img/user/S4@2x.png';
import lvlS5 from '@/assets/img/user/S5@2x.png';

export default {
  name: 'WTeamTree',
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      lvlMap: {
        lvlS1,
        lvlS2,
        lvlS3,
        lvlS4,
        lvlS5
      }
    };
  }
};
</script>

<style lang="scss">
  .wTeamTree-list {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }

  .wTeamTree-list-mt25 {
    margin-top: 25px;
  }

  .wTeamTree-item {
    position: relative;
    width: 50%;
    height: 70px;
    border-bottom: 1px solid #535261;

    &:first-child {
      width: 100%;
      border: 0!important;

      .wTeamTree-item-portrait-par {
        bottom: -20px;
        left: 50%;
        z-index: 3;
        transform: translateY(0) translateX(-50%);

        & > .lvl {
          top: -6px;
          left: -5px;
        }
      }
    }

    &:nth-child(odd) {
      border-left: 1px solid #535261;
      margin-left: -1px;

      .wTeamTree-item-portrait-par {
        right: 0;
      }
    }

    &:nth-child(even) {
      border-right: 1px solid #535261;
    }

    &:nth-child(2n+4) {
      margin-top: -25px;
    }

  }

  .wTeamTree-item-portrait-par {
    position: absolute;
    bottom: 0;
    transform: translateY(50%);
    width: 50px;
    height: 50px;

    & > .portrait {
      width: 100%;
      height: 100%;
    }

    & > .lvl {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 19px;
      height: 13px;
    }
  }
</style>
