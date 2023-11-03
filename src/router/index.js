import { createRouter, createWebHistory } from "vue-router";
import Top from "../pages/index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "top",
      component: Top,
    },
  ],
});

export default router;
