var w = function(p, f, t, n) {
  var v;
  f[0] = 0;
  for (var u = 1; u < f.length; u++) {
    var g = f[u++], o = f[u] ? (f[0] |= g ? 1 : 2, t[f[u++]]) : f[++u];
    g === 3 ? n[0] = o : g === 4 ? n[1] = Object.assign(n[1] || {}, o) : g === 5 ? (n[1] = n[1] || {})[f[++u]] = o : g === 6 ? n[1][f[++u]] += o + "" : g ? (v = p.apply(o, w(p, o, t, ["", null])), n.push(v), o[0] ? f[0] |= 2 : (f[u - 2] = 0, f[u] = v)) : n.push(o);
  }
  return n;
}, m = /* @__PURE__ */ new Map();
function M(p) {
  var f = m.get(this);
  return f || (f = /* @__PURE__ */ new Map(), m.set(this, f)), (f = w(
    this,
    f.get(p) || (f.set(
      p,
      f = function(t) {
        for (var n, v, u = 1, g = "", o = "", i = [0], c = function(s) {
          u === 1 && (s || (g = g.replace(/^\s*\n\s*|\s*\n\s*$/g, ""))) ? i.push(0, s, g) : u === 3 && (s || g) ? (i.push(3, s, g), u = 2) : u === 2 && g === "..." && s ? i.push(4, s, 0) : u === 2 && g && !s ? i.push(5, 0, !0, g) : u >= 5 && ((g || !s && u === 5) && (i.push(u, 0, g, v), u = 6), s && (i.push(u, s, 0, v), u = 6)), g = "";
        }, l = 0; l < t.length; l++) {
          l && (u === 1 && c(), c(l));
          for (var a = 0; a < t[l].length; a++)
            n = t[l][a], u === 1 ? n === "<" ? (c(), i = [i], u = 3) : g += n : u === 4 ? g === "--" && n === ">" ? (u = 1, g = "") : g = n + g[0] : o ? n === o ? o = "" : g += n : n === '"' || n === "'" ? o = n : n === ">" ? (c(), u = 1) : u && (n === "=" ? (u = 5, v = g, g = "") : n === "/" && (u < 5 || t[l][a + 1] === ">") ? (c(), u === 3 && (i = i[0]), u = i, (i = i[0]).push(2, 0, u), u = 0) : n === " " || n === "	" || n === `
` || n === "\r" ? (c(), u = 2) : g += n), u === 3 && g === "!--" && (u = 4, i = i[0]);
        }
        return c(), i;
      }(p)
    ), f),
    arguments,
    []
  )).length > 1 ? f : f[0];
}
export {
  M as default
};
