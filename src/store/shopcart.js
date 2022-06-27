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
  },
  //删除全部勾选的产品
  deleteAllCheckedCart({dispatch, getters}) {
    //获取购物车中全部的产品
    let PromiseAll = [];
    getters.cartList.cartInfoList.forEach(item => {
      let result = item.isChecked == 1 ? dispatch('deleteCartBySkuId', item.skuId) : '';
      //将每一次返回的结果返回到数组中
      PromiseAll.push(result);
    });
    // 只要p1|p2都成功，返回的结果即为成功
    // 如果又一个失败，返回的即为失败的结果
    return Promise.all(PromiseAll);
  },
  // 全选修改产品状态
  updateAllCartIsChecked({dispatch, state}, isChecked) {
    let PromiseAll = [];
    state.cartList[0].cartInfoList.forEach(item => {
      let result = dispatch('updateCheckedById', {skuId: item.skuId, isChecked});
      PromiseAll.push(result);
    });
    return Promise.all(PromiseAll);
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