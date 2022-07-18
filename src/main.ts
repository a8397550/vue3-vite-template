import { createApp } from "vue";
import "@/assets/style.css";
import App from "@/layout/index.vue";
/** 配置文件信息 */
import Config from "@@/index";
import router from "@/router";
import store from "@/store";

console.log("Config:", Config);

createApp(App).use(store).use(router).mount("#app");
