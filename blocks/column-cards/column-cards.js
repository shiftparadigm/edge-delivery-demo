(function(){"use strict";try{if(typeof document<"u"){var a=document.createElement("style");a.appendChild(document.createTextNode(".column-cards-wrapper{background-color:var(--color-primary-dark);padding:var(--spacing-padding-2) 0}.column-cards{color:var(--color-primary-light);margin-left:auto;margin-right:auto;max-width:var(--max-width);width:100%}.column-cards-main-heading-wrap h2,.column-cards-main-heading-wrap h3,.column-cards-main-heading-wrap h4{margin:var(--spacing-padding-1) 0}.column-cards .column-cards-text-wrap{display:grid;gap:var(--spacing-padding-2);grid-auto-columns:minmax(0,1fr);grid-auto-flow:column;padding:var(--spacing-padding-4) 0}.column-cards .column-cards-text-wrap p{margin-bottom:0}.column-cards .column-cards-text-wrap p:first-of-type{margin-top:0}@media screen and (width < 1260px){.column-cards{box-sizing:border-box;padding:0 var(--spacing-padding-2)}}@media screen and (width < 800px){.column-cards .column-cards-text-wrap{display:block;padding:var(--spacing-padding-1) 0}.column-cards .column-cards-text-wrap h3{margin-top:0}.column-cards .column-cards-text-wrap p{margin-bottom:var(--spacing-padding-4)}.column-cards .column-cards-text-wrap p:first-of-type{margin-bottom:var(--spacing-padding-2)}.column-cards .column-cards-text-wrap>div:last-of-type p:last-of-type{margin-bottom:0}}.column-cards .column-cards-text-wrap a.button{background-color:var(--color-accent);color:var(--color-primary-dark);font:var(--type-button-1-font);letter-spacing:var(--type-button-1-letter-spacing)}")),document.head.appendChild(a)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
function e(c) {
  const { firstElementChild: a } = c, n = a == null ? void 0 : a.children;
  (n == null ? void 0 : n.length) === 1 && (a == null || a.classList.add("column-cards-main-heading-wrap"));
  const t = c.querySelector(".column-cards > div:last-of-type");
  t == null || t.classList.add("column-cards-text-wrap");
}
export {
  e as default
};
