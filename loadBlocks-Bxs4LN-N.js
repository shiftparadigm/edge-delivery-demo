import { t as f, r as p } from "./readBlockConfig-BocDcTz8.js";
function u(a) {
  return f(a).replace(/-([a-z])/g, (t) => t[1].toUpperCase());
}
function N(a) {
  a.querySelectorAll(":scope > div").forEach((t) => {
    const s = [];
    let e = !1;
    [...t.children].forEach((o) => {
      if (o.tagName === "DIV" || !e) {
        const c = document.createElement("div");
        s.push(c), e = o.tagName !== "DIV", e && c.classList.add("default-content-wrapper");
      }
      s[s.length - 1].append(o);
    }), s.forEach((o) => t.append(o)), t.classList.add("section"), t.dataset.sectionStatus = "initialized", t.style.display = "none";
    const n = t.querySelector("div.section-metadata");
    if (n) {
      const o = p(n);
      Object.keys(o).forEach((c) => {
        c === "style" ? o.style.split(",").filter((l) => l).map((l) => f(l.trim())).forEach((l) => t.classList.add(l)) : t.dataset[u(c)] = o[c];
      }), n.parentNode.remove();
    }
  });
}
function m(a, t = "", s = "") {
  const e = Array.from(a.classList).find((o) => o.startsWith("icon-")).substring(5), n = document.createElement("img");
  n.dataset.iconName = e, n.src = `${window.hlx.codeBasePath}${t}/icons/${e}.svg`, n.alt = s, n.loading = "lazy", a.append(n);
}
function S(a, t = "") {
  Array.from(a.querySelectorAll("span.icon")).forEach((e) => {
    m(e, t);
  });
}
function w(a) {
  a.querySelectorAll("a").forEach((t) => {
    if (t.title = t.title || t.textContent, t.href !== t.textContent) {
      const s = t.parentElement, e = t.parentElement.parentElement;
      t.querySelector("img") || (s.childNodes.length === 1 && (s.tagName === "P" || s.tagName === "DIV") && (t.className = "button", s.classList.add("button-container")), s.childNodes.length === 1 && s.tagName === "STRONG" && e.childNodes.length === 1 && e.tagName === "P" && (t.className = "button primary", e.classList.add("button-container")), s.childNodes.length === 1 && s.tagName === "EM" && e.childNodes.length === 1 && e.tagName === "P" && (t.className = "button secondary", e.classList.add("button-container")));
    }
  });
}
function h(a) {
  const t = [
    "P",
    "PRE",
    "UL",
    "OL",
    "PICTURE",
    "TABLE",
    "H1",
    "H2",
    "H3",
    "H4",
    "H5",
    "H6"
  ], s = (e) => {
    const n = document.createElement("p");
    n.append(...Array.from(e.childNodes)), e.append(n);
  };
  a.querySelectorAll(":scope > div > div").forEach((e) => {
    var n;
    e.hasChildNodes() && (!!e.firstElementChild && t.some((c) => {
      var i;
      return ((i = e.firstElementChild) == null ? void 0 : i.tagName) === c;
    }) ? e.firstElementChild.tagName === "PICTURE" && (e.children.length > 1 || (n = e.textContent) != null && n.trim()) && s(e) : s(e));
  });
}
function g(a) {
  const t = a.classList[0];
  if (t) {
    a.classList.add("block"), a.dataset.blockName = t, a.dataset.blockStatus = "initialized", h(a), a.parentElement.classList.add(`${t}-wrapper`);
    const e = a.closest(".section");
    e && e.classList.add(`${t}-container`);
  }
}
function L(a) {
  a.querySelectorAll("div.section > div > div").forEach(g);
}
function v(a, t) {
  const s = Array.isArray(t) ? t : [[t]], e = document.createElement("div");
  return e.classList.add(a), s.forEach((n) => {
    const o = document.createElement("div");
    n.forEach((c) => {
      const i = document.createElement("div");
      (c.elems ? c.elems : [c]).forEach((r) => {
        r && (typeof r == "string" ? i.innerHTML += r : i.appendChild(r));
      }), o.appendChild(i);
    }), e.appendChild(o);
  }), e;
}
async function y(a) {
  const t = a.dataset.blockStatus;
  if (t !== "loading" && t !== "loaded") {
    a.dataset.blockStatus = "loading";
    const { blockName: s } = a.dataset;
    try {
      const e = new Promise((n) => {
        (async () => {
          try {
            const o = await import(`${window.hlx.codeBasePath}/blocks/${s}/${s}.js`);
            o.default && await o.default(a);
          } catch (o) {
            console.log(`failed to load module for ${s}`, o);
          }
          n();
        })();
      });
      await Promise.all([e]);
    } catch (e) {
      console.log(`failed to load block ${s}`, e);
    }
    a.dataset.blockStatus = "loaded";
  }
  return a;
}
function d(a) {
  const t = Array.from(a.querySelectorAll(":scope > div.section"));
  for (let s = 0; s < t.length; s += 1) {
    const e = t[s];
    if (e.dataset.sectionStatus !== "loaded")
      if (e.querySelector('.block[data-block-status="initialized"], .block[data-block-status="loading"]')) {
        e.dataset.sectionStatus = "loading";
        break;
      } else
        e.dataset.sectionStatus = "loaded", e.style.display = "";
  }
}
async function A(a) {
  d(a);
  const t = Array.from(a.querySelectorAll("div.block"));
  for (let s = 0; s < t.length; s += 1)
    await y(t[s]), d(a);
}
export {
  S as a,
  v as b,
  N as c,
  w as d,
  L as e,
  g as f,
  m as g,
  y as h,
  A as l,
  u as t,
  d as u,
  h as w
};
