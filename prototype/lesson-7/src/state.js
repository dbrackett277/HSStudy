export const STORAGE_KEY = "filled-holy-spirit.lesson-7.session.v1";

export function clampSection(index, sectionCount) {
  const value = Number.isFinite(Number(index)) ? Number(index) : 0;
  return Math.min(Math.max(Math.trunc(value), 0), Math.max(sectionCount - 1, 0));
}

export function createInitialState() {
  return { currentSection: 0, responses: {}, revealed: {} };
}

export function loadState(storage, sectionCount) {
  if (!storage) return createInitialState();

  try {
    const saved = JSON.parse(storage.getItem(STORAGE_KEY));
    if (!saved || typeof saved !== "object") return createInitialState();

    return {
      currentSection: clampSection(saved.currentSection, sectionCount),
      responses: saved.responses && typeof saved.responses === "object" ? saved.responses : {},
      revealed: saved.revealed && typeof saved.revealed === "object" ? saved.revealed : {}
    };
  } catch {
    return createInitialState();
  }
}

export function saveState(storage, state) {
  storage?.setItem(STORAGE_KEY, JSON.stringify(state));
}

export function clearState(storage) {
  storage?.removeItem(STORAGE_KEY);
}
