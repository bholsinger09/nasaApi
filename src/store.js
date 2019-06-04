import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const _api = axios.create({
  baseURL: ""
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeRover: {},
    results: []

  },
  mutations: {
    setResults(state, data) {
      state.results = data
    },
    setActiveRover(state, data) {
      state.activeRover = data
    }

  },
  actions: {

  }
})
