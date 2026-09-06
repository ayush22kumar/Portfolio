/* =========================================================
   RENDER LOGIC
   You shouldn't need to edit this file to update content.
   edit js/data.js instead. Edit this file only if you want
   to change HOW things are displayed.
   ========================================================= */

function qs(sel, root = document) {
  return root.querySelector(sel);
}

function el(tag, opts = {}) {
  const node = document.createElement(tag);
  if (opts.class) node.className = opts.class;
  if (opts.text) node.textContent = opts.text;
  if (opts.html) node.innerHTML = opts.html;
  return node;
}

function formatDate(iso) {
  const d = new Date(iso + "T00:00:00");
  if (isNaN(d)) return iso;
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

/* ---------- Nav toggle (mobile) ---------- */
function initNav() {
  const toggle = qs(".nav-toggle");
  const links = qs(".nav-links");
  if (!toggle || !links) return;
  toggle.setAttribute("aria-expanded", "false");
  toggle.setAttribute("aria-controls", "nav-links");
  links.id = "nav-links";
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  const current = document.body.getAttribute("data-page");
  document.querySelectorAll(".nav-links a[data-page]").forEach((a) => {
    if (a.getAttribute("data-page") === current) a.classList.add("current");
  });
}

/* ---------- Testimonials (home page) ---------- */
function renderTestimonials() {
  const container = qs("#testimonials-list");
  if (!container) return;
  if (!testimonials || testimonials.length === 0) return;

  testimonials.forEach((t) => {
    const item = el("div", { class: "testimonial" });
    const bq = el("blockquote", { text: `\u201C${t.quote}\u201D` });
    item.appendChild(bq);

    const footer = el("div", { class: "testimonial-footer" });
    footer.appendChild(el("cite", { text: t.author }));
    if (t.linkedin) {
      const link = el("a", { class: "testimonial-linkedin", text: "View on LinkedIn" });
      link.href = t.linkedin;
      link.target = "_blank";
      link.rel = "noopener";
      footer.appendChild(link);
    }
    item.appendChild(footer);

    if (t.placeholder) {
      item.appendChild(el("span", { class: "placeholder-flag", text: "PLACEHOLDER: replace before publishing" }));
    }
    container.appendChild(item);
  });
}

/* ---------- Hero metrics ledger (home page) ---------- */
function renderLedger() {
  const container = qs("#ledger");
  if (!container) return;
  profile.metrics.forEach((m) => {
    const item = el("div", { class: "ledger-item" });
    item.appendChild(el("span", { class: "ledger-num", text: m.num }));
    item.appendChild(el("span", { class: "ledger-label", text: m.label }));
    container.appendChild(item);
  });
}

/* ---------- About (home page) ---------- */
function renderAbout() {
  const photoContainer = qs("#about-photo");
  if (photoContainer && profile.photo) {
    const img = el("img", { class: "profile-photo" });
    img.src = profile.photo;
    img.alt = profile.name;
    img.loading = "lazy";
    photoContainer.appendChild(img);
  }

  const body = qs("#about-body");
  if (body) body.textContent = profile.about;

  const facts = qs("#about-facts");
  if (facts) {
    facts.appendChild(el("dt", { text: "Focus areas" }));
    facts.appendChild(el("dd", { text: profile.focusAreas.join(", ") }));

    facts.appendChild(el("dt", { text: "Location" }));
    facts.appendChild(el("dd", { text: profile.location }));

    facts.appendChild(el("dt", { text: "Email" }));
    const emailDd = el("dd");
    const emailLink = el("a", { text: profile.email });
    emailLink.href = `mailto:${profile.email}`;
    emailDd.appendChild(emailLink);
    facts.appendChild(emailDd);
  }
}

/* ---------- Career & education timeline (home page) ----------
   A row of always-visible tiles over `timeline` (js/data.js), each a real
   <button> in a single ARIA tablist. Every tile already shows its date,
   title, and company (plus a "Previously..." note for an earlier role at
   the same place, and a related project/award below a divider) — nothing
   is hidden behind a bare year. Selecting a tile (click, or arrow/Home/End
   keys) swaps the full story into the fixed-size panel below with a soft
   fade, so the section never resizes or jumps as you move between entries.
   Respects prefers-reduced-motion via the `prefersReducedMotion` flag
   defined above. */
function initTimeline() {
  const row = qs("#timeline-cards");
  const ribbon = qs("#timeline-ribbon");
  const panel = qs("#timeline-panel");
  if (!row || !panel || typeof timeline === "undefined" || timeline.length === 0) return;

  let activeIndex = timeline.findIndex((item) => item.current);
  if (activeIndex === -1) activeIndex = 0;

  timeline.forEach((item, i) => {
    const card = el("button", { class: "timeline-card" });
    card.type = "button";
    card.setAttribute("role", "tab");
    card.id = `timeline-tab-${item.id}`;
    card.setAttribute("aria-controls", "timeline-panel");
    card.setAttribute("aria-selected", "false");
    card.dataset.index = String(i);
    card.tabIndex = -1;

    card.appendChild(el("div", { class: "timeline-card-date", text: item.range }));
    card.appendChild(el("div", { class: "timeline-card-title", text: item.title }));
    card.appendChild(el("div", { class: "timeline-card-org", text: item.org }));
    if (item.current) {
      card.appendChild(el("span", { class: "timeline-card-flag", text: "Present" }));
    }

    if (item.secondary) {
      const sec = el("div", { class: "timeline-card-secondary" });
      sec.appendChild(document.createTextNode("Previously "));
      sec.appendChild(el("b", { text: item.secondary.title }));
      sec.appendChild(el("br"));
      sec.appendChild(document.createTextNode(item.secondary.range));
      card.appendChild(sec);
    }

    if (item.related) {
      card.appendChild(el("hr", { class: "timeline-card-divider" }));
      card.appendChild(el("div", { class: "timeline-card-related-title", text: item.related.title }));
      card.appendChild(el("div", { class: "timeline-card-related-org", text: item.related.org }));
      if (item.related.range) {
        card.appendChild(el("div", { class: "timeline-card-related-range", text: item.related.range }));
      }
    }

    row.appendChild(card);
  });

  if (ribbon) {
    ribbon.appendChild(el("div", { class: "timeline-ribbon-line" }));
    const dotsWrap = el("div", { class: "timeline-ribbon-dots" });
    timeline.forEach(() => {
      const holder = el("span");
      holder.appendChild(el("span", { class: "timeline-ribbon-dot" }));
      dotsWrap.appendChild(holder);
    });
    ribbon.appendChild(dotsWrap);
  }

  const cards = Array.from(row.querySelectorAll(".timeline-card"));
  const ribbonDots = ribbon ? Array.from(ribbon.querySelectorAll(".timeline-ribbon-dot")) : [];

  function renderPanel(item) {
    const content = el("div", { class: "timeline-content" });
    content.appendChild(el("div", { class: "timeline-content-date", text: item.range }));

    const titleRow = el("div", { class: "timeline-content-title-row" });
    titleRow.appendChild(el("h3", { class: "timeline-content-title", text: item.title }));
    if (item.current) {
      titleRow.appendChild(el("span", { class: "timeline-current-flag", text: "Present" }));
    }
    content.appendChild(titleRow);
    content.appendChild(el("div", { class: "timeline-content-org", text: item.org }));

    if (item.detail) {
      content.appendChild(el("p", { class: "timeline-content-detail", text: item.detail }));
    }

    if (item.secondary) {
      const sub = el("div", { class: "timeline-sub" });
      const head = el("div", { class: "timeline-sub-head" });
      head.appendChild(el("b", { text: item.secondary.title }));
      head.appendChild(
        document.createTextNode(` · ${item.secondary.org} · ${item.secondary.range}`)
      );
      sub.appendChild(head);
      if (item.secondary.detail) {
        sub.appendChild(el("p", { text: item.secondary.detail }));
      }
      content.appendChild(sub);
    }

    if (item.related) {
      const related = el("div", { class: "timeline-related" });
      const head = el("div", { class: "timeline-related-head" });
      head.appendChild(el("span", { class: "timeline-related-title", text: item.related.title }));
      head.appendChild(el("span", { class: "timeline-related-org", text: item.related.org }));
      if (item.related.range) {
        head.appendChild(el("span", { class: "timeline-related-range", text: item.related.range }));
      }
      related.appendChild(head);
      if (item.related.detail) {
        related.appendChild(el("p", { class: "timeline-related-detail", text: item.related.detail }));
      }
      content.appendChild(related);
    }

    const swap = () => {
      panel.innerHTML = "";
      panel.setAttribute("aria-labelledby", `timeline-tab-${item.id}`);
      panel.appendChild(content);
      panel.classList.remove("is-fading");
    };

    if (prefersReducedMotion) {
      swap();
    } else {
      panel.classList.add("is-fading");
      setTimeout(swap, 140);
    }
  }

  function setActive(index, opts = {}) {
    index = Math.max(0, Math.min(timeline.length - 1, index));
    activeIndex = index;

    cards.forEach((card, i) => {
      const isActive = i === index;
      card.classList.toggle("is-active", isActive);
      card.setAttribute("aria-selected", isActive ? "true" : "false");
      card.tabIndex = isActive ? 0 : -1;
    });

    ribbonDots.forEach((dot, i) => dot.classList.toggle("is-active", i === index));

    renderPanel(timeline[index]);

    if (opts.focus) cards[index].focus();
  }

  row.addEventListener("click", (e) => {
    const card = e.target.closest(".timeline-card");
    if (!card) return;
    setActive(Number(card.dataset.index));
  });

  row.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      setActive(activeIndex + 1, { focus: true });
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      setActive(activeIndex - 1, { focus: true });
    } else if (e.key === "Home") {
      e.preventDefault();
      setActive(0, { focus: true });
    } else if (e.key === "End") {
      e.preventDefault();
      setActive(timeline.length - 1, { focus: true });
    }
  });

  setActive(activeIndex);
}

