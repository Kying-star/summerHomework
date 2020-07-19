<template>
  <div id="app">
    <h1>App 组件</h1>
    <div>
      <h3>计数：{{ $store.state.count }}个</h3>
    </div>
    <div>
      <h3>getters计数：{{ $store.getters.count }}个</h3>
    </div>
    <button @click="add">commit加</button>
    <button @click="dispatchAdd">dispatch加</button>

    <child></child>
  </div>
</template>

<script>
import child from './components/child.vue'

export default {
  name: 'App',
  components: {
    child
  },
  methods: {
    add () {
      this.$store.commit('ADD_COUNT', 100)
    },
    dispatchAdd () {
      this.$store.dispatch('addCount', 1)
    }
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
  margin-top: 300px;
}
</style>
