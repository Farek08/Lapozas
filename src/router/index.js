import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ElerhetosegView from "../views/ElerhetosegView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/elerhetoseg",
      name: "elerhetoseg",
      component: ElerhetosegView,
    },
   
  ],
});

export default router;
