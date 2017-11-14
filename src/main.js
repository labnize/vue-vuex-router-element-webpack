import ElementUI from 'element-ui';
import 'normalize.css';
import 'element-ui/lib/theme-chalk/index.css';
import Vue from 'vue';
import VueRouter from 'vue-router';

import item1 from 'pages/item1/item1';
import item2 from 'pages/item2/item2';
import item31 from 'pages/item3/option1';
import item32 from 'pages/item3/option2';

Vue.use(ElementUI);
Vue.use(VueRouter);
/* eslint-disable no-new */

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: item1 },
    { path: '/item1', component: item1 },
    { path: '/item2', component: item2 },
    { path: '/item3-1', component: item31 },
    { path: '/item3-2', component: item32 }
  ]
});
new Vue({
  el: '#app',
  router,
  template: `
    <div id="app">
      <router-view class="view"></router-view>
    </div>
  `
});
