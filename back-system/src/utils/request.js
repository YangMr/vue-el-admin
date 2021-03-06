//引入axios
import axios from "axios"

import store from "../store"

//创建axios的实例对象
const request = axios.create({
    baseURL: process.env.VUE_APP_BASE_API, //代理地址 一般是这种形式 /api /dev-api  
    timeout: 5000
})

// 添加请求拦截器
request.interceptors.request.use(function (config) {
    //获取token
   const token =  store.getters.getToken ? store.getters.getToken : "";
    //把token发送给后台
    config.headers.token = token;

    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
request.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default request