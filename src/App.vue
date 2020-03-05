<template>
  <div id="app">
    <navigations/>
    <router-view/>
  </div>
</template>
<script>
import Navigations from './components/Navigations'
export default {
  components: {
    Navigations
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
  margin-top: 60px;
}
</style>
