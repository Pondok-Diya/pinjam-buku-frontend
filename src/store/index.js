import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const state = {
  accessToken: '',
  refreshToken: ''
  
}
const getters = {
  getToken: state => state.accessToken,
  getRefreshToken: state => state.refreshToken,
  isAuthenticated: state => !!state.accessToken
}
const mutations = {
  addToken: (state,token) => {
    state.accessToken = localStorage.getItem(token)
  },
  addRefreshToken: (state,refreshToken) => {
    state.refreshToken = localStorage.getItem(refreshToken)
  },
  refreshToken: (state,newToken) => {
    state.accessToken = localStorage.getItem(newToken)
  },
  deleteToken: (state) => {
    localStorage.setItem('user-token','')
    state.accessToken = ''
  },
  deleteRefreshToken: (state) => {
    localStorage.setItem('refresh-token','')
    state.refreshToken = ''
  }
}
const actions = {
  saveRefreshToken: ({commit},newToken) => {
    commit('refreshToken',newToken)
  },
  saveAddToken: ({commit},token) => {
    commit('addToken',token)
  },
  saveAddRefreshToken: ({commit},refreshToken) => {
    commit('addRefreshToken',refreshToken)
  },
  logout: ({commit}) => {
    commit('deleteToken')
    commit('deleteRefreshToken')
  }
}

const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  strict: debug
});
