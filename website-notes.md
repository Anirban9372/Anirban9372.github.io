# My Website — Full Code Notes

A running reference of every HTML, CSS, and JavaScript concept covered while building anirban9372.github.io. Organized by file. Read this top to bottom once, then use it as lookup later.

---

## 1. HTML — `index.html`

### Boilerplate

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Anirban</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  ...
  <script src="script.js"></script>
</body>
</html>
```

| Line | Meaning |
|---|---|
| `<!DOCTYPE html>` | Tells the browser "render this as modern HTML5" |
| `<html lang="en">` | Root of the page. `lang` helps screen readers and search engines |
| `<head>` | Metadata — not shown on screen, but read by the browser/search engines |
| `<meta charset="UTF-8">` | Character encoding — prevents broken symbols |
| `<meta name="viewport"...>` | Makes the site render correctly on mobile instead of auto-zooming out |
| `<title>` | Text shown in the browser tab |
| `<link rel="stylesheet" href="style.css">` | Loads the external CSS file and applies it to this page |
| `<body>` | Everything the user actually sees |
| `<script src="script.js">` at the **end** of `<body>` | Loads JS *after* all HTML exists, so it can find elements on the page |

### Structure tags

```html
<header>
  <nav>
    <span class="logo">anirban</span>
    <div class="nav-links">
      <a href="#projects">projects</a>
      <a href="#cp">cp</a>
      <a href="#about">about</a>
      <a href="#ideas">ideas</a>
      <a href="#contact">contact</a>
    </div>
  </nav>
</header>

<main>
  ...sections...
</main>
```

| Tag | Meaning |
|---|---|
| `<header>` | Semantic wrapper for site-wide nav — tells browsers/screen readers "this is navigation" |
| `<nav>` | The actual navigation element inside header |
| `<span class="logo">` | Inline element — your name in the corner |
| `class="..."` | A label with no effect on its own — CSS targets it later |
| `<a href="#projects">` | A link. `#projects` means "jump to the element whose `id="projects"`" |
| `<main>` | Wraps all primary page content |
| `<section>` | Groups one distinct chunk of content — one per part of the page (hero, projects, cp, about, ideas, contact) |

### Hero section

```html
<section class="hero">
  <p class="eyebrow">systems + quant</p>
  <h1>Anirban</h1>
  <p class="sub">Building performance-first systems.<br>Second year, IIEST Shibpur.</p>
</section>
```

- `<h1>` — the single most important heading on the whole page. Only one per page.
- `<br>` — manual line break, used sparingly, only for genuine line breaks like this tagline.

### Projects section (project cards)

```html
<section class="projects" id="projects">
  <h2>Projects</h2>
  <div class="project-grid">
    <div class="project-card">
      <div class="card-bar">
        <span class="dot red"></span>
        <span class="dot yellow"></span>
        <span class="dot green"></span>
        <span class="filename">decarbonizing_travel.ipynb</span>
      </div>
      <div class="card-body">
        <h3>Decarbonizing travel</h3>
        <p>Process mining and a high-carbon trip classifier on 87K+ travel records. Celonis Summer Analytics capstone.</p>
      </div>
    </div>
    <!-- repeat structure for each project -->
  </div>
</section>
```

- `id="projects"` — this is what `href="#projects"` jumps to.
- `<h2>` — one level below `<h1>`. Every section heading from here on uses `<h2>`.
- `<h3>` — one level below `<h2>`. Used per-card, since each card title is a sub-heading within the Projects section.
- `.card-bar` — the fake "editor window" title bar: 3 colored dots + a filename, mimicking a code editor tab.

### CP section

```html
<section class="cp" id="cp">
  <h2>Competitive programming</h2>
  <p class="cp-intro">Ongoing practice — solutions, notes, and problem breakdowns.</p>
  <div class="cp-stats">
    <div class="stat">
      <span class="stat-num">1116</span>
      <span class="stat-label">Codeforces rating</span>
    </div>
    <div class="stat">
      <span class="stat-num">Newbie</span>
      <span class="stat-label">Current rank</span>
    </div>
  </div>
  <a href="https://codeforces.com/profile/Anirban9372" target="_blank" class="cf-link">View Codeforces profile →</a>
</section>
```

