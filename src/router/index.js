import { createRouter, createWebHistory } from "vue-router";
import Top from "../pages/index.vue";
import About from "../pages/about.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "top",
      component: Top,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
  ],
});

export default router;
