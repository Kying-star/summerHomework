<template>
  <div id="app">
    <todolist></todolist>
  </div>
</template>

<script>
import todolist from "./components/todolist";
export default {
  name: "App",
  components: {
    todolist
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
