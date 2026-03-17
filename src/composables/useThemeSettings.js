import { ref, watch, onMounted, onUnmounted } from 'vue';
import { db } from './useDb.js';
import { theme, isDark, toggleTheme } from './useTheme.js';

let themeCheckTimer = null;

export async function loadThemeSettings() {
  try {
    const rows = await db.value.select('SELECT * FROM settings WHERE id = 1');
    if (rows.length > 0) {
      const row = rows[0];
      themeMode.value = row.theme_mode || 'auto';
      darkStartTime.value = row.dark_start_time || '22:00';
      darkEndTime.value = row.dark_end_time || '07:00';
      applyThemeMode();
    }
  } catch (e) {
    console.error('loadThemeSettings failed:', e);
  }
}

async function persistThemeSettings() {
  await db.value.execute(
    `INSERT OR REPLACE INTO settings (id, theme_mode, dark_start_time, dark_end_time)
     VALUES (1, ?, ?, ?)`,
    [themeMode.value, darkStartTime.value, darkEndTime.value]
  );
}

export async function saveThemeSettings(showToast) {
  try {
    await persistThemeSettings();
    applyThemeMode();
    showToast('Settings saved', 2000);
  } catch (e) {
    console.error('saveThemeSettings failed:', e);
  }
}

export function applyThemeMode() {
  stopThemeSchedule();
  
  switch (themeMode.value) {
    case 'auto':
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        if (theme.value !== 'dark') toggleTheme();
      } else {
        if (theme.value !== 'light') toggleTheme();
      }
      break;
      
    case 'light':
      if (theme.value !== 'light') toggleTheme();
      break;
      
    case 'dark':
      if (theme.value !== 'dark') toggleTheme();
      break;
      
    case 'scheduled':
      applyScheduledTheme();
      startThemeSchedule();
      break;
  }
}

function applyScheduledTheme() {
  const now = new Date();
  const currentTime = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
  
  const isDarkTime = isTimeInDarkRange(currentTime);
  const shouldBeDark = isDarkTime ? 'dark' : 'light';
  
  if (theme.value !== shouldBeDark) {
    toggleTheme();
  }
}

function isTimeInDarkRange(time) {
  const [currentHour, currentMinute] = time.split(':').map(Number);
  const [startHour, startMinute] = darkStartTime.value.split(':').map(Number);
  const [endHour, endMinute] = darkEndTime.value.split(':').map(Number);
  
  const currentMinutes = currentHour * 60 + currentMinute;
  const startMinutes = startHour * 60 + startMinute;
  const endMinutes = endHour * 60 + endMinute;
  
  if (startMinutes < endMinutes) {
    return currentMinutes >= startMinutes && currentMinutes < endMinutes;
  } else {
    return currentMinutes >= startMinutes || currentMinutes < endMinutes;
  }
}

function startThemeSchedule() {
  stopThemeSchedule();
  
  themeCheckTimer = setInterval(() => {
    if (themeMode.value === 'scheduled') {
      applyScheduledTheme();
    }
  }, 60000);
}

function stopThemeSchedule() {
  if (themeCheckTimer) {
    clearInterval(themeCheckTimer);
    themeCheckTimer = null;
  }
}

onMounted(() => {
  startThemeSchedule();
});

onUnmounted(() => {
  stopThemeSchedule();
});