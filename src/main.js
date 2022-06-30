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

//统一接口api文件夹里面全部请求函数
//统一引入
import * as API from '@/api';
//按需引入eleUi插件
import {Button, MessageBox} from 'element-ui';
//引入lazyload插件
import VueLazyload from 'vue-lazyload';
//引入图片
import Abc from '@/assets/images/lazyload.gif';
//引入表单校验插件
import '@/plugins/validate';


//第一个参数:全局组件的名字;第二个参数:哪一个组件
Vue.component(TypeNav.name, TypeNav);
Vue.component(Carousel.name, Carousel);
Vue.component(Pagination.name, Pagination);
//注册全局组件
Vue.component(Button.name, Button);
//ElementUI注册组建的时候,还有一种写法,挂在原型上
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.config.productionTip = false;

Vue.use(VueLazyload, {
  loading: Abc,
  error: Abc,
});

new Vue({
  render: h => h(App),
  //全局事件总线$bus的配置
  beforeCreate() {
    Vue.prototype.$bus = this;
    //全局引用API
    Vue.prototype.$API = API;
  },
  //注册路由:底下的写法是KV一致省略V[router小写r]
  router,
  //注册仓库:组件实例的身上会多一个属性叫$store
  store
}).$mount('#app');