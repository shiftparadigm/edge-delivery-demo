function e(n, i = {}) {
  const l = "aem-rum";
  e.baseURL = e.baseURL || new URL(window.RUM_BASE == null ? "https://rum.hlx.page" : window.RUM_BASE, window.location), e.defer = e.defer || [];
  const u = (r) => {
    e[r] = e[r] || ((...o) => e.defer.push({ fnname: r, args: o }));
  };
  e.drain = e.drain || ((r, o) => {
    e[r] = o, e.defer.filter(({ fnname: t }) => r === t).forEach(({ fnname: t, args: w }) => e[t](...w));
  }), e.always = e.always || [], e.always.on = (r, o) => {
    e.always[r] = o;
  }, e.on = (r, o) => {
    e.cases[r] = o;
  }, u("observe"), u("cwv");
  try {
    if (window.hlx = window.hlx || {}, !window.hlx.rum) {
      const d = new URLSearchParams(window.location.search).get("rum") === "on" ? 1 : 100, s = Array.from({ length: 75 }, (f, S) => String.fromCharCode(48 + S)).filter((f) => /\d|[A-Z]/i.test(f)).filter(() => Math.random() * 75 > 70).join(""), c = Math.random(), h = c * d < 1, m = window.performance ? window.performance.timeOrigin : Date.now(), g = {
        full: () => window.location.href,
        origin: () => window.location.origin,
        path: () => window.location.href.replace(/\?.*$/, "")
      }, a = sessionStorage.getItem(l) ? JSON.parse(sessionStorage.getItem(l)) : {};
      a.pages = (a.pages ? a.pages : 0) + 1 + (Math.floor(Math.random() * 20) - 10), sessionStorage.setItem(l, JSON.stringify(a)), window.hlx.rum = {
        weight: d,
        id: s,
        random: c,
        isSelected: h,
        firstReadTime: m,
        sampleRUM: e,
        sanitizeURL: g[window.hlx.RUM_MASK_URL || "path"],
        rumSessionStorage: a
      };
    }
    const { weight: r, id: o, firstReadTime: t } = window.hlx.rum;
    if (window.hlx && window.hlx.rum && window.hlx.rum.isSelected) {
      const w = [
        "weight",
        "id",
        "referer",
        "checkpoint",
        "t",
        "source",
        "target",
        "cwv",
        "CLS",
        "FID",
        "LCP",
        "INP",
        "TTFB"
      ], d = (s = i) => {
        const c = Math.round(window.performance ? window.performance.now() : Date.now() - t), h = JSON.stringify({
          weight: r,
          id: o,
          referer: window.hlx.rum.sanitizeURL(),
          checkpoint: n,
          t: c,
          ...i
        }, w), m = new URL(`.rum/${r}`, e.baseURL).href;
        navigator.sendBeacon(m, h), console.debug(`ping:${n}`, s);
      };
      e.cases = e.cases || {
        load: () => e("pagesviewed", { source: window.hlx.rum.rumSessionStorage.pages }) || !0,
        cwv: () => e.cwv(i) || !0,
        lazy: () => {
          const s = document.createElement("script");
          return s.src = new URL(".rum/@adobe/helix-rum-enhancer@^1/src/index.js", e.baseURL).href, document.head.appendChild(s), !0;
        }
      }, d(i), e.cases[n] && e.cases[n]();
    }
    e.always[n] && e.always[n](i);
  } catch {
  }
}
export {
  e as s
};
