import {reqCartList} from '@/api';

const state = {
  cartList: []
};
const actions = {
  //获取购物车列表数据
  async getCartList({commit}) {
    let result = await reqCartList();
    //测试是否能获取个人购物车数据
    if (result.code == 200) {
      commit('GETCARTLIST', result.data);
    }
  }
};
const mutations = {
  GETCARTLIST(state, cartList) {
    state.cartList = cartList;
  }
};
const getters = {
  cartList(state) {
    return state.cartList[0] || {};
  },
};

export default {
  state,
  actions,
  mutations,
  getters
};