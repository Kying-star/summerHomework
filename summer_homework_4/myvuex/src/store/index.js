import Vue from 'vue'
import Vuex from './Vuex'

Vue.use(Vuex)

const ADD_COUNT = 'ADD_COUNT'

export default new Vuex.Store({
  state: {
    count: 200
  },
  getters: {
    count: state => {
      return state.count
    }
  },
  mutations: {
    [ADD_COUNT](state, pyload) {
      state.count = state.count + pyload
    }
  },
  actions: {
    addCount({ commit }, pyload) {
      commit(ADD_COUNT, pyload)
    }
  }
})
