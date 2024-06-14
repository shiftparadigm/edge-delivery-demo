(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode("header .nav-hamburger,header .nav-sections,header .nav-tools{display:none!important}")),document.head.appendChild(e)}}catch(n){console.error("vite-plugin-css-injected-by-js",n)}})();
import { n as Gt } from "../../initializer-BlD7JXpT.js";
import { a as _t, n as Ot } from "../../fetch-graphql-DRbbdkaK.js";
const zt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get FetchError() {
    return dn;
  },
  get InvalidArgument() {
    return un;
  },
  get MissingBillingAddress() {
    return pn;
  },
  get MissingCart() {
    return fn;
  },
  get MissingCountry() {
    return mn;
  },
  get MissingEmail() {
    return vn;
  },
  get MissingPaymentMethod() {
    return gn;
  },
  get STANDARD_ATTRIBUTES() {
    return bn;
  },
  get UnexpectedError() {
    return yn;
  },
  get config() {
    return hn;
  },
  get estimateShippingMethods() {
    return _n;
  },
  get fetchAddressFormFields() {
    return wn;
  },
  get fetchGraphQl() {
    return On;
  },
  get getCheckoutData() {
    return kn;
  },
  get getConfig() {
    return Sn;
  },
  get getCountries() {
    return xn;
  },
  get getRegions() {
    return jn;
  },
  get getStockStatus() {
    return Pn;
  },
  get getStoreConfig() {
    return In;
  },
  get id() {
    return ln;
  },
  get ids() {
    return sn;
  },
  get initialize() {
    return Nt;
  },
  get isEmailAvailable() {
    return Cn;
  },
  get modules() {
    return cn;
  },
  get placeOrder() {
    return En;
  },
  get prepareAddress() {
    return Dn;
  },
  get redirect() {
    return Tn;
  },
  get removeFetchGraphQlHeader() {
    return An;
  },
  get setBillingAddress() {
    return Nn;
  },
  get setEndpoint() {
    return Mn;
  },
  get setFetchGraphQlHeader() {
    return Bn;
  },
  get setFetchGraphQlHeaders() {
    return $n;
  },
  get setGuestEmailOnCart() {
    return qn;
  },
  get setPaymentMethod() {
    return Fn;
  },
  get setShippingAddress() {
    return Ln;
  },
  get setShippingMethodsOnCart() {
    return Gn;
  }
}, Symbol.toStringTag, { value: "Module" })), Ht = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get Provider() {
    return tr;
  },
  get id() {
    return Jn;
  },
  get ids() {
    return Xn;
  },
  get modules() {
    return er;
  },
  get render() {
    return qt;
  }
}, Symbol.toStringTag, { value: "Module" })), Yt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get Checkout() {
    return Vr;
  },
  get OUT_OF_STOCK() {
    return Zr;
  },
  get default() {
    return Ft;
  },
  get id() {
    return Ur;
  },
  get ids() {
    return Kr;
  },
  get modules() {
    return Wr;
  }
}, Symbol.toStringTag, { value: "Module" }));
var gt, wt, Et = {}, jt = {};
function Fe(te) {
  var T = jt[te];
  if (T !== void 0)
    return T.exports;
  var e = jt[te] = { id: te, exports: {} };
  return Et[te].call(e.exports, e, e.exports, Fe), e.exports;
}
Fe.m = Et, Fe.n = (te) => {
  var T = te && te.__esModule ? () => te.default : () => te;
  return Fe.d(T, { a: T }), T;
}, Fe.d = (te, T) => {
  for (var e in T)
    Fe.o(T, e) && !Fe.o(te, e) && Object.defineProperty(te, e, { enumerable: !0, get: T[e] });
}, Fe.f = {}, Fe.e = (te) => Promise.all(Object.keys(Fe.f).reduce((T, e) => (Fe.f[e](te, T), T), [])), Fe.u = (te) => te + ".js", Fe.o = (te, T) => Object.prototype.hasOwnProperty.call(te, T), Fe.r = (te) => {
  typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(te, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(te, "__esModule", { value: !0 });
};
gt = { 2688: 0 }, wt = (te) => {
  var T, e, { ids: s, modules: n, runtime: d } = te, P = 0;
  for (T in n)
    Fe.o(n, T) && (Fe.m[T] = n[T]);
  for (d && d(Fe); P < s.length; P++)
    e = s[P], Fe.o(gt, e) && gt[e] && gt[e][0](), gt[s[P]] = 0;
}, Fe.f.j = (te, T) => {
  var e = Fe.o(gt, te) ? gt[te] : void 0;
  if (e !== 0)
    if (e)
      T.push(e[1]);
    else if (te != 2688) {
      var s = import("./" + Fe.u(te)).then(wt, (n) => {
        throw gt[te] !== 0 && (gt[te] = void 0), n;
      });
      s = Promise.race([s, new Promise((n) => e = gt[te] = [n])]), T.push(e[1] = s);
    } else
      gt[te] = 0;
}, Fe.C = wt;
const Rt = 8412, Ut = [8412], Kt = { 2796: (te, T, e) => {
  e.d(T, { Co: () => n.Co, G0: () => p, GY: () => s.GY, Km: () => n.Km, Wk: () => M, YB: () => n.YB, bB: () => n.bB, kZ: () => n.kZ, kv: () => s.kv, oT: () => n.oT, wd: () => A, yK: () => n.yK });
  var s = e(304), n = e(8596);
  function d(i, a) {
    for (var g in a)
      i[g] = a[g];
    return i;
  }
  function P(i, a) {
    for (var g in i)
      if (g !== "__source" && !(g in a))
        return !0;
    for (var y in a)
      if (y !== "__source" && i[y] !== a[y])
        return !0;
    return !1;
  }
  function S(i, a) {
    this.props = i, this.context = a;
  }
  (S.prototype = new s.Yl()).isPureReactComponent = !0, S.prototype.shouldComponentUpdate = function(i, a) {
    return P(this.props, i) || P(this.state, a);
  };
  var L = s.s1.__b;
  s.s1.__b = function(i) {
    i.type && i.type.__f && i.ref && (i.props.ref = i.ref, i.ref = null), L && L(i);
  };
  var $ = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
  function A(i) {
    function a(g) {
      var y = d({}, g);
      return delete y.ref, i(y, g.ref || null);
    }
    return a.$$typeof = $, a.render = a, a.prototype.isReactComponent = a.__f = !0, a.displayName = "ForwardRef(" + (i.displayName || i.name) + ")", a;
  }
  var j = (s.Iy, s.s1.__e);
  s.s1.__e = function(i, a, g, y) {
    if (i.then) {
      for (var B, f = a; f = f.__; )
        if ((B = f.__c) && B.__c)
          return a.__e == null && (a.__e = g.__e, a.__k = g.__k), B.__c(i, a);
    }
    j(i, a, g, y);
  };
  var x = s.s1.unmount;
  function k(i, a, g) {
    return i && (i.__c && i.__c.__H && (i.__c.__H.__.forEach(function(y) {
      typeof y.__c == "function" && y.__c();
    }), i.__c.__H = null), (i = d({}, i)).__c != null && (i.__c.__P === g && (i.__c.__P = a), i.__c = null), i.__k = i.__k && i.__k.map(function(y) {
      return k(y, a, g);
    })), i;
  }
  function m(i, a, g) {
    return i && g && (i.__v = null, i.__k = i.__k && i.__k.map(function(y) {
      return m(y, a, g);
    }), i.__c && i.__c.__P === a && (i.__e && g.appendChild(i.__e), i.__c.__e = !0, i.__c.__P = g)), i;
  }
  function p() {
    this.__u = 0, this.t = null, this.__b = null;
  }
  function I(i) {
    var a = i.__.__c;
    return a && a.__a && a.__a(i);
  }
  function M(i) {
    var a, g, y;
    function B(f) {
      if (a || (a = i()).then(function(_) {
        g = _.default || _;
      }, function(_) {
        y = _;
      }), y)
        throw y;
      if (!g)
        throw a;
      return (0, s.kv)(g, f);
    }
    return B.displayName = "Lazy", B.__f = !0, B;
  }
  function E() {
    this.u = null, this.o = null;
  }
  s.s1.unmount = function(i) {
    var a = i.__c;
    a && a.__R && a.__R(), a && 32 & i.__u && (i.type = null), x && x(i);
  }, (p.prototype = new s.Yl()).__c = function(i, a) {
    var g = a.__c, y = this;
    y.t == null && (y.t = []), y.t.push(g);
    var B = I(y.__v), f = !1, _ = function() {
      f || (f = !0, g.__R = null, B ? B(D) : D());
    };
    g.__R = _;
    var D = function() {
      if (!--y.__u) {
        if (y.state.__a) {
          var R = y.state.__a;
          y.__v.__k[0] = m(R, R.__c.__P, R.__c.__O);
        }
        var Y;
        for (y.setState({ __a: y.__b = null }); Y = y.t.pop(); )
          Y.forceUpdate();
      }
    };
    y.__u++ || 32 & a.__u || y.setState({ __a: y.__b = y.__v.__k[0] }), i.then(_, _);
  }, p.prototype.componentWillUnmount = function() {
    this.t = [];
  }, p.prototype.render = function(i, a) {
    if (this.__b) {
      if (this.__v.__k) {
        var g = document.createElement("div"), y = this.__v.__k[0].__c;
        this.__v.__k[0] = k(this.__b, g, y.__O = y.__P);
      }
      this.__b = null;
    }
    var B = a.__a && (0, s.kv)(s.ae, null, i.fallback);
    return B && (B.__u &= -33), [(0, s.kv)(s.ae, null, a.__a ? null : i.children), B];
  };
  var z = function(i, a, g) {
    if (++g[1] === g[0] && i.o.delete(a), i.props.revealOrder && (i.props.revealOrder[0] !== "t" || !i.o.size))
      for (g = i.u; g; ) {
        for (; g.length > 3; )
          g.pop()();
        if (g[1] < g[0])
          break;
        i.u = g = g[2];
      }
  };
  (E.prototype = new s.Yl()).__a = function(i) {
    var a = this, g = I(a.__v), y = a.o.get(i);
    return y[0]++, function(B) {
      var f = function() {
        a.props.revealOrder ? (y.push(B), z(a, i, y)) : B();
      };
      g ? g(f) : f();
    };
  }, E.prototype.render = function(i) {
    this.u = null, this.o = /* @__PURE__ */ new Map();
    var a = (0, s.Iy)(i.children);
    i.revealOrder && i.revealOrder[0] === "b" && a.reverse();
    for (var g = a.length; g--; )
      this.o.set(a[g], this.u = [1, 0, this.u]);
    return i.children;
  }, E.prototype.componentDidUpdate = E.prototype.componentDidMount = function() {
    var i = this;
    this.o.forEach(function(a, g) {
      z(i, g, a);
    });
  };
  var G = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, J = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, Z = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, Q = /[A-Z0-9]/g, q = typeof document < "u", w = function(i) {
    return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(i);
  };
  s.Yl.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(i) {
    Object.defineProperty(s.Yl.prototype, i, { configurable: !0, get: function() {
      return this["UNSAFE_" + i];
    }, set: function(a) {
      Object.defineProperty(this, i, { configurable: !0, writable: !0, value: a });
    } });
  });
  var b = s.s1.event;
  function o() {
  }
  function v() {
    return this.cancelBubble;
  }
  function C() {
    return this.defaultPrevented;
  }
  s.s1.event = function(i) {
    return b && (i = b(i)), i.persist = o, i.isPropagationStopped = v, i.isDefaultPrevented = C, i.nativeEvent = i;
  };
  var r = { enumerable: !1, configurable: !0, get: function() {
    return this.class;
  } }, t = s.s1.vnode;
  s.s1.vnode = function(i) {
    typeof i.type == "string" && function(a) {
      var g = a.props, y = a.type, B = {};
      for (var f in g) {
        var _ = g[f];
        if (!(f === "value" && "defaultValue" in g && _ == null || q && f === "children" && y === "noscript" || f === "class" || f === "className")) {
          var D = f.toLowerCase();
          f === "defaultValue" && "value" in g && g.value == null ? f = "value" : f === "download" && _ === !0 ? _ = "" : D === "translate" && _ === "no" ? _ = !1 : D === "ondoubleclick" ? f = "ondblclick" : D !== "onchange" || y !== "input" && y !== "textarea" || w(g.type) ? D === "onfocus" ? f = "onfocusin" : D === "onblur" ? f = "onfocusout" : Z.test(f) ? f = D : y.indexOf("-") === -1 && J.test(f) ? f = f.replace(Q, "-$&").toLowerCase() : _ === null && (_ = void 0) : D = f = "oninput", D === "oninput" && B[f = D] && (f = "oninputCapture"), B[f] = _;
        }
      }
      y == "select" && B.multiple && Array.isArray(B.value) && (B.value = (0, s.Iy)(g.children).forEach(function(R) {
        R.props.selected = B.value.indexOf(R.props.value) != -1;
      })), y == "select" && B.defaultValue != null && (B.value = (0, s.Iy)(g.children).forEach(function(R) {
        R.props.selected = B.multiple ? B.defaultValue.indexOf(R.props.value) != -1 : B.defaultValue == R.props.value;
      })), g.class && !g.className ? (B.class = g.class, Object.defineProperty(B, "className", r)) : (g.className && !g.class || g.class && g.className) && (B.class = B.className = g.className), a.props = B;
    }(i), i.$$typeof = G, t && t(i);
  };
  var u = s.s1.__r;
  s.s1.__r = function(i) {
    u && u(i), i.__c;
  };
  var h = s.s1.diffed;
  s.s1.diffed = function(i) {
    h && h(i);
    var a = i.props, g = i.__e;
    g != null && i.type === "textarea" && "value" in a && a.value !== g.value && (g.value = a.value == null ? "" : a.value);
  }, n.kZ, n.Co, n._y, n.YB, n.IN, n.Km, n.w$, n.bB, n.qT, n.yK, n.oT, s.ae, n.w$, n.oT, n.IN, n.qT, n.YB, n.w$, n.yK, n.Km, n.bB, n.kZ, n.Co, n._y, s.kv, s.GY, s.Yn, s.ae, s.Yl;
}, 304: (te, T, e) => {
  e.d(T, { GY: () => H, Iy: () => h, Yl: () => w, Yn: () => Q, Yr: () => K, ae: () => q, ai: () => W, h: () => J, kv: () => J, s1: () => n, ug: () => U, ur: () => P });
  var s, n, d, P, S, L, $, A, j, x, k, m, p = {}, I = [], M = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, E = Array.isArray;
  function z(l, c) {
    for (var O in c)
      l[O] = c[O];
    return l;
  }
  function G(l) {
    var c = l.parentNode;
    c && c.removeChild(l);
  }
  function J(l, c, O) {
    var N, F, V, ee = {};
    for (V in c)
      V == "key" ? N = c[V] : V == "ref" ? F = c[V] : ee[V] = c[V];
    if (arguments.length > 2 && (ee.children = arguments.length > 3 ? s.call(arguments, 2) : O), typeof l == "function" && l.defaultProps != null)
      for (V in l.defaultProps)
        ee[V] === void 0 && (ee[V] = l.defaultProps[V]);
    return Z(l, ee, N, F, null);
  }
  function Z(l, c, O, N, F) {
    var V = { type: l, props: c, key: O, ref: N, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: F ?? ++d, __i: -1, __u: 0 };
    return F == null && n.vnode != null && n.vnode(V), V;
  }
  function Q() {
    return { current: null };
  }
  function q(l) {
    return l.children;
  }
  function w(l, c) {
    this.props = l, this.context = c;
  }
  function b(l, c) {
    if (c == null)
      return l.__ ? b(l.__, l.__i + 1) : null;
    for (var O; c < l.__k.length; c++)
      if ((O = l.__k[c]) != null && O.__e != null)
        return O.__e;
    return typeof l.type == "function" ? b(l) : null;
  }
  function o(l) {
    var c, O;
    if ((l = l.__) != null && l.__c != null) {
      for (l.__e = l.__c.base = null, c = 0; c < l.__k.length; c++)
        if ((O = l.__k[c]) != null && O.__e != null) {
          l.__e = l.__c.base = O.__e;
          break;
        }
      return o(l);
    }
  }
  function v(l) {
    (!l.__d && (l.__d = !0) && S.push(l) && !C.__r++ || L !== n.debounceRendering) && ((L = n.debounceRendering) || $)(C);
  }
  function C() {
    var l, c, O, N, F, V, ee, ne;
    for (S.sort(A); l = S.shift(); )
      l.__d && (c = S.length, N = void 0, V = (F = (O = l).__v).__e, ee = [], ne = [], O.__P && ((N = z({}, F)).__v = F.__v + 1, n.vnode && n.vnode(N), B(O.__P, N, F, O.__n, O.__P.ownerSVGElement !== void 0, 32 & F.__u ? [V] : null, ee, V ?? b(F), !!(32 & F.__u), ne), N.__v = F.__v, N.__.__k[N.__i] = N, f(ee, N, ne), N.__e != V && o(N)), S.length > c && S.sort(A));
    C.__r = 0;
  }
  function r(l, c, O, N, F, V, ee, ne, oe, pe, _e) {
    var ae, Se, le, se, fe, be = N && N.__k || I, ue = c.length;
    for (O.__d = oe, t(O, c, be), oe = O.__d, ae = 0; ae < ue; ae++)
      (le = O.__k[ae]) != null && typeof le != "boolean" && typeof le != "function" && (Se = le.__i === -1 ? p : be[le.__i] || p, le.__i = ae, B(l, le, Se, F, V, ee, ne, oe, pe, _e), se = le.__e, le.ref && Se.ref != le.ref && (Se.ref && D(Se.ref, null, le), _e.push(le.ref, le.__c || se, le)), fe == null && se != null && (fe = se), 65536 & le.__u || Se.__k === le.__k ? (oe && !oe.isConnected && (oe = b(Se)), oe = u(le, oe, l)) : typeof le.type == "function" && le.__d !== void 0 ? oe = le.__d : se && (oe = se.nextSibling), le.__d = void 0, le.__u &= -196609);
    O.__d = oe, O.__e = fe;
  }
  function t(l, c, O) {
    var N, F, V, ee, ne, oe = c.length, pe = O.length, _e = pe, ae = 0;
    for (l.__k = [], N = 0; N < oe; N++)
      ee = N + ae, (F = l.__k[N] = (F = c[N]) == null || typeof F == "boolean" || typeof F == "function" ? null : typeof F == "string" || typeof F == "number" || typeof F == "bigint" || F.constructor == String ? Z(null, F, null, null, null) : E(F) ? Z(q, { children: F }, null, null, null) : F.constructor === void 0 && F.__b > 0 ? Z(F.type, F.props, F.key, F.ref ? F.ref : null, F.__v) : F) != null ? (F.__ = l, F.__b = l.__b + 1, ne = i(F, O, ee, _e), F.__i = ne, V = null, ne !== -1 && (_e--, (V = O[ne]) && (V.__u |= 131072)), V == null || V.__v === null ? (ne == -1 && ae--, typeof F.type != "function" && (F.__u |= 65536)) : ne !== ee && (ne === ee + 1 ? ae++ : ne > ee ? _e > oe - ee ? ae += ne - ee : ae-- : ne < ee ? ne == ee - 1 && (ae = ne - ee) : ae = 0, ne !== N + ae && (F.__u |= 65536))) : (V = O[ee]) && V.key == null && V.__e && !(131072 & V.__u) && (V.__e == l.__d && (l.__d = b(V)), R(V, V, !1), O[ee] = null, _e--);
    if (_e)
      for (N = 0; N < pe; N++)
        (V = O[N]) != null && !(131072 & V.__u) && (V.__e == l.__d && (l.__d = b(V)), R(V, V));
  }
  function u(l, c, O) {
    var N, F;
    if (typeof l.type == "function") {
      for (N = l.__k, F = 0; N && F < N.length; F++)
        N[F] && (N[F].__ = l, c = u(N[F], c, O));
      return c;
    }
    l.__e != c && (O.insertBefore(l.__e, c || null), c = l.__e);
    do
      c = c && c.nextSibling;
    while (c != null && c.nodeType === 8);
    return c;
  }
  function h(l, c) {
    return c = c || [], l == null || typeof l == "boolean" || (E(l) ? l.some(function(O) {
      h(O, c);
    }) : c.push(l)), c;
  }
  function i(l, c, O, N) {
    var F = l.key, V = l.type, ee = O - 1, ne = O + 1, oe = c[O];
    if (oe === null || oe && F == oe.key && V === oe.type && !(131072 & oe.__u))
      return O;
    if (N > (oe != null && !(131072 & oe.__u) ? 1 : 0))
      for (; ee >= 0 || ne < c.length; ) {
        if (ee >= 0) {
          if ((oe = c[ee]) && !(131072 & oe.__u) && F == oe.key && V === oe.type)
            return ee;
          ee--;
        }
        if (ne < c.length) {
          if ((oe = c[ne]) && !(131072 & oe.__u) && F == oe.key && V === oe.type)
            return ne;
          ne++;
        }
      }
    return -1;
  }
  function a(l, c, O) {
    c[0] === "-" ? l.setProperty(c, O ?? "") : l[c] = O == null ? "" : typeof O != "number" || M.test(c) ? O : O + "px";
  }
  function g(l, c, O, N, F) {
    var V;
    e:
      if (c === "style")
        if (typeof O == "string")
          l.style.cssText = O;
        else {
          if (typeof N == "string" && (l.style.cssText = N = ""), N)
            for (c in N)
              O && c in O || a(l.style, c, "");
          if (O)
            for (c in O)
              N && O[c] === N[c] || a(l.style, c, O[c]);
        }
      else if (c[0] === "o" && c[1] === "n")
        V = c !== (c = c.replace(/(PointerCapture)$|Capture$/i, "$1")), c = c.toLowerCase() in l || c === "onFocusOut" || c === "onFocusIn" ? c.toLowerCase().slice(2) : c.slice(2), l.l || (l.l = {}), l.l[c + V] = O, O ? N ? O.u = N.u : (O.u = j, l.addEventListener(c, V ? k : x, V)) : l.removeEventListener(c, V ? k : x, V);
      else {
        if (F)
          c = c.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if (c != "width" && c != "height" && c != "href" && c != "list" && c != "form" && c != "tabIndex" && c != "download" && c != "rowSpan" && c != "colSpan" && c != "role" && c in l)
          try {
            l[c] = O ?? "";
            break e;
          } catch {
          }
        typeof O == "function" || (O == null || O === !1 && c[4] !== "-" ? l.removeAttribute(c) : l.setAttribute(c, O));
      }
  }
  function y(l) {
    return function(c) {
      if (this.l) {
        var O = this.l[c.type + l];
        if (c.t == null)
          c.t = j++;
        else if (c.t < O.u)
          return;
        return O(n.event ? n.event(c) : c);
      }
    };
  }
  function B(l, c, O, N, F, V, ee, ne, oe, pe) {
    var _e, ae, Se, le, se, fe, be, ue, de, we, xe, Ie, Ae, je, De, Ce = c.type;
    if (c.constructor !== void 0)
      return null;
    128 & O.__u && (oe = !!(32 & O.__u), V = [ne = c.__e = O.__e]), (_e = n.__b) && _e(c);
    e:
      if (typeof Ce == "function")
        try {
          if (ue = c.props, de = (_e = Ce.contextType) && N[_e.__c], we = _e ? de ? de.props.value : _e.__ : N, O.__c ? be = (ae = c.__c = O.__c).__ = ae.__E : ("prototype" in Ce && Ce.prototype.render ? c.__c = ae = new Ce(ue, we) : (c.__c = ae = new w(ue, we), ae.constructor = Ce, ae.render = Y), de && de.sub(ae), ae.props = ue, ae.state || (ae.state = {}), ae.context = we, ae.__n = N, Se = ae.__d = !0, ae.__h = [], ae._sb = []), ae.__s == null && (ae.__s = ae.state), Ce.getDerivedStateFromProps != null && (ae.__s == ae.state && (ae.__s = z({}, ae.__s)), z(ae.__s, Ce.getDerivedStateFromProps(ue, ae.__s))), le = ae.props, se = ae.state, ae.__v = c, Se)
            Ce.getDerivedStateFromProps == null && ae.componentWillMount != null && ae.componentWillMount(), ae.componentDidMount != null && ae.__h.push(ae.componentDidMount);
          else {
            if (Ce.getDerivedStateFromProps == null && ue !== le && ae.componentWillReceiveProps != null && ae.componentWillReceiveProps(ue, we), !ae.__e && (ae.shouldComponentUpdate != null && ae.shouldComponentUpdate(ue, ae.__s, we) === !1 || c.__v === O.__v)) {
              for (c.__v !== O.__v && (ae.props = ue, ae.state = ae.__s, ae.__d = !1), c.__e = O.__e, c.__k = O.__k, c.__k.forEach(function(Be) {
                Be && (Be.__ = c);
              }), xe = 0; xe < ae._sb.length; xe++)
                ae.__h.push(ae._sb[xe]);
              ae._sb = [], ae.__h.length && ee.push(ae);
              break e;
            }
            ae.componentWillUpdate != null && ae.componentWillUpdate(ue, ae.__s, we), ae.componentDidUpdate != null && ae.__h.push(function() {
              ae.componentDidUpdate(le, se, fe);
            });
          }
          if (ae.context = we, ae.props = ue, ae.__P = l, ae.__e = !1, Ie = n.__r, Ae = 0, "prototype" in Ce && Ce.prototype.render) {
            for (ae.state = ae.__s, ae.__d = !1, Ie && Ie(c), _e = ae.render(ae.props, ae.state, ae.context), je = 0; je < ae._sb.length; je++)
              ae.__h.push(ae._sb[je]);
            ae._sb = [];
          } else
            do
              ae.__d = !1, Ie && Ie(c), _e = ae.render(ae.props, ae.state, ae.context), ae.state = ae.__s;
            while (ae.__d && ++Ae < 25);
          ae.state = ae.__s, ae.getChildContext != null && (N = z(z({}, N), ae.getChildContext())), Se || ae.getSnapshotBeforeUpdate == null || (fe = ae.getSnapshotBeforeUpdate(le, se)), r(l, E(De = _e != null && _e.type === q && _e.key == null ? _e.props.children : _e) ? De : [De], c, O, N, F, V, ee, ne, oe, pe), ae.base = c.__e, c.__u &= -161, ae.__h.length && ee.push(ae), be && (ae.__E = ae.__ = null);
        } catch (Be) {
          c.__v = null, oe || V != null ? (c.__e = ne, c.__u |= oe ? 160 : 32, V[V.indexOf(ne)] = null) : (c.__e = O.__e, c.__k = O.__k), n.__e(Be, c, O);
        }
      else
        V == null && c.__v === O.__v ? (c.__k = O.__k, c.__e = O.__e) : c.__e = _(O.__e, c, O, N, F, V, ee, oe, pe);
    (_e = n.diffed) && _e(c);
  }
  function f(l, c, O) {
    c.__d = void 0;
    for (var N = 0; N < O.length; N++)
      D(O[N], O[++N], O[++N]);
    n.__c && n.__c(c, l), l.some(function(F) {
      try {
        l = F.__h, F.__h = [], l.some(function(V) {
          V.call(F);
        });
      } catch (V) {
        n.__e(V, F.__v);
      }
    });
  }
  function _(l, c, O, N, F, V, ee, ne, oe) {
    var pe, _e, ae, Se, le, se, fe, be = O.props, ue = c.props, de = c.type;
    if (de === "svg" && (F = !0), V != null) {
      for (pe = 0; pe < V.length; pe++)
        if ((le = V[pe]) && "setAttribute" in le == !!de && (de ? le.localName === de : le.nodeType === 3)) {
          l = le, V[pe] = null;
          break;
        }
    }
    if (l == null) {
      if (de === null)
        return document.createTextNode(ue);
      l = F ? document.createElementNS("http://www.w3.org/2000/svg", de) : document.createElement(de, ue.is && ue), V = null, ne = !1;
    }
    if (de === null)
      be === ue || ne && l.data === ue || (l.data = ue);
    else {
      if (V = V && s.call(l.childNodes), be = O.props || p, !ne && V != null)
        for (be = {}, pe = 0; pe < l.attributes.length; pe++)
          be[(le = l.attributes[pe]).name] = le.value;
      for (pe in be)
        if (le = be[pe], pe != "children") {
          if (pe == "dangerouslySetInnerHTML")
            ae = le;
          else if (pe !== "key" && !(pe in ue)) {
            if (pe == "value" && "defaultValue" in ue || pe == "checked" && "defaultChecked" in ue)
              continue;
            g(l, pe, null, le, F);
          }
        }
      for (pe in ue)
        le = ue[pe], pe == "children" ? Se = le : pe == "dangerouslySetInnerHTML" ? _e = le : pe == "value" ? se = le : pe == "checked" ? fe = le : pe === "key" || ne && typeof le != "function" || be[pe] === le || g(l, pe, le, be[pe], F);
      if (_e)
        ne || ae && (_e.__html === ae.__html || _e.__html === l.innerHTML) || (l.innerHTML = _e.__html), c.__k = [];
      else if (ae && (l.innerHTML = ""), r(l, E(Se) ? Se : [Se], c, O, N, F && de !== "foreignObject", V, ee, V ? V[0] : O.__k && b(O, 0), ne, oe), V != null)
        for (pe = V.length; pe--; )
          V[pe] != null && G(V[pe]);
      ne || (pe = "value", se !== void 0 && (se !== l[pe] || de === "progress" && !se || de === "option" && se !== be[pe]) && g(l, pe, se, be[pe], !1), pe = "checked", fe !== void 0 && fe !== l[pe] && g(l, pe, fe, be[pe], !1));
    }
    return l;
  }
  function D(l, c, O) {
    try {
      typeof l == "function" ? l(c) : l.current = c;
    } catch (N) {
      n.__e(N, O);
    }
  }
  function R(l, c, O) {
    var N, F;
    if (n.unmount && n.unmount(l), (N = l.ref) && (N.current && N.current !== l.__e || D(N, null, c)), (N = l.__c) != null) {
      if (N.componentWillUnmount)
        try {
          N.componentWillUnmount();
        } catch (V) {
          n.__e(V, c);
        }
      N.base = N.__P = null;
    }
    if (N = l.__k)
      for (F = 0; F < N.length; F++)
        N[F] && R(N[F], c, O || typeof l.type != "function");
    O || l.__e == null || G(l.__e), l.__c = l.__ = l.__e = l.__d = void 0;
  }
  function Y(l, c, O) {
    return this.constructor(l, O);
  }
  function W(l, c, O) {
    var N, F, V, ee;
    n.__ && n.__(l, c), F = (N = typeof O == "function") ? null : O && O.__k || c.__k, V = [], ee = [], B(c, l = (!N && O || c).__k = J(q, null, [l]), F || p, p, c.ownerSVGElement !== void 0, !N && O ? [O] : F ? null : c.firstChild ? s.call(c.childNodes) : null, V, !N && O ? O : F ? F.__e : c.firstChild, N, ee), f(V, l, ee);
  }
  function U(l, c) {
    W(l, c, U);
  }
  function K(l, c, O) {
    var N, F, V, ee, ne = z({}, l.props);
    for (V in l.type && l.type.defaultProps && (ee = l.type.defaultProps), c)
      V == "key" ? N = c[V] : V == "ref" ? F = c[V] : ne[V] = c[V] === void 0 && ee !== void 0 ? ee[V] : c[V];
    return arguments.length > 2 && (ne.children = arguments.length > 3 ? s.call(arguments, 2) : O), Z(l.type, ne, N || l.key, F || l.ref, null);
  }
  function H(l, c) {
    var O = { __c: c = "__cC" + m++, __: l, Consumer: function(N, F) {
      return N.children(F);
    }, Provider: function(N) {
      var F, V;
      return this.getChildContext || (F = [], (V = {})[c] = this, this.getChildContext = function() {
        return V;
      }, this.shouldComponentUpdate = function(ee) {
        this.props.value !== ee.value && F.some(function(ne) {
          ne.__e = !0, v(ne);
        });
      }, this.sub = function(ee) {
        F.push(ee);
        var ne = ee.componentWillUnmount;
        ee.componentWillUnmount = function() {
          F.splice(F.indexOf(ee), 1), ne && ne.call(ee);
        };
      }), N.children;
    } };
    return O.Provider.__ = O.Consumer.contextType = O;
  }
  s = I.slice, n = { __e: function(l, c, O, N) {
    for (var F, V, ee; c = c.__; )
      if ((F = c.__c) && !F.__)
        try {
          if ((V = F.constructor) && V.getDerivedStateFromError != null && (F.setState(V.getDerivedStateFromError(l)), ee = F.__d), F.componentDidCatch != null && (F.componentDidCatch(l, N || {}), ee = F.__d), ee)
            return F.__E = F;
        } catch (ne) {
          l = ne;
        }
    throw l;
  } }, d = 0, P = function(l) {
    return l != null && l.constructor == null;
  }, w.prototype.setState = function(l, c) {
    var O;
    O = this.__s != null && this.__s !== this.state ? this.__s : this.__s = z({}, this.state), typeof l == "function" && (l = l(z({}, O), this.props)), l && z(O, l), l != null && this.__v && (c && this._sb.push(c), v(this));
  }, w.prototype.forceUpdate = function(l) {
    this.__v && (this.__e = !0, l && this.__h.push(l), v(this));
  }, w.prototype.render = q, S = [], $ = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, A = function(l, c) {
    return l.__v.__b - c.__v.__b;
  }, C.__r = 0, j = 0, x = y(!1), k = y(!0), m = 0;
}, 8596: (te, T, e) => {
  e.d(T, { Co: () => o, IN: () => C, Km: () => q, YB: () => J, _y: () => v, bB: () => w, kZ: () => b, oT: () => z, qT: () => G, w$: () => Z, yK: () => Q });
  var s, n, d, P, S = e(304), L = 0, $ = [], A = [], j = S.s1, x = j.__b, k = j.__r, m = j.diffed, p = j.__c, I = j.unmount, M = j.__;
  function E(y, B) {
    j.__h && j.__h(n, y, L || B), L = 0;
    var f = n.__H || (n.__H = { __: [], __h: [] });
    return y >= f.__.length && f.__.push({ __V: A }), f.__[y];
  }
  function z(y) {
    return L = 1, G(g, y);
  }
  function G(y, B, f) {
    var _ = E(s++, 2);
    if (_.t = y, !_.__c && (_.__ = [f ? f(B) : g(void 0, B), function(W) {
      var U = _.__N ? _.__N[0] : _.__[0], K = _.t(U, W);
      U !== K && (_.__N = [K, _.__[1]], _.__c.setState({}));
    }], _.__c = n, !n.u)) {
      var D = function(W, U, K) {
        if (!_.__c.__H)
          return !0;
        var H = _.__c.__H.__.filter(function(c) {
          return !!c.__c;
        });
        if (H.every(function(c) {
          return !c.__N;
        }))
          return !R || R.call(this, W, U, K);
        var l = !1;
        return H.forEach(function(c) {
          if (c.__N) {
            var O = c.__[0];
            c.__ = c.__N, c.__N = void 0, O !== c.__[0] && (l = !0);
          }
        }), !(!l && _.__c.props === W) && (!R || R.call(this, W, U, K));
      };
      n.u = !0;
      var R = n.shouldComponentUpdate, Y = n.componentWillUpdate;
      n.componentWillUpdate = function(W, U, K) {
        if (this.__e) {
          var H = R;
          R = void 0, D(W, U, K), R = H;
        }
        Y && Y.call(this, W, U, K);
      }, n.shouldComponentUpdate = D;
    }
    return _.__N || _.__;
  }
  function J(y, B) {
    var f = E(s++, 3);
    !j.__s && a(f.__H, B) && (f.__ = y, f.i = B, n.__H.__h.push(f));
  }
  function Z(y, B) {
    var f = E(s++, 4);
    !j.__s && a(f.__H, B) && (f.__ = y, f.i = B, n.__h.push(f));
  }
  function Q(y) {
    return L = 5, w(function() {
      return { current: y };
    }, []);
  }
  function q(y, B, f) {
    L = 6, Z(function() {
      return typeof y == "function" ? (y(B()), function() {
        return y(null);
      }) : y ? (y.current = B(), function() {
        return y.current = null;
      }) : void 0;
    }, f == null ? f : f.concat(y));
  }
  function w(y, B) {
    var f = E(s++, 7);
    return a(f.__H, B) ? (f.__V = y(), f.i = B, f.__h = y, f.__V) : f.__;
  }
  function b(y, B) {
    return L = 8, w(function() {
      return y;
    }, B);
  }
  function o(y) {
    var B = n.context[y.__c], f = E(s++, 9);
    return f.c = y, B ? (f.__ == null && (f.__ = !0, B.sub(n)), B.props.value) : y.__;
  }
  function v(y, B) {
    j.useDebugValue && j.useDebugValue(B ? B(y) : y);
  }
  function C() {
    var y = E(s++, 11);
    if (!y.__) {
      for (var B = n.__v; B !== null && !B.__m && B.__ !== null; )
        B = B.__;
      var f = B.__m || (B.__m = [0, 0]);
      y.__ = "P" + f[0] + "-" + f[1]++;
    }
    return y.__;
  }
  function r() {
    for (var y; y = $.shift(); )
      if (y.__P && y.__H)
        try {
          y.__H.__h.forEach(h), y.__H.__h.forEach(i), y.__H.__h = [];
        } catch (B) {
          y.__H.__h = [], j.__e(B, y.__v);
        }
  }
  j.__b = function(y) {
    n = null, x && x(y);
  }, j.__ = function(y, B) {
    y && B.__k && B.__k.__m && (y.__m = B.__k.__m), M && M(y, B);
  }, j.__r = function(y) {
    k && k(y), s = 0;
    var B = (n = y.__c).__H;
    B && (d === n ? (B.__h = [], n.__h = [], B.__.forEach(function(f) {
      f.__N && (f.__ = f.__N), f.__V = A, f.__N = f.i = void 0;
    })) : (B.__h.forEach(h), B.__h.forEach(i), B.__h = [], s = 0)), d = n;
  }, j.diffed = function(y) {
    m && m(y);
    var B = y.__c;
    B && B.__H && (B.__H.__h.length && ($.push(B) !== 1 && P === j.requestAnimationFrame || ((P = j.requestAnimationFrame) || u)(r)), B.__H.__.forEach(function(f) {
      f.i && (f.__H = f.i), f.__V !== A && (f.__ = f.__V), f.i = void 0, f.__V = A;
    })), d = n = null;
  }, j.__c = function(y, B) {
    B.some(function(f) {
      try {
        f.__h.forEach(h), f.__h = f.__h.filter(function(_) {
          return !_.__ || i(_);
        });
      } catch (_) {
        B.some(function(D) {
          D.__h && (D.__h = []);
        }), B = [], j.__e(_, f.__v);
      }
    }), p && p(y, B);
  }, j.unmount = function(y) {
    I && I(y);
    var B, f = y.__c;
    f && f.__H && (f.__H.__.forEach(function(_) {
      try {
        h(_);
      } catch (D) {
        B = D;
      }
    }), f.__H = void 0, B && j.__e(B, f.__v));
  };
  var t = typeof requestAnimationFrame == "function";
  function u(y) {
    var B, f = function() {
      clearTimeout(_), t && cancelAnimationFrame(B), setTimeout(y);
    }, _ = setTimeout(f, 100);
    t && (B = requestAnimationFrame(f));
  }
  function h(y) {
    var B = n, f = y.__c;
    typeof f == "function" && (y.__c = void 0, f()), n = B;
  }
  function i(y) {
    var B = n;
    y.__c = y.__(), n = B;
  }
  function a(y, B) {
    return !y || y.length !== B.length || B.some(function(f, _) {
      return f !== y[_];
    });
  }
  function g(y, B) {
    return typeof B == "function" ? B(y) : B;
  }
}, 8412: (te, T, e) => {
  e.d(T, { ae: () => s.ae, im: () => d, YH: () => d }), e(2796);
  var s = e(304), n = 0;
  function d(P, S, L, $, A, j) {
    S || (S = {});
    var x, k, m = S;
    if ("ref" in m)
      for (k in m = {}, S)
        k == "ref" ? x = S[k] : m[k] = S[k];
    var p = { type: P, props: m, key: L, ref: x, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: --n, __i: -1, __u: 0, __source: A, __self: j };
    if (typeof P == "function" && (x = P.defaultProps))
      for (k in x)
        m[k] === void 0 && (m[k] = x[k]);
    return s.s1.vnode && s.s1.vnode(p), p;
  }
} }, kt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  id: Rt,
  ids: Ut,
  modules: Kt
}, Symbol.toStringTag, { value: "Module" })), Wt = 8668, Vt = [8668], Zt = { 5912: (te, T, e) => {
  e.d(T, { Ij: () => n, aq: () => P, oR: () => s, ow: () => d });
  var s = function(S) {
    return S.Boolean = "BOOLEAN", S.Date = "DATE", S.Datetime = "DATETIME", S.File = "FILE", S.Gallery = "GALLERY", S.Hidden = "HIDDEN", S.Image = "IMAGE", S.MediaImage = "MEDIA_IMAGE", S.Multiline = "MULTILINE", S.Multiselect = "MULTISELECT", S.Price = "PRICE", S.Select = "SELECT", S.Text = "TEXT", S.Textarea = "TEXTAREA", S.Undefined = "UNDEFINED", S.Weight = "WEIGHT", S;
  }({}), n = function(S) {
    return S.InStock = "IN_STOCK", S.OutOfStock = "OUT_OF_STOCK", S;
  }({}), d = function(S) {
    return S.DisplayExcludingTax = "DISPLAY_EXCLUDING_TAX", S.DisplayIncludingTax = "DISPLAY_INCLUDING_TAX", S.DisplayTypeBoth = "DISPLAY_TYPE_BOTH", S;
  }({}), P = function(S) {
    return S.DateRangeMax = "DATE_RANGE_MAX", S.DateRangeMin = "DATE_RANGE_MIN", S.FileExtensions = "FILE_EXTENSIONS", S.InputValidation = "INPUT_VALIDATION", S.MaxFileSize = "MAX_FILE_SIZE", S.MaxImageHeight = "MAX_IMAGE_HEIGHT", S.MaxImageWidth = "MAX_IMAGE_WIDTH", S.MaxTextLength = "MAX_TEXT_LENGTH", S.MinTextLength = "MIN_TEXT_LENGTH", S;
  }({});
}, 3584: (te, T, e) => {
  e.d(T, { CA: () => L, Ef: () => n, Uh: () => S, __: () => P, eE: () => $, o8: () => d });
  var s = e(8616), { setEndpoint: n, setFetchGraphQlHeader: d, removeFetchGraphQlHeader: P, setFetchGraphQlHeaders: S, fetchGraphQl: L, getConfig: $ } = new s.FetchGraphQL().getMethods();
}, 1092: (te, T, e) => {
  e.d(T, { i: () => n });
  var s = e(8122), n = (d) => {
    throw d instanceof DOMException && d.name === "AbortError" || s.events.emit("error", { source: "checkout", type: "network", error: d }), d;
  };
}, 2148: (te, T, e) => {
  e.d(T, { q: () => s });
  var s = (n) => n == null;
} }, St = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  id: Wt,
  ids: Vt,
  modules: Zt
}, Symbol.toStringTag, { value: "Module" })), Qt = 5068, Jt = [5068], Xt = { 3760: (te, T, e) => {
  e.d(T, { ET: () => S, GU: () => L, Ij: () => P, Ui: () => s, YX: () => n, i4: () => d, o8: () => $, u0: () => A });
  class s extends Error {
    constructor(x) {
      super(x.map((k) => k.message).join(" ")), this.name = "FetchError";
    }
  }
  class n extends Error {
    constructor(x) {
      super(x), this.name = "InvalidArgument";
    }
  }
  class d extends Error {
    constructor(x) {
      super(x), this.name = "UnexpectedError";
    }
  }
  class P extends n {
    constructor() {
      super("Cart ID is required");
    }
  }
  class S extends n {
    constructor() {
      super("Email is required");
    }
  }
  class L extends n {
    constructor() {
      super("Payment method code is required");
    }
  }
  class $ extends n {
    constructor() {
      super("Billing address is required");
    }
  }
  class A extends n {
    constructor() {
      super("Country Code is required");
    }
  }
}, 3112: (te, T, e) => {
  e.d(T, { Qz: () => n, YL: () => d, e2: () => s });
  var s = `
  fragment CheckoutData on Cart {
    is_virtual
    email
    billing_address {
      city
      country {
        code
        label
      }
      firstname
      lastname
      company
      postcode
      vat_id
      region {
        region_id
        code
        label
      }
      street
      telephone
      custom_attributes {
        ... on AttributeValue {
          code
          value
        }
      }
    }
    shipping_addresses {
      firstname
      lastname
      company
      street
      city
      postcode
      vat_id
      region {
        region_id
        code
        label
      }
      country {
        code
        label
      }
      telephone
      custom_attributes {
        ... on AttributeValue {
          code
          value
        }
      }
      available_shipping_methods {
        amount {
          currency
          value
        }
        available
        carrier_code
        carrier_title
        error_message
        method_code
        method_title
        price_excl_tax {
          value
          currency
        }
        price_incl_tax {
          value
          currency
        }
      }
      selected_shipping_method {
        amount {
          value
          currency
        }
        carrier_code
        carrier_title
        method_code
        method_title
      }
    }
    available_payment_methods {
      code
      title
    }
    selected_payment_method {
      code
      title
    }
    applied_coupons {
      code
    }
    prices {
      grand_total {
        value
        currency
      }
      subtotal_excluding_tax {
        value
        currency
      }
      subtotal_including_tax {
        value
        currency
      }
      applied_taxes {
        label
        amount {
          currency
          value
        }
      }
    }
  }
`, n = `
  fragment CartSummaryItems on Cart {
    total_quantity
    itemsV2(sort: { field: CREATED_AT, order: DESC }) {
      total_count
      items {
        __typename
        uid
        product {
          __typename
          uid
          name
          sku
          url_key
          thumbnail {
            url
            label
          }
          small_image {
            url
          }
          price_range {
            maximum_price {
              regular_price {
                currency
                value
              }
            }
          }
          stock_status
          only_x_left_in_stock
        }
        prices {
          fixed_product_taxes {
            amount {
              currency
              value
            }
            label
          }
          price {
            currency
            value
          }
          price_including_tax {
            currency
            value
          }
          row_total {
            value
            currency
          }
          row_total_including_tax {
            value
            currency
          }
          total_item_discount {
            value
            currency
          }
        }
        quantity
        errors {
          code
          message
        }
        ... on SimpleCartItem {
          customizable_options {
            label
            values {
              label
              value
            }
          }
        }
        ... on VirtualCartItem {
          customizable_options {
            label
            values {
              label
              value
            }
          }
        }
        ... on ConfigurableCartItem {
          customizable_options {
            label
            values {
              label
              value
            }
          }
          configurable_options {
            id
            configurable_product_option_uid
            option_label
            configurable_product_option_value_uid
            value_label
            value_id
          }
          configured_variant {
            thumbnail {
              label
              url
            }
          }
        }
        ... on GiftCardCartItem {
          sender_name
          sender_email
          recipient_name
          recipient_email
          message
          customizable_options {
            label
            values {
              label
              value
            }
          }
        }
        ... on DownloadableCartItem {
          links {
            title
          }
          customizable_options {
            label
            values {
              label
              value
            }
          }
        }
      }
    }
  }
`, d = `
  query getCheckoutData($cartId: String!) {
    cart(cart_id: $cartId) {
      id
      ...CheckoutData
      ...CartSummaryItems
    }
  }
  `.concat(s, `
  `).concat(n, `
`);
}, 9120: (te, T, e) => {
  e.d(T, { m: () => M });
  var s = e(3584), n = e(3760), d = e(1092), P = e(5668), S = e(3644), L = e(7004), $ = [], A = ["sender_email", "recipient_email"];
  function j(z, G) {
    var J = Object.keys(z);
    if (Object.getOwnPropertySymbols) {
      var Z = Object.getOwnPropertySymbols(z);
      G && (Z = Z.filter(function(Q) {
        return Object.getOwnPropertyDescriptor(z, Q).enumerable;
      })), J.push.apply(J, Z);
    }
    return J;
  }
  function x(z) {
    for (var G = 1; G < arguments.length; G++) {
      var J = arguments[G] != null ? arguments[G] : {};
      G % 2 ? j(Object(J), !0).forEach(function(Z) {
        k(z, Z, J[Z]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(z, Object.getOwnPropertyDescriptors(J)) : j(Object(J)).forEach(function(Z) {
        Object.defineProperty(z, Z, Object.getOwnPropertyDescriptor(J, Z));
      });
    }
    return z;
  }
  function k(z, G, J) {
    var Z;
    return (G = typeof (Z = function(Q, q) {
      if (typeof Q != "object" || !Q)
        return Q;
      var w = Q[Symbol.toPrimitive];
      if (w !== void 0) {
        var b = w.call(Q, q || "default");
        if (typeof b != "object")
          return b;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (q === "string" ? String : Number)(Q);
    }(G, "string")) == "symbol" ? Z : String(Z)) in z ? Object.defineProperty(z, G, { value: J, enumerable: !0, configurable: !0, writable: !0 }) : z[G] = J, z;
  }
  function m(z, G, J, Z, Q, q, w) {
    try {
      var b = z[q](w), o = b.value;
    } catch (v) {
      return void J(v);
    }
    b.done ? G(o) : Promise.resolve(o).then(Z, Q);
  }
  var p = { cart: P.cartSignal, regions: S.regionsSignal, estimateShippingMethods: L.k }, I = { cart: null, regions: null, estimateShippingMethods: null };
  function M(z) {
    return E.apply(this, arguments);
  }
  function E() {
    var z;
    return z = function* (G) {
      var J, { query: Z, options: Q, path: q, signalType: w, type: b, transformer: o } = G, v = p[w], C = Symbol();
      I[w] = C, v.value = x(x({}, v.value), {}, { pending: !0 });
      try {
        var { data: r, errors: t } = yield b === "mutation" ? (J = () => (0, s.CA)(Z, Q).catch(d.i), new Promise((i, a) => {
          $.push(J);
          var g = () => {
            $[0] === J ? J().then(i).catch(a).finally(() => $.shift()) : setTimeout(g, 100);
          };
          g();
        })) : (0, s.CA)(Z, x({ method: "GET", cache: "no-cache" }, Q)).catch(d.i);
        if (t) {
          var u = function(i) {
            return i.filter((a) => !a.path || !A.some((g) => {
              var y;
              return ((y = a.path) === null || y === void 0 ? void 0 : y.at(-1)) === g;
            }));
          }(t);
          if (u.length > 0)
            throw new n.Ui(u);
        }
        var h = function(i, a) {
          return a.split(".").reduce((g, y) => g && g[y] !== void 0 ? g[y] : void 0, i);
        }(r, q);
        if (h === void 0)
          throw new Error("No data found at path: ".concat(q));
        return o && (h = o(h)), v.value = x(x({}, v.value), {}, { data: h }), setTimeout(() => {
          v.value = x(x({}, v.value), {}, { pending: I[w] !== C && v.value.pending });
        }, 0), h;
      } catch (i) {
        if (i.name === "AbortError")
          return;
        throw v.value = x(x({}, v.value), {}, { pending: !1 }), i;
      }
    }, E = function() {
      var G = this, J = arguments;
      return new Promise(function(Z, Q) {
        var q = z.apply(G, J);
        function w(o) {
          m(q, Z, Q, w, b, "next", o);
        }
        function b(o) {
          m(q, Z, Q, w, b, "throw", o);
        }
        w(void 0);
      });
    }, E.apply(this, arguments);
  }
}, 5172: (te, T, e) => {
  e.d(T, { s: () => s, w: () => n });
  var s = function(d) {
    return d.InStock = "IN_STOCK", d.OutOfStock = "OUT_OF_STOCK", d;
  }({}), n = function(d) {
    return d.Simple = "SimpleProduct", d.Configurable = "ConfigurableProduct", d.Downloadable = "DownloadableProduct", d.GiftCard = "GiftCardProduct", d.Virtual = "VirtualProduct", d.Bundle = "BundleProduct", d;
  }({});
}, 6824: (te, T, e) => {
  e.d(T, { o: () => q });
  var s = e(5912), n = e(5172);
  function d(w) {
    switch (w) {
      case "SimpleCartItem":
        return n.w.Simple;
      case "ConfigurableCartItem":
        return n.w.Configurable;
      case "DownloadableCartItem":
        return n.w.Downloadable;
      case "GiftCardCartItem":
        return n.w.GiftCard;
      case "VirtualCartItem":
        return n.w.Virtual;
      case "BundleCartItem":
        return n.w.Bundle;
      default:
        throw new Error("Unknown item kind: ".concat(w));
    }
  }
  function P(w) {
    if (w.__typename === "ConfigurableCartItem") {
      var b = {};
      for (var o of w.configurable_options)
        b[o.option_label] = o.value_label;
      return b;
    }
  }
  function S(w) {
    if ("customizable_options" in w) {
      var b = {};
      for (var o of w.customizable_options)
        b[o.label] = o.values.map((v) => v.label || v.value).join(", ");
      return b;
    }
  }
  function L(w) {
    var b, o, v = w.__typename === "ConfigurableCartItem" ? (b = w.configured_variant) === null || b === void 0 ? void 0 : b.thumbnail : (o = w.product) === null || o === void 0 ? void 0 : o.thumbnail;
    if (v && v.url) {
      var C = { src: v.url }, r = String(v.label || w.product.name);
      return r !== "" && (C.alt = r), C;
    }
  }
  function $(w) {
    return w.filter(Boolean).map((b) => function(o) {
      var v, C;
      return { kind: d(o.__typename), name: o.product.name, quantity: o.quantity, sku: o.product.sku, uid: o.uid, url: (v = o.product) === null || v === void 0 ? void 0 : v.url_key, image: L(o), price: { value: o.prices.price.value, currency: o.prices.price.currency }, priceInclTax: { value: o.prices.price_including_tax.value, currency: o.prices.price_including_tax.currency }, total: { value: o.prices.row_total.value, currency: o.prices.row_total.currency }, totalInclTax: { value: o.prices.row_total_including_tax.value, currency: o.prices.row_total_including_tax.currency }, discount: { value: o.prices.total_item_discount.value, currency: o.prices.total_item_discount.currency }, regularPrice: { value: o.product.price_range.maximum_price.regular_price.value, currency: o.product.price_range.maximum_price.regular_price.currency }, discounted: o.product.price_range.maximum_price.regular_price.value * o.quantity !== o.prices.row_total.value, stockStatus: o.product.stock_status === s.Ij.OutOfStock ? n.s.OutOfStock : n.s.InStock, configurableOptions: P(o), customizableOptions: S(o), links: o.__typename === "DownloadableCartItem" ? (C = o.links) === null || C === void 0 ? void 0 : C.map((r) => r == null ? void 0 : r.title) : void 0, onlyXLeftInStock: o.product.only_x_left_in_stock, senderName: o.__typename === "GiftCardCartItem" ? o.sender_name : void 0, senderEmail: o.__typename === "GiftCardCartItem" ? o.sender_email : void 0, recipientEmail: o.__typename === "GiftCardCartItem" ? o.recipient_email : void 0, recipientName: o.__typename === "GiftCardCartItem" ? o.recipient_name : void 0, message: o.__typename === "GiftCardCartItem" ? o.message : void 0 };
    }(b));
  }
  var A = (w) => {
    if (w)
      return { code: w.code, title: w.title };
  }, j = (w) => {
    if (w)
      return w.filter((b) => !!b).map((b) => {
        var { code: o, title: v } = b;
        return { code: o, title: v };
      });
  }, x = e(1104), k = ["available_shipping_methods", "selected_shipping_method"];
  function m(w, b) {
    var o = Object.keys(w);
    if (Object.getOwnPropertySymbols) {
      var v = Object.getOwnPropertySymbols(w);
      b && (v = v.filter(function(C) {
        return Object.getOwnPropertyDescriptor(w, C).enumerable;
      })), o.push.apply(o, v);
    }
    return o;
  }
  function p(w) {
    for (var b = 1; b < arguments.length; b++) {
      var o = arguments[b] != null ? arguments[b] : {};
      b % 2 ? m(Object(o), !0).forEach(function(v) {
        I(w, v, o[v]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(w, Object.getOwnPropertyDescriptors(o)) : m(Object(o)).forEach(function(v) {
        Object.defineProperty(w, v, Object.getOwnPropertyDescriptor(o, v));
      });
    }
    return w;
  }
  function I(w, b, o) {
    var v;
    return (b = typeof (v = function(C, r) {
      if (typeof C != "object" || !C)
        return C;
      var t = C[Symbol.toPrimitive];
      if (t !== void 0) {
        var u = t.call(C, r || "default");
        if (typeof u != "object")
          return u;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (r === "string" ? String : Number)(C);
    }(b, "string")) == "symbol" ? v : String(v)) in w ? Object.defineProperty(w, b, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : w[b] = o, w;
  }
  function M(w, b) {
    if (w == null)
      return {};
    var o, v, C = function(t, u) {
      if (t == null)
        return {};
      var h, i, a = {}, g = Object.keys(t);
      for (i = 0; i < g.length; i++)
        h = g[i], u.indexOf(h) >= 0 || (a[h] = t[h]);
      return a;
    }(w, b);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(w);
      for (v = 0; v < r.length; v++)
        o = r[v], b.indexOf(o) >= 0 || Object.prototype.propertyIsEnumerable.call(w, o) && (C[o] = w[o]);
    }
    return C;
  }
  var E = (w) => {
    if ((b = w) && b.code && b.label) {
      var b, { code: o, label: v, region_id: C } = w;
      return C ? { code: o, name: v, id: C } : { code: o, name: v };
    }
  }, z = (w) => {
    var { code: b, label: o } = w;
    return { value: b, label: o };
  }, G = (w) => !!w && "code" in w && "value" in w, J = (w) => w.filter(G).map((b) => {
    var { code: o, value: v } = b;
    return { code: o, value: v };
  }), Z = (w) => {
    var b = w.street.filter(Boolean);
    return { firstName: w.firstname, lastName: w.lastname, company: w.company || void 0, city: w.city, street: b, postCode: w.postcode || void 0, vatId: w.vat_id || void 0, telephone: w.telephone || void 0, region: E(w.region), country: z(w.country), customAttributes: J(w.custom_attributes) };
  }, Q = (w) => {
    if (w)
      return Z(w);
  }, q = (w) => {
    var b, o, v, C;
    return { coupons: (C = w.applied_coupons, C ? C.filter(Boolean).map((r) => {
      var { code: t } = r;
      return { code: t };
    }) : []), availablePaymentMethods: j(w.available_payment_methods), billingAddress: Q(w.billing_address), email: (b = w.email) !== null && b !== void 0 ? b : void 0, id: w.id, virtual: w.is_virtual, items: (v = w.itemsV2, v ? $(v.items) : []), prices: w.prices, selectedPaymentMethod: A(w.selected_payment_method), shippingAddresses: (o = w.shipping_addresses, o.filter((r) => !!r).map((r) => {
      var t = r, { available_shipping_methods: u, selected_shipping_method: h } = t, i = M(t, k);
      return p(p({}, Z(i)), {}, { availableShippingMethods: (0, x.kl)(u), selectedShippingMethod: (0, x.Ur)(h) });
    })), totalQty: w.total_quantity };
  };
}, 1104: (te, T, e) => {
  e.d(T, { Ur: () => S, kl: () => L });
  var s = e(2148), n = ($, A) => $.amount.value - A.amount.value, d = ($) => !!$ && !(!$.method_code || !$.method_title) && !((0, s.q)($.amount.value) || !$.amount.currency), P = ($) => ({ amount: { value: $.amount.value, currency: $.amount.currency }, title: $.method_title, code: $.method_code, carrier: { code: $.carrier_code, title: $.carrier_title }, value: "".concat($.carrier_code, " - ").concat($.method_code) }), S = ($) => {
    if (d($))
      return P($);
  }, L = ($) => {
    if ($)
      return $.filter(d).map((A) => P(A)).sort(n);
  };
}, 5668: (te, T, e) => {
  e.d(T, { cartSignal: () => s });
  var s = (0, e(1520).OC)({ pending: !1, data: void 0 });
}, 7004: (te, T, e) => {
  e.d(T, { k: () => s });
  var s = (0, e(1520).OC)({ pending: !1, data: void 0 });
}, 3644: (te, T, e) => {
  e.d(T, { regionsSignal: () => s });
  var s = (0, e(1520).OC)({ pending: !1, data: void 0 });
} }, Dt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  id: Qt,
  ids: Jt,
  modules: Xt
}, Symbol.toStringTag, { value: "Module" })), en = 1568, tn = [1568], nn = { 1988: (te, T, e) => {
  e.d(T, { Y: () => A });
  var s = e(3760), n = e(9120), d = e(1104);
  function P(j, x) {
    var k = Object.keys(j);
    if (Object.getOwnPropertySymbols) {
      var m = Object.getOwnPropertySymbols(j);
      x && (m = m.filter(function(p) {
        return Object.getOwnPropertyDescriptor(j, p).enumerable;
      })), k.push.apply(k, m);
    }
    return k;
  }
  function S(j) {
    for (var x = 1; x < arguments.length; x++) {
      var k = arguments[x] != null ? arguments[x] : {};
      x % 2 ? P(Object(k), !0).forEach(function(m) {
        L(j, m, k[m]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(j, Object.getOwnPropertyDescriptors(k)) : P(Object(k)).forEach(function(m) {
        Object.defineProperty(j, m, Object.getOwnPropertyDescriptor(k, m));
      });
    }
    return j;
  }
  function L(j, x, k) {
    var m;
    return (x = typeof (m = function(p, I) {
      if (typeof p != "object" || !p)
        return p;
      var M = p[Symbol.toPrimitive];
      if (M !== void 0) {
        var E = M.call(p, I || "default");
        if (typeof E != "object")
          return E;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (I === "string" ? String : Number)(p);
    }(x, "string")) == "symbol" ? m : String(m)) in j ? Object.defineProperty(j, x, { value: k, enumerable: !0, configurable: !0, writable: !0 }) : j[x] = k, j;
  }
  function $(j, x, k, m, p, I, M) {
    try {
      var E = j[I](M), z = E.value;
    } catch (G) {
      return void k(G);
    }
    E.done ? x(z) : Promise.resolve(z).then(m, p);
  }
  var A = function() {
    var j, x = (j = function* (k) {
      var { cartId: m, criteria: p } = k || {}, { country_code: I, region_id: M, region_name: E, zip: z } = p || {};
      if (!m)
        throw new s.Ij();
      if (!I)
        throw new s.u0();
      var G = typeof M == "string" ? parseInt(M, 10) : M, J = M || E ? S(S({}, G && { region_id: G }), E && { region_code: E }) : void 0, Z = S(S({ country_code: I }, z && { postcode: z }), J && { region: J });
      return yield (0, n.m)({ type: "mutation", query: `
mutation estimateShippingMethods(
	$cartId: String!
  $address: EstimateAddressInput!
) {
	estimateShippingMethods(
		input: {
			cart_id: $cartId
			address: $address
		}
	) {
		carrier_title
		carrier_code
		method_title
		method_code
		available
		amount {
			currency
			value
		}
		price_excl_tax {
			currency
			value
		}
		price_incl_tax {
			currency
			value
		}
		error_message
	}
}
`, options: { variables: { cartId: m, address: Z } }, path: "estimateShippingMethods", signalType: "estimateShippingMethods", transformer: d.kl });
    }, function() {
      var k = this, m = arguments;
      return new Promise(function(p, I) {
        var M = j.apply(k, m);
        function E(G) {
          $(M, p, I, E, z, "next", G);
        }
        function z(G) {
          $(M, p, I, E, z, "throw", G);
        }
        E(void 0);
      });
    });
    return function(k) {
      return x.apply(this, arguments);
    };
  }();
}, 1212: (te, T, e) => {
  e.d(T, { m: () => P });
  var s = e(3584), n = e(1092);
  function d(S, L, $, A, j, x, k) {
    try {
      var m = S[x](k), p = m.value;
    } catch (I) {
      return void $(I);
    }
    m.done ? L(p) : Promise.resolve(p).then(A, j);
  }
  var P = function() {
    var S, L = (S = function* () {
      var $, { data: A, errors: j } = yield (0, s.CA)(`
  query fetchAddressFormFields {
    attributesForm(formCode: "customer_register_address") {
      items {
        frontend_input
        code
        label
        default_value
        is_required
        options {
          label
          value
          is_default
        }
        ... on CustomerAttributeMetadata {
          multiline_count
          sort_order
          validate_rules {
            name
            value
          }
        }
      }
      errors {
        message
        type
      }
    }
  }
`, { method: "GET", cache: "no-cache" }).catch(n.i);
      if (j)
        throw Error(j.map((x) => x.message).join(" "));
      return (A == null || ($ = A.attributesForm) === null || $ === void 0 ? void 0 : $.items) || [];
    }, function() {
      var $ = this, A = arguments;
      return new Promise(function(j, x) {
        var k = S.apply($, A);
        function m(I) {
          d(k, j, x, m, p, "next", I);
        }
        function p(I) {
          d(k, j, x, m, p, "throw", I);
        }
        m(void 0);
      });
    });
    return function() {
      return L.apply(this, arguments);
    };
  }();
}, 152: (te, T, e) => {
  e.d(T, { K: () => S });
  var s = e(3584), n = e(1092), d = e(764);
  function P(L, $, A, j, x, k, m) {
    try {
      var p = L[k](m), I = p.value;
    } catch (M) {
      return void A(M);
    }
    p.done ? $(I) : Promise.resolve(I).then(j, x);
  }
  var S = function() {
    var L, $ = (L = function* () {
      return (0, s.CA)(`
query getCountries {
    countries {
      two_letter_abbreviation
      full_name_locale
    }
}`, { method: "GET", cache: "no-cache" }).then((A) => {
        var { data: j, errors: x } = A;
        return x && (0, d.Y)(x), ((k) => {
          if (k)
            return k.filter((m) => !!m).filter((m) => {
              var { two_letter_abbreviation: p, full_name_locale: I } = m;
              return !!p && !!I;
            }).map((m) => {
              var { two_letter_abbreviation: p, full_name_locale: I } = m;
              return { value: p, label: I };
            });
        })(j.countries);
      }).catch(n.i);
    }, function() {
      var A = this, j = arguments;
      return new Promise(function(x, k) {
        var m = L.apply(A, j);
        function p(M) {
          P(m, x, k, p, I, "next", M);
        }
        function I(M) {
          P(m, x, k, p, I, "throw", M);
        }
        p(void 0);
      });
    });
    return function() {
      return $.apply(this, arguments);
    };
  }();
}, 2740: (te, T, e) => {
  e.d(T, { i: () => L });
  var s = e(3644), n = e(9120), d = ($) => !!$ && !!$.id && !!$.code && !!$.name, P = ($) => {
    if ($)
      return $.filter(d).map((A) => {
        var { id: j, code: x, name: k } = A;
        return { id: j, code: x, name: k };
      });
  };
  function S($, A, j, x, k, m, p) {
    try {
      var I = $[m](p), M = I.value;
    } catch (E) {
      return void j(E);
    }
    I.done ? A(M) : Promise.resolve(M).then(x, k);
  }
  var L = function() {
    var $, A = ($ = function* (j, x) {
      return s.regionsSignal.value.addressType = x, (0, n.m)({ type: "query", query: `
query getRegions($countryCode: String!) {
    country(id: $countryCode) {
        id
        available_regions {
            id
            code
            name
        }
    }
}`, options: { variables: { countryCode: j } }, path: "country.available_regions", signalType: "regions", transformer: P });
    }, function() {
      var j = this, x = arguments;
      return new Promise(function(k, m) {
        var p = $.apply(j, x);
        function I(E) {
          S(p, k, m, I, M, "next", E);
        }
        function M(E) {
          S(p, k, m, I, M, "throw", E);
        }
        I(void 0);
      });
    });
    return function(j, x) {
      return A.apply(this, arguments);
    };
  }();
}, 1036: (te, T, e) => {
  e.d(T, { a: () => k });
  var s = e(3584), n = e(5912), d = e(2256), P = e(4723), S = e(2148);
  function L(m) {
    return m === 1 ? P.m.ExcludingTax : m === 2 ? P.m.IncludingTax : m === 3 ? P.m.IncludingAndExcludingTax : P.m.ExcludingTax;
  }
  function $(m) {
    switch (m) {
      case n.ow.DisplayExcludingTax:
        return P.m.ExcludingTax;
      case n.ow.DisplayIncludingTax:
        return P.m.IncludingTax;
      case n.ow.DisplayTypeBoth:
        return P.m.IncludingAndExcludingTax;
    }
  }
  var A = e(764), j = e(1092);
  function x(m, p, I, M, E, z, G) {
    try {
      var J = m[z](G), Z = J.value;
    } catch (Q) {
      return void I(Q);
    }
    J.done ? p(Z) : Promise.resolve(Z).then(M, E);
  }
  var k = function() {
    var m, p = (m = function* () {
      return (0, s.CA)(`
  query getStoreConfig {
    storeConfig {
      cart_summary_display_quantity
      countries_with_required_region
      default_country
      display_state_if_optional
      is_guest_checkout_enabled
      is_one_page_checkout_enabled
      locale
      max_items_in_order_summary
      optional_zip_countries
      shopping_cart_display_full_summary
      shopping_cart_display_grand_total
      shopping_cart_display_price
      shopping_cart_display_shipping
      shopping_cart_display_subtotal
      shopping_cart_display_tax_gift_wrapping
      shopping_cart_display_zero_tax
      store_code
    }
  }
`, { method: "GET", cache: "no-cache" }).then((I) => {
        var { data: M, errors: E } = I;
        return (0, A.Y)(E), function(z) {
          if (!z)
            return d.IJ;
          var G, { default_country: J, countries_with_required_region: Z, display_state_if_optional: Q, optional_zip_countries: q, is_guest_checkout_enabled: w, is_one_page_checkout_enabled: b, shopping_cart_display_price: o, shopping_cart_display_shipping: v, shopping_cart_display_subtotal: C, shopping_cart_display_tax_gift_wrapping: r, shopping_cart_display_grand_total: t, shopping_cart_display_full_summary: u, shopping_cart_display_zero_tax: h, max_items_in_order_summary: i, cart_summary_display_quantity: a } = z;
          return { defaultCountry: J || d.IJ.defaultCountry, countriesWithRequiredRegion: (Z == null ? void 0 : Z.split(",")) || d.IJ.countriesWithRequiredRegion, displayStateIfOptional: Q || d.IJ.displayStateIfOptional, countriesWithOptionalZipCode: (q == null ? void 0 : q.split(",")) || d.IJ.countriesWithOptionalZipCode, isGuestCheckoutEnabled: w || d.IJ.isGuestCheckoutEnabled, isOnePageCheckoutEnabled: b || d.IJ.isOnePageCheckoutEnabled, taxCartDisplay: { shoppingCartDisplayPrice: o ? L(o) : d.IJ.taxCartDisplay.shoppingCartDisplayPrice, shoppingCartDisplayShipping: v ? L(v) : d.IJ.taxCartDisplay.shoppingCartDisplayShipping, shoppingCartDisplaySubtotal: C ? L(C) : d.IJ.taxCartDisplay.shoppingCartDisplaySubtotal, shoppingCartDisplayGiftWrapping: r ? $(r) : d.IJ.taxCartDisplay.shoppingCartDisplayGiftWrapping, shoppingCartDisplayGrandTotal: t || d.IJ.taxCartDisplay.shoppingCartDisplayGrandTotal, shoppingCartDisplayFullSummary: u || d.IJ.taxCartDisplay.shoppingCartDisplayFullSummary, shoppingCartDisplayZeroTax: h || d.IJ.taxCartDisplay.shoppingCartDisplayZeroTax }, cartSummaryMaxItems: i || d.IJ.cartSummaryMaxItems, cartSummaryTotalDisplay: (0, S.q)(a) ? d.IJ.cartSummaryTotalDisplay : (G = a, G === 0 ? P.E.Rows : P.E.Quantity) };
        }(M == null ? void 0 : M.storeConfig);
      }).catch(j.i);
    }, function() {
      var I = this, M = arguments;
      return new Promise(function(E, z) {
        var G = m.apply(I, M);
        function J(Q) {
          x(G, E, z, J, Z, "next", Q);
        }
        function Z(Q) {
          x(G, E, z, J, Z, "throw", Q);
        }
        J(void 0);
      });
    });
    return function() {
      return p.apply(this, arguments);
    };
  }();
}, 2532: (te, T, e) => {
  e.d(T, { W: () => $ });
  var s = e(3760), n = e(3112), d = `
  mutation setBillingAddress(
    $cartId: String!
    $input: BillingAddressInput!
  ) {
    setBillingAddressOnCart(
      input: { cart_id: $cartId, billing_address: $input }
    ) {
      cart {
        id
        ...CheckoutData
        ...CartSummaryItems
      }
    }
  }
  `.concat(n.e2, `
  `).concat(n.Qz, `
`), P = e(9120), S = e(6824);
  function L(A, j, x, k, m, p, I) {
    try {
      var M = A[p](I), E = M.value;
    } catch (z) {
      return void x(z);
    }
    M.done ? j(E) : Promise.resolve(E).then(k, m);
  }
  var $ = function() {
    var A, j = (A = function* (x) {
      var { signal: k, cartId: m, input: p } = x, { address: I, same_as_shipping: M } = p;
      if (!m)
        throw new s.Ij();
      if (!M && !I)
        throw new s.o8();
      return yield (0, P.m)({ type: "mutation", query: d, options: { signal: k, variables: { cartId: m, input: p } }, path: "setBillingAddressOnCart.cart", signalType: "cart", transformer: S.o });
    }, function() {
      var x = this, k = arguments;
      return new Promise(function(m, p) {
        var I = A.apply(x, k);
        function M(z) {
          L(I, m, p, M, E, "next", z);
        }
        function E(z) {
          L(I, m, p, M, E, "throw", z);
        }
        M(void 0);
      });
    });
    return function(x) {
      return j.apply(this, arguments);
    };
  }();
}, 9296: (te, T, e) => {
  e.d(T, { um: () => x, ek: () => k, Eh: () => m });
  var s = e(5328), n = e(3980), d = /^\d+$/, P = e(3112), S = `
  mutation setShippingAddress($cartId: String!, $address: CartAddressInput!) {
    setShippingAddressesOnCart(
      input: { cart_id: $cartId, shipping_addresses: [{ address: $address }] }
    ) {
      cart {
        id
        ...CheckoutData
        ...CartSummaryItems
      }
    }
  }
  `.concat(P.e2, `
  `).concat(P.Qz, `
`), L = e(9120), $ = e(6824), A = e(8628);
  function j(p, I, M, E, z, G, J) {
    try {
      var Z = p[G](J), Q = Z.value;
    } catch (q) {
      return void M(q);
    }
    Z.done ? I(Q) : Promise.resolve(Q).then(E, z);
  }
  var x = ["city", "company", "country_code", "firstname", "lastname", "postcode", "region", "region_id", "save_in_address_book", "street", "telephone", "vat_id"], k = (p) => {
    var I = { city: p[A.q.City], company: p[A.q.Company], country_code: p[A.q.Country], firstname: p[A.q.FirstName], lastname: p[A.q.LastName], postcode: p[A.q.PostCode], save_in_address_book: !p[A.q.SaveInAddressBook], street: (0, n.C)(A.q.Street, p), telephone: p[A.q.Telephone], vat_id: p[A.q.Vat] }, M = p[A.q.Region], E = ((G) => {
      if (d.test(G))
        return parseInt(G, 10);
    })(M);
    E ? I.region_id = E : I.region = M;
    var z = Object.keys(p).filter((G) => !G.startsWith("street")).filter((G) => !x.includes(G)).filter((G) => G !== "country_id").map((G) => {
      var [J, Z] = G.split(s.Mp);
      return Z ? { attribute_code: J, value: (0, n.C)(J, p).join(s.EF) } : { attribute_code: J, value: p[G] };
    }).filter((G, J, Z) => J === Z.findIndex((Q) => Q.attribute_code === G.attribute_code));
    return z.length > 0 && (I.custom_attributes = z), I;
  }, m = function() {
    var p, I = (p = function* (M) {
      var { signal: E, cartId: z, address: G } = M;
      return yield (0, L.m)({ type: "mutation", query: S, options: { signal: E, variables: { cartId: z, address: G } }, path: "setShippingAddressesOnCart.cart", signalType: "cart", transformer: $.o });
    }, function() {
      var M = this, E = arguments;
      return new Promise(function(z, G) {
        var J = p.apply(M, E);
        function Z(q) {
          j(J, z, G, Z, Q, "next", q);
        }
        function Q(q) {
          j(J, z, G, Z, Q, "throw", q);
        }
        Z(void 0);
      });
    });
    return function(M) {
      return I.apply(this, arguments);
    };
  }();
}, 5328: (te, T, e) => {
  e.d(T, { EF: () => n, Mp: () => s, sr: () => d });
  var s = "-", n = `
`, d = 2e3;
}, 2256: (te, T, e) => {
  e.d(T, { EV: () => A, IJ: () => L, o3: () => j });
  var s = e(1036), n = e(4723), d = e(304), P = e(8596), S = e(8412), L = { defaultCountry: "US", countriesWithRequiredRegion: [], displayStateIfOptional: !1, countriesWithOptionalZipCode: [], isGuestCheckoutEnabled: !1, isOnePageCheckoutEnabled: !1, taxCartDisplay: { shoppingCartDisplayPrice: n.m.ExcludingTax, shoppingCartDisplayShipping: n.m.ExcludingTax, shoppingCartDisplaySubtotal: n.m.ExcludingTax, shoppingCartDisplayGiftWrapping: n.m.ExcludingTax, shoppingCartDisplayGrandTotal: !1, shoppingCartDisplayFullSummary: !1, shoppingCartDisplayZeroTax: !1 }, cartSummaryMaxItems: 10, cartSummaryTotalDisplay: n.E.Quantity }, $ = (0, d.GY)(void 0), A = (x) => {
    var { children: k } = x, [m, p] = (0, P.oT)();
    return (0, P.YB)(() => {
      (0, s.a)().then((I) => {
        p(I);
      }).catch(() => {
        console.error("Failed to fetch store config"), p(L);
      });
    }, []), (0, S.im)($.Provider, { value: { config: m }, children: k });
  };
  function j() {
    var x = (0, P.Co)($);
    if (x !== void 0)
      return x;
    throw new Error("useStore must be used within a StoreProvider");
  }
}, 8628: (te, T, e) => {
  e.d(T, { q: () => n, y: () => s });
  var s = function(d) {
    return d.SHIPPING = "shipping_addresses", d.BILLING = "billing_address", d;
  }(s || {}), n = function(d) {
    return d.City = "city", d.Company = "company", d.Country = "country_id", d.FirstName = "firstname", d.LastName = "lastname", d.PostCode = "postcode", d.Region = "region", d.RegionId = "region_id", d.SaveInAddressBook = "save_in_address_book", d.Street = "street", d.Telephone = "telephone", d.Vat = "vat_id", d;
  }(n || {});
}, 4723: (te, T, e) => {
  e.d(T, { E: () => n, m: () => s });
  var s = function(d) {
    return d[d.ExcludingTax = 1] = "ExcludingTax", d[d.IncludingTax = 2] = "IncludingTax", d[d.IncludingAndExcludingTax = 3] = "IncludingAndExcludingTax", d;
  }({}), n = function(d) {
    return d[d.Rows = 0] = "Rows", d[d.Quantity = 1] = "Quantity", d;
  }({});
}, 764: (te, T, e) => {
  e.d(T, { Y: () => s });
  var s = (n) => {
    if (n)
      throw Error(n.map((d) => d.message).join(" "));
  };
}, 3980: (te, T, e) => {
  e.d(T, { C: () => n });
  var s = e(5328), n = (d, P) => Object.keys(P).filter((S) => S.startsWith(d)).sort((S, L) => parseInt(S.replace("".concat(d).concat(s.Mp), ""), 10) - parseInt(L.replace("".concat(d).concat(s.Mp), ""), 10)).map((S) => P[S]);
} }, Tt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  id: en,
  ids: tn,
  modules: nn
}, Symbol.toStringTag, { value: "Module" })), rn = 8966, on = [8966], an = { 7788: (te, T, e) => {
  e.d(T, { Q: () => L });
  var s = e(3760), n = e(3112), d = e(9120), P = e(6824);
  function S($, A, j, x, k, m, p) {
    try {
      var I = $[m](p), M = I.value;
    } catch (E) {
      return void j(E);
    }
    I.done ? A(M) : Promise.resolve(M).then(x, k);
  }
  var L = function() {
    var $, A = ($ = function* (j) {
      if (!j)
        throw new s.Ij();
      return yield (0, d.m)({ type: "query", query: n.YL, options: { method: "POST", cache: "no-cache", variables: { cartId: j } }, path: "cart", signalType: "cart", transformer: P.o });
    }, function() {
      var j = this, x = arguments;
      return new Promise(function(k, m) {
        var p = $.apply(j, x);
        function I(E) {
          S(p, k, m, I, M, "next", E);
        }
        function M(E) {
          S(p, k, m, I, M, "throw", E);
        }
        I(void 0);
      });
    });
    return function(j) {
      return A.apply(this, arguments);
    };
  }();
}, 5616: (te, T, e) => {
  e.d(T, { q: () => k });
  var s = e(5912), n = e(3584), d = e(3760), P = e(1092);
  function S(m, p, I, M, E, z, G) {
    try {
      var J = m[z](G), Z = J.value;
    } catch (Q) {
      return void I(Q);
    }
    J.done ? p(Z) : Promise.resolve(Z).then(M, E);
  }
  var L = (m) => m.stock_status === s.Ij.InStock, $ = (m) => L(m.product), A = (m) => {
    var { configurable_options: p } = m, { variants: I } = m.product;
    if (!I || !p)
      return !1;
    var M = p.map((G) => G == null ? void 0 : G.configurable_product_option_value_uid), E = I.find((G) => !(!G || !G.attributes) && G.attributes.every((J) => J && M.includes(J.uid)));
    if (!E)
      return !1;
    var { product: z } = E;
    return !!z && L(z);
  }, j = (m) => {
    var { product: p } = m;
    if (!L(p))
      return !1;
    var { bundle_options: I } = m, { items: M } = p;
    return (M == null ? void 0 : M.length) === (I == null ? void 0 : I.length);
  }, x = (m) => ((p) => {
    switch (p) {
      case "ConfigurableCartItem":
        return A;
      case "BundleCartItem":
        return j;
      default:
        return $;
    }
  })(m.__typename)(m) === !1, k = function() {
    var m, p = (m = function* (I) {
      var M;
      if (!I)
        throw new d.Ij();
      var { data: E, errors: z } = yield (0, n.CA)(`
  query getStockStatus($cartId: String!) {
    cart(cart_id: $cartId) {
      id
      items {
        __typename
        uid
        product {
          uid
          name
          sku
          stock_status
          only_x_left_in_stock
          ... on ConfigurableProduct {
            variants {
              attributes {
                uid
              }
              product {
                uid
                stock_status
              }
            }
          }
          ... on BundleProduct {
            items {
              uid
              options {
                uid
                product {
                  uid
                }
              }
            }
          }
        }
        quantity
        ... on ConfigurableCartItem {
          configurable_options {
            configurable_product_option_uid
            option_label
            configurable_product_option_value_uid
            value_label
          }
        }
        ... on BundleCartItem {
          bundle_options {
            uid
            values {
              uid
            }
          }
        }
      }
    }
  }
`, { method: "GET", cache: "no-cache", variables: { cartId: I } }).catch(P.i);
      if (z)
        throw new d.Ui(z);
      var G = E == null || (M = E.cart) === null || M === void 0 ? void 0 : M.items;
      return G && G.length && G.filter((J) => !!J && x(J)).length > 0 ? s.Ij.OutOfStock : s.Ij.InStock;
    }, function() {
      var I = this, M = arguments;
      return new Promise(function(E, z) {
        var G = m.apply(I, M);
        function J(Q) {
          S(G, E, z, J, Z, "next", Q);
        }
        function Z(Q) {
          S(G, E, z, J, Z, "throw", Q);
        }
        J(void 0);
      });
    });
    return function(I) {
      return p.apply(this, arguments);
    };
  }();
}, 9496: (te, T, e) => {
  e.d(T, { s: () => L });
  var s = e(3584), n = e(3760), d = e(764), P = e(1092);
  function S($, A, j, x, k, m, p) {
    try {
      var I = $[m](p), M = I.value;
    } catch (E) {
      return void j(E);
    }
    I.done ? A(M) : Promise.resolve(M).then(x, k);
  }
  var L = function() {
    var $, A = ($ = function* (j) {
      if (!j)
        throw new n.ET();
      var { data: x, errors: k } = yield (0, s.CA)(`
  query isEmailAvailable($email: String!) {
    isEmailAvailable(email: $email) {
      is_email_available
    }
  }
`, { method: "GET", cache: "no-cache", variables: { email: j } }).catch(P.i);
      return k && (0, d.Y)(k), ((m) => !!(m != null && m.is_email_available))(x.isEmailAvailable);
    }, function() {
      var j = this, x = arguments;
      return new Promise(function(k, m) {
        var p = $.apply(j, x);
        function I(E) {
          S(p, k, m, I, M, "next", E);
        }
        function M(E) {
          S(p, k, m, I, M, "throw", E);
        }
        I(void 0);
      });
    });
    return function(j) {
      return A.apply(this, arguments);
    };
  }();
}, 3688: (te, T, e) => {
  e.d(T, { A: () => p });
  var s = e(3760), n = e(3584), d = e(1092), P = e(5668), S = e(5172);
  function L(I, M) {
    var E = Object.keys(I);
    if (Object.getOwnPropertySymbols) {
      var z = Object.getOwnPropertySymbols(I);
      M && (z = z.filter(function(G) {
        return Object.getOwnPropertyDescriptor(I, G).enumerable;
      })), E.push.apply(E, z);
    }
    return E;
  }
  function $(I) {
    for (var M = 1; M < arguments.length; M++) {
      var E = arguments[M] != null ? arguments[M] : {};
      M % 2 ? L(Object(E), !0).forEach(function(z) {
        A(I, z, E[z]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(I, Object.getOwnPropertyDescriptors(E)) : L(Object(E)).forEach(function(z) {
        Object.defineProperty(I, z, Object.getOwnPropertyDescriptor(E, z));
      });
    }
    return I;
  }
  function A(I, M, E) {
    var z;
    return (M = typeof (z = function(G, J) {
      if (typeof G != "object" || !G)
        return G;
      var Z = G[Symbol.toPrimitive];
      if (Z !== void 0) {
        var Q = Z.call(G, J || "default");
        if (typeof Q != "object")
          return Q;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (J === "string" ? String : Number)(G);
    }(M, "string")) == "symbol" ? z : String(z)) in I ? Object.defineProperty(I, M, { value: E, enumerable: !0, configurable: !0, writable: !0 }) : I[M] = E, I;
  }
  function j(I) {
    var M, E, z, G, J, Z, Q, q, { id: w, items: b, prices: o, totalQty: v } = I, C = !(b == null || !b.length), r = { id: w, prices: { subtotalExcludingTax: { value: (M = o == null || (E = o.subtotal_excluding_tax) === null || E === void 0 ? void 0 : E.value) !== null && M !== void 0 ? M : 0, currency: (z = o == null || (G = o.subtotal_excluding_tax) === null || G === void 0 ? void 0 : G.currency) !== null && z !== void 0 ? z : "" }, subtotalIncludingTax: { value: (J = o == null || (Z = o.subtotal_including_tax) === null || Z === void 0 ? void 0 : Z.value) !== null && J !== void 0 ? J : 0, currency: (Q = o == null || (q = o.subtotal_including_tax) === null || q === void 0 ? void 0 : q.currency) !== null && Q !== void 0 ? Q : "" } }, totalQuantity: v, possibleOnepageCheckout: !0 };
    return C && (r.items = function(t) {
      return t.map((u) => {
        var h, i, a, { uid: g, name: y, sku: B, price: f, quantity: _ } = u, D = { canApplyMsrp: !0, formattedPrice: "", id: g, prices: { price: { value: (h = f.value) !== null && h !== void 0 ? h : 0, currency: (i = f.currency) !== null && i !== void 0 ? i : "" } }, product: { productId: 0, name: y, sku: B, productType: u.kind, canonicalUrl: u.url || "", mainImageUrl: (u == null || (a = u.image) === null || a === void 0 ? void 0 : a.src) || "" }, quantity: _ };
        return u.kind === S.w.Configurable && (D.configurableOptions = function(R) {
          var Y = [];
          for (var W in R)
            R[W] !== null && Y.push({ optionLabel: W, valueLabel: R[W] });
          return Y;
        }(u.configurableOptions)), D;
      }, []);
    }(b)), r;
  }
  function x(I) {
    (function(M) {
      var { data: E } = P.cartSignal.value, z = j(E), G = function(J, Z) {
        var Q, q, w, b, o, v, C, r, t, u, h, i, a, g, y, B, f, _, { coupons: D, email: R, prices: Y, selectedPaymentMethod: W, shippingAddresses: U } = Z, K = !(U == null || !U.length), H = { appliedCouponCode: (Q = (q = D[0]) === null || q === void 0 ? void 0 : q.code) !== null && Q !== void 0 ? Q : "", email: R ?? "", grandTotal: (w = Y == null || (b = Y.grand_total) === null || b === void 0 ? void 0 : b.value) !== null && w !== void 0 ? w : 0, orderId: J, orderType: "checkout", otherTax: 0, paymentMethodCode: (o = W == null ? void 0 : W.code) !== null && o !== void 0 ? o : "", paymentMethodName: (v = W == null ? void 0 : W.title) !== null && v !== void 0 ? v : "", payments: [{ paymentMethodCode: (C = W == null ? void 0 : W.code) !== null && C !== void 0 ? C : "", paymentMethodName: (r = W == null ? void 0 : W.title) !== null && r !== void 0 ? r : "", total: (t = Y == null || (u = Y.grand_total) === null || u === void 0 ? void 0 : u.value) !== null && t !== void 0 ? t : 0 }], salesTax: (B = (h = Y == null ? void 0 : Y.applied_taxes) !== null && h !== void 0 ? h : [], B.reduce((O, N) => O + N.amount.value, 0)), subtotalExcludingTax: (i = Y == null || (a = Y.subtotal_excluding_tax) === null || a === void 0 ? void 0 : a.value) !== null && i !== void 0 ? i : 0, subtotalIncludingTax: (g = Y == null || (y = Y.subtotal_including_tax) === null || y === void 0 ? void 0 : y.value) !== null && g !== void 0 ? g : 0 };
        if (K) {
          var l = U[0], c = l == null ? void 0 : l.selectedShippingMethod;
          c && (H.shipping = { shippingMethod: "".concat((f = c).carrier.code, "_").concat(f.code), shippingAmount: (_ = f.amount.value) !== null && _ !== void 0 ? _ : 0 });
        }
        return H;
      }(M, E);
      window.adobeDataLayer = window.adobeDataLayer || [], window.adobeDataLayer.push({ shoppingCartContext: null }, { orderContext: null }), window.adobeDataLayer.push({ shoppingCartContext: z }, { orderContext: G });
    })(I), window.adobeDataLayer = window.adobeDataLayer || [], window.adobeDataLayer.push((M) => {
      var E = M.getState() || {};
      M.push({ event: "place-order", eventInfo: $({}, E) });
    });
  }
  var k = e(8122);
  function m(I, M, E, z, G, J, Z) {
    try {
      var Q = I[J](Z), q = Q.value;
    } catch (w) {
      return void E(w);
    }
    Q.done ? M(q) : Promise.resolve(q).then(z, G);
  }
  var p = function() {
    var I, M = (I = function* (E) {
      if (!E)
        throw new s.Ij();
      var { data: z, errors: G } = yield (0, n.CA)(`
  mutation placeOrder($cartId: String!) {
    placeOrder(input: { cart_id: $cartId }) {
      orderV2 {
        number
        token
      }
    }
  }
`, { variables: { cartId: E } }).catch(d.i);
      G && function(Z) {
        throw Z.every((Q) => {
          var q;
          return (q = Q.extensions) === null || q === void 0 ? void 0 : q.category;
        }) ? new s.Ui(Z) : new s.i4(Z[0].message);
      }(G);
      var J = z.placeOrder.orderV2;
      x(J.number), k.events.emit("checkout/order", J), k.events.emit("cart/reset", void 0);
    }, function() {
      var E = this, z = arguments;
      return new Promise(function(G, J) {
        var Z = I.apply(E, z);
        function Q(w) {
          m(Z, G, J, Q, q, "next", w);
        }
        function q(w) {
          m(Z, G, J, Q, q, "throw", w);
        }
        Q(void 0);
      });
    });
    return function(E) {
      return M.apply(this, arguments);
    };
  }();
}, 4628: (te, T, e) => {
  e.d(T, { S: () => $ });
  var s = e(3760), n = e(3112), d = `
  mutation setGuestEmail($cartId: String!, $email: String!) {
    setGuestEmailOnCart(input: { cart_id: $cartId, email: $email }) {
      cart {
        id
        ...CheckoutData
        ...CartSummaryItems
      }
    }
  }
  `.concat(n.e2, `
  `).concat(n.Qz, `
`), P = e(9120), S = e(6824);
  function L(A, j, x, k, m, p, I) {
    try {
      var M = A[p](I), E = M.value;
    } catch (z) {
      return void x(z);
    }
    M.done ? j(E) : Promise.resolve(E).then(k, m);
  }
  var $ = function() {
    var A, j = (A = function* (x) {
      var { cartId: k, email: m } = x;
      if (!k)
        throw new s.Ij();
      return yield (0, P.m)({ type: "mutation", query: d, options: { variables: { cartId: k, email: m } }, path: "setGuestEmailOnCart.cart", signalType: "cart", transformer: S.o });
    }, function() {
      var x = this, k = arguments;
      return new Promise(function(m, p) {
        var I = A.apply(x, k);
        function M(z) {
          L(I, m, p, M, E, "next", z);
        }
        function E(z) {
          L(I, m, p, M, E, "throw", z);
        }
        M(void 0);
      });
    });
    return function(x) {
      return j.apply(this, arguments);
    };
  }();
}, 1384: (te, T, e) => {
  e.d(T, { M: () => $ });
  var s = e(3760), n = e(3112), d = `
  mutation setShippingMethods(
    $cartId: String!
    $shippingMethods: [ShippingMethodInput]!
  ) {
    setShippingMethodsOnCart(
      input: { cart_id: $cartId, shipping_methods: $shippingMethods }
    ) {
      cart {
        id
        ...CheckoutData
        ...CartSummaryItems
      }
    }
  }
  `.concat(n.e2, `
  `).concat(n.Qz, `
`), P = e(9120), S = e(6824);
  function L(A, j, x, k, m, p, I) {
    try {
      var M = A[p](I), E = M.value;
    } catch (z) {
      return void x(z);
    }
    M.done ? j(E) : Promise.resolve(E).then(k, m);
  }
  var $ = function() {
    var A, j = (A = function* (x) {
      var { cartId: k, shippingMethods: m } = x;
      if (!k)
        throw new s.Ij();
      return (0, P.m)({ type: "mutation", query: d, options: { variables: { cartId: k, shippingMethods: m } }, path: "setShippingMethodsOnCart.cart", signalType: "cart", transformer: S.o });
    }, function() {
      var x = this, k = arguments;
      return new Promise(function(m, p) {
        var I = A.apply(x, k);
        function M(z) {
          L(I, m, p, M, E, "next", z);
        }
        function E(z) {
          L(I, m, p, M, E, "throw", z);
        }
        M(void 0);
      });
    });
    return function(x) {
      return j.apply(this, arguments);
    };
  }();
} }, At = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  id: rn,
  ids: on,
  modules: an
}, Symbol.toStringTag, { value: "Module" })), ln = 5e3, sn = [5e3], cn = { 1520: (te, T, e) => {
  e.d(T, { OC: () => I });
  var s = e(304), n = e(8596);
  function d() {
    throw new Error("Cycle detected");
  }
  var P = Symbol.for("preact-signals");
  function S() {
    if (j > 1)
      j--;
    else {
      for (var r, t = !1; A !== void 0; ) {
        var u = A;
        for (A = void 0, x++; u !== void 0; ) {
          var h = u.o;
          if (u.o = void 0, u.f &= -3, !(8 & u.f) && M(u))
            try {
              u.c();
            } catch (i) {
              t || (r = i, t = !0);
            }
          u = h;
        }
      }
      if (x = 0, j--, t)
        throw r;
    }
  }
  var L = void 0, $, A = void 0, j = 0, x = 0, k = 0;
  function m(r) {
    if (L !== void 0) {
      var t = r.n;
      if (t === void 0 || t.t !== L)
        return t = { i: 0, S: r, p: L.s, n: void 0, t: L, e: void 0, x: void 0, r: t }, L.s !== void 0 && (L.s.n = t), L.s = t, r.n = t, 32 & L.f && r.S(t), t;
      if (t.i === -1)
        return t.i = 0, t.n !== void 0 && (t.n.p = t.p, t.p !== void 0 && (t.p.n = t.n), t.p = L.s, t.n = void 0, L.s.n = t, L.s = t), t;
    }
  }
  function p(r) {
    this.v = r, this.i = 0, this.n = void 0, this.t = void 0;
  }
  function I(r) {
    return new p(r);
  }
  function M(r) {
    for (var t = r.s; t !== void 0; t = t.n)
      if (t.S.i !== t.i || !t.S.h() || t.S.i !== t.i)
        return !0;
    return !1;
  }
  function E(r) {
    for (var t = r.s; t !== void 0; t = t.n) {
      var u = t.S.n;
      if (u !== void 0 && (t.r = u), t.S.n = t, t.i = -1, t.n === void 0) {
        r.s = t;
        break;
      }
    }
  }
  function z(r) {
    for (var t = r.s, u = void 0; t !== void 0; ) {
      var h = t.p;
      t.i === -1 ? (t.S.U(t), h !== void 0 && (h.n = t.n), t.n !== void 0 && (t.n.p = h)) : u = t, t.S.n = t.r, t.r !== void 0 && (t.r = void 0), t = h;
    }
    r.s = u;
  }
  function G(r) {
    p.call(this, void 0), this.x = r, this.s = void 0, this.g = k - 1, this.f = 4;
  }
  function J(r) {
    var t = r.u;
    if (r.u = void 0, typeof t == "function") {
      j++;
      var u = L;
      L = void 0;
      try {
        t();
      } catch (h) {
        throw r.f &= -2, r.f |= 8, Z(r), h;
      } finally {
        L = u, S();
      }
    }
  }
  function Z(r) {
    for (var t = r.s; t !== void 0; t = t.n)
      t.S.U(t);
    r.x = void 0, r.s = void 0, J(r);
  }
  function Q(r) {
    if (L !== this)
      throw new Error("Out-of-order effect");
    z(this), L = r, this.f &= -2, 8 & this.f && Z(this), S();
  }
  function q(r) {
    this.x = r, this.u = void 0, this.s = void 0, this.o = void 0, this.f = 32;
  }
  function w(r) {
    var t = new q(r);
    try {
      t.c();
    } catch (u) {
      throw t.d(), u;
    }
    return t.d.bind(t);
  }
  function b(r, t) {
    s.s1[r] = t.bind(null, s.s1[r] || function() {
    });
  }
  function o(r) {
    $ && $(), $ = r && r.S();
  }
  function v(r) {
    var t = this, u = r.data, h = function(a) {
      return (0, n.bB)(function() {
        return I(a);
      }, []);
    }(u);
    h.value = u;
    var i = (0, n.bB)(function() {
      for (var a = t.__v; a = a.__; )
        if (a.__c) {
          a.__c.__$f |= 4;
          break;
        }
      return t.__$u.c = function() {
        var g;
        (0, s.ur)(i.peek()) || ((g = t.base) == null ? void 0 : g.nodeType) !== 3 ? (t.__$f |= 1, t.setState({})) : t.base.data = i.peek();
      }, function(g) {
        return new G(g);
      }(function() {
        var g = h.value.value;
        return g === 0 ? 0 : g === !0 ? "" : g || "";
      });
    }, []);
    return i.value;
  }
  function C(r, t, u, h) {
    var i = t in r && r.ownerSVGElement === void 0, a = I(u);
    return { o: function(g, y) {
      a.value = g, h = y;
    }, d: w(function() {
      var g = a.value.value;
      h[t] !== g && (h[t] = g, i ? r[t] = g : g ? r.setAttribute(t, g) : r.removeAttribute(t));
    }) };
  }
  p.prototype.brand = P, p.prototype.h = function() {
    return !0;
  }, p.prototype.S = function(r) {
    this.t !== r && r.e === void 0 && (r.x = this.t, this.t !== void 0 && (this.t.e = r), this.t = r);
  }, p.prototype.U = function(r) {
    if (this.t !== void 0) {
      var t = r.e, u = r.x;
      t !== void 0 && (t.x = u, r.e = void 0), u !== void 0 && (u.e = t, r.x = void 0), r === this.t && (this.t = u);
    }
  }, p.prototype.subscribe = function(r) {
    var t = this;
    return w(function() {
      var u = t.value, h = 32 & this.f;
      this.f &= -33;
      try {
        r(u);
      } finally {
        this.f |= h;
      }
    });
  }, p.prototype.valueOf = function() {
    return this.value;
  }, p.prototype.toString = function() {
    return this.value + "";
  }, p.prototype.toJSON = function() {
    return this.value;
  }, p.prototype.peek = function() {
    return this.v;
  }, Object.defineProperty(p.prototype, "value", { get: function() {
    var r = m(this);
    return r !== void 0 && (r.i = this.i), this.v;
  }, set: function(r) {
    if (L instanceof G && function() {
      throw new Error("Computed cannot have side-effects");
    }(), r !== this.v) {
      x > 100 && d(), this.v = r, this.i++, k++, j++;
      try {
        for (var t = this.t; t !== void 0; t = t.x)
          t.t.N();
      } finally {
        S();
      }
    }
  } }), (G.prototype = new p()).h = function() {
    if (this.f &= -3, 1 & this.f)
      return !1;
    if ((36 & this.f) == 32 || (this.f &= -5, this.g === k))
      return !0;
    if (this.g = k, this.f |= 1, this.i > 0 && !M(this))
      return this.f &= -2, !0;
    var r = L;
    try {
      E(this), L = this;
      var t = this.x();
      (16 & this.f || this.v !== t || this.i === 0) && (this.v = t, this.f &= -17, this.i++);
    } catch (u) {
      this.v = u, this.f |= 16, this.i++;
    }
    return L = r, z(this), this.f &= -2, !0;
  }, G.prototype.S = function(r) {
    if (this.t === void 0) {
      this.f |= 36;
      for (var t = this.s; t !== void 0; t = t.n)
        t.S.S(t);
    }
    p.prototype.S.call(this, r);
  }, G.prototype.U = function(r) {
    if (this.t !== void 0 && (p.prototype.U.call(this, r), this.t === void 0)) {
      this.f &= -33;
      for (var t = this.s; t !== void 0; t = t.n)
        t.S.U(t);
    }
  }, G.prototype.N = function() {
    if (!(2 & this.f)) {
      this.f |= 6;
      for (var r = this.t; r !== void 0; r = r.x)
        r.t.N();
    }
  }, G.prototype.peek = function() {
    if (this.h() || d(), 16 & this.f)
      throw this.v;
    return this.v;
  }, Object.defineProperty(G.prototype, "value", { get: function() {
    1 & this.f && d();
    var r = m(this);
    if (this.h(), r !== void 0 && (r.i = this.i), 16 & this.f)
      throw this.v;
    return this.v;
  } }), q.prototype.c = function() {
    var r = this.S();
    try {
      if (8 & this.f || this.x === void 0)
        return;
      var t = this.x();
      typeof t == "function" && (this.u = t);
    } finally {
      r();
    }
  }, q.prototype.S = function() {
    1 & this.f && d(), this.f |= 1, this.f &= -9, J(this), E(this), j++;
    var r = L;
    return L = this, Q.bind(this, r);
  }, q.prototype.N = function() {
    2 & this.f || (this.f |= 2, this.o = A, A = this);
  }, q.prototype.d = function() {
    this.f |= 8, 1 & this.f || Z(this);
  }, v.displayName = "_st", Object.defineProperties(p.prototype, { constructor: { configurable: !0, value: void 0 }, type: { configurable: !0, value: v }, props: { configurable: !0, get: function() {
    return { data: this };
  } }, __b: { configurable: !0, value: 1 } }), b("__b", function(r, t) {
    if (typeof t.type == "string") {
      var u, h = t.props;
      for (var i in h)
        if (i !== "children") {
          var a = h[i];
          a instanceof p && (u || (t.__np = u = {}), u[i] = a, h[i] = a.peek());
        }
    }
    r(t);
  }), b("__r", function(r, t) {
    o();
    var u, h = t.__c;
    h && (h.__$f &= -2, (u = h.__$u) === void 0 && (h.__$u = u = function(i) {
      var a;
      return w(function() {
        a = this;
      }), a.c = function() {
        h.__$f |= 1, h.setState({});
      }, a;
    }())), o(u), r(t);
  }), b("__e", function(r, t, u, h) {
    o(), r(t, u, h);
  }), b("diffed", function(r, t) {
    var u;
    if (o(), typeof t.type == "string" && (u = t.__e)) {
      var h = t.__np, i = t.props;
      if (h) {
        var a = u.U;
        if (a)
          for (var g in a) {
            var y = a[g];
            y === void 0 || g in h || (y.d(), a[g] = void 0);
          }
        else
          u.U = a = {};
        for (var B in h) {
          var f = a[B], _ = h[B];
          f === void 0 ? (f = C(u, B, _, i), a[B] = f) : f.o(_, i);
        }
      }
    }
    r(t);
  }), b("unmount", function(r, t) {
    if (typeof t.type == "string") {
      var u = t.__e;
      if (u) {
        var h = u.U;
        if (h)
          for (var i in u.U = void 0, h) {
            var a = h[i];
            a && a.d();
          }
      }
    } else {
      var g = t.__c;
      if (g) {
        var y = g.__$u;
        y && (g.__$u = void 0, y.d());
      }
    }
    r(t);
  }), b("__h", function(r, t, u, h) {
    (h < 3 || h === 9) && (t.__$f |= 2), r(t, u, h);
  }), s.Yl.prototype.shouldComponentUpdate = function(r, t) {
    var u = this.__$u;
    if (!(u && u.s !== void 0 || 4 & this.__$f) || 3 & this.__$f)
      return !0;
    for (var h in t)
      return !0;
    for (var i in r)
      if (i !== "__source" && r[i] !== this.props[i])
        return !0;
    for (var a in this.props)
      if (!(a in r))
        return !0;
    return !1;
  };
}, 7536: (te, T, e) => {
  e.d(T, { A: () => n, c: () => d });
  var s = new class {
    get map() {
      return this._map;
    }
    set map(P) {
      this._map = P;
    }
    getMethods() {
      return { setMap: (P) => {
        this.map = P;
      }, getMap: () => this.map };
    }
  }(), { setMap: n, getMap: d } = s.getMethods();
}, 412: (te, T, e) => {
  e.d(T, { _: () => A });
  class s {
    constructor(k) {
      this.config = k;
    }
    getConfig() {
      return this.config;
    }
    setConfig(k) {
      this.config = k;
    }
  }
  var n = e(7536), d = ["imageParamsKeyMap"];
  function P(x, k) {
    var m = Object.keys(x);
    if (Object.getOwnPropertySymbols) {
      var p = Object.getOwnPropertySymbols(x);
      k && (p = p.filter(function(I) {
        return Object.getOwnPropertyDescriptor(x, I).enumerable;
      })), m.push.apply(m, p);
    }
    return m;
  }
  function S(x) {
    for (var k = 1; k < arguments.length; k++) {
      var m = arguments[k] != null ? arguments[k] : {};
      k % 2 ? P(Object(m), !0).forEach(function(p) {
        $(x, p, m[p]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(x, Object.getOwnPropertyDescriptors(m)) : P(Object(m)).forEach(function(p) {
        Object.defineProperty(x, p, Object.getOwnPropertyDescriptor(m, p));
      });
    }
    return x;
  }
  function L(x, k) {
    if (x == null)
      return {};
    var m, p, I = function(E, z) {
      if (E == null)
        return {};
      var G, J, Z = {}, Q = Object.keys(E);
      for (J = 0; J < Q.length; J++)
        G = Q[J], z.indexOf(G) >= 0 || (Z[G] = E[G]);
      return Z;
    }(x, k);
    if (Object.getOwnPropertySymbols) {
      var M = Object.getOwnPropertySymbols(x);
      for (p = 0; p < M.length; p++)
        m = M[p], k.indexOf(m) >= 0 || Object.prototype.propertyIsEnumerable.call(x, m) && (I[m] = x[m]);
    }
    return I;
  }
  function $(x, k, m) {
    return (k = function(p) {
      var I = function(M, E) {
        if (typeof M != "object" || !M)
          return M;
        var z = M[Symbol.toPrimitive];
        if (z !== void 0) {
          var G = z.call(M, E || "default");
          if (typeof G != "object")
            return G;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (E === "string" ? String : Number)(M);
      }(p, "string");
      return typeof I == "symbol" ? I : String(I);
    }(k)) in x ? Object.defineProperty(x, k, { value: m, enumerable: !0, configurable: !0, writable: !0 }) : x[k] = m, x;
  }
  class A {
    constructor(k) {
      var { init: m, listeners: p } = k;
      $(this, "_listeners", []), $(this, "config", new s({})), this.listeners = (I) => (this._listeners.forEach((M) => M.off()), this._listeners = p(I)), this.init = (I) => {
        var M = I, { imageParamsKeyMap: E } = M, z = L(M, d);
        return this.config.setConfig(S(S({}, this.config.getConfig()), z)), (0, n.A)(E), m(I);
      };
    }
  }
  class j {
    static register(k, m) {
      var p, I;
      j._mounted && ((p = k.listeners) === null || p === void 0 || p.call(k, m), (I = k.init) === null || I === void 0 || I.call(k, m)), j._initializers.push([k, m]);
    }
    static mount() {
      var k, m;
      j._mounted = !0, (k = j._initializers) === null || k === void 0 || k.forEach((p) => {
        var I, [M, E] = p;
        (I = M.listeners) === null || I === void 0 || I.call(M, E);
      }), (m = j._initializers) === null || m === void 0 || m.forEach((p) => {
        var I, [M, E] = p;
        (I = M.init) === null || I === void 0 || I.call(M, S({ imageParamsKeyMap: j._imageParamsKeyMap }, E));
      });
    }
    static setImageParamKeys(k) {
      j._imageParamsKeyMap = k;
    }
  }
  $(j, "_initializers", []), $(j, "_mounted", !1), $(j, "_imageParamsKeyMap", void 0);
}, 712: (te, T, e) => {
  e.d(T, { Ui: () => s.Ui, YX: () => s.YX, o8: () => s.o8, Ij: () => s.Ij, u0: () => s.u0, ET: () => s.ET, GU: () => s.GU, um: () => I.um, i4: () => s.i4, Ej: () => $.E, YP: () => G.Y, mG: () => d.m, CA: () => n.CA, Q3: () => P.Q, eE: () => n.eE, KG: () => z.K, iM: () => S.i, qM: () => L.q, a_: () => E.a, ii: () => $.i, sD: () => A.s, AK: () => j.A, ek: () => I.ek, ch: () => x, __: () => n.__, WC: () => k.W, Ef: () => n.Ef, XK: () => n.o8, Uh: () => n.Uh, Si: () => m.S, aO: () => p.a, Eh: () => I.Eh, Mz: () => M.M });
  var s = e(3760), n = e(3584), d = e(1212), P = e(7788), S = e(2740), L = e(5616), $ = e(7540), A = e(9496), j = e(3688), x = (J) => {
    var Z;
    (Z = window) === null || Z === void 0 || (Z = Z.location) === null || Z === void 0 || Z.assign(J);
  }, k = e(2532), m = e(4628), p = e(2567), I = e(9296), M = e(1384), E = e(1036), z = e(152), G = e(1988);
}, 7540: (te, T, e) => {
  function s(A, j) {
    var x = Object.keys(A);
    if (Object.getOwnPropertySymbols) {
      var k = Object.getOwnPropertySymbols(A);
      j && (k = k.filter(function(m) {
        return Object.getOwnPropertyDescriptor(A, m).enumerable;
      })), x.push.apply(x, k);
    }
    return x;
  }
  function n(A, j, x) {
    return (j = function(k) {
      var m = function(p, I) {
        if (typeof p != "object" || !p)
          return p;
        var M = p[Symbol.toPrimitive];
        if (M !== void 0) {
          var E = M.call(p, I || "default");
          if (typeof E != "object")
            return E;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (I === "string" ? String : Number)(p);
      }(k, "string");
      return typeof m == "symbol" ? m : String(m);
    }(j)) in A ? Object.defineProperty(A, j, { value: x, enumerable: !0, configurable: !0, writable: !0 }) : A[j] = x, A;
  }
  function d(A, j, x, k, m, p, I) {
    try {
      var M = A[p](I), E = M.value;
    } catch (z) {
      return void x(z);
    }
    M.done ? j(E) : Promise.resolve(E).then(k, m);
  }
  e.d(T, { E: () => $, i: () => L });
  var P, S, L = new (e(412))._({ init: (P = function* (A) {
    var j = function(x) {
      for (var k = 1; k < arguments.length; k++) {
        var m = arguments[k] != null ? arguments[k] : {};
        k % 2 ? s(Object(m), !0).forEach(function(p) {
          n(x, p, m[p]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(x, Object.getOwnPropertyDescriptors(m)) : s(Object(m)).forEach(function(p) {
          Object.defineProperty(x, p, Object.getOwnPropertyDescriptor(m, p));
        });
      }
      return x;
    }({ guestViewCookieExpirationDays: 30 }, A);
    L.config.setConfig(j);
  }, S = function() {
    var A = this, j = arguments;
    return new Promise(function(x, k) {
      var m = P.apply(A, j);
      function p(M) {
        d(m, x, k, p, I, "next", M);
      }
      function I(M) {
        d(m, x, k, p, I, "throw", M);
      }
      p(void 0);
    });
  }, function(A) {
    return S.apply(this, arguments);
  }), listeners: () => [] }), $ = L.config;
}, 2567: (te, T, e) => {
  e.d(T, { a: () => $ });
  var s = e(3760), n = e(3112), d = `
  mutation setPaymentMethod($cartId: String!, $paymentMethod: String!) {
    setPaymentMethodOnCart(
      input: { cart_id: $cartId, payment_method: { code: $paymentMethod } }
    ) {
      cart {
        id
        ...CheckoutData
        ...CartSummaryItems
      }
    }
  }
  `.concat(n.e2, `
  `).concat(n.Qz, `
`), P = e(9120), S = e(6824);
  function L(A, j, x, k, m, p, I) {
    try {
      var M = A[p](I), E = M.value;
    } catch (z) {
      return void x(z);
    }
    M.done ? j(E) : Promise.resolve(E).then(k, m);
  }
  var $ = function() {
    var A, j = (A = function* (x) {
      var { cartId: k, paymentMethod: m } = x;
      if (!k)
        throw new s.Ij();
      if (!m)
        throw new s.GU();
      return yield (0, P.m)({ type: "mutation", query: d, options: { variables: { cartId: k, paymentMethod: m } }, path: "setPaymentMethodOnCart.cart", signalType: "cart", transformer: S.o });
    }, function() {
      var x = this, k = arguments;
      return new Promise(function(m, p) {
        var I = A.apply(x, k);
        function M(z) {
          L(I, m, p, M, E, "next", z);
        }
        function E(z) {
          L(I, m, p, M, E, "throw", z);
        }
        M(void 0);
      });
    });
    return function(x) {
      return j.apply(this, arguments);
    };
  }();
}, 8122: (te, T, e) => {
  te.exports = ((s) => {
    var n = {};
    return e.d(n, s), n;
  })({ events: () => _t });
}, 8616: (te, T, e) => {
  te.exports = ((s) => {
    var n = {};
    return e.d(n, s), n;
  })({ FetchGraphQL: () => Ot });
} };
Fe.C(kt);
Fe.C(St);
Fe.C(Dt);
Fe.C(Tt);
Fe.C(At);
Fe.C(zt);
var Pt, tt = (Pt = 712, Fe(Fe.s = Pt)), dn = tt.Ui, un = tt.YX, pn = tt.o8, fn = tt.Ij, mn = tt.u0, vn = tt.ET, gn = tt.GU, bn = tt.um, yn = tt.i4, hn = tt.Ej, _n = tt.YP, wn = tt.mG, On = tt.CA, kn = tt.Q3, Sn = tt.eE, xn = tt.KG, jn = tt.iM, Pn = tt.qM, In = tt.a_, Nt = tt.ii, Cn = tt.sD, En = tt.AK, Dn = tt.ek, Tn = tt.ch, An = tt.__, Nn = tt.WC, Mn = tt.Ef, Bn = tt.XK, $n = tt.Uh, qn = tt.Si, Fn = tt.aO, Ln = tt.Eh, Gn = tt.Mz;
const zn = 2892, Hn = [2892], Yn = { 4944: (te, T, e) => {
  e.d(T, { i: () => s });
  var s = (n) => n.reduce((d, P) => {
    if (!P)
      return d;
    if (typeof P == "string" && (d += " ".concat(P)), Array.isArray(P)) {
      var [S, L] = P;
      S && L && (d += " ".concat(S));
    }
    return d;
  }, "").trim();
}, 2076: (te) => {
  te.exports = function(T) {
    var e = [];
    return e.toString = function() {
      return this.map(function(s) {
        var n = "", d = s[5] !== void 0;
        return s[4] && (n += "@supports (".concat(s[4], ") {")), s[2] && (n += "@media ".concat(s[2], " {")), d && (n += "@layer".concat(s[5].length > 0 ? " ".concat(s[5]) : "", " {")), n += T(s), d && (n += "}"), s[2] && (n += "}"), s[4] && (n += "}"), n;
      }).join("");
    }, e.i = function(s, n, d, P, S) {
      typeof s == "string" && (s = [[null, s, void 0]]);
      var L = {};
      if (d)
        for (var $ = 0; $ < this.length; $++) {
          var A = this[$][0];
          A != null && (L[A] = !0);
        }
      for (var j = 0; j < s.length; j++) {
        var x = [].concat(s[j]);
        d && L[x[0]] || (S !== void 0 && (x[5] === void 0 || (x[1] = "@layer".concat(x[5].length > 0 ? " ".concat(x[5]) : "", " {").concat(x[1], "}")), x[5] = S), n && (x[2] && (x[1] = "@media ".concat(x[2], " {").concat(x[1], "}")), x[2] = n), P && (x[4] ? (x[1] = "@supports (".concat(x[4], ") {").concat(x[1], "}"), x[4] = P) : x[4] = "".concat(P)), e.push(x));
      }
    }, e;
  };
}, 6008: (te) => {
  te.exports = function(T) {
    return T[1];
  };
}, 7748: function(te) {
  te.exports = function(T, e, s, n, d) {
    for (e = e.split ? e.split(".") : e, n = 0; n < e.length; n++)
      T = T ? T[e[n]] : d;
    return T === d ? s : T;
  };
}, 2460: (te, T, e) => {
  e.d(T, { Gg: () => p, us: () => G, Mp: () => C, _q: () => t, a: () => o, cF: () => h });
  var s, n = e(304), d = e(8596), P = e(7748), S = e.n(P), L = {};
  function $(i, a, g) {
    if (i.nodeType === 3) {
      var y = "textContent" in i ? i.textContent : i.nodeValue || "";
      if ($.options.trim !== !1) {
        var B = a === 0 || a === g.length - 1;
        if ((!(y = y.match(/^[\s\n]+$/g) && $.options.trim !== "all" ? " " : y.replace(/(^[\s\n]+|[\s\n]+$)/g, $.options.trim === "all" || B ? "" : " ")) || y === " ") && g.length > 1 && B)
          return null;
      }
      return y;
    }
    if (i.nodeType !== 1)
      return null;
    var f = String(i.nodeName).toLowerCase();
    if (f === "script" && !$.options.allowScripts)
      return null;
    var _, D, R = $.h(f, function(Y) {
      var W = Y && Y.length;
      if (!W)
        return null;
      for (var U = {}, K = 0; K < W; K++) {
        var H = Y[K], l = H.name, c = H.value;
        l.substring(0, 2) === "on" && $.options.allowEvents && (c = new Function(c)), U[l] = c;
      }
      return U;
    }(i.attributes), (D = (_ = i.childNodes) && Array.prototype.map.call(_, $).filter(j)) && D.length ? D : null);
    return $.visitor && $.visitor(R), R;
  }
  var A, j = function(i) {
    return i;
  }, x = {};
  function k(i) {
    var a = (i.type || "").toLowerCase(), g = k.map;
    g && g.hasOwnProperty(a) ? (i.type = g[a], i.props = Object.keys(i.props || {}).reduce(function(y, B) {
      var f;
      return y[f = B, f.replace(/-(.)/g, function(_, D) {
        return D.toUpperCase();
      })] = i.props[B], y;
    }, {})) : i.type = a.replace(/[^a-z0-9-]/i, "");
  }
  const m = function(i) {
    function a() {
      i.apply(this, arguments);
    }
    return i && (a.__proto__ = i), (a.prototype = Object.create(i && i.prototype)).constructor = a, a.setReviver = function(g) {
      A = g;
    }, a.prototype.shouldComponentUpdate = function(g) {
      var y = this.props;
      return g.wrap !== y.wrap || g.type !== y.type || g.markup !== y.markup;
    }, a.prototype.setComponents = function(g) {
      if (this.map = {}, g) {
        for (var y in g)
          if (g.hasOwnProperty(y)) {
            var B = y.replace(/([A-Z]+)([A-Z][a-z0-9])|([a-z0-9]+)([A-Z])/g, "$1$3-$2$4").toLowerCase();
            this.map[B] = g[y];
          }
      }
    }, a.prototype.render = function(g) {
      var y = g.wrap;
      y === void 0 && (y = !0);
      var B, f = g.type, _ = g.markup, D = g.components, R = g.reviver, Y = g.onError, W = g["allow-scripts"], U = g["allow-events"], K = g.trim, H = function(F, V) {
        var ee = {};
        for (var ne in F)
          Object.prototype.hasOwnProperty.call(F, ne) && V.indexOf(ne) === -1 && (ee[ne] = F[ne]);
        return ee;
      }(g, ["wrap", "type", "markup", "components", "reviver", "onError", "allow-scripts", "allow-events", "trim"]), l = R || this.reviver || this.constructor.prototype.reviver || A || n.h;
      this.setComponents(D);
      var c = { allowScripts: W, allowEvents: U, trim: K };
      try {
        B = function(F, V, ee, ne, oe) {
          var pe = function(Se, le) {
            var se, fe, be, ue, de = le === "html" ? "text/html" : "application/xml";
            le === "html" ? (ue = "body", be = `<!DOCTYPE html>
<html><body>` + Se + "</body></html>") : (ue = "xml", be = `<?xml version="1.0" encoding="UTF-8"?>
<xml>` + Se + "</xml>");
            try {
              se = new DOMParser().parseFromString(be, de);
            } catch (Ie) {
              fe = Ie;
            }
            if (se || le !== "html" || ((se = s || (s = function() {
              if (document.implementation && document.implementation.createHTMLDocument)
                return document.implementation.createHTMLDocument("");
              var Ie = document.createElement("iframe");
              return Ie.style.cssText = "position:absolute; left:0; top:-999em; width:1px; height:1px; overflow:hidden;", Ie.setAttribute("sandbox", "allow-forms"), document.body.appendChild(Ie), Ie.contentWindow.document;
            }())).open(), se.write(be), se.close()), se) {
              var we = se.getElementsByTagName(ue)[0], xe = we.firstChild;
              return Se && !xe && (we.error = "Document parse failed."), xe && String(xe.nodeName).toLowerCase() === "parsererror" && (xe.removeChild(xe.firstChild), xe.removeChild(xe.lastChild), we.error = xe.textContent || xe.nodeValue || fe || "Unknown error", we.removeChild(xe)), we;
            }
          }(F, V);
          if (pe && pe.error)
            throw new Error(pe.error);
          var _e = pe && pe.body || pe;
          k.map = ne || x;
          var ae = _e && function(Se, le, se, fe) {
            return $.visitor = le, $.h = se, $.options = fe || L, $(Se);
          }(_e, k, ee, oe);
          return k.map = null, ae && ae.props && ae.props.children || null;
        }(_, f, l, this.map, c);
      } catch (F) {
        Y ? Y({ error: F }) : typeof console < "u" && console.error && console.error("preact-markup: " + F);
      }
      if (y === !1)
        return B || null;
      var O = H.hasOwnProperty("className") ? "className" : "class", N = H[O];
      return N ? N.splice ? N.splice(0, 0, "markup") : typeof N == "string" ? H[O] += " markup" : typeof N == "object" && (N.markup = !0) : H[O] = "markup", l("div", H, B || null);
    }, a;
  }(n.Yl);
  var p = (0, n.GY)({ intl: {} });
  function I(i) {
    return i != null;
  }
  function M(i, a) {
    for (var g in a)
      i[g] = a[g];
    return i;
  }
  function E(i, a) {
    var g = M({}, i);
    for (var y in a)
      a.hasOwnProperty(y) && (i[y] && a[y] && typeof i[y] == "object" && typeof a[y] == "object" ? g[y] = E(i[y], a[y]) : g[y] = i[y] || a[y]);
    return g;
  }
  var z = /[?&#]intl=show/;
  function G(i) {
    var a = i.scope, g = i.mark, y = i.definition, B = function(_, D) {
      var R = {};
      for (var Y in _)
        Object.prototype.hasOwnProperty.call(_, Y) && D.indexOf(Y) === -1 && (R[Y] = _[Y]);
      return R;
    }(i, ["scope", "mark", "definition"]), f = M({}, (0, d.Co)(p).intl || {});
    return a && (f.scope = a), y && (f.dictionary = E(f.dictionary || {}, y)), (g || typeof location < "u" && String(location).match(z)) && (f.mark = !0), (0, n.h)(p.Provider, { value: { intl: f } }, B.children);
  }
  function J(i, a) {
    if (arguments.length < 2)
      return a = i, function(y) {
        return J(y, a);
      };
    function g(y) {
      return (0, n.h)(G, a || {}, (0, n.h)(i, y));
    }
    return g.getWrappedComponent = i && i.getWrappedComponent || function() {
      return i;
    }, g;
  }
  var Z = {};
  function Q(i, a, g, y) {
    return i && i.replace(/\{\{([\w.-]+)\}\}/g, q.bind(null, a || Z, g, y));
  }
  function q(i, a, g, y, B) {
    for (var f = B.split("."), _ = i, D = 0; D < f.length; D++) {
      if ((_ = _[f[D]]) == null)
        return "";
      if (_ && _.type === o)
        return w(_.props.id, a, g, _.props.fields, _.props.plural, _.props.fallback);
    }
    return typeof _ == "string" && _.match(/\{\{/) && (_ = Q(_, i)), _;
  }
  function w(i, a, g, y, B, f) {
    a && (i = a + "." + i);
    var _ = g && S()(g, i);
    return (B || B === 0) && _ && typeof _ == "object" && (_ = _.splice ? _[B] || _[0] : B === 0 && I(_.none || _.zero) ? _.none || _.zero : B === 1 && I(_.one || _.singular) ? _.one || _.singular : _.some || _.many || _.plural || _.other || _), _ && Q(_, y, a, g) || f || null;
  }
  function b(i) {
    var a = i.value, g = i.id, y = (0, d.Co)(p).intl;
    if (y && y.mark) {
      var B = "dictionary" + (y && y.scope ? "." + y.scope : "") + "." + g;
      return (0, n.h)("mark", { style: { background: a ? S()(y, B) ? "rgba(119,231,117,.5)" : "rgba(229,226,41,.5)" : "rgba(228,147,51,.5)" }, title: g }, a);
    }
    return a;
  }
  function o(i) {
    var a = i.id, g = i.children, y = i.plural, B = i.fields, f = (0, d.Co)(p).intl, _ = w(a, f && f.scope, f && f.dictionary, B, y, g);
    return (0, n.h)(b, { id: a, value: _ });
  }
  function v(i, a, g) {
    var y = {};
    for (var B in a = a || {}, i = function(_) {
      if (typeof (_ = _ || {}) == "string" && (_ = _.split(",")), "join" in _) {
        for (var D = {}, R = 0; R < _.length; R++) {
          var Y = _[R].trim();
          Y && (D[Y.split(".").pop()] = Y);
        }
        return D;
      }
      return _;
    }(i), i)
      if (i.hasOwnProperty(B) && i[B]) {
        var f = i[B];
        g || typeof f != "string" ? f.type === o && (f = M({ fallback: f.props.children }, f.props), y[B] = w(f.id, a.scope, a.dictionary, f.fields, f.plural, f.fallback)) : y[B] = w(f, a.scope, a.dictionary);
      }
    return y;
  }
  function C(i) {
    var a = i.children, g = (0, d.Co)(p).intl;
    return a && a.length ? a.map(function(y) {
      return (0, n.Yr)(y, v(y.props, g, !0));
    }) : a && (0, n.Yr)(a, v(a.props, g, !0));
  }
  function r(i, a) {
    var g = {};
    for (var y in i)
      Object.prototype.hasOwnProperty.call(i, y) && a.indexOf(y) === -1 && (g[y] = i[y]);
    return g;
  }
  function t(i) {
    var a = i.id, g = i.fields, y = i.plural, B = i.children, f = r(i, ["id", "fields", "plural", "children"]);
    return (0, n.h)(C, null, (0, n.h)(u, Object.assign({}, { html: (0, n.h)(o, { id: a, fields: g, plural: y, children: B }), id: a }, f)));
  }
  function u(i) {
    var a = i.html, g = i.id, y = r(i, ["html", "id"]);
    return (0, n.h)(b, { id: g, value: a && (typeof a == "string" ? (0, n.h)(m, Object.assign({}, { type: "html", trim: !1 }, y, { markup: a })) : (0, n.h)("span", null, a)) });
  }
  function h(i) {
    var a = (0, d.Co)(p).intl;
    return v(typeof i == "function" ? i({ intl: a }) : i, a);
  }
  J.intl = J, J.IntlContext = p, J.IntlProvider = G, J.Text = o, J.MarkupText = t, J.Localizer = C, J.withText = function(i) {
    return function(a) {
      function g(y, B) {
        var f = (0, d.Co)(p).intl, _ = v(typeof i == "function" ? i(y, { intl: f }) : i, f);
        return (0, n.h)(a, M(M({}, y), _));
      }
      return g.getWrappedComponent = a && a.getWrappedComponent || function() {
        return a;
      }, g;
    };
  }, J.useText = h, J.translate = w;
}, 5536: (te) => {
  var T = [];
  function e(d) {
    for (var P = -1, S = 0; S < T.length; S++)
      if (T[S].identifier === d) {
        P = S;
        break;
      }
    return P;
  }
  function s(d, P) {
    for (var S = {}, L = [], $ = 0; $ < d.length; $++) {
      var A = d[$], j = P.base ? A[0] + P.base : A[0], x = S[j] || 0, k = "".concat(j, " ").concat(x);
      S[j] = x + 1;
      var m = e(k), p = { css: A[1], media: A[2], sourceMap: A[3], supports: A[4], layer: A[5] };
      if (m !== -1)
        T[m].references++, T[m].updater(p);
      else {
        var I = n(p, P);
        P.byIndex = $, T.splice($, 0, { identifier: k, updater: I, references: 1 });
      }
      L.push(k);
    }
    return L;
  }
  function n(d, P) {
    var S = P.domAPI(P);
    return S.update(d), function(L) {
      if (L) {
        if (L.css === d.css && L.media === d.media && L.sourceMap === d.sourceMap && L.supports === d.supports && L.layer === d.layer)
          return;
        S.update(d = L);
      } else
        S.remove();
    };
  }
  te.exports = function(d, P) {
    var S = s(d = d || [], P = P || {});
    return function(L) {
      L = L || [];
      for (var $ = 0; $ < S.length; $++) {
        var A = e(S[$]);
        T[A].references--;
      }
      for (var j = s(L, P), x = 0; x < S.length; x++) {
        var k = e(S[x]);
        T[k].references === 0 && (T[k].updater(), T.splice(k, 1));
      }
      S = j;
    };
  };
}, 1496: (te) => {
  var T = {};
  te.exports = function(e, s) {
    var n = function(d) {
      if (T[d] === void 0) {
        var P = document.querySelector(d);
        if (window.HTMLIFrameElement && P instanceof window.HTMLIFrameElement)
          try {
            P = P.contentDocument.head;
          } catch {
            P = null;
          }
        T[d] = P;
      }
      return T[d];
    }(e);
    if (!n)
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    n.appendChild(s);
  };
}, 9904: (te) => {
  te.exports = function(T) {
    var e = document.createElement("style");
    return T.setAttributes(e, T.attributes), T.insert(e, T.options), e;
  };
}, 9356: (te) => {
  te.exports = function(T, e) {
    Object.keys(e).forEach(function(s) {
      T.setAttribute(s, e[s]);
    });
  };
}, 7008: (te) => {
  te.exports = function(T) {
    if (typeof document > "u")
      return { update: function() {
      }, remove: function() {
      } };
    var e = T.insertStyleElement(T);
    return { update: function(s) {
      (function(n, d, P) {
        var S = "";
        P.supports && (S += "@supports (".concat(P.supports, ") {")), P.media && (S += "@media ".concat(P.media, " {"));
        var L = P.layer !== void 0;
        L && (S += "@layer".concat(P.layer.length > 0 ? " ".concat(P.layer) : "", " {")), S += P.css, L && (S += "}"), P.media && (S += "}"), P.supports && (S += "}");
        var $ = P.sourceMap;
        $ && typeof btoa < "u" && (S += `
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify($)))), " */")), d.styleTagTransform(S, n, d.options);
      })(e, T, s);
    }, remove: function() {
      (function(s) {
        if (s.parentNode === null)
          return !1;
        s.parentNode.removeChild(s);
      })(e);
    } };
  };
} }, Mt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  id: zn,
  ids: Hn,
  modules: Yn
}, Symbol.toStringTag, { value: "Module" })), Rn = 2956, Un = [2956], Kn = { 9188: (te, T, e) => {
  e.d(T, { s: () => r, C: () => t });
  var s = e(2796), n = e(9952), d = e.n(n), P = e(4944);
  const S = JSON.parse('{"Dropin":{"ExampleComponentName":{"item":{"label":"string"}},"Incrementer":{"decreaseLabel":"Decrease Quantity","increaseLabel":"Increase Quantity","label":"Quantity"},"Modal":{"Close":{"label":"Close"}},"InlineAlert":{"dismissLabel":"Dismiss Alert"},"PriceSummary":{"subTotal":{"label":"Subtotal","withTaxes":"Including taxes","withoutTaxes":"excluding taxes"},"shipping":{"label":"Shipping","editZipAction":"Apply","estimated":"Estimated Shipping","estimatedDestination":"Estimated Shipping to ","destinationLinkAriaLabel":"Change destination","zipPlaceholder":"Zip Code","withTaxes":"Including taxes","withoutTaxes":"excluding taxes","alternateField":{"zip":"Estimate using country/zip","state":"Estimate using country/state"}},"taxes":{"total":"Tax Total","totalOnly":"Tax","breakdown":"Taxes","showBreakdown":"Show Tax Breakdown","hideBreakdown":"Hide Tax Breakdown","estimated":"Estimated Tax"},"total":{"estimated":"Estimated Total","label":"Total","withoutTax":"Total excluding taxes"}},"ProgressSpinner":{"updating":{"label":"Item is updating"},"updatingChildren":{"label":"Items are updating"}},"PriceRange":{"from":{"label":"From"},"to":{"label":"to"},"asLowAs":{"label":"As low as"}},"Swatches":{"outOfStock":{"label":"out of stock swatch"},"selected":{"label":"swatch selected"},"swatch":{"label":"swatch"}},"Accordion":{"open":{"label":"Open"},"close":{"label":"Close"}},"CartItem":{"each":{"label":"each"},"quantity":{"label":"Quantity"},"remove":{"label":"Remove {product} from the cart"},"removeDefault":{"label":"Remove item from the cart"},"taxIncluded":{"label":"incl. VAT"},"taxExcluded":{"label":"excl. tax"},"updating":{"label":"{product} is updating"}}}}');
  var L = e(2460), $ = { default: S, en_US: S }, A = e(5536), j = e.n(A), x = e(7008), k = e.n(x), m = e(1496), p = e.n(m), I = e(9356), M = e.n(I), E = e(9904), z = e.n(E), G = e(8864), J = { attributes: { "data-dropin": "storefront-checkout", "data-sdk": "0.22.0" }, styleTagTransform: function(u, h) {
    var D;
    window._loadedStyles = window._loadedStyles ?? {};
    const i = (D = u == null ? void 0 : u.match(/^\.dropin-(\w+)/)) == null ? void 0 : D[1], a = h.getAttribute("data-sdk"), g = i ? `sdk/${i}` : h.getAttribute("data-dropin");
    h.setAttribute("data-dropin", g), h.removeAttribute("data-sdk");
    const y = window._loadedStyles[g];
    if (y) {
      const R = function(Y, W) {
        const [U, K] = Y.split("-"), [H, l] = W.split("-"), c = [...U.split("."), K], O = [...H.split("."), l], N = parseInt(c[0], 10), F = parseInt(O[0], 10);
        if (N !== F)
          return N > F ? Y : W;
        const V = parseInt(c[1], 10), ee = parseInt(O[1], 10);
        if (V !== ee)
          return V > ee ? Y : W;
        const ne = parseInt(c[2], 10), oe = parseInt(O[2], 10);
        if (ne !== oe)
          return ne > oe ? Y : W;
        if (c[3] && O[3]) {
          const pe = /(alpha|beta)(.*)/, _e = c[3].match(pe), ae = O[3].match(pe), Se = _e[1], le = ae[1], se = parseInt(_e[2], 10), fe = parseInt(ae[2], 10);
          if (Se === le)
            return se > fe ? Y : W;
          if (Se === "alpha" && le === "beta")
            return W;
          if (Se === "beta" && le === "alpha")
            return Y;
        }
        return c[3] ? W : Y;
      }(a, y.sdk);
      if (!i || i && R === y.sdk) {
        const Y = y.style.textContent;
        y.style.textContent = `${Y}
/* --- MERGED --- */
${u}`;
      } else
        i && R !== y.sdk && (y.style.textContent = `/* --- UPGRADED --- */
${u}`);
      return void h.remove();
    }
    h.textContent = u, window._loadedStyles[g] = { sdk: a, core: i, style: h };
    const B = document.querySelector("head"), { lastDropinStyleInjected: f, lastSDKStyleInjected: _ } = window._loadedStyles;
    i ? (_ ? B.insertBefore(h, _.nextSibling) : B.insertBefore(h, B.firstChild), window._loadedStyles.lastSDKStyleInjected = h) : (f ? B.insertBefore(h, f.nextSibling) : _ ? B.insertBefore(h, _.nextSibling) : B.insertBefore(h, B.firstChild), window._loadedStyles.lastDropinStyleInjected = h);
  } };
  J.setAttributes = M(), J.insert = p().bind(null, "head"), J.domAPI = k(), J.insertStyleElement = z(), j()(G.c, J), G.c && G.c.locals && G.c.locals;
  var Z = e(5864), Q = { attributes: { "data-dropin": "storefront-checkout", "data-sdk": "0.22.0" }, styleTagTransform: function(u, h) {
    var D;
    window._loadedStyles = window._loadedStyles ?? {};
    const i = (D = u == null ? void 0 : u.match(/^\.dropin-(\w+)/)) == null ? void 0 : D[1], a = h.getAttribute("data-sdk"), g = i ? `sdk/${i}` : h.getAttribute("data-dropin");
    h.setAttribute("data-dropin", g), h.removeAttribute("data-sdk");
    const y = window._loadedStyles[g];
    if (y) {
      const R = function(Y, W) {
        const [U, K] = Y.split("-"), [H, l] = W.split("-"), c = [...U.split("."), K], O = [...H.split("."), l], N = parseInt(c[0], 10), F = parseInt(O[0], 10);
        if (N !== F)
          return N > F ? Y : W;
        const V = parseInt(c[1], 10), ee = parseInt(O[1], 10);
        if (V !== ee)
          return V > ee ? Y : W;
        const ne = parseInt(c[2], 10), oe = parseInt(O[2], 10);
        if (ne !== oe)
          return ne > oe ? Y : W;
        if (c[3] && O[3]) {
          const pe = /(alpha|beta)(.*)/, _e = c[3].match(pe), ae = O[3].match(pe), Se = _e[1], le = ae[1], se = parseInt(_e[2], 10), fe = parseInt(ae[2], 10);
          if (Se === le)
            return se > fe ? Y : W;
          if (Se === "alpha" && le === "beta")
            return W;
          if (Se === "beta" && le === "alpha")
            return Y;
        }
        return c[3] ? W : Y;
      }(a, y.sdk);
      if (!i || i && R === y.sdk) {
        const Y = y.style.textContent;
        y.style.textContent = `${Y}
/* --- MERGED --- */
${u}`;
      } else
        i && R !== y.sdk && (y.style.textContent = `/* --- UPGRADED --- */
${u}`);
      return void h.remove();
    }
    h.textContent = u, window._loadedStyles[g] = { sdk: a, core: i, style: h };
    const B = document.querySelector("head"), { lastDropinStyleInjected: f, lastSDKStyleInjected: _ } = window._loadedStyles;
    i ? (_ ? B.insertBefore(h, _.nextSibling) : B.insertBefore(h, B.firstChild), window._loadedStyles.lastSDKStyleInjected = h) : (f ? B.insertBefore(h, f.nextSibling) : _ ? B.insertBefore(h, _.nextSibling) : B.insertBefore(h, B.firstChild), window._loadedStyles.lastDropinStyleInjected = h);
  } };
  Q.setAttributes = M(), Q.insert = p().bind(null, "head"), Q.domAPI = k(), Q.insertStyleElement = z(), j()(Z.c, Q), Z.c && Z.c.locals && Z.c.locals;
  var q = e(8412), w = ["lang", "langDefinitions", "className", "children"];
  function b(u, h) {
    var i = Object.keys(u);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(u);
      h && (a = a.filter(function(g) {
        return Object.getOwnPropertyDescriptor(u, g).enumerable;
      })), i.push.apply(i, a);
    }
    return i;
  }
  function o(u) {
    for (var h = 1; h < arguments.length; h++) {
      var i = arguments[h] != null ? arguments[h] : {};
      h % 2 ? b(Object(i), !0).forEach(function(a) {
        v(u, a, i[a]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(i)) : b(Object(i)).forEach(function(a) {
        Object.defineProperty(u, a, Object.getOwnPropertyDescriptor(i, a));
      });
    }
    return u;
  }
  function v(u, h, i) {
    var a;
    return (h = typeof (a = function(g, y) {
      if (typeof g != "object" || !g)
        return g;
      var B = g[Symbol.toPrimitive];
      if (B !== void 0) {
        var f = B.call(g, y || "default");
        if (typeof f != "object")
          return f;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (y === "string" ? String : Number)(g);
    }(h, "string")) == "symbol" ? a : String(a)) in u ? Object.defineProperty(u, h, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : u[h] = i, u;
  }
  function C(u, h) {
    if (u == null)
      return {};
    var i, a, g = function(B, f) {
      if (B == null)
        return {};
      var _, D, R = {}, Y = Object.keys(B);
      for (D = 0; D < Y.length; D++)
        _ = Y[D], f.indexOf(_) >= 0 || (R[_] = B[_]);
      return R;
    }(u, h);
    if (Object.getOwnPropertySymbols) {
      var y = Object.getOwnPropertySymbols(u);
      for (a = 0; a < y.length; a++)
        i = y[a], h.indexOf(i) >= 0 || Object.prototype.propertyIsEnumerable.call(u, i) && (g[i] = u[i]);
    }
    return g;
  }
  var r = (0, s.GY)({ locale: "en-US" }), t = (u) => {
    var { lang: h = "en_US", langDefinitions: i = {}, className: a, children: g } = u, y = C(u, w), B = (0, s.bB)(() => {
      var _, D = d()(i.default, (_ = i[h]) !== null && _ !== void 0 ? _ : {});
      return d()(((R) => d()($.default, $[R] || {}))(h), D);
    }, [h, i]), f = h.replace("_", "-");
    return (0, q.im)(r.Provider, { value: { locale: f }, children: (0, q.im)(L.us, { definition: B, children: (0, q.im)("div", o(o({}, y), {}, { className: (0, P.i)(["dropin-design", a]), children: g })) }) });
  };
}, 7536: (te, T, e) => {
  e.d(T, { A: () => n, c: () => d });
  var s = new class {
    get map() {
      return this._map;
    }
    set map(P) {
      this._map = P;
    }
    getMethods() {
      return { setMap: (P) => {
        this.map = P;
      }, getMap: () => this.map };
    }
  }(), { setMap: n, getMap: d } = s.getMethods();
}, 8864: (te, T, e) => {
  e.d(T, { c: () => S });
  var s = e(6008), n = e.n(s), d = e(2076), P = e.n(d)()(n());
  P.push([te.id, `.dropin-design{
  --color-brand-500:#454545;
  --color-brand-600:#383838;
  --color-brand-700:#2b2b2b;
  --color-neutral-50:#ffffff;
  --color-neutral-100:#fafafa;
  --color-neutral-200:#f5f5f5;
  --color-neutral-300:#e8e8e8;
  --color-neutral-400:#d6d6d6;
  --color-neutral-500:#b8b8b8;
  --color-neutral-600:#8f8f8f;
  --color-neutral-700:#666666;
  --color-neutral-800:#3d3d3d;
  --color-neutral-900:#292929;
  --color-positive-200:#eff5ef;
  --color-positive-500:#7fb078;
  --color-positive-800:#53824c;
  --color-informational-200:#eeeffb;
  --color-informational-500:#6978d9;
  --color-informational-800:#5d6dd6;
  --color-warning-200:#fdf3e9;
  --color-warning-500:#e79f5c;
  --color-warning-800:#ad5c00;
  --color-alert-200:#ffebeb;
  --color-alert-500:#db7070;
  --color-alert-800:#bf4545;
  --color-opacity-16:rgba(255, 255, 255, 0.16);
  --color-opacity-24:rgba(255, 255, 255, 0.24);
  --color-action-button-active:#ffffff;
  --color-action-button-hover:#e8e8e8;
  --color-button-active:#2b2b2b;
  --color-button-focus:#d6d6d6;
  --color-button-hover:#383838;
  --grid-1-columns:4;
  --grid-1-margins:0;
  --grid-1-gutters:16px;
  --grid-2-columns:12;
  --grid-2-margins:0;
  --grid-2-gutters:16px;
  --grid-3-columns:12;
  --grid-3-margins:0;
  --grid-3-gutters:24px;
  --grid-4-columns:12;
  --grid-4-margins:0;
  --grid-4-gutters:24px;
  --grid-5-columns:12;
  --grid-5-margins:0;
  --grid-5-gutters:24px;
  --shape-border-radius-1:3px;
  --shape-border-radius-2:8px;
  --shape-border-radius-3:24px;
  --shape-border-width-1:1px;
  --shape-border-width-2:1.5px;
  --shape-border-width-3:2px;
  --shape-border-width-4:4px;
  --shape-shadow-1:0 0 16px 0 rgba(0, 0, 0, 0.16);
  --shape-shadow-2:0 2px 16px 0 rgba(0, 0, 0, 0.16);
  --shape-shadow-3:0 2px 3px 0 rgba(0, 0, 0, 0.16);
  --shape-icon-stroke-1:1px;
  --shape-icon-stroke-2:1.5px;
  --shape-icon-stroke-3:2px;
  --shape-icon-stroke-4:4px;
  --spacing-xxsmall:4px;
  --spacing-xsmall:8px;
  --spacing-small:16px;
  --spacing-medium:24px;
  --spacing-big:32px;
  --spacing-xbig:40px;
  --spacing-xxbig:48px;
  --spacing-large:64px;
  --spacing-xlarge:72px;
  --spacing-xxlarge:96px;
  --spacing-huge:120px;
  --spacing-xhuge:144px;
  --spacing-xxhuge:192px;
  --type-base-font-family:system-ui, sans-serif;
  --type-display-1-font:normal normal 300 60px/72px var(--type-base-font-family);
  --type-display-1-letter-spacing:0.04em;
  --type-display-2-font:normal normal 300 48px/56px var(--type-base-font-family);
  --type-display-2-letter-spacing:0.04em;
  --type-display-3-font:normal normal 300 34px/40px var(--type-base-font-family);
  --type-display-3-letter-spacing:0.04em;
  --type-headline-1-font:normal normal 400 24px/32px var(--type-base-font-family);
  --type-headline-1-letter-spacing:0.04em;
  --type-headline-2-default-font:normal normal 300 20px/24px var(--type-base-font-family);
  --type-headline-2-default-letter-spacing:0.04em;
  --type-headline-2-strong-font:normal normal 400 20px/24px var(--type-base-font-family);
  --type-headline-2-strong-letter-spacing:0.04em;
  --type-body-1-default-font:normal normal 300 16px/24px var(--type-base-font-family);
  --type-body-1-default-letter-spacing:0.04em;
  --type-body-1-strong-font:normal normal 400 16px/24px var(--type-base-font-family);
  --type-body-1-strong-letter-spacing:0.04em;
  --type-body-1-emphasized-font:normal normal 700 16px/24px var(--type-base-font-family);
  --type-body-1-emphasized-letter-spacing:0.04em;
  --type-body-2-default-font:normal normal 300 14px/20px var(--type-base-font-family);
  --type-body-2-default-letter-spacing:0.04em;
  --type-body-2-strong-font:normal normal 400 14px/20px var(--type-base-font-family);
  --type-body-2-strong-letter-spacing:0.04em;
  --type-body-2-emphasized-font:normal normal 700 14px/20px var(--type-base-font-family);
  --type-body-2-emphasized-letter-spacing:0.04em;
  --type-button-1-font:normal normal 400 20px/26px var(--type-base-font-family);
  --type-button-1-letter-spacing:0.08em;
  --type-button-2-font:normal normal 400 16px/24px var(--type-base-font-family);
  --type-button-2-letter-spacing:0.08em;
  --type-details-caption-1-font:normal normal 400 12px/16px var(--type-base-font-family);
  --type-details-caption-1-letter-spacing:0.08em;
  --type-details-caption-2-font:normal normal 300 12px/16px var(--type-base-font-family);
  --type-details-caption-2-letter-spacing:0.08em;
  --type-details-overline-font:normal normal 700 12px/20px var(--type-base-font-family);
  --type-details-overline-letter-spacing:0.16em;
}
`, ""]);
  const S = P;
}, 5864: (te, T, e) => {
  e.d(T, { c: () => S });
  var s = e(6008), n = e.n(s), d = e(2076), P = e.n(d)()(n());
  P.push([te.id, `.dropin-design a{
  --textColor:var(--color-brand-500);
  color:var(--textColor);
  text-decoration:none;
}

.dropin-design a:hover{
  --textColor:var(--color-brand-700);
  text-decoration:solid underline var(--textColor);
  text-underline-offset:6px;
}

.dropin-design a:focus-visible{
  outline:solid var(--shape-border-width-4) var(--color-neutral-400);
  border:var(--shape-border-width-1) solid var(--color-neutral-800);
  border-radius:var(--shape-border-radius-1);
}
`, ""]);
  const S = P;
}, 9952: (te) => {
  var T = function(A) {
    return /* @__PURE__ */ function(j) {
      return !!j && typeof j == "object";
    }(A) && !function(j) {
      var x = Object.prototype.toString.call(j);
      return x === "[object RegExp]" || x === "[object Date]" || function(k) {
        return k.$$typeof === e;
      }(j);
    }(A);
  }, e = typeof Symbol == "function" && Symbol.for ? Symbol.for("react.element") : 60103;
  function s(A, j) {
    return j.clone !== !1 && j.isMergeableObject(A) ? L((x = A, Array.isArray(x) ? [] : {}), A, j) : A;
    var x;
  }
  function n(A, j, x) {
    return A.concat(j).map(function(k) {
      return s(k, x);
    });
  }
  function d(A) {
    return Object.keys(A).concat(function(j) {
      return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(j).filter(function(x) {
        return Object.propertyIsEnumerable.call(j, x);
      }) : [];
    }(A));
  }
  function P(A, j) {
    try {
      return j in A;
    } catch {
      return !1;
    }
  }
  function S(A, j, x) {
    var k = {};
    return x.isMergeableObject(A) && d(A).forEach(function(m) {
      k[m] = s(A[m], x);
    }), d(j).forEach(function(m) {
      (function(p, I) {
        return P(p, I) && !(Object.hasOwnProperty.call(p, I) && Object.propertyIsEnumerable.call(p, I));
      })(A, m) || (P(A, m) && x.isMergeableObject(j[m]) ? k[m] = function(p, I) {
        if (!I.customMerge)
          return L;
        var M = I.customMerge(p);
        return typeof M == "function" ? M : L;
      }(m, x)(A[m], j[m], x) : k[m] = s(j[m], x));
    }), k;
  }
  function L(A, j, x) {
    (x = x || {}).arrayMerge = x.arrayMerge || n, x.isMergeableObject = x.isMergeableObject || T, x.cloneUnlessOtherwiseSpecified = s;
    var k = Array.isArray(j);
    return k === Array.isArray(A) ? k ? x.arrayMerge(A, j, x) : S(A, j, x) : s(j, x);
  }
  L.all = function(A, j) {
    if (!Array.isArray(A))
      throw new Error("first argument should be an array");
    return A.reduce(function(x, k) {
      return L(x, k, j);
    }, {});
  };
  var $ = L;
  te.exports = $;
} }, Bt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  id: Rn,
  ids: Un,
  modules: Kn
}, Symbol.toStringTag, { value: "Module" })), Wn = 1458, Vn = [1458], Zn = { 412: (te, T, e) => {
  e.d(T, { _: () => A });
  class s {
    constructor(k) {
      this.config = k;
    }
    getConfig() {
      return this.config;
    }
    setConfig(k) {
      this.config = k;
    }
  }
  var n = e(7536), d = ["imageParamsKeyMap"];
  function P(x, k) {
    var m = Object.keys(x);
    if (Object.getOwnPropertySymbols) {
      var p = Object.getOwnPropertySymbols(x);
      k && (p = p.filter(function(I) {
        return Object.getOwnPropertyDescriptor(x, I).enumerable;
      })), m.push.apply(m, p);
    }
    return m;
  }
  function S(x) {
    for (var k = 1; k < arguments.length; k++) {
      var m = arguments[k] != null ? arguments[k] : {};
      k % 2 ? P(Object(m), !0).forEach(function(p) {
        $(x, p, m[p]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(x, Object.getOwnPropertyDescriptors(m)) : P(Object(m)).forEach(function(p) {
        Object.defineProperty(x, p, Object.getOwnPropertyDescriptor(m, p));
      });
    }
    return x;
  }
  function L(x, k) {
    if (x == null)
      return {};
    var m, p, I = function(E, z) {
      if (E == null)
        return {};
      var G, J, Z = {}, Q = Object.keys(E);
      for (J = 0; J < Q.length; J++)
        G = Q[J], z.indexOf(G) >= 0 || (Z[G] = E[G]);
      return Z;
    }(x, k);
    if (Object.getOwnPropertySymbols) {
      var M = Object.getOwnPropertySymbols(x);
      for (p = 0; p < M.length; p++)
        m = M[p], k.indexOf(m) >= 0 || Object.prototype.propertyIsEnumerable.call(x, m) && (I[m] = x[m]);
    }
    return I;
  }
  function $(x, k, m) {
    var p;
    return (k = typeof (p = function(I, M) {
      if (typeof I != "object" || !I)
        return I;
      var E = I[Symbol.toPrimitive];
      if (E !== void 0) {
        var z = E.call(I, M || "default");
        if (typeof z != "object")
          return z;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (M === "string" ? String : Number)(I);
    }(k, "string")) == "symbol" ? p : String(p)) in x ? Object.defineProperty(x, k, { value: m, enumerable: !0, configurable: !0, writable: !0 }) : x[k] = m, x;
  }
  class A {
    constructor(k) {
      var { init: m, listeners: p } = k;
      $(this, "_listeners", []), $(this, "config", new s({})), this.listeners = (I) => (this._listeners.forEach((M) => M.off()), this._listeners = p(I)), this.init = (I) => {
        var M = I, { imageParamsKeyMap: E } = M, z = L(M, d);
        return this.config.setConfig(S(S({}, this.config.getConfig()), z)), (0, n.A)(E), m(I);
      };
    }
  }
  class j {
    static register(k, m) {
      var p, I;
      j._mounted && ((p = k.listeners) === null || p === void 0 || p.call(k, m), (I = k.init) === null || I === void 0 || I.call(k, m)), j._initializers.push([k, m]);
    }
    static mount() {
      var k, m;
      j._mounted = !0, (k = j._initializers) === null || k === void 0 || k.forEach((p) => {
        var I, [M, E] = p;
        (I = M.listeners) === null || I === void 0 || I.call(M, E);
      }), (m = j._initializers) === null || m === void 0 || m.forEach((p) => {
        var I, [M, E] = p;
        (I = M.init) === null || I === void 0 || I.call(M, S({ imageParamsKeyMap: j._imageParamsKeyMap }, E));
      });
    }
    static setImageParamKeys(k) {
      j._imageParamsKeyMap = k;
    }
  }
  $(j, "_initializers", []), $(j, "_mounted", !1), $(j, "_imageParamsKeyMap", void 0);
}, 4154: (te, T, e) => {
  e.d(T, { k: () => B });
  var s = e(304), n = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i, d = /^(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)$/, P = /[\s\n\\/='"\0<>]/, S = /^xlink:?./, L = /["&<]/;
  function $(f) {
    if (L.test(f += "") === !1)
      return f;
    for (var _ = 0, D = 0, R = "", Y = ""; D < f.length; D++) {
      switch (f.charCodeAt(D)) {
        case 34:
          Y = "&quot;";
          break;
        case 38:
          Y = "&amp;";
          break;
        case 60:
          Y = "&lt;";
          break;
        default:
          continue;
      }
      D !== _ && (R += f.slice(_, D)), R += Y, _ = D + 1;
    }
    return D !== _ && (R += f.slice(_, D)), R;
  }
  var A = function(f, _) {
    return String(f).replace(/(\n+)/g, "$1" + (_ || "	"));
  }, j = function(f, _, D) {
    return String(f).length > 40 || String(f).indexOf(`
`) !== -1 || String(f).indexOf("<") !== -1;
  }, x = {}, k = /([A-Z])/g;
  function m(f) {
    var _ = "";
    for (var D in f) {
      var R = f[D];
      R != null && R !== "" && (_ && (_ += " "), _ += D[0] == "-" ? D : x[D] || (x[D] = D.replace(k, "-$1").toLowerCase()), _ = typeof R == "number" && n.test(D) === !1 ? _ + ": " + R + "px;" : _ + ": " + R + ";");
    }
    return _ || void 0;
  }
  function p(f, _) {
    return Array.isArray(_) ? _.reduce(p, f) : _ != null && _ !== !1 && f.push(_), f;
  }
  function I() {
    this.__d = !0;
  }
  function M(f, _) {
    return { __v: f, context: _, props: f.props, setState: I, forceUpdate: I, __d: !0, __h: [] };
  }
  function E(f, _) {
    var D = f.contextType, R = D && _[D.__c];
    return D != null ? R ? R.props.value : D.__ : _;
  }
  var z = [];
  function G(f, _, D, R, Y, W) {
    if (f == null || typeof f == "boolean")
      return "";
    if (typeof f != "object")
      return typeof f == "function" ? "" : $(f);
    var U = D.pretty, K = U && typeof U == "string" ? U : "	";
    if (Array.isArray(f)) {
      for (var H = "", l = 0; l < f.length; l++)
        U && l > 0 && (H += `
`), H += G(f[l], _, D, R, Y, W);
      return H;
    }
    if (f.constructor !== void 0)
      return "";
    var c, O = f.type, N = f.props, F = !1;
    if (typeof O == "function") {
      if (F = !0, !D.shallow || !R && D.renderRootComponent !== !1) {
        if (O === s.ae) {
          var V = [];
          return p(V, f.props.children), G(V, _, D, D.shallowHighOrder !== !1, Y, W);
        }
        var ee, ne = f.__c = M(f, _);
        s.s1.__b && s.s1.__b(f);
        var oe = s.s1.__r;
        if (O.prototype && typeof O.prototype.render == "function") {
          var pe = E(O, _);
          (ne = f.__c = new O(N, pe)).__v = f, ne._dirty = ne.__d = !0, ne.props = N, ne.state == null && (ne.state = {}), ne._nextState == null && ne.__s == null && (ne._nextState = ne.__s = ne.state), ne.context = pe, O.getDerivedStateFromProps ? ne.state = Object.assign({}, ne.state, O.getDerivedStateFromProps(ne.props, ne.state)) : ne.componentWillMount && (ne.componentWillMount(), ne.state = ne._nextState !== ne.state ? ne._nextState : ne.__s !== ne.state ? ne.__s : ne.state), oe && oe(f), ee = ne.render(ne.props, ne.state, ne.context);
        } else
          for (var _e = E(O, _), ae = 0; ne.__d && ae++ < 25; )
            ne.__d = !1, oe && oe(f), ee = O.call(f.__c, N, _e);
        return ne.getChildContext && (_ = Object.assign({}, _, ne.getChildContext())), s.s1.diffed && s.s1.diffed(f), G(ee, _, D, D.shallowHighOrder !== !1, Y, W);
      }
      O = (c = O).displayName || c !== Function && c.name || function(it) {
        var ct = (Function.prototype.toString.call(it).match(/^\s*function\s+([^( ]+)/) || "")[1];
        if (!ct) {
          for (var dt = -1, st = z.length; st--; )
            if (z[st] === it) {
              dt = st;
              break;
            }
          dt < 0 && (dt = z.push(it) - 1), ct = "UnnamedComponent" + dt;
        }
        return ct;
      }(c);
    }
    var Se, le, se = "<" + O;
    if (N) {
      var fe = Object.keys(N);
      D && D.sortAttributes === !0 && fe.sort();
      for (var be = 0; be < fe.length; be++) {
        var ue = fe[be], de = N[ue];
        if (ue !== "children") {
          if (!P.test(ue) && (D && D.allAttributes || ue !== "key" && ue !== "ref" && ue !== "__self" && ue !== "__source")) {
            if (ue === "defaultValue")
              ue = "value";
            else if (ue === "defaultChecked")
              ue = "checked";
            else if (ue === "defaultSelected")
              ue = "selected";
            else if (ue === "className") {
              if (N.class !== void 0)
                continue;
              ue = "class";
            } else
              Y && S.test(ue) && (ue = ue.toLowerCase().replace(/^xlink:?/, "xlink:"));
            if (ue === "htmlFor") {
              if (N.for)
                continue;
              ue = "for";
            }
            ue === "style" && de && typeof de == "object" && (de = m(de)), ue[0] === "a" && ue[1] === "r" && typeof de == "boolean" && (de = String(de));
            var we = D.attributeHook && D.attributeHook(ue, de, _, D, F);
            if (we || we === "")
              se += we;
            else if (ue === "dangerouslySetInnerHTML")
              le = de && de.__html;
            else if (O === "textarea" && ue === "value")
              Se = de;
            else if ((de || de === 0 || de === "") && typeof de != "function") {
              if (!(de !== !0 && de !== "" || (de = ue, D && D.xml))) {
                se = se + " " + ue;
                continue;
              }
              if (ue === "value") {
                if (O === "select") {
                  W = de;
                  continue;
                }
                O === "option" && W == de && N.selected === void 0 && (se += " selected");
              }
              se = se + " " + ue + '="' + $(de) + '"';
            }
          }
        } else
          Se = de;
      }
    }
    if (U) {
      var xe = se.replace(/\n\s*/, " ");
      xe === se || ~xe.indexOf(`
`) ? U && ~se.indexOf(`
`) && (se += `
`) : se = xe;
    }
    if (se += ">", P.test(O))
      throw new Error(O + " is not a valid HTML tag name in " + se);
    var Ie, Ae = d.test(O) || D.voidElements && D.voidElements.test(O), je = [];
    if (le)
      U && j(le) && (le = `
` + K + A(le, K)), se += le;
    else if (Se != null && p(Ie = [], Se).length) {
      for (var De = U && ~se.indexOf(`
`), Ce = !1, Be = 0; Be < Ie.length; Be++) {
        var Ke = Ie[Be];
        if (Ke != null && Ke !== !1) {
          var Ze = G(Ke, _, D, !0, O === "svg" || O !== "foreignObject" && Y, W);
          if (U && !De && j(Ze) && (De = !0), Ze)
            if (U) {
              var at = Ze.length > 0 && Ze[0] != "<";
              Ce && at ? je[je.length - 1] += Ze : je.push(Ze), Ce = at;
            } else
              je.push(Ze);
        }
      }
      if (U && De)
        for (var We = je.length; We--; )
          je[We] = `
` + K + A(je[We], K);
    }
    if (je.length || le)
      se += je.join("");
    else if (D && D.xml)
      return se.substring(0, se.length - 1) + " />";
    return !Ae || Ie || le ? (U && ~se.indexOf(`
`) && (se += `
`), se = se + "</" + O + ">") : se = se.replace(/>$/, " />"), se;
  }
  var J = { shallow: !0 };
  Q.render = Q;
  var Z = [];
  function Q(f, _, D) {
    _ = _ || {};
    var R = s.s1.__s;
    s.s1.__s = !0;
    var Y, W = (0, s.h)(s.ae, null);
    return W.__k = [f], Y = D && (D.pretty || D.voidElements || D.sortAttributes || D.shallow || D.allAttributes || D.xml || D.attributeHook) ? G(f, _, D) : C(f, _, !1, void 0, W), s.s1.__c && s.s1.__c(f, Z), s.s1.__s = R, Z.length = 0, Y;
  }
  function q(f) {
    return f == null || typeof f == "boolean" ? null : typeof f == "string" || typeof f == "number" || typeof f == "bigint" ? (0, s.h)(null, null, f) : f;
  }
  function w(f, _) {
    return f === "className" ? "class" : f === "htmlFor" ? "for" : f === "defaultValue" ? "value" : f === "defaultChecked" ? "checked" : f === "defaultSelected" ? "selected" : _ && S.test(f) ? f.toLowerCase().replace(/^xlink:?/, "xlink:") : f;
  }
  function b(f, _) {
    return f === "style" && _ != null && typeof _ == "object" ? m(_) : f[0] === "a" && f[1] === "r" && typeof _ == "boolean" ? String(_) : _;
  }
  var o = Array.isArray, v = Object.assign;
  function C(f, _, D, R, Y) {
    if (f == null || f === !0 || f === !1 || f === "")
      return "";
    if (typeof f != "object")
      return typeof f == "function" ? "" : $(f);
    if (o(f)) {
      var W = "";
      Y.__k = f;
      for (var U = 0; U < f.length; U++)
        W += C(f[U], _, D, R, Y), f[U] = q(f[U]);
      return W;
    }
    if (f.constructor !== void 0)
      return "";
    f.__ = Y, s.s1.__b && s.s1.__b(f);
    var K = f.type, H = f.props;
    if (typeof K == "function") {
      var l;
      if (K === s.ae)
        l = H.children;
      else {
        l = K.prototype && typeof K.prototype.render == "function" ? function(fe, be) {
          var ue = fe.type, de = E(ue, be), we = new ue(fe.props, de);
          fe.__c = we, we.__v = fe, we.__d = !0, we.props = fe.props, we.state == null && (we.state = {}), we.__s == null && (we.__s = we.state), we.context = de, ue.getDerivedStateFromProps ? we.state = v({}, we.state, ue.getDerivedStateFromProps(we.props, we.state)) : we.componentWillMount && (we.componentWillMount(), we.state = we.__s !== we.state ? we.__s : we.state);
          var xe = s.s1.__r;
          return xe && xe(fe), we.render(we.props, we.state, we.context);
        }(f, _) : function(fe, be) {
          var ue, de = M(fe, be), we = E(fe.type, be);
          fe.__c = de;
          for (var xe = s.s1.__r, Ie = 0; de.__d && Ie++ < 25; )
            de.__d = !1, xe && xe(fe), ue = fe.type.call(de, fe.props, we);
          return ue;
        }(f, _);
        var c = f.__c;
        c.getChildContext && (_ = v({}, _, c.getChildContext()));
      }
      var O = C(l = l != null && l.type === s.ae && l.key == null ? l.props.children : l, _, D, R, f);
      return s.s1.diffed && s.s1.diffed(f), f.__ = void 0, s.s1.unmount && s.s1.unmount(f), O;
    }
    var N, F, V = "<";
    if (V += K, H)
      for (var ee in N = H.children, H) {
        var ne = H[ee];
        if (!(ee === "key" || ee === "ref" || ee === "__self" || ee === "__source" || ee === "children" || ee === "className" && "class" in H || ee === "htmlFor" && "for" in H || P.test(ee))) {
          if (ne = b(ee = w(ee, D), ne), ee === "dangerouslySetInnerHTML")
            F = ne && ne.__html;
          else if (K === "textarea" && ee === "value")
            N = ne;
          else if ((ne || ne === 0 || ne === "") && typeof ne != "function") {
            if (ne === !0 || ne === "") {
              ne = ee, V = V + " " + ee;
              continue;
            }
            if (ee === "value") {
              if (K === "select") {
                R = ne;
                continue;
              }
              K !== "option" || R != ne || "selected" in H || (V += " selected");
            }
            V = V + " " + ee + '="' + $(ne) + '"';
          }
        }
      }
    var oe = V;
    if (V += ">", P.test(K))
      throw new Error(K + " is not a valid HTML tag name in " + V);
    var pe = "", _e = !1;
    if (F)
      pe += F, _e = !0;
    else if (typeof N == "string")
      pe += $(N), _e = !0;
    else if (o(N)) {
      f.__k = N;
      for (var ae = 0; ae < N.length; ae++) {
        var Se = N[ae];
        if (N[ae] = q(Se), Se != null && Se !== !1) {
          var le = C(Se, _, K === "svg" || K !== "foreignObject" && D, R, f);
          le && (pe += le, _e = !0);
        }
      }
    } else if (N != null && N !== !1 && N !== !0) {
      f.__k = [q(N)];
      var se = C(N, _, K === "svg" || K !== "foreignObject" && D, R, f);
      se && (pe += se, _e = !0);
    }
    if (s.s1.diffed && s.s1.diffed(f), f.__ = void 0, s.s1.unmount && s.s1.unmount(f), _e)
      V += pe;
    else if (d.test(K))
      return oe + " />";
    return V + "</" + K + ">";
  }
  Q.shallowRender = function(f, _) {
    return Q(f, _, J);
  };
  const r = Q;
  var t = e(1044), u = e(8412);
  function h(f, _) {
    var D = Object.keys(f);
    if (Object.getOwnPropertySymbols) {
      var R = Object.getOwnPropertySymbols(f);
      _ && (R = R.filter(function(Y) {
        return Object.getOwnPropertyDescriptor(f, Y).enumerable;
      })), D.push.apply(D, R);
    }
    return D;
  }
  function i(f) {
    for (var _ = 1; _ < arguments.length; _++) {
      var D = arguments[_] != null ? arguments[_] : {};
      _ % 2 ? h(Object(D), !0).forEach(function(R) {
        a(f, R, D[R]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(f, Object.getOwnPropertyDescriptors(D)) : h(Object(D)).forEach(function(R) {
        Object.defineProperty(f, R, Object.getOwnPropertyDescriptor(D, R));
      });
    }
    return f;
  }
  function a(f, _, D) {
    return _ = function(R) {
      var Y = function(W, U) {
        if (typeof W != "object" || !W)
          return W;
        var K = W[Symbol.toPrimitive];
        if (K !== void 0) {
          var H = K.call(W, U || "default");
          if (typeof H != "object")
            return H;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (U === "string" ? String : Number)(W);
      }(R, "string");
      return typeof Y == "symbol" ? Y : String(Y);
    }(_), _ in f ? Object.defineProperty(f, _, { value: D, enumerable: !0, configurable: !0, writable: !0 }) : f[_] = D, f;
  }
  function g(f, _, D, R, Y, W, U) {
    try {
      var K = f[W](U), H = K.value;
    } catch (l) {
      return void D(l);
    }
    K.done ? _(H) : Promise.resolve(H).then(R, Y);
  }
  function y(f) {
    return function() {
      var _ = this, D = arguments;
      return new Promise(function(R, Y) {
        var W = f.apply(_, D);
        function U(H) {
          g(W, R, Y, U, K, "next", H);
        }
        function K(H) {
          g(W, R, Y, U, K, "throw", H);
        }
        U(void 0);
      });
    };
  }
  class B {
    constructor(_) {
      this._provider = _;
    }
    render(_, D) {
      var R = this;
      return function() {
        var Y = y(function* (W) {
          var U, K;
          if (!_)
            throw new Error("Component is not defined");
          if (!W)
            throw new Error("Root element is not defined");
          var H = (U = yield (K = _.getInitialData) === null || K === void 0 ? void 0 : K.call(_, D)) !== null && U !== void 0 ? U : {};
          (0, s.ai)((0, u.im)(t.o, i(i({ node: R._provider }, R._provider.props), {}, { children: (0, u.im)(_, i(i({}, D), {}, { initialData: H })) })), W);
        });
        return function(W) {
          return Y.apply(this, arguments);
        };
      }();
    }
    unmount(_) {
      if (!_)
        throw new Error("Root element is not defined");
      (0, s.ai)(null, _);
    }
    toString(_, D, R) {
      var Y = this;
      return y(function* () {
        var W, U;
        if (!_)
          throw new Error("Component is not defined");
        var K = (W = yield (U = _.getInitialData) === null || U === void 0 ? void 0 : U.call(_, D)) !== null && W !== void 0 ? W : {};
        return r((0, u.im)(t.o, i(i({ node: Y._provider }, Y._provider.props), {}, { children: (0, u.im)(_, i(i({}, D), {}, { initialData: K })) })), {}, i({}, R));
      })();
    }
  }
}, 1044: (te, T, e) => {
  e.d(T, { o: () => A });
  var s = e(4944), n = e(8412), d = ["node"];
  function P(j, x) {
    var k = Object.keys(j);
    if (Object.getOwnPropertySymbols) {
      var m = Object.getOwnPropertySymbols(j);
      x && (m = m.filter(function(p) {
        return Object.getOwnPropertyDescriptor(j, p).enumerable;
      })), k.push.apply(k, m);
    }
    return k;
  }
  function S(j) {
    for (var x = 1; x < arguments.length; x++) {
      var k = arguments[x] != null ? arguments[x] : {};
      x % 2 ? P(Object(k), !0).forEach(function(m) {
        L(j, m, k[m]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(j, Object.getOwnPropertyDescriptors(k)) : P(Object(k)).forEach(function(m) {
        Object.defineProperty(j, m, Object.getOwnPropertyDescriptor(k, m));
      });
    }
    return j;
  }
  function L(j, x, k) {
    var m;
    return (x = typeof (m = function(p, I) {
      if (typeof p != "object" || !p)
        return p;
      var M = p[Symbol.toPrimitive];
      if (M !== void 0) {
        var E = M.call(p, I || "default");
        if (typeof E != "object")
          return E;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (I === "string" ? String : Number)(p);
    }(x, "string")) == "symbol" ? m : String(m)) in j ? Object.defineProperty(j, x, { value: k, enumerable: !0, configurable: !0, writable: !0 }) : j[x] = k, j;
  }
  function $(j, x) {
    if (j == null)
      return {};
    var k, m, p = function(M, E) {
      if (M == null)
        return {};
      var z, G, J = {}, Z = Object.keys(M);
      for (G = 0; G < Z.length; G++)
        z = Z[G], E.indexOf(z) >= 0 || (J[z] = M[z]);
      return J;
    }(j, x);
    if (Object.getOwnPropertySymbols) {
      var I = Object.getOwnPropertySymbols(j);
      for (m = 0; m < I.length; m++)
        k = I[m], x.indexOf(k) >= 0 || Object.prototype.propertyIsEnumerable.call(j, k) && (p[k] = j[k]);
    }
    return p;
  }
  function A(j) {
    var { node: x } = j, k = $(j, d);
    return x ? Array.isArray(x) ? (0, n.im)(n.ae, { children: x.map((m, p) => (0, n.im)(A, S({ node: m, className: k.className }, k), p)) }) : (k.className = (0, s.i)([x.props.className, k.className]), (0, n.im)(x.type, S(S({ ref: x.ref }, x.props), k), x.key)) : null;
  }
} }, Qn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  id: Wn,
  ids: Vn,
  modules: Zn
}, Symbol.toStringTag, { value: "Module" })), Jn = 8064, Xn = [8064], er = { 1212: (te, T, e) => {
  e.d(T, { m: () => P });
  var s = e(3584), n = e(1092);
  function d(S, L, $, A, j, x, k) {
    try {
      var m = S[x](k), p = m.value;
    } catch (I) {
      return void $(I);
    }
    m.done ? L(p) : Promise.resolve(p).then(A, j);
  }
  var P = function() {
    var S, L = (S = function* () {
      var $, { data: A, errors: j } = yield (0, s.CA)(`
  query fetchAddressFormFields {
    attributesForm(formCode: "customer_register_address") {
      items {
        frontend_input
        code
        label
        default_value
        is_required
        options {
          label
          value
          is_default
        }
        ... on CustomerAttributeMetadata {
          multiline_count
          sort_order
          validate_rules {
            name
            value
          }
        }
      }
      errors {
        message
        type
      }
    }
  }
`, { method: "GET", cache: "no-cache" }).catch(n.i);
      if (j)
        throw Error(j.map((x) => x.message).join(" "));
      return (A == null || ($ = A.attributesForm) === null || $ === void 0 ? void 0 : $.items) || [];
    }, function() {
      var $ = this, A = arguments;
      return new Promise(function(j, x) {
        var k = S.apply($, A);
        function m(I) {
          d(k, j, x, m, p, "next", I);
        }
        function p(I) {
          d(k, j, x, m, p, "throw", I);
        }
        m(void 0);
      });
    });
    return function() {
      return L.apply(this, arguments);
    };
  }();
}, 152: (te, T, e) => {
  e.d(T, { K: () => S });
  var s = e(3584), n = e(1092), d = e(764);
  function P(L, $, A, j, x, k, m) {
    try {
      var p = L[k](m), I = p.value;
    } catch (M) {
      return void A(M);
    }
    p.done ? $(I) : Promise.resolve(I).then(j, x);
  }
  var S = function() {
    var L, $ = (L = function* () {
      return (0, s.CA)(`
query getCountries {
    countries {
      two_letter_abbreviation
      full_name_locale
    }
}`, { method: "GET", cache: "no-cache" }).then((A) => {
        var { data: j, errors: x } = A;
        return x && (0, d.Y)(x), ((k) => {
          if (k)
            return k.filter((m) => !!m).filter((m) => {
              var { two_letter_abbreviation: p, full_name_locale: I } = m;
              return !!p && !!I;
            }).map((m) => {
              var { two_letter_abbreviation: p, full_name_locale: I } = m;
              return { value: p, label: I };
            });
        })(j.countries);
      }).catch(n.i);
    }, function() {
      var A = this, j = arguments;
      return new Promise(function(x, k) {
        var m = L.apply(A, j);
        function p(M) {
          P(m, x, k, p, I, "next", M);
        }
        function I(M) {
          P(m, x, k, p, I, "throw", M);
        }
        p(void 0);
      });
    });
    return function() {
      return $.apply(this, arguments);
    };
  }();
}, 1036: (te, T, e) => {
  e.d(T, { a: () => k });
  var s = e(3584), n = e(5912), d = e(2256), P = e(4723), S = e(2148);
  function L(m) {
    return m === 1 ? P.m.ExcludingTax : m === 2 ? P.m.IncludingTax : m === 3 ? P.m.IncludingAndExcludingTax : P.m.ExcludingTax;
  }
  function $(m) {
    switch (m) {
      case n.ow.DisplayExcludingTax:
        return P.m.ExcludingTax;
      case n.ow.DisplayIncludingTax:
        return P.m.IncludingTax;
      case n.ow.DisplayTypeBoth:
        return P.m.IncludingAndExcludingTax;
    }
  }
  var A = e(764), j = e(1092);
  function x(m, p, I, M, E, z, G) {
    try {
      var J = m[z](G), Z = J.value;
    } catch (Q) {
      return void I(Q);
    }
    J.done ? p(Z) : Promise.resolve(Z).then(M, E);
  }
  var k = function() {
    var m, p = (m = function* () {
      return (0, s.CA)(`
  query getStoreConfig {
    storeConfig {
      cart_summary_display_quantity
      countries_with_required_region
      default_country
      display_state_if_optional
      is_guest_checkout_enabled
      is_one_page_checkout_enabled
      locale
      max_items_in_order_summary
      optional_zip_countries
      shopping_cart_display_full_summary
      shopping_cart_display_grand_total
      shopping_cart_display_price
      shopping_cart_display_shipping
      shopping_cart_display_subtotal
      shopping_cart_display_tax_gift_wrapping
      shopping_cart_display_zero_tax
      store_code
    }
  }
`, { method: "GET", cache: "no-cache" }).then((I) => {
        var { data: M, errors: E } = I;
        return (0, A.Y)(E), function(z) {
          if (!z)
            return d.IJ;
          var G, { default_country: J, countries_with_required_region: Z, display_state_if_optional: Q, optional_zip_countries: q, is_guest_checkout_enabled: w, is_one_page_checkout_enabled: b, shopping_cart_display_price: o, shopping_cart_display_shipping: v, shopping_cart_display_subtotal: C, shopping_cart_display_tax_gift_wrapping: r, shopping_cart_display_grand_total: t, shopping_cart_display_full_summary: u, shopping_cart_display_zero_tax: h, max_items_in_order_summary: i, cart_summary_display_quantity: a } = z;
          return { defaultCountry: J || d.IJ.defaultCountry, countriesWithRequiredRegion: (Z == null ? void 0 : Z.split(",")) || d.IJ.countriesWithRequiredRegion, displayStateIfOptional: Q || d.IJ.displayStateIfOptional, countriesWithOptionalZipCode: (q == null ? void 0 : q.split(",")) || d.IJ.countriesWithOptionalZipCode, isGuestCheckoutEnabled: w || d.IJ.isGuestCheckoutEnabled, isOnePageCheckoutEnabled: b || d.IJ.isOnePageCheckoutEnabled, taxCartDisplay: { shoppingCartDisplayPrice: o ? L(o) : d.IJ.taxCartDisplay.shoppingCartDisplayPrice, shoppingCartDisplayShipping: v ? L(v) : d.IJ.taxCartDisplay.shoppingCartDisplayShipping, shoppingCartDisplaySubtotal: C ? L(C) : d.IJ.taxCartDisplay.shoppingCartDisplaySubtotal, shoppingCartDisplayGiftWrapping: r ? $(r) : d.IJ.taxCartDisplay.shoppingCartDisplayGiftWrapping, shoppingCartDisplayGrandTotal: t || d.IJ.taxCartDisplay.shoppingCartDisplayGrandTotal, shoppingCartDisplayFullSummary: u || d.IJ.taxCartDisplay.shoppingCartDisplayFullSummary, shoppingCartDisplayZeroTax: h || d.IJ.taxCartDisplay.shoppingCartDisplayZeroTax }, cartSummaryMaxItems: i || d.IJ.cartSummaryMaxItems, cartSummaryTotalDisplay: (0, S.q)(a) ? d.IJ.cartSummaryTotalDisplay : (G = a, G === 0 ? P.E.Rows : P.E.Quantity) };
        }(M == null ? void 0 : M.storeConfig);
      }).catch(j.i);
    }, function() {
      var I = this, M = arguments;
      return new Promise(function(E, z) {
        var G = m.apply(I, M);
        function J(Q) {
          x(G, E, z, J, Z, "next", Q);
        }
        function Z(Q) {
          x(G, E, z, J, Z, "throw", Q);
        }
        J(void 0);
      });
    });
    return function() {
      return p.apply(this, arguments);
    };
  }();
}, 7540: (te, T, e) => {
  function s(A, j) {
    var x = Object.keys(A);
    if (Object.getOwnPropertySymbols) {
      var k = Object.getOwnPropertySymbols(A);
      j && (k = k.filter(function(m) {
        return Object.getOwnPropertyDescriptor(A, m).enumerable;
      })), x.push.apply(x, k);
    }
    return x;
  }
  function n(A, j, x) {
    var k;
    return (j = typeof (k = function(m, p) {
      if (typeof m != "object" || !m)
        return m;
      var I = m[Symbol.toPrimitive];
      if (I !== void 0) {
        var M = I.call(m, p || "default");
        if (typeof M != "object")
          return M;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (p === "string" ? String : Number)(m);
    }(j, "string")) == "symbol" ? k : String(k)) in A ? Object.defineProperty(A, j, { value: x, enumerable: !0, configurable: !0, writable: !0 }) : A[j] = x, A;
  }
  function d(A, j, x, k, m, p, I) {
    try {
      var M = A[p](I), E = M.value;
    } catch (z) {
      return void x(z);
    }
    M.done ? j(E) : Promise.resolve(E).then(k, m);
  }
  e.d(T, { E: () => $, i: () => L });
  var P, S, L = new (e(412))._({ init: (P = function* (A) {
    var j = function(x) {
      for (var k = 1; k < arguments.length; k++) {
        var m = arguments[k] != null ? arguments[k] : {};
        k % 2 ? s(Object(m), !0).forEach(function(p) {
          n(x, p, m[p]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(x, Object.getOwnPropertyDescriptors(m)) : s(Object(m)).forEach(function(p) {
          Object.defineProperty(x, p, Object.getOwnPropertyDescriptor(m, p));
        });
      }
      return x;
    }({ guestViewCookieExpirationDays: 30 }, A);
    L.config.setConfig(j);
  }, S = function() {
    var A = this, j = arguments;
    return new Promise(function(x, k) {
      var m = P.apply(A, j);
      function p(M) {
        d(m, x, k, p, I, "next", M);
      }
      function I(M) {
        d(m, x, k, p, I, "throw", M);
      }
      p(void 0);
    });
  }, function(A) {
    return S.apply(this, arguments);
  }), listeners: () => [] }), $ = L.config;
}, 2236: (te, T, e) => {
  e.d(T, { Y: () => L, q: () => $ });
  var s = e(304), n = e(8596), d = e(1212), P = e(8412), S = (0, s.GY)(void 0);
  function L(A) {
    var { children: j } = A, [x, k] = (0, n.oT)({});
    return (0, n.YB)(() => {
      (0, d.m)().then((m) => k({ fields: m }));
    }, []), (0, P.im)(S.Provider, { value: x, children: j });
  }
  function $() {
    var A = (0, n.Co)(S);
    if (A !== void 0)
      return A;
    throw new Error("useAddressFormFields must be used within an AddressFormFieldsProvider");
  }
}, 5020: (te, T, e) => {
  e.d(T, { W: () => L, o: () => $ });
  var s = e(304), n = e(8596), d = e(152), P = e(8412), S = (0, s.GY)(void 0);
  function L(A) {
    var { children: j } = A, [x, k] = (0, n.oT)({});
    return (0, n.YB)(() => {
      (0, d.K)().then((m) => k({ countries: m }));
    }, []), (0, P.im)(S.Provider, { value: x, children: j });
  }
  function $() {
    var A = (0, n.Co)(S);
    if (A !== void 0)
      return A;
    throw new Error("useCountries must be used within a CountriesProvider");
  }
}, 4540: (te, T, e) => {
  e.d(T, { AJ: () => L, mA: () => S });
  var s = e(304), n = e(8596), d = e(8412), P = (0, s.GY)({});
  function S($) {
    var { children: A, services: j } = $;
    return (0, d.im)(P.Provider, { value: j, children: A });
  }
  function L() {
    var $ = (0, n.Co)(P);
    if ($ !== void 0)
      return $;
    throw new Error("useServices must be used within a ServicesProvider");
  }
}, 2256: (te, T, e) => {
  e.d(T, { EV: () => A, IJ: () => L, o3: () => j });
  var s = e(1036), n = e(4723), d = e(304), P = e(8596), S = e(8412), L = { defaultCountry: "US", countriesWithRequiredRegion: [], displayStateIfOptional: !1, countriesWithOptionalZipCode: [], isGuestCheckoutEnabled: !1, isOnePageCheckoutEnabled: !1, taxCartDisplay: { shoppingCartDisplayPrice: n.m.ExcludingTax, shoppingCartDisplayShipping: n.m.ExcludingTax, shoppingCartDisplaySubtotal: n.m.ExcludingTax, shoppingCartDisplayGiftWrapping: n.m.ExcludingTax, shoppingCartDisplayGrandTotal: !1, shoppingCartDisplayFullSummary: !1, shoppingCartDisplayZeroTax: !1 }, cartSummaryMaxItems: 10, cartSummaryTotalDisplay: n.E.Quantity }, $ = (0, d.GY)(void 0), A = (x) => {
    var { children: k } = x, [m, p] = (0, P.oT)();
    return (0, P.YB)(() => {
      (0, s.a)().then((I) => {
        p(I);
      }).catch(() => {
        console.error("Failed to fetch store config"), p(L);
      });
    }, []), (0, S.im)($.Provider, { value: { config: m }, children: k });
  };
  function j() {
    var x = (0, P.Co)($);
    if (x !== void 0)
      return x;
    throw new Error("useStore must be used within a StoreProvider");
  }
}, 4723: (te, T, e) => {
  e.d(T, { E: () => n, m: () => s });
  var s = function(d) {
    return d[d.ExcludingTax = 1] = "ExcludingTax", d[d.IncludingTax = 2] = "IncludingTax", d[d.IncludingAndExcludingTax = 3] = "IncludingAndExcludingTax", d;
  }({}), n = function(d) {
    return d[d.Rows = 0] = "Rows", d[d.Quantity = 1] = "Quantity", d;
  }({});
}, 764: (te, T, e) => {
  e.d(T, { Y: () => s });
  var s = (n) => {
    if (n)
      throw Error(n.map((d) => d.message).join(" "));
  };
}, 4317: (te, T, e) => {
  e.d(T, { C: () => G, a: () => J });
  var s = e(4154), n = e(4540), d = e(2256), P = e(2236), S = e(5020);
  class L {
    constructor(Q, q) {
      this.namespace = Q, this.repository = q;
    }
    namespaced(Q) {
      return "".concat(this.namespace, ":").concat(Q);
    }
    backup(Q, q) {
      return this.repository.setItem(this.namespaced(Q), JSON.stringify(q));
    }
    restore(Q) {
      var q = this.repository.getItem(this.namespaced(Q));
      return q ? JSON.parse(q) : null;
    }
    remove(Q) {
      return this.repository.removeItem(this.namespaced(Q));
    }
    clear() {
      this.repository.getKeys().filter((Q) => Q.startsWith(this.namespace)).forEach((Q) => {
        this.repository.removeItem(Q);
      });
    }
  }
  class $ {
    isAvailable() {
      return !!window.localStorage;
    }
    getKeys() {
      return this.isAvailable() ? Object.keys(window.localStorage) : [];
    }
    setItem(Q, q) {
      this.isAvailable() && window.localStorage.setItem(Q, q);
    }
    getItem(Q) {
      return this.isAvailable() ? window.localStorage.getItem(Q) : null;
    }
    removeItem(Q) {
      this.isAvailable() && window.localStorage.removeItem(Q);
    }
  }
  var A = e(9188), j = e(7540), x = e(8122), k = e(8596), m = e(9952), p = e.n(m), I = e(8412), M = { default: e(2880) }, E = (Z) => {
    var Q, { children: q } = Z, [w, b] = (0, k.oT)(), o = (Q = j.E.getConfig()) === null || Q === void 0 ? void 0 : Q.langDefinitions;
    (0, k.YB)(() => {
      var C = x.events.on("locale", (r) => {
        r !== w && b(r);
      }, { eager: !0 });
      return () => {
        C == null || C.off();
      };
    }, [w]);
    var v = p()(M, o ?? {});
    return (0, I.im)(A.C, { lang: w, langDefinitions: v, children: q });
  }, z = (Z) => {
    var { children: Q } = Z, q = (0, k.bB)(() => new L("DROPIN__CHECKOUT", new $()), []);
    return (0, I.im)(n.mA, { services: { backupService: q }, children: (0, I.im)(d.EV, { children: (0, I.im)(P.Y, { children: (0, I.im)(S.W, { children: Q }) }) }) });
  }, G = (Z) => {
    var { children: Q } = Z;
    return (0, I.im)(z, { children: (0, I.im)(E, { children: Q }) });
  }, J = new s.k((0, I.im)(G, {}));
}, 8122: (te, T, e) => {
  te.exports = ((s) => {
    var n = {};
    return e.d(n, s), n;
  })({ events: () => _t });
}, 8616: (te, T, e) => {
  te.exports = ((s) => {
    var n = {};
    return e.d(n, s), n;
  })({ FetchGraphQL: () => Ot });
}, 2880: (te) => {
  te.exports = JSON.parse(`{"Checkout":{"title":"Checkout","LoginForm":{"title":"Contact details","account":"Already have an account?","ariaLabel":"Email","invalidEmailError":"Please enter a valid email address.","missingEmailError":"Enter an email address.","emailExists":"It looks like you already have an account. Sign in for a faster checkout.","floatingLabel":"Email *","placeholder":"Enter your email address","signIn":"Sign in"},"ShippingMethods":{"title":"Shipping options","emptyState":"This order can't be shipped to the address provided. Please review the address details you entered and make sure they're correct."},"ShippingAddress":{"title":"Delivery"},"BillingAddress":{"title":"Billing Address"},"AddressForm":{"Validity":{"badInput":"Provide a valid {field}.","patternMismatch":"Ensure you have entered a correct {field} format.","rangeOverflow":"Choose a valid {field} within the allowed range.","rangeUnderflow":"Choose a valid {field} within the allowed range.","tooLong":"This entry is too long. Keep it under {field} characters.","tooShort":"Use at least {field} characters.","typeMismatch":"Enter a valid {field}.","valueMissing":"Enter a {field}, this field is required."}},"BillToShippingAddress":{"title":"Bill to shipping address"},"PaymentMethods":{"title":"Payment","emptyState":"No payment methods available"},"OrderSummary":{"title":"Order summary","total":"Total","totalExclTax":"Total excluding taxes","subtotal":"Subtotal","tax":"Tax","taxTotal":"Tax total","taxBreakdown":"Taxes","includingTaxes":"Including taxes","shipping":"Shipping","estimatedShipping":"Estimated shipping","freeShipping":"Free"},"CartSummary":{"title":"Your cart","editCart":"Edit","viewAll":"View all in cart","viewMore":"View more","GiftCard":{"sender":"From","recipient":"To","message":"Note"},"Downloadable":{"download":"Download","files":{"none":"No files","one":"1 file","many":"{{count}} files"}}},"OutOfStock":{"title":"Out of stock","message":"Your cart contains items that are out of stock or have limited availability. Please review your cart before placing the order.","button":"Review cart","lowInventory":{"one":"Last item!","many":"Only {{count}} left!"},"alert":"Out of stock!"},"PlaceOrder":{"button":"Place Order"},"ServerError":{"title":"We were unable to process your order","contactSupport":"If you continue to have issues, please contact support.","unexpected":"An unexpected error occurred while processing your order. Please try again later.","button":"Try again"},"EmptyCart":{"title":"Your cart is empty","button":"Start shopping"},"ErrorBanner":{"genericMessage":"Server error detected. Please check your connection and try again."}}}`);
} };
Fe.C(kt);
Fe.C(Mt);
Fe.C(Bt);
Fe.C(Qn);
Fe.C(St);
Fe.C(Ht);
var It, $t = (It = 4317, Fe(Fe.s = It)), tr = $t.C, qt = $t.a;
const nr = 4928, rr = [4928], ir = { 1520: (te, T, e) => {
  e.d(T, { OC: () => I });
  var s = e(304), n = e(8596);
  function d() {
    throw new Error("Cycle detected");
  }
  var P = Symbol.for("preact-signals");
  function S() {
    if (j > 1)
      j--;
    else {
      for (var r, t = !1; A !== void 0; ) {
        var u = A;
        for (A = void 0, x++; u !== void 0; ) {
          var h = u.o;
          if (u.o = void 0, u.f &= -3, !(8 & u.f) && M(u))
            try {
              u.c();
            } catch (i) {
              t || (r = i, t = !0);
            }
          u = h;
        }
      }
      if (x = 0, j--, t)
        throw r;
    }
  }
  var L = void 0, $, A = void 0, j = 0, x = 0, k = 0;
  function m(r) {
    if (L !== void 0) {
      var t = r.n;
      if (t === void 0 || t.t !== L)
        return t = { i: 0, S: r, p: L.s, n: void 0, t: L, e: void 0, x: void 0, r: t }, L.s !== void 0 && (L.s.n = t), L.s = t, r.n = t, 32 & L.f && r.S(t), t;
      if (t.i === -1)
        return t.i = 0, t.n !== void 0 && (t.n.p = t.p, t.p !== void 0 && (t.p.n = t.n), t.p = L.s, t.n = void 0, L.s.n = t, L.s = t), t;
    }
  }
  function p(r) {
    this.v = r, this.i = 0, this.n = void 0, this.t = void 0;
  }
  function I(r) {
    return new p(r);
  }
  function M(r) {
    for (var t = r.s; t !== void 0; t = t.n)
      if (t.S.i !== t.i || !t.S.h() || t.S.i !== t.i)
        return !0;
    return !1;
  }
  function E(r) {
    for (var t = r.s; t !== void 0; t = t.n) {
      var u = t.S.n;
      if (u !== void 0 && (t.r = u), t.S.n = t, t.i = -1, t.n === void 0) {
        r.s = t;
        break;
      }
    }
  }
  function z(r) {
    for (var t = r.s, u = void 0; t !== void 0; ) {
      var h = t.p;
      t.i === -1 ? (t.S.U(t), h !== void 0 && (h.n = t.n), t.n !== void 0 && (t.n.p = h)) : u = t, t.S.n = t.r, t.r !== void 0 && (t.r = void 0), t = h;
    }
    r.s = u;
  }
  function G(r) {
    p.call(this, void 0), this.x = r, this.s = void 0, this.g = k - 1, this.f = 4;
  }
  function J(r) {
    var t = r.u;
    if (r.u = void 0, typeof t == "function") {
      j++;
      var u = L;
      L = void 0;
      try {
        t();
      } catch (h) {
        throw r.f &= -2, r.f |= 8, Z(r), h;
      } finally {
        L = u, S();
      }
    }
  }
  function Z(r) {
    for (var t = r.s; t !== void 0; t = t.n)
      t.S.U(t);
    r.x = void 0, r.s = void 0, J(r);
  }
  function Q(r) {
    if (L !== this)
      throw new Error("Out-of-order effect");
    z(this), L = r, this.f &= -2, 8 & this.f && Z(this), S();
  }
  function q(r) {
    this.x = r, this.u = void 0, this.s = void 0, this.o = void 0, this.f = 32;
  }
  function w(r) {
    var t = new q(r);
    try {
      t.c();
    } catch (u) {
      throw t.d(), u;
    }
    return t.d.bind(t);
  }
  function b(r, t) {
    s.s1[r] = t.bind(null, s.s1[r] || function() {
    });
  }
  function o(r) {
    $ && $(), $ = r && r.S();
  }
  function v(r) {
    var t = this, u = r.data, h = function(a) {
      return (0, n.bB)(function() {
        return I(a);
      }, []);
    }(u);
    h.value = u;
    var i = (0, n.bB)(function() {
      for (var a = t.__v; a = a.__; )
        if (a.__c) {
          a.__c.__$f |= 4;
          break;
        }
      return t.__$u.c = function() {
        var g;
        (0, s.ur)(i.peek()) || ((g = t.base) == null ? void 0 : g.nodeType) !== 3 ? (t.__$f |= 1, t.setState({})) : t.base.data = i.peek();
      }, function(g) {
        return new G(g);
      }(function() {
        var g = h.value.value;
        return g === 0 ? 0 : g === !0 ? "" : g || "";
      });
    }, []);
    return i.value;
  }
  function C(r, t, u, h) {
    var i = t in r && r.ownerSVGElement === void 0, a = I(u);
    return { o: function(g, y) {
      a.value = g, h = y;
    }, d: w(function() {
      var g = a.value.value;
      h[t] !== g && (h[t] = g, i ? r[t] = g : g ? r.setAttribute(t, g) : r.removeAttribute(t));
    }) };
  }
  p.prototype.brand = P, p.prototype.h = function() {
    return !0;
  }, p.prototype.S = function(r) {
    this.t !== r && r.e === void 0 && (r.x = this.t, this.t !== void 0 && (this.t.e = r), this.t = r);
  }, p.prototype.U = function(r) {
    if (this.t !== void 0) {
      var t = r.e, u = r.x;
      t !== void 0 && (t.x = u, r.e = void 0), u !== void 0 && (u.e = t, r.x = void 0), r === this.t && (this.t = u);
    }
  }, p.prototype.subscribe = function(r) {
    var t = this;
    return w(function() {
      var u = t.value, h = 32 & this.f;
      this.f &= -33;
      try {
        r(u);
      } finally {
        this.f |= h;
      }
    });
  }, p.prototype.valueOf = function() {
    return this.value;
  }, p.prototype.toString = function() {
    return this.value + "";
  }, p.prototype.toJSON = function() {
    return this.value;
  }, p.prototype.peek = function() {
    return this.v;
  }, Object.defineProperty(p.prototype, "value", { get: function() {
    var r = m(this);
    return r !== void 0 && (r.i = this.i), this.v;
  }, set: function(r) {
    if (L instanceof G && function() {
      throw new Error("Computed cannot have side-effects");
    }(), r !== this.v) {
      x > 100 && d(), this.v = r, this.i++, k++, j++;
      try {
        for (var t = this.t; t !== void 0; t = t.x)
          t.t.N();
      } finally {
        S();
      }
    }
  } }), (G.prototype = new p()).h = function() {
    if (this.f &= -3, 1 & this.f)
      return !1;
    if ((36 & this.f) == 32 || (this.f &= -5, this.g === k))
      return !0;
    if (this.g = k, this.f |= 1, this.i > 0 && !M(this))
      return this.f &= -2, !0;
    var r = L;
    try {
      E(this), L = this;
      var t = this.x();
      (16 & this.f || this.v !== t || this.i === 0) && (this.v = t, this.f &= -17, this.i++);
    } catch (u) {
      this.v = u, this.f |= 16, this.i++;
    }
    return L = r, z(this), this.f &= -2, !0;
  }, G.prototype.S = function(r) {
    if (this.t === void 0) {
      this.f |= 36;
      for (var t = this.s; t !== void 0; t = t.n)
        t.S.S(t);
    }
    p.prototype.S.call(this, r);
  }, G.prototype.U = function(r) {
    if (this.t !== void 0 && (p.prototype.U.call(this, r), this.t === void 0)) {
      this.f &= -33;
      for (var t = this.s; t !== void 0; t = t.n)
        t.S.U(t);
    }
  }, G.prototype.N = function() {
    if (!(2 & this.f)) {
      this.f |= 6;
      for (var r = this.t; r !== void 0; r = r.x)
        r.t.N();
    }
  }, G.prototype.peek = function() {
    if (this.h() || d(), 16 & this.f)
      throw this.v;
    return this.v;
  }, Object.defineProperty(G.prototype, "value", { get: function() {
    1 & this.f && d();
    var r = m(this);
    if (this.h(), r !== void 0 && (r.i = this.i), 16 & this.f)
      throw this.v;
    return this.v;
  } }), q.prototype.c = function() {
    var r = this.S();
    try {
      if (8 & this.f || this.x === void 0)
        return;
      var t = this.x();
      typeof t == "function" && (this.u = t);
    } finally {
      r();
    }
  }, q.prototype.S = function() {
    1 & this.f && d(), this.f |= 1, this.f &= -9, J(this), E(this), j++;
    var r = L;
    return L = this, Q.bind(this, r);
  }, q.prototype.N = function() {
    2 & this.f || (this.f |= 2, this.o = A, A = this);
  }, q.prototype.d = function() {
    this.f |= 8, 1 & this.f || Z(this);
  }, v.displayName = "_st", Object.defineProperties(p.prototype, { constructor: { configurable: !0, value: void 0 }, type: { configurable: !0, value: v }, props: { configurable: !0, get: function() {
    return { data: this };
  } }, __b: { configurable: !0, value: 1 } }), b("__b", function(r, t) {
    if (typeof t.type == "string") {
      var u, h = t.props;
      for (var i in h)
        if (i !== "children") {
          var a = h[i];
          a instanceof p && (u || (t.__np = u = {}), u[i] = a, h[i] = a.peek());
        }
    }
    r(t);
  }), b("__r", function(r, t) {
    o();
    var u, h = t.__c;
    h && (h.__$f &= -2, (u = h.__$u) === void 0 && (h.__$u = u = function(i) {
      var a;
      return w(function() {
        a = this;
      }), a.c = function() {
        h.__$f |= 1, h.setState({});
      }, a;
    }())), o(u), r(t);
  }), b("__e", function(r, t, u, h) {
    o(), r(t, u, h);
  }), b("diffed", function(r, t) {
    var u;
    if (o(), typeof t.type == "string" && (u = t.__e)) {
      var h = t.__np, i = t.props;
      if (h) {
        var a = u.U;
        if (a)
          for (var g in a) {
            var y = a[g];
            y === void 0 || g in h || (y.d(), a[g] = void 0);
          }
        else
          u.U = a = {};
        for (var B in h) {
          var f = a[B], _ = h[B];
          f === void 0 ? (f = C(u, B, _, i), a[B] = f) : f.o(_, i);
        }
      }
    }
    r(t);
  }), b("unmount", function(r, t) {
    if (typeof t.type == "string") {
      var u = t.__e;
      if (u) {
        var h = u.U;
        if (h)
          for (var i in u.U = void 0, h) {
            var a = h[i];
            a && a.d();
          }
      }
    } else {
      var g = t.__c;
      if (g) {
        var y = g.__$u;
        y && (g.__$u = void 0, y.d());
      }
    }
    r(t);
  }), b("__h", function(r, t, u, h) {
    (h < 3 || h === 9) && (t.__$f |= 2), r(t, u, h);
  }), s.Yl.prototype.shouldComponentUpdate = function(r, t) {
    var u = this.__$u;
    if (!(u && u.s !== void 0 || 4 & this.__$f) || 3 & this.__$f)
      return !0;
    for (var h in t)
      return !0;
    for (var i in r)
      if (i !== "__source" && r[i] !== this.props[i])
        return !0;
    for (var a in this.props)
      if (!(a in r))
        return !0;
    return !1;
  };
}, 6660: (te, T, e) => {
  e.d(T, { M: () => Z });
  var s = e(4944), n = e(5536), d = e.n(n), P = e(7008), S = e.n(P), L = e(1496), $ = e.n(L), A = e(9356), j = e.n(A), x = e(9904), k = e.n(x), m = e(1480), p = { attributes: { "data-dropin": "storefront-checkout", "data-sdk": "0.22.0" }, styleTagTransform: function(Q, q) {
    var u;
    window._loadedStyles = window._loadedStyles ?? {};
    const w = (u = Q == null ? void 0 : Q.match(/^\.dropin-(\w+)/)) == null ? void 0 : u[1], b = q.getAttribute("data-sdk"), o = w ? `sdk/${w}` : q.getAttribute("data-dropin");
    q.setAttribute("data-dropin", o), q.removeAttribute("data-sdk");
    const v = window._loadedStyles[o];
    if (v) {
      const h = function(i, a) {
        const [g, y] = i.split("-"), [B, f] = a.split("-"), _ = [...g.split("."), y], D = [...B.split("."), f], R = parseInt(_[0], 10), Y = parseInt(D[0], 10);
        if (R !== Y)
          return R > Y ? i : a;
        const W = parseInt(_[1], 10), U = parseInt(D[1], 10);
        if (W !== U)
          return W > U ? i : a;
        const K = parseInt(_[2], 10), H = parseInt(D[2], 10);
        if (K !== H)
          return K > H ? i : a;
        if (_[3] && D[3]) {
          const l = /(alpha|beta)(.*)/, c = _[3].match(l), O = D[3].match(l), N = c[1], F = O[1], V = parseInt(c[2], 10), ee = parseInt(O[2], 10);
          if (N === F)
            return V > ee ? i : a;
          if (N === "alpha" && F === "beta")
            return a;
          if (N === "beta" && F === "alpha")
            return i;
        }
        return _[3] ? a : i;
      }(b, v.sdk);
      if (!w || w && h === v.sdk) {
        const i = v.style.textContent;
        v.style.textContent = `${i}
/* --- MERGED --- */
${Q}`;
      } else
        w && h !== v.sdk && (v.style.textContent = `/* --- UPGRADED --- */
${Q}`);
      return void q.remove();
    }
    q.textContent = Q, window._loadedStyles[o] = { sdk: b, core: w, style: q };
    const C = document.querySelector("head"), { lastDropinStyleInjected: r, lastSDKStyleInjected: t } = window._loadedStyles;
    w ? (t ? C.insertBefore(q, t.nextSibling) : C.insertBefore(q, C.firstChild), window._loadedStyles.lastSDKStyleInjected = q) : (r ? C.insertBefore(q, r.nextSibling) : t ? C.insertBefore(q, t.nextSibling) : C.insertBefore(q, C.firstChild), window._loadedStyles.lastDropinStyleInjected = q);
  } };
  p.setAttributes = j(), p.insert = $().bind(null, "head"), p.domAPI = S(), p.insertStyleElement = k(), d()(m.c, p), m.c && m.c.locals && m.c.locals;
  var I = e(8412), M = ["variant", "className", "children"];
  function E(Q, q) {
    var w = Object.keys(Q);
    if (Object.getOwnPropertySymbols) {
      var b = Object.getOwnPropertySymbols(Q);
      q && (b = b.filter(function(o) {
        return Object.getOwnPropertyDescriptor(Q, o).enumerable;
      })), w.push.apply(w, b);
    }
    return w;
  }
  function z(Q) {
    for (var q = 1; q < arguments.length; q++) {
      var w = arguments[q] != null ? arguments[q] : {};
      q % 2 ? E(Object(w), !0).forEach(function(b) {
        G(Q, b, w[b]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(Q, Object.getOwnPropertyDescriptors(w)) : E(Object(w)).forEach(function(b) {
        Object.defineProperty(Q, b, Object.getOwnPropertyDescriptor(w, b));
      });
    }
    return Q;
  }
  function G(Q, q, w) {
    return (q = function(b) {
      var o = function(v, C) {
        if (typeof v != "object" || !v)
          return v;
        var r = v[Symbol.toPrimitive];
        if (r !== void 0) {
          var t = r.call(v, C || "default");
          if (typeof t != "object")
            return t;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (C === "string" ? String : Number)(v);
      }(b, "string");
      return typeof o == "symbol" ? o : String(o);
    }(q)) in Q ? Object.defineProperty(Q, q, { value: w, enumerable: !0, configurable: !0, writable: !0 }) : Q[q] = w, Q;
  }
  function J(Q, q) {
    if (Q == null)
      return {};
    var w, b, o = function(C, r) {
      if (C == null)
        return {};
      var t, u, h = {}, i = Object.keys(C);
      for (u = 0; u < i.length; u++)
        t = i[u], r.indexOf(t) >= 0 || (h[t] = C[t]);
      return h;
    }(Q, q);
    if (Object.getOwnPropertySymbols) {
      var v = Object.getOwnPropertySymbols(Q);
      for (b = 0; b < v.length; b++)
        w = v[b], q.indexOf(w) >= 0 || Object.prototype.propertyIsEnumerable.call(Q, w) && (o[w] = Q[w]);
    }
    return o;
  }
  var Z = (Q) => {
    var { variant: q = "primary", className: w, children: b } = Q, o = J(Q, M);
    return (0, I.im)("div", z(z({}, o), {}, { className: (0, s.i)(["dropin-card", "dropin-card--".concat(q), w]), children: (0, I.im)("div", { class: "dropin-card__content", children: b }) }));
  };
}, 8424: (te, T, e) => {
  e.d(T, { y: () => Q });
  var s = e(2460), n = e(4944), d = e(5536), P = e.n(d), S = e(7008), L = e.n(S), $ = e(1496), A = e.n($), j = e(9356), x = e.n(j), k = e(9904), m = e.n(k), p = e(7248), I = { attributes: { "data-dropin": "storefront-checkout", "data-sdk": "0.22.0" }, styleTagTransform: function(q, w) {
    var h;
    window._loadedStyles = window._loadedStyles ?? {};
    const b = (h = q == null ? void 0 : q.match(/^\.dropin-(\w+)/)) == null ? void 0 : h[1], o = w.getAttribute("data-sdk"), v = b ? `sdk/${b}` : w.getAttribute("data-dropin");
    w.setAttribute("data-dropin", v), w.removeAttribute("data-sdk");
    const C = window._loadedStyles[v];
    if (C) {
      const i = function(a, g) {
        const [y, B] = a.split("-"), [f, _] = g.split("-"), D = [...y.split("."), B], R = [...f.split("."), _], Y = parseInt(D[0], 10), W = parseInt(R[0], 10);
        if (Y !== W)
          return Y > W ? a : g;
        const U = parseInt(D[1], 10), K = parseInt(R[1], 10);
        if (U !== K)
          return U > K ? a : g;
        const H = parseInt(D[2], 10), l = parseInt(R[2], 10);
        if (H !== l)
          return H > l ? a : g;
        if (D[3] && R[3]) {
          const c = /(alpha|beta)(.*)/, O = D[3].match(c), N = R[3].match(c), F = O[1], V = N[1], ee = parseInt(O[2], 10), ne = parseInt(N[2], 10);
          if (F === V)
            return ee > ne ? a : g;
          if (F === "alpha" && V === "beta")
            return g;
          if (F === "beta" && V === "alpha")
            return a;
        }
        return D[3] ? g : a;
      }(o, C.sdk);
      if (!b || b && i === C.sdk) {
        const a = C.style.textContent;
        C.style.textContent = `${a}
/* --- MERGED --- */
${q}`;
      } else
        b && i !== C.sdk && (C.style.textContent = `/* --- UPGRADED --- */
${q}`);
      return void w.remove();
    }
    w.textContent = q, window._loadedStyles[v] = { sdk: o, core: b, style: w };
    const r = document.querySelector("head"), { lastDropinStyleInjected: t, lastSDKStyleInjected: u } = window._loadedStyles;
    b ? (u ? r.insertBefore(w, u.nextSibling) : r.insertBefore(w, r.firstChild), window._loadedStyles.lastSDKStyleInjected = w) : (t ? r.insertBefore(w, t.nextSibling) : u ? r.insertBefore(w, u.nextSibling) : r.insertBefore(w, r.firstChild), window._loadedStyles.lastDropinStyleInjected = w);
  } };
  I.setAttributes = x(), I.insert = A().bind(null, "head"), I.domAPI = L(), I.insertStyleElement = m(), P()(p.c, I), p.c && p.c.locals && p.c.locals;
  var M = e(8412), E = ["ariaLabel", "size", "stroke", "children", "className", "style"];
  function z(q, w) {
    var b = Object.keys(q);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(q);
      w && (o = o.filter(function(v) {
        return Object.getOwnPropertyDescriptor(q, v).enumerable;
      })), b.push.apply(b, o);
    }
    return b;
  }
  function G(q) {
    for (var w = 1; w < arguments.length; w++) {
      var b = arguments[w] != null ? arguments[w] : {};
      w % 2 ? z(Object(b), !0).forEach(function(o) {
        J(q, o, b[o]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(q, Object.getOwnPropertyDescriptors(b)) : z(Object(b)).forEach(function(o) {
        Object.defineProperty(q, o, Object.getOwnPropertyDescriptor(b, o));
      });
    }
    return q;
  }
  function J(q, w, b) {
    return (w = function(o) {
      var v = function(C, r) {
        if (typeof C != "object" || !C)
          return C;
        var t = C[Symbol.toPrimitive];
        if (t !== void 0) {
          var u = t.call(C, r || "default");
          if (typeof u != "object")
            return u;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (r === "string" ? String : Number)(C);
      }(o, "string");
      return typeof v == "symbol" ? v : String(v);
    }(w)) in q ? Object.defineProperty(q, w, { value: b, enumerable: !0, configurable: !0, writable: !0 }) : q[w] = b, q;
  }
  function Z(q, w) {
    if (q == null)
      return {};
    var b, o, v = function(r, t) {
      if (r == null)
        return {};
      var u, h, i = {}, a = Object.keys(r);
      for (h = 0; h < a.length; h++)
        u = a[h], t.indexOf(u) >= 0 || (i[u] = r[u]);
      return i;
    }(q, w);
    if (Object.getOwnPropertySymbols) {
      var C = Object.getOwnPropertySymbols(q);
      for (o = 0; o < C.length; o++)
        b = C[o], w.indexOf(b) >= 0 || Object.prototype.propertyIsEnumerable.call(q, b) && (v[b] = q[b]);
    }
    return v;
  }
  var Q = (q) => {
    var { ariaLabel: w, size: b = "small", stroke: o = "4", children: v, className: C, style: r } = q, t = Z(q, E), u = ["dropin-progress-spinner", "dropin-progress-spinner--shape-size-".concat(b), "dropin-progress-spinner--shape-stroke-".concat(o)], h = (0, s.cF)({ updating: "Dropin.ProgressSpinner.updating.label", updatingChildren: "Dropin.ProgressSpinner.updatingChildren.label" }), i = () => w || (v ? h.updatingChildren : h.updating);
    return v ? (0, M.YH)("div", G(G({}, t), {}, { className: (0, n.i)(["dropin-progress-spinner-provider"]), "aria-live": "polite", role: "status", children: [(0, M.im)("div", { "aria-hidden": !0, children: v }), (0, M.im)("div", { "aria-label": i(), role: "status", className: (0, n.i)(["dropin-progress-spinner-background", C]), style: r }), (0, M.im)("div", { className: (0, n.i)(["dropin-progress-spinner-with-provider", ...u]), "aria-hidden": !0 })] })) : (0, M.im)("div", G(G({}, t), {}, { className: (0, n.i)([C, ...u]), "aria-live": "polite", role: "status", "aria-label": i() }));
  };
}, 3388: (te, T, e) => {
  e.d(T, { W: () => w, K: () => q });
  var s = e(4944), n = e(5536), d = e.n(n), P = e(7008), S = e.n(P), L = e(1496), $ = e.n(L), A = e(9356), j = e.n(A), x = e(9904), k = e.n(x), m = e(6072), p = { attributes: { "data-dropin": "storefront-checkout", "data-sdk": "0.22.0" }, styleTagTransform: function(b, o) {
    var a;
    window._loadedStyles = window._loadedStyles ?? {};
    const v = (a = b == null ? void 0 : b.match(/^\.dropin-(\w+)/)) == null ? void 0 : a[1], C = o.getAttribute("data-sdk"), r = v ? `sdk/${v}` : o.getAttribute("data-dropin");
    o.setAttribute("data-dropin", r), o.removeAttribute("data-sdk");
    const t = window._loadedStyles[r];
    if (t) {
      const g = function(y, B) {
        const [f, _] = y.split("-"), [D, R] = B.split("-"), Y = [...f.split("."), _], W = [...D.split("."), R], U = parseInt(Y[0], 10), K = parseInt(W[0], 10);
        if (U !== K)
          return U > K ? y : B;
        const H = parseInt(Y[1], 10), l = parseInt(W[1], 10);
        if (H !== l)
          return H > l ? y : B;
        const c = parseInt(Y[2], 10), O = parseInt(W[2], 10);
        if (c !== O)
          return c > O ? y : B;
        if (Y[3] && W[3]) {
          const N = /(alpha|beta)(.*)/, F = Y[3].match(N), V = W[3].match(N), ee = F[1], ne = V[1], oe = parseInt(F[2], 10), pe = parseInt(V[2], 10);
          if (ee === ne)
            return oe > pe ? y : B;
          if (ee === "alpha" && ne === "beta")
            return B;
          if (ee === "beta" && ne === "alpha")
            return y;
        }
        return Y[3] ? B : y;
      }(C, t.sdk);
      if (!v || v && g === t.sdk) {
        const y = t.style.textContent;
        t.style.textContent = `${y}
/* --- MERGED --- */
${b}`;
      } else
        v && g !== t.sdk && (t.style.textContent = `/* --- UPGRADED --- */
${b}`);
      return void o.remove();
    }
    o.textContent = b, window._loadedStyles[r] = { sdk: C, core: v, style: o };
    const u = document.querySelector("head"), { lastDropinStyleInjected: h, lastSDKStyleInjected: i } = window._loadedStyles;
    v ? (i ? u.insertBefore(o, i.nextSibling) : u.insertBefore(o, u.firstChild), window._loadedStyles.lastSDKStyleInjected = o) : (h ? u.insertBefore(o, h.nextSibling) : i ? u.insertBefore(o, i.nextSibling) : u.insertBefore(o, u.firstChild), window._loadedStyles.lastDropinStyleInjected = o);
  } };
  p.setAttributes = j(), p.insert = $().bind(null, "head"), p.domAPI = S(), p.insertStyleElement = k(), d()(m.c, p), m.c && m.c.locals && m.c.locals;
  var I = e(8412), M = ["className", "fullWidth", "lines", "size", "variant", "children", "multilineGap"], E = ["className", "children", "rowGap"];
  function z(b, o) {
    var v = Object.keys(b);
    if (Object.getOwnPropertySymbols) {
      var C = Object.getOwnPropertySymbols(b);
      o && (C = C.filter(function(r) {
        return Object.getOwnPropertyDescriptor(b, r).enumerable;
      })), v.push.apply(v, C);
    }
    return v;
  }
  function G(b) {
    for (var o = 1; o < arguments.length; o++) {
      var v = arguments[o] != null ? arguments[o] : {};
      o % 2 ? z(Object(v), !0).forEach(function(C) {
        J(b, C, v[C]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(b, Object.getOwnPropertyDescriptors(v)) : z(Object(v)).forEach(function(C) {
        Object.defineProperty(b, C, Object.getOwnPropertyDescriptor(v, C));
      });
    }
    return b;
  }
  function J(b, o, v) {
    return (o = function(C) {
      var r = function(t, u) {
        if (typeof t != "object" || !t)
          return t;
        var h = t[Symbol.toPrimitive];
        if (h !== void 0) {
          var i = h.call(t, u || "default");
          if (typeof i != "object")
            return i;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (u === "string" ? String : Number)(t);
      }(C, "string");
      return typeof r == "symbol" ? r : String(r);
    }(o)) in b ? Object.defineProperty(b, o, { value: v, enumerable: !0, configurable: !0, writable: !0 }) : b[o] = v, b;
  }
  function Z(b, o) {
    if (b == null)
      return {};
    var v, C, r = function(u, h) {
      if (u == null)
        return {};
      var i, a, g = {}, y = Object.keys(u);
      for (a = 0; a < y.length; a++)
        i = y[a], h.indexOf(i) >= 0 || (g[i] = u[i]);
      return g;
    }(b, o);
    if (Object.getOwnPropertySymbols) {
      var t = Object.getOwnPropertySymbols(b);
      for (C = 0; C < t.length; C++)
        v = t[C], o.indexOf(v) >= 0 || Object.prototype.propertyIsEnumerable.call(b, v) && (r[v] = b[v]);
    }
    return r;
  }
  var Q = 1, q = (b) => {
    var { className: o, fullWidth: v = !1, lines: C = Q, size: r = "small", variant: t = "row", children: u = null, multilineGap: h = "medium" } = b, i = Z(b, M), a = [["dropin-skeleton-row__".concat(t), t], ["dropin-skeleton-row__".concat(t, "-").concat(r), t && r]];
    if (!u && t === "empty")
      return (0, I.im)("div", { className: (0, s.i)(["dropin-skeleton-row dropin-skeleton-row__empty", o]) });
    if (u) {
      var g = u.trim();
      return (0, I.im)("div", G(G({}, i), {}, { class: (0, s.i)(["dropin-skeleton-row", ["dropin-skeleton-row--full", v], o]), dangerouslySetInnerHTML: { __html: g } }));
    }
    return C > Q ? (0, I.im)("div", G(G({}, i), {}, { style: { "--multiline-gap-spacing": "var(--spacing-".concat(h, ")") }, class: (0, s.i)(["dropin-skeleton-row--multiline", ["dropin-skeleton-row--full", v], o]), children: Array.from({ length: C }).map((y, B) => (0, I.im)("div", { class: (0, s.i)(["dropin-skeleton-row", ["dropin-skeleton-row--full", v], "dropin-skeleton--row__content", ...a]) }, B)) })) : (0, I.im)("div", G(G({}, i), {}, { class: (0, s.i)(["dropin-skeleton-row", ["dropin-skeleton-row--full", v], "dropin-skeleton--row__content", ...a, o]) }));
  }, w = (b) => {
    var { className: o, children: v, rowGap: C = "medium" } = b, r = Z(b, E);
    return (0, I.im)("div", G(G({ style: { "--row-gap-spacing": "var(--spacing-".concat(C, ")") } }, r), {}, { className: (0, s.i)(["dropin-skeleton", o]), role: "status", "aria-label": "Loading...", children: v }));
  };
}, 1480: (te, T, e) => {
  e.d(T, { c: () => S });
  var s = e(6008), n = e.n(s), d = e(2076), P = e.n(d)()(n());
  P.push([te.id, `.dropin-card{
  --bgColor:var(--color-neutral-200);
  background-color:var(--bgColor);
  border-width:0;
  border-radius:var(--shape-border-radius-2);
}

.dropin-card--secondary{
  --bgColor:var(--color-neutral-50);
  border-width:var(--shape-border-width-2);
  border-style:solid;
  border-color:var(--color-neutral-400);
}

.dropin-card__content{
  display:flex;
  flex-direction:column;
  gap:var(--spacing-medium);
  padding-top:var(--spacing-medium);
  padding-right:var(--spacing-medium);
  padding-bottom:var(--spacing-medium);
  padding-left:var(--spacing-medium);
}
`, ""]);
  const S = P;
}, 7248: (te, T, e) => {
  e.d(T, { c: () => S });
  var s = e(6008), n = e.n(s), d = e(2076), P = e.n(d)()(n());
  P.push([te.id, `.dropin-progress-spinner-provider{
  position:relative;
  display:flex;
  flex-direction:column;
  border-radius:inherit;
  opacity:1;
  padding:var(--spacing-small);
}

.dropin-progress-spinner{
  --size:var(--spacing-medium);
  --stroke-width:var(--shape-icon-stroke-4);
  width:var(--size);
  height:var(--size);
  border-style:solid;
  border-width:var(--stroke-width);
  border-color:var(--color-neutral-400);
  border-top-color:var(--color-brand-500);
  border-radius:50%;
  animation:indeterminate 1s infinite ease-in-out;
}

.dropin-progress-spinner-with-provider{
  position:absolute;
  top:calc(50% - var(--size) / 2 - var(--stroke-width));
  left:calc(50% - var(--size) / 2 - var(--stroke-width));
}

.dropin-progress-spinner-background{
  --bgColor:var(--color-neutral-50);
  background-color:var(--bgColor);
  border-radius:inherit;
  opacity:0.5;
  position:absolute;
  width:100%;
  height:100%;
  margin-top:calc(-1 * var(--spacing-small));
  margin-left:calc(-1 * var(--spacing-small));
}

.dropin-progress-spinner--shape-size-small{
  --size:var(--spacing-medium);
}

.dropin-progress-spinner--shape-size-medium{
  --size:var(--spacing-big);
}

.dropin-progress-spinner--shape-size-big{
  --size:var(--spacing-xxbig);
}

.dropin-progress-spinner--shape-size-large{
  --size:var(--spacing-large);
}

.dropin-progress-spinner--shape-stroke-1{
  --stroke-width:var(--shape-icon-stroke-1);
}

.dropin-progress-spinner--shape-stroke-2{
  --stroke-width:var(--shape-icon-stroke-2);
}

.dropin-progress-spinner--shape-stroke-3{
  --stroke-width:var(--shape-icon-stroke-3);
}

.dropin-progress-spinner--shape-stroke-4{
  --stroke-width:var(--shape-icon-stroke-4);
}

@keyframes indeterminate{
  0%{
    transform:rotate(0deg);
  }
  100%{
    transform:rotate(360deg);
  }
}
`, ""]);
  const S = P;
}, 6072: (te, T, e) => {
  e.d(T, { c: () => S });
  var s = e(6008), n = e.n(s), d = e(2076), P = e.n(d)()(n());
  P.push([te.id, `.dropin-skeleton{
  --row-gap-spacing:var(--spacing-medium);
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:var(--row-gap-spacing);
}

.dropin-skeleton .dropin-skeleton--row__content{
  background:var(--color-neutral-300) linear-gradient(
      to right,
      var(--color-neutral-300) 0%,
      var(--color-neutral-100) 20%,
      var(--color-neutral-300) 40%,
      var(--color-neutral-300) 100%
    ) no-repeat;
  animation:skeletonShimmer infinite 1.2s linear;
  border-radius:var(--shape-border-radius-2);
}
.dropin-skeleton__empty{
  background:none;
}

.dropin-skeleton-row--multiline{
  --multiline-gap-spacing:var(--spacing-medium);
  display:grid;
  grid-auto-rows:max-content;
  gap:var(--multiline-gap-spacing);
}

.dropin-skeleton-row--full{
  grid-column:1 / -1;
}
.dropin-skeleton-row svg{
  fill:var(--color-neutral-400);
  fill-opacity:0.5;
  animation-duration:1s;
  animation-fill-mode:forwards;
  animation-iteration-count:infinite;
  animation-name:placeholderShimmer;
  animation-timing-function:linear;
}

.dropin-skeleton-row__row-xsmall{
  height:32px;
}

.dropin-skeleton-row__row-small{
  height:40px;
}

.dropin-skeleton-row__row-medium{
  height:48px;
}

.dropin-skeleton-row__row-large{
  height:56px;
}

.dropin-skeleton-row__row-xlarge{
  height:72px;
}

.dropin-skeleton-row__heading-xsmall{
  height:20px;
}

.dropin-skeleton-row__heading-small{
  height:24px;
}

.dropin-skeleton-row__heading-medium{
  height:32px;
}

.dropin-skeleton-row__heading-large{
  height:40px;
}

.dropin-skeleton-row__heading-xlarge{
  height:48px;
}

@keyframes skeletonShimmer{
  0%{
    background-position:-600px 0;
  }

  100%{
    background-position:600px 0;
  }
}

@keyframes placeholderShimmer{
  0%{
    fill-opacity:0.5;
  }

  50%{
    fill-opacity:1;
  }

  100%{
    fill-opacity:0.5;
  }
}
@media only screen and (max-width: 600px){
  .dropin-skeleton{
    grid-template-columns:1fr;
  }
}
`, ""]);
  const S = P;
} }, or = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  id: nr,
  ids: rr,
  modules: ir
}, Symbol.toStringTag, { value: "Module" })), ar = 184, lr = [184, 1604, 4424], sr = { 1604: (te, T, e) => {
  e.r(T), e.d(T, { default: () => S });
  var s, n, d = e(2796);
  function P() {
    return P = Object.assign ? Object.assign.bind() : function(L) {
      for (var $ = 1; $ < arguments.length; $++) {
        var A = arguments[$];
        for (var j in A)
          Object.prototype.hasOwnProperty.call(A, j) && (L[j] = A[j]);
      }
      return L;
    }, P.apply(this, arguments);
  }
  const S = function(L) {
    return d.kv("svg", P({ width: 24, height: 24, fill: "none", xmlns: "http://www.w3.org/2000/svg" }, L), s || (s = d.kv("path", { vectorEffect: "non-scaling-stroke", d: "M.75 12C.75 5.784 5.784.75 12 .75S23.25 5.784 23.25 12 18.216 23.25 12 23.25.75 18.216.75 12Z", stroke: "currentColor" })), n || (n = d.kv("path", { vectorEffect: "non-scaling-stroke", d: "m6.75 12.762 3.489 2.988L17.25 9", stroke: "currentColor" })));
  };
}, 4424: (te, T, e) => {
  e.r(T), e.d(T, { default: () => S });
  var s, n, d = e(2796);
  function P() {
    return P = Object.assign ? Object.assign.bind() : function(L) {
      for (var $ = 1; $ < arguments.length; $++) {
        var A = arguments[$];
        for (var j in A)
          Object.prototype.hasOwnProperty.call(A, j) && (L[j] = A[j]);
      }
      return L;
    }, P.apply(this, arguments);
  }
  const S = function(L) {
    return d.kv("svg", P({ width: 24, height: 24, fill: "none", xmlns: "http://www.w3.org/2000/svg" }, L), s || (s = d.kv("path", { vectorEffect: "non-scaling-stroke", d: "M.75 12C.75 5.784 5.784.75 12 .75S23.25 5.784 23.25 12 18.216 23.25 12 23.25.75 18.216.75 12Z", stroke: "currentColor" })), n || (n = d.kv("path", { vectorEffect: "non-scaling-stroke", d: "M11.75 5.884V4.75h.5v1.134l-.201 7.187h-.098l-.201-7.187Zm.05 12.366v-1.263h.425v1.263H11.8Z", stroke: "currentColor" })));
  };
}, 1704: (te, T, e) => {
  e.d(T, { I: () => Q });
  var s = e(5536), n = e.n(s), d = e(7008), P = e.n(d), S = e(1496), L = e.n(S), $ = e(9356), A = e.n($), j = e(9904), x = e.n(j), k = e(3868), m = { attributes: { "data-dropin": "storefront-checkout", "data-sdk": "0.22.0" }, styleTagTransform: function(q, w) {
    var h;
    window._loadedStyles = window._loadedStyles ?? {};
    const b = (h = q == null ? void 0 : q.match(/^\.dropin-(\w+)/)) == null ? void 0 : h[1], o = w.getAttribute("data-sdk"), v = b ? `sdk/${b}` : w.getAttribute("data-dropin");
    w.setAttribute("data-dropin", v), w.removeAttribute("data-sdk");
    const C = window._loadedStyles[v];
    if (C) {
      const i = function(a, g) {
        const [y, B] = a.split("-"), [f, _] = g.split("-"), D = [...y.split("."), B], R = [...f.split("."), _], Y = parseInt(D[0], 10), W = parseInt(R[0], 10);
        if (Y !== W)
          return Y > W ? a : g;
        const U = parseInt(D[1], 10), K = parseInt(R[1], 10);
        if (U !== K)
          return U > K ? a : g;
        const H = parseInt(D[2], 10), l = parseInt(R[2], 10);
        if (H !== l)
          return H > l ? a : g;
        if (D[3] && R[3]) {
          const c = /(alpha|beta)(.*)/, O = D[3].match(c), N = R[3].match(c), F = O[1], V = N[1], ee = parseInt(O[2], 10), ne = parseInt(N[2], 10);
          if (F === V)
            return ee > ne ? a : g;
          if (F === "alpha" && V === "beta")
            return g;
          if (F === "beta" && V === "alpha")
            return a;
        }
        return D[3] ? g : a;
      }(o, C.sdk);
      if (!b || b && i === C.sdk) {
        const a = C.style.textContent;
        C.style.textContent = `${a}
/* --- MERGED --- */
${q}`;
      } else
        b && i !== C.sdk && (C.style.textContent = `/* --- UPGRADED --- */
${q}`);
      return void w.remove();
    }
    w.textContent = q, window._loadedStyles[v] = { sdk: o, core: b, style: w };
    const r = document.querySelector("head"), { lastDropinStyleInjected: t, lastSDKStyleInjected: u } = window._loadedStyles;
    b ? (u ? r.insertBefore(w, u.nextSibling) : r.insertBefore(w, r.firstChild), window._loadedStyles.lastSDKStyleInjected = w) : (t ? r.insertBefore(w, t.nextSibling) : u ? r.insertBefore(w, u.nextSibling) : r.insertBefore(w, r.firstChild), window._loadedStyles.lastDropinStyleInjected = w);
  } };
  m.setAttributes = A(), m.insert = L().bind(null, "head"), m.domAPI = P(), m.insertStyleElement = x(), n()(k.c, m), k.c && k.c.locals && k.c.locals;
  var p = e(4944), I = e(8412), M = e(2796), E = ["className", "label", "error", "hint", "success", "size", "disabled", "children"];
  function z(q, w) {
    var b = Object.keys(q);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(q);
      w && (o = o.filter(function(v) {
        return Object.getOwnPropertyDescriptor(q, v).enumerable;
      })), b.push.apply(b, o);
    }
    return b;
  }
  function G(q) {
    for (var w = 1; w < arguments.length; w++) {
      var b = arguments[w] != null ? arguments[w] : {};
      w % 2 ? z(Object(b), !0).forEach(function(o) {
        J(q, o, b[o]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(q, Object.getOwnPropertyDescriptors(b)) : z(Object(b)).forEach(function(o) {
        Object.defineProperty(q, o, Object.getOwnPropertyDescriptor(b, o));
      });
    }
    return q;
  }
  function J(q, w, b) {
    var o;
    return (w = typeof (o = function(v, C) {
      if (typeof v != "object" || !v)
        return v;
      var r = v[Symbol.toPrimitive];
      if (r !== void 0) {
        var t = r.call(v, C || "default");
        if (typeof t != "object")
          return t;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (C === "string" ? String : Number)(v);
    }(w, "string")) == "symbol" ? o : String(o)) in q ? Object.defineProperty(q, w, { value: b, enumerable: !0, configurable: !0, writable: !0 }) : q[w] = b, q;
  }
  function Z(q, w) {
    if (q == null)
      return {};
    var b, o, v = function(r, t) {
      if (r == null)
        return {};
      var u, h, i = {}, a = Object.keys(r);
      for (h = 0; h < a.length; h++)
        u = a[h], t.indexOf(u) >= 0 || (i[u] = r[u]);
      return i;
    }(q, w);
    if (Object.getOwnPropertySymbols) {
      var C = Object.getOwnPropertySymbols(q);
      for (o = 0; o < C.length; o++)
        b = C[o], w.indexOf(b) >= 0 || Object.prototype.propertyIsEnumerable.call(q, b) && (v[b] = q[b]);
    }
    return v;
  }
  var Q = (q) => {
    var w, b, { className: o, label: v, error: C, hint: r, success: t, size: u = "medium", disabled: h = !1, children: i } = q, a = Z(q, E), g = (w = i == null || (b = i.props) === null || b === void 0 ? void 0 : b.id) !== null && w !== void 0 ? w : "dropin-field-".concat(Math.random().toString(36)), y = i && typeof i.type != "string" ? i.type : null;
    return (0, I.YH)("div", G(G({}, a), {}, { className: (0, p.i)(["dropin-field", o]), children: [v && (0, I.im)("label", { className: (0, p.i)(["dropin-field__label", ["dropin-field__label--disabled", h], "dropin-field__label--".concat(u)]), htmlFor: g, children: v }), (0, I.im)("div", { className: (0, p.i)(["dropin-field__content"]), children: y && i && (0, M.kv)(y, G(G({}, i.props), {}, { id: g, key: i.key, disabled: h, size: u, error: !!C, success: !!t && !C })) }), (0, I.im)("div", { className: (0, p.i)(["dropin-field__hint", ["dropin-field__hint--".concat(u), u], ["dropin-field__hint--error", !!C], ["dropin-field__hint--success", !!t && !C], ["dropin-field__hint--disabled", !!h]]), children: C || t || r })] }));
  };
}, 3720: (te, T, e) => {
  e.d(T, { G: () => q });
  var s = e(4944), n = e(2796), d = e(5536), P = e.n(d), S = e(7008), L = e.n(S), $ = e(1496), A = e.n($), j = e(9356), x = e.n(j), k = e(9904), m = e.n(k), p = e(4480), I = { attributes: { "data-dropin": "storefront-checkout", "data-sdk": "0.22.0" }, styleTagTransform: function(w, b) {
    var i;
    window._loadedStyles = window._loadedStyles ?? {};
    const o = (i = w == null ? void 0 : w.match(/^\.dropin-(\w+)/)) == null ? void 0 : i[1], v = b.getAttribute("data-sdk"), C = o ? `sdk/${o}` : b.getAttribute("data-dropin");
    b.setAttribute("data-dropin", C), b.removeAttribute("data-sdk");
    const r = window._loadedStyles[C];
    if (r) {
      const a = function(g, y) {
        const [B, f] = g.split("-"), [_, D] = y.split("-"), R = [...B.split("."), f], Y = [..._.split("."), D], W = parseInt(R[0], 10), U = parseInt(Y[0], 10);
        if (W !== U)
          return W > U ? g : y;
        const K = parseInt(R[1], 10), H = parseInt(Y[1], 10);
        if (K !== H)
          return K > H ? g : y;
        const l = parseInt(R[2], 10), c = parseInt(Y[2], 10);
        if (l !== c)
          return l > c ? g : y;
        if (R[3] && Y[3]) {
          const O = /(alpha|beta)(.*)/, N = R[3].match(O), F = Y[3].match(O), V = N[1], ee = F[1], ne = parseInt(N[2], 10), oe = parseInt(F[2], 10);
          if (V === ee)
            return ne > oe ? g : y;
          if (V === "alpha" && ee === "beta")
            return y;
          if (V === "beta" && ee === "alpha")
            return g;
        }
        return R[3] ? y : g;
      }(v, r.sdk);
      if (!o || o && a === r.sdk) {
        const g = r.style.textContent;
        r.style.textContent = `${g}
/* --- MERGED --- */
${w}`;
      } else
        o && a !== r.sdk && (r.style.textContent = `/* --- UPGRADED --- */
${w}`);
      return void b.remove();
    }
    b.textContent = w, window._loadedStyles[C] = { sdk: v, core: o, style: b };
    const t = document.querySelector("head"), { lastDropinStyleInjected: u, lastSDKStyleInjected: h } = window._loadedStyles;
    o ? (h ? t.insertBefore(b, h.nextSibling) : t.insertBefore(b, t.firstChild), window._loadedStyles.lastSDKStyleInjected = b) : (u ? t.insertBefore(b, u.nextSibling) : h ? t.insertBefore(b, h.nextSibling) : t.insertBefore(b, t.firstChild), window._loadedStyles.lastDropinStyleInjected = b);
  } };
  I.setAttributes = x(), I.insert = A().bind(null, "head"), I.domAPI = L(), I.insertStyleElement = m(), P()(p.c, I), p.c && p.c.locals && p.c.locals;
  var M = e(8412), E = ["source", "size", "stroke", "viewBox", "className"];
  function z(w, b) {
    var o = Object.keys(w);
    if (Object.getOwnPropertySymbols) {
      var v = Object.getOwnPropertySymbols(w);
      b && (v = v.filter(function(C) {
        return Object.getOwnPropertyDescriptor(w, C).enumerable;
      })), o.push.apply(o, v);
    }
    return o;
  }
  function G(w) {
    for (var b = 1; b < arguments.length; b++) {
      var o = arguments[b] != null ? arguments[b] : {};
      b % 2 ? z(Object(o), !0).forEach(function(v) {
        J(w, v, o[v]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(w, Object.getOwnPropertyDescriptors(o)) : z(Object(o)).forEach(function(v) {
        Object.defineProperty(w, v, Object.getOwnPropertyDescriptor(o, v));
      });
    }
    return w;
  }
  function J(w, b, o) {
    var v;
    return (b = typeof (v = function(C, r) {
      if (typeof C != "object" || !C)
        return C;
      var t = C[Symbol.toPrimitive];
      if (t !== void 0) {
        var u = t.call(C, r || "default");
        if (typeof u != "object")
          return u;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (r === "string" ? String : Number)(C);
    }(b, "string")) == "symbol" ? v : String(v)) in w ? Object.defineProperty(w, b, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : w[b] = o, w;
  }
  function Z(w, b) {
    if (w == null)
      return {};
    var o, v, C = function(t, u) {
      if (t == null)
        return {};
      var h, i, a = {}, g = Object.keys(t);
      for (i = 0; i < g.length; i++)
        h = g[i], u.indexOf(h) >= 0 || (a[h] = t[h]);
      return a;
    }(w, b);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(w);
      for (v = 0; v < r.length; v++)
        o = r[v], b.indexOf(o) >= 0 || Object.prototype.propertyIsEnumerable.call(w, o) && (C[o] = w[o]);
    }
    return C;
  }
  var Q = { Add: (0, n.Wk)(() => e.e(1600).then(e.bind(e, 1600))), Bulk: (0, n.Wk)(() => e.e(3180).then(e.bind(e, 3180))), Burger: (0, n.Wk)(() => e.e(3728).then(e.bind(e, 3728))), Cart: (0, n.Wk)(() => e.e(5008).then(e.bind(e, 5008))), Check: (0, n.Wk)(() => e.e(9772).then(e.bind(e, 9772))), ChevronDown: (0, n.Wk)(() => e.e(1680).then(e.bind(e, 1680))), ChevronUp: (0, n.Wk)(() => e.e(844).then(e.bind(e, 844))), ChevronRight: (0, n.Wk)(() => e.e(8824).then(e.bind(e, 8824))), Close: (0, n.Wk)(() => e.e(2543).then(e.bind(e, 2543))), Heart: (0, n.Wk)(() => e.e(9176).then(e.bind(e, 9176))), Minus: (0, n.Wk)(() => e.e(1268).then(e.bind(e, 1268))), Placeholder: (0, n.Wk)(() => e.e(8868).then(e.bind(e, 8868))), PlaceholderFilled: (0, n.Wk)(() => e.e(5488).then(e.bind(e, 5488))), Search: (0, n.Wk)(() => e.e(3764).then(e.bind(e, 3764))), SearchFilled: (0, n.Wk)(() => e.e(6820).then(e.bind(e, 6820))), Sort: (0, n.Wk)(() => e.e(3832).then(e.bind(e, 3832))), Star: (0, n.Wk)(() => e.e(3836).then(e.bind(e, 3836))), View: (0, n.Wk)(() => e.e(7524).then(e.bind(e, 7524))), User: (0, n.Wk)(() => e.e(3996).then(e.bind(e, 3996))), Warning: (0, n.Wk)(() => e.e(4004).then(e.bind(e, 4004))), Locker: (0, n.Wk)(() => e.e(2388).then(e.bind(e, 2388))), Wallet: (0, n.Wk)(() => e.e(8220).then(e.bind(e, 8220))), Card: (0, n.Wk)(() => e.e(664).then(e.bind(e, 664))), Order: (0, n.Wk)(() => e.e(3916).then(e.bind(e, 3916))), Delivery: (0, n.Wk)(() => e.e(9948).then(e.bind(e, 2328))), OrderError: (0, n.Wk)(() => e.e(984).then(e.bind(e, 984))), OrderSuccess: (0, n.Wk)(() => e.e(2920).then(e.bind(e, 2920))), PaymentError: (0, n.Wk)(() => e.e(9940).then(e.bind(e, 9940))), CheckWithCircle: (0, n.Wk)(() => e.e(1604).then(e.bind(e, 1604))), WarningWithCircle: (0, n.Wk)(() => e.e(4424).then(e.bind(e, 4424))), WarningFilled: (0, n.Wk)(() => e.e(1176).then(e.bind(e, 1176))), InfoFilled: (0, n.Wk)(() => e.e(6484).then(e.bind(e, 6484))), HeartFilled: (0, n.Wk)(() => e.e(488).then(e.bind(e, 488))), Trash: (0, n.Wk)(() => e.e(5476).then(e.bind(e, 5476))) };
  function q(w) {
    var { source: b, size: o = "24", stroke: v = "2", viewBox: C = "0 0 24 24", className: r } = w, t = Z(w, E), u = typeof b == "string" ? Q[b] : null, h = { className: (0, s.i)(["dropin-icon", "dropin-icon--shape-stroke-".concat(v), r]), width: o, height: o, viewBox: C };
    return (0, M.im)(n.G0, { fallback: null, children: u ? (0, M.im)(u, G(G({}, t), h)) : (0, M.im)(b, G(G({}, t), h)) });
  }
}, 7912: (te, T, e) => {
  e.d(T, { E: () => C });
  var s = e(3720), n = e(5536), d = e.n(n), P = e(7008), S = e.n(P), L = e(1496), $ = e.n(L), A = e(9356), j = e.n(A), x = e(9904), k = e.n(x), m = e(7058), p = { attributes: { "data-dropin": "storefront-checkout", "data-sdk": "0.22.0" }, styleTagTransform: function(r, t) {
    var f;
    window._loadedStyles = window._loadedStyles ?? {};
    const u = (f = r == null ? void 0 : r.match(/^\.dropin-(\w+)/)) == null ? void 0 : f[1], h = t.getAttribute("data-sdk"), i = u ? `sdk/${u}` : t.getAttribute("data-dropin");
    t.setAttribute("data-dropin", i), t.removeAttribute("data-sdk");
    const a = window._loadedStyles[i];
    if (a) {
      const _ = function(D, R) {
        const [Y, W] = D.split("-"), [U, K] = R.split("-"), H = [...Y.split("."), W], l = [...U.split("."), K], c = parseInt(H[0], 10), O = parseInt(l[0], 10);
        if (c !== O)
          return c > O ? D : R;
        const N = parseInt(H[1], 10), F = parseInt(l[1], 10);
        if (N !== F)
          return N > F ? D : R;
        const V = parseInt(H[2], 10), ee = parseInt(l[2], 10);
        if (V !== ee)
          return V > ee ? D : R;
        if (H[3] && l[3]) {
          const ne = /(alpha|beta)(.*)/, oe = H[3].match(ne), pe = l[3].match(ne), _e = oe[1], ae = pe[1], Se = parseInt(oe[2], 10), le = parseInt(pe[2], 10);
          if (_e === ae)
            return Se > le ? D : R;
          if (_e === "alpha" && ae === "beta")
            return R;
          if (_e === "beta" && ae === "alpha")
            return D;
        }
        return H[3] ? R : D;
      }(h, a.sdk);
      if (!u || u && _ === a.sdk) {
        const D = a.style.textContent;
        a.style.textContent = `${D}
/* --- MERGED --- */
${r}`;
      } else
        u && _ !== a.sdk && (a.style.textContent = `/* --- UPGRADED --- */
${r}`);
      return void t.remove();
    }
    t.textContent = r, window._loadedStyles[i] = { sdk: h, core: u, style: t };
    const g = document.querySelector("head"), { lastDropinStyleInjected: y, lastSDKStyleInjected: B } = window._loadedStyles;
    u ? (B ? g.insertBefore(t, B.nextSibling) : g.insertBefore(t, g.firstChild), window._loadedStyles.lastSDKStyleInjected = t) : (y ? g.insertBefore(t, y.nextSibling) : B ? g.insertBefore(t, B.nextSibling) : g.insertBefore(t, g.firstChild), window._loadedStyles.lastDropinStyleInjected = t);
  } };
  p.setAttributes = j(), p.insert = $().bind(null, "head"), p.domAPI = S(), p.insertStyleElement = k(), d()(m.c, p), m.c && m.c.locals && m.c.locals;
  var I = e(4424), M = e(1604), E = e(2780), z = e(4944), G = e(1044), J = e(8596), Z = e(8412), Q = ["name", "value", "variant", "className", "disabled", "error", "floatingLabel", "onValue", "onUpdateError", "size", "icon", "maxLength", "success"];
  function q(r, t) {
    var u = Object.keys(r);
    if (Object.getOwnPropertySymbols) {
      var h = Object.getOwnPropertySymbols(r);
      t && (h = h.filter(function(i) {
        return Object.getOwnPropertyDescriptor(r, i).enumerable;
      })), u.push.apply(u, h);
    }
    return u;
  }
  function w(r) {
    for (var t = 1; t < arguments.length; t++) {
      var u = arguments[t] != null ? arguments[t] : {};
      t % 2 ? q(Object(u), !0).forEach(function(h) {
        b(r, h, u[h]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(u)) : q(Object(u)).forEach(function(h) {
        Object.defineProperty(r, h, Object.getOwnPropertyDescriptor(u, h));
      });
    }
    return r;
  }
  function b(r, t, u) {
    var h;
    return (t = typeof (h = function(i, a) {
      if (typeof i != "object" || !i)
        return i;
      var g = i[Symbol.toPrimitive];
      if (g !== void 0) {
        var y = g.call(i, a || "default");
        if (typeof y != "object")
          return y;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (a === "string" ? String : Number)(i);
    }(t, "string")) == "symbol" ? h : String(h)) in r ? Object.defineProperty(r, t, { value: u, enumerable: !0, configurable: !0, writable: !0 }) : r[t] = u, r;
  }
  function o(r, t, u, h, i, a, g) {
    try {
      var y = r[a](g), B = y.value;
    } catch (f) {
      return void u(f);
    }
    y.done ? t(B) : Promise.resolve(B).then(h, i);
  }
  function v(r, t) {
    if (r == null)
      return {};
    var u, h, i = function(g, y) {
      if (g == null)
        return {};
      var B, f, _ = {}, D = Object.keys(g);
      for (f = 0; f < D.length; f++)
        B = D[f], y.indexOf(B) >= 0 || (_[B] = g[B]);
      return _;
    }(r, t);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(r);
      for (h = 0; h < a.length; h++)
        u = a[h], t.indexOf(u) >= 0 || Object.prototype.propertyIsEnumerable.call(r, u) && (i[u] = r[u]);
    }
    return i;
  }
  var C = (r) => {
    var { name: t, value: u, variant: h = "primary", className: i, disabled: a, error: g, floatingLabel: y, onValue: B, onUpdateError: f, size: _ = "medium", icon: D, maxLength: R, success: Y } = r, W = v(r, Q), U = (W == null ? void 0 : W.id) || t || "dropin-input-".concat(Math.random().toString(36)), K = (0, J.kZ)((0, E.C)(function() {
      var H, l = (H = function* (c) {
        if (B)
          try {
            yield B(c);
          } catch (O) {
            f && f(O);
          }
      }, function() {
        var c = this, O = arguments;
        return new Promise(function(N, F) {
          var V = H.apply(c, O);
          function ee(oe) {
            o(V, N, F, ee, ne, "next", oe);
          }
          function ne(oe) {
            o(V, N, F, ee, ne, "throw", oe);
          }
          ee(void 0);
        });
      });
      return function(c) {
        return l.apply(this, arguments);
      };
    }(), 200), [B, f]);
    return (0, Z.YH)("div", { className: (0, z.i)(["dropin-input-container", "dropin-input-container--".concat(h), ["dropin-input-container--floating", !!y], ["dropin-input-container--disabled", a]]), children: [D && (0, Z.im)(G.o, { node: D, className: (0, z.i)(["dropin-input__field-icon--left", D.props.className]) }), (0, Z.YH)("div", { className: "dropin-input-label-container", children: [(0, Z.im)("input", w(w({ id: U, onChange: (H) => {
      var l = H.target;
      K(l.value.trim());
    }, type: "text", maxLength: R, name: t, value: u }, W), {}, { className: (0, z.i)(["dropin-input", "dropin-input--".concat(_), "dropin-input--".concat(h), ["dropin-input--error", !!g], ["dropin-input--success", !!Y], ["dropin-input--disabled", a], ["dropin-input--floating", !!y], ["dropin-input--icon-left", !!D], i]), disabled: a })), y && (0, Z.im)("label", { htmlFor: U, className: (0, z.i)([["dropin-input__label--floating", !!y], ["dropin-input__label--floating--icon-left", !!D], ["dropin-input__label--floating--error", !!g]]), children: y })] }), g && (0, Z.im)("div", { className: (0, z.i)(["dropin-input__field-icon--right", "dropin-input__field-icon--error"]), children: (0, Z.im)(s.G, { source: I.default, size: "16", stroke: "2", className: "dropin-input--warning-icon", viewBox: "-1 -1 26 26" }) }), Y && (0, Z.im)("div", { className: (0, z.i)(["dropin-input__field-icon--right", "dropin-input__field-icon--success"]), children: (0, Z.im)(s.G, { source: M.default, size: "16", stroke: "2", className: "dropin-input--success-icon", viewBox: "-1 -1 26 26" }) })] });
  };
}, 2780: (te, T, e) => {
  e.d(T, { C: () => s });
  var s = (n, d) => {
    var P;
    return function() {
      for (var S = arguments.length, L = new Array(S), $ = 0; $ < S; $++)
        L[$] = arguments[$];
      clearTimeout(P), P = setTimeout(() => n.apply(this, L), d);
    };
  };
}, 1044: (te, T, e) => {
  e.d(T, { o: () => A });
  var s = e(4944), n = e(8412), d = ["node"];
  function P(j, x) {
    var k = Object.keys(j);
    if (Object.getOwnPropertySymbols) {
      var m = Object.getOwnPropertySymbols(j);
      x && (m = m.filter(function(p) {
        return Object.getOwnPropertyDescriptor(j, p).enumerable;
      })), k.push.apply(k, m);
    }
    return k;
  }
  function S(j) {
    for (var x = 1; x < arguments.length; x++) {
      var k = arguments[x] != null ? arguments[x] : {};
      x % 2 ? P(Object(k), !0).forEach(function(m) {
        L(j, m, k[m]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(j, Object.getOwnPropertyDescriptors(k)) : P(Object(k)).forEach(function(m) {
        Object.defineProperty(j, m, Object.getOwnPropertyDescriptor(k, m));
      });
    }
    return j;
  }
  function L(j, x, k) {
    var m;
    return (x = typeof (m = function(p, I) {
      if (typeof p != "object" || !p)
        return p;
      var M = p[Symbol.toPrimitive];
      if (M !== void 0) {
        var E = M.call(p, I || "default");
        if (typeof E != "object")
          return E;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (I === "string" ? String : Number)(p);
    }(x, "string")) == "symbol" ? m : String(m)) in j ? Object.defineProperty(j, x, { value: k, enumerable: !0, configurable: !0, writable: !0 }) : j[x] = k, j;
  }
  function $(j, x) {
    if (j == null)
      return {};
    var k, m, p = function(M, E) {
      if (M == null)
        return {};
      var z, G, J = {}, Z = Object.keys(M);
      for (G = 0; G < Z.length; G++)
        z = Z[G], E.indexOf(z) >= 0 || (J[z] = M[z]);
      return J;
    }(j, x);
    if (Object.getOwnPropertySymbols) {
      var I = Object.getOwnPropertySymbols(j);
      for (m = 0; m < I.length; m++)
        k = I[m], x.indexOf(k) >= 0 || Object.prototype.propertyIsEnumerable.call(j, k) && (p[k] = j[k]);
    }
    return p;
  }
  function A(j) {
    var { node: x } = j, k = $(j, d);
    return x ? Array.isArray(x) ? (0, n.im)(n.ae, { children: x.map((m, p) => (0, n.im)(A, S({ node: m, className: k.className }, k), p)) }) : (k.className = (0, s.i)([x.props.className, k.className]), (0, n.im)(x.type, S(S({ ref: x.ref }, x.props), k), x.key)) : null;
  }
}, 3868: (te, T, e) => {
  e.d(T, { c: () => S });
  var s = e(6008), n = e.n(s), d = e(2076), P = e.n(d)()(n());
  P.push([te.id, `.dropin-field{
  display:grid;
  font:var(--type-body-2-strong-font);
  grid-auto-rows:max-content;
}

.dropin-field__label--medium{
  font:var(--type-details-caption-1-font);
  letter-spacing:var(--type-details-caption-1-letter-spacing);
  color:var(--color-neutral-800);
  text-align:left;
  padding-bottom:var(--spacing-xsmall);
}

.dropin-field__label--large{
  font:var(--type-body-2-strong-font);
  letter-spacing:var(--type-body-2-strong-letter-spacing);
  color:var(--color-neutral-800);
  text-align:left;
  padding-bottom:var(--spacing-xsmall);
}

.dropin-field__label--disabled{
  color:var(--color-neutral-500);
}

.dropin-field__content{
  display:grid;
  grid-auto-rows:max-content;
}

.dropin-field__hint{
  font:var(--type-details-caption-2-font);
  letter-spacing:var(--type-details-caption-2-letter-spacing);
  color:var(--color-neutral-700);
  text-align:left;
}

.dropin-field__hint:empty{
  display:none;
}

.dropin-field__hint--medium{
  padding-top:var(--spacing-xsmall);
}

.dropin-field__hint--large{
  padding-top:var(--spacing-small);
}

.dropin-field__hint--error{
  color:var(--color-alert-800);
}

.dropin-field__hint--success{
  color:var(--color-positive-800);
}

.dropin-field__hint--disabled{
  color:var(--color-neutral-500);
}
`, ""]);
  const S = P;
}, 4480: (te, T, e) => {
  e.d(T, { c: () => S });
  var s = e(6008), n = e.n(s), d = e(2076), P = e.n(d)()(n());
  P.push([te.id, `.dropin-icon{
}

.dropin-icon--shape-stroke-1{
  stroke-width:var(--shape-icon-stroke-1);
}

.dropin-icon--shape-stroke-2{
  stroke-width:var(--shape-icon-stroke-2);
}

.dropin-icon--shape-stroke-3{
  stroke-width:var(--shape-icon-stroke-3);
}

.dropin-icon--shape-stroke-4{
  stroke-width:var(--shape-icon-stroke-4);
}
`, ""]);
  const S = P;
}, 7058: (te, T, e) => {
  e.d(T, { c: () => S });
  var s = e(6008), n = e.n(s), d = e(2076), P = e.n(d)()(n());
  P.push([te.id, `.dropin-input{
  background-color:transparent;
  border-color:var(--color-neutral-600);
  border-radius:var(--shape-border-radius-1);
  border-style:inset solid;
  color:var(--color-neutral-800);
  -webkit-box-sizing:border-box;
  -moz-box-sizing:border-box;
  box-sizing:border-box;
  width:100%;
  max-width:100%;
  z-index:1;
}

.dropin-input[type='number'],
.dropin-input[type='text']{
  -moz-appearance:textfield;
  appearance:textfield;
}

.dropin-input:focus{
  outline:none;
  box-shadow:none;
}

.dropin-input:disabled{
  border-top-left-radius:var(--shape-border-radius-1);
  border-top-right-radius:var(--shape-border-radius-1);
  border-color:var(--color-neutral-500);
  background-color:var(--color-neutral-300);
  color:var(--color-neutral-500);
}
.dropin-input::placeholder,
.dropin-input::-webkit-input-placeholder,
.dropin-input::-ms-input-placeholder{
  color:var(--color-neutral-700);
  opacity:1;
}

input:disabled::-webkit-input-placeholder{
  color:var(--color-neutral-500);
}
input:disabled:-moz-placeholder{
  color:var(--color-neutral-500);
}
input:disabled::-moz-placeholder{
  color:var(--color-neutral-500);
}
input:disabled:-ms-input-placeholder{
  color:var(--color-neutral-500);
}
.dropin-input-container{
  --icon-size:var(--spacing-small);
  display:flex;
  align-items:center;
  position:relative;
}

.dropin-input-label-container{
  position:relative;
  display:flex;
  flex-grow:1;
  flex-direction:column;
}
.dropin-input--primary{
  border:var(--shape-border-width-1) solid var(--color-neutral-600);
}

.dropin-input--primary:focus{
  border-color:var(--color-neutral-800);
  border-radius:var(--shape-border-radius-1);
}

div.dropin-input-container--primary .dropin-input--disabled{
  border:var(--shape-border-width-1) solid var(--color-neutral-500);
}

.dropin-input-container--primary .dropin-input--error{
  border:var(--shape-border-width-2) solid var(--color-alert-500);
}

.dropin-input-container--primary .dropin-input--success{
  border:var(--shape-border-width-2) solid var(--color-positive-500);
}
.dropin-input--secondary{
  border:0;
  border-radius:0;
  border-top:var(--shape-border-width-1) solid transparent;
  border-bottom:var(--shape-border-width-1) solid var(--color-neutral-600);
}

.dropin-input--secondary:focus{
  border-top-left-radius:var(--shape-border-radius-1);
  border-top-right-radius:var(--shape-border-radius-1);
  border-bottom-color:var(--color-neutral-800);
}
div.dropin-input-container--secondary .dropin-input--disabled{
  border:0;
  border-radius:0;
  border-bottom:var(--shape-border-width-1) solid var(--color-neutral-500);
}

.dropin-input-container--secondary .dropin-input--error{
  border:0;
  border-radius:0;
  border-bottom:var(--shape-border-width-2) solid var(--color-alert-500);
}

.dropin-input-container--secondary .dropin-input--success{
  border:0;
  border-radius:0;
  border-bottom:var(--shape-border-width-2) solid var(--color-positive-500);
}
.dropin-input--medium{
  font:var(--type-body-2-default-font);
  letter-spacing:var(--type-body-2-default-letter-spacing);
  padding:9px var(--spacing-small);
}

.dropin-input--medium ~ label{
  font:var(--type-body-2-default-font);
  letter-spacing:var(--type-body-2-default-letter-spacing);
}

.dropin-input--large{
  font:var(--type-body-1-default-font);
  letter-spacing:var(--type-body-1-default-letter-spacing);
  padding:11px var(--spacing-small);
}

.dropin-input--large ~ label{
  font:var(--type-body-1-default-font);
  letter-spacing:var(--type-body-1-default-letter-spacing);
}
.dropin-input__label--floating{
  cursor:text;
  color:var(--color-neutral-700);
  padding-left:var(--spacing-small);
  position:absolute;
  pointer-events:none;
  transform:translateY(-50%);
  top:50%;
  transition:top 50ms ease-in, left 50ms ease-in, font-size 50ms ease-in;
  z-index:1;
}

.dropin-input__label--floating,
.dropin-input--floating{
  transition:all 0.2s;
  touch-action:manipulation;
}

.dropin-input--medium.dropin-input--floating{
  padding-top:17px;
  padding-bottom:17px;
}

.dropin-input--medium.dropin-input--floating:focus,
.dropin-input--medium.dropin-input--floating:not(:placeholder-shown){
  padding-top:26px;
}

.dropin-input--large.dropin-input--floating{
  padding-top:15px;
  padding-bottom:15px;
}

.dropin-input--large.dropin-input--floating:focus,
.dropin-input--large.dropin-input--floating:not(:placeholder-shown){
  padding-top:22px;
}

.dropin-input--floating:focus,
.dropin-input--floating:not(:placeholder-shown){
  padding-bottom:calc(var(--spacing-small) - var(--spacing-xsmall));
}

.dropin-input__label--floating--icon-left{
  padding-left:calc(var(--icon-size) + (var(--spacing-small) * 2));
}

.dropin-input-container--floating:focus-within .dropin-input__label--floating{
  color:var(--color-neutral-800);
  transform:translate(0.1em, -1.5em);
  font:var(--type-details-caption-1-font);
  letter-spacing:var(--type-details-caption-1-letter-spacing);
}

.dropin-input--floating:not(:placeholder-shown)
  ~ .dropin-input__label--floating{
  transform:translate(0.1em, -1.5em);
  font:var(--type-details-caption-1-font);
  letter-spacing:var(--type-details-caption-1-letter-spacing);
}

.dropin-input-container--disabled .dropin-icon,
.dropin-input-container--disabled .dropin-input__label--floating{
  color:var(--color-neutral-500);
}

.dropin-input--floating::-webkit-input-placeholder,
.dropin-input--floating::placeholder{
  opacity:0;
  transition:inherit;
}

.dropin-input--floating:focus::-webkit-input-placeholder,
.dropin-input--floating:focus::placeholder{
  opacity:1;
}

.dropin-input__label--floating--error{
  color:var(--color-alert-500);
}
.dropin-input--icon-right,
.dropin-input--icon-left{
  --icon-space:calc(var(--icon-size) + (var(--spacing-small) * 2));
}

.dropin-input--icon-right{
  padding-right:var(--icon-space);
}

.dropin-input--icon-left{
  padding-left:var(--icon-space);
}

.dropin-input__field-icon--left,
.dropin-input__field-icon--right{
  position:absolute;
  z-index:2;
}

.dropin-input__field-icon--left{
  left:var(--spacing-small);
}

.dropin-input__field-icon--right{
  right:var(--spacing-small);
}

.dropin-input__field-icon--error,
.dropin-input__field-icon--success{
  color:var(--color-neutral-100);
  height:var(--icon-size);
  width:var(--icon-size);
}

.dropin-input__field-icon--success{
  color:var(--color-positive-500);
}

.dropin-input__field-icon--error{
  color:var(--color-alert-500);
}
`, ""]);
  const S = P;
} }, cr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  id: ar,
  ids: lr,
  modules: sr
}, Symbol.toStringTag, { value: "Module" })), dr = 8256, ur = [8256], pr = { 6336: (te, T, e) => {
  e.d(T, { q: () => q });
  var s = e(4944), n = e(1044), d = e(5536), P = e.n(d), S = e(7008), L = e.n(S), $ = e(1496), A = e.n($), j = e(9356), x = e.n(j), k = e(9904), m = e.n(k), p = e(547), I = { attributes: { "data-dropin": "storefront-checkout", "data-sdk": "0.22.0" }, styleTagTransform: function(w, b) {
    var i;
    window._loadedStyles = window._loadedStyles ?? {};
    const o = (i = w == null ? void 0 : w.match(/^\.dropin-(\w+)/)) == null ? void 0 : i[1], v = b.getAttribute("data-sdk"), C = o ? `sdk/${o}` : b.getAttribute("data-dropin");
    b.setAttribute("data-dropin", C), b.removeAttribute("data-sdk");
    const r = window._loadedStyles[C];
    if (r) {
      const a = function(g, y) {
        const [B, f] = g.split("-"), [_, D] = y.split("-"), R = [...B.split("."), f], Y = [..._.split("."), D], W = parseInt(R[0], 10), U = parseInt(Y[0], 10);
        if (W !== U)
          return W > U ? g : y;
        const K = parseInt(R[1], 10), H = parseInt(Y[1], 10);
        if (K !== H)
          return K > H ? g : y;
        const l = parseInt(R[2], 10), c = parseInt(Y[2], 10);
        if (l !== c)
          return l > c ? g : y;
        if (R[3] && Y[3]) {
          const O = /(alpha|beta)(.*)/, N = R[3].match(O), F = Y[3].match(O), V = N[1], ee = F[1], ne = parseInt(N[2], 10), oe = parseInt(F[2], 10);
          if (V === ee)
            return ne > oe ? g : y;
          if (V === "alpha" && ee === "beta")
            return y;
          if (V === "beta" && ee === "alpha")
            return g;
        }
        return R[3] ? y : g;
      }(v, r.sdk);
      if (!o || o && a === r.sdk) {
        const g = r.style.textContent;
        r.style.textContent = `${g}
/* --- MERGED --- */
${w}`;
      } else
        o && a !== r.sdk && (r.style.textContent = `/* --- UPGRADED --- */
${w}`);
      return void b.remove();
    }
    b.textContent = w, window._loadedStyles[C] = { sdk: v, core: o, style: b };
    const t = document.querySelector("head"), { lastDropinStyleInjected: u, lastSDKStyleInjected: h } = window._loadedStyles;
    o ? (h ? t.insertBefore(b, h.nextSibling) : t.insertBefore(b, t.firstChild), window._loadedStyles.lastSDKStyleInjected = b) : (u ? t.insertBefore(b, u.nextSibling) : h ? t.insertBefore(b, h.nextSibling) : t.insertBefore(b, t.firstChild), window._loadedStyles.lastDropinStyleInjected = b);
  } };
  I.setAttributes = x(), I.insert = A().bind(null, "head"), I.domAPI = L(), I.insertStyleElement = m(), P()(p.c, I), p.c && p.c.locals && p.c.locals;
  var M = e(6660), E = e(8412), z = ["className", "icon", "heading", "headingLevel", "message", "action", "variant"];
  function G(w, b) {
    var o = Object.keys(w);
    if (Object.getOwnPropertySymbols) {
      var v = Object.getOwnPropertySymbols(w);
      b && (v = v.filter(function(C) {
        return Object.getOwnPropertyDescriptor(w, C).enumerable;
      })), o.push.apply(o, v);
    }
    return o;
  }
  function J(w) {
    for (var b = 1; b < arguments.length; b++) {
      var o = arguments[b] != null ? arguments[b] : {};
      b % 2 ? G(Object(o), !0).forEach(function(v) {
        Z(w, v, o[v]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(w, Object.getOwnPropertyDescriptors(o)) : G(Object(o)).forEach(function(v) {
        Object.defineProperty(w, v, Object.getOwnPropertyDescriptor(o, v));
      });
    }
    return w;
  }
  function Z(w, b, o) {
    var v;
    return (b = typeof (v = function(C, r) {
      if (typeof C != "object" || !C)
        return C;
      var t = C[Symbol.toPrimitive];
      if (t !== void 0) {
        var u = t.call(C, r || "default");
        if (typeof u != "object")
          return u;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (r === "string" ? String : Number)(C);
    }(b, "string")) == "symbol" ? v : String(v)) in w ? Object.defineProperty(w, b, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : w[b] = o, w;
  }
  function Q(w, b) {
    if (w == null)
      return {};
    var o, v, C = function(t, u) {
      if (t == null)
        return {};
      var h, i, a = {}, g = Object.keys(t);
      for (i = 0; i < g.length; i++)
        h = g[i], u.indexOf(h) >= 0 || (a[h] = t[h]);
      return a;
    }(w, b);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(w);
      for (v = 0; v < r.length; v++)
        o = r[v], b.indexOf(o) >= 0 || Object.prototype.propertyIsEnumerable.call(w, o) && (C[o] = w[o]);
    }
    return C;
  }
  var q = (w) => {
    var { className: b, icon: o, heading: v, headingLevel: C = 2, message: r, action: t, variant: u = "secondary" } = w, h = Q(w, z), i = C >= 1 && C <= 6 ? "h".concat(C) : "h2";
    return (0, E.im)("div", J(J({}, h), {}, { className: (0, s.i)(["dropin-illustrated-message", b]), children: (0, E.YH)(M.M, { variant: u, children: [o && (0, E.im)(n.o, { node: o, "aria-hidden": "true", size: "80", className: "dropin-illustrated-message__icon" }), v && (0, E.im)(i, { className: "dropin-illustrated-message__heading", children: v }), r && (0, E.im)(n.o, { node: r, className: "dropin-illustrated-message__message" }), t && (0, E.im)(n.o, { node: t, className: "dropin-illustrated-message__action" })] }) }));
  };
}, 5652: (te, T, e) => {
  e.d(T, { O: () => Z });
  var s = e(4944), n = e(5536), d = e.n(n), P = e(7008), S = e.n(P), L = e(1496), $ = e.n(L), A = e(9356), j = e.n(A), x = e(9904), k = e.n(x), m = e(3776), p = { attributes: { "data-dropin": "storefront-checkout", "data-sdk": "0.22.0" }, styleTagTransform: function(Q, q) {
    var u;
    window._loadedStyles = window._loadedStyles ?? {};
    const w = (u = Q == null ? void 0 : Q.match(/^\.dropin-(\w+)/)) == null ? void 0 : u[1], b = q.getAttribute("data-sdk"), o = w ? `sdk/${w}` : q.getAttribute("data-dropin");
    q.setAttribute("data-dropin", o), q.removeAttribute("data-sdk");
    const v = window._loadedStyles[o];
    if (v) {
      const h = function(i, a) {
        const [g, y] = i.split("-"), [B, f] = a.split("-"), _ = [...g.split("."), y], D = [...B.split("."), f], R = parseInt(_[0], 10), Y = parseInt(D[0], 10);
        if (R !== Y)
          return R > Y ? i : a;
        const W = parseInt(_[1], 10), U = parseInt(D[1], 10);
        if (W !== U)
          return W > U ? i : a;
        const K = parseInt(_[2], 10), H = parseInt(D[2], 10);
        if (K !== H)
          return K > H ? i : a;
        if (_[3] && D[3]) {
          const l = /(alpha|beta)(.*)/, c = _[3].match(l), O = D[3].match(l), N = c[1], F = O[1], V = parseInt(c[2], 10), ee = parseInt(O[2], 10);
          if (N === F)
            return V > ee ? i : a;
          if (N === "alpha" && F === "beta")
            return a;
          if (N === "beta" && F === "alpha")
            return i;
        }
        return _[3] ? a : i;
      }(b, v.sdk);
      if (!w || w && h === v.sdk) {
        const i = v.style.textContent;
        v.style.textContent = `${i}
/* --- MERGED --- */
${Q}`;
      } else
        w && h !== v.sdk && (v.style.textContent = `/* --- UPGRADED --- */
${Q}`);
      return void q.remove();
    }
    q.textContent = Q, window._loadedStyles[o] = { sdk: b, core: w, style: q };
    const C = document.querySelector("head"), { lastDropinStyleInjected: r, lastSDKStyleInjected: t } = window._loadedStyles;
    w ? (t ? C.insertBefore(q, t.nextSibling) : C.insertBefore(q, C.firstChild), window._loadedStyles.lastSDKStyleInjected = q) : (r ? C.insertBefore(q, r.nextSibling) : t ? C.insertBefore(q, t.nextSibling) : C.insertBefore(q, C.firstChild), window._loadedStyles.lastDropinStyleInjected = q);
  } };
  p.setAttributes = j(), p.insert = $().bind(null, "head"), p.domAPI = S(), p.insertStyleElement = k(), d()(m.c, p), m.c && m.c.locals && m.c.locals;
  var I = e(8412), M = ["name", "label", "value", "size", "checked", "disabled", "error", "description", "className", "children"];
  function E(Q, q) {
    var w = Object.keys(Q);
    if (Object.getOwnPropertySymbols) {
      var b = Object.getOwnPropertySymbols(Q);
      q && (b = b.filter(function(o) {
        return Object.getOwnPropertyDescriptor(Q, o).enumerable;
      })), w.push.apply(w, b);
    }
    return w;
  }
  function z(Q) {
    for (var q = 1; q < arguments.length; q++) {
      var w = arguments[q] != null ? arguments[q] : {};
      q % 2 ? E(Object(w), !0).forEach(function(b) {
        G(Q, b, w[b]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(Q, Object.getOwnPropertyDescriptors(w)) : E(Object(w)).forEach(function(b) {
        Object.defineProperty(Q, b, Object.getOwnPropertyDescriptor(w, b));
      });
    }
    return Q;
  }
  function G(Q, q, w) {
    var b;
    return (q = typeof (b = function(o, v) {
      if (typeof o != "object" || !o)
        return o;
      var C = o[Symbol.toPrimitive];
      if (C !== void 0) {
        var r = C.call(o, v || "default");
        if (typeof r != "object")
          return r;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (v === "string" ? String : Number)(o);
    }(q, "string")) == "symbol" ? b : String(b)) in Q ? Object.defineProperty(Q, q, { value: w, enumerable: !0, configurable: !0, writable: !0 }) : Q[q] = w, Q;
  }
  function J(Q, q) {
    if (Q == null)
      return {};
    var w, b, o = function(C, r) {
      if (C == null)
        return {};
      var t, u, h = {}, i = Object.keys(C);
      for (u = 0; u < i.length; u++)
        t = i[u], r.indexOf(t) >= 0 || (h[t] = C[t]);
      return h;
    }(Q, q);
    if (Object.getOwnPropertySymbols) {
      var v = Object.getOwnPropertySymbols(Q);
      for (b = 0; b < v.length; b++)
        w = v[b], q.indexOf(w) >= 0 || Object.prototype.propertyIsEnumerable.call(Q, w) && (o[w] = Q[w]);
    }
    return o;
  }
  var Z = (Q) => {
    var { name: q, label: w, value: b, size: o = "medium", checked: v = !1, disabled: C = !1, error: r = !1, description: t = "", className: u, children: h } = Q, i = J(Q, M);
    return (0, I.YH)("label", { className: (0, s.i)([u, "dropin-radio-button", ["dropin-radio-button--error", r], ["dropin-radio-button--disabled", C]]), children: [(0, I.im)("input", z({ name: q, value: b, checked: v, disabled: C, type: "radio", className: (0, s.i)(["dropin-radio-button__input", ["dropin-radio-button__input--error", r], ["dropin-radio-button__input--disabled", C]]) }, i)), (0, I.im)("span", { className: (0, s.i)(["dropin-radio-button__label", "dropin-radio-button__label--".concat(o), ["dropin-radio-button__label--error", r], ["dropin-radio-button__label--disabled", C]]), children: w }), (0, I.im)("span", { className: (0, s.i)(["dropin-radio-button__description", "dropin-radio-button__description--".concat(o), ["dropin-radio-button__description--disabled", C]]), children: t })] });
  };
}, 547: (te, T, e) => {
  e.d(T, { c: () => S });
  var s = e(6008), n = e.n(s), d = e(2076), P = e.n(d)()(n());
  P.push([te.id, `.dropin-illustrated-message{
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  text-align:center;
  height:100%;
  row-gap:var(--spacing-small);
}

.dropin-illustrated-message .dropin-card{
  width:100%;
}

.dropin-illustrated-message__icon{
  color:var(--color-neutral-400);
  margin:0 auto var(--spacing-medium) auto;
}

.dropin-illustrated-message__heading{
  color:var(--color-neutral-800);
  font:var(--type-headline-2-strong-font);
  letter-spacing:var(--type-headline-2-strong-letter-spacing);
  margin:0;
}

.dropin-illustrated-message__message{
  color:var(--color-neutral-800);
  font:var(--type-body-2-default-font);
  letter-spacing:var(--type-body-2-default-letter-spacing);
  text-align:center;
  margin:0;
}

.dropin-illustrated-message .dropin-illustrated-message__action{
  justify-self:center;
  align-self:center;
}
`, ""]);
  const S = P;
}, 3776: (te, T, e) => {
  e.d(T, { c: () => S });
  var s = e(6008), n = e.n(s), d = e(2076), P = e.n(d)()(n());
  P.push([te.id, `.dropin-radio-button{
  display:block;
  position:relative;
}
.dropin-radio-button__input{
  position:fixed;
  opacity:0;
  pointer-events:none;
  margin:0;
}

.dropin-radio-button__label{
  color:var(--color-neutral-800);
  position:relative;
  display:flex;
  flex-direction:row;
  align-items:center;
  cursor:pointer;
  width:fit-content;
}

.dropin-radio-button__label:before{
  content:' ';
  display:inline-block;
  position:relative;
  width:16px;
  height:16px;
  border-radius:var(--shape-border-radius-3);
  background-color:var(--color-neutral-50);
  border:var(--shape-border-width-1) solid var(--color-neutral-600);
  margin-right:var(--spacing-small);
  vertical-align:middle;
}

.dropin-radio-button__label:hover::before{
  border:var(--shape-border-width-1) solid var(--color-neutral-700);
}

.dropin-radio-button__input:checked + .dropin-radio-button__label:after{
  content:' ';
  display:block;
  position:absolute;
  width:8px;
  height:8px;
  border-radius:var(--shape-border-radius-3);
  margin-left:calc(var(--spacing-xxsmall) + var(--shape-border-width-1));
  background:var(--color-brand-500);
  accent-color:var(--color-brand-500);
}

.dropin-radio-button__input:focus-visible + .dropin-radio-button__label:before{
  border:var(--shape-border-width-1) solid var(--color-neutral-800);
  box-shadow:0 0 0 var(--shape-icon-stroke-4) var(--color-neutral-400);
}

.dropin-radio-button__description{
  clear:both;
  color:var(--color-neutral-700);
  margin-left:calc(var(--spacing-big) + var(--shape-border-width-3));
  margin-top:var(--spacing-xxsmall);
}

.dropin-radio-button__description:empty{
  display:none;
}
.dropin-radio-button__label--medium{
  font:var(--type-body-2-default-font);
  letter-spacing:var(--type-body-2-default-letter-spacing);
}

.dropin-radio-button__label--large{
  font:var(--type-body-1-default-font);
  letter-spacing:var(--type-body-1-default-letter-spacing);
}

.dropin-radio-button__description--medium{
  font:var(--type-details-caption-2-font);
  letter-spacing:var(--type-details-caption-2-letter-spacing);
}

.dropin-radio-button__description--large{
  font:var(--type-body-2-default-font);
  letter-spacing:var(--type-body-2-default-letter-spacing);
}
.dropin-radio-button__input--disabled,
.dropin-radio-button__label--disabled,
.dropin-radio-button__description--disabled{
  color:var(--color-neutral-500);
  cursor:default;
}
div.dropin-radio-button__label--disabled:before{
  box-shadow:0 0 0 var(--shape-border-width-1) var(--color-neutral-500);
  background-color:var(--color-neutral-300);
}
.dropin-radio-button__label--error:before{
  box-shadow:0 0 0 var(--shape-border-width-2) var(--color-alert-500);
  background:var(--color-neutral-50) 0 0% no-repeat padding-box;
}

.dropin-radio-button__input--error:checked
  + .dropin-radio-button__label--error:after{
  background:var(--color-alert-500);
}
`, ""]);
  const S = P;
} }, fr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  id: dr,
  ids: ur,
  modules: pr
}, Symbol.toStringTag, { value: "Module" })), mr = 196, vr = [196, 1680], gr = { 1680: (te, T, e) => {
  e.r(T), e.d(T, { default: () => P });
  var s, n = e(2796);
  function d() {
    return d = Object.assign ? Object.assign.bind() : function(S) {
      for (var L = 1; L < arguments.length; L++) {
        var $ = arguments[L];
        for (var A in $)
          Object.prototype.hasOwnProperty.call($, A) && (S[A] = $[A]);
      }
      return S;
    }, d.apply(this, arguments);
  }
  const P = function(S) {
    return n.kv("svg", d({ width: 24, height: 24, fill: "none", xmlns: "http://www.w3.org/2000/svg" }, S), s || (s = n.kv("path", { d: "M7.745 9.877 12 14.132l4.255-4.255", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "square", strokeLinejoin: "round" })));
  };
}, 6360: (te, T, e) => {
  e.d(T, { q: () => b });
  var s = e(3720), n = e(5536), d = e.n(n), P = e(7008), S = e.n(P), L = e(1496), $ = e.n(L), A = e(9356), j = e.n(A), x = e(9904), k = e.n(x), m = e(2467), p = { attributes: { "data-dropin": "storefront-checkout", "data-sdk": "0.22.0" }, styleTagTransform: function(o, v) {
    var g;
    window._loadedStyles = window._loadedStyles ?? {};
    const C = (g = o == null ? void 0 : o.match(/^\.dropin-(\w+)/)) == null ? void 0 : g[1], r = v.getAttribute("data-sdk"), t = C ? `sdk/${C}` : v.getAttribute("data-dropin");
    v.setAttribute("data-dropin", t), v.removeAttribute("data-sdk");
    const u = window._loadedStyles[t];
    if (u) {
      const y = function(B, f) {
        const [_, D] = B.split("-"), [R, Y] = f.split("-"), W = [..._.split("."), D], U = [...R.split("."), Y], K = parseInt(W[0], 10), H = parseInt(U[0], 10);
        if (K !== H)
          return K > H ? B : f;
        const l = parseInt(W[1], 10), c = parseInt(U[1], 10);
        if (l !== c)
          return l > c ? B : f;
        const O = parseInt(W[2], 10), N = parseInt(U[2], 10);
        if (O !== N)
          return O > N ? B : f;
        if (W[3] && U[3]) {
          const F = /(alpha|beta)(.*)/, V = W[3].match(F), ee = U[3].match(F), ne = V[1], oe = ee[1], pe = parseInt(V[2], 10), _e = parseInt(ee[2], 10);
          if (ne === oe)
            return pe > _e ? B : f;
          if (ne === "alpha" && oe === "beta")
            return f;
          if (ne === "beta" && oe === "alpha")
            return B;
        }
        return W[3] ? f : B;
      }(r, u.sdk);
      if (!C || C && y === u.sdk) {
        const B = u.style.textContent;
        u.style.textContent = `${B}
/* --- MERGED --- */
${o}`;
      } else
        C && y !== u.sdk && (u.style.textContent = `/* --- UPGRADED --- */
${o}`);
      return void v.remove();
    }
    v.textContent = o, window._loadedStyles[t] = { sdk: r, core: C, style: v };
    const h = document.querySelector("head"), { lastDropinStyleInjected: i, lastSDKStyleInjected: a } = window._loadedStyles;
    C ? (a ? h.insertBefore(v, a.nextSibling) : h.insertBefore(v, h.firstChild), window._loadedStyles.lastSDKStyleInjected = v) : (i ? h.insertBefore(v, i.nextSibling) : a ? h.insertBefore(v, a.nextSibling) : h.insertBefore(v, h.firstChild), window._loadedStyles.lastDropinStyleInjected = v);
  } };
  p.setAttributes = j(), p.insert = $().bind(null, "head"), p.domAPI = S(), p.insertStyleElement = k(), d()(m.c, p), m.c && m.c.locals && m.c.locals;
  var I = e(1680), M = e(4944), E = e(2796), z = e(8596), G = e(8412), J = ["name", "value", "options", "variant", "floatingLabel", "size", "handleSelect", "disabled", "error", "placeholder", "defaultOption", "icon", "className"];
  function Z(o, v) {
    var C = Object.keys(o);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(o);
      v && (r = r.filter(function(t) {
        return Object.getOwnPropertyDescriptor(o, t).enumerable;
      })), C.push.apply(C, r);
    }
    return C;
  }
  function Q(o) {
    for (var v = 1; v < arguments.length; v++) {
      var C = arguments[v] != null ? arguments[v] : {};
      v % 2 ? Z(Object(C), !0).forEach(function(r) {
        q(o, r, C[r]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(C)) : Z(Object(C)).forEach(function(r) {
        Object.defineProperty(o, r, Object.getOwnPropertyDescriptor(C, r));
      });
    }
    return o;
  }
  function q(o, v, C) {
    var r;
    return (v = typeof (r = function(t, u) {
      if (typeof t != "object" || !t)
        return t;
      var h = t[Symbol.toPrimitive];
      if (h !== void 0) {
        var i = h.call(t, u || "default");
        if (typeof i != "object")
          return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (u === "string" ? String : Number)(t);
    }(v, "string")) == "symbol" ? r : String(r)) in o ? Object.defineProperty(o, v, { value: C, enumerable: !0, configurable: !0, writable: !0 }) : o[v] = C, o;
  }
  function w(o, v) {
    if (o == null)
      return {};
    var C, r, t = function(h, i) {
      if (h == null)
        return {};
      var a, g, y = {}, B = Object.keys(h);
      for (g = 0; g < B.length; g++)
        a = B[g], i.indexOf(a) >= 0 || (y[a] = h[a]);
      return y;
    }(o, v);
    if (Object.getOwnPropertySymbols) {
      var u = Object.getOwnPropertySymbols(o);
      for (r = 0; r < u.length; r++)
        C = u[r], v.indexOf(C) >= 0 || Object.prototype.propertyIsEnumerable.call(o, C) && (t[C] = o[C]);
    }
    return t;
  }
  var b = (o) => {
    var v, { name: C, value: r = null, options: t, variant: u = "primary", floatingLabel: h, size: i = "medium", handleSelect: a = () => {
    }, disabled: g = !1, error: y = !1, placeholder: B, defaultOption: f, icon: _, className: D } = o, R = w(o, J), Y = (R == null ? void 0 : R.id) || C || "dropin-picker-".concat(Math.random().toString(36)), W = t == null ? void 0 : t.find((O) => !O.disabled), [U, K] = (0, E.oT)({ value: r, text: (f == null ? void 0 : f.text) || B || (W == null ? void 0 : W.text), icon: _ });
    (0, E.YB)(() => {
      var O = t == null ? void 0 : t.find((N) => N.value === r);
      K(O ?? { value: (f == null ? void 0 : f.value) || (B || h ? null : W == null ? void 0 : W.value), text: (f == null ? void 0 : f.text) || B || (W == null ? void 0 : W.text), icon: _ });
    }, [r, t, B, _, f, h]);
    var H = t == null ? void 0 : t.map((O) => {
      var { value: N, text: F, disabled: V } = O, ee = N === U.value;
      return (0, G.im)("option", { value: N, selected: ee, disabled: V, className: (0, M.i)(["dropin-picker__option"]), children: F }, N);
    }), l = (0, z.yK)(null), c = !((v = l.current) !== null && v !== void 0 && v.selected && !f);
    return (0, G.YH)("div", { className: (0, M.i)([D, "dropin-picker", "dropin-picker__".concat(i), ["dropin-picker__floating", !!h], ["dropin-picker__selected", c], ["dropin-picker__error", y], ["dropin-picker__disabled", g], ["dropin-picker__icon", _]]), children: [_ && (0, G.im)(_.type, Q(Q({}, _.props), {}, { className: "dropin-picker__icon--placeholder" })), (0, G.YH)("select", Q(Q({ id: Y, className: (0, M.i)(["dropin-picker__select", "dropin-picker__select--".concat(u), "dropin-picker__select--".concat(i), ["dropin-picker__select--floating", !!h]]), name: C, "aria-label": C, disabled: g, onChange: (O) => {
      var { options: N, value: F } = O.target;
      for (var V of N)
        V.selected && (K({ value: F, text: V.text, icon: _ }), a(O));
    } }, R), {}, { children: [!f && (h || B) && (0, G.im)("option", { value: "", ref: l, className: (0, M.i)(["dropin-picker__option dropin-picker__placeholder"]), children: h ?? B }, r), H] })), (0, G.im)(s.G, { source: I.default, size: "24", stroke: "2", className: "dropin-picker__chevronDown" }), h && c && (0, G.im)("label", { htmlFor: Y, className: (0, M.i)(["dropin-picker__floatingLabel", !!h]), children: h })] });
  };
}, 6156: (te, T, e) => {
  function s(S, L) {
    var $ = Object.keys(S);
    if (Object.getOwnPropertySymbols) {
      var A = Object.getOwnPropertySymbols(S);
      L && (A = A.filter(function(j) {
        return Object.getOwnPropertyDescriptor(S, j).enumerable;
      })), $.push.apply($, A);
    }
    return $;
  }
  function n(S) {
    for (var L = 1; L < arguments.length; L++) {
      var $ = arguments[L] != null ? arguments[L] : {};
      L % 2 ? s(Object($), !0).forEach(function(A) {
        d(S, A, $[A]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(S, Object.getOwnPropertyDescriptors($)) : s(Object($)).forEach(function(A) {
        Object.defineProperty(S, A, Object.getOwnPropertyDescriptor($, A));
      });
    }
    return S;
  }
  function d(S, L, $) {
    var A;
    return (L = typeof (A = function(j, x) {
      if (typeof j != "object" || !j)
        return j;
      var k = j[Symbol.toPrimitive];
      if (k !== void 0) {
        var m = k.call(j, x || "default");
        if (typeof m != "object")
          return m;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (x === "string" ? String : Number)(j);
    }(L, "string")) == "symbol" ? A : String(A)) in S ? Object.defineProperty(S, L, { value: $, enumerable: !0, configurable: !0, writable: !0 }) : S[L] = $, S;
  }
  e.d(T, { a: () => P });
  var P = (S) => {
    var L = new FormData(S), $ = Object.fromEntries(L);
    return Object.entries($).reduce((A, j) => {
      var [x] = j, k = S.elements[x];
      return k != null && k.validationMessage ? n(n({}, A), {}, { [x]: k.validationMessage }) : n({}, A);
    }, {});
  };
}, 2467: (te, T, e) => {
  e.d(T, { c: () => S });
  var s = e(6008), n = e.n(s), d = e(2076), P = e.n(d)()(n());
  P.push([te.id, `.dropin-picker{
  position:relative;
  display:flex;
  flex-direction:row;
  background-color:var(--color-neutral-50);
  justify-content:space-between;
  align-items:center;
  cursor:pointer;
  gap:var(--spacing-small);
  text-overflow:ellipsis;
  white-space:nowrap;
  overflow:hidden;
}

.dropin-picker select{
  background-color:transparent;
  border:var(--shape-border-width-1) solid var(--color-neutral-600);
  border-radius:var(--shape-border-radius-1);
  color:var(--color-neutral-700);
  appearance:none;
  box-shadow:none;
  flex:1;
  cursor:pointer;
  width:100%;
  overflow:hidden;
  white-space:nowrap;
  text-overflow:ellipsis;
}

.dropin-picker__select:focus{
  outline:none;
  border:var(--shape-border-width-1) solid var(--color-neutral-800);
}
.dropin-picker__medium .dropin-picker__select--primary,
.dropin-picker__medium .dropin-picker__select--secondary{
  padding:9px var(--spacing-xxbig) 9px var(--spacing-small);
}

.dropin-picker__large .dropin-picker__select--primary,
.dropin-picker__large .dropin-picker__select--secondary{
  padding:11px var(--spacing-xxbig) 11px var(--spacing-small);
}

.dropin-picker__select--medium{
  font:var(--type-body-2-default-font);
  letter-spacing:var(--type-body-2-default-letter-spacing);
}

.dropin-picker__select--large{
  font:var(--type-body-1-default-font);
  letter-spacing:var(--type-body-1-default-letter-spacing);
}
.dropin-picker__chevronDown{
  z-index:1;
  position:absolute;
  color:var(--color-neutral-700);
  right:var(--spacing-small);
  display:block;
  pointer-events:none;
  padding:0;
  height:var(--icon-size);
  width:var(--icon-size);
}
.dropin-picker__floatingLabel{
  position:absolute;
  pointer-events:none;
  left:var(--spacing-small);
  color:var(--color-neutral-700);
  touch-action:manipulation;
  transform:translateY(-50%);
  transition:top 20ms ease-in, font-size 50ms ease-in;
}

.dropin-picker__select--floating:focus ~ label{
  transition:all 40ms;
}
.dropin-picker__selected select{
  color:var(--color-neutral-800);
}
.dropin-picker__selected label{
  top:30%;
}
.dropin-picker__medium.dropin-picker__floating.dropin-picker__selected label{
  font:var(--type-details-caption-1-font);
  letter-spacing:var(--type-details-caption-1-letter-spacing);
}

.dropin-picker__large.dropin-picker__floating.dropin-picker__selected label{
  font:var(--type-details-caption-2-font);
  letter-spacing:var(--type-details-caption-2-letter-spacing);
}
.dropin-picker__medium.dropin-picker__floating select{
  padding:17px var(--spacing-small);
}

.dropin-picker__large.dropin-picker__floating select{
  padding:15px var(--spacing-small);
}
.dropin-picker__large.dropin-picker__floating.dropin-picker__selected select{
  padding:25px var(--spacing-xxbig) 5px var(--spacing-small);
}

.dropin-picker__medium.dropin-picker__floating.dropin-picker__selected select{
  padding:27px var(--spacing-xxbig) 7px var(--spacing-small);
}
select::-ms-expand{
  display:none;
}
.dropin-picker__disabled select.dropin-picker__select{
  background-color:var(--color-neutral-300);
  border:var(--shape-border-width-1) solid var(--color-neutral-500);
  color:var(--color-neutral-500);
  cursor:not-allowed;
}

.dropin-picker__disabled svg.dropin-picker__chevronDown{
  color:var(--color-neutral-500);
}
.dropin-picker__error select{
  border:var(--shape-border-width-2) solid var(--color-alert-500);
  color:var(--color-alert-500);
}

.dropin-picker__error .dropin-picker__select:focus{
  border:var(--shape-border-width-2) solid var(--color-alert-500);
}

.dropin-picker__error .dropin-picker__chevronDown{
  color:var(--color-alert-500);
}

.dropin-picker__error label{
  color:var(--color-alert-500);
}
.dropin-picker select.dropin-picker__select--secondary{
  border-top:var(--shape-border-width-1) solid transparent;
  border-left:0 none;
  border-right:0 none;
  border-radius:0;
}

.dropin-picker__disabled select.dropin-picker__select--secondary{
  border-bottom:var(--shape-border-width-1) solid var(--color-neutral-500);
}
.dropin-picker__error select.dropin-picker__select--secondary{
  border-top:var(--shape-border-width-1) solid transparent;
  border-left:0 none;
  border-right:0 none;
}
.dropin-picker__icon--placeholder{
  z-index:1;
  position:absolute;
  color:var(--color-neutral-700);
  left:var(--spacing-small);
  display:block;
  pointer-events:none;
  padding:0;
  height:var(--icon-size);
  width:var(--icon-size);
}

.dropin-picker__icon select.dropin-picker__select{
  padding-left:var(--spacing-xxbig);
}

.dropin-picker__floating.dropin-picker__selected.dropin-picker__icon select{
  padding-left:var(--spacing-xxbig);
}

.dropin-picker__floating.dropin-picker__selected.dropin-picker__icon label{
  left:var(--spacing-xxbig);
}
`, ""]);
  const S = P;
} }, br = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  id: mr,
  ids: vr,
  modules: gr
}, Symbol.toStringTag, { value: "Module" })), yr = 1424, hr = [1424, 1600, 1268, 5476], _r = { 1600: (te, T, e) => {
  e.r(T), e.d(T, { default: () => P });
  var s, n = e(2796);
  function d() {
    return d = Object.assign ? Object.assign.bind() : function(S) {
      for (var L = 1; L < arguments.length; L++) {
        var $ = arguments[L];
        for (var A in $)
          Object.prototype.hasOwnProperty.call($, A) && (S[A] = $[A]);
      }
      return S;
    }, d.apply(this, arguments);
  }
  const P = function(S) {
    return n.kv("svg", d({ "data-name": "Icon \\u2013 Add \\u2013 Base", xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24 }, S), s || (s = n.kv("g", { "data-name": "Add icon", fill: "none", stroke: "currentColor" }, n.kv("path", { vectorEffect: "non-scaling-stroke", "data-name": "Line 579", d: "M11.95 5.65v12.7" }), n.kv("path", { vectorEffect: "non-scaling-stroke", "data-name": "Line 580", d: "M5.655 12h12.7" }))));
  };
}, 1268: (te, T, e) => {
  e.r(T), e.d(T, { default: () => P });
  var s, n = e(2796);
  function d() {
    return d = Object.assign ? Object.assign.bind() : function(S) {
      for (var L = 1; L < arguments.length; L++) {
        var $ = arguments[L];
        for (var A in $)
          Object.prototype.hasOwnProperty.call($, A) && (S[A] = $[A]);
      }
      return S;
    }, d.apply(this, arguments);
  }
  const P = function(S) {
    return n.kv("svg", d({ width: 24, height: 24, fill: "none", xmlns: "http://www.w3.org/2000/svg" }, S), s || (s = n.kv("path", { d: "M17.333 11.75H6.667", strokeWidth: 1.5, strokeLinecap: "square", strokeLinejoin: "round", vectorEffect: "non-scaling-stroke", stroke: "currentColor" })));
  };
}, 5476: (te, T, e) => {
  e.r(T), e.d(T, { default: () => P });
  var s, n = e(2796);
  function d() {
    return d = Object.assign ? Object.assign.bind() : function(S) {
      for (var L = 1; L < arguments.length; L++) {
        var $ = arguments[L];
        for (var A in $)
          Object.prototype.hasOwnProperty.call($, A) && (S[A] = $[A]);
      }
      return S;
    }, d.apply(this, arguments);
  }
  const P = function(S) {
    return n.kv("svg", d({ xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, fill: "none" }, S), s || (s = n.kv("path", { d: "M1 5h22M17.367 22H6.634c-.954 0-1.744-.731-1.796-1.666L4 5h16l-.838 15.334c-.05.935-.84 1.666-1.796 1.666h.001ZM9.872 2h4.256c.48 0 .872.398.872.889V5H9V2.889c0-.49.39-.889.872-.889ZM8.874 8.58l.52 9.102M14.667 8.58l-.521 9.102", stroke: "#000", strokeWidth: 1.5, strokeMiterlimit: 10 })));
  };
}, 4840: (te, T, e) => {
  e.d(T, { G: () => r, O: () => C });
  var s = e(2796), n = e(4944), d = e(3720), P = e(5092), S = e(1600), L = e(1268), $ = e(2460), A = e(5536), j = e.n(A), x = e(7008), k = e.n(x), m = e(1496), p = e.n(m), I = e(9356), M = e.n(I), E = e(9904), z = e.n(E), G = e(9624), J = { attributes: { "data-dropin": "storefront-checkout", "data-sdk": "0.22.0" }, styleTagTransform: function(t, u) {
    var _;
    window._loadedStyles = window._loadedStyles ?? {};
    const h = (_ = t == null ? void 0 : t.match(/^\.dropin-(\w+)/)) == null ? void 0 : _[1], i = u.getAttribute("data-sdk"), a = h ? `sdk/${h}` : u.getAttribute("data-dropin");
    u.setAttribute("data-dropin", a), u.removeAttribute("data-sdk");
    const g = window._loadedStyles[a];
    if (g) {
      const D = function(R, Y) {
        const [W, U] = R.split("-"), [K, H] = Y.split("-"), l = [...W.split("."), U], c = [...K.split("."), H], O = parseInt(l[0], 10), N = parseInt(c[0], 10);
        if (O !== N)
          return O > N ? R : Y;
        const F = parseInt(l[1], 10), V = parseInt(c[1], 10);
        if (F !== V)
          return F > V ? R : Y;
        const ee = parseInt(l[2], 10), ne = parseInt(c[2], 10);
        if (ee !== ne)
          return ee > ne ? R : Y;
        if (l[3] && c[3]) {
          const oe = /(alpha|beta)(.*)/, pe = l[3].match(oe), _e = c[3].match(oe), ae = pe[1], Se = _e[1], le = parseInt(pe[2], 10), se = parseInt(_e[2], 10);
          if (ae === Se)
            return le > se ? R : Y;
          if (ae === "alpha" && Se === "beta")
            return Y;
          if (ae === "beta" && Se === "alpha")
            return R;
        }
        return l[3] ? Y : R;
      }(i, g.sdk);
      if (!h || h && D === g.sdk) {
        const R = g.style.textContent;
        g.style.textContent = `${R}
/* --- MERGED --- */
${t}`;
      } else
        h && D !== g.sdk && (g.style.textContent = `/* --- UPGRADED --- */
${t}`);
      return void u.remove();
    }
    u.textContent = t, window._loadedStyles[a] = { sdk: i, core: h, style: u };
    const y = document.querySelector("head"), { lastDropinStyleInjected: B, lastSDKStyleInjected: f } = window._loadedStyles;
    h ? (f ? y.insertBefore(u, f.nextSibling) : y.insertBefore(u, y.firstChild), window._loadedStyles.lastSDKStyleInjected = u) : (B ? y.insertBefore(u, B.nextSibling) : f ? y.insertBefore(u, f.nextSibling) : y.insertBefore(u, y.firstChild), window._loadedStyles.lastDropinStyleInjected = u);
  } };
  J.setAttributes = M(), J.insert = p().bind(null, "head"), J.domAPI = k(), J.insertStyleElement = z(), j()(G.c, J), G.c && G.c.locals && G.c.locals;
  var Z = e(8412), Q = ["className", "children", "title", "secondaryText", "actionIconPosition", "iconOpen", "iconClose", "iconLeft", "showIconLeft", "renderContentWhenClosed", "onStateChange"], q = ["className", "children", "actionIconPosition", "iconOpen", "iconClose"];
  function w(t, u) {
    var h = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(t);
      u && (i = i.filter(function(a) {
        return Object.getOwnPropertyDescriptor(t, a).enumerable;
      })), h.push.apply(h, i);
    }
    return h;
  }
  function b(t) {
    for (var u = 1; u < arguments.length; u++) {
      var h = arguments[u] != null ? arguments[u] : {};
      u % 2 ? w(Object(h), !0).forEach(function(i) {
        o(t, i, h[i]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(h)) : w(Object(h)).forEach(function(i) {
        Object.defineProperty(t, i, Object.getOwnPropertyDescriptor(h, i));
      });
    }
    return t;
  }
  function o(t, u, h) {
    var i;
    return (u = typeof (i = function(a, g) {
      if (typeof a != "object" || !a)
        return a;
      var y = a[Symbol.toPrimitive];
      if (y !== void 0) {
        var B = y.call(a, g || "default");
        if (typeof B != "object")
          return B;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (g === "string" ? String : Number)(a);
    }(u, "string")) == "symbol" ? i : String(i)) in t ? Object.defineProperty(t, u, { value: h, enumerable: !0, configurable: !0, writable: !0 }) : t[u] = h, t;
  }
  function v(t, u) {
    if (t == null)
      return {};
    var h, i, a = function(y, B) {
      if (y == null)
        return {};
      var f, _, D = {}, R = Object.keys(y);
      for (_ = 0; _ < R.length; _++)
        f = R[_], B.indexOf(f) >= 0 || (D[f] = y[f]);
      return D;
    }(t, u);
    if (Object.getOwnPropertySymbols) {
      var g = Object.getOwnPropertySymbols(t);
      for (i = 0; i < g.length; i++)
        h = g[i], u.indexOf(h) >= 0 || Object.prototype.propertyIsEnumerable.call(t, h) && (a[h] = t[h]);
    }
    return a;
  }
  var C = (t) => {
    var { className: u, children: h, title: i, secondaryText: a, actionIconPosition: g = "left", iconOpen: y = S.default, iconClose: B = L.default, iconLeft: f = S.default, showIconLeft: _ = !1, renderContentWhenClosed: D = !0, onStateChange: R } = t, Y = v(t, Q), [W, U] = (0, s.oT)(!1), K = (N) => {
      N.stopImmediatePropagation();
      var F = !W;
      U(F), R == null || R(F);
    }, H = (0, $.cF)("Dropin.Accordion.".concat(W ? "close" : "open", ".label")).label, l = (0, Z.im)(d.G, { source: y, size: "24", onClick: K, onKeyPress: K, className: "dropin-accordion-section__open-icon" }), c = (0, Z.im)(d.G, { source: B, size: "24", onClick: K, onKeyPress: K, className: "dropin-accordion-section__close-icon" }), O = (0, Z.im)(d.G, { source: f, size: "24" });
    return (0, Z.YH)("div", b(b({}, Y), {}, { className: (0, n.i)(["dropin-accordion-section", u]), children: [(0, Z.YH)("div", { className: "dropin-accordion-section__heading", children: [(0, Z.im)("div", { className: "dropin-accordion-section__flex", onClick: K, onKeyPress: K, role: "button", "aria-label": "".concat(H, " ").concat(i), tabIndex: 0, children: (0, Z.YH)("div", { className: "dropin-accordion-section__title-container", children: [g === "left" && (W ? c : l), _ && O, (0, Z.im)("h3", { className: "dropin-accordion-section__title", children: i })] }) }), (0, Z.YH)("div", { className: "dropin-accordion-section__secondary-text-container", children: [a && (0, Z.im)("h4", { className: "dropin-accordion-section__secondary-text", children: a }), g === "right" && (W ? c : l)] })] }), (0, Z.im)("div", { className: "dropin-accordion-section__content-container", style: { display: W ? "grid" : "none" }, children: (W || D && !W) && h })] }));
  }, r = (t) => {
    var { className: u, children: h, actionIconPosition: i = "left", iconOpen: a = S.default, iconClose: g = L.default } = t, y = v(t, q), B = (0, Z.im)(P.c, { variant: "secondary" });
    return (0, Z.im)("div", b(b({}, y), {}, { className: (0, n.i)(["dropin-accordion", u]), children: [B, ...(Array.isArray(h) ? h : [h]).map((f) => (0, Z.YH)(Z.ae, { children: [(0, Z.im)(C, b(b({}, f.props), {}, { actionIconPosition: i, iconOpen: a, iconClose: g })), B] }))] }));
  };
}, 492: (te, T, e) => {
  e.d(T, { q: () => Q });
  var s = e(4944), n = e(1044), d = e(5536), P = e.n(d), S = e(7008), L = e.n(S), $ = e(1496), A = e.n($), j = e(9356), x = e.n(j), k = e(9904), m = e.n(k), p = e(8236), I = { attributes: { "data-dropin": "storefront-checkout", "data-sdk": "0.22.0" }, styleTagTransform: function(q, w) {
    var h;
    window._loadedStyles = window._loadedStyles ?? {};
    const b = (h = q == null ? void 0 : q.match(/^\.dropin-(\w+)/)) == null ? void 0 : h[1], o = w.getAttribute("data-sdk"), v = b ? `sdk/${b}` : w.getAttribute("data-dropin");
    w.setAttribute("data-dropin", v), w.removeAttribute("data-sdk");
    const C = window._loadedStyles[v];
    if (C) {
      const i = function(a, g) {
        const [y, B] = a.split("-"), [f, _] = g.split("-"), D = [...y.split("."), B], R = [...f.split("."), _], Y = parseInt(D[0], 10), W = parseInt(R[0], 10);
        if (Y !== W)
          return Y > W ? a : g;
        const U = parseInt(D[1], 10), K = parseInt(R[1], 10);
        if (U !== K)
          return U > K ? a : g;
        const H = parseInt(D[2], 10), l = parseInt(R[2], 10);
        if (H !== l)
          return H > l ? a : g;
        if (D[3] && R[3]) {
          const c = /(alpha|beta)(.*)/, O = D[3].match(c), N = R[3].match(c), F = O[1], V = N[1], ee = parseInt(O[2], 10), ne = parseInt(N[2], 10);
          if (F === V)
            return ee > ne ? a : g;
          if (F === "alpha" && V === "beta")
            return g;
          if (F === "beta" && V === "alpha")
            return a;
        }
        return D[3] ? g : a;
      }(o, C.sdk);
      if (!b || b && i === C.sdk) {
        const a = C.style.textContent;
        C.style.textContent = `${a}
/* --- MERGED --- */
${q}`;
      } else
        b && i !== C.sdk && (C.style.textContent = `/* --- UPGRADED --- */
${q}`);
      return void w.remove();
    }
    w.textContent = q, window._loadedStyles[v] = { sdk: o, core: b, style: w };
    const r = document.querySelector("head"), { lastDropinStyleInjected: t, lastSDKStyleInjected: u } = window._loadedStyles;
    b ? (u ? r.insertBefore(w, u.nextSibling) : r.insertBefore(w, r.firstChild), window._loadedStyles.lastSDKStyleInjected = w) : (t ? r.insertBefore(w, t.nextSibling) : u ? r.insertBefore(w, u.nextSibling) : r.insertBefore(w, r.firstChild), window._loadedStyles.lastDropinStyleInjected = w);
  } };
  I.setAttributes = x(), I.insert = A().bind(null, "head"), I.domAPI = L(), I.insertStyleElement = m(), P()(p.c, I), p.c && p.c.locals && p.c.locals;
  var M = e(8412), E = ["value", "variant", "size", "icon", "className", "children", "disabled", "active", "activeChildren", "activeIcon", "href"];
  function z(q, w) {
    var b = Object.keys(q);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(q);
      w && (o = o.filter(function(v) {
        return Object.getOwnPropertyDescriptor(q, v).enumerable;
      })), b.push.apply(b, o);
    }
    return b;
  }
  function G(q) {
    for (var w = 1; w < arguments.length; w++) {
      var b = arguments[w] != null ? arguments[w] : {};
      w % 2 ? z(Object(b), !0).forEach(function(o) {
        J(q, o, b[o]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(q, Object.getOwnPropertyDescriptors(b)) : z(Object(b)).forEach(function(o) {
        Object.defineProperty(q, o, Object.getOwnPropertyDescriptor(b, o));
      });
    }
    return q;
  }
  function J(q, w, b) {
    var o;
    return (w = typeof (o = function(v, C) {
      if (typeof v != "object" || !v)
        return v;
      var r = v[Symbol.toPrimitive];
      if (r !== void 0) {
        var t = r.call(v, C || "default");
        if (typeof t != "object")
          return t;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (C === "string" ? String : Number)(v);
    }(w, "string")) == "symbol" ? o : String(o)) in q ? Object.defineProperty(q, w, { value: b, enumerable: !0, configurable: !0, writable: !0 }) : q[w] = b, q;
  }
  function Z(q, w) {
    if (q == null)
      return {};
    var b, o, v = function(r, t) {
      if (r == null)
        return {};
      var u, h, i = {}, a = Object.keys(r);
      for (h = 0; h < a.length; h++)
        u = a[h], t.indexOf(u) >= 0 || (i[u] = r[u]);
      return i;
    }(q, w);
    if (Object.getOwnPropertySymbols) {
      var C = Object.getOwnPropertySymbols(q);
      for (o = 0; o < C.length; o++)
        b = C[o], w.indexOf(b) >= 0 || Object.prototype.propertyIsEnumerable.call(q, b) && (v[b] = q[b]);
    }
    return v;
  }
  var Q = (q) => {
    var { value: w, variant: b = "primary", size: o = "medium", icon: v, className: C, children: r, disabled: t = !1, active: u = !1, activeChildren: h, activeIcon: i, href: a } = q, g = Z(q, E), y = "dropin-button";
    (v && !r || v && u && !h || !v && u && i) && (y = "dropin-iconButton"), u && h && (y = "dropin-button"), C = (0, s.i)([y, "".concat(y, "--").concat(o), "".concat(y, "--").concat(b), ["".concat(y, "--").concat(b, "--disabled"), t], r && v && "".concat(y, "--with-icon"), !r && h && v && "".concat(y, "--with-icon"), u && i && "".concat(y, "--with-icon"), C]);
    var B = (0, s.i)(["dropin-button-icon", "dropin-button-icon--".concat(b), ["dropin-button-icon--".concat(b, "--disabled"), t], v == null ? void 0 : v.props.className]), f = a ? G(G({ node: (0, M.im)("a", {}), role: "link", href: a }, g), {}, { disabled: t, active: u }) : G(G({ node: (0, M.im)("button", {}), role: "button" }, g), {}, { value: w, disabled: t, active: u });
    return (0, M.YH)(n.o, G(G({}, f), {}, { className: C, children: [v && !u && (0, M.im)(n.o, { node: v, className: B }), i && u && (0, M.im)(n.o, { node: i, className: B }), r && !u && (typeof r == "string" ? (0, M.im)("span", { children: r }) : r), u && h && (typeof h == "string" ? (0, M.im)("span", { children: h }) : h)] }));
  };
}, 4880: (te, T, e) => {
  e.d(T, { Y: () => W });
  var s = e(2796), n = e(4944), d = e(1044), P = e(9188), S = e(312), L = e(8424), $ = e(8596), A = e(2780), j = e(1268), x = e(1600), k = e(3720), m = e(2460), p = e(5536), I = e.n(p), M = e(7008), E = e.n(M), z = e(1496), G = e.n(z), J = e(9356), Z = e.n(J), Q = e(9904), q = e.n(Q), w = e(572), b = { attributes: { "data-dropin": "storefront-checkout", "data-sdk": "0.22.0" }, styleTagTransform: function(U, K) {
    var ee;
    window._loadedStyles = window._loadedStyles ?? {};
    const H = (ee = U == null ? void 0 : U.match(/^\.dropin-(\w+)/)) == null ? void 0 : ee[1], l = K.getAttribute("data-sdk"), c = H ? `sdk/${H}` : K.getAttribute("data-dropin");
    K.setAttribute("data-dropin", c), K.removeAttribute("data-sdk");
    const O = window._loadedStyles[c];
    if (O) {
      const ne = function(oe, pe) {
        const [_e, ae] = oe.split("-"), [Se, le] = pe.split("-"), se = [..._e.split("."), ae], fe = [...Se.split("."), le], be = parseInt(se[0], 10), ue = parseInt(fe[0], 10);
        if (be !== ue)
          return be > ue ? oe : pe;
        const de = parseInt(se[1], 10), we = parseInt(fe[1], 10);
        if (de !== we)
          return de > we ? oe : pe;
        const xe = parseInt(se[2], 10), Ie = parseInt(fe[2], 10);
        if (xe !== Ie)
          return xe > Ie ? oe : pe;
        if (se[3] && fe[3]) {
          const Ae = /(alpha|beta)(.*)/, je = se[3].match(Ae), De = fe[3].match(Ae), Ce = je[1], Be = De[1], Ke = parseInt(je[2], 10), Ze = parseInt(De[2], 10);
          if (Ce === Be)
            return Ke > Ze ? oe : pe;
          if (Ce === "alpha" && Be === "beta")
            return pe;
          if (Ce === "beta" && Be === "alpha")
            return oe;
        }
        return se[3] ? pe : oe;
      }(l, O.sdk);
      if (!H || H && ne === O.sdk) {
        const oe = O.style.textContent;
        O.style.textContent = `${oe}
/* --- MERGED --- */
${U}`;
      } else
        H && ne !== O.sdk && (O.style.textContent = `/* --- UPGRADED --- */
${U}`);
      return void K.remove();
    }
    K.textContent = U, window._loadedStyles[c] = { sdk: l, core: H, style: K };
    const N = document.querySelector("head"), { lastDropinStyleInjected: F, lastSDKStyleInjected: V } = window._loadedStyles;
    H ? (V ? N.insertBefore(K, V.nextSibling) : N.insertBefore(K, N.firstChild), window._loadedStyles.lastSDKStyleInjected = K) : (F ? N.insertBefore(K, F.nextSibling) : V ? N.insertBefore(K, V.nextSibling) : N.insertBefore(K, N.firstChild), window._loadedStyles.lastDropinStyleInjected = K);
  } };
  b.setAttributes = Z(), b.insert = G().bind(null, "head"), b.domAPI = E(), b.insertStyleElement = q(), I()(w.c, b), w.c && w.c.locals && w.c.locals;
  var o = e(8412), v = ["name", "value", "className", "disabled", "error", "success", "min", "max", "onValue", "onUpdateError", "size"];
  function C(U, K) {
    var H = Object.keys(U);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(U);
      K && (l = l.filter(function(c) {
        return Object.getOwnPropertyDescriptor(U, c).enumerable;
      })), H.push.apply(H, l);
    }
    return H;
  }
  function r(U) {
    for (var K = 1; K < arguments.length; K++) {
      var H = arguments[K] != null ? arguments[K] : {};
      K % 2 ? C(Object(H), !0).forEach(function(l) {
        t(U, l, H[l]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(U, Object.getOwnPropertyDescriptors(H)) : C(Object(H)).forEach(function(l) {
        Object.defineProperty(U, l, Object.getOwnPropertyDescriptor(H, l));
      });
    }
    return U;
  }
  function t(U, K, H) {
    var l;
    return (K = typeof (l = function(c, O) {
      if (typeof c != "object" || !c)
        return c;
      var N = c[Symbol.toPrimitive];
      if (N !== void 0) {
        var F = N.call(c, O || "default");
        if (typeof F != "object")
          return F;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (O === "string" ? String : Number)(c);
    }(K, "string")) == "symbol" ? l : String(l)) in U ? Object.defineProperty(U, K, { value: H, enumerable: !0, configurable: !0, writable: !0 }) : U[K] = H, U;
  }
  function u(U, K, H, l, c, O, N) {
    try {
      var F = U[O](N), V = F.value;
    } catch (ee) {
      return void H(ee);
    }
    F.done ? K(V) : Promise.resolve(V).then(l, c);
  }
  function h(U, K) {
    if (U == null)
      return {};
    var H, l, c = function(N, F) {
      if (N == null)
        return {};
      var V, ee, ne = {}, oe = Object.keys(N);
      for (ee = 0; ee < oe.length; ee++)
        V = oe[ee], F.indexOf(V) >= 0 || (ne[V] = N[V]);
      return ne;
    }(U, K);
    if (Object.getOwnPropertySymbols) {
      var O = Object.getOwnPropertySymbols(U);
      for (l = 0; l < O.length; l++)
        H = O[l], K.indexOf(H) >= 0 || Object.prototype.propertyIsEnumerable.call(U, H) && (c[H] = U[H]);
    }
    return c;
  }
  var i = (U) => {
    var { name: K, value: H = "1", className: l, disabled: c, error: O, success: N, min: F, max: V, onValue: ee, onUpdateError: ne, size: oe = "medium" } = U, pe = h(U, v), [_e, ae] = (0, $.oT)(Number(H)), Se = Number(F), le = Number(V);
    (0, $.YB)(() => {
      ae(Number(H));
    }, [H]);
    var se = (0, $.kZ)((0, A.C)(function() {
      var be, ue = (be = function* (de) {
        if (ee)
          try {
            yield ee(de);
          } catch (we) {
            ne && ne(we);
          }
      }, function() {
        var de = this, we = arguments;
        return new Promise(function(xe, Ie) {
          var Ae = be.apply(de, we);
          function je(Ce) {
            u(Ae, xe, Ie, je, De, "next", Ce);
          }
          function De(Ce) {
            u(Ae, xe, Ie, je, De, "throw", Ce);
          }
          je(void 0);
        });
      });
      return function(de) {
        return ue.apply(this, arguments);
      };
    }(), 200), [ee, ne]), fe = (be) => {
      var ue = be;
      be < Se && (ue = Se), be > le && (ue = le), se(ue), ae(ue);
    };
    return (0, o.im)("div", { className: (0, n.i)(["dropin-incrementer", "dropin-incrementer--".concat(oe), l]), children: (0, o.YH)("div", { className: (0, n.i)(["dropin-incrementer__content", "dropin-incrementer__content--".concat(oe), ["dropin-incrementer__content--error", O], ["dropin-incrementer__content--success", N], ["dropin-incrementer__content--disabled", c]]), children: [(0, o.im)("div", { className: (0, n.i)(["dropin-incrementer__button-container", ["dropin-incrementer__button-container--disabled", c]]), children: (0, o.im)(m.Mp, { children: (0, o.im)("button", { type: "button", className: (0, n.i)(["dropin-incrementer__decrease-button", ["dropin-incrementer__decrease-button--disabled", c]]), onClick: () => fe(_e - 1), disabled: c || _e < Se + 1, "aria-label": (0, o.im)(m.a, { id: "Dropin.Incrementer.decreaseLabel" }), children: (0, o.im)(k.G, { source: j.default, size: "16", stroke: "1", viewBox: "4 2 20 20", className: "dropin-incrementer__down" }) }) }) }), (0, o.im)("input", r({ className: "dropin-incrementer__input", max: V, min: F, step: 1, type: "number", name: K, value: _e, disabled: c, onChange: (be) => {
      var ue = be.currentTarget.value;
      ue !== "" && fe(Number(ue));
    } }, pe)), (0, o.im)("div", { className: (0, n.i)(["dropin-incrementer__button-container", ["dropin-incrementer__button-container--disabled", c]]), children: (0, o.im)(m.Mp, { children: (0, o.im)("button", { type: "button", className: (0, n.i)(["dropin-incrementer__increase-button", ["dropin-incrementer__increase-button--disabled", c]]), onClick: () => fe(_e + 1), disabled: c || _e > le - 1, "aria-label": (0, o.im)(m.a, { id: "Dropin.Incrementer.increaseLabel" }), children: (0, o.im)(k.G, { source: x.default, size: "16", stroke: "1", viewBox: "4 2 20 20", className: "dropin-incrementer__add" }) }) }) })] }) });
  }, a = e(492), g = e(5476), y = e(6472), B = { attributes: { "data-dropin": "storefront-checkout", "data-sdk": "0.22.0" }, styleTagTransform: function(U, K) {
    var ee;
    window._loadedStyles = window._loadedStyles ?? {};
    const H = (ee = U == null ? void 0 : U.match(/^\.dropin-(\w+)/)) == null ? void 0 : ee[1], l = K.getAttribute("data-sdk"), c = H ? `sdk/${H}` : K.getAttribute("data-dropin");
    K.setAttribute("data-dropin", c), K.removeAttribute("data-sdk");
    const O = window._loadedStyles[c];
    if (O) {
      const ne = function(oe, pe) {
        const [_e, ae] = oe.split("-"), [Se, le] = pe.split("-"), se = [..._e.split("."), ae], fe = [...Se.split("."), le], be = parseInt(se[0], 10), ue = parseInt(fe[0], 10);
        if (be !== ue)
          return be > ue ? oe : pe;
        const de = parseInt(se[1], 10), we = parseInt(fe[1], 10);
        if (de !== we)
          return de > we ? oe : pe;
        const xe = parseInt(se[2], 10), Ie = parseInt(fe[2], 10);
        if (xe !== Ie)
          return xe > Ie ? oe : pe;
        if (se[3] && fe[3]) {
          const Ae = /(alpha|beta)(.*)/, je = se[3].match(Ae), De = fe[3].match(Ae), Ce = je[1], Be = De[1], Ke = parseInt(je[2], 10), Ze = parseInt(De[2], 10);
          if (Ce === Be)
            return Ke > Ze ? oe : pe;
          if (Ce === "alpha" && Be === "beta")
            return pe;
          if (Ce === "beta" && Be === "alpha")
            return oe;
        }
        return se[3] ? pe : oe;
      }(l, O.sdk);
      if (!H || H && ne === O.sdk) {
        const oe = O.style.textContent;
        O.style.textContent = `${oe}
/* --- MERGED --- */
${U}`;
      } else
        H && ne !== O.sdk && (O.style.textContent = `/* --- UPGRADED --- */
${U}`);
      return void K.remove();
    }
    K.textContent = U, window._loadedStyles[c] = { sdk: l, core: H, style: K };
    const N = document.querySelector("head"), { lastDropinStyleInjected: F, lastSDKStyleInjected: V } = window._loadedStyles;
    H ? (V ? N.insertBefore(K, V.nextSibling) : N.insertBefore(K, N.firstChild), window._loadedStyles.lastSDKStyleInjected = K) : (F ? N.insertBefore(K, F.nextSibling) : V ? N.insertBefore(K, V.nextSibling) : N.insertBefore(K, N.firstChild), window._loadedStyles.lastDropinStyleInjected = K);
  } };
  B.setAttributes = Z(), B.insert = G().bind(null, "head"), B.domAPI = E(), B.insertStyleElement = q(), I()(y.c, B), y.c && y.c.locals && y.c.locals;
  var f = ["className", "children", "ariaLabel", "image", "title", "price", "taxIncluded", "taxExcluded", "total", "totalExcludingTax", "sku", "configurations", "warning", "alert", "quantity", "description", "loading", "updating", "onQuantity", "onRemove"];
  function _(U, K) {
    var H = Object.keys(U);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(U);
      K && (l = l.filter(function(c) {
        return Object.getOwnPropertyDescriptor(U, c).enumerable;
      })), H.push.apply(H, l);
    }
    return H;
  }
  function D(U) {
    for (var K = 1; K < arguments.length; K++) {
      var H = arguments[K] != null ? arguments[K] : {};
      K % 2 ? _(Object(H), !0).forEach(function(l) {
        R(U, l, H[l]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(U, Object.getOwnPropertyDescriptors(H)) : _(Object(H)).forEach(function(l) {
        Object.defineProperty(U, l, Object.getOwnPropertyDescriptor(H, l));
      });
    }
    return U;
  }
  function R(U, K, H) {
    var l;
    return (K = typeof (l = function(c, O) {
      if (typeof c != "object" || !c)
        return c;
      var N = c[Symbol.toPrimitive];
      if (N !== void 0) {
        var F = N.call(c, O || "default");
        if (typeof F != "object")
          return F;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (O === "string" ? String : Number)(c);
    }(K, "string")) == "symbol" ? l : String(l)) in U ? Object.defineProperty(U, K, { value: H, enumerable: !0, configurable: !0, writable: !0 }) : U[K] = H, U;
  }
  function Y(U, K) {
    if (U == null)
      return {};
    var H, l, c = function(N, F) {
      if (N == null)
        return {};
      var V, ee, ne = {}, oe = Object.keys(N);
      for (ee = 0; ee < oe.length; ee++)
        V = oe[ee], F.indexOf(V) >= 0 || (ne[V] = N[V]);
      return ne;
    }(U, K);
    if (Object.getOwnPropertySymbols) {
      var O = Object.getOwnPropertySymbols(U);
      for (l = 0; l < O.length; l++)
        H = O[l], K.indexOf(H) >= 0 || Object.prototype.propertyIsEnumerable.call(U, H) && (c[H] = U[H]);
    }
    return c;
  }
  var W = (U) => {
    var K, H, { className: l, children: c, ariaLabel: O, image: N, title: F, price: V, taxIncluded: ee = !1, taxExcluded: ne = !1, total: oe, totalExcludingTax: pe, sku: _e, configurations: ae, warning: Se, alert: le, quantity: se = 1, description: fe, loading: be = !1, updating: ue = !1, onQuantity: de, onRemove: we } = U, xe = Y(U, f), { locale: Ie } = (0, s.Co)(P.s), Ae = (0, m.cF)({ each: "Dropin.CartItem.each.label", quantity: "Dropin.CartItem.quantity.label", remove: "Dropin.CartItem.remove.label", removeDefault: "Dropin.CartItem.removeDefault.label", taxIncluded: "Dropin.CartItem.taxIncluded.label", taxExcluded: "Dropin.CartItem.taxExcluded.label", updating: "Dropin.CartItem.updating.label", updatingDefault: "Dropin.ProgressSpinner.updating.label" });
    return be ? (0, o.im)(S.Q, {}) : (0, o.YH)("div", D(D({}, xe), {}, { className: (0, n.i)(["dropin-cart-item", ["dropin-cart-item--updating", ue], l]), children: [ue && (0, o.im)(L.y, { className: (0, n.i)(["dropin-cart-item__spinner"]), ariaLabel: O ? (K = Ae.updating) === null || K === void 0 ? void 0 : K.replace("{product}", O) : Ae.updatingDefault }), (0, o.YH)("div", { className: "dropin-cart-item__wrapper", children: [(0, o.im)(d.o, { node: N, className: (0, n.i)(["dropin-cart-item__image"]) }), (0, o.im)(d.o, { node: F, className: (0, n.i)(["dropin-cart-item__title", ["dropin-cart-item__title--edit", !!de || !!we]]) }), fe && (0, o.im)(d.o, { node: fe, className: (0, n.i)(["dropin-cart-item__description"]) }), (0, o.im)(d.o, { node: _e, className: (0, n.i)(["dropin-cart-item__sku"]) }), ae && (0, o.im)("ul", { className: (0, n.i)(["dropin-cart-item__configurations"]), children: Object.entries(ae).map((je) => {
      var [De, Ce] = je;
      return (0, o.YH)("li", { className: (0, n.i)(["dropin-cart-item__configurations__item"]), children: [De, ":", " ", (0, o.im)("strong", { className: (0, n.i)(["dropin-cart-item__configurations__item__value"]), children: Ce })] }, De);
    }) }), (0, o.YH)("span", { className: (0, n.i)(["dropin-cart-item__price"]), children: [!de && (0, o.YH)("span", { className: "dropin-cart-item__price__quantity", children: [se.toLocaleString(Ie), " x", " "] }), (0, o.im)(d.o, { node: V, role: "text" }), se > 1 && (0, o.YH)(o.ae, { children: [" ", Ae.each] }), ee && (0, o.YH)("span", { "data-testid": "tax-message", className: "dropin-cart-item__price-tax-message", children: [" ", Ae.taxIncluded] }), ne && (0, o.YH)("span", { "data-testid": "tax-message", className: "dropin-cart-item__price-tax-message", children: [" ", Ae.taxExcluded] })] }), (0, o.YH)("div", { className: (0, n.i)(["dropin-cart-item__quantity", ["dropin-cart-item__quantity--edit", !!de]]), children: [de ? (0, o.im)(i, { className: (0, n.i)(["dropin-cart-item__quantity__incrementer"]), value: se, min: 1, onValue: (je) => de == null ? void 0 : de(Number(je)), name: "quantity", "aria-label": Ae.quantity, disabled: ue }) : (0, o.YH)("span", { className: (0, n.i)(["dropin-cart-item__quantity__value"]), children: [Ae.quantity, ":", " ", (0, o.im)("strong", { className: "dropin-cart-item__quantity__number", children: Number(se).toLocaleString(Ie) })] }), Se && (0, o.im)(d.o, { node: Se, className: (0, n.i)(["dropin-cart-item__warning", "dropin-cart-item__warning--quantity"]) }), le && (0, o.im)(d.o, { node: le, className: (0, n.i)(["dropin-cart-item__alert", "dropin-cart-item__alert--quantity"]) })] }), Se && (0, o.im)(d.o, { node: Se, className: (0, n.i)(["dropin-cart-item__warning"]) }), le && (0, o.im)(d.o, { node: le, className: (0, n.i)(["dropin-cart-item__alert"]) }), (0, o.YH)("div", { className: (0, n.i)(["dropin-cart-item__total", ["dropin-cart-item__total--edit", !!we]]), children: [(0, o.im)("div", { className: "dropin-cart-item__row-total", children: (0, o.im)(d.o, { node: oe, role: "text" }) }), ee && (0, o.YH)("span", { "data-testid": "tax-message", className: (0, n.i)(["dropin-cart-item__total-tax-message"]), children: [" ", Ae.taxIncluded] }), ne && (0, o.im)("div", { className: "dropin-cart-item__total-tax-excluded", children: (0, o.YH)("span", { "data-testid": "tax-message", className: (0, n.i)(["dropin-cart-item__total-tax-excluded-message"]), children: [pe && (0, o.im)(d.o, { node: pe, role: "text" }), " ", Ae.taxExcluded] }) })] })] }), we && (0, o.im)(a.q, { className: (0, n.i)(["dropin-cart-item__remove"]), variant: "tertiary", onClick: () => we == null ? void 0 : we(), icon: (0, o.im)(k.G, { source: g.default, size: "24", stroke: "2", viewBox: "0 0 24 24", "aria-label": O ? (H = Ae.remove) === null || H === void 0 ? void 0 : H.replace("{product}", O) : Ae.removeDefault }), disabled: ue })] }));
  };
}, 312: (te, T, e) => {
  e.d(T, { Q: () => d });
  var s = e(3388), n = e(8412), d = () => (0, n.im)("div", { className: "dropin-cart-item dropin-cart-item-skeleton", children: (0, n.YH)(s.W, { className: "dropin-cart-item__skeleton dropin-cart-item__wrapper", children: [(0, n.im)("div", { className: "dropin-cart-item__image", children: (0, n.im)(s.K, { className: "dropin-cart-item__skeleton__item" }) }), (0, n.im)("div", { className: "dropin-cart-item__title", children: (0, n.im)(s.K, { className: "dropin-cart-item__skeleton__item" }) }), (0, n.im)("div", { className: "dropin-cart-item__sku", children: (0, n.im)(s.K, { className: "dropin-cart-item__skeleton__item" }) }), (0, n.im)("div", { className: "dropin-cart-item__price", children: (0, n.im)(s.K, { className: "dropin-cart-item__skeleton__item" }) }), (0, n.im)("div", { className: "dropin-cart-item__quantity", children: (0, n.im)(s.K, { className: "dropin-cart-item__skeleton__item" }) }), (0, n.im)("div", { className: "dropin-cart-item__total", children: (0, n.im)(s.K, { className: "dropin-cart-item__skeleton__item" }) })] }) });
}, 5092: (te, T, e) => {
  e.d(T, { c: () => M });
  var s = e(4944), n = e(5536), d = e.n(n), P = e(7008), S = e.n(P), L = e(1496), $ = e.n(L), A = e(9356), j = e.n(A), x = e(9904), k = e.n(x), m = e(912), p = { attributes: { "data-dropin": "storefront-checkout", "data-sdk": "0.22.0" }, styleTagTransform: function(E, z) {
    var o;
    window._loadedStyles = window._loadedStyles ?? {};
    const G = (o = E == null ? void 0 : E.match(/^\.dropin-(\w+)/)) == null ? void 0 : o[1], J = z.getAttribute("data-sdk"), Z = G ? `sdk/${G}` : z.getAttribute("data-dropin");
    z.setAttribute("data-dropin", Z), z.removeAttribute("data-sdk");
    const Q = window._loadedStyles[Z];
    if (Q) {
      const v = function(C, r) {
        const [t, u] = C.split("-"), [h, i] = r.split("-"), a = [...t.split("."), u], g = [...h.split("."), i], y = parseInt(a[0], 10), B = parseInt(g[0], 10);
        if (y !== B)
          return y > B ? C : r;
        const f = parseInt(a[1], 10), _ = parseInt(g[1], 10);
        if (f !== _)
          return f > _ ? C : r;
        const D = parseInt(a[2], 10), R = parseInt(g[2], 10);
        if (D !== R)
          return D > R ? C : r;
        if (a[3] && g[3]) {
          const Y = /(alpha|beta)(.*)/, W = a[3].match(Y), U = g[3].match(Y), K = W[1], H = U[1], l = parseInt(W[2], 10), c = parseInt(U[2], 10);
          if (K === H)
            return l > c ? C : r;
          if (K === "alpha" && H === "beta")
            return r;
          if (K === "beta" && H === "alpha")
            return C;
        }
        return a[3] ? r : C;
      }(J, Q.sdk);
      if (!G || G && v === Q.sdk) {
        const C = Q.style.textContent;
        Q.style.textContent = `${C}
/* --- MERGED --- */
${E}`;
      } else
        G && v !== Q.sdk && (Q.style.textContent = `/* --- UPGRADED --- */
${E}`);
      return void z.remove();
    }
    z.textContent = E, window._loadedStyles[Z] = { sdk: J, core: G, style: z };
    const q = document.querySelector("head"), { lastDropinStyleInjected: w, lastSDKStyleInjected: b } = window._loadedStyles;
    G ? (b ? q.insertBefore(z, b.nextSibling) : q.insertBefore(z, q.firstChild), window._loadedStyles.lastSDKStyleInjected = z) : (w ? q.insertBefore(z, w.nextSibling) : b ? q.insertBefore(z, b.nextSibling) : q.insertBefore(z, q.firstChild), window._loadedStyles.lastDropinStyleInjected = z);
  } };
  p.setAttributes = j(), p.insert = $().bind(null, "head"), p.domAPI = S(), p.insertStyleElement = k(), d()(m.c, p), m.c && m.c.locals && m.c.locals;
  var I = e(8412), M = (E) => {
    var { variant: z = "primary", className: G } = E;
    return (0, I.im)("hr", { role: "separator", className: (0, s.i)(["dropin-divider", "dropin-divider--".concat(z), G]) });
  };
}, 4072: (te, T, e) => {
  e.d(T, { W: () => C });
  var s = e(2796), n = e(7536);
  function d(r, t) {
    var u = Object.keys(r);
    if (Object.getOwnPropertySymbols) {
      var h = Object.getOwnPropertySymbols(r);
      t && (h = h.filter(function(i) {
        return Object.getOwnPropertyDescriptor(r, i).enumerable;
      })), u.push.apply(u, h);
    }
    return u;
  }
  function P(r) {
    for (var t = 1; t < arguments.length; t++) {
      var u = arguments[t] != null ? arguments[t] : {};
      t % 2 ? d(Object(u), !0).forEach(function(h) {
        S(r, h, u[h]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(u)) : d(Object(u)).forEach(function(h) {
        Object.defineProperty(r, h, Object.getOwnPropertyDescriptor(u, h));
      });
    }
    return r;
  }
  function S(r, t, u) {
    var h;
    return (t = typeof (h = function(i, a) {
      if (typeof i != "object" || !i)
        return i;
      var g = i[Symbol.toPrimitive];
      if (g !== void 0) {
        var y = g.call(i, a || "default");
        if (typeof y != "object")
          return y;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (a === "string" ? String : Number)(i);
    }(t, "string")) == "symbol" ? h : String(h)) in r ? Object.defineProperty(r, t, { value: u, enumerable: !0, configurable: !0, writable: !0 }) : r[t] = u, r;
  }
  var L = { medium: 768, large: 1024, xlarge: 1366, xxlarge: 1920 }, $ = (r, t) => {
    if (r && t != null && t.width) {
      var u = (h) => ((i, a) => {
        var [g, y] = i.split("?"), B = new URLSearchParams(y), f = (0, n.c)(), _ = {};
        return _ = f && Object.keys(f).length > 0 && a ? Object.entries(a).reduce((D, R) => {
          var [Y, W] = R, U = f[Y];
          return U && (D[U] = W), D;
        }, {}) : P({ auto: "webp", quality: 80, crop: !1, fit: "cover" }, a), Object.entries(_).forEach((D) => {
          var [R, Y] = D;
          Y != null && B.set(R, String(Y));
        }), "".concat(g, "?").concat(B.toString());
      })(r, P({}, h));
      return Object.entries(L).map((h) => {
        var [, i] = h, a = t.width * i / L.xxlarge;
        return "".concat(u(P(P({}, t), {}, { width: a })), " ").concat(i, "w");
      }).join(`,
`);
    }
  }, A = e(4944), j = e(5536), x = e.n(j), k = e(7008), m = e.n(k), p = e(1496), I = e.n(p), M = e(9356), E = e.n(M), z = e(9904), G = e.n(z), J = e(9276), Z = { attributes: { "data-dropin": "storefront-checkout", "data-sdk": "0.22.0" }, styleTagTransform: function(r, t) {
    var f;
    window._loadedStyles = window._loadedStyles ?? {};
    const u = (f = r == null ? void 0 : r.match(/^\.dropin-(\w+)/)) == null ? void 0 : f[1], h = t.getAttribute("data-sdk"), i = u ? `sdk/${u}` : t.getAttribute("data-dropin");
    t.setAttribute("data-dropin", i), t.removeAttribute("data-sdk");
    const a = window._loadedStyles[i];
    if (a) {
      const _ = function(D, R) {
        const [Y, W] = D.split("-"), [U, K] = R.split("-"), H = [...Y.split("."), W], l = [...U.split("."), K], c = parseInt(H[0], 10), O = parseInt(l[0], 10);
        if (c !== O)
          return c > O ? D : R;
        const N = parseInt(H[1], 10), F = parseInt(l[1], 10);
        if (N !== F)
          return N > F ? D : R;
        const V = parseInt(H[2], 10), ee = parseInt(l[2], 10);
        if (V !== ee)
          return V > ee ? D : R;
        if (H[3] && l[3]) {
          const ne = /(alpha|beta)(.*)/, oe = H[3].match(ne), pe = l[3].match(ne), _e = oe[1], ae = pe[1], Se = parseInt(oe[2], 10), le = parseInt(pe[2], 10);
          if (_e === ae)
            return Se > le ? D : R;
          if (_e === "alpha" && ae === "beta")
            return R;
          if (_e === "beta" && ae === "alpha")
            return D;
        }
        return H[3] ? R : D;
      }(h, a.sdk);
      if (!u || u && _ === a.sdk) {
        const D = a.style.textContent;
        a.style.textContent = `${D}
/* --- MERGED --- */
${r}`;
      } else
        u && _ !== a.sdk && (a.style.textContent = `/* --- UPGRADED --- */
${r}`);
      return void t.remove();
    }
    t.textContent = r, window._loadedStyles[i] = { sdk: h, core: u, style: t };
    const g = document.querySelector("head"), { lastDropinStyleInjected: y, lastSDKStyleInjected: B } = window._loadedStyles;
    u ? (B ? g.insertBefore(t, B.nextSibling) : g.insertBefore(t, g.firstChild), window._loadedStyles.lastSDKStyleInjected = t) : (y ? g.insertBefore(t, y.nextSibling) : B ? g.insertBefore(t, B.nextSibling) : g.insertBefore(t, g.firstChild), window._loadedStyles.lastDropinStyleInjected = t);
  } };
  Z.setAttributes = E(), Z.insert = I().bind(null, "head"), Z.domAPI = m(), Z.insertStyleElement = G(), x()(J.c, Z), J.c && J.c.locals && J.c.locals;
  var Q = e(8412), q = ["className", "src", "params", "loading", "srcSet", "onLoad"];
  function w(r, t) {
    var u = Object.keys(r);
    if (Object.getOwnPropertySymbols) {
      var h = Object.getOwnPropertySymbols(r);
      t && (h = h.filter(function(i) {
        return Object.getOwnPropertyDescriptor(r, i).enumerable;
      })), u.push.apply(u, h);
    }
    return u;
  }
  function b(r) {
    for (var t = 1; t < arguments.length; t++) {
      var u = arguments[t] != null ? arguments[t] : {};
      t % 2 ? w(Object(u), !0).forEach(function(h) {
        o(r, h, u[h]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(u)) : w(Object(u)).forEach(function(h) {
        Object.defineProperty(r, h, Object.getOwnPropertyDescriptor(u, h));
      });
    }
    return r;
  }
  function o(r, t, u) {
    var h;
    return (t = typeof (h = function(i, a) {
      if (typeof i != "object" || !i)
        return i;
      var g = i[Symbol.toPrimitive];
      if (g !== void 0) {
        var y = g.call(i, a || "default");
        if (typeof y != "object")
          return y;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (a === "string" ? String : Number)(i);
    }(t, "string")) == "symbol" ? h : String(h)) in r ? Object.defineProperty(r, t, { value: u, enumerable: !0, configurable: !0, writable: !0 }) : r[t] = u, r;
  }
  function v(r, t) {
    if (r == null)
      return {};
    var u, h, i = function(g, y) {
      if (g == null)
        return {};
      var B, f, _ = {}, D = Object.keys(g);
      for (f = 0; f < D.length; f++)
        B = D[f], y.indexOf(B) >= 0 || (_[B] = g[B]);
      return _;
    }(r, t);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(r);
      for (h = 0; h < a.length; h++)
        u = a[h], t.indexOf(u) >= 0 || Object.prototype.propertyIsEnumerable.call(r, u) && (i[u] = r[u]);
    }
    return i;
  }
  var C = (r) => {
    var { className: t, src: u, params: h, loading: i = "lazy", srcSet: a, onLoad: g } = r, y = v(r, q), [B, f] = (0, s.oT)(!1), _ = (0, s.bB)(() => a || (u && h ? $(u, b({}, h)) : void 0), [h, u, a]);
    return (0, Q.im)("img", b(b({}, y), {}, { className: (0, A.i)(["dropin-image", ["dropin-image--loaded", B], t]), loading: i, onLoad: (D) => {
      f(!0), g == null || g(D);
    }, src: u, srcSet: _ }));
  };
}, 8920: (te, T, e) => {
  e.d(T, { Y: () => Q });
  var s = e(2796), n = e(4944), d = e(5536), P = e.n(d), S = e(7008), L = e.n(S), $ = e(1496), A = e.n($), j = e(9356), x = e.n(j), k = e(9904), m = e.n(k), p = e(8548), I = { attributes: { "data-dropin": "storefront-checkout", "data-sdk": "0.22.0" }, styleTagTransform: function(q, w) {
    var h;
    window._loadedStyles = window._loadedStyles ?? {};
    const b = (h = q == null ? void 0 : q.match(/^\.dropin-(\w+)/)) == null ? void 0 : h[1], o = w.getAttribute("data-sdk"), v = b ? `sdk/${b}` : w.getAttribute("data-dropin");
    w.setAttribute("data-dropin", v), w.removeAttribute("data-sdk");
    const C = window._loadedStyles[v];
    if (C) {
      const i = function(a, g) {
        const [y, B] = a.split("-"), [f, _] = g.split("-"), D = [...y.split("."), B], R = [...f.split("."), _], Y = parseInt(D[0], 10), W = parseInt(R[0], 10);
        if (Y !== W)
          return Y > W ? a : g;
        const U = parseInt(D[1], 10), K = parseInt(R[1], 10);
        if (U !== K)
          return U > K ? a : g;
        const H = parseInt(D[2], 10), l = parseInt(R[2], 10);
        if (H !== l)
          return H > l ? a : g;
        if (D[3] && R[3]) {
          const c = /(alpha|beta)(.*)/, O = D[3].match(c), N = R[3].match(c), F = O[1], V = N[1], ee = parseInt(O[2], 10), ne = parseInt(N[2], 10);
          if (F === V)
            return ee > ne ? a : g;
          if (F === "alpha" && V === "beta")
            return g;
          if (F === "beta" && V === "alpha")
            return a;
        }
        return D[3] ? g : a;
      }(o, C.sdk);
      if (!b || b && i === C.sdk) {
        const a = C.style.textContent;
        C.style.textContent = `${a}
/* --- MERGED --- */
${q}`;
      } else
        b && i !== C.sdk && (C.style.textContent = `/* --- UPGRADED --- */
${q}`);
      return void w.remove();
    }
    w.textContent = q, window._loadedStyles[v] = { sdk: o, core: b, style: w };
    const r = document.querySelector("head"), { lastDropinStyleInjected: t, lastSDKStyleInjected: u } = window._loadedStyles;
    b ? (u ? r.insertBefore(w, u.nextSibling) : r.insertBefore(w, r.firstChild), window._loadedStyles.lastSDKStyleInjected = w) : (t ? r.insertBefore(w, t.nextSibling) : u ? r.insertBefore(w, u.nextSibling) : r.insertBefore(w, r.firstChild), window._loadedStyles.lastDropinStyleInjected = w);
  } };
  I.setAttributes = x(), I.insert = A().bind(null, "head"), I.domAPI = L(), I.insertStyleElement = m(), P()(p.c, I), p.c && p.c.locals && p.c.locals;
  var M = e(8412), E = ["amount", "currency", "locale", "variant", "weight", "className", "children", "sale", "formatOptions", "size"];
  function z(q, w) {
    var b = Object.keys(q);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(q);
      w && (o = o.filter(function(v) {
        return Object.getOwnPropertyDescriptor(q, v).enumerable;
      })), b.push.apply(b, o);
    }
    return b;
  }
  function G(q) {
    for (var w = 1; w < arguments.length; w++) {
      var b = arguments[w] != null ? arguments[w] : {};
      w % 2 ? z(Object(b), !0).forEach(function(o) {
        J(q, o, b[o]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(q, Object.getOwnPropertyDescriptors(b)) : z(Object(b)).forEach(function(o) {
        Object.defineProperty(q, o, Object.getOwnPropertyDescriptor(b, o));
      });
    }
    return q;
  }
  function J(q, w, b) {
    var o;
    return (w = typeof (o = function(v, C) {
      if (typeof v != "object" || !v)
        return v;
      var r = v[Symbol.toPrimitive];
      if (r !== void 0) {
        var t = r.call(v, C || "default");
        if (typeof t != "object")
          return t;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (C === "string" ? String : Number)(v);
    }(w, "string")) == "symbol" ? o : String(o)) in q ? Object.defineProperty(q, w, { value: b, enumerable: !0, configurable: !0, writable: !0 }) : q[w] = b, q;
  }
  function Z(q, w) {
    if (q == null)
      return {};
    var b, o, v = function(r, t) {
      if (r == null)
        return {};
      var u, h, i = {}, a = Object.keys(r);
      for (h = 0; h < a.length; h++)
        u = a[h], t.indexOf(u) >= 0 || (i[u] = r[u]);
      return i;
    }(q, w);
    if (Object.getOwnPropertySymbols) {
      var C = Object.getOwnPropertySymbols(q);
      for (o = 0; o < C.length; o++)
        b = C[o], w.indexOf(b) >= 0 || Object.prototype.propertyIsEnumerable.call(q, b) && (v[b] = q[b]);
    }
    return v;
  }
  var Q = (q) => {
    var { amount: w = 0, currency: b, locale: o, variant: v = "default", weight: C = "bold", className: r, children: t, sale: u = !1, formatOptions: h = {}, size: i = "small" } = q, a = Z(q, E), g = (0, s.bB)(() => new Intl.NumberFormat(o, G({ style: "currency", currency: b || "USD", minimumFractionDigits: 2, maximumFractionDigits: 2 }, h)), [o, b, h]), y = (0, s.bB)(() => g.format(w), [w, g]);
    return (0, M.im)("span", G(G({}, a), {}, { className: (0, n.i)(["dropin-price", "dropin-price--".concat(v), "dropin-price--".concat(i), "dropin-price--".concat(C), ["dropin-price--sale", u], r]), children: y }));
  };
}, 9624: (te, T, e) => {
  e.d(T, { c: () => S });
  var s = e(6008), n = e.n(s), d = e(2076), P = e.n(d)()(n());
  P.push([te.id, `.dropin-accordion-section__heading{
  display:grid;
  grid-template-columns:1fr max-content;
}

.dropin-accordion-section p{
  font:var(--type-body-1-default-font);
  letter-spacing:var(--type-body-1-default-letter-spacing);
  color:var(--color-neutral-700);
  margin:0;
}

.dropin-accordion-section__flex{
  display:flex;
  justify-content:space-between;
  cursor:pointer;
  align-items:center;
}

.dropin-accordion-section__title-container,
.dropin-accordion-section__secondary-text-container{
  display:flex;
  gap:var(--spacing-xsmall);
  align-items:center;
}

.dropin-accordion-section__secondary-text-container h4{
  margin:0;
}

.dropin-accordion-section__title-container h3{
  margin:0;
}

.dropin-accordion-section__title{
  color:var(--color-neutral-800);
  font:var(--type-body-1-strong-font);
  letter-spacing:var(--type-body-1-strong-letter-spacing);
  cursor:pointer;
}

.dropin-accordion-section__secondary-text{
  color:var(--color-neutral-700);
  font:var(--type-body-2-default-font);
  letter-spacing:var(--type-body-1-default-letter-spacing);
}

.dropin-accordion-section__secondary-text a{
  font:var(--type-body-2-strong-font);
  letter-spacing:var(--type-body-2-strong-letter-spacing);
}

.dropin-accordion-section svg{
  cursor:pointer;
}

.dropin-accordion-section__content-container{
  display:grid;
  margin:var(--spacing-medium) 0;
  gap:var(--spacing-medium);
}

.dropin-accordion-section__content-container:empty{
  margin:0;
}
`, ""]);
  const S = P;
}, 8236: (te, T, e) => {
  e.d(T, { c: () => S });
  var s = e(6008), n = e.n(s), d = e(2076), P = e.n(d)()(n());
  P.push([te.id, `.dropin-button,
.dropin-iconButton{
  border:0 none;
  cursor:pointer;
  white-space:normal;
}

.dropin-button{
  border-radius:var(--shape-border-radius-3);
  font-size:var(--type-button-1-font);
  font-weight:var(--type-button-1-font);
  padding:var(--spacing-xsmall) var(--spacing-medium);
  display:flex;
  justify-content:center;
  align-items:center;
  text-align:left;
  word-wrap:break-word;
}

.dropin-iconButton{
  height:var(--spacing-xbig);
  width:var(--spacing-xbig);
  padding:var(--spacing-xsmall);
}

.dropin-button:disabled,
.dropin-iconButton:disabled{
  pointer-events:none;
  user-select:none;
}

.dropin-button:not(:disabled),
.dropin-iconButton:not(:disabled){
  cursor:pointer;
}

.dropin-button:focus,
.dropin-iconButton:focus{
  outline:none;
}

.dropin-button:focus-visible,
.dropin-iconButton:focus-visible{
  outline:var(--spacing-xxsmall) solid var(--color-button-focus);
}
.dropin-button--primary,
a.dropin-button--primary,
.dropin-iconButton--primary{
  border:none;
  background:var(--color-brand-500) 0 0% no-repeat padding-box;
  color:var(--color-neutral-50);
  text-align:left;
  margin-right:0;
}

.dropin-iconButton--primary{
  border-radius:var(--spacing-xbig);
  min-height:var(--spacing-xbig);
  min-width:var(--spacing-xbig);
  padding:var(--spacing-xsmall);
}

.dropin-button--primary--disabled,
a.dropin-button--primary--disabled,
.dropin-iconButton--primary--disabled{
  background:var(--color-neutral-300) 0 0% no-repeat padding-box;
  color:var(--color-neutral-500);
  fill:var(--color-neutral-300);
  pointer-events:none;
  user-select:none;
}

.dropin-button--primary:hover,
a.dropin-button--primary:hover,
.dropin-iconButton--primary:hover,
.dropin-button--primary:focus:hover,
.dropin-iconButton--primary:focus:hover{
  background-color:var(--color-button-hover);
  text-decoration:none;
}

.dropin-button--primary:focus,
.dropin-iconButton--primary:focus{
  background-color:var(--color-brand-500);
}

.dropin-button--primary:hover:active,
.dropin-iconButton--primary:hover:active{
  background-color:var(--color-button-active);
}
.dropin-button--secondary,
a.dropin-button--secondary,
.dropin-iconButton--secondary{
  border:var(--shape-border-width-2) solid var(--color-brand-500);
  background:none 0 0% no-repeat padding-box;
  color:var(--color-brand-500);
  padding-top:calc(var(--spacing-xsmall) - var(--shape-border-width-2));
  padding-left:calc(var(--spacing-medium) - var(--shape-border-width-2));
}

.dropin-iconButton--secondary{
  border-radius:var(--spacing-xbig);
  min-height:var(--spacing-xbig);
  min-width:var(--spacing-xbig);
  padding:var(--spacing-xsmall);
  padding-top:calc(var(--spacing-xsmall) - var(--shape-border-width-2));
  padding-left:calc(var(--spacing-xsmall) - var(--shape-border-width-2));
}

.dropin-button--secondary--disabled,
a.dropin-button--secondary--disabled,
.dropin-iconButton--secondary--disabled{
  border:var(--shape-border-width-2) solid var(--color-neutral-300);
  background:none 0 0% no-repeat padding-box;
  color:var(--color-neutral-500);
  fill:var(--color-neutral-300);
  pointer-events:none;
  user-select:none;
}

.dropin-button--secondary:hover,
a.dropin-button--secondary:hover,
.dropin-iconButton--secondary:hover{
  border:var(--shape-border-width-2) solid var(--color-button-hover);
  color:var(--color-button-hover);
  text-decoration:none;
}

.dropin-button--secondary:active,
.dropin-iconButton--secondary:active{
  border:var(--shape-border-width-2) solid var(--color-button-active);
  color:var(--color-button-active);
}
.dropin-button--tertiary,
a.dropin-button--tertiary,
.dropin-iconButton--tertiary{
  border:none;
  background:none 0 0% no-repeat padding-box;
  color:var(--color-brand-500);
}

.dropin-iconButton--tertiary{
  border:none;
  border-radius:var(--spacing-xbig);
  min-height:var(--spacing-xbig);
  min-width:var(--spacing-xbig);
  padding:var(--spacing-xsmall);
}

.dropin-button--tertiary--disabled,
a.dropin-button--tertiary--disabled,
.dropin-iconButton--tertiary--disabled{
  border:none;
  color:var(--color-neutral-500);
  pointer-events:none;
  user-select:none;
}

.dropin-button--tertiary:hover,
a.dropin-button--tertiary:hover,
.dropin-iconButton--tertiary:hover{
  color:var(--color-button-hover);
  text-decoration:none;
}

.dropin-button--tertiary:active,
.dropin-iconButton--tertiary:active{
  color:var(--color-button-active);
}

.dropin-button--tertiary:focus-visible,
.dropin-iconButton--tertiary:focus-visible{
  -webkit-box-shadow:inset 0 0 0 2px var(--color-neutral-800);
  -moz-box-shadow:inset 0 0 0 2px var(--color-neutral-800);
  box-shadow:inset 0 0 0 2px var(--color-neutral-800);
}
.dropin-button--large{
  font:var(--type-button-1-font);
  letter-spacing:var(--type-button-1-letter-spacing);
}

.dropin-button--medium{
  font:var(--type-button-2-font);
  letter-spacing:var(--type-button-2-letter-spacing);
}

.dropin-button-icon{
  height:24px;
}
.dropin-button--with-icon{
  column-gap:var(--spacing-xsmall);
  row-gap:var(--spacing-xsmall);
}
`, ""]);
  const S = P;
}, 6472: (te, T, e) => {
  e.d(T, { c: () => S });
  var s = e(6008), n = e.n(s), d = e(2076), P = e.n(d)()(n());
  P.push([te.id, `.dropin-cart-item{
  --item-group-spacing:0;
  --group-spacing:var(--spacing-xsmall);
  font:var(--type-body-2-default-font);
  letter-spacing:var(--type-body-2-default-letter-spacing);
  color:var(--color-neutral-700);
  container-type:inline-size;
  container-name:cart-item;
  position:relative;
}
.dropin-cart-item__skeleton{
  gap:var(--spacing-xsmall);
}

.dropin-cart-item__skeleton__item{
  width:100%;
  height:auto;
}

.dropin-cart-item__skeleton__item::after{
  content:'';
  display:inline-block;
}

.dropin-cart-item__image .dropin-cart-item__skeleton__item{
  padding-bottom:100%;
}

.dropin-cart-item__image:is(img),
.dropin-cart-item__image img{
  width:100%;
  height:auto;
}

.dropin-cart-item__title{
  font:var(--type-body-1-default-font);
  letter-spacing:var(--type-body-1-default-letter-spacing);
  color:var(--color-neutral-800);
}

.dropin-cart-item__sku{
  font:var(--type-details-caption-2-font);
  letter-spacing:var(--type-details-caption-2-letter-spacing);
}

.dropin-cart-item__configurations{
  list-style-type:none;
  margin:var(--group-spacing) 0 0 0;
  padding:0;
}

.dropin-cart-item__configurations__item__value{
  font-weight:inherit;
  color:var(--color-neutral-800);
}

.dropin-cart-item__configurations__item:not(:last-child){
  margin-right:var(--spacing-xxsmall);
}

.dropin-cart-item__quantity__value{
  font:var(--type-details-caption-2-font);
  letter-spacing:var(--type-details-caption-2-letter-spacing);
  display:none;
}

.dropin-cart-item__quantity__number{
  font-weight:inherit;
  color:var(--color-neutral-800);
}

.dropin-cart-item__quantity__incrementer{
  max-width:160px;
  margin-top:calc(var(--group-spacing) / 2);
  margin-bottom:var(--group-spacing);
}

.dropin-cart-item__remove{
  position:absolute;
  right:0;
  top:0;
}

.dropin-cart-item__warning,
.dropin-cart-item__alert{
  font:var(--type-details-caption-2-font);
  letter-spacing:var(--type-details-caption-2-letter-spacing);
  margin-bottom:var(--group-spacing);
  display:flex;
  align-items:center;
}

.dropin-cart-item__warning svg,
.dropin-cart-item__alert svg{
  margin-right:var(--spacing-xxsmall);
}

.dropin-cart-item__warning{
  color:var(--color-warning-800);
}

.dropin-cart-item__warning svg{
  fill:var(--color-warning-800);
  color:var(--color-neutral-50);
}

.dropin-cart-item__alert{
  color:var(--color-alert-800);
}

.dropin-cart-item__alert svg{
  fill:var(--color-alert-800);
  color:var(--color-neutral-50);
}

.dropin-cart-item__total{
  display:flex;
  gap:var(--spacing-xxsmall);
}

.dropin-cart-item__row-total{
  display:flex;
  gap:var(--spacing-xxsmall);
}

.dropin-cart-item__total-tax-excluded{
  font:var(--type-details-caption-2-font);
  letter-spacing:var(--type-details-caption-2-letter-spacing);
  color:var(--color-neutral-800);
}

.dropin-cart-item--updating{
  opacity:0.4;
  pointer-events:none;
  position:relative;
}

.dropin-cart-item__spinner{
  margin:0 auto;
  position:absolute;
  z-index:999;
  left:0;
  right:0;
  top:calc(50% - (var(--size) / 2));
  bottom:0;
}
.dropin-cart-item__wrapper{
  display:grid;
  grid-template-columns:repeat(4, 1fr);
  grid-auto-rows:min-content;
  grid-column-gap:var(--spacing-small);
}

.dropin-cart-item__image{
  grid-column:1 / 2;
  grid-row:1 / 10;
}

.dropin-cart-item__title,
.dropin-cart-item__sku,
.dropin-cart-item__configurations,
.dropin-cart-item__price,
.dropin-cart-item__total,
.dropin-cart-item__warning,
.dropin-cart-item__alert,
.dropin-cart-item__quantity{
  grid-column:2 / 5;
}

.dropin-cart-item__title--edit{
  padding-right:var(--spacing-xbig);
}
.dropin-cart-item__description,
.dropin-cart-item__sku{
  margin-top:var(--item-group-spacing);
}

.dropin-cart-item__price{
  margin-top:var(--group-spacing);
}

.dropin-cart-item__quantity:not(.dropin-cart-item__quantity--edit){
  display:none;
}

.dropin-cart-item__warning--quantity,
.dropin-cart-item__alert--quantity{
  display:none;
}

.dropin-cart-item__description{
  display:none;
}

.dropin-cart-item__price-tax-message,
.dropin-cart-item__price-tax-excluded-message,
.dropin-cart-item__total-tax-message{
  font:var(--type-details-caption-2-font);
  letter-spacing:var(--type-details-caption-2-letter-spacing);
  color:var(--color-neutral-800);
}
@container cart-item (width >= 400px) and (width < 737px){
  .dropin-cart-item__title,
  .dropin-cart-item__sku,
  .dropin-cart-item__configurations,
  .dropin-cart-item__price,
  .dropin-cart-item__warning,
  .dropin-cart-item__alert,
  .dropin-cart-item__quantity{
    grid-column:2 / 4;
  }

  .dropin-cart-item__title--edit{
    grid-column:2 / 5;
  }

  .dropin-cart-item__total:not(.dropin-cart-item__total--edit){
    grid-auto-rows:min-content;
    grid-column:4 / 5;
    grid-row:1 / 10;
    display:grid;
    justify-self:end;
    text-align:right;
    gap:unset;
  }
}
@container cart-item (width >= 737px) and (width < 1192px){
  .dropin-cart-item__wrapper{
    grid-template-columns:repeat(12, 1fr);
  }

  .dropin-cart-item__image{
    grid-column:1 / 3;
  }

  .dropin-cart-item__title,
  .dropin-cart-item__sku,
  .dropin-cart-item__configurations,
  .dropin-cart-item__price,
  .dropin-cart-item__warning,
  .dropin-cart-item__alert,
  .dropin-cart-item__quantity{
    grid-column:3 / 10;
  }

  .dropin-cart-item__title--edit{
    padding-right:unset;
  }

  .dropin-cart-item__total{
    grid-column:10 / 13;
    grid-row:1 / 10;
    text-align:right;
    display:flex;
    flex-direction:column;
    gap:0;
  }

  .dropin-cart-item__row-total{
    display:contents;
    gap:var(--spacing-xxsmall);
  }

  .dropin-cart-item__total--edit{
    padding-right:calc(var(--spacing-xbig) + var(--spacing-xsmall));
  }
}
@container cart-item (width >= 1192px){
  .dropin-cart-item{
    --item-group-spacing:var(--spacing-xxsmall);
    --group-spacing:var(--spacing-small);
  }
  .dropin-cart-item__wrapper{
    grid-template-columns:repeat(8, 1fr);
    grid-column-gap:var(--spacing-medium);
  }

  .dropin-cart-item__image{
    grid-column:1 / 2;
  }

  .dropin-cart-item__title,
  .dropin-cart-item__description,
  .dropin-cart-item__sku,
  .dropin-cart-item__price,
  .dropin-cart-item__configurations{
    grid-column:2 / 6;
  }

  .dropin-cart-item__title{
    padding-right:unset;
  }

  .dropin-cart-item__quantity{
    grid-column:6 / 7;
    grid-row:1 / 10;
  }

  .dropin-cart-item__warning,
  .dropin-cart-item__alert{
    grid-column:6 / 7;
  }

  .dropin-cart-item__warning--quantity,
  .dropin-cart-item__alert--quantity{
    display:flex;
    align-items:center;
  }

  .dropin-cart-item__warning--quantity svg,
  .dropin-cart-item__alert--quantity svg{
    margin-right:var(--spacing-xxsmall);
  }

  .dropin-cart-item__warning--quantity svg{
    fill:var(--color-warning-800);
    color:var(--color-neutral-50);
  }

  .dropin-cart-item__alert--quantity svg{
    fill:var(--color-alert-800);
    color:var(--color-neutral-50);
  }

  .dropin-cart-item__warning:not(.dropin-cart-item__warning--quantity),
  .dropin-cart-item__alert:not(.dropin-cart-item__alert--quantity){
    display:none;
  }

  .dropin-cart-item__total{
    grid-column:7 / 9;
    grid-row:1 / 10;
    justify-self:end;
    text-align:right;
  }

  .dropin-cart-item__total:has(.dropin-cart-item__total-tax-excluded){
    flex-direction:column;
    gap:0;
  }

  .dropin-cart-item__row-total{
    display:flex;
    gap:var(--spacing-xxsmall);
  }

  .dropin-cart-item__total--edit{
    padding-right:calc(var(--spacing-xbig) + var(--spacing-xsmall));
  }

  .dropin-cart-item__quantity__incrementer{
    margin-top:0;
  }

  .dropin-cart-item__quantity:not(.dropin-cart-item__quantity--edit),
  .dropin-cart-item__quantity__value{
    display:unset;
  }

  .dropin-cart-item__price__quantity{
    display:none;
  }

  .dropin-cart-item__title{
    font:var(--type-headline-2-default-font);
    letter-spacing:var(--type-headline-2-default-letter-spacing);
  }
}
`, ""]);
  const S = P;
}, 912: (te, T, e) => {
  e.d(T, { c: () => S });
  var s = e(6008), n = e.n(s), d = e(2076), P = e.n(d)()(n());
  P.push([te.id, `.dropin-divider{
  border:none;
}

.dropin-divider--primary{
  border-top:var(--shape-border-width-3) solid var(--color-neutral-400);
  margin:var(--spacing-xbig) auto;
}

.dropin-divider--secondary{
  border-top:var(--shape-border-width-2) solid var(--color-neutral-400);
  margin:var(--spacing-medium) auto;
}
`, ""]);
  const S = P;
}, 9276: (te, T, e) => {
  e.d(T, { c: () => S });
  var s = e(6008), n = e.n(s), d = e(2076), P = e.n(d)()(n());
  P.push([te.id, `.dropin-image{
  background:var(--color-neutral-300) linear-gradient(
      to right,
      var(--color-neutral-300) 0%,
      var(--color-neutral-100) 20%,
      var(--color-neutral-300) 40%,
      var(--color-neutral-300) 100%
    ) no-repeat;
  animation:imageShimmer infinite 1.2s linear;
  border-radius:var(--shape-border-radius-2);
}
.dropin-image--loaded{
  background:unset;
  border-radius:unset;
}

@keyframes imageShimmer{
  0%{
    background-position:-600px 0;
  }

  100%{
    background-position:600px 0;
  }
}
`, ""]);
  const S = P;
}, 572: (te, T, e) => {
  e.d(T, { c: () => S });
  var s = e(6008), n = e.n(s), d = e(2076), P = e.n(d)()(n());
  P.push([te.id, `.dropin-incrementer__content{
  border-radius:var(--shape-border-radius-1);
  border:solid var(--shape-border-width-1) var(--color-neutral-600);
  display:grid;
  grid-template-columns:var(--spacing-xxbig) auto var(--spacing-xxbig);
  height:var(--spacing-xbig);
  opacity:1;
}

.dropin-incrementer__content--disabled{
  background:var(--color-neutral-300);
  border-radius:var(--shape-border-radius-1);
  border:solid var(--shape-border-width-1) var(--color-neutral-500);
}

.dropin-incrementer__content--large{
  height:var(--spacing-xxbig);
}

.dropin-incrementer__content:hover{
  border:solid var(--shape-border-width-1) var(--color-neutral-700);
}

.dropin-incrementer__content:active{
  border:solid var(--shape-border-width-1) var(--color-neutral-800);
}
.dropin-incrementer__footer{
  font:var(--type-details-caption-2-font);
}
.dropin-incrementer__decrease-button > svg,
.dropin-incrementer__increase-button > svg{
  align-items:center;
  justify-content:center;
}

.dropin-incrementer__button-container{
  align-items:center;
  border-radius:var(--shape-border-radius-1);
  display:grid;
  justify-content:center;
  background:var(--color-neutral-50);
}

.dropin-incrementer__button-container--disabled{
  background-color:var(--color-neutral-300);
}

.dropin-incrementer__decrease-button,
.dropin-incrementer__increase-button{
  align-items:center;
  background-color:var(--color-neutral-50);
  border-radius:var(--shape-border-radius-3);
  border:none;
  display:grid;
  height:var(--spacing-medium);
  width:var(--spacing-medium);
}

.dropin-incrementer__decrease-button:enabled,
.dropin-incrementer__increase-button:enabled{
  cursor:pointer;
}

.dropin-incrementer__decrease-button--disabled,
.dropin-incrementer__increase-button--disabled{
  background-color:var(--color-neutral-300);
}

.dropin-incrementer__increase-button:focus-visible,
.dropin-incrementer__decrease-button:focus-visible{
  outline:var(--shape-border-width-1) solid var(--color-brand-500);
  box-shadow:0px 0px 0px var(--shape-border-radius-1) var(--color-neutral-500);
}

.dropin-incrementer__decrease-button:focus:not(:focus-visible),
.dropin-incrementer__increase-button:focus:not(:focus-visible){
  background-color:var(--color-neutral-50);
}

.dropin-incrementer__decrease-button:hover:enabled,
.dropin-incrementer__increase-button:hover:enabled,
.dropin-incrementer__decrease-button:focus,
.dropin-incrementer__increase-button:focus{
  background:var(--color-neutral-300);
}
.dropin-incrementer__input{
  box-sizing:border-box;
  text-align:center;
  min-width:var(--spacing-xxbig);
}

.dropin-incrementer__input:disabled{
  background-color:var(--color-neutral-300);
  color:var(--color-neutral-500);
}

.dropin-incrementer__input::-webkit-outer-spin-button,
.dropin-incrementer__input::-webkit-inner-spin-button{
  -webkit-appearance:none;
  margin:0;
}

.dropin-incrementer__input:focus-within{
  border:none;
  box-sizing:border-box;
  text-align:center;
}

.dropin-incrementer__input:focus-within[type='number']{
  box-shadow:none;
}
.dropin-incrementer__input[type='number']{
  -moz-appearance:textfield;
  box-shadow:none;
  border:none;
}

textarea:focus,
input:focus{
  outline:none;
}
`, ""]);
  const S = P;
}, 8548: (te, T, e) => {
  e.d(T, { c: () => S });
  var s = e(6008), n = e.n(s), d = e(2076), P = e.n(d)()(n());
  P.push([te.id, `.dropin-price{
  color:inherit;
}

.dropin-price--small{
  font:var(--type-body-2-strong-font);
  letter-spacing:var(--type-body-2-strong-letter-spacing);
}

.dropin-price--medium{
  font:var(--type-body-1-default-font);
  letter-spacing:var(--type-body-1-default-letter-spacing);
}

.dropin-price--large{
  font:var(--type-headline-2-strong-font);
  letter-spacing:var(--type-headline-2-strong-letter-spacing);
}

.dropin-price--strikethrough{
  text-decoration:line-through;
}

.dropin-price--sale{
  color:var(--color-alert-800);
}

.dropin-price--bold{
  font-weight:bold;
}

.dropin-price--normal{
  font-weight:normal;
}
`, ""]);
  const S = P;
} }, wr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  id: yr,
  ids: hr,
  modules: _r
}, Symbol.toStringTag, { value: "Module" })), Or = 4948, kr = [4948, 5008, 9772, 2543, 8220, 9948, 984, 1176], Sr = { 5008: (te, T, e) => {
  e.r(T), e.d(T, { default: () => S });
  var s, n, d = e(2796);
  function P() {
    return P = Object.assign ? Object.assign.bind() : function(L) {
      for (var $ = 1; $ < arguments.length; $++) {
        var A = arguments[$];
        for (var j in A)
          Object.prototype.hasOwnProperty.call(A, j) && (L[j] = A[j]);
      }
      return L;
    }, P.apply(this, arguments);
  }
  const S = function(L) {
    return d.kv("svg", P({ width: 24, height: 24, fill: "none", xmlns: "http://www.w3.org/2000/svg" }, L), s || (s = d.kv("g", { clipPath: "url(#Cart_svg__a)", stroke: "currentColor", strokeLinejoin: "round" }, d.kv("path", { vectorEffect: "non-scaling-stroke", d: "M18.36 18.16H6.56L4.88 3H2.35m17.32 16.59a1.41 1.41 0 1 1-2.82 0 1.41 1.41 0 0 1 2.82 0Zm-12.24 0a1.41 1.41 0 1 1-2.82 0 1.41 1.41 0 0 1 2.82 0Z" }), d.kv("path", { vectorEffect: "non-scaling-stroke", d: "m5.25 6.37 15.64 1.69-.75 6.74H6.19" }))), n || (n = d.kv("defs", null, d.kv("clipPath", { id: "Cart_svg__a" }, d.kv("path", { vectorEffect: "non-scaling-stroke", fill: "#fff", transform: "translate(2.35 2.25)", d: "M0 0h19.29v19.5H0z" })))));
  };
}, 9772: (te, T, e) => {
  e.r(T), e.d(T, { default: () => P });
  var s, n = e(2796);
  function d() {
    return d = Object.assign ? Object.assign.bind() : function(S) {
      for (var L = 1; L < arguments.length; L++) {
        var $ = arguments[L];
        for (var A in $)
          Object.prototype.hasOwnProperty.call($, A) && (S[A] = $[A]);
      }
      return S;
    }, d.apply(this, arguments);
  }
  const P = function(S) {
    return n.kv("svg", d({ "data-name": "Icon \\u2013 Check \\u2013 Base", xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24 }, S), s || (s = n.kv("g", { "data-name": "Check icon" }, n.kv("path", { vectorEffect: "non-scaling-stroke", "data-name": "Path 884137", d: "m5.609 12.017 4.248 4.244 8.538-8.522", fill: "none", stroke: "currentColor" }))));
  };
}, 2543: (te, T, e) => {
  e.r(T), e.d(T, { default: () => P });
  var s, n = e(2796);
  function d() {
    return d = Object.assign ? Object.assign.bind() : function(S) {
      for (var L = 1; L < arguments.length; L++) {
        var $ = arguments[L];
        for (var A in $)
          Object.prototype.hasOwnProperty.call($, A) && (S[A] = $[A]);
      }
      return S;
    }, d.apply(this, arguments);
  }
  const P = function(S) {
    return n.kv("svg", d({ width: 24, height: 24, fill: "none", xmlns: "http://www.w3.org/2000/svg" }, S), s || (s = n.kv("path", { vectorEffect: "non-scaling-stroke", d: "M18.36 5.64 5.63 18.37M18.36 18.37 5.63 5.64", stroke: "currentColor" })));
  };
}, 2328: (te, T, e) => {
  e.r(T), e.d(T, { default: () => S });
  var s, n, d = e(2796);
  function P() {
    return P = Object.assign ? Object.assign.bind() : function(L) {
      for (var $ = 1; $ < arguments.length; $++) {
        var A = arguments[$];
        for (var j in A)
          Object.prototype.hasOwnProperty.call(A, j) && (L[j] = A[j]);
      }
      return L;
    }, P.apply(this, arguments);
  }
  const S = function(L) {
    return d.kv("svg", P({ width: 24, height: 24, fill: "none", xmlns: "http://www.w3.org/2000/svg" }, L), s || (s = d.kv("path", { vectorEffect: "non-scaling-stroke", d: "M2.473 4.9h12.712v6.064h6.065L23 12.715v4.897h-2.927", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })), n || (n = d.kv("path", { vectorEffect: "non-scaling-stroke", d: "M15.176 5.876h3.826l2.037 4.888M9.762 16.79a2.294 2.294 0 0 1-2.296 2.286A2.294 2.294 0 0 1 5.18 16.78a2.286 2.286 0 0 1 2.286-2.286 2.3 2.3 0 0 1 2.296 2.286v.01ZM19.873 16.79a2.29 2.29 0 0 1-2.296 2.296 2.29 2.29 0 0 1-2.296-2.296 2.29 2.29 0 0 1 2.296-2.296 2.29 2.29 0 0 1 2.296 2.296ZM8.088 7.636h-6.39M7.112 10.362H1M5.16 13.04H1.929M9.762 16.761h5.519M2.387 16.761H5.17", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })));
  };
}, 984: (te, T, e) => {
  e.r(T), e.d(T, { default: () => S });
  var s, n, d = e(2796);
  function P() {
    return P = Object.assign ? Object.assign.bind() : function(L) {
      for (var $ = 1; $ < arguments.length; $++) {
        var A = arguments[$];
        for (var j in A)
          Object.prototype.hasOwnProperty.call(A, j) && (L[j] = A[j]);
      }
      return L;
    }, P.apply(this, arguments);
  }
  const S = function(L) {
    return d.kv("svg", P({ width: 24, height: 24, fill: "none", xmlns: "http://www.w3.org/2000/svg" }, L), s || (s = d.kv("g", { clipPath: "url(#OrderError_svg__a)", stroke: "currentColor", strokeLinejoin: "round" }, d.kv("path", { vectorEffect: "non-scaling-stroke", d: "M10.25 20.91 1.5 17.55V6.52l8.75 3.41v10.98ZM6.24 4.64l8.75 3.42v3.36", strokeLinecap: "round" }), d.kv("path", { className: "OrderError_svg__error-icon", vectorEffect: "non-scaling-stroke", d: "m19 13.31-3.5 6.06h7L19 13.31Z", strokeLinecap: "round" }), d.kv("path", { className: "OrderError_svg__error-icon", vectorEffect: "non-scaling-stroke", d: "M19.02 17.11h-.04l-.03-1.55h.1l-.03 1.55Zm-.06 1.18v-.23h.09v.23h-.09Z", strokeLinecap: "round" }), d.kv("path", { vectorEffect: "non-scaling-stroke", d: "M19 12.16V6.52l-8.75 3.41v10.98l4.02-1.54.13-.05" }), d.kv("path", { vectorEffect: "non-scaling-stroke", d: "m1.5 6.52 8.75-3.47L19 6.52l-8.75 3.41L1.5 6.52Z", strokeLinecap: "round" }))), n || (n = d.kv("defs", null, d.kv("clipPath", { id: "OrderError_svg__a" }, d.kv("path", { fill: "#fff", transform: "translate(1 2.55)", d: "M0 0h22v18.86H0z" })))));
  };
}, 8220: (te, T, e) => {
  e.r(T), e.d(T, { default: () => S });
  var s, n, d = e(2796);
  function P() {
    return P = Object.assign ? Object.assign.bind() : function(L) {
      for (var $ = 1; $ < arguments.length; $++) {
        var A = arguments[$];
        for (var j in A)
          Object.prototype.hasOwnProperty.call(A, j) && (L[j] = A[j]);
      }
      return L;
    }, P.apply(this, arguments);
  }
  const S = function(L) {
    return d.kv("svg", P({ width: 24, height: 24, fill: "none", xmlns: "http://www.w3.org/2000/svg" }, L), s || (s = d.kv("path", { vectorEffect: "non-scaling-stroke", d: "M17.93 14.8v3.95H5.97c-1.22 0-2.22-.78-2.22-1.75V6.5m0 0c0-.97.99-1.75 2.22-1.75h9.97v3.5H5.97c-1.22 0-2.22-.78-2.22-1.75Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })), n || (n = d.kv("path", { vectorEffect: "non-scaling-stroke", d: "M19.35 11.64h-5.31v3.17h5.31v-3.17ZM17.93 11.64V8.25h-2.78", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })));
  };
}, 1176: (te, T, e) => {
  e.r(T), e.d(T, { default: () => P });
  var s, n = e(2796);
  function d() {
    return d = Object.assign ? Object.assign.bind() : function(S) {
      for (var L = 1; L < arguments.length; L++) {
        var $ = arguments[L];
        for (var A in $)
          Object.prototype.hasOwnProperty.call($, A) && (S[A] = $[A]);
      }
      return S;
    }, d.apply(this, arguments);
  }
  const P = function(S) {
    return n.kv("svg", d({ width: 24, height: 24, fill: "none", xmlns: "http://www.w3.org/2000/svg" }, S), s || (s = n.kv("path", { vectorEffect: "non-scaling-stroke", fillRule: "evenodd", clipRule: "evenodd", d: "M1 20.895 12.192 1.5l11.203 19.395H1Zm12.028-6.931.222-3.926V9h-2v1.038l.222 3.926h1.556ZM11.299 16v1.75h1.926V16H11.3Z", fill: "currentColor" })));
  };
}, 5508: (te, T, e) => {
  e.d(T, { _: () => o });
  var s = e(4944), n = e(1044), d = e(5536), P = e.n(d), S = e(7008), L = e.n(S), $ = e(1496), A = e.n($), j = e(9356), x = e.n(j), k = e(9904), m = e.n(k), p = e(9308), I = { attributes: { "data-dropin": "storefront-checkout", "data-sdk": "0.22.0" }, styleTagTransform: function(v, C) {
    var y;
    window._loadedStyles = window._loadedStyles ?? {};
    const r = (y = v == null ? void 0 : v.match(/^\.dropin-(\w+)/)) == null ? void 0 : y[1], t = C.getAttribute("data-sdk"), u = r ? `sdk/${r}` : C.getAttribute("data-dropin");
    C.setAttribute("data-dropin", u), C.removeAttribute("data-sdk");
    const h = window._loadedStyles[u];
    if (h) {
      const B = function(f, _) {
        const [D, R] = f.split("-"), [Y, W] = _.split("-"), U = [...D.split("."), R], K = [...Y.split("."), W], H = parseInt(U[0], 10), l = parseInt(K[0], 10);
        if (H !== l)
          return H > l ? f : _;
        const c = parseInt(U[1], 10), O = parseInt(K[1], 10);
        if (c !== O)
          return c > O ? f : _;
        const N = parseInt(U[2], 10), F = parseInt(K[2], 10);
        if (N !== F)
          return N > F ? f : _;
        if (U[3] && K[3]) {
          const V = /(alpha|beta)(.*)/, ee = U[3].match(V), ne = K[3].match(V), oe = ee[1], pe = ne[1], _e = parseInt(ee[2], 10), ae = parseInt(ne[2], 10);
          if (oe === pe)
            return _e > ae ? f : _;
          if (oe === "alpha" && pe === "beta")
            return _;
          if (oe === "beta" && pe === "alpha")
            return f;
        }
        return U[3] ? _ : f;
      }(t, h.sdk);
      if (!r || r && B === h.sdk) {
        const f = h.style.textContent;
        h.style.textContent = `${f}
/* --- MERGED --- */
${v}`;
      } else
        r && B !== h.sdk && (h.style.textContent = `/* --- UPGRADED --- */
${v}`);
      return void C.remove();
    }
    C.textContent = v, window._loadedStyles[u] = { sdk: t, core: r, style: C };
    const i = document.querySelector("head"), { lastDropinStyleInjected: a, lastSDKStyleInjected: g } = window._loadedStyles;
    r ? (g ? i.insertBefore(C, g.nextSibling) : i.insertBefore(C, i.firstChild), window._loadedStyles.lastSDKStyleInjected = C) : (a ? i.insertBefore(C, a.nextSibling) : g ? i.insertBefore(C, g.nextSibling) : i.insertBefore(C, i.firstChild), window._loadedStyles.lastDropinStyleInjected = C);
  } };
  I.setAttributes = x(), I.insert = A().bind(null, "head"), I.domAPI = L(), I.insertStyleElement = m(), P()(p.c, I), p.c && p.c.locals && p.c.locals;
  var M = e(492), E = e(3720), z = e(2543), G = e(2460), J = e(8412), Z = ["className", "variant", "icon", "message", "onDismiss", "action"];
  function Q(v, C) {
    var r = Object.keys(v);
    if (Object.getOwnPropertySymbols) {
      var t = Object.getOwnPropertySymbols(v);
      C && (t = t.filter(function(u) {
        return Object.getOwnPropertyDescriptor(v, u).enumerable;
      })), r.push.apply(r, t);
    }
    return r;
  }
  function q(v) {
    for (var C = 1; C < arguments.length; C++) {
      var r = arguments[C] != null ? arguments[C] : {};
      C % 2 ? Q(Object(r), !0).forEach(function(t) {
        w(v, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(v, Object.getOwnPropertyDescriptors(r)) : Q(Object(r)).forEach(function(t) {
        Object.defineProperty(v, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return v;
  }
  function w(v, C, r) {
    var t;
    return (C = typeof (t = function(u, h) {
      if (typeof u != "object" || !u)
        return u;
      var i = u[Symbol.toPrimitive];
      if (i !== void 0) {
        var a = i.call(u, h || "default");
        if (typeof a != "object")
          return a;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (h === "string" ? String : Number)(u);
    }(C, "string")) == "symbol" ? t : String(t)) in v ? Object.defineProperty(v, C, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : v[C] = r, v;
  }
  function b(v, C) {
    if (v == null)
      return {};
    var r, t, u = function(i, a) {
      if (i == null)
        return {};
      var g, y, B = {}, f = Object.keys(i);
      for (y = 0; y < f.length; y++)
        g = f[y], a.indexOf(g) >= 0 || (B[g] = i[g]);
      return B;
    }(v, C);
    if (Object.getOwnPropertySymbols) {
      var h = Object.getOwnPropertySymbols(v);
      for (t = 0; t < h.length; t++)
        r = h[t], C.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(v, r) && (u[r] = v[r]);
    }
    return u;
  }
  var o = (v) => {
    var { className: C, variant: r, icon: t, message: u, onDismiss: h, action: i } = v, a = b(v, Z), g = (0, G.cF)({ dismiss: "Dropin.InlineAlert.dismissLabel" });
    return (0, J.YH)("div", q(q({}, a), {}, { className: (0, s.i)([C, "dropin-alert-banner", "dropin-alert-banner--".concat(r)]), children: [(0, J.YH)("div", { className: "dropin-alert-banner__content", children: [t && (0, J.im)(n.o, { node: t, "aria-hidden": "true", className: "dropin-alert-banner__icon" }), (0, J.im)(n.o, { node: u, className: (0, s.i)(["dropin-alert-banner__message"]) })] }), (0, J.YH)("div", { className: "dropin-alert-banner__actions", children: [i && (0, J.im)(M.q, { variant: "tertiary", className: "dropin-alert-banner__action", onClick: i.onClick, "aria-label": i.label, children: i.label }), (0, J.im)(M.q, { icon: (0, J.im)(E.G, { source: z.default, size: "24", stroke: "2" }), className: "dropin-alert-banner__dismiss-button", variant: "primary", onClick: h, "aria-label": g.dismiss })] })] }));
  };
}, 3792: (te, T, e) => {
  e.d(T, { y: () => w });
  var s = e(2796), n = e(4944), d = e(9772), P = e(3720), S = e(5536), L = e.n(S), $ = e(7008), A = e.n($), j = e(1496), x = e.n(j), k = e(9356), m = e.n(k), p = e(9904), I = e.n(p), M = e(3676), E = { attributes: { "data-dropin": "storefront-checkout", "data-sdk": "0.22.0" }, styleTagTransform: function(b, o) {
    var a;
    window._loadedStyles = window._loadedStyles ?? {};
    const v = (a = b == null ? void 0 : b.match(/^\.dropin-(\w+)/)) == null ? void 0 : a[1], C = o.getAttribute("data-sdk"), r = v ? `sdk/${v}` : o.getAttribute("data-dropin");
    o.setAttribute("data-dropin", r), o.removeAttribute("data-sdk");
    const t = window._loadedStyles[r];
    if (t) {
      const g = function(y, B) {
        const [f, _] = y.split("-"), [D, R] = B.split("-"), Y = [...f.split("."), _], W = [...D.split("."), R], U = parseInt(Y[0], 10), K = parseInt(W[0], 10);
        if (U !== K)
          return U > K ? y : B;
        const H = parseInt(Y[1], 10), l = parseInt(W[1], 10);
        if (H !== l)
          return H > l ? y : B;
        const c = parseInt(Y[2], 10), O = parseInt(W[2], 10);
        if (c !== O)
          return c > O ? y : B;
        if (Y[3] && W[3]) {
          const N = /(alpha|beta)(.*)/, F = Y[3].match(N), V = W[3].match(N), ee = F[1], ne = V[1], oe = parseInt(F[2], 10), pe = parseInt(V[2], 10);
          if (ee === ne)
            return oe > pe ? y : B;
          if (ee === "alpha" && ne === "beta")
            return B;
          if (ee === "beta" && ne === "alpha")
            return y;
        }
        return Y[3] ? B : y;
      }(C, t.sdk);
      if (!v || v && g === t.sdk) {
        const y = t.style.textContent;
        t.style.textContent = `${y}
/* --- MERGED --- */
${b}`;
      } else
        v && g !== t.sdk && (t.style.textContent = `/* --- UPGRADED --- */
${b}`);
      return void o.remove();
    }
    o.textContent = b, window._loadedStyles[r] = { sdk: C, core: v, style: o };
    const u = document.querySelector("head"), { lastDropinStyleInjected: h, lastSDKStyleInjected: i } = window._loadedStyles;
    v ? (i ? u.insertBefore(o, i.nextSibling) : u.insertBefore(o, u.firstChild), window._loadedStyles.lastSDKStyleInjected = o) : (h ? u.insertBefore(o, h.nextSibling) : i ? u.insertBefore(o, i.nextSibling) : u.insertBefore(o, u.firstChild), window._loadedStyles.lastDropinStyleInjected = o);
  } };
  E.setAttributes = m(), E.insert = x().bind(null, "head"), E.domAPI = A(), E.insertStyleElement = I(), L()(M.c, E), M.c && M.c.locals && M.c.locals;
  var z = e(8412), G = ["name", "value", "size", "disabled", "error", "label", "description", "className", "checked"];
  function J(b, o) {
    var v = Object.keys(b);
    if (Object.getOwnPropertySymbols) {
      var C = Object.getOwnPropertySymbols(b);
      o && (C = C.filter(function(r) {
        return Object.getOwnPropertyDescriptor(b, r).enumerable;
      })), v.push.apply(v, C);
    }
    return v;
  }
  function Z(b) {
    for (var o = 1; o < arguments.length; o++) {
      var v = arguments[o] != null ? arguments[o] : {};
      o % 2 ? J(Object(v), !0).forEach(function(C) {
        Q(b, C, v[C]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(b, Object.getOwnPropertyDescriptors(v)) : J(Object(v)).forEach(function(C) {
        Object.defineProperty(b, C, Object.getOwnPropertyDescriptor(v, C));
      });
    }
    return b;
  }
  function Q(b, o, v) {
    var C;
    return (o = typeof (C = function(r, t) {
      if (typeof r != "object" || !r)
        return r;
      var u = r[Symbol.toPrimitive];
      if (u !== void 0) {
        var h = u.call(r, t || "default");
        if (typeof h != "object")
          return h;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(r);
    }(o, "string")) == "symbol" ? C : String(C)) in b ? Object.defineProperty(b, o, { value: v, enumerable: !0, configurable: !0, writable: !0 }) : b[o] = v, b;
  }
  function q(b, o) {
    if (b == null)
      return {};
    var v, C, r = function(u, h) {
      if (u == null)
        return {};
      var i, a, g = {}, y = Object.keys(u);
      for (a = 0; a < y.length; a++)
        i = y[a], h.indexOf(i) >= 0 || (g[i] = u[i]);
      return g;
    }(b, o);
    if (Object.getOwnPropertySymbols) {
      var t = Object.getOwnPropertySymbols(b);
      for (C = 0; C < t.length; C++)
        v = t[C], o.indexOf(v) >= 0 || Object.prototype.propertyIsEnumerable.call(b, v) && (r[v] = b[v]);
    }
    return r;
  }
  var w = (b) => {
    var { name: o, value: v, size: C = "medium", disabled: r = !1, error: t = !1, label: u = "", description: h = "", className: i, checked: a } = b, g = q(b, G), [y, B] = (0, s.oT)(a !== void 0 && a), f = (0, s.yK)(null);
    return (0, z.YH)("label", { className: (0, n.i)(["dropin-checkbox", ["dropin-checkbox--disabled", r]]), children: [(0, z.im)("input", Z(Z({ ref: f, name: o, value: v, type: "checkbox", disabled: r, className: (0, n.i)(["dropin-checkbox__checkbox", ["dropin-checkbox__checkbox--error", t], i]) }, g), {}, { onChange: (_) => {
      var D;
      (D = g.onChange) === null || D === void 0 || D.call(g, _), B(_.currentTarget.checked);
    }, checked: y })), (0, z.im)("span", { "aria-checked": y ? "true" : "false", "aria-labelledby": "".concat(o, "-label"), "aria-describedby": "".concat(o, "-description"), className: (0, n.i)(["dropin-checkbox__box", ["dropin-checkbox__box--error", t], ["dropin-checkbox__box--disabled", r]]), role: "checkbox", tabIndex: r ? -1 : 0, onKeyDown: (_) => {
      var D;
      _.key === " " && (_.preventDefault(), f == null || (D = f.current) === null || D === void 0 || D.click());
    }, children: (0, z.im)(P.G, { className: (0, n.i)(["dropin-checkbox__checkmark"]), source: d.default, size: "16", stroke: "3" }) }), (0, z.im)("div", { id: "".concat(o, "-label"), className: (0, n.i)(["dropin-checkbox__label", "dropin-checkbox__label--".concat(C), ["dropin-checkbox__label--disabled", r]]), children: u }), (0, z.im)("div", {}), (0, z.im)("div", { id: "".concat(o, "-description"), role: "note", className: (0, n.i)(["dropin-checkbox__description", "dropin-checkbox__description--".concat(C), ["dropin-checkbox__description--disabled", r]]), children: h })] });
  };
}, 6044: (te, T, e) => {
  e.d(T, { k: () => x });
  var s = e(8596), n = e(2460), d = e(8412), P = ["name", "slot", "context", "children", "render"];
  function S(k, m, p, I, M, E, z) {
    try {
      var G = k[E](z), J = G.value;
    } catch (Z) {
      return void p(Z);
    }
    G.done ? m(J) : Promise.resolve(J).then(I, M);
  }
  function L(k, m) {
    if (k == null)
      return {};
    var p, I, M = function(z, G) {
      if (z == null)
        return {};
      var J, Z, Q = {}, q = Object.keys(z);
      for (Z = 0; Z < q.length; Z++)
        J = q[Z], G.indexOf(J) >= 0 || (Q[J] = z[J]);
      return Q;
    }(k, m);
    if (Object.getOwnPropertySymbols) {
      var E = Object.getOwnPropertySymbols(k);
      for (I = 0; I < E.length; I++)
        p = E[I], m.indexOf(p) >= 0 || Object.prototype.propertyIsEnumerable.call(k, p) && (M[p] = k[p]);
    }
    return M;
  }
  function $(k, m) {
    var p = Object.keys(k);
    if (Object.getOwnPropertySymbols) {
      var I = Object.getOwnPropertySymbols(k);
      m && (I = I.filter(function(M) {
        return Object.getOwnPropertyDescriptor(k, M).enumerable;
      })), p.push.apply(p, I);
    }
    return p;
  }
  function A(k) {
    for (var m = 1; m < arguments.length; m++) {
      var p = arguments[m] != null ? arguments[m] : {};
      m % 2 ? $(Object(p), !0).forEach(function(I) {
        j(k, I, p[I]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(k, Object.getOwnPropertyDescriptors(p)) : $(Object(p)).forEach(function(I) {
        Object.defineProperty(k, I, Object.getOwnPropertyDescriptor(p, I));
      });
    }
    return k;
  }
  function j(k, m, p) {
    var I;
    return (m = typeof (I = function(M, E) {
      if (typeof M != "object" || !M)
        return M;
      var z = M[Symbol.toPrimitive];
      if (z !== void 0) {
        var G = z.call(M, E || "default");
        if (typeof G != "object")
          return G;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (E === "string" ? String : Number)(M);
    }(m, "string")) == "symbol" ? I : String(I)) in k ? Object.defineProperty(k, m, { value: p, enumerable: !0, configurable: !0, writable: !0 }) : k[m] = p, k;
  }
  function x(k) {
    var { name: m, slot: p, context: I, children: M, render: E } = k, z = L(k, P), [G, J] = function() {
      var Z = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, Q = arguments.length > 1 ? arguments[1] : void 0, q = arguments.length > 2 ? arguments[2] : void 0, w = (0, s.yK)(null), b = (0, s.yK)(!1), o = (0, s.yK)([]), [v, C] = (0, s.oT)({ children: [q == null ? void 0 : q({})] }), [r, t] = (0, s.oT)({}), u = (0, s.bB)(() => ({ get: (g) => r[g], set: (g, y) => {
        t(A(A({}, u), {}, { [g]: y }));
      } }), [r]), { intl: h } = (0, s.Co)(n.Gg);
      Z.dictionary = h.dictionary, Z._setProps = C;
      var i = (0, s.kZ)((g) => {
        typeof g == "function" ? o.current.push(g) : console.warn("Skipped: Invalid _registerMethod", g);
      }, []);
      Z._registerMethod = i;
      var a = (0, s.kZ)((g) => (0, d.im)("div", { "data-slot-html-element": g.tagName.toLowerCase(), ref: (y) => {
        y == null || y.appendChild(g);
      } }), []);
      return Z._htmlElementToVNode = a, Z.getSlotElement = (0, s.kZ)((g) => {
        var y = document.querySelector('[data-slot-key="'.concat(g, '"]'));
        if (y)
          return { appendChild: (B) => {
            y.appendChild(B);
          }, prependChild: (B) => {
            y.insertBefore(B, y.firstChild);
          }, appendSibling: (B) => {
            var f = y.parentNode;
            f == null || f.insertBefore(B, y.nextSibling);
          }, prependSibling: (B) => {
            var f = y.parentNode;
            f == null || f.insertBefore(B, y);
          } };
      }, []), Z.onChange = (0, s.kZ)((g) => {
        o.current.push(g);
      }, []), Z.replaceWith = (0, s.kZ)((g) => {
        i((y) => {
          var B = a(g);
          y._setProps({ children: [B] });
        });
      }, [a, i]), Z.appendChild = (0, s.kZ)((g) => {
        i((y) => {
          var B = a(g);
          y._setProps((f) => A(A({}, f), {}, { children: [...f.children, B] }));
        });
      }, [a, i]), Z.prependChild = (0, s.kZ)((g) => {
        i((y) => {
          var B = a(g);
          y._setProps((f) => A(A({}, f), {}, { children: [B, ...f.children] }));
        });
      }, [a, i]), Z.appendSibling = (0, s.kZ)((g) => {
        i(() => {
          var y, B, f, _ = (y = w.current) === null || y === void 0 ? void 0 : y.parentNode;
          _ == null || _.insertBefore(g, (B = (f = w.current) === null || f === void 0 ? void 0 : f.nextSibling) !== null && B !== void 0 ? B : null);
        });
      }, [i]), Z.prependSibling = (0, s.kZ)((g) => {
        i(() => {
          var y, B = (y = w.current) === null || y === void 0 ? void 0 : y.parentNode;
          B == null || B.insertBefore(g, w.current);
        });
      }, [i]), (0, s.YB)(() => {
        var g = w.current;
        if (Q && g)
          try {
            Q(Z, g);
          } catch (y) {
            console.error('Error in "'.concat(Q.name, '" Slot callback'), y);
          }
      }, []), (0, s.YB)(() => {
        C({ children: [q == null ? void 0 : q(v)] }), o.current.forEach((g) => {
          g(Z, u);
        }), (q == null ? void 0 : q.name) === "render" && b.current === !1 && (b.current = !0);
      }, [JSON.stringify(Z), JSON.stringify(r), b.current]), [w, v];
    }(I, p, E ?? (() => M));
    return (0, s.YB)(() => {
      m || console.warn('Slot "name" is required');
    }, [m]), (0, d.im)("div", A(A({}, z), {}, { ref: G, "data-slot": m, children: J.children }));
  }
  window.DROPINS = window.DROPINS || {}, window.DROPINS.showSlots = function() {
    var k, m = (k = function* (p) {
      if (window.sessionStorage.setItem("dropin-debugger--show-slots", p.toString()), document.body.classList.toggle("dropin-debugger--show-slots", p), p)
        try {
          yield e.e(3484).then(e.bind(e, 3484));
        } catch {
        }
    }, function() {
      var p = this, I = arguments;
      return new Promise(function(M, E) {
        var z = k.apply(p, I);
        function G(Z) {
          S(z, M, E, G, J, "next", Z);
        }
        function J(Z) {
          S(z, M, E, G, J, "throw", Z);
        }
        G(void 0);
      });
    });
    return function(p) {
      return m.apply(this, arguments);
    };
  }(), window.DROPINS.showSlots(window.sessionStorage.getItem("dropin-debugger--show-slots") === "true");
}, 9308: (te, T, e) => {
  e.d(T, { c: () => S });
  var s = e(6008), n = e.n(s), d = e(2076), P = e.n(d)()(n());
  P.push([te.id, `.dropin-alert-banner{
  background-color:var(--color-alert-800);
  color:var(--color-neutral-50);
  font:var(--type-body-2-strong-font);
  letter-spacing:var(--type-body-2-strong-letter-spacing);
  padding:var(--spacing-small);
  display:grid;
  grid-template-columns:1fr max-content;
  align-items:center;
  gap:var(--spacing-small);
}

.dropin-alert-banner__actions,
.dropin-alert-banner__content{
  align-items:center;
  display:grid;
  grid-template-columns:max-content max-content;
}
.dropin-alert-banner--neutral{
  background-color:var(--color-neutral-700);
}

.dropin-alert-banner--neutral button.dropin-alert-banner__dismiss-button{
  background-color:var(--color-neutral-700);
}
.dropin-alert-banner--neutral button.dropin-alert-banner__dismiss-button:hover,
.dropin-alert-banner--neutral button.dropin-alert-banner__dismiss-button:focus,
.dropin-alert-banner--neutral
  button.dropin-alert-banner__dismiss-button:focus:hover,
.dropin-alert-banner--neutral
  button.dropin-alert-banner__dismiss-button:active{
  background-color:var(--color-neutral-500);
}
.dropin-alert-banner--brand{
  background-color:var(--color-brand-500);
}

.dropin-alert-banner--brand button.dropin-alert-banner__dismiss-button{
  background-color:var(--color-brand-500);
}
.dropin-alert-banner--brand button.dropin-alert-banner__dismiss-button:hover,
.dropin-alert-banner--brand button.dropin-alert-banner__dismiss-button:focus,
.dropin-alert-banner--brand
  button.dropin-alert-banner__dismiss-button:focus:hover,
.dropin-alert-banner--brand button.dropin-alert-banner__dismiss-button:active{
  background-color:var(--color-brand-700);
}
.dropin-alert-banner--success{
  background-color:var(--color-positive-800);
}

.dropin-alert-banner--success button.dropin-alert-banner__dismiss-button{
  background-color:var(--color-positive-800);
}
.dropin-alert-banner--success button.dropin-alert-banner__dismiss-button:hover,
.dropin-alert-banner--success button.dropin-alert-banner__dismiss-button:focus,
.dropin-alert-banner--success
  button.dropin-alert-banner__dismiss-button:focus:hover,
.dropin-alert-banner--success
  button.dropin-alert-banner__dismiss-button:active{
  background-color:var(--color-positive-500);
}
.dropin-alert-banner--warning{
  background-color:var(--color-alert-800);
}

.dropin-alert-banner--warning button.dropin-alert-banner__dismiss-button{
  background-color:var(--color-alert-800);
}
.dropin-alert-banner--warning button.dropin-alert-banner__dismiss-button:hover,
.dropin-alert-banner--warning button.dropin-alert-banner__dismiss-button:focus,
.dropin-alert-banner--warning
  button.dropin-alert-banner__dismiss-button:focus:hover,
.dropin-alert-banner--warning
  button.dropin-alert-banner__dismiss-button:active{
  background-color:var(--color-alert-500);
}

.dropin-alert-banner__icon{
  flex-shrink:0;
  color:var(--color-neutral-50);
  margin-right:var(--spacing-small);
}

button.dropin-alert-banner__dismiss-button{
  margin-left:auto;
  color:var(--color-neutral-50);
  height:24px;
  min-height:24px;
  width:24px;
  min-width:24px;
  padding:0;
}

button.dropin-alert-banner__action{
  color:var(--color-neutral-50);
  font:var(--type-body-2-strong-font);
  letter-spacing:var(--type-body-2-strong-letter-spacing);
  padding:0;
  margin-right:var(--spacing-xxsmall);
}
@media only screen and (width >= 400px) and (width < 768px){
  .dropin-alert-banner__actions,
  .dropin-alert-banner__content{
    grid-template-columns:auto auto;
    word-break:break-word;
    word-wrap:break-word;
  }

  .dropin-alert-banner__message{
    word-break:break-word;
    word-wrap:break-word;
  }
}
`, ""]);
  const S = P;
}, 3676: (te, T, e) => {
  e.d(T, { c: () => S });
  var s = e(6008), n = e.n(s), d = e(2076), P = e.n(d)()(n());
  P.push([te.id, `.dropin-checkbox{
  display:grid;
  grid-template-columns:var(--spacing-small) auto;
  grid-gap:var(--spacing-xxsmall) 0;
  align-items:center;
}

.dropin-checkbox__checkbox{
  display:none;
  margin:0;
}

.dropin-checkbox__box{
  margin:0;
  width:14px;
  height:14px;
  border-radius:var(--shape-border-radius-1);
  border:var(--shape-border-width-1) solid var(--color-neutral-600);
  background:var(--color-neutral-50) 0% 0% no-repeat padding-box;
  cursor:pointer;
}

.dropin-checkbox__checkmark{
  opacity:0;
  border-radius:var(--shape-border-radius-1);
}

.dropin-checkbox__checkbox:checked + .dropin-checkbox__box{
  border:none;
}

.dropin-checkbox__checkbox:checked
  + .dropin-checkbox__box
  .dropin-checkbox__checkmark{
  opacity:1;
  color:var(--color-neutral-50);
  background:var(--color-neutral-700) 0% 0% no-repeat padding-box;
  top:-1px;
  position:relative;
}

.dropin-checkbox__box:hover{
  border:var(--shape-border-width-1) solid var(--color-neutral-800);
}

.dropin-checkbox__checkbox:checked + .dropin-checkbox__box:hover{
  border:none;
  background:var(--color-neutral-800) 0% 0% no-repeat padding-box;
}

.dropin-checkbox__checkbox:checked
  + .dropin-checkbox__box
  .dropin-checkbox__checkmark:hover{
  background:var(--color-neutral-800) 0% 0% no-repeat padding-box;
}

.dropin-checkbox__box:focus-visible{
  border:var(--shape-border-width-1) solid var(--color-neutral-800);
  outline:var(--shape-border-width-3) solid var(--color-neutral-400);
}

.dropin-checkbox__checkbox:checked + .dropin-checkbox__box:focus-visible{
  width:var(--spacing-small);
  height:var(--spacing-small);
  border:none;
  background:var(--color-neutral-800) 0% 0% no-repeat padding-box;
  outline:var(--shape-border-width-3) solid var(--color-neutral-400);
}

.dropin-checkbox__checkbox:checked
  + .dropin-checkbox__box:focus-visible
  .dropin-checkbox__checkmark{
  top:0;
}

.dropin-checkbox__label,
.dropin-checkbox__label--medium{
  padding-left:var(--spacing-xsmall);
  color:var(--color-neutral-800);
  font:var(--type-body-2-default-font);
  letter-spacing:var(--type-body-2-default-letter-spacing);
  text-align:left;
}

.dropin-checkbox__label--large{
  padding-left:var(--spacing-small);
  color:var(--color-neutral-800);
  font:var(--type-body-1-default-font);
  letter-spacing:var(--type-body-1-default-letter-spacing);
  text-align:left;
}

.dropin-checkbox__description,
.dropin-checkbox__description--medium{
  padding-left:var(--spacing-xsmall);
  color:var(--color-neutral-700);
  font:var(--type-details-caption-2-font);
  letter-spacing:var(--type-details-caption-2-letter-spacing);
  text-align:left;
}

.dropin-checkbox__description--large{
  padding-left:var(--spacing-small);
  color:var(--color-neutral-700);
  font:var(--type-body-2-default-font);
  letter-spacing:var(--type-body-2-default-letter-spacing);
  text-align:left;
}

.dropin-checkbox,
.dropin-checkbox--checkbox:not(:disabled){
  cursor:pointer;
}

.dropin-checkbox__box--error{
  border:var(--shape-border-width-2) solid var(--color-alert-500);
  background:var(--color-neutral-50) 0% 0% no-repeat padding-box;
}

.dropin-checkbox__box--error:hover{
  border:var(--shape-border-width-2) solid var(--color-alert-500);
  background:var(--color-neutral-50) 0% 0% no-repeat padding-box;
}

.dropin-checkbox__checkbox:checked + .dropin-checkbox__box--error,
.dropin-checkbox__checkbox:checked + .dropin-checkbox__box--error:hover{
  border:none;
  background:var(--color-alert-500) 0% 0% no-repeat padding-box;
}

.dropin-checkbox__checkbox:checked
  + .dropin-checkbox__box--error
  > .dropin-checkbox__checkmark,
.dropin-checkbox__checkbox:checked
  + .dropin-checkbox__box--error
  > .dropin-checkbox__checkmark:hover{
  background:var(--color-alert-500) 0% 0% no-repeat padding-box;
}

.dropin-checkbox__checkmark--error{
  opacity:1;
  color:var(--color-neutral-50);
  border:var(--color-alert-500);
  background:var(--color-alert-500) 0% 0% no-repeat padding-box;
}

.dropin-checkbox--disabled,
.dropin-checkbox__label--disabled,
.dropin-checkbox__description--disabled{
  color:var(--color-neutral-500);
  cursor:default;
}

.dropin-checkbox__box--disabled,
.dropin-checkbox__box--disabled:hover{
  background:var(--color-neutral-300) 0% 0% no-repeat padding-box;
  border:var(--shape-border-width-1) solid var(--color-neutral-500);
  cursor:default;
}

.dropin-checkbox__checkbox:checked + .dropin-checkbox__box--disabled,
.dropin-checkbox__checkbox:checked + .dropin-checkbox__box--disabled:hover{
  border:none;
  background:var(--color-neutral-300) 0% 0% no-repeat padding-box;
}

.dropin-checkbox__checkbox:checked
  + .dropin-checkbox__box--disabled
  > .dropin-checkbox__checkmark,
.dropin-checkbox__checkbox:checked
  + .dropin-checkbox__box--disabled
  > .dropin-checkbox__checkmark:hover{
  background:var(--color-neutral-300) 0% 0% no-repeat padding-box;
}
`, ""]);
  const S = P;
} }, xr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  id: Or,
  ids: kr,
  modules: Sr
}, Symbol.toStringTag, { value: "Module" })), jr = 8100, Pr = [8100], Ir = { 8488: (te, T, e) => {
  e.d(T, { i: () => Ee });
  var s = e(2740), n = e(3388), d = e(8412);
  function P(X, re) {
    var ie = Object.keys(X);
    if (Object.getOwnPropertySymbols) {
      var ce = Object.getOwnPropertySymbols(X);
      re && (ce = ce.filter(function(ve) {
        return Object.getOwnPropertyDescriptor(X, ve).enumerable;
      })), ie.push.apply(ie, ce);
    }
    return ie;
  }
  function S(X) {
    for (var re = 1; re < arguments.length; re++) {
      var ie = arguments[re] != null ? arguments[re] : {};
      re % 2 ? P(Object(ie), !0).forEach(function(ce) {
        L(X, ce, ie[ce]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(X, Object.getOwnPropertyDescriptors(ie)) : P(Object(ie)).forEach(function(ce) {
        Object.defineProperty(X, ce, Object.getOwnPropertyDescriptor(ie, ce));
      });
    }
    return X;
  }
  function L(X, re, ie) {
    var ce;
    return (re = typeof (ce = function(ve, Oe) {
      if (typeof ve != "object" || !ve)
        return ve;
      var ke = ve[Symbol.toPrimitive];
      if (ke !== void 0) {
        var Ne = ke.call(ve, Oe || "default");
        if (typeof Ne != "object")
          return Ne;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (Oe === "string" ? String : Number)(ve);
    }(re, "string")) == "symbol" ? ce : String(ce)) in X ? Object.defineProperty(X, re, { value: ie, enumerable: !0, configurable: !0, writable: !0 }) : X[re] = ie, X;
  }
  var $ = (X) => (0, d.YH)(n.W, S(S({}, X), {}, { children: [(0, d.im)(n.K, { variant: "heading", size: "medium" }), (0, d.im)(n.K, { variant: "empty", size: "medium" }), (0, d.im)(n.K, { size: "large" }), (0, d.im)(n.K, { size: "large" }), (0, d.im)(n.K, { size: "large", fullWidth: !0 }), (0, d.im)(n.K, { size: "large", fullWidth: !0, lines: 3 }), (0, d.im)(n.K, { size: "large" }), (0, d.im)(n.K, { size: "large" }), (0, d.im)(n.K, { size: "large" }), (0, d.im)(n.K, { size: "large" }), (0, d.im)(n.K, { size: "large" }), (0, d.im)(n.K, { size: "large" }), (0, d.im)(n.K, { size: "large" })] })), A = e(5328), j = e(8596);
  function x(X, re) {
    var ie = Object.keys(X);
    if (Object.getOwnPropertySymbols) {
      var ce = Object.getOwnPropertySymbols(X);
      re && (ce = ce.filter(function(ve) {
        return Object.getOwnPropertyDescriptor(X, ve).enumerable;
      })), ie.push.apply(ie, ce);
    }
    return ie;
  }
  function k(X) {
    for (var re = 1; re < arguments.length; re++) {
      var ie = arguments[re] != null ? arguments[re] : {};
      re % 2 ? x(Object(ie), !0).forEach(function(ce) {
        m(X, ce, ie[ce]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(X, Object.getOwnPropertyDescriptors(ie)) : x(Object(ie)).forEach(function(ce) {
        Object.defineProperty(X, ce, Object.getOwnPropertyDescriptor(ie, ce));
      });
    }
    return X;
  }
  function m(X, re, ie) {
    var ce;
    return (re = typeof (ce = function(ve, Oe) {
      if (typeof ve != "object" || !ve)
        return ve;
      var ke = ve[Symbol.toPrimitive];
      if (ke !== void 0) {
        var Ne = ke.call(ve, Oe || "default");
        if (typeof Ne != "object")
          return Ne;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (Oe === "string" ? String : Number)(ve);
    }(re, "string")) == "symbol" ? ce : String(ce)) in X ? Object.defineProperty(X, re, { value: ie, enumerable: !0, configurable: !0, writable: !0 }) : X[re] = ie, X;
  }
  var p = { countryCode: "country_id", region: "region", postCode: "postcode" }, I = e(4540), M = e(8122);
  function E(X, re) {
    var ie = Object.keys(X);
    if (Object.getOwnPropertySymbols) {
      var ce = Object.getOwnPropertySymbols(X);
      re && (ce = ce.filter(function(ve) {
        return Object.getOwnPropertyDescriptor(X, ve).enumerable;
      })), ie.push.apply(ie, ce);
    }
    return ie;
  }
  function z(X) {
    for (var re = 1; re < arguments.length; re++) {
      var ie = arguments[re] != null ? arguments[re] : {};
      re % 2 ? E(Object(ie), !0).forEach(function(ce) {
        G(X, ce, ie[ce]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(X, Object.getOwnPropertyDescriptors(ie)) : E(Object(ie)).forEach(function(ce) {
        Object.defineProperty(X, ce, Object.getOwnPropertyDescriptor(ie, ce));
      });
    }
    return X;
  }
  function G(X, re, ie) {
    var ce;
    return (re = typeof (ce = function(ve, Oe) {
      if (typeof ve != "object" || !ve)
        return ve;
      var ke = ve[Symbol.toPrimitive];
      if (ke !== void 0) {
        var Ne = ke.call(ve, Oe || "default");
        if (typeof Ne != "object")
          return Ne;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (Oe === "string" ? String : Number)(ve);
    }(re, "string")) == "symbol" ? ce : String(ce)) in X ? Object.defineProperty(X, re, { value: ie, enumerable: !0, configurable: !0, writable: !0 }) : X[re] = ie, X;
  }
  var J = { badInput: "aria-label", patternMismatch: "aria-label", rangeOverflow: "max", rangeUnderflow: "min", tooLong: "maxlength", tooShort: "minlength", typeMismatch: "aria-label", valueMissing: "aria-label" }, Z = ["badInput", "patternMismatch", "rangeOverflow", "rangeUnderflow", "tooLong", "tooShort", "typeMismatch", "valueMissing"];
  function Q(X) {
    return Object.keys(X).length === 0 && X.constructor === Object;
  }
  var q = e(2460), w = e(6156);
  function b(X, re) {
    var ie = Object.keys(X);
    if (Object.getOwnPropertySymbols) {
      var ce = Object.getOwnPropertySymbols(X);
      re && (ce = ce.filter(function(ve) {
        return Object.getOwnPropertyDescriptor(X, ve).enumerable;
      })), ie.push.apply(ie, ce);
    }
    return ie;
  }
  function o(X) {
    for (var re = 1; re < arguments.length; re++) {
      var ie = arguments[re] != null ? arguments[re] : {};
      re % 2 ? b(Object(ie), !0).forEach(function(ce) {
        v(X, ce, ie[ce]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(X, Object.getOwnPropertyDescriptors(ie)) : b(Object(ie)).forEach(function(ce) {
        Object.defineProperty(X, ce, Object.getOwnPropertyDescriptor(ie, ce));
      });
    }
    return X;
  }
  function v(X, re, ie) {
    var ce;
    return (re = typeof (ce = function(ve, Oe) {
      if (typeof ve != "object" || !ve)
        return ve;
      var ke = ve[Symbol.toPrimitive];
      if (ke !== void 0) {
        var Ne = ke.call(ve, Oe || "default");
        if (typeof Ne != "object")
          return Ne;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (Oe === "string" ? String : Number)(ve);
    }(re, "string")) == "symbol" ? ce : String(ce)) in X ? Object.defineProperty(X, re, { value: ie, enumerable: !0, configurable: !0, writable: !0 }) : X[re] = ie, X;
  }
  var C = (X) => {
    var { formRef: re, type: ie, defaultValues: ce = {}, preselection: ve = {}, saveAddressHandler: Oe } = X, ke = (0, q.cF)({ badInput: "Checkout.AddressForm.Validity.badInput", patternMismatch: "Checkout.AddressForm.Validity.patternMismatch", rangeUnderflow: "Checkout.AddressForm.Validity.rangeUnderflow", tooLong: "Checkout.AddressForm.Validity.tooLong", tooShort: "Checkout.AddressForm.Validity.tooShort", typeMismatch: "Checkout.AddressForm.Validity.typeMismatch", valueMissing: "Checkout.AddressForm.Validity.valueMissing" }), Ne = (0, j.yK)(!1), [Ge, $e] = (0, j.oT)({}), { addressBackup: Ye, backup: Te, removeBackup: Le } = function(Me) {
      var { backupService: qe } = (0, I.AJ)(), [He, Je] = (0, j.oT)(null);
      return (0, j.YB)(() => {
        var Ve = qe.restore(Me);
        Ve && Je(Ve);
      }, [Me, qe]), (0, j.YB)(() => {
        var Ve = M.events.on("checkout/order", () => {
          qe.remove(Me);
        });
        return () => {
          Ve == null || Ve.off();
        };
      }, [Me, qe]), { addressBackup: He, backup: (0, j.kZ)((Ve) => setTimeout(() => {
        qe.backup(Me, Ve);
      }, A.sr), [Me, qe]), removeBackup: (0, j.kZ)(() => {
        qe.remove(Me);
      }, [Me, qe]) };
    }(ie), { errors: Xe, validateFormElement: ze } = ((Me) => {
      var [qe, He] = (0, j.oT)({});
      return { errors: qe, validateFormElement: (0, j.kZ)((Je) => {
        var { name: Ve, validity: rt, validationMessage: nt } = Je, lt = rt.valid ? "" : nt;
        Z.forEach((Re) => {
          if (rt[Re]) {
            var Qe = Me[Re];
            if (Qe) {
              var ot = J[Re];
              lt = Qe.replace("{field}", Je.getAttribute(ot) || "");
            }
          }
        }), He((Re) => z(z({}, Re), {}, { [Ve]: lt }));
      }, [Me]) };
    })(ke), Ue = (0, j.kZ)((Me) => {
      Ne.current = !1, Oe(Me).then(() => {
        Le();
      }).catch((qe) => {
        Ne.current = !0, console.error("Saving address form failed:", qe);
      });
    }, [Le, Oe]), et = (Me, qe) => {
      $e((He) => o(o({}, He), {}, { [Me]: qe })), Ne.current = !0;
    };
    return (0, j.YB)(() => {
      $e((Me) => o(o(o(o({}, ce), ve), Ye), Me));
    }, [ce, ve, Ye]), (0, j.YB)(() => {
      if (Ne.current) {
        var Me = Te(Ge);
        return () => {
          clearTimeout(Me);
        };
      }
    }, [Ge, Te]), (0, j.YB)(() => {
      if (Ne.current && ((Je) => {
        var Ve = Je.current;
        return !!Ve && Q((0, w.a)(Ve));
      })(re)) {
        var Me = new AbortController(), qe = Me.signal, He = setTimeout(() => {
          Ue({ signal: qe, address: Ge });
        }, A.sr);
        return () => {
          clearTimeout(He), Me.abort();
        };
      }
    }, [Ge, re, Ue]), { address: Ge, setAddress: $e, errors: Xe, onChange: (Me) => {
      var qe = Me.target, { name: He, value: Je } = qe;
      et(He, Je), ze(qe);
    }, onSelection: (Me) => {
      var qe = Me.target, { name: He, value: Je } = qe;
      et(He, Je), ze(qe);
    }, onBlur: (Me) => {
      Me.target.checkValidity();
    }, onInvalid: (Me) => {
      var qe = Me.target;
      ze(qe);
    } };
  }, r = e(5536), t = e.n(r), u = e(7008), h = e.n(u), i = e(1496), a = e.n(i), g = e(9356), y = e.n(g), B = e(9904), f = e.n(B), _ = e(6064), D = { attributes: { "data-dropin": "storefront-checkout", "data-sdk": "0.22.0" }, styleTagTransform: function(X, re) {
    var $e;
    window._loadedStyles = window._loadedStyles ?? {};
    const ie = ($e = X == null ? void 0 : X.match(/^\.dropin-(\w+)/)) == null ? void 0 : $e[1], ce = re.getAttribute("data-sdk"), ve = ie ? `sdk/${ie}` : re.getAttribute("data-dropin");
    re.setAttribute("data-dropin", ve), re.removeAttribute("data-sdk");
    const Oe = window._loadedStyles[ve];
    if (Oe) {
      const Ye = function(Te, Le) {
        const [Xe, ze] = Te.split("-"), [Ue, et] = Le.split("-"), Me = [...Xe.split("."), ze], qe = [...Ue.split("."), et], He = parseInt(Me[0], 10), Je = parseInt(qe[0], 10);
        if (He !== Je)
          return He > Je ? Te : Le;
        const Ve = parseInt(Me[1], 10), rt = parseInt(qe[1], 10);
        if (Ve !== rt)
          return Ve > rt ? Te : Le;
        const nt = parseInt(Me[2], 10), lt = parseInt(qe[2], 10);
        if (nt !== lt)
          return nt > lt ? Te : Le;
        if (Me[3] && qe[3]) {
          const Re = /(alpha|beta)(.*)/, Qe = Me[3].match(Re), ot = qe[3].match(Re), ut = Qe[1], pt = ot[1], ft = parseInt(Qe[2], 10), mt = parseInt(ot[2], 10);
          if (ut === pt)
            return ft > mt ? Te : Le;
          if (ut === "alpha" && pt === "beta")
            return Le;
          if (ut === "beta" && pt === "alpha")
            return Te;
        }
        return Me[3] ? Le : Te;
      }(ce, Oe.sdk);
      if (!ie || ie && Ye === Oe.sdk) {
        const Te = Oe.style.textContent;
        Oe.style.textContent = `${Te}
/* --- MERGED --- */
${X}`;
      } else
        ie && Ye !== Oe.sdk && (Oe.style.textContent = `/* --- UPGRADED --- */
${X}`);
      return void re.remove();
    }
    re.textContent = X, window._loadedStyles[ve] = { sdk: ce, core: ie, style: re };
    const ke = document.querySelector("head"), { lastDropinStyleInjected: Ne, lastSDKStyleInjected: Ge } = window._loadedStyles;
    ie ? (Ge ? ke.insertBefore(re, Ge.nextSibling) : ke.insertBefore(re, ke.firstChild), window._loadedStyles.lastSDKStyleInjected = re) : (Ne ? ke.insertBefore(re, Ne.nextSibling) : Ge ? ke.insertBefore(re, Ge.nextSibling) : ke.insertBefore(re, ke.firstChild), window._loadedStyles.lastDropinStyleInjected = re);
  } };
  D.setAttributes = y(), D.insert = a().bind(null, "head"), D.domAPI = h(), D.insertStyleElement = f(), t()(_.c, D), _.c && _.c.locals && _.c.locals;
  var R = e(4944), Y = e(3520), W = { attributes: { "data-dropin": "storefront-checkout", "data-sdk": "0.22.0" }, styleTagTransform: function(X, re) {
    var $e;
    window._loadedStyles = window._loadedStyles ?? {};
    const ie = ($e = X == null ? void 0 : X.match(/^\.dropin-(\w+)/)) == null ? void 0 : $e[1], ce = re.getAttribute("data-sdk"), ve = ie ? `sdk/${ie}` : re.getAttribute("data-dropin");
    re.setAttribute("data-dropin", ve), re.removeAttribute("data-sdk");
    const Oe = window._loadedStyles[ve];
    if (Oe) {
      const Ye = function(Te, Le) {
        const [Xe, ze] = Te.split("-"), [Ue, et] = Le.split("-"), Me = [...Xe.split("."), ze], qe = [...Ue.split("."), et], He = parseInt(Me[0], 10), Je = parseInt(qe[0], 10);
        if (He !== Je)
          return He > Je ? Te : Le;
        const Ve = parseInt(Me[1], 10), rt = parseInt(qe[1], 10);
        if (Ve !== rt)
          return Ve > rt ? Te : Le;
        const nt = parseInt(Me[2], 10), lt = parseInt(qe[2], 10);
        if (nt !== lt)
          return nt > lt ? Te : Le;
        if (Me[3] && qe[3]) {
          const Re = /(alpha|beta)(.*)/, Qe = Me[3].match(Re), ot = qe[3].match(Re), ut = Qe[1], pt = ot[1], ft = parseInt(Qe[2], 10), mt = parseInt(ot[2], 10);
          if (ut === pt)
            return ft > mt ? Te : Le;
          if (ut === "alpha" && pt === "beta")
            return Le;
          if (ut === "beta" && pt === "alpha")
            return Te;
        }
        return Me[3] ? Le : Te;
      }(ce, Oe.sdk);
      if (!ie || ie && Ye === Oe.sdk) {
        const Te = Oe.style.textContent;
        Oe.style.textContent = `${Te}
/* --- MERGED --- */
${X}`;
      } else
        ie && Ye !== Oe.sdk && (Oe.style.textContent = `/* --- UPGRADED --- */
${X}`);
      return void re.remove();
    }
    re.textContent = X, window._loadedStyles[ve] = { sdk: ce, core: ie, style: re };
    const ke = document.querySelector("head"), { lastDropinStyleInjected: Ne, lastSDKStyleInjected: Ge } = window._loadedStyles;
    ie ? (Ge ? ke.insertBefore(re, Ge.nextSibling) : ke.insertBefore(re, ke.firstChild), window._loadedStyles.lastSDKStyleInjected = re) : (Ne ? ke.insertBefore(re, Ne.nextSibling) : Ge ? ke.insertBefore(re, Ge.nextSibling) : ke.insertBefore(re, ke.firstChild), window._loadedStyles.lastDropinStyleInjected = re);
  } };
  W.setAttributes = y(), W.insert = a().bind(null, "head"), W.domAPI = h(), W.insertStyleElement = f(), t()(Y.c, W), Y.c && Y.c.locals && Y.c.locals;
  var U = e(5912);
  function K(X, re) {
    var ie = Object.keys(X);
    if (Object.getOwnPropertySymbols) {
      var ce = Object.getOwnPropertySymbols(X);
      re && (ce = ce.filter(function(ve) {
        return Object.getOwnPropertyDescriptor(X, ve).enumerable;
      })), ie.push.apply(ie, ce);
    }
    return ie;
  }
  function H(X) {
    for (var re = 1; re < arguments.length; re++) {
      var ie = arguments[re] != null ? arguments[re] : {};
      re % 2 ? K(Object(ie), !0).forEach(function(ce) {
        l(X, ce, ie[ce]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(X, Object.getOwnPropertyDescriptors(ie)) : K(Object(ie)).forEach(function(ce) {
        Object.defineProperty(X, ce, Object.getOwnPropertyDescriptor(ie, ce));
      });
    }
    return X;
  }
  function l(X, re, ie) {
    var ce;
    return (re = typeof (ce = function(ve, Oe) {
      if (typeof ve != "object" || !ve)
        return ve;
      var ke = ve[Symbol.toPrimitive];
      if (ke !== void 0) {
        var Ne = ke.call(ve, Oe || "default");
        if (typeof Ne != "object")
          return Ne;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (Oe === "string" ? String : Number)(ve);
    }(re, "string")) == "symbol" ? ce : String(ce)) in X ? Object.defineProperty(X, re, { value: ie, enumerable: !0, configurable: !0, writable: !0 }) : X[re] = ie, X;
  }
  var c = (X) => X.reduce((re, ie) => {
    switch (ie.name) {
      case U.aq.DateRangeMax:
        return H(H({}, re), {}, { max: ie.value });
      case U.aq.DateRangeMin:
        return H(H({}, re), {}, { min: ie.value });
      case U.aq.FileExtensions:
        return H(H({}, re), {}, { accept: ie.value });
      case U.aq.InputValidation:
        return H(H({}, re), {}, { pattern: N(ie.value) });
      case U.aq.MaxFileSize:
      case U.aq.MaxImageHeight:
      case U.aq.MaxImageWidth:
        return re;
      case U.aq.MaxTextLength:
        return H(H({}, re), {}, { maxLength: ie.value });
      case U.aq.MinTextLength:
        return H(H({}, re), {}, { minLength: ie.value });
      default:
        throw new Error("Unknown rule: ".concat(ie.name));
    }
  }, {}), O = { alpha: /^[a-zA-Z]+$/, alphanumeric: /^[a-zA-Z0-9]+$/, "alphanumeric-w-space": /^[a-zA-Z0-9 ]+$/, "alphanum-with-spaces": /^[a-zA-Z0-9 ]+$/, email: /^([a-z0-9,!#$%&'*+/=?^_`{|}~-]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z0-9,!#$%&'*+/=?^_`{|}~-]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*@([a-z0-9-]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z0-9-]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*\.(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]){2,})$/i, numeric: /^[0-9]+$/, url: /^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w\-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\\w]*))?)$/ }, N = (X) => {
    switch (X) {
      case "alpha":
        return O.alpha.source;
      case "alphanumeric":
        return O.alphanumeric.source;
      case "alphanumeric-w-space":
        return O["alphanumeric-w-space"].source;
      case "alphanum-with-spaces":
        return O["alphanum-with-spaces"].source;
      case "url":
        return O.url.source;
      case "numeric":
        return O.numeric.source;
      case "email":
        return O.email.source;
      default:
        throw new Error("Unknown validation type: ".concat(X));
    }
  };
  const F = { firstname: "given-name", lastname: "family-name", company: "organization", country: "country", region: "address-level1", city: "address-level2", postcode: "postal-code", telephone: "tel", street: "address-line1", email: "email", middlename: "additional-name", prefix: "honorific-prefix", suffix: "honorific-suffix" };
  var V = e(1704), ee = e(7912), ne = e(6360);
  function oe(X, re) {
    var ie = Object.keys(X);
    if (Object.getOwnPropertySymbols) {
      var ce = Object.getOwnPropertySymbols(X);
      re && (ce = ce.filter(function(ve) {
        return Object.getOwnPropertyDescriptor(X, ve).enumerable;
      })), ie.push.apply(ie, ce);
    }
    return ie;
  }
  function pe(X) {
    for (var re = 1; re < arguments.length; re++) {
      var ie = arguments[re] != null ? arguments[re] : {};
      re % 2 ? oe(Object(ie), !0).forEach(function(ce) {
        _e(X, ce, ie[ce]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(X, Object.getOwnPropertyDescriptors(ie)) : oe(Object(ie)).forEach(function(ce) {
        Object.defineProperty(X, ce, Object.getOwnPropertyDescriptor(ie, ce));
      });
    }
    return X;
  }
  function _e(X, re, ie) {
    var ce;
    return (re = typeof (ce = function(ve, Oe) {
      if (typeof ve != "object" || !ve)
        return ve;
      var ke = ve[Symbol.toPrimitive];
      if (ke !== void 0) {
        var Ne = ke.call(ve, Oe || "default");
        if (typeof Ne != "object")
          return Ne;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (Oe === "string" ? String : Number)(ve);
    }(re, "string")) == "symbol" ? ce : String(ce)) in X ? Object.defineProperty(X, re, { value: ie, enumerable: !0, configurable: !0, writable: !0 }) : X[re] = ie, X;
  }
  var ae = (X) => {
    switch (X.frontend_input) {
      case "BOOLEAN":
      case "DATE":
      case "DATETIME":
      case "FILE":
      case "GALLERY":
      case "IMAGE":
      case "MEDIA_IMAGE":
      case "MULTISELECT":
      case "PRICE":
      case "TEXTAREA":
      case "UNDEFINED":
      case "WEIGHT":
        return null;
      case "HIDDEN":
        return ((re) => {
          var { id: ie, addressType: ce, className: ve, code: Oe, value: ke, default_value: Ne } = re, Ge = ie || Oe;
          return (0, d.im)("input", { className: ve, id: "".concat(ce, "-").concat(Ge), name: Oe, type: "hidden", value: ke ?? Ne }, Oe);
        })(X);
      case "TEXT":
        return ((re) => {
          var { addressType: ie, className: ce, code: ve, error: Oe, id: ke, onBlur: Ne, onChange: Ge, onInvalid: $e, validate_rules: Ye, value: Te } = re, Le = c(Ye), Xe = ke || ve;
          return (0, d.im)(V.I, { disabled: re.disabled, error: Oe, children: (0, d.im)(ee.E, pe({ "aria-label": re.label, autocomplete: F[ve] || "off", className: ce, floatingLabel: "".concat(re.label, " ").concat(re.is_required ? "*" : ""), id: "".concat(ie, "-").concat(Xe), onBlur: Ne, onChange: Ge, onInvalid: $e, placeholder: re.label, required: re.is_required || !1, type: "text", name: ve, value: Te ?? void 0 }, Le)) });
        })(X);
      case "MULTILINE":
        return ((re) => {
          var { addressType: ie, className: ce, code: ve, disabled: Oe, error: ke, id: Ne, is_required: Ge, label: $e, multiline_count: Ye, onBlur: Te, onChange: Le, onInvalid: Xe, validate_rules: ze, value: Ue } = re, et = Ye ?? 0, Me = Ne || ve, qe = c(ze);
          return (0, d.im)(d.ae, { children: Array.from(Array(et).keys()).map((He) => (0, d.im)(V.I, { disabled: Oe, error: (ke == null ? void 0 : ke[He]) || "", className: "dropin-field--multiline", children: (0, d.im)(ee.E, pe({ id: "".concat(ie, "-").concat(Me, "-").concat(He), className: ce, floatingLabel: "".concat($e, " ").concat(He != 0 ? He : "", " ").concat(Ge && He === 0 ? "*" : ""), autocomplete: He === 0 ? F[ve] : "off", "aria-label": $e, placeholder: "".concat($e, " ").concat(He != 0 ? He : ""), type: "text", required: Ge && He === 0, onChange: Le, onBlur: Te, onInvalid: Xe, name: "".concat(ve, "-").concat(He), value: (Ue == null ? void 0 : Ue[He]) || void 0 }, qe)) }, "".concat(ve, "-").concat(He))) });
        })(X);
      case "SELECT":
        return ((re) => {
          var { addressType: ie, className: ce, code: ve, disabled: Oe, error: ke, handleSelect: Ne, id: Ge, is_required: $e, label: Ye, onBlur: Te, onInvalid: Le, options: Xe, value: ze } = re, Ue = Ge || ve, et = Ne ? { handleSelect: Ne } : {};
          return (0, d.im)(V.I, { disabled: Oe, error: ke, children: (0, d.im)(ne.q, pe({ id: "".concat(ie, "-").concat(Ue), className: ce, name: ve, floatingLabel: "".concat(Ye, " ").concat($e ? "*" : ""), required: $e, placeholder: Ye, "aria-label": Ye, options: Xe, value: ze, autocomplete: F[ve] || "off", onBlur: Te, onInvalid: Le }, et), ve) });
        })(X);
      default:
        throw new Error("Unknown field type: ".concat(X.frontend_input));
    }
  }, Se = e(2216), le = ["className", "name", "headingId", "formRef", "fields"];
  function se(X, re) {
    var ie = Object.keys(X);
    if (Object.getOwnPropertySymbols) {
      var ce = Object.getOwnPropertySymbols(X);
      re && (ce = ce.filter(function(ve) {
        return Object.getOwnPropertyDescriptor(X, ve).enumerable;
      })), ie.push.apply(ie, ce);
    }
    return ie;
  }
  function fe(X) {
    for (var re = 1; re < arguments.length; re++) {
      var ie = arguments[re] != null ? arguments[re] : {};
      re % 2 ? se(Object(ie), !0).forEach(function(ce) {
        be(X, ce, ie[ce]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(X, Object.getOwnPropertyDescriptors(ie)) : se(Object(ie)).forEach(function(ce) {
        Object.defineProperty(X, ce, Object.getOwnPropertyDescriptor(ie, ce));
      });
    }
    return X;
  }
  function be(X, re, ie) {
    var ce;
    return (re = typeof (ce = function(ve, Oe) {
      if (typeof ve != "object" || !ve)
        return ve;
      var ke = ve[Symbol.toPrimitive];
      if (ke !== void 0) {
        var Ne = ke.call(ve, Oe || "default");
        if (typeof Ne != "object")
          return Ne;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (Oe === "string" ? String : Number)(ve);
    }(re, "string")) == "symbol" ? ce : String(ce)) in X ? Object.defineProperty(X, re, { value: ie, enumerable: !0, configurable: !0, writable: !0 }) : X[re] = ie, X;
  }
  function ue(X, re) {
    if (X == null)
      return {};
    var ie, ce, ve = function(ke, Ne) {
      if (ke == null)
        return {};
      var Ge, $e, Ye = {}, Te = Object.keys(ke);
      for ($e = 0; $e < Te.length; $e++)
        Ge = Te[$e], Ne.indexOf(Ge) >= 0 || (Ye[Ge] = ke[Ge]);
      return Ye;
    }(X, re);
    if (Object.getOwnPropertySymbols) {
      var Oe = Object.getOwnPropertySymbols(X);
      for (ce = 0; ce < Oe.length; ce++)
        ie = Oe[ce], re.indexOf(ie) >= 0 || Object.prototype.propertyIsEnumerable.call(X, ie) && (ve[ie] = X[ie]);
    }
    return ve;
  }
  var de, we = (X) => {
    var { className: re, name: ie, headingId: ce, formRef: ve, fields: Oe } = X, ke = ue(X, le);
    return (0, d.YH)("div", fe(fe({}, ke), {}, { className: (0, R.i)(["checkout-fields-form", re]), children: [(0, d.im)(Se._, { level: 2, children: (0, d.im)(q.a, { id: ce }), className: "checkout-fields-form__title" }), (0, d.im)("form", { name: ie, ref: ve, className: (0, R.i)(["checkout-fields-form__form", re]), noValidate: !0, children: Oe.sort((Ne, Ge) => Ne.sort_order - Ge.sort_order).map(ae) })] }));
  }, xe = e(2236), Ie = e(5020), Ae = e(2256), je = e(8628), De = e(5668), Ce = e(3644), Be = e(3980), Ke = e(1988);
  function Ze(X) {
    var re, ie = De.cartSignal.value.data, ce = !!ie, ve = ie == null || (re = ie.shippingAddresses) === null || re === void 0 ? void 0 : re[0], Oe = ve == null ? void 0 : ve.availableShippingMethods;
    ce && !Oe && (clearTimeout(de), de = setTimeout(() => {
      (0, Ke.Y)({ cartId: ie.id, criteria: X });
    }, A.sr));
  }
  function at(X, re) {
    var ie = Object.keys(X);
    if (Object.getOwnPropertySymbols) {
      var ce = Object.getOwnPropertySymbols(X);
      re && (ce = ce.filter(function(ve) {
        return Object.getOwnPropertyDescriptor(X, ve).enumerable;
      })), ie.push.apply(ie, ce);
    }
    return ie;
  }
  function We(X) {
    for (var re = 1; re < arguments.length; re++) {
      var ie = arguments[re] != null ? arguments[re] : {};
      re % 2 ? at(Object(ie), !0).forEach(function(ce) {
        it(X, ce, ie[ce]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(X, Object.getOwnPropertyDescriptors(ie)) : at(Object(ie)).forEach(function(ce) {
        Object.defineProperty(X, ce, Object.getOwnPropertyDescriptor(ie, ce));
      });
    }
    return X;
  }
  function it(X, re, ie) {
    var ce;
    return (re = typeof (ce = function(ve, Oe) {
      if (typeof ve != "object" || !ve)
        return ve;
      var ke = ve[Symbol.toPrimitive];
      if (ke !== void 0) {
        var Ne = ke.call(ve, Oe || "default");
        if (typeof Ne != "object")
          return Ne;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (Oe === "string" ? String : Number)(ve);
    }(re, "string")) == "symbol" ? ce : String(ce)) in X ? Object.defineProperty(X, re, { value: ie, enumerable: !0, configurable: !0, writable: !0 }) : X[re] = ie, X;
  }
  var ct = (X) => (X == null ? void 0 : X.label) && (X == null ? void 0 : X.value);
  function dt(X) {
    var { fields: re, address: ie, setAddress: ce, addressType: ve, errors: Oe, config: ke, availableCountries: Ne, availableRegions: Ge, onSelection: $e, onChange: Ye, onBlur: Te, onInvalid: Le } = X, Xe = (ze) => {
      ce((Ue) => We(We({}, Ue), {}, { [je.q.RegionId]: ze }));
    };
    return re.map((ze) => {
      var Ue, et, Me, qe, He = ze.is_required, Je = ze.frontend_input, Ve = [], rt = !1;
      if (Je === "MULTILINE" ? (Ue = (0, Be.C)(ze.code, ie), et = (0, Be.C)(ze.code, Oe)) : (Ue = ie[ze.code], et = Oe[ze.code] || ""), ze.code !== je.q.Region && ze.code !== je.q.Country && (Ve = (qe = ze.options) ? qe.filter(ct).map((Re) => ({ text: Re.label, value: Re.value })) : []), ze.code === je.q.Country && (Ve = ((Re) => Re ? Re.map((Qe) => ({ text: Qe.label, value: Qe.value })) : [])(Ne), ve === je.y.SHIPPING ? (Ce.regionsSignal.value.country = Ue, Me = (Re) => {
        var Qe = Re.target, { value: ot } = Qe;
        ot && Ze({ country_code: ot }), $e(Re), ce((ut) => We(We({}, ut), {}, { [je.q.Region]: "", [je.q.RegionId]: "" }));
      }) : Me = $e), ze.code === je.q.RegionId && ve === je.y.SHIPPING && (Ce.regionsSignal.value.selectedRegionId = Ue), ze.code === je.q.Region) {
        var nt;
        if (ve === Ce.regionsSignal.value.addressType && (rt = Ce.regionsSignal.value.pending), He = ke.countriesWithRequiredRegion.includes(ie == null ? void 0 : ie.country_id), Ve = Ge.map((Re) => {
          var Qe, ot = (Re == null || (Qe = Re.id) === null || Qe === void 0 ? void 0 : Qe.toString()) || Re.code;
          return { text: Re.name, value: ot };
        }), He || ke.displayStateIfOptional || (Je = U.oR.Undefined), (Je = Ve.length > 0 ? U.oR.Select : U.oR.Text) === "SELECT")
          ve === je.y.SHIPPING ? (Ce.regionsSignal.value.selectedRegion = Ue, Me = (Re) => {
            var Qe = Re.target.value;
            Ze({ country_code: Ce.regionsSignal.value.country, region_id: Qe }), $e(Re), Xe(Qe);
          }) : Me = (Re) => {
            $e(Re);
            var Qe = Re.target.value;
            Xe(Qe);
          };
        else if (Je === "TEXT" && ve === je.y.SHIPPING) {
          Ce.regionsSignal.value.selectedRegion = Ue;
          var lt = Ye;
          Ye = (Re) => {
            var Qe = Re.target, { value: ot } = Qe;
            Ce.regionsSignal.value.country && Ze({ country_code: Ce.regionsSignal.value.country, region_name: ot }), lt(Re);
          };
        }
        Ue = Ve.length > 0 ? ((nt = Ve.find((Re) => Re.value === Ue)) === null || nt === void 0 ? void 0 : nt.value) || "" : Ue;
      }
      return ze.code === je.q.PostCode && (He = !ke.countriesWithOptionalZipCode.includes(ie == null ? void 0 : ie.country_id)), We(We({}, ze), {}, { is_required: He, frontend_input: Je, addressType: ve, className: "checkout-address-form__".concat(ze.code), value: Ue, options: Ve, error: et, onChange: Ye, onBlur: Te, onInvalid: Le, handleSelect: Me, disabled: rt });
    });
  }
  var st = e(2796), vt = ["name", "preselectedFields", "addressType", "headingId", "saveAddressHandler", "children", "shouldAutoFillForm"];
  function ye(X, re) {
    if (X == null)
      return {};
    var ie, ce, ve = function(ke, Ne) {
      if (ke == null)
        return {};
      var Ge, $e, Ye = {}, Te = Object.keys(ke);
      for ($e = 0; $e < Te.length; $e++)
        Ge = Te[$e], Ne.indexOf(Ge) >= 0 || (Ye[Ge] = ke[Ge]);
      return Ye;
    }(X, re);
    if (Object.getOwnPropertySymbols) {
      var Oe = Object.getOwnPropertySymbols(X);
      for (ce = 0; ce < Oe.length; ce++)
        ie = Oe[ce], re.indexOf(ie) >= 0 || Object.prototype.propertyIsEnumerable.call(X, ie) && (ve[ie] = X[ie]);
    }
    return ve;
  }
  function ge(X, re) {
    var ie = Object.keys(X);
    if (Object.getOwnPropertySymbols) {
      var ce = Object.getOwnPropertySymbols(X);
      re && (ce = ce.filter(function(ve) {
        return Object.getOwnPropertyDescriptor(X, ve).enumerable;
      })), ie.push.apply(ie, ce);
    }
    return ie;
  }
  function me(X) {
    for (var re = 1; re < arguments.length; re++) {
      var ie = arguments[re] != null ? arguments[re] : {};
      re % 2 ? ge(Object(ie), !0).forEach(function(ce) {
        he(X, ce, ie[ce]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(X, Object.getOwnPropertyDescriptors(ie)) : ge(Object(ie)).forEach(function(ce) {
        Object.defineProperty(X, ce, Object.getOwnPropertyDescriptor(ie, ce));
      });
    }
    return X;
  }
  function he(X, re, ie) {
    var ce;
    return (re = typeof (ce = function(ve, Oe) {
      if (typeof ve != "object" || !ve)
        return ve;
      var ke = ve[Symbol.toPrimitive];
      if (ke !== void 0) {
        var Ne = ke.call(ve, Oe || "default");
        if (typeof Ne != "object")
          return Ne;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (Oe === "string" ? String : Number)(ve);
    }(re, "string")) == "symbol" ? ce : String(ce)) in X ? Object.defineProperty(X, re, { value: ie, enumerable: !0, configurable: !0, writable: !0 }) : X[re] = ie, X;
  }
  function Pe(X) {
    var { shouldAutoFillForm: re, addressType: ie, setAddress: ce, fields: ve } = X, [Oe, ke] = (0, st.oT)(!1), Ne = De.cartSignal.value.data;
    (0, st.YB)(() => {
      if (!Oe && Ne && ve) {
        ke(!0);
        var Ge = ie === je.y.SHIPPING ? Ne == null ? void 0 : Ne.shippingAddresses : Ne == null ? void 0 : Ne.billingAddress;
        if ((Array.isArray(Ge) ? Ge.length > 0 : Ge) && (!re || re())) {
          var $e = Array.isArray(Ge) ? Ge[0] : Ge;
          if ($e) {
            var Ye = { [je.q.City]: $e.city, [je.q.Company]: $e.company || "", [je.q.Country]: $e.country.value, [je.q.FirstName]: $e.firstName, [je.q.LastName]: $e.lastName, [je.q.PostCode]: $e.postCode || "", [je.q.Telephone]: $e.telephone || "", [je.q.Vat]: $e.vatId || "" }, Te = $e.region;
            if (Te) {
              var Le, Xe = Te == null || (Le = Te.id) === null || Le === void 0 ? void 0 : Le.toString();
              Xe ? (Ye[je.q.Region] = Xe, Ye[je.q.RegionId] = Xe) : Ye[je.q.Region] = Te.code;
            }
            $e != null && $e.street && $e.street.length > 0 && $e.street.forEach((ze, Ue) => {
              Ye["".concat(je.q.Street).concat(A.Mp).concat(Ue)] = ze;
            }), (($e == null ? void 0 : $e.customAttributes) || []).forEach((ze) => {
              ((Ue) => {
                if (!ve)
                  return !1;
                var et = ve.find((Me) => Me.code === Ue);
                return !!et && et.frontend_input === "MULTILINE";
              })(ze.code) ? ze.value.split(A.EF).forEach((Ue, et) => {
                Ye["".concat(ze.code).concat(A.Mp).concat(et)] = Ue;
              }) : Ye[ze.code] = ze.value;
            }), ce(Ye);
          }
        }
      }
    }, [ce, re, ie, Ne, ve, Oe]);
  }
  var Ee = (0, st.wd)((X, re) => {
    var { name: ie, preselectedFields: ce, addressType: ve, headingId: Oe, saveAddressHandler: ke, children: Ne, shouldAutoFillForm: Ge } = X, $e = ye(X, vt), { fields: Ye } = (0, xe.q)(), { countries: Te } = (0, Ie.o)(), Le = Te === void 0, Xe = Ye === void 0, { config: ze } = (0, Ae.o3)(), Ue = ze === void 0, { defaultValues: et } = function(pt) {
      var [ft, mt] = (0, st.oT)({});
      return (0, st.YB)(() => {
        pt && mt((yt) => me(me({}, yt), {}, { country_id: pt }));
      }, [pt]), { defaultValues: ft };
    }(ze == null ? void 0 : ze.defaultCountry), { preselection: Me } = function(pt) {
      var { fields: ft, preselectedFields: mt } = pt;
      return { preselection: (0, j.bB)(() => ft && ft.length > 0 && mt ? Object.keys(mt).reduce((yt, ht) => {
        var bt = p[ht];
        return bt && ft.some((Lt) => Lt.code === bt) ? k(k({}, yt), {}, { [bt]: mt[ht] }) : yt;
      }, {}) : null, [ft, mt]) };
    }({ fields: Ye, preselectedFields: ce }), qe = (0, st.yK)(null), { address: He, setAddress: Je, onSelection: Ve, errors: rt, onChange: nt, onInvalid: lt, onBlur: Re } = C({ formRef: qe, type: ve, defaultValues: et, preselection: Me, saveAddressHandler: ke }), { availableRegions: Qe } = function(pt) {
      var { country: ft, addressType: mt } = pt, [yt, ht] = (0, st.oT)([]);
      return (0, st.YB)(() => {
        ft ? (0, s.i)(ft, mt).then((bt) => {
          ht(bt || []);
        }).catch((bt) => {
          console.error(bt);
        }) : ht([]);
      }, [ht, ft, mt]), { availableRegions: yt };
    }({ country: He.country_id, addressType: ve });
    if ((0, st.Km)(re, () => ({ triggerSaveAddress: (pt) => {
      if (qe.current && Q((0, w.a)(qe.current)))
        return ke({ signal: pt, address: He });
    } })), Pe({ shouldAutoFillForm: Ge, addressType: ve, setAddress: Je, fields: Ye }), Xe || Le || Ue)
      return (0, d.im)($, { "data-testid": "".concat(ve, "-skeleton") });
    var ot = dt({ fields: Ye, address: He, setAddress: Je, addressType: ve, errors: rt, config: ze, availableCountries: Te, availableRegions: Qe, onSelection: Ve, onChange: nt, onBlur: Re, onInvalid: lt }), ut = { [je.y.SHIPPING]: "shipping", [je.y.BILLING]: "billing" };
    return (0, d.im)(we, me(me({}, $e), {}, { "data-testid": "".concat(ut[ve], "-form"), name: ie, className: "checkout-".concat(ut[ve], "-form"), headingId: Oe, formRef: qe, fields: ot }));
  });
}, 2216: (te, T, e) => {
  e.d(T, { _: () => I });
  var s = e(5536), n = e.n(s), d = e(7008), P = e.n(d), S = e(1496), L = e.n(S), $ = e(9356), A = e.n($), j = e(9904), x = e.n(j), k = e(7696), m = { attributes: { "data-dropin": "storefront-checkout", "data-sdk": "0.22.0" }, styleTagTransform: function(M, E) {
    var b;
    window._loadedStyles = window._loadedStyles ?? {};
    const z = (b = M == null ? void 0 : M.match(/^\.dropin-(\w+)/)) == null ? void 0 : b[1], G = E.getAttribute("data-sdk"), J = z ? `sdk/${z}` : E.getAttribute("data-dropin");
    E.setAttribute("data-dropin", J), E.removeAttribute("data-sdk");
    const Z = window._loadedStyles[J];
    if (Z) {
      const o = function(v, C) {
        const [r, t] = v.split("-"), [u, h] = C.split("-"), i = [...r.split("."), t], a = [...u.split("."), h], g = parseInt(i[0], 10), y = parseInt(a[0], 10);
        if (g !== y)
          return g > y ? v : C;
        const B = parseInt(i[1], 10), f = parseInt(a[1], 10);
        if (B !== f)
          return B > f ? v : C;
        const _ = parseInt(i[2], 10), D = parseInt(a[2], 10);
        if (_ !== D)
          return _ > D ? v : C;
        if (i[3] && a[3]) {
          const R = /(alpha|beta)(.*)/, Y = i[3].match(R), W = a[3].match(R), U = Y[1], K = W[1], H = parseInt(Y[2], 10), l = parseInt(W[2], 10);
          if (U === K)
            return H > l ? v : C;
          if (U === "alpha" && K === "beta")
            return C;
          if (U === "beta" && K === "alpha")
            return v;
        }
        return i[3] ? C : v;
      }(G, Z.sdk);
      if (!z || z && o === Z.sdk) {
        const v = Z.style.textContent;
        Z.style.textContent = `${v}
/* --- MERGED --- */
${M}`;
      } else
        z && o !== Z.sdk && (Z.style.textContent = `/* --- UPGRADED --- */
${M}`);
      return void E.remove();
    }
    E.textContent = M, window._loadedStyles[J] = { sdk: G, core: z, style: E };
    const Q = document.querySelector("head"), { lastDropinStyleInjected: q, lastSDKStyleInjected: w } = window._loadedStyles;
    z ? (w ? Q.insertBefore(E, w.nextSibling) : Q.insertBefore(E, Q.firstChild), window._loadedStyles.lastSDKStyleInjected = E) : (q ? Q.insertBefore(E, q.nextSibling) : w ? Q.insertBefore(E, w.nextSibling) : Q.insertBefore(E, Q.firstChild), window._loadedStyles.lastDropinStyleInjected = E);
  } };
  m.setAttributes = A(), m.insert = L().bind(null, "head"), m.domAPI = P(), m.insertStyleElement = x(), n()(k.c, m), k.c && k.c.locals && k.c.locals;
  var p = e(8412), I = (M) => {
    var { className: E, children: z, level: G = 2 } = M, J = G >= 1 && G <= 6 ? "h".concat(G) : "h2";
    return (0, p.im)(J, { className: E, children: z });
  };
}, 2236: (te, T, e) => {
  e.d(T, { Y: () => L, q: () => $ });
  var s = e(304), n = e(8596), d = e(1212), P = e(8412), S = (0, s.GY)(void 0);
  function L(A) {
    var { children: j } = A, [x, k] = (0, n.oT)({});
    return (0, n.YB)(() => {
      (0, d.m)().then((m) => k({ fields: m }));
    }, []), (0, P.im)(S.Provider, { value: x, children: j });
  }
  function $() {
    var A = (0, n.Co)(S);
    if (A !== void 0)
      return A;
    throw new Error("useAddressFormFields must be used within an AddressFormFieldsProvider");
  }
}, 5020: (te, T, e) => {
  e.d(T, { W: () => L, o: () => $ });
  var s = e(304), n = e(8596), d = e(152), P = e(8412), S = (0, s.GY)(void 0);
  function L(A) {
    var { children: j } = A, [x, k] = (0, n.oT)({});
    return (0, n.YB)(() => {
      (0, d.K)().then((m) => k({ countries: m }));
    }, []), (0, P.im)(S.Provider, { value: x, children: j });
  }
  function $() {
    var A = (0, n.Co)(S);
    if (A !== void 0)
      return A;
    throw new Error("useCountries must be used within a CountriesProvider");
  }
}, 4540: (te, T, e) => {
  e.d(T, { AJ: () => L, mA: () => S });
  var s = e(304), n = e(8596), d = e(8412), P = (0, s.GY)({});
  function S($) {
    var { children: A, services: j } = $;
    return (0, d.im)(P.Provider, { value: j, children: A });
  }
  function L() {
    var $ = (0, n.Co)(P);
    if ($ !== void 0)
      return $;
    throw new Error("useServices must be used within a ServicesProvider");
  }
}, 9488: (te, T, e) => {
  e.d(T, { isBillToShippingSignal: () => s });
  var s = (0, e(1520).OC)({ checked: !0, setByUser: !1 });
}, 6064: (te, T, e) => {
  e.d(T, { c: () => S });
  var s = e(6008), n = e.n(s), d = e(2076), P = e.n(d)()(n());
  P.push([te.id, `.checkout-shipping-address__skeleton{
  display:flex;
  align-items:flex-start;
  justify-content:space-between;
  gap:var(--spacing-medium);
  flex-wrap:wrap;
  min-width:384px;
}
.checkout-address-form{}
.checkout-address-form__company{
  grid-column:1 / -1;
}

.checkout-address-form__street{
  grid-column:1 / -1;
}

.checkout-address-form__street .dropin-input-container{
  margin-bottom:var(--spacing-medium);
}

.checkout-address-form__street .dropin-input-container:last-child{
  margin-bottom:0;
}

.checkout-address-form__street .dropin-field__content{
  display:grid;
  grid-auto-flow:row;
  gap:var(--spacing-xxsmall);
}

.checkout-address-form__country_id .dropin-picker__options-container,
.checkout-address-form__region .dropin-picker__options-container{
  z-index:100;
}

.checkout-address-form__save{
  grid-column:1 / -1;
  justify-self:center;
}
`, ""]);
  const S = P;
}, 3520: (te, T, e) => {
  e.d(T, { c: () => S });
  var s = e(6008), n = e.n(s), d = e(2076), P = e.n(d)()(n());
  P.push([te.id, `.checkout-fields-form__title{
  color:var(--color-neutral-800);
  font:var(--type-headline-2-default-font);
  letter-spacing:var(--type-headline-2-default-letter-spacing);
  margin:0 0 var(--spacing-medium) 0;
}

.checkout-fields-form__form{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:var(--spacing-medium);
}
@media only screen and (min-width: 320px) and (max-width: 768px){
  .checkout-fields-form__form{
    grid-template-columns:1fr;
  }
}

@media only screen and (min-width: 768px){
  .dropin-field--multiline{
    grid-column:span 2;
  }
}
`, ""]);
  const S = P;
}, 7696: (te, T, e) => {
  e.d(T, { c: () => S });
  var s = e(6008), n = e.n(s), d = e(2076), P = e.n(d)()(n());
  P.push([te.id, `
`, ""]);
  const S = P;
} }, Cr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  id: jr,
  ids: Pr,
  modules: Ir
}, Symbol.toStringTag, { value: "Module" })), Er = 3316, Dr = [3316], Tr = { 3316: (te, T, e) => {
  e.d(T, { E: () => Se, A: () => ae });
  var s = e(4944), n = e(5536), d = e.n(n), P = e(7008), S = e.n(P), L = e(1496), $ = e.n(L), A = e(9356), j = e.n(A), x = e(9904), k = e.n(x), m = e(3536), p = { attributes: { "data-dropin": "storefront-checkout", "data-sdk": "0.22.0" }, styleTagTransform: function(le, se) {
    var Ae;
    window._loadedStyles = window._loadedStyles ?? {};
    const fe = (Ae = le == null ? void 0 : le.match(/^\.dropin-(\w+)/)) == null ? void 0 : Ae[1], be = se.getAttribute("data-sdk"), ue = fe ? `sdk/${fe}` : se.getAttribute("data-dropin");
    se.setAttribute("data-dropin", ue), se.removeAttribute("data-sdk");
    const de = window._loadedStyles[ue];
    if (de) {
      const je = function(De, Ce) {
        const [Be, Ke] = De.split("-"), [Ze, at] = Ce.split("-"), We = [...Be.split("."), Ke], it = [...Ze.split("."), at], ct = parseInt(We[0], 10), dt = parseInt(it[0], 10);
        if (ct !== dt)
          return ct > dt ? De : Ce;
        const st = parseInt(We[1], 10), vt = parseInt(it[1], 10);
        if (st !== vt)
          return st > vt ? De : Ce;
        const ye = parseInt(We[2], 10), ge = parseInt(it[2], 10);
        if (ye !== ge)
          return ye > ge ? De : Ce;
        if (We[3] && it[3]) {
          const me = /(alpha|beta)(.*)/, he = We[3].match(me), Pe = it[3].match(me), Ee = he[1], X = Pe[1], re = parseInt(he[2], 10), ie = parseInt(Pe[2], 10);
          if (Ee === X)
            return re > ie ? De : Ce;
          if (Ee === "alpha" && X === "beta")
            return Ce;
          if (Ee === "beta" && X === "alpha")
            return De;
        }
        return We[3] ? Ce : De;
      }(be, de.sdk);
      if (!fe || fe && je === de.sdk) {
        const De = de.style.textContent;
        de.style.textContent = `${De}
/* --- MERGED --- */
${le}`;
      } else
        fe && je !== de.sdk && (de.style.textContent = `/* --- UPGRADED --- */
${le}`);
      return void se.remove();
    }
    se.textContent = le, window._loadedStyles[ue] = { sdk: be, core: fe, style: se };
    const we = document.querySelector("head"), { lastDropinStyleInjected: xe, lastSDKStyleInjected: Ie } = window._loadedStyles;
    fe ? (Ie ? we.insertBefore(se, Ie.nextSibling) : we.insertBefore(se, we.firstChild), window._loadedStyles.lastSDKStyleInjected = se) : (xe ? we.insertBefore(se, xe.nextSibling) : Ie ? we.insertBefore(se, Ie.nextSibling) : we.insertBefore(se, we.firstChild), window._loadedStyles.lastDropinStyleInjected = se);
  } };
  p.setAttributes = j(), p.insert = $().bind(null, "head"), p.domAPI = S(), p.insertStyleElement = k(), d()(m.c, p), m.c && m.c.locals && m.c.locals;
  var I = e(5092), M = e(4840), E = e(6660), z = e(2460), G = e(7120), J = { attributes: { "data-dropin": "storefront-checkout", "data-sdk": "0.22.0" }, styleTagTransform: function(le, se) {
    var Ae;
    window._loadedStyles = window._loadedStyles ?? {};
    const fe = (Ae = le == null ? void 0 : le.match(/^\.dropin-(\w+)/)) == null ? void 0 : Ae[1], be = se.getAttribute("data-sdk"), ue = fe ? `sdk/${fe}` : se.getAttribute("data-dropin");
    se.setAttribute("data-dropin", ue), se.removeAttribute("data-sdk");
    const de = window._loadedStyles[ue];
    if (de) {
      const je = function(De, Ce) {
        const [Be, Ke] = De.split("-"), [Ze, at] = Ce.split("-"), We = [...Be.split("."), Ke], it = [...Ze.split("."), at], ct = parseInt(We[0], 10), dt = parseInt(it[0], 10);
        if (ct !== dt)
          return ct > dt ? De : Ce;
        const st = parseInt(We[1], 10), vt = parseInt(it[1], 10);
        if (st !== vt)
          return st > vt ? De : Ce;
        const ye = parseInt(We[2], 10), ge = parseInt(it[2], 10);
        if (ye !== ge)
          return ye > ge ? De : Ce;
        if (We[3] && it[3]) {
          const me = /(alpha|beta)(.*)/, he = We[3].match(me), Pe = it[3].match(me), Ee = he[1], X = Pe[1], re = parseInt(he[2], 10), ie = parseInt(Pe[2], 10);
          if (Ee === X)
            return re > ie ? De : Ce;
          if (Ee === "alpha" && X === "beta")
            return Ce;
          if (Ee === "beta" && X === "alpha")
            return De;
        }
        return We[3] ? Ce : De;
      }(be, de.sdk);
      if (!fe || fe && je === de.sdk) {
        const De = de.style.textContent;
        de.style.textContent = `${De}
/* --- MERGED --- */
${le}`;
      } else
        fe && je !== de.sdk && (de.style.textContent = `/* --- UPGRADED --- */
${le}`);
      return void se.remove();
    }
    se.textContent = le, window._loadedStyles[ue] = { sdk: be, core: fe, style: se };
    const we = document.querySelector("head"), { lastDropinStyleInjected: xe, lastSDKStyleInjected: Ie } = window._loadedStyles;
    fe ? (Ie ? we.insertBefore(se, Ie.nextSibling) : we.insertBefore(se, we.firstChild), window._loadedStyles.lastSDKStyleInjected = se) : (xe ? we.insertBefore(se, xe.nextSibling) : Ie ? we.insertBefore(se, Ie.nextSibling) : we.insertBefore(se, we.firstChild), window._loadedStyles.lastDropinStyleInjected = se);
  } };
  J.setAttributes = j(), J.insert = $().bind(null, "head"), J.domAPI = S(), J.insertStyleElement = k(), d()(G.c, J), G.c && G.c.locals && G.c.locals;
  var Z = e(4424), Q = e(3720), q = e(4880), w = e(4072), b = e(8920), o = e(5172), v = e(8412);
  function C(le, se) {
    var fe = Object.keys(le);
    if (Object.getOwnPropertySymbols) {
      var be = Object.getOwnPropertySymbols(le);
      se && (be = be.filter(function(ue) {
        return Object.getOwnPropertyDescriptor(le, ue).enumerable;
      })), fe.push.apply(fe, be);
    }
    return fe;
  }
  function r(le) {
    for (var se = 1; se < arguments.length; se++) {
      var fe = arguments[se] != null ? arguments[se] : {};
      se % 2 ? C(Object(fe), !0).forEach(function(be) {
        t(le, be, fe[be]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(le, Object.getOwnPropertyDescriptors(fe)) : C(Object(fe)).forEach(function(be) {
        Object.defineProperty(le, be, Object.getOwnPropertyDescriptor(fe, be));
      });
    }
    return le;
  }
  function t(le, se, fe) {
    var be;
    return (se = typeof (be = function(ue, de) {
      if (typeof ue != "object" || !ue)
        return ue;
      var we = ue[Symbol.toPrimitive];
      if (we !== void 0) {
        var xe = we.call(ue, de || "default");
        if (typeof xe != "object")
          return xe;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (de === "string" ? String : Number)(ue);
    }(se, "string")) == "symbol" ? be : String(be)) in le ? Object.defineProperty(le, se, { value: fe, enumerable: !0, configurable: !0, writable: !0 }) : le[se] = fe, le;
  }
  var u = (le) => {
    var se, fe, be, { className: ue, item: de, taxIncluded: we = !1 } = le, xe = (0, z.cF)(r({ Sender: "Checkout.CartSummary.GiftCard.sender", Recipient: "Checkout.CartSummary.GiftCard.recipient", Message: "Checkout.CartSummary.GiftCard.message", Download: "Checkout.CartSummary.Downloadable.download", OutOfStockAlert: "Checkout.OutOfStock.alert" }, "links" in de && de.links ? { Files: (0, v.im)(z.a, { id: "Checkout.CartSummary.Downloadable.files", plural: de.links.length, fields: { count: de.links.length } }) } : {})), Ie = de.regularPrice, Ae = de.total;
    we && (Ie = de.priceInclTax, Ae = de.totalInclTax);
    var je = r(r(r(r(r(r(r(r({}, "customizableOptions" in de ? de.customizableOptions : {}), "configurableOptions" in de ? de.configurableOptions : {}), "links" in de && de.links ? { [xe.Files]: de.links.join(", ") } : {}), "senderName" in de && de.senderName ? { [xe.Sender]: de.senderName } : {}), "recipientName" in de && de.recipientName ? { [xe.Recipient]: de.recipientName } : {}), "senderEmail" in de && "senderName" in de && de.senderName && de.senderEmail ? { [xe.Sender]: "".concat(de.senderName, " (").concat(de.senderEmail, ")") } : {}), "recipientEmail" in de && "recipientName" in de && de.recipientName && de.recipientEmail ? { [xe.Recipient]: "".concat(de.recipientName, " (").concat(de.recipientEmail, ")") } : {}), "message" in de && de.message && de.message != "" ? { [xe.Message]: function(Be, Ke) {
      return Be.length > Ke ? "".concat(Be.slice(0, Ke), "...") : Be;
    }(de.message, 60) } : {}), De = de.stockStatus === o.s.OutOfStock ? (0, v.YH)("span", { "data-testid": "checkout-cart-item-alert", children: [(0, v.im)(Q.G, { source: Z.default, size: "16" }), xe.OutOfStockAlert] }) : void 0, Ce = !De && de.onlyXLeftInStock ? (0, v.YH)("span", { "data-testid": "checkout-cart-item-low-inventory", children: [(0, v.im)(Q.G, { source: Z.default, size: "16" }), (0, v.im)(z.a, { id: "Checkout.OutOfStock.lowInventory", plural: de.onlyXLeftInStock, fields: { count: de.onlyXLeftInStock } })] }) : void 0;
    return (0, v.im)("div", { className: (0, s.i)(["checkout-cart-summary-item", ue]), children: (0, v.im)(q.Y, { "data-testid": "cart-summary-item", taxIncluded: we, title: (0, v.im)("div", { "data-testid": "product-name", children: de.name }), sku: (0, v.im)("div", { children: de.sku }), quantity: de.quantity, image: (0, v.im)(w.W, { src: (se = (fe = de.image) === null || fe === void 0 ? void 0 : fe.src) !== null && se !== void 0 ? se : "", alt: (be = de.image) === null || be === void 0 ? void 0 : be.alt, loading: "lazy", width: "80", height: "80", params: { width: 80 } }), warning: Ce, alert: De, configurations: je, price: (0, v.im)(b.Y, { amount: de.regularPrice.value, currency: Ie.currency, weight: "normal" }), total: (0, v.YH)(v.ae, { children: [(0, v.im)(b.Y, { amount: de.regularPrice.value * de.quantity, currency: Ie.currency, variant: de.discounted ? "strikethrough" : "default" }), de.discounted && (0, v.im)(b.Y, { amount: Ae.value, currency: Ae.currency, sale: !0 })] }) }, de.uid) });
  }, h = e(2216), i = e(312), a = e(3388), g = () => (0, v.im)(E.M, { children: (0, v.YH)(a.W, { "data-testid": "cart-summary-skeleton", className: "checkout-cart-summary-skeleton", style: { gridTemplateColumns: "1fr" }, children: [(0, v.im)(a.K, { variant: "heading", fullWidth: !0, size: "medium" }), (0, v.im)(i.Q, {}), (0, v.im)(i.Q, {}), (0, v.im)(i.Q, {}), (0, v.im)(i.Q, {}), (0, v.im)(i.Q, {}), (0, v.im)(a.K, { size: "medium", fullWidth: !0 })] }) }), y = () => (0, v.im)(a.W, { "data-testid": "cart-summary-skeleton", className: "checkout-mobile-cart-summary-skeleton", style: { gridTemplateColumns: "1fr" }, children: (0, v.im)(a.K, { fullWidth: !0, size: "xlarge" }) }), B = e(9112), f = ["className"];
  function _(le, se) {
    var fe = Object.keys(le);
    if (Object.getOwnPropertySymbols) {
      var be = Object.getOwnPropertySymbols(le);
      se && (be = be.filter(function(ue) {
        return Object.getOwnPropertyDescriptor(le, ue).enumerable;
      })), fe.push.apply(fe, be);
    }
    return fe;
  }
  function D(le) {
    for (var se = 1; se < arguments.length; se++) {
      var fe = arguments[se] != null ? arguments[se] : {};
      se % 2 ? _(Object(fe), !0).forEach(function(be) {
        R(le, be, fe[be]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(le, Object.getOwnPropertyDescriptors(fe)) : _(Object(fe)).forEach(function(be) {
        Object.defineProperty(le, be, Object.getOwnPropertyDescriptor(fe, be));
      });
    }
    return le;
  }
  function R(le, se, fe) {
    var be;
    return (se = typeof (be = function(ue, de) {
      if (typeof ue != "object" || !ue)
        return ue;
      var we = ue[Symbol.toPrimitive];
      if (we !== void 0) {
        var xe = we.call(ue, de || "default");
        if (typeof xe != "object")
          return xe;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (de === "string" ? String : Number)(ue);
    }(se, "string")) == "symbol" ? be : String(be)) in le ? Object.defineProperty(le, se, { value: fe, enumerable: !0, configurable: !0, writable: !0 }) : le[se] = fe, le;
  }
  function Y(le, se) {
    if (le == null)
      return {};
    var fe, be, ue = function(we, xe) {
      if (we == null)
        return {};
      var Ie, Ae, je = {}, De = Object.keys(we);
      for (Ae = 0; Ae < De.length; Ae++)
        Ie = De[Ae], xe.indexOf(Ie) >= 0 || (je[Ie] = we[Ie]);
      return je;
    }(le, se);
    if (Object.getOwnPropertySymbols) {
      var de = Object.getOwnPropertySymbols(le);
      for (be = 0; be < de.length; be++)
        fe = de[be], se.indexOf(fe) >= 0 || Object.prototype.propertyIsEnumerable.call(le, fe) && (ue[fe] = le[fe]);
    }
    return ue;
  }
  var W = (le) => {
    var { type: se, onClick: fe, children: be } = le;
    return (0, v.YH)(v.ae, { children: [(0, v.im)(I.c, { className: "checkout-cart-summary__divider-bottom", variant: "primary" }), (0, v.im)("button", { "data-testid": "action-".concat(se), className: "checkout-cart-summary__action", onClick: fe, children: be })] });
  }, U = (le) => {
    var { title: se, isLoading: fe, totalQuantity: be, routeCart: ue, items: de, taxIncluded: we, action: xe } = le;
    return (0, v.im)(v.ae, { children: fe ? (0, v.im)(y, {}) : (0, v.im)(M.G, { actionIconPosition: "left", children: (0, v.YH)(M.O, { title: "".concat(se, " (").concat(be, ")"), secondaryText: (ue == null ? void 0 : ue()) && (0, v.im)("a", { href: ue == null ? void 0 : ue(), rel: "noreferrer", children: (0, v.im)(z.a, { id: "Checkout.CartSummary.editCart" }) }), children: [de == null ? void 0 : de.map((Ie) => (0, v.im)(u, { item: Ie, taxIncluded: we }, Ie == null ? void 0 : Ie.uid)), xe] }) }) });
  }, K = (le) => {
    var { title: se, isLoading: fe, totalQuantity: be, routeCart: ue, items: de, action: we, taxIncluded: xe } = le;
    return (0, v.im)(v.ae, { children: fe ? (0, v.im)(g, {}) : (0, v.YH)(E.M, { children: [(0, v.YH)("div", { className: "checkout-cart-summary__heading", children: [(0, v.YH)(h._, { level: 2, className: "checkout-cart-summary__title", children: [se, " (", be, ")"] }), (ue == null ? void 0 : ue()) && (0, v.im)("a", { className: "checkout-cart-summary__edit", href: ue == null ? void 0 : ue(), rel: "noreferrer", children: (0, v.im)(z.a, { id: "Checkout.CartSummary.editCart" }) })] }), (0, v.im)(I.c, { className: "checkout-cart-summary__divider-top", variant: "primary" }), (0, v.im)("div", { className: "checkout-cart-summary__items", children: de == null ? void 0 : de.map((Ie) => (0, v.im)(u, { item: Ie, taxIncluded: xe }, Ie == null ? void 0 : Ie.uid)) }), we] }) });
  }, H = (le) => {
    var { className: se } = le, fe = Y(le, f), be = (0, z.cF)("Checkout.CartSummary.title").title, ue = (0, B.y)();
    return (0, v.im)("div", { className: (0, s.i)(["checkout-cart-summary", se]), children: ue === "small" ? (0, v.im)(U, D({ title: be }, fe)) : (0, v.im)(K, D({ title: be }, fe)) });
  }, l = 5, c = e(2256), O = e(4723), N = e(5668), F = e(2796), V = ["routeCart"];
  function ee(le, se) {
    var fe = Object.keys(le);
    if (Object.getOwnPropertySymbols) {
      var be = Object.getOwnPropertySymbols(le);
      se && (be = be.filter(function(ue) {
        return Object.getOwnPropertyDescriptor(le, ue).enumerable;
      })), fe.push.apply(fe, be);
    }
    return fe;
  }
  function ne(le) {
    for (var se = 1; se < arguments.length; se++) {
      var fe = arguments[se] != null ? arguments[se] : {};
      se % 2 ? ee(Object(fe), !0).forEach(function(be) {
        oe(le, be, fe[be]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(le, Object.getOwnPropertyDescriptors(fe)) : ee(Object(fe)).forEach(function(be) {
        Object.defineProperty(le, be, Object.getOwnPropertyDescriptor(fe, be));
      });
    }
    return le;
  }
  function oe(le, se, fe) {
    var be;
    return (se = typeof (be = function(ue, de) {
      if (typeof ue != "object" || !ue)
        return ue;
      var we = ue[Symbol.toPrimitive];
      if (we !== void 0) {
        var xe = we.call(ue, de || "default");
        if (typeof xe != "object")
          return xe;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (de === "string" ? String : Number)(ue);
    }(se, "string")) == "symbol" ? be : String(be)) in le ? Object.defineProperty(le, se, { value: fe, enumerable: !0, configurable: !0, writable: !0 }) : le[se] = fe, le;
  }
  function pe(le, se) {
    if (le == null)
      return {};
    var fe, be, ue = function(we, xe) {
      if (we == null)
        return {};
      var Ie, Ae, je = {}, De = Object.keys(we);
      for (Ae = 0; Ae < De.length; Ae++)
        Ie = De[Ae], xe.indexOf(Ie) >= 0 || (je[Ie] = we[Ie]);
      return je;
    }(le, se);
    if (Object.getOwnPropertySymbols) {
      var de = Object.getOwnPropertySymbols(le);
      for (be = 0; be < de.length; be++)
        fe = de[be], se.indexOf(fe) >= 0 || Object.prototype.propertyIsEnumerable.call(le, fe) && (ue[fe] = le[fe]);
    }
    return ue;
  }
  var _e = { canDisplayMoreItems: !1, hasHiddenItems: !1, isLoading: !0, isTaxIncluded: !1, totalQuantity: 0, visibleItems: [] };
  function ae(le) {
    var { config: se } = (0, c.o3)(), fe = se === void 0, be = N.cartSignal.value.data;
    if (fe || be === void 0)
      return _e;
    var { cartSummaryMaxItems: ue, cartSummaryTotalDisplay: de, taxCartDisplay: we } = se, xe = de === O.E.Quantity, Ie = we.shoppingCartDisplayPrice === O.m.IncludingTax, { items: Ae, totalQty: je } = be, De = xe ? je : Ae.length, Ce = le ? ue : Math.min(ue, l), Be = Ae.length > Ce;
    return { canDisplayMoreItems: Be && !le && Ce != ue, hasHiddenItems: Be, isLoading: !1, isTaxIncluded: Ie, totalQuantity: De, visibleItems: Ae.slice(0, Ce) };
  }
  var Se = (le) => {
    var { routeCart: se } = le, fe = pe(le, V), [be, ue] = (0, F.oT)(!1), de = (0, z.cF)({ ViewAll: "Checkout.CartSummary.viewAll", ViewMore: "Checkout.CartSummary.viewMore" }), { canDisplayMoreItems: we, hasHiddenItems: xe, isLoading: Ie, isTaxIncluded: Ae, visibleItems: je, totalQuantity: De } = ae(be), Ce = (0, F.kZ)(() => {
      ue(!0);
    }, []), Be = (0, F.kZ)(() => {
      var Ze;
      se && (Ze = se(), window.location.href = Ze);
    }, [se]), Ke = (0, F.bB)(() => {
      if (xe)
        return we ? (0, v.im)(W, { type: "view-more", onClick: Ce, children: de.ViewMore }) : se ? (0, v.im)(W, { type: "view-all", onClick: Be, children: de.ViewAll }) : void 0;
    }, [xe, we, Ce, de.ViewMore, de.ViewAll, Be, se]);
    return (0, v.im)(H, ne(ne({}, fe), {}, { action: Ke, taxIncluded: Ae, isLoading: Ie, items: je, routeCart: se, totalQuantity: De }));
  };
}, 9112: (te, T, e) => {
  e.d(T, { y: () => n });
  var s = e(8596), n = () => {
    var d = () => window.innerWidth >= 1920 ? "xxlarge" : window.innerWidth >= 1366 ? "xlarge" : window.innerWidth >= 1024 ? "large" : window.innerWidth >= 768 ? "medium" : "small", [P, S] = (0, s.oT)(d());
    return (0, s.YB)(() => {
      var L, $ = () => {
        L && clearTimeout(L), L = setTimeout(() => S(d()), 50);
      };
      return window.addEventListener("resize", $), () => {
        window.removeEventListener("resize", $), L && clearTimeout(L);
      };
    }, []), P;
  };
}, 3536: (te, T, e) => {
  e.d(T, { c: () => S });
  var s = e(6008), n = e.n(s), d = e(2076), P = e.n(d)()(n());
  P.push([te.id, `.checkout-cart-summary .dropin-card__content{
  gap:var(--spacing-xsmall);
}

.checkout-cart-summary__heading{
  display:grid;
  grid-template-columns:1fr max-content;
  grid-auto-rows:max-content;
}

.checkout-cart-summary__title{
  color:var(--color-neutral-800);
  font:var(--type-headline-2-default-font);
  letter-spacing:var(--type-headline-2-default-letter-spacing);
  margin:0;
}

.checkout-cart-summary__edit{
  font:var(--type-body-2-strong-font);
  letter-spacing:var(--type-body-2-strong-letter-spacing);
  align-self:flex-end;
  justify-self:flex-end;
  margin:0;
  cursor:pointer;
}

.checkout-cart-summary__edit a{
  font:var(--type-body-2-strong-font);
  letter-spacing:var(--type-body-2-strong-letter-spacing);
}

.checkout-cart-summary .checkout-cart-summary__divider-top{
  margin:0 0 var(--spacing-medium) 0;
}

.checkout-cart-summary .checkout-cart-summary__divider-bottom{
  margin:var(--spacing-medium) 0 var(--spacing-small) 0;
}

.checkout-cart-summary__items{
  display:grid;
  gap:var(--spacing-medium);
}

.checkout-cart-summary__action{
  font:var(--type-body-2-strong-font);
  letter-spacing:var(--type-body-2-strong-letter-spacing);
  color:var(--color-brand-500);
  background:none;
  margin:0 auto;
  border:0;
  text-align:center;
  white-space:nowrap;
  text-decoration:none;
  cursor:pointer;
  width:auto;
}

.checkout-cart-summary__action:hover{
  text-decoration:underline;
  text-underline-offset:var(--spacing-xxsmall);
  background-color:transparent;
  color:var(--color-brand-700);
}

.dropin-accordion{
    background-color:var(--color-neutral-200);
}

.dropin-accordion .dropin-divider:first-child{
    margin-top:0;
}

.dropin-accordion .dropin-divider:last-child{
    margin-bottom:0;
}

.dropin-accordion-section{
    padding:0 var(--spacing-medium);
}
@media only screen and (min-width: 320px) and (max-width: 768px){
  .checkout-cart-summary .dropin-accordion-section__content-container{
    gap:0;
  }

  .checkout-cart-summary-item{
    margin-bottom:var(--spacing-medium);
  }

  .dropin-accordion-section__content-container .checkout-cart-summary-item:last-of-type{
    margin-bottom:0;
  }
}
`, ""]);
  const S = P;
}, 7120: (te, T, e) => {
  e.d(T, { c: () => S });
  var s = e(6008), n = e.n(s), d = e(2076), P = e.n(d)()(n());
  P.push([te.id, `.checkout-cart-summary-item .dropin-cart-item__title{
  font:var(--type-body-1-default-font);
  letter-spacing:var(--type-body-1-default-letter-spacing);
}

.checkout-cart-summary-item .dropin-cart-item__price{
  margin:var(--spacing-xxsmall) 0;
}

.checkout-cart-summary-item .dropin-price--sale{
  color:var(--color-alert-800);
}
.checkout-cart-summary-item .dropin-cart-item__warning{
  color:var(--color-alert-800);
}
.dropin-cart-item__total{
  align-items:flex-end;
}
`, ""]);
  const S = P;
} }, Ar = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  id: Er,
  ids: Dr,
  modules: Tr
}, Symbol.toStringTag, { value: "Module" })), Nr = 3100, Mr = [3100], Br = { 2567: (te, T, e) => {
  e.d(T, { a: () => $ });
  var s = e(3760), n = e(3112), d = `
  mutation setPaymentMethod($cartId: String!, $paymentMethod: String!) {
    setPaymentMethodOnCart(
      input: { cart_id: $cartId, payment_method: { code: $paymentMethod } }
    ) {
      cart {
        id
        ...CheckoutData
        ...CartSummaryItems
      }
    }
  }
  `.concat(n.e2, `
  `).concat(n.Qz, `
`), P = e(9120), S = e(6824);
  function L(A, j, x, k, m, p, I) {
    try {
      var M = A[p](I), E = M.value;
    } catch (z) {
      return void x(z);
    }
    M.done ? j(E) : Promise.resolve(E).then(k, m);
  }
  var $ = function() {
    var A, j = (A = function* (x) {
      var { cartId: k, paymentMethod: m } = x;
      if (!k)
        throw new s.Ij();
      if (!m)
        throw new s.GU();
      return yield (0, P.m)({ type: "mutation", query: d, options: { variables: { cartId: k, paymentMethod: m } }, path: "setPaymentMethodOnCart.cart", signalType: "cart", transformer: S.o });
    }, function() {
      var x = this, k = arguments;
      return new Promise(function(m, p) {
        var I = A.apply(x, k);
        function M(z) {
          L(I, m, p, M, E, "next", z);
        }
        function E(z) {
          L(I, m, p, M, E, "throw", z);
        }
        M(void 0);
      });
    });
    return function(x) {
      return j.apply(this, arguments);
    };
  }();
}, 3100: (te, T, e) => {
  e.d(T, { U: () => K });
  var s = e(2567), n = e(4944), d = e(5536), P = e.n(d), S = e(7008), L = e.n(S), $ = e(1496), A = e.n($), j = e(9356), x = e.n(j), k = e(9904), m = e.n(k), p = e(9396), I = { attributes: { "data-dropin": "storefront-checkout", "data-sdk": "0.22.0" }, styleTagTransform: function(H, l) {
    var oe;
    window._loadedStyles = window._loadedStyles ?? {};
    const c = (oe = H == null ? void 0 : H.match(/^\.dropin-(\w+)/)) == null ? void 0 : oe[1], O = l.getAttribute("data-sdk"), N = c ? `sdk/${c}` : l.getAttribute("data-dropin");
    l.setAttribute("data-dropin", N), l.removeAttribute("data-sdk");
    const F = window._loadedStyles[N];
    if (F) {
      const pe = function(_e, ae) {
        const [Se, le] = _e.split("-"), [se, fe] = ae.split("-"), be = [...Se.split("."), le], ue = [...se.split("."), fe], de = parseInt(be[0], 10), we = parseInt(ue[0], 10);
        if (de !== we)
          return de > we ? _e : ae;
        const xe = parseInt(be[1], 10), Ie = parseInt(ue[1], 10);
        if (xe !== Ie)
          return xe > Ie ? _e : ae;
        const Ae = parseInt(be[2], 10), je = parseInt(ue[2], 10);
        if (Ae !== je)
          return Ae > je ? _e : ae;
        if (be[3] && ue[3]) {
          const De = /(alpha|beta)(.*)/, Ce = be[3].match(De), Be = ue[3].match(De), Ke = Ce[1], Ze = Be[1], at = parseInt(Ce[2], 10), We = parseInt(Be[2], 10);
          if (Ke === Ze)
            return at > We ? _e : ae;
          if (Ke === "alpha" && Ze === "beta")
            return ae;
          if (Ke === "beta" && Ze === "alpha")
            return _e;
        }
        return be[3] ? ae : _e;
      }(O, F.sdk);
      if (!c || c && pe === F.sdk) {
        const _e = F.style.textContent;
        F.style.textContent = `${_e}
/* --- MERGED --- */
${H}`;
      } else
        c && pe !== F.sdk && (F.style.textContent = `/* --- UPGRADED --- */
${H}`);
      return void l.remove();
    }
    l.textContent = H, window._loadedStyles[N] = { sdk: O, core: c, style: l };
    const V = document.querySelector("head"), { lastDropinStyleInjected: ee, lastSDKStyleInjected: ne } = window._loadedStyles;
    c ? (ne ? V.insertBefore(l, ne.nextSibling) : V.insertBefore(l, V.firstChild), window._loadedStyles.lastSDKStyleInjected = l) : (ee ? V.insertBefore(l, ee.nextSibling) : ne ? V.insertBefore(l, ne.nextSibling) : V.insertBefore(l, V.firstChild), window._loadedStyles.lastDropinStyleInjected = l);
  } };
  I.setAttributes = x(), I.insert = A().bind(null, "head"), I.domAPI = L(), I.insertStyleElement = m(), P()(p.c, I), p.c && p.c.locals && p.c.locals;
  var M = e(5652), E = e(8412), z = ["label", "name", "value", "icon", "selected", "onChange", "className", "children", "radioButtonProps"];
  function G(H, l) {
    var c = Object.keys(H);
    if (Object.getOwnPropertySymbols) {
      var O = Object.getOwnPropertySymbols(H);
      l && (O = O.filter(function(N) {
        return Object.getOwnPropertyDescriptor(H, N).enumerable;
      })), c.push.apply(c, O);
    }
    return c;
  }
  function J(H) {
    for (var l = 1; l < arguments.length; l++) {
      var c = arguments[l] != null ? arguments[l] : {};
      l % 2 ? G(Object(c), !0).forEach(function(O) {
        Z(H, O, c[O]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(H, Object.getOwnPropertyDescriptors(c)) : G(Object(c)).forEach(function(O) {
        Object.defineProperty(H, O, Object.getOwnPropertyDescriptor(c, O));
      });
    }
    return H;
  }
  function Z(H, l, c) {
    var O;
    return (l = typeof (O = function(N, F) {
      if (typeof N != "object" || !N)
        return N;
      var V = N[Symbol.toPrimitive];
      if (V !== void 0) {
        var ee = V.call(N, F || "default");
        if (typeof ee != "object")
          return ee;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (F === "string" ? String : Number)(N);
    }(l, "string")) == "symbol" ? O : String(O)) in H ? Object.defineProperty(H, l, { value: c, enumerable: !0, configurable: !0, writable: !0 }) : H[l] = c, H;
  }
  function Q(H, l) {
    if (H == null)
      return {};
    var c, O, N = function(V, ee) {
      if (V == null)
        return {};
      var ne, oe, pe = {}, _e = Object.keys(V);
      for (oe = 0; oe < _e.length; oe++)
        ne = _e[oe], ee.indexOf(ne) >= 0 || (pe[ne] = V[ne]);
      return pe;
    }(H, l);
    if (Object.getOwnPropertySymbols) {
      var F = Object.getOwnPropertySymbols(H);
      for (O = 0; O < F.length; O++)
        c = F[O], l.indexOf(c) >= 0 || Object.prototype.propertyIsEnumerable.call(H, c) && (N[c] = H[c]);
    }
    return N;
  }
  var q = (H) => {
    var { label: l, name: c, value: O, icon: N, selected: F, onChange: V, className: ee, children: ne, radioButtonProps: oe } = H, pe = Q(H, z);
    return (0, E.im)("div", J(J({ className: (0, n.i)(["checkout-toggle-button", ee, ["checkout-toggle-button__selected", F]]) }, pe), {}, { children: (0, E.YH)("label", { className: "checkout-toggle-button__actionButton", children: [(0, E.im)(M.O, J(J({}, oe), {}, { label: "", name: c, value: O, checked: F, onChange: () => V(O), "aria-label": l, className: (0, n.i)([ee, "checkout-toggle-button__radioButton"]) })), (0, E.YH)("div", { className: "checkout-toggle-button__content", children: [N && (0, E.im)(N.type, J(J({}, N == null ? void 0 : N.props), {}, { className: "checkout-toggle-button__icon" })), l] })] }) }));
  }, w = e(2216), b = e(3388), o = () => (0, E.YH)(b.W, { "data-testid": "payment-methods-skeleton", children: [(0, E.im)(b.K, { variant: "heading", size: "medium" }), (0, E.im)(b.K, { variant: "empty", size: "medium" }), (0, E.im)(b.K, { size: "xlarge", fullWidth: !0 }), (0, E.im)(b.K, { size: "xlarge", fullWidth: !0 })] }), v = e(7720), C = { attributes: { "data-dropin": "storefront-checkout", "data-sdk": "0.22.0" }, styleTagTransform: function(H, l) {
    var oe;
    window._loadedStyles = window._loadedStyles ?? {};
    const c = (oe = H == null ? void 0 : H.match(/^\.dropin-(\w+)/)) == null ? void 0 : oe[1], O = l.getAttribute("data-sdk"), N = c ? `sdk/${c}` : l.getAttribute("data-dropin");
    l.setAttribute("data-dropin", N), l.removeAttribute("data-sdk");
    const F = window._loadedStyles[N];
    if (F) {
      const pe = function(_e, ae) {
        const [Se, le] = _e.split("-"), [se, fe] = ae.split("-"), be = [...Se.split("."), le], ue = [...se.split("."), fe], de = parseInt(be[0], 10), we = parseInt(ue[0], 10);
        if (de !== we)
          return de > we ? _e : ae;
        const xe = parseInt(be[1], 10), Ie = parseInt(ue[1], 10);
        if (xe !== Ie)
          return xe > Ie ? _e : ae;
        const Ae = parseInt(be[2], 10), je = parseInt(ue[2], 10);
        if (Ae !== je)
          return Ae > je ? _e : ae;
        if (be[3] && ue[3]) {
          const De = /(alpha|beta)(.*)/, Ce = be[3].match(De), Be = ue[3].match(De), Ke = Ce[1], Ze = Be[1], at = parseInt(Ce[2], 10), We = parseInt(Be[2], 10);
          if (Ke === Ze)
            return at > We ? _e : ae;
          if (Ke === "alpha" && Ze === "beta")
            return ae;
          if (Ke === "beta" && Ze === "alpha")
            return _e;
        }
        return be[3] ? ae : _e;
      }(O, F.sdk);
      if (!c || c && pe === F.sdk) {
        const _e = F.style.textContent;
        F.style.textContent = `${_e}
/* --- MERGED --- */
${H}`;
      } else
        c && pe !== F.sdk && (F.style.textContent = `/* --- UPGRADED --- */
${H}`);
      return void l.remove();
    }
    l.textContent = H, window._loadedStyles[N] = { sdk: O, core: c, style: l };
    const V = document.querySelector("head"), { lastDropinStyleInjected: ee, lastSDKStyleInjected: ne } = window._loadedStyles;
    c ? (ne ? V.insertBefore(l, ne.nextSibling) : V.insertBefore(l, V.firstChild), window._loadedStyles.lastSDKStyleInjected = l) : (ee ? V.insertBefore(l, ee.nextSibling) : ne ? V.insertBefore(l, ne.nextSibling) : V.insertBefore(l, V.firstChild), window._loadedStyles.lastDropinStyleInjected = l);
  } };
  C.setAttributes = x(), C.insert = A().bind(null, "head"), C.domAPI = L(), C.insertStyleElement = m(), P()(v.c, C), v.c && v.c.locals && v.c.locals;
  var r = e(6336), t = e(3720), u = e(8424), h = e(2460), i = e(8220), a = (H) => {
    var { code: l, isLoading: c, isSelected: O, onChange: N, title: F } = H;
    return (0, E.im)(q, { className: "checkout-payment-methods__method", label: F, name: "payment-method", value: l, selected: O, onChange: N, radioButtonProps: { "aria-busy": c } });
  }, g = (H) => {
    var { className: l, paymentMethodContent: c, isLoading: O, onChange: N = () => {
    }, options: F, selection: V } = H, ee = (0, h.cF)({ Title: "Checkout.PaymentMethods.title", EmptyState: "Checkout.PaymentMethods.emptyState" });
    return F === void 0 ? (0, E.im)(o, {}) : (0, E.YH)("div", { className: (0, n.i)(["checkout-payment-methods", l]), children: [(0, E.im)(w._, { level: 2, className: "checkout-payment-methods__title", children: ee.Title }), !O && F.length === 0 && (0, E.im)(r.q, { icon: (0, E.im)(t.G, { source: i.default }), message: (0, E.im)("p", { children: ee.EmptyState }) }), (0, E.YH)("div", { className: (0, n.i)(["checkout-payment-methods__wrapper"]), children: [O && (0, E.im)(u.y, { className: "checkout-payment-methods__spinner" }), (0, E.im)("div", { className: (0, n.i)(["checkout-payment-methods__methods", ["checkout-payment-methods--loading", O], ["checkout-payment-methods--full-width", F.length % 2 != 0]]), children: F == null ? void 0 : F.map((ne) => (0, E.im)(a, { code: ne.code, onChange: N, isSelected: ne.code === V, title: ne.title }, ne.code)) }), c && (0, E.im)("div", { className: "checkout-payment-methods__content", children: c })] })] });
  }, y = { free: { render: (H) => {
    var l = document.createElement("div");
    l.innerText = "", H.replaceHTML(l);
  } }, checkmo: { render: (H) => {
    var l = document.createElement("div");
    l.innerText = "", H.replaceHTML(l);
  } } }, B = e(5668), f = e(6044), _ = e(2796);
  function D(H, l) {
    var c = Object.keys(H);
    if (Object.getOwnPropertySymbols) {
      var O = Object.getOwnPropertySymbols(H);
      l && (O = O.filter(function(N) {
        return Object.getOwnPropertyDescriptor(H, N).enumerable;
      })), c.push.apply(c, O);
    }
    return c;
  }
  function R(H) {
    for (var l = 1; l < arguments.length; l++) {
      var c = arguments[l] != null ? arguments[l] : {};
      l % 2 ? D(Object(c), !0).forEach(function(O) {
        Y(H, O, c[O]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(H, Object.getOwnPropertyDescriptors(c)) : D(Object(c)).forEach(function(O) {
        Object.defineProperty(H, O, Object.getOwnPropertyDescriptor(c, O));
      });
    }
    return H;
  }
  function Y(H, l, c) {
    var O;
    return (l = typeof (O = function(N, F) {
      if (typeof N != "object" || !N)
        return N;
      var V = N[Symbol.toPrimitive];
      if (V !== void 0) {
        var ee = V.call(N, F || "default");
        if (typeof ee != "object")
          return ee;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (F === "string" ? String : Number)(N);
    }(l, "string")) == "symbol" ? O : String(O)) in H ? Object.defineProperty(H, l, { value: c, enumerable: !0, configurable: !0, writable: !0 }) : H[l] = c, H;
  }
  function W(H, l, c, O, N, F, V) {
    try {
      var ee = H[F](V), ne = ee.value;
    } catch (oe) {
      return void c(oe);
    }
    ee.done ? l(ne) : Promise.resolve(ne).then(O, N);
  }
  function U(H) {
    return function() {
      var l = this, c = arguments;
      return new Promise(function(O, N) {
        var F = H.apply(l, c);
        function V(ne) {
          W(F, O, N, V, ee, "next", ne);
        }
        function ee(ne) {
          W(F, O, N, V, ee, "throw", ne);
        }
        V(void 0);
      });
    };
  }
  var K = (H) => {
    var { onPlaceOrder: l, handleServerError: c, paymentMethodsSlot: O, isShippingInfoRequired: N = !0 } = H, { availablePaymentMethods: F, selectedPaymentMethod: V, onPaymentMethodChange: ee, paymentMethodContent: ne, mainSlotContent: oe, isDefaultContentUsed: pe } = function(_e) {
      var ae, Se, { onPlaceOrder: le, handleServerError: se, paymentMethodsSlot: fe, isShippingInfoRequired: be } = _e, ue = (0, _.yK)(), [de, we] = (0, _.oT)(), [xe, Ie] = (0, _.oT)(), [Ae, je] = (0, _.oT)(y), [De, Ce] = (0, _.oT)(!0), { data: Be } = B.cartSignal.value, Ke = (ae = Be == null ? void 0 : Be.id) !== null && ae !== void 0 ? ae : "", Ze = !!Be, at = !(Be == null || (Se = Be.shippingAddresses) === null || Se === void 0 || !Se[0]), We = Be == null ? void 0 : Be.availablePaymentMethods, it = Be == null ? void 0 : Be.selectedPaymentMethod, ct = (0, _.kZ)(function() {
        var me = U(function* (he) {
          try {
            if (we(he), !at && be)
              return;
            var Pe = he;
            if (Pe === ue.current)
              return;
            ue.current = Pe, yield (0, s.a)({ cartId: Ke, paymentMethod: he });
          } catch (Ee) {
            console.error("setting payment method failed:", Ee);
          }
        });
        return function(he) {
          return me.apply(this, arguments);
        };
      }(), [Ke, at, be]);
      (0, _.YB)(() => {
        Ze && (it != null && it.code ? We != null && We.some((me) => me.code === it.code) ? we(it.code) : We != null && We.length ? ct(We[0].code) : we(void 0) : We[0] && ct(xe || We[0].code));
      }, [We, Ze, it, ct, xe]);
      var dt = function() {
        var me = U(function* (he) {
          yield ct(he), it != null && it.code || Ie(he);
        });
        return function(he) {
          return me.apply(this, arguments);
        };
      }(), st = (0, _.kZ)((me, he) => {
        me ? he ? je((Pe) => R(R({}, Pe), {}, { [me]: he })) : console.warn("Payment method handler is ignored because it is empty") : console.warn("Payment method handler is ignored because it has no code");
      }, []), vt = fe ? (0, E.im)(f.k, { name: "PaymentMethods", slot: fe, context: { addPaymentMethodHandler: st, replaceHTML(me) {
        this.replaceWith(me), Ce(!1);
      } } }) : null, ye = de ? Ae[de] : null, ge = ye ? (0, E.im)(f.k, { name: "PaymentMethodContent", slot: ye.render, context: { cartId: Ke, onPlaceOrder: le, handleServerError: se, replaceHTML(me) {
        this.replaceWith(me);
      } } }, ye) : void 0;
      return (0, _.YB)(() => {
        De || Ae == y || console.warn("Payment method handlers you have added are ignored because the default content has been replaced");
      }, [De, Ae]), { availablePaymentMethods: We, selectedPaymentMethod: de, onPaymentMethodChange: dt, paymentMethodContent: ge, mainSlotContent: vt, isDefaultContentUsed: De };
    }({ onPlaceOrder: l, handleServerError: c, paymentMethodsSlot: O, isShippingInfoRequired: N });
    return (0, E.YH)(E.ae, { children: [oe && (0, E.im)(oe.type, R({ ref: oe.ref }, oe.props)), pe && (0, E.im)(g, { options: F, selection: V, onChange: ee, paymentMethodContent: ne, isLoading: B.cartSignal.value.pending })] });
  };
}, 7720: (te, T, e) => {
  e.d(T, { c: () => S });
  var s = e(6008), n = e.n(s), d = e(2076), P = e.n(d)()(n());
  P.push([te.id, `.checkout-payment-methods{
  position:relative;
  display:block;
}

.checkout-payment-methods__title{
  font:var(--type-headline-2-default-font);
  letter-spacing:var(--type-headline-2-default-letter-spacing);
  margin:0 0 var(--spacing-medium) 0;
}

.checkout-payment-methods__wrapper{
  position:relative;
  display:grid;
}

.checkout-payment-methods__methods{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:var(--spacing-medium);
}

.checkout-payment-methods__content{
  margin-top:var(--spacing-medium);
}

.checkout-payment-methods--full-width{
  grid-template-columns:1fr;
}
.checkout-payment-methods--loading{
  opacity:0.4;
  pointer-events:none;
}

.checkout-payment-methods__spinner{
  margin:0 auto;
  position:absolute;
  z-index:999;
  left:0;
  right:0;
  top:calc(50% - (var(--size) / 2));
  bottom:0;
}
@media only screen and (min-width: 320px) and (max-width: 768px){
  .checkout-payment-methods__methods{
    grid-template-columns:1fr;
  }
}
`, ""]);
  const S = P;
}, 9396: (te, T, e) => {
  e.d(T, { c: () => S });
  var s = e(6008), n = e.n(s), d = e(2076), P = e.n(d)()(n());
  P.push([te.id, `.checkout-toggle-button{
    display:block;
    position:relative;
    width:100%;
}
.checkout-toggle-button__actionButton{
    cursor:pointer;
    background-color:var(--color-neutral-200);
    border:var(--shape-border-width-1) solid var(--color-neutral-400);
    border-radius:var(--shape-border-radius-1);
    font:var(--type-body-2-strong-font);
    letter-spacing:var(--type-body-2-strong-letter-spacing);
    padding:var(--spacing-medium);
    align-items:center;
    display:grid;
}

.checkout-toggle-button__selected .checkout-toggle-button__actionButton{
    background-color:var(--color-neutral-50);
    border:var(--shape-border-width-1) solid var(--color-neutral-800);
}

.checkout-toggle-button:has(input:focus-visible){
    outline:0 none;
    box-shadow:0 0 0 var(--shape-icon-stroke-4) var(--color-neutral-400);
    -webkit-box-shadow:0 0 0 var(--shape-icon-stroke-4) var(--color-neutral-400);
    -moz-box-shadow:0 0 0 var(--shape-icon-stroke-4) var(--color-neutral-400);
    border-radius:var(--shape-border-radius-1);
}
.checkout-toggle-button__radioButton.dropin-radio-button{
    cursor:pointer;
    position:absolute;
}

.checkout-toggle-button__radioButton .dropin-radio-button__label:before{
    cursor:pointer;
    margin-right:0;
}
.checkout-toggle-button__radioButton .dropin-radio-button__input:focus-visible + .dropin-radio-button__label:before{
    box-shadow:0 0 0 var(--shape-border-width-1) var(--color-neutral-600);
}
.checkout-toggle-button__content{
    display:flex;
    align-items:center;
    justify-content:center;
    margin-left:var(--spacing-big);
}
.checkout-toggle-button__icon{
    height:24px;
    margin-right:var(--spacing-xsmall);
}
`, ""]);
  const S = P;
} }, $r = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  id: Nr,
  ids: Mr,
  modules: Br
}, Symbol.toStringTag, { value: "Module" })), qr = 6140, Fr = [6140], Lr = { 6140: (te, T, e) => {
  e.d(T, { W: () => R, w: () => D });
  var s = e(3388), n = e(8412), d = () => (0, n.YH)(s.W, { "data-testid": "order-summary-skeleton", className: "order-summary__skeleton", children: [(0, n.im)(s.K, { variant: "heading", size: "medium" }), (0, n.im)(s.K, { variant: "empty", size: "medium" }), (0, n.im)(s.K, { size: "large", fullWidth: !0, lines: 3 })] }), P = e(4944), S = e(5536), L = e.n(S), $ = e(7008), A = e.n($), j = e(1496), x = e.n(j), k = e(9356), m = e.n(k), p = e(9904), I = e.n(p), M = e(7024), E = { attributes: { "data-dropin": "storefront-checkout", "data-sdk": "0.22.0" }, styleTagTransform: function(Y, W) {
    var F;
    window._loadedStyles = window._loadedStyles ?? {};
    const U = (F = Y == null ? void 0 : Y.match(/^\.dropin-(\w+)/)) == null ? void 0 : F[1], K = W.getAttribute("data-sdk"), H = U ? `sdk/${U}` : W.getAttribute("data-dropin");
    W.setAttribute("data-dropin", H), W.removeAttribute("data-sdk");
    const l = window._loadedStyles[H];
    if (l) {
      const V = function(ee, ne) {
        const [oe, pe] = ee.split("-"), [_e, ae] = ne.split("-"), Se = [...oe.split("."), pe], le = [..._e.split("."), ae], se = parseInt(Se[0], 10), fe = parseInt(le[0], 10);
        if (se !== fe)
          return se > fe ? ee : ne;
        const be = parseInt(Se[1], 10), ue = parseInt(le[1], 10);
        if (be !== ue)
          return be > ue ? ee : ne;
        const de = parseInt(Se[2], 10), we = parseInt(le[2], 10);
        if (de !== we)
          return de > we ? ee : ne;
        if (Se[3] && le[3]) {
          const xe = /(alpha|beta)(.*)/, Ie = Se[3].match(xe), Ae = le[3].match(xe), je = Ie[1], De = Ae[1], Ce = parseInt(Ie[2], 10), Be = parseInt(Ae[2], 10);
          if (je === De)
            return Ce > Be ? ee : ne;
          if (je === "alpha" && De === "beta")
            return ne;
          if (je === "beta" && De === "alpha")
            return ee;
        }
        return Se[3] ? ne : ee;
      }(K, l.sdk);
      if (!U || U && V === l.sdk) {
        const ee = l.style.textContent;
        l.style.textContent = `${ee}
/* --- MERGED --- */
${Y}`;
      } else
        U && V !== l.sdk && (l.style.textContent = `/* --- UPGRADED --- */
${Y}`);
      return void W.remove();
    }
    W.textContent = Y, window._loadedStyles[H] = { sdk: K, core: U, style: W };
    const c = document.querySelector("head"), { lastDropinStyleInjected: O, lastSDKStyleInjected: N } = window._loadedStyles;
    U ? (N ? c.insertBefore(W, N.nextSibling) : c.insertBefore(W, c.firstChild), window._loadedStyles.lastSDKStyleInjected = W) : (O ? c.insertBefore(W, O.nextSibling) : N ? c.insertBefore(W, N.nextSibling) : c.insertBefore(W, c.firstChild), window._loadedStyles.lastDropinStyleInjected = W);
  } };
  E.setAttributes = m(), E.insert = x().bind(null, "head"), E.domAPI = A(), E.insertStyleElement = I(), L()(M.c, E), M.c && M.c.locals && M.c.locals;
  var z = e(2216), G = e(2460), J = e(6660), Z = e(5092), Q = e(8424), q = e(8920), w = ["className", "summary", "isLoading"];
  function b(Y, W) {
    var U = Object.keys(Y);
    if (Object.getOwnPropertySymbols) {
      var K = Object.getOwnPropertySymbols(Y);
      W && (K = K.filter(function(H) {
        return Object.getOwnPropertyDescriptor(Y, H).enumerable;
      })), U.push.apply(U, K);
    }
    return U;
  }
  function o(Y) {
    for (var W = 1; W < arguments.length; W++) {
      var U = arguments[W] != null ? arguments[W] : {};
      W % 2 ? b(Object(U), !0).forEach(function(K) {
        v(Y, K, U[K]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(Y, Object.getOwnPropertyDescriptors(U)) : b(Object(U)).forEach(function(K) {
        Object.defineProperty(Y, K, Object.getOwnPropertyDescriptor(U, K));
      });
    }
    return Y;
  }
  function v(Y, W, U) {
    var K;
    return (W = typeof (K = function(H, l) {
      if (typeof H != "object" || !H)
        return H;
      var c = H[Symbol.toPrimitive];
      if (c !== void 0) {
        var O = c.call(H, l || "default");
        if (typeof O != "object")
          return O;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (l === "string" ? String : Number)(H);
    }(W, "string")) == "symbol" ? K : String(K)) in Y ? Object.defineProperty(Y, W, { value: U, enumerable: !0, configurable: !0, writable: !0 }) : Y[W] = U, Y;
  }
  function C(Y, W) {
    if (Y == null)
      return {};
    var U, K, H = function(c, O) {
      if (c == null)
        return {};
      var N, F, V = {}, ee = Object.keys(c);
      for (F = 0; F < ee.length; F++)
        N = ee[F], O.indexOf(N) >= 0 || (V[N] = c[N]);
      return V;
    }(Y, W);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(Y);
      for (K = 0; K < l.length; K++)
        U = l[K], W.indexOf(U) >= 0 || Object.prototype.propertyIsEnumerable.call(Y, U) && (H[U] = Y[U]);
    }
    return H;
  }
  var r = (Y) => {
    var { className: W, summary: U, isLoading: K = !1 } = Y, H = C(Y, w), { total: l, subtotal: c, shipping: O, tax: N } = U;
    return (0, n.YH)(J.M, o(o({}, H), {}, { className: (0, P.i)(["checkout-order-summary", ["checkout-order-summary--loading", K], W]), children: [(0, n.im)(z._, { level: 2, className: "checkout-order-summary__title", children: (0, n.im)(G.a, { id: "Checkout.OrderSummary.title" }) }), (0, n.im)(Z.c, { variant: "primary" }), K && (0, n.im)(Q.y, { className: "checkout-order-summary__spinner" }), (0, n.YH)("div", { "data-testid": "order-summary-subtotal", className: "checkout-order-summary__row", children: [(0, n.im)("p", { children: (0, n.im)(G.a, { id: "Checkout.OrderSummary.subtotal" }) }), (0, n.im)(q.Y, { amount: c.amount, currency: c.currency, className: (0, P.i)(["checkout-order-summary__price", W]) })] }), c.isTaxIncl && (0, n.im)("div", { "data-testid": "order-summary-subtotal-incl-tax", className: "checkout-order-summary__row checkout-order-summary__row--muted", children: (0, n.im)("p", { children: (0, n.im)(G.a, { id: "Checkout.OrderSummary.includingTaxes" }) }) }), O != null && (0, n.YH)("div", { "data-testid": "order-summary-shipping", className: "checkout-order-summary__row", children: [(0, n.im)("p", { "data-testid": "order-summary-shipping-label", children: O.isEstimated ? (0, n.im)(G.a, { id: "Checkout.OrderSummary.estimatedShipping" }) : (0, n.im)(G.a, { id: "Checkout.OrderSummary.shipping" }) }), O.amount === 0 ? (0, n.im)("p", { "data-testid": "estimated-shipping", className: "checkout-order-summary__price", children: (0, n.im)(G.a, { id: "Checkout.OrderSummary.freeShipping" }) }) : (0, n.im)(q.Y, { "data-testid": "estimated-shipping", amount: O.amount, currency: O.currency, className: (0, P.i)(["checkout-order-summary__price", W]) })] }), N != null && !N.breakdown && (0, n.YH)("div", { "data-testid": "order-summary-tax", className: "checkout-order-summary__row", children: [(0, n.im)("p", { children: (0, n.im)(G.a, { id: "Checkout.OrderSummary.tax" }) }), (0, n.im)(q.Y, { amount: N.amount, currency: N.currency, className: (0, P.i)(["checkout-order-summary__price", W]) })] }), N != null && N.breakdown && (0, n.YH)(n.ae, { children: [(0, n.im)(Z.c, { variant: "secondary" }), (0, n.im)("div", { className: "checkout-order-summary__row checkout-order-summary__row--margin-bottom", children: (0, n.im)("p", { children: (0, n.im)(G.a, { id: "Checkout.OrderSummary.taxBreakdown" }) }) }), N.breakdown.map((F) => (0, n.YH)("div", { "data-testid": "order-summary-tax-breakdown", className: "checkout-order-summary__row checkout-order-summary__row--muted", children: [(0, n.im)("p", { children: F.label }), (0, n.im)(q.Y, { amount: F.amount.value, currency: F.amount.currency, className: (0, P.i)(["checkout-order-summary__price", W]) })] }, F.label)), (0, n.YH)("div", { "data-testid": "order-summary-tax-breakdown-total", className: "checkout-order-summary__row checkout-order-summary__row--strong checkout-order-summary__row--margin-top", children: [(0, n.im)("p", { children: (0, n.im)(G.a, { id: "Checkout.OrderSummary.taxTotal" }) }), (0, n.im)(q.Y, { amount: N.amount, currency: N.currency, className: (0, P.i)(["checkout-order-summary__price", W]) })] }), (0, n.im)(Z.c, { variant: "secondary" })] }), (0, n.YH)("div", { "data-testid": "order-summary-total-incl-tax", className: "checkout-order-summary__row checkout-order-summary__row--emphasized", children: [(0, n.im)("p", { children: (0, n.im)(G.a, { id: "Checkout.OrderSummary.total" }) }), (0, n.im)(q.Y, { amount: l.inclTax.amount, currency: l.inclTax.currency, className: (0, P.i)(["checkout-order-summary__price", W]) })] }), l.exclTax != null && (0, n.YH)("div", { "data-testid": "order-summary-total-excl-tax", className: "checkout-order-summary__row checkout-order-summary__row--muted", children: [(0, n.im)("p", { children: (0, n.im)(G.a, { id: "Checkout.OrderSummary.totalExclTax" }) }), (0, n.im)(q.Y, { amount: l.exclTax.amount, currency: l.exclTax.currency, className: (0, P.i)(["checkout-order-summary__price", W]) })] })] }));
  }, t = e(2256), u = e(5668), h = e(7304), i = 0;
  function a(Y, W) {
    var U = Object.keys(Y);
    if (Object.getOwnPropertySymbols) {
      var K = Object.getOwnPropertySymbols(Y);
      W && (K = K.filter(function(H) {
        return Object.getOwnPropertyDescriptor(Y, H).enumerable;
      })), U.push.apply(U, K);
    }
    return U;
  }
  function g(Y) {
    for (var W = 1; W < arguments.length; W++) {
      var U = arguments[W] != null ? arguments[W] : {};
      W % 2 ? a(Object(U), !0).forEach(function(K) {
        y(Y, K, U[K]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(Y, Object.getOwnPropertyDescriptors(U)) : a(Object(U)).forEach(function(K) {
        Object.defineProperty(Y, K, Object.getOwnPropertyDescriptor(U, K));
      });
    }
    return Y;
  }
  function y(Y, W, U) {
    var K;
    return (W = typeof (K = function(H, l) {
      if (typeof H != "object" || !H)
        return H;
      var c = H[Symbol.toPrimitive];
      if (c !== void 0) {
        var O = c.call(H, l || "default");
        if (typeof O != "object")
          return O;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (l === "string" ? String : Number)(H);
    }(W, "string")) == "symbol" ? K : String(K)) in Y ? Object.defineProperty(Y, W, { value: U, enumerable: !0, configurable: !0, writable: !0 }) : Y[W] = U, Y;
  }
  function B() {
    return B = Object.assign ? Object.assign.bind() : function(Y) {
      for (var W = 1; W < arguments.length; W++) {
        var U = arguments[W];
        for (var K in U)
          Object.prototype.hasOwnProperty.call(U, K) && (Y[K] = U[K]);
      }
      return Y;
    }, B.apply(this, arguments);
  }
  var f = 2, _ = { isLoading: !0 };
  function D() {
    var { config: Y } = (0, t.o3)(), W = Y === void 0, U = u.cartSignal.value.data;
    if (W || U === void 0)
      return _;
    var K = Y.taxCartDisplay, H = K.shoppingCartDisplaySubtotal === f, l = U == null ? void 0 : U.shippingAddresses, c = !(l == null || !l.length), O = U == null ? void 0 : U.prices, N = O == null ? void 0 : O.grand_total, F = !!N, V = H ? O == null ? void 0 : O.subtotal_including_tax : O == null ? void 0 : O.subtotal_excluding_tax, ee = (O == null ? void 0 : O.applied_taxes) || [], ne = !!ee.length;
    if (!F)
      return { isLoading: !1 };
    var oe = { total: { inclTax: { amount: N.value, currency: N.currency } }, subtotal: { amount: V.value, currency: V.currency, isTaxIncl: H } };
    if (ne) {
      var pe = ee.reduce((se, fe) => se + fe.amount.value, i), _e = ee[0];
      oe.tax = { amount: pe, currency: _e.amount.currency }, K.shoppingCartDisplayFullSummary && (oe.tax.breakdown = ee);
    }
    if (!ne && K.shoppingCartDisplayZeroTax && (oe.tax = { amount: i, currency: oe.total.inclTax.currency }), K.shoppingCartDisplayGrandTotal) {
      var ae = oe.tax ? oe.total.inclTax.amount - oe.tax.amount : oe.total.inclTax.amount;
      oe.total.exclTax = { amount: ae, currency: oe.total.inclTax.currency };
    }
    if (c) {
      var Se = l[0], le = Se == null ? void 0 : Se.selectedShippingMethod;
      return le ? (oe.shipping = { amount: le == null ? void 0 : le.amount.value, currency: le == null ? void 0 : le.amount.currency, isEstimated: !1 }, { isLoading: !1, summary: oe }) : { isLoading: !1, summary: oe };
    }
    return h.g.value ? (oe.shipping = { amount: h.g.value.amount.value, currency: h.g.value.amount.currency, isEstimated: !0 }, oe.total.inclTax.amount += oe.shipping.amount, oe.total.exclTax && (oe.total.exclTax.amount += oe.shipping.amount), { isLoading: !1, summary: oe }) : { isLoading: !1, summary: oe };
  }
  var R = (Y) => {
    var W = B({}, (function(H) {
      if (H == null)
        throw new TypeError("Cannot destructure " + H);
    }(Y), Y)), { isLoading: U, summary: K } = D();
    return (0, n.YH)("div", g(g({}, W), {}, { children: [!K && (0, n.im)(d, {}), K && (0, n.im)(r, { isLoading: U, summary: K })] }));
  };
}, 7304: (te, T, e) => {
  e.d(T, { g: () => s });
  var s = (0, e(1520).OC)(void 0);
}, 7024: (te, T, e) => {
  e.d(T, { c: () => S });
  var s = e(6008), n = e.n(s), d = e(2076), P = e.n(d)()(n());
  P.push([te.id, `.checkout-order-summary .dropin-card__content{
  gap:var(--spacing-xsmall);
}

.checkout-order-summary__title{
  color:var(--color-neutral-800);
  font:var(--type-headline-2-default-font);
  letter-spacing:var(--type-headline-2-default-letter-spacing);
  margin:0;
}

.checkout-order-summary .dropin-divider--primary{
  margin:0 0 var(--spacing-medium) 0 !important;
}

.checkout-order-summary .dropin-divider--secondary{
  margin:var(--spacing-xsmall) 0 var(--spacing-xsmall) 0 !important;
}

.checkout-order-summary__breakdown{
  margin:var(--spacing-big) 0 var(--spacing-medium) 0;
}

.checkout-order-summary__breakdown .dropin-divider:last-child{
  margin-bottom:0;
}

.checkout-order-summary__row{
  display:flex;
  justify-content:space-between;
  color:var(--color-neutral-800);
  font:var(--type-body-1-default-font);
  letter-spacing:var(--type-body-1-default-letter-spacing);
}

.checkout-order-summary__row--margin-top{
  margin-top:var(--spacing-xsmall);
}

.checkout-order-summary__row--margin-bottom{
  margin-bottom:var(--spacing-xsmall);
}

.checkout-order-summary__row .checkout-order-summary__price{
  color:var(--color-neutral-800);
  font:var(--type-body-1-default-font);
  letter-spacing:var(--type-body-1-default-letter-spacing);
}

.checkout-order-summary__row p{
  margin:0;
}

.checkout-order-summary__row--strong{
  font:var(--type-body-1-strong-font);
  letter-spacing:var(--type-body-1-strong-letter-spacing);
}

.checkout-order-summary__row--strong .checkout-order-summary__price{
  color:var(--color-neutral-800);
  font:var(--type-body-1-strong-font);
  letter-spacing:var(--type-body-1-strong-letter-spacing);
}

.checkout-order-summary__row--emphasized{
  font:var(--type-body-1-emphasized-font);
  letter-spacing:var(--type-body-1-emphasized-letter-spacing);
  margin-top:var(--spacing-small);
}

.checkout-order-summary__row--emphasized .checkout-order-summary__price{
  color:var(--color-neutral-800);
  font:var(--type-body-1-emphasized-font);
  letter-spacing:var(--type-body-1-emphasized-letter-spacing);
}

.checkout-order-summary__row--muted{
  color:var(--color-neutral-700);
  font:var(--type-body-2-default-font);
  letter-spacing:var(--type-body-2-default-letter-spacing);
  margin-top:calc(-1 * var(--spacing-xxsmall));
}

.checkout-order-summary__row--muted .checkout-order-summary__price{
  color:var(--color-neutral-700);
  font:var(--type-body-2-default-font);
  letter-spacing:var(--type-body-2-default-letter-spacing);
}

.checkout-order-summary--loading .checkout-order-summary__row{
  opacity:0.4;
  pointer-events:none;
}

.checkout-order-summary__spinner{
  margin:0 auto;
  position:absolute;
  z-index:999;
  left:0;
  right:0;
  top:50%;
  bottom:0;
}

.order-summary__skeleton{
  margin-top:var(--spacing-medium);
}

@media only screen and (min-width: 320px) and (max-width: 768px){
  .checkout-order-summary{
    border-top:var(--shape-border-width-2) solid var(--color-neutral-400);
    border-bottom:var(--shape-border-width-2) solid var(--color-neutral-400);
    border-radius:0;
  }

  .checkout-order-summary__title{
    display:none;
  }

  .checkout-order-summary .dropin-divider{
    display:none;
  }

  .checkout-order-summary__breakdown{
    margin-top:0;
  }
}
`, ""]);
  const S = P;
} }, Gr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  id: qr,
  ids: Fr,
  modules: Lr
}, Symbol.toStringTag, { value: "Module" })), zr = 6768, Hr = [6768], Yr = { 4384: (te, T, e) => {
  e.d(T, { c: () => H });
  var s = e(1384), n = e(1988), d = e(4944), P = e(5536), S = e.n(P), L = e(7008), $ = e.n(L), A = e(1496), j = e.n(A), x = e(9356), k = e.n(x), m = e(9904), p = e.n(m), I = e(8724), M = { attributes: { "data-dropin": "storefront-checkout", "data-sdk": "0.22.0" }, styleTagTransform: function(l, c) {
    var pe;
    window._loadedStyles = window._loadedStyles ?? {};
    const O = (pe = l == null ? void 0 : l.match(/^\.dropin-(\w+)/)) == null ? void 0 : pe[1], N = c.getAttribute("data-sdk"), F = O ? `sdk/${O}` : c.getAttribute("data-dropin");
    c.setAttribute("data-dropin", F), c.removeAttribute("data-sdk");
    const V = window._loadedStyles[F];
    if (V) {
      const _e = function(ae, Se) {
        const [le, se] = ae.split("-"), [fe, be] = Se.split("-"), ue = [...le.split("."), se], de = [...fe.split("."), be], we = parseInt(ue[0], 10), xe = parseInt(de[0], 10);
        if (we !== xe)
          return we > xe ? ae : Se;
        const Ie = parseInt(ue[1], 10), Ae = parseInt(de[1], 10);
        if (Ie !== Ae)
          return Ie > Ae ? ae : Se;
        const je = parseInt(ue[2], 10), De = parseInt(de[2], 10);
        if (je !== De)
          return je > De ? ae : Se;
        if (ue[3] && de[3]) {
          const Ce = /(alpha|beta)(.*)/, Be = ue[3].match(Ce), Ke = de[3].match(Ce), Ze = Be[1], at = Ke[1], We = parseInt(Be[2], 10), it = parseInt(Ke[2], 10);
          if (Ze === at)
            return We > it ? ae : Se;
          if (Ze === "alpha" && at === "beta")
            return Se;
          if (Ze === "beta" && at === "alpha")
            return ae;
        }
        return ue[3] ? Se : ae;
      }(N, V.sdk);
      if (!O || O && _e === V.sdk) {
        const ae = V.style.textContent;
        V.style.textContent = `${ae}
/* --- MERGED --- */
${l}`;
      } else
        O && _e !== V.sdk && (V.style.textContent = `/* --- UPGRADED --- */
${l}`);
      return void c.remove();
    }
    c.textContent = l, window._loadedStyles[F] = { sdk: N, core: O, style: c };
    const ee = document.querySelector("head"), { lastDropinStyleInjected: ne, lastSDKStyleInjected: oe } = window._loadedStyles;
    O ? (oe ? ee.insertBefore(c, oe.nextSibling) : ee.insertBefore(c, ee.firstChild), window._loadedStyles.lastSDKStyleInjected = c) : (ne ? ee.insertBefore(c, ne.nextSibling) : oe ? ee.insertBefore(c, oe.nextSibling) : ee.insertBefore(c, ee.firstChild), window._loadedStyles.lastDropinStyleInjected = c);
  } };
  M.setAttributes = k(), M.insert = j().bind(null, "head"), M.domAPI = $(), M.insertStyleElement = p(), S()(I.c, M), I.c && I.c.locals && I.c.locals;
  var E = e(6336), z = e(3720), G = e(8424), J = e(5652), Z = e(8920), Q = e(2460), q = e(2328), w = e(2216), b = e(3388), o = e(8412), v = () => (0, o.YH)(b.W, { "data-testid": "shipping-methods-skeleton", children: [(0, o.im)(b.K, { variant: "heading", size: "small" }), (0, o.im)(b.K, { variant: "empty", size: "small" }), (0, o.im)(b.K, { size: "medium", fullWidth: !0 }), (0, o.im)(b.K, { size: "medium", fullWidth: !0 })] }), C = ["className", "isLoading", "onSelectionChange", "options", "selection"];
  function r(l, c) {
    var O = Object.keys(l);
    if (Object.getOwnPropertySymbols) {
      var N = Object.getOwnPropertySymbols(l);
      c && (N = N.filter(function(F) {
        return Object.getOwnPropertyDescriptor(l, F).enumerable;
      })), O.push.apply(O, N);
    }
    return O;
  }
  function t(l) {
    for (var c = 1; c < arguments.length; c++) {
      var O = arguments[c] != null ? arguments[c] : {};
      c % 2 ? r(Object(O), !0).forEach(function(N) {
        u(l, N, O[N]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(O)) : r(Object(O)).forEach(function(N) {
        Object.defineProperty(l, N, Object.getOwnPropertyDescriptor(O, N));
      });
    }
    return l;
  }
  function u(l, c, O) {
    var N;
    return (c = typeof (N = function(F, V) {
      if (typeof F != "object" || !F)
        return F;
      var ee = F[Symbol.toPrimitive];
      if (ee !== void 0) {
        var ne = ee.call(F, V || "default");
        if (typeof ne != "object")
          return ne;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (V === "string" ? String : Number)(F);
    }(c, "string")) == "symbol" ? N : String(N)) in l ? Object.defineProperty(l, c, { value: O, enumerable: !0, configurable: !0, writable: !0 }) : l[c] = O, l;
  }
  function h(l, c) {
    if (l == null)
      return {};
    var O, N, F = function(ee, ne) {
      if (ee == null)
        return {};
      var oe, pe, _e = {}, ae = Object.keys(ee);
      for (pe = 0; pe < ae.length; pe++)
        oe = ae[pe], ne.indexOf(oe) >= 0 || (_e[oe] = ee[oe]);
      return _e;
    }(l, c);
    if (Object.getOwnPropertySymbols) {
      var V = Object.getOwnPropertySymbols(l);
      for (N = 0; N < V.length; N++)
        O = V[N], c.indexOf(O) >= 0 || Object.prototype.propertyIsEnumerable.call(l, O) && (F[O] = l[O]);
    }
    return F;
  }
  var i = (l) => {
    var { className: c, isLoading: O = !1, onSelectionChange: N = () => {
    }, options: F, selection: V } = l, ee = h(l, C), ne = (0, Q.cF)({ Title: "Checkout.ShippingMethods.title", EmptyState: "Checkout.ShippingMethods.emptyState" });
    return F === void 0 ? (0, o.im)(v, {}) : (0, o.YH)("div", t(t({}, ee), {}, { className: (0, d.i)(["checkout-shipping-methods", c]), children: [(0, o.im)(w._, { level: 3, className: "checkout-shipping-methods__title", children: ne.Title }), !O && F.length === 0 && (0, o.im)(E.q, { icon: (0, o.im)(z.G, { source: q.default }), message: (0, o.im)("p", { children: ne.EmptyState }) }), (0, o.YH)("div", { className: (0, d.i)(["checkout-shipping-methods__content"]), children: [O && (0, o.im)(G.y, { className: "checkout-shipping-methods__spinner" }), (0, o.im)("div", { className: (0, d.i)(["checkout-shipping-methods__options", ["checkout-shipping-methods__options--loading", O]]), children: F.map((oe) => (0, o.im)(J.O, { "data-testid": "shipping-method-radiobutton", "aria-busy": O, id: oe.value, name: "shipping-method", className: "checkout-shipping-methods__method", label: (0, o.YH)(o.ae, { children: [(0, o.im)(Z.Y, { amount: oe.amount.value, currency: oe.amount.currency }), " ", (0, o.im)("span", { children: oe.carrier.title })] }), description: oe.title, value: oe.value, checked: (V == null ? void 0 : V.value) === oe.value, onChange: () => N(oe) }, oe.value)) })] })] }));
  }, a = e(2256), g = e(5668), y = e(7004), B = e(3644), f = e(7304), _ = (l, c) => l.code === c.code && l.carrier.code === c.carrier.code, D = e(2796), R = ["preSelectedMethod"];
  function Y(l, c) {
    var O = Object.keys(l);
    if (Object.getOwnPropertySymbols) {
      var N = Object.getOwnPropertySymbols(l);
      c && (N = N.filter(function(F) {
        return Object.getOwnPropertyDescriptor(l, F).enumerable;
      })), O.push.apply(O, N);
    }
    return O;
  }
  function W(l) {
    for (var c = 1; c < arguments.length; c++) {
      var O = arguments[c] != null ? arguments[c] : {};
      c % 2 ? Y(Object(O), !0).forEach(function(N) {
        U(l, N, O[N]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(O)) : Y(Object(O)).forEach(function(N) {
        Object.defineProperty(l, N, Object.getOwnPropertyDescriptor(O, N));
      });
    }
    return l;
  }
  function U(l, c, O) {
    var N;
    return (c = typeof (N = function(F, V) {
      if (typeof F != "object" || !F)
        return F;
      var ee = F[Symbol.toPrimitive];
      if (ee !== void 0) {
        var ne = ee.call(F, V || "default");
        if (typeof ne != "object")
          return ne;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (V === "string" ? String : Number)(F);
    }(c, "string")) == "symbol" ? N : String(N)) in l ? Object.defineProperty(l, c, { value: O, enumerable: !0, configurable: !0, writable: !0 }) : l[c] = O, l;
  }
  function K(l, c) {
    if (l == null)
      return {};
    var O, N, F = function(ee, ne) {
      if (ee == null)
        return {};
      var oe, pe, _e = {}, ae = Object.keys(ee);
      for (pe = 0; pe < ae.length; pe++)
        oe = ae[pe], ne.indexOf(oe) >= 0 || (_e[oe] = ee[oe]);
      return _e;
    }(l, c);
    if (Object.getOwnPropertySymbols) {
      var V = Object.getOwnPropertySymbols(l);
      for (N = 0; N < V.length; N++)
        O = V[N], c.indexOf(O) >= 0 || Object.prototype.propertyIsEnumerable.call(l, O) && (F[O] = l[O]);
    }
    return F;
  }
  var H = (l) => {
    var c, O, N, F, V, ee, ne, oe, pe, _e, ae, Se, le, se, fe, be, ue, { preSelectedMethod: de } = l, we = K(l, R), { isLoading: xe, options: Ie, selection: Ae, onSelectionChange: je } = (c = de, O = (0, a.o3)().config, N = !O, F = g.cartSignal.value.data, V = g.cartSignal.value.pending, ee = y.k.value.data, ne = y.k.value.pending, oe = f.g.value, pe = F == null ? void 0 : F.id, _e = F == null ? void 0 : F.shippingAddresses, ae = _e == null ? void 0 : _e[0], Se = !!ae, le = ae == null ? void 0 : ae.availableShippingMethods, se = ae == null ? void 0 : ae.selectedShippingMethod, fe = le || ee, be = (0, D.kZ)((De) => {
      if (pe && Se) {
        var Ce = { method_code: De.code, carrier_code: De.carrier.code };
        (0, s.M)({ cartId: pe, shippingMethods: [Ce] }).catch((Be) => {
          console.error("setting shipping methods on cart failed:", Be);
        });
      }
    }, [pe, Se]), ue = (0, D.bB)(() => {
      if (fe != null && fe.length) {
        var De = fe[0], Ce = oe || se;
        return Ce ? fe.some((Be) => _(Be, Ce)) ? Ce : De : fe.find((Be) => Be.carrier.code === (c == null ? void 0 : c.carrierCode) && Be.code === (c == null ? void 0 : c.methodCode)) || De;
      }
    }, [oe, se, fe, c]), (0, D.YB)(() => {
      ue && (oe && _(ue, oe) || (f.g.value = ue), se && _(ue, se) || be(ue));
    }, [ue, oe, se, be]), (0, D.YB)(() => {
      if (pe && !le) {
        var { country: De, selectedRegion: Ce, selectedRegionId: Be } = B.regionsSignal.value, Ke = De || (O == null ? void 0 : O.defaultCountry);
        if (Ke) {
          var Ze = { country_code: Ke, region_name: Ce, region_id: Be };
          (0, n.Y)({ cartId: pe, criteria: Ze }).catch((at) => {
            y.k.value = { pending: !1, data: [] }, console.error("shipping methods estimation failed:", at);
          });
        }
      }
    }, [pe, le, O]), { isLoading: V || N || ne, options: fe, selection: ue, onSelectionChange: (De) => {
      f.g.value = De;
    } });
    return (0, o.im)(i, W(W({}, we), {}, { className: "checkout-shipping-methods", isLoading: xe, onSelectionChange: je, options: Ie, selection: Ae }));
  };
}, 8724: (te, T, e) => {
  e.d(T, { c: () => S });
  var s = e(6008), n = e.n(s), d = e(2076), P = e.n(d)()(n());
  P.push([te.id, `.checkout-shipping-methods__title{
  color:var(--color-neutral-800);
  font:var(--type-body-1-default-font);
  letter-spacing:var(--type-body-1-default-letter-spacing);
  margin:0 0 var(--spacing-medium) 0;
}

.checkout-shipping-methods__content{
  position:relative;
  display:block;
}

.checkout-shipping-methods__method{
  margin-bottom:var(--spacing-medium);
  width:fit-content;
  cursor:pointer;
  font:var(--type-body-2-default-font);
  letter-spacing:var(--type-body-2-default-letter-spacing);
}

.checkout-shipping-methods__method:last-child{
  margin-bottom:0;
}

.dropin-radio-button__label .dropin-price{
  color:var(--color-neutral-800);
  font-weight:normal;
}
.checkout-shipping-methods__options--loading{
  opacity:0.4;
  pointer-events:none;
}

.checkout-shipping-methods__spinner{
  margin:0 auto;
  position:absolute;
  z-index:999;
  left:0;
  right:0;
  top:calc(50% - (var(--size) / 2));
  bottom:0;
}
`, ""]);
  const S = P;
} }, Rr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  id: zr,
  ids: Hr,
  modules: Yr
}, Symbol.toStringTag, { value: "Module" })), Ur = 9416, Kr = [9416], Wr = { 8572: (te, T, e) => {
  e.d(T, { _: () => f, i: () => B });
  var s = e(2532), n = e(4944), d = e(3792), P = e(3388), S = e(8412), L = () => (0, S.im)(P.W, { className: "bill-to-shipping-address__skeleton", children: (0, S.im)(P.K, { variant: "row", size: "small" }) }), $ = e(5536), A = e.n($), j = e(7008), x = e.n(j), k = e(1496), m = e.n(k), p = e(9356), I = e.n(p), M = e(9904), E = e.n(M), z = e(9960), G = { attributes: { "data-dropin": "storefront-checkout", "data-sdk": "0.22.0" }, styleTagTransform: function(_, D) {
    var c;
    window._loadedStyles = window._loadedStyles ?? {};
    const R = (c = _ == null ? void 0 : _.match(/^\.dropin-(\w+)/)) == null ? void 0 : c[1], Y = D.getAttribute("data-sdk"), W = R ? `sdk/${R}` : D.getAttribute("data-dropin");
    D.setAttribute("data-dropin", W), D.removeAttribute("data-sdk");
    const U = window._loadedStyles[W];
    if (U) {
      const O = function(N, F) {
        const [V, ee] = N.split("-"), [ne, oe] = F.split("-"), pe = [...V.split("."), ee], _e = [...ne.split("."), oe], ae = parseInt(pe[0], 10), Se = parseInt(_e[0], 10);
        if (ae !== Se)
          return ae > Se ? N : F;
        const le = parseInt(pe[1], 10), se = parseInt(_e[1], 10);
        if (le !== se)
          return le > se ? N : F;
        const fe = parseInt(pe[2], 10), be = parseInt(_e[2], 10);
        if (fe !== be)
          return fe > be ? N : F;
        if (pe[3] && _e[3]) {
          const ue = /(alpha|beta)(.*)/, de = pe[3].match(ue), we = _e[3].match(ue), xe = de[1], Ie = we[1], Ae = parseInt(de[2], 10), je = parseInt(we[2], 10);
          if (xe === Ie)
            return Ae > je ? N : F;
          if (xe === "alpha" && Ie === "beta")
            return F;
          if (xe === "beta" && Ie === "alpha")
            return N;
        }
        return pe[3] ? F : N;
      }(Y, U.sdk);
      if (!R || R && O === U.sdk) {
        const N = U.style.textContent;
        U.style.textContent = `${N}
/* --- MERGED --- */
${_}`;
      } else
        R && O !== U.sdk && (U.style.textContent = `/* --- UPGRADED --- */
${_}`);
      return void D.remove();
    }
    D.textContent = _, window._loadedStyles[W] = { sdk: Y, core: R, style: D };
    const K = document.querySelector("head"), { lastDropinStyleInjected: H, lastSDKStyleInjected: l } = window._loadedStyles;
    R ? (l ? K.insertBefore(D, l.nextSibling) : K.insertBefore(D, K.firstChild), window._loadedStyles.lastSDKStyleInjected = D) : (H ? K.insertBefore(D, H.nextSibling) : l ? K.insertBefore(D, l.nextSibling) : K.insertBefore(D, K.firstChild), window._loadedStyles.lastDropinStyleInjected = D);
  } };
  G.setAttributes = I(), G.insert = m().bind(null, "head"), G.domAPI = x(), G.insertStyleElement = E(), A()(z.c, G), z.c && z.c.locals && z.c.locals;
  var J = e(2460), Z = ["className", "isInitialized", "checked"];
  function Q(_, D) {
    var R = Object.keys(_);
    if (Object.getOwnPropertySymbols) {
      var Y = Object.getOwnPropertySymbols(_);
      D && (Y = Y.filter(function(W) {
        return Object.getOwnPropertyDescriptor(_, W).enumerable;
      })), R.push.apply(R, Y);
    }
    return R;
  }
  function q(_) {
    for (var D = 1; D < arguments.length; D++) {
      var R = arguments[D] != null ? arguments[D] : {};
      D % 2 ? Q(Object(R), !0).forEach(function(Y) {
        w(_, Y, R[Y]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(_, Object.getOwnPropertyDescriptors(R)) : Q(Object(R)).forEach(function(Y) {
        Object.defineProperty(_, Y, Object.getOwnPropertyDescriptor(R, Y));
      });
    }
    return _;
  }
  function w(_, D, R) {
    var Y;
    return (D = typeof (Y = function(W, U) {
      if (typeof W != "object" || !W)
        return W;
      var K = W[Symbol.toPrimitive];
      if (K !== void 0) {
        var H = K.call(W, U || "default");
        if (typeof H != "object")
          return H;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (U === "string" ? String : Number)(W);
    }(D, "string")) == "symbol" ? Y : String(Y)) in _ ? Object.defineProperty(_, D, { value: R, enumerable: !0, configurable: !0, writable: !0 }) : _[D] = R, _;
  }
  function b(_, D) {
    if (_ == null)
      return {};
    var R, Y, W = function(K, H) {
      if (K == null)
        return {};
      var l, c, O = {}, N = Object.keys(K);
      for (c = 0; c < N.length; c++)
        l = N[c], H.indexOf(l) >= 0 || (O[l] = K[l]);
      return O;
    }(_, D);
    if (Object.getOwnPropertySymbols) {
      var U = Object.getOwnPropertySymbols(_);
      for (Y = 0; Y < U.length; Y++)
        R = U[Y], D.indexOf(R) >= 0 || Object.prototype.propertyIsEnumerable.call(_, R) && (W[R] = _[R]);
    }
    return W;
  }
  var o = (_) => {
    var { className: D, isInitialized: R = !0, checked: Y = !0 } = _, W = b(_, Z), U = (0, J.cF)({ title: "Checkout.BillToShippingAddress.title" });
    return R ? (0, S.im)("div", { className: (0, n.i)(["checkout-bill-to-shipping-address", D]), children: (0, S.im)(d.y, q({ "data-testid": "bill-to-shipping-checkbox", className: "checkout-bill-to-shipping-address__checkbox", checked: Y, name: "checkout-bill-to-shipping-address__checkbox", label: U.title }, W)) }) : (0, S.im)(L, {});
  }, v = e(5668), C = e(9488), r = e(2796), t = e(40), u = e(2236), h = ["children"];
  function i(_, D) {
    var R = Object.keys(_);
    if (Object.getOwnPropertySymbols) {
      var Y = Object.getOwnPropertySymbols(_);
      D && (Y = Y.filter(function(W) {
        return Object.getOwnPropertyDescriptor(_, W).enumerable;
      })), R.push.apply(R, Y);
    }
    return R;
  }
  function a(_) {
    for (var D = 1; D < arguments.length; D++) {
      var R = arguments[D] != null ? arguments[D] : {};
      D % 2 ? i(Object(R), !0).forEach(function(Y) {
        g(_, Y, R[Y]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(_, Object.getOwnPropertyDescriptors(R)) : i(Object(R)).forEach(function(Y) {
        Object.defineProperty(_, Y, Object.getOwnPropertyDescriptor(R, Y));
      });
    }
    return _;
  }
  function g(_, D, R) {
    var Y;
    return (D = typeof (Y = function(W, U) {
      if (typeof W != "object" || !W)
        return W;
      var K = W[Symbol.toPrimitive];
      if (K !== void 0) {
        var H = K.call(W, U || "default");
        if (typeof H != "object")
          return H;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (U === "string" ? String : Number)(W);
    }(D, "string")) == "symbol" ? Y : String(Y)) in _ ? Object.defineProperty(_, D, { value: R, enumerable: !0, configurable: !0, writable: !0 }) : _[D] = R, _;
  }
  function y(_, D) {
    if (_ == null)
      return {};
    var R, Y, W = function(K, H) {
      if (K == null)
        return {};
      var l, c, O = {}, N = Object.keys(K);
      for (c = 0; c < N.length; c++)
        l = N[c], H.indexOf(l) >= 0 || (O[l] = K[l]);
      return O;
    }(_, D);
    if (Object.getOwnPropertySymbols) {
      var U = Object.getOwnPropertySymbols(_);
      for (Y = 0; Y < U.length; Y++)
        R = U[Y], D.indexOf(R) >= 0 || Object.prototype.propertyIsEnumerable.call(_, R) && (W[R] = _[R]);
    }
    return W;
  }
  function B(_, D, R) {
    return !D && !R || !(!D || !R) && _.every((Y) => {
      var W = Y.code;
      return function(U, K, H) {
        var l = U[H], c = K[H];
        return l === void 0 && c === void 0 || l === null && c === null || (typeof l == "object" && typeof c == "object" ? JSON.stringify(l) === JSON.stringify(c) : l === c);
      }(D, R, W);
    });
  }
  var f = (_) => {
    var D = y(_, h), { data: R } = v.cartSignal.value, Y = (R == null ? void 0 : R.id) || "", W = C.isBillToShippingSignal.value.checked, { isInitialized: U } = ((K) => {
      var H, { isBillToShipping: l } = K, [c, O] = (0, r.oT)(!1), { fields: N } = (0, u.q)(), F = v.cartSignal.value.data, V = !!F, ee = F == null ? void 0 : F.billingAddress, ne = F == null || (H = F.shippingAddresses) === null || H === void 0 ? void 0 : H[0];
      return (0, r.YB)(() => {
        if (N) {
          var oe = localStorage.getItem(t.c);
          if (!c && oe)
            return O(!0), void (l.value = { checked: oe === "true", setByUser: !1 });
          if (!c && V) {
            O(!0);
            var pe = B(N, ee, ne);
            l.value = { checked: F != null && F.billingAddress ? pe : l.value.checked, setByUser: !1 };
          }
        }
      }, [ee, F == null ? void 0 : F.billingAddress, N, V, l, c, ne]), { isInitialized: c };
    })({ isBillToShipping: C.isBillToShippingSignal });
    return (0, S.im)(o, a(a({}, D), {}, { checked: W, isInitialized: U, onChange: (K) => {
      var H, l = K.target.checked, c = v.cartSignal.value.data, O = !!(!(c == null || (H = c.shippingAddresses) === null || H === void 0) && H[0]);
      if (C.isBillToShippingSignal.value = { checked: l, setByUser: !0 }, localStorage.setItem(t.c, l.toString()), U && l && O) {
        var N = new AbortController();
        return (0, s.W)({ signal: N.signal, cartId: Y, input: { same_as_shipping: !0 } }).catch((F) => {
          console.error(F);
        }), () => {
          N.abort();
        };
      }
    }, disabled: v.cartSignal.value.pending }));
  };
}, 40: (te, T, e) => {
  e.d(T, { c: () => s });
  var s = "is_bill_to_shipping_address";
}, 2872: (te, T, e) => {
  e.d(T, { M: () => M });
  var s = e(2532), n = e(9296), d = e(8488), P = e(8572), S = e(6476), L = e(2236), $ = e(8628), A = e(5668), j = e(9488), x = e(2796), k = e(8412);
  function m(E, z) {
    var G = Object.keys(E);
    if (Object.getOwnPropertySymbols) {
      var J = Object.getOwnPropertySymbols(E);
      z && (J = J.filter(function(Z) {
        return Object.getOwnPropertyDescriptor(E, Z).enumerable;
      })), G.push.apply(G, J);
    }
    return G;
  }
  function p(E) {
    for (var z = 1; z < arguments.length; z++) {
      var G = arguments[z] != null ? arguments[z] : {};
      z % 2 ? m(Object(G), !0).forEach(function(J) {
        I(E, J, G[J]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(E, Object.getOwnPropertyDescriptors(G)) : m(Object(G)).forEach(function(J) {
        Object.defineProperty(E, J, Object.getOwnPropertyDescriptor(G, J));
      });
    }
    return E;
  }
  function I(E, z, G) {
    var J;
    return (z = typeof (J = function(Z, Q) {
      if (typeof Z != "object" || !Z)
        return Z;
      var q = Z[Symbol.toPrimitive];
      if (q !== void 0) {
        var w = q.call(Z, Q || "default");
        if (typeof w != "object")
          return w;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (Q === "string" ? String : Number)(Z);
    }(z, "string")) == "symbol" ? J : String(J)) in E ? Object.defineProperty(E, z, { value: G, enumerable: !0, configurable: !0, writable: !0 }) : E[z] = G, E;
  }
  var M = (E) => {
    var { fields: z } = (0, L.q)(), G = (0, x.yK)(null), { data: J } = A.cartSignal.value, Z = (J == null ? void 0 : J.id) || "", { checked: Q, setByUser: q } = j.isBillToShippingSignal.value, w = !Q, b = (0, x.kZ)((v) => (0, s.W)({ signal: v.signal, cartId: Z, input: { address: Q ? void 0 : (0, n.ek)(v.address), same_as_shipping: Q } }), [Z, Q]), o = (0, x.kZ)(() => {
      var v, C = A.cartSignal.value.data;
      return !(0, P.i)(z, C == null ? void 0 : C.billingAddress, C == null || (v = C.shippingAddresses) === null || v === void 0 ? void 0 : v[0]);
    }, [z]);
    return (0, x.YB)(() => {
      if (q) {
        var v = new AbortController();
        return Q || G.current.triggerSaveAddress(v.signal), () => {
          v.abort();
        };
      }
    }, [Q, q]), (0, k.im)(d.i, p(p({}, E), {}, { addressType: $.y.BILLING, "data-testid": "billing-form", headingId: "Checkout.BillingAddress.title", name: S.M, ref: G, saveAddressHandler: b, shouldAutoFillForm: o, style: { display: w ? "block" : "none" } }));
  };
}, 6476: (te, T, e) => {
  e.d(T, { M: () => s });
  var s = "billing_address";
}, 8028: (te, T, e) => {
  e.d(T, { s5: () => vt, cv: () => s, cp: () => vt });
  var s = "OUT_OF_STOCK", n = e(5912), d = e(3688), P = e(3760), S = e(7788), L = e(5616), $ = e(4944), A = e(5536), j = e.n(A), x = e(7008), k = e.n(x), m = e(1496), p = e.n(m), I = e(9356), M = e.n(I), E = e(9904), z = e.n(E), G = e(6756), J = { attributes: { "data-dropin": "storefront-checkout", "data-sdk": "0.22.0" }, styleTagTransform: function(ye, ge) {
    var ce;
    window._loadedStyles = window._loadedStyles ?? {};
    const me = (ce = ye == null ? void 0 : ye.match(/^\.dropin-(\w+)/)) == null ? void 0 : ce[1], he = ge.getAttribute("data-sdk"), Pe = me ? `sdk/${me}` : ge.getAttribute("data-dropin");
    ge.setAttribute("data-dropin", Pe), ge.removeAttribute("data-sdk");
    const Ee = window._loadedStyles[Pe];
    if (Ee) {
      const ve = function(Oe, ke) {
        const [Ne, Ge] = Oe.split("-"), [$e, Ye] = ke.split("-"), Te = [...Ne.split("."), Ge], Le = [...$e.split("."), Ye], Xe = parseInt(Te[0], 10), ze = parseInt(Le[0], 10);
        if (Xe !== ze)
          return Xe > ze ? Oe : ke;
        const Ue = parseInt(Te[1], 10), et = parseInt(Le[1], 10);
        if (Ue !== et)
          return Ue > et ? Oe : ke;
        const Me = parseInt(Te[2], 10), qe = parseInt(Le[2], 10);
        if (Me !== qe)
          return Me > qe ? Oe : ke;
        if (Te[3] && Le[3]) {
          const He = /(alpha|beta)(.*)/, Je = Te[3].match(He), Ve = Le[3].match(He), rt = Je[1], nt = Ve[1], lt = parseInt(Je[2], 10), Re = parseInt(Ve[2], 10);
          if (rt === nt)
            return lt > Re ? Oe : ke;
          if (rt === "alpha" && nt === "beta")
            return ke;
          if (rt === "beta" && nt === "alpha")
            return Oe;
        }
        return Te[3] ? ke : Oe;
      }(he, Ee.sdk);
      if (!me || me && ve === Ee.sdk) {
        const Oe = Ee.style.textContent;
        Ee.style.textContent = `${Oe}
/* --- MERGED --- */
${ye}`;
      } else
        me && ve !== Ee.sdk && (Ee.style.textContent = `/* --- UPGRADED --- */
${ye}`);
      return void ge.remove();
    }
    ge.textContent = ye, window._loadedStyles[Pe] = { sdk: he, core: me, style: ge };
    const X = document.querySelector("head"), { lastDropinStyleInjected: re, lastSDKStyleInjected: ie } = window._loadedStyles;
    me ? (ie ? X.insertBefore(ge, ie.nextSibling) : X.insertBefore(ge, X.firstChild), window._loadedStyles.lastSDKStyleInjected = ge) : (re ? X.insertBefore(ge, re.nextSibling) : ie ? X.insertBefore(ge, ie.nextSibling) : X.insertBefore(ge, X.firstChild), window._loadedStyles.lastDropinStyleInjected = ge);
  } };
  J.setAttributes = M(), J.insert = p().bind(null, "head"), J.domAPI = k(), J.insertStyleElement = z(), j()(G.c, J), G.c && G.c.locals && G.c.locals;
  var Z = e(6336), Q = e(3720), q = e(492), w = e(5008), b = e(2460), o = e(8412), v = ["className", "title", "routeHome"];
  function C(ye, ge) {
    var me = Object.keys(ye);
    if (Object.getOwnPropertySymbols) {
      var he = Object.getOwnPropertySymbols(ye);
      ge && (he = he.filter(function(Pe) {
        return Object.getOwnPropertyDescriptor(ye, Pe).enumerable;
      })), me.push.apply(me, he);
    }
    return me;
  }
  function r(ye) {
    for (var ge = 1; ge < arguments.length; ge++) {
      var me = arguments[ge] != null ? arguments[ge] : {};
      ge % 2 ? C(Object(me), !0).forEach(function(he) {
        t(ye, he, me[he]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(ye, Object.getOwnPropertyDescriptors(me)) : C(Object(me)).forEach(function(he) {
        Object.defineProperty(ye, he, Object.getOwnPropertyDescriptor(me, he));
      });
    }
    return ye;
  }
  function t(ye, ge, me) {
    var he;
    return (ge = typeof (he = function(Pe, Ee) {
      if (typeof Pe != "object" || !Pe)
        return Pe;
      var X = Pe[Symbol.toPrimitive];
      if (X !== void 0) {
        var re = X.call(Pe, Ee || "default");
        if (typeof re != "object")
          return re;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (Ee === "string" ? String : Number)(Pe);
    }(ge, "string")) == "symbol" ? he : String(he)) in ye ? Object.defineProperty(ye, ge, { value: me, enumerable: !0, configurable: !0, writable: !0 }) : ye[ge] = me, ye;
  }
  function u(ye, ge) {
    if (ye == null)
      return {};
    var me, he, Pe = function(X, re) {
      if (X == null)
        return {};
      var ie, ce, ve = {}, Oe = Object.keys(X);
      for (ce = 0; ce < Oe.length; ce++)
        ie = Oe[ce], re.indexOf(ie) >= 0 || (ve[ie] = X[ie]);
      return ve;
    }(ye, ge);
    if (Object.getOwnPropertySymbols) {
      var Ee = Object.getOwnPropertySymbols(ye);
      for (he = 0; he < Ee.length; he++)
        me = Ee[he], ge.indexOf(me) >= 0 || Object.prototype.propertyIsEnumerable.call(ye, me) && (Pe[me] = ye[me]);
    }
    return Pe;
  }
  var h = (ye) => {
    var { className: ge, title: me, routeHome: he } = ye, Pe = u(ye, v), Ee = (0, b.cF)({ Title: "Checkout.EmptyCart.title", Button: "Checkout.EmptyCart.button" });
    return (0, o.im)(Z.q, r(r({}, Pe), {}, { "data-testid": "checkout-empty-cart", className: (0, $.i)(["checkout-empty-cart", ge]), heading: me ?? Ee.Title, icon: (0, o.im)(Q.G, { className: (0, $.i)(["checkout-empty-cart__icon"]), source: w.default }), action: he != null && he() ? (0, o.im)(q.q, { className: "checkout-empty-cart__button", size: "medium", variant: "primary", type: "submit", href: he == null ? void 0 : he(), children: Ee.Button }, "routeHome") : void 0 }));
  }, i = e(728), a = { attributes: { "data-dropin": "storefront-checkout", "data-sdk": "0.22.0" }, styleTagTransform: function(ye, ge) {
    var ce;
    window._loadedStyles = window._loadedStyles ?? {};
    const me = (ce = ye == null ? void 0 : ye.match(/^\.dropin-(\w+)/)) == null ? void 0 : ce[1], he = ge.getAttribute("data-sdk"), Pe = me ? `sdk/${me}` : ge.getAttribute("data-dropin");
    ge.setAttribute("data-dropin", Pe), ge.removeAttribute("data-sdk");
    const Ee = window._loadedStyles[Pe];
    if (Ee) {
      const ve = function(Oe, ke) {
        const [Ne, Ge] = Oe.split("-"), [$e, Ye] = ke.split("-"), Te = [...Ne.split("."), Ge], Le = [...$e.split("."), Ye], Xe = parseInt(Te[0], 10), ze = parseInt(Le[0], 10);
        if (Xe !== ze)
          return Xe > ze ? Oe : ke;
        const Ue = parseInt(Te[1], 10), et = parseInt(Le[1], 10);
        if (Ue !== et)
          return Ue > et ? Oe : ke;
        const Me = parseInt(Te[2], 10), qe = parseInt(Le[2], 10);
        if (Me !== qe)
          return Me > qe ? Oe : ke;
        if (Te[3] && Le[3]) {
          const He = /(alpha|beta)(.*)/, Je = Te[3].match(He), Ve = Le[3].match(He), rt = Je[1], nt = Ve[1], lt = parseInt(Je[2], 10), Re = parseInt(Ve[2], 10);
          if (rt === nt)
            return lt > Re ? Oe : ke;
          if (rt === "alpha" && nt === "beta")
            return ke;
          if (rt === "beta" && nt === "alpha")
            return Oe;
        }
        return Te[3] ? ke : Oe;
      }(he, Ee.sdk);
      if (!me || me && ve === Ee.sdk) {
        const Oe = Ee.style.textContent;
        Ee.style.textContent = `${Oe}
/* --- MERGED --- */
${ye}`;
      } else
        me && ve !== Ee.sdk && (Ee.style.textContent = `/* --- UPGRADED --- */
${ye}`);
      return void ge.remove();
    }
    ge.textContent = ye, window._loadedStyles[Pe] = { sdk: he, core: me, style: ge };
    const X = document.querySelector("head"), { lastDropinStyleInjected: re, lastSDKStyleInjected: ie } = window._loadedStyles;
    me ? (ie ? X.insertBefore(ge, ie.nextSibling) : X.insertBefore(ge, X.firstChild), window._loadedStyles.lastSDKStyleInjected = ge) : (re ? X.insertBefore(ge, re.nextSibling) : ie ? X.insertBefore(ge, ie.nextSibling) : X.insertBefore(ge, X.firstChild), window._loadedStyles.lastDropinStyleInjected = ge);
  } };
  a.setAttributes = M(), a.insert = p().bind(null, "head"), a.domAPI = k(), a.insertStyleElement = z(), j()(i.c, a), i.c && i.c.locals && i.c.locals;
  var g = e(984), y = ["className", "errorMessage", "contactSupport"];
  function B(ye, ge) {
    if (ye == null)
      return {};
    var me, he, Pe = function(X, re) {
      if (X == null)
        return {};
      var ie, ce, ve = {}, Oe = Object.keys(X);
      for (ce = 0; ce < Oe.length; ce++)
        ie = Oe[ce], re.indexOf(ie) >= 0 || (ve[ie] = X[ie]);
      return ve;
    }(ye, ge);
    if (Object.getOwnPropertySymbols) {
      var Ee = Object.getOwnPropertySymbols(ye);
      for (he = 0; he < Ee.length; he++)
        me = Ee[he], ge.indexOf(me) >= 0 || Object.prototype.propertyIsEnumerable.call(ye, me) && (Pe[me] = ye[me]);
    }
    return Pe;
  }
  var f = (ye) => {
    var { className: ge, errorMessage: me, contactSupport: he } = ye, Pe = B(ye, y), { onClick: Ee } = Pe, X = (0, b.cF)({ Title: "Checkout.ServerError.title", Message: "Checkout.ServerError.message", ContactSupport: "Checkout.ServerError.contactSupport", Button: "Checkout.ServerError.button" });
    return (0, o.im)(Z.q, { "aria-invalid": "true", "aria-describedby": "checkout-server-error__message", "aria-live": "polite", className: (0, $.i)(["checkout-server-error", ge]), "data-testid": "checkout-server-error", heading: me ?? X.Title, message: (0, o.YH)("p", { id: (0, $.i)(["checkout-server-error__message"]), children: [X.Message, (0, o.im)("br", {}), (0, o.im)(b._q, { id: "", children: he ?? X.ContactSupport })] }), icon: (0, o.im)(Q.G, { className: (0, $.i)(["checkout-server-error__icon"]), source: g.default }), action: (0, o.im)(q.q, { className: (0, $.i)(["checkout-server-error__button"]), onClick: Ee, children: X.Button }) });
  }, _ = e(2216), D = e(9112), R = e(1044), Y = e(6630), W = { attributes: { "data-dropin": "storefront-checkout", "data-sdk": "0.22.0" }, styleTagTransform: function(ye, ge) {
    var ce;
    window._loadedStyles = window._loadedStyles ?? {};
    const me = (ce = ye == null ? void 0 : ye.match(/^\.dropin-(\w+)/)) == null ? void 0 : ce[1], he = ge.getAttribute("data-sdk"), Pe = me ? `sdk/${me}` : ge.getAttribute("data-dropin");
    ge.setAttribute("data-dropin", Pe), ge.removeAttribute("data-sdk");
    const Ee = window._loadedStyles[Pe];
    if (Ee) {
      const ve = function(Oe, ke) {
        const [Ne, Ge] = Oe.split("-"), [$e, Ye] = ke.split("-"), Te = [...Ne.split("."), Ge], Le = [...$e.split("."), Ye], Xe = parseInt(Te[0], 10), ze = parseInt(Le[0], 10);
        if (Xe !== ze)
          return Xe > ze ? Oe : ke;
        const Ue = parseInt(Te[1], 10), et = parseInt(Le[1], 10);
        if (Ue !== et)
          return Ue > et ? Oe : ke;
        const Me = parseInt(Te[2], 10), qe = parseInt(Le[2], 10);
        if (Me !== qe)
          return Me > qe ? Oe : ke;
        if (Te[3] && Le[3]) {
          const He = /(alpha|beta)(.*)/, Je = Te[3].match(He), Ve = Le[3].match(He), rt = Je[1], nt = Ve[1], lt = parseInt(Je[2], 10), Re = parseInt(Ve[2], 10);
          if (rt === nt)
            return lt > Re ? Oe : ke;
          if (rt === "alpha" && nt === "beta")
            return ke;
          if (rt === "beta" && nt === "alpha")
            return Oe;
        }
        return Te[3] ? ke : Oe;
      }(he, Ee.sdk);
      if (!me || me && ve === Ee.sdk) {
        const Oe = Ee.style.textContent;
        Ee.style.textContent = `${Oe}
/* --- MERGED --- */
${ye}`;
      } else
        me && ve !== Ee.sdk && (Ee.style.textContent = `/* --- UPGRADED --- */
${ye}`);
      return void ge.remove();
    }
    ge.textContent = ye, window._loadedStyles[Pe] = { sdk: he, core: me, style: ge };
    const X = document.querySelector("head"), { lastDropinStyleInjected: re, lastSDKStyleInjected: ie } = window._loadedStyles;
    me ? (ie ? X.insertBefore(ge, ie.nextSibling) : X.insertBefore(ge, X.firstChild), window._loadedStyles.lastSDKStyleInjected = ge) : (re ? X.insertBefore(ge, re.nextSibling) : ie ? X.insertBefore(ge, ie.nextSibling) : X.insertBefore(ge, X.firstChild), window._loadedStyles.lastDropinStyleInjected = ge);
  } };
  W.setAttributes = M(), W.insert = p().bind(null, "head"), W.domAPI = k(), W.insertStyleElement = z(), j()(Y.c, W), Y.c && Y.c.locals && Y.c.locals;
  var U = ["banner", "className", "children"];
  function K(ye, ge) {
    if (ye == null)
      return {};
    var me, he, Pe = function(X, re) {
      if (X == null)
        return {};
      var ie, ce, ve = {}, Oe = Object.keys(X);
      for (ce = 0; ce < Oe.length; ce++)
        ie = Oe[ce], re.indexOf(ie) >= 0 || (ve[ie] = X[ie]);
      return ve;
    }(ye, ge);
    if (Object.getOwnPropertySymbols) {
      var Ee = Object.getOwnPropertySymbols(ye);
      for (he = 0; he < Ee.length; he++)
        me = Ee[he], ge.indexOf(me) >= 0 || Object.prototype.propertyIsEnumerable.call(ye, me) && (Pe[me] = ye[me]);
    }
    return Pe;
  }
  function H(ye, ge) {
    var me = Object.keys(ye);
    if (Object.getOwnPropertySymbols) {
      var he = Object.getOwnPropertySymbols(ye);
      ge && (he = he.filter(function(Pe) {
        return Object.getOwnPropertyDescriptor(ye, Pe).enumerable;
      })), me.push.apply(me, he);
    }
    return me;
  }
  function l(ye) {
    for (var ge = 1; ge < arguments.length; ge++) {
      var me = arguments[ge] != null ? arguments[ge] : {};
      ge % 2 ? H(Object(me), !0).forEach(function(he) {
        c(ye, he, me[he]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(ye, Object.getOwnPropertyDescriptors(me)) : H(Object(me)).forEach(function(he) {
        Object.defineProperty(ye, he, Object.getOwnPropertyDescriptor(me, he));
      });
    }
    return ye;
  }
  function c(ye, ge, me) {
    var he;
    return (ge = typeof (he = function(Pe, Ee) {
      if (typeof Pe != "object" || !Pe)
        return Pe;
      var X = Pe[Symbol.toPrimitive];
      if (X !== void 0) {
        var re = X.call(Pe, Ee || "default");
        if (typeof re != "object")
          return re;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (Ee === "string" ? String : Number)(Pe);
    }(ge, "string")) == "symbol" ? he : String(he)) in ye ? Object.defineProperty(ye, ge, { value: me, enumerable: !0, configurable: !0, writable: !0 }) : ye[ge] = me, ye;
  }
  var O = (ye) => {
    var { children: ge, className: me } = ye;
    return (0, D.y)() === "small" ? (0, o.im)(o.ae, { children: ge }) : (0, o.im)("div", { className: me, children: ge });
  }, N = (ye) => {
    var { billingAddress: ge, billToShippingAddress: me, login: he, paymentMethods: Pe, placeOrder: Ee, shippingAddress: X, shippingMethods: re } = ye;
    return (0, o.YH)(o.ae, { children: [(0, o.im)(R.o, { node: he }), X && (0, o.im)(R.o, { node: X }), me && (0, o.im)(R.o, { node: me }), re && (0, o.im)(R.o, { node: re }), (0, o.im)(R.o, { node: Pe }), (0, o.im)(R.o, { node: ge }), (0, o.im)(R.o, { node: Ee })] });
  }, F = (ye) => {
    var { banner: ge, className: me, children: he } = ye, Pe = K(ye, U);
    return (0, o.YH)("div", l(l({ className: (0, $.i)(["checkout", me]) }, Pe), {}, { children: [ge && (0, o.im)(R.o, { className: "checkout__banner", node: ge }), (0, o.im)("div", { className: "checkout__content", children: he })] }));
  };
  F.Main = (ye) => {
    var { outOfStock: ge, sections: me } = ye;
    return (0, o.im)(O, { className: "checkout__main", children: (0, o.YH)(o.ae, { children: [(0, o.im)(_._, { level: 1, className: "checkout-title", children: (0, o.im)(b.a, { id: "Checkout.title" }) }), ge && (0, o.im)(R.o, { className: "checkout-outOfStock", node: ge }), me && (0, o.im)(N, l({}, me))] }) });
  }, F.Aside = (ye) => {
    var { sections: ge } = ye;
    return (0, o.im)(O, { className: "checkout__aside", children: (0, o.YH)(o.ae, { children: [(0, o.im)(R.o, { node: ge.orderSummary }), (0, o.im)(R.o, { node: ge.cartSummary })] }) });
  };
  var V = e(6192), ee = { attributes: { "data-dropin": "storefront-checkout", "data-sdk": "0.22.0" }, styleTagTransform: function(ye, ge) {
    var ce;
    window._loadedStyles = window._loadedStyles ?? {};
    const me = (ce = ye == null ? void 0 : ye.match(/^\.dropin-(\w+)/)) == null ? void 0 : ce[1], he = ge.getAttribute("data-sdk"), Pe = me ? `sdk/${me}` : ge.getAttribute("data-dropin");
    ge.setAttribute("data-dropin", Pe), ge.removeAttribute("data-sdk");
    const Ee = window._loadedStyles[Pe];
    if (Ee) {
      const ve = function(Oe, ke) {
        const [Ne, Ge] = Oe.split("-"), [$e, Ye] = ke.split("-"), Te = [...Ne.split("."), Ge], Le = [...$e.split("."), Ye], Xe = parseInt(Te[0], 10), ze = parseInt(Le[0], 10);
        if (Xe !== ze)
          return Xe > ze ? Oe : ke;
        const Ue = parseInt(Te[1], 10), et = parseInt(Le[1], 10);
        if (Ue !== et)
          return Ue > et ? Oe : ke;
        const Me = parseInt(Te[2], 10), qe = parseInt(Le[2], 10);
        if (Me !== qe)
          return Me > qe ? Oe : ke;
        if (Te[3] && Le[3]) {
          const He = /(alpha|beta)(.*)/, Je = Te[3].match(He), Ve = Le[3].match(He), rt = Je[1], nt = Ve[1], lt = parseInt(Je[2], 10), Re = parseInt(Ve[2], 10);
          if (rt === nt)
            return lt > Re ? Oe : ke;
          if (rt === "alpha" && nt === "beta")
            return ke;
          if (rt === "beta" && nt === "alpha")
            return Oe;
        }
        return Te[3] ? ke : Oe;
      }(he, Ee.sdk);
      if (!me || me && ve === Ee.sdk) {
        const Oe = Ee.style.textContent;
        Ee.style.textContent = `${Oe}
/* --- MERGED --- */
${ye}`;
      } else
        me && ve !== Ee.sdk && (Ee.style.textContent = `/* --- UPGRADED --- */
${ye}`);
      return void ge.remove();
    }
    ge.textContent = ye, window._loadedStyles[Pe] = { sdk: he, core: me, style: ge };
    const X = document.querySelector("head"), { lastDropinStyleInjected: re, lastSDKStyleInjected: ie } = window._loadedStyles;
    me ? (ie ? X.insertBefore(ge, ie.nextSibling) : X.insertBefore(ge, X.firstChild), window._loadedStyles.lastSDKStyleInjected = ge) : (re ? X.insertBefore(ge, re.nextSibling) : ie ? X.insertBefore(ge, ie.nextSibling) : X.insertBefore(ge, X.firstChild), window._loadedStyles.lastDropinStyleInjected = ge);
  } };
  ee.setAttributes = M(), ee.insert = p().bind(null, "head"), ee.domAPI = k(), ee.insertStyleElement = z(), j()(V.c, ee), V.c && V.c.locals && V.c.locals;
  var ne = ["className", "icon", "routeCart"];
  function oe(ye, ge) {
    var me = Object.keys(ye);
    if (Object.getOwnPropertySymbols) {
      var he = Object.getOwnPropertySymbols(ye);
      ge && (he = he.filter(function(Pe) {
        return Object.getOwnPropertyDescriptor(ye, Pe).enumerable;
      })), me.push.apply(me, he);
    }
    return me;
  }
  function pe(ye) {
    for (var ge = 1; ge < arguments.length; ge++) {
      var me = arguments[ge] != null ? arguments[ge] : {};
      ge % 2 ? oe(Object(me), !0).forEach(function(he) {
        _e(ye, he, me[he]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(ye, Object.getOwnPropertyDescriptors(me)) : oe(Object(me)).forEach(function(he) {
        Object.defineProperty(ye, he, Object.getOwnPropertyDescriptor(me, he));
      });
    }
    return ye;
  }
  function _e(ye, ge, me) {
    var he;
    return (ge = typeof (he = function(Pe, Ee) {
      if (typeof Pe != "object" || !Pe)
        return Pe;
      var X = Pe[Symbol.toPrimitive];
      if (X !== void 0) {
        var re = X.call(Pe, Ee || "default");
        if (typeof re != "object")
          return re;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (Ee === "string" ? String : Number)(Pe);
    }(ge, "string")) == "symbol" ? he : String(he)) in ye ? Object.defineProperty(ye, ge, { value: me, enumerable: !0, configurable: !0, writable: !0 }) : ye[ge] = me, ye;
  }
  function ae(ye, ge) {
    if (ye == null)
      return {};
    var me, he, Pe = function(X, re) {
      if (X == null)
        return {};
      var ie, ce, ve = {}, Oe = Object.keys(X);
      for (ce = 0; ce < Oe.length; ce++)
        ie = Oe[ce], re.indexOf(ie) >= 0 || (ve[ie] = X[ie]);
      return ve;
    }(ye, ge);
    if (Object.getOwnPropertySymbols) {
      var Ee = Object.getOwnPropertySymbols(ye);
      for (he = 0; he < Ee.length; he++)
        me = Ee[he], ge.indexOf(me) >= 0 || Object.prototype.propertyIsEnumerable.call(ye, me) && (Pe[me] = ye[me]);
    }
    return Pe;
  }
  var Se = (ye) => {
    var { className: ge, icon: me, routeCart: he } = ye, Pe = ae(ye, ne), Ee = (0, b.cF)({ Title: "Checkout.OutOfStock.title", Message: "Checkout.OutOfStock.message" });
    return (0, o.YH)("div", pe(pe({}, Pe), {}, { className: (0, $.i)(["checkout-out-of-stock", ge]), "data-testid": "checkout-out-of-stock", children: [(0, o.im)(Z.q, { heading: Ee.Title, message: (0, o.im)("p", { children: Ee.Message }), icon: (0, o.im)(Q.G, { source: me ?? g.default, className: (0, $.i)(["checkout-out-of-stock__icon"]) }) }), (he == null ? void 0 : he()) && (0, o.im)(q.q, { className: "checkout-out-of-stock__button", size: "medium", variant: "primary", type: "submit", href: he == null ? void 0 : he(), children: (0, o.im)(b.a, { id: "Checkout.OutOfStock.button" }) }, "routeCart")] }));
  }, le = e(2872), se = e(8572), fe = e(2408), be = e(3100), ue = e(4112), de = e(4468), we = e(4384), xe = e(3316), Ie = e(6140), Ae = e(9892), je = e(5668), De = e(9488), Ce = e(6044), Be = e(8122), Ke = e(2796), Ze = ["className", "cartId", "slots", "routeHome", "routeCart", "preselectedCartData"];
  function at(ye, ge) {
    var me = Object.keys(ye);
    if (Object.getOwnPropertySymbols) {
      var he = Object.getOwnPropertySymbols(ye);
      ge && (he = he.filter(function(Pe) {
        return Object.getOwnPropertyDescriptor(ye, Pe).enumerable;
      })), me.push.apply(me, he);
    }
    return me;
  }
  function We(ye) {
    for (var ge = 1; ge < arguments.length; ge++) {
      var me = arguments[ge] != null ? arguments[ge] : {};
      ge % 2 ? at(Object(me), !0).forEach(function(he) {
        it(ye, he, me[he]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(ye, Object.getOwnPropertyDescriptors(me)) : at(Object(me)).forEach(function(he) {
        Object.defineProperty(ye, he, Object.getOwnPropertyDescriptor(me, he));
      });
    }
    return ye;
  }
  function it(ye, ge, me) {
    var he;
    return (ge = typeof (he = function(Pe, Ee) {
      if (typeof Pe != "object" || !Pe)
        return Pe;
      var X = Pe[Symbol.toPrimitive];
      if (X !== void 0) {
        var re = X.call(Pe, Ee || "default");
        if (typeof re != "object")
          return re;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (Ee === "string" ? String : Number)(Pe);
    }(ge, "string")) == "symbol" ? he : String(he)) in ye ? Object.defineProperty(ye, ge, { value: me, enumerable: !0, configurable: !0, writable: !0 }) : ye[ge] = me, ye;
  }
  function ct(ye, ge, me, he, Pe, Ee, X) {
    try {
      var re = ye[Ee](X), ie = re.value;
    } catch (ce) {
      return void me(ce);
    }
    re.done ? ge(ie) : Promise.resolve(ie).then(he, Pe);
  }
  function dt(ye) {
    return function() {
      var ge = this, me = arguments;
      return new Promise(function(he, Pe) {
        var Ee = ye.apply(ge, me);
        function X(ie) {
          ct(Ee, he, Pe, X, re, "next", ie);
        }
        function re(ie) {
          ct(Ee, he, Pe, X, re, "throw", ie);
        }
        X(void 0);
      });
    };
  }
  function st(ye, ge) {
    if (ye == null)
      return {};
    var me, he, Pe = function(X, re) {
      if (X == null)
        return {};
      var ie, ce, ve = {}, Oe = Object.keys(X);
      for (ce = 0; ce < Oe.length; ce++)
        ie = Oe[ce], re.indexOf(ie) >= 0 || (ve[ie] = X[ie]);
      return ve;
    }(ye, ge);
    if (Object.getOwnPropertySymbols) {
      var Ee = Object.getOwnPropertySymbols(ye);
      for (he = 0; he < Ee.length; he++)
        me = Ee[he], ge.indexOf(me) >= 0 || Object.prototype.propertyIsEnumerable.call(ye, me) && (Pe[me] = ye[me]);
    }
    return Pe;
  }
  var vt = (ye) => {
    var { className: ge, cartId: me, slots: he, routeHome: Pe, routeCart: Ee, preselectedCartData: X } = ye, re = st(ye, Ze), [ie, ce] = (0, Ke.oT)(""), [ve, Oe] = (0, Ke.oT)(), [ke, Ne] = (0, Ke.oT)(!1), [Ge, $e] = (0, Ke.oT)(!1), Ye = !!me, { data: Te } = je.cartSignal.value, Le = Te !== void 0, Xe = (Te == null ? void 0 : Te.virtual) || !1, ze = Ye && !Le, Ue = ie !== "", et = Te == null ? void 0 : Te.items, Me = et !== void 0 && et.length > 0, qe = !ze && !Me, He = (0, b.cF)({ CheckoutUnexpectedError: "Checkout.ServerError.unexpected" }), Je = (0, Ke.kZ)(dt(function* () {
      Te && (yield (0, d.A)(Te.id), je.cartSignal.value = { pending: !1 }, Ne(!0));
    }), [Te]), Ve = (Qe) => {
      Oe(() => Qe);
    }, rt = function() {
      var Qe = dt(function* () {
        ce(""), Te && (yield lt(Te.id));
      });
      return function() {
        return Qe.apply(this, arguments);
      };
    }(), nt = (Qe) => {
      ce(Qe instanceof TypeError || Qe instanceof P.i4 ? He.CheckoutUnexpectedError : Qe.message);
    }, lt = function() {
      var Qe = dt(function* (ot) {
        var ut = yield (0, S.Q)(ot);
        ut != null && ut.virtual && (De.isBillToShippingSignal.value = { checked: !1, setByUser: !1 });
      });
      return function(ot) {
        return Qe.apply(this, arguments);
      };
    }(), Re = function() {
      var Qe = dt(function* (ot) {
        var ut = yield (0, L.q)(ot);
        $e(ut === n.Ij.OutOfStock);
      });
      return function(ot) {
        return Qe.apply(this, arguments);
      };
    }();
    return (0, Ke.YB)(() => {
      me && !ke && (lt(me), Re(me));
    }, [me, ke]), (0, Ke.YB)(() => {
      var Qe = Be.events.on("cart/data", (ot) => {
        !me && ot && (lt(ot.id), Re(ot.id));
      }, { eager: !0 });
      return () => {
        Qe == null || Qe.off();
      };
    }, [me]), ke ? null : qe ? (0, o.im)(h, { routeHome: Pe }) : Ue ? (0, o.im)(f, { errorMessage: ie, onClick: rt }) : (0, o.YH)(F, We(We({ className: ge, banner: (0, o.im)(Ae._, {}) }, re), {}, { children: [(0, o.im)(F.Aside, { sections: { cartSummary: (0, o.im)(Ce.k, { name: "CartSummary", slot: he == null ? void 0 : he.CartSummary, children: (0, o.im)(xe.E, { routeCart: Ee }) }), orderSummary: (0, o.im)(Ce.k, { name: "OrderSummary", slot: he == null ? void 0 : he.OrderSummary, children: (0, o.im)(Ie.W, {}) }) } }), Ge ? (0, o.im)(F.Main, { outOfStock: (0, o.im)(Se, { routeCart: Ee }) }) : (0, o.im)(F.Main, { sections: { billingAddress: (0, o.im)(Ce.k, { name: "BillingForm", slot: he == null ? void 0 : he.BillingForm, children: (0, o.im)(le.M, {}) }), billToShippingAddress: Xe ? void 0 : (0, o.im)(Ce.k, { name: "BillToShipping", slot: he == null ? void 0 : he.BillToShipping, children: (0, o.im)(se._, {}) }), login: (0, o.im)(Ce.k, { name: "Login", slot: he == null ? void 0 : he.Login, children: (0, o.im)(fe.u, {}) }), paymentMethods: (0, o.im)(be.U, { isShippingInfoRequired: !Xe, onPlaceOrder: Ve, handleServerError: nt, paymentMethodsSlot: he == null ? void 0 : he.PaymentMethods }), placeOrder: (0, o.im)(ue.q, { onClick: ve ?? Je, handleServerError: nt }), shippingAddress: Xe ? void 0 : (0, o.im)(Ce.k, { name: "ShippingForm", slot: he == null ? void 0 : he.ShippingForm, children: (0, o.im)(de.S, { preselectedFields: X == null ? void 0 : X.address }) }), shippingMethods: Xe ? void 0 : (0, o.im)(Ce.k, { name: "ShippingMethods", slot: he == null ? void 0 : he.ShippingMethods, children: (0, o.im)(we.c, { preSelectedMethod: X == null ? void 0 : X.shippingMethod }) }) } })] }));
  };
}, 9892: (te, T, e) => {
  e.d(T, { _: () => k });
  var s = e(2796), n = e(2460), d = e(8122), P = e(5508), S = e(3720), L = e(1176), $ = e(8412);
  function A(m, p) {
    var I = Object.keys(m);
    if (Object.getOwnPropertySymbols) {
      var M = Object.getOwnPropertySymbols(m);
      p && (M = M.filter(function(E) {
        return Object.getOwnPropertyDescriptor(m, E).enumerable;
      })), I.push.apply(I, M);
    }
    return I;
  }
  function j(m) {
    for (var p = 1; p < arguments.length; p++) {
      var I = arguments[p] != null ? arguments[p] : {};
      p % 2 ? A(Object(I), !0).forEach(function(M) {
        x(m, M, I[M]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(m, Object.getOwnPropertyDescriptors(I)) : A(Object(I)).forEach(function(M) {
        Object.defineProperty(m, M, Object.getOwnPropertyDescriptor(I, M));
      });
    }
    return m;
  }
  function x(m, p, I) {
    var M;
    return (p = typeof (M = function(E, z) {
      if (typeof E != "object" || !E)
        return E;
      var G = E[Symbol.toPrimitive];
      if (G !== void 0) {
        var J = G.call(E, z || "default");
        if (typeof J != "object")
          return J;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (z === "string" ? String : Number)(E);
    }(p, "string")) == "symbol" ? M : String(M)) in m ? Object.defineProperty(m, p, { value: I, enumerable: !0, configurable: !0, writable: !0 }) : m[p] = I, m;
  }
  var k = (m) => {
    var [p, I] = (0, s.oT)(!1);
    (0, s.YB)(() => {
      var E = d.events.on("error", (z) => {
        (z == null ? void 0 : z.source) === "checkout" && (z == null ? void 0 : z.type) === "network" && I(!0);
      });
      return () => {
        E == null || E.off();
      };
    }, []);
    var M = (0, n.cF)({ message: "Checkout.ErrorBanner.genericMessage", label: "Checkout.ErrorBanner.dismissLabel" });
    return p ? (0, $.im)(P._, j(j({}, m), {}, { "data-testid": "error-banner", icon: (0, $.im)(S.G, { source: L.default }), message: (0, $.im)("span", { children: M.message }), onDismiss: () => {
      I(!1);
    }, variant: "warning" })) : null;
  };
}, 2408: (te, T, e) => {
  e.d(T, { u: () => B });
  var s = e(9496), n = e(4628), d = e(2216), P = e(2460), S = e(8412), L = () => (0, S.YH)("p", { className: "checkout-login-form__signIn", children: [(0, S.im)(P.a, { id: "Checkout.LoginForm.account" }), (0, S.im)("a", { className: "checkout-login-form__link", href: "#", target: "_blank", rel: "noreferrer", children: (0, S.im)(P.a, { id: "Checkout.LoginForm.signIn" }) })] }), $ = e(1704), A = e(7912), j = (f) => {
    var { value: _, error: D, hint: R, onChange: Y, onBlur: W, onInvalid: U } = f, K = (0, P.cF)({ LoginFormLabel: "Checkout.LoginForm.ariaLabel", LoginFormFloatingLabel: "Checkout.LoginForm.floatingLabel", LoginFormPlaceholder: "Checkout.LoginForm.placeholder" });
    return (0, S.im)($.I, { size: "medium", error: D, hint: R, children: (0, S.im)(A.E, { id: "customer-email", name: "userName", type: "email", value: _, autocomplete: "email", placeholder: K.LoginFormPlaceholder, floatingLabel: K.LoginFormFloatingLabel, onChange: Y, onBlur: W, onInvalid: U, required: !0, "aria-label": K.LoginFormLabel, "aria-required": !0 }) });
  }, x = e(5536), k = e.n(x), m = e(7008), p = e.n(m), I = e(1496), M = e.n(I), E = e(9356), z = e.n(E), G = e(9904), J = e.n(G), Z = e(6004), Q = { attributes: { "data-dropin": "storefront-checkout", "data-sdk": "0.22.0" }, styleTagTransform: function(f, _) {
    var l;
    window._loadedStyles = window._loadedStyles ?? {};
    const D = (l = f == null ? void 0 : f.match(/^\.dropin-(\w+)/)) == null ? void 0 : l[1], R = _.getAttribute("data-sdk"), Y = D ? `sdk/${D}` : _.getAttribute("data-dropin");
    _.setAttribute("data-dropin", Y), _.removeAttribute("data-sdk");
    const W = window._loadedStyles[Y];
    if (W) {
      const c = function(O, N) {
        const [F, V] = O.split("-"), [ee, ne] = N.split("-"), oe = [...F.split("."), V], pe = [...ee.split("."), ne], _e = parseInt(oe[0], 10), ae = parseInt(pe[0], 10);
        if (_e !== ae)
          return _e > ae ? O : N;
        const Se = parseInt(oe[1], 10), le = parseInt(pe[1], 10);
        if (Se !== le)
          return Se > le ? O : N;
        const se = parseInt(oe[2], 10), fe = parseInt(pe[2], 10);
        if (se !== fe)
          return se > fe ? O : N;
        if (oe[3] && pe[3]) {
          const be = /(alpha|beta)(.*)/, ue = oe[3].match(be), de = pe[3].match(be), we = ue[1], xe = de[1], Ie = parseInt(ue[2], 10), Ae = parseInt(de[2], 10);
          if (we === xe)
            return Ie > Ae ? O : N;
          if (we === "alpha" && xe === "beta")
            return N;
          if (we === "beta" && xe === "alpha")
            return O;
        }
        return oe[3] ? N : O;
      }(R, W.sdk);
      if (!D || D && c === W.sdk) {
        const O = W.style.textContent;
        W.style.textContent = `${O}
/* --- MERGED --- */
${f}`;
      } else
        D && c !== W.sdk && (W.style.textContent = `/* --- UPGRADED --- */
${f}`);
      return void _.remove();
    }
    _.textContent = f, window._loadedStyles[Y] = { sdk: R, core: D, style: _ };
    const U = document.querySelector("head"), { lastDropinStyleInjected: K, lastSDKStyleInjected: H } = window._loadedStyles;
    D ? (H ? U.insertBefore(_, H.nextSibling) : U.insertBefore(_, U.firstChild), window._loadedStyles.lastSDKStyleInjected = _) : (K ? U.insertBefore(_, K.nextSibling) : H ? U.insertBefore(_, H.nextSibling) : U.insertBefore(_, U.firstChild), window._loadedStyles.lastDropinStyleInjected = _);
  } };
  Q.setAttributes = z(), Q.insert = M().bind(null, "head"), Q.domAPI = p(), Q.insertStyleElement = J(), k()(Z.c, Q), Z.c && Z.c.locals && Z.c.locals;
  var q = e(4944), w = ["name", "className", "currentEmail", "hint", "error", "onEmailChange", "onEmailBlur", "onEmailInvalid"];
  function b(f, _) {
    var D = Object.keys(f);
    if (Object.getOwnPropertySymbols) {
      var R = Object.getOwnPropertySymbols(f);
      _ && (R = R.filter(function(Y) {
        return Object.getOwnPropertyDescriptor(f, Y).enumerable;
      })), D.push.apply(D, R);
    }
    return D;
  }
  function o(f) {
    for (var _ = 1; _ < arguments.length; _++) {
      var D = arguments[_] != null ? arguments[_] : {};
      _ % 2 ? b(Object(D), !0).forEach(function(R) {
        v(f, R, D[R]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(f, Object.getOwnPropertyDescriptors(D)) : b(Object(D)).forEach(function(R) {
        Object.defineProperty(f, R, Object.getOwnPropertyDescriptor(D, R));
      });
    }
    return f;
  }
  function v(f, _, D) {
    var R;
    return (_ = typeof (R = function(Y, W) {
      if (typeof Y != "object" || !Y)
        return Y;
      var U = Y[Symbol.toPrimitive];
      if (U !== void 0) {
        var K = U.call(Y, W || "default");
        if (typeof K != "object")
          return K;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (W === "string" ? String : Number)(Y);
    }(_, "string")) == "symbol" ? R : String(R)) in f ? Object.defineProperty(f, _, { value: D, enumerable: !0, configurable: !0, writable: !0 }) : f[_] = D, f;
  }
  function C(f, _) {
    if (f == null)
      return {};
    var D, R, Y = function(U, K) {
      if (U == null)
        return {};
      var H, l, c = {}, O = Object.keys(U);
      for (l = 0; l < O.length; l++)
        H = O[l], K.indexOf(H) >= 0 || (c[H] = U[H]);
      return c;
    }(f, _);
    if (Object.getOwnPropertySymbols) {
      var W = Object.getOwnPropertySymbols(f);
      for (R = 0; R < W.length; R++)
        D = W[R], _.indexOf(D) >= 0 || Object.prototype.propertyIsEnumerable.call(f, D) && (Y[D] = f[D]);
    }
    return Y;
  }
  var r = (f) => {
    var { name: _, className: D, currentEmail: R, hint: Y, error: W = null, onEmailChange: U, onEmailBlur: K, onEmailInvalid: H } = f, l = C(f, w), c = (0, P.cF)({ Title: "Checkout.LoginForm.title" });
    return (0, S.YH)("div", o(o({}, l), {}, { className: (0, q.i)(["checkout-login-form", D]), children: [(0, S.YH)("div", { className: "checkout-login-form__heading", children: [(0, S.im)(d._, { level: 2, className: "checkout-login-form__title", children: c.Title }), (0, S.im)(L, {})] }), (0, S.im)("div", { className: "checkout-login-form__content", children: (0, S.YH)("form", { className: (0, q.i)(["dropin-login-form__form", D]), name: _, noValidate: !0, children: [(0, S.im)("button", { type: "submit", disabled: !0, style: "display: none", "aria-hidden": "true" }), (0, S.im)(j, { value: R || void 0, error: W || "", hint: Y, onChange: U, onBlur: K, onInvalid: H })] }) })] }));
  }, t = e(8596), u = e(2248), h = e(5668), i = ["className", "email"];
  function a(f, _) {
    var D = Object.keys(f);
    if (Object.getOwnPropertySymbols) {
      var R = Object.getOwnPropertySymbols(f);
      _ && (R = R.filter(function(Y) {
        return Object.getOwnPropertyDescriptor(f, Y).enumerable;
      })), D.push.apply(D, R);
    }
    return D;
  }
  function g(f, _, D) {
    var R;
    return (_ = typeof (R = function(Y, W) {
      if (typeof Y != "object" || !Y)
        return Y;
      var U = Y[Symbol.toPrimitive];
      if (U !== void 0) {
        var K = U.call(Y, W || "default");
        if (typeof K != "object")
          return K;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (W === "string" ? String : Number)(Y);
    }(_, "string")) == "symbol" ? R : String(R)) in f ? Object.defineProperty(f, _, { value: D, enumerable: !0, configurable: !0, writable: !0 }) : f[_] = D, f;
  }
  function y(f, _) {
    if (f == null)
      return {};
    var D, R, Y = function(U, K) {
      if (U == null)
        return {};
      var H, l, c = {}, O = Object.keys(U);
      for (l = 0; l < O.length; l++)
        H = O[l], K.indexOf(H) >= 0 || (c[H] = U[H]);
      return c;
    }(f, _);
    if (Object.getOwnPropertySymbols) {
      var W = Object.getOwnPropertySymbols(f);
      for (R = 0; R < W.length; R++)
        D = W[R], _.indexOf(D) >= 0 || Object.prototype.propertyIsEnumerable.call(f, D) && (Y[D] = f[D]);
    }
    return Y;
  }
  var B = (f) => {
    var { className: _, email: D = null } = f, R = y(f, i), Y = (0, P.cF)({ LoginFormInvalidEmailError: "Checkout.LoginForm.invalidEmailError", LoginFormMissingEmailError: "Checkout.LoginForm.missingEmailError", LoginFormEmailExists: "Checkout.LoginForm.emailExists" }), { data: W } = h.cartSignal.value, U = (W == null ? void 0 : W.id) || "", K = !!W, [H, l] = (0, t.oT)(!1), [c, O] = (0, t.oT)(D), [N, F] = (0, t.oT)(), [V, ee] = (0, t.oT)(!0), ne = (oe) => oe.valid ? null : oe.valueMissing ? Y.LoginFormMissingEmailError : Y.LoginFormInvalidEmailError;
    return !H && K && (l(!0), O((W == null ? void 0 : W.email) || D)), (0, t.YB)(() => {
      if (c && !N && (W == null ? void 0 : W.email) !== c) {
        var oe = setTimeout(() => {
          (0, s.s)(c).then((pe) => {
            ee(pe), (0, n.S)({ cartId: U, email: c }).catch((_e) => {
              console.log("set email failed", _e);
            });
          }).catch((pe) => {
            console.log(pe), F(Y.LoginFormInvalidEmailError), ee(!0);
          });
        }, 1e3);
        return () => {
          oe && clearTimeout(oe);
        };
      }
    }, [c, N, Y.LoginFormInvalidEmailError, W == null ? void 0 : W.email, U]), (0, S.im)(r, function(oe) {
      for (var pe = 1; pe < arguments.length; pe++) {
        var _e = arguments[pe] != null ? arguments[pe] : {};
        pe % 2 ? a(Object(_e), !0).forEach(function(ae) {
          g(oe, ae, _e[ae]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(oe, Object.getOwnPropertyDescriptors(_e)) : a(Object(_e)).forEach(function(ae) {
          Object.defineProperty(oe, ae, Object.getOwnPropertyDescriptor(_e, ae));
        });
      }
      return oe;
    }({ className: _, currentEmail: c, error: N, hint: V ? "" : Y.LoginFormEmailExists, name: u.i, onEmailBlur: (oe) => {
      var { validity: pe } = oe.target;
      F(ne(pe));
    }, onEmailChange: (oe) => {
      var { value: pe } = oe.target;
      O(pe), F(null), ee(!0);
    }, onEmailInvalid: (oe) => {
      var { validity: pe } = oe.target;
      F(ne(pe));
    } }, R));
  };
}, 2248: (te, T, e) => {
  e.d(T, { i: () => s });
  var s = "login-form";
}, 4112: (te, T, e) => {
  e.d(T, { q: () => v });
  var s = e(4944), n = e(5536), d = e.n(n), P = e(7008), S = e.n(P), L = e(1496), $ = e.n(L), A = e(9356), j = e.n(A), x = e(9904), k = e.n(x), m = e(4636), p = { attributes: { "data-dropin": "storefront-checkout", "data-sdk": "0.22.0" }, styleTagTransform: function(C, r) {
    var B;
    window._loadedStyles = window._loadedStyles ?? {};
    const t = (B = C == null ? void 0 : C.match(/^\.dropin-(\w+)/)) == null ? void 0 : B[1], u = r.getAttribute("data-sdk"), h = t ? `sdk/${t}` : r.getAttribute("data-dropin");
    r.setAttribute("data-dropin", h), r.removeAttribute("data-sdk");
    const i = window._loadedStyles[h];
    if (i) {
      const f = function(_, D) {
        const [R, Y] = _.split("-"), [W, U] = D.split("-"), K = [...R.split("."), Y], H = [...W.split("."), U], l = parseInt(K[0], 10), c = parseInt(H[0], 10);
        if (l !== c)
          return l > c ? _ : D;
        const O = parseInt(K[1], 10), N = parseInt(H[1], 10);
        if (O !== N)
          return O > N ? _ : D;
        const F = parseInt(K[2], 10), V = parseInt(H[2], 10);
        if (F !== V)
          return F > V ? _ : D;
        if (K[3] && H[3]) {
          const ee = /(alpha|beta)(.*)/, ne = K[3].match(ee), oe = H[3].match(ee), pe = ne[1], _e = oe[1], ae = parseInt(ne[2], 10), Se = parseInt(oe[2], 10);
          if (pe === _e)
            return ae > Se ? _ : D;
          if (pe === "alpha" && _e === "beta")
            return D;
          if (pe === "beta" && _e === "alpha")
            return _;
        }
        return K[3] ? D : _;
      }(u, i.sdk);
      if (!t || t && f === i.sdk) {
        const _ = i.style.textContent;
        i.style.textContent = `${_}
/* --- MERGED --- */
${C}`;
      } else
        t && f !== i.sdk && (i.style.textContent = `/* --- UPGRADED --- */
${C}`);
      return void r.remove();
    }
    r.textContent = C, window._loadedStyles[h] = { sdk: u, core: t, style: r };
    const a = document.querySelector("head"), { lastDropinStyleInjected: g, lastSDKStyleInjected: y } = window._loadedStyles;
    t ? (y ? a.insertBefore(r, y.nextSibling) : a.insertBefore(r, a.firstChild), window._loadedStyles.lastSDKStyleInjected = r) : (g ? a.insertBefore(r, g.nextSibling) : y ? a.insertBefore(r, y.nextSibling) : a.insertBefore(r, a.firstChild), window._loadedStyles.lastDropinStyleInjected = r);
  } };
  p.setAttributes = j(), p.insert = $().bind(null, "head"), p.domAPI = S(), p.insertStyleElement = k(), d()(m.c, p), m.c && m.c.locals && m.c.locals;
  var I = e(492), M = e(2460), E = e(8412), z = ["className", "children"];
  function G(C, r) {
    if (C == null)
      return {};
    var t, u, h = function(a, g) {
      if (a == null)
        return {};
      var y, B, f = {}, _ = Object.keys(a);
      for (B = 0; B < _.length; B++)
        y = _[B], g.indexOf(y) >= 0 || (f[y] = a[y]);
      return f;
    }(C, r);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(C);
      for (u = 0; u < i.length; u++)
        t = i[u], r.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(C, t) && (h[t] = C[t]);
    }
    return h;
  }
  var J = (C) => {
    var { className: r, children: t } = C, u = G(C, z), { onClick: h = () => {
    }, isLoading: i } = u;
    return (0, E.im)("div", { className: (0, s.i)(["checkout-place-order", r]), children: (0, E.im)(I.q, { className: (0, s.i)(["checkout-place-order__button", r]), size: "medium", variant: "primary", type: "submit", onClick: h, disabled: i, children: (0, E.im)(M.a, { id: "Checkout.PlaceOrder.button" }) }, "placeOrder") });
  }, Z = e(2248), Q = e(8996), q = e(6476), w = e(5668);
  function b(C, r, t, u, h, i, a) {
    try {
      var g = C[i](a), y = g.value;
    } catch (B) {
      return void t(B);
    }
    g.done ? r(y) : Promise.resolve(y).then(u, h);
  }
  var o = [Z.i, Q.I, q.M], v = (C) => {
    var { onClick: r, handleServerError: t } = C, u = function() {
      var h, i = (h = function* () {
        if ((() => {
          var a, g = (Array.from(document.forms) || []).filter((B) => o.includes(B.name)).filter((B) => B.offsetParent !== null).filter((B) => !B.checkValidity()), y = g.length === 0;
          return y || (a = g[0].querySelector(":invalid")) && (a.scrollIntoView({ behavior: "smooth" }), a.focus()), y;
        })())
          try {
            yield r();
          } catch (a) {
            t(a);
          }
      }, function() {
        var a = this, g = arguments;
        return new Promise(function(y, B) {
          var f = h.apply(a, g);
          function _(R) {
            b(f, y, B, _, D, "next", R);
          }
          function D(R) {
            b(f, y, B, _, D, "throw", R);
          }
          _(void 0);
        });
      });
      return function() {
        return i.apply(this, arguments);
      };
    }();
    return (0, E.im)(J, { onClick: u, isLoading: w.cartSignal.value.pending });
  };
}, 4468: (te, T, e) => {
  e.d(T, { S: () => M });
  var s = e(9296), n = e(2532), d = e(8488), P = e(8996), S = e(2796), L = e(5668), $ = e(9488), A = e(8628), j = e(8412), x = ["preselectedFields"];
  function k(E, z) {
    var G = Object.keys(E);
    if (Object.getOwnPropertySymbols) {
      var J = Object.getOwnPropertySymbols(E);
      z && (J = J.filter(function(Z) {
        return Object.getOwnPropertyDescriptor(E, Z).enumerable;
      })), G.push.apply(G, J);
    }
    return G;
  }
  function m(E) {
    for (var z = 1; z < arguments.length; z++) {
      var G = arguments[z] != null ? arguments[z] : {};
      z % 2 ? k(Object(G), !0).forEach(function(J) {
        p(E, J, G[J]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(E, Object.getOwnPropertyDescriptors(G)) : k(Object(G)).forEach(function(J) {
        Object.defineProperty(E, J, Object.getOwnPropertyDescriptor(G, J));
      });
    }
    return E;
  }
  function p(E, z, G) {
    var J;
    return (z = typeof (J = function(Z, Q) {
      if (typeof Z != "object" || !Z)
        return Z;
      var q = Z[Symbol.toPrimitive];
      if (q !== void 0) {
        var w = q.call(Z, Q || "default");
        if (typeof w != "object")
          return w;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (Q === "string" ? String : Number)(Z);
    }(z, "string")) == "symbol" ? J : String(J)) in E ? Object.defineProperty(E, z, { value: G, enumerable: !0, configurable: !0, writable: !0 }) : E[z] = G, E;
  }
  function I(E, z) {
    if (E == null)
      return {};
    var G, J, Z = function(q, w) {
      if (q == null)
        return {};
      var b, o, v = {}, C = Object.keys(q);
      for (o = 0; o < C.length; o++)
        b = C[o], w.indexOf(b) >= 0 || (v[b] = q[b]);
      return v;
    }(E, z);
    if (Object.getOwnPropertySymbols) {
      var Q = Object.getOwnPropertySymbols(E);
      for (J = 0; J < Q.length; J++)
        G = Q[J], z.indexOf(G) >= 0 || Object.prototype.propertyIsEnumerable.call(E, G) && (Z[G] = E[G]);
    }
    return Z;
  }
  var M = (E) => {
    var { preselectedFields: z } = E, G = I(E, x), { data: J } = L.cartSignal.value, Z = (J == null ? void 0 : J.id) || "", Q = $.isBillToShippingSignal.value.checked, q = (0, S.kZ)((w) => (0, s.Eh)({ signal: w.signal, cartId: Z, address: (0, s.ek)(w.address) }).then(() => {
      if (Q)
        return (0, n.W)({ cartId: Z, input: { same_as_shipping: !0 } });
    }), [Z, Q]);
    return (0, j.im)(d.i, m(m({}, G), {}, { addressType: A.y.SHIPPING, headingId: "Checkout.ShippingAddress.title", name: P.I, preselectedFields: z, saveAddressHandler: q }));
  };
}, 8996: (te, T, e) => {
  e.d(T, { I: () => s });
  var s = "shipping_address";
}, 9960: (te, T, e) => {
  e.d(T, { c: () => S });
  var s = e(6008), n = e.n(s), d = e(2076), P = e.n(d)()(n());
  P.push([te.id, `.checkout-bill-to-shipping-address{
  display:grid;
}

.checkout-bill-to-shipping-address label{
  font:var(--type-body-2-default-font);
  letter-spacing:var(--type-body-2-default-letter-spacing);
  gap:0;
}
`, ""]);
  const S = P;
}, 6630: (te, T, e) => {
  e.d(T, { c: () => S });
  var s = e(6008), n = e.n(s), d = e(2076), P = e.n(d)()(n());
  P.push([te.id, `.checkout__content{
  display:grid;
  align-items:start;
  grid-template-columns:repeat(var(--grid-4-columns), 1fr);
  grid-template-areas:'main aside';
  column-gap:var(--grid-4-gutters);
}

.checkout__main{
  display:grid;
  grid-area:main;
  grid-column:1 / span 7;
  row-gap:var(--spacing-xbig);
}

.checkout__aside{
  display:grid;
  grid-area:aside;
  grid-column:9 / span 4;
  row-gap:var(--spacing-xbig);
}

.checkout__banner{
  margin-bottom:var(--spacing-xbig);
}

.checkout-title{
  color:var(--color-neutral-800);
  font:var(--type-headline-1-font);
  letter-spacing:var(--type-headline-1-letter-spacing);
  border-bottom:var(--shape-border-width-3) solid var(--color-neutral-400);
  padding-bottom:var(--spacing-xsmall);
  padding-top:var(--spacing-small);
  margin:0;
}

@media only screen and (min-width: 320px) and (max-width: 768px){
  .checkout__content{
    grid-template-columns:1fr;
    grid-template-areas:'header' 'cartSummary' 'login' 'shippingAddress' 'billToShippingAddress' 'shippingMethods' 'paymentMethods' 'billingAddress' 'orderSummary' 'placeOrder';
    row-gap:var(--grid-1-gutters);
  }

  .checkout-cart-summary{
    grid-area:cartSummary;
  }

  .checkout-order-summary{
    grid-area:orderSummary;
  }
}
`, ""]);
  const S = P;
}, 6756: (te, T, e) => {
  e.d(T, { c: () => S });
  var s = e(6008), n = e.n(s), d = e(2076), P = e.n(d)()(n());
  P.push([te.id, `
`, ""]);
  const S = P;
}, 6004: (te, T, e) => {
  e.d(T, { c: () => S });
  var s = e(6008), n = e.n(s), d = e(2076), P = e.n(d)()(n());
  P.push([te.id, `.checkout-login-form{
    display:grid;
}

.checkout-login-form__heading{
    display:grid;
    grid-template-columns:repeat(2, 1fr [col-start]);
    grid-auto-rows:max-content;
}

.checkout-login-form__content{
    grid-auto-rows:max-content;
}

.checkout-login-form__title{
    grid-column-start:1;
    color:var(--color-neutral-800);
    font:var(--type-headline-2-default-font);
    letter-spacing:var(--type-headline-2-default-letter-spacing);
    margin:0;
}

.checkout-login-form__signIn{
    grid-column-start:2;
    color:var(--color-neutral-800);
    font:var(--type-body-2-default-font);
    letter-spacing:var(--type-body-2-default-letter-spacing);
    margin-bottom:var(--spacing-medium);
    align-self:flex-end;
    justify-self:flex-end;
    margin-top:var(--spacing-xxsmall);
}

a.checkout-login-form__link{
    font:var(--type-body-2-strong-font);
    margin-left:var(--spacing-xxsmall);
}
@media only screen and (min-width:320px) and (max-width: 768px){
    .checkout-login-form__heading{
        grid-template-columns:repeat(1, 1fr [col-start]);
        grid-template-rows:1fr;
    }

    .checkout-login-form__signIn{
        grid-column-start:1;
        align-self:flex-start;
        justify-self:flex-start;
        padding-top:var(--spacing-xsmall);
    }
}
`, ""]);
  const S = P;
}, 6192: (te, T, e) => {
  e.d(T, { c: () => S });
  var s = e(6008), n = e.n(s), d = e(2076), P = e.n(d)()(n());
  P.push([te.id, `.checkout-out-of-stock{
    display:grid;
}

.checkout-out-of-stock__button{
    margin-top:var(--spacing-medium);
    align-self:flex-end;
    justify-self:flex-end;
}

.checkout-out-of-stock__icon .OrderError_svg__error-icon{
    color:var(--color-warning-500);
}
`, ""]);
  const S = P;
}, 4636: (te, T, e) => {
  e.d(T, { c: () => S });
  var s = e(6008), n = e.n(s), d = e(2076), P = e.n(d)()(n());
  P.push([te.id, `.checkout-place-order{
    display:grid;
}

.checkout-place-order__button{
    align-self:flex-end;
    justify-self:flex-end;
}

@media only screen and (min-width:320px) and (max-width: 768px){
    .checkout-place-order__button{
        align-self:center;
        justify-self:stretch;
    }
}
`, ""]);
  const S = P;
}, 728: (te, T, e) => {
  e.d(T, { c: () => S });
  var s = e(6008), n = e.n(s), d = e(2076), P = e.n(d)()(n());
  P.push([te.id, `.checkout-server-error{
    position:relative;
    text-align:center;
    display:grid;
}

.checkout-server-error__icon .OrderError_svg__error-icon{
  color:var(--color-alert-500);
}

.checkout-server-error a{
  font:var(--type-body-2-strong-font);
  letter-spacing:var(--type-body-2-strong-letter-spacing);
}
`, ""]);
  const S = P;
}, 8122: (te, T, e) => {
  te.exports = ((s) => {
    var n = {};
    return e.d(n, s), n;
  })({ events: () => _t });
}, 8616: (te, T, e) => {
  te.exports = ((s) => {
    var n = {};
    return e.d(n, s), n;
  })({ FetchGraphQL: () => Ot });
} };
Fe.C(kt);
Fe.C(Mt);
Fe.C(or);
Fe.C(cr);
Fe.C(Bt);
Fe.C(fr);
Fe.C(br);
Fe.C(wr);
Fe.C(xr);
Fe.C(St);
Fe.C(Dt);
Fe.C(Tt);
Fe.C(Cr);
Fe.C(Ar);
Fe.C($r);
Fe.C(At);
Fe.C(Gr);
Fe.C(Rr);
Fe.C(Yt);
var Ct, xt = (Ct = 8028, Fe(Fe.s = Ct)), Vr = xt.s5, Zr = xt.cv, Ft = xt.cp;
async function Xr(te) {
  const T = sessionStorage.getItem("DROPINS_CART_ID") || "";
  return Gt.register(Nt, {}), _t.on("checkout/order", (e) => {
    const s = encodeURIComponent(e.token);
    window.location.replace(`/order-confirmation?orderRef=${s}`);
  }), qt.render(Ft, {
    cartId: T,
    routeHome: () => "/",
    routeCart: () => "/cart",
    slots: {
      PaymentMethods: async (e) => {
        e.addPaymentMethodHandler("checkmo", {
          render: (s, n) => {
            n && (n.innerHTML = "");
          }
        });
      }
    }
  })(te);
}
export {
  Xr as default
};
