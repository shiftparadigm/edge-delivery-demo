import { r as p } from "../../readBlockConfig-BocDcTz8.js";
import { fetchIndex as d, loadFragment as m } from "../../scripts/scripts.js";
import { getSkuFromUrl as u } from "../../scripts/commerce.js";
async function v(o) {
  var a, l;
  const { type: c, position: i } = p(o), s = {};
  if (c === "product") {
    const e = u();
    if (!e)
      return;
    s.products = e;
  }
  if (c === "category") {
    const e = document.querySelector(".block.product-list-page");
    if (!e)
      return;
    let t = (a = e.dataset) == null ? void 0 : a.category;
    if (t || (t = p(e).category), !t)
      return;
    s.categories = t;
  }
  i && (s.positions = i);
  const f = (await d("enrichment/enrichment")).data.filter(
    (e) => Object.keys(s).every((t) => JSON.parse(e[t]).includes(s[t]))
  ).map((e) => e.path);
  (await Promise.all(f.map((e) => m(e)))).filter((e) => e).forEach((e) => {
    const t = e.querySelectorAll(":scope .section");
    if (t.length === 1) {
      o.closest(".section").classList.add(...t[0].classList);
      const r = o.closest(".enrichment-wrapper");
      Array.from(t[0].children).forEach(
        (n) => r.parentNode.insertBefore(n, r)
      );
    } else if (t.length > 1) {
      const r = o.closest(".section");
      Array.from(t).reverse().forEach(
        (n) => r.parentNode.insertBefore(
          n,
          r.nextSibling
        )
      );
    }
  }), (l = o.closest(".enrichment-wrapper")) == null || l.remove();
}
export {
  v as default
};
