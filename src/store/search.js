//search模块的小仓库
import {reGetSearchInfo} from '@/api';
const state = {
  //仓库初始状态
  searchList: {}
};
const actions = {
  async getSearchList({commit}, params = {}) {
    //当前这个函数在调用获取服务器的时候至少传递一个参数(空对象)
    //params形参:是当用户派发action的时候,第二个参数传递过来的,至少是一个空对象
    let result = await reGetSearchInfo(params);
    if (result.code == 200) {
      commit('GETSEARCHLIST', result.data);
    }
  }
};
const mutations = {
  GETSEARCHLIST(state, searchList) {
    state.searchList = searchList;
  }
};

//计算属性,在项目中,为了简化数据而生
//项目当中getters主要作用是:简化仓库中的数据[简化数据而生]
//可以吧我们将来在组件当中需要用到的数据简化一下[将来在获取组件数据的时候就方便了]
const getters = {
  goodsList(state) {
    // 这样书写是有问题的
    //假如网络不给力,这里返回的应该是undefined
    //计算新的属性的属性值至少是一个空数组
    return state.searchList.goodsList || [];
  },
  trademarkList(state) {
    return state.searchList.trademarkList || [];
  },
  attrsList(state) {
    return state.searchList.attrsList || [];
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};