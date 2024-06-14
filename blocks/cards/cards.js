(function(){"use strict";try{if(typeof document<"u"){var r=document.createElement("style");r.appendChild(document.createTextNode(".cards>ul{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(auto-fill,minmax(278px,1fr));grid-gap:16px}.cards>ul>li{border:1px solid var(--color-neutral-500);background-color:var(--background-color)}.cards .cards-card-body{margin:16px}.cards .cards-card-image{line-height:0}.cards .cards-card-body>*:first-child{margin-top:0}.cards>ul>li img{width:100%;aspect-ratio:4 / 3;object-fit:cover}")),document.head.appendChild(r)}}catch(d){console.error("vite-plugin-css-injected-by-js",d)}})();
import { c as l } from "../../createOptimizedPicture-ecGBltyO.js";
function i(c) {
  const r = document.createElement("ul");
  [...c.children].forEach((e) => {
    const a = document.createElement("li");
    for (; e.firstElementChild; )
      a.append(e.firstElementChild);
    [...a.children].forEach((t) => {
      t.children.length === 1 && t.querySelector("picture") ? t.className = "cards-card-image" : t.className = "cards-card-body";
    }), r.append(a);
  }), r.querySelectorAll("img").forEach(
    (e) => e.closest("picture").replaceWith(
      l(e.src, e.alt, !1, [{ width: "750" }])
    )
  ), c.textContent = "", c.append(r);
}
export {
  i as default
};
