<template>
  <div class="onclickPlate">
    <div class="onePlate"></div>

    <router-link to="story" tag="div" v-bind:class="lock?two_Plate1:two_Plate2">
      <div v-bind:class="lock?two_Plate1:two_Plate2" @click="doit"></div>
    </router-link>
    <div class="thrPlate"></div>
    <router-link to="cards" tag="div" class="card"></router-link>
  </div>
</template>
<script>

export default {
  data () {
    return {
      lock: true,
      two_Plate1: 'twoPlate1',
      two_Plate2: 'twoPlate2',
    }
  },
  created: function () {
    console.log("hello");
  },
  methods: {
    doit: function () {
      console.log("doit");
      this.lock = false
    }
  }
}
</script>
<style lang="scss">
.onclickPlate {
  min-width: 375px;
  width: 100vw;
  min-height: 350px;
  max-width: 411px;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  .onePlate {
    min-width: 142px;
    min-height: 232px;

    margin-top: 3px;
    background-image: url(../assets/one_plate.png);
    background-size: cover;
  }
  .twoPlate1 {
    min-width: 191px;
    min-height: 232.5px;

    background-image: url(../assets/two_plateOnlock.png);
    background-size: cover;
  }
  .twoPlate2 {
    width: 191px;
    height: 232.5px;

    background-image: url(../assets/two_plate.png);
    background-size: cover;
  }
  .thrPlate {
    min-width: 329px;
    min-height: 114px;

    position: relative;
    top: -4px;
    left: 3px;
    background-image: url(../assets/three_plate.png);
    background-size: cover;
  }
  .card {
    height: 119px;
    width: 105px;
    left: 258.5px;
    top: 530px;
    position: absolute;
    background-image: url(../assets/button_levitate.png);
    background-size: cover;
  }
}
</style>