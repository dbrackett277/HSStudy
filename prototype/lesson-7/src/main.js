import { courseMap, sections } from "./lesson-data.js";
import { clearState, createInitialState, loadState, saveState } from "./state.js";

const storage = window.sessionStorage;
let state = loadState(storage, sections.length);

const elements = {
  map: document.querySelector("#course-map-list"),
  sectionList: document.querySelector("#section-list"),
  content: document.querySelector("#section-content"),
  progressBar: document.querySelector("#progress-bar"),
  progressTrack: document.querySelector(".progress-track"),
  progressLabel: document.querySelector("#progress-label"),
  progressTitle: document.querySelector("#progress-title"),
  back: document.querySelector("#back-button"),
  next: document.querySelector("#next-button"),
  restart: document.querySelector("#restart-button"),
  restartDialog: document.querySelector("#restart-dialog"),
  confirmRestart: document.querySelector("#confirm-restart"),
  responseStatus: document.querySelector("#response-status")
};

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderCourseMap() {
  elements.map.innerHTML = courseMap
    .map(
      (item) => `
        <li class="course-map__item course-map__item--${item.status}" ${
          item.status === "current" ? 'aria-current="step"' : ""
        }>
          <span class="course-map__marker" aria-hidden="true"></span>
          <span>${escapeHtml(item.label)}</span>
        </li>`
    )
    .join("");
}

function renderSectionList() {
  elements.sectionList.innerHTML = sections
    .map(
      (section, index) => `
        <li>
          <button
            type="button"
            data-section-index="${index}"
            ${index === state.currentSection ? 'aria-current="step"' : ""}
          >
            <span>${String(index + 1).padStart(2, "0")}</span>
            ${escapeHtml(section.nav)}
          </button>
        </li>`
    )
    .join("");

  elements.sectionList.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => navigateTo(Number(button.dataset.sectionIndex)));
  });
}

function blockTemplate(block) {
  if (block.type === "scripture") {
    return `<section class="content-block scripture-block">
      <p class="block-label">Scripture</p>
      <h2>${escapeHtml(block.reference)}</h2>
      <blockquote>${escapeHtml(block.text)}</blockquote>
    </section>`;
  }

  if (block.type === "prompt") {
    const response = state.responses[block.responseId] || "";
    return `<section class="content-block prompt-block">
      <p class="block-label">${escapeHtml(block.label)}</p>
      <h2>${escapeHtml(block.title)}</h2>
      <p>${escapeHtml(block.text)}</p>
      <label for="response-${escapeHtml(block.responseId)}">Your notes</label>
      <textarea
        id="response-${escapeHtml(block.responseId)}"
        data-response-id="${escapeHtml(block.responseId)}"
        rows="5"
        placeholder="${escapeHtml(block.placeholder)}"
      >${escapeHtml(response)}</textarea>
    </section>`;
  }

  if (block.type === "note" || block.type === "conclusion" || block.type === "transition") {
    return `<section class="content-block ${block.type}-block">
      <p class="block-label">${escapeHtml(block.label)}</p>
      ${block.title ? `<h2>${escapeHtml(block.title)}</h2>` : ""}
      <p>${escapeHtml(block.text)}</p>
    </section>`;
  }

  if (block.type === "thread") {
    return `<section class="content-block thread-block" aria-label="John's born of God thread">
      <p class="block-label">Scripture sequence</p>
      <ol>${block.items
        .map(
          (item) => `<li>
            <span class="thread-reference">${escapeHtml(item.reference)}</span>
            <p>${escapeHtml(item.text)}</p>
          </li>`
        )
        .join("")}</ol>
    </section>`;
  }

  if (block.type === "compare") {
    return `<section class="content-block compare-block">
      <p class="block-label">${escapeHtml(block.label)}</p>
      <div class="compare-grid">${block.columns
        .map(
          (column) => `<div>
            <h2>${escapeHtml(column.title)}</h2>
            <p>${escapeHtml(column.body)}</p>
          </div>`
        )
        .join("")}</div>
    </section>`;
  }

  if (block.type === "comparison-grid") {
    return `<section class="content-block evidence-block">
      <p class="block-label">Scripture comparison</p>
      <div class="evidence-grid">${block.items
        .map(
          (item) => `<article>
            <p class="evidence-reference">${escapeHtml(item.reference)}</p>
            <h2>${escapeHtml(item.phrase)}</h2>
            <p>${escapeHtml(item.emphasis)}</p>
          </article>`
        )
        .join("")}</div>
    </section>`;
  }

  if (block.type === "progression" || block.type === "response-path") {
    return `<section class="content-block progression-block">
      <p class="block-label">${block.type === "progression" ? "Observe" : "A continuing response"}</p>
      <ol>${block.items
        .map(
          (item, index) => `<li>
            <span class="progression-number">${String(index + 1).padStart(2, "0")}</span>
            <div>
              <h2>${escapeHtml(item.title)}</h2>
              ${item.reference ? `<p class="evidence-reference">${escapeHtml(item.reference)}</p>` : ""}
              <p>${escapeHtml(item.text)}</p>
            </div>
          </li>`
        )
        .join("")}</ol>
    </section>`;
  }

  if (block.type === "disclosure") {
    const open = Boolean(state.revealed[block.id]);
    return `<section class="content-block disclosure-block">
      <p class="block-label">${escapeHtml(block.label)}</p>
      <button class="disclosure-toggle" type="button" data-disclosure-id="${escapeHtml(block.id)}" aria-expanded="${open}">
        <span>${escapeHtml(block.title)}</span>
        <span aria-hidden="true">${open ? "−" : "+"}</span>
      </button>
      <div class="disclosure-content" ${open ? "" : "hidden"}>
        <p>${escapeHtml(block.intro)}</p>
        <ol class="standard-list">${block.items
          .map(
            (item) => `<li>
              <span>${escapeHtml(item.rank)}</span>
              <div><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.description)}</p></div>
            </li>`
          )
          .join("")}</ol>
      </div>
    </section>`;
  }

  if (block.type === "synthesis") {
    return `<section class="content-block synthesis-block">
      <p class="block-label">${escapeHtml(block.label)}</p>
      <h2>${escapeHtml(block.title)}</h2>
      <ul>${block.points.map((point) => `<li>${escapeHtml(point)}</li>`).join("")}</ul>
    </section>`;
  }

  return "";
}

