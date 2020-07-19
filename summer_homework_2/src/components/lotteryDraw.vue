<template>
  <div class="lotteryDraw">
    <div class="lotteryDraw_star"></div>
    <div class="win" v-if="Math.random()>0.5">
      <div class="win_txt"></div>
      <div class="win_image"></div>
    </div>
    <div class="lose" v-else>
      <div class="lose_txt"></div>
      <div class="lose_image"></div>
    </div>
    <router-link tag="div" class="continue" to="cards"></router-link>
    <router-link tag="div" to="/" class="explore"></router-link>
    <div class="redrock_txt"></div>
  </div>
</template>
<script>
export default {
  created: function () {
    console.log("hello");
  }
}
</script>
<style lang="scss">
.lotteryDraw {
  min-width: 375px;
  width: 100vw;
  min-height: 603px;
  height: 90.4vh;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .lotteryDraw_star {
    width: 325px;
    height: 67.5px;
    margin-top: 40px;
    margin-bottom: 40px;
    background-image: url(../assets/star.png);
    background-size: cover;
  }
  $win_lose: 40px;
  $win_lose_2: 30px;
  .win {
    min-width: 375px;
    width: 100vw;
    min-height: 132.5px;
    height: 19.86vh;
    display: flex;
    margin-bottom: $win_lose;
    flex-direction: column;
    align-items: center;
    .win_txt {
      width: 142.5px;
      height: 21.5px;
      background-image: url(../assets/win.png);
      background-size: cover;
      margin-bottom: $win_lose_2;
    }
    .win_image {
      width: 226px;
      height: 76px;
      background-image: url(../assets/win_2.png);
      background-size: cover;
    }
  }
  .lose {
    min-width: 375px;
    width: 100vw;
    min-height: 132.5px;
    height: 19.86vh;
    display: flex;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: $win_lose;
    .lose_txt {
      width: 93.5px;
      height: 21.5px;
      margin-bottom: $win_lose_2;
      background-image: url(../assets/lose.png);
      background-size: cover;
    }
    .lose_image {
      width: 222.5px;
      height: 56.5px;
      background-image: url(../assets/thank.png);
      background-size: cover;
    }
  }
  .continue {
    width: 189px;
    height: 53px;
    margin-bottom: 25px;
    background-image: url(../assets/continue.png);
    background-size: cover;
  }
  .explore {
    width: 189px;
    height: 53px;
    margin-bottom: 15px;
    background-image: url(../assets/explore.png);
    background-size: cover;
  }
  .redrock_txt {
    width: 172.5px;
    height: 32.5px;
    margin-bottom: 101px;
    background-image: url(../assets/redrock_txt.png);
    background-size: cover;
  }
}
</style>