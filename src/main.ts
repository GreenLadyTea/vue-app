import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import { createRouter, createWebHashHistory } from "vue-router";
import UserSheet from "@/components/UserSheet.vue";
import UserProfile from "@/components/UserProfile.vue";

const routes = [
  {
    path: "/",
    component: UserSheet
  },
  {
    path: "/user/:id",
    component: UserProfile
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

createApp(App).use(store).use(router).mount("#app");
