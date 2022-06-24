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
//当前这个函数需要传参
//当前这个接口,给服务器传递参数params,至少只一个空对象
export const reGetSearchInfo = (params) => requests({url: '/list', method: 'post', data: params});

//获取产品详情信息的接口  URL:/api/item/{ skuId }    GET    
export const reqGoodsInfo = (skuId) => requests({url: `/item/${skuId}`, method: 'get'});

//将产品添加到购物车中[获取更新某一个产品的个数]/api/cart/addToCart/{ skuId }/{ skuNum }
export const reqAddOrUpdateShopCart = (skuId, skuNum) => requests({url: `/cart/addToCart/${skuId}/${skuNum}`, method: 'post'});

//获取购物车列表数据接口/api/cart/cartList get
export const reqCartList = () => requests({url: 'cart/cartList', method: 'get'});

//删除购物车商品接口  /api/cart/deleteCart/{skuId}   DELETE
export const reqDeleteCartById = (skuId) => requests({url: `cart/deleteCart/${skuId}`, method: 'delete'});

//切换商品状态接口/api/cart/checkCart/{skuID}/{isChecked} GET
export const reqUpdateCheckedById = (skuId, isChecked) => requests({url: `cart/checkCart/${skuId}/${isChecked}`, method: 'get'});