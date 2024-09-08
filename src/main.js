import { createApp } from "vue";
import App from "./App.vue";
import 'sober';
import { createWebHashHistory, createRouter } from "vue-router";
//import


const Index = () => import('./sites/index.vue')
const routes = [
  { path: "/", name: "首页", component: Index }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const app = createApp(App);

//import * as ElementPlusIconsVue from "@element-plus/icons-vue";
//for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
//  app.component(key, component);
//}

//router



app.use(router).mount("#app");

//pull&push