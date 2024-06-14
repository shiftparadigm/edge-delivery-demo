var Yu = { exports: {} };
/*! For license information please see index.js.LICENSE.txt */
(function(Sa, Ku) {
  (function(fr, dn) {
    Sa.exports = dn();
  })(self, () => (() => {
    var fr = { 494: (B, $, O) => {
      var E = O(34);
      B.exports = { get: E.get, set: E.set, remove: E.remove };
    }, 59: (B, $, O) => {
      var E = O(811);
      B.exports = function(R) {
        var A = document.createElement("script");
        A.src = R, A.async = !0;
        var j = function(J, F) {
          return new E(function(X, V) {
            F.onload = function() {
              X(F);
            }, F.onerror = function() {
              V(new Error("Failed to load script " + J));
            };
          });
        }(R, A);
        return document.getElementsByTagName("head")[0].appendChild(A), j;
      };
    }, 739: (B, $, O) => {
      B.exports = O(320);
    }, 811: (B, $, O) => {
      B.exports = typeof window < "u" && window.Promise || O.g !== void 0 && O.g.Promise || O(214).default || O(214);
    }, 308: (B, $, O) => {
      var E = O(642);
      B.exports = { parse: function(R) {
        return typeof R == "string" && (R = R.trim().replace(/^[?#&]/, "")), E.parse(R);
      }, stringify: function(R) {
        return E.stringify(R);
      } };
    }, 792: (B) => {
      var $ = { utf8: { stringToBytes: function(O) {
        return $.bin.stringToBytes(unescape(encodeURIComponent(O)));
      }, bytesToString: function(O) {
        return decodeURIComponent(escape($.bin.bytesToString(O)));
      } }, bin: { stringToBytes: function(O) {
        for (var E = [], R = 0; R < O.length; R++)
          E.push(255 & O.charCodeAt(R));
        return E;
      }, bytesToString: function(O) {
        for (var E = [], R = 0; R < O.length; R++)
          E.push(String.fromCharCode(O[R]));
        return E.join("");
      } } };
      B.exports = $;
    }, 562: (B) => {
      var $, O;
      $ = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", O = { rotl: function(E, R) {
        return E << R | E >>> 32 - R;
      }, rotr: function(E, R) {
        return E << 32 - R | E >>> R;
      }, endian: function(E) {
        if (E.constructor == Number)
          return 16711935 & O.rotl(E, 8) | 4278255360 & O.rotl(E, 24);
        for (var R = 0; R < E.length; R++)
          E[R] = O.endian(E[R]);
        return E;
      }, randomBytes: function(E) {
        for (var R = []; E > 0; E--)
          R.push(Math.floor(256 * Math.random()));
        return R;
      }, bytesToWords: function(E) {
        for (var R = [], A = 0, j = 0; A < E.length; A++, j += 8)
          R[j >>> 5] |= E[A] << 24 - j % 32;
        return R;
      }, wordsToBytes: function(E) {
        for (var R = [], A = 0; A < 32 * E.length; A += 8)
          R.push(E[A >>> 5] >>> 24 - A % 32 & 255);
        return R;
      }, bytesToHex: function(E) {
        for (var R = [], A = 0; A < E.length; A++)
          R.push((E[A] >>> 4).toString(16)), R.push((15 & E[A]).toString(16));
        return R.join("");
      }, hexToBytes: function(E) {
        for (var R = [], A = 0; A < E.length; A += 2)
          R.push(parseInt(E.substr(A, 2), 16));
        return R;
      }, bytesToBase64: function(E) {
        for (var R = [], A = 0; A < E.length; A += 3)
          for (var j = E[A] << 16 | E[A + 1] << 8 | E[A + 2], J = 0; J < 4; J++)
            8 * A + 6 * J <= 8 * E.length ? R.push($.charAt(j >>> 6 * (3 - J) & 63)) : R.push("=");
        return R.join("");
      }, base64ToBytes: function(E) {
        E = E.replace(/[^A-Z0-9+\/]/gi, "");
        for (var R = [], A = 0, j = 0; A < E.length; j = ++A % 4)
          j != 0 && R.push(($.indexOf(E.charAt(A - 1)) & Math.pow(2, -2 * j + 8) - 1) << 2 * j | $.indexOf(E.charAt(A)) >>> 6 - 2 * j);
        return R;
      } }, B.exports = O;
    }, 148: function(B, $, O) {
      var E;
      E = O.g !== void 0 ? O.g : this, B.exports = function(R) {
        if (R.CSS && R.CSS.escape)
          return R.CSS.escape;
        var A = function(j) {
          if (arguments.length == 0)
            throw new TypeError("`CSS.escape` requires an argument.");
          for (var J, F = String(j), X = F.length, V = -1, de = "", K = F.charCodeAt(0); ++V < X; )
            (J = F.charCodeAt(V)) != 0 ? de += J >= 1 && J <= 31 || J == 127 || V == 0 && J >= 48 && J <= 57 || V == 1 && J >= 48 && J <= 57 && K == 45 ? "\\" + J.toString(16) + " " : V == 0 && X == 1 && J == 45 || !(J >= 128 || J == 45 || J == 95 || J >= 48 && J <= 57 || J >= 65 && J <= 90 || J >= 97 && J <= 122) ? "\\" + F.charAt(V) : F.charAt(V) : de += "�";
          return de;
        };
        return R.CSS || (R.CSS = {}), R.CSS.escape = A, A;
      }(E);
    }, 34: (B, $, O) => {
      var E, R, A;
      A = function() {
        function j() {
          for (var F = 0, X = {}; F < arguments.length; F++) {
            var V = arguments[F];
            for (var de in V)
              X[de] = V[de];
          }
          return X;
        }
        function J(F) {
          return F.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
        }
        return function F(X) {
          function V() {
          }
          function de(Y, S, N) {
            if (typeof document < "u") {
              typeof (N = j({ path: "/" }, V.defaults, N)).expires == "number" && (N.expires = new Date(1 * /* @__PURE__ */ new Date() + 864e5 * N.expires)), N.expires = N.expires ? N.expires.toUTCString() : "";
              try {
                var _ = JSON.stringify(S);
                /^[\{\[]/.test(_) && (S = _);
              } catch {
              }
              S = X.write ? X.write(S, Y) : encodeURIComponent(String(S)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), Y = encodeURIComponent(String(Y)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
              var G = "";
              for (var ce in N)
                N[ce] && (G += "; " + ce, N[ce] !== !0 && (G += "=" + N[ce].split(";")[0]));
              return document.cookie = Y + "=" + S + G;
            }
          }
          function K(Y, S) {
            if (typeof document < "u") {
              for (var N = {}, _ = document.cookie ? document.cookie.split("; ") : [], G = 0; G < _.length; G++) {
                var ce = _[G].split("="), pe = ce.slice(1).join("=");
                S || pe.charAt(0) !== '"' || (pe = pe.slice(1, -1));
                try {
                  var Re = J(ce[0]);
                  if (pe = (X.read || X)(pe, Re) || J(pe), S)
                    try {
                      pe = JSON.parse(pe);
                    } catch {
                    }
                  if (N[Re] = pe, Y === Re)
                    break;
                } catch {
                }
              }
              return Y ? N[Y] : N;
            }
          }
          return V.set = de, V.get = function(Y) {
            return K(Y, !1);
          }, V.getJSON = function(Y) {
            return K(Y, !0);
          }, V.remove = function(Y, S) {
            de(Y, "", j(S, { expires: -1 }));
          }, V.defaults = {}, V.withConverter = F, V;
        }(function() {
        });
      }, (R = typeof (E = A) == "function" ? E.call($, O, $, B) : E) === void 0 || (B.exports = R), B.exports = A();
    }, 320: (B) => {
      var $ = Object.getOwnPropertySymbols, O = Object.prototype.hasOwnProperty, E = Object.prototype.propertyIsEnumerable;
      function R(A) {
        if (A == null)
          throw new TypeError("Object.assign cannot be called with null or undefined");
        return Object(A);
      }
      B.exports = function() {
        try {
          if (!Object.assign)
            return !1;
          var A = new String("abc");
          if (A[5] = "de", Object.getOwnPropertyNames(A)[0] === "5")
            return !1;
          for (var j = {}, J = 0; J < 10; J++)
            j["_" + String.fromCharCode(J)] = J;
          if (Object.getOwnPropertyNames(j).map(function(X) {
            return j[X];
          }).join("") !== "0123456789")
            return !1;
          var F = {};
          return "abcdefghijklmnopqrst".split("").forEach(function(X) {
            F[X] = X;
          }), Object.keys(Object.assign({}, F)).join("") === "abcdefghijklmnopqrst";
        } catch {
          return !1;
        }
      }() ? Object.assign : function(A, j) {
        for (var J, F, X = R(A), V = 1; V < arguments.length; V++) {
          for (var de in J = Object(arguments[V]))
            O.call(J, de) && (X[de] = J[de]);
          if ($) {
            F = $(J);
            for (var K = 0; K < F.length; K++)
              E.call(J, F[K]) && (X[F[K]] = J[F[K]]);
          }
        }
        return X;
      };
    }, 214: (B, $, O) => {
      O.r($), O.d($, { default: () => Y });
      var E = setTimeout;
      function R(S) {
        return !!(S && S.length !== void 0);
      }
      function A() {
      }
      function j(S) {
        if (!(this instanceof j))
          throw new TypeError("Promises must be constructed via new");
        if (typeof S != "function")
          throw new TypeError("not a function");
        this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], K(S, this);
      }
      function J(S, N) {
        for (; S._state === 3; )
          S = S._value;
        S._state !== 0 ? (S._handled = !0, j._immediateFn(function() {
          var _ = S._state === 1 ? N.onFulfilled : N.onRejected;
          if (_ !== null) {
            var G;
            try {
              G = _(S._value);
            } catch (ce) {
              return void X(N.promise, ce);
            }
            F(N.promise, G);
          } else
            (S._state === 1 ? F : X)(N.promise, S._value);
        })) : S._deferreds.push(N);
      }
      function F(S, N) {
        try {
          if (N === S)
            throw new TypeError("A promise cannot be resolved with itself.");
          if (N && (typeof N == "object" || typeof N == "function")) {
            var _ = N.then;
            if (N instanceof j)
              return S._state = 3, S._value = N, void V(S);
            if (typeof _ == "function")
              return void K((G = _, ce = N, function() {
                G.apply(ce, arguments);
              }), S);
          }
          S._state = 1, S._value = N, V(S);
        } catch (pe) {
          X(S, pe);
        }
        var G, ce;
      }
      function X(S, N) {
        S._state = 2, S._value = N, V(S);
      }
      function V(S) {
        S._state === 2 && S._deferreds.length === 0 && j._immediateFn(function() {
          S._handled || j._unhandledRejectionFn(S._value);
        });
        for (var N = 0, _ = S._deferreds.length; N < _; N++)
          J(S, S._deferreds[N]);
        S._deferreds = null;
      }
      function de(S, N, _) {
        this.onFulfilled = typeof S == "function" ? S : null, this.onRejected = typeof N == "function" ? N : null, this.promise = _;
      }
      function K(S, N) {
        var _ = !1;
        try {
          S(function(G) {
            _ || (_ = !0, F(N, G));
          }, function(G) {
            _ || (_ = !0, X(N, G));
          });
        } catch (G) {
          if (_)
            return;
          _ = !0, X(N, G);
        }
      }
      j.prototype.catch = function(S) {
        return this.then(null, S);
      }, j.prototype.then = function(S, N) {
        var _ = new this.constructor(A);
        return J(this, new de(S, N, _)), _;
      }, j.prototype.finally = function(S) {
        var N = this.constructor;
        return this.then(function(_) {
          return N.resolve(S()).then(function() {
            return _;
          });
        }, function(_) {
          return N.resolve(S()).then(function() {
            return N.reject(_);
          });
        });
      }, j.all = function(S) {
        return new j(function(N, _) {
          if (!R(S))
            return _(new TypeError("Promise.all accepts an array"));
          var G = Array.prototype.slice.call(S);
          if (G.length === 0)
            return N([]);
          var ce = G.length;
          function pe(Oe, be) {
            try {
              if (be && (typeof be == "object" || typeof be == "function")) {
                var ct = be.then;
                if (typeof ct == "function")
                  return void ct.call(be, function(ut) {
                    pe(Oe, ut);
                  }, _);
              }
              G[Oe] = be, --ce == 0 && N(G);
            } catch (ut) {
              _(ut);
            }
          }
          for (var Re = 0; Re < G.length; Re++)
            pe(Re, G[Re]);
        });
      }, j.resolve = function(S) {
        return S && typeof S == "object" && S.constructor === j ? S : new j(function(N) {
          N(S);
        });
      }, j.reject = function(S) {
        return new j(function(N, _) {
          _(S);
        });
      }, j.race = function(S) {
        return new j(function(N, _) {
          if (!R(S))
            return _(new TypeError("Promise.race accepts an array"));
          for (var G = 0, ce = S.length; G < ce; G++)
            j.resolve(S[G]).then(N, _);
        });
      }, j._immediateFn = typeof setImmediate == "function" && function(S) {
        setImmediate(S);
      } || function(S) {
        E(S, 0);
      }, j._unhandledRejectionFn = function(S) {
        typeof console < "u" && console && console.warn("Possible Unhandled Promise Rejection:", S);
      };
      const Y = j;
    }, 808: (B) => {
      function $(O, E) {
        return Object.prototype.hasOwnProperty.call(O, E);
      }
      B.exports = function(O, E, R, A) {
        E = E || "&", R = R || "=";
        var j = {};
        if (typeof O != "string" || O.length === 0)
          return j;
        var J = /\+/g;
        O = O.split(E);
        var F = 1e3;
        A && typeof A.maxKeys == "number" && (F = A.maxKeys);
        var X = O.length;
        F > 0 && X > F && (X = F);
        for (var V = 0; V < X; ++V) {
          var de, K, Y, S, N = O[V].replace(J, "%20"), _ = N.indexOf(R);
          _ >= 0 ? (de = N.substr(0, _), K = N.substr(_ + 1)) : (de = N, K = ""), Y = decodeURIComponent(de), S = decodeURIComponent(K), $(j, Y) ? Array.isArray(j[Y]) ? j[Y].push(S) : j[Y] = [j[Y], S] : j[Y] = S;
        }
        return j;
      };
    }, 368: (B) => {
      var $ = function(O) {
        switch (typeof O) {
          case "string":
            return O;
          case "boolean":
            return O ? "true" : "false";
          case "number":
            return isFinite(O) ? O : "";
          default:
            return "";
        }
      };
      B.exports = function(O, E, R, A) {
        return E = E || "&", R = R || "=", O === null && (O = void 0), typeof O == "object" ? Object.keys(O).map(function(j) {
          var J = encodeURIComponent($(j)) + R;
          return Array.isArray(O[j]) ? O[j].map(function(F) {
            return J + encodeURIComponent($(F));
          }).join(E) : J + encodeURIComponent($(O[j]));
        }).join(E) : A ? encodeURIComponent($(A)) + R + encodeURIComponent($(O)) : "";
      };
    }, 642: (B, $, O) => {
      $.decode = $.parse = O(808), $.encode = $.stringify = O(368);
    }, 961: (B, $, O) => {
      var E, R, A, j;
      E = O(562), R = O(792).utf8, A = O(792).bin, (j = function(J, F) {
        var X = E.wordsToBytes(function(V) {
          V.constructor == String ? V = R.stringToBytes(V) : typeof Buffer < "u" && typeof Buffer.isBuffer == "function" && Buffer.isBuffer(V) ? V = Array.prototype.slice.call(V, 0) : Array.isArray(V) || (V = V.toString());
          var de = E.bytesToWords(V), K = 8 * V.length, Y = [], S = 1732584193, N = -271733879, _ = -1732584194, G = 271733878, ce = -1009589776;
          de[K >> 5] |= 128 << 24 - K % 32, de[15 + (K + 64 >>> 9 << 4)] = K;
          for (var pe = 0; pe < de.length; pe += 16) {
            for (var Re = S, Oe = N, be = _, ct = G, ut = ce, Ee = 0; Ee < 80; Ee++) {
              if (Ee < 16)
                Y[Ee] = de[pe + Ee];
              else {
                var ln = Y[Ee - 3] ^ Y[Ee - 8] ^ Y[Ee - 14] ^ Y[Ee - 16];
                Y[Ee] = ln << 1 | ln >>> 31;
              }
              var dt = (S << 5 | S >>> 27) + ce + (Y[Ee] >>> 0) + (Ee < 20 ? 1518500249 + (N & _ | ~N & G) : Ee < 40 ? 1859775393 + (N ^ _ ^ G) : Ee < 60 ? (N & _ | N & G | _ & G) - 1894007588 : (N ^ _ ^ G) - 899497514);
              ce = G, G = _, _ = N << 30 | N >>> 2, N = S, S = dt;
            }
            S += Re, N += Oe, _ += be, G += ct, ce += ut;
          }
          return [S, N, _, G, ce];
        }(J));
        return F && F.asBytes ? X : F && F.asString ? A.bytesToString(X) : E.bytesToHex(X);
      })._blocksize = 16, j._digestsize = 20, B.exports = j;
    }, 22: (B, $, O) => {
      var E = O(481), R = O(426), A = R;
      A.v1 = E, A.v4 = R, B.exports = A;
    }, 725: (B) => {
      for (var $ = [], O = 0; O < 256; ++O)
        $[O] = (O + 256).toString(16).substr(1);
      B.exports = function(E, R) {
        var A = R || 0, j = $;
        return [j[E[A++]], j[E[A++]], j[E[A++]], j[E[A++]], "-", j[E[A++]], j[E[A++]], "-", j[E[A++]], j[E[A++]], "-", j[E[A++]], j[E[A++]], "-", j[E[A++]], j[E[A++]], j[E[A++]], j[E[A++]], j[E[A++]], j[E[A++]]].join("");
      };
    }, 157: (B) => {
      var $ = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto < "u" && typeof window.msCrypto.getRandomValues == "function" && msCrypto.getRandomValues.bind(msCrypto);
      if ($) {
        var O = new Uint8Array(16);
        B.exports = function() {
          return $(O), O;
        };
      } else {
        var E = new Array(16);
        B.exports = function() {
          for (var R, A = 0; A < 16; A++)
            !(3 & A) && (R = 4294967296 * Math.random()), E[A] = R >>> ((3 & A) << 3) & 255;
          return E;
        };
      }
    }, 481: (B, $, O) => {
      var E, R, A = O(157), j = O(725), J = 0, F = 0;
      B.exports = function(X, V, de) {
        var K = V && de || 0, Y = V || [], S = (X = X || {}).node || E, N = X.clockseq !== void 0 ? X.clockseq : R;
        if (S == null || N == null) {
          var _ = A();
          S == null && (S = E = [1 | _[0], _[1], _[2], _[3], _[4], _[5]]), N == null && (N = R = 16383 & (_[6] << 8 | _[7]));
        }
        var G = X.msecs !== void 0 ? X.msecs : (/* @__PURE__ */ new Date()).getTime(), ce = X.nsecs !== void 0 ? X.nsecs : F + 1, pe = G - J + (ce - F) / 1e4;
        if (pe < 0 && X.clockseq === void 0 && (N = N + 1 & 16383), (pe < 0 || G > J) && X.nsecs === void 0 && (ce = 0), ce >= 1e4)
          throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
        J = G, F = ce, R = N;
        var Re = (1e4 * (268435455 & (G += 122192928e5)) + ce) % 4294967296;
        Y[K++] = Re >>> 24 & 255, Y[K++] = Re >>> 16 & 255, Y[K++] = Re >>> 8 & 255, Y[K++] = 255 & Re;
        var Oe = G / 4294967296 * 1e4 & 268435455;
        Y[K++] = Oe >>> 8 & 255, Y[K++] = 255 & Oe, Y[K++] = Oe >>> 24 & 15 | 16, Y[K++] = Oe >>> 16 & 255, Y[K++] = N >>> 8 | 128, Y[K++] = 255 & N;
        for (var be = 0; be < 6; ++be)
          Y[K + be] = S[be];
        return V || j(Y);
      };
    }, 426: (B, $, O) => {
      var E = O(157), R = O(725);
      B.exports = function(A, j, J) {
        var F = j && J || 0;
        typeof A == "string" && (j = A === "binary" ? new Array(16) : null, A = null);
        var X = (A = A || {}).random || (A.rng || E)();
        if (X[6] = 15 & X[6] | 64, X[8] = 63 & X[8] | 128, j)
          for (var V = 0; V < 16; ++V)
            j[F + V] = X[V];
        return j || R(X);
      };
    } }, dn = {};
    function ve(B) {
      var $ = dn[B];
      if ($ !== void 0)
        return $.exports;
      var O = dn[B] = { exports: {} };
      return fr[B].call(O.exports, O, O.exports, ve), O.exports;
    }
    ve.n = (B) => {
      var $ = B && B.__esModule ? () => B.default : () => B;
      return ve.d($, { a: $ }), $;
    }, ve.d = (B, $) => {
      for (var O in $)
        ve.o($, O) && !ve.o(B, O) && Object.defineProperty(B, O, { enumerable: !0, get: $[O] });
    }, ve.g = function() {
      if (typeof globalThis == "object")
        return globalThis;
      try {
        return this || new Function("return this")();
      } catch {
        if (typeof window == "object")
          return window;
      }
    }(), ve.o = (B, $) => Object.prototype.hasOwnProperty.call(B, $), ve.r = (B) => {
      typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(B, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(B, "__esModule", { value: !0 });
    };
    var ka = {};
    return (() => {
      const B = "Chrome", $ = "Edge", O = "EdgeChromium", E = "Unknown", R = (e, t) => e.indexOf(t) !== -1, A = [B, $, O, "IE", E], j = (e) => R(A, e);
      var J = ve(739);
      const F = ve.n(J)();
      var X = ve(494);
      const V = ve.n(X)(), de = (e) => e == null, K = (e) => !de(e) && !Array.isArray(e) && typeof e == "object", Y = (e, t) => {
        Object.keys(t).forEach((n) => {
          K(e[n]) && K(t[n]) ? Y(e[n], t[n]) : e[n] = t[n];
        });
      }, S = (e, ...t) => {
        if (de(e))
          throw new TypeError('deepAssign "target" cannot be null or undefined');
        const n = Object(e);
        return t.forEach((o) => Y(n, Object(o))), n;
      }, N = (e, t) => (n) => {
        const o = t.split(".").reduce((r, a) => (r[a] = r[a] || {}, r[a]), e);
        S(o, n);
      }, _ = () => {
        const e = [];
        return { add(t) {
          e.push(t);
        }, call: (...t) => Promise.all(e.map((n) => n(...t))) };
      }, G = ({ logger: e, cookieJar: t }) => ({ ...t, set(n, o, r) {
        e.info("Setting cookie", { name: n, value: o, ...r }), t.set(n, o, r);
      } }), ce = (() => {
        const e = [];
        for (let t = 0; t < 256; t++) {
          let n = t;
          for (let o = 0; o < 8; o++)
            n = 1 & n ? 3988292384 ^ n >>> 1 : n >>> 1;
          e.push(n);
        }
        return function(t, n) {
          t = unescape(encodeURIComponent(t)), n || (n = 0), n ^= -1;
          for (let o = 0; o < t.length; o++) {
            const r = 255 & (n ^ t.charCodeAt(o));
            n = n >>> 8 ^ e[r];
          }
          return (n ^= -1) >>> 0;
        };
      })(), pe = () => {
        const e = {};
        return e.promise = new Promise((t, n) => {
          e.resolve = t, e.reject = n;
        }), e;
      }, Re = (e, t) => {
        for (let n = 0; n < e.length; n += 1) {
          const o = e[n];
          if (t(o, n, e))
            return o;
        }
      }, Oe = (e, t) => e.appendChild(t), be = (e, t = {}, n = {}, o = [], r = document) => {
        const a = r.createElement(e);
        return Object.keys(t).forEach((i) => {
          a.setAttribute(i, t[i]);
        }), ((i, d) => {
          Object.keys(d).forEach((c) => {
            if (c === "style" && K(d[c])) {
              const u = d[c];
              Object.keys(u).forEach((s) => {
                i.style[s] = u[s];
              });
            } else
              i[c] = d[c];
          });
        })(a, n), o.forEach((i) => Oe(a, i)), a;
      }, ct = "IMG", ut = "STYLE", Ee = "SCRIPT", ln = ({ src: e, currentDocument: t = document }) => new Promise((n, o) => {
        be(ct, { src: e }, { onload: n, onerror: o, onabort: o }, [], t);
      }), dt = (e) => typeof e == "function", Me = (e) => Array.isArray(e) && e.length > 0, mn = (e) => Array.isArray(e) ? e : e == null ? [] : [].slice.call(e), Da = /^\s*>/, pn = (e, t) => {
        if (!Da.test(t))
          return mn(e.querySelectorAll(t));
        const n = `alloy-${Date.now()}`;
        try {
          return e.classList.add(n), mn(e.querySelectorAll(`.${n} ${t}`));
        } finally {
          e.classList.remove(n);
        }
      }, gr = (e, t) => e.substr(0, t.length) === t, to = ":shadow", Pa = (e, t) => {
        const n = t.trim();
        return gr(n, ">") ? window.document.documentMode ? n.substring(1).trim() : `${e instanceof Element || e instanceof HTMLDocument ? ":scope" : ":host"} ${n}` : n;
      }, ft = (e, t = document) => e.indexOf(to) === -1 ? pn(t, e) : ((n, o) => {
        if (!window.document.documentElement.attachShadow)
          return pn(n, o.replace(to, ""));
        const r = ((i) => i.split(to))(o);
        if (r.length < 2)
          return pn(n, o);
        let a = n;
        for (let i = 0; i < r.length; i += 1) {
          const d = Pa(a, r[i]), c = pn(a, d);
          if (c.length === 0 || !c[0] || !c[0].shadowRoot)
            return c;
          a = c[0].shadowRoot;
        }
      })(t, e), Ta = { childList: !0, subtree: !0 }, no = (e) => new Error(`Could not find: ${e}`), oo = (e) => new Promise(e), vr = (e, t = ft, n = 5e3, o = window, r = document) => {
        const a = t(e);
        return Me(a) ? Promise.resolve(a) : ((i) => dt(i.MutationObserver))(o) ? ((i, d, c, u, s) => oo((l, m) => {
          const f = new i.MutationObserver(() => {
            const g = s(c);
            Me(g) && (f.disconnect(), l(g));
          });
          setTimeout(() => {
            f.disconnect(), m(no(c));
          }, u), f.observe(d, Ta);
        }))(o, r, e, n, t) : ((i) => i.visibilityState === "visible")(r) ? ((i, d, c, u) => oo((s, l) => {
          const m = () => {
            const f = u(d);
            Me(f) ? s(f) : i.requestAnimationFrame(m);
          };
          m(), setTimeout(() => {
            l(no(d));
          }, c);
        }))(o, e, n, t) : ((i, d, c) => oo((u, s) => {
          const l = () => {
            const m = c(i);
            Me(m) ? u(m) : setTimeout(l, 100);
          };
          l(), setTimeout(() => {
            s(no(i));
          }, d);
        }))(e, n, t);
      }, zt = (e) => {
        const t = e.parentNode;
        return t ? t.removeChild(e) : null;
      }, Ra = { name: "Adobe Alloy" }, Oa = { style: { display: "none", width: 0, height: 0 } }, ro = (e, t) => Array.prototype.concat.apply([], e.map(t)), hr = "com.adobe.alloy.", fn = `${hr}getTld`, io = (e) => e.replace("@", "_"), yr = (e, t) => `kndctr_${io(e)}_${t}`, wr = ({ orgId: e }) => {
        const t = yr(e, "identity");
        return () => !!V.get(t);
      }, br = (e, t, n) => ({ getItem(o) {
        try {
          return e[t].getItem(n + o);
        } catch {
          return null;
        }
      }, setItem(o, r) {
        try {
          return e[t].setItem(n + o, r), !0;
        } catch {
          return !1;
        }
      }, clear() {
        try {
          return Object.keys(e[t]).forEach((o) => {
            gr(o, n) && e[t].removeItem(o);
          }), !0;
        } catch {
          return !1;
        }
      } }), Cr = (e) => (t) => {
        const n = hr + t;
        return { session: br(e, "sessionStorage", n), persistent: br(e, "localStorage", n) };
      }, jt = (e) => K(e) && Object.keys(e).length === 0, gn = (e) => typeof e == "number" && !isNaN(e), Ir = (e) => {
        const t = parseInt(e, 10);
        return gn(t) && e === t;
      }, vn = (e) => typeof e == "string", xr = (e) => vn(e) && e.length > 0, gt = () => {
      };
      var Aa = ve(308);
      const Er = ve.n(Aa)(), Sr = (e) => e instanceof Error ? e : new Error(e), kr = ({ error: e, message: t }) => {
        try {
          e.message = t;
        } catch {
        }
      }, hn = ({ error: e, message: t }) => {
        const n = Sr(e), o = `${t}
Caused by: ${n.message}`;
        return kr({ error: n, message: o }), n;
      }, Dr = (e, t) => {
        const n = Math.round(Number(e));
        return isNaN(n) ? t : n;
      }, vt = (e, t, n) => {
        const o = String(e);
        let r = String(n);
        if (o.length >= t || r.length === 0)
          return o;
        const a = t - o.length;
        for (; a > r.length; )
          r += r;
        return r.slice(0, a) + o;
      }, qa = (e) => {
        const t = e.getFullYear(), n = vt(e.getMonth() + 1, 2, "0"), o = vt(e.getDate(), 2, "0"), r = vt(e.getHours(), 2, "0"), a = vt(e.getMinutes(), 2, "0"), i = vt(e.getSeconds(), 2, "0"), d = vt(e.getMilliseconds(), 3, "0"), c = Dr(e.getTimezoneOffset(), 0);
        return `${t}-${n}-${o}T${r}:${a}:${i}.${d}${c > 0 ? "-" : "+"}${vt(Math.floor(Math.abs(c) / 60), 2, "0")}:${vt(Math.abs(c) % 60, 2, "0")}`;
      };
      var ja = ve(426);
      const Pr = ve.n(ja)(), yn = (e, t, n = {}) => {
        const o = (r, a) => t(e(r, a), a);
        return F(o, e, n), o;
      }, ke = (e, t, n) => yn(e, (o, r) => o == null ? o : t(o, r), n), Ue = (e, t, n, o) => {
        if (!e)
          throw new Error(`'${n}': Expected ${o}, but got ${JSON.stringify(t)}.`);
      }, Na = (e, t) => (Ue(/* @__PURE__ */ ((n) => typeof n == "boolean")(e), e, t, "true or false"), e), La = (e, t) => (Ue(dt(e), e, t, "a function"), e), Tr = (e, t) => (n, o) => (Ue(n >= t, n, o, `${e} greater than or equal to ${t}`), n), ao = (e) => (t, n) => (K(t) ? Ue(!jt(t), t, n, e) : Ue(t.length > 0, t, n, e), t), Ma = /^[a-z0-9.-]{1,}$/i, Ua = (e, t) => (Ue(Ma.test(e), e, t, "a valid domain"), e), _a = (e, t) => (Ue(Ir(e), e, t, "an integer"), e), $a = (e, t) => (Ue(gn(e), e, t, "a number"), e), Ba = (e, t) => (Ue(((n) => {
        try {
          return new RegExp(n) !== null;
        } catch {
          return !1;
        }
      })(e), e, t, "a regular expression"), e), Va = (e, t) => {
        if (e == null)
          throw new Error(`'${t}' is a required option`);
        return e;
      }, Fa = (e, t) => (Ue(vn(e), e, t, "a string"), e), Je = (e) => e;
      Je.default = function(e) {
        return yn(this, /* @__PURE__ */ ((t) => (n) => n ?? t)(e));
      }, Je.required = function() {
        return yn(this, Va);
      };
      const Ha = function() {
        return ke(this, Ua);
      }, za = function(e) {
        return ke(this, Tr("an integer", e));
      }, Ja = function(e) {
        return ke(this, Tr("a number", e));
      }, Wa = function() {
        return ke(this, _a, { minimum: za });
      }, Qa = function() {
        return ke(this, ao("a non-empty string"));
      }, Xa = function() {
        return ke(this, ao("a non-empty array"));
      }, Rr = function() {
        return ke(this, ao("a non-empty object"));
      }, Ga = function() {
        return ke(this, Ba);
      }, Or = function() {
        return ke(this, /* @__PURE__ */ (() => {
          const e = [];
          return (t, n) => (Ue(e.indexOf(t) === -1, t, n, "a unique value across instances"), e.push(t), t);
        })());
      }, Ya = (function(e, t) {
        return yn(this, /* @__PURE__ */ ((n, o) => (r, a) => {
          const i = Re(n, (d) => {
            try {
              return d(r, a), !0;
            } catch {
              return !1;
            }
          });
          return Ue(i, r, a, o), r;
        })(e, t));
      }).bind(Je), so = (function() {
        return ke(this, Je);
      }).bind(Je), Et = (function(e) {
        return ke(this, /* @__PURE__ */ ((t) => (n, o) => {
          Ue(Array.isArray(n), n, o, "an array");
          const r = [], a = n.map((i, d) => {
            try {
              return t(i, `${o}[${d}]`);
            } catch (c) {
              return void r.push(c.message);
            }
          });
          if (r.length)
            throw new Error(r.join(`
`));
          return a;
        })(e), { nonEmpty: Xa });
      }).bind(Je), Nt = (function() {
        return ke(this, Na);
      }).bind(Je), Ka = (function() {
        return ke(this, La);
      }).bind(Je), Ar = (function(e) {
        return ke(this, /* @__PURE__ */ ((t) => (n, o) => (Ue(n === t, n, o, `${t}`), n))(e));
      }).bind(Je), Za = ((function() {
        return ke(this, $a, { minimum: Ja, integer: Wa, unique: Or });
      }).bind(Je), (function(e) {
        return ke(this, (t = e, (n, o) => {
          Ue(K(n), n, o, "an object");
          const r = [], a = {};
          if (Object.keys(n).forEach((i) => {
            const d = n[i], c = o ? `${o}.${i}` : i;
            try {
              const u = t(d, c);
              u !== void 0 && (a[i] = u);
            } catch (u) {
              r.push(u.message);
            }
          }), r.length)
            throw new Error(r.join(`
`));
          return a;
        }), { nonEmpty: Rr });
        var t;
      }).bind(Je)), He = (function(e) {
        return ke(this, /* @__PURE__ */ ((t) => (n, o) => {
          Ue(K(n), n, o, "an object");
          const r = [], a = {};
          if (Object.keys(t).forEach((i) => {
            const d = n[i], c = t[i], u = o ? `${o}.${i}` : i;
            try {
              const s = c(d, u);
              s !== void 0 && (a[i] = s);
            } catch (s) {
              r.push(s.message);
            }
          }), Object.keys(n).forEach((i) => {
            Object.prototype.hasOwnProperty.call(a, i) || (a[i] = n[i]);
          }), r.length)
            throw new Error(r.join(`
`));
          return a;
        })(e), { noUnknownFields: function() {
          return ke(this, /* @__PURE__ */ ((t) => (n, o) => {
            const r = [];
            if (Object.keys(n).forEach((a) => {
              if (!t[a]) {
                const i = o ? `${o}.${a}` : a;
                r.push(`'${i}': Unknown field.`);
              }
            }), r.length)
              throw new Error(r.join(`
`));
            return n;
          })(e));
        }, nonEmpty: Rr });
      }).bind(Je), _e = (function() {
        return ke(this, Fa, { regexp: Ga, domain: Ha, nonEmpty: Qa, unique: Or });
      }).bind(Je), qr = function(...e) {
        return Ya(e.map(Ar), `one of these values: [${JSON.stringify(e)}]`);
      }, jr = Za(Et(He({ authenticatedState: qr("ambiguous", "authenticated", "loggedOut"), id: _e(), namespace: He({ code: _e() }).noUnknownFields(), primary: Nt(), xid: _e() })).required()), es = ["onComponentsRegistered", "onBeforeEvent", "onBeforeRequest", "onResponse", "onRequestFailure", "onClick"], Nr = (e, t) => (...n) => {
        let o;
        try {
          o = e(...n);
        } catch (r) {
          throw hn({ error: r, message: t });
        }
        return o instanceof Promise && (o = o.catch((r) => {
          throw hn({ error: r, message: t });
        })), o;
      }, ts = () => {
        const e = {}, t = {};
        return { register(n, o) {
          const { commands: r, lifecycle: a } = o;
          ((i, d = {}) => {
            const c = (u = Object.keys(e), s = Object.keys(d), u.filter((l) => R(s, l)));
            var u, s;
            if (c.length)
              throw new Error(`[ComponentRegistry] Could not register ${i} because it has existing command(s): ${c.join(",")}`);
            Object.keys(d).forEach((l) => {
              const m = d[l];
              m.commandName = l, m.run = Nr(m.run, `[${i}] An error occurred while executing the ${l} command.`), e[l] = m;
            });
          })(n, r), ((i, d = {}) => {
            Object.keys(d).forEach((c) => {
              t[c] = t[c] || [], t[c].push(Nr(d[c], `[${i}] An error occurred while executing the ${c} lifecycle hook.`));
            });
          })(n, a);
        }, getCommand: (n) => e[n], getCommandNames: () => Object.keys(e), getLifecycleCallbacks: (n) => t[n] || [] };
      }, co = "in", Lr = "pending", Mr = "declinedConsent", wn = "default", uo = "initial", lo = "new", mo = (e) => {
        const t = new Error(e);
        return t.code = Mr, t.message = e, t;
      }, ns = ({ logger: e }) => {
        const t = [], n = () => Promise.resolve(), o = () => Promise.resolve(), r = () => Promise.reject(mo("No consent preferences have been set.")), a = () => Promise.reject(mo("The user declined consent.")), i = (d) => {
          if (d)
            return Promise.reject(new Error("Consent is pending."));
          const c = pe();
          return t.push(c), c.promise;
        };
        return { in(d) {
          d === wn ? this.awaitConsent = n : (d === uo ? e.info("Loaded user consent preferences. The user previously consented.") : d === lo && this.awaitConsent !== o && e.info("User consented."), (() => {
            for (; t.length; )
              t.shift().resolve();
          })(), this.awaitConsent = o);
        }, out(d) {
          d === wn ? (e.warn("User consent preferences not found. Default consent of out will be used."), this.awaitConsent = r) : (d === uo ? e.warn("Loaded user consent preferences. The user previously declined consent.") : d === lo && this.awaitConsent !== a && e.warn("User declined consent."), (() => {
            for (; t.length; )
              t.shift().reject(mo("The user declined consent."));
          })(), this.awaitConsent = a);
        }, pending(d) {
          d === wn && e.info("User consent preferences not found. Default consent of pending will be used. Some commands may be delayed."), this.awaitConsent = i;
        }, awaitConsent: () => Promise.reject(new Error("Consent has not been initialized.")), withConsent() {
          return this.awaitConsent(!0);
        } };
      }, os = () => {
        const e = {};
        let t, n, o = !1, r = !1, a = !0;
        const i = (c) => {
          if (r)
            throw new Error(`${c} cannot be called after event is finalized.`);
        }, d = { setUserXdm(c) {
          i("setUserXdm"), t = c;
        }, setUserData(c) {
          i("setUserData"), n = c;
        }, mergeXdm(c) {
          i("mergeXdm"), c && S(e, { xdm: c });
        }, mergeMeta(c) {
          i("mergeMeta"), c && S(e, { meta: c });
        }, mergeQuery(c) {
          i("mergeQuery"), c && S(e, { query: c });
        }, documentMayUnload() {
          o = !0;
        }, finalize(c) {
          if (!r && (t && d.mergeXdm(t), n && (e.data = n), r = !0, c)) {
            a = !1;
            const u = { xdm: e.xdm || {}, data: e.data || {} };
            a = c(u) !== !1, e.xdm = u.xdm || {}, e.data = u.data || {}, jt(e.xdm) && delete e.xdm, jt(e.data) && delete e.data;
          }
        }, getDocumentMayUnload: () => o, isEmpty: () => jt(e) && (!t || jt(t)) && (!n || jt(n)), shouldSend: () => a, getViewName() {
          if (t && t.web && t.web.webPageDetails)
            return t.web.webPageDetails.viewName;
        }, toJSON() {
          if (!r)
            throw new Error("toJSON called before finalize");
          return e;
        } };
        return d;
      }, po = "configure", fo = "setDebug", rs = "https://adobe.ly/3sHgQHb", is = ({ command: e, options: t }) => {
        const { commandName: n, documentationUri: o = rs, optionsValidator: r } = e;
        let a = t;
        if (r)
          try {
            a = r(t);
          } catch (i) {
            throw new Error(`Invalid ${n} command options:
	 - ${i} For command documentation see: ${o}`);
          }
        return a;
      }, go = ({ eventManager: e }) => ({ commands: { sendEvent: { documentationUri: "https://adobe.ly/3GQ3Q7t", optionsValidator: (t) => (({ options: n }) => He({ type: _e(), xdm: He({ eventType: _e(), identityMap: jr }), data: He({}), renderDecisions: Nt(), decisionScopes: Et(_e()), datasetId: _e() }).required()(n))({ options: t }), run: (t) => {
        const { xdm: n, data: o, documentUnloading: r = !1, type: a, mergeId: i, renderDecisions: d = !1, decisionScopes: c = [], datasetId: u } = t, s = e.createEvent();
        return r && s.documentMayUnload(), s.setUserXdm(n), s.setUserData(o), a && s.mergeXdm({ eventType: a }), i && s.mergeXdm({ eventMergeId: i }), u && s.mergeMeta({ collect: { datasetId: u } }), e.sendEvent(s, { renderDecisions: d, decisionScopes: c });
      } } } });
      go.namespace = "DataCollector", go.configValidators = {};
      const as = go, ss = { clickCollectionEnabled: Nt().default(!0), downloadLinkQualifier: _e().regexp().default("\\.(exe|zip|wav|mp3|mov|mpg|avi|wmv|pdf|doc|docx|xls|xlsx|ppt|pptx)$") }, vo = ({ config: e, eventManager: t, handleError: n }) => {
        const o = /* @__PURE__ */ ((r, a) => (i, d) => {
          const c = ((l) => {
            let m = l;
            for (; m; ) {
              if ((f = m).href && (f.tagName === "A" || f.tagName === "AREA") && (!f.onclick || !f.protocol || f.protocol.toLowerCase().indexOf("javascript") < 0))
                return m;
              m = m.parentNode;
            }
            var f;
            return null;
          })(d);
          if (!c)
            return;
          const u = ((l, m) => {
            const f = l.location;
            let g = m.href ? m.href : "", { protocol: w, host: b } = m;
            if (!((h) => h && /^[a-z0-9]+:\/\//i.test(h))(g)) {
              w || (w = f.protocol ? f.protocol : ""), w = w ? `${w}//` : "", b || (b = f.host ? f.host : "");
              let h = "";
              if (g.substring(0, 1) !== "/") {
                let C = f.pathname.lastIndexOf("/");
                C = C < 0 ? 0 : C, h = f.pathname.substring(0, C);
              }
              g = `${w}${b}${h}/${g}`;
            }
            return g;
          })(r, c);
          if (!u)
            return;
          const s = ((l, m, f, g) => {
            let w = "other";
            return ((b, h, C) => {
              const y = new RegExp(b);
              return !!C.download || y.test(h.toLowerCase());
            })(m.downloadLinkQualifier, f, g) ? w = "download" : ((b, h) => {
              const C = b.location.hostname.toLowerCase();
              return !(h.toLowerCase().indexOf(C) >= 0);
            })(l, f) && (w = "exit"), w;
          })(r, a, u, c);
          i.documentMayUnload(), i.mergeXdm({ eventType: "web.webinteraction.linkClicks", web: { webInteraction: { name: "Link Click", type: s, URL: u, linkClicks: { value: 1 } } } });
        })(window, e);
        return { lifecycle: { onComponentsRegistered(r) {
          const { lifecycle: a } = r;
          (({ config: i, eventManager: d, lifecycle: c, handleError: u }) => {
            if (!i.clickCollectionEnabled)
              return;
            const s = (({ eventManager: l, lifecycle: m, handleError: f }) => (g) => {
              const w = g.target, b = l.createEvent();
              return m.onClick({ event: b, clickedElement: w }).then(() => b.isEmpty() ? Promise.resolve() : l.sendEvent(b)).then(gt).catch((h) => {
                f(h, "click collection");
              });
            })({ eventManager: d, lifecycle: c, handleError: u });
            document.addEventListener("click", s, !0);
          })({ config: e, eventManager: t, lifecycle: a, handleError: n });
        }, onClick({ event: r, clickedElement: a }) {
          o(r, a);
        } } };
      };
      vo.namespace = "ActivityCollector", vo.configValidators = ss;
      const cs = vo, Ur = (e, t) => `ID sync ${t ? "succeeded" : "failed"}: ${e.spec.url}`, us = { thirdPartyCookiesEnabled: Nt().default(!0), idMigrationEnabled: Nt().default(!0) }, ds = (e) => (He({ namespaces: Et(Ar("ECID")).nonEmpty() }).noUnknownFields()(e), { namespaces: ["ECID"] }), ls = He({ url: _e().required().nonEmpty() }).required().noUnknownFields(), ms = ({ logger: e }) => new Promise((t, n) => {
        if (K(window.adobe) && K(window.adobe.optIn)) {
          const o = window.adobe.optIn;
          e.info("Delaying request while waiting for legacy opt-in to let Visitor retrieve ECID from server."), o.fetchPermissions(() => {
            o.isApproved([o.Categories.ECID]) ? (e.info("Received legacy opt-in approval to let Visitor retrieve ECID from server."), t()) : n(new Error("Legacy opt-in was declined."));
          }, !0);
        } else
          t();
      }), ps = ({ logger: e, orgId: t, awaitVisitorOptIn: n }) => {
        const o = ((r) => {
          const a = r.Visitor;
          return dt(a) && dt(a.getInstance) && a;
        })(window);
        return () => o ? n({ logger: e }).then(() => (e.info("Delaying request while using Visitor to retrieve ECID from server."), new Promise((r) => {
          o.getInstance(t, {}).getMarketingCloudVisitorID((a) => {
            e.info("Resuming previously delayed request that was waiting for ECID from Visitor."), r(a);
          }, !0);
        }))).catch((r) => {
          r ? e.info(`${r.message}, retrieving ECID from experience edge`) : e.info("An error occurred while obtaining the ECID from Visitor.");
        }) : Promise.resolve();
      }, Lt = "ECID", fs = (e) => {
        e.mergeQuery({ identity: { fetch: [Lt] } });
      }, gs = /* @__PURE__ */ ((e, t) => {
        const n = /* @__PURE__ */ new Map();
        return (...o) => {
          const r = o[0];
          if (n.has(r))
            return n.get(r);
          const a = ((i) => {
            return (d = { [$]: /Edge\/([0-9\._]+)/, [O]: /Edg\/([0-9\.]+)/, [B]: /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/, Firefox: /Firefox\/([0-9\.]+)(?:\s|$)/, IE: /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/, Safari: /Version\/([0-9\._]+).*Safari/ }, (c) => {
              const u = Object.keys(d);
              for (let s = 0; s < u.length; s += 1) {
                const l = u[s];
                if (d[l].test(c))
                  return l;
              }
              return E;
            })(i.navigator.userAgent);
            var d;
          })(...o);
          return n.set(r, a), a;
        };
      })(), vs = (e, t) => {
        e.addIdentity(Lt, { id: t });
      }, hs = (e) => {
        const t = e.getPayloadsByType("identity:result"), n = Re(t, (o) => o.namespace && o.namespace.code === Lt);
        return n ? n.id : void 0;
      }, _r = (e) => (t, n) => {
        e.xdm = e.xdm || {}, e.xdm.identityMap = e.xdm.identityMap || {}, e.xdm.identityMap[t] = e.xdm.identityMap[t] || [], e.xdm.identityMap[t].push(n);
      }, ho = (e) => {
        const { payload: t, getAction: n, getUseSendBeacon: o } = e, r = Pr();
        let a = !1, i = !1;
        return { getId: () => r, getPayload: () => t, getAction: () => n({ isIdentityEstablished: i }), getUseSendBeacon: () => o({ isIdentityEstablished: i }), getUseIdThirdPartyDomain: () => a, setUseIdThirdPartyDomain() {
          a = !0;
        }, setIsIdentityEstablished() {
          i = !0;
        } };
      }, ys = (e) => {
        const t = ({ isIdentityEstablished: n }) => e.getDocumentMayUnload() && n;
        return ho({ payload: e, getAction: ({ isIdentityEstablished: n }) => t({ isIdentityEstablished: n }) ? "collect" : "interact", getUseSendBeacon: t });
      }, yo = (e) => {
        const { content: t, addIdentity: n, hasIdentity: o } = e;
        return { mergeState: N(t, "meta.state"), mergeQuery: N(t, "query"), addIdentity: n, hasIdentity: o, toJSON: () => t };
      }, $r = (e) => (t) => (e.xdm && e.xdm.identityMap && e.xdm.identityMap[t]) !== void 0, ws = () => {
        const e = {}, t = yo({ content: e, addIdentity: _r(e), hasIdentity: $r(e) });
        return t.addEvent = (n) => {
          e.events = e.events || [], e.events.push(n);
        }, t.getDocumentMayUnload = () => (e.events || []).some((n) => n.getDocumentMayUnload()), t;
      }, bs = (e) => ho({ payload: e, getAction: () => "identity/acquire", getUseSendBeacon: () => !1 }), Cs = (e) => {
        const t = { query: { identity: { fetch: e } } };
        return yo({ content: t, addIdentity: _r(t), hasIdentity: $r(t) });
      }, Is = /^([^?#]*)(\??[^#]*)(#?.*)$/, wo = ({ config: e, logger: t, consent: n, fireReferrerHideableImage: o, sendEdgeNetworkRequest: r, apexDomain: a }) => {
        const { orgId: i, thirdPartyCookiesEnabled: d } = e, c = (({ config: y, getEcidFromVisitor: v, apexDomain: k, isPageSsl: I, cookieJar: x }) => {
          const { idMigrationEnabled: D, orgId: T } = y, q = `AMCV_${T}`, M = () => {
            let H = null;
            const U = x.get("s_ecid") || x.get(q);
            if (U) {
              const te = /(^|\|)MCMID\|(\d+)($|\|)/, Z = U.match(te);
              Z && (H = Z[2]);
            }
            return H;
          };
          return { getEcid() {
            if (D) {
              const H = M();
              return H ? Promise.resolve(H) : v();
            }
            return Promise.resolve();
          }, setEcid(H) {
            if (D && M() !== H) {
              const U = I ? { sameSite: "none", secure: !0 } : {};
              x.set(q, `MCMID|${H}`, { domain: k, expires: 390, ...U });
            }
          } };
        })({ config: e, getEcidFromVisitor: ps({ logger: t, orgId: i, awaitVisitorOptIn: ms }), apexDomain: a, cookieJar: G({ logger: t, cookieJar: V }), isPageSsl: window.location.protocol === "https:" }), u = wr({ orgId: i }), s = (({ sendEdgeNetworkRequest: y, createIdentityRequestPayload: v, createIdentityRequest: k }) => (I) => {
          const x = v(I), D = k(x);
          return y({ request: D });
        })({ sendEdgeNetworkRequest: r, createIdentityRequestPayload: Cs, createIdentityRequest: bs }), l = (({ thirdPartyCookiesEnabled: y, areThirdPartyCookiesSupportedByDefault: v }) => (k) => {
          y && v(gs(window)) && k.setUseIdThirdPartyDomain();
        })({ thirdPartyCookiesEnabled: d, areThirdPartyCookiesSupportedByDefault: j }), m = (({ getLegacyEcid: y, addEcidToPayload: v }) => (k) => k.hasIdentity(Lt) ? Promise.resolve() : y().then((I) => {
          I && v(k, I);
        }))({ getLegacyEcid: c.getEcid, addEcidToPayload: vs }), f = (({ locationSearch: y, dateProvider: v, orgId: k, logger: I }) => (x) => {
          if (x.hasIdentity(Lt))
            return;
          const D = Er.parse(y).adobe_mc;
          if (D === void 0)
            return;
          const T = D.split("|").reduce((U, te) => {
            const [Z, re] = te.split("=");
            return U[Z] = re, U;
          }, {}), q = parseInt(T.TS, 10), M = T.MCMID, H = decodeURIComponent(T.MCORGID);
          v().getTime() / 1e3 <= q + 300 && H === k && M ? (I.info(`Found valid ECID identity ${M} from the adobe_mc query string parameter.`), x.addIdentity(Lt, { id: M })) : I.info("Detected invalid or expired adobe_mc query string parameter.");
        })({ locationSearch: window.document.location.search, dateProvider: () => /* @__PURE__ */ new Date(), orgId: i, logger: t }), g = (({ doesIdentityCookieExist: y, orgId: v }) => ({ onResponse: k, onRequestFailure: I }) => new Promise((x, D) => {
          k(() => {
            if (!y()) {
              const T = new Error(`An identity was not set properly. Please verify that the org ID ${v} configured in Alloy matches the org ID specified in the edge configuration.`);
              throw D(T), T;
            }
            x();
          }), I(() => {
            y() ? x() : D(new Error("No identity was set on response."));
          });
        }))({ doesIdentityCookieExist: u, orgId: i }), w = (({ doesIdentityCookieExist: y, setDomainForInitialIdentityPayload: v, addLegacyEcidToPayload: k, awaitIdentityCookie: I, logger: x }) => {
          let D;
          const T = (q) => (v(q), k(q.getPayload()));
          return ({ request: q, onResponse: M, onRequestFailure: H }) => {
            if (y())
              return q.setIsIdentityEstablished(), Promise.resolve();
            if (D) {
              x.info("Delaying request while retrieving ECID from server.");
              const U = D;
              return D = U.catch(() => I({ onResponse: M, onRequestFailure: H })), U.then(() => {
                x.info("Resuming previously delayed request."), q.setIsIdentityEstablished();
              }).catch(() => T(q));
            }
            return D = I({ onResponse: M, onRequestFailure: H }), T(q);
          };
        })({ doesIdentityCookieExist: u, setDomainForInitialIdentityPayload: l, addLegacyEcidToPayload: m, awaitIdentityCookie: g, logger: t }), b = (({ fireReferrerHideableImage: y, logger: v }) => (k) => {
          const I = k.filter((x) => x.type === "url");
          return I.length ? Promise.all(I.map((x) => y(x.spec).then(() => {
            v.info(Ur(x, !0));
          }).catch(() => {
            v.error(Ur(x, !1));
          }))).then(gt) : Promise.resolve();
        })({ fireReferrerHideableImage: o, logger: t }), h = (({ processIdSyncs: y }) => (v) => y(v.getPayloadsByType("identity:exchange")))({ processIdSyncs: b }), C = (({ dateProvider: y, orgId: v }) => (k, I) => {
          const x = Math.round(y().getTime() / 1e3), D = encodeURIComponent(`TS=${x}|MCMID=${k}|MCORGID=${encodeURIComponent(v)}`), [, T, q, M] = I.match(Is);
          return `${T}${q}${/* @__PURE__ */ ((U) => U === "" ? "?" : U === "?" ? "" : "&")(q)}adobe_mc=${D}${M}`;
        })({ dateProvider: () => /* @__PURE__ */ new Date(), orgId: i });
        return (({ addEcidQueryToPayload: y, addQueryStringIdentityToPayload: v, ensureSingleIdentity: k, setLegacyEcid: I, handleResponseForIdSyncs: x, getEcidFromResponse: D, getIdentity: T, consent: q, appendIdentityToUrl: M, logger: H }) => {
          let U, te = {};
          return { lifecycle: { onBeforeRequest: ({ request: Z, onResponse: re, onRequestFailure: fe }) => (y(Z.getPayload()), v(Z.getPayload()), k({ request: Z, onResponse: re, onRequestFailure: fe })), onResponse: ({ response: Z }) => (U || (U = D(Z), U && I(U)), te = F(te, Z.getEdge()), x(Z)) }, commands: { getIdentity: { optionsValidator: ds, run: (Z) => q.awaitConsent().then(() => U ? void 0 : T(Z.namespaces)).then(() => ({ identity: { ECID: U }, edge: te })) }, appendIdentityToUrl: { optionsValidator: ls, run: (Z) => q.withConsent().then(() => U ? void 0 : T(Z.namespaces)).then(() => ({ url: M(U, Z.url) })).catch((re) => (H.warn(`Unable to append identity to url. ${re.message}`), Z)) } } };
        })({ addEcidQueryToPayload: fs, addQueryStringIdentityToPayload: f, ensureSingleIdentity: w, setLegacyEcid: c.setEcid, handleResponseForIdSyncs: h, getEcidFromResponse: hs, getIdentity: s, consent: n, appendIdentityToUrl: C, logger: t });
      };
      wo.namespace = "Identity", wo.configValidators = us;
      const xs = wo, Br = (e, t) => `URL destination ${t ? "succeeded" : "failed"}: ${e.spec.url}`, Es = ({ processDestinations: e }) => ({ response: t }) => (({ response: n }) => {
        const o = n.getPayloadsByType("activation:push");
        return e(o);
      })({ response: t }).then(() => (({ response: n }) => ({ destinations: n.getPayloadsByType("activation:pull") }))({ response: t })), bo = ({ logger: e, fireReferrerHideableImage: t }) => {
        const n = (({ fireReferrerHideableImage: o, logger: r, cookieJar: a, isPageSsl: i }) => {
          const d = i ? { sameSite: "none", secure: !0 } : {};
          return (c) => (((u) => {
            u.filter((s) => s.type === "cookie").forEach((s) => {
              const { name: l, value: m, domain: f, ttlDays: g } = s.spec;
              a.set(l, m || "", { domain: f || "", expires: g || 10, ...d });
            });
          })(c), ((u) => {
            const s = u.filter((l) => l.type === "url");
            return Promise.all(s.map((l) => o(l.spec).then(() => {
              r.info(Br(l, !0));
            }).catch(() => {
              r.error(Br(l, !1));
            }))).then(gt);
          })(c));
        })({ fireReferrerHideableImage: t, logger: e, cookieJar: G({ logger: e, cookieJar: V }), isPageSsl: window.location.protocol === "https:" });
        return { lifecycle: { onResponse: Es({ processDestinations: n }) }, commands: {} };
      };
      bo.namespace = "Audiences", bo.configValidators = {};
      const Ss = bo, Mt = "__view__", Vr = "https://ns.adobe.com/personalization/default-content-item", Co = "https://ns.adobe.com/personalization/dom-action", Io = "https://ns.adobe.com/personalization/html-content-item", Fr = "https://ns.adobe.com/personalization/redirect-item", ks = ({ renderDecisions: e, decisionScopes: t, event: n, viewCache: o }) => {
        const r = n.getViewName();
        return { isRenderDecisions: () => e, getViewName: () => r, hasScopes: () => t.length > 0, hasViewName: () => xr(r), createQueryDetails() {
          const a = [...t];
          this.isCacheInitialized() || R(a, Mt) || a.push(Mt);
          const i = [Vr, Io, "https://ns.adobe.com/personalization/json-content-item", Fr];
          return R(a, Mt) && i.push(Co), { schemas: i, decisionScopes: a };
        }, isCacheInitialized: () => o.isInitialized(), shouldFetchData() {
          return this.hasScopes() || !this.isCacheInitialized();
        }, shouldUseCachedData() {
          return this.hasViewName() && this.isCacheInitialized();
        } };
      }, Hr = { propositions: [] }, Jt = (e) => be("DIV", {}, { innerHTML: e });
      var Ds = ve(148), Ps = ve.n(Ds);
      const Ts = /:eq\((\d+)\)/g, zr = (e) => e.indexOf(":eq(") === -1, Rs = /(#|\.)(-?\w+)/g, Os = (e, t, n) => `${t}${Ps()(n)}`, xo = (e) => {
        const t = document;
        if (zr(e))
          return ft(e, t);
        const n = ((d) => {
          const c = [], u = ((m) => m.split(Ts).filter(xr))(d.trim().replace(Rs, Os)), { length: s } = u;
          let l = 0;
          for (; l < s; ) {
            const m = u[l], f = u[l + 1];
            f ? c.push({ sel: m, eq: Number(f) }) : c.push({ sel: m }), l += 2;
          }
          return c;
        })(e), { length: o } = n;
        let r = [], a = t, i = 0;
        for (; i < o; ) {
          const { sel: d, eq: c } = n[i], u = ft(d, a), { length: s } = u;
          if (s === 0 || c != null && c > s - 1)
            break;
          i < o - 1 && (c == null ? [a] = u : a = u[c]), i === o - 1 && (r = c == null ? u : [u[c]]), i += 1;
        }
        return r;
      }, Jr = (e, t = document) => t.getElementById(e), Wr = (e, t, n) => {
        e.setAttribute(t, n);
      }, Wt = (e, t) => e.getAttribute(t), Qr = (e) => e.parentNode, Xr = (e, t) => {
        if (!e)
          return;
        const n = Qr(e);
        n && n.insertBefore(t, ((o) => o.nextElementSibling)(e));
      }, Eo = (e, t) => {
        if (!e)
          return;
        const n = Qr(e);
        n && n.insertBefore(t, e);
      }, Qt = (e) => {
        const { childNodes: t } = e;
        return t ? mn(t) : [];
      }, As = (e) => e.firstElementChild;
      let So;
      const bn = (e = document) => {
        if (So === void 0) {
          const t = e.querySelector("[nonce]");
          So = t && (t.nonce || t.getAttribute("nonce"));
        }
        return So;
      }, ko = "alloy-prehiding", Cn = {}, Gr = (e) => {
        const t = Cn[e];
        t && (zt(t), delete Cn[e]);
      }, qs = (e) => {
        if (!e || Jr(ko))
          return;
        const t = bn(), n = { id: ko, ...t && { nonce: t } }, o = be(ut, n, { textContent: e });
        Oe(document.head, o);
      }, In = () => {
        const e = Jr(ko);
        e && zt(e);
      }, js = (e, t) => {
        e.textContent = t;
      }, Ut = "src", Yr = (e) => be(ct, { src: e }), xn = (e) => {
        ft(ct, e).forEach((t) => {
          const n = Wt(t, Ut);
          n && Yr(n);
        });
      }, Ns = (e) => ((t, n) => t.tagName === "STYLE")(e) && !Wt(e, Ut), En = (e) => {
        const t = ft(ut, e), { length: n } = t, o = bn();
        if (o)
          for (let r = 0; r < n; r += 1) {
            const a = t[r];
            Ns(a) && (a.nonce = o);
          }
      };
      var Ls = ve(59), Ms = ve.n(Ls);
      const Do = (e, t) => !!e && e.tagName === t, Us = (e) => Do(e, Ee) && !Wt(e, Ut), _s = (e) => Do(e, Ee) && Wt(e, Ut), Sn = (e) => {
        const t = ft(Ee, e), n = [], { length: o } = t, r = bn(), a = { ...r && { nonce: r } };
        for (let i = 0; i < o; i += 1) {
          const d = t[i];
          if (!Us(d))
            continue;
          const { textContent: c } = d;
          c && n.push(be(Ee, a, { textContent: c }));
        }
        return n;
      }, kn = (e) => {
        const t = ft(Ee, e), n = [], { length: o } = t;
        for (let r = 0; r < o; r += 1) {
          const a = t[r];
          if (!_s(a))
            continue;
          const i = Wt(a, Ut);
          i && n.push(i);
        }
        return n;
      }, Dn = (e, t) => {
        t.forEach((n) => {
          e.appendChild(n), e.removeChild(n);
        });
      }, Pn = (e) => Promise.all(e.map(Ms())), Kr = (e, t) => {
        const n = Jt(t);
        En(n);
        const o = Qt(n), r = Sn(n), a = kn(n);
        return xn(n), o.forEach((i) => {
          Oe(e, i);
        }), Dn(e, r), Pn(a);
      }, $s = (e, t) => {
        ((n) => {
          Qt(n).forEach(zt);
        })(e), Kr(e, t);
      }, Zr = (e, t) => {
        const n = Jt(t);
        En(n);
        const o = Qt(n), r = Sn(n), a = kn(n), { length: i } = o;
        let d = i - 1;
        for (xn(n); d >= 0; ) {
          const c = o[d], u = As(e);
          u ? Eo(u, c) : Oe(e, c), d -= 1;
        }
        return Dn(e, r), Pn(a);
      }, ei = (e, t) => {
        const n = Jt(t);
        En(n);
        const o = Qt(n), r = Sn(n), a = kn(n);
        return xn(n), o.forEach((i) => {
          Eo(e, i);
        }), Dn(e, r), Pn(a);
      }, Bs = (e, t) => {
        ei(e, t), zt(e);
      }, Vs = (e, t) => {
        const n = Jt(t);
        En(n);
        const o = Qt(n), r = Sn(n), a = kn(n);
        return xn(n), o.forEach((i) => {
          Xr(e, i);
        }), Dn(e, r), Pn(a);
      }, Po = (e, t) => {
        const { priority: n, ...o } = t;
        Object.keys(o).forEach((r) => {
          ((a, i, d, c) => {
            let u;
            u = c ? `${i}:${d} !${c};` : `${i}:${d};`, a.style.cssText += `;${u}`;
          })(e, r, o[r], n);
        });
      }, Fs = (e, t) => {
        Object.keys(t).forEach((n) => {
          Wr(e, n, t[n]);
        });
      }, Hs = (e, t) => {
        e.tagName === ct && (Yr(t), e.removeAttribute("src"), Wr(e, Ut, t));
      }, zs = (e, { from: t, to: n }) => {
        const o = ((i) => {
          const { children: d } = i;
          return d ? mn(d) : [];
        })(e), r = o[t], a = o[n];
        r && a && (t < n ? Xr(a, r) : Eo(a, r));
      }, Ve = (e) => (t) => {
        const { selector: n, prehidingSelector: o, content: r, meta: a } = t;
        return ((i) => {
          if (Cn[i])
            return;
          const d = bn(), c = { ...d && { nonce: d } }, u = be(ut, c, { textContent: `${i} { visibility: hidden }` });
          Oe(document.head, u), Cn[i] = u;
        })(o), vr(n, xo).then((i) => ((d, c, u) => {
          const s = d.map((l) => u(l, c));
          return Promise.all(s);
        })(i, r, e)).then(() => (Gr(o), { meta: a }), (i) => (Gr(o), { meta: a, error: i }));
      }, ti = (e, t, n) => {
        if (e.enabled) {
          const o = JSON.stringify(t), { message: r, stack: a } = n, i = `Failed to execute action ${o}. ${r} ${a ? `
 ${a}` : ""}`;
          e.error(i);
        }
      }, Js = (e, t, n) => {
        const o = e.map((r) => {
          const a = ((d) => {
            const c = F({}, d), { content: u, selector: s } = c;
            if (!vn(l = u) || !l.trim())
              return c;
            var l;
            const m = xo(s);
            return Do(m[0], "HEAD") && (c.type = "appendHtml", c.content = ((f) => {
              const g = Jt(f);
              return ft("SCRIPT,LINK,STYLE", g).map((w) => w.outerHTML).join("");
            })(u)), c;
          })(r), { type: i } = a;
          return ((d, c, u, s) => {
            const l = c[u];
            if (!l) {
              const m = new Error(`DOM action "${u}" not found`);
              throw ti(d, s[0], m), m;
            }
            return l(...s);
          })(n, t, i, [a]).then((d) => (((c, u) => {
            if (c.enabled) {
              const s = JSON.stringify(u);
              c.info(`Action ${s} executed.`);
            }
          })(n, a), d)).catch((d) => {
            throw ti(n, a, d), d;
          });
        });
        return Promise.all(o);
      }, Ws = (e) => e, Qs = (e, t) => {
        if (zr(e))
          return ((r, a) => a.matches ? a.matches(r) : a.msMatchesSelector(r))(e, t);
        const n = xo(e);
        let o = !1;
        for (let r = 0; r < n.length; r += 1)
          if (n[r] === t) {
            o = !0;
            break;
          }
        return o;
      }, Xs = (e, t, n) => {
        const { documentElement: o } = document;
        let r = e;
        for (; r && r !== o; ) {
          if (Qs(t, r))
            return n(t);
          r = r.parentNode;
        }
        return null;
      }, Gs = (e, t, n) => {
        const o = [];
        for (let r = 0; r < t.length; r += 1) {
          const a = Xs(e, t[r], n);
          a && o.push(...a);
        }
        return o;
      }, Ys = (e = document) => e.location.href.indexOf("adobe_authoring_enabled") !== -1, To = (e, t) => {
        e.mergeXdm({ _experience: { decisioning: { propositions: t } } });
      }, ni = (e, t) => {
        e.mergeQuery({ personalization: { ...t } });
      }, Tn = ({ decisions: e, renderAttempted: t }) => e.map((n) => F({ renderAttempted: t }, n)), Rn = (e = [], t) => {
        const n = { propositions: Tn({ decisions: e, renderAttempted: t }) };
        return t || (n.decisions = e), n;
      }, oi = (e, t) => ({ id: e.id, scope: e.scope, items: t, scopeDetails: e.scopeDetails }), ri = (e, ...t) => {
        const n = [], o = [];
        return e.forEach((r) => {
          const { items: a = [] } = r, [i, d] = ((c, u) => {
            const s = [], l = [];
            return c.forEach((m) => {
              R(u, m.schema) ? s.push(m) : l.push(m);
            }), [s, l];
          })(a, t);
          Me(i) && n.push(oi(r, i)), Me(d) && o.push(oi(r, d));
        }), { matchedDecisions: n, unmatchedDecisions: o };
      }, Ks = (e) => {
        const t = ri(e, Fr), n = ((d) => {
          const c = d.filter((s) => {
            const { items: l = [] } = s;
            return l.some((m) => m.schema === "https://ns.adobe.com/personalization/measurement");
          }), u = d.filter((s) => !R(c, s));
          return { matchedDecisions: c, unmatchedDecisions: u };
        })(t.unmatchedDecisions), o = ri(n.unmatchedDecisions, Co, Vr), { pageWideScopeDecisions: r, nonPageWideScopeDecisions: a, viewScopeDecisions: i } = ((d) => {
          const c = [], u = [], s = {};
          return Me(d) && d.forEach((l) => {
            var m;
            l.scope === Mt ? c.push(l) : (m = l.scopeDetails).characteristics && m.characteristics.scopeType && m.characteristics.scopeType === "view" ? ((f, g) => {
              f[g.scope] || (f[g.scope] = []), f[g.scope].push(g);
            })(s, l) : u.push(l);
          }), { pageWideScopeDecisions: c, nonPageWideScopeDecisions: u, viewScopeDecisions: s };
        })(o.matchedDecisions);
        return { redirectDecisions: t.matchedDecisions, pageWideScopeDecisions: r, viewDecisions: i, nonAutoRenderableDecisions: [...n.matchedDecisions, ...o.unmatchedDecisions, ...a] };
      }, Zs = ({ viewCache: e }) => ({ viewName: t, redirectDecisions: n, pageWideScopeDecisions: o, nonAutoRenderableDecisions: r }) => {
        const a = [...n, ...o, ...r];
        return Promise.resolve(a).then((i) => (({ viewCache: d, viewName: c, propositions: u }) => c ? d.getView(c).then((s) => [...s, ...u]) : u)({ viewCache: e, viewName: t, propositions: i })).then((i) => (({ propositions: d }) => ({ decisions: d, propositions: Tn({ decisions: d, renderAttempted: !1 }) }))({ propositions: i }));
      }, ec = [Co, Io], tc = ({ executeDecisions: e }) => {
        const t = (r) => ec.indexOf(r.schema) > -1, n = ({ items: r, metadataForScope: a }) => r.filter(t).map((i) => i.schema !== Io ? { ...i } : K(a) ? { ...i, data: { ...i.data, selector: a.selector, type: a.actionType } } : void 0).filter((i) => i), o = (r) => !(r.scope === Mt && r.renderAttempted);
        return ({ propositions: r, metadata: a = {} }) => Me(r) ? (({ propositions: i, metadata: d }) => {
          const c = (({ propositions: u, metadata: s }) => u.filter(o).map((l) => {
            if (Me(l.items)) {
              const { id: m, scope: f, scopeDetails: g } = l;
              return { id: m, scope: f, scopeDetails: g, items: n({ items: l.items, metadataForScope: s[l.scope] }) };
            }
            return l;
          }).filter((l) => Me(l.items)))({ propositions: i, metadata: d });
          return e(c).then(() => Rn(c, !0));
        })({ propositions: r, metadata: a }) : Promise.resolve(Hr);
      }, Ro = ({ config: e, logger: t, eventManager: n }) => {
        const o = (({ eventManager: h, mergeDecisionsMeta: C }) => ({ decisionsMeta: y = [], documentMayUnload: v = !1, viewName: k }) => {
          const I = h.createEvent(), x = { eventType: "decisioning.propositionDisplay" };
          return k && (x.web = { webPageDetails: { viewName: k } }), Me(y) && C(I, y), I.mergeXdm(x), v && I.documentMayUnload(), h.sendEvent(I);
        })({ eventManager: n, mergeDecisionsMeta: To }), { getClickMetasBySelector: r, getClickSelectors: a, storeClickMetrics: i } = /* @__PURE__ */ (() => {
          const h = {};
          return { storeClickMetrics: (C) => {
            h[C.selector] || (h[C.selector] = {}), h[C.selector][C.meta.id] = { scope: C.meta.scope, scopeDetails: C.meta.scopeDetails };
          }, getClickSelectors: () => Object.keys(h), getClickMetasBySelector: (C) => {
            return h[C] ? (y = h[C], Object.keys(y).map((v) => ({ id: v, scope: y[v].scope, scopeDetails: y[v].scopeDetails }))) : {};
            var y;
          } };
        })(), d = (() => {
          let h;
          const C = pe();
          return { storeViews: (y) => {
            y.then((v) => {
              h === void 0 && (h = {}), F(h, v), C.resolve();
            }).catch(() => {
              h === void 0 && (h = {}), C.resolve();
            });
          }, getView: (y) => C.promise.then(() => h[y] || []), isInitialized: () => h !== void 0 };
        })(), c = (({ modules: h, logger: C, executeActions: y }) => (v) => {
          const k = v.map((I) => {
            const x = ((D) => {
              const T = { id: D.id, scope: D.scope, scopeDetails: D.scopeDetails };
              return D.items.map((q) => F({ type: "defaultContent" }, q.data, { meta: T }));
            })(I);
            return y(x, h, C);
          });
          return Promise.all(k).then((I) => ((x, D) => {
            const T = ro(D, Ws), q = [], M = /* @__PURE__ */ new Set();
            return T.forEach((H) => {
              if (!H)
                return;
              if (H.error)
                return void x.warn(H);
              const { meta: U } = H;
              M.has(U.id) || (M.add(U.id), q.push(U));
            }), q;
          })(C, I)).catch((I) => {
            C.error(I);
          });
        })({ modules: (b = i, { setHtml: Ve($s), customCode: Ve(Zr), setText: Ve(js), setAttribute: Ve(Fs), setImageSource: Ve(Hs), setStyle: Ve(Po), move: Ve(Po), resize: Ve(Po), rearrange: Ve(zs), remove: Ve(zt), insertAfter: Ve(Vs), insertBefore: Ve(ei), replaceHtml: Ve(Bs), prependHtml: Ve(Zr), appendHtml: Ve(Kr), click: (h) => ((C, y) => {
          const { selector: v, meta: k } = C;
          return y({ selector: v, meta: k }), Promise.resolve();
        })(h, b), defaultContent: (h) => Promise.resolve({ meta: h.meta }) }), logger: t, executeActions: Js }), u = (({ collect: h, window: C, logger: y, showContainers: v }) => (k) => {
          const { content: I, decisions: x } = ((D) => {
            const T = D[0], { items: q, id: M, scope: H, scopeDetails: U } = T, { content: te } = q[0].data;
            return { content: te, decisions: [{ id: M, scope: H, scopeDetails: U }] };
          })(k);
          return h({ decisionsMeta: x, documentMayUnload: !0 }).then(() => {
            C.location.replace(I);
          }).catch(() => {
            v(), y.warn("An error occurred while executing the redirect offer.");
          });
        })({ collect: o, window, logger: t, showContainers: In }), s = (({ viewCache: h, executeDecisions: C, showContainers: y, collect: v }) => ({ viewName: k, pageWideScopeDecisions: I, nonAutoRenderableDecisions: x }) => Promise.resolve(I).then((D) => (({ viewCache: T, viewName: q, pageWideScopeDecisions: M }) => q ? T.getView(q).then((H) => ({ pageWideScopeDecisions: M, viewPropositions: H })) : { pageWideScopeDecisions: M, viewPropositions: [] })({ viewCache: h, viewName: k, executeDecisions: C, pageWideScopeDecisions: D })).then((D) => (C(D.pageWideScopeDecisions).then((T) => {
          Me(T) && v({ decisionsMeta: T });
        }), k && C(D.viewPropositions).then((T) => {
          v({ decisionsMeta: T, viewName: k });
        }), y(), [...D.pageWideScopeDecisions, ...D.viewPropositions])).then((D) => ({ decisions: [...x], propositions: [...Tn({ decisions: D, renderAttempted: !0 }), ...Tn({ decisions: x, renderAttempted: !1 })] })))({ viewCache: d, executeDecisions: c, showContainers: In, collect: o }), l = tc({ executeDecisions: c }), m = (({ autoRenderingHandler: h, nonRenderingHandler: C, groupDecisions: y, handleRedirectDecisions: v, showContainers: k }) => ({ decisionsDeferred: I, personalizationDetails: x, response: D }) => {
          const T = D.getPayloadsByType("personalization:decisions"), q = x.getViewName();
          if (T.length === 0)
            return k(), I.resolve({}), { decisions: [], propositions: [] };
          const { redirectDecisions: M, pageWideScopeDecisions: H, viewDecisions: U, nonAutoRenderableDecisions: te } = y(T);
          return x.isRenderDecisions() && Me(M) ? (I.resolve({}), v(M)) : (I.resolve(U), x.isRenderDecisions() ? h({ viewName: q, pageWideScopeDecisions: H, nonAutoRenderableDecisions: te }) : C({ viewName: q, redirectDecisions: M, pageWideScopeDecisions: H, nonAutoRenderableDecisions: te }));
        })({ autoRenderingHandler: s, nonRenderingHandler: Zs({ viewCache: d }), groupDecisions: Ks, handleRedirectDecisions: u, showContainers: In }), f = (({ config: h, responseHandler: C, hideContainers: y, mergeQuery: v }) => ({ decisionsDeferred: k, personalizationDetails: I, event: x, onResponse: D }) => {
          const { prehidingStyle: T } = h;
          I.isRenderDecisions() && y(T), v(x, I.createQueryDetails()), D(({ response: q }) => C({ decisionsDeferred: k, personalizationDetails: I, response: q }));
        })({ config: e, responseHandler: m, hideContainers: qs, mergeQuery: ni }), g = (({ mergeDecisionsMeta: h, collectClicks: C, getClickSelectors: y, getClickMetasBySelector: v }) => ({ event: k, clickedElement: I }) => {
          const x = y();
          if (Me(x)) {
            const D = C(I, x, v);
            if (Me(D)) {
              const T = { eventType: "decisioning.propositionInteract" }, q = D[0].scope;
              q !== Mt && (T.web = { webPageDetails: { viewName: q } }), k.mergeXdm(T), h(k, D);
            }
          }
        })({ mergeDecisionsMeta: To, collectClicks: Gs, getClickSelectors: a, getClickMetasBySelector: r }), w = (({ mergeDecisionsMeta: h, collect: C, executeDecisions: y, viewCache: v }) => ({ personalizationDetails: k, event: I, onResponse: x }) => {
          const D = k.getViewName();
          return v.getView(D).then((T) => k.isRenderDecisions() ? y(T).then((q) => {
            if (Me(q))
              return h(I, q), void x(() => Rn(T, !0));
            x(() => (C({ decisionsMeta: [], viewName: D }), Rn(T, !0)));
          }) : (x(() => Rn(T, !1)), {}));
        })({ mergeDecisionsMeta: To, collect: o, executeDecisions: c, viewCache: d });
        var b;
        return (({ logger: h, fetchDataHandler: C, viewChangeHandler: y, onClickHandler: v, isAuthoringModeEnabled: k, mergeQuery: I, viewCache: x, showContainers: D, applyPropositions: T }) => ({ lifecycle: { onBeforeEvent({ event: q, renderDecisions: M, decisionScopes: H = [], onResponse: U = gt, onRequestFailure: te = gt }) {
          if (U(() => ({ propositions: [] })), te(() => D()), k())
            return h.warn("Rendering is disabled for authoring mode."), void I(q, { enabled: !1 });
          const Z = ks({ renderDecisions: M, decisionScopes: H, event: q, viewCache: x });
          if (Z.shouldFetchData()) {
            const re = pe();
            return x.storeViews(re.promise), te(() => re.reject()), void C({ decisionsDeferred: re, personalizationDetails: Z, event: q, onResponse: U });
          }
          return Z.shouldUseCachedData() ? y({ personalizationDetails: Z, event: q, onResponse: U, onRequestFailure: te }) : void 0;
        }, onClick({ event: q, clickedElement: M }) {
          v({ event: q, clickedElement: M });
        } }, commands: { applyPropositions: { optionsValidator: (q) => (({ logger: M, options: H }) => {
          const U = He({ propositions: Et(He(so())).nonEmpty(), metadata: He(so()) }).required();
          try {
            return U(H);
          } catch (te) {
            return M.warn("Invalid options for applyPropositions. No propositions will be applied.", te), Hr;
          }
        })({ logger: h, options: q }), run: T } } }))({ logger: t, fetchDataHandler: f, viewChangeHandler: w, onClickHandler: g, isAuthoringModeEnabled: Ys, mergeQuery: ni, viewCache: d, showContainers: In, applyPropositions: l });
      };
      Ro.namespace = "Personalization", Ro.configValidators = { prehidingStyle: _e().nonEmpty() };
      const nc = Ro, ii = "2.11.0";
      var ai;
      const si = { web: /* @__PURE__ */ ((e) => (t) => {
        const n = { webPageDetails: { URL: e.location.href || e.location }, webReferrer: { URL: e.document.referrer } };
        S(t, { web: n });
      })(window), device: /* @__PURE__ */ ((e) => (t) => {
        const { screen: { width: n, height: o } } = e, r = { screenHeight: o, screenWidth: n }, a = ((i) => {
          const { screen: { orientation: d } } = i;
          if (d == null || d.type == null)
            return null;
          const c = d.type.split("-");
          return c.length === 0 || c[0] !== "portrait" && c[0] !== "landscape" ? null : c[0];
        })(e) || ((i) => i.matchMedia("(orientation: portrait)").matches ? "portrait" : i.matchMedia("(orientation: landscape)").matches ? "landscape" : null)(e);
        a && (r.screenOrientation = a), S(t, { device: r });
      })(window), environment: /* @__PURE__ */ ((e) => (t) => {
        const { document: { documentElement: { clientWidth: n, clientHeight: o } = {} } } = e, r = { type: "browser" };
        gn(n) && n >= 0 && gn(o) && o >= 0 && (r.browserDetails = { viewportWidth: Math.round(n), viewportHeight: Math.round(o) }), S(t, { environment: r });
      })(window), placeContext: (ai = () => /* @__PURE__ */ new Date(), (e) => {
        const t = ai(), n = { localTime: qa(t) }, o = Dr(t.getTimezoneOffset());
        o !== void 0 && (n.localTimezoneOffset = o), S(e, { placeContext: n });
      }) }, oc = [(e) => {
        const t = (/* @__PURE__ */ new Date()).toISOString();
        S(e, { timestamp: t });
      }, (e) => {
        S(e, { implementationDetails: { name: "https://ns.adobe.com/experience/alloy", version: ii, environment: "browser" } });
      }], Oo = ({ config: e, logger: t }) => ((n, o, r, a) => {
        const i = n.context, d = ro(i, (c, u) => r[c] ? [r[c]] : (o.warn(`Invalid context[${u}]: '${c}' is not available.`), [])).concat(a);
        return { namespace: "Context", lifecycle: { onBeforeEvent({ event: c }) {
          const u = {};
          d.forEach((s) => s(u)), c.mergeXdm(u);
        } } };
      })(e, t, si, oc);
      Oo.namespace = "Context", Oo.configValidators = { context: Et(_e()).default(Object.keys(si)) };
      const rc = Oo, Ao = (e) => Array.isArray(e) ? e.map((t) => Ao(t)) : typeof e == "object" && e !== null ? Object.keys(e).sort().reduce((t, n) => (t[n] = Ao(e[n]), t), {}) : e, qo = ({ standard: e, version: t }) => `${e}.${t}`, ic = () => {
        const e = {}, t = yo({ content: e, addIdentity: (n, o) => {
          e.identityMap = e.identityMap || {}, e.identityMap[n] = e.identityMap[n] || [], e.identityMap[n].push(o);
        }, hasIdentity: (n) => (e.identityMap && e.identityMap[n]) !== void 0 });
        return t.setConsent = (n) => {
          e.consent = n;
        }, t;
      }, ac = (e) => ho({ payload: e, getAction: () => "privacy/set-consent", getUseSendBeacon: () => !1 }), sc = (e) => e.split(";").reduce((t, n) => {
        const [o, r] = n.split("=");
        return t[o] = r, t;
      }, {}), cc = He({ consent: Et(so()).required().nonEmpty(), identityMap: jr }).noUnknownFields().required(), ci = ({ config: e, consent: t, sendEdgeNetworkRequest: n, createNamespacedStorage: o }) => {
        const { orgId: r, defaultConsent: a } = e, i = (({ parseConsentCookie: l, orgId: m, cookieJar: f }) => {
          const g = yr(m, "consent");
          return { read() {
            const w = f.get(g);
            return w ? l(w) : {};
          }, clear() {
            f.remove(g);
          } };
        })({ parseConsentCookie: sc, orgId: r, cookieJar: V }), d = (() => {
          let l = 0, m = Promise.resolve();
          return { addTask(f) {
            l += 1;
            const g = () => f().finally(() => {
              l -= 1;
            });
            return m = m.then(g, g), m;
          }, get length() {
            return l;
          } };
        })(), c = (({ createConsentRequestPayload: l, createConsentRequest: m, sendEdgeNetworkRequest: f }) => ({ consentOptions: g, identityMap: w }) => {
          const b = l();
          b.setConsent(g), K(w) && Object.keys(w).forEach((C) => {
            w[C].forEach((y) => {
              b.addIdentity(C, y);
            });
          });
          const h = m(b);
          return f({ request: h }).then(() => {
          });
        })({ createConsentRequestPayload: ic, createConsentRequest: ac, sendEdgeNetworkRequest: n }), u = (({ storage: l }) => ({ clear() {
          l.clear();
        }, lookup(m) {
          const f = {}, g = (w) => {
            const b = qo(w), { standard: h, version: C, ...y } = w;
            var v;
            return f[b] || (f[b] = (v = y, ce(JSON.stringify(Ao(v)))).toString()), f[b];
          };
          return { isNew: () => m.some((w) => {
            const b = qo(w), h = l.getItem(b);
            return h === null || h !== g(w);
          }), save() {
            m.forEach((w) => {
              const b = qo(w);
              l.setItem(b, g(w));
            });
          } };
        } }))({ storage: o(`${io(r)}.consentHashes.`).persistent }), s = wr({ orgId: r });
        return (({ storedConsent: l, taskQueue: m, defaultConsent: f, consent: g, sendSetConsentRequest: w, validateSetConsentOptions: b, consentHashStore: h, doesIdentityCookieExist: C }) => {
          const y = { general: f };
          let v = l.read();
          const k = C(), I = v.general !== void 0;
          k && I || h.clear(), k || (l.clear(), v = {}), g.initializeConsent(y, v);
          const x = () => {
            if (m.length === 0) {
              const D = l.read();
              D.general !== void 0 && g.setConsent(D);
            }
          };
          return { commands: { setConsent: { optionsValidator: b, run: ({ consent: D, identityMap: T }) => {
            g.suspend();
            const q = h.lookup(D);
            return m.addTask(() => q.isNew() ? w({ consentOptions: D, identityMap: T }) : Promise.resolve()).then(() => q.save()).finally(x);
          } } }, lifecycle: { onResponse: x, onRequestFailure: x } };
        })({ storedConsent: i, taskQueue: d, defaultConsent: a, consent: t, sendSetConsentRequest: c, validateSetConsentOptions: cc, consentHashStore: u, doesIdentityCookieExist: s });
      };
      ci.namespace = "Privacy";
      const uc = ci, dc = () => ({ eventMergeId: Pr() }), jo = () => (({ createEventMergeId: e }) => ({ commands: { createEventMergeId: { run: e } } }))({ createEventMergeId: dc });
      jo.namespace = "EventMerge", jo.configValidators = {};
      const lc = jo, ui = ({ config: e, componentRegistry: t }) => {
        const n = t.getCommandNames();
        return n.push(po, fo), { commands: { getLibraryInfo: { run: () => ({ libraryInfo: { version: ii, configs: e, commands: n.sort() } }) } } };
      };
      ui.namespace = "LibraryInfo";
      const mc = ui, pc = ({ response: e }) => ({ inferences: e.getPayloadsByType("rtml:inferences") }), No = () => ({ lifecycle: { onResponse: pc }, commands: {} });
      No.namespace = "MachineLearning", No.configValidators = {};
      const di = [as, cs, xs, Ss, nc, rc, uc, lc, mc, No], fc = (e) => F({}, e), li = ({ errorPrefix: e, logger: t }) => (n, o) => {
        const r = Sr(n);
        if (r.code === Mr)
          return t.warn(`The ${o} could not fully complete. ${r.message}`), {};
        throw kr({ error: r, message: `${e} ${r.message}` }), r;
      }, gc = ({ getDebugEnabled: e, console: t, getMonitors: n, context: o }) => {
        let r = `[${o.instanceName}]`;
        o.componentName && (r += ` [${o.componentName}]`);
        const a = (d, c) => {
          const u = n();
          if (u.length > 0) {
            const s = F({}, o, c);
            u.forEach((l) => {
              l[d] && l[d](s);
            });
          }
        }, i = (d, ...c) => {
          a("onBeforeLog", { level: d, arguments: c }), e() && t[d](r, ...c);
        };
        return { get enabled() {
          return n().length > 0 || e();
        }, logOnInstanceCreated(d) {
          a("onInstanceCreated", d), i("info", "Instance initialized.");
        }, logOnInstanceConfigured(d) {
          a("onInstanceConfigured", d), i("info", "Instance configured. Computed configuration:", d.config);
        }, logOnBeforeCommand(d) {
          a("onBeforeCommand", d), i("info", `Executing ${d.commandName} command. Options:`, d.options);
        }, logOnCommandResolved(d) {
          a("onCommandResolved", d), i("info", `${d.commandName} command resolved. Result:`, d.result);
        }, logOnCommandRejected(d) {
          a("onCommandRejected", d), i("error", `${d.commandName} command was rejected. Error:`, d.error);
        }, logOnBeforeNetworkRequest(d) {
          a("onBeforeNetworkRequest", d), i("info", `Request ${d.requestId}: Sending request.`, d.payload);
        }, logOnNetworkResponse(d) {
          a("onNetworkResponse", d);
          const c = d.parsedBody || d.body ? "response body:" : "no response body.";
          i("info", `Request ${d.requestId}: Received response with status code ${d.statusCode} and ${c}`, d.parsedBody || d.body);
        }, logOnNetworkError(d) {
          a("onNetworkError", d), i("error", `Request ${d.requestId}: Network request failed.`, d.error);
        }, info: i.bind(null, "info"), warn: i.bind(null, "warn"), error: i.bind(null, "error") };
      }, mi = "Event was canceled because the onBeforeEventSend callback returned false.", Lo = "The server responded with a", vc = [429, 503, 502, 504], hc = ({ response: e, retriesAttempted: t }) => t < 3 && R(vc, e.statusCode), yc = ({ response: e, retriesAttempted: t }) => {
        let n = ((o) => {
          const r = o.getHeader("Retry-After");
          let a;
          if (r) {
            const i = parseInt(r, 10);
            a = Ir(i) ? 1e3 * i : Math.max(0, new Date(r).getTime() - (/* @__PURE__ */ new Date()).getTime());
          }
          return a;
        })(e);
        return n === void 0 && (n = ((o) => {
          const r = 1e3 + 1e3 * o, a = 0.3 * r, i = r - a, d = r + a;
          return Math.round(i + Math.random() * (d - i));
        })(t)), n;
      }, wc = Cr(window), { console: Zu, fetch: pi, navigator: Mo, XMLHttpRequest: bc } = window, Cc = { debugEnabled: Nt().default(!1), defaultConsent: qr(co, "out", Lr).default(co), edgeConfigId: _e().unique().required(), edgeDomain: _e().domain().default("edge.adobedc.net"), edgeBasePath: _e().nonEmpty().default("ee"), orgId: _e().unique().required(), onBeforeEventSend: Ka().default(gt) }, fi = ((e, t) => {
        let n = "";
        const o = e.location.hostname.toLowerCase().split(".");
        let r = 1;
        for (; r < o.length && !t.get(fn); )
          r += 1, n = (a = o, i = r, a.slice(-i)).join("."), t.set(fn, fn, { domain: n });
        var a, i;
        return t.remove(fn, { domain: n }), n;
      })(window, V), Uo = dt(pi) ? (({ fetch: e }) => (t, n) => e(t, { method: "POST", cache: "no-cache", credentials: "include", headers: { "Content-Type": "text/plain; charset=UTF-8" }, referrer: "client", body: n }).then((o) => o.text().then((r) => ({ statusCode: o.status, getHeader: (a) => o.headers.get(a), body: r }))))({ fetch: pi }) : (({ XMLHttpRequest: e }) => (t, n) => new Promise((o, r) => {
        const a = new e();
        a.onreadystatechange = () => {
          a.readyState === 4 && (a.status === 0 ? r(new Error("Request aborted.")) : o({ statusCode: a.status, getHeader: (i) => a.getResponseHeader(i), body: a.responseText }));
        }, a.onloadstart = () => {
          a.responseType = "text";
        }, a.open("POST", t, !0), a.setRequestHeader("Content-Type", "text/plain; charset=UTF-8"), a.withCredentials = !0, a.onerror = r, a.onabort = r, a.send(n);
      }))({ XMLHttpRequest: bc }), Ic = (({ appendNode: e = Oe, awaitSelector: t = vr, createNode: n = be, fireImage: o = ln } = {}) => {
        const r = o;
        let a;
        return (i) => {
          const { hideReferrer: d, url: c } = i;
          return d ? (({ src: u }) => t("BODY").then(([s]) => a || (a = n("IFRAME", Ra, Oa), e(s, a))).then((s) => {
            const l = s.contentWindow.document;
            return o({ src: u, currentDocument: l });
          }))({ src: c }) : r({ src: c });
        };
      })(), xc = ({ instanceName: e, logController: { setDebugEnabled: t, logger: n, createComponentLogger: o } }) => {
        const r = ts(), a = ((u) => es.reduce((s, l) => {
          var m;
          return s[l] = (m = /* @__PURE__ */ ((f, g) => (...w) => Promise.all(f.getLifecycleCallbacks(g).map((b) => new Promise((h) => {
            h(b(...w));
          }))))(u, l), (...f) => Promise.resolve().then(() => m(...f))), s;
        }, {}))(r), i = G({ logger: n, cookieJar: V }), d = li({ errorPrefix: `[${e}]`, logger: n });
        return (({ logger: u, configureCommand: s, setDebugCommand: l, handleError: m, validateCommandOptions: f }) => {
          let g;
          return (w, b = {}) => new Promise((h) => {
            const C = ((y, v) => {
              let k;
              if (y === po) {
                if (g)
                  throw new Error("The library has already been configured and may only be configured once.");
                k = () => (g = s(v), g.then(() => {
                }));
              } else {
                if (!g)
                  throw new Error("The library must be configured first. Please do so by executing the configure command.");
                k = y === fo ? () => l(v) : () => g.then((I) => {
                  const x = I.getCommand(y);
                  if (!x || !dt(x.run)) {
                    const T = [po, fo].concat(I.getCommandNames()).join(", ");
                    throw new Error(`The ${y} command does not exist. List of available commands: ${T}.`);
                  }
                  const D = f({ command: x, options: v });
                  return x.run(D);
                }, () => (u.warn(`An error during configuration is preventing the ${y} command from executing.`), new Promise(() => {
                })));
              }
              return k;
            })(w, b);
            u.logOnBeforeCommand({ commandName: w, options: b }), h(C());
          }).catch((h) => m(h, `${w} command`)).catch((h) => {
            throw u.logOnCommandRejected({ commandName: w, options: b, error: h }), h;
          }).then((h) => {
            const C = K(h) ? h : {};
            return u.logOnCommandResolved({ commandName: w, options: b, result: C }), C;
          });
        })({ logger: n, configureCommand: (u) => {
          const s = (({ options: v, componentCreators: k, coreConfigValidators: I, createConfig: x, logger: D, setDebugEnabled: T }) => {
            const q = ((H, U) => {
              const te = {};
              return F(te, H), U.forEach((Z) => {
                const { configValidators: re } = Z;
                F(te, re);
              }), te;
            })(I, k), M = x(((H, U) => {
              try {
                return He(H).noUnknownFields().required()(U);
              } catch (te) {
                throw new Error(`Resolve these configuration problems:
	 - ${te.message.split(`
`).join(`
	 - `)}
For configuration documentation see: https://adobe.ly/3sHh553`);
              }
            })(q, v));
            return T(M.debugEnabled, { fromConfig: !0 }), D.logOnInstanceConfigured({ config: M }), M;
          })({ options: u, componentCreators: di, coreConfigValidators: Cc, createConfig: fc, logger: n, setDebugEnabled: t }), l = (({ cookieJar: v, orgId: k, apexDomain: I, dateProvider: x }) => ({ cookiesToPayload(D, T) {
            const q = (M = I, T.substr(-M.length) === M);
            var M;
            const H = { domain: I, cookiesEnabled: !0 };
            if (!q) {
              const U = v.get(), te = Object.keys(U).filter((Z) => ((re, fe) => fe.indexOf(`kndctr_${io(re)}_`) === 0)(k, Z)).map((Z) => ({ key: Z, value: U[Z] }));
              te.length && (H.entries = te);
            }
            D.mergeState(H);
          }, responseToCookies(D) {
            D.getPayloadsByType("state:store").forEach((T) => {
              const q = { domain: I }, M = T.attrs && T.attrs.SameSite && T.attrs.SameSite.toLowerCase();
              T.maxAge !== void 0 && (q.expires = new Date(x().getTime() + 1e3 * T.maxAge)), M !== void 0 && (q.sameSite = M), M === "none" && (q.secure = !0), v.set(T.key, T.value, q);
            });
          } }))({ cookieJar: i, orgId: s.orgId, apexDomain: fi, dateProvider: () => /* @__PURE__ */ new Date() }), m = dt(Mo.sendBeacon) ? (({ sendBeacon: v, sendFetchRequest: k, logger: I }) => (x, D) => {
            const T = new Blob([D], { type: "text/plain; charset=UTF-8" });
            return v(x, T) ? Promise.resolve({ statusCode: 204, getHeader: () => null, body: "" }) : (I.info("Unable to use `sendBeacon`; falling back to `fetch`."), k(x, D));
          })({ sendBeacon: Mo.sendBeacon.bind(Mo), sendFetchRequest: Uo, logger: n }) : Uo, f = (({ logger: v, sendFetchRequest: k, sendBeaconRequest: I, isRequestRetryable: x, getRequestRetryDelay: D }) => ({ requestId: T, url: q, payload: M, useSendBeacon: H }) => {
            const U = JSON.stringify(M), te = JSON.parse(U);
            v.logOnBeforeNetworkRequest({ url: q, requestId: T, payload: te });
            const Z = (re = 0) => (H ? I : k)(q, U).then((fe) => {
              if (x({ response: fe, retriesAttempted: re })) {
                const Ce = D({ response: fe, retriesAttempted: re });
                return new Promise((Pe) => {
                  setTimeout(() => {
                    Pe(Z(re + 1));
                  }, Ce);
                });
              }
              let me;
              try {
                me = JSON.parse(fe.body);
              } catch {
              }
              return v.logOnNetworkResponse({ requestId: T, url: q, payload: te, ...fe, parsedBody: me, retriesAttempted: re }), { statusCode: fe.statusCode, body: fe.body, parsedBody: me, getHeader: fe.getHeader };
            });
            return Z().catch((re) => {
              throw v.logOnNetworkError({ requestId: T, url: q, payload: te, error: re }), hn({ error: re, message: "Network request failed." });
            });
          })({ logger: n, sendFetchRequest: Uo, sendBeaconRequest: m, isRequestRetryable: hc, getRequestRetryDelay: yc }), g = (({ logger: v }) => (k) => {
            const { statusCode: I, body: x, parsedBody: D } = k;
            if (I < 200 || I >= 300 || !D && I !== 204 || D && !Array.isArray(D.handle)) {
              const T = D ? JSON.stringify(D, null, 2) : x;
              throw new Error(`${Lo} status code ${I} and ${T ? `response body:
${T}` : "no response body."}`);
            }
            if (D) {
              const { warnings: T = [], errors: q = [] } = D;
              T.forEach((M) => {
                v.warn(`${Lo} warning:`, M);
              }), q.forEach((M) => {
                v.error(`${Lo} non-fatal error:`, M);
              });
            }
          })({ logger: n }), w = (({ logger: v }) => (k) => {
            if (k) {
              const I = k.split(";");
              if (I.length >= 2 && I[1].length > 0)
                try {
                  const x = parseInt(I[1], 10);
                  if (!isNaN(x))
                    return { regionId: x };
                } catch {
                }
              v.warn(`Invalid adobe edge: "${k}"`);
            }
            return {};
          })({ logger: n }), b = (({ extractEdgeInfo: v }) => ({ content: k = {}, getHeader: I }) => {
            const { handle: x = [], errors: D = [], warnings: T = [] } = k;
            return { getPayloadsByType: (q) => ro(x.filter((M) => M.type === q), (M) => M.payload), getErrors: () => D, getWarnings: () => T, getEdge: () => v(I("x-adobe-edge")), toJSON: () => k };
          })({ extractEdgeInfo: w }), h = (({ config: v, lifecycle: k, cookieTransfer: I, sendNetworkRequest: x, createResponse: D, processWarningsAndErrors: T }) => {
            const { edgeDomain: q, edgeBasePath: M, edgeConfigId: H } = v;
            return ({ request: U, runOnResponseCallbacks: te = gt, runOnRequestFailureCallbacks: Z = gt }) => {
              const re = _();
              re.add(k.onResponse), re.add(te);
              const fe = _();
              return fe.add(k.onRequestFailure), fe.add(Z), k.onBeforeRequest({ request: U, onResponse: re.add, onRequestFailure: fe.add }).then(() => {
                const me = U.getUseIdThirdPartyDomain() ? "adobedc.demdex.net" : q, Ce = `https://${me}/${M}/v1/${U.getAction()}?configId=${H}&requestId=${U.getId()}`;
                return I.cookiesToPayload(U.getPayload(), me), x({ requestId: U.getId(), url: Ce, payload: U.getPayload(), useSendBeacon: U.getUseSendBeacon() });
              }).then((me) => (T(me), me)).catch((me) => {
                const Ce = () => {
                  throw me;
                };
                return fe.call({ error: me }).then(Ce, Ce);
              }).then(({ parsedBody: me, getHeader: Ce }) => {
                const Pe = D({ content: me, getHeader: Ce });
                return I.responseToCookies(Pe), re.call({ response: Pe }).then(($e) => {
                  const Ge = $e.shift() || [], W = $e.shift() || [];
                  return F({}, ...Ge, ...W, ...$e);
                });
              });
            };
          })({ config: s, lifecycle: a, cookieTransfer: l, sendNetworkRequest: f, createResponse: b, processWarningsAndErrors: g }), C = (({ generalConsentState: v, logger: k }) => {
            const I = (x, D) => {
              switch (x.general) {
                case co:
                  v.in(D);
                  break;
                case "out":
                  v.out(D);
                  break;
                case Lr:
                  v.pending(D);
                  break;
                default:
                  k.warn(`Unknown consent value: ${x.general}`);
              }
            };
            return { initializeConsent(x, D) {
              D.general ? I(D, uo) : I(x, wn);
            }, setConsent(x) {
              I(x, lo);
            }, suspend() {
              v.pending();
            }, awaitConsent: () => v.awaitConsent(), withConsent: () => v.withConsent() };
          })({ generalConsentState: ns({ logger: n }), logger: n }), y = (({ config: v, logger: k, lifecycle: I, consent: x, createEvent: D, createDataCollectionRequestPayload: T, createDataCollectionRequest: q, sendEdgeNetworkRequest: M }) => {
            const { onBeforeEventSend: H } = v;
            return { createEvent: D, sendEvent(U, te = {}) {
              const { renderDecisions: Z = !1, decisionScopes: re } = te, fe = T(), me = q(fe), Ce = _(), Pe = _();
              return I.onBeforeEvent({ event: U, renderDecisions: Z, decisionScopes: re, onResponse: Ce.add, onRequestFailure: Pe.add }).then(() => (fe.addEvent(U), x.awaitConsent())).then(() => {
                try {
                  U.finalize(H);
                } catch ($e) {
                  const Ge = () => {
                    throw $e;
                  };
                  return Pe.add(I.onRequestFailure), Pe.call({ error: $e }).then(Ge, Ge);
                }
                if (!U.shouldSend()) {
                  Pe.add(I.onRequestFailure), k.info(mi);
                  const $e = new Error(mi);
                  return Pe.call({ error: $e }).then(() => {
                  });
                }
                return M({ request: me, runOnResponseCallbacks: Ce.call, runOnRequestFailureCallbacks: Pe.call });
              });
            } };
          })({ config: s, logger: n, lifecycle: a, consent: C, createEvent: os, createDataCollectionRequestPayload: ws, createDataCollectionRequest: ys, sendEdgeNetworkRequest: h });
          return (({ componentCreators: v, lifecycle: k, componentRegistry: I, getImmediatelyAvailableTools: x }) => (v.forEach((D) => {
            const { namespace: T } = D, q = x(T);
            let M;
            try {
              M = D(q);
            } catch (H) {
              throw hn({ error: H, message: `[${T}] An error occurred during component creation.` });
            }
            I.register(T, M);
          }), k.onComponentsRegistered({ lifecycle: k }).then(() => I)))({ componentCreators: di, lifecycle: a, componentRegistry: r, getImmediatelyAvailableTools(v) {
            const k = o(v);
            return { config: s, componentRegistry: r, consent: C, eventManager: y, fireReferrerHideableImage: Ic, logger: k, lifecycle: a, sendEdgeNetworkRequest: h, handleError: li({ errorPrefix: `[${e}] [${v}]`, logger: k }), createNamespacedStorage: wc, apexDomain: fi };
          } });
        }, setDebugCommand: (u) => {
          t(u.enabled, { fromConfig: !1 });
        }, handleError: d, validateCommandOptions: is });
      }, { console: Ec } = window, Sc = Cr(window);
      var On = function(e, t, n, o) {
        return new (n || (n = Promise))(function(r, a) {
          function i(u) {
            try {
              c(o.next(u));
            } catch (s) {
              a(s);
            }
          }
          function d(u) {
            try {
              c(o.throw(u));
            } catch (s) {
              a(s);
            }
          }
          function c(u) {
            var s;
            u.done ? r(u.value) : (s = u.value, s instanceof n ? s : new n(function(l) {
              l(s);
            })).then(i, d);
          }
          c((o = o.apply(e, [])).next());
        });
      };
      let _t;
      const De = (e, t) => On(void 0, void 0, void 0, function* () {
        var n, o;
        try {
          const { channelContext: r } = t.eventInfo, a = (yield _t("getIdentity")).identity.ECID || "000000000000000000000000000000000000", i = { ECID: [{ id: a, primary: !0 }] };
          e.channel = e.channel || r, !((n = e.personalEmail) === null || n === void 0) && n.address && (i.email = [{ id: (o = e.personalEmail) === null || o === void 0 ? void 0 : o.address, primary: !1 }]), e.personID = a, e.identityMap = i;
          const d = { xdm: Object.assign({}, e) };
          return yield _t("sendEvent", d);
        } catch (r) {
          console.error("sendEvent error:", r);
        }
      }), gi = () => {
        const { context: e } = window.magentoStorefrontEvents, t = e.getEventForwarding(), n = e.getAEP();
        return !!(t != null && t.aep) && !!n.datastreamId && !!n.imsOrgId;
      }, _o = (e, t) => {
        let n = {};
        return e && Object.keys(e).length !== 0 && (n = e), n.person = n.person || {}, n.person.accountID = n.person.accountID || (t == null ? void 0 : t.accountId), n.personalEmail = n.personalEmail || {}, n.personalEmail.address = n.personalEmail.address || (t == null ? void 0 : t.emailAddress), n;
      }, Ne = (e) => ({ environmentID: e.environmentId, storeCode: e.storeCode, storeViewCode: e.storeViewCode, websiteCode: e.websiteCode }), kc = (e) => {
        return t = void 0, n = void 0, r = function* () {
          const { debugContext: a, accountContext: i, storefrontInstanceContext: d, customContext: c } = e.eventInfo, u = _o(c, i);
          u.userAccount = { createProfile: 1 }, u.commerce = u.commerce || {}, u.commerce.commerceScope = Ne(d), u._id = a == null ? void 0 : a.eventId, u.eventType = "userAccount.createProfile", De(u, e);
        }, new ((o = void 0) || (o = Promise))(function(a, i) {
          function d(s) {
            try {
              u(r.next(s));
            } catch (l) {
              i(l);
            }
          }
          function c(s) {
            try {
              u(r.throw(s));
            } catch (l) {
              i(l);
            }
          }
          function u(s) {
            var l;
            s.done ? a(s.value) : (l = s.value, l instanceof o ? l : new o(function(m) {
              m(l);
            })).then(d, c);
          }
          u((r = r.apply(t, n || [])).next());
        });
        var t, n, o, r;
      }, Dc = (e) => {
        return t = void 0, n = void 0, r = function* () {
          const { debugContext: a, accountContext: i, storefrontInstanceContext: d, customContext: c } = e.eventInfo, u = _o(c, i);
          u.userAccount = { updateProfile: 1 }, u.commerce = u.commerce || {}, u.commerce.commerceScope = Ne(d), u._id = a == null ? void 0 : a.eventId, u.eventType = "userAccount.updateProfile", De(u, e);
        }, new ((o = void 0) || (o = Promise))(function(a, i) {
          function d(s) {
            try {
              u(r.next(s));
            } catch (l) {
              i(l);
            }
          }
          function c(s) {
            try {
              u(r.throw(s));
            } catch (l) {
              i(l);
            }
          }
          function u(s) {
            var l;
            s.done ? a(s.value) : (l = s.value, l instanceof o ? l : new o(function(m) {
              m(l);
            })).then(d, c);
          }
          u((r = r.apply(t, n || [])).next());
        });
        var t, n, o, r;
      }, Pc = (e) => {
        return t = void 0, n = void 0, r = function* () {
          const { debugContext: a, accountContext: i, storefrontInstanceContext: d, customContext: c } = e.eventInfo, u = _o(c, i);
          u.userAccount = { login: 1 }, u.commerce = u.commerce || {}, u.commerce.commerceScope = Ne(d), u._id = a == null ? void 0 : a.eventId, u.eventType = "userAccount.login", De(u, e);
        }, new ((o = void 0) || (o = Promise))(function(a, i) {
          function d(s) {
            try {
              u(r.next(s));
            } catch (l) {
              i(l);
            }
          }
          function c(s) {
            try {
              u(r.throw(s));
            } catch (l) {
              i(l);
            }
          }
          function u(s) {
            var l;
            s.done ? a(s.value) : (l = s.value, l instanceof o ? l : new o(function(m) {
              m(l);
            })).then(d, c);
          }
          u((r = r.apply(t, n || [])).next());
        });
        var t, n, o, r;
      }, Tc = (e) => {
        return t = void 0, n = void 0, r = function* () {
          const { debugContext: a, storefrontInstanceContext: i, customContext: d } = e.eventInfo;
          let c = {};
          d && Object.keys(d).length !== 0 && (c = d), c.userAccount = { logout: 1 }, c.commerce = c.commerce || {}, c.commerce.commerceScope = Ne(i), c._id = a == null ? void 0 : a.eventId, c.eventType = "userAccount.logout", De(c, e);
        }, new ((o = void 0) || (o = Promise))(function(a, i) {
          function d(s) {
            try {
              u(r.next(s));
            } catch (l) {
              i(l);
            }
          }
          function c(s) {
            try {
              u(r.throw(s));
            } catch (l) {
              i(l);
            }
          }
          function u(s) {
            var l;
            s.done ? a(s.value) : (l = s.value, l instanceof o ? l : new o(function(m) {
              m(l);
            })).then(d, c);
          }
          u((r = r.apply(t, n || [])).next());
        });
        var t, n, o, r;
      };
      var Xe = function() {
        return Xe = Object.assign || function(e) {
          for (var t, n = 1, o = arguments.length; n < o; n++)
            for (var r in t = arguments[n])
              Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
          return e;
        }, Xe.apply(this, arguments);
      };
      function ht(e, t, n) {
        if (n || arguments.length === 2)
          for (var o, r = 0, a = t.length; r < a; r++)
            !o && r in t || (o || (o = Array.prototype.slice.call(t, 0, r)), o[r] = t[r]);
        return e.concat(o || Array.prototype.slice.call(t));
      }
      var lt = ve(22), yt = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      function An() {
        var e, t = {}, n = [], o = [], r = [], a = function(i, d) {
          d != null && d !== "" && (t[i] = d);
        };
        return { add: a, addDict: function(i) {
          for (var d in i)
            Object.prototype.hasOwnProperty.call(i, d) && a(d, i[d]);
        }, addJson: function(i, d, c) {
          if (c && vi(c)) {
            var u = { keyIfEncoded: i, keyIfNotEncoded: d, json: c };
            o.push(u), n.push(u);
          }
        }, addContextEntity: function(i) {
          r.push(i);
        }, getPayload: function() {
          return t;
        }, getJson: function() {
          return n;
        }, withJsonProcessor: function(i) {
          e = i;
        }, build: function() {
          return e == null || e(this, o, r), t;
        } };
      }
      function Rc(e) {
        return function(t, n, o) {
          for (var r = function(s, l, m) {
            var f = JSON.stringify(s);
            e ? t.add(l, function(g) {
              if (!g)
                return g;
              var w = function(b) {
                var h, C, y, v, k, I = 0, x = 0, D = [];
                if (!b)
                  return b;
                b = unescape(encodeURIComponent(b));
                do
                  h = (k = b.charCodeAt(I++) << 16 | b.charCodeAt(I++) << 8 | b.charCodeAt(I++)) >> 18 & 63, C = k >> 12 & 63, y = k >> 6 & 63, v = 63 & k, D[x++] = yt.charAt(h) + yt.charAt(C) + yt.charAt(y) + yt.charAt(v);
                while (I < b.length);
                var T = D.join(""), q = b.length % 3;
                return (q ? T.slice(0, q - 3) : T) + "===".slice(q || 3);
              }(g);
              return w.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
            }(f)) : t.add(m, f);
          }, a = function(s, l) {
            var m = s || function() {
              var f = t.getPayload();
              if (e ? f.cx : f.co)
                return JSON.parse(e ? function(g) {
                  if (!g)
                    return g;
                  switch (4 - g.length % 4) {
                    case 2:
                      g += "==";
                      break;
                    case 3:
                      g += "=";
                  }
                  return function(w) {
                    var b, h, C, y, v, k, I, x = 0, D = 0, T = [];
                    if (!w)
                      return w;
                    w += "";
                    do
                      b = (k = yt.indexOf(w.charAt(x++)) << 18 | yt.indexOf(w.charAt(x++)) << 12 | (y = yt.indexOf(w.charAt(x++))) << 6 | (v = yt.indexOf(w.charAt(x++)))) >> 16 & 255, h = k >> 8 & 255, C = 255 & k, T[D++] = y === 64 ? String.fromCharCode(b) : v === 64 ? String.fromCharCode(b, h) : String.fromCharCode(b, h, C);
                    while (x < w.length);
                    return I = T.join("").replace(/\0+$/, ""), decodeURIComponent(I.split("").map(function(q) {
                      return "%" + ("00" + q.charCodeAt(0).toString(16)).slice(-2);
                    }).join(""));
                  }(g.replace(/-/g, "+").replace(/_/g, "/"));
                }(f.cx) : f.co);
            }();
            return m ? m.data = m.data.concat(l.data) : m = l, m;
          }, i = void 0, d = 0, c = n; d < c.length; d++) {
            var u = c[d];
            u.keyIfEncoded === "cx" ? i = a(i, u.json) : r(u.json, u.keyIfEncoded, u.keyIfNotEncoded);
          }
          n.length = 0, o.length && (i = a(i, { schema: "iglu:com.snowplowanalytics.snowplow/contexts/jsonschema/1-0-0", data: ht([], o, !0) }), o.length = 0), i && r(i, "cx", "co");
        };
      }
      function vi(e) {
        if (!hi(e))
          return !1;
        for (var t in e)
          if (Object.prototype.hasOwnProperty.call(e, t))
            return !0;
        return !1;
      }
      function hi(e) {
        return e != null && (e.constructor === {}.constructor || e.constructor === [].constructor);
      }
      var mt, qn = "Snowplow: ";
      (function(e) {
        e[e.none = 0] = "none", e[e.error = 1] = "error", e[e.warn = 2] = "warn", e[e.debug = 3] = "debug", e[e.info = 4] = "info";
      })(mt || (mt = {}));
      var St, ot = (St === void 0 && (St = mt.warn), { setLogLevel: function(e) {
        St = mt[e] ? e : mt.warn;
      }, warn: function(e, t) {
        for (var n = [], o = 2; o < arguments.length; o++)
          n[o - 2] = arguments[o];
        if (St >= mt.warn && typeof console < "u") {
          var r = qn + e;
          t ? console.warn.apply(console, ht([r + `
`, t], n, !1)) : console.warn.apply(console, ht([r], n, !1));
        }
      }, error: function(e, t) {
        for (var n = [], o = 2; o < arguments.length; o++)
          n[o - 2] = arguments[o];
        if (St >= mt.error && typeof console < "u") {
          var r = qn + e + `
`;
          t ? console.error.apply(console, ht([r + `
`, t], n, !1)) : console.error.apply(console, ht([r], n, !1));
        }
      }, debug: function(e) {
        for (var t = [], n = 1; n < arguments.length; n++)
          t[n - 1] = arguments[n];
        St >= mt.debug && typeof console < "u" && console.debug.apply(console, ht([qn + e], t, !1));
      }, info: function(e) {
        for (var t = [], n = 1; n < arguments.length; n++)
          t[n - 1] = arguments[n];
        St >= mt.info && typeof console < "u" && console.info.apply(console, ht([qn + e], t, !1));
      } });
      function Oc() {
        var e = [], t = [];
        return { getGlobalPrimitives: function() {
          return e;
        }, getConditionalProviders: function() {
          return t;
        }, addGlobalContexts: function(n) {
          for (var o = [], r = [], a = 0, i = n; a < i.length; a++) {
            var d = i[a];
            xi(d) ? o.push(d) : $t(d) && r.push(d);
          }
          e = e.concat(r), t = t.concat(o);
        }, clearGlobalContexts: function() {
          t = [], e = [];
        }, removeGlobalContexts: function(n) {
          for (var o = function(i) {
            xi(i) ? t = t.filter(function(d) {
              return JSON.stringify(d) !== JSON.stringify(i);
            }) : $t(i) && (e = e.filter(function(d) {
              return JSON.stringify(d) !== JSON.stringify(i);
            }));
          }, r = 0, a = n; r < a.length; r++)
            o(a[r]);
        }, getApplicableContexts: function(n) {
          return function(o) {
            var r = function(u) {
              for (var s = 0, l = u.getJson(); s < l.length; s++) {
                var m = l[s];
                if (m.keyIfEncoded === "ue_px" && typeof m.json.data == "object") {
                  var f = m.json.data.schema;
                  if (typeof f == "string")
                    return f;
                }
              }
              return "";
            }(o), a = function(u) {
              var s = u.getPayload().e;
              return typeof s == "string" ? s : "";
            }(o), i = [], d = Bo(e, o, a, r);
            i.push.apply(i, d);
            var c = function(u, s, l, m) {
              var f, g = Si(u).map(function(w) {
                var b = function(h, C, y, v) {
                  if (Ci(h)) {
                    var k = h[0], I = !1;
                    try {
                      I = k({ event: C.getPayload(), eventType: y, eventSchema: v });
                    } catch {
                      I = !1;
                    }
                    if (I === !0)
                      return Bo(h[1], C, y, v);
                  } else if (Ii(h) && function(x, D) {
                    var T = 0, q = 0, M = x.accept;
                    Array.isArray(M) ? x.accept.some(function(U) {
                      return Nn(U, D);
                    }) && q++ : typeof M == "string" && Nn(M, D) && q++;
                    var H = x.reject;
                    return Array.isArray(H) ? x.reject.some(function(U) {
                      return Nn(U, D);
                    }) && T++ : typeof H == "string" && Nn(H, D) && T++, q > 0 && T === 0;
                  }(h[0], v))
                    return Bo(h[1], C, y, v);
                  return [];
                }(w, s, l, m);
                if (b && b.length !== 0)
                  return b;
              });
              return (f = []).concat.apply(f, g.filter(function(w) {
                return w != null && w.filter(Boolean);
              }));
            }(t, o, a, r);
            return i.push.apply(i, c), i;
          }(n);
        } };
      }
      function yi(e) {
        var t = e.split(".");
        return !!(t && t.length > 1) && function(n) {
          if (n[0] === "*" || n[1] === "*")
            return !1;
          if (n.slice(2).length > 0) {
            for (var o = !1, r = 0, a = n.slice(2); r < a.length; r++)
              if (a[r] === "*")
                o = !0;
              else if (o)
                return !1;
            return !0;
          }
          return n.length == 2;
        }(t);
      }
      function wi(e) {
        var t = new RegExp("^iglu:((?:(?:[a-zA-Z0-9-_]+|\\*).)+(?:[a-zA-Z0-9-_]+|\\*))/([a-zA-Z0-9-_.]+|\\*)/jsonschema/([1-9][0-9]*|\\*)-(0|[1-9][0-9]*|\\*)-(0|[1-9][0-9]*|\\*)$").exec(e);
        if (t !== null && yi(t[1]))
          return t.slice(1, 6);
      }
      function $o(e) {
        var t = wi(e);
        if (t) {
          var n = t[0];
          return t.length === 5 && yi(n);
        }
        return !1;
      }
      function bi(e) {
        return function(t) {
          return Array.isArray(t) && t.every(function(n) {
            return typeof n == "string";
          });
        }(e) ? e.every(function(t) {
          return $o(t);
        }) : typeof e == "string" && $o(e);
      }
      function Xt(e) {
        var t = e;
        return !!(vi(t) && "schema" in t && "data" in t) && typeof t.schema == "string" && typeof t.data == "object";
      }
      function jn(e) {
        return typeof e == "function" && e.length <= 1;
      }
      function $t(e) {
        return jn(e) || Xt(e);
      }
      function Ci(e) {
        return !(!Array.isArray(e) || e.length !== 2) && (Array.isArray(e[1]) ? jn(e[0]) && e[1].every($t) : jn(e[0]) && $t(e[1]));
      }
      function Ii(e) {
        return !(!Array.isArray(e) || e.length !== 2) && !!function(t) {
          var n = t, o = 0;
          if (t != null && typeof t == "object" && !Array.isArray(t)) {
            if (Object.prototype.hasOwnProperty.call(n, "accept")) {
              if (!bi(n.accept))
                return !1;
              o += 1;
            }
            if (Object.prototype.hasOwnProperty.call(n, "reject")) {
              if (!bi(n.reject))
                return !1;
              o += 1;
            }
            return o > 0 && o <= 2;
          }
          return !1;
        }(e[0]) && (Array.isArray(e[1]) ? e[1].every($t) : $t(e[1]));
      }
      function xi(e) {
        return Ci(e) || Ii(e);
      }
      function Nn(e, t) {
        if (!$o(e))
          return !1;
        var n = wi(e), o = function(a) {
          var i = new RegExp("^iglu:([a-zA-Z0-9-_.]+)/([a-zA-Z0-9-_]+)/jsonschema/([1-9][0-9]*)-(0|[1-9][0-9]*)-(0|[1-9][0-9]*)$").exec(a);
          if (i !== null)
            return i.slice(1, 6);
        }(t);
        if (n && o) {
          if (!function(a, i) {
            var d = i.split("."), c = a.split(".");
            if (d && c) {
              if (d.length !== c.length)
                return !1;
              for (var u = 0; u < c.length; u++)
                if (!Ei(d[u], c[u]))
                  return !1;
              return !0;
            }
            return !1;
          }(n[0], o[0]))
            return !1;
          for (var r = 1; r < 5; r++)
            if (!Ei(n[r], o[r]))
              return !1;
          return !0;
        }
        return !1;
      }
      function Ei(e, t) {
        return e && t && e === "*" || e === t;
      }
      function Si(e) {
        return Array.isArray(e) ? e : Array.of(e);
      }
      function Bo(e, t, n, o) {
        var r, a = Si(e).map(function(i) {
          var d = function(c, u, s, l) {
            if (Xt(c))
              return [c];
            if (jn(c)) {
              var m = function(f, g, w, b) {
                var h = void 0;
                try {
                  return h = f({ event: g.getPayload(), eventType: w, eventSchema: b }), Array.isArray(h) && h.every(Xt) || Xt(h) ? h : void 0;
                } catch {
                  h = void 0;
                }
                return h;
              }(c, u, s, l);
              if (Xt(m))
                return [m];
              if (Array.isArray(m))
                return m;
            }
          }(i, t, n, o);
          if (d && d.length !== 0)
            return d;
        });
        return (r = []).concat.apply(r, a.filter(function(i) {
          return i != null && i.filter(Boolean);
        }));
      }
      function Ac(e, t) {
        t === void 0 && (t = {});
        var n = {};
        for (var o in e)
          (t[o] || e[o] !== null && e[o] !== void 0) && (n[o] = e[o]);
        return n;
      }
      var qc = ve(961), jc = ve.n(qc);
      function Ln(e, t, n) {
        n === void 0 && (n = 63072e3);
        try {
          var o = window.localStorage, r = Date.now() + 1e3 * n;
          return o.setItem("".concat(e, ".expires"), r.toString()), o.setItem(e, t), !0;
        } catch {
          return !1;
        }
      }
      function ki(e) {
        try {
          var t = window.localStorage;
          return t.removeItem(e), t.removeItem(e + ".expires"), !0;
        } catch {
          return !1;
        }
      }
      function Di(e) {
        try {
          return window.sessionStorage.getItem(e);
        } catch {
          return;
        }
      }
      function Pi(e) {
        return !(!e || typeof e.valueOf() != "string");
      }
      function Ti(e) {
        return Number.isInteger && Number.isInteger(e) || typeof e == "number" && isFinite(e) && Math.floor(e) === e;
      }
      function Ri(e) {
        if (!Pi(e)) {
          e = e.text || "";
          var t = document.getElementsByTagName("title");
          t && t[0] != null && (e = t[0].text);
        }
        return e;
      }
      function Mn(e) {
        var t = new RegExp("^(?:(?:https?|ftp):)/*(?:[^@]+@)?([^:/#]+)").exec(e);
        return t ? t[1] : e;
      }
      function Oi(e) {
        var t = e.length;
        return e.charAt(--t) === "." && (e = e.slice(0, t)), e.slice(0, 2) === "*." && (e = e.slice(1)), e;
      }
      function Vo(e) {
        var t = window, n = Gt("referrer", t.location.href) || Gt("referer", t.location.href);
        if (n)
          return n;
        if (e)
          return e;
        try {
          if (t.top)
            return t.top.document.referrer;
          if (t.parent)
            return t.parent.document.referrer;
        } catch {
        }
        return document.referrer;
      }
      function Ze(e, t, n, o) {
        return e.addEventListener ? (e.addEventListener(t, n, o), !0) : e.attachEvent ? e.attachEvent("on" + t, n) : void (e["on" + t] = n);
      }
      function Gt(e, t) {
        var n = new RegExp("^[^#]*[?&]" + e + "=([^&#]*)").exec(t);
        return n ? decodeURIComponent(n[1].replace(/\+/g, " ")) : null;
      }
      function Un(e, t, n, o) {
        kt(e, "", -1, "/", t, n, o);
      }
      function Nc(e) {
        for (var t = document.cookie.split("; "), n = [], o = 0; o < t.length; o++)
          t[o].substring(0, e.length) === e && n.push(t[o]);
        return n;
      }
      function kt(e, t, n, o, r, a, i) {
        return arguments.length > 1 ? document.cookie = e + "=" + encodeURIComponent(t ?? "") + (n ? "; Expires=" + new Date(+/* @__PURE__ */ new Date() + 1e3 * n).toUTCString() : "") + (o ? "; Path=" + o : "") + (r ? "; Domain=" + r : "") + (a ? "; SameSite=" + a : "") + (i ? "; Secure" : "") : decodeURIComponent((("; " + document.cookie).split("; " + e + "=")[1] || "").split(";")[0]);
      }
      function Lc(e) {
        if (e == null || typeof e != "object" || Array.isArray(e))
          return function() {
            return !0;
          };
        var t = Object.prototype.hasOwnProperty.call(e, "allowlist"), n = function(o) {
          var r = {}, a = o.allowlist || o.denylist;
          if (a) {
            Array.isArray(a) || (a = [a]);
            for (var i = 0; i < a.length; i++)
              r[a[i]] = !0;
          }
          return r;
        }(e);
        return function(o, r) {
          return o.hasOwnProperty("filter") && o.filter ? o.filter : r;
        }(e, function(o) {
          return function(r, a) {
            for (var i = 0, d = Ai(r); i < d.length; i++)
              if (a[d[i]])
                return !0;
            return !1;
          }(o, n) === t;
        });
      }
      function Ai(e) {
        return e.className.match(/\S+/g) || [];
      }
      function Mc(e, t, n, o, r, a, i, d, c, u, s, l, m, f, g, w, b) {
        var h, C, y = !1, v = [], k = !1, I = (o = typeof o == "string" ? o.toLowerCase() : o) === !0 || o === "beacon" || o === "true", x = !!(I && window.navigator && window.navigator.sendBeacon && !(function(W, se) {
          var ee = se.match("(iP.+; CPU .*OS (d+)[_d]*.*) AppleWebKit/");
          return !(!ee || !ee.length) && parseInt(ee[0]) <= 13;
        }(0, C = window.navigator.userAgent) || function(W, se, ee) {
          var ie = ee.match("(Macintosh;.*Mac OS X (d+)_(d+)[_d]*.*) AppleWebKit/");
          return !(!ie || !ie.length) && (parseInt(ie[0]) <= 10 || parseInt(ie[0]) === 10 && parseInt(ie[1]) <= 15);
        }(0, 0, C) && function(W) {
          return W.match("Version/.* Safari/") && !function(se) {
            return se.match("Chrom(e|ium)");
          }(W);
        }(C))) && I, D = o === "get", T = !!(window.XMLHttpRequest && "withCredentials" in new XMLHttpRequest()), q = !D && T && (o === "post" || I), M = q ? r : "/i", H = "snowplowOutQueue_".concat(e, "_").concat(q ? "post2" : "get");
        if (I && (m = {}), a = n && function() {
          var W = "modernizr";
          if (!function() {
            try {
              return !!window.localStorage;
            } catch {
              return !0;
            }
          }())
            return !1;
          try {
            var se = window.localStorage;
            return se.setItem(W, W), se.removeItem(W), !0;
          } catch {
            return !1;
          }
        }() && q && a || 1, n)
          try {
            var U = window.localStorage.getItem(H);
            v = U ? JSON.parse(U) : [];
          } catch {
          }
        function te(W) {
          var se = Object.keys(W).map(function(ee) {
            return [ee, W[ee]];
          }).reduce(function(ee, ie) {
            var Ie = ie[0], rt = ie[1];
            return ee[Ie] = rt.toString(), ee;
          }, {});
          return { evt: se, bytes: Z(JSON.stringify(se)) };
        }
        function Z(W) {
          for (var se = 0, ee = 0; ee < W.length; ee++) {
            var ie = W.charCodeAt(ee);
            ie <= 127 ? se += 1 : ie <= 2047 ? se += 2 : ie >= 55296 && ie <= 57343 ? (se += 4, ee++) : se += ie < 65535 ? 3 : 4;
          }
          return se;
        }
        Array.isArray(v) || (v = []), t.outQueues.push(v), T && a > 1 && t.bufferFlushers.push(function(W) {
          y || me(W);
        });
        var re = function(W) {
          return typeof W[0] == "object" && "evt" in W[0];
        };
        function fe(W, se) {
          Ce(se, !0, !1).send(Pe($e([W.evt])));
        }
        function me(W) {
          for (W === void 0 && (W = !1); v.length && typeof v[0] != "string" && typeof v[0] != "object"; )
            v.shift();
          if (v.length) {
            if (!Pi(h))
              throw "No collector configured";
            if (y = !0, b && !k) {
              var se = Ce(b, !1, W);
              return k = !0, se.timeout = s, se.onreadystatechange = function() {
                se.readyState === 4 && me();
              }, void se.send();
            }
            if (T) {
              var ee, ie, Ie = void 0;
              re(v) ? (ee = Ce(Ie = h, !0, W), ie = function(Te) {
                for (var at = 0, Fn = 0; at < Te.length && !((Fn += Te[at].bytes) >= i); )
                  at += 1;
                return at;
              }(v)) : (Ie = Ge(v[0]), ee = Ce(Ie, !1, W), ie = 1);
              var rt = setTimeout(function() {
                ee.abort(), y = !1;
              }, s), bt = function(Te) {
                for (var at = 0; at < Te; at++)
                  v.shift();
                n && Ln(H, JSON.stringify(v.slice(0, u)));
              }, We = function(Te) {
                bt(Te), me();
              };
              if (ee.onreadystatechange = function() {
                var Te;
                ee.readyState === 4 && ee.status >= 200 && (clearTimeout(rt), ee.status < 300 ? We(ie) : (!((Te = ee.status) >= 200 && Te < 300 || !g.includes(Te) && w.includes(Te)) || (ot.error("Status ".concat(ee.status, ", will not retry.")), bt(ie)), y = !1));
              }, re(v)) {
                var Ye = v.slice(0, ie);
                if (Ye.length > 0) {
                  var it = !1, Tt = Ye.map(function(Te) {
                    return Te.evt;
                  });
                  if (x) {
                    var pt = new Blob([Pe($e(Tt))], { type: "application/json" });
                    try {
                      it = navigator.sendBeacon(Ie, pt);
                    } catch {
                      it = !1;
                    }
                  }
                  it === !0 ? We(ie) : ee.send(Pe($e(Tt)));
                }
              } else
                ee.send();
            } else if (l || re(v))
              y = !1;
            else {
              var Qe = new Image(1, 1), et = !0;
              Qe.onload = function() {
                et && (et = !1, v.shift(), n && Ln(H, JSON.stringify(v.slice(0, u))), me());
              }, Qe.onerror = function() {
                et && (et = !1, y = !1);
              }, Qe.src = Ge(v[0]), setTimeout(function() {
                et && y && (et = !1, me());
              }, s);
            }
          } else
            y = !1;
        }
        function Ce(W, se, ee) {
          var ie = new XMLHttpRequest();
          for (var Ie in se ? (ie.open("POST", W, !ee), ie.setRequestHeader("Content-Type", "application/json; charset=UTF-8")) : ie.open("GET", W, !ee), ie.withCredentials = f, l && ie.setRequestHeader("SP-Anonymous", "*"), m)
            Object.prototype.hasOwnProperty.call(m, Ie) && ie.setRequestHeader(Ie, m[Ie]);
          return ie;
        }
        function Pe(W) {
          return JSON.stringify({ schema: "iglu:com.snowplowanalytics.snowplow/payload_data/jsonschema/1-0-4", data: W });
        }
        function $e(W) {
          for (var se = (/* @__PURE__ */ new Date()).getTime().toString(), ee = 0; ee < W.length; ee++)
            W[ee].stm = se;
          return W;
        }
        function Ge(W) {
          return c ? h + W.replace("?", "?stm=" + (/* @__PURE__ */ new Date()).getTime() + "&") : h + W;
        }
        return { enqueueRequest: function(W, se) {
          h = se + M;
          var ee = function(We, Ye) {
            return ot.warn("Event (" + We + "B) too big, max is " + Ye);
          };
          if (q) {
            if ((Ie = te(W)).bytes >= i)
              return ee(Ie.bytes, i), void fe(Ie, h);
            v.push(Ie);
          } else {
            var ie = function(We) {
              var Ye = "?", it = { co: !0, cx: !0 }, Tt = !0;
              for (var pt in We)
                We.hasOwnProperty(pt) && !it.hasOwnProperty(pt) && (Tt ? Tt = !1 : Ye += "&", Ye += encodeURIComponent(pt) + "=" + encodeURIComponent(We[pt]));
              for (var Qe in it)
                We.hasOwnProperty(Qe) && it.hasOwnProperty(Qe) && (Ye += "&" + Qe + "=" + encodeURIComponent(We[Qe]));
              return Ye;
            }(W);
            if (d > 0) {
              var Ie, rt = Z(Ge(ie));
              if (rt >= d)
                return ee(rt, d), void (T && fe(Ie = te(W), se + r));
            }
            v.push(ie);
          }
          var bt = !1;
          n && (bt = Ln(H, JSON.stringify(v.slice(0, u)))), y || bt && !(v.length >= a) || me();
        }, executeQueue: function() {
          y || me();
        }, setUseLocalStorage: function(W) {
          n = W;
        }, setAnonymousTracking: function(W) {
          l = W;
        }, setCollectorUrl: function(W) {
          h = W + M;
        }, setBufferSize: function(W) {
          a = W;
        } };
      }
      function qi(e, t, n) {
        var o, r, a;
        return e === "translate.googleusercontent.com" ? (n === "" && (n = t), e = Mn(t = (r = t, (o = (a = new RegExp("^(?:https?|ftp)(?::/*(?:[^?]+))([?][^#]+)").exec(r)) && (a == null ? void 0 : a.length) > 1 ? Gt("u", a[1]) : null) !== null && o !== void 0 ? o : ""))) : e !== "cc.bingj.com" && e !== "webcache.googleusercontent.com" || (e = Mn(t = document.links[0].href)), [e, t, n];
      }
      function Yt(e, t) {
        t === void 0 && (t = { memorizedVisitCount: 1 });
        var n = t.memorizedVisitCount;
        Jo(e) ? (e[7] = e[6], e[5] = e[4], e[3]++) : e[3] = n;
        var o = (0, lt.v4)();
        return e[6] = o, e[10] = 0, e[8] = "", e[9] = void 0, o;
      }
      function Fo(e) {
        e[4] = Math.round((/* @__PURE__ */ new Date()).getTime() / 1e3);
      }
      function ji(e, t, n) {
        var o = e[9];
        return { userId: n ? "00000000-0000-0000-0000-000000000000" : e[1], sessionId: e[6], eventIndex: e[10], sessionIndex: e[3], previousSessionId: n ? null : e[7] || null, storageMechanism: t == "localStorage" ? "LOCAL_STORAGE" : "COOKIE_1", firstEventId: e[8] || null, firstEventTimestamp: o ? new Date(o).toISOString() : null };
      }
      function Ho(e) {
        return e[6];
      }
      function zo(e) {
        return e[3];
      }
      function Jo(e) {
        return e[0] === "0";
      }
      var Kt = "x";
      function Wo() {
        return { viewport: Qo(Uc()), documentSize: Qo((e = document.documentElement, t = document.body, n = t ? Math.max(t.offsetHeight, t.scrollHeight) : 0, o = Math.max(e.clientWidth, e.offsetWidth, e.scrollWidth), r = Math.max(e.clientHeight, e.offsetHeight, e.scrollHeight, n), isNaN(o) || isNaN(r) ? "" : o + Kt + r)), resolution: Qo(screen.width + Kt + screen.height), colorDepth: screen.colorDepth, devicePixelRatio: window.devicePixelRatio, cookiesEnabled: window.navigator.cookieEnabled, online: window.navigator.onLine, browserLanguage: navigator.language || navigator.userLanguage, documentLanguage: document.documentElement.lang, webdriver: window.navigator.webdriver, deviceMemory: window.navigator.deviceMemory, hardwareConcurrency: window.navigator.hardwareConcurrency };
        var e, t, n, o, r;
      }
      function Uc() {
        var e, t;
        if ("innerWidth" in window)
          e = window.innerWidth, t = window.innerHeight;
        else {
          var n = document.documentElement || document.body;
          e = n.clientWidth, t = n.clientHeight;
        }
        return e >= 0 && t >= 0 ? e + Kt + t : null;
      }
      function Qo(e) {
        return e && e.split(Kt).map(function(t) {
          return Math.floor(Number(t));
        }).join(Kt);
      }
      function _c(e, t, n, o, r, a) {
        a === void 0 && (a = {});
        var i = [], d = function(u, s, l, m, f, g) {
          var w, b, h, C, y, v, k, I, x, D, T, q, M, H, U, te, Z, re, fe, me, Ce, Pe, $e, Ge, W, se, ee, ie;
          g.eventMethod = (w = g.eventMethod) !== null && w !== void 0 ? w : "post";
          var Ie, rt, bt = function(p) {
            var P;
            return (P = p.stateStorageStrategy) !== null && P !== void 0 ? P : "cookieAndLocalStorage";
          }, We = function(p) {
            var P, L;
            return typeof p.anonymousTracking != "boolean" && (L = ((P = p.anonymousTracking) === null || P === void 0 ? void 0 : P.withSessionTracking) === !0) !== null && L !== void 0 && L;
          }, Ye = function(p) {
            var P, L;
            return typeof p.anonymousTracking != "boolean" && (L = ((P = p.anonymousTracking) === null || P === void 0 ? void 0 : P.withServerAnonymisation) === !0) !== null && L !== void 0 && L;
          }, it = function(p) {
            return !!p.anonymousTracking;
          }, Tt = (h = (b = g == null ? void 0 : g.contexts) === null || b === void 0 ? void 0 : b.browser) !== null && h !== void 0 && h, pt = (y = (C = g == null ? void 0 : g.contexts) === null || C === void 0 ? void 0 : C.webPage) === null || y === void 0 || y;
          i.push((Ie = function(p) {
            return st ? null : p;
          }, rt = function(p) {
            return Ft ? p : Ie(p);
          }, { beforeTrack: function(p) {
            var P = sr("ses"), L = sn(), ne = function(oe) {
              return oe[10];
            }(L) === 0;
            if (tr = !!er && !!kt(er), oa || tr)
              ga();
            else {
              Jo(L) ? (Ct = P || xe == "none" ? Ho(L) : Yt(L), tt = zo(L)) : (/* @__PURE__ */ new Date()).getTime() - ir > 1e3 * ia && (tt++, Ct = Yt(L, { memorizedVisitCount: tt })), Fo(L), function(oe, ue) {
                if (oe[10] === 0) {
                  var ye = ue.build();
                  oe[8] = ye.eid;
                  var qe = ye.dtm || ye.ttm;
                  oe[9] = qe ? parseInt(qe) : void 0;
                }
              }(L, p), function(oe) {
                oe[10] += 1;
              }(L);
              var z = Wo(), we = z.viewport, he = z.documentSize;
              p.add("vp", we), p.add("ds", he), p.add("vid", rt(tt)), p.add("sid", rt(Ct)), p.add("duid", Ie(function(oe) {
                return oe[1];
              }(L))), p.add("uid", Ie(Rt)), Ot(), p.add("refr", At(Qe || on)), p.add("url", At(et || It));
              var ae = ji(L, xe, st);
              if (!Vu || st && !Ft || function(oe, ue) {
                var ye = { schema: "iglu:com.snowplowanalytics.snowplow/client_session/jsonschema/1-0-2", data: ue };
                oe.addContextEntity(ye);
              }(p, ae), xe != "none") {
                ur(L);
                var le = cr();
                P && !ne || !le || !Kn || ar || (Kn(ae), ar = !1);
              }
              ir = (/* @__PURE__ */ new Date()).getTime();
            }
          } })), pt && i.push({ contexts: function() {
            return [{ schema: "iglu:com.snowplowanalytics.snowplow/web_page/jsonschema/1-0-0", data: { id: dr() } }];
          } }), Tt && i.push({ contexts: function() {
            return [{ schema: "iglu:com.snowplowanalytics.snowplow/browser_context/jsonschema/1-0-0", data: Xe(Xe({}, Wo()), { tabId: ba() }) }];
          } }), i.push.apply(i, (v = g.plugins) !== null && v !== void 0 ? v : []);
          var Qe, et, Te, at, Fn, er, Hn, zn, Jn, Wn, Qn, ea, Xn, Ct, Rt, tr, Ke = function(p) {
            p === void 0 && (p = {});
            var P = p.base64, L = p.corePlugins, ne = p.callback, z = L ?? [], we = function(ae, le, oe) {
              var ue = /* @__PURE__ */ function(Q) {
                return { addPluginContexts: function(Be) {
                  var nt = Be ? ht([], Be, !0) : [];
                  return Q.forEach(function(cn) {
                    try {
                      cn.contexts && nt.push.apply(nt, cn.contexts());
                    } catch (mr) {
                      ot.error("Error adding plugin contexts", mr);
                    }
                  }), nt;
                } };
              }(le), ye = Oc(), qe = ae, Le = {};
              function ge(Q, Be) {
                Le[Q] = Be;
              }
              var Se = { track: function(Q, Be, nt) {
                Q.withJsonProcessor(Rc(qe)), Q.add("eid", (0, lt.v4)()), Q.addDict(Le);
                var cn = function(je) {
                  return je == null ? { type: "dtm", value: (/* @__PURE__ */ new Date()).getTime() } : typeof je == "number" ? { type: "dtm", value: je } : je.type === "ttm" ? { type: "ttm", value: je.value } : { type: "dtm", value: je.value || (/* @__PURE__ */ new Date()).getTime() };
                }(nt);
                Q.add(cn.type, cn.value.toString());
                var mr = function(je, qt) {
                  var pr = ye.getApplicableContexts(je), un = [];
                  return qt && qt.length && un.push.apply(un, qt), pr && pr.length && un.push.apply(un, pr), un;
                }(Q, ue.addPluginContexts(Be)), xa = function(je) {
                  if (je && je.length)
                    return { schema: "iglu:com.snowplowanalytics.snowplow/contexts/jsonschema/1-0-0", data: je };
                }(mr);
                xa !== void 0 && Q.addJson("cx", "co", xa), le.forEach(function(je) {
                  try {
                    je.beforeTrack && je.beforeTrack(Q);
                  } catch (qt) {
                    ot.error("Plugin beforeTrack", qt);
                  }
                }), typeof oe == "function" && oe(Q);
                var Ea = Q.build();
                return le.forEach(function(je) {
                  try {
                    je.afterTrack && je.afterTrack(Ea);
                  } catch (qt) {
                    ot.error("Plugin afterTrack", qt);
                  }
                }), Ea;
              }, addPayloadPair: ge, getBase64Encoding: function() {
                return qe;
              }, setBase64Encoding: function(Q) {
                qe = Q;
              }, addPayloadDict: function(Q) {
                for (var Be in Q)
                  Object.prototype.hasOwnProperty.call(Q, Be) && (Le[Be] = Q[Be]);
              }, resetPayloadPairs: function(Q) {
                Le = hi(Q) ? Q : {};
              }, setTrackerVersion: function(Q) {
                ge("tv", Q);
              }, setTrackerNamespace: function(Q) {
                ge("tna", Q);
              }, setAppId: function(Q) {
                ge("aid", Q);
              }, setPlatform: function(Q) {
                ge("p", Q);
              }, setUserId: function(Q) {
                ge("uid", Q);
              }, setScreenResolution: function(Q, Be) {
                ge("res", Q + "x" + Be);
              }, setViewport: function(Q, Be) {
                ge("vp", Q + "x" + Be);
              }, setColorDepth: function(Q) {
                ge("cd", Q);
              }, setTimezone: function(Q) {
                ge("tz", Q);
              }, setLang: function(Q) {
                ge("lang", Q);
              }, setIpAddress: function(Q) {
                ge("ip", Q);
              }, setUseragent: function(Q) {
                ge("ua", Q);
              }, addGlobalContexts: function(Q) {
                ye.addGlobalContexts(Q);
              }, clearGlobalContexts: function() {
                ye.clearGlobalContexts();
              }, removeGlobalContexts: function(Q) {
                ye.removeGlobalContexts(Q);
              } };
              return Se;
            }(P == null || P, z, ne), he = Xe(Xe({}, we), { addPlugin: function(ae) {
              var le, oe, ue = ae.plugin;
              z.push(ue), (le = ue.logger) === null || le === void 0 || le.call(ue, ot), (oe = ue.activateCorePlugin) === null || oe === void 0 || oe.call(ue, he);
            } });
            return z == null || z.forEach(function(ae) {
              var le, oe;
              (le = ae.logger) === null || le === void 0 || le.call(ae, ot), (oe = ae.activateCorePlugin) === null || oe === void 0 || oe.call(ae, he);
            }), he;
          }({ base64: g.encodeBase64, corePlugins: i, callback: function(p) {
            oa || tr || xt.enqueueRequest(p.build(), nr);
          } }), Lu = document.characterSet || document.charset, Bt = qi(window.location.hostname, window.location.href, Vo()), ta = Oi(Bt[0]), It = Bt[1], on = Bt[2], Mu = (k = g.platform) !== null && k !== void 0 ? k : "web", nr = ya(m), Uu = (I = g.postPath) !== null && I !== void 0 ? I : "/com.snowplowanalytics.snowplow/tp2", _u = (x = g.appId) !== null && x !== void 0 ? x : "", Vt = document.title, $u = (D = g.resetActivityTrackingOnPageView) === null || D === void 0 || D, Bu = (T = g.cookieName) !== null && T !== void 0 ? T : "_sp_", rn = (q = g.cookieDomain) !== null && q !== void 0 ? q : void 0, or = "/", Gn = (M = g.cookieSameSite) !== null && M !== void 0 ? M : "None", Yn = (H = g.cookieSecure) === null || H === void 0 || H, na = navigator.doNotTrack || navigator.msDoNotTrack || window.doNotTrack, oa = g.respectDoNotTrack !== void 0 && g.respectDoNotTrack && (na === "yes" || na === "1"), ra = (U = g.cookieLifetime) !== null && U !== void 0 ? U : 63072e3, ia = (te = g.sessionCookieTimeout) !== null && te !== void 0 ? te : 1800, Ft = We(g), rr = Ye(g), st = it(g), xe = bt(g), ir = (/* @__PURE__ */ new Date()).getTime(), tt = 1, xt = Mc(u, f, xe == "localStorage" || xe == "cookieAndLocalStorage", g.eventMethod, Uu, (Z = g.bufferSize) !== null && Z !== void 0 ? Z : 1, (re = g.maxPostBytes) !== null && re !== void 0 ? re : 4e4, (fe = g.maxGetBytes) !== null && fe !== void 0 ? fe : 0, (me = g.useStm) === null || me === void 0 || me, (Ce = g.maxLocalStorageQueueSize) !== null && Ce !== void 0 ? Ce : 1e3, (Pe = g.connectionTimeout) !== null && Pe !== void 0 ? Pe : 5e3, rr, ($e = g.customHeaders) !== null && $e !== void 0 ? $e : {}, (Ge = g.withCredentials) === null || Ge === void 0 || Ge, (W = g.retryStatusCodes) !== null && W !== void 0 ? W : [], ((se = g.dontRetryStatusCodes) !== null && se !== void 0 ? se : []).concat([400, 401, 403, 410, 422]), g.idService), aa = !1, sa = !1, ze = { enabled: !1, installed: !1, configurations: {} }, Vu = (ie = (ee = g.contexts) === null || ee === void 0 ? void 0 : ee.session) !== null && ie !== void 0 && ie, Kn = g.onSessionUpdateCallback, ar = !1;
          g.hasOwnProperty("discoverRootDomain") && g.discoverRootDomain && (rn = function(p, P) {
            for (var L = window.location.hostname, ne = "_sp_root_domain_test_", z = ne + (/* @__PURE__ */ new Date()).getTime(), we = "_test_value_" + (/* @__PURE__ */ new Date()).getTime(), he = L.split("."), ae = he.length - 2; ae >= 0; ae--) {
              var le = he.slice(ae).join(".");
              if (kt(z, we, 0, "/", le, p, P), kt(z) === we) {
                Un(z, le, p, P);
                for (var oe = Nc(ne), ue = 0; ue < oe.length; ue++)
                  Un(oe[ue], le, p, P);
                return le;
              }
            }
            return L;
          }(Gn, Yn));
          var Zn = Wo(), Fu = Zn.browserLanguage, Hu = Zn.resolution, zu = Zn.colorDepth, Ju = Zn.cookiesEnabled;
          function Ot() {
            (Bt = qi(window.location.hostname, window.location.href, Vo()))[1] !== It && (on = Vo(It)), ta = Oi(Bt[0]), It = Bt[1];
          }
          function ca(p) {
            var P = (/* @__PURE__ */ new Date()).getTime(), L = p.currentTarget;
            L != null && L.href && (L.href = function(ne, z, we) {
              var he = "_sp=" + we, ae = ne.split("#"), le = ae[0].split("?"), oe = le.shift(), ue = le.join("?");
              if (ue) {
                for (var ye = !0, qe = ue.split("&"), Le = 0; Le < qe.length; Le++)
                  if (qe[Le].substr(0, z.length + 1) === "_sp=") {
                    ye = !1, qe[Le] = he, ue = qe.join("&");
                    break;
                  }
                ye && (ue = he + "&" + ue);
              } else
                ue = he;
              return ae[0] = oe + "?" + ue, ae.join("#");
            }(L.href, "_sp", Xn + "." + P));
          }
          function ua(p) {
            for (var P = 0; P < document.links.length; P++) {
              var L = document.links[P];
              !L.spDecorationEnabled && p(L) && (Ze(L, "click", ca, !0), Ze(L, "mousedown", ca, !0), L.spDecorationEnabled = !0);
            }
          }
          function At(p) {
            var P;
            return at && (P = new RegExp("#.*"), p = p.replace(P, "")), Fn && (P = new RegExp("[{}]", "g"), p = p.replace(P, "")), p;
          }
          function da(p) {
            var P = new RegExp("^([a-z]+):").exec(p);
            return P ? P[1] : null;
          }
          function Ht(p) {
            return Bu + p + "." + ea;
          }
          function sr(p) {
            var P = Ht(p);
            return xe == "localStorage" ? function(L) {
              try {
                var ne = window.localStorage, z = ne.getItem(L + ".expires");
                return z === null || +z > Date.now() ? ne.getItem(L) : (ne.removeItem(L), void ne.removeItem(L + ".expires"));
              } catch {
                return;
              }
            }(P) : xe == "cookie" || xe == "cookieAndLocalStorage" ? kt(P) : void 0;
          }
          function la() {
            Ot(), ea = jc()((rn || ta) + (or || "/")).slice(0, 4);
          }
          function an() {
            var p = /* @__PURE__ */ new Date();
            Hn = p.getTime();
          }
          function Wu() {
            (function() {
              var p = ma(), P = p[0];
              P < zn ? zn = P : P > Jn && (Jn = P);
              var L = p[1];
              L < Wn ? Wn = L : L > Qn && (Qn = L);
            })(), an();
          }
          function ma() {
            var p = document.documentElement;
            return p ? [p.scrollLeft || window.pageXOffset, p.scrollTop || window.pageYOffset] : [0, 0];
          }
          function pa() {
            var p = ma(), P = p[0];
            zn = P, Jn = P;
            var L = p[1];
            Wn = L, Qn = L;
          }
          function eo(p) {
            return Math.round(p);
          }
          function cr() {
            return fa(Ht("ses"), "*", ia);
          }
          function ur(p) {
            var P = Ht("id"), L = function(ne) {
              return ne.shift(), ne.join(".");
            }(p);
            return fa(P, L, ra);
          }
          function fa(p, P, L) {
            return !(st && !Ft) && (xe == "localStorage" ? Ln(p, P, L) : (xe == "cookie" || xe == "cookieAndLocalStorage") && (kt(p, P, L, or, rn, Gn, Yn), document.cookie.indexOf("".concat(p, "=")) !== -1));
          }
          function ga(p) {
            var P = Ht("id"), L = Ht("ses");
            ki(P), ki(L), Un(P, rn, Gn, Yn), Un(L, rn, Gn, Yn), p != null && p.preserveSession || (Ct = (0, lt.v4)(), tt = 1), p != null && p.preserveUser || (Xn = st ? "" : (0, lt.v4)(), Rt = null);
          }
          function va(p) {
            p && p.stateStorageStrategy && (g.stateStorageStrategy = p.stateStorageStrategy, xe = bt(g)), st = it(g), Ft = We(g), rr = Ye(g), xt.setUseLocalStorage(xe == "localStorage" || xe == "cookieAndLocalStorage"), xt.setAnonymousTracking(rr);
          }
          function ha() {
            if (!st || Ft) {
              var p = xe != "none" && !!sr("ses"), P = sn();
              Xn = function(L, ne) {
                var z;
                return L[1] ? z = L[1] : ne ? (z = "", L[1] = z) : (z = (0, lt.v4)(), L[1] = z), z;
              }(P, st), Ct = p ? Ho(P) : Yt(P), tt = zo(P), xe != "none" && (cr(), Fo(P), ur(P));
            }
          }
          function sn() {
            return xe == "none" ? ["1", "", 0, 0, 0, void 0, "", "", "", void 0, 0] : function(p, P, L, ne) {
              var z, we = /* @__PURE__ */ new Date(), he = Math.round(we.getTime() / 1e3);
              p ? (z = p.split(".")).unshift("0") : z = ["1", P, he, ne, he, "", L], z[6] && z[6] !== "undefined" || (z[6] = (0, lt.v4)()), z[7] && z[7] !== "undefined" || (z[7] = ""), z[8] && z[8] !== "undefined" || (z[8] = ""), z[9] && z[9] !== "undefined" || (z[9] = ""), z[10] && z[10] !== "undefined" || (z[10] = 0);
              var ae = function(oe, ue) {
                var ye = parseInt(oe);
                return isNaN(ye) ? ue : ye;
              }, le = function(oe) {
                return oe ? ae(oe, void 0) : void 0;
              };
              return [z[0], z[1], ae(z[2], he), ae(z[3], ne), ae(z[4], he), le(z[5]), z[6], z[7], z[8], le(z[9]), ae(z[10], 0)];
            }(sr("id") || void 0, Xn, Ct, tt);
          }
          function ya(p) {
            return p.indexOf("http") === 0 ? p : (document.location.protocol === "https:" ? "https" : "http") + "://" + p;
          }
          function wa() {
            aa && f.pageViewId != null || (f.pageViewId = (0, lt.v4)());
          }
          function dr() {
            return f.pageViewId == null && (f.pageViewId = (0, lt.v4)()), f.pageViewId;
          }
          function ba() {
            if (xe === "none" || st || !pt)
              return null;
            var p = "_sp_tab_id", P = Di(p);
            return P || (function(L, ne) {
              try {
                window.sessionStorage.setItem("_sp_tab_id", ne);
              } catch {
                return !1;
              }
            }(0, (0, lt.v4)()), P = Di(p)), P || null;
          }
          function lr(p, P) {
            return (p || []).concat(P ? P() : []);
          }
          function Qu(p, P, L) {
            var ne = function(we, he) {
              Ot(), we({ context: he, pageViewId: dr(), minXOffset: zn, minYOffset: Wn, maxXOffset: Jn, maxYOffset: Qn }), pa();
            }, z = function() {
              var we = /* @__PURE__ */ new Date();
              Hn + p.configHeartBeatTimer > we.getTime() && ne(p.callback, lr(P, L));
            };
            p.configMinimumVisitLength === 0 ? p.activityInterval = window.setInterval(z, p.configHeartBeatTimer) : p.activityInterval = window.setTimeout(function() {
              var we = /* @__PURE__ */ new Date();
              Hn + p.configMinimumVisitLength > we.getTime() && ne(p.callback, lr(P, L)), p.activityInterval = window.setInterval(z, p.configHeartBeatTimer);
            }, p.configMinimumVisitLength);
          }
          function Ca(p) {
            var P = p.minimumVisitLength, L = p.heartbeatDelay, ne = p.callback;
            if (Ti(P) && Ti(L))
              return { configMinimumVisitLength: 1e3 * P, configHeartBeatTimer: 1e3 * L, callback: ne };
            ot.error("Activity tracking minimumVisitLength & heartbeatDelay must be integers");
          }
          function Xu(p) {
            var P = p.context, L = p.minXOffset, ne = p.minYOffset, z = p.maxXOffset, we = p.maxYOffset, he = document.title;
            he !== Vt && (Vt = he, Te = void 0), Ke.track(function(ae) {
              var le = ae.pageUrl, oe = ae.pageTitle, ue = ae.referrer, ye = ae.minXOffset, qe = ae.maxXOffset, Le = ae.minYOffset, ge = ae.maxYOffset, Se = An();
              return Se.add("e", "pp"), Se.add("url", le), Se.add("page", oe), Se.add("refr", ue), ye && !isNaN(Number(ye)) && Se.add("pp_mix", ye.toString()), qe && !isNaN(Number(qe)) && Se.add("pp_max", qe.toString()), Le && !isNaN(Number(Le)) && Se.add("pp_miy", Le.toString()), ge && !isNaN(Number(ge)) && Se.add("pp_may", ge.toString()), Se;
            }({ pageUrl: At(et || It), pageTitle: Ri(Te || Vt), referrer: At(Qe || on), minXOffset: eo(L), maxXOffset: eo(z), minYOffset: eo(ne), maxYOffset: eo(we) }), P);
          }
          function Ia(p) {
            var P = ze.configurations[p];
            (P == null ? void 0 : P.configMinimumVisitLength) === 0 ? window.clearTimeout(P == null ? void 0 : P.activityInterval) : window.clearInterval(P == null ? void 0 : P.activityInterval), ze.configurations[p] = void 0;
          }
          Ke.setTrackerVersion(l), Ke.setTrackerNamespace(s), Ke.setAppId(_u), Ke.setPlatform(Mu), Ke.addPayloadPair("cookie", Ju ? "1" : "0"), Ke.addPayloadPair("cs", Lu), Ke.addPayloadPair("lang", Fu), Ke.addPayloadPair("res", Hu), Ke.addPayloadPair("cd", zu), la(), ha(), g.crossDomainLinker && ua(g.crossDomainLinker);
          var Gu = { getDomainSessionIndex: function() {
            return tt;
          }, getPageViewId: dr, getTabId: ba, newSession: function() {
            var p = sn();
            if (Jo(p) ? (Ct = xe != "none" ? Yt(p) : Ho(p), tt = zo(p)) : (tt++, Ct = Yt(p, { memorizedVisitCount: tt })), Fo(p), xe != "none") {
              var P = ji(p, xe, st);
              ur(p), cr() && Kn && (ar = !0, Kn(P));
            }
            ir = (/* @__PURE__ */ new Date()).getTime();
          }, getCookieName: function(p) {
            return Ht(p);
          }, getUserId: function() {
            return Rt;
          }, getDomainUserId: function() {
            return sn()[1];
          }, getDomainUserInfo: function() {
            return sn();
          }, setReferrerUrl: function(p) {
            Qe = p;
          }, setCustomUrl: function(p) {
            Ot(), et = function(P, L) {
              var ne;
              return da(L) ? L : L.slice(0, 1) === "/" ? da(P) + "://" + Mn(P) + L : ((ne = (P = At(P)).indexOf("?")) >= 0 && (P = P.slice(0, ne)), (ne = P.lastIndexOf("/")) !== P.length - 1 && (P = P.slice(0, ne + 1)), P + L);
            }(It, p);
          }, setDocumentTitle: function(p) {
            Vt = document.title, Te = p;
          }, discardHashTag: function(p) {
            at = p;
          }, discardBrace: function(p) {
            Fn = p;
          }, setCookiePath: function(p) {
            or = p, la();
          }, setVisitorCookieTimeout: function(p) {
            ra = p;
          }, crossDomainLinker: function(p) {
            ua(p);
          }, enableActivityTracking: function(p) {
            ze.configurations.pagePing || (ze.enabled = !0, ze.configurations.pagePing = Ca(Xe(Xe({}, p), { callback: Xu })));
          }, enableActivityTrackingCallback: function(p) {
            ze.configurations.callback || (ze.enabled = !0, ze.configurations.callback = Ca(p));
          }, disableActivityTracking: function() {
            Ia("pagePing");
          }, disableActivityTrackingCallback: function() {
            Ia("callback");
          }, updatePageActivity: function() {
            an();
          }, setOptOutCookie: function(p) {
            er = p;
          }, setUserId: function(p) {
            Rt = p;
          }, setUserIdFromLocation: function(p) {
            Ot(), Rt = Gt(p, It);
          }, setUserIdFromReferrer: function(p) {
            Ot(), Rt = Gt(p, on);
          }, setUserIdFromCookie: function(p) {
            Rt = kt(p);
          }, setCollectorUrl: function(p) {
            nr = ya(p), xt.setCollectorUrl(nr);
          }, setBufferSize: function(p) {
            xt.setBufferSize(p);
          }, flushBuffer: function(p) {
            p === void 0 && (p = {}), xt.executeQueue(), p.newBufferSize && xt.setBufferSize(p.newBufferSize);
          }, trackPageView: function(p) {
            p === void 0 && (p = {}), function(P) {
              var L = P.title, ne = P.context, z = P.timestamp, we = P.contextCallback;
              Ot(), sa && wa(), sa = !0, Vt = document.title;
              var he = Ri((Te = L) || Vt);
              Ke.track(function(ge) {
                var Se = ge.pageUrl, Q = ge.pageTitle, Be = ge.referrer, nt = An();
                return nt.add("e", "pv"), nt.add("url", Se), nt.add("page", Q), nt.add("refr", Be), nt;
              }({ pageUrl: At(et || It), pageTitle: he, referrer: At(Qe || on) }), lr(ne, we), z);
              var ae = /* @__PURE__ */ new Date(), le = !1;
              if (ze.enabled && !ze.installed) {
                ze.installed = !0, le = !0;
                var oe = { update: function() {
                  if (typeof window < "u" && typeof window.addEventListener == "function") {
                    var ge = !1, Se = Object.defineProperty({}, "passive", { get: function() {
                      ge = !0;
                    }, set: function() {
                    } }), Q = function() {
                    };
                    window.addEventListener("testPassiveEventSupport", Q, Se), window.removeEventListener("testPassiveEventSupport", Q, Se), oe.hasSupport = ge;
                  }
                } };
                oe.update();
                var ue = "onwheel" in document.createElement("div") ? "wheel" : document.onmousewheel !== void 0 ? "mousewheel" : "DOMMouseScroll";
                Object.prototype.hasOwnProperty.call(oe, "hasSupport") ? Ze(document, ue, an, { passive: !0 }) : Ze(document, ue, an), pa();
                var ye = function(ge, Se) {
                  return Se === void 0 && (Se = an), function(Q) {
                    return Ze(document, Q, Se);
                  };
                };
                ["click", "mouseup", "mousedown", "mousemove", "keypress", "keydown", "keyup", "touchend", "touchstart"].forEach(ye(document)), ["resize", "focus", "blur"].forEach(ye(window)), ye(window, Wu)("scroll");
              }
              if (ze.enabled && ($u || le)) {
                Hn = ae.getTime();
                var qe = void 0;
                for (qe in ze.configurations) {
                  var Le = ze.configurations[qe];
                  Le && (window.clearInterval(Le.activityInterval), Qu(Le, ne, we));
                }
              }
            }(p);
          }, preservePageViewId: function() {
            aa = !0;
          }, disableAnonymousTracking: function(p) {
            g.anonymousTracking = !1, va(p), ha(), xt.executeQueue();
          }, enableAnonymousTracking: function(p) {
            var P;
            g.anonymousTracking = (P = p && (p == null ? void 0 : p.options)) === null || P === void 0 || P, va(p), Ft || wa();
          }, clearUserData: ga };
          return Xe(Xe({}, Gu), { id: u, namespace: s, core: Ke, sharedState: f });
        }(e, t, n, o, r, a), c = Xe(Xe({}, d), { addPlugin: function(u) {
          var s, l;
          c.core.addPlugin(u), (l = (s = u.plugin).activateBrowserPlugin) === null || l === void 0 || l.call(s, c);
        } });
        return i.forEach(function(u) {
          var s;
          (s = u.activateBrowserPlugin) === null || s === void 0 || s.call(u, c);
        }), c;
      }
      var Zt = {};
      function en(e, t) {
        try {
          (n = e ?? Object.keys(Zt), function(o, r) {
            for (var a = [], i = 0, d = o; i < d.length; i++) {
              var c = d[i];
              r.hasOwnProperty(c) ? a.push(r[c]) : ot.warn(c + " not configured");
            }
            return a;
          }(n, Zt)).forEach(t);
        } catch (o) {
          ot.error("Function failed", o);
        }
        var n;
      }
      var $c = function() {
        this.outQueues = [], this.bufferFlushers = [], this.hasLoaded = !1, this.registeredOnLoadHandlers = [];
      };
      function Ae(e, t) {
        en(t, function(n) {
          n.core.track(function(o) {
            var r = o.category, a = o.action, i = o.label, d = o.property, c = o.value, u = An();
            return u.add("e", "se"), u.add("se_ca", r), u.add("se_ac", a), u.add("se_la", i), u.add("se_pr", d), u.add("se_va", c == null ? void 0 : c.toString()), u;
          }(e), e.context, e.timestamp);
        });
      }
      var Ni = typeof window < "u" ? function() {
        var e = new $c(), t = document, n = window;
        function o() {
          var r;
          if (!e.hasLoaded)
            for (e.hasLoaded = !0, r = 0; r < e.registeredOnLoadHandlers.length; r++)
              e.registeredOnLoadHandlers[r]();
          return !0;
        }
        return t.visibilityState && Ze(t, "visibilitychange", function() {
          t.visibilityState == "hidden" && e.bufferFlushers.forEach(function(r) {
            r(!1);
          });
        }, !1), Ze(n, "beforeunload", function() {
          e.bufferFlushers.forEach(function(r) {
            r(!1);
          });
        }, !1), document.readyState === "loading" ? (t.addEventListener ? t.addEventListener("DOMContentLoaded", function r() {
          t.removeEventListener("DOMContentLoaded", r, !1), o();
        }) : t.attachEvent && t.attachEvent("onreadystatechange", function r() {
          t.readyState === "complete" && (t.detachEvent("onreadystatechange", r), o());
        }), Ze(n, "load", o, !1)) : o(), e;
      }() : void 0;
      const Bc = "iglu:com.adobe.magento.entity/magento-extension/jsonschema/1-0-0", Vc = "iglu:com.adobe.magento.entity/data-services-extension/jsonschema/1-0-1", Fc = "iglu:com.adobe.magento.entity/recommendations-extension/jsonschema/1-0-0", Hc = "iglu:com.adobe.magento.entity/search-extension/jsonschema/1-0-0", zc = "iglu:com.adobe.magento.entity/experience-platform-connector-extension/jsonschema/1-0-1", Jc = "iglu:com.adobe.magento.entity/magento-js-tracker/jsonschema/2-0-0", Li = "iglu:com.adobe.magento.entity/product/jsonschema/2-0-5", Mi = "iglu:com.adobe.magento.entity/recommendation-unit/jsonschema/1-0-4", Ui = "iglu:com.adobe.magento.entity/recommended-item/jsonschema/1-0-4", _i = "iglu:com.adobe.magento.entity/search-input/jsonschema/2-0-0", $i = "iglu:com.adobe.magento.entity/search-result-category/jsonschema/1-0-1", Bi = "iglu:com.adobe.magento.entity/search-result-product/jsonschema/1-0-2", Vi = "iglu:com.adobe.magento.entity/search-results/jsonschema/2-0-0", Fi = "iglu:com.adobe.magento.entity/search-result-suggestion/jsonschema/1-0-1", Hi = "iglu:com.adobe.magento.entity/shopping-cart/jsonschema/2-0-0", zi = "iglu:com.adobe.magento.entity/shopper/jsonschema/1-0-0", Ji = "iglu:com.adobe.magento.entity/storefront-instance/jsonschema/3-0-1", Wc = (e) => {
        var t, n;
        if (e.pricing)
          return { regularPrice: e.pricing.regularPrice, minimalPrice: e.pricing.minimalPrice, maximalPrice: e.pricing.maximalPrice, specialPrice: e.pricing.specialPrice, tierPricing: (t = e.pricing.tierPricing) === null || t === void 0 ? void 0 : t.map((o) => {
            var r;
            return { customerGroupId: (r = o.customerGroupId) !== null && r !== void 0 ? r : null, qty: o.qty, value: o.value };
          }), currencyCode: (n = e.pricing.currencyCode) !== null && n !== void 0 ? n : null };
      }, Xo = (e) => {
        var t;
        const n = window.magentoStorefrontEvents, o = e ?? n.context.getProduct();
        return o ? { schema: Li, data: { name: o.name, sku: o.sku, topLevelSku: o.topLevelSku, specialToDate: o.specialToDate, specialFromDate: o.specialFromDate, newToDate: o.newToDate, newFromDate: o.newFromDate, createdAt: o.createdAt, updatedAt: o.updatedAt, manufacturer: o.manufacturer, countryOfManufacture: o.countryOfManufacture, categories: (t = o.categories) === null || t === void 0 ? void 0 : t.map((r) => r.toString()), productType: o.productType, pricing: Wc(o), canonicalUrl: o.canonicalUrl, mainImageUrl: o.mainImageUrl } } : { schema: Li, data: {} };
      }, _n = (e, t) => (t == null ? void 0 : t.units.find((n) => n.unitId === e)) || null, Go = (e, t, n) => {
        const o = _n(e, n);
        return o && o.products.find((r) => r.productId === t) || null;
      }, tn = (e, t) => {
        const n = window.magentoStorefrontEvents, o = t ?? n.context.getRecommendations();
        if (!o)
          return { schema: Mi, data: {} };
        const r = _n(e, o);
        return r ? { schema: Mi, data: { name: r.unitName, unitId: r.unitId, itemsCount: r.totalProducts, backupsCount: r.backupProducts, configType: "preconfigured", source: "api", recType: r.typeId, placement: r.pagePlacement, yOffsetTop: r.yOffsetTop, yOffsetBottom: r.yOffsetBottom } } : null;
      }, $n = (e, t, n) => {
        var o, r, a, i, d, c, u, s, l, m, f, g, w, b;
        const h = window.magentoStorefrontEvents, C = n ?? h.context.getRecommendations();
        if (!C)
          return { schema: Ui, data: {} };
        if (!_n(e, C))
          return null;
        const y = Go(e, t, C);
        return y ? { schema: Ui, data: Object.assign(Object.assign({ unitId: e, serviceRank: y.rank, displayRank: y.rank, name: y.name, sku: y.sku, url: y.url, imageUrl: (r = (o = y.image) === null || o === void 0 ? void 0 : o.url) !== null && r !== void 0 ? r : null }, y.prices && { prices: { maximum: { final: (a = y.prices.maximum) === null || a === void 0 ? void 0 : a.final, regular: (i = y.prices.maximum) === null || i === void 0 ? void 0 : i.regular, finalAdjustments: (c = (d = y.prices.maximum) === null || d === void 0 ? void 0 : d.finalAdjustments) === null || c === void 0 ? void 0 : c.map((v) => ({ code: v == null ? void 0 : v.code, amount: v == null ? void 0 : v.amount })), regularAdjustments: (s = (u = y.prices.maximum) === null || u === void 0 ? void 0 : u.regularAdjustments) === null || s === void 0 ? void 0 : s.map((v) => ({ code: v == null ? void 0 : v.code, amount: v == null ? void 0 : v.amount })) }, minimum: { final: (l = y.prices.minimum) === null || l === void 0 ? void 0 : l.final, regular: (m = y.prices.minimum) === null || m === void 0 ? void 0 : m.regular, finalAdjustments: (g = (f = y.prices.minimum) === null || f === void 0 ? void 0 : f.finalAdjustments) === null || g === void 0 ? void 0 : g.map((v) => ({ code: v == null ? void 0 : v.code, amount: v == null ? void 0 : v.amount })), regularAdjustments: (b = (w = y.prices.minimum) === null || w === void 0 ? void 0 : w.regularAdjustments) === null || b === void 0 ? void 0 : b.map((v) => ({ code: v == null ? void 0 : v.code, amount: v == null ? void 0 : v.amount })) } } }), { currencyCode: y.currency }) } : null;
      }, Bn = (e, t) => t.units.find((n) => n.searchUnitId === e), Qc = (e) => {
        const t = [];
        return e.filter.forEach((n) => {
          var o, r, a, i, d, c, u;
          if (n.eq && t.push({ name: n.attribute, values: [n.eq], operator: "eq" }), !((o = n.in) === null || o === void 0) && o.length && t.push({ name: n.attribute, values: n.in, operator: "in" }), n.range) {
            const s = [];
            !((r = n.range) === null || r === void 0) && r.from && s.push((i = (a = n.range) === null || a === void 0 ? void 0 : a.from) === null || i === void 0 ? void 0 : i.toString()), !((d = n.range) === null || d === void 0) && d.to && s.push((u = (c = n.range) === null || c === void 0 ? void 0 : c.to) === null || u === void 0 ? void 0 : u.toString()), t.push({ name: n.attribute, values: s, operator: "range" });
          }
        }), t;
      }, Wi = (e, t) => {
        const n = window.magentoStorefrontEvents, o = t ?? n.context.getSearchInput();
        if (!o)
          return { schema: _i, data: {} };
        const r = ((a, i) => i.units.find((d) => d.searchUnitId === a))(e, o);
        return r ? { schema: _i, data: { searchUnitId: r.searchUnitId, source: null, queryTypes: r.queryTypes, searchRequestId: r.searchRequestId, query: r.phrase, page: r.currentPage, perPage: r.pageSize, filter: Qc(r), sort: r.sort } } : null;
      }, Dt = (e, t) => {
        const n = window.magentoStorefrontEvents, o = t ?? n.context.getSearchResults();
        if (!o)
          return { schema: Vi, data: {} };
        const r = Bn(e, o);
        return r ? { schema: Vi, data: Object.assign(Object.assign({}, r), { productCount: r.products.length, categoryCount: r.categories.length, suggestionCount: r.suggestions.length }) } : null;
      }, Xc = (e) => {
        const t = window.magentoStorefrontEvents, n = e ?? t.context.getShoppingCart();
        return n.items ? n.items.map((o) => {
          var r;
          return { basePrice: o.prices.price.value, cartItemId: o.id, mainImageUrl: (r = o.product.mainImageUrl) !== null && r !== void 0 ? r : void 0, offerPrice: o.prices.price.value, productName: o.product.name, productSku: o.product.sku, qty: o.quantity };
        }) : [];
      }, nn = (e) => {
        var t, n, o, r;
        const a = window.magentoStorefrontEvents, i = e ?? a.context.getShoppingCart();
        return i ? { schema: Hi, data: { cartId: i.id, itemsCount: i.totalQuantity || 0, items: Xc(i), possibleOnepageCheckout: i.possibleOnepageCheckout, subtotalExcludingTax: ((n = (t = i.prices) === null || t === void 0 ? void 0 : t.subtotalExcludingTax) === null || n === void 0 ? void 0 : n.value) || 0, subtotalIncludingTax: ((r = (o = i.prices) === null || o === void 0 ? void 0 : o.subtotalIncludingTax) === null || r === void 0 ? void 0 : r.value) || 0, giftMessageSelected: i.giftMessageSelected, giftWrappingSelected: i.giftWrappingSelected } } : { schema: Hi, data: {} };
      }, Gc = () => [() => Kc(), () => Yc(), () => ((e) => {
        const t = window.magentoStorefrontEvents, n = e ?? t.context.getMagentoExtension();
        return { schema: Bc, data: { magentoExtensionVersion: n != null && n.magentoExtensionVersion && n.magentoExtensionVersion !== "" ? n.magentoExtensionVersion : "unspecified" } };
      })(), () => ((e) => {
        const t = window.magentoStorefrontEvents, n = e ?? t.context.getDataServicesExtension();
        return { schema: Vc, data: { version: n != null && n.version && n.version !== "" ? n.version : "unspecified" } };
      })(), () => ((e, t) => {
        const n = window.magentoStorefrontEvents, o = e ?? n.context.getExperiencePlatformConnectorExtension(), r = n.context.getAEP(), a = !!(r != null && r.datastreamId) && !!(r != null && r.imsOrgId);
        return { schema: zc, data: { version: o != null && o.version && o.version ? o.version : "unspecified", setupComplete: !!a } };
      })(), () => ((e) => {
        const t = window.magentoStorefrontEvents, n = e ?? t.context.getRecommendationsExtension();
        return { schema: Fc, data: { version: n != null && n.version && n.version ? n.version : "unspecified" } };
      })(), () => ((e) => {
        const t = window.magentoStorefrontEvents, n = e ?? t.context.getSearchExtension();
        return { schema: Hc, data: { version: n != null && n.version && n.version ? n.version : "unspecified" } };
      })(), () => ((e) => {
        var t;
        const n = window.magentoStorefrontEvents, o = n.context.getShopper();
        return o ? { schema: zi, data: { shopperId: (t = o.shopperId) !== null && t !== void 0 ? t : "guest" } } : { schema: zi, data: { shopperId: "guest" } };
      })()], Yc = (e) => {
        const t = window.magentoStorefrontEvents, n = e ?? t.context.getStorefrontInstance();
        return n ? { schema: Ji, data: { baseCurrencyCode: n.baseCurrencyCode, environment: n.environment, environmentId: n.environmentId, instanceId: n.instanceId, storeCode: n.storeCode, storeId: n.storeId, storeName: n.storeName, storeUrl: n.storeUrl, storeViewCode: n.storeViewCode, storeViewCurrencyCode: n.storeViewCurrencyCode, storeViewId: n.storeViewId, storeViewName: n.storeViewName, websiteCode: n.websiteCode, websiteName: n.websiteName, websiteId: n.websiteId, storefrontTemplate: n.storefrontTemplate } } : { schema: Ji, data: {} };
      }, Kc = () => ({ schema: Jc, data: { magentoJsVersion: "1.8.1" } }), Zc = (e) => {
        const { pageContext: t, orderContext: n, shoppingCartContext: o } = e.eventInfo, r = nn(o), a = [];
        r && a.push(r), Ae({ category: "checkout", action: "place-order", label: String(n == null ? void 0 : n.orderId), property: t == null ? void 0 : t.pageType, context: a });
      }, Qi = (e) => {
        switch (e) {
          case "checkmo":
            return "check";
          case "banktransfer":
            return "wire_transfer";
          case "cashondelivery":
            return "cash";
          default:
            return "other";
        }
      }, Xi = ({ pricing: e }) => {
        if (!e)
          return 0;
        const { regularPrice: t, specialPrice: n } = e;
        return t - (n ?? t) || 0;
      }, wt = (e, t, n, o) => {
        var r, a;
        const i = [], d = /* @__PURE__ */ new Map();
        return e == null || e.forEach((c) => {
          d.set(c.SKU, c);
        }), n ? (r = n.items) === null || r === void 0 || r.map((c) => {
          var u, s, l;
          const m = d.get(c.sku), f = { SKU: c.sku, name: (m == null ? void 0 : m.name) || c.name, quantity: (m == null ? void 0 : m.quantity) || Number(c.quantity), priceTotal: (m == null ? void 0 : m.priceTotal) || Gi((Number((u = c.pricing) === null || u === void 0 ? void 0 : u.regularPrice) || 0) * Number(c.quantity)), currencyCode: (m == null ? void 0 : m.currencyCode) || ((l = (s = c.pricing) === null || s === void 0 ? void 0 : s.currencyCode) !== null && l !== void 0 ? l : o.storeViewCurrencyCode), selectedOptions: (m == null ? void 0 : m.selectedOptions) || c.selectedOptions };
          i.push(f);
        }) : (a = t == null ? void 0 : t.items) === null || a === void 0 || a.forEach((c) => {
          var u, s, l, m, f, g, w, b, h;
          const C = [];
          (u = c.configurableOptions) === null || u === void 0 || u.forEach((k) => {
            C.push({ attribute: String(k.optionLabel), value: String(k.valueLabel) });
          });
          const y = d.get((s = c.product) === null || s === void 0 ? void 0 : s.sku), v = { SKU: (l = c.product) === null || l === void 0 ? void 0 : l.sku, name: (y == null ? void 0 : y.name) || ((m = c.product) === null || m === void 0 ? void 0 : m.name), quantity: (y == null ? void 0 : y.quantity) || c.quantity, priceTotal: (y == null ? void 0 : y.priceTotal) || Gi(((g = (f = c.prices) === null || f === void 0 ? void 0 : f.price) === null || g === void 0 ? void 0 : g.value) * c.quantity) || 0, productImageUrl: (y == null ? void 0 : y.productImageUrl) || c.product.mainImageUrl, currencyCode: (y == null ? void 0 : y.currencyCode) || ((h = (b = (w = c.prices) === null || w === void 0 ? void 0 : w.price) === null || b === void 0 ? void 0 : b.currency) !== null && h !== void 0 ? h : o.storeViewCurrencyCode), discountAmount: (y == null ? void 0 : y.discountAmount) || c.discountAmount || Xi(c.product), selectedOptions: (y == null ? void 0 : y.selectedOptions) || C };
          i.push(v);
        }), i;
      }, Gi = (e) => Number(e.toFixed(2)), eu = (e) => {
        return t = void 0, n = void 0, r = function* () {
          var a, i;
          try {
            const { accountContext: d, storefrontInstanceContext: c, orderContext: u, shoppingCartContext: s, debugContext: l, customContext: m } = e.eventInfo;
            let f = {};
            m && Object.keys(m).length !== 0 && (f = m), f.commerce = f.commerce || {}, f.commerce.order = ((g, w, b) => {
              var h, C;
              let y = [];
              !((h = g == null ? void 0 : g.payments) === null || h === void 0) && h.length && (y = g.payments), y = !((C = w == null ? void 0 : w.payments) === null || C === void 0) && C.length ? w.payments.map((k) => ({ paymentAmount: Number(k.total || 0), paymentType: Qi(k.paymentMethodCode), transactionID: k != null && k.orderId ? String(k.orderId) : String(w == null ? void 0 : w.orderId), currencyCode: b == null ? void 0 : b.storeViewCurrencyCode })) : [{ paymentAmount: Number((w == null ? void 0 : w.grandTotal) || 0), paymentType: Qi(w == null ? void 0 : w.paymentMethodCode), transactionID: String(w == null ? void 0 : w.orderId), currencyCode: b == null ? void 0 : b.storeViewCurrencyCode }];
              const v = (w == null ? void 0 : w.orderType) === "instant_purchase" ? "instant_purchase" : "checkout";
              return { purchaseID: (g == null ? void 0 : g.purchaseID) || String(w == null ? void 0 : w.orderId), currencyCode: (g == null ? void 0 : g.currencyCode) || (b == null ? void 0 : b.storeViewCurrencyCode), payments: y, orderType: v, discountAmount: w == null ? void 0 : w.discountAmount };
            })(f.commerce.order, u, c), f.commerce.order.discountAmount = Number(f.commerce.order.discountAmount || (s == null ? void 0 : s.discountAmount) || 0), f.commerce.promotionID = f.commerce.promotionID || (u == null ? void 0 : u.appliedCouponCode), f.commerce.shipping = f.commerce.shipping || {}, f.commerce.shipping.shippingMethod = f.commerce.shipping.shippingMethod || ((a = u == null ? void 0 : u.shipping) === null || a === void 0 ? void 0 : a.shippingMethod), f.commerce.shipping.shippingAmount = f.commerce.shipping.shippingAmount || Number((i = u == null ? void 0 : u.shipping) === null || i === void 0 ? void 0 : i.shippingAmount) || 0, f.personalEmail = f.personalEmail || {}, f.personalEmail.address = f.personalEmail.address || (d == null ? void 0 : d.emailAddress), f.productListItems = wt(f.productListItems, s, void 0, c), f.commerce.purchases = { value: 1 }, f.commerce.commerceScope = Ne(c), f._id = l == null ? void 0 : l.eventId, f.eventType = "commerce.purchases", De(f, e);
          } catch {
            console.warn("Error in placeOrderAEP handler");
          }
        }, new ((o = void 0) || (o = Promise))(function(a, i) {
          function d(s) {
            try {
              u(r.next(s));
            } catch (l) {
              i(l);
            }
          }
          function c(s) {
            try {
              u(r.throw(s));
            } catch (l) {
              i(l);
            }
          }
          function u(s) {
            var l;
            s.done ? a(s.value) : (l = s.value, l instanceof o ? l : new o(function(m) {
              m(l);
            })).then(d, c);
          }
          u((r = r.apply(t, n || [])).next());
        });
        var t, n, o, r;
      }, tu = (e) => {
        return t = void 0, n = void 0, r = function* () {
          const { customContext: a } = e.eventInfo;
          De(a, e);
        }, new ((o = void 0) || (o = Promise))(function(a, i) {
          function d(s) {
            try {
              u(r.next(s));
            } catch (l) {
              i(l);
            }
          }
          function c(s) {
            try {
              u(r.throw(s));
            } catch (l) {
              i(l);
            }
          }
          function u(s) {
            var l;
            s.done ? a(s.value) : (l = s.value, l instanceof o ? l : new o(function(m) {
              m(l);
            })).then(d, c);
          }
          u((r = r.apply(t, n || [])).next());
        });
        var t, n, o, r;
      }, nu = () => {
        en(void 0, function(e) {
          e.trackPageView(void 0);
        });
      }, ou = (e) => {
        return t = void 0, n = void 0, r = function* () {
          const { pageContext: a, debugContext: i, customContext: d } = e.eventInfo;
          let c = {};
          d && Object.keys(d).length !== 0 && (c = d), c.web = c.web || {}, c.web.webPageDetails = c.web.webPageDetails || {}, c.web.webPageDetails.pageViews = { value: 1 }, c.web.webPageDetails.siteSection = c.web.webPageDetails.siteSection || (a == null ? void 0 : a.pageType), c.web.webPageDetails.name = c.web.webPageDetails.name || (a == null ? void 0 : a.pageName), c.web.webPageDetails.URL = window.document.URL, c.web.webReferrer = { URL: window.document.referrer }, c._id = i == null ? void 0 : i.eventId, c.eventType = "web.webpagedetails.pageViews";
          const u = yield De(c, e);
          ((s = "") => {
            document.cookie = `aep-segments-membership=${s};path=/`;
          })(((s = []) => s.map(({ segments: l }) => l.map(({ id: m }) => m)).join(",") || "")(u == null ? void 0 : u.destinations));
        }, new ((o = void 0) || (o = Promise))(function(a, i) {
          function d(s) {
            try {
              u(r.next(s));
            } catch (l) {
              i(l);
            }
          }
          function c(s) {
            try {
              u(r.throw(s));
            } catch (l) {
              i(l);
            }
          }
          function u(s) {
            var l;
            s.done ? a(s.value) : (l = s.value, l instanceof o ? l : new o(function(m) {
              m(l);
            })).then(d, c);
          }
          u((r = r.apply(t, n || [])).next());
        });
        var t, n, o, r;
      }, ru = (e) => {
        const { changedProductsContext: t, pageContext: n, productContext: o, shoppingCartContext: r } = e.eventInfo, a = (t == null ? void 0 : t.items) || (r == null ? void 0 : r.items) || [];
        a == null || a.forEach((i) => {
          let d;
          d = i.product.sku === (o == null ? void 0 : o.sku) ? Xo(o) : ((s) => {
            const l = { regularPrice: s.prices.price.value, currencyCode: s.prices.price.currency || null }, m = s.product.productId, f = { canonicalUrl: null, categories: s.product.categories || [], countryOfManufacture: null, createdAt: null, mainImageUrl: s.product.mainImageUrl, manufacturer: null, name: s.product.name, newFromDate: null, newToDate: null, productId: parseInt(m), sku: s.product.sku, pricing: l, productType: null, specialFromDate: null, specialToDate: null, topLevelSku: s.product.topLevelSku || null, updatedAt: null };
            return Xo(f);
          })(i);
          const c = nn(r), u = [d];
          c && u.push(c), Ae({ category: "product", action: "add-to-cart", property: n == null ? void 0 : n.pageType, context: u });
        });
      }, iu = (e) => {
        return t = void 0, n = void 0, r = function* () {
          const { changedProductsContext: a, shoppingCartContext: i, debugContext: d, customContext: c, storefrontInstanceContext: u } = e.eventInfo;
          let s = {};
          c && Object.keys(c).length !== 0 && (s = c), s.commerce = s.commerce || {}, s.commerce.cart = s.commerce.cart || {}, s.commerce.cart.cartID = s.commerce.cart.cartID || (i == null ? void 0 : i.id), s.productListItems = wt(s.productListItems, a, void 0, u), s.commerce.productListAdds = { value: 1 }, s.commerce.commerceScope = Ne(u), s._id = d == null ? void 0 : d.eventId, s.eventType = "commerce.productListAdds", De(s, e);
        }, new ((o = void 0) || (o = Promise))(function(a, i) {
          function d(s) {
            try {
              u(r.next(s));
            } catch (l) {
              i(l);
            }
          }
          function c(s) {
            try {
              u(r.throw(s));
            } catch (l) {
              i(l);
            }
          }
          function u(s) {
            var l;
            s.done ? a(s.value) : (l = s.value, l instanceof o ? l : new o(function(m) {
              m(l);
            })).then(d, c);
          }
          u((r = r.apply(t, n || [])).next());
        });
        var t, n, o, r;
      }, au = (e) => {
        const { pageContext: t, productContext: n, shoppingCartContext: o } = e.eventInfo, r = Xo(n), a = nn(o), i = [r];
        a && i.push(a), Ae({ category: "product", action: "view", property: t == null ? void 0 : t.pageType, context: i });
      }, su = (e) => {
        return t = void 0, n = void 0, r = function* () {
          var a, i, d, c, u, s, l;
          const { productContext: m, debugContext: f, customContext: g, storefrontInstanceContext: w } = e.eventInfo;
          let b = {};
          g && Object.keys(g).length !== 0 && (b = g);
          const h = (!((a = b.productListItems) === null || a === void 0) && a.length ? b.productListItems[0] : void 0) || {};
          h.SKU = h.SKU || (m == null ? void 0 : m.sku), h.name = h.name || (m == null ? void 0 : m.name), h.productImageUrl = h.productImageUrl || (m == null ? void 0 : m.mainImageUrl), h.priceTotal = h.priceTotal || ((d = (i = m == null ? void 0 : m.pricing) === null || i === void 0 ? void 0 : i.specialPrice) !== null && d !== void 0 ? d : (c = m == null ? void 0 : m.pricing) === null || c === void 0 ? void 0 : c.regularPrice), h.currencyCode = (h == null ? void 0 : h.currencyCode) || ((l = (s = (u = m == null ? void 0 : m.pricing) === null || u === void 0 ? void 0 : u.currencyCode) !== null && s !== void 0 ? s : w == null ? void 0 : w.storeViewCurrencyCode) !== null && l !== void 0 ? l : void 0), h.discountAmount = (h == null ? void 0 : h.discountAmount) || Xi(m), b.productListItems = [h], b.commerce = b.commerce || {}, b.commerce.productViews = { value: 1 }, b.commerce.commerceScope = Ne(w), b._id = f == null ? void 0 : f.eventId, b.eventType = "commerce.productViews", De(b, e);
        }, new ((o = void 0) || (o = Promise))(function(a, i) {
          function d(s) {
            try {
              u(r.next(s));
            } catch (l) {
              i(l);
            }
          }
          function c(s) {
            try {
              u(r.throw(s));
            } catch (l) {
              i(l);
            }
          }
          function u(s) {
            var l;
            s.done ? a(s.value) : (l = s.value, l instanceof o ? l : new o(function(m) {
              m(l);
            })).then(d, c);
          }
          u((r = r.apply(t, n || [])).next());
        });
        var t, n, o, r;
      }, cu = (e) => {
        return t = void 0, n = void 0, r = function* () {
          const { changedProductsContext: a, shoppingCartContext: i, debugContext: d, customContext: c, storefrontInstanceContext: u } = e.eventInfo;
          let s = {};
          c && Object.keys(c).length !== 0 && (s = c), s.commerce = s.commerce || {}, s.commerce.cart = s.commerce.cart || {}, s.commerce.cart.cartID = s.commerce.cart.cartID || (i == null ? void 0 : i.id), s.productListItems = wt(s.productListItems, a, void 0, u), s.commerce.productListRemovals = { value: 1 }, s.commerce.commerceScope = Ne(u), s._id = d == null ? void 0 : d.eventId, s.eventType = "commerce.productListRemovals", De(s, e);
        }, new ((o = void 0) || (o = Promise))(function(a, i) {
          function d(s) {
            try {
              u(r.next(s));
            } catch (l) {
              i(l);
            }
          }
          function c(s) {
            try {
              u(r.throw(s));
            } catch (l) {
              i(l);
            }
          }
          function u(s) {
            var l;
            s.done ? a(s.value) : (l = s.value, l instanceof o ? l : new o(function(m) {
              m(l);
            })).then(d, c);
          }
          u((r = r.apply(t, n || [])).next());
        });
        var t, n, o, r;
      }, uu = (e) => {
        const { unitId: t, productId: n, pageContext: o, recommendationsContext: r } = e.eventInfo, a = [], i = tn(t, r);
        i && a.push(i);
        const d = $n(t, n, r);
        d && a.push(d);
        const c = Go(t, n, r);
        Ae({ category: "recommendation-unit", action: "rec-add-to-cart-click", property: o == null ? void 0 : o.pageType, value: c == null ? void 0 : c.rank, context: a });
      }, du = (e) => {
        const { unitId: t, productId: n, pageContext: o, recommendationsContext: r } = e.eventInfo, a = [], i = tn(t, r);
        i && a.push(i);
        const d = $n(t, n, r);
        d && a.push(d);
        const c = Go(t, n, r);
        Ae({ category: "recommendation-unit", action: "rec-click", property: o == null ? void 0 : o.pageType, value: c == null ? void 0 : c.rank, context: a });
      }, lu = (e) => {
        const { pageContext: t } = e.eventInfo;
        Ae({ category: "recommendation-unit", action: "api-request-sent", property: t == null ? void 0 : t.pageType });
      }, mu = (e) => {
        const { pageContext: t, recommendationsContext: n } = e.eventInfo, o = [], r = [];
        n == null || n.units.forEach((a) => {
          const i = tn(a.unitId, n);
          i && o.push(i), a.products.forEach((d) => {
            {
              const c = $n(a.unitId, d.productId, n);
              c && r.push(c);
            }
          });
        }), Ae({ category: "recommendation-unit", action: "api-response-received", property: t == null ? void 0 : t.pageType, context: [...o, ...r] });
      }, pu = (e) => {
        const { unitId: t, pageContext: n, recommendationsContext: o } = e.eventInfo, r = [], a = tn(t, o);
        a && r.push(a);
        const i = _n(t, o);
        i == null || i.products.forEach((d) => {
          const c = $n(t, d.productId, o);
          c && r.push(c);
        }), Ae({ category: "recommendation-unit", action: "impression-render", property: n == null ? void 0 : n.pageType, context: r });
      }, fu = (e) => {
        const { unitId: t, pageContext: n, recommendationsContext: o } = e.eventInfo, r = [], a = tn(t, o);
        a && r.push(a), Ae({ category: "recommendation-unit", action: "view", property: n == null ? void 0 : n.pageType, context: r });
      }, Vn = (e, t) => {
        var n;
        const o = e || {};
        return o.ID = (o == null ? void 0 : o.ID) || ((n = t == null ? void 0 : t.id) === null || n === void 0 ? void 0 : n.toString()), o.name = (o == null ? void 0 : o.name) || (t == null ? void 0 : t.name), o.description = (o == null ? void 0 : o.description) || (t == null ? void 0 : t.description), o;
      }, gu = (e) => {
        return t = void 0, n = void 0, r = function* () {
          const { accountContext: a, debugContext: i, requisitionListContext: d, customContext: c, storefrontInstanceContext: u } = e.eventInfo;
          let s = {};
          c && Object.keys(c).length !== 0 && (s = c), s.commerce = s.commerce || {}, s.commerce.requisitionList = Vn(s.commerce.requisitionList, d), s.personalEmail = s.personalEmail || {}, s.personalEmail.address = s.personalEmail.address || (a == null ? void 0 : a.emailAddress), s.commerce.requisitionListOpens = { value: 1 }, s.commerce.commerceScope = Ne(u), s._id = i == null ? void 0 : i.eventId, s.eventType = "commerce.requisitionListOpens", De(s, e);
        }, new ((o = void 0) || (o = Promise))(function(a, i) {
          function d(s) {
            try {
              u(r.next(s));
            } catch (l) {
              i(l);
            }
          }
          function c(s) {
            try {
              u(r.throw(s));
            } catch (l) {
              i(l);
            }
          }
          function u(s) {
            var l;
            s.done ? a(s.value) : (l = s.value, l instanceof o ? l : new o(function(m) {
              m(l);
            })).then(d, c);
          }
          u((r = r.apply(t, n || [])).next());
        });
        var t, n, o, r;
      }, vu = (e) => {
        return t = void 0, n = void 0, r = function* () {
          const { accountContext: a, debugContext: i, requisitionListContext: d, customContext: c, storefrontInstanceContext: u } = e.eventInfo;
          let s = {};
          c && Object.keys(c).length !== 0 && (s = c), s.commerce = s.commerce || {}, s.commerce.requisitionList = Vn(s.commerce.requisitionList, d), s.personalEmail = s.personalEmail || {}, s.personalEmail.address = s.personalEmail.address || (a == null ? void 0 : a.emailAddress), s.commerce.requisitionListDeletes = { value: 1 }, s.commerce.commerceScope = Ne(u), s._id = i == null ? void 0 : i.eventId, s.eventType = "commerce.requisitionListDeletes", De(s, e);
        }, new ((o = void 0) || (o = Promise))(function(a, i) {
          function d(s) {
            try {
              u(r.next(s));
            } catch (l) {
              i(l);
            }
          }
          function c(s) {
            try {
              u(r.throw(s));
            } catch (l) {
              i(l);
            }
          }
          function u(s) {
            var l;
            s.done ? a(s.value) : (l = s.value, l instanceof o ? l : new o(function(m) {
              m(l);
            })).then(d, c);
          }
          u((r = r.apply(t, n || [])).next());
        });
        var t, n, o, r;
      }, hu = (e) => {
        return t = void 0, n = void 0, r = function* () {
          const { accountContext: a, changedProductsContext: i, requisitionListContext: d, requisitionListItemsContext: c, orderPageContext: u, debugContext: s, customContext: l, storefrontInstanceContext: m } = e.eventInfo;
          let f = {};
          l && Object.keys(l).length !== 0 && (f = l), f.commerce = f.commerce || {}, f.commerce.requisitionList = Vn(f.commerce.requisitionList, d);
          const g = c || u;
          f.productListItems = wt(f.productListItems, i, g, m), f.personalEmail = f.personalEmail || {}, f.personalEmail.address = f.personalEmail.address || (a == null ? void 0 : a.emailAddress), f.commerce.requisitionListAdds = { value: 1 }, f.commerce.commerceScope = Ne(m), f._id = s == null ? void 0 : s.eventId, f.eventType = "commerce.requisitionListAdds", De(f, e);
        }, new ((o = void 0) || (o = Promise))(function(a, i) {
          function d(s) {
            try {
              u(r.next(s));
            } catch (l) {
              i(l);
            }
          }
          function c(s) {
            try {
              u(r.throw(s));
            } catch (l) {
              i(l);
            }
          }
          function u(s) {
            var l;
            s.done ? a(s.value) : (l = s.value, l instanceof o ? l : new o(function(m) {
              m(l);
            })).then(d, c);
          }
          u((r = r.apply(t, n || [])).next());
        });
        var t, n, o, r;
      }, yu = (e) => {
        return t = void 0, n = void 0, r = function* () {
          const { accountContext: a, requisitionListItemsContext: i, debugContext: d, customContext: c, requisitionListContext: u, storefrontInstanceContext: s } = e.eventInfo;
          let l = {};
          c && Object.keys(c).length !== 0 && (l = c), l.commerce = l.commerce || {}, l.commerce.requisitionList = Vn(l.commerce.requisitionList, u), l.productListItems = wt(l.productListItems, void 0, i, s), l.personalEmail = l.personalEmail || {}, l.personalEmail.address = l.personalEmail.address || (a == null ? void 0 : a.emailAddress), l.commerce.requisitionListRemovals = { value: 1 }, l.commerce.commerceScope = Ne(s), l._id = d == null ? void 0 : d.eventId, l.eventType = "commerce.requisitionListRemovals", De(l, e);
        }, new ((o = void 0) || (o = Promise))(function(a, i) {
          function d(s) {
            try {
              u(r.next(s));
            } catch (l) {
              i(l);
            }
          }
          function c(s) {
            try {
              u(r.throw(s));
            } catch (l) {
              i(l);
            }
          }
          function u(s) {
            var l;
            s.done ? a(s.value) : (l = s.value, l instanceof o ? l : new o(function(m) {
              m(l);
            })).then(d, c);
          }
          u((r = r.apply(t, n || [])).next());
        });
        var t, n, o, r;
      }, wu = (e) => {
        const { searchUnitId: t, name: n, pageContext: o, searchResultsContext: r } = e.eventInfo, a = Dt(t, r), i = ((c, u, s) => {
          const l = window.magentoStorefrontEvents, m = s ?? l.context.getSearchResults();
          if (!m)
            return { schema: $i, data: {} };
          const f = Bn(c, m);
          if (!f)
            return null;
          const g = ((w, b) => b.categories.find((h) => h.name === w) || null)(u, f);
          return g ? { schema: $i, data: { name: g.name, url: g.url, rank: g.rank } } : null;
        })(t, n, r), d = [];
        a && d.push(a), i && d.push(i), Ae({ category: "search", action: "category-click", label: i == null ? void 0 : i.data.url, property: o == null ? void 0 : o.pageType, context: d });
      }, bu = (e) => {
        const { searchUnitId: t, sku: n, pageContext: o, searchResultsContext: r } = e.eventInfo, a = Dt(t, r), i = ((c, u, s) => {
          const l = window.magentoStorefrontEvents, m = s ?? l.context.getSearchResults();
          if (!m)
            return { schema: Bi, data: {} };
          const f = Bn(c, m);
          if (!f)
            return null;
          const g = ((w, b) => b.products.find((h) => h.sku === w) || null)(u, f);
          return g ? { schema: Bi, data: { name: g.name, sku: g.sku, url: g.url, imageUrl: g.imageUrl, price: g.price, rank: g.rank } } : null;
        })(t, n, r), d = [];
        a && d.push(a), i && d.push(i), Ae({ category: "search", action: "product-click", label: i == null ? void 0 : i.data.sku, property: o == null ? void 0 : o.pageType, context: d });
      }, Cu = (e) => {
        const { searchUnitId: t, pageContext: n, searchInputContext: o } = e.eventInfo, r = Wi(t, o), a = [];
        r && a.push(r), Ae({ category: "search", action: "api-request-sent", label: r == null ? void 0 : r.data.searchRequestId, property: n == null ? void 0 : n.pageType, context: a });
      }, Iu = (e) => {
        return t = void 0, n = void 0, r = function* () {
          var a, i;
          const { searchUnitId: d, searchInputContext: c, debugContext: u, storefrontInstanceContext: s, customContext: l } = e.eventInfo;
          let m = {};
          const f = Wi(d, c);
          l && Object.keys(l).length !== 0 && (m = l);
          const g = ((a = f == null ? void 0 : f.data.sort) !== null && a !== void 0 ? a : []).map((b) => ({ attribute: b.attribute, order: b.direction })), w = ((i = f == null ? void 0 : f.data.filter) !== null && i !== void 0 ? i : []).map((b) => {
            let h = [], C = !1;
            return b.eq ? h.push(b.eq) : b.in ? h = b.in : b.range && (C = !0, h.push(String(b.range.from)), h.push(String(b.range.to))), { attribute: b.attribute, value: h, isRange: C };
          });
          m.siteSearch = { query: c == null ? void 0 : c.units[0].phrase, sort: g, refinements: w }, m.searchRequest = { value: 1 }, f && (m.searchRequest.id = f.data.searchRequestId), m.commerce = m.commerce || {}, m.commerce.commerceScope = Ne(s), m._id = u == null ? void 0 : u.eventId, m.eventType = "searchRequest", De(m, e);
        }, new ((o = void 0) || (o = Promise))(function(a, i) {
          function d(s) {
            try {
              u(r.next(s));
            } catch (l) {
              i(l);
            }
          }
          function c(s) {
            try {
              u(r.throw(s));
            } catch (l) {
              i(l);
            }
          }
          function u(s) {
            var l;
            s.done ? a(s.value) : (l = s.value, l instanceof o ? l : new o(function(m) {
              m(l);
            })).then(d, c);
          }
          u((r = r.apply(t, n || [])).next());
        });
        var t, n, o, r;
      }, xu = (e) => {
        const { searchUnitId: t, pageContext: n, searchResultsContext: o } = e.eventInfo, r = Dt(t, o), a = [];
        r && a.push(r), Ae({ category: "search", action: "api-response-received", label: r == null ? void 0 : r.data.searchRequestId, property: n == null ? void 0 : n.pageType, context: a });
      }, Eu = (e) => {
        return t = void 0, n = void 0, r = function* () {
          var a, i, d, c, u;
          const { searchUnitId: s, searchResultsContext: l, debugContext: m, storefrontInstanceContext: f, customContext: g } = e.eventInfo, w = Dt(s, l), b = ((i = (a = w == null ? void 0 : w.data) === null || a === void 0 ? void 0 : a.suggestions) !== null && i !== void 0 ? i : []).map((y) => y.suggestion), h = ((c = (d = w == null ? void 0 : w.data) === null || d === void 0 ? void 0 : d.products) !== null && c !== void 0 ? c : []).map((y) => ({ SKU: y.sku, name: y.name, productImageUrl: y.imageUrl }));
          let C = {};
          g && Object.keys(g).length !== 0 && (C = g), C.siteSearch = { suggestions: b, numberOfResults: (u = w == null ? void 0 : w.data) === null || u === void 0 ? void 0 : u.productCount }, C.productListItems = h, C.searchResponse = { value: 1 }, w && (C.searchResponse.id = w.data.searchRequestId), C.commerce = C.commerce || {}, C.commerce.commerceScope = Ne(f), C._id = m == null ? void 0 : m.eventId, C.eventType = "searchResponse", De(C, e);
        }, new ((o = void 0) || (o = Promise))(function(a, i) {
          function d(s) {
            try {
              u(r.next(s));
            } catch (l) {
              i(l);
            }
          }
          function c(s) {
            try {
              u(r.throw(s));
            } catch (l) {
              i(l);
            }
          }
          function u(s) {
            var l;
            s.done ? a(s.value) : (l = s.value, l instanceof o ? l : new o(function(m) {
              m(l);
            })).then(d, c);
          }
          u((r = r.apply(t, n || [])).next());
        });
        var t, n, o, r;
      }, Su = (e) => {
        const { searchUnitId: t, pageContext: n, searchResultsContext: o } = e.eventInfo, r = Dt(t, o), a = [];
        r && a.push(r), Ae({ category: "search", action: "results-view", label: r == null ? void 0 : r.data.searchRequestId, property: n == null ? void 0 : n.pageType, context: a });
      }, ku = (e) => {
        const { searchUnitId: t, pageContext: n, searchResultsContext: o } = e.eventInfo, r = Dt(t, o), a = [];
        r && a.push(r), Ae({ category: "search", action: "category-page", label: r == null ? void 0 : r.data.searchRequestId, property: n == null ? void 0 : n.pageType, context: a });
      }, Du = (e) => {
        const { searchUnitId: t, suggestion: n, pageContext: o, searchResultsContext: r } = e.eventInfo, a = Dt(t, r), i = ((c, u, s) => {
          const l = window.magentoStorefrontEvents, m = s ?? l.context.getSearchResults();
          if (!m)
            return { schema: Fi, data: {} };
          const f = Bn(c, m);
          if (!f)
            return null;
          const g = ((w, b) => b.suggestions.find((h) => h.suggestion === w) || null)(u, f);
          return g ? { schema: Fi, data: { suggestion: g.suggestion, rank: g.rank } } : null;
        })(t, n, r), d = [];
        a && d.push(a), i && d.push(i), Ae({ category: "search", action: "suggestion-click", label: i == null ? void 0 : i.data.suggestion, property: o == null ? void 0 : o.pageType, context: d });
      }, Pu = (e) => {
        const { pageContext: t, shoppingCartContext: n } = e.eventInfo, o = nn(n), r = [];
        o && r.push(o), Ae({ category: "shopping-cart", action: "initiate-checkout", property: t == null ? void 0 : t.pageType, context: r });
      }, Tu = (e) => {
        return t = void 0, n = void 0, r = function* () {
          try {
            const { shoppingCartContext: a, debugContext: i, storefrontInstanceContext: d, customContext: c } = e.eventInfo;
            let u = {};
            c && Object.keys(c).length !== 0 && (u = c), u.commerce = u.commerce || {}, u.commerce.order = u.commerce.order || {}, u.commerce.order.discountAmount = Number((a == null ? void 0 : a.discountAmount) || 0), u.commerce.cart = u.commerce.cart || {}, u.commerce.cart.cartID = u.commerce.cart.cartID || (a == null ? void 0 : a.id), u.productListItems = wt(u.productListItems, a, void 0, d), u.commerce.checkouts = { value: 1 }, u.commerce.commerceScope = Ne(d), u._id = i == null ? void 0 : i.eventId, u.eventType = "commerce.checkouts", De(u, e);
          } catch {
            console.warn("Error in shoppingCart initiateCheckout AEP handler");
          }
        }, new ((o = void 0) || (o = Promise))(function(a, i) {
          function d(s) {
            try {
              u(r.next(s));
            } catch (l) {
              i(l);
            }
          }
          function c(s) {
            try {
              u(r.throw(s));
            } catch (l) {
              i(l);
            }
          }
          function u(s) {
            var l;
            s.done ? a(s.value) : (l = s.value, l instanceof o ? l : new o(function(m) {
              m(l);
            })).then(d, c);
          }
          u((r = r.apply(t, n || [])).next());
        });
        var t, n, o, r;
      }, Ru = (e) => {
        return t = void 0, n = void 0, r = function* () {
          const { changedProductsContext: a, shoppingCartContext: i, debugContext: d, storefrontInstanceContext: c, customContext: u } = e.eventInfo;
          let s = {};
          u && Object.keys(u).length !== 0 && (s = u), s.commerce = s.commerce || {}, s.commerce.cart = s.commerce.cart || {}, s.commerce.cart.cartID = s.commerce.cart.cartID || (i == null ? void 0 : i.id), s.productListItems = wt(s.productListItems, a, void 0, c), s.commerce.productListOpens = { value: 1 }, s.commerce.commerceScope = Ne(c), s._id = d == null ? void 0 : d.eventId, s.eventType = "commerce.productListOpens", De(s, e);
        }, new ((o = void 0) || (o = Promise))(function(a, i) {
          function d(s) {
            try {
              u(r.next(s));
            } catch (l) {
              i(l);
            }
          }
          function c(s) {
            try {
              u(r.throw(s));
            } catch (l) {
              i(l);
            }
          }
          function u(s) {
            var l;
            s.done ? a(s.value) : (l = s.value, l instanceof o ? l : new o(function(m) {
              m(l);
            })).then(d, c);
          }
          u((r = r.apply(t, n || [])).next());
        });
        var t, n, o, r;
      }, Ou = (e) => {
        const { pageContext: t, shoppingCartContext: n } = e.eventInfo, o = nn(n), r = [];
        o && r.push(o), Ae({ category: "shopping-cart", action: "view", property: t == null ? void 0 : t.pageType, context: r });
      }, Au = (e) => {
        return t = void 0, n = void 0, r = function* () {
          try {
            const { shoppingCartContext: a, debugContext: i, storefrontInstanceContext: d, customContext: c } = e.eventInfo;
            let u = {};
            c && Object.keys(c).length !== 0 && (u = c), u.commerce = u.commerce || {}, u.commerce.order = u.commerce.order || {}, u.commerce.order.discountAmount = Number((a == null ? void 0 : a.discountAmount) || 0), u.commerce.cart = u.commerce.cart || {}, u.commerce.cart.cartID = u.commerce.cart.cartID || (a == null ? void 0 : a.id), u.productListItems = wt(u.productListItems, a, void 0, d), u.commerce.productListViews = { value: 1 }, u.commerce.commerceScope = Ne(d), u._id = i == null ? void 0 : i.eventId, u.eventType = "commerce.productListViews", De(u, e);
          } catch {
            console.warn("Error in shoppingCart view AEP handler");
          }
        }, new ((o = void 0) || (o = Promise))(function(a, i) {
          function d(s) {
            try {
              u(r.next(s));
            } catch (l) {
              i(l);
            }
          }
          function c(s) {
            try {
              u(r.throw(s));
            } catch (l) {
              i(l);
            }
          }
          function u(s) {
            var l;
            s.done ? a(s.value) : (l = s.value, l instanceof o ? l : new o(function(m) {
              m(l);
            })).then(d, c);
          }
          u((r = r.apply(t, n || [])).next());
        });
        var t, n, o, r;
      };
      var Pt = {}, Fe = {};
      function Yi(e, t, n) {
        for (var o, r, a, i, d, c; (o = t.parentElement) !== null && o != null && (r = t.tagName.toUpperCase()) !== "A" && r !== "AREA"; )
          t = o;
        var u, s = t;
        if (s.href != null) {
          var l = s.hostname || Mn(s.href), m = l.toLowerCase(), f = s.href.replace(l, m);
          new RegExp("^(javascript|vbscript|jscript|mocha|livescript|ecmascript|mailto):", "i").test(f) || (a = s.id, i = Ai(s), d = s.target, c = Fe[e.id].linkTrackingContent ? s.innerHTML : void 0, f = unescape(f), e.core.track(function(g) {
            var w = g.event, b = w.schema, h = w.data, C = An(), y = { schema: "iglu:com.snowplowanalytics.snowplow/unstruct_event/jsonschema/1-0-0", data: { schema: b, data: h } };
            return C.add("e", "ue"), C.addJson("ue_px", "ue_pr", y), C;
          }({ event: { schema: "iglu:com.snowplowanalytics.snowplow/link_click/jsonschema/1-0-1", data: Ac({ targetUrl: (u = { targetUrl: f, elementId: a, elementClasses: i, elementTarget: d, elementContent: c }).targetUrl, elementId: u.elementId, elementClasses: u.elementClasses, elementTarget: u.elementTarget, elementContent: u.elementContent }) } }), function(g) {
            for (var w, b = [], h = 1; h < arguments.length; h++)
              b[h - 1] = arguments[h];
            return (w = g == null ? void 0 : g.map(function(C) {
              if (typeof C != "function")
                return C;
              try {
                return C.apply(void 0, b);
              } catch {
                return;
              }
            }).filter(Boolean)) !== null && w !== void 0 ? w : [];
          }(n, t)));
        }
      }
      function Yo(e, t) {
        return function(n) {
          var o, r;
          o = (n = n || window.event).which || n.button, r = n.target || n.srcElement, n.type === "click" ? r && Yi(Pt[e], r, t) : n.type === "mousedown" ? o !== 1 && o !== 2 || !r ? Fe[e].lastButton = Fe[e].lastTarget = null : (Fe[e].lastButton = o, Fe[e].lastTarget = r) : n.type === "mouseup" && (o === Fe[e].lastButton && r === Fe[e].lastTarget && Yi(Pt[e], r, t), Fe[e].lastButton = Fe[e].lastTarget = null);
        };
      }
      function qu(e, t) {
        Fe[e].linkTrackingPseudoClicks ? (Ze(t, "mouseup", Yo(e, Fe[e].linkTrackingContext), !1), Ze(t, "mousedown", Yo(e, Fe[e].linkTrackingContext), !1)) : Ze(t, "click", Yo(e, Fe[e].linkTrackingContext), !1);
      }
      function Ki(e, t) {
        var n = e === void 0 ? {} : e, o = n.options, r = n.pseudoClicks, a = n.trackContent, i = n.context;
        Fe[t] = { linkTrackingContent: a, linkTrackingContext: i, linkTrackingPseudoClicks: r, linkTrackingFilter: Lc(o) };
      }
      function Zi(e) {
        var t, n, o, r = document.links;
        for (o = 0; o < r.length; o++)
          !((n = (t = Fe[e]).linkTrackingFilter) === null || n === void 0) && n.call(t, r[o]) && !r[o][e] && (qu(e, r[o]), r[o][e] = !0);
      }
      const ju = ({ appId: e, collectorUrl: t, collectorPath: n }) => {
        (function(i, d, c) {
          c === void 0 && (c = {}), Ni && function(u, s, l, m, f, g) {
            Zt.hasOwnProperty(u) || (Zt[u] = _c(u, s, l, m, f, g), Zt[u]);
          }(i, i, "js-".concat("3.15.0"), d, Ni, c);
        })("sp", t, { appId: e, platform: "web", discoverRootDomain: !0, cookieName: "mg", encodeBase64: !0, respectDoNotTrack: !1, sessionCookieTimeout: 1800, eventMethod: "beacon", bufferSize: 1, maxPostBytes: 4e4, crossDomainLinker: void 0, cookieLifetime: 63072e3, stateStorageStrategy: "localStorage", postPath: n, contexts: { session: !1, webPage: !0 }, plugins: [{ contexts: function() {
          return c = (d = (i = window).performance || i.mozPerformance || i.msPerformance || i.webkitPerformance).timing, d ? [{ schema: "iglu:org.w3/PerformanceTiming/jsonschema/1-0-0", data: { navigationStart: c.navigationStart, redirectStart: c.redirectStart, redirectEnd: c.redirectEnd, fetchStart: c.fetchStart, domainLookupStart: c.domainLookupStart, domainLookupEnd: c.domainLookupEnd, connectStart: c.connectStart, secureConnectionStart: c.secureConnectionStart, connectEnd: c.connectEnd, requestStart: c.requestStart, responseStart: c.responseStart, responseEnd: c.responseEnd, unloadEventStart: c.unloadEventStart, unloadEventEnd: c.unloadEventEnd, domLoading: c.domLoading, domInteractive: c.domInteractive, domContentLoadedEventStart: c.domContentLoadedEventStart, domContentLoadedEventEnd: c.domContentLoadedEventEnd, domComplete: c.domComplete, loadEventStart: c.loadEventStart, loadEventEnd: c.loadEventEnd, msFirstPaint: c.msFirstPaint, chromeFirstPaint: c.chromeFirstPaint, requestEnd: c.requestEnd, proxyStart: c.proxyStart, proxyEnd: c.proxyEnd } }] : [];
          var i, d, c;
        } }, { activateBrowserPlugin: function(i) {
          Pt[i.id] = i;
        } }] });
        const r = Gc();
        var a;
        a = r, en(void 0, function(i) {
          i.core.addGlobalContexts(a);
        }), en(void 0, function(i) {
          i.setOptOutCookie("mg_dnt");
        }), function(i, d) {
          en(void 0, function(c) {
            c.enableActivityTracking(i);
          });
        }({ minimumVisitLength: 5, heartbeatDelay: 5 }), function(i, d) {
          i === void 0 && (i = {}), d === void 0 && (d = Object.keys(Pt)), d.forEach(function(c) {
            Pt[c] && (Pt[c].sharedState.hasLoaded ? (Ki(i, c), Zi(c)) : Pt[c].sharedState.registeredOnLoadHandlers.push(function() {
              Ki(i, c), Zi(c);
            }));
          });
        }();
      };
      var Ko = function(e, t, n, o) {
        return new (n || (n = Promise))(function(r, a) {
          function i(u) {
            try {
              c(o.next(u));
            } catch (s) {
              a(s);
            }
          }
          function d(u) {
            try {
              c(o.throw(u));
            } catch (s) {
              a(s);
            }
          }
          function c(u) {
            var s;
            u.done ? r(u.value) : (s = u.value, s instanceof n ? s : new n(function(l) {
              l(s);
            })).then(i, d);
          }
          c((o = o.apply(e, [])).next());
        });
      };
      const Nu = () => Ko(void 0, void 0, void 0, function* () {
        try {
          const t = window.magentoStorefrontEvents.context.getAEP().webSdkName;
          if (t)
            e = t, On(void 0, void 0, void 0, function* () {
              try {
                if (!window.hasOwnProperty(e))
                  throw new Error();
                _t = window[e];
              } catch {
                throw new Error(`Could not find Alloy Instance: ${e}`);
              }
            });
          else {
            if (!gi())
              return;
            const o = "alloy";
            ((a) => {
              return i = window, void [a].forEach(function(d) {
                i[d] || ((i.__alloyNS = i.__alloyNS || []).push(d), i[d] = function() {
                  const c = arguments;
                  return new Promise(function(u, s) {
                    i[d].q.push([u, s, c]);
                  });
                }, i[d].q = []);
              });
              var i;
            })(o);
            const r = yield ((a) => On(void 0, void 0, void 0, function* () {
              const i = ((d) => {
                const c = window.magentoStorefrontEvents, u = d ?? c.context.getAEP();
                return u ? { imsOrgId: u.imsOrgId, datastreamId: u.datastreamId, edgeDomain: u.edgeDomain, webSdkName: u.webSdkName } : {};
              })();
              if (i.datastreamId && i.imsOrgId) {
                const d = { edgeConfigId: i.datastreamId, orgId: i.imsOrgId, defaultConsent: "pending" };
                return i.edgeDomain && i.edgeDomain !== "" && (d.edgeDomain = i.edgeDomain), yield a("configure", d), _t = a, _t;
              }
              return Promise.reject();
            }))(((a = {}) => {
              const i = He({ name: _e().default("alloy"), monitors: Et(He({})).default([]) }).noUnknownFields(), { name: d, monitors: c } = i(a), u = (({ console: l, locationSearch: m, createLogger: f, instanceName: g, createNamespacedStorage: w, getMonitors: b }) => {
                const h = Er.parse(m), C = w(`instance.${g}.`), y = C.session.getItem("debug");
                let v = y === "true", k = y === null;
                const I = () => v, x = (T, { fromConfig: q }) => {
                  q && !k || (v = T), q || (C.session.setItem("debug", T.toString()), k = !1);
                };
                var D;
                return h.alloy_debug !== void 0 && x((D = h.alloy_debug, vn(D) && D.toLowerCase() === "true"), { fromConfig: !1 }), { setDebugEnabled: x, logger: f({ getDebugEnabled: I, context: { instanceName: g }, getMonitors: b, console: l }), createComponentLogger: (T) => f({ getDebugEnabled: I, context: { instanceName: g, componentName: T }, getMonitors: b, console: l }) };
              })({ console: Ec, locationSearch: window.location.search, createLogger: gc, instanceName: d, createNamespacedStorage: Sc, getMonitors: () => (window.__alloyMonitors || []).concat(c) }), s = xc({ instanceName: d, logController: u });
              return u.logger.logOnInstanceCreated({ instance: s }), s;
            })({ name: o }));
            window.alloy = r;
          }
          const n = setInterval(() => Ko(void 0, void 0, void 0, function* () {
            try {
              yield On(void 0, void 0, void 0, function* () {
                const o = document.cookie.indexOf("mg_dnt") !== -1;
                yield _t("setConsent", { consent: [{ standard: "Adobe", version: "1.0", value: { general: o ? "out" : "in" } }] });
              });
            } catch {
              clearInterval(n), console.warn("Alloy consent could not be set.");
            }
          }), 1e3);
        } catch {
          console.warn("Alloy could not be configured.");
        }
        var e;
      }), Zo = () => Ko(void 0, void 0, void 0, function* () {
        const { context: e } = window.magentoStorefrontEvents, t = e.getEventForwarding(), n = (t == null ? void 0 : t.commerce) !== !1, o = !(!(t != null && t.aep) || !gi());
        n && ju({ appId: "magento-storefront-event-collector", collectorUrl: "https://commerce.adobedc.net", collectorPath: "/collector/tp2" }), o && (yield Nu()), ((r, a) => {
          const i = window.magentoStorefrontEvents;
          if (r)
            try {
              i.subscribe.addToCart(ru), i.subscribe.initiateCheckout(Pu), i.subscribe.pageView(nu), i.subscribe.placeOrder(Zc), i.subscribe.productPageView(au), i.subscribe.recsItemAddToCartClick(uu), i.subscribe.recsItemClick(du), i.subscribe.recsRequestSent(lu), i.subscribe.recsResponseReceived(mu), i.subscribe.recsUnitRender(pu), i.subscribe.recsUnitView(fu), i.subscribe.searchCategoryClick(wu), i.subscribe.searchProductClick(bu), i.subscribe.searchRequestSent(Cu), i.subscribe.searchResponseReceived(xu), i.subscribe.searchResultsView(Su), i.subscribe.categoryResultsView(ku), i.subscribe.searchSuggestionClick(Du), i.subscribe.shoppingCartView(Ou);
            } catch (d) {
              console.error(`error subscribing to Commerce events: ${JSON.stringify(d)}`);
            }
          if (a)
            try {
              i.subscribe.addToCart(iu), i.subscribe.addToRequisitionList(hu), i.subscribe.custom(tu), i.subscribe.createAccount(kc), i.subscribe.createRequisitionList(gu), i.subscribe.deleteRequisitionList(vu), i.subscribe.editAccount(Dc), i.subscribe.initiateCheckout(Tu), i.subscribe.openCart(Ru), i.subscribe.pageView(ou), i.subscribe.placeOrder(eu), i.subscribe.productPageView(su), i.subscribe.removeFromCart(cu), i.subscribe.removeFromRequisitionList(yu), i.subscribe.searchRequestSent(Iu), i.subscribe.searchResponseReceived(Eu), i.subscribe.shoppingCartView(Au), i.subscribe.signIn(Pc), i.subscribe.signOut(Tc);
            } catch (d) {
              console.error(`error subscribing to Experience events: ${JSON.stringify(d)}`);
            }
        })(n, o);
      });
      window.magentoStorefrontEvents ? Zo() : window.addEventListener("message", (e) => {
        e.data === "magento-storefront-events-sdk" && window.magentoStorefrontEvents && (Zo(), window.removeEventListener("message", Zo));
      }, !1);
    })(), ka.default;
  })());
})(Yu);
const ed = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
export {
  ed as i
};
