//引入插件
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Search from "@/pages/Search";
import Detail from '@/pages/Detail';
import AddCartSuccess from '@/pages/AddCartSuccess';
import ShopCart from '@/pages/ShopCart';
import Trade from '@/pages/Trade';
import Pay from '@/pages/Pay';
//路由配置的信息
export default [
  {
    path: '/home',
    component: Home,
    meta: {
      show: true,
    }
  },
  {
    path: '/login',
    component: Login,
    meta: {
      show: false,
    }
  },
  {
    path: '/register',
    component: Register,
    meta: {
      show: false,
    }
  },
  {
    //params传参
    name: 'Search',
    path: '/search/:keyword?',//路径里面的?意味着params这个参数可传可不传
    component: Search,
    meta: {
      show: true,
    }
  },
  {
    path: '/detail/:skuId',
    component: Detail,
    meta: {
      show: true,
    }
  },
  {
    name: 'AddCartSuccess',
    path: '/addcartsuccess',
    component: AddCartSuccess,
    meta: {
      show: true,
    }
  },
  {
    name: 'ShopCart',
    path: '/shopcart',
    component: ShopCart,
    meta: {
      show: true,
    }
  },
  {
    name: 'Trade',
    path: '/trade',
    component: Trade,
    meta: {
      show: true,
    }
  },
  {
    path: '/pay',
    component: Pay,
    meta: {
      show: true,
    }
  },
  //重定向,在项目跑起来的时候,访问/,立马让他定向到首页
  {
    path: '*',
    redirect: '/home'
  }
];