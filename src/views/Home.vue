<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
// import GoogleWifiApi from 'google-wifi-api-node'
const GoogleWifiApi = import('google-wifi-api-node')

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  methods: {
    async setup(refreshToken) {
      const googleWifiApi = new GoogleWifiApi(refreshToken)
      await googleWifiApi.init()
    }
  }
}
</script>
