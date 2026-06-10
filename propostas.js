/* ============================================================
   Propostas de Posts · Bora — lógica do estúdio
   ============================================================ */
(function () {
  const LOGO = "assets/brand-kit/logo/";
  const MARK = { EDU: "bora-mark-white.png", POS: "bora-mark-white.png", HUM: "bora-mark-color.png", CAS: "bora-mark-white.png" };
  const PILAR = {
    EDU: { nm: "Educação em GP", color: "#1A2234", chip: "#F4A01C" },
    POS: { nm: "Posicionamento", color: "#E8622A", chip: "#E8622A" },
    HUM: { nm: "Humanização", color: "#1A2234", chip: "#FF4F2B" },
    CAS: { nm: "Caso & Aplicação", color: "#2D9E6B", chip: "#2D9E6B" },
  };
  const PILAR_TXT = { EDU: "#1A2234", POS: "#fff", HUM: "#fff", CAS: "#fff" };

  const ICON = {
    dl: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12M7 11l5 5 5-5M5 21h14"/></svg>',
    copy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/></svg>',
    edit: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>',
    img: '<svg class="pg__imgicon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="8.5" cy="9" r="1.6"/><path d="M21 16l-5-5L5 20"/></svg>',
  };

  const store = {
    get(id) { try { return JSON.parse(localStorage.getItem("bora_prop_" + id) || "{}"); } catch (e) { return {}; } },
    set(id, v) { try { localStorage.setItem("bora_prop_" + id, JSON.stringify(v)); } catch (e) {} },
  };

  function el(tag, cls, html) { const n = document.createElement(tag); if (cls) n.className = cls; if (html != null) n.innerHTML = html; return n; }

  /* ---- build the live 1080×1080 graphic ---- */
  function buildGraphic(post) {
    const saved = store.get(post.id);
    const mode = saved.mode || post.mode || "texto";
    const pg = el("div", "pg");
    pg.dataset.pilar = post.pilar;
    pg.dataset.mode = mode;
    const markSrc = LOGO + MARK[post.pilar];
    const title = saved.title != null ? saved.title : post.title;
    const sub = saved.sub != null ? saved.sub : post.sub;

    pg.innerHTML =
      '<div class="pg__grain"></div>' +
      '<div class="pg__imgzone" data-img>' +
        '<div class="pg__imgframe"></div>' + ICON.img +
        '<div class="pg__imglabel">SUA IMAGEM AQUI</div>' +
        '<div class="pg__imghint">clique para enviar uma foto · 1080 × 520</div>' +
      '</div>' +
      '<div class="pg__pill"><img src="' + markSrc + '" alt="Bora"><span class="pg__wm">BORA</span></div>' +
      '<div class="pg__lockup"><img src="' + markSrc + '" alt="Bora"><span class="pg__wm">BORA</span></div>' +
      '<div class="pg__body">' +
        '<div class="pg__bar"></div>' +
        '<div class="pg__tag">' + PILAR[post.pilar].nm + '</div>' +
        '<div class="pg__title" contenteditable="true" spellcheck="false"></div>' +
        '<div class="pg__sub" contenteditable="true" spellcheck="false"></div>' +
      '</div>' +
      '<div class="pg__foot"><span class="site">boraprojetos.com</span><span class="cta">Bora conversar <b>›</b></span></div>';

    pg.querySelector(".pg__title").textContent = title;
    pg.querySelector(".pg__sub").textContent = sub;

    // image upload
    const zone = pg.querySelector("[data-img]");
    const fileInput = el("input"); fileInput.type = "file"; fileInput.accept = "image/*"; fileInput.style.display = "none";
    pg.appendChild(fileInput);
    zone.addEventListener("click", () => fileInput.click());
    fileInput.addEventListener("change", () => {
      const f = fileInput.files[0]; if (!f) return;
      const fr = new FileReader();
      fr.onload = () => { zone.style.backgroundImage = "url(" + fr.result + ")"; zone.classList.add("has-img"); };
      fr.readAsDataURL(f);
    });

    // persist edits
    const save = () => {
      const v = store.get(post.id);
      v.title = pg.querySelector(".pg__title").textContent;
      v.sub = pg.querySelector(".pg__sub").textContent;
      v.mode = pg.dataset.mode;
      store.set(post.id, v);
    };
    pg.querySelector(".pg__title").addEventListener("input", () => { save(); fitTitle(pg); });
    pg.querySelector(".pg__sub").addEventListener("input", save);

    return pg;
  }

  /* ---- shrink title until it fits above the footer ---- */
  function fitTitle(pg) {
    const body = pg.querySelector(".pg__body");
    const title = pg.querySelector(".pg__title");
    const mode = pg.dataset.mode;
    const bodyTop = mode === "imagem" ? 572 : 384;
    const footTop = mode === "imagem" ? 1080 - 64 - 40 : 1080 - 92 - 46;
    const avail = footTop - bodyTop;
    let fs = mode === "imagem" ? 60 : 82;
    title.style.fontSize = fs + "px";
    let guard = 0;
    while (body.scrollHeight > avail && fs > 26 && guard < 80) { fs -= 2; title.style.fontSize = fs + "px"; guard++; }
  }

  /* ---- scale the graphic to fit its frame ---- */
  function scaleAll() {
    document.querySelectorAll(".pg-frame").forEach((frame) => {
      const pg = frame.querySelector(".pg");
      if (!pg) return;
      const s = frame.clientWidth / 1080;
      pg.style.transform = "scale(" + s + ")";
    });
  }

  /* ---- toast ---- */
  let toastT;
  function toast(msg) {
    let t = document.querySelector(".toast");
    if (!t) { t = el("div", "toast"); document.body.appendChild(t); }
    t.textContent = msg; t.classList.add("show");
    clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove("show"), 2200);
  }

  function download(dataUrl, name) {
    const a = el("a"); a.href = dataUrl; a.download = name; document.body.appendChild(a); a.click(); a.remove();
  }

  /* ---- reliable canvas renderer (no external lib) ---- */
  const CFG = {
    EDU: { bg:"#1A2234", fg:"#F3F1EC", accent:"#F4A01C", muted:"rgba(243,241,236,0.62)", imgBg:"#ECE6DB", imgFg:"#1A2234", grain:true },
    POS: { bg:"#E8622A", fg:"#FFFFFF", accent:"#1A2234", muted:"rgba(255,255,255,0.9)", imgBg:"#ECE6DB", imgFg:"#1A2234", grain:true },
    HUM: { bg:"#F5F0E8", fg:"#1A2234", accent:"#E8622A", muted:"#3F4654", imgBg:"#1A2234", imgFg:"#ECE6DB", grain:false },
    CAS: { bg:"#1A2234", fg:"#F3F1EC", accent:"#2D9E6B", muted:"rgba(243,241,236,0.62)", imgBg:"#ECE6DB", imgFg:"#1A2234", grain:true },
  };
  let _grain = null;
  function grainPat() {
    if (_grain) return _grain;
    const n = document.createElement("canvas"); n.width = n.height = 160; const nc = n.getContext("2d");
    const id = nc.createImageData(160, 160);
    for (let i = 0; i < id.data.length; i += 4) { const v = Math.random() * 255; id.data[i] = id.data[i+1] = id.data[i+2] = v; id.data[i+3] = 255; }
    nc.putImageData(id, 0, 0); _grain = n; return n;
  }
  function rrect(c, x, y, w, h, r) { r = Math.min(r, w/2, h/2); c.beginPath(); c.moveTo(x+r,y); c.arcTo(x+w,y,x+w,y+h,r); c.arcTo(x+w,y+h,x,y+h,r); c.arcTo(x,y+h,x,y,r); c.arcTo(x,y,x+w,y,r); c.closePath(); }
  function LSp(c, v) { try { c.letterSpacing = v; } catch (e) {} }
  function wrap(c, text, maxW) {
    const words = (text || "").split(/\s+/); const lines = []; let cur = "";
    for (const w of words) { const t = cur ? cur + " " + w : w; if (c.measureText(t).width > maxW && cur) { lines.push(cur); cur = w; } else cur = t; }
    if (cur) lines.push(cur); return lines.length ? lines : [""];
  }
  function loadImg(src) { return new Promise((res, rej) => { const im = new Image(); im.crossOrigin = "anonymous"; im.onload = () => res(im); im.onerror = rej; im.src = src; }); }
  function cover(c, img, dx, dy, dw, dh) {
    const s = Math.max(dw / img.width, dh / img.height); const w = img.width * s, h = img.height * s;
    c.drawImage(img, dx + (dw - w) / 2, dy + (dh - h) / 2, w, h);
  }
  function imgIcon(c, cx, cy, s, col) {
    c.save(); c.strokeStyle = col; c.fillStyle = col; c.lineWidth = s*0.045; c.lineJoin = "round";
    rrect(c, cx-s/2, cy-s*0.38, s, s*0.76, s*0.08); c.stroke();
    c.beginPath(); c.arc(cx-s*0.22, cy-s*0.14, s*0.09, 0, 7); c.fill();
    c.beginPath(); c.moveTo(cx-s*0.42, cy+s*0.3); c.lineTo(cx-s*0.12, cy-s*0.02); c.lineTo(cx+s*0.08, cy+s*0.16); c.lineTo(cx+s*0.26, cy-s*0.04); c.lineTo(cx+s*0.42, cy+s*0.3); c.stroke();
    c.restore();
  }

  async function rasterize(pg, type) {
    const cfg = CFG[pg.dataset.pilar], mode = pg.dataset.mode;
    const title = pg.querySelector(".pg__title").textContent.trim();
    const sub = pg.querySelector(".pg__sub").textContent.trim();
    const tag = pg.querySelector(".pg__tag").textContent.trim().toUpperCase();
    const markImg = pg.querySelector(".pg__lockup img");
    const W = 1080, H = 1080, PAD = 96, maxW = W - PAD*2;
    const cv = document.createElement("canvas"); cv.width = W; cv.height = H; const x = cv.getContext("2d");

    x.fillStyle = cfg.bg; x.fillRect(0, 0, W, H);
    const drawGrain = (gx, gy, gw, gh) => { if (!cfg.grain) return; x.save(); x.globalAlpha = .085; x.globalCompositeOperation = "overlay"; x.fillStyle = x.createPattern(grainPat(), "repeat"); x.fillRect(gx, gy, gw, gh); x.restore(); };

    if (mode !== "imagem") {
      drawGrain(0, 0, W, H);
      // lockup
      if (markImg && markImg.complete) x.drawImage(markImg, PAD, 92, 74, 74);
      x.font = "600 46px Syne"; x.textAlign = "left"; x.textBaseline = "middle"; x.fillStyle = cfg.fg; LSp(x, "2px"); x.fillText("BORA", PAD+90, 132); LSp(x, "0px");
      // bar + tag
      x.fillStyle = cfg.accent; x.fillRect(PAD, 384, 56, 5);
      x.font = "500 25px 'DM Sans'"; x.textBaseline = "top"; LSp(x, "4px"); x.fillStyle = cfg.accent; x.fillText(tag, PAD, 406); LSp(x, "0px");
      // fit + draw title
      const subSize = 34, subLh = Math.round(subSize*1.4);
      x.font = `400 ${subSize}px 'DM Sans'`; const subLines = wrap(x, sub, maxW);
      let fs = 82, titleLines, lh;
      while (fs > 28) { x.font = `600 ${fs}px Syne`; LSp(x, "0.5px"); titleLines = wrap(x, title, maxW); lh = Math.round(fs*1.05); LSp(x, "0px"); if (470 + titleLines.length*lh + 26 + subLines.length*subLh <= 946) break; fs -= 2; }
      x.font = `600 ${fs}px Syne`; x.fillStyle = cfg.fg; x.textBaseline = "top"; LSp(x, "0.5px");
      let y = 470; titleLines.forEach((l) => { x.fillText(l, PAD, y); y += lh; }); LSp(x, "0px");
      y += 26; x.font = `400 ${subSize}px 'DM Sans'`; x.fillStyle = cfg.muted; subLines.forEach((l) => { x.fillText(l, PAD, y); y += subLh; });
      // footer
      x.font = "500 27px 'DM Sans'"; x.textBaseline = "alphabetic"; x.fillStyle = cfg.muted; x.textAlign = "left"; x.fillText("boraprojetos.com", PAD, H-92);
      x.fillStyle = cfg.accent; x.textAlign = "right"; x.fillText("Bora conversar", W-PAD-26, H-92); x.font = "600 27px Syne"; x.fillText("›", W-PAD, H-92); x.textAlign = "left";
    } else {
      const IMGH = 520;
      // image zone
      const zone = pg.querySelector("[data-img]");
      let drew = false;
      if (zone && zone.classList.contains("has-img")) {
        const m = /url\(["']?(.*?)["']?\)/.exec(zone.style.backgroundImage);
        if (m) { try { const im = await loadImg(m[1]); cover(x, im, 0, 0, W, IMGH); drew = true; } catch (e) {} }
      }
      if (!drew) {
        x.fillStyle = cfg.imgBg; x.fillRect(0, 0, W, IMGH);
        x.save(); x.setLineDash([12, 12]); x.strokeStyle = cfg.imgFg; x.globalAlpha = .45; x.lineWidth = 2; rrect(x, 40, 40, W-80, IMGH-80, 18); x.stroke(); x.restore();
        imgIcon(x, W/2, IMGH/2-22, 120, cfg.imgFg);
        x.save(); x.globalAlpha = .7; x.fillStyle = cfg.imgFg; x.font = "500 27px 'DM Sans'"; x.textAlign = "center"; x.textBaseline = "top"; LSp(x, "1px"); x.fillText("SUA IMAGEM AQUI", W/2, IMGH/2+66); LSp(x, "0px"); x.globalAlpha = .5; x.font = "400 21px 'DM Sans'"; x.fillText("1080 × 520 · arraste sua foto", W/2, IMGH/2+104); x.restore(); x.textAlign = "left";
      }
      // panel + grain
      x.fillStyle = cfg.bg; x.fillRect(0, IMGH, W, H-IMGH); drawGrain(0, IMGH, W, H-IMGH);
      // pill lockup
      x.fillStyle = cfg.bg; rrect(x, 72, 42, 266, 72, 999); x.fill();
      if (markImg && markImg.complete) x.drawImage(markImg, 88, 52, 52, 52);
      x.font = "600 36px Syne"; x.textBaseline = "middle"; x.fillStyle = cfg.fg; LSp(x, "2px"); x.fillText("BORA", 152, 80); LSp(x, "0px");
      // body
      x.fillStyle = cfg.accent; x.fillRect(PAD, 572, 48, 5);
      x.font = "500 24px 'DM Sans'"; x.textBaseline = "top"; LSp(x, "4px"); x.fillStyle = cfg.accent; x.fillText(tag, PAD, 595); LSp(x, "0px");
      const subSize = 30, subLh = Math.round(subSize*1.4);
      x.font = `400 ${subSize}px 'DM Sans'`; const subLines = wrap(x, sub, maxW);
      let fs = 60, titleLines, lh;
      while (fs > 26) { x.font = `600 ${fs}px Syne`; LSp(x, "0.5px"); titleLines = wrap(x, title, maxW); lh = Math.round(fs*1.06); LSp(x, "0px"); if (639 + titleLines.length*lh + 18 + subLines.length*subLh <= 980) break; fs -= 2; }
      x.font = `600 ${fs}px Syne`; x.fillStyle = cfg.fg; x.textBaseline = "top"; LSp(x, "0.5px");
      let y = 639; titleLines.forEach((l) => { x.fillText(l, PAD, y); y += lh; }); LSp(x, "0px");
      y += 18; x.font = `400 ${subSize}px 'DM Sans'`; x.fillStyle = cfg.muted; subLines.forEach((l) => { x.fillText(l, PAD, y); y += subLh; });
      x.font = "500 25px 'DM Sans'"; x.textBaseline = "alphabetic"; x.fillStyle = cfg.muted; x.textAlign = "left"; x.fillText("boraprojetos.com", PAD, H-64);
      x.fillStyle = cfg.accent; x.textAlign = "right"; x.fillText("Bora conversar", W-PAD-24, H-64); x.font = "600 25px Syne"; x.fillText("›", W-PAD, H-64); x.textAlign = "left";
    }
    return type === "jpeg" ? cv.toDataURL("image/jpeg", 0.95) : cv.toDataURL("image/png");
  }

  /* ---- standalone editable HTML export ---- */
  let _fontCache = null;
  async function toB64(url) {
    const r = await fetch(url); const b = await r.blob();
    return await new Promise((res) => { const fr = new FileReader(); fr.onload = () => res(fr.result); fr.readAsDataURL(b); });
  }
  async function getFonts() {
    if (_fontCache) return _fontCache;
    const base = "_ds/bora-design-system-24e0278c-8c72-406a-8520-eb0feae754dc/assets/fonts/";
    const [syne, dm] = await Promise.all([toB64(base + "Syne-latin.woff2"), toB64(base + "DMSans-latin.woff2")]);
    _fontCache = { syne, dm };
    return _fontCache;
  }
  async function exportEditable(post, pg) {
    toast("Gerando arquivo editável…");
    const fonts = await getFonts();
    const markB64 = await toB64(LOGO + MARK[post.pilar]);
    const grain = getComputedStyle(document.documentElement).getPropertyValue("--grain-url").trim();
    // clone graphic, normalize, embed mark + dropped image
    const clone = pg.cloneNode(true);
    clone.style.transform = "none";
    clone.querySelectorAll("img").forEach((im) => (im.src = markB64));
    clone.querySelectorAll("input").forEach((i) => i.remove());
    const zone = pg.querySelector("[data-img]");
    if (zone && zone.classList.contains("has-img")) {
      clone.querySelector("[data-img]").style.backgroundImage = zone.style.backgroundImage;
    }
    // serialize the canvas renderer so the export is self-contained (no external lib)
    const fns = [grainPat, rrect, LSp, wrap, loadImg, cover, imgIcon, rasterize].map((f) => f.toString()).join("\n");
    const renderSrc = "const CFG=" + JSON.stringify(CFG) + ";\nlet _grain=null;\n" + fns;
    const css = `
*{box-sizing:border-box;margin:0;}
:root{--grain-url:${grain};}
@font-face{font-family:'Syne';font-weight:400 800;font-display:swap;src:url(${fonts.syne}) format('woff2');}
@font-face{font-family:'DM Sans';font-weight:300 700;font-display:swap;src:url(${fonts.dm}) format('woff2');}
body{font-family:'DM Sans',sans-serif;background:#0E141F;color:#fff;display:flex;flex-direction:column;align-items:center;gap:22px;padding:32px 16px;min-height:100vh;}
.tip{max-width:1080px;width:100%;font-size:14px;color:#9AA3B5;line-height:1.6;}
.tip b{color:#fff;}
.frame{position:relative;width:min(1080px,94vw);aspect-ratio:1/1;overflow:hidden;border-radius:18px;box-shadow:0 30px 80px rgba(0,0,0,.5);}
.frame .pg{position:absolute;top:0;left:0;transform-origin:top left;}
.bar{display:flex;gap:10px;flex-wrap:wrap;}
button{font-family:'DM Sans';font-weight:600;font-size:14px;padding:11px 20px;border-radius:999px;border:0;cursor:pointer;background:#E8622A;color:#fff;}
button.alt{background:#1f2a3d;color:#fff;}`;
    const html = `<!DOCTYPE html><html lang="pt-BR"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Post Bora · ${post.id}</title><style>${css}
${stylesForPg()}</style></head>
<body>
<div class="tip"><b>Editável:</b> clique no título ou no subtítulo para alterar o texto. Depois baixe em PNG ou JPEG (1080×1080).</div>
<div class="frame">${clone.outerHTML}</div>
<div class="bar">
  <button onclick="dl('png')">Baixar PNG</button>
  <button class="alt" onclick="dl('jpeg')">Baixar JPEG</button>
</div>
<script>
${renderSrc}
function scale(){var f=document.querySelector('.frame'),p=f.querySelector('.pg');p.style.transform='scale('+(f.clientWidth/1080)+')';}
window.addEventListener('resize',scale);document.fonts.ready.then(scale);scale();
async function dl(t){var p=document.querySelector('.pg');var u=await rasterize(p,t);var a=document.createElement('a');a.href=u;a.download='bora-${post.id}.'+(t==='jpeg'?'jpg':'png');document.body.appendChild(a);a.click();a.remove();}
<\/script>
</body></html>`;
    download("data:text/html;charset=utf-8," + encodeURIComponent(html), "bora-post-" + post.id + "-editavel.html");
    toast("Arquivo editável baixado ✓");
  }

  // grab the .pg CSS rules from propostas.css so the standalone matches
  function stylesForPg() {
    let out = "";
    for (const sheet of document.styleSheets) {
      let rules; try { rules = sheet.cssRules; } catch (e) { continue; }
      if (!rules) continue;
      for (const r of rules) { if (r.selectorText && /\.pg(\b|__|\[)/.test(r.selectorText)) out += r.cssText + "\n"; }
    }
    return out;
  }

  /* ---- render one proposal row ---- */
  function renderProposal(post) {
    const row = el("div", "proposal");
    row.dataset.pilar = post.pilar;

    // meta column
    const meta = el("div", "prop-meta");
    const head = el("div", "prop-head");
    head.appendChild(el("span", "prop-id", post.id));
    const pchip = el("span", "prop-pilar", PILAR[post.pilar].nm);
    pchip.style.background = PILAR[post.pilar].chip;
    pchip.style.color = PILAR_TXT[post.pilar];
    head.appendChild(pchip);
    head.appendChild(el("span", "prop-date", post.date));
    head.appendChild(el("span", "prop-ctx", post.context));
    meta.appendChild(head);

    meta.appendChild(el("div", "field-label", "Legenda do post (clique para editar)"));
    const cap = el("div", "prop-caption");
    cap.contentEditable = "true"; cap.spellcheck = false;
    const saved = store.get(post.id);
    cap.textContent = saved.caption != null ? saved.caption : post.caption;
    cap.addEventListener("input", () => { const v = store.get(post.id); v.caption = cap.textContent; store.set(post.id, v); });
    meta.appendChild(cap);

    const tags = el("div", "prop-tags");
    post.tags.forEach((t) => tags.appendChild(el("span", "t", "#" + t)));
    meta.appendChild(tags);

    const acts = el("div", "prop-row-actions");
    const copyBtn = el("button", "btn", ICON.copy + " Copiar legenda");
    copyBtn.addEventListener("click", () => {
      const txt = cap.textContent + "\n\n" + post.tags.map((t) => "#" + t).join(" ");
      navigator.clipboard.writeText(txt).then(() => toast("Legenda + hashtags copiadas ✓"));
    });
    acts.appendChild(copyBtn);
    meta.appendChild(acts);

    // graphic column
    const gcol = el("div", "prop-graphic");
    const frame = el("div", "pg-frame");
    const pg = buildGraphic(post);
    frame.appendChild(pg);
    gcol.appendChild(frame);

    const ctrls = el("div", "pg-controls");
    const seg = el("div", "seg");
    const bT = el("button", pg.dataset.mode === "texto" ? "active" : "", "Só texto");
    const bI = el("button", pg.dataset.mode === "imagem" ? "active" : "", "Texto + imagem");
    const setMode = (m) => {
      pg.dataset.mode = m;
      bT.classList.toggle("active", m === "texto");
      bI.classList.toggle("active", m === "imagem");
      const v = store.get(post.id); v.mode = m; store.set(post.id, v);
      fitTitle(pg);
    };
    bT.addEventListener("click", () => setMode("texto"));
    bI.addEventListener("click", () => setMode("imagem"));
    seg.appendChild(bT); seg.appendChild(bI);
    ctrls.appendChild(seg);

    const dlrow = el("div", "dlrow");
    const png = el("button", "btn btn--solid", ICON.dl + " PNG");
    const jpg = el("button", "btn", ICON.dl + " JPEG");
    const edit = el("button", "btn btn--ghost", ICON.edit + " Editável");
    png.addEventListener("click", async () => { png.textContent = "…"; try { download(await rasterize(pg, "png"), "bora-" + post.id + ".png"); toast("PNG baixado ✓"); } catch (e) { toast("Erro ao gerar PNG"); } png.innerHTML = ICON.dl + " PNG"; });
    jpg.addEventListener("click", async () => { jpg.textContent = "…"; try { download(await rasterize(pg, "jpeg"), "bora-" + post.id + ".jpg"); toast("JPEG baixado ✓"); } catch (e) { toast("Erro ao gerar JPEG"); } jpg.innerHTML = ICON.dl + " JPEG"; });
    edit.addEventListener("click", () => exportEditable(post, pg).catch(() => toast("Erro ao exportar")));
    dlrow.appendChild(png); dlrow.appendChild(jpg); dlrow.appendChild(edit);
    ctrls.appendChild(dlrow);
    ctrls.appendChild(el("div", "hint", "PNG/JPEG saem em 1080×1080 (post de LinkedIn). O texto é editável aqui mesmo; “Editável” baixa um HTML para ajustar depois."));
    gcol.appendChild(ctrls);

    row.appendChild(meta);
    row.appendChild(gcol);
    return row;
  }

  /* ---- init ---- */
  function init() {
    const list = document.getElementById("list");
    window.POSTS.forEach((p) => list.appendChild(renderProposal(p)));

    // filters
    const counts = window.POSTS.reduce((a, p) => ((a[p.pilar] = (a[p.pilar] || 0) + 1), a), {});
    const bar = document.getElementById("filters");
    const mk = (key, label, n) => {
      const c = el("button", "chip" + (key === "all" ? " active" : ""), label + (n != null ? ' <span class="n">' + n + "</span>" : ""));
      c.dataset.f = key;
      c.addEventListener("click", () => {
        document.querySelectorAll(".chip").forEach((x) => x.classList.remove("active"));
        c.classList.add("active");
        let shown = 0;
        document.querySelectorAll(".proposal").forEach((row) => {
          const ok = key === "all" || row.dataset.pilar === key;
          row.classList.toggle("hidden", !ok);
          if (ok) shown++;
        });
        document.getElementById("count").textContent = shown + " propostas";
        scaleAll();
      });
      return c;
    };
    bar.appendChild(mk("all", "Todos", window.POSTS.length));
    ["EDU", "POS", "HUM", "CAS"].forEach((k) => bar.appendChild(mk(k, PILAR[k].nm, counts[k] || 0)));
    document.getElementById("count").textContent = window.POSTS.length + " propostas";

    scaleAll();
    document.fonts.ready.then(() => { document.querySelectorAll(".pg").forEach(fitTitle); scaleAll(); });
    setTimeout(() => { document.querySelectorAll(".pg").forEach(fitTitle); }, 400);
    window.addEventListener("resize", scaleAll);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
