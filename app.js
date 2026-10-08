/* Renders the whole site from data.js — no HTML edits needed. */
(function () {
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  }[c]));

  // Hero + about + footer
  document.getElementById("hero-name").textContent = HUB.name;
  document.getElementById("hero-tagline").textContent = HUB.tagline;
  document.getElementById("hero-bio").textContent = HUB.bio;
  document.getElementById("about-bio").textContent = HUB.bio;
  document.getElementById("footer-text").textContent = HUB.footer;
  document.title = HUB.name + " — Apps, Projects & More";

  // Apps
  const appsGrid = document.getElementById("apps-grid");
  HUB.apps.forEach((a) => {
    const card = document.createElement("div");
    card.className = "card" + (a.featured ? " featured" : "");
    card.innerHTML = `
      <div class="app-icon">${esc(a.icon)}</div>
      <h3>${esc(a.name)}</h3>
      <div class="tagline">${esc(a.tagline)}</div>
      <p class="desc">${esc(a.description)}</p>
      <div class="meta">
        ${a.version ? `<span class="pill">${esc(a.version)}</span>` : ""}
        ${a.size ? `<span class="pill">${esc(a.size)}</span>` : ""}
        <span class="pill">Android</span>
      </div>
      <div class="card-actions">
        ${a.download ? `<a class="btn primary small" href="${esc(a.download)}" target="_blank" rel="noopener">⬇ Download</a>` : ""}
        ${a.source ? `<a class="btn ghost small" href="${esc(a.source)}" target="_blank" rel="noopener">Source</a>` : ""}
      </div>`;
    appsGrid.appendChild(card);
  });

  // Projects
  const projGrid = document.getElementById("projects-grid");
  HUB.projects.forEach((p) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>${esc(p.name)}</h3>
      <p class="desc">${esc(p.description)}</p>
      <div class="tags">${(p.tags || []).map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>
      <div class="card-actions">
        ${p.repo ? `<a class="btn ghost small" href="${esc(p.repo)}" target="_blank" rel="noopener">Repo</a>` : ""}
        ${p.demo ? `<a class="btn primary small" href="${esc(p.demo)}" target="_blank" rel="noopener">Live demo</a>` : ""}
      </div>`;
    projGrid.appendChild(card);
  });

  // Links
  const row = document.getElementById("links-row");
  HUB.links.forEach((l) => {
    const a = document.createElement("a");
    a.className = "link-chip";
    a.href = l.url;
    a.target = "_blank";
    a.rel = "noopener";
    a.textContent = `${l.icon} ${l.label}`;
    row.appendChild(a);
  });
})();
