<template>
  <div id="app">
    <topbar></topbar>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>

    <div class="yellow"></div>
  </div>
</template>

<script>
import topbar from "./components/topbar"
import cards from "./components/cards"
export default {
  name: "App",
  components: {
    topbar,
    cards
  },

};
</script>

<style lang="scss">
$mainheight: 667px;
$mainwidth: 375px;
#app {
  width: 100vw;
  height: 100vh;
  min-width: 375px;
  min-height: 667px;
  max-width: 411px;
  max-height: 823px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin: 0;
  padding: 0;
  background-image: url(./assets/main_bk.png);
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.yellow {
  width: 100vw;
  height: 90.4vh;
  min-width: 375px;
  min-height: 603px;
  max-width: 411px;
  max-height: 823px;
  position: absolute;
  margin-top: 14px;
  background-image: url(./assets/yellowing.png);
  z-index: 1;
}
html,
body {
  margin: 0;
  padding: 0;
}
</style>