/* ---------- Skills (home page) ---------- */
function renderSkills() {
  const container = qs("#skills-grid");
  if (!container) return;
  skills.forEach((s) => {
    const group = el("div", { class: "skill-group" });
    const head = el("div", { class: "skill-head" });
    if (s.icon) head.appendChild(el("span", { class: "skill-icon", html: s.icon }));
    head.appendChild(el("h4", { text: s.group }));
    group.appendChild(head);
    group.appendChild(el("p", { text: s.items }));
    container.appendChild(group);
  });
}

/* ---------- Project cards (home + projects list) ---------- */
function renderProjectCards(containerSel, limit) {
  const container = qs(containerSel);
  if (!container) return;

  if (projects.length === 0) {
    container.appendChild(
      el("div", {
        class: "empty-state",
        html: "<strong>No case studies yet.</strong> Add one in <code>js/data.js</code> under the <code>projects</code> array.",
      })
    );
    return;
  }

  const list = limit ? projects.slice(0, limit) : projects;
  list.forEach((p) => {
    const card = el("a", { class: "card" });
    card.href = `project.html?id=${encodeURIComponent(p.id)}`;

    const top = el("div", { class: "card-top" });
    top.appendChild(el("h3", { text: p.title }));
    top.appendChild(el("span", { class: "card-date", text: p.dates }));
    card.appendChild(top);

    card.appendChild(el("p", { class: "card-summary", text: p.summary }));

    if (p.scope) {
      card.appendChild(el("span", { class: "scope-badge", text: "Academic project" }));
    }

    const tagRow = el("div", { class: "tag-row" });
    p.tags.forEach((t) => tagRow.appendChild(el("span", { class: "tag", text: t })));
    card.appendChild(tagRow);

    if (p.metric) card.appendChild(el("div", { class: "card-metric", text: p.metric }));

    container.appendChild(card);
  });
}

