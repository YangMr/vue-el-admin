import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import routes from "../common/config/router"

const router = new VueRouter({
  routes
});


// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router;
