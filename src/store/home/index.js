import {reqCategoryList} from '@/api';
//home模块的小仓库
const state = {};
const actions = {
  //通过API;里面的接口函数调用,向服务器发送请求,获取服务器的数据
  categoryList() {
    let result = reqCategoryList();
    console.log(result);
  }
};
const mutations = {};
const getters = {};

export default {
  state,
  actions,
  mutations,
  getters
};