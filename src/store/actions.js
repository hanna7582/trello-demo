import * as api from '../api'

const actions = {
  FETCH_AUTH({commit}, {email, password}){
    return api.auth.login(email, password)
    .then(({accessToken}) => {
      commit('LOGIN', accessToken)
    })
  },
  FETCH_BOARDS({commit}){
    return api.board.fetch()
    .then( res => {
      commit('SET_BOARDS', res)
    })
  },
  ADD_BOARD(_, {title}){
    return api.board.create(title)
  }
}

export default actions;