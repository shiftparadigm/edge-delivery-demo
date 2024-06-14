(function(){"use strict";try{if(typeof document<"u"){var o=document.createElement("style");o.appendChild(document.createTextNode("main .section>div.product-recommendations-wrapper{max-width:100%;padding:0;text-align:left;margin:0 0 5rem}.product-recommendations{overflow:hidden;min-height:512px}.product-recommendations .scrollable{overflow-x:scroll;scroll-snap-type:x mandatory;padding-bottom:1rem}.product-recommendations .product-grid{display:inline-flex;flex-wrap:nowrap;gap:2rem;margin:0}.product-recommendations .product-grid-item img{width:100%}.product-recommendations .product-grid .product-grid-item a{text-decoration:none}.product-recommendations .product-grid .product-grid-item a:hover,.product-recommendations .product-grid .product-grid-item a:focus{text-decoration:underline}.product-recommendations .product-grid .product-grid-item span{overflow:hidden;box-sizing:border-box;margin:0;padding:.5rem 1rem 0 0;display:inline-block}.product-recommendations .product-grid picture{background:none;display:block;width:300px;aspect-ratio:1 / 1.25}.product-recommendations .product-grid img{display:inline-block;vertical-align:middle;width:100%;object-fit:contain;background:none}.product-recommendations .product-grid .placeholder{background-color:var(--color-neutral-500);scroll-snap-align:start}.product-recommendations .product-grid .placeholder img{display:none}.product-recommendations .product-grid-item{margin:0;scroll-snap-align:start}@media (width >= 900px){.product-recommendations{min-height:534px}}")),document.head.appendChild(o)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
import { performCatalogServiceQuery as p } from "../../scripts/commerce.js";
import { getConfigValue as y } from "../../scripts/configs.js";
const m = `query GetRecommendations(
  $pageType: PageType!
  $category: String
  $currentSku: String
  $cartSkus: [String]
  $userPurchaseHistory: [PurchaseHistory]
  $userViewHistory: [ViewHistory]
) {
  recommendations(
    cartSkus: $cartSkus
    category: $category
    currentSku: $currentSku
    pageType: $pageType
    userPurchaseHistory: $userPurchaseHistory
    userViewHistory: $userViewHistory
  ) {
    results {
      displayOrder
      pageType
      productsView {
        name
        sku
        url
        images {
          url
        }
        externalId
        __typename
      }
      storefrontLabel
      totalProducts
      typeId
      unitId
      unitName
    }
    totalResults
  }
}`;
let d;
function g(r) {
  r.innerHTML = `<h2></h2>
  <div class="scrollable">
    <div class="product-grid">
      ${[...Array(5)].map(
    () => `
        <div class="placeholder">
          <picture><img width="300" height="375" src="" /></picture>
        </div>
      `
  ).join("")}
    </div>
  </div>`;
}
function h(r, e) {
  var t;
  const n = e.url.split("/").pop().replace(".html", ""), s = (t = e.images[0]) == null ? void 0 : t.url, a = () => {
    window.adobeDataLayer.push((i) => {
      i.push({
        event: "recs-item-click",
        eventInfo: {
          ...i.getState(),
          unitId: r,
          productId: parseInt(e.externalId, 10) || 0
        }
      });
    });
  }, o = document.createRange().createContextualFragment(`<div class="product-grid-item">
    <a href="/products/${n}/${e.sku.toLowerCase()}">
      <picture>
        <source type="image/webp" srcset="${s}?width=300&format=webply&optimize=medium" />
        <img loading="lazy" alt="${e.name}" width="300" height="375" src="${s}?width=300&format=jpg&optimize=medium" />
      </picture>
      <span>${e.name}</span>
    </a>
  </div>`);
  return o.querySelector("a").addEventListener("click", a), o;
}
function l(r, e) {
  const [n] = e.results;
  if (!n) {
    r.textContent = "";
    return;
  }
  window.adobeDataLayer.push((t) => {
    t.push({
      event: "recs-unit-impression-render",
      eventInfo: { ...t.getState(), unitId: n.unitId }
    });
  }), r.querySelector("h2").textContent = n.storefrontLabel;
  const s = r.querySelector(".product-grid");
  s.innerHTML = "";
  const { productsView: a } = n;
  a.forEach((t) => {
    s.appendChild(h(n.unitId, t));
  });
  const o = new IntersectionObserver((t) => {
    t.forEach((i) => {
      i.isIntersecting && (window.adobeDataLayer.push((c) => {
        c.push({
          event: "recs-unit-view",
          eventInfo: { ...c.getState(), unitId: n.unitId }
        });
      }), o.disconnect());
    });
  });
  o.observe(r);
}
const w = (r) => ({
  ...r,
  unitType: "primary",
  searchTime: 0,
  primaryProducts: r.totalProducts,
  backupProducts: 0,
  products: r.productsView.map((e, n) => ({
    ...e,
    rank: n,
    score: 0,
    productId: parseInt(e.externalId, 10) || 0,
    type: "?",
    queryType: e.__typename
  }))
});
async function u(r, e) {
  if (!e.pageType || e.pageType === "Product" && !e.currentSku || e.pageType === "Category" && !e.category || e.pageType === "Cart" && !e.cartSkus || d)
    return;
  const n = await y("commerce-store-view-code");
  try {
    const a = window.localStorage.getItem(`${n}:productViewHistory`) || "[]";
    e.userViewHistory = JSON.parse(a);
  } catch (a) {
    window.localStorage.removeItem("productViewHistory"), console.error("Error parsing product view history", a);
  }
  try {
    const a = window.localStorage.getItem(`${n}:purchaseHistory`) || "[]";
    e.userPurchaseHistory = JSON.parse(a);
  } catch (a) {
    window.localStorage.removeItem("purchaseHistory"), console.error("Error parsing purchase history", a);
  }
  window.adobeDataLayer.push((a) => {
    a.push({
      event: "recs-api-request-sent",
      eventInfo: { ...a.getState() }
    });
  }), d = p(
    m,
    e
  );
  const { recommendations: s } = await d;
  window.adobeDataLayer.push((a) => {
    a.push({
      recommendationsContext: { units: s.results.map(w) }
    }), a.push({
      event: "recs-api-response-received",
      eventInfo: { ...a.getState() }
    });
  }), l(r, s);
}
async function S(r) {
  g(r);
  const e = {};
  function n({ productContext: t }) {
    e.currentSku = t.sku, u(r, e);
  }
  function s({ categoryContext: t }) {
    e.category = t.name, u(r, e);
  }
  function a({ pageContext: t }) {
    e.pageType = t.pageType, u(r, e);
  }
  function o({ shoppingCartContext: t }) {
    var i;
    e.cartSkus = (i = t == null ? void 0 : t.items) == null ? void 0 : i.map(
      ({ product: c }) => c.sku
    ), u(r, e);
  }
  window.adobeDataLayer.push((t) => {
    t.addEventListener("adobeDataLayer:change", a, {
      path: "pageContext"
    }), t.addEventListener("adobeDataLayer:change", n, {
      path: "productContext"
    }), t.addEventListener("adobeDataLayer:change", s, {
      path: "categoryContext"
    }), t.addEventListener("adobeDataLayer:change", o, {
      path: "shoppingCartContext"
    });
  });
}
export {
  S as default
};
