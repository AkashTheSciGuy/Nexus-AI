const KEY = 'nexus-ai:v1';
export function loadWorkspace() {
  try {
    const data = JSON.parse(localStorage.getItem(KEY) || '{}');
    return { chats: Array.isArray(data.chats) ? data.chats : [], settings: { compact: false, ...(data.settings || {}) } };
  } catch { return { chats: [], settings: { compact: false } }; }
}
export function saveWorkspace(value) {
  try { localStorage.setItem(KEY, JSON.stringify(value)); } catch { /* Storage may be disabled or full. */ }
}
export function makeId() { return crypto.randomUUID(); }
export function mockReply(message) {
  const q = message.toLowerCase();
  if (q.includes('code') || q.includes('react') || q.includes('javascript')) return 'Demo response: For a maintainable implementation, split the feature into focused components, validate inputs, and handle loading and error states. Connect a real model in Phase 2 for actual code generation.';
  if (q.includes('idea') || q.includes('business')) return 'Demo response: Start by defining your target user, their most expensive problem, and the smallest workflow that solves it. Validate demand before adding more features.';
  return 'This is a simulated response from the Phase 1 dashboard. Your message was saved locally. In Phase 2, this conversation will connect to a real AI model through a secure backend.';
}
