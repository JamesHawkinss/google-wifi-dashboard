<template>
  <div id="app">
    <login-wrapper>
      <router-view/>
    </login-wrapper>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

body {
  background-color: #202125;
  color: #e4e5e9;

  text-align: center;
}

#app {
  font-family: 'Open Sans', sans-serif;
}
</style>

<script>
import Header from '@/components/partials/Header.vue'
import LoginWrapper from '@/components/auth/LoginWrapper.vue'

export default {
  components: {
    Header,
    LoginWrapper
  }
}
</script>



