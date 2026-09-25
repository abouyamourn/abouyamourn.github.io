# abouyamourn.github.io

Plain HTML/CSS/JS, no build step. Design based on wangmagg.github.io (itself based on jonbarron.info).

- `index.html` — the entire page: bio, updates, papers, papers in progress
- `style.css` — all styling
- `filter.js` — the Papers filter buttons
- `assets/img/` — photo and the Britten "variance" clipping
- `assets/pdf/AB_CV.pdf` — CV, linked from the header
- `assets/pdf/papers/` — paper PDFs

## Preview locally

    python3 -m http.server 8000

## Editing

Each paper is an `.entry` block inside a `.year-group`. `data-tag` on the entry must match one of the `data-filter` values on the filter buttons (`Methodology`, `AI and Society`). Icons: doi → `fa-solid fa-link`, pdf → `fa-regular fa-file-lines`, arxiv → `fa-solid fa-file-arrow-up`, code → `fa-brands fa-github`.

Updates are `<li>` items in `#updates`; papers in progress are `<li>` items in `#in-progress`.
