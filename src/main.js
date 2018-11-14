import Vue from 'vue';
import { sync } from 'vuex-router-sync';
import App from './App';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

sync(store, router);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  data() {
    return {
      results: [],
    };
  },
  template: '<App/>',
  functional: true,
  router,
  store,
  render(h) {
    return h(App);
  },
});
