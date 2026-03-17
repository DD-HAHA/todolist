import { createApp } from "vue";
import App from "./App.vue";
import i18n from "./locales/index.js";
import "./styles/app.css";    // Semantic CSS design system
import "./styles/global.css"; // Base reset & overrides

const app = createApp(App);
app.use(i18n);
app.mount("#app");
