import type from './mutation-type'
import * as api from '../api'

const mutations = {
  [type.LOGIN](state, token){
    if(!token) return
    state.token = token 
    localStorage.setItem('token', token)
    api.setAuthInHeader(token)
  },
  [type.LOGOUT](state){
    state.token = null 
    delete localStorage.token
    api.setAuthInHeader(null)
  },
  [type.SET_IS_ADD_BOARD](state, isAddBoard){
    state.isAddBoard = isAddBoard
  },
  [type.SET_BOARDS](state, payload){
    state.boards = payload.list;
  },
}

export default mutations;