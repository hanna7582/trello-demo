import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 상대경로 설정 @ == ./
import './assets/css/style.scss'

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
