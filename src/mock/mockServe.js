import Mock from 'mockjs';
//wabpack默认对外暴露的:图片,JSON数据格式
import banner from './banner.json';
import floor from './floor.json';
import pay from './pay.json';
import trade from './trade.json';
import submit from './submit.json';

//mock数据:第一个参数请求的地址     第二个参数:请求数据
Mock.mock('/mock/banner', {code: 200, data: banner});
Mock.mock('/mock/floor', {code: 200, data: floor});
Mock.mock('/mock/pay', {code: 200, data: pay});
Mock.mock('/mock/trade', {code: 200, data: trade});
Mock.mock('/mock/submit', {code: 200, data: submit});