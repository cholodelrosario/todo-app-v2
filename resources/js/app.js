import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { BootstrapVue, BootstrapVueIcons,ToastPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from 'axios'
import lodash from 'lodash'
import Clipboard from 'v-clipboard'
 

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(ToastPlugin)
Vue.use(lodash)
Vue.use(Clipboard)

new Vue({
    el: '#app',
    router,
    store: store,
    render: h => h(App)
});

const token = localStorage.getItem('user-token')
if (token) {
  axios.defaults.headers.common['Authorization'] = token
  // console.log(token,'meron')
  // localStorage.removeItem("user-token");
} else {
  console.log('wala')
}
