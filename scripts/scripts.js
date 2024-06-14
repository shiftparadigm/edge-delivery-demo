import { d as r } from "../decorateMain-C5iRucPu.js";
import { d as l, w, l as u, a as f, b as c } from "../waitForLCP-DHkNMxy0.js";
import { l as d } from "../loadBlocks-Bxs4LN-N.js";
import { s } from "../sampleRUM-BOaDpSnv.js";
import p from "./dropins.js";
const y = [
  "product-list-page",
  "product-list-page-custom",
  "product-details",
  "commerce-cart",
  "commerce-checkout",
  "commerce-account",
  "commerce-login"
];
async function m() {
  await c(`${window.hlx.codeBasePath}/styles/fonts.css`);
  try {
    window.location.hostname.includes("localhost") || sessionStorage.setItem("fonts-loaded", "true");
  } catch {
  }
}
async function h(e) {
  document.documentElement.lang = "en", await p(), l(), window.adobeDataLayer = window.adobeDataLayer || [];
  let t = "CMS";
  document.body.querySelector("main .product-details") ? t = "Product" : document.body.querySelector("main .product-list-page") ? t = "Category" : document.body.querySelector("main .commerce-cart") ? t = "Cart" : document.body.querySelector("main .commerce-checkout") && (t = "Checkout"), window.adobeDataLayer.push({
    pageContext: {
      pageType: t,
      pageName: document.title,
      eventType: "visibilityHidden",
      maxXOffset: 0,
      maxYOffset: 0,
      minXOffset: 0,
      minYOffset: 0
    }
  }), window.adobeDataLayer.push((a) => {
    a.push({ event: "page-view", eventInfo: { ...a.getState() } });
  });
  const o = e.querySelector("main");
  o && (r(o), document.body.classList.add("appear"), await w(y));
  try {
    (window.innerWidth >= 900 || sessionStorage.getItem("fonts-loaded")) && m();
  } catch {
  }
}
async function g(e) {
  const t = e.querySelector("main");
  await d(t);
  const { hash: o } = window.location, a = o ? e.getElementById(o.substring(1)) : !1;
  o && a && a.scrollIntoView(), u(e.querySelector("header")), f(e.querySelector("footer")), c(`${window.hlx.codeBasePath}/styles/lazy-styles.css`), m(), await import("../adobe-client-data-layer.min-B1dkoHj1.js").then((i) => i.a), sessionStorage.getItem("acdl:debug") && import("../validate-Dc7JkLht.js"), s("lazy"), s.observe(t.querySelectorAll("div[data-block-name]")), s.observe(t.querySelectorAll("picture > img"));
}
function S() {
  window.setTimeout(() => import("./delayed.js"), 3e3);
}
async function D(e, t = 500) {
  const o = async (i) => {
    const n = await (await fetch(
      `/${e}.json?limit=${t}&offset=${i}`
    )).json();
    return {
      complete: n.limit + n.offset === n.total,
      offset: n.offset + t,
      promise: null,
      data: [...window.index[e].data, ...n.data]
    };
  };
  if (window.index = window.index || {}, window.index[e] = window.index[e] || {
    data: [],
    offset: 0,
    complete: !1,
    promise: null
  }, window.index[e].complete)
    return window.index[e];
  if (window.index[e].promise)
    return window.index[e].promise;
  window.index[e].promise = o(window.index[e].offset);
  const a = await window.index[e].promise;
  return window.index[e] = a, a;
}
async function P(e) {
  if (e && e.startsWith("/")) {
    const t = await fetch(`${e}.plain.html`);
    if (t.ok) {
      const o = document.createElement("main");
      return o.innerHTML = await t.text(), r(o), await d(o), o;
    }
  }
  return null;
}
async function b() {
  await h(document), await g(document), S();
}
b();
export {
  D as fetchIndex,
  P as loadFragment
};
