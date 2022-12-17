import Vue from 'vue';
import App from './App.vue';

import moment from 'moment';
import md5 from 'md5';
import router from './router';

import { createPinia, PiniaVuePlugin } from 'pinia';

import axios from 'axios';
import VueAxios from 'vue-axios';

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import all icons */
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

/* add icons to the library */
library.add(fas);
library.add(fab);
library.add(far);

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon);

/* Setup instance of Pinia */
Vue.use(PiniaVuePlugin);
const pinia = createPinia();
// pinia.use(piniaPluginPersistedstate);

/* Setup configuration Axios */
const timestamp = moment().unix();
const axiosClient = axios.create({
  baseURL: process.env.VUE_APP_DOMAIN,
  params: {
    apikey: process.env.VUE_APP_PUBLIC_KEY_MARVEL,
    ts: timestamp,
    hash: md5(timestamp+process.env.VUE_APP_PRIVATE_KEY_MARVEL+process.env.VUE_APP_PUBLIC_KEY_MARVEL)
  }
});
Vue.use(VueAxios, axiosClient);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  pinia,
  router
}).$mount('#app');
