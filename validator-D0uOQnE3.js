import { c as xa, g as es } from "./_commonjsHelpers-DaMA6jEr.js";
var Er = { exports: {} }, ea = {}, Ne = {}, _t = {}, Kt = {}, H = {}, Lt = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.regexpCode = e.getEsmExportName = e.getProperty = e.safeStringify = e.stringify = e.strConcat = e.addCodeArg = e.str = e._ = e.nil = e._Code = e.Name = e.IDENTIFIER = e._CodeOrName = void 0;
  class t {
  }
  e._CodeOrName = t, e.IDENTIFIER = /^[a-z$_][a-z$_0-9]*$/i;
  class r extends t {
    constructor(b) {
      if (super(), !e.IDENTIFIER.test(b))
        throw new Error("CodeGen: name must be a valid identifier");
      this.str = b;
    }
    toString() {
      return this.str;
    }
    emptyStr() {
      return !1;
    }
    get names() {
      return { [this.str]: 1 };
    }
  }
  e.Name = r;
  class n extends t {
    constructor(b) {
      super(), this._items = typeof b == "string" ? [b] : b;
    }
    toString() {
      return this.str;
    }
    emptyStr() {
      if (this._items.length > 1)
        return !1;
      const b = this._items[0];
      return b === "" || b === '""';
    }
    get str() {
      var b;
      return (b = this._str) !== null && b !== void 0 ? b : this._str = this._items.reduce((T, A) => `${T}${A}`, "");
    }
    get names() {
      var b;
      return (b = this._names) !== null && b !== void 0 ? b : this._names = this._items.reduce((T, A) => (A instanceof r && (T[A.str] = (T[A.str] || 0) + 1), T), {});
    }
  }
  e._Code = n, e.nil = new n("");
  function a(h, ...b) {
    const T = [h[0]];
    let A = 0;
    for (; A < b.length; )
      f(T, b[A]), T.push(h[++A]);
    return new n(T);
  }
  e._ = a;
  const o = new n("+");
  function c(h, ...b) {
    const T = [O(h[0])];
    let A = 0;
    for (; A < b.length; )
      T.push(o), f(T, b[A]), T.push(o, O(h[++A]));
    return y(T), new n(T);
  }
  e.str = c;
  function f(h, b) {
    b instanceof n ? h.push(...b._items) : b instanceof r ? h.push(b) : h.push($(b));
  }
  e.addCodeArg = f;
  function y(h) {
    let b = 1;
    for (; b < h.length - 1; ) {
      if (h[b] === o) {
        const T = p(h[b - 1], h[b + 1]);
        if (T !== void 0) {
          h.splice(b - 1, 3, T);
          continue;
        }
        h[b++] = "+";
      }
      b++;
    }
  }
  function p(h, b) {
    if (b === '""')
      return h;
    if (h === '""')
      return b;
    if (typeof h == "string")
      return b instanceof r || h[h.length - 1] !== '"' ? void 0 : typeof b != "string" ? `${h.slice(0, -1)}${b}"` : b[0] === '"' ? h.slice(0, -1) + b.slice(1) : void 0;
    if (typeof b == "string" && b[0] === '"' && !(h instanceof r))
      return `"${h}${b.slice(1)}`;
  }
  function m(h, b) {
    return b.emptyStr() ? h : h.emptyStr() ? b : c`${h}${b}`;
  }
  e.strConcat = m;
  function $(h) {
    return typeof h == "number" || typeof h == "boolean" || h === null ? h : O(Array.isArray(h) ? h.join(",") : h);
  }
  function R(h) {
    return new n(O(h));
  }
  e.stringify = R;
  function O(h) {
    return JSON.stringify(h).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
  }
  e.safeStringify = O;
  function S(h) {
    return typeof h == "string" && e.IDENTIFIER.test(h) ? new n(`.${h}`) : a`[${h}]`;
  }
  e.getProperty = S;
  function P(h) {
    if (typeof h == "string" && e.IDENTIFIER.test(h))
      return new n(`${h}`);
    throw new Error(`CodeGen: invalid export name: ${h}, use explicit $id name mapping`);
  }
  e.getEsmExportName = P;
  function g(h) {
    return new n(h.toString());
  }
  e.regexpCode = g;
})(Lt);
var br = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.ValueScope = e.ValueScopeName = e.Scope = e.varKinds = e.UsedValueState = void 0;
  const t = Lt;
  class r extends Error {
    constructor(p) {
      super(`CodeGen: "code" for ${p} not defined`), this.value = p.value;
    }
  }
  var n;
  (function(y) {
    y[y.Started = 0] = "Started", y[y.Completed = 1] = "Completed";
  })(n || (e.UsedValueState = n = {})), e.varKinds = {
    const: new t.Name("const"),
    let: new t.Name("let"),
    var: new t.Name("var")
  };
  class a {
    constructor({ prefixes: p, parent: m } = {}) {
      this._names = {}, this._prefixes = p, this._parent = m;
    }
    toName(p) {
      return p instanceof t.Name ? p : this.name(p);
    }
    name(p) {
      return new t.Name(this._newName(p));
    }
    _newName(p) {
      const m = this._names[p] || this._nameGroup(p);
      return `${p}${m.index++}`;
    }
    _nameGroup(p) {
      var m, $;
      if (!(($ = (m = this._parent) === null || m === void 0 ? void 0 : m._prefixes) === null || $ === void 0) && $.has(p) || this._prefixes && !this._prefixes.has(p))
        throw new Error(`CodeGen: prefix "${p}" is not allowed in this scope`);
      return this._names[p] = { prefix: p, index: 0 };
    }
  }
  e.Scope = a;
  class o extends t.Name {
    constructor(p, m) {
      super(m), this.prefix = p;
    }
    setValue(p, { property: m, itemIndex: $ }) {
      this.value = p, this.scopePath = (0, t._)`.${new t.Name(m)}[${$}]`;
    }
  }
  e.ValueScopeName = o;
  const c = (0, t._)`\n`;
  class f extends a {
    constructor(p) {
      super(p), this._values = {}, this._scope = p.scope, this.opts = { ...p, _n: p.lines ? c : t.nil };
    }
    get() {
      return this._scope;
    }
    name(p) {
      return new o(p, this._newName(p));
    }
    value(p, m) {
      var $;
      if (m.ref === void 0)
        throw new Error("CodeGen: ref must be passed in value");
      const R = this.toName(p), { prefix: O } = R, S = ($ = m.key) !== null && $ !== void 0 ? $ : m.ref;
      let P = this._values[O];
      if (P) {
        const b = P.get(S);
        if (b)
          return b;
      } else
        P = this._values[O] = /* @__PURE__ */ new Map();
      P.set(S, R);
      const g = this._scope[O] || (this._scope[O] = []), h = g.length;
      return g[h] = m.ref, R.setValue(m, { property: O, itemIndex: h }), R;
    }
    getValue(p, m) {
      const $ = this._values[p];
      if ($)
        return $.get(m);
    }
    scopeRefs(p, m = this._values) {
      return this._reduceValues(m, ($) => {
        if ($.scopePath === void 0)
          throw new Error(`CodeGen: name "${$}" has no value`);
        return (0, t._)`${p}${$.scopePath}`;
      });
    }
    scopeCode(p = this._values, m, $) {
      return this._reduceValues(p, (R) => {
        if (R.value === void 0)
          throw new Error(`CodeGen: name "${R}" has no value`);
        return R.value.code;
      }, m, $);
    }
    _reduceValues(p, m, $ = {}, R) {
      let O = t.nil;
      for (const S in p) {
        const P = p[S];
        if (!P)
          continue;
        const g = $[S] = $[S] || /* @__PURE__ */ new Map();
        P.forEach((h) => {
          if (g.has(h))
            return;
          g.set(h, n.Started);
          let b = m(h);
          if (b) {
            const T = this.opts.es5 ? e.varKinds.var : e.varKinds.const;
            O = (0, t._)`${O}${T} ${h} = ${b};${this.opts._n}`;
          } else if (b = R == null ? void 0 : R(h))
            O = (0, t._)`${O}${b}${this.opts._n}`;
          else
            throw new r(h);
          g.set(h, n.Completed);
        });
      }
      return O;
    }
  }
  e.ValueScope = f;
})(br);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.or = e.and = e.not = e.CodeGen = e.operators = e.varKinds = e.ValueScopeName = e.ValueScope = e.Scope = e.Name = e.regexpCode = e.stringify = e.getProperty = e.nil = e.strConcat = e.str = e._ = void 0;
  const t = Lt, r = br;
  var n = Lt;
  Object.defineProperty(e, "_", { enumerable: !0, get: function() {
    return n._;
  } }), Object.defineProperty(e, "str", { enumerable: !0, get: function() {
    return n.str;
  } }), Object.defineProperty(e, "strConcat", { enumerable: !0, get: function() {
    return n.strConcat;
  } }), Object.defineProperty(e, "nil", { enumerable: !0, get: function() {
    return n.nil;
  } }), Object.defineProperty(e, "getProperty", { enumerable: !0, get: function() {
    return n.getProperty;
  } }), Object.defineProperty(e, "stringify", { enumerable: !0, get: function() {
    return n.stringify;
  } }), Object.defineProperty(e, "regexpCode", { enumerable: !0, get: function() {
    return n.regexpCode;
  } }), Object.defineProperty(e, "Name", { enumerable: !0, get: function() {
    return n.Name;
  } });
  var a = br;
  Object.defineProperty(e, "Scope", { enumerable: !0, get: function() {
    return a.Scope;
  } }), Object.defineProperty(e, "ValueScope", { enumerable: !0, get: function() {
    return a.ValueScope;
  } }), Object.defineProperty(e, "ValueScopeName", { enumerable: !0, get: function() {
    return a.ValueScopeName;
  } }), Object.defineProperty(e, "varKinds", { enumerable: !0, get: function() {
    return a.varKinds;
  } }), e.operators = {
    GT: new t._Code(">"),
    GTE: new t._Code(">="),
    LT: new t._Code("<"),
    LTE: new t._Code("<="),
    EQ: new t._Code("==="),
    NEQ: new t._Code("!=="),
    NOT: new t._Code("!"),
    OR: new t._Code("||"),
    AND: new t._Code("&&"),
    ADD: new t._Code("+")
  };
  class o {
    optimizeNodes() {
      return this;
    }
    optimizeNames(s, l) {
      return this;
    }
  }
  class c extends o {
    constructor(s, l, N) {
      super(), this.varKind = s, this.name = l, this.rhs = N;
    }
    render({ es5: s, _n: l }) {
      const N = s ? r.varKinds.var : this.varKind, I = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
      return `${N} ${this.name}${I};` + l;
    }
    optimizeNames(s, l) {
      if (s[this.name.str])
        return this.rhs && (this.rhs = fe(this.rhs, s, l)), this;
    }
    get names() {
      return this.rhs instanceof t._CodeOrName ? this.rhs.names : {};
    }
  }
  class f extends o {
    constructor(s, l, N) {
      super(), this.lhs = s, this.rhs = l, this.sideEffects = N;
    }
    render({ _n: s }) {
      return `${this.lhs} = ${this.rhs};` + s;
    }
    optimizeNames(s, l) {
      if (!(this.lhs instanceof t.Name && !s[this.lhs.str] && !this.sideEffects))
        return this.rhs = fe(this.rhs, s, l), this;
    }
    get names() {
      const s = this.lhs instanceof t.Name ? {} : { ...this.lhs.names };
      return Ce(s, this.rhs);
    }
  }
  class y extends f {
    constructor(s, l, N, I) {
      super(s, N, I), this.op = l;
    }
    render({ _n: s }) {
      return `${this.lhs} ${this.op}= ${this.rhs};` + s;
    }
  }
  class p extends o {
    constructor(s) {
      super(), this.label = s, this.names = {};
    }
    render({ _n: s }) {
      return `${this.label}:` + s;
    }
  }
  class m extends o {
    constructor(s) {
      super(), this.label = s, this.names = {};
    }
    render({ _n: s }) {
      return `break${this.label ? ` ${this.label}` : ""};` + s;
    }
  }
  class $ extends o {
    constructor(s) {
      super(), this.error = s;
    }
    render({ _n: s }) {
      return `throw ${this.error};` + s;
    }
    get names() {
      return this.error.names;
    }
  }
  class R extends o {
    constructor(s) {
      super(), this.code = s;
    }
    render({ _n: s }) {
      return `${this.code};` + s;
    }
    optimizeNodes() {
      return `${this.code}` ? this : void 0;
    }
    optimizeNames(s, l) {
      return this.code = fe(this.code, s, l), this;
    }
    get names() {
      return this.code instanceof t._CodeOrName ? this.code.names : {};
    }
  }
  class O extends o {
    constructor(s = []) {
      super(), this.nodes = s;
    }
    render(s) {
      return this.nodes.reduce((l, N) => l + N.render(s), "");
    }
    optimizeNodes() {
      const { nodes: s } = this;
      let l = s.length;
      for (; l--; ) {
        const N = s[l].optimizeNodes();
        Array.isArray(N) ? s.splice(l, 1, ...N) : N ? s[l] = N : s.splice(l, 1);
      }
      return s.length > 0 ? this : void 0;
    }
    optimizeNames(s, l) {
      const { nodes: N } = this;
      let I = N.length;
      for (; I--; ) {
        const D = N[I];
        D.optimizeNames(s, l) || (We(s, D.names), N.splice(I, 1));
      }
      return N.length > 0 ? this : void 0;
    }
    get names() {
      return this.nodes.reduce((s, l) => oe(s, l.names), {});
    }
  }
  class S extends O {
    render(s) {
      return "{" + s._n + super.render(s) + "}" + s._n;
    }
  }
  class P extends O {
  }
  class g extends S {
  }
  g.kind = "else";
  class h extends S {
    constructor(s, l) {
      super(l), this.condition = s;
    }
    render(s) {
      let l = `if(${this.condition})` + super.render(s);
      return this.else && (l += "else " + this.else.render(s)), l;
    }
    optimizeNodes() {
      super.optimizeNodes();
      const s = this.condition;
      if (s === !0)
        return this.nodes;
      let l = this.else;
      if (l) {
        const N = l.optimizeNodes();
        l = this.else = Array.isArray(N) ? new g(N) : N;
      }
      if (l)
        return s === !1 ? l instanceof h ? l : l.nodes : this.nodes.length ? this : new h(Qe(s), l instanceof h ? [l] : l.nodes);
      if (!(s === !1 || !this.nodes.length))
        return this;
    }
    optimizeNames(s, l) {
      var N;
      if (this.else = (N = this.else) === null || N === void 0 ? void 0 : N.optimizeNames(s, l), !!(super.optimizeNames(s, l) || this.else))
        return this.condition = fe(this.condition, s, l), this;
    }
    get names() {
      const s = super.names;
      return Ce(s, this.condition), this.else && oe(s, this.else.names), s;
    }
  }
  h.kind = "if";
  class b extends S {
  }
  b.kind = "for";
  class T extends b {
    constructor(s) {
      super(), this.iteration = s;
    }
    render(s) {
      return `for(${this.iteration})` + super.render(s);
    }
    optimizeNames(s, l) {
      if (super.optimizeNames(s, l))
        return this.iteration = fe(this.iteration, s, l), this;
    }
    get names() {
      return oe(super.names, this.iteration.names);
    }
  }
  class A extends b {
    constructor(s, l, N, I) {
      super(), this.varKind = s, this.name = l, this.from = N, this.to = I;
    }
    render(s) {
      const l = s.es5 ? r.varKinds.var : this.varKind, { name: N, from: I, to: D } = this;
      return `for(${l} ${N}=${I}; ${N}<${D}; ${N}++)` + super.render(s);
    }
    get names() {
      const s = Ce(super.names, this.from);
      return Ce(s, this.to);
    }
  }
  class M extends b {
    constructor(s, l, N, I) {
      super(), this.loop = s, this.varKind = l, this.name = N, this.iterable = I;
    }
    render(s) {
      return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render(s);
    }
    optimizeNames(s, l) {
      if (super.optimizeNames(s, l))
        return this.iterable = fe(this.iterable, s, l), this;
    }
    get names() {
      return oe(super.names, this.iterable.names);
    }
  }
  class Q extends S {
    constructor(s, l, N) {
      super(), this.name = s, this.args = l, this.async = N;
    }
    render(s) {
      return `${this.async ? "async " : ""}function ${this.name}(${this.args})` + super.render(s);
    }
  }
  Q.kind = "func";
  class ue extends O {
    render(s) {
      return "return " + super.render(s);
    }
  }
  ue.kind = "return";
  class Ee extends S {
    render(s) {
      let l = "try" + super.render(s);
      return this.catch && (l += this.catch.render(s)), this.finally && (l += this.finally.render(s)), l;
    }
    optimizeNodes() {
      var s, l;
      return super.optimizeNodes(), (s = this.catch) === null || s === void 0 || s.optimizeNodes(), (l = this.finally) === null || l === void 0 || l.optimizeNodes(), this;
    }
    optimizeNames(s, l) {
      var N, I;
      return super.optimizeNames(s, l), (N = this.catch) === null || N === void 0 || N.optimizeNames(s, l), (I = this.finally) === null || I === void 0 || I.optimizeNames(s, l), this;
    }
    get names() {
      const s = super.names;
      return this.catch && oe(s, this.catch.names), this.finally && oe(s, this.finally.names), s;
    }
  }
  class Oe extends S {
    constructor(s) {
      super(), this.error = s;
    }
    render(s) {
      return `catch(${this.error})` + super.render(s);
    }
  }
  Oe.kind = "catch";
  class Fe extends S {
    render(s) {
      return "finally" + super.render(s);
    }
  }
  Fe.kind = "finally";
  class Ue {
    constructor(s, l = {}) {
      this._values = {}, this._blockStarts = [], this._constants = {}, this.opts = { ...l, _n: l.lines ? `
` : "" }, this._extScope = s, this._scope = new r.Scope({ parent: s }), this._nodes = [new P()];
    }
    toString() {
      return this._root.render(this.opts);
    }
    // returns unique name in the internal scope
    name(s) {
      return this._scope.name(s);
    }
    // reserves unique name in the external scope
    scopeName(s) {
      return this._extScope.name(s);
    }
    // reserves unique name in the external scope and assigns value to it
    scopeValue(s, l) {
      const N = this._extScope.value(s, l);
      return (this._values[N.prefix] || (this._values[N.prefix] = /* @__PURE__ */ new Set())).add(N), N;
    }
    getScopeValue(s, l) {
      return this._extScope.getValue(s, l);
    }
    // return code that assigns values in the external scope to the names that are used internally
    // (same names that were returned by gen.scopeName or gen.scopeValue)
    scopeRefs(s) {
      return this._extScope.scopeRefs(s, this._values);
    }
    scopeCode() {
      return this._extScope.scopeCode(this._values);
    }
    _def(s, l, N, I) {
      const D = this._scope.toName(l);
      return N !== void 0 && I && (this._constants[D.str] = N), this._leafNode(new c(s, D, N)), D;
    }
    // `const` declaration (`var` in es5 mode)
    const(s, l, N) {
      return this._def(r.varKinds.const, s, l, N);
    }
    // `let` declaration with optional assignment (`var` in es5 mode)
    let(s, l, N) {
      return this._def(r.varKinds.let, s, l, N);
    }
    // `var` declaration with optional assignment
    var(s, l, N) {
      return this._def(r.varKinds.var, s, l, N);
    }
    // assignment code
    assign(s, l, N) {
      return this._leafNode(new f(s, l, N));
    }
    // `+=` code
    add(s, l) {
      return this._leafNode(new y(s, e.operators.ADD, l));
    }
    // appends passed SafeExpr to code or executes Block
    code(s) {
      return typeof s == "function" ? s() : s !== t.nil && this._leafNode(new R(s)), this;
    }
    // returns code for object literal for the passed argument list of key-value pairs
    object(...s) {
      const l = ["{"];
      for (const [N, I] of s)
        l.length > 1 && l.push(","), l.push(N), (N !== I || this.opts.es5) && (l.push(":"), (0, t.addCodeArg)(l, I));
      return l.push("}"), new t._Code(l);
    }
    // `if` clause (or statement if `thenBody` and, optionally, `elseBody` are passed)
    if(s, l, N) {
      if (this._blockNode(new h(s)), l && N)
        this.code(l).else().code(N).endIf();
      else if (l)
        this.code(l).endIf();
      else if (N)
        throw new Error('CodeGen: "else" body without "then" body');
      return this;
    }
    // `else if` clause - invalid without `if` or after `else` clauses
    elseIf(s) {
      return this._elseNode(new h(s));
    }
    // `else` clause - only valid after `if` or `else if` clauses
    else() {
      return this._elseNode(new g());
    }
    // end `if` statement (needed if gen.if was used only with condition)
    endIf() {
      return this._endBlockNode(h, g);
    }
    _for(s, l) {
      return this._blockNode(s), l && this.code(l).endFor(), this;
    }
    // a generic `for` clause (or statement if `forBody` is passed)
    for(s, l) {
      return this._for(new T(s), l);
    }
    // `for` statement for a range of values
    forRange(s, l, N, I, D = this.opts.es5 ? r.varKinds.var : r.varKinds.let) {
      const G = this._scope.toName(s);
      return this._for(new A(D, G, l, N), () => I(G));
    }
    // `for-of` statement (in es5 mode replace with a normal for loop)
    forOf(s, l, N, I = r.varKinds.const) {
      const D = this._scope.toName(s);
      if (this.opts.es5) {
        const G = l instanceof t.Name ? l : this.var("_arr", l);
        return this.forRange("_i", 0, (0, t._)`${G}.length`, (B) => {
          this.var(D, (0, t._)`${G}[${B}]`), N(D);
        });
      }
      return this._for(new M("of", I, D, l), () => N(D));
    }
    // `for-in` statement.
    // With option `ownProperties` replaced with a `for-of` loop for object keys
    forIn(s, l, N, I = this.opts.es5 ? r.varKinds.var : r.varKinds.const) {
      if (this.opts.ownProperties)
        return this.forOf(s, (0, t._)`Object.keys(${l})`, N);
      const D = this._scope.toName(s);
      return this._for(new M("in", I, D, l), () => N(D));
    }
    // end `for` loop
    endFor() {
      return this._endBlockNode(b);
    }
    // `label` statement
    label(s) {
      return this._leafNode(new p(s));
    }
    // `break` statement
    break(s) {
      return this._leafNode(new m(s));
    }
    // `return` statement
    return(s) {
      const l = new ue();
      if (this._blockNode(l), this.code(s), l.nodes.length !== 1)
        throw new Error('CodeGen: "return" should have one node');
      return this._endBlockNode(ue);
    }
    // `try` statement
    try(s, l, N) {
      if (!l && !N)
        throw new Error('CodeGen: "try" without "catch" and "finally"');
      const I = new Ee();
      if (this._blockNode(I), this.code(s), l) {
        const D = this.name("e");
        this._currNode = I.catch = new Oe(D), l(D);
      }
      return N && (this._currNode = I.finally = new Fe(), this.code(N)), this._endBlockNode(Oe, Fe);
    }
    // `throw` statement
    throw(s) {
      return this._leafNode(new $(s));
    }
    // start self-balancing block
    block(s, l) {
      return this._blockStarts.push(this._nodes.length), s && this.code(s).endBlock(l), this;
    }
    // end the current self-balancing block
    endBlock(s) {
      const l = this._blockStarts.pop();
      if (l === void 0)
        throw new Error("CodeGen: not in self-balancing block");
      const N = this._nodes.length - l;
      if (N < 0 || s !== void 0 && N !== s)
        throw new Error(`CodeGen: wrong number of nodes: ${N} vs ${s} expected`);
      return this._nodes.length = l, this;
    }
    // `function` heading (or definition if funcBody is passed)
    func(s, l = t.nil, N, I) {
      return this._blockNode(new Q(s, l, N)), I && this.code(I).endFunc(), this;
    }
    // end function definition
    endFunc() {
      return this._endBlockNode(Q);
    }
    optimize(s = 1) {
      for (; s-- > 0; )
        this._root.optimizeNodes(), this._root.optimizeNames(this._root.names, this._constants);
    }
    _leafNode(s) {
      return this._currNode.nodes.push(s), this;
    }
    _blockNode(s) {
      this._currNode.nodes.push(s), this._nodes.push(s);
    }
    _endBlockNode(s, l) {
      const N = this._currNode;
      if (N instanceof s || l && N instanceof l)
        return this._nodes.pop(), this;
      throw new Error(`CodeGen: not in block "${l ? `${s.kind}/${l.kind}` : s.kind}"`);
    }
    _elseNode(s) {
      const l = this._currNode;
      if (!(l instanceof h))
        throw new Error('CodeGen: "else" without "if"');
      return this._currNode = l.else = s, this;
    }
    get _root() {
      return this._nodes[0];
    }
    get _currNode() {
      const s = this._nodes;
      return s[s.length - 1];
    }
    set _currNode(s) {
      const l = this._nodes;
      l[l.length - 1] = s;
    }
  }
  e.CodeGen = Ue;
  function oe(_, s) {
    for (const l in s)
      _[l] = (_[l] || 0) + (s[l] || 0);
    return _;
  }
  function Ce(_, s) {
    return s instanceof t._CodeOrName ? oe(_, s.names) : _;
  }
  function fe(_, s, l) {
    if (_ instanceof t.Name)
      return N(_);
    if (!I(_))
      return _;
    return new t._Code(_._items.reduce((D, G) => (G instanceof t.Name && (G = N(G)), G instanceof t._Code ? D.push(...G._items) : D.push(G), D), []));
    function N(D) {
      const G = l[D.str];
      return G === void 0 || s[D.str] !== 1 ? D : (delete s[D.str], G);
    }
    function I(D) {
      return D instanceof t._Code && D._items.some((G) => G instanceof t.Name && s[G.str] === 1 && l[G.str] !== void 0);
    }
  }
  function We(_, s) {
    for (const l in s)
      _[l] = (_[l] || 0) - (s[l] || 0);
  }
  function Qe(_) {
    return typeof _ == "boolean" || typeof _ == "number" || _ === null ? !_ : (0, t._)`!${C(_)}`;
  }
  e.not = Qe;
  const ot = v(e.operators.AND);
  function St(..._) {
    return _.reduce(ot);
  }
  e.and = St;
  const it = v(e.operators.OR);
  function j(..._) {
    return _.reduce(it);
  }
  e.or = j;
  function v(_) {
    return (s, l) => s === t.nil ? l : l === t.nil ? s : (0, t._)`${C(s)} ${_} ${C(l)}`;
  }
  function C(_) {
    return _ instanceof t.Name ? _ : (0, t._)`(${_})`;
  }
})(H);
var k = {};
Object.defineProperty(k, "__esModule", { value: !0 });
k.checkStrictMode = k.getErrorPath = k.Type = k.useFunc = k.setEvaluated = k.evaluatedPropsToName = k.mergeEvaluated = k.eachItem = k.unescapeJsonPointer = k.escapeJsonPointer = k.escapeFragment = k.unescapeFragment = k.schemaRefOrVal = k.schemaHasRulesButRef = k.schemaHasRules = k.checkUnknownRules = k.alwaysValidSchema = k.toHash = void 0;
const X = H, ts = Lt;
function rs(e) {
  const t = {};
  for (const r of e)
    t[r] = !0;
  return t;
}
k.toHash = rs;
function ns(e, t) {
  return typeof t == "boolean" ? t : Object.keys(t).length === 0 ? !0 : (ta(e, t), !ra(t, e.self.RULES.all));
}
k.alwaysValidSchema = ns;
function ta(e, t = e.schema) {
  const { opts: r, self: n } = e;
  if (!r.strictSchema || typeof t == "boolean")
    return;
  const a = n.RULES.keywords;
  for (const o in t)
    a[o] || sa(e, `unknown keyword: "${o}"`);
}
k.checkUnknownRules = ta;
function ra(e, t) {
  if (typeof e == "boolean")
    return !e;
  for (const r in e)
    if (t[r])
      return !0;
  return !1;
}
k.schemaHasRules = ra;
function as(e, t) {
  if (typeof e == "boolean")
    return !e;
  for (const r in e)
    if (r !== "$ref" && t.all[r])
      return !0;
  return !1;
}
k.schemaHasRulesButRef = as;
function ss({ topSchemaRef: e, schemaPath: t }, r, n, a) {
  if (!a) {
    if (typeof r == "number" || typeof r == "boolean")
      return r;
    if (typeof r == "string")
      return (0, X._)`${r}`;
  }
  return (0, X._)`${e}${t}${(0, X.getProperty)(n)}`;
}
k.schemaRefOrVal = ss;
function os(e) {
  return na(decodeURIComponent(e));
}
k.unescapeFragment = os;
function is(e) {
  return encodeURIComponent(jr(e));
}
k.escapeFragment = is;
function jr(e) {
  return typeof e == "number" ? `${e}` : e.replace(/~/g, "~0").replace(/\//g, "~1");
}
k.escapeJsonPointer = jr;
function na(e) {
  return e.replace(/~1/g, "/").replace(/~0/g, "~");
}
k.unescapeJsonPointer = na;
function cs(e, t) {
  if (Array.isArray(e))
    for (const r of e)
      t(r);
  else
    t(e);
}
k.eachItem = cs;
function In({ mergeNames: e, mergeToName: t, mergeValues: r, resultToName: n }) {
  return (a, o, c, f) => {
    const y = c === void 0 ? o : c instanceof X.Name ? (o instanceof X.Name ? e(a, o, c) : t(a, o, c), c) : o instanceof X.Name ? (t(a, c, o), o) : r(o, c);
    return f === X.Name && !(y instanceof X.Name) ? n(a, y) : y;
  };
}
k.mergeEvaluated = {
  props: In({
    mergeNames: (e, t, r) => e.if((0, X._)`${r} !== true && ${t} !== undefined`, () => {
      e.if((0, X._)`${t} === true`, () => e.assign(r, !0), () => e.assign(r, (0, X._)`${r} || {}`).code((0, X._)`Object.assign(${r}, ${t})`));
    }),
    mergeToName: (e, t, r) => e.if((0, X._)`${r} !== true`, () => {
      t === !0 ? e.assign(r, !0) : (e.assign(r, (0, X._)`${r} || {}`), Ir(e, r, t));
    }),
    mergeValues: (e, t) => e === !0 ? !0 : { ...e, ...t },
    resultToName: aa
  }),
  items: In({
    mergeNames: (e, t, r) => e.if((0, X._)`${r} !== true && ${t} !== undefined`, () => e.assign(r, (0, X._)`${t} === true ? true : ${r} > ${t} ? ${r} : ${t}`)),
    mergeToName: (e, t, r) => e.if((0, X._)`${r} !== true`, () => e.assign(r, t === !0 ? !0 : (0, X._)`${r} > ${t} ? ${r} : ${t}`)),
    mergeValues: (e, t) => e === !0 ? !0 : Math.max(e, t),
    resultToName: (e, t) => e.var("items", t)
  })
};
function aa(e, t) {
  if (t === !0)
    return e.var("props", !0);
  const r = e.var("props", (0, X._)`{}`);
  return t !== void 0 && Ir(e, r, t), r;
}
k.evaluatedPropsToName = aa;
function Ir(e, t, r) {
  Object.keys(r).forEach((n) => e.assign((0, X._)`${t}${(0, X.getProperty)(n)}`, !0));
}
k.setEvaluated = Ir;
const kn = {};
function us(e, t) {
  return e.scopeValue("func", {
    ref: t,
    code: kn[t.code] || (kn[t.code] = new ts._Code(t.code))
  });
}
k.useFunc = us;
var Sr;
(function(e) {
  e[e.Num = 0] = "Num", e[e.Str = 1] = "Str";
})(Sr || (k.Type = Sr = {}));
function ls(e, t, r) {
  if (e instanceof X.Name) {
    const n = t === Sr.Num;
    return r ? n ? (0, X._)`"[" + ${e} + "]"` : (0, X._)`"['" + ${e} + "']"` : n ? (0, X._)`"/" + ${e}` : (0, X._)`"/" + ${e}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
  }
  return r ? (0, X.getProperty)(e).toString() : "/" + jr(e);
}
k.getErrorPath = ls;
function sa(e, t, r = e.opts.strictSchema) {
  if (r) {
    if (t = `strict mode: ${t}`, r === !0)
      throw new Error(t);
    e.self.logger.warn(t);
  }
}
k.checkStrictMode = sa;
var Ve = {};
Object.defineProperty(Ve, "__esModule", { value: !0 });
const he = H, ds = {
  // validation function arguments
  data: new he.Name("data"),
  // data passed to validation function
  // args passed from referencing schema
  valCxt: new he.Name("valCxt"),
  // validation/data context - should not be used directly, it is destructured to the names below
  instancePath: new he.Name("instancePath"),
  parentData: new he.Name("parentData"),
  parentDataProperty: new he.Name("parentDataProperty"),
  rootData: new he.Name("rootData"),
  // root data - same as the data passed to the first/top validation function
  dynamicAnchors: new he.Name("dynamicAnchors"),
  // used to support recursiveRef and dynamicRef
  // function scoped variables
  vErrors: new he.Name("vErrors"),
  // null or array of validation errors
  errors: new he.Name("errors"),
  // counter of validation errors
  this: new he.Name("this"),
  // "globals"
  self: new he.Name("self"),
  scope: new he.Name("scope"),
  // JTD serialize/parse name for JSON string and position
  json: new he.Name("json"),
  jsonPos: new he.Name("jsonPos"),
  jsonLen: new he.Name("jsonLen"),
  jsonPart: new he.Name("jsonPart")
};
Ve.default = ds;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.extendErrors = e.resetErrorsCount = e.reportExtraError = e.reportError = e.keyword$DataError = e.keywordError = void 0;
  const t = H, r = k, n = Ve;
  e.keywordError = {
    message: ({ keyword: g }) => (0, t.str)`must pass "${g}" keyword validation`
  }, e.keyword$DataError = {
    message: ({ keyword: g, schemaType: h }) => h ? (0, t.str)`"${g}" keyword must be ${h} ($data)` : (0, t.str)`"${g}" keyword is invalid ($data)`
  };
  function a(g, h = e.keywordError, b, T) {
    const { it: A } = g, { gen: M, compositeRule: Q, allErrors: ue } = A, Ee = $(g, h, b);
    T ?? (Q || ue) ? y(M, Ee) : p(A, (0, t._)`[${Ee}]`);
  }
  e.reportError = a;
  function o(g, h = e.keywordError, b) {
    const { it: T } = g, { gen: A, compositeRule: M, allErrors: Q } = T, ue = $(g, h, b);
    y(A, ue), M || Q || p(T, n.default.vErrors);
  }
  e.reportExtraError = o;
  function c(g, h) {
    g.assign(n.default.errors, h), g.if((0, t._)`${n.default.vErrors} !== null`, () => g.if(h, () => g.assign((0, t._)`${n.default.vErrors}.length`, h), () => g.assign(n.default.vErrors, null)));
  }
  e.resetErrorsCount = c;
  function f({ gen: g, keyword: h, schemaValue: b, data: T, errsCount: A, it: M }) {
    if (A === void 0)
      throw new Error("ajv implementation error");
    const Q = g.name("err");
    g.forRange("i", A, n.default.errors, (ue) => {
      g.const(Q, (0, t._)`${n.default.vErrors}[${ue}]`), g.if((0, t._)`${Q}.instancePath === undefined`, () => g.assign((0, t._)`${Q}.instancePath`, (0, t.strConcat)(n.default.instancePath, M.errorPath))), g.assign((0, t._)`${Q}.schemaPath`, (0, t.str)`${M.errSchemaPath}/${h}`), M.opts.verbose && (g.assign((0, t._)`${Q}.schema`, b), g.assign((0, t._)`${Q}.data`, T));
    });
  }
  e.extendErrors = f;
  function y(g, h) {
    const b = g.const("err", h);
    g.if((0, t._)`${n.default.vErrors} === null`, () => g.assign(n.default.vErrors, (0, t._)`[${b}]`), (0, t._)`${n.default.vErrors}.push(${b})`), g.code((0, t._)`${n.default.errors}++`);
  }
  function p(g, h) {
    const { gen: b, validateName: T, schemaEnv: A } = g;
    A.$async ? b.throw((0, t._)`new ${g.ValidationError}(${h})`) : (b.assign((0, t._)`${T}.errors`, h), b.return(!1));
  }
  const m = {
    keyword: new t.Name("keyword"),
    schemaPath: new t.Name("schemaPath"),
    // also used in JTD errors
    params: new t.Name("params"),
    propertyName: new t.Name("propertyName"),
    message: new t.Name("message"),
    schema: new t.Name("schema"),
    parentSchema: new t.Name("parentSchema")
  };
  function $(g, h, b) {
    const { createErrors: T } = g.it;
    return T === !1 ? (0, t._)`{}` : R(g, h, b);
  }
  function R(g, h, b = {}) {
    const { gen: T, it: A } = g, M = [
      O(A, b),
      S(g, b)
    ];
    return P(g, h, M), T.object(...M);
  }
  function O({ errorPath: g }, { instancePath: h }) {
    const b = h ? (0, t.str)`${g}${(0, r.getErrorPath)(h, r.Type.Str)}` : g;
    return [n.default.instancePath, (0, t.strConcat)(n.default.instancePath, b)];
  }
  function S({ keyword: g, it: { errSchemaPath: h } }, { schemaPath: b, parentSchema: T }) {
    let A = T ? h : (0, t.str)`${h}/${g}`;
    return b && (A = (0, t.str)`${A}${(0, r.getErrorPath)(b, r.Type.Str)}`), [m.schemaPath, A];
  }
  function P(g, { params: h, message: b }, T) {
    const { keyword: A, data: M, schemaValue: Q, it: ue } = g, { opts: Ee, propertyName: Oe, topSchemaRef: Fe, schemaPath: Ue } = ue;
    T.push([m.keyword, A], [m.params, typeof h == "function" ? h(g) : h || (0, t._)`{}`]), Ee.messages && T.push([m.message, typeof b == "function" ? b(g) : b]), Ee.verbose && T.push([m.schema, Q], [m.parentSchema, (0, t._)`${Fe}${Ue}`], [n.default.data, M]), Oe && T.push([m.propertyName, Oe]);
  }
})(Kt);
Object.defineProperty(_t, "__esModule", { value: !0 });
_t.boolOrEmptySchema = _t.topBoolOrEmptySchema = void 0;
const fs = Kt, hs = H, ps = Ve, ms = {
  message: "boolean schema is false"
};
function ys(e) {
  const { gen: t, schema: r, validateName: n } = e;
  r === !1 ? oa(e, !1) : typeof r == "object" && r.$async === !0 ? t.return(ps.default.data) : (t.assign((0, hs._)`${n}.errors`, null), t.return(!0));
}
_t.topBoolOrEmptySchema = ys;
function vs(e, t) {
  const { gen: r, schema: n } = e;
  n === !1 ? (r.var(t, !1), oa(e)) : r.var(t, !0);
}
_t.boolOrEmptySchema = vs;
function oa(e, t) {
  const { gen: r, data: n } = e, a = {
    gen: r,
    keyword: "false schema",
    data: n,
    schema: !1,
    schemaCode: !1,
    schemaValue: !1,
    params: {},
    it: e
  };
  (0, fs.reportError)(a, ms, void 0, t);
}
var ce = {}, at = {};
Object.defineProperty(at, "__esModule", { value: !0 });
at.getRules = at.isJSONType = void 0;
const $s = ["string", "number", "integer", "boolean", "null", "object", "array"], gs = new Set($s);
function _s(e) {
  return typeof e == "string" && gs.has(e);
}
at.isJSONType = _s;
function ws() {
  const e = {
    number: { type: "number", rules: [] },
    string: { type: "string", rules: [] },
    array: { type: "array", rules: [] },
    object: { type: "object", rules: [] }
  };
  return {
    types: { ...e, integer: !0, boolean: !0, null: !0 },
    rules: [{ rules: [] }, e.number, e.string, e.array, e.object],
    post: { rules: [] },
    all: {},
    keywords: {}
  };
}
at.getRules = ws;
var ze = {};
Object.defineProperty(ze, "__esModule", { value: !0 });
ze.shouldUseRule = ze.shouldUseGroup = ze.schemaHasRulesForType = void 0;
function Es({ schema: e, self: t }, r) {
  const n = t.RULES.types[r];
  return n && n !== !0 && ia(e, n);
}
ze.schemaHasRulesForType = Es;
function ia(e, t) {
  return t.rules.some((r) => ca(e, r));
}
ze.shouldUseGroup = ia;
function ca(e, t) {
  var r;
  return e[t.keyword] !== void 0 || ((r = t.definition.implements) === null || r === void 0 ? void 0 : r.some((n) => e[n] !== void 0));
}
ze.shouldUseRule = ca;
Object.defineProperty(ce, "__esModule", { value: !0 });
ce.reportTypeError = ce.checkDataTypes = ce.checkDataType = ce.coerceAndCheckDataType = ce.getJSONTypes = ce.getSchemaTypes = ce.DataType = void 0;
const bs = at, Ss = ze, Ps = Kt, L = H, ua = k;
var $t;
(function(e) {
  e[e.Correct = 0] = "Correct", e[e.Wrong = 1] = "Wrong";
})($t || (ce.DataType = $t = {}));
function Ns(e) {
  const t = la(e.type);
  if (t.includes("null")) {
    if (e.nullable === !1)
      throw new Error("type: null contradicts nullable: false");
  } else {
    if (!t.length && e.nullable !== void 0)
      throw new Error('"nullable" cannot be used without "type"');
    e.nullable === !0 && t.push("null");
  }
  return t;
}
ce.getSchemaTypes = Ns;
function la(e) {
  const t = Array.isArray(e) ? e : e ? [e] : [];
  if (t.every(bs.isJSONType))
    return t;
  throw new Error("type must be JSONType or JSONType[]: " + t.join(","));
}
ce.getJSONTypes = la;
function Os(e, t) {
  const { gen: r, data: n, opts: a } = e, o = Cs(t, a.coerceTypes), c = t.length > 0 && !(o.length === 0 && t.length === 1 && (0, Ss.schemaHasRulesForType)(e, t[0]));
  if (c) {
    const f = kr(t, n, a.strictNumbers, $t.Wrong);
    r.if(f, () => {
      o.length ? Rs(e, t, o) : Dr(e);
    });
  }
  return c;
}
ce.coerceAndCheckDataType = Os;
const da = /* @__PURE__ */ new Set(["string", "number", "integer", "boolean", "null"]);
function Cs(e, t) {
  return t ? e.filter((r) => da.has(r) || t === "array" && r === "array") : [];
}
function Rs(e, t, r) {
  const { gen: n, data: a, opts: o } = e, c = n.let("dataType", (0, L._)`typeof ${a}`), f = n.let("coerced", (0, L._)`undefined`);
  o.coerceTypes === "array" && n.if((0, L._)`${c} == 'object' && Array.isArray(${a}) && ${a}.length == 1`, () => n.assign(a, (0, L._)`${a}[0]`).assign(c, (0, L._)`typeof ${a}`).if(kr(t, a, o.strictNumbers), () => n.assign(f, a))), n.if((0, L._)`${f} !== undefined`);
  for (const p of r)
    (da.has(p) || p === "array" && o.coerceTypes === "array") && y(p);
  n.else(), Dr(e), n.endIf(), n.if((0, L._)`${f} !== undefined`, () => {
    n.assign(a, f), Ts(e, f);
  });
  function y(p) {
    switch (p) {
      case "string":
        n.elseIf((0, L._)`${c} == "number" || ${c} == "boolean"`).assign(f, (0, L._)`"" + ${a}`).elseIf((0, L._)`${a} === null`).assign(f, (0, L._)`""`);
        return;
      case "number":
        n.elseIf((0, L._)`${c} == "boolean" || ${a} === null
              || (${c} == "string" && ${a} && ${a} == +${a})`).assign(f, (0, L._)`+${a}`);
        return;
      case "integer":
        n.elseIf((0, L._)`${c} === "boolean" || ${a} === null
              || (${c} === "string" && ${a} && ${a} == +${a} && !(${a} % 1))`).assign(f, (0, L._)`+${a}`);
        return;
      case "boolean":
        n.elseIf((0, L._)`${a} === "false" || ${a} === 0 || ${a} === null`).assign(f, !1).elseIf((0, L._)`${a} === "true" || ${a} === 1`).assign(f, !0);
        return;
      case "null":
        n.elseIf((0, L._)`${a} === "" || ${a} === 0 || ${a} === false`), n.assign(f, null);
        return;
      case "array":
        n.elseIf((0, L._)`${c} === "string" || ${c} === "number"
              || ${c} === "boolean" || ${a} === null`).assign(f, (0, L._)`[${a}]`);
    }
  }
}
function Ts({ gen: e, parentData: t, parentDataProperty: r }, n) {
  e.if((0, L._)`${t} !== undefined`, () => e.assign((0, L._)`${t}[${r}]`, n));
}
function Pr(e, t, r, n = $t.Correct) {
  const a = n === $t.Correct ? L.operators.EQ : L.operators.NEQ;
  let o;
  switch (e) {
    case "null":
      return (0, L._)`${t} ${a} null`;
    case "array":
      o = (0, L._)`Array.isArray(${t})`;
      break;
    case "object":
      o = (0, L._)`${t} && typeof ${t} == "object" && !Array.isArray(${t})`;
      break;
    case "integer":
      o = c((0, L._)`!(${t} % 1) && !isNaN(${t})`);
      break;
    case "number":
      o = c();
      break;
    default:
      return (0, L._)`typeof ${t} ${a} ${e}`;
  }
  return n === $t.Correct ? o : (0, L.not)(o);
  function c(f = L.nil) {
    return (0, L.and)((0, L._)`typeof ${t} == "number"`, f, r ? (0, L._)`isFinite(${t})` : L.nil);
  }
}
ce.checkDataType = Pr;
function kr(e, t, r, n) {
  if (e.length === 1)
    return Pr(e[0], t, r, n);
  let a;
  const o = (0, ua.toHash)(e);
  if (o.array && o.object) {
    const c = (0, L._)`typeof ${t} != "object"`;
    a = o.null ? c : (0, L._)`!${t} || ${c}`, delete o.null, delete o.array, delete o.object;
  } else
    a = L.nil;
  o.number && delete o.integer;
  for (const c in o)
    a = (0, L.and)(a, Pr(c, t, r, n));
  return a;
}
ce.checkDataTypes = kr;
const js = {
  message: ({ schema: e }) => `must be ${e}`,
  params: ({ schema: e, schemaValue: t }) => typeof e == "string" ? (0, L._)`{type: ${e}}` : (0, L._)`{type: ${t}}`
};
function Dr(e) {
  const t = Is(e);
  (0, Ps.reportError)(t, js);
}
ce.reportTypeError = Dr;
function Is(e) {
  const { gen: t, data: r, schema: n } = e, a = (0, ua.schemaRefOrVal)(e, n, "type");
  return {
    gen: t,
    keyword: "type",
    data: r,
    schema: n.type,
    schemaCode: a,
    schemaValue: a,
    parentSchema: n,
    params: {},
    it: e
  };
}
var dr = {};
Object.defineProperty(dr, "__esModule", { value: !0 });
dr.assignDefaults = void 0;
const mt = H, ks = k;
function Ds(e, t) {
  const { properties: r, items: n } = e.schema;
  if (t === "object" && r)
    for (const a in r)
      Dn(e, a, r[a].default);
  else
    t === "array" && Array.isArray(n) && n.forEach((a, o) => Dn(e, o, a.default));
}
dr.assignDefaults = Ds;
function Dn(e, t, r) {
  const { gen: n, compositeRule: a, data: o, opts: c } = e;
  if (r === void 0)
    return;
  const f = (0, mt._)`${o}${(0, mt.getProperty)(t)}`;
  if (a) {
    (0, ks.checkStrictMode)(e, `default is ignored for: ${f}`);
    return;
  }
  let y = (0, mt._)`${f} === undefined`;
  c.useDefaults === "empty" && (y = (0, mt._)`${y} || ${f} === null || ${f} === ""`), n.if(y, (0, mt._)`${f} = ${(0, mt.stringify)(r)}`);
}
var Me = {}, K = {};
Object.defineProperty(K, "__esModule", { value: !0 });
K.validateUnion = K.validateArray = K.usePattern = K.callValidateCode = K.schemaProperties = K.allSchemaProperties = K.noPropertyInData = K.propertyInData = K.isOwnProperty = K.hasPropFunc = K.reportMissingProp = K.checkMissingProp = K.checkReportMissingProp = void 0;
const x = H, Ar = k, He = Ve, As = k;
function Ms(e, t) {
  const { gen: r, data: n, it: a } = e;
  r.if(Vr(r, n, t, a.opts.ownProperties), () => {
    e.setParams({ missingProperty: (0, x._)`${t}` }, !0), e.error();
  });
}
K.checkReportMissingProp = Ms;
function Vs({ gen: e, data: t, it: { opts: r } }, n, a) {
  return (0, x.or)(...n.map((o) => (0, x.and)(Vr(e, t, o, r.ownProperties), (0, x._)`${a} = ${o}`)));
}
K.checkMissingProp = Vs;
function Fs(e, t) {
  e.setParams({ missingProperty: t }, !0), e.error();
}
K.reportMissingProp = Fs;
function fa(e) {
  return e.scopeValue("func", {
    // eslint-disable-next-line @typescript-eslint/unbound-method
    ref: Object.prototype.hasOwnProperty,
    code: (0, x._)`Object.prototype.hasOwnProperty`
  });
}
K.hasPropFunc = fa;
function Mr(e, t, r) {
  return (0, x._)`${fa(e)}.call(${t}, ${r})`;
}
K.isOwnProperty = Mr;
function Us(e, t, r, n) {
  const a = (0, x._)`${t}${(0, x.getProperty)(r)} !== undefined`;
  return n ? (0, x._)`${a} && ${Mr(e, t, r)}` : a;
}
K.propertyInData = Us;
function Vr(e, t, r, n) {
  const a = (0, x._)`${t}${(0, x.getProperty)(r)} === undefined`;
  return n ? (0, x.or)(a, (0, x.not)(Mr(e, t, r))) : a;
}
K.noPropertyInData = Vr;
function ha(e) {
  return e ? Object.keys(e).filter((t) => t !== "__proto__") : [];
}
K.allSchemaProperties = ha;
function qs(e, t) {
  return ha(t).filter((r) => !(0, Ar.alwaysValidSchema)(e, t[r]));
}
K.schemaProperties = qs;
function zs({ schemaCode: e, data: t, it: { gen: r, topSchemaRef: n, schemaPath: a, errorPath: o }, it: c }, f, y, p) {
  const m = p ? (0, x._)`${e}, ${t}, ${n}${a}` : t, $ = [
    [He.default.instancePath, (0, x.strConcat)(He.default.instancePath, o)],
    [He.default.parentData, c.parentData],
    [He.default.parentDataProperty, c.parentDataProperty],
    [He.default.rootData, He.default.rootData]
  ];
  c.opts.dynamicRef && $.push([He.default.dynamicAnchors, He.default.dynamicAnchors]);
  const R = (0, x._)`${m}, ${r.object(...$)}`;
  return y !== x.nil ? (0, x._)`${f}.call(${y}, ${R})` : (0, x._)`${f}(${R})`;
}
K.callValidateCode = zs;
const Ls = (0, x._)`new RegExp`;
function Ks({ gen: e, it: { opts: t } }, r) {
  const n = t.unicodeRegExp ? "u" : "", { regExp: a } = t.code, o = a(r, n);
  return e.scopeValue("pattern", {
    key: o.toString(),
    ref: o,
    code: (0, x._)`${a.code === "new RegExp" ? Ls : (0, As.useFunc)(e, a)}(${r}, ${n})`
  });
}
K.usePattern = Ks;
function Hs(e) {
  const { gen: t, data: r, keyword: n, it: a } = e, o = t.name("valid");
  if (a.allErrors) {
    const f = t.let("valid", !0);
    return c(() => t.assign(f, !1)), f;
  }
  return t.var(o, !0), c(() => t.break()), o;
  function c(f) {
    const y = t.const("len", (0, x._)`${r}.length`);
    t.forRange("i", 0, y, (p) => {
      e.subschema({
        keyword: n,
        dataProp: p,
        dataPropType: Ar.Type.Num
      }, o), t.if((0, x.not)(o), f);
    });
  }
}
K.validateArray = Hs;
function Gs(e) {
  const { gen: t, schema: r, keyword: n, it: a } = e;
  if (!Array.isArray(r))
    throw new Error("ajv implementation error");
  if (r.some((y) => (0, Ar.alwaysValidSchema)(a, y)) && !a.opts.unevaluated)
    return;
  const c = t.let("valid", !1), f = t.name("_valid");
  t.block(() => r.forEach((y, p) => {
    const m = e.subschema({
      keyword: n,
      schemaProp: p,
      compositeRule: !0
    }, f);
    t.assign(c, (0, x._)`${c} || ${f}`), e.mergeValidEvaluated(m, f) || t.if((0, x.not)(c));
  })), e.result(c, () => e.reset(), () => e.error(!0));
}
K.validateUnion = Gs;
Object.defineProperty(Me, "__esModule", { value: !0 });
Me.validateKeywordUsage = Me.validSchemaType = Me.funcKeywordCode = Me.macroKeywordCode = void 0;
const pe = H, tt = Ve, Js = K, Bs = Kt;
function Ws(e, t) {
  const { gen: r, keyword: n, schema: a, parentSchema: o, it: c } = e, f = t.macro.call(c.self, a, o, c), y = pa(r, n, f);
  c.opts.validateSchema !== !1 && c.self.validateSchema(f, !0);
  const p = r.name("valid");
  e.subschema({
    schema: f,
    schemaPath: pe.nil,
    errSchemaPath: `${c.errSchemaPath}/${n}`,
    topSchemaRef: y,
    compositeRule: !0
  }, p), e.pass(p, () => e.error(!0));
}
Me.macroKeywordCode = Ws;
function Qs(e, t) {
  var r;
  const { gen: n, keyword: a, schema: o, parentSchema: c, $data: f, it: y } = e;
  Ys(y, t);
  const p = !f && t.compile ? t.compile.call(y.self, o, c, y) : t.validate, m = pa(n, a, p), $ = n.let("valid");
  e.block$data($, R), e.ok((r = t.valid) !== null && r !== void 0 ? r : $);
  function R() {
    if (t.errors === !1)
      P(), t.modifying && An(e), g(() => e.error());
    else {
      const h = t.async ? O() : S();
      t.modifying && An(e), g(() => Xs(e, h));
    }
  }
  function O() {
    const h = n.let("ruleErrs", null);
    return n.try(() => P((0, pe._)`await `), (b) => n.assign($, !1).if((0, pe._)`${b} instanceof ${y.ValidationError}`, () => n.assign(h, (0, pe._)`${b}.errors`), () => n.throw(b))), h;
  }
  function S() {
    const h = (0, pe._)`${m}.errors`;
    return n.assign(h, null), P(pe.nil), h;
  }
  function P(h = t.async ? (0, pe._)`await ` : pe.nil) {
    const b = y.opts.passContext ? tt.default.this : tt.default.self, T = !("compile" in t && !f || t.schema === !1);
    n.assign($, (0, pe._)`${h}${(0, Js.callValidateCode)(e, m, b, T)}`, t.modifying);
  }
  function g(h) {
    var b;
    n.if((0, pe.not)((b = t.valid) !== null && b !== void 0 ? b : $), h);
  }
}
Me.funcKeywordCode = Qs;
function An(e) {
  const { gen: t, data: r, it: n } = e;
  t.if(n.parentData, () => t.assign(r, (0, pe._)`${n.parentData}[${n.parentDataProperty}]`));
}
function Xs(e, t) {
  const { gen: r } = e;
  r.if((0, pe._)`Array.isArray(${t})`, () => {
    r.assign(tt.default.vErrors, (0, pe._)`${tt.default.vErrors} === null ? ${t} : ${tt.default.vErrors}.concat(${t})`).assign(tt.default.errors, (0, pe._)`${tt.default.vErrors}.length`), (0, Bs.extendErrors)(e);
  }, () => e.error());
}
function Ys({ schemaEnv: e }, t) {
  if (t.async && !e.$async)
    throw new Error("async keyword in sync schema");
}
function pa(e, t, r) {
  if (r === void 0)
    throw new Error(`keyword "${t}" failed to compile`);
  return e.scopeValue("keyword", typeof r == "function" ? { ref: r } : { ref: r, code: (0, pe.stringify)(r) });
}
function Zs(e, t, r = !1) {
  return !t.length || t.some((n) => n === "array" ? Array.isArray(e) : n === "object" ? e && typeof e == "object" && !Array.isArray(e) : typeof e == n || r && typeof e > "u");
}
Me.validSchemaType = Zs;
function xs({ schema: e, opts: t, self: r, errSchemaPath: n }, a, o) {
  if (Array.isArray(a.keyword) ? !a.keyword.includes(o) : a.keyword !== o)
    throw new Error("ajv implementation error");
  const c = a.dependencies;
  if (c != null && c.some((f) => !Object.prototype.hasOwnProperty.call(e, f)))
    throw new Error(`parent schema must have dependencies of ${o}: ${c.join(",")}`);
  if (a.validateSchema && !a.validateSchema(e[o])) {
    const y = `keyword "${o}" value is invalid at path "${n}": ` + r.errorsText(a.validateSchema.errors);
    if (t.validateSchema === "log")
      r.logger.error(y);
    else
      throw new Error(y);
  }
}
Me.validateKeywordUsage = xs;
var Be = {};
Object.defineProperty(Be, "__esModule", { value: !0 });
Be.extendSubschemaMode = Be.extendSubschemaData = Be.getSubschema = void 0;
const Ae = H, ma = k;
function eo(e, { keyword: t, schemaProp: r, schema: n, schemaPath: a, errSchemaPath: o, topSchemaRef: c }) {
  if (t !== void 0 && n !== void 0)
    throw new Error('both "keyword" and "schema" passed, only one allowed');
  if (t !== void 0) {
    const f = e.schema[t];
    return r === void 0 ? {
      schema: f,
      schemaPath: (0, Ae._)`${e.schemaPath}${(0, Ae.getProperty)(t)}`,
      errSchemaPath: `${e.errSchemaPath}/${t}`
    } : {
      schema: f[r],
      schemaPath: (0, Ae._)`${e.schemaPath}${(0, Ae.getProperty)(t)}${(0, Ae.getProperty)(r)}`,
      errSchemaPath: `${e.errSchemaPath}/${t}/${(0, ma.escapeFragment)(r)}`
    };
  }
  if (n !== void 0) {
    if (a === void 0 || o === void 0 || c === void 0)
      throw new Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');
    return {
      schema: n,
      schemaPath: a,
      topSchemaRef: c,
      errSchemaPath: o
    };
  }
  throw new Error('either "keyword" or "schema" must be passed');
}
Be.getSubschema = eo;
function to(e, t, { dataProp: r, dataPropType: n, data: a, dataTypes: o, propertyName: c }) {
  if (a !== void 0 && r !== void 0)
    throw new Error('both "data" and "dataProp" passed, only one allowed');
  const { gen: f } = t;
  if (r !== void 0) {
    const { errorPath: p, dataPathArr: m, opts: $ } = t, R = f.let("data", (0, Ae._)`${t.data}${(0, Ae.getProperty)(r)}`, !0);
    y(R), e.errorPath = (0, Ae.str)`${p}${(0, ma.getErrorPath)(r, n, $.jsPropertySyntax)}`, e.parentDataProperty = (0, Ae._)`${r}`, e.dataPathArr = [...m, e.parentDataProperty];
  }
  if (a !== void 0) {
    const p = a instanceof Ae.Name ? a : f.let("data", a, !0);
    y(p), c !== void 0 && (e.propertyName = c);
  }
  o && (e.dataTypes = o);
  function y(p) {
    e.data = p, e.dataLevel = t.dataLevel + 1, e.dataTypes = [], t.definedProperties = /* @__PURE__ */ new Set(), e.parentData = t.data, e.dataNames = [...t.dataNames, p];
  }
}
Be.extendSubschemaData = to;
function ro(e, { jtdDiscriminator: t, jtdMetadata: r, compositeRule: n, createErrors: a, allErrors: o }) {
  n !== void 0 && (e.compositeRule = n), a !== void 0 && (e.createErrors = a), o !== void 0 && (e.allErrors = o), e.jtdDiscriminator = t, e.jtdMetadata = r;
}
Be.extendSubschemaMode = ro;
var de = {}, ya = function e(t, r) {
  if (t === r)
    return !0;
  if (t && r && typeof t == "object" && typeof r == "object") {
    if (t.constructor !== r.constructor)
      return !1;
    var n, a, o;
    if (Array.isArray(t)) {
      if (n = t.length, n != r.length)
        return !1;
      for (a = n; a-- !== 0; )
        if (!e(t[a], r[a]))
          return !1;
      return !0;
    }
    if (t.constructor === RegExp)
      return t.source === r.source && t.flags === r.flags;
    if (t.valueOf !== Object.prototype.valueOf)
      return t.valueOf() === r.valueOf();
    if (t.toString !== Object.prototype.toString)
      return t.toString() === r.toString();
    if (o = Object.keys(t), n = o.length, n !== Object.keys(r).length)
      return !1;
    for (a = n; a-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(r, o[a]))
        return !1;
    for (a = n; a-- !== 0; ) {
      var c = o[a];
      if (!e(t[c], r[c]))
        return !1;
    }
    return !0;
  }
  return t !== t && r !== r;
}, va = { exports: {} }, Je = va.exports = function(e, t, r) {
  typeof t == "function" && (r = t, t = {}), r = t.cb || r;
  var n = typeof r == "function" ? r : r.pre || function() {
  }, a = r.post || function() {
  };
  rr(t, n, a, e, "", e);
};
Je.keywords = {
  additionalItems: !0,
  items: !0,
  contains: !0,
  additionalProperties: !0,
  propertyNames: !0,
  not: !0,
  if: !0,
  then: !0,
  else: !0
};
Je.arrayKeywords = {
  items: !0,
  allOf: !0,
  anyOf: !0,
  oneOf: !0
};
Je.propsKeywords = {
  $defs: !0,
  definitions: !0,
  properties: !0,
  patternProperties: !0,
  dependencies: !0
};
Je.skipKeywords = {
  default: !0,
  enum: !0,
  const: !0,
  required: !0,
  maximum: !0,
  minimum: !0,
  exclusiveMaximum: !0,
  exclusiveMinimum: !0,
  multipleOf: !0,
  maxLength: !0,
  minLength: !0,
  pattern: !0,
  format: !0,
  maxItems: !0,
  minItems: !0,
  uniqueItems: !0,
  maxProperties: !0,
  minProperties: !0
};
function rr(e, t, r, n, a, o, c, f, y, p) {
  if (n && typeof n == "object" && !Array.isArray(n)) {
    t(n, a, o, c, f, y, p);
    for (var m in n) {
      var $ = n[m];
      if (Array.isArray($)) {
        if (m in Je.arrayKeywords)
          for (var R = 0; R < $.length; R++)
            rr(e, t, r, $[R], a + "/" + m + "/" + R, o, a, m, n, R);
      } else if (m in Je.propsKeywords) {
        if ($ && typeof $ == "object")
          for (var O in $)
            rr(e, t, r, $[O], a + "/" + m + "/" + no(O), o, a, m, n, O);
      } else
        (m in Je.keywords || e.allKeys && !(m in Je.skipKeywords)) && rr(e, t, r, $, a + "/" + m, o, a, m, n);
    }
    r(n, a, o, c, f, y, p);
  }
}
function no(e) {
  return e.replace(/~/g, "~0").replace(/\//g, "~1");
}
var ao = va.exports;
Object.defineProperty(de, "__esModule", { value: !0 });
de.getSchemaRefs = de.resolveUrl = de.normalizeId = de._getFullPath = de.getFullPath = de.inlineRef = void 0;
const so = k, oo = ya, io = ao, co = /* @__PURE__ */ new Set([
  "type",
  "format",
  "pattern",
  "maxLength",
  "minLength",
  "maxProperties",
  "minProperties",
  "maxItems",
  "minItems",
  "maximum",
  "minimum",
  "uniqueItems",
  "multipleOf",
  "required",
  "enum",
  "const"
]);
function uo(e, t = !0) {
  return typeof e == "boolean" ? !0 : t === !0 ? !Nr(e) : t ? $a(e) <= t : !1;
}
de.inlineRef = uo;
const lo = /* @__PURE__ */ new Set([
  "$ref",
  "$recursiveRef",
  "$recursiveAnchor",
  "$dynamicRef",
  "$dynamicAnchor"
]);
function Nr(e) {
  for (const t in e) {
    if (lo.has(t))
      return !0;
    const r = e[t];
    if (Array.isArray(r) && r.some(Nr) || typeof r == "object" && Nr(r))
      return !0;
  }
  return !1;
}
function $a(e) {
  let t = 0;
  for (const r in e) {
    if (r === "$ref")
      return 1 / 0;
    if (t++, !co.has(r) && (typeof e[r] == "object" && (0, so.eachItem)(e[r], (n) => t += $a(n)), t === 1 / 0))
      return 1 / 0;
  }
  return t;
}
function ga(e, t = "", r) {
  r !== !1 && (t = gt(t));
  const n = e.parse(t);
  return _a(e, n);
}
de.getFullPath = ga;
function _a(e, t) {
  return e.serialize(t).split("#")[0] + "#";
}
de._getFullPath = _a;
const fo = /#\/?$/;
function gt(e) {
  return e ? e.replace(fo, "") : "";
}
de.normalizeId = gt;
function ho(e, t, r) {
  return r = gt(r), e.resolve(t, r);
}
de.resolveUrl = ho;
const po = /^[a-z_][-a-z0-9._]*$/i;
function mo(e, t) {
  if (typeof e == "boolean")
    return {};
  const { schemaId: r, uriResolver: n } = this.opts, a = gt(e[r] || t), o = { "": a }, c = ga(n, a, !1), f = {}, y = /* @__PURE__ */ new Set();
  return io(e, { allKeys: !0 }, ($, R, O, S) => {
    if (S === void 0)
      return;
    const P = c + R;
    let g = o[S];
    typeof $[r] == "string" && (g = h.call(this, $[r])), b.call(this, $.$anchor), b.call(this, $.$dynamicAnchor), o[R] = g;
    function h(T) {
      const A = this.opts.uriResolver.resolve;
      if (T = gt(g ? A(g, T) : T), y.has(T))
        throw m(T);
      y.add(T);
      let M = this.refs[T];
      return typeof M == "string" && (M = this.refs[M]), typeof M == "object" ? p($, M.schema, T) : T !== gt(P) && (T[0] === "#" ? (p($, f[T], T), f[T] = $) : this.refs[T] = P), T;
    }
    function b(T) {
      if (typeof T == "string") {
        if (!po.test(T))
          throw new Error(`invalid anchor "${T}"`);
        h.call(this, `#${T}`);
      }
    }
  }), f;
  function p($, R, O) {
    if (R !== void 0 && !oo($, R))
      throw m(O);
  }
  function m($) {
    return new Error(`reference "${$}" resolves to more than one schema`);
  }
}
de.getSchemaRefs = mo;
Object.defineProperty(Ne, "__esModule", { value: !0 });
Ne.getData = Ne.KeywordCxt = Ne.validateFunctionCode = void 0;
const wa = _t, Mn = ce, Fr = ze, or = ce, yo = dr, Vt = Me, vr = Be, V = H, q = Ve, vo = de, Le = k, Dt = Kt;
function $o(e) {
  if (Sa(e) && (Pa(e), ba(e))) {
    wo(e);
    return;
  }
  Ea(e, () => (0, wa.topBoolOrEmptySchema)(e));
}
Ne.validateFunctionCode = $o;
function Ea({ gen: e, validateName: t, schema: r, schemaEnv: n, opts: a }, o) {
  a.code.es5 ? e.func(t, (0, V._)`${q.default.data}, ${q.default.valCxt}`, n.$async, () => {
    e.code((0, V._)`"use strict"; ${Vn(r, a)}`), _o(e, a), e.code(o);
  }) : e.func(t, (0, V._)`${q.default.data}, ${go(a)}`, n.$async, () => e.code(Vn(r, a)).code(o));
}
function go(e) {
  return (0, V._)`{${q.default.instancePath}="", ${q.default.parentData}, ${q.default.parentDataProperty}, ${q.default.rootData}=${q.default.data}${e.dynamicRef ? (0, V._)`, ${q.default.dynamicAnchors}={}` : V.nil}}={}`;
}
function _o(e, t) {
  e.if(q.default.valCxt, () => {
    e.var(q.default.instancePath, (0, V._)`${q.default.valCxt}.${q.default.instancePath}`), e.var(q.default.parentData, (0, V._)`${q.default.valCxt}.${q.default.parentData}`), e.var(q.default.parentDataProperty, (0, V._)`${q.default.valCxt}.${q.default.parentDataProperty}`), e.var(q.default.rootData, (0, V._)`${q.default.valCxt}.${q.default.rootData}`), t.dynamicRef && e.var(q.default.dynamicAnchors, (0, V._)`${q.default.valCxt}.${q.default.dynamicAnchors}`);
  }, () => {
    e.var(q.default.instancePath, (0, V._)`""`), e.var(q.default.parentData, (0, V._)`undefined`), e.var(q.default.parentDataProperty, (0, V._)`undefined`), e.var(q.default.rootData, q.default.data), t.dynamicRef && e.var(q.default.dynamicAnchors, (0, V._)`{}`);
  });
}
function wo(e) {
  const { schema: t, opts: r, gen: n } = e;
  Ea(e, () => {
    r.$comment && t.$comment && Oa(e), No(e), n.let(q.default.vErrors, null), n.let(q.default.errors, 0), r.unevaluated && Eo(e), Na(e), Ro(e);
  });
}
function Eo(e) {
  const { gen: t, validateName: r } = e;
  e.evaluated = t.const("evaluated", (0, V._)`${r}.evaluated`), t.if((0, V._)`${e.evaluated}.dynamicProps`, () => t.assign((0, V._)`${e.evaluated}.props`, (0, V._)`undefined`)), t.if((0, V._)`${e.evaluated}.dynamicItems`, () => t.assign((0, V._)`${e.evaluated}.items`, (0, V._)`undefined`));
}
function Vn(e, t) {
  const r = typeof e == "object" && e[t.schemaId];
  return r && (t.code.source || t.code.process) ? (0, V._)`/*# sourceURL=${r} */` : V.nil;
}
function bo(e, t) {
  if (Sa(e) && (Pa(e), ba(e))) {
    So(e, t);
    return;
  }
  (0, wa.boolOrEmptySchema)(e, t);
}
function ba({ schema: e, self: t }) {
  if (typeof e == "boolean")
    return !e;
  for (const r in e)
    if (t.RULES.all[r])
      return !0;
  return !1;
}
function Sa(e) {
  return typeof e.schema != "boolean";
}
function So(e, t) {
  const { schema: r, gen: n, opts: a } = e;
  a.$comment && r.$comment && Oa(e), Oo(e), Co(e);
  const o = n.const("_errs", q.default.errors);
  Na(e, o), n.var(t, (0, V._)`${o} === ${q.default.errors}`);
}
function Pa(e) {
  (0, Le.checkUnknownRules)(e), Po(e);
}
function Na(e, t) {
  if (e.opts.jtd)
    return Fn(e, [], !1, t);
  const r = (0, Mn.getSchemaTypes)(e.schema), n = (0, Mn.coerceAndCheckDataType)(e, r);
  Fn(e, r, !n, t);
}
function Po(e) {
  const { schema: t, errSchemaPath: r, opts: n, self: a } = e;
  t.$ref && n.ignoreKeywordsWithRef && (0, Le.schemaHasRulesButRef)(t, a.RULES) && a.logger.warn(`$ref: keywords ignored in schema at path "${r}"`);
}
function No(e) {
  const { schema: t, opts: r } = e;
  t.default !== void 0 && r.useDefaults && r.strictSchema && (0, Le.checkStrictMode)(e, "default is ignored in the schema root");
}
function Oo(e) {
  const t = e.schema[e.opts.schemaId];
  t && (e.baseId = (0, vo.resolveUrl)(e.opts.uriResolver, e.baseId, t));
}
function Co(e) {
  if (e.schema.$async && !e.schemaEnv.$async)
    throw new Error("async schema in sync schema");
}
function Oa({ gen: e, schemaEnv: t, schema: r, errSchemaPath: n, opts: a }) {
  const o = r.$comment;
  if (a.$comment === !0)
    e.code((0, V._)`${q.default.self}.logger.log(${o})`);
  else if (typeof a.$comment == "function") {
    const c = (0, V.str)`${n}/$comment`, f = e.scopeValue("root", { ref: t.root });
    e.code((0, V._)`${q.default.self}.opts.$comment(${o}, ${c}, ${f}.schema)`);
  }
}
function Ro(e) {
  const { gen: t, schemaEnv: r, validateName: n, ValidationError: a, opts: o } = e;
  r.$async ? t.if((0, V._)`${q.default.errors} === 0`, () => t.return(q.default.data), () => t.throw((0, V._)`new ${a}(${q.default.vErrors})`)) : (t.assign((0, V._)`${n}.errors`, q.default.vErrors), o.unevaluated && To(e), t.return((0, V._)`${q.default.errors} === 0`));
}
function To({ gen: e, evaluated: t, props: r, items: n }) {
  r instanceof V.Name && e.assign((0, V._)`${t}.props`, r), n instanceof V.Name && e.assign((0, V._)`${t}.items`, n);
}
function Fn(e, t, r, n) {
  const { gen: a, schema: o, data: c, allErrors: f, opts: y, self: p } = e, { RULES: m } = p;
  if (o.$ref && (y.ignoreKeywordsWithRef || !(0, Le.schemaHasRulesButRef)(o, m))) {
    a.block(() => Ta(e, "$ref", m.all.$ref.definition));
    return;
  }
  y.jtd || jo(e, t), a.block(() => {
    for (const R of m.rules)
      $(R);
    $(m.post);
  });
  function $(R) {
    (0, Fr.shouldUseGroup)(o, R) && (R.type ? (a.if((0, or.checkDataType)(R.type, c, y.strictNumbers)), Un(e, R), t.length === 1 && t[0] === R.type && r && (a.else(), (0, or.reportTypeError)(e)), a.endIf()) : Un(e, R), f || a.if((0, V._)`${q.default.errors} === ${n || 0}`));
  }
}
function Un(e, t) {
  const { gen: r, schema: n, opts: { useDefaults: a } } = e;
  a && (0, yo.assignDefaults)(e, t.type), r.block(() => {
    for (const o of t.rules)
      (0, Fr.shouldUseRule)(n, o) && Ta(e, o.keyword, o.definition, t.type);
  });
}
function jo(e, t) {
  e.schemaEnv.meta || !e.opts.strictTypes || (Io(e, t), e.opts.allowUnionTypes || ko(e, t), Do(e, e.dataTypes));
}
function Io(e, t) {
  if (t.length) {
    if (!e.dataTypes.length) {
      e.dataTypes = t;
      return;
    }
    t.forEach((r) => {
      Ca(e.dataTypes, r) || Ur(e, `type "${r}" not allowed by context "${e.dataTypes.join(",")}"`);
    }), Mo(e, t);
  }
}
function ko(e, t) {
  t.length > 1 && !(t.length === 2 && t.includes("null")) && Ur(e, "use allowUnionTypes to allow union type keyword");
}
function Do(e, t) {
  const r = e.self.RULES.all;
  for (const n in r) {
    const a = r[n];
    if (typeof a == "object" && (0, Fr.shouldUseRule)(e.schema, a)) {
      const { type: o } = a.definition;
      o.length && !o.some((c) => Ao(t, c)) && Ur(e, `missing type "${o.join(",")}" for keyword "${n}"`);
    }
  }
}
function Ao(e, t) {
  return e.includes(t) || t === "number" && e.includes("integer");
}
function Ca(e, t) {
  return e.includes(t) || t === "integer" && e.includes("number");
}
function Mo(e, t) {
  const r = [];
  for (const n of e.dataTypes)
    Ca(t, n) ? r.push(n) : t.includes("integer") && n === "number" && r.push("integer");
  e.dataTypes = r;
}
function Ur(e, t) {
  const r = e.schemaEnv.baseId + e.errSchemaPath;
  t += ` at "${r}" (strictTypes)`, (0, Le.checkStrictMode)(e, t, e.opts.strictTypes);
}
class Ra {
  constructor(t, r, n) {
    if ((0, Vt.validateKeywordUsage)(t, r, n), this.gen = t.gen, this.allErrors = t.allErrors, this.keyword = n, this.data = t.data, this.schema = t.schema[n], this.$data = r.$data && t.opts.$data && this.schema && this.schema.$data, this.schemaValue = (0, Le.schemaRefOrVal)(t, this.schema, n, this.$data), this.schemaType = r.schemaType, this.parentSchema = t.schema, this.params = {}, this.it = t, this.def = r, this.$data)
      this.schemaCode = t.gen.const("vSchema", ja(this.$data, t));
    else if (this.schemaCode = this.schemaValue, !(0, Vt.validSchemaType)(this.schema, r.schemaType, r.allowUndefined))
      throw new Error(`${n} value must be ${JSON.stringify(r.schemaType)}`);
    ("code" in r ? r.trackErrors : r.errors !== !1) && (this.errsCount = t.gen.const("_errs", q.default.errors));
  }
  result(t, r, n) {
    this.failResult((0, V.not)(t), r, n);
  }
  failResult(t, r, n) {
    this.gen.if(t), n ? n() : this.error(), r ? (this.gen.else(), r(), this.allErrors && this.gen.endIf()) : this.allErrors ? this.gen.endIf() : this.gen.else();
  }
  pass(t, r) {
    this.failResult((0, V.not)(t), void 0, r);
  }
  fail(t) {
    if (t === void 0) {
      this.error(), this.allErrors || this.gen.if(!1);
      return;
    }
    this.gen.if(t), this.error(), this.allErrors ? this.gen.endIf() : this.gen.else();
  }
  fail$data(t) {
    if (!this.$data)
      return this.fail(t);
    const { schemaCode: r } = this;
    this.fail((0, V._)`${r} !== undefined && (${(0, V.or)(this.invalid$data(), t)})`);
  }
  error(t, r, n) {
    if (r) {
      this.setParams(r), this._error(t, n), this.setParams({});
      return;
    }
    this._error(t, n);
  }
  _error(t, r) {
    (t ? Dt.reportExtraError : Dt.reportError)(this, this.def.error, r);
  }
  $dataError() {
    (0, Dt.reportError)(this, this.def.$dataError || Dt.keyword$DataError);
  }
  reset() {
    if (this.errsCount === void 0)
      throw new Error('add "trackErrors" to keyword definition');
    (0, Dt.resetErrorsCount)(this.gen, this.errsCount);
  }
  ok(t) {
    this.allErrors || this.gen.if(t);
  }
  setParams(t, r) {
    r ? Object.assign(this.params, t) : this.params = t;
  }
  block$data(t, r, n = V.nil) {
    this.gen.block(() => {
      this.check$data(t, n), r();
    });
  }
  check$data(t = V.nil, r = V.nil) {
    if (!this.$data)
      return;
    const { gen: n, schemaCode: a, schemaType: o, def: c } = this;
    n.if((0, V.or)((0, V._)`${a} === undefined`, r)), t !== V.nil && n.assign(t, !0), (o.length || c.validateSchema) && (n.elseIf(this.invalid$data()), this.$dataError(), t !== V.nil && n.assign(t, !1)), n.else();
  }
  invalid$data() {
    const { gen: t, schemaCode: r, schemaType: n, def: a, it: o } = this;
    return (0, V.or)(c(), f());
    function c() {
      if (n.length) {
        if (!(r instanceof V.Name))
          throw new Error("ajv implementation error");
        const y = Array.isArray(n) ? n : [n];
        return (0, V._)`${(0, or.checkDataTypes)(y, r, o.opts.strictNumbers, or.DataType.Wrong)}`;
      }
      return V.nil;
    }
    function f() {
      if (a.validateSchema) {
        const y = t.scopeValue("validate$data", { ref: a.validateSchema });
        return (0, V._)`!${y}(${r})`;
      }
      return V.nil;
    }
  }
  subschema(t, r) {
    const n = (0, vr.getSubschema)(this.it, t);
    (0, vr.extendSubschemaData)(n, this.it, t), (0, vr.extendSubschemaMode)(n, t);
    const a = { ...this.it, ...n, items: void 0, props: void 0 };
    return bo(a, r), a;
  }
  mergeEvaluated(t, r) {
    const { it: n, gen: a } = this;
    n.opts.unevaluated && (n.props !== !0 && t.props !== void 0 && (n.props = Le.mergeEvaluated.props(a, t.props, n.props, r)), n.items !== !0 && t.items !== void 0 && (n.items = Le.mergeEvaluated.items(a, t.items, n.items, r)));
  }
  mergeValidEvaluated(t, r) {
    const { it: n, gen: a } = this;
    if (n.opts.unevaluated && (n.props !== !0 || n.items !== !0))
      return a.if(r, () => this.mergeEvaluated(t, V.Name)), !0;
  }
}
Ne.KeywordCxt = Ra;
function Ta(e, t, r, n) {
  const a = new Ra(e, r, t);
  "code" in r ? r.code(a, n) : a.$data && r.validate ? (0, Vt.funcKeywordCode)(a, r) : "macro" in r ? (0, Vt.macroKeywordCode)(a, r) : (r.compile || r.validate) && (0, Vt.funcKeywordCode)(a, r);
}
const Vo = /^\/(?:[^~]|~0|~1)*$/, Fo = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
function ja(e, { dataLevel: t, dataNames: r, dataPathArr: n }) {
  let a, o;
  if (e === "")
    return q.default.rootData;
  if (e[0] === "/") {
    if (!Vo.test(e))
      throw new Error(`Invalid JSON-pointer: ${e}`);
    a = e, o = q.default.rootData;
  } else {
    const p = Fo.exec(e);
    if (!p)
      throw new Error(`Invalid JSON-pointer: ${e}`);
    const m = +p[1];
    if (a = p[2], a === "#") {
      if (m >= t)
        throw new Error(y("property/index", m));
      return n[t - m];
    }
    if (m > t)
      throw new Error(y("data", m));
    if (o = r[t - m], !a)
      return o;
  }
  let c = o;
  const f = a.split("/");
  for (const p of f)
    p && (o = (0, V._)`${o}${(0, V.getProperty)((0, Le.unescapeJsonPointer)(p))}`, c = (0, V._)`${c} && ${o}`);
  return c;
  function y(p, m) {
    return `Cannot access ${p} ${m} levels up, current level is ${t}`;
  }
}
Ne.getData = ja;
var Ht = {};
Object.defineProperty(Ht, "__esModule", { value: !0 });
class Uo extends Error {
  constructor(t) {
    super("validation failed"), this.errors = t, this.ajv = this.validation = !0;
  }
}
Ht.default = Uo;
var Gt = {};
Object.defineProperty(Gt, "__esModule", { value: !0 });
const $r = de;
class qo extends Error {
  constructor(t, r, n, a) {
    super(a || `can't resolve reference ${n} from id ${r}`), this.missingRef = (0, $r.resolveUrl)(t, r, n), this.missingSchema = (0, $r.normalizeId)((0, $r.getFullPath)(t, this.missingRef));
  }
}
Gt.default = qo;
var ve = {};
Object.defineProperty(ve, "__esModule", { value: !0 });
ve.resolveSchema = ve.getCompilingSchema = ve.resolveRef = ve.compileSchema = ve.SchemaEnv = void 0;
const be = H, zo = Ht, et = Ve, Pe = de, qn = k, Lo = Ne;
class fr {
  constructor(t) {
    var r;
    this.refs = {}, this.dynamicAnchors = {};
    let n;
    typeof t.schema == "object" && (n = t.schema), this.schema = t.schema, this.schemaId = t.schemaId, this.root = t.root || this, this.baseId = (r = t.baseId) !== null && r !== void 0 ? r : (0, Pe.normalizeId)(n == null ? void 0 : n[t.schemaId || "$id"]), this.schemaPath = t.schemaPath, this.localRefs = t.localRefs, this.meta = t.meta, this.$async = n == null ? void 0 : n.$async, this.refs = {};
  }
}
ve.SchemaEnv = fr;
function qr(e) {
  const t = Ia.call(this, e);
  if (t)
    return t;
  const r = (0, Pe.getFullPath)(this.opts.uriResolver, e.root.baseId), { es5: n, lines: a } = this.opts.code, { ownProperties: o } = this.opts, c = new be.CodeGen(this.scope, { es5: n, lines: a, ownProperties: o });
  let f;
  e.$async && (f = c.scopeValue("Error", {
    ref: zo.default,
    code: (0, be._)`require("ajv/dist/runtime/validation_error").default`
  }));
  const y = c.scopeName("validate");
  e.validateName = y;
  const p = {
    gen: c,
    allErrors: this.opts.allErrors,
    data: et.default.data,
    parentData: et.default.parentData,
    parentDataProperty: et.default.parentDataProperty,
    dataNames: [et.default.data],
    dataPathArr: [be.nil],
    // TODO can its length be used as dataLevel if nil is removed?
    dataLevel: 0,
    dataTypes: [],
    definedProperties: /* @__PURE__ */ new Set(),
    topSchemaRef: c.scopeValue("schema", this.opts.code.source === !0 ? { ref: e.schema, code: (0, be.stringify)(e.schema) } : { ref: e.schema }),
    validateName: y,
    ValidationError: f,
    schema: e.schema,
    schemaEnv: e,
    rootId: r,
    baseId: e.baseId || r,
    schemaPath: be.nil,
    errSchemaPath: e.schemaPath || (this.opts.jtd ? "" : "#"),
    errorPath: (0, be._)`""`,
    opts: this.opts,
    self: this
  };
  let m;
  try {
    this._compilations.add(e), (0, Lo.validateFunctionCode)(p), c.optimize(this.opts.code.optimize);
    const $ = c.toString();
    m = `${c.scopeRefs(et.default.scope)}return ${$}`, this.opts.code.process && (m = this.opts.code.process(m, e));
    const O = new Function(`${et.default.self}`, `${et.default.scope}`, m)(this, this.scope.get());
    if (this.scope.value(y, { ref: O }), O.errors = null, O.schema = e.schema, O.schemaEnv = e, e.$async && (O.$async = !0), this.opts.code.source === !0 && (O.source = { validateName: y, validateCode: $, scopeValues: c._values }), this.opts.unevaluated) {
      const { props: S, items: P } = p;
      O.evaluated = {
        props: S instanceof be.Name ? void 0 : S,
        items: P instanceof be.Name ? void 0 : P,
        dynamicProps: S instanceof be.Name,
        dynamicItems: P instanceof be.Name
      }, O.source && (O.source.evaluated = (0, be.stringify)(O.evaluated));
    }
    return e.validate = O, e;
  } catch ($) {
    throw delete e.validate, delete e.validateName, m && this.logger.error("Error compiling schema, function code:", m), $;
  } finally {
    this._compilations.delete(e);
  }
}
ve.compileSchema = qr;
function Ko(e, t, r) {
  var n;
  r = (0, Pe.resolveUrl)(this.opts.uriResolver, t, r);
  const a = e.refs[r];
  if (a)
    return a;
  let o = Jo.call(this, e, r);
  if (o === void 0) {
    const c = (n = e.localRefs) === null || n === void 0 ? void 0 : n[r], { schemaId: f } = this.opts;
    c && (o = new fr({ schema: c, schemaId: f, root: e, baseId: t }));
  }
  if (o !== void 0)
    return e.refs[r] = Ho.call(this, o);
}
ve.resolveRef = Ko;
function Ho(e) {
  return (0, Pe.inlineRef)(e.schema, this.opts.inlineRefs) ? e.schema : e.validate ? e : qr.call(this, e);
}
function Ia(e) {
  for (const t of this._compilations)
    if (Go(t, e))
      return t;
}
ve.getCompilingSchema = Ia;
function Go(e, t) {
  return e.schema === t.schema && e.root === t.root && e.baseId === t.baseId;
}
function Jo(e, t) {
  let r;
  for (; typeof (r = this.refs[t]) == "string"; )
    t = r;
  return r || this.schemas[t] || hr.call(this, e, t);
}
function hr(e, t) {
  const r = this.opts.uriResolver.parse(t), n = (0, Pe._getFullPath)(this.opts.uriResolver, r);
  let a = (0, Pe.getFullPath)(this.opts.uriResolver, e.baseId, void 0);
  if (Object.keys(e.schema).length > 0 && n === a)
    return gr.call(this, r, e);
  const o = (0, Pe.normalizeId)(n), c = this.refs[o] || this.schemas[o];
  if (typeof c == "string") {
    const f = hr.call(this, e, c);
    return typeof (f == null ? void 0 : f.schema) != "object" ? void 0 : gr.call(this, r, f);
  }
  if (typeof (c == null ? void 0 : c.schema) == "object") {
    if (c.validate || qr.call(this, c), o === (0, Pe.normalizeId)(t)) {
      const { schema: f } = c, { schemaId: y } = this.opts, p = f[y];
      return p && (a = (0, Pe.resolveUrl)(this.opts.uriResolver, a, p)), new fr({ schema: f, schemaId: y, root: e, baseId: a });
    }
    return gr.call(this, r, c);
  }
}
ve.resolveSchema = hr;
const Bo = /* @__PURE__ */ new Set([
  "properties",
  "patternProperties",
  "enum",
  "dependencies",
  "definitions"
]);
function gr(e, { baseId: t, schema: r, root: n }) {
  var a;
  if (((a = e.fragment) === null || a === void 0 ? void 0 : a[0]) !== "/")
    return;
  for (const f of e.fragment.slice(1).split("/")) {
    if (typeof r == "boolean")
      return;
    const y = r[(0, qn.unescapeFragment)(f)];
    if (y === void 0)
      return;
    r = y;
    const p = typeof r == "object" && r[this.opts.schemaId];
    !Bo.has(f) && p && (t = (0, Pe.resolveUrl)(this.opts.uriResolver, t, p));
  }
  let o;
  if (typeof r != "boolean" && r.$ref && !(0, qn.schemaHasRulesButRef)(r, this.RULES)) {
    const f = (0, Pe.resolveUrl)(this.opts.uriResolver, t, r.$ref);
    o = hr.call(this, n, f);
  }
  const { schemaId: c } = this.opts;
  if (o = o || new fr({ schema: r, schemaId: c, root: n, baseId: t }), o.schema !== o.root.schema)
    return o;
}
const Wo = "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", Qo = "Meta-schema for $data reference (JSON AnySchema extension proposal)", Xo = "object", Yo = [
  "$data"
], Zo = {
  $data: {
    type: "string",
    anyOf: [
      {
        format: "relative-json-pointer"
      },
      {
        format: "json-pointer"
      }
    ]
  }
}, xo = !1, ei = {
  $id: Wo,
  description: Qo,
  type: Xo,
  required: Yo,
  properties: Zo,
  additionalProperties: xo
};
var zr = {}, Or = { exports: {} };
/** @license URI.js v4.4.1 (c) 2011 Gary Court. License: http://github.com/garycourt/uri-js */
(function(e, t) {
  (function(r, n) {
    n(t);
  })(xa, function(r) {
    function n() {
      for (var u = arguments.length, i = Array(u), d = 0; d < u; d++)
        i[d] = arguments[d];
      if (i.length > 1) {
        i[0] = i[0].slice(0, -1);
        for (var E = i.length - 1, w = 1; w < E; ++w)
          i[w] = i[w].slice(1, -1);
        return i[E] = i[E].slice(1), i.join("");
      } else
        return i[0];
    }
    function a(u) {
      return "(?:" + u + ")";
    }
    function o(u) {
      return u === void 0 ? "undefined" : u === null ? "null" : Object.prototype.toString.call(u).split(" ").pop().split("]").shift().toLowerCase();
    }
    function c(u) {
      return u.toUpperCase();
    }
    function f(u) {
      return u != null ? u instanceof Array ? u : typeof u.length != "number" || u.split || u.setInterval || u.call ? [u] : Array.prototype.slice.call(u) : [];
    }
    function y(u, i) {
      var d = u;
      if (i)
        for (var E in i)
          d[E] = i[E];
      return d;
    }
    function p(u) {
      var i = "[A-Za-z]", d = "[0-9]", E = n(d, "[A-Fa-f]"), w = a(a("%[EFef]" + E + "%" + E + E + "%" + E + E) + "|" + a("%[89A-Fa-f]" + E + "%" + E + E) + "|" + a("%" + E + E)), F = "[\\:\\/\\?\\#\\[\\]\\@]", U = "[\\!\\$\\&\\'\\(\\)\\*\\+\\,\\;\\=]", W = n(F, U), Z = u ? "[\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]" : "[]", ne = u ? "[\\uE000-\\uF8FF]" : "[]", J = n(i, d, "[\\-\\.\\_\\~]", Z);
      a(i + n(i, d, "[\\+\\-\\.]") + "*"), a(a(w + "|" + n(J, U, "[\\:]")) + "*");
      var Y = a(a("25[0-5]") + "|" + a("2[0-4]" + d) + "|" + a("1" + d + d) + "|" + a("0?[1-9]" + d) + "|0?0?" + d), ae = a(Y + "\\." + Y + "\\." + Y + "\\." + Y), z = a(E + "{1,4}"), ee = a(a(z + "\\:" + z) + "|" + ae), ie = a(a(z + "\\:") + "{6}" + ee), te = a("\\:\\:" + a(z + "\\:") + "{5}" + ee), Ke = a(a(z) + "?\\:\\:" + a(z + "\\:") + "{4}" + ee), Ie = a(a(a(z + "\\:") + "{0,1}" + z) + "?\\:\\:" + a(z + "\\:") + "{3}" + ee), ke = a(a(a(z + "\\:") + "{0,2}" + z) + "?\\:\\:" + a(z + "\\:") + "{2}" + ee), pt = a(a(a(z + "\\:") + "{0,3}" + z) + "?\\:\\:" + z + "\\:" + ee), Ze = a(a(a(z + "\\:") + "{0,4}" + z) + "?\\:\\:" + ee), _e = a(a(a(z + "\\:") + "{0,5}" + z) + "?\\:\\:" + z), De = a(a(a(z + "\\:") + "{0,6}" + z) + "?\\:\\:"), xe = a([ie, te, Ke, Ie, ke, pt, Ze, _e, De].join("|")), qe = a(a(J + "|" + w) + "+");
      a("[vV]" + E + "+\\." + n(J, U, "[\\:]") + "+"), a(a(w + "|" + n(J, U)) + "*");
      var It = a(w + "|" + n(J, U, "[\\:\\@]"));
      return a(a(w + "|" + n(J, U, "[\\@]")) + "+"), a(a(It + "|" + n("[\\/\\?]", ne)) + "*"), {
        NOT_SCHEME: new RegExp(n("[^]", i, d, "[\\+\\-\\.]"), "g"),
        NOT_USERINFO: new RegExp(n("[^\\%\\:]", J, U), "g"),
        NOT_HOST: new RegExp(n("[^\\%\\[\\]\\:]", J, U), "g"),
        NOT_PATH: new RegExp(n("[^\\%\\/\\:\\@]", J, U), "g"),
        NOT_PATH_NOSCHEME: new RegExp(n("[^\\%\\/\\@]", J, U), "g"),
        NOT_QUERY: new RegExp(n("[^\\%]", J, U, "[\\:\\@\\/\\?]", ne), "g"),
        NOT_FRAGMENT: new RegExp(n("[^\\%]", J, U, "[\\:\\@\\/\\?]"), "g"),
        ESCAPE: new RegExp(n("[^]", J, U), "g"),
        UNRESERVED: new RegExp(J, "g"),
        OTHER_CHARS: new RegExp(n("[^\\%]", J, W), "g"),
        PCT_ENCODED: new RegExp(w, "g"),
        IPV4ADDRESS: new RegExp("^(" + ae + ")$"),
        IPV6ADDRESS: new RegExp("^\\[?(" + xe + ")" + a(a("\\%25|\\%(?!" + E + "{2})") + "(" + qe + ")") + "?\\]?$")
        //RFC 6874, with relaxed parsing rules
      };
    }
    var m = p(!1), $ = p(!0), R = /* @__PURE__ */ function() {
      function u(i, d) {
        var E = [], w = !0, F = !1, U = void 0;
        try {
          for (var W = i[Symbol.iterator](), Z; !(w = (Z = W.next()).done) && (E.push(Z.value), !(d && E.length === d)); w = !0)
            ;
        } catch (ne) {
          F = !0, U = ne;
        } finally {
          try {
            !w && W.return && W.return();
          } finally {
            if (F)
              throw U;
          }
        }
        return E;
      }
      return function(i, d) {
        if (Array.isArray(i))
          return i;
        if (Symbol.iterator in Object(i))
          return u(i, d);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      };
    }(), O = function(u) {
      if (Array.isArray(u)) {
        for (var i = 0, d = Array(u.length); i < u.length; i++)
          d[i] = u[i];
        return d;
      } else
        return Array.from(u);
    }, S = 2147483647, P = 36, g = 1, h = 26, b = 38, T = 700, A = 72, M = 128, Q = "-", ue = /^xn--/, Ee = /[^\0-\x7E]/, Oe = /[\x2E\u3002\uFF0E\uFF61]/g, Fe = {
      overflow: "Overflow: input needs wider integers to process",
      "not-basic": "Illegal input >= 0x80 (not a basic code point)",
      "invalid-input": "Invalid input"
    }, Ue = P - g, oe = Math.floor, Ce = String.fromCharCode;
    function fe(u) {
      throw new RangeError(Fe[u]);
    }
    function We(u, i) {
      for (var d = [], E = u.length; E--; )
        d[E] = i(u[E]);
      return d;
    }
    function Qe(u, i) {
      var d = u.split("@"), E = "";
      d.length > 1 && (E = d[0] + "@", u = d[1]), u = u.replace(Oe, ".");
      var w = u.split("."), F = We(w, i).join(".");
      return E + F;
    }
    function ot(u) {
      for (var i = [], d = 0, E = u.length; d < E; ) {
        var w = u.charCodeAt(d++);
        if (w >= 55296 && w <= 56319 && d < E) {
          var F = u.charCodeAt(d++);
          (F & 64512) == 56320 ? i.push(((w & 1023) << 10) + (F & 1023) + 65536) : (i.push(w), d--);
        } else
          i.push(w);
      }
      return i;
    }
    var St = function(i) {
      return String.fromCodePoint.apply(String, O(i));
    }, it = function(i) {
      return i - 48 < 10 ? i - 22 : i - 65 < 26 ? i - 65 : i - 97 < 26 ? i - 97 : P;
    }, j = function(i, d) {
      return i + 22 + 75 * (i < 26) - ((d != 0) << 5);
    }, v = function(i, d, E) {
      var w = 0;
      for (
        i = E ? oe(i / T) : i >> 1, i += oe(i / d);
        /* no initialization */
        i > Ue * h >> 1;
        w += P
      )
        i = oe(i / Ue);
      return oe(w + (Ue + 1) * i / (i + b));
    }, C = function(i) {
      var d = [], E = i.length, w = 0, F = M, U = A, W = i.lastIndexOf(Q);
      W < 0 && (W = 0);
      for (var Z = 0; Z < W; ++Z)
        i.charCodeAt(Z) >= 128 && fe("not-basic"), d.push(i.charCodeAt(Z));
      for (var ne = W > 0 ? W + 1 : 0; ne < E; ) {
        for (
          var J = w, Y = 1, ae = P;
          ;
          /* no condition */
          ae += P
        ) {
          ne >= E && fe("invalid-input");
          var z = it(i.charCodeAt(ne++));
          (z >= P || z > oe((S - w) / Y)) && fe("overflow"), w += z * Y;
          var ee = ae <= U ? g : ae >= U + h ? h : ae - U;
          if (z < ee)
            break;
          var ie = P - ee;
          Y > oe(S / ie) && fe("overflow"), Y *= ie;
        }
        var te = d.length + 1;
        U = v(w - J, te, J == 0), oe(w / te) > S - F && fe("overflow"), F += oe(w / te), w %= te, d.splice(w++, 0, F);
      }
      return String.fromCodePoint.apply(String, d);
    }, _ = function(i) {
      var d = [];
      i = ot(i);
      var E = i.length, w = M, F = 0, U = A, W = !0, Z = !1, ne = void 0;
      try {
        for (var J = i[Symbol.iterator](), Y; !(W = (Y = J.next()).done); W = !0) {
          var ae = Y.value;
          ae < 128 && d.push(Ce(ae));
        }
      } catch (kt) {
        Z = !0, ne = kt;
      } finally {
        try {
          !W && J.return && J.return();
        } finally {
          if (Z)
            throw ne;
        }
      }
      var z = d.length, ee = z;
      for (z && d.push(Q); ee < E; ) {
        var ie = S, te = !0, Ke = !1, Ie = void 0;
        try {
          for (var ke = i[Symbol.iterator](), pt; !(te = (pt = ke.next()).done); te = !0) {
            var Ze = pt.value;
            Ze >= w && Ze < ie && (ie = Ze);
          }
        } catch (kt) {
          Ke = !0, Ie = kt;
        } finally {
          try {
            !te && ke.return && ke.return();
          } finally {
            if (Ke)
              throw Ie;
          }
        }
        var _e = ee + 1;
        ie - w > oe((S - F) / _e) && fe("overflow"), F += (ie - w) * _e, w = ie;
        var De = !0, xe = !1, qe = void 0;
        try {
          for (var It = i[Symbol.iterator](), Cn; !(De = (Cn = It.next()).done); De = !0) {
            var Rn = Cn.value;
            if (Rn < w && ++F > S && fe("overflow"), Rn == w) {
              for (
                var Wt = F, Qt = P;
                ;
                /* no condition */
                Qt += P
              ) {
                var Xt = Qt <= U ? g : Qt >= U + h ? h : Qt - U;
                if (Wt < Xt)
                  break;
                var Tn = Wt - Xt, jn = P - Xt;
                d.push(Ce(j(Xt + Tn % jn, 0))), Wt = oe(Tn / jn);
              }
              d.push(Ce(j(Wt, 0))), U = v(F, _e, ee == z), F = 0, ++ee;
            }
          }
        } catch (kt) {
          xe = !0, qe = kt;
        } finally {
          try {
            !De && It.return && It.return();
          } finally {
            if (xe)
              throw qe;
          }
        }
        ++F, ++w;
      }
      return d.join("");
    }, s = function(i) {
      return Qe(i, function(d) {
        return ue.test(d) ? C(d.slice(4).toLowerCase()) : d;
      });
    }, l = function(i) {
      return Qe(i, function(d) {
        return Ee.test(d) ? "xn--" + _(d) : d;
      });
    }, N = {
      /**
       * A string representing the current Punycode.js version number.
       * @memberOf punycode
       * @type String
       */
      version: "2.1.0",
      /**
       * An object of methods to convert from JavaScript's internal character
       * representation (UCS-2) to Unicode code points, and back.
       * @see <https://mathiasbynens.be/notes/javascript-encoding>
       * @memberOf punycode
       * @type Object
       */
      ucs2: {
        decode: ot,
        encode: St
      },
      decode: C,
      encode: _,
      toASCII: l,
      toUnicode: s
    }, I = {};
    function D(u) {
      var i = u.charCodeAt(0), d = void 0;
      return i < 16 ? d = "%0" + i.toString(16).toUpperCase() : i < 128 ? d = "%" + i.toString(16).toUpperCase() : i < 2048 ? d = "%" + (i >> 6 | 192).toString(16).toUpperCase() + "%" + (i & 63 | 128).toString(16).toUpperCase() : d = "%" + (i >> 12 | 224).toString(16).toUpperCase() + "%" + (i >> 6 & 63 | 128).toString(16).toUpperCase() + "%" + (i & 63 | 128).toString(16).toUpperCase(), d;
    }
    function G(u) {
      for (var i = "", d = 0, E = u.length; d < E; ) {
        var w = parseInt(u.substr(d + 1, 2), 16);
        if (w < 128)
          i += String.fromCharCode(w), d += 3;
        else if (w >= 194 && w < 224) {
          if (E - d >= 6) {
            var F = parseInt(u.substr(d + 4, 2), 16);
            i += String.fromCharCode((w & 31) << 6 | F & 63);
          } else
            i += u.substr(d, 6);
          d += 6;
        } else if (w >= 224) {
          if (E - d >= 9) {
            var U = parseInt(u.substr(d + 4, 2), 16), W = parseInt(u.substr(d + 7, 2), 16);
            i += String.fromCharCode((w & 15) << 12 | (U & 63) << 6 | W & 63);
          } else
            i += u.substr(d, 9);
          d += 9;
        } else
          i += u.substr(d, 3), d += 3;
      }
      return i;
    }
    function B(u, i) {
      function d(E) {
        var w = G(E);
        return w.match(i.UNRESERVED) ? w : E;
      }
      return u.scheme && (u.scheme = String(u.scheme).replace(i.PCT_ENCODED, d).toLowerCase().replace(i.NOT_SCHEME, "")), u.userinfo !== void 0 && (u.userinfo = String(u.userinfo).replace(i.PCT_ENCODED, d).replace(i.NOT_USERINFO, D).replace(i.PCT_ENCODED, c)), u.host !== void 0 && (u.host = String(u.host).replace(i.PCT_ENCODED, d).toLowerCase().replace(i.NOT_HOST, D).replace(i.PCT_ENCODED, c)), u.path !== void 0 && (u.path = String(u.path).replace(i.PCT_ENCODED, d).replace(u.scheme ? i.NOT_PATH : i.NOT_PATH_NOSCHEME, D).replace(i.PCT_ENCODED, c)), u.query !== void 0 && (u.query = String(u.query).replace(i.PCT_ENCODED, d).replace(i.NOT_QUERY, D).replace(i.PCT_ENCODED, c)), u.fragment !== void 0 && (u.fragment = String(u.fragment).replace(i.PCT_ENCODED, d).replace(i.NOT_FRAGMENT, D).replace(i.PCT_ENCODED, c)), u;
    }
    function re(u) {
      return u.replace(/^0*(.*)/, "$1") || "0";
    }
    function Re(u, i) {
      var d = u.match(i.IPV4ADDRESS) || [], E = R(d, 2), w = E[1];
      return w ? w.split(".").map(re).join(".") : u;
    }
    function ct(u, i) {
      var d = u.match(i.IPV6ADDRESS) || [], E = R(d, 3), w = E[1], F = E[2];
      if (w) {
        for (var U = w.toLowerCase().split("::").reverse(), W = R(U, 2), Z = W[0], ne = W[1], J = ne ? ne.split(":").map(re) : [], Y = Z.split(":").map(re), ae = i.IPV4ADDRESS.test(Y[Y.length - 1]), z = ae ? 7 : 8, ee = Y.length - z, ie = Array(z), te = 0; te < z; ++te)
          ie[te] = J[te] || Y[ee + te] || "";
        ae && (ie[z - 1] = Re(ie[z - 1], i));
        var Ke = ie.reduce(function(_e, De, xe) {
          if (!De || De === "0") {
            var qe = _e[_e.length - 1];
            qe && qe.index + qe.length === xe ? qe.length++ : _e.push({ index: xe, length: 1 });
          }
          return _e;
        }, []), Ie = Ke.sort(function(_e, De) {
          return De.length - _e.length;
        })[0], ke = void 0;
        if (Ie && Ie.length > 1) {
          var pt = ie.slice(0, Ie.index), Ze = ie.slice(Ie.index + Ie.length);
          ke = pt.join(":") + "::" + Ze.join(":");
        } else
          ke = ie.join(":");
        return F && (ke += "%" + F), ke;
      } else
        return u;
    }
    var Pt = /^(?:([^:\/?#]+):)?(?:\/\/((?:([^\/?#@]*)@)?(\[[^\/?#\]]+\]|[^\/?#:]*)(?:\:(\d*))?))?([^?#]*)(?:\?([^#]*))?(?:#((?:.|\n|\r)*))?/i, Nt = "".match(/(){0}/)[1] === void 0;
    function $e(u) {
      var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, d = {}, E = i.iri !== !1 ? $ : m;
      i.reference === "suffix" && (u = (i.scheme ? i.scheme + ":" : "") + "//" + u);
      var w = u.match(Pt);
      if (w) {
        Nt ? (d.scheme = w[1], d.userinfo = w[3], d.host = w[4], d.port = parseInt(w[5], 10), d.path = w[6] || "", d.query = w[7], d.fragment = w[8], isNaN(d.port) && (d.port = w[5])) : (d.scheme = w[1] || void 0, d.userinfo = u.indexOf("@") !== -1 ? w[3] : void 0, d.host = u.indexOf("//") !== -1 ? w[4] : void 0, d.port = parseInt(w[5], 10), d.path = w[6] || "", d.query = u.indexOf("?") !== -1 ? w[7] : void 0, d.fragment = u.indexOf("#") !== -1 ? w[8] : void 0, isNaN(d.port) && (d.port = u.match(/\/\/(?:.|\n)*\:(?:\/|\?|\#|$)/) ? w[4] : void 0)), d.host && (d.host = ct(Re(d.host, E), E)), d.scheme === void 0 && d.userinfo === void 0 && d.host === void 0 && d.port === void 0 && !d.path && d.query === void 0 ? d.reference = "same-document" : d.scheme === void 0 ? d.reference = "relative" : d.fragment === void 0 ? d.reference = "absolute" : d.reference = "uri", i.reference && i.reference !== "suffix" && i.reference !== d.reference && (d.error = d.error || "URI is not a " + i.reference + " reference.");
        var F = I[(i.scheme || d.scheme || "").toLowerCase()];
        if (!i.unicodeSupport && (!F || !F.unicodeSupport)) {
          if (d.host && (i.domainHost || F && F.domainHost))
            try {
              d.host = N.toASCII(d.host.replace(E.PCT_ENCODED, G).toLowerCase());
            } catch (U) {
              d.error = d.error || "Host's domain name can not be converted to ASCII via punycode: " + U;
            }
          B(d, m);
        } else
          B(d, E);
        F && F.parse && F.parse(d, i);
      } else
        d.error = d.error || "URI can not be parsed.";
      return d;
    }
    function Ot(u, i) {
      var d = i.iri !== !1 ? $ : m, E = [];
      return u.userinfo !== void 0 && (E.push(u.userinfo), E.push("@")), u.host !== void 0 && E.push(ct(Re(String(u.host), d), d).replace(d.IPV6ADDRESS, function(w, F, U) {
        return "[" + F + (U ? "%25" + U : "") + "]";
      })), (typeof u.port == "number" || typeof u.port == "string") && (E.push(":"), E.push(String(u.port))), E.length ? E.join("") : void 0;
    }
    var ut = /^\.\.?\//, lt = /^\/\.(\/|$)/, dt = /^\/\.\.(\/|$)/, Ct = /^\/?(?:.|\n)*?(?=\/|$)/;
    function Te(u) {
      for (var i = []; u.length; )
        if (u.match(ut))
          u = u.replace(ut, "");
        else if (u.match(lt))
          u = u.replace(lt, "/");
        else if (u.match(dt))
          u = u.replace(dt, "/"), i.pop();
        else if (u === "." || u === "..")
          u = "";
        else {
          var d = u.match(Ct);
          if (d) {
            var E = d[0];
            u = u.slice(E.length), i.push(E);
          } else
            throw new Error("Unexpected dot segment condition");
        }
      return i.join("");
    }
    function me(u) {
      var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, d = i.iri ? $ : m, E = [], w = I[(i.scheme || u.scheme || "").toLowerCase()];
      if (w && w.serialize && w.serialize(u, i), u.host && !d.IPV6ADDRESS.test(u.host)) {
        if (i.domainHost || w && w.domainHost)
          try {
            u.host = i.iri ? N.toUnicode(u.host) : N.toASCII(u.host.replace(d.PCT_ENCODED, G).toLowerCase());
          } catch (W) {
            u.error = u.error || "Host's domain name can not be converted to " + (i.iri ? "Unicode" : "ASCII") + " via punycode: " + W;
          }
      }
      B(u, d), i.reference !== "suffix" && u.scheme && (E.push(u.scheme), E.push(":"));
      var F = Ot(u, i);
      if (F !== void 0 && (i.reference !== "suffix" && E.push("//"), E.push(F), u.path && u.path.charAt(0) !== "/" && E.push("/")), u.path !== void 0) {
        var U = u.path;
        !i.absolutePath && (!w || !w.absolutePath) && (U = Te(U)), F === void 0 && (U = U.replace(/^\/\//, "/%2F")), E.push(U);
      }
      return u.query !== void 0 && (E.push("?"), E.push(u.query)), u.fragment !== void 0 && (E.push("#"), E.push(u.fragment)), E.join("");
    }
    function ft(u, i) {
      var d = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, E = arguments[3], w = {};
      return E || (u = $e(me(u, d), d), i = $e(me(i, d), d)), d = d || {}, !d.tolerant && i.scheme ? (w.scheme = i.scheme, w.userinfo = i.userinfo, w.host = i.host, w.port = i.port, w.path = Te(i.path || ""), w.query = i.query) : (i.userinfo !== void 0 || i.host !== void 0 || i.port !== void 0 ? (w.userinfo = i.userinfo, w.host = i.host, w.port = i.port, w.path = Te(i.path || ""), w.query = i.query) : (i.path ? (i.path.charAt(0) === "/" ? w.path = Te(i.path) : ((u.userinfo !== void 0 || u.host !== void 0 || u.port !== void 0) && !u.path ? w.path = "/" + i.path : u.path ? w.path = u.path.slice(0, u.path.lastIndexOf("/") + 1) + i.path : w.path = i.path, w.path = Te(w.path)), w.query = i.query) : (w.path = u.path, i.query !== void 0 ? w.query = i.query : w.query = u.query), w.userinfo = u.userinfo, w.host = u.host, w.port = u.port), w.scheme = u.scheme), w.fragment = i.fragment, w;
    }
    function Rt(u, i, d) {
      var E = y({ scheme: "null" }, d);
      return me(ft($e(u, E), $e(i, E), E, !0), E);
    }
    function Xe(u, i) {
      return typeof u == "string" ? u = me($e(u, i), i) : o(u) === "object" && (u = $e(me(u, i), i)), u;
    }
    function Tt(u, i, d) {
      return typeof u == "string" ? u = me($e(u, d), d) : o(u) === "object" && (u = me(u, d)), typeof i == "string" ? i = me($e(i, d), d) : o(i) === "object" && (i = me(i, d)), u === i;
    }
    function Bt(u, i) {
      return u && u.toString().replace(!i || !i.iri ? m.ESCAPE : $.ESCAPE, D);
    }
    function ge(u, i) {
      return u && u.toString().replace(!i || !i.iri ? m.PCT_ENCODED : $.PCT_ENCODED, G);
    }
    var Ye = {
      scheme: "http",
      domainHost: !0,
      parse: function(i, d) {
        return i.host || (i.error = i.error || "HTTP URIs must have a host."), i;
      },
      serialize: function(i, d) {
        var E = String(i.scheme).toLowerCase() === "https";
        return (i.port === (E ? 443 : 80) || i.port === "") && (i.port = void 0), i.path || (i.path = "/"), i;
      }
    }, _n = {
      scheme: "https",
      domainHost: Ye.domainHost,
      parse: Ye.parse,
      serialize: Ye.serialize
    };
    function wn(u) {
      return typeof u.secure == "boolean" ? u.secure : String(u.scheme).toLowerCase() === "wss";
    }
    var jt = {
      scheme: "ws",
      domainHost: !0,
      parse: function(i, d) {
        var E = i;
        return E.secure = wn(E), E.resourceName = (E.path || "/") + (E.query ? "?" + E.query : ""), E.path = void 0, E.query = void 0, E;
      },
      serialize: function(i, d) {
        if ((i.port === (wn(i) ? 443 : 80) || i.port === "") && (i.port = void 0), typeof i.secure == "boolean" && (i.scheme = i.secure ? "wss" : "ws", i.secure = void 0), i.resourceName) {
          var E = i.resourceName.split("?"), w = R(E, 2), F = w[0], U = w[1];
          i.path = F && F !== "/" ? F : void 0, i.query = U, i.resourceName = void 0;
        }
        return i.fragment = void 0, i;
      }
    }, En = {
      scheme: "wss",
      domainHost: jt.domainHost,
      parse: jt.parse,
      serialize: jt.serialize
    }, La = {}, bn = "[A-Za-z0-9\\-\\.\\_\\~\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]", je = "[0-9A-Fa-f]", Ka = a(a("%[EFef]" + je + "%" + je + je + "%" + je + je) + "|" + a("%[89A-Fa-f]" + je + "%" + je + je) + "|" + a("%" + je + je)), Ha = "[A-Za-z0-9\\!\\$\\%\\'\\*\\+\\-\\^\\_\\`\\{\\|\\}\\~]", Ga = "[\\!\\$\\%\\'\\(\\)\\*\\+\\,\\-\\.0-9\\<\\>A-Z\\x5E-\\x7E]", Ja = n(Ga, '[\\"\\\\]'), Ba = "[\\!\\$\\'\\(\\)\\*\\+\\,\\;\\:\\@]", Wa = new RegExp(bn, "g"), ht = new RegExp(Ka, "g"), Qa = new RegExp(n("[^]", Ha, "[\\.]", '[\\"]', Ja), "g"), Sn = new RegExp(n("[^]", bn, Ba), "g"), Xa = Sn;
    function yr(u) {
      var i = G(u);
      return i.match(Wa) ? i : u;
    }
    var Pn = {
      scheme: "mailto",
      parse: function(i, d) {
        var E = i, w = E.to = E.path ? E.path.split(",") : [];
        if (E.path = void 0, E.query) {
          for (var F = !1, U = {}, W = E.query.split("&"), Z = 0, ne = W.length; Z < ne; ++Z) {
            var J = W[Z].split("=");
            switch (J[0]) {
              case "to":
                for (var Y = J[1].split(","), ae = 0, z = Y.length; ae < z; ++ae)
                  w.push(Y[ae]);
                break;
              case "subject":
                E.subject = ge(J[1], d);
                break;
              case "body":
                E.body = ge(J[1], d);
                break;
              default:
                F = !0, U[ge(J[0], d)] = ge(J[1], d);
                break;
            }
          }
          F && (E.headers = U);
        }
        E.query = void 0;
        for (var ee = 0, ie = w.length; ee < ie; ++ee) {
          var te = w[ee].split("@");
          if (te[0] = ge(te[0]), d.unicodeSupport)
            te[1] = ge(te[1], d).toLowerCase();
          else
            try {
              te[1] = N.toASCII(ge(te[1], d).toLowerCase());
            } catch (Ke) {
              E.error = E.error || "Email address's domain name can not be converted to ASCII via punycode: " + Ke;
            }
          w[ee] = te.join("@");
        }
        return E;
      },
      serialize: function(i, d) {
        var E = i, w = f(i.to);
        if (w) {
          for (var F = 0, U = w.length; F < U; ++F) {
            var W = String(w[F]), Z = W.lastIndexOf("@"), ne = W.slice(0, Z).replace(ht, yr).replace(ht, c).replace(Qa, D), J = W.slice(Z + 1);
            try {
              J = d.iri ? N.toUnicode(J) : N.toASCII(ge(J, d).toLowerCase());
            } catch (ee) {
              E.error = E.error || "Email address's domain name can not be converted to " + (d.iri ? "Unicode" : "ASCII") + " via punycode: " + ee;
            }
            w[F] = ne + "@" + J;
          }
          E.path = w.join(",");
        }
        var Y = i.headers = i.headers || {};
        i.subject && (Y.subject = i.subject), i.body && (Y.body = i.body);
        var ae = [];
        for (var z in Y)
          Y[z] !== La[z] && ae.push(z.replace(ht, yr).replace(ht, c).replace(Sn, D) + "=" + Y[z].replace(ht, yr).replace(ht, c).replace(Xa, D));
        return ae.length && (E.query = ae.join("&")), E;
      }
    }, Ya = /^([^\:]+)\:(.*)/, Nn = {
      scheme: "urn",
      parse: function(i, d) {
        var E = i.path && i.path.match(Ya), w = i;
        if (E) {
          var F = d.scheme || w.scheme || "urn", U = E[1].toLowerCase(), W = E[2], Z = F + ":" + (d.nid || U), ne = I[Z];
          w.nid = U, w.nss = W, w.path = void 0, ne && (w = ne.parse(w, d));
        } else
          w.error = w.error || "URN can not be parsed.";
        return w;
      },
      serialize: function(i, d) {
        var E = d.scheme || i.scheme || "urn", w = i.nid, F = E + ":" + (d.nid || w), U = I[F];
        U && (i = U.serialize(i, d));
        var W = i, Z = i.nss;
        return W.path = (w || d.nid) + ":" + Z, W;
      }
    }, Za = /^[0-9A-Fa-f]{8}(?:\-[0-9A-Fa-f]{4}){3}\-[0-9A-Fa-f]{12}$/, On = {
      scheme: "urn:uuid",
      parse: function(i, d) {
        var E = i;
        return E.uuid = E.nss, E.nss = void 0, !d.tolerant && (!E.uuid || !E.uuid.match(Za)) && (E.error = E.error || "UUID is not valid."), E;
      },
      serialize: function(i, d) {
        var E = i;
        return E.nss = (i.uuid || "").toLowerCase(), E;
      }
    };
    I[Ye.scheme] = Ye, I[_n.scheme] = _n, I[jt.scheme] = jt, I[En.scheme] = En, I[Pn.scheme] = Pn, I[Nn.scheme] = Nn, I[On.scheme] = On, r.SCHEMES = I, r.pctEncChar = D, r.pctDecChars = G, r.parse = $e, r.removeDotSegments = Te, r.serialize = me, r.resolveComponents = ft, r.resolve = Rt, r.normalize = Xe, r.equal = Tt, r.escapeComponent = Bt, r.unescapeComponent = ge, Object.defineProperty(r, "__esModule", { value: !0 });
  });
})(Or, Or.exports);
var ti = Or.exports;
Object.defineProperty(zr, "__esModule", { value: !0 });
const ka = ti;
ka.code = 'require("ajv/dist/runtime/uri").default';
zr.default = ka;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.CodeGen = e.Name = e.nil = e.stringify = e.str = e._ = e.KeywordCxt = void 0;
  var t = Ne;
  Object.defineProperty(e, "KeywordCxt", { enumerable: !0, get: function() {
    return t.KeywordCxt;
  } });
  var r = H;
  Object.defineProperty(e, "_", { enumerable: !0, get: function() {
    return r._;
  } }), Object.defineProperty(e, "str", { enumerable: !0, get: function() {
    return r.str;
  } }), Object.defineProperty(e, "stringify", { enumerable: !0, get: function() {
    return r.stringify;
  } }), Object.defineProperty(e, "nil", { enumerable: !0, get: function() {
    return r.nil;
  } }), Object.defineProperty(e, "Name", { enumerable: !0, get: function() {
    return r.Name;
  } }), Object.defineProperty(e, "CodeGen", { enumerable: !0, get: function() {
    return r.CodeGen;
  } });
  const n = Ht, a = Gt, o = at, c = ve, f = H, y = de, p = ce, m = k, $ = ei, R = zr, O = (j, v) => new RegExp(j, v);
  O.code = "new RegExp";
  const S = ["removeAdditional", "useDefaults", "coerceTypes"], P = /* @__PURE__ */ new Set([
    "validate",
    "serialize",
    "parse",
    "wrapper",
    "root",
    "schema",
    "keyword",
    "pattern",
    "formats",
    "validate$data",
    "func",
    "obj",
    "Error"
  ]), g = {
    errorDataPath: "",
    format: "`validateFormats: false` can be used instead.",
    nullable: '"nullable" keyword is supported by default.',
    jsonPointers: "Deprecated jsPropertySyntax can be used instead.",
    extendRefs: "Deprecated ignoreKeywordsWithRef can be used instead.",
    missingRefs: "Pass empty schema with $id that should be ignored to ajv.addSchema.",
    processCode: "Use option `code: {process: (code, schemaEnv: object) => string}`",
    sourceCode: "Use option `code: {source: true}`",
    strictDefaults: "It is default now, see option `strict`.",
    strictKeywords: "It is default now, see option `strict`.",
    uniqueItems: '"uniqueItems" keyword is always validated.',
    unknownFormats: "Disable strict mode or pass `true` to `ajv.addFormat` (or `formats` option).",
    cache: "Map is used as cache, schema object as key.",
    serialize: "Map is used as cache, schema object as key.",
    ajvErrors: "It is default now."
  }, h = {
    ignoreKeywordsWithRef: "",
    jsPropertySyntax: "",
    unicode: '"minLength"/"maxLength" account for unicode characters by default.'
  }, b = 200;
  function T(j) {
    var v, C, _, s, l, N, I, D, G, B, re, Re, ct, Pt, Nt, $e, Ot, ut, lt, dt, Ct, Te, me, ft, Rt;
    const Xe = j.strict, Tt = (v = j.code) === null || v === void 0 ? void 0 : v.optimize, Bt = Tt === !0 || Tt === void 0 ? 1 : Tt || 0, ge = (_ = (C = j.code) === null || C === void 0 ? void 0 : C.regExp) !== null && _ !== void 0 ? _ : O, Ye = (s = j.uriResolver) !== null && s !== void 0 ? s : R.default;
    return {
      strictSchema: (N = (l = j.strictSchema) !== null && l !== void 0 ? l : Xe) !== null && N !== void 0 ? N : !0,
      strictNumbers: (D = (I = j.strictNumbers) !== null && I !== void 0 ? I : Xe) !== null && D !== void 0 ? D : !0,
      strictTypes: (B = (G = j.strictTypes) !== null && G !== void 0 ? G : Xe) !== null && B !== void 0 ? B : "log",
      strictTuples: (Re = (re = j.strictTuples) !== null && re !== void 0 ? re : Xe) !== null && Re !== void 0 ? Re : "log",
      strictRequired: (Pt = (ct = j.strictRequired) !== null && ct !== void 0 ? ct : Xe) !== null && Pt !== void 0 ? Pt : !1,
      code: j.code ? { ...j.code, optimize: Bt, regExp: ge } : { optimize: Bt, regExp: ge },
      loopRequired: (Nt = j.loopRequired) !== null && Nt !== void 0 ? Nt : b,
      loopEnum: ($e = j.loopEnum) !== null && $e !== void 0 ? $e : b,
      meta: (Ot = j.meta) !== null && Ot !== void 0 ? Ot : !0,
      messages: (ut = j.messages) !== null && ut !== void 0 ? ut : !0,
      inlineRefs: (lt = j.inlineRefs) !== null && lt !== void 0 ? lt : !0,
      schemaId: (dt = j.schemaId) !== null && dt !== void 0 ? dt : "$id",
      addUsedSchema: (Ct = j.addUsedSchema) !== null && Ct !== void 0 ? Ct : !0,
      validateSchema: (Te = j.validateSchema) !== null && Te !== void 0 ? Te : !0,
      validateFormats: (me = j.validateFormats) !== null && me !== void 0 ? me : !0,
      unicodeRegExp: (ft = j.unicodeRegExp) !== null && ft !== void 0 ? ft : !0,
      int32range: (Rt = j.int32range) !== null && Rt !== void 0 ? Rt : !0,
      uriResolver: Ye
    };
  }
  class A {
    constructor(v = {}) {
      this.schemas = {}, this.refs = {}, this.formats = {}, this._compilations = /* @__PURE__ */ new Set(), this._loading = {}, this._cache = /* @__PURE__ */ new Map(), v = this.opts = { ...v, ...T(v) };
      const { es5: C, lines: _ } = this.opts.code;
      this.scope = new f.ValueScope({ scope: {}, prefixes: P, es5: C, lines: _ }), this.logger = oe(v.logger);
      const s = v.validateFormats;
      v.validateFormats = !1, this.RULES = (0, o.getRules)(), M.call(this, g, v, "NOT SUPPORTED"), M.call(this, h, v, "DEPRECATED", "warn"), this._metaOpts = Fe.call(this), v.formats && Ee.call(this), this._addVocabularies(), this._addDefaultMetaSchema(), v.keywords && Oe.call(this, v.keywords), typeof v.meta == "object" && this.addMetaSchema(v.meta), ue.call(this), v.validateFormats = s;
    }
    _addVocabularies() {
      this.addKeyword("$async");
    }
    _addDefaultMetaSchema() {
      const { $data: v, meta: C, schemaId: _ } = this.opts;
      let s = $;
      _ === "id" && (s = { ...$ }, s.id = s.$id, delete s.$id), C && v && this.addMetaSchema(s, s[_], !1);
    }
    defaultMeta() {
      const { meta: v, schemaId: C } = this.opts;
      return this.opts.defaultMeta = typeof v == "object" ? v[C] || v : void 0;
    }
    validate(v, C) {
      let _;
      if (typeof v == "string") {
        if (_ = this.getSchema(v), !_)
          throw new Error(`no schema with key or ref "${v}"`);
      } else
        _ = this.compile(v);
      const s = _(C);
      return "$async" in _ || (this.errors = _.errors), s;
    }
    compile(v, C) {
      const _ = this._addSchema(v, C);
      return _.validate || this._compileSchemaEnv(_);
    }
    compileAsync(v, C) {
      if (typeof this.opts.loadSchema != "function")
        throw new Error("options.loadSchema should be a function");
      const { loadSchema: _ } = this.opts;
      return s.call(this, v, C);
      async function s(B, re) {
        await l.call(this, B.$schema);
        const Re = this._addSchema(B, re);
        return Re.validate || N.call(this, Re);
      }
      async function l(B) {
        B && !this.getSchema(B) && await s.call(this, { $ref: B }, !0);
      }
      async function N(B) {
        try {
          return this._compileSchemaEnv(B);
        } catch (re) {
          if (!(re instanceof a.default))
            throw re;
          return I.call(this, re), await D.call(this, re.missingSchema), N.call(this, B);
        }
      }
      function I({ missingSchema: B, missingRef: re }) {
        if (this.refs[B])
          throw new Error(`AnySchema ${B} is loaded but ${re} cannot be resolved`);
      }
      async function D(B) {
        const re = await G.call(this, B);
        this.refs[B] || await l.call(this, re.$schema), this.refs[B] || this.addSchema(re, B, C);
      }
      async function G(B) {
        const re = this._loading[B];
        if (re)
          return re;
        try {
          return await (this._loading[B] = _(B));
        } finally {
          delete this._loading[B];
        }
      }
    }
    // Adds schema to the instance
    addSchema(v, C, _, s = this.opts.validateSchema) {
      if (Array.isArray(v)) {
        for (const N of v)
          this.addSchema(N, void 0, _, s);
        return this;
      }
      let l;
      if (typeof v == "object") {
        const { schemaId: N } = this.opts;
        if (l = v[N], l !== void 0 && typeof l != "string")
          throw new Error(`schema ${N} must be string`);
      }
      return C = (0, y.normalizeId)(C || l), this._checkUnique(C), this.schemas[C] = this._addSchema(v, _, C, s, !0), this;
    }
    // Add schema that will be used to validate other schemas
    // options in META_IGNORE_OPTIONS are alway set to false
    addMetaSchema(v, C, _ = this.opts.validateSchema) {
      return this.addSchema(v, C, !0, _), this;
    }
    //  Validate schema against its meta-schema
    validateSchema(v, C) {
      if (typeof v == "boolean")
        return !0;
      let _;
      if (_ = v.$schema, _ !== void 0 && typeof _ != "string")
        throw new Error("$schema must be a string");
      if (_ = _ || this.opts.defaultMeta || this.defaultMeta(), !_)
        return this.logger.warn("meta-schema not available"), this.errors = null, !0;
      const s = this.validate(_, v);
      if (!s && C) {
        const l = "schema is invalid: " + this.errorsText();
        if (this.opts.validateSchema === "log")
          this.logger.error(l);
        else
          throw new Error(l);
      }
      return s;
    }
    // Get compiled schema by `key` or `ref`.
    // (`key` that was passed to `addSchema` or full schema reference - `schema.$id` or resolved id)
    getSchema(v) {
      let C;
      for (; typeof (C = Q.call(this, v)) == "string"; )
        v = C;
      if (C === void 0) {
        const { schemaId: _ } = this.opts, s = new c.SchemaEnv({ schema: {}, schemaId: _ });
        if (C = c.resolveSchema.call(this, s, v), !C)
          return;
        this.refs[v] = C;
      }
      return C.validate || this._compileSchemaEnv(C);
    }
    // Remove cached schema(s).
    // If no parameter is passed all schemas but meta-schemas are removed.
    // If RegExp is passed all schemas with key/id matching pattern but meta-schemas are removed.
    // Even if schema is referenced by other schemas it still can be removed as other schemas have local references.
    removeSchema(v) {
      if (v instanceof RegExp)
        return this._removeAllSchemas(this.schemas, v), this._removeAllSchemas(this.refs, v), this;
      switch (typeof v) {
        case "undefined":
          return this._removeAllSchemas(this.schemas), this._removeAllSchemas(this.refs), this._cache.clear(), this;
        case "string": {
          const C = Q.call(this, v);
          return typeof C == "object" && this._cache.delete(C.schema), delete this.schemas[v], delete this.refs[v], this;
        }
        case "object": {
          const C = v;
          this._cache.delete(C);
          let _ = v[this.opts.schemaId];
          return _ && (_ = (0, y.normalizeId)(_), delete this.schemas[_], delete this.refs[_]), this;
        }
        default:
          throw new Error("ajv.removeSchema: invalid parameter");
      }
    }
    // add "vocabulary" - a collection of keywords
    addVocabulary(v) {
      for (const C of v)
        this.addKeyword(C);
      return this;
    }
    addKeyword(v, C) {
      let _;
      if (typeof v == "string")
        _ = v, typeof C == "object" && (this.logger.warn("these parameters are deprecated, see docs for addKeyword"), C.keyword = _);
      else if (typeof v == "object" && C === void 0) {
        if (C = v, _ = C.keyword, Array.isArray(_) && !_.length)
          throw new Error("addKeywords: keyword must be string or non-empty array");
      } else
        throw new Error("invalid addKeywords parameters");
      if (fe.call(this, _, C), !C)
        return (0, m.eachItem)(_, (l) => We.call(this, l)), this;
      ot.call(this, C);
      const s = {
        ...C,
        type: (0, p.getJSONTypes)(C.type),
        schemaType: (0, p.getJSONTypes)(C.schemaType)
      };
      return (0, m.eachItem)(_, s.type.length === 0 ? (l) => We.call(this, l, s) : (l) => s.type.forEach((N) => We.call(this, l, s, N))), this;
    }
    getKeyword(v) {
      const C = this.RULES.all[v];
      return typeof C == "object" ? C.definition : !!C;
    }
    // Remove keyword
    removeKeyword(v) {
      const { RULES: C } = this;
      delete C.keywords[v], delete C.all[v];
      for (const _ of C.rules) {
        const s = _.rules.findIndex((l) => l.keyword === v);
        s >= 0 && _.rules.splice(s, 1);
      }
      return this;
    }
    // Add format
    addFormat(v, C) {
      return typeof C == "string" && (C = new RegExp(C)), this.formats[v] = C, this;
    }
    errorsText(v = this.errors, { separator: C = ", ", dataVar: _ = "data" } = {}) {
      return !v || v.length === 0 ? "No errors" : v.map((s) => `${_}${s.instancePath} ${s.message}`).reduce((s, l) => s + C + l);
    }
    $dataMetaSchema(v, C) {
      const _ = this.RULES.all;
      v = JSON.parse(JSON.stringify(v));
      for (const s of C) {
        const l = s.split("/").slice(1);
        let N = v;
        for (const I of l)
          N = N[I];
        for (const I in _) {
          const D = _[I];
          if (typeof D != "object")
            continue;
          const { $data: G } = D.definition, B = N[I];
          G && B && (N[I] = it(B));
        }
      }
      return v;
    }
    _removeAllSchemas(v, C) {
      for (const _ in v) {
        const s = v[_];
        (!C || C.test(_)) && (typeof s == "string" ? delete v[_] : s && !s.meta && (this._cache.delete(s.schema), delete v[_]));
      }
    }
    _addSchema(v, C, _, s = this.opts.validateSchema, l = this.opts.addUsedSchema) {
      let N;
      const { schemaId: I } = this.opts;
      if (typeof v == "object")
        N = v[I];
      else {
        if (this.opts.jtd)
          throw new Error("schema must be object");
        if (typeof v != "boolean")
          throw new Error("schema must be object or boolean");
      }
      let D = this._cache.get(v);
      if (D !== void 0)
        return D;
      _ = (0, y.normalizeId)(N || _);
      const G = y.getSchemaRefs.call(this, v, _);
      return D = new c.SchemaEnv({ schema: v, schemaId: I, meta: C, baseId: _, localRefs: G }), this._cache.set(D.schema, D), l && !_.startsWith("#") && (_ && this._checkUnique(_), this.refs[_] = D), s && this.validateSchema(v, !0), D;
    }
    _checkUnique(v) {
      if (this.schemas[v] || this.refs[v])
        throw new Error(`schema with key or id "${v}" already exists`);
    }
    _compileSchemaEnv(v) {
      if (v.meta ? this._compileMetaSchema(v) : c.compileSchema.call(this, v), !v.validate)
        throw new Error("ajv implementation error");
      return v.validate;
    }
    _compileMetaSchema(v) {
      const C = this.opts;
      this.opts = this._metaOpts;
      try {
        c.compileSchema.call(this, v);
      } finally {
        this.opts = C;
      }
    }
  }
  A.ValidationError = n.default, A.MissingRefError = a.default, e.default = A;
  function M(j, v, C, _ = "error") {
    for (const s in j) {
      const l = s;
      l in v && this.logger[_](`${C}: option ${s}. ${j[l]}`);
    }
  }
  function Q(j) {
    return j = (0, y.normalizeId)(j), this.schemas[j] || this.refs[j];
  }
  function ue() {
    const j = this.opts.schemas;
    if (j)
      if (Array.isArray(j))
        this.addSchema(j);
      else
        for (const v in j)
          this.addSchema(j[v], v);
  }
  function Ee() {
    for (const j in this.opts.formats) {
      const v = this.opts.formats[j];
      v && this.addFormat(j, v);
    }
  }
  function Oe(j) {
    if (Array.isArray(j)) {
      this.addVocabulary(j);
      return;
    }
    this.logger.warn("keywords option as map is deprecated, pass array");
    for (const v in j) {
      const C = j[v];
      C.keyword || (C.keyword = v), this.addKeyword(C);
    }
  }
  function Fe() {
    const j = { ...this.opts };
    for (const v of S)
      delete j[v];
    return j;
  }
  const Ue = { log() {
  }, warn() {
  }, error() {
  } };
  function oe(j) {
    if (j === !1)
      return Ue;
    if (j === void 0)
      return console;
    if (j.log && j.warn && j.error)
      return j;
    throw new Error("logger must implement log, warn and error methods");
  }
  const Ce = /^[a-z_$][a-z0-9_$:-]*$/i;
  function fe(j, v) {
    const { RULES: C } = this;
    if ((0, m.eachItem)(j, (_) => {
      if (C.keywords[_])
        throw new Error(`Keyword ${_} is already defined`);
      if (!Ce.test(_))
        throw new Error(`Keyword ${_} has invalid name`);
    }), !!v && v.$data && !("code" in v || "validate" in v))
      throw new Error('$data keyword must have "code" or "validate" function');
  }
  function We(j, v, C) {
    var _;
    const s = v == null ? void 0 : v.post;
    if (C && s)
      throw new Error('keyword with "post" flag cannot have "type"');
    const { RULES: l } = this;
    let N = s ? l.post : l.rules.find(({ type: D }) => D === C);
    if (N || (N = { type: C, rules: [] }, l.rules.push(N)), l.keywords[j] = !0, !v)
      return;
    const I = {
      keyword: j,
      definition: {
        ...v,
        type: (0, p.getJSONTypes)(v.type),
        schemaType: (0, p.getJSONTypes)(v.schemaType)
      }
    };
    v.before ? Qe.call(this, N, I, v.before) : N.rules.push(I), l.all[j] = I, (_ = v.implements) === null || _ === void 0 || _.forEach((D) => this.addKeyword(D));
  }
  function Qe(j, v, C) {
    const _ = j.rules.findIndex((s) => s.keyword === C);
    _ >= 0 ? j.rules.splice(_, 0, v) : (j.rules.push(v), this.logger.warn(`rule ${C} is not defined`));
  }
  function ot(j) {
    let { metaSchema: v } = j;
    v !== void 0 && (j.$data && this.opts.$data && (v = it(v)), j.validateSchema = this.compile(v, !0));
  }
  const St = {
    $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"
  };
  function it(j) {
    return { anyOf: [j, St] };
  }
})(ea);
var Lr = {}, Kr = {}, Hr = {};
Object.defineProperty(Hr, "__esModule", { value: !0 });
const ri = {
  keyword: "id",
  code() {
    throw new Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
  }
};
Hr.default = ri;
var st = {};
Object.defineProperty(st, "__esModule", { value: !0 });
st.callRef = st.getValidate = void 0;
const ni = Gt, zn = K, ye = H, yt = Ve, Ln = ve, Yt = k, ai = {
  keyword: "$ref",
  schemaType: "string",
  code(e) {
    const { gen: t, schema: r, it: n } = e, { baseId: a, schemaEnv: o, validateName: c, opts: f, self: y } = n, { root: p } = o;
    if ((r === "#" || r === "#/") && a === p.baseId)
      return $();
    const m = Ln.resolveRef.call(y, p, a, r);
    if (m === void 0)
      throw new ni.default(n.opts.uriResolver, a, r);
    if (m instanceof Ln.SchemaEnv)
      return R(m);
    return O(m);
    function $() {
      if (o === p)
        return nr(e, c, o, o.$async);
      const S = t.scopeValue("root", { ref: p });
      return nr(e, (0, ye._)`${S}.validate`, p, p.$async);
    }
    function R(S) {
      const P = Da(e, S);
      nr(e, P, S, S.$async);
    }
    function O(S) {
      const P = t.scopeValue("schema", f.code.source === !0 ? { ref: S, code: (0, ye.stringify)(S) } : { ref: S }), g = t.name("valid"), h = e.subschema({
        schema: S,
        dataTypes: [],
        schemaPath: ye.nil,
        topSchemaRef: P,
        errSchemaPath: r
      }, g);
      e.mergeEvaluated(h), e.ok(g);
    }
  }
};
function Da(e, t) {
  const { gen: r } = e;
  return t.validate ? r.scopeValue("validate", { ref: t.validate }) : (0, ye._)`${r.scopeValue("wrapper", { ref: t })}.validate`;
}
st.getValidate = Da;
function nr(e, t, r, n) {
  const { gen: a, it: o } = e, { allErrors: c, schemaEnv: f, opts: y } = o, p = y.passContext ? yt.default.this : ye.nil;
  n ? m() : $();
  function m() {
    if (!f.$async)
      throw new Error("async schema referenced by sync schema");
    const S = a.let("valid");
    a.try(() => {
      a.code((0, ye._)`await ${(0, zn.callValidateCode)(e, t, p)}`), O(t), c || a.assign(S, !0);
    }, (P) => {
      a.if((0, ye._)`!(${P} instanceof ${o.ValidationError})`, () => a.throw(P)), R(P), c || a.assign(S, !1);
    }), e.ok(S);
  }
  function $() {
    e.result((0, zn.callValidateCode)(e, t, p), () => O(t), () => R(t));
  }
  function R(S) {
    const P = (0, ye._)`${S}.errors`;
    a.assign(yt.default.vErrors, (0, ye._)`${yt.default.vErrors} === null ? ${P} : ${yt.default.vErrors}.concat(${P})`), a.assign(yt.default.errors, (0, ye._)`${yt.default.vErrors}.length`);
  }
  function O(S) {
    var P;
    if (!o.opts.unevaluated)
      return;
    const g = (P = r == null ? void 0 : r.validate) === null || P === void 0 ? void 0 : P.evaluated;
    if (o.props !== !0)
      if (g && !g.dynamicProps)
        g.props !== void 0 && (o.props = Yt.mergeEvaluated.props(a, g.props, o.props));
      else {
        const h = a.var("props", (0, ye._)`${S}.evaluated.props`);
        o.props = Yt.mergeEvaluated.props(a, h, o.props, ye.Name);
      }
    if (o.items !== !0)
      if (g && !g.dynamicItems)
        g.items !== void 0 && (o.items = Yt.mergeEvaluated.items(a, g.items, o.items));
      else {
        const h = a.var("items", (0, ye._)`${S}.evaluated.items`);
        o.items = Yt.mergeEvaluated.items(a, h, o.items, ye.Name);
      }
  }
}
st.callRef = nr;
st.default = ai;
Object.defineProperty(Kr, "__esModule", { value: !0 });
const si = Hr, oi = st, ii = [
  "$schema",
  "$id",
  "$defs",
  "$vocabulary",
  { keyword: "$comment" },
  "definitions",
  si.default,
  oi.default
];
Kr.default = ii;
var Gr = {}, Jr = {};
Object.defineProperty(Jr, "__esModule", { value: !0 });
const ir = H, Ge = ir.operators, cr = {
  maximum: { okStr: "<=", ok: Ge.LTE, fail: Ge.GT },
  minimum: { okStr: ">=", ok: Ge.GTE, fail: Ge.LT },
  exclusiveMaximum: { okStr: "<", ok: Ge.LT, fail: Ge.GTE },
  exclusiveMinimum: { okStr: ">", ok: Ge.GT, fail: Ge.LTE }
}, ci = {
  message: ({ keyword: e, schemaCode: t }) => (0, ir.str)`must be ${cr[e].okStr} ${t}`,
  params: ({ keyword: e, schemaCode: t }) => (0, ir._)`{comparison: ${cr[e].okStr}, limit: ${t}}`
}, ui = {
  keyword: Object.keys(cr),
  type: "number",
  schemaType: "number",
  $data: !0,
  error: ci,
  code(e) {
    const { keyword: t, data: r, schemaCode: n } = e;
    e.fail$data((0, ir._)`${r} ${cr[t].fail} ${n} || isNaN(${r})`);
  }
};
Jr.default = ui;
var Br = {};
Object.defineProperty(Br, "__esModule", { value: !0 });
const Ft = H, li = {
  message: ({ schemaCode: e }) => (0, Ft.str)`must be multiple of ${e}`,
  params: ({ schemaCode: e }) => (0, Ft._)`{multipleOf: ${e}}`
}, di = {
  keyword: "multipleOf",
  type: "number",
  schemaType: "number",
  $data: !0,
  error: li,
  code(e) {
    const { gen: t, data: r, schemaCode: n, it: a } = e, o = a.opts.multipleOfPrecision, c = t.let("res"), f = o ? (0, Ft._)`Math.abs(Math.round(${c}) - ${c}) > 1e-${o}` : (0, Ft._)`${c} !== parseInt(${c})`;
    e.fail$data((0, Ft._)`(${n} === 0 || (${c} = ${r}/${n}, ${f}))`);
  }
};
Br.default = di;
var Wr = {}, Qr = {};
Object.defineProperty(Qr, "__esModule", { value: !0 });
function Aa(e) {
  const t = e.length;
  let r = 0, n = 0, a;
  for (; n < t; )
    r++, a = e.charCodeAt(n++), a >= 55296 && a <= 56319 && n < t && (a = e.charCodeAt(n), (a & 64512) === 56320 && n++);
  return r;
}
Qr.default = Aa;
Aa.code = 'require("ajv/dist/runtime/ucs2length").default';
Object.defineProperty(Wr, "__esModule", { value: !0 });
const rt = H, fi = k, hi = Qr, pi = {
  message({ keyword: e, schemaCode: t }) {
    const r = e === "maxLength" ? "more" : "fewer";
    return (0, rt.str)`must NOT have ${r} than ${t} characters`;
  },
  params: ({ schemaCode: e }) => (0, rt._)`{limit: ${e}}`
}, mi = {
  keyword: ["maxLength", "minLength"],
  type: "string",
  schemaType: "number",
  $data: !0,
  error: pi,
  code(e) {
    const { keyword: t, data: r, schemaCode: n, it: a } = e, o = t === "maxLength" ? rt.operators.GT : rt.operators.LT, c = a.opts.unicode === !1 ? (0, rt._)`${r}.length` : (0, rt._)`${(0, fi.useFunc)(e.gen, hi.default)}(${r})`;
    e.fail$data((0, rt._)`${c} ${o} ${n}`);
  }
};
Wr.default = mi;
var Xr = {};
Object.defineProperty(Xr, "__esModule", { value: !0 });
const yi = K, ur = H, vi = {
  message: ({ schemaCode: e }) => (0, ur.str)`must match pattern "${e}"`,
  params: ({ schemaCode: e }) => (0, ur._)`{pattern: ${e}}`
}, $i = {
  keyword: "pattern",
  type: "string",
  schemaType: "string",
  $data: !0,
  error: vi,
  code(e) {
    const { data: t, $data: r, schema: n, schemaCode: a, it: o } = e, c = o.opts.unicodeRegExp ? "u" : "", f = r ? (0, ur._)`(new RegExp(${a}, ${c}))` : (0, yi.usePattern)(e, n);
    e.fail$data((0, ur._)`!${f}.test(${t})`);
  }
};
Xr.default = $i;
var Yr = {};
Object.defineProperty(Yr, "__esModule", { value: !0 });
const Ut = H, gi = {
  message({ keyword: e, schemaCode: t }) {
    const r = e === "maxProperties" ? "more" : "fewer";
    return (0, Ut.str)`must NOT have ${r} than ${t} properties`;
  },
  params: ({ schemaCode: e }) => (0, Ut._)`{limit: ${e}}`
}, _i = {
  keyword: ["maxProperties", "minProperties"],
  type: "object",
  schemaType: "number",
  $data: !0,
  error: gi,
  code(e) {
    const { keyword: t, data: r, schemaCode: n } = e, a = t === "maxProperties" ? Ut.operators.GT : Ut.operators.LT;
    e.fail$data((0, Ut._)`Object.keys(${r}).length ${a} ${n}`);
  }
};
Yr.default = _i;
var Zr = {};
Object.defineProperty(Zr, "__esModule", { value: !0 });
const At = K, qt = H, wi = k, Ei = {
  message: ({ params: { missingProperty: e } }) => (0, qt.str)`must have required property '${e}'`,
  params: ({ params: { missingProperty: e } }) => (0, qt._)`{missingProperty: ${e}}`
}, bi = {
  keyword: "required",
  type: "object",
  schemaType: "array",
  $data: !0,
  error: Ei,
  code(e) {
    const { gen: t, schema: r, schemaCode: n, data: a, $data: o, it: c } = e, { opts: f } = c;
    if (!o && r.length === 0)
      return;
    const y = r.length >= f.loopRequired;
    if (c.allErrors ? p() : m(), f.strictRequired) {
      const O = e.parentSchema.properties, { definedProperties: S } = e.it;
      for (const P of r)
        if ((O == null ? void 0 : O[P]) === void 0 && !S.has(P)) {
          const g = c.schemaEnv.baseId + c.errSchemaPath, h = `required property "${P}" is not defined at "${g}" (strictRequired)`;
          (0, wi.checkStrictMode)(c, h, c.opts.strictRequired);
        }
    }
    function p() {
      if (y || o)
        e.block$data(qt.nil, $);
      else
        for (const O of r)
          (0, At.checkReportMissingProp)(e, O);
    }
    function m() {
      const O = t.let("missing");
      if (y || o) {
        const S = t.let("valid", !0);
        e.block$data(S, () => R(O, S)), e.ok(S);
      } else
        t.if((0, At.checkMissingProp)(e, r, O)), (0, At.reportMissingProp)(e, O), t.else();
    }
    function $() {
      t.forOf("prop", n, (O) => {
        e.setParams({ missingProperty: O }), t.if((0, At.noPropertyInData)(t, a, O, f.ownProperties), () => e.error());
      });
    }
    function R(O, S) {
      e.setParams({ missingProperty: O }), t.forOf(O, n, () => {
        t.assign(S, (0, At.propertyInData)(t, a, O, f.ownProperties)), t.if((0, qt.not)(S), () => {
          e.error(), t.break();
        });
      }, qt.nil);
    }
  }
};
Zr.default = bi;
var xr = {};
Object.defineProperty(xr, "__esModule", { value: !0 });
const zt = H, Si = {
  message({ keyword: e, schemaCode: t }) {
    const r = e === "maxItems" ? "more" : "fewer";
    return (0, zt.str)`must NOT have ${r} than ${t} items`;
  },
  params: ({ schemaCode: e }) => (0, zt._)`{limit: ${e}}`
}, Pi = {
  keyword: ["maxItems", "minItems"],
  type: "array",
  schemaType: "number",
  $data: !0,
  error: Si,
  code(e) {
    const { keyword: t, data: r, schemaCode: n } = e, a = t === "maxItems" ? zt.operators.GT : zt.operators.LT;
    e.fail$data((0, zt._)`${r}.length ${a} ${n}`);
  }
};
xr.default = Pi;
var en = {}, Jt = {};
Object.defineProperty(Jt, "__esModule", { value: !0 });
const Ma = ya;
Ma.code = 'require("ajv/dist/runtime/equal").default';
Jt.default = Ma;
Object.defineProperty(en, "__esModule", { value: !0 });
const _r = ce, le = H, Ni = k, Oi = Jt, Ci = {
  message: ({ params: { i: e, j: t } }) => (0, le.str)`must NOT have duplicate items (items ## ${t} and ${e} are identical)`,
  params: ({ params: { i: e, j: t } }) => (0, le._)`{i: ${e}, j: ${t}}`
}, Ri = {
  keyword: "uniqueItems",
  type: "array",
  schemaType: "boolean",
  $data: !0,
  error: Ci,
  code(e) {
    const { gen: t, data: r, $data: n, schema: a, parentSchema: o, schemaCode: c, it: f } = e;
    if (!n && !a)
      return;
    const y = t.let("valid"), p = o.items ? (0, _r.getSchemaTypes)(o.items) : [];
    e.block$data(y, m, (0, le._)`${c} === false`), e.ok(y);
    function m() {
      const S = t.let("i", (0, le._)`${r}.length`), P = t.let("j");
      e.setParams({ i: S, j: P }), t.assign(y, !0), t.if((0, le._)`${S} > 1`, () => ($() ? R : O)(S, P));
    }
    function $() {
      return p.length > 0 && !p.some((S) => S === "object" || S === "array");
    }
    function R(S, P) {
      const g = t.name("item"), h = (0, _r.checkDataTypes)(p, g, f.opts.strictNumbers, _r.DataType.Wrong), b = t.const("indices", (0, le._)`{}`);
      t.for((0, le._)`;${S}--;`, () => {
        t.let(g, (0, le._)`${r}[${S}]`), t.if(h, (0, le._)`continue`), p.length > 1 && t.if((0, le._)`typeof ${g} == "string"`, (0, le._)`${g} += "_"`), t.if((0, le._)`typeof ${b}[${g}] == "number"`, () => {
          t.assign(P, (0, le._)`${b}[${g}]`), e.error(), t.assign(y, !1).break();
        }).code((0, le._)`${b}[${g}] = ${S}`);
      });
    }
    function O(S, P) {
      const g = (0, Ni.useFunc)(t, Oi.default), h = t.name("outer");
      t.label(h).for((0, le._)`;${S}--;`, () => t.for((0, le._)`${P} = ${S}; ${P}--;`, () => t.if((0, le._)`${g}(${r}[${S}], ${r}[${P}])`, () => {
        e.error(), t.assign(y, !1).break(h);
      })));
    }
  }
};
en.default = Ri;
var tn = {};
Object.defineProperty(tn, "__esModule", { value: !0 });
const Cr = H, Ti = k, ji = Jt, Ii = {
  message: "must be equal to constant",
  params: ({ schemaCode: e }) => (0, Cr._)`{allowedValue: ${e}}`
}, ki = {
  keyword: "const",
  $data: !0,
  error: Ii,
  code(e) {
    const { gen: t, data: r, $data: n, schemaCode: a, schema: o } = e;
    n || o && typeof o == "object" ? e.fail$data((0, Cr._)`!${(0, Ti.useFunc)(t, ji.default)}(${r}, ${a})`) : e.fail((0, Cr._)`${o} !== ${r}`);
  }
};
tn.default = ki;
var rn = {};
Object.defineProperty(rn, "__esModule", { value: !0 });
const Mt = H, Di = k, Ai = Jt, Mi = {
  message: "must be equal to one of the allowed values",
  params: ({ schemaCode: e }) => (0, Mt._)`{allowedValues: ${e}}`
}, Vi = {
  keyword: "enum",
  schemaType: "array",
  $data: !0,
  error: Mi,
  code(e) {
    const { gen: t, data: r, $data: n, schema: a, schemaCode: o, it: c } = e;
    if (!n && a.length === 0)
      throw new Error("enum must have non-empty array");
    const f = a.length >= c.opts.loopEnum;
    let y;
    const p = () => y ?? (y = (0, Di.useFunc)(t, Ai.default));
    let m;
    if (f || n)
      m = t.let("valid"), e.block$data(m, $);
    else {
      if (!Array.isArray(a))
        throw new Error("ajv implementation error");
      const O = t.const("vSchema", o);
      m = (0, Mt.or)(...a.map((S, P) => R(O, P)));
    }
    e.pass(m);
    function $() {
      t.assign(m, !1), t.forOf("v", o, (O) => t.if((0, Mt._)`${p()}(${r}, ${O})`, () => t.assign(m, !0).break()));
    }
    function R(O, S) {
      const P = a[S];
      return typeof P == "object" && P !== null ? (0, Mt._)`${p()}(${r}, ${O}[${S}])` : (0, Mt._)`${r} === ${P}`;
    }
  }
};
rn.default = Vi;
Object.defineProperty(Gr, "__esModule", { value: !0 });
const Fi = Jr, Ui = Br, qi = Wr, zi = Xr, Li = Yr, Ki = Zr, Hi = xr, Gi = en, Ji = tn, Bi = rn, Wi = [
  // number
  Fi.default,
  Ui.default,
  // string
  qi.default,
  zi.default,
  // object
  Li.default,
  Ki.default,
  // array
  Hi.default,
  Gi.default,
  // any
  { keyword: "type", schemaType: ["string", "array"] },
  { keyword: "nullable", schemaType: "boolean" },
  Ji.default,
  Bi.default
];
Gr.default = Wi;
var nn = {}, Et = {};
Object.defineProperty(Et, "__esModule", { value: !0 });
Et.validateAdditionalItems = void 0;
const nt = H, Rr = k, Qi = {
  message: ({ params: { len: e } }) => (0, nt.str)`must NOT have more than ${e} items`,
  params: ({ params: { len: e } }) => (0, nt._)`{limit: ${e}}`
}, Xi = {
  keyword: "additionalItems",
  type: "array",
  schemaType: ["boolean", "object"],
  before: "uniqueItems",
  error: Qi,
  code(e) {
    const { parentSchema: t, it: r } = e, { items: n } = t;
    if (!Array.isArray(n)) {
      (0, Rr.checkStrictMode)(r, '"additionalItems" is ignored when "items" is not an array of schemas');
      return;
    }
    Va(e, n);
  }
};
function Va(e, t) {
  const { gen: r, schema: n, data: a, keyword: o, it: c } = e;
  c.items = !0;
  const f = r.const("len", (0, nt._)`${a}.length`);
  if (n === !1)
    e.setParams({ len: t.length }), e.pass((0, nt._)`${f} <= ${t.length}`);
  else if (typeof n == "object" && !(0, Rr.alwaysValidSchema)(c, n)) {
    const p = r.var("valid", (0, nt._)`${f} <= ${t.length}`);
    r.if((0, nt.not)(p), () => y(p)), e.ok(p);
  }
  function y(p) {
    r.forRange("i", t.length, f, (m) => {
      e.subschema({ keyword: o, dataProp: m, dataPropType: Rr.Type.Num }, p), c.allErrors || r.if((0, nt.not)(p), () => r.break());
    });
  }
}
Et.validateAdditionalItems = Va;
Et.default = Xi;
var an = {}, bt = {};
Object.defineProperty(bt, "__esModule", { value: !0 });
bt.validateTuple = void 0;
const Kn = H, ar = k, Yi = K, Zi = {
  keyword: "items",
  type: "array",
  schemaType: ["object", "array", "boolean"],
  before: "uniqueItems",
  code(e) {
    const { schema: t, it: r } = e;
    if (Array.isArray(t))
      return Fa(e, "additionalItems", t);
    r.items = !0, !(0, ar.alwaysValidSchema)(r, t) && e.ok((0, Yi.validateArray)(e));
  }
};
function Fa(e, t, r = e.schema) {
  const { gen: n, parentSchema: a, data: o, keyword: c, it: f } = e;
  m(a), f.opts.unevaluated && r.length && f.items !== !0 && (f.items = ar.mergeEvaluated.items(n, r.length, f.items));
  const y = n.name("valid"), p = n.const("len", (0, Kn._)`${o}.length`);
  r.forEach(($, R) => {
    (0, ar.alwaysValidSchema)(f, $) || (n.if((0, Kn._)`${p} > ${R}`, () => e.subschema({
      keyword: c,
      schemaProp: R,
      dataProp: R
    }, y)), e.ok(y));
  });
  function m($) {
    const { opts: R, errSchemaPath: O } = f, S = r.length, P = S === $.minItems && (S === $.maxItems || $[t] === !1);
    if (R.strictTuples && !P) {
      const g = `"${c}" is ${S}-tuple, but minItems or maxItems/${t} are not specified or different at path "${O}"`;
      (0, ar.checkStrictMode)(f, g, R.strictTuples);
    }
  }
}
bt.validateTuple = Fa;
bt.default = Zi;
Object.defineProperty(an, "__esModule", { value: !0 });
const xi = bt, ec = {
  keyword: "prefixItems",
  type: "array",
  schemaType: ["array"],
  before: "uniqueItems",
  code: (e) => (0, xi.validateTuple)(e, "items")
};
an.default = ec;
var sn = {};
Object.defineProperty(sn, "__esModule", { value: !0 });
const Hn = H, tc = k, rc = K, nc = Et, ac = {
  message: ({ params: { len: e } }) => (0, Hn.str)`must NOT have more than ${e} items`,
  params: ({ params: { len: e } }) => (0, Hn._)`{limit: ${e}}`
}, sc = {
  keyword: "items",
  type: "array",
  schemaType: ["object", "boolean"],
  before: "uniqueItems",
  error: ac,
  code(e) {
    const { schema: t, parentSchema: r, it: n } = e, { prefixItems: a } = r;
    n.items = !0, !(0, tc.alwaysValidSchema)(n, t) && (a ? (0, nc.validateAdditionalItems)(e, a) : e.ok((0, rc.validateArray)(e)));
  }
};
sn.default = sc;
var on = {};
Object.defineProperty(on, "__esModule", { value: !0 });
const we = H, Zt = k, oc = {
  message: ({ params: { min: e, max: t } }) => t === void 0 ? (0, we.str)`must contain at least ${e} valid item(s)` : (0, we.str)`must contain at least ${e} and no more than ${t} valid item(s)`,
  params: ({ params: { min: e, max: t } }) => t === void 0 ? (0, we._)`{minContains: ${e}}` : (0, we._)`{minContains: ${e}, maxContains: ${t}}`
}, ic = {
  keyword: "contains",
  type: "array",
  schemaType: ["object", "boolean"],
  before: "uniqueItems",
  trackErrors: !0,
  error: oc,
  code(e) {
    const { gen: t, schema: r, parentSchema: n, data: a, it: o } = e;
    let c, f;
    const { minContains: y, maxContains: p } = n;
    o.opts.next ? (c = y === void 0 ? 1 : y, f = p) : c = 1;
    const m = t.const("len", (0, we._)`${a}.length`);
    if (e.setParams({ min: c, max: f }), f === void 0 && c === 0) {
      (0, Zt.checkStrictMode)(o, '"minContains" == 0 without "maxContains": "contains" keyword ignored');
      return;
    }
    if (f !== void 0 && c > f) {
      (0, Zt.checkStrictMode)(o, '"minContains" > "maxContains" is always invalid'), e.fail();
      return;
    }
    if ((0, Zt.alwaysValidSchema)(o, r)) {
      let P = (0, we._)`${m} >= ${c}`;
      f !== void 0 && (P = (0, we._)`${P} && ${m} <= ${f}`), e.pass(P);
      return;
    }
    o.items = !0;
    const $ = t.name("valid");
    f === void 0 && c === 1 ? O($, () => t.if($, () => t.break())) : c === 0 ? (t.let($, !0), f !== void 0 && t.if((0, we._)`${a}.length > 0`, R)) : (t.let($, !1), R()), e.result($, () => e.reset());
    function R() {
      const P = t.name("_valid"), g = t.let("count", 0);
      O(P, () => t.if(P, () => S(g)));
    }
    function O(P, g) {
      t.forRange("i", 0, m, (h) => {
        e.subschema({
          keyword: "contains",
          dataProp: h,
          dataPropType: Zt.Type.Num,
          compositeRule: !0
        }, P), g();
      });
    }
    function S(P) {
      t.code((0, we._)`${P}++`), f === void 0 ? t.if((0, we._)`${P} >= ${c}`, () => t.assign($, !0).break()) : (t.if((0, we._)`${P} > ${f}`, () => t.assign($, !1).break()), c === 1 ? t.assign($, !0) : t.if((0, we._)`${P} >= ${c}`, () => t.assign($, !0)));
    }
  }
};
on.default = ic;
var Ua = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.validateSchemaDeps = e.validatePropertyDeps = e.error = void 0;
  const t = H, r = k, n = K;
  e.error = {
    message: ({ params: { property: y, depsCount: p, deps: m } }) => {
      const $ = p === 1 ? "property" : "properties";
      return (0, t.str)`must have ${$} ${m} when property ${y} is present`;
    },
    params: ({ params: { property: y, depsCount: p, deps: m, missingProperty: $ } }) => (0, t._)`{property: ${y},
    missingProperty: ${$},
    depsCount: ${p},
    deps: ${m}}`
    // TODO change to reference
  };
  const a = {
    keyword: "dependencies",
    type: "object",
    schemaType: "object",
    error: e.error,
    code(y) {
      const [p, m] = o(y);
      c(y, p), f(y, m);
    }
  };
  function o({ schema: y }) {
    const p = {}, m = {};
    for (const $ in y) {
      if ($ === "__proto__")
        continue;
      const R = Array.isArray(y[$]) ? p : m;
      R[$] = y[$];
    }
    return [p, m];
  }
  function c(y, p = y.schema) {
    const { gen: m, data: $, it: R } = y;
    if (Object.keys(p).length === 0)
      return;
    const O = m.let("missing");
    for (const S in p) {
      const P = p[S];
      if (P.length === 0)
        continue;
      const g = (0, n.propertyInData)(m, $, S, R.opts.ownProperties);
      y.setParams({
        property: S,
        depsCount: P.length,
        deps: P.join(", ")
      }), R.allErrors ? m.if(g, () => {
        for (const h of P)
          (0, n.checkReportMissingProp)(y, h);
      }) : (m.if((0, t._)`${g} && (${(0, n.checkMissingProp)(y, P, O)})`), (0, n.reportMissingProp)(y, O), m.else());
    }
  }
  e.validatePropertyDeps = c;
  function f(y, p = y.schema) {
    const { gen: m, data: $, keyword: R, it: O } = y, S = m.name("valid");
    for (const P in p)
      (0, r.alwaysValidSchema)(O, p[P]) || (m.if(
        (0, n.propertyInData)(m, $, P, O.opts.ownProperties),
        () => {
          const g = y.subschema({ keyword: R, schemaProp: P }, S);
          y.mergeValidEvaluated(g, S);
        },
        () => m.var(S, !0)
        // TODO var
      ), y.ok(S));
  }
  e.validateSchemaDeps = f, e.default = a;
})(Ua);
var cn = {};
Object.defineProperty(cn, "__esModule", { value: !0 });
const qa = H, cc = k, uc = {
  message: "property name must be valid",
  params: ({ params: e }) => (0, qa._)`{propertyName: ${e.propertyName}}`
}, lc = {
  keyword: "propertyNames",
  type: "object",
  schemaType: ["object", "boolean"],
  error: uc,
  code(e) {
    const { gen: t, schema: r, data: n, it: a } = e;
    if ((0, cc.alwaysValidSchema)(a, r))
      return;
    const o = t.name("valid");
    t.forIn("key", n, (c) => {
      e.setParams({ propertyName: c }), e.subschema({
        keyword: "propertyNames",
        data: c,
        dataTypes: ["string"],
        propertyName: c,
        compositeRule: !0
      }, o), t.if((0, qa.not)(o), () => {
        e.error(!0), a.allErrors || t.break();
      });
    }), e.ok(o);
  }
};
cn.default = lc;
var pr = {};
Object.defineProperty(pr, "__esModule", { value: !0 });
const xt = K, Se = H, dc = Ve, er = k, fc = {
  message: "must NOT have additional properties",
  params: ({ params: e }) => (0, Se._)`{additionalProperty: ${e.additionalProperty}}`
}, hc = {
  keyword: "additionalProperties",
  type: ["object"],
  schemaType: ["boolean", "object"],
  allowUndefined: !0,
  trackErrors: !0,
  error: fc,
  code(e) {
    const { gen: t, schema: r, parentSchema: n, data: a, errsCount: o, it: c } = e;
    if (!o)
      throw new Error("ajv implementation error");
    const { allErrors: f, opts: y } = c;
    if (c.props = !0, y.removeAdditional !== "all" && (0, er.alwaysValidSchema)(c, r))
      return;
    const p = (0, xt.allSchemaProperties)(n.properties), m = (0, xt.allSchemaProperties)(n.patternProperties);
    $(), e.ok((0, Se._)`${o} === ${dc.default.errors}`);
    function $() {
      t.forIn("key", a, (g) => {
        !p.length && !m.length ? S(g) : t.if(R(g), () => S(g));
      });
    }
    function R(g) {
      let h;
      if (p.length > 8) {
        const b = (0, er.schemaRefOrVal)(c, n.properties, "properties");
        h = (0, xt.isOwnProperty)(t, b, g);
      } else
        p.length ? h = (0, Se.or)(...p.map((b) => (0, Se._)`${g} === ${b}`)) : h = Se.nil;
      return m.length && (h = (0, Se.or)(h, ...m.map((b) => (0, Se._)`${(0, xt.usePattern)(e, b)}.test(${g})`))), (0, Se.not)(h);
    }
    function O(g) {
      t.code((0, Se._)`delete ${a}[${g}]`);
    }
    function S(g) {
      if (y.removeAdditional === "all" || y.removeAdditional && r === !1) {
        O(g);
        return;
      }
      if (r === !1) {
        e.setParams({ additionalProperty: g }), e.error(), f || t.break();
        return;
      }
      if (typeof r == "object" && !(0, er.alwaysValidSchema)(c, r)) {
        const h = t.name("valid");
        y.removeAdditional === "failing" ? (P(g, h, !1), t.if((0, Se.not)(h), () => {
          e.reset(), O(g);
        })) : (P(g, h), f || t.if((0, Se.not)(h), () => t.break()));
      }
    }
    function P(g, h, b) {
      const T = {
        keyword: "additionalProperties",
        dataProp: g,
        dataPropType: er.Type.Str
      };
      b === !1 && Object.assign(T, {
        compositeRule: !0,
        createErrors: !1,
        allErrors: !1
      }), e.subschema(T, h);
    }
  }
};
pr.default = hc;
var un = {};
Object.defineProperty(un, "__esModule", { value: !0 });
const pc = Ne, Gn = K, wr = k, Jn = pr, mc = {
  keyword: "properties",
  type: "object",
  schemaType: "object",
  code(e) {
    const { gen: t, schema: r, parentSchema: n, data: a, it: o } = e;
    o.opts.removeAdditional === "all" && n.additionalProperties === void 0 && Jn.default.code(new pc.KeywordCxt(o, Jn.default, "additionalProperties"));
    const c = (0, Gn.allSchemaProperties)(r);
    for (const $ of c)
      o.definedProperties.add($);
    o.opts.unevaluated && c.length && o.props !== !0 && (o.props = wr.mergeEvaluated.props(t, (0, wr.toHash)(c), o.props));
    const f = c.filter(($) => !(0, wr.alwaysValidSchema)(o, r[$]));
    if (f.length === 0)
      return;
    const y = t.name("valid");
    for (const $ of f)
      p($) ? m($) : (t.if((0, Gn.propertyInData)(t, a, $, o.opts.ownProperties)), m($), o.allErrors || t.else().var(y, !0), t.endIf()), e.it.definedProperties.add($), e.ok(y);
    function p($) {
      return o.opts.useDefaults && !o.compositeRule && r[$].default !== void 0;
    }
    function m($) {
      e.subschema({
        keyword: "properties",
        schemaProp: $,
        dataProp: $
      }, y);
    }
  }
};
un.default = mc;
var ln = {};
Object.defineProperty(ln, "__esModule", { value: !0 });
const Bn = K, tr = H, Wn = k, Qn = k, yc = {
  keyword: "patternProperties",
  type: "object",
  schemaType: "object",
  code(e) {
    const { gen: t, schema: r, data: n, parentSchema: a, it: o } = e, { opts: c } = o, f = (0, Bn.allSchemaProperties)(r), y = f.filter((P) => (0, Wn.alwaysValidSchema)(o, r[P]));
    if (f.length === 0 || y.length === f.length && (!o.opts.unevaluated || o.props === !0))
      return;
    const p = c.strictSchema && !c.allowMatchingProperties && a.properties, m = t.name("valid");
    o.props !== !0 && !(o.props instanceof tr.Name) && (o.props = (0, Qn.evaluatedPropsToName)(t, o.props));
    const { props: $ } = o;
    R();
    function R() {
      for (const P of f)
        p && O(P), o.allErrors ? S(P) : (t.var(m, !0), S(P), t.if(m));
    }
    function O(P) {
      for (const g in p)
        new RegExp(P).test(g) && (0, Wn.checkStrictMode)(o, `property ${g} matches pattern ${P} (use allowMatchingProperties)`);
    }
    function S(P) {
      t.forIn("key", n, (g) => {
        t.if((0, tr._)`${(0, Bn.usePattern)(e, P)}.test(${g})`, () => {
          const h = y.includes(P);
          h || e.subschema({
            keyword: "patternProperties",
            schemaProp: P,
            dataProp: g,
            dataPropType: Qn.Type.Str
          }, m), o.opts.unevaluated && $ !== !0 ? t.assign((0, tr._)`${$}[${g}]`, !0) : !h && !o.allErrors && t.if((0, tr.not)(m), () => t.break());
        });
      });
    }
  }
};
ln.default = yc;
var dn = {};
Object.defineProperty(dn, "__esModule", { value: !0 });
const vc = k, $c = {
  keyword: "not",
  schemaType: ["object", "boolean"],
  trackErrors: !0,
  code(e) {
    const { gen: t, schema: r, it: n } = e;
    if ((0, vc.alwaysValidSchema)(n, r)) {
      e.fail();
      return;
    }
    const a = t.name("valid");
    e.subschema({
      keyword: "not",
      compositeRule: !0,
      createErrors: !1,
      allErrors: !1
    }, a), e.failResult(a, () => e.reset(), () => e.error());
  },
  error: { message: "must NOT be valid" }
};
dn.default = $c;
var fn = {};
Object.defineProperty(fn, "__esModule", { value: !0 });
const gc = K, _c = {
  keyword: "anyOf",
  schemaType: "array",
  trackErrors: !0,
  code: gc.validateUnion,
  error: { message: "must match a schema in anyOf" }
};
fn.default = _c;
var hn = {};
Object.defineProperty(hn, "__esModule", { value: !0 });
const sr = H, wc = k, Ec = {
  message: "must match exactly one schema in oneOf",
  params: ({ params: e }) => (0, sr._)`{passingSchemas: ${e.passing}}`
}, bc = {
  keyword: "oneOf",
  schemaType: "array",
  trackErrors: !0,
  error: Ec,
  code(e) {
    const { gen: t, schema: r, parentSchema: n, it: a } = e;
    if (!Array.isArray(r))
      throw new Error("ajv implementation error");
    if (a.opts.discriminator && n.discriminator)
      return;
    const o = r, c = t.let("valid", !1), f = t.let("passing", null), y = t.name("_valid");
    e.setParams({ passing: f }), t.block(p), e.result(c, () => e.reset(), () => e.error(!0));
    function p() {
      o.forEach((m, $) => {
        let R;
        (0, wc.alwaysValidSchema)(a, m) ? t.var(y, !0) : R = e.subschema({
          keyword: "oneOf",
          schemaProp: $,
          compositeRule: !0
        }, y), $ > 0 && t.if((0, sr._)`${y} && ${c}`).assign(c, !1).assign(f, (0, sr._)`[${f}, ${$}]`).else(), t.if(y, () => {
          t.assign(c, !0), t.assign(f, $), R && e.mergeEvaluated(R, sr.Name);
        });
      });
    }
  }
};
hn.default = bc;
var pn = {};
Object.defineProperty(pn, "__esModule", { value: !0 });
const Sc = k, Pc = {
  keyword: "allOf",
  schemaType: "array",
  code(e) {
    const { gen: t, schema: r, it: n } = e;
    if (!Array.isArray(r))
      throw new Error("ajv implementation error");
    const a = t.name("valid");
    r.forEach((o, c) => {
      if ((0, Sc.alwaysValidSchema)(n, o))
        return;
      const f = e.subschema({ keyword: "allOf", schemaProp: c }, a);
      e.ok(a), e.mergeEvaluated(f);
    });
  }
};
pn.default = Pc;
var mn = {};
Object.defineProperty(mn, "__esModule", { value: !0 });
const lr = H, za = k, Nc = {
  message: ({ params: e }) => (0, lr.str)`must match "${e.ifClause}" schema`,
  params: ({ params: e }) => (0, lr._)`{failingKeyword: ${e.ifClause}}`
}, Oc = {
  keyword: "if",
  schemaType: ["object", "boolean"],
  trackErrors: !0,
  error: Nc,
  code(e) {
    const { gen: t, parentSchema: r, it: n } = e;
    r.then === void 0 && r.else === void 0 && (0, za.checkStrictMode)(n, '"if" without "then" and "else" is ignored');
    const a = Xn(n, "then"), o = Xn(n, "else");
    if (!a && !o)
      return;
    const c = t.let("valid", !0), f = t.name("_valid");
    if (y(), e.reset(), a && o) {
      const m = t.let("ifClause");
      e.setParams({ ifClause: m }), t.if(f, p("then", m), p("else", m));
    } else
      a ? t.if(f, p("then")) : t.if((0, lr.not)(f), p("else"));
    e.pass(c, () => e.error(!0));
    function y() {
      const m = e.subschema({
        keyword: "if",
        compositeRule: !0,
        createErrors: !1,
        allErrors: !1
      }, f);
      e.mergeEvaluated(m);
    }
    function p(m, $) {
      return () => {
        const R = e.subschema({ keyword: m }, f);
        t.assign(c, f), e.mergeValidEvaluated(R, c), $ ? t.assign($, (0, lr._)`${m}`) : e.setParams({ ifClause: m });
      };
    }
  }
};
function Xn(e, t) {
  const r = e.schema[t];
  return r !== void 0 && !(0, za.alwaysValidSchema)(e, r);
}
mn.default = Oc;
var yn = {};
Object.defineProperty(yn, "__esModule", { value: !0 });
const Cc = k, Rc = {
  keyword: ["then", "else"],
  schemaType: ["object", "boolean"],
  code({ keyword: e, parentSchema: t, it: r }) {
    t.if === void 0 && (0, Cc.checkStrictMode)(r, `"${e}" without "if" is ignored`);
  }
};
yn.default = Rc;
Object.defineProperty(nn, "__esModule", { value: !0 });
const Tc = Et, jc = an, Ic = bt, kc = sn, Dc = on, Ac = Ua, Mc = cn, Vc = pr, Fc = un, Uc = ln, qc = dn, zc = fn, Lc = hn, Kc = pn, Hc = mn, Gc = yn;
function Jc(e = !1) {
  const t = [
    // any
    qc.default,
    zc.default,
    Lc.default,
    Kc.default,
    Hc.default,
    Gc.default,
    // object
    Mc.default,
    Vc.default,
    Ac.default,
    Fc.default,
    Uc.default
  ];
  return e ? t.push(jc.default, kc.default) : t.push(Tc.default, Ic.default), t.push(Dc.default), t;
}
nn.default = Jc;
var vn = {}, $n = {};
Object.defineProperty($n, "__esModule", { value: !0 });
const se = H, Bc = {
  message: ({ schemaCode: e }) => (0, se.str)`must match format "${e}"`,
  params: ({ schemaCode: e }) => (0, se._)`{format: ${e}}`
}, Wc = {
  keyword: "format",
  type: ["number", "string"],
  schemaType: "string",
  $data: !0,
  error: Bc,
  code(e, t) {
    const { gen: r, data: n, $data: a, schema: o, schemaCode: c, it: f } = e, { opts: y, errSchemaPath: p, schemaEnv: m, self: $ } = f;
    if (!y.validateFormats)
      return;
    a ? R() : O();
    function R() {
      const S = r.scopeValue("formats", {
        ref: $.formats,
        code: y.code.formats
      }), P = r.const("fDef", (0, se._)`${S}[${c}]`), g = r.let("fType"), h = r.let("format");
      r.if((0, se._)`typeof ${P} == "object" && !(${P} instanceof RegExp)`, () => r.assign(g, (0, se._)`${P}.type || "string"`).assign(h, (0, se._)`${P}.validate`), () => r.assign(g, (0, se._)`"string"`).assign(h, P)), e.fail$data((0, se.or)(b(), T()));
      function b() {
        return y.strictSchema === !1 ? se.nil : (0, se._)`${c} && !${h}`;
      }
      function T() {
        const A = m.$async ? (0, se._)`(${P}.async ? await ${h}(${n}) : ${h}(${n}))` : (0, se._)`${h}(${n})`, M = (0, se._)`(typeof ${h} == "function" ? ${A} : ${h}.test(${n}))`;
        return (0, se._)`${h} && ${h} !== true && ${g} === ${t} && !${M}`;
      }
    }
    function O() {
      const S = $.formats[o];
      if (!S) {
        b();
        return;
      }
      if (S === !0)
        return;
      const [P, g, h] = T(S);
      P === t && e.pass(A());
      function b() {
        if (y.strictSchema === !1) {
          $.logger.warn(M());
          return;
        }
        throw new Error(M());
        function M() {
          return `unknown format "${o}" ignored in schema at path "${p}"`;
        }
      }
      function T(M) {
        const Q = M instanceof RegExp ? (0, se.regexpCode)(M) : y.code.formats ? (0, se._)`${y.code.formats}${(0, se.getProperty)(o)}` : void 0, ue = r.scopeValue("formats", { key: o, ref: M, code: Q });
        return typeof M == "object" && !(M instanceof RegExp) ? [M.type || "string", M.validate, (0, se._)`${ue}.validate`] : ["string", M, ue];
      }
      function A() {
        if (typeof S == "object" && !(S instanceof RegExp) && S.async) {
          if (!m.$async)
            throw new Error("async format in sync schema");
          return (0, se._)`await ${h}(${n})`;
        }
        return typeof g == "function" ? (0, se._)`${h}(${n})` : (0, se._)`${h}.test(${n})`;
      }
    }
  }
};
$n.default = Wc;
Object.defineProperty(vn, "__esModule", { value: !0 });
const Qc = $n, Xc = [Qc.default];
vn.default = Xc;
var wt = {};
Object.defineProperty(wt, "__esModule", { value: !0 });
wt.contentVocabulary = wt.metadataVocabulary = void 0;
wt.metadataVocabulary = [
  "title",
  "description",
  "default",
  "deprecated",
  "readOnly",
  "writeOnly",
  "examples"
];
wt.contentVocabulary = [
  "contentMediaType",
  "contentEncoding",
  "contentSchema"
];
Object.defineProperty(Lr, "__esModule", { value: !0 });
const Yc = Kr, Zc = Gr, xc = nn, eu = vn, Yn = wt, tu = [
  Yc.default,
  Zc.default,
  (0, xc.default)(),
  eu.default,
  Yn.metadataVocabulary,
  Yn.contentVocabulary
];
Lr.default = tu;
var gn = {}, mr = {};
Object.defineProperty(mr, "__esModule", { value: !0 });
mr.DiscrError = void 0;
var Zn;
(function(e) {
  e.Tag = "tag", e.Mapping = "mapping";
})(Zn || (mr.DiscrError = Zn = {}));
Object.defineProperty(gn, "__esModule", { value: !0 });
const vt = H, Tr = mr, xn = ve, ru = k, nu = {
  message: ({ params: { discrError: e, tagName: t } }) => e === Tr.DiscrError.Tag ? `tag "${t}" must be string` : `value of tag "${t}" must be in oneOf`,
  params: ({ params: { discrError: e, tag: t, tagName: r } }) => (0, vt._)`{error: ${e}, tag: ${r}, tagValue: ${t}}`
}, au = {
  keyword: "discriminator",
  type: "object",
  schemaType: "object",
  error: nu,
  code(e) {
    const { gen: t, data: r, schema: n, parentSchema: a, it: o } = e, { oneOf: c } = a;
    if (!o.opts.discriminator)
      throw new Error("discriminator: requires discriminator option");
    const f = n.propertyName;
    if (typeof f != "string")
      throw new Error("discriminator: requires propertyName");
    if (n.mapping)
      throw new Error("discriminator: mapping is not supported");
    if (!c)
      throw new Error("discriminator: requires oneOf keyword");
    const y = t.let("valid", !1), p = t.const("tag", (0, vt._)`${r}${(0, vt.getProperty)(f)}`);
    t.if((0, vt._)`typeof ${p} == "string"`, () => m(), () => e.error(!1, { discrError: Tr.DiscrError.Tag, tag: p, tagName: f })), e.ok(y);
    function m() {
      const O = R();
      t.if(!1);
      for (const S in O)
        t.elseIf((0, vt._)`${p} === ${S}`), t.assign(y, $(O[S]));
      t.else(), e.error(!1, { discrError: Tr.DiscrError.Mapping, tag: p, tagName: f }), t.endIf();
    }
    function $(O) {
      const S = t.name("valid"), P = e.subschema({ keyword: "oneOf", schemaProp: O }, S);
      return e.mergeEvaluated(P, vt.Name), S;
    }
    function R() {
      var O;
      const S = {}, P = h(a);
      let g = !0;
      for (let A = 0; A < c.length; A++) {
        let M = c[A];
        M != null && M.$ref && !(0, ru.schemaHasRulesButRef)(M, o.self.RULES) && (M = xn.resolveRef.call(o.self, o.schemaEnv.root, o.baseId, M == null ? void 0 : M.$ref), M instanceof xn.SchemaEnv && (M = M.schema));
        const Q = (O = M == null ? void 0 : M.properties) === null || O === void 0 ? void 0 : O[f];
        if (typeof Q != "object")
          throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${f}"`);
        g = g && (P || h(M)), b(Q, A);
      }
      if (!g)
        throw new Error(`discriminator: "${f}" must be required`);
      return S;
      function h({ required: A }) {
        return Array.isArray(A) && A.includes(f);
      }
      function b(A, M) {
        if (A.const)
          T(A.const, M);
        else if (A.enum)
          for (const Q of A.enum)
            T(Q, M);
        else
          throw new Error(`discriminator: "properties/${f}" must have "const" or "enum"`);
      }
      function T(A, M) {
        if (typeof A != "string" || A in S)
          throw new Error(`discriminator: "${f}" values must be unique strings`);
        S[A] = M;
      }
    }
  }
};
gn.default = au;
const su = "http://json-schema.org/draft-07/schema#", ou = "http://json-schema.org/draft-07/schema#", iu = "Core schema meta-schema", cu = {
  schemaArray: {
    type: "array",
    minItems: 1,
    items: {
      $ref: "#"
    }
  },
  nonNegativeInteger: {
    type: "integer",
    minimum: 0
  },
  nonNegativeIntegerDefault0: {
    allOf: [
      {
        $ref: "#/definitions/nonNegativeInteger"
      },
      {
        default: 0
      }
    ]
  },
  simpleTypes: {
    enum: [
      "array",
      "boolean",
      "integer",
      "null",
      "number",
      "object",
      "string"
    ]
  },
  stringArray: {
    type: "array",
    items: {
      type: "string"
    },
    uniqueItems: !0,
    default: []
  }
}, uu = [
  "object",
  "boolean"
], lu = {
  $id: {
    type: "string",
    format: "uri-reference"
  },
  $schema: {
    type: "string",
    format: "uri"
  },
  $ref: {
    type: "string",
    format: "uri-reference"
  },
  $comment: {
    type: "string"
  },
  title: {
    type: "string"
  },
  description: {
    type: "string"
  },
  default: !0,
  readOnly: {
    type: "boolean",
    default: !1
  },
  examples: {
    type: "array",
    items: !0
  },
  multipleOf: {
    type: "number",
    exclusiveMinimum: 0
  },
  maximum: {
    type: "number"
  },
  exclusiveMaximum: {
    type: "number"
  },
  minimum: {
    type: "number"
  },
  exclusiveMinimum: {
    type: "number"
  },
  maxLength: {
    $ref: "#/definitions/nonNegativeInteger"
  },
  minLength: {
    $ref: "#/definitions/nonNegativeIntegerDefault0"
  },
  pattern: {
    type: "string",
    format: "regex"
  },
  additionalItems: {
    $ref: "#"
  },
  items: {
    anyOf: [
      {
        $ref: "#"
      },
      {
        $ref: "#/definitions/schemaArray"
      }
    ],
    default: !0
  },
  maxItems: {
    $ref: "#/definitions/nonNegativeInteger"
  },
  minItems: {
    $ref: "#/definitions/nonNegativeIntegerDefault0"
  },
  uniqueItems: {
    type: "boolean",
    default: !1
  },
  contains: {
    $ref: "#"
  },
  maxProperties: {
    $ref: "#/definitions/nonNegativeInteger"
  },
  minProperties: {
    $ref: "#/definitions/nonNegativeIntegerDefault0"
  },
  required: {
    $ref: "#/definitions/stringArray"
  },
  additionalProperties: {
    $ref: "#"
  },
  definitions: {
    type: "object",
    additionalProperties: {
      $ref: "#"
    },
    default: {}
  },
  properties: {
    type: "object",
    additionalProperties: {
      $ref: "#"
    },
    default: {}
  },
  patternProperties: {
    type: "object",
    additionalProperties: {
      $ref: "#"
    },
    propertyNames: {
      format: "regex"
    },
    default: {}
  },
  dependencies: {
    type: "object",
    additionalProperties: {
      anyOf: [
        {
          $ref: "#"
        },
        {
          $ref: "#/definitions/stringArray"
        }
      ]
    }
  },
  propertyNames: {
    $ref: "#"
  },
  const: !0,
  enum: {
    type: "array",
    items: !0,
    minItems: 1,
    uniqueItems: !0
  },
  type: {
    anyOf: [
      {
        $ref: "#/definitions/simpleTypes"
      },
      {
        type: "array",
        items: {
          $ref: "#/definitions/simpleTypes"
        },
        minItems: 1,
        uniqueItems: !0
      }
    ]
  },
  format: {
    type: "string"
  },
  contentMediaType: {
    type: "string"
  },
  contentEncoding: {
    type: "string"
  },
  if: {
    $ref: "#"
  },
  then: {
    $ref: "#"
  },
  else: {
    $ref: "#"
  },
  allOf: {
    $ref: "#/definitions/schemaArray"
  },
  anyOf: {
    $ref: "#/definitions/schemaArray"
  },
  oneOf: {
    $ref: "#/definitions/schemaArray"
  },
  not: {
    $ref: "#"
  }
}, du = {
  $schema: su,
  $id: ou,
  title: iu,
  definitions: cu,
  type: uu,
  properties: lu,
  default: !0
};
(function(e, t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.MissingRefError = t.ValidationError = t.CodeGen = t.Name = t.nil = t.stringify = t.str = t._ = t.KeywordCxt = t.Ajv = void 0;
  const r = ea, n = Lr, a = gn, o = du, c = ["/properties"], f = "http://json-schema.org/draft-07/schema";
  class y extends r.default {
    _addVocabularies() {
      super._addVocabularies(), n.default.forEach((S) => this.addVocabulary(S)), this.opts.discriminator && this.addKeyword(a.default);
    }
    _addDefaultMetaSchema() {
      if (super._addDefaultMetaSchema(), !this.opts.meta)
        return;
      const S = this.opts.$data ? this.$dataMetaSchema(o, c) : o;
      this.addMetaSchema(S, f, !1), this.refs["http://json-schema.org/schema"] = f;
    }
    defaultMeta() {
      return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(f) ? f : void 0);
    }
  }
  t.Ajv = y, e.exports = t = y, e.exports.Ajv = y, Object.defineProperty(t, "__esModule", { value: !0 }), t.default = y;
  var p = Ne;
  Object.defineProperty(t, "KeywordCxt", { enumerable: !0, get: function() {
    return p.KeywordCxt;
  } });
  var m = H;
  Object.defineProperty(t, "_", { enumerable: !0, get: function() {
    return m._;
  } }), Object.defineProperty(t, "str", { enumerable: !0, get: function() {
    return m.str;
  } }), Object.defineProperty(t, "stringify", { enumerable: !0, get: function() {
    return m.stringify;
  } }), Object.defineProperty(t, "nil", { enumerable: !0, get: function() {
    return m.nil;
  } }), Object.defineProperty(t, "Name", { enumerable: !0, get: function() {
    return m.Name;
  } }), Object.defineProperty(t, "CodeGen", { enumerable: !0, get: function() {
    return m.CodeGen;
  } });
  var $ = Ht;
  Object.defineProperty(t, "ValidationError", { enumerable: !0, get: function() {
    return $.default;
  } });
  var R = Gt;
  Object.defineProperty(t, "MissingRefError", { enumerable: !0, get: function() {
    return R.default;
  } });
})(Er, Er.exports);
var fu = Er.exports;
const hu = /* @__PURE__ */ es(fu);
class mu {
  constructor() {
    this.ajv = new hu();
  }
  handle(t, r) {
    const n = r ? t.event : Object.keys(t)[0], a = this.ajv.getSchema(n);
    if (!a) {
      console.error("Could not find schema for", n, t);
      return;
    }
    a(t) ? console.debug("Schema of item is valid", n, t) : console.error(
      "Validation of item against schema failed",
      n,
      t,
      a.errors
    );
  }
  addSchema(t, r) {
    this.ajv.addSchema(t, r);
  }
  start() {
    window.adobeDataLayer.push((t) => {
      t.addEventListener(
        "adobeDataLayer:change",
        (r) => this.handle(r, !1)
      ), t.addEventListener(
        "adobeDataLayer:event",
        (r) => this.handle(r, !0)
      );
    }), console.debug("AcdlValidator started");
  }
}
console.debug("AcdlValidator loaded");
export {
  mu as default
};
