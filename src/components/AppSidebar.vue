<template>
  <aside class="sidebar">
    <div class="sidebar__logo">
      <img src="../assets/logo_simple_padded.png" alt="FocusLog Logo" class="logo-image" />
      <span class="logo-text">{{ t('appName') }}</span>
    </div>

    <nav class="sidebar__nav">
      <div
        v-for="tab in tabs" :key="tab.id"
        @click="$emit('update:currentView', tab.id)"
        :class="['nav-item', currentView === tab.id && 'nav-item--active']"
      >
        <component :is="tab.icon" :size="18" />
        <span>{{ t(`tabs.${tab.id}`) }}</span>
      </div>
    </nav>

    <!-- Theme toggle -->
    <button type="button" class="theme-toggle-btn" @click="toggleTheme" :title="isDark ? t('theme.light') : t('theme.dark')">
      <component :is="isDark ? Sun : Moon" :size="15" />
      <span>{{ isDark ? t('theme.light') : t('theme.dark') }}</span>
    </button>

    <!-- Language toggle -->
    <button type="button" class="theme-toggle-btn" @click="toggleLanguage" :title="t('language.title')">
      <Languages :size="15" />
      <span>{{ currentLanguage === 'zh-CN' ? '简体中文' : 'English' }}</span>
    </button>

    <div class="sidebar__tags">
      <div class="section-header">
        <span>{{ t('sidebar.tags') }}</span>
        <button v-if="activeTagFilterId" type="button" class="section-clear" @click="clearTagFilter">{{ t('sidebar.clearFilter') }}</button>
      </div>
      <div v-if="tags.length === 0" class="sidebar__empty">{{ t('sidebar.noTags') }}</div>
      <div v-else>
        <button
          v-for="tag in tags" :key="tag.id"
          type="button"
          :class="['tag-filter-btn', activeTagFilterId === tag.id && 'tag-filter-btn--active']"
          @click="toggleTagFilter(tag.id)"
        >
          <div class="tag-filter-btn__left">
            <span class="tag-dot" :style="{ backgroundColor: tag.color }"></span>
            <span>{{ tag.name }}</span>
          </div>
          <span class="tag-count">{{ tagIncompleteCount[tag.id] || 0 }}</span>
        </button>
      </div>
    </div>

    <div class="sidebar__status">
      <div class="status-row">
        <div :class="['status-dot', dbReady ? 'status-dot--ok' : 'status-dot--wait']"></div>
        <span>{{ dbReady ? t('sidebar.databaseConnected') : t('sidebar.databaseConnecting') }}</span>
      </div>
      <p v-if="initError" class="status-error">{{ initError }}</p>
    </div>
  </aside>
</template>

<script setup>
import { LayoutDashboard, Calendar, Archive, Sparkles, Settings, CalendarClock, Sun, Moon, Languages } from 'lucide-vue-next';
import { tags } from '../composables/useTags.js';
import { activeTagFilterId, tagIncompleteCount, toggleTagFilter, clearTagFilter } from '../composables/useTodos.js';
import { isDark, toggleTheme } from '../composables/useTheme.js';
import { useI18n } from '../composables/useI18n.js';

const { t, currentLanguage, setLanguage } = useI18n();

defineProps({ currentView: { type: String, required: true }, dbReady: { type: Boolean, default: false }, initError: { type: String, default: '' } });
defineEmits(['update:currentView']);

const tabs = [
  { id: 'today',    icon: LayoutDashboard },
  { id: 'upcoming', icon: CalendarClock },
  { id: 'history',  icon: Calendar },
  { id: 'review',   icon: Sparkles },
  { id: 'archive',  icon: Archive },
  { id: 'settings', icon: Settings },
];

function toggleLanguage() {
  setLanguage(currentLanguage.value === 'zh-CN' ? 'en-US' : 'zh-CN');
}
</script>
