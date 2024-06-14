import { h as o, a as i } from "../fetch-graphql-DRbbdkaK.js";
import { n as r } from "../initializer-BlD7JXpT.js";
import { initialize as t } from "../api-Dikv6K-n.js";
import { getConfigValue as n } from "./configs.js";
async function g() {
  o(await n("commerce-core-endpoint")), r.register(t, {}), i.on("cart/data", (e) => {
    e != null && e.id ? sessionStorage.setItem("DROPINS_CART_ID", e.id) : sessionStorage.removeItem("DROPINS_CART_ID");
  }), i.enableLogger(!0);
}
export {
  g as default
};
