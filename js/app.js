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

function matches(r) {
  if (state.onlyFavs && !state.favs.has(r.id)) return false;
  if (state.cat !== "alle" && r.cat !== state.cat) return false;
  if (state.query) {
    const hay = norm([r.name, r.place, r.pages.map(p => p.label).join(" ")].join(" "));
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
  const first = r.pages[0];
  const isImg = first.type !== "pdf";
  el.innerHTML = `
    <div class="thumb">
      ${isImg
        ? `<img loading="lazy" src="${first.url}" alt="Speisekarte ${r.name}">`
        : `<div class="thumb-pdf">📄<br>PDF</div>`}
      <span class="badge-cat">${(CATEGORIES.find(c => c.id === r.cat) || {}).label || ""}</span>
    </div>
    <div class="card-body">
      <h3>${r.name}</h3>
      ${r.place ? `<p class="place">📍 ${r.place}</p>` : `<p class="place">Landkreis Haßberge</p>`}
      <p class="meta">${r.pages.length} ${r.pages.length === 1 ? "Karte" : "Karten"}</p>
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
let viewerPage = 0;

function openViewer(r) {
  viewerRestaurant = r;
  viewerPage = 0;
  buildViewer();
  $("#viewer").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeViewer() {
  $("#viewer").classList.remove("open");
  document.body.style.overflow = "";
  $("#viewer-body").innerHTML = "";
}

function buildViewer() {
  const r = viewerRestaurant;
  if (!r) return;
  const page = r.pages[viewerPage];
  $("#viewer-title").textContent = r.name;
  $("#viewer-sub").textContent =
    (r.place ? r.place + " · " : "") + page.label;

  const tabs = $("#viewer-tabs");
  tabs.innerHTML = "";
  if (r.pages.length > 1) {
    r.pages.forEach((p, i) => {
      const b = document.createElement("button");
      b.className = "tab" + (i === viewerPage ? " active" : "");
      b.textContent = p.label;
      b.addEventListener("click", () => { viewerPage = i; buildViewer(); });
      tabs.appendChild(b);
    });
  }

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
  } else {
    const img = document.createElement("img");
    img.src = page.url;
    img.alt = `Speisekarte ${r.name} – ${page.label}`;
    body.appendChild(img);
  }
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
