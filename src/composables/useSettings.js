// ── Settings composable ────────────────────────────────────────
import { ref } from 'vue';
import { db } from './useDb.js';

export const apiKey = ref('');
export const apiKeyInput = ref('');
export const apiProvider = ref('deepseek');
export const apiBaseUrl = ref('https://api.deepseek.com');
export const apiModel = ref('deepseek-chat');
export const apiProviderInput = ref('deepseek');
export const apiBaseUrlInput = ref('https://api.deepseek.com');
export const apiModelInput = ref('deepseek-chat');

export const customDailyPrompt = ref('');
export const customDailyPromptInput = ref('');
export const customReviewPrompt = ref('');
export const customReviewPromptInput = ref('');

export const isApiSettingsOpen = ref(false);
export const isDailyPromptOpen = ref(false);
export const isReviewPromptOpen = ref(false);

export const DEFAULT_DAILY_PROMPT_CN = `你是一名严谨的产品助理。请根据提供的已完成任务，生成一份简短、结构简单的 Markdown 格式「产品经理工作日报」。要求：
1) 仅针对实际任务进行总结，严禁虚构内容；
2) 重点突出与 AI、大模型、提示词或自动化相关的工作，体现 AI 在实际业务中的应用；
3) 若任务中不涉及 AI 内容，请勿强行编造；
4) 语气专业、朴素，避免使用华丽辞藻；
5) 使用第三人称或中性描述，避免使用"我"；
6) 以 Markdown 小标题和列表形式组织，每条描述建议在 20 字以内；
7) 若有多次拖延的任务，请在末尾以幽默的口吻提醒用户，或建议拆解该任务。`;

export const DEFAULT_REVIEW_PROMPT_CN = `你是一名严谨的产品助理。请基于提供的任务记录和 Markdown 日志，生成一份阶段性工作回顾报告。要求：
1) 总结出三个具有代表性的里程碑事件；
2) 每个里程碑需包含背景、关键动作和可见产出，避免笼统描述；
3) 基于当前节奏，提供 3-5 条具有可操作性的下一阶段建议，需体现优先级；
4) 结构要求：阶段概览、三大里程碑、下阶段计划；
5) 语气专业克制，严禁夸大或虚构。`;

export const dailyPromptPresets = [
  {
    id: 'product_manager',
    label: '产品经理',
    icon: '📊',
    prompt: `你是一名严谨的产品助理。请根据提供的已完成任务，生成一份简短、结构简单的 Markdown 格式「产品经理工作日报」。要求：
1) 仅针对实际任务进行总结，严禁虚构内容；
2) 重点突出与 AI、大模型、提示词或自动化相关的工作，体现 AI 在实际业务中的应用；
3) 若任务中不涉及 AI 内容，请勿强行编造；
4) 语气专业、朴素，避免使用华丽辞藻；
5) 使用第三人称或中性描述，避免使用"我"；
6) 以 Markdown 小标题和列表形式组织，每条描述建议在 20 字以内；
7) 若有多次拖延的任务，请在末尾以幽默的口吻提醒用户，或建议拆解该任务。`
  },
  {
    id: 'developer',
    label: '开发工程师',
    icon: '👨‍💻',
    prompt: `你是一名技术汇报助手。请根据提供的已完成任务，生成一份简洁的 Markdown 格式「开发工作日报」。要求：
1) 按功能模块或项目分类整理任务；
2) 突出技术难点、代码优化、Bug 修复等技术性工作；
3) 标注涉及的技术栈或工具（如 Git、Docker、CI/CD 等）；
4) 简要说明代码变更的影响范围（前端/后端/数据库等）；
5) 以技术视角描述，使用专业术语；
6) 每条描述简洁明了，避免冗长；
7) 若有阻塞项或待办事项，在末尾标注。`
  },
  {
    id: 'designer',
    label: '设计师',
    icon: '🎨',
    prompt: `你是一名设计工作汇报助手。请根据提供的已完成任务，生成一份简洁的 Markdown 格式「设计工作日报」。要求：
1) 按设计类型分类（UI/UX/品牌/动效等）；
2) 突出设计决策和用户研究相关工作；
3) 提及使用的工具（Figma、Sketch、PS 等）；
4) 简要说明设计方案的迭代方向；
5) 语言简洁，注重设计价值表达；
6) 每条描述控制在 20 字以内；
7) 可适当加入设计灵感或设计趋势参考。`
  },
  {
    id: 'operation',
    label: '运营',
    icon: '📈',
    prompt: `你是一名运营工作汇报助手。请根据提供的已完成任务，生成一份简洁的 Markdown 格式「运营工作日报」。要求：
1) 按运营模块分类（用户运营/内容运营/活动运营/数据运营等）；
2) 突出关键指标和数据变化（如有）；
3) 强调用户增长、留存、转化相关工作；
4) 提及跨部门协作事项；
5) 语言务实，注重结果导向；
6) 每条描述简洁，突出业务价值；
7) 可在末尾补充明日重点计划。`
  },
  {
    id: 'project_manager',
    label: '项目经理',
    icon: '📋',
    prompt: `你是一名项目管理汇报助手。请根据提供的已完成任务，生成一份简洁的 Markdown 格式「项目管理工作日报」。要求：
1) 按项目或阶段分类整理任务；
2) 突出进度跟踪、风险识别、资源协调等工作；
3) 标注项目里程碑和关键节点；
4) 关注跨团队协作和沟通事项；
5) 语言严谨，注重可追溯性；
6) 每条描述控制在 20 字以内；
7) 在末尾标注风险项和待跟进事项。`
  },
  {
    id: 'general',
    label: '通用模板',
    icon: '📝',
    prompt: `请根据提供的已完成任务，生成一份简洁的 Markdown 格式「工作日报」。要求：
1) 仅针对实际任务进行总结，不添加未完成的内容；
2) 按任务类型或优先级分组；
3) 语言简洁明了，每条描述控制在 20 字以内；
4) 使用列表形式展示；
5) 可在末尾添加简短的工作反思或明日计划。`
  }
];

