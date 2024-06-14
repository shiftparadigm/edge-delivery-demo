(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode(".image-text>div{align-items:center;display:grid;grid-template-columns:1fr 1fr;max-width:var(--max-width);margin:auto;padding:var(--spacing-padding-2) 0}@media screen and (width < 1260px){.image-text{padding-left:var(--spacing-padding-2);padding-right:var(--spacing-padding-2)}}@media (width < 1024px){.image-text>div{grid-template-columns:none}.image-text .image-text-image-wrap{order:1}.image-text .image-text-text-wrap{order:2;padding:0}}.image-text.light-gray{background-color:var(--color-alternate-light)}.image-text.dark{background-color:var(--color-primary-dark);color:var(--color-primary-light)}.image-text.gradient-blue{background-image:var(--color-gradient-blue-inverted);color:var(--color-primary-light)}.image-text-image-wrap{width:100%}.image-text-text-wrap{padding:var(--spacing-padding-2);padding-left:0}.image-text-text-wrap h2,.image-text-text-wrap h3{font:var(--type-display-2-font);letter-spacing:var(--type-display-2-letter-spacing)}@media (width >= 1024px){.image-text>div:first-of-type .image-text-text-wrap{max-width:400px}.image-text:not(.text-left)>div:last-of-type .image-text-text-wrap{margin-left:var(--spacing-padding-4)}}.image-text .image-text-text-wrap a.button{background-color:var(--color-accent);color:var(--color-primary-dark);font:var(--type-button-1-font);letter-spacing:var(--type-button-1-letter-spacing)}")),document.head.appendChild(t)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
function d(t) {
  var i, c;
  const { firstElementChild: e } = t.firstElementChild || {}, a = (i = t.querySelector("picture")) == null ? void 0 : i.parentNode;
  a == null || a.classList.add("image-text-image-wrap");
  const s = (c = t.querySelector("h2,h3,h4")) == null ? void 0 : c.parentNode;
  s == null || s.classList.add("image-text-text-wrap"), e != null && e.classList.contains("image-text-text-wrap") && t.classList.add("text-left");
}
export {
  d as default
};
