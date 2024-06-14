(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode("footer{padding:2rem;background-color:var(--light-color);font-size:var(--body-font-size-s)}footer .footer{max-width:1200px;margin:auto}footer .footer p{margin:0}")),document.head.appendChild(e)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
import { g as r } from "../../getMetadata-CRmsHWFI.js";
import { loadFragment as f } from "../fragment/fragment.js";
async function m(t) {
  const e = r("footer"), n = e ? new URL(e, window.location.href).pathname : "/footer", o = await f(n);
  t.textContent = "";
  const a = document.createElement("div");
  for (; o.firstElementChild; )
    a.append(o.firstElementChild);
  t.append(a);
}
export {
  m as default
};
