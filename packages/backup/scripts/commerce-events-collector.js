/*! For license information please see index.js.LICENSE.txt */
!(function (e, t) {
	'object' == typeof exports && 'object' == typeof module
		? (module.exports = t())
		: 'function' == typeof define && define.amd
			? define('magentoStorefrontEventCollector', [], t)
			: 'object' == typeof exports
				? (exports.magentoStorefrontEventCollector = t())
				: (e.magentoStorefrontEventCollector = t());
})(self, () =>
	(() => {
		var e = {
				494: (e, t, n) => {
					'use strict';
					var o = n(34);
					e.exports = { get: o.get, set: o.set, remove: o.remove };
				},
				59: (e, t, n) => {
					'use strict';
					var o = n(811);
					e.exports = function (e) {
						var t = document.createElement('script');
						(t.src = e), (t.async = !0);
						var n = (function (e, t) {
							return new o(function (n, o) {
								(t.onload = function () {
									n(t);
								}),
									(t.onerror = function () {
										o(new Error('Failed to load script ' + e));
									});
							});
						})(e, t);
						return document.getElementsByTagName('head')[0].appendChild(t), n;
					};
				},
				739: (e, t, n) => {
					'use strict';
					e.exports = n(320);
				},
				811: (e, t, n) => {
					'use strict';
					e.exports =
						('undefined' != typeof window && window.Promise) ||
						(void 0 !== n.g && n.g.Promise) ||
						n(214).default ||
						n(214);
				},
				308: (e, t, n) => {
					'use strict';
					var o = n(642);
					e.exports = {
						parse: function (e) {
							return (
								'string' == typeof e && (e = e.trim().replace(/^[?#&]/, '')),
								o.parse(e)
							);
						},
						stringify: function (e) {
							return o.stringify(e);
						},
					};
				},
				792: (e) => {
					var t = {
						utf8: {
							stringToBytes: function (e) {
								return t.bin.stringToBytes(unescape(encodeURIComponent(e)));
							},
							bytesToString: function (e) {
								return decodeURIComponent(escape(t.bin.bytesToString(e)));
							},
						},
						bin: {
							stringToBytes: function (e) {
								for (var t = [], n = 0; n < e.length; n++)
									t.push(255 & e.charCodeAt(n));
								return t;
							},
							bytesToString: function (e) {
								for (var t = [], n = 0; n < e.length; n++)
									t.push(String.fromCharCode(e[n]));
								return t.join('');
							},
						},
					};
					e.exports = t;
				},
				562: (e) => {
					var t, n;
					(t =
						'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'),
						(n = {
							rotl: function (e, t) {
								return (e << t) | (e >>> (32 - t));
							},
							rotr: function (e, t) {
								return (e << (32 - t)) | (e >>> t);
							},
							endian: function (e) {
								if (e.constructor == Number)
									return (
										(16711935 & n.rotl(e, 8)) | (4278255360 & n.rotl(e, 24))
									);
								for (var t = 0; t < e.length; t++) e[t] = n.endian(e[t]);
								return e;
							},
							randomBytes: function (e) {
								for (var t = []; e > 0; e--)
									t.push(Math.floor(256 * Math.random()));
								return t;
							},
							bytesToWords: function (e) {
								for (var t = [], n = 0, o = 0; n < e.length; n++, o += 8)
									t[o >>> 5] |= e[n] << (24 - (o % 32));
								return t;
							},
							wordsToBytes: function (e) {
								for (var t = [], n = 0; n < 32 * e.length; n += 8)
									t.push((e[n >>> 5] >>> (24 - (n % 32))) & 255);
								return t;
							},
							bytesToHex: function (e) {
								for (var t = [], n = 0; n < e.length; n++)
									t.push((e[n] >>> 4).toString(16)),
										t.push((15 & e[n]).toString(16));
								return t.join('');
							},
							hexToBytes: function (e) {
								for (var t = [], n = 0; n < e.length; n += 2)
									t.push(parseInt(e.substr(n, 2), 16));
								return t;
							},
							bytesToBase64: function (e) {
								for (var n = [], o = 0; o < e.length; o += 3)
									for (
										var r = (e[o] << 16) | (e[o + 1] << 8) | e[o + 2], i = 0;
										i < 4;
										i++
									)
										8 * o + 6 * i <= 8 * e.length
											? n.push(t.charAt((r >>> (6 * (3 - i))) & 63))
											: n.push('=');
								return n.join('');
							},
							base64ToBytes: function (e) {
								e = e.replace(/[^A-Z0-9+\/]/gi, '');
								for (var n = [], o = 0, r = 0; o < e.length; r = ++o % 4)
									0 != r &&
										n.push(
											((t.indexOf(e.charAt(o - 1)) &
												(Math.pow(2, -2 * r + 8) - 1)) <<
												(2 * r)) |
												(t.indexOf(e.charAt(o)) >>> (6 - 2 * r)),
										);
								return n;
							},
						}),
						(e.exports = n);
				},
				148: function (e, t, n) {
					var o;
					(o = void 0 !== n.g ? n.g : this),
						(e.exports = (function (e) {
							if (e.CSS && e.CSS.escape) return e.CSS.escape;
							var t = function (e) {
								if (0 == arguments.length)
									throw new TypeError('`CSS.escape` requires an argument.');
								for (
									var t,
										n = String(e),
										o = n.length,
										r = -1,
										i = '',
										a = n.charCodeAt(0);
									++r < o;

								)
									0 != (t = n.charCodeAt(r))
										? (i +=
												(t >= 1 && t <= 31) ||
												127 == t ||
												(0 == r && t >= 48 && t <= 57) ||
												(1 == r && t >= 48 && t <= 57 && 45 == a)
													? '\\' + t.toString(16) + ' '
													: (0 == r && 1 == o && 45 == t) ||
														  !(
																t >= 128 ||
																45 == t ||
																95 == t ||
																(t >= 48 && t <= 57) ||
																(t >= 65 && t <= 90) ||
																(t >= 97 && t <= 122)
														  )
														? '\\' + n.charAt(r)
														: n.charAt(r))
										: (i += '�');
								return i;
							};
							return e.CSS || (e.CSS = {}), (e.CSS.escape = t), t;
						})(o));
				},
				34: (e, t, n) => {
					var o, r, i;
					(i = function () {
						function e() {
							for (var e = 0, t = {}; e < arguments.length; e++) {
								var n = arguments[e];
								for (var o in n) t[o] = n[o];
							}
							return t;
						}
						function t(e) {
							return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
						}
						return (function n(o) {
							function r() {}
							function i(t, n, i) {
								if ('undefined' != typeof document) {
									'number' ==
										typeof (i = e({ path: '/' }, r.defaults, i)).expires &&
										(i.expires = new Date(1 * new Date() + 864e5 * i.expires)),
										(i.expires = i.expires ? i.expires.toUTCString() : '');
									try {
										var a = JSON.stringify(n);
										/^[\{\[]/.test(a) && (n = a);
									} catch (e) {}
									(n = o.write
										? o.write(n, t)
										: encodeURIComponent(String(n)).replace(
												/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
												decodeURIComponent,
											)),
										(t = encodeURIComponent(String(t))
											.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
											.replace(/[\(\)]/g, escape));
									var s = '';
									for (var c in i)
										i[c] &&
											((s += '; ' + c),
											!0 !== i[c] && (s += '=' + i[c].split(';')[0]));
									return (document.cookie = t + '=' + n + s);
								}
							}
							function a(e, n) {
								if ('undefined' != typeof document) {
									for (
										var r = {},
											i = document.cookie ? document.cookie.split('; ') : [],
											a = 0;
										a < i.length;
										a++
									) {
										var s = i[a].split('='),
											c = s.slice(1).join('=');
										n || '"' !== c.charAt(0) || (c = c.slice(1, -1));
										try {
											var u = t(s[0]);
											if (((c = (o.read || o)(c, u) || t(c)), n))
												try {
													c = JSON.parse(c);
												} catch (e) {}
											if (((r[u] = c), e === u)) break;
										} catch (e) {}
									}
									return e ? r[e] : r;
								}
							}
							return (
								(r.set = i),
								(r.get = function (e) {
									return a(e, !1);
								}),
								(r.getJSON = function (e) {
									return a(e, !0);
								}),
								(r.remove = function (t, n) {
									i(t, '', e(n, { expires: -1 }));
								}),
								(r.defaults = {}),
								(r.withConverter = n),
								r
							);
						})(function () {});
					}),
						void 0 ===
							(r = 'function' == typeof (o = i) ? o.call(t, n, t, e) : o) ||
							(e.exports = r),
						(e.exports = i());
				},
				320: (e) => {
					'use strict';
					var t = Object.getOwnPropertySymbols,
						n = Object.prototype.hasOwnProperty,
						o = Object.prototype.propertyIsEnumerable;
					function r(e) {
						if (null == e)
							throw new TypeError(
								'Object.assign cannot be called with null or undefined',
							);
						return Object(e);
					}
					e.exports = (function () {
						try {
							if (!Object.assign) return !1;
							var e = new String('abc');
							if (((e[5] = 'de'), '5' === Object.getOwnPropertyNames(e)[0]))
								return !1;
							for (var t = {}, n = 0; n < 10; n++)
								t['_' + String.fromCharCode(n)] = n;
							if (
								'0123456789' !==
								Object.getOwnPropertyNames(t)
									.map(function (e) {
										return t[e];
									})
									.join('')
							)
								return !1;
							var o = {};
							return (
								'abcdefghijklmnopqrst'.split('').forEach(function (e) {
									o[e] = e;
								}),
								'abcdefghijklmnopqrst' ===
									Object.keys(Object.assign({}, o)).join('')
							);
						} catch (e) {
							return !1;
						}
					})()
						? Object.assign
						: function (e, i) {
								for (var a, s, c = r(e), u = 1; u < arguments.length; u++) {
									for (var d in (a = Object(arguments[u])))
										n.call(a, d) && (c[d] = a[d]);
									if (t) {
										s = t(a);
										for (var l = 0; l < s.length; l++)
											o.call(a, s[l]) && (c[s[l]] = a[s[l]]);
									}
								}
								return c;
							};
				},
				214: (e, t, n) => {
					'use strict';
					n.r(t), n.d(t, { default: () => p });
					var o = setTimeout;
					function r(e) {
						return Boolean(e && void 0 !== e.length);
					}
					function i() {}
					function a(e) {
						if (!(this instanceof a))
							throw new TypeError('Promises must be constructed via new');
						if ('function' != typeof e) throw new TypeError('not a function');
						(this._state = 0),
							(this._handled = !1),
							(this._value = void 0),
							(this._deferreds = []),
							m(e, this);
					}
					function s(e, t) {
						for (; 3 === e._state; ) e = e._value;
						0 !== e._state
							? ((e._handled = !0),
								a._immediateFn(function () {
									var n = 1 === e._state ? t.onFulfilled : t.onRejected;
									if (null !== n) {
										var o;
										try {
											o = n(e._value);
										} catch (e) {
											return void u(t.promise, e);
										}
										c(t.promise, o);
									} else (1 === e._state ? c : u)(t.promise, e._value);
								}))
							: e._deferreds.push(t);
					}
					function c(e, t) {
						try {
							if (t === e)
								throw new TypeError(
									'A promise cannot be resolved with itself.',
								);
							if (t && ('object' == typeof t || 'function' == typeof t)) {
								var n = t.then;
								if (t instanceof a)
									return (e._state = 3), (e._value = t), void d(e);
								if ('function' == typeof n)
									return void m(
										((o = n),
										(r = t),
										function () {
											o.apply(r, arguments);
										}),
										e,
									);
							}
							(e._state = 1), (e._value = t), d(e);
						} catch (t) {
							u(e, t);
						}
						var o, r;
					}
					function u(e, t) {
						(e._state = 2), (e._value = t), d(e);
					}
					function d(e) {
						2 === e._state &&
							0 === e._deferreds.length &&
							a._immediateFn(function () {
								e._handled || a._unhandledRejectionFn(e._value);
							});
						for (var t = 0, n = e._deferreds.length; t < n; t++)
							s(e, e._deferreds[t]);
						e._deferreds = null;
					}
					function l(e, t, n) {
						(this.onFulfilled = 'function' == typeof e ? e : null),
							(this.onRejected = 'function' == typeof t ? t : null),
							(this.promise = n);
					}
					function m(e, t) {
						var n = !1;
						try {
							e(
								function (e) {
									n || ((n = !0), c(t, e));
								},
								function (e) {
									n || ((n = !0), u(t, e));
								},
							);
						} catch (e) {
							if (n) return;
							(n = !0), u(t, e);
						}
					}
					(a.prototype.catch = function (e) {
						return this.then(null, e);
					}),
						(a.prototype.then = function (e, t) {
							var n = new this.constructor(i);
							return s(this, new l(e, t, n)), n;
						}),
						(a.prototype.finally = function (e) {
							var t = this.constructor;
							return this.then(
								function (n) {
									return t.resolve(e()).then(function () {
										return n;
									});
								},
								function (n) {
									return t.resolve(e()).then(function () {
										return t.reject(n);
									});
								},
							);
						}),
						(a.all = function (e) {
							return new a(function (t, n) {
								if (!r(e))
									return n(new TypeError('Promise.all accepts an array'));
								var o = Array.prototype.slice.call(e);
								if (0 === o.length) return t([]);
								var i = o.length;
								function a(e, r) {
									try {
										if (r && ('object' == typeof r || 'function' == typeof r)) {
											var s = r.then;
											if ('function' == typeof s)
												return void s.call(
													r,
													function (t) {
														a(e, t);
													},
													n,
												);
										}
										(o[e] = r), 0 == --i && t(o);
									} catch (e) {
										n(e);
									}
								}
								for (var s = 0; s < o.length; s++) a(s, o[s]);
							});
						}),
						(a.resolve = function (e) {
							return e && 'object' == typeof e && e.constructor === a
								? e
								: new a(function (t) {
										t(e);
									});
						}),
						(a.reject = function (e) {
							return new a(function (t, n) {
								n(e);
							});
						}),
						(a.race = function (e) {
							return new a(function (t, n) {
								if (!r(e))
									return n(new TypeError('Promise.race accepts an array'));
								for (var o = 0, i = e.length; o < i; o++)
									a.resolve(e[o]).then(t, n);
							});
						}),
						(a._immediateFn =
							('function' == typeof setImmediate &&
								function (e) {
									setImmediate(e);
								}) ||
							function (e) {
								o(e, 0);
							}),
						(a._unhandledRejectionFn = function (e) {
							'undefined' != typeof console &&
								console &&
								console.warn('Possible Unhandled Promise Rejection:', e);
						});
					const p = a;
				},
				808: (e) => {
					'use strict';
					function t(e, t) {
						return Object.prototype.hasOwnProperty.call(e, t);
					}
					e.exports = function (e, n, o, r) {
						(n = n || '&'), (o = o || '=');
						var i = {};
						if ('string' != typeof e || 0 === e.length) return i;
						var a = /\+/g;
						e = e.split(n);
						var s = 1e3;
						r && 'number' == typeof r.maxKeys && (s = r.maxKeys);
						var c = e.length;
						s > 0 && c > s && (c = s);
						for (var u = 0; u < c; ++u) {
							var d,
								l,
								m,
								p,
								f = e[u].replace(a, '%20'),
								g = f.indexOf(o);
							g >= 0
								? ((d = f.substr(0, g)), (l = f.substr(g + 1)))
								: ((d = f), (l = '')),
								(m = decodeURIComponent(d)),
								(p = decodeURIComponent(l)),
								t(i, m)
									? Array.isArray(i[m])
										? i[m].push(p)
										: (i[m] = [i[m], p])
									: (i[m] = p);
						}
						return i;
					};
				},
				368: (e) => {
					'use strict';
					var t = function (e) {
						switch (typeof e) {
							case 'string':
								return e;
							case 'boolean':
								return e ? 'true' : 'false';
							case 'number':
								return isFinite(e) ? e : '';
							default:
								return '';
						}
					};
					e.exports = function (e, n, o, r) {
						return (
							(n = n || '&'),
							(o = o || '='),
							null === e && (e = void 0),
							'object' == typeof e
								? Object.keys(e)
										.map(function (r) {
											var i = encodeURIComponent(t(r)) + o;
											return Array.isArray(e[r])
												? e[r]
														.map(function (e) {
															return i + encodeURIComponent(t(e));
														})
														.join(n)
												: i + encodeURIComponent(t(e[r]));
										})
										.join(n)
								: r
									? encodeURIComponent(t(r)) + o + encodeURIComponent(t(e))
									: ''
						);
					};
				},
				642: (e, t, n) => {
					'use strict';
					(t.decode = t.parse = n(808)), (t.encode = t.stringify = n(368));
				},
				961: (e, t, n) => {
					var o, r, i, a;
					(o = n(562)),
						(r = n(792).utf8),
						(i = n(792).bin),
						((a = function (e, t) {
							var n = o.wordsToBytes(
								(function (e) {
									e.constructor == String
										? (e = r.stringToBytes(e))
										: 'undefined' != typeof Buffer &&
											  'function' == typeof Buffer.isBuffer &&
											  Buffer.isBuffer(e)
											? (e = Array.prototype.slice.call(e, 0))
											: Array.isArray(e) || (e = e.toString());
									var t = o.bytesToWords(e),
										n = 8 * e.length,
										i = [],
										a = 1732584193,
										s = -271733879,
										c = -1732584194,
										u = 271733878,
										d = -1009589776;
									(t[n >> 5] |= 128 << (24 - (n % 32))),
										(t[15 + (((n + 64) >>> 9) << 4)] = n);
									for (var l = 0; l < t.length; l += 16) {
										for (
											var m = a, p = s, f = c, g = u, v = d, h = 0;
											h < 80;
											h++
										) {
											if (h < 16) i[h] = t[l + h];
											else {
												var y = i[h - 3] ^ i[h - 8] ^ i[h - 14] ^ i[h - 16];
												i[h] = (y << 1) | (y >>> 31);
											}
											var w =
												((a << 5) | (a >>> 27)) +
												d +
												(i[h] >>> 0) +
												(h < 20
													? 1518500249 + ((s & c) | (~s & u))
													: h < 40
														? 1859775393 + (s ^ c ^ u)
														: h < 60
															? ((s & c) | (s & u) | (c & u)) - 1894007588
															: (s ^ c ^ u) - 899497514);
											(d = u),
												(u = c),
												(c = (s << 30) | (s >>> 2)),
												(s = a),
												(a = w);
										}
										(a += m), (s += p), (c += f), (u += g), (d += v);
									}
									return [a, s, c, u, d];
								})(e),
							);
							return t && t.asBytes
								? n
								: t && t.asString
									? i.bytesToString(n)
									: o.bytesToHex(n);
						})._blocksize = 16),
						(a._digestsize = 20),
						(e.exports = a);
				},
				22: (e, t, n) => {
					var o = n(481),
						r = n(426),
						i = r;
					(i.v1 = o), (i.v4 = r), (e.exports = i);
				},
				725: (e) => {
					for (var t = [], n = 0; n < 256; ++n)
						t[n] = (n + 256).toString(16).substr(1);
					e.exports = function (e, n) {
						var o = n || 0,
							r = t;
						return [
							r[e[o++]],
							r[e[o++]],
							r[e[o++]],
							r[e[o++]],
							'-',
							r[e[o++]],
							r[e[o++]],
							'-',
							r[e[o++]],
							r[e[o++]],
							'-',
							r[e[o++]],
							r[e[o++]],
							'-',
							r[e[o++]],
							r[e[o++]],
							r[e[o++]],
							r[e[o++]],
							r[e[o++]],
							r[e[o++]],
						].join('');
					};
				},
				157: (e) => {
					var t =
						('undefined' != typeof crypto &&
							crypto.getRandomValues &&
							crypto.getRandomValues.bind(crypto)) ||
						('undefined' != typeof msCrypto &&
							'function' == typeof window.msCrypto.getRandomValues &&
							msCrypto.getRandomValues.bind(msCrypto));
					if (t) {
						var n = new Uint8Array(16);
						e.exports = function () {
							return t(n), n;
						};
					} else {
						var o = new Array(16);
						e.exports = function () {
							for (var e, t = 0; t < 16; t++)
								0 == (3 & t) && (e = 4294967296 * Math.random()),
									(o[t] = (e >>> ((3 & t) << 3)) & 255);
							return o;
						};
					}
				},
				481: (e, t, n) => {
					var o,
						r,
						i = n(157),
						a = n(725),
						s = 0,
						c = 0;
					e.exports = function (e, t, n) {
						var u = (t && n) || 0,
							d = t || [],
							l = (e = e || {}).node || o,
							m = void 0 !== e.clockseq ? e.clockseq : r;
						if (null == l || null == m) {
							var p = i();
							null == l && (l = o = [1 | p[0], p[1], p[2], p[3], p[4], p[5]]),
								null == m && (m = r = 16383 & ((p[6] << 8) | p[7]));
						}
						var f = void 0 !== e.msecs ? e.msecs : new Date().getTime(),
							g = void 0 !== e.nsecs ? e.nsecs : c + 1,
							v = f - s + (g - c) / 1e4;
						if (
							(v < 0 && void 0 === e.clockseq && (m = (m + 1) & 16383),
							(v < 0 || f > s) && void 0 === e.nsecs && (g = 0),
							g >= 1e4)
						)
							throw new Error(
								"uuid.v1(): Can't create more than 10M uuids/sec",
							);
						(s = f), (c = g), (r = m);
						var h = (1e4 * (268435455 & (f += 122192928e5)) + g) % 4294967296;
						(d[u++] = (h >>> 24) & 255),
							(d[u++] = (h >>> 16) & 255),
							(d[u++] = (h >>> 8) & 255),
							(d[u++] = 255 & h);
						var y = ((f / 4294967296) * 1e4) & 268435455;
						(d[u++] = (y >>> 8) & 255),
							(d[u++] = 255 & y),
							(d[u++] = ((y >>> 24) & 15) | 16),
							(d[u++] = (y >>> 16) & 255),
							(d[u++] = (m >>> 8) | 128),
							(d[u++] = 255 & m);
						for (var w = 0; w < 6; ++w) d[u + w] = l[w];
						return t || a(d);
					};
				},
				426: (e, t, n) => {
					var o = n(157),
						r = n(725);
					e.exports = function (e, t, n) {
						var i = (t && n) || 0;
						'string' == typeof e &&
							((t = 'binary' === e ? new Array(16) : null), (e = null));
						var a = (e = e || {}).random || (e.rng || o)();
						if (((a[6] = (15 & a[6]) | 64), (a[8] = (63 & a[8]) | 128), t))
							for (var s = 0; s < 16; ++s) t[i + s] = a[s];
						return t || r(a);
					};
				},
			},
			t = {};
		function n(o) {
			var r = t[o];
			if (void 0 !== r) return r.exports;
			var i = (t[o] = { exports: {} });
			return e[o].call(i.exports, i, i.exports, n), i.exports;
		}
		(n.n = (e) => {
			var t = e && e.__esModule ? () => e.default : () => e;
			return n.d(t, { a: t }), t;
		}),
			(n.d = (e, t) => {
				for (var o in t)
					n.o(t, o) &&
						!n.o(e, o) &&
						Object.defineProperty(e, o, { enumerable: !0, get: t[o] });
			}),
			(n.g = (function () {
				if ('object' == typeof globalThis) return globalThis;
				try {
					return this || new Function('return this')();
				} catch (e) {
					if ('object' == typeof window) return window;
				}
			})()),
			(n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
			(n.r = (e) => {
				'undefined' != typeof Symbol &&
					Symbol.toStringTag &&
					Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
					Object.defineProperty(e, '__esModule', { value: !0 });
			});
		var o = {};
		return (
			(() => {
				'use strict';
				const e = 'Chrome',
					t = 'Edge',
					o = 'EdgeChromium',
					r = 'Unknown',
					i = (e, t) => -1 !== e.indexOf(t),
					a = [e, t, o, 'IE', r],
					s = (e) => i(a, e);
				var c = n(739);
				const u = n.n(c)();
				var d = n(494);
				const l = n.n(d)(),
					m = (e) => null == e,
					p = (e) => !m(e) && !Array.isArray(e) && 'object' == typeof e,
					f = (e, t) => {
						Object.keys(t).forEach((n) => {
							p(e[n]) && p(t[n]) ? f(e[n], t[n]) : (e[n] = t[n]);
						});
					},
					g = (e, ...t) => {
						if (m(e))
							throw new TypeError(
								'deepAssign "target" cannot be null or undefined',
							);
						const n = Object(e);
						return t.forEach((e) => f(n, Object(e))), n;
					},
					v = (e, t) => (n) => {
						const o = t
							.split('.')
							.reduce((e, t) => ((e[t] = e[t] || {}), e[t]), e);
						g(o, n);
					},
					h = () => {
						const e = [];
						return {
							add(t) {
								e.push(t);
							},
							call: (...t) => Promise.all(e.map((e) => e(...t))),
						};
					},
					y = ({ logger: e, cookieJar: t }) => ({
						...t,
						set(n, o, r) {
							e.info('Setting cookie', { name: n, value: o, ...r }),
								t.set(n, o, r);
						},
					}),
					w = (() => {
						const e = [];
						for (let t = 0; t < 256; t++) {
							let n = t;
							for (let e = 0; e < 8; e++)
								n = 1 & n ? 3988292384 ^ (n >>> 1) : n >>> 1;
							e.push(n);
						}
						return function (t, n) {
							(t = unescape(encodeURIComponent(t))), n || (n = 0), (n ^= -1);
							for (let o = 0; o < t.length; o++) {
								const r = 255 & (n ^ t.charCodeAt(o));
								n = (n >>> 8) ^ e[r];
							}
							return (n ^= -1) >>> 0;
						};
					})(),
					b = () => {
						const e = {};
						return (
							(e.promise = new Promise((t, n) => {
								(e.resolve = t), (e.reject = n);
							})),
							e
						);
					},
					C = (e, t) => {
						for (let n = 0; n < e.length; n += 1) {
							const o = e[n];
							if (t(o, n, e)) return o;
						}
					},
					I = (e, t) => e.appendChild(t),
					x = (e, t = {}, n = {}, o = [], r = document) => {
						const i = r.createElement(e);
						return (
							Object.keys(t).forEach((e) => {
								i.setAttribute(e, t[e]);
							}),
							((e, t) => {
								Object.keys(t).forEach((n) => {
									if ('style' === n && p(t[n])) {
										const o = t[n];
										Object.keys(o).forEach((t) => {
											e.style[t] = o[t];
										});
									} else e[n] = t[n];
								});
							})(i, n),
							o.forEach((e) => I(i, e)),
							i
						);
					},
					E = 'IMG',
					S = 'STYLE',
					k = 'SCRIPT',
					P = ({ src: e, currentDocument: t = document }) =>
						new Promise((n, o) => {
							x(E, { src: e }, { onload: n, onerror: o, onabort: o }, [], t);
						}),
					D = (e) => 'function' == typeof e,
					T = (e) => Array.isArray(e) && e.length > 0,
					R = (e) => (Array.isArray(e) ? e : null == e ? [] : [].slice.call(e)),
					O = /^\s*>/,
					A = (e, t) => {
						if (!O.test(t)) return R(e.querySelectorAll(t));
						const n = `alloy-${Date.now()}`;
						try {
							return e.classList.add(n), R(e.querySelectorAll(`.${n} ${t}`));
						} finally {
							e.classList.remove(n);
						}
					},
					q = (e, t) => e.substr(0, t.length) === t,
					j = ':shadow',
					N = (e, t) => {
						const n = t.trim();
						return q(n, '>')
							? window.document.documentMode
								? n.substring(1).trim()
								: `${e instanceof Element || e instanceof HTMLDocument ? ':scope' : ':host'} ${n}`
							: n;
					},
					L = (e, t = document) =>
						-1 === e.indexOf(j)
							? A(t, e)
							: ((e, t) => {
									if (!window.document.documentElement.attachShadow)
										return A(e, t.replace(j, ''));
									const n = ((e) => e.split(j))(t);
									if (n.length < 2) return A(e, t);
									let o = e;
									for (let e = 0; e < n.length; e += 1) {
										const t = N(o, n[e]),
											r = A(o, t);
										if (0 === r.length || !r[0] || !r[0].shadowRoot) return r;
										o = r[0].shadowRoot;
									}
								})(t, e),
					M = { childList: !0, subtree: !0 },
					U = (e) => new Error(`Could not find: ${e}`),
					$ = (e) => new Promise(e),
					_ = (e, t = L, n = 5e3, o = window, r = document) => {
						const i = t(e);
						return T(i)
							? Promise.resolve(i)
							: ((e) => D(e.MutationObserver))(o)
								? ((e, t, n, o, r) =>
										$((i, a) => {
											const s = new e.MutationObserver(() => {
												const e = r(n);
												T(e) && (s.disconnect(), i(e));
											});
											setTimeout(() => {
												s.disconnect(), a(U(n));
											}, o),
												s.observe(t, M);
										}))(o, r, e, n, t)
								: ((e) => 'visible' === e.visibilityState)(r)
									? ((e, t, n, o) =>
											$((r, i) => {
												const a = () => {
													const n = o(t);
													T(n) ? r(n) : e.requestAnimationFrame(a);
												};
												a(),
													setTimeout(() => {
														i(U(t));
													}, n);
											}))(o, e, n, t)
									: ((e, t, n) =>
											$((o, r) => {
												const i = () => {
													const t = n(e);
													T(t) ? o(t) : setTimeout(i, 100);
												};
												i(),
													setTimeout(() => {
														r(U(e));
													}, t);
											}))(e, n, t);
					},
					B = (e) => {
						const t = e.parentNode;
						return t ? t.removeChild(e) : null;
					},
					V = { name: 'Adobe Alloy' },
					F = { style: { display: 'none', width: 0, height: 0 } },
					H = (e, t) => Array.prototype.concat.apply([], e.map(t)),
					z = 'com.adobe.alloy.',
					J = `${z}getTld`,
					W = (e) => e.replace('@', '_'),
					Q = (e, t) => `kndctr_${W(e)}_${t}`,
					X = ({ orgId: e }) => {
						const t = Q(e, 'identity');
						return () => Boolean(l.get(t));
					},
					G = (e, t, n) => ({
						getItem(o) {
							try {
								return e[t].getItem(n + o);
							} catch (e) {
								return null;
							}
						},
						setItem(o, r) {
							try {
								return e[t].setItem(n + o, r), !0;
							} catch (e) {
								return !1;
							}
						},
						clear() {
							try {
								return (
									Object.keys(e[t]).forEach((o) => {
										q(o, n) && e[t].removeItem(o);
									}),
									!0
								);
							} catch (e) {
								return !1;
							}
						},
					}),
					Y = (e) => (t) => {
						const n = z + t;
						return {
							session: G(e, 'sessionStorage', n),
							persistent: G(e, 'localStorage', n),
						};
					},
					K = (e) => p(e) && 0 === Object.keys(e).length,
					Z = (e) => 'number' == typeof e && !isNaN(e),
					ee = (e) => {
						const t = parseInt(e, 10);
						return Z(t) && e === t;
					},
					te = (e) => 'string' == typeof e,
					ne = (e) => te(e) && e.length > 0,
					oe = () => {};
				var re = n(308);
				const ie = n.n(re)(),
					ae = (e) => (e instanceof Error ? e : new Error(e)),
					se = ({ error: e, message: t }) => {
						try {
							e.message = t;
						} catch (e) {}
					},
					ce = ({ error: e, message: t }) => {
						const n = ae(e),
							o = `${t}\nCaused by: ${n.message}`;
						return se({ error: n, message: o }), n;
					},
					ue = (e, t) => {
						const n = Math.round(Number(e));
						return isNaN(n) ? t : n;
					},
					de = (e, t, n) => {
						const o = String(e);
						let r = String(n);
						if (o.length >= t || 0 === r.length) return o;
						const i = t - o.length;
						for (; i > r.length; ) r += r;
						return r.slice(0, i) + o;
					},
					le = (e) => {
						const t = e.getFullYear(),
							n = de(e.getMonth() + 1, 2, '0'),
							o = de(e.getDate(), 2, '0'),
							r = de(e.getHours(), 2, '0'),
							i = de(e.getMinutes(), 2, '0'),
							a = de(e.getSeconds(), 2, '0'),
							s = de(e.getMilliseconds(), 3, '0'),
							c = ue(e.getTimezoneOffset(), 0);
						return `${t}-${n}-${o}T${r}:${i}:${a}.${s}${c > 0 ? '-' : '+'}${de(Math.floor(Math.abs(c) / 60), 2, '0')}:${de(Math.abs(c) % 60, 2, '0')}`;
					};
				var me = n(426);
				const pe = n.n(me)(),
					fe = (e, t, n = {}) => {
						const o = (n, o) => t(e(n, o), o);
						return u(o, e, n), o;
					},
					ge = (e, t, n) => fe(e, (e, n) => (null == e ? e : t(e, n)), n),
					ve = (e, t, n, o) => {
						if (!e)
							throw new Error(
								`'${n}': Expected ${o}, but got ${JSON.stringify(t)}.`,
							);
					},
					he = (e, t) => (
						ve(((e) => 'boolean' == typeof e)(e), e, t, 'true or false'), e
					),
					ye = (e, t) => (ve(D(e), e, t, 'a function'), e),
					we = (e, t) => (n, o) => (
						ve(n >= t, n, o, `${e} greater than or equal to ${t}`), n
					),
					be = (e) => (t, n) => (
						p(t) ? ve(!K(t), t, n, e) : ve(t.length > 0, t, n, e), t
					),
					Ce = /^[a-z0-9.-]{1,}$/i,
					Ie = (e, t) => (ve(Ce.test(e), e, t, 'a valid domain'), e),
					xe = (e, t) => (ve(ee(e), e, t, 'an integer'), e),
					Ee = (e, t) => (ve(Z(e), e, t, 'a number'), e),
					Se = (e, t) => (
						ve(
							((e) => {
								try {
									return null !== new RegExp(e);
								} catch (e) {
									return !1;
								}
							})(e),
							e,
							t,
							'a regular expression',
						),
						e
					),
					ke = (e, t) => {
						if (null == e) throw new Error(`'${t}' is a required option`);
						return e;
					},
					Pe = (e, t) => (ve(te(e), e, t, 'a string'), e),
					De = (e) => e;
				(De.default = function (e) {
					return fe(this, ((e) => (t) => (null == t ? e : t))(e));
				}),
					(De.required = function () {
						return fe(this, ke);
					});
				const Te = function () {
						return ge(this, Ie);
					},
					Re = function (e) {
						return ge(this, we('an integer', e));
					},
					Oe = function (e) {
						return ge(this, we('a number', e));
					},
					Ae = function () {
						return ge(this, xe, { minimum: Re });
					},
					qe = function () {
						return ge(this, be('a non-empty string'));
					},
					je = function () {
						return ge(this, be('a non-empty array'));
					},
					Ne = function () {
						return ge(this, be('a non-empty object'));
					},
					Le = function () {
						return ge(this, Se);
					},
					Me = function () {
						return ge(
							this,
							(() => {
								const e = [];
								return (t, n) => (
									ve(
										-1 === e.indexOf(t),
										t,
										n,
										'a unique value across instances',
									),
									e.push(t),
									t
								);
							})(),
						);
					},
					Ue = function (e, t) {
						return fe(
							this,
							((e, t) => (n, o) => {
								const r = C(e, (e) => {
									try {
										return e(n, o), !0;
									} catch (e) {
										return !1;
									}
								});
								return ve(r, n, o, t), n;
							})(e, t),
						);
					}.bind(De),
					$e = function () {
						return ge(this, De);
					}.bind(De),
					_e = function (e) {
						return ge(
							this,
							((e) => (t, n) => {
								ve(Array.isArray(t), t, n, 'an array');
								const o = [],
									r = t.map((t, r) => {
										try {
											return e(t, `${n}[${r}]`);
										} catch (e) {
											return void o.push(e.message);
										}
									});
								if (o.length) throw new Error(o.join('\n'));
								return r;
							})(e),
							{ nonEmpty: je },
						);
					}.bind(De),
					Be = function () {
						return ge(this, he);
					}.bind(De),
					Ve = function () {
						return ge(this, ye);
					}.bind(De),
					Fe = function (e) {
						return ge(
							this,
							((e) => (t, n) => (ve(t === e, t, n, `${e}`), t))(e),
						);
					}.bind(De),
					He =
						(function () {
							return ge(this, Ee, { minimum: Oe, integer: Ae, unique: Me });
						}.bind(De),
						function (e) {
							return ge(
								this,
								((t = e),
								(e, n) => {
									ve(p(e), e, n, 'an object');
									const o = [],
										r = {};
									if (
										(Object.keys(e).forEach((i) => {
											const a = e[i],
												s = n ? `${n}.${i}` : i;
											try {
												const e = t(a, s);
												void 0 !== e && (r[i] = e);
											} catch (e) {
												o.push(e.message);
											}
										}),
										o.length)
									)
										throw new Error(o.join('\n'));
									return r;
								}),
								{ nonEmpty: Ne },
							);
							var t;
						}.bind(De)),
					ze = function (e) {
						return ge(
							this,
							((e) => (t, n) => {
								ve(p(t), t, n, 'an object');
								const o = [],
									r = {};
								if (
									(Object.keys(e).forEach((i) => {
										const a = t[i],
											s = e[i],
											c = n ? `${n}.${i}` : i;
										try {
											const e = s(a, c);
											void 0 !== e && (r[i] = e);
										} catch (e) {
											o.push(e.message);
										}
									}),
									Object.keys(t).forEach((e) => {
										Object.prototype.hasOwnProperty.call(r, e) || (r[e] = t[e]);
									}),
									o.length)
								)
									throw new Error(o.join('\n'));
								return r;
							})(e),
							{
								noUnknownFields: function () {
									return ge(
										this,
										((e) => (t, n) => {
											const o = [];
											if (
												(Object.keys(t).forEach((t) => {
													if (!e[t]) {
														const e = n ? `${n}.${t}` : t;
														o.push(`'${e}': Unknown field.`);
													}
												}),
												o.length)
											)
												throw new Error(o.join('\n'));
											return t;
										})(e),
									);
								},
								nonEmpty: Ne,
							},
						);
					}.bind(De),
					Je = function () {
						return ge(this, Pe, {
							regexp: Le,
							domain: Te,
							nonEmpty: qe,
							unique: Me,
						});
					}.bind(De),
					We = function (...e) {
						return Ue(e.map(Fe), `one of these values: [${JSON.stringify(e)}]`);
					},
					Qe = He(
						_e(
							ze({
								authenticatedState: We(
									'ambiguous',
									'authenticated',
									'loggedOut',
								),
								id: Je(),
								namespace: ze({ code: Je() }).noUnknownFields(),
								primary: Be(),
								xid: Je(),
							}),
						).required(),
					),
					Xe = [
						'onComponentsRegistered',
						'onBeforeEvent',
						'onBeforeRequest',
						'onResponse',
						'onRequestFailure',
						'onClick',
					],
					Ge =
						(e, t) =>
						(...n) => {
							let o;
							try {
								o = e(...n);
							} catch (e) {
								throw ce({ error: e, message: t });
							}
							return (
								o instanceof Promise &&
									(o = o.catch((e) => {
										throw ce({ error: e, message: t });
									})),
								o
							);
						},
					Ye = () => {
						const e = {},
							t = {},
							n = {};
						return {
							register(o, r) {
								const { commands: a, lifecycle: s } = r;
								((e, n = {}) => {
									const o =
										((r = Object.keys(t)),
										(a = Object.keys(n)),
										r.filter((e) => i(a, e)));
									var r, a;
									if (o.length)
										throw new Error(
											`[ComponentRegistry] Could not register ${e} because it has existing command(s): ${o.join(',')}`,
										);
									Object.keys(n).forEach((o) => {
										const r = n[o];
										(r.commandName = o),
											(r.run = Ge(
												r.run,
												`[${e}] An error occurred while executing the ${o} command.`,
											)),
											(t[o] = r);
									});
								})(o, a),
									((e, t = {}) => {
										Object.keys(t).forEach((o) => {
											(n[o] = n[o] || []),
												n[o].push(
													Ge(
														t[o],
														`[${e}] An error occurred while executing the ${o} lifecycle hook.`,
													),
												);
										});
									})(o, s),
									(e[o] = r);
							},
							getCommand: (e) => t[e],
							getCommandNames: () => Object.keys(t),
							getLifecycleCallbacks: (e) => n[e] || [],
						};
					},
					Ke = 'in',
					Ze = 'pending',
					et = 'declinedConsent',
					tt = 'default',
					nt = 'initial',
					ot = 'new',
					rt = (e) => {
						const t = new Error(e);
						return (t.code = et), (t.message = e), t;
					},
					it = ({ logger: e }) => {
						const t = [],
							n = () => Promise.resolve(),
							o = () => Promise.resolve(),
							r = () =>
								Promise.reject(rt('No consent preferences have been set.')),
							i = () => Promise.reject(rt('The user declined consent.')),
							a = (e) => {
								if (e) return Promise.reject(new Error('Consent is pending.'));
								const n = b();
								return t.push(n), n.promise;
							};
						return {
							in(r) {
								r === tt
									? (this.awaitConsent = n)
									: (r === nt
											? e.info(
													'Loaded user consent preferences. The user previously consented.',
												)
											: r === ot &&
												this.awaitConsent !== o &&
												e.info('User consented.'),
										(() => {
											for (; t.length; ) t.shift().resolve();
										})(),
										(this.awaitConsent = o));
							},
							out(n) {
								n === tt
									? (e.warn(
											'User consent preferences not found. Default consent of out will be used.',
										),
										(this.awaitConsent = r))
									: (n === nt
											? e.warn(
													'Loaded user consent preferences. The user previously declined consent.',
												)
											: n === ot &&
												this.awaitConsent !== i &&
												e.warn('User declined consent.'),
										(() => {
											for (; t.length; )
												t.shift().reject(rt('The user declined consent.'));
										})(),
										(this.awaitConsent = i));
							},
							pending(t) {
								t === tt &&
									e.info(
										'User consent preferences not found. Default consent of pending will be used. Some commands may be delayed.',
									),
									(this.awaitConsent = a);
							},
							awaitConsent: () =>
								Promise.reject(new Error('Consent has not been initialized.')),
							withConsent() {
								return this.awaitConsent(!0);
							},
						};
					},
					at = () => {
						const e = {};
						let t,
							n,
							o = !1,
							r = !1,
							i = !0;
						const a = (e) => {
								if (r)
									throw new Error(
										`${e} cannot be called after event is finalized.`,
									);
							},
							s = {
								setUserXdm(e) {
									a('setUserXdm'), (t = e);
								},
								setUserData(e) {
									a('setUserData'), (n = e);
								},
								mergeXdm(t) {
									a('mergeXdm'), t && g(e, { xdm: t });
								},
								mergeMeta(t) {
									a('mergeMeta'), t && g(e, { meta: t });
								},
								mergeQuery(t) {
									a('mergeQuery'), t && g(e, { query: t });
								},
								documentMayUnload() {
									o = !0;
								},
								finalize(o) {
									if (
										!r &&
										(t && s.mergeXdm(t), n && (e.data = n), (r = !0), o)
									) {
										i = !1;
										const t = { xdm: e.xdm || {}, data: e.data || {} },
											n = o(t);
										(i = !1 !== n),
											(e.xdm = t.xdm || {}),
											(e.data = t.data || {}),
											K(e.xdm) && delete e.xdm,
											K(e.data) && delete e.data;
									}
								},
								getDocumentMayUnload: () => o,
								isEmpty: () => K(e) && (!t || K(t)) && (!n || K(n)),
								shouldSend: () => i,
								getViewName() {
									if (t && t.web && t.web.webPageDetails)
										return t.web.webPageDetails.viewName;
								},
								toJSON() {
									if (!r) throw new Error('toJSON called before finalize');
									return e;
								},
							};
						return s;
					},
					st = 'configure',
					ct = 'setDebug',
					ut = 'https://adobe.ly/3sHgQHb',
					dt = ({ command: e, options: t }) => {
						const {
							commandName: n,
							documentationUri: o = ut,
							optionsValidator: r,
						} = e;
						let i = t;
						if (r)
							try {
								i = r(t);
							} catch (e) {
								throw new Error(
									`Invalid ${n} command options:\n\t - ${e} For command documentation see: ${o}`,
								);
							}
						return i;
					},
					lt = ({ eventManager: e }) => ({
						commands: {
							sendEvent: {
								documentationUri: 'https://adobe.ly/3GQ3Q7t',
								optionsValidator: (e) =>
									(({ options: e }) =>
										ze({
											type: Je(),
											xdm: ze({ eventType: Je(), identityMap: Qe }),
											data: ze({}),
											renderDecisions: Be(),
											decisionScopes: _e(Je()),
											datasetId: Je(),
										}).required()(e))({ options: e }),
								run: (t) => {
									const {
											xdm: n,
											data: o,
											documentUnloading: r = !1,
											type: i,
											mergeId: a,
											renderDecisions: s = !1,
											decisionScopes: c = [],
											datasetId: u,
										} = t,
										d = e.createEvent();
									return (
										r && d.documentMayUnload(),
										d.setUserXdm(n),
										d.setUserData(o),
										i && d.mergeXdm({ eventType: i }),
										a && d.mergeXdm({ eventMergeId: a }),
										u && d.mergeMeta({ collect: { datasetId: u } }),
										e.sendEvent(d, { renderDecisions: s, decisionScopes: c })
									);
								},
							},
						},
					});
				(lt.namespace = 'DataCollector'), (lt.configValidators = {});
				const mt = lt,
					pt = {
						clickCollectionEnabled: Be().default(!0),
						downloadLinkQualifier: Je()
							.regexp()
							.default(
								'\\.(exe|zip|wav|mp3|mov|mpg|avi|wmv|pdf|doc|docx|xls|xlsx|ppt|pptx)$',
							),
					},
					ft = ({ config: e, eventManager: t, handleError: n }) => {
						const o = ((e, t) => (n, o) => {
							const r = ((e) => {
								let t = e;
								for (; t; ) {
									if (
										(n = t).href &&
										('A' === n.tagName || 'AREA' === n.tagName) &&
										(!n.onclick ||
											!n.protocol ||
											n.protocol.toLowerCase().indexOf('javascript') < 0)
									)
										return t;
									t = t.parentNode;
								}
								var n;
								return null;
							})(o);
							if (!r) return;
							const i = ((e, t) => {
								const n = e.location;
								let o = t.href ? t.href : '',
									{ protocol: r, host: i } = t;
								if (!((e) => e && /^[a-z0-9]+:\/\//i.test(e))(o)) {
									r || (r = n.protocol ? n.protocol : ''),
										(r = r ? `${r}//` : ''),
										i || (i = n.host ? n.host : '');
									let e = '';
									if ('/' !== o.substring(0, 1)) {
										let t = n.pathname.lastIndexOf('/');
										(t = t < 0 ? 0 : t), (e = n.pathname.substring(0, t));
									}
									o = `${r}${i}${e}/${o}`;
								}
								return o;
							})(e, r);
							if (!i) return;
							const a = ((e, t, n, o) => {
								let r = 'other';
								return (
									((e, t, n) => {
										const o = new RegExp(e);
										return !!n.download || o.test(t.toLowerCase());
									})(t.downloadLinkQualifier, n, o)
										? (r = 'download')
										: ((e, t) => {
												const n = e.location.hostname.toLowerCase();
												return !(t.toLowerCase().indexOf(n) >= 0);
											})(e, n) && (r = 'exit'),
									r
								);
							})(e, t, i, r);
							n.documentMayUnload(),
								n.mergeXdm({
									eventType: 'web.webinteraction.linkClicks',
									web: {
										webInteraction: {
											name: 'Link Click',
											type: a,
											URL: i,
											linkClicks: { value: 1 },
										},
									},
								});
						})(window, e);
						return {
							lifecycle: {
								onComponentsRegistered(o) {
									const { lifecycle: r } = o;
									(({
										config: e,
										eventManager: t,
										lifecycle: n,
										handleError: o,
									}) => {
										if (!e.clickCollectionEnabled) return;
										const r = (
											({ eventManager: e, lifecycle: t, handleError: n }) =>
											(o) => {
												const r = o.target,
													i = e.createEvent();
												return t
													.onClick({ event: i, clickedElement: r })
													.then(() =>
														i.isEmpty() ? Promise.resolve() : e.sendEvent(i),
													)
													.then(oe)
													.catch((e) => {
														n(e, 'click collection');
													});
											}
										)({ eventManager: t, lifecycle: n, handleError: o });
										document.addEventListener('click', r, !0);
									})({
										config: e,
										eventManager: t,
										lifecycle: r,
										handleError: n,
									});
								},
								onClick({ event: e, clickedElement: t }) {
									o(e, t);
								},
							},
						};
					};
				(ft.namespace = 'ActivityCollector'), (ft.configValidators = pt);
				const gt = ft,
					vt = (e, t) => `ID sync ${t ? 'succeeded' : 'failed'}: ${e.spec.url}`,
					ht = {
						thirdPartyCookiesEnabled: Be().default(!0),
						idMigrationEnabled: Be().default(!0),
					},
					yt = (e) => (
						ze({ namespaces: _e(Fe('ECID')).nonEmpty() }).noUnknownFields()(e),
						{ namespaces: ['ECID'] }
					),
					wt = ze({ url: Je().required().nonEmpty() })
						.required()
						.noUnknownFields(),
					bt = ({ logger: e }) =>
						new Promise((t, n) => {
							if (p(window.adobe) && p(window.adobe.optIn)) {
								const o = window.adobe.optIn;
								e.info(
									'Delaying request while waiting for legacy opt-in to let Visitor retrieve ECID from server.',
								),
									o.fetchPermissions(() => {
										o.isApproved([o.Categories.ECID])
											? (e.info(
													'Received legacy opt-in approval to let Visitor retrieve ECID from server.',
												),
												t())
											: n(new Error('Legacy opt-in was declined.'));
									}, !0);
							} else t();
						}),
					Ct = ({ logger: e, orgId: t, awaitVisitorOptIn: n }) => {
						const o = ((e) => {
							const t = e.Visitor;
							return D(t) && D(t.getInstance) && t;
						})(window);
						return () =>
							o
								? n({ logger: e })
										.then(
											() => (
												e.info(
													'Delaying request while using Visitor to retrieve ECID from server.',
												),
												new Promise((n) => {
													o.getInstance(t, {}).getMarketingCloudVisitorID(
														(t) => {
															e.info(
																'Resuming previously delayed request that was waiting for ECID from Visitor.',
															),
																n(t);
														},
														!0,
													);
												})
											),
										)
										.catch((t) => {
											t
												? e.info(
														`${t.message}, retrieving ECID from experience edge`,
													)
												: e.info(
														'An error occurred while obtaining the ECID from Visitor.',
													);
										})
								: Promise.resolve();
					},
					It = 'ECID',
					xt = (e) => {
						e.mergeQuery({ identity: { fetch: [It] } });
					},
					Et = ((n, i) => {
						const a = new Map();
						return (...n) => {
							const i = n[0];
							if (a.has(i)) return a.get(i);
							const s = ((n) => {
								return ((i = {
									[t]: /Edge\/([0-9\._]+)/,
									[o]: /Edg\/([0-9\.]+)/,
									[e]: /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/,
									Firefox: /Firefox\/([0-9\.]+)(?:\s|$)/,
									IE: /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/,
									Safari: /Version\/([0-9\._]+).*Safari/,
								}),
								(e) => {
									const t = Object.keys(i);
									for (let n = 0; n < t.length; n += 1) {
										const o = t[n];
										if (i[o].test(e)) return o;
									}
									return r;
								})(n.navigator.userAgent);
								var i;
							})(...n);
							return a.set(i, s), s;
						};
					})(),
					St = (e, t) => {
						e.addIdentity(It, { id: t });
					},
					kt = (e) => {
						const t = e.getPayloadsByType('identity:result'),
							n = C(t, (e) => e.namespace && e.namespace.code === It);
						return n ? n.id : void 0;
					},
					Pt = (e) => (t, n) => {
						(e.xdm = e.xdm || {}),
							(e.xdm.identityMap = e.xdm.identityMap || {}),
							(e.xdm.identityMap[t] = e.xdm.identityMap[t] || []),
							e.xdm.identityMap[t].push(n);
					},
					Dt = (e) => {
						const { payload: t, getAction: n, getUseSendBeacon: o } = e,
							r = pe();
						let i = !1,
							a = !1;
						return {
							getId: () => r,
							getPayload: () => t,
							getAction: () => n({ isIdentityEstablished: a }),
							getUseSendBeacon: () => o({ isIdentityEstablished: a }),
							getUseIdThirdPartyDomain: () => i,
							setUseIdThirdPartyDomain() {
								i = !0;
							},
							setIsIdentityEstablished() {
								a = !0;
							},
						};
					},
					Tt = (e) => {
						const t = ({ isIdentityEstablished: t }) =>
							e.getDocumentMayUnload() && t;
						return Dt({
							payload: e,
							getAction: ({ isIdentityEstablished: e }) =>
								t({ isIdentityEstablished: e }) ? 'collect' : 'interact',
							getUseSendBeacon: t,
						});
					},
					Rt = (e) => {
						const { content: t, addIdentity: n, hasIdentity: o } = e;
						return {
							mergeState: v(t, 'meta.state'),
							mergeQuery: v(t, 'query'),
							addIdentity: n,
							hasIdentity: o,
							toJSON: () => t,
						};
					},
					Ot = (e) => (t) =>
						void 0 !== (e.xdm && e.xdm.identityMap && e.xdm.identityMap[t]),
					At = () => {
						const e = {},
							t = Rt({ content: e, addIdentity: Pt(e), hasIdentity: Ot(e) });
						return (
							(t.addEvent = (t) => {
								(e.events = e.events || []), e.events.push(t);
							}),
							(t.getDocumentMayUnload = () =>
								(e.events || []).some((e) => e.getDocumentMayUnload())),
							t
						);
					},
					qt = (e) =>
						Dt({
							payload: e,
							getAction: () => 'identity/acquire',
							getUseSendBeacon: () => !1,
						}),
					jt = (e) => {
						const t = { query: { identity: { fetch: e } } };
						return Rt({ content: t, addIdentity: Pt(t), hasIdentity: Ot(t) });
					},
					Nt = /^([^?#]*)(\??[^#]*)(#?.*)$/,
					Lt = ({
						config: e,
						logger: t,
						consent: n,
						fireReferrerHideableImage: o,
						sendEdgeNetworkRequest: r,
						apexDomain: i,
					}) => {
						const { orgId: a, thirdPartyCookiesEnabled: c } = e,
							d = (({
								config: e,
								getEcidFromVisitor: t,
								apexDomain: n,
								isPageSsl: o,
								cookieJar: r,
							}) => {
								const { idMigrationEnabled: i, orgId: a } = e,
									s = `AMCV_${a}`,
									c = () => {
										let e = null;
										const t = r.get('s_ecid') || r.get(s);
										if (t) {
											const n = /(^|\|)MCMID\|(\d+)($|\|)/,
												o = t.match(n);
											o && (e = o[2]);
										}
										return e;
									};
								return {
									getEcid() {
										if (i) {
											const e = c();
											return e ? Promise.resolve(e) : t();
										}
										return Promise.resolve();
									},
									setEcid(e) {
										if (i && c() !== e) {
											const t = o ? { sameSite: 'none', secure: !0 } : {};
											r.set(s, `MCMID|${e}`, { domain: n, expires: 390, ...t });
										}
									},
								};
							})({
								config: e,
								getEcidFromVisitor: Ct({
									logger: t,
									orgId: a,
									awaitVisitorOptIn: bt,
								}),
								apexDomain: i,
								cookieJar: y({ logger: t, cookieJar: l }),
								isPageSsl: 'https:' === window.location.protocol,
							}),
							m = X({ orgId: a }),
							p = (
								({
									sendEdgeNetworkRequest: e,
									createIdentityRequestPayload: t,
									createIdentityRequest: n,
								}) =>
								(o) => {
									const r = t(o),
										i = n(r);
									return e({ request: i });
								}
							)({
								sendEdgeNetworkRequest: r,
								createIdentityRequestPayload: jt,
								createIdentityRequest: qt,
							}),
							f = (
								({
									thirdPartyCookiesEnabled: e,
									areThirdPartyCookiesSupportedByDefault: t,
								}) =>
								(n) => {
									e && t(Et(window)) && n.setUseIdThirdPartyDomain();
								}
							)({
								thirdPartyCookiesEnabled: c,
								areThirdPartyCookiesSupportedByDefault: s,
							}),
							g = (
								({ getLegacyEcid: e, addEcidToPayload: t }) =>
								(n) =>
									n.hasIdentity(It)
										? Promise.resolve()
										: e().then((e) => {
												e && t(n, e);
											})
							)({ getLegacyEcid: d.getEcid, addEcidToPayload: St }),
							v = (
								({ locationSearch: e, dateProvider: t, orgId: n, logger: o }) =>
								(r) => {
									if (r.hasIdentity(It)) return;
									const i = ie.parse(e).adobe_mc;
									if (void 0 === i) return;
									const a = i.split('|').reduce((e, t) => {
											const [n, o] = t.split('=');
											return (e[n] = o), e;
										}, {}),
										s = parseInt(a.TS, 10),
										c = a.MCMID,
										u = decodeURIComponent(a.MCORGID);
									t().getTime() / 1e3 <= s + 300 && u === n && c
										? (o.info(
												`Found valid ECID identity ${c} from the adobe_mc query string parameter.`,
											),
											r.addIdentity(It, { id: c }))
										: o.info(
												'Detected invalid or expired adobe_mc query string parameter.',
											);
								}
							)({
								locationSearch: window.document.location.search,
								dateProvider: () => new Date(),
								orgId: a,
								logger: t,
							}),
							h = (
								({ doesIdentityCookieExist: e, orgId: t }) =>
								({ onResponse: n, onRequestFailure: o }) =>
									new Promise((r, i) => {
										n(() => {
											if (!e()) {
												const e = new Error(
													`An identity was not set properly. Please verify that the org ID ${t} configured in Alloy matches the org ID specified in the edge configuration.`,
												);
												throw (i(e), e);
											}
											r();
										}),
											o(() => {
												e()
													? r()
													: i(new Error('No identity was set on response.'));
											});
									})
							)({ doesIdentityCookieExist: m, orgId: a }),
							w = (({
								doesIdentityCookieExist: e,
								setDomainForInitialIdentityPayload: t,
								addLegacyEcidToPayload: n,
								awaitIdentityCookie: o,
								logger: r,
							}) => {
								let i;
								const a = (e) => (t(e), n(e.getPayload()));
								return ({ request: t, onResponse: n, onRequestFailure: s }) => {
									if (e())
										return t.setIsIdentityEstablished(), Promise.resolve();
									if (i) {
										r.info(
											'Delaying request while retrieving ECID from server.',
										);
										const e = i;
										return (
											(i = e.catch(() =>
												o({ onResponse: n, onRequestFailure: s }),
											)),
											e
												.then(() => {
													r.info('Resuming previously delayed request.'),
														t.setIsIdentityEstablished();
												})
												.catch(() => a(t))
										);
									}
									return (i = o({ onResponse: n, onRequestFailure: s })), a(t);
								};
							})({
								doesIdentityCookieExist: m,
								setDomainForInitialIdentityPayload: f,
								addLegacyEcidToPayload: g,
								awaitIdentityCookie: h,
								logger: t,
							}),
							b = (
								({ fireReferrerHideableImage: e, logger: t }) =>
								(n) => {
									const o = n.filter((e) => 'url' === e.type);
									return o.length
										? Promise.all(
												o.map((n) =>
													e(n.spec)
														.then(() => {
															t.info(vt(n, !0));
														})
														.catch(() => {
															t.error(vt(n, !1));
														}),
												),
											).then(oe)
										: Promise.resolve();
								}
							)({ fireReferrerHideableImage: o, logger: t }),
							C = (
								({ processIdSyncs: e }) =>
								(t) =>
									e(t.getPayloadsByType('identity:exchange'))
							)({ processIdSyncs: b }),
							I = (
								({ dateProvider: e, orgId: t }) =>
								(n, o) => {
									const r = Math.round(e().getTime() / 1e3),
										i = encodeURIComponent(
											`TS=${r}|MCMID=${n}|MCORGID=${encodeURIComponent(t)}`,
										),
										[, a, s, c] = o.match(Nt),
										u = ((e) => ('' === e ? '?' : '?' === e ? '' : '&'))(s);
									return `${a}${s}${u}adobe_mc=${i}${c}`;
								}
							)({ dateProvider: () => new Date(), orgId: a });
						return (({
							addEcidQueryToPayload: e,
							addQueryStringIdentityToPayload: t,
							ensureSingleIdentity: n,
							setLegacyEcid: o,
							handleResponseForIdSyncs: r,
							getEcidFromResponse: i,
							getIdentity: a,
							consent: s,
							appendIdentityToUrl: c,
							logger: d,
						}) => {
							let l,
								m = {};
							return {
								lifecycle: {
									onBeforeRequest: ({
										request: o,
										onResponse: r,
										onRequestFailure: i,
									}) => (
										e(o.getPayload()),
										t(o.getPayload()),
										n({ request: o, onResponse: r, onRequestFailure: i })
									),
									onResponse: ({ response: e }) => (
										l || ((l = i(e)), l && o(l)), (m = u(m, e.getEdge())), r(e)
									),
								},
								commands: {
									getIdentity: {
										optionsValidator: yt,
										run: (e) =>
											s
												.awaitConsent()
												.then(() => (l ? void 0 : a(e.namespaces)))
												.then(() => ({ identity: { ECID: l }, edge: m })),
									},
									appendIdentityToUrl: {
										optionsValidator: wt,
										run: (e) =>
											s
												.withConsent()
												.then(() => (l ? void 0 : a(e.namespaces)))
												.then(() => ({ url: c(l, e.url) }))
												.catch(
													(t) => (
														d.warn(
															`Unable to append identity to url. ${t.message}`,
														),
														e
													),
												),
									},
								},
							};
						})({
							addEcidQueryToPayload: xt,
							addQueryStringIdentityToPayload: v,
							ensureSingleIdentity: w,
							setLegacyEcid: d.setEcid,
							handleResponseForIdSyncs: C,
							getEcidFromResponse: kt,
							getIdentity: p,
							consent: n,
							appendIdentityToUrl: I,
							logger: t,
						});
					};
				(Lt.namespace = 'Identity'), (Lt.configValidators = ht);
				const Mt = Lt,
					Ut = (e, t) =>
						`URL destination ${t ? 'succeeded' : 'failed'}: ${e.spec.url}`,
					$t =
						({ processDestinations: e }) =>
						({ response: t }) =>
							(({ response: t }) => {
								const n = t.getPayloadsByType('activation:push');
								return e(n);
							})({ response: t }).then(() =>
								(({ response: e }) => ({
									destinations: e.getPayloadsByType('activation:pull'),
								}))({ response: t }),
							),
					_t = ({ logger: e, fireReferrerHideableImage: t }) => {
						const n = (({
							fireReferrerHideableImage: e,
							logger: t,
							cookieJar: n,
							isPageSsl: o,
						}) => {
							const r = o ? { sameSite: 'none', secure: !0 } : {};
							return (o) => (
								((e) => {
									e.filter((e) => 'cookie' === e.type).forEach((e) => {
										const { name: t, value: o, domain: i, ttlDays: a } = e.spec;
										n.set(t, o || '', {
											domain: i || '',
											expires: a || 10,
											...r,
										});
									});
								})(o),
								((n) => {
									const o = n.filter((e) => 'url' === e.type);
									return Promise.all(
										o.map((n) =>
											e(n.spec)
												.then(() => {
													t.info(Ut(n, !0));
												})
												.catch(() => {
													t.error(Ut(n, !1));
												}),
										),
									).then(oe);
								})(o)
							);
						})({
							fireReferrerHideableImage: t,
							logger: e,
							cookieJar: y({ logger: e, cookieJar: l }),
							isPageSsl: 'https:' === window.location.protocol,
						});
						return {
							lifecycle: { onResponse: $t({ processDestinations: n }) },
							commands: {},
						};
					};
				(_t.namespace = 'Audiences'), (_t.configValidators = {});
				const Bt = _t,
					Vt = '__view__',
					Ft = 'https://ns.adobe.com/personalization/default-content-item',
					Ht = 'https://ns.adobe.com/personalization/dom-action',
					zt = 'https://ns.adobe.com/personalization/html-content-item',
					Jt = 'https://ns.adobe.com/personalization/redirect-item',
					Wt = ({
						renderDecisions: e,
						decisionScopes: t,
						event: n,
						viewCache: o,
					}) => {
						const r = n.getViewName();
						return {
							isRenderDecisions: () => e,
							getViewName: () => r,
							hasScopes: () => t.length > 0,
							hasViewName: () => ne(r),
							createQueryDetails() {
								const e = [...t];
								this.isCacheInitialized() || i(e, Vt) || e.push(Vt);
								const n = [
									Ft,
									zt,
									'https://ns.adobe.com/personalization/json-content-item',
									Jt,
								];
								return (
									i(e, Vt) && n.push(Ht), { schemas: n, decisionScopes: e }
								);
							},
							isCacheInitialized: () => o.isInitialized(),
							shouldFetchData() {
								return this.hasScopes() || !this.isCacheInitialized();
							},
							shouldUseCachedData() {
								return this.hasViewName() && this.isCacheInitialized();
							},
						};
					},
					Qt = { propositions: [] },
					Xt = (e) => x('DIV', {}, { innerHTML: e });
				var Gt = n(148),
					Yt = n.n(Gt);
				const Kt = /:eq\((\d+)\)/g,
					Zt = (e) => -1 === e.indexOf(':eq('),
					en = /(#|\.)(-?\w+)/g,
					tn = (e, t, n) => `${t}${Yt()(n)}`,
					nn = (e) => {
						const t = document;
						if (Zt(e)) return L(e, t);
						const n = ((e) => {
								const t = [],
									n = ((e) => e.split(Kt).filter(ne))(e.trim().replace(en, tn)),
									{ length: o } = n;
								let r = 0;
								for (; r < o; ) {
									const e = n[r],
										o = n[r + 1];
									o ? t.push({ sel: e, eq: Number(o) }) : t.push({ sel: e }),
										(r += 2);
								}
								return t;
							})(e),
							{ length: o } = n;
						let r = [],
							i = t,
							a = 0;
						for (; a < o; ) {
							const { sel: e, eq: t } = n[a],
								s = L(e, i),
								{ length: c } = s;
							if (0 === c) break;
							if (null != t && t > c - 1) break;
							a < o - 1 && (null == t ? ([i] = s) : (i = s[t])),
								a === o - 1 && (r = null == t ? s : [s[t]]),
								(a += 1);
						}
						return r;
					},
					on = (e, t = document) => t.getElementById(e),
					rn = (e, t, n) => {
						e.setAttribute(t, n);
					},
					an = (e, t) => e.getAttribute(t),
					sn = (e) => e.parentNode,
					cn = (e, t) => {
						if (!e) return;
						const n = sn(e);
						n && n.insertBefore(t, ((e) => e.nextElementSibling)(e));
					},
					un = (e, t) => {
						if (!e) return;
						const n = sn(e);
						n && n.insertBefore(t, e);
					},
					dn = (e) => {
						const { childNodes: t } = e;
						return t ? R(t) : [];
					},
					ln = (e) => e.firstElementChild;
				let mn;
				const pn = (e = document) => {
						if (void 0 === mn) {
							const t = e.querySelector('[nonce]');
							mn = t && (t.nonce || t.getAttribute('nonce'));
						}
						return mn;
					},
					fn = 'alloy-prehiding',
					gn = {},
					vn = (e) => {
						const t = gn[e];
						t && (B(t), delete gn[e]);
					},
					hn = (e) => {
						if (!e) return;
						if (on(fn)) return;
						const t = pn(),
							n = { id: fn, ...(t && { nonce: t }) },
							o = x(S, n, { textContent: e });
						I(document.head, o);
					},
					yn = () => {
						const e = on(fn);
						e && B(e);
					},
					wn = (e, t) => {
						e.textContent = t;
					},
					bn = 'src',
					Cn = (e) => x(E, { src: e }),
					In = (e) => {
						L(E, e).forEach((e) => {
							const t = an(e, bn);
							t && Cn(t);
						});
					},
					xn = (e) => ((e, t) => 'STYLE' === e.tagName)(e) && !an(e, bn),
					En = (e) => {
						const t = L(S, e),
							{ length: n } = t,
							o = pn();
						if (o)
							for (let e = 0; e < n; e += 1) {
								const n = t[e];
								xn(n) && (n.nonce = o);
							}
					};
				var Sn = n(59),
					kn = n.n(Sn);
				const Pn = (e, t) => !!e && e.tagName === t,
					Dn = (e) => Pn(e, k) && !an(e, bn),
					Tn = (e) => Pn(e, k) && an(e, bn),
					Rn = (e) => {
						const t = L(k, e),
							n = [],
							{ length: o } = t,
							r = pn(),
							i = { ...(r && { nonce: r }) };
						for (let e = 0; e < o; e += 1) {
							const o = t[e];
							if (!Dn(o)) continue;
							const { textContent: r } = o;
							r && n.push(x(k, i, { textContent: r }));
						}
						return n;
					},
					On = (e) => {
						const t = L(k, e),
							n = [],
							{ length: o } = t;
						for (let e = 0; e < o; e += 1) {
							const o = t[e];
							if (!Tn(o)) continue;
							const r = an(o, bn);
							r && n.push(r);
						}
						return n;
					},
					An = (e, t) => {
						t.forEach((t) => {
							e.appendChild(t), e.removeChild(t);
						});
					},
					qn = (e) => Promise.all(e.map(kn())),
					jn = (e, t) => {
						const n = Xt(t);
						En(n);
						const o = dn(n),
							r = Rn(n),
							i = On(n);
						return (
							In(n),
							o.forEach((t) => {
								I(e, t);
							}),
							An(e, r),
							qn(i)
						);
					},
					Nn = (e, t) => {
						((e) => {
							dn(e).forEach(B);
						})(e),
							jn(e, t);
					},
					Ln = (e, t) => {
						const n = Xt(t);
						En(n);
						const o = dn(n),
							r = Rn(n),
							i = On(n),
							{ length: a } = o;
						let s = a - 1;
						for (In(n); s >= 0; ) {
							const t = o[s],
								n = ln(e);
							n ? un(n, t) : I(e, t), (s -= 1);
						}
						return An(e, r), qn(i);
					},
					Mn = (e, t) => {
						const n = Xt(t);
						En(n);
						const o = dn(n),
							r = Rn(n),
							i = On(n);
						return (
							In(n),
							o.forEach((t) => {
								un(e, t);
							}),
							An(e, r),
							qn(i)
						);
					},
					Un = (e, t) => {
						Mn(e, t), B(e);
					},
					$n = (e, t) => {
						const n = Xt(t);
						En(n);
						const o = dn(n),
							r = Rn(n),
							i = On(n);
						return (
							In(n),
							o.forEach((t) => {
								cn(e, t);
							}),
							An(e, r),
							qn(i)
						);
					},
					_n = (e, t) => {
						const { priority: n, ...o } = t;
						Object.keys(o).forEach((t) => {
							((e, t, n, o) => {
								let r;
								(r = o ? `${t}:${n} !${o};` : `${t}:${n};`),
									(e.style.cssText += `;${r}`);
							})(e, t, o[t], n);
						});
					},
					Bn = (e, t) => {
						Object.keys(t).forEach((n) => {
							rn(e, n, t[n]);
						});
					},
					Vn = (e, t) => {
						e.tagName === E && (Cn(t), e.removeAttribute('src'), rn(e, bn, t));
					},
					Fn = (e, { from: t, to: n }) => {
						const o = ((e) => {
								const { children: t } = e;
								return t ? R(t) : [];
							})(e),
							r = o[t],
							i = o[n];
						r && i && (t < n ? cn(i, r) : un(i, r));
					},
					Hn = (e) => (t) => {
						const {
							selector: n,
							prehidingSelector: o,
							content: r,
							meta: i,
						} = t;
						return (
							((e) => {
								if (gn[e]) return;
								const t = pn(),
									n = { ...(t && { nonce: t }) },
									o = x(S, n, { textContent: `${e} { visibility: hidden }` });
								I(document.head, o), (gn[e] = o);
							})(o),
							_(n, nn)
								.then((t) =>
									((e, t, n) => {
										const o = e.map((e) => n(e, t));
										return Promise.all(o);
									})(t, r, e),
								)
								.then(
									() => (vn(o), { meta: i }),
									(e) => (vn(o), { meta: i, error: e }),
								)
						);
					},
					zn = (e, t, n) => {
						if (e.enabled) {
							const o = JSON.stringify(t),
								{ message: r, stack: i } = n,
								a = `Failed to execute action ${o}. ${r} ${i ? `\n ${i}` : ''}`;
							e.error(a);
						}
					},
					Jn = (e, t, n) => {
						const o = e.map((e) => {
							const o = ((e) => {
									const t = u({}, e),
										{ content: n, selector: o } = t;
									if (!te((r = n)) || !r.trim()) return t;
									var r;
									const i = nn(o);
									return Pn(i[0], 'HEAD')
										? ((t.type = 'appendHtml'),
											(t.content = ((e) => {
												const t = Xt(e);
												return L('SCRIPT,LINK,STYLE', t)
													.map((e) => e.outerHTML)
													.join('');
											})(n)),
											t)
										: t;
								})(e),
								{ type: r } = o;
							return ((e, t, n, o) => {
								const r = t[n];
								if (!r) {
									const t = new Error(`DOM action "${n}" not found`);
									throw (zn(e, o[0], t), t);
								}
								return r(...o);
							})(n, t, r, [o])
								.then(
									(e) => (
										((e, t) => {
											if (e.enabled) {
												const n = JSON.stringify(t);
												e.info(`Action ${n} executed.`);
											}
										})(n, o),
										e
									),
								)
								.catch((e) => {
									throw (zn(n, o, e), e);
								});
						});
						return Promise.all(o);
					},
					Wn = (e) => e,
					Qn = (e, t) => {
						if (Zt(e))
							return ((e, t) =>
								t.matches ? t.matches(e) : t.msMatchesSelector(e))(e, t);
						const n = nn(e);
						let o = !1;
						for (let e = 0; e < n.length; e += 1)
							if (n[e] === t) {
								o = !0;
								break;
							}
						return o;
					},
					Xn = (e, t, n) => {
						const { documentElement: o } = document;
						let r = e;
						for (; r && r !== o; ) {
							if (Qn(t, r)) return n(t);
							r = r.parentNode;
						}
						return null;
					},
					Gn = (e, t, n) => {
						const o = [];
						for (let r = 0; r < t.length; r += 1) {
							const i = Xn(e, t[r], n);
							i && o.push(...i);
						}
						return o;
					},
					Yn = (e = document) =>
						-1 !== e.location.href.indexOf('adobe_authoring_enabled'),
					Kn = (e, t) => {
						e.mergeXdm({ _experience: { decisioning: { propositions: t } } });
					},
					Zn = (e, t) => {
						e.mergeQuery({ personalization: { ...t } });
					},
					eo = ({ decisions: e, renderAttempted: t }) =>
						e.map((e) => u({ renderAttempted: t }, e)),
					to = (e = [], t) => {
						const n = {
							propositions: eo({ decisions: e, renderAttempted: t }),
						};
						return t || (n.decisions = e), n;
					},
					no = (e, t) => ({
						id: e.id,
						scope: e.scope,
						items: t,
						scopeDetails: e.scopeDetails,
					}),
					oo = (e, ...t) => {
						const n = [],
							o = [];
						return (
							e.forEach((e) => {
								const { items: r = [] } = e,
									[a, s] = ((e, t) => {
										const n = [],
											o = [];
										return (
											e.forEach((e) => {
												i(t, e.schema) ? n.push(e) : o.push(e);
											}),
											[n, o]
										);
									})(r, t);
								T(a) && n.push(no(e, a)), T(s) && o.push(no(e, s));
							}),
							{ matchedDecisions: n, unmatchedDecisions: o }
						);
					},
					ro = (e) => {
						const t = oo(e, Jt),
							n = ((e) => {
								const t = e.filter((e) => {
										const { items: t = [] } = e;
										return t.some(
											(e) =>
												'https://ns.adobe.com/personalization/measurement' ===
												e.schema,
										);
									}),
									n = e.filter((e) => !i(t, e));
								return { matchedDecisions: t, unmatchedDecisions: n };
							})(t.unmatchedDecisions),
							o = oo(n.unmatchedDecisions, Ht, Ft),
							{
								pageWideScopeDecisions: r,
								nonPageWideScopeDecisions: a,
								viewScopeDecisions: s,
							} = ((e) => {
								const t = [],
									n = [],
									o = {};
								return (
									T(e) &&
										e.forEach((e) => {
											var r;
											e.scope === Vt
												? t.push(e)
												: (r = e.scopeDetails).characteristics &&
													  r.characteristics.scopeType &&
													  'view' === r.characteristics.scopeType
													? ((e, t) => {
															e[t.scope] || (e[t.scope] = []),
																e[t.scope].push(t);
														})(o, e)
													: n.push(e);
										}),
									{
										pageWideScopeDecisions: t,
										nonPageWideScopeDecisions: n,
										viewScopeDecisions: o,
									}
								);
							})(o.matchedDecisions);
						return {
							redirectDecisions: t.matchedDecisions,
							pageWideScopeDecisions: r,
							viewDecisions: s,
							nonAutoRenderableDecisions: [
								...n.matchedDecisions,
								...o.unmatchedDecisions,
								...a,
							],
						};
					},
					io =
						({ viewCache: e }) =>
						({
							viewName: t,
							redirectDecisions: n,
							pageWideScopeDecisions: o,
							nonAutoRenderableDecisions: r,
						}) => {
							const i = [...n, ...o, ...r];
							return Promise.resolve(i)
								.then((n) =>
									(({ viewCache: e, viewName: t, propositions: n }) =>
										t ? e.getView(t).then((e) => [...e, ...n]) : n)({
										viewCache: e,
										viewName: t,
										propositions: n,
									}),
								)
								.then((e) =>
									(({ propositions: e }) => ({
										decisions: e,
										propositions: eo({ decisions: e, renderAttempted: !1 }),
									}))({ propositions: e }),
								);
						},
					ao = [Ht, zt],
					so = ({ executeDecisions: e }) => {
						const t = (e) => ao.indexOf(e.schema) > -1,
							n = ({ items: e, metadataForScope: n }) =>
								e
									.filter(t)
									.map((e) =>
										e.schema !== zt
											? { ...e }
											: p(n)
												? {
														...e,
														data: {
															...e.data,
															selector: n.selector,
															type: n.actionType,
														},
													}
												: void 0,
									)
									.filter((e) => e),
							o = (e) => !(e.scope === Vt && e.renderAttempted);
						return ({ propositions: t, metadata: r = {} }) =>
							T(t)
								? (({ propositions: t, metadata: r }) => {
										const i = (({ propositions: e, metadata: t }) =>
											e
												.filter(o)
												.map((e) => {
													if (T(e.items)) {
														const { id: o, scope: r, scopeDetails: i } = e;
														return {
															id: o,
															scope: r,
															scopeDetails: i,
															items: n({
																items: e.items,
																metadataForScope: t[e.scope],
															}),
														};
													}
													return e;
												})
												.filter((e) => T(e.items)))({
											propositions: t,
											metadata: r,
										});
										return e(i).then(() => to(i, !0));
									})({ propositions: t, metadata: r })
								: Promise.resolve(Qt);
					},
					co = ({ config: e, logger: t, eventManager: n }) => {
						const o = (
								({ eventManager: e, mergeDecisionsMeta: t }) =>
								({
									decisionsMeta: n = [],
									documentMayUnload: o = !1,
									viewName: r,
								}) => {
									const i = e.createEvent(),
										a = { eventType: 'decisioning.propositionDisplay' };
									return (
										r && (a.web = { webPageDetails: { viewName: r } }),
										T(n) && t(i, n),
										i.mergeXdm(a),
										o && i.documentMayUnload(),
										e.sendEvent(i)
									);
								}
							)({ eventManager: n, mergeDecisionsMeta: Kn }),
							{
								getClickMetasBySelector: r,
								getClickSelectors: i,
								storeClickMetrics: a,
							} = (() => {
								const e = {};
								return {
									storeClickMetrics: (t) => {
										e[t.selector] || (e[t.selector] = {}),
											(e[t.selector][t.meta.id] = {
												scope: t.meta.scope,
												scopeDetails: t.meta.scopeDetails,
											});
									},
									getClickSelectors: () => Object.keys(e),
									getClickMetasBySelector: (t) => {
										return e[t]
											? ((n = e[t]),
												Object.keys(n).map((e) => ({
													id: e,
													scope: n[e].scope,
													scopeDetails: n[e].scopeDetails,
												})))
											: {};
										var n;
									},
								};
							})(),
							s = (() => {
								let e;
								const t = b();
								return {
									storeViews: (n) => {
										n.then((n) => {
											void 0 === e && (e = {}), u(e, n), t.resolve();
										}).catch(() => {
											void 0 === e && (e = {}), t.resolve();
										});
									},
									getView: (n) => t.promise.then(() => e[n] || []),
									isInitialized: () => !(void 0 === e),
								};
							})(),
							c = (
								({ modules: e, logger: t, executeActions: n }) =>
								(o) => {
									const r = o.map((o) => {
										const r = ((e) => {
											const t = {
												id: e.id,
												scope: e.scope,
												scopeDetails: e.scopeDetails,
											};
											return e.items.map((e) =>
												u({ type: 'defaultContent' }, e.data, { meta: t }),
											);
										})(o);
										return n(r, e, t);
									});
									return Promise.all(r)
										.then((e) =>
											((e, t) => {
												const n = H(t, Wn),
													o = [],
													r = new Set();
												return (
													n.forEach((t) => {
														if (!t) return;
														if (t.error) return void e.warn(t);
														const { meta: n } = t;
														r.has(n.id) || (r.add(n.id), o.push(n));
													}),
													o
												);
											})(t, e),
										)
										.catch((e) => {
											t.error(e);
										});
								}
							)({
								modules:
									((h = a),
									{
										setHtml: Hn(Nn),
										customCode: Hn(Ln),
										setText: Hn(wn),
										setAttribute: Hn(Bn),
										setImageSource: Hn(Vn),
										setStyle: Hn(_n),
										move: Hn(_n),
										resize: Hn(_n),
										rearrange: Hn(Fn),
										remove: Hn(B),
										insertAfter: Hn($n),
										insertBefore: Hn(Mn),
										replaceHtml: Hn(Un),
										prependHtml: Hn(Ln),
										appendHtml: Hn(jn),
										click: (e) =>
											((e, t) => {
												const { selector: n, meta: o } = e;
												return t({ selector: n, meta: o }), Promise.resolve();
											})(e, h),
										defaultContent: (e) => Promise.resolve({ meta: e.meta }),
									}),
								logger: t,
								executeActions: Jn,
							}),
							d = (
								({ collect: e, window: t, logger: n, showContainers: o }) =>
								(r) => {
									const { content: i, decisions: a } = ((e) => {
										const t = e[0],
											{ items: n, id: o, scope: r, scopeDetails: i } = t,
											{ content: a } = n[0].data;
										return {
											content: a,
											decisions: [{ id: o, scope: r, scopeDetails: i }],
										};
									})(r);
									return e({ decisionsMeta: a, documentMayUnload: !0 })
										.then(() => {
											t.location.replace(i);
										})
										.catch(() => {
											o(),
												n.warn(
													'An error occurred while executing the redirect offer.',
												);
										});
								}
							)({ collect: o, window, logger: t, showContainers: yn }),
							l = (
								({
									viewCache: e,
									executeDecisions: t,
									showContainers: n,
									collect: o,
								}) =>
								({
									viewName: r,
									pageWideScopeDecisions: i,
									nonAutoRenderableDecisions: a,
								}) =>
									Promise.resolve(i)
										.then((n) =>
											(({
												viewCache: e,
												viewName: t,
												pageWideScopeDecisions: n,
											}) =>
												t
													? e
															.getView(t)
															.then((e) => ({
																pageWideScopeDecisions: n,
																viewPropositions: e,
															}))
													: {
															pageWideScopeDecisions: n,
															viewPropositions: [],
														})({
												viewCache: e,
												viewName: r,
												executeDecisions: t,
												pageWideScopeDecisions: n,
											}),
										)
										.then(
											(e) => (
												t(e.pageWideScopeDecisions).then((e) => {
													T(e) && o({ decisionsMeta: e });
												}),
												r &&
													t(e.viewPropositions).then((e) => {
														o({ decisionsMeta: e, viewName: r });
													}),
												n(),
												[...e.pageWideScopeDecisions, ...e.viewPropositions]
											),
										)
										.then((e) => ({
											decisions: [...a],
											propositions: [
												...eo({ decisions: e, renderAttempted: !0 }),
												...eo({ decisions: a, renderAttempted: !1 }),
											],
										}))
							)({
								viewCache: s,
								executeDecisions: c,
								showContainers: yn,
								collect: o,
							}),
							m = so({ executeDecisions: c }),
							p = (
								({
									autoRenderingHandler: e,
									nonRenderingHandler: t,
									groupDecisions: n,
									handleRedirectDecisions: o,
									showContainers: r,
								}) =>
								({
									decisionsDeferred: i,
									personalizationDetails: a,
									response: s,
								}) => {
									const c = s.getPayloadsByType('personalization:decisions'),
										u = a.getViewName();
									if (0 === c.length)
										return (
											r(), i.resolve({}), { decisions: [], propositions: [] }
										);
									const {
										redirectDecisions: d,
										pageWideScopeDecisions: l,
										viewDecisions: m,
										nonAutoRenderableDecisions: p,
									} = n(c);
									return a.isRenderDecisions() && T(d)
										? (i.resolve({}), o(d))
										: (i.resolve(m),
											a.isRenderDecisions()
												? e({
														viewName: u,
														pageWideScopeDecisions: l,
														nonAutoRenderableDecisions: p,
													})
												: t({
														viewName: u,
														redirectDecisions: d,
														pageWideScopeDecisions: l,
														nonAutoRenderableDecisions: p,
													}));
								}
							)({
								autoRenderingHandler: l,
								nonRenderingHandler: io({ viewCache: s }),
								groupDecisions: ro,
								handleRedirectDecisions: d,
								showContainers: yn,
							}),
							f = (
								({
									config: e,
									responseHandler: t,
									hideContainers: n,
									mergeQuery: o,
								}) =>
								({
									decisionsDeferred: r,
									personalizationDetails: i,
									event: a,
									onResponse: s,
								}) => {
									const { prehidingStyle: c } = e;
									i.isRenderDecisions() && n(c),
										o(a, i.createQueryDetails()),
										s(({ response: e }) =>
											t({
												decisionsDeferred: r,
												personalizationDetails: i,
												response: e,
											}),
										);
								}
							)({
								config: e,
								responseHandler: p,
								hideContainers: hn,
								mergeQuery: Zn,
							}),
							g = (
								({
									mergeDecisionsMeta: e,
									collectClicks: t,
									getClickSelectors: n,
									getClickMetasBySelector: o,
								}) =>
								({ event: r, clickedElement: i }) => {
									const a = n();
									if (T(a)) {
										const n = t(i, a, o);
										if (T(n)) {
											const t = {
													eventType: 'decisioning.propositionInteract',
												},
												o = n[0].scope;
											o !== Vt && (t.web = { webPageDetails: { viewName: o } }),
												r.mergeXdm(t),
												e(r, n);
										}
									}
								}
							)({
								mergeDecisionsMeta: Kn,
								collectClicks: Gn,
								getClickSelectors: i,
								getClickMetasBySelector: r,
							}),
							v = (
								({
									mergeDecisionsMeta: e,
									collect: t,
									executeDecisions: n,
									viewCache: o,
								}) =>
								({ personalizationDetails: r, event: i, onResponse: a }) => {
									const s = r.getViewName();
									return o.getView(s).then((o) =>
										r.isRenderDecisions()
											? n(o).then((n) => {
													if (T(n)) return e(i, n), void a(() => to(o, !0));
													a(
														() => (
															t({ decisionsMeta: [], viewName: s }), to(o, !0)
														),
													);
												})
											: (a(() => to(o, !1)), {}),
									);
								}
							)({
								mergeDecisionsMeta: Kn,
								collect: o,
								executeDecisions: c,
								viewCache: s,
							});
						var h;
						return (({
							logger: e,
							fetchDataHandler: t,
							viewChangeHandler: n,
							onClickHandler: o,
							isAuthoringModeEnabled: r,
							mergeQuery: i,
							viewCache: a,
							showContainers: s,
							applyPropositions: c,
						}) => ({
							lifecycle: {
								onBeforeEvent({
									event: o,
									renderDecisions: c,
									decisionScopes: u = [],
									onResponse: d = oe,
									onRequestFailure: l = oe,
								}) {
									if ((d(() => ({ propositions: [] })), l(() => s()), r()))
										return (
											e.warn('Rendering is disabled for authoring mode.'),
											void i(o, { enabled: !1 })
										);
									const m = Wt({
										renderDecisions: c,
										decisionScopes: u,
										event: o,
										viewCache: a,
									});
									if (m.shouldFetchData()) {
										const e = b();
										return (
											a.storeViews(e.promise),
											l(() => e.reject()),
											void t({
												decisionsDeferred: e,
												personalizationDetails: m,
												event: o,
												onResponse: d,
											})
										);
									}
									return m.shouldUseCachedData()
										? n({
												personalizationDetails: m,
												event: o,
												onResponse: d,
												onRequestFailure: l,
											})
										: void 0;
								},
								onClick({ event: e, clickedElement: t }) {
									o({ event: e, clickedElement: t });
								},
							},
							commands: {
								applyPropositions: {
									optionsValidator: (t) =>
										(({ logger: e, options: t }) => {
											const n = ze({
												propositions: _e(ze($e())).nonEmpty(),
												metadata: ze($e()),
											}).required();
											try {
												return n(t);
											} catch (t) {
												return (
													e.warn(
														'Invalid options for applyPropositions. No propositions will be applied.',
														t,
													),
													Qt
												);
											}
										})({ logger: e, options: t }),
									run: c,
								},
							},
						}))({
							logger: t,
							fetchDataHandler: f,
							viewChangeHandler: v,
							onClickHandler: g,
							isAuthoringModeEnabled: Yn,
							mergeQuery: Zn,
							viewCache: s,
							showContainers: yn,
							applyPropositions: m,
						});
					};
				(co.namespace = 'Personalization'),
					(co.configValidators = { prehidingStyle: Je().nonEmpty() });
				const uo = co,
					lo = '2.11.0';
				var mo;
				const po = {
						web: ((e) => (t) => {
							const n = {
								webPageDetails: { URL: e.location.href || e.location },
								webReferrer: { URL: e.document.referrer },
							};
							g(t, { web: n });
						})(window),
						device: ((e) => (t) => {
							const {
									screen: { width: n, height: o },
								} = e,
								r = { screenHeight: o, screenWidth: n },
								i =
									((e) => {
										const {
											screen: { orientation: t },
										} = e;
										if (null == t || null == t.type) return null;
										const n = t.type.split('-');
										return 0 === n.length ||
											('portrait' !== n[0] && 'landscape' !== n[0])
											? null
											: n[0];
									})(e) ||
									((e) =>
										e.matchMedia('(orientation: portrait)').matches
											? 'portrait'
											: e.matchMedia('(orientation: landscape)').matches
												? 'landscape'
												: null)(e);
							i && (r.screenOrientation = i), g(t, { device: r });
						})(window),
						environment: ((e) => (t) => {
							const {
									document: {
										documentElement: { clientWidth: n, clientHeight: o } = {},
									},
								} = e,
								r = { type: 'browser' };
							Z(n) &&
								n >= 0 &&
								Z(o) &&
								o >= 0 &&
								(r.browserDetails = {
									viewportWidth: Math.round(n),
									viewportHeight: Math.round(o),
								}),
								g(t, { environment: r });
						})(window),
						placeContext:
							((mo = () => new Date()),
							(e) => {
								const t = mo(),
									n = { localTime: le(t) },
									o = ue(t.getTimezoneOffset());
								void 0 !== o && (n.localTimezoneOffset = o),
									g(e, { placeContext: n });
							}),
					},
					fo = [
						(e) => {
							const t = new Date().toISOString();
							g(e, { timestamp: t });
						},
						(e) => {
							g(e, {
								implementationDetails: {
									name: 'https://ns.adobe.com/experience/alloy',
									version: lo,
									environment: 'browser',
								},
							});
						},
					],
					go = ({ config: e, logger: t }) =>
						((e, t, n, o) => {
							const r = e.context,
								i = H(r, (e, o) =>
									n[e]
										? [n[e]]
										: (t.warn(
												`Invalid context[${o}]: '${e}' is not available.`,
											),
											[]),
								).concat(o);
							return {
								namespace: 'Context',
								lifecycle: {
									onBeforeEvent({ event: e }) {
										const t = {};
										i.forEach((e) => e(t)), e.mergeXdm(t);
									},
								},
							};
						})(e, t, po, fo);
				(go.namespace = 'Context'),
					(go.configValidators = {
						context: _e(Je()).default(Object.keys(po)),
					});
				const vo = go,
					ho = (e) =>
						Array.isArray(e)
							? e.map((e) => ho(e))
							: 'object' == typeof e && null !== e
								? Object.keys(e)
										.sort()
										.reduce((t, n) => ((t[n] = ho(e[n])), t), {})
								: e,
					yo = ({ standard: e, version: t }) => `${e}.${t}`,
					wo = () => {
						const e = {},
							t = Rt({
								content: e,
								addIdentity: (t, n) => {
									(e.identityMap = e.identityMap || {}),
										(e.identityMap[t] = e.identityMap[t] || []),
										e.identityMap[t].push(n);
								},
								hasIdentity: (t) =>
									void 0 !== (e.identityMap && e.identityMap[t]),
							});
						return (
							(t.setConsent = (t) => {
								e.consent = t;
							}),
							t
						);
					},
					bo = (e) =>
						Dt({
							payload: e,
							getAction: () => 'privacy/set-consent',
							getUseSendBeacon: () => !1,
						}),
					Co = (e) =>
						e.split(';').reduce((e, t) => {
							const [n, o] = t.split('=');
							return (e[n] = o), e;
						}, {}),
					Io = ze({ consent: _e($e()).required().nonEmpty(), identityMap: Qe })
						.noUnknownFields()
						.required(),
					xo = ({
						config: e,
						consent: t,
						sendEdgeNetworkRequest: n,
						createNamespacedStorage: o,
					}) => {
						const { orgId: r, defaultConsent: i } = e,
							a = (({ parseConsentCookie: e, orgId: t, cookieJar: n }) => {
								const o = Q(t, 'consent');
								return {
									read() {
										const t = n.get(o);
										return t ? e(t) : {};
									},
									clear() {
										n.remove(o);
									},
								};
							})({ parseConsentCookie: Co, orgId: r, cookieJar: l }),
							s = (() => {
								let e = 0,
									t = Promise.resolve();
								return {
									addTask(n) {
										e += 1;
										const o = () =>
											n().finally(() => {
												e -= 1;
											});
										return (t = t.then(o, o)), t;
									},
									get length() {
										return e;
									},
								};
							})(),
							c = (
								({
									createConsentRequestPayload: e,
									createConsentRequest: t,
									sendEdgeNetworkRequest: n,
								}) =>
								({ consentOptions: o, identityMap: r }) => {
									const i = e();
									i.setConsent(o),
										p(r) &&
											Object.keys(r).forEach((e) => {
												r[e].forEach((t) => {
													i.addIdentity(e, t);
												});
											});
									const a = t(i);
									return n({ request: a }).then(() => {});
								}
							)({
								createConsentRequestPayload: wo,
								createConsentRequest: bo,
								sendEdgeNetworkRequest: n,
							}),
							u = (({ storage: e }) => ({
								clear() {
									e.clear();
								},
								lookup(t) {
									const n = {},
										o = (e) => {
											const t = yo(e),
												{ standard: o, version: r, ...i } = e;
											var a;
											return (
												n[t] ||
													(n[t] = ((a = i),
													w(JSON.stringify(ho(a)))).toString()),
												n[t]
											);
										};
									return {
										isNew: () =>
											t.some((t) => {
												const n = yo(t),
													r = e.getItem(n);
												return null === r || r !== o(t);
											}),
										save() {
											t.forEach((t) => {
												const n = yo(t);
												e.setItem(n, o(t));
											});
										},
									};
								},
							}))({ storage: o(`${W(r)}.consentHashes.`).persistent }),
							d = X({ orgId: r });
						return (({
							storedConsent: e,
							taskQueue: t,
							defaultConsent: n,
							consent: o,
							sendSetConsentRequest: r,
							validateSetConsentOptions: i,
							consentHashStore: a,
							doesIdentityCookieExist: s,
						}) => {
							const c = { general: n };
							let u = e.read();
							const d = s(),
								l = void 0 !== u.general;
							(d && l) || a.clear(),
								d || (e.clear(), (u = {})),
								o.initializeConsent(c, u);
							const m = () => {
								if (0 === t.length) {
									const t = e.read();
									void 0 !== t.general && o.setConsent(t);
								}
							};
							return {
								commands: {
									setConsent: {
										optionsValidator: i,
										run: ({ consent: e, identityMap: n }) => {
											o.suspend();
											const i = a.lookup(e);
											return t
												.addTask(() =>
													i.isNew()
														? r({ consentOptions: e, identityMap: n })
														: Promise.resolve(),
												)
												.then(() => i.save())
												.finally(m);
										},
									},
								},
								lifecycle: { onResponse: m, onRequestFailure: m },
							};
						})({
							storedConsent: a,
							taskQueue: s,
							defaultConsent: i,
							consent: t,
							sendSetConsentRequest: c,
							validateSetConsentOptions: Io,
							consentHashStore: u,
							doesIdentityCookieExist: d,
						});
					};
				xo.namespace = 'Privacy';
				const Eo = xo,
					So = () => ({ eventMergeId: pe() }),
					ko = () =>
						(({ createEventMergeId: e }) => ({
							commands: { createEventMergeId: { run: e } },
						}))({ createEventMergeId: So });
				(ko.namespace = 'EventMerge'), (ko.configValidators = {});
				const Po = ko,
					Do = ({ config: e, componentRegistry: t }) => {
						const n = t.getCommandNames();
						return (
							n.push(st, ct),
							{
								commands: {
									getLibraryInfo: {
										run: () => ({
											libraryInfo: {
												version: lo,
												configs: e,
												commands: n.sort(),
											},
										}),
									},
								},
							}
						);
					};
				Do.namespace = 'LibraryInfo';
				const To = Do,
					Ro = ({ response: e }) => ({
						inferences: e.getPayloadsByType('rtml:inferences'),
					}),
					Oo = () => ({ lifecycle: { onResponse: Ro }, commands: {} });
				(Oo.namespace = 'MachineLearning'), (Oo.configValidators = {});
				const Ao = [mt, gt, Mt, Bt, uo, vo, Eo, Po, To, Oo],
					qo = (e) => u({}, e),
					jo =
						({ errorPrefix: e, logger: t }) =>
						(n, o) => {
							const r = ae(n);
							if (r.code === et)
								return (
									t.warn(`The ${o} could not fully complete. ${r.message}`), {}
								);
							throw (se({ error: r, message: `${e} ${r.message}` }), r);
						},
					No = ({
						getDebugEnabled: e,
						console: t,
						getMonitors: n,
						context: o,
					}) => {
						let r = `[${o.instanceName}]`;
						o.componentName && (r += ` [${o.componentName}]`);
						const i = (e, t) => {
								const r = n();
								if (r.length > 0) {
									const n = u({}, o, t);
									r.forEach((t) => {
										t[e] && t[e](n);
									});
								}
							},
							a = (n, ...o) => {
								i('onBeforeLog', { level: n, arguments: o }),
									e() && t[n](r, ...o);
							};
						return {
							get enabled() {
								return n().length > 0 || e();
							},
							logOnInstanceCreated(e) {
								i('onInstanceCreated', e), a('info', 'Instance initialized.');
							},
							logOnInstanceConfigured(e) {
								i('onInstanceConfigured', e),
									a(
										'info',
										'Instance configured. Computed configuration:',
										e.config,
									);
							},
							logOnBeforeCommand(e) {
								i('onBeforeCommand', e),
									a(
										'info',
										`Executing ${e.commandName} command. Options:`,
										e.options,
									);
							},
							logOnCommandResolved(e) {
								i('onCommandResolved', e),
									a(
										'info',
										`${e.commandName} command resolved. Result:`,
										e.result,
									);
							},
							logOnCommandRejected(e) {
								i('onCommandRejected', e),
									a(
										'error',
										`${e.commandName} command was rejected. Error:`,
										e.error,
									);
							},
							logOnBeforeNetworkRequest(e) {
								i('onBeforeNetworkRequest', e),
									a(
										'info',
										`Request ${e.requestId}: Sending request.`,
										e.payload,
									);
							},
							logOnNetworkResponse(e) {
								i('onNetworkResponse', e);
								const t =
									e.parsedBody || e.body
										? 'response body:'
										: 'no response body.';
								a(
									'info',
									`Request ${e.requestId}: Received response with status code ${e.statusCode} and ${t}`,
									e.parsedBody || e.body,
								);
							},
							logOnNetworkError(e) {
								i('onNetworkError', e),
									a(
										'error',
										`Request ${e.requestId}: Network request failed.`,
										e.error,
									);
							},
							info: a.bind(null, 'info'),
							warn: a.bind(null, 'warn'),
							error: a.bind(null, 'error'),
						};
					},
					Lo =
						'Event was canceled because the onBeforeEventSend callback returned false.',
					Mo = 'The server responded with a',
					Uo = [429, 503, 502, 504],
					$o = ({ response: e, retriesAttempted: t }) =>
						t < 3 && i(Uo, e.statusCode),
					_o = ({ response: e, retriesAttempted: t }) => {
						let n = ((e) => {
							const t = e.getHeader('Retry-After');
							let n;
							if (t) {
								const e = parseInt(t, 10);
								n = ee(e)
									? 1e3 * e
									: Math.max(0, new Date(t).getTime() - new Date().getTime());
							}
							return n;
						})(e);
						return (
							void 0 === n &&
								(n = ((e) => {
									const t = 1e3 + 1e3 * e,
										n = 0.3 * t,
										o = t - n,
										r = t + n;
									return Math.round(o + Math.random() * (r - o));
								})(t)),
							n
						);
					},
					Bo = Y(window),
					{
						console: Vo,
						fetch: Fo,
						navigator: Ho,
						XMLHttpRequest: zo,
					} = window,
					Jo = {
						debugEnabled: Be().default(!1),
						defaultConsent: We(Ke, 'out', Ze).default(Ke),
						edgeConfigId: Je().unique().required(),
						edgeDomain: Je().domain().default('edge.adobedc.net'),
						edgeBasePath: Je().nonEmpty().default('ee'),
						orgId: Je().unique().required(),
						onBeforeEventSend: Ve().default(oe),
					},
					Wo = ((e, t) => {
						let n = '';
						const o = e.location.hostname.toLowerCase().split('.');
						let r = 1;
						for (; r < o.length && !t.get(J); )
							(r += 1),
								(n = ((i = o), (a = r), i.slice(-a)).join('.')),
								t.set(J, J, { domain: n });
						var i, a;
						return t.remove(J, { domain: n }), n;
					})(window, l),
					Qo = D(Fo)
						? (
								({ fetch: e }) =>
								(t, n) =>
									e(t, {
										method: 'POST',
										cache: 'no-cache',
										credentials: 'include',
										headers: { 'Content-Type': 'text/plain; charset=UTF-8' },
										referrer: 'client',
										body: n,
									}).then((e) =>
										e
											.text()
											.then((t) => ({
												statusCode: e.status,
												getHeader: (t) => e.headers.get(t),
												body: t,
											})),
									)
							)({ fetch: Fo })
						: (
								({ XMLHttpRequest: e }) =>
								(t, n) =>
									new Promise((o, r) => {
										const i = new e();
										(i.onreadystatechange = () => {
											4 === i.readyState &&
												(0 === i.status
													? r(new Error('Request aborted.'))
													: o({
															statusCode: i.status,
															getHeader: (e) => i.getResponseHeader(e),
															body: i.responseText,
														}));
										}),
											(i.onloadstart = () => {
												i.responseType = 'text';
											}),
											i.open('POST', t, !0),
											i.setRequestHeader(
												'Content-Type',
												'text/plain; charset=UTF-8',
											),
											(i.withCredentials = !0),
											(i.onerror = r),
											(i.onabort = r),
											i.send(n);
									})
							)({ XMLHttpRequest: zo }),
					Xo = (({
						appendNode: e = I,
						awaitSelector: t = _,
						createNode: n = x,
						fireImage: o = P,
					} = {}) => {
						const r = o;
						let i;
						return (a) => {
							const { hideReferrer: s, url: c } = a;
							return s
								? (({ src: r }) =>
										t('BODY')
											.then(([t]) => i || ((i = n('IFRAME', V, F)), e(t, i)))
											.then((e) => {
												const t = e.contentWindow.document;
												return o({ src: r, currentDocument: t });
											}))({ src: c })
								: r({ src: c });
						};
					})(),
					Go = ({
						instanceName: e,
						logController: {
							setDebugEnabled: t,
							logger: n,
							createComponentLogger: o,
						},
					}) => {
						const r = Ye(),
							i = ((e) =>
								Xe.reduce((t, n) => {
									var o;
									return (
										(t[n] =
											((o = (
												(e, t) =>
												(...n) =>
													Promise.all(
														e.getLifecycleCallbacks(t).map(
															(e) =>
																new Promise((t) => {
																	t(e(...n));
																}),
														),
													)
											)(e, n)),
											(...e) => Promise.resolve().then(() => o(...e)))),
										t
									);
								}, {}))(r),
							a = y({ logger: n, cookieJar: l }),
							s = jo({ errorPrefix: `[${e}]`, logger: n }),
							c = (({
								logger: e,
								configureCommand: t,
								setDebugCommand: n,
								handleError: o,
								validateCommandOptions: r,
							}) => {
								let i;
								return (a, s = {}) =>
									new Promise((o) => {
										const c = ((o, a) => {
											let s;
											if (o === st) {
												if (i)
													throw new Error(
														'The library has already been configured and may only be configured once.',
													);
												s = () => ((i = t(a)), i.then(() => {}));
											} else {
												if (!i)
													throw new Error(
														'The library must be configured first. Please do so by executing the configure command.',
													);
												s =
													o === ct
														? () => n(a)
														: () =>
																i.then(
																	(e) => {
																		const t = e.getCommand(o);
																		if (!t || !D(t.run)) {
																			const t = [st, ct]
																				.concat(e.getCommandNames())
																				.join(', ');
																			throw new Error(
																				`The ${o} command does not exist. List of available commands: ${t}.`,
																			);
																		}
																		const n = r({ command: t, options: a });
																		return t.run(n);
																	},
																	() => (
																		e.warn(
																			`An error during configuration is preventing the ${o} command from executing.`,
																		),
																		new Promise(() => {})
																	),
																);
											}
											return s;
										})(a, s);
										e.logOnBeforeCommand({ commandName: a, options: s }),
											o(c());
									})
										.catch((e) => o(e, `${a} command`))
										.catch((t) => {
											throw (
												(e.logOnCommandRejected({
													commandName: a,
													options: s,
													error: t,
												}),
												t)
											);
										})
										.then((t) => {
											const n = p(t) ? t : {};
											return (
												e.logOnCommandResolved({
													commandName: a,
													options: s,
													result: n,
												}),
												n
											);
										});
							})({
								logger: n,
								configureCommand: (s) => {
									const c = (({
											options: e,
											componentCreators: t,
											coreConfigValidators: n,
											createConfig: o,
											logger: r,
											setDebugEnabled: i,
										}) => {
											const a = ((e, t) => {
													const n = {};
													return (
														u(n, e),
														t.forEach((e) => {
															const { configValidators: t } = e;
															u(n, t);
														}),
														n
													);
												})(n, t),
												s = o(
													((e, t) => {
														try {
															return ze(e).noUnknownFields().required()(t);
														} catch (e) {
															throw new Error(
																`Resolve these configuration problems:\n\t - ${e.message.split('\n').join('\n\t - ')}\nFor configuration documentation see: https://adobe.ly/3sHh553`,
															);
														}
													})(a, e),
												);
											return (
												i(s.debugEnabled, { fromConfig: !0 }),
												r.logOnInstanceConfigured({ config: s }),
												s
											);
										})({
											options: s,
											componentCreators: Ao,
											coreConfigValidators: Jo,
											createConfig: qo,
											logger: n,
											setDebugEnabled: t,
										}),
										d = (({
											cookieJar: e,
											orgId: t,
											apexDomain: n,
											dateProvider: o,
										}) => ({
											cookiesToPayload(o, r) {
												const i = ((a = n), r.substr(-a.length) === a);
												var a;
												const s = { domain: n, cookiesEnabled: !0 };
												if (!i) {
													const n = e.get(),
														o = Object.keys(n)
															.filter((e) =>
																((e, t) => 0 === t.indexOf(`kndctr_${W(e)}_`))(
																	t,
																	e,
																),
															)
															.map((e) => ({ key: e, value: n[e] }));
													o.length && (s.entries = o);
												}
												o.mergeState(s);
											},
											responseToCookies(t) {
												t.getPayloadsByType('state:store').forEach((t) => {
													const r = { domain: n },
														i =
															t.attrs &&
															t.attrs.SameSite &&
															t.attrs.SameSite.toLowerCase();
													void 0 !== t.maxAge &&
														(r.expires = new Date(
															o().getTime() + 1e3 * t.maxAge,
														)),
														void 0 !== i && (r.sameSite = i),
														'none' === i && (r.secure = !0),
														e.set(t.key, t.value, r);
												});
											},
										}))({
											cookieJar: a,
											orgId: c.orgId,
											apexDomain: Wo,
											dateProvider: () => new Date(),
										}),
										l = D(Ho.sendBeacon)
											? (
													({ sendBeacon: e, sendFetchRequest: t, logger: n }) =>
													(o, r) => {
														const i = new Blob([r], {
															type: 'text/plain; charset=UTF-8',
														});
														return e(o, i)
															? Promise.resolve({
																	statusCode: 204,
																	getHeader: () => null,
																	body: '',
																})
															: (n.info(
																	'Unable to use `sendBeacon`; falling back to `fetch`.',
																),
																t(o, r));
													}
												)({
													sendBeacon: Ho.sendBeacon.bind(Ho),
													sendFetchRequest: Qo,
													logger: n,
												})
											: Qo,
										m = (
											({
												logger: e,
												sendFetchRequest: t,
												sendBeaconRequest: n,
												isRequestRetryable: o,
												getRequestRetryDelay: r,
											}) =>
											({
												requestId: i,
												url: a,
												payload: s,
												useSendBeacon: c,
											}) => {
												const u = JSON.stringify(s),
													d = JSON.parse(u);
												e.logOnBeforeNetworkRequest({
													url: a,
													requestId: i,
													payload: d,
												});
												const l = (s = 0) =>
													(c ? n : t)(a, u).then((t) => {
														if (o({ response: t, retriesAttempted: s })) {
															const e = r({ response: t, retriesAttempted: s });
															return new Promise((t) => {
																setTimeout(() => {
																	t(l(s + 1));
																}, e);
															});
														}
														let n;
														try {
															n = JSON.parse(t.body);
														} catch (e) {}
														return (
															e.logOnNetworkResponse({
																requestId: i,
																url: a,
																payload: d,
																...t,
																parsedBody: n,
																retriesAttempted: s,
															}),
															{
																statusCode: t.statusCode,
																body: t.body,
																parsedBody: n,
																getHeader: t.getHeader,
															}
														);
													});
												return l().catch((t) => {
													throw (
														(e.logOnNetworkError({
															requestId: i,
															url: a,
															payload: d,
															error: t,
														}),
														ce({
															error: t,
															message: 'Network request failed.',
														}))
													);
												});
											}
										)({
											logger: n,
											sendFetchRequest: Qo,
											sendBeaconRequest: l,
											isRequestRetryable: $o,
											getRequestRetryDelay: _o,
										}),
										p = (
											({ logger: e }) =>
											(t) => {
												const { statusCode: n, body: o, parsedBody: r } = t;
												if (
													n < 200 ||
													n >= 300 ||
													(!r && 204 !== n) ||
													(r && !Array.isArray(r.handle))
												) {
													const e = r ? JSON.stringify(r, null, 2) : o;
													throw new Error(
														`${Mo} status code ${n} and ${e ? `response body:\n${e}` : 'no response body.'}`,
													);
												}
												if (r) {
													const { warnings: t = [], errors: n = [] } = r;
													t.forEach((t) => {
														e.warn(`${Mo} warning:`, t);
													}),
														n.forEach((t) => {
															e.error(`${Mo} non-fatal error:`, t);
														});
												}
											}
										)({ logger: n }),
										f = (
											({ logger: e }) =>
											(t) => {
												if (t) {
													const n = t.split(';');
													if (n.length >= 2 && n[1].length > 0)
														try {
															const e = parseInt(n[1], 10);
															if (!isNaN(e)) return { regionId: e };
														} catch (e) {}
													e.warn(`Invalid adobe edge: "${t}"`);
												}
												return {};
											}
										)({ logger: n }),
										g = (
											({ extractEdgeInfo: e }) =>
											({ content: t = {}, getHeader: n }) => {
												const {
													handle: o = [],
													errors: r = [],
													warnings: i = [],
												} = t;
												return {
													getPayloadsByType: (e) =>
														H(
															o.filter((t) => t.type === e),
															(e) => e.payload,
														),
													getErrors: () => r,
													getWarnings: () => i,
													getEdge: () => e(n('x-adobe-edge')),
													toJSON: () => t,
												};
											}
										)({ extractEdgeInfo: f }),
										v = (({
											config: e,
											lifecycle: t,
											cookieTransfer: n,
											sendNetworkRequest: o,
											createResponse: r,
											processWarningsAndErrors: i,
										}) => {
											const {
												edgeDomain: a,
												edgeBasePath: s,
												edgeConfigId: c,
											} = e;
											return ({
												request: e,
												runOnResponseCallbacks: d = oe,
												runOnRequestFailureCallbacks: l = oe,
											}) => {
												const m = h();
												m.add(t.onResponse), m.add(d);
												const p = h();
												return (
													p.add(t.onRequestFailure),
													p.add(l),
													t
														.onBeforeRequest({
															request: e,
															onResponse: m.add,
															onRequestFailure: p.add,
														})
														.then(() => {
															const t = e.getUseIdThirdPartyDomain()
																	? 'adobedc.demdex.net'
																	: a,
																r = `https://${t}/${s}/v1/${e.getAction()}?configId=${c}&requestId=${e.getId()}`;
															return (
																n.cookiesToPayload(e.getPayload(), t),
																o({
																	requestId: e.getId(),
																	url: r,
																	payload: e.getPayload(),
																	useSendBeacon: e.getUseSendBeacon(),
																})
															);
														})
														.then((e) => (i(e), e))
														.catch((e) => {
															const t = () => {
																throw e;
															};
															return p.call({ error: e }).then(t, t);
														})
														.then(({ parsedBody: e, getHeader: t }) => {
															const o = r({ content: e, getHeader: t });
															return (
																n.responseToCookies(o),
																m.call({ response: o }).then((e) => {
																	const t = e.shift() || [],
																		n = e.shift() || [];
																	return u({}, ...t, ...n, ...e);
																})
															);
														})
												);
											};
										})({
											config: c,
											lifecycle: i,
											cookieTransfer: d,
											sendNetworkRequest: m,
											createResponse: g,
											processWarningsAndErrors: p,
										}),
										y = (({ generalConsentState: e, logger: t }) => {
											const n = (n, o) => {
												switch (n.general) {
													case Ke:
														e.in(o);
														break;
													case 'out':
														e.out(o);
														break;
													case Ze:
														e.pending(o);
														break;
													default:
														t.warn(`Unknown consent value: ${n.general}`);
												}
											};
											return {
												initializeConsent(e, t) {
													t.general ? n(t, nt) : n(e, tt);
												},
												setConsent(e) {
													n(e, ot);
												},
												suspend() {
													e.pending();
												},
												awaitConsent: () => e.awaitConsent(),
												withConsent: () => e.withConsent(),
											};
										})({ generalConsentState: it({ logger: n }), logger: n }),
										w = (({
											config: e,
											logger: t,
											lifecycle: n,
											consent: o,
											createEvent: r,
											createDataCollectionRequestPayload: i,
											createDataCollectionRequest: a,
											sendEdgeNetworkRequest: s,
										}) => {
											const { onBeforeEventSend: c } = e;
											return {
												createEvent: r,
												sendEvent(e, r = {}) {
													const { renderDecisions: u = !1, decisionScopes: d } =
															r,
														l = i(),
														m = a(l),
														p = h(),
														f = h();
													return n
														.onBeforeEvent({
															event: e,
															renderDecisions: u,
															decisionScopes: d,
															onResponse: p.add,
															onRequestFailure: f.add,
														})
														.then(() => (l.addEvent(e), o.awaitConsent()))
														.then(() => {
															try {
																e.finalize(c);
															} catch (e) {
																const t = () => {
																	throw e;
																};
																return (
																	f.add(n.onRequestFailure),
																	f.call({ error: e }).then(t, t)
																);
															}
															if (!e.shouldSend()) {
																f.add(n.onRequestFailure), t.info(Lo);
																const e = new Error(Lo);
																return f.call({ error: e }).then(() => {});
															}
															return s({
																request: m,
																runOnResponseCallbacks: p.call,
																runOnRequestFailureCallbacks: f.call,
															});
														});
												},
											};
										})({
											config: c,
											logger: n,
											lifecycle: i,
											consent: y,
											createEvent: at,
											createDataCollectionRequestPayload: At,
											createDataCollectionRequest: Tt,
											sendEdgeNetworkRequest: v,
										});
									return (({
										componentCreators: e,
										lifecycle: t,
										componentRegistry: n,
										getImmediatelyAvailableTools: o,
									}) => (
										e.forEach((e) => {
											const { namespace: t } = e,
												r = o(t);
											let i;
											try {
												i = e(r);
											} catch (e) {
												throw ce({
													error: e,
													message: `[${t}] An error occurred during component creation.`,
												});
											}
											n.register(t, i);
										}),
										t.onComponentsRegistered({ lifecycle: t }).then(() => n)
									))({
										componentCreators: Ao,
										lifecycle: i,
										componentRegistry: r,
										getImmediatelyAvailableTools(t) {
											const n = o(t);
											return {
												config: c,
												componentRegistry: r,
												consent: y,
												eventManager: w,
												fireReferrerHideableImage: Xo,
												logger: n,
												lifecycle: i,
												sendEdgeNetworkRequest: v,
												handleError: jo({
													errorPrefix: `[${e}] [${t}]`,
													logger: n,
												}),
												createNamespacedStorage: Bo,
												apexDomain: Wo,
											};
										},
									});
								},
								setDebugCommand: (e) => {
									t(e.enabled, { fromConfig: !1 });
								},
								handleError: s,
								validateCommandOptions: dt,
							});
						return c;
					},
					{ console: Yo } = window,
					Ko = Y(window);
				var Zo = function (e, t, n, o) {
					return new (n || (n = Promise))(function (r, i) {
						function a(e) {
							try {
								c(o.next(e));
							} catch (e) {
								i(e);
							}
						}
						function s(e) {
							try {
								c(o.throw(e));
							} catch (e) {
								i(e);
							}
						}
						function c(e) {
							var t;
							e.done
								? r(e.value)
								: ((t = e.value),
									t instanceof n
										? t
										: new n(function (e) {
												e(t);
											})).then(a, s);
						}
						c((o = o.apply(e, t || [])).next());
					});
				};
				let er;
				const tr = (e, t) =>
						Zo(void 0, void 0, void 0, function* () {
							var n, o;
							try {
								const { channelContext: r } = t.eventInfo,
									i =
										(yield er('getIdentity')).identity.ECID ||
										'000000000000000000000000000000000000',
									a = { ECID: [{ id: i, primary: !0 }] };
								(e.channel = e.channel || r),
									(null === (n = e.personalEmail) || void 0 === n
										? void 0
										: n.address) &&
										(a.email = [
											{
												id:
													null === (o = e.personalEmail) || void 0 === o
														? void 0
														: o.address,
												primary: !1,
											},
										]),
									(e.personID = i),
									(e.identityMap = a);
								const s = { xdm: Object.assign({}, e) };
								return yield er('sendEvent', s);
							} catch (e) {
								console.error('sendEvent error:', e);
							}
						}),
					nr = () => {
						const { context: e } = window.magentoStorefrontEvents,
							t = e.getEventForwarding(),
							n = e.getAEP();
						return (
							!!(null == t ? void 0 : t.aep) && !!n.datastreamId && !!n.imsOrgId
						);
					},
					or = (e, t) => {
						let n = {};
						return (
							e && 0 !== Object.keys(e).length && (n = e),
							(n.person = n.person || {}),
							(n.person.accountID =
								n.person.accountID || (null == t ? void 0 : t.accountId)),
							(n.personalEmail = n.personalEmail || {}),
							(n.personalEmail.address =
								n.personalEmail.address ||
								(null == t ? void 0 : t.emailAddress)),
							n
						);
					},
					rr = (e) => ({
						environmentID: e.environmentId,
						storeCode: e.storeCode,
						storeViewCode: e.storeViewCode,
						websiteCode: e.websiteCode,
					});
				const ir = (e) => {
					return (
						(t = void 0),
						(n = void 0),
						(r = function* () {
							const {
									debugContext: t,
									accountContext: n,
									storefrontInstanceContext: o,
									customContext: r,
								} = e.eventInfo,
								i = or(r, n);
							(i.userAccount = { createProfile: 1 }),
								(i.commerce = i.commerce || {}),
								(i.commerce.commerceScope = rr(o)),
								(i._id = null == t ? void 0 : t.eventId),
								(i.eventType = 'userAccount.createProfile'),
								tr(i, e);
						}),
						new ((o = void 0) || (o = Promise))(function (e, i) {
							function a(e) {
								try {
									c(r.next(e));
								} catch (e) {
									i(e);
								}
							}
							function s(e) {
								try {
									c(r.throw(e));
								} catch (e) {
									i(e);
								}
							}
							function c(t) {
								var n;
								t.done
									? e(t.value)
									: ((n = t.value),
										n instanceof o
											? n
											: new o(function (e) {
													e(n);
												})).then(a, s);
							}
							c((r = r.apply(t, n || [])).next());
						})
					);
					var t, n, o, r;
				};
				const ar = (e) => {
					return (
						(t = void 0),
						(n = void 0),
						(r = function* () {
							const {
									debugContext: t,
									accountContext: n,
									storefrontInstanceContext: o,
									customContext: r,
								} = e.eventInfo,
								i = or(r, n);
							(i.userAccount = { updateProfile: 1 }),
								(i.commerce = i.commerce || {}),
								(i.commerce.commerceScope = rr(o)),
								(i._id = null == t ? void 0 : t.eventId),
								(i.eventType = 'userAccount.updateProfile'),
								tr(i, e);
						}),
						new ((o = void 0) || (o = Promise))(function (e, i) {
							function a(e) {
								try {
									c(r.next(e));
								} catch (e) {
									i(e);
								}
							}
							function s(e) {
								try {
									c(r.throw(e));
								} catch (e) {
									i(e);
								}
							}
							function c(t) {
								var n;
								t.done
									? e(t.value)
									: ((n = t.value),
										n instanceof o
											? n
											: new o(function (e) {
													e(n);
												})).then(a, s);
							}
							c((r = r.apply(t, n || [])).next());
						})
					);
					var t, n, o, r;
				};
				const sr = (e) => {
					return (
						(t = void 0),
						(n = void 0),
						(r = function* () {
							const {
									debugContext: t,
									accountContext: n,
									storefrontInstanceContext: o,
									customContext: r,
								} = e.eventInfo,
								i = or(r, n);
							(i.userAccount = { login: 1 }),
								(i.commerce = i.commerce || {}),
								(i.commerce.commerceScope = rr(o)),
								(i._id = null == t ? void 0 : t.eventId),
								(i.eventType = 'userAccount.login'),
								tr(i, e);
						}),
						new ((o = void 0) || (o = Promise))(function (e, i) {
							function a(e) {
								try {
									c(r.next(e));
								} catch (e) {
									i(e);
								}
							}
							function s(e) {
								try {
									c(r.throw(e));
								} catch (e) {
									i(e);
								}
							}
							function c(t) {
								var n;
								t.done
									? e(t.value)
									: ((n = t.value),
										n instanceof o
											? n
											: new o(function (e) {
													e(n);
												})).then(a, s);
							}
							c((r = r.apply(t, n || [])).next());
						})
					);
					var t, n, o, r;
				};
				const cr = (e) => {
					return (
						(t = void 0),
						(n = void 0),
						(r = function* () {
							const {
								debugContext: t,
								storefrontInstanceContext: n,
								customContext: o,
							} = e.eventInfo;
							let r = {};
							o && 0 !== Object.keys(o).length && (r = o),
								(r.userAccount = { logout: 1 }),
								(r.commerce = r.commerce || {}),
								(r.commerce.commerceScope = rr(n)),
								(r._id = null == t ? void 0 : t.eventId),
								(r.eventType = 'userAccount.logout'),
								tr(r, e);
						}),
						new ((o = void 0) || (o = Promise))(function (e, i) {
							function a(e) {
								try {
									c(r.next(e));
								} catch (e) {
									i(e);
								}
							}
							function s(e) {
								try {
									c(r.throw(e));
								} catch (e) {
									i(e);
								}
							}
							function c(t) {
								var n;
								t.done
									? e(t.value)
									: ((n = t.value),
										n instanceof o
											? n
											: new o(function (e) {
													e(n);
												})).then(a, s);
							}
							c((r = r.apply(t, n || [])).next());
						})
					);
					var t, n, o, r;
				};
				var ur = function () {
					return (
						(ur =
							Object.assign ||
							function (e) {
								for (var t, n = 1, o = arguments.length; n < o; n++)
									for (var r in (t = arguments[n]))
										Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
								return e;
							}),
						ur.apply(this, arguments)
					);
				};
				function dr(e, t, n) {
					if (n || 2 === arguments.length)
						for (var o, r = 0, i = t.length; r < i; r++)
							(!o && r in t) ||
								(o || (o = Array.prototype.slice.call(t, 0, r)), (o[r] = t[r]));
					return e.concat(o || Array.prototype.slice.call(t));
				}
				Object.create, Object.create;
				var lr = n(22);
				var mr =
					'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
				function pr() {
					var e,
						t = {},
						n = [],
						o = [],
						r = [],
						i = function (e, n) {
							null != n && '' !== n && (t[e] = n);
						};
					return {
						add: i,
						addDict: function (e) {
							for (var t in e)
								Object.prototype.hasOwnProperty.call(e, t) && i(t, e[t]);
						},
						addJson: function (e, t, r) {
							if (r && gr(r)) {
								var i = { keyIfEncoded: e, keyIfNotEncoded: t, json: r };
								o.push(i), n.push(i);
							}
						},
						addContextEntity: function (e) {
							r.push(e);
						},
						getPayload: function () {
							return t;
						},
						getJson: function () {
							return n;
						},
						withJsonProcessor: function (t) {
							e = t;
						},
						build: function () {
							return null == e || e(this, o, r), t;
						},
					};
				}
				function fr(e) {
					return function (t, n, o) {
						for (
							var r = function (n, o, r) {
									var i = JSON.stringify(n);
									e
										? t.add(
												o,
												(function (e) {
													if (!e) return e;
													var t = (function (e) {
														var t,
															n,
															o,
															r,
															i,
															a = 0,
															s = 0,
															c = [];
														if (!e) return e;
														e = unescape(encodeURIComponent(e));
														do {
															(t =
																((i =
																	(e.charCodeAt(a++) << 16) |
																	(e.charCodeAt(a++) << 8) |
																	e.charCodeAt(a++)) >>
																	18) &
																63),
																(n = (i >> 12) & 63),
																(o = (i >> 6) & 63),
																(r = 63 & i),
																(c[s++] =
																	mr.charAt(t) +
																	mr.charAt(n) +
																	mr.charAt(o) +
																	mr.charAt(r));
														} while (a < e.length);
														var u = c.join(''),
															d = e.length % 3;
														return (
															(d ? u.slice(0, d - 3) : u) + '==='.slice(d || 3)
														);
													})(e);
													return t
														.replace(/=/g, '')
														.replace(/\+/g, '-')
														.replace(/\//g, '_');
												})(i),
											)
										: t.add(r, i);
								},
								i = function (n, o) {
									var r =
										n ||
										(function () {
											var n = t.getPayload();
											if (e ? n.cx : n.co)
												return JSON.parse(
													e
														? (function (e) {
																if (!e) return e;
																switch (4 - (e.length % 4)) {
																	case 2:
																		e += '==';
																		break;
																	case 3:
																		e += '=';
																}
																return (function (e) {
																	var t,
																		n,
																		o,
																		r,
																		i,
																		a,
																		s,
																		c = 0,
																		u = 0,
																		d = [];
																	if (!e) return e;
																	e += '';
																	do {
																		(t =
																			((a =
																				(mr.indexOf(e.charAt(c++)) << 18) |
																				(mr.indexOf(e.charAt(c++)) << 12) |
																				((r = mr.indexOf(e.charAt(c++))) << 6) |
																				(i = mr.indexOf(e.charAt(c++)))) >>
																				16) &
																			255),
																			(n = (a >> 8) & 255),
																			(o = 255 & a),
																			(d[u++] =
																				64 === r
																					? String.fromCharCode(t)
																					: 64 === i
																						? String.fromCharCode(t, n)
																						: String.fromCharCode(t, n, o));
																	} while (c < e.length);
																	return (
																		(s = d.join('').replace(/\0+$/, '')),
																		decodeURIComponent(
																			s
																				.split('')
																				.map(function (e) {
																					return (
																						'%' +
																						(
																							'00' +
																							e.charCodeAt(0).toString(16)
																						).slice(-2)
																					);
																				})
																				.join(''),
																		)
																	);
																})(e.replace(/-/g, '+').replace(/_/g, '/'));
															})(n.cx)
														: n.co,
												);
										})();
									return r ? (r.data = r.data.concat(o.data)) : (r = o), r;
								},
								a = void 0,
								s = 0,
								c = n;
							s < c.length;
							s++
						) {
							var u = c[s];
							'cx' === u.keyIfEncoded
								? (a = i(a, u.json))
								: r(u.json, u.keyIfEncoded, u.keyIfNotEncoded);
						}
						(n.length = 0),
							o.length &&
								((a = i(a, {
									schema:
										'iglu:com.snowplowanalytics.snowplow/contexts/jsonschema/1-0-0',
									data: dr([], o, !0),
								})),
								(o.length = 0)),
							a && r(a, 'cx', 'co');
					};
				}
				function gr(e) {
					if (!vr(e)) return !1;
					for (var t in e)
						if (Object.prototype.hasOwnProperty.call(e, t)) return !0;
					return !1;
				}
				function vr(e) {
					return (
						null != e &&
						(e.constructor === {}.constructor ||
							e.constructor === [].constructor)
					);
				}
				var hr,
					yr = 'Snowplow: ';
				!(function (e) {
					(e[(e.none = 0)] = 'none'),
						(e[(e.error = 1)] = 'error'),
						(e[(e.warn = 2)] = 'warn'),
						(e[(e.debug = 3)] = 'debug'),
						(e[(e.info = 4)] = 'info');
				})(hr || (hr = {}));
				var wr,
					br =
						(void 0 === wr && (wr = hr.warn),
						{
							setLogLevel: function (e) {
								wr = hr[e] ? e : hr.warn;
							},
							warn: function (e, t) {
								for (var n = [], o = 2; o < arguments.length; o++)
									n[o - 2] = arguments[o];
								if (wr >= hr.warn && 'undefined' != typeof console) {
									var r = yr + e;
									t
										? console.warn.apply(console, dr([r + '\n', t], n, !1))
										: console.warn.apply(console, dr([r], n, !1));
								}
							},
							error: function (e, t) {
								for (var n = [], o = 2; o < arguments.length; o++)
									n[o - 2] = arguments[o];
								if (wr >= hr.error && 'undefined' != typeof console) {
									var r = yr + e + '\n';
									t
										? console.error.apply(console, dr([r + '\n', t], n, !1))
										: console.error.apply(console, dr([r], n, !1));
								}
							},
							debug: function (e) {
								for (var t = [], n = 1; n < arguments.length; n++)
									t[n - 1] = arguments[n];
								wr >= hr.debug &&
									'undefined' != typeof console &&
									console.debug.apply(console, dr([yr + e], t, !1));
							},
							info: function (e) {
								for (var t = [], n = 1; n < arguments.length; n++)
									t[n - 1] = arguments[n];
								wr >= hr.info &&
									'undefined' != typeof console &&
									console.info.apply(console, dr([yr + e], t, !1));
							},
						});
				function Cr() {
					var e = [],
						t = [];
					return {
						getGlobalPrimitives: function () {
							return e;
						},
						getConditionalProviders: function () {
							return t;
						},
						addGlobalContexts: function (n) {
							for (var o = [], r = [], i = 0, a = n; i < a.length; i++) {
								var s = a[i];
								Or(s) ? o.push(s) : Dr(s) && r.push(s);
							}
							(e = e.concat(r)), (t = t.concat(o));
						},
						clearGlobalContexts: function () {
							(t = []), (e = []);
						},
						removeGlobalContexts: function (n) {
							for (
								var o = function (n) {
										Or(n)
											? (t = t.filter(function (e) {
													return JSON.stringify(e) !== JSON.stringify(n);
												}))
											: Dr(n) &&
												(e = e.filter(function (e) {
													return JSON.stringify(e) !== JSON.stringify(n);
												}));
									},
									r = 0,
									i = n;
								r < i.length;
								r++
							)
								o(i[r]);
						},
						getApplicableContexts: function (n) {
							return (function (n) {
								var o = (function (e) {
										for (var t = 0, n = e.getJson(); t < n.length; t++) {
											var o = n[t];
											if (
												'ue_px' === o.keyIfEncoded &&
												'object' == typeof o.json.data
											) {
												var r = o.json.data.schema;
												if ('string' == typeof r) return r;
											}
										}
										return '';
									})(n),
									r = (function (e) {
										var t = e.getPayload().e;
										return 'string' == typeof t ? t : '';
									})(n),
									i = [],
									a = Nr(e, n, r, o);
								i.push.apply(i, a);
								var s = (function (e, t, n, o) {
									var r,
										i = jr(e).map(function (e) {
											var r = (function (e, t, n, o) {
												if (Tr(e)) {
													var r = e[0],
														i = !1;
													try {
														i = r({
															event: t.getPayload(),
															eventType: n,
															eventSchema: o,
														});
													} catch (e) {
														i = !1;
													}
													if (!0 === i) return Nr(e[1], t, n, o);
												} else if (
													Rr(e) &&
													(function (e, t) {
														var n = 0,
															o = 0,
															r = e.accept;
														Array.isArray(r)
															? e.accept.some(function (e) {
																	return Ar(e, t);
																}) && o++
															: 'string' == typeof r && Ar(r, t) && o++;
														var i = e.reject;
														return (
															Array.isArray(i)
																? e.reject.some(function (e) {
																		return Ar(e, t);
																	}) && n++
																: 'string' == typeof i && Ar(i, t) && n++,
															o > 0 && 0 === n
														);
													})(e[0], o)
												)
													return Nr(e[1], t, n, o);
												return [];
											})(e, t, n, o);
											if (r && 0 !== r.length) return r;
										});
									return (r = []).concat.apply(
										r,
										i.filter(function (e) {
											return null != e && e.filter(Boolean);
										}),
									);
								})(t, n, r, o);
								return i.push.apply(i, s), i;
							})(n);
						},
					};
				}
				function Ir(e) {
					var t = e.split('.');
					return (
						!!(t && t.length > 1) &&
						(function (e) {
							if ('*' === e[0] || '*' === e[1]) return !1;
							if (e.slice(2).length > 0) {
								for (var t = !1, n = 0, o = e.slice(2); n < o.length; n++)
									if ('*' === o[n]) t = !0;
									else if (t) return !1;
								return !0;
							}
							return 2 == e.length;
						})(t)
					);
				}
				function xr(e) {
					var t = new RegExp(
						'^iglu:((?:(?:[a-zA-Z0-9-_]+|\\*).)+(?:[a-zA-Z0-9-_]+|\\*))/([a-zA-Z0-9-_.]+|\\*)/jsonschema/([1-9][0-9]*|\\*)-(0|[1-9][0-9]*|\\*)-(0|[1-9][0-9]*|\\*)$',
					).exec(e);
					if (null !== t && Ir(t[1])) return t.slice(1, 6);
				}
				function Er(e) {
					var t = xr(e);
					if (t) {
						var n = t[0];
						return 5 === t.length && Ir(n);
					}
					return !1;
				}
				function Sr(e) {
					return (function (e) {
						return (
							Array.isArray(e) &&
							e.every(function (e) {
								return 'string' == typeof e;
							})
						);
					})(e)
						? e.every(function (e) {
								return Er(e);
							})
						: 'string' == typeof e && Er(e);
				}
				function kr(e) {
					var t = e;
					return (
						!!(gr(t) && 'schema' in t && 'data' in t) &&
						'string' == typeof t.schema &&
						'object' == typeof t.data
					);
				}
				function Pr(e) {
					return 'function' == typeof e && e.length <= 1;
				}
				function Dr(e) {
					return Pr(e) || kr(e);
				}
				function Tr(e) {
					return (
						!(!Array.isArray(e) || 2 !== e.length) &&
						(Array.isArray(e[1])
							? Pr(e[0]) && e[1].every(Dr)
							: Pr(e[0]) && Dr(e[1]))
					);
				}
				function Rr(e) {
					return (
						!(!Array.isArray(e) || 2 !== e.length) &&
						!!(function (e) {
							var t = e,
								n = 0;
							if (null != e && 'object' == typeof e && !Array.isArray(e)) {
								if (Object.prototype.hasOwnProperty.call(t, 'accept')) {
									if (!Sr(t.accept)) return !1;
									n += 1;
								}
								if (Object.prototype.hasOwnProperty.call(t, 'reject')) {
									if (!Sr(t.reject)) return !1;
									n += 1;
								}
								return n > 0 && n <= 2;
							}
							return !1;
						})(e[0]) &&
						(Array.isArray(e[1]) ? e[1].every(Dr) : Dr(e[1]))
					);
				}
				function Or(e) {
					return Tr(e) || Rr(e);
				}
				function Ar(e, t) {
					if (!Er(e)) return !1;
					var n = xr(e),
						o = (function (e) {
							var t = new RegExp(
								'^iglu:([a-zA-Z0-9-_.]+)/([a-zA-Z0-9-_]+)/jsonschema/([1-9][0-9]*)-(0|[1-9][0-9]*)-(0|[1-9][0-9]*)$',
							).exec(e);
							if (null !== t) return t.slice(1, 6);
						})(t);
					if (n && o) {
						if (
							!(function (e, t) {
								var n = t.split('.'),
									o = e.split('.');
								if (n && o) {
									if (n.length !== o.length) return !1;
									for (var r = 0; r < o.length; r++)
										if (!qr(n[r], o[r])) return !1;
									return !0;
								}
								return !1;
							})(n[0], o[0])
						)
							return !1;
						for (var r = 1; r < 5; r++) if (!qr(n[r], o[r])) return !1;
						return !0;
					}
					return !1;
				}
				function qr(e, t) {
					return (e && t && '*' === e) || e === t;
				}
				function jr(e) {
					return Array.isArray(e) ? e : Array.of(e);
				}
				function Nr(e, t, n, o) {
					var r,
						i = jr(e).map(function (e) {
							var r = (function (e, t, n, o) {
								if (kr(e)) return [e];
								if (Pr(e)) {
									var r = (function (e, t, n, o) {
										var r = void 0;
										try {
											return (
												(r = e({
													event: t.getPayload(),
													eventType: n,
													eventSchema: o,
												})),
												(Array.isArray(r) && r.every(kr)) || kr(r) ? r : void 0
											);
										} catch (e) {
											r = void 0;
										}
										return r;
									})(e, t, n, o);
									if (kr(r)) return [r];
									if (Array.isArray(r)) return r;
								}
							})(e, t, n, o);
							if (r && 0 !== r.length) return r;
						});
					return (r = []).concat.apply(
						r,
						i.filter(function (e) {
							return null != e && e.filter(Boolean);
						}),
					);
				}
				function Lr(e, t) {
					void 0 === t && (t = {});
					var n = {};
					for (var o in e)
						(t[o] || (null !== e[o] && void 0 !== e[o])) && (n[o] = e[o]);
					return n;
				}
				var Mr = n(961),
					Ur = n.n(Mr);
				function $r(e, t, n) {
					void 0 === n && (n = 63072e3);
					try {
						var o = window.localStorage,
							r = Date.now() + 1e3 * n;
						return (
							o.setItem(''.concat(e, '.expires'), r.toString()),
							o.setItem(e, t),
							!0
						);
					} catch (e) {
						return !1;
					}
				}
				function _r(e) {
					try {
						var t = window.localStorage;
						return t.removeItem(e), t.removeItem(e + '.expires'), !0;
					} catch (e) {
						return !1;
					}
				}
				function Br(e) {
					try {
						return window.sessionStorage.getItem(e);
					} catch (e) {
						return;
					}
				}
				function Vr(e) {
					return !(!e || 'string' != typeof e.valueOf());
				}
				function Fr(e) {
					return (
						(Number.isInteger && Number.isInteger(e)) ||
						('number' == typeof e && isFinite(e) && Math.floor(e) === e)
					);
				}
				function Hr(e) {
					if (!Vr(e)) {
						e = e.text || '';
						var t = document.getElementsByTagName('title');
						t && null != t[0] && (e = t[0].text);
					}
					return e;
				}
				function zr(e) {
					var t = new RegExp('^(?:(?:https?|ftp):)/*(?:[^@]+@)?([^:/#]+)').exec(
						e,
					);
					return t ? t[1] : e;
				}
				function Jr(e) {
					var t = e.length;
					return (
						'.' === e.charAt(--t) && (e = e.slice(0, t)),
						'*.' === e.slice(0, 2) && (e = e.slice(1)),
						e
					);
				}
				function Wr(e) {
					var t = window,
						n =
							Xr('referrer', t.location.href) || Xr('referer', t.location.href);
					if (n) return n;
					if (e) return e;
					try {
						if (t.top) return t.top.document.referrer;
						if (t.parent) return t.parent.document.referrer;
					} catch (e) {}
					return document.referrer;
				}
				function Qr(e, t, n, o) {
					return e.addEventListener
						? (e.addEventListener(t, n, o), !0)
						: e.attachEvent
							? e.attachEvent('on' + t, n)
							: void (e['on' + t] = n);
				}
				function Xr(e, t) {
					var n = new RegExp('^[^#]*[?&]' + e + '=([^&#]*)').exec(t);
					return n ? decodeURIComponent(n[1].replace(/\+/g, ' ')) : null;
				}
				function Gr(e, t, n, o) {
					Kr(e, '', -1, '/', t, n, o);
				}
				function Yr(e) {
					for (
						var t = document.cookie.split('; '), n = [], o = 0;
						o < t.length;
						o++
					)
						t[o].substring(0, e.length) === e && n.push(t[o]);
					return n;
				}
				function Kr(e, t, n, o, r, i, a) {
					return arguments.length > 1
						? (document.cookie =
								e +
								'=' +
								encodeURIComponent(null != t ? t : '') +
								(n
									? '; Expires=' + new Date(+new Date() + 1e3 * n).toUTCString()
									: '') +
								(o ? '; Path=' + o : '') +
								(r ? '; Domain=' + r : '') +
								(i ? '; SameSite=' + i : '') +
								(a ? '; Secure' : ''))
						: decodeURIComponent(
								(('; ' + document.cookie).split('; ' + e + '=')[1] || '').split(
									';',
								)[0],
							);
				}
				function Zr(e) {
					if (null == e || 'object' != typeof e || Array.isArray(e))
						return function () {
							return !0;
						};
					var t = Object.prototype.hasOwnProperty.call(e, 'allowlist'),
						n = (function (e) {
							var t = {},
								n = e.allowlist || e.denylist;
							if (n) {
								Array.isArray(n) || (n = [n]);
								for (var o = 0; o < n.length; o++) t[n[o]] = !0;
							}
							return t;
						})(e);
					return (function (e, t) {
						return e.hasOwnProperty('filter') && e.filter ? e.filter : t;
					})(e, function (e) {
						return (
							(function (e, t) {
								for (var n = 0, o = ei(e); n < o.length; n++)
									if (t[o[n]]) return !0;
								return !1;
							})(e, n) === t
						);
					});
				}
				function ei(e) {
					return e.className.match(/\S+/g) || [];
				}
				function ti(e, t, n, o, r, i, a, s, c, u, d, l, m, p, f, g, v) {
					var h,
						y,
						w = !1,
						b = [],
						C = !1,
						I =
							!0 === (o = 'string' == typeof o ? o.toLowerCase() : o) ||
							'beacon' === o ||
							'true' === o,
						x =
							Boolean(
								I &&
									window.navigator &&
									window.navigator.sendBeacon &&
									!(
										(function (e, t) {
											var n = t.match(
												'(iP.+; CPU .*OS (d+)[_d]*.*) AppleWebKit/',
											);
											return !(!n || !n.length) && parseInt(n[0]) <= 13;
										})(0, (y = window.navigator.userAgent)) ||
										((function (e, t, n) {
											var o = n.match(
												'(Macintosh;.*Mac OS X (d+)_(d+)[_d]*.*) AppleWebKit/',
											);
											return (
												!(!o || !o.length) &&
												(parseInt(o[0]) <= 10 ||
													(10 === parseInt(o[0]) && parseInt(o[1]) <= 15))
											);
										})(0, 0, y) &&
											(function (e) {
												return (
													e.match('Version/.* Safari/') &&
													!(function (e) {
														return e.match('Chrom(e|ium)');
													})(e)
												);
											})(y))
									),
							) && I,
						E = 'get' === o,
						S = Boolean(
							window.XMLHttpRequest &&
								'withCredentials' in new XMLHttpRequest(),
						),
						k = !E && S && ('post' === o || I),
						P = k ? r : '/i',
						D = 'snowplowOutQueue_'.concat(e, '_').concat(k ? 'post2' : 'get');
					if (
						(I && (m = {}),
						(i =
							(n &&
								(function () {
									var e = 'modernizr';
									if (
										!(function () {
											try {
												return !!window.localStorage;
											} catch (e) {
												return !0;
											}
										})()
									)
										return !1;
									try {
										var t = window.localStorage;
										return t.setItem(e, e), t.removeItem(e), !0;
									} catch (e) {
										return !1;
									}
								})() &&
								k &&
								i) ||
							1),
						n)
					)
						try {
							var T = window.localStorage.getItem(D);
							b = T ? JSON.parse(T) : [];
						} catch (e) {}
					function R(e) {
						var t = Object.keys(e)
							.map(function (t) {
								return [t, e[t]];
							})
							.reduce(function (e, t) {
								var n = t[0],
									o = t[1];
								return (e[n] = o.toString()), e;
							}, {});
						return { evt: t, bytes: O(JSON.stringify(t)) };
					}
					function O(e) {
						for (var t = 0, n = 0; n < e.length; n++) {
							var o = e.charCodeAt(n);
							o <= 127
								? (t += 1)
								: o <= 2047
									? (t += 2)
									: o >= 55296 && o <= 57343
										? ((t += 4), n++)
										: (t += o < 65535 ? 3 : 4);
						}
						return t;
					}
					Array.isArray(b) || (b = []),
						t.outQueues.push(b),
						S &&
							i > 1 &&
							t.bufferFlushers.push(function (e) {
								w || j(e);
							});
					var A = function (e) {
						return 'object' == typeof e[0] && 'evt' in e[0];
					};
					function q(e, t) {
						N(t, !0, !1).send(L(M([e.evt])));
					}
					function j(e) {
						for (
							void 0 === e && (e = !1);
							b.length && 'string' != typeof b[0] && 'object' != typeof b[0];

						)
							b.shift();
						if (b.length) {
							if (!Vr(h)) throw 'No collector configured';
							if (((w = !0), v && !C)) {
								var t = N(v, !1, e);
								return (
									(C = !0),
									(t.timeout = d),
									(t.onreadystatechange = function () {
										4 === t.readyState && j();
									}),
									void t.send()
								);
							}
							if (S) {
								var o,
									r,
									i = void 0;
								A(b)
									? ((o = N((i = h), !0, e)),
										(r = (function (e) {
											for (
												var t = 0, n = 0;
												t < e.length && !((n += e[t].bytes) >= a);

											)
												t += 1;
											return t;
										})(b)))
									: ((i = U(b[0])), (o = N(i, !1, e)), (r = 1));
								var s = setTimeout(function () {
										o.abort(), (w = !1);
									}, d),
									c = function (e) {
										for (var t = 0; t < e; t++) b.shift();
										n && $r(D, JSON.stringify(b.slice(0, u)));
									},
									m = function (e) {
										c(e), j();
									};
								if (
									((o.onreadystatechange = function () {
										var e;
										4 === o.readyState &&
											o.status >= 200 &&
											(clearTimeout(s),
											o.status < 300
												? m(r)
												: (!(
														((e = o.status) >= 200 && e < 300) ||
														(!f.includes(e) && g.includes(e))
													) ||
														(br.error(
															'Status '.concat(o.status, ', will not retry.'),
														),
														c(r)),
													(w = !1)));
									}),
									A(b))
								) {
									var p = b.slice(0, r);
									if (p.length > 0) {
										var y = !1,
											I = p.map(function (e) {
												return e.evt;
											});
										if (x) {
											var E = new Blob([L(M(I))], { type: 'application/json' });
											try {
												y = navigator.sendBeacon(i, E);
											} catch (e) {
												y = !1;
											}
										}
										!0 === y ? m(r) : o.send(L(M(I)));
									}
								} else o.send();
							} else if (l || A(b)) w = !1;
							else {
								var k = new Image(1, 1),
									P = !0;
								(k.onload = function () {
									P &&
										((P = !1),
										b.shift(),
										n && $r(D, JSON.stringify(b.slice(0, u))),
										j());
								}),
									(k.onerror = function () {
										P && ((P = !1), (w = !1));
									}),
									(k.src = U(b[0])),
									setTimeout(function () {
										P && w && ((P = !1), j());
									}, d);
							}
						} else w = !1;
					}
					function N(e, t, n) {
						var o = new XMLHttpRequest();
						for (var r in (t
							? (o.open('POST', e, !n),
								o.setRequestHeader(
									'Content-Type',
									'application/json; charset=UTF-8',
								))
							: o.open('GET', e, !n),
						(o.withCredentials = p),
						l && o.setRequestHeader('SP-Anonymous', '*'),
						m))
							Object.prototype.hasOwnProperty.call(m, r) &&
								o.setRequestHeader(r, m[r]);
						return o;
					}
					function L(e) {
						return JSON.stringify({
							schema:
								'iglu:com.snowplowanalytics.snowplow/payload_data/jsonschema/1-0-4',
							data: e,
						});
					}
					function M(e) {
						for (
							var t = new Date().getTime().toString(), n = 0;
							n < e.length;
							n++
						)
							e[n].stm = t;
						return e;
					}
					function U(e) {
						return c
							? h + e.replace('?', '?stm=' + new Date().getTime() + '&')
							: h + e;
					}
					return {
						enqueueRequest: function (e, t) {
							h = t + P;
							var o = function (e, t) {
								return br.warn('Event (' + e + 'B) too big, max is ' + t);
							};
							if (k) {
								if ((d = R(e)).bytes >= a) return o(d.bytes, a), void q(d, h);
								b.push(d);
							} else {
								var c = (function (e) {
									var t = '?',
										n = { co: !0, cx: !0 },
										o = !0;
									for (var r in e)
										e.hasOwnProperty(r) &&
											!n.hasOwnProperty(r) &&
											(o ? (o = !1) : (t += '&'),
											(t +=
												encodeURIComponent(r) +
												'=' +
												encodeURIComponent(e[r])));
									for (var i in n)
										e.hasOwnProperty(i) &&
											n.hasOwnProperty(i) &&
											(t += '&' + i + '=' + encodeURIComponent(e[i]));
									return t;
								})(e);
								if (s > 0) {
									var d,
										l = O(U(c));
									if (l >= s) return o(l, s), void (S && q((d = R(e)), t + r));
								}
								b.push(c);
							}
							var m = !1;
							n && (m = $r(D, JSON.stringify(b.slice(0, u)))),
								w || (m && !(b.length >= i)) || j();
						},
						executeQueue: function () {
							w || j();
						},
						setUseLocalStorage: function (e) {
							n = e;
						},
						setAnonymousTracking: function (e) {
							l = e;
						},
						setCollectorUrl: function (e) {
							h = e + P;
						},
						setBufferSize: function (e) {
							i = e;
						},
					};
				}
				function ni(e, t, n) {
					var o, r, i;
					return (
						'translate.googleusercontent.com' === e
							? ('' === n && (n = t),
								(e = zr(
									(t =
										null !==
											((r = t),
											'u',
											(o =
												(i = new RegExp(
													'^(?:https?|ftp)(?::/*(?:[^?]+))([?][^#]+)',
												).exec(r)) && (null == i ? void 0 : i.length) > 1
													? Xr('u', i[1])
													: null)) && void 0 !== o
											? o
											: ''),
								)))
							: ('cc.bingj.com' !== e &&
									'webcache.googleusercontent.com' !== e) ||
								(e = zr((t = document.links[0].href))),
						[e, t, n]
					);
				}
				function oi(e, t) {
					void 0 === t && (t = { memorizedVisitCount: 1 });
					var n = t.memorizedVisitCount;
					ci(e) ? ((e[7] = e[6]), (e[5] = e[4]), e[3]++) : (e[3] = n);
					var o = (0, lr.v4)();
					return (e[6] = o), (e[10] = 0), (e[8] = ''), (e[9] = void 0), o;
				}
				function ri(e) {
					e[4] = Math.round(new Date().getTime() / 1e3);
				}
				function ii(e, t, n) {
					var o = e[9];
					return {
						userId: n ? '00000000-0000-0000-0000-000000000000' : e[1],
						sessionId: e[6],
						eventIndex: e[10],
						sessionIndex: e[3],
						previousSessionId: n ? null : e[7] || null,
						storageMechanism:
							'localStorage' == t ? 'LOCAL_STORAGE' : 'COOKIE_1',
						firstEventId: e[8] || null,
						firstEventTimestamp: o ? new Date(o).toISOString() : null,
					};
				}
				function ai(e) {
					return e[6];
				}
				function si(e) {
					return e[3];
				}
				function ci(e) {
					return '0' === e[0];
				}
				var ui = 'x';
				function di() {
					return {
						viewport: mi(li()),
						documentSize: mi(
							((e = document.documentElement),
							(t = document.body),
							(n = t ? Math.max(t.offsetHeight, t.scrollHeight) : 0),
							(o = Math.max(e.clientWidth, e.offsetWidth, e.scrollWidth)),
							(r = Math.max(e.clientHeight, e.offsetHeight, e.scrollHeight, n)),
							isNaN(o) || isNaN(r) ? '' : o + ui + r),
						),
						resolution: mi(screen.width + ui + screen.height),
						colorDepth: screen.colorDepth,
						devicePixelRatio: window.devicePixelRatio,
						cookiesEnabled: window.navigator.cookieEnabled,
						online: window.navigator.onLine,
						browserLanguage: navigator.language || navigator.userLanguage,
						documentLanguage: document.documentElement.lang,
						webdriver: window.navigator.webdriver,
						deviceMemory: window.navigator.deviceMemory,
						hardwareConcurrency: window.navigator.hardwareConcurrency,
					};
					var e, t, n, o, r;
				}
				function li() {
					var e, t;
					if ('innerWidth' in window)
						(e = window.innerWidth), (t = window.innerHeight);
					else {
						var n = document.documentElement || document.body;
						(e = n.clientWidth), (t = n.clientHeight);
					}
					return e >= 0 && t >= 0 ? e + ui + t : null;
				}
				function mi(e) {
					return (
						e &&
						e
							.split(ui)
							.map(function (e) {
								return Math.floor(Number(e));
							})
							.join(ui)
					);
				}
				function pi(e, t, n, o, r, i) {
					void 0 === i && (i = {});
					var a = [],
						s = (function (e, t, n, o, r, i) {
							var s,
								c,
								u,
								d,
								l,
								m,
								p,
								f,
								g,
								v,
								h,
								y,
								w,
								b,
								C,
								I,
								x,
								E,
								S,
								k,
								P,
								D,
								T,
								R,
								O,
								A,
								q,
								j;
							i.eventMethod =
								null !== (s = i.eventMethod) && void 0 !== s ? s : 'post';
							var N,
								L,
								M = function (e) {
									var t;
									return null !== (t = e.stateStorageStrategy) && void 0 !== t
										? t
										: 'cookieAndLocalStorage';
								},
								U = function (e) {
									var t, n;
									return (
										'boolean' != typeof e.anonymousTracking &&
										null !==
											(n =
												!0 ===
												(null === (t = e.anonymousTracking) || void 0 === t
													? void 0
													: t.withSessionTracking)) &&
										void 0 !== n &&
										n
									);
								},
								$ = function (e) {
									var t, n;
									return (
										'boolean' != typeof e.anonymousTracking &&
										null !==
											(n =
												!0 ===
												(null === (t = e.anonymousTracking) || void 0 === t
													? void 0
													: t.withServerAnonymisation)) &&
										void 0 !== n &&
										n
									);
								},
								_ = function (e) {
									return !!e.anonymousTracking;
								},
								B =
									null !==
										(u =
											null === (c = null == i ? void 0 : i.contexts) ||
											void 0 === c
												? void 0
												: c.browser) &&
									void 0 !== u &&
									u,
								V =
									null ===
										(l =
											null === (d = null == i ? void 0 : i.contexts) ||
											void 0 === d
												? void 0
												: d.webPage) ||
									void 0 === l ||
									l;
							a.push(
								((N = function (e) {
									return De ? null : e;
								}),
								(L = function (e) {
									return ke ? e : N(e);
								}),
								{
									beforeTrack: function (e) {
										var t = Ge('ses'),
											n = ut(),
											o =
												0 ===
												(function (e) {
													return e[10];
												})(n);
										if (((re = !!Q && !!Kr(Q)), xe || re)) at();
										else {
											ci(n)
												? ((ne = t || 'none' == Te ? ai(n) : oi(n)),
													(Oe = si(n)))
												: new Date().getTime() - Re > 1e3 * Se &&
													(Oe++, (ne = oi(n, { memorizedVisitCount: Oe }))),
												ri(n),
												(function (e, t) {
													if (0 === e[10]) {
														var n = t.build();
														e[8] = n.eid;
														var o = n.dtm || n.ttm;
														e[9] = o ? parseInt(o) : void 0;
													}
												})(n, e),
												(function (e) {
													e[10] += 1;
												})(n);
											var r = di(),
												i = r.viewport,
												a = r.documentSize;
											e.add('vp', i),
												e.add('ds', a),
												e.add('vid', L(Oe)),
												e.add('sid', L(ne)),
												e.add(
													'duid',
													N(
														(function (e) {
															return e[1];
														})(n),
													),
												),
												e.add('uid', N(oe)),
												He(),
												e.add('refr', We(F || de)),
												e.add('url', We(H || ue));
											var s = ii(n, Te, De);
											if (
												(!Le ||
													(De && !ke) ||
													(function (e, t) {
														var n = {
															schema:
																'iglu:com.snowplowanalytics.snowplow/client_session/jsonschema/1-0-2',
															data: t,
														};
														e.addContextEntity(n);
													})(e, s),
												'none' != Te)
											) {
												rt(n);
												var c = ot();
												(t && !o) || !c || !Me || Ue || (Me(s), (Ue = !1));
											}
											Re = new Date().getTime();
										}
									},
								}),
							),
								V &&
									a.push({
										contexts: function () {
											return [
												{
													schema:
														'iglu:com.snowplowanalytics.snowplow/web_page/jsonschema/1-0-0',
													data: { id: mt() },
												},
											];
										},
									}),
								B &&
									a.push({
										contexts: function () {
											return [
												{
													schema:
														'iglu:com.snowplowanalytics.snowplow/browser_context/jsonschema/1-0-0',
													data: ur(ur({}, di()), { tabId: pt() }),
												},
											];
										},
									}),
								a.push.apply(
									a,
									null !== (m = i.plugins) && void 0 !== m ? m : [],
								);
							var F,
								H,
								z,
								J,
								W,
								Q,
								X,
								G,
								Y,
								K,
								Z,
								ee,
								te,
								ne,
								oe,
								re,
								ie = (function (e) {
									void 0 === e && (e = {});
									var t = e.base64,
										n = e.corePlugins,
										o = e.callback,
										r = null != n ? n : [],
										i = (function (e, t, n) {
											var o = (function (e) {
													return {
														addPluginContexts: function (t) {
															var n = t ? dr([], t, !0) : [];
															return (
																e.forEach(function (e) {
																	try {
																		e.contexts && n.push.apply(n, e.contexts());
																	} catch (e) {
																		br.error('Error adding plugin contexts', e);
																	}
																}),
																n
															);
														},
													};
												})(t),
												r = Cr(),
												i = e,
												a = {};
											function s(e, t) {
												a[e] = t;
											}
											var c = {
												track: function (e, s, c) {
													e.withJsonProcessor(fr(i)),
														e.add('eid', (0, lr.v4)()),
														e.addDict(a);
													var u = (function (e) {
														return null == e
															? { type: 'dtm', value: new Date().getTime() }
															: 'number' == typeof e
																? { type: 'dtm', value: e }
																: 'ttm' === e.type
																	? { type: 'ttm', value: e.value }
																	: {
																			type: 'dtm',
																			value: e.value || new Date().getTime(),
																		};
													})(c);
													e.add(u.type, u.value.toString());
													var d = (function (e, t) {
															var n = r.getApplicableContexts(e),
																o = [];
															return (
																t && t.length && o.push.apply(o, t),
																n && n.length && o.push.apply(o, n),
																o
															);
														})(e, o.addPluginContexts(s)),
														l = (function (e) {
															if (e && e.length)
																return {
																	schema:
																		'iglu:com.snowplowanalytics.snowplow/contexts/jsonschema/1-0-0',
																	data: e,
																};
														})(d);
													void 0 !== l && e.addJson('cx', 'co', l),
														t.forEach(function (t) {
															try {
																t.beforeTrack && t.beforeTrack(e);
															} catch (e) {
																br.error('Plugin beforeTrack', e);
															}
														}),
														'function' == typeof n && n(e);
													var m = e.build();
													return (
														t.forEach(function (e) {
															try {
																e.afterTrack && e.afterTrack(m);
															} catch (e) {
																br.error('Plugin afterTrack', e);
															}
														}),
														m
													);
												},
												addPayloadPair: s,
												getBase64Encoding: function () {
													return i;
												},
												setBase64Encoding: function (e) {
													i = e;
												},
												addPayloadDict: function (e) {
													for (var t in e)
														Object.prototype.hasOwnProperty.call(e, t) &&
															(a[t] = e[t]);
												},
												resetPayloadPairs: function (e) {
													a = vr(e) ? e : {};
												},
												setTrackerVersion: function (e) {
													s('tv', e);
												},
												setTrackerNamespace: function (e) {
													s('tna', e);
												},
												setAppId: function (e) {
													s('aid', e);
												},
												setPlatform: function (e) {
													s('p', e);
												},
												setUserId: function (e) {
													s('uid', e);
												},
												setScreenResolution: function (e, t) {
													s('res', e + 'x' + t);
												},
												setViewport: function (e, t) {
													s('vp', e + 'x' + t);
												},
												setColorDepth: function (e) {
													s('cd', e);
												},
												setTimezone: function (e) {
													s('tz', e);
												},
												setLang: function (e) {
													s('lang', e);
												},
												setIpAddress: function (e) {
													s('ip', e);
												},
												setUseragent: function (e) {
													s('ua', e);
												},
												addGlobalContexts: function (e) {
													r.addGlobalContexts(e);
												},
												clearGlobalContexts: function () {
													r.clearGlobalContexts();
												},
												removeGlobalContexts: function (e) {
													r.removeGlobalContexts(e);
												},
											};
											return c;
										})(null == t || t, r, o),
										a = ur(ur({}, i), {
											addPlugin: function (e) {
												var t,
													n,
													o = e.plugin;
												r.push(o),
													null === (t = o.logger) ||
														void 0 === t ||
														t.call(o, br),
													null === (n = o.activateCorePlugin) ||
														void 0 === n ||
														n.call(o, a);
											},
										});
									return (
										null == r ||
											r.forEach(function (e) {
												var t, n;
												null === (t = e.logger) ||
													void 0 === t ||
													t.call(e, br),
													null === (n = e.activateCorePlugin) ||
														void 0 === n ||
														n.call(e, a);
											}),
										a
									);
								})({
									base64: i.encodeBase64,
									corePlugins: a,
									callback: function (e) {
										xe || re || Ae.enqueueRequest(e.build(), me);
									},
								}),
								ae = document.characterSet || document.charset,
								se = ni(window.location.hostname, window.location.href, Wr()),
								ce = Jr(se[0]),
								ue = se[1],
								de = se[2],
								le = null !== (p = i.platform) && void 0 !== p ? p : 'web',
								me = dt(o),
								pe =
									null !== (f = i.postPath) && void 0 !== f
										? f
										: '/com.snowplowanalytics.snowplow/tp2',
								fe = null !== (g = i.appId) && void 0 !== g ? g : '',
								ge = document.title,
								ve =
									null === (v = i.resetActivityTrackingOnPageView) ||
									void 0 === v ||
									v,
								he = null !== (h = i.cookieName) && void 0 !== h ? h : '_sp_',
								ye = null !== (y = i.cookieDomain) && void 0 !== y ? y : void 0,
								we = '/',
								be =
									null !== (w = i.cookieSameSite) && void 0 !== w ? w : 'None',
								Ce = null === (b = i.cookieSecure) || void 0 === b || b,
								Ie =
									navigator.doNotTrack ||
									navigator.msDoNotTrack ||
									window.doNotTrack,
								xe =
									void 0 !== i.respectDoNotTrack &&
									i.respectDoNotTrack &&
									('yes' === Ie || '1' === Ie),
								Ee =
									null !== (C = i.cookieLifetime) && void 0 !== C ? C : 63072e3,
								Se =
									null !== (I = i.sessionCookieTimeout) && void 0 !== I
										? I
										: 1800,
								ke = U(i),
								Pe = $(i),
								De = _(i),
								Te = M(i),
								Re = new Date().getTime(),
								Oe = 1,
								Ae = ti(
									e,
									r,
									'localStorage' == Te || 'cookieAndLocalStorage' == Te,
									i.eventMethod,
									pe,
									null !== (x = i.bufferSize) && void 0 !== x ? x : 1,
									null !== (E = i.maxPostBytes) && void 0 !== E ? E : 4e4,
									null !== (S = i.maxGetBytes) && void 0 !== S ? S : 0,
									null === (k = i.useStm) || void 0 === k || k,
									null !== (P = i.maxLocalStorageQueueSize) && void 0 !== P
										? P
										: 1e3,
									null !== (D = i.connectionTimeout) && void 0 !== D ? D : 5e3,
									Pe,
									null !== (T = i.customHeaders) && void 0 !== T ? T : {},
									null === (R = i.withCredentials) || void 0 === R || R,
									null !== (O = i.retryStatusCodes) && void 0 !== O ? O : [],
									(null !== (A = i.dontRetryStatusCodes) && void 0 !== A
										? A
										: []
									).concat([400, 401, 403, 410, 422]),
									i.idService,
								),
								qe = !1,
								je = !1,
								Ne = { enabled: !1, installed: !1, configurations: {} },
								Le =
									null !==
										(j =
											null === (q = i.contexts) || void 0 === q
												? void 0
												: q.session) &&
									void 0 !== j &&
									j,
								Me = i.onSessionUpdateCallback,
								Ue = !1;
							i.hasOwnProperty('discoverRootDomain') &&
								i.discoverRootDomain &&
								(ye = (function (e, t) {
									for (
										var n = window.location.hostname,
											o = '_sp_root_domain_test_',
											r = o + new Date().getTime(),
											i = '_test_value_' + new Date().getTime(),
											a = n.split('.'),
											s = a.length - 2;
										s >= 0;
										s--
									) {
										var c = a.slice(s).join('.');
										if ((Kr(r, i, 0, '/', c, e, t), Kr(r) === i)) {
											Gr(r, c, e, t);
											for (var u = Yr(o), d = 0; d < u.length; d++)
												Gr(u[d], c, e, t);
											return c;
										}
									}
									return n;
								})(be, Ce));
							var $e = di(),
								_e = $e.browserLanguage,
								Be = $e.resolution,
								Ve = $e.colorDepth,
								Fe = $e.cookiesEnabled;
							function He() {
								(se = ni(
									window.location.hostname,
									window.location.href,
									Wr(),
								))[1] !== ue && (de = Wr(ue)),
									(ce = Jr(se[0])),
									(ue = se[1]);
							}
							function ze(e) {
								var t = new Date().getTime(),
									n = e.currentTarget;
								(null == n ? void 0 : n.href) &&
									(n.href = (function (e, t, n) {
										var o = '_sp=' + n,
											r = e.split('#'),
											i = r[0].split('?'),
											a = i.shift(),
											s = i.join('?');
										if (s) {
											for (
												var c = !0, u = s.split('&'), d = 0;
												d < u.length;
												d++
											)
												if ('_sp=' === u[d].substr(0, t.length + 1)) {
													(c = !1), (u[d] = o), (s = u.join('&'));
													break;
												}
											c && (s = o + '&' + s);
										} else s = o;
										return (r[0] = a + '?' + s), r.join('#');
									})(n.href, '_sp', te + '.' + t));
							}
							function Je(e) {
								for (var t = 0; t < document.links.length; t++) {
									var n = document.links[t];
									!n.spDecorationEnabled &&
										e(n) &&
										(Qr(n, 'click', ze, !0),
										Qr(n, 'mousedown', ze, !0),
										(n.spDecorationEnabled = !0));
								}
							}
							function We(e) {
								var t;
								return (
									J && ((t = new RegExp('#.*')), (e = e.replace(t, ''))),
									W && ((t = new RegExp('[{}]', 'g')), (e = e.replace(t, ''))),
									e
								);
							}
							function Qe(e) {
								var t = new RegExp('^([a-z]+):').exec(e);
								return t ? t[1] : null;
							}
							function Xe(e) {
								return he + e + '.' + ee;
							}
							function Ge(e) {
								var t = Xe(e);
								return 'localStorage' == Te
									? (function (e) {
											try {
												var t = window.localStorage,
													n = t.getItem(e + '.expires');
												return null === n || +n > Date.now()
													? t.getItem(e)
													: (t.removeItem(e),
														void t.removeItem(e + '.expires'));
											} catch (e) {
												return;
											}
										})(t)
									: 'cookie' == Te || 'cookieAndLocalStorage' == Te
										? Kr(t)
										: void 0;
							}
							function Ye() {
								He(), (ee = Ur()((ye || ce) + (we || '/')).slice(0, 4));
							}
							function Ke() {
								var e = new Date();
								X = e.getTime();
							}
							function Ze() {
								!(function () {
									var e = et(),
										t = e[0];
									t < G ? (G = t) : t > Y && (Y = t);
									var n = e[1];
									n < K ? (K = n) : n > Z && (Z = n);
								})(),
									Ke();
							}
							function et() {
								var e = document.documentElement;
								return e
									? [
											e.scrollLeft || window.pageXOffset,
											e.scrollTop || window.pageYOffset,
										]
									: [0, 0];
							}
							function tt() {
								var e = et(),
									t = e[0];
								(G = t), (Y = t);
								var n = e[1];
								(K = n), (Z = n);
							}
							function nt(e) {
								return Math.round(e);
							}
							function ot() {
								return it(Xe('ses'), '*', Se);
							}
							function rt(e) {
								var t = Xe('id'),
									n = (function (e) {
										return e.shift(), e.join('.');
									})(e);
								return it(t, n, Ee);
							}
							function it(e, t, n) {
								return (
									!(De && !ke) &&
									('localStorage' == Te
										? $r(e, t, n)
										: ('cookie' == Te || 'cookieAndLocalStorage' == Te) &&
											(Kr(e, t, n, we, ye, be, Ce),
											-1 !== document.cookie.indexOf(''.concat(e, '='))))
								);
							}
							function at(e) {
								var t = Xe('id'),
									n = Xe('ses');
								_r(t),
									_r(n),
									Gr(t, ye, be, Ce),
									Gr(n, ye, be, Ce),
									(null == e ? void 0 : e.preserveSession) ||
										((ne = (0, lr.v4)()), (Oe = 1)),
									(null == e ? void 0 : e.preserveUser) ||
										((te = De ? '' : (0, lr.v4)()), (oe = null));
							}
							function st(e) {
								e &&
									e.stateStorageStrategy &&
									((i.stateStorageStrategy = e.stateStorageStrategy),
									(Te = M(i))),
									(De = _(i)),
									(ke = U(i)),
									(Pe = $(i)),
									Ae.setUseLocalStorage(
										'localStorage' == Te || 'cookieAndLocalStorage' == Te,
									),
									Ae.setAnonymousTracking(Pe);
							}
							function ct() {
								if (!De || ke) {
									var e = 'none' != Te && !!Ge('ses'),
										t = ut();
									(te = (function (e, t) {
										var n;
										return (
											e[1]
												? (n = e[1])
												: t
													? ((n = ''), (e[1] = n))
													: ((n = (0, lr.v4)()), (e[1] = n)),
											n
										);
									})(t, De)),
										(ne = e ? ai(t) : oi(t)),
										(Oe = si(t)),
										'none' != Te && (ot(), ri(t), rt(t));
								}
							}
							function ut() {
								return 'none' == Te
									? ['1', '', 0, 0, 0, void 0, '', '', '', void 0, 0]
									: (function (e, t, n, o) {
											var r,
												i = new Date(),
												a = Math.round(i.getTime() / 1e3);
											e
												? (r = e.split('.')).unshift('0')
												: (r = ['1', t, a, o, a, '', n]),
												(r[6] && 'undefined' !== r[6]) || (r[6] = (0, lr.v4)()),
												(r[7] && 'undefined' !== r[7]) || (r[7] = ''),
												(r[8] && 'undefined' !== r[8]) || (r[8] = ''),
												(r[9] && 'undefined' !== r[9]) || (r[9] = ''),
												(r[10] && 'undefined' !== r[10]) || (r[10] = 0);
											var s = function (e, t) {
													var n = parseInt(e);
													return isNaN(n) ? t : n;
												},
												c = function (e) {
													return e ? s(e, void 0) : void 0;
												};
											return [
												r[0],
												r[1],
												s(r[2], a),
												s(r[3], o),
												s(r[4], a),
												c(r[5]),
												r[6],
												r[7],
												r[8],
												c(r[9]),
												s(r[10], 0),
											];
										})(Ge('id') || void 0, te, ne, Oe);
							}
							function dt(e) {
								return 0 === e.indexOf('http')
									? e
									: ('https:' === document.location.protocol
											? 'https'
											: 'http') +
											'://' +
											e;
							}
							function lt() {
								(qe && null != r.pageViewId) || (r.pageViewId = (0, lr.v4)());
							}
							function mt() {
								return (
									null == r.pageViewId && (r.pageViewId = (0, lr.v4)()),
									r.pageViewId
								);
							}
							function pt() {
								if ('none' === Te || De || !V) return null;
								var e = '_sp_tab_id',
									t = Br(e);
								return (
									t ||
										((function (e, t) {
											try {
												window.sessionStorage.setItem('_sp_tab_id', t);
											} catch (e) {
												return !1;
											}
										})(0, (0, lr.v4)()),
										(t = Br(e))),
									t || null
								);
							}
							function ft(e, t) {
								return (e || []).concat(t ? t() : []);
							}
							function gt(e, t, n) {
								var o = function (e, t) {
										He(),
											e({
												context: t,
												pageViewId: mt(),
												minXOffset: G,
												minYOffset: K,
												maxXOffset: Y,
												maxYOffset: Z,
											}),
											tt();
									},
									r = function () {
										var r = new Date();
										X + e.configHeartBeatTimer > r.getTime() &&
											o(e.callback, ft(t, n));
									};
								0 === e.configMinimumVisitLength
									? (e.activityInterval = window.setInterval(
											r,
											e.configHeartBeatTimer,
										))
									: (e.activityInterval = window.setTimeout(function () {
											var i = new Date();
											X + e.configMinimumVisitLength > i.getTime() &&
												o(e.callback, ft(t, n)),
												(e.activityInterval = window.setInterval(
													r,
													e.configHeartBeatTimer,
												));
										}, e.configMinimumVisitLength));
							}
							function vt(e) {
								var t = e.minimumVisitLength,
									n = e.heartbeatDelay,
									o = e.callback;
								if (Fr(t) && Fr(n))
									return {
										configMinimumVisitLength: 1e3 * t,
										configHeartBeatTimer: 1e3 * n,
										callback: o,
									};
								br.error(
									'Activity tracking minimumVisitLength & heartbeatDelay must be integers',
								);
							}
							function ht(e) {
								var t = e.context,
									n = e.minXOffset,
									o = e.minYOffset,
									r = e.maxXOffset,
									i = e.maxYOffset,
									a = document.title;
								a !== ge && ((ge = a), (z = void 0)),
									ie.track(
										(function (e) {
											var t = e.pageUrl,
												n = e.pageTitle,
												o = e.referrer,
												r = e.minXOffset,
												i = e.maxXOffset,
												a = e.minYOffset,
												s = e.maxYOffset,
												c = pr();
											return (
												c.add('e', 'pp'),
												c.add('url', t),
												c.add('page', n),
												c.add('refr', o),
												r && !isNaN(Number(r)) && c.add('pp_mix', r.toString()),
												i && !isNaN(Number(i)) && c.add('pp_max', i.toString()),
												a && !isNaN(Number(a)) && c.add('pp_miy', a.toString()),
												s && !isNaN(Number(s)) && c.add('pp_may', s.toString()),
												c
											);
										})({
											pageUrl: We(H || ue),
											pageTitle: Hr(z || ge),
											referrer: We(F || de),
											minXOffset: nt(n),
											maxXOffset: nt(r),
											minYOffset: nt(o),
											maxYOffset: nt(i),
										}),
										t,
									);
							}
							function yt(e) {
								var t = Ne.configurations[e];
								0 === (null == t ? void 0 : t.configMinimumVisitLength)
									? window.clearTimeout(null == t ? void 0 : t.activityInterval)
									: window.clearInterval(
											null == t ? void 0 : t.activityInterval,
										),
									(Ne.configurations[e] = void 0);
							}
							ie.setTrackerVersion(n),
								ie.setTrackerNamespace(t),
								ie.setAppId(fe),
								ie.setPlatform(le),
								ie.addPayloadPair('cookie', Fe ? '1' : '0'),
								ie.addPayloadPair('cs', ae),
								ie.addPayloadPair('lang', _e),
								ie.addPayloadPair('res', Be),
								ie.addPayloadPair('cd', Ve),
								Ye(),
								ct(),
								i.crossDomainLinker && Je(i.crossDomainLinker);
							var wt = {
								getDomainSessionIndex: function () {
									return Oe;
								},
								getPageViewId: mt,
								getTabId: pt,
								newSession: function () {
									var e = ut();
									if (
										(ci(e)
											? ((ne = 'none' != Te ? oi(e) : ai(e)), (Oe = si(e)))
											: (Oe++, (ne = oi(e, { memorizedVisitCount: Oe }))),
										ri(e),
										'none' != Te)
									) {
										var t = ii(e, Te, De);
										rt(e), ot() && Me && ((Ue = !0), Me(t));
									}
									Re = new Date().getTime();
								},
								getCookieName: function (e) {
									return Xe(e);
								},
								getUserId: function () {
									return oe;
								},
								getDomainUserId: function () {
									return ut()[1];
								},
								getDomainUserInfo: function () {
									return ut();
								},
								setReferrerUrl: function (e) {
									F = e;
								},
								setCustomUrl: function (e) {
									He(),
										(H = (function (e, t) {
											var n;
											return Qe(t)
												? t
												: '/' === t.slice(0, 1)
													? Qe(e) + '://' + zr(e) + t
													: ((n = (e = We(e)).indexOf('?')) >= 0 &&
															(e = e.slice(0, n)),
														(n = e.lastIndexOf('/')) !== e.length - 1 &&
															(e = e.slice(0, n + 1)),
														e + t);
										})(ue, e));
								},
								setDocumentTitle: function (e) {
									(ge = document.title), (z = e);
								},
								discardHashTag: function (e) {
									J = e;
								},
								discardBrace: function (e) {
									W = e;
								},
								setCookiePath: function (e) {
									(we = e), Ye();
								},
								setVisitorCookieTimeout: function (e) {
									Ee = e;
								},
								crossDomainLinker: function (e) {
									Je(e);
								},
								enableActivityTracking: function (e) {
									Ne.configurations.pagePing ||
										((Ne.enabled = !0),
										(Ne.configurations.pagePing = vt(
											ur(ur({}, e), { callback: ht }),
										)));
								},
								enableActivityTrackingCallback: function (e) {
									Ne.configurations.callback ||
										((Ne.enabled = !0), (Ne.configurations.callback = vt(e)));
								},
								disableActivityTracking: function () {
									yt('pagePing');
								},
								disableActivityTrackingCallback: function () {
									yt('callback');
								},
								updatePageActivity: function () {
									Ke();
								},
								setOptOutCookie: function (e) {
									Q = e;
								},
								setUserId: function (e) {
									oe = e;
								},
								setUserIdFromLocation: function (e) {
									He(), (oe = Xr(e, ue));
								},
								setUserIdFromReferrer: function (e) {
									He(), (oe = Xr(e, de));
								},
								setUserIdFromCookie: function (e) {
									oe = Kr(e);
								},
								setCollectorUrl: function (e) {
									(me = dt(e)), Ae.setCollectorUrl(me);
								},
								setBufferSize: function (e) {
									Ae.setBufferSize(e);
								},
								flushBuffer: function (e) {
									void 0 === e && (e = {}),
										Ae.executeQueue(),
										e.newBufferSize && Ae.setBufferSize(e.newBufferSize);
								},
								trackPageView: function (e) {
									void 0 === e && (e = {}),
										(function (e) {
											var t = e.title,
												n = e.context,
												o = e.timestamp,
												r = e.contextCallback;
											He(), je && lt(), (je = !0), (ge = document.title);
											var i = Hr((z = t) || ge);
											ie.track(
												(function (e) {
													var t = e.pageUrl,
														n = e.pageTitle,
														o = e.referrer,
														r = pr();
													return (
														r.add('e', 'pv'),
														r.add('url', t),
														r.add('page', n),
														r.add('refr', o),
														r
													);
												})({
													pageUrl: We(H || ue),
													pageTitle: i,
													referrer: We(F || de),
												}),
												ft(n, r),
												o,
											);
											var a = new Date(),
												s = !1;
											if (Ne.enabled && !Ne.installed) {
												(Ne.installed = !0), (s = !0);
												var c = {
													update: function () {
														if (
															'undefined' != typeof window &&
															'function' == typeof window.addEventListener
														) {
															var e = !1,
																t = Object.defineProperty({}, 'passive', {
																	get: function () {
																		e = !0;
																	},
																	set: function () {},
																}),
																n = function () {};
															window.addEventListener(
																'testPassiveEventSupport',
																n,
																t,
															),
																window.removeEventListener(
																	'testPassiveEventSupport',
																	n,
																	t,
																),
																(c.hasSupport = e);
														}
													},
												};
												c.update();
												var u =
													'onwheel' in document.createElement('div')
														? 'wheel'
														: void 0 !== document.onmousewheel
															? 'mousewheel'
															: 'DOMMouseScroll';
												Object.prototype.hasOwnProperty.call(c, 'hasSupport')
													? Qr(document, u, Ke, { passive: !0 })
													: Qr(document, u, Ke),
													tt();
												var d = function (e, t) {
													return (
														void 0 === t && (t = Ke),
														function (e) {
															return Qr(document, e, t);
														}
													);
												};
												[
													'click',
													'mouseup',
													'mousedown',
													'mousemove',
													'keypress',
													'keydown',
													'keyup',
													'touchend',
													'touchstart',
												].forEach(d(document)),
													['resize', 'focus', 'blur'].forEach(d(window)),
													d(window, Ze)('scroll');
											}
											if (Ne.enabled && (ve || s)) {
												X = a.getTime();
												var l = void 0;
												for (l in Ne.configurations) {
													var m = Ne.configurations[l];
													m &&
														(window.clearInterval(m.activityInterval),
														gt(m, n, r));
												}
											}
										})(e);
								},
								preservePageViewId: function () {
									qe = !0;
								},
								disableAnonymousTracking: function (e) {
									(i.anonymousTracking = !1), st(e), ct(), Ae.executeQueue();
								},
								enableAnonymousTracking: function (e) {
									var t;
									(i.anonymousTracking =
										null === (t = e && (null == e ? void 0 : e.options)) ||
										void 0 === t ||
										t),
										st(e),
										ke || lt();
								},
								clearUserData: at,
							};
							return ur(ur({}, wt), {
								id: e,
								namespace: t,
								core: ie,
								sharedState: r,
							});
						})(e, t, n, o, r, i),
						c = ur(ur({}, s), {
							addPlugin: function (e) {
								var t, n;
								c.core.addPlugin(e),
									null === (n = (t = e.plugin).activateBrowserPlugin) ||
										void 0 === n ||
										n.call(t, c);
							},
						});
					return (
						a.forEach(function (e) {
							var t;
							null === (t = e.activateBrowserPlugin) ||
								void 0 === t ||
								t.call(e, c);
						}),
						c
					);
				}
				var fi = {};
				function gi(e, t) {
					try {
						((n = null != e ? e : Object.keys(fi)),
						(function (e, t) {
							for (var n = [], o = 0, r = e; o < r.length; o++) {
								var i = r[o];
								t.hasOwnProperty(i)
									? n.push(t[i])
									: br.warn(i + ' not configured');
							}
							return n;
						})(n, fi)).forEach(t);
					} catch (e) {
						br.error('Function failed', e);
					}
					var n;
				}
				var vi = function () {
					(this.outQueues = []),
						(this.bufferFlushers = []),
						(this.hasLoaded = !1),
						(this.registeredOnLoadHandlers = []);
				};
				function hi(e, t) {
					gi(t, function (t) {
						t.core.track(
							(function (e) {
								var t = e.category,
									n = e.action,
									o = e.label,
									r = e.property,
									i = e.value,
									a = pr();
								return (
									a.add('e', 'se'),
									a.add('se_ca', t),
									a.add('se_ac', n),
									a.add('se_la', o),
									a.add('se_pr', r),
									a.add('se_va', null == i ? void 0 : i.toString()),
									a
								);
							})(e),
							e.context,
							e.timestamp,
						);
					});
				}
				var yi =
					'undefined' != typeof window
						? (function () {
								var e = new vi(),
									t = document,
									n = window;
								function o() {
									var t;
									if (!e.hasLoaded)
										for (
											e.hasLoaded = !0, t = 0;
											t < e.registeredOnLoadHandlers.length;
											t++
										)
											e.registeredOnLoadHandlers[t]();
									return !0;
								}
								return (
									t.visibilityState &&
										Qr(
											t,
											'visibilitychange',
											function () {
												'hidden' == t.visibilityState &&
													e.bufferFlushers.forEach(function (e) {
														e(!1);
													});
											},
											!1,
										),
									Qr(
										n,
										'beforeunload',
										function () {
											e.bufferFlushers.forEach(function (e) {
												e(!1);
											});
										},
										!1,
									),
									'loading' === document.readyState
										? (t.addEventListener
												? t.addEventListener('DOMContentLoaded', function e() {
														t.removeEventListener('DOMContentLoaded', e, !1),
															o();
													})
												: t.attachEvent &&
													t.attachEvent('onreadystatechange', function e() {
														'complete' === t.readyState &&
															(t.detachEvent('onreadystatechange', e), o());
													}),
											Qr(n, 'load', o, !1))
										: o(),
									e
								);
							})()
						: void 0;
				const wi =
						'iglu:com.adobe.magento.entity/magento-extension/jsonschema/1-0-0',
					bi =
						'iglu:com.adobe.magento.entity/data-services-extension/jsonschema/1-0-1',
					Ci =
						'iglu:com.adobe.magento.entity/recommendations-extension/jsonschema/1-0-0',
					Ii =
						'iglu:com.adobe.magento.entity/search-extension/jsonschema/1-0-0',
					xi =
						'iglu:com.adobe.magento.entity/experience-platform-connector-extension/jsonschema/1-0-1',
					Ei =
						'iglu:com.adobe.magento.entity/magento-js-tracker/jsonschema/2-0-0',
					Si = 'iglu:com.adobe.magento.entity/product/jsonschema/2-0-5',
					ki =
						'iglu:com.adobe.magento.entity/recommendation-unit/jsonschema/1-0-4',
					Pi =
						'iglu:com.adobe.magento.entity/recommended-item/jsonschema/1-0-4',
					Di = 'iglu:com.adobe.magento.entity/search-input/jsonschema/2-0-0',
					Ti =
						'iglu:com.adobe.magento.entity/search-result-category/jsonschema/1-0-1',
					Ri =
						'iglu:com.adobe.magento.entity/search-result-product/jsonschema/1-0-2',
					Oi = 'iglu:com.adobe.magento.entity/search-results/jsonschema/2-0-0',
					Ai =
						'iglu:com.adobe.magento.entity/search-result-suggestion/jsonschema/1-0-1',
					qi = 'iglu:com.adobe.magento.entity/shopping-cart/jsonschema/2-0-0',
					ji = 'iglu:com.adobe.magento.entity/shopper/jsonschema/1-0-0',
					Ni =
						'iglu:com.adobe.magento.entity/storefront-instance/jsonschema/3-0-1',
					Li = (e) => {
						var t, n;
						if (e.pricing)
							return {
								regularPrice: e.pricing.regularPrice,
								minimalPrice: e.pricing.minimalPrice,
								maximalPrice: e.pricing.maximalPrice,
								specialPrice: e.pricing.specialPrice,
								tierPricing:
									null === (t = e.pricing.tierPricing) || void 0 === t
										? void 0
										: t.map((e) => {
												var t;
												return {
													customerGroupId:
														null !== (t = e.customerGroupId) && void 0 !== t
															? t
															: null,
													qty: e.qty,
													value: e.value,
												};
											}),
								currencyCode:
									null !== (n = e.pricing.currencyCode) && void 0 !== n
										? n
										: null,
							};
					},
					Mi = (e) => {
						var t;
						const n = window.magentoStorefrontEvents,
							o = null != e ? e : n.context.getProduct();
						return o
							? {
									schema: Si,
									data: {
										name: o.name,
										sku: o.sku,
										topLevelSku: o.topLevelSku,
										specialToDate: o.specialToDate,
										specialFromDate: o.specialFromDate,
										newToDate: o.newToDate,
										newFromDate: o.newFromDate,
										createdAt: o.createdAt,
										updatedAt: o.updatedAt,
										manufacturer: o.manufacturer,
										countryOfManufacture: o.countryOfManufacture,
										categories:
											null === (t = o.categories) || void 0 === t
												? void 0
												: t.map((e) => e.toString()),
										productType: o.productType,
										pricing: Li(o),
										canonicalUrl: o.canonicalUrl,
										mainImageUrl: o.mainImageUrl,
									},
								}
							: { schema: Si, data: {} };
					},
					Ui = (e, t) =>
						(null == t ? void 0 : t.units.find((t) => t.unitId === e)) || null,
					$i = (e, t, n) => {
						const o = Ui(e, n);
						if (!o) return null;
						return o.products.find((e) => e.productId === t) || null;
					},
					_i = (e, t) => {
						const n = window.magentoStorefrontEvents,
							o = null != t ? t : n.context.getRecommendations();
						if (!o) return { schema: ki, data: {} };
						const r = Ui(e, o);
						return r
							? {
									schema: ki,
									data: {
										name: r.unitName,
										unitId: r.unitId,
										itemsCount: r.totalProducts,
										backupsCount: r.backupProducts,
										configType: 'preconfigured',
										source: 'api',
										recType: r.typeId,
										placement: r.pagePlacement,
										yOffsetTop: r.yOffsetTop,
										yOffsetBottom: r.yOffsetBottom,
									},
								}
							: null;
					},
					Bi = (e, t, n) => {
						var o, r, i, a, s, c, u, d, l, m, p, f, g, v;
						const h = window.magentoStorefrontEvents,
							y = null != n ? n : h.context.getRecommendations();
						if (!y) return { schema: Pi, data: {} };
						if (!Ui(e, y)) return null;
						const w = $i(e, t, y);
						return w
							? {
									schema: Pi,
									data: Object.assign(
										Object.assign(
											{
												unitId: e,
												serviceRank: w.rank,
												displayRank: w.rank,
												name: w.name,
												sku: w.sku,
												url: w.url,
												imageUrl:
													null !==
														(r =
															null === (o = w.image) || void 0 === o
																? void 0
																: o.url) && void 0 !== r
														? r
														: null,
											},
											w.prices && {
												prices: {
													maximum: {
														final:
															null === (i = w.prices.maximum) || void 0 === i
																? void 0
																: i.final,
														regular:
															null === (a = w.prices.maximum) || void 0 === a
																? void 0
																: a.regular,
														finalAdjustments:
															null ===
																(c =
																	null === (s = w.prices.maximum) ||
																	void 0 === s
																		? void 0
																		: s.finalAdjustments) || void 0 === c
																? void 0
																: c.map((e) => ({
																		code: null == e ? void 0 : e.code,
																		amount: null == e ? void 0 : e.amount,
																	})),
														regularAdjustments:
															null ===
																(d =
																	null === (u = w.prices.maximum) ||
																	void 0 === u
																		? void 0
																		: u.regularAdjustments) || void 0 === d
																? void 0
																: d.map((e) => ({
																		code: null == e ? void 0 : e.code,
																		amount: null == e ? void 0 : e.amount,
																	})),
													},
													minimum: {
														final:
															null === (l = w.prices.minimum) || void 0 === l
																? void 0
																: l.final,
														regular:
															null === (m = w.prices.minimum) || void 0 === m
																? void 0
																: m.regular,
														finalAdjustments:
															null ===
																(f =
																	null === (p = w.prices.minimum) ||
																	void 0 === p
																		? void 0
																		: p.finalAdjustments) || void 0 === f
																? void 0
																: f.map((e) => ({
																		code: null == e ? void 0 : e.code,
																		amount: null == e ? void 0 : e.amount,
																	})),
														regularAdjustments:
															null ===
																(v =
																	null === (g = w.prices.minimum) ||
																	void 0 === g
																		? void 0
																		: g.regularAdjustments) || void 0 === v
																? void 0
																: v.map((e) => ({
																		code: null == e ? void 0 : e.code,
																		amount: null == e ? void 0 : e.amount,
																	})),
													},
												},
											},
										),
										{ currencyCode: w.currency },
									),
								}
							: null;
					},
					Vi = (e, t) => t.units.find((t) => t.searchUnitId === e),
					Fi = (e) => {
						const t = [];
						return (
							e.filter.forEach((e) => {
								var n, o, r, i, a, s, c;
								if (
									(e.eq &&
										t.push({
											name: e.attribute,
											values: [e.eq],
											operator: 'eq',
										}),
									(null === (n = e.in) || void 0 === n ? void 0 : n.length) &&
										t.push({ name: e.attribute, values: e.in, operator: 'in' }),
									e.range)
								) {
									const n = [];
									(null === (o = e.range) || void 0 === o ? void 0 : o.from) &&
										n.push(
											null ===
												(i =
													null === (r = e.range) || void 0 === r
														? void 0
														: r.from) || void 0 === i
												? void 0
												: i.toString(),
										),
										(null === (a = e.range) || void 0 === a ? void 0 : a.to) &&
											n.push(
												null ===
													(c =
														null === (s = e.range) || void 0 === s
															? void 0
															: s.to) || void 0 === c
													? void 0
													: c.toString(),
											),
										t.push({ name: e.attribute, values: n, operator: 'range' });
								}
							}),
							t
						);
					},
					Hi = (e, t) => {
						const n = window.magentoStorefrontEvents,
							o = null != t ? t : n.context.getSearchInput();
						if (!o) return { schema: Di, data: {} };
						const r = ((e, t) => t.units.find((t) => t.searchUnitId === e))(
							e,
							o,
						);
						return r
							? {
									schema: Di,
									data: {
										searchUnitId: r.searchUnitId,
										source: null,
										queryTypes: r.queryTypes,
										searchRequestId: r.searchRequestId,
										query: r.phrase,
										page: r.currentPage,
										perPage: r.pageSize,
										filter: Fi(r),
										sort: r.sort,
									},
								}
							: null;
					},
					zi = (e, t) => {
						const n = window.magentoStorefrontEvents,
							o = null != t ? t : n.context.getSearchResults();
						if (!o) return { schema: Oi, data: {} };
						const r = Vi(e, o);
						return r
							? {
									schema: Oi,
									data: Object.assign(Object.assign({}, r), {
										productCount: r.products.length,
										categoryCount: r.categories.length,
										suggestionCount: r.suggestions.length,
									}),
								}
							: null;
					},
					Ji = (e) => {
						const t = window.magentoStorefrontEvents,
							n = null != e ? e : t.context.getShoppingCart();
						return n.items
							? n.items.map((e) => {
									var t;
									return {
										basePrice: e.prices.price.value,
										cartItemId: e.id,
										mainImageUrl:
											null !== (t = e.product.mainImageUrl) && void 0 !== t
												? t
												: void 0,
										offerPrice: e.prices.price.value,
										productName: e.product.name,
										productSku: e.product.sku,
										qty: e.quantity,
									};
								})
							: [];
					},
					Wi = (e) => {
						var t, n, o, r;
						const i = window.magentoStorefrontEvents,
							a = null != e ? e : i.context.getShoppingCart();
						return a
							? {
									schema: qi,
									data: {
										cartId: a.id,
										itemsCount: a.totalQuantity || 0,
										items: Ji(a),
										possibleOnepageCheckout: a.possibleOnepageCheckout,
										subtotalExcludingTax:
											(null ===
												(n =
													null === (t = a.prices) || void 0 === t
														? void 0
														: t.subtotalExcludingTax) || void 0 === n
												? void 0
												: n.value) || 0,
										subtotalIncludingTax:
											(null ===
												(r =
													null === (o = a.prices) || void 0 === o
														? void 0
														: o.subtotalIncludingTax) || void 0 === r
												? void 0
												: r.value) || 0,
										giftMessageSelected: a.giftMessageSelected,
										giftWrappingSelected: a.giftWrappingSelected,
									},
								}
							: { schema: qi, data: {} };
					},
					Qi = () => [
						() => Gi(),
						() => Xi(),
						() =>
							((e) => {
								const t = window.magentoStorefrontEvents,
									n = null != e ? e : t.context.getMagentoExtension();
								return {
									schema: wi,
									data: {
										magentoExtensionVersion:
											(null == n ? void 0 : n.magentoExtensionVersion) &&
											'' !== n.magentoExtensionVersion
												? n.magentoExtensionVersion
												: 'unspecified',
									},
								};
							})(),
						() =>
							((e) => {
								const t = window.magentoStorefrontEvents,
									n = null != e ? e : t.context.getDataServicesExtension();
								return {
									schema: bi,
									data: {
										version:
											(null == n ? void 0 : n.version) && '' !== n.version
												? n.version
												: 'unspecified',
									},
								};
							})(),
						() =>
							((e, t) => {
								const n = window.magentoStorefrontEvents,
									o =
										null != e
											? e
											: n.context.getExperiencePlatformConnectorExtension(),
									r = null != t ? t : n.context.getAEP(),
									i =
										!!(null == r ? void 0 : r.datastreamId) &&
										!!(null == r ? void 0 : r.imsOrgId);
								return {
									schema: xi,
									data: {
										version:
											(null == o ? void 0 : o.version) && o.version
												? o.version
												: 'unspecified',
										setupComplete: !!i,
									},
								};
							})(),
						() =>
							((e) => {
								const t = window.magentoStorefrontEvents,
									n = null != e ? e : t.context.getRecommendationsExtension();
								return {
									schema: Ci,
									data: {
										version:
											(null == n ? void 0 : n.version) && n.version
												? n.version
												: 'unspecified',
									},
								};
							})(),
						() =>
							((e) => {
								const t = window.magentoStorefrontEvents,
									n = null != e ? e : t.context.getSearchExtension();
								return {
									schema: Ii,
									data: {
										version:
											(null == n ? void 0 : n.version) && n.version
												? n.version
												: 'unspecified',
									},
								};
							})(),
						() =>
							((e) => {
								var t;
								const n = window.magentoStorefrontEvents,
									o = null != e ? e : n.context.getShopper();
								return o
									? {
											schema: ji,
											data: {
												shopperId:
													null !== (t = o.shopperId) && void 0 !== t
														? t
														: 'guest',
											},
										}
									: { schema: ji, data: { shopperId: 'guest' } };
							})(),
					],
					Xi = (e) => {
						const t = window.magentoStorefrontEvents,
							n = null != e ? e : t.context.getStorefrontInstance();
						return n
							? {
									schema: Ni,
									data: {
										baseCurrencyCode: n.baseCurrencyCode,
										environment: n.environment,
										environmentId: n.environmentId,
										instanceId: n.instanceId,
										storeCode: n.storeCode,
										storeId: n.storeId,
										storeName: n.storeName,
										storeUrl: n.storeUrl,
										storeViewCode: n.storeViewCode,
										storeViewCurrencyCode: n.storeViewCurrencyCode,
										storeViewId: n.storeViewId,
										storeViewName: n.storeViewName,
										websiteCode: n.websiteCode,
										websiteName: n.websiteName,
										websiteId: n.websiteId,
										storefrontTemplate: n.storefrontTemplate,
									},
								}
							: { schema: Ni, data: {} };
					},
					Gi = () => ({ schema: Ei, data: { magentoJsVersion: '1.8.1' } }),
					Yi = (e) => {
						const {
								pageContext: t,
								orderContext: n,
								shoppingCartContext: o,
							} = e.eventInfo,
							r = Wi(o),
							i = [];
						r && i.push(r),
							hi({
								category: 'checkout',
								action: 'place-order',
								label: String(null == n ? void 0 : n.orderId),
								property: null == t ? void 0 : t.pageType,
								context: i,
							});
					},
					Ki = (e) => {
						switch (e) {
							case 'checkmo':
								return 'check';
							case 'banktransfer':
								return 'wire_transfer';
							case 'cashondelivery':
								return 'cash';
							default:
								return 'other';
						}
					},
					Zi = ({ pricing: e }) => {
						if (!e) return 0;
						const { regularPrice: t, specialPrice: n } = e;
						return t - (null != n ? n : t) || 0;
					},
					ea = (e, t, n, o) => {
						var r, i;
						const a = [],
							s = new Map();
						return (
							null == e ||
								e.forEach((e) => {
									s.set(e.SKU, e);
								}),
							n
								? null === (r = n.items) ||
									void 0 === r ||
									r.map((e) => {
										var t, n, r;
										const i = s.get(e.sku),
											c = {
												SKU: e.sku,
												name: (null == i ? void 0 : i.name) || e.name,
												quantity:
													(null == i ? void 0 : i.quantity) ||
													Number(e.quantity),
												priceTotal:
													(null == i ? void 0 : i.priceTotal) ||
													ta(
														(Number(
															null === (t = e.pricing) || void 0 === t
																? void 0
																: t.regularPrice,
														) || 0) * Number(e.quantity),
													),
												currencyCode:
													(null == i ? void 0 : i.currencyCode) ||
													(null !==
														(r =
															null === (n = e.pricing) || void 0 === n
																? void 0
																: n.currencyCode) && void 0 !== r
														? r
														: o.storeViewCurrencyCode),
												selectedOptions:
													(null == i ? void 0 : i.selectedOptions) ||
													e.selectedOptions,
											};
										a.push(c);
									})
								: null === (i = null == t ? void 0 : t.items) ||
									void 0 === i ||
									i.forEach((e) => {
										var t, n, r, i, c, u, d, l, m;
										const p = [];
										null === (t = e.configurableOptions) ||
											void 0 === t ||
											t.forEach((e) => {
												p.push({
													attribute: String(e.optionLabel),
													value: String(e.valueLabel),
												});
											});
										const f = s.get(
												null === (n = e.product) || void 0 === n
													? void 0
													: n.sku,
											),
											g = {
												SKU:
													null === (r = e.product) || void 0 === r
														? void 0
														: r.sku,
												name:
													(null == f ? void 0 : f.name) ||
													(null === (i = e.product) || void 0 === i
														? void 0
														: i.name),
												quantity:
													(null == f ? void 0 : f.quantity) || e.quantity,
												priceTotal:
													(null == f ? void 0 : f.priceTotal) ||
													ta(
														(null ===
															(u =
																null === (c = e.prices) || void 0 === c
																	? void 0
																	: c.price) || void 0 === u
															? void 0
															: u.value) * e.quantity,
													) ||
													0,
												productImageUrl:
													(null == f ? void 0 : f.productImageUrl) ||
													e.product.mainImageUrl,
												currencyCode:
													(null == f ? void 0 : f.currencyCode) ||
													(null !==
														(m =
															null ===
																(l =
																	null === (d = e.prices) || void 0 === d
																		? void 0
																		: d.price) || void 0 === l
																? void 0
																: l.currency) && void 0 !== m
														? m
														: o.storeViewCurrencyCode),
												discountAmount:
													(null == f ? void 0 : f.discountAmount) ||
													e.discountAmount ||
													Zi(e.product),
												selectedOptions:
													(null == f ? void 0 : f.selectedOptions) || p,
											};
										a.push(g);
									}),
							a
						);
					},
					ta = (e) => Number(e.toFixed(2));
				const na = (e) => {
					return (
						(t = void 0),
						(n = void 0),
						(r = function* () {
							var t, n;
							try {
								const {
									accountContext: o,
									storefrontInstanceContext: r,
									orderContext: i,
									shoppingCartContext: a,
									debugContext: s,
									customContext: c,
								} = e.eventInfo;
								let u = {};
								c && 0 !== Object.keys(c).length && (u = c),
									(u.commerce = u.commerce || {}),
									(u.commerce.order = ((e, t, n) => {
										var o, r;
										let i = [];
										(null === (o = null == e ? void 0 : e.payments) ||
										void 0 === o
											? void 0
											: o.length) && (i = e.payments),
											(i = (
												null === (r = null == t ? void 0 : t.payments) ||
												void 0 === r
													? void 0
													: r.length
											)
												? t.payments.map((e) => ({
														paymentAmount: Number(e.total || 0),
														paymentType: Ki(e.paymentMethodCode),
														transactionID: (null == e ? void 0 : e.orderId)
															? String(e.orderId)
															: String(null == t ? void 0 : t.orderId),
														currencyCode:
															null == n ? void 0 : n.storeViewCurrencyCode,
													}))
												: [
														{
															paymentAmount: Number(
																(null == t ? void 0 : t.grandTotal) || 0,
															),
															paymentType: Ki(
																null == t ? void 0 : t.paymentMethodCode,
															),
															transactionID: String(
																null == t ? void 0 : t.orderId,
															),
															currencyCode:
																null == n ? void 0 : n.storeViewCurrencyCode,
														},
													]);
										const a =
											'instant_purchase' === (null == t ? void 0 : t.orderType)
												? 'instant_purchase'
												: 'checkout';
										return {
											purchaseID:
												(null == e ? void 0 : e.purchaseID) ||
												String(null == t ? void 0 : t.orderId),
											currencyCode:
												(null == e ? void 0 : e.currencyCode) ||
												(null == n ? void 0 : n.storeViewCurrencyCode),
											payments: i,
											orderType: a,
											discountAmount: null == t ? void 0 : t.discountAmount,
										};
									})(u.commerce.order, i, r)),
									(u.commerce.order.discountAmount = Number(
										u.commerce.order.discountAmount ||
											(null == a ? void 0 : a.discountAmount) ||
											0,
									)),
									(u.commerce.promotionID =
										u.commerce.promotionID ||
										(null == i ? void 0 : i.appliedCouponCode)),
									(u.commerce.shipping = u.commerce.shipping || {}),
									(u.commerce.shipping.shippingMethod =
										u.commerce.shipping.shippingMethod ||
										(null === (t = null == i ? void 0 : i.shipping) ||
										void 0 === t
											? void 0
											: t.shippingMethod)),
									(u.commerce.shipping.shippingAmount =
										u.commerce.shipping.shippingAmount ||
										Number(
											null === (n = null == i ? void 0 : i.shipping) ||
												void 0 === n
												? void 0
												: n.shippingAmount,
										) ||
										0),
									(u.personalEmail = u.personalEmail || {}),
									(u.personalEmail.address =
										u.personalEmail.address ||
										(null == o ? void 0 : o.emailAddress)),
									(u.productListItems = ea(u.productListItems, a, void 0, r)),
									(u.commerce.purchases = { value: 1 }),
									(u.commerce.commerceScope = rr(r)),
									(u._id = null == s ? void 0 : s.eventId),
									(u.eventType = 'commerce.purchases'),
									tr(u, e);
							} catch (e) {
								console.warn('Error in placeOrderAEP handler');
							}
						}),
						new ((o = void 0) || (o = Promise))(function (e, i) {
							function a(e) {
								try {
									c(r.next(e));
								} catch (e) {
									i(e);
								}
							}
							function s(e) {
								try {
									c(r.throw(e));
								} catch (e) {
									i(e);
								}
							}
							function c(t) {
								var n;
								t.done
									? e(t.value)
									: ((n = t.value),
										n instanceof o
											? n
											: new o(function (e) {
													e(n);
												})).then(a, s);
							}
							c((r = r.apply(t, n || [])).next());
						})
					);
					var t, n, o, r;
				};
				const oa = (e) => {
						return (
							(t = void 0),
							(n = void 0),
							(r = function* () {
								const { customContext: t } = e.eventInfo;
								tr(t, e);
							}),
							new ((o = void 0) || (o = Promise))(function (e, i) {
								function a(e) {
									try {
										c(r.next(e));
									} catch (e) {
										i(e);
									}
								}
								function s(e) {
									try {
										c(r.throw(e));
									} catch (e) {
										i(e);
									}
								}
								function c(t) {
									var n;
									t.done
										? e(t.value)
										: ((n = t.value),
											n instanceof o
												? n
												: new o(function (e) {
														e(n);
													})).then(a, s);
								}
								c((r = r.apply(t, n || [])).next());
							})
						);
						var t, n, o, r;
					},
					ra = () => {
						gi(undefined, function (e) {
							e.trackPageView(undefined);
						});
					};
				const ia = (e) => {
						return (
							(t = void 0),
							(n = void 0),
							(r = function* () {
								const {
									pageContext: t,
									debugContext: n,
									customContext: o,
								} = e.eventInfo;
								let r = {};
								o && 0 !== Object.keys(o).length && (r = o),
									(r.web = r.web || {}),
									(r.web.webPageDetails = r.web.webPageDetails || {}),
									(r.web.webPageDetails.pageViews = { value: 1 }),
									(r.web.webPageDetails.siteSection =
										r.web.webPageDetails.siteSection ||
										(null == t ? void 0 : t.pageType)),
									(r.web.webPageDetails.name =
										r.web.webPageDetails.name ||
										(null == t ? void 0 : t.pageName)),
									(r.web.webPageDetails.URL = window.document.URL),
									(r.web.webReferrer = { URL: window.document.referrer }),
									(r._id = null == n ? void 0 : n.eventId),
									(r.eventType = 'web.webpagedetails.pageViews');
								const i = yield tr(r, e);
								((e = '') => {
									document.cookie = `aep-segments-membership=${e};path=/`;
								})(
									((e = []) =>
										e
											.map(({ segments: e }) => e.map(({ id: e }) => e))
											.join(',') || '')(null == i ? void 0 : i.destinations),
								);
							}),
							new ((o = void 0) || (o = Promise))(function (e, i) {
								function a(e) {
									try {
										c(r.next(e));
									} catch (e) {
										i(e);
									}
								}
								function s(e) {
									try {
										c(r.throw(e));
									} catch (e) {
										i(e);
									}
								}
								function c(t) {
									var n;
									t.done
										? e(t.value)
										: ((n = t.value),
											n instanceof o
												? n
												: new o(function (e) {
														e(n);
													})).then(a, s);
								}
								c((r = r.apply(t, n || [])).next());
							})
						);
						var t, n, o, r;
					},
					aa = (e) => {
						const {
								changedProductsContext: t,
								pageContext: n,
								productContext: o,
								shoppingCartContext: r,
							} = e.eventInfo,
							i =
								(null == t ? void 0 : t.items) ||
								(null == r ? void 0 : r.items) ||
								[];
						null == i ||
							i.forEach((e) => {
								let t;
								t =
									e.product.sku === (null == o ? void 0 : o.sku)
										? Mi(o)
										: ((e) => {
												const t = {
														regularPrice: e.prices.price.value,
														currencyCode: e.prices.price.currency || null,
													},
													n = e.product.productId,
													o = {
														canonicalUrl: null,
														categories: e.product.categories || [],
														countryOfManufacture: null,
														createdAt: null,
														mainImageUrl: e.product.mainImageUrl,
														manufacturer: null,
														name: e.product.name,
														newFromDate: null,
														newToDate: null,
														productId: parseInt(n),
														sku: e.product.sku,
														pricing: t,
														productType: null,
														specialFromDate: null,
														specialToDate: null,
														topLevelSku: e.product.topLevelSku || null,
														updatedAt: null,
													};
												return Mi(o);
											})(e);
								const i = Wi(r),
									a = [t];
								i && a.push(i),
									hi({
										category: 'product',
										action: 'add-to-cart',
										property: null == n ? void 0 : n.pageType,
										context: a,
									});
							});
					};
				const sa = (e) => {
						return (
							(t = void 0),
							(n = void 0),
							(r = function* () {
								const {
									changedProductsContext: t,
									shoppingCartContext: n,
									debugContext: o,
									customContext: r,
									storefrontInstanceContext: i,
								} = e.eventInfo;
								let a = {};
								r && 0 !== Object.keys(r).length && (a = r),
									(a.commerce = a.commerce || {}),
									(a.commerce.cart = a.commerce.cart || {}),
									(a.commerce.cart.cartID =
										a.commerce.cart.cartID || (null == n ? void 0 : n.id)),
									(a.productListItems = ea(a.productListItems, t, void 0, i)),
									(a.commerce.productListAdds = { value: 1 }),
									(a.commerce.commerceScope = rr(i)),
									(a._id = null == o ? void 0 : o.eventId),
									(a.eventType = 'commerce.productListAdds'),
									tr(a, e);
							}),
							new ((o = void 0) || (o = Promise))(function (e, i) {
								function a(e) {
									try {
										c(r.next(e));
									} catch (e) {
										i(e);
									}
								}
								function s(e) {
									try {
										c(r.throw(e));
									} catch (e) {
										i(e);
									}
								}
								function c(t) {
									var n;
									t.done
										? e(t.value)
										: ((n = t.value),
											n instanceof o
												? n
												: new o(function (e) {
														e(n);
													})).then(a, s);
								}
								c((r = r.apply(t, n || [])).next());
							})
						);
						var t, n, o, r;
					},
					ca = (e) => {
						const {
								pageContext: t,
								productContext: n,
								shoppingCartContext: o,
							} = e.eventInfo,
							r = Mi(n),
							i = Wi(o),
							a = [r];
						i && a.push(i),
							hi({
								category: 'product',
								action: 'view',
								property: null == t ? void 0 : t.pageType,
								context: a,
							});
					};
				const ua = (e) => {
					return (
						(t = void 0),
						(n = void 0),
						(r = function* () {
							var t, n, o, r, i, a, s;
							const {
								productContext: c,
								debugContext: u,
								customContext: d,
								storefrontInstanceContext: l,
							} = e.eventInfo;
							let m = {};
							d && 0 !== Object.keys(d).length && (m = d);
							const p =
								((
									null === (t = m.productListItems) || void 0 === t
										? void 0
										: t.length
								)
									? m.productListItems[0]
									: void 0) || {};
							(p.SKU = p.SKU || (null == c ? void 0 : c.sku)),
								(p.name = p.name || (null == c ? void 0 : c.name)),
								(p.productImageUrl =
									p.productImageUrl || (null == c ? void 0 : c.mainImageUrl)),
								(p.priceTotal =
									p.priceTotal ||
									(null !==
										(o =
											null === (n = null == c ? void 0 : c.pricing) ||
											void 0 === n
												? void 0
												: n.specialPrice) && void 0 !== o
										? o
										: null === (r = null == c ? void 0 : c.pricing) ||
											  void 0 === r
											? void 0
											: r.regularPrice)),
								(p.currencyCode =
									(null == p ? void 0 : p.currencyCode) ||
									(null !==
										(s =
											null !==
												(a =
													null === (i = null == c ? void 0 : c.pricing) ||
													void 0 === i
														? void 0
														: i.currencyCode) && void 0 !== a
												? a
												: null == l
													? void 0
													: l.storeViewCurrencyCode) && void 0 !== s
										? s
										: void 0)),
								(p.discountAmount =
									(null == p ? void 0 : p.discountAmount) || Zi(c)),
								(m.productListItems = [p]),
								(m.commerce = m.commerce || {}),
								(m.commerce.productViews = { value: 1 }),
								(m.commerce.commerceScope = rr(l)),
								(m._id = null == u ? void 0 : u.eventId),
								(m.eventType = 'commerce.productViews'),
								tr(m, e);
						}),
						new ((o = void 0) || (o = Promise))(function (e, i) {
							function a(e) {
								try {
									c(r.next(e));
								} catch (e) {
									i(e);
								}
							}
							function s(e) {
								try {
									c(r.throw(e));
								} catch (e) {
									i(e);
								}
							}
							function c(t) {
								var n;
								t.done
									? e(t.value)
									: ((n = t.value),
										n instanceof o
											? n
											: new o(function (e) {
													e(n);
												})).then(a, s);
							}
							c((r = r.apply(t, n || [])).next());
						})
					);
					var t, n, o, r;
				};
				const da = (e) => {
						return (
							(t = void 0),
							(n = void 0),
							(r = function* () {
								const {
									changedProductsContext: t,
									shoppingCartContext: n,
									debugContext: o,
									customContext: r,
									storefrontInstanceContext: i,
								} = e.eventInfo;
								let a = {};
								r && 0 !== Object.keys(r).length && (a = r),
									(a.commerce = a.commerce || {}),
									(a.commerce.cart = a.commerce.cart || {}),
									(a.commerce.cart.cartID =
										a.commerce.cart.cartID || (null == n ? void 0 : n.id)),
									(a.productListItems = ea(a.productListItems, t, void 0, i)),
									(a.commerce.productListRemovals = { value: 1 }),
									(a.commerce.commerceScope = rr(i)),
									(a._id = null == o ? void 0 : o.eventId),
									(a.eventType = 'commerce.productListRemovals'),
									tr(a, e);
							}),
							new ((o = void 0) || (o = Promise))(function (e, i) {
								function a(e) {
									try {
										c(r.next(e));
									} catch (e) {
										i(e);
									}
								}
								function s(e) {
									try {
										c(r.throw(e));
									} catch (e) {
										i(e);
									}
								}
								function c(t) {
									var n;
									t.done
										? e(t.value)
										: ((n = t.value),
											n instanceof o
												? n
												: new o(function (e) {
														e(n);
													})).then(a, s);
								}
								c((r = r.apply(t, n || [])).next());
							})
						);
						var t, n, o, r;
					},
					la = (e) => {
						const {
								unitId: t,
								productId: n,
								pageContext: o,
								recommendationsContext: r,
							} = e.eventInfo,
							i = [],
							a = _i(t, r);
						a && i.push(a);
						const s = Bi(t, n, r);
						s && i.push(s);
						const c = $i(t, n, r);
						hi({
							category: 'recommendation-unit',
							action: 'rec-add-to-cart-click',
							property: null == o ? void 0 : o.pageType,
							value: null == c ? void 0 : c.rank,
							context: i,
						});
					},
					ma = (e) => {
						const {
								unitId: t,
								productId: n,
								pageContext: o,
								recommendationsContext: r,
							} = e.eventInfo,
							i = [],
							a = _i(t, r);
						a && i.push(a);
						const s = Bi(t, n, r);
						s && i.push(s);
						const c = $i(t, n, r);
						hi({
							category: 'recommendation-unit',
							action: 'rec-click',
							property: null == o ? void 0 : o.pageType,
							value: null == c ? void 0 : c.rank,
							context: i,
						});
					},
					pa = (e) => {
						const { pageContext: t } = e.eventInfo;
						hi({
							category: 'recommendation-unit',
							action: 'api-request-sent',
							property: null == t ? void 0 : t.pageType,
						});
					},
					fa = (e) => {
						const { pageContext: t, recommendationsContext: n } = e.eventInfo,
							o = [],
							r = [];
						null == n ||
							n.units.forEach((e) => {
								const t = _i(e.unitId, n);
								t && o.push(t),
									e.products.forEach((t) => {
										{
											const o = Bi(e.unitId, t.productId, n);
											o && r.push(o);
										}
									});
							}),
							hi({
								category: 'recommendation-unit',
								action: 'api-response-received',
								property: null == t ? void 0 : t.pageType,
								context: [...o, ...r],
							});
					},
					ga = (e) => {
						const {
								unitId: t,
								pageContext: n,
								recommendationsContext: o,
							} = e.eventInfo,
							r = [],
							i = _i(t, o);
						i && r.push(i);
						const a = Ui(t, o);
						null == a ||
							a.products.forEach((e) => {
								const n = Bi(t, e.productId, o);
								n && r.push(n);
							}),
							hi({
								category: 'recommendation-unit',
								action: 'impression-render',
								property: null == n ? void 0 : n.pageType,
								context: r,
							});
					},
					va = (e) => {
						const {
								unitId: t,
								pageContext: n,
								recommendationsContext: o,
							} = e.eventInfo,
							r = [],
							i = _i(t, o);
						i && r.push(i),
							hi({
								category: 'recommendation-unit',
								action: 'view',
								property: null == n ? void 0 : n.pageType,
								context: r,
							});
					},
					ha = (e, t) => {
						var n;
						const o = e || {};
						return (
							(o.ID =
								(null == o ? void 0 : o.ID) ||
								(null === (n = null == t ? void 0 : t.id) || void 0 === n
									? void 0
									: n.toString())),
							(o.name =
								(null == o ? void 0 : o.name) || (null == t ? void 0 : t.name)),
							(o.description =
								(null == o ? void 0 : o.description) ||
								(null == t ? void 0 : t.description)),
							o
						);
					};
				const ya = (e) => {
					return (
						(t = void 0),
						(n = void 0),
						(r = function* () {
							const {
								accountContext: t,
								debugContext: n,
								requisitionListContext: o,
								customContext: r,
								storefrontInstanceContext: i,
							} = e.eventInfo;
							let a = {};
							r && 0 !== Object.keys(r).length && (a = r),
								(a.commerce = a.commerce || {}),
								(a.commerce.requisitionList = ha(
									a.commerce.requisitionList,
									o,
								)),
								(a.personalEmail = a.personalEmail || {}),
								(a.personalEmail.address =
									a.personalEmail.address ||
									(null == t ? void 0 : t.emailAddress)),
								(a.commerce.requisitionListOpens = { value: 1 }),
								(a.commerce.commerceScope = rr(i)),
								(a._id = null == n ? void 0 : n.eventId),
								(a.eventType = 'commerce.requisitionListOpens'),
								tr(a, e);
						}),
						new ((o = void 0) || (o = Promise))(function (e, i) {
							function a(e) {
								try {
									c(r.next(e));
								} catch (e) {
									i(e);
								}
							}
							function s(e) {
								try {
									c(r.throw(e));
								} catch (e) {
									i(e);
								}
							}
							function c(t) {
								var n;
								t.done
									? e(t.value)
									: ((n = t.value),
										n instanceof o
											? n
											: new o(function (e) {
													e(n);
												})).then(a, s);
							}
							c((r = r.apply(t, n || [])).next());
						})
					);
					var t, n, o, r;
				};
				const wa = (e) => {
					return (
						(t = void 0),
						(n = void 0),
						(r = function* () {
							const {
								accountContext: t,
								debugContext: n,
								requisitionListContext: o,
								customContext: r,
								storefrontInstanceContext: i,
							} = e.eventInfo;
							let a = {};
							r && 0 !== Object.keys(r).length && (a = r),
								(a.commerce = a.commerce || {}),
								(a.commerce.requisitionList = ha(
									a.commerce.requisitionList,
									o,
								)),
								(a.personalEmail = a.personalEmail || {}),
								(a.personalEmail.address =
									a.personalEmail.address ||
									(null == t ? void 0 : t.emailAddress)),
								(a.commerce.requisitionListDeletes = { value: 1 }),
								(a.commerce.commerceScope = rr(i)),
								(a._id = null == n ? void 0 : n.eventId),
								(a.eventType = 'commerce.requisitionListDeletes'),
								tr(a, e);
						}),
						new ((o = void 0) || (o = Promise))(function (e, i) {
							function a(e) {
								try {
									c(r.next(e));
								} catch (e) {
									i(e);
								}
							}
							function s(e) {
								try {
									c(r.throw(e));
								} catch (e) {
									i(e);
								}
							}
							function c(t) {
								var n;
								t.done
									? e(t.value)
									: ((n = t.value),
										n instanceof o
											? n
											: new o(function (e) {
													e(n);
												})).then(a, s);
							}
							c((r = r.apply(t, n || [])).next());
						})
					);
					var t, n, o, r;
				};
				const ba = (e) => {
					return (
						(t = void 0),
						(n = void 0),
						(r = function* () {
							const {
								accountContext: t,
								changedProductsContext: n,
								requisitionListContext: o,
								requisitionListItemsContext: r,
								orderPageContext: i,
								debugContext: a,
								customContext: s,
								storefrontInstanceContext: c,
							} = e.eventInfo;
							let u = {};
							s && 0 !== Object.keys(s).length && (u = s),
								(u.commerce = u.commerce || {}),
								(u.commerce.requisitionList = ha(
									u.commerce.requisitionList,
									o,
								));
							const d = r || i;
							(u.productListItems = ea(u.productListItems, n, d, c)),
								(u.personalEmail = u.personalEmail || {}),
								(u.personalEmail.address =
									u.personalEmail.address ||
									(null == t ? void 0 : t.emailAddress)),
								(u.commerce.requisitionListAdds = { value: 1 }),
								(u.commerce.commerceScope = rr(c)),
								(u._id = null == a ? void 0 : a.eventId),
								(u.eventType = 'commerce.requisitionListAdds'),
								tr(u, e);
						}),
						new ((o = void 0) || (o = Promise))(function (e, i) {
							function a(e) {
								try {
									c(r.next(e));
								} catch (e) {
									i(e);
								}
							}
							function s(e) {
								try {
									c(r.throw(e));
								} catch (e) {
									i(e);
								}
							}
							function c(t) {
								var n;
								t.done
									? e(t.value)
									: ((n = t.value),
										n instanceof o
											? n
											: new o(function (e) {
													e(n);
												})).then(a, s);
							}
							c((r = r.apply(t, n || [])).next());
						})
					);
					var t, n, o, r;
				};
				const Ca = (e) => {
						return (
							(t = void 0),
							(n = void 0),
							(r = function* () {
								const {
									accountContext: t,
									requisitionListItemsContext: n,
									debugContext: o,
									customContext: r,
									requisitionListContext: i,
									storefrontInstanceContext: a,
								} = e.eventInfo;
								let s = {};
								r && 0 !== Object.keys(r).length && (s = r),
									(s.commerce = s.commerce || {}),
									(s.commerce.requisitionList = ha(
										s.commerce.requisitionList,
										i,
									)),
									(s.productListItems = ea(s.productListItems, void 0, n, a)),
									(s.personalEmail = s.personalEmail || {}),
									(s.personalEmail.address =
										s.personalEmail.address ||
										(null == t ? void 0 : t.emailAddress)),
									(s.commerce.requisitionListRemovals = { value: 1 }),
									(s.commerce.commerceScope = rr(a)),
									(s._id = null == o ? void 0 : o.eventId),
									(s.eventType = 'commerce.requisitionListRemovals'),
									tr(s, e);
							}),
							new ((o = void 0) || (o = Promise))(function (e, i) {
								function a(e) {
									try {
										c(r.next(e));
									} catch (e) {
										i(e);
									}
								}
								function s(e) {
									try {
										c(r.throw(e));
									} catch (e) {
										i(e);
									}
								}
								function c(t) {
									var n;
									t.done
										? e(t.value)
										: ((n = t.value),
											n instanceof o
												? n
												: new o(function (e) {
														e(n);
													})).then(a, s);
								}
								c((r = r.apply(t, n || [])).next());
							})
						);
						var t, n, o, r;
					},
					Ia = (e) => {
						const {
								searchUnitId: t,
								name: n,
								pageContext: o,
								searchResultsContext: r,
							} = e.eventInfo,
							i = zi(t, r),
							a = ((e, t, n) => {
								const o = window.magentoStorefrontEvents,
									r = null != n ? n : o.context.getSearchResults();
								if (!r) return { schema: Ti, data: {} };
								const i = Vi(e, r);
								if (!i) return null;
								const a = ((e, t) =>
									t.categories.find((t) => t.name === e) || null)(t, i);
								return a
									? {
											schema: Ti,
											data: { name: a.name, url: a.url, rank: a.rank },
										}
									: null;
							})(t, n, r),
							s = [];
						i && s.push(i),
							a && s.push(a),
							hi({
								category: 'search',
								action: 'category-click',
								label: null == a ? void 0 : a.data.url,
								property: null == o ? void 0 : o.pageType,
								context: s,
							});
					},
					xa = (e) => {
						const {
								searchUnitId: t,
								sku: n,
								pageContext: o,
								searchResultsContext: r,
							} = e.eventInfo,
							i = zi(t, r),
							a = ((e, t, n) => {
								const o = window.magentoStorefrontEvents,
									r = null != n ? n : o.context.getSearchResults();
								if (!r) return { schema: Ri, data: {} };
								const i = Vi(e, r);
								if (!i) return null;
								const a = ((e, t) =>
									t.products.find((t) => t.sku === e) || null)(t, i);
								return a
									? {
											schema: Ri,
											data: {
												name: a.name,
												sku: a.sku,
												url: a.url,
												imageUrl: a.imageUrl,
												price: a.price,
												rank: a.rank,
											},
										}
									: null;
							})(t, n, r),
							s = [];
						i && s.push(i),
							a && s.push(a),
							hi({
								category: 'search',
								action: 'product-click',
								label: null == a ? void 0 : a.data.sku,
								property: null == o ? void 0 : o.pageType,
								context: s,
							});
					},
					Ea = (e) => {
						const {
								searchUnitId: t,
								pageContext: n,
								searchInputContext: o,
							} = e.eventInfo,
							r = Hi(t, o),
							i = [];
						r && i.push(r),
							hi({
								category: 'search',
								action: 'api-request-sent',
								label: null == r ? void 0 : r.data.searchRequestId,
								property: null == n ? void 0 : n.pageType,
								context: i,
							});
					};
				const Sa = (e) => {
						return (
							(t = void 0),
							(n = void 0),
							(r = function* () {
								var t, n;
								const {
									searchUnitId: o,
									searchInputContext: r,
									debugContext: i,
									storefrontInstanceContext: a,
									customContext: s,
								} = e.eventInfo;
								let c = {};
								const u = Hi(o, r);
								s && 0 !== Object.keys(s).length && (c = s);
								const d = (
										null !== (t = null == u ? void 0 : u.data.sort) &&
										void 0 !== t
											? t
											: []
									).map((e) => ({
										attribute: e.attribute,
										order: e.direction,
									})),
									l = (
										null !== (n = null == u ? void 0 : u.data.filter) &&
										void 0 !== n
											? n
											: []
									).map((e) => {
										let t = [],
											n = !1;
										return (
											e.eq
												? t.push(e.eq)
												: e.in
													? (t = e.in)
													: e.range &&
														((n = !0),
														t.push(String(e.range.from)),
														t.push(String(e.range.to))),
											{ attribute: e.attribute, value: t, isRange: n }
										);
									});
								(c.siteSearch = {
									query: null == r ? void 0 : r.units[0].phrase,
									sort: d,
									refinements: l,
								}),
									(c.searchRequest = { value: 1 }),
									u && (c.searchRequest.id = u.data.searchRequestId),
									(c.commerce = c.commerce || {}),
									(c.commerce.commerceScope = rr(a)),
									(c._id = null == i ? void 0 : i.eventId),
									(c.eventType = 'searchRequest'),
									tr(c, e);
							}),
							new ((o = void 0) || (o = Promise))(function (e, i) {
								function a(e) {
									try {
										c(r.next(e));
									} catch (e) {
										i(e);
									}
								}
								function s(e) {
									try {
										c(r.throw(e));
									} catch (e) {
										i(e);
									}
								}
								function c(t) {
									var n;
									t.done
										? e(t.value)
										: ((n = t.value),
											n instanceof o
												? n
												: new o(function (e) {
														e(n);
													})).then(a, s);
								}
								c((r = r.apply(t, n || [])).next());
							})
						);
						var t, n, o, r;
					},
					ka = (e) => {
						const {
								searchUnitId: t,
								pageContext: n,
								searchResultsContext: o,
							} = e.eventInfo,
							r = zi(t, o),
							i = [];
						r && i.push(r),
							hi({
								category: 'search',
								action: 'api-response-received',
								label: null == r ? void 0 : r.data.searchRequestId,
								property: null == n ? void 0 : n.pageType,
								context: i,
							});
					};
				const Pa = (e) => {
						return (
							(t = void 0),
							(n = void 0),
							(r = function* () {
								var t, n, o, r, i;
								const {
										searchUnitId: a,
										searchResultsContext: s,
										debugContext: c,
										storefrontInstanceContext: u,
										customContext: d,
									} = e.eventInfo,
									l = zi(a, s),
									m = (
										null !==
											(n =
												null === (t = null == l ? void 0 : l.data) ||
												void 0 === t
													? void 0
													: t.suggestions) && void 0 !== n
											? n
											: []
									).map((e) => e.suggestion),
									p = (
										null !==
											(r =
												null === (o = null == l ? void 0 : l.data) ||
												void 0 === o
													? void 0
													: o.products) && void 0 !== r
											? r
											: []
									).map((e) => ({
										SKU: e.sku,
										name: e.name,
										productImageUrl: e.imageUrl,
									}));
								let f = {};
								d && 0 !== Object.keys(d).length && (f = d),
									(f.siteSearch = {
										suggestions: m,
										numberOfResults:
											null === (i = null == l ? void 0 : l.data) || void 0 === i
												? void 0
												: i.productCount,
									}),
									(f.productListItems = p),
									(f.searchResponse = { value: 1 }),
									l && (f.searchResponse.id = l.data.searchRequestId),
									(f.commerce = f.commerce || {}),
									(f.commerce.commerceScope = rr(u)),
									(f._id = null == c ? void 0 : c.eventId),
									(f.eventType = 'searchResponse'),
									tr(f, e);
							}),
							new ((o = void 0) || (o = Promise))(function (e, i) {
								function a(e) {
									try {
										c(r.next(e));
									} catch (e) {
										i(e);
									}
								}
								function s(e) {
									try {
										c(r.throw(e));
									} catch (e) {
										i(e);
									}
								}
								function c(t) {
									var n;
									t.done
										? e(t.value)
										: ((n = t.value),
											n instanceof o
												? n
												: new o(function (e) {
														e(n);
													})).then(a, s);
								}
								c((r = r.apply(t, n || [])).next());
							})
						);
						var t, n, o, r;
					},
					Da = (e) => {
						const {
								searchUnitId: t,
								pageContext: n,
								searchResultsContext: o,
							} = e.eventInfo,
							r = zi(t, o),
							i = [];
						r && i.push(r),
							hi({
								category: 'search',
								action: 'results-view',
								label: null == r ? void 0 : r.data.searchRequestId,
								property: null == n ? void 0 : n.pageType,
								context: i,
							});
					},
					Ta = (e) => {
						const {
								searchUnitId: t,
								pageContext: n,
								searchResultsContext: o,
							} = e.eventInfo,
							r = zi(t, o),
							i = [];
						r && i.push(r),
							hi({
								category: 'search',
								action: 'category-page',
								label: null == r ? void 0 : r.data.searchRequestId,
								property: null == n ? void 0 : n.pageType,
								context: i,
							});
					},
					Ra = (e) => {
						const {
								searchUnitId: t,
								suggestion: n,
								pageContext: o,
								searchResultsContext: r,
							} = e.eventInfo,
							i = zi(t, r),
							a = ((e, t, n) => {
								const o = window.magentoStorefrontEvents,
									r = null != n ? n : o.context.getSearchResults();
								if (!r) return { schema: Ai, data: {} };
								const i = Vi(e, r);
								if (!i) return null;
								const a = ((e, t) =>
									t.suggestions.find((t) => t.suggestion === e) || null)(t, i);
								return a
									? {
											schema: Ai,
											data: { suggestion: a.suggestion, rank: a.rank },
										}
									: null;
							})(t, n, r),
							s = [];
						i && s.push(i),
							a && s.push(a),
							hi({
								category: 'search',
								action: 'suggestion-click',
								label: null == a ? void 0 : a.data.suggestion,
								property: null == o ? void 0 : o.pageType,
								context: s,
							});
					},
					Oa = (e) => {
						const { pageContext: t, shoppingCartContext: n } = e.eventInfo,
							o = Wi(n),
							r = [];
						o && r.push(o),
							hi({
								category: 'shopping-cart',
								action: 'initiate-checkout',
								property: null == t ? void 0 : t.pageType,
								context: r,
							});
					};
				const Aa = (e) => {
					return (
						(t = void 0),
						(n = void 0),
						(r = function* () {
							try {
								const {
									shoppingCartContext: t,
									debugContext: n,
									storefrontInstanceContext: o,
									customContext: r,
								} = e.eventInfo;
								let i = {};
								r && 0 !== Object.keys(r).length && (i = r),
									(i.commerce = i.commerce || {}),
									(i.commerce.order = i.commerce.order || {}),
									(i.commerce.order.discountAmount = Number(
										(null == t ? void 0 : t.discountAmount) || 0,
									)),
									(i.commerce.cart = i.commerce.cart || {}),
									(i.commerce.cart.cartID =
										i.commerce.cart.cartID || (null == t ? void 0 : t.id)),
									(i.productListItems = ea(i.productListItems, t, void 0, o)),
									(i.commerce.checkouts = { value: 1 }),
									(i.commerce.commerceScope = rr(o)),
									(i._id = null == n ? void 0 : n.eventId),
									(i.eventType = 'commerce.checkouts'),
									tr(i, e);
							} catch (e) {
								console.warn(
									'Error in shoppingCart initiateCheckout AEP handler',
								);
							}
						}),
						new ((o = void 0) || (o = Promise))(function (e, i) {
							function a(e) {
								try {
									c(r.next(e));
								} catch (e) {
									i(e);
								}
							}
							function s(e) {
								try {
									c(r.throw(e));
								} catch (e) {
									i(e);
								}
							}
							function c(t) {
								var n;
								t.done
									? e(t.value)
									: ((n = t.value),
										n instanceof o
											? n
											: new o(function (e) {
													e(n);
												})).then(a, s);
							}
							c((r = r.apply(t, n || [])).next());
						})
					);
					var t, n, o, r;
				};
				const qa = (e) => {
						return (
							(t = void 0),
							(n = void 0),
							(r = function* () {
								const {
									changedProductsContext: t,
									shoppingCartContext: n,
									debugContext: o,
									storefrontInstanceContext: r,
									customContext: i,
								} = e.eventInfo;
								let a = {};
								i && 0 !== Object.keys(i).length && (a = i),
									(a.commerce = a.commerce || {}),
									(a.commerce.cart = a.commerce.cart || {}),
									(a.commerce.cart.cartID =
										a.commerce.cart.cartID || (null == n ? void 0 : n.id)),
									(a.productListItems = ea(a.productListItems, t, void 0, r)),
									(a.commerce.productListOpens = { value: 1 }),
									(a.commerce.commerceScope = rr(r)),
									(a._id = null == o ? void 0 : o.eventId),
									(a.eventType = 'commerce.productListOpens'),
									tr(a, e);
							}),
							new ((o = void 0) || (o = Promise))(function (e, i) {
								function a(e) {
									try {
										c(r.next(e));
									} catch (e) {
										i(e);
									}
								}
								function s(e) {
									try {
										c(r.throw(e));
									} catch (e) {
										i(e);
									}
								}
								function c(t) {
									var n;
									t.done
										? e(t.value)
										: ((n = t.value),
											n instanceof o
												? n
												: new o(function (e) {
														e(n);
													})).then(a, s);
								}
								c((r = r.apply(t, n || [])).next());
							})
						);
						var t, n, o, r;
					},
					ja = (e) => {
						const { pageContext: t, shoppingCartContext: n } = e.eventInfo,
							o = Wi(n),
							r = [];
						o && r.push(o),
							hi({
								category: 'shopping-cart',
								action: 'view',
								property: null == t ? void 0 : t.pageType,
								context: r,
							});
					};
				const Na = (e) => {
					return (
						(t = void 0),
						(n = void 0),
						(r = function* () {
							try {
								const {
									shoppingCartContext: t,
									debugContext: n,
									storefrontInstanceContext: o,
									customContext: r,
								} = e.eventInfo;
								let i = {};
								r && 0 !== Object.keys(r).length && (i = r),
									(i.commerce = i.commerce || {}),
									(i.commerce.order = i.commerce.order || {}),
									(i.commerce.order.discountAmount = Number(
										(null == t ? void 0 : t.discountAmount) || 0,
									)),
									(i.commerce.cart = i.commerce.cart || {}),
									(i.commerce.cart.cartID =
										i.commerce.cart.cartID || (null == t ? void 0 : t.id)),
									(i.productListItems = ea(i.productListItems, t, void 0, o)),
									(i.commerce.productListViews = { value: 1 }),
									(i.commerce.commerceScope = rr(o)),
									(i._id = null == n ? void 0 : n.eventId),
									(i.eventType = 'commerce.productListViews'),
									tr(i, e);
							} catch (e) {
								console.warn('Error in shoppingCart view AEP handler');
							}
						}),
						new ((o = void 0) || (o = Promise))(function (e, i) {
							function a(e) {
								try {
									c(r.next(e));
								} catch (e) {
									i(e);
								}
							}
							function s(e) {
								try {
									c(r.throw(e));
								} catch (e) {
									i(e);
								}
							}
							function c(t) {
								var n;
								t.done
									? e(t.value)
									: ((n = t.value),
										n instanceof o
											? n
											: new o(function (e) {
													e(n);
												})).then(a, s);
							}
							c((r = r.apply(t, n || [])).next());
						})
					);
					var t, n, o, r;
				};
				var La = {},
					Ma = {};
				function Ua(e, t, n) {
					for (
						var o, r, i, a, s, c;
						null !== (o = t.parentElement) &&
						null != o &&
						'A' !== (r = t.tagName.toUpperCase()) &&
						'AREA' !== r;

					)
						t = o;
					var u,
						d = t;
					if (null != d.href) {
						var l = d.hostname || zr(d.href),
							m = l.toLowerCase(),
							p = d.href.replace(l, m);
						new RegExp(
							'^(javascript|vbscript|jscript|mocha|livescript|ecmascript|mailto):',
							'i',
						).test(p) ||
							((i = d.id),
							(a = ei(d)),
							(s = d.target),
							(c = Ma[e.id].linkTrackingContent ? d.innerHTML : void 0),
							(p = unescape(p)),
							e.core.track(
								(function (e) {
									var t = e.event,
										n = t.schema,
										o = t.data,
										r = pr(),
										i = {
											schema:
												'iglu:com.snowplowanalytics.snowplow/unstruct_event/jsonschema/1-0-0',
											data: { schema: n, data: o },
										};
									return r.add('e', 'ue'), r.addJson('ue_px', 'ue_pr', i), r;
								})({
									event: {
										schema:
											'iglu:com.snowplowanalytics.snowplow/link_click/jsonschema/1-0-1',
										data: Lr({
											targetUrl: (u = {
												targetUrl: p,
												elementId: i,
												elementClasses: a,
												elementTarget: s,
												elementContent: c,
											}).targetUrl,
											elementId: u.elementId,
											elementClasses: u.elementClasses,
											elementTarget: u.elementTarget,
											elementContent: u.elementContent,
										}),
									},
								}),
								(function (e) {
									for (var t, n = [], o = 1; o < arguments.length; o++)
										n[o - 1] = arguments[o];
									return null !==
										(t =
											null == e
												? void 0
												: e
														.map(function (e) {
															if ('function' != typeof e) return e;
															try {
																return e.apply(void 0, n);
															} catch (e) {
																return;
															}
														})
														.filter(Boolean)) && void 0 !== t
										? t
										: [];
								})(n, t),
							));
					}
				}
				function $a(e, t) {
					return function (n) {
						var o, r;
						(o = (n = n || window.event).which || n.button),
							(r = n.target || n.srcElement),
							'click' === n.type
								? r && Ua(La[e], r, t)
								: 'mousedown' === n.type
									? (1 !== o && 2 !== o) || !r
										? (Ma[e].lastButton = Ma[e].lastTarget = null)
										: ((Ma[e].lastButton = o), (Ma[e].lastTarget = r))
									: 'mouseup' === n.type &&
										(o === Ma[e].lastButton &&
											r === Ma[e].lastTarget &&
											Ua(La[e], r, t),
										(Ma[e].lastButton = Ma[e].lastTarget = null));
					};
				}
				function _a(e, t) {
					Ma[e].linkTrackingPseudoClicks
						? (Qr(t, 'mouseup', $a(e, Ma[e].linkTrackingContext), !1),
							Qr(t, 'mousedown', $a(e, Ma[e].linkTrackingContext), !1))
						: Qr(t, 'click', $a(e, Ma[e].linkTrackingContext), !1);
				}
				function Ba(e, t) {
					var n = void 0 === e ? {} : e,
						o = n.options,
						r = n.pseudoClicks,
						i = n.trackContent,
						a = n.context;
					Ma[t] = {
						linkTrackingContent: i,
						linkTrackingContext: a,
						linkTrackingPseudoClicks: r,
						linkTrackingFilter: Zr(o),
					};
				}
				function Va(e) {
					var t,
						n,
						o,
						r = document.links;
					for (o = 0; o < r.length; o++)
						(null === (n = (t = Ma[e]).linkTrackingFilter) || void 0 === n
							? void 0
							: n.call(t, r[o])) &&
							!r[o][e] &&
							(_a(e, r[o]), (r[o][e] = !0));
				}
				const Fa = ({ appId: e, collectorUrl: t, collectorPath: n }) => {
					const o = {
						appId: e,
						platform: 'web',
						discoverRootDomain: !0,
						cookieName: 'mg',
						encodeBase64: !0,
						respectDoNotTrack: !1,
						sessionCookieTimeout: 1800,
						eventMethod: 'beacon',
						bufferSize: 1,
						maxPostBytes: 4e4,
						crossDomainLinker: void 0,
						cookieLifetime: 63072e3,
						stateStorageStrategy: 'localStorage',
						postPath: n,
						contexts: { session: !1, webPage: !0 },
						plugins: [
							{
								contexts: function () {
									return (
										(n = (t =
											(e = window).performance ||
											e.mozPerformance ||
											e.msPerformance ||
											e.webkitPerformance).timing),
										t
											? [
													{
														schema:
															'iglu:org.w3/PerformanceTiming/jsonschema/1-0-0',
														data: {
															navigationStart: n.navigationStart,
															redirectStart: n.redirectStart,
															redirectEnd: n.redirectEnd,
															fetchStart: n.fetchStart,
															domainLookupStart: n.domainLookupStart,
															domainLookupEnd: n.domainLookupEnd,
															connectStart: n.connectStart,
															secureConnectionStart: n.secureConnectionStart,
															connectEnd: n.connectEnd,
															requestStart: n.requestStart,
															responseStart: n.responseStart,
															responseEnd: n.responseEnd,
															unloadEventStart: n.unloadEventStart,
															unloadEventEnd: n.unloadEventEnd,
															domLoading: n.domLoading,
															domInteractive: n.domInteractive,
															domContentLoadedEventStart:
																n.domContentLoadedEventStart,
															domContentLoadedEventEnd:
																n.domContentLoadedEventEnd,
															domComplete: n.domComplete,
															loadEventStart: n.loadEventStart,
															loadEventEnd: n.loadEventEnd,
															msFirstPaint: n.msFirstPaint,
															chromeFirstPaint: n.chromeFirstPaint,
															requestEnd: n.requestEnd,
															proxyStart: n.proxyStart,
															proxyEnd: n.proxyEnd,
														},
													},
												]
											: []
									);
									var e, t, n;
								},
							},
							{
								activateBrowserPlugin: function (e) {
									La[e.id] = e;
								},
							},
						],
					};
					!(function (e, t, n) {
						void 0 === n && (n = {}),
							yi &&
								(function (e, t, n, o, r, i) {
									fi.hasOwnProperty(e) ||
										((fi[e] = pi(e, t, n, o, r, i)), fi[e]);
								})(e, e, 'js-'.concat('3.15.0'), t, yi, n);
					})('sp', t, o);
					const r = Qi();
					var i;
					(i = r),
						gi(undefined, function (e) {
							e.core.addGlobalContexts(i);
						}),
						gi(void 0, function (e) {
							e.setOptOutCookie('mg_dnt');
						}),
						(function (e, t) {
							gi(void 0, function (t) {
								t.enableActivityTracking(e);
							});
						})({ minimumVisitLength: 5, heartbeatDelay: 5 }),
						(function (e, t) {
							void 0 === e && (e = {}),
								void 0 === t && (t = Object.keys(La)),
								t.forEach(function (t) {
									La[t] &&
										(La[t].sharedState.hasLoaded
											? (Ba(e, t), Va(t))
											: La[t].sharedState.registeredOnLoadHandlers.push(
													function () {
														Ba(e, t), Va(t);
													},
												));
								});
						})();
				};
				var Ha = function (e, t, n, o) {
					return new (n || (n = Promise))(function (r, i) {
						function a(e) {
							try {
								c(o.next(e));
							} catch (e) {
								i(e);
							}
						}
						function s(e) {
							try {
								c(o.throw(e));
							} catch (e) {
								i(e);
							}
						}
						function c(e) {
							var t;
							e.done
								? r(e.value)
								: ((t = e.value),
									t instanceof n
										? t
										: new n(function (e) {
												e(t);
											})).then(a, s);
						}
						c((o = o.apply(e, t || [])).next());
					});
				};
				const za = () =>
						Ha(void 0, void 0, void 0, function* () {
							try {
								const t =
									window.magentoStorefrontEvents.context.getAEP().webSdkName;
								if (t)
									(e = t),
										Zo(void 0, void 0, void 0, function* () {
											try {
												if (!window.hasOwnProperty(e)) throw new Error();
												er = window[e];
											} catch (t) {
												throw new Error(`Could not find Alloy Instance: ${e}`);
											}
										});
								else {
									if (!nr()) return;
									const e = 'alloy';
									((e) => {
										return (
											(t = window),
											void [e].forEach(function (e) {
												t[e] ||
													((t.__alloyNS = t.__alloyNS || []).push(e),
													(t[e] = function () {
														const n = arguments;
														return new Promise(function (o, r) {
															t[e].q.push([o, r, n]);
														});
													}),
													(t[e].q = []));
											})
										);
										var t;
									})(e);
									const t = yield ((e) =>
										Zo(void 0, void 0, void 0, function* () {
											const t = ((e) => {
												const t = window.magentoStorefrontEvents,
													n = null != e ? e : t.context.getAEP();
												return n
													? {
															imsOrgId: n.imsOrgId,
															datastreamId: n.datastreamId,
															edgeDomain: n.edgeDomain,
															webSdkName: n.webSdkName,
														}
													: {};
											})();
											if (t.datastreamId && t.imsOrgId) {
												const n = {
													edgeConfigId: t.datastreamId,
													orgId: t.imsOrgId,
													defaultConsent: 'pending',
												};
												return (
													t.edgeDomain &&
														'' !== t.edgeDomain &&
														(n.edgeDomain = t.edgeDomain),
													yield e('configure', n),
													(er = e),
													er
												);
											}
											return Promise.reject();
										}))(
										((e = {}) => {
											const t = ze({
													name: Je().default('alloy'),
													monitors: _e(ze({})).default([]),
												}).noUnknownFields(),
												{ name: n, monitors: o } = t(e),
												r = (({
													console: e,
													locationSearch: t,
													createLogger: n,
													instanceName: o,
													createNamespacedStorage: r,
													getMonitors: i,
												}) => {
													const a = ie.parse(t),
														s = r(`instance.${o}.`),
														c = s.session.getItem('debug');
													let u = 'true' === c,
														d = null === c;
													const l = () => u,
														m = (e, { fromConfig: t }) => {
															(t && !d) || (u = e),
																t ||
																	(s.session.setItem('debug', e.toString()),
																	(d = !1));
														};
													var p;
													return (
														void 0 !== a.alloy_debug &&
															m(
																((p = a.alloy_debug),
																te(p) && 'true' === p.toLowerCase()),
																{ fromConfig: !1 },
															),
														{
															setDebugEnabled: m,
															logger: n({
																getDebugEnabled: l,
																context: { instanceName: o },
																getMonitors: i,
																console: e,
															}),
															createComponentLogger: (t) =>
																n({
																	getDebugEnabled: l,
																	context: {
																		instanceName: o,
																		componentName: t,
																	},
																	getMonitors: i,
																	console: e,
																}),
														}
													);
												})({
													console: Yo,
													locationSearch: window.location.search,
													createLogger: No,
													instanceName: n,
													createNamespacedStorage: Ko,
													getMonitors: () =>
														(window.__alloyMonitors || []).concat(o),
												}),
												i = Go({ instanceName: n, logController: r });
											return r.logger.logOnInstanceCreated({ instance: i }), i;
										})({ name: e }),
									);
									window.alloy = t;
								}
								const n = setInterval(
									() =>
										Ha(void 0, void 0, void 0, function* () {
											try {
												yield Zo(void 0, void 0, void 0, function* () {
													const e = -1 !== document.cookie.indexOf('mg_dnt'),
														t = er;
													yield t('setConsent', {
														consent: [
															{
																standard: 'Adobe',
																version: '1.0',
																value: { general: e ? 'out' : 'in' },
															},
														],
													});
												});
											} catch (e) {
												clearInterval(n),
													console.warn('Alloy consent could not be set.');
											}
										}),
									1e3,
								);
							} catch (e) {
								console.warn('Alloy could not be configured.');
							}
							var e;
						}),
					Ja = () =>
						Ha(void 0, void 0, void 0, function* () {
							const { context: e } = window.magentoStorefrontEvents,
								t = e.getEventForwarding(),
								n = !1 !== (null == t ? void 0 : t.commerce),
								o = !(!(null == t ? void 0 : t.aep) || !nr());
							n &&
								Fa({
									appId: 'magento-storefront-event-collector',
									collectorUrl: 'https://commerce.adobedc.net',
									collectorPath: '/collector/tp2',
								}),
								o && (yield za()),
								((e, t) => {
									const n = window.magentoStorefrontEvents;
									if (e)
										try {
											n.subscribe.addToCart(aa),
												n.subscribe.initiateCheckout(Oa),
												n.subscribe.pageView(ra),
												n.subscribe.placeOrder(Yi),
												n.subscribe.productPageView(ca),
												n.subscribe.recsItemAddToCartClick(la),
												n.subscribe.recsItemClick(ma),
												n.subscribe.recsRequestSent(pa),
												n.subscribe.recsResponseReceived(fa),
												n.subscribe.recsUnitRender(ga),
												n.subscribe.recsUnitView(va),
												n.subscribe.searchCategoryClick(Ia),
												n.subscribe.searchProductClick(xa),
												n.subscribe.searchRequestSent(Ea),
												n.subscribe.searchResponseReceived(ka),
												n.subscribe.searchResultsView(Da),
												n.subscribe.categoryResultsView(Ta),
												n.subscribe.searchSuggestionClick(Ra),
												n.subscribe.shoppingCartView(ja);
										} catch (e) {
											console.error(
												`error subscribing to Commerce events: ${JSON.stringify(e)}`,
											);
										}
									if (t)
										try {
											n.subscribe.addToCart(sa),
												n.subscribe.addToRequisitionList(ba),
												n.subscribe.custom(oa),
												n.subscribe.createAccount(ir),
												n.subscribe.createRequisitionList(ya),
												n.subscribe.deleteRequisitionList(wa),
												n.subscribe.editAccount(ar),
												n.subscribe.initiateCheckout(Aa),
												n.subscribe.openCart(qa),
												n.subscribe.pageView(ia),
												n.subscribe.placeOrder(na),
												n.subscribe.productPageView(ua),
												n.subscribe.removeFromCart(da),
												n.subscribe.removeFromRequisitionList(Ca),
												n.subscribe.searchRequestSent(Sa),
												n.subscribe.searchResponseReceived(Pa),
												n.subscribe.shoppingCartView(Na),
												n.subscribe.signIn(sr),
												n.subscribe.signOut(cr);
										} catch (e) {
											console.error(
												`error subscribing to Experience events: ${JSON.stringify(e)}`,
											);
										}
								})(n, o);
						});
				window.magentoStorefrontEvents
					? Ja()
					: window.addEventListener(
							'message',
							(e) => {
								'magento-storefront-events-sdk' === e.data &&
									window.magentoStorefrontEvents &&
									(Ja(), window.removeEventListener('message', Ja));
							},
							!1,
						);
			})(),
			o.default
		);
	})(),
);