/* ---------- Blog cards (home + blog list) ---------- */
function renderBlogCards(containerSel, limit) {
  const container = qs(containerSel);
  if (!container) return;

  if (blogPosts.length === 0) {
    container.appendChild(
      el("div", {
        class: "empty-state",
        html: "<strong>No posts yet.</strong> Add one in <code>js/data.js</code> under the <code>blogPosts</code> array.",
      })
    );
    return;
  }

  const sorted = [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date));
  const list = limit ? sorted.slice(0, limit) : sorted;

  list.forEach((post) => {
    const card = el("a", { class: "card" });
    card.href = `blog-post.html?id=${encodeURIComponent(post.id)}`;

    const top = el("div", { class: "card-top" });
    top.appendChild(el("h3", { text: post.title }));
    top.appendChild(el("span", { class: "card-date", text: formatDate(post.date) }));
    card.appendChild(top);

    card.appendChild(el("p", { class: "card-summary", text: post.excerpt }));

    const tagRow = el("div", { class: "tag-row" });
    post.tags.forEach((t) => tagRow.appendChild(el("span", { class: "tag", text: t })));
    card.appendChild(tagRow);

    container.appendChild(card);
  });
}

/* ---------- Project detail page ---------- */
function renderProjectDetail() {
  const container = qs("#project-detail");
  if (!container) return;

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const project = projects.find((p) => p.id === id);

  if (!project) {
    container.innerHTML =
      "<p><strong>Case study not found.</strong> It may have been renamed or removed. <a href=\"projects.html\">Back to all case studies</a>.</p>";
    return;
  }

  document.title = `${project.title} | Ayush Kumar`;

  const header = el("div", { class: "wrap" });
  header.appendChild(el("a", { class: "back-link", text: "← All case studies" })).href =
    "projects.html";
  header.appendChild(el("h1", { text: project.title }));
  header.appendChild(el("p", { class: "role", text: project.summary }));

  const meta = el("div", { class: "detail-meta" });
  meta.appendChild(el("span", { class: "card-date", text: project.dates }));
  project.tags.forEach((t) => meta.appendChild(el("span", { class: "tag", text: t })));
  header.appendChild(meta);

  const headerWrap = el("div", { class: "detail-header" });
  headerWrap.appendChild(header);
  container.appendChild(headerWrap);

  const body = el("div", { class: "detail-body" });
  const bodyWrap = el("div", { class: "wrap" });

  bodyWrap.appendChild(el("h4", { text: "The problem" }));
  bodyWrap.appendChild(el("p", { text: project.problem }));

  if (project.context) {
    bodyWrap.appendChild(el("div", { class: "context-line", text: project.context }));
  }

  if (project.scope) {
    const scopeBlock = el("div", { class: "scope-line" });
    scopeBlock.appendChild(el("span", { class: "scope-label", text: "Scope" }));
    scopeBlock.appendChild(document.createTextNode(" " + project.scope));
    bodyWrap.appendChild(scopeBlock);
  }

  bodyWrap.appendChild(el("h4", { text: "The approach" }));
  const approachList = el("ul");
  project.approach.forEach((step) => approachList.appendChild(el("li", { text: step })));
  bodyWrap.appendChild(approachList);

  if (project.diagram) {
    const diagramBlock = el("div", { class: "diagram-block" });
    const img = el("img");
    img.src = project.diagram.src;
    img.alt = project.diagram.caption || `Diagram illustrating ${project.title}`;
    diagramBlock.appendChild(img);
    if (project.diagram.caption) {
      diagramBlock.appendChild(el("p", { class: "diagram-caption", text: project.diagram.caption }));
    }
    bodyWrap.appendChild(diagramBlock);
  }

  bodyWrap.appendChild(el("h4", { text: "Tools & techniques" }));
  const toolsRow = el("div", { class: "tag-row" });
  project.tools.forEach((t) => toolsRow.appendChild(el("span", { class: "tag", text: t })));
  bodyWrap.appendChild(toolsRow);

  bodyWrap.appendChild(el("h4", { text: "Outcome" }));
  const outcomeStrip = el("div", { class: "outcome-strip" });
  project.outcome.forEach((o) => {
    const item = el("div");
    item.appendChild(el("span", { class: "ledger-num", text: o.num }));
    item.appendChild(el("div", { class: "ledger-label", text: o.label }));
    outcomeStrip.appendChild(item);
  });
  bodyWrap.appendChild(outcomeStrip);

  body.appendChild(bodyWrap);
  container.appendChild(body);
}

