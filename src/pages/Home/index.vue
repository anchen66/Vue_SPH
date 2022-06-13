<template>
  <div>
    <!-- 三级联动的全局组件:三级联动已经注册为全局组件,因此不需要再重新引入 -->
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <Recommend></Recommend>
    <Rank></Rank>
    <Like></Like>
    <FLoor></FLoor>
    <FLoor></FLoor>
    <Brand></Brand>
  </div>
</template>

<script>
import ListContainer from "@/pages/Home/ListContainer";
import Recommend from "@/pages/Home/Recommend";
import Rank from "@/pages/Home/Rank";
import Like from "@/pages/Home/Like";
import FLoor from "@/pages/Home/Floor";
import Brand from "@/pages/Home/Brand";

export default {
  components: { ListContainer, Recommend, Rank, Like, FLoor, Brand },
};
</script>

<style>
</style>