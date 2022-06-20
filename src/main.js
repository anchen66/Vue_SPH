import Vue from 'vue';
import App from './App.vue';
//三级联动的组件
import TypeNav from '@/components/TypeNav';
//轮播图的组件
import Carousel from '@/components/Carousel';
//引入分页器插件
import Pagination from '@/components/Pagination';
//引入路由
import router from "@/router";
//引入仓库
import store from '@/store';
//引入MockServe.js----mock数据
import '@/mock/mockServe';
//引入swiper样式
import 'swiper/css/swiper.min.css';




//第一个参数:全局组件的名字;第二个参数:哪一个组件
Vue.component(TypeNav.name, TypeNav);
Vue.component(Carousel.name, Carousel);
Vue.component(Pagination.name, Pagination);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  //全局事件总线$bus的配置
  beforeCreate() {
    Vue.prototype.$bus = this;
  },
  //注册路由:底下的写法是KV一致省略V[router小写r]
  router,
  //注册仓库:组件实例的身上会多一个属性叫$store
  store
}).$mount('#app');