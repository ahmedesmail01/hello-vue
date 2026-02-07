import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { VueQueryPlugin } from "@tanstack/vue-query";
import { router } from "./router/index.js";

const app = createApp(App);

app.use(router);
app.use(VueQueryPlugin).mount("#app");
