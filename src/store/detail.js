import {reqGoodsInfo} from '@/api';

const state = {
  goodInfo: {}
};
const actions = {
  async getGoodInfo({commit}, skuId) {
    let result = await reqGoodsInfo(skuId);
    if (result.code == 200) {
      commit('GETGOODINFO', result.data);
    }
  }
};
const mutations = {
  GETGOODINFO(state, goodInfo) {
    state.goodInfo = goodInfo;
  }
};
//简化数据而生
const getters = {
  categoryView(state) {
    // 设置返回的属性至少是个空对象,防止在detail页面加载的时候报错
    return state.goodInfo.categoryView || {};
  },
  skuInfo(state) {
    return state.goodInfo.skuInfo || {};
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};