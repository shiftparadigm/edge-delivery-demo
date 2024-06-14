function u(n, r = "", s = !1, c = [{ media: "(min-width: 600px)", width: "2000" }, { width: "750" }]) {
  const o = new URL(n, window.location.href), m = document.createElement("picture"), { pathname: d } = o, a = d.substring(d.lastIndexOf(".") + 1);
  return c.forEach((t) => {
    const i = document.createElement("source");
    t.media && i.setAttribute("media", t.media), i.setAttribute("type", "image/webp"), i.setAttribute("srcset", `${d}?width=${t.width}&format=webply&optimize=medium`), m.appendChild(i);
  }), c.forEach((t, i) => {
    if (i < c.length - 1) {
      const e = document.createElement("source");
      t.media && e.setAttribute("media", t.media), e.setAttribute("srcset", `${d}?width=${t.width}&format=${a}&optimize=medium`), m.appendChild(e);
    } else {
      const e = document.createElement("img");
      e.setAttribute("loading", s ? "eager" : "lazy"), e.setAttribute("alt", r), m.appendChild(e), e.setAttribute("src", `${d}?width=${t.width}&format=${a}&optimize=medium`);
    }
  }), m;
}
export {
  u as c
};
