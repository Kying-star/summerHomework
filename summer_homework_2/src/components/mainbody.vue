<template>
  <div class="mianbody" @click="hello">
    <paper></paper>
    <onclickplate></onclickplate>
  </div>
</template>
<script>
import onclickplate from "./onclickPlate"
import paper from "./paper";
export default {
  methods: {
    hello: function () {
      console.log("hello");
    },
    sayhi: function () {
      alert("hello");
    }
  },
  components: {
    onclickplate,
    paper
  }
}
</script>
<style lang="scss">
.mianbody {
  min-width: 375px;
  min-height: 600px;
  width: 100vw;
  height: 89.95vh;
  max-width: 411px;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>