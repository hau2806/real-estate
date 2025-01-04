import { createRouter, createWebHistory } from "vue-router";
import RealestatePage from "./pages/home/RealestatePage.vue";
import LoginForm from "./pages/auth/AuthLogin.vue";
import RegisterForm from "./pages/auth/AuthRegister.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: RealestatePage },
    { path: "/login", component: LoginForm },
    { path: "/register", component: RegisterForm },
  ],
});

export default router;
