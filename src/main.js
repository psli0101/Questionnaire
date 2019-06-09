import Vue from "vue";
import App from "./App";
import router from "./router/index";

import PaperDashboard from "./plugins/paperDashboard";
import "vue-notifyjs/themes/default.css";

import HtmlToPdf from "./htmlToPdf.js"

Vue.use(PaperDashboard);
Vue.use(HtmlToPdf);

const EventBus = new Vue();

window.EventBus = EventBus;

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
