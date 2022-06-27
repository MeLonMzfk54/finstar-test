import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lists: [],
    is_loading: false,
    error: '',
  },
  getters: {
    groupedLists: state => {
      if (state.lists.length) {
        const map = state.lists.reduce((prev, current) => {
          prev[current.userId] = prev[current.userId] || [];
          prev[current.userId].push(current);
          return prev;
        }, {});
        const result = [];
        for (let key in map) {
          result.push(map[key]);
        }
        return result.sort((a, b) => {
          const first = a.reduce((res, item) => item.completed ? res + 1 : res, 0)
          const second = b.reduce((res, item) => item.completed ? res + 1 : res, 0)
          return first > second ? -1 : 1;
        })
      }
      return []
    },
    loading: state => state.is_loading,
    errorMessage: state => state.error
  },
  mutations: {
    'SET_LISTS' (state, lists) {
      state.lists = lists;
    },
    'SET_LOADING' (state, loading) {
      state.is_loading = loading;
    },
    'POST_ERROR' (state, error) {
      state.error = error;
    }
  },
  actions: {
    async fetchLists({commit}) {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos').then(resp => resp.json());
        commit('SET_LISTS', response);
      } catch (e) {
        commit('SET_LISTS', []);
      }
    }
  },
  modules: {
  }
})
