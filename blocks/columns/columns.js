(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".columns>div{display:flex;flex-direction:column}.columns img{width:100%}.columns>div>div{order:1}.columns>div>.columns-img-col{order:0}.columns>div>.columns-img-col img{display:block}@media (width >= 900px){.columns>div{align-items:center;flex-direction:unset;gap:32px}.columns>div>div{flex:1;order:unset}}")),document.head.appendChild(e)}}catch(i){console.error("vite-plugin-css-injected-by-js",i)}})();
function n(c) {
  const i = [...c.firstElementChild.children];
  c.classList.add(`columns-${i.length}-cols`), [...c.children].forEach((l) => {
    [...l.children].forEach((t) => {
      const s = t.querySelector("picture");
      if (s) {
        const e = s.closest("div");
        e && e.children.length === 1 && e.classList.add("columns-img-col");
      }
    });
  });
}
export {
  n as default
};
