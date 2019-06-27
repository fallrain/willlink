<template>
  <div>
    <van-nav-bar
      left-arrow
      @click-left="back"
    >
    </van-nav-bar>
    <div class="myTeam-tree-par">
      <w-team-tree
        :list="treeList"
      ></w-team-tree>
    </div>
  </div>
</template>

<script>
import WTeamTree from '../../components/form/WTeamTree';
import imgTest from '@/assets/img/user/user-default.jpeg';

export default {
  name: 'MyTeam',
  components: { WTeamTree },
  data() {
    return {
      treeList: [
        {
          img: imgTest,
          lvl: 2
        },
        {
          img: imgTest,
          lvl: 1
        },
        {
          img: imgTest,
          lvl: 4
        },
        {
          img: imgTest,
          lvl: 4
        },
        {
          img: imgTest,
          lvl: 4
        },
        {
          img: imgTest,
          lvl: 4
        },
        {
          img: imgTest,
          lvl: 4
        },
        {
          img: imgTest,
          lvl: 4
        },
        {
          img: imgTest,
          lvl: 4
        },
        {
          img: imgTest,
          lvl: 3
        }
      ]
    };
  }
};
</script>

<style scoped>

</style>
