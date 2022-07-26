import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "@/views/home/index.vue";
import OpenLayer from "@/views/openlayer/index.vue";
import Config from "@@/index";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView
  },
  {
    path: "/openlayer",
    name: "openlayer",
    component: OpenLayer
  }
];

const router = createRouter({
  history: createWebHistory(Config.BASE_URL),
  routes
});

export default router;
