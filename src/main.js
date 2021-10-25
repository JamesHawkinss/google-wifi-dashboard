import Vue from 'vue'
import App from '@/App.vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import NotFound from '@/views/NotFound.vue'

Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes: [
      { path: '/', component: Home },
      { path: '/login', component: Login },
      { path: '*', component: NotFound }
  ]
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