/* ---------- Blog post detail page ---------- */
function renderBlogPostDetail() {
  const container = qs("#blog-detail");
  if (!container) return;

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    container.innerHTML =
      "<p><strong>Post not found.</strong> It may have been renamed or removed. <a href=\"blog.html\">Back to all posts</a>.</p>";
    return;
  }

  document.title = `${post.title} | Ayush Kumar`;

  const header = el("div", { class: "wrap" });
  header.appendChild(el("a", { class: "back-link", text: "← All posts" })).href = "blog.html";
  header.appendChild(el("h1", { text: post.title }));

  const meta = el("div", { class: "detail-meta" });
  meta.appendChild(el("span", { class: "card-date", text: formatDate(post.date) }));
  post.tags.forEach((t) => meta.appendChild(el("span", { class: "tag", text: t })));
  header.appendChild(meta);

  const headerWrap = el("div", { class: "detail-header" });
  headerWrap.appendChild(header);
  container.appendChild(headerWrap);

  const body = el("div", { class: "detail-body" });
  const bodyWrap = el("div", { class: "wrap" });
  post.content.forEach((block) => {
    if (typeof block === "string") {
      bodyWrap.appendChild(el("p", { text: block }));
    } else if (block.heading) {
      bodyWrap.appendChild(el("h4", { text: block.heading }));
    } else if (block.list) {
      const ol = el("ol");
      block.list.forEach((item) => ol.appendChild(el("li", { text: item })));
      bodyWrap.appendChild(ol);
    }
  });
  body.appendChild(bodyWrap);
  container.appendChild(body);
}

