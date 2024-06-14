async function i(n, t) {
  return new Promise((r, o) => {
    if (document.querySelector(`head > script[src="${n}"]`))
      r();
    else {
      const e = document.createElement("script");
      if (e.src = n, t)
        for (const c in t)
          e.setAttribute(c, t[c]);
      e.onload = () => r(), e.onerror = o, document.head.append(e);
    }
  });
}
export {
  i as l
};
