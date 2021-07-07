/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { createApp } from "vue";
import { Button } from "ant-design-vue";
// files
import "ant-design-vue/dist/antd.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./main.css";

const app = createApp(App)
  .use(store)
  .use(router);

// app.config.productionTip = false;
app.use(Button);
app.mount("#app");
