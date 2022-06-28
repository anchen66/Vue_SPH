<template>
  <div>
    <!-- 三级联动的全局组件:三级联动已经注册为全局组件,因此不需要再重新引入 -->
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <Recommend></Recommend>
    <Rank></Rank>
    <Like></Like>
    <FLoor v-for="floor in floorList"
      :key="floor.id"
      :list="floor"></FLoor>
    <Brand></Brand>
  </div>
</template>

<script>
import ListContainer from '@/pages/Home/ListContainer'
import Recommend from '@/pages/Home/Recommend'
import Rank from '@/pages/Home/Rank'
import Like from '@/pages/Home/Like'
import FLoor from '@/pages/Home/Floor'
import Brand from '@/pages/Home/Brand'
import { mapState } from 'vuex'

export default {
  components: { ListContainer, Recommend, Rank, Like, FLoor, Brand },
  mounted() {
    //派发action,获取 floor组件的数组
    this.$store.dispatch('getFloorList')
    //获取用户信息在首页展示,所有页面都要,移至app组件试试
    // this.$store.dispatch('getUserInfo')
  },
  computed: {
    ...mapState({
      floorList: (state) => state.home.floorList,
    }),
  },
}
</script>

<style>
</style>