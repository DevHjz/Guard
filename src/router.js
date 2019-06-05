/* jshint esversion: 6 */
import Vue from 'vue';
import Router from 'vue-router';
import Authorize from './views/Authorize.vue';
import ErrorPage from './views/ErrorPage.vue';
import Logout from './views/Logout.vue'

import Login from './views/login/index.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: "*",
      redirect: "/error"
    },    
    {
      path: '/',
      alias: '/login',
      name: 'indexLogin',
      component: Login,
    },
    {
      path: '/authorize/confirm',
      name: 'authorize',
      component: Authorize,
    },
    {
      path: '/profile/logout',
      name: 'logout',
      component: Logout,
    },    
    {
      path: '/error',
      name: 'error',
      component: ErrorPage,
    }
  ]
});
