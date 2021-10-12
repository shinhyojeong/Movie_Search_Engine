import { createRouter, createWebHistory } from "vue-router";
import Container from "./Container";
import Home from "./Home";

export default createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/search",
      component: Container,
    },
  ],
});
