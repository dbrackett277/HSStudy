# Prototype Two — Part One: Groundwork & Guardrails

## Delivery status

Prototype Two is published at https://dbrackett277.github.io/HSStudy/part-one/. GitHub Actions run 35349127343 completed its deployment successfully on 19 September 2026 after the owner allowed the prototype branch in the github-pages environment. Publication uses the separate `prototype/part-one-groundwork` branch; no merge into Prototype One was needed.

## What is implemented

A course opening and five investigations, comprising 24 steps. Prototype One is preserved byte-for-byte in `prototype/lesson-7`; the new work is in `prototype/part-one` on `prototype/part-one-groundwork`, based on Prototype One commit `79ed12550a3a5887d284d3bd277b0fa5c5e5cf6f`.

The preview build includes an unchanged copy of Prototype One for comparison. The combined GitHub Pages workflow retains Prototype One at the root and publishes Part One under `/part-one/`. No merge into the original branch or main is required.

## Architecture and learner time

| Unit | Steps | Working estimate | Intended result |
|---|---:|---:|---|
| Start here | 2 | 6–10 minutes | Understand the purpose, optional exploration, local saving, and record a baseline. |
| Make room for the evidence | 3 | 12–18 minutes | Identify assumptions; separate revealed teaching from speculation. |
| Know whom we are studying | 4 | 18–25 minutes | Distinguish Father, Son, and Spirit from their actions while retaining unity. |
| Let Scripture control the answer | 4 | 18–25 minutes | Read Paul in context and distinguish inspired explanation, contextual reference, and speculation. |
| Trace the change in emphasis | 4 | 15–22 minutes | Understand the “Spirit Age” framework, departure/Helper relationship, and access through Christ. |
| Put the guardrails to work | 7 | 20–28 minutes | Compare prayer passages, apply their conclusion, connect four anchors, revisit baseline. |

Total: approximately **89–128 minutes**, excluding optional SIS exploration. These are unvalidated estimates for reading Scripture, reflection, comparison, and review—not measured reading times or promises. Shorter units were not padded to reach 20 minutes. A 30–45 minute sitting can combine the opening with the first investigation, or use the explicit stopping points within later investigations. Every step can be resumed. The seven-step final investigation has a natural pause after the prayer synthesis, before church life and the anchors.

## Instructional decisions

**Coherence diagnosis:** Prototype One starts inside an argument whose prior anchors are missing. The source’s Part One also compresses several different tasks into former Lesson 3: a biblical framework, the crucifixion, a catalogue of Spirit expressions, prayer, and four chapters of Corinthians. Both missing prerequisites and density plausibly contribute to the perceived disjointedness. This is a design hypothesis, not an observed learner result. Part Two is still absent, so this pass cannot prove that all of Lesson 7’s coherence problems are solved.

**Sequence:** Assumptions → Godhead → interpretive authority → Spirit Age → prayer/application/anchors. Paul’s “language from above” argument moves before the timeline and prayer case study so learners know how connections will be judged before using them. The certainty tool from the later slides is introduced here, then practiced with John 7:39. It is a scaffold, not a new theological rule.

Each step carries an essential question, evidence-purpose prompt, concluding bridge, and source reference. Module-level outcomes and argument threads are defined in `course-data.js`. The traceability table below records prior knowledge and intended transitions.

**Baseline:** Three adapted pre-class questions retain confusion, assumptions, and “filled with the Spirit.” Original responses are displayed at the close alongside a separate new reflection; no automatic overwrite. Remaining baptism questions are reserved for later appropriate units. No grade is assigned, and writing is optional.

**Source fidelity:** Doctrine follows the manuscript. The Spirit/word distinction and prayer intercession remain explicit. “Spirit Age” is identified as a course framework, not a period of exclusive divine activity. Jesus’ immediate apostolic audience remains visible. The dove/peace and curtain/Spirit Age connections are identified as interpretations or synthesis, not quotations. The certainty tool retains the slide’s three categories; no certainty scores are invented.

**Editorial corrections:** The manuscript p. 21 calls the recipients of 2 Corinthians 13:14 “Christians in Rome.” The prototype correctly uses Corinth, as identified by the cited letter. This is a reference correction, not a theological change. The source’s “veil” wording for Matthew 27:51 is rendered as “curtain” in the ESV excerpt. The final dwelling/power material is an orientation, not a premature conversion of Parts Two and Three.

