//配置路由的地方
import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
//使用插件
Vue.use(VueRouter);
//引入store
import store from '@/store';
//先把VueRouter原型对象的push方法先保存一份
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;

//重写push||replace
//第一个参数:告诉原来push方法,你往哪里跳转(传递哪些参数)
//第二个参数:成功回调
//第三个参数:失败的回调
//call||apply区别
//相同点:都可以调用函数一次,都可以篡改函数的上下文一次
//不同点:call与apply传递参数:call传递参数用逗号隔开,apply方法执行,传递数组
VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    originPush.call(this, location, resolve, reject);
  } else {
    originPush.call(this, location, () => {}, () => {});
  }
};
VueRouter.prototype.replace = function (location, resolve, reject) {
  if (resolve && reject) {
    originReplace.call(this, location, resolve, reject);
  } else {
    originReplace.call(this, location, () => {}, () => {});
  }
};
//配置路由
let router = new VueRouter({
  //配置路由
  routes,
  scrollBehavior(to, from, savedPosition) {
    return {y: 0};
  },
});

//全局守卫:前置守卫(在路由跳转之间进行判断)
router.beforeEach(async (to, from, next) => {
  //to:可以获取你要跳转到哪个路由信息
  //from:可以获取到你从哪个路由而来的信息
  //next:放行函数 next()放行 next(path) 放行到指定的路由     //next(false)后面讲
  // next();
  //用户登录了才会有token,未登录一定不会有token
  let token = store.state.user.token;
  //用户信息
  let name = store.state.user.userInfo.name;
  if (token) {
    //用户已经登录了,还想去login,想屁吃
    if (to.path == '/login' || to.path == '/register') {
      next('/home');
    } else {
      //登陆了但是去的不是login[home,search,detail...]
      if (name) {
        next();
      } else {
        //没有用户信息,派发action让仓库存储用户信息再跳转
        try {
          await store.dispatch('getUserInfo');
          //放行
          next();
        } catch (error) {
          //token失效了获取不到用户的信息
          //清除token信息
          await store.dispatch('userLogout');
          //返回登录页面,重新登录
          next('/login');
        }
      }
    }
  } else {
    //未登录,暂时没有处理完毕,后期再处理\
    next();
  }
});

export default router;