(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".fragment-wrapper>.section{padding-left:0;padding-right:0}.fragment-wrapper>.section:first-of-type{padding-top:0}.fragment-wrapper>.section:last-of-type{padding-bottom:0}")),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
import { d as a } from "../../decorateMain-C5iRucPu.js";
import { l as c } from "../../loadBlocks-Bxs4LN-N.js";
async function l(t) {
  if (t && t.startsWith("/")) {
    const s = await fetch(`${t}.plain.html`);
    if (s.ok) {
      const e = document.createElement("main");
      e.innerHTML = await s.text();
      const n = (r, i) => {
        e.querySelectorAll(`${r}[${i}^="./media_"]`).forEach((o) => {
          o[i] = new URL(
            o.getAttribute(i),
            new URL(t, window.location)
          ).href;
        });
      };
      return n("img", "src"), n("source", "srcset"), a(e), await c(e), e;
    }
  }
  return null;
}
async function u(t) {
  const s = t.querySelector("a"), e = s ? s.getAttribute("href") : t.textContent.trim(), n = await l(e);
  if (n) {
    const r = n.querySelector(":scope .section");
    r && (t.closest(".section").classList.add(...r.classList), t.closest(".fragment").replaceWith(...n.childNodes));
  }
}
export {
  u as default,
  l as loadFragment
};
