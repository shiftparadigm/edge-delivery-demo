const T = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get events() {
    return N;
  },
  get id() {
    return L;
  },
  get ids() {
    return z;
  },
  get modules() {
    return A;
  }
}, Symbol.toStringTag, { value: "Module" })), $ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get FetchGraphQL() {
    return I;
  },
  get fetchGraphQl() {
    return J;
  },
  get getConfig() {
    return W;
  },
  get id() {
    return K;
  },
  get ids() {
    return R;
  },
  get modules() {
    return q;
  },
  get removeFetchGraphQlHeader() {
    return X;
  },
  get setEndpoint() {
    return Z;
  },
  get setFetchGraphQlHeader() {
    return k;
  },
  get setFetchGraphQlHeaders() {
    return U;
  }
}, Symbol.toStringTag, { value: "Module" }));
var C, x = {}, F = {};
function o(u) {
  var r = F[u];
  if (r !== void 0)
    return r.exports;
  var n = F[u] = { exports: {} };
  return x[u](n, n.exports, o), n.exports;
}
o.m = x, o.d = (u, r) => {
  for (var n in r)
    o.o(r, n) && !o.o(u, n) && Object.defineProperty(u, n, { enumerable: !0, get: r[n] });
}, o.o = (u, r) => Object.prototype.hasOwnProperty.call(u, r);
C = { 121: 0 }, o.C = (u) => {
  var r, n, { ids: y, modules: Q, runtime: l } = u, f = 0;
  for (r in Q)
    o.o(Q, r) && (o.m[r] = Q[r]);
  for (l && l(o); f < y.length; f++)
    n = y[f], o.o(C, n) && C[n] && C[n][0](), C[y[f]] = 0;
};
const L = 248, z = [248], A = { 846: (u, r, n) => {
  function y(f, d, s) {
    var i;
    return (d = typeof (i = function(a, P) {
      if (typeof a != "object" || !a)
        return a;
      var E = a[Symbol.toPrimitive];
      if (E !== void 0) {
        var _ = E.call(a, "string");
        if (typeof _ != "object")
          return _;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(a);
    }(d)) == "symbol" ? i : String(i)) in f ? Object.defineProperty(f, d, { value: s, enumerable: !0, configurable: !0, writable: !0 }) : f[d] = s, f;
  }
  n.d(r, { A: () => l });
  var Q = Date.now().toString(36).substring(2);
  class l {
    static on(d, s, i) {
      if (typeof BroadcastChannel < "u") {
        var a = new BroadcastChannel("ElsieSDK/EventBus");
        if (i != null && i.eager) {
          var P = this._lastEvent[d];
          P && s(P.payload);
        }
        return a.addEventListener("message", (E) => {
          var { data: _ } = E;
          this._identifier && this._identifier !== _.identifier || _.event === d && s(_.payload);
        }), window.addEventListener("beforeunload", () => {
          a.close();
        }), { off() {
          a.close();
        } };
      }
    }
    static emit(d, s) {
      if (typeof BroadcastChannel < "u") {
        var i = new BroadcastChannel("ElsieSDK/EventBus");
        i.postMessage({ event: d, identifier: this._identifier, payload: s }), this._lastEvent[d] = { payload: s }, i.close();
      }
    }
    static enableLogger(d) {
      var s;
      typeof BroadcastChannel < "u" && ((s = this._logger) === null || s === void 0 || s.close(), this._logger = null, d !== !1 && (this._logger = new BroadcastChannel("ElsieSDK/EventBus"), this._logger.addEventListener("message", (i) => {
        var { data: a } = i;
        this._identifier && this._identifier !== a.identifier || (console.group("📡 Event (".concat(a.identifier, ") ➡ ").concat(a.event)), console.log(a.payload), console.groupEnd());
      }), window.addEventListener("beforeunload", () => {
        var i;
        (i = this._logger) === null || i === void 0 || i.close();
      })));
    }
  }
  y(l, "_identifier", Q), y(l, "_logger", null), y(l, "_lastEvent", {});
} };
o.C(T);
var N = o(o.s = 846).A;
const K = 85, R = [85], q = { 597: (u, r, n) => {
  function y(v, t, e, c, g, p, m) {
    try {
      var b = v[p](m), h = b.value;
    } catch (G) {
      return void e(G);
    }
    b.done ? t(h) : Promise.resolve(h).then(c, g);
  }
  function Q(v, t) {
    var e = Object.keys(v);
    if (Object.getOwnPropertySymbols) {
      var c = Object.getOwnPropertySymbols(v);
      t && (c = c.filter(function(g) {
        return Object.getOwnPropertyDescriptor(v, g).enumerable;
      })), e.push.apply(e, c);
    }
    return e;
  }
  function l(v) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t] != null ? arguments[t] : {};
      t % 2 ? Q(Object(e), !0).forEach(function(c) {
        var g, p, m, b;
        g = v, p = c, m = e[c], (p = typeof (b = function(h, G) {
          if (typeof h != "object" || !h)
            return h;
          var O = h[Symbol.toPrimitive];
          if (O !== void 0) {
            var j = O.call(h, "string");
            if (typeof j != "object")
              return j;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(h);
        }(p)) == "symbol" ? b : String(b)) in g ? Object.defineProperty(g, p, { value: m, enumerable: !0, configurable: !0, writable: !0 }) : g[p] = m;
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(v, Object.getOwnPropertyDescriptors(e)) : Q(Object(e)).forEach(function(c) {
        Object.defineProperty(v, c, Object.getOwnPropertyDescriptor(e, c));
      });
    }
    return v;
  }
  n.d(r, { AZ: () => B, Cz: () => a, MR: () => P, Np: () => E, WI: () => i, Xx: () => _, zj: () => D });
  var f = { "Content-Type": "application/json", Accept: "application/json" };
  class d {
    get endpoint() {
      return this._endpoint;
    }
    get fetchGraphQlHeaders() {
      return this._fetchGraphQlHeaders;
    }
    setEndpoint(t) {
      this._endpoint = t;
    }
    setFetchGraphQlHeader(t, e) {
      this._fetchGraphQlHeaders = l(l({}, this.fetchGraphQlHeaders), {}, { [t]: e });
    }
    removeFetchGraphQlHeader(t) {
      var e;
      (e = this._fetchGraphQlHeaders) === null || e === void 0 || delete e[t];
    }
    setFetchGraphQlHeaders(t) {
      this._fetchGraphQlHeaders = l({}, t);
    }
    fetchGraphQl(t, e) {
      var c, g = this;
      return (c = function* () {
        var p, m = g.endpoint, b = g.fetchGraphQlHeaders;
        if (!m)
          throw Error('Missing "url"');
        var h, G = (p = e == null ? void 0 : e.method) !== null && p !== void 0 ? p : "POST", O = e == null ? void 0 : e.cache, j = e == null ? void 0 : e.signal, H = new URL(m), M = l(l({}, f), b);
        return G === "POST" && (h = JSON.stringify({ query: t, variables: e == null ? void 0 : e.variables })), G === "GET" && (H.searchParams.append("query", function(S) {
          return (S = (S = S.replace(/#.*/g, "")).replace(/\s+/g, " ")).trim();
        }(t)), e != null && e.variables && H.searchParams.append("variables", JSON.stringify(e.variables))), yield fetch(H, { method: G, headers: M, body: h, cache: O, signal: j }).then((S) => S.json());
      }, function() {
        var p = this, m = arguments;
        return new Promise(function(b, h) {
          var G = c.apply(p, m);
          function O(H) {
            y(G, b, h, O, j, "next", H);
          }
          function j(H) {
            y(G, b, h, O, j, "throw", H);
          }
          O(void 0);
        });
      })();
    }
    getConfig() {
      return { endpoint: this.endpoint, fetchGraphQlHeaders: this.fetchGraphQlHeaders };
    }
    getMethods() {
      return { setEndpoint: this.setEndpoint.bind(this), setFetchGraphQlHeader: this.setFetchGraphQlHeader.bind(this), removeFetchGraphQlHeader: this.removeFetchGraphQlHeader.bind(this), setFetchGraphQlHeaders: this.setFetchGraphQlHeaders.bind(this), fetchGraphQl: this.fetchGraphQl.bind(this), getConfig: this.getConfig.bind(this) };
    }
  }
  var s = new d();
  class i extends d {
    get endpoint() {
      var t;
      return (t = this._endpoint) !== null && t !== void 0 ? t : s.endpoint;
    }
    get fetchGraphQlHeaders() {
      return (this._endpoint ? this._fetchGraphQlHeaders : l(l({}, this._fetchGraphQlHeaders), s.fetchGraphQlHeaders)) || {};
    }
  }
  var { setEndpoint: a, setFetchGraphQlHeaders: P, setFetchGraphQlHeader: E, removeFetchGraphQlHeader: _, fetchGraphQl: B, getConfig: D } = s.getMethods();
} };
o.C($);
var w = o(o.s = 597), I = w.WI, J = w.AZ, W = w.zj, X = w.Xx, Z = w.Cz, k = w.Np, U = w.MR;
export {
  N as a,
  Z as h,
  I as n,
  o as t
};