## Source disposition and traceability

References below use printed manuscript page numbers. The source file includes annotations, so PDF viewer page indices may differ.

| Source / material | Destination and disposition | Prior knowledge and instructional reason |
|---|---|---|
| Preface; opening mission slides | Start here; purpose and baseline | No prerequisite; lets learners name the question driving their study. |
| pp. 5–9; reasons for confusion and neglect | Investigation 1, main path | Activates prior assumptions; prepares willingness to examine Godhead passages. |
| pp. 6, 14, 19–20; Spirit and word distinction | Introduced in “settled,” returned to in revelation and prayer | Opens the claim with a concrete observation; adds positive evidence later. |
| pp. 6–7; ghost/occult speculation and Deuteronomy 18 | Optional source-background disclosure | Retains the possible source explanation without making speculation a main premise. Detailed occult questions omitted from required practice. |
| pp. 7–8; antichrist, Sinner’s Prayer, Grace/Gift | Condensed optional disclosure; terminology rule retained | Avoids unrelated doctrinal excursions while preserving the guardrail. Full disputes remain in source, not converted here. |
| pp. 10–11; full Godhead passage catalogue | Four key observations plus optional existing SIS Godhead Question | Focuses on a manageable comparison; linked SIS Question exposes the larger resource network. Not every catalogue passage is reproduced. |
| pp. 12–14; Father, husband, vineyard, prodigal son, shepherd, king | Household on main path; other images acknowledged in disclosure; fuller arguments deferred to Part Two | Activates familiar family/building relationships; points naturally to Desire without converting Part Two. |
| pp. 15, 21–23; 1 Corinthians 1–4 | Investigation 3, moved earlier; church consequence revisited in Investigation 5 | Establishes interpretive authority before the learner must evaluate cross-passage connections. Summaries preserve the argument; full chapter-by-chapter classroom treatment is condensed. |
| Later slide “Bible Standard for Interpretation” | Reusable standard and classification activity in Investigation 3 | Earlier exposure explains how to weigh the upcoming timeline/prayer connections. |
| p. 16; Godhead emphases and John 16:7 | Investigation 4 timeline and Helper comparison | Builds on distinct persons and warranted connections; introduces change without implying absence. |
| p. 17; miracles at Calvary | Curtain/access on main path; other events in optional disclosure | Hebrews carries the immediate argument; detailed resurrection implications are not required here. |
| pp. 18–19; Spirit expression catalogue / Key | Four representative phrases with contextual questions; other expressions named | Creates inquiry without prematurely defining each phrase. Full Holy Spirit Key deferred to later course coverage. |
| pp. 19–21; praying in the Spirit | Investigation 5, prediction → Jude → Romans → John → application | Combines personhood, context, and interpretive limits in one worked investigation. |
| pp. 22–23; shared temple and conduct | “Church life” synthesis | Extends understanding beyond terminology into responsibility. |
| pp. 23–24; four anchors and concluding questions | Anchors, recall, baseline comparison | Explains why the next material returns to the Old Testament. |
| Classroom scheduling, high-school address, homework logistics, hymn excerpts in slides | Omitted | Not part of adult self-paced learning; original source remains unchanged. |

The `.pages` outline was inspected as a package. It contains IWA data and image previews, with no embedded readable PDF/text export. It was not used as an independent content authority. The manuscript and slide PDFs were extracted; the mission slide was visually inspected. Source files were not modified or uploaded to GitHub.

## SIS integration

- **19 resource records** support required evidence. **14 have verified SIS canonical URLs**, including the Romans 8 record that uses the manuscript quotation pending translation review. **13 records render SIS text snapshots**; six use manuscript text (five with unverified exact SB matches, plus Romans 8).
- Native expandable Scripture panels work with tap, click, and keyboard. Quotation, immediate context, provenance, and secondary full-block link are separated.
- The snapshot provider is isolated in `resources.js`; learning components use resource keys. Canonical slugs and URLs are stored once in `resources.json`. No numeric WordPress IDs were invented.
- Two verified SIS Questions provide optional deeper exploration: [Godhead](https://scriptureinterpretsscripture.com/personality-of-the-godhead/) and [prayer](https://scriptureinterpretsscripture.com/pray-in-the-spirit/). The prayer link is stored as a manually verified relationship on the Jude record; it is not represented as a live WordPress relationship query.
- The [Bible reference page](https://scriptureinterpretsscripture.com/bible-verse-reference/) and individual block pages were inspected. Public display headings expose Scripture, rephrasing, immediate context, and application links. Only text and context are used here; the application text is not silently treated as Scripture.
- WordPress `/wp-json/` and `/wp-json/wp/v2/types` could not be accessed through the research tool. This is an environment verification limit, not proof that SIS lacks an API. No browser CORS behavior, ACF REST exposure, numeric IDs, or Extended Context endpoint has been verified.
- Snapshots are explicit and dated, not live synchronization. Production should inspect the actual registered CPT and exposed ACF fields. If a same-origin WordPress renderer can supply the needed fields, prefer that. Otherwise a small read-only published-block adapter can expose only the verified fields. Do not implement or enable an endpoint based on assumptions in this report.
- No WordPress plugin was installed or modified. Extended Context is a future integration option, not a fabricated functioning feature in this pass.

**Translation discrepancy:** [Romans 8:26–27 on SIS](https://scriptureinterpretsscripture.com/scripture-block/romans-826-27/) labels its text ESV but begins “In the same way…” and uses “inexpressible groanings.” The manuscript uses “Likewise…” and “groanings too deep for words.” This implementation preserves the manuscript’s ESV quotation with an explicit source note and canonical SIS link. Review the SIS source before making that record live. Other snapshots retain their displayed wording without independently certifying every translation label.

**Production quotation review:** ESV redistribution/attribution terms and the site's current permissions still require review before production. Presence on SIS is not taken as permission for unlimited redistribution. This prototype is not a licensing determination.

## Components and state

Reusable patterns: essential-question header; argument thread; plain narrative; inline Scripture reveal; context reveal; reflection; prediction and feedback disclosure; side-by-side comparison; accessible matching/classification; timeline; phrase-question reveal; certainty standard; optional Deeper Study; four-anchor map; module bridge; baseline comparison; notebook and text export.

State uses a versioned Part One localStorage key, separate from Prototype One's sessionStorage. It records location, completion, original/new responses, comparison choices, and main disclosures. Continue marks only the current step complete; navigation alone does not. Finishing after jumping ahead reports the actual completed count. Reset affects only Part One. Blocked storage and malformed data have fallbacks. Missing Scripture shows a retry state and prevents marking that required-evidence step complete.

Limitations: no cross-device sync; clearing browser data clears progress; no service worker/offline guarantee; nested context disclosure and scroll offset are not persisted across reloads (the step and main reveal are). Reflections are not encrypted from other users of the same browser profile. No login or server submission is added. Part One state remains in the open tab when exploring external SIS pages.

## Validation and human review

Seven targeted tests cover resource resolution/provenance, ID integrity and baseline references, honest completion after skipped steps, persistence, denied/corrupted storage, malformed state, and safe canonical URLs. All pass. Prototype One's five existing tests, lint, and build also pass. Syntax checks and the Part One static build pass.

Live desktop browser checks on 19 September 2026 verified the opening layout, Continue progression, module navigation without false completion, reflection persistence after reload, the reflection notebook, Scripture and immediate-context expansion, and comparison feedback. These are representative checks, not an exhaustive review of every step. Mobile visual review, screen-reader behavior, and complete keyboard focus behavior remain unverified. Responsive CSS and semantic controls are implemented; a design review is still required. The following user tests should precede Part Two:

1. Start cold: can the learner describe the study's purpose and the current question without help?
2. Follow the path: identify any transition that feels abrupt or overexplained. In particular, test the early move into Corinthians and the shift from prayer to shared church life.
3. Test a phone: tap Scripture/context, compare roles, type a reflection, navigate Back/Continue, close/reopen, and return from SIS.
4. Revisit baseline: do the preserved responses invite useful reconsideration without feeling graded?
5. Check epistemic clarity: does the learner distinguish John’s explicit explanation from the course’s curtain/age synthesis?
6. Measure time and reading burden. The final investigation may need splitting after the prayer synthesis if actual adult sessions exceed the estimate.
7. Read the unchanged Prototype One after Part One. Note which missing concepts remain; Part Two is still a material prerequisite.
8. Author review: confirm the reordering, condensation, six manuscript-text records, Romans 8 discrepancy, and fidelity of prayer/word distinctions.

Do not infer successful instructional outcomes from passing software tests.
