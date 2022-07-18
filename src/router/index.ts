import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "@/views/home/index.vue";
import Config from "@@/index";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView
  }
];

const router = createRouter({
  history: createWebHistory(Config.BASE_URL),
  routes
});

export default router;
