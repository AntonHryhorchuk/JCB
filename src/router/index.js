import Vue from "vue";
import VueRouter from "vue-router";
import SectionMap from "../components/SectionMap.vue";
import TheHome from "../components/TheHome.vue"


Vue.use(VueRouter);

const routes = [
  { path: '/', redirect: { name: 'home' }},
  {
    path: "/home",
    name: "home",
    component: TheHome
  },
  {
    path: "/map",
    name: "map",
    component: SectionMap
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
