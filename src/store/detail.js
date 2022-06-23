import {reqGoodsInfo, reqAddOrUpdateShopCart} from '@/api';

const state = {
  goodInfo: {}
};
const actions = {
  async getGoodInfo({commit}, skuId) {
    let result = await reqGoodsInfo(skuId);
    if (result.code == 200) {
      commit('GETGOODINFO', result.data);
    }
  },
  //将产品添加到购物车中
  async addOrUpdateShopCart({commit}, {skuId, skuNum}) {
    //加入购物车返回的结构
    //加入购物车之后(发请求),前台将数据参数带给服务器
    //服务器写入数据成功之后,并没有返回其他的数据,只是返回了code=200,代表这次操作成功了
    //因为服务器没有返回其余的数据,因此服务器不需要存储返回的数据
    let result = await reqAddOrUpdateShopCart(skuId, skuNum);
    //当前的这个函数如果执行返回promise
    if (result.code == 200) {
      return '小猪佩奇';
    } else {
      return Promise.reject(new Error('faile'));
    }
  },
};
const mutations = {
  GETGOODINFO(state, goodInfo) {
    state.goodInfo = goodInfo;
  },
};
//简化数据而生
const getters = {
  //路径导航简化的数据
  categoryView(state) {
    // 设置返回的属性至少是个空对象,防止在detail页面加载的时候报错
    return state.goodInfo.categoryView || {};
  },
  //简化产品信息的数据
  skuInfo(state) {
    return state.goodInfo.skuInfo || {};
  },
  //产品售卖属性简化的数据
  spuSaleAttrList(state) {
    return state.goodInfo.spuSaleAttrList || [];
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};