import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import globalUrl from ''

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

Vue.config.productionTip = false
Vue.use(ElementUI);
//全局注册，使用方法为:this.$axios
Vue.prototype.$axios = axios
Vue.prototype.$qs = qs
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
