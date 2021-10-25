import Vue from 'vue'
import Vuex from 'vuex'
import App from '@/App.vue'
import VueRouter from 'vue-router'

import { createStore } from '@/store/store'

import Home from '@/views/Home.vue'
import Groups from '@/views/Groups.vue'
import NotFound from '@/views/NotFound.vue'

Vue.use(VueRouter)
Vue.use(Vuex)

Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes: [
      { path: '/', component: Home },
      { path: '/groups', component: Groups },
      { path: '*', component: NotFound }
  ]
});

const store = createStore()
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
