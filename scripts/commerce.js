import { getConfigValue as s } from "./configs.js";
const p = `fragment priceFields on ProductViewPrice {
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
}`, w = `query RefineProductQuery($sku: String!, $variantIds: [String!]!) {
  refineProduct(
    sku: $sku,
    optionIds: $variantIds
  ) {
    images(roles: []) {
      url
      roles
      label
    }
    ... on SimpleProductView {
      price {
        final {
          amount {
            currency
            value
          }
        }
        regular {
          amount {
            currency
            value
          }
        }
      }
    }
    addToCartAllowed
  }
}`, m = `query ProductQuery($sku: String!) {
  products(skus: [$sku]) {
    __typename
    externalId
    sku
    name
    description
    shortDescription
    urlKey
    inStock
    images(roles: []) {
      url
      label
      roles
    }
    attributes(roles: []) {
      name
      label
      value
      roles
    }
    ... on SimpleProductView {
      price {
        ...priceFields
      }
    }
    ... on ComplexProductView {
      options {
        id
        title
        required
        values {
          id
          title
          inStock
          ...on ProductViewOptionValueSwatch {
            type
            value
          }
        }
      }
      priceRange {
        maximum {
          ...priceFields
        }
        minimum {
          ...priceFields
        }
      }
    }
  }
}
${p}`;
async function d(a, n) {
  const o = {
    "Content-Type": "application/json",
    "Magento-Environment-Id": await s("commerce-environment-id"),
    "Magento-Website-Code": await s("commerce-website-code"),
    "Magento-Store-View-Code": await s("commerce-store-view-code"),
    "Magento-Store-Code": await s("commerce-store-code"),
    "Magento-Customer-Group": await s("commerce-customer-group"),
    "x-api-key": await s("commerce-x-api-key")
  };
  console.log(await s("commerce-endpoint"));
  const e = new URL(await s("commerce-endpoint"));
  e.searchParams.append(
    "query",
    a.replace(/(?:\r\n|\r|\n|\t|[\s]{4})/g, " ").replace(/\s\s+/g, " ")
  ), e.searchParams.append(
    "variables",
    n ? JSON.stringify(n) : null
  );
  const r = await fetch(e, {
    method: "GET",
    headers: o
  });
  return r.ok ? (await r.json()).data : null;
}
function f() {
  return "";
}
async function y(a, n, o = !0, e = !1) {
  const r = await s("commerce-core-endpoint"), t = {
    "Content-Type": "application/json",
    Store: await s("commerce-store-view-code")
  };
  e && typeof e == "string" && (t.Authorization = `Bearer ${e}`);
  let i;
  if (!o)
    i = await fetch(r, {
      method: "POST",
      headers: t,
      body: JSON.stringify({
        query: a.replace(/(?:\r\n|\r|\n|\t|[\s]{4})/g, " ").replace(/\s\s+/g, " "),
        variables: n
      })
    });
  else {
    const c = new URL(r);
    c.searchParams.set(
      "query",
      a.replace(/(?:\r\n|\r|\n|\t|[\s]{4})/g, " ").replace(/\s\s+/g, " ")
    ), c.searchParams.set("variables", JSON.stringify(n)), i = await fetch(c.toString(), { headers: t });
  }
  return i.ok ? i.json() : null;
}
function v(a, n, o = (r, ...t) => r.reduce(
  (i, c, l) => i + c + (t[l] || ""),
  ""
), e = null) {
  if (a.price) {
    const { regular: r, final: t } = a.price;
    return r.amount.value === t.amount.value ? o`<span class="price-final"
				>${n(t.amount.value)}</span
			>` : o`<${e}>
      <span class="price-regular">${n(r.amount.value)}</span> <span class="price-final">${n(t.amount.value)}</span>
    </${e}>`;
  }
  if (a.priceRange) {
    const { regular: r, final: t } = a.priceRange.minimum, { final: i } = a.priceRange.maximum;
    return t.amount.value !== i.amount.value ? o` <div class="price-range">
				${t.amount.value !== r.amount.value ? o`<span class="price-regular"
							>${n(r.amount.value)}</span
						>` : ""}
				<span class="price-from"
					>${n(t.amount.value)} -
					${n(i.amount.value)}</span
				>
			</div>` : t.amount.value !== r.amount.value ? o`<${e}>
      <span class="price-final">${n(t.amount.value)} - ${n(r.amount.value)}</span>
    </${e}>` : o`<span class="price-final"
			>${n(t.amount.value)}</span
		>`;
  }
  return null;
}
function S() {
  const n = window.location.pathname.match(/\/products\/[\w|-]+\/([\w|-]+)$/);
  return n == null ? void 0 : n[1];
}
const u = {};
async function h(a) {
  if (a = a.toUpperCase(), u[a])
    return u[a];
  const o = d(m, {
    sku: a
  }).then((e) => {
    var r, t;
    return (r = e == null ? void 0 : e.products) != null && r[0] ? (t = e == null ? void 0 : e.products) == null ? void 0 : t[0] : null;
  });
  return u[a] = o, o;
}
(async () => {
  const a = await s("commerce-store-view-code");
  window.adobeDataLayer.push((n) => {
    n.addEventListener(
      "adobeDataLayer:change",
      (o) => {
        const e = `${a}:productViewHistory`;
        let r = JSON.parse(window.localStorage.getItem(e) || "[]");
        r = r.filter(
          (t) => t.sku !== o.productContext.sku
        ), r.push({
          date: (/* @__PURE__ */ new Date()).toISOString(),
          sku: o.productContext.sku
        }), window.localStorage.setItem(
          e,
          JSON.stringify(r.slice(-10))
        );
      },
      { path: "productContext" }
    ), n.addEventListener("place-order", () => {
      const o = n.getState("shoppingCartContext");
      if (!o)
        return;
      const e = `${a}:purchaseHistory`, r = o.items.map(
        (i) => i.product.sku
      ), t = JSON.parse(
        window.localStorage.getItem(e) || "[]"
      );
      t.push({
        date: (/* @__PURE__ */ new Date()).toISOString(),
        items: r
      }), window.localStorage.setItem(
        e,
        JSON.stringify(t.slice(-5))
      );
    });
  });
})();
function $(a, n) {
  const o = document.head.querySelector(
    `script[data-name="${n}"]`
  );
  if (o) {
    o.innerHTML = JSON.stringify(a);
    return;
  }
  const e = document.createElement("script");
  e.type = "application/ld+json", e.innerHTML = JSON.stringify(a), e.dataset.name = n, document.head.appendChild(e);
}
export {
  h as getProduct,
  f as getSignInToken,
  S as getSkuFromUrl,
  d as performCatalogServiceQuery,
  y as performMonolithGraphQLQuery,
  p as priceFieldsFragment,
  m as productDetailQuery,
  w as refineProductQuery,
  v as renderPrice,
  $ as setJsonLd
};
