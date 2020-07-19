<template>
  <div class="story">
    <div v-if="isshow" class="outcrads">
      <div class="aiguo"></div>
      <div @click="hidden" class="story_button"></div>
    </div>
    <div class="story_top"></div>
    <div class="story_banner">
      <div class="left_arrow"></div>
      <div class="story_picture"></div>
      <div class="right_arrow"></div>
    </div>
    <div class="storytxt"></div>
    <router-link to="lotteryDraw" tag="div" class="button" v-if="!isshow"></router-link>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isshow: true
    }
  },
  methods: {
    hidden: function () {
      this.isshow = false
    }
  }
}
</script>
<style lang="scss">
.story {
  min-width: 375px;
  width: 100vw;
  min-height: 603px;
  max-width: 411px;
  max-height: 823px;
  height: 90.4vh;
  background-size: cover;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  .outcrads {
    min-height: 603px;
    height: 90.4vh;
    min-width: 375px;
    width: 100vw;
    max-width: 411px;
    max-height: 741px;
    position: absolute;
    background-image: url(../assets/black.png);
    z-index: 12;
    display: flex;
    flex-direction: column;
    align-items: center;
    .aiguo {
      width: 112px;
      height: 141px;
      margin-top: 120px;
      background-image: url(../assets/aiguo.png);
      background-size: cover;
    }
    .story_button {
      width: 212px;
      height: 55.5px;
      margin-top: 169px;
      background-image: url(../assets/story_button.png);
      background-size: cover;
    }
  }
  .story_top {
    width: 265px;
    height: 65px;
    margin-top: 60px;
    background-image: url(../assets/story_up.png);
    background-size: cover;
  }
  .story_banner {
    min-width: 375px;
    width: 100vw;
    min-height: 163px;
    height: 24.43vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    .left_arrow {
      width: 24px;
      height: 32.5px;

      background-image: url(../assets/arrow2.png);
      background-size: cover;
      transform: rotateY(180deg);
    }
    .story_picture {
      width: 253.5px;
      height: 146px;
      margin-left: 15px;
      margin-right: 15px;
      background-image: url(../assets/story_picture.png);
      background-size: cover;
    }
    .right_arrow {
      width: 24px;
      height: 32.5px;
      background-image: url(../assets/arrow2.png);
      background-size: cover;
    }
  }
  .storytxt {
    width: 246px;
    height: 138px;
    background-image: url(../assets/story_txt.png);
    background-size: cover;
  }
  .button {
    height: 53px;
    width: 189px;
    margin-top: 30px;
    background-image: url(../assets/button.png);
    background-size: cover;
    z-index: 10;
  }
}
</style>