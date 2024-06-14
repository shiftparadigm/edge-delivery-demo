(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".product-teaser-wrapper{padding:20px 0}.product-teaser{display:flex;gap:40px;flex-direction:column;justify-content:center}.product-teaser .image{display:flex;justify-content:center}.product-teaser .image .placeholder{width:250px;height:250px;background-color:var(--color-neutral-200)}.product-teaser .image picture>img{display:block;width:250px;height:250px;object-fit:contain}.product-teaser .details{display:flex;flex-direction:column}.product-teaser .actions{display:flex;gap:20px;margin-top:auto;justify-content:center}.product-teaser h1{min-height:32px;font:var(--type-headline-1-font);letter-spacing:var(--type-headline-1-letter-spacing);margin:0 0 16px}.product-teaser .price{font:var(--type-headline-2-strong-font);letter-spacing:var(--type-headline-2-strong-letter-spacing)}.product-teaser .price .price-regular{font:var(--type-headline-2-default-font);letter-spacing:var(--type-headline-2-default-letter-spacing);color:var(--color-neutral-600);text-decoration:line-through}.product-teaser .price .price-range{display:flex;gap:20px;align-items:baseline}.product-teaser .price .price-range .price-from,.product-teaser .price .price-final{font:var(--type-headline-2-strong-font);letter-spacing:var(--type-headline-2-strong-letter-spacing)}@media (width >= 600px){.product-teaser{flex-direction:row}.product-teaser .details{flex:1}.product-teaser .actions{justify-content:flex-start}}")),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
import { r as $ } from "../../readBlockConfig-BocDcTz8.js";
import { performCatalogServiceQuery as w, renderPrice as P } from "../../scripts/commerce.js";
const x = `query productTeaser($sku: String!) {
  products(skus: [$sku]) {
    sku
    urlKey
    name
    addToCartAllowed
    __typename
    images(roles: ["small_image"]) {
      label
      url
    }
    ... on SimpleProductView {
      price {
        ...priceFields
      }
    }
    ... on ComplexProductView {
      priceRange {
        minimum {
          ...priceFields
        }
        maximum {
          ...priceFields
        }
      }
    }
  }
}
fragment priceFields on ProductViewPrice {
  regular {
    amount {
      currency
      value
    }
  }
  final {
    amount {
      currency
      value
    }
  }
}`;
function F(t, e) {
  e.textContent = "", e.appendChild(
    document.createRange().createContextualFragment(`
    <div class="image">
      <div class="placeholder"></div>
    </div>
    <div class="details">
      <h1></h1>
      <div class="price"></div>
      <div class="actions">
        ${t["details-button"] ? '<a href="#" class="button primary disabled">Details</a>' : ""}
        ${t["cart-button"] ? '<button class="secondary" disabled>Add to Cart</button>' : ""}
      </div>
    </div>
  `)
  );
}
function U(t, e = 250) {
  const { url: a, label: n } = t, s = (o, c, i = !0) => {
    const r = new URL(o, window.location);
    return i ? (r.searchParams.set("format", "webply"), r.searchParams.set("optimize", "medium")) : r.searchParams.delete("format"), r.searchParams.set("width", c), r.searchParams.delete("quality"), r.searchParams.delete("dpr"), r.searchParams.delete("bg-color"), r.toString();
  }, l = (o, c, i = !0) => `${s(o, c, i)} 1x, ${s(o, c * 2, i)} 2x, ${s(o, c * 3, i)} 3x`, d = l(a, e, !0), u = l(a, e, !1);
  return document.createRange().createContextualFragment(`<picture>
      <source srcset="${d}" />
      <source srcset="${u}" />
      <img height="${e}" width="${e}" src="${s(a, e, !1)}" loading="eager" alt="${n}" />
    </picture>
  `);
}
function k(t, e, a) {
  var g, h, y, f, v;
  const { name: n, urlKey: s, sku: l, price: d, priceRange: u, addToCartAllowed: o, __typename: c } = t, i = ((h = (g = d == null ? void 0 : d.final) == null ? void 0 : g.amount) == null ? void 0 : h.currency) || ((v = (f = (y = u == null ? void 0 : u.minimum) == null ? void 0 : y.final) == null ? void 0 : f.amount) == null ? void 0 : v.currency), r = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: i
  });
  a.textContent = "";
  const m = document.createRange().createContextualFragment(`
    <div class="image">
    </div>
    <div class="details">
      <h1>${n}</h1>
      <div class="price">${P(t, r.format)}</div>
      <div class="actions">
        ${e["details-button"] ? `<a href="/products/${s}/${l}" class="button primary">Details</a>` : ""}
        ${e["cart-button"] && o && c === "SimpleProductView" ? '<button class="add-to-cart secondary">Add to Cart</button>' : ""}
      </div>
    </div>
  `);
  m.querySelector(".image").appendChild(U(t.images[0], 250));
  const p = m.querySelector(".add-to-cart");
  p && p.addEventListener("click", async () => {
    const b = [
      {
        optionsUIDs: [],
        quantity: 1,
        sku: t.sku
      }
    ], { addProductsToCart: C } = await import("../../api-Dikv6K-n.js");
    window.adobeDataLayer.push({
      productContext: { productId: 0, ...t }
    }), console.debug("onAddToCart", b), C(b);
  }), a.appendChild(m);
}
async function q(t) {
  const e = $(t);
  e["details-button"] = !!(e["details-button"] || e["details-button"] === "true"), e["cart-button"] = !!(e["cart-button"] || e["cart-button"] === "true"), F(e, t);
  const { products: a } = await w(x, {
    sku: e.sku
  });
  if (!a || !a.length > 0 || !a[0].sku)
    return;
  const [n] = a;
  n.images = n.images.map((s) => ({
    ...s,
    url: s.url.replace(/^https?:/, "")
  })), k(n, e, t);
}
export {
  q as default
};
