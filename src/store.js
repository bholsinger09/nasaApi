import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const _api = axios.create({
  baseURL: "https://api.nasa.gov/planetary/apod?api_key=xUdTefFTRzH8eLuEuZH0ieysBl5zLKAGXBQLgjKf"
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    results: []

  },
  mutations: {

    setResults(state, data) {
      state.results = data
    },


  },
  actions: {
    searchApi({ commit, dispatch }, query) {
      _api.get(query)
        .then(res => {
          debugger
          let data = res.data
          commit('setResults', data)
        })
    },



  }
})
