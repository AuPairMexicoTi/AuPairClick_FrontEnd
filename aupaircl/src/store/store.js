import Vue from 'vue'
import Vuex from 'vuex'
import jwt_decode from 'jwt-decode';

Vue.use(Vuex)
export default new Vuex.Store({
  state() {
    return {
      role: null,
      order: "",
      user: null,
      token: localStorage.getItem("token") || null,
      code:null,
    }
  },
  getters: {
    getUser: state => state.user,
    tokenExists: state => state.token !== null,
    getToken: state => state.token,
    getRole: state => state.role,
    getCode: state => state.code,
    codeExist: state => state.code !== null
  },
  mutations: {
    setOrder(state, { order }) {
      state.order = order;
    },
    setUser(state, user) {
      state.user = user;
    },
    setToken(state, token) {
      state.token = token;
      localStorage.setItem("token", token);
      let { roles } = jwt_decode(token);
      let roleName = roles[0].authority;
      state.role = roleName
    },
    clearToken(state) {
      state.token = null;
      localStorage.removeItem("token");
    },
    clearCode(state) {
      state.code = "";
    },
    clearUser(state) {
      state.user = "";
    },
    codeUser(state,code) {
      state.code =code;
    },
  },
  actions: {
    setOrder({ commit }, order) {
      commit('setOrder', order);
    },
    loginUser({ commit }, token) {
      commit('setToken', token);
    },
    logoutUser({ commit }) {
      commit('clearToken');
    },
    codeUser({ commit },code) {
      commit('codeUser',code);
    }
  },
  modules: {
  }
})