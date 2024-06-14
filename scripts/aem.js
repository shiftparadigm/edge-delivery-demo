import { s } from "../sampleRUM-BOaDpSnv.js";
import { t as d } from "../loadBlocks-Bxs4LN-N.js";
import { b as u, f as m, e as f, d as g, g as B, a as S, c as L, h as k, l as x, u as P, w as C } from "../loadBlocks-Bxs4LN-N.js";
import { c as U } from "../createOptimizedPicture-ecGBltyO.js";
import { d as y, b as E, a as M, l as T, w as b } from "../waitForLCP-DHkNMxy0.js";
import { g as $ } from "../getMetadata-CRmsHWFI.js";
import { l as F } from "../loadScript-Bdmho985.js";
import { r as N, t as _ } from "../readBlockConfig-BocDcTz8.js";
function c() {
  window.hlx = window.hlx || {}, window.hlx.RUM_MASK_URL = "full", window.hlx.codeBasePath = "", window.hlx.lighthouse = new URLSearchParams(window.location.search).get("lighthouse") === "on";
  const o = document.querySelector('script[src$="/scripts/scripts.js"]');
  if (o)
    try {
      [window.hlx.codeBasePath] = new URL(o.src).pathname.split("/scripts/scripts.js");
    } catch (e) {
      console.log(e);
    }
}
async function w(o = "default") {
  return window.placeholders = window.placeholders || {}, window.placeholders[o] || (window.placeholders[o] = new Promise((e) => {
    fetch(`${o === "default" ? "" : o}/placeholders.json`).then((a) => a.ok ? a.json() : {}).then((a) => {
      const r = {};
      a.data.filter((t) => t.Key).forEach((t) => {
        r[d(t.Key)] = t.Text;
      }), window.placeholders[o] = r, e(window.placeholders[o]);
    }).catch(() => {
      window.placeholders[o] = {}, e(window.placeholders[o]);
    });
  })), window.placeholders[`${o}`];
}
function l() {
  c(), s("top"), window.addEventListener("load", () => s("load")), window.addEventListener("unhandledrejection", (o) => {
    s("error", { source: o.reason.sourceURL, target: o.reason.line });
  }), window.addEventListener("error", (o) => {
    s("error", { source: o.filename, target: o.lineno });
  });
}
l();
export {
  u as buildBlock,
  U as createOptimizedPicture,
  m as decorateBlock,
  f as decorateBlocks,
  g as decorateButtons,
  B as decorateIcon,
  S as decorateIcons,
  L as decorateSections,
  y as decorateTemplateAndTheme,
  w as fetchPlaceholders,
  $ as getMetadata,
  k as loadBlock,
  x as loadBlocks,
  E as loadCSS,
  M as loadFooter,
  T as loadHeader,
  F as loadScript,
  N as readBlockConfig,
  s as sampleRUM,
  c as setup,
  d as toCamelCase,
  _ as toClassName,
  P as updateSectionsStatus,
  b as waitForLCP,
  C as wrapTextNodes
};
