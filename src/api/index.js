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