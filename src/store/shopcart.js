import {reqCartList, reqDeleteCartById, reqUpdateCheckedById} from '@/api';

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
  },
  //删除购物车某一个产品
  async deleteCartBySkuId({commit}, skuId) {
    let result = await reqDeleteCartById(skuId);
    if (result.code == 200) {
      return 'ok';
    } else {
      return Promise.reject(new Error('faile'));
    }
  },
  //修改购物车某一个产品的状态
  async updateCheckedById({commit}, {skuId, isChecked}) {
    let result = await reqUpdateCheckedById(skuId, isChecked);
    if (result.code == 200) {
      return 'ok';
    } else {
      return Promise.reject(new Error('faile'));
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