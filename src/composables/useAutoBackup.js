import { ref, watch } from 'vue';
import { db } from './useDb.js';
import { backupToWebDav, syncStatus, isSyncing } from './useDataSync.js';
import i18n from '../locales/index.js';

const t = (...args) => i18n.global.t(...args);

export const autoBackupEnabled = ref(false);
export const autoBackupInterval = ref('daily');
export const autoBackupMode = ref('overwrite');
export const autoBackupRetention = ref(5);
export const lastBackupTime = ref('');

let backupTimer = null;

export async function loadAutoBackupSettings() {
  try {
    const rows = await db.value.select('SELECT * FROM settings WHERE id = 1');
    if (rows.length > 0) {
      const row = rows[0];
      autoBackupEnabled.value = !!row.auto_backup_enabled;
      autoBackupInterval.value = row.auto_backup_interval || 'daily';
      autoBackupMode.value = row.auto_backup_mode || 'overwrite';
      autoBackupRetention.value = row.auto_backup_retention || 5;
      lastBackupTime.value = row.last_backup_time || '';
    }
  } catch (e) {
    console.error('loadAutoBackupSettings failed:', e);
  }
}

async function persistAutoBackupSettings() {
  await db.value.execute(
    `INSERT OR REPLACE INTO settings (id, auto_backup_enabled, auto_backup_interval, auto_backup_mode, auto_backup_retention, last_backup_time)
     VALUES (1, ?, ?, ?, ?, ?)`,
    [autoBackupEnabled.value ? 1 : 0, autoBackupInterval.value, autoBackupMode.value, autoBackupRetention.value, lastBackupTime.value]
  );
}

export async function saveAutoBackupSettings(showToast) {
  try {
    await persistAutoBackupSettings();
    showToast(t('dataSync.status.autoBackupEnabled'), 2000);
    restartAutoBackup();
  } catch (e) {
    console.error('saveAutoBackupSettings failed:', e);
  }
}

export async function performAutoBackup() {
  if (!autoBackupEnabled.value || !db.value || isSyncing.value) return;
  
  try {
    const webdavSettings = await db.value.select('SELECT * FROM settings WHERE id = 1');
    if (!webdavSettings.length) return;
    
    const { webdav_url, webdav_username, webdav_password } = webdavSettings[0];
    if (!webdav_url || !webdav_username || !webdav_password) return;
    
    await backupToWebDav(() => {});
    
    lastBackupTime.value = new Date().toISOString();
    await persistAutoBackupSettings();
    
    return true;
  } catch (e) {
    console.error('performAutoBackup failed:', e);
    return false;
  }
}

function getIntervalMs(interval) {
  switch (interval) {
    case 'hourly': return 60 * 60 * 1000;
    case 'daily': return 24 * 60 * 60 * 1000;
    case 'weekly': return 7 * 24 * 60 * 60 * 1000;
    case 'monthly': return 30 * 24 * 60 * 60 * 1000;
    default: return 24 * 60 * 60 * 1000;
  }
}

export function startAutoBackup() {
  stopAutoBackup();
  
  if (!autoBackupEnabled.value) return;
  
  const intervalMs = getIntervalMs(autoBackupInterval.value);
  
  backupTimer = setInterval(() => {
    performAutoBackup();
  }, intervalMs);
}

export function stopAutoBackup() {
  if (backupTimer) {
    clearInterval(backupTimer);
    backupTimer = null;
  }
}

export function restartAutoBackup() {
  stopAutoBackup();
  startAutoBackup();
}

watch([autoBackupEnabled, autoBackupInterval], () => {
  restartAutoBackup();
});