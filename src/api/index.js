//当前这个模块,API进行统一管理
import requests from './request';
import mockRequest from './mockAjax';

//三级联动的接口
///api/product/getBaseCategoryList    Get  无参数
//发请求:axios发请求返回的是一个promise对象

export const reqCategoryList = () => requests({url: '/product/getBaseCategoryList', method: 'get'});

//获取banner(Home首页轮播图接口)
export const reqGetBannerList = () => mockRequest.get('/banner');

export const reqFloorList = () => mockRequest.get('/floor');

//获取搜索模块数据 地址/api/list 请求方式:POST
//参数类型
/* {
  "category3Id": "61",
  "categoryName": "手机",
  "keyword": "小米",
  "order": "1:desc",
  "pageNo": 1,
  "pageSize": 10,
  "props": ["1:1700-2799:价格", "2:6.65-6.74英寸:屏幕尺寸"],
  "trademark": "4:小米"
} */
//当前这个函数需要传参
//当前这个接口,给服务器传递参数params,至少只一个空对象
export const reGetSearchInfo = (params) => requests({url: '/list', method: 'post', data: params});

//获取产品详情信息的接口  URL:/api/item/{ skuId }    GET    
export const reqGoodsInfo = (skuId) => requests({url: `/item/${skuId}`, method: 'get'});
