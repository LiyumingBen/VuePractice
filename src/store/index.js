import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
// 如果在模块化构建系统中，请确保在开头调用了 Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        count: 10
    },
    mutations: {
        increment (state) {
            state.count++;
        },
        subtraction (state) {
            state.count--;
        }
    },
    actions: {
        //异步请求 网络数据
        increment (context) {
            setTimeout(function () {
                context.commit('increment');
            },1000);
        },
        subtraction (context){
            setTimeout(function () {
                context.commit('subtraction');
            },1000);
        },
    },
    getters: {
        getState: state => {
            return state.count > 0? state.count: 0;
        }
    }
});


/*
 *Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。
 * state，驱动应用的数据源；
 * view，以声明方式将 state 映射到视图；
 * actions，响应在 view 上的用户输入导致的状态变化。
 *
 *view -> (dispatch) Action -> (commit) Mutations -> State -> view
 * 注意： action不是一个非必需品，如果有一步操作才可能用到Action, 否则可以不使用
 *
 *Action
 * Action 类似于 mutation，不同在于：
 * Action 提交的是 mutation，而不是直接变更状态。
 * Action 可以包含任意异步操作。
 * */

