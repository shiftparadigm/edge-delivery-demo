(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode(".two-column-text>.text-wrapper{display:grid;gap:var(--spacing-padding-2)}.two-column-text>.text-wrapper,.two-column-text.gradient-headline .gradient-headline-text-wrapper>div,.two-column-text .full-span-picture{margin-left:auto;margin-right:auto;max-width:var(--max-width);padding:var(--spacing-padding-2) 0}.two-column-text.half>.text-wrapper{grid-template-columns:1fr 1fr}.two-column-text.one-third-right>.text-wrapper{grid-template-columns:66% 33%}.two-column-text.one-third-left>.text-wrapper{grid-template-columns:33% 66%}.two-column-text>div>div picture{display:block;padding:0}.two-column-text.data-point-right h2{max-width:75%}@media screen and (width > 1200px){.two-column-text.data-point-right h2{max-width:50%}}.two-column-text.data-point-right h2+p{max-width:75%}.two-column-text.data-point-right h3{font:var(--type-display-1-font);margin-bottom:0}.two-column-text.separated>.text-wrapper{border-bottom:1px solid var(--color-border-separator)}@media screen and (width < 1260px){.two-column-text>.text-wrapper,.two-column-text>div:first-of-type{padding-left:var(--spacing-padding-2);padding-right:var(--spacing-padding-2)}}@media screen and (width < 800px){.two-column-text.one-third-right>.text-wrapper,.two-column-text.one-third-left>.text-wrapper{gap:0;grid-template-columns:none}.two-column-text h2,.two-column-text h2+p{max-width:100%}.two-column-text.half>.text-wrapper{gap:0;grid-template-columns:none}.two-column-text.half>.text-wrapper div{padding:0}.two-column-text.data-point-right>div>div:first-of-type{order:1;padding:0}.two-column-text.data-point-right h3{margin-top:var(--spacing-padding-05)}.two-column-text.one-third-left>.text-wrapper h3{margin:0}.two-column-text.one-third-left>.text-wrapper p{margin:var(--spacing-padding-1) 0}}.two-column-text.gradient-headline .gradient-headline-text-wrapper{background:var(--color-gradient-blue);color:var(--color-primary-light)}.two-column-text.gradient-headline .gradient-headline-text-wrapper h2{margin-bottom:.25em}")),document.head.appendChild(t)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
function r(e) {
  const s = e.querySelector("div > picture");
  if (s && s.classList.add("full-span-picture"), e.classList.contains("gradient-headline")) {
    const t = e.firstElementChild;
    t == null || t.classList.add(
      "gradient-headline-text-wrapper"
    );
  }
  Array.from(e.querySelectorAll("div:has(div + div)")).forEach((t) => {
    t.classList.add("text-wrapper");
  });
}
export {
  r as default
};
