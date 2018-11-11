import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import VueAxios from 'vue-axios';
import mutations from './mutations';
import persistedState from './persistedState';
import createState from './createState';

Vue.use(Vuex, axios, VueAxios);
Vue.prototype.$http = axios;
export const createStore = initialState => new Vuex.Store({
  state: createState(initialState),
  plugins: [persistedState],
  mutations: {
    ...mutations,
  },
});

export default createStore();
