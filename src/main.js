import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import HomeScreen from "./components/HomeScreen";
import LifeScreen from "./components/LifeScreen";
import ExperimentsScreen from "./components/ExperimentsScreen";

Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [
  { path: "/", component: HomeScreen },
  { path: "/life", component: LifeScreen },
  { path: "/experiments", component: ExperimentsScreen }
];

const router = new VueRouter({ mode: "history", routes });

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
