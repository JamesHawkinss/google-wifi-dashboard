<template>
  <div id="app">
    <Header />
    <login-wrapper>
      <router-view/>
    </login-wrapper>
  </div>
</template>

<script>
import Header from '@/components/partials/Header.vue'
import LoginWrapper from '@/components/core/LoginWrapper.vue'

export default {
  components: {
    Header,
    LoginWrapper
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
