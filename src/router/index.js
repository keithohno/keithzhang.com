import { createRouter, createWebHistory } from "vue-router";
import HomeScreen from "../components/HomeScreen";
import ExperimentsScreen from "../components/ExperimentsScreen";
import LifeScreen from "../components/LifeScreen";

const routes = [
  {
    path: "/",
    name: "HomeScreen",
    component: HomeScreen
  },
  {
    path: "/experiments",
    name: "ExperimentsScreen",
    component: ExperimentsScreen
  },
  {
    path: "/life",
    name: "LifeScreen",
    component: LifeScreen
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