/* ---------- Count-up animation for numeric metrics ---------- */
const prefersReducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function animateCountUp(node) {
  const raw = node.textContent.trim();
  const match = raw.match(/^([^\d]*)(\d[\d,]*)(.*)$/);
  if (!match || prefersReducedMotion) return; // non-numeric (e.g. "Automated") or motion disabled: leave as-is

  const [, prefix, numStr, suffix] = match;
  const target = parseInt(numStr.replace(/,/g, ""), 10);
  if (isNaN(target)) return;

  const duration = 900;
  const start = performance.now();

  function frame(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(target * eased);
    node.textContent = `${prefix}${current.toLocaleString()}${suffix}`;
    if (progress < 1) requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

function initCountUps() {
  const nodes = document.querySelectorAll(".ledger-num, .outcome-strip .ledger-num");
  if (nodes.length === 0) return;

  if (!("IntersectionObserver" in window) || prefersReducedMotion) {
    return; // leave static values as rendered, no animation, still correct
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCountUp(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 }
  );
  nodes.forEach((n) => observer.observe(n));
}

/* ---------- CV request modal (home page) ---------- */
function initCvModal() {
  const openBtn = qs("#open-cv-modal");
  const backdrop = qs("#cv-modal-backdrop");
  const closeBtn = qs("#cv-modal-close");
  const form = qs("#cv-modal-form");
  const status = qs("#cv-modal-status");
  const nameField = qs("#cv-name");
  const emailField = qs("#cv-email");
  const companyField = qs("#cv-company");
  if (!openBtn || !backdrop || !form) return;

  let lastFocused = null;

  function openModal() {
    lastFocused = document.activeElement;
    backdrop.hidden = false;
    document.body.style.overflow = "hidden";
    if (nameField) nameField.focus();
  }

  function closeModal() {
    backdrop.hidden = true;
    document.body.style.overflow = "";
    if (lastFocused) lastFocused.focus();
  }

  openBtn.addEventListener("click", openModal);
  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  backdrop.addEventListener("click", (e) => {
    if (e.target === backdrop) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !backdrop.hidden) closeModal();
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = nameField ? nameField.value.trim() : "";
    const email = emailField ? emailField.value.trim() : "";
    const company = companyField ? companyField.value.trim() : "";
    if (!name || !email || !company) return;

    if (status) status.textContent = "Sending your request...";

    // No backend on this static site: relay the request via FormSubmit
    // (https://formsubmit.co) so it lands directly in my inbox as a normal
    // email, and I follow up by hand with a CV tailored to that company.
    // Nothing downloads automatically here, so a failed relay has to be
    // surfaced rather than papered over with a fallback file.
    fetch(`https://formsubmit.co/ajax/${encodeURIComponent(profile.email)}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        name,
        email,
        company,
        _subject: `CV request from ${name} (${company}) via portfolio site`,
      }),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Relay responded with an error");
        if (status) status.textContent = "Thanks — I'll follow up with a tailored CV shortly.";
        form.reset();
        setTimeout(closeModal, 1800);
      })
      .catch(() => {
        if (status) {
          status.innerHTML = "";
          status.appendChild(
            document.createTextNode("That didn't go through. Please email me directly at ")
          );
          const mailLink = el("a", { text: profile.email });
          mailLink.href = `mailto:${profile.email}?subject=${encodeURIComponent(
            "CV request" + (company ? ` (${company})` : "")
          )}`;
          status.appendChild(mailLink);
          status.appendChild(document.createTextNode(" and I'll send it over."));
        }
      });
  });
}

/* ---------- Horizontally-scrolling carousel (home page) ---------- */
function initCarousel(containerId) {
  const track = document.getElementById(containerId);
  if (!track) return;
  const wrapper = track.closest(".carousel");
  if (!wrapper) return;
  const prevBtn = wrapper.querySelector(".carousel-arrow--prev");
  const nextBtn = wrapper.querySelector(".carousel-arrow--next");
  if (!prevBtn || !nextBtn) return;

  function scrollStep() {
    const card = track.querySelector(".card");
    const gap = 24; // matches --gap-lg used for .card-list--carousel
    return card ? card.getBoundingClientRect().width + gap : track.clientWidth * 0.8;
  }

  function updateArrows() {
    const maxScroll = track.scrollWidth - track.clientWidth - 1;
    prevBtn.disabled = track.scrollLeft <= 0;
    nextBtn.disabled = track.scrollLeft >= maxScroll;
  }

  prevBtn.addEventListener("click", () => {
    track.scrollBy({ left: -scrollStep(), behavior: "smooth" });
  });
  nextBtn.addEventListener("click", () => {
    track.scrollBy({ left: scrollStep(), behavior: "smooth" });
  });
  track.addEventListener("scroll", updateArrows, { passive: true });
  window.addEventListener("resize", updateArrows);
  updateArrows();
}

/* ---------- Footer year ---------- */
function renderFooter() {
  const y = qs("#year");
  if (y) y.textContent = new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", () => {
  initNav();
  renderLedger();
  renderAbout();
  initTimeline();
  renderSkills();
  renderProjectCards("#featured-projects");
  renderProjectCards("#all-projects");
  renderBlogCards("#featured-posts");
  renderBlogCards("#all-posts");
  renderTestimonials();
  renderProjectDetail();
  renderBlogPostDetail();
  renderFooter();
  initCountUps();
  initCvModal();
  initCarousel("featured-projects");
  initCarousel("featured-posts");
});
