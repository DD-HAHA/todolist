export const zhCN = {
  // App
  appName: 'FocusLog',
  
  // Navigation
  tabs: {
    today: '今日待办',
    upcoming: '未来规划',
    history: '历史回顾',
    review: '回顾中心',
    archive: '总结存档',
    settings: '设置',
  },
  
  // Theme
  theme: {
    toggle: '切换主题',
    light: '浅色模式',
    dark: '深色模式',
  },
  
  // Language
  language: {
    title: '语言',
    zhCN: '简体中文',
    enUS: 'English',
  },
  
  // Sidebar
  sidebar: {
    tags: '标签',
    clearFilter: '清除筛选',
    noTags: '暂无标签，可在任务输入框标签弹窗中点击「设置」添加。',
    databaseConnected: 'SQLite 已连接: focus_log.db',
    databaseConnecting: '正在连接数据库...',
  },
  
  // Today View
  today: {
    title: '今日待办',
    subtitle: '开始新的一天，专注当下',
    placeholder: '添加新任务，按 Enter 键确认...',
    noActiveTodos: '暂无待办任务',
    noCompletedTodos: '今日暂无完成任务',
  },
  
  // Todo Items
  todo: {
    moveToday: '移至今天',
    snooze: '推迟',
    tags: '标签',
    edit: '编辑',
    delete: '删除',
    completed: '已完成',
  },
  
  // Settings
  settings: {
    title: '设置',
    subtitle: '配置 API 供应商、数据同步及自定义 AI 提示词',
    apiSettings: {
      title: 'API 设置',
      desc: '配置供应商、密钥及模型名称',
    },
    dataSync: {
      title: '数据同步',
      desc: '导入导出JSON数据，配置WebDAV云备份',
    },
    autoBackup: {
      title: '自动备份',
      desc: '配置WebDAV自动备份和保留策略',
    },
    dailyPrompt: {
      title: 'AI 日志提示词',
      desc: '自定义每日总结的系统 Prompt',
    },
    reviewPrompt: {
      title: 'AI 归档提示词',
      desc: '自定义回顾报告的系统 Prompt',
    },
    demoData: {
      title: '体验数据',
      desc: '一键生成示例任务与存档体验完整的应用工作流',
    },
    themeSettings: {
      title: '主题设置',
      desc: '配置主题切换模式和时间',
    },
  },
  
  // Data Sync
  dataSync: {
    title: '数据同步',
    local: {
      title: '本地导入/导出',
      desc: '导出数据到JSON文件或从JSON文件导入数据',
      export: '导出数据',
      import: '导入数据',
    },
    webdav: {
      title: 'WebDAV 云备份',
      desc: '使用WebDAV协议备份数据到云端服务器',
      config: '配置WebDAV',
      backup: '备份到WebDAV',
      restore: '从WebDAV恢复',
    },
    settings: {
      title: 'WebDAV 设置',
      url: 'WebDAV URL',
      username: '用户名',
      password: '密码',
      path: '备份路径',
      save: '保存',
      cancel: '取消',
    },
    autoBackup: {
      title: 'WebDAV 自动备份',
      enabled: '启用自动备份',
      enabledDesc: '自动将数据备份到WebDAV服务器',
      interval: '备份周期',
      intervalDesc: '多久进行一次自动备份',
      mode: '备份模式',
      modeDesc: '选择备份文件的处理方式',
      modes: {
        overwrite: '覆盖模式',
        overwriteDesc: '每次备份覆盖同一个文件',
        timestamp: '时间戳模式',
        timestampDesc: '每次备份创建新文件（带时间戳）',
      },
      retention: '保留份数',
      retentionDesc: '保留最近N份备份文件（0为不限制）',
      lastBackup: '上次备份',
      never: '从未备份',
      now: '立即备份',
    },
    intervals: {
      hourly: '每小时',
      daily: '每天',
      weekly: '每周',
      monthly: '每月',
    },
    status: {
      preparing: '准备备份数据...',
      uploading: '正在上传到WebDAV...',
      downloading: '正在从WebDAV下载...',
      restoring: '正在恢复数据...',
      backupSuccess: '备份成功',
      restoreSuccess: '恢复成功',
      importSuccess: '导入完成',
      exportSuccess: '导出成功',
      autoBackupEnabled: '自动备份已启用',
      autoBackupDisabled: '自动备份已禁用',
      failed: '失败',
    },
    messages: {
      exportSuccess: '数据导出成功',
      importSuccess: '数据导入成功，请重启应用',
      restoreSuccess: '恢复成功，请重启应用',
      backupSuccess: '备份成功',
      autoBackupSuccess: '自动备份成功',
      importConfirm: '导入数据将覆盖当前所有数据，确定要继续吗？',
      restoreConfirm: '恢复数据将覆盖当前所有数据，确定要继续吗？',
    },
    notifications: {
      exportSuccess: '导出成功',
      exportSuccessDetail: '数据已成功导出到本地文件',
      importSuccess: '导入成功',
      importSuccessDetail: '数据已成功导入，请重启应用以查看',
      restoreSuccess: '恢复成功',
      restoreSuccessDetail: '数据已成功从WebDAV恢复，请重启应用',
      backupSuccess: '备份成功',
      backupSuccessDetail: '数据已成功备份到WebDAV',
      autoBackupSuccess: '自动备份成功',
      autoBackupSuccessDetail: '数据已自动备份到WebDAV',
      taskCompleted: '任务完成',
    },
  },
  // Theme
  themeSettings: {
    title: '主题设置',
    mode: '主题模式',
    modeDesc: '选择主题切换方式',
    modes: {
      auto: '跟随系统',
      autoDesc: '根据系统主题自动切换',
      light: '始终浅色',
      lightDesc: '始终保持浅色主题',
      dark: '始终深色',
      darkDesc: '始终保持深色主题',
      scheduled: '定时切换',
      scheduledDesc: '根据设定时间自动切换',
    },
    schedule: {
      darkStartTime: '深色模式开始时间',
      darkEndTime: '深色模式结束时间',
    },
    save: '保存设置',
  },
  
  // Upcoming View
  upcoming: {
    title: '未来规划',
    subtitle: '管理未来的任务计划',
    tomorrow: '明天',
    noUpcoming: '暂无未来任务',
    moveToday: '移至今天',
  },
  
  // History View
  history: {
    title: '历史回顾',
    subtitle: '查看过往任务记录',
    noHistory: '暂无历史记录',
  },
  
  // Review View
  review: {
    title: '回顾中心',
    subtitle: '生成阶段性回顾报告',
    generate: '生成回顾报告',
    save: '保存归档',
    generating: '生成中...',
    noContent: '暂无回顾内容',
    startDate: '开始日期',
    endDate: '结束日期',
    tasksProcessed: '处理任务数',
    archivesProcessed: '处理存档数',
  },
  
  // Archive View
  archive: {
    title: '总结存档',
    subtitle: '查看和管理历史总结',
    noArchives: '暂无存档记录',
  },
  
  // Summary
  summary: {
    title: '今日总结',
    subtitle: '使用AI生成今日工作总结',
    generate: '生成今日总结',
    generating: '生成中...',
    save: '保存归档',
    settings: '前往设置',
    noContent: '暂无总结内容',
  },
  
  // Toast Messages
  toast: {
    saved: '已保存',
    deleted: '已删除',
    error: '发生错误',
    loading: '加载中...',
  },
  
  // Common
  common: {
    save: '保存',
    cancel: '取消',
    delete: '删除',
    edit: '编辑',
    confirm: '确定',
    close: '关闭',
    loading: '加载中...',
    error: '错误',
    success: '成功',
  },
  
  // Notifications
  notification: {
    taskCompleted: '已完成',
  },
  
  // Modals
  modal: {
    close: '关闭',
  },
};