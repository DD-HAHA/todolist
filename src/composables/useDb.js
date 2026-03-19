// ── Database singleton ─────────────────────────────────────────
import { ref } from 'vue';
import Database from '@tauri-apps/plugin-sql';

export const db = ref(null);
let dbPromise = null;

export async function openDb() {
  if (db.value) return db.value;
  if (dbPromise) return dbPromise;
  
  dbPromise = Database.load('sqlite:focus_log.db')
    .then((database) => {
      db.value = database;
      dbPromise = null;
      return database;
    })
    .catch((error) => {
      dbPromise = null;
      throw error;
    });
  
  return dbPromise;
}
