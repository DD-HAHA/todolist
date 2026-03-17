export const enUS = {
  // App
  appName: 'FocusLog',
  
  // Navigation
  tabs: {
    today: 'Today',
    upcoming: 'Upcoming',
    history: 'History',
    review: 'Review',
    archive: 'Archive',
    settings: 'Settings',
  },
  
  // Theme
  theme: {
    toggle: 'Toggle Theme',
    light: 'Light Mode',
    dark: 'Dark Mode',
  },
  
  // Language
  language: {
    title: 'Language',
    zhCN: '简体中文',
    enUS: 'English',
  },
  
  // Sidebar
  sidebar: {
    tags: 'Tags',
    clearFilter: 'Clear Filter',
    noTags: 'No tags yet. You can add them by clicking "Settings" in the tag popup of the task input.',
    databaseConnected: 'SQLite Connected: focus_log.db',
    databaseConnecting: 'Connecting to database...',
  },
  
  // Today View
  today: {
    title: 'Today',
    subtitle: 'Start a new day, focus on the present',
    placeholder: 'Add a new task, press Enter to confirm...',
    noActiveTodos: 'No active tasks',
    noCompletedTodos: 'No completed tasks today',
  },
  
  // Todo Items
  todo: {
    moveToday: 'Move to Today',
    snooze: 'Snooze',
    tags: 'Tags',
    edit: 'Edit',
    delete: 'Delete',
    completed: 'Completed',
  },
  
  // Settings
  settings: {
    title: 'Settings',
    subtitle: 'Configure API providers, data sync, and custom AI prompts',
    apiSettings: {
      title: 'API Settings',
      desc: 'Configure provider, API key, and model name',
    },
    dataSync: {
      title: 'Data Sync',
      desc: 'Import/export JSON data, configure WebDAV cloud backup',
    },
    autoBackup: {
      title: 'Auto Backup',
      desc: 'Configure WebDAV automatic backup and retention policy',
    },
    dailyPrompt: {
      title: 'AI Daily Prompt',
      desc: 'Customize the system prompt for daily summaries',
    },
    reviewPrompt: {
      title: 'AI Review Prompt',
      desc: 'Customize the system prompt for review reports',
    },
    demoData: {
      title: 'Demo Data',
      desc: 'Generate sample tasks and archives to experience full workflow',
    },
    themeSettings: {
      title: 'Theme Settings',
      desc: 'Configure theme switching mode and schedule',
    },
  },
  
  // Data Sync
  dataSync: {
    title: 'Data Sync',
    local: {
      title: 'Local Import/Export',
      desc: 'Export data to JSON file or import data from JSON file',
      export: 'Export Data',
      import: 'Import Data',
    },
    webdav: {
      title: 'WebDAV Cloud Backup',
      desc: 'Backup data to cloud servers using WebDAV protocol',
      config: 'Configure WebDAV',
      backup: 'Backup to WebDAV',
      restore: 'Restore from WebDAV',
    },
    settings: {
      title: 'WebDAV Settings',
      url: 'WebDAV URL',
      username: 'Username',
      password: 'Password',
      path: 'Backup Path',
      save: 'Save',
      cancel: 'Cancel',
    },
    autoBackup: {
      title: 'WebDAV Auto Backup',
      enabled: 'Enable Auto Backup',
      enabledDesc: 'Automatically backup data to WebDAV server',
      interval: 'Backup Interval',
      intervalDesc: 'How often to perform automatic backup',
      mode: 'Backup Mode',
      modeDesc: 'Choose how backup files are handled',
      modes: {
        overwrite: 'Overwrite Mode',
        overwriteDesc: 'Overwrite the same file on each backup',
        timestamp: 'Timestamp Mode',
        timestampDesc: 'Create new file on each backup (with timestamp)',
      },
      retention: 'Retention Count',
      retentionDesc: 'Keep the last N backup files (0 for unlimited)',
      lastBackup: 'Last Backup',
      never: 'Never',
      now: 'Backup Now',
    },
    intervals: {
      hourly: 'Hourly',
      daily: 'Daily',
      weekly: 'Weekly',
      monthly: 'Monthly',
    },
    status: {
      preparing: 'Preparing backup data...',
      uploading: 'Uploading to WebDAV...',
      downloading: 'Downloading from WebDAV...',
      restoring: 'Restoring data...',
      backupSuccess: 'Backup successful',
      restoreSuccess: 'Restore successful',
      importSuccess: 'Import complete',
      exportSuccess: 'Export successful',
      autoBackupEnabled: 'Auto backup enabled',
      autoBackupDisabled: 'Auto backup disabled',
      failed: 'Failed',
    },
    messages: {
      exportSuccess: 'Data exported successfully',
      importSuccess: 'Data imported successfully, please restart app',
      restoreSuccess: 'Restore successful, please restart app',
      backupSuccess: 'Backup successful',
      autoBackupSuccess: 'Auto backup successful',
      importConfirm: 'Importing data will overwrite all current data. Are you sure you want to continue?',
      restoreConfirm: 'Restoring data will overwrite all current data. Are you sure you want to continue?',
    },
    notifications: {
      exportSuccess: 'Export Successful',
      exportSuccessDetail: 'Data has been successfully exported to local file',
      importSuccess: 'Import Successful',
      importSuccessDetail: 'Data has been successfully imported, please restart app to view',
      restoreSuccess: 'Restore Successful',
      restoreSuccessDetail: 'Data has been successfully restored from WebDAV, please restart app',
      backupSuccess: 'Backup Successful',
      backupSuccessDetail: 'Data has been successfully backed up to WebDAV',
      autoBackupSuccess: 'Auto Backup Successful',
      autoBackupSuccessDetail: 'Data has been automatically backed up to WebDAV',
      taskCompleted: 'Task Completed',
    },
  },
  
  // Theme
  themeSettings: {
    title: 'Theme Settings',
    mode: 'Theme Mode',
    modeDesc: 'Choose how to switch themes',
    modes: {
      auto: 'Follow System',
      autoDesc: 'Automatically switch based on system theme',
      light: 'Always Light',
      lightDesc: 'Always keep light theme',
      dark: 'Always Dark',
      darkDesc: 'Always keep dark theme',
      scheduled: 'Scheduled',
      scheduledDesc: 'Automatically switch based on schedule',
    },
    schedule: {
      darkStartTime: 'Dark Mode Start Time',
      darkEndTime: 'Dark Mode End Time',
    },
    save: 'Save Settings',
  },
  
  // Upcoming View
  upcoming: {
    title: 'Upcoming',
    subtitle: 'Manage future task plans',
    tomorrow: 'Tomorrow',
    noUpcoming: 'No upcoming tasks',
    moveToday: 'Move to Today',
  },
  
  // History View
  history: {
    title: 'History',
    subtitle: 'View past task records',
    noHistory: 'No history records',
  },
  
  // Review View
  review: {
    title: 'Review',
    subtitle: 'Generate periodic review reports',
    generate: 'Generate Review',
    save: 'Save Archive',
    generating: 'Generating...',
    noContent: 'No review content',
    startDate: 'Start Date',
    endDate: 'End Date',
    tasksProcessed: 'Tasks Processed',
    archivesProcessed: 'Archives Processed',
  },
  
  // Archive View
  archive: {
    title: 'Archive',
    subtitle: 'View and manage historical summaries',
    noArchives: 'No archive records',
  },
  
  // Summary
  summary: {
    title: 'Daily Summary',
    subtitle: 'Use AI to generate today\'s work summary',
    generate: 'Generate Today\'s Summary',
    generating: 'Generating...',
    save: 'Save Archive',
    settings: 'Go to Settings',
    noContent: 'No summary content',
  },
  
  // Toast Messages
  toast: {
    saved: 'Saved',
    deleted: 'Deleted',
    error: 'An error occurred',
    loading: 'Loading...',
  },
  
  // Common
  common: {
    save: 'Save',
    cancel: 'Cancel',
    delete: 'Delete',
    edit: 'Edit',
    confirm: 'Confirm',
    close: 'Close',
    loading: 'Loading...',
    error: 'Error',
    success: 'Success',
  },
  
  // Notifications
  notification: {
    taskCompleted: 'Completed',
  },
  
  // Modals
  modal: {
    close: 'Close',
  },
};