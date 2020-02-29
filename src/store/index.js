import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const state = {
  accessToken: '',
  refreshToken: ''
}
const getters = {
  getToken: state => state.accessToken,
  getRefreshToken: state => state.refreshToken
}
const mutations = {
  addToken: (state,token) => {
    state.accessToken = token
  },
  addRefreshToken: (state,refreshToken) => {
    state.refreshToken = refreshToken
  },
  refreshToken: (state,newToken) => {
    state.accessToken = newToken
  }
}
const actions = {
  saveToken: ({commit},newToken) => {
    commit('refreshToken',newToken)
  },
  addToken: ({commit},token) => {
    commit('addToken',token)
  },
  addRefreshToken: ({commit},refreshToken) => {
    commit('addRefreshToken',refreshToken)
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
