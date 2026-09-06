# Ayush Kumar: Portfolio Site

A static portfolio site: no build step, no framework, no dependencies beyond
Google Fonts. Every piece of content (About, Experience, Skills, Case
Studies, Blog) is driven from one file, `js/data.js`, so you can edit,
add, or delete content without touching HTML or CSS.

## 1. Host it on GitHub Pages (5 minutes)

1. Create a new **public** repository on GitHub, e.g. `portfolio`.
2. Upload all the files in this folder to the repository (drag-and-drop on
   github.com works fine, or `git push` if you're comfortable with git).
3. In the repository, go to **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to `Deploy from a branch`,
   branch `main`, folder `/ (root)`. Save.
5. Wait about a minute, then your site is live at:
   `https://ayush22kumar.github.io/portfolio/`

To use a custom domain later, add a `CNAME` file with your domain and
configure DNS per GitHub's docs. Search "GitHub Pages custom domain" in
GitHub's help docs when you're ready.

## 2. Add your real links and CV

Open `js/data.js` and update the top of the `profile` object:

- `linkedin`: your real LinkedIn URL
- `github`: your real GitHub profile URL (already set to `github.com/ayush22kumar`)
- `cvLink`: add your CV PDF to the repo root (e.g.
  `AyushKumar_SeniorLeadBusinessAnalyst_CV.pdf`) and make sure this matches
  the filename exactly

## 3. Add, edit, or delete a case study

Open `js/data.js`, find the `projects` array. Each entry looks like:

```js
{
  id: "your-unique-id",              // used in the URL: lowercase, hyphens only
  title: "Project title",
  dates: "2025",
  summary: "One-sentence summary for the card and listing.",
  tags: ["Tag One", "Tag Two"],
  metric: "Headline number, shown on the card",
  problem: "What was broken or unclear before you got involved.",
  approach: [
    "First thing you did.",
    "Second thing you did."
  ],
  tools: ["Tool A", "Tool B"],
  outcome: [
    { num: "80%", label: "what this number measures" }
  ]
}
```

- **To add one:** copy an existing object (including the curly braces),
  paste it as a new item in the array, edit the fields.
- **To edit one:** change the text in place.
- **To delete one:** delete its whole `{ ... }` block (and the comma after
  it, if it's not the last item).

Save, commit, and push. The live site updates automatically within a
minute or two.

## 4. Add, edit, or delete a blog post

Same process, in the `blogPosts` array. `content` is a list of paragraphs;
you can also drop in a subheading anywhere with `{ heading: "Your heading" }`:

```js
{
  id: "your-post-id",
  title: "Post title",
  date: "2026-07-01",     // YYYY-MM-DD, controls sort order
  tags: ["Tag"],
  excerpt: "One-sentence summary for the card.",
  content: [
    "First paragraph.",
    { heading: "A subheading" },
    "Next paragraph."
  ]
}
```

## 5. Edit About, Experience, or Skills

- **About:** edit `profile.about`, `profile.tagline`, `profile.subtext`,
  and `profile.metrics` (the four numbers in the homepage hero).
- **Experience:** edit the `experience` array, one object per role.
- **Skills:** edit the `skills` array, one object per category. Each
  category also carries an inline SVG `icon` string, shown next to its
  heading.

## 6. Add or edit a recommendation

Open `js/data.js`, find the `testimonials` array. Each entry is
`{ quote, author }`. Copy an existing object to add another, or edit the
text in place. Keep quotes attributed to real people you've actually
worked with.

## 7. Customise the look

All colors, fonts, and spacing are set as CSS variables at the top of
`css/styles.css`, under `:root`. Change a hex value there and it updates
everywhere it's used. To change fonts, update the Google Fonts `<link>` tag
in each HTML file's `<head>` and the corresponding `--font-*` variable.

Case-study and blog cards (`.card-list`) render as a responsive grid: three
columns on desktop, two on tablet, one on mobile. Adjust the column counts
in the `.card-list` media queries in `css/styles.css` if you want a
different layout.

## File structure

```
index.html          Homepage (hero, about, experience, skills, featured work, recommendations)
projects.html        Full case-study list
project.html          Single case study (reads ?id= from the URL)
blog.html             Full blog list
blog-post.html         Single post (reads ?id= from the URL)
css/styles.css       All design tokens and styling
js/data.js            All content: edit this for day-to-day updates
js/render.js          Rendering logic: edit only to change layout/behaviour
assets/og-image.png  Social share preview image (LinkedIn/email link previews)
assets/diagrams/      Case study diagrams (SVG)
favicon.svg           Browser tab icon
robots.txt             Search engine crawl permissions
sitemap.xml            Search engine page listing
```

## Adding a diagram to a case study

Put an SVG (or PNG/JPG) in `assets/diagrams/`, then add a `diagram` field to
that project's object in `js/data.js`:

```js
diagram: {
  src: "assets/diagrams/your-file.svg",
  caption: "One line explaining what the diagram shows."
}
```

## Before you publish, a few placeholders to replace

- `js/data.js` → `profile.cvLink`: add your CV PDF to the repo root and confirm the filename matches
- `index.html`, `projects.html`, `sitemap.xml`, `robots.txt`: `YOUR-GITHUB-USERNAME.github.io/portfolio/` should become your actual published URL, once you know your repo name

## Notes

- No build tools, no `node_modules`, nothing to install. Any static file
  host works (GitHub Pages, Netlify, Vercel); just point it at this
  folder.
- The case studies and blog posts are starting content based on your real
  CV achievements, written so you can publish as-is or edit freely.
  Replace or extend them with your own work whenever you're ready.
