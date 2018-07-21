// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import layer from 'vue-layer'
Vue.prototype.$layer = layer(Vue);

Vue.config.productionTip = false;

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