- `target="_blank"` — opens the link in a new tab. Used for *outbound* links (GitHub, LinkedIn, Codeforces) — never for internal same-page links like `#projects`.

### Ideas / Log section (with expand-on-click)

```html
<section class="ideas" id="ideas">
  <h2>Log</h2>
  <p class="ideas-intro">A running record of what I'm circling — dated, high-level, updated as things move.</p>

  <div class="idea-list">
    <div class="idea">
      <div class="idea-head">
        <span class="idea-date">2026.07</span>
        <span class="idea-tag">quant</span>
        <span class="idea-text">Something in market microstructure</span>
        <span class="idea-arrow">+</span>
      </div>
      <p class="idea-detail">Still early — reading and thinking more than building right now.</p>
    </div>
    <!-- repeat per idea -->
  </div>
</section>
```

- Each `.idea` holds a visible `.idea-head` (always shown) and a hidden `.idea-detail` (revealed on click via JS + CSS working together — see JS section below).

### About and Contact

```html
<section class="about" id="about">
  <h2>About</h2>
  <p>Second-year IT student at IIEST Shibpur...</p>
</section>

<section class="contact" id="contact">
  <h2>Contact</h2>
  <div class="contact-links">
    <a href="mailto:you@example.com">Email</a>
    <a href="https://github.com/yourusername" target="_blank">GitHub</a>
    <a href="https://linkedin.com/in/yourusername" target="_blank">LinkedIn</a>
    <a href="#ideas">Ideas</a>
  </div>
</section>
```

---

## 2. CSS — `style.css`

### Reset + base theme

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: var(--bg);
  color: var(--text-primary);
  font-family: -apple-system, "Segoe UI", sans-serif;
  line-height: 1.6;
}

a {
  color: inherit;
  text-decoration: none;
}

html {
  scroll-behavior: smooth;
}
```

| Rule | Meaning |
|---|---|
| `* { margin:0; padding:0; }` | Universal selector — resets browser default spacing on every element, standard starting point |
| `box-sizing: border-box` | Width/height calculations include padding and border, instead of adding on top — avoids sizing bugs. Use always |
| `line-height: 1.6` | Space between lines of text, 1.6× font size — makes paragraphs breathe |
| `a { text-decoration: none }` | Removes default underline/blue color on links |
| `scroll-behavior: smooth` | Makes anchor-link jumps (`#projects` etc.) animate smoothly instead of snapping instantly |

### CSS custom properties (variables)

```css
:root {
  --bg: #0d0d0d;
  --text-primary: #e6e6e6;
  --text-secondary: #aaa;
  --text-muted: #999;
  --text-faint: #666;
  --border: #222;
}
```

- `:root` — a special selector representing the whole document; variables defined here are usable everywhere via `var(--name)`.
- Why: change a color once here, every usage updates. Same principle as avoiding magic numbers in C — avoids scattering raw hex values across the file.

### Flexbox (rows/columns of items)

```css
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-links {
  display: flex;
  gap: 32px;
}
```

| Property | Meaning |
|---|---|
| `display: flex` | Turns an element into a flex container — its direct children line up in a row (default) |
| `justify-content: space-between` | Pushes children to opposite ends, space between them |
| `align-items: center` | Vertically centers children within the row |
| `gap` | Space between flex children — cleaner than manual margins |

### CSS Grid (rows AND columns)

```css
.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 24px;
}
```

- `display: grid` — for actual 2D layouts (rows + columns), where flex is best for a single row or column.
- `repeat(auto-fit, minmax(240px, 1fr))` — automatically fits as many columns as space allows, each at least 240px wide. Adding a new project card later needs zero CSS changes.

### Centering content

```css
main {
  max-width: 700px;
  margin: 0 auto;
  padding: 0 48px;
}
```

- `max-width` + `margin: 0 auto` — caps content width and centers it horizontally. Extremely common pattern, used constantly in real web design.

### Typography hierarchy

```css
.eyebrow {
  color: var(--text-faint);
  font-size: 13px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.hero h1 {
  font-size: 56px;
  font-weight: 700;
  letter-spacing: -0.02em;
}
```

- `letter-spacing: 0.05em` (positive) on small uppercase text — improves readability.
- `letter-spacing: -0.02em` (negative) on large headings — slightly tightens big text, common convention.
- `text-transform: uppercase` — forces caps regardless of how it's typed in HTML.

### Card / badge patterns

```css
.project-card {
  border: 1px solid var(--border);
  border-radius: 8px;
  overflow: hidden;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

.idea-tag {
  border-radius: 20px;
  padding: 4px 10px;
}
```

- `overflow: hidden` on a rounded card — clips any square-cornered children (like the card-bar) to the card's rounded shape.
- `border-radius: 50%` on an equal width/height element — makes a perfect circle.
- `border-radius: 20px` on a short, padded, no-fixed-width element — creates a pill/badge shape.

### Transitions (smooth hover states)

```css
.nav-links a {
  transition: color 0.2s;
}
.nav-links a:hover {
  color: #fff;
}
```

- `:hover` — pure CSS, browser-native, applies only while the mouse is physically over the element.
- `transition: color 0.2s` — animates the color change over 0.2 seconds instead of snapping instantly.

### The accordion trick (expand/collapse without JS animation)

```css
.idea-detail {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.25s ease;
}
.idea.expanded .idea-detail {
  max-height: 100px;
}
```

- You can't smoothly transition `height: auto`, but you *can* transition `max-height` from `0` to a large-enough fixed value.
- `.idea.expanded .idea-detail` — this rule only applies when the parent also has class `expanded`. Only JavaScript can add/remove that class (see below) — CSS alone can't "remember" a click.

### Media queries (responsive/mobile)

```css
@media (max-width: 640px) {
  .hero h1 { font-size: 36px; }
  .project-grid { grid-template-columns: 1fr; }
}
```

- Rules inside `@media (max-width: 640px)` only apply when the browser viewport is 640px or narrower (phones/small tablets). Everything outside stays as the desktop default.

---

## 3. JavaScript — `script.js`

```javascript
const ideas = document.querySelectorAll('.idea');

ideas.forEach(function(idea) {
  idea.addEventListener('click', function() {
    idea.classList.toggle('expanded');
  });
});
```

| Line | Meaning |
|---|---|
| `document.querySelectorAll('.idea')` | Searches the whole page for every element with class `idea`, returns them as a list. This is the **DOM** — the browser's live, JS-readable model of your HTML |
| `ideas.forEach(function(idea) {...})` | Loops through that list — same concept as a `for` loop over an array in C, different syntax |
| `idea.addEventListener('click', function() {...})` | Attaches a listener: "when *this specific* element is clicked, run this function." Nothing runs until an actual click happens |
| `idea.classList.toggle('expanded')` | Adds the class `expanded` if it's missing, removes it if present. One line, both directions — this is what flips the CSS accordion rule on/off |

**How HTML + CSS + JS work together here:** JS toggles a class name → CSS has a rule that only applies when that class is present → the visual change (expand/collapse) happens. JS doesn't do the animating itself; CSS's `transition` does. This division — JS manages *state*, CSS manages *appearance* — is the standard pattern you'll see everywhere in real frontend code.

---

## Git / deployment commands used

```bash
git init                                   # start tracking this folder with Git
git config --global user.name "Anirban"    # set commit author name
git config --global user.email "..."       # set commit author email
git add .                                  # stage all files for commit
git commit -m "message"                    # save a snapshot with a description
git remote add origin <repo-url>           # link local repo to GitHub repo
git branch -M main                         # rename branch to "main"
git push -u origin main                    # upload commits to GitHub
git config --global credential.helper store # remember auth token after first use
```

GitHub Pages then serves `index.html` directly from the `main` branch at `https://<username>.github.io`.

---

## On Java vs JavaScript

Different languages, unrelated except for the name. Java (your college OOP course) runs on servers, Android apps, enterprise backends — **it cannot run in a browser** and has no role in this website. JavaScript (`script.js`) is the browser-native language and is what actually powers every interactive part of this site. Learn Java for your course and its OOP concepts; it's not part of your web stack.
