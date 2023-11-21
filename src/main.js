import "./assets/main.css";
import route from "./router";
import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";

const app = createApp(App);
app.use(createPinia());
app.use(route);
app.mount("#app");