export const providers = [
  { id: 'deepseek', label: 'DeepSeek', baseUrl: 'https://api.deepseek.com', defaultModel: 'deepseek-chat' },
  { id: 'openai', label: 'OpenAI', baseUrl: 'https://api.openai.com/v1', defaultModel: 'gpt-4o' },
  { id: 'gemini', label: 'Gemini (OpenAI API)', baseUrl: 'https://generativelanguage.googleapis.com/v1beta/openai', defaultModel: 'gemini-1.5-pro' },
  { id: 'zhipu', label: 'Zhipu AI', baseUrl: 'https://open.bigmodel.cn/api/paas/v4', defaultModel: 'glm-4' },
  { id: 'doubao', label: 'Doubao', baseUrl: 'https://ark.cn-beijing.volces.com/api/v3', defaultModel: 'ep-xxx' },
  { id: 'volcengine', label: '火山引擎 (Volcengine)', baseUrl: 'https://ark.cn-beijing.volces.com/api/v3', defaultModel: 'ep-xxx' },
  { id: 'qwen', label: 'Qwen', baseUrl: 'https://dashscope.aliyuncs.com/compatible-mode/v1', defaultModel: 'qwen-turbo' },
  { id: 'siliconflow', label: 'SiliconFlow', baseUrl: 'https://api.siliconflow.cn/v1', defaultModel: 'deepseek-ai/DeepSeek-V3' },
  { id: 'groq', label: 'Groq', baseUrl: 'https://api.groq.com/openai/v1', defaultModel: 'llama-3.3-70b-versatile' },
  { id: 'xiaomi', label: '小米 (Xiaomi)', baseUrl: 'https://api.xiaomimimo.com/v1', defaultModel: 'mi-lm' },
  { id: 'custom', label: 'Custom', baseUrl: '', defaultModel: '' },
];

export async function loadSettings() {
  try {
    const rows = await db.value.select('SELECT * FROM settings WHERE id = 1');
    if (rows.length > 0) {
      const row = rows[0];
      apiKey.value = row.api_key || '';
      apiKeyInput.value = apiKey.value;
      apiProvider.value = row.api_provider || 'deepseek';
      apiProviderInput.value = apiProvider.value;
      apiBaseUrl.value = row.api_base_url || 'https://api.deepseek.com';
      apiBaseUrlInput.value = apiBaseUrl.value;
      apiModel.value = row.api_model || 'deepseek-chat';
      apiModelInput.value = apiModel.value;
      customDailyPrompt.value = row.custom_daily_prompt || '';
      customDailyPromptInput.value = customDailyPrompt.value || DEFAULT_DAILY_PROMPT_CN;
      customReviewPrompt.value = row.custom_review_prompt || '';
      customReviewPromptInput.value = customReviewPrompt.value || DEFAULT_REVIEW_PROMPT_CN;
      return;
    }
  } catch (_) { }
  try {
    const rows = await db.value.select("SELECT key, value FROM settings WHERE key = 'deepseek_api_key'");
    if (rows.length > 0) {
      apiKey.value = rows[0].value;
      apiKeyInput.value = rows[0].value;
    }
  } catch (_) { }
}

export function onProviderChange() {
  const p = providers.find(item => item.id === apiProviderInput.value);
  if (p) {
    apiBaseUrlInput.value = p.baseUrl;
    apiModelInput.value = p.defaultModel;
  }
}

export function openDailyPrompt() {
  if (!customDailyPromptInput.value.trim()) customDailyPromptInput.value = DEFAULT_DAILY_PROMPT_CN;
  isDailyPromptOpen.value = true;
}

export function openReviewPrompt() {
  if (!customReviewPromptInput.value.trim()) customReviewPromptInput.value = DEFAULT_REVIEW_PROMPT_CN;
  isReviewPromptOpen.value = true;
}

async function persistSettings() {
  await db.value.execute(
    `INSERT OR REPLACE INTO settings (id, api_key, api_provider, api_base_url, api_model, custom_daily_prompt, custom_review_prompt)
     VALUES (1, ?, ?, ?, ?, ?, ?)`,
    [apiKey.value, apiProvider.value, apiBaseUrl.value, apiModel.value, customDailyPrompt.value, customReviewPrompt.value]
  );
}

export async function saveApiSettings(showToast) {
  if (!db.value) return;
  try {
    apiKey.value = apiKeyInput.value.trim();
    apiProvider.value = apiProviderInput.value;
    apiBaseUrl.value = apiBaseUrlInput.value.trim();
    apiModel.value = apiModelInput.value.trim();
    await persistSettings();
    showToast('API 设置已保存', 2000);
  } catch (e) {
    console.error('saveApiSettings failed:', e);
  } finally {
    isApiSettingsOpen.value = false;
  }
}

export async function saveDailyPrompt(showToast) {
  if (!db.value) return;
  try {
    customDailyPrompt.value = customDailyPromptInput.value;
    await persistSettings();
    showToast('日志提示词已保存', 2000);
  } catch (e) {
    console.error('saveDailyPrompt failed:', e);
  } finally {
    isDailyPromptOpen.value = false;
  }
}

export async function saveReviewPrompt(showToast) {
  if (!db.value) return;
  try {
    customReviewPrompt.value = customReviewPromptInput.value;
    await persistSettings();
    showToast('归档提示词已保存', 2000);
  } catch (e) {
    console.error('saveReviewPrompt failed:', e);
  } finally {
    isReviewPromptOpen.value = false;
  }
}
