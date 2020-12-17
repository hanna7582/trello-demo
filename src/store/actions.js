import * as api from '../api'
import state from './state'

const actions = {
    // 인증
    FETCH_AUTH({ commit }, { email, password }) {
        return api.auth.login(email, password).then(({ accessToken }) => {
            commit('LOGIN', accessToken)
        })
    },
    // 보드 여러개 조회
    FETCH_BOARDS({ commit }) {
        return api.board.fetch().then(res => {
            commit('SET_BOARDS', res)
        })
    },
    // 보드 하나 조회
    FETCH_BOARD({ commit }, { id }) {
        return api.board.fetch(id).then(res => {
            commit('SET_BOARD', res)
        })
    },
    // 보드 추가
    ADD_BOARD(_, { title }) {
        return api.board.create(title).then(res => res.item)
    },
    // 카드 추가
    ADD_CARD({ dispatch }, { title, listId, pos }) {
        return api.card
            .create(title, listId, pos)
            .then(() => dispatch('FETCH_BOARD', { id: state.board.id }))
    },
}

export default actions
