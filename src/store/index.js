import Vue from "vue";
import Vuex from 'vuex';

import VuexPersistence from 'vuex-persist'
// 本地存储
const vuexLocal = new VuexPersistence({
    storage: window.localStorage
})

Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        m_cartList: [],
    },
    mutations: {
        addCart(state, data) {
            state.m_cartList = data
        }
    },
    getters: {
        // 计算购物车商品的总数量
        totalNums(state) {
            let nums = 0;
            state.cartList.forEach(item => {
                nums += item.nums;
            })

            return nums;
        }
    },
    actions: {

    },
    plugins: [vuexLocal.plugin]
})