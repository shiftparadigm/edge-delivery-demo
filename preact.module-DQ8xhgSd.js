var I, d, Q, x, q, X, H, B, $, A, S = {}, Y = [], o_ = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, O = Array.isArray;
function w(e, _) {
  for (var t in _)
    e[t] = _[t];
  return e;
}
function Z(e) {
  var _ = e.parentNode;
  _ && _.removeChild(e);
}
function r_(e, _, t) {
  var l, o, r, s = {};
  for (r in _)
    r == "key" ? l = _[r] : r == "ref" ? o = _[r] : s[r] = _[r];
  if (arguments.length > 2 && (s.children = arguments.length > 3 ? I.call(arguments, 2) : t), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      s[r] === void 0 && (s[r] = e.defaultProps[r]);
  return L(e, s, l, o, null);
}
function L(e, _, t, l, o) {
  var r = { type: e, props: _, key: t, ref: l, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: o ?? ++Q, __i: -1, __u: 0 };
  return o == null && d.vnode != null && d.vnode(r), r;
}
function u_() {
  return { current: null };
}
function N(e) {
  return e.children;
}
function E(e, _) {
  this.props = e, this.context = _;
}
function P(e, _) {
  if (_ == null)
    return e.__ ? P(e.__, e.__i + 1) : null;
  for (var t; _ < e.__k.length; _++)
    if ((t = e.__k[_]) != null && t.__e != null)
      return t.__e;
  return typeof e.type == "function" ? P(e) : null;
}
function __(e) {
  var _, t;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, _ = 0; _ < e.__k.length; _++)
      if ((t = e.__k[_]) != null && t.__e != null) {
        e.__e = e.__c.base = t.__e;
        break;
      }
    return __(e);
  }
}
function G(e) {
  (!e.__d && (e.__d = !0) && x.push(e) && !F.__r++ || q !== d.debounceRendering) && ((q = d.debounceRendering) || X)(F);
}
function F() {
  var e, _, t, l, o, r, s, u;
  for (x.sort(H); e = x.shift(); )
    e.__d && (_ = x.length, l = void 0, r = (o = (t = e).__v).__e, s = [], u = [], t.__P && ((l = w({}, o)).__v = o.__v + 1, d.vnode && d.vnode(l), j(t.__P, l, o, t.__n, t.__P.namespaceURI, 32 & o.__u ? [r] : null, s, r ?? P(o), !!(32 & o.__u), u), l.__v = o.__v, l.__.__k[l.__i] = l, n_(s, l, u), l.__e != r && __(l)), x.length > _ && x.sort(H));
  F.__r = 0;
}
function e_(e, _, t, l, o, r, s, u, c, i, p) {
  var n, g, f, h, k, v = l && l.__k || Y, a = _.length;
  for (t.__d = c, l_(t, _, v), c = t.__d, n = 0; n < a; n++)
    (f = t.__k[n]) != null && typeof f != "boolean" && typeof f != "function" && (g = f.__i === -1 ? S : v[f.__i] || S, f.__i = n, j(e, f, g, o, r, s, u, c, i, p), h = f.__e, f.ref && g.ref != f.ref && (g.ref && z(g.ref, null, f), p.push(f.ref, f.__c || h, f)), k == null && h != null && (k = h), 65536 & f.__u || g.__k === f.__k ? (c && !c.isConnected && (c = P(g)), c = t_(f, c, e)) : typeof f.type == "function" && f.__d !== void 0 ? c = f.__d : h && (c = h.nextSibling), f.__d = void 0, f.__u &= -196609);
  t.__d = c, t.__e = k;
}
function l_(e, _, t) {
  var l, o, r, s, u, c = _.length, i = t.length, p = i, n = 0;
  for (e.__k = [], l = 0; l < c; l++)
    s = l + n, (o = e.__k[l] = (o = _[l]) == null || typeof o == "boolean" || typeof o == "function" ? null : typeof o == "string" || typeof o == "number" || typeof o == "bigint" || o.constructor == String ? L(null, o, null, null, null) : O(o) ? L(N, { children: o }, null, null, null) : o.constructor === void 0 && o.__b > 0 ? L(o.type, o.props, o.key, o.ref ? o.ref : null, o.__v) : o) != null ? (o.__ = e, o.__b = e.__b + 1, u = i_(o, t, s, p), o.__i = u, r = null, u !== -1 && (p--, (r = t[u]) && (r.__u |= 131072)), r == null || r.__v === null ? (u == -1 && n--, typeof o.type != "function" && (o.__u |= 65536)) : u !== s && (u === s + 1 ? n++ : u > s ? p > c - s ? n += u - s : n-- : u < s ? u == s - 1 && (n = u - s) : n = 0, u !== l + n && (o.__u |= 65536))) : (r = t[s]) && r.key == null && r.__e && !(131072 & r.__u) && (r.__e == e.__d && (e.__d = P(r)), R(r, r, !1), t[s] = null, p--);
  if (p)
    for (l = 0; l < i; l++)
      (r = t[l]) != null && !(131072 & r.__u) && (r.__e == e.__d && (e.__d = P(r)), R(r, r));
}
function t_(e, _, t) {
  var l, o;
  if (typeof e.type == "function") {
    for (l = e.__k, o = 0; l && o < l.length; o++)
      l[o] && (l[o].__ = e, _ = t_(l[o], _, t));
    return _;
  }
  e.__e != _ && (t.insertBefore(e.__e, _ || null), _ = e.__e);
  do
    _ = _ && _.nextSibling;
  while (_ != null && _.nodeType === 8);
  return _;
}
function i_(e, _, t, l) {
  var o = e.key, r = e.type, s = t - 1, u = t + 1, c = _[t];
  if (c === null || c && o == c.key && r === c.type && !(131072 & c.__u))
    return t;
  if (l > (c != null && !(131072 & c.__u) ? 1 : 0))
    for (; s >= 0 || u < _.length; ) {
      if (s >= 0) {
        if ((c = _[s]) && !(131072 & c.__u) && o == c.key && r === c.type)
          return s;
        s--;
      }
      if (u < _.length) {
        if ((c = _[u]) && !(131072 & c.__u) && o == c.key && r === c.type)
          return u;
        u++;
      }
    }
  return -1;
}
function J(e, _, t) {
  _[0] === "-" ? e.setProperty(_, t ?? "") : e[_] = t == null ? "" : typeof t != "number" || o_.test(_) ? t : t + "px";
}
function D(e, _, t, l, o) {
  var r;
  _:
    if (_ === "style")
      if (typeof t == "string")
        e.style.cssText = t;
      else {
        if (typeof l == "string" && (e.style.cssText = l = ""), l)
          for (_ in l)
            t && _ in t || J(e.style, _, "");
        if (t)
          for (_ in t)
            l && t[_] === l[_] || J(e.style, _, t[_]);
      }
    else if (_[0] === "o" && _[1] === "n")
      r = _ !== (_ = _.replace(/(PointerCapture)$|Capture$/i, "$1")), _ = _.toLowerCase() in e || _ === "onFocusOut" || _ === "onFocusIn" ? _.toLowerCase().slice(2) : _.slice(2), e.l || (e.l = {}), e.l[_ + r] = t, t ? l ? t.u = l.u : (t.u = B, e.addEventListener(_, r ? A : $, r)) : e.removeEventListener(_, r ? A : $, r);
    else {
      if (o == "http://www.w3.org/2000/svg")
        _ = _.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (_ != "width" && _ != "height" && _ != "href" && _ != "list" && _ != "form" && _ != "tabIndex" && _ != "download" && _ != "rowSpan" && _ != "colSpan" && _ != "role" && _ in e)
        try {
          e[_] = t ?? "";
          break _;
        } catch {
        }
      typeof t == "function" || (t == null || t === !1 && _[4] !== "-" ? e.removeAttribute(_) : e.setAttribute(_, t));
    }
}
function K(e) {
  return function(_) {
    if (this.l) {
      var t = this.l[_.type + e];
      if (_.t == null)
        _.t = B++;
      else if (_.t < t.u)
        return;
      return t(d.event ? d.event(_) : _);
    }
  };
}
function j(e, _, t, l, o, r, s, u, c, i) {
  var p, n, g, f, h, k, v, a, y, b, M, C, V, T, W, m = _.type;
  if (_.constructor !== void 0)
    return null;
  128 & t.__u && (c = !!(32 & t.__u), r = [u = _.__e = t.__e]), (p = d.__b) && p(_);
  _:
    if (typeof m == "function")
      try {
        if (a = _.props, y = (p = m.contextType) && l[p.__c], b = p ? y ? y.props.value : p.__ : l, t.__c ? v = (n = _.__c = t.__c).__ = n.__E : ("prototype" in m && m.prototype.render ? _.__c = n = new m(a, b) : (_.__c = n = new E(a, b), n.constructor = m, n.render = f_), y && y.sub(n), n.props = a, n.state || (n.state = {}), n.context = b, n.__n = l, g = n.__d = !0, n.__h = [], n._sb = []), n.__s == null && (n.__s = n.state), m.getDerivedStateFromProps != null && (n.__s == n.state && (n.__s = w({}, n.__s)), w(n.__s, m.getDerivedStateFromProps(a, n.__s))), f = n.props, h = n.state, n.__v = _, g)
          m.getDerivedStateFromProps == null && n.componentWillMount != null && n.componentWillMount(), n.componentDidMount != null && n.__h.push(n.componentDidMount);
        else {
          if (m.getDerivedStateFromProps == null && a !== f && n.componentWillReceiveProps != null && n.componentWillReceiveProps(a, b), !n.__e && (n.shouldComponentUpdate != null && n.shouldComponentUpdate(a, n.__s, b) === !1 || _.__v === t.__v)) {
            for (_.__v !== t.__v && (n.props = a, n.state = n.__s, n.__d = !1), _.__e = t.__e, _.__k = t.__k, _.__k.forEach(function(U) {
              U && (U.__ = _);
            }), M = 0; M < n._sb.length; M++)
              n.__h.push(n._sb[M]);
            n._sb = [], n.__h.length && s.push(n);
            break _;
          }
          n.componentWillUpdate != null && n.componentWillUpdate(a, n.__s, b), n.componentDidUpdate != null && n.__h.push(function() {
            n.componentDidUpdate(f, h, k);
          });
        }
        if (n.context = b, n.props = a, n.__P = e, n.__e = !1, C = d.__r, V = 0, "prototype" in m && m.prototype.render) {
          for (n.state = n.__s, n.__d = !1, C && C(_), p = n.render(n.props, n.state, n.context), T = 0; T < n._sb.length; T++)
            n.__h.push(n._sb[T]);
          n._sb = [];
        } else
          do
            n.__d = !1, C && C(_), p = n.render(n.props, n.state, n.context), n.state = n.__s;
          while (n.__d && ++V < 25);
        n.state = n.__s, n.getChildContext != null && (l = w(w({}, l), n.getChildContext())), g || n.getSnapshotBeforeUpdate == null || (k = n.getSnapshotBeforeUpdate(f, h)), e_(e, O(W = p != null && p.type === N && p.key == null ? p.props.children : p) ? W : [W], _, t, l, o, r, s, u, c, i), n.base = _.__e, _.__u &= -161, n.__h.length && s.push(n), v && (n.__E = n.__ = null);
      } catch (U) {
        _.__v = null, c || r != null ? (_.__e = u, _.__u |= c ? 160 : 32, r[r.indexOf(u)] = null) : (_.__e = t.__e, _.__k = t.__k), d.__e(U, _, t);
      }
    else
      r == null && _.__v === t.__v ? (_.__k = t.__k, _.__e = t.__e) : _.__e = s_(t.__e, _, t, l, o, r, s, c, i);
  (p = d.diffed) && p(_);
}
function n_(e, _, t) {
  _.__d = void 0;
  for (var l = 0; l < t.length; l++)
    z(t[l], t[++l], t[++l]);
  d.__c && d.__c(_, e), e.some(function(o) {
    try {
      e = o.__h, o.__h = [], e.some(function(r) {
        r.call(o);
      });
    } catch (r) {
      d.__e(r, o.__v);
    }
  });
}
function s_(e, _, t, l, o, r, s, u, c) {
  var i, p, n, g, f, h, k, v = t.props, a = _.props, y = _.type;
  if (y === "svg" ? o = "http://www.w3.org/2000/svg" : y === "math" ? o = "http://www.w3.org/1998/Math/MathML" : o || (o = "http://www.w3.org/1999/xhtml"), r != null) {
    for (i = 0; i < r.length; i++)
      if ((f = r[i]) && "setAttribute" in f == !!y && (y ? f.localName === y : f.nodeType === 3)) {
        e = f, r[i] = null;
        break;
      }
  }
  if (e == null) {
    if (y === null)
      return document.createTextNode(a);
    e = document.createElementNS(o, y, a.is && a), r = null, u = !1;
  }
  if (y === null)
    v === a || u && e.data === a || (e.data = a);
  else {
    if (r = r && I.call(e.childNodes), v = t.props || S, !u && r != null)
      for (v = {}, i = 0; i < e.attributes.length; i++)
        v[(f = e.attributes[i]).name] = f.value;
    for (i in v)
      if (f = v[i], i != "children") {
        if (i == "dangerouslySetInnerHTML")
          n = f;
        else if (i !== "key" && !(i in a)) {
          if (i == "value" && "defaultValue" in a || i == "checked" && "defaultChecked" in a)
            continue;
          D(e, i, null, f, o);
        }
      }
    for (i in a)
      f = a[i], i == "children" ? g = f : i == "dangerouslySetInnerHTML" ? p = f : i == "value" ? h = f : i == "checked" ? k = f : i === "key" || u && typeof f != "function" || v[i] === f || D(e, i, f, v[i], o);
    if (p)
      u || n && (p.__html === n.__html || p.__html === e.innerHTML) || (e.innerHTML = p.__html), _.__k = [];
    else if (n && (e.innerHTML = ""), e_(e, O(g) ? g : [g], _, t, l, y === "foreignObject" ? "http://www.w3.org/1999/xhtml" : o, r, s, r ? r[0] : t.__k && P(t, 0), u, c), r != null)
      for (i = r.length; i--; )
        r[i] != null && Z(r[i]);
    u || (i = "value", h !== void 0 && (h !== e[i] || y === "progress" && !h || y === "option" && h !== v[i]) && D(e, i, h, v[i], o), i = "checked", k !== void 0 && k !== e[i] && D(e, i, k, v[i], o));
  }
  return e;
}
function z(e, _, t) {
  try {
    typeof e == "function" ? e(_) : e.current = _;
  } catch (l) {
    d.__e(l, t);
  }
}
function R(e, _, t) {
  var l, o;
  if (d.unmount && d.unmount(e), (l = e.ref) && (l.current && l.current !== e.__e || z(l, null, _)), (l = e.__c) != null) {
    if (l.componentWillUnmount)
      try {
        l.componentWillUnmount();
      } catch (r) {
        d.__e(r, _);
      }
    l.base = l.__P = null;
  }
  if (l = e.__k)
    for (o = 0; o < l.length; o++)
      l[o] && R(l[o], _, t || typeof e.type != "function");
  t || e.__e == null || Z(e.__e), e.__c = e.__ = e.__e = e.__d = void 0;
}
function f_(e, _, t) {
  return this.constructor(e, t);
}
function c_(e, _, t) {
  var l, o, r, s;
  d.__ && d.__(e, _), o = (l = typeof t == "function") ? null : _.__k, r = [], s = [], j(_, e = (!l && t || _).__k = r_(N, null, [e]), o || S, S, _.namespaceURI, !l && t ? [t] : o ? null : _.firstChild ? I.call(_.childNodes) : null, r, !l && t ? t : o ? o.__e : _.firstChild, l, s), n_(r, e, s);
}
I = Y.slice, d = { __e: function(e, _, t, l) {
  for (var o, r, s; _ = _.__; )
    if ((o = _.__c) && !o.__)
      try {
        if ((r = o.constructor) && r.getDerivedStateFromError != null && (o.setState(r.getDerivedStateFromError(e)), s = o.__d), o.componentDidCatch != null && (o.componentDidCatch(e, l || {}), s = o.__d), s)
          return o.__E = o;
      } catch (u) {
        e = u;
      }
  throw e;
} }, Q = 0, E.prototype.setState = function(e, _) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = w({}, this.state), typeof e == "function" && (e = e(w({}, t), this.props)), e && w(t, e), e != null && this.__v && (_ && this._sb.push(_), G(this));
}, E.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), G(this));
}, E.prototype.render = N, x = [], X = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, H = function(e, _) {
  return e.__v.__b - _.__v.__b;
}, F.__r = 0, B = 0, $ = K(!1), A = K(!0);
export {
  c_ as B,
  r_ as _,
  E as b,
  N as k,
  u_ as m
};
