import Vue from 'vue'
import Vuex from 'vuex'
import App from '@/App.vue'
import VueRouter from 'vue-router'

import { library } from '@fortawesome/fontawesome-svg-core';
import { faGlobe, faNetworkWired, faLaptop, faWifi, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { createStore } from '@/store/store'

import Home from '@/views/Home.vue'
import Network from '@/views/Network.vue'
import NotFound from '@/views/NotFound.vue'

library.add([
  faGlobe,
  faNetworkWired,
  faLaptop,
  faWifi,
  faArrowLeft
])

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'hash',
  routes: [
      { path: '/', component: Home },
      { path: '/network', component: Network },
      { path: '*', component: NotFound }
  ]
});

const store = createStore()
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
