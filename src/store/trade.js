import {reqAdressInfo, reqOrderInfo} from '@/api';

const state = {
  address: [],
  orderInfo: {}
};
const actions = {
  //获取用户地址信息
  async getUserAdress({commit}) {
    let result = await reqAdressInfo();
    if (result.code == 200) {
      commit('GETUSERADRESS', result.data);
    }
  },
  //获取商品清单的数据
  async getOrderInfo({commit}) {
    let result = await reqOrderInfo();
    if (result.code == 200) {
      commit('GETORDERINFO', result.data);
    }
  }
};
const mutations = {
  GETUSERADRESS(state, address) {
    state.address = address;
  },
  GETORDERINFO(state, orderInfo) {
    state.orderInfo = orderInfo;
  }
};
const getters = {};

export default {
  state,
  actions,
  mutations,
  getters
};