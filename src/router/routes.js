//引入插件
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Search from "@/pages/Search";
import Detail from '@/pages/Detail';
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
      show: true,
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
  //重定向,在项目跑起来的时候,访问/,立马让他定向到首页
  {
    path: '*',
    redirect: '/home'
  }
];