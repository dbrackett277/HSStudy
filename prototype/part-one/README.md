# Filled with the Holy Spirit — Prototype Two

Course opening + Part One. Read `../../docs/PROTOTYPE-TWO-REPORT.md` for source decisions, integration limits, and review criteria.

Requires Node 20+. No runtime dependencies.

```sh
npm ci
npm run check
node scripts/serve.mjs dist
```

Open http://127.0.0.1:4173/ . Build before serving so the preserved Prototype One comparison link resolves.

`src/course-data.js`: 24 steps / opening + five investigations.
`src/resources.json`: dated SIS snapshots and identified manuscript quotations.
`src/resources.js`: replaceable read boundary; does not assume a live SIS API.
`src/state.js`: local progress and reflections, isolated from Prototype One.
`src/foundation.css`: exact copy of Prototype One stylesheet.

The preview workflow preserves Prototype One at the Pages root and puts this study at `/part-one/`. It uses the existing `github-pages` environment; repository branch restrictions may require the owner to allow `prototype/part-one-groundwork`.
