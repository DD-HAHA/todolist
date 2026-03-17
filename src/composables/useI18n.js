import { useI18n as useVueI18n } from 'vue-i18n';
import { currentLanguage, setLanguage } from '../locales/index.js';

export function useI18n() {
  const { t, locale } = useVueI18n();
  
  return {
    t,
    locale,
    currentLanguage,
    setLanguage,
  };
}