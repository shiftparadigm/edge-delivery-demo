function a(c) {
  return typeof c == "string" ? c.toLowerCase().replace(/[^0-9a-z]/gi, "-").replace(/-+/g, "-").replace(/^-|-$/g, "") : "";
}
function f(c) {
  const s = {};
  return c.querySelectorAll(":scope > div").forEach((n) => {
    if (n.children) {
      const o = [...n.children];
      if (o[1]) {
        const l = o[1], i = a(o[0].textContent);
        let t = "";
        if (l.querySelector("a")) {
          const e = [...l.querySelectorAll("a")];
          e.length === 1 ? t = e[0].href : t = e.map((r) => r.href);
        } else if (l.querySelector("img")) {
          const e = [...l.querySelectorAll("img")];
          e.length === 1 ? t = e[0].src : t = e.map((r) => r.src);
        } else if (l.querySelector("p")) {
          const e = [...l.querySelectorAll("p")];
          e.length === 1 ? t = e[0].textContent : t = e.map((r) => r.textContent);
        } else
          t = n.children[1].textContent;
        s[i] = t;
      }
    }
  }), s;
}
export {
  f as r,
  a as t
};
