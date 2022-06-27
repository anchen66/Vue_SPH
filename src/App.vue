<template>
  <div id="app">
    <Header></Header>
    <!-- 路由组件出口的地方 -->
    <router-view></router-view>
    <!-- 在Home、Search显示的，在登录、注册是隐藏的 -->
    <!-- <Footer v-show="$route.path == '/home' || $route.path == '/search'"></Footer> -->
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
  name: 'App',
  components: { Header, Footer },
  mounted() {
    //派发一个action||获取商品分类的三级列表的数据
    this.$store.dispatch('categoryList')
    //获取用户信息在首页展示,写在这里只会挂载一次,第一次登录跳转之后不会显示信息,只有刷新之后才会显示
    // this.$store.dispatch('getUserInfo')
  },
}
</script>

<style>
</style>

