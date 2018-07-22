// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import layer from 'vue-layer'
import Axios from 'axios';
import qs from 'qs';
/*Axios全局默认配置*/
/*Axios.defaults.baseURL = 'http://www.wwtliu.com';
Axios.defaults.headers.common['Authorization'] = AUTH_TOKEN; //第三方认证
Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';*/
Vue.prototype.$axios = Axios; //将axios挂载到原型上
import VuePersianDatetimePicker from 'vue-persian-datetime-picker';
Vue.component('date-picker', VuePersianDatetimePicker);

import VueUploadComponent  from 'vue-upload-component';
Vue.component('file-upload', VueUploadComponent);
Vue.config.productionTip = false;

// 添加请求拦截器
Axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    //对参数格式进行转换
    if(config.method == 'post'){
        config.data = qs.stringify(config.data);
    }
    console.log("请求"+config);
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
Axios.interceptors.response.use(function (response) {
    console.log("响应"+response);
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

//全局注册组件
//Vue.Component("users", Users);

/*全局定义自定义指令*/
/*Vue.directive('focus',{
    inserted: function(el){
        el.focus();
    }
});*/
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: {App},
    template: '<App/>'
});
