import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules:{
    
  }
})

const {token} = localStorage
if (token) {
  // token의 값을 임의로 변경시 header의 토근과 일치하지 않으므로 로그인페이지로 이동
  store.commit('LOGIN', token)
}

export default store;


