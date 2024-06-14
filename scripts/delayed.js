import { s as r } from "../sampleRUM-BOaDpSnv.js";
import { getConfigValue as e } from "./configs.js";
r("cwv");
const t = {
  environmentId: await e("commerce-environment-id"),
  environment: await e("commerce-environment") === "Production" ? "prod" : "non-prod",
  storeUrl: await e("commerce-store-url"),
  websiteId: parseInt(await e("commerce-website-id"), 10),
  websiteCode: await e("commerce-website-code"),
  storeId: parseInt(await e("commerce-store-id"), 10),
  storeCode: await e("commerce-store-code"),
  storeViewId: parseInt(await e("commerce-store-view-id"), 10),
  storeViewCode: await e("commerce-store-view-code"),
  websiteName: await e("commerce-website-name"),
  storeName: await e("commerce-store-name"),
  storeViewName: await e("commerce-store-view-name"),
  baseCurrencyCode: await e("commerce-base-currency-code"),
  storeViewCurrencyCode: await e("commerce-base-currency-code"),
  storefrontTemplate: "Franklin"
};
window.adobeDataLayer.push(
  { storefrontInstanceContext: t },
  { eventForwardingContext: { commerce: !0, aep: !1 } }
);
import("../index-xZM5QCMT.js").then((o) => o.i);
import("../index-CIto1FOR.js").then((o) => o.i);
