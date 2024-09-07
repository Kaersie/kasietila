import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "element-plus/theme-chalk/dark/css-vars.css";
import App from "./App.vue";
import { createWebHashHistory, createRouter } from "vue-router";
//import


const Index  = () => import('./sites/index.vue')
const About  = () => import('./sites/about.vue')
const routes = [
  { path: "/", name: "首页", component: Index },
  { path: "/about", name: "首页2", component: About }
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

app.use(ElementPlus)


app.use(router).mount("#app");

//pull&push