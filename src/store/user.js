// 登录与注册的模块
import {reqGetCode, reqUserRegister, reqUserLogin, reqUserInfo} from '@/api';
import {setToken, getToken} from '@/utils/token';

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
  }
};
const getters = {};

export default {
  state,
  actions,
  mutations,
  getters
};