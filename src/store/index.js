import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lists: [],
    is_loading: false,
  },
  getters: {
    groupedLists: state => {
      const map = state.lists.reduce((prev, current) => {
        prev[current.userId] = prev[current.userId] || [];
        prev[current.userId].push(current);
        return prev;
      }, {});
      const result = [];
      for (let key in map) {
        result.push(map[key]);
      }
      return result;
    },
    loading: state => state.is_loading
  },
  mutations: {
    'SET_LISTS' (state, lists) {
      state.lists = lists;
    },
    'SET_LOADING' (state, loading) {
      state.is_loading = loading;
    }
  },
  actions: {
    async fetchLists({commit}) {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos').then(resp => resp.json());
      commit('SET_LISTS', response);
    }
  },
  modules: {
  }
})