function bindInteractiveBlocks() {
  elements.content.querySelectorAll("textarea[data-response-id]").forEach((textarea) => {
    textarea.addEventListener("input", () => {
      state.responses[textarea.dataset.responseId] = textarea.value;
      saveState(storage, state);
      elements.responseStatus.textContent = "Notes saved for this session";
      window.clearTimeout(bindInteractiveBlocks.statusTimer);
      bindInteractiveBlocks.statusTimer = window.setTimeout(() => {
        elements.responseStatus.textContent = "";
      }, 1600);
    });
  });

  elements.content.querySelectorAll("[data-disclosure-id]").forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.dataset.disclosureId;
      state.revealed[id] = !state.revealed[id];
      saveState(storage, state);
      render();
      document.querySelector(`[data-disclosure-id="${id}"]`)?.focus();
    });
  });
}

function render() {
  const section = sections[state.currentSection];
  const current = state.currentSection + 1;
  const progress = (current / sections.length) * 100;

  renderSectionList();
  elements.progressLabel.textContent = `Section ${current} of ${sections.length}`;
  elements.progressTitle.textContent = section.nav;
  elements.progressTrack.setAttribute("aria-valuemax", String(sections.length));
  elements.progressTrack.setAttribute("aria-valuenow", String(current));
  elements.progressBar.style.width = `${progress}%`;

  elements.content.innerHTML = `
    <header class="section-header">
      <p class="eyebrow">${escapeHtml(section.kicker)}</p>
      <h1>${escapeHtml(section.title)}</h1>
      <p class="section-lead">${escapeHtml(section.lead)}</p>
    </header>
    <div class="section-body">${section.blocks.map(blockTemplate).join("")}</div>`;

  elements.back.disabled = state.currentSection === 0;
  elements.next.textContent = state.currentSection === sections.length - 1 ? "Return to beginning" : "Continue";
  bindInteractiveBlocks();
}

function navigateTo(index, focusContent = true) {
  state.currentSection = Math.min(Math.max(index, 0), sections.length - 1);
  saveState(storage, state);
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
  if (focusContent) elements.content.focus({ preventScroll: true });
}

elements.back.addEventListener("click", () => navigateTo(state.currentSection - 1));
elements.next.addEventListener("click", () => {
  const nextIndex = state.currentSection === sections.length - 1 ? 0 : state.currentSection + 1;
  navigateTo(nextIndex);
});
elements.restart.addEventListener("click", () => elements.restartDialog.showModal());
elements.confirmRestart.addEventListener("click", () => {
  clearState(storage);
  state = createInitialState();
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

renderCourseMap();
render();
