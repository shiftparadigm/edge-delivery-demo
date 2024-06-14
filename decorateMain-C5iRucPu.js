import { b as r, d as s, a as d, c as n, e as u } from "./loadBlocks-Bxs4LN-N.js";
function l(e) {
  const o = e.querySelector("h1"), c = e.querySelector("picture");
  if (o && c && o.compareDocumentPosition(c) & Node.DOCUMENT_POSITION_PRECEDING) {
    const t = document.createElement("div");
    t.append(r("hero", { elems: [c, o] })), e.prepend(t);
  }
}
function a(e) {
  try {
    l(e);
  } catch (o) {
    console.error("Auto Blocking failed", o);
  }
}
function p(e) {
  s(e), d(e), a(e), n(e), u(e);
}
export {
  p as d
};
