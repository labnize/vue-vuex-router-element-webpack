<template>
  <div id="app">
    <layout></layout>
  </div>
</template>

<script>
import Layout from './components/layout';
import 'element-ui/lib/theme-default/index.css';

export default {
  name: 'app',
  components: {
    Layout,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
