import ElementUI from 'element-ui';
import 'normalize.css';
import 'element-ui/lib/theme-default/index.css';
import Vue from 'vue';
import App from './app';

Vue.use(ElementUI);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
});
