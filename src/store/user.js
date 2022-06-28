// 登录与注册的模块
import {reqGetCode, reqUserRegister, reqUserLogin, reqUserInfo, reqLogout} from '@/api';
import {setToken, getToken, removeToken} from '@/utils/token';

const state = {
  code: '',
  //简单写法
  // token: localStorage.getItem('TOKEN'),
  // 装逼写法
  token: getToken(),
  userInfo: {}
};
const actions = {
  //获取验证码
  async getCode({commit}, phone) {
    let result = await reqGetCode(phone);
    if (result.code == 200) {
      commit('GETCODE', result.data);
      return 'ok';
    } else {
      return Promise.reject(new Error('faile'));
    }
  },
  // 用户注册
  async userRegister({commit}, data) {
    let result = await reqUserRegister(data);
    if (result.code == 200) {
      return 'ok';
    } else {
      return Promise.reject(new Error('faile'));
    }
  },
  //登录业务[token]
  async userLogin({commit}, data) {
    let result = await reqUserLogin(data);
    //服务器下发token,用户唯一标识(类似uuid)
    //将来经常携带token找服务器要客户信息进行展示
    if (result.code == 200) {
      commit('USERLOGIN', result.data.token);
      //持久化存储token
      //正常写法
      // localStorage.setItem('TOKEN', result.data.token);
      //装逼写法
      setToken(result.data.token);
      return 'ok';
    } else {
      return Promise.reject(new Error('faile'));
    }
  },
  //获取用户信息
  async getUserInfo({commit}) {
    let result = await reqUserInfo();
    if (result.code == 200) {
      //用户已经登录成功且获取到token
      commit('GETUSERINFO', result.data);
      return 'ok';
    } else {
      return Promise.reject(new Error('faile'));
    }
  },
  //退出登录
  async userLogout({commit}) {
    //只是向服务器发送一次请求,通知服务器清除token
    let result = await reqLogout();
    //action里面不能去操作state:必须提交mutation来修改state
    if (result.code == 200) {
      commit('CLEAR');
    }
  }
};
const mutations = {
  GETCODE(state, code) {
    state.code = code;
  },
  USERLOGIN(state, token) {
    state.token = token;
  },
  GETUSERINFO(state, userInfo) {
    state.userInfo = userInfo;
  },
  CLEAR(state) {
    //把仓库中相关用户信息清空
    state.token = '';
    state.userInfo = {};
    //把本地存储中的token清空
    //一般写法
    // localStorage.removeItem;
    //装逼写法
    removeToken();
  }
};
const getters = {};

export default {
  state,
  actions,
  mutations,
  getters
};