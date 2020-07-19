import Vue from "vue";
import Router from "vue-router";
import mainbody from "@/components/mainbody";
import story from "@/components/story";
import lotteryDraw from "@/components/lotteryDraw";
import cards from "@/components/cards";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "mainbody",
      component: mainbody,
      meta: {
        keepAlive: true
      }
    },
    {
      path: "/story",
      name: "story",
      component: story
    },
    {
      path: "/lotteryDraw",
      name: "lotteryDraw",
      component: lotteryDraw,
      meta: {
        keepAlive: false
      }
    },
    {
      path: "/cards",
      name: "cards",
      component: cards
    }
  ]
});
