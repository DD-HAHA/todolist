<template>
  <div style="max-width:768px; padding: 0 24px;">
    <header class="view-header">
      <h1 class="view-title">{{ t('settings.title') }}</h1>
      <p class="view-subtitle">{{ t('settings.subtitle') }}</p>
    </header>
    <div class="settings-grid">
      <div @click="isApiSettingsOpen = true" class="settings-card settings-card--purple">
        <div class="settings-card__icon settings-card__icon--purple"><KeyRound :size="20" color="var(--purple-400)" /></div>
        <h3 class="settings-card__title">{{ t('settings.apiSettings.title') }}</h3>
        <p class="settings-card__desc">{{ t('settings.apiSettings.desc') }}</p>
      </div>
      <div @click="openDataSyncModal" class="settings-card settings-card--blue">
        <div class="settings-card__icon settings-card__icon--blue"><DatabaseBackup :size="20" color="var(--blue-400)" /></div>
        <h3 class="settings-card__title">{{ t('settings.dataSync.title') }}</h3>
        <p class="settings-card__desc">{{ t('settings.dataSync.desc') }}</p>
      </div>
      <div @click="isAutoBackupSettingsOpen = true" class="settings-card settings-card--purple">
        <div class="settings-card__icon settings-card__icon--purple"><Clock :size="20" color="var(--purple-400)" /></div>
        <h3 class="settings-card__title">{{ t('settings.autoBackup.title') }}</h3>
        <p class="settings-card__desc">{{ t('settings.autoBackup.desc') }}</p>
      </div>
      <div @click="isThemeSettingsOpen = true" class="settings-card settings-card--orange">
        <div class="settings-card__icon settings-card__icon--orange"><Sun :size="20" color="var(--orange-400)" /></div>
        <h3 class="settings-card__title">{{ t('settings.themeSettings.title') }}</h3>
        <p class="settings-card__desc">{{ t('settings.themeSettings.desc') }}</p>
      </div>
      <div @click="openDailyPrompt" class="settings-card settings-card--cyan">
        <div class="settings-card__icon settings-card__icon--cyan"><Sparkles :size="20" color="var(--cyan-400)" /></div>
        <h3 class="settings-card__title">{{ t('settings.dailyPrompt.title') }}</h3>
        <p class="settings-card__desc">{{ t('settings.dailyPrompt.desc') }}</p>
      </div>
      <div @click="openReviewPrompt" class="settings-card settings-card--green">
        <div class="settings-card__icon settings-card__icon--green"><Archive :size="20" color="var(--green-400)" /></div>
        <h3 class="settings-card__title">{{ t('settings.reviewPrompt.title') }}</h3>
        <p class="settings-card__desc">{{ t('settings.reviewPrompt.desc') }}</p>
      </div>
      <div @click="isDemoDataModalOpen = true" class="settings-card settings-card--green">
        <div class="settings-card__icon settings-card__icon--green"><LayoutDashboard :size="20" color="var(--green-400)" /></div>
        <h3 class="settings-card__title">{{ t('settings.demoData.title') }}</h3>
        <p class="settings-card__desc">{{ t('settings.demoData.desc') }}</p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { KeyRound, Sparkles, Archive, LayoutDashboard, DatabaseBackup, Clock, Sun } from 'lucide-vue-next';
import { useI18n } from '../composables/useI18n.js';
import { isApiSettingsOpen, openDailyPrompt, openReviewPrompt } from '../composables/useSettings.js';
import { isDemoDataModalOpen } from '../composables/useDemoData.js';
import { openDataSyncModal, isAutoBackupSettingsOpen, isThemeSettingsOpen } from '../composables/useDataSync.js';

const { t } = useI18n();
</script>
