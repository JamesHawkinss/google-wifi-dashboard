import Vue from 'vue'
import Vuex from 'vuex'
import App from '@/App.vue'
import VueRouter from 'vue-router'
import VueApexCharts from 'vue-apexcharts'

import { library } from '@fortawesome/fontawesome-svg-core';
import { faGlobe, faNetworkWired, faLaptop, faWifi, faArrowLeft, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { createStore } from '@/store/store'

import Home from '@/views/Home.vue'
import Network from '@/views/Network.vue'
import Devices from '@/views/Devices.vue'
import Points from '@/views/Points.vue'
import NotFound from '@/views/NotFound.vue'

library.add([
  faGlobe,
  faNetworkWired,
  faLaptop,
  faWifi,
  faArrowLeft,
  faArrowUp,
  faArrowDown
])

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(VueApexCharts)

Vue.component('apexchart', VueApexCharts)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'hash',
  routes: [
      { path: '/', component: Home },
      { path: '/network', component: Network },
      { path: '/devices', component: Devices },
      { path: '/points', component: Points },
      { path: '*', component: NotFound }
  ]
});

const store = createStore()
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
