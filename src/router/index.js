import Vue from 'vue';
import Router from 'vue-router';
import VehicleList from '@/components/VehicleList';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.ROUTER_PREFIX,
  routes: [
    {
      path: '/',
      name: 'home',
      component: VehicleList,
    },
    {
      path: '*',
      component: {
        functional: true,
        render(h) {
          return h('h1', 'Page not found!');
        },
      },
    },
  ],
});

export default router;
