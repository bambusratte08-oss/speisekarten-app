"use strict";

const $ = (sel, root = document) => root.querySelector(sel);

const state = {
  query: "",
  cat: "alle",
  favs: new Set(JSON.parse(localStorage.getItem("skh_favs") || "[]")),
  onlyFavs: false
};

function saveFavs() {
  localStorage.setItem("skh_favs", JSON.stringify([...state.favs]));
}

function norm(s) {
  return s.toLowerCase()
    .replace(/ä/g, "a").replace(/ö/g, "o").replace(/ü/g, "u")
    .replace(/ß/g, "ss");
}

function mapsUrl(r, route) {
  const q = encodeURIComponent(r.addr || [r.name, r.place || "Landkreis Haßberge"].join(" "));
  return route
    ? `https://www.google.com/maps/dir/?api=1&destination=${q}`
    : `https://www.google.com/maps/search/?api=1&query=${q}`;
}

function prettyPhone(p) {
  return p.replace(/^\+49/, "0 ")
    .replace(/^0(\d{3,5})/, "0$1 ")
    .replace(/(\d{3,})(\d{3,})(\d{2,})$/, "$1 $2 $3");
}

function matches(r) {
  if (state.onlyFavs && !state.favs.has(r.id)) return false;
  if (state.cat !== "alle" && r.cat !== state.cat) return false;
  if (state.query) {
    const hay = norm([r.name, r.place, (r.addr || "")].join(" "));
    if (!hay.includes(state.query)) return false;
  }
  return true;
}

function renderChips() {
  const wrap = $("#chips");
  wrap.innerHTML = "";
  CATEGORIES.forEach(c => {
    const count = c.id === "alle"
      ? RESTAURANTS.length
      : RESTAURANTS.filter(r => r.cat === c.id).length;
    const b = document.createElement("button");
    b.className = "chip" + (state.cat === c.id ? " active" : "");
    b.textContent = `${c.label} (${count})`;
    b.addEventListener("click", () => {
      state.cat = c.id;
      renderChips();
      renderCards();
    });
    wrap.appendChild(b);
  });
  const favBtn = document.createElement("button");
  favBtn.className = "chip chip-fav" + (state.onlyFavs ? " active" : "");
  favBtn.textContent = `⭐ Favoriten (${state.favs.size})`;
  favBtn.addEventListener("click", () => {
    state.onlyFavs = !state.onlyFavs;
    renderChips();
    renderCards();
  });
  wrap.appendChild(favBtn);
}

function cardEl(r) {
  const el = document.createElement("article");
  el.className = "card";
  const isNew = !!r.isNew;
  const first = r.pages[0];
  let thumbHtml;
  if (!r.pages.length) {
    thumbHtml = `<div class="thumb-pdf">📋<br>folgt</div>`;
  } else if (first.type === "pdf" || first.type === "web") {
    thumbHtml = `<div class="thumb-pdf">📄<br>${first.type === "web" ? "Link" : "PDF"}</div>`;
  } else {
    thumbHtml = `<img loading="lazy" src="${first.url}" alt="Speisekarte ${r.name}">`;
  }
  el.innerHTML = `
    <div class="thumb">
      ${thumbHtml}
      <span class="badge-cat">${(CATEGORIES.find(c => c.id === r.cat) || {}).label || ""}</span>
      ${isNew ? `<span class="badge-new">NEU</span>` : ""}
    </div>
    <div class="card-body">
      <h3>${r.name}</h3>
      ${r.place ? `<p class="place">📍 ${r.place}</p>` : `<p class="place">Landkreis Haßberge</p>`}
      <p class="meta">${r.pages.length
        ? `${r.pages.length} ${r.pages.length === 1 ? "Karte" : "Karten"}`
        : "Speisekarte folgt"}</p>
    </div>
    <button class="fav${state.favs.has(r.id) ? " on" : ""}" aria-label="Favorit">★</button>
  `;
  const favBtn = $(".fav", el);
  favBtn.addEventListener("click", e => {
    e.stopPropagation();
    state.favs.has(r.id) ? state.favs.delete(r.id) : state.favs.add(r.id);
    saveFavs();
    favBtn.classList.toggle("on", state.favs.has(r.id));
    renderChips();
  });
  el.addEventListener("click", () => openViewer(r));
  return el;
}

function renderCards() {
  const grid = $("#grid");
  grid.innerHTML = "";
  const list = RESTAURANTS.filter(matches);
  if (!list.length) {
    $("#empty").style.display = "block";
    return;
  }
  $("#empty").style.display = "none";
  list.forEach(r => grid.appendChild(cardEl(r)));
}

/* ---- Viewer ---- */
let viewerRestaurant = null;
let viewerIndex = 0; // pages index; last position = Info-Tab

function openViewer(r) {
  viewerRestaurant = r;
  viewerIndex = r.pages.length ? 0 : 1;
  buildViewer();
  $("#viewer").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeViewer() {
  $("#viewer").classList.remove("open");
  document.body.style.overflow = "";
  $("#viewer-body").innerHTML = "";
}

function buildBodyPage(page) {
  const body = $("#viewer-body");
  body.innerHTML = "";
  body.style.zoom = "1";
  if (page.type === "pdf") {
    const wrap = document.createElement("div");
    wrap.className = "pdf-wrap";
    wrap.innerHTML = `
      <p>PDF-Speisekarte – ggf. extern öffnen, falls sie hier nicht erscheint.</p>
      <iframe src="${page.url}"></iframe>
      <a class="btn" href="${page.url}" target="_blank" rel="noopener">PDF öffnen ↗</a>
    `;
    body.appendChild(wrap);
  } else if (page.type === "web") {
    const wrap = document.createElement("div");
    wrap.className = "pdf-wrap";
    wrap.innerHTML = `
      <p>Diese Karte liegt auf einer externen Seite.</p>
      <a class="btn" href="${page.url}" target="_blank" rel="noopener">Karte öffnen ↗</a>
    `;
    body.appendChild(wrap);
  } else {
    const img = document.createElement("img");
    img.src = page.url;
    img.alt = `Speisekarte ${viewerRestaurant.name} – ${page.label}`;
    body.appendChild(img);
  }
}

function buildBodyInfo() {
  const r = viewerRestaurant;
  const body = $("#viewer-body");
  body.innerHTML = "";
  body.style.zoom = "1";
  const wrap = document.createElement("div");
  wrap.className = "info-panel";

  const cat = CATEGORIES.find(c => c.id === r.cat);
  let html = `<h3>${cat ? cat.label + " · " : ""}Info &amp; Anfahrt</h3>`;
  if (!r.pages.length) html += `<p class="note">Für dieses Lokal gibt es bisher keine Speisekarte – die Sammlung wird laufend ergänzt.</p>`;

  if (r.hours && r.hours.length) {
    html += `<h4>🕐 Öffnungszeiten</h4><ul>${r.hours.map(h => `<li>${h}</li>`).join("")}</ul>`;
  } else {
    html += `<h4>🕐 Öffnungszeiten</h4>
      <p class="note">Keine verlässlichen Daten vorhanden – die aktuellen Zeiten findest du auf Google Maps.</p>`;
  }

  if (r.phone) {
    html += `<a class="btn wide" href="tel:${r.phone}">📞 Anrufen: ${prettyPhone(r.phone)}</a>`;
  }

  html += `
    <div class="btn-row">
      <a class="btn wide" href="${mapsUrl(r)}" target="_blank" rel="noopener">🗺️ Auf Karte ansehen</a>
      <a class="btn wide" href="${mapsUrl(r, true)}" target="_blank" rel="noopener">🧭 Route starten</a>
    </div>
    <p class="note small">Adresse/Routing: Google Maps · Öffnungszeiten ohne Gewähr.</p>
  `;
  wrap.innerHTML = html;
  body.appendChild(wrap);
}

function buildViewer() {
  const r = viewerRestaurant;
  if (!r) return;
  const infoIndex = r.pages.length;
  const isInfo = viewerIndex === infoIndex;
  const page = r.pages[viewerIndex];

  $("#viewer-title").textContent = r.name;
  $("#viewer-sub").textContent = isInfo
    ? ((r.place ? r.place + " · " : "") + "Info & Anfahrt")
    : ((r.place ? r.place + " · " : "") + page.label);

  const tabs = $("#viewer-tabs");
  tabs.innerHTML = "";
  r.pages.forEach((p, i) => {
    const b = document.createElement("button");
    b.className = "tab" + (!isInfo && i === viewerIndex ? " active" : "");
    b.textContent = p.label;
    b.addEventListener("click", () => { viewerIndex = i; buildViewer(); });
    tabs.appendChild(b);
  });
  const ib = document.createElement("button");
  ib.className = "tab tab-info" + (isInfo ? " active" : "");
  ib.textContent = "ℹ️ Info";
  ib.addEventListener("click", () => { viewerIndex = infoIndex; buildViewer(); });
  tabs.appendChild(ib);
  $("#zoom-row").style.display = isInfo ? "none" : "flex";

  if (isInfo) buildBodyInfo();
  else buildBodyPage(page);
}

$("#zoom-in").addEventListener("click", () => zb(0.25));
$("#zoom-out").addEventListener("click", () => zb(-0.25));
function zb(delta) {
  const body = $("#viewer-body");
  const cur = parseFloat(body.style.zoom || "1");
  body.style.zoom = Math.min(4, Math.max(1, cur + delta));
}

$("#viewer-close").addEventListener("click", closeViewer);
$("#viewer").addEventListener("click", e => { if (e.target.id === "viewer") closeViewer(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") closeViewer(); });

/* ---- Init ---- */
$("#search").addEventListener("input", e => {
  state.query = norm(e.target.value.trim());
  renderCards();
});

let deferredPrompt = null;
window.addEventListener("beforeinstallprompt", e => {
  e.preventDefault();
  deferredPrompt = e;
  $("#install").style.display = "inline-block";
});
$("#install").addEventListener("click", async () => {
  if (!deferredPrompt) return;
  deferredPrompt.prompt();
  await deferredPrompt.userChoice;
  deferredPrompt = null;
  $("#install").style.display = "none";
});

renderChips();
renderCards();

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./sw.js").catch(() => {});
}
