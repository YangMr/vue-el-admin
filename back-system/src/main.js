import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/element.js";

Vue.config.productionTip = false;

//引入界面权限控制文件
import "./permissions"

//引入按钮的权限控制文件
import "./buttonPermissions"

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
