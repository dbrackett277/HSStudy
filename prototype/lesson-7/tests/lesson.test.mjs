import test from "node:test";
import assert from "node:assert/strict";
import { courseMap, sections } from "../src/lesson-data.js";
import { clearState, createInitialState, loadState, saveState, STORAGE_KEY } from "../src/state.js";

function memoryStorage() {
  const values = new Map();
  return {
    getItem: (key) => values.get(key) ?? null,
    setItem: (key, value) => values.set(key, value),
    removeItem: (key) => values.delete(key)
  };
}

test("course map preserves the approved sequence", () => {
  assert.deepEqual(
    courseMap.map((item) => item.label),
    ["Desire", "Promise", "Dwelling", "Power", "Born of God"]
  );
});

test("lesson covers the complete eleven-section prototype flow", () => {
  assert.equal(sections.length, 11);
  const ids = sections.map((section) => section.id);
  for (const id of [
    "gift-of-god",
    "john-thread",
    "inspired-interpretation",
    "promise-for-all",
    "salvation-spirit-terms",
    "begin-and-walk",
    "clay-tent-building",
    "confidence-and-response",
    "all-truth",
    "new-covenant",
    "new-name-and-synthesis"
  ]) {
    assert.ok(ids.includes(id), `missing section ${id}`);
  }
});

test("learner responses persist only in the supplied session store", () => {
  const storage = memoryStorage();
  const state = createInitialState();
  state.currentSection = 4;
  state.responses["john-4-opening"] = "A working response";
  saveState(storage, state);

  assert.match(storage.getItem(STORAGE_KEY), /working response/i);
  assert.deepEqual(loadState(storage, sections.length), state);

  clearState(storage);
  assert.equal(storage.getItem(STORAGE_KEY), null);
});

test("invalid saved positions are clamped to the lesson", () => {
  const storage = memoryStorage();
  storage.setItem(STORAGE_KEY, JSON.stringify({ currentSection: 900, responses: {}, revealed: {} }));
  assert.equal(loadState(storage, sections.length).currentSection, sections.length - 1);
});

test("instruction labels include the approved learning modes", () => {
  const source = JSON.stringify(sections);
  for (const label of ["Think", "Observe", "Compare", "Conclude", "Guardrail"]) {
    assert.match(source, new RegExp(`\\b${label}\\b`));
  }
});
