import { createApp } from "vue";
import App from "./App.vue";
import i18n from "./locales/index.js";
import "./styles/app.css";    // Semantic CSS design system
import "./styles/global.css"; // Base reset & overrides

// 全局错误捕获：避免白屏，至少展示错误信息
window.addEventListener('unhandledrejection', (e) => {
  console.error('Unhandled rejection:', e.reason);
});
window.addEventListener('error', (e) => {
  console.error('Unhandled error:', e.error || e.message);
});

const app = createApp(App);
app.config.errorHandler = (err, instance, info) => {
  console.error('Vue Error:', err, info);
};
app.use(i18n);
app.mount("#app");
