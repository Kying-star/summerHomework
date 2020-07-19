<template>
  <div class="cards">
    <div class="txt">
      <div class="toptxt"></div>
      <div class="hr"></div>
      <div class="buttomtxt"></div>
    </div>

    <div class="showcard">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <router-link to="lotteryDraw" tag="div" class="onbutton" @click="say"></router-link>
    <div class="text2"></div>
  </div>
</template>
<script>
export default {
  methods: {
    say: function () {
      console.log("hello");
    }  }
}
</script>
<style lang="scss">
.cards {
  width: 100vw;
  min-width: 375px;
  max-width: 411px;
  min-height: 600px;
  height: 89.95vh;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  .txt {
    margin-top: 37px;
    margin-bottom: 5px;
    .toptxt {
      width: 177.5px;
      height: 24.5px;
      background-image: url(../assets/collect_p.png);
      background-size: cover;
    }
    .hr {
      width: 271px;
      height: 35px;
      background-image: url(../assets/hr4.png);
      background-size: cover;
    }
    .buttomtxt {
      width: 263px;
      height: 12.5px;
      position: relative;
      top: -20px;
      background-image: url(../assets/text.png);
      background-size: cover;
    }
  }

  .showcard {
    min-width: 375px;
    width: 100vw;
    min-height: 305px;
    max-width: 525px;
    height: 45.73vh;
    display: flex;
    flex-wrap: wrap;
    > div:nth-child(1) {
      width: 112px;
      height: 141px;
      margin-left: (49/375 * 100vw);
      margin-right: (22/375 * 100vw);

      background-image: url(../assets/aiguo.png);
      background-size: cover;
    }
    > div:nth-child(2) {
      width: 112px;
      height: 141px;
      margin-left: (29.5/375 * 100vw);
      background-image: url(../assets/jinbu.png);
      background-size: cover;
    }
    > div:nth-child(3) {
      width: 112px;
      height: 141px;
      margin-left: (49/375 * 100vw);
      margin-right: (22/375 * 100vw);
      margin-top: (23.5/667 * 100vh);
      background-image: url(../assets/minzhu.png);
      background-size: cover;
    }
    > div:nth-child(4) {
      width: 112px;
      height: 141px;
      margin-left: (29.5/375 * 100vw);
      margin-right: (23.5/375 * 100vw);
      margin-top: (23.5/667 * 100vh);
      background-image: url(../assets/kexue.png);
      background-size: cover;
    }
  }

  .text2 {
    width: 88.5px;
    height: 11.5px;
    background-image: url(../assets/54text.png);
    background-size: cover;
  }
  .onbutton {
    height: 53px;
    width: 189px;
    margin-top: 30px;
    background-image: url(../assets/button.png);
    background-size: cover;
    z-index: 10;
  }
}
</style>