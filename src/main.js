import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();
Vue.config.productionTip = false;
Vue.use(Antd);
new Vue({
  router,
  store,
  Antd,
  AOS,
  render: h => h(App)
}).$mount("#app");
