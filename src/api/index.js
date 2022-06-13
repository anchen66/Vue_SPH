//当前这个模块,API进行统一管理
import requests from './request';

//三级联动的接口
///api/product/getBaseCategoryList    Get  无参数
//发请求:axios发请求返回的是一个promise对象

export const reqCategoryList = () => requests({url: '/product/getBaseCategoryList', method: 'get'});

