(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".product-list-page{min-height:700px}.product-list-page .ds-sdk-product-item__image img{aspect-ratio:185 / 230;object-fit:contain}@media (width >= 750px){.product-list-page{min-height:auto}}")),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
import { l as s } from "../../loadScript-Bdmho985.js";
import { r as d } from "../../readBlockConfig-BocDcTz8.js";
import { getConfigValue as t } from "../../scripts/configs.js";
async function g(a) {
  var c;
  const { category: i, type: n } = d(a);
  a.textContent = "", await s("/scripts/widgets/search.js");
  const r = {
    environmentId: await t("commerce-environment-id"),
    environmentType: (await t("commerce-endpoint")).includes(
      "sandbox"
    ) ? "testing" : "",
    apiKey: await t("commerce-x-api-key"),
    websiteCode: await t("commerce-website-code"),
    storeCode: await t("commerce-store-code"),
    storeViewCode: await t("commerce-store-view-code"),
    config: {
      pageSize: 8,
      perPageConfig: {
        pageSizeOptions: "12,24,36",
        defaultPageSizeOption: "12"
      },
      minQueryLength: "2",
      currencySymbol: "$",
      currencyRate: "1",
      displayOutOfStock: !0,
      allowAllProducts: !1,
      imageCarousel: !1,
      optimizeImages: !0,
      imageBaseWidth: 200,
      listview: !0,
      displayMode: "",
      // "" for plp || "PAGE" for category/catalog
      addToCart: async (...e) => {
        const { addProductsToCart: o } = await import("../../api-Dikv6K-n.js");
        await o([
          {
            sku: e[0],
            options: e[1],
            quantity: e[2]
          }
        ]);
      }
    },
    context: {
      customerGroup: await t("commerce-customer-group")
    },
    route: ({ sku: e, urlKey: o }) => `/products/${o}/${e}`
  };
  return n !== "search" && (r.config.categoryName = (c = document.querySelector(
    ".default-content-wrapper > h1"
  )) == null ? void 0 : c.innerText, r.config.currentCategoryId = i, a.dataset.category = i), await new Promise((e) => {
    const o = setInterval(() => {
      window.LiveSearchPLP && (clearInterval(o), e());
    }, 200);
  }), window.LiveSearchPLP({ storeDetails: r, root: a });
}
export {
  g as default
};
