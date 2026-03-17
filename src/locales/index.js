import { ref } from 'vue';
import { createI18n } from 'vue-i18n';
import { zhCN } from './zh-CN.js';
import { enUS } from './en-US.js';

const STORAGE_KEY = 'focuslog-language';

function getInitialLanguage() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) return saved;
  return 'zh-CN';
}

const messages = {
  'zh-CN': zhCN,
  'en-US': enUS,
};

const i18n = createI18n({
  legacy: false,
  locale: getInitialLanguage(),
  fallbackLocale: 'zh-CN',
  messages,
});

export const currentLanguage = ref(getInitialLanguage());

export function setLanguage(lang) {
  i18n.global.locale.value = lang;
  currentLanguage.value = lang;
  localStorage.setItem(STORAGE_KEY, lang);
}

export default i18n;