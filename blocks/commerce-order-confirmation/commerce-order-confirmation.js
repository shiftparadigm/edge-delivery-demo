import { n as Vt } from "../../initializer-BlD7JXpT.js";
import { n as Nt, a as Yt } from "../../fetch-graphql-DRbbdkaK.js";
const Ut = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get FetchError() {
    return tr;
  },
  get MissingArgument() {
    return rr;
  },
  get OrderNotFound() {
    return er;
  },
  get config() {
    return or;
  },
  get fetchGraphQl() {
    return ir;
  },
  get getConfig() {
    return ar;
  },
  get guestOrder() {
    return lr;
  },
  get guestOrderByToken() {
    return sr;
  },
  get id() {
    return Jt;
  },
  get ids() {
    return Qt;
  },
  get initialize() {
    return Bt;
  },
  get modules() {
    return nr;
  },
  get removeFetchGraphQlHeader() {
    return dr;
  },
  get setEndpoint() {
    return cr;
  },
  get setFetchGraphQlHeader() {
    return ur;
  },
  get setFetchGraphQlHeaders() {
    return pr;
  }
}, Symbol.toStringTag, { value: "Module" })), Kt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get id() {
    return vr;
  },
  get ids() {
    return _r;
  },
  get modules() {
    return yr;
  },
  get render() {
    return Mt;
  }
}, Symbol.toStringTag, { value: "Module" })), Wt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get OrderConfirmation() {
    return kr;
  },
  get default() {
    return $t;
  },
  get id() {
    return Or;
  },
  get ids() {
    return xr;
  },
  get modules() {
    return jr;
  }
}, Symbol.toStringTag, { value: "Module" }));
var ut, Ot, At = {}, Dt = {};
function Hn(J) {
  var j = Dt[J];
  if (j !== void 0)
    return j.exports;
  var n = Dt[J] = { id: J, exports: {} };
  return At[J].call(n.exports, n, n.exports, Hn), n.exports;
}
Hn.m = At, Hn.n = (J) => {
  var j = J && J.__esModule ? () => J.default : () => J;
  return Hn.d(j, { a: j }), j;
}, Hn.d = (J, j) => {
  for (var n in j)
    Hn.o(j, n) && !Hn.o(J, n) && Object.defineProperty(J, n, { enumerable: !0, get: j[n] });
}, Hn.f = {}, Hn.e = (J) => Promise.all(Object.keys(Hn.f).reduce((j, n) => (Hn.f[n](J, j), j), [])), Hn.u = (J) => J + ".js", Hn.o = (J, j) => Object.prototype.hasOwnProperty.call(J, j), Hn.r = (J) => {
  typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(J, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(J, "__esModule", { value: !0 });
};
ut = { 666: 0 }, Ot = (J) => {
  var j, n, { ids: d, modules: o, runtime: _ } = J, h = 0;
  for (j in o)
    Hn.o(o, j) && (Hn.m[j] = o[j]);
  for (_ && _(Hn); h < d.length; h++)
    n = d[h], Hn.o(ut, n) && ut[n] && ut[n][0](), ut[d[h]] = 0;
}, Hn.f.j = (J, j) => {
  var n = Hn.o(ut, J) ? ut[J] : void 0;
  if (n !== 0)
    if (n)
      j.push(n[1]);
    else if (J != 666) {
      var d = import("./" + Hn.u(J)).then(Ot, (o) => {
        throw ut[J] !== 0 && (ut[J] = void 0), o;
      });
      d = Promise.race([d, new Promise((o) => n = ut[J] = [o])]), j.push(n[1] = d);
    } else
      ut[J] = 0;
}, Hn.C = Ot;
const Jt = 335, Qt = [335], nr = { 2743: (J, j, n) => {
  n.d(j, { J: () => o, b: () => _ });
  var d = new class {
    get map() {
      return this._map;
    }
    set map(h) {
      this._map = h;
    }
    getMethods() {
      return { setMap: (h) => {
        this.map = h;
      }, getMap: () => this.map };
    }
  }(), { setMap: o, getMap: _ } = d.getMethods();
}, 6680: (J, j, n) => {
  n.d(j, { kp: () => d, v2: () => _, wr: () => o });
  class d extends Error {
    constructor(k) {
      super(k.map((nn) => nn.message).join(" ")), this.name = "FetchError";
    }
  }
  class o extends Error {
    constructor(k) {
      super("Missing argument: ".concat(k));
    }
  }
  class _ extends Error {
    constructor() {
      super("Order not found");
    }
  }
}, 2402: (J, j, n) => {
  n.d(j, { gX: () => nn, iE: () => U, XV: () => h, gO: () => o, mv: () => _, yg: () => k });
  const d = ((V) => {
    var P = {};
    return n.d(P, V), P;
  })({ FetchGraphQL: () => Nt });
  var { setEndpoint: o, setFetchGraphQlHeader: _, removeFetchGraphQlHeader: h, setFetchGraphQlHeaders: k, fetchGraphQl: nn, getConfig: U } = new d.FetchGraphQL().getMethods();
}, 7218: (J, j, n) => {
  n.d(j, { J: () => o, q: () => d });
  var d = `
    fragment guestOrderData on CustomerOrder {
      number
      status
      email
      shipping_method
      payment_methods {
        name
        type
      }
      total {
        subtotal {
          currency
          value
        }
        total_tax {
          currency
          value
        }
        total_shipping {
          currency
          value
        }
        grand_total {
          currency
          value
        }
      }
      billing_address {
        firstname
        lastname
        street
        city
        postcode
        telephone
        country_code
        region
        region_id
      }
      shipping_address {
        firstname
        lastname
        street
        city
        postcode
        telephone
        country_code
        region
        region_id
      }
      items {
        __typename
        id
        quantity_ordered
        product_sale_price {
          value
          currency
        }
        product {
          name
          sku
          thumbnail {
            label
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
        }
        selected_options {
          label
          value
        }
        
        ... on GiftCardOrderItem {
          gift_card {
            recipient_name
            recipient_email
            sender_name
            sender_email
            message
          }
        }
      }
    }
`, o = `
  query guestOrder($number: String!, $email: String!, $postcode: String!) {
    guestOrder(input: { number: $number, email: $email, postcode: $postcode }) {
      ...guestOrderData
    }
  }
  `.concat(d, `
`);
}, 2790: (J, j, n) => {
  n.d(j, { h: () => V });
  var d = n(2402), o = n(6680), _ = n(7218);
  function h(P, z) {
    var R = Object.keys(P);
    if (Object.getOwnPropertySymbols) {
      var Y = Object.getOwnPropertySymbols(P);
      z && (Y = Y.filter(function(W) {
        return Object.getOwnPropertyDescriptor(P, W).enumerable;
      })), R.push.apply(R, Y);
    }
    return R;
  }
  function k(P) {
    for (var z = 1; z < arguments.length; z++) {
      var R = arguments[z] != null ? arguments[z] : {};
      z % 2 ? h(Object(R), !0).forEach(function(Y) {
        nn(P, Y, R[Y]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(P, Object.getOwnPropertyDescriptors(R)) : h(Object(R)).forEach(function(Y) {
        Object.defineProperty(P, Y, Object.getOwnPropertyDescriptor(R, Y));
      });
    }
    return P;
  }
  function nn(P, z, R) {
    return (z = function(Y) {
      var W = function(tn, pn) {
        if (typeof tn != "object" || tn === null)
          return tn;
        var $ = tn[Symbol.toPrimitive];
        if ($ !== void 0) {
          var M = $.call(tn, pn || "default");
          if (typeof M != "object")
            return M;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (pn === "string" ? String : Number)(tn);
      }(Y, "string");
      return typeof W == "symbol" ? W : String(W);
    }(z)) in P ? Object.defineProperty(P, z, { value: R, enumerable: !0, configurable: !0, writable: !0 }) : P[z] = R, P;
  }
  function U(P, z, R, Y, W, tn, pn) {
    try {
      var $ = P[tn](pn), M = $.value;
    } catch (x) {
      return void R(x);
    }
    $.done ? z(M) : Promise.resolve(M).then(Y, W);
  }
  var V = function() {
    var P, z = (P = function* (R) {
      var { data: Y, errors: W } = yield (0, d.gX)(_.J, { variables: k({}, R) });
      if (W)
        throw new o.kp(W);
      var tn = Y == null ? void 0 : Y.guestOrder;
      if (!tn)
        throw new o.v2();
      return tn;
    }, function() {
      var R = this, Y = arguments;
      return new Promise(function(W, tn) {
        var pn = P.apply(R, Y);
        function $(x) {
          U(pn, W, tn, $, M, "next", x);
        }
        function M(x) {
          U(pn, W, tn, $, M, "throw", x);
        }
        $(void 0);
      });
    });
    return function(R) {
      return z.apply(this, arguments);
    };
  }();
}, 5619: (J, j, n) => {
  n.d(j, { y: () => nn });
  var d = n(2402), o = n(6680), _ = n(7218), h = `
  query guestOrderByToken($token: String!) {
    guestOrderByToken(input: {token: $token}) {
      ...guestOrderData
    }
  }
  `.concat(_.q, `
`);
  function k(U, V, P, z, R, Y, W) {
    try {
      var tn = U[Y](W), pn = tn.value;
    } catch ($) {
      return void P($);
    }
    tn.done ? V(pn) : Promise.resolve(pn).then(z, R);
  }
  var nn = function() {
    var U, V = (U = function* (P) {
      var { data: z, errors: R } = yield (0, d.gX)(h, { variables: { token: P } });
      if (R)
        throw new o.kp(R);
      var Y = z == null ? void 0 : z.guestOrderByToken;
      if (!Y)
        throw new o.v2();
      return Y;
    }, function() {
      var P = this, z = arguments;
      return new Promise(function(R, Y) {
        var W = U.apply(P, z);
        function tn($) {
          k(W, R, Y, tn, pn, "next", $);
        }
        function pn($) {
          k(W, R, Y, tn, pn, "throw", $);
        }
        tn(void 0);
      });
    });
    return function(P) {
      return V.apply(this, arguments);
    };
  }();
}, 5328: (J, j, n) => {
  n.d(j, { kp: () => d.kp, wr: () => d.wr, v2: () => d.v2, vc: () => o.v, gX: () => _.gX, iE: () => _.iE, hs: () => h.h, yU: () => k.y, j2: () => o.j, XV: () => _.XV, gO: () => _.gO, mv: () => _.mv, yg: () => _.yg });
  var d = n(6680), o = n(973), _ = n(2402), h = n(2790), k = n(5619);
}, 973: (J, j, n) => {
  n.d(j, { v: () => pn, j: () => tn });
  class d {
    constructor(M) {
      this.config = M;
    }
    getConfig() {
      return this.config;
    }
    setConfig(M) {
      this.config = M;
    }
  }
  var o = n(2743), _ = ["imageParamsKeyMap"];
  function h($, M) {
    var x = Object.keys($);
    if (Object.getOwnPropertySymbols) {
      var D = Object.getOwnPropertySymbols($);
      M && (D = D.filter(function(Q) {
        return Object.getOwnPropertyDescriptor($, Q).enumerable;
      })), x.push.apply(x, D);
    }
    return x;
  }
  function k($) {
    for (var M = 1; M < arguments.length; M++) {
      var x = arguments[M] != null ? arguments[M] : {};
      M % 2 ? h(Object(x), !0).forEach(function(D) {
        U($, D, x[D]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties($, Object.getOwnPropertyDescriptors(x)) : h(Object(x)).forEach(function(D) {
        Object.defineProperty($, D, Object.getOwnPropertyDescriptor(x, D));
      });
    }
    return $;
  }
  function nn($, M) {
    if ($ == null)
      return {};
    var x, D, Q = function(w, t) {
      if (w == null)
        return {};
      var y, N, H = {}, X = Object.keys(w);
      for (N = 0; N < X.length; N++)
        y = X[N], t.indexOf(y) >= 0 || (H[y] = w[y]);
      return H;
    }($, M);
    if (Object.getOwnPropertySymbols) {
      var F = Object.getOwnPropertySymbols($);
      for (D = 0; D < F.length; D++)
        x = F[D], M.indexOf(x) >= 0 || Object.prototype.propertyIsEnumerable.call($, x) && (Q[x] = $[x]);
    }
    return Q;
  }
  function U($, M, x) {
    return (M = function(D) {
      var Q = function(F, w) {
        if (typeof F != "object" || F === null)
          return F;
        var t = F[Symbol.toPrimitive];
        if (t !== void 0) {
          var y = t.call(F, w || "default");
          if (typeof y != "object")
            return y;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (w === "string" ? String : Number)(F);
      }(D, "string");
      return typeof Q == "symbol" ? Q : String(Q);
    }(M)) in $ ? Object.defineProperty($, M, { value: x, enumerable: !0, configurable: !0, writable: !0 }) : $[M] = x, $;
  }
  class V {
    static register(M, x) {
      var D, Q;
      V._mounted && ((D = M.listeners) === null || D === void 0 || D.call(M, x), (Q = M.init) === null || Q === void 0 || Q.call(M, x)), V._initializers.push([M, x]);
    }
    static mount() {
      var M, x;
      V._mounted = !0, (M = V._initializers) === null || M === void 0 || M.forEach((D) => {
        var Q, [F, w] = D;
        (Q = F.listeners) === null || Q === void 0 || Q.call(F, w);
      }), (x = V._initializers) === null || x === void 0 || x.forEach((D) => {
        var Q, [F, w] = D;
        (Q = F.init) === null || Q === void 0 || Q.call(F, k({ imageParamsKeyMap: V._imageParamsKeyMap }, w));
      });
    }
    static setImageParamKeys(M) {
      V._imageParamsKeyMap = M;
    }
  }
  function P($, M) {
    var x = Object.keys($);
    if (Object.getOwnPropertySymbols) {
      var D = Object.getOwnPropertySymbols($);
      M && (D = D.filter(function(Q) {
        return Object.getOwnPropertyDescriptor($, Q).enumerable;
      })), x.push.apply(x, D);
    }
    return x;
  }
  function z($, M, x) {
    return (M = function(D) {
      var Q = function(F, w) {
        if (typeof F != "object" || F === null)
          return F;
        var t = F[Symbol.toPrimitive];
        if (t !== void 0) {
          var y = t.call(F, w || "default");
          if (typeof y != "object")
            return y;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (w === "string" ? String : Number)(F);
      }(D, "string");
      return typeof Q == "symbol" ? Q : String(Q);
    }(M)) in $ ? Object.defineProperty($, M, { value: x, enumerable: !0, configurable: !0, writable: !0 }) : $[M] = x, $;
  }
  function R($, M, x, D, Q, F, w) {
    try {
      var t = $[F](w), y = t.value;
    } catch (N) {
      return void x(N);
    }
    t.done ? M(y) : Promise.resolve(y).then(D, Q);
  }
  U(V, "_initializers", []), U(V, "_mounted", !1), U(V, "_imageParamsKeyMap", void 0);
  var Y, W, tn = new class {
    constructor($) {
      var { init: M, listeners: x } = $;
      U(this, "_listeners", []), U(this, "config", new d({})), this.listeners = (D) => (this._listeners.forEach((Q) => Q.off()), this._listeners = x(D)), this.init = (D) => {
        var Q = D, { imageParamsKeyMap: F } = Q, w = nn(Q, _);
        return this.config.setConfig(k(k({}, this.config.getConfig()), w)), (0, o.J)(F), M(D);
      };
    }
  }({ init: (Y = function* ($) {
    var M = function(x) {
      for (var D = 1; D < arguments.length; D++) {
        var Q = arguments[D] != null ? arguments[D] : {};
        D % 2 ? P(Object(Q), !0).forEach(function(F) {
          z(x, F, Q[F]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(x, Object.getOwnPropertyDescriptors(Q)) : P(Object(Q)).forEach(function(F) {
          Object.defineProperty(x, F, Object.getOwnPropertyDescriptor(Q, F));
        });
      }
      return x;
    }({}, $);
    tn.config.setConfig(M);
  }, W = function() {
    var $ = this, M = arguments;
    return new Promise(function(x, D) {
      var Q = Y.apply($, M);
      function F(t) {
        R(Q, x, D, F, w, "next", t);
      }
      function w(t) {
        R(Q, x, D, F, w, "throw", t);
      }
      F(void 0);
    });
  }, function($) {
    return W.apply(this, arguments);
  }), listeners: () => [] }), pn = tn.config;
} };
Hn.C(Ut);
var Zt, st = (Zt = 5328, Hn(Hn.s = Zt)), tr = st.kp, rr = st.wr, er = st.v2, or = st.vc, ir = st.gX, ar = st.iE, lr = st.hs, sr = st.yU, Bt = st.j2, dr = st.XV, cr = st.gO, ur = st.mv, pr = st.yg;
const fr = 922, mr = [922], gr = { 5406: (J, j, n) => {
  n.d(j, { Q: () => I, J: () => A });
  var d = n(3354), o = n(1857), _ = n.n(o), h = n(5587);
  const k = JSON.parse('{"Dropin":{"ExampleComponentName":{"item":{"label":"string"}},"Incrementer":{"decreaseLabel":"Decrease Quantity","increaseLabel":"Increase Quantity","label":"Quantity"},"Modal":{"Close":{"label":"Close"}},"InlineAlert":{"dismissLabel":"Dismiss Alert"},"PriceSummary":{"subTotal":{"label":"Subtotal","withTaxes":"Including taxes","withoutTaxes":"excluding taxes"},"shipping":{"label":"Shipping","editZipAction":"Apply","estimated":"Estimated Shipping","estimatedDestination":"Estimated Shipping to ","destinationLinkAriaLabel":"Change destination","zipPlaceholder":"Zip Code","withTaxes":"Including taxes","withoutTaxes":"excluding taxes","alternateField":{"zip":"Estimate using country/zip","state":"Estimate using country/state"}},"taxes":{"total":"Tax Total","totalOnly":"Tax","breakdown":"Taxes","showBreakdown":"Show Tax Breakdown","hideBreakdown":"Hide Tax Breakdown","estimated":"Estimated Tax"},"total":{"estimated":"Estimated Total","label":"Total","withoutTax":"Total excluding taxes"}},"ProgressSpinner":{"updating":{"label":"Item is updating"},"updatingChildren":{"label":"Items are updating"}},"PriceRange":{"from":{"label":"From"},"to":{"label":"to"},"asLowAs":{"label":"As low as"}},"Swatches":{"outOfStock":{"label":"out of stock swatch"},"selected":{"label":"swatch selected"},"swatch":{"label":"swatch"}},"Accordion":{"open":{"label":"Open"},"close":{"label":"Close"}},"CartItem":{"each":{"label":"each"},"quantity":{"label":"Quantity"},"remove":{"label":"Remove {product} from the cart"},"removeDefault":{"label":"Remove item from the cart"},"taxIncluded":{"label":"incl. VAT"},"taxExcluded":{"label":"excl. tax"},"updating":{"label":"{product} is updating"}}}}');
  var nn = n(9724), U = { default: k, en_US: k }, V = n(1892), P = n.n(V), z = n(5760), R = n.n(z), Y = n(8311), W = n.n(Y), tn = n(1615), pn = n.n(tn), $ = n(8060), M = n.n($), x = n(6617), D = { attributes: { "data-dropin": "storefront-order-confirmation", "data-sdk": "0.22.0" }, styleTagTransform: function(i, e) {
    var dn;
    window._loadedStyles = window._loadedStyles ?? {};
    const l = (dn = i == null ? void 0 : i.match(/^\.dropin-(\w+)/)) == null ? void 0 : dn[1], c = e.getAttribute("data-sdk"), m = l ? `sdk/${l}` : e.getAttribute("data-dropin");
    e.setAttribute("data-dropin", m), e.removeAttribute("data-sdk");
    const f = window._loadedStyles[m];
    if (f) {
      const mn = function(yn, bn) {
        const [xn, Pn] = yn.split("-"), [r, a] = bn.split("-"), u = [...xn.split("."), Pn], C = [...r.split("."), a], T = parseInt(u[0], 10), p = parseInt(C[0], 10);
        if (T !== p)
          return T > p ? yn : bn;
        const v = parseInt(u[1], 10), O = parseInt(C[1], 10);
        if (v !== O)
          return v > O ? yn : bn;
        const G = parseInt(u[2], 10), K = parseInt(C[2], 10);
        if (G !== K)
          return G > K ? yn : bn;
        if (u[3] && C[3]) {
          const an = /(alpha|beta)(.*)/, E = u[3].match(an), fn = C[3].match(an), ln = E[1], gn = fn[1], hn = parseInt(E[2], 10), sn = parseInt(fn[2], 10);
          if (ln === gn)
            return hn > sn ? yn : bn;
          if (ln === "alpha" && gn === "beta")
            return bn;
          if (ln === "beta" && gn === "alpha")
            return yn;
        }
        return u[3] ? bn : yn;
      }(c, f.sdk);
      if (!l || l && mn === f.sdk) {
        const yn = f.style.textContent;
        f.style.textContent = `${yn}
/* --- MERGED --- */
${i}`;
      } else
        l && mn !== f.sdk && (f.style.textContent = `/* --- UPGRADED --- */
${i}`);
      return void e.remove();
    }
    e.textContent = i, window._loadedStyles[m] = { sdk: c, core: l, style: e };
    const b = document.querySelector("head"), { lastDropinStyleInjected: Z, lastSDKStyleInjected: en } = window._loadedStyles;
    l ? (en ? b.insertBefore(e, en.nextSibling) : b.insertBefore(e, b.firstChild), window._loadedStyles.lastSDKStyleInjected = e) : (Z ? b.insertBefore(e, Z.nextSibling) : en ? b.insertBefore(e, en.nextSibling) : b.insertBefore(e, b.firstChild), window._loadedStyles.lastDropinStyleInjected = e);
  } };
  D.setAttributes = pn(), D.insert = W().bind(null, "head"), D.domAPI = R(), D.insertStyleElement = M(), P()(x.Z, D), x.Z && x.Z.locals && x.Z.locals;
  var Q = n(4768), F = { attributes: { "data-dropin": "storefront-order-confirmation", "data-sdk": "0.22.0" }, styleTagTransform: function(i, e) {
    var dn;
    window._loadedStyles = window._loadedStyles ?? {};
    const l = (dn = i == null ? void 0 : i.match(/^\.dropin-(\w+)/)) == null ? void 0 : dn[1], c = e.getAttribute("data-sdk"), m = l ? `sdk/${l}` : e.getAttribute("data-dropin");
    e.setAttribute("data-dropin", m), e.removeAttribute("data-sdk");
    const f = window._loadedStyles[m];
    if (f) {
      const mn = function(yn, bn) {
        const [xn, Pn] = yn.split("-"), [r, a] = bn.split("-"), u = [...xn.split("."), Pn], C = [...r.split("."), a], T = parseInt(u[0], 10), p = parseInt(C[0], 10);
        if (T !== p)
          return T > p ? yn : bn;
        const v = parseInt(u[1], 10), O = parseInt(C[1], 10);
        if (v !== O)
          return v > O ? yn : bn;
        const G = parseInt(u[2], 10), K = parseInt(C[2], 10);
        if (G !== K)
          return G > K ? yn : bn;
        if (u[3] && C[3]) {
          const an = /(alpha|beta)(.*)/, E = u[3].match(an), fn = C[3].match(an), ln = E[1], gn = fn[1], hn = parseInt(E[2], 10), sn = parseInt(fn[2], 10);
          if (ln === gn)
            return hn > sn ? yn : bn;
          if (ln === "alpha" && gn === "beta")
            return bn;
          if (ln === "beta" && gn === "alpha")
            return yn;
        }
        return u[3] ? bn : yn;
      }(c, f.sdk);
      if (!l || l && mn === f.sdk) {
        const yn = f.style.textContent;
        f.style.textContent = `${yn}
/* --- MERGED --- */
${i}`;
      } else
        l && mn !== f.sdk && (f.style.textContent = `/* --- UPGRADED --- */
${i}`);
      return void e.remove();
    }
    e.textContent = i, window._loadedStyles[m] = { sdk: c, core: l, style: e };
    const b = document.querySelector("head"), { lastDropinStyleInjected: Z, lastSDKStyleInjected: en } = window._loadedStyles;
    l ? (en ? b.insertBefore(e, en.nextSibling) : b.insertBefore(e, b.firstChild), window._loadedStyles.lastSDKStyleInjected = e) : (Z ? b.insertBefore(e, Z.nextSibling) : en ? b.insertBefore(e, en.nextSibling) : b.insertBefore(e, b.firstChild), window._loadedStyles.lastDropinStyleInjected = e);
  } };
  F.setAttributes = pn(), F.insert = W().bind(null, "head"), F.domAPI = R(), F.insertStyleElement = M(), P()(Q.Z, F), Q.Z && Q.Z.locals && Q.Z.locals;
  var w = n(2754), t = ["lang", "langDefinitions", "className", "children"];
  function y(i, e) {
    var l = Object.keys(i);
    if (Object.getOwnPropertySymbols) {
      var c = Object.getOwnPropertySymbols(i);
      e && (c = c.filter(function(m) {
        return Object.getOwnPropertyDescriptor(i, m).enumerable;
      })), l.push.apply(l, c);
    }
    return l;
  }
  function N(i) {
    for (var e = 1; e < arguments.length; e++) {
      var l = arguments[e] != null ? arguments[e] : {};
      e % 2 ? y(Object(l), !0).forEach(function(c) {
        H(i, c, l[c]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l)) : y(Object(l)).forEach(function(c) {
        Object.defineProperty(i, c, Object.getOwnPropertyDescriptor(l, c));
      });
    }
    return i;
  }
  function H(i, e, l) {
    return (e = function(c) {
      var m = function(f, b) {
        if (typeof f != "object" || f === null)
          return f;
        var Z = f[Symbol.toPrimitive];
        if (Z !== void 0) {
          var en = Z.call(f, b || "default");
          if (typeof en != "object")
            return en;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (b === "string" ? String : Number)(f);
      }(c, "string");
      return typeof m == "symbol" ? m : String(m);
    }(e)) in i ? Object.defineProperty(i, e, { value: l, enumerable: !0, configurable: !0, writable: !0 }) : i[e] = l, i;
  }
  function X(i, e) {
    if (i == null)
      return {};
    var l, c, m = function(b, Z) {
      if (b == null)
        return {};
      var en, dn, mn = {}, yn = Object.keys(b);
      for (dn = 0; dn < yn.length; dn++)
        en = yn[dn], Z.indexOf(en) >= 0 || (mn[en] = b[en]);
      return mn;
    }(i, e);
    if (Object.getOwnPropertySymbols) {
      var f = Object.getOwnPropertySymbols(i);
      for (c = 0; c < f.length; c++)
        l = f[c], e.indexOf(l) >= 0 || Object.prototype.propertyIsEnumerable.call(i, l) && (m[l] = i[l]);
    }
    return m;
  }
  var I = (0, d.kr)({ locale: "en-US" }), A = (i) => {
    var { lang: e = "en_US", langDefinitions: l = {}, className: c, children: m } = i, f = X(i, t), b = (0, d.Ye)(() => {
      var en, dn = _()(l.default, (en = l[e]) !== null && en !== void 0 ? en : {});
      return _()(((mn) => _()(U.default, U[mn] || {}))(e), dn);
    }, [e, l]), Z = e.replace("_", "-");
    return (0, w.tZ)(I.Provider, { value: { locale: Z }, children: (0, w.tZ)(nn.Pj, { definition: b, children: (0, w.tZ)("div", N(N({}, f), {}, { className: (0, h.S)(["dropin-design", c]), children: m })) }) });
  };
}, 5587: (J, j, n) => {
  n.d(j, { S: () => d });
  var d = (o) => o.reduce((_, h) => {
    if (!h)
      return _;
    if (typeof h == "string" && (_ += " ".concat(h)), Array.isArray(h)) {
      var [k, nn] = h;
      k && nn && (_ += " ".concat(k));
    }
    return _;
  }, "").trim();
}, 2743: (J, j, n) => {
  n.d(j, { J: () => o, b: () => _ });
  var d = new class {
    get map() {
      return this._map;
    }
    set map(h) {
      this._map = h;
    }
    getMethods() {
      return { setMap: (h) => {
        this.map = h;
      }, getMap: () => this.map };
    }
  }(), { setMap: o, getMap: _ } = d.getMethods();
}, 1177: (J, j, n) => {
  n.d(j, { F: () => V });
  var d = n(5587), o = n(2754), _ = ["node"];
  function h(P, z) {
    var R = Object.keys(P);
    if (Object.getOwnPropertySymbols) {
      var Y = Object.getOwnPropertySymbols(P);
      z && (Y = Y.filter(function(W) {
        return Object.getOwnPropertyDescriptor(P, W).enumerable;
      })), R.push.apply(R, Y);
    }
    return R;
  }
  function k(P) {
    for (var z = 1; z < arguments.length; z++) {
      var R = arguments[z] != null ? arguments[z] : {};
      z % 2 ? h(Object(R), !0).forEach(function(Y) {
        nn(P, Y, R[Y]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(P, Object.getOwnPropertyDescriptors(R)) : h(Object(R)).forEach(function(Y) {
        Object.defineProperty(P, Y, Object.getOwnPropertyDescriptor(R, Y));
      });
    }
    return P;
  }
  function nn(P, z, R) {
    return (z = function(Y) {
      var W = function(tn, pn) {
        if (typeof tn != "object" || tn === null)
          return tn;
        var $ = tn[Symbol.toPrimitive];
        if ($ !== void 0) {
          var M = $.call(tn, pn || "default");
          if (typeof M != "object")
            return M;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (pn === "string" ? String : Number)(tn);
      }(Y, "string");
      return typeof W == "symbol" ? W : String(W);
    }(z)) in P ? Object.defineProperty(P, z, { value: R, enumerable: !0, configurable: !0, writable: !0 }) : P[z] = R, P;
  }
  function U(P, z) {
    if (P == null)
      return {};
    var R, Y, W = function(pn, $) {
      if (pn == null)
        return {};
      var M, x, D = {}, Q = Object.keys(pn);
      for (x = 0; x < Q.length; x++)
        M = Q[x], $.indexOf(M) >= 0 || (D[M] = pn[M]);
      return D;
    }(P, z);
    if (Object.getOwnPropertySymbols) {
      var tn = Object.getOwnPropertySymbols(P);
      for (Y = 0; Y < tn.length; Y++)
        R = tn[Y], z.indexOf(R) >= 0 || Object.prototype.propertyIsEnumerable.call(P, R) && (W[R] = P[R]);
    }
    return W;
  }
  function V(P) {
    var { node: z } = P, R = U(P, _);
    return z ? Array.isArray(z) ? (0, o.tZ)(o.HY, { children: z.map((Y, W) => (0, o.tZ)(V, k({ node: Y, className: R.className }, R), W)) }) : (R.className = (0, d.S)([z.props.className, R.className]), (0, o.tZ)(z.type, k(k({ ref: z.ref }, z.props), R), z.key)) : null;
  }
}, 6617: (J, j, n) => {
  n.d(j, { Z: () => k });
  var d = n(4933), o = n.n(d), _ = n(3476), h = n.n(_)()(o());
  h.push([J.id, `.dropin-design{
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
  const k = h;
}, 4768: (J, j, n) => {
  n.d(j, { Z: () => k });
  var d = n(4933), o = n.n(d), _ = n(3476), h = n.n(_)()(o());
  h.push([J.id, `.dropin-design a{
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
  const k = h;
}, 3476: (J) => {
  J.exports = function(j) {
    var n = [];
    return n.toString = function() {
      return this.map(function(d) {
        var o = "", _ = d[5] !== void 0;
        return d[4] && (o += "@supports (".concat(d[4], ") {")), d[2] && (o += "@media ".concat(d[2], " {")), _ && (o += "@layer".concat(d[5].length > 0 ? " ".concat(d[5]) : "", " {")), o += j(d), _ && (o += "}"), d[2] && (o += "}"), d[4] && (o += "}"), o;
      }).join("");
    }, n.i = function(d, o, _, h, k) {
      typeof d == "string" && (d = [[null, d, void 0]]);
      var nn = {};
      if (_)
        for (var U = 0; U < this.length; U++) {
          var V = this[U][0];
          V != null && (nn[V] = !0);
        }
      for (var P = 0; P < d.length; P++) {
        var z = [].concat(d[P]);
        _ && nn[z[0]] || (k !== void 0 && (z[5] === void 0 || (z[1] = "@layer".concat(z[5].length > 0 ? " ".concat(z[5]) : "", " {").concat(z[1], "}")), z[5] = k), o && (z[2] && (z[1] = "@media ".concat(z[2], " {").concat(z[1], "}")), z[2] = o), h && (z[4] ? (z[1] = "@supports (".concat(z[4], ") {").concat(z[1], "}"), z[4] = h) : z[4] = "".concat(h)), n.push(z));
      }
    }, n;
  };
}, 4933: (J) => {
  J.exports = function(j) {
    return j[1];
  };
}, 1857: (J) => {
  var j = function(V) {
    return /* @__PURE__ */ function(P) {
      return !!P && typeof P == "object";
    }(V) && !function(P) {
      var z = Object.prototype.toString.call(P);
      return z === "[object RegExp]" || z === "[object Date]" || function(R) {
        return R.$$typeof === n;
      }(P);
    }(V);
  }, n = typeof Symbol == "function" && Symbol.for ? Symbol.for("react.element") : 60103;
  function d(V, P) {
    return P.clone !== !1 && P.isMergeableObject(V) ? nn((z = V, Array.isArray(z) ? [] : {}), V, P) : V;
    var z;
  }
  function o(V, P, z) {
    return V.concat(P).map(function(R) {
      return d(R, z);
    });
  }
  function _(V) {
    return Object.keys(V).concat(function(P) {
      return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(P).filter(function(z) {
        return Object.propertyIsEnumerable.call(P, z);
      }) : [];
    }(V));
  }
  function h(V, P) {
    try {
      return P in V;
    } catch {
      return !1;
    }
  }
  function k(V, P, z) {
    var R = {};
    return z.isMergeableObject(V) && _(V).forEach(function(Y) {
      R[Y] = d(V[Y], z);
    }), _(P).forEach(function(Y) {
      (function(W, tn) {
        return h(W, tn) && !(Object.hasOwnProperty.call(W, tn) && Object.propertyIsEnumerable.call(W, tn));
      })(V, Y) || (h(V, Y) && z.isMergeableObject(P[Y]) ? R[Y] = function(W, tn) {
        if (!tn.customMerge)
          return nn;
        var pn = tn.customMerge(W);
        return typeof pn == "function" ? pn : nn;
      }(Y, z)(V[Y], P[Y], z) : R[Y] = d(P[Y], z));
    }), R;
  }
  function nn(V, P, z) {
    (z = z || {}).arrayMerge = z.arrayMerge || o, z.isMergeableObject = z.isMergeableObject || j, z.cloneUnlessOtherwiseSpecified = d;
    var R = Array.isArray(P);
    return R === Array.isArray(V) ? R ? z.arrayMerge(V, P, z) : k(V, P, z) : d(P, z);
  }
  nn.all = function(V, P) {
    if (!Array.isArray(V))
      throw new Error("first argument should be an array");
    return V.reduce(function(z, R) {
      return nn(z, R, P);
    }, {});
  };
  var U = nn;
  J.exports = U;
}, 3152: function(J) {
  J.exports = function(j, n, d, o, _) {
    for (n = n.split ? n.split(".") : n, o = 0; o < n.length; o++)
      j = j ? j[n[o]] : _;
    return j === _ ? d : j;
  };
}, 9724: (J, j, n) => {
  n.d(j, { Pj: () => x, Cf: () => X, xv: () => N, XK: () => i });
  var d, o = n(473), _ = n(5792), h = n(3152), k = n.n(h), nn = {};
  function U(e, l, c) {
    if (e.nodeType === 3) {
      var m = "textContent" in e ? e.textContent : e.nodeValue || "";
      if (U.options.trim !== !1) {
        var f = l === 0 || l === c.length - 1;
        if ((!(m = m.match(/^[\s\n]+$/g) && U.options.trim !== "all" ? " " : m.replace(/(^[\s\n]+|[\s\n]+$)/g, U.options.trim === "all" || f ? "" : " ")) || m === " ") && c.length > 1 && f)
          return null;
      }
      return m;
    }
    if (e.nodeType !== 1)
      return null;
    var b = String(e.nodeName).toLowerCase();
    if (b === "script" && !U.options.allowScripts)
      return null;
    var Z, en, dn = U.h(b, function(mn) {
      var yn = mn && mn.length;
      if (!yn)
        return null;
      for (var bn = {}, xn = 0; xn < yn; xn++) {
        var Pn = mn[xn], r = Pn.name, a = Pn.value;
        r.substring(0, 2) === "on" && U.options.allowEvents && (a = new Function(a)), bn[r] = a;
      }
      return bn;
    }(e.attributes), (en = (Z = e.childNodes) && Array.prototype.map.call(Z, U).filter(P)) && en.length ? en : null);
    return U.visitor && U.visitor(dn), dn;
  }
  var V, P = function(e) {
    return e;
  }, z = {};
  function R(e) {
    var l = (e.type || "").toLowerCase(), c = R.map;
    c && c.hasOwnProperty(l) ? (e.type = c[l], e.props = Object.keys(e.props || {}).reduce(function(m, f) {
      var b;
      return m[b = f, b.replace(/-(.)/g, function(Z, en) {
        return en.toUpperCase();
      })] = e.props[f], m;
    }, {})) : e.type = l.replace(/[^a-z0-9-]/i, "");
  }
  const Y = function(e) {
    function l() {
      e.apply(this, arguments);
    }
    return e && (l.__proto__ = e), (l.prototype = Object.create(e && e.prototype)).constructor = l, l.setReviver = function(c) {
      V = c;
    }, l.prototype.shouldComponentUpdate = function(c) {
      var m = this.props;
      return c.wrap !== m.wrap || c.type !== m.type || c.markup !== m.markup;
    }, l.prototype.setComponents = function(c) {
      if (this.map = {}, c) {
        for (var m in c)
          if (c.hasOwnProperty(m)) {
            var f = m.replace(/([A-Z]+)([A-Z][a-z0-9])|([a-z0-9]+)([A-Z])/g, "$1$3-$2$4").toLowerCase();
            this.map[f] = c[m];
          }
      }
    }, l.prototype.render = function(c) {
      var m = c.wrap;
      m === void 0 && (m = !0);
      var f, b = c.type, Z = c.markup, en = c.components, dn = c.reviver, mn = c.onError, yn = c["allow-scripts"], bn = c["allow-events"], xn = c.trim, Pn = function(T, p) {
        var v = {};
        for (var O in T)
          Object.prototype.hasOwnProperty.call(T, O) && p.indexOf(O) === -1 && (v[O] = T[O]);
        return v;
      }(c, ["wrap", "type", "markup", "components", "reviver", "onError", "allow-scripts", "allow-events", "trim"]), r = dn || this.reviver || this.constructor.prototype.reviver || V || o.h;
      this.setComponents(en);
      var a = { allowScripts: yn, allowEvents: bn, trim: xn };
      try {
        f = function(T, p, v, O, G) {
          var K = function(fn, ln) {
            var gn, hn, sn, On, Nn = ln === "html" ? "text/html" : "application/xml";
            ln === "html" ? (On = "body", sn = `<!DOCTYPE html>
<html><body>` + fn + "</body></html>") : (On = "xml", sn = `<?xml version="1.0" encoding="UTF-8"?>
<xml>` + fn + "</xml>");
            try {
              gn = new DOMParser().parseFromString(sn, Nn);
            } catch (Tn) {
              hn = Tn;
            }
            if (gn || ln !== "html" || ((gn = d || (d = function() {
              if (document.implementation && document.implementation.createHTMLDocument)
                return document.implementation.createHTMLDocument("");
              var Tn = document.createElement("iframe");
              return Tn.style.cssText = "position:absolute; left:0; top:-999em; width:1px; height:1px; overflow:hidden;", Tn.setAttribute("sandbox", "allow-forms"), document.body.appendChild(Tn), Tn.contentWindow.document;
            }())).open(), gn.write(sn), gn.close()), gn) {
              var $n = gn.getElementsByTagName(On)[0], Bn = $n.firstChild;
              return fn && !Bn && ($n.error = "Document parse failed."), Bn && String(Bn.nodeName).toLowerCase() === "parsererror" && (Bn.removeChild(Bn.firstChild), Bn.removeChild(Bn.lastChild), $n.error = Bn.textContent || Bn.nodeValue || hn || "Unknown error", $n.removeChild(Bn)), $n;
            }
          }(T, p);
          if (K && K.error)
            throw new Error(K.error);
          var an = K && K.body || K;
          R.map = O || z;
          var E = an && function(fn, ln, gn, hn) {
            return U.visitor = ln, U.h = gn, U.options = hn || nn, U(fn);
          }(an, R, v, G);
          return R.map = null, E && E.props && E.props.children || null;
        }(Z, b, r, this.map, a);
      } catch (T) {
        mn ? mn({ error: T }) : typeof console < "u" && console.error && console.error("preact-markup: " + T);
      }
      if (m === !1)
        return f || null;
      var u = Pn.hasOwnProperty("className") ? "className" : "class", C = Pn[u];
      return C ? C.splice ? C.splice(0, 0, "markup") : typeof C == "string" ? Pn[u] += " markup" : typeof C == "object" && (C.markup = !0) : Pn[u] = "markup", r("div", Pn, f || null);
    }, l;
  }(o.wA);
  var W = (0, o.kr)({ intl: {} });
  function tn(e) {
    return e != null;
  }
  function pn(e, l) {
    for (var c in l)
      e[c] = l[c];
    return e;
  }
  function $(e, l) {
    var c = pn({}, e);
    for (var m in l)
      l.hasOwnProperty(m) && (e[m] && l[m] && typeof e[m] == "object" && typeof l[m] == "object" ? c[m] = $(e[m], l[m]) : c[m] = e[m] || l[m]);
    return c;
  }
  var M = /[?&#]intl=show/;
  function x(e) {
    var l = e.scope, c = e.mark, m = e.definition, f = function(Z, en) {
      var dn = {};
      for (var mn in Z)
        Object.prototype.hasOwnProperty.call(Z, mn) && en.indexOf(mn) === -1 && (dn[mn] = Z[mn]);
      return dn;
    }(e, ["scope", "mark", "definition"]), b = pn({}, (0, _.qp)(W).intl || {});
    return l && (b.scope = l), m && (b.dictionary = $(b.dictionary || {}, m)), (c || typeof location < "u" && String(location).match(M)) && (b.mark = !0), (0, o.h)(W.Provider, { value: { intl: b } }, f.children);
  }
  function D(e, l) {
    if (arguments.length < 2)
      return l = e, function(m) {
        return D(m, l);
      };
    function c(m) {
      return (0, o.h)(x, l || {}, (0, o.h)(e, m));
    }
    return c.getWrappedComponent = e && e.getWrappedComponent || function() {
      return e;
    }, c;
  }
  var Q = {};
  function F(e, l, c, m) {
    return e && e.replace(/\{\{([\w.-]+)\}\}/g, w.bind(null, l || Q, c, m));
  }
  function w(e, l, c, m, f) {
    for (var b = f.split("."), Z = e, en = 0; en < b.length; en++) {
      if ((Z = Z[b[en]]) == null)
        return "";
      if (Z && Z.type === N)
        return t(Z.props.id, l, c, Z.props.fields, Z.props.plural, Z.props.fallback);
    }
    return typeof Z == "string" && Z.match(/\{\{/) && (Z = F(Z, e)), Z;
  }
  function t(e, l, c, m, f, b) {
    l && (e = l + "." + e);
    var Z = c && k()(c, e);
    return (f || f === 0) && Z && typeof Z == "object" && (Z = Z.splice ? Z[f] || Z[0] : f === 0 && tn(Z.none || Z.zero) ? Z.none || Z.zero : f === 1 && tn(Z.one || Z.singular) ? Z.one || Z.singular : Z.some || Z.many || Z.plural || Z.other || Z), Z && F(Z, m, l, c) || b || null;
  }
  function y(e) {
    var l = e.value, c = e.id, m = (0, _.qp)(W).intl;
    if (m && m.mark) {
      var f = "dictionary" + (m && m.scope ? "." + m.scope : "") + "." + c;
      return (0, o.h)("mark", { style: { background: l ? k()(m, f) ? "rgba(119,231,117,.5)" : "rgba(229,226,41,.5)" : "rgba(228,147,51,.5)" }, title: c }, l);
    }
    return l;
  }
  function N(e) {
    var l = e.id, c = e.children, m = e.plural, f = e.fields, b = (0, _.qp)(W).intl, Z = t(l, b && b.scope, b && b.dictionary, f, m, c);
    return (0, o.h)(y, { id: l, value: Z });
  }
  function H(e, l, c) {
    var m = {};
    for (var f in l = l || {}, e = function(Z) {
      if (typeof (Z = Z || {}) == "string" && (Z = Z.split(",")), "join" in Z) {
        for (var en = {}, dn = 0; dn < Z.length; dn++) {
          var mn = Z[dn].trim();
          mn && (en[mn.split(".").pop()] = mn);
        }
        return en;
      }
      return Z;
    }(e), e)
      if (e.hasOwnProperty(f) && e[f]) {
        var b = e[f];
        c || typeof b != "string" ? b.type === N && (b = pn({ fallback: b.props.children }, b.props), m[f] = t(b.id, l.scope, l.dictionary, b.fields, b.plural, b.fallback)) : m[f] = t(b, l.scope, l.dictionary);
      }
    return m;
  }
  function X(e) {
    var l = e.children, c = (0, _.qp)(W).intl;
    return l && l.length ? l.map(function(m) {
      return (0, o.Tm)(m, H(m.props, c, !0));
    }) : l && (0, o.Tm)(l, H(l.props, c, !0));
  }
  function I(e, l) {
    var c = {};
    for (var m in e)
      Object.prototype.hasOwnProperty.call(e, m) && l.indexOf(m) === -1 && (c[m] = e[m]);
    return c;
  }
  function A(e) {
    var l = e.html, c = e.id, m = I(e, ["html", "id"]);
    return (0, o.h)(y, { id: c, value: l && (typeof l == "string" ? (0, o.h)(Y, Object.assign({}, { type: "html", trim: !1 }, m, { markup: l })) : (0, o.h)("span", null, l)) });
  }
  function i(e) {
    var l = (0, _.qp)(W).intl;
    return H(typeof e == "function" ? e({ intl: l }) : e, l);
  }
  D.intl = D, D.IntlContext = W, D.IntlProvider = x, D.Text = N, D.MarkupText = function(e) {
    var l = e.id, c = e.fields, m = e.plural, f = e.children, b = I(e, ["id", "fields", "plural", "children"]);
    return (0, o.h)(X, null, (0, o.h)(A, Object.assign({}, { html: (0, o.h)(N, { id: l, fields: c, plural: m, children: f }), id: l }, b)));
  }, D.Localizer = X, D.withText = function(e) {
    return function(l) {
      function c(m, f) {
        var b = (0, _.qp)(W).intl, Z = H(typeof e == "function" ? e(m, { intl: b }) : e, b);
        return (0, o.h)(l, pn(pn({}, m), Z));
      }
      return c.getWrappedComponent = l && l.getWrappedComponent || function() {
        return l;
      }, c;
    };
  }, D.useText = i, D.translate = t;
}, 3354: (J, j, n) => {
  n.d(j, { I4: () => o.I4, Vo: () => W, Ye: () => o.Ye, _Y: () => o._Y, az: () => d.az, d4: () => o.d4, eJ: () => o.eJ, kr: () => d.kr, n4: () => R, qp: () => o.qp });
  var d = n(473), o = n(5792);
  function _(i, e) {
    for (var l in e)
      i[l] = e[l];
    return i;
  }
  function h(i, e) {
    for (var l in i)
      if (l !== "__source" && !(l in e))
        return !0;
    for (var c in e)
      if (c !== "__source" && i[c] !== e[c])
        return !0;
    return !1;
  }
  function k(i, e) {
    this.props = i, this.context = e;
  }
  (k.prototype = new d.wA()).isPureReactComponent = !0, k.prototype.shouldComponentUpdate = function(i, e) {
    return h(this.props, i) || h(this.state, e);
  };
  var nn = d.YM.__b;
  d.YM.__b = function(i) {
    i.type && i.type.__f && i.ref && (i.props.ref = i.ref, i.ref = null), nn && nn(i);
  };
  var U = (d.bR, d.YM.__e);
  d.YM.__e = function(i, e, l, c) {
    if (i.then) {
      for (var m, f = e; f = f.__; )
        if ((m = f.__c) && m.__c)
          return e.__e == null && (e.__e = l.__e, e.__k = l.__k), m.__c(i, e);
    }
    U(i, e, l, c);
  };
  var V = d.YM.unmount;
  function P(i, e, l) {
    return i && (i.__c && i.__c.__H && (i.__c.__H.__.forEach(function(c) {
      typeof c.__c == "function" && c.__c();
    }), i.__c.__H = null), (i = _({}, i)).__c != null && (i.__c.__P === l && (i.__c.__P = e), i.__c = null), i.__k = i.__k && i.__k.map(function(c) {
      return P(c, e, l);
    })), i;
  }
  function z(i, e, l) {
    return i && l && (i.__v = null, i.__k = i.__k && i.__k.map(function(c) {
      return z(c, e, l);
    }), i.__c && i.__c.__P === e && (i.__e && l.appendChild(i.__e), i.__c.__e = !0, i.__c.__P = l)), i;
  }
  function R() {
    this.__u = 0, this.t = null, this.__b = null;
  }
  function Y(i) {
    var e = i.__.__c;
    return e && e.__a && e.__a(i);
  }
  function W(i) {
    var e, l, c;
    function m(f) {
      if (e || (e = i()).then(function(b) {
        l = b.default || b;
      }, function(b) {
        c = b;
      }), c)
        throw c;
      if (!l)
        throw e;
      return (0, d.az)(l, f);
    }
    return m.displayName = "Lazy", m.__f = !0, m;
  }
  function tn() {
    this.u = null, this.o = null;
  }
  d.YM.unmount = function(i) {
    var e = i.__c;
    e && e.__R && e.__R(), e && 32 & i.__u && (i.type = null), V && V(i);
  }, (R.prototype = new d.wA()).__c = function(i, e) {
    var l = e.__c, c = this;
    c.t == null && (c.t = []), c.t.push(l);
    var m = Y(c.__v), f = !1, b = function() {
      f || (f = !0, l.__R = null, m ? m(Z) : Z());
    };
    l.__R = b;
    var Z = function() {
      if (!--c.__u) {
        if (c.state.__a) {
          var en = c.state.__a;
          c.__v.__k[0] = z(en, en.__c.__P, en.__c.__O);
        }
        var dn;
        for (c.setState({ __a: c.__b = null }); dn = c.t.pop(); )
          dn.forceUpdate();
      }
    };
    c.__u++ || 32 & e.__u || c.setState({ __a: c.__b = c.__v.__k[0] }), i.then(b, b);
  }, R.prototype.componentWillUnmount = function() {
    this.t = [];
  }, R.prototype.render = function(i, e) {
    if (this.__b) {
      if (this.__v.__k) {
        var l = document.createElement("div"), c = this.__v.__k[0].__c;
        this.__v.__k[0] = P(this.__b, l, c.__O = c.__P);
      }
      this.__b = null;
    }
    var m = e.__a && (0, d.az)(d.HY, null, i.fallback);
    return m && (m.__u &= -33), [(0, d.az)(d.HY, null, e.__a ? null : i.children), m];
  };
  var pn = function(i, e, l) {
    if (++l[1] === l[0] && i.o.delete(e), i.props.revealOrder && (i.props.revealOrder[0] !== "t" || !i.o.size))
      for (l = i.u; l; ) {
        for (; l.length > 3; )
          l.pop()();
        if (l[1] < l[0])
          break;
        i.u = l = l[2];
      }
  };
  (tn.prototype = new d.wA()).__a = function(i) {
    var e = this, l = Y(e.__v), c = e.o.get(i);
    return c[0]++, function(m) {
      var f = function() {
        e.props.revealOrder ? (c.push(m), pn(e, i, c)) : m();
      };
      l ? l(f) : f();
    };
  }, tn.prototype.render = function(i) {
    this.u = null, this.o = /* @__PURE__ */ new Map();
    var e = (0, d.bR)(i.children);
    i.revealOrder && i.revealOrder[0] === "b" && e.reverse();
    for (var l = e.length; l--; )
      this.o.set(e[l], this.u = [1, 0, this.u]);
    return i.children;
  }, tn.prototype.componentDidUpdate = tn.prototype.componentDidMount = function() {
    var i = this;
    this.o.forEach(function(e, l) {
      pn(i, l, e);
    });
  };
  var $ = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, M = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, x = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, D = /[A-Z0-9]/g, Q = typeof document < "u", F = function(i) {
    return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(i);
  };
  d.wA.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(i) {
    Object.defineProperty(d.wA.prototype, i, { configurable: !0, get: function() {
      return this["UNSAFE_" + i];
    }, set: function(e) {
      Object.defineProperty(this, i, { configurable: !0, writable: !0, value: e });
    } });
  });
  var w = d.YM.event;
  function t() {
  }
  function y() {
    return this.cancelBubble;
  }
  function N() {
    return this.defaultPrevented;
  }
  d.YM.event = function(i) {
    return w && (i = w(i)), i.persist = t, i.isPropagationStopped = y, i.isDefaultPrevented = N, i.nativeEvent = i;
  };
  var H = { enumerable: !1, configurable: !0, get: function() {
    return this.class;
  } }, X = d.YM.vnode;
  d.YM.vnode = function(i) {
    typeof i.type == "string" && function(e) {
      var l = e.props, c = e.type, m = {};
      for (var f in l) {
        var b = l[f];
        if (!(f === "value" && "defaultValue" in l && b == null || Q && f === "children" && c === "noscript" || f === "class" || f === "className")) {
          var Z = f.toLowerCase();
          f === "defaultValue" && "value" in l && l.value == null ? f = "value" : f === "download" && b === !0 ? b = "" : Z === "translate" && b === "no" ? b = !1 : Z === "ondoubleclick" ? f = "ondblclick" : Z !== "onchange" || c !== "input" && c !== "textarea" || F(l.type) ? Z === "onfocus" ? f = "onfocusin" : Z === "onblur" ? f = "onfocusout" : x.test(f) ? f = Z : c.indexOf("-") === -1 && M.test(f) ? f = f.replace(D, "-$&").toLowerCase() : b === null && (b = void 0) : Z = f = "oninput", Z === "oninput" && m[f = Z] && (f = "oninputCapture"), m[f] = b;
        }
      }
      c == "select" && m.multiple && Array.isArray(m.value) && (m.value = (0, d.bR)(l.children).forEach(function(en) {
        en.props.selected = m.value.indexOf(en.props.value) != -1;
      })), c == "select" && m.defaultValue != null && (m.value = (0, d.bR)(l.children).forEach(function(en) {
        en.props.selected = m.multiple ? m.defaultValue.indexOf(en.props.value) != -1 : m.defaultValue == en.props.value;
      })), l.class && !l.className ? (m.class = l.class, Object.defineProperty(m, "className", H)) : (l.className && !l.class || l.class && l.className) && (m.class = m.className = l.className), e.props = m;
    }(i), i.$$typeof = $, X && X(i);
  };
  var I = d.YM.__r;
  d.YM.__r = function(i) {
    I && I(i), i.__c;
  };
  var A = d.YM.diffed;
  d.YM.diffed = function(i) {
    A && A(i);
    var e = i.props, l = i.__e;
    l != null && i.type === "textarea" && "value" in e && e.value !== l.value && (l.value = e.value == null ? "" : e.value);
  }, o.I4, o.qp, o.Qb, o.d4, o.Me, o.aP, o.bt, o.Ye, o._Y, o.sO, o.eJ, d.HY, o.bt, o.eJ, o.Me, o._Y, o.d4, o.bt, o.sO, o.aP, o.Ye, o.I4, o.qp, o.Qb, d.az, d.kr, d.Vf, d.HY, d.wA;
}, 473: (J, j, n) => {
  n.d(j, { HY: () => F, Tm: () => xn, Vf: () => Q, YM: () => o, ZB: () => bn, az: () => x, bR: () => i, h: () => x, kr: () => Pn, sY: () => yn, wA: () => w });
  var d, o, _, h, k, nn, U, V, P, z, R, Y = {}, W = [], tn = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, pn = Array.isArray;
  function $(r, a) {
    for (var u in a)
      r[u] = a[u];
    return r;
  }
  function M(r) {
    var a = r.parentNode;
    a && a.removeChild(r);
  }
  function x(r, a, u) {
    var C, T, p, v = {};
    for (p in a)
      p == "key" ? C = a[p] : p == "ref" ? T = a[p] : v[p] = a[p];
    if (arguments.length > 2 && (v.children = arguments.length > 3 ? d.call(arguments, 2) : u), typeof r == "function" && r.defaultProps != null)
      for (p in r.defaultProps)
        v[p] === void 0 && (v[p] = r.defaultProps[p]);
    return D(r, v, C, T, null);
  }
  function D(r, a, u, C, T) {
    var p = { type: r, props: a, key: u, ref: C, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: T ?? ++_, __i: -1, __u: 0 };
    return T == null && o.vnode != null && o.vnode(p), p;
  }
  function Q() {
    return { current: null };
  }
  function F(r) {
    return r.children;
  }
  function w(r, a) {
    this.props = r, this.context = a;
  }
  function t(r, a) {
    if (a == null)
      return r.__ ? t(r.__, r.__i + 1) : null;
    for (var u; a < r.__k.length; a++)
      if ((u = r.__k[a]) != null && u.__e != null)
        return u.__e;
    return typeof r.type == "function" ? t(r) : null;
  }
  function y(r) {
    var a, u;
    if ((r = r.__) != null && r.__c != null) {
      for (r.__e = r.__c.base = null, a = 0; a < r.__k.length; a++)
        if ((u = r.__k[a]) != null && u.__e != null) {
          r.__e = r.__c.base = u.__e;
          break;
        }
      return y(r);
    }
  }
  function N(r) {
    (!r.__d && (r.__d = !0) && h.push(r) && !H.__r++ || k !== o.debounceRendering) && ((k = o.debounceRendering) || nn)(H);
  }
  function H() {
    var r, a, u, C, T, p, v, O;
    for (h.sort(U); r = h.shift(); )
      r.__d && (a = h.length, C = void 0, p = (T = (u = r).__v).__e, v = [], O = [], u.__P && ((C = $({}, T)).__v = T.__v + 1, o.vnode && o.vnode(C), f(u.__P, C, T, u.__n, u.__P.ownerSVGElement !== void 0, 32 & T.__u ? [p] : null, v, p ?? t(T), !!(32 & T.__u), O), C.__v = T.__v, C.__.__k[C.__i] = C, b(v, C, O), C.__e != p && y(C)), h.length > a && h.sort(U));
    H.__r = 0;
  }
  function X(r, a, u, C, T, p, v, O, G, K, an) {
    var E, fn, ln, gn, hn, sn = C && C.__k || W, On = a.length;
    for (u.__d = G, I(u, a, sn), G = u.__d, E = 0; E < On; E++)
      (ln = u.__k[E]) != null && typeof ln != "boolean" && typeof ln != "function" && (fn = ln.__i === -1 ? Y : sn[ln.__i] || Y, ln.__i = E, f(r, ln, fn, T, p, v, O, G, K, an), gn = ln.__e, ln.ref && fn.ref != ln.ref && (fn.ref && en(fn.ref, null, ln), an.push(ln.ref, ln.__c || gn, ln)), hn == null && gn != null && (hn = gn), 65536 & ln.__u || fn.__k === ln.__k ? (G && !G.isConnected && (G = t(fn)), G = A(ln, G, r)) : typeof ln.type == "function" && ln.__d !== void 0 ? G = ln.__d : gn && (G = gn.nextSibling), ln.__d = void 0, ln.__u &= -196609);
    u.__d = G, u.__e = hn;
  }
  function I(r, a, u) {
    var C, T, p, v, O, G = a.length, K = u.length, an = K, E = 0;
    for (r.__k = [], C = 0; C < G; C++)
      v = C + E, (T = r.__k[C] = (T = a[C]) == null || typeof T == "boolean" || typeof T == "function" ? null : typeof T == "string" || typeof T == "number" || typeof T == "bigint" || T.constructor == String ? D(null, T, null, null, null) : pn(T) ? D(F, { children: T }, null, null, null) : T.constructor === void 0 && T.__b > 0 ? D(T.type, T.props, T.key, T.ref ? T.ref : null, T.__v) : T) != null ? (T.__ = r, T.__b = r.__b + 1, O = e(T, u, v, an), T.__i = O, p = null, O !== -1 && (an--, (p = u[O]) && (p.__u |= 131072)), p == null || p.__v === null ? (O == -1 && E--, typeof T.type != "function" && (T.__u |= 65536)) : O !== v && (O === v + 1 ? E++ : O > v ? an > G - v ? E += O - v : E-- : O < v ? O == v - 1 && (E = O - v) : E = 0, O !== C + E && (T.__u |= 65536))) : (p = u[v]) && p.key == null && p.__e && !(131072 & p.__u) && (p.__e == r.__d && (r.__d = t(p)), dn(p, p, !1), u[v] = null, an--);
    if (an)
      for (C = 0; C < K; C++)
        (p = u[C]) != null && !(131072 & p.__u) && (p.__e == r.__d && (r.__d = t(p)), dn(p, p));
  }
  function A(r, a, u) {
    var C, T;
    if (typeof r.type == "function") {
      for (C = r.__k, T = 0; C && T < C.length; T++)
        C[T] && (C[T].__ = r, a = A(C[T], a, u));
      return a;
    }
    r.__e != a && (u.insertBefore(r.__e, a || null), a = r.__e);
    do
      a = a && a.nextSibling;
    while (a != null && a.nodeType === 8);
    return a;
  }
  function i(r, a) {
    return a = a || [], r == null || typeof r == "boolean" || (pn(r) ? r.some(function(u) {
      i(u, a);
    }) : a.push(r)), a;
  }
  function e(r, a, u, C) {
    var T = r.key, p = r.type, v = u - 1, O = u + 1, G = a[u];
    if (G === null || G && T == G.key && p === G.type && !(131072 & G.__u))
      return u;
    if (C > (G != null && !(131072 & G.__u) ? 1 : 0))
      for (; v >= 0 || O < a.length; ) {
        if (v >= 0) {
          if ((G = a[v]) && !(131072 & G.__u) && T == G.key && p === G.type)
            return v;
          v--;
        }
        if (O < a.length) {
          if ((G = a[O]) && !(131072 & G.__u) && T == G.key && p === G.type)
            return O;
          O++;
        }
      }
    return -1;
  }
  function l(r, a, u) {
    a[0] === "-" ? r.setProperty(a, u ?? "") : r[a] = u == null ? "" : typeof u != "number" || tn.test(a) ? u : u + "px";
  }
  function c(r, a, u, C, T) {
    var p;
    n:
      if (a === "style")
        if (typeof u == "string")
          r.style.cssText = u;
        else {
          if (typeof C == "string" && (r.style.cssText = C = ""), C)
            for (a in C)
              u && a in u || l(r.style, a, "");
          if (u)
            for (a in u)
              C && u[a] === C[a] || l(r.style, a, u[a]);
        }
      else if (a[0] === "o" && a[1] === "n")
        p = a !== (a = a.replace(/(PointerCapture)$|Capture$/i, "$1")), a = a.toLowerCase() in r || a === "onFocusOut" || a === "onFocusIn" ? a.toLowerCase().slice(2) : a.slice(2), r.l || (r.l = {}), r.l[a + p] = u, u ? C ? u.u = C.u : (u.u = V, r.addEventListener(a, p ? z : P, p)) : r.removeEventListener(a, p ? z : P, p);
      else {
        if (T)
          a = a.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if (a != "width" && a != "height" && a != "href" && a != "list" && a != "form" && a != "tabIndex" && a != "download" && a != "rowSpan" && a != "colSpan" && a != "role" && a in r)
          try {
            r[a] = u ?? "";
            break n;
          } catch {
          }
        typeof u == "function" || (u == null || u === !1 && a[4] !== "-" ? r.removeAttribute(a) : r.setAttribute(a, u));
      }
  }
  function m(r) {
    return function(a) {
      if (this.l) {
        var u = this.l[a.type + r];
        if (a.t == null)
          a.t = V++;
        else if (a.t < u.u)
          return;
        return u(o.event ? o.event(a) : a);
      }
    };
  }
  function f(r, a, u, C, T, p, v, O, G, K) {
    var an, E, fn, ln, gn, hn, sn, On, Nn, $n, Bn, Tn, An, jn, Cn, En = a.type;
    if (a.constructor !== void 0)
      return null;
    128 & u.__u && (G = !!(32 & u.__u), p = [O = a.__e = u.__e]), (an = o.__b) && an(a);
    n:
      if (typeof En == "function")
        try {
          if (On = a.props, Nn = (an = En.contextType) && C[an.__c], $n = an ? Nn ? Nn.props.value : an.__ : C, u.__c ? sn = (E = a.__c = u.__c).__ = E.__E : ("prototype" in En && En.prototype.render ? a.__c = E = new En(On, $n) : (a.__c = E = new w(On, $n), E.constructor = En, E.render = mn), Nn && Nn.sub(E), E.props = On, E.state || (E.state = {}), E.context = $n, E.__n = C, fn = E.__d = !0, E.__h = [], E._sb = []), E.__s == null && (E.__s = E.state), En.getDerivedStateFromProps != null && (E.__s == E.state && (E.__s = $({}, E.__s)), $(E.__s, En.getDerivedStateFromProps(On, E.__s))), ln = E.props, gn = E.state, E.__v = a, fn)
            En.getDerivedStateFromProps == null && E.componentWillMount != null && E.componentWillMount(), E.componentDidMount != null && E.__h.push(E.componentDidMount);
          else {
            if (En.getDerivedStateFromProps == null && On !== ln && E.componentWillReceiveProps != null && E.componentWillReceiveProps(On, $n), !E.__e && (E.shouldComponentUpdate != null && E.shouldComponentUpdate(On, E.__s, $n) === !1 || a.__v === u.__v)) {
              for (a.__v !== u.__v && (E.props = On, E.state = E.__s, E.__d = !1), a.__e = u.__e, a.__k = u.__k, a.__k.forEach(function(Sn) {
                Sn && (Sn.__ = a);
              }), Bn = 0; Bn < E._sb.length; Bn++)
                E.__h.push(E._sb[Bn]);
              E._sb = [], E.__h.length && v.push(E);
              break n;
            }
            E.componentWillUpdate != null && E.componentWillUpdate(On, E.__s, $n), E.componentDidUpdate != null && E.__h.push(function() {
              E.componentDidUpdate(ln, gn, hn);
            });
          }
          if (E.context = $n, E.props = On, E.__P = r, E.__e = !1, Tn = o.__r, An = 0, "prototype" in En && En.prototype.render) {
            for (E.state = E.__s, E.__d = !1, Tn && Tn(a), an = E.render(E.props, E.state, E.context), jn = 0; jn < E._sb.length; jn++)
              E.__h.push(E._sb[jn]);
            E._sb = [];
          } else
            do
              E.__d = !1, Tn && Tn(a), an = E.render(E.props, E.state, E.context), E.state = E.__s;
            while (E.__d && ++An < 25);
          E.state = E.__s, E.getChildContext != null && (C = $($({}, C), E.getChildContext())), fn || E.getSnapshotBeforeUpdate == null || (hn = E.getSnapshotBeforeUpdate(ln, gn)), X(r, pn(Cn = an != null && an.type === F && an.key == null ? an.props.children : an) ? Cn : [Cn], a, u, C, T, p, v, O, G, K), E.base = a.__e, a.__u &= -161, E.__h.length && v.push(E), sn && (E.__E = E.__ = null);
        } catch (Sn) {
          a.__v = null, G || p != null ? (a.__e = O, a.__u |= G ? 160 : 32, p[p.indexOf(O)] = null) : (a.__e = u.__e, a.__k = u.__k), o.__e(Sn, a, u);
        }
      else
        p == null && a.__v === u.__v ? (a.__k = u.__k, a.__e = u.__e) : a.__e = Z(u.__e, a, u, C, T, p, v, G, K);
    (an = o.diffed) && an(a);
  }
  function b(r, a, u) {
    a.__d = void 0;
    for (var C = 0; C < u.length; C++)
      en(u[C], u[++C], u[++C]);
    o.__c && o.__c(a, r), r.some(function(T) {
      try {
        r = T.__h, T.__h = [], r.some(function(p) {
          p.call(T);
        });
      } catch (p) {
        o.__e(p, T.__v);
      }
    });
  }
  function Z(r, a, u, C, T, p, v, O, G) {
    var K, an, E, fn, ln, gn, hn, sn = u.props, On = a.props, Nn = a.type;
    if (Nn === "svg" && (T = !0), p != null) {
      for (K = 0; K < p.length; K++)
        if ((ln = p[K]) && "setAttribute" in ln == !!Nn && (Nn ? ln.localName === Nn : ln.nodeType === 3)) {
          r = ln, p[K] = null;
          break;
        }
    }
    if (r == null) {
      if (Nn === null)
        return document.createTextNode(On);
      r = T ? document.createElementNS("http://www.w3.org/2000/svg", Nn) : document.createElement(Nn, On.is && On), p = null, O = !1;
    }
    if (Nn === null)
      sn === On || O && r.data === On || (r.data = On);
    else {
      if (p = p && d.call(r.childNodes), sn = u.props || Y, !O && p != null)
        for (sn = {}, K = 0; K < r.attributes.length; K++)
          sn[(ln = r.attributes[K]).name] = ln.value;
      for (K in sn)
        if (ln = sn[K], K != "children") {
          if (K == "dangerouslySetInnerHTML")
            E = ln;
          else if (K !== "key" && !(K in On)) {
            if (K == "value" && "defaultValue" in On || K == "checked" && "defaultChecked" in On)
              continue;
            c(r, K, null, ln, T);
          }
        }
      for (K in On)
        ln = On[K], K == "children" ? fn = ln : K == "dangerouslySetInnerHTML" ? an = ln : K == "value" ? gn = ln : K == "checked" ? hn = ln : K === "key" || O && typeof ln != "function" || sn[K] === ln || c(r, K, ln, sn[K], T);
      if (an)
        O || E && (an.__html === E.__html || an.__html === r.innerHTML) || (r.innerHTML = an.__html), a.__k = [];
      else if (E && (r.innerHTML = ""), X(r, pn(fn) ? fn : [fn], a, u, C, T && Nn !== "foreignObject", p, v, p ? p[0] : u.__k && t(u, 0), O, G), p != null)
        for (K = p.length; K--; )
          p[K] != null && M(p[K]);
      O || (K = "value", gn !== void 0 && (gn !== r[K] || Nn === "progress" && !gn || Nn === "option" && gn !== sn[K]) && c(r, K, gn, sn[K], !1), K = "checked", hn !== void 0 && hn !== r[K] && c(r, K, hn, sn[K], !1));
    }
    return r;
  }
  function en(r, a, u) {
    try {
      typeof r == "function" ? r(a) : r.current = a;
    } catch (C) {
      o.__e(C, u);
    }
  }
  function dn(r, a, u) {
    var C, T;
    if (o.unmount && o.unmount(r), (C = r.ref) && (C.current && C.current !== r.__e || en(C, null, a)), (C = r.__c) != null) {
      if (C.componentWillUnmount)
        try {
          C.componentWillUnmount();
        } catch (p) {
          o.__e(p, a);
        }
      C.base = C.__P = null;
    }
    if (C = r.__k)
      for (T = 0; T < C.length; T++)
        C[T] && dn(C[T], a, u || typeof r.type != "function");
    u || r.__e == null || M(r.__e), r.__c = r.__ = r.__e = r.__d = void 0;
  }
  function mn(r, a, u) {
    return this.constructor(r, u);
  }
  function yn(r, a, u) {
    var C, T, p, v;
    o.__ && o.__(r, a), T = (C = typeof u == "function") ? null : u && u.__k || a.__k, p = [], v = [], f(a, r = (!C && u || a).__k = x(F, null, [r]), T || Y, Y, a.ownerSVGElement !== void 0, !C && u ? [u] : T ? null : a.firstChild ? d.call(a.childNodes) : null, p, !C && u ? u : T ? T.__e : a.firstChild, C, v), b(p, r, v);
  }
  function bn(r, a) {
    yn(r, a, bn);
  }
  function xn(r, a, u) {
    var C, T, p, v, O = $({}, r.props);
    for (p in r.type && r.type.defaultProps && (v = r.type.defaultProps), a)
      p == "key" ? C = a[p] : p == "ref" ? T = a[p] : O[p] = a[p] === void 0 && v !== void 0 ? v[p] : a[p];
    return arguments.length > 2 && (O.children = arguments.length > 3 ? d.call(arguments, 2) : u), D(r.type, O, C || r.key, T || r.ref, null);
  }
  function Pn(r, a) {
    var u = { __c: a = "__cC" + R++, __: r, Consumer: function(C, T) {
      return C.children(T);
    }, Provider: function(C) {
      var T, p;
      return this.getChildContext || (T = [], (p = {})[a] = this, this.getChildContext = function() {
        return p;
      }, this.shouldComponentUpdate = function(v) {
        this.props.value !== v.value && T.some(function(O) {
          O.__e = !0, N(O);
        });
      }, this.sub = function(v) {
        T.push(v);
        var O = v.componentWillUnmount;
        v.componentWillUnmount = function() {
          T.splice(T.indexOf(v), 1), O && O.call(v);
        };
      }), C.children;
    } };
    return u.Provider.__ = u.Consumer.contextType = u;
  }
  d = W.slice, o = { __e: function(r, a, u, C) {
    for (var T, p, v; a = a.__; )
      if ((T = a.__c) && !T.__)
        try {
          if ((p = T.constructor) && p.getDerivedStateFromError != null && (T.setState(p.getDerivedStateFromError(r)), v = T.__d), T.componentDidCatch != null && (T.componentDidCatch(r, C || {}), v = T.__d), v)
            return T.__E = T;
        } catch (O) {
          r = O;
        }
    throw r;
  } }, _ = 0, w.prototype.setState = function(r, a) {
    var u;
    u = this.__s != null && this.__s !== this.state ? this.__s : this.__s = $({}, this.state), typeof r == "function" && (r = r($({}, u), this.props)), r && $(u, r), r != null && this.__v && (a && this._sb.push(a), N(this));
  }, w.prototype.forceUpdate = function(r) {
    this.__v && (this.__e = !0, r && this.__h.push(r), N(this));
  }, w.prototype.render = F, h = [], nn = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, U = function(r, a) {
    return r.__v.__b - a.__v.__b;
  }, H.__r = 0, V = 0, P = m(!1), z = m(!0), R = 0;
}, 5792: (J, j, n) => {
  n.d(j, { I4: () => y, Me: () => X, Qb: () => H, Ye: () => t, _Y: () => x, aP: () => w, bt: () => Q, d4: () => D, eJ: () => M, qp: () => N, sO: () => F });
  var d, o, _, h, k = n(473), nn = 0, U = [], V = [], P = k.YM, z = P.__b, R = P.__r, Y = P.diffed, W = P.__c, tn = P.unmount, pn = P.__;
  function $(f, b) {
    P.__h && P.__h(o, f, nn || b), nn = 0;
    var Z = o.__H || (o.__H = { __: [], __h: [] });
    return f >= Z.__.length && Z.__.push({ __V: V }), Z.__[f];
  }
  function M(f) {
    return nn = 1, x(m, f);
  }
  function x(f, b, Z) {
    var en = $(d++, 2);
    if (en.t = f, !en.__c && (en.__ = [Z ? Z(b) : m(void 0, b), function(bn) {
      var xn = en.__N ? en.__N[0] : en.__[0], Pn = en.t(xn, bn);
      xn !== Pn && (en.__N = [Pn, en.__[1]], en.__c.setState({}));
    }], en.__c = o, !o.u)) {
      var dn = function(bn, xn, Pn) {
        if (!en.__c.__H)
          return !0;
        var r = en.__c.__H.__.filter(function(u) {
          return !!u.__c;
        });
        if (r.every(function(u) {
          return !u.__N;
        }))
          return !mn || mn.call(this, bn, xn, Pn);
        var a = !1;
        return r.forEach(function(u) {
          if (u.__N) {
            var C = u.__[0];
            u.__ = u.__N, u.__N = void 0, C !== u.__[0] && (a = !0);
          }
        }), !(!a && en.__c.props === bn) && (!mn || mn.call(this, bn, xn, Pn));
      };
      o.u = !0;
      var mn = o.shouldComponentUpdate, yn = o.componentWillUpdate;
      o.componentWillUpdate = function(bn, xn, Pn) {
        if (this.__e) {
          var r = mn;
          mn = void 0, dn(bn, xn, Pn), mn = r;
        }
        yn && yn.call(this, bn, xn, Pn);
      }, o.shouldComponentUpdate = dn;
    }
    return en.__N || en.__;
  }
  function D(f, b) {
    var Z = $(d++, 3);
    !P.__s && c(Z.__H, b) && (Z.__ = f, Z.i = b, o.__H.__h.push(Z));
  }
  function Q(f, b) {
    var Z = $(d++, 4);
    !P.__s && c(Z.__H, b) && (Z.__ = f, Z.i = b, o.__h.push(Z));
  }
  function F(f) {
    return nn = 5, t(function() {
      return { current: f };
    }, []);
  }
  function w(f, b, Z) {
    nn = 6, Q(function() {
      return typeof f == "function" ? (f(b()), function() {
        return f(null);
      }) : f ? (f.current = b(), function() {
        return f.current = null;
      }) : void 0;
    }, Z == null ? Z : Z.concat(f));
  }
  function t(f, b) {
    var Z = $(d++, 7);
    return c(Z.__H, b) ? (Z.__V = f(), Z.i = b, Z.__h = f, Z.__V) : Z.__;
  }
  function y(f, b) {
    return nn = 8, t(function() {
      return f;
    }, b);
  }
  function N(f) {
    var b = o.context[f.__c], Z = $(d++, 9);
    return Z.c = f, b ? (Z.__ == null && (Z.__ = !0, b.sub(o)), b.props.value) : f.__;
  }
  function H(f, b) {
    P.useDebugValue && P.useDebugValue(b ? b(f) : f);
  }
  function X() {
    var f = $(d++, 11);
    if (!f.__) {
      for (var b = o.__v; b !== null && !b.__m && b.__ !== null; )
        b = b.__;
      var Z = b.__m || (b.__m = [0, 0]);
      f.__ = "P" + Z[0] + "-" + Z[1]++;
    }
    return f.__;
  }
  function I() {
    for (var f; f = U.shift(); )
      if (f.__P && f.__H)
        try {
          f.__H.__h.forEach(e), f.__H.__h.forEach(l), f.__H.__h = [];
        } catch (b) {
          f.__H.__h = [], P.__e(b, f.__v);
        }
  }
  P.__b = function(f) {
    o = null, z && z(f);
  }, P.__ = function(f, b) {
    f && b.__k && b.__k.__m && (f.__m = b.__k.__m), pn && pn(f, b);
  }, P.__r = function(f) {
    R && R(f), d = 0;
    var b = (o = f.__c).__H;
    b && (_ === o ? (b.__h = [], o.__h = [], b.__.forEach(function(Z) {
      Z.__N && (Z.__ = Z.__N), Z.__V = V, Z.__N = Z.i = void 0;
    })) : (b.__h.forEach(e), b.__h.forEach(l), b.__h = [], d = 0)), _ = o;
  }, P.diffed = function(f) {
    Y && Y(f);
    var b = f.__c;
    b && b.__H && (b.__H.__h.length && (U.push(b) !== 1 && h === P.requestAnimationFrame || ((h = P.requestAnimationFrame) || i)(I)), b.__H.__.forEach(function(Z) {
      Z.i && (Z.__H = Z.i), Z.__V !== V && (Z.__ = Z.__V), Z.i = void 0, Z.__V = V;
    })), _ = o = null;
  }, P.__c = function(f, b) {
    b.some(function(Z) {
      try {
        Z.__h.forEach(e), Z.__h = Z.__h.filter(function(en) {
          return !en.__ || l(en);
        });
      } catch (en) {
        b.some(function(dn) {
          dn.__h && (dn.__h = []);
        }), b = [], P.__e(en, Z.__v);
      }
    }), W && W(f, b);
  }, P.unmount = function(f) {
    tn && tn(f);
    var b, Z = f.__c;
    Z && Z.__H && (Z.__H.__.forEach(function(en) {
      try {
        e(en);
      } catch (dn) {
        b = dn;
      }
    }), Z.__H = void 0, b && P.__e(b, Z.__v));
  };
  var A = typeof requestAnimationFrame == "function";
  function i(f) {
    var b, Z = function() {
      clearTimeout(en), A && cancelAnimationFrame(b), setTimeout(f);
    }, en = setTimeout(Z, 100);
    A && (b = requestAnimationFrame(Z));
  }
  function e(f) {
    var b = o, Z = f.__c;
    typeof Z == "function" && (f.__c = void 0, Z()), o = b;
  }
  function l(f) {
    var b = o;
    f.__c = f.__(), o = b;
  }
  function c(f, b) {
    return !f || f.length !== b.length || b.some(function(Z, en) {
      return Z !== f[en];
    });
  }
  function m(f, b) {
    return typeof b == "function" ? b(f) : b;
  }
}, 1892: (J) => {
  var j = [];
  function n(_) {
    for (var h = -1, k = 0; k < j.length; k++)
      if (j[k].identifier === _) {
        h = k;
        break;
      }
    return h;
  }
  function d(_, h) {
    for (var k = {}, nn = [], U = 0; U < _.length; U++) {
      var V = _[U], P = h.base ? V[0] + h.base : V[0], z = k[P] || 0, R = "".concat(P, " ").concat(z);
      k[P] = z + 1;
      var Y = n(R), W = { css: V[1], media: V[2], sourceMap: V[3], supports: V[4], layer: V[5] };
      if (Y !== -1)
        j[Y].references++, j[Y].updater(W);
      else {
        var tn = o(W, h);
        h.byIndex = U, j.splice(U, 0, { identifier: R, updater: tn, references: 1 });
      }
      nn.push(R);
    }
    return nn;
  }
  function o(_, h) {
    var k = h.domAPI(h);
    return k.update(_), function(nn) {
      if (nn) {
        if (nn.css === _.css && nn.media === _.media && nn.sourceMap === _.sourceMap && nn.supports === _.supports && nn.layer === _.layer)
          return;
        k.update(_ = nn);
      } else
        k.remove();
    };
  }
  J.exports = function(_, h) {
    var k = d(_ = _ || [], h = h || {});
    return function(nn) {
      nn = nn || [];
      for (var U = 0; U < k.length; U++) {
        var V = n(k[U]);
        j[V].references--;
      }
      for (var P = d(nn, h), z = 0; z < k.length; z++) {
        var R = n(k[z]);
        j[R].references === 0 && (j[R].updater(), j.splice(R, 1));
      }
      k = P;
    };
  };
}, 8311: (J) => {
  var j = {};
  J.exports = function(n, d) {
    var o = function(_) {
      if (j[_] === void 0) {
        var h = document.querySelector(_);
        if (window.HTMLIFrameElement && h instanceof window.HTMLIFrameElement)
          try {
            h = h.contentDocument.head;
          } catch {
            h = null;
          }
        j[_] = h;
      }
      return j[_];
    }(n);
    if (!o)
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    o.appendChild(d);
  };
}, 8060: (J) => {
  J.exports = function(j) {
    var n = document.createElement("style");
    return j.setAttributes(n, j.attributes), j.insert(n, j.options), n;
  };
}, 1615: (J) => {
  J.exports = function(j, n) {
    Object.keys(n).forEach(function(d) {
      j.setAttribute(d, n[d]);
    });
  };
}, 5760: (J) => {
  J.exports = function(j) {
    if (typeof document > "u")
      return { update: function() {
      }, remove: function() {
      } };
    var n = j.insertStyleElement(j);
    return { update: function(d) {
      (function(o, _, h) {
        var k = "";
        h.supports && (k += "@supports (".concat(h.supports, ") {")), h.media && (k += "@media ".concat(h.media, " {"));
        var nn = h.layer !== void 0;
        nn && (k += "@layer".concat(h.layer.length > 0 ? " ".concat(h.layer) : "", " {")), k += h.css, nn && (k += "}"), h.media && (k += "}"), h.supports && (k += "}");
        var U = h.sourceMap;
        U && typeof btoa < "u" && (k += `
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(U)))), " */")), _.styleTagTransform(k, o, _.options);
      })(n, j, d);
    }, remove: function() {
      (function(d) {
        if (d.parentNode === null)
          return !1;
        d.parentNode.removeChild(d);
      })(n);
    } };
  };
}, 2754: (J, j, n) => {
  n.d(j, { HY: () => d.HY, tZ: () => _, BX: () => _ }), n(3354);
  var d = n(473), o = 0;
  function _(h, k, nn, U, V, P) {
    k || (k = {});
    var z, R, Y = k;
    if ("ref" in Y)
      for (R in Y = {}, k)
        R == "ref" ? z = k[R] : Y[R] = k[R];
    var W = { type: h, props: Y, key: nn, ref: z, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: --o, __i: -1, __u: 0, __source: V, __self: P };
    if (typeof h == "function" && (z = h.defaultProps))
      for (R in z)
        Y[R] === void 0 && (Y[R] = z[R]);
    return d.YM.vnode && d.YM.vnode(W), W;
  }
} }, Tt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  id: fr,
  ids: mr,
  modules: gr
}, Symbol.toStringTag, { value: "Module" })), vr = 70, _r = [70], yr = { 973: (J, j, n) => {
  n.d(j, { v: () => pn, j: () => tn });
  class d {
    constructor(M) {
      this.config = M;
    }
    getConfig() {
      return this.config;
    }
    setConfig(M) {
      this.config = M;
    }
  }
  var o = n(2743), _ = ["imageParamsKeyMap"];
  function h($, M) {
    var x = Object.keys($);
    if (Object.getOwnPropertySymbols) {
      var D = Object.getOwnPropertySymbols($);
      M && (D = D.filter(function(Q) {
        return Object.getOwnPropertyDescriptor($, Q).enumerable;
      })), x.push.apply(x, D);
    }
    return x;
  }
  function k($) {
    for (var M = 1; M < arguments.length; M++) {
      var x = arguments[M] != null ? arguments[M] : {};
      M % 2 ? h(Object(x), !0).forEach(function(D) {
        U($, D, x[D]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties($, Object.getOwnPropertyDescriptors(x)) : h(Object(x)).forEach(function(D) {
        Object.defineProperty($, D, Object.getOwnPropertyDescriptor(x, D));
      });
    }
    return $;
  }
  function nn($, M) {
    if ($ == null)
      return {};
    var x, D, Q = function(w, t) {
      if (w == null)
        return {};
      var y, N, H = {}, X = Object.keys(w);
      for (N = 0; N < X.length; N++)
        y = X[N], t.indexOf(y) >= 0 || (H[y] = w[y]);
      return H;
    }($, M);
    if (Object.getOwnPropertySymbols) {
      var F = Object.getOwnPropertySymbols($);
      for (D = 0; D < F.length; D++)
        x = F[D], M.indexOf(x) >= 0 || Object.prototype.propertyIsEnumerable.call($, x) && (Q[x] = $[x]);
    }
    return Q;
  }
  function U($, M, x) {
    return (M = function(D) {
      var Q = function(F, w) {
        if (typeof F != "object" || F === null)
          return F;
        var t = F[Symbol.toPrimitive];
        if (t !== void 0) {
          var y = t.call(F, w || "default");
          if (typeof y != "object")
            return y;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (w === "string" ? String : Number)(F);
      }(D, "string");
      return typeof Q == "symbol" ? Q : String(Q);
    }(M)) in $ ? Object.defineProperty($, M, { value: x, enumerable: !0, configurable: !0, writable: !0 }) : $[M] = x, $;
  }
  class V {
    static register(M, x) {
      var D, Q;
      V._mounted && ((D = M.listeners) === null || D === void 0 || D.call(M, x), (Q = M.init) === null || Q === void 0 || Q.call(M, x)), V._initializers.push([M, x]);
    }
    static mount() {
      var M, x;
      V._mounted = !0, (M = V._initializers) === null || M === void 0 || M.forEach((D) => {
        var Q, [F, w] = D;
        (Q = F.listeners) === null || Q === void 0 || Q.call(F, w);
      }), (x = V._initializers) === null || x === void 0 || x.forEach((D) => {
        var Q, [F, w] = D;
        (Q = F.init) === null || Q === void 0 || Q.call(F, k({ imageParamsKeyMap: V._imageParamsKeyMap }, w));
      });
    }
    static setImageParamKeys(M) {
      V._imageParamsKeyMap = M;
    }
  }
  function P($, M) {
    var x = Object.keys($);
    if (Object.getOwnPropertySymbols) {
      var D = Object.getOwnPropertySymbols($);
      M && (D = D.filter(function(Q) {
        return Object.getOwnPropertyDescriptor($, Q).enumerable;
      })), x.push.apply(x, D);
    }
    return x;
  }
  function z($, M, x) {
    return (M = function(D) {
      var Q = function(F, w) {
        if (typeof F != "object" || F === null)
          return F;
        var t = F[Symbol.toPrimitive];
        if (t !== void 0) {
          var y = t.call(F, w || "default");
          if (typeof y != "object")
            return y;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (w === "string" ? String : Number)(F);
      }(D, "string");
      return typeof Q == "symbol" ? Q : String(Q);
    }(M)) in $ ? Object.defineProperty($, M, { value: x, enumerable: !0, configurable: !0, writable: !0 }) : $[M] = x, $;
  }
  function R($, M, x, D, Q, F, w) {
    try {
      var t = $[F](w), y = t.value;
    } catch (N) {
      return void x(N);
    }
    t.done ? M(y) : Promise.resolve(y).then(D, Q);
  }
  U(V, "_initializers", []), U(V, "_mounted", !1), U(V, "_imageParamsKeyMap", void 0);
  var Y, W, tn = new class {
    constructor($) {
      var { init: M, listeners: x } = $;
      U(this, "_listeners", []), U(this, "config", new d({})), this.listeners = (D) => (this._listeners.forEach((Q) => Q.off()), this._listeners = x(D)), this.init = (D) => {
        var Q = D, { imageParamsKeyMap: F } = Q, w = nn(Q, _);
        return this.config.setConfig(k(k({}, this.config.getConfig()), w)), (0, o.J)(F), M(D);
      };
    }
  }({ init: (Y = function* ($) {
    var M = function(x) {
      for (var D = 1; D < arguments.length; D++) {
        var Q = arguments[D] != null ? arguments[D] : {};
        D % 2 ? P(Object(Q), !0).forEach(function(F) {
          z(x, F, Q[F]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(x, Object.getOwnPropertyDescriptors(Q)) : P(Object(Q)).forEach(function(F) {
          Object.defineProperty(x, F, Object.getOwnPropertyDescriptor(Q, F));
        });
      }
      return x;
    }({}, $);
    tn.config.setConfig(M);
  }, W = function() {
    var $ = this, M = arguments;
    return new Promise(function(x, D) {
      var Q = Y.apply($, M);
      function F(t) {
        R(Q, x, D, F, w, "next", t);
      }
      function w(t) {
        R(Q, x, D, F, w, "throw", t);
      }
      F(void 0);
    });
  }, function($) {
    return W.apply(this, arguments);
  }), listeners: () => [] }), pn = tn.config;
}, 5901: (J, j, n) => {
  n.d(j, { s: () => Pn });
  var d = n(473), o = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i, _ = /^(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)$/, h = /[\s\n\\/='"\0<>]/, k = /^xlink:?./, nn = /["&<]/;
  function U(r) {
    if (nn.test(r += "") === !1)
      return r;
    for (var a = 0, u = 0, C = "", T = ""; u < r.length; u++) {
      switch (r.charCodeAt(u)) {
        case 34:
          T = "&quot;";
          break;
        case 38:
          T = "&amp;";
          break;
        case 60:
          T = "&lt;";
          break;
        default:
          continue;
      }
      u !== a && (C += r.slice(a, u)), C += T, a = u + 1;
    }
    return u !== a && (C += r.slice(a, u)), C;
  }
  var V = function(r, a) {
    return String(r).replace(/(\n+)/g, "$1" + (a || "	"));
  }, P = function(r, a, u) {
    return String(r).length > 40 || String(r).indexOf(`
`) !== -1 || String(r).indexOf("<") !== -1;
  }, z = {}, R = /([A-Z])/g;
  function Y(r) {
    var a = "";
    for (var u in r) {
      var C = r[u];
      C != null && C !== "" && (a && (a += " "), a += u[0] == "-" ? u : z[u] || (z[u] = u.replace(R, "-$1").toLowerCase()), a = typeof C == "number" && o.test(u) === !1 ? a + ": " + C + "px;" : a + ": " + C + ";");
    }
    return a || void 0;
  }
  function W(r, a) {
    return Array.isArray(a) ? a.reduce(W, r) : a != null && a !== !1 && r.push(a), r;
  }
  function tn() {
    this.__d = !0;
  }
  function pn(r, a) {
    return { __v: r, context: a, props: r.props, setState: tn, forceUpdate: tn, __d: !0, __h: [] };
  }
  function $(r, a) {
    var u = r.contextType, C = u && a[u.__c];
    return u != null ? C ? C.props.value : u.__ : a;
  }
  var M = [];
  function x(r, a, u, C, T, p) {
    if (r == null || typeof r == "boolean")
      return "";
    if (typeof r != "object")
      return typeof r == "function" ? "" : U(r);
    var v = u.pretty, O = v && typeof v == "string" ? v : "	";
    if (Array.isArray(r)) {
      for (var G = "", K = 0; K < r.length; K++)
        v && K > 0 && (G += `
`), G += x(r[K], a, u, C, T, p);
      return G;
    }
    if (r.constructor !== void 0)
      return "";
    var an, E = r.type, fn = r.props, ln = !1;
    if (typeof E == "function") {
      if (ln = !0, !u.shallow || !C && u.renderRootComponent !== !1) {
        if (E === d.HY) {
          var gn = [];
          return W(gn, r.props.children), x(gn, a, u, u.shallowHighOrder !== !1, T, p);
        }
        var hn, sn = r.__c = pn(r, a);
        d.YM.__b && d.YM.__b(r);
        var On = d.YM.__r;
        if (E.prototype && typeof E.prototype.render == "function") {
          var Nn = $(E, a);
          (sn = r.__c = new E(fn, Nn)).__v = r, sn._dirty = sn.__d = !0, sn.props = fn, sn.state == null && (sn.state = {}), sn._nextState == null && sn.__s == null && (sn._nextState = sn.__s = sn.state), sn.context = Nn, E.getDerivedStateFromProps ? sn.state = Object.assign({}, sn.state, E.getDerivedStateFromProps(sn.props, sn.state)) : sn.componentWillMount && (sn.componentWillMount(), sn.state = sn._nextState !== sn.state ? sn._nextState : sn.__s !== sn.state ? sn.__s : sn.state), On && On(r), hn = sn.render(sn.props, sn.state, sn.context);
        } else
          for (var $n = $(E, a), Bn = 0; sn.__d && Bn++ < 25; )
            sn.__d = !1, On && On(r), hn = E.call(r.__c, fn, $n);
        return sn.getChildContext && (a = Object.assign({}, a, sn.getChildContext())), d.YM.diffed && d.YM.diffed(r), x(hn, a, u, u.shallowHighOrder !== !1, T, p);
      }
      E = (an = E).displayName || an !== Function && an.name || function(gt) {
        var yt = (Function.prototype.toString.call(gt).match(/^\s*function\s+([^( ]+)/) || "")[1];
        if (!yt) {
          for (var vt = -1, bt = M.length; bt--; )
            if (M[bt] === gt) {
              vt = bt;
              break;
            }
          vt < 0 && (vt = M.push(gt) - 1), yt = "UnnamedComponent" + vt;
        }
        return yt;
      }(an);
    }
    var Tn, An, jn = "<" + E;
    if (fn) {
      var Cn = Object.keys(fn);
      u && u.sortAttributes === !0 && Cn.sort();
      for (var En = 0; En < Cn.length; En++) {
        var Sn = Cn[En], Dn = fn[Sn];
        if (Sn !== "children") {
          if (!h.test(Sn) && (u && u.allAttributes || Sn !== "key" && Sn !== "ref" && Sn !== "__self" && Sn !== "__source")) {
            if (Sn === "defaultValue")
              Sn = "value";
            else if (Sn === "defaultChecked")
              Sn = "checked";
            else if (Sn === "defaultSelected")
              Sn = "selected";
            else if (Sn === "className") {
              if (fn.class !== void 0)
                continue;
              Sn = "class";
            } else
              T && k.test(Sn) && (Sn = Sn.toLowerCase().replace(/^xlink:?/, "xlink:"));
            if (Sn === "htmlFor") {
              if (fn.for)
                continue;
              Sn = "for";
            }
            Sn === "style" && Dn && typeof Dn == "object" && (Dn = Y(Dn)), Sn[0] === "a" && Sn[1] === "r" && typeof Dn == "boolean" && (Dn = String(Dn));
            var Zn = u.attributeHook && u.attributeHook(Sn, Dn, a, u, ln);
            if (Zn || Zn === "")
              jn += Zn;
            else if (Sn === "dangerouslySetInnerHTML")
              An = Dn && Dn.__html;
            else if (E === "textarea" && Sn === "value")
              Tn = Dn;
            else if ((Dn || Dn === 0 || Dn === "") && typeof Dn != "function") {
              if (!(Dn !== !0 && Dn !== "" || (Dn = Sn, u && u.xml))) {
                jn = jn + " " + Sn;
                continue;
              }
              if (Sn === "value") {
                if (E === "select") {
                  p = Dn;
                  continue;
                }
                E === "option" && p == Dn && fn.selected === void 0 && (jn += " selected");
              }
              jn = jn + " " + Sn + '="' + U(Dn) + '"';
            }
          }
        } else
          Tn = Dn;
      }
    }
    if (v) {
      var Yn = jn.replace(/\n\s*/, " ");
      Yn === jn || ~Yn.indexOf(`
`) ? v && ~jn.indexOf(`
`) && (jn += `
`) : jn = Yn;
    }
    if (jn += ">", h.test(E))
      throw new Error(E + " is not a valid HTML tag name in " + jn);
    var qn, ot = _.test(E) || u.voidElements && u.voidElements.test(E), tt = [];
    if (An)
      v && P(An) && (An = `
` + O + V(An, O)), jn += An;
    else if (Tn != null && W(qn = [], Tn).length) {
      for (var et = v && ~jn.indexOf(`
`), lt = !1, dt = 0; dt < qn.length; dt++) {
        var ct = qn[dt];
        if (ct != null && ct !== !1) {
          var ft = x(ct, a, u, !0, E === "svg" || E !== "foreignObject" && T, p);
          if (v && !et && P(ft) && (et = !0), ft)
            if (v) {
              var wt = ft.length > 0 && ft[0] != "<";
              lt && wt ? tt[tt.length - 1] += ft : tt.push(ft), lt = wt;
            } else
              tt.push(ft);
        }
      }
      if (v && et)
        for (var _t = tt.length; _t--; )
          tt[_t] = `
` + O + V(tt[_t], O);
    }
    if (tt.length || An)
      jn += tt.join("");
    else if (u && u.xml)
      return jn.substring(0, jn.length - 1) + " />";
    return !ot || qn || An ? (v && ~jn.indexOf(`
`) && (jn += `
`), jn = jn + "</" + E + ">") : jn = jn.replace(/>$/, " />"), jn;
  }
  var D = { shallow: !0 };
  F.render = F;
  var Q = [];
  function F(r, a, u) {
    a = a || {};
    var C = d.YM.__s;
    d.YM.__s = !0;
    var T, p = (0, d.h)(d.HY, null);
    return p.__k = [r], T = u && (u.pretty || u.voidElements || u.sortAttributes || u.shallow || u.allAttributes || u.xml || u.attributeHook) ? x(r, a, u) : X(r, a, !1, void 0, p), d.YM.__c && d.YM.__c(r, Q), d.YM.__s = C, Q.length = 0, T;
  }
  function w(r) {
    return r == null || typeof r == "boolean" ? null : typeof r == "string" || typeof r == "number" || typeof r == "bigint" ? (0, d.h)(null, null, r) : r;
  }
  function t(r, a) {
    return r === "className" ? "class" : r === "htmlFor" ? "for" : r === "defaultValue" ? "value" : r === "defaultChecked" ? "checked" : r === "defaultSelected" ? "selected" : a && k.test(r) ? r.toLowerCase().replace(/^xlink:?/, "xlink:") : r;
  }
  function y(r, a) {
    return r === "style" && a != null && typeof a == "object" ? Y(a) : r[0] === "a" && r[1] === "r" && typeof a == "boolean" ? String(a) : a;
  }
  var N = Array.isArray, H = Object.assign;
  function X(r, a, u, C, T) {
    if (r == null || r === !0 || r === !1 || r === "")
      return "";
    if (typeof r != "object")
      return typeof r == "function" ? "" : U(r);
    if (N(r)) {
      var p = "";
      T.__k = r;
      for (var v = 0; v < r.length; v++)
        p += X(r[v], a, u, C, T), r[v] = w(r[v]);
      return p;
    }
    if (r.constructor !== void 0)
      return "";
    r.__ = T, d.YM.__b && d.YM.__b(r);
    var O = r.type, G = r.props;
    if (typeof O == "function") {
      var K;
      if (O === d.HY)
        K = G.children;
      else {
        K = O.prototype && typeof O.prototype.render == "function" ? function(Cn, En) {
          var Sn = Cn.type, Dn = $(Sn, En), Zn = new Sn(Cn.props, Dn);
          Cn.__c = Zn, Zn.__v = Cn, Zn.__d = !0, Zn.props = Cn.props, Zn.state == null && (Zn.state = {}), Zn.__s == null && (Zn.__s = Zn.state), Zn.context = Dn, Sn.getDerivedStateFromProps ? Zn.state = H({}, Zn.state, Sn.getDerivedStateFromProps(Zn.props, Zn.state)) : Zn.componentWillMount && (Zn.componentWillMount(), Zn.state = Zn.__s !== Zn.state ? Zn.__s : Zn.state);
          var Yn = d.YM.__r;
          return Yn && Yn(Cn), Zn.render(Zn.props, Zn.state, Zn.context);
        }(r, a) : function(Cn, En) {
          var Sn, Dn = pn(Cn, En), Zn = $(Cn.type, En);
          Cn.__c = Dn;
          for (var Yn = d.YM.__r, qn = 0; Dn.__d && qn++ < 25; )
            Dn.__d = !1, Yn && Yn(Cn), Sn = Cn.type.call(Dn, Cn.props, Zn);
          return Sn;
        }(r, a);
        var an = r.__c;
        an.getChildContext && (a = H({}, a, an.getChildContext()));
      }
      var E = X(K = K != null && K.type === d.HY && K.key == null ? K.props.children : K, a, u, C, r);
      return d.YM.diffed && d.YM.diffed(r), r.__ = void 0, d.YM.unmount && d.YM.unmount(r), E;
    }
    var fn, ln, gn = "<";
    if (gn += O, G)
      for (var hn in fn = G.children, G) {
        var sn = G[hn];
        if (!(hn === "key" || hn === "ref" || hn === "__self" || hn === "__source" || hn === "children" || hn === "className" && "class" in G || hn === "htmlFor" && "for" in G || h.test(hn))) {
          if (sn = y(hn = t(hn, u), sn), hn === "dangerouslySetInnerHTML")
            ln = sn && sn.__html;
          else if (O === "textarea" && hn === "value")
            fn = sn;
          else if ((sn || sn === 0 || sn === "") && typeof sn != "function") {
            if (sn === !0 || sn === "") {
              sn = hn, gn = gn + " " + hn;
              continue;
            }
            if (hn === "value") {
              if (O === "select") {
                C = sn;
                continue;
              }
              O !== "option" || C != sn || "selected" in G || (gn += " selected");
            }
            gn = gn + " " + hn + '="' + U(sn) + '"';
          }
        }
      }
    var On = gn;
    if (gn += ">", h.test(O))
      throw new Error(O + " is not a valid HTML tag name in " + gn);
    var Nn = "", $n = !1;
    if (ln)
      Nn += ln, $n = !0;
    else if (typeof fn == "string")
      Nn += U(fn), $n = !0;
    else if (N(fn)) {
      r.__k = fn;
      for (var Bn = 0; Bn < fn.length; Bn++) {
        var Tn = fn[Bn];
        if (fn[Bn] = w(Tn), Tn != null && Tn !== !1) {
          var An = X(Tn, a, O === "svg" || O !== "foreignObject" && u, C, r);
          An && (Nn += An, $n = !0);
        }
      }
    } else if (fn != null && fn !== !1 && fn !== !0) {
      r.__k = [w(fn)];
      var jn = X(fn, a, O === "svg" || O !== "foreignObject" && u, C, r);
      jn && (Nn += jn, $n = !0);
    }
    if (d.YM.diffed && d.YM.diffed(r), r.__ = void 0, d.YM.unmount && d.YM.unmount(r), $n)
      gn += Nn;
    else if (_.test(O))
      return On + " />";
    return gn + "</" + O + ">";
  }
  F.shallowRender = function(r, a) {
    return F(r, a, D);
  };
  const I = F;
  var A = n(1177), i = n(2754);
  function e(r, a) {
    var u = Object.keys(r);
    if (Object.getOwnPropertySymbols) {
      var C = Object.getOwnPropertySymbols(r);
      a && (C = C.filter(function(T) {
        return Object.getOwnPropertyDescriptor(r, T).enumerable;
      })), u.push.apply(u, C);
    }
    return u;
  }
  function l(r) {
    for (var a = 1; a < arguments.length; a++) {
      var u = arguments[a] != null ? arguments[a] : {};
      a % 2 ? e(Object(u), !0).forEach(function(C) {
        c(r, C, u[C]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(u)) : e(Object(u)).forEach(function(C) {
        Object.defineProperty(r, C, Object.getOwnPropertyDescriptor(u, C));
      });
    }
    return r;
  }
  function c(r, a, u) {
    return (a = function(C) {
      var T = function(p, v) {
        if (typeof p != "object" || p === null)
          return p;
        var O = p[Symbol.toPrimitive];
        if (O !== void 0) {
          var G = O.call(p, v || "default");
          if (typeof G != "object")
            return G;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (v === "string" ? String : Number)(p);
      }(C, "string");
      return typeof T == "symbol" ? T : String(T);
    }(a)) in r ? Object.defineProperty(r, a, { value: u, enumerable: !0, configurable: !0, writable: !0 }) : r[a] = u, r;
  }
  function m(r, a, u, C, T, p, v) {
    try {
      var O = r[p](v), G = O.value;
    } catch (K) {
      return void u(K);
    }
    O.done ? a(G) : Promise.resolve(G).then(C, T);
  }
  function f(r) {
    return function() {
      var a = this, u = arguments;
      return new Promise(function(C, T) {
        var p = r.apply(a, u);
        function v(G) {
          m(p, C, T, v, O, "next", G);
        }
        function O(G) {
          m(p, C, T, v, O, "throw", G);
        }
        v(void 0);
      });
    };
  }
  var b = n(5792), Z = n(5406);
  const en = ((r) => {
    var a = {};
    return n.d(a, r), a;
  })({ events: () => Yt });
  var dn = n(973), mn = n(1857), yn = n.n(mn), bn = { default: n(7770) }, xn = (r) => {
    var a, { children: u } = r, [C, T] = (0, b.eJ)(), p = (a = dn.v.getConfig()) === null || a === void 0 ? void 0 : a.langDefinitions;
    (0, b.d4)(() => {
      var O = en.events.on("locale", (G) => {
        G !== C && T(G);
      }, { eager: !0 });
      return () => {
        O == null || O.off();
      };
    }, [C]);
    var v = yn()(bn, p ?? {});
    return (0, i.tZ)(Z.J, { lang: C, langDefinitions: v, children: u });
  }, Pn = new class {
    constructor(r) {
      this._provider = r;
    }
    render(r, a) {
      var u = this;
      return function() {
        var C = f(function* (T) {
          var p, v;
          if (!r)
            throw new Error("Component is not defined");
          if (!T)
            throw new Error("Root element is not defined");
          var O = (p = yield (v = r.getInitialData) === null || v === void 0 ? void 0 : v.call(r, a)) !== null && p !== void 0 ? p : {};
          (0, d.sY)((0, i.tZ)(A.F, l(l({ node: u._provider }, u._provider.props), {}, { children: (0, i.tZ)(r, l(l({}, a), {}, { initialData: O })) })), T);
        });
        return function(T) {
          return C.apply(this, arguments);
        };
      }();
    }
    unmount(r) {
      if (!r)
        throw new Error("Root element is not defined");
      (0, d.sY)(null, r);
    }
    toString(r, a, u) {
      var C = this;
      return f(function* () {
        var T, p;
        if (!r)
          throw new Error("Component is not defined");
        var v = (T = yield (p = r.getInitialData) === null || p === void 0 ? void 0 : p.call(r, a)) !== null && T !== void 0 ? T : {};
        return I((0, i.tZ)(A.F, l(l({ node: C._provider }, C._provider.props), {}, { children: (0, i.tZ)(r, l(l({}, a), {}, { initialData: v })) })), {}, l({}, u));
      })();
    }
  }((0, i.tZ)(xn, {}));
}, 7770: (J) => {
  J.exports = JSON.parse('{"OrderConfirmation":{"Header":{"title":"{{name}}, thank you for your order!","defaultTitle":"Thank you for your order!","order":"ORDER #{{order}}"},"InlineAlert":{"dismissLabel":"Dismiss Alert"},"OrderSearchForm":{"title":"Enter your information to view order details","description":"You can find your order number in the receipt you received via email.","button":"View Order","email":"Email","postcode":"Zip Code","orderNumber":"Order Number"},"OrderSummary":{"title":"Order summary","total":"Total","totalExclTax":"Total excluding taxes","subtotal":"Subtotal","tax":"Tax","taxTotal":"Tax total","taxBreakdown":"Taxes","includingTaxes":"Including taxes","shipping":"Shipping","freeShipping":"Free shipping"},"Message":{"title":"Your order is confirmed","description":"We have successfully processed your order and will be soon prepared for shipping. <br /> You will also receive an email with details and we will let you know when your order has shipped."},"Details":{"title":"Order details","contact":"Contact details","shippingAddress":"Shipping address","billingAddress":"Billing address","shippingMethod":"Shipping method","freeShipping":"Free shipping","paymentMethod":"Payment method"},"Footer":{"continueShopping":"Continue shopping","help":"Need help?","contactSupport":"Contact us"},"CartSummary":{"title":"Your order","GiftCard":{"sender":"Sender","recipient":"Recipient"}},"Errors":{"invalidOrder":"Invalid order. Please try again.","invalidSearch":"No order found with these order details.","unknown":"Something went wrong. Please try again."}}}');
} };
Hn.C(Tt);
Hn.C(Kt);
var Et, Mt = (Et = 5901, Hn(Hn.s = Et)).s;
const br = 307, hr = [307], wr = { 1676: (J, j, n) => {
  n.r(j), n.d(j, { default: () => h });
  var d, o = n(3354);
  function _() {
    return _ = Object.assign ? Object.assign.bind() : function(k) {
      for (var nn = 1; nn < arguments.length; nn++) {
        var U = arguments[nn];
        for (var V in U)
          Object.prototype.hasOwnProperty.call(U, V) && (k[V] = U[V]);
      }
      return k;
    }, _.apply(this, arguments);
  }
  const h = function(k) {
    return o.az("svg", _({ "data-name": "Icon \\u2013 Add \\u2013 Base", xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24 }, k), d || (d = o.az("g", { "data-name": "Add icon", fill: "none", stroke: "currentColor" }, o.az("path", { vectorEffect: "non-scaling-stroke", "data-name": "Line 579", d: "M11.95 5.65v12.7" }), o.az("path", { vectorEffect: "non-scaling-stroke", "data-name": "Line 580", d: "M5.655 12h12.7" }))));
  };
}, 6553: (J, j, n) => {
  n.r(j), n.d(j, { default: () => k });
  var d, o, _ = n(3354);
  function h() {
    return h = Object.assign ? Object.assign.bind() : function(nn) {
      for (var U = 1; U < arguments.length; U++) {
        var V = arguments[U];
        for (var P in V)
          Object.prototype.hasOwnProperty.call(V, P) && (nn[P] = V[P]);
      }
      return nn;
    }, h.apply(this, arguments);
  }
  const k = function(nn) {
    return _.az("svg", h({ width: 24, height: 24, fill: "none", xmlns: "http://www.w3.org/2000/svg" }, nn), d || (d = _.az("path", { vectorEffect: "non-scaling-stroke", d: "M.75 12C.75 5.784 5.784.75 12 .75S23.25 5.784 23.25 12 18.216 23.25 12 23.25.75 18.216.75 12Z", stroke: "currentColor" })), o || (o = _.az("path", { vectorEffect: "non-scaling-stroke", d: "m6.75 12.762 3.489 2.988L17.25 9", stroke: "currentColor" })));
  };
}, 7498: (J, j, n) => {
  n.r(j), n.d(j, { default: () => h });
  var d, o = n(3354);
  function _() {
    return _ = Object.assign ? Object.assign.bind() : function(k) {
      for (var nn = 1; nn < arguments.length; nn++) {
        var U = arguments[nn];
        for (var V in U)
          Object.prototype.hasOwnProperty.call(U, V) && (k[V] = U[V]);
      }
      return k;
    }, _.apply(this, arguments);
  }
  const h = function(k) {
    return o.az("svg", _({ width: 24, height: 24, fill: "none", xmlns: "http://www.w3.org/2000/svg" }, k), d || (d = o.az("path", { vectorEffect: "non-scaling-stroke", d: "M18.36 5.64 5.63 18.37M18.36 18.37 5.63 5.64", stroke: "currentColor" })));
  };
}, 2504: (J, j, n) => {
  n.r(j), n.d(j, { default: () => h });
  var d, o = n(3354);
  function _() {
    return _ = Object.assign ? Object.assign.bind() : function(k) {
      for (var nn = 1; nn < arguments.length; nn++) {
        var U = arguments[nn];
        for (var V in U)
          Object.prototype.hasOwnProperty.call(U, V) && (k[V] = U[V]);
      }
      return k;
    }, _.apply(this, arguments);
  }
  const h = function(k) {
    return o.az("svg", _({ width: 24, height: 24, fill: "none", xmlns: "http://www.w3.org/2000/svg" }, k), d || (d = o.az("path", { d: "M17.333 11.75H6.667", strokeWidth: 1.5, strokeLinecap: "square", strokeLinejoin: "round", vectorEffect: "non-scaling-stroke", stroke: "currentColor" })));
  };
}, 8174: (J, j, n) => {
  n.r(j), n.d(j, { default: () => k });
  var d, o, _ = n(3354);
  function h() {
    return h = Object.assign ? Object.assign.bind() : function(nn) {
      for (var U = 1; U < arguments.length; U++) {
        var V = arguments[U];
        for (var P in V)
          Object.prototype.hasOwnProperty.call(V, P) && (nn[P] = V[P]);
      }
      return nn;
    }, h.apply(this, arguments);
  }
  const k = function(nn) {
    return _.az("svg", h({ width: 24, height: 24, fill: "none", xmlns: "http://www.w3.org/2000/svg" }, nn), d || (d = _.az("g", { clipPath: "url(#OrderSuccess_svg__a)", stroke: "currentColor" }, _.az("path", { vectorEffect: "non-scaling-stroke", d: "M10.15 20.85 1.5 17.53V6.63L10.15 10v10.85Z", strokeLinecap: "round", strokeLinejoin: "round" }), _.az("path", { vectorEffect: "non-scaling-stroke", d: "m1.5 6.63 8.65-3.43 8.65 3.43L10.15 10 1.5 6.63Z", strokeLinecap: "round", strokeLinejoin: "round" }), _.az("path", { vectorEffect: "non-scaling-stroke", d: "m6.18 4.77 8.65 3.38v3.32", strokeLinecap: "round", strokeLinejoin: "round" }), _.az("path", { vectorEffect: "non-scaling-stroke", d: "M18.79 12.64V6.63L10.14 10v10.85l4.69-1.8", strokeLinejoin: "round" }), _.az("path", { className: "OrderSuccess_svg__success-icon", vectorEffect: "non-scaling-stroke", d: "M15.71 17.26c0-1.88 1.52-3.4 3.4-3.4s3.4 1.52 3.4 3.4-1.52 3.4-3.4 3.4-3.4-1.52-3.4-3.4Z" }), _.az("path", { className: "OrderSuccess_svg__success-icon", vectorEffect: "non-scaling-stroke", d: "m17.48 17.49 1.08.92 2.16-2.08", strokeLinecap: "square", strokeLinejoin: "round" }))), o || (o = _.az("defs", null, _.az("clipPath", { id: "OrderSuccess_svg__a" }, _.az("path", { fill: "#fff", transform: "translate(1 2.7)", d: "M0 0h22v18.65H0z" })))));
  };
}, 2734: (J, j, n) => {
  n.r(j), n.d(j, { default: () => h });
  var d, o = n(3354);
  function _() {
    return _ = Object.assign ? Object.assign.bind() : function(k) {
      for (var nn = 1; nn < arguments.length; nn++) {
        var U = arguments[nn];
        for (var V in U)
          Object.prototype.hasOwnProperty.call(U, V) && (k[V] = U[V]);
      }
      return k;
    }, _.apply(this, arguments);
  }
  const h = function(k) {
    return o.az("svg", _({ xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, fill: "none" }, k), d || (d = o.az("path", { d: "M1 5h22M17.367 22H6.634c-.954 0-1.744-.731-1.796-1.666L4 5h16l-.838 15.334c-.05.935-.84 1.666-1.796 1.666h.001ZM9.872 2h4.256c.48 0 .872.398.872.889V5H9V2.889c0-.49.39-.889.872-.889ZM8.874 8.58l.52 9.102M14.667 8.58l-.521 9.102", stroke: "#000", strokeWidth: 1.5, strokeMiterlimit: 10 })));
  };
}, 2605: (J, j, n) => {
  n.r(j), n.d(j, { default: () => h });
  var d, o = n(3354);
  function _() {
    return _ = Object.assign ? Object.assign.bind() : function(k) {
      for (var nn = 1; nn < arguments.length; nn++) {
        var U = arguments[nn];
        for (var V in U)
          Object.prototype.hasOwnProperty.call(U, V) && (k[V] = U[V]);
      }
      return k;
    }, _.apply(this, arguments);
  }
  const h = function(k) {
    return o.az("svg", _({ width: 24, height: 24, fill: "none", xmlns: "http://www.w3.org/2000/svg" }, k), d || (d = o.az("path", { vectorEffect: "non-scaling-stroke", fillRule: "evenodd", clipRule: "evenodd", d: "M1 20.895 12.192 1.5l11.203 19.395H1Zm12.028-6.931.222-3.926V9h-2v1.038l.222 3.926h1.556ZM11.299 16v1.75h1.926V16H11.3Z", fill: "currentColor" })));
  };
}, 8420: (J, j, n) => {
  n.r(j), n.d(j, { default: () => k });
  var d, o, _ = n(3354);
  function h() {
    return h = Object.assign ? Object.assign.bind() : function(nn) {
      for (var U = 1; U < arguments.length; U++) {
        var V = arguments[U];
        for (var P in V)
          Object.prototype.hasOwnProperty.call(V, P) && (nn[P] = V[P]);
      }
      return nn;
    }, h.apply(this, arguments);
  }
  const k = function(nn) {
    return _.az("svg", h({ width: 24, height: 24, fill: "none", xmlns: "http://www.w3.org/2000/svg" }, nn), d || (d = _.az("path", { vectorEffect: "non-scaling-stroke", d: "M.75 12C.75 5.784 5.784.75 12 .75S23.25 5.784 23.25 12 18.216 23.25 12 23.25.75 18.216.75 12Z", stroke: "currentColor" })), o || (o = _.az("path", { vectorEffect: "non-scaling-stroke", d: "M11.75 5.884V4.75h.5v1.134l-.201 7.187h-.098l-.201-7.187Zm.05 12.366v-1.263h.425v1.263H11.8Z", stroke: "currentColor" })));
  };
}, 6816: (J, j, n) => {
  n.d(j, { z: () => F });
  var d = n(5587), o = n(1177), _ = n(1892), h = n.n(_), k = n(5760), nn = n.n(k), U = n(8311), V = n.n(U), P = n(1615), z = n.n(P), R = n(8060), Y = n.n(R), W = n(8534), tn = { attributes: { "data-dropin": "storefront-order-confirmation", "data-sdk": "0.22.0" }, styleTagTransform: function(w, t) {
    var e;
    window._loadedStyles = window._loadedStyles ?? {};
    const y = (e = w == null ? void 0 : w.match(/^\.dropin-(\w+)/)) == null ? void 0 : e[1], N = t.getAttribute("data-sdk"), H = y ? `sdk/${y}` : t.getAttribute("data-dropin");
    t.setAttribute("data-dropin", H), t.removeAttribute("data-sdk");
    const X = window._loadedStyles[H];
    if (X) {
      const l = function(c, m) {
        const [f, b] = c.split("-"), [Z, en] = m.split("-"), dn = [...f.split("."), b], mn = [...Z.split("."), en], yn = parseInt(dn[0], 10), bn = parseInt(mn[0], 10);
        if (yn !== bn)
          return yn > bn ? c : m;
        const xn = parseInt(dn[1], 10), Pn = parseInt(mn[1], 10);
        if (xn !== Pn)
          return xn > Pn ? c : m;
        const r = parseInt(dn[2], 10), a = parseInt(mn[2], 10);
        if (r !== a)
          return r > a ? c : m;
        if (dn[3] && mn[3]) {
          const u = /(alpha|beta)(.*)/, C = dn[3].match(u), T = mn[3].match(u), p = C[1], v = T[1], O = parseInt(C[2], 10), G = parseInt(T[2], 10);
          if (p === v)
            return O > G ? c : m;
          if (p === "alpha" && v === "beta")
            return m;
          if (p === "beta" && v === "alpha")
            return c;
        }
        return dn[3] ? m : c;
      }(N, X.sdk);
      if (!y || y && l === X.sdk) {
        const c = X.style.textContent;
        X.style.textContent = `${c}
/* --- MERGED --- */
${w}`;
      } else
        y && l !== X.sdk && (X.style.textContent = `/* --- UPGRADED --- */
${w}`);
      return void t.remove();
    }
    t.textContent = w, window._loadedStyles[H] = { sdk: N, core: y, style: t };
    const I = document.querySelector("head"), { lastDropinStyleInjected: A, lastSDKStyleInjected: i } = window._loadedStyles;
    y ? (i ? I.insertBefore(t, i.nextSibling) : I.insertBefore(t, I.firstChild), window._loadedStyles.lastSDKStyleInjected = t) : (A ? I.insertBefore(t, A.nextSibling) : i ? I.insertBefore(t, i.nextSibling) : I.insertBefore(t, I.firstChild), window._loadedStyles.lastDropinStyleInjected = t);
  } };
  tn.setAttributes = z(), tn.insert = V().bind(null, "head"), tn.domAPI = nn(), tn.insertStyleElement = Y(), h()(W.Z, tn), W.Z && W.Z.locals && W.Z.locals;
  var pn = n(2754), $ = ["value", "variant", "size", "icon", "className", "children", "disabled", "active", "activeChildren", "activeIcon", "href"];
  function M(w, t) {
    var y = Object.keys(w);
    if (Object.getOwnPropertySymbols) {
      var N = Object.getOwnPropertySymbols(w);
      t && (N = N.filter(function(H) {
        return Object.getOwnPropertyDescriptor(w, H).enumerable;
      })), y.push.apply(y, N);
    }
    return y;
  }
  function x(w) {
    for (var t = 1; t < arguments.length; t++) {
      var y = arguments[t] != null ? arguments[t] : {};
      t % 2 ? M(Object(y), !0).forEach(function(N) {
        D(w, N, y[N]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(w, Object.getOwnPropertyDescriptors(y)) : M(Object(y)).forEach(function(N) {
        Object.defineProperty(w, N, Object.getOwnPropertyDescriptor(y, N));
      });
    }
    return w;
  }
  function D(w, t, y) {
    return (t = function(N) {
      var H = function(X, I) {
        if (typeof X != "object" || X === null)
          return X;
        var A = X[Symbol.toPrimitive];
        if (A !== void 0) {
          var i = A.call(X, I || "default");
          if (typeof i != "object")
            return i;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (I === "string" ? String : Number)(X);
      }(N, "string");
      return typeof H == "symbol" ? H : String(H);
    }(t)) in w ? Object.defineProperty(w, t, { value: y, enumerable: !0, configurable: !0, writable: !0 }) : w[t] = y, w;
  }
  function Q(w, t) {
    if (w == null)
      return {};
    var y, N, H = function(I, A) {
      if (I == null)
        return {};
      var i, e, l = {}, c = Object.keys(I);
      for (e = 0; e < c.length; e++)
        i = c[e], A.indexOf(i) >= 0 || (l[i] = I[i]);
      return l;
    }(w, t);
    if (Object.getOwnPropertySymbols) {
      var X = Object.getOwnPropertySymbols(w);
      for (N = 0; N < X.length; N++)
        y = X[N], t.indexOf(y) >= 0 || Object.prototype.propertyIsEnumerable.call(w, y) && (H[y] = w[y]);
    }
    return H;
  }
  var F = (w) => {
    var { value: t, variant: y = "primary", size: N = "medium", icon: H, className: X, children: I, disabled: A = !1, active: i = !1, activeChildren: e, activeIcon: l, href: c } = w, m = Q(w, $), f = "dropin-button";
    (H && !I || H && i && !e || !H && i && l) && (f = "dropin-iconButton"), i && e && (f = "dropin-button"), X = (0, d.S)([f, "".concat(f, "--").concat(N), "".concat(f, "--").concat(y), ["".concat(f, "--").concat(y, "--disabled"), A], I && H && "".concat(f, "--with-icon"), !I && e && H && "".concat(f, "--with-icon"), i && l && "".concat(f, "--with-icon"), X]);
    var b = (0, d.S)(["dropin-button-icon", "dropin-button-icon--".concat(y), ["dropin-button-icon--".concat(y, "--disabled"), A], H == null ? void 0 : H.props.className]), Z = c ? x(x({ node: (0, pn.tZ)("a", {}), role: "link", href: c }, m), {}, { disabled: A, active: i }) : x(x({ node: (0, pn.tZ)("button", {}), role: "button" }, m), {}, { value: t, disabled: A, active: i });
    return (0, pn.BX)(o.F, x(x({}, Z), {}, { className: X, children: [H && !i && (0, pn.tZ)(o.F, { node: H, className: b }), l && i && (0, pn.tZ)(o.F, { node: l, className: b }), I && !i && (typeof I == "string" ? (0, pn.tZ)("span", { children: I }) : I), i && e && (typeof e == "string" ? (0, pn.tZ)("span", { children: e }) : e)] }));
  };
}, 1222: (J, j, n) => {
  n.d(j, { Z: () => Q });
  var d = n(5587), o = n(1892), _ = n.n(o), h = n(5760), k = n.n(h), nn = n(8311), U = n.n(nn), V = n(1615), P = n.n(V), z = n(8060), R = n.n(z), Y = n(4572), W = { attributes: { "data-dropin": "storefront-order-confirmation", "data-sdk": "0.22.0" }, styleTagTransform: function(F, w) {
    var i;
    window._loadedStyles = window._loadedStyles ?? {};
    const t = (i = F == null ? void 0 : F.match(/^\.dropin-(\w+)/)) == null ? void 0 : i[1], y = w.getAttribute("data-sdk"), N = t ? `sdk/${t}` : w.getAttribute("data-dropin");
    w.setAttribute("data-dropin", N), w.removeAttribute("data-sdk");
    const H = window._loadedStyles[N];
    if (H) {
      const e = function(l, c) {
        const [m, f] = l.split("-"), [b, Z] = c.split("-"), en = [...m.split("."), f], dn = [...b.split("."), Z], mn = parseInt(en[0], 10), yn = parseInt(dn[0], 10);
        if (mn !== yn)
          return mn > yn ? l : c;
        const bn = parseInt(en[1], 10), xn = parseInt(dn[1], 10);
        if (bn !== xn)
          return bn > xn ? l : c;
        const Pn = parseInt(en[2], 10), r = parseInt(dn[2], 10);
        if (Pn !== r)
          return Pn > r ? l : c;
        if (en[3] && dn[3]) {
          const a = /(alpha|beta)(.*)/, u = en[3].match(a), C = dn[3].match(a), T = u[1], p = C[1], v = parseInt(u[2], 10), O = parseInt(C[2], 10);
          if (T === p)
            return v > O ? l : c;
          if (T === "alpha" && p === "beta")
            return c;
          if (T === "beta" && p === "alpha")
            return l;
        }
        return en[3] ? c : l;
      }(y, H.sdk);
      if (!t || t && e === H.sdk) {
        const l = H.style.textContent;
        H.style.textContent = `${l}
/* --- MERGED --- */
${F}`;
      } else
        t && e !== H.sdk && (H.style.textContent = `/* --- UPGRADED --- */
${F}`);
      return void w.remove();
    }
    w.textContent = F, window._loadedStyles[N] = { sdk: y, core: t, style: w };
    const X = document.querySelector("head"), { lastDropinStyleInjected: I, lastSDKStyleInjected: A } = window._loadedStyles;
    t ? (A ? X.insertBefore(w, A.nextSibling) : X.insertBefore(w, X.firstChild), window._loadedStyles.lastSDKStyleInjected = w) : (I ? X.insertBefore(w, I.nextSibling) : A ? X.insertBefore(w, A.nextSibling) : X.insertBefore(w, X.firstChild), window._loadedStyles.lastDropinStyleInjected = w);
  } };
  W.setAttributes = P(), W.insert = U().bind(null, "head"), W.domAPI = k(), W.insertStyleElement = R(), _()(Y.Z, W), Y.Z && Y.Z.locals && Y.Z.locals;
  var tn = n(2754), pn = ["variant", "className", "children"];
  function $(F, w) {
    var t = Object.keys(F);
    if (Object.getOwnPropertySymbols) {
      var y = Object.getOwnPropertySymbols(F);
      w && (y = y.filter(function(N) {
        return Object.getOwnPropertyDescriptor(F, N).enumerable;
      })), t.push.apply(t, y);
    }
    return t;
  }
  function M(F) {
    for (var w = 1; w < arguments.length; w++) {
      var t = arguments[w] != null ? arguments[w] : {};
      w % 2 ? $(Object(t), !0).forEach(function(y) {
        x(F, y, t[y]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(F, Object.getOwnPropertyDescriptors(t)) : $(Object(t)).forEach(function(y) {
        Object.defineProperty(F, y, Object.getOwnPropertyDescriptor(t, y));
      });
    }
    return F;
  }
  function x(F, w, t) {
    return (w = function(y) {
      var N = function(H, X) {
        if (typeof H != "object" || H === null)
          return H;
        var I = H[Symbol.toPrimitive];
        if (I !== void 0) {
          var A = I.call(H, X || "default");
          if (typeof A != "object")
            return A;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (X === "string" ? String : Number)(H);
      }(y, "string");
      return typeof N == "symbol" ? N : String(N);
    }(w)) in F ? Object.defineProperty(F, w, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : F[w] = t, F;
  }
  function D(F, w) {
    if (F == null)
      return {};
    var t, y, N = function(X, I) {
      if (X == null)
        return {};
      var A, i, e = {}, l = Object.keys(X);
      for (i = 0; i < l.length; i++)
        A = l[i], I.indexOf(A) >= 0 || (e[A] = X[A]);
      return e;
    }(F, w);
    if (Object.getOwnPropertySymbols) {
      var H = Object.getOwnPropertySymbols(F);
      for (y = 0; y < H.length; y++)
        t = H[y], w.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(F, t) && (N[t] = F[t]);
    }
    return N;
  }
  var Q = (F) => {
    var { variant: w = "primary", className: t, children: y } = F, N = D(F, pn);
    return (0, tn.tZ)("div", M(M({}, N), {}, { className: (0, d.S)(["dropin-card", "dropin-card--".concat(w), t]), children: (0, tn.tZ)("div", { class: "dropin-card__content", children: y }) }));
  };
}, 71: (J, j, n) => {
  n.d(j, { b: () => T });
  var d = n(3354), o = n(5587), _ = n(1177), h = n(5406), k = n(8325), nn = n(9724), U = n(1892), V = n.n(U), P = n(5760), z = n.n(P), R = n(8311), Y = n.n(R), W = n(1615), tn = n.n(W), pn = n(8060), $ = n.n(pn), M = n(382), x = { attributes: { "data-dropin": "storefront-order-confirmation", "data-sdk": "0.22.0" }, styleTagTransform: function(p, v) {
    var gn;
    window._loadedStyles = window._loadedStyles ?? {};
    const O = (gn = p == null ? void 0 : p.match(/^\.dropin-(\w+)/)) == null ? void 0 : gn[1], G = v.getAttribute("data-sdk"), K = O ? `sdk/${O}` : v.getAttribute("data-dropin");
    v.setAttribute("data-dropin", K), v.removeAttribute("data-sdk");
    const an = window._loadedStyles[K];
    if (an) {
      const hn = function(sn, On) {
        const [Nn, $n] = sn.split("-"), [Bn, Tn] = On.split("-"), An = [...Nn.split("."), $n], jn = [...Bn.split("."), Tn], Cn = parseInt(An[0], 10), En = parseInt(jn[0], 10);
        if (Cn !== En)
          return Cn > En ? sn : On;
        const Sn = parseInt(An[1], 10), Dn = parseInt(jn[1], 10);
        if (Sn !== Dn)
          return Sn > Dn ? sn : On;
        const Zn = parseInt(An[2], 10), Yn = parseInt(jn[2], 10);
        if (Zn !== Yn)
          return Zn > Yn ? sn : On;
        if (An[3] && jn[3]) {
          const qn = /(alpha|beta)(.*)/, ot = An[3].match(qn), tt = jn[3].match(qn), et = ot[1], lt = tt[1], dt = parseInt(ot[2], 10), ct = parseInt(tt[2], 10);
          if (et === lt)
            return dt > ct ? sn : On;
          if (et === "alpha" && lt === "beta")
            return On;
          if (et === "beta" && lt === "alpha")
            return sn;
        }
        return An[3] ? On : sn;
      }(G, an.sdk);
      if (!O || O && hn === an.sdk) {
        const sn = an.style.textContent;
        an.style.textContent = `${sn}
/* --- MERGED --- */
${p}`;
      } else
        O && hn !== an.sdk && (an.style.textContent = `/* --- UPGRADED --- */
${p}`);
      return void v.remove();
    }
    v.textContent = p, window._loadedStyles[K] = { sdk: G, core: O, style: v };
    const E = document.querySelector("head"), { lastDropinStyleInjected: fn, lastSDKStyleInjected: ln } = window._loadedStyles;
    O ? (ln ? E.insertBefore(v, ln.nextSibling) : E.insertBefore(v, E.firstChild), window._loadedStyles.lastSDKStyleInjected = v) : (fn ? E.insertBefore(v, fn.nextSibling) : ln ? E.insertBefore(v, ln.nextSibling) : E.insertBefore(v, E.firstChild), window._loadedStyles.lastDropinStyleInjected = v);
  } };
  x.setAttributes = tn(), x.insert = Y().bind(null, "head"), x.domAPI = z(), x.insertStyleElement = $(), V()(M.Z, x), M.Z && M.Z.locals && M.Z.locals;
  var D = n(2754), Q = ["ariaLabel", "size", "stroke", "children", "className", "style"];
  function F(p, v) {
    var O = Object.keys(p);
    if (Object.getOwnPropertySymbols) {
      var G = Object.getOwnPropertySymbols(p);
      v && (G = G.filter(function(K) {
        return Object.getOwnPropertyDescriptor(p, K).enumerable;
      })), O.push.apply(O, G);
    }
    return O;
  }
  function w(p) {
    for (var v = 1; v < arguments.length; v++) {
      var O = arguments[v] != null ? arguments[v] : {};
      v % 2 ? F(Object(O), !0).forEach(function(G) {
        t(p, G, O[G]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(p, Object.getOwnPropertyDescriptors(O)) : F(Object(O)).forEach(function(G) {
        Object.defineProperty(p, G, Object.getOwnPropertyDescriptor(O, G));
      });
    }
    return p;
  }
  function t(p, v, O) {
    return (v = function(G) {
      var K = function(an, E) {
        if (typeof an != "object" || an === null)
          return an;
        var fn = an[Symbol.toPrimitive];
        if (fn !== void 0) {
          var ln = fn.call(an, E || "default");
          if (typeof ln != "object")
            return ln;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (E === "string" ? String : Number)(an);
      }(G, "string");
      return typeof K == "symbol" ? K : String(K);
    }(v)) in p ? Object.defineProperty(p, v, { value: O, enumerable: !0, configurable: !0, writable: !0 }) : p[v] = O, p;
  }
  function y(p, v) {
    if (p == null)
      return {};
    var O, G, K = function(E, fn) {
      if (E == null)
        return {};
      var ln, gn, hn = {}, sn = Object.keys(E);
      for (gn = 0; gn < sn.length; gn++)
        ln = sn[gn], fn.indexOf(ln) >= 0 || (hn[ln] = E[ln]);
      return hn;
    }(p, v);
    if (Object.getOwnPropertySymbols) {
      var an = Object.getOwnPropertySymbols(p);
      for (G = 0; G < an.length; G++)
        O = an[G], v.indexOf(O) >= 0 || Object.prototype.propertyIsEnumerable.call(p, O) && (K[O] = p[O]);
    }
    return K;
  }
  var N = (p) => {
    var { ariaLabel: v, size: O = "small", stroke: G = "4", children: K, className: an, style: E } = p, fn = y(p, Q), ln = ["dropin-progress-spinner", "dropin-progress-spinner--shape-size-".concat(O), "dropin-progress-spinner--shape-stroke-".concat(G)], gn = (0, nn.XK)({ updating: "Dropin.ProgressSpinner.updating.label", updatingChildren: "Dropin.ProgressSpinner.updatingChildren.label" }), hn = () => v || (K ? gn.updatingChildren : gn.updating);
    return K ? (0, D.BX)("div", w(w({}, fn), {}, { className: (0, o.S)(["dropin-progress-spinner-provider"]), "aria-live": "polite", role: "status", children: [(0, D.tZ)("div", { "aria-hidden": !0, children: K }), (0, D.tZ)("div", { "aria-label": hn(), role: "status", className: (0, o.S)(["dropin-progress-spinner-background", an]), style: E }), (0, D.tZ)("div", { className: (0, o.S)(["dropin-progress-spinner-with-provider", ...ln]), "aria-hidden": !0 })] })) : (0, D.tZ)("div", w(w({}, fn), {}, { className: (0, o.S)([an, ...ln]), "aria-live": "polite", role: "status", "aria-label": hn() }));
  }, H = n(5792), X = n(7654), I = n(2504), A = n(1676), i = n(8910), e = n(3795), l = { attributes: { "data-dropin": "storefront-order-confirmation", "data-sdk": "0.22.0" }, styleTagTransform: function(p, v) {
    var gn;
    window._loadedStyles = window._loadedStyles ?? {};
    const O = (gn = p == null ? void 0 : p.match(/^\.dropin-(\w+)/)) == null ? void 0 : gn[1], G = v.getAttribute("data-sdk"), K = O ? `sdk/${O}` : v.getAttribute("data-dropin");
    v.setAttribute("data-dropin", K), v.removeAttribute("data-sdk");
    const an = window._loadedStyles[K];
    if (an) {
      const hn = function(sn, On) {
        const [Nn, $n] = sn.split("-"), [Bn, Tn] = On.split("-"), An = [...Nn.split("."), $n], jn = [...Bn.split("."), Tn], Cn = parseInt(An[0], 10), En = parseInt(jn[0], 10);
        if (Cn !== En)
          return Cn > En ? sn : On;
        const Sn = parseInt(An[1], 10), Dn = parseInt(jn[1], 10);
        if (Sn !== Dn)
          return Sn > Dn ? sn : On;
        const Zn = parseInt(An[2], 10), Yn = parseInt(jn[2], 10);
        if (Zn !== Yn)
          return Zn > Yn ? sn : On;
        if (An[3] && jn[3]) {
          const qn = /(alpha|beta)(.*)/, ot = An[3].match(qn), tt = jn[3].match(qn), et = ot[1], lt = tt[1], dt = parseInt(ot[2], 10), ct = parseInt(tt[2], 10);
          if (et === lt)
            return dt > ct ? sn : On;
          if (et === "alpha" && lt === "beta")
            return On;
          if (et === "beta" && lt === "alpha")
            return sn;
        }
        return An[3] ? On : sn;
      }(G, an.sdk);
      if (!O || O && hn === an.sdk) {
        const sn = an.style.textContent;
        an.style.textContent = `${sn}
/* --- MERGED --- */
${p}`;
      } else
        O && hn !== an.sdk && (an.style.textContent = `/* --- UPGRADED --- */
${p}`);
      return void v.remove();
    }
    v.textContent = p, window._loadedStyles[K] = { sdk: G, core: O, style: v };
    const E = document.querySelector("head"), { lastDropinStyleInjected: fn, lastSDKStyleInjected: ln } = window._loadedStyles;
    O ? (ln ? E.insertBefore(v, ln.nextSibling) : E.insertBefore(v, E.firstChild), window._loadedStyles.lastSDKStyleInjected = v) : (fn ? E.insertBefore(v, fn.nextSibling) : ln ? E.insertBefore(v, ln.nextSibling) : E.insertBefore(v, E.firstChild), window._loadedStyles.lastDropinStyleInjected = v);
  } };
  l.setAttributes = tn(), l.insert = Y().bind(null, "head"), l.domAPI = z(), l.insertStyleElement = $(), V()(e.Z, l), e.Z && e.Z.locals && e.Z.locals;
  var c = ["name", "value", "className", "disabled", "error", "success", "min", "max", "onValue", "onUpdateError", "size"];
  function m(p, v) {
    var O = Object.keys(p);
    if (Object.getOwnPropertySymbols) {
      var G = Object.getOwnPropertySymbols(p);
      v && (G = G.filter(function(K) {
        return Object.getOwnPropertyDescriptor(p, K).enumerable;
      })), O.push.apply(O, G);
    }
    return O;
  }
  function f(p) {
    for (var v = 1; v < arguments.length; v++) {
      var O = arguments[v] != null ? arguments[v] : {};
      v % 2 ? m(Object(O), !0).forEach(function(G) {
        b(p, G, O[G]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(p, Object.getOwnPropertyDescriptors(O)) : m(Object(O)).forEach(function(G) {
        Object.defineProperty(p, G, Object.getOwnPropertyDescriptor(O, G));
      });
    }
    return p;
  }
  function b(p, v, O) {
    return (v = function(G) {
      var K = function(an, E) {
        if (typeof an != "object" || an === null)
          return an;
        var fn = an[Symbol.toPrimitive];
        if (fn !== void 0) {
          var ln = fn.call(an, E || "default");
          if (typeof ln != "object")
            return ln;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (E === "string" ? String : Number)(an);
      }(G, "string");
      return typeof K == "symbol" ? K : String(K);
    }(v)) in p ? Object.defineProperty(p, v, { value: O, enumerable: !0, configurable: !0, writable: !0 }) : p[v] = O, p;
  }
  function Z(p, v, O, G, K, an, E) {
    try {
      var fn = p[an](E), ln = fn.value;
    } catch (gn) {
      return void O(gn);
    }
    fn.done ? v(ln) : Promise.resolve(ln).then(G, K);
  }
  function en(p, v) {
    if (p == null)
      return {};
    var O, G, K = function(E, fn) {
      if (E == null)
        return {};
      var ln, gn, hn = {}, sn = Object.keys(E);
      for (gn = 0; gn < sn.length; gn++)
        ln = sn[gn], fn.indexOf(ln) >= 0 || (hn[ln] = E[ln]);
      return hn;
    }(p, v);
    if (Object.getOwnPropertySymbols) {
      var an = Object.getOwnPropertySymbols(p);
      for (G = 0; G < an.length; G++)
        O = an[G], v.indexOf(O) >= 0 || Object.prototype.propertyIsEnumerable.call(p, O) && (K[O] = p[O]);
    }
    return K;
  }
  var dn = (p) => {
    var { name: v, value: O = "1", className: G, disabled: K, error: an, success: E, min: fn, max: ln, onValue: gn, onUpdateError: hn, size: sn = "medium" } = p, On = en(p, c), [Nn, $n] = (0, H.eJ)(Number(O)), Bn = Number(fn), Tn = Number(ln);
    (0, H.d4)(() => {
      $n(Number(O));
    }, [O]);
    var An = (0, H.I4)((0, X.D)(function() {
      var Cn, En = (Cn = function* (Sn) {
        if (gn)
          try {
            yield gn(Sn);
          } catch (Dn) {
            hn && hn(Dn);
          }
      }, function() {
        var Sn = this, Dn = arguments;
        return new Promise(function(Zn, Yn) {
          var qn = Cn.apply(Sn, Dn);
          function ot(et) {
            Z(qn, Zn, Yn, ot, tt, "next", et);
          }
          function tt(et) {
            Z(qn, Zn, Yn, ot, tt, "throw", et);
          }
          ot(void 0);
        });
      });
      return function(Sn) {
        return En.apply(this, arguments);
      };
    }(), 200), [gn, hn]), jn = (Cn) => {
      var En = Cn;
      Cn < Bn && (En = Bn), Cn > Tn && (En = Tn), An(En), $n(En);
    };
    return (0, D.tZ)("div", { className: (0, o.S)(["dropin-incrementer", "dropin-incrementer--".concat(sn), G]), children: (0, D.BX)("div", { className: (0, o.S)(["dropin-incrementer__content", "dropin-incrementer__content--".concat(sn), ["dropin-incrementer__content--error", an], ["dropin-incrementer__content--success", E], ["dropin-incrementer__content--disabled", K]]), children: [(0, D.tZ)("div", { className: (0, o.S)(["dropin-incrementer__button-container", ["dropin-incrementer__button-container--disabled", K]]), children: (0, D.tZ)(nn.Cf, { children: (0, D.tZ)("button", { type: "button", className: (0, o.S)(["dropin-incrementer__decrease-button", ["dropin-incrementer__decrease-button--disabled", K]]), onClick: () => jn(Nn - 1), disabled: K || Nn < Bn + 1, "aria-label": (0, D.tZ)(nn.xv, { id: "Dropin.Incrementer.decreaseLabel" }), children: (0, D.tZ)(i.J, { source: I.default, size: "16", stroke: "1", viewBox: "4 2 20 20", className: "dropin-incrementer__down" }) }) }) }), (0, D.tZ)("input", f({ className: "dropin-incrementer__input", max: ln, min: fn, step: 1, type: "number", name: v, value: Nn, disabled: K, onChange: (Cn) => {
      var En = Cn.currentTarget.value;
      En !== "" && jn(Number(En));
    } }, On)), (0, D.tZ)("div", { className: (0, o.S)(["dropin-incrementer__button-container", ["dropin-incrementer__button-container--disabled", K]]), children: (0, D.tZ)(nn.Cf, { children: (0, D.tZ)("button", { type: "button", className: (0, o.S)(["dropin-incrementer__increase-button", ["dropin-incrementer__increase-button--disabled", K]]), onClick: () => jn(Nn + 1), disabled: K || Nn > Tn - 1, "aria-label": (0, D.tZ)(nn.xv, { id: "Dropin.Incrementer.increaseLabel" }), children: (0, D.tZ)(i.J, { source: A.default, size: "16", stroke: "1", viewBox: "4 2 20 20", className: "dropin-incrementer__add" }) }) }) })] }) });
  }, mn = n(6816), yn = n(2734), bn = n(6223), xn = { attributes: { "data-dropin": "storefront-order-confirmation", "data-sdk": "0.22.0" }, styleTagTransform: function(p, v) {
    var gn;
    window._loadedStyles = window._loadedStyles ?? {};
    const O = (gn = p == null ? void 0 : p.match(/^\.dropin-(\w+)/)) == null ? void 0 : gn[1], G = v.getAttribute("data-sdk"), K = O ? `sdk/${O}` : v.getAttribute("data-dropin");
    v.setAttribute("data-dropin", K), v.removeAttribute("data-sdk");
    const an = window._loadedStyles[K];
    if (an) {
      const hn = function(sn, On) {
        const [Nn, $n] = sn.split("-"), [Bn, Tn] = On.split("-"), An = [...Nn.split("."), $n], jn = [...Bn.split("."), Tn], Cn = parseInt(An[0], 10), En = parseInt(jn[0], 10);
        if (Cn !== En)
          return Cn > En ? sn : On;
        const Sn = parseInt(An[1], 10), Dn = parseInt(jn[1], 10);
        if (Sn !== Dn)
          return Sn > Dn ? sn : On;
        const Zn = parseInt(An[2], 10), Yn = parseInt(jn[2], 10);
        if (Zn !== Yn)
          return Zn > Yn ? sn : On;
        if (An[3] && jn[3]) {
          const qn = /(alpha|beta)(.*)/, ot = An[3].match(qn), tt = jn[3].match(qn), et = ot[1], lt = tt[1], dt = parseInt(ot[2], 10), ct = parseInt(tt[2], 10);
          if (et === lt)
            return dt > ct ? sn : On;
          if (et === "alpha" && lt === "beta")
            return On;
          if (et === "beta" && lt === "alpha")
            return sn;
        }
        return An[3] ? On : sn;
      }(G, an.sdk);
      if (!O || O && hn === an.sdk) {
        const sn = an.style.textContent;
        an.style.textContent = `${sn}
/* --- MERGED --- */
${p}`;
      } else
        O && hn !== an.sdk && (an.style.textContent = `/* --- UPGRADED --- */
${p}`);
      return void v.remove();
    }
    v.textContent = p, window._loadedStyles[K] = { sdk: G, core: O, style: v };
    const E = document.querySelector("head"), { lastDropinStyleInjected: fn, lastSDKStyleInjected: ln } = window._loadedStyles;
    O ? (ln ? E.insertBefore(v, ln.nextSibling) : E.insertBefore(v, E.firstChild), window._loadedStyles.lastSDKStyleInjected = v) : (fn ? E.insertBefore(v, fn.nextSibling) : ln ? E.insertBefore(v, ln.nextSibling) : E.insertBefore(v, E.firstChild), window._loadedStyles.lastDropinStyleInjected = v);
  } };
  xn.setAttributes = tn(), xn.insert = Y().bind(null, "head"), xn.domAPI = z(), xn.insertStyleElement = $(), V()(bn.Z, xn), bn.Z && bn.Z.locals && bn.Z.locals;
  var Pn = ["className", "children", "ariaLabel", "image", "title", "price", "taxIncluded", "taxExcluded", "total", "totalExcludingTax", "sku", "configurations", "warning", "alert", "quantity", "description", "loading", "updating", "onQuantity", "onRemove"];
  function r(p, v) {
    var O = Object.keys(p);
    if (Object.getOwnPropertySymbols) {
      var G = Object.getOwnPropertySymbols(p);
      v && (G = G.filter(function(K) {
        return Object.getOwnPropertyDescriptor(p, K).enumerable;
      })), O.push.apply(O, G);
    }
    return O;
  }
  function a(p) {
    for (var v = 1; v < arguments.length; v++) {
      var O = arguments[v] != null ? arguments[v] : {};
      v % 2 ? r(Object(O), !0).forEach(function(G) {
        u(p, G, O[G]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(p, Object.getOwnPropertyDescriptors(O)) : r(Object(O)).forEach(function(G) {
        Object.defineProperty(p, G, Object.getOwnPropertyDescriptor(O, G));
      });
    }
    return p;
  }
  function u(p, v, O) {
    return (v = function(G) {
      var K = function(an, E) {
        if (typeof an != "object" || an === null)
          return an;
        var fn = an[Symbol.toPrimitive];
        if (fn !== void 0) {
          var ln = fn.call(an, E || "default");
          if (typeof ln != "object")
            return ln;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (E === "string" ? String : Number)(an);
      }(G, "string");
      return typeof K == "symbol" ? K : String(K);
    }(v)) in p ? Object.defineProperty(p, v, { value: O, enumerable: !0, configurable: !0, writable: !0 }) : p[v] = O, p;
  }
  function C(p, v) {
    if (p == null)
      return {};
    var O, G, K = function(E, fn) {
      if (E == null)
        return {};
      var ln, gn, hn = {}, sn = Object.keys(E);
      for (gn = 0; gn < sn.length; gn++)
        ln = sn[gn], fn.indexOf(ln) >= 0 || (hn[ln] = E[ln]);
      return hn;
    }(p, v);
    if (Object.getOwnPropertySymbols) {
      var an = Object.getOwnPropertySymbols(p);
      for (G = 0; G < an.length; G++)
        O = an[G], v.indexOf(O) >= 0 || Object.prototype.propertyIsEnumerable.call(p, O) && (K[O] = p[O]);
    }
    return K;
  }
  var T = (p) => {
    var v, O, { className: G, children: K, ariaLabel: an, image: E, title: fn, price: ln, taxIncluded: gn = !1, taxExcluded: hn = !1, total: sn, totalExcludingTax: On, sku: Nn, configurations: $n, warning: Bn, alert: Tn, quantity: An = 1, description: jn, loading: Cn = !1, updating: En = !1, onQuantity: Sn, onRemove: Dn } = p, Zn = C(p, Pn), { locale: Yn } = (0, d.qp)(h.Q), qn = (0, nn.XK)({ each: "Dropin.CartItem.each.label", quantity: "Dropin.CartItem.quantity.label", remove: "Dropin.CartItem.remove.label", removeDefault: "Dropin.CartItem.removeDefault.label", taxIncluded: "Dropin.CartItem.taxIncluded.label", taxExcluded: "Dropin.CartItem.taxExcluded.label", updating: "Dropin.CartItem.updating.label", updatingDefault: "Dropin.ProgressSpinner.updating.label" });
    return Cn ? (0, D.tZ)(k.R, {}) : (0, D.BX)("div", a(a({}, Zn), {}, { className: (0, o.S)(["dropin-cart-item", ["dropin-cart-item--updating", En], G]), children: [En && (0, D.tZ)(N, { className: (0, o.S)(["dropin-cart-item__spinner"]), ariaLabel: an ? (v = qn.updating) === null || v === void 0 ? void 0 : v.replace("{product}", an) : qn.updatingDefault }), (0, D.BX)("div", { className: "dropin-cart-item__wrapper", children: [(0, D.tZ)(_.F, { node: E, className: (0, o.S)(["dropin-cart-item__image"]) }), (0, D.tZ)(_.F, { node: fn, className: (0, o.S)(["dropin-cart-item__title", ["dropin-cart-item__title--edit", !!Sn || !!Dn]]) }), jn && (0, D.tZ)(_.F, { node: jn, className: (0, o.S)(["dropin-cart-item__description"]) }), (0, D.tZ)(_.F, { node: Nn, className: (0, o.S)(["dropin-cart-item__sku"]) }), $n && (0, D.tZ)("ul", { className: (0, o.S)(["dropin-cart-item__configurations"]), children: Object.entries($n).map((ot) => {
      var [tt, et] = ot;
      return (0, D.BX)("li", { className: (0, o.S)(["dropin-cart-item__configurations__item"]), children: [tt, ":", " ", (0, D.tZ)("strong", { className: (0, o.S)(["dropin-cart-item__configurations__item__value"]), children: et })] }, tt);
    }) }), (0, D.BX)("span", { className: (0, o.S)(["dropin-cart-item__price"]), children: [!Sn && (0, D.BX)("span", { className: "dropin-cart-item__price__quantity", children: [An.toLocaleString(Yn), " x", " "] }), (0, D.tZ)(_.F, { node: ln, role: "text" }), An > 1 && (0, D.BX)(D.HY, { children: [" ", qn.each] }), gn && (0, D.BX)("span", { "data-testid": "tax-message", className: "dropin-cart-item__price-tax-message", children: [" ", qn.taxIncluded] }), hn && (0, D.BX)("span", { "data-testid": "tax-message", className: "dropin-cart-item__price-tax-message", children: [" ", qn.taxExcluded] })] }), (0, D.BX)("div", { className: (0, o.S)(["dropin-cart-item__quantity", ["dropin-cart-item__quantity--edit", !!Sn]]), children: [Sn ? (0, D.tZ)(dn, { className: (0, o.S)(["dropin-cart-item__quantity__incrementer"]), value: An, min: 1, onValue: (ot) => Sn == null ? void 0 : Sn(Number(ot)), name: "quantity", "aria-label": qn.quantity, disabled: En }) : (0, D.BX)("span", { className: (0, o.S)(["dropin-cart-item__quantity__value"]), children: [qn.quantity, ":", " ", (0, D.tZ)("strong", { className: "dropin-cart-item__quantity__number", children: Number(An).toLocaleString(Yn) })] }), Bn && (0, D.tZ)(_.F, { node: Bn, className: (0, o.S)(["dropin-cart-item__warning", "dropin-cart-item__warning--quantity"]) }), Tn && (0, D.tZ)(_.F, { node: Tn, className: (0, o.S)(["dropin-cart-item__alert", "dropin-cart-item__alert--quantity"]) })] }), Bn && (0, D.tZ)(_.F, { node: Bn, className: (0, o.S)(["dropin-cart-item__warning"]) }), Tn && (0, D.tZ)(_.F, { node: Tn, className: (0, o.S)(["dropin-cart-item__alert"]) }), (0, D.BX)("div", { className: (0, o.S)(["dropin-cart-item__total", ["dropin-cart-item__total--edit", !!Dn]]), children: [(0, D.tZ)("div", { className: "dropin-cart-item__row-total", children: (0, D.tZ)(_.F, { node: sn, role: "text" }) }), gn && (0, D.BX)("span", { "data-testid": "tax-message", className: (0, o.S)(["dropin-cart-item__total-tax-message"]), children: [" ", qn.taxIncluded] }), hn && (0, D.tZ)("div", { className: "dropin-cart-item__total-tax-excluded", children: (0, D.BX)("span", { "data-testid": "tax-message", className: (0, o.S)(["dropin-cart-item__total-tax-excluded-message"]), children: [On && (0, D.tZ)(_.F, { node: On, role: "text" }), " ", qn.taxExcluded] }) })] })] }), Dn && (0, D.tZ)(mn.z, { className: (0, o.S)(["dropin-cart-item__remove"]), variant: "tertiary", onClick: () => Dn == null ? void 0 : Dn(), icon: (0, D.tZ)(i.J, { source: yn.default, size: "24", stroke: "2", viewBox: "0 0 24 24", "aria-label": an ? (O = qn.remove) === null || O === void 0 ? void 0 : O.replace("{product}", an) : qn.removeDefault }), disabled: En })] }));
  };
}, 8325: (J, j, n) => {
  n.d(j, { R: () => _ });
  var d = n(5137), o = n(2754), _ = () => (0, o.tZ)("div", { className: "dropin-cart-item dropin-cart-item-skeleton", children: (0, o.BX)(d.O, { className: "dropin-cart-item__skeleton dropin-cart-item__wrapper", children: [(0, o.tZ)("div", { className: "dropin-cart-item__image", children: (0, o.tZ)(d.d, { className: "dropin-cart-item__skeleton__item" }) }), (0, o.tZ)("div", { className: "dropin-cart-item__title", children: (0, o.tZ)(d.d, { className: "dropin-cart-item__skeleton__item" }) }), (0, o.tZ)("div", { className: "dropin-cart-item__sku", children: (0, o.tZ)(d.d, { className: "dropin-cart-item__skeleton__item" }) }), (0, o.tZ)("div", { className: "dropin-cart-item__price", children: (0, o.tZ)(d.d, { className: "dropin-cart-item__skeleton__item" }) }), (0, o.tZ)("div", { className: "dropin-cart-item__quantity", children: (0, o.tZ)(d.d, { className: "dropin-cart-item__skeleton__item" }) }), (0, o.tZ)("div", { className: "dropin-cart-item__total", children: (0, o.tZ)(d.d, { className: "dropin-cart-item__skeleton__item" }) })] }) });
}, 2866: (J, j, n) => {
  n.d(j, { i: () => pn });
  var d = n(5587), o = n(1892), _ = n.n(o), h = n(5760), k = n.n(h), nn = n(8311), U = n.n(nn), V = n(1615), P = n.n(V), z = n(8060), R = n.n(z), Y = n(3337), W = { attributes: { "data-dropin": "storefront-order-confirmation", "data-sdk": "0.22.0" }, styleTagTransform: function($, M) {
    var N;
    window._loadedStyles = window._loadedStyles ?? {};
    const x = (N = $ == null ? void 0 : $.match(/^\.dropin-(\w+)/)) == null ? void 0 : N[1], D = M.getAttribute("data-sdk"), Q = x ? `sdk/${x}` : M.getAttribute("data-dropin");
    M.setAttribute("data-dropin", Q), M.removeAttribute("data-sdk");
    const F = window._loadedStyles[Q];
    if (F) {
      const H = function(X, I) {
        const [A, i] = X.split("-"), [e, l] = I.split("-"), c = [...A.split("."), i], m = [...e.split("."), l], f = parseInt(c[0], 10), b = parseInt(m[0], 10);
        if (f !== b)
          return f > b ? X : I;
        const Z = parseInt(c[1], 10), en = parseInt(m[1], 10);
        if (Z !== en)
          return Z > en ? X : I;
        const dn = parseInt(c[2], 10), mn = parseInt(m[2], 10);
        if (dn !== mn)
          return dn > mn ? X : I;
        if (c[3] && m[3]) {
          const yn = /(alpha|beta)(.*)/, bn = c[3].match(yn), xn = m[3].match(yn), Pn = bn[1], r = xn[1], a = parseInt(bn[2], 10), u = parseInt(xn[2], 10);
          if (Pn === r)
            return a > u ? X : I;
          if (Pn === "alpha" && r === "beta")
            return I;
          if (Pn === "beta" && r === "alpha")
            return X;
        }
        return c[3] ? I : X;
      }(D, F.sdk);
      if (!x || x && H === F.sdk) {
        const X = F.style.textContent;
        F.style.textContent = `${X}
/* --- MERGED --- */
${$}`;
      } else
        x && H !== F.sdk && (F.style.textContent = `/* --- UPGRADED --- */
${$}`);
      return void M.remove();
    }
    M.textContent = $, window._loadedStyles[Q] = { sdk: D, core: x, style: M };
    const w = document.querySelector("head"), { lastDropinStyleInjected: t, lastSDKStyleInjected: y } = window._loadedStyles;
    x ? (y ? w.insertBefore(M, y.nextSibling) : w.insertBefore(M, w.firstChild), window._loadedStyles.lastSDKStyleInjected = M) : (t ? w.insertBefore(M, t.nextSibling) : y ? w.insertBefore(M, y.nextSibling) : w.insertBefore(M, w.firstChild), window._loadedStyles.lastDropinStyleInjected = M);
  } };
  W.setAttributes = P(), W.insert = U().bind(null, "head"), W.domAPI = k(), W.insertStyleElement = R(), _()(Y.Z, W), Y.Z && Y.Z.locals && Y.Z.locals;
  var tn = n(2754), pn = ($) => {
    var { variant: M = "primary", className: x } = $;
    return (0, tn.tZ)("hr", { role: "separator", className: (0, d.S)(["dropin-divider", "dropin-divider--".concat(M), x]) });
  };
}, 5705: (J, j, n) => {
  n.d(j, { g: () => F });
  var d = n(1892), o = n.n(d), _ = n(5760), h = n.n(_), k = n(8311), nn = n.n(k), U = n(1615), V = n.n(U), P = n(8060), z = n.n(P), R = n(69), Y = { attributes: { "data-dropin": "storefront-order-confirmation", "data-sdk": "0.22.0" }, styleTagTransform: function(w, t) {
    var e;
    window._loadedStyles = window._loadedStyles ?? {};
    const y = (e = w == null ? void 0 : w.match(/^\.dropin-(\w+)/)) == null ? void 0 : e[1], N = t.getAttribute("data-sdk"), H = y ? `sdk/${y}` : t.getAttribute("data-dropin");
    t.setAttribute("data-dropin", H), t.removeAttribute("data-sdk");
    const X = window._loadedStyles[H];
    if (X) {
      const l = function(c, m) {
        const [f, b] = c.split("-"), [Z, en] = m.split("-"), dn = [...f.split("."), b], mn = [...Z.split("."), en], yn = parseInt(dn[0], 10), bn = parseInt(mn[0], 10);
        if (yn !== bn)
          return yn > bn ? c : m;
        const xn = parseInt(dn[1], 10), Pn = parseInt(mn[1], 10);
        if (xn !== Pn)
          return xn > Pn ? c : m;
        const r = parseInt(dn[2], 10), a = parseInt(mn[2], 10);
        if (r !== a)
          return r > a ? c : m;
        if (dn[3] && mn[3]) {
          const u = /(alpha|beta)(.*)/, C = dn[3].match(u), T = mn[3].match(u), p = C[1], v = T[1], O = parseInt(C[2], 10), G = parseInt(T[2], 10);
          if (p === v)
            return O > G ? c : m;
          if (p === "alpha" && v === "beta")
            return m;
          if (p === "beta" && v === "alpha")
            return c;
        }
        return dn[3] ? m : c;
      }(N, X.sdk);
      if (!y || y && l === X.sdk) {
        const c = X.style.textContent;
        X.style.textContent = `${c}
/* --- MERGED --- */
${w}`;
      } else
        y && l !== X.sdk && (X.style.textContent = `/* --- UPGRADED --- */
${w}`);
      return void t.remove();
    }
    t.textContent = w, window._loadedStyles[H] = { sdk: N, core: y, style: t };
    const I = document.querySelector("head"), { lastDropinStyleInjected: A, lastSDKStyleInjected: i } = window._loadedStyles;
    y ? (i ? I.insertBefore(t, i.nextSibling) : I.insertBefore(t, I.firstChild), window._loadedStyles.lastSDKStyleInjected = t) : (A ? I.insertBefore(t, A.nextSibling) : i ? I.insertBefore(t, i.nextSibling) : I.insertBefore(t, I.firstChild), window._loadedStyles.lastDropinStyleInjected = t);
  } };
  Y.setAttributes = V(), Y.insert = nn().bind(null, "head"), Y.domAPI = h(), Y.insertStyleElement = z(), o()(R.Z, Y), R.Z && R.Z.locals && R.Z.locals;
  var W = n(5587), tn = n(2754), pn = n(3354), $ = ["className", "label", "error", "hint", "success", "size", "disabled", "children"];
  function M(w, t) {
    var y = Object.keys(w);
    if (Object.getOwnPropertySymbols) {
      var N = Object.getOwnPropertySymbols(w);
      t && (N = N.filter(function(H) {
        return Object.getOwnPropertyDescriptor(w, H).enumerable;
      })), y.push.apply(y, N);
    }
    return y;
  }
  function x(w) {
    for (var t = 1; t < arguments.length; t++) {
      var y = arguments[t] != null ? arguments[t] : {};
      t % 2 ? M(Object(y), !0).forEach(function(N) {
        D(w, N, y[N]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(w, Object.getOwnPropertyDescriptors(y)) : M(Object(y)).forEach(function(N) {
        Object.defineProperty(w, N, Object.getOwnPropertyDescriptor(y, N));
      });
    }
    return w;
  }
  function D(w, t, y) {
    return (t = function(N) {
      var H = function(X, I) {
        if (typeof X != "object" || X === null)
          return X;
        var A = X[Symbol.toPrimitive];
        if (A !== void 0) {
          var i = A.call(X, I || "default");
          if (typeof i != "object")
            return i;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (I === "string" ? String : Number)(X);
      }(N, "string");
      return typeof H == "symbol" ? H : String(H);
    }(t)) in w ? Object.defineProperty(w, t, { value: y, enumerable: !0, configurable: !0, writable: !0 }) : w[t] = y, w;
  }
  function Q(w, t) {
    if (w == null)
      return {};
    var y, N, H = function(I, A) {
      if (I == null)
        return {};
      var i, e, l = {}, c = Object.keys(I);
      for (e = 0; e < c.length; e++)
        i = c[e], A.indexOf(i) >= 0 || (l[i] = I[i]);
      return l;
    }(w, t);
    if (Object.getOwnPropertySymbols) {
      var X = Object.getOwnPropertySymbols(w);
      for (N = 0; N < X.length; N++)
        y = X[N], t.indexOf(y) >= 0 || Object.prototype.propertyIsEnumerable.call(w, y) && (H[y] = w[y]);
    }
    return H;
  }
  var F = (w) => {
    var t, y, { className: N, label: H, error: X, hint: I, success: A, size: i = "medium", disabled: e = !1, children: l } = w, c = Q(w, $), m = (t = l == null || (y = l.props) === null || y === void 0 ? void 0 : y.id) !== null && t !== void 0 ? t : "dropin-field-".concat(Math.random().toString(36)), f = l && typeof l.type != "string" ? l.type : null;
    return (0, tn.BX)("div", x(x({}, c), {}, { className: (0, W.S)(["dropin-field", N]), children: [H && (0, tn.tZ)("label", { className: (0, W.S)(["dropin-field__label", ["dropin-field__label--disabled", e], "dropin-field__label--".concat(i)]), htmlFor: m, children: H }), (0, tn.tZ)("div", { className: (0, W.S)(["dropin-field__content"]), children: f && l && (0, pn.az)(f, x(x({}, l.props), {}, { id: m, key: l.key, disabled: e, size: i, error: !!X, success: !!A && !X })) }), (0, tn.tZ)("div", { className: (0, W.S)(["dropin-field__hint", ["dropin-field__hint--".concat(i), i], ["dropin-field__hint--error", !!X], ["dropin-field__hint--success", !!A && !X], ["dropin-field__hint--disabled", !!e]]), children: X || A || I })] }));
  };
}, 8910: (J, j, n) => {
  n.d(j, { J: () => w });
  var d = n(5587), o = n(3354), _ = n(1892), h = n.n(_), k = n(5760), nn = n.n(k), U = n(8311), V = n.n(U), P = n(1615), z = n.n(P), R = n(8060), Y = n.n(R), W = n(8746), tn = { attributes: { "data-dropin": "storefront-order-confirmation", "data-sdk": "0.22.0" }, styleTagTransform: function(t, y) {
    var l;
    window._loadedStyles = window._loadedStyles ?? {};
    const N = (l = t == null ? void 0 : t.match(/^\.dropin-(\w+)/)) == null ? void 0 : l[1], H = y.getAttribute("data-sdk"), X = N ? `sdk/${N}` : y.getAttribute("data-dropin");
    y.setAttribute("data-dropin", X), y.removeAttribute("data-sdk");
    const I = window._loadedStyles[X];
    if (I) {
      const c = function(m, f) {
        const [b, Z] = m.split("-"), [en, dn] = f.split("-"), mn = [...b.split("."), Z], yn = [...en.split("."), dn], bn = parseInt(mn[0], 10), xn = parseInt(yn[0], 10);
        if (bn !== xn)
          return bn > xn ? m : f;
        const Pn = parseInt(mn[1], 10), r = parseInt(yn[1], 10);
        if (Pn !== r)
          return Pn > r ? m : f;
        const a = parseInt(mn[2], 10), u = parseInt(yn[2], 10);
        if (a !== u)
          return a > u ? m : f;
        if (mn[3] && yn[3]) {
          const C = /(alpha|beta)(.*)/, T = mn[3].match(C), p = yn[3].match(C), v = T[1], O = p[1], G = parseInt(T[2], 10), K = parseInt(p[2], 10);
          if (v === O)
            return G > K ? m : f;
          if (v === "alpha" && O === "beta")
            return f;
          if (v === "beta" && O === "alpha")
            return m;
        }
        return mn[3] ? f : m;
      }(H, I.sdk);
      if (!N || N && c === I.sdk) {
        const m = I.style.textContent;
        I.style.textContent = `${m}
/* --- MERGED --- */
${t}`;
      } else
        N && c !== I.sdk && (I.style.textContent = `/* --- UPGRADED --- */
${t}`);
      return void y.remove();
    }
    y.textContent = t, window._loadedStyles[X] = { sdk: H, core: N, style: y };
    const A = document.querySelector("head"), { lastDropinStyleInjected: i, lastSDKStyleInjected: e } = window._loadedStyles;
    N ? (e ? A.insertBefore(y, e.nextSibling) : A.insertBefore(y, A.firstChild), window._loadedStyles.lastSDKStyleInjected = y) : (i ? A.insertBefore(y, i.nextSibling) : e ? A.insertBefore(y, e.nextSibling) : A.insertBefore(y, A.firstChild), window._loadedStyles.lastDropinStyleInjected = y);
  } };
  tn.setAttributes = z(), tn.insert = V().bind(null, "head"), tn.domAPI = nn(), tn.insertStyleElement = Y(), h()(W.Z, tn), W.Z && W.Z.locals && W.Z.locals;
  var pn = n(2754), $ = ["source", "size", "stroke", "viewBox", "className"];
  function M(t, y) {
    var N = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var H = Object.getOwnPropertySymbols(t);
      y && (H = H.filter(function(X) {
        return Object.getOwnPropertyDescriptor(t, X).enumerable;
      })), N.push.apply(N, H);
    }
    return N;
  }
  function x(t) {
    for (var y = 1; y < arguments.length; y++) {
      var N = arguments[y] != null ? arguments[y] : {};
      y % 2 ? M(Object(N), !0).forEach(function(H) {
        D(t, H, N[H]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(N)) : M(Object(N)).forEach(function(H) {
        Object.defineProperty(t, H, Object.getOwnPropertyDescriptor(N, H));
      });
    }
    return t;
  }
  function D(t, y, N) {
    return (y = function(H) {
      var X = function(I, A) {
        if (typeof I != "object" || I === null)
          return I;
        var i = I[Symbol.toPrimitive];
        if (i !== void 0) {
          var e = i.call(I, A || "default");
          if (typeof e != "object")
            return e;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (A === "string" ? String : Number)(I);
      }(H, "string");
      return typeof X == "symbol" ? X : String(X);
    }(y)) in t ? Object.defineProperty(t, y, { value: N, enumerable: !0, configurable: !0, writable: !0 }) : t[y] = N, t;
  }
  function Q(t, y) {
    if (t == null)
      return {};
    var N, H, X = function(A, i) {
      if (A == null)
        return {};
      var e, l, c = {}, m = Object.keys(A);
      for (l = 0; l < m.length; l++)
        e = m[l], i.indexOf(e) >= 0 || (c[e] = A[e]);
      return c;
    }(t, y);
    if (Object.getOwnPropertySymbols) {
      var I = Object.getOwnPropertySymbols(t);
      for (H = 0; H < I.length; H++)
        N = I[H], y.indexOf(N) >= 0 || Object.prototype.propertyIsEnumerable.call(t, N) && (X[N] = t[N]);
    }
    return X;
  }
  var F = { Add: (0, o.Vo)(() => Promise.resolve().then(n.bind(n, 1676))), Bulk: (0, o.Vo)(() => n.e(540).then(n.bind(n, 2540))), Burger: (0, o.Vo)(() => n.e(660).then(n.bind(n, 5660))), Cart: (0, o.Vo)(() => n.e(148).then(n.bind(n, 1148))), Check: (0, o.Vo)(() => n.e(966).then(n.bind(n, 6966))), ChevronDown: (0, o.Vo)(() => n.e(991).then(n.bind(n, 8991))), ChevronUp: (0, o.Vo)(() => n.e(684).then(n.bind(n, 6684))), ChevronRight: (0, o.Vo)(() => n.e(941).then(n.bind(n, 3941))), Close: (0, o.Vo)(() => Promise.resolve().then(n.bind(n, 7498))), Heart: (0, o.Vo)(() => n.e(949).then(n.bind(n, 9949))), Minus: (0, o.Vo)(() => Promise.resolve().then(n.bind(n, 2504))), Placeholder: (0, o.Vo)(() => n.e(959).then(n.bind(n, 7959))), PlaceholderFilled: (0, o.Vo)(() => n.e(840).then(n.bind(n, 4840))), Search: (0, o.Vo)(() => n.e(96).then(n.bind(n, 8096))), SearchFilled: (0, o.Vo)(() => n.e(570).then(n.bind(n, 9570))), Sort: (0, o.Vo)(() => n.e(688).then(n.bind(n, 2688))), Star: (0, o.Vo)(() => n.e(413).then(n.bind(n, 3413))), View: (0, o.Vo)(() => n.e(521).then(n.bind(n, 2521))), User: (0, o.Vo)(() => n.e(402).then(n.bind(n, 6402))), Warning: (0, o.Vo)(() => n.e(793).then(n.bind(n, 1793))), Locker: (0, o.Vo)(() => n.e(590).then(n.bind(n, 590))), Wallet: (0, o.Vo)(() => n.e(843).then(n.bind(n, 2843))), Card: (0, o.Vo)(() => n.e(705).then(n.bind(n, 7705))), Order: (0, o.Vo)(() => n.e(337).then(n.bind(n, 7337))), Delivery: (0, o.Vo)(() => n.e(386).then(n.bind(n, 5386))), OrderError: (0, o.Vo)(() => n.e(284).then(n.bind(n, 4284))), OrderSuccess: (0, o.Vo)(() => Promise.resolve().then(n.bind(n, 8174))), PaymentError: (0, o.Vo)(() => n.e(228).then(n.bind(n, 4228))), CheckWithCircle: (0, o.Vo)(() => Promise.resolve().then(n.bind(n, 6553))), WarningWithCircle: (0, o.Vo)(() => Promise.resolve().then(n.bind(n, 8420))), WarningFilled: (0, o.Vo)(() => Promise.resolve().then(n.bind(n, 2605))), InfoFilled: (0, o.Vo)(() => n.e(641).then(n.bind(n, 2641))), HeartFilled: (0, o.Vo)(() => n.e(847).then(n.bind(n, 3847))), Trash: (0, o.Vo)(() => Promise.resolve().then(n.bind(n, 2734))) };
  function w(t) {
    var { source: y, size: N = "24", stroke: H = "2", viewBox: X = "0 0 24 24", className: I } = t, A = Q(t, $), i = typeof y == "string" ? F[y] : null, e = { className: (0, d.S)(["dropin-icon", "dropin-icon--shape-stroke-".concat(H), I]), width: N, height: N, viewBox: X };
    return (0, pn.tZ)(o.n4, { fallback: null, children: i ? (0, pn.tZ)(i, x(x({}, A), e)) : (0, pn.tZ)(y, x(x({}, A), e)) });
  }
}, 9728: (J, j, n) => {
  n.d(j, { E: () => X });
  var d = n(3354), o = n(2743);
  function _(I, A) {
    var i = Object.keys(I);
    if (Object.getOwnPropertySymbols) {
      var e = Object.getOwnPropertySymbols(I);
      A && (e = e.filter(function(l) {
        return Object.getOwnPropertyDescriptor(I, l).enumerable;
      })), i.push.apply(i, e);
    }
    return i;
  }
  function h(I) {
    for (var A = 1; A < arguments.length; A++) {
      var i = arguments[A] != null ? arguments[A] : {};
      A % 2 ? _(Object(i), !0).forEach(function(e) {
        k(I, e, i[e]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(I, Object.getOwnPropertyDescriptors(i)) : _(Object(i)).forEach(function(e) {
        Object.defineProperty(I, e, Object.getOwnPropertyDescriptor(i, e));
      });
    }
    return I;
  }
  function k(I, A, i) {
    return (A = function(e) {
      var l = function(c, m) {
        if (typeof c != "object" || c === null)
          return c;
        var f = c[Symbol.toPrimitive];
        if (f !== void 0) {
          var b = f.call(c, m || "default");
          if (typeof b != "object")
            return b;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (m === "string" ? String : Number)(c);
      }(e, "string");
      return typeof l == "symbol" ? l : String(l);
    }(A)) in I ? Object.defineProperty(I, A, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : I[A] = i, I;
  }
  var nn = { medium: 768, large: 1024, xlarge: 1366, xxlarge: 1920 }, U = (I, A) => {
    if (I && A != null && A.width) {
      var i = (e) => ((l, c) => {
        var [m, f] = l.split("?"), b = new URLSearchParams(f), Z = (0, o.b)(), en = {};
        return en = Z && Object.keys(Z).length > 0 && c ? Object.entries(c).reduce((dn, mn) => {
          var [yn, bn] = mn, xn = Z[yn];
          return xn && (dn[xn] = bn), dn;
        }, {}) : h({ auto: "webp", quality: 80, crop: !1, fit: "cover" }, c), Object.entries(en).forEach((dn) => {
          var [mn, yn] = dn;
          yn != null && b.set(mn, String(yn));
        }), "".concat(m, "?").concat(b.toString());
      })(I, h({}, e));
      return Object.entries(nn).map((e) => {
        var [, l] = e, c = A.width * l / nn.xxlarge;
        return "".concat(i(h(h({}, A), {}, { width: c })), " ").concat(l, "w");
      }).join(`,
`);
    }
  }, V = n(5587), P = n(1892), z = n.n(P), R = n(5760), Y = n.n(R), W = n(8311), tn = n.n(W), pn = n(1615), $ = n.n(pn), M = n(8060), x = n.n(M), D = n(9490), Q = { attributes: { "data-dropin": "storefront-order-confirmation", "data-sdk": "0.22.0" }, styleTagTransform: function(I, A) {
    var Z;
    window._loadedStyles = window._loadedStyles ?? {};
    const i = (Z = I == null ? void 0 : I.match(/^\.dropin-(\w+)/)) == null ? void 0 : Z[1], e = A.getAttribute("data-sdk"), l = i ? `sdk/${i}` : A.getAttribute("data-dropin");
    A.setAttribute("data-dropin", l), A.removeAttribute("data-sdk");
    const c = window._loadedStyles[l];
    if (c) {
      const en = function(dn, mn) {
        const [yn, bn] = dn.split("-"), [xn, Pn] = mn.split("-"), r = [...yn.split("."), bn], a = [...xn.split("."), Pn], u = parseInt(r[0], 10), C = parseInt(a[0], 10);
        if (u !== C)
          return u > C ? dn : mn;
        const T = parseInt(r[1], 10), p = parseInt(a[1], 10);
        if (T !== p)
          return T > p ? dn : mn;
        const v = parseInt(r[2], 10), O = parseInt(a[2], 10);
        if (v !== O)
          return v > O ? dn : mn;
        if (r[3] && a[3]) {
          const G = /(alpha|beta)(.*)/, K = r[3].match(G), an = a[3].match(G), E = K[1], fn = an[1], ln = parseInt(K[2], 10), gn = parseInt(an[2], 10);
          if (E === fn)
            return ln > gn ? dn : mn;
          if (E === "alpha" && fn === "beta")
            return mn;
          if (E === "beta" && fn === "alpha")
            return dn;
        }
        return r[3] ? mn : dn;
      }(e, c.sdk);
      if (!i || i && en === c.sdk) {
        const dn = c.style.textContent;
        c.style.textContent = `${dn}
/* --- MERGED --- */
${I}`;
      } else
        i && en !== c.sdk && (c.style.textContent = `/* --- UPGRADED --- */
${I}`);
      return void A.remove();
    }
    A.textContent = I, window._loadedStyles[l] = { sdk: e, core: i, style: A };
    const m = document.querySelector("head"), { lastDropinStyleInjected: f, lastSDKStyleInjected: b } = window._loadedStyles;
    i ? (b ? m.insertBefore(A, b.nextSibling) : m.insertBefore(A, m.firstChild), window._loadedStyles.lastSDKStyleInjected = A) : (f ? m.insertBefore(A, f.nextSibling) : b ? m.insertBefore(A, b.nextSibling) : m.insertBefore(A, m.firstChild), window._loadedStyles.lastDropinStyleInjected = A);
  } };
  Q.setAttributes = $(), Q.insert = tn().bind(null, "head"), Q.domAPI = Y(), Q.insertStyleElement = x(), z()(D.Z, Q), D.Z && D.Z.locals && D.Z.locals;
  var F = n(2754), w = ["className", "src", "params", "loading", "srcSet", "onLoad"];
  function t(I, A) {
    var i = Object.keys(I);
    if (Object.getOwnPropertySymbols) {
      var e = Object.getOwnPropertySymbols(I);
      A && (e = e.filter(function(l) {
        return Object.getOwnPropertyDescriptor(I, l).enumerable;
      })), i.push.apply(i, e);
    }
    return i;
  }
  function y(I) {
    for (var A = 1; A < arguments.length; A++) {
      var i = arguments[A] != null ? arguments[A] : {};
      A % 2 ? t(Object(i), !0).forEach(function(e) {
        N(I, e, i[e]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(I, Object.getOwnPropertyDescriptors(i)) : t(Object(i)).forEach(function(e) {
        Object.defineProperty(I, e, Object.getOwnPropertyDescriptor(i, e));
      });
    }
    return I;
  }
  function N(I, A, i) {
    return (A = function(e) {
      var l = function(c, m) {
        if (typeof c != "object" || c === null)
          return c;
        var f = c[Symbol.toPrimitive];
        if (f !== void 0) {
          var b = f.call(c, m || "default");
          if (typeof b != "object")
            return b;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (m === "string" ? String : Number)(c);
      }(e, "string");
      return typeof l == "symbol" ? l : String(l);
    }(A)) in I ? Object.defineProperty(I, A, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : I[A] = i, I;
  }
  function H(I, A) {
    if (I == null)
      return {};
    var i, e, l = function(m, f) {
      if (m == null)
        return {};
      var b, Z, en = {}, dn = Object.keys(m);
      for (Z = 0; Z < dn.length; Z++)
        b = dn[Z], f.indexOf(b) >= 0 || (en[b] = m[b]);
      return en;
    }(I, A);
    if (Object.getOwnPropertySymbols) {
      var c = Object.getOwnPropertySymbols(I);
      for (e = 0; e < c.length; e++)
        i = c[e], A.indexOf(i) >= 0 || Object.prototype.propertyIsEnumerable.call(I, i) && (l[i] = I[i]);
    }
    return l;
  }
  var X = (I) => {
    var { className: A, src: i, params: e, loading: l = "lazy", srcSet: c, onLoad: m } = I, f = H(I, w), [b, Z] = (0, d.eJ)(!1), en = (0, d.Ye)(() => c || (i && e ? U(i, y({}, e)) : void 0), [e, i, c]);
    return (0, F.tZ)("img", y(y({}, f), {}, { className: (0, V.S)(["dropin-image", ["dropin-image--loaded", b], A]), loading: l, onLoad: (dn) => {
      Z(!0), m == null || m(dn);
    }, src: i, srcSet: en }));
  };
}, 130: (J, j, n) => {
  n.d(j, { I: () => X });
  var d = n(8910), o = n(1892), _ = n.n(o), h = n(5760), k = n.n(h), nn = n(8311), U = n.n(nn), V = n(1615), P = n.n(V), z = n(8060), R = n.n(z), Y = n(5566), W = { attributes: { "data-dropin": "storefront-order-confirmation", "data-sdk": "0.22.0" }, styleTagTransform: function(I, A) {
    var Z;
    window._loadedStyles = window._loadedStyles ?? {};
    const i = (Z = I == null ? void 0 : I.match(/^\.dropin-(\w+)/)) == null ? void 0 : Z[1], e = A.getAttribute("data-sdk"), l = i ? `sdk/${i}` : A.getAttribute("data-dropin");
    A.setAttribute("data-dropin", l), A.removeAttribute("data-sdk");
    const c = window._loadedStyles[l];
    if (c) {
      const en = function(dn, mn) {
        const [yn, bn] = dn.split("-"), [xn, Pn] = mn.split("-"), r = [...yn.split("."), bn], a = [...xn.split("."), Pn], u = parseInt(r[0], 10), C = parseInt(a[0], 10);
        if (u !== C)
          return u > C ? dn : mn;
        const T = parseInt(r[1], 10), p = parseInt(a[1], 10);
        if (T !== p)
          return T > p ? dn : mn;
        const v = parseInt(r[2], 10), O = parseInt(a[2], 10);
        if (v !== O)
          return v > O ? dn : mn;
        if (r[3] && a[3]) {
          const G = /(alpha|beta)(.*)/, K = r[3].match(G), an = a[3].match(G), E = K[1], fn = an[1], ln = parseInt(K[2], 10), gn = parseInt(an[2], 10);
          if (E === fn)
            return ln > gn ? dn : mn;
          if (E === "alpha" && fn === "beta")
            return mn;
          if (E === "beta" && fn === "alpha")
            return dn;
        }
        return r[3] ? mn : dn;
      }(e, c.sdk);
      if (!i || i && en === c.sdk) {
        const dn = c.style.textContent;
        c.style.textContent = `${dn}
/* --- MERGED --- */
${I}`;
      } else
        i && en !== c.sdk && (c.style.textContent = `/* --- UPGRADED --- */
${I}`);
      return void A.remove();
    }
    A.textContent = I, window._loadedStyles[l] = { sdk: e, core: i, style: A };
    const m = document.querySelector("head"), { lastDropinStyleInjected: f, lastSDKStyleInjected: b } = window._loadedStyles;
    i ? (b ? m.insertBefore(A, b.nextSibling) : m.insertBefore(A, m.firstChild), window._loadedStyles.lastSDKStyleInjected = A) : (f ? m.insertBefore(A, f.nextSibling) : b ? m.insertBefore(A, b.nextSibling) : m.insertBefore(A, m.firstChild), window._loadedStyles.lastDropinStyleInjected = A);
  } };
  W.setAttributes = P(), W.insert = U().bind(null, "head"), W.domAPI = k(), W.insertStyleElement = R(), _()(Y.Z, W), Y.Z && Y.Z.locals && Y.Z.locals;
  var tn = n(8420), pn = n(6553), $ = n(7654), M = n(5587), x = n(1177), D = n(5792), Q = n(2754), F = ["name", "value", "variant", "className", "disabled", "error", "floatingLabel", "onValue", "onUpdateError", "size", "icon", "maxLength", "success"];
  function w(I, A) {
    var i = Object.keys(I);
    if (Object.getOwnPropertySymbols) {
      var e = Object.getOwnPropertySymbols(I);
      A && (e = e.filter(function(l) {
        return Object.getOwnPropertyDescriptor(I, l).enumerable;
      })), i.push.apply(i, e);
    }
    return i;
  }
  function t(I) {
    for (var A = 1; A < arguments.length; A++) {
      var i = arguments[A] != null ? arguments[A] : {};
      A % 2 ? w(Object(i), !0).forEach(function(e) {
        y(I, e, i[e]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(I, Object.getOwnPropertyDescriptors(i)) : w(Object(i)).forEach(function(e) {
        Object.defineProperty(I, e, Object.getOwnPropertyDescriptor(i, e));
      });
    }
    return I;
  }
  function y(I, A, i) {
    return (A = function(e) {
      var l = function(c, m) {
        if (typeof c != "object" || c === null)
          return c;
        var f = c[Symbol.toPrimitive];
        if (f !== void 0) {
          var b = f.call(c, m || "default");
          if (typeof b != "object")
            return b;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (m === "string" ? String : Number)(c);
      }(e, "string");
      return typeof l == "symbol" ? l : String(l);
    }(A)) in I ? Object.defineProperty(I, A, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : I[A] = i, I;
  }
  function N(I, A, i, e, l, c, m) {
    try {
      var f = I[c](m), b = f.value;
    } catch (Z) {
      return void i(Z);
    }
    f.done ? A(b) : Promise.resolve(b).then(e, l);
  }
  function H(I, A) {
    if (I == null)
      return {};
    var i, e, l = function(m, f) {
      if (m == null)
        return {};
      var b, Z, en = {}, dn = Object.keys(m);
      for (Z = 0; Z < dn.length; Z++)
        b = dn[Z], f.indexOf(b) >= 0 || (en[b] = m[b]);
      return en;
    }(I, A);
    if (Object.getOwnPropertySymbols) {
      var c = Object.getOwnPropertySymbols(I);
      for (e = 0; e < c.length; e++)
        i = c[e], A.indexOf(i) >= 0 || Object.prototype.propertyIsEnumerable.call(I, i) && (l[i] = I[i]);
    }
    return l;
  }
  var X = (I) => {
    var { name: A, value: i, variant: e = "primary", className: l, disabled: c, error: m, floatingLabel: f, onValue: b, onUpdateError: Z, size: en = "medium", icon: dn, maxLength: mn, success: yn } = I, bn = H(I, F), xn = (bn == null ? void 0 : bn.id) || A || "dropin-input-".concat(Math.random().toString(36)), Pn = (0, D.I4)((0, $.D)(function() {
      var r, a = (r = function* (u) {
        if (b)
          try {
            yield b(u);
          } catch (C) {
            Z && Z(C);
          }
      }, function() {
        var u = this, C = arguments;
        return new Promise(function(T, p) {
          var v = r.apply(u, C);
          function O(K) {
            N(v, T, p, O, G, "next", K);
          }
          function G(K) {
            N(v, T, p, O, G, "throw", K);
          }
          O(void 0);
        });
      });
      return function(u) {
        return a.apply(this, arguments);
      };
    }(), 200), [b, Z]);
    return (0, Q.BX)("div", { className: (0, M.S)(["dropin-input-container", "dropin-input-container--".concat(e), ["dropin-input-container--floating", !!f], ["dropin-input-container--disabled", c]]), children: [dn && (0, Q.tZ)(x.F, { node: dn, className: (0, M.S)(["dropin-input__field-icon--left", dn.props.className]) }), (0, Q.BX)("div", { className: "dropin-input-label-container", children: [(0, Q.tZ)("input", t(t({ id: xn, onChange: (r) => {
      var a = r.target;
      Pn(a.value.trim());
    }, type: "text", maxLength: mn, name: A, value: i }, bn), {}, { className: (0, M.S)(["dropin-input", "dropin-input--".concat(en), "dropin-input--".concat(e), ["dropin-input--error", !!m], ["dropin-input--success", !!yn], ["dropin-input--disabled", c], ["dropin-input--floating", !!f], ["dropin-input--icon-left", !!dn], l]), disabled: c })), f && (0, Q.tZ)("label", { htmlFor: xn, className: (0, M.S)([["dropin-input__label--floating", !!f], ["dropin-input__label--floating--icon-left", !!dn], ["dropin-input__label--floating--error", !!m]]), children: f })] }), m && (0, Q.tZ)("div", { className: (0, M.S)(["dropin-input__field-icon--right", "dropin-input__field-icon--error"]), children: (0, Q.tZ)(d.J, { source: tn.default, size: "16", stroke: "2", className: "dropin-input--warning-icon", viewBox: "-1 -1 26 26" }) }), yn && (0, Q.tZ)("div", { className: (0, M.S)(["dropin-input__field-icon--right", "dropin-input__field-icon--success"]), children: (0, Q.tZ)(d.J, { source: pn.default, size: "16", stroke: "2", className: "dropin-input--success-icon", viewBox: "-1 -1 26 26" }) })] });
  };
}, 470: (J, j, n) => {
  n.d(j, { t: () => F });
  var d = n(3354), o = n(5587), _ = n(1892), h = n.n(_), k = n(5760), nn = n.n(k), U = n(8311), V = n.n(U), P = n(1615), z = n.n(P), R = n(8060), Y = n.n(R), W = n(9271), tn = { attributes: { "data-dropin": "storefront-order-confirmation", "data-sdk": "0.22.0" }, styleTagTransform: function(w, t) {
    var e;
    window._loadedStyles = window._loadedStyles ?? {};
    const y = (e = w == null ? void 0 : w.match(/^\.dropin-(\w+)/)) == null ? void 0 : e[1], N = t.getAttribute("data-sdk"), H = y ? `sdk/${y}` : t.getAttribute("data-dropin");
    t.setAttribute("data-dropin", H), t.removeAttribute("data-sdk");
    const X = window._loadedStyles[H];
    if (X) {
      const l = function(c, m) {
        const [f, b] = c.split("-"), [Z, en] = m.split("-"), dn = [...f.split("."), b], mn = [...Z.split("."), en], yn = parseInt(dn[0], 10), bn = parseInt(mn[0], 10);
        if (yn !== bn)
          return yn > bn ? c : m;
        const xn = parseInt(dn[1], 10), Pn = parseInt(mn[1], 10);
        if (xn !== Pn)
          return xn > Pn ? c : m;
        const r = parseInt(dn[2], 10), a = parseInt(mn[2], 10);
        if (r !== a)
          return r > a ? c : m;
        if (dn[3] && mn[3]) {
          const u = /(alpha|beta)(.*)/, C = dn[3].match(u), T = mn[3].match(u), p = C[1], v = T[1], O = parseInt(C[2], 10), G = parseInt(T[2], 10);
          if (p === v)
            return O > G ? c : m;
          if (p === "alpha" && v === "beta")
            return m;
          if (p === "beta" && v === "alpha")
            return c;
        }
        return dn[3] ? m : c;
      }(N, X.sdk);
      if (!y || y && l === X.sdk) {
        const c = X.style.textContent;
        X.style.textContent = `${c}
/* --- MERGED --- */
${w}`;
      } else
        y && l !== X.sdk && (X.style.textContent = `/* --- UPGRADED --- */
${w}`);
      return void t.remove();
    }
    t.textContent = w, window._loadedStyles[H] = { sdk: N, core: y, style: t };
    const I = document.querySelector("head"), { lastDropinStyleInjected: A, lastSDKStyleInjected: i } = window._loadedStyles;
    y ? (i ? I.insertBefore(t, i.nextSibling) : I.insertBefore(t, I.firstChild), window._loadedStyles.lastSDKStyleInjected = t) : (A ? I.insertBefore(t, A.nextSibling) : i ? I.insertBefore(t, i.nextSibling) : I.insertBefore(t, I.firstChild), window._loadedStyles.lastDropinStyleInjected = t);
  } };
  tn.setAttributes = z(), tn.insert = V().bind(null, "head"), tn.domAPI = nn(), tn.insertStyleElement = Y(), h()(W.Z, tn), W.Z && W.Z.locals && W.Z.locals;
  var pn = n(2754), $ = ["amount", "currency", "locale", "variant", "weight", "className", "children", "sale", "formatOptions", "size"];
  function M(w, t) {
    var y = Object.keys(w);
    if (Object.getOwnPropertySymbols) {
      var N = Object.getOwnPropertySymbols(w);
      t && (N = N.filter(function(H) {
        return Object.getOwnPropertyDescriptor(w, H).enumerable;
      })), y.push.apply(y, N);
    }
    return y;
  }
  function x(w) {
    for (var t = 1; t < arguments.length; t++) {
      var y = arguments[t] != null ? arguments[t] : {};
      t % 2 ? M(Object(y), !0).forEach(function(N) {
        D(w, N, y[N]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(w, Object.getOwnPropertyDescriptors(y)) : M(Object(y)).forEach(function(N) {
        Object.defineProperty(w, N, Object.getOwnPropertyDescriptor(y, N));
      });
    }
    return w;
  }
  function D(w, t, y) {
    return (t = function(N) {
      var H = function(X, I) {
        if (typeof X != "object" || X === null)
          return X;
        var A = X[Symbol.toPrimitive];
        if (A !== void 0) {
          var i = A.call(X, I || "default");
          if (typeof i != "object")
            return i;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (I === "string" ? String : Number)(X);
      }(N, "string");
      return typeof H == "symbol" ? H : String(H);
    }(t)) in w ? Object.defineProperty(w, t, { value: y, enumerable: !0, configurable: !0, writable: !0 }) : w[t] = y, w;
  }
  function Q(w, t) {
    if (w == null)
      return {};
    var y, N, H = function(I, A) {
      if (I == null)
        return {};
      var i, e, l = {}, c = Object.keys(I);
      for (e = 0; e < c.length; e++)
        i = c[e], A.indexOf(i) >= 0 || (l[i] = I[i]);
      return l;
    }(w, t);
    if (Object.getOwnPropertySymbols) {
      var X = Object.getOwnPropertySymbols(w);
      for (N = 0; N < X.length; N++)
        y = X[N], t.indexOf(y) >= 0 || Object.prototype.propertyIsEnumerable.call(w, y) && (H[y] = w[y]);
    }
    return H;
  }
  var F = (w) => {
    var { amount: t = 0, currency: y, locale: N, variant: H = "default", weight: X = "bold", className: I, children: A, sale: i = !1, formatOptions: e = {}, size: l = "small" } = w, c = Q(w, $), m = (0, d.Ye)(() => new Intl.NumberFormat(N, x({ style: "currency", currency: y || "USD", minimumFractionDigits: 2, maximumFractionDigits: 2 }, e)), [N, y, e]), f = (0, d.Ye)(() => m.format(t), [t, m]);
    return (0, pn.tZ)("span", x(x({}, c), {}, { className: (0, o.S)(["dropin-price", "dropin-price--".concat(H), "dropin-price--".concat(l), "dropin-price--".concat(X), ["dropin-price--sale", i], I]), children: f }));
  };
}, 5137: (J, j, n) => {
  n.d(j, { O: () => t, d: () => w });
  var d = n(5587), o = n(1892), _ = n.n(o), h = n(5760), k = n.n(h), nn = n(8311), U = n.n(nn), V = n(1615), P = n.n(V), z = n(8060), R = n.n(z), Y = n(5048), W = { attributes: { "data-dropin": "storefront-order-confirmation", "data-sdk": "0.22.0" }, styleTagTransform: function(y, N) {
    var c;
    window._loadedStyles = window._loadedStyles ?? {};
    const H = (c = y == null ? void 0 : y.match(/^\.dropin-(\w+)/)) == null ? void 0 : c[1], X = N.getAttribute("data-sdk"), I = H ? `sdk/${H}` : N.getAttribute("data-dropin");
    N.setAttribute("data-dropin", I), N.removeAttribute("data-sdk");
    const A = window._loadedStyles[I];
    if (A) {
      const m = function(f, b) {
        const [Z, en] = f.split("-"), [dn, mn] = b.split("-"), yn = [...Z.split("."), en], bn = [...dn.split("."), mn], xn = parseInt(yn[0], 10), Pn = parseInt(bn[0], 10);
        if (xn !== Pn)
          return xn > Pn ? f : b;
        const r = parseInt(yn[1], 10), a = parseInt(bn[1], 10);
        if (r !== a)
          return r > a ? f : b;
        const u = parseInt(yn[2], 10), C = parseInt(bn[2], 10);
        if (u !== C)
          return u > C ? f : b;
        if (yn[3] && bn[3]) {
          const T = /(alpha|beta)(.*)/, p = yn[3].match(T), v = bn[3].match(T), O = p[1], G = v[1], K = parseInt(p[2], 10), an = parseInt(v[2], 10);
          if (O === G)
            return K > an ? f : b;
          if (O === "alpha" && G === "beta")
            return b;
          if (O === "beta" && G === "alpha")
            return f;
        }
        return yn[3] ? b : f;
      }(X, A.sdk);
      if (!H || H && m === A.sdk) {
        const f = A.style.textContent;
        A.style.textContent = `${f}
/* --- MERGED --- */
${y}`;
      } else
        H && m !== A.sdk && (A.style.textContent = `/* --- UPGRADED --- */
${y}`);
      return void N.remove();
    }
    N.textContent = y, window._loadedStyles[I] = { sdk: X, core: H, style: N };
    const i = document.querySelector("head"), { lastDropinStyleInjected: e, lastSDKStyleInjected: l } = window._loadedStyles;
    H ? (l ? i.insertBefore(N, l.nextSibling) : i.insertBefore(N, i.firstChild), window._loadedStyles.lastSDKStyleInjected = N) : (e ? i.insertBefore(N, e.nextSibling) : l ? i.insertBefore(N, l.nextSibling) : i.insertBefore(N, i.firstChild), window._loadedStyles.lastDropinStyleInjected = N);
  } };
  W.setAttributes = P(), W.insert = U().bind(null, "head"), W.domAPI = k(), W.insertStyleElement = R(), _()(Y.Z, W), Y.Z && Y.Z.locals && Y.Z.locals;
  var tn = n(2754), pn = ["className", "fullWidth", "lines", "size", "variant", "children", "multilineGap"], $ = ["className", "children", "rowGap"];
  function M(y, N) {
    var H = Object.keys(y);
    if (Object.getOwnPropertySymbols) {
      var X = Object.getOwnPropertySymbols(y);
      N && (X = X.filter(function(I) {
        return Object.getOwnPropertyDescriptor(y, I).enumerable;
      })), H.push.apply(H, X);
    }
    return H;
  }
  function x(y) {
    for (var N = 1; N < arguments.length; N++) {
      var H = arguments[N] != null ? arguments[N] : {};
      N % 2 ? M(Object(H), !0).forEach(function(X) {
        D(y, X, H[X]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(y, Object.getOwnPropertyDescriptors(H)) : M(Object(H)).forEach(function(X) {
        Object.defineProperty(y, X, Object.getOwnPropertyDescriptor(H, X));
      });
    }
    return y;
  }
  function D(y, N, H) {
    return (N = function(X) {
      var I = function(A, i) {
        if (typeof A != "object" || A === null)
          return A;
        var e = A[Symbol.toPrimitive];
        if (e !== void 0) {
          var l = e.call(A, i || "default");
          if (typeof l != "object")
            return l;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (i === "string" ? String : Number)(A);
      }(X, "string");
      return typeof I == "symbol" ? I : String(I);
    }(N)) in y ? Object.defineProperty(y, N, { value: H, enumerable: !0, configurable: !0, writable: !0 }) : y[N] = H, y;
  }
  function Q(y, N) {
    if (y == null)
      return {};
    var H, X, I = function(i, e) {
      if (i == null)
        return {};
      var l, c, m = {}, f = Object.keys(i);
      for (c = 0; c < f.length; c++)
        l = f[c], e.indexOf(l) >= 0 || (m[l] = i[l]);
      return m;
    }(y, N);
    if (Object.getOwnPropertySymbols) {
      var A = Object.getOwnPropertySymbols(y);
      for (X = 0; X < A.length; X++)
        H = A[X], N.indexOf(H) >= 0 || Object.prototype.propertyIsEnumerable.call(y, H) && (I[H] = y[H]);
    }
    return I;
  }
  var F = 1, w = (y) => {
    var { className: N, fullWidth: H = !1, lines: X = F, size: I = "small", variant: A = "row", children: i = null, multilineGap: e = "medium" } = y, l = Q(y, pn), c = [["dropin-skeleton-row__".concat(A), A], ["dropin-skeleton-row__".concat(A, "-").concat(I), A && I]];
    if (!i && A === "empty")
      return (0, tn.tZ)("div", { className: (0, d.S)(["dropin-skeleton-row dropin-skeleton-row__empty", N]) });
    if (i) {
      var m = i.trim();
      return (0, tn.tZ)("div", x(x({}, l), {}, { class: (0, d.S)(["dropin-skeleton-row", ["dropin-skeleton-row--full", H], N]), dangerouslySetInnerHTML: { __html: m } }));
    }
    return X > F ? (0, tn.tZ)("div", x(x({}, l), {}, { style: { "--multiline-gap-spacing": "var(--spacing-".concat(e, ")") }, class: (0, d.S)(["dropin-skeleton-row--multiline", ["dropin-skeleton-row--full", H], N]), children: Array.from({ length: X }).map((f, b) => (0, tn.tZ)("div", { class: (0, d.S)(["dropin-skeleton-row", ["dropin-skeleton-row--full", H], "dropin-skeleton--row__content", ...c]) }, b)) })) : (0, tn.tZ)("div", x(x({}, l), {}, { class: (0, d.S)(["dropin-skeleton-row", ["dropin-skeleton-row--full", H], "dropin-skeleton--row__content", ...c, N]) }));
  }, t = (y) => {
    var { className: N, children: H, rowGap: X = "medium" } = y, I = Q(y, $);
    return (0, tn.tZ)("div", x(x({ style: { "--row-gap-spacing": "var(--spacing-".concat(X, ")") } }, I), {}, { className: (0, d.S)(["dropin-skeleton", N]), role: "status", "aria-label": "Loading...", children: H }));
  };
}, 7654: (J, j, n) => {
  n.d(j, { D: () => d });
  var d = (o, _) => {
    var h;
    return function() {
      for (var k = arguments.length, nn = new Array(k), U = 0; U < k; U++)
        nn[U] = arguments[U];
      clearTimeout(h), h = setTimeout(() => o.apply(this, nn), _);
    };
  };
}, 4625: (J, j, n) => {
  n.d(j, { X: () => d });
  var d = (o) => {
    var _ = new FormData(o);
    return Object.fromEntries(_);
  };
}, 8534: (J, j, n) => {
  n.d(j, { Z: () => k });
  var d = n(4933), o = n.n(d), _ = n(3476), h = n.n(_)()(o());
  h.push([J.id, `.dropin-button,
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
  const k = h;
}, 4572: (J, j, n) => {
  n.d(j, { Z: () => k });
  var d = n(4933), o = n.n(d), _ = n(3476), h = n.n(_)()(o());
  h.push([J.id, `.dropin-card{
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
  const k = h;
}, 6223: (J, j, n) => {
  n.d(j, { Z: () => k });
  var d = n(4933), o = n.n(d), _ = n(3476), h = n.n(_)()(o());
  h.push([J.id, `.dropin-cart-item{
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
  const k = h;
}, 3337: (J, j, n) => {
  n.d(j, { Z: () => k });
  var d = n(4933), o = n.n(d), _ = n(3476), h = n.n(_)()(o());
  h.push([J.id, `.dropin-divider{
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
  const k = h;
}, 69: (J, j, n) => {
  n.d(j, { Z: () => k });
  var d = n(4933), o = n.n(d), _ = n(3476), h = n.n(_)()(o());
  h.push([J.id, `.dropin-field{
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
  const k = h;
}, 8746: (J, j, n) => {
  n.d(j, { Z: () => k });
  var d = n(4933), o = n.n(d), _ = n(3476), h = n.n(_)()(o());
  h.push([J.id, `.dropin-icon{
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
  const k = h;
}, 9490: (J, j, n) => {
  n.d(j, { Z: () => k });
  var d = n(4933), o = n.n(d), _ = n(3476), h = n.n(_)()(o());
  h.push([J.id, `.dropin-image{
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
  const k = h;
}, 3795: (J, j, n) => {
  n.d(j, { Z: () => k });
  var d = n(4933), o = n.n(d), _ = n(3476), h = n.n(_)()(o());
  h.push([J.id, `.dropin-incrementer__content{
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
  const k = h;
}, 5566: (J, j, n) => {
  n.d(j, { Z: () => k });
  var d = n(4933), o = n.n(d), _ = n(3476), h = n.n(_)()(o());
  h.push([J.id, `.dropin-input{
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
  const k = h;
}, 9271: (J, j, n) => {
  n.d(j, { Z: () => k });
  var d = n(4933), o = n.n(d), _ = n(3476), h = n.n(_)()(o());
  h.push([J.id, `.dropin-price{
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
  const k = h;
}, 382: (J, j, n) => {
  n.d(j, { Z: () => k });
  var d = n(4933), o = n.n(d), _ = n(3476), h = n.n(_)()(o());
  h.push([J.id, `.dropin-progress-spinner-provider{
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
  const k = h;
}, 5048: (J, j, n) => {
  n.d(j, { Z: () => k });
  var d = n(4933), o = n.n(d), _ = n(3476), h = n.n(_)()(o());
  h.push([J.id, `.dropin-skeleton{
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
  const k = h;
} }, Sr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  id: br,
  ids: hr,
  modules: wr
}, Symbol.toStringTag, { value: "Module" })), Or = 267, xr = [267], jr = { 6680: (J, j, n) => {
  n.d(j, { kp: () => d, v2: () => _, wr: () => o });
  class d extends Error {
    constructor(k) {
      super(k.map((nn) => nn.message).join(" ")), this.name = "FetchError";
    }
  }
  class o extends Error {
    constructor(k) {
      super("Missing argument: ".concat(k));
    }
  }
  class _ extends Error {
    constructor() {
      super("Order not found");
    }
  }
}, 2402: (J, j, n) => {
  n.d(j, { gX: () => nn, iE: () => U, XV: () => h, gO: () => o, mv: () => _, yg: () => k });
  const d = ((V) => {
    var P = {};
    return n.d(P, V), P;
  })({ FetchGraphQL: () => Nt });
  var { setEndpoint: o, setFetchGraphQlHeader: _, removeFetchGraphQlHeader: h, setFetchGraphQlHeaders: k, fetchGraphQl: nn, getConfig: U } = new d.FetchGraphQL().getMethods();
}, 7218: (J, j, n) => {
  n.d(j, { J: () => o, q: () => d });
  var d = `
    fragment guestOrderData on CustomerOrder {
      number
      status
      email
      shipping_method
      payment_methods {
        name
        type
      }
      total {
        subtotal {
          currency
          value
        }
        total_tax {
          currency
          value
        }
        total_shipping {
          currency
          value
        }
        grand_total {
          currency
          value
        }
      }
      billing_address {
        firstname
        lastname
        street
        city
        postcode
        telephone
        country_code
        region
        region_id
      }
      shipping_address {
        firstname
        lastname
        street
        city
        postcode
        telephone
        country_code
        region
        region_id
      }
      items {
        __typename
        id
        quantity_ordered
        product_sale_price {
          value
          currency
        }
        product {
          name
          sku
          thumbnail {
            label
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
        }
        selected_options {
          label
          value
        }
        
        ... on GiftCardOrderItem {
          gift_card {
            recipient_name
            recipient_email
            sender_name
            sender_email
            message
          }
        }
      }
    }
`, o = `
  query guestOrder($number: String!, $email: String!, $postcode: String!) {
    guestOrder(input: { number: $number, email: $email, postcode: $postcode }) {
      ...guestOrderData
    }
  }
  `.concat(d, `
`);
}, 2790: (J, j, n) => {
  n.d(j, { h: () => V });
  var d = n(2402), o = n(6680), _ = n(7218);
  function h(P, z) {
    var R = Object.keys(P);
    if (Object.getOwnPropertySymbols) {
      var Y = Object.getOwnPropertySymbols(P);
      z && (Y = Y.filter(function(W) {
        return Object.getOwnPropertyDescriptor(P, W).enumerable;
      })), R.push.apply(R, Y);
    }
    return R;
  }
  function k(P) {
    for (var z = 1; z < arguments.length; z++) {
      var R = arguments[z] != null ? arguments[z] : {};
      z % 2 ? h(Object(R), !0).forEach(function(Y) {
        nn(P, Y, R[Y]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(P, Object.getOwnPropertyDescriptors(R)) : h(Object(R)).forEach(function(Y) {
        Object.defineProperty(P, Y, Object.getOwnPropertyDescriptor(R, Y));
      });
    }
    return P;
  }
  function nn(P, z, R) {
    return (z = function(Y) {
      var W = function(tn, pn) {
        if (typeof tn != "object" || tn === null)
          return tn;
        var $ = tn[Symbol.toPrimitive];
        if ($ !== void 0) {
          var M = $.call(tn, pn || "default");
          if (typeof M != "object")
            return M;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (pn === "string" ? String : Number)(tn);
      }(Y, "string");
      return typeof W == "symbol" ? W : String(W);
    }(z)) in P ? Object.defineProperty(P, z, { value: R, enumerable: !0, configurable: !0, writable: !0 }) : P[z] = R, P;
  }
  function U(P, z, R, Y, W, tn, pn) {
    try {
      var $ = P[tn](pn), M = $.value;
    } catch (x) {
      return void R(x);
    }
    $.done ? z(M) : Promise.resolve(M).then(Y, W);
  }
  var V = function() {
    var P, z = (P = function* (R) {
      var { data: Y, errors: W } = yield (0, d.gX)(_.J, { variables: k({}, R) });
      if (W)
        throw new o.kp(W);
      var tn = Y == null ? void 0 : Y.guestOrder;
      if (!tn)
        throw new o.v2();
      return tn;
    }, function() {
      var R = this, Y = arguments;
      return new Promise(function(W, tn) {
        var pn = P.apply(R, Y);
        function $(x) {
          U(pn, W, tn, $, M, "next", x);
        }
        function M(x) {
          U(pn, W, tn, $, M, "throw", x);
        }
        $(void 0);
      });
    });
    return function(R) {
      return z.apply(this, arguments);
    };
  }();
}, 5619: (J, j, n) => {
  n.d(j, { y: () => nn });
  var d = n(2402), o = n(6680), _ = n(7218), h = `
  query guestOrderByToken($token: String!) {
    guestOrderByToken(input: {token: $token}) {
      ...guestOrderData
    }
  }
  `.concat(_.q, `
`);
  function k(U, V, P, z, R, Y, W) {
    try {
      var tn = U[Y](W), pn = tn.value;
    } catch ($) {
      return void P($);
    }
    tn.done ? V(pn) : Promise.resolve(pn).then(z, R);
  }
  var nn = function() {
    var U, V = (U = function* (P) {
      var { data: z, errors: R } = yield (0, d.gX)(h, { variables: { token: P } });
      if (R)
        throw new o.kp(R);
      var Y = z == null ? void 0 : z.guestOrderByToken;
      if (!Y)
        throw new o.v2();
      return Y;
    }, function() {
      var P = this, z = arguments;
      return new Promise(function(R, Y) {
        var W = U.apply(P, z);
        function tn($) {
          k(W, R, Y, tn, pn, "next", $);
        }
        function pn($) {
          k(W, R, Y, tn, pn, "throw", $);
        }
        tn(void 0);
      });
    });
    return function(P) {
      return V.apply(this, arguments);
    };
  }();
}, 4313: (J, j, n) => {
  n.d(j, { N: () => It, Z: () => It });
  var d = n(2790), o = n(5619), _ = n(5587), h = n(1892), k = n.n(h), nn = n(5760), U = n.n(nn), V = n(8311), P = n.n(V), z = n(1615), R = n.n(z), Y = n(8060), W = n.n(Y), tn = n(4615), pn = { attributes: { "data-dropin": "storefront-order-confirmation", "data-sdk": "0.22.0" }, styleTagTransform: function(S, s) {
    var _n;
    window._loadedStyles = window._loadedStyles ?? {};
    const g = (_n = S == null ? void 0 : S.match(/^\.dropin-(\w+)/)) == null ? void 0 : _n[1], q = s.getAttribute("data-sdk"), on = g ? `sdk/${g}` : s.getAttribute("data-dropin");
    s.setAttribute("data-dropin", on), s.removeAttribute("data-sdk");
    const B = window._loadedStyles[on];
    if (B) {
      const In = function(rn, vn) {
        const [rt, Vn] = rn.split("-"), [Rn, Un] = vn.split("-"), wn = [...rt.split("."), Vn], kn = [...Rn.split("."), Un], Xn = parseInt(wn[0], 10), Gn = parseInt(kn[0], 10);
        if (Xn !== Gn)
          return Xn > Gn ? rn : vn;
        const Ln = parseInt(wn[1], 10), Fn = parseInt(kn[1], 10);
        if (Ln !== Fn)
          return Ln > Fn ? rn : vn;
        const Kn = parseInt(wn[2], 10), Wn = parseInt(kn[2], 10);
        if (Kn !== Wn)
          return Kn > Wn ? rn : vn;
        if (wn[3] && kn[3]) {
          const Jn = /(alpha|beta)(.*)/, Qn = wn[3].match(Jn), nt = kn[3].match(Jn), Mn = Qn[1], zn = nt[1], it = parseInt(Qn[2], 10), at = parseInt(nt[2], 10);
          if (Mn === zn)
            return it > at ? rn : vn;
          if (Mn === "alpha" && zn === "beta")
            return vn;
          if (Mn === "beta" && zn === "alpha")
            return rn;
        }
        return wn[3] ? vn : rn;
      }(q, B.sdk);
      if (!g || g && In === B.sdk) {
        const rn = B.style.textContent;
        B.style.textContent = `${rn}
/* --- MERGED --- */
${S}`;
      } else
        g && In !== B.sdk && (B.style.textContent = `/* --- UPGRADED --- */
${S}`);
      return void s.remove();
    }
    s.textContent = S, window._loadedStyles[on] = { sdk: q, core: g, style: s };
    const L = document.querySelector("head"), { lastDropinStyleInjected: un, lastSDKStyleInjected: cn } = window._loadedStyles;
    g ? (cn ? L.insertBefore(s, cn.nextSibling) : L.insertBefore(s, L.firstChild), window._loadedStyles.lastSDKStyleInjected = s) : (un ? L.insertBefore(s, un.nextSibling) : cn ? L.insertBefore(s, cn.nextSibling) : L.insertBefore(s, L.firstChild), window._loadedStyles.lastDropinStyleInjected = s);
  } };
  pn.setAttributes = R(), pn.insert = P().bind(null, "head"), pn.domAPI = U(), pn.insertStyleElement = W(), k()(tn.Z, pn), tn.Z && tn.Z.locals && tn.Z.locals;
  var $ = n(3550), M = { attributes: { "data-dropin": "storefront-order-confirmation", "data-sdk": "0.22.0" }, styleTagTransform: function(S, s) {
    var _n;
    window._loadedStyles = window._loadedStyles ?? {};
    const g = (_n = S == null ? void 0 : S.match(/^\.dropin-(\w+)/)) == null ? void 0 : _n[1], q = s.getAttribute("data-sdk"), on = g ? `sdk/${g}` : s.getAttribute("data-dropin");
    s.setAttribute("data-dropin", on), s.removeAttribute("data-sdk");
    const B = window._loadedStyles[on];
    if (B) {
      const In = function(rn, vn) {
        const [rt, Vn] = rn.split("-"), [Rn, Un] = vn.split("-"), wn = [...rt.split("."), Vn], kn = [...Rn.split("."), Un], Xn = parseInt(wn[0], 10), Gn = parseInt(kn[0], 10);
        if (Xn !== Gn)
          return Xn > Gn ? rn : vn;
        const Ln = parseInt(wn[1], 10), Fn = parseInt(kn[1], 10);
        if (Ln !== Fn)
          return Ln > Fn ? rn : vn;
        const Kn = parseInt(wn[2], 10), Wn = parseInt(kn[2], 10);
        if (Kn !== Wn)
          return Kn > Wn ? rn : vn;
        if (wn[3] && kn[3]) {
          const Jn = /(alpha|beta)(.*)/, Qn = wn[3].match(Jn), nt = kn[3].match(Jn), Mn = Qn[1], zn = nt[1], it = parseInt(Qn[2], 10), at = parseInt(nt[2], 10);
          if (Mn === zn)
            return it > at ? rn : vn;
          if (Mn === "alpha" && zn === "beta")
            return vn;
          if (Mn === "beta" && zn === "alpha")
            return rn;
        }
        return wn[3] ? vn : rn;
      }(q, B.sdk);
      if (!g || g && In === B.sdk) {
        const rn = B.style.textContent;
        B.style.textContent = `${rn}
/* --- MERGED --- */
${S}`;
      } else
        g && In !== B.sdk && (B.style.textContent = `/* --- UPGRADED --- */
${S}`);
      return void s.remove();
    }
    s.textContent = S, window._loadedStyles[on] = { sdk: q, core: g, style: s };
    const L = document.querySelector("head"), { lastDropinStyleInjected: un, lastSDKStyleInjected: cn } = window._loadedStyles;
    g ? (cn ? L.insertBefore(s, cn.nextSibling) : L.insertBefore(s, L.firstChild), window._loadedStyles.lastSDKStyleInjected = s) : (un ? L.insertBefore(s, un.nextSibling) : cn ? L.insertBefore(s, cn.nextSibling) : L.insertBefore(s, L.firstChild), window._loadedStyles.lastDropinStyleInjected = s);
  } };
  M.setAttributes = R(), M.insert = P().bind(null, "head"), M.domAPI = U(), M.insertStyleElement = W(), k()($.Z, M), $.Z && $.Z.locals && $.Z.locals;
  var x = n(9724), D = n(1222), Q = n(2866), F = n(470), w = n(5137), t = n(2754), y = () => (0, t.BX)(w.O, { "data-testid": "order-confirmation-order-summary-skeleton", className: "order-confirmation-order-summary", children: [(0, t.tZ)(w.d, { variant: "heading", size: "small" }), (0, t.tZ)(w.d, { variant: "empty", size: "small" }), (0, t.tZ)(w.d, { variant: "empty", size: "small" }), (0, t.tZ)(w.d, { variant: "empty", size: "small" }), (0, t.tZ)(w.d, { variant: "heading", size: "small", fullWidth: !0, lines: 3 })] }), N = n(3377), H = { attributes: { "data-dropin": "storefront-order-confirmation", "data-sdk": "0.22.0" }, styleTagTransform: function(S, s) {
    var _n;
    window._loadedStyles = window._loadedStyles ?? {};
    const g = (_n = S == null ? void 0 : S.match(/^\.dropin-(\w+)/)) == null ? void 0 : _n[1], q = s.getAttribute("data-sdk"), on = g ? `sdk/${g}` : s.getAttribute("data-dropin");
    s.setAttribute("data-dropin", on), s.removeAttribute("data-sdk");
    const B = window._loadedStyles[on];
    if (B) {
      const In = function(rn, vn) {
        const [rt, Vn] = rn.split("-"), [Rn, Un] = vn.split("-"), wn = [...rt.split("."), Vn], kn = [...Rn.split("."), Un], Xn = parseInt(wn[0], 10), Gn = parseInt(kn[0], 10);
        if (Xn !== Gn)
          return Xn > Gn ? rn : vn;
        const Ln = parseInt(wn[1], 10), Fn = parseInt(kn[1], 10);
        if (Ln !== Fn)
          return Ln > Fn ? rn : vn;
        const Kn = parseInt(wn[2], 10), Wn = parseInt(kn[2], 10);
        if (Kn !== Wn)
          return Kn > Wn ? rn : vn;
        if (wn[3] && kn[3]) {
          const Jn = /(alpha|beta)(.*)/, Qn = wn[3].match(Jn), nt = kn[3].match(Jn), Mn = Qn[1], zn = nt[1], it = parseInt(Qn[2], 10), at = parseInt(nt[2], 10);
          if (Mn === zn)
            return it > at ? rn : vn;
          if (Mn === "alpha" && zn === "beta")
            return vn;
          if (Mn === "beta" && zn === "alpha")
            return rn;
        }
        return wn[3] ? vn : rn;
      }(q, B.sdk);
      if (!g || g && In === B.sdk) {
        const rn = B.style.textContent;
        B.style.textContent = `${rn}
/* --- MERGED --- */
${S}`;
      } else
        g && In !== B.sdk && (B.style.textContent = `/* --- UPGRADED --- */
${S}`);
      return void s.remove();
    }
    s.textContent = S, window._loadedStyles[on] = { sdk: q, core: g, style: s };
    const L = document.querySelector("head"), { lastDropinStyleInjected: un, lastSDKStyleInjected: cn } = window._loadedStyles;
    g ? (cn ? L.insertBefore(s, cn.nextSibling) : L.insertBefore(s, L.firstChild), window._loadedStyles.lastSDKStyleInjected = s) : (un ? L.insertBefore(s, un.nextSibling) : cn ? L.insertBefore(s, cn.nextSibling) : L.insertBefore(s, L.firstChild), window._loadedStyles.lastDropinStyleInjected = s);
  } };
  H.setAttributes = R(), H.insert = P().bind(null, "head"), H.domAPI = U(), H.insertStyleElement = W(), k()(N.Z, H), N.Z && N.Z.locals && N.Z.locals;
  var X = ["rows", "size"];
  function I(S, s) {
    var g = Object.keys(S);
    if (Object.getOwnPropertySymbols) {
      var q = Object.getOwnPropertySymbols(S);
      s && (q = q.filter(function(on) {
        return Object.getOwnPropertyDescriptor(S, on).enumerable;
      })), g.push.apply(g, q);
    }
    return g;
  }
  function A(S) {
    for (var s = 1; s < arguments.length; s++) {
      var g = arguments[s] != null ? arguments[s] : {};
      s % 2 ? I(Object(g), !0).forEach(function(q) {
        i(S, q, g[q]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(S, Object.getOwnPropertyDescriptors(g)) : I(Object(g)).forEach(function(q) {
        Object.defineProperty(S, q, Object.getOwnPropertyDescriptor(g, q));
      });
    }
    return S;
  }
  function i(S, s, g) {
    return (s = function(q) {
      var on = function(B, L) {
        if (typeof B != "object" || B === null)
          return B;
        var un = B[Symbol.toPrimitive];
        if (un !== void 0) {
          var cn = un.call(B, L || "default");
          if (typeof cn != "object")
            return cn;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (L === "string" ? String : Number)(B);
      }(q, "string");
      return typeof on == "symbol" ? on : String(on);
    }(s)) in S ? Object.defineProperty(S, s, { value: g, enumerable: !0, configurable: !0, writable: !0 }) : S[s] = g, S;
  }
  function e(S, s) {
    if (S == null)
      return {};
    var g, q, on = function(L, un) {
      if (L == null)
        return {};
      var cn, _n, In = {}, rn = Object.keys(L);
      for (_n = 0; _n < rn.length; _n++)
        cn = rn[_n], un.indexOf(cn) >= 0 || (In[cn] = L[cn]);
      return In;
    }(S, s);
    if (Object.getOwnPropertySymbols) {
      var B = Object.getOwnPropertySymbols(S);
      for (q = 0; q < B.length; q++)
        g = B[q], s.indexOf(g) >= 0 || Object.prototype.propertyIsEnumerable.call(S, g) && (on[g] = S[g]);
    }
    return on;
  }
  var l = (S) => {
    var { rows: s, size: g = "xsmall" } = S, q = e(S, X);
    return (0, t.tZ)(w.O, A(A({ className: "static-skeleton" }, q), {}, { children: Array.from(Array(s).keys()).map((on) => (0, t.tZ)(w.d, { variant: "heading", size: g, fullWidth: !0 }, on)) }));
  }, c = (S) => {
    var { className: s, isLoading: g, summary: q, variant: on = "secondary" } = S;
    if (g)
      return (0, t.tZ)(y, {});
    var { total: B, subtotal: L, shipping: un, tax: cn } = q ?? {};
    return (0, t.BX)(D.Z, { className: (0, _.S)(["order-confirmation-order-summary", s]), variant: on, children: [(0, t.tZ)("h2", { className: "order-confirmation-order-summary__title", children: (0, t.tZ)(x.xv, { id: "OrderConfirmation.OrderSummary.title" }) }), (0, t.tZ)(Q.i, { variant: "primary" }), L != null ? (0, t.BX)("div", { "data-testid": "order-summary-subtotal", className: "order-confirmation-order-summary__row", children: [(0, t.tZ)("p", { children: (0, t.tZ)(x.xv, { id: "OrderConfirmation.OrderSummary.subtotal" }) }), (0, t.tZ)(F.t, { amount: L == null ? void 0 : L.amount, currency: L == null ? void 0 : L.currency, className: (0, _.S)(["order-confirmation-order-summary__price", s]) })] }) : (0, t.tZ)(l, { rows: 1, "data-testid": "order-confirmation-order-summary-subtotal-skeleton" }), (L == null ? void 0 : L.isTaxIncl) && (0, t.tZ)("div", { "data-testid": "order-summary-subtotal-incl-tax", className: "order-confirmation-order-summary__row order-confirmation-order-summary__row--muted", children: (0, t.tZ)("p", { children: (0, t.tZ)(x.xv, { id: "OrderConfirmation.OrderSummary.includingTaxes" }) }) }), un != null ? (0, t.BX)("div", { "data-testid": "order-summary-shipping", className: "order-confirmation-order-summary__row", children: [(0, t.tZ)("p", { children: (0, t.tZ)(x.xv, { id: "OrderConfirmation.OrderSummary.shipping" }) }), un.amount === 0 ? (0, t.tZ)("p", { className: "order-confirmation-order-summary__price", children: (0, t.tZ)(x.xv, { id: "OrderConfirmation.OrderSummary.freeShipping" }) }) : (0, t.tZ)(F.t, { amount: un.amount, currency: un.currency, className: (0, _.S)(["order-confirmation-order-summary__price", s]) })] }) : (0, t.tZ)(l, { rows: 1, "data-testid": "order-confirmation-order-summary-shipping-skeleton" }), cn != null && !cn.breakdown && (0, t.BX)("div", { "data-testid": "order-summary-tax", className: "order-confirmation-order-summary__row", children: [(0, t.tZ)("p", { children: (0, t.tZ)(x.xv, { id: "OrderConfirmation.OrderSummary.tax" }) }), (0, t.tZ)(F.t, { amount: cn.amount, currency: cn.currency, className: (0, _.S)(["order-confirmation-order-summary__price", s]) })] }), cn != null && cn.breakdown && (0, t.BX)(t.HY, { children: [(0, t.tZ)(Q.i, { variant: "secondary" }), (0, t.tZ)("div", { className: "order-confirmation-order-summary__row order-confirmation-order-summary__row--margin-bottom", children: (0, t.tZ)("p", { children: (0, t.tZ)(x.xv, { id: "OrderConfirmation.OrderSummary.taxBreakdown" }) }) }), cn.breakdown.map((_n) => (0, t.BX)("div", { "data-testid": "order-summary-tax-breakdown", className: "order-confirmation-order-summary__row order-confirmation-order-summary__row--muted", children: [(0, t.tZ)("p", { children: _n.label }), (0, t.tZ)(F.t, { amount: _n.amount.value, currency: _n.amount.currency, className: (0, _.S)(["order-confirmation-order-summary__price", s]) })] }, _n.label)), (0, t.BX)("div", { "data-testid": "order-summary-tax-breakdown-total", className: "order-confirmation-order-summary__row order-confirmation-order-summary__row--strong order-confirmation-order-summary__row--margin-top", children: [(0, t.tZ)("p", { children: (0, t.tZ)(x.xv, { id: "OrderConfirmation.OrderSummary.taxTotal" }) }), (0, t.tZ)(F.t, { amount: cn.amount, currency: cn.currency, className: (0, _.S)(["order-confirmation-order-summary__price", s]) })] }), (0, t.tZ)(Q.i, { variant: "secondary" })] }), B != null ? (0, t.BX)("div", { "data-testid": "order-summary-total-incl-tax", className: "order-confirmation-order-summary__row order-confirmation-order-summary__row--emphasized", children: [(0, t.tZ)("p", { children: (0, t.tZ)(x.xv, { id: "OrderConfirmation.OrderSummary.total" }) }), (0, t.tZ)(F.t, { amount: B == null ? void 0 : B.inclTax.amount, currency: B == null ? void 0 : B.inclTax.currency, className: (0, _.S)(["order-confirmation-order-summary__price", s]) })] }) : (0, t.tZ)(l, { rows: 1, "data-testid": "order-confirmation-order-summary-total-skeleton" }), (B == null ? void 0 : B.exclTax) != null && (0, t.BX)("div", { "data-testid": "order-summary-total-excl-tax", className: "order-confirmation-order-summary__row order-confirmation-order-summary__row--muted", children: [(0, t.tZ)("p", { children: (0, t.tZ)(x.xv, { id: "OrderConfirmation.OrderSummary.totalExclTax" }) }), (0, t.tZ)(F.t, { amount: B.exclTax.amount, currency: B.exclTax.currency, className: (0, _.S)(["order-confirmation-order-summary__price", s]) })] })] });
  }, m = n(7358), f = { attributes: { "data-dropin": "storefront-order-confirmation", "data-sdk": "0.22.0" }, styleTagTransform: function(S, s) {
    var _n;
    window._loadedStyles = window._loadedStyles ?? {};
    const g = (_n = S == null ? void 0 : S.match(/^\.dropin-(\w+)/)) == null ? void 0 : _n[1], q = s.getAttribute("data-sdk"), on = g ? `sdk/${g}` : s.getAttribute("data-dropin");
    s.setAttribute("data-dropin", on), s.removeAttribute("data-sdk");
    const B = window._loadedStyles[on];
    if (B) {
      const In = function(rn, vn) {
        const [rt, Vn] = rn.split("-"), [Rn, Un] = vn.split("-"), wn = [...rt.split("."), Vn], kn = [...Rn.split("."), Un], Xn = parseInt(wn[0], 10), Gn = parseInt(kn[0], 10);
        if (Xn !== Gn)
          return Xn > Gn ? rn : vn;
        const Ln = parseInt(wn[1], 10), Fn = parseInt(kn[1], 10);
        if (Ln !== Fn)
          return Ln > Fn ? rn : vn;
        const Kn = parseInt(wn[2], 10), Wn = parseInt(kn[2], 10);
        if (Kn !== Wn)
          return Kn > Wn ? rn : vn;
        if (wn[3] && kn[3]) {
          const Jn = /(alpha|beta)(.*)/, Qn = wn[3].match(Jn), nt = kn[3].match(Jn), Mn = Qn[1], zn = nt[1], it = parseInt(Qn[2], 10), at = parseInt(nt[2], 10);
          if (Mn === zn)
            return it > at ? rn : vn;
          if (Mn === "alpha" && zn === "beta")
            return vn;
          if (Mn === "beta" && zn === "alpha")
            return rn;
        }
        return wn[3] ? vn : rn;
      }(q, B.sdk);
      if (!g || g && In === B.sdk) {
        const rn = B.style.textContent;
        B.style.textContent = `${rn}
/* --- MERGED --- */
${S}`;
      } else
        g && In !== B.sdk && (B.style.textContent = `/* --- UPGRADED --- */
${S}`);
      return void s.remove();
    }
    s.textContent = S, window._loadedStyles[on] = { sdk: q, core: g, style: s };
    const L = document.querySelector("head"), { lastDropinStyleInjected: un, lastSDKStyleInjected: cn } = window._loadedStyles;
    g ? (cn ? L.insertBefore(s, cn.nextSibling) : L.insertBefore(s, L.firstChild), window._loadedStyles.lastSDKStyleInjected = s) : (un ? L.insertBefore(s, un.nextSibling) : cn ? L.insertBefore(s, cn.nextSibling) : L.insertBefore(s, L.firstChild), window._loadedStyles.lastDropinStyleInjected = s);
  } };
  f.setAttributes = R(), f.insert = P().bind(null, "head"), f.domAPI = U(), f.insertStyleElement = W(), k()(m.Z, f), m.Z && m.Z.locals && m.Z.locals;
  var b = n(8325), Z = () => (0, t.BX)(w.O, { "data-testid": "cart-summary-skeleton", className: "order-confirmation-cart-summary", style: { gridTemplateColumns: "1fr" }, children: [(0, t.tZ)(w.d, { variant: "heading", fullWidth: !0, size: "medium" }), (0, t.tZ)(b.R, {}), (0, t.tZ)(b.R, {}), (0, t.tZ)(b.R, {}), (0, t.tZ)(b.R, {}), (0, t.tZ)(b.R, {})] }), en = n(4223), dn = { attributes: { "data-dropin": "storefront-order-confirmation", "data-sdk": "0.22.0" }, styleTagTransform: function(S, s) {
    var _n;
    window._loadedStyles = window._loadedStyles ?? {};
    const g = (_n = S == null ? void 0 : S.match(/^\.dropin-(\w+)/)) == null ? void 0 : _n[1], q = s.getAttribute("data-sdk"), on = g ? `sdk/${g}` : s.getAttribute("data-dropin");
    s.setAttribute("data-dropin", on), s.removeAttribute("data-sdk");
    const B = window._loadedStyles[on];
    if (B) {
      const In = function(rn, vn) {
        const [rt, Vn] = rn.split("-"), [Rn, Un] = vn.split("-"), wn = [...rt.split("."), Vn], kn = [...Rn.split("."), Un], Xn = parseInt(wn[0], 10), Gn = parseInt(kn[0], 10);
        if (Xn !== Gn)
          return Xn > Gn ? rn : vn;
        const Ln = parseInt(wn[1], 10), Fn = parseInt(kn[1], 10);
        if (Ln !== Fn)
          return Ln > Fn ? rn : vn;
        const Kn = parseInt(wn[2], 10), Wn = parseInt(kn[2], 10);
        if (Kn !== Wn)
          return Kn > Wn ? rn : vn;
        if (wn[3] && kn[3]) {
          const Jn = /(alpha|beta)(.*)/, Qn = wn[3].match(Jn), nt = kn[3].match(Jn), Mn = Qn[1], zn = nt[1], it = parseInt(Qn[2], 10), at = parseInt(nt[2], 10);
          if (Mn === zn)
            return it > at ? rn : vn;
          if (Mn === "alpha" && zn === "beta")
            return vn;
          if (Mn === "beta" && zn === "alpha")
            return rn;
        }
        return wn[3] ? vn : rn;
      }(q, B.sdk);
      if (!g || g && In === B.sdk) {
        const rn = B.style.textContent;
        B.style.textContent = `${rn}
/* --- MERGED --- */
${S}`;
      } else
        g && In !== B.sdk && (B.style.textContent = `/* --- UPGRADED --- */
${S}`);
      return void s.remove();
    }
    s.textContent = S, window._loadedStyles[on] = { sdk: q, core: g, style: s };
    const L = document.querySelector("head"), { lastDropinStyleInjected: un, lastSDKStyleInjected: cn } = window._loadedStyles;
    g ? (cn ? L.insertBefore(s, cn.nextSibling) : L.insertBefore(s, L.firstChild), window._loadedStyles.lastSDKStyleInjected = s) : (un ? L.insertBefore(s, un.nextSibling) : cn ? L.insertBefore(s, cn.nextSibling) : L.insertBefore(s, L.firstChild), window._loadedStyles.lastDropinStyleInjected = s);
  } };
  dn.setAttributes = R(), dn.insert = P().bind(null, "head"), dn.domAPI = U(), dn.insertStyleElement = W(), k()(en.Z, dn), en.Z && en.Z.locals && en.Z.locals;
  var mn = n(71), yn = n(9728);
  function bn(S, s) {
    var g = Object.keys(S);
    if (Object.getOwnPropertySymbols) {
      var q = Object.getOwnPropertySymbols(S);
      s && (q = q.filter(function(on) {
        return Object.getOwnPropertyDescriptor(S, on).enumerable;
      })), g.push.apply(g, q);
    }
    return g;
  }
  function xn(S) {
    for (var s = 1; s < arguments.length; s++) {
      var g = arguments[s] != null ? arguments[s] : {};
      s % 2 ? bn(Object(g), !0).forEach(function(q) {
        Pn(S, q, g[q]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(S, Object.getOwnPropertyDescriptors(g)) : bn(Object(g)).forEach(function(q) {
        Object.defineProperty(S, q, Object.getOwnPropertyDescriptor(g, q));
      });
    }
    return S;
  }
  function Pn(S, s, g) {
    return (s = function(q) {
      var on = function(B, L) {
        if (typeof B != "object" || B === null)
          return B;
        var un = B[Symbol.toPrimitive];
        if (un !== void 0) {
          var cn = un.call(B, L || "default");
          if (typeof cn != "object")
            return cn;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (L === "string" ? String : Number)(B);
      }(q, "string");
      return typeof on == "symbol" ? on : String(on);
    }(s)) in S ? Object.defineProperty(S, s, { value: g, enumerable: !0, configurable: !0, writable: !0 }) : S[s] = g, S;
  }
  var r = (S) => {
    var { className: s, item: g, taxIncluded: q = !1 } = S, on = (0, x.XK)({ Sender: "OrderConfirmation.CartSummary.GiftCard.sender", Recipient: "OrderConfirmation.CartSummary.GiftCard.recipient" }), B = g.regularPrice, L = g.total;
    q && (B = g.priceInclTax, L = g.totalInclTax);
    var un = xn(xn(xn(xn(xn({}, "configurableOptions" in g ? g.configurableOptions : {}), "senderName" in g && g.senderName ? { [on.Sender]: g.senderName } : {}), "senderEmail" in g && g.senderEmail ? { [on.Sender]: g.senderEmail } : {}), "recipientName" in g && g.recipientName ? { [on.Recipient]: g.recipientName } : {}), "recipientEmail" in g && g.recipientEmail ? { [on.Recipient]: g.recipientEmail } : {});
    return (0, t.tZ)("div", { className: (0, _.S)(["order-confirmation-cart-summary-item", s]), children: (0, t.tZ)(mn.b, { "data-testid": "cart-summary-item", taxIncluded: q, title: (0, t.tZ)("div", { "data-testid": "product-name", children: g.name }), sku: (0, t.tZ)("div", { children: g.sku }), quantity: g.quantity, image: (0, t.tZ)(yn.E, { src: g.image.src, alt: g.image.alt, loading: "lazy", width: "80", height: "80", params: { width: 80 } }), configurations: un, price: (0, t.tZ)(F.t, { amount: g.regularPrice.value, currency: B.currency, weight: "normal" }), total: (0, t.BX)(t.HY, { children: [(0, t.tZ)(F.t, { amount: g.regularPrice.value * g.quantity, currency: B.currency, variant: g.discounted ? "strikethrough" : "default" }), g.discounted && (0, t.tZ)(F.t, { amount: L.value, currency: L.currency, sale: !0 })] }) }, g.uid) });
  };
  function a(S) {
    if ("selected_options" in S) {
      var s = {};
      for (var g of S.selected_options)
        s[g.label] = g.value;
      return s;
    }
  }
  var u = (S) => {
    var { isLoading: s, details: g } = S;
    if (s)
      return (0, t.tZ)(Z, {});
    var q = g.items, on = q.length;
    return (0, t.tZ)("div", { className: "order-confirmation-cart-summary", children: (0, t.BX)(D.Z, { variant: "secondary", children: [(0, t.tZ)("div", { className: "order-confirmation-cart-summary__heading", children: (0, t.BX)("h2", { className: "order-confirmation-cart-summary__title", children: [(0, t.tZ)(x.xv, { id: "OrderConfirmation.CartSummary.title" }), " (", on, ")"] }) }), (0, t.tZ)(Q.i, { className: "order-confirmation-cart-summary__divider-top", variant: "primary" }), (0, t.tZ)("div", { className: "order-confirmation-cart-summary__items", children: q == null ? void 0 : q.map((B) => {
      var L = function(un) {
        return { uid: un.id, quantity: un.quantity_ordered, sku: un.product.sku, name: un.product.name, image: { src: un.product.thumbnail.url, alt: un.product.thumbnail.label }, price: { value: un.product_sale_price.value, currency: un.product_sale_price.currency }, priceInclTax: { value: un.product_sale_price.value, currency: un.product_sale_price.currency }, total: { value: un.product_sale_price.value * un.quantity_ordered, currency: un.product_sale_price.currency }, totalInclTax: { value: un.product_sale_price.value * un.quantity_ordered, currency: un.product_sale_price.currency }, discount: { value: 0, currency: un.product_sale_price.currency }, regularPrice: { value: un.product.price_range.maximum_price.regular_price.value, currency: un.product.price_range.maximum_price.regular_price.currency }, discounted: un.product.price_range.maximum_price.regular_price.value * un.quantity_ordered != un.product_sale_price.value * un.quantity_ordered, configurableOptions: a(un), senderName: un.__typename === "GiftCardOrderItem" ? un.gift_card.sender_name : void 0, senderEmail: un.__typename === "GiftCardOrderItem" ? un.gift_card.sender_email : void 0, recipientEmail: un.__typename === "GiftCardOrderItem" ? un.gift_card.recipient_email : void 0, recipientName: un.__typename === "GiftCardOrderItem" ? un.gift_card.recipient_name : void 0 };
      }(B);
      return (0, t.tZ)(r, { item: L, taxIncluded: !1 }, L == null ? void 0 : L.uid);
    }) })] }) });
  }, C = n(8910), T = n(8174), p = () => (0, t.BX)(w.O, { "data-testid": "order-confirmation-header-skeleton", className: "order-confirmation-header", children: [(0, t.tZ)(w.d, { variant: "empty", size: "xlarge", fullWidth: !0 }), (0, t.tZ)(w.d, { variant: "empty", size: "medium" }), (0, t.tZ)(w.d, { variant: "empty", size: "medium" }), (0, t.tZ)(w.d, { variant: "empty", size: "medium" }), (0, t.tZ)(w.d, { variant: "empty", size: "medium" }), (0, t.tZ)(w.d, { variant: "empty", size: "medium" }), (0, t.tZ)(w.d, { size: "small", fullWidth: !0 }), (0, t.tZ)(w.d, { variant: "heading", size: "xsmall", fullWidth: !0 })] }), v = n(2970), O = { attributes: { "data-dropin": "storefront-order-confirmation", "data-sdk": "0.22.0" }, styleTagTransform: function(S, s) {
    var _n;
    window._loadedStyles = window._loadedStyles ?? {};
    const g = (_n = S == null ? void 0 : S.match(/^\.dropin-(\w+)/)) == null ? void 0 : _n[1], q = s.getAttribute("data-sdk"), on = g ? `sdk/${g}` : s.getAttribute("data-dropin");
    s.setAttribute("data-dropin", on), s.removeAttribute("data-sdk");
    const B = window._loadedStyles[on];
    if (B) {
      const In = function(rn, vn) {
        const [rt, Vn] = rn.split("-"), [Rn, Un] = vn.split("-"), wn = [...rt.split("."), Vn], kn = [...Rn.split("."), Un], Xn = parseInt(wn[0], 10), Gn = parseInt(kn[0], 10);
        if (Xn !== Gn)
          return Xn > Gn ? rn : vn;
        const Ln = parseInt(wn[1], 10), Fn = parseInt(kn[1], 10);
        if (Ln !== Fn)
          return Ln > Fn ? rn : vn;
        const Kn = parseInt(wn[2], 10), Wn = parseInt(kn[2], 10);
        if (Kn !== Wn)
          return Kn > Wn ? rn : vn;
        if (wn[3] && kn[3]) {
          const Jn = /(alpha|beta)(.*)/, Qn = wn[3].match(Jn), nt = kn[3].match(Jn), Mn = Qn[1], zn = nt[1], it = parseInt(Qn[2], 10), at = parseInt(nt[2], 10);
          if (Mn === zn)
            return it > at ? rn : vn;
          if (Mn === "alpha" && zn === "beta")
            return vn;
          if (Mn === "beta" && zn === "alpha")
            return rn;
        }
        return wn[3] ? vn : rn;
      }(q, B.sdk);
      if (!g || g && In === B.sdk) {
        const rn = B.style.textContent;
        B.style.textContent = `${rn}
/* --- MERGED --- */
${S}`;
      } else
        g && In !== B.sdk && (B.style.textContent = `/* --- UPGRADED --- */
${S}`);
      return void s.remove();
    }
    s.textContent = S, window._loadedStyles[on] = { sdk: q, core: g, style: s };
    const L = document.querySelector("head"), { lastDropinStyleInjected: un, lastSDKStyleInjected: cn } = window._loadedStyles;
    g ? (cn ? L.insertBefore(s, cn.nextSibling) : L.insertBefore(s, L.firstChild), window._loadedStyles.lastSDKStyleInjected = s) : (un ? L.insertBefore(s, un.nextSibling) : cn ? L.insertBefore(s, cn.nextSibling) : L.insertBefore(s, L.firstChild), window._loadedStyles.lastDropinStyleInjected = s);
  } };
  O.setAttributes = R(), O.insert = P().bind(null, "head"), O.domAPI = U(), O.insertStyleElement = W(), k()(v.Z, O), v.Z && v.Z.locals && v.Z.locals;
  var G = (S) => {
    var { isLoading: s, customerName: g, orderNumber: q, orderStatus: on } = S;
    return s ? (0, t.tZ)(p, {}) : (0, t.BX)("div", { className: "order-confirmation-header order-confirmation__card", children: [(0, t.tZ)(C.J, { source: T.default, size: "64", className: "order-confirmation-header__icon" }), (0, t.tZ)("h1", { className: "order-confirmation-header__title", children: g ? (0, t.tZ)(x.xv, { id: "OrderConfirmation.Header.title", fields: { name: g } }) : (0, t.tZ)(x.xv, { id: "OrderConfirmation.Header.defaultTitle" }) }), q && (0, t.BX)("p", { children: [(0, t.tZ)(x.xv, { id: "OrderConfirmation.Header.order", fields: { order: q } }), on !== void 0 && on !== "" && (0, t.BX)("span", { className: "order-confirmation-header__status", children: [" ", "(", on, ")"] })] })] });
  }, K = n(418), an = { attributes: { "data-dropin": "storefront-order-confirmation", "data-sdk": "0.22.0" }, styleTagTransform: function(S, s) {
    var _n;
    window._loadedStyles = window._loadedStyles ?? {};
    const g = (_n = S == null ? void 0 : S.match(/^\.dropin-(\w+)/)) == null ? void 0 : _n[1], q = s.getAttribute("data-sdk"), on = g ? `sdk/${g}` : s.getAttribute("data-dropin");
    s.setAttribute("data-dropin", on), s.removeAttribute("data-sdk");
    const B = window._loadedStyles[on];
    if (B) {
      const In = function(rn, vn) {
        const [rt, Vn] = rn.split("-"), [Rn, Un] = vn.split("-"), wn = [...rt.split("."), Vn], kn = [...Rn.split("."), Un], Xn = parseInt(wn[0], 10), Gn = parseInt(kn[0], 10);
        if (Xn !== Gn)
          return Xn > Gn ? rn : vn;
        const Ln = parseInt(wn[1], 10), Fn = parseInt(kn[1], 10);
        if (Ln !== Fn)
          return Ln > Fn ? rn : vn;
        const Kn = parseInt(wn[2], 10), Wn = parseInt(kn[2], 10);
        if (Kn !== Wn)
          return Kn > Wn ? rn : vn;
        if (wn[3] && kn[3]) {
          const Jn = /(alpha|beta)(.*)/, Qn = wn[3].match(Jn), nt = kn[3].match(Jn), Mn = Qn[1], zn = nt[1], it = parseInt(Qn[2], 10), at = parseInt(nt[2], 10);
          if (Mn === zn)
            return it > at ? rn : vn;
          if (Mn === "alpha" && zn === "beta")
            return vn;
          if (Mn === "beta" && zn === "alpha")
            return rn;
        }
        return wn[3] ? vn : rn;
      }(q, B.sdk);
      if (!g || g && In === B.sdk) {
        const rn = B.style.textContent;
        B.style.textContent = `${rn}
/* --- MERGED --- */
${S}`;
      } else
        g && In !== B.sdk && (B.style.textContent = `/* --- UPGRADED --- */
${S}`);
      return void s.remove();
    }
    s.textContent = S, window._loadedStyles[on] = { sdk: q, core: g, style: s };
    const L = document.querySelector("head"), { lastDropinStyleInjected: un, lastSDKStyleInjected: cn } = window._loadedStyles;
    g ? (cn ? L.insertBefore(s, cn.nextSibling) : L.insertBefore(s, L.firstChild), window._loadedStyles.lastSDKStyleInjected = s) : (un ? L.insertBefore(s, un.nextSibling) : cn ? L.insertBefore(s, cn.nextSibling) : L.insertBefore(s, L.firstChild), window._loadedStyles.lastDropinStyleInjected = s);
  } };
  an.setAttributes = R(), an.insert = P().bind(null, "head"), an.domAPI = U(), an.insertStyleElement = W(), k()(K.Z, an), K.Z && K.Z.locals && K.Z.locals;
  var E = () => (0, t.tZ)(D.Z, { variant: "secondary", className: "order-confirmation-details", children: (0, t.BX)(w.O, { "data-testid": "order-confirmation-details-skeleton", children: [(0, t.tZ)(w.d, { variant: "heading", size: "medium", fullWidth: !0 }), (0, t.tZ)(w.d, { size: "medium" }), (0, t.tZ)(w.d, { variant: "empty", size: "medium" }), (0, t.tZ)(w.d, { size: "xlarge" }), (0, t.tZ)(w.d, { size: "xlarge" }), (0, t.tZ)(w.d, { size: "xlarge" }), (0, t.tZ)(w.d, { size: "xlarge" })] }) }), fn = (S) => {
    var s, g, q, { isLoading: on, orderDetails: B } = S;
    if (on)
      return (0, t.tZ)(E, {});
    var L = B && (B == null ? void 0 : B.number), un = (B == null ? void 0 : B.email) || "", cn = B && un !== "", _n = B == null ? void 0 : B.shipping_address, In = B && _n !== null, rn = B == null ? void 0 : B.billing_address, vn = B && rn !== null, rt = B == null ? void 0 : B.shipping_method, Vn = B == null || (s = B.total) === null || s === void 0 || (s = s.total_shipping) === null || s === void 0 ? void 0 : s.value, Rn = B == null || (g = B.total) === null || g === void 0 || (g = g.total_shipping) === null || g === void 0 ? void 0 : g.currency, Un = B && rt && Rn && Vn != null, wn = B == null ? void 0 : B.payment_methods, kn = wn && wn.length > 0, Xn = kn ? (q = wn[0]) === null || q === void 0 ? void 0 : q.name : "", Gn = B && kn && Xn !== "";
    return (0, t.BX)(D.Z, { variant: "secondary", className: "order-confirmation-details order-confirmation__card", children: [(0, t.tZ)("div", { className: "order-confirmation-details__header", children: (0, t.tZ)("h2", { className: "order-confirmation-details__title", children: (0, t.tZ)(x.xv, { id: "OrderConfirmation.Details.title" }) }) }), (0, t.BX)("div", { className: "order-confirmation-details__contact", children: [(!B || cn) && (0, t.tZ)("h3", { children: (0, t.tZ)(x.xv, { id: "OrderConfirmation.Details.contact" }) }), cn && (0, t.tZ)("p", { children: un }), !L && (0, t.tZ)(l, { rows: 1, "data-testid": "order-confirmation-details-contact-skeleton" })] }), (0, t.BX)("div", { className: "order-confirmation-details__information", children: [(0, t.BX)("div", { className: "order-confirmation-details__shipping_address", children: [(!L || In) && (0, t.tZ)("h3", { children: (0, t.tZ)(x.xv, { id: "OrderConfirmation.Details.shippingAddress" }) }), In && (0, t.BX)(t.HY, { children: [(0, t.BX)("p", { children: [_n == null ? void 0 : _n.firstname, " ", _n == null ? void 0 : _n.lastname] }), _n == null ? void 0 : _n.street.map((Ln, Fn) => (0, t.tZ)("p", { children: Ln }, Fn)), (0, t.BX)("p", { children: [_n == null ? void 0 : _n.city, " ", _n == null ? void 0 : _n.region, " ", _n == null ? void 0 : _n.postcode, ", ", _n == null ? void 0 : _n.country_code] })] }), !L && (0, t.tZ)(l, { rows: 3, "data-testid": "order-confirmation-shipping-address-skeleton" })] }), (0, t.BX)("div", { className: "order-confirmation-details__billing_address", children: [(!L || vn) && (0, t.tZ)("h3", { children: (0, t.tZ)(x.xv, { id: "OrderConfirmation.Details.billingAddress" }) }), vn && (0, t.BX)(t.HY, { children: [(0, t.BX)("p", { children: [rn == null ? void 0 : rn.firstname, " ", rn == null ? void 0 : rn.lastname] }), rn == null ? void 0 : rn.street.map((Ln, Fn) => (0, t.tZ)("p", { children: Ln }, Fn)), (0, t.BX)("p", { children: [rn == null ? void 0 : rn.city, " ", rn == null ? void 0 : rn.region, " ", rn == null ? void 0 : rn.postcode, ", ", rn == null ? void 0 : rn.country_code] })] }), !L && (0, t.tZ)(l, { rows: 3, "data-testid": "order-confirmation-billing-address-skeleton" })] }), (0, t.BX)("div", { className: "order-confirmation-details__shipping-method", children: [(!L || Un) && (0, t.tZ)("h3", { children: (0, t.tZ)(x.xv, { id: "OrderConfirmation.Details.shippingMethod" }) }), Un && (0, t.tZ)(t.HY, { children: Vn === 0 ? (0, t.tZ)("p", { className: "order-confirmation-order-summary__price", children: (0, t.tZ)(x.xv, { id: "OrderConfirmation.Details.freeShipping" }) }) : (0, t.BX)("p", { children: [(0, t.tZ)(F.t, { amount: Vn, currency: Rn }), " ", rt] }) }), !L && (0, t.tZ)(l, { rows: 1, "data-testid": "order-confirmation-details-shipping-method-skeleton" })] }), (0, t.BX)("div", { className: "order-confirmation-details__payment-method", children: [(!L || Gn) && (0, t.tZ)("h3", { children: (0, t.tZ)(x.xv, { id: "OrderConfirmation.Details.paymentMethod" }) }), Gn && (0, t.tZ)("p", { children: Xn }), !L && (0, t.tZ)(l, { rows: 1, "data-testid": "order-confirmation-details-payment-method-skeleton" })] })] })] });
  }, ln = n(6816), gn = () => (0, t.BX)(w.O, { className: "order-confirmation-footer", children: [(0, t.tZ)(w.d, { size: "small", fullWidth: !0 }), (0, t.tZ)(w.d, { variant: "heading", size: "xsmall", fullWidth: !0 })] }), hn = n(7221), sn = { attributes: { "data-dropin": "storefront-order-confirmation", "data-sdk": "0.22.0" }, styleTagTransform: function(S, s) {
    var _n;
    window._loadedStyles = window._loadedStyles ?? {};
    const g = (_n = S == null ? void 0 : S.match(/^\.dropin-(\w+)/)) == null ? void 0 : _n[1], q = s.getAttribute("data-sdk"), on = g ? `sdk/${g}` : s.getAttribute("data-dropin");
    s.setAttribute("data-dropin", on), s.removeAttribute("data-sdk");
    const B = window._loadedStyles[on];
    if (B) {
      const In = function(rn, vn) {
        const [rt, Vn] = rn.split("-"), [Rn, Un] = vn.split("-"), wn = [...rt.split("."), Vn], kn = [...Rn.split("."), Un], Xn = parseInt(wn[0], 10), Gn = parseInt(kn[0], 10);
        if (Xn !== Gn)
          return Xn > Gn ? rn : vn;
        const Ln = parseInt(wn[1], 10), Fn = parseInt(kn[1], 10);
        if (Ln !== Fn)
          return Ln > Fn ? rn : vn;
        const Kn = parseInt(wn[2], 10), Wn = parseInt(kn[2], 10);
        if (Kn !== Wn)
          return Kn > Wn ? rn : vn;
        if (wn[3] && kn[3]) {
          const Jn = /(alpha|beta)(.*)/, Qn = wn[3].match(Jn), nt = kn[3].match(Jn), Mn = Qn[1], zn = nt[1], it = parseInt(Qn[2], 10), at = parseInt(nt[2], 10);
          if (Mn === zn)
            return it > at ? rn : vn;
          if (Mn === "alpha" && zn === "beta")
            return vn;
          if (Mn === "beta" && zn === "alpha")
            return rn;
        }
        return wn[3] ? vn : rn;
      }(q, B.sdk);
      if (!g || g && In === B.sdk) {
        const rn = B.style.textContent;
        B.style.textContent = `${rn}
/* --- MERGED --- */
${S}`;
      } else
        g && In !== B.sdk && (B.style.textContent = `/* --- UPGRADED --- */
${S}`);
      return void s.remove();
    }
    s.textContent = S, window._loadedStyles[on] = { sdk: q, core: g, style: s };
    const L = document.querySelector("head"), { lastDropinStyleInjected: un, lastSDKStyleInjected: cn } = window._loadedStyles;
    g ? (cn ? L.insertBefore(s, cn.nextSibling) : L.insertBefore(s, L.firstChild), window._loadedStyles.lastSDKStyleInjected = s) : (un ? L.insertBefore(s, un.nextSibling) : cn ? L.insertBefore(s, cn.nextSibling) : L.insertBefore(s, L.firstChild), window._loadedStyles.lastDropinStyleInjected = s);
  } };
  sn.setAttributes = R(), sn.insert = P().bind(null, "head"), sn.domAPI = U(), sn.insertStyleElement = W(), k()(hn.Z, sn), hn.Z && hn.Z.locals && hn.Z.locals;
  var On = ["isLoading", "className", "routeHome", "routeSupport"];
  function Nn(S, s) {
    var g = Object.keys(S);
    if (Object.getOwnPropertySymbols) {
      var q = Object.getOwnPropertySymbols(S);
      s && (q = q.filter(function(on) {
        return Object.getOwnPropertyDescriptor(S, on).enumerable;
      })), g.push.apply(g, q);
    }
    return g;
  }
  function $n(S) {
    for (var s = 1; s < arguments.length; s++) {
      var g = arguments[s] != null ? arguments[s] : {};
      s % 2 ? Nn(Object(g), !0).forEach(function(q) {
        Bn(S, q, g[q]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(S, Object.getOwnPropertyDescriptors(g)) : Nn(Object(g)).forEach(function(q) {
        Object.defineProperty(S, q, Object.getOwnPropertyDescriptor(g, q));
      });
    }
    return S;
  }
  function Bn(S, s, g) {
    return (s = function(q) {
      var on = function(B, L) {
        if (typeof B != "object" || B === null)
          return B;
        var un = B[Symbol.toPrimitive];
        if (un !== void 0) {
          var cn = un.call(B, L || "default");
          if (typeof cn != "object")
            return cn;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (L === "string" ? String : Number)(B);
      }(q, "string");
      return typeof on == "symbol" ? on : String(on);
    }(s)) in S ? Object.defineProperty(S, s, { value: g, enumerable: !0, configurable: !0, writable: !0 }) : S[s] = g, S;
  }
  function Tn(S, s) {
    if (S == null)
      return {};
    var g, q, on = function(L, un) {
      if (L == null)
        return {};
      var cn, _n, In = {}, rn = Object.keys(L);
      for (_n = 0; _n < rn.length; _n++)
        cn = rn[_n], un.indexOf(cn) >= 0 || (In[cn] = L[cn]);
      return In;
    }(S, s);
    if (Object.getOwnPropertySymbols) {
      var B = Object.getOwnPropertySymbols(S);
      for (q = 0; q < B.length; q++)
        g = B[q], s.indexOf(g) >= 0 || Object.prototype.propertyIsEnumerable.call(S, g) && (on[g] = S[g]);
    }
    return on;
  }
  var An = (S) => {
    var { isLoading: s, className: g, routeHome: q, routeSupport: on } = S, B = Tn(S, On);
    return s ? (0, t.tZ)(gn, {}) : (0, t.BX)("div", $n($n({ className: (0, _.S)(["order-confirmation-footer", g]) }, B), {}, { children: [(q == null ? void 0 : q()) && (0, t.tZ)(ln.z, { "data-testid": "order-confirmation-footer__continue-button", className: "order-confirmation-footer__continue-button", size: "medium", variant: "primary", type: "submit", href: q == null ? void 0 : q(), children: (0, t.tZ)(x.xv, { id: "OrderConfirmation.Footer.continueShopping" }) }, "continueShopping"), (0, t.BX)("p", { className: "order-confirmation-footer__contact-support", children: [(0, t.tZ)(x.xv, { id: "OrderConfirmation.Footer.help" }), " ", (on == null ? void 0 : on()) && (0, t.tZ)("a", { href: on == null ? void 0 : on(), rel: "noreferrer", className: "order-confirmation-footer__contact-support-link", "data-testid": "order-confirmation-footer__contact-support-link", children: (0, t.tZ)(x.xv, { id: "OrderConfirmation.Footer.contactSupport" }) })] })] }));
  }, jn = n(5397), Cn = { attributes: { "data-dropin": "storefront-order-confirmation", "data-sdk": "0.22.0" }, styleTagTransform: function(S, s) {
    var _n;
    window._loadedStyles = window._loadedStyles ?? {};
    const g = (_n = S == null ? void 0 : S.match(/^\.dropin-(\w+)/)) == null ? void 0 : _n[1], q = s.getAttribute("data-sdk"), on = g ? `sdk/${g}` : s.getAttribute("data-dropin");
    s.setAttribute("data-dropin", on), s.removeAttribute("data-sdk");
    const B = window._loadedStyles[on];
    if (B) {
      const In = function(rn, vn) {
        const [rt, Vn] = rn.split("-"), [Rn, Un] = vn.split("-"), wn = [...rt.split("."), Vn], kn = [...Rn.split("."), Un], Xn = parseInt(wn[0], 10), Gn = parseInt(kn[0], 10);
        if (Xn !== Gn)
          return Xn > Gn ? rn : vn;
        const Ln = parseInt(wn[1], 10), Fn = parseInt(kn[1], 10);
        if (Ln !== Fn)
          return Ln > Fn ? rn : vn;
        const Kn = parseInt(wn[2], 10), Wn = parseInt(kn[2], 10);
        if (Kn !== Wn)
          return Kn > Wn ? rn : vn;
        if (wn[3] && kn[3]) {
          const Jn = /(alpha|beta)(.*)/, Qn = wn[3].match(Jn), nt = kn[3].match(Jn), Mn = Qn[1], zn = nt[1], it = parseInt(Qn[2], 10), at = parseInt(nt[2], 10);
          if (Mn === zn)
            return it > at ? rn : vn;
          if (Mn === "alpha" && zn === "beta")
            return vn;
          if (Mn === "beta" && zn === "alpha")
            return rn;
        }
        return wn[3] ? vn : rn;
      }(q, B.sdk);
      if (!g || g && In === B.sdk) {
        const rn = B.style.textContent;
        B.style.textContent = `${rn}
/* --- MERGED --- */
${S}`;
      } else
        g && In !== B.sdk && (B.style.textContent = `/* --- UPGRADED --- */
${S}`);
      return void s.remove();
    }
    s.textContent = S, window._loadedStyles[on] = { sdk: q, core: g, style: s };
    const L = document.querySelector("head"), { lastDropinStyleInjected: un, lastSDKStyleInjected: cn } = window._loadedStyles;
    g ? (cn ? L.insertBefore(s, cn.nextSibling) : L.insertBefore(s, L.firstChild), window._loadedStyles.lastSDKStyleInjected = s) : (un ? L.insertBefore(s, un.nextSibling) : cn ? L.insertBefore(s, cn.nextSibling) : L.insertBefore(s, L.firstChild), window._loadedStyles.lastDropinStyleInjected = s);
  } };
  Cn.setAttributes = R(), Cn.insert = P().bind(null, "head"), Cn.domAPI = U(), Cn.insertStyleElement = W(), k()(jn.Z, Cn), jn.Z && jn.Z.locals && jn.Z.locals;
  var En = n(5705), Sn = n(130), Dn = n(4625), Zn = n(5975), Yn = { attributes: { "data-dropin": "storefront-order-confirmation", "data-sdk": "0.22.0" }, styleTagTransform: function(S, s) {
    var _n;
    window._loadedStyles = window._loadedStyles ?? {};
    const g = (_n = S == null ? void 0 : S.match(/^\.dropin-(\w+)/)) == null ? void 0 : _n[1], q = s.getAttribute("data-sdk"), on = g ? `sdk/${g}` : s.getAttribute("data-dropin");
    s.setAttribute("data-dropin", on), s.removeAttribute("data-sdk");
    const B = window._loadedStyles[on];
    if (B) {
      const In = function(rn, vn) {
        const [rt, Vn] = rn.split("-"), [Rn, Un] = vn.split("-"), wn = [...rt.split("."), Vn], kn = [...Rn.split("."), Un], Xn = parseInt(wn[0], 10), Gn = parseInt(kn[0], 10);
        if (Xn !== Gn)
          return Xn > Gn ? rn : vn;
        const Ln = parseInt(wn[1], 10), Fn = parseInt(kn[1], 10);
        if (Ln !== Fn)
          return Ln > Fn ? rn : vn;
        const Kn = parseInt(wn[2], 10), Wn = parseInt(kn[2], 10);
        if (Kn !== Wn)
          return Kn > Wn ? rn : vn;
        if (wn[3] && kn[3]) {
          const Jn = /(alpha|beta)(.*)/, Qn = wn[3].match(Jn), nt = kn[3].match(Jn), Mn = Qn[1], zn = nt[1], it = parseInt(Qn[2], 10), at = parseInt(nt[2], 10);
          if (Mn === zn)
            return it > at ? rn : vn;
          if (Mn === "alpha" && zn === "beta")
            return vn;
          if (Mn === "beta" && zn === "alpha")
            return rn;
        }
        return wn[3] ? vn : rn;
      }(q, B.sdk);
      if (!g || g && In === B.sdk) {
        const rn = B.style.textContent;
        B.style.textContent = `${rn}
/* --- MERGED --- */
${S}`;
      } else
        g && In !== B.sdk && (B.style.textContent = `/* --- UPGRADED --- */
${S}`);
      return void s.remove();
    }
    s.textContent = S, window._loadedStyles[on] = { sdk: q, core: g, style: s };
    const L = document.querySelector("head"), { lastDropinStyleInjected: un, lastSDKStyleInjected: cn } = window._loadedStyles;
    g ? (cn ? L.insertBefore(s, cn.nextSibling) : L.insertBefore(s, L.firstChild), window._loadedStyles.lastSDKStyleInjected = s) : (un ? L.insertBefore(s, un.nextSibling) : cn ? L.insertBefore(s, cn.nextSibling) : L.insertBefore(s, L.firstChild), window._loadedStyles.lastDropinStyleInjected = s);
  } };
  Yn.setAttributes = R(), Yn.insert = P().bind(null, "head"), Yn.domAPI = U(), Yn.insertStyleElement = W(), k()(Zn.Z, Yn), Zn.Z && Zn.Z.locals && Zn.Z.locals;
  var qn = n(2605), ot = n(6553), tt = n(7498), et = ["className", "type", "additionalActions", "onDismiss", "heading", "description"];
  function lt(S, s) {
    var g = Object.keys(S);
    if (Object.getOwnPropertySymbols) {
      var q = Object.getOwnPropertySymbols(S);
      s && (q = q.filter(function(on) {
        return Object.getOwnPropertyDescriptor(S, on).enumerable;
      })), g.push.apply(g, q);
    }
    return g;
  }
  function dt(S) {
    for (var s = 1; s < arguments.length; s++) {
      var g = arguments[s] != null ? arguments[s] : {};
      s % 2 ? lt(Object(g), !0).forEach(function(q) {
        ct(S, q, g[q]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(S, Object.getOwnPropertyDescriptors(g)) : lt(Object(g)).forEach(function(q) {
        Object.defineProperty(S, q, Object.getOwnPropertyDescriptor(g, q));
      });
    }
    return S;
  }
  function ct(S, s, g) {
    return (s = function(q) {
      var on = function(B, L) {
        if (typeof B != "object" || B === null)
          return B;
        var un = B[Symbol.toPrimitive];
        if (un !== void 0) {
          var cn = un.call(B, L || "default");
          if (typeof cn != "object")
            return cn;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (L === "string" ? String : Number)(B);
      }(q, "string");
      return typeof on == "symbol" ? on : String(on);
    }(s)) in S ? Object.defineProperty(S, s, { value: g, enumerable: !0, configurable: !0, writable: !0 }) : S[s] = g, S;
  }
  function ft(S, s) {
    if (S == null)
      return {};
    var g, q, on = function(L, un) {
      if (L == null)
        return {};
      var cn, _n, In = {}, rn = Object.keys(L);
      for (_n = 0; _n < rn.length; _n++)
        cn = rn[_n], un.indexOf(cn) >= 0 || (In[cn] = L[cn]);
      return In;
    }(S, s);
    if (Object.getOwnPropertySymbols) {
      var B = Object.getOwnPropertySymbols(S);
      for (q = 0; q < B.length; q++)
        g = B[q], s.indexOf(g) >= 0 || Object.prototype.propertyIsEnumerable.call(S, g) && (on[g] = S[g]);
    }
    return on;
  }
  var wt = { error: qn.default, success: ot.default, warning: qn.default }, _t = (S) => {
    var s, g, q, { className: on, type: B = "warning", additionalActions: L, onDismiss: un, heading: cn, description: _n } = S, In = ft(S, et), rn = wt[B];
    return (0, t.BX)("div", dt(dt({}, In), {}, { className: (0, _.S)(["dropin-in-line-alert", "dropin-in-line-alert--".concat(B), on]), children: [(0, t.BX)("div", { className: "dropin-in-line-alert__heading", children: [(0, t.BX)("div", { className: "dropin-in-line-alert__title-container", children: [rn && (0, t.tZ)(C.J, { source: rn, className: "dropin-in-line-alert__icon" }), (0, t.tZ)("span", { className: "dropin-in-line-alert__title", children: cn })] }), (0, t.BX)("div", { className: "dropin-in-line-alert__actions-container", children: [(L == null ? void 0 : L.length) == 1 && (0, t.tZ)(ln.z, { variant: "tertiary", className: "dropin-in-line-alert__additional-action", onClick: (s = L[0]) === null || s === void 0 ? void 0 : s.onClick, "aria-label": (g = L[0]) === null || g === void 0 ? void 0 : g.label, children: (q = L[0]) === null || q === void 0 ? void 0 : q.label }), un && (0, t.tZ)(ln.z, { icon: (0, t.tZ)(C.J, { source: tt.default, size: "24", stroke: "2" }), className: "dropin-in-line-alert__dismiss-button", variant: "tertiary", onClick: un, "aria-label": "OrderConfirmation.InlineAlert.Dismiss" })] })] }), _n && (0, t.tZ)("p", { className: "dropin-in-line-alert__description", children: _n }), L && (L == null ? void 0 : L.length) > 1 && (0, t.tZ)("div", { className: "dropin-in-line-alert__additional-actions-container", children: L.map((vn) => (0, t.tZ)(ln.z, { variant: "tertiary", className: "dropin-in-line-alert__additional-action", onClick: vn.onClick, children: vn.label }, vn.label)) })] }));
  };
  function gt(S, s) {
    var g = Object.keys(S);
    if (Object.getOwnPropertySymbols) {
      var q = Object.getOwnPropertySymbols(S);
      s && (q = q.filter(function(on) {
        return Object.getOwnPropertyDescriptor(S, on).enumerable;
      })), g.push.apply(g, q);
    }
    return g;
  }
  function yt(S) {
    for (var s = 1; s < arguments.length; s++) {
      var g = arguments[s] != null ? arguments[s] : {};
      s % 2 ? gt(Object(g), !0).forEach(function(q) {
        vt(S, q, g[q]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(S, Object.getOwnPropertyDescriptors(g)) : gt(Object(g)).forEach(function(q) {
        Object.defineProperty(S, q, Object.getOwnPropertyDescriptor(g, q));
      });
    }
    return S;
  }
  function vt(S, s, g) {
    return (s = function(q) {
      var on = function(B, L) {
        if (typeof B != "object" || B === null)
          return B;
        var un = B[Symbol.toPrimitive];
        if (un !== void 0) {
          var cn = un.call(B, L || "default");
          if (typeof cn != "object")
            return cn;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (L === "string" ? String : Number)(B);
      }(q, "string");
      return typeof on == "symbol" ? on : String(on);
    }(s)) in S ? Object.defineProperty(S, s, { value: g, enumerable: !0, configurable: !0, writable: !0 }) : S[s] = g, S;
  }
  var bt = (S) => {
    var { alert: s, onOrderSearch: g } = S, q = (0, x.XK)({ email: "OrderConfirmation.OrderSearchForm.email", postcode: "OrderConfirmation.OrderSearchForm.postcode", number: "OrderConfirmation.OrderSearchForm.orderNumber" });
    return (0, t.BX)(D.Z, { variant: "secondary", className: "order-confirmation-order-search-form order-confirmation__card", children: [(0, t.tZ)("h2", { className: "order-confirmation-order-search-form__title", children: (0, t.tZ)(x.xv, { id: "OrderConfirmation.OrderSearchForm.title" }) }), (0, t.tZ)("p", { children: (0, t.tZ)(x.xv, { id: "OrderConfirmation.OrderSearchForm.description" }) }), s && (0, t.tZ)(_t, yt({ className: "order-confirmation-order-search-form__alert", "data-testid": "order-confirmation-alert" }, s)), (0, t.BX)("form", { className: "order-confirmation-order-search-form__fields", onSubmit: (on) => {
      on.preventDefault();
      var B = (0, Dn.X)(on.target);
      g == null || g(B);
    }, children: [(0, t.BX)("div", { className: "order-confirmation-order-search-form__fields-columns", children: [(0, t.tZ)(En.g, { children: (0, t.tZ)(Sn.I, { id: "order-email", name: "email", type: "email", autocomplete: "email", placeholder: q.email, floatingLabel: q.email, required: !0, "aria-label": q.email, "aria-required": !0 }) }), (0, t.tZ)(En.g, { children: (0, t.tZ)(Sn.I, { id: "postcode", name: "postcode", type: "text", autocomplete: "postal-code", placeholder: q.postcode, floatingLabel: q.postcode, required: !1, "aria-label": q.postcode, "aria-required": !0 }) })] }), (0, t.tZ)(En.g, { children: (0, t.tZ)(Sn.I, { id: "order-number", name: "number", type: "text", placeholder: q.number, floatingLabel: q.number, required: !0, "aria-label": q.number, "aria-required": !0 }) }), (0, t.tZ)(ln.z, { className: "order-confirmation-order-search-form__button", size: "medium", variant: "primary", type: "submit", children: (0, t.tZ)(x.xv, { id: "OrderConfirmation.OrderSearchForm.button" }) }, "logIn")] })] });
  };
  function xt(S, s) {
    var g = Object.keys(S);
    if (Object.getOwnPropertySymbols) {
      var q = Object.getOwnPropertySymbols(S);
      s && (q = q.filter(function(on) {
        return Object.getOwnPropertyDescriptor(S, on).enumerable;
      })), g.push.apply(g, q);
    }
    return g;
  }
  function mt(S) {
    for (var s = 1; s < arguments.length; s++) {
      var g = arguments[s] != null ? arguments[s] : {};
      s % 2 ? xt(Object(g), !0).forEach(function(q) {
        Rt(S, q, g[q]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(S, Object.getOwnPropertyDescriptors(g)) : xt(Object(g)).forEach(function(q) {
        Object.defineProperty(S, q, Object.getOwnPropertyDescriptor(g, q));
      });
    }
    return S;
  }
  function Rt(S, s, g) {
    return (s = function(q) {
      var on = function(B, L) {
        if (typeof B != "object" || B === null)
          return B;
        var un = B[Symbol.toPrimitive];
        if (un !== void 0) {
          var cn = un.call(B, L || "default");
          if (typeof cn != "object")
            return cn;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (L === "string" ? String : Number)(B);
      }(q, "string");
      return typeof on == "symbol" ? on : String(on);
    }(s)) in S ? Object.defineProperty(S, s, { value: g, enumerable: !0, configurable: !0, writable: !0 }) : S[s] = g, S;
  }
  var pt = function(S) {
    return S.ADD_ORDER_REFERENCE = "ADD_ORDER_REFERENCE", S.LOADING = "LOADING", S.SET_DETAILS = "SET_DETAILS", S.ALERT = "ALERT", S.DISMISS_ALERT = "DISMISS_ALERT", S;
  }({}), jt = function(S) {
    return S.ERROR = "error", S.WARNING = "warning", S.SUCCESS = "success", S;
  }({}), St = function(S) {
    return S.INVALID_ORDER = "invalid_order", S.INVALID_SEARCH = "invalid_search", S.UNKNOWN = "unknown_error", S;
  }({});
  function Ht(S, s) {
    switch (s.type) {
      case pt.LOADING:
        return mt(mt({}, S), {}, { isLoading: !0 });
      case pt.SET_DETAILS:
        return mt(mt({}, S), {}, { isLoading: !1, details: s.details, alert: s.alert });
      case pt.ALERT:
        return mt(mt({}, S), {}, { isLoading: !1, alert: s.alert });
      case pt.DISMISS_ALERT:
        return mt(mt({}, S), {}, { alert: void 0 });
      default:
        return S;
    }
  }
  var kt = n(5792), Pt = (S) => {
    var { children: s, className: g } = S;
    return (() => {
      var q = () => window.innerWidth >= 1920 ? "xxlarge" : window.innerWidth >= 1366 ? "xlarge" : window.innerWidth >= 1024 ? "large" : window.innerWidth >= 768 ? "medium" : "small", [on, B] = (0, kt.eJ)(q());
      return (0, kt.d4)(() => {
        var L, un = () => {
          L && clearTimeout(L), L = setTimeout(() => B(q()), 50);
        };
        return window.addEventListener("resize", un), () => {
          window.removeEventListener("resize", un), L && clearTimeout(L);
        };
      }, []), on;
    })() !== "small" ? (0, t.tZ)("div", { className: g, children: s }) : (0, t.tZ)(t.HY, { children: s });
  }, qt = (S) => {
    var { state: s } = S, { isLoading: g, details: q } = s, on = function(B) {
      var L = B == null ? void 0 : B.total;
      if (L) {
        var un = L == null ? void 0 : L.grand_total, cn = L == null ? void 0 : L.subtotal, _n = L == null ? void 0 : L.total_shipping, In = L == null ? void 0 : L.total_tax;
        return { total: { inclTax: { amount: (un == null ? void 0 : un.value) || 0, currency: (un == null ? void 0 : un.currency) || "" } }, subtotal: { amount: (cn == null ? void 0 : cn.value) || 0, currency: (cn == null ? void 0 : cn.currency) || "", isTaxIncl: !1 }, shipping: { amount: (_n == null ? void 0 : _n.value) || 0, currency: (_n == null ? void 0 : _n.currency) || "" }, tax: { amount: (In == null ? void 0 : In.value) || 0, currency: (In == null ? void 0 : In.currency) || "" } };
      }
    }(q);
    return (0, t.BX)(t.HY, { children: [(0, t.tZ)(c, { isLoading: g, summary: on }), (0, t.tZ)(u, { isLoading: g, details: q })] });
  }, Lt = (S) => {
    var { state: s } = S;
    return (0, t.tZ)(Pt, { className: "order-confirmation__aside", children: (0, t.tZ)(qt, { state: s }) });
  }, Ft = (S) => {
    var { state: s, routeHome: g, routeSupport: q } = S, { details: on, isLoading: B } = s, L = on == null ? void 0 : on.billing_address, un = (L == null ? void 0 : L.firstname) || "", cn = (on == null ? void 0 : on.number) || "", _n = (on == null ? void 0 : on.status) || "", In = !!un && !!cn;
    return (0, t.BX)(t.HY, { children: [(B || !B && In) && (0, t.tZ)(G, { isLoading: B, customerName: un, orderNumber: cn, orderStatus: _n }), (0, t.tZ)(fn, { isLoading: B, orderDetails: on }), (0, t.tZ)(An, { isLoading: B, routeHome: g, routeSupport: q })] });
  }, Xt = (S) => {
    var { state: s, routeHome: g, routeSupport: q, dismissAlert: on, onOrderSearch: B } = S;
    return (0, t.tZ)(Pt, { className: "order-confirmation__main", children: (0, t.tZ)(Ft, { state: s, routeHome: g, routeSupport: q, dismissAlert: on, onOrderSearch: B }) });
  }, Gt = (S) => {
    var { className: s, state: g, dismissAlert: q, routeHome: on, routeSupport: B, onOrderSearch: L } = S, { details: un, alert: cn, isLoading: _n } = g, In = !(un == null || !un.number), rn = cn && cn.code === St.INVALID_ORDER, vn = cn && cn.code === St.INVALID_SEARCH;
    return _n || In ? (0, t.BX)("div", { className: (0, _.S)(["order-confirmation", s]), children: [(0, t.tZ)(Xt, { state: g, dismissAlert: q, routeHome: on, routeSupport: B, onOrderSearch: L }), (0, t.tZ)(Lt, { state: g })] }) : (0, t.tZ)("div", { className: (0, _.S)(["order-confirmation", s]), children: (0, t.tZ)(bt, { alert: rn || vn ? { heading: cn.message, description: "", type: cn.type, onDismiss: q } : void 0, onOrderSearch: L }) });
  }, ht = n(3354), It = (S) => {
    var { token: s, routeHome: g, routeSupport: q } = S, { state: on, handleOrderSearch: B, dismissAlert: L } = function(un) {
      var [cn, _n] = (0, ht._Y)(Ht, { isLoading: !1, token: un, details: null }), In = (0, x.XK)({ invalidOrder: "OrderConfirmation.Errors.invalidOrder", invalidSearch: "OrderConfirmation.Errors.invalidSearch", pageNotFound: "OrderConfirmation.Errors.pageNotFound", unknown: "OrderConfirmation.Errors.unknown" }), rn = (0, ht.I4)((Vn) => {
        switch (Vn) {
          case "Invalid order":
          case "We couldn't locate an order with the information provided.":
            return { type: jt.WARNING, code: St.INVALID_ORDER, message: In.invalidOrder };
          case "Invalid search":
            return { type: jt.WARNING, code: St.INVALID_SEARCH, message: In.invalidSearch };
        }
      }, [In.invalidOrder, In.invalidSearch]), vn = (0, ht.I4)((Vn) => {
        (0, d.h)(Vn).then((Rn) => {
          var Un = Rn != null && Rn.number ? void 0 : rn("Invalid search");
          _n({ type: pt.SET_DETAILS, details: Rn, alert: Un });
        }).catch(() => {
          var Rn = rn("Invalid search");
          _n({ type: pt.SET_DETAILS, details: null, alert: Rn });
        });
      }, [rn]), rt = (0, ht.I4)((Vn) => {
        (0, o.y)(Vn).then((Rn) => {
          var Un = Rn != null && Rn.number ? void 0 : rn("Invalid order");
          _n({ type: pt.SET_DETAILS, details: Rn, alert: Un });
        }).catch((Rn) => {
          var Un = rn(Rn.message);
          Un ? _n({ type: pt.ALERT, alert: Un }) : console.error(Rn);
        });
      }, [rn]);
      return (0, ht.d4)(() => {
        cn.token && (_n({ type: pt.LOADING }), rt(cn.token));
      }, [cn.token, rt]), { state: cn, handleOrderSearch: function(Vn) {
        vn(Vn);
      }, dismissAlert: () => {
        _n({ type: pt.DISMISS_ALERT });
      } };
    }(s);
    return (0, t.tZ)(Gt, { state: on, dismissAlert: L, onOrderSearch: B, routeHome: g, routeSupport: q });
  };
}, 7358: (J, j, n) => {
  n.d(j, { Z: () => k });
  var d = n(4933), o = n.n(d), _ = n(3476), h = n.n(_)()(o());
  h.push([J.id, `.order-confirmation-summary .dropin-card__content{
    gap:var(--spacing-xsmall);
  }
  
  .order-confirmation-cart-summary__heading{
    display:grid;
    grid-template-columns:1fr max-content;
    grid-auto-rows:max-content;
  }
  
  .order-confirmation-cart-summary__title{
    color:var(--color-neutral-800);
    font:var(--type-headline-2-default-font);
    letter-spacing:var(--type-headline-2-default-letter-spacing);
    margin:0;
  }
  
  .order-confirmation-cart-summary__edit{
    font:var(--type-body-2-strong-font);
    letter-spacing:var(--type-body-2-strong-letter-spacing);
    align-self:flex-end;
    justify-self:flex-end;
    margin:0;
    cursor:pointer;
  }
  
  .order-confirmation-cart-summary__edit a{
    font:var(--type-body-2-strong-font);
    letter-spacing:var(--type-body-2-strong-letter-spacing);
  }
  
  .order-confirmation-cart-summary .order-confirmation-cart-summary__divider-top{
    margin:0 0 var(--spacing-medium) 0;
  }
  
  .order-confirmation-cart-summary .order-confirmation-cart-summary__divider-bottom{
    margin:var(--spacing-medium) 0 var(--spacing-small) 0;
  }
  
  .order-confirmation-cart-summary__items{
    display:grid;
    gap:var(--spacing-medium);
  }
  
  .order-confirmation-cart-summary__action{
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
  
  .order-confirmation-cart-summary__action:hover{
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
    .order-confirmation-cart-summary .dropin-accordion-section__content-container{
      gap:0;
    }
  
    .order-confirmation-cart-summary-item{
      margin-bottom:var(--spacing-medium);
    }
  
    .dropin-accordion-section__content-container .order-confirmation-cart-summary-item:last-of-type{
      margin-bottom:0;
    }
  }
`, ""]);
  const k = h;
}, 4223: (J, j, n) => {
  n.d(j, { Z: () => k });
  var d = n(4933), o = n.n(d), _ = n(3476), h = n.n(_)()(o());
  h.push([J.id, `.order-confirmation-cart-summary-item .dropin-cart-item__title{
    font:var(--type-body-1-default-font);
    letter-spacing:var(--type-body-1-default-letter-spacing);
  }
  
  .order-confirmation-cart-summary-item .dropin-cart-item__price{
    margin:var(--spacing-xxsmall) 0;
  }
  .order-confirmation-cart-summary-item .dropin-price--sale{
    color:#BF4545;
  }
  .dropin-cart-item__total{
    align-items:flex-end;
  }
  `, ""]);
  const k = h;
}, 418: (J, j, n) => {
  n.d(j, { Z: () => k });
  var d = n(4933), o = n.n(d), _ = n(3476), h = n.n(_)()(o());
  h.push([J.id, `.order-confirmation-details__header{
    display:grid;
    grid-auto-rows:max-content;
}

.order-confirmation-details__title{
    color:var(--color-neutral-800);
    font:var(--type-headline-2-strong-font);
    letter-spacing:var(--type-headline-2-strong-letter-spacing);
    margin:0;
}

.order-confirmation-details h3{
    font:var(--type-body-1-strong-font);
    letter-spacing:var(--type-body-1-strong-letter-spacing);
    margin:0 0 var(--spacing-xsmall) 0;
}

.order-confirmation-details p{
    margin:var(--spacing-xsmall) 0 0 0;
    color:var(--color-neutral-700);
    font:var(--type-body-2-default-font);
    letter-spacing:var(--type-body-2-default-letter-spacing);
}

a.order-confirmation__login-link{
    font:var(--type-body-2-strong-font);
    margin-left:var(--spacing-xxsmall);
}

.order-confirmation-details__shipping-method span{
    font:var(--type-body-2-strong-font);
    letter-spacing:var(--type-body-2-strong-letter-spacing);
}

.order-confirmation-details__information{
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:var(--spacing-medium);
}

.order-confirmation-details__information>div:empty{
    visibility:hidden;
    display:none;
}

.order-confirmation-details .static-skeleton{
    gap:var(--spacing-xsmall);
}
@media only screen and (min-width:320px) and (max-width: 768px){
    .order-confirmation-details__information{
        grid-template-columns:1fr;
    }
}
`, ""]);
  const k = h;
}, 7221: (J, j, n) => {
  n.d(j, { Z: () => k });
  var d = n(4933), o = n.n(d), _ = n(3476), h = n.n(_)()(o());
  h.push([J.id, `.order-confirmation-footer{
    gap:var(--spacing-small);
    text-align:center;
}

.order-confirmation-footer .order-confirmation-footer__continue-button{
    margin:0 auto;
    text-align:center;
    display:inline-block;
}

.order-confirmation-footer__contact-support{
    font:var(--type-body-2-default-font);
    letter-spacing:var(--type-body-2-default-letter-spacing);
    color:var(--color-neutral-700);
}

.order-confirmation-footer__contact-support a{
    font:var(--type-body-2-strong-font);
    letter-spacing:var(--type-body-2-strong-letter-spacing);
    color:var(--color-brand-500);
    cursor:pointer;
}
`, ""]);
  const k = h;
}, 2970: (J, j, n) => {
  n.d(j, { Z: () => k });
  var d = n(4933), o = n.n(d), _ = n(3476), h = n.n(_)()(o());
  h.push([J.id, `.order-confirmation-header{
    text-align:center;
    padding:var(--spacing-xxbig);
}

.order-confirmation-header__icon{
    margin-bottom:var(--spacing-small);
}

.order-confirmation-header h1{
    color:var(--color-neutral-800);
    font:var(--type-headline-1-font);
    letter-spacing:var(--type-headline-1-letter-spacing);
    margin:0;
}

.order-confirmation-header h1:first-letter{
    text-transform:uppercase;
}

.order-confirmation-header p{
    color:var(--color-neutral-700);
    font:var(--type-details-overline-font);
    letter-spacing:var(--type-details-overline-letter-spacing);
    margin:var(--spacing-xxsmall) 0 0 0;
}

.order-confirmation-header .OrderSuccess_svg__success-icon{
    color:var(--color-positive-500);
}
`, ""]);
  const k = h;
}, 5975: (J, j, n) => {
  n.d(j, { Z: () => k });
  var d = n(4933), o = n.n(d), _ = n(3476), h = n.n(_)()(o());
  h.push([J.id, `.dropin-in-line-alert{
    border-width:var(--shape-border-width-2);
    border-style:solid;
    border-radius:var(--shape-border-radius-1);
    display:grid;
    grid-auto-flow:row;
    gap:var(--spacing-small);
    padding:var(--spacing-small);
    position:relative;
}

.dropin-in-line-alert__heading{
    display:grid;
    gap:var(--spacing-small);
    grid-template-columns:auto auto;
    align-items:center;
}

.dropin-in-line-alert__title-container{
    display:flex;
    align-items:center;
    gap:var(--spacing-xsmall);
}

.dropin-in-line-alert__title{
    color:var(--color-neutral-800);
    font:var(--type-body-2-emphasized-font);
    letter-spacing:var(--type-body-2-emphasized-letter-spacing);
    margin:0;
}

.dropin-in-line-alert__actions-container{
    display:flex;
    justify-content:end;
}

.dropin-in-line-alert__additional-action{
    padding:0px!important;
}

.dropin-in-line-alert__additional-action span{
    font:var(--type-details-caption-1-font);
    letter-spacing:var(--type-details-caption-1-letter-spacing);
    text-decoration:underline;
    color:var(--color-neutral-700);
}

.dropin-in-line-alert__dismiss-button{
    padding:0;
}

.dropin-in-line-alert__description{
    color:var(--color-neutral-800);
    font:var(--type-body-2-default-font);
    letter-spacing:var(--type-body-2-default-letter-spacing);
    margin:0;
}

.dropin-in-line-alert__additional-actions-container{
    display:flex;
    gap:var(--spacing-small);
    justify-content:flex-end;
}
.dropin-in-line-alert--error{
    border-color:var(--color-alert-500);
}
.dropin-in-line-alert--warning{
    border-color:var(--color-warning-500);
}
.dropin-in-line-alert--success{
    border-color:var(--color-positive-500);
}
`, ""]);
  const k = h;
}, 4615: (J, j, n) => {
  n.d(j, { Z: () => k });
  var d = n(4933), o = n.n(d), _ = n(3476), h = n.n(_)()(o());
  h.push([J.id, `.order-confirmation{
  display:grid;
  align-items:start;
  grid-template-columns:repeat(var(--grid-4-columns), 1fr);
  grid-template-areas:'main aside';
  grid-column-gap:var(--grid-4-gutters);
  margin-bottom:var(--spacing-xbig);
}

.order-confirmation__main{
  display:grid;
  grid-row-gap:var(--spacing-xbig);
  grid-area:main;
  grid-column:1 / span 7;
}

.order-confirmation__aside{
  display:grid;
  grid-row-gap:var(--spacing-xbig);
  grid-area:aside;
  grid-column:9 / span 4;
}

.order-confirmation a{
  font:var(--type-body-2-strong-font);
  letter-spacing:var(--type-body-2-strong-letter-spacing);
  margin-left:var(--spacing-xxsmall);
}
.order-confirmation-header,
.order-confirmation-footer,
.order-confirmation-message,
.order-confirmation-order-search-form,
.order-confirmation-order-form,
.order-confirmation-status,
.order-confirmation-details{
  grid-column:1 / span 7;
}
@media only screen and (min-width: 320px) and (max-width: 768px){
  .order-confirmation{
    grid-template-columns:repeat(var(--grid-1-columns), 1fr);
    grid-column-gap:var(--grid-1-gutters);
    grid-template-areas:'header' 'details' 'orderSummary' 'cartSummary' 'footer';
  }

  .order-confirmation > div{
    grid-column:1 / span 4;
  }

  .order-confirmation-details{
    margin-bottom:var(--spacing-xbig);
  }

  .order-confirmation-order-summary{
    margin-bottom:var(--spacing-xbig);
    grid-area:orderSummary;
  }

  .order-confirmation-cart-summary{
    margin-bottom:var(--spacing-xbig);
    grid-area:cartSummary;
  }
}
`, ""]);
  const k = h;
}, 5397: (J, j, n) => {
  n.d(j, { Z: () => k });
  var d = n(4933), o = n.n(d), _ = n(3476), h = n.n(_)()(o());
  h.push([J.id, `.order-confirmation-order-search-form .dropin-card__content{
    gap:var(--spacing-small);
}
.order-confirmation-order-search-form p{
    color:var(--color-neutral-700);
    font:var(--type-body-2-default-font);
    letter-spacing:var(--type-body-2-default-letter-spacing);
    margin:0;
}

.order-confirmation-order-search-form__title{
    color:var(--color-neutral-800);
    font:var(--type-headline-2-strong-font);
    letter-spacing:var(--type-headline-2-strong-letter-spacing);
    margin:0;
}

.order-confirmation-order-search-form form{
    display:grid;
    grid-template-rows:1fr;
}

.order-confirmation-order-search-form__fields-columns{
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:var(--spacing-medium);
    margin-bottom:var(--spacing-medium);
}

.order-confirmation-order-search-form form button{
    align-self:flex-end;
    justify-self:flex-end;
    margin-top:var(--spacing-small);
}
`, ""]);
  const k = h;
}, 3550: (J, j, n) => {
  n.d(j, { Z: () => k });
  var d = n(4933), o = n.n(d), _ = n(3476), h = n.n(_)()(o());
  h.push([J.id, `.order-confirmation-order-summary .dropin-card__content{
  gap:var(--spacing-xsmall);
}

.order-confirmation-order-summary__title{
  color:var(--color-neutral-800);
  font:var(--type-headline-2-default-font);
  letter-spacing:var(--type-headline-2-default-letter-spacing);
  margin:0;
}

.order-confirmation-order-summary .dropin-divider--primary{
  margin:0 0 var(--spacing-medium) 0 !important;
}

.order-confirmation-order-summary .dropin-divider--secondary{
  margin:var(--spacing-xsmall) 0 var(--spacing-xsmall) 0 !important;
}

.order-confirmation-order-summary__breakdown{
  margin:var(--spacing-big) 0 var(--spacing-medium) 0;
}

.order-confirmation-order-summary__breakdown .dropin-divider:last-child{
  margin-bottom:0;
}

.order-confirmation-order-summary__row{
  display:flex;
  justify-content:space-between;
  color:var(--color-neutral-800);
  font:var(--type-body-1-default-font);
  letter-spacing:var(--type-body-1-default-letter-spacing);
}

.order-confirmation-order-summary__row--margin-top{
  margin-top:var(--spacing-xsmall);
}

.order-confirmation-order-summary__row--margin-bottom{
  margin-bottom:var(--spacing-xsmall);
}

.order-confirmation-order-summary__row .order-confirmation-order-summary__price{
  color:var(--color-neutral-800);
  font:var(--type-body-1-default-font);
  letter-spacing:var(--type-body-1-default-letter-spacing);
}

.order-confirmation-order-summary__row p{
  margin:0;
}

.order-confirmation-order-summary__row--strong{
  font:var(--type-body-1-strong-font);
  letter-spacing:var(--type-body-1-strong-letter-spacing);
}

.order-confirmation-order-summary__row--strong .order-confirmation-order-summary__price{
  color:var(--color-neutral-800);
  font:var(--type-body-1-strong-font);
  letter-spacing:var(--type-body-1-strong-letter-spacing);
}

.order-confirmation-order-summary__row--emphasized{
  font:var(--type-body-1-emphasized-font);
  letter-spacing:var(--type-body-1-emphasized-letter-spacing);
  margin-top:var(--spacing-small);
}

.order-confirmation-order-summary__row--emphasized .order-confirmation-order-summary__price{
  color:var(--color-neutral-800);
  font:var(--type-body-1-emphasized-font);
  letter-spacing:var(--type-body-1-emphasized-letter-spacing);
}

.order-confirmation-order-summary__row--muted{
  color:var(--color-neutral-700);
  font:var(--type-body-2-default-font);
  letter-spacing:var(--type-body-2-default-letter-spacing);
  margin-top:calc(-1 * var(--spacing-xxsmall));
}

.order-confirmation-order-summary__row--muted .order-confirmation-order-summary__price{
  color:var(--color-neutral-700);
  font:var(--type-body-2-default-font);
  letter-spacing:var(--type-body-2-default-letter-spacing);
}

.order-confirmation-order-summary .dropin-skeleton:last-child{
  margin-top:var(--spacing-big);
}

@media only screen and (min-width: 320px) and (max-width: 768px){
  .order-confirmation-order-summary{
    border-top:var(--shape-border-width-2) solid var(--color-neutral-400);
    border-bottom:var(--shape-border-width-2) solid var(--color-neutral-400);
    border-radius:0;
  }

  .order-confirmation-skeleton .order-confirmation-order-summary{
    border:0 none;
  }
}
`, ""]);
  const k = h;
}, 3377: (J, j, n) => {
  n.d(j, { Z: () => k });
  var d = n(4933), o = n.n(d), _ = n(3476), h = n.n(_)()(o());
  h.push([J.id, `.static-skeleton .dropin-skeleton--row__content{
    animation:0;
    background:var(--color-neutral-300);
    border-radius:var(--shape-border-radius-1);
}
`, ""]);
  const k = h;
} };
Hn.C(Tt);
Hn.C(Sr);
Hn.C(Wt);
var Ct, zt = (Ct = 4313, Hn(Hn.s = Ct)), kr = zt.N, $t = zt.Z;
async function Dr(J) {
  Vt.register(Bt, {});
  const n = new URLSearchParams(window.location.search).get("orderRef");
  return Mt.render($t, {
    token: n,
    routeHome: () => "/",
    routeSupport: () => "/support"
  })(J);
}
export {
  Dr as default
};
