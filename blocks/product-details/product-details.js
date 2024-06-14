import { n as gt } from "../../initializer-BlD7JXpT.js";
import { addProductsToCart as yt } from "../../api-Dikv6K-n.js";
import { n as st, a as ct } from "../../fetch-graphql-DRbbdkaK.js";
import { getSkuFromUrl as wt } from "../../scripts/commerce.js";
import { getConfigValue as Je } from "../../scripts/configs.js";
const Ot = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get config() {
    return Et;
  },
  get fetchGraphQl() {
    return At;
  },
  get getConfig() {
    return Zt;
  },
  get getProductData() {
    return Nt;
  },
  get getRefinedProduct() {
    return Bt;
  },
  get id() {
    return It;
  },
  get ids() {
    return Ct;
  },
  get initialize() {
    return pt;
  },
  get modules() {
    return Dt;
  },
  get removeFetchGraphQlHeader() {
    return Mt;
  },
  get setEndpoint() {
    return ft;
  },
  get setFetchGraphQlHeader() {
    return Tt;
  },
  get setFetchGraphQlHeaders() {
    return bt;
  }
}, Symbol.toStringTag, { value: "Module" })), xt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get id() {
    return Ut;
  },
  get ids() {
    return Vt;
  },
  get modules() {
    return Ht;
  },
  get render() {
    return mt;
  }
}, Symbol.toStringTag, { value: "Module" })), St = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get ProductDetails() {
    return Wt;
  },
  get default() {
    return ht;
  },
  get id() {
    return Xt;
  },
  get ids() {
    return Gt;
  },
  get modules() {
    return Ft;
  }
}, Symbol.toStringTag, { value: "Module" }));
var Ve, tt, dt = {}, ot = {};
function Jn(G) {
  var N = ot[G];
  if (N !== void 0)
    return N.exports;
  var n = ot[G] = { id: G, exports: {} };
  return dt[G].call(n.exports, n, n.exports, Jn), n.exports;
}
Jn.m = dt, Jn.n = (G) => {
  var N = G && G.__esModule ? () => G.default : () => G;
  return Jn.d(N, { a: N }), N;
}, Jn.d = (G, N) => {
  for (var n in N)
    Jn.o(N, n) && !Jn.o(G, n) && Object.defineProperty(G, n, { enumerable: !0, get: N[n] });
}, Jn.f = {}, Jn.e = (G) => Promise.all(Object.keys(Jn.f).reduce((N, n) => (Jn.f[n](G, N), N), [])), Jn.u = (G) => G + ".js", Jn.o = (G, N) => Object.prototype.hasOwnProperty.call(G, N), Jn.r = (G) => {
  typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(G, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(G, "__esModule", { value: !0 });
};
Ve = { 666: 0 }, tt = (G) => {
  var N, n, { ids: r, modules: l, runtime: B } = G, C = 0;
  for (N in l)
    Jn.o(l, N) && (Jn.m[N] = l[N]);
  for (B && B(Jn); C < r.length; C++)
    n = r[C], Jn.o(Ve, n) && Ve[n] && Ve[n][0](), Ve[r[C]] = 0;
}, Jn.f.j = (G, N) => {
  var n = Jn.o(Ve, G) ? Ve[G] : void 0;
  if (n !== 0)
    if (n)
      N.push(n[1]);
    else if (G != 666) {
      var r = import("./" + Jn.u(G)).then(tt, (l) => {
        throw Ve[G] !== 0 && (Ve[G] = void 0), l;
      });
      r = Promise.race([r, new Promise((l) => n = Ve[G] = [l])]), N.push(n[1] = r);
    } else
      Ve[G] = 0;
}, Jn.C = tt;
const kt = 713, jt = [713], Pt = { 7322: (G, N, n) => {
  n.d(N, { XV: () => C, gO: () => l, gX: () => an, iE: () => H, mv: () => B, yg: () => U });
  var r = n(6752), { setEndpoint: l, setFetchGraphQlHeader: B, removeFetchGraphQlHeader: C, setFetchGraphQlHeaders: U, fetchGraphQl: an, getConfig: H } = new r.FetchGraphQL().getMethods();
}, 2675: (G, N, n) => {
  n.d(N, { b: () => H });
  var r = n(4114), l = n(7322), B = n(3264), C = n(7140), U = `
query GET_PRODUCT_DATA($skus: [String]) {
    products(skus: $skus) {
        ...ProductFragment
    }
}

`.concat(C.K, `
`);
  function an(K, S, O, g, j, k, P) {
    try {
      var V = K[k](P), T = V.value;
    } catch (X) {
      return void O(X);
    }
    V.done ? S(T) : Promise.resolve(T).then(g, j);
  }
  var H = function() {
    var K, S = (K = function* (O) {
      var g, j, k, P, V = r.v === null || r.v === void 0 || (g = r.v.getConfig()) === null || g === void 0 || (j = g.models) === null || j === void 0 || (k = j.ProductDetails) === null || k === void 0 ? void 0 : k.initialData;
      if (V)
        return (0, B.t)(V);
      var { data: T } = yield (0, l.gX)(U, { method: "GET", variables: { skus: [O] } }), X = T == null || (P = T.products) === null || P === void 0 ? void 0 : P[0];
      return (0, B.t)(X);
    }, function() {
      var O = this, g = arguments;
      return new Promise(function(j, k) {
        var P = K.apply(O, g);
        function V(X) {
          an(P, j, k, V, T, "next", X);
        }
        function T(X) {
          an(P, j, k, V, T, "throw", X);
        }
        V(void 0);
      });
    });
    return function(O) {
      return S.apply(this, arguments);
    };
  }();
}, 6052: (G, N, n) => {
  n.d(N, { R: () => V });
  var r = n(7322), l = n(4114), B = n(3264), C = n(7140), U = `
query REFINE_PRODUCT_QUERY(
    $optionIds: [String!]!
    $sku: String!
) {
    # Refined Product
    refineProduct(
        optionIds: $optionIds 
        sku: $sku
    ) {
        ...ProductFragment
    }

    # Parent Product
    products(skus: [$sku]) {
        ...ProductFragment
    }

    # %extendedPlaceholder%
}

`.concat(C.K, `
`), an = ["products", "refineProduct"];
  function H(T, X) {
    var L = Object.keys(T);
    if (Object.getOwnPropertySymbols) {
      var nn = Object.getOwnPropertySymbols(T);
      X && (nn = nn.filter(function(rn) {
        return Object.getOwnPropertyDescriptor(T, rn).enumerable;
      })), L.push.apply(L, nn);
    }
    return L;
  }
  function K(T) {
    for (var X = 1; X < arguments.length; X++) {
      var L = arguments[X] != null ? arguments[X] : {};
      X % 2 ? H(Object(L), !0).forEach(function(nn) {
        S(T, nn, L[nn]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(T, Object.getOwnPropertyDescriptors(L)) : H(Object(L)).forEach(function(nn) {
        Object.defineProperty(T, nn, Object.getOwnPropertyDescriptor(L, nn));
      });
    }
    return T;
  }
  function S(T, X, L) {
    return (X = function(nn) {
      var rn = function(vn, R) {
        if (typeof vn != "object" || vn === null)
          return vn;
        var D = vn[Symbol.toPrimitive];
        if (D !== void 0) {
          var v = D.call(vn, R || "default");
          if (typeof v != "object")
            return v;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (R === "string" ? String : Number)(vn);
      }(nn, "string");
      return typeof rn == "symbol" ? rn : String(rn);
    }(X)) in T ? Object.defineProperty(T, X, { value: L, enumerable: !0, configurable: !0, writable: !0 }) : T[X] = L, T;
  }
  function O(T, X) {
    if (T == null)
      return {};
    var L, nn, rn = function(R, D) {
      if (R == null)
        return {};
      var v, d, w = {}, t = Object.keys(R);
      for (d = 0; d < t.length; d++)
        v = t[d], D.indexOf(v) >= 0 || (w[v] = R[v]);
      return w;
    }(T, X);
    if (Object.getOwnPropertySymbols) {
      var vn = Object.getOwnPropertySymbols(T);
      for (nn = 0; nn < vn.length; nn++)
        L = vn[nn], X.indexOf(L) >= 0 || Object.prototype.propertyIsEnumerable.call(T, L) && (rn[L] = T[L]);
    }
    return rn;
  }
  function g(T, X, L, nn, rn, vn, R) {
    try {
      var D = T[vn](R), v = D.value;
    } catch (d) {
      return void L(d);
    }
    D.done ? X(v) : Promise.resolve(v).then(nn, rn);
  }
  function j(T) {
    return function() {
      var X = this, L = arguments;
      return new Promise(function(nn, rn) {
        var vn = T.apply(X, L);
        function R(v) {
          g(vn, nn, rn, R, D, "next", v);
        }
        function D(v) {
          g(vn, nn, rn, R, D, "throw", v);
        }
        R(void 0);
      });
    };
  }
  function k(T, X) {
    return P.apply(this, arguments);
  }
  function P() {
    return P = j(function* (T, X) {
      var L = function(vn, R) {
        return vn.map((D, v) => `
          ProductOption`.concat(v, `: refineProduct(
            optionIds: [
              `).concat(D.map((d) => '"'.concat(d, '"')).join(", "), `
            ]
            sku: "`).concat(R, `"
          ) {
            ... on ComplexProductView {
              options {
                ...ProductOptionFragment
              }
            }
          }
        `)).join("");
      }(function(vn) {
        if (vn.length < 2)
          return [vn];
        var R = [];
        return vn.forEach((D) => {
          var v = [];
          vn.forEach((d) => {
            D !== d && v.push(d);
          }), R.push(v);
        }), R;
      }(X), T), nn = U.replace("# %extendedPlaceholder%", L), { data: rn } = yield (0, r.gX)(nn, { method: "GET", variables: { optionIds: X, sku: T } });
      return rn;
    }), P.apply(this, arguments);
  }
  var V = function() {
    var T = j(function* (X, L, nn) {
      var rn, vn, R, D = yield k(X, L);
      if (!D)
        return null;
      var { products: v, refineProduct: d } = D, w = O(D, an), t = v == null ? void 0 : v[0], f = function(e, o, a) {
        var s = Object.values(e).filter((u) => !!u).reduce((u, F) => F.options ? [...u, ...F.options] : [...u], []), c = new Map(o.map((u) => [u.id, u]));
        return s.forEach((u) => {
          a != null && a.includes(u.id) || c.set(u.id, u);
        }), [...c.values()];
      }(Object.values(w), t.options, nn);
      if (nn != null && nn.length && d === null) {
        L = function(e, o, a) {
          var s, c = [];
          return e.forEach((u) => {
            var F, en, ln, yn;
            a.includes(u.id) ? s = ((F = u.values) === null || F === void 0 || (en = F.find((_n) => o.includes(_n == null ? void 0 : _n.id))) === null || en === void 0 ? void 0 : en.id) || ((ln = u.values[0]) === null || ln === void 0 ? void 0 : ln.id) : s = (yn = u.values[0]) === null || yn === void 0 ? void 0 : yn.id, c.push(s);
          }), c;
        }(f, L, nn);
        var x = yield k(X, L);
        d = x == null ? void 0 : x.refineProduct;
      }
      var m = (0, B.t)(K(K({}, d || t), {}, { sku: t.sku, name: t.name, externalParentId: t == null ? void 0 : t.externalId, options: f, optionUIDs: L })), i = l.v === null || l.v === void 0 || (rn = l.v.getConfig()) === null || rn === void 0 || (vn = rn.models) === null || vn === void 0 || (R = vn.ProductDetails) === null || R === void 0 ? void 0 : R.fallbackData;
      return i ? i(t, m) : m;
    });
    return function(X, L, nn) {
      return T.apply(this, arguments);
    };
  }();
}, 7140: (G, N, n) => {
  n.d(N, { K: () => r });
  var r = `
fragment ProductFragment on ProductView {
  __typename
  id
  sku
  name
  shortDescription
  metaDescription
  metaKeyword
  metaTitle
  description
  inStock
  addToCartAllowed
  url
  urlKey
  externalId

  images(roles: []) {
    url
    label
    roles
  }

  attributes(roles: []) {
    name
    label
    value
    roles
  }

... on SimpleProductView {
    price {
        roles

        regular {
            amount {
                value
                currency
            }
        }

        final {
            amount {
                value
                currency
            }
        }
    }
}


  ... on ComplexProductView {
    options {
      ...ProductOptionFragment
    }

    priceRange {
      maximum {
        final {
          amount {
            value
            currency
          }
        }
        regular {
          amount {
            value
            currency
          }
        }
        roles
      }
      minimum {
        final {
          amount {
            value
            currency
          }
        }
        regular {
          amount {
            value
            currency
          }
        }
        roles
      }
    }
  }
}

`.concat(`
fragment ProductOptionFragment on ProductViewOption {
    id
    title
    required
    multi
    values {
      id
      title
      inStock
      __typename
      ... on ProductViewOptionValueProduct {
        title
        quantity
        isDefault
        product {
          sku
          shortDescription
          metaDescription
          metaKeyword
          metaTitle
          name
          price {
            final {
              amount {
                value
                currency
              }
            }
            regular {
              amount {
                value
                currency
              }
            }
            roles
          }
        }
      }
      ... on ProductViewOptionValueSwatch {
        id
        title
        type
        value
        inStock
      }
    }
  }
`, `
`);
}, 4114: (G, N, n) => {
  function r(S, O) {
    var g = Object.keys(S);
    if (Object.getOwnPropertySymbols) {
      var j = Object.getOwnPropertySymbols(S);
      O && (j = j.filter(function(k) {
        return Object.getOwnPropertyDescriptor(S, k).enumerable;
      })), g.push.apply(g, j);
    }
    return g;
  }
  function l(S) {
    for (var O = 1; O < arguments.length; O++) {
      var g = arguments[O] != null ? arguments[O] : {};
      O % 2 ? r(Object(g), !0).forEach(function(j) {
        B(S, j, g[j]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(S, Object.getOwnPropertyDescriptors(g)) : r(Object(g)).forEach(function(j) {
        Object.defineProperty(S, j, Object.getOwnPropertyDescriptor(g, j));
      });
    }
    return S;
  }
  function B(S, O, g) {
    return (O = function(j) {
      var k = function(P, V) {
        if (typeof P != "object" || P === null)
          return P;
        var T = P[Symbol.toPrimitive];
        if (T !== void 0) {
          var X = T.call(P, V || "default");
          if (typeof X != "object")
            return X;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (V === "string" ? String : Number)(P);
      }(j, "string");
      return typeof k == "symbol" ? k : String(k);
    }(O)) in S ? Object.defineProperty(S, O, { value: g, enumerable: !0, configurable: !0, writable: !0 }) : S[O] = g, S;
  }
  function C(S, O, g, j, k, P, V) {
    try {
      var T = S[P](V), X = T.value;
    } catch (L) {
      return void g(L);
    }
    T.done ? O(X) : Promise.resolve(X).then(j, k);
  }
  n.d(N, { j: () => H, v: () => K });
  var U, an, H = new (n(743)).m({ init: (U = function* (S) {
    H.config.setConfig(l(l({}, { defaultLocale: "en-US" }), S));
  }, an = function() {
    var S = this, O = arguments;
    return new Promise(function(g, j) {
      var k = U.apply(S, O);
      function P(T) {
        C(k, g, j, P, V, "next", T);
      }
      function V(T) {
        C(k, g, j, P, V, "throw", T);
      }
      P(void 0);
    });
  }, function(S) {
    return an.apply(this, arguments);
  }), listeners: () => [] }), K = H.config;
}, 3264: (G, N, n) => {
  n.d(N, { t: () => l });
  var r = n(4114);
  function l(H) {
    var K, S, O, g = H ? { name: H.name, sku: H.sku, addToCartAllowed: H.addToCartAllowed, inStock: H.inStock, shortDescription: H.shortDescription, metaDescription: H.metaDescription, metaKeyword: H.metaKeyword, metaTitle: H.metaTitle, description: H.description, images: B(H), prices: an(H), attributes: C(H), options: U(H), optionUIDs: H.optionUIDs, url: H.url, urlKey: H.urlKey, externalId: H.externalId, externalParentId: H.externalParentId } : null, j = (K = r.v.getConfig()) === null || K === void 0 || (S = K.models) === null || S === void 0 || (O = S.ProductDetails) === null || O === void 0 ? void 0 : O.transform;
    return j && g ? j(g) : g;
  }
  function B(H) {
    var K;
    return (K = H.images) === null || K === void 0 ? void 0 : K.map((S) => (S.url = S.url.replace(/^https?:/, ""), S));
  }
  function C(H) {
    var K, S;
    return (K = H.attributes) === null || K === void 0 || (S = K.filter((O) => {
      var { roles: g } = O;
      return (g == null ? void 0 : g.indexOf("visible_in_pdp")) !== -1;
    })) === null || S === void 0 ? void 0 : S.map((O) => {
      var { label: g, value: j, name: k } = O;
      return { id: k, label: g, value: j.toString().split(",").join(", ") };
    });
  }
  function U(H) {
    var { options: K, optionUIDs: S } = H;
    return K == null ? void 0 : K.map((O) => {
      var g, j, { id: k, title: P, required: V, multi: T, values: X } = O, L = X == null || (g = X[0]) === null || g === void 0 ? void 0 : g.__typename, nn = X == null ? void 0 : X[0].type, rn = (X == null || (j = X[0]) === null || j === void 0 ? void 0 : j.__typename) === "ProductViewOptionValueProduct";
      return { id: k, type: nn = rn ? void 0 : nn ? nn.replace("COLOR_HEX", "color").replace("TEXT", "text").replace("IMAGE", "image") : "dropdown", typename: L, label: P, required: V, multiple: T, items: X == null ? void 0 : X.map((vn) => {
        var R, { id: D, title: v, inStock: d, value: w } = vn;
        return { id: D, label: v, inStock: d, value: ((R = nn) === null || R === void 0 ? void 0 : R.toLowerCase()) === "dropdown" ? D : w == null ? void 0 : w.replace(/^https?:/, ""), selected: (S == null ? void 0 : S.indexOf(D)) > -1 };
      }) };
    });
  }
  function an(H) {
    var K, S, O, g, j, { price: k, priceRange: P, __typename: V } = H, [T, X, L, nn] = V === "SimpleProductView" ? function() {
      var vn, R, D = k.regular.amount.value, v = (vn = (R = k.final) === null || R === void 0 ? void 0 : R.amount.value) !== null && vn !== void 0 ? vn : k.regular.amount.value;
      return [D, v, v, k.regular.amount.currency === "NONE" ? "USD" : k == null ? void 0 : k.regular.amount.currency];
    }() : function() {
      var vn, R, D, v, d, w, t, f, x, m, i, e, o, a = P == null || (vn = P.minimum) === null || vn === void 0 ? void 0 : vn.final.amount.value, s = P == null || (R = P.maximum) === null || R === void 0 ? void 0 : R.final.amount.value;
      return (P == null || (D = P.minimum) === null || D === void 0 || (v = D.regular) === null || v === void 0 ? void 0 : v.amount.value) === (P == null || (d = P.maximum) === null || d === void 0 || (w = d.regular) === null || w === void 0 ? void 0 : w.amount.value) && (i = P == null || (e = P.minimum) === null || e === void 0 || (o = e.regular) === null || o === void 0 ? void 0 : o.amount.value), [i, a, s, (P == null || (t = P.minimum) === null || t === void 0 || (f = t.final) === null || f === void 0 ? void 0 : f.amount.currency) === "NONE" ? "USD" : P == null || (x = P.minimum) === null || x === void 0 || (m = x.final) === null || m === void 0 ? void 0 : m.amount.currency];
    }(), rn = V === "SimpleProductView" ? k == null || (K = k.roles) === null || K === void 0 ? void 0 : K.includes("visible") : (P == null || (S = P.maximum) === null || S === void 0 || (O = S.roles) === null || O === void 0 ? void 0 : O.includes("visible")) && (P == null || (g = P.minimum) === null || g === void 0 || (j = g.roles) === null || j === void 0 ? void 0 : j.includes("visible"));
    return L && X === L ? { regular: { amount: T, currency: nn, variant: T && X !== T ? "strikethrough" : "default" }, final: { amount: L, currency: nn, variant: "default" }, visible: rn } : { final: { minimumAmount: X, maximumAmount: L, currency: nn }, visible: rn };
  }
} }, ut = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  id: kt,
  ids: jt,
  modules: Pt
}, Symbol.toStringTag, { value: "Module" })), It = 335, Ct = [335], Dt = { 2743: (G, N, n) => {
  n.d(N, { J: () => l, b: () => B });
  var r = new class {
    get map() {
      return this._map;
    }
    set map(C) {
      this._map = C;
    }
    getMethods() {
      return { setMap: (C) => {
        this.map = C;
      }, getMap: () => this.map };
    }
  }(), { setMap: l, getMap: B } = r.getMethods();
}, 743: (G, N, n) => {
  n.d(N, { m: () => K });
  class r {
    constructor(g) {
      this.config = g;
    }
    getConfig() {
      return this.config;
    }
    setConfig(g) {
      this.config = g;
    }
  }
  var l = n(2743), B = ["imageParamsKeyMap"];
  function C(O, g) {
    var j = Object.keys(O);
    if (Object.getOwnPropertySymbols) {
      var k = Object.getOwnPropertySymbols(O);
      g && (k = k.filter(function(P) {
        return Object.getOwnPropertyDescriptor(O, P).enumerable;
      })), j.push.apply(j, k);
    }
    return j;
  }
  function U(O) {
    for (var g = 1; g < arguments.length; g++) {
      var j = arguments[g] != null ? arguments[g] : {};
      g % 2 ? C(Object(j), !0).forEach(function(k) {
        H(O, k, j[k]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(O, Object.getOwnPropertyDescriptors(j)) : C(Object(j)).forEach(function(k) {
        Object.defineProperty(O, k, Object.getOwnPropertyDescriptor(j, k));
      });
    }
    return O;
  }
  function an(O, g) {
    if (O == null)
      return {};
    var j, k, P = function(T, X) {
      if (T == null)
        return {};
      var L, nn, rn = {}, vn = Object.keys(T);
      for (nn = 0; nn < vn.length; nn++)
        L = vn[nn], X.indexOf(L) >= 0 || (rn[L] = T[L]);
      return rn;
    }(O, g);
    if (Object.getOwnPropertySymbols) {
      var V = Object.getOwnPropertySymbols(O);
      for (k = 0; k < V.length; k++)
        j = V[k], g.indexOf(j) >= 0 || Object.prototype.propertyIsEnumerable.call(O, j) && (P[j] = O[j]);
    }
    return P;
  }
  function H(O, g, j) {
    return (g = function(k) {
      var P = function(V, T) {
        if (typeof V != "object" || V === null)
          return V;
        var X = V[Symbol.toPrimitive];
        if (X !== void 0) {
          var L = X.call(V, T || "default");
          if (typeof L != "object")
            return L;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (T === "string" ? String : Number)(V);
      }(k, "string");
      return typeof P == "symbol" ? P : String(P);
    }(g)) in O ? Object.defineProperty(O, g, { value: j, enumerable: !0, configurable: !0, writable: !0 }) : O[g] = j, O;
  }
  class K {
    constructor(g) {
      var { init: j, listeners: k } = g;
      H(this, "_listeners", []), H(this, "config", new r({})), this.listeners = (P) => (this._listeners.forEach((V) => V.off()), this._listeners = k(P)), this.init = (P) => {
        var V = P, { imageParamsKeyMap: T } = V, X = an(V, B);
        return this.config.setConfig(U(U({}, this.config.getConfig()), X)), (0, l.J)(T), j(P);
      };
    }
  }
  class S {
    static register(g, j) {
      var k, P;
      S._mounted && ((k = g.listeners) === null || k === void 0 || k.call(g, j), (P = g.init) === null || P === void 0 || P.call(g, j)), S._initializers.push([g, j]);
    }
    static mount() {
      var g, j;
      S._mounted = !0, (g = S._initializers) === null || g === void 0 || g.forEach((k) => {
        var P, [V, T] = k;
        (P = V.listeners) === null || P === void 0 || P.call(V, T);
      }), (j = S._initializers) === null || j === void 0 || j.forEach((k) => {
        var P, [V, T] = k;
        (P = V.init) === null || P === void 0 || P.call(V, U({ imageParamsKeyMap: S._imageParamsKeyMap }, T));
      });
    }
    static setImageParamKeys(g) {
      S._imageParamsKeyMap = g;
    }
  }
  H(S, "_initializers", []), H(S, "_mounted", !1), H(S, "_imageParamsKeyMap", void 0);
}, 1195: (G, N, n) => {
  n.d(N, { vc: () => r.v, gX: () => l.gX, iE: () => l.iE, b6: () => B.b, R3: () => C.R, j2: () => r.j, XV: () => l.XV, gO: () => l.gO, mv: () => l.mv, yg: () => l.yg });
  var r = n(4114), l = n(7322), B = n(2675), C = n(6052);
}, 6752: (G, N, n) => {
  G.exports = ((r) => {
    var l = {};
    return n.d(l, r), l;
  })({ FetchGraphQL: () => st });
} };
Jn.C(ut);
Jn.C(Ot);
var it, Le = (it = 1195, Jn(Jn.s = it)), Et = Le.vc, At = Le.gX, Zt = Le.iE, Nt = Le.b6, Bt = Le.R3, pt = Le.j2, Mt = Le.XV, ft = Le.gO, Tt = Le.mv, bt = Le.yg;
const $t = 275, Rt = [275], zt = { 5587: (G, N, n) => {
  n.d(N, { S: () => r });
  var r = (l) => l.reduce((B, C) => {
    if (!C)
      return B;
    if (typeof C == "string" && (B += " ".concat(C)), Array.isArray(C)) {
      var [U, an] = C;
      U && an && (B += " ".concat(U));
    }
    return B;
  }, "").trim();
}, 2743: (G, N, n) => {
  n.d(N, { J: () => l, b: () => B });
  var r = new class {
    get map() {
      return this._map;
    }
    set map(C) {
      this._map = C;
    }
    getMethods() {
      return { setMap: (C) => {
        this.map = C;
      }, getMap: () => this.map };
    }
  }(), { setMap: l, getMap: B } = r.getMethods();
}, 743: (G, N, n) => {
  n.d(N, { m: () => K });
  class r {
    constructor(g) {
      this.config = g;
    }
    getConfig() {
      return this.config;
    }
    setConfig(g) {
      this.config = g;
    }
  }
  var l = n(2743), B = ["imageParamsKeyMap"];
  function C(O, g) {
    var j = Object.keys(O);
    if (Object.getOwnPropertySymbols) {
      var k = Object.getOwnPropertySymbols(O);
      g && (k = k.filter(function(P) {
        return Object.getOwnPropertyDescriptor(O, P).enumerable;
      })), j.push.apply(j, k);
    }
    return j;
  }
  function U(O) {
    for (var g = 1; g < arguments.length; g++) {
      var j = arguments[g] != null ? arguments[g] : {};
      g % 2 ? C(Object(j), !0).forEach(function(k) {
        H(O, k, j[k]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(O, Object.getOwnPropertyDescriptors(j)) : C(Object(j)).forEach(function(k) {
        Object.defineProperty(O, k, Object.getOwnPropertyDescriptor(j, k));
      });
    }
    return O;
  }
  function an(O, g) {
    if (O == null)
      return {};
    var j, k, P = function(T, X) {
      if (T == null)
        return {};
      var L, nn, rn = {}, vn = Object.keys(T);
      for (nn = 0; nn < vn.length; nn++)
        L = vn[nn], X.indexOf(L) >= 0 || (rn[L] = T[L]);
      return rn;
    }(O, g);
    if (Object.getOwnPropertySymbols) {
      var V = Object.getOwnPropertySymbols(O);
      for (k = 0; k < V.length; k++)
        j = V[k], g.indexOf(j) >= 0 || Object.prototype.propertyIsEnumerable.call(O, j) && (P[j] = O[j]);
    }
    return P;
  }
  function H(O, g, j) {
    return (g = function(k) {
      var P = function(V, T) {
        if (typeof V != "object" || V === null)
          return V;
        var X = V[Symbol.toPrimitive];
        if (X !== void 0) {
          var L = X.call(V, T || "default");
          if (typeof L != "object")
            return L;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (T === "string" ? String : Number)(V);
      }(k, "string");
      return typeof P == "symbol" ? P : String(P);
    }(g)) in O ? Object.defineProperty(O, g, { value: j, enumerable: !0, configurable: !0, writable: !0 }) : O[g] = j, O;
  }
  class K {
    constructor(g) {
      var { init: j, listeners: k } = g;
      H(this, "_listeners", []), H(this, "config", new r({})), this.listeners = (P) => (this._listeners.forEach((V) => V.off()), this._listeners = k(P)), this.init = (P) => {
        var V = P, { imageParamsKeyMap: T } = V, X = an(V, B);
        return this.config.setConfig(U(U({}, this.config.getConfig()), X)), (0, l.J)(T), j(P);
      };
    }
  }
  class S {
    static register(g, j) {
      var k, P;
      S._mounted && ((k = g.listeners) === null || k === void 0 || k.call(g, j), (P = g.init) === null || P === void 0 || P.call(g, j)), S._initializers.push([g, j]);
    }
    static mount() {
      var g, j;
      S._mounted = !0, (g = S._initializers) === null || g === void 0 || g.forEach((k) => {
        var P, [V, T] = k;
        (P = V.listeners) === null || P === void 0 || P.call(V, T);
      }), (j = S._initializers) === null || j === void 0 || j.forEach((k) => {
        var P, [V, T] = k;
        (P = V.init) === null || P === void 0 || P.call(V, U({ imageParamsKeyMap: S._imageParamsKeyMap }, T));
      });
    }
    static setImageParamKeys(g) {
      S._imageParamsKeyMap = g;
    }
  }
  H(S, "_initializers", []), H(S, "_mounted", !1), H(S, "_imageParamsKeyMap", void 0);
}, 1177: (G, N, n) => {
  n.d(N, { F: () => K });
  var r = n(5587), l = n(2754), B = ["node"];
  function C(S, O) {
    var g = Object.keys(S);
    if (Object.getOwnPropertySymbols) {
      var j = Object.getOwnPropertySymbols(S);
      O && (j = j.filter(function(k) {
        return Object.getOwnPropertyDescriptor(S, k).enumerable;
      })), g.push.apply(g, j);
    }
    return g;
  }
  function U(S) {
    for (var O = 1; O < arguments.length; O++) {
      var g = arguments[O] != null ? arguments[O] : {};
      O % 2 ? C(Object(g), !0).forEach(function(j) {
        an(S, j, g[j]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(S, Object.getOwnPropertyDescriptors(g)) : C(Object(g)).forEach(function(j) {
        Object.defineProperty(S, j, Object.getOwnPropertyDescriptor(g, j));
      });
    }
    return S;
  }
  function an(S, O, g) {
    return (O = function(j) {
      var k = function(P, V) {
        if (typeof P != "object" || P === null)
          return P;
        var T = P[Symbol.toPrimitive];
        if (T !== void 0) {
          var X = T.call(P, V || "default");
          if (typeof X != "object")
            return X;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (V === "string" ? String : Number)(P);
      }(j, "string");
      return typeof k == "symbol" ? k : String(k);
    }(O)) in S ? Object.defineProperty(S, O, { value: g, enumerable: !0, configurable: !0, writable: !0 }) : S[O] = g, S;
  }
  function H(S, O) {
    if (S == null)
      return {};
    var g, j, k = function(V, T) {
      if (V == null)
        return {};
      var X, L, nn = {}, rn = Object.keys(V);
      for (L = 0; L < rn.length; L++)
        X = rn[L], T.indexOf(X) >= 0 || (nn[X] = V[X]);
      return nn;
    }(S, O);
    if (Object.getOwnPropertySymbols) {
      var P = Object.getOwnPropertySymbols(S);
      for (j = 0; j < P.length; j++)
        g = P[j], O.indexOf(g) >= 0 || Object.prototype.propertyIsEnumerable.call(S, g) && (k[g] = S[g]);
    }
    return k;
  }
  function K(S) {
    var { node: O } = S, g = H(S, B);
    return O ? Array.isArray(O) ? (0, l.tZ)(l.HY, { children: O.map((j, k) => (0, l.tZ)(K, U({ node: j, className: g.className }, g), k)) }) : (g.className = (0, r.S)([O.props.className, g.className]), (0, l.tZ)(O.type, U(U({ ref: O.ref }, O.props), g), O.key)) : null;
  }
}, 3476: (G) => {
  G.exports = function(N) {
    var n = [];
    return n.toString = function() {
      return this.map(function(r) {
        var l = "", B = r[5] !== void 0;
        return r[4] && (l += "@supports (".concat(r[4], ") {")), r[2] && (l += "@media ".concat(r[2], " {")), B && (l += "@layer".concat(r[5].length > 0 ? " ".concat(r[5]) : "", " {")), l += N(r), B && (l += "}"), r[2] && (l += "}"), r[4] && (l += "}"), l;
      }).join("");
    }, n.i = function(r, l, B, C, U) {
      typeof r == "string" && (r = [[null, r, void 0]]);
      var an = {};
      if (B)
        for (var H = 0; H < this.length; H++) {
          var K = this[H][0];
          K != null && (an[K] = !0);
        }
      for (var S = 0; S < r.length; S++) {
        var O = [].concat(r[S]);
        B && an[O[0]] || (U !== void 0 && (O[5] === void 0 || (O[1] = "@layer".concat(O[5].length > 0 ? " ".concat(O[5]) : "", " {").concat(O[1], "}")), O[5] = U), l && (O[2] && (O[1] = "@media ".concat(O[2], " {").concat(O[1], "}")), O[2] = l), C && (O[4] ? (O[1] = "@supports (".concat(O[4], ") {").concat(O[1], "}"), O[4] = C) : O[4] = "".concat(C)), n.push(O));
      }
    }, n;
  };
}, 4933: (G) => {
  G.exports = function(N) {
    return N[1];
  };
}, 3152: function(G) {
  G.exports = function(N, n, r, l, B) {
    for (n = n.split ? n.split(".") : n, l = 0; l < n.length; l++)
      N = N ? N[n[l]] : B;
    return N === B ? r : N;
  };
}, 9724: (G, N, n) => {
  n.d(N, { fH: () => k, Pj: () => L, Cf: () => t, xv: () => d, XK: () => m });
  var r, l = n(473), B = n(5792), C = n(3152), U = n.n(C), an = {};
  function H(i, e, o) {
    if (i.nodeType === 3) {
      var a = "textContent" in i ? i.textContent : i.nodeValue || "";
      if (H.options.trim !== !1) {
        var s = e === 0 || e === o.length - 1;
        if ((!(a = a.match(/^[\s\n]+$/g) && H.options.trim !== "all" ? " " : a.replace(/(^[\s\n]+|[\s\n]+$)/g, H.options.trim === "all" || s ? "" : " ")) || a === " ") && o.length > 1 && s)
          return null;
      }
      return a;
    }
    if (i.nodeType !== 1)
      return null;
    var c = String(i.nodeName).toLowerCase();
    if (c === "script" && !H.options.allowScripts)
      return null;
    var u, F, en = H.h(c, function(ln) {
      var yn = ln && ln.length;
      if (!yn)
        return null;
      for (var _n = {}, wn = 0; wn < yn; wn++) {
        var y = ln[wn], b = y.name, I = y.value;
        b.substring(0, 2) === "on" && H.options.allowEvents && (I = new Function(I)), _n[b] = I;
      }
      return _n;
    }(i.attributes), (F = (u = i.childNodes) && Array.prototype.map.call(u, H).filter(S)) && F.length ? F : null);
    return H.visitor && H.visitor(en), en;
  }
  var K, S = function(i) {
    return i;
  }, O = {};
  function g(i) {
    var e = (i.type || "").toLowerCase(), o = g.map;
    o && o.hasOwnProperty(e) ? (i.type = o[e], i.props = Object.keys(i.props || {}).reduce(function(a, s) {
      var c;
      return a[c = s, c.replace(/-(.)/g, function(u, F) {
        return F.toUpperCase();
      })] = i.props[s], a;
    }, {})) : i.type = e.replace(/[^a-z0-9-]/i, "");
  }
  const j = function(i) {
    function e() {
      i.apply(this, arguments);
    }
    return i && (e.__proto__ = i), (e.prototype = Object.create(i && i.prototype)).constructor = e, e.setReviver = function(o) {
      K = o;
    }, e.prototype.shouldComponentUpdate = function(o) {
      var a = this.props;
      return o.wrap !== a.wrap || o.type !== a.type || o.markup !== a.markup;
    }, e.prototype.setComponents = function(o) {
      if (this.map = {}, o) {
        for (var a in o)
          if (o.hasOwnProperty(a)) {
            var s = a.replace(/([A-Z]+)([A-Z][a-z0-9])|([a-z0-9]+)([A-Z])/g, "$1$3-$2$4").toLowerCase();
            this.map[s] = o[a];
          }
      }
    }, e.prototype.render = function(o) {
      var a = o.wrap;
      a === void 0 && (a = !0);
      var s, c = o.type, u = o.markup, F = o.components, en = o.reviver, ln = o.onError, yn = o["allow-scripts"], _n = o["allow-events"], wn = o.trim, y = function($, on) {
        var dn = {};
        for (var fn in $)
          Object.prototype.hasOwnProperty.call($, fn) && on.indexOf(fn) === -1 && (dn[fn] = $[fn]);
        return dn;
      }(o, ["wrap", "type", "markup", "components", "reviver", "onError", "allow-scripts", "allow-events", "trim"]), b = en || this.reviver || this.constructor.prototype.reviver || K || l.h;
      this.setComponents(F);
      var I = { allowScripts: yn, allowEvents: _n, trim: wn };
      try {
        s = function($, on, dn, fn, pn) {
          var gn = function(On, Qn) {
            var ae, de, ee, ve, Me = Qn === "html" ? "text/html" : "application/xml";
            Qn === "html" ? (ve = "body", ee = `<!DOCTYPE html>
<html><body>` + On + "</body></html>") : (ve = "xml", ee = `<?xml version="1.0" encoding="UTF-8"?>
<xml>` + On + "</xml>");
            try {
              ae = new DOMParser().parseFromString(ee, Me);
            } catch (De) {
              de = De;
            }
            if (ae || Qn !== "html" || ((ae = r || (r = function() {
              if (document.implementation && document.implementation.createHTMLDocument)
                return document.implementation.createHTMLDocument("");
              var De = document.createElement("iframe");
              return De.style.cssText = "position:absolute; left:0; top:-999em; width:1px; height:1px; overflow:hidden;", De.setAttribute("sandbox", "allow-forms"), document.body.appendChild(De), De.contentWindow.document;
            }())).open(), ae.write(ee), ae.close()), ae) {
              var Te = ae.getElementsByTagName(ve)[0], ye = Te.firstChild;
              return On && !ye && (Te.error = "Document parse failed."), ye && String(ye.nodeName).toLowerCase() === "parsererror" && (ye.removeChild(ye.firstChild), ye.removeChild(ye.lastChild), Te.error = ye.textContent || ye.nodeValue || de || "Unknown error", Te.removeChild(ye)), Te;
            }
          }($, on);
          if (gn && gn.error)
            throw new Error(gn.error);
          var W = gn && gn.body || gn;
          g.map = fn || O;
          var Hn = W && function(On, Qn, ae, de) {
            return H.visitor = Qn, H.h = ae, H.options = de || an, H(On);
          }(W, g, dn, pn);
          return g.map = null, Hn && Hn.props && Hn.props.children || null;
        }(u, c, b, this.map, I);
      } catch ($) {
        ln ? ln({ error: $ }) : typeof console < "u" && console.error && console.error("preact-markup: " + $);
      }
      if (a === !1)
        return s || null;
      var M = y.hasOwnProperty("className") ? "className" : "class", E = y[M];
      return E ? E.splice ? E.splice(0, 0, "markup") : typeof E == "string" ? y[M] += " markup" : typeof E == "object" && (E.markup = !0) : y[M] = "markup", b("div", y, s || null);
    }, e;
  }(l.wA);
  var k = (0, l.kr)({ intl: {} });
  function P(i) {
    return i != null;
  }
  function V(i, e) {
    for (var o in e)
      i[o] = e[o];
    return i;
  }
  function T(i, e) {
    var o = V({}, i);
    for (var a in e)
      e.hasOwnProperty(a) && (i[a] && e[a] && typeof i[a] == "object" && typeof e[a] == "object" ? o[a] = T(i[a], e[a]) : o[a] = i[a] || e[a]);
    return o;
  }
  var X = /[?&#]intl=show/;
  function L(i) {
    var e = i.scope, o = i.mark, a = i.definition, s = function(u, F) {
      var en = {};
      for (var ln in u)
        Object.prototype.hasOwnProperty.call(u, ln) && F.indexOf(ln) === -1 && (en[ln] = u[ln]);
      return en;
    }(i, ["scope", "mark", "definition"]), c = V({}, (0, B.qp)(k).intl || {});
    return e && (c.scope = e), a && (c.dictionary = T(c.dictionary || {}, a)), (o || typeof location < "u" && String(location).match(X)) && (c.mark = !0), (0, l.h)(k.Provider, { value: { intl: c } }, s.children);
  }
  function nn(i, e) {
    if (arguments.length < 2)
      return e = i, function(a) {
        return nn(a, e);
      };
    function o(a) {
      return (0, l.h)(L, e || {}, (0, l.h)(i, a));
    }
    return o.getWrappedComponent = i && i.getWrappedComponent || function() {
      return i;
    }, o;
  }
  var rn = {};
  function vn(i, e, o, a) {
    return i && i.replace(/\{\{([\w.-]+)\}\}/g, R.bind(null, e || rn, o, a));
  }
  function R(i, e, o, a, s) {
    for (var c = s.split("."), u = i, F = 0; F < c.length; F++) {
      if ((u = u[c[F]]) == null)
        return "";
      if (u && u.type === d)
        return D(u.props.id, e, o, u.props.fields, u.props.plural, u.props.fallback);
    }
    return typeof u == "string" && u.match(/\{\{/) && (u = vn(u, i)), u;
  }
  function D(i, e, o, a, s, c) {
    e && (i = e + "." + i);
    var u = o && U()(o, i);
    return (s || s === 0) && u && typeof u == "object" && (u = u.splice ? u[s] || u[0] : s === 0 && P(u.none || u.zero) ? u.none || u.zero : s === 1 && P(u.one || u.singular) ? u.one || u.singular : u.some || u.many || u.plural || u.other || u), u && vn(u, a, e, o) || c || null;
  }
  function v(i) {
    var e = i.value, o = i.id, a = (0, B.qp)(k).intl;
    if (a && a.mark) {
      var s = "dictionary" + (a && a.scope ? "." + a.scope : "") + "." + o;
      return (0, l.h)("mark", { style: { background: e ? U()(a, s) ? "rgba(119,231,117,.5)" : "rgba(229,226,41,.5)" : "rgba(228,147,51,.5)" }, title: o }, e);
    }
    return e;
  }
  function d(i) {
    var e = i.id, o = i.children, a = i.plural, s = i.fields, c = (0, B.qp)(k).intl, u = D(e, c && c.scope, c && c.dictionary, s, a, o);
    return (0, l.h)(v, { id: e, value: u });
  }
  function w(i, e, o) {
    var a = {};
    for (var s in e = e || {}, i = function(u) {
      if (typeof (u = u || {}) == "string" && (u = u.split(",")), "join" in u) {
        for (var F = {}, en = 0; en < u.length; en++) {
          var ln = u[en].trim();
          ln && (F[ln.split(".").pop()] = ln);
        }
        return F;
      }
      return u;
    }(i), i)
      if (i.hasOwnProperty(s) && i[s]) {
        var c = i[s];
        o || typeof c != "string" ? c.type === d && (c = V({ fallback: c.props.children }, c.props), a[s] = D(c.id, e.scope, e.dictionary, c.fields, c.plural, c.fallback)) : a[s] = D(c, e.scope, e.dictionary);
      }
    return a;
  }
  function t(i) {
    var e = i.children, o = (0, B.qp)(k).intl;
    return e && e.length ? e.map(function(a) {
      return (0, l.Tm)(a, w(a.props, o, !0));
    }) : e && (0, l.Tm)(e, w(e.props, o, !0));
  }
  function f(i, e) {
    var o = {};
    for (var a in i)
      Object.prototype.hasOwnProperty.call(i, a) && e.indexOf(a) === -1 && (o[a] = i[a]);
    return o;
  }
  function x(i) {
    var e = i.html, o = i.id, a = f(i, ["html", "id"]);
    return (0, l.h)(v, { id: o, value: e && (typeof e == "string" ? (0, l.h)(j, Object.assign({}, { type: "html", trim: !1 }, a, { markup: e })) : (0, l.h)("span", null, e)) });
  }
  function m(i) {
    var e = (0, B.qp)(k).intl;
    return w(typeof i == "function" ? i({ intl: e }) : i, e);
  }
  nn.intl = nn, nn.IntlContext = k, nn.IntlProvider = L, nn.Text = d, nn.MarkupText = function(i) {
    var e = i.id, o = i.fields, a = i.plural, s = i.children, c = f(i, ["id", "fields", "plural", "children"]);
    return (0, l.h)(t, null, (0, l.h)(x, Object.assign({}, { html: (0, l.h)(d, { id: e, fields: o, plural: a, children: s }), id: e }, c)));
  }, nn.Localizer = t, nn.withText = function(i) {
    return function(e) {
      function o(a, s) {
        var c = (0, B.qp)(k).intl, u = w(typeof i == "function" ? i(a, { intl: c }) : i, c);
        return (0, l.h)(e, V(V({}, a), u));
      }
      return o.getWrappedComponent = e && e.getWrappedComponent || function() {
        return e;
      }, o;
    };
  }, nn.useText = m, nn.translate = D;
}, 3354: (G, N, n) => {
  n.d(N, { I4: () => l.I4, Vo: () => V, Ye: () => l.Ye, az: () => r.az, d4: () => l.d4, eJ: () => l.eJ, hu: () => K, kr: () => r.kr, n4: () => k, sO: () => l.sO });
  var r = n(473), l = n(5792);
  function B(e, o) {
    for (var a in o)
      e[a] = o[a];
    return e;
  }
  function C(e, o) {
    for (var a in e)
      if (a !== "__source" && !(a in o))
        return !0;
    for (var s in o)
      if (s !== "__source" && e[s] !== o[s])
        return !0;
    return !1;
  }
  function U(e, o) {
    this.props = e, this.context = o;
  }
  (U.prototype = new r.wA()).isPureReactComponent = !0, U.prototype.shouldComponentUpdate = function(e, o) {
    return C(this.props, e) || C(this.state, o);
  };
  var an = r.YM.__b;
  r.YM.__b = function(e) {
    e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), an && an(e);
  };
  var H = function(e, o) {
    return e == null ? null : (0, r.bR)((0, r.bR)(e).map(o));
  }, K = { map: H, forEach: H, count: function(e) {
    return e ? (0, r.bR)(e).length : 0;
  }, only: function(e) {
    var o = (0, r.bR)(e);
    if (o.length !== 1)
      throw "Children.only";
    return o[0];
  }, toArray: r.bR }, S = r.YM.__e;
  r.YM.__e = function(e, o, a, s) {
    if (e.then) {
      for (var c, u = o; u = u.__; )
        if ((c = u.__c) && c.__c)
          return o.__e == null && (o.__e = a.__e, o.__k = a.__k), c.__c(e, o);
    }
    S(e, o, a, s);
  };
  var O = r.YM.unmount;
  function g(e, o, a) {
    return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(s) {
      typeof s.__c == "function" && s.__c();
    }), e.__c.__H = null), (e = B({}, e)).__c != null && (e.__c.__P === a && (e.__c.__P = o), e.__c = null), e.__k = e.__k && e.__k.map(function(s) {
      return g(s, o, a);
    })), e;
  }
  function j(e, o, a) {
    return e && a && (e.__v = null, e.__k = e.__k && e.__k.map(function(s) {
      return j(s, o, a);
    }), e.__c && e.__c.__P === o && (e.__e && a.appendChild(e.__e), e.__c.__e = !0, e.__c.__P = a)), e;
  }
  function k() {
    this.__u = 0, this.t = null, this.__b = null;
  }
  function P(e) {
    var o = e.__.__c;
    return o && o.__a && o.__a(e);
  }
  function V(e) {
    var o, a, s;
    function c(u) {
      if (o || (o = e()).then(function(F) {
        a = F.default || F;
      }, function(F) {
        s = F;
      }), s)
        throw s;
      if (!a)
        throw o;
      return (0, r.az)(a, u);
    }
    return c.displayName = "Lazy", c.__f = !0, c;
  }
  function T() {
    this.u = null, this.o = null;
  }
  r.YM.unmount = function(e) {
    var o = e.__c;
    o && o.__R && o.__R(), o && 32 & e.__u && (e.type = null), O && O(e);
  }, (k.prototype = new r.wA()).__c = function(e, o) {
    var a = o.__c, s = this;
    s.t == null && (s.t = []), s.t.push(a);
    var c = P(s.__v), u = !1, F = function() {
      u || (u = !0, a.__R = null, c ? c(en) : en());
    };
    a.__R = F;
    var en = function() {
      if (!--s.__u) {
        if (s.state.__a) {
          var ln = s.state.__a;
          s.__v.__k[0] = j(ln, ln.__c.__P, ln.__c.__O);
        }
        var yn;
        for (s.setState({ __a: s.__b = null }); yn = s.t.pop(); )
          yn.forceUpdate();
      }
    };
    s.__u++ || 32 & o.__u || s.setState({ __a: s.__b = s.__v.__k[0] }), e.then(F, F);
  }, k.prototype.componentWillUnmount = function() {
    this.t = [];
  }, k.prototype.render = function(e, o) {
    if (this.__b) {
      if (this.__v.__k) {
        var a = document.createElement("div"), s = this.__v.__k[0].__c;
        this.__v.__k[0] = g(this.__b, a, s.__O = s.__P);
      }
      this.__b = null;
    }
    var c = o.__a && (0, r.az)(r.HY, null, e.fallback);
    return c && (c.__u &= -33), [(0, r.az)(r.HY, null, o.__a ? null : e.children), c];
  };
  var X = function(e, o, a) {
    if (++a[1] === a[0] && e.o.delete(o), e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.o.size))
      for (a = e.u; a; ) {
        for (; a.length > 3; )
          a.pop()();
        if (a[1] < a[0])
          break;
        e.u = a = a[2];
      }
  };
  (T.prototype = new r.wA()).__a = function(e) {
    var o = this, a = P(o.__v), s = o.o.get(e);
    return s[0]++, function(c) {
      var u = function() {
        o.props.revealOrder ? (s.push(c), X(o, e, s)) : c();
      };
      a ? a(u) : u();
    };
  }, T.prototype.render = function(e) {
    this.u = null, this.o = /* @__PURE__ */ new Map();
    var o = (0, r.bR)(e.children);
    e.revealOrder && e.revealOrder[0] === "b" && o.reverse();
    for (var a = o.length; a--; )
      this.o.set(o[a], this.u = [1, 0, this.u]);
    return e.children;
  }, T.prototype.componentDidUpdate = T.prototype.componentDidMount = function() {
    var e = this;
    this.o.forEach(function(o, a) {
      X(e, a, o);
    });
  };
  var L = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, nn = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, rn = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, vn = /[A-Z0-9]/g, R = typeof document < "u", D = function(e) {
    return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(e);
  };
  r.wA.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
    Object.defineProperty(r.wA.prototype, e, { configurable: !0, get: function() {
      return this["UNSAFE_" + e];
    }, set: function(o) {
      Object.defineProperty(this, e, { configurable: !0, writable: !0, value: o });
    } });
  });
  var v = r.YM.event;
  function d() {
  }
  function w() {
    return this.cancelBubble;
  }
  function t() {
    return this.defaultPrevented;
  }
  r.YM.event = function(e) {
    return v && (e = v(e)), e.persist = d, e.isPropagationStopped = w, e.isDefaultPrevented = t, e.nativeEvent = e;
  };
  var f = { enumerable: !1, configurable: !0, get: function() {
    return this.class;
  } }, x = r.YM.vnode;
  r.YM.vnode = function(e) {
    typeof e.type == "string" && function(o) {
      var a = o.props, s = o.type, c = {};
      for (var u in a) {
        var F = a[u];
        if (!(u === "value" && "defaultValue" in a && F == null || R && u === "children" && s === "noscript" || u === "class" || u === "className")) {
          var en = u.toLowerCase();
          u === "defaultValue" && "value" in a && a.value == null ? u = "value" : u === "download" && F === !0 ? F = "" : en === "translate" && F === "no" ? F = !1 : en === "ondoubleclick" ? u = "ondblclick" : en !== "onchange" || s !== "input" && s !== "textarea" || D(a.type) ? en === "onfocus" ? u = "onfocusin" : en === "onblur" ? u = "onfocusout" : rn.test(u) ? u = en : s.indexOf("-") === -1 && nn.test(u) ? u = u.replace(vn, "-$&").toLowerCase() : F === null && (F = void 0) : en = u = "oninput", en === "oninput" && c[u = en] && (u = "oninputCapture"), c[u] = F;
        }
      }
      s == "select" && c.multiple && Array.isArray(c.value) && (c.value = (0, r.bR)(a.children).forEach(function(ln) {
        ln.props.selected = c.value.indexOf(ln.props.value) != -1;
      })), s == "select" && c.defaultValue != null && (c.value = (0, r.bR)(a.children).forEach(function(ln) {
        ln.props.selected = c.multiple ? c.defaultValue.indexOf(ln.props.value) != -1 : c.defaultValue == ln.props.value;
      })), a.class && !a.className ? (c.class = a.class, Object.defineProperty(c, "className", f)) : (a.className && !a.class || a.class && a.className) && (c.class = c.className = a.className), o.props = c;
    }(e), e.$$typeof = L, x && x(e);
  };
  var m = r.YM.__r;
  r.YM.__r = function(e) {
    m && m(e), e.__c;
  };
  var i = r.YM.diffed;
  r.YM.diffed = function(e) {
    i && i(e);
    var o = e.props, a = e.__e;
    a != null && e.type === "textarea" && "value" in o && o.value !== a.value && (a.value = o.value == null ? "" : o.value);
  }, r.HY, l.bt, l.eJ, l.Me, l._Y, l.d4, l.bt, l.sO, l.aP, l.Ye, l.I4, l.qp, l.Qb, r.az, r.kr, r.Vf, r.HY, r.wA;
}, 473: (G, N, n) => {
  n.d(N, { HY: () => L, Tm: () => _n, Vf: () => X, YM: () => l, ZB: () => yn, az: () => V, bR: () => f, h: () => V, kr: () => wn, sY: () => ln, wA: () => nn });
  var r, l, B, C, U, an, H, K, S = {}, O = [], g = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, j = Array.isArray;
  function k(y, b) {
    for (var I in b)
      y[I] = b[I];
    return y;
  }
  function P(y) {
    var b = y.parentNode;
    b && b.removeChild(y);
  }
  function V(y, b, I) {
    var M, E, $, on = {};
    for ($ in b)
      $ == "key" ? M = b[$] : $ == "ref" ? E = b[$] : on[$] = b[$];
    if (arguments.length > 2 && (on.children = arguments.length > 3 ? r.call(arguments, 2) : I), typeof y == "function" && y.defaultProps != null)
      for ($ in y.defaultProps)
        on[$] === void 0 && (on[$] = y.defaultProps[$]);
    return T(y, on, M, E, null);
  }
  function T(y, b, I, M, E) {
    var $ = { type: y, props: b, key: I, ref: M, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: E ?? ++B, __i: -1, __u: 0 };
    return E == null && l.vnode != null && l.vnode($), $;
  }
  function X() {
    return { current: null };
  }
  function L(y) {
    return y.children;
  }
  function nn(y, b) {
    this.props = y, this.context = b;
  }
  function rn(y, b) {
    if (b == null)
      return y.__ ? rn(y.__, y.__i + 1) : null;
    for (var I; b < y.__k.length; b++)
      if ((I = y.__k[b]) != null && I.__e != null)
        return I.__e;
    return typeof y.type == "function" ? rn(y) : null;
  }
  function vn(y, b, I) {
    var M, E = y.__v, $ = E.__e, on = y.__P;
    if (on)
      return (M = k({}, E)).__v = E.__v + 1, l.vnode && l.vnode(M), a(on, M, E, y.__n, on.ownerSVGElement !== void 0, 32 & E.__u ? [$] : null, b, $ ?? rn(E), !!(32 & E.__u), I), M.__v = E.__v, M.__.__k[M.__i] = M, M.__d = void 0, M.__e != $ && R(M), M;
  }
  function R(y) {
    var b, I;
    if ((y = y.__) != null && y.__c != null) {
      for (y.__e = y.__c.base = null, b = 0; b < y.__k.length; b++)
        if ((I = y.__k[b]) != null && I.__e != null) {
          y.__e = y.__c.base = I.__e;
          break;
        }
      return R(y);
    }
  }
  function D(y) {
    (!y.__d && (y.__d = !0) && C.push(y) && !v.__r++ || U !== l.debounceRendering) && ((U = l.debounceRendering) || an)(v);
  }
  function v() {
    var y, b, I, M = [], E = [];
    for (C.sort(H); y = C.shift(); )
      y.__d && (I = C.length, b = vn(y, M, E) || b, I === 0 || C.length > I ? (s(M, b, E), E.length = M.length = 0, b = void 0, C.sort(H)) : b && l.__c && l.__c(b, O));
    b && s(M, b, E), v.__r = 0;
  }
  function d(y, b, I, M, E, $, on, dn, fn, pn, gn) {
    var W, Hn, On, Qn, ae, de = M && M.__k || O, ee = b.length;
    for (I.__d = fn, w(I, b, de), fn = I.__d, W = 0; W < ee; W++)
      (On = I.__k[W]) != null && typeof On != "boolean" && typeof On != "function" && (Hn = On.__i === -1 ? S : de[On.__i] || S, On.__i = W, a(y, On, Hn, E, $, on, dn, fn, pn, gn), Qn = On.__e, On.ref && Hn.ref != On.ref && (Hn.ref && u(Hn.ref, null, On), gn.push(On.ref, On.__c || Qn, On)), ae == null && Qn != null && (ae = Qn), 65536 & On.__u || Hn.__k === On.__k ? fn = t(On, fn, y) : typeof On.type == "function" && On.__d !== void 0 ? fn = On.__d : Qn && (fn = Qn.nextSibling), On.__d = void 0, On.__u &= -196609);
    I.__d = fn, I.__e = ae;
  }
  function w(y, b, I) {
    var M, E, $, on, dn, fn = b.length, pn = I.length, gn = pn, W = 0;
    for (y.__k = [], M = 0; M < fn; M++)
      on = M + W, (E = y.__k[M] = (E = b[M]) == null || typeof E == "boolean" || typeof E == "function" ? null : typeof E == "string" || typeof E == "number" || typeof E == "bigint" || E.constructor == String ? T(null, E, null, null, null) : j(E) ? T(L, { children: E }, null, null, null) : E.constructor === void 0 && E.__b > 0 ? T(E.type, E.props, E.key, E.ref ? E.ref : null, E.__v) : E) != null ? (E.__ = y, E.__b = y.__b + 1, dn = x(E, I, on, gn), E.__i = dn, $ = null, dn !== -1 && (gn--, ($ = I[dn]) && ($.__u |= 131072)), $ == null || $.__v === null ? (dn == -1 && W--, typeof E.type != "function" && (E.__u |= 65536)) : dn !== on && (dn === on + 1 ? W++ : dn > on ? gn > fn - on ? W += dn - on : W-- : dn < on ? dn == on - 1 && (W = dn - on) : W = 0, dn !== M + W && (E.__u |= 65536))) : ($ = I[on]) && $.key == null && $.__e && !(131072 & $.__u) && ($.__e == y.__d && (y.__d = rn($)), F($, $, !1), I[on] = null, gn--);
    if (gn)
      for (M = 0; M < pn; M++)
        ($ = I[M]) != null && !(131072 & $.__u) && ($.__e == y.__d && (y.__d = rn($)), F($, $));
  }
  function t(y, b, I) {
    var M, E;
    if (typeof y.type == "function") {
      for (M = y.__k, E = 0; M && E < M.length; E++)
        M[E] && (M[E].__ = y, b = t(M[E], b, I));
      return b;
    }
    y.__e != b && (I.insertBefore(y.__e, b || null), b = y.__e);
    do
      b = b && b.nextSibling;
    while (b != null && b.nodeType === 8);
    return b;
  }
  function f(y, b) {
    return b = b || [], y == null || typeof y == "boolean" || (j(y) ? y.some(function(I) {
      f(I, b);
    }) : b.push(y)), b;
  }
  function x(y, b, I, M) {
    var E = y.key, $ = y.type, on = I - 1, dn = I + 1, fn = b[I];
    if (fn === null || fn && E == fn.key && $ === fn.type && !(131072 & fn.__u))
      return I;
    if (M > (fn != null && !(131072 & fn.__u) ? 1 : 0))
      for (; on >= 0 || dn < b.length; ) {
        if (on >= 0) {
          if ((fn = b[on]) && !(131072 & fn.__u) && E == fn.key && $ === fn.type)
            return on;
          on--;
        }
        if (dn < b.length) {
          if ((fn = b[dn]) && !(131072 & fn.__u) && E == fn.key && $ === fn.type)
            return dn;
          dn++;
        }
      }
    return -1;
  }
  function m(y, b, I) {
    b[0] === "-" ? y.setProperty(b, I ?? "") : y[b] = I == null ? "" : typeof I != "number" || g.test(b) ? I : I + "px";
  }
  function i(y, b, I, M, E) {
    var $;
    n:
      if (b === "style")
        if (typeof I == "string")
          y.style.cssText = I;
        else {
          if (typeof M == "string" && (y.style.cssText = M = ""), M)
            for (b in M)
              I && b in I || m(y.style, b, "");
          if (I)
            for (b in I)
              M && I[b] === M[b] || m(y.style, b, I[b]);
        }
      else if (b[0] === "o" && b[1] === "n")
        $ = b !== (b = b.replace(/(PointerCapture)$|Capture$/i, "$1")), b = b.toLowerCase() in y ? b.toLowerCase().slice(2) : b.slice(2), y.l || (y.l = {}), y.l[b + $] = I, I ? M ? I.u = M.u : (I.u = Date.now(), y.addEventListener(b, $ ? o : e, $)) : y.removeEventListener(b, $ ? o : e, $);
      else {
        if (E)
          b = b.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if (b !== "width" && b !== "height" && b !== "href" && b !== "list" && b !== "form" && b !== "tabIndex" && b !== "download" && b !== "rowSpan" && b !== "colSpan" && b !== "role" && b in y)
          try {
            y[b] = I ?? "";
            break n;
          } catch {
          }
        typeof I == "function" || (I == null || I === !1 && b[4] !== "-" ? y.removeAttribute(b) : y.setAttribute(b, I));
      }
  }
  function e(y) {
    if (this.l) {
      var b = this.l[y.type + !1];
      if (y.t) {
        if (y.t <= b.u)
          return;
      } else
        y.t = Date.now();
      return b(l.event ? l.event(y) : y);
    }
  }
  function o(y) {
    if (this.l)
      return this.l[y.type + !0](l.event ? l.event(y) : y);
  }
  function a(y, b, I, M, E, $, on, dn, fn, pn) {
    var gn, W, Hn, On, Qn, ae, de, ee, ve, Me, Te, ye, De, Ye, qe, Ee = b.type;
    if (b.constructor !== void 0)
      return null;
    128 & I.__u && (fn = !!(32 & I.__u), $ = [dn = b.__e = I.__e]), (gn = l.__b) && gn(b);
    n:
      if (typeof Ee == "function")
        try {
          if (ee = b.props, ve = (gn = Ee.contextType) && M[gn.__c], Me = gn ? ve ? ve.props.value : gn.__ : M, I.__c ? de = (W = b.__c = I.__c).__ = W.__E : ("prototype" in Ee && Ee.prototype.render ? b.__c = W = new Ee(ee, Me) : (b.__c = W = new nn(ee, Me), W.constructor = Ee, W.render = en), ve && ve.sub(W), W.props = ee, W.state || (W.state = {}), W.context = Me, W.__n = M, Hn = W.__d = !0, W.__h = [], W._sb = []), W.__s == null && (W.__s = W.state), Ee.getDerivedStateFromProps != null && (W.__s == W.state && (W.__s = k({}, W.__s)), k(W.__s, Ee.getDerivedStateFromProps(ee, W.__s))), On = W.props, Qn = W.state, W.__v = b, Hn)
            Ee.getDerivedStateFromProps == null && W.componentWillMount != null && W.componentWillMount(), W.componentDidMount != null && W.__h.push(W.componentDidMount);
          else {
            if (Ee.getDerivedStateFromProps == null && ee !== On && W.componentWillReceiveProps != null && W.componentWillReceiveProps(ee, Me), !W.__e && (W.shouldComponentUpdate != null && W.shouldComponentUpdate(ee, W.__s, Me) === !1 || b.__v === I.__v)) {
              for (b.__v !== I.__v && (W.props = ee, W.state = W.__s, W.__d = !1), b.__e = I.__e, b.__k = I.__k, b.__k.forEach(function(Z) {
                Z && (Z.__ = b);
              }), Te = 0; Te < W._sb.length; Te++)
                W.__h.push(W._sb[Te]);
              W._sb = [], W.__h.length && on.push(W);
              break n;
            }
            W.componentWillUpdate != null && W.componentWillUpdate(ee, W.__s, Me), W.componentDidUpdate != null && W.__h.push(function() {
              W.componentDidUpdate(On, Qn, ae);
            });
          }
          if (W.context = Me, W.props = ee, W.__P = y, W.__e = !1, ye = l.__r, De = 0, "prototype" in Ee && Ee.prototype.render) {
            for (W.state = W.__s, W.__d = !1, ye && ye(b), gn = W.render(W.props, W.state, W.context), Ye = 0; Ye < W._sb.length; Ye++)
              W.__h.push(W._sb[Ye]);
            W._sb = [];
          } else
            do
              W.__d = !1, ye && ye(b), gn = W.render(W.props, W.state, W.context), W.state = W.__s;
            while (W.__d && ++De < 25);
          W.state = W.__s, W.getChildContext != null && (M = k(k({}, M), W.getChildContext())), Hn || W.getSnapshotBeforeUpdate == null || (ae = W.getSnapshotBeforeUpdate(On, Qn)), d(y, j(qe = gn != null && gn.type === L && gn.key == null ? gn.props.children : gn) ? qe : [qe], b, I, M, E, $, on, dn, fn, pn), W.base = b.__e, b.__u &= -161, W.__h.length && on.push(W), de && (W.__E = W.__ = null);
        } catch (Z) {
          b.__v = null, fn || $ != null ? (b.__e = dn, b.__u |= fn ? 160 : 32, $[$.indexOf(dn)] = null) : (b.__e = I.__e, b.__k = I.__k), l.__e(Z, b, I);
        }
      else
        $ == null && b.__v === I.__v ? (b.__k = I.__k, b.__e = I.__e) : b.__e = c(I.__e, b, I, M, E, $, on, fn, pn);
    (gn = l.diffed) && gn(b);
  }
  function s(y, b, I) {
    for (var M = 0; M < I.length; M++)
      u(I[M], I[++M], I[++M]);
    l.__c && l.__c(b, y), y.some(function(E) {
      try {
        y = E.__h, E.__h = [], y.some(function($) {
          $.call(E);
        });
      } catch ($) {
        l.__e($, E.__v);
      }
    });
  }
  function c(y, b, I, M, E, $, on, dn, fn) {
    var pn, gn, W, Hn, On, Qn, ae, de = I.props, ee = b.props, ve = b.type;
    if (ve === "svg" && (E = !0), $ != null) {
      for (pn = 0; pn < $.length; pn++)
        if ((On = $[pn]) && "setAttribute" in On == !!ve && (ve ? On.localName === ve : On.nodeType === 3)) {
          y = On, $[pn] = null;
          break;
        }
    }
    if (y == null) {
      if (ve === null)
        return document.createTextNode(ee);
      y = E ? document.createElementNS("http://www.w3.org/2000/svg", ve) : document.createElement(ve, ee.is && ee), $ = null, dn = !1;
    }
    if (ve === null)
      de === ee || dn && y.data === ee || (y.data = ee);
    else {
      if ($ = $ && r.call(y.childNodes), de = I.props || S, !dn && $ != null)
        for (de = {}, pn = 0; pn < y.attributes.length; pn++)
          de[(On = y.attributes[pn]).name] = On.value;
      for (pn in de)
        On = de[pn], pn == "children" || (pn == "dangerouslySetInnerHTML" ? W = On : pn === "key" || pn in ee || i(y, pn, null, On, E));
      for (pn in ee)
        On = ee[pn], pn == "children" ? Hn = On : pn == "dangerouslySetInnerHTML" ? gn = On : pn == "value" ? Qn = On : pn == "checked" ? ae = On : pn === "key" || dn && typeof On != "function" || de[pn] === On || i(y, pn, On, de[pn], E);
      if (gn)
        dn || W && (gn.__html === W.__html || gn.__html === y.innerHTML) || (y.innerHTML = gn.__html), b.__k = [];
      else if (W && (y.innerHTML = ""), d(y, j(Hn) ? Hn : [Hn], b, I, M, E && ve !== "foreignObject", $, on, $ ? $[0] : I.__k && rn(I, 0), dn, fn), $ != null)
        for (pn = $.length; pn--; )
          $[pn] != null && P($[pn]);
      dn || (pn = "value", Qn !== void 0 && (Qn !== y[pn] || ve === "progress" && !Qn || ve === "option" && Qn !== de[pn]) && i(y, pn, Qn, de[pn], !1), pn = "checked", ae !== void 0 && ae !== y[pn] && i(y, pn, ae, de[pn], !1));
    }
    return y;
  }
  function u(y, b, I) {
    try {
      typeof y == "function" ? y(b) : y.current = b;
    } catch (M) {
      l.__e(M, I);
    }
  }
  function F(y, b, I) {
    var M, E;
    if (l.unmount && l.unmount(y), (M = y.ref) && (M.current && M.current !== y.__e || u(M, null, b)), (M = y.__c) != null) {
      if (M.componentWillUnmount)
        try {
          M.componentWillUnmount();
        } catch ($) {
          l.__e($, b);
        }
      M.base = M.__P = null, y.__c = void 0;
    }
    if (M = y.__k)
      for (E = 0; E < M.length; E++)
        M[E] && F(M[E], b, I || typeof y.type != "function");
    I || y.__e == null || P(y.__e), y.__ = y.__e = y.__d = void 0;
  }
  function en(y, b, I) {
    return this.constructor(y, I);
  }
  function ln(y, b, I) {
    var M, E, $, on;
    l.__ && l.__(y, b), E = (M = typeof I == "function") ? null : I && I.__k || b.__k, $ = [], on = [], a(b, y = (!M && I || b).__k = V(L, null, [y]), E || S, S, b.ownerSVGElement !== void 0, !M && I ? [I] : E ? null : b.firstChild ? r.call(b.childNodes) : null, $, !M && I ? I : E ? E.__e : b.firstChild, M, on), y.__d = void 0, s($, y, on);
  }
  function yn(y, b) {
    ln(y, b, yn);
  }
  function _n(y, b, I) {
    var M, E, $, on, dn = k({}, y.props);
    for ($ in y.type && y.type.defaultProps && (on = y.type.defaultProps), b)
      $ == "key" ? M = b[$] : $ == "ref" ? E = b[$] : dn[$] = b[$] === void 0 && on !== void 0 ? on[$] : b[$];
    return arguments.length > 2 && (dn.children = arguments.length > 3 ? r.call(arguments, 2) : I), T(y.type, dn, M || y.key, E || y.ref, null);
  }
  function wn(y, b) {
    var I = { __c: b = "__cC" + K++, __: y, Consumer: function(M, E) {
      return M.children(E);
    }, Provider: function(M) {
      var E, $;
      return this.getChildContext || (E = [], ($ = {})[b] = this, this.getChildContext = function() {
        return $;
      }, this.shouldComponentUpdate = function(on) {
        this.props.value !== on.value && E.some(function(dn) {
          dn.__e = !0, D(dn);
        });
      }, this.sub = function(on) {
        E.push(on);
        var dn = on.componentWillUnmount;
        on.componentWillUnmount = function() {
          E.splice(E.indexOf(on), 1), dn && dn.call(on);
        };
      }), M.children;
    } };
    return I.Provider.__ = I.Consumer.contextType = I;
  }
  r = O.slice, l = { __e: function(y, b, I, M) {
    for (var E, $, on; b = b.__; )
      if ((E = b.__c) && !E.__)
        try {
          if (($ = E.constructor) && $.getDerivedStateFromError != null && (E.setState($.getDerivedStateFromError(y)), on = E.__d), E.componentDidCatch != null && (E.componentDidCatch(y, M || {}), on = E.__d), on)
            return E.__E = E;
        } catch (dn) {
          y = dn;
        }
    throw y;
  } }, B = 0, nn.prototype.setState = function(y, b) {
    var I;
    I = this.__s != null && this.__s !== this.state ? this.__s : this.__s = k({}, this.state), typeof y == "function" && (y = y(k({}, I), this.props)), y && k(I, y), y != null && this.__v && (b && this._sb.push(b), D(this));
  }, nn.prototype.forceUpdate = function(y) {
    this.__v && (this.__e = !0, y && this.__h.push(y), D(this));
  }, nn.prototype.render = L, C = [], an = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, H = function(y, b) {
    return y.__v.__b - b.__v.__b;
  }, v.__r = 0, K = 0;
}, 5792: (G, N, n) => {
  n.d(N, { I4: () => v, Me: () => t, Qb: () => w, Ye: () => D, _Y: () => L, aP: () => R, bt: () => rn, d4: () => nn, eJ: () => X, qp: () => d, sO: () => vn });
  var r, l, B, C, U = n(473), an = 0, H = [], K = [], S = U.YM, O = S.__b, g = S.__r, j = S.diffed, k = S.__c, P = S.unmount, V = S.__;
  function T(s, c) {
    S.__h && S.__h(l, s, an || c), an = 0;
    var u = l.__H || (l.__H = { __: [], __h: [] });
    return s >= u.__.length && u.__.push({ __V: K }), u.__[s];
  }
  function X(s) {
    return an = 1, L(a, s);
  }
  function L(s, c, u) {
    var F = T(r++, 2);
    if (F.t = s, !F.__c && (F.__ = [u ? u(c) : a(void 0, c), function(_n) {
      var wn = F.__N ? F.__N[0] : F.__[0], y = F.t(wn, _n);
      wn !== y && (F.__N = [y, F.__[1]], F.__c.setState({}));
    }], F.__c = l, !l.u)) {
      var en = function(_n, wn, y) {
        if (!F.__c.__H)
          return !0;
        var b = F.__c.__H.__.filter(function(M) {
          return !!M.__c;
        });
        if (b.every(function(M) {
          return !M.__N;
        }))
          return !ln || ln.call(this, _n, wn, y);
        var I = !1;
        return b.forEach(function(M) {
          if (M.__N) {
            var E = M.__[0];
            M.__ = M.__N, M.__N = void 0, E !== M.__[0] && (I = !0);
          }
        }), !(!I && F.__c.props === _n) && (!ln || ln.call(this, _n, wn, y));
      };
      l.u = !0;
      var ln = l.shouldComponentUpdate, yn = l.componentWillUpdate;
      l.componentWillUpdate = function(_n, wn, y) {
        if (this.__e) {
          var b = ln;
          ln = void 0, en(_n, wn, y), ln = b;
        }
        yn && yn.call(this, _n, wn, y);
      }, l.shouldComponentUpdate = en;
    }
    return F.__N || F.__;
  }
  function nn(s, c) {
    var u = T(r++, 3);
    !S.__s && o(u.__H, c) && (u.__ = s, u.i = c, l.__H.__h.push(u));
  }
  function rn(s, c) {
    var u = T(r++, 4);
    !S.__s && o(u.__H, c) && (u.__ = s, u.i = c, l.__h.push(u));
  }
  function vn(s) {
    return an = 5, D(function() {
      return { current: s };
    }, []);
  }
  function R(s, c, u) {
    an = 6, rn(function() {
      return typeof s == "function" ? (s(c()), function() {
        return s(null);
      }) : s ? (s.current = c(), function() {
        return s.current = null;
      }) : void 0;
    }, u == null ? u : u.concat(s));
  }
  function D(s, c) {
    var u = T(r++, 7);
    return o(u.__H, c) ? (u.__V = s(), u.i = c, u.__h = s, u.__V) : u.__;
  }
  function v(s, c) {
    return an = 8, D(function() {
      return s;
    }, c);
  }
  function d(s) {
    var c = l.context[s.__c], u = T(r++, 9);
    return u.c = s, c ? (u.__ == null && (u.__ = !0, c.sub(l)), c.props.value) : s.__;
  }
  function w(s, c) {
    S.useDebugValue && S.useDebugValue(c ? c(s) : s);
  }
  function t() {
    var s = T(r++, 11);
    if (!s.__) {
      for (var c = l.__v; c !== null && !c.__m && c.__ !== null; )
        c = c.__;
      var u = c.__m || (c.__m = [0, 0]);
      s.__ = "P" + u[0] + "-" + u[1]++;
    }
    return s.__;
  }
  function f() {
    for (var s; s = H.shift(); )
      if (s.__P && s.__H)
        try {
          s.__H.__h.forEach(i), s.__H.__h.forEach(e), s.__H.__h = [];
        } catch (c) {
          s.__H.__h = [], S.__e(c, s.__v);
        }
  }
  S.__b = function(s) {
    l = null, O && O(s);
  }, S.__ = function(s, c) {
    s && c.__k && c.__k.__m && (s.__m = c.__k.__m), V && V(s, c);
  }, S.__r = function(s) {
    g && g(s), r = 0;
    var c = (l = s.__c).__H;
    c && (B === l ? (c.__h = [], l.__h = [], c.__.forEach(function(u) {
      u.__N && (u.__ = u.__N), u.__V = K, u.__N = u.i = void 0;
    })) : (c.__h.forEach(i), c.__h.forEach(e), c.__h = [], r = 0)), B = l;
  }, S.diffed = function(s) {
    j && j(s);
    var c = s.__c;
    c && c.__H && (c.__H.__h.length && (H.push(c) !== 1 && C === S.requestAnimationFrame || ((C = S.requestAnimationFrame) || m)(f)), c.__H.__.forEach(function(u) {
      u.i && (u.__H = u.i), u.__V !== K && (u.__ = u.__V), u.i = void 0, u.__V = K;
    })), B = l = null;
  }, S.__c = function(s, c) {
    c.some(function(u) {
      try {
        u.__h.forEach(i), u.__h = u.__h.filter(function(F) {
          return !F.__ || e(F);
        });
      } catch (F) {
        c.some(function(en) {
          en.__h && (en.__h = []);
        }), c = [], S.__e(F, u.__v);
      }
    }), k && k(s, c);
  }, S.unmount = function(s) {
    P && P(s);
    var c, u = s.__c;
    u && u.__H && (u.__H.__.forEach(function(F) {
      try {
        i(F);
      } catch (en) {
        c = en;
      }
    }), u.__H = void 0, c && S.__e(c, u.__v));
  };
  var x = typeof requestAnimationFrame == "function";
  function m(s) {
    var c, u = function() {
      clearTimeout(F), x && cancelAnimationFrame(c), setTimeout(s);
    }, F = setTimeout(u, 100);
    x && (c = requestAnimationFrame(u));
  }
  function i(s) {
    var c = l, u = s.__c;
    typeof u == "function" && (s.__c = void 0, u()), l = c;
  }
  function e(s) {
    var c = l;
    s.__c = s.__(), l = c;
  }
  function o(s, c) {
    return !s || s.length !== c.length || c.some(function(u, F) {
      return u !== s[F];
    });
  }
  function a(s, c) {
    return typeof c == "function" ? c(s) : c;
  }
}, 1892: (G) => {
  var N = [];
  function n(B) {
    for (var C = -1, U = 0; U < N.length; U++)
      if (N[U].identifier === B) {
        C = U;
        break;
      }
    return C;
  }
  function r(B, C) {
    for (var U = {}, an = [], H = 0; H < B.length; H++) {
      var K = B[H], S = C.base ? K[0] + C.base : K[0], O = U[S] || 0, g = "".concat(S, " ").concat(O);
      U[S] = O + 1;
      var j = n(g), k = { css: K[1], media: K[2], sourceMap: K[3], supports: K[4], layer: K[5] };
      if (j !== -1)
        N[j].references++, N[j].updater(k);
      else {
        var P = l(k, C);
        C.byIndex = H, N.splice(H, 0, { identifier: g, updater: P, references: 1 });
      }
      an.push(g);
    }
    return an;
  }
  function l(B, C) {
    var U = C.domAPI(C);
    return U.update(B), function(an) {
      if (an) {
        if (an.css === B.css && an.media === B.media && an.sourceMap === B.sourceMap && an.supports === B.supports && an.layer === B.layer)
          return;
        U.update(B = an);
      } else
        U.remove();
    };
  }
  G.exports = function(B, C) {
    var U = r(B = B || [], C = C || {});
    return function(an) {
      an = an || [];
      for (var H = 0; H < U.length; H++) {
        var K = n(U[H]);
        N[K].references--;
      }
      for (var S = r(an, C), O = 0; O < U.length; O++) {
        var g = n(U[O]);
        N[g].references === 0 && (N[g].updater(), N.splice(g, 1));
      }
      U = S;
    };
  };
}, 8311: (G) => {
  var N = {};
  G.exports = function(n, r) {
    var l = function(B) {
      if (N[B] === void 0) {
        var C = document.querySelector(B);
        if (window.HTMLIFrameElement && C instanceof window.HTMLIFrameElement)
          try {
            C = C.contentDocument.head;
          } catch {
            C = null;
          }
        N[B] = C;
      }
      return N[B];
    }(n);
    if (!l)
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    l.appendChild(r);
  };
}, 8060: (G) => {
  G.exports = function(N) {
    var n = document.createElement("style");
    return N.setAttributes(n, N.attributes), N.insert(n, N.options), n;
  };
}, 1615: (G) => {
  G.exports = function(N, n) {
    Object.keys(n).forEach(function(r) {
      N.setAttribute(r, n[r]);
    });
  };
}, 5760: (G) => {
  G.exports = function(N) {
    if (typeof document > "u")
      return { update: function() {
      }, remove: function() {
      } };
    var n = N.insertStyleElement(N);
    return { update: function(r) {
      (function(l, B, C) {
        var U = "";
        C.supports && (U += "@supports (".concat(C.supports, ") {")), C.media && (U += "@media ".concat(C.media, " {"));
        var an = C.layer !== void 0;
        an && (U += "@layer".concat(C.layer.length > 0 ? " ".concat(C.layer) : "", " {")), U += C.css, an && (U += "}"), C.media && (U += "}"), C.supports && (U += "}");
        var H = C.sourceMap;
        H && typeof btoa < "u" && (U += `
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(H)))), " */")), B.styleTagTransform(U, l, B.options);
      })(n, N, r);
    }, remove: function() {
      (function(r) {
        if (r.parentNode === null)
          return !1;
        r.parentNode.removeChild(r);
      })(n);
    } };
  };
}, 2754: (G, N, n) => {
  n.d(N, { HY: () => r.HY, tZ: () => B, BX: () => B }), n(3354);
  var r = n(473), l = 0;
  function B(C, U, an, H, K, S) {
    var O, g, j = {};
    for (g in U)
      g == "ref" ? O = U[g] : j[g] = U[g];
    var k = { type: C, props: j, key: an, ref: O, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: --l, __i: -1, __u: 0, __source: K, __self: S };
    if (typeof C == "function" && (O = C.defaultProps))
      for (g in O)
        j[g] === void 0 && (j[g] = O[g]);
    return r.YM.vnode && r.YM.vnode(k), k;
  }
} }, vt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  id: $t,
  ids: Rt,
  modules: zt
}, Symbol.toStringTag, { value: "Module" })), Ut = 70, Vt = [70], Ht = { 4114: (G, N, n) => {
  function r(S, O) {
    var g = Object.keys(S);
    if (Object.getOwnPropertySymbols) {
      var j = Object.getOwnPropertySymbols(S);
      O && (j = j.filter(function(k) {
        return Object.getOwnPropertyDescriptor(S, k).enumerable;
      })), g.push.apply(g, j);
    }
    return g;
  }
  function l(S) {
    for (var O = 1; O < arguments.length; O++) {
      var g = arguments[O] != null ? arguments[O] : {};
      O % 2 ? r(Object(g), !0).forEach(function(j) {
        B(S, j, g[j]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(S, Object.getOwnPropertyDescriptors(g)) : r(Object(g)).forEach(function(j) {
        Object.defineProperty(S, j, Object.getOwnPropertyDescriptor(g, j));
      });
    }
    return S;
  }
  function B(S, O, g) {
    return (O = function(j) {
      var k = function(P, V) {
        if (typeof P != "object" || P === null)
          return P;
        var T = P[Symbol.toPrimitive];
        if (T !== void 0) {
          var X = T.call(P, V || "default");
          if (typeof X != "object")
            return X;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (V === "string" ? String : Number)(P);
      }(j, "string");
      return typeof k == "symbol" ? k : String(k);
    }(O)) in S ? Object.defineProperty(S, O, { value: g, enumerable: !0, configurable: !0, writable: !0 }) : S[O] = g, S;
  }
  function C(S, O, g, j, k, P, V) {
    try {
      var T = S[P](V), X = T.value;
    } catch (L) {
      return void g(L);
    }
    T.done ? O(X) : Promise.resolve(X).then(j, k);
  }
  n.d(N, { j: () => H, v: () => K });
  var U, an, H = new (n(743)).m({ init: (U = function* (S) {
    H.config.setConfig(l(l({}, { defaultLocale: "en-US" }), S));
  }, an = function() {
    var S = this, O = arguments;
    return new Promise(function(g, j) {
      var k = U.apply(S, O);
      function P(T) {
        C(k, g, j, P, V, "next", T);
      }
      function V(T) {
        C(k, g, j, P, V, "throw", T);
      }
      P(void 0);
    });
  }, function(S) {
    return an.apply(this, arguments);
  }), listeners: () => [] }), K = H.config;
}, 7762: (G, N, n) => {
  n.d(N, { s: () => Ee });
  var r = n(473), l = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i, B = /^(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)$/, C = /[\s\n\\/='"\0<>]/, U = /^xlink:?./, an = /["&<]/;
  function H(Z) {
    if (an.test(Z += "") === !1)
      return Z;
    for (var Y = 0, Q = 0, hn = "", Pn = ""; Q < Z.length; Q++) {
      switch (Z.charCodeAt(Q)) {
        case 34:
          Pn = "&quot;";
          break;
        case 38:
          Pn = "&amp;";
          break;
        case 60:
          Pn = "&lt;";
          break;
        default:
          continue;
      }
      Q !== Y && (hn += Z.slice(Y, Q)), hn += Pn, Y = Q + 1;
    }
    return Q !== Y && (hn += Z.slice(Y, Q)), hn;
  }
  var K = function(Z, Y) {
    return String(Z).replace(/(\n+)/g, "$1" + (Y || "	"));
  }, S = function(Z, Y, Q) {
    return String(Z).length > 40 || String(Z).indexOf(`
`) !== -1 || String(Z).indexOf("<") !== -1;
  }, O = {}, g = /([A-Z])/g;
  function j(Z) {
    var Y = "";
    for (var Q in Z) {
      var hn = Z[Q];
      hn != null && hn !== "" && (Y && (Y += " "), Y += Q[0] == "-" ? Q : O[Q] || (O[Q] = Q.replace(g, "-$1").toLowerCase()), Y = typeof hn == "number" && l.test(Q) === !1 ? Y + ": " + hn + "px;" : Y + ": " + hn + ";");
    }
    return Y || void 0;
  }
  function k(Z, Y) {
    return Array.isArray(Y) ? Y.reduce(k, Z) : Y != null && Y !== !1 && Z.push(Y), Z;
  }
  function P() {
    this.__d = !0;
  }
  function V(Z, Y) {
    return { __v: Z, context: Y, props: Z.props, setState: P, forceUpdate: P, __d: !0, __h: [] };
  }
  function T(Z, Y) {
    var Q = Z.contextType, hn = Q && Y[Q.__c];
    return Q != null ? hn ? hn.props.value : Q.__ : Y;
  }
  var X = [];
  function L(Z, Y, Q, hn, Pn, jn) {
    if (Z == null || typeof Z == "boolean")
      return "";
    if (typeof Z != "object")
      return typeof Z == "function" ? "" : H(Z);
    var In = Q.pretty, Nn = In && typeof In == "string" ? In : "	";
    if (Array.isArray(Z)) {
      for (var Zn = "", le = 0; le < Z.length; le++)
        In && le > 0 && (Zn += `
`), Zn += L(Z[le], Y, Q, hn, Pn, jn);
      return Zn;
    }
    if (Z.constructor !== void 0)
      return "";
    var je, Bn = Z.type, zn = Z.props, Re = !1;
    if (typeof Bn == "function") {
      if (Re = !0, !Q.shallow || !hn && Q.renderRootComponent !== !1) {
        if (Bn === r.HY) {
          var Se = [];
          return k(Se, Z.props.children), L(Se, Y, Q, Q.shallowHighOrder !== !1, Pn, jn);
        }
        var fe, En = Z.__c = V(Z, Y);
        r.YM.__b && r.YM.__b(Z);
        var Oe = r.YM.__r;
        if (Bn.prototype && typeof Bn.prototype.render == "function") {
          var xe = T(Bn, Y);
          (En = Z.__c = new Bn(zn, xe)).__v = Z, En._dirty = En.__d = !0, En.props = zn, En.state == null && (En.state = {}), En._nextState == null && En.__s == null && (En._nextState = En.__s = En.state), En.context = xe, Bn.getDerivedStateFromProps ? En.state = Object.assign({}, En.state, Bn.getDerivedStateFromProps(En.props, En.state)) : En.componentWillMount && (En.componentWillMount(), En.state = En._nextState !== En.state ? En._nextState : En.__s !== En.state ? En.__s : En.state), Oe && Oe(Z), fe = En.render(En.props, En.state, En.context);
        } else
          for (var Ze = T(Bn, Y), Ne = 0; En.__d && Ne++ < 25; )
            En.__d = !1, Oe && Oe(Z), fe = Bn.call(Z.__c, zn, Ze);
        return En.getChildContext && (Y = Object.assign({}, Y, En.getChildContext())), r.YM.diffed && r.YM.diffed(Z), L(fe, Y, Q, Q.shallowHighOrder !== !1, Pn, jn);
      }
      Bn = (je = Bn).displayName || je !== Function && je.name || function(se) {
        var Kn = (Function.prototype.toString.call(se).match(/^\s*function\s+([^( ]+)/) || "")[1];
        if (!Kn) {
          for (var Un = -1, sn = X.length; sn--; )
            if (X[sn] === se) {
              Un = sn;
              break;
            }
          Un < 0 && (Un = X.push(se) - 1), Kn = "UnnamedComponent" + Un;
        }
        return Kn;
      }(je);
    }
    var Ie, Dn, Wn = "<" + Bn;
    if (zn) {
      var be = Object.keys(zn);
      Q && Q.sortAttributes === !0 && be.sort();
      for (var Ce = 0; Ce < be.length; Ce++) {
        var _ = be[Ce], p = zn[_];
        if (_ !== "children") {
          if (!C.test(_) && (Q && Q.allAttributes || _ !== "key" && _ !== "ref" && _ !== "__self" && _ !== "__source")) {
            if (_ === "defaultValue")
              _ = "value";
            else if (_ === "defaultChecked")
              _ = "checked";
            else if (_ === "defaultSelected")
              _ = "selected";
            else if (_ === "className") {
              if (zn.class !== void 0)
                continue;
              _ = "class";
            } else
              Pn && U.test(_) && (_ = _.toLowerCase().replace(/^xlink:?/, "xlink:"));
            if (_ === "htmlFor") {
              if (zn.for)
                continue;
              _ = "for";
            }
            _ === "style" && p && typeof p == "object" && (p = j(p)), _[0] === "a" && _[1] === "r" && typeof p == "boolean" && (p = String(p));
            var h = Q.attributeHook && Q.attributeHook(_, p, Y, Q, Re);
            if (h || h === "")
              Wn += h;
            else if (_ === "dangerouslySetInnerHTML")
              Dn = p && p.__html;
            else if (Bn === "textarea" && _ === "value")
              Ie = p;
            else if ((p || p === 0 || p === "") && typeof p != "function") {
              if (!(p !== !0 && p !== "" || (p = _, Q && Q.xml))) {
                Wn = Wn + " " + _;
                continue;
              }
              if (_ === "value") {
                if (Bn === "select") {
                  jn = p;
                  continue;
                }
                Bn === "option" && jn == p && zn.selected === void 0 && (Wn += " selected");
              }
              Wn = Wn + " " + _ + '="' + H(p) + '"';
            }
          }
        } else
          Ie = p;
      }
    }
    if (In) {
      var A = Wn.replace(/\n\s*/, " ");
      A === Wn || ~A.indexOf(`
`) ? In && ~Wn.indexOf(`
`) && (Wn += `
`) : Wn = A;
    }
    if (Wn += ">", C.test(Bn))
      throw new Error(Bn + " is not a valid HTML tag name in " + Wn);
    var J, z = B.test(Bn) || Q.voidElements && Q.voidElements.test(Bn), q = [];
    if (Dn)
      In && S(Dn) && (Dn = `
` + Nn + K(Dn, Nn)), Wn += Dn;
    else if (Ie != null && k(J = [], Ie).length) {
      for (var cn = In && ~Wn.indexOf(`
`), tn = !1, mn = 0; mn < J.length; mn++) {
        var An = J[mn];
        if (An != null && An !== !1) {
          var un = L(An, Y, Q, !0, Bn === "svg" || Bn !== "foreignObject" && Pn, jn);
          if (In && !cn && S(un) && (cn = !0), un)
            if (In) {
              var Sn = un.length > 0 && un[0] != "<";
              tn && Sn ? q[q.length - 1] += un : q.push(un), tn = Sn;
            } else
              q.push(un);
        }
      }
      if (In && cn)
        for (var ue = q.length; ue--; )
          q[ue] = `
` + Nn + K(q[ue], Nn);
    }
    if (q.length || Dn)
      Wn += q.join("");
    else if (Q && Q.xml)
      return Wn.substring(0, Wn.length - 1) + " />";
    return !z || J || Dn ? (In && ~Wn.indexOf(`
`) && (Wn += `
`), Wn = Wn + "</" + Bn + ">") : Wn = Wn.replace(/>$/, " />"), Wn;
  }
  var nn = { shallow: !0 };
  vn.render = vn;
  var rn = [];
  function vn(Z, Y, Q) {
    Y = Y || {};
    var hn = r.YM.__s;
    r.YM.__s = !0;
    var Pn, jn = (0, r.h)(r.HY, null);
    return jn.__k = [Z], Pn = Q && (Q.pretty || Q.voidElements || Q.sortAttributes || Q.shallow || Q.allAttributes || Q.xml || Q.attributeHook) ? L(Z, Y, Q) : t(Z, Y, !1, void 0, jn), r.YM.__c && r.YM.__c(Z, rn), r.YM.__s = hn, rn.length = 0, Pn;
  }
  function R(Z) {
    return Z == null || typeof Z == "boolean" ? null : typeof Z == "string" || typeof Z == "number" || typeof Z == "bigint" ? (0, r.h)(null, null, Z) : Z;
  }
  function D(Z, Y) {
    return Z === "className" ? "class" : Z === "htmlFor" ? "for" : Z === "defaultValue" ? "value" : Z === "defaultChecked" ? "checked" : Z === "defaultSelected" ? "selected" : Y && U.test(Z) ? Z.toLowerCase().replace(/^xlink:?/, "xlink:") : Z;
  }
  function v(Z, Y) {
    return Z === "style" && Y != null && typeof Y == "object" ? j(Y) : Z[0] === "a" && Z[1] === "r" && typeof Y == "boolean" ? String(Y) : Y;
  }
  var d = Array.isArray, w = Object.assign;
  function t(Z, Y, Q, hn, Pn) {
    if (Z == null || Z === !0 || Z === !1 || Z === "")
      return "";
    if (typeof Z != "object")
      return typeof Z == "function" ? "" : H(Z);
    if (d(Z)) {
      var jn = "";
      Pn.__k = Z;
      for (var In = 0; In < Z.length; In++)
        jn += t(Z[In], Y, Q, hn, Pn), Z[In] = R(Z[In]);
      return jn;
    }
    if (Z.constructor !== void 0)
      return "";
    Z.__ = Pn, r.YM.__b && r.YM.__b(Z);
    var Nn = Z.type, Zn = Z.props;
    if (typeof Nn == "function") {
      var le;
      if (Nn === r.HY)
        le = Zn.children;
      else {
        le = Nn.prototype && typeof Nn.prototype.render == "function" ? function(be, Ce) {
          var _ = be.type, p = T(_, Ce), h = new _(be.props, p);
          be.__c = h, h.__v = be, h.__d = !0, h.props = be.props, h.state == null && (h.state = {}), h.__s == null && (h.__s = h.state), h.context = p, _.getDerivedStateFromProps ? h.state = w({}, h.state, _.getDerivedStateFromProps(h.props, h.state)) : h.componentWillMount && (h.componentWillMount(), h.state = h.__s !== h.state ? h.__s : h.state);
          var A = r.YM.__r;
          return A && A(be), h.render(h.props, h.state, h.context);
        }(Z, Y) : function(be, Ce) {
          var _, p = V(be, Ce), h = T(be.type, Ce);
          be.__c = p;
          for (var A = r.YM.__r, J = 0; p.__d && J++ < 25; )
            p.__d = !1, A && A(be), _ = be.type.call(p, be.props, h);
          return _;
        }(Z, Y);
        var je = Z.__c;
        je.getChildContext && (Y = w({}, Y, je.getChildContext()));
      }
      var Bn = t(le = le != null && le.type === r.HY && le.key == null ? le.props.children : le, Y, Q, hn, Z);
      return r.YM.diffed && r.YM.diffed(Z), Z.__ = void 0, r.YM.unmount && r.YM.unmount(Z), Bn;
    }
    var zn, Re, Se = "<";
    if (Se += Nn, Zn)
      for (var fe in zn = Zn.children, Zn) {
        var En = Zn[fe];
        if (!(fe === "key" || fe === "ref" || fe === "__self" || fe === "__source" || fe === "children" || fe === "className" && "class" in Zn || fe === "htmlFor" && "for" in Zn || C.test(fe))) {
          if (En = v(fe = D(fe, Q), En), fe === "dangerouslySetInnerHTML")
            Re = En && En.__html;
          else if (Nn === "textarea" && fe === "value")
            zn = En;
          else if ((En || En === 0 || En === "") && typeof En != "function") {
            if (En === !0 || En === "") {
              En = fe, Se = Se + " " + fe;
              continue;
            }
            if (fe === "value") {
              if (Nn === "select") {
                hn = En;
                continue;
              }
              Nn !== "option" || hn != En || "selected" in Zn || (Se += " selected");
            }
            Se = Se + " " + fe + '="' + H(En) + '"';
          }
        }
      }
    var Oe = Se;
    if (Se += ">", C.test(Nn))
      throw new Error(Nn + " is not a valid HTML tag name in " + Se);
    var xe = "", Ze = !1;
    if (Re)
      xe += Re, Ze = !0;
    else if (typeof zn == "string")
      xe += H(zn), Ze = !0;
    else if (d(zn)) {
      Z.__k = zn;
      for (var Ne = 0; Ne < zn.length; Ne++) {
        var Ie = zn[Ne];
        if (zn[Ne] = R(Ie), Ie != null && Ie !== !1) {
          var Dn = t(Ie, Y, Nn === "svg" || Nn !== "foreignObject" && Q, hn, Z);
          Dn && (xe += Dn, Ze = !0);
        }
      }
    } else if (zn != null && zn !== !1 && zn !== !0) {
      Z.__k = [R(zn)];
      var Wn = t(zn, Y, Nn === "svg" || Nn !== "foreignObject" && Q, hn, Z);
      Wn && (xe += Wn, Ze = !0);
    }
    if (r.YM.diffed && r.YM.diffed(Z), Z.__ = void 0, r.YM.unmount && r.YM.unmount(Z), Ze)
      Se += xe;
    else if (B.test(Nn))
      return Oe + " />";
    return Se + "</" + Nn + ">";
  }
  vn.shallowRender = function(Z, Y) {
    return vn(Z, Y, nn);
  };
  const f = vn;
  var x = n(1177), m = n(2754);
  function i(Z, Y) {
    var Q = Object.keys(Z);
    if (Object.getOwnPropertySymbols) {
      var hn = Object.getOwnPropertySymbols(Z);
      Y && (hn = hn.filter(function(Pn) {
        return Object.getOwnPropertyDescriptor(Z, Pn).enumerable;
      })), Q.push.apply(Q, hn);
    }
    return Q;
  }
  function e(Z) {
    for (var Y = 1; Y < arguments.length; Y++) {
      var Q = arguments[Y] != null ? arguments[Y] : {};
      Y % 2 ? i(Object(Q), !0).forEach(function(hn) {
        o(Z, hn, Q[hn]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(Z, Object.getOwnPropertyDescriptors(Q)) : i(Object(Q)).forEach(function(hn) {
        Object.defineProperty(Z, hn, Object.getOwnPropertyDescriptor(Q, hn));
      });
    }
    return Z;
  }
  function o(Z, Y, Q) {
    return (Y = function(hn) {
      var Pn = function(jn, In) {
        if (typeof jn != "object" || jn === null)
          return jn;
        var Nn = jn[Symbol.toPrimitive];
        if (Nn !== void 0) {
          var Zn = Nn.call(jn, In || "default");
          if (typeof Zn != "object")
            return Zn;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (In === "string" ? String : Number)(jn);
      }(hn, "string");
      return typeof Pn == "symbol" ? Pn : String(Pn);
    }(Y)) in Z ? Object.defineProperty(Z, Y, { value: Q, enumerable: !0, configurable: !0, writable: !0 }) : Z[Y] = Q, Z;
  }
  function a(Z, Y, Q, hn, Pn, jn, In) {
    try {
      var Nn = Z[jn](In), Zn = Nn.value;
    } catch (le) {
      return void Q(le);
    }
    Nn.done ? Y(Zn) : Promise.resolve(Zn).then(hn, Pn);
  }
  function s(Z) {
    return function() {
      var Y = this, Q = arguments;
      return new Promise(function(hn, Pn) {
        var jn = Z.apply(Y, Q);
        function In(Zn) {
          a(jn, hn, Pn, In, Nn, "next", Zn);
        }
        function Nn(Zn) {
          a(jn, hn, Pn, In, Nn, "throw", Zn);
        }
        In(void 0);
      });
    };
  }
  var c = n(5792), u = n(3354), F = n(1857), en = n.n(F), ln = n(5587);
  const yn = JSON.parse('{"Dropin":{"ExampleComponentName":{"item":{"label":"string"}},"Incrementer":{"decreaseLabel":"Decrease Quantity","increaseLabel":"Increase Quantity","label":"Quantity"},"Modal":{"Close":{"label":"Close"}},"InlineAlert":{"dismissLabel":"Dismiss Alert"},"PriceSummary":{"subTotal":{"label":"Subtotal","withTaxes":"Including taxes","withoutTaxes":"excluding taxes"},"shipping":{"label":"Shipping","editZipAction":"Apply","estimated":"Estimated Shipping","estimatedDestination":"Estimated Shipping to ","destinationLinkAriaLabel":"Change destination","zipPlaceholder":"Zip Code","withTaxes":"Including taxes","withoutTaxes":"excluding taxes","alternateField":{"zip":"Estimate using country/zip","state":"Estimate using country/state"}},"taxes":{"total":"Tax Total","totalOnly":"Tax","breakdown":"Taxes","showBreakdown":"Show Tax Breakdown","hideBreakdown":"Hide Tax Breakdown","estimated":"Estimated Tax"},"total":{"estimated":"Estimated Total","label":"Total","withoutTax":"Total excluding taxes"}},"ProgressSpinner":{"updating":{"label":"Item is updating"},"updatingChildren":{"label":"Items are updating"}},"PriceRange":{"from":{"label":"From"},"to":{"label":"to"},"asLowAs":{"label":"As low as"}},"Swatches":{"outOfStock":{"label":"out of stock swatch"},"selected":{"label":"swatch selected"},"swatch":{"label":"swatch"}},"Accordion":{"open":{"label":"Open"},"close":{"label":"Close"}},"CartItem":{"each":{"label":"each"},"quantity":{"label":"Quantity"},"remove":{"label":"Remove {product} from the cart"},"removeDefault":{"label":"Remove item from the cart"},"taxIncluded":{"label":"incl. VAT"},"taxExcluded":{"label":"excl. tax"},"updating":{"label":"{product} is updating"}}}}');
  var _n = n(9724), wn = { default: yn, en_US: yn }, y = n(1892), b = n.n(y), I = n(5760), M = n.n(I), E = n(8311), $ = n.n(E), on = n(1615), dn = n.n(on), fn = n(8060), pn = n.n(fn), gn = n(6617), W = { attributes: { "data-dropin": "storefront-pdp", "data-sdk": "0.22.0" }, styleTagTransform: function(Z, Y) {
    var le;
    window._loadedStyles = window._loadedStyles ?? {};
    const Q = (le = Z == null ? void 0 : Z.match(/^\.dropin-(\w+)/)) == null ? void 0 : le[1], hn = Y.getAttribute("data-sdk"), Pn = Q ? `sdk/${Q}` : Y.getAttribute("data-dropin");
    Y.setAttribute("data-dropin", Pn), Y.removeAttribute("data-sdk");
    const jn = window._loadedStyles[Pn];
    if (jn) {
      const je = function(Bn, zn) {
        const [Re, Se] = Bn.split("-"), [fe, En] = zn.split("-"), Oe = [...Re.split("."), Se], xe = [...fe.split("."), En], Ze = parseInt(Oe[0], 10), Ne = parseInt(xe[0], 10);
        if (Ze !== Ne)
          return Ze > Ne ? Bn : zn;
        const Ie = parseInt(Oe[1], 10), Dn = parseInt(xe[1], 10);
        if (Ie !== Dn)
          return Ie > Dn ? Bn : zn;
        const Wn = parseInt(Oe[2], 10), be = parseInt(xe[2], 10);
        if (Wn !== be)
          return Wn > be ? Bn : zn;
        if (Oe[3] && xe[3]) {
          const Ce = /(alpha|beta)(.*)/, _ = Oe[3].match(Ce), p = xe[3].match(Ce), h = _[1], A = p[1], J = parseInt(_[2], 10), z = parseInt(p[2], 10);
          if (h === A)
            return J > z ? Bn : zn;
          if (h === "alpha" && A === "beta")
            return zn;
          if (h === "beta" && A === "alpha")
            return Bn;
        }
        return Oe[3] ? zn : Bn;
      }(hn, jn.sdk);
      if (!Q || Q && je === jn.sdk) {
        const Bn = jn.style.textContent;
        jn.style.textContent = `${Bn}
/* --- MERGED --- */
${Z}`;
      } else
        Q && je !== jn.sdk && (jn.style.textContent = `/* --- UPGRADED --- */
${Z}`);
      return void Y.remove();
    }
    Y.textContent = Z, window._loadedStyles[Pn] = { sdk: hn, core: Q, style: Y };
    const In = document.querySelector("head"), { lastDropinStyleInjected: Nn, lastSDKStyleInjected: Zn } = window._loadedStyles;
    Q ? (Zn ? In.insertBefore(Y, Zn.nextSibling) : In.insertBefore(Y, In.firstChild), window._loadedStyles.lastSDKStyleInjected = Y) : (Nn ? In.insertBefore(Y, Nn.nextSibling) : Zn ? In.insertBefore(Y, Zn.nextSibling) : In.insertBefore(Y, In.firstChild), window._loadedStyles.lastDropinStyleInjected = Y);
  } };
  W.setAttributes = dn(), W.insert = $().bind(null, "head"), W.domAPI = M(), W.insertStyleElement = pn(), b()(gn.Z, W), gn.Z && gn.Z.locals && gn.Z.locals;
  var Hn = n(4768), On = { attributes: { "data-dropin": "storefront-pdp", "data-sdk": "0.22.0" }, styleTagTransform: function(Z, Y) {
    var le;
    window._loadedStyles = window._loadedStyles ?? {};
    const Q = (le = Z == null ? void 0 : Z.match(/^\.dropin-(\w+)/)) == null ? void 0 : le[1], hn = Y.getAttribute("data-sdk"), Pn = Q ? `sdk/${Q}` : Y.getAttribute("data-dropin");
    Y.setAttribute("data-dropin", Pn), Y.removeAttribute("data-sdk");
    const jn = window._loadedStyles[Pn];
    if (jn) {
      const je = function(Bn, zn) {
        const [Re, Se] = Bn.split("-"), [fe, En] = zn.split("-"), Oe = [...Re.split("."), Se], xe = [...fe.split("."), En], Ze = parseInt(Oe[0], 10), Ne = parseInt(xe[0], 10);
        if (Ze !== Ne)
          return Ze > Ne ? Bn : zn;
        const Ie = parseInt(Oe[1], 10), Dn = parseInt(xe[1], 10);
        if (Ie !== Dn)
          return Ie > Dn ? Bn : zn;
        const Wn = parseInt(Oe[2], 10), be = parseInt(xe[2], 10);
        if (Wn !== be)
          return Wn > be ? Bn : zn;
        if (Oe[3] && xe[3]) {
          const Ce = /(alpha|beta)(.*)/, _ = Oe[3].match(Ce), p = xe[3].match(Ce), h = _[1], A = p[1], J = parseInt(_[2], 10), z = parseInt(p[2], 10);
          if (h === A)
            return J > z ? Bn : zn;
          if (h === "alpha" && A === "beta")
            return zn;
          if (h === "beta" && A === "alpha")
            return Bn;
        }
        return Oe[3] ? zn : Bn;
      }(hn, jn.sdk);
      if (!Q || Q && je === jn.sdk) {
        const Bn = jn.style.textContent;
        jn.style.textContent = `${Bn}
/* --- MERGED --- */
${Z}`;
      } else
        Q && je !== jn.sdk && (jn.style.textContent = `/* --- UPGRADED --- */
${Z}`);
      return void Y.remove();
    }
    Y.textContent = Z, window._loadedStyles[Pn] = { sdk: hn, core: Q, style: Y };
    const In = document.querySelector("head"), { lastDropinStyleInjected: Nn, lastSDKStyleInjected: Zn } = window._loadedStyles;
    Q ? (Zn ? In.insertBefore(Y, Zn.nextSibling) : In.insertBefore(Y, In.firstChild), window._loadedStyles.lastSDKStyleInjected = Y) : (Nn ? In.insertBefore(Y, Nn.nextSibling) : Zn ? In.insertBefore(Y, Zn.nextSibling) : In.insertBefore(Y, In.firstChild), window._loadedStyles.lastDropinStyleInjected = Y);
  } };
  On.setAttributes = dn(), On.insert = $().bind(null, "head"), On.domAPI = M(), On.insertStyleElement = pn(), b()(Hn.Z, On), Hn.Z && Hn.Z.locals && Hn.Z.locals;
  var Qn = ["lang", "langDefinitions", "className", "children"];
  function ae(Z, Y) {
    var Q = Object.keys(Z);
    if (Object.getOwnPropertySymbols) {
      var hn = Object.getOwnPropertySymbols(Z);
      Y && (hn = hn.filter(function(Pn) {
        return Object.getOwnPropertyDescriptor(Z, Pn).enumerable;
      })), Q.push.apply(Q, hn);
    }
    return Q;
  }
  function de(Z) {
    for (var Y = 1; Y < arguments.length; Y++) {
      var Q = arguments[Y] != null ? arguments[Y] : {};
      Y % 2 ? ae(Object(Q), !0).forEach(function(hn) {
        ee(Z, hn, Q[hn]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(Z, Object.getOwnPropertyDescriptors(Q)) : ae(Object(Q)).forEach(function(hn) {
        Object.defineProperty(Z, hn, Object.getOwnPropertyDescriptor(Q, hn));
      });
    }
    return Z;
  }
  function ee(Z, Y, Q) {
    return (Y = function(hn) {
      var Pn = function(jn, In) {
        if (typeof jn != "object" || jn === null)
          return jn;
        var Nn = jn[Symbol.toPrimitive];
        if (Nn !== void 0) {
          var Zn = Nn.call(jn, In || "default");
          if (typeof Zn != "object")
            return Zn;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (In === "string" ? String : Number)(jn);
      }(hn, "string");
      return typeof Pn == "symbol" ? Pn : String(Pn);
    }(Y)) in Z ? Object.defineProperty(Z, Y, { value: Q, enumerable: !0, configurable: !0, writable: !0 }) : Z[Y] = Q, Z;
  }
  function ve(Z, Y) {
    if (Z == null)
      return {};
    var Q, hn, Pn = function(In, Nn) {
      if (In == null)
        return {};
      var Zn, le, je = {}, Bn = Object.keys(In);
      for (le = 0; le < Bn.length; le++)
        Zn = Bn[le], Nn.indexOf(Zn) >= 0 || (je[Zn] = In[Zn]);
      return je;
    }(Z, Y);
    if (Object.getOwnPropertySymbols) {
      var jn = Object.getOwnPropertySymbols(Z);
      for (hn = 0; hn < jn.length; hn++)
        Q = jn[hn], Y.indexOf(Q) >= 0 || Object.prototype.propertyIsEnumerable.call(Z, Q) && (Pn[Q] = Z[Q]);
    }
    return Pn;
  }
  var Me = (0, u.kr)({ locale: "en-US" }), Te = (Z) => {
    var { lang: Y = "en_US", langDefinitions: Q = {}, className: hn, children: Pn } = Z, jn = ve(Z, Qn), In = (0, u.Ye)(() => {
      var Zn, le = en()(Q.default, (Zn = Q[Y]) !== null && Zn !== void 0 ? Zn : {});
      return en()(((je) => en()(wn.default, wn[je] || {}))(Y), le);
    }, [Y, Q]), Nn = Y.replace("_", "-");
    return (0, m.tZ)(Me.Provider, { value: { locale: Nn }, children: (0, m.tZ)(_n.Pj, { definition: In, children: (0, m.tZ)("div", de(de({}, jn), {}, { className: (0, ln.S)(["dropin-design", hn]), children: Pn })) }) });
  }, ye = n(5214), De = n(4114), Ye = { default: n(7770) }, qe = (Z) => {
    var Y, { children: Q } = Z, [hn, Pn] = (0, c.eJ)(), jn = (Y = De.v.getConfig()) === null || Y === void 0 ? void 0 : Y.langDefinitions;
    (0, c.d4)(() => {
      var Nn = ye.events.on("locale", (Zn) => {
        Zn !== hn && Pn(Zn);
      }, { eager: !0 });
      return () => {
        Nn == null || Nn.off();
      };
    }, [hn]);
    var In = en()(Ye, jn ?? {});
    return (0, m.tZ)(Te, { lang: hn, langDefinitions: In, children: Q });
  }, Ee = new class {
    constructor(Z) {
      this._provider = Z;
    }
    render(Z, Y) {
      var Q = this;
      return function() {
        var hn = s(function* (Pn) {
          var jn, In;
          if (!Z)
            throw new Error("Component is not defined");
          if (!Pn)
            throw new Error("Root element is not defined");
          var Nn = (jn = yield (In = Z.getInitialData) === null || In === void 0 ? void 0 : In.call(Z, Y)) !== null && jn !== void 0 ? jn : {};
          (0, r.sY)((0, m.tZ)(x.F, e(e({ node: Q._provider }, Q._provider.props), {}, { children: (0, m.tZ)(Z, e(e({}, Y), {}, { initialData: Nn })) })), Pn);
        });
        return function(Pn) {
          return hn.apply(this, arguments);
        };
      }();
    }
    unmount(Z) {
      if (!Z)
        throw new Error("Root element is not defined");
      (0, r.sY)(null, Z);
    }
    toString(Z, Y, Q) {
      var hn = this;
      return s(function* () {
        var Pn, jn;
        if (!Z)
          throw new Error("Component is not defined");
        var In = (Pn = yield (jn = Z.getInitialData) === null || jn === void 0 ? void 0 : jn.call(Z, Y)) !== null && Pn !== void 0 ? Pn : {};
        return f((0, m.tZ)(x.F, e(e({ node: hn._provider }, hn._provider.props), {}, { children: (0, m.tZ)(Z, e(e({}, Y), {}, { initialData: In })) })), {}, e({}, Q));
      })();
    }
  }((0, m.tZ)(qe, {}));
}, 6617: (G, N, n) => {
  n.d(N, { Z: () => U });
  var r = n(4933), l = n.n(r), B = n(3476), C = n.n(B)()(l());
  C.push([G.id, `.dropin-design{
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
  const U = C;
}, 4768: (G, N, n) => {
  n.d(N, { Z: () => U });
  var r = n(4933), l = n.n(r), B = n(3476), C = n.n(B)()(l());
  C.push([G.id, `.dropin-design a{
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
  const U = C;
}, 1857: (G) => {
  var N = function(K) {
    return /* @__PURE__ */ function(S) {
      return !!S && typeof S == "object";
    }(K) && !function(S) {
      var O = Object.prototype.toString.call(S);
      return O === "[object RegExp]" || O === "[object Date]" || function(g) {
        return g.$$typeof === n;
      }(S);
    }(K);
  }, n = typeof Symbol == "function" && Symbol.for ? Symbol.for("react.element") : 60103;
  function r(K, S) {
    return S.clone !== !1 && S.isMergeableObject(K) ? an((O = K, Array.isArray(O) ? [] : {}), K, S) : K;
    var O;
  }
  function l(K, S, O) {
    return K.concat(S).map(function(g) {
      return r(g, O);
    });
  }
  function B(K) {
    return Object.keys(K).concat(function(S) {
      return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(S).filter(function(O) {
        return Object.propertyIsEnumerable.call(S, O);
      }) : [];
    }(K));
  }
  function C(K, S) {
    try {
      return S in K;
    } catch {
      return !1;
    }
  }
  function U(K, S, O) {
    var g = {};
    return O.isMergeableObject(K) && B(K).forEach(function(j) {
      g[j] = r(K[j], O);
    }), B(S).forEach(function(j) {
      (function(k, P) {
        return C(k, P) && !(Object.hasOwnProperty.call(k, P) && Object.propertyIsEnumerable.call(k, P));
      })(K, j) || (C(K, j) && O.isMergeableObject(S[j]) ? g[j] = function(k, P) {
        if (!P.customMerge)
          return an;
        var V = P.customMerge(k);
        return typeof V == "function" ? V : an;
      }(j, O)(K[j], S[j], O) : g[j] = r(S[j], O));
    }), g;
  }
  function an(K, S, O) {
    (O = O || {}).arrayMerge = O.arrayMerge || l, O.isMergeableObject = O.isMergeableObject || N, O.cloneUnlessOtherwiseSpecified = r;
    var g = Array.isArray(S);
    return g === Array.isArray(K) ? g ? O.arrayMerge(K, S, O) : U(K, S, O) : r(S, O);
  }
  an.all = function(K, S) {
    if (!Array.isArray(K))
      throw new Error("first argument should be an array");
    return K.reduce(function(O, g) {
      return an(O, g, S);
    }, {});
  };
  var H = an;
  G.exports = H;
}, 5214: (G, N, n) => {
  G.exports = ((r) => {
    var l = {};
    return n.d(l, r), l;
  })({ events: () => ct });
}, 7770: (G) => {
  G.exports = JSON.parse('{"PDP":{"Product":{"Incrementer":{"label":"Item Quantity"},"OutOfStock":{"label":"Out of Stock"},"AddToCart":{"label":"Add to Cart"},"Details":{"label":"Details"},"RegularPrice":{"label":"Regular Price"},"SpecialPrice":{"label":"Special Price"},"PriceRange":{"From":{"label":"From"},"To":{"label":"to"}},"Image":{"label":"{product} Image {key} of {total}"}},"Swatches":{"Required":{"label":"Required"}},"Carousel":{"label":"Carousel","Next":{"label":"Next"},"Previous":{"label":"Previous"},"Slide":{"label":"Slide"},"Controls":{"label":"Carousel Controls","Button":{"label":"Show slide {key} of {total}"}}},"Overlay":{"Close":{"label":"Close"}}},"Custom":{"quantityLabel":"Passengers"}}');
} };
Jn.C(vt);
Jn.C(xt);
var at, mt = (at = 7762, Jn(Jn.s = at)).s;
const Lt = 918, Kt = [918], Yt = { 1676: (G, N, n) => {
  n.r(N), n.d(N, { default: () => C });
  var r, l = n(3354);
  function B() {
    return B = Object.assign ? Object.assign.bind() : function(U) {
      for (var an = 1; an < arguments.length; an++) {
        var H = arguments[an];
        for (var K in H)
          Object.prototype.hasOwnProperty.call(H, K) && (U[K] = H[K]);
      }
      return U;
    }, B.apply(this, arguments);
  }
  const C = function(U) {
    return l.az("svg", B({ "data-name": "Icon \\u2013 Add \\u2013 Base", xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24 }, U), r || (r = l.az("g", { "data-name": "Add icon", fill: "none", stroke: "currentColor" }, l.az("path", { vectorEffect: "non-scaling-stroke", "data-name": "Line 579", d: "M11.95 5.65v12.7" }), l.az("path", { vectorEffect: "non-scaling-stroke", "data-name": "Line 580", d: "M5.655 12h12.7" }))));
  };
}, 8991: (G, N, n) => {
  n.r(N), n.d(N, { default: () => C });
  var r, l = n(3354);
  function B() {
    return B = Object.assign ? Object.assign.bind() : function(U) {
      for (var an = 1; an < arguments.length; an++) {
        var H = arguments[an];
        for (var K in H)
          Object.prototype.hasOwnProperty.call(H, K) && (U[K] = H[K]);
      }
      return U;
    }, B.apply(this, arguments);
  }
  const C = function(U) {
    return l.az("svg", B({ width: 24, height: 24, fill: "none", xmlns: "http://www.w3.org/2000/svg" }, U), r || (r = l.az("path", { d: "M7.745 9.877 12 14.132l4.255-4.255", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "square", strokeLinejoin: "round" })));
  };
}, 7498: (G, N, n) => {
  n.r(N), n.d(N, { default: () => C });
  var r, l = n(3354);
  function B() {
    return B = Object.assign ? Object.assign.bind() : function(U) {
      for (var an = 1; an < arguments.length; an++) {
        var H = arguments[an];
        for (var K in H)
          Object.prototype.hasOwnProperty.call(H, K) && (U[K] = H[K]);
      }
      return U;
    }, B.apply(this, arguments);
  }
  const C = function(U) {
    return l.az("svg", B({ width: 24, height: 24, fill: "none", xmlns: "http://www.w3.org/2000/svg" }, U), r || (r = l.az("path", { vectorEffect: "non-scaling-stroke", d: "M18.36 5.64 5.63 18.37M18.36 18.37 5.63 5.64", stroke: "currentColor" })));
  };
}, 2504: (G, N, n) => {
  n.r(N), n.d(N, { default: () => C });
  var r, l = n(3354);
  function B() {
    return B = Object.assign ? Object.assign.bind() : function(U) {
      for (var an = 1; an < arguments.length; an++) {
        var H = arguments[an];
        for (var K in H)
          Object.prototype.hasOwnProperty.call(H, K) && (U[K] = H[K]);
      }
      return U;
    }, B.apply(this, arguments);
  }
  const C = function(U) {
    return l.az("svg", B({ width: 24, height: 24, fill: "none", xmlns: "http://www.w3.org/2000/svg" }, U), r || (r = l.az("path", { d: "M17.333 11.75H6.667", strokeWidth: 1.5, strokeLinecap: "square", strokeLinejoin: "round", vectorEffect: "non-scaling-stroke", stroke: "currentColor" })));
  };
}, 6901: (G, N, n) => {
  n.d(N, { O: () => vn });
  var r = n(5587), l = n(1177), B = n(1892), C = n.n(B), U = n(5760), an = n.n(U), H = n(8311), K = n.n(H), S = n(1615), O = n.n(S), g = n(8060), j = n.n(g), k = n(387), P = { attributes: { "data-dropin": "storefront-pdp", "data-sdk": "0.22.0" }, styleTagTransform: function(R, D) {
    var i;
    window._loadedStyles = window._loadedStyles ?? {};
    const v = (i = R == null ? void 0 : R.match(/^\.dropin-(\w+)/)) == null ? void 0 : i[1], d = D.getAttribute("data-sdk"), w = v ? `sdk/${v}` : D.getAttribute("data-dropin");
    D.setAttribute("data-dropin", w), D.removeAttribute("data-sdk");
    const t = window._loadedStyles[w];
    if (t) {
      const e = function(o, a) {
        const [s, c] = o.split("-"), [u, F] = a.split("-"), en = [...s.split("."), c], ln = [...u.split("."), F], yn = parseInt(en[0], 10), _n = parseInt(ln[0], 10);
        if (yn !== _n)
          return yn > _n ? o : a;
        const wn = parseInt(en[1], 10), y = parseInt(ln[1], 10);
        if (wn !== y)
          return wn > y ? o : a;
        const b = parseInt(en[2], 10), I = parseInt(ln[2], 10);
        if (b !== I)
          return b > I ? o : a;
        if (en[3] && ln[3]) {
          const M = /(alpha|beta)(.*)/, E = en[3].match(M), $ = ln[3].match(M), on = E[1], dn = $[1], fn = parseInt(E[2], 10), pn = parseInt($[2], 10);
          if (on === dn)
            return fn > pn ? o : a;
          if (on === "alpha" && dn === "beta")
            return a;
          if (on === "beta" && dn === "alpha")
            return o;
        }
        return en[3] ? a : o;
      }(d, t.sdk);
      if (!v || v && e === t.sdk) {
        const o = t.style.textContent;
        t.style.textContent = `${o}
/* --- MERGED --- */
${R}`;
      } else
        v && e !== t.sdk && (t.style.textContent = `/* --- UPGRADED --- */
${R}`);
      return void D.remove();
    }
    D.textContent = R, window._loadedStyles[w] = { sdk: d, core: v, style: D };
    const f = document.querySelector("head"), { lastDropinStyleInjected: x, lastSDKStyleInjected: m } = window._loadedStyles;
    v ? (m ? f.insertBefore(D, m.nextSibling) : f.insertBefore(D, f.firstChild), window._loadedStyles.lastSDKStyleInjected = D) : (x ? f.insertBefore(D, x.nextSibling) : m ? f.insertBefore(D, m.nextSibling) : f.insertBefore(D, f.firstChild), window._loadedStyles.lastDropinStyleInjected = D);
  } };
  P.setAttributes = O(), P.insert = K().bind(null, "head"), P.domAPI = an(), P.insertStyleElement = j(), C()(k.Z, P), k.Z && k.Z.locals && k.Z.locals;
  var V = n(2754), T = ["className", "categories", "separator"];
  function X(R, D) {
    var v = Object.keys(R);
    if (Object.getOwnPropertySymbols) {
      var d = Object.getOwnPropertySymbols(R);
      D && (d = d.filter(function(w) {
        return Object.getOwnPropertyDescriptor(R, w).enumerable;
      })), v.push.apply(v, d);
    }
    return v;
  }
  function L(R) {
    for (var D = 1; D < arguments.length; D++) {
      var v = arguments[D] != null ? arguments[D] : {};
      D % 2 ? X(Object(v), !0).forEach(function(d) {
        nn(R, d, v[d]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(R, Object.getOwnPropertyDescriptors(v)) : X(Object(v)).forEach(function(d) {
        Object.defineProperty(R, d, Object.getOwnPropertyDescriptor(v, d));
      });
    }
    return R;
  }
  function nn(R, D, v) {
    return (D = function(d) {
      var w = function(t, f) {
        if (typeof t != "object" || t === null)
          return t;
        var x = t[Symbol.toPrimitive];
        if (x !== void 0) {
          var m = x.call(t, f || "default");
          if (typeof m != "object")
            return m;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (f === "string" ? String : Number)(t);
      }(d, "string");
      return typeof w == "symbol" ? w : String(w);
    }(D)) in R ? Object.defineProperty(R, D, { value: v, enumerable: !0, configurable: !0, writable: !0 }) : R[D] = v, R;
  }
  function rn(R, D) {
    if (R == null)
      return {};
    var v, d, w = function(f, x) {
      if (f == null)
        return {};
      var m, i, e = {}, o = Object.keys(f);
      for (i = 0; i < o.length; i++)
        m = o[i], x.indexOf(m) >= 0 || (e[m] = f[m]);
      return e;
    }(R, D);
    if (Object.getOwnPropertySymbols) {
      var t = Object.getOwnPropertySymbols(R);
      for (d = 0; d < t.length; d++)
        v = t[d], D.indexOf(v) >= 0 || Object.prototype.propertyIsEnumerable.call(R, v) && (w[v] = R[v]);
    }
    return w;
  }
  var vn = (R) => {
    var { className: D, categories: v, separator: d } = R, w = rn(R, T);
    return (0, V.tZ)(V.HY, { children: (v == null ? void 0 : v.length) > 1 && (0, V.tZ)("nav", L(L({ role: "navigation" }, w), {}, { className: (0, r.S)(["dropin-breadcrumbs__container", D]), children: (0, V.tZ)("ul", { className: "dropin-breadcrumbs__items", children: v == null ? void 0 : v.map((t, f) => (0, V.BX)("li", { className: (0, r.S)(["dropin-breadcrumbs__item", ["dropin-breadcrumbs__item--last", f === v.length - 1]]), children: [(0, V.tZ)(l.F, { node: t, className: "dropin-breadcrumbs__link" }), !d && f !== v.length - 1 && (0, V.BX)("span", { className: "dropin-breadcrumbs__separator--default", children: [" ", "/", " "] }), d && f !== v.length - 1 && (0, V.tZ)(l.F, { node: d, className: "dropin-breadcrumbs__separator--icon" })] }, f)) }) })) });
  };
}, 6816: (G, N, n) => {
  n.d(N, { z: () => vn });
  var r = n(5587), l = n(1177), B = n(1892), C = n.n(B), U = n(5760), an = n.n(U), H = n(8311), K = n.n(H), S = n(1615), O = n.n(S), g = n(8060), j = n.n(g), k = n(8534), P = { attributes: { "data-dropin": "storefront-pdp", "data-sdk": "0.22.0" }, styleTagTransform: function(R, D) {
    var i;
    window._loadedStyles = window._loadedStyles ?? {};
    const v = (i = R == null ? void 0 : R.match(/^\.dropin-(\w+)/)) == null ? void 0 : i[1], d = D.getAttribute("data-sdk"), w = v ? `sdk/${v}` : D.getAttribute("data-dropin");
    D.setAttribute("data-dropin", w), D.removeAttribute("data-sdk");
    const t = window._loadedStyles[w];
    if (t) {
      const e = function(o, a) {
        const [s, c] = o.split("-"), [u, F] = a.split("-"), en = [...s.split("."), c], ln = [...u.split("."), F], yn = parseInt(en[0], 10), _n = parseInt(ln[0], 10);
        if (yn !== _n)
          return yn > _n ? o : a;
        const wn = parseInt(en[1], 10), y = parseInt(ln[1], 10);
        if (wn !== y)
          return wn > y ? o : a;
        const b = parseInt(en[2], 10), I = parseInt(ln[2], 10);
        if (b !== I)
          return b > I ? o : a;
        if (en[3] && ln[3]) {
          const M = /(alpha|beta)(.*)/, E = en[3].match(M), $ = ln[3].match(M), on = E[1], dn = $[1], fn = parseInt(E[2], 10), pn = parseInt($[2], 10);
          if (on === dn)
            return fn > pn ? o : a;
          if (on === "alpha" && dn === "beta")
            return a;
          if (on === "beta" && dn === "alpha")
            return o;
        }
        return en[3] ? a : o;
      }(d, t.sdk);
      if (!v || v && e === t.sdk) {
        const o = t.style.textContent;
        t.style.textContent = `${o}
/* --- MERGED --- */
${R}`;
      } else
        v && e !== t.sdk && (t.style.textContent = `/* --- UPGRADED --- */
${R}`);
      return void D.remove();
    }
    D.textContent = R, window._loadedStyles[w] = { sdk: d, core: v, style: D };
    const f = document.querySelector("head"), { lastDropinStyleInjected: x, lastSDKStyleInjected: m } = window._loadedStyles;
    v ? (m ? f.insertBefore(D, m.nextSibling) : f.insertBefore(D, f.firstChild), window._loadedStyles.lastSDKStyleInjected = D) : (x ? f.insertBefore(D, x.nextSibling) : m ? f.insertBefore(D, m.nextSibling) : f.insertBefore(D, f.firstChild), window._loadedStyles.lastDropinStyleInjected = D);
  } };
  P.setAttributes = O(), P.insert = K().bind(null, "head"), P.domAPI = an(), P.insertStyleElement = j(), C()(k.Z, P), k.Z && k.Z.locals && k.Z.locals;
  var V = n(2754), T = ["value", "variant", "size", "icon", "className", "children", "disabled", "active", "activeChildren", "activeIcon", "href"];
  function X(R, D) {
    var v = Object.keys(R);
    if (Object.getOwnPropertySymbols) {
      var d = Object.getOwnPropertySymbols(R);
      D && (d = d.filter(function(w) {
        return Object.getOwnPropertyDescriptor(R, w).enumerable;
      })), v.push.apply(v, d);
    }
    return v;
  }
  function L(R) {
    for (var D = 1; D < arguments.length; D++) {
      var v = arguments[D] != null ? arguments[D] : {};
      D % 2 ? X(Object(v), !0).forEach(function(d) {
        nn(R, d, v[d]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(R, Object.getOwnPropertyDescriptors(v)) : X(Object(v)).forEach(function(d) {
        Object.defineProperty(R, d, Object.getOwnPropertyDescriptor(v, d));
      });
    }
    return R;
  }
  function nn(R, D, v) {
    return (D = function(d) {
      var w = function(t, f) {
        if (typeof t != "object" || t === null)
          return t;
        var x = t[Symbol.toPrimitive];
        if (x !== void 0) {
          var m = x.call(t, f || "default");
          if (typeof m != "object")
            return m;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (f === "string" ? String : Number)(t);
      }(d, "string");
      return typeof w == "symbol" ? w : String(w);
    }(D)) in R ? Object.defineProperty(R, D, { value: v, enumerable: !0, configurable: !0, writable: !0 }) : R[D] = v, R;
  }
  function rn(R, D) {
    if (R == null)
      return {};
    var v, d, w = function(f, x) {
      if (f == null)
        return {};
      var m, i, e = {}, o = Object.keys(f);
      for (i = 0; i < o.length; i++)
        m = o[i], x.indexOf(m) >= 0 || (e[m] = f[m]);
      return e;
    }(R, D);
    if (Object.getOwnPropertySymbols) {
      var t = Object.getOwnPropertySymbols(R);
      for (d = 0; d < t.length; d++)
        v = t[d], D.indexOf(v) >= 0 || Object.prototype.propertyIsEnumerable.call(R, v) && (w[v] = R[v]);
    }
    return w;
  }
  var vn = (R) => {
    var { value: D, variant: v = "primary", size: d = "medium", icon: w, className: t, children: f, disabled: x = !1, active: m = !1, activeChildren: i, activeIcon: e, href: o } = R, a = rn(R, T), s = "dropin-button";
    (w && !f || w && m && !i || !w && m && e) && (s = "dropin-iconButton"), m && i && (s = "dropin-button"), t = (0, r.S)([s, "".concat(s, "--").concat(d), "".concat(s, "--").concat(v), ["".concat(s, "--").concat(v, "--disabled"), x], f && w && "".concat(s, "--with-icon"), !f && i && w && "".concat(s, "--with-icon"), m && e && "".concat(s, "--with-icon"), t]);
    var c = (0, r.S)(["dropin-button-icon", "dropin-button-icon--".concat(v), ["dropin-button-icon--".concat(v, "--disabled"), x], w == null ? void 0 : w.props.className]), u = o ? L(L({ node: (0, V.tZ)("a", {}), role: "link", href: o }, a), {}, { disabled: x, active: m }) : L(L({ node: (0, V.tZ)("button", {}), role: "button" }, a), {}, { value: D, disabled: x, active: m });
    return (0, V.BX)(l.F, L(L({}, u), {}, { className: t, children: [w && !m && (0, V.tZ)(l.F, { node: w, className: c }), e && m && (0, V.tZ)(l.F, { node: e, className: c }), f && !m && (typeof f == "string" ? (0, V.tZ)("span", { children: f }) : f), m && i && (typeof i == "string" ? (0, V.tZ)("span", { children: i }) : i)] }));
  };
}, 8290: (G, N, n) => {
  n.d(N, { b: () => D });
  var r = n(3354), l = n(5587), B = n(1892), C = n.n(B), U = n(5760), an = n.n(U), H = n(8311), K = n.n(H), S = n(1615), O = n.n(S), g = n(8060), j = n.n(g), k = n(3652), P = { attributes: { "data-dropin": "storefront-pdp", "data-sdk": "0.22.0" }, styleTagTransform: function(v, d) {
    var o;
    window._loadedStyles = window._loadedStyles ?? {};
    const w = (o = v == null ? void 0 : v.match(/^\.dropin-(\w+)/)) == null ? void 0 : o[1], t = d.getAttribute("data-sdk"), f = w ? `sdk/${w}` : d.getAttribute("data-dropin");
    d.setAttribute("data-dropin", f), d.removeAttribute("data-sdk");
    const x = window._loadedStyles[f];
    if (x) {
      const a = function(s, c) {
        const [u, F] = s.split("-"), [en, ln] = c.split("-"), yn = [...u.split("."), F], _n = [...en.split("."), ln], wn = parseInt(yn[0], 10), y = parseInt(_n[0], 10);
        if (wn !== y)
          return wn > y ? s : c;
        const b = parseInt(yn[1], 10), I = parseInt(_n[1], 10);
        if (b !== I)
          return b > I ? s : c;
        const M = parseInt(yn[2], 10), E = parseInt(_n[2], 10);
        if (M !== E)
          return M > E ? s : c;
        if (yn[3] && _n[3]) {
          const $ = /(alpha|beta)(.*)/, on = yn[3].match($), dn = _n[3].match($), fn = on[1], pn = dn[1], gn = parseInt(on[2], 10), W = parseInt(dn[2], 10);
          if (fn === pn)
            return gn > W ? s : c;
          if (fn === "alpha" && pn === "beta")
            return c;
          if (fn === "beta" && pn === "alpha")
            return s;
        }
        return yn[3] ? c : s;
      }(t, x.sdk);
      if (!w || w && a === x.sdk) {
        const s = x.style.textContent;
        x.style.textContent = `${s}
/* --- MERGED --- */
${v}`;
      } else
        w && a !== x.sdk && (x.style.textContent = `/* --- UPGRADED --- */
${v}`);
      return void d.remove();
    }
    d.textContent = v, window._loadedStyles[f] = { sdk: t, core: w, style: d };
    const m = document.querySelector("head"), { lastDropinStyleInjected: i, lastSDKStyleInjected: e } = window._loadedStyles;
    w ? (e ? m.insertBefore(d, e.nextSibling) : m.insertBefore(d, m.firstChild), window._loadedStyles.lastSDKStyleInjected = d) : (i ? m.insertBefore(d, i.nextSibling) : e ? m.insertBefore(d, e.nextSibling) : m.insertBefore(d, m.firstChild), window._loadedStyles.lastDropinStyleInjected = d);
  } };
  P.setAttributes = O(), P.insert = K().bind(null, "head"), P.domAPI = an(), P.insertStyleElement = j(), C()(k.Z, P), k.Z && k.Z.locals && k.Z.locals;
  var V = n(9724), T = n(2754), X = ["className", "name", "value", "id", "label", "groupAriaLabel", "size", "color", "disabled", "selected", "outOfStock", "multi", "onValue", "onUpdateError"];
  function L(v, d) {
    var w = Object.keys(v);
    if (Object.getOwnPropertySymbols) {
      var t = Object.getOwnPropertySymbols(v);
      d && (t = t.filter(function(f) {
        return Object.getOwnPropertyDescriptor(v, f).enumerable;
      })), w.push.apply(w, t);
    }
    return w;
  }
  function nn(v) {
    for (var d = 1; d < arguments.length; d++) {
      var w = arguments[d] != null ? arguments[d] : {};
      d % 2 ? L(Object(w), !0).forEach(function(t) {
        rn(v, t, w[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(v, Object.getOwnPropertyDescriptors(w)) : L(Object(w)).forEach(function(t) {
        Object.defineProperty(v, t, Object.getOwnPropertyDescriptor(w, t));
      });
    }
    return v;
  }
  function rn(v, d, w) {
    return (d = function(t) {
      var f = function(x, m) {
        if (typeof x != "object" || x === null)
          return x;
        var i = x[Symbol.toPrimitive];
        if (i !== void 0) {
          var e = i.call(x, m || "default");
          if (typeof e != "object")
            return e;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (m === "string" ? String : Number)(x);
      }(t, "string");
      return typeof f == "symbol" ? f : String(f);
    }(d)) in v ? Object.defineProperty(v, d, { value: w, enumerable: !0, configurable: !0, writable: !0 }) : v[d] = w, v;
  }
  function vn(v, d, w, t, f, x, m) {
    try {
      var i = v[x](m), e = i.value;
    } catch (o) {
      return void w(o);
    }
    i.done ? d(e) : Promise.resolve(e).then(t, f);
  }
  function R(v, d) {
    if (v == null)
      return {};
    var w, t, f = function(m, i) {
      if (m == null)
        return {};
      var e, o, a = {}, s = Object.keys(m);
      for (o = 0; o < s.length; o++)
        e = s[o], i.indexOf(e) >= 0 || (a[e] = m[e]);
      return a;
    }(v, d);
    if (Object.getOwnPropertySymbols) {
      var x = Object.getOwnPropertySymbols(v);
      for (t = 0; t < x.length; t++)
        w = x[t], d.indexOf(w) >= 0 || Object.prototype.propertyIsEnumerable.call(v, w) && (f[w] = v[w]);
    }
    return f;
  }
  var D = (v) => {
    var { className: d, name: w, value: t, id: f, label: x, groupAriaLabel: m, size: i = "medium", color: e, disabled: o = !1, selected: a = !1, outOfStock: s = !1, multi: c = !1, onValue: u, onUpdateError: F } = v, en = R(v, X), ln = (0, V.XK)("Dropin.Swatches.outOfStock.label").label, yn = (0, V.XK)("Dropin.Swatches.selected.label").label, _n = (0, V.XK)("Dropin.Swatches.swatch.label").label, wn = (0, r.I4)(function() {
      var b, I = (b = function* (M) {
        if (u)
          try {
            yield u(M);
          } catch (E) {
            F && F(E);
          }
      }, function() {
        var M = this, E = arguments;
        return new Promise(function($, on) {
          var dn = b.apply(M, E);
          function fn(gn) {
            vn(dn, $, on, fn, pn, "next", gn);
          }
          function pn(gn) {
            vn(dn, $, on, fn, pn, "throw", gn);
          }
          fn(void 0);
        });
      });
      return function(M) {
        return I.apply(this, arguments);
      };
    }(), [u, F]), y = e && ((b) => {
      var I = new Option().style;
      return I.color = b, I.color !== "";
    })(e) ? e : "var(--color-gray-300);";
    return (0, T.BX)("label", { className: (0, l.S)(["dropin-color-swatch__container", "dropin-color-swatch__container--".concat(i), d]), children: [(0, T.tZ)("input", nn(nn({ type: c ? "checkbox" : "radio", name: w, id: f, value: t, "aria-label": s ? "".concat(m, ": ").concat(x, " ").concat(ln) : a ? "".concat(m, ": ").concat(x, " ").concat(yn) : "".concat(m, ": ").concat(x, " ").concat(_n), checked: a, disabled: o, onChange: (b) => {
      var I = b.target;
      wn(I.value);
    } }, en), {}, { className: (0, l.S)(["dropin-color-swatch", ["dropin-color-swatch--selected", a], ["dropin-color-swatch--disabled", o], d]) })), (0, T.tZ)("span", { style: { "--bg-color": y }, className: (0, l.S)(["dropin-color-swatch__span", ["dropin-color-swatch__span--out-of-stock", s], d]) })] });
  };
}, 8910: (G, N, n) => {
  n.d(N, { J: () => R });
  var r = n(5587), l = n(3354), B = n(1892), C = n.n(B), U = n(5760), an = n.n(U), H = n(8311), K = n.n(H), S = n(1615), O = n.n(S), g = n(8060), j = n.n(g), k = n(8746), P = { attributes: { "data-dropin": "storefront-pdp", "data-sdk": "0.22.0" }, styleTagTransform: function(D, v) {
    var e;
    window._loadedStyles = window._loadedStyles ?? {};
    const d = (e = D == null ? void 0 : D.match(/^\.dropin-(\w+)/)) == null ? void 0 : e[1], w = v.getAttribute("data-sdk"), t = d ? `sdk/${d}` : v.getAttribute("data-dropin");
    v.setAttribute("data-dropin", t), v.removeAttribute("data-sdk");
    const f = window._loadedStyles[t];
    if (f) {
      const o = function(a, s) {
        const [c, u] = a.split("-"), [F, en] = s.split("-"), ln = [...c.split("."), u], yn = [...F.split("."), en], _n = parseInt(ln[0], 10), wn = parseInt(yn[0], 10);
        if (_n !== wn)
          return _n > wn ? a : s;
        const y = parseInt(ln[1], 10), b = parseInt(yn[1], 10);
        if (y !== b)
          return y > b ? a : s;
        const I = parseInt(ln[2], 10), M = parseInt(yn[2], 10);
        if (I !== M)
          return I > M ? a : s;
        if (ln[3] && yn[3]) {
          const E = /(alpha|beta)(.*)/, $ = ln[3].match(E), on = yn[3].match(E), dn = $[1], fn = on[1], pn = parseInt($[2], 10), gn = parseInt(on[2], 10);
          if (dn === fn)
            return pn > gn ? a : s;
          if (dn === "alpha" && fn === "beta")
            return s;
          if (dn === "beta" && fn === "alpha")
            return a;
        }
        return ln[3] ? s : a;
      }(w, f.sdk);
      if (!d || d && o === f.sdk) {
        const a = f.style.textContent;
        f.style.textContent = `${a}
/* --- MERGED --- */
${D}`;
      } else
        d && o !== f.sdk && (f.style.textContent = `/* --- UPGRADED --- */
${D}`);
      return void v.remove();
    }
    v.textContent = D, window._loadedStyles[t] = { sdk: w, core: d, style: v };
    const x = document.querySelector("head"), { lastDropinStyleInjected: m, lastSDKStyleInjected: i } = window._loadedStyles;
    d ? (i ? x.insertBefore(v, i.nextSibling) : x.insertBefore(v, x.firstChild), window._loadedStyles.lastSDKStyleInjected = v) : (m ? x.insertBefore(v, m.nextSibling) : i ? x.insertBefore(v, i.nextSibling) : x.insertBefore(v, x.firstChild), window._loadedStyles.lastDropinStyleInjected = v);
  } };
  P.setAttributes = O(), P.insert = K().bind(null, "head"), P.domAPI = an(), P.insertStyleElement = j(), C()(k.Z, P), k.Z && k.Z.locals && k.Z.locals;
  var V = n(2754), T = ["source", "size", "stroke", "viewBox", "className"];
  function X(D, v) {
    var d = Object.keys(D);
    if (Object.getOwnPropertySymbols) {
      var w = Object.getOwnPropertySymbols(D);
      v && (w = w.filter(function(t) {
        return Object.getOwnPropertyDescriptor(D, t).enumerable;
      })), d.push.apply(d, w);
    }
    return d;
  }
  function L(D) {
    for (var v = 1; v < arguments.length; v++) {
      var d = arguments[v] != null ? arguments[v] : {};
      v % 2 ? X(Object(d), !0).forEach(function(w) {
        nn(D, w, d[w]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(D, Object.getOwnPropertyDescriptors(d)) : X(Object(d)).forEach(function(w) {
        Object.defineProperty(D, w, Object.getOwnPropertyDescriptor(d, w));
      });
    }
    return D;
  }
  function nn(D, v, d) {
    return (v = function(w) {
      var t = function(f, x) {
        if (typeof f != "object" || f === null)
          return f;
        var m = f[Symbol.toPrimitive];
        if (m !== void 0) {
          var i = m.call(f, x || "default");
          if (typeof i != "object")
            return i;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (x === "string" ? String : Number)(f);
      }(w, "string");
      return typeof t == "symbol" ? t : String(t);
    }(v)) in D ? Object.defineProperty(D, v, { value: d, enumerable: !0, configurable: !0, writable: !0 }) : D[v] = d, D;
  }
  function rn(D, v) {
    if (D == null)
      return {};
    var d, w, t = function(x, m) {
      if (x == null)
        return {};
      var i, e, o = {}, a = Object.keys(x);
      for (e = 0; e < a.length; e++)
        i = a[e], m.indexOf(i) >= 0 || (o[i] = x[i]);
      return o;
    }(D, v);
    if (Object.getOwnPropertySymbols) {
      var f = Object.getOwnPropertySymbols(D);
      for (w = 0; w < f.length; w++)
        d = f[w], v.indexOf(d) >= 0 || Object.prototype.propertyIsEnumerable.call(D, d) && (t[d] = D[d]);
    }
    return t;
  }
  var vn = { Add: (0, l.Vo)(() => Promise.resolve().then(n.bind(n, 1676))), Bulk: (0, l.Vo)(() => n.e(540).then(n.bind(n, 2540))), Burger: (0, l.Vo)(() => n.e(946).then(n.bind(n, 5660))), Cart: (0, l.Vo)(() => n.e(148).then(n.bind(n, 1148))), Check: (0, l.Vo)(() => n.e(966).then(n.bind(n, 6966))), ChevronDown: (0, l.Vo)(() => Promise.resolve().then(n.bind(n, 8991))), ChevronUp: (0, l.Vo)(() => n.e(684).then(n.bind(n, 6684))), ChevronRight: (0, l.Vo)(() => n.e(941).then(n.bind(n, 3941))), Close: (0, l.Vo)(() => Promise.resolve().then(n.bind(n, 7498))), Heart: (0, l.Vo)(() => n.e(949).then(n.bind(n, 9949))), Minus: (0, l.Vo)(() => Promise.resolve().then(n.bind(n, 2504))), Placeholder: (0, l.Vo)(() => n.e(959).then(n.bind(n, 7959))), PlaceholderFilled: (0, l.Vo)(() => n.e(840).then(n.bind(n, 4840))), Search: (0, l.Vo)(() => n.e(96).then(n.bind(n, 8096))), SearchFilled: (0, l.Vo)(() => n.e(570).then(n.bind(n, 9570))), Sort: (0, l.Vo)(() => n.e(688).then(n.bind(n, 2688))), Star: (0, l.Vo)(() => n.e(413).then(n.bind(n, 3413))), View: (0, l.Vo)(() => n.e(521).then(n.bind(n, 2521))), User: (0, l.Vo)(() => n.e(402).then(n.bind(n, 6402))), Warning: (0, l.Vo)(() => n.e(793).then(n.bind(n, 1793))), Locker: (0, l.Vo)(() => n.e(590).then(n.bind(n, 590))), Wallet: (0, l.Vo)(() => n.e(843).then(n.bind(n, 2843))), Card: (0, l.Vo)(() => n.e(705).then(n.bind(n, 7705))), Order: (0, l.Vo)(() => n.e(337).then(n.bind(n, 7337))), Delivery: (0, l.Vo)(() => n.e(386).then(n.bind(n, 5386))), OrderError: (0, l.Vo)(() => n.e(284).then(n.bind(n, 4284))), OrderSuccess: (0, l.Vo)(() => n.e(174).then(n.bind(n, 8174))), PaymentError: (0, l.Vo)(() => n.e(228).then(n.bind(n, 4228))), CheckWithCircle: (0, l.Vo)(() => n.e(553).then(n.bind(n, 6553))), WarningWithCircle: (0, l.Vo)(() => n.e(420).then(n.bind(n, 8420))), WarningFilled: (0, l.Vo)(() => n.e(605).then(n.bind(n, 2605))), InfoFilled: (0, l.Vo)(() => n.e(641).then(n.bind(n, 2641))), HeartFilled: (0, l.Vo)(() => n.e(847).then(n.bind(n, 3847))), Trash: (0, l.Vo)(() => n.e(734).then(n.bind(n, 2734))) };
  function R(D) {
    var { source: v, size: d = "24", stroke: w = "2", viewBox: t = "0 0 24 24", className: f } = D, x = rn(D, T), m = typeof v == "string" ? vn[v] : null, i = { className: (0, r.S)(["dropin-icon", "dropin-icon--shape-stroke-".concat(w), f]), width: d, height: d, viewBox: t };
    return (0, V.tZ)(l.n4, { fallback: null, children: m ? (0, V.tZ)(m, L(L({}, x), i)) : (0, V.tZ)(v, L(L({}, x), i)) });
  }
}, 9728: (G, N, n) => {
  n.d(N, { E: () => t });
  var r = n(3354), l = n(2743);
  function B(f, x) {
    var m = Object.keys(f);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(f);
      x && (i = i.filter(function(e) {
        return Object.getOwnPropertyDescriptor(f, e).enumerable;
      })), m.push.apply(m, i);
    }
    return m;
  }
  function C(f) {
    for (var x = 1; x < arguments.length; x++) {
      var m = arguments[x] != null ? arguments[x] : {};
      x % 2 ? B(Object(m), !0).forEach(function(i) {
        U(f, i, m[i]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(f, Object.getOwnPropertyDescriptors(m)) : B(Object(m)).forEach(function(i) {
        Object.defineProperty(f, i, Object.getOwnPropertyDescriptor(m, i));
      });
    }
    return f;
  }
  function U(f, x, m) {
    return (x = function(i) {
      var e = function(o, a) {
        if (typeof o != "object" || o === null)
          return o;
        var s = o[Symbol.toPrimitive];
        if (s !== void 0) {
          var c = s.call(o, a || "default");
          if (typeof c != "object")
            return c;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (a === "string" ? String : Number)(o);
      }(i, "string");
      return typeof e == "symbol" ? e : String(e);
    }(x)) in f ? Object.defineProperty(f, x, { value: m, enumerable: !0, configurable: !0, writable: !0 }) : f[x] = m, f;
  }
  var an = { medium: 768, large: 1024, xlarge: 1366, xxlarge: 1920 }, H = (f, x) => {
    if (f && x != null && x.width) {
      var m = (i) => ((e, o) => {
        var [a, s] = e.split("?"), c = new URLSearchParams(s), u = (0, l.b)(), F = {};
        return F = u && Object.keys(u).length > 0 && o ? Object.entries(o).reduce((en, ln) => {
          var [yn, _n] = ln, wn = u[yn];
          return wn && (en[wn] = _n), en;
        }, {}) : C({ auto: "webp", quality: 80, crop: !1, fit: "cover" }, o), Object.entries(F).forEach((en) => {
          var [ln, yn] = en;
          yn != null && c.set(ln, String(yn));
        }), "".concat(a, "?").concat(c.toString());
      })(f, C({}, i));
      return Object.entries(an).map((i) => {
        var [, e] = i, o = x.width * e / an.xxlarge;
        return "".concat(m(C(C({}, x), {}, { width: o })), " ").concat(e, "w");
      }).join(`,
`);
    }
  }, K = n(5587), S = n(1892), O = n.n(S), g = n(5760), j = n.n(g), k = n(8311), P = n.n(k), V = n(1615), T = n.n(V), X = n(8060), L = n.n(X), nn = n(9490), rn = { attributes: { "data-dropin": "storefront-pdp", "data-sdk": "0.22.0" }, styleTagTransform: function(f, x) {
    var u;
    window._loadedStyles = window._loadedStyles ?? {};
    const m = (u = f == null ? void 0 : f.match(/^\.dropin-(\w+)/)) == null ? void 0 : u[1], i = x.getAttribute("data-sdk"), e = m ? `sdk/${m}` : x.getAttribute("data-dropin");
    x.setAttribute("data-dropin", e), x.removeAttribute("data-sdk");
    const o = window._loadedStyles[e];
    if (o) {
      const F = function(en, ln) {
        const [yn, _n] = en.split("-"), [wn, y] = ln.split("-"), b = [...yn.split("."), _n], I = [...wn.split("."), y], M = parseInt(b[0], 10), E = parseInt(I[0], 10);
        if (M !== E)
          return M > E ? en : ln;
        const $ = parseInt(b[1], 10), on = parseInt(I[1], 10);
        if ($ !== on)
          return $ > on ? en : ln;
        const dn = parseInt(b[2], 10), fn = parseInt(I[2], 10);
        if (dn !== fn)
          return dn > fn ? en : ln;
        if (b[3] && I[3]) {
          const pn = /(alpha|beta)(.*)/, gn = b[3].match(pn), W = I[3].match(pn), Hn = gn[1], On = W[1], Qn = parseInt(gn[2], 10), ae = parseInt(W[2], 10);
          if (Hn === On)
            return Qn > ae ? en : ln;
          if (Hn === "alpha" && On === "beta")
            return ln;
          if (Hn === "beta" && On === "alpha")
            return en;
        }
        return b[3] ? ln : en;
      }(i, o.sdk);
      if (!m || m && F === o.sdk) {
        const en = o.style.textContent;
        o.style.textContent = `${en}
/* --- MERGED --- */
${f}`;
      } else
        m && F !== o.sdk && (o.style.textContent = `/* --- UPGRADED --- */
${f}`);
      return void x.remove();
    }
    x.textContent = f, window._loadedStyles[e] = { sdk: i, core: m, style: x };
    const a = document.querySelector("head"), { lastDropinStyleInjected: s, lastSDKStyleInjected: c } = window._loadedStyles;
    m ? (c ? a.insertBefore(x, c.nextSibling) : a.insertBefore(x, a.firstChild), window._loadedStyles.lastSDKStyleInjected = x) : (s ? a.insertBefore(x, s.nextSibling) : c ? a.insertBefore(x, c.nextSibling) : a.insertBefore(x, a.firstChild), window._loadedStyles.lastDropinStyleInjected = x);
  } };
  rn.setAttributes = T(), rn.insert = P().bind(null, "head"), rn.domAPI = j(), rn.insertStyleElement = L(), O()(nn.Z, rn), nn.Z && nn.Z.locals && nn.Z.locals;
  var vn = n(2754), R = ["className", "src", "params", "loading", "srcSet", "onLoad"];
  function D(f, x) {
    var m = Object.keys(f);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(f);
      x && (i = i.filter(function(e) {
        return Object.getOwnPropertyDescriptor(f, e).enumerable;
      })), m.push.apply(m, i);
    }
    return m;
  }
  function v(f) {
    for (var x = 1; x < arguments.length; x++) {
      var m = arguments[x] != null ? arguments[x] : {};
      x % 2 ? D(Object(m), !0).forEach(function(i) {
        d(f, i, m[i]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(f, Object.getOwnPropertyDescriptors(m)) : D(Object(m)).forEach(function(i) {
        Object.defineProperty(f, i, Object.getOwnPropertyDescriptor(m, i));
      });
    }
    return f;
  }
  function d(f, x, m) {
    return (x = function(i) {
      var e = function(o, a) {
        if (typeof o != "object" || o === null)
          return o;
        var s = o[Symbol.toPrimitive];
        if (s !== void 0) {
          var c = s.call(o, a || "default");
          if (typeof c != "object")
            return c;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (a === "string" ? String : Number)(o);
      }(i, "string");
      return typeof e == "symbol" ? e : String(e);
    }(x)) in f ? Object.defineProperty(f, x, { value: m, enumerable: !0, configurable: !0, writable: !0 }) : f[x] = m, f;
  }
  function w(f, x) {
    if (f == null)
      return {};
    var m, i, e = function(a, s) {
      if (a == null)
        return {};
      var c, u, F = {}, en = Object.keys(a);
      for (u = 0; u < en.length; u++)
        c = en[u], s.indexOf(c) >= 0 || (F[c] = a[c]);
      return F;
    }(f, x);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(f);
      for (i = 0; i < o.length; i++)
        m = o[i], x.indexOf(m) >= 0 || Object.prototype.propertyIsEnumerable.call(f, m) && (e[m] = f[m]);
    }
    return e;
  }
  var t = (f) => {
    var { className: x, src: m, params: i, loading: e = "lazy", srcSet: o, onLoad: a } = f, s = w(f, R), [c, u] = (0, r.eJ)(!1), F = (0, r.Ye)(() => o || (m && i ? H(m, v({}, i)) : void 0), [i, m, o]);
    return (0, vn.tZ)("img", v(v({}, s), {}, { className: (0, K.S)(["dropin-image", ["dropin-image--loaded", c], x]), loading: e, onLoad: (en) => {
      u(!0), a == null || a(en);
    }, src: m, srcSet: F }));
  };
}, 7138: (G, N, n) => {
  n.d(N, { k: () => v });
  var r = n(3354), l = n(5587), B = n(1892), C = n.n(B), U = n(5760), an = n.n(U), H = n(8311), K = n.n(H), S = n(1615), O = n.n(S), g = n(8060), j = n.n(g), k = n(6725), P = { attributes: { "data-dropin": "storefront-pdp", "data-sdk": "0.22.0" }, styleTagTransform: function(d, w) {
    var a;
    window._loadedStyles = window._loadedStyles ?? {};
    const t = (a = d == null ? void 0 : d.match(/^\.dropin-(\w+)/)) == null ? void 0 : a[1], f = w.getAttribute("data-sdk"), x = t ? `sdk/${t}` : w.getAttribute("data-dropin");
    w.setAttribute("data-dropin", x), w.removeAttribute("data-sdk");
    const m = window._loadedStyles[x];
    if (m) {
      const s = function(c, u) {
        const [F, en] = c.split("-"), [ln, yn] = u.split("-"), _n = [...F.split("."), en], wn = [...ln.split("."), yn], y = parseInt(_n[0], 10), b = parseInt(wn[0], 10);
        if (y !== b)
          return y > b ? c : u;
        const I = parseInt(_n[1], 10), M = parseInt(wn[1], 10);
        if (I !== M)
          return I > M ? c : u;
        const E = parseInt(_n[2], 10), $ = parseInt(wn[2], 10);
        if (E !== $)
          return E > $ ? c : u;
        if (_n[3] && wn[3]) {
          const on = /(alpha|beta)(.*)/, dn = _n[3].match(on), fn = wn[3].match(on), pn = dn[1], gn = fn[1], W = parseInt(dn[2], 10), Hn = parseInt(fn[2], 10);
          if (pn === gn)
            return W > Hn ? c : u;
          if (pn === "alpha" && gn === "beta")
            return u;
          if (pn === "beta" && gn === "alpha")
            return c;
        }
        return _n[3] ? u : c;
      }(f, m.sdk);
      if (!t || t && s === m.sdk) {
        const c = m.style.textContent;
        m.style.textContent = `${c}
/* --- MERGED --- */
${d}`;
      } else
        t && s !== m.sdk && (m.style.textContent = `/* --- UPGRADED --- */
${d}`);
      return void w.remove();
    }
    w.textContent = d, window._loadedStyles[x] = { sdk: f, core: t, style: w };
    const i = document.querySelector("head"), { lastDropinStyleInjected: e, lastSDKStyleInjected: o } = window._loadedStyles;
    t ? (o ? i.insertBefore(w, o.nextSibling) : i.insertBefore(w, i.firstChild), window._loadedStyles.lastSDKStyleInjected = w) : (e ? i.insertBefore(w, e.nextSibling) : o ? i.insertBefore(w, o.nextSibling) : i.insertBefore(w, i.firstChild), window._loadedStyles.lastDropinStyleInjected = w);
  } };
  P.setAttributes = O(), P.insert = K().bind(null, "head"), P.domAPI = an(), P.insertStyleElement = j(), C()(k.Z, P), k.Z && k.Z.locals && k.Z.locals;
  var V = n(9728), T = n(9724), X = n(2754), L = ["className", "name", "value", "id", "label", "groupAriaLabel", "src", "alt", "disabled", "selected", "outOfStock", "multi", "onValue", "onUpdateError"];
  function nn(d, w) {
    var t = Object.keys(d);
    if (Object.getOwnPropertySymbols) {
      var f = Object.getOwnPropertySymbols(d);
      w && (f = f.filter(function(x) {
        return Object.getOwnPropertyDescriptor(d, x).enumerable;
      })), t.push.apply(t, f);
    }
    return t;
  }
  function rn(d) {
    for (var w = 1; w < arguments.length; w++) {
      var t = arguments[w] != null ? arguments[w] : {};
      w % 2 ? nn(Object(t), !0).forEach(function(f) {
        vn(d, f, t[f]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(d, Object.getOwnPropertyDescriptors(t)) : nn(Object(t)).forEach(function(f) {
        Object.defineProperty(d, f, Object.getOwnPropertyDescriptor(t, f));
      });
    }
    return d;
  }
  function vn(d, w, t) {
    return (w = function(f) {
      var x = function(m, i) {
        if (typeof m != "object" || m === null)
          return m;
        var e = m[Symbol.toPrimitive];
        if (e !== void 0) {
          var o = e.call(m, i || "default");
          if (typeof o != "object")
            return o;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (i === "string" ? String : Number)(m);
      }(f, "string");
      return typeof x == "symbol" ? x : String(x);
    }(w)) in d ? Object.defineProperty(d, w, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : d[w] = t, d;
  }
  function R(d, w, t, f, x, m, i) {
    try {
      var e = d[m](i), o = e.value;
    } catch (a) {
      return void t(a);
    }
    e.done ? w(o) : Promise.resolve(o).then(f, x);
  }
  function D(d, w) {
    if (d == null)
      return {};
    var t, f, x = function(i, e) {
      if (i == null)
        return {};
      var o, a, s = {}, c = Object.keys(i);
      for (a = 0; a < c.length; a++)
        o = c[a], e.indexOf(o) >= 0 || (s[o] = i[o]);
      return s;
    }(d, w);
    if (Object.getOwnPropertySymbols) {
      var m = Object.getOwnPropertySymbols(d);
      for (f = 0; f < m.length; f++)
        t = m[f], w.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(d, t) && (x[t] = d[t]);
    }
    return x;
  }
  var v = (d) => {
    var { className: w, name: t, value: f, id: x, label: m, groupAriaLabel: i, src: e, alt: o, disabled: a = !1, selected: s = !1, outOfStock: c = !1, multi: u = !1, onValue: F, onUpdateError: en } = d, ln = D(d, L), yn = (0, T.XK)("Dropin.Swatches.outOfStock.label").label, _n = (0, T.XK)("Dropin.Swatches.selected.label").label, wn = (0, T.XK)("Dropin.Swatches.swatch.label").label, y = (0, r.I4)(function() {
      var b, I = (b = function* (M) {
        if (F)
          try {
            yield F(M);
          } catch (E) {
            en && en(E);
          }
      }, function() {
        var M = this, E = arguments;
        return new Promise(function($, on) {
          var dn = b.apply(M, E);
          function fn(gn) {
            R(dn, $, on, fn, pn, "next", gn);
          }
          function pn(gn) {
            R(dn, $, on, fn, pn, "throw", gn);
          }
          fn(void 0);
        });
      });
      return function(M) {
        return I.apply(this, arguments);
      };
    }(), [F, en]);
    return (0, X.BX)("label", { className: (0, l.S)(["dropin-image-swatch__container", w]), children: [(0, X.tZ)("input", rn(rn({ type: u ? "checkbox" : "radio", name: t, id: x, value: f, "aria-label": c ? "".concat(i, ": ").concat(m, " ").concat(yn) : s ? "".concat(i, ": ").concat(m, " ").concat(_n) : "".concat(i, ": ").concat(m, " ").concat(wn), checked: s, disabled: a, onChange: (b) => {
      var I = b.target;
      y(I.value);
    } }, ln), {}, { className: (0, l.S)(["dropin-image-swatch", ["dropin-image-swatch--selected", s], ["dropin-image-swatch--disabled", a], w]) })), (0, X.tZ)("span", { className: (0, l.S)(["dropin-image-swatch__span", ["dropin-image-swatch__span--out-of-stock", c], w]), children: (0, X.tZ)(V.E, { src: e, className: (0, l.S)(["dropin-image-swatch__content"]), params: { width: 100, fit: "bounds", crop: !0 }, alt: o, loading: "lazy", onError: (b) => b.target.style.display = "none" }) })] });
  };
}, 1336: (G, N, n) => {
  n.d(N, { u: () => t });
  var r = n(5792), l = n(7654), B = n(5587), C = n(2504), U = n(1676), an = n(8910), H = n(9724), K = n(1892), S = n.n(K), O = n(5760), g = n.n(O), j = n(8311), k = n.n(j), P = n(1615), V = n.n(P), T = n(8060), X = n.n(T), L = n(3795), nn = { attributes: { "data-dropin": "storefront-pdp", "data-sdk": "0.22.0" }, styleTagTransform: function(f, x) {
    var u;
    window._loadedStyles = window._loadedStyles ?? {};
    const m = (u = f == null ? void 0 : f.match(/^\.dropin-(\w+)/)) == null ? void 0 : u[1], i = x.getAttribute("data-sdk"), e = m ? `sdk/${m}` : x.getAttribute("data-dropin");
    x.setAttribute("data-dropin", e), x.removeAttribute("data-sdk");
    const o = window._loadedStyles[e];
    if (o) {
      const F = function(en, ln) {
        const [yn, _n] = en.split("-"), [wn, y] = ln.split("-"), b = [...yn.split("."), _n], I = [...wn.split("."), y], M = parseInt(b[0], 10), E = parseInt(I[0], 10);
        if (M !== E)
          return M > E ? en : ln;
        const $ = parseInt(b[1], 10), on = parseInt(I[1], 10);
        if ($ !== on)
          return $ > on ? en : ln;
        const dn = parseInt(b[2], 10), fn = parseInt(I[2], 10);
        if (dn !== fn)
          return dn > fn ? en : ln;
        if (b[3] && I[3]) {
          const pn = /(alpha|beta)(.*)/, gn = b[3].match(pn), W = I[3].match(pn), Hn = gn[1], On = W[1], Qn = parseInt(gn[2], 10), ae = parseInt(W[2], 10);
          if (Hn === On)
            return Qn > ae ? en : ln;
          if (Hn === "alpha" && On === "beta")
            return ln;
          if (Hn === "beta" && On === "alpha")
            return en;
        }
        return b[3] ? ln : en;
      }(i, o.sdk);
      if (!m || m && F === o.sdk) {
        const en = o.style.textContent;
        o.style.textContent = `${en}
/* --- MERGED --- */
${f}`;
      } else
        m && F !== o.sdk && (o.style.textContent = `/* --- UPGRADED --- */
${f}`);
      return void x.remove();
    }
    x.textContent = f, window._loadedStyles[e] = { sdk: i, core: m, style: x };
    const a = document.querySelector("head"), { lastDropinStyleInjected: s, lastSDKStyleInjected: c } = window._loadedStyles;
    m ? (c ? a.insertBefore(x, c.nextSibling) : a.insertBefore(x, a.firstChild), window._loadedStyles.lastSDKStyleInjected = x) : (s ? a.insertBefore(x, s.nextSibling) : c ? a.insertBefore(x, c.nextSibling) : a.insertBefore(x, a.firstChild), window._loadedStyles.lastDropinStyleInjected = x);
  } };
  nn.setAttributes = V(), nn.insert = k().bind(null, "head"), nn.domAPI = g(), nn.insertStyleElement = X(), S()(L.Z, nn), L.Z && L.Z.locals && L.Z.locals;
  var rn = n(2754), vn = ["name", "value", "className", "disabled", "error", "success", "min", "max", "onValue", "onUpdateError", "size"];
  function R(f, x) {
    var m = Object.keys(f);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(f);
      x && (i = i.filter(function(e) {
        return Object.getOwnPropertyDescriptor(f, e).enumerable;
      })), m.push.apply(m, i);
    }
    return m;
  }
  function D(f) {
    for (var x = 1; x < arguments.length; x++) {
      var m = arguments[x] != null ? arguments[x] : {};
      x % 2 ? R(Object(m), !0).forEach(function(i) {
        v(f, i, m[i]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(f, Object.getOwnPropertyDescriptors(m)) : R(Object(m)).forEach(function(i) {
        Object.defineProperty(f, i, Object.getOwnPropertyDescriptor(m, i));
      });
    }
    return f;
  }
  function v(f, x, m) {
    return (x = function(i) {
      var e = function(o, a) {
        if (typeof o != "object" || o === null)
          return o;
        var s = o[Symbol.toPrimitive];
        if (s !== void 0) {
          var c = s.call(o, a || "default");
          if (typeof c != "object")
            return c;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (a === "string" ? String : Number)(o);
      }(i, "string");
      return typeof e == "symbol" ? e : String(e);
    }(x)) in f ? Object.defineProperty(f, x, { value: m, enumerable: !0, configurable: !0, writable: !0 }) : f[x] = m, f;
  }
  function d(f, x, m, i, e, o, a) {
    try {
      var s = f[o](a), c = s.value;
    } catch (u) {
      return void m(u);
    }
    s.done ? x(c) : Promise.resolve(c).then(i, e);
  }
  function w(f, x) {
    if (f == null)
      return {};
    var m, i, e = function(a, s) {
      if (a == null)
        return {};
      var c, u, F = {}, en = Object.keys(a);
      for (u = 0; u < en.length; u++)
        c = en[u], s.indexOf(c) >= 0 || (F[c] = a[c]);
      return F;
    }(f, x);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(f);
      for (i = 0; i < o.length; i++)
        m = o[i], x.indexOf(m) >= 0 || Object.prototype.propertyIsEnumerable.call(f, m) && (e[m] = f[m]);
    }
    return e;
  }
  var t = (f) => {
    var { name: x, value: m = "1", className: i, disabled: e, error: o, success: a, min: s, max: c, onValue: u, onUpdateError: F, size: en = "medium" } = f, ln = w(f, vn), [yn, _n] = (0, r.eJ)(Number(m)), wn = Number(s), y = Number(c);
    (0, r.d4)(() => {
      _n(Number(m));
    }, [m]);
    var b = (0, r.I4)((0, l.D)(function() {
      var M, E = (M = function* ($) {
        if (u)
          try {
            yield u($);
          } catch (on) {
            F && F(on);
          }
      }, function() {
        var $ = this, on = arguments;
        return new Promise(function(dn, fn) {
          var pn = M.apply($, on);
          function gn(Hn) {
            d(pn, dn, fn, gn, W, "next", Hn);
          }
          function W(Hn) {
            d(pn, dn, fn, gn, W, "throw", Hn);
          }
          gn(void 0);
        });
      });
      return function($) {
        return E.apply(this, arguments);
      };
    }(), 200), [u, F]), I = (M) => {
      var E = M;
      M < wn && (E = wn), M > y && (E = y), b(E), _n(E);
    };
    return (0, rn.tZ)("div", { className: (0, B.S)(["dropin-incrementer", "dropin-incrementer--".concat(en), i]), children: (0, rn.BX)("div", { className: (0, B.S)(["dropin-incrementer__content", "dropin-incrementer__content--".concat(en), ["dropin-incrementer__content--error", o], ["dropin-incrementer__content--success", a], ["dropin-incrementer__content--disabled", e]]), children: [(0, rn.tZ)("div", { className: (0, B.S)(["dropin-incrementer__button-container", ["dropin-incrementer__button-container--disabled", e]]), children: (0, rn.tZ)(H.Cf, { children: (0, rn.tZ)("button", { type: "button", className: (0, B.S)(["dropin-incrementer__decrease-button", ["dropin-incrementer__decrease-button--disabled", e]]), onClick: () => I(yn - 1), disabled: e || yn < wn + 1, "aria-label": (0, rn.tZ)(H.xv, { id: "Dropin.Incrementer.decreaseLabel" }), children: (0, rn.tZ)(an.J, { source: C.default, size: "16", stroke: "1", viewBox: "4 2 20 20", className: "dropin-incrementer__down" }) }) }) }), (0, rn.tZ)("input", D({ className: "dropin-incrementer__input", max: c, min: s, step: 1, type: "number", name: x, value: yn, disabled: e, onChange: (M) => {
      var E = M.currentTarget.value;
      E !== "" && I(Number(E));
    } }, ln)), (0, rn.tZ)("div", { className: (0, B.S)(["dropin-incrementer__button-container", ["dropin-incrementer__button-container--disabled", e]]), children: (0, rn.tZ)(H.Cf, { children: (0, rn.tZ)("button", { type: "button", className: (0, B.S)(["dropin-incrementer__increase-button", ["dropin-incrementer__increase-button--disabled", e]]), onClick: () => I(yn + 1), disabled: e || yn > y - 1, "aria-label": (0, rn.tZ)(H.xv, { id: "Dropin.Incrementer.increaseLabel" }), children: (0, rn.tZ)(an.J, { source: U.default, size: "16", stroke: "1", viewBox: "4 2 20 20", className: "dropin-incrementer__add" }) }) }) })] }) });
  };
}, 2808: (G, N, n) => {
  n.d(N, { c: () => v });
  var r = n(8910), l = n(1892), B = n.n(l), C = n(5760), U = n.n(C), an = n(8311), H = n.n(an), K = n(1615), S = n.n(K), O = n(8060), g = n.n(O), j = n(4190), k = { attributes: { "data-dropin": "storefront-pdp", "data-sdk": "0.22.0" }, styleTagTransform: function(d, w) {
    var a;
    window._loadedStyles = window._loadedStyles ?? {};
    const t = (a = d == null ? void 0 : d.match(/^\.dropin-(\w+)/)) == null ? void 0 : a[1], f = w.getAttribute("data-sdk"), x = t ? `sdk/${t}` : w.getAttribute("data-dropin");
    w.setAttribute("data-dropin", x), w.removeAttribute("data-sdk");
    const m = window._loadedStyles[x];
    if (m) {
      const s = function(c, u) {
        const [F, en] = c.split("-"), [ln, yn] = u.split("-"), _n = [...F.split("."), en], wn = [...ln.split("."), yn], y = parseInt(_n[0], 10), b = parseInt(wn[0], 10);
        if (y !== b)
          return y > b ? c : u;
        const I = parseInt(_n[1], 10), M = parseInt(wn[1], 10);
        if (I !== M)
          return I > M ? c : u;
        const E = parseInt(_n[2], 10), $ = parseInt(wn[2], 10);
        if (E !== $)
          return E > $ ? c : u;
        if (_n[3] && wn[3]) {
          const on = /(alpha|beta)(.*)/, dn = _n[3].match(on), fn = wn[3].match(on), pn = dn[1], gn = fn[1], W = parseInt(dn[2], 10), Hn = parseInt(fn[2], 10);
          if (pn === gn)
            return W > Hn ? c : u;
          if (pn === "alpha" && gn === "beta")
            return u;
          if (pn === "beta" && gn === "alpha")
            return c;
        }
        return _n[3] ? u : c;
      }(f, m.sdk);
      if (!t || t && s === m.sdk) {
        const c = m.style.textContent;
        m.style.textContent = `${c}
/* --- MERGED --- */
${d}`;
      } else
        t && s !== m.sdk && (m.style.textContent = `/* --- UPGRADED --- */
${d}`);
      return void w.remove();
    }
    w.textContent = d, window._loadedStyles[x] = { sdk: f, core: t, style: w };
    const i = document.querySelector("head"), { lastDropinStyleInjected: e, lastSDKStyleInjected: o } = window._loadedStyles;
    t ? (o ? i.insertBefore(w, o.nextSibling) : i.insertBefore(w, i.firstChild), window._loadedStyles.lastSDKStyleInjected = w) : (e ? i.insertBefore(w, e.nextSibling) : o ? i.insertBefore(w, o.nextSibling) : i.insertBefore(w, i.firstChild), window._loadedStyles.lastDropinStyleInjected = w);
  } };
  k.setAttributes = S(), k.insert = H().bind(null, "head"), k.domAPI = U(), k.insertStyleElement = g(), B()(j.Z, k), j.Z && j.Z.locals && j.Z.locals;
  var P = n(8991), V = n(5587), T = n(3354), X = n(5792), L = n(2754), nn = ["name", "value", "options", "variant", "floatingLabel", "size", "handleSelect", "disabled", "error", "placeholder", "defaultOption", "icon", "className"];
  function rn(d, w) {
    var t = Object.keys(d);
    if (Object.getOwnPropertySymbols) {
      var f = Object.getOwnPropertySymbols(d);
      w && (f = f.filter(function(x) {
        return Object.getOwnPropertyDescriptor(d, x).enumerable;
      })), t.push.apply(t, f);
    }
    return t;
  }
  function vn(d) {
    for (var w = 1; w < arguments.length; w++) {
      var t = arguments[w] != null ? arguments[w] : {};
      w % 2 ? rn(Object(t), !0).forEach(function(f) {
        R(d, f, t[f]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(d, Object.getOwnPropertyDescriptors(t)) : rn(Object(t)).forEach(function(f) {
        Object.defineProperty(d, f, Object.getOwnPropertyDescriptor(t, f));
      });
    }
    return d;
  }
  function R(d, w, t) {
    return (w = function(f) {
      var x = function(m, i) {
        if (typeof m != "object" || m === null)
          return m;
        var e = m[Symbol.toPrimitive];
        if (e !== void 0) {
          var o = e.call(m, i || "default");
          if (typeof o != "object")
            return o;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (i === "string" ? String : Number)(m);
      }(f, "string");
      return typeof x == "symbol" ? x : String(x);
    }(w)) in d ? Object.defineProperty(d, w, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : d[w] = t, d;
  }
  function D(d, w) {
    if (d == null)
      return {};
    var t, f, x = function(i, e) {
      if (i == null)
        return {};
      var o, a, s = {}, c = Object.keys(i);
      for (a = 0; a < c.length; a++)
        o = c[a], e.indexOf(o) >= 0 || (s[o] = i[o]);
      return s;
    }(d, w);
    if (Object.getOwnPropertySymbols) {
      var m = Object.getOwnPropertySymbols(d);
      for (f = 0; f < m.length; f++)
        t = m[f], w.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(d, t) && (x[t] = d[t]);
    }
    return x;
  }
  var v = (d) => {
    var w, { name: t, value: f = null, options: x, variant: m = "primary", floatingLabel: i, size: e = "medium", handleSelect: o = () => {
    }, disabled: a = !1, error: s = !1, placeholder: c, defaultOption: u, icon: F, className: en } = d, ln = D(d, nn), yn = (ln == null ? void 0 : ln.id) || t || "dropin-picker-".concat(Math.random().toString(36)), _n = x == null ? void 0 : x.find((E) => !E.disabled), [wn, y] = (0, T.eJ)({ value: f, text: (u == null ? void 0 : u.text) || c || (_n == null ? void 0 : _n.text), icon: F });
    (0, T.d4)(() => {
      var E = x == null ? void 0 : x.find(($) => $.value === f);
      y(E ?? { value: (u == null ? void 0 : u.value) || (c || i ? null : _n == null ? void 0 : _n.value), text: (u == null ? void 0 : u.text) || c || (_n == null ? void 0 : _n.text), icon: F });
    }, [f, x, c, F, u, i]);
    var b = x == null ? void 0 : x.map((E) => {
      var { value: $, text: on, disabled: dn } = E, fn = $ === wn.value;
      return (0, L.tZ)("option", { value: $, selected: fn, disabled: dn, className: (0, V.S)(["dropin-picker__option"]), children: on }, $);
    }), I = (0, X.sO)(null), M = !((w = I.current) !== null && w !== void 0 && w.selected && !u);
    return (0, L.BX)("div", { className: (0, V.S)([en, "dropin-picker", "dropin-picker__".concat(e), ["dropin-picker__floating", !!i], ["dropin-picker__selected", M], ["dropin-picker__error", s], ["dropin-picker__disabled", a], ["dropin-picker__icon", F]]), children: [F && (0, L.tZ)(F.type, vn(vn({}, F.props), {}, { className: "dropin-picker__icon--placeholder" })), (0, L.BX)("select", vn(vn({ id: yn, className: (0, V.S)(["dropin-picker__select", "dropin-picker__select--".concat(m), "dropin-picker__select--".concat(e), ["dropin-picker__select--floating", !!i]]), name: t, "aria-label": t, disabled: a, onChange: (E) => {
      var { options: $, value: on } = E.target;
      for (var dn of $)
        dn.selected && (y({ value: on, text: dn.text, icon: F }), o(E));
    } }, ln), {}, { children: [!u && (i || c) && (0, L.tZ)("option", { value: "", ref: I, className: (0, V.S)(["dropin-picker__option dropin-picker__placeholder"]), children: i ?? c }, f), b] })), (0, L.tZ)(r.J, { source: P.default, size: "24", stroke: "2", className: "dropin-picker__chevronDown" }), i && M && (0, L.tZ)("label", { htmlFor: yn, className: (0, V.S)(["dropin-picker__floatingLabel", !!i]), children: i })] });
  };
}, 470: (G, N, n) => {
  n.d(N, { t: () => vn });
  var r = n(3354), l = n(5587), B = n(1892), C = n.n(B), U = n(5760), an = n.n(U), H = n(8311), K = n.n(H), S = n(1615), O = n.n(S), g = n(8060), j = n.n(g), k = n(9271), P = { attributes: { "data-dropin": "storefront-pdp", "data-sdk": "0.22.0" }, styleTagTransform: function(R, D) {
    var i;
    window._loadedStyles = window._loadedStyles ?? {};
    const v = (i = R == null ? void 0 : R.match(/^\.dropin-(\w+)/)) == null ? void 0 : i[1], d = D.getAttribute("data-sdk"), w = v ? `sdk/${v}` : D.getAttribute("data-dropin");
    D.setAttribute("data-dropin", w), D.removeAttribute("data-sdk");
    const t = window._loadedStyles[w];
    if (t) {
      const e = function(o, a) {
        const [s, c] = o.split("-"), [u, F] = a.split("-"), en = [...s.split("."), c], ln = [...u.split("."), F], yn = parseInt(en[0], 10), _n = parseInt(ln[0], 10);
        if (yn !== _n)
          return yn > _n ? o : a;
        const wn = parseInt(en[1], 10), y = parseInt(ln[1], 10);
        if (wn !== y)
          return wn > y ? o : a;
        const b = parseInt(en[2], 10), I = parseInt(ln[2], 10);
        if (b !== I)
          return b > I ? o : a;
        if (en[3] && ln[3]) {
          const M = /(alpha|beta)(.*)/, E = en[3].match(M), $ = ln[3].match(M), on = E[1], dn = $[1], fn = parseInt(E[2], 10), pn = parseInt($[2], 10);
          if (on === dn)
            return fn > pn ? o : a;
          if (on === "alpha" && dn === "beta")
            return a;
          if (on === "beta" && dn === "alpha")
            return o;
        }
        return en[3] ? a : o;
      }(d, t.sdk);
      if (!v || v && e === t.sdk) {
        const o = t.style.textContent;
        t.style.textContent = `${o}
/* --- MERGED --- */
${R}`;
      } else
        v && e !== t.sdk && (t.style.textContent = `/* --- UPGRADED --- */
${R}`);
      return void D.remove();
    }
    D.textContent = R, window._loadedStyles[w] = { sdk: d, core: v, style: D };
    const f = document.querySelector("head"), { lastDropinStyleInjected: x, lastSDKStyleInjected: m } = window._loadedStyles;
    v ? (m ? f.insertBefore(D, m.nextSibling) : f.insertBefore(D, f.firstChild), window._loadedStyles.lastSDKStyleInjected = D) : (x ? f.insertBefore(D, x.nextSibling) : m ? f.insertBefore(D, m.nextSibling) : f.insertBefore(D, f.firstChild), window._loadedStyles.lastDropinStyleInjected = D);
  } };
  P.setAttributes = O(), P.insert = K().bind(null, "head"), P.domAPI = an(), P.insertStyleElement = j(), C()(k.Z, P), k.Z && k.Z.locals && k.Z.locals;
  var V = n(2754), T = ["amount", "currency", "locale", "variant", "weight", "className", "children", "sale", "formatOptions", "size"];
  function X(R, D) {
    var v = Object.keys(R);
    if (Object.getOwnPropertySymbols) {
      var d = Object.getOwnPropertySymbols(R);
      D && (d = d.filter(function(w) {
        return Object.getOwnPropertyDescriptor(R, w).enumerable;
      })), v.push.apply(v, d);
    }
    return v;
  }
  function L(R) {
    for (var D = 1; D < arguments.length; D++) {
      var v = arguments[D] != null ? arguments[D] : {};
      D % 2 ? X(Object(v), !0).forEach(function(d) {
        nn(R, d, v[d]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(R, Object.getOwnPropertyDescriptors(v)) : X(Object(v)).forEach(function(d) {
        Object.defineProperty(R, d, Object.getOwnPropertyDescriptor(v, d));
      });
    }
    return R;
  }
  function nn(R, D, v) {
    return (D = function(d) {
      var w = function(t, f) {
        if (typeof t != "object" || t === null)
          return t;
        var x = t[Symbol.toPrimitive];
        if (x !== void 0) {
          var m = x.call(t, f || "default");
          if (typeof m != "object")
            return m;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (f === "string" ? String : Number)(t);
      }(d, "string");
      return typeof w == "symbol" ? w : String(w);
    }(D)) in R ? Object.defineProperty(R, D, { value: v, enumerable: !0, configurable: !0, writable: !0 }) : R[D] = v, R;
  }
  function rn(R, D) {
    if (R == null)
      return {};
    var v, d, w = function(f, x) {
      if (f == null)
        return {};
      var m, i, e = {}, o = Object.keys(f);
      for (i = 0; i < o.length; i++)
        m = o[i], x.indexOf(m) >= 0 || (e[m] = f[m]);
      return e;
    }(R, D);
    if (Object.getOwnPropertySymbols) {
      var t = Object.getOwnPropertySymbols(R);
      for (d = 0; d < t.length; d++)
        v = t[d], D.indexOf(v) >= 0 || Object.prototype.propertyIsEnumerable.call(R, v) && (w[v] = R[v]);
    }
    return w;
  }
  var vn = (R) => {
    var { amount: D = 0, currency: v, locale: d, variant: w = "default", weight: t = "bold", className: f, children: x, sale: m = !1, formatOptions: i = {}, size: e = "small" } = R, o = rn(R, T), a = (0, r.Ye)(() => new Intl.NumberFormat(d, L({ style: "currency", currency: v || "USD", minimumFractionDigits: 2, maximumFractionDigits: 2 }, i)), [d, v, i]), s = (0, r.Ye)(() => a.format(D), [D, a]);
    return (0, V.tZ)("span", L(L({}, o), {}, { className: (0, l.S)(["dropin-price", "dropin-price--".concat(w), "dropin-price--".concat(e), "dropin-price--".concat(t), ["dropin-price--sale", m], f]), children: s }));
  };
}, 1759: (G, N, n) => {
  n.d(N, { m: () => D });
  var r = n(3354), l = n(5587), B = n(1892), C = n.n(B), U = n(5760), an = n.n(U), H = n(8311), K = n.n(H), S = n(1615), O = n.n(S), g = n(8060), j = n.n(g), k = n(6193), P = { attributes: { "data-dropin": "storefront-pdp", "data-sdk": "0.22.0" }, styleTagTransform: function(v, d) {
    var o;
    window._loadedStyles = window._loadedStyles ?? {};
    const w = (o = v == null ? void 0 : v.match(/^\.dropin-(\w+)/)) == null ? void 0 : o[1], t = d.getAttribute("data-sdk"), f = w ? `sdk/${w}` : d.getAttribute("data-dropin");
    d.setAttribute("data-dropin", f), d.removeAttribute("data-sdk");
    const x = window._loadedStyles[f];
    if (x) {
      const a = function(s, c) {
        const [u, F] = s.split("-"), [en, ln] = c.split("-"), yn = [...u.split("."), F], _n = [...en.split("."), ln], wn = parseInt(yn[0], 10), y = parseInt(_n[0], 10);
        if (wn !== y)
          return wn > y ? s : c;
        const b = parseInt(yn[1], 10), I = parseInt(_n[1], 10);
        if (b !== I)
          return b > I ? s : c;
        const M = parseInt(yn[2], 10), E = parseInt(_n[2], 10);
        if (M !== E)
          return M > E ? s : c;
        if (yn[3] && _n[3]) {
          const $ = /(alpha|beta)(.*)/, on = yn[3].match($), dn = _n[3].match($), fn = on[1], pn = dn[1], gn = parseInt(on[2], 10), W = parseInt(dn[2], 10);
          if (fn === pn)
            return gn > W ? s : c;
          if (fn === "alpha" && pn === "beta")
            return c;
          if (fn === "beta" && pn === "alpha")
            return s;
        }
        return yn[3] ? c : s;
      }(t, x.sdk);
      if (!w || w && a === x.sdk) {
        const s = x.style.textContent;
        x.style.textContent = `${s}
/* --- MERGED --- */
${v}`;
      } else
        w && a !== x.sdk && (x.style.textContent = `/* --- UPGRADED --- */
${v}`);
      return void d.remove();
    }
    d.textContent = v, window._loadedStyles[f] = { sdk: t, core: w, style: d };
    const m = document.querySelector("head"), { lastDropinStyleInjected: i, lastSDKStyleInjected: e } = window._loadedStyles;
    w ? (e ? m.insertBefore(d, e.nextSibling) : m.insertBefore(d, m.firstChild), window._loadedStyles.lastSDKStyleInjected = d) : (i ? m.insertBefore(d, i.nextSibling) : e ? m.insertBefore(d, e.nextSibling) : m.insertBefore(d, m.firstChild), window._loadedStyles.lastDropinStyleInjected = d);
  } };
  P.setAttributes = O(), P.insert = K().bind(null, "head"), P.domAPI = an(), P.insertStyleElement = j(), C()(k.Z, P), k.Z && k.Z.locals && k.Z.locals;
  var V = n(9724), T = n(2754), X = ["className", "name", "value", "label", "groupAriaLabel", "id", "disabled", "selected", "outOfStock", "multi", "onValue", "onUpdateError"];
  function L(v, d) {
    var w = Object.keys(v);
    if (Object.getOwnPropertySymbols) {
      var t = Object.getOwnPropertySymbols(v);
      d && (t = t.filter(function(f) {
        return Object.getOwnPropertyDescriptor(v, f).enumerable;
      })), w.push.apply(w, t);
    }
    return w;
  }
  function nn(v) {
    for (var d = 1; d < arguments.length; d++) {
      var w = arguments[d] != null ? arguments[d] : {};
      d % 2 ? L(Object(w), !0).forEach(function(t) {
        rn(v, t, w[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(v, Object.getOwnPropertyDescriptors(w)) : L(Object(w)).forEach(function(t) {
        Object.defineProperty(v, t, Object.getOwnPropertyDescriptor(w, t));
      });
    }
    return v;
  }
  function rn(v, d, w) {
    return (d = function(t) {
      var f = function(x, m) {
        if (typeof x != "object" || x === null)
          return x;
        var i = x[Symbol.toPrimitive];
        if (i !== void 0) {
          var e = i.call(x, m || "default");
          if (typeof e != "object")
            return e;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (m === "string" ? String : Number)(x);
      }(t, "string");
      return typeof f == "symbol" ? f : String(f);
    }(d)) in v ? Object.defineProperty(v, d, { value: w, enumerable: !0, configurable: !0, writable: !0 }) : v[d] = w, v;
  }
  function vn(v, d, w, t, f, x, m) {
    try {
      var i = v[x](m), e = i.value;
    } catch (o) {
      return void w(o);
    }
    i.done ? d(e) : Promise.resolve(e).then(t, f);
  }
  function R(v, d) {
    if (v == null)
      return {};
    var w, t, f = function(m, i) {
      if (m == null)
        return {};
      var e, o, a = {}, s = Object.keys(m);
      for (o = 0; o < s.length; o++)
        e = s[o], i.indexOf(e) >= 0 || (a[e] = m[e]);
      return a;
    }(v, d);
    if (Object.getOwnPropertySymbols) {
      var x = Object.getOwnPropertySymbols(v);
      for (t = 0; t < x.length; t++)
        w = x[t], d.indexOf(w) >= 0 || Object.prototype.propertyIsEnumerable.call(v, w) && (f[w] = v[w]);
    }
    return f;
  }
  var D = (v) => {
    var { className: d, name: w, value: t, label: f, groupAriaLabel: x, id: m, disabled: i = !1, selected: e = !1, outOfStock: o = !1, multi: a = !1, onValue: s, onUpdateError: c } = v, u = R(v, X), F = (0, V.XK)("Dropin.Swatches.outOfStock.label").label, en = (0, V.XK)("Dropin.Swatches.selected.label").label, ln = (0, V.XK)("Dropin.Swatches.swatch.label").label, [yn, _n] = (0, r.eJ)(!1), wn = (0, r.sO)(null), y = (0, r.I4)(function() {
      var b, I = (b = function* (M) {
        if (s)
          try {
            yield s(M);
          } catch (E) {
            c && c(E);
          }
      }, function() {
        var M = this, E = arguments;
        return new Promise(function($, on) {
          var dn = b.apply(M, E);
          function fn(gn) {
            vn(dn, $, on, fn, pn, "next", gn);
          }
          function pn(gn) {
            vn(dn, $, on, fn, pn, "throw", gn);
          }
          fn(void 0);
        });
      });
      return function(M) {
        return I.apply(this, arguments);
      };
    }(), [s, c]);
    return (0, r.d4)(() => {
      wn.current && wn.current.scrollWidth > wn.current.clientWidth && _n(!0);
    }, [f]), (0, T.BX)("div", nn(nn({ className: "dropin-text-swatch__container" }, yn ? { "data-tooltip": f } : {}), {}, { children: [(0, T.tZ)("input", nn(nn({ type: a ? "checkbox" : "radio", name: w, id: m, value: t, "aria-label": o ? "".concat(x, ": ").concat(f, " ").concat(F) : e ? "".concat(x, ": ").concat(f, " ").concat(en) : "".concat(x, ": ").concat(f, " ").concat(ln), checked: e, disabled: i, onChange: (b) => {
      var I = b.target;
      y(I.value);
    } }, u), {}, { className: (0, l.S)(["dropin-text-swatch", ["dropin-text-swatch--selected", e], ["dropin-text-swatch--disabled", i], d]) })), (0, T.tZ)("label", { htmlFor: m, ref: wn, className: (0, l.S)(["dropin-text-swatch__label", ["dropin-text-swatch__label--out-of-stock", o], d]), children: f })] }));
  };
}, 7654: (G, N, n) => {
  n.d(N, { D: () => r });
  var r = (l, B) => {
    var C;
    return function() {
      for (var U = arguments.length, an = new Array(U), H = 0; H < U; H++)
        an[H] = arguments[H];
      clearTimeout(C), C = setTimeout(() => l.apply(this, an), B);
    };
  };
}, 3889: (G, N, n) => {
  n.d(N, { A: () => r });
  var r = (l) => l.replace("_", "-");
}, 746: (G, N, n) => {
  n.d(N, { g: () => O });
  var r = n(5792), l = n(9724), B = n(2754), C = ["name", "slot", "context", "children", "render"];
  function U(g, j, k, P, V, T, X) {
    try {
      var L = g[T](X), nn = L.value;
    } catch (rn) {
      return void k(rn);
    }
    L.done ? j(nn) : Promise.resolve(nn).then(P, V);
  }
  function an(g, j) {
    if (g == null)
      return {};
    var k, P, V = function(X, L) {
      if (X == null)
        return {};
      var nn, rn, vn = {}, R = Object.keys(X);
      for (rn = 0; rn < R.length; rn++)
        nn = R[rn], L.indexOf(nn) >= 0 || (vn[nn] = X[nn]);
      return vn;
    }(g, j);
    if (Object.getOwnPropertySymbols) {
      var T = Object.getOwnPropertySymbols(g);
      for (P = 0; P < T.length; P++)
        k = T[P], j.indexOf(k) >= 0 || Object.prototype.propertyIsEnumerable.call(g, k) && (V[k] = g[k]);
    }
    return V;
  }
  function H(g, j) {
    var k = Object.keys(g);
    if (Object.getOwnPropertySymbols) {
      var P = Object.getOwnPropertySymbols(g);
      j && (P = P.filter(function(V) {
        return Object.getOwnPropertyDescriptor(g, V).enumerable;
      })), k.push.apply(k, P);
    }
    return k;
  }
  function K(g) {
    for (var j = 1; j < arguments.length; j++) {
      var k = arguments[j] != null ? arguments[j] : {};
      j % 2 ? H(Object(k), !0).forEach(function(P) {
        S(g, P, k[P]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(g, Object.getOwnPropertyDescriptors(k)) : H(Object(k)).forEach(function(P) {
        Object.defineProperty(g, P, Object.getOwnPropertyDescriptor(k, P));
      });
    }
    return g;
  }
  function S(g, j, k) {
    return (j = function(P) {
      var V = function(T, X) {
        if (typeof T != "object" || T === null)
          return T;
        var L = T[Symbol.toPrimitive];
        if (L !== void 0) {
          var nn = L.call(T, X || "default");
          if (typeof nn != "object")
            return nn;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (X === "string" ? String : Number)(T);
      }(P, "string");
      return typeof V == "symbol" ? V : String(V);
    }(j)) in g ? Object.defineProperty(g, j, { value: k, enumerable: !0, configurable: !0, writable: !0 }) : g[j] = k, g;
  }
  function O(g) {
    var { name: j, slot: k, context: P, children: V, render: T } = g, X = an(g, C), [L, nn] = function() {
      var rn = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, vn = arguments.length > 1 ? arguments[1] : void 0, R = arguments.length > 2 ? arguments[2] : void 0, D = (0, r.sO)(null), v = (0, r.sO)(!1), d = (0, r.sO)([]), [w, t] = (0, r.eJ)({ children: [R == null ? void 0 : R({})] }), [f, x] = (0, r.eJ)({}), m = (0, r.Ye)(() => ({ get: (a) => f[a], set: (a, s) => {
        x(K(K({}, m), {}, { [a]: s }));
      } }), [f]), { intl: i } = (0, r.qp)(l.fH);
      rn.dictionary = i.dictionary, rn._setProps = t;
      var e = (0, r.I4)((a) => {
        typeof a == "function" ? d.current.push(a) : console.warn("Skipped: Invalid _registerMethod", a);
      }, []);
      rn._registerMethod = e;
      var o = (0, r.I4)((a) => (0, B.tZ)("div", { "data-slot-html-element": a.tagName.toLowerCase(), ref: (s) => {
        s == null || s.appendChild(a);
      } }), []);
      return rn._htmlElementToVNode = o, rn.getSlotElement = (0, r.I4)((a) => {
        var s = document.querySelector('[data-slot-key="'.concat(a, '"]'));
        if (s)
          return { appendChild: (c) => {
            s.appendChild(c);
          }, prependChild: (c) => {
            s.insertBefore(c, s.firstChild);
          }, appendSibling: (c) => {
            var u = s.parentNode;
            u == null || u.insertBefore(c, s.nextSibling);
          }, prependSibling: (c) => {
            var u = s.parentNode;
            u == null || u.insertBefore(c, s);
          } };
      }, []), rn.onChange = (0, r.I4)((a) => {
        d.current.push(a);
      }, []), rn.replaceWith = (0, r.I4)((a) => {
        e((s) => {
          var c = o(a);
          s._setProps({ children: [c] });
        });
      }, [o, e]), rn.appendChild = (0, r.I4)((a) => {
        e((s) => {
          var c = o(a);
          s._setProps((u) => K(K({}, u), {}, { children: [...u.children, c] }));
        });
      }, [o, e]), rn.prependChild = (0, r.I4)((a) => {
        e((s) => {
          var c = o(a);
          s._setProps((u) => K(K({}, u), {}, { children: [c, ...u.children] }));
        });
      }, [o, e]), rn.appendSibling = (0, r.I4)((a) => {
        e(() => {
          var s, c, u, F = (s = D.current) === null || s === void 0 ? void 0 : s.parentNode;
          F == null || F.insertBefore(a, (c = (u = D.current) === null || u === void 0 ? void 0 : u.nextSibling) !== null && c !== void 0 ? c : null);
        });
      }, [e]), rn.prependSibling = (0, r.I4)((a) => {
        e(() => {
          var s, c = (s = D.current) === null || s === void 0 ? void 0 : s.parentNode;
          c == null || c.insertBefore(a, D.current);
        });
      }, [e]), (0, r.d4)(() => {
        var a = D.current;
        if (vn && a)
          try {
            vn(rn, a);
          } catch (s) {
            console.error('Error in "'.concat(vn.name, '" Slot callback'), s);
          }
      }, []), (0, r.d4)(() => {
        t({ children: [R == null ? void 0 : R(w)] }), d.current.forEach((a) => {
          a(rn, m);
        }), (R == null ? void 0 : R.name) === "render" && v.current === !1 && (v.current = !0);
      }, [JSON.stringify(rn), JSON.stringify(f), v.current]), [D, w];
    }(P, k, T ?? (() => V));
    return (0, r.d4)(() => {
      j || console.warn('Slot "name" is required');
    }, [j]), (0, B.tZ)("div", K(K({}, X), {}, { ref: L, "data-slot": j, children: nn.children }));
  }
  window.DROPINS = window.DROPINS || {}, window.DROPINS.showSlots = function() {
    var g, j = (g = function* (k) {
      if (window.sessionStorage.setItem("dropin-debugger--show-slots", k.toString()), document.body.classList.toggle("dropin-debugger--show-slots", k), k)
        try {
          yield n.e(660).then(n.bind(n, 660));
        } catch {
        }
    }, function() {
      var k = this, P = arguments;
      return new Promise(function(V, T) {
        var X = g.apply(k, P);
        function L(rn) {
          U(X, V, T, L, nn, "next", rn);
        }
        function nn(rn) {
          U(X, V, T, L, nn, "throw", rn);
        }
        L(void 0);
      });
    });
    return function(k) {
      return j.apply(this, arguments);
    };
  }(), window.DROPINS.showSlots(window.sessionStorage.getItem("dropin-debugger--show-slots") === "true");
}, 387: (G, N, n) => {
  n.d(N, { Z: () => U });
  var r = n(4933), l = n.n(r), B = n(3476), C = n.n(B)()(l());
  C.push([G.id, `.dropin-breadcrumbs__container{
  display:flex;
}

.dropin-breadcrumbs__items{
  display:flex;
  flex-wrap:wrap;
  font:var(--type-details-caption-1-font);
  list-style:none;
  margin:0;
  padding:0;
}

.dropin-breadcrumbs__item{
  display:flex;
  justify-content:center;
}

.dropin-breadcrumbs__item--last > :first-child{
  color:var(--color-brand-500);
  cursor:default;
}

.dropin-breadcrumbs__item--last > :first-child:hover,
.dropin-breadcrumbs__item--last > :first-child:focus-visible{
  text-decoration:none;
}

.dropin-breadcrumbs__separator--default{
  margin:0 var(--spacing-xsmall);
}

.dropin-breadcrumbs__separator--icon{
  width:16px;
  height:16px;
  margin:0 var(--spacing-xxsmall);
}
`, ""]);
  const U = C;
}, 8534: (G, N, n) => {
  n.d(N, { Z: () => U });
  var r = n(4933), l = n.n(r), B = n(3476), C = n.n(B)()(l());
  C.push([G.id, `.dropin-button,
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
  const U = C;
}, 3652: (G, N, n) => {
  n.d(N, { Z: () => U });
  var r = n(4933), l = n.n(r), B = n(3476), C = n.n(B)()(l());
  C.push([G.id, `.dropin-color-swatch__container input[type='radio'],
.dropin-color-swatch__container input[type='checkbox']{
  opacity:0;
  position:absolute;
  width:0;
  height:0;
}

.dropin-color-swatch__container .dropin-color-swatch__span{
  border-radius:50%;
  display:inline-block;
  --bg-color:var(--color-neutral-300);
  box-shadow:0 0 0 var(--shape-border-width-1) var(--color-neutral-400);
  position:relative;
  cursor:pointer;
  background-color:var(--bg-color);
}

.dropin-color-swatch__container--medium .dropin-color-swatch__span{
  height:32px;
  width:32px;
}

.dropin-color-swatch__container--large .dropin-color-swatch__span{
  height:40px;
  width:40px;
}

.dropin-color-swatch__container
  input[type='radio']:not(:checked):active
  ~ .dropin-color-swatch__span,
.dropin-color-swatch__container
  input[type='checkbox']:not(:checked):active
  ~ .dropin-color-swatch__span{
  box-shadow:0 0 0 var(--shape-border-width-1) var(--color-neutral-500);
  outline:none;
}

.dropin-color-swatch__container
  input[type='radio']:checked
  ~ .dropin-color-swatch__span,
.dropin-color-swatch__container
  input[type='checkbox']:checked
  ~ .dropin-color-swatch__span,
.dropin-color-swatch--selected{
  box-shadow:0 0 0 var(--shape-border-width-3) var(--color-neutral-50), 0 0 0 var(--shape-border-width-4) var(--color-neutral-800);
}

.dropin-color-swatch__container
  input[type='radio']:checked:active
  ~ .dropin-color-swatch__span,
.dropin-color-swatch__container
  input[type='checkbox']:checked:active
  ~ .dropin-color-swatch__span{
  box-shadow:0 0 0 var(--shape-border-width-3) var(--color-neutral-50), 0 0 0 var(--shape-border-width-4) var(--color-neutral-900);
}

.dropin-color-swatch__container
  input[type='radio']:focus-visible
  + .dropin-color-swatch__span,
.dropin-color-swatch__container
  input[type='checkbox']:focus-visible
  + .dropin-color-swatch__span{
  box-shadow:0 0 0 var(--shape-border-width-3) var(--color-neutral-900), 0 0 0 6px var(--color-neutral-400);
}

.dropin-color-swatch__container
  input[type='radio']:disabled
  ~ .dropin-color-swatch__span,
.dropin-color-swatch__container
  input[type='checkbox']:disabled
  ~ .dropin-color-swatch__span,
.dropin-color-swatch--disabled,
.dropin-color-swatch__container
  input[type='radio']:disabled:active
  ~ .dropin-color-swatch__span,
.dropin-color-swatch__container
  input[type='checkbox']:disabled:active
  ~ .dropin-color-swatch__span{
  box-shadow:0 0 0 var(--shape-border-width-4) var(--color-neutral-500);
  opacity:0.24;
  pointer-events:none;
}

.dropin-color-swatch__span--out-of-stock{
  box-shadow:0 0 0 var(--shape-border-width-1) var(--color-neutral-700);
  background:linear-gradient(
      to top left,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) calc(50% - 0.8px),
      var(--color-neutral-700) 50%,
      rgba(0, 0, 0, 0) calc(50% + 0.8px),
      rgba(0, 0, 0, 0) 100%
    ), var(--bg-color);
}

.dropin-color-swatch__container
  input[type='radio']:not(:disabled)
  ~ .dropin-color-swatch__span,
.dropin-color-swatch__container
  input[type='checkbox']:not(:disabled)
  ~ .dropin-color-swatch__span{
  cursor:pointer;
}
`, ""]);
  const U = C;
}, 8746: (G, N, n) => {
  n.d(N, { Z: () => U });
  var r = n(4933), l = n.n(r), B = n(3476), C = n.n(B)()(l());
  C.push([G.id, `.dropin-icon{
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
  const U = C;
}, 9490: (G, N, n) => {
  n.d(N, { Z: () => U });
  var r = n(4933), l = n.n(r), B = n(3476), C = n.n(B)()(l());
  C.push([G.id, `.dropin-image{
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
  const U = C;
}, 6725: (G, N, n) => {
  n.d(N, { Z: () => U });
  var r = n(4933), l = n.n(r), B = n(3476), C = n.n(B)()(l());
  C.push([G.id, `.dropin-image-swatch__container input[type='radio'],
.dropin-image-swatch__container input[type='checkbox']{
  opacity:0;
  position:absolute;
  width:0;
  height:0;
}

.dropin-image-swatch__container .dropin-image-swatch__span{
  display:inline-block;
  --bg-color:var(--color-neutral-300);
  box-shadow:0 0 0 var(--shape-border-width-1) var(--color-neutral-400);
  position:relative;
  cursor:pointer;
  background-color:var(--bg-color);
  background-image:var(--background-image);
  background-repeat:no-repeat;
  background-size:cover;
  height:100px;
  width:100px;
  overflow:hidden;
}

.dropin-image-swatch__content{
  width:inherit;
  position:absolute;
  top:-9999px;
  bottom:-9999px;
  left:-9999px;
  right:-9999px;
  margin:auto;
}

.dropin-image-swatch__span:hover{
  box-shadow:0 0 0 var(--shape-border-width-3) var(--color-neutral-50), 0 0 0 var(--shape-border-width-4) var(--color-neutral-500);
  outline:none;
}

.dropin-image-swatch__container
  input[type='radio']:not(:checked):active
  ~ .dropin-image-swatch__span,
.dropin-image-swatch__container
  input[type='checkbox']:not(:checked):active
  ~ .dropin-image-swatch__span{
  box-shadow:0 0 0 var(--shape-border-width-1) var(--color-neutral-500);
  outline:none;
}

.dropin-image-swatch__container
  input[type='radio']:checked
  ~ .dropin-image-swatch__span,
.dropin-image-swatch__container
  input[type='checkbox']:checked
  ~ .dropin-image-swatch__span,
.dropin-image-swatch--selected{
  box-shadow:0 0 0 var(--shape-border-width-3) var(--color-neutral-50), 0 0 0 var(--shape-border-width-4) var(--color-neutral-800);
}

.dropin-image-swatch__container
  input[type='radio']:checked:active
  ~ .dropin-image-swatch__span,
.dropin-image-swatch__container
  input[type='checkbox']:checked:active
  ~ .dropin-image-swatch__span{
  box-shadow:0 0 0 var(--shape-border-width-3) var(--color-neutral-50), 0 0 0 var(--shape-border-width-4) var(--color-neutral-600);
}

.dropin-image-swatch__container
  input[type='radio']:focus-visible
  + .dropin-image-swatch__span,
.dropin-image-swatch__container
  input[type='checkbox']:focus-visible
  + .dropin-image-swatch__span{
  box-shadow:0 0 0 var(--shape-border-width-3) var(--color-neutral-900), 0 0 0 6px var(--color-neutral-400);
}

.dropin-image-swatch__container
  input[type='radio']:disabled
  ~ .dropin-image-swatch__span,
.dropin-image-swatch__container
  input[type='checkbox']:disabled
  ~ .dropin-image-swatch__span,
.dropin-image-swatch--disabled,
.dropin-image-swatch__container
  input[type='radio']:disabled:active
  ~ .dropin-image-swatch__span,
.dropin-image-swatch__container
  input[type='checkbox']:disabled:active
  ~ .dropin-image-swatch__span{
  box-shadow:0 0 0 var(--shape-border-width-4) var(--color-neutral-500);
  background-color:rgba(255, 255, 255, 0.76);
  pointer-events:none;
}

.dropin-image-swatch__container .dropin-image-swatch__span--out-of-stock{
  background:linear-gradient(
    to top left,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0) calc(50% - 0.8px),
    var(--color-neutral-700) 50%,
    rgba(0, 0, 0, 0) calc(50% + 0.8px),
    rgba(0, 0, 0, 0) 100%
  );
  background-color:rgba(255, 255, 255, 0.6);
}

.dropin-image-swatch__span--out-of-stock > .dropin-image-swatch__content,
.dropin-image-swatch__container
  input[type='radio']:disabled
  ~ .dropin-image-swatch__span
  > .dropin-image-swatch__content,
.dropin-image-swatch__container
  input[type='checkbox']:disabled
  ~ .dropin-image-swatch__span
  > .dropin-image-swatch__content{
  z-index:-1;
}

.dropin-image-swatch__container
  input[type='radio']:not(:disabled)
  ~ .dropin-image-swatch__span,
.dropin-image-swatch__container
  input[type='checkbox']:not(:disabled)
  ~ .dropin-image-swatch__span{
  cursor:pointer;
}
`, ""]);
  const U = C;
}, 3795: (G, N, n) => {
  n.d(N, { Z: () => U });
  var r = n(4933), l = n.n(r), B = n(3476), C = n.n(B)()(l());
  C.push([G.id, `.dropin-incrementer__content{
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
  const U = C;
}, 4190: (G, N, n) => {
  n.d(N, { Z: () => U });
  var r = n(4933), l = n.n(r), B = n(3476), C = n.n(B)()(l());
  C.push([G.id, `.dropin-picker{
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
  const U = C;
}, 9271: (G, N, n) => {
  n.d(N, { Z: () => U });
  var r = n(4933), l = n.n(r), B = n(3476), C = n.n(B)()(l());
  C.push([G.id, `.dropin-price{
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
  const U = C;
}, 6193: (G, N, n) => {
  n.d(N, { Z: () => U });
  var r = n(4933), l = n.n(r), B = n(3476), C = n.n(B)()(l());
  C.push([G.id, `.dropin-text-swatch__container input[type='radio'],
.dropin-text-swatch__container input[type='checkbox']{
  opacity:0;
  position:absolute;
  width:0;
}

.dropin-text-swatch__container label{
  display:inline-block;
  background-color:var(--color-neutral-200);
  color:var(--color-neutral-800);
  border:var(--shape-border-width-1) solid var(--color-neutral-400);
  padding:6px var(--spacing-small);
  border-radius:var(--shape-border-radius-1);
  box-sizing:border-box;
  align-items:center;
  justify-content:center;
  font:var(--type-body-1-strong-font);
  position:relative;
  display:block;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
}

.dropin-text-swatch__container label:hover{
  color:var(--color-neutral-900);
}

.dropin-text-swatch__container
  input[type='radio']:checked
  + .dropin-text-swatch__label,
.dropin-text-swatch__container
  input[type='checkbox']:checked
  + .dropin-text-swatch__label,
.dropin-text-swatch--selected{
  background-color:var(--color-neutral-50);
  box-shadow:0 0 0 var(--shape-border-width-1) var(--color-neutral-900);
}

.dropin-text-swatch__container input[type='radio']:focus-visible + label,
.dropin-text-swatch__container input[type='checkbox']:focus-visible + label{
  background-color:var(--color-neutral-200);
  border:var(--shape-border-width-3) solid var(--color-neutral-800);
  outline:solid var(--shape-border-width-4) var(--color-neutral-400);
}

.dropin-text-swatch__container input[type='radio']:checked + label:active,
.dropin-text-swatch__container input[type='checkbox']:checked + label:active,
.dropin-text-swatch--selected{
  background-color:var(--color-neutral-200);
  box-shadow:0 0 0 var(--shape-border-width-3) var(--color-neutral-900), 0 0 0 6px var(--color-neutral-400);
}

.dropin-text-swatch__container input[type='radio']:active + label,
.dropin-text-swatch__container input[type='radio']:checked + label:active,
.dropin-text-swatch__container
  input[type='radio']:checked
  + label:hover:not(:focus-visible),
.dropin-text-swatch__container input[type='checkbox']:active + label,
.dropin-text-swatch__container input[type='checkbox']:checked + label:active,
.dropin-text-swatch__container
  input[type='checkbox']:checked
  + label:hover:not(:focus-visible){
  border:var(--shape-border-width-1) solid var(--color-neutral-500);
  color:var(--color-neutral-900);
  outline:none;
}

.dropin-text-swatch__container input[type='radio']:disabled + label,
.dropin-text-swatch__container input[type='checkbox']:disabled + label,
.dropin-text-swatch--disabled,
.dropin-text-swatch__container
  input[type='radio']:disabled:focus-visible
  + label,
.dropin-text-swatch__container
  input[type='checkbox']:disabled:focus-visible
  + label{
  background-color:var(--color-neutral-300);
  color:var(--color-neutral-500);
  pointer-events:none;
  border:var(--shape-border-width-1) solid var(--color-neutral-500);
  outline:none;
}

.dropin-text-swatch__label--out-of-stock{
  background:linear-gradient(
      to top left,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) calc(50% - 0.8px),
      var(--color-neutral-700) 50%,
      rgba(0, 0, 0, 0) calc(50% + 0.8px),
      rgba(0, 0, 0, 0) 100%
    ), var(--color-neutral-200);
}

.dropin-text-swatch__container input[type='radio']:not(:disabled) + label,
.dropin-text-swatch__container input[type='checkbox']:not(:disabled) + label{
  cursor:pointer;
}

[data-tooltip]{
  position:relative;
}

[data-tooltip]:after{
  display:none;
  content:attr(data-tooltip);
  position:absolute;
  bottom:100%;
  left:0px;
  background-color:var(--color-neutral-50);
  color:var(--color-neutral-800);
  border:var(--shape-border-width-1) solid var(--color-neutral-400);
  padding:6px var(--spacing-small);
  border-radius:var(--shape-border-radius-1);
  white-space:nowrap;
  z-index:1000;
  font:var(--type-body-1-strong-font);
  margin-bottom:var(--spacing-xxsmall);
  -webkit-border-radius:var(--shape-border-radius-1);
  -moz-border-radius:var(--shape-border-radius-1);
}

[data-tooltip]:hover:after{
  display:block;
}
`, ""]);
  const U = C;
} }, qt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  id: Lt,
  ids: Kt,
  modules: Yt
}, Symbol.toStringTag, { value: "Module" })), Xt = 175, Gt = [175], Ft = { 5414: (G, N, n) => {
  n.d(N, { f: () => Ce, Z: () => Ce });
  var r = n(3354), l = n(746), B = n(3889), C = n(1336), U = n(8910), an = n(6901), H = n(6816), K = n(9728), S = n(5587), O = n(9724), g = n(2808), j = n(1759), k = n(7138), P = n(8290), V = n(1892), T = n.n(V), X = n(5760), L = n.n(X), nn = n(8311), rn = n.n(nn), vn = n(1615), R = n.n(vn), D = n(8060), v = n.n(D), d = n(3162), w = { attributes: { "data-dropin": "storefront-pdp", "data-sdk": "0.22.0" }, styleTagTransform: function(_, p) {
    var mn;
    window._loadedStyles = window._loadedStyles ?? {};
    const h = (mn = _ == null ? void 0 : _.match(/^\.dropin-(\w+)/)) == null ? void 0 : mn[1], A = p.getAttribute("data-sdk"), J = h ? `sdk/${h}` : p.getAttribute("data-dropin");
    p.setAttribute("data-dropin", J), p.removeAttribute("data-sdk");
    const z = window._loadedStyles[J];
    if (z) {
      const An = function(un, Sn) {
        const [ue, se] = un.split("-"), [Kn, Un] = Sn.split("-"), sn = [...ue.split("."), se], bn = [...Kn.split("."), Un], Tn = parseInt(sn[0], 10), Mn = parseInt(bn[0], 10);
        if (Tn !== Mn)
          return Tn > Mn ? un : Sn;
        const ne = parseInt(sn[1], 10), Ln = parseInt(bn[1], 10);
        if (ne !== Ln)
          return ne > Ln ? un : Sn;
        const ce = parseInt(sn[2], 10), Vn = parseInt(bn[2], 10);
        if (ce !== Vn)
          return ce > Vn ? un : Sn;
        if (sn[3] && bn[3]) {
          const pe = /(alpha|beta)(.*)/, xn = sn[3].match(pe), qn = bn[3].match(pe), te = xn[1], oe = qn[1], re = parseInt(xn[2], 10), kn = parseInt(qn[2], 10);
          if (te === oe)
            return re > kn ? un : Sn;
          if (te === "alpha" && oe === "beta")
            return Sn;
          if (te === "beta" && oe === "alpha")
            return un;
        }
        return sn[3] ? Sn : un;
      }(A, z.sdk);
      if (!h || h && An === z.sdk) {
        const un = z.style.textContent;
        z.style.textContent = `${un}
/* --- MERGED --- */
${_}`;
      } else
        h && An !== z.sdk && (z.style.textContent = `/* --- UPGRADED --- */
${_}`);
      return void p.remove();
    }
    p.textContent = _, window._loadedStyles[J] = { sdk: A, core: h, style: p };
    const q = document.querySelector("head"), { lastDropinStyleInjected: cn, lastSDKStyleInjected: tn } = window._loadedStyles;
    h ? (tn ? q.insertBefore(p, tn.nextSibling) : q.insertBefore(p, q.firstChild), window._loadedStyles.lastSDKStyleInjected = p) : (cn ? q.insertBefore(p, cn.nextSibling) : tn ? q.insertBefore(p, tn.nextSibling) : q.insertBefore(p, q.firstChild), window._loadedStyles.lastDropinStyleInjected = p);
  } };
  w.setAttributes = R(), w.insert = rn().bind(null, "head"), w.domAPI = L(), w.insertStyleElement = v(), T()(d.Z, w), d.Z && d.Z.locals && d.Z.locals;
  var t = n(2754), f = ["options", "hideSelectedValue", "onValues", "onErrors", "defaultOptions", "selectionsToUpdate", "className", "children"];
  function x(_, p) {
    if (_ == null)
      return {};
    var h, A, J = function(q, cn) {
      if (q == null)
        return {};
      var tn, mn, An = {}, un = Object.keys(q);
      for (mn = 0; mn < un.length; mn++)
        tn = un[mn], cn.indexOf(tn) >= 0 || (An[tn] = q[tn]);
      return An;
    }(_, p);
    if (Object.getOwnPropertySymbols) {
      var z = Object.getOwnPropertySymbols(_);
      for (A = 0; A < z.length; A++)
        h = z[A], p.indexOf(h) >= 0 || Object.prototype.propertyIsEnumerable.call(_, h) && (J[h] = _[h]);
    }
    return J;
  }
  function m(_, p) {
    var h = Object.keys(_);
    if (Object.getOwnPropertySymbols) {
      var A = Object.getOwnPropertySymbols(_);
      p && (A = A.filter(function(J) {
        return Object.getOwnPropertyDescriptor(_, J).enumerable;
      })), h.push.apply(h, A);
    }
    return h;
  }
  function i(_) {
    for (var p = 1; p < arguments.length; p++) {
      var h = arguments[p] != null ? arguments[p] : {};
      p % 2 ? m(Object(h), !0).forEach(function(A) {
        e(_, A, h[A]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(_, Object.getOwnPropertyDescriptors(h)) : m(Object(h)).forEach(function(A) {
        Object.defineProperty(_, A, Object.getOwnPropertyDescriptor(h, A));
      });
    }
    return _;
  }
  function e(_, p, h) {
    return (p = function(A) {
      var J = function(z, q) {
        if (typeof z != "object" || z === null)
          return z;
        var cn = z[Symbol.toPrimitive];
        if (cn !== void 0) {
          var tn = cn.call(z, q || "default");
          if (typeof tn != "object")
            return tn;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (q === "string" ? String : Number)(z);
      }(A, "string");
      return typeof J == "symbol" ? J : String(J);
    }(p)) in _ ? Object.defineProperty(_, p, { value: h, enumerable: !0, configurable: !0, writable: !0 }) : _[p] = h, _;
  }
  var o = ["text", "image", "color", "dropdown"], a = (_) => _.map((p) => i(i({}, p), {}, { text: p.label, disabled: !p.inStock })), s = (_) => {
    var { options: p, hideSelectedValue: h, onValues: A, onErrors: J, defaultOptions: z, selectionsToUpdate: q, className: cn, children: tn } = _, mn = x(_, f), An = (0, O.XK)("PDP.Swatches.Required.label").label, [un, Sn] = (0, r.eJ)(() => p == null ? void 0 : p.reduce((Kn, Un) => {
      var { items: sn } = Un, bn = sn == null ? void 0 : sn.find((Mn) => z == null ? void 0 : z.includes(Mn.id)), Tn = sn == null ? void 0 : sn.find((Mn) => Mn.selected);
      return bn ? i(i({}, Kn), {}, { [Un.id]: { label: bn.label, value: bn.id } }) : Tn ? i(i({}, Kn), {}, { [Un.id]: { label: Tn.label, value: Tn.id } }) : Kn;
    }, {}));
    (0, r.d4)(() => {
      q == null || q.forEach((Kn) => {
        Sn((Un) => {
          var sn, bn = Kn == null || (sn = Kn.items) === null || sn === void 0 ? void 0 : sn.find((Tn) => Tn.selected);
          return bn ? i(i({}, Un), {}, { [Kn.id]: { label: bn == null ? void 0 : bn.label, value: bn == null ? void 0 : bn.id } }) : Un;
        });
      });
    }, [q, Sn]), (0, r.Ye)(() => {
      var Kn = p == null ? void 0 : p.reduce((Un, sn) => {
        var bn;
        return sn == null || (bn = sn.items) === null || bn === void 0 || bn.forEach((Tn) => {
          var Mn, ne = ((Mn = un[sn.id]) === null || Mn === void 0 ? void 0 : Mn.value) === Tn.id;
          sn.required && !ne && (Un[sn.id] = An);
        }), Un;
      }, {});
      return J == null || J(Kn), Kn;
    }, [un]);
    var ue = (0, r.I4)((Kn, Un, sn) => {
      Sn((bn) => {
        var Tn = i(i({}, bn), {}, { [Kn]: { label: Un, value: sn } });
        return A == null || A(Tn, sn), Tn;
      });
    }, [A]), se = (0, r.I4)((Kn) => {
      var { items: Un, id: sn, required: bn, type: Tn, selected: Mn, label: ne } = Kn;
      return (0, t.tZ)("div", { className: (0, S.S)(["pdp-swatches__options"]), children: (Tn == null ? void 0 : Tn.toLowerCase()) === "dropdown" ? (0, t.tZ)(g.c, { "aria-label": ne, handleSelect: (Ln) => ((ce, Vn) => {
        var pe, xn, qn = (pe = (xn = Vn.selectedOptions[0]) === null || xn === void 0 ? void 0 : xn.label) !== null && pe !== void 0 ? pe : "";
        ue(ce, qn, Vn.value);
      })(sn, Ln.target), options: a(Un), value: Mn }) : Un == null ? void 0 : Un.map((Ln) => {
        var ce = { key: Ln.id, id: Ln.id, name: sn, value: Ln.value, label: Ln.label, groupAriaLabel: ne, selected: Mn === Ln.id, outOfStock: !Ln.inStock, required: bn === null || bn, onValue: () => {
          ue(sn, Ln.label, Ln.id);
        } };
        switch (Tn) {
          case "text":
            return (0, t.tZ)(j.m, i(i({}, ce), {}, { label: Ln.label }));
          case "image":
            return (0, t.tZ)(k.k, i(i({}, ce), {}, { src: Ln.value, alt: Ln.label }));
          case "color":
            return (0, t.tZ)(P.b, i(i({}, ce), {}, { size: "large", color: Ln.value }));
          default:
            return console.warn("Invalid swatch type ".concat(Tn)), null;
        }
      }) });
    }, [ue]);
    return (0, t.tZ)("div", i(i({}, mn), {}, { className: (0, S.S)(["pdp-swatches", cn]), children: p == null ? void 0 : p.map((Kn) => {
      var Un, { type: sn, label: bn, id: Tn, multiple: Mn, required: ne, items: Ln } = Kn;
      if (sn)
        return o.includes(sn) || console.warn("Invalid swatch type ".concat(sn)), Mn && console.warn("Multiple selection swatches are not currently supported."), (0, t.BX)("div", { id: "swatch-item-".concat(Tn), "data-slot-key": "product-swatch--".concat(Tn), className: "pdp-swatches__field", children: [(0, t.tZ)("div", { className: "pdp-swatches__field__label", children: un[Tn] ? h ? "".concat(bn) : "".concat(bn, ": ").concat(un[Tn].label) : bn }), (0, t.tZ)(se, { id: Tn, type: sn, required: ne, items: Ln, label: bn, selected: (Un = un[Tn]) === null || Un === void 0 ? void 0 : Un.value })] }, "swatch-item-".concat(Tn));
      console.warn("Bundle product not supported on UI.");
    }) }));
  }, c = n(1177), u = n(7654), F = n(8991), en = n(5465), ln = { attributes: { "data-dropin": "storefront-pdp", "data-sdk": "0.22.0" }, styleTagTransform: function(_, p) {
    var mn;
    window._loadedStyles = window._loadedStyles ?? {};
    const h = (mn = _ == null ? void 0 : _.match(/^\.dropin-(\w+)/)) == null ? void 0 : mn[1], A = p.getAttribute("data-sdk"), J = h ? `sdk/${h}` : p.getAttribute("data-dropin");
    p.setAttribute("data-dropin", J), p.removeAttribute("data-sdk");
    const z = window._loadedStyles[J];
    if (z) {
      const An = function(un, Sn) {
        const [ue, se] = un.split("-"), [Kn, Un] = Sn.split("-"), sn = [...ue.split("."), se], bn = [...Kn.split("."), Un], Tn = parseInt(sn[0], 10), Mn = parseInt(bn[0], 10);
        if (Tn !== Mn)
          return Tn > Mn ? un : Sn;
        const ne = parseInt(sn[1], 10), Ln = parseInt(bn[1], 10);
        if (ne !== Ln)
          return ne > Ln ? un : Sn;
        const ce = parseInt(sn[2], 10), Vn = parseInt(bn[2], 10);
        if (ce !== Vn)
          return ce > Vn ? un : Sn;
        if (sn[3] && bn[3]) {
          const pe = /(alpha|beta)(.*)/, xn = sn[3].match(pe), qn = bn[3].match(pe), te = xn[1], oe = qn[1], re = parseInt(xn[2], 10), kn = parseInt(qn[2], 10);
          if (te === oe)
            return re > kn ? un : Sn;
          if (te === "alpha" && oe === "beta")
            return Sn;
          if (te === "beta" && oe === "alpha")
            return un;
        }
        return sn[3] ? Sn : un;
      }(A, z.sdk);
      if (!h || h && An === z.sdk) {
        const un = z.style.textContent;
        z.style.textContent = `${un}
/* --- MERGED --- */
${_}`;
      } else
        h && An !== z.sdk && (z.style.textContent = `/* --- UPGRADED --- */
${_}`);
      return void p.remove();
    }
    p.textContent = _, window._loadedStyles[J] = { sdk: A, core: h, style: p };
    const q = document.querySelector("head"), { lastDropinStyleInjected: cn, lastSDKStyleInjected: tn } = window._loadedStyles;
    h ? (tn ? q.insertBefore(p, tn.nextSibling) : q.insertBefore(p, q.firstChild), window._loadedStyles.lastSDKStyleInjected = p) : (cn ? q.insertBefore(p, cn.nextSibling) : tn ? q.insertBefore(p, tn.nextSibling) : q.insertBefore(p, q.firstChild), window._loadedStyles.lastDropinStyleInjected = p);
  } };
  ln.setAttributes = R(), ln.insert = rn().bind(null, "head"), ln.domAPI = L(), ln.insertStyleElement = v(), T()(en.Z, ln), en.Z && en.Z.locals && en.Z.locals;
  var yn = ["show", "scrollbar", "peak", "arrows", "controls", "arrowsOnMainImage", "loop", "gap", "direction", "width", "height", "defaultIndex", "className", "children", "thumbnails", "isZoomed"];
  function _n(_, p) {
    var h = Object.keys(_);
    if (Object.getOwnPropertySymbols) {
      var A = Object.getOwnPropertySymbols(_);
      p && (A = A.filter(function(J) {
        return Object.getOwnPropertyDescriptor(_, J).enumerable;
      })), h.push.apply(h, A);
    }
    return h;
  }
  function wn(_) {
    for (var p = 1; p < arguments.length; p++) {
      var h = arguments[p] != null ? arguments[p] : {};
      p % 2 ? _n(Object(h), !0).forEach(function(A) {
        y(_, A, h[A]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(_, Object.getOwnPropertyDescriptors(h)) : _n(Object(h)).forEach(function(A) {
        Object.defineProperty(_, A, Object.getOwnPropertyDescriptor(h, A));
      });
    }
    return _;
  }
  function y(_, p, h) {
    return (p = function(A) {
      var J = function(z, q) {
        if (typeof z != "object" || z === null)
          return z;
        var cn = z[Symbol.toPrimitive];
        if (cn !== void 0) {
          var tn = cn.call(z, q || "default");
          if (typeof tn != "object")
            return tn;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (q === "string" ? String : Number)(z);
      }(A, "string");
      return typeof J == "symbol" ? J : String(J);
    }(p)) in _ ? Object.defineProperty(_, p, { value: h, enumerable: !0, configurable: !0, writable: !0 }) : _[p] = h, _;
  }
  function b(_, p) {
    if (_ == null)
      return {};
    var h, A, J = function(q, cn) {
      if (q == null)
        return {};
      var tn, mn, An = {}, un = Object.keys(q);
      for (mn = 0; mn < un.length; mn++)
        tn = un[mn], cn.indexOf(tn) >= 0 || (An[tn] = q[tn]);
      return An;
    }(_, p);
    if (Object.getOwnPropertySymbols) {
      var z = Object.getOwnPropertySymbols(_);
      for (A = 0; A < z.length; A++)
        h = z[A], p.indexOf(h) >= 0 || Object.prototype.propertyIsEnumerable.call(_, h) && (J[h] = _[h]);
    }
    return J;
  }
  var I = (_) => {
    var { show: p = 1, scrollbar: h = !1, peak: A = !1, arrows: J = !1, controls: z = "dots", arrowsOnMainImage: q = !1, loop: cn = !1, gap: tn = null, direction: mn = "horizontal", width: An = "100%", height: un = "100%", defaultIndex: Sn = 0, className: ue, children: se, thumbnails: Kn = null, isZoomed: Un } = _, sn = b(_, yn), bn = (0, O.XK)("PDP.Carousel.label").label, Tn = (0, O.XK)("PDP.Carousel.Slide.label").label, Mn = (0, O.XK)("PDP.Carousel.Previous.label").label, ne = (0, O.XK)("PDP.Carousel.Next.label").label, Ln = (0, O.XK)("PDP.Carousel.Controls.label").label, ce = (0, O.XK)("PDP.Carousel.Controls.Button.label").label, [Vn, pe] = (0, r.eJ)(() => M(p)), xn = Math.ceil(r.hu.toArray(se).length / Vn), qn = A ? 24 : 0, te = tn ? { small: 16, medium: 24, large: 64 }[tn] : 0, oe = r.hu.toArray(se).length % Vn, [re, kn] = (0, r.eJ)(cn ? Sn + 1 : Sn), He = (0, r.sO)([]), [ze, Ue] = (0, r.eJ)(0), [Xe, Ke] = (0, r.eJ)(0), me = (0, r.Ye)(() => r.hu.toArray(Kn), [Kn]), _e = (0, r.Ye)(() => {
      var Cn = r.hu.toArray(se).reduce((Rn, ge, ie) => ie % Vn == 0 ? [...Rn, [ge]] : [...Rn.slice(0, -1), [...Rn[Rn.length - 1], ge]], []);
      return cn && Cn.length !== 1 ? cn && r.hu.toArray(se).length % Vn == 0 ? [Cn[xn - 1]].concat(Cn).concat([Cn[0], Cn[1]]) : [r.hu.toArray(se).slice(-Vn)].concat(Cn).concat([Cn[0], Cn[1]]) : Cn;
    }, [se, Vn, xn, cn]), Ge = (0, r.sO)(null), Qe = (0, r.sO)(null), Ae = z === "thumbnailsRow" || z === "thumbnailsColumn";
    (0, r.d4)(() => {
      var Cn = document.body, Rn = (0, u.D)(() => {
        var ie, ke, we, We;
        Ue((ie = (ke = Ge.current) === null || ke === void 0 ? void 0 : ke.offsetWidth) !== null && ie !== void 0 ? ie : 0), Ke((we = (We = Ge.current) === null || We === void 0 ? void 0 : We.offsetHeight) !== null && we !== void 0 ? we : 0);
        var et = window.innerWidth, nt = M(p, et);
        nt !== Vn && pe(nt);
      }, 50), ge = new ResizeObserver(Rn);
      return ge.observe(Cn), () => {
        ge.unobserve(Cn);
      };
    }, [Vn, p]);
    var Fe = (0, r.I4)((Cn) => {
      var Rn = cn ? Cn - 1 : Cn, ge = He == null ? void 0 : He.current[0], ie = (ge == null ? void 0 : ge.offsetWidth) + 16, ke = (ge == null ? void 0 : ge.offsetHeight) + 16, we = Qe.current;
      z === "thumbnailsRow" && we != null && we.offsetWidth && (ie * (Rn + 1) > we.offsetWidth && (we.style.scrollBehavior = "smooth", we.scrollLeft = (Rn + 2) * ie), we.scrollLeft > ie * Rn && (we.style.scrollBehavior = "smooth", we.scrollLeft = (Rn - 2) * ie)), z === "thumbnailsColumn" && we != null && we.offsetHeight && (ke * (Rn + 1) > we.offsetHeight && (we.style.scrollBehavior = "smooth", we.scrollTop = (Rn + 2) * ke), we.scrollTop > ke * Rn && (we.style.scrollBehavior = "smooth", we.scrollTop = (Rn - 2) * ke));
    }, [z, cn]), Be = (0, r.I4)((Cn, Rn, ge) => {
      z !== "thumbnailsRow" && z !== "thumbnailsColumn" || Fe(Cn);
      var ie = Ge.current, ke = qn ? ie.offsetWidth - qn : ie.offsetWidth - qn + te;
      if (Array.from(ie.querySelectorAll("[data-index]")).filter((nt) => {
        var rt = Number(nt.getAttribute("data-index"));
        return !isNaN(rt) && rt > -1;
      })[Cn]) {
        if (ge) {
          var we = Cn === 0 ? xn : 0, We = ke * (xn + (oe || Vn) / Vn);
          return ie.scrollLeft >= 0 && ie.scrollLeft < ke - 5 ? void Be(1, !0) : ie.scrollLeft > We - ke && ie.scrollLeft <= We ? void Be(xn, !0) : (ie.style.scrollBehavior = "auto", ie.scrollLeft = we === 0 ? 0 : We, void Be(we === 0 ? 1 : xn, !0));
        }
        var et = (ie.offsetWidth - te) / Vn * _e[Cn].length - qn;
        ie.style.scrollBehavior = Rn ? "smooth" : "auto", ie.scrollLeft = _e[Cn].length === Vn ? ke * Cn : ke * (Cn - 1) + et;
      }
    }, [te, xn, qn, Vn, oe, _e, Fe, z]), $n = (0, r.I4)(() => {
      cn ? Be(re - 1, !0, re === 1) : Be(re <= 0 ? 0 : re - 1, !0);
    }, [re, Be, cn]), Yn = (0, r.I4)(() => {
      var Cn = _e.length - 1;
      cn ? Be(re + 1, !0, re === xn) : Be(re >= Cn ? Cn : re + 1, !0);
    }, [_e.length, cn, re, Be, xn]);
    (0, r.d4)(() => {
      var Cn = (Rn) => {
        Rn.key === "ArrowLeft" && (Rn.preventDefault(), $n()), Rn.key === "ArrowRight" && (Rn.preventDefault(), Yn());
      };
      return window.addEventListener("keydown", Cn), () => {
        window.removeEventListener("keydown", Cn);
      };
    }, [Yn, $n]), (0, r.d4)(() => {
      Be(cn ? Sn + 1 : Sn, !1);
    }, [Sn, Be, cn]);
    var Xn = (0, u.D)(() => {
      var Cn = Ge.current, Rn = qn ? Cn.offsetWidth - qn : Cn.offsetWidth - qn + te, ge = Cn.scrollLeft / Rn, ie = Math.round(ge) - ge < 1 ? Math.round(ge) : Math.ceil(ge);
      if (Ae && Fe(ie), cn) {
        var ke = Rn * (xn + (oe || Vn) / Vn);
        if (Math.ceil(Cn.scrollLeft) >= Math.ceil(ke) - 5)
          return Cn.style.scrollBehavior = "auto", void (Cn.scrollLeft = 1 * Cn.offsetWidth + (Math.ceil(Cn.scrollLeft) - Math.ceil(ke) - qn));
        if (Cn.scrollLeft === 0)
          return Cn.style.scrollBehavior = "auto", void (Cn.scrollLeft = ke - Cn.offsetWidth + qn);
      }
      re !== ie && kn(ie);
    }, 100);
    (0, r.d4)(() => {
      var Cn = Ge.current;
      return Cn == null || Cn.addEventListener("scroll", Xn), () => {
        Cn == null || Cn.removeEventListener("scroll", Xn);
      };
    }, [Xn]);
    var Gn = (Cn, Rn, ge) => (0, t.tZ)(H.z, { className: (0, S.S)([["pdp-carousel__button", !Cn], ["pdp-carousel__button--".concat(Rn), !Cn], ["pdp-carousel__button--".concat(z), Cn]]), style: { "--height": "".concat(Xe, "px") }, variant: "tertiary", "aria-label": Rn === "next" ? ne : Mn, onClick: ge, disabled: !cn && (Rn === "next" ? re >= _e.length - 1 : re < 1), children: (0, t.tZ)(U.J, { className: (0, S.S)([["pdp-carousel__button__icon", !Cn], ["pdp-carousel__button__icon--".concat(Rn), !Cn], ["pdp-carousel__button__icon--".concat(z, "--").concat(Rn), Cn]]), size: "32", source: F.default }) }), Fn = J && _e.length != 1 && Gn(Ae, "prev", $n), he = J && _e.length != 1 && Gn(Ae, "next", Yn), Pe = J && _e.length != 1 && Gn(!1, "prev", $n), $e = J && _e.length != 1 && Gn(!1, "next", Yn);
    return (0, t.BX)("div", wn(wn({ role: "region", "aria-roledescription": bn, className: (0, S.S)(["pdp-carousel", ["pdp-carousel--main-image-controls", q], ["pdp-carousel--arrows", J && !Ae], ["pdp-carousel--".concat(z), Ae], ue]), style: { "--flex-carousel": z === "thumbnailsColumn" ? "row-reverse" : "column", "--gap": Ae ? "0" : "var(--spacing-small)", "--width": An } }, sn), {}, { children: [(0, t.tZ)("div", { ref: Ge, className: (0, S.S)(["pdp-carousel__wrapper", "pdp-carousel__wrapper--".concat(mn), ["pdp-carousel__wrapper--scrollbar", h], ["pdp-carousel__wrapper--peak", A]]), style: { "--total-width": z === "thumbnailsColumn" ? "81.6%" : "100%", "--height": z === "thumbnailsColumn" ? "auto" : un, "--gap": tn ? "var(--spacing-".concat(tn, ")") : "0px", "--per-page": Vn }, tabIndex: 0, children: _e.map((Cn, Rn) => {
      var ge = Cn.length < Vn;
      return (0, t.tZ)("div", { role: "group", "aria-roledescription": Tn, "data-index": Rn, className: (0, S.S)(["pdp-carousel__slide", "pdp-carousel__slide--".concat(mn), ["pdp-carousel__slide--active", re === Rn], ["pdp-carousel__slide--orphan", ge]]), style: { "--length": Cn.length }, children: Cn }, Rn);
    }) }), !Ae && (0, t.BX)(t.HY, { children: [Fn, he] }), Ae && q && (0, t.BX)(t.HY, { children: [Pe, $e] }), z && _e.length != 1 && (0, t.BX)("div", { className: (0, S.S)([["pdp-carousel__controls__container--".concat(z), Ae], ["pdp-carousel__controls__container--no-arrows", !J || q]]), style: { "--width": z === "thumbnailsRow" ? "".concat(ze, "px") : An, "--height": "".concat(Xe, "px"), "--nr-thumbnails": me.length }, children: [(Ae || Un) && !q && Fn, (0, t.tZ)("div", { ref: Qe, className: (0, S.S)([["pdp-carousel__controls__wrapper--".concat(z), Ae], ["pdp-carousel__controls__wrapper", Ae]]), children: (0, t.tZ)("div", { role: "group", "aria-label": Ln, className: (0, S.S)(["pdp-carousel__controls", ["pdp-carousel__controls--".concat(z), Ae]]), children: (cn ? _e.slice(0, xn) : _e).map((Cn, Rn) => {
      var ge = cn ? xn : _e.length, ie = cn ? re - 1 === Rn : re === Rn;
      return Ae ? (0, t.BX)("label", { className: (0, S.S)(["pdp-carousel__thumbnail__container"]), ref: (ke) => {
        ke && (He.current[Rn] = ke);
      }, children: [(0, t.tZ)("input", wn(wn({ type: "radio", name: "carousel-thumbnails", "aria-label": ce.replace("{key}", String(Rn + 1)).replace("{total}", String(ge)), checked: ie && ze !== 0, onChange: () => {
        Be(cn ? Rn + 1 : Rn, !0);
      } }, sn), {}, { className: (0, S.S)(["pdp-carousel__thumbnail", ["pdp-carousel__thumbnail--selected", ie && ze !== 0]]) })), (0, t.tZ)("span", { className: (0, S.S)(["pdp-carousel__thumbnail__span"]), children: me[Rn] })] }, Rn) : (0, t.tZ)("button", { "aria-label": ce.replace("{key}", String(Rn + 1)).replace("{total}", String(ge)), onClick: () => {
        Be(cn ? Rn + 1 : Rn, !0);
      }, className: (0, S.S)(["pdp-carousel__controls__button", ["pdp-carousel__controls__button--active", ie]]) }, Rn);
    }) }) }), (Ae || Un) && !q && he] })] }));
  };
  function M(_) {
    var p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    if (typeof _ == "number")
      return _;
    var { small: h, medium: A, large: J } = _;
    return p > 1024 ? J : p > 786 ? A : h;
  }
  var E = n(6297), $ = { attributes: { "data-dropin": "storefront-pdp", "data-sdk": "0.22.0" }, styleTagTransform: function(_, p) {
    var mn;
    window._loadedStyles = window._loadedStyles ?? {};
    const h = (mn = _ == null ? void 0 : _.match(/^\.dropin-(\w+)/)) == null ? void 0 : mn[1], A = p.getAttribute("data-sdk"), J = h ? `sdk/${h}` : p.getAttribute("data-dropin");
    p.setAttribute("data-dropin", J), p.removeAttribute("data-sdk");
    const z = window._loadedStyles[J];
    if (z) {
      const An = function(un, Sn) {
        const [ue, se] = un.split("-"), [Kn, Un] = Sn.split("-"), sn = [...ue.split("."), se], bn = [...Kn.split("."), Un], Tn = parseInt(sn[0], 10), Mn = parseInt(bn[0], 10);
        if (Tn !== Mn)
          return Tn > Mn ? un : Sn;
        const ne = parseInt(sn[1], 10), Ln = parseInt(bn[1], 10);
        if (ne !== Ln)
          return ne > Ln ? un : Sn;
        const ce = parseInt(sn[2], 10), Vn = parseInt(bn[2], 10);
        if (ce !== Vn)
          return ce > Vn ? un : Sn;
        if (sn[3] && bn[3]) {
          const pe = /(alpha|beta)(.*)/, xn = sn[3].match(pe), qn = bn[3].match(pe), te = xn[1], oe = qn[1], re = parseInt(xn[2], 10), kn = parseInt(qn[2], 10);
          if (te === oe)
            return re > kn ? un : Sn;
          if (te === "alpha" && oe === "beta")
            return Sn;
          if (te === "beta" && oe === "alpha")
            return un;
        }
        return sn[3] ? Sn : un;
      }(A, z.sdk);
      if (!h || h && An === z.sdk) {
        const un = z.style.textContent;
        z.style.textContent = `${un}
/* --- MERGED --- */
${_}`;
      } else
        h && An !== z.sdk && (z.style.textContent = `/* --- UPGRADED --- */
${_}`);
      return void p.remove();
    }
    p.textContent = _, window._loadedStyles[J] = { sdk: A, core: h, style: p };
    const q = document.querySelector("head"), { lastDropinStyleInjected: cn, lastSDKStyleInjected: tn } = window._loadedStyles;
    h ? (tn ? q.insertBefore(p, tn.nextSibling) : q.insertBefore(p, q.firstChild), window._loadedStyles.lastSDKStyleInjected = p) : (cn ? q.insertBefore(p, cn.nextSibling) : tn ? q.insertBefore(p, tn.nextSibling) : q.insertBefore(p, q.firstChild), window._loadedStyles.lastDropinStyleInjected = p);
  } };
  $.setAttributes = R(), $.insert = rn().bind(null, "head"), $.domAPI = L(), $.insertStyleElement = v(), T()(E.Z, $), E.Z && E.Z.locals && E.Z.locals;
  var on = ["children", "gap", "className", "style"];
  function dn(_, p) {
    var h = Object.keys(_);
    if (Object.getOwnPropertySymbols) {
      var A = Object.getOwnPropertySymbols(_);
      p && (A = A.filter(function(J) {
        return Object.getOwnPropertyDescriptor(_, J).enumerable;
      })), h.push.apply(h, A);
    }
    return h;
  }
  function fn(_) {
    for (var p = 1; p < arguments.length; p++) {
      var h = arguments[p] != null ? arguments[p] : {};
      p % 2 ? dn(Object(h), !0).forEach(function(A) {
        pn(_, A, h[A]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(_, Object.getOwnPropertyDescriptors(h)) : dn(Object(h)).forEach(function(A) {
        Object.defineProperty(_, A, Object.getOwnPropertyDescriptor(h, A));
      });
    }
    return _;
  }
  function pn(_, p, h) {
    return (p = function(A) {
      var J = function(z, q) {
        if (typeof z != "object" || z === null)
          return z;
        var cn = z[Symbol.toPrimitive];
        if (cn !== void 0) {
          var tn = cn.call(z, q || "default");
          if (typeof tn != "object")
            return tn;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (q === "string" ? String : Number)(z);
      }(A, "string");
      return typeof J == "symbol" ? J : String(J);
    }(p)) in _ ? Object.defineProperty(_, p, { value: h, enumerable: !0, configurable: !0, writable: !0 }) : _[p] = h, _;
  }
  function gn(_, p) {
    if (_ == null)
      return {};
    var h, A, J = function(q, cn) {
      if (q == null)
        return {};
      var tn, mn, An = {}, un = Object.keys(q);
      for (mn = 0; mn < un.length; mn++)
        tn = un[mn], cn.indexOf(tn) >= 0 || (An[tn] = q[tn]);
      return An;
    }(_, p);
    if (Object.getOwnPropertySymbols) {
      var z = Object.getOwnPropertySymbols(_);
      for (A = 0; A < z.length; A++)
        h = z[A], p.indexOf(h) >= 0 || Object.prototype.propertyIsEnumerable.call(_, h) && (J[h] = _[h]);
    }
    return J;
  }
  var W = (_) => {
    var { children: p, gap: h = null, className: A, style: J } = _, z = gn(_, on), q = r.hu.count(p);
    return (0, t.tZ)("div", fn(fn({}, z), {}, { className: (0, S.S)(["pdp-gallery-grid", A]), style: fn({ "--gap": h ? "var(--spacing-".concat(h, ")") : "0px" }, J), children: r.hu.map(p, (cn, tn) => (0, t.tZ)("div", { className: "pdp-gallery-grid__item", children: (0, t.tZ)(c.F, { node: cn, loading: tn === 0 ? "eager" : "lazy" }, cn.props.src) }, q + tn)) }));
  }, Hn = n(7498), On = n(6250), Qn = { attributes: { "data-dropin": "storefront-pdp", "data-sdk": "0.22.0" }, styleTagTransform: function(_, p) {
    var mn;
    window._loadedStyles = window._loadedStyles ?? {};
    const h = (mn = _ == null ? void 0 : _.match(/^\.dropin-(\w+)/)) == null ? void 0 : mn[1], A = p.getAttribute("data-sdk"), J = h ? `sdk/${h}` : p.getAttribute("data-dropin");
    p.setAttribute("data-dropin", J), p.removeAttribute("data-sdk");
    const z = window._loadedStyles[J];
    if (z) {
      const An = function(un, Sn) {
        const [ue, se] = un.split("-"), [Kn, Un] = Sn.split("-"), sn = [...ue.split("."), se], bn = [...Kn.split("."), Un], Tn = parseInt(sn[0], 10), Mn = parseInt(bn[0], 10);
        if (Tn !== Mn)
          return Tn > Mn ? un : Sn;
        const ne = parseInt(sn[1], 10), Ln = parseInt(bn[1], 10);
        if (ne !== Ln)
          return ne > Ln ? un : Sn;
        const ce = parseInt(sn[2], 10), Vn = parseInt(bn[2], 10);
        if (ce !== Vn)
          return ce > Vn ? un : Sn;
        if (sn[3] && bn[3]) {
          const pe = /(alpha|beta)(.*)/, xn = sn[3].match(pe), qn = bn[3].match(pe), te = xn[1], oe = qn[1], re = parseInt(xn[2], 10), kn = parseInt(qn[2], 10);
          if (te === oe)
            return re > kn ? un : Sn;
          if (te === "alpha" && oe === "beta")
            return Sn;
          if (te === "beta" && oe === "alpha")
            return un;
        }
        return sn[3] ? Sn : un;
      }(A, z.sdk);
      if (!h || h && An === z.sdk) {
        const un = z.style.textContent;
        z.style.textContent = `${un}
/* --- MERGED --- */
${_}`;
      } else
        h && An !== z.sdk && (z.style.textContent = `/* --- UPGRADED --- */
${_}`);
      return void p.remove();
    }
    p.textContent = _, window._loadedStyles[J] = { sdk: A, core: h, style: p };
    const q = document.querySelector("head"), { lastDropinStyleInjected: cn, lastSDKStyleInjected: tn } = window._loadedStyles;
    h ? (tn ? q.insertBefore(p, tn.nextSibling) : q.insertBefore(p, q.firstChild), window._loadedStyles.lastSDKStyleInjected = p) : (cn ? q.insertBefore(p, cn.nextSibling) : tn ? q.insertBefore(p, tn.nextSibling) : q.insertBefore(p, q.firstChild), window._loadedStyles.lastDropinStyleInjected = p);
  } };
  Qn.setAttributes = R(), Qn.insert = rn().bind(null, "head"), Qn.domAPI = L(), Qn.insertStyleElement = v(), T()(On.Z, Qn), On.Z && On.Z.locals && On.Z.locals;
  var ae = ["centered", "onClose", "className", "children"];
  function de(_, p) {
    var h = Object.keys(_);
    if (Object.getOwnPropertySymbols) {
      var A = Object.getOwnPropertySymbols(_);
      p && (A = A.filter(function(J) {
        return Object.getOwnPropertyDescriptor(_, J).enumerable;
      })), h.push.apply(h, A);
    }
    return h;
  }
  function ee(_) {
    for (var p = 1; p < arguments.length; p++) {
      var h = arguments[p] != null ? arguments[p] : {};
      p % 2 ? de(Object(h), !0).forEach(function(A) {
        ve(_, A, h[A]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(_, Object.getOwnPropertyDescriptors(h)) : de(Object(h)).forEach(function(A) {
        Object.defineProperty(_, A, Object.getOwnPropertyDescriptor(h, A));
      });
    }
    return _;
  }
  function ve(_, p, h) {
    return (p = function(A) {
      var J = function(z, q) {
        if (typeof z != "object" || z === null)
          return z;
        var cn = z[Symbol.toPrimitive];
        if (cn !== void 0) {
          var tn = cn.call(z, q || "default");
          if (typeof tn != "object")
            return tn;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (q === "string" ? String : Number)(z);
      }(A, "string");
      return typeof J == "symbol" ? J : String(J);
    }(p)) in _ ? Object.defineProperty(_, p, { value: h, enumerable: !0, configurable: !0, writable: !0 }) : _[p] = h, _;
  }
  function Me(_, p) {
    if (_ == null)
      return {};
    var h, A, J = function(q, cn) {
      if (q == null)
        return {};
      var tn, mn, An = {}, un = Object.keys(q);
      for (mn = 0; mn < un.length; mn++)
        tn = un[mn], cn.indexOf(tn) >= 0 || (An[tn] = q[tn]);
      return An;
    }(_, p);
    if (Object.getOwnPropertySymbols) {
      var z = Object.getOwnPropertySymbols(_);
      for (A = 0; A < z.length; A++)
        h = z[A], p.indexOf(h) >= 0 || Object.prototype.propertyIsEnumerable.call(_, h) && (J[h] = _[h]);
    }
    return J;
  }
  var Te = (_) => {
    var { centered: p, onClose: h, className: A, children: J } = _, z = Me(_, ae), q = (0, O.XK)("PDP.Overlay.Close.label").label, cn = (0, r.I4)(() => {
      h == null || h();
    }, [h]);
    return (0, r.d4)(() => {
      var tn = (mn) => {
        mn.key === "Escape" && cn();
      };
      return document.addEventListener("keydown", tn), () => {
        document.removeEventListener("keydown", tn);
      };
    }, [cn]), (0, r.d4)(() => {
      var tn = document.scrollingElement, mn = tn.style.overflow;
      return tn.style.overflow = "hidden", () => {
        tn.style.overflow = mn;
      };
    }, []), (0, t.BX)("div", ee(ee({}, z), {}, { className: (0, S.S)(["pdp-overlay", ["pdp-overlay--centered", p], A]), children: [(0, t.tZ)("div", { className: "pdp-overlay__content", children: J }), (0, t.tZ)(H.z, { "aria-label": q, variant: "tertiary", className: "pdp-overlay__close-button", onClick: cn, icon: (0, t.tZ)(Hn.default, {}) })] }));
  }, ye = n(2366), De = { attributes: { "data-dropin": "storefront-pdp", "data-sdk": "0.22.0" }, styleTagTransform: function(_, p) {
    var mn;
    window._loadedStyles = window._loadedStyles ?? {};
    const h = (mn = _ == null ? void 0 : _.match(/^\.dropin-(\w+)/)) == null ? void 0 : mn[1], A = p.getAttribute("data-sdk"), J = h ? `sdk/${h}` : p.getAttribute("data-dropin");
    p.setAttribute("data-dropin", J), p.removeAttribute("data-sdk");
    const z = window._loadedStyles[J];
    if (z) {
      const An = function(un, Sn) {
        const [ue, se] = un.split("-"), [Kn, Un] = Sn.split("-"), sn = [...ue.split("."), se], bn = [...Kn.split("."), Un], Tn = parseInt(sn[0], 10), Mn = parseInt(bn[0], 10);
        if (Tn !== Mn)
          return Tn > Mn ? un : Sn;
        const ne = parseInt(sn[1], 10), Ln = parseInt(bn[1], 10);
        if (ne !== Ln)
          return ne > Ln ? un : Sn;
        const ce = parseInt(sn[2], 10), Vn = parseInt(bn[2], 10);
        if (ce !== Vn)
          return ce > Vn ? un : Sn;
        if (sn[3] && bn[3]) {
          const pe = /(alpha|beta)(.*)/, xn = sn[3].match(pe), qn = bn[3].match(pe), te = xn[1], oe = qn[1], re = parseInt(xn[2], 10), kn = parseInt(qn[2], 10);
          if (te === oe)
            return re > kn ? un : Sn;
          if (te === "alpha" && oe === "beta")
            return Sn;
          if (te === "beta" && oe === "alpha")
            return un;
        }
        return sn[3] ? Sn : un;
      }(A, z.sdk);
      if (!h || h && An === z.sdk) {
        const un = z.style.textContent;
        z.style.textContent = `${un}
/* --- MERGED --- */
${_}`;
      } else
        h && An !== z.sdk && (z.style.textContent = `/* --- UPGRADED --- */
${_}`);
      return void p.remove();
    }
    p.textContent = _, window._loadedStyles[J] = { sdk: A, core: h, style: p };
    const q = document.querySelector("head"), { lastDropinStyleInjected: cn, lastSDKStyleInjected: tn } = window._loadedStyles;
    h ? (tn ? q.insertBefore(p, tn.nextSibling) : q.insertBefore(p, q.firstChild), window._loadedStyles.lastSDKStyleInjected = p) : (cn ? q.insertBefore(p, cn.nextSibling) : tn ? q.insertBefore(p, tn.nextSibling) : q.insertBefore(p, q.firstChild), window._loadedStyles.lastDropinStyleInjected = p);
  } };
  De.setAttributes = R(), De.insert = rn().bind(null, "head"), De.domAPI = L(), De.insertStyleElement = v(), T()(ye.Z, De), ye.Z && ye.Z.locals && ye.Z.locals;
  var Ye = ["title", "breadcrumbs", "galleryContent", "infoContent", "productContent", "sku", "outOfStock", "hideSku", "shortDescription", "description", "attributes", "images", "options", "price", "specialPrice", "className", "children", "quantity", "actions", "carouselConfig"];
  function qe(_, p) {
    var h = Object.keys(_);
    if (Object.getOwnPropertySymbols) {
      var A = Object.getOwnPropertySymbols(_);
      p && (A = A.filter(function(J) {
        return Object.getOwnPropertyDescriptor(_, J).enumerable;
      })), h.push.apply(h, A);
    }
    return h;
  }
  function Ee(_) {
    for (var p = 1; p < arguments.length; p++) {
      var h = arguments[p] != null ? arguments[p] : {};
      p % 2 ? qe(Object(h), !0).forEach(function(A) {
        Z(_, A, h[A]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(_, Object.getOwnPropertyDescriptors(h)) : qe(Object(h)).forEach(function(A) {
        Object.defineProperty(_, A, Object.getOwnPropertyDescriptor(h, A));
      });
    }
    return _;
  }
  function Z(_, p, h) {
    return (p = function(A) {
      var J = function(z, q) {
        if (typeof z != "object" || z === null)
          return z;
        var cn = z[Symbol.toPrimitive];
        if (cn !== void 0) {
          var tn = cn.call(z, q || "default");
          if (typeof tn != "object")
            return tn;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (q === "string" ? String : Number)(z);
      }(A, "string");
      return typeof J == "symbol" ? J : String(J);
    }(p)) in _ ? Object.defineProperty(_, p, { value: h, enumerable: !0, configurable: !0, writable: !0 }) : _[p] = h, _;
  }
  function Y(_, p) {
    if (_ == null)
      return {};
    var h, A, J = function(q, cn) {
      if (q == null)
        return {};
      var tn, mn, An = {}, un = Object.keys(q);
      for (mn = 0; mn < un.length; mn++)
        tn = un[mn], cn.indexOf(tn) >= 0 || (An[tn] = q[tn]);
      return An;
    }(_, p);
    if (Object.getOwnPropertySymbols) {
      var z = Object.getOwnPropertySymbols(_);
      for (A = 0; A < z.length; A++)
        h = z[A], p.indexOf(h) >= 0 || Object.prototype.propertyIsEnumerable.call(_, h) && (J[h] = _[h]);
    }
    return J;
  }
  var Q = (_) => {
    var p, h, A, J, z, q, { title: cn, breadcrumbs: tn, galleryContent: mn, infoContent: An, productContent: un, sku: Sn, outOfStock: ue, hideSku: se, shortDescription: Kn, description: Un, attributes: sn, images: bn, options: Tn, price: Mn, specialPrice: ne, className: Ln, children: ce, quantity: Vn, actions: pe, carouselConfig: xn } = _, qn = Y(_, Ye), te = (0, O.XK)("PDP.Product.RegularPrice.label").label, oe = (0, O.XK)("PDP.Product.SpecialPrice.label").label, re = (0, O.XK)("PDP.Product.OutOfStock.label").label, kn = (0, O.XK)("PDP.Product.Image.label").label, [He, ze] = (0, r.eJ)(null), Ue = bn != null && bn.length ? bn.map((Ke, me) => {
      var _e;
      return (0, t.tZ)(c.F, { node: Ke, loading: me === 0 ? "eager" : "lazy", alt: (cn == null || (_e = cn.props) === null || _e === void 0 ? void 0 : _e.children) && (kn == null ? void 0 : kn.replace("{product}", cn.props.children.toString()).replace("{key}", String(me + 1)).replace("{total}", String(bn.length))), onClick: () => ze(me) }, me);
    }) : (0, t.tZ)("img", { src: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", className: "pdp-product__images__placeholder", "aria-hidden": !0 }), Xe = xn != null && (p = xn.thumbnails) !== null && p !== void 0 && p.length ? xn.thumbnails.map((Ke, me) => {
      var _e;
      return (0, t.tZ)(c.F, { node: Ke, loading: (xn == null ? void 0 : xn.thumbnailsLoadingMode) || "lazy", alt: (cn == null || (_e = cn.props) === null || _e === void 0 ? void 0 : _e.children) && (kn == null ? void 0 : kn.replace("{product}", cn.props.children.toString()).replace("{key}", String(me + 1)).replace("{total}", String(bn.length))) }, me);
    }) : (0, t.tZ)("img", { src: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", className: "pdp-product__images__placeholder", "aria-hidden": !0 });
    return (0, t.BX)("div", Ee(Ee({}, qn), {}, { className: (0, S.S)(["pdp-product", Ln]), children: [tn && (0, t.tZ)(c.F, { node: tn, className: "pdp-product__breadcrumbs" }), (0, t.BX)("div", { className: "pdp-product__column-container pdp-product__gallery-column", children: [(0, t.tZ)("div", { className: "pdp-product__column-body", children: xn != null && xn.controls ? (0, t.tZ)(I, { className: "pdp-product__overlay__carousel", arrows: (bn == null ? void 0 : bn.length) > 1, controls: (bn == null ? void 0 : bn.length) > 1 ? xn.controls : "dots", arrowsOnMainImage: xn == null ? void 0 : xn.arrowsOnMainImage, loop: (xn == null ? void 0 : xn.loopable) && (bn == null ? void 0 : bn.length) > 1, peak: (xn == null || (h = xn.thumbnails) === null || h === void 0 ? void 0 : h.length) > 1 && (xn == null || (A = xn.peak) === null || A === void 0 ? void 0 : A.desktop) || !1, gap: (xn == null ? void 0 : xn.gap) || null, width: "100%", height: "100%", defaultIndex: He || 0, thumbnails: Xe, children: Ue }) : (0, t.tZ)(W, { className: "pdp-product__images", gap: "small", children: Ue }) }), mn && (0, t.tZ)(c.F, { node: mn, className: "pdp-product__gallery-content" })] }), (0, t.BX)("div", { className: "pdp-product__column-container pdp-product__content-column", children: [(0, t.BX)("div", { className: "pdp-product__column-body", children: [(0, t.BX)("div", { className: "pdp-product__header", children: [cn && (0, t.tZ)(c.F, { node: cn, className: "pdp-product__title" }), !se && Sn && (0, t.tZ)(c.F, { node: Sn, className: "pdp-product__sku" })] }), (0, t.BX)("div", { className: "pdp-product__prices", children: [ne && (0, t.tZ)(c.F, { node: ne, className: (0, S.S)(["pdp-product__price-special", "pdp-product__price"]), "aria-label": oe, role: "text" }), Mn && (0, t.tZ)(c.F, { node: Mn, className: (0, S.S)(["pdp-product__price-regular", "pdp-product__price--grey"]), "aria-label": te, role: "text" })] }), xn != null && xn.mobile ? (0, t.tZ)(I, { className: "pdp-product__images pdp-product__images--carousel pdp-product__images--carousel--thumbnails", width: "100%", height: "auto", arrows: (bn == null ? void 0 : bn.length) > 1, controls: (bn == null ? void 0 : bn.length) > 1 ? "thumbnailsRow" : null, loop: (xn == null ? void 0 : xn.loopable) && (bn == null ? void 0 : bn.length) > 1, peak: (xn == null || (J = xn.thumbnails) === null || J === void 0 ? void 0 : J.length) > 1 && (xn == null || (z = xn.peak) === null || z === void 0 ? void 0 : z.mobile) || !1, gap: (xn == null ? void 0 : xn.gap) || null, thumbnails: Xe, children: Ue }) : (0, t.tZ)(I, { className: "pdp-product__images pdp-product__images--carousel", peak: (xn == null || (q = xn.peak) === null || q === void 0 ? void 0 : q.mobile) && (bn == null ? void 0 : bn.length) > 1, gap: (xn == null ? void 0 : xn.gap) || null, width: "100%", height: "auto", arrows: (bn == null ? void 0 : bn.length) > 1, controls: (bn == null ? void 0 : bn.length) > 1 ? "dots" : null, loop: (xn == null ? void 0 : xn.loopable) && (bn == null ? void 0 : bn.length) > 1, children: Ue }), (0, t.BX)("div", { className: (0, S.S)(["pdp-product__actions", ["pdp-product__actions--out-of-stock", ue]]), children: [ue && (0, t.tZ)("div", { className: "pdp-product__out-of-stock__text", children: re }), Tn && (0, t.tZ)(c.F, { node: Tn, className: (0, S.S)(["pdp-product__options"]) }), Vn && (0, t.tZ)("div", { className: "pdp-product__quantity", children: (0, t.tZ)(c.F, { node: Vn }) }), pe && (0, t.tZ)(c.F, { node: pe, className: (0, S.S)(["pdp-product__buttons"]) })] }), Kn && (0, t.tZ)(c.F, { node: Kn, className: (0, S.S)(["pdp-product__short_description"]) }), Un && (0, t.tZ)(c.F, { node: Un, className: (0, S.S)(["pdp-product__description"]) }), sn ? (0, t.tZ)("div", { className: "pdp-product__attributes", children: sn }) : null] }), An && (0, t.tZ)(c.F, { node: An, className: "pdp-product__info-content" })] }), un && (0, t.tZ)(c.F, { node: un, className: "pdp-product__content" }), He === null ? null : (0, t.tZ)(Te, { className: "pdp-product__overlay", onClose: () => ze(null), centered: !0, children: (0, t.tZ)(I, { className: "pdp-product__overlay__carousel", arrows: (bn == null ? void 0 : bn.length) > 1, width: "100%", height: "100%", defaultIndex: He || 0, loop: (bn == null ? void 0 : bn.length) > 1, controls: (bn == null ? void 0 : bn.length) > 1 ? "dots" : null, isZoomed: !0, children: Ue }) })] }));
  }, hn = n(9139), Pn = { attributes: { "data-dropin": "storefront-pdp", "data-sdk": "0.22.0" }, styleTagTransform: function(_, p) {
    var mn;
    window._loadedStyles = window._loadedStyles ?? {};
    const h = (mn = _ == null ? void 0 : _.match(/^\.dropin-(\w+)/)) == null ? void 0 : mn[1], A = p.getAttribute("data-sdk"), J = h ? `sdk/${h}` : p.getAttribute("data-dropin");
    p.setAttribute("data-dropin", J), p.removeAttribute("data-sdk");
    const z = window._loadedStyles[J];
    if (z) {
      const An = function(un, Sn) {
        const [ue, se] = un.split("-"), [Kn, Un] = Sn.split("-"), sn = [...ue.split("."), se], bn = [...Kn.split("."), Un], Tn = parseInt(sn[0], 10), Mn = parseInt(bn[0], 10);
        if (Tn !== Mn)
          return Tn > Mn ? un : Sn;
        const ne = parseInt(sn[1], 10), Ln = parseInt(bn[1], 10);
        if (ne !== Ln)
          return ne > Ln ? un : Sn;
        const ce = parseInt(sn[2], 10), Vn = parseInt(bn[2], 10);
        if (ce !== Vn)
          return ce > Vn ? un : Sn;
        if (sn[3] && bn[3]) {
          const pe = /(alpha|beta)(.*)/, xn = sn[3].match(pe), qn = bn[3].match(pe), te = xn[1], oe = qn[1], re = parseInt(xn[2], 10), kn = parseInt(qn[2], 10);
          if (te === oe)
            return re > kn ? un : Sn;
          if (te === "alpha" && oe === "beta")
            return Sn;
          if (te === "beta" && oe === "alpha")
            return un;
        }
        return sn[3] ? Sn : un;
      }(A, z.sdk);
      if (!h || h && An === z.sdk) {
        const un = z.style.textContent;
        z.style.textContent = `${un}
/* --- MERGED --- */
${_}`;
      } else
        h && An !== z.sdk && (z.style.textContent = `/* --- UPGRADED --- */
${_}`);
      return void p.remove();
    }
    p.textContent = _, window._loadedStyles[J] = { sdk: A, core: h, style: p };
    const q = document.querySelector("head"), { lastDropinStyleInjected: cn, lastSDKStyleInjected: tn } = window._loadedStyles;
    h ? (tn ? q.insertBefore(p, tn.nextSibling) : q.insertBefore(p, q.firstChild), window._loadedStyles.lastSDKStyleInjected = p) : (cn ? q.insertBefore(p, cn.nextSibling) : tn ? q.insertBefore(p, tn.nextSibling) : q.insertBefore(p, q.firstChild), window._loadedStyles.lastDropinStyleInjected = p);
  } };
  Pn.setAttributes = R(), Pn.insert = rn().bind(null, "head"), Pn.domAPI = L(), Pn.insertStyleElement = v(), T()(hn.Z, Pn), hn.Z && hn.Z.locals && hn.Z.locals;
  var jn = n(470), In = ["amount", "currency", "locale", "variant", "sale", "minimumAmount", "maximumAmount", "className"];
  function Nn(_, p) {
    var h = Object.keys(_);
    if (Object.getOwnPropertySymbols) {
      var A = Object.getOwnPropertySymbols(_);
      p && (A = A.filter(function(J) {
        return Object.getOwnPropertyDescriptor(_, J).enumerable;
      })), h.push.apply(h, A);
    }
    return h;
  }
  function Zn(_) {
    for (var p = 1; p < arguments.length; p++) {
      var h = arguments[p] != null ? arguments[p] : {};
      p % 2 ? Nn(Object(h), !0).forEach(function(A) {
        le(_, A, h[A]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(_, Object.getOwnPropertyDescriptors(h)) : Nn(Object(h)).forEach(function(A) {
        Object.defineProperty(_, A, Object.getOwnPropertyDescriptor(h, A));
      });
    }
    return _;
  }
  function le(_, p, h) {
    return (p = function(A) {
      var J = function(z, q) {
        if (typeof z != "object" || z === null)
          return z;
        var cn = z[Symbol.toPrimitive];
        if (cn !== void 0) {
          var tn = cn.call(z, q || "default");
          if (typeof tn != "object")
            return tn;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (q === "string" ? String : Number)(z);
      }(A, "string");
      return typeof J == "symbol" ? J : String(J);
    }(p)) in _ ? Object.defineProperty(_, p, { value: h, enumerable: !0, configurable: !0, writable: !0 }) : _[p] = h, _;
  }
  function je(_, p) {
    if (_ == null)
      return {};
    var h, A, J = function(q, cn) {
      if (q == null)
        return {};
      var tn, mn, An = {}, un = Object.keys(q);
      for (mn = 0; mn < un.length; mn++)
        tn = un[mn], cn.indexOf(tn) >= 0 || (An[tn] = q[tn]);
      return An;
    }(_, p);
    if (Object.getOwnPropertySymbols) {
      var z = Object.getOwnPropertySymbols(_);
      for (A = 0; A < z.length; A++)
        h = z[A], p.indexOf(h) >= 0 || Object.prototype.propertyIsEnumerable.call(_, h) && (J[h] = _[h]);
    }
    return J;
  }
  var Bn = (_) => {
    var { amount: p, currency: h, locale: A, variant: J, sale: z, minimumAmount: q, maximumAmount: cn, className: tn } = _, mn = je(_, In);
    return (0, t.tZ)(t.HY, { children: p || q === cn ? (0, t.tZ)("div", Zn(Zn({ className: "pdp-price-range" }, mn), {}, { children: (0, t.tZ)(jn.t, { amount: p || q, currency: h, locale: A, variant: J, sale: z, className: tn }) })) : (0, t.BX)("div", Zn(Zn({ className: "pdp-price-range" }, mn), {}, { children: [(0, t.tZ)(jn.t, { amount: q, currency: h, locale: A, className: tn }), (0, t.tZ)("span", { className: "pdp-price-range__label", children: "-" }), (0, t.tZ)(jn.t, { amount: cn, currency: h, locale: A, className: tn })] })) });
  }, zn = n(4114), Re = n(2675), Se = n(6052), fe = n(5214);
  function En(_) {
    if (![/^\d{4}-\d{2}-\d{2}$/, /^\d{1,2}\/\d{1,2}\/\d{4}$/, /^\d{2}\/\d{2}\/\d{4}$/, /^\d{4}\/\d{2}\/\d{2}$/, /^\d{1,2}\.\d{1,2}\.\d{4}$/, /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/].some((h) => h.test(_)))
      return !1;
    var p = new Date(_);
    return !isNaN(p.getTime());
  }
  var Oe = ["sku", "hideSku", "hideQuantity", "hideShortDescription", "hideDescription", "hideAttributes", "hideURLParams", "hideSelectedOptionValue", "slots", "children", "initialData", "carousel", "optionsConfig", "onAddToCart"], xe = ["text"], Ze = ["text", "icon"];
  function Ne(_, p, h, A, J, z, q) {
    try {
      var cn = _[z](q), tn = cn.value;
    } catch (mn) {
      return void h(mn);
    }
    cn.done ? p(tn) : Promise.resolve(tn).then(A, J);
  }
  function Ie(_, p) {
    var h = Object.keys(_);
    if (Object.getOwnPropertySymbols) {
      var A = Object.getOwnPropertySymbols(_);
      p && (A = A.filter(function(J) {
        return Object.getOwnPropertyDescriptor(_, J).enumerable;
      })), h.push.apply(h, A);
    }
    return h;
  }
  function Dn(_) {
    for (var p = 1; p < arguments.length; p++) {
      var h = arguments[p] != null ? arguments[p] : {};
      p % 2 ? Ie(Object(h), !0).forEach(function(A) {
        Wn(_, A, h[A]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(_, Object.getOwnPropertyDescriptors(h)) : Ie(Object(h)).forEach(function(A) {
        Object.defineProperty(_, A, Object.getOwnPropertyDescriptor(h, A));
      });
    }
    return _;
  }
  function Wn(_, p, h) {
    return (p = function(A) {
      var J = function(z, q) {
        if (typeof z != "object" || z === null)
          return z;
        var cn = z[Symbol.toPrimitive];
        if (cn !== void 0) {
          var tn = cn.call(z, q || "default");
          if (typeof tn != "object")
            return tn;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (q === "string" ? String : Number)(z);
      }(A, "string");
      return typeof J == "symbol" ? J : String(J);
    }(p)) in _ ? Object.defineProperty(_, p, { value: h, enumerable: !0, configurable: !0, writable: !0 }) : _[p] = h, _;
  }
  function be(_, p) {
    if (_ == null)
      return {};
    var h, A, J = function(q, cn) {
      if (q == null)
        return {};
      var tn, mn, An = {}, un = Object.keys(q);
      for (mn = 0; mn < un.length; mn++)
        tn = un[mn], cn.indexOf(tn) >= 0 || (An[tn] = q[tn]);
      return An;
    }(_, p);
    if (Object.getOwnPropertySymbols) {
      var z = Object.getOwnPropertySymbols(_);
      for (A = 0; A < z.length; A++)
        h = z[A], p.indexOf(h) >= 0 || Object.prototype.propertyIsEnumerable.call(_, h) && (J[h] = _[h]);
    }
    return J;
  }
  var Ce = (_) => {
    var p, h, A, J, z, q, cn, tn, { sku: mn, hideSku: An, hideQuantity: un, hideShortDescription: Sn, hideDescription: ue, hideAttributes: se, hideURLParams: Kn, hideSelectedOptionValue: Un, slots: sn, children: bn, initialData: Tn, carousel: Mn, optionsConfig: ne, onAddToCart: Ln } = _, ce = be(_, Oe), Vn = (0, O.XK)("PDP.Product.AddToCart.label").label, pe = (0, O.XK)("PDP.Product.Incrementer.label").label, xn = (0, O.XK)("PDP.Product.Details.label").label, [qn, te] = (0, r.eJ)(zn.v.getConfig().defaultLocale || "en-US"), [oe, re] = (0, r.eJ)(), [kn = null, He] = (0, r.eJ)(Tn), [ze, Ue] = (0, r.eJ)(() => {
      var $n = { sku: mn, quantity: 1 };
      return kn != null && kn.optionUIDs && ($n.optionsUIDs = kn.optionUIDs), $n;
    }), [Xe, Ke] = (0, r.eJ)(() => {
      var $n, Yn;
      return !(kn != null && kn.options && (kn == null || ($n = kn.options) === null || $n === void 0 ? void 0 : $n.length) > 0 && (kn == null || (Yn = kn.optionUIDs) === null || Yn === void 0 ? void 0 : Yn.length) !== (kn == null ? void 0 : kn.options.length));
    }), me = { data: kn, values: ze, valid: Xe };
    (0, r.d4)(() => {
      var $n = fe.events.on("locale", (Yn) => {
        Yn !== qn && (te(Yn), (0, Re.b)(mn).then(He));
      });
      return () => {
        $n == null || $n.off();
      };
    }, [qn, mn]);
    var _e = (0, r.I4)(($n) => {
      Ue((Yn) => Dn(Dn({}, Yn), $n));
    }, []), Ge = (0, r.I4)(($n) => {
      var Yn, Xn = Object.keys($n).map((Gn) => $n[Gn].value).filter((Gn) => Gn !== void 0);
      Kn || function(Gn) {
        var Fn = new URLSearchParams(window.location.search);
        Object.entries(Gn).forEach((Pe) => {
          var [$e, Cn] = Pe;
          Cn === null ? Fn.delete($e) : Fn.set($e, String(Cn));
        });
        var he = window.location.pathname;
        he += "?".concat(Fn.toString()), he += window.location.hash, window.history.replaceState({}, "", he);
      }({ optionsUIDs: Xn.join(",") }), Ue((Gn) => Dn(Dn({}, Gn), {}, { optionsUIDs: Xn })), Ke((Xn == null ? void 0 : Xn.length) === (kn == null || (Yn = kn.options) === null || Yn === void 0 ? void 0 : Yn.length)), (0, Se.R)(mn, Xn, ne == null ? void 0 : ne.anchorOptions).then((Gn) => {
        var Fn;
        He(Gn), ne != null && (Fn = ne.anchorOptions) !== null && Fn !== void 0 && Fn.length && Qe(Gn, Xn);
      });
    }, [mn]), Qe = (0, r.I4)(($n, Yn) => {
      var Xn, Gn, Fn = (Xn = $n == null ? void 0 : $n.optionUIDs) !== null && Xn !== void 0 ? Xn : [];
      Yn.every((he) => Fn.includes(he)) || (re($n == null ? void 0 : $n.options), Ue((he) => Dn(Dn({}, he), {}, { optionsUIDs: Fn })), Ke((Fn == null ? void 0 : Fn.length) === ($n == null || (Gn = $n.options) === null || Gn === void 0 ? void 0 : Gn.length)));
    }, [mn]), Ae = (0, r.I4)(($n) => {
      Object.keys($n).length !== 0 && Ke(!1);
    }, []), Fe = (0, r.Ye)(() => {
      var $n;
      return kn == null || ($n = kn.attributes) === null || $n === void 0 ? void 0 : $n.map((Yn, Xn) => {
        var { label: Gn, value: Fn } = Yn, he = En(Fn) ? function(Pe) {
          var $e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "en_US";
          if (!En(Pe))
            throw Error("Invalid date string");
          return Pe.split(" ")[1] || (Pe = "".concat(Pe, " 00:00:00")), new Date(Pe).toLocaleDateString((0, B.A)($e)).toString();
        }(Fn, qn) : Fn.toString();
        return (0, t.BX)("li", { children: [Gn, ": ", (0, t.tZ)("span", { dangerouslySetInnerHTML: { __html: he } })] }, Xn);
      });
    }, [kn == null ? void 0 : kn.attributes, qn]), Be = !un && kn != null && kn.inStock ? (0, t.tZ)(l.g, { name: "Quantity", slot: sn == null ? void 0 : sn.Quantity, context: Dn({}, me), children: (0, t.tZ)(C.u, { name: "quantity", defaultValue: ze.quantity.toString(), min: 1, "aria-label": pe, className: "pdp-product__quantity", onValue: ($n) => {
      _e({ quantity: Number($n) });
    } }, "quantity") }) : void 0;
    return (0, t.tZ)("div", Dn(Dn({}, ce), {}, { children: (0, t.tZ)(Q, { title: (0, t.tZ)(l.g, { name: "Title", slot: sn == null ? void 0 : sn.Title, context: Dn({}, me), children: kn == null ? void 0 : kn.name }), sku: An ? void 0 : (0, t.tZ)(l.g, { name: "SKU", slot: sn == null ? void 0 : sn.SKU, context: Dn({}, me), children: kn == null ? void 0 : kn.sku }), options: (() => {
      if (kn != null && kn.options)
        return (0, t.tZ)(l.g, { name: "Options", slot: sn == null ? void 0 : sn.Options, context: Dn({}, me), children: (0, t.tZ)(s, { options: kn.options, defaultOptions: ze.optionsUIDs, selectionsToUpdate: oe, hideSelectedValue: Un, onValues: Ge, onErrors: Ae }) });
    })(), breadcrumbs: (sn == null ? void 0 : sn.Breadcrumbs) && (0, t.tZ)(l.g, { name: "Breadcrumbs", slot: sn == null ? void 0 : sn.Breadcrumbs, context: Dn(Dn({}, me), {}, { setSeparator($n) {
      var Yn = this;
      this._registerMethod(function() {
        var Xn = $n(...arguments), Gn = Xn && (0, t.tZ)(U.J, { source: Xn });
        Yn._setProps((Fn) => Dn(Dn({}, Fn), {}, { separator: Gn }));
      });
    }, appendLink($n) {
      var Yn = this;
      this._registerMethod(function() {
        var Xn = $n(...arguments), { text: Gn } = Xn, Fn = be(Xn, xe), he = (0, t.tZ)("a", Dn(Dn({}, Fn), {}, { children: Gn }));
        Yn._setProps((Pe) => Dn(Dn({}, Pe), {}, { categories: [...Pe.categories || [], he] }));
      });
    }, appendHTMLElement($n) {
      var Yn = this;
      this._registerMethod(function() {
        var Xn = $n(...arguments), Gn = Yn._htmlElementToVNode(Xn);
        Yn._setProps((Fn) => Dn(Dn({}, Fn), {}, { categories: [...Fn.categories || [], Gn] }));
      });
    } }), render: ($n) => {
      var { separator: Yn, categories: Xn } = $n;
      return (0, t.tZ)(an.O, { separator: Yn, categories: Xn });
    } }), quantity: Be, actions: (0, t.tZ)(l.g, { name: "Actions", slot: sn == null ? void 0 : sn.Actions, context: Dn(Dn({}, me), {}, { appendButton($n) {
      var Yn = this;
      this._registerMethod(function() {
        var Xn = $n(...arguments);
        if (Xn) {
          var { text: Gn, icon: Fn } = Xn, he = be(Xn, Ze), Pe = (0, t.tZ)(H.z, Dn(Dn({ type: "button" }, he), {}, { icon: Fn && (0, t.tZ)(U.J, { source: Fn }), children: Gn }));
          Yn._setProps(($e) => ({ children: [...$e.children || [], Pe] }));
        }
      });
    } }), children: !(sn != null && sn.Actions) && (0, t.tZ)(H.z, { size: "medium", type: "submit", icon: (0, t.tZ)(U.J, { source: "Cart" }), disabled: !(kn != null && kn.inStock && Xe), "aria-label": Vn, onClick: () => Ln == null ? void 0 : Ln(ze), children: Vn }) }), shortDescription: Sn ? void 0 : (0, t.tZ)(l.g, { name: "ShortDescription", slot: sn == null ? void 0 : sn.ShortDescription, context: Dn({}, me), children: (0, t.tZ)("div", { dangerouslySetInnerHTML: { __html: (p = kn == null ? void 0 : kn.shortDescription) !== null && p !== void 0 ? p : "" } }) }), description: ue ? void 0 : (0, t.tZ)(l.g, { name: "Description", slot: sn == null ? void 0 : sn.Description, context: Dn({}, me), children: (0, t.tZ)("div", { dangerouslySetInnerHTML: { __html: (h = kn == null ? void 0 : kn.description) !== null && h !== void 0 ? h : "" } }) }), images: (A = kn == null || (J = kn.images) === null || J === void 0 ? void 0 : J.map(($n) => {
      var Yn, Xn, Gn, Fn, he, { label: Pe, url: $e } = $n;
      return (0, t.tZ)(K.E, { title: Pe, alt: Pe, src: $e, width: (Yn = Mn == null || (Xn = Mn.imageParams) === null || Xn === void 0 ? void 0 : Xn.width) !== null && Yn !== void 0 ? Yn : 960, height: (Gn = Mn == null || (Fn = Mn.imageParams) === null || Fn === void 0 ? void 0 : Fn.height) !== null && Gn !== void 0 ? Gn : 1191, params: (he = Mn == null ? void 0 : Mn.imageParams) !== null && he !== void 0 ? he : { width: 960 } }, $e);
    })) !== null && A !== void 0 ? A : [], specialPrice: kn != null && (z = kn.prices) !== null && z !== void 0 && z.visible ? (0, t.tZ)(l.g, { name: "SpecialPrice", slot: sn == null ? void 0 : sn.SpecialPrice, context: Dn({}, me), children: (0, t.tZ)(Bn, Dn(Dn({}, kn.prices.final), {}, { locale: (0, B.A)(qn) })) }) : void 0, price: kn != null && (q = kn.prices) !== null && q !== void 0 && q.visible && kn.prices.regular && kn.prices.final.amount !== (kn == null ? void 0 : kn.prices.regular.amount) ? (0, t.tZ)(l.g, { name: "RegularPrice", slot: sn == null ? void 0 : sn.RegularPrice, context: Dn({}, me), children: (0, t.tZ)(Bn, Dn(Dn({}, kn.prices.regular), {}, { locale: (0, B.A)(qn) })) }) : void 0, carouselConfig: Dn(Dn({}, Mn), {}, { thumbnails: Mn && (cn = kn == null || (tn = kn.images) === null || tn === void 0 ? void 0 : tn.map(($n) => {
      var Yn, Xn, Gn, Fn, he, { label: Pe, url: $e } = $n;
      return (0, t.tZ)(K.E, { title: Pe, alt: Pe, src: $e, width: (Yn = Mn == null || (Xn = Mn.thumbnailParams) === null || Xn === void 0 ? void 0 : Xn.width) !== null && Yn !== void 0 ? Yn : 200, height: (Gn = Mn == null || (Fn = Mn.thumbnailParams) === null || Fn === void 0 ? void 0 : Fn.height) !== null && Gn !== void 0 ? Gn : 248, params: (he = Mn == null ? void 0 : Mn.thumbnailParams) !== null && he !== void 0 ? he : { width: 200 } }, $e);
    })) !== null && cn !== void 0 ? cn : [] }), outOfStock: !(kn != null && kn.inStock), attributes: se ? void 0 : (0, t.tZ)(l.g, { name: "Attributes", slot: sn == null ? void 0 : sn.Attributes, context: Dn({}, me), children: Fe != null && Fe.length ? (0, t.BX)(t.HY, { children: [xn, (0, t.tZ)("ul", { children: Fe })] }) : null }), galleryContent: (sn == null ? void 0 : sn.GalleryContent) && (0, t.tZ)(l.g, { name: "GalleryContent", slot: sn.GalleryContent, context: Dn({}, me) }), infoContent: (sn == null ? void 0 : sn.InfoContent) && (0, t.tZ)(l.g, { name: "InfoContent", slot: sn.InfoContent, context: Dn({}, me) }), productContent: (sn == null ? void 0 : sn.Content) && (0, t.tZ)(l.g, { name: "Content", slot: sn.Content, context: Dn({}, me) }) }) }));
  };
  Ce.getInitialData = function() {
    var _, p = (_ = function* (h) {
      var A, J, z, q, cn, tn, mn, { sku: An, optionsConfig: un } = h, Sn = ((A = (tn = new URLSearchParams(window.location.search), mn = {}, tn.forEach((ue, se) => {
        mn[se] = ue;
      }), mn).optionsUIDs) === null || A === void 0 ? void 0 : A.split(",")) || (zn.v === null || zn.v === void 0 || (J = zn.v.getConfig()) === null || J === void 0 || (z = J.models) === null || z === void 0 || (q = z.ProductDetails) === null || q === void 0 || (cn = q.initialData) === null || cn === void 0 ? void 0 : cn.optionsUIDs);
      return Sn != null && Sn.length ? yield (0, Se.R)(An, Sn, un == null ? void 0 : un.anchorOptions) : yield (0, Re.b)(An);
    }, function() {
      var h = this, A = arguments;
      return new Promise(function(J, z) {
        var q = _.apply(h, A);
        function cn(mn) {
          Ne(q, J, z, cn, tn, "next", mn);
        }
        function tn(mn) {
          Ne(q, J, z, cn, tn, "throw", mn);
        }
        cn(void 0);
      });
    });
    return function(h) {
      return p.apply(this, arguments);
    };
  }();
}, 5465: (G, N, n) => {
  n.d(N, { Z: () => U });
  var r = n(4933), l = n.n(r), B = n(3476), C = n.n(B)()(l());
  C.push([G.id, `.pdp-carousel{
  --icon-size:32px;
  --icon-extra-padding:8px;
  --thumb-peak:32px;
  --thumbnails-col-width:18.6%;

  position:relative;
  display:flex;
  flex-direction:var(--flex-carousel);
  align-items:center;
  gap:var(--gap);
  width:var(--width);
}

.pdp-carousel--thumbnailsColumn{
  justify-content:flex-end;
  align-items:start;

}

.pdp-carousel--thumbnailsRow{
  align-items:center;
}


.pdp-carousel--arrows{
  padding-left:calc(var(--icon-size) + var(--icon-extra-padding));
  padding-right:calc(var(--icon-size) + var(--icon-extra-padding));
  width:calc(var(--width) - 2 * var(--icon-size) - 2 * var(--icon-extra-padding))
}
.pdp-carousel__button{
  position:absolute;
  top:50%;
  transform:translateY(-50%);
  padding:0;
}

.pdp-carousel__button--prev{
  left:0;
}

.pdp-carousel__button--next{
  right:0;
}

.pdp-carousel__button__icon--prev{
  transform:rotate(90deg);
}

.pdp-carousel__button__icon--next{
  right:0;
  transform:rotate(-90deg);
}

.pdp-carousel--main-image-controls.pdp-carousel--thumbnailsColumn .pdp-carousel__button--prev{
  left:var(--thumbnails-col-width);
}

.pdp-carousel--main-image-controls.pdp-carousel--thumbnailsRow .pdp-carousel__button--prev{
  top:calc(var(--height) / 2);
}

.pdp-carousel--main-image-controls.pdp-carousel--thumbnailsRow .pdp-carousel__button--next{
  top:calc(var(--height) / 2);
}
.pdp-carousel__button--thumbnailsColumn{
  margin:auto;
  padding:0;
}

.pdp-carousel__button--thumbnailsRow{
  padding:0;
}

.pdp-carousel__button__icon--thumbnailsColumn--prev{
  transform:rotate(180deg);
}

.pdp-carousel__button__icon--thumbnailsRow--prev{
  transform:rotate(90deg);
}

.pdp-carousel__button__icon--thumbnailsRow--next{
  transform:rotate(-90deg);
}
.pdp-carousel__wrapper{
  --peak:0px;
  scroll-padding:var(--peak);
  width:var(--total-width);
  height:var(--height);
  display:flex;
  flex-wrap:nowrap;
  gap:var(--gap);
  -webkit-overflow-scrolling:touch;
}
.pdp-carousel__wrapper--horizontal{
  overflow-x:auto;
  overflow-y:hidden;
  scroll-snap-type:x mandatory;
}
.pdp-carousel__slide{
  display:grid;
  grid-gap:var(--gap);
  grid-auto-columns:1fr;
  grid-auto-rows:100%;
  scroll-snap-align:end;
  scroll-snap-stop:always;
  flex-shrink:0;
}

.pdp-carousel__slide--horizontal{
  grid-auto-flow:column;
  width:calc(calc(100%) - var(--peak));
}

.pdp-carousel__slide--horizontal.pdp-carousel__slide--orphan{
  width:calc((calc(100%) / var(--per-page) * var(--length)) - var(--peak) / var(--per-page) * var(--length) - var(--gap) / var(--per-page) * (var(--per-page) - var(--length)));
}

.pdp-carousel__slide > *{
  vertical-align:middle;
  max-width:100%;
  max-height:100%;
}

.pdp-carousel__slide > img{
  object-fit:contain;
  width:100%;
  height:100%;
}
.pdp-carousel__wrapper--peak{
  --peak:calc(var(--spacing-medium) + var(--gap));
}
.pdp-carousel__wrapper--scrollbar{
  --scroll-foreground:var(--color-neutral-600);
  --scroll-background:var(--color-neutral-400);
  scrollbar-color:var(--scroll-foreground) var(--scroll-background);
  scrollbar-width:thin;
}

.pdp-carousel__wrapper:not(.pdp-carousel__wrapper--scrollbar){
  scrollbar-width:none;
}

.pdp-carousel__wrapper:not(
    .pdp-carousel__wrapper--scrollbar
  )::-webkit-scrollbar{
  display:none;
}

.pdp-carousel__wrapper--scrollbar::-webkit-scrollbar{
  width:4px;
  height:4px;
}

.pdp-carousel__wrapper--scrollbar::-webkit-scrollbar-thumb{
  background:var(--scroll-foreground);
}

.pdp-carousel__wrapper--scrollbar::-webkit-scrollbar-track{
  background:var(--scroll-background);
}
.pdp-carousel__controls__container--thumbnailsRow{
  --thumbnails-spacing:var(--spacing-small);
  --thumbnails-box-width:var(--spacing-xxsmall);
  --thumbnails-rest:calc(var(--thumbnails-spacing) - var(--thumbnails-box-width));
  --thumbnails-width:calc((var(--width) - 2 * var(--icon-size) - 4 * var(--thumbnails-spacing) - var(--thumb-peak) - 2 * var(--thumbnails-box-width)) / 4);
  margin-top:var(--thumbnails-rest);
  width:var(--width);
  display:flex;
}

.pdp-carousel__controls__container--thumbnailsColumn{
  --thumbnails-spacing:var(--spacing-small);
  --thumbnails-box-width:var(--spacing-xxsmall);
  --thumbnails-rest:calc(var(--thumbnails-spacing) - var(--thumbnails-box-width));
  --thumbnails-width:100%;

  width:calc(var(--thumbnails-col-width) - var(--thumbnails-rest));
  
  margin-right:var(--thumbnails-rest);
}
.pdp-carousel__controls__container--thumbnailsColumn:not(.pdp-carousel__controls__container--no-arrows){
  height:calc(max(var(--height), 4 * var(--thumbnails-spacing)) - 4 * var(--thumbnails-spacing));
}

.pdp-carousel__controls__container--thumbnailsColumn.pdp-carousel__controls__container--no-arrows{
  height:var(--height);
}
.pdp-carousel__controls__wrapper--thumbnailsColumn{
  max-height:100%;
  overflow-y:scroll;
}

.pdp-carousel__controls__wrapper--thumbnailsRow{
  max-width:100%;
  overflow-x:scroll;
}

.pdp-carousel__controls--thumbnailsRow > label > span:nth-last-child(1){
  margin-right:var(--thumbnails-box-width);
}

.pdp-carousel__controls__wrapper::-webkit-scrollbar{
  display:none;
}

.pdp-carousel__controls__wrapper{
  -ms-overflow-style:none;
  scrollbar-width:none;
}
.pdp-carousel__controls{
  display:flex;
  flex-direction:row;
  gap:var(--spacing-xsmall);
}

.pdp-carousel__controls--thumbnailsColumn{
  display:grid;
  grid-template-columns:repeat(1, 1fr);
  grid-auto-rows:1fr;
  grid-row-gap:var(--thumbnails-spacing);
  padding:var(--thumbnails-box-width);
}

.pdp-carousel__controls--thumbnailsRow{
  grid-column-gap:var(--thumbnails-spacing);
  padding:var(--thumbnails-box-width);
}

.pdp-carousel__controls__button{
  border-radius:50%;
  width:10px;
  height:10px;
  padding:0;
  border:none;
  background:var(--color-neutral-400);
  cursor:pointer;
}

.pdp-carousel__controls__button:hover{
  background:var(--color-neutral-500);
}

.pdp-carousel__controls__button:active,
.pdp-carousel__controls__button--active{
  background:var(--color-neutral-600);
}

.pdp-carousel__slide--last{
  width:calc(100%);
}
.pdp-carousel__thumbnail__container input[type='radio']{
  opacity:0;
  position:absolute;
  width:0;
  height:0;
  
}

.pdp-carousel__thumbnail__container .pdp-carousel__thumbnail__span{
  display:inline-block;
  --bg-color:var(--color-neutral-300);
  box-shadow:0 0 0 var(--shape-border-width-1) var(--color-neutral-400);
  position:relative;
  cursor:pointer;
  background-color:var(--bg-color);
  background-image:var(--background-image);
  background-repeat:no-repeat;
  background-size:cover;
  height:100%;
  width:100%;
  overflow:hidden;
}

.pdp-carousel__thumbnail__content{
  width:inherit;
  position:absolute;
  top:-9999px;
  bottom:-9999px;
  left:-9999px;
  right:-9999px;
  margin:auto;
  overflow:hidden;
}

.pdp-carousel__thumbnail__span:hover{
  box-shadow:0 0 0 var(--shape-border-width-3) var(--color-neutral-50), 0 0 0 var(--shape-border-width-4) var(--color-neutral-500);
  outline:none;
}

.pdp-carousel__controls__wrapper--thumbnailsRow .pdp-carousel__thumbnail__container{ 
  min-width:100px;
}

.pdp-carousel__thumbnail__container
  input[type='radio']:not(:checked):active
  ~ .pdp-carousel-thumbnail__span{
  box-shadow:0 0 0 var(--shape-border-width-1) var(--color-neutral-500);
  outline:none;
}

.pdp-carousel__thumbnail__container
  input[type='radio']:checked
  ~ .pdp-carousel__thumbnail__span,
.pdp-carousel__thumbnail--selected{
  box-shadow:0 0 0 var(--shape-border-width-3) var(--color-neutral-50), 0 0 0 var(--shape-border-width-4) var(--color-neutral-800);
}

.pdp-carousel__thumbnail__container
  input[type='radio']:checked:active
  ~ .pdp-carousel__thumbnail__span{
  box-shadow:0 0 0 var(--shape-border-width-3) var(--color-neutral-50), 0 0 0 var(--shape-border-width-4) var(--color-neutral-600);
}

.pdp-carousel__thumbnail__container
  input[type='radio']:focus-visible
  + .pdp-carousel__thumbnail__span{
  box-shadow:0 0 0 var(--shape-border-width-3) var(--color-neutral-900), 0 0 0 6px var(--color-neutral-400);
}

.pdp-carousel__thumbnail__span > img{
  object-fit:cover;
  width:100%;
  height:100%;
}
`, ""]);
  const U = C;
}, 6297: (G, N, n) => {
  n.d(N, { Z: () => U });
  var r = n(4933), l = n.n(r), B = n(3476), C = n.n(B)()(l());
  C.push([G.id, `.pdp-gallery-grid{
  display:grid;
  grid-gap:var(--gap);
  grid-template-columns:repeat(1, 1fr);
  grid-auto-rows:max-content;
}

.pdp-gallery-grid__item > *{
  height:100%;
  max-width:100%;
  min-width:100%;
  vertical-align:middle;
  width:100%;
  object-fit:contain;
}
.pdp-gallery-grid__item:only-child{
  grid-column:1 / span 2;
}
.pdp-gallery-grid__item:first-child:nth-last-child(2){
  grid-column:1 / span 2;
  grid-row:1;
}

.pdp-gallery-grid__item:nth-child(2):last-child{
  grid-column:1 / 3;
  grid-row:2;
}
@media only screen and (min-width: 1024px){
  .pdp-gallery-grid{
    grid-template-columns:repeat(2, 1fr);
  }
}
`, ""]);
  const U = C;
}, 6250: (G, N, n) => {
  n.d(N, { Z: () => U });
  var r = n(4933), l = n.n(r), B = n(3476), C = n.n(B)()(l());
  C.push([G.id, `.pdp-overlay{
  position:fixed;
  top:0;
  left:0;
  z-index:1000;
  right:0;
  bottom:0;
  background-color:var(--color-neutral-50);
  display:flex;
  padding:var(--spacing-medium);
}

.pdp-overlay--centered{
  align-items:center;
  justify-content:center;
}

.pdp-overlay__close-button{
  position:absolute;
  top:var(--spacing-medium);
  right:var(--spacing-medium);
  z-index:1001;
}
`, ""]);
  const U = C;
}, 9139: (G, N, n) => {
  n.d(N, { Z: () => U });
  var r = n(4933), l = n.n(r), B = n(3476), C = n.n(B)()(l());
  C.push([G.id, `.pdp-price-range .dropin-price{
  letter-spacing:var(--type-headline-2-strong-letter-spacing);
  font:var(--type-headline-2-strong-font);
}

.pdp-price-range__label{
  font:var(--type-headline-2-strong-font);
  letter-spacing:var(--type-body-1-strong-letter-spacing);
  margin-left:5px;
  margin-right:5px;
}
`, ""]);
  const U = C;
}, 2366: (G, N, n) => {
  n.d(N, { Z: () => U });
  var r = n(4933), l = n.n(r), B = n(3476), C = n.n(B)()(l());
  C.push([G.id, `.pdp-product{
  display:grid;
  grid-template-columns:repeat(var(--grid-1-columns), 1fr);
  grid-column-gap:var(--grid-1-gutters);
  margin:0 var(--grid-1-margins);
}
.pdp-product__gallery-column{
  display:none;
}
.pdp-product__content-column{
  grid-column:1 / span 4;
  color:var(--color-neutral-800);
}
.pdp-product__header{
  display:grid;
  grid-auto-rows:max-content;
  margin-bottom:var(--spacing-medium);
}
.pdp-product__breadcrumbs{
  grid-column:1 / -1;
  padding:var(--spacing-medium) 0 var(--spacing-xxbig);
}
.pdp-product__title{
  font:var(--type-display-3-font);
  letter-spacing:var(--type-display-3-letter-spacing);
  margin:0;
}
.pdp-product__sku{
  font:var(--type-body-1-default-font);
  max-width:600px;
}
.pdp-product__prices{
  display:flex;
  gap:var(--spacing-xsmall);
  margin-top:var(--spacing-medium);
}
.pdp-product__out-of-stock__text{
  font:var(--type-headline-2-strong-font);
}
.pdp-product__options{
  grid-column:1 / span 4;
}
.pdp-product__price,
.pdp-product__price-special{
  font:var(--type-headline-2-strong-font);
}

.pdp-product__price,
.pdp-product__sku,
.pdp-product__price-special,
.pdp-product__out-of-stock__text{
  letter-spacing:var(--type-headline-2-strong-letter-spacing);
}
.pdp-product__price--grey{
  color:var(--color-neutral-500);
}
.pdp-product__actions,
.pdp-product__actions--out-of-stock{
  display:grid;
  grid-auto-flow:row;
  gap:var(--grid-1-gutters);
  grid-auto-rows:max-content;
  margin-bottom:var(--spacing-xxbig);
  margin-top:var(--spacing-big);
}
.pdp-product__short_description,
.pdp-product__attributes{
  font:var(--type-body-1-strong-font);
  letter-spacing:var(--type-body-1-strong-letter-spacing);
  margin-bottom:var(--spacing-small);
}
.pdp-product__description,
.pdp-product__attributes li{
  font:var(--type-body-1-default-font);
  letter-spacing:var(--type-body-1-default-letter-spacing);
}
.pdp-product__attributes{
  margin-top:var(--spacing-xsmall);
}
.pdp-product__short_description p,
.pdp-product__description p,
.pdp-product__attributes li p{
  margin:0;
}
.pdp-product__short_description figure,
.pdp-product__description figure{
  margin:0;
}
.pdp-product__short_description img,
.pdp-product__description img{
  max-width:100%;
}
.pdp-product__images--carousel{
  max-height:60vh;
}

.pdp-product__images--carousel--thumbnails{
  max-height:90vh;
}

.pdp-product__images__placeholder{
  background-color:var(--color-neutral-200);
}
.pdp-product__buttons{
  display:grid;
  grid-auto-rows:max-content;
  grid-gap:var(--grid-1-gutters);
}
.pdp-product__buttons a{
  text-align:center;
}
.pdp-product__buttons a:hover{
  text-decoration:none;
}
.pdp-product__overlay .pdp-overlay__content{
  width:100%;
  height:100%;
}
.pdp-product__overlay__carousel{
  width:100%;
  height:100%;
  box-sizing:border-box;
}
.pdp-product__overlay__carousel img{
  width:100%;
  height:100%;
  object-fit:contain;

}
.pdp-carousel__controls__container--thumbnailsRow img,
.pdp-carousel__controls__container--thumbnailsColumn img{
  object-fit:cover;
}
.pdp-product__quantity{
  grid-column:1 / span 4;
}
.pdp-product__buttons{
  grid-column:1 / span 4;
}
@media only screen and (min-width: 1024px){
  .pdp-product__breadcrumbs{
    grid-column:2 / -2;
  }
  .pdp-product{
    grid-template-columns:repeat(var(--grid-3-columns), 1fr);
    grid-column-gap:var(--grid-3-gutters);
    margin:0 var(--grid-3-margins);
    position:relative;
  }
  .pdp-product__column-container{
    position:relative;
    display:flex;
    flex-direction:column;
  }
  .pdp-product__column-body{
    position:sticky;
    bottom:30%;
    align-self:flex-end;
  }
  .pdp-product__gallery-column{
    display:block;
    grid-column:2 / span 6;
  }
  .pdp-product__content-column{
    grid-column:8 / span 4;
    padding-top:var(--spacing-medium);
  }
  .pdp-product__images--carousel{
    display:none;
  }
  .pdp-product__header{
    margin-bottom:var(--spacing-small);
  }
  .pdp-product__actions{
    grid-template-columns:repeat(var(--grid-1-columns), 1fr);
    grid-column-gap:var(--grid-1-gutters);
    grid-row-gap:var(--spacing-xxbig);
    margin-top:var(--spacing-xxbig);
  }
  .pdp-product__quantity{
    grid-column:1 / span 2;
  }
  .pdp-product__actions--out-of-stock{
    grid-template-columns:repeat(var(--grid-1-columns), 1fr);
    grid-column-gap:var(--grid-1-gutters);
    grid-row-gap:var(--spacing-xxbig);
    margin-top:var(--spacing-small);
  }
  .pdp-product__buttons{
    grid-column:1 / span 4;
  }
  .pdp-product__out-of-stock__text{
    grid-column:1 / span 2;
  }
  .pdp-product__gallery-content,
  .pdp-product__content{
    grid-column:2 / span 6;
  }
}
`, ""]);
  const U = C;
}, 3162: (G, N, n) => {
  n.d(N, { Z: () => U });
  var r = n(4933), l = n.n(r), B = n(3476), C = n.n(B)()(l());
  C.push([G.id, `.pdp-swatches{
  display:grid;
  grid-auto-flow:row;
  grid-gap:var(--grid-1-gutters);
  grid-auto-rows:max-content;
}

.pdp-swatches__field{
  display:grid;
  font:var(--type-body-2-strong-font);
  grid-auto-rows:max-content;
  gap:var(--spacing-xsmall);
}

.pdp-swatches__field__label{
  font:var(--type-details-caption-1-font);
  letter-spacing:var(--type-details-caption-1-letter-spacing);
  color:var(--color-neutral-800);
}

.pdp-swatches__options{
  display:flex;
  flex-wrap:wrap;
  gap:var(--spacing-xsmall);
}
`, ""]);
  const U = C;
}, 5214: (G, N, n) => {
  G.exports = ((r) => {
    var l = {};
    return n.d(l, r), l;
  })({ events: () => ct });
}, 6752: (G, N, n) => {
  G.exports = ((r) => {
    var l = {};
    return n.d(l, r), l;
  })({ FetchGraphQL: () => st });
} };
Jn.C(vt);
Jn.C(qt);
Jn.C(ut);
Jn.C(St);
var lt, _t = (lt = 5414, Jn(Jn.s = lt)), Wt = _t.f, ht = _t.Z;
async function rr(G) {
  return gt.register(pt, {}), ft(await Je("commerce-endpoint")), bt({
    "Content-Type": "application/json",
    "Magento-Environment-Id": await Je("commerce-environment-id"),
    "Magento-Website-Code": await Je("commerce-website-code"),
    "Magento-Store-View-Code": await Je("commerce-store-view-code"),
    "Magento-Store-Code": await Je("commerce-store-code"),
    "Magento-Customer-Group": await Je("commerce-customer-group"),
    "x-api-key": await Je("commerce-x-api-key")
  }), mt.render(ht, {
    sku: wt(),
    carousel: {
      controls: "dots",
      // 'thumbnailsColumn', 'thumbnailsRow', 'dots'
      mobile: !0
    },
    slots: {
      Actions: (N) => {
        N.appendButton((n, r) => {
          const l = r.get("adding");
          return {
            text: l ? "Adding to Cart" : "Add to Cart",
            icon: "Cart",
            variant: "primary",
            disabled: l || !n.data.inStock,
            onClick: async () => {
              try {
                if (r.set("adding", !0), !n.valid) {
                  console.warn("Invalid product", n.values);
                  return;
                }
                await yt([{ ...n.values }]);
              } catch (B) {
                console.warn("Error adding product to cart", B);
              } finally {
                r.set("adding", !1);
              }
            }
          };
        });
      }
    }
  })(G);
}
export {
  rr as default
};
