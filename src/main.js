import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import axios from "axios"
import '@mdi/font/css/materialdesignicons.css'

Vue.use(vuetify, {
    iconfont: 'mdi'
})

const base = axios.create({
    baseURL: "http://api.weatherapi.com/v1/",
    params: {
        key: "88f9beb316ad4c07aa683609240501"
    }
});

Vue.prototype.$http = base;

Vue.config.productionTip = false

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')
