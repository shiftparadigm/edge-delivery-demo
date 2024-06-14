import { t as i } from "./readBlockConfig-BocDcTz8.js";
import { g as d } from "./getMetadata-CRmsHWFI.js";
import { b as s, f as r, h as c } from "./loadBlocks-Bxs4LN-N.js";
function p() {
  const o = (t, n) => {
    n.split(",").forEach((l) => {
      t.classList.add(i(l.trim()));
    });
  }, e = d("template");
  e && o(document.body, e);
  const a = d("theme");
  a && o(document.body, a);
}
async function h(o) {
  return new Promise((e, a) => {
    if (document.querySelector(`head > link[href="${o}"]`))
      e();
    else {
      const t = document.createElement("link");
      t.rel = "stylesheet", t.href = o, t.onload = () => e(), t.onerror = a, document.head.append(t);
    }
  });
}
async function k(o) {
  const e = s("footer", "");
  return o.append(e), r(e), c(e);
}
async function y(o) {
  const e = s("header", "");
  return o.append(e), r(e), c(e);
}
async function b(o) {
  const e = document.querySelector(".block");
  e && o.includes(e.dataset.blockName) && await c(e), document.body.style.display = null;
  const t = document.querySelector("main img");
  await new Promise((n) => {
    t && !t.complete ? (t.setAttribute("loading", "eager"), t.addEventListener("load", n), t.addEventListener("error", n)) : n();
  });
}
export {
  k as a,
  h as b,
  p as d,
  y as l,
  b as w
};
