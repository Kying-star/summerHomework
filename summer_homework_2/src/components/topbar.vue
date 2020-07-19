<template>
  <div class="topbar" @click="hello"></div>
</template>
<script>
export default {
  methods: {
    hello: function () {
      console.log("hello");
    }
  }
}
</script>
<style lang="scss">
.topbar {
  min-width: 375px;
  width: 100vw;
  min-height: 64px;
  height: 9.59vh;
  max-width: 411px;
  max-height: 823px;
  background-image: url(../assets/topbar.png);
  background-size: cover;
  z-index: 10;
}
</style>