(function(){"use strict";try{if(typeof document<"u"){var o=document.createElement("style");o.appendChild(document.createTextNode(".form-wrapper{background:var(--color-gradient-blue);box-sizing:border-box;color:var(--color-primary-light)}.form-wrapper *{box-sizing:border-box}.form{margin-left:auto;margin-right:auto;max-width:var(--max-width);min-height:600px;padding:var(--spacing-padding-2) 0}.form>div{display:grid;gap:var(--spacing-padding-6);grid-template-columns:1fr 1fr}.form .form-target{padding-top:var(--spacing-padding-3)}.form-target .mktoForm .shift-input{border-radius:0;font:var(--type-body-1-default-font);height:3rem;margin:var(--spacing-padding-1) 0;padding:var(--spacing-padding-1);text-align:left;width:100%}.form-target .mktoForm .shift-input:focus{border:none!important}.form-target .mktoForm input[type=checkbox]:focus+label:before{outline:1px solid var(--color-primary-dark)}.form-target .mktoForm .shift-input::placeholder{opacity:0}.mktoForm label.shift-label,.mktoForm .mktoRequiredField label.mktoLabel.shift-label{color:var(--color-primary-light);display:block;font:var(--type-body-1-default-font);font-weight:300;width:auto!important}.mktoForm .mktoCheckboxList>label{color:var(--color-primary-light)}.form .form-target button[type=submit]{background-color:var(--color-accent);color:var(--color-primary-dark);font:var(--type-button-1-font);letter-spacing:var(--type-button-1-letter-spacing)}.form-target .mktoForm button.mktoButton{border:none}.form-target .mktoForm button.mktoButton:hover{background-color:var(--color-accent)!important;border:none!important}.form-target .by-marketo-form-confirmation{color:var(--color-primary-light)}.form-target .mktoLogicalField.mktoCheckboxList.mktoHasWidth{width:100%!important}@media screen and (width < 1260px){.form>div{gap:0;grid-template-columns:none;padding-left:var(--spacing-padding-2);padding-right:var(--spacing-padding-2)}}")),document.head.appendChild(o)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
const d = (e, t, s) => {
  const o = document.querySelector("head"), n = document.createElement("script");
  return n.src = e, t && (n.onload = t), o == null || o.append(n), n;
}, a = (e, t) => {
  function s() {
    console.log("Submitting...", e);
  }
  function o() {
    return console.log("Submitted"), e.getFormElem().hide(), e.getFormElem().parent().html(
      `<div class="by-marketo-form-confirmation">${t}</div>`
    ), !1;
  }
  e == null || e.onSubmit(s).onSuccess(o);
}, f = (e, t) => {
  MktoForms2.loadForm(
    "//go.shiftparadigm.com",
    "230-YBS-585",
    2894,
    (o) => a(o, t)
  ), new MutationObserver((o) => {
    o[0].target.querySelectorAll(
      ".mktoForm label.mktoLabel"
    ).forEach((r) => {
      var u;
      r.classList.add("shift-label");
      const c = (u = r == null ? void 0 : r.parentNode) == null ? void 0 : u.querySelector(
        'input[type="text"], input[type="email"], textarea'
      );
      if (c) {
        c.classList.add("shift-input");
        const l = c.getAttribute("placeholder");
        r.textContent = l;
      }
    });
  }).observe(e, { childList: !0, subtree: !0 });
};
function m(e) {
  const t = e.querySelector(".form div > div:last-of-type");
  t == null || t.classList.add("form-target");
  let s = "";
  const o = t == null ? void 0 : t.querySelectorAll("p");
  o && Array.from(o).forEach((i) => {
    s += i == null ? void 0 : i.outerHTML, i.remove();
  });
  const n = '<form id="mktoForm_2894"></form>';
  t && (t.innerHTML += n), d(
    "//go.shiftparadigm.com/js/forms2/js/forms2.min.js",
    () => f(
      t,
      (s == null ? void 0 : s.trim().toString()) || "<p>We have your submission!</p>"
    )
  );
}
export {
  m as default
};
