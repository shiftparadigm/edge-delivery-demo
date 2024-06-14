import { t as v } from "./fetch-graphql-DRbbdkaK.js";
const I = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get Initializer() {
    return W;
  },
  get id() {
    return k;
  },
  get ids() {
    return H;
  },
  get initializers() {
    return q;
  },
  get modules() {
    return T;
  }
}, Symbol.toStringTag, { value: "Module" })), k = 865, H = [865], T = { 173: (A, _, S) => {
  S.d(_, { H: () => D, W: () => o });
  class z {
    constructor(e) {
      this.config = e;
    }
    getConfig() {
      return this.config;
    }
    setConfig(e) {
      this.config = e;
    }
  }
  var E = new class {
    get map() {
      return this._map;
    }
    set map(n) {
      this._map = n;
    }
    getMethods() {
      return { setMap: (n) => {
        this.map = n;
      }, getMap: () => this.map };
    }
  }(), { setMap: K, getMap: B } = E.getMethods(), C = ["imageParamsKeyMap"];
  function h(n, e) {
    var i = Object.keys(n);
    if (Object.getOwnPropertySymbols) {
      var t = Object.getOwnPropertySymbols(n);
      e && (t = t.filter(function(r) {
        return Object.getOwnPropertyDescriptor(n, r).enumerable;
      })), i.push.apply(i, t);
    }
    return i;
  }
  function y(n) {
    for (var e = 1; e < arguments.length; e++) {
      var i = arguments[e] != null ? arguments[e] : {};
      e % 2 ? h(Object(i), !0).forEach(function(t) {
        l(n, t, i[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : h(Object(i)).forEach(function(t) {
        Object.defineProperty(n, t, Object.getOwnPropertyDescriptor(i, t));
      });
    }
    return n;
  }
  function l(n, e, i) {
    var t;
    return (e = typeof (t = function(r, s) {
      if (typeof r != "object" || !r)
        return r;
      var a = r[Symbol.toPrimitive];
      if (a !== void 0) {
        var g = a.call(r, "string");
        if (typeof g != "object")
          return g;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(r);
    }(e)) == "symbol" ? t : String(t)) in n ? Object.defineProperty(n, e, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : n[e] = i, n;
  }
  class D {
    constructor(e) {
      var { init: i, listeners: t } = e;
      l(this, "_listeners", []), l(this, "config", new z({})), this.listeners = (r) => (this._listeners.forEach((s) => s.off()), this._listeners = t(r)), this.init = (r) => {
        var s = r, { imageParamsKeyMap: a } = s, g = function(c, O) {
          if (c == null)
            return {};
          var u, p, d = function(b, x) {
            if (b == null)
              return {};
            var m, f, j = {}, w = Object.keys(b);
            for (f = 0; f < w.length; f++)
              m = w[f], x.indexOf(m) >= 0 || (j[m] = b[m]);
            return j;
          }(c, O);
          if (Object.getOwnPropertySymbols) {
            var P = Object.getOwnPropertySymbols(c);
            for (p = 0; p < P.length; p++)
              u = P[p], O.indexOf(u) >= 0 || Object.prototype.propertyIsEnumerable.call(c, u) && (d[u] = c[u]);
          }
          return d;
        }(s, C);
        return this.config.setConfig(y(y({}, this.config.getConfig()), g)), K(a), i(r);
      };
    }
  }
  class o {
    static register(e, i) {
      var t, r;
      o._mounted && ((t = e.listeners) === null || t === void 0 || t.call(e, i), (r = e.init) === null || r === void 0 || r.call(e, i)), o._initializers.push([e, i]);
    }
    static mount() {
      var e, i;
      o._mounted = !0, (e = o._initializers) === null || e === void 0 || e.forEach((t) => {
        var r, [s, a] = t;
        (r = s.listeners) === null || r === void 0 || r.call(s, a);
      }), (i = o._initializers) === null || i === void 0 || i.forEach((t) => {
        var r, [s, a] = t;
        (r = s.init) === null || r === void 0 || r.call(s, y({ imageParamsKeyMap: o._imageParamsKeyMap }, a));
      });
    }
    static setImageParamKeys(e) {
      o._imageParamsKeyMap = e;
    }
  }
  l(o, "_initializers", []), l(o, "_mounted", !1), l(o, "_imageParamsKeyMap", void 0);
} };
v.C(I);
var M = v(v.s = 173), W = M.H, q = M.W;
export {
  q as n
};
