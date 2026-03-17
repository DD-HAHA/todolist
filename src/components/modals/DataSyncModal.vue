<template>
  <div v-if="isDataSyncModalOpen" class="modal-overlay" @click.self="close">
    <div class="modal">
      <header class="modal__header">
        <h2>{{ t('dataSync.title') }}</h2>
        <button @click="close" class="modal__close">&times;</button>
      </header>
      <div class="modal__body">
        <div v-if="syncStatus" class="sync-status" :class="{ 'sync-status--error': syncStatus.includes(t('dataSync.status.failed')) }">
          {{ syncStatus }}
        </div>
        
        <section class="sync-section">
          <h3>
            <HardDrive :size="18" />
            {{ t('dataSync.local.title') }}
          </h3>
          <p class="sync-section__desc">{{ t('dataSync.local.desc') }}</p>
          <div class="sync-actions">
            <button @click="handleExport" :disabled="isSyncing" class="btn--outline">
              <Download :size="16" />
              {{ t('dataSync.local.export') }}
            </button>
            <button @click="handleImport" :disabled="isSyncing" class="btn--outline">
              <Upload :size="16" />
              {{ t('dataSync.local.import') }}
            </button>
          </div>
        </section>

        <section class="sync-section">
          <h3>
            <Cloud :size="18" />
            {{ t('dataSync.webdav.title') }}
          </h3>
          <p class="sync-section__desc">{{ t('dataSync.webdav.desc') }}</p>
          <div class="sync-actions">
            <button @click="openWebDavSettings" :disabled="isSyncing" class="btn--outline">
              <Settings :size="16" />
              {{ t('dataSync.webdav.config') }}
            </button>
            <button @click="handleBackup" :disabled="isSyncing" class="btn--primary">
              <UploadCloud :size="16" />
              {{ t('dataSync.webdav.backup') }}
            </button>
            <button @click="handleRestore" :disabled="isSyncing" class="btn--warning">
              <DownloadCloud :size="16" />
              {{ t('dataSync.webdav.restore') }}
            </button>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
import { HardDrive, Cloud, Download, Upload, UploadCloud, DownloadCloud, Settings } from 'lucide-vue-next';
import { useI18n } from '../../composables/useI18n.js';
import { isDataSyncModalOpen, exportToJson, importFromJson, backupToWebDav, restoreFromWebDav, openWebDavSettings, syncStatus, isSyncing } from '../../composables/useDataSync.js';
import { isWebDavSettingsOpen } from '../../composables/useDataSync.js';

const { t } = useI18n();

function close() {
  isDataSyncModalOpen.value = false;
  syncStatus.value = '';
}

function handleExport() {
  exportToJson(props.showToast);
}

function handleImport() {
  if (confirm(t('dataSync.messages.importConfirm'))) {
    importFromJson(props.showToast);
  }
}

function handleBackup() {
  backupToWebDav(props.showToast);
}

function handleRestore() {
  if (confirm(t('dataSync.messages.restoreConfirm'))) {
    restoreFromWebDav(props.showToast);
  }
}

const props = defineProps({
  showToast: Function
});
</script>

<style scoped>
.sync-status {
  padding: 12px;
  margin-bottom: 16px;
  background: var(--bg-tertiary);
  border-radius: 8px;
  font-size: 14px;
}

.sync-status--error {
  background: rgba(239, 68, 68, 0.1);
  color: var(--red-400);
}

.sync-section {
  padding: 20px;
  margin-bottom: 16px;
  background: var(--bg-secondary);
  border-radius: 8px;
}

.sync-section h3 {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0 0 8px 0;
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary);
}

.sync-section__desc {
  margin: 0 0 16px 0;
  font-size: 14px;
  color: var(--text-secondary);
}

.sync-actions {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.sync-actions button {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;
}

.sync-actions button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.btn--outline {
  background: transparent;
  border: 1px solid var(--border-color);
  color: var(--text-primary);
}

.btn--outline:hover:not(:disabled) {
  background: var(--bg-tertiary);
}

.btn--primary {
  background: var(--primary-color);
  border: 1px solid var(--primary-color);
  color: white;
}

.btn--primary:hover:not(:disabled) {
  opacity: 0.9;
}

.btn--warning {
  background: rgba(245, 158, 11, 0.1);
  border: 1px solid rgba(245, 158, 11, 0.3);
  color: #f59e0b;
}

.btn--warning:hover:not(:disabled) {
  background: rgba(245, 158, 11, 0.2);
}
</style>