# abouyamourn.github.io

Plain HTML/CSS/JS, no build step. Design based on wangmagg.github.io (itself based on jonbarron.info).

- `index.html` — the entire page: bio, CV link, research (writing samples and publications)
- `style.css` — all styling
- `filter.js` — the Research filter buttons
- `assets/img/` — photo and the Britten "variance" clipping
- `assets/pdf/AB_CV.pdf` — CV, linked from the header
- `assets/pdf/papers/` — paper PDFs (`site_selection.pdf` and `llm_aggregation.pdf` are the writing samples, linked from the page)

## Preview locally

    python3 -m http.server 8000

## Editing

Papers are in two `.pub-group` blocks, "Writing samples" then "Publications". Each paper is an `<li class="pub">` in that group's `.pub-list`, newest first, written as: authors. "Title." *Venue*, year. tags. Each item has `data-area` (`Methodology` or `AI and Society`) and `data-methods` (zero or more of `game theory and mechanism design`, `causal inference`, `optimization`, `machine learning`, separated by `|`). The two filter rows combine with AND. The chips inside `.pub-tags` should mirror these attributes. The title links to the paper.

The two coloured phrases in the bio carry `data-area-link`; clicking one sets the Area filter.

The Britten clipping (one stave of `assets/img/variance.png`, 96×76px) sits under the CV card at its native size.

`404.html` is served by GitHub Pages for any path that does not exist.
