function lg(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const s in r)
        if (s !== "default" && !(s in e)) {
          const o = Object.getOwnPropertyDescriptor(r, s);
          o &&
            Object.defineProperty(
              e,
              s,
              o.get ? o : { enumerable: !0, get: () => r[s] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) r(s);
  new MutationObserver((s) => {
    for (const o of s)
      if (o.type === "childList")
        for (const l of o.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && r(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(s) {
    const o = {};
    return (
      s.integrity && (o.integrity = s.integrity),
      s.referrerPolicy && (o.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : s.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(s) {
    if (s.ep) return;
    s.ep = !0;
    const o = n(s);
    fetch(s.href, o);
  }
})();
function vl(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var $f = { exports: {} },
  xl = {},
  Ff = { exports: {} },
  B = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $s = Symbol.for("react.element"),
  ig = Symbol.for("react.portal"),
  ag = Symbol.for("react.fragment"),
  ug = Symbol.for("react.strict_mode"),
  cg = Symbol.for("react.profiler"),
  dg = Symbol.for("react.provider"),
  fg = Symbol.for("react.context"),
  pg = Symbol.for("react.forward_ref"),
  hg = Symbol.for("react.suspense"),
  mg = Symbol.for("react.memo"),
  yg = Symbol.for("react.lazy"),
  Dc = Symbol.iterator;
function gg(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Dc && e[Dc]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Af = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Mf = Object.assign,
  zf = {};
function Pr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = zf),
    (this.updater = n || Af);
}
Pr.prototype.isReactComponent = {};
Pr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Pr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Uf() {}
Uf.prototype = Pr.prototype;
function au(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = zf),
    (this.updater = n || Af);
}
var uu = (au.prototype = new Uf());
uu.constructor = au;
Mf(uu, Pr.prototype);
uu.isPureReactComponent = !0;
var $c = Array.isArray,
  Bf = Object.prototype.hasOwnProperty,
  cu = { current: null },
  bf = { key: !0, ref: !0, __self: !0, __source: !0 };
function Wf(e, t, n) {
  var r,
    s = {},
    o = null,
    l = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (l = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      Bf.call(t, r) && !bf.hasOwnProperty(r) && (s[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) s.children = n;
  else if (1 < a) {
    for (var u = Array(a), c = 0; c < a; c++) u[c] = arguments[c + 2];
    s.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) s[r] === void 0 && (s[r] = a[r]);
  return {
    $$typeof: $s,
    type: e,
    key: o,
    ref: l,
    props: s,
    _owner: cu.current,
  };
}
function vg(e, t) {
  return {
    $$typeof: $s,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function du(e) {
  return typeof e == "object" && e !== null && e.$$typeof === $s;
}
function xg(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Fc = /\/+/g;
function oi(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? xg("" + e.key)
    : t.toString(36);
}
function go(e, t, n, r, s) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var l = !1;
  if (e === null) l = !0;
  else
    switch (o) {
      case "string":
      case "number":
        l = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case $s:
          case ig:
            l = !0;
        }
    }
  if (l)
    return (
      (l = e),
      (s = s(l)),
      (e = r === "" ? "." + oi(l, 0) : r),
      $c(s)
        ? ((n = ""),
          e != null && (n = e.replace(Fc, "$&/") + "/"),
          go(s, t, n, "", function (c) {
            return c;
          }))
        : s != null &&
          (du(s) &&
            (s = vg(
              s,
              n +
                (!s.key || (l && l.key === s.key)
                  ? ""
                  : ("" + s.key).replace(Fc, "$&/") + "/") +
                e
            )),
          t.push(s)),
      1
    );
  if (((l = 0), (r = r === "" ? "." : r + ":"), $c(e)))
    for (var a = 0; a < e.length; a++) {
      o = e[a];
      var u = r + oi(o, a);
      l += go(o, t, n, u, s);
    }
  else if (((u = gg(e)), typeof u == "function"))
    for (e = u.call(e), a = 0; !(o = e.next()).done; )
      (o = o.value), (u = r + oi(o, a++)), (l += go(o, t, n, u, s));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return l;
}
function qs(e, t, n) {
  if (e == null) return e;
  var r = [],
    s = 0;
  return (
    go(e, r, "", "", function (o) {
      return t.call(n, o, s++);
    }),
    r
  );
}
function wg(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Re = { current: null },
  vo = { transition: null },
  jg = {
    ReactCurrentDispatcher: Re,
    ReactCurrentBatchConfig: vo,
    ReactCurrentOwner: cu,
  };
function Hf() {
  throw Error("act(...) is not supported in production builds of React.");
}
B.Children = {
  map: qs,
  forEach: function (e, t, n) {
    qs(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      qs(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      qs(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!du(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
B.Component = Pr;
B.Fragment = ag;
B.Profiler = cg;
B.PureComponent = au;
B.StrictMode = ug;
B.Suspense = hg;
B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = jg;
B.act = Hf;
B.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Mf({}, e.props),
    s = e.key,
    o = e.ref,
    l = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (l = cu.current)),
      t.key !== void 0 && (s = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (u in t)
      Bf.call(t, u) &&
        !bf.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && a !== void 0 ? a[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    a = Array(u);
    for (var c = 0; c < u; c++) a[c] = arguments[c + 2];
    r.children = a;
  }
  return { $$typeof: $s, type: e.type, key: s, ref: o, props: r, _owner: l };
};
B.createContext = function (e) {
  return (
    (e = {
      $$typeof: fg,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: dg, _context: e }),
    (e.Consumer = e)
  );
};
B.createElement = Wf;
B.createFactory = function (e) {
  var t = Wf.bind(null, e);
  return (t.type = e), t;
};
B.createRef = function () {
  return { current: null };
};
B.forwardRef = function (e) {
  return { $$typeof: pg, render: e };
};
B.isValidElement = du;
B.lazy = function (e) {
  return { $$typeof: yg, _payload: { _status: -1, _result: e }, _init: wg };
};
B.memo = function (e, t) {
  return { $$typeof: mg, type: e, compare: t === void 0 ? null : t };
};
B.startTransition = function (e) {
  var t = vo.transition;
  vo.transition = {};
  try {
    e();
  } finally {
    vo.transition = t;
  }
};
B.unstable_act = Hf;
B.useCallback = function (e, t) {
  return Re.current.useCallback(e, t);
};
B.useContext = function (e) {
  return Re.current.useContext(e);
};
B.useDebugValue = function () {};
B.useDeferredValue = function (e) {
  return Re.current.useDeferredValue(e);
};
B.useEffect = function (e, t) {
  return Re.current.useEffect(e, t);
};
B.useId = function () {
  return Re.current.useId();
};
B.useImperativeHandle = function (e, t, n) {
  return Re.current.useImperativeHandle(e, t, n);
};
B.useInsertionEffect = function (e, t) {
  return Re.current.useInsertionEffect(e, t);
};
B.useLayoutEffect = function (e, t) {
  return Re.current.useLayoutEffect(e, t);
};
B.useMemo = function (e, t) {
  return Re.current.useMemo(e, t);
};
B.useReducer = function (e, t, n) {
  return Re.current.useReducer(e, t, n);
};
B.useRef = function (e) {
  return Re.current.useRef(e);
};
B.useState = function (e) {
  return Re.current.useState(e);
};
B.useSyncExternalStore = function (e, t, n) {
  return Re.current.useSyncExternalStore(e, t, n);
};
B.useTransition = function () {
  return Re.current.useTransition();
};
B.version = "18.3.1";
Ff.exports = B;
var y = Ff.exports;
const tt = vl(y),
  Hi = lg({ __proto__: null, default: tt }, [y]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Sg = y,
  Eg = Symbol.for("react.element"),
  Cg = Symbol.for("react.fragment"),
  Ng = Object.prototype.hasOwnProperty,
  kg = Sg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  _g = { key: !0, ref: !0, __self: !0, __source: !0 };
function Vf(e, t, n) {
  var r,
    s = {},
    o = null,
    l = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (l = t.ref);
  for (r in t) Ng.call(t, r) && !_g.hasOwnProperty(r) && (s[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) s[r] === void 0 && (s[r] = t[r]);
  return {
    $$typeof: Eg,
    type: e,
    key: o,
    ref: l,
    props: s,
    _owner: kg.current,
  };
}
xl.Fragment = Cg;
xl.jsx = Vf;
xl.jsxs = Vf;
$f.exports = xl;
var i = $f.exports,
  Vi = {},
  Kf = { exports: {} },
  Je = {},
  Gf = { exports: {} },
  Qf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(O, A) {
    var M = O.length;
    O.push(A);
    e: for (; 0 < M; ) {
      var G = (M - 1) >>> 1,
        Z = O[G];
      if (0 < s(Z, A)) (O[G] = A), (O[M] = Z), (M = G);
      else break e;
    }
  }
  function n(O) {
    return O.length === 0 ? null : O[0];
  }
  function r(O) {
    if (O.length === 0) return null;
    var A = O[0],
      M = O.pop();
    if (M !== A) {
      O[0] = M;
      e: for (var G = 0, Z = O.length, at = Z >>> 1; G < at; ) {
        var Me = 2 * (G + 1) - 1,
          pe = O[Me],
          ze = Me + 1,
          Xn = O[ze];
        if (0 > s(pe, M))
          ze < Z && 0 > s(Xn, pe)
            ? ((O[G] = Xn), (O[ze] = M), (G = ze))
            : ((O[G] = pe), (O[Me] = M), (G = Me));
        else if (ze < Z && 0 > s(Xn, M)) (O[G] = Xn), (O[ze] = M), (G = ze);
        else break e;
      }
    }
    return A;
  }
  function s(O, A) {
    var M = O.sortIndex - A.sortIndex;
    return M !== 0 ? M : O.id - A.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var l = Date,
      a = l.now();
    e.unstable_now = function () {
      return l.now() - a;
    };
  }
  var u = [],
    c = [],
    d = 1,
    f = null,
    p = 3,
    v = !1,
    h = !1,
    j = !1,
    w = typeof setTimeout == "function" ? setTimeout : null,
    x = typeof clearTimeout == "function" ? clearTimeout : null,
    g = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(O) {
    for (var A = n(c); A !== null; ) {
      if (A.callback === null) r(c);
      else if (A.startTime <= O)
        r(c), (A.sortIndex = A.expirationTime), t(u, A);
      else break;
      A = n(c);
    }
  }
  function S(O) {
    if (((j = !1), m(O), !h))
      if (n(u) !== null) (h = !0), Ye(N);
      else {
        var A = n(c);
        A !== null && it(S, A.startTime - O);
      }
  }
  function N(O, A) {
    (h = !1), j && ((j = !1), x(P), (P = -1)), (v = !0);
    var M = p;
    try {
      for (
        m(A), f = n(u);
        f !== null && (!(f.expirationTime > A) || (O && !ae()));

      ) {
        var G = f.callback;
        if (typeof G == "function") {
          (f.callback = null), (p = f.priorityLevel);
          var Z = G(f.expirationTime <= A);
          (A = e.unstable_now()),
            typeof Z == "function" ? (f.callback = Z) : f === n(u) && r(u),
            m(A);
        } else r(u);
        f = n(u);
      }
      if (f !== null) var at = !0;
      else {
        var Me = n(c);
        Me !== null && it(S, Me.startTime - A), (at = !1);
      }
      return at;
    } finally {
      (f = null), (p = M), (v = !1);
    }
  }
  var C = !1,
    k = null,
    P = -1,
    b = 5,
    D = -1;
  function ae() {
    return !(e.unstable_now() - D < b);
  }
  function Ot() {
    if (k !== null) {
      var O = e.unstable_now();
      D = O;
      var A = !0;
      try {
        A = k(!0, O);
      } finally {
        A ? lt() : ((C = !1), (k = null));
      }
    } else C = !1;
  }
  var lt;
  if (typeof g == "function")
    lt = function () {
      g(Ot);
    };
  else if (typeof MessageChannel < "u") {
    var En = new MessageChannel(),
      qn = En.port2;
    (En.port1.onmessage = Ot),
      (lt = function () {
        qn.postMessage(null);
      });
  } else
    lt = function () {
      w(Ot, 0);
    };
  function Ye(O) {
    (k = O), C || ((C = !0), lt());
  }
  function it(O, A) {
    P = w(function () {
      O(e.unstable_now());
    }, A);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (O) {
      O.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      h || v || ((h = !0), Ye(N));
    }),
    (e.unstable_forceFrameRate = function (O) {
      0 > O || 125 < O
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (b = 0 < O ? Math.floor(1e3 / O) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (O) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var A = 3;
          break;
        default:
          A = p;
      }
      var M = p;
      p = A;
      try {
        return O();
      } finally {
        p = M;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (O, A) {
      switch (O) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          O = 3;
      }
      var M = p;
      p = O;
      try {
        return A();
      } finally {
        p = M;
      }
    }),
    (e.unstable_scheduleCallback = function (O, A, M) {
      var G = e.unstable_now();
      switch (
        (typeof M == "object" && M !== null
          ? ((M = M.delay), (M = typeof M == "number" && 0 < M ? G + M : G))
          : (M = G),
        O)
      ) {
        case 1:
          var Z = -1;
          break;
        case 2:
          Z = 250;
          break;
        case 5:
          Z = 1073741823;
          break;
        case 4:
          Z = 1e4;
          break;
        default:
          Z = 5e3;
      }
      return (
        (Z = M + Z),
        (O = {
          id: d++,
          callback: A,
          priorityLevel: O,
          startTime: M,
          expirationTime: Z,
          sortIndex: -1,
        }),
        M > G
          ? ((O.sortIndex = M),
            t(c, O),
            n(u) === null &&
              O === n(c) &&
              (j ? (x(P), (P = -1)) : (j = !0), it(S, M - G)))
          : ((O.sortIndex = Z), t(u, O), h || v || ((h = !0), Ye(N))),
        O
      );
    }),
    (e.unstable_shouldYield = ae),
    (e.unstable_wrapCallback = function (O) {
      var A = p;
      return function () {
        var M = p;
        p = A;
        try {
          return O.apply(this, arguments);
        } finally {
          p = M;
        }
      };
    });
})(Qf);
Gf.exports = Qf;
var Rg = Gf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Pg = y,
  Ke = Rg;
function R(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Jf = new Set(),
  ds = {};
function Hn(e, t) {
  wr(e, t), wr(e + "Capture", t);
}
function wr(e, t) {
  for (ds[e] = t, e = 0; e < t.length; e++) Jf.add(t[e]);
}
var zt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Ki = Object.prototype.hasOwnProperty,
  Og =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Ac = {},
  Mc = {};
function Tg(e) {
  return Ki.call(Mc, e)
    ? !0
    : Ki.call(Ac, e)
    ? !1
    : Og.test(e)
    ? (Mc[e] = !0)
    : ((Ac[e] = !0), !1);
}
function Lg(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Ig(e, t, n, r) {
  if (t === null || typeof t > "u" || Lg(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Pe(e, t, n, r, s, o, l) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = s),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = l);
}
var xe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    xe[e] = new Pe(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  xe[t] = new Pe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  xe[e] = new Pe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  xe[e] = new Pe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    xe[e] = new Pe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  xe[e] = new Pe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  xe[e] = new Pe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  xe[e] = new Pe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  xe[e] = new Pe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var fu = /[\-:]([a-z])/g;
function pu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(fu, pu);
    xe[t] = new Pe(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(fu, pu);
    xe[t] = new Pe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(fu, pu);
  xe[t] = new Pe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  xe[e] = new Pe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
xe.xlinkHref = new Pe(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  xe[e] = new Pe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function hu(e, t, n, r) {
  var s = xe.hasOwnProperty(t) ? xe[t] : null;
  (s !== null
    ? s.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Ig(t, n, s, r) && (n = null),
    r || s === null
      ? Tg(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : s.mustUseProperty
      ? (e[s.propertyName] = n === null ? (s.type === 3 ? !1 : "") : n)
      : ((t = s.attributeName),
        (r = s.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((s = s.type),
            (n = s === 3 || (s === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Vt = Pg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Xs = Symbol.for("react.element"),
  tr = Symbol.for("react.portal"),
  nr = Symbol.for("react.fragment"),
  mu = Symbol.for("react.strict_mode"),
  Gi = Symbol.for("react.profiler"),
  qf = Symbol.for("react.provider"),
  Xf = Symbol.for("react.context"),
  yu = Symbol.for("react.forward_ref"),
  Qi = Symbol.for("react.suspense"),
  Ji = Symbol.for("react.suspense_list"),
  gu = Symbol.for("react.memo"),
  qt = Symbol.for("react.lazy"),
  Yf = Symbol.for("react.offscreen"),
  zc = Symbol.iterator;
function zr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (zc && e[zc]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var re = Object.assign,
  li;
function qr(e) {
  if (li === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      li = (t && t[1]) || "";
    }
  return (
    `
` +
    li +
    e
  );
}
var ii = !1;
function ai(e, t) {
  if (!e || ii) return "";
  ii = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var s = c.stack.split(`
`),
          o = r.stack.split(`
`),
          l = s.length - 1,
          a = o.length - 1;
        1 <= l && 0 <= a && s[l] !== o[a];

      )
        a--;
      for (; 1 <= l && 0 <= a; l--, a--)
        if (s[l] !== o[a]) {
          if (l !== 1 || a !== 1)
            do
              if ((l--, a--, 0 > a || s[l] !== o[a])) {
                var u =
                  `
` + s[l].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    u.includes("<anonymous>") &&
                    (u = u.replace("<anonymous>", e.displayName)),
                  u
                );
              }
            while (1 <= l && 0 <= a);
          break;
        }
    }
  } finally {
    (ii = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? qr(e) : "";
}
function Dg(e) {
  switch (e.tag) {
    case 5:
      return qr(e.type);
    case 16:
      return qr("Lazy");
    case 13:
      return qr("Suspense");
    case 19:
      return qr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = ai(e.type, !1)), e;
    case 11:
      return (e = ai(e.type.render, !1)), e;
    case 1:
      return (e = ai(e.type, !0)), e;
    default:
      return "";
  }
}
function qi(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case nr:
      return "Fragment";
    case tr:
      return "Portal";
    case Gi:
      return "Profiler";
    case mu:
      return "StrictMode";
    case Qi:
      return "Suspense";
    case Ji:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Xf:
        return (e.displayName || "Context") + ".Consumer";
      case qf:
        return (e._context.displayName || "Context") + ".Provider";
      case yu:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case gu:
        return (
          (t = e.displayName || null), t !== null ? t : qi(e.type) || "Memo"
        );
      case qt:
        (t = e._payload), (e = e._init);
        try {
          return qi(e(t));
        } catch {}
    }
  return null;
}
function $g(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return qi(t);
    case 8:
      return t === mu ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function hn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Zf(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Fg(e) {
  var t = Zf(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var s = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return s.call(this);
        },
        set: function (l) {
          (r = "" + l), o.call(this, l);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (l) {
          r = "" + l;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Ys(e) {
  e._valueTracker || (e._valueTracker = Fg(e));
}
function ep(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Zf(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function To(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Xi(e, t) {
  var n = t.checked;
  return re({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Uc(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = hn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function tp(e, t) {
  (t = t.checked), t != null && hu(e, "checked", t, !1);
}
function Yi(e, t) {
  tp(e, t);
  var n = hn(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Zi(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Zi(e, t.type, hn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Bc(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Zi(e, t, n) {
  (t !== "number" || To(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Xr = Array.isArray;
function hr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var s = 0; s < n.length; s++) t["$" + n[s]] = !0;
    for (n = 0; n < e.length; n++)
      (s = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== s && (e[n].selected = s),
        s && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + hn(n), t = null, s = 0; s < e.length; s++) {
      if (e[s].value === n) {
        (e[s].selected = !0), r && (e[s].defaultSelected = !0);
        return;
      }
      t !== null || e[s].disabled || (t = e[s]);
    }
    t !== null && (t.selected = !0);
  }
}
function ea(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(R(91));
  return re({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function bc(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(R(92));
      if (Xr(n)) {
        if (1 < n.length) throw Error(R(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: hn(n) };
}
function np(e, t) {
  var n = hn(t.value),
    r = hn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Wc(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function rp(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ta(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? rp(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Zs,
  sp = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, s) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, s);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Zs = Zs || document.createElement("div"),
          Zs.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Zs.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function fs(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var ns = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Ag = ["Webkit", "ms", "Moz", "O"];
Object.keys(ns).forEach(function (e) {
  Ag.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ns[t] = ns[e]);
  });
});
function op(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (ns.hasOwnProperty(e) && ns[e])
    ? ("" + t).trim()
    : t + "px";
}
function lp(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        s = op(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, s) : (e[n] = s);
    }
}
var Mg = re(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function na(e, t) {
  if (t) {
    if (Mg[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(R(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(R(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(R(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(R(62));
  }
}
function ra(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var sa = null;
function vu(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var oa = null,
  mr = null,
  yr = null;
function Hc(e) {
  if ((e = Ms(e))) {
    if (typeof oa != "function") throw Error(R(280));
    var t = e.stateNode;
    t && ((t = Cl(t)), oa(e.stateNode, e.type, t));
  }
}
function ip(e) {
  mr ? (yr ? yr.push(e) : (yr = [e])) : (mr = e);
}
function ap() {
  if (mr) {
    var e = mr,
      t = yr;
    if (((yr = mr = null), Hc(e), t)) for (e = 0; e < t.length; e++) Hc(t[e]);
  }
}
function up(e, t) {
  return e(t);
}
function cp() {}
var ui = !1;
function dp(e, t, n) {
  if (ui) return e(t, n);
  ui = !0;
  try {
    return up(e, t, n);
  } finally {
    (ui = !1), (mr !== null || yr !== null) && (cp(), ap());
  }
}
function ps(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Cl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(R(231, t, typeof n));
  return n;
}
var la = !1;
if (zt)
  try {
    var Ur = {};
    Object.defineProperty(Ur, "passive", {
      get: function () {
        la = !0;
      },
    }),
      window.addEventListener("test", Ur, Ur),
      window.removeEventListener("test", Ur, Ur);
  } catch {
    la = !1;
  }
function zg(e, t, n, r, s, o, l, a, u) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (d) {
    this.onError(d);
  }
}
var rs = !1,
  Lo = null,
  Io = !1,
  ia = null,
  Ug = {
    onError: function (e) {
      (rs = !0), (Lo = e);
    },
  };
function Bg(e, t, n, r, s, o, l, a, u) {
  (rs = !1), (Lo = null), zg.apply(Ug, arguments);
}
function bg(e, t, n, r, s, o, l, a, u) {
  if ((Bg.apply(this, arguments), rs)) {
    if (rs) {
      var c = Lo;
      (rs = !1), (Lo = null);
    } else throw Error(R(198));
    Io || ((Io = !0), (ia = c));
  }
}
function Vn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function fp(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Vc(e) {
  if (Vn(e) !== e) throw Error(R(188));
}
function Wg(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Vn(e)), t === null)) throw Error(R(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var s = n.return;
    if (s === null) break;
    var o = s.alternate;
    if (o === null) {
      if (((r = s.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (s.child === o.child) {
      for (o = s.child; o; ) {
        if (o === n) return Vc(s), e;
        if (o === r) return Vc(s), t;
        o = o.sibling;
      }
      throw Error(R(188));
    }
    if (n.return !== r.return) (n = s), (r = o);
    else {
      for (var l = !1, a = s.child; a; ) {
        if (a === n) {
          (l = !0), (n = s), (r = o);
          break;
        }
        if (a === r) {
          (l = !0), (r = s), (n = o);
          break;
        }
        a = a.sibling;
      }
      if (!l) {
        for (a = o.child; a; ) {
          if (a === n) {
            (l = !0), (n = o), (r = s);
            break;
          }
          if (a === r) {
            (l = !0), (r = o), (n = s);
            break;
          }
          a = a.sibling;
        }
        if (!l) throw Error(R(189));
      }
    }
    if (n.alternate !== r) throw Error(R(190));
  }
  if (n.tag !== 3) throw Error(R(188));
  return n.stateNode.current === n ? e : t;
}
function pp(e) {
  return (e = Wg(e)), e !== null ? hp(e) : null;
}
function hp(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = hp(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var mp = Ke.unstable_scheduleCallback,
  Kc = Ke.unstable_cancelCallback,
  Hg = Ke.unstable_shouldYield,
  Vg = Ke.unstable_requestPaint,
  le = Ke.unstable_now,
  Kg = Ke.unstable_getCurrentPriorityLevel,
  xu = Ke.unstable_ImmediatePriority,
  yp = Ke.unstable_UserBlockingPriority,
  Do = Ke.unstable_NormalPriority,
  Gg = Ke.unstable_LowPriority,
  gp = Ke.unstable_IdlePriority,
  wl = null,
  Nt = null;
function Qg(e) {
  if (Nt && typeof Nt.onCommitFiberRoot == "function")
    try {
      Nt.onCommitFiberRoot(wl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var mt = Math.clz32 ? Math.clz32 : Xg,
  Jg = Math.log,
  qg = Math.LN2;
function Xg(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Jg(e) / qg) | 0)) | 0;
}
var eo = 64,
  to = 4194304;
function Yr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function $o(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    s = e.suspendedLanes,
    o = e.pingedLanes,
    l = n & 268435455;
  if (l !== 0) {
    var a = l & ~s;
    a !== 0 ? (r = Yr(a)) : ((o &= l), o !== 0 && (r = Yr(o)));
  } else (l = n & ~s), l !== 0 ? (r = Yr(l)) : o !== 0 && (r = Yr(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & s) &&
    ((s = r & -r), (o = t & -t), s >= o || (s === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - mt(t)), (s = 1 << n), (r |= e[n]), (t &= ~s);
  return r;
}
function Yg(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Zg(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      s = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var l = 31 - mt(o),
      a = 1 << l,
      u = s[l];
    u === -1
      ? (!(a & n) || a & r) && (s[l] = Yg(a, t))
      : u <= t && (e.expiredLanes |= a),
      (o &= ~a);
  }
}
function aa(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function vp() {
  var e = eo;
  return (eo <<= 1), !(eo & 4194240) && (eo = 64), e;
}
function ci(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Fs(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - mt(t)),
    (e[t] = n);
}
function ev(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var s = 31 - mt(n),
      o = 1 << s;
    (t[s] = 0), (r[s] = -1), (e[s] = -1), (n &= ~o);
  }
}
function wu(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - mt(n),
      s = 1 << r;
    (s & t) | (e[r] & t) && (e[r] |= t), (n &= ~s);
  }
}
var H = 0;
function xp(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var wp,
  ju,
  jp,
  Sp,
  Ep,
  ua = !1,
  no = [],
  sn = null,
  on = null,
  ln = null,
  hs = new Map(),
  ms = new Map(),
  Zt = [],
  tv =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Gc(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      sn = null;
      break;
    case "dragenter":
    case "dragleave":
      on = null;
      break;
    case "mouseover":
    case "mouseout":
      ln = null;
      break;
    case "pointerover":
    case "pointerout":
      hs.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      ms.delete(t.pointerId);
  }
}
function Br(e, t, n, r, s, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [s],
      }),
      t !== null && ((t = Ms(t)), t !== null && ju(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      s !== null && t.indexOf(s) === -1 && t.push(s),
      e);
}
function nv(e, t, n, r, s) {
  switch (t) {
    case "focusin":
      return (sn = Br(sn, e, t, n, r, s)), !0;
    case "dragenter":
      return (on = Br(on, e, t, n, r, s)), !0;
    case "mouseover":
      return (ln = Br(ln, e, t, n, r, s)), !0;
    case "pointerover":
      var o = s.pointerId;
      return hs.set(o, Br(hs.get(o) || null, e, t, n, r, s)), !0;
    case "gotpointercapture":
      return (
        (o = s.pointerId), ms.set(o, Br(ms.get(o) || null, e, t, n, r, s)), !0
      );
  }
  return !1;
}
function Cp(e) {
  var t = Rn(e.target);
  if (t !== null) {
    var n = Vn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = fp(n)), t !== null)) {
          (e.blockedOn = t),
            Ep(e.priority, function () {
              jp(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function xo(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ca(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (sa = r), n.target.dispatchEvent(r), (sa = null);
    } else return (t = Ms(n)), t !== null && ju(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Qc(e, t, n) {
  xo(e) && n.delete(t);
}
function rv() {
  (ua = !1),
    sn !== null && xo(sn) && (sn = null),
    on !== null && xo(on) && (on = null),
    ln !== null && xo(ln) && (ln = null),
    hs.forEach(Qc),
    ms.forEach(Qc);
}
function br(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    ua ||
      ((ua = !0),
      Ke.unstable_scheduleCallback(Ke.unstable_NormalPriority, rv)));
}
function ys(e) {
  function t(s) {
    return br(s, e);
  }
  if (0 < no.length) {
    br(no[0], e);
    for (var n = 1; n < no.length; n++) {
      var r = no[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    sn !== null && br(sn, e),
      on !== null && br(on, e),
      ln !== null && br(ln, e),
      hs.forEach(t),
      ms.forEach(t),
      n = 0;
    n < Zt.length;
    n++
  )
    (r = Zt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Zt.length && ((n = Zt[0]), n.blockedOn === null); )
    Cp(n), n.blockedOn === null && Zt.shift();
}
var gr = Vt.ReactCurrentBatchConfig,
  Fo = !0;
function sv(e, t, n, r) {
  var s = H,
    o = gr.transition;
  gr.transition = null;
  try {
    (H = 1), Su(e, t, n, r);
  } finally {
    (H = s), (gr.transition = o);
  }
}
function ov(e, t, n, r) {
  var s = H,
    o = gr.transition;
  gr.transition = null;
  try {
    (H = 4), Su(e, t, n, r);
  } finally {
    (H = s), (gr.transition = o);
  }
}
function Su(e, t, n, r) {
  if (Fo) {
    var s = ca(e, t, n, r);
    if (s === null) wi(e, t, r, Ao, n), Gc(e, r);
    else if (nv(s, e, t, n, r)) r.stopPropagation();
    else if ((Gc(e, r), t & 4 && -1 < tv.indexOf(e))) {
      for (; s !== null; ) {
        var o = Ms(s);
        if (
          (o !== null && wp(o),
          (o = ca(e, t, n, r)),
          o === null && wi(e, t, r, Ao, n),
          o === s)
        )
          break;
        s = o;
      }
      s !== null && r.stopPropagation();
    } else wi(e, t, r, null, n);
  }
}
var Ao = null;
function ca(e, t, n, r) {
  if (((Ao = null), (e = vu(r)), (e = Rn(e)), e !== null))
    if (((t = Vn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = fp(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Ao = e), null;
}
function Np(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Kg()) {
        case xu:
          return 1;
        case yp:
          return 4;
        case Do:
        case Gg:
          return 16;
        case gp:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var tn = null,
  Eu = null,
  wo = null;
function kp() {
  if (wo) return wo;
  var e,
    t = Eu,
    n = t.length,
    r,
    s = "value" in tn ? tn.value : tn.textContent,
    o = s.length;
  for (e = 0; e < n && t[e] === s[e]; e++);
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === s[o - r]; r++);
  return (wo = s.slice(e, 1 < r ? 1 - r : void 0));
}
function jo(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function ro() {
  return !0;
}
function Jc() {
  return !1;
}
function qe(e) {
  function t(n, r, s, o, l) {
    (this._reactName = n),
      (this._targetInst = s),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = l),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(o) : o[a]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? ro
        : Jc),
      (this.isPropagationStopped = Jc),
      this
    );
  }
  return (
    re(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = ro));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = ro));
      },
      persist: function () {},
      isPersistent: ro,
    }),
    t
  );
}
var Or = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Cu = qe(Or),
  As = re({}, Or, { view: 0, detail: 0 }),
  lv = qe(As),
  di,
  fi,
  Wr,
  jl = re({}, As, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Nu,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Wr &&
            (Wr && e.type === "mousemove"
              ? ((di = e.screenX - Wr.screenX), (fi = e.screenY - Wr.screenY))
              : (fi = di = 0),
            (Wr = e)),
          di);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : fi;
    },
  }),
  qc = qe(jl),
  iv = re({}, jl, { dataTransfer: 0 }),
  av = qe(iv),
  uv = re({}, As, { relatedTarget: 0 }),
  pi = qe(uv),
  cv = re({}, Or, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  dv = qe(cv),
  fv = re({}, Or, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  pv = qe(fv),
  hv = re({}, Or, { data: 0 }),
  Xc = qe(hv),
  mv = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  yv = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  gv = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function vv(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = gv[e]) ? !!t[e] : !1;
}
function Nu() {
  return vv;
}
var xv = re({}, As, {
    key: function (e) {
      if (e.key) {
        var t = mv[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = jo(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? yv[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Nu,
    charCode: function (e) {
      return e.type === "keypress" ? jo(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? jo(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  wv = qe(xv),
  jv = re({}, jl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Yc = qe(jv),
  Sv = re({}, As, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Nu,
  }),
  Ev = qe(Sv),
  Cv = re({}, Or, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Nv = qe(Cv),
  kv = re({}, jl, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  _v = qe(kv),
  Rv = [9, 13, 27, 32],
  ku = zt && "CompositionEvent" in window,
  ss = null;
zt && "documentMode" in document && (ss = document.documentMode);
var Pv = zt && "TextEvent" in window && !ss,
  _p = zt && (!ku || (ss && 8 < ss && 11 >= ss)),
  Zc = " ",
  ed = !1;
function Rp(e, t) {
  switch (e) {
    case "keyup":
      return Rv.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Pp(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var rr = !1;
function Ov(e, t) {
  switch (e) {
    case "compositionend":
      return Pp(t);
    case "keypress":
      return t.which !== 32 ? null : ((ed = !0), Zc);
    case "textInput":
      return (e = t.data), e === Zc && ed ? null : e;
    default:
      return null;
  }
}
function Tv(e, t) {
  if (rr)
    return e === "compositionend" || (!ku && Rp(e, t))
      ? ((e = kp()), (wo = Eu = tn = null), (rr = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return _p && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Lv = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function td(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Lv[e.type] : t === "textarea";
}
function Op(e, t, n, r) {
  ip(r),
    (t = Mo(t, "onChange")),
    0 < t.length &&
      ((n = new Cu("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var os = null,
  gs = null;
function Iv(e) {
  Bp(e, 0);
}
function Sl(e) {
  var t = lr(e);
  if (ep(t)) return e;
}
function Dv(e, t) {
  if (e === "change") return t;
}
var Tp = !1;
if (zt) {
  var hi;
  if (zt) {
    var mi = "oninput" in document;
    if (!mi) {
      var nd = document.createElement("div");
      nd.setAttribute("oninput", "return;"),
        (mi = typeof nd.oninput == "function");
    }
    hi = mi;
  } else hi = !1;
  Tp = hi && (!document.documentMode || 9 < document.documentMode);
}
function rd() {
  os && (os.detachEvent("onpropertychange", Lp), (gs = os = null));
}
function Lp(e) {
  if (e.propertyName === "value" && Sl(gs)) {
    var t = [];
    Op(t, gs, e, vu(e)), dp(Iv, t);
  }
}
function $v(e, t, n) {
  e === "focusin"
    ? (rd(), (os = t), (gs = n), os.attachEvent("onpropertychange", Lp))
    : e === "focusout" && rd();
}
function Fv(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Sl(gs);
}
function Av(e, t) {
  if (e === "click") return Sl(t);
}
function Mv(e, t) {
  if (e === "input" || e === "change") return Sl(t);
}
function zv(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var xt = typeof Object.is == "function" ? Object.is : zv;
function vs(e, t) {
  if (xt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var s = n[r];
    if (!Ki.call(t, s) || !xt(e[s], t[s])) return !1;
  }
  return !0;
}
function sd(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function od(e, t) {
  var n = sd(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = sd(n);
  }
}
function Ip(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Ip(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Dp() {
  for (var e = window, t = To(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = To(e.document);
  }
  return t;
}
function _u(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Uv(e) {
  var t = Dp(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Ip(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && _u(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var s = n.textContent.length,
          o = Math.min(r.start, s);
        (r = r.end === void 0 ? o : Math.min(r.end, s)),
          !e.extend && o > r && ((s = r), (r = o), (o = s)),
          (s = od(n, o));
        var l = od(n, r);
        s &&
          l &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== s.node ||
            e.anchorOffset !== s.offset ||
            e.focusNode !== l.node ||
            e.focusOffset !== l.offset) &&
          ((t = t.createRange()),
          t.setStart(s.node, s.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(l.node, l.offset))
            : (t.setEnd(l.node, l.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Bv = zt && "documentMode" in document && 11 >= document.documentMode,
  sr = null,
  da = null,
  ls = null,
  fa = !1;
function ld(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  fa ||
    sr == null ||
    sr !== To(r) ||
    ((r = sr),
    "selectionStart" in r && _u(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (ls && vs(ls, r)) ||
      ((ls = r),
      (r = Mo(da, "onSelect")),
      0 < r.length &&
        ((t = new Cu("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = sr))));
}
function so(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var or = {
    animationend: so("Animation", "AnimationEnd"),
    animationiteration: so("Animation", "AnimationIteration"),
    animationstart: so("Animation", "AnimationStart"),
    transitionend: so("Transition", "TransitionEnd"),
  },
  yi = {},
  $p = {};
zt &&
  (($p = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete or.animationend.animation,
    delete or.animationiteration.animation,
    delete or.animationstart.animation),
  "TransitionEvent" in window || delete or.transitionend.transition);
function El(e) {
  if (yi[e]) return yi[e];
  if (!or[e]) return e;
  var t = or[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in $p) return (yi[e] = t[n]);
  return e;
}
var Fp = El("animationend"),
  Ap = El("animationiteration"),
  Mp = El("animationstart"),
  zp = El("transitionend"),
  Up = new Map(),
  id =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function xn(e, t) {
  Up.set(e, t), Hn(t, [e]);
}
for (var gi = 0; gi < id.length; gi++) {
  var vi = id[gi],
    bv = vi.toLowerCase(),
    Wv = vi[0].toUpperCase() + vi.slice(1);
  xn(bv, "on" + Wv);
}
xn(Fp, "onAnimationEnd");
xn(Ap, "onAnimationIteration");
xn(Mp, "onAnimationStart");
xn("dblclick", "onDoubleClick");
xn("focusin", "onFocus");
xn("focusout", "onBlur");
xn(zp, "onTransitionEnd");
wr("onMouseEnter", ["mouseout", "mouseover"]);
wr("onMouseLeave", ["mouseout", "mouseover"]);
wr("onPointerEnter", ["pointerout", "pointerover"]);
wr("onPointerLeave", ["pointerout", "pointerover"]);
Hn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Hn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Hn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Hn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Hn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Hn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Zr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Hv = new Set("cancel close invalid load scroll toggle".split(" ").concat(Zr));
function ad(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), bg(r, t, void 0, e), (e.currentTarget = null);
}
function Bp(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      s = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var l = r.length - 1; 0 <= l; l--) {
          var a = r[l],
            u = a.instance,
            c = a.currentTarget;
          if (((a = a.listener), u !== o && s.isPropagationStopped())) break e;
          ad(s, a, c), (o = u);
        }
      else
        for (l = 0; l < r.length; l++) {
          if (
            ((a = r[l]),
            (u = a.instance),
            (c = a.currentTarget),
            (a = a.listener),
            u !== o && s.isPropagationStopped())
          )
            break e;
          ad(s, a, c), (o = u);
        }
    }
  }
  if (Io) throw ((e = ia), (Io = !1), (ia = null), e);
}
function q(e, t) {
  var n = t[ga];
  n === void 0 && (n = t[ga] = new Set());
  var r = e + "__bubble";
  n.has(r) || (bp(t, e, 2, !1), n.add(r));
}
function xi(e, t, n) {
  var r = 0;
  t && (r |= 4), bp(n, e, r, t);
}
var oo = "_reactListening" + Math.random().toString(36).slice(2);
function xs(e) {
  if (!e[oo]) {
    (e[oo] = !0),
      Jf.forEach(function (n) {
        n !== "selectionchange" && (Hv.has(n) || xi(n, !1, e), xi(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[oo] || ((t[oo] = !0), xi("selectionchange", !1, t));
  }
}
function bp(e, t, n, r) {
  switch (Np(t)) {
    case 1:
      var s = sv;
      break;
    case 4:
      s = ov;
      break;
    default:
      s = Su;
  }
  (n = s.bind(null, t, n, e)),
    (s = void 0),
    !la ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (s = !0),
    r
      ? s !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: s })
        : e.addEventListener(t, n, !0)
      : s !== void 0
      ? e.addEventListener(t, n, { passive: s })
      : e.addEventListener(t, n, !1);
}
function wi(e, t, n, r, s) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var l = r.tag;
      if (l === 3 || l === 4) {
        var a = r.stateNode.containerInfo;
        if (a === s || (a.nodeType === 8 && a.parentNode === s)) break;
        if (l === 4)
          for (l = r.return; l !== null; ) {
            var u = l.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = l.stateNode.containerInfo),
              u === s || (u.nodeType === 8 && u.parentNode === s))
            )
              return;
            l = l.return;
          }
        for (; a !== null; ) {
          if (((l = Rn(a)), l === null)) return;
          if (((u = l.tag), u === 5 || u === 6)) {
            r = o = l;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  dp(function () {
    var c = o,
      d = vu(n),
      f = [];
    e: {
      var p = Up.get(e);
      if (p !== void 0) {
        var v = Cu,
          h = e;
        switch (e) {
          case "keypress":
            if (jo(n) === 0) break e;
          case "keydown":
          case "keyup":
            v = wv;
            break;
          case "focusin":
            (h = "focus"), (v = pi);
            break;
          case "focusout":
            (h = "blur"), (v = pi);
            break;
          case "beforeblur":
          case "afterblur":
            v = pi;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = qc;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = av;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = Ev;
            break;
          case Fp:
          case Ap:
          case Mp:
            v = dv;
            break;
          case zp:
            v = Nv;
            break;
          case "scroll":
            v = lv;
            break;
          case "wheel":
            v = _v;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = pv;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = Yc;
        }
        var j = (t & 4) !== 0,
          w = !j && e === "scroll",
          x = j ? (p !== null ? p + "Capture" : null) : p;
        j = [];
        for (var g = c, m; g !== null; ) {
          m = g;
          var S = m.stateNode;
          if (
            (m.tag === 5 &&
              S !== null &&
              ((m = S),
              x !== null && ((S = ps(g, x)), S != null && j.push(ws(g, S, m)))),
            w)
          )
            break;
          g = g.return;
        }
        0 < j.length &&
          ((p = new v(p, h, null, n, d)), f.push({ event: p, listeners: j }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === "mouseover" || e === "pointerover"),
          (v = e === "mouseout" || e === "pointerout"),
          p &&
            n !== sa &&
            (h = n.relatedTarget || n.fromElement) &&
            (Rn(h) || h[Ut]))
        )
          break e;
        if (
          (v || p) &&
          ((p =
            d.window === d
              ? d
              : (p = d.ownerDocument)
              ? p.defaultView || p.parentWindow
              : window),
          v
            ? ((h = n.relatedTarget || n.toElement),
              (v = c),
              (h = h ? Rn(h) : null),
              h !== null &&
                ((w = Vn(h)), h !== w || (h.tag !== 5 && h.tag !== 6)) &&
                (h = null))
            : ((v = null), (h = c)),
          v !== h)
        ) {
          if (
            ((j = qc),
            (S = "onMouseLeave"),
            (x = "onMouseEnter"),
            (g = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((j = Yc),
              (S = "onPointerLeave"),
              (x = "onPointerEnter"),
              (g = "pointer")),
            (w = v == null ? p : lr(v)),
            (m = h == null ? p : lr(h)),
            (p = new j(S, g + "leave", v, n, d)),
            (p.target = w),
            (p.relatedTarget = m),
            (S = null),
            Rn(d) === c &&
              ((j = new j(x, g + "enter", h, n, d)),
              (j.target = m),
              (j.relatedTarget = w),
              (S = j)),
            (w = S),
            v && h)
          )
            t: {
              for (j = v, x = h, g = 0, m = j; m; m = Yn(m)) g++;
              for (m = 0, S = x; S; S = Yn(S)) m++;
              for (; 0 < g - m; ) (j = Yn(j)), g--;
              for (; 0 < m - g; ) (x = Yn(x)), m--;
              for (; g--; ) {
                if (j === x || (x !== null && j === x.alternate)) break t;
                (j = Yn(j)), (x = Yn(x));
              }
              j = null;
            }
          else j = null;
          v !== null && ud(f, p, v, j, !1),
            h !== null && w !== null && ud(f, w, h, j, !0);
        }
      }
      e: {
        if (
          ((p = c ? lr(c) : window),
          (v = p.nodeName && p.nodeName.toLowerCase()),
          v === "select" || (v === "input" && p.type === "file"))
        )
          var N = Dv;
        else if (td(p))
          if (Tp) N = Mv;
          else {
            N = Fv;
            var C = $v;
          }
        else
          (v = p.nodeName) &&
            v.toLowerCase() === "input" &&
            (p.type === "checkbox" || p.type === "radio") &&
            (N = Av);
        if (N && (N = N(e, c))) {
          Op(f, N, n, d);
          break e;
        }
        C && C(e, p, c),
          e === "focusout" &&
            (C = p._wrapperState) &&
            C.controlled &&
            p.type === "number" &&
            Zi(p, "number", p.value);
      }
      switch (((C = c ? lr(c) : window), e)) {
        case "focusin":
          (td(C) || C.contentEditable === "true") &&
            ((sr = C), (da = c), (ls = null));
          break;
        case "focusout":
          ls = da = sr = null;
          break;
        case "mousedown":
          fa = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (fa = !1), ld(f, n, d);
          break;
        case "selectionchange":
          if (Bv) break;
        case "keydown":
        case "keyup":
          ld(f, n, d);
      }
      var k;
      if (ku)
        e: {
          switch (e) {
            case "compositionstart":
              var P = "onCompositionStart";
              break e;
            case "compositionend":
              P = "onCompositionEnd";
              break e;
            case "compositionupdate":
              P = "onCompositionUpdate";
              break e;
          }
          P = void 0;
        }
      else
        rr
          ? Rp(e, n) && (P = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
      P &&
        (_p &&
          n.locale !== "ko" &&
          (rr || P !== "onCompositionStart"
            ? P === "onCompositionEnd" && rr && (k = kp())
            : ((tn = d),
              (Eu = "value" in tn ? tn.value : tn.textContent),
              (rr = !0))),
        (C = Mo(c, P)),
        0 < C.length &&
          ((P = new Xc(P, e, null, n, d)),
          f.push({ event: P, listeners: C }),
          k ? (P.data = k) : ((k = Pp(n)), k !== null && (P.data = k)))),
        (k = Pv ? Ov(e, n) : Tv(e, n)) &&
          ((c = Mo(c, "onBeforeInput")),
          0 < c.length &&
            ((d = new Xc("onBeforeInput", "beforeinput", null, n, d)),
            f.push({ event: d, listeners: c }),
            (d.data = k)));
    }
    Bp(f, t);
  });
}
function ws(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Mo(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var s = e,
      o = s.stateNode;
    s.tag === 5 &&
      o !== null &&
      ((s = o),
      (o = ps(e, n)),
      o != null && r.unshift(ws(e, o, s)),
      (o = ps(e, t)),
      o != null && r.push(ws(e, o, s))),
      (e = e.return);
  }
  return r;
}
function Yn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function ud(e, t, n, r, s) {
  for (var o = t._reactName, l = []; n !== null && n !== r; ) {
    var a = n,
      u = a.alternate,
      c = a.stateNode;
    if (u !== null && u === r) break;
    a.tag === 5 &&
      c !== null &&
      ((a = c),
      s
        ? ((u = ps(n, o)), u != null && l.unshift(ws(n, u, a)))
        : s || ((u = ps(n, o)), u != null && l.push(ws(n, u, a)))),
      (n = n.return);
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var Vv = /\r\n?/g,
  Kv = /\u0000|\uFFFD/g;
function cd(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Vv,
      `
`
    )
    .replace(Kv, "");
}
function lo(e, t, n) {
  if (((t = cd(t)), cd(e) !== t && n)) throw Error(R(425));
}
function zo() {}
var pa = null,
  ha = null;
function ma(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var ya = typeof setTimeout == "function" ? setTimeout : void 0,
  Gv = typeof clearTimeout == "function" ? clearTimeout : void 0,
  dd = typeof Promise == "function" ? Promise : void 0,
  Qv =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof dd < "u"
      ? function (e) {
          return dd.resolve(null).then(e).catch(Jv);
        }
      : ya;
function Jv(e) {
  setTimeout(function () {
    throw e;
  });
}
function ji(e, t) {
  var n = t,
    r = 0;
  do {
    var s = n.nextSibling;
    if ((e.removeChild(n), s && s.nodeType === 8))
      if (((n = s.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(s), ys(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = s;
  } while (n);
  ys(t);
}
function an(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function fd(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Tr = Math.random().toString(36).slice(2),
  Ct = "__reactFiber$" + Tr,
  js = "__reactProps$" + Tr,
  Ut = "__reactContainer$" + Tr,
  ga = "__reactEvents$" + Tr,
  qv = "__reactListeners$" + Tr,
  Xv = "__reactHandles$" + Tr;
function Rn(e) {
  var t = e[Ct];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ut] || n[Ct])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = fd(e); e !== null; ) {
          if ((n = e[Ct])) return n;
          e = fd(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Ms(e) {
  return (
    (e = e[Ct] || e[Ut]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function lr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(R(33));
}
function Cl(e) {
  return e[js] || null;
}
var va = [],
  ir = -1;
function wn(e) {
  return { current: e };
}
function X(e) {
  0 > ir || ((e.current = va[ir]), (va[ir] = null), ir--);
}
function J(e, t) {
  ir++, (va[ir] = e.current), (e.current = t);
}
var mn = {},
  Ee = wn(mn),
  De = wn(!1),
  $n = mn;
function jr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return mn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var s = {},
    o;
  for (o in n) s[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    s
  );
}
function $e(e) {
  return (e = e.childContextTypes), e != null;
}
function Uo() {
  X(De), X(Ee);
}
function pd(e, t, n) {
  if (Ee.current !== mn) throw Error(R(168));
  J(Ee, t), J(De, n);
}
function Wp(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var s in r) if (!(s in t)) throw Error(R(108, $g(e) || "Unknown", s));
  return re({}, n, r);
}
function Bo(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || mn),
    ($n = Ee.current),
    J(Ee, e),
    J(De, De.current),
    !0
  );
}
function hd(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(R(169));
  n
    ? ((e = Wp(e, t, $n)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      X(De),
      X(Ee),
      J(Ee, e))
    : X(De),
    J(De, n);
}
var Lt = null,
  Nl = !1,
  Si = !1;
function Hp(e) {
  Lt === null ? (Lt = [e]) : Lt.push(e);
}
function Yv(e) {
  (Nl = !0), Hp(e);
}
function jn() {
  if (!Si && Lt !== null) {
    Si = !0;
    var e = 0,
      t = H;
    try {
      var n = Lt;
      for (H = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Lt = null), (Nl = !1);
    } catch (s) {
      throw (Lt !== null && (Lt = Lt.slice(e + 1)), mp(xu, jn), s);
    } finally {
      (H = t), (Si = !1);
    }
  }
  return null;
}
var ar = [],
  ur = 0,
  bo = null,
  Wo = 0,
  Ze = [],
  et = 0,
  Fn = null,
  $t = 1,
  Ft = "";
function Cn(e, t) {
  (ar[ur++] = Wo), (ar[ur++] = bo), (bo = e), (Wo = t);
}
function Vp(e, t, n) {
  (Ze[et++] = $t), (Ze[et++] = Ft), (Ze[et++] = Fn), (Fn = e);
  var r = $t;
  e = Ft;
  var s = 32 - mt(r) - 1;
  (r &= ~(1 << s)), (n += 1);
  var o = 32 - mt(t) + s;
  if (30 < o) {
    var l = s - (s % 5);
    (o = (r & ((1 << l) - 1)).toString(32)),
      (r >>= l),
      (s -= l),
      ($t = (1 << (32 - mt(t) + s)) | (n << s) | r),
      (Ft = o + e);
  } else ($t = (1 << o) | (n << s) | r), (Ft = e);
}
function Ru(e) {
  e.return !== null && (Cn(e, 1), Vp(e, 1, 0));
}
function Pu(e) {
  for (; e === bo; )
    (bo = ar[--ur]), (ar[ur] = null), (Wo = ar[--ur]), (ar[ur] = null);
  for (; e === Fn; )
    (Fn = Ze[--et]),
      (Ze[et] = null),
      (Ft = Ze[--et]),
      (Ze[et] = null),
      ($t = Ze[--et]),
      (Ze[et] = null);
}
var He = null,
  be = null,
  Y = !1,
  ft = null;
function Kp(e, t) {
  var n = nt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function md(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (He = e), (be = an(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (He = e), (be = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Fn !== null ? { id: $t, overflow: Ft } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = nt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (He = e),
            (be = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function xa(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function wa(e) {
  if (Y) {
    var t = be;
    if (t) {
      var n = t;
      if (!md(e, t)) {
        if (xa(e)) throw Error(R(418));
        t = an(n.nextSibling);
        var r = He;
        t && md(e, t)
          ? Kp(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (Y = !1), (He = e));
      }
    } else {
      if (xa(e)) throw Error(R(418));
      (e.flags = (e.flags & -4097) | 2), (Y = !1), (He = e);
    }
  }
}
function yd(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  He = e;
}
function io(e) {
  if (e !== He) return !1;
  if (!Y) return yd(e), (Y = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !ma(e.type, e.memoizedProps))),
    t && (t = be))
  ) {
    if (xa(e)) throw (Gp(), Error(R(418)));
    for (; t; ) Kp(e, t), (t = an(t.nextSibling));
  }
  if ((yd(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(R(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              be = an(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      be = null;
    }
  } else be = He ? an(e.stateNode.nextSibling) : null;
  return !0;
}
function Gp() {
  for (var e = be; e; ) e = an(e.nextSibling);
}
function Sr() {
  (be = He = null), (Y = !1);
}
function Ou(e) {
  ft === null ? (ft = [e]) : ft.push(e);
}
var Zv = Vt.ReactCurrentBatchConfig;
function Hr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(R(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(R(147, e));
      var s = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (l) {
            var a = s.refs;
            l === null ? delete a[o] : (a[o] = l);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(R(284));
    if (!n._owner) throw Error(R(290, e));
  }
  return e;
}
function ao(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      R(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function gd(e) {
  var t = e._init;
  return t(e._payload);
}
function Qp(e) {
  function t(x, g) {
    if (e) {
      var m = x.deletions;
      m === null ? ((x.deletions = [g]), (x.flags |= 16)) : m.push(g);
    }
  }
  function n(x, g) {
    if (!e) return null;
    for (; g !== null; ) t(x, g), (g = g.sibling);
    return null;
  }
  function r(x, g) {
    for (x = new Map(); g !== null; )
      g.key !== null ? x.set(g.key, g) : x.set(g.index, g), (g = g.sibling);
    return x;
  }
  function s(x, g) {
    return (x = fn(x, g)), (x.index = 0), (x.sibling = null), x;
  }
  function o(x, g, m) {
    return (
      (x.index = m),
      e
        ? ((m = x.alternate),
          m !== null
            ? ((m = m.index), m < g ? ((x.flags |= 2), g) : m)
            : ((x.flags |= 2), g))
        : ((x.flags |= 1048576), g)
    );
  }
  function l(x) {
    return e && x.alternate === null && (x.flags |= 2), x;
  }
  function a(x, g, m, S) {
    return g === null || g.tag !== 6
      ? ((g = Pi(m, x.mode, S)), (g.return = x), g)
      : ((g = s(g, m)), (g.return = x), g);
  }
  function u(x, g, m, S) {
    var N = m.type;
    return N === nr
      ? d(x, g, m.props.children, S, m.key)
      : g !== null &&
        (g.elementType === N ||
          (typeof N == "object" &&
            N !== null &&
            N.$$typeof === qt &&
            gd(N) === g.type))
      ? ((S = s(g, m.props)), (S.ref = Hr(x, g, m)), (S.return = x), S)
      : ((S = Ro(m.type, m.key, m.props, null, x.mode, S)),
        (S.ref = Hr(x, g, m)),
        (S.return = x),
        S);
  }
  function c(x, g, m, S) {
    return g === null ||
      g.tag !== 4 ||
      g.stateNode.containerInfo !== m.containerInfo ||
      g.stateNode.implementation !== m.implementation
      ? ((g = Oi(m, x.mode, S)), (g.return = x), g)
      : ((g = s(g, m.children || [])), (g.return = x), g);
  }
  function d(x, g, m, S, N) {
    return g === null || g.tag !== 7
      ? ((g = In(m, x.mode, S, N)), (g.return = x), g)
      : ((g = s(g, m)), (g.return = x), g);
  }
  function f(x, g, m) {
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return (g = Pi("" + g, x.mode, m)), (g.return = x), g;
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case Xs:
          return (
            (m = Ro(g.type, g.key, g.props, null, x.mode, m)),
            (m.ref = Hr(x, null, g)),
            (m.return = x),
            m
          );
        case tr:
          return (g = Oi(g, x.mode, m)), (g.return = x), g;
        case qt:
          var S = g._init;
          return f(x, S(g._payload), m);
      }
      if (Xr(g) || zr(g))
        return (g = In(g, x.mode, m, null)), (g.return = x), g;
      ao(x, g);
    }
    return null;
  }
  function p(x, g, m, S) {
    var N = g !== null ? g.key : null;
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return N !== null ? null : a(x, g, "" + m, S);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Xs:
          return m.key === N ? u(x, g, m, S) : null;
        case tr:
          return m.key === N ? c(x, g, m, S) : null;
        case qt:
          return (N = m._init), p(x, g, N(m._payload), S);
      }
      if (Xr(m) || zr(m)) return N !== null ? null : d(x, g, m, S, null);
      ao(x, m);
    }
    return null;
  }
  function v(x, g, m, S, N) {
    if ((typeof S == "string" && S !== "") || typeof S == "number")
      return (x = x.get(m) || null), a(g, x, "" + S, N);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case Xs:
          return (x = x.get(S.key === null ? m : S.key) || null), u(g, x, S, N);
        case tr:
          return (x = x.get(S.key === null ? m : S.key) || null), c(g, x, S, N);
        case qt:
          var C = S._init;
          return v(x, g, m, C(S._payload), N);
      }
      if (Xr(S) || zr(S)) return (x = x.get(m) || null), d(g, x, S, N, null);
      ao(g, S);
    }
    return null;
  }
  function h(x, g, m, S) {
    for (
      var N = null, C = null, k = g, P = (g = 0), b = null;
      k !== null && P < m.length;
      P++
    ) {
      k.index > P ? ((b = k), (k = null)) : (b = k.sibling);
      var D = p(x, k, m[P], S);
      if (D === null) {
        k === null && (k = b);
        break;
      }
      e && k && D.alternate === null && t(x, k),
        (g = o(D, g, P)),
        C === null ? (N = D) : (C.sibling = D),
        (C = D),
        (k = b);
    }
    if (P === m.length) return n(x, k), Y && Cn(x, P), N;
    if (k === null) {
      for (; P < m.length; P++)
        (k = f(x, m[P], S)),
          k !== null &&
            ((g = o(k, g, P)), C === null ? (N = k) : (C.sibling = k), (C = k));
      return Y && Cn(x, P), N;
    }
    for (k = r(x, k); P < m.length; P++)
      (b = v(k, x, P, m[P], S)),
        b !== null &&
          (e && b.alternate !== null && k.delete(b.key === null ? P : b.key),
          (g = o(b, g, P)),
          C === null ? (N = b) : (C.sibling = b),
          (C = b));
    return (
      e &&
        k.forEach(function (ae) {
          return t(x, ae);
        }),
      Y && Cn(x, P),
      N
    );
  }
  function j(x, g, m, S) {
    var N = zr(m);
    if (typeof N != "function") throw Error(R(150));
    if (((m = N.call(m)), m == null)) throw Error(R(151));
    for (
      var C = (N = null), k = g, P = (g = 0), b = null, D = m.next();
      k !== null && !D.done;
      P++, D = m.next()
    ) {
      k.index > P ? ((b = k), (k = null)) : (b = k.sibling);
      var ae = p(x, k, D.value, S);
      if (ae === null) {
        k === null && (k = b);
        break;
      }
      e && k && ae.alternate === null && t(x, k),
        (g = o(ae, g, P)),
        C === null ? (N = ae) : (C.sibling = ae),
        (C = ae),
        (k = b);
    }
    if (D.done) return n(x, k), Y && Cn(x, P), N;
    if (k === null) {
      for (; !D.done; P++, D = m.next())
        (D = f(x, D.value, S)),
          D !== null &&
            ((g = o(D, g, P)), C === null ? (N = D) : (C.sibling = D), (C = D));
      return Y && Cn(x, P), N;
    }
    for (k = r(x, k); !D.done; P++, D = m.next())
      (D = v(k, x, P, D.value, S)),
        D !== null &&
          (e && D.alternate !== null && k.delete(D.key === null ? P : D.key),
          (g = o(D, g, P)),
          C === null ? (N = D) : (C.sibling = D),
          (C = D));
    return (
      e &&
        k.forEach(function (Ot) {
          return t(x, Ot);
        }),
      Y && Cn(x, P),
      N
    );
  }
  function w(x, g, m, S) {
    if (
      (typeof m == "object" &&
        m !== null &&
        m.type === nr &&
        m.key === null &&
        (m = m.props.children),
      typeof m == "object" && m !== null)
    ) {
      switch (m.$$typeof) {
        case Xs:
          e: {
            for (var N = m.key, C = g; C !== null; ) {
              if (C.key === N) {
                if (((N = m.type), N === nr)) {
                  if (C.tag === 7) {
                    n(x, C.sibling),
                      (g = s(C, m.props.children)),
                      (g.return = x),
                      (x = g);
                    break e;
                  }
                } else if (
                  C.elementType === N ||
                  (typeof N == "object" &&
                    N !== null &&
                    N.$$typeof === qt &&
                    gd(N) === C.type)
                ) {
                  n(x, C.sibling),
                    (g = s(C, m.props)),
                    (g.ref = Hr(x, C, m)),
                    (g.return = x),
                    (x = g);
                  break e;
                }
                n(x, C);
                break;
              } else t(x, C);
              C = C.sibling;
            }
            m.type === nr
              ? ((g = In(m.props.children, x.mode, S, m.key)),
                (g.return = x),
                (x = g))
              : ((S = Ro(m.type, m.key, m.props, null, x.mode, S)),
                (S.ref = Hr(x, g, m)),
                (S.return = x),
                (x = S));
          }
          return l(x);
        case tr:
          e: {
            for (C = m.key; g !== null; ) {
              if (g.key === C)
                if (
                  g.tag === 4 &&
                  g.stateNode.containerInfo === m.containerInfo &&
                  g.stateNode.implementation === m.implementation
                ) {
                  n(x, g.sibling),
                    (g = s(g, m.children || [])),
                    (g.return = x),
                    (x = g);
                  break e;
                } else {
                  n(x, g);
                  break;
                }
              else t(x, g);
              g = g.sibling;
            }
            (g = Oi(m, x.mode, S)), (g.return = x), (x = g);
          }
          return l(x);
        case qt:
          return (C = m._init), w(x, g, C(m._payload), S);
      }
      if (Xr(m)) return h(x, g, m, S);
      if (zr(m)) return j(x, g, m, S);
      ao(x, m);
    }
    return (typeof m == "string" && m !== "") || typeof m == "number"
      ? ((m = "" + m),
        g !== null && g.tag === 6
          ? (n(x, g.sibling), (g = s(g, m)), (g.return = x), (x = g))
          : (n(x, g), (g = Pi(m, x.mode, S)), (g.return = x), (x = g)),
        l(x))
      : n(x, g);
  }
  return w;
}
var Er = Qp(!0),
  Jp = Qp(!1),
  Ho = wn(null),
  Vo = null,
  cr = null,
  Tu = null;
function Lu() {
  Tu = cr = Vo = null;
}
function Iu(e) {
  var t = Ho.current;
  X(Ho), (e._currentValue = t);
}
function ja(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function vr(e, t) {
  (Vo = e),
    (Tu = cr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ie = !0), (e.firstContext = null));
}
function st(e) {
  var t = e._currentValue;
  if (Tu !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), cr === null)) {
      if (Vo === null) throw Error(R(308));
      (cr = e), (Vo.dependencies = { lanes: 0, firstContext: e });
    } else cr = cr.next = e;
  return t;
}
var Pn = null;
function Du(e) {
  Pn === null ? (Pn = [e]) : Pn.push(e);
}
function qp(e, t, n, r) {
  var s = t.interleaved;
  return (
    s === null ? ((n.next = n), Du(t)) : ((n.next = s.next), (s.next = n)),
    (t.interleaved = n),
    Bt(e, r)
  );
}
function Bt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Xt = !1;
function $u(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Xp(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function At(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function un(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), W & 2)) {
    var s = r.pending;
    return (
      s === null ? (t.next = t) : ((t.next = s.next), (s.next = t)),
      (r.pending = t),
      Bt(e, n)
    );
  }
  return (
    (s = r.interleaved),
    s === null ? ((t.next = t), Du(r)) : ((t.next = s.next), (s.next = t)),
    (r.interleaved = t),
    Bt(e, n)
  );
}
function So(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), wu(e, n);
  }
}
function vd(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var s = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var l = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (s = o = l) : (o = o.next = l), (n = n.next);
      } while (n !== null);
      o === null ? (s = o = t) : (o = o.next = t);
    } else s = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: s,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Ko(e, t, n, r) {
  var s = e.updateQueue;
  Xt = !1;
  var o = s.firstBaseUpdate,
    l = s.lastBaseUpdate,
    a = s.shared.pending;
  if (a !== null) {
    s.shared.pending = null;
    var u = a,
      c = u.next;
    (u.next = null), l === null ? (o = c) : (l.next = c), (l = u);
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (a = d.lastBaseUpdate),
      a !== l &&
        (a === null ? (d.firstBaseUpdate = c) : (a.next = c),
        (d.lastBaseUpdate = u)));
  }
  if (o !== null) {
    var f = s.baseState;
    (l = 0), (d = c = u = null), (a = o);
    do {
      var p = a.lane,
        v = a.eventTime;
      if ((r & p) === p) {
        d !== null &&
          (d = d.next =
            {
              eventTime: v,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var h = e,
            j = a;
          switch (((p = t), (v = n), j.tag)) {
            case 1:
              if (((h = j.payload), typeof h == "function")) {
                f = h.call(v, f, p);
                break e;
              }
              f = h;
              break e;
            case 3:
              h.flags = (h.flags & -65537) | 128;
            case 0:
              if (
                ((h = j.payload),
                (p = typeof h == "function" ? h.call(v, f, p) : h),
                p == null)
              )
                break e;
              f = re({}, f, p);
              break e;
            case 2:
              Xt = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (p = s.effects),
          p === null ? (s.effects = [a]) : p.push(a));
      } else
        (v = {
          eventTime: v,
          lane: p,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          d === null ? ((c = d = v), (u = f)) : (d = d.next = v),
          (l |= p);
      if (((a = a.next), a === null)) {
        if (((a = s.shared.pending), a === null)) break;
        (p = a),
          (a = p.next),
          (p.next = null),
          (s.lastBaseUpdate = p),
          (s.shared.pending = null);
      }
    } while (!0);
    if (
      (d === null && (u = f),
      (s.baseState = u),
      (s.firstBaseUpdate = c),
      (s.lastBaseUpdate = d),
      (t = s.shared.interleaved),
      t !== null)
    ) {
      s = t;
      do (l |= s.lane), (s = s.next);
      while (s !== t);
    } else o === null && (s.shared.lanes = 0);
    (Mn |= l), (e.lanes = l), (e.memoizedState = f);
  }
}
function xd(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        s = r.callback;
      if (s !== null) {
        if (((r.callback = null), (r = n), typeof s != "function"))
          throw Error(R(191, s));
        s.call(r);
      }
    }
}
var zs = {},
  kt = wn(zs),
  Ss = wn(zs),
  Es = wn(zs);
function On(e) {
  if (e === zs) throw Error(R(174));
  return e;
}
function Fu(e, t) {
  switch ((J(Es, t), J(Ss, e), J(kt, zs), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ta(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = ta(t, e));
  }
  X(kt), J(kt, t);
}
function Cr() {
  X(kt), X(Ss), X(Es);
}
function Yp(e) {
  On(Es.current);
  var t = On(kt.current),
    n = ta(t, e.type);
  t !== n && (J(Ss, e), J(kt, n));
}
function Au(e) {
  Ss.current === e && (X(kt), X(Ss));
}
var ee = wn(0);
function Go(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Ei = [];
function Mu() {
  for (var e = 0; e < Ei.length; e++)
    Ei[e]._workInProgressVersionPrimary = null;
  Ei.length = 0;
}
var Eo = Vt.ReactCurrentDispatcher,
  Ci = Vt.ReactCurrentBatchConfig,
  An = 0,
  te = null,
  ce = null,
  he = null,
  Qo = !1,
  is = !1,
  Cs = 0,
  ex = 0;
function we() {
  throw Error(R(321));
}
function zu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!xt(e[n], t[n])) return !1;
  return !0;
}
function Uu(e, t, n, r, s, o) {
  if (
    ((An = o),
    (te = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Eo.current = e === null || e.memoizedState === null ? sx : ox),
    (e = n(r, s)),
    is)
  ) {
    o = 0;
    do {
      if (((is = !1), (Cs = 0), 25 <= o)) throw Error(R(301));
      (o += 1),
        (he = ce = null),
        (t.updateQueue = null),
        (Eo.current = lx),
        (e = n(r, s));
    } while (is);
  }
  if (
    ((Eo.current = Jo),
    (t = ce !== null && ce.next !== null),
    (An = 0),
    (he = ce = te = null),
    (Qo = !1),
    t)
  )
    throw Error(R(300));
  return e;
}
function Bu() {
  var e = Cs !== 0;
  return (Cs = 0), e;
}
function Et() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return he === null ? (te.memoizedState = he = e) : (he = he.next = e), he;
}
function ot() {
  if (ce === null) {
    var e = te.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ce.next;
  var t = he === null ? te.memoizedState : he.next;
  if (t !== null) (he = t), (ce = e);
  else {
    if (e === null) throw Error(R(310));
    (ce = e),
      (e = {
        memoizedState: ce.memoizedState,
        baseState: ce.baseState,
        baseQueue: ce.baseQueue,
        queue: ce.queue,
        next: null,
      }),
      he === null ? (te.memoizedState = he = e) : (he = he.next = e);
  }
  return he;
}
function Ns(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Ni(e) {
  var t = ot(),
    n = t.queue;
  if (n === null) throw Error(R(311));
  n.lastRenderedReducer = e;
  var r = ce,
    s = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (s !== null) {
      var l = s.next;
      (s.next = o.next), (o.next = l);
    }
    (r.baseQueue = s = o), (n.pending = null);
  }
  if (s !== null) {
    (o = s.next), (r = r.baseState);
    var a = (l = null),
      u = null,
      c = o;
    do {
      var d = c.lane;
      if ((An & d) === d)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var f = {
          lane: d,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        u === null ? ((a = u = f), (l = r)) : (u = u.next = f),
          (te.lanes |= d),
          (Mn |= d);
      }
      c = c.next;
    } while (c !== null && c !== o);
    u === null ? (l = r) : (u.next = a),
      xt(r, t.memoizedState) || (Ie = !0),
      (t.memoizedState = r),
      (t.baseState = l),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    s = e;
    do (o = s.lane), (te.lanes |= o), (Mn |= o), (s = s.next);
    while (s !== e);
  } else s === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ki(e) {
  var t = ot(),
    n = t.queue;
  if (n === null) throw Error(R(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    s = n.pending,
    o = t.memoizedState;
  if (s !== null) {
    n.pending = null;
    var l = (s = s.next);
    do (o = e(o, l.action)), (l = l.next);
    while (l !== s);
    xt(o, t.memoizedState) || (Ie = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function Zp() {}
function eh(e, t) {
  var n = te,
    r = ot(),
    s = t(),
    o = !xt(r.memoizedState, s);
  if (
    (o && ((r.memoizedState = s), (Ie = !0)),
    (r = r.queue),
    bu(rh.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (he !== null && he.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      ks(9, nh.bind(null, n, r, s, t), void 0, null),
      me === null)
    )
      throw Error(R(349));
    An & 30 || th(n, t, s);
  }
  return s;
}
function th(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = te.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (te.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function nh(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), sh(t) && oh(e);
}
function rh(e, t, n) {
  return n(function () {
    sh(t) && oh(e);
  });
}
function sh(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !xt(e, n);
  } catch {
    return !0;
  }
}
function oh(e) {
  var t = Bt(e, 1);
  t !== null && yt(t, e, 1, -1);
}
function wd(e) {
  var t = Et();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ns,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = rx.bind(null, te, e)),
    [t.memoizedState, e]
  );
}
function ks(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = te.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (te.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function lh() {
  return ot().memoizedState;
}
function Co(e, t, n, r) {
  var s = Et();
  (te.flags |= e),
    (s.memoizedState = ks(1 | t, n, void 0, r === void 0 ? null : r));
}
function kl(e, t, n, r) {
  var s = ot();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (ce !== null) {
    var l = ce.memoizedState;
    if (((o = l.destroy), r !== null && zu(r, l.deps))) {
      s.memoizedState = ks(t, n, o, r);
      return;
    }
  }
  (te.flags |= e), (s.memoizedState = ks(1 | t, n, o, r));
}
function jd(e, t) {
  return Co(8390656, 8, e, t);
}
function bu(e, t) {
  return kl(2048, 8, e, t);
}
function ih(e, t) {
  return kl(4, 2, e, t);
}
function ah(e, t) {
  return kl(4, 4, e, t);
}
function uh(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function ch(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), kl(4, 4, uh.bind(null, t, e), n)
  );
}
function Wu() {}
function dh(e, t) {
  var n = ot();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && zu(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function fh(e, t) {
  var n = ot();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && zu(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function ph(e, t, n) {
  return An & 21
    ? (xt(n, t) || ((n = vp()), (te.lanes |= n), (Mn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ie = !0)), (e.memoizedState = n));
}
function tx(e, t) {
  var n = H;
  (H = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Ci.transition;
  Ci.transition = {};
  try {
    e(!1), t();
  } finally {
    (H = n), (Ci.transition = r);
  }
}
function hh() {
  return ot().memoizedState;
}
function nx(e, t, n) {
  var r = dn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    mh(e))
  )
    yh(t, n);
  else if (((n = qp(e, t, n, r)), n !== null)) {
    var s = ke();
    yt(n, e, r, s), gh(n, t, r);
  }
}
function rx(e, t, n) {
  var r = dn(e),
    s = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (mh(e)) yh(t, s);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var l = t.lastRenderedState,
          a = o(l, n);
        if (((s.hasEagerState = !0), (s.eagerState = a), xt(a, l))) {
          var u = t.interleaved;
          u === null
            ? ((s.next = s), Du(t))
            : ((s.next = u.next), (u.next = s)),
            (t.interleaved = s);
          return;
        }
      } catch {
      } finally {
      }
    (n = qp(e, t, s, r)),
      n !== null && ((s = ke()), yt(n, e, r, s), gh(n, t, r));
  }
}
function mh(e) {
  var t = e.alternate;
  return e === te || (t !== null && t === te);
}
function yh(e, t) {
  is = Qo = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function gh(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), wu(e, n);
  }
}
var Jo = {
    readContext: st,
    useCallback: we,
    useContext: we,
    useEffect: we,
    useImperativeHandle: we,
    useInsertionEffect: we,
    useLayoutEffect: we,
    useMemo: we,
    useReducer: we,
    useRef: we,
    useState: we,
    useDebugValue: we,
    useDeferredValue: we,
    useTransition: we,
    useMutableSource: we,
    useSyncExternalStore: we,
    useId: we,
    unstable_isNewReconciler: !1,
  },
  sx = {
    readContext: st,
    useCallback: function (e, t) {
      return (Et().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: st,
    useEffect: jd,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Co(4194308, 4, uh.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Co(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Co(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Et();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Et();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = nx.bind(null, te, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Et();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: wd,
    useDebugValue: Wu,
    useDeferredValue: function (e) {
      return (Et().memoizedState = e);
    },
    useTransition: function () {
      var e = wd(!1),
        t = e[0];
      return (e = tx.bind(null, e[1])), (Et().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = te,
        s = Et();
      if (Y) {
        if (n === void 0) throw Error(R(407));
        n = n();
      } else {
        if (((n = t()), me === null)) throw Error(R(349));
        An & 30 || th(r, t, n);
      }
      s.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (s.queue = o),
        jd(rh.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        ks(9, nh.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Et(),
        t = me.identifierPrefix;
      if (Y) {
        var n = Ft,
          r = $t;
        (n = (r & ~(1 << (32 - mt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Cs++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = ex++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  ox = {
    readContext: st,
    useCallback: dh,
    useContext: st,
    useEffect: bu,
    useImperativeHandle: ch,
    useInsertionEffect: ih,
    useLayoutEffect: ah,
    useMemo: fh,
    useReducer: Ni,
    useRef: lh,
    useState: function () {
      return Ni(Ns);
    },
    useDebugValue: Wu,
    useDeferredValue: function (e) {
      var t = ot();
      return ph(t, ce.memoizedState, e);
    },
    useTransition: function () {
      var e = Ni(Ns)[0],
        t = ot().memoizedState;
      return [e, t];
    },
    useMutableSource: Zp,
    useSyncExternalStore: eh,
    useId: hh,
    unstable_isNewReconciler: !1,
  },
  lx = {
    readContext: st,
    useCallback: dh,
    useContext: st,
    useEffect: bu,
    useImperativeHandle: ch,
    useInsertionEffect: ih,
    useLayoutEffect: ah,
    useMemo: fh,
    useReducer: ki,
    useRef: lh,
    useState: function () {
      return ki(Ns);
    },
    useDebugValue: Wu,
    useDeferredValue: function (e) {
      var t = ot();
      return ce === null ? (t.memoizedState = e) : ph(t, ce.memoizedState, e);
    },
    useTransition: function () {
      var e = ki(Ns)[0],
        t = ot().memoizedState;
      return [e, t];
    },
    useMutableSource: Zp,
    useSyncExternalStore: eh,
    useId: hh,
    unstable_isNewReconciler: !1,
  };
function ct(e, t) {
  if (e && e.defaultProps) {
    (t = re({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Sa(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : re({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var _l = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Vn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ke(),
      s = dn(e),
      o = At(r, s);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = un(e, o, s)),
      t !== null && (yt(t, e, s, r), So(t, e, s));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ke(),
      s = dn(e),
      o = At(r, s);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = un(e, o, s)),
      t !== null && (yt(t, e, s, r), So(t, e, s));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ke(),
      r = dn(e),
      s = At(n, r);
    (s.tag = 2),
      t != null && (s.callback = t),
      (t = un(e, s, r)),
      t !== null && (yt(t, e, r, n), So(t, e, r));
  },
};
function Sd(e, t, n, r, s, o, l) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, l)
      : t.prototype && t.prototype.isPureReactComponent
      ? !vs(n, r) || !vs(s, o)
      : !0
  );
}
function vh(e, t, n) {
  var r = !1,
    s = mn,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = st(o))
      : ((s = $e(t) ? $n : Ee.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? jr(e, s) : mn)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = _l),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = s),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Ed(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && _l.enqueueReplaceState(t, t.state, null);
}
function Ea(e, t, n, r) {
  var s = e.stateNode;
  (s.props = n), (s.state = e.memoizedState), (s.refs = {}), $u(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (s.context = st(o))
    : ((o = $e(t) ? $n : Ee.current), (s.context = jr(e, o))),
    (s.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (Sa(e, t, o, n), (s.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function" ||
      (typeof s.UNSAFE_componentWillMount != "function" &&
        typeof s.componentWillMount != "function") ||
      ((t = s.state),
      typeof s.componentWillMount == "function" && s.componentWillMount(),
      typeof s.UNSAFE_componentWillMount == "function" &&
        s.UNSAFE_componentWillMount(),
      t !== s.state && _l.enqueueReplaceState(s, s.state, null),
      Ko(e, n, s, r),
      (s.state = e.memoizedState)),
    typeof s.componentDidMount == "function" && (e.flags |= 4194308);
}
function Nr(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Dg(r)), (r = r.return);
    while (r);
    var s = n;
  } catch (o) {
    s =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: s, digest: null };
}
function _i(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ca(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var ix = typeof WeakMap == "function" ? WeakMap : Map;
function xh(e, t, n) {
  (n = At(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Xo || ((Xo = !0), (Da = r)), Ca(e, t);
    }),
    n
  );
}
function wh(e, t, n) {
  (n = At(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var s = t.value;
    (n.payload = function () {
      return r(s);
    }),
      (n.callback = function () {
        Ca(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        Ca(e, t),
          typeof r != "function" &&
            (cn === null ? (cn = new Set([this])) : cn.add(this));
        var l = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: l !== null ? l : "",
        });
      }),
    n
  );
}
function Cd(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new ix();
    var s = new Set();
    r.set(t, s);
  } else (s = r.get(t)), s === void 0 && ((s = new Set()), r.set(t, s));
  s.has(n) || (s.add(n), (e = jx.bind(null, e, t, n)), t.then(e, e));
}
function Nd(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function kd(e, t, n, r, s) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = s), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = At(-1, 1)), (t.tag = 2), un(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var ax = Vt.ReactCurrentOwner,
  Ie = !1;
function Ne(e, t, n, r) {
  t.child = e === null ? Jp(t, null, n, r) : Er(t, e.child, n, r);
}
function _d(e, t, n, r, s) {
  n = n.render;
  var o = t.ref;
  return (
    vr(t, s),
    (r = Uu(e, t, n, r, o, s)),
    (n = Bu()),
    e !== null && !Ie
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~s),
        bt(e, t, s))
      : (Y && n && Ru(t), (t.flags |= 1), Ne(e, t, r, s), t.child)
  );
}
function Rd(e, t, n, r, s) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !Xu(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), jh(e, t, o, r, s))
      : ((e = Ro(n.type, null, r, t, t.mode, s)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & s))) {
    var l = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : vs), n(l, r) && e.ref === t.ref)
    )
      return bt(e, t, s);
  }
  return (
    (t.flags |= 1),
    (e = fn(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function jh(e, t, n, r, s) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (vs(o, r) && e.ref === t.ref)
      if (((Ie = !1), (t.pendingProps = r = o), (e.lanes & s) !== 0))
        e.flags & 131072 && (Ie = !0);
      else return (t.lanes = e.lanes), bt(e, t, s);
  }
  return Na(e, t, n, r, s);
}
function Sh(e, t, n) {
  var r = t.pendingProps,
    s = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        J(fr, Ue),
        (Ue |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          J(fr, Ue),
          (Ue |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        J(fr, Ue),
        (Ue |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      J(fr, Ue),
      (Ue |= r);
  return Ne(e, t, s, n), t.child;
}
function Eh(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Na(e, t, n, r, s) {
  var o = $e(n) ? $n : Ee.current;
  return (
    (o = jr(t, o)),
    vr(t, s),
    (n = Uu(e, t, n, r, o, s)),
    (r = Bu()),
    e !== null && !Ie
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~s),
        bt(e, t, s))
      : (Y && r && Ru(t), (t.flags |= 1), Ne(e, t, n, s), t.child)
  );
}
function Pd(e, t, n, r, s) {
  if ($e(n)) {
    var o = !0;
    Bo(t);
  } else o = !1;
  if ((vr(t, s), t.stateNode === null))
    No(e, t), vh(t, n, r), Ea(t, n, r, s), (r = !0);
  else if (e === null) {
    var l = t.stateNode,
      a = t.memoizedProps;
    l.props = a;
    var u = l.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = st(c))
      : ((c = $e(n) ? $n : Ee.current), (c = jr(t, c)));
    var d = n.getDerivedStateFromProps,
      f =
        typeof d == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((a !== r || u !== c) && Ed(t, l, r, c)),
      (Xt = !1);
    var p = t.memoizedState;
    (l.state = p),
      Ko(t, r, l, s),
      (u = t.memoizedState),
      a !== r || p !== u || De.current || Xt
        ? (typeof d == "function" && (Sa(t, n, d, r), (u = t.memoizedState)),
          (a = Xt || Sd(t, n, a, r, p, u, c))
            ? (f ||
                (typeof l.UNSAFE_componentWillMount != "function" &&
                  typeof l.componentWillMount != "function") ||
                (typeof l.componentWillMount == "function" &&
                  l.componentWillMount(),
                typeof l.UNSAFE_componentWillMount == "function" &&
                  l.UNSAFE_componentWillMount()),
              typeof l.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = u)),
          (l.props = r),
          (l.state = u),
          (l.context = c),
          (r = a))
        : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (l = t.stateNode),
      Xp(e, t),
      (a = t.memoizedProps),
      (c = t.type === t.elementType ? a : ct(t.type, a)),
      (l.props = c),
      (f = t.pendingProps),
      (p = l.context),
      (u = n.contextType),
      typeof u == "object" && u !== null
        ? (u = st(u))
        : ((u = $e(n) ? $n : Ee.current), (u = jr(t, u)));
    var v = n.getDerivedStateFromProps;
    (d =
      typeof v == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function") ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((a !== f || p !== u) && Ed(t, l, r, u)),
      (Xt = !1),
      (p = t.memoizedState),
      (l.state = p),
      Ko(t, r, l, s);
    var h = t.memoizedState;
    a !== f || p !== h || De.current || Xt
      ? (typeof v == "function" && (Sa(t, n, v, r), (h = t.memoizedState)),
        (c = Xt || Sd(t, n, c, r, p, h, u) || !1)
          ? (d ||
              (typeof l.UNSAFE_componentWillUpdate != "function" &&
                typeof l.componentWillUpdate != "function") ||
              (typeof l.componentWillUpdate == "function" &&
                l.componentWillUpdate(r, h, u),
              typeof l.UNSAFE_componentWillUpdate == "function" &&
                l.UNSAFE_componentWillUpdate(r, h, u)),
            typeof l.componentDidUpdate == "function" && (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof l.componentDidUpdate != "function" ||
              (a === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = h)),
        (l.props = r),
        (l.state = h),
        (l.context = u),
        (r = c))
      : (typeof l.componentDidUpdate != "function" ||
          (a === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return ka(e, t, n, r, o, s);
}
function ka(e, t, n, r, s, o) {
  Eh(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return s && hd(t, n, !1), bt(e, t, o);
  (r = t.stateNode), (ax.current = t);
  var a =
    l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && l
      ? ((t.child = Er(t, e.child, null, o)), (t.child = Er(t, null, a, o)))
      : Ne(e, t, a, o),
    (t.memoizedState = r.state),
    s && hd(t, n, !0),
    t.child
  );
}
function Ch(e) {
  var t = e.stateNode;
  t.pendingContext
    ? pd(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && pd(e, t.context, !1),
    Fu(e, t.containerInfo);
}
function Od(e, t, n, r, s) {
  return Sr(), Ou(s), (t.flags |= 256), Ne(e, t, n, r), t.child;
}
var _a = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ra(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Nh(e, t, n) {
  var r = t.pendingProps,
    s = ee.current,
    o = !1,
    l = (t.flags & 128) !== 0,
    a;
  if (
    ((a = l) ||
      (a = e !== null && e.memoizedState === null ? !1 : (s & 2) !== 0),
    a
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (s |= 1),
    J(ee, s & 1),
    e === null)
  )
    return (
      wa(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((l = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (l = { mode: "hidden", children: l }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = l))
                : (o = Ol(l, r, 0, null)),
              (e = In(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Ra(n)),
              (t.memoizedState = _a),
              e)
            : Hu(t, l))
    );
  if (((s = e.memoizedState), s !== null && ((a = s.dehydrated), a !== null)))
    return ux(e, t, l, r, a, s, n);
  if (o) {
    (o = r.fallback), (l = t.mode), (s = e.child), (a = s.sibling);
    var u = { mode: "hidden", children: r.children };
    return (
      !(l & 1) && t.child !== s
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = fn(s, u)), (r.subtreeFlags = s.subtreeFlags & 14680064)),
      a !== null ? (o = fn(a, o)) : ((o = In(o, l, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (l = e.child.memoizedState),
      (l =
        l === null
          ? Ra(n)
          : {
              baseLanes: l.baseLanes | n,
              cachePool: null,
              transitions: l.transitions,
            }),
      (o.memoizedState = l),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = _a),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = fn(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Hu(e, t) {
  return (
    (t = Ol({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function uo(e, t, n, r) {
  return (
    r !== null && Ou(r),
    Er(t, e.child, null, n),
    (e = Hu(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function ux(e, t, n, r, s, o, l) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = _i(Error(R(422)))), uo(e, t, l, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (s = t.mode),
        (r = Ol({ mode: "visible", children: r.children }, s, 0, null)),
        (o = In(o, s, l, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && Er(t, e.child, null, l),
        (t.child.memoizedState = Ra(l)),
        (t.memoizedState = _a),
        o);
  if (!(t.mode & 1)) return uo(e, t, l, null);
  if (s.data === "$!") {
    if (((r = s.nextSibling && s.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (o = Error(R(419))), (r = _i(o, r, void 0)), uo(e, t, l, r);
  }
  if (((a = (l & e.childLanes) !== 0), Ie || a)) {
    if (((r = me), r !== null)) {
      switch (l & -l) {
        case 4:
          s = 2;
          break;
        case 16:
          s = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          s = 32;
          break;
        case 536870912:
          s = 268435456;
          break;
        default:
          s = 0;
      }
      (s = s & (r.suspendedLanes | l) ? 0 : s),
        s !== 0 &&
          s !== o.retryLane &&
          ((o.retryLane = s), Bt(e, s), yt(r, e, s, -1));
    }
    return qu(), (r = _i(Error(R(421)))), uo(e, t, l, r);
  }
  return s.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Sx.bind(null, e)),
      (s._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (be = an(s.nextSibling)),
      (He = t),
      (Y = !0),
      (ft = null),
      e !== null &&
        ((Ze[et++] = $t),
        (Ze[et++] = Ft),
        (Ze[et++] = Fn),
        ($t = e.id),
        (Ft = e.overflow),
        (Fn = t)),
      (t = Hu(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Td(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), ja(e.return, t, n);
}
function Ri(e, t, n, r, s) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: s,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = s));
}
function kh(e, t, n) {
  var r = t.pendingProps,
    s = r.revealOrder,
    o = r.tail;
  if ((Ne(e, t, r.children, n), (r = ee.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Td(e, n, t);
        else if (e.tag === 19) Td(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((J(ee, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (s) {
      case "forwards":
        for (n = t.child, s = null; n !== null; )
          (e = n.alternate),
            e !== null && Go(e) === null && (s = n),
            (n = n.sibling);
        (n = s),
          n === null
            ? ((s = t.child), (t.child = null))
            : ((s = n.sibling), (n.sibling = null)),
          Ri(t, !1, s, n, o);
        break;
      case "backwards":
        for (n = null, s = t.child, t.child = null; s !== null; ) {
          if (((e = s.alternate), e !== null && Go(e) === null)) {
            t.child = s;
            break;
          }
          (e = s.sibling), (s.sibling = n), (n = s), (s = e);
        }
        Ri(t, !0, n, null, o);
        break;
      case "together":
        Ri(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function No(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function bt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Mn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(R(153));
  if (t.child !== null) {
    for (
      e = t.child, n = fn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = fn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function cx(e, t, n) {
  switch (t.tag) {
    case 3:
      Ch(t), Sr();
      break;
    case 5:
      Yp(t);
      break;
    case 1:
      $e(t.type) && Bo(t);
      break;
    case 4:
      Fu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        s = t.memoizedProps.value;
      J(Ho, r._currentValue), (r._currentValue = s);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (J(ee, ee.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Nh(e, t, n)
          : (J(ee, ee.current & 1),
            (e = bt(e, t, n)),
            e !== null ? e.sibling : null);
      J(ee, ee.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return kh(e, t, n);
        t.flags |= 128;
      }
      if (
        ((s = t.memoizedState),
        s !== null &&
          ((s.rendering = null), (s.tail = null), (s.lastEffect = null)),
        J(ee, ee.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Sh(e, t, n);
  }
  return bt(e, t, n);
}
var _h, Pa, Rh, Ph;
_h = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Pa = function () {};
Rh = function (e, t, n, r) {
  var s = e.memoizedProps;
  if (s !== r) {
    (e = t.stateNode), On(kt.current);
    var o = null;
    switch (n) {
      case "input":
        (s = Xi(e, s)), (r = Xi(e, r)), (o = []);
        break;
      case "select":
        (s = re({}, s, { value: void 0 })),
          (r = re({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (s = ea(e, s)), (r = ea(e, r)), (o = []);
        break;
      default:
        typeof s.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = zo);
    }
    na(n, r);
    var l;
    n = null;
    for (c in s)
      if (!r.hasOwnProperty(c) && s.hasOwnProperty(c) && s[c] != null)
        if (c === "style") {
          var a = s[c];
          for (l in a) a.hasOwnProperty(l) && (n || (n = {}), (n[l] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (ds.hasOwnProperty(c)
              ? o || (o = [])
              : (o = o || []).push(c, null));
    for (c in r) {
      var u = r[c];
      if (
        ((a = s != null ? s[c] : void 0),
        r.hasOwnProperty(c) && u !== a && (u != null || a != null))
      )
        if (c === "style")
          if (a) {
            for (l in a)
              !a.hasOwnProperty(l) ||
                (u && u.hasOwnProperty(l)) ||
                (n || (n = {}), (n[l] = ""));
            for (l in u)
              u.hasOwnProperty(l) &&
                a[l] !== u[l] &&
                (n || (n = {}), (n[l] = u[l]));
          } else n || (o || (o = []), o.push(c, n)), (n = u);
        else
          c === "dangerouslySetInnerHTML"
            ? ((u = u ? u.__html : void 0),
              (a = a ? a.__html : void 0),
              u != null && a !== u && (o = o || []).push(c, u))
            : c === "children"
            ? (typeof u != "string" && typeof u != "number") ||
              (o = o || []).push(c, "" + u)
            : c !== "suppressContentEditableWarning" &&
              c !== "suppressHydrationWarning" &&
              (ds.hasOwnProperty(c)
                ? (u != null && c === "onScroll" && q("scroll", e),
                  o || a === u || (o = []))
                : (o = o || []).push(c, u));
    }
    n && (o = o || []).push("style", n);
    var c = o;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Ph = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Vr(e, t) {
  if (!Y)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function je(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var s = e.child; s !== null; )
      (n |= s.lanes | s.childLanes),
        (r |= s.subtreeFlags & 14680064),
        (r |= s.flags & 14680064),
        (s.return = e),
        (s = s.sibling);
  else
    for (s = e.child; s !== null; )
      (n |= s.lanes | s.childLanes),
        (r |= s.subtreeFlags),
        (r |= s.flags),
        (s.return = e),
        (s = s.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function dx(e, t, n) {
  var r = t.pendingProps;
  switch ((Pu(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return je(t), null;
    case 1:
      return $e(t.type) && Uo(), je(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Cr(),
        X(De),
        X(Ee),
        Mu(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (io(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), ft !== null && (Aa(ft), (ft = null)))),
        Pa(e, t),
        je(t),
        null
      );
    case 5:
      Au(t);
      var s = On(Es.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Rh(e, t, n, r, s),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(R(166));
          return je(t), null;
        }
        if (((e = On(kt.current)), io(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[Ct] = t), (r[js] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              q("cancel", r), q("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              q("load", r);
              break;
            case "video":
            case "audio":
              for (s = 0; s < Zr.length; s++) q(Zr[s], r);
              break;
            case "source":
              q("error", r);
              break;
            case "img":
            case "image":
            case "link":
              q("error", r), q("load", r);
              break;
            case "details":
              q("toggle", r);
              break;
            case "input":
              Uc(r, o), q("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                q("invalid", r);
              break;
            case "textarea":
              bc(r, o), q("invalid", r);
          }
          na(n, o), (s = null);
          for (var l in o)
            if (o.hasOwnProperty(l)) {
              var a = o[l];
              l === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (o.suppressHydrationWarning !== !0 &&
                      lo(r.textContent, a, e),
                    (s = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (o.suppressHydrationWarning !== !0 &&
                      lo(r.textContent, a, e),
                    (s = ["children", "" + a]))
                : ds.hasOwnProperty(l) &&
                  a != null &&
                  l === "onScroll" &&
                  q("scroll", r);
            }
          switch (n) {
            case "input":
              Ys(r), Bc(r, o, !0);
              break;
            case "textarea":
              Ys(r), Wc(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = zo);
          }
          (r = s), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (l = s.nodeType === 9 ? s : s.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = rp(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = l.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = l.createElement(n, { is: r.is }))
                : ((e = l.createElement(n)),
                  n === "select" &&
                    ((l = e),
                    r.multiple
                      ? (l.multiple = !0)
                      : r.size && (l.size = r.size)))
              : (e = l.createElementNS(e, n)),
            (e[Ct] = t),
            (e[js] = r),
            _h(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((l = ra(n, r)), n)) {
              case "dialog":
                q("cancel", e), q("close", e), (s = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                q("load", e), (s = r);
                break;
              case "video":
              case "audio":
                for (s = 0; s < Zr.length; s++) q(Zr[s], e);
                s = r;
                break;
              case "source":
                q("error", e), (s = r);
                break;
              case "img":
              case "image":
              case "link":
                q("error", e), q("load", e), (s = r);
                break;
              case "details":
                q("toggle", e), (s = r);
                break;
              case "input":
                Uc(e, r), (s = Xi(e, r)), q("invalid", e);
                break;
              case "option":
                s = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (s = re({}, r, { value: void 0 })),
                  q("invalid", e);
                break;
              case "textarea":
                bc(e, r), (s = ea(e, r)), q("invalid", e);
                break;
              default:
                s = r;
            }
            na(n, s), (a = s);
            for (o in a)
              if (a.hasOwnProperty(o)) {
                var u = a[o];
                o === "style"
                  ? lp(e, u)
                  : o === "dangerouslySetInnerHTML"
                  ? ((u = u ? u.__html : void 0), u != null && sp(e, u))
                  : o === "children"
                  ? typeof u == "string"
                    ? (n !== "textarea" || u !== "") && fs(e, u)
                    : typeof u == "number" && fs(e, "" + u)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (ds.hasOwnProperty(o)
                      ? u != null && o === "onScroll" && q("scroll", e)
                      : u != null && hu(e, o, u, l));
              }
            switch (n) {
              case "input":
                Ys(e), Bc(e, r, !1);
                break;
              case "textarea":
                Ys(e), Wc(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + hn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? hr(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      hr(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof s.onClick == "function" && (e.onclick = zo);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return je(t), null;
    case 6:
      if (e && t.stateNode != null) Ph(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(R(166));
        if (((n = On(Es.current)), On(kt.current), io(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Ct] = t),
            (o = r.nodeValue !== n) && ((e = He), e !== null))
          )
            switch (e.tag) {
              case 3:
                lo(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  lo(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Ct] = t),
            (t.stateNode = r);
      }
      return je(t), null;
    case 13:
      if (
        (X(ee),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Y && be !== null && t.mode & 1 && !(t.flags & 128))
          Gp(), Sr(), (t.flags |= 98560), (o = !1);
        else if (((o = io(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(R(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(R(317));
            o[Ct] = t;
          } else
            Sr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          je(t), (o = !1);
        } else ft !== null && (Aa(ft), (ft = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ee.current & 1 ? de === 0 && (de = 3) : qu())),
          t.updateQueue !== null && (t.flags |= 4),
          je(t),
          null);
    case 4:
      return (
        Cr(), Pa(e, t), e === null && xs(t.stateNode.containerInfo), je(t), null
      );
    case 10:
      return Iu(t.type._context), je(t), null;
    case 17:
      return $e(t.type) && Uo(), je(t), null;
    case 19:
      if ((X(ee), (o = t.memoizedState), o === null)) return je(t), null;
      if (((r = (t.flags & 128) !== 0), (l = o.rendering), l === null))
        if (r) Vr(o, !1);
        else {
          if (de !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((l = Go(e)), l !== null)) {
                for (
                  t.flags |= 128,
                    Vr(o, !1),
                    r = l.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (l = o.alternate),
                    l === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = l.childLanes),
                        (o.lanes = l.lanes),
                        (o.child = l.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = l.memoizedProps),
                        (o.memoizedState = l.memoizedState),
                        (o.updateQueue = l.updateQueue),
                        (o.type = l.type),
                        (e = l.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return J(ee, (ee.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            le() > kr &&
            ((t.flags |= 128), (r = !0), Vr(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Go(l)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Vr(o, !0),
              o.tail === null && o.tailMode === "hidden" && !l.alternate && !Y)
            )
              return je(t), null;
          } else
            2 * le() - o.renderingStartTime > kr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Vr(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((l.sibling = t.child), (t.child = l))
          : ((n = o.last),
            n !== null ? (n.sibling = l) : (t.child = l),
            (o.last = l));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = le()),
          (t.sibling = null),
          (n = ee.current),
          J(ee, r ? (n & 1) | 2 : n & 1),
          t)
        : (je(t), null);
    case 22:
    case 23:
      return (
        Ju(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ue & 1073741824 && (je(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : je(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(R(156, t.tag));
}
function fx(e, t) {
  switch ((Pu(t), t.tag)) {
    case 1:
      return (
        $e(t.type) && Uo(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Cr(),
        X(De),
        X(Ee),
        Mu(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Au(t), null;
    case 13:
      if ((X(ee), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(R(340));
        Sr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return X(ee), null;
    case 4:
      return Cr(), null;
    case 10:
      return Iu(t.type._context), null;
    case 22:
    case 23:
      return Ju(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var co = !1,
  Se = !1,
  px = typeof WeakSet == "function" ? WeakSet : Set,
  L = null;
function dr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        se(e, t, r);
      }
    else n.current = null;
}
function Oa(e, t, n) {
  try {
    n();
  } catch (r) {
    se(e, t, r);
  }
}
var Ld = !1;
function hx(e, t) {
  if (((pa = Fo), (e = Dp()), _u(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var s = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var l = 0,
            a = -1,
            u = -1,
            c = 0,
            d = 0,
            f = e,
            p = null;
          t: for (;;) {
            for (
              var v;
              f !== n || (s !== 0 && f.nodeType !== 3) || (a = l + s),
                f !== o || (r !== 0 && f.nodeType !== 3) || (u = l + r),
                f.nodeType === 3 && (l += f.nodeValue.length),
                (v = f.firstChild) !== null;

            )
              (p = f), (f = v);
            for (;;) {
              if (f === e) break t;
              if (
                (p === n && ++c === s && (a = l),
                p === o && ++d === r && (u = l),
                (v = f.nextSibling) !== null)
              )
                break;
              (f = p), (p = f.parentNode);
            }
            f = v;
          }
          n = a === -1 || u === -1 ? null : { start: a, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (ha = { focusedElem: e, selectionRange: n }, Fo = !1, L = t; L !== null; )
    if (((t = L), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (L = e);
    else
      for (; L !== null; ) {
        t = L;
        try {
          var h = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (h !== null) {
                  var j = h.memoizedProps,
                    w = h.memoizedState,
                    x = t.stateNode,
                    g = x.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? j : ct(t.type, j),
                      w
                    );
                  x.__reactInternalSnapshotBeforeUpdate = g;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1
                  ? (m.textContent = "")
                  : m.nodeType === 9 &&
                    m.documentElement &&
                    m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(R(163));
            }
        } catch (S) {
          se(t, t.return, S);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (L = e);
          break;
        }
        L = t.return;
      }
  return (h = Ld), (Ld = !1), h;
}
function as(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var s = (r = r.next);
    do {
      if ((s.tag & e) === e) {
        var o = s.destroy;
        (s.destroy = void 0), o !== void 0 && Oa(t, n, o);
      }
      s = s.next;
    } while (s !== r);
  }
}
function Rl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Ta(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Oh(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Oh(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Ct], delete t[js], delete t[ga], delete t[qv], delete t[Xv])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Th(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Id(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Th(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function La(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = zo));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (La(e, t, n), e = e.sibling; e !== null; ) La(e, t, n), (e = e.sibling);
}
function Ia(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ia(e, t, n), e = e.sibling; e !== null; ) Ia(e, t, n), (e = e.sibling);
}
var ge = null,
  dt = !1;
function Qt(e, t, n) {
  for (n = n.child; n !== null; ) Lh(e, t, n), (n = n.sibling);
}
function Lh(e, t, n) {
  if (Nt && typeof Nt.onCommitFiberUnmount == "function")
    try {
      Nt.onCommitFiberUnmount(wl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Se || dr(n, t);
    case 6:
      var r = ge,
        s = dt;
      (ge = null),
        Qt(e, t, n),
        (ge = r),
        (dt = s),
        ge !== null &&
          (dt
            ? ((e = ge),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ge.removeChild(n.stateNode));
      break;
    case 18:
      ge !== null &&
        (dt
          ? ((e = ge),
            (n = n.stateNode),
            e.nodeType === 8
              ? ji(e.parentNode, n)
              : e.nodeType === 1 && ji(e, n),
            ys(e))
          : ji(ge, n.stateNode));
      break;
    case 4:
      (r = ge),
        (s = dt),
        (ge = n.stateNode.containerInfo),
        (dt = !0),
        Qt(e, t, n),
        (ge = r),
        (dt = s);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Se &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        s = r = r.next;
        do {
          var o = s,
            l = o.destroy;
          (o = o.tag),
            l !== void 0 && (o & 2 || o & 4) && Oa(n, t, l),
            (s = s.next);
        } while (s !== r);
      }
      Qt(e, t, n);
      break;
    case 1:
      if (
        !Se &&
        (dr(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          se(n, t, a);
        }
      Qt(e, t, n);
      break;
    case 21:
      Qt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Se = (r = Se) || n.memoizedState !== null), Qt(e, t, n), (Se = r))
        : Qt(e, t, n);
      break;
    default:
      Qt(e, t, n);
  }
}
function Dd(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new px()),
      t.forEach(function (r) {
        var s = Ex.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(s, s));
      });
  }
}
function ut(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var s = n[r];
      try {
        var o = e,
          l = t,
          a = l;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (ge = a.stateNode), (dt = !1);
              break e;
            case 3:
              (ge = a.stateNode.containerInfo), (dt = !0);
              break e;
            case 4:
              (ge = a.stateNode.containerInfo), (dt = !0);
              break e;
          }
          a = a.return;
        }
        if (ge === null) throw Error(R(160));
        Lh(o, l, s), (ge = null), (dt = !1);
        var u = s.alternate;
        u !== null && (u.return = null), (s.return = null);
      } catch (c) {
        se(s, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Ih(t, e), (t = t.sibling);
}
function Ih(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ut(t, e), St(e), r & 4)) {
        try {
          as(3, e, e.return), Rl(3, e);
        } catch (j) {
          se(e, e.return, j);
        }
        try {
          as(5, e, e.return);
        } catch (j) {
          se(e, e.return, j);
        }
      }
      break;
    case 1:
      ut(t, e), St(e), r & 512 && n !== null && dr(n, n.return);
      break;
    case 5:
      if (
        (ut(t, e),
        St(e),
        r & 512 && n !== null && dr(n, n.return),
        e.flags & 32)
      ) {
        var s = e.stateNode;
        try {
          fs(s, "");
        } catch (j) {
          se(e, e.return, j);
        }
      }
      if (r & 4 && ((s = e.stateNode), s != null)) {
        var o = e.memoizedProps,
          l = n !== null ? n.memoizedProps : o,
          a = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            a === "input" && o.type === "radio" && o.name != null && tp(s, o),
              ra(a, l);
            var c = ra(a, o);
            for (l = 0; l < u.length; l += 2) {
              var d = u[l],
                f = u[l + 1];
              d === "style"
                ? lp(s, f)
                : d === "dangerouslySetInnerHTML"
                ? sp(s, f)
                : d === "children"
                ? fs(s, f)
                : hu(s, d, f, c);
            }
            switch (a) {
              case "input":
                Yi(s, o);
                break;
              case "textarea":
                np(s, o);
                break;
              case "select":
                var p = s._wrapperState.wasMultiple;
                s._wrapperState.wasMultiple = !!o.multiple;
                var v = o.value;
                v != null
                  ? hr(s, !!o.multiple, v, !1)
                  : p !== !!o.multiple &&
                    (o.defaultValue != null
                      ? hr(s, !!o.multiple, o.defaultValue, !0)
                      : hr(s, !!o.multiple, o.multiple ? [] : "", !1));
            }
            s[js] = o;
          } catch (j) {
            se(e, e.return, j);
          }
      }
      break;
    case 6:
      if ((ut(t, e), St(e), r & 4)) {
        if (e.stateNode === null) throw Error(R(162));
        (s = e.stateNode), (o = e.memoizedProps);
        try {
          s.nodeValue = o;
        } catch (j) {
          se(e, e.return, j);
        }
      }
      break;
    case 3:
      if (
        (ut(t, e), St(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          ys(t.containerInfo);
        } catch (j) {
          se(e, e.return, j);
        }
      break;
    case 4:
      ut(t, e), St(e);
      break;
    case 13:
      ut(t, e),
        St(e),
        (s = e.child),
        s.flags & 8192 &&
          ((o = s.memoizedState !== null),
          (s.stateNode.isHidden = o),
          !o ||
            (s.alternate !== null && s.alternate.memoizedState !== null) ||
            (Gu = le())),
        r & 4 && Dd(e);
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Se = (c = Se) || d), ut(t, e), (Se = c)) : ut(t, e),
        St(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !d && e.mode & 1)
        )
          for (L = e, d = e.child; d !== null; ) {
            for (f = L = d; L !== null; ) {
              switch (((p = L), (v = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  as(4, p, p.return);
                  break;
                case 1:
                  dr(p, p.return);
                  var h = p.stateNode;
                  if (typeof h.componentWillUnmount == "function") {
                    (r = p), (n = p.return);
                    try {
                      (t = r),
                        (h.props = t.memoizedProps),
                        (h.state = t.memoizedState),
                        h.componentWillUnmount();
                    } catch (j) {
                      se(r, n, j);
                    }
                  }
                  break;
                case 5:
                  dr(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    Fd(f);
                    continue;
                  }
              }
              v !== null ? ((v.return = p), (L = v)) : Fd(f);
            }
            d = d.sibling;
          }
        e: for (d = null, f = e; ; ) {
          if (f.tag === 5) {
            if (d === null) {
              d = f;
              try {
                (s = f.stateNode),
                  c
                    ? ((o = s.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((a = f.stateNode),
                      (u = f.memoizedProps.style),
                      (l =
                        u != null && u.hasOwnProperty("display")
                          ? u.display
                          : null),
                      (a.style.display = op("display", l)));
              } catch (j) {
                se(e, e.return, j);
              }
            }
          } else if (f.tag === 6) {
            if (d === null)
              try {
                f.stateNode.nodeValue = c ? "" : f.memoizedProps;
              } catch (j) {
                se(e, e.return, j);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            d === f && (d = null), (f = f.return);
          }
          d === f && (d = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      ut(t, e), St(e), r & 4 && Dd(e);
      break;
    case 21:
      break;
    default:
      ut(t, e), St(e);
  }
}
function St(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Th(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(R(160));
      }
      switch (r.tag) {
        case 5:
          var s = r.stateNode;
          r.flags & 32 && (fs(s, ""), (r.flags &= -33));
          var o = Id(e);
          Ia(e, o, s);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo,
            a = Id(e);
          La(e, a, l);
          break;
        default:
          throw Error(R(161));
      }
    } catch (u) {
      se(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function mx(e, t, n) {
  (L = e), Dh(e);
}
function Dh(e, t, n) {
  for (var r = (e.mode & 1) !== 0; L !== null; ) {
    var s = L,
      o = s.child;
    if (s.tag === 22 && r) {
      var l = s.memoizedState !== null || co;
      if (!l) {
        var a = s.alternate,
          u = (a !== null && a.memoizedState !== null) || Se;
        a = co;
        var c = Se;
        if (((co = l), (Se = u) && !c))
          for (L = s; L !== null; )
            (l = L),
              (u = l.child),
              l.tag === 22 && l.memoizedState !== null
                ? Ad(s)
                : u !== null
                ? ((u.return = l), (L = u))
                : Ad(s);
        for (; o !== null; ) (L = o), Dh(o), (o = o.sibling);
        (L = s), (co = a), (Se = c);
      }
      $d(e);
    } else
      s.subtreeFlags & 8772 && o !== null ? ((o.return = s), (L = o)) : $d(e);
  }
}
function $d(e) {
  for (; L !== null; ) {
    var t = L;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Se || Rl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Se)
                if (n === null) r.componentDidMount();
                else {
                  var s =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : ct(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    s,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && xd(t, o, r);
              break;
            case 3:
              var l = t.updateQueue;
              if (l !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                xd(t, l, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var u = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    u.autoFocus && n.focus();
                    break;
                  case "img":
                    u.src && (n.src = u.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var d = c.memoizedState;
                  if (d !== null) {
                    var f = d.dehydrated;
                    f !== null && ys(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(R(163));
          }
        Se || (t.flags & 512 && Ta(t));
      } catch (p) {
        se(t, t.return, p);
      }
    }
    if (t === e) {
      L = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (L = n);
      break;
    }
    L = t.return;
  }
}
function Fd(e) {
  for (; L !== null; ) {
    var t = L;
    if (t === e) {
      L = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (L = n);
      break;
    }
    L = t.return;
  }
}
function Ad(e) {
  for (; L !== null; ) {
    var t = L;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Rl(4, t);
          } catch (u) {
            se(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var s = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              se(t, s, u);
            }
          }
          var o = t.return;
          try {
            Ta(t);
          } catch (u) {
            se(t, o, u);
          }
          break;
        case 5:
          var l = t.return;
          try {
            Ta(t);
          } catch (u) {
            se(t, l, u);
          }
      }
    } catch (u) {
      se(t, t.return, u);
    }
    if (t === e) {
      L = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (L = a);
      break;
    }
    L = t.return;
  }
}
var yx = Math.ceil,
  qo = Vt.ReactCurrentDispatcher,
  Vu = Vt.ReactCurrentOwner,
  rt = Vt.ReactCurrentBatchConfig,
  W = 0,
  me = null,
  ie = null,
  ve = 0,
  Ue = 0,
  fr = wn(0),
  de = 0,
  _s = null,
  Mn = 0,
  Pl = 0,
  Ku = 0,
  us = null,
  Oe = null,
  Gu = 0,
  kr = 1 / 0,
  Tt = null,
  Xo = !1,
  Da = null,
  cn = null,
  fo = !1,
  nn = null,
  Yo = 0,
  cs = 0,
  $a = null,
  ko = -1,
  _o = 0;
function ke() {
  return W & 6 ? le() : ko !== -1 ? ko : (ko = le());
}
function dn(e) {
  return e.mode & 1
    ? W & 2 && ve !== 0
      ? ve & -ve
      : Zv.transition !== null
      ? (_o === 0 && (_o = vp()), _o)
      : ((e = H),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Np(e.type))),
        e)
    : 1;
}
function yt(e, t, n, r) {
  if (50 < cs) throw ((cs = 0), ($a = null), Error(R(185)));
  Fs(e, n, r),
    (!(W & 2) || e !== me) &&
      (e === me && (!(W & 2) && (Pl |= n), de === 4 && en(e, ve)),
      Fe(e, r),
      n === 1 && W === 0 && !(t.mode & 1) && ((kr = le() + 500), Nl && jn()));
}
function Fe(e, t) {
  var n = e.callbackNode;
  Zg(e, t);
  var r = $o(e, e === me ? ve : 0);
  if (r === 0)
    n !== null && Kc(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Kc(n), t === 1))
      e.tag === 0 ? Yv(Md.bind(null, e)) : Hp(Md.bind(null, e)),
        Qv(function () {
          !(W & 6) && jn();
        }),
        (n = null);
    else {
      switch (xp(r)) {
        case 1:
          n = xu;
          break;
        case 4:
          n = yp;
          break;
        case 16:
          n = Do;
          break;
        case 536870912:
          n = gp;
          break;
        default:
          n = Do;
      }
      n = bh(n, $h.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function $h(e, t) {
  if (((ko = -1), (_o = 0), W & 6)) throw Error(R(327));
  var n = e.callbackNode;
  if (xr() && e.callbackNode !== n) return null;
  var r = $o(e, e === me ? ve : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Zo(e, r);
  else {
    t = r;
    var s = W;
    W |= 2;
    var o = Ah();
    (me !== e || ve !== t) && ((Tt = null), (kr = le() + 500), Ln(e, t));
    do
      try {
        xx();
        break;
      } catch (a) {
        Fh(e, a);
      }
    while (!0);
    Lu(),
      (qo.current = o),
      (W = s),
      ie !== null ? (t = 0) : ((me = null), (ve = 0), (t = de));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((s = aa(e)), s !== 0 && ((r = s), (t = Fa(e, s)))), t === 1)
    )
      throw ((n = _s), Ln(e, 0), en(e, r), Fe(e, le()), n);
    if (t === 6) en(e, r);
    else {
      if (
        ((s = e.current.alternate),
        !(r & 30) &&
          !gx(s) &&
          ((t = Zo(e, r)),
          t === 2 && ((o = aa(e)), o !== 0 && ((r = o), (t = Fa(e, o)))),
          t === 1))
      )
        throw ((n = _s), Ln(e, 0), en(e, r), Fe(e, le()), n);
      switch (((e.finishedWork = s), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(R(345));
        case 2:
          Nn(e, Oe, Tt);
          break;
        case 3:
          if (
            (en(e, r), (r & 130023424) === r && ((t = Gu + 500 - le()), 10 < t))
          ) {
            if ($o(e, 0) !== 0) break;
            if (((s = e.suspendedLanes), (s & r) !== r)) {
              ke(), (e.pingedLanes |= e.suspendedLanes & s);
              break;
            }
            e.timeoutHandle = ya(Nn.bind(null, e, Oe, Tt), t);
            break;
          }
          Nn(e, Oe, Tt);
          break;
        case 4:
          if ((en(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, s = -1; 0 < r; ) {
            var l = 31 - mt(r);
            (o = 1 << l), (l = t[l]), l > s && (s = l), (r &= ~o);
          }
          if (
            ((r = s),
            (r = le() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * yx(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = ya(Nn.bind(null, e, Oe, Tt), r);
            break;
          }
          Nn(e, Oe, Tt);
          break;
        case 5:
          Nn(e, Oe, Tt);
          break;
        default:
          throw Error(R(329));
      }
    }
  }
  return Fe(e, le()), e.callbackNode === n ? $h.bind(null, e) : null;
}
function Fa(e, t) {
  var n = us;
  return (
    e.current.memoizedState.isDehydrated && (Ln(e, t).flags |= 256),
    (e = Zo(e, t)),
    e !== 2 && ((t = Oe), (Oe = n), t !== null && Aa(t)),
    e
  );
}
function Aa(e) {
  Oe === null ? (Oe = e) : Oe.push.apply(Oe, e);
}
function gx(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var s = n[r],
            o = s.getSnapshot;
          s = s.value;
          try {
            if (!xt(o(), s)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function en(e, t) {
  for (
    t &= ~Ku,
      t &= ~Pl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - mt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Md(e) {
  if (W & 6) throw Error(R(327));
  xr();
  var t = $o(e, 0);
  if (!(t & 1)) return Fe(e, le()), null;
  var n = Zo(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = aa(e);
    r !== 0 && ((t = r), (n = Fa(e, r)));
  }
  if (n === 1) throw ((n = _s), Ln(e, 0), en(e, t), Fe(e, le()), n);
  if (n === 6) throw Error(R(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Nn(e, Oe, Tt),
    Fe(e, le()),
    null
  );
}
function Qu(e, t) {
  var n = W;
  W |= 1;
  try {
    return e(t);
  } finally {
    (W = n), W === 0 && ((kr = le() + 500), Nl && jn());
  }
}
function zn(e) {
  nn !== null && nn.tag === 0 && !(W & 6) && xr();
  var t = W;
  W |= 1;
  var n = rt.transition,
    r = H;
  try {
    if (((rt.transition = null), (H = 1), e)) return e();
  } finally {
    (H = r), (rt.transition = n), (W = t), !(W & 6) && jn();
  }
}
function Ju() {
  (Ue = fr.current), X(fr);
}
function Ln(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Gv(n)), ie !== null))
    for (n = ie.return; n !== null; ) {
      var r = n;
      switch ((Pu(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Uo();
          break;
        case 3:
          Cr(), X(De), X(Ee), Mu();
          break;
        case 5:
          Au(r);
          break;
        case 4:
          Cr();
          break;
        case 13:
          X(ee);
          break;
        case 19:
          X(ee);
          break;
        case 10:
          Iu(r.type._context);
          break;
        case 22:
        case 23:
          Ju();
      }
      n = n.return;
    }
  if (
    ((me = e),
    (ie = e = fn(e.current, null)),
    (ve = Ue = t),
    (de = 0),
    (_s = null),
    (Ku = Pl = Mn = 0),
    (Oe = us = null),
    Pn !== null)
  ) {
    for (t = 0; t < Pn.length; t++)
      if (((n = Pn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var s = r.next,
          o = n.pending;
        if (o !== null) {
          var l = o.next;
          (o.next = s), (r.next = l);
        }
        n.pending = r;
      }
    Pn = null;
  }
  return e;
}
function Fh(e, t) {
  do {
    var n = ie;
    try {
      if ((Lu(), (Eo.current = Jo), Qo)) {
        for (var r = te.memoizedState; r !== null; ) {
          var s = r.queue;
          s !== null && (s.pending = null), (r = r.next);
        }
        Qo = !1;
      }
      if (
        ((An = 0),
        (he = ce = te = null),
        (is = !1),
        (Cs = 0),
        (Vu.current = null),
        n === null || n.return === null)
      ) {
        (de = 1), (_s = t), (ie = null);
        break;
      }
      e: {
        var o = e,
          l = n.return,
          a = n,
          u = t;
        if (
          ((t = ve),
          (a.flags |= 32768),
          u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var c = u,
            d = a,
            f = d.tag;
          if (!(d.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var p = d.alternate;
            p
              ? ((d.updateQueue = p.updateQueue),
                (d.memoizedState = p.memoizedState),
                (d.lanes = p.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var v = Nd(l);
          if (v !== null) {
            (v.flags &= -257),
              kd(v, l, a, o, t),
              v.mode & 1 && Cd(o, c, t),
              (t = v),
              (u = c);
            var h = t.updateQueue;
            if (h === null) {
              var j = new Set();
              j.add(u), (t.updateQueue = j);
            } else h.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              Cd(o, c, t), qu();
              break e;
            }
            u = Error(R(426));
          }
        } else if (Y && a.mode & 1) {
          var w = Nd(l);
          if (w !== null) {
            !(w.flags & 65536) && (w.flags |= 256),
              kd(w, l, a, o, t),
              Ou(Nr(u, a));
            break e;
          }
        }
        (o = u = Nr(u, a)),
          de !== 4 && (de = 2),
          us === null ? (us = [o]) : us.push(o),
          (o = l);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var x = xh(o, u, t);
              vd(o, x);
              break e;
            case 1:
              a = u;
              var g = o.type,
                m = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof g.getDerivedStateFromError == "function" ||
                  (m !== null &&
                    typeof m.componentDidCatch == "function" &&
                    (cn === null || !cn.has(m))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var S = wh(o, a, t);
                vd(o, S);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      zh(n);
    } catch (N) {
      (t = N), ie === n && n !== null && (ie = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Ah() {
  var e = qo.current;
  return (qo.current = Jo), e === null ? Jo : e;
}
function qu() {
  (de === 0 || de === 3 || de === 2) && (de = 4),
    me === null || (!(Mn & 268435455) && !(Pl & 268435455)) || en(me, ve);
}
function Zo(e, t) {
  var n = W;
  W |= 2;
  var r = Ah();
  (me !== e || ve !== t) && ((Tt = null), Ln(e, t));
  do
    try {
      vx();
      break;
    } catch (s) {
      Fh(e, s);
    }
  while (!0);
  if ((Lu(), (W = n), (qo.current = r), ie !== null)) throw Error(R(261));
  return (me = null), (ve = 0), de;
}
function vx() {
  for (; ie !== null; ) Mh(ie);
}
function xx() {
  for (; ie !== null && !Hg(); ) Mh(ie);
}
function Mh(e) {
  var t = Bh(e.alternate, e, Ue);
  (e.memoizedProps = e.pendingProps),
    t === null ? zh(e) : (ie = t),
    (Vu.current = null);
}
function zh(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = fx(n, t)), n !== null)) {
        (n.flags &= 32767), (ie = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (de = 6), (ie = null);
        return;
      }
    } else if (((n = dx(n, t, Ue)), n !== null)) {
      ie = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ie = t;
      return;
    }
    ie = t = e;
  } while (t !== null);
  de === 0 && (de = 5);
}
function Nn(e, t, n) {
  var r = H,
    s = rt.transition;
  try {
    (rt.transition = null), (H = 1), wx(e, t, n, r);
  } finally {
    (rt.transition = s), (H = r);
  }
  return null;
}
function wx(e, t, n, r) {
  do xr();
  while (nn !== null);
  if (W & 6) throw Error(R(327));
  n = e.finishedWork;
  var s = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(R(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (ev(e, o),
    e === me && ((ie = me = null), (ve = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      fo ||
      ((fo = !0),
      bh(Do, function () {
        return xr(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = rt.transition), (rt.transition = null);
    var l = H;
    H = 1;
    var a = W;
    (W |= 4),
      (Vu.current = null),
      hx(e, n),
      Ih(n, e),
      Uv(ha),
      (Fo = !!pa),
      (ha = pa = null),
      (e.current = n),
      mx(n),
      Vg(),
      (W = a),
      (H = l),
      (rt.transition = o);
  } else e.current = n;
  if (
    (fo && ((fo = !1), (nn = e), (Yo = s)),
    (o = e.pendingLanes),
    o === 0 && (cn = null),
    Qg(n.stateNode),
    Fe(e, le()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (s = t[n]), r(s.value, { componentStack: s.stack, digest: s.digest });
  if (Xo) throw ((Xo = !1), (e = Da), (Da = null), e);
  return (
    Yo & 1 && e.tag !== 0 && xr(),
    (o = e.pendingLanes),
    o & 1 ? (e === $a ? cs++ : ((cs = 0), ($a = e))) : (cs = 0),
    jn(),
    null
  );
}
function xr() {
  if (nn !== null) {
    var e = xp(Yo),
      t = rt.transition,
      n = H;
    try {
      if (((rt.transition = null), (H = 16 > e ? 16 : e), nn === null))
        var r = !1;
      else {
        if (((e = nn), (nn = null), (Yo = 0), W & 6)) throw Error(R(331));
        var s = W;
        for (W |= 4, L = e.current; L !== null; ) {
          var o = L,
            l = o.child;
          if (L.flags & 16) {
            var a = o.deletions;
            if (a !== null) {
              for (var u = 0; u < a.length; u++) {
                var c = a[u];
                for (L = c; L !== null; ) {
                  var d = L;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      as(8, d, o);
                  }
                  var f = d.child;
                  if (f !== null) (f.return = d), (L = f);
                  else
                    for (; L !== null; ) {
                      d = L;
                      var p = d.sibling,
                        v = d.return;
                      if ((Oh(d), d === c)) {
                        L = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = v), (L = p);
                        break;
                      }
                      L = v;
                    }
                }
              }
              var h = o.alternate;
              if (h !== null) {
                var j = h.child;
                if (j !== null) {
                  h.child = null;
                  do {
                    var w = j.sibling;
                    (j.sibling = null), (j = w);
                  } while (j !== null);
                }
              }
              L = o;
            }
          }
          if (o.subtreeFlags & 2064 && l !== null) (l.return = o), (L = l);
          else
            e: for (; L !== null; ) {
              if (((o = L), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    as(9, o, o.return);
                }
              var x = o.sibling;
              if (x !== null) {
                (x.return = o.return), (L = x);
                break e;
              }
              L = o.return;
            }
        }
        var g = e.current;
        for (L = g; L !== null; ) {
          l = L;
          var m = l.child;
          if (l.subtreeFlags & 2064 && m !== null) (m.return = l), (L = m);
          else
            e: for (l = g; L !== null; ) {
              if (((a = L), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Rl(9, a);
                  }
                } catch (N) {
                  se(a, a.return, N);
                }
              if (a === l) {
                L = null;
                break e;
              }
              var S = a.sibling;
              if (S !== null) {
                (S.return = a.return), (L = S);
                break e;
              }
              L = a.return;
            }
        }
        if (
          ((W = s), jn(), Nt && typeof Nt.onPostCommitFiberRoot == "function")
        )
          try {
            Nt.onPostCommitFiberRoot(wl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (H = n), (rt.transition = t);
    }
  }
  return !1;
}
function zd(e, t, n) {
  (t = Nr(n, t)),
    (t = xh(e, t, 1)),
    (e = un(e, t, 1)),
    (t = ke()),
    e !== null && (Fs(e, 1, t), Fe(e, t));
}
function se(e, t, n) {
  if (e.tag === 3) zd(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        zd(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (cn === null || !cn.has(r)))
        ) {
          (e = Nr(n, e)),
            (e = wh(t, e, 1)),
            (t = un(t, e, 1)),
            (e = ke()),
            t !== null && (Fs(t, 1, e), Fe(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function jx(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = ke()),
    (e.pingedLanes |= e.suspendedLanes & n),
    me === e &&
      (ve & n) === n &&
      (de === 4 || (de === 3 && (ve & 130023424) === ve && 500 > le() - Gu)
        ? Ln(e, 0)
        : (Ku |= n)),
    Fe(e, t);
}
function Uh(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = to), (to <<= 1), !(to & 130023424) && (to = 4194304))
      : (t = 1));
  var n = ke();
  (e = Bt(e, t)), e !== null && (Fs(e, t, n), Fe(e, n));
}
function Sx(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Uh(e, n);
}
function Ex(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        s = e.memoizedState;
      s !== null && (n = s.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(R(314));
  }
  r !== null && r.delete(t), Uh(e, n);
}
var Bh;
Bh = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || De.current) Ie = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ie = !1), cx(e, t, n);
      Ie = !!(e.flags & 131072);
    }
  else (Ie = !1), Y && t.flags & 1048576 && Vp(t, Wo, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      No(e, t), (e = t.pendingProps);
      var s = jr(t, Ee.current);
      vr(t, n), (s = Uu(null, t, r, e, s, n));
      var o = Bu();
      return (
        (t.flags |= 1),
        typeof s == "object" &&
        s !== null &&
        typeof s.render == "function" &&
        s.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            $e(r) ? ((o = !0), Bo(t)) : (o = !1),
            (t.memoizedState =
              s.state !== null && s.state !== void 0 ? s.state : null),
            $u(t),
            (s.updater = _l),
            (t.stateNode = s),
            (s._reactInternals = t),
            Ea(t, r, e, n),
            (t = ka(null, t, r, !0, o, n)))
          : ((t.tag = 0), Y && o && Ru(t), Ne(null, t, s, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (No(e, t),
          (e = t.pendingProps),
          (s = r._init),
          (r = s(r._payload)),
          (t.type = r),
          (s = t.tag = Nx(r)),
          (e = ct(r, e)),
          s)
        ) {
          case 0:
            t = Na(null, t, r, e, n);
            break e;
          case 1:
            t = Pd(null, t, r, e, n);
            break e;
          case 11:
            t = _d(null, t, r, e, n);
            break e;
          case 14:
            t = Rd(null, t, r, ct(r.type, e), n);
            break e;
        }
        throw Error(R(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : ct(r, s)),
        Na(e, t, r, s, n)
      );
    case 1:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : ct(r, s)),
        Pd(e, t, r, s, n)
      );
    case 3:
      e: {
        if ((Ch(t), e === null)) throw Error(R(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (s = o.element),
          Xp(e, t),
          Ko(t, r, null, n);
        var l = t.memoizedState;
        if (((r = l.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: l.cache,
              pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
              transitions: l.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (s = Nr(Error(R(423)), t)), (t = Od(e, t, r, n, s));
            break e;
          } else if (r !== s) {
            (s = Nr(Error(R(424)), t)), (t = Od(e, t, r, n, s));
            break e;
          } else
            for (
              be = an(t.stateNode.containerInfo.firstChild),
                He = t,
                Y = !0,
                ft = null,
                n = Jp(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Sr(), r === s)) {
            t = bt(e, t, n);
            break e;
          }
          Ne(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Yp(t),
        e === null && wa(t),
        (r = t.type),
        (s = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (l = s.children),
        ma(r, s) ? (l = null) : o !== null && ma(r, o) && (t.flags |= 32),
        Eh(e, t),
        Ne(e, t, l, n),
        t.child
      );
    case 6:
      return e === null && wa(t), null;
    case 13:
      return Nh(e, t, n);
    case 4:
      return (
        Fu(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Er(t, null, r, n)) : Ne(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : ct(r, s)),
        _d(e, t, r, s, n)
      );
    case 7:
      return Ne(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ne(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ne(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (s = t.pendingProps),
          (o = t.memoizedProps),
          (l = s.value),
          J(Ho, r._currentValue),
          (r._currentValue = l),
          o !== null)
        )
          if (xt(o.value, l)) {
            if (o.children === s.children && !De.current) {
              t = bt(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var a = o.dependencies;
              if (a !== null) {
                l = o.child;
                for (var u = a.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (o.tag === 1) {
                      (u = At(-1, n & -n)), (u.tag = 2);
                      var c = o.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var d = c.pending;
                        d === null
                          ? (u.next = u)
                          : ((u.next = d.next), (d.next = u)),
                          (c.pending = u);
                      }
                    }
                    (o.lanes |= n),
                      (u = o.alternate),
                      u !== null && (u.lanes |= n),
                      ja(o.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else if (o.tag === 10) l = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((l = o.return), l === null)) throw Error(R(341));
                (l.lanes |= n),
                  (a = l.alternate),
                  a !== null && (a.lanes |= n),
                  ja(l, n, t),
                  (l = o.sibling);
              } else l = o.child;
              if (l !== null) l.return = o;
              else
                for (l = o; l !== null; ) {
                  if (l === t) {
                    l = null;
                    break;
                  }
                  if (((o = l.sibling), o !== null)) {
                    (o.return = l.return), (l = o);
                    break;
                  }
                  l = l.return;
                }
              o = l;
            }
        Ne(e, t, s.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (s = t.type),
        (r = t.pendingProps.children),
        vr(t, n),
        (s = st(s)),
        (r = r(s)),
        (t.flags |= 1),
        Ne(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (s = ct(r, t.pendingProps)),
        (s = ct(r.type, s)),
        Rd(e, t, r, s, n)
      );
    case 15:
      return jh(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : ct(r, s)),
        No(e, t),
        (t.tag = 1),
        $e(r) ? ((e = !0), Bo(t)) : (e = !1),
        vr(t, n),
        vh(t, r, s),
        Ea(t, r, s, n),
        ka(null, t, r, !0, e, n)
      );
    case 19:
      return kh(e, t, n);
    case 22:
      return Sh(e, t, n);
  }
  throw Error(R(156, t.tag));
};
function bh(e, t) {
  return mp(e, t);
}
function Cx(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function nt(e, t, n, r) {
  return new Cx(e, t, n, r);
}
function Xu(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Nx(e) {
  if (typeof e == "function") return Xu(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === yu)) return 11;
    if (e === gu) return 14;
  }
  return 2;
}
function fn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = nt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Ro(e, t, n, r, s, o) {
  var l = 2;
  if (((r = e), typeof e == "function")) Xu(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else
    e: switch (e) {
      case nr:
        return In(n.children, s, o, t);
      case mu:
        (l = 8), (s |= 8);
        break;
      case Gi:
        return (
          (e = nt(12, n, t, s | 2)), (e.elementType = Gi), (e.lanes = o), e
        );
      case Qi:
        return (e = nt(13, n, t, s)), (e.elementType = Qi), (e.lanes = o), e;
      case Ji:
        return (e = nt(19, n, t, s)), (e.elementType = Ji), (e.lanes = o), e;
      case Yf:
        return Ol(n, s, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case qf:
              l = 10;
              break e;
            case Xf:
              l = 9;
              break e;
            case yu:
              l = 11;
              break e;
            case gu:
              l = 14;
              break e;
            case qt:
              (l = 16), (r = null);
              break e;
          }
        throw Error(R(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = nt(l, n, t, s)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function In(e, t, n, r) {
  return (e = nt(7, e, r, t)), (e.lanes = n), e;
}
function Ol(e, t, n, r) {
  return (
    (e = nt(22, e, r, t)),
    (e.elementType = Yf),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Pi(e, t, n) {
  return (e = nt(6, e, null, t)), (e.lanes = n), e;
}
function Oi(e, t, n) {
  return (
    (t = nt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function kx(e, t, n, r, s) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = ci(0)),
    (this.expirationTimes = ci(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = ci(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = s),
    (this.mutableSourceEagerHydrationData = null);
}
function Yu(e, t, n, r, s, o, l, a, u) {
  return (
    (e = new kx(e, t, n, a, u)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = nt(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    $u(o),
    e
  );
}
function _x(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: tr,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Wh(e) {
  if (!e) return mn;
  e = e._reactInternals;
  e: {
    if (Vn(e) !== e || e.tag !== 1) throw Error(R(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if ($e(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(R(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if ($e(n)) return Wp(e, n, t);
  }
  return t;
}
function Hh(e, t, n, r, s, o, l, a, u) {
  return (
    (e = Yu(n, r, !0, e, s, o, l, a, u)),
    (e.context = Wh(null)),
    (n = e.current),
    (r = ke()),
    (s = dn(n)),
    (o = At(r, s)),
    (o.callback = t ?? null),
    un(n, o, s),
    (e.current.lanes = s),
    Fs(e, s, r),
    Fe(e, r),
    e
  );
}
function Tl(e, t, n, r) {
  var s = t.current,
    o = ke(),
    l = dn(s);
  return (
    (n = Wh(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = At(o, l)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = un(s, t, l)),
    e !== null && (yt(e, s, l, o), So(e, s, l)),
    l
  );
}
function el(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Ud(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Zu(e, t) {
  Ud(e, t), (e = e.alternate) && Ud(e, t);
}
function Rx() {
  return null;
}
var Vh =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function ec(e) {
  this._internalRoot = e;
}
Ll.prototype.render = ec.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(R(409));
  Tl(e, t, null, null);
};
Ll.prototype.unmount = ec.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    zn(function () {
      Tl(null, e, null, null);
    }),
      (t[Ut] = null);
  }
};
function Ll(e) {
  this._internalRoot = e;
}
Ll.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Sp();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Zt.length && t !== 0 && t < Zt[n].priority; n++);
    Zt.splice(n, 0, e), n === 0 && Cp(e);
  }
};
function tc(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Il(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Bd() {}
function Px(e, t, n, r, s) {
  if (s) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var c = el(l);
        o.call(c);
      };
    }
    var l = Hh(t, r, e, 0, null, !1, !1, "", Bd);
    return (
      (e._reactRootContainer = l),
      (e[Ut] = l.current),
      xs(e.nodeType === 8 ? e.parentNode : e),
      zn(),
      l
    );
  }
  for (; (s = e.lastChild); ) e.removeChild(s);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var c = el(u);
      a.call(c);
    };
  }
  var u = Yu(e, 0, !1, null, null, !1, !1, "", Bd);
  return (
    (e._reactRootContainer = u),
    (e[Ut] = u.current),
    xs(e.nodeType === 8 ? e.parentNode : e),
    zn(function () {
      Tl(t, u, n, r);
    }),
    u
  );
}
function Dl(e, t, n, r, s) {
  var o = n._reactRootContainer;
  if (o) {
    var l = o;
    if (typeof s == "function") {
      var a = s;
      s = function () {
        var u = el(l);
        a.call(u);
      };
    }
    Tl(t, l, e, s);
  } else l = Px(n, t, e, s, r);
  return el(l);
}
wp = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Yr(t.pendingLanes);
        n !== 0 &&
          (wu(t, n | 1), Fe(t, le()), !(W & 6) && ((kr = le() + 500), jn()));
      }
      break;
    case 13:
      zn(function () {
        var r = Bt(e, 1);
        if (r !== null) {
          var s = ke();
          yt(r, e, 1, s);
        }
      }),
        Zu(e, 1);
  }
};
ju = function (e) {
  if (e.tag === 13) {
    var t = Bt(e, 134217728);
    if (t !== null) {
      var n = ke();
      yt(t, e, 134217728, n);
    }
    Zu(e, 134217728);
  }
};
jp = function (e) {
  if (e.tag === 13) {
    var t = dn(e),
      n = Bt(e, t);
    if (n !== null) {
      var r = ke();
      yt(n, e, t, r);
    }
    Zu(e, t);
  }
};
Sp = function () {
  return H;
};
Ep = function (e, t) {
  var n = H;
  try {
    return (H = e), t();
  } finally {
    H = n;
  }
};
oa = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Yi(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var s = Cl(r);
            if (!s) throw Error(R(90));
            ep(r), Yi(r, s);
          }
        }
      }
      break;
    case "textarea":
      np(e, n);
      break;
    case "select":
      (t = n.value), t != null && hr(e, !!n.multiple, t, !1);
  }
};
up = Qu;
cp = zn;
var Ox = { usingClientEntryPoint: !1, Events: [Ms, lr, Cl, ip, ap, Qu] },
  Kr = {
    findFiberByHostInstance: Rn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Tx = {
    bundleType: Kr.bundleType,
    version: Kr.version,
    rendererPackageName: Kr.rendererPackageName,
    rendererConfig: Kr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Vt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = pp(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Kr.findFiberByHostInstance || Rx,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var po = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!po.isDisabled && po.supportsFiber)
    try {
      (wl = po.inject(Tx)), (Nt = po);
    } catch {}
}
Je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ox;
Je.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!tc(t)) throw Error(R(200));
  return _x(e, t, null, n);
};
Je.createRoot = function (e, t) {
  if (!tc(e)) throw Error(R(299));
  var n = !1,
    r = "",
    s = Vh;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (s = t.onRecoverableError)),
    (t = Yu(e, 1, !1, null, null, n, !1, r, s)),
    (e[Ut] = t.current),
    xs(e.nodeType === 8 ? e.parentNode : e),
    new ec(t)
  );
};
Je.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(R(188))
      : ((e = Object.keys(e).join(",")), Error(R(268, e)));
  return (e = pp(t)), (e = e === null ? null : e.stateNode), e;
};
Je.flushSync = function (e) {
  return zn(e);
};
Je.hydrate = function (e, t, n) {
  if (!Il(t)) throw Error(R(200));
  return Dl(null, e, t, !0, n);
};
Je.hydrateRoot = function (e, t, n) {
  if (!tc(e)) throw Error(R(405));
  var r = (n != null && n.hydratedSources) || null,
    s = !1,
    o = "",
    l = Vh;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (s = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (t = Hh(t, null, e, 1, n ?? null, s, !1, o, l)),
    (e[Ut] = t.current),
    xs(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (s = n._getVersion),
        (s = s(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, s])
          : t.mutableSourceEagerHydrationData.push(n, s);
  return new Ll(t);
};
Je.render = function (e, t, n) {
  if (!Il(t)) throw Error(R(200));
  return Dl(null, e, t, !1, n);
};
Je.unmountComponentAtNode = function (e) {
  if (!Il(e)) throw Error(R(40));
  return e._reactRootContainer
    ? (zn(function () {
        Dl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Ut] = null);
        });
      }),
      !0)
    : !1;
};
Je.unstable_batchedUpdates = Qu;
Je.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Il(n)) throw Error(R(200));
  if (e == null || e._reactInternals === void 0) throw Error(R(38));
  return Dl(e, t, n, !1, r);
};
Je.version = "18.3.1-next-f1338f8080-20240426";
function Kh() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Kh);
    } catch (e) {
      console.error(e);
    }
}
Kh(), (Kf.exports = Je);
var Gh = Kf.exports;
const pr = vl(Gh);
var bd = Gh;
(Vi.createRoot = bd.createRoot), (Vi.hydrateRoot = bd.hydrateRoot);
var Qh = { exports: {} },
  Jh = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Us = y;
function Lx(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ix = typeof Object.is == "function" ? Object.is : Lx,
  Dx = Us.useSyncExternalStore,
  $x = Us.useRef,
  Fx = Us.useEffect,
  Ax = Us.useMemo,
  Mx = Us.useDebugValue;
Jh.useSyncExternalStoreWithSelector = function (e, t, n, r, s) {
  var o = $x(null);
  if (o.current === null) {
    var l = { hasValue: !1, value: null };
    o.current = l;
  } else l = o.current;
  o = Ax(
    function () {
      function u(v) {
        if (!c) {
          if (((c = !0), (d = v), (v = r(v)), s !== void 0 && l.hasValue)) {
            var h = l.value;
            if (s(h, v)) return (f = h);
          }
          return (f = v);
        }
        if (((h = f), Ix(d, v))) return h;
        var j = r(v);
        return s !== void 0 && s(h, j) ? h : ((d = v), (f = j));
      }
      var c = !1,
        d,
        f,
        p = n === void 0 ? null : n;
      return [
        function () {
          return u(t());
        },
        p === null
          ? void 0
          : function () {
              return u(p());
            },
      ];
    },
    [t, n, r, s]
  );
  var a = Dx(e, o[0], o[1]);
  return (
    Fx(
      function () {
        (l.hasValue = !0), (l.value = a);
      },
      [a]
    ),
    Mx(a),
    a
  );
};
Qh.exports = Jh;
var zx = Qh.exports,
  We = "default" in Hi ? tt : Hi,
  Wd = Symbol.for("react-redux-context"),
  Hd = typeof globalThis < "u" ? globalThis : {};
function Ux() {
  if (!We.createContext) return {};
  const e = Hd[Wd] ?? (Hd[Wd] = new Map());
  let t = e.get(We.createContext);
  return t || ((t = We.createContext(null)), e.set(We.createContext, t)), t;
}
var yn = Ux(),
  Bx = () => {
    throw new Error("uSES not initialized!");
  };
function nc(e = yn) {
  return function () {
    return We.useContext(e);
  };
}
var qh = nc(),
  Xh = Bx,
  bx = (e) => {
    Xh = e;
  },
  Wx = (e, t) => e === t;
function Hx(e = yn) {
  const t = e === yn ? qh : nc(e),
    n = (r, s = {}) => {
      const { equalityFn: o = Wx, devModeChecks: l = {} } =
          typeof s == "function" ? { equalityFn: s } : s,
        {
          store: a,
          subscription: u,
          getServerState: c,
          stabilityCheck: d,
          identityFunctionCheck: f,
        } = t();
      We.useRef(!0);
      const p = We.useCallback(
          {
            [r.name](h) {
              return r(h);
            },
          }[r.name],
          [r, d, l.stabilityCheck]
        ),
        v = Xh(u.addNestedSub, a.getState, c || a.getState, p, o);
      return We.useDebugValue(v), v;
    };
  return Object.assign(n, { withTypes: () => n }), n;
}
var V = Hx();
function Vx(e) {
  e();
}
function Kx() {
  let e = null,
    t = null;
  return {
    clear() {
      (e = null), (t = null);
    },
    notify() {
      Vx(() => {
        let n = e;
        for (; n; ) n.callback(), (n = n.next);
      });
    },
    get() {
      const n = [];
      let r = e;
      for (; r; ) n.push(r), (r = r.next);
      return n;
    },
    subscribe(n) {
      let r = !0;
      const s = (t = { callback: n, next: null, prev: t });
      return (
        s.prev ? (s.prev.next = s) : (e = s),
        function () {
          !r ||
            e === null ||
            ((r = !1),
            s.next ? (s.next.prev = s.prev) : (t = s.prev),
            s.prev ? (s.prev.next = s.next) : (e = s.next));
        }
      );
    },
  };
}
var Vd = { notify() {}, get: () => [] };
function Gx(e, t) {
  let n,
    r = Vd,
    s = 0,
    o = !1;
  function l(j) {
    d();
    const w = r.subscribe(j);
    let x = !1;
    return () => {
      x || ((x = !0), w(), f());
    };
  }
  function a() {
    r.notify();
  }
  function u() {
    h.onStateChange && h.onStateChange();
  }
  function c() {
    return o;
  }
  function d() {
    s++, n || ((n = e.subscribe(u)), (r = Kx()));
  }
  function f() {
    s--, n && s === 0 && (n(), (n = void 0), r.clear(), (r = Vd));
  }
  function p() {
    o || ((o = !0), d());
  }
  function v() {
    o && ((o = !1), f());
  }
  const h = {
    addNestedSub: l,
    notifyNestedSubs: a,
    handleChangeWrapper: u,
    isSubscribed: c,
    trySubscribe: p,
    tryUnsubscribe: v,
    getListeners: () => r,
  };
  return h;
}
var Qx =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Jx = typeof navigator < "u" && navigator.product === "ReactNative",
  qx = Qx || Jx ? We.useLayoutEffect : We.useEffect;
function Xx({
  store: e,
  context: t,
  children: n,
  serverState: r,
  stabilityCheck: s = "once",
  identityFunctionCheck: o = "once",
}) {
  const l = We.useMemo(() => {
      const c = Gx(e);
      return {
        store: e,
        subscription: c,
        getServerState: r ? () => r : void 0,
        stabilityCheck: s,
        identityFunctionCheck: o,
      };
    }, [e, r, s, o]),
    a = We.useMemo(() => e.getState(), [e]);
  qx(() => {
    const { subscription: c } = l;
    return (
      (c.onStateChange = c.notifyNestedSubs),
      c.trySubscribe(),
      a !== e.getState() && c.notifyNestedSubs(),
      () => {
        c.tryUnsubscribe(), (c.onStateChange = void 0);
      }
    );
  }, [l, a]);
  const u = t || yn;
  return We.createElement(u.Provider, { value: l }, n);
}
var Yx = Xx;
function Yh(e = yn) {
  const t = e === yn ? qh : nc(e),
    n = () => {
      const { store: r } = t();
      return r;
    };
  return Object.assign(n, { withTypes: () => n }), n;
}
var Zx = Yh();
function e0(e = yn) {
  const t = e === yn ? Zx : Yh(e),
    n = () => t().dispatch;
  return Object.assign(n, { withTypes: () => n }), n;
}
var Ce = e0();
bx(zx.useSyncExternalStoreWithSelector);
/**
 * @remix-run/router v1.19.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Rs() {
  return (
    (Rs = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Rs.apply(this, arguments)
  );
}
var rn;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(rn || (rn = {}));
const Kd = "popstate";
function t0(e) {
  e === void 0 && (e = {});
  function t(r, s) {
    let { pathname: o, search: l, hash: a } = r.location;
    return Ma(
      "",
      { pathname: o, search: l, hash: a },
      (s.state && s.state.usr) || null,
      (s.state && s.state.key) || "default"
    );
  }
  function n(r, s) {
    return typeof s == "string" ? s : tl(s);
  }
  return r0(t, n, null, e);
}
function ne(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Zh(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function n0() {
  return Math.random().toString(36).substr(2, 8);
}
function Gd(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Ma(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Rs(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Lr(t) : t,
      { state: n, key: (t && t.key) || r || n0() }
    )
  );
}
function tl(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Lr(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function r0(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: s = document.defaultView, v5Compat: o = !1 } = r,
    l = s.history,
    a = rn.Pop,
    u = null,
    c = d();
  c == null && ((c = 0), l.replaceState(Rs({}, l.state, { idx: c }), ""));
  function d() {
    return (l.state || { idx: null }).idx;
  }
  function f() {
    a = rn.Pop;
    let w = d(),
      x = w == null ? null : w - c;
    (c = w), u && u({ action: a, location: j.location, delta: x });
  }
  function p(w, x) {
    a = rn.Push;
    let g = Ma(j.location, w, x);
    c = d() + 1;
    let m = Gd(g, c),
      S = j.createHref(g);
    try {
      l.pushState(m, "", S);
    } catch (N) {
      if (N instanceof DOMException && N.name === "DataCloneError") throw N;
      s.location.assign(S);
    }
    o && u && u({ action: a, location: j.location, delta: 1 });
  }
  function v(w, x) {
    a = rn.Replace;
    let g = Ma(j.location, w, x);
    c = d();
    let m = Gd(g, c),
      S = j.createHref(g);
    l.replaceState(m, "", S),
      o && u && u({ action: a, location: j.location, delta: 0 });
  }
  function h(w) {
    let x = s.location.origin !== "null" ? s.location.origin : s.location.href,
      g = typeof w == "string" ? w : tl(w);
    return (
      (g = g.replace(/ $/, "%20")),
      ne(
        x,
        "No window.location.(origin|href) available to create URL for href: " +
          g
      ),
      new URL(g, x)
    );
  }
  let j = {
    get action() {
      return a;
    },
    get location() {
      return e(s, l);
    },
    listen(w) {
      if (u) throw new Error("A history only accepts one active listener");
      return (
        s.addEventListener(Kd, f),
        (u = w),
        () => {
          s.removeEventListener(Kd, f), (u = null);
        }
      );
    },
    createHref(w) {
      return t(s, w);
    },
    createURL: h,
    encodeLocation(w) {
      let x = h(w);
      return { pathname: x.pathname, search: x.search, hash: x.hash };
    },
    push: p,
    replace: v,
    go(w) {
      return l.go(w);
    },
  };
  return j;
}
var Qd;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(Qd || (Qd = {}));
function s0(e, t, n) {
  return n === void 0 && (n = "/"), o0(e, t, n, !1);
}
function o0(e, t, n, r) {
  let s = typeof t == "string" ? Lr(t) : t,
    o = _r(s.pathname || "/", n);
  if (o == null) return null;
  let l = em(e);
  l0(l);
  let a = null;
  for (let u = 0; a == null && u < l.length; ++u) {
    let c = g0(o);
    a = m0(l[u], c, r);
  }
  return a;
}
function em(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let s = (o, l, a) => {
    let u = {
      relativePath: a === void 0 ? o.path || "" : a,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: l,
      route: o,
    };
    u.relativePath.startsWith("/") &&
      (ne(
        u.relativePath.startsWith(r),
        'Absolute route path "' +
          u.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (u.relativePath = u.relativePath.slice(r.length)));
    let c = pn([r, u.relativePath]),
      d = n.concat(u);
    o.children &&
      o.children.length > 0 &&
      (ne(
        o.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + c + '".')
      ),
      em(o.children, t, d, c)),
      !(o.path == null && !o.index) &&
        t.push({ path: c, score: p0(c, o.index), routesMeta: d });
  };
  return (
    e.forEach((o, l) => {
      var a;
      if (o.path === "" || !((a = o.path) != null && a.includes("?"))) s(o, l);
      else for (let u of tm(o.path)) s(o, l, u);
    }),
    t
  );
}
function tm(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    s = n.endsWith("?"),
    o = n.replace(/\?$/, "");
  if (r.length === 0) return s ? [o, ""] : [o];
  let l = tm(r.join("/")),
    a = [];
  return (
    a.push(...l.map((u) => (u === "" ? o : [o, u].join("/")))),
    s && a.push(...l),
    a.map((u) => (e.startsWith("/") && u === "" ? "/" : u))
  );
}
function l0(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : h0(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const i0 = /^:[\w-]+$/,
  a0 = 3,
  u0 = 2,
  c0 = 1,
  d0 = 10,
  f0 = -2,
  Jd = (e) => e === "*";
function p0(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Jd) && (r += f0),
    t && (r += u0),
    n
      .filter((s) => !Jd(s))
      .reduce((s, o) => s + (i0.test(o) ? a0 : o === "" ? c0 : d0), r)
  );
}
function h0(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, s) => r === t[s])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function m0(e, t, n) {
  let { routesMeta: r } = e,
    s = {},
    o = "/",
    l = [];
  for (let a = 0; a < r.length; ++a) {
    let u = r[a],
      c = a === r.length - 1,
      d = o === "/" ? t : t.slice(o.length) || "/",
      f = nl(
        { path: u.relativePath, caseSensitive: u.caseSensitive, end: c },
        d
      ),
      p = u.route;
    if (
      (!f &&
        c &&
        n &&
        !r[r.length - 1].route.index &&
        (f = nl(
          { path: u.relativePath, caseSensitive: u.caseSensitive, end: !1 },
          d
        )),
      !f)
    )
      return null;
    Object.assign(s, f.params),
      l.push({
        params: s,
        pathname: pn([o, f.pathname]),
        pathnameBase: j0(pn([o, f.pathnameBase])),
        route: p,
      }),
      f.pathnameBase !== "/" && (o = pn([o, f.pathnameBase]));
  }
  return l;
}
function nl(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = y0(e.path, e.caseSensitive, e.end),
    s = t.match(n);
  if (!s) return null;
  let o = s[0],
    l = o.replace(/(.)\/+$/, "$1"),
    a = s.slice(1);
  return {
    params: r.reduce((c, d, f) => {
      let { paramName: p, isOptional: v } = d;
      if (p === "*") {
        let j = a[f] || "";
        l = o.slice(0, o.length - j.length).replace(/(.)\/+$/, "$1");
      }
      const h = a[f];
      return (
        v && !h ? (c[p] = void 0) : (c[p] = (h || "").replace(/%2F/g, "/")), c
      );
    }, {}),
    pathname: o,
    pathnameBase: l,
    pattern: e,
  };
}
function y0(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Zh(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    s =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (l, a, u) => (
            r.push({ paramName: a, isOptional: u != null }),
            u ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (s += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (s += "\\/*$")
      : e !== "" && e !== "/" && (s += "(?:(?=\\/|$))"),
    [new RegExp(s, t ? void 0 : "i"), r]
  );
}
function g0(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      Zh(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function _r(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function v0(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: s = "",
  } = typeof e == "string" ? Lr(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : x0(n, t)) : t,
    search: S0(r),
    hash: E0(s),
  };
}
function x0(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((s) => {
      s === ".." ? n.length > 1 && n.pop() : s !== "." && n.push(s);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function Ti(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function w0(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function rc(e, t) {
  let n = w0(e);
  return t
    ? n.map((r, s) => (s === n.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function sc(e, t, n, r) {
  r === void 0 && (r = !1);
  let s;
  typeof e == "string"
    ? (s = Lr(e))
    : ((s = Rs({}, e)),
      ne(
        !s.pathname || !s.pathname.includes("?"),
        Ti("?", "pathname", "search", s)
      ),
      ne(
        !s.pathname || !s.pathname.includes("#"),
        Ti("#", "pathname", "hash", s)
      ),
      ne(!s.search || !s.search.includes("#"), Ti("#", "search", "hash", s)));
  let o = e === "" || s.pathname === "",
    l = o ? "/" : s.pathname,
    a;
  if (l == null) a = n;
  else {
    let f = t.length - 1;
    if (!r && l.startsWith("..")) {
      let p = l.split("/");
      for (; p[0] === ".."; ) p.shift(), (f -= 1);
      s.pathname = p.join("/");
    }
    a = f >= 0 ? t[f] : "/";
  }
  let u = v0(s, a),
    c = l && l !== "/" && l.endsWith("/"),
    d = (o || l === ".") && n.endsWith("/");
  return !u.pathname.endsWith("/") && (c || d) && (u.pathname += "/"), u;
}
const pn = (e) => e.join("/").replace(/\/\/+/g, "/"),
  j0 = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  S0 = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  E0 = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function C0(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const nm = ["post", "put", "patch", "delete"];
new Set(nm);
const N0 = ["get", ...nm];
new Set(N0);
/**
 * React Router v6.26.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ps() {
  return (
    (Ps = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ps.apply(this, arguments)
  );
}
const $l = y.createContext(null),
  rm = y.createContext(null),
  Kt = y.createContext(null),
  Fl = y.createContext(null),
  _t = y.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  sm = y.createContext(null);
function k0(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  Ir() || ne(!1);
  let { basename: r, navigator: s } = y.useContext(Kt),
    { hash: o, pathname: l, search: a } = Al(e, { relative: n }),
    u = l;
  return (
    r !== "/" && (u = l === "/" ? r : pn([r, l])),
    s.createHref({ pathname: u, search: a, hash: o })
  );
}
function Ir() {
  return y.useContext(Fl) != null;
}
function Rt() {
  return Ir() || ne(!1), y.useContext(Fl).location;
}
function om(e) {
  y.useContext(Kt).static || y.useLayoutEffect(e);
}
function Pt() {
  let { isDataRoute: e } = y.useContext(_t);
  return e ? b0() : _0();
}
function _0() {
  Ir() || ne(!1);
  let e = y.useContext($l),
    { basename: t, future: n, navigator: r } = y.useContext(Kt),
    { matches: s } = y.useContext(_t),
    { pathname: o } = Rt(),
    l = JSON.stringify(rc(s, n.v7_relativeSplatPath)),
    a = y.useRef(!1);
  return (
    om(() => {
      a.current = !0;
    }),
    y.useCallback(
      function (c, d) {
        if ((d === void 0 && (d = {}), !a.current)) return;
        if (typeof c == "number") {
          r.go(c);
          return;
        }
        let f = sc(c, JSON.parse(l), o, d.relative === "path");
        e == null &&
          t !== "/" &&
          (f.pathname = f.pathname === "/" ? t : pn([t, f.pathname])),
          (d.replace ? r.replace : r.push)(f, d.state, d);
      },
      [t, r, l, o, e]
    )
  );
}
const R0 = y.createContext(null);
function P0(e) {
  let t = y.useContext(_t).outlet;
  return t && y.createElement(R0.Provider, { value: e }, t);
}
function O0() {
  let { matches: e } = y.useContext(_t),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function Al(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = y.useContext(Kt),
    { matches: s } = y.useContext(_t),
    { pathname: o } = Rt(),
    l = JSON.stringify(rc(s, r.v7_relativeSplatPath));
  return y.useMemo(() => sc(e, JSON.parse(l), o, n === "path"), [e, l, o, n]);
}
function T0(e, t) {
  return L0(e, t);
}
function L0(e, t, n, r) {
  Ir() || ne(!1);
  let { navigator: s } = y.useContext(Kt),
    { matches: o } = y.useContext(_t),
    l = o[o.length - 1],
    a = l ? l.params : {};
  l && l.pathname;
  let u = l ? l.pathnameBase : "/";
  l && l.route;
  let c = Rt(),
    d;
  if (t) {
    var f;
    let w = typeof t == "string" ? Lr(t) : t;
    u === "/" || ((f = w.pathname) != null && f.startsWith(u)) || ne(!1),
      (d = w);
  } else d = c;
  let p = d.pathname || "/",
    v = p;
  if (u !== "/") {
    let w = u.replace(/^\//, "").split("/");
    v = "/" + p.replace(/^\//, "").split("/").slice(w.length).join("/");
  }
  let h = s0(e, { pathname: v }),
    j = A0(
      h &&
        h.map((w) =>
          Object.assign({}, w, {
            params: Object.assign({}, a, w.params),
            pathname: pn([
              u,
              s.encodeLocation
                ? s.encodeLocation(w.pathname).pathname
                : w.pathname,
            ]),
            pathnameBase:
              w.pathnameBase === "/"
                ? u
                : pn([
                    u,
                    s.encodeLocation
                      ? s.encodeLocation(w.pathnameBase).pathname
                      : w.pathnameBase,
                  ]),
          })
        ),
      o,
      n,
      r
    );
  return t && j
    ? y.createElement(
        Fl.Provider,
        {
          value: {
            location: Ps(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              d
            ),
            navigationType: rn.Pop,
          },
        },
        j
      )
    : j;
}
function I0() {
  let e = B0(),
    t = C0(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    s = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return y.createElement(
    y.Fragment,
    null,
    y.createElement("h2", null, "Unexpected Application Error!"),
    y.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? y.createElement("pre", { style: s }, n) : null,
    null
  );
}
const D0 = y.createElement(I0, null);
class $0 extends y.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? y.createElement(
          _t.Provider,
          { value: this.props.routeContext },
          y.createElement(sm.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function F0(e) {
  let { routeContext: t, match: n, children: r } = e,
    s = y.useContext($l);
  return (
    s &&
      s.static &&
      s.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (s.staticContext._deepestRenderedBoundaryId = n.route.id),
    y.createElement(_t.Provider, { value: t }, r)
  );
}
function A0(e, t, n, r) {
  var s;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var o;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (o = r) != null &&
      o.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let l = e,
    a = (s = n) == null ? void 0 : s.errors;
  if (a != null) {
    let d = l.findIndex(
      (f) => f.route.id && (a == null ? void 0 : a[f.route.id]) !== void 0
    );
    d >= 0 || ne(!1), (l = l.slice(0, Math.min(l.length, d + 1)));
  }
  let u = !1,
    c = -1;
  if (n && r && r.v7_partialHydration)
    for (let d = 0; d < l.length; d++) {
      let f = l[d];
      if (
        ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (c = d),
        f.route.id)
      ) {
        let { loaderData: p, errors: v } = n,
          h =
            f.route.loader &&
            p[f.route.id] === void 0 &&
            (!v || v[f.route.id] === void 0);
        if (f.route.lazy || h) {
          (u = !0), c >= 0 ? (l = l.slice(0, c + 1)) : (l = [l[0]]);
          break;
        }
      }
    }
  return l.reduceRight((d, f, p) => {
    let v,
      h = !1,
      j = null,
      w = null;
    n &&
      ((v = a && f.route.id ? a[f.route.id] : void 0),
      (j = f.route.errorElement || D0),
      u &&
        (c < 0 && p === 0
          ? ((h = !0), (w = null))
          : c === p &&
            ((h = !0), (w = f.route.hydrateFallbackElement || null))));
    let x = t.concat(l.slice(0, p + 1)),
      g = () => {
        let m;
        return (
          v
            ? (m = j)
            : h
            ? (m = w)
            : f.route.Component
            ? (m = y.createElement(f.route.Component, null))
            : f.route.element
            ? (m = f.route.element)
            : (m = d),
          y.createElement(F0, {
            match: f,
            routeContext: { outlet: d, matches: x, isDataRoute: n != null },
            children: m,
          })
        );
      };
    return n && (f.route.ErrorBoundary || f.route.errorElement || p === 0)
      ? y.createElement($0, {
          location: n.location,
          revalidation: n.revalidation,
          component: j,
          error: v,
          children: g(),
          routeContext: { outlet: null, matches: x, isDataRoute: !0 },
        })
      : g();
  }, null);
}
var lm = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(lm || {}),
  rl = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(rl || {});
function M0(e) {
  let t = y.useContext($l);
  return t || ne(!1), t;
}
function z0(e) {
  let t = y.useContext(rm);
  return t || ne(!1), t;
}
function U0(e) {
  let t = y.useContext(_t);
  return t || ne(!1), t;
}
function im(e) {
  let t = U0(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || ne(!1), n.route.id;
}
function B0() {
  var e;
  let t = y.useContext(sm),
    n = z0(rl.UseRouteError),
    r = im(rl.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function b0() {
  let { router: e } = M0(lm.UseNavigateStable),
    t = im(rl.UseNavigateStable),
    n = y.useRef(!1);
  return (
    om(() => {
      n.current = !0;
    }),
    y.useCallback(
      function (s, o) {
        o === void 0 && (o = {}),
          n.current &&
            (typeof s == "number"
              ? e.navigate(s)
              : e.navigate(s, Ps({ fromRouteId: t }, o)));
      },
      [e, t]
    )
  );
}
function fe(e) {
  let { to: t, replace: n, state: r, relative: s } = e;
  Ir() || ne(!1);
  let { future: o, static: l } = y.useContext(Kt),
    { matches: a } = y.useContext(_t),
    { pathname: u } = Rt(),
    c = Pt(),
    d = sc(t, rc(a, o.v7_relativeSplatPath), u, s === "path"),
    f = JSON.stringify(d);
  return (
    y.useEffect(
      () => c(JSON.parse(f), { replace: n, state: r, relative: s }),
      [c, f, s, n, r]
    ),
    null
  );
}
function am(e) {
  return P0(e.context);
}
function ue(e) {
  ne(!1);
}
function W0(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: s = rn.Pop,
    navigator: o,
    static: l = !1,
    future: a,
  } = e;
  Ir() && ne(!1);
  let u = t.replace(/^\/*/, "/"),
    c = y.useMemo(
      () => ({
        basename: u,
        navigator: o,
        static: l,
        future: Ps({ v7_relativeSplatPath: !1 }, a),
      }),
      [u, a, o, l]
    );
  typeof r == "string" && (r = Lr(r));
  let {
      pathname: d = "/",
      search: f = "",
      hash: p = "",
      state: v = null,
      key: h = "default",
    } = r,
    j = y.useMemo(() => {
      let w = _r(d, u);
      return w == null
        ? null
        : {
            location: { pathname: w, search: f, hash: p, state: v, key: h },
            navigationType: s,
          };
    }, [u, d, f, p, v, h, s]);
  return j == null
    ? null
    : y.createElement(
        Kt.Provider,
        { value: c },
        y.createElement(Fl.Provider, { children: n, value: j })
      );
}
function H0(e) {
  let { children: t, location: n } = e;
  return T0(za(t), n);
}
new Promise(() => {});
function za(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    y.Children.forEach(e, (r, s) => {
      if (!y.isValidElement(r)) return;
      let o = [...t, s];
      if (r.type === y.Fragment) {
        n.push.apply(n, za(r.props.children, o));
        return;
      }
      r.type !== ue && ne(!1), !r.props.index || !r.props.children || ne(!1);
      let l = {
        id: r.props.id || o.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (l.children = za(r.props.children, o)), n.push(l);
    }),
    n
  );
}
/**
 * React Router DOM v6.26.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function sl() {
  return (
    (sl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    sl.apply(this, arguments)
  );
}
function um(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    s,
    o;
  for (o = 0; o < r.length; o++)
    (s = r[o]), !(t.indexOf(s) >= 0) && (n[s] = e[s]);
  return n;
}
function V0(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function K0(e, t) {
  return e.button === 0 && (!t || t === "_self") && !V0(e);
}
const G0 = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "unstable_viewTransition",
  ],
  Q0 = [
    "aria-current",
    "caseSensitive",
    "className",
    "end",
    "style",
    "to",
    "unstable_viewTransition",
    "children",
  ],
  J0 = "6";
try {
  window.__reactRouterVersion = J0;
} catch {}
const q0 = y.createContext({ isTransitioning: !1 }),
  X0 = "startTransition",
  qd = Hi[X0];
function Y0(e) {
  let { basename: t, children: n, future: r, window: s } = e,
    o = y.useRef();
  o.current == null && (o.current = t0({ window: s, v5Compat: !0 }));
  let l = o.current,
    [a, u] = y.useState({ action: l.action, location: l.location }),
    { v7_startTransition: c } = r || {},
    d = y.useCallback(
      (f) => {
        c && qd ? qd(() => u(f)) : u(f);
      },
      [u, c]
    );
  return (
    y.useLayoutEffect(() => l.listen(d), [l, d]),
    y.createElement(W0, {
      basename: t,
      children: n,
      location: a.location,
      navigationType: a.action,
      navigator: l,
      future: r,
    })
  );
}
const Z0 =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  e1 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Bs = y.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: s,
        reloadDocument: o,
        replace: l,
        state: a,
        target: u,
        to: c,
        preventScrollReset: d,
        unstable_viewTransition: f,
      } = t,
      p = um(t, G0),
      { basename: v } = y.useContext(Kt),
      h,
      j = !1;
    if (typeof c == "string" && e1.test(c) && ((h = c), Z0))
      try {
        let m = new URL(window.location.href),
          S = c.startsWith("//") ? new URL(m.protocol + c) : new URL(c),
          N = _r(S.pathname, v);
        S.origin === m.origin && N != null
          ? (c = N + S.search + S.hash)
          : (j = !0);
      } catch {}
    let w = k0(c, { relative: s }),
      x = n1(c, {
        replace: l,
        state: a,
        target: u,
        preventScrollReset: d,
        relative: s,
        unstable_viewTransition: f,
      });
    function g(m) {
      r && r(m), m.defaultPrevented || x(m);
    }
    return y.createElement(
      "a",
      sl({}, p, { href: h || w, onClick: j || o ? r : g, ref: n, target: u })
    );
  }),
  It = y.forwardRef(function (t, n) {
    let {
        "aria-current": r = "page",
        caseSensitive: s = !1,
        className: o = "",
        end: l = !1,
        style: a,
        to: u,
        unstable_viewTransition: c,
        children: d,
      } = t,
      f = um(t, Q0),
      p = Al(u, { relative: f.relative }),
      v = Rt(),
      h = y.useContext(rm),
      { navigator: j, basename: w } = y.useContext(Kt),
      x = h != null && r1(p) && c === !0,
      g = j.encodeLocation ? j.encodeLocation(p).pathname : p.pathname,
      m = v.pathname,
      S =
        h && h.navigation && h.navigation.location
          ? h.navigation.location.pathname
          : null;
    s ||
      ((m = m.toLowerCase()),
      (S = S ? S.toLowerCase() : null),
      (g = g.toLowerCase())),
      S && w && (S = _r(S, w) || S);
    const N = g !== "/" && g.endsWith("/") ? g.length - 1 : g.length;
    let C = m === g || (!l && m.startsWith(g) && m.charAt(N) === "/"),
      k =
        S != null &&
        (S === g || (!l && S.startsWith(g) && S.charAt(g.length) === "/")),
      P = { isActive: C, isPending: k, isTransitioning: x },
      b = C ? r : void 0,
      D;
    typeof o == "function"
      ? (D = o(P))
      : (D = [
          o,
          C ? "active" : null,
          k ? "pending" : null,
          x ? "transitioning" : null,
        ]
          .filter(Boolean)
          .join(" "));
    let ae = typeof a == "function" ? a(P) : a;
    return y.createElement(
      Bs,
      sl({}, f, {
        "aria-current": b,
        className: D,
        ref: n,
        style: ae,
        to: u,
        unstable_viewTransition: c,
      }),
      typeof d == "function" ? d(P) : d
    );
  });
var Ua;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(Ua || (Ua = {}));
var Xd;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Xd || (Xd = {}));
function t1(e) {
  let t = y.useContext($l);
  return t || ne(!1), t;
}
function n1(e, t) {
  let {
      target: n,
      replace: r,
      state: s,
      preventScrollReset: o,
      relative: l,
      unstable_viewTransition: a,
    } = t === void 0 ? {} : t,
    u = Pt(),
    c = Rt(),
    d = Al(e, { relative: l });
  return y.useCallback(
    (f) => {
      if (K0(f, n)) {
        f.preventDefault();
        let p = r !== void 0 ? r : tl(c) === tl(d);
        u(e, {
          replace: p,
          state: s,
          preventScrollReset: o,
          relative: l,
          unstable_viewTransition: a,
        });
      }
    },
    [c, u, d, r, s, n, e, o, l, a]
  );
}
function r1(e, t) {
  t === void 0 && (t = {});
  let n = y.useContext(q0);
  n == null && ne(!1);
  let { basename: r } = t1(Ua.useViewTransitionState),
    s = Al(e, { relative: t.relative });
  if (!n.isTransitioning) return !1;
  let o = _r(n.currentLocation.pathname, r) || n.currentLocation.pathname,
    l = _r(n.nextLocation.pathname, r) || n.nextLocation.pathname;
  return nl(s.pathname, l) != null || nl(s.pathname, o) != null;
}
var cm = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (function (e) {
  (function () {
    var t = {}.hasOwnProperty;
    function n() {
      for (var o = "", l = 0; l < arguments.length; l++) {
        var a = arguments[l];
        a && (o = s(o, r(a)));
      }
      return o;
    }
    function r(o) {
      if (typeof o == "string" || typeof o == "number") return o;
      if (typeof o != "object") return "";
      if (Array.isArray(o)) return n.apply(null, o);
      if (
        o.toString !== Object.prototype.toString &&
        !o.toString.toString().includes("[native code]")
      )
        return o.toString();
      var l = "";
      for (var a in o) t.call(o, a) && o[a] && (l = s(l, a));
      return l;
    }
    function s(o, l) {
      return l ? (o ? o + " " + l : o + l) : o;
    }
    e.exports ? ((n.default = n), (e.exports = n)) : (window.classNames = n);
  })();
})(cm);
var s1 = cm.exports;
const $ = vl(s1);
function Ba() {
  return (
    (Ba = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ba.apply(null, arguments)
  );
}
function dm(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.includes(r)) continue;
      n[r] = e[r];
    }
  return n;
}
function Yd(e) {
  return "default" + e.charAt(0).toUpperCase() + e.substr(1);
}
function o1(e) {
  var t = l1(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
function l1(e, t) {
  if (typeof e != "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function i1(e, t, n) {
  var r = y.useRef(e !== void 0),
    s = y.useState(t),
    o = s[0],
    l = s[1],
    a = e !== void 0,
    u = r.current;
  return (
    (r.current = a),
    !a && u && o !== t && l(t),
    [
      a ? e : o,
      y.useCallback(
        function (c) {
          for (
            var d = arguments.length, f = new Array(d > 1 ? d - 1 : 0), p = 1;
            p < d;
            p++
          )
            f[p - 1] = arguments[p];
          n && n.apply(void 0, [c].concat(f)), l(c);
        },
        [n]
      ),
    ]
  );
}
function Ml(e, t) {
  return Object.keys(t).reduce(function (n, r) {
    var s,
      o = n,
      l = o[Yd(r)],
      a = o[r],
      u = dm(o, [Yd(r), r].map(o1)),
      c = t[r],
      d = i1(a, l, e[c]),
      f = d[0],
      p = d[1];
    return Ba({}, u, ((s = {}), (s[r] = f), (s[c] = p), s));
  }, e);
}
function ba(e, t) {
  return (
    (ba = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, r) {
          return (n.__proto__ = r), n;
        }),
    ba(e, t)
  );
}
function a1(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    ba(e, t);
}
const u1 = ["xxl", "xl", "lg", "md", "sm", "xs"],
  c1 = "xs",
  oc = y.createContext({ prefixes: {}, breakpoints: u1, minBreakpoint: c1 });
function U(e, t) {
  const { prefixes: n } = y.useContext(oc);
  return e || n[t] || t;
}
function fm() {
  const { breakpoints: e } = y.useContext(oc);
  return e;
}
function pm() {
  const { minBreakpoint: e } = y.useContext(oc);
  return e;
}
function lc(e) {
  return (e && e.ownerDocument) || document;
}
function d1(e) {
  var t = lc(e);
  return (t && t.defaultView) || window;
}
function f1(e, t) {
  return d1(e).getComputedStyle(e, t);
}
var p1 = /([A-Z])/g;
function h1(e) {
  return e.replace(p1, "-$1").toLowerCase();
}
var m1 = /^ms-/;
function ho(e) {
  return h1(e).replace(m1, "-ms-");
}
var y1 =
  /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function g1(e) {
  return !!(e && y1.test(e));
}
function Mt(e, t) {
  var n = "",
    r = "";
  if (typeof t == "string")
    return e.style.getPropertyValue(ho(t)) || f1(e).getPropertyValue(ho(t));
  Object.keys(t).forEach(function (s) {
    var o = t[s];
    !o && o !== 0
      ? e.style.removeProperty(ho(s))
      : g1(s)
      ? (r += s + "(" + o + ") ")
      : (n += ho(s) + ": " + o + ";");
  }),
    r && (n += "transform: " + r + ";"),
    (e.style.cssText += ";" + n);
}
var hm = { exports: {} },
  v1 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  x1 = v1,
  w1 = x1;
function mm() {}
function ym() {}
ym.resetWarningCache = mm;
var j1 = function () {
  function e(r, s, o, l, a, u) {
    if (u !== w1) {
      var c = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw ((c.name = "Invariant Violation"), c);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: ym,
    resetWarningCache: mm,
  };
  return (n.PropTypes = n), n;
};
hm.exports = j1();
var S1 = hm.exports;
const Te = vl(S1),
  Zd = { disabled: !1 },
  gm = tt.createContext(null);
var E1 = function (t) {
    return t.scrollTop;
  },
  es = "unmounted",
  Yt = "exited",
  pt = "entering",
  Dt = "entered",
  Os = "exiting",
  Gt = (function (e) {
    a1(t, e);
    function t(r, s) {
      var o;
      o = e.call(this, r, s) || this;
      var l = s,
        a = l && !l.isMounting ? r.enter : r.appear,
        u;
      return (
        (o.appearStatus = null),
        r.in
          ? a
            ? ((u = Yt), (o.appearStatus = pt))
            : (u = Dt)
          : r.unmountOnExit || r.mountOnEnter
          ? (u = es)
          : (u = Yt),
        (o.state = { status: u }),
        (o.nextCallback = null),
        o
      );
    }
    t.getDerivedStateFromProps = function (s, o) {
      var l = s.in;
      return l && o.status === es ? { status: Yt } : null;
    };
    var n = t.prototype;
    return (
      (n.componentDidMount = function () {
        this.updateStatus(!0, this.appearStatus);
      }),
      (n.componentDidUpdate = function (s) {
        var o = null;
        if (s !== this.props) {
          var l = this.state.status;
          this.props.in
            ? l !== pt && l !== Dt && (o = pt)
            : (l === pt || l === Dt) && (o = Os);
        }
        this.updateStatus(!1, o);
      }),
      (n.componentWillUnmount = function () {
        this.cancelNextCallback();
      }),
      (n.getTimeouts = function () {
        var s = this.props.timeout,
          o,
          l,
          a;
        return (
          (o = l = a = s),
          s != null &&
            typeof s != "number" &&
            ((o = s.exit),
            (l = s.enter),
            (a = s.appear !== void 0 ? s.appear : l)),
          { exit: o, enter: l, appear: a }
        );
      }),
      (n.updateStatus = function (s, o) {
        if ((s === void 0 && (s = !1), o !== null))
          if ((this.cancelNextCallback(), o === pt)) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
              var l = this.props.nodeRef
                ? this.props.nodeRef.current
                : pr.findDOMNode(this);
              l && E1(l);
            }
            this.performEnter(s);
          } else this.performExit();
        else
          this.props.unmountOnExit &&
            this.state.status === Yt &&
            this.setState({ status: es });
      }),
      (n.performEnter = function (s) {
        var o = this,
          l = this.props.enter,
          a = this.context ? this.context.isMounting : s,
          u = this.props.nodeRef ? [a] : [pr.findDOMNode(this), a],
          c = u[0],
          d = u[1],
          f = this.getTimeouts(),
          p = a ? f.appear : f.enter;
        if ((!s && !l) || Zd.disabled) {
          this.safeSetState({ status: Dt }, function () {
            o.props.onEntered(c);
          });
          return;
        }
        this.props.onEnter(c, d),
          this.safeSetState({ status: pt }, function () {
            o.props.onEntering(c, d),
              o.onTransitionEnd(p, function () {
                o.safeSetState({ status: Dt }, function () {
                  o.props.onEntered(c, d);
                });
              });
          });
      }),
      (n.performExit = function () {
        var s = this,
          o = this.props.exit,
          l = this.getTimeouts(),
          a = this.props.nodeRef ? void 0 : pr.findDOMNode(this);
        if (!o || Zd.disabled) {
          this.safeSetState({ status: Yt }, function () {
            s.props.onExited(a);
          });
          return;
        }
        this.props.onExit(a),
          this.safeSetState({ status: Os }, function () {
            s.props.onExiting(a),
              s.onTransitionEnd(l.exit, function () {
                s.safeSetState({ status: Yt }, function () {
                  s.props.onExited(a);
                });
              });
          });
      }),
      (n.cancelNextCallback = function () {
        this.nextCallback !== null &&
          (this.nextCallback.cancel(), (this.nextCallback = null));
      }),
      (n.safeSetState = function (s, o) {
        (o = this.setNextCallback(o)), this.setState(s, o);
      }),
      (n.setNextCallback = function (s) {
        var o = this,
          l = !0;
        return (
          (this.nextCallback = function (a) {
            l && ((l = !1), (o.nextCallback = null), s(a));
          }),
          (this.nextCallback.cancel = function () {
            l = !1;
          }),
          this.nextCallback
        );
      }),
      (n.onTransitionEnd = function (s, o) {
        this.setNextCallback(o);
        var l = this.props.nodeRef
            ? this.props.nodeRef.current
            : pr.findDOMNode(this),
          a = s == null && !this.props.addEndListener;
        if (!l || a) {
          setTimeout(this.nextCallback, 0);
          return;
        }
        if (this.props.addEndListener) {
          var u = this.props.nodeRef
              ? [this.nextCallback]
              : [l, this.nextCallback],
            c = u[0],
            d = u[1];
          this.props.addEndListener(c, d);
        }
        s != null && setTimeout(this.nextCallback, s);
      }),
      (n.render = function () {
        var s = this.state.status;
        if (s === es) return null;
        var o = this.props,
          l = o.children;
        o.in,
          o.mountOnEnter,
          o.unmountOnExit,
          o.appear,
          o.enter,
          o.exit,
          o.timeout,
          o.addEndListener,
          o.onEnter,
          o.onEntering,
          o.onEntered,
          o.onExit,
          o.onExiting,
          o.onExited,
          o.nodeRef;
        var a = dm(o, [
          "children",
          "in",
          "mountOnEnter",
          "unmountOnExit",
          "appear",
          "enter",
          "exit",
          "timeout",
          "addEndListener",
          "onEnter",
          "onEntering",
          "onEntered",
          "onExit",
          "onExiting",
          "onExited",
          "nodeRef",
        ]);
        return tt.createElement(
          gm.Provider,
          { value: null },
          typeof l == "function"
            ? l(s, a)
            : tt.cloneElement(tt.Children.only(l), a)
        );
      }),
      t
    );
  })(tt.Component);
Gt.contextType = gm;
Gt.propTypes = {};
function Zn() {}
Gt.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Zn,
  onEntering: Zn,
  onEntered: Zn,
  onExit: Zn,
  onExiting: Zn,
  onExited: Zn,
};
Gt.UNMOUNTED = es;
Gt.EXITED = Yt;
Gt.ENTERING = pt;
Gt.ENTERED = Dt;
Gt.EXITING = Os;
const zl = !!(
  typeof window < "u" &&
  window.document &&
  window.document.createElement
);
var Wa = !1,
  Ha = !1;
try {
  var Li = {
    get passive() {
      return (Wa = !0);
    },
    get once() {
      return (Ha = Wa = !0);
    },
  };
  zl &&
    (window.addEventListener("test", Li, Li),
    window.removeEventListener("test", Li, !0));
} catch {}
function C1(e, t, n, r) {
  if (r && typeof r != "boolean" && !Ha) {
    var s = r.once,
      o = r.capture,
      l = n;
    !Ha &&
      s &&
      ((l =
        n.__once ||
        function a(u) {
          this.removeEventListener(t, a, o), n.call(this, u);
        }),
      (n.__once = l)),
      e.addEventListener(t, l, Wa ? r : o);
  }
  e.addEventListener(t, n, r);
}
function N1(e, t, n, r) {
  var s = r && typeof r != "boolean" ? r.capture : r;
  e.removeEventListener(t, n, s),
    n.__once && e.removeEventListener(t, n.__once, s);
}
function ol(e, t, n, r) {
  return (
    C1(e, t, n, r),
    function () {
      N1(e, t, n, r);
    }
  );
}
function k1(e, t, n, r) {
  if ((r === void 0 && (r = !0), e)) {
    var s = document.createEvent("HTMLEvents");
    s.initEvent(t, n, r), e.dispatchEvent(s);
  }
}
function _1(e) {
  var t = Mt(e, "transitionDuration") || "",
    n = t.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(t) * n;
}
function R1(e, t, n) {
  n === void 0 && (n = 5);
  var r = !1,
    s = setTimeout(function () {
      r || k1(e, "transitionend", !0);
    }, t + n),
    o = ol(
      e,
      "transitionend",
      function () {
        r = !0;
      },
      { once: !0 }
    );
  return function () {
    clearTimeout(s), o();
  };
}
function P1(e, t, n, r) {
  n == null && (n = _1(e) || 0);
  var s = R1(e, n, r),
    o = ol(e, "transitionend", t);
  return function () {
    s(), o();
  };
}
function ef(e, t) {
  const n = Mt(e, t) || "",
    r = n.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(n) * r;
}
function ic(e, t) {
  const n = ef(e, "transitionDuration"),
    r = ef(e, "transitionDelay"),
    s = P1(
      e,
      (o) => {
        o.target === e && (s(), t(o));
      },
      n + r
    );
}
function Gr(...e) {
  return e
    .filter((t) => t != null)
    .reduce((t, n) => {
      if (typeof n != "function")
        throw new Error(
          "Invalid Argument Type, must only provide functions, undefined, or null."
        );
      return t === null
        ? n
        : function (...s) {
            t.apply(this, s), n.apply(this, s);
          };
    }, null);
}
function vm(e) {
  e.offsetHeight;
}
const tf = (e) =>
  !e || typeof e == "function"
    ? e
    : (t) => {
        e.current = t;
      };
function O1(e, t) {
  const n = tf(e),
    r = tf(t);
  return (s) => {
    n && n(s), r && r(s);
  };
}
function bs(e, t) {
  return y.useMemo(() => O1(e, t), [e, t]);
}
function T1(e) {
  return e && "setState" in e ? pr.findDOMNode(e) : e ?? null;
}
const ac = tt.forwardRef(
    (
      {
        onEnter: e,
        onEntering: t,
        onEntered: n,
        onExit: r,
        onExiting: s,
        onExited: o,
        addEndListener: l,
        children: a,
        childRef: u,
        ...c
      },
      d
    ) => {
      const f = y.useRef(null),
        p = bs(f, u),
        v = (C) => {
          p(T1(C));
        },
        h = (C) => (k) => {
          C && f.current && C(f.current, k);
        },
        j = y.useCallback(h(e), [e]),
        w = y.useCallback(h(t), [t]),
        x = y.useCallback(h(n), [n]),
        g = y.useCallback(h(r), [r]),
        m = y.useCallback(h(s), [s]),
        S = y.useCallback(h(o), [o]),
        N = y.useCallback(h(l), [l]);
      return i.jsx(Gt, {
        ref: d,
        ...c,
        onEnter: j,
        onEntered: x,
        onEntering: w,
        onExit: g,
        onExited: S,
        onExiting: m,
        addEndListener: N,
        nodeRef: f,
        children:
          typeof a == "function"
            ? (C, k) => a(C, { ...k, ref: v })
            : tt.cloneElement(a, { ref: v }),
      });
    }
  ),
  L1 = {
    height: ["marginTop", "marginBottom"],
    width: ["marginLeft", "marginRight"],
  };
function I1(e, t) {
  const n = `offset${e[0].toUpperCase()}${e.slice(1)}`,
    r = t[n],
    s = L1[e];
  return r + parseInt(Mt(t, s[0]), 10) + parseInt(Mt(t, s[1]), 10);
}
const D1 = {
    [Yt]: "collapse",
    [Os]: "collapsing",
    [pt]: "collapsing",
    [Dt]: "collapse show",
  },
  $1 = tt.forwardRef(
    (
      {
        onEnter: e,
        onEntering: t,
        onEntered: n,
        onExit: r,
        onExiting: s,
        className: o,
        children: l,
        dimension: a = "height",
        in: u = !1,
        timeout: c = 300,
        mountOnEnter: d = !1,
        unmountOnExit: f = !1,
        appear: p = !1,
        getDimensionValue: v = I1,
        ...h
      },
      j
    ) => {
      const w = typeof a == "function" ? a() : a,
        x = y.useMemo(
          () =>
            Gr((C) => {
              C.style[w] = "0";
            }, e),
          [w, e]
        ),
        g = y.useMemo(
          () =>
            Gr((C) => {
              const k = `scroll${w[0].toUpperCase()}${w.slice(1)}`;
              C.style[w] = `${C[k]}px`;
            }, t),
          [w, t]
        ),
        m = y.useMemo(
          () =>
            Gr((C) => {
              C.style[w] = null;
            }, n),
          [w, n]
        ),
        S = y.useMemo(
          () =>
            Gr((C) => {
              (C.style[w] = `${v(w, C)}px`), vm(C);
            }, r),
          [r, v, w]
        ),
        N = y.useMemo(
          () =>
            Gr((C) => {
              C.style[w] = null;
            }, s),
          [w, s]
        );
      return i.jsx(ac, {
        ref: j,
        addEndListener: ic,
        ...h,
        "aria-expanded": h.role ? u : null,
        onEnter: x,
        onEntering: g,
        onEntered: m,
        onExit: S,
        onExiting: N,
        childRef: l.ref,
        in: u,
        timeout: c,
        mountOnEnter: d,
        unmountOnExit: f,
        appear: p,
        children: (C, k) =>
          tt.cloneElement(l, {
            ...k,
            className: $(
              o,
              l.props.className,
              D1[C],
              w === "width" && "collapse-horizontal"
            ),
          }),
      });
    }
  );
function F1(e) {
  const t = y.useRef(e);
  return (
    y.useEffect(() => {
      t.current = e;
    }, [e]),
    t
  );
}
function Le(e) {
  const t = F1(e);
  return y.useCallback(
    function (...n) {
      return t.current && t.current(...n);
    },
    [t]
  );
}
const xm = (e) =>
    y.forwardRef((t, n) =>
      i.jsx("div", { ...t, ref: n, className: $(t.className, e) })
    ),
  wm = xm("h4");
wm.displayName = "DivStyledAsH4";
const jm = y.forwardRef(
  ({ className: e, bsPrefix: t, as: n = wm, ...r }, s) => (
    (t = U(t, "alert-heading")), i.jsx(n, { ref: s, className: $(e, t), ...r })
  )
);
jm.displayName = "AlertHeading";
function A1() {
  const e = y.useRef(!0),
    t = y.useRef(() => e.current);
  return (
    y.useEffect(
      () => (
        (e.current = !0),
        () => {
          e.current = !1;
        }
      ),
      []
    ),
    t.current
  );
}
function M1(e) {
  const t = y.useRef(null);
  return (
    y.useEffect(() => {
      t.current = e;
    }),
    t.current
  );
}
const z1 =
    typeof global < "u" &&
    global.navigator &&
    global.navigator.product === "ReactNative",
  U1 = typeof document < "u",
  Va = U1 || z1 ? y.useLayoutEffect : y.useEffect,
  B1 = ["as", "disabled"];
function b1(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function W1(e) {
  return !e || e.trim() === "#";
}
function uc({
  tagName: e,
  disabled: t,
  href: n,
  target: r,
  rel: s,
  role: o,
  onClick: l,
  tabIndex: a = 0,
  type: u,
}) {
  e || (n != null || r != null || s != null ? (e = "a") : (e = "button"));
  const c = { tagName: e };
  if (e === "button") return [{ type: u || "button", disabled: t }, c];
  const d = (p) => {
      if (((t || (e === "a" && W1(n))) && p.preventDefault(), t)) {
        p.stopPropagation();
        return;
      }
      l == null || l(p);
    },
    f = (p) => {
      p.key === " " && (p.preventDefault(), d(p));
    };
  return (
    e === "a" && (n || (n = "#"), t && (n = void 0)),
    [
      {
        role: o ?? "button",
        disabled: void 0,
        tabIndex: t ? void 0 : a,
        href: n,
        target: e === "a" ? r : void 0,
        "aria-disabled": t || void 0,
        rel: e === "a" ? s : void 0,
        onClick: d,
        onKeyDown: f,
      },
      c,
    ]
  );
}
const Sm = y.forwardRef((e, t) => {
  let { as: n, disabled: r } = e,
    s = b1(e, B1);
  const [o, { tagName: l }] = uc(Object.assign({ tagName: n, disabled: r }, s));
  return i.jsx(l, Object.assign({}, s, o, { ref: t }));
});
Sm.displayName = "Button";
const H1 = ["onKeyDown"];
function V1(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function K1(e) {
  return !e || e.trim() === "#";
}
const Ul = y.forwardRef((e, t) => {
  let { onKeyDown: n } = e,
    r = V1(e, H1);
  const [s] = uc(Object.assign({ tagName: "a" }, r)),
    o = Le((l) => {
      s.onKeyDown(l), n == null || n(l);
    });
  return K1(r.href) || r.role === "button"
    ? i.jsx("a", Object.assign({ ref: t }, r, s, { onKeyDown: o }))
    : i.jsx("a", Object.assign({ ref: t }, r, { onKeyDown: n }));
});
Ul.displayName = "Anchor";
const Em = y.forwardRef(
  ({ className: e, bsPrefix: t, as: n = Ul, ...r }, s) => (
    (t = U(t, "alert-link")), i.jsx(n, { ref: s, className: $(e, t), ...r })
  )
);
Em.displayName = "AlertLink";
const G1 = { [pt]: "show", [Dt]: "show" },
  ll = y.forwardRef(
    (
      {
        className: e,
        children: t,
        transitionClasses: n = {},
        onEnter: r,
        ...s
      },
      o
    ) => {
      const l = {
          in: !1,
          timeout: 300,
          mountOnEnter: !1,
          unmountOnExit: !1,
          appear: !1,
          ...s,
        },
        a = y.useCallback(
          (u, c) => {
            vm(u), r == null || r(u, c);
          },
          [r]
        );
      return i.jsx(ac, {
        ref: o,
        addEndListener: ic,
        ...l,
        onEnter: a,
        childRef: t.ref,
        children: (u, c) =>
          y.cloneElement(t, {
            ...c,
            className: $("fade", e, t.props.className, G1[u], n[u]),
          }),
      });
    }
  );
ll.displayName = "Fade";
const Q1 = {
    "aria-label": Te.string,
    onClick: Te.func,
    variant: Te.oneOf(["white"]),
  },
  Bl = y.forwardRef(
    ({ className: e, variant: t, "aria-label": n = "Close", ...r }, s) =>
      i.jsx("button", {
        ref: s,
        type: "button",
        className: $("btn-close", t && `btn-close-${t}`, e),
        "aria-label": n,
        ...r,
      })
  );
Bl.displayName = "CloseButton";
Bl.propTypes = Q1;
const Cm = y.forwardRef((e, t) => {
  const {
      bsPrefix: n,
      show: r = !0,
      closeLabel: s = "Close alert",
      closeVariant: o,
      className: l,
      children: a,
      variant: u = "primary",
      onClose: c,
      dismissible: d,
      transition: f = ll,
      ...p
    } = Ml(e, { show: "onClose" }),
    v = U(n, "alert"),
    h = Le((x) => {
      c && c(!1, x);
    }),
    j = f === !0 ? ll : f,
    w = i.jsxs("div", {
      role: "alert",
      ...(j ? void 0 : p),
      ref: t,
      className: $(l, v, u && `${v}-${u}`, d && `${v}-dismissible`),
      children: [
        d && i.jsx(Bl, { onClick: h, "aria-label": s, variant: o }),
        a,
      ],
    });
  return j
    ? i.jsx(j, { unmountOnExit: !0, ...p, ref: void 0, in: r, children: w })
    : r
    ? w
    : null;
});
Cm.displayName = "Alert";
const J1 = Object.assign(Cm, { Link: Em, Heading: jm }),
  K = y.forwardRef(
    (
      {
        as: e,
        bsPrefix: t,
        variant: n = "primary",
        size: r,
        active: s = !1,
        disabled: o = !1,
        className: l,
        ...a
      },
      u
    ) => {
      const c = U(t, "btn"),
        [d, { tagName: f }] = uc({ tagName: e, disabled: o, ...a }),
        p = f;
      return i.jsx(p, {
        ...d,
        ...a,
        ref: u,
        disabled: o,
        className: $(
          l,
          c,
          s && "active",
          n && `${c}-${n}`,
          r && `${c}-${r}`,
          a.href && o && "disabled"
        ),
      });
    }
  );
K.displayName = "Button";
const Dr = y.forwardRef(
  (
    {
      bsPrefix: e,
      size: t,
      vertical: n = !1,
      className: r,
      role: s = "group",
      as: o = "div",
      ...l
    },
    a
  ) => {
    const u = U(e, "btn-group");
    let c = u;
    return (
      n && (c = `${u}-vertical`),
      i.jsx(o, { ...l, ref: a, role: s, className: $(r, c, t && `${u}-${t}`) })
    );
  }
);
Dr.displayName = "ButtonGroup";
const Nm = y.createContext(null);
Nm.displayName = "CardHeaderContext";
function q1(e) {
  const t = y.useRef(e);
  return (t.current = e), t;
}
function X1(e) {
  const t = q1(e);
  y.useEffect(() => () => t.current(), []);
}
function Y1(e, t) {
  return y.Children.toArray(e).some((n) => y.isValidElement(n) && n.type === t);
}
function Z1({ as: e, bsPrefix: t, className: n, ...r }) {
  t = U(t, "col");
  const s = fm(),
    o = pm(),
    l = [],
    a = [];
  return (
    s.forEach((u) => {
      const c = r[u];
      delete r[u];
      let d, f, p;
      typeof c == "object" && c != null
        ? ({ span: d, offset: f, order: p } = c)
        : (d = c);
      const v = u !== o ? `-${u}` : "";
      d && l.push(d === !0 ? `${t}${v}` : `${t}${v}-${d}`),
        p != null && a.push(`order${v}-${p}`),
        f != null && a.push(`offset${v}-${f}`);
    }),
    [
      { ...r, className: $(n, ...l, ...a) },
      { as: e, bsPrefix: t, spans: l },
    ]
  );
}
const T = y.forwardRef((e, t) => {
  const [{ className: n, ...r }, { as: s = "div", bsPrefix: o, spans: l }] =
    Z1(e);
  return i.jsx(s, { ...r, ref: t, className: $(n, !l.length && o) });
});
T.displayName = "Col";
const cc = y.forwardRef(
  ({ bsPrefix: e, fluid: t = !1, as: n = "div", className: r, ...s }, o) => {
    const l = U(e, "container"),
      a = typeof t == "string" ? `-${t}` : "-fluid";
    return i.jsx(n, { ref: o, ...s, className: $(r, t ? `${l}${a}` : l) });
  }
);
cc.displayName = "Container";
var ew = Function.prototype.bind.call(Function.prototype.call, [].slice);
function kn(e, t) {
  return ew(e.querySelectorAll(t));
}
function tw() {
  const [, e] = y.useReducer((t) => !t, !1);
  return e;
}
function nf(e, t) {
  if (e.contains) return e.contains(t);
  if (e.compareDocumentPosition)
    return e === t || !!(e.compareDocumentPosition(t) & 16);
}
const il = y.createContext(null),
  bl = (e, t = null) => (e != null ? String(e) : t || null),
  dc = y.createContext(null);
dc.displayName = "NavContext";
const nw = "data-rr-ui-",
  rw = "rrUi";
function Wl(e) {
  return `${nw}${e}`;
}
function sw(e) {
  return `${rw}${e}`;
}
const km = y.createContext(zl ? window : void 0);
km.Provider;
function fc() {
  return y.useContext(km);
}
const Kn = y.createContext(null);
Kn.displayName = "NavbarContext";
Te.string, Te.bool, Te.bool, Te.bool, Te.bool;
const Hl = y.forwardRef(
  (
    {
      bsPrefix: e,
      className: t,
      fluid: n = !1,
      rounded: r = !1,
      roundedCircle: s = !1,
      thumbnail: o = !1,
      ...l
    },
    a
  ) => (
    (e = U(e, "img")),
    i.jsx("img", {
      ref: a,
      ...l,
      className: $(
        t,
        n && `${e}-fluid`,
        r && "rounded",
        s && "rounded-circle",
        o && `${e}-thumbnail`
      ),
    })
  )
);
Hl.displayName = "Image";
const ow = { type: Te.string, tooltip: Te.bool, as: Te.elementType },
  Vl = y.forwardRef(
    (
      { as: e = "div", className: t, type: n = "valid", tooltip: r = !1, ...s },
      o
    ) =>
      i.jsx(e, {
        ...s,
        ref: o,
        className: $(t, `${n}-${r ? "tooltip" : "feedback"}`),
      })
  );
Vl.displayName = "Feedback";
Vl.propTypes = ow;
const Wt = y.createContext({}),
  pc = y.forwardRef(
    (
      {
        id: e,
        bsPrefix: t,
        className: n,
        type: r = "checkbox",
        isValid: s = !1,
        isInvalid: o = !1,
        as: l = "input",
        ...a
      },
      u
    ) => {
      const { controlId: c } = y.useContext(Wt);
      return (
        (t = U(t, "form-check-input")),
        i.jsx(l, {
          ...a,
          ref: u,
          type: r,
          id: e || c,
          className: $(n, t, s && "is-valid", o && "is-invalid"),
        })
      );
    }
  );
pc.displayName = "FormCheckInput";
const al = y.forwardRef(
  ({ bsPrefix: e, className: t, htmlFor: n, ...r }, s) => {
    const { controlId: o } = y.useContext(Wt);
    return (
      (e = U(e, "form-check-label")),
      i.jsx("label", { ...r, ref: s, htmlFor: n || o, className: $(t, e) })
    );
  }
);
al.displayName = "FormCheckLabel";
const _m = y.forwardRef(
  (
    {
      id: e,
      bsPrefix: t,
      bsSwitchPrefix: n,
      inline: r = !1,
      reverse: s = !1,
      disabled: o = !1,
      isValid: l = !1,
      isInvalid: a = !1,
      feedbackTooltip: u = !1,
      feedback: c,
      feedbackType: d,
      className: f,
      style: p,
      title: v = "",
      type: h = "checkbox",
      label: j,
      children: w,
      as: x = "input",
      ...g
    },
    m
  ) => {
    (t = U(t, "form-check")), (n = U(n, "form-switch"));
    const { controlId: S } = y.useContext(Wt),
      N = y.useMemo(() => ({ controlId: e || S }), [S, e]),
      C = (!w && j != null && j !== !1) || Y1(w, al),
      k = i.jsx(pc, {
        ...g,
        type: h === "switch" ? "checkbox" : h,
        ref: m,
        isValid: l,
        isInvalid: a,
        disabled: o,
        as: x,
      });
    return i.jsx(Wt.Provider, {
      value: N,
      children: i.jsx("div", {
        style: p,
        className: $(
          f,
          C && t,
          r && `${t}-inline`,
          s && `${t}-reverse`,
          h === "switch" && n
        ),
        children:
          w ||
          i.jsxs(i.Fragment, {
            children: [
              k,
              C && i.jsx(al, { title: v, children: j }),
              c && i.jsx(Vl, { type: d, tooltip: u, children: c }),
            ],
          }),
      }),
    });
  }
);
_m.displayName = "FormCheck";
const ul = Object.assign(_m, { Input: pc, Label: al }),
  Rm = y.forwardRef(
    (
      {
        bsPrefix: e,
        type: t,
        size: n,
        htmlSize: r,
        id: s,
        className: o,
        isValid: l = !1,
        isInvalid: a = !1,
        plaintext: u,
        readOnly: c,
        as: d = "input",
        ...f
      },
      p
    ) => {
      const { controlId: v } = y.useContext(Wt);
      return (
        (e = U(e, "form-control")),
        i.jsx(d, {
          ...f,
          type: t,
          size: r,
          ref: p,
          readOnly: c,
          id: s || v,
          className: $(
            o,
            u ? `${e}-plaintext` : e,
            n && `${e}-${n}`,
            t === "color" && `${e}-color`,
            l && "is-valid",
            a && "is-invalid"
          ),
        })
      );
    }
  );
Rm.displayName = "FormControl";
const lw = Object.assign(Rm, { Feedback: Vl }),
  Pm = y.forwardRef(
    ({ className: e, bsPrefix: t, as: n = "div", ...r }, s) => (
      (t = U(t, "form-floating")),
      i.jsx(n, { ref: s, className: $(e, t), ...r })
    )
  );
Pm.displayName = "FormFloating";
const hc = y.forwardRef(({ controlId: e, as: t = "div", ...n }, r) => {
  const s = y.useMemo(() => ({ controlId: e }), [e]);
  return i.jsx(Wt.Provider, { value: s, children: i.jsx(t, { ...n, ref: r }) });
});
hc.displayName = "FormGroup";
const Om = y.forwardRef(
  (
    {
      as: e = "label",
      bsPrefix: t,
      column: n = !1,
      visuallyHidden: r = !1,
      className: s,
      htmlFor: o,
      ...l
    },
    a
  ) => {
    const { controlId: u } = y.useContext(Wt);
    t = U(t, "form-label");
    let c = "col-form-label";
    typeof n == "string" && (c = `${c} ${c}-${n}`);
    const d = $(s, t, r && "visually-hidden", n && c);
    return (
      (o = o || u),
      n
        ? i.jsx(T, { ref: a, as: "label", className: d, htmlFor: o, ...l })
        : i.jsx(e, { ref: a, className: d, htmlFor: o, ...l })
    );
  }
);
Om.displayName = "FormLabel";
const Tm = y.forwardRef(({ bsPrefix: e, className: t, id: n, ...r }, s) => {
  const { controlId: o } = y.useContext(Wt);
  return (
    (e = U(e, "form-range")),
    i.jsx("input", {
      ...r,
      type: "range",
      ref: s,
      className: $(t, e),
      id: n || o,
    })
  );
});
Tm.displayName = "FormRange";
const Lm = y.forwardRef(
  (
    {
      bsPrefix: e,
      size: t,
      htmlSize: n,
      className: r,
      isValid: s = !1,
      isInvalid: o = !1,
      id: l,
      ...a
    },
    u
  ) => {
    const { controlId: c } = y.useContext(Wt);
    return (
      (e = U(e, "form-select")),
      i.jsx("select", {
        ...a,
        size: n,
        ref: u,
        className: $(
          r,
          e,
          t && `${e}-${t}`,
          s && "is-valid",
          o && "is-invalid"
        ),
        id: l || c,
      })
    );
  }
);
Lm.displayName = "FormSelect";
const Im = y.forwardRef(
  ({ bsPrefix: e, className: t, as: n = "small", muted: r, ...s }, o) => (
    (e = U(e, "form-text")),
    i.jsx(n, { ...s, ref: o, className: $(t, e, r && "text-muted") })
  )
);
Im.displayName = "FormText";
const Dm = y.forwardRef((e, t) => i.jsx(ul, { ...e, ref: t, type: "switch" }));
Dm.displayName = "Switch";
const iw = Object.assign(Dm, { Input: ul.Input, Label: ul.Label }),
  $m = y.forwardRef(
    (
      { bsPrefix: e, className: t, children: n, controlId: r, label: s, ...o },
      l
    ) => (
      (e = U(e, "form-floating")),
      i.jsxs(hc, {
        ref: l,
        className: $(t, e),
        controlId: r,
        ...o,
        children: [n, i.jsx("label", { htmlFor: r, children: s })],
      })
    )
  );
$m.displayName = "FloatingLabel";
const aw = { _ref: Te.any, validated: Te.bool, as: Te.elementType },
  mc = y.forwardRef(({ className: e, validated: t, as: n = "form", ...r }, s) =>
    i.jsx(n, { ...r, ref: s, className: $(e, t && "was-validated") })
  );
mc.displayName = "Form";
mc.propTypes = aw;
const _ = Object.assign(mc, {
    Group: hc,
    Control: lw,
    Floating: Pm,
    Check: ul,
    Switch: iw,
    Label: Om,
    Text: Im,
    Range: Tm,
    Select: Lm,
    FloatingLabel: $m,
  }),
  Fm = y.createContext(null),
  uw = ["as", "active", "eventKey"];
function cw(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function yc({ key: e, onClick: t, active: n, id: r, role: s, disabled: o }) {
  const l = y.useContext(il),
    a = y.useContext(dc),
    u = y.useContext(Fm);
  let c = n;
  const d = { role: s };
  if (a) {
    !s && a.role === "tablist" && (d.role = "tab");
    const f = a.getControllerId(e ?? null),
      p = a.getControlledId(e ?? null);
    (d[Wl("event-key")] = e),
      (d.id = f || r),
      (c = n == null && e != null ? a.activeKey === e : n),
      (c ||
        (!(u != null && u.unmountOnExit) && !(u != null && u.mountOnEnter))) &&
        (d["aria-controls"] = p);
  }
  return (
    d.role === "tab" &&
      ((d["aria-selected"] = c),
      c || (d.tabIndex = -1),
      o && ((d.tabIndex = -1), (d["aria-disabled"] = !0))),
    (d.onClick = Le((f) => {
      o ||
        (t == null || t(f),
        e != null && l && !f.isPropagationStopped() && l(e, f));
    })),
    [d, { isActive: c }]
  );
}
const Am = y.forwardRef((e, t) => {
  let { as: n = Sm, active: r, eventKey: s } = e,
    o = cw(e, uw);
  const [l, a] = yc(Object.assign({ key: bl(s, o.href), active: r }, o));
  return (
    (l[Wl("active")] = a.isActive),
    i.jsx(n, Object.assign({}, o, l, { ref: t }))
  );
});
Am.displayName = "NavItem";
const dw = Am,
  fw = ["as", "onSelect", "activeKey", "role", "onKeyDown"];
function pw(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
const rf = () => {},
  sf = Wl("event-key"),
  Mm = y.forwardRef((e, t) => {
    let { as: n = "div", onSelect: r, activeKey: s, role: o, onKeyDown: l } = e,
      a = pw(e, fw);
    const u = tw(),
      c = y.useRef(!1),
      d = y.useContext(il),
      f = y.useContext(Fm);
    let p, v;
    f &&
      ((o = o || "tablist"),
      (s = f.activeKey),
      (p = f.getControlledId),
      (v = f.getControllerId));
    const h = y.useRef(null),
      j = (m) => {
        const S = h.current;
        if (!S) return null;
        const N = kn(S, `[${sf}]:not([aria-disabled=true])`),
          C = S.querySelector("[aria-selected=true]");
        if (!C || C !== document.activeElement) return null;
        const k = N.indexOf(C);
        if (k === -1) return null;
        let P = k + m;
        return P >= N.length && (P = 0), P < 0 && (P = N.length - 1), N[P];
      },
      w = (m, S) => {
        m != null && (r == null || r(m, S), d == null || d(m, S));
      },
      x = (m) => {
        if ((l == null || l(m), !f)) return;
        let S;
        switch (m.key) {
          case "ArrowLeft":
          case "ArrowUp":
            S = j(-1);
            break;
          case "ArrowRight":
          case "ArrowDown":
            S = j(1);
            break;
          default:
            return;
        }
        S &&
          (m.preventDefault(),
          w(S.dataset[sw("EventKey")] || null, m),
          (c.current = !0),
          u());
      };
    y.useEffect(() => {
      if (h.current && c.current) {
        const m = h.current.querySelector(`[${sf}][aria-selected=true]`);
        m == null || m.focus();
      }
      c.current = !1;
    });
    const g = bs(t, h);
    return i.jsx(il.Provider, {
      value: w,
      children: i.jsx(dc.Provider, {
        value: {
          role: o,
          activeKey: bl(s),
          getControlledId: p || rf,
          getControllerId: v || rf,
        },
        children: i.jsx(
          n,
          Object.assign({}, a, { onKeyDown: x, ref: g, role: o })
        ),
      }),
    });
  });
Mm.displayName = "Nav";
const zm = Object.assign(Mm, { Item: dw }),
  Um = y.forwardRef(
    (
      {
        bsPrefix: e,
        active: t,
        disabled: n,
        eventKey: r,
        className: s,
        variant: o,
        action: l,
        as: a,
        ...u
      },
      c
    ) => {
      e = U(e, "list-group-item");
      const [d, f] = yc({ key: bl(r, u.href), active: t, ...u }),
        p = Le((h) => {
          if (n) {
            h.preventDefault(), h.stopPropagation();
            return;
          }
          d.onClick(h);
        });
      n &&
        u.tabIndex === void 0 &&
        ((u.tabIndex = -1), (u["aria-disabled"] = !0));
      const v = a || (l ? (u.href ? "a" : "button") : "div");
      return i.jsx(v, {
        ref: c,
        ...u,
        ...d,
        onClick: p,
        className: $(
          s,
          e,
          f.isActive && "active",
          n && "disabled",
          o && `${e}-${o}`,
          l && `${e}-action`
        ),
      });
    }
  );
Um.displayName = "ListGroupItem";
const Bm = y.forwardRef((e, t) => {
  const {
      className: n,
      bsPrefix: r,
      variant: s,
      horizontal: o,
      numbered: l,
      as: a = "div",
      ...u
    } = Ml(e, { activeKey: "onSelect" }),
    c = U(r, "list-group");
  let d;
  return (
    o && (d = o === !0 ? "horizontal" : `horizontal-${o}`),
    i.jsx(zm, {
      ref: t,
      ...u,
      as: a,
      className: $(
        n,
        c,
        s && `${c}-${s}`,
        d && `${c}-${d}`,
        l && `${c}-numbered`
      ),
    })
  );
});
Bm.displayName = "ListGroup";
const Be = Object.assign(Bm, { Item: Um });
function Ii(e) {
  e === void 0 && (e = lc());
  try {
    var t = e.activeElement;
    return !t || !t.nodeName ? null : t;
  } catch {
    return e.body;
  }
}
function hw(e = document) {
  const t = e.defaultView;
  return Math.abs(t.innerWidth - e.documentElement.clientWidth);
}
const of = Wl("modal-open");
class gc {
  constructor({
    ownerDocument: t,
    handleContainerOverflow: n = !0,
    isRTL: r = !1,
  } = {}) {
    (this.handleContainerOverflow = n),
      (this.isRTL = r),
      (this.modals = []),
      (this.ownerDocument = t);
  }
  getScrollbarWidth() {
    return hw(this.ownerDocument);
  }
  getElement() {
    return (this.ownerDocument || document).body;
  }
  setModalAttributes(t) {}
  removeModalAttributes(t) {}
  setContainerStyle(t) {
    const n = { overflow: "hidden" },
      r = this.isRTL ? "paddingLeft" : "paddingRight",
      s = this.getElement();
    (t.style = { overflow: s.style.overflow, [r]: s.style[r] }),
      t.scrollBarWidth &&
        (n[r] = `${parseInt(Mt(s, r) || "0", 10) + t.scrollBarWidth}px`),
      s.setAttribute(of, ""),
      Mt(s, n);
  }
  reset() {
    [...this.modals].forEach((t) => this.remove(t));
  }
  removeContainerStyle(t) {
    const n = this.getElement();
    n.removeAttribute(of), Object.assign(n.style, t.style);
  }
  add(t) {
    let n = this.modals.indexOf(t);
    return (
      n !== -1 ||
        ((n = this.modals.length),
        this.modals.push(t),
        this.setModalAttributes(t),
        n !== 0) ||
        ((this.state = { scrollBarWidth: this.getScrollbarWidth(), style: {} }),
        this.handleContainerOverflow && this.setContainerStyle(this.state)),
      n
    );
  }
  remove(t) {
    const n = this.modals.indexOf(t);
    n !== -1 &&
      (this.modals.splice(n, 1),
      !this.modals.length &&
        this.handleContainerOverflow &&
        this.removeContainerStyle(this.state),
      this.removeModalAttributes(t));
  }
  isTopModal(t) {
    return !!this.modals.length && this.modals[this.modals.length - 1] === t;
  }
}
const Di = (e, t) =>
  zl
    ? e == null
      ? (t || lc()).body
      : (typeof e == "function" && (e = e()),
        e && "current" in e && (e = e.current),
        e && ("nodeType" in e || e.getBoundingClientRect) ? e : null)
    : null;
function mw(e, t) {
  const n = fc(),
    [r, s] = y.useState(() => Di(e, n == null ? void 0 : n.document));
  if (!r) {
    const o = Di(e);
    o && s(o);
  }
  return (
    y.useEffect(() => {}, [t, r]),
    y.useEffect(() => {
      const o = Di(e);
      o !== r && s(o);
    }, [e, r]),
    r
  );
}
function yw({
  children: e,
  in: t,
  onExited: n,
  mountOnEnter: r,
  unmountOnExit: s,
}) {
  const o = y.useRef(null),
    l = y.useRef(t),
    a = Le(n);
  y.useEffect(() => {
    t ? (l.current = !0) : a(o.current);
  }, [t, a]);
  const u = bs(o, e.ref),
    c = y.cloneElement(e, { ref: u });
  return t ? c : s || (!l.current && r) ? null : c;
}
function gw(e) {
  return e.code === "Escape" || e.keyCode === 27;
}
function vw() {
  const e = y.version.split(".");
  return { major: +e[0], minor: +e[1], patch: +e[2] };
}
const xw = [
  "onEnter",
  "onEntering",
  "onEntered",
  "onExit",
  "onExiting",
  "onExited",
  "addEndListener",
  "children",
];
function ww(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function jw(e) {
  let {
      onEnter: t,
      onEntering: n,
      onEntered: r,
      onExit: s,
      onExiting: o,
      onExited: l,
      addEndListener: a,
      children: u,
    } = e,
    c = ww(e, xw);
  const { major: d } = vw(),
    f = d >= 19 ? u.props.ref : u.ref,
    p = y.useRef(null),
    v = bs(p, typeof u == "function" ? null : f),
    h = (C) => (k) => {
      C && p.current && C(p.current, k);
    },
    j = y.useCallback(h(t), [t]),
    w = y.useCallback(h(n), [n]),
    x = y.useCallback(h(r), [r]),
    g = y.useCallback(h(s), [s]),
    m = y.useCallback(h(o), [o]),
    S = y.useCallback(h(l), [l]),
    N = y.useCallback(h(a), [a]);
  return Object.assign(
    {},
    c,
    { nodeRef: p },
    t && { onEnter: j },
    n && { onEntering: w },
    r && { onEntered: x },
    s && { onExit: g },
    o && { onExiting: m },
    l && { onExited: S },
    a && { addEndListener: N },
    {
      children:
        typeof u == "function"
          ? (C, k) => u(C, Object.assign({}, k, { ref: v }))
          : y.cloneElement(u, { ref: v }),
    }
  );
}
const Sw = ["component"];
function Ew(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
const Cw = y.forwardRef((e, t) => {
  let { component: n } = e,
    r = Ew(e, Sw);
  const s = jw(r);
  return i.jsx(n, Object.assign({ ref: t }, s));
});
function Nw({ in: e, onTransition: t }) {
  const n = y.useRef(null),
    r = y.useRef(!0),
    s = Le(t);
  return (
    Va(() => {
      if (!n.current) return;
      let o = !1;
      return (
        s({ in: e, element: n.current, initial: r.current, isStale: () => o }),
        () => {
          o = !0;
        }
      );
    }, [e, s]),
    Va(
      () => (
        (r.current = !1),
        () => {
          r.current = !0;
        }
      ),
      []
    ),
    n
  );
}
function kw({ children: e, in: t, onExited: n, onEntered: r, transition: s }) {
  const [o, l] = y.useState(!t);
  t && o && l(!1);
  const a = Nw({
      in: !!t,
      onTransition: (c) => {
        const d = () => {
          c.isStale() ||
            (c.in
              ? r == null || r(c.element, c.initial)
              : (l(!0), n == null || n(c.element)));
        };
        Promise.resolve(s(c)).then(d, (f) => {
          throw (c.in || l(!0), f);
        });
      },
    }),
    u = bs(a, e.ref);
  return o && !t ? null : y.cloneElement(e, { ref: u });
}
function lf(e, t, n) {
  return e
    ? i.jsx(Cw, Object.assign({}, n, { component: e }))
    : t
    ? i.jsx(kw, Object.assign({}, n, { transition: t }))
    : i.jsx(yw, Object.assign({}, n));
}
const _w = [
  "show",
  "role",
  "className",
  "style",
  "children",
  "backdrop",
  "keyboard",
  "onBackdropClick",
  "onEscapeKeyDown",
  "transition",
  "runTransition",
  "backdropTransition",
  "runBackdropTransition",
  "autoFocus",
  "enforceFocus",
  "restoreFocus",
  "restoreFocusOptions",
  "renderDialog",
  "renderBackdrop",
  "manager",
  "container",
  "onShow",
  "onHide",
  "onExit",
  "onExited",
  "onExiting",
  "onEnter",
  "onEntering",
  "onEntered",
];
function Rw(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
let $i;
function Pw(e) {
  return (
    $i || ($i = new gc({ ownerDocument: e == null ? void 0 : e.document })), $i
  );
}
function Ow(e) {
  const t = fc(),
    n = e || Pw(t),
    r = y.useRef({ dialog: null, backdrop: null });
  return Object.assign(r.current, {
    add: () => n.add(r.current),
    remove: () => n.remove(r.current),
    isTopModal: () => n.isTopModal(r.current),
    setDialogRef: y.useCallback((s) => {
      r.current.dialog = s;
    }, []),
    setBackdropRef: y.useCallback((s) => {
      r.current.backdrop = s;
    }, []),
  });
}
const bm = y.forwardRef((e, t) => {
  let {
      show: n = !1,
      role: r = "dialog",
      className: s,
      style: o,
      children: l,
      backdrop: a = !0,
      keyboard: u = !0,
      onBackdropClick: c,
      onEscapeKeyDown: d,
      transition: f,
      runTransition: p,
      backdropTransition: v,
      runBackdropTransition: h,
      autoFocus: j = !0,
      enforceFocus: w = !0,
      restoreFocus: x = !0,
      restoreFocusOptions: g,
      renderDialog: m,
      renderBackdrop: S = (oe) => i.jsx("div", Object.assign({}, oe)),
      manager: N,
      container: C,
      onShow: k,
      onHide: P = () => {},
      onExit: b,
      onExited: D,
      onExiting: ae,
      onEnter: Ot,
      onEntering: lt,
      onEntered: En,
    } = e,
    qn = Rw(e, _w);
  const Ye = fc(),
    it = mw(C),
    O = Ow(N),
    A = A1(),
    M = M1(n),
    [G, Z] = y.useState(!n),
    at = y.useRef(null);
  y.useImperativeHandle(t, () => O, [O]),
    zl && !M && n && (at.current = Ii(Ye == null ? void 0 : Ye.document)),
    n && G && Z(!1);
  const Me = Le(() => {
      if (
        (O.add(),
        (ni.current = ol(document, "keydown", sg)),
        (ti.current = ol(document, "focus", () => setTimeout(ze), !0)),
        k && k(),
        j)
      ) {
        var oe, Ic;
        const si = Ii(
          (oe = (Ic = O.dialog) == null ? void 0 : Ic.ownerDocument) != null
            ? oe
            : Ye == null
            ? void 0
            : Ye.document
        );
        O.dialog &&
          si &&
          !nf(O.dialog, si) &&
          ((at.current = si), O.dialog.focus());
      }
    }),
    pe = Le(() => {
      if (
        (O.remove(),
        ni.current == null || ni.current(),
        ti.current == null || ti.current(),
        x)
      ) {
        var oe;
        (oe = at.current) == null || oe.focus == null || oe.focus(g),
          (at.current = null);
      }
    });
  y.useEffect(() => {
    !n || !it || Me();
  }, [n, it, Me]),
    y.useEffect(() => {
      G && pe();
    }, [G, pe]),
    X1(() => {
      pe();
    });
  const ze = Le(() => {
      if (!w || !A() || !O.isTopModal()) return;
      const oe = Ii(Ye == null ? void 0 : Ye.document);
      O.dialog && oe && !nf(O.dialog, oe) && O.dialog.focus();
    }),
    Xn = Le((oe) => {
      oe.target === oe.currentTarget && (c == null || c(oe), a === !0 && P());
    }),
    sg = Le((oe) => {
      u &&
        gw(oe) &&
        O.isTopModal() &&
        (d == null || d(oe), oe.defaultPrevented || P());
    }),
    ti = y.useRef(),
    ni = y.useRef(),
    og = (...oe) => {
      Z(!0), D == null || D(...oe);
    };
  if (!it) return null;
  const Lc = Object.assign(
    {
      role: r,
      ref: O.setDialogRef,
      "aria-modal": r === "dialog" ? !0 : void 0,
    },
    qn,
    { style: o, className: s, tabIndex: -1 }
  );
  let ri = m
    ? m(Lc)
    : i.jsx(
        "div",
        Object.assign({}, Lc, {
          children: y.cloneElement(l, { role: "document" }),
        })
      );
  ri = lf(f, p, {
    unmountOnExit: !0,
    mountOnEnter: !0,
    appear: !0,
    in: !!n,
    onExit: b,
    onExiting: ae,
    onExited: og,
    onEnter: Ot,
    onEntering: lt,
    onEntered: En,
    children: ri,
  });
  let Js = null;
  return (
    a &&
      ((Js = S({ ref: O.setBackdropRef, onClick: Xn })),
      (Js = lf(v, h, {
        in: !!n,
        appear: !0,
        mountOnEnter: !0,
        unmountOnExit: !0,
        children: Js,
      }))),
    i.jsx(i.Fragment, {
      children: pr.createPortal(i.jsxs(i.Fragment, { children: [Js, ri] }), it),
    })
  );
});
bm.displayName = "Modal";
const Tw = Object.assign(bm, { Manager: gc });
function Lw(e, t) {
  return e.classList
    ? e.classList.contains(t)
    : (" " + (e.className.baseVal || e.className) + " ").indexOf(
        " " + t + " "
      ) !== -1;
}
function Iw(e, t) {
  e.classList
    ? e.classList.add(t)
    : Lw(e, t) ||
      (typeof e.className == "string"
        ? (e.className = e.className + " " + t)
        : e.setAttribute(
            "class",
            ((e.className && e.className.baseVal) || "") + " " + t
          ));
}
function af(e, t) {
  return e
    .replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1")
    .replace(/\s+/g, " ")
    .replace(/^\s*|\s*$/g, "");
}
function Dw(e, t) {
  e.classList
    ? e.classList.remove(t)
    : typeof e.className == "string"
    ? (e.className = af(e.className, t))
    : e.setAttribute(
        "class",
        af((e.className && e.className.baseVal) || "", t)
      );
}
const er = {
  FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
  STICKY_CONTENT: ".sticky-top",
  NAVBAR_TOGGLER: ".navbar-toggler",
};
class Wm extends gc {
  adjustAndStore(t, n, r) {
    const s = n.style[t];
    (n.dataset[t] = s), Mt(n, { [t]: `${parseFloat(Mt(n, t)) + r}px` });
  }
  restore(t, n) {
    const r = n.dataset[t];
    r !== void 0 && (delete n.dataset[t], Mt(n, { [t]: r }));
  }
  setContainerStyle(t) {
    super.setContainerStyle(t);
    const n = this.getElement();
    if ((Iw(n, "modal-open"), !t.scrollBarWidth)) return;
    const r = this.isRTL ? "paddingLeft" : "paddingRight",
      s = this.isRTL ? "marginLeft" : "marginRight";
    kn(n, er.FIXED_CONTENT).forEach((o) =>
      this.adjustAndStore(r, o, t.scrollBarWidth)
    ),
      kn(n, er.STICKY_CONTENT).forEach((o) =>
        this.adjustAndStore(s, o, -t.scrollBarWidth)
      ),
      kn(n, er.NAVBAR_TOGGLER).forEach((o) =>
        this.adjustAndStore(s, o, t.scrollBarWidth)
      );
  }
  removeContainerStyle(t) {
    super.removeContainerStyle(t);
    const n = this.getElement();
    Dw(n, "modal-open");
    const r = this.isRTL ? "paddingLeft" : "paddingRight",
      s = this.isRTL ? "marginLeft" : "marginRight";
    kn(n, er.FIXED_CONTENT).forEach((o) => this.restore(r, o)),
      kn(n, er.STICKY_CONTENT).forEach((o) => this.restore(s, o)),
      kn(n, er.NAVBAR_TOGGLER).forEach((o) => this.restore(s, o));
  }
}
let Fi;
function $w(e) {
  return Fi || (Fi = new Wm(e)), Fi;
}
const Hm = y.createContext({ onHide() {} }),
  Fw = y.forwardRef(
    (
      {
        closeLabel: e = "Close",
        closeVariant: t,
        closeButton: n = !1,
        onHide: r,
        children: s,
        ...o
      },
      l
    ) => {
      const a = y.useContext(Hm),
        u = Le(() => {
          a == null || a.onHide(), r == null || r();
        });
      return i.jsxs("div", {
        ref: l,
        ...o,
        children: [
          s,
          n && i.jsx(Bl, { "aria-label": e, variant: t, onClick: u }),
        ],
      });
    }
  );
var uf = { exports: {} },
  Ka = { exports: {} };
(function (e, t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = n);
  function n(r) {
    function s(l, a, u, c, d, f) {
      var p = c || "<<anonymous>>",
        v = f || u;
      if (a[u] == null)
        return l
          ? new Error(
              "Required " +
                d +
                " `" +
                v +
                "` was not specified " +
                ("in `" + p + "`.")
            )
          : null;
      for (
        var h = arguments.length, j = Array(h > 6 ? h - 6 : 0), w = 6;
        w < h;
        w++
      )
        j[w - 6] = arguments[w];
      return r.apply(void 0, [a, u, p, d, v].concat(j));
    }
    var o = s.bind(null, !1);
    return (o.isRequired = s.bind(null, !0)), o;
  }
  e.exports = t.default;
})(Ka, Ka.exports);
var Aw = Ka.exports;
(function (e, t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = o);
  var n = Aw,
    r = s(n);
  function s(l) {
    return l && l.__esModule ? l : { default: l };
  }
  function o() {
    for (var l = arguments.length, a = Array(l), u = 0; u < l; u++)
      a[u] = arguments[u];
    function c() {
      for (var d = arguments.length, f = Array(d), p = 0; p < d; p++)
        f[p] = arguments[p];
      var v = null;
      return (
        a.forEach(function (h) {
          if (v == null) {
            var j = h.apply(void 0, f);
            j != null && (v = j);
          }
        }),
        v
      );
    }
    return (0, r.default)(c);
  }
  e.exports = t.default;
})(uf, uf.exports);
const Vm = y.forwardRef(
  ({ className: e, bsPrefix: t, as: n = "div", ...r }, s) => (
    (t = U(t, "nav-item")), i.jsx(n, { ref: s, className: $(e, t), ...r })
  )
);
Vm.displayName = "NavItem";
const Km = y.forwardRef(
  (
    {
      bsPrefix: e,
      className: t,
      as: n = Ul,
      active: r,
      eventKey: s,
      disabled: o = !1,
      ...l
    },
    a
  ) => {
    e = U(e, "nav-link");
    const [u, c] = yc({ key: bl(s, l.href), active: r, disabled: o, ...l });
    return i.jsx(n, {
      ...l,
      ...u,
      ref: a,
      disabled: o,
      className: $(t, e, o && "disabled", c.isActive && "active"),
    });
  }
);
Km.displayName = "NavLink";
const Gm = y.forwardRef((e, t) => {
  const {
      as: n = "div",
      bsPrefix: r,
      variant: s,
      fill: o = !1,
      justify: l = !1,
      navbar: a,
      navbarScroll: u,
      className: c,
      activeKey: d,
      ...f
    } = Ml(e, { activeKey: "onSelect" }),
    p = U(r, "nav");
  let v,
    h,
    j = !1;
  const w = y.useContext(Kn),
    x = y.useContext(Nm);
  return (
    w
      ? ((v = w.bsPrefix), (j = a ?? !0))
      : x && ({ cardHeaderBsPrefix: h } = x),
    i.jsx(zm, {
      as: n,
      ref: t,
      activeKey: d,
      className: $(c, {
        [p]: !j,
        [`${v}-nav`]: j,
        [`${v}-nav-scroll`]: j && u,
        [`${h}-${s}`]: !!h,
        [`${p}-${s}`]: !!s,
        [`${p}-fill`]: o,
        [`${p}-justified`]: l,
      }),
      ...f,
    })
  );
});
Gm.displayName = "Nav";
const Qm = Object.assign(Gm, { Item: Vm, Link: Km }),
  Jm = y.forwardRef(({ bsPrefix: e, className: t, as: n, ...r }, s) => {
    e = U(e, "navbar-brand");
    const o = n || (r.href ? "a" : "span");
    return i.jsx(o, { ...r, ref: s, className: $(t, e) });
  });
Jm.displayName = "NavbarBrand";
const qm = y.forwardRef(({ children: e, bsPrefix: t, ...n }, r) => {
  t = U(t, "navbar-collapse");
  const s = y.useContext(Kn);
  return i.jsx($1, {
    in: !!(s && s.expanded),
    ...n,
    children: i.jsx("div", { ref: r, className: t, children: e }),
  });
});
qm.displayName = "NavbarCollapse";
const Xm = y.forwardRef(
  (
    {
      bsPrefix: e,
      className: t,
      children: n,
      label: r = "Toggle navigation",
      as: s = "button",
      onClick: o,
      ...l
    },
    a
  ) => {
    e = U(e, "navbar-toggler");
    const { onToggle: u, expanded: c } = y.useContext(Kn) || {},
      d = Le((f) => {
        o && o(f), u && u();
      });
    return (
      s === "button" && (l.type = "button"),
      i.jsx(s, {
        ...l,
        ref: a,
        onClick: d,
        "aria-label": r,
        className: $(t, e, !c && "collapsed"),
        children: n || i.jsx("span", { className: `${e}-icon` }),
      })
    );
  }
);
Xm.displayName = "NavbarToggle";
const Ga = new WeakMap(),
  cf = (e, t) => {
    if (!e || !t) return;
    const n = Ga.get(t) || new Map();
    Ga.set(t, n);
    let r = n.get(e);
    return r || ((r = t.matchMedia(e)), (r.refCount = 0), n.set(r.media, r)), r;
  };
function Mw(e, t = typeof window > "u" ? void 0 : window) {
  const n = cf(e, t),
    [r, s] = y.useState(() => (n ? n.matches : !1));
  return (
    Va(() => {
      let o = cf(e, t);
      if (!o) return s(!1);
      let l = Ga.get(t);
      const a = () => {
        s(o.matches);
      };
      return (
        o.refCount++,
        o.addListener(a),
        a(),
        () => {
          o.removeListener(a),
            o.refCount--,
            o.refCount <= 0 && (l == null || l.delete(o.media)),
            (o = void 0);
        }
      );
    }, [e]),
    r
  );
}
function zw(e) {
  const t = Object.keys(e);
  function n(a, u) {
    return a === u ? u : a ? `${a} and ${u}` : u;
  }
  function r(a) {
    return t[Math.min(t.indexOf(a) + 1, t.length - 1)];
  }
  function s(a) {
    const u = r(a);
    let c = e[u];
    return (
      typeof c == "number" ? (c = `${c - 0.2}px`) : (c = `calc(${c} - 0.2px)`),
      `(max-width: ${c})`
    );
  }
  function o(a) {
    let u = e[a];
    return typeof u == "number" && (u = `${u}px`), `(min-width: ${u})`;
  }
  function l(a, u, c) {
    let d;
    typeof a == "object"
      ? ((d = a), (c = u), (u = !0))
      : ((u = u || !0), (d = { [a]: u }));
    let f = y.useMemo(
      () =>
        Object.entries(d).reduce(
          (p, [v, h]) => (
            (h === "up" || h === !0) && (p = n(p, o(v))),
            (h === "down" || h === !0) && (p = n(p, s(v))),
            p
          ),
          ""
        ),
      [JSON.stringify(d)]
    );
    return Mw(f, c);
  }
  return l;
}
const Uw = zw({ xs: 0, sm: 576, md: 768, lg: 992, xl: 1200, xxl: 1400 }),
  Ym = y.forwardRef(
    ({ className: e, bsPrefix: t, as: n = "div", ...r }, s) => (
      (t = U(t, "offcanvas-body")),
      i.jsx(n, { ref: s, className: $(e, t), ...r })
    )
  );
Ym.displayName = "OffcanvasBody";
const Bw = { [pt]: "show", [Dt]: "show" },
  Zm = y.forwardRef(
    (
      {
        bsPrefix: e,
        className: t,
        children: n,
        in: r = !1,
        mountOnEnter: s = !1,
        unmountOnExit: o = !1,
        appear: l = !1,
        ...a
      },
      u
    ) => (
      (e = U(e, "offcanvas")),
      i.jsx(ac, {
        ref: u,
        addEndListener: ic,
        in: r,
        mountOnEnter: s,
        unmountOnExit: o,
        appear: l,
        ...a,
        childRef: n.ref,
        children: (c, d) =>
          y.cloneElement(n, {
            ...d,
            className: $(
              t,
              n.props.className,
              (c === pt || c === Os) && `${e}-toggling`,
              Bw[c]
            ),
          }),
      })
    )
  );
Zm.displayName = "OffcanvasToggling";
const ey = y.forwardRef(
  (
    {
      bsPrefix: e,
      className: t,
      closeLabel: n = "Close",
      closeButton: r = !1,
      ...s
    },
    o
  ) => (
    (e = U(e, "offcanvas-header")),
    i.jsx(Fw, {
      ref: o,
      ...s,
      className: $(t, e),
      closeLabel: n,
      closeButton: r,
    })
  )
);
ey.displayName = "OffcanvasHeader";
const bw = xm("h5"),
  ty = y.forwardRef(
    ({ className: e, bsPrefix: t, as: n = bw, ...r }, s) => (
      (t = U(t, "offcanvas-title")),
      i.jsx(n, { ref: s, className: $(e, t), ...r })
    )
  );
ty.displayName = "OffcanvasTitle";
function Ww(e) {
  return i.jsx(Zm, { ...e });
}
function Hw(e) {
  return i.jsx(ll, { ...e });
}
const ny = y.forwardRef(
  (
    {
      bsPrefix: e,
      className: t,
      children: n,
      "aria-labelledby": r,
      placement: s = "start",
      responsive: o,
      show: l = !1,
      backdrop: a = !0,
      keyboard: u = !0,
      scroll: c = !1,
      onEscapeKeyDown: d,
      onShow: f,
      onHide: p,
      container: v,
      autoFocus: h = !0,
      enforceFocus: j = !0,
      restoreFocus: w = !0,
      restoreFocusOptions: x,
      onEntered: g,
      onExit: m,
      onExiting: S,
      onEnter: N,
      onEntering: C,
      onExited: k,
      backdropClassName: P,
      manager: b,
      renderStaticNode: D = !1,
      ...ae
    },
    Ot
  ) => {
    const lt = y.useRef();
    e = U(e, "offcanvas");
    const { onToggle: En } = y.useContext(Kn) || {},
      [qn, Ye] = y.useState(!1),
      it = Uw(o || "xs", "up");
    y.useEffect(() => {
      Ye(o ? l && !it : l);
    }, [l, o, it]);
    const O = Le(() => {
        En == null || En(), p == null || p();
      }),
      A = y.useMemo(() => ({ onHide: O }), [O]);
    function M() {
      return (
        b ||
        (c
          ? (lt.current ||
              (lt.current = new Wm({ handleContainerOverflow: !1 })),
            lt.current)
          : $w())
      );
    }
    const G = (pe, ...ze) => {
        pe && (pe.style.visibility = "visible"), N == null || N(pe, ...ze);
      },
      Z = (pe, ...ze) => {
        pe && (pe.style.visibility = ""), k == null || k(...ze);
      },
      at = y.useCallback(
        (pe) => i.jsx("div", { ...pe, className: $(`${e}-backdrop`, P) }),
        [P, e]
      ),
      Me = (pe) =>
        i.jsx("div", {
          ...pe,
          ...ae,
          className: $(t, o ? `${e}-${o}` : e, `${e}-${s}`),
          "aria-labelledby": r,
          children: n,
        });
    return i.jsxs(i.Fragment, {
      children: [
        !qn && (o || D) && Me({}),
        i.jsx(Hm.Provider, {
          value: A,
          children: i.jsx(Tw, {
            show: qn,
            ref: Ot,
            backdrop: a,
            container: v,
            keyboard: u,
            autoFocus: h,
            enforceFocus: j && !c,
            restoreFocus: w,
            restoreFocusOptions: x,
            onEscapeKeyDown: d,
            onShow: f,
            onHide: O,
            onEnter: G,
            onEntering: C,
            onEntered: g,
            onExit: m,
            onExiting: S,
            onExited: Z,
            manager: M(),
            transition: Ww,
            backdropTransition: Hw,
            renderBackdrop: at,
            renderDialog: Me,
          }),
        }),
      ],
    });
  }
);
ny.displayName = "Offcanvas";
const Vw = Object.assign(ny, { Body: Ym, Header: ey, Title: ty }),
  ry = y.forwardRef((e, t) => {
    const n = y.useContext(Kn);
    return i.jsx(Vw, {
      ref: t,
      show: !!(n != null && n.expanded),
      ...e,
      renderStaticNode: !0,
    });
  });
ry.displayName = "NavbarOffcanvas";
const sy = y.forwardRef(
  ({ className: e, bsPrefix: t, as: n = "span", ...r }, s) => (
    (t = U(t, "navbar-text")), i.jsx(n, { ref: s, className: $(e, t), ...r })
  )
);
sy.displayName = "NavbarText";
const oy = y.forwardRef((e, t) => {
  const {
      bsPrefix: n,
      expand: r = !0,
      variant: s = "light",
      bg: o,
      fixed: l,
      sticky: a,
      className: u,
      as: c = "nav",
      expanded: d,
      onToggle: f,
      onSelect: p,
      collapseOnSelect: v = !1,
      ...h
    } = Ml(e, { expanded: "onToggle" }),
    j = U(n, "navbar"),
    w = y.useCallback(
      (...m) => {
        p == null || p(...m), v && d && (f == null || f(!1));
      },
      [p, v, d, f]
    );
  h.role === void 0 && c !== "nav" && (h.role = "navigation");
  let x = `${j}-expand`;
  typeof r == "string" && (x = `${x}-${r}`);
  const g = y.useMemo(
    () => ({
      onToggle: () => (f == null ? void 0 : f(!d)),
      bsPrefix: j,
      expanded: !!d,
      expand: r,
    }),
    [j, d, r, f]
  );
  return i.jsx(Kn.Provider, {
    value: g,
    children: i.jsx(il.Provider, {
      value: w,
      children: i.jsx(c, {
        ref: t,
        ...h,
        className: $(
          u,
          j,
          r && x,
          s && `${j}-${s}`,
          o && `bg-${o}`,
          a && `sticky-${a}`,
          l && `fixed-${l}`
        ),
      }),
    }),
  });
});
oy.displayName = "Navbar";
const cl = Object.assign(oy, {
    Brand: Jm,
    Collapse: qm,
    Offcanvas: ry,
    Text: sy,
    Toggle: Xm,
  }),
  vc = y.forwardRef(
    (
      {
        active: e = !1,
        disabled: t = !1,
        className: n,
        style: r,
        activeLabel: s = "(current)",
        children: o,
        linkStyle: l,
        linkClassName: a,
        as: u = Ul,
        ...c
      },
      d
    ) => {
      const f = e || t ? "span" : u;
      return i.jsx("li", {
        ref: d,
        style: r,
        className: $(n, "page-item", { active: e, disabled: t }),
        children: i.jsxs(f, {
          className: $("page-link", a),
          style: l,
          ...c,
          children: [
            o,
            e &&
              s &&
              i.jsx("span", { className: "visually-hidden", children: s }),
          ],
        }),
      });
    }
  );
vc.displayName = "PageItem";
const Kw = vc;
function Ws(e, t, n = e) {
  const r = y.forwardRef(({ children: s, ...o }, l) =>
    i.jsxs(vc, {
      ...o,
      ref: l,
      children: [
        i.jsx("span", { "aria-hidden": "true", children: s || t }),
        i.jsx("span", { className: "visually-hidden", children: n }),
      ],
    })
  );
  return (r.displayName = e), r;
}
const Gw = Ws("First", "«"),
  Qw = Ws("Prev", "‹", "Previous"),
  Jw = Ws("Ellipsis", "…", "More"),
  qw = Ws("Next", "›"),
  Xw = Ws("Last", "»"),
  ly = y.forwardRef(({ bsPrefix: e, className: t, size: n, ...r }, s) => {
    const o = U(e, "pagination");
    return i.jsx("ul", { ref: s, ...r, className: $(t, o, n && `${o}-${n}`) });
  });
ly.displayName = "Pagination";
const mo = Object.assign(ly, {
    First: Gw,
    Prev: Qw,
    Ellipsis: Jw,
    Item: Kw,
    Next: qw,
    Last: Xw,
  }),
  I = y.forwardRef(({ bsPrefix: e, className: t, as: n = "div", ...r }, s) => {
    const o = U(e, "row"),
      l = fm(),
      a = pm(),
      u = `${o}-cols`,
      c = [];
    return (
      l.forEach((d) => {
        const f = r[d];
        delete r[d];
        let p;
        f != null && typeof f == "object" ? ({ cols: p } = f) : (p = f);
        const v = d !== a ? `-${d}` : "";
        p != null && c.push(`${u}${v}-${p}`);
      }),
      i.jsx(n, { ref: s, ...r, className: $(t, o, ...c) })
    );
  });
I.displayName = "Row";
const iy = y.forwardRef(
  (
    {
      bsPrefix: e,
      variant: t,
      animation: n = "border",
      size: r,
      as: s = "div",
      className: o,
      ...l
    },
    a
  ) => {
    e = U(e, "spinner");
    const u = `${e}-${n}`;
    return i.jsx(s, {
      ref: a,
      ...l,
      className: $(o, u, r && `${u}-${r}`, t && `text-${t}`),
    });
  }
);
iy.displayName = "Spinner";
const wt = y.forwardRef(
  (
    {
      bsPrefix: e,
      className: t,
      striped: n,
      bordered: r,
      borderless: s,
      hover: o,
      size: l,
      variant: a,
      responsive: u,
      ...c
    },
    d
  ) => {
    const f = U(e, "table"),
      p = $(
        t,
        f,
        a && `${f}-${a}`,
        l && `${f}-${l}`,
        n && `${f}-${typeof n == "string" ? `striped-${n}` : "striped"}`,
        r && `${f}-bordered`,
        s && `${f}-borderless`,
        o && `${f}-hover`
      ),
      v = i.jsx("table", { ...c, className: p, ref: d });
    if (u) {
      let h = `${f}-responsive`;
      return (
        typeof u == "string" && (h = `${h}-${u}`),
        i.jsx("div", { className: h, children: v })
      );
    }
    return v;
  }
);
function ye(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var Yw = (typeof Symbol == "function" && Symbol.observable) || "@@observable",
  df = Yw,
  Ai = () => Math.random().toString(36).substring(7).split("").join("."),
  Zw = {
    INIT: `@@redux/INIT${Ai()}`,
    REPLACE: `@@redux/REPLACE${Ai()}`,
    PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${Ai()}`,
  },
  dl = Zw;
function xc(e) {
  if (typeof e != "object" || e === null) return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; ) t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function ay(e, t, n) {
  if (typeof e != "function") throw new Error(ye(2));
  if (
    (typeof t == "function" && typeof n == "function") ||
    (typeof n == "function" && typeof arguments[3] == "function")
  )
    throw new Error(ye(0));
  if (
    (typeof t == "function" && typeof n > "u" && ((n = t), (t = void 0)),
    typeof n < "u")
  ) {
    if (typeof n != "function") throw new Error(ye(1));
    return n(ay)(e, t);
  }
  let r = e,
    s = t,
    o = new Map(),
    l = o,
    a = 0,
    u = !1;
  function c() {
    l === o &&
      ((l = new Map()),
      o.forEach((w, x) => {
        l.set(x, w);
      }));
  }
  function d() {
    if (u) throw new Error(ye(3));
    return s;
  }
  function f(w) {
    if (typeof w != "function") throw new Error(ye(4));
    if (u) throw new Error(ye(5));
    let x = !0;
    c();
    const g = a++;
    return (
      l.set(g, w),
      function () {
        if (x) {
          if (u) throw new Error(ye(6));
          (x = !1), c(), l.delete(g), (o = null);
        }
      }
    );
  }
  function p(w) {
    if (!xc(w)) throw new Error(ye(7));
    if (typeof w.type > "u") throw new Error(ye(8));
    if (typeof w.type != "string") throw new Error(ye(17));
    if (u) throw new Error(ye(9));
    try {
      (u = !0), (s = r(s, w));
    } finally {
      u = !1;
    }
    return (
      (o = l).forEach((g) => {
        g();
      }),
      w
    );
  }
  function v(w) {
    if (typeof w != "function") throw new Error(ye(10));
    (r = w), p({ type: dl.REPLACE });
  }
  function h() {
    const w = f;
    return {
      subscribe(x) {
        if (typeof x != "object" || x === null) throw new Error(ye(11));
        function g() {
          const S = x;
          S.next && S.next(d());
        }
        return g(), { unsubscribe: w(g) };
      },
      [df]() {
        return this;
      },
    };
  }
  return (
    p({ type: dl.INIT }),
    { dispatch: p, subscribe: f, getState: d, replaceReducer: v, [df]: h }
  );
}
function ej(e) {
  Object.keys(e).forEach((t) => {
    const n = e[t];
    if (typeof n(void 0, { type: dl.INIT }) > "u") throw new Error(ye(12));
    if (typeof n(void 0, { type: dl.PROBE_UNKNOWN_ACTION() }) > "u")
      throw new Error(ye(13));
  });
}
function tj(e) {
  const t = Object.keys(e),
    n = {};
  for (let o = 0; o < t.length; o++) {
    const l = t[o];
    typeof e[l] == "function" && (n[l] = e[l]);
  }
  const r = Object.keys(n);
  let s;
  try {
    ej(n);
  } catch (o) {
    s = o;
  }
  return function (l = {}, a) {
    if (s) throw s;
    let u = !1;
    const c = {};
    for (let d = 0; d < r.length; d++) {
      const f = r[d],
        p = n[f],
        v = l[f],
        h = p(v, a);
      if (typeof h > "u") throw (a && a.type, new Error(ye(14)));
      (c[f] = h), (u = u || h !== v);
    }
    return (u = u || r.length !== Object.keys(l).length), u ? c : l;
  };
}
function fl(...e) {
  return e.length === 0
    ? (t) => t
    : e.length === 1
    ? e[0]
    : e.reduce(
        (t, n) =>
          (...r) =>
            t(n(...r))
      );
}
function nj(...e) {
  return (t) => (n, r) => {
    const s = t(n, r);
    let o = () => {
      throw new Error(ye(15));
    };
    const l = { getState: s.getState, dispatch: (u, ...c) => o(u, ...c) },
      a = e.map((u) => u(l));
    return (o = fl(...a)(s.dispatch)), { ...s, dispatch: o };
  };
}
function rj(e) {
  return xc(e) && "type" in e && typeof e.type == "string";
}
var uy = Symbol.for("immer-nothing"),
  ff = Symbol.for("immer-draftable"),
  Ge = Symbol.for("immer-state");
function ht(e, ...t) {
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var Rr = Object.getPrototypeOf;
function Un(e) {
  return !!e && !!e[Ge];
}
function Ht(e) {
  var t;
  return e
    ? cy(e) ||
        Array.isArray(e) ||
        !!e[ff] ||
        !!((t = e.constructor) != null && t[ff]) ||
        Gl(e) ||
        Ql(e)
    : !1;
}
var sj = Object.prototype.constructor.toString();
function cy(e) {
  if (!e || typeof e != "object") return !1;
  const t = Rr(e);
  if (t === null) return !0;
  const n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return n === Object
    ? !0
    : typeof n == "function" && Function.toString.call(n) === sj;
}
function pl(e, t) {
  Kl(e) === 0
    ? Reflect.ownKeys(e).forEach((n) => {
        t(n, e[n], e);
      })
    : e.forEach((n, r) => t(r, n, e));
}
function Kl(e) {
  const t = e[Ge];
  return t ? t.type_ : Array.isArray(e) ? 1 : Gl(e) ? 2 : Ql(e) ? 3 : 0;
}
function Qa(e, t) {
  return Kl(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function dy(e, t, n) {
  const r = Kl(e);
  r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : (e[t] = n);
}
function oj(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Gl(e) {
  return e instanceof Map;
}
function Ql(e) {
  return e instanceof Set;
}
function _n(e) {
  return e.copy_ || e.base_;
}
function Ja(e, t) {
  if (Gl(e)) return new Map(e);
  if (Ql(e)) return new Set(e);
  if (Array.isArray(e)) return Array.prototype.slice.call(e);
  const n = cy(e);
  if (t === !0 || (t === "class_only" && !n)) {
    const r = Object.getOwnPropertyDescriptors(e);
    delete r[Ge];
    let s = Reflect.ownKeys(r);
    for (let o = 0; o < s.length; o++) {
      const l = s[o],
        a = r[l];
      a.writable === !1 && ((a.writable = !0), (a.configurable = !0)),
        (a.get || a.set) &&
          (r[l] = {
            configurable: !0,
            writable: !0,
            enumerable: a.enumerable,
            value: e[l],
          });
    }
    return Object.create(Rr(e), r);
  } else {
    const r = Rr(e);
    if (r !== null && n) return { ...e };
    const s = Object.create(r);
    return Object.assign(s, e);
  }
}
function wc(e, t = !1) {
  return (
    Jl(e) ||
      Un(e) ||
      !Ht(e) ||
      (Kl(e) > 1 && (e.set = e.add = e.clear = e.delete = lj),
      Object.freeze(e),
      t && Object.entries(e).forEach(([n, r]) => wc(r, !0))),
    e
  );
}
function lj() {
  ht(2);
}
function Jl(e) {
  return Object.isFrozen(e);
}
var ij = {};
function Bn(e) {
  const t = ij[e];
  return t || ht(0, e), t;
}
var Ts;
function fy() {
  return Ts;
}
function aj(e, t) {
  return {
    drafts_: [],
    parent_: e,
    immer_: t,
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0,
  };
}
function pf(e, t) {
  t &&
    (Bn("Patches"),
    (e.patches_ = []),
    (e.inversePatches_ = []),
    (e.patchListener_ = t));
}
function qa(e) {
  Xa(e), e.drafts_.forEach(uj), (e.drafts_ = null);
}
function Xa(e) {
  e === Ts && (Ts = e.parent_);
}
function hf(e) {
  return (Ts = aj(Ts, e));
}
function uj(e) {
  const t = e[Ge];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : (t.revoked_ = !0);
}
function mf(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const n = t.drafts_[0];
  return (
    e !== void 0 && e !== n
      ? (n[Ge].modified_ && (qa(t), ht(4)),
        Ht(e) && ((e = hl(t, e)), t.parent_ || ml(t, e)),
        t.patches_ &&
          Bn("Patches").generateReplacementPatches_(
            n[Ge].base_,
            e,
            t.patches_,
            t.inversePatches_
          ))
      : (e = hl(t, n, [])),
    qa(t),
    t.patches_ && t.patchListener_(t.patches_, t.inversePatches_),
    e !== uy ? e : void 0
  );
}
function hl(e, t, n) {
  if (Jl(t)) return t;
  const r = t[Ge];
  if (!r) return pl(t, (s, o) => yf(e, r, t, s, o, n)), t;
  if (r.scope_ !== e) return t;
  if (!r.modified_) return ml(e, r.base_, !0), r.base_;
  if (!r.finalized_) {
    (r.finalized_ = !0), r.scope_.unfinalizedDrafts_--;
    const s = r.copy_;
    let o = s,
      l = !1;
    r.type_ === 3 && ((o = new Set(s)), s.clear(), (l = !0)),
      pl(o, (a, u) => yf(e, r, s, a, u, n, l)),
      ml(e, s, !1),
      n &&
        e.patches_ &&
        Bn("Patches").generatePatches_(r, n, e.patches_, e.inversePatches_);
  }
  return r.copy_;
}
function yf(e, t, n, r, s, o, l) {
  if (Un(s)) {
    const a =
        o && t && t.type_ !== 3 && !Qa(t.assigned_, r) ? o.concat(r) : void 0,
      u = hl(e, s, a);
    if ((dy(n, r, u), Un(u))) e.canAutoFreeze_ = !1;
    else return;
  } else l && n.add(s);
  if (Ht(s) && !Jl(s)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1) return;
    hl(e, s),
      (!t || !t.scope_.parent_) &&
        typeof r != "symbol" &&
        Object.prototype.propertyIsEnumerable.call(n, r) &&
        ml(e, s);
  }
}
function ml(e, t, n = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && wc(t, n);
}
function cj(e, t) {
  const n = Array.isArray(e),
    r = {
      type_: n ? 1 : 0,
      scope_: t ? t.scope_ : fy(),
      modified_: !1,
      finalized_: !1,
      assigned_: {},
      parent_: t,
      base_: e,
      draft_: null,
      copy_: null,
      revoke_: null,
      isManual_: !1,
    };
  let s = r,
    o = jc;
  n && ((s = [r]), (o = Ls));
  const { revoke: l, proxy: a } = Proxy.revocable(s, o);
  return (r.draft_ = a), (r.revoke_ = l), a;
}
var jc = {
    get(e, t) {
      if (t === Ge) return e;
      const n = _n(e);
      if (!Qa(n, t)) return dj(e, n, t);
      const r = n[t];
      return e.finalized_ || !Ht(r)
        ? r
        : r === Mi(e.base_, t)
        ? (zi(e), (e.copy_[t] = Za(r, e)))
        : r;
    },
    has(e, t) {
      return t in _n(e);
    },
    ownKeys(e) {
      return Reflect.ownKeys(_n(e));
    },
    set(e, t, n) {
      const r = py(_n(e), t);
      if (r != null && r.set) return r.set.call(e.draft_, n), !0;
      if (!e.modified_) {
        const s = Mi(_n(e), t),
          o = s == null ? void 0 : s[Ge];
        if (o && o.base_ === n)
          return (e.copy_[t] = n), (e.assigned_[t] = !1), !0;
        if (oj(n, s) && (n !== void 0 || Qa(e.base_, t))) return !0;
        zi(e), Ya(e);
      }
      return (
        (e.copy_[t] === n && (n !== void 0 || t in e.copy_)) ||
          (Number.isNaN(n) && Number.isNaN(e.copy_[t])) ||
          ((e.copy_[t] = n), (e.assigned_[t] = !0)),
        !0
      );
    },
    deleteProperty(e, t) {
      return (
        Mi(e.base_, t) !== void 0 || t in e.base_
          ? ((e.assigned_[t] = !1), zi(e), Ya(e))
          : delete e.assigned_[t],
        e.copy_ && delete e.copy_[t],
        !0
      );
    },
    getOwnPropertyDescriptor(e, t) {
      const n = _n(e),
        r = Reflect.getOwnPropertyDescriptor(n, t);
      return (
        r && {
          writable: !0,
          configurable: e.type_ !== 1 || t !== "length",
          enumerable: r.enumerable,
          value: n[t],
        }
      );
    },
    defineProperty() {
      ht(11);
    },
    getPrototypeOf(e) {
      return Rr(e.base_);
    },
    setPrototypeOf() {
      ht(12);
    },
  },
  Ls = {};
pl(jc, (e, t) => {
  Ls[e] = function () {
    return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
  };
});
Ls.deleteProperty = function (e, t) {
  return Ls.set.call(this, e, t, void 0);
};
Ls.set = function (e, t, n) {
  return jc.set.call(this, e[0], t, n, e[0]);
};
function Mi(e, t) {
  const n = e[Ge];
  return (n ? _n(n) : e)[t];
}
function dj(e, t, n) {
  var s;
  const r = py(t, n);
  return r
    ? "value" in r
      ? r.value
      : (s = r.get) == null
      ? void 0
      : s.call(e.draft_)
    : void 0;
}
function py(e, t) {
  if (!(t in e)) return;
  let n = Rr(e);
  for (; n; ) {
    const r = Object.getOwnPropertyDescriptor(n, t);
    if (r) return r;
    n = Rr(n);
  }
}
function Ya(e) {
  e.modified_ || ((e.modified_ = !0), e.parent_ && Ya(e.parent_));
}
function zi(e) {
  e.copy_ || (e.copy_ = Ja(e.base_, e.scope_.immer_.useStrictShallowCopy_));
}
var fj = class {
  constructor(e) {
    (this.autoFreeze_ = !0),
      (this.useStrictShallowCopy_ = !1),
      (this.produce = (t, n, r) => {
        if (typeof t == "function" && typeof n != "function") {
          const o = n;
          n = t;
          const l = this;
          return function (u = o, ...c) {
            return l.produce(u, (d) => n.call(this, d, ...c));
          };
        }
        typeof n != "function" && ht(6),
          r !== void 0 && typeof r != "function" && ht(7);
        let s;
        if (Ht(t)) {
          const o = hf(this),
            l = Za(t, void 0);
          let a = !0;
          try {
            (s = n(l)), (a = !1);
          } finally {
            a ? qa(o) : Xa(o);
          }
          return pf(o, r), mf(s, o);
        } else if (!t || typeof t != "object") {
          if (
            ((s = n(t)),
            s === void 0 && (s = t),
            s === uy && (s = void 0),
            this.autoFreeze_ && wc(s, !0),
            r)
          ) {
            const o = [],
              l = [];
            Bn("Patches").generateReplacementPatches_(t, s, o, l), r(o, l);
          }
          return s;
        } else ht(1, t);
      }),
      (this.produceWithPatches = (t, n) => {
        if (typeof t == "function")
          return (l, ...a) => this.produceWithPatches(l, (u) => t(u, ...a));
        let r, s;
        return [
          this.produce(t, n, (l, a) => {
            (r = l), (s = a);
          }),
          r,
          s,
        ];
      }),
      typeof (e == null ? void 0 : e.autoFreeze) == "boolean" &&
        this.setAutoFreeze(e.autoFreeze),
      typeof (e == null ? void 0 : e.useStrictShallowCopy) == "boolean" &&
        this.setUseStrictShallowCopy(e.useStrictShallowCopy);
  }
  createDraft(e) {
    Ht(e) || ht(8), Un(e) && (e = pj(e));
    const t = hf(this),
      n = Za(e, void 0);
    return (n[Ge].isManual_ = !0), Xa(t), n;
  }
  finishDraft(e, t) {
    const n = e && e[Ge];
    (!n || !n.isManual_) && ht(9);
    const { scope_: r } = n;
    return pf(r, t), mf(void 0, r);
  }
  setAutoFreeze(e) {
    this.autoFreeze_ = e;
  }
  setUseStrictShallowCopy(e) {
    this.useStrictShallowCopy_ = e;
  }
  applyPatches(e, t) {
    let n;
    for (n = t.length - 1; n >= 0; n--) {
      const s = t[n];
      if (s.path.length === 0 && s.op === "replace") {
        e = s.value;
        break;
      }
    }
    n > -1 && (t = t.slice(n + 1));
    const r = Bn("Patches").applyPatches_;
    return Un(e) ? r(e, t) : this.produce(e, (s) => r(s, t));
  }
};
function Za(e, t) {
  const n = Gl(e)
    ? Bn("MapSet").proxyMap_(e, t)
    : Ql(e)
    ? Bn("MapSet").proxySet_(e, t)
    : cj(e, t);
  return (t ? t.scope_ : fy()).drafts_.push(n), n;
}
function pj(e) {
  return Un(e) || ht(10, e), hy(e);
}
function hy(e) {
  if (!Ht(e) || Jl(e)) return e;
  const t = e[Ge];
  let n;
  if (t) {
    if (!t.modified_) return t.base_;
    (t.finalized_ = !0), (n = Ja(e, t.scope_.immer_.useStrictShallowCopy_));
  } else n = Ja(e, !0);
  return (
    pl(n, (r, s) => {
      dy(n, r, hy(s));
    }),
    t && (t.finalized_ = !1),
    n
  );
}
var Qe = new fj(),
  my = Qe.produce;
Qe.produceWithPatches.bind(Qe);
Qe.setAutoFreeze.bind(Qe);
Qe.setUseStrictShallowCopy.bind(Qe);
Qe.applyPatches.bind(Qe);
Qe.createDraft.bind(Qe);
Qe.finishDraft.bind(Qe);
function yy(e) {
  return ({ dispatch: n, getState: r }) =>
    (s) =>
    (o) =>
      typeof o == "function" ? o(n, r, e) : s(o);
}
var hj = yy(),
  mj = yy,
  yj =
    typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (arguments.length !== 0)
            return typeof arguments[0] == "object"
              ? fl
              : fl.apply(null, arguments);
        };
function gf(e, t) {
  function n(...r) {
    if (t) {
      let s = t(...r);
      if (!s) throw new Error(gt(0));
      return {
        type: e,
        payload: s.payload,
        ...("meta" in s && { meta: s.meta }),
        ...("error" in s && { error: s.error }),
      };
    }
    return { type: e, payload: r[0] };
  }
  return (
    (n.toString = () => `${e}`),
    (n.type = e),
    (n.match = (r) => rj(r) && r.type === e),
    n
  );
}
var gy = class ts extends Array {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, ts.prototype);
  }
  static get [Symbol.species]() {
    return ts;
  }
  concat(...t) {
    return super.concat.apply(this, t);
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0])
      ? new ts(...t[0].concat(this))
      : new ts(...t.concat(this));
  }
};
function vf(e) {
  return Ht(e) ? my(e, () => {}) : e;
}
function xf(e, t, n) {
  if (e.has(t)) {
    let s = e.get(t);
    return n.update && ((s = n.update(s, t, e)), e.set(t, s)), s;
  }
  if (!n.insert) throw new Error(gt(10));
  const r = n.insert(t, e);
  return e.set(t, r), r;
}
function gj(e) {
  return typeof e == "boolean";
}
var vj = () =>
    function (t) {
      const {
        thunk: n = !0,
        immutableCheck: r = !0,
        serializableCheck: s = !0,
        actionCreatorCheck: o = !0,
      } = t ?? {};
      let l = new gy();
      return n && (gj(n) ? l.push(hj) : l.push(mj(n.extraArgument))), l;
    },
  xj = "RTK_autoBatch",
  vy = (e) => (t) => {
    setTimeout(t, e);
  },
  wj =
    typeof window < "u" && window.requestAnimationFrame
      ? window.requestAnimationFrame
      : vy(10),
  jj =
    (e = { type: "raf" }) =>
    (t) =>
    (...n) => {
      const r = t(...n);
      let s = !0,
        o = !1,
        l = !1;
      const a = new Set(),
        u =
          e.type === "tick"
            ? queueMicrotask
            : e.type === "raf"
            ? wj
            : e.type === "callback"
            ? e.queueNotification
            : vy(e.timeout),
        c = () => {
          (l = !1), o && ((o = !1), a.forEach((d) => d()));
        };
      return Object.assign({}, r, {
        subscribe(d) {
          const f = () => s && d(),
            p = r.subscribe(f);
          return (
            a.add(d),
            () => {
              p(), a.delete(d);
            }
          );
        },
        dispatch(d) {
          var f;
          try {
            return (
              (s = !((f = d == null ? void 0 : d.meta) != null && f[xj])),
              (o = !s),
              o && (l || ((l = !0), u(c))),
              r.dispatch(d)
            );
          } finally {
            s = !0;
          }
        },
      });
    },
  Sj = (e) =>
    function (n) {
      const { autoBatch: r = !0 } = n ?? {};
      let s = new gy(e);
      return r && s.push(jj(typeof r == "object" ? r : void 0)), s;
    };
function Ej(e) {
  const t = vj(),
    {
      reducer: n = void 0,
      middleware: r,
      devTools: s = !0,
      preloadedState: o = void 0,
      enhancers: l = void 0,
    } = e || {};
  let a;
  if (typeof n == "function") a = n;
  else if (xc(n)) a = tj(n);
  else throw new Error(gt(1));
  let u;
  typeof r == "function" ? (u = r(t)) : (u = t());
  let c = fl;
  s && (c = yj({ trace: !1, ...(typeof s == "object" && s) }));
  const d = nj(...u),
    f = Sj(d);
  let p = typeof l == "function" ? l(f) : f();
  const v = c(...p);
  return ay(a, o, v);
}
function xy(e) {
  const t = {},
    n = [];
  let r;
  const s = {
    addCase(o, l) {
      const a = typeof o == "string" ? o : o.type;
      if (!a) throw new Error(gt(28));
      if (a in t) throw new Error(gt(29));
      return (t[a] = l), s;
    },
    addMatcher(o, l) {
      return n.push({ matcher: o, reducer: l }), s;
    },
    addDefaultCase(o) {
      return (r = o), s;
    },
  };
  return e(s), [t, n, r];
}
function Cj(e) {
  return typeof e == "function";
}
function Nj(e, t) {
  let [n, r, s] = xy(t),
    o;
  if (Cj(e)) o = () => vf(e());
  else {
    const a = vf(e);
    o = () => a;
  }
  function l(a = o(), u) {
    let c = [
      n[u.type],
      ...r.filter(({ matcher: d }) => d(u)).map(({ reducer: d }) => d),
    ];
    return (
      c.filter((d) => !!d).length === 0 && (c = [s]),
      c.reduce((d, f) => {
        if (f)
          if (Un(d)) {
            const v = f(d, u);
            return v === void 0 ? d : v;
          } else {
            if (Ht(d)) return my(d, (p) => f(p, u));
            {
              const p = f(d, u);
              if (p === void 0) {
                if (d === null) return d;
                throw new Error(gt(9));
              }
              return p;
            }
          }
        return d;
      }, a)
    );
  }
  return (l.getInitialState = o), l;
}
var kj = Symbol.for("rtk-slice-createasyncthunk");
function _j(e, t) {
  return `${e}/${t}`;
}
function Rj({ creators: e } = {}) {
  var n;
  const t = (n = e == null ? void 0 : e.asyncThunk) == null ? void 0 : n[kj];
  return function (s) {
    const { name: o, reducerPath: l = o } = s;
    if (!o) throw new Error(gt(11));
    typeof process < "u";
    const a =
        (typeof s.reducers == "function" ? s.reducers(Oj()) : s.reducers) || {},
      u = Object.keys(a),
      c = {
        sliceCaseReducersByName: {},
        sliceCaseReducersByType: {},
        actionCreators: {},
        sliceMatchers: [],
      },
      d = {
        addCase(m, S) {
          const N = typeof m == "string" ? m : m.type;
          if (!N) throw new Error(gt(12));
          if (N in c.sliceCaseReducersByType) throw new Error(gt(13));
          return (c.sliceCaseReducersByType[N] = S), d;
        },
        addMatcher(m, S) {
          return c.sliceMatchers.push({ matcher: m, reducer: S }), d;
        },
        exposeAction(m, S) {
          return (c.actionCreators[m] = S), d;
        },
        exposeCaseReducer(m, S) {
          return (c.sliceCaseReducersByName[m] = S), d;
        },
      };
    u.forEach((m) => {
      const S = a[m],
        N = {
          reducerName: m,
          type: _j(o, m),
          createNotation: typeof s.reducers == "function",
        };
      Lj(S) ? Dj(N, S, d, t) : Tj(N, S, d);
    });
    function f() {
      const [m = {}, S = [], N = void 0] =
          typeof s.extraReducers == "function"
            ? xy(s.extraReducers)
            : [s.extraReducers],
        C = { ...m, ...c.sliceCaseReducersByType };
      return Nj(s.initialState, (k) => {
        for (let P in C) k.addCase(P, C[P]);
        for (let P of c.sliceMatchers) k.addMatcher(P.matcher, P.reducer);
        for (let P of S) k.addMatcher(P.matcher, P.reducer);
        N && k.addDefaultCase(N);
      });
    }
    const p = (m) => m,
      v = new Map();
    let h;
    function j(m, S) {
      return h || (h = f()), h(m, S);
    }
    function w() {
      return h || (h = f()), h.getInitialState();
    }
    function x(m, S = !1) {
      function N(k) {
        let P = k[m];
        return typeof P > "u" && S && (P = w()), P;
      }
      function C(k = p) {
        const P = xf(v, S, { insert: () => new WeakMap() });
        return xf(P, k, {
          insert: () => {
            const b = {};
            for (const [D, ae] of Object.entries(s.selectors ?? {}))
              b[D] = Pj(ae, k, w, S);
            return b;
          },
        });
      }
      return {
        reducerPath: m,
        getSelectors: C,
        get selectors() {
          return C(N);
        },
        selectSlice: N,
      };
    }
    const g = {
      name: o,
      reducer: j,
      actions: c.actionCreators,
      caseReducers: c.sliceCaseReducersByName,
      getInitialState: w,
      ...x(l),
      injectInto(m, { reducerPath: S, ...N } = {}) {
        const C = S ?? l;
        return (
          m.inject({ reducerPath: C, reducer: j }, N), { ...g, ...x(C, !0) }
        );
      },
    };
    return g;
  };
}
function Pj(e, t, n, r) {
  function s(o, ...l) {
    let a = t(o);
    return typeof a > "u" && r && (a = n()), e(a, ...l);
  }
  return (s.unwrapped = e), s;
}
var Hs = Rj();
function Oj() {
  function e(t, n) {
    return { _reducerDefinitionType: "asyncThunk", payloadCreator: t, ...n };
  }
  return (
    (e.withTypes = () => e),
    {
      reducer(t) {
        return Object.assign(
          {
            [t.name](...n) {
              return t(...n);
            },
          }[t.name],
          { _reducerDefinitionType: "reducer" }
        );
      },
      preparedReducer(t, n) {
        return {
          _reducerDefinitionType: "reducerWithPrepare",
          prepare: t,
          reducer: n,
        };
      },
      asyncThunk: e,
    }
  );
}
function Tj({ type: e, reducerName: t, createNotation: n }, r, s) {
  let o, l;
  if ("reducer" in r) {
    if (n && !Ij(r)) throw new Error(gt(17));
    (o = r.reducer), (l = r.prepare);
  } else o = r;
  s.addCase(e, o)
    .exposeCaseReducer(t, o)
    .exposeAction(t, l ? gf(e, l) : gf(e));
}
function Lj(e) {
  return e._reducerDefinitionType === "asyncThunk";
}
function Ij(e) {
  return e._reducerDefinitionType === "reducerWithPrepare";
}
function Dj({ type: e, reducerName: t }, n, r, s) {
  if (!s) throw new Error(gt(18));
  const {
      payloadCreator: o,
      fulfilled: l,
      pending: a,
      rejected: u,
      settled: c,
      options: d,
    } = n,
    f = s(e, o, d);
  r.exposeAction(t, f),
    l && r.addCase(f.fulfilled, l),
    a && r.addCase(f.pending, a),
    u && r.addCase(f.rejected, u),
    c && r.addMatcher(f.settled, c),
    r.exposeCaseReducer(t, {
      fulfilled: l || yo,
      pending: a || yo,
      rejected: u || yo,
      settled: c || yo,
    });
}
function yo() {}
function gt(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
const wy = Hs({
    name: "product",
    initialState: {
      products: [],
      product: {},
      pages: 0,
      loading: !1,
      success: !1,
      error: !1,
    },
    reducers: {
      Initial: (e) => {
        (e.loading = !1), (e.success = !1), (e.error = !1);
      },
      Loading: (e) => {
        (e.loading = !0), (e.success = !1), (e.error = !1);
      },
      Success: (e) => {
        (e.loading = !1), (e.success = !0), (e.error = !1);
      },
      ListProduct: (e, t) => {
        (e.products = t.payload.products),
          (e.pages = t.payload.pages),
          (e.loading = !1),
          (e.success = !0),
          (e.error = !1);
      },
      GetProduct: (e, t) => {
        (e.product = t.payload),
          (e.loading = !1),
          (e.success = !0),
          (e.error = !1);
      },
      Delete: (e, t) => {
        (e.products = e.products.filter((n) => n.Id !== t.payload)),
          (e.loading = !1),
          (e.success = !0),
          (e.error = !1);
      },
      Error: (e) => {
        (e.loading = !1), (e.success = !1), (e.error = !0);
      },
    },
  }),
  {
    Initial: bn,
    Loading: $r,
    ListProduct: jy,
    GetProduct: $j,
    Delete: Fj,
    Success: Sc,
    Error: Gn,
  } = wy.actions,
  Aj = wy.reducer;
function Sy(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: Mj } = Object.prototype,
  { getPrototypeOf: Ec } = Object,
  ql = ((e) => (t) => {
    const n = Mj.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  jt = (e) => ((e = e.toLowerCase()), (t) => ql(t) === e),
  Xl = (e) => (t) => typeof t === e,
  { isArray: Fr } = Array,
  Is = Xl("undefined");
function zj(e) {
  return (
    e !== null &&
    !Is(e) &&
    e.constructor !== null &&
    !Is(e.constructor) &&
    Ve(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const Ey = jt("ArrayBuffer");
function Uj(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && Ey(e.buffer)),
    t
  );
}
const Bj = Xl("string"),
  Ve = Xl("function"),
  Cy = Xl("number"),
  Yl = (e) => e !== null && typeof e == "object",
  bj = (e) => e === !0 || e === !1,
  Po = (e) => {
    if (ql(e) !== "object") return !1;
    const t = Ec(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  Wj = jt("Date"),
  Hj = jt("File"),
  Vj = jt("Blob"),
  Kj = jt("FileList"),
  Gj = (e) => Yl(e) && Ve(e.pipe),
  Qj = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (Ve(e.append) &&
          ((t = ql(e)) === "formdata" ||
            (t === "object" &&
              Ve(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  Jj = jt("URLSearchParams"),
  [qj, Xj, Yj, Zj] = ["ReadableStream", "Request", "Response", "Headers"].map(
    jt
  ),
  eS = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Vs(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let r, s;
  if ((typeof e != "object" && (e = [e]), Fr(e)))
    for (r = 0, s = e.length; r < s; r++) t.call(null, e[r], r, e);
  else {
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      l = o.length;
    let a;
    for (r = 0; r < l; r++) (a = o[r]), t.call(null, e[a], a, e);
  }
}
function Ny(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    s;
  for (; r-- > 0; ) if (((s = n[r]), t === s.toLowerCase())) return s;
  return null;
}
const Tn =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global,
  ky = (e) => !Is(e) && e !== Tn;
function eu() {
  const { caseless: e } = (ky(this) && this) || {},
    t = {},
    n = (r, s) => {
      const o = (e && Ny(t, s)) || s;
      Po(t[o]) && Po(r)
        ? (t[o] = eu(t[o], r))
        : Po(r)
        ? (t[o] = eu({}, r))
        : Fr(r)
        ? (t[o] = r.slice())
        : (t[o] = r);
    };
  for (let r = 0, s = arguments.length; r < s; r++)
    arguments[r] && Vs(arguments[r], n);
  return t;
}
const tS = (e, t, n, { allOwnKeys: r } = {}) => (
    Vs(
      t,
      (s, o) => {
        n && Ve(s) ? (e[o] = Sy(s, n)) : (e[o] = s);
      },
      { allOwnKeys: r }
    ),
    e
  ),
  nS = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  rS = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  sS = (e, t, n, r) => {
    let s, o, l;
    const a = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (s = Object.getOwnPropertyNames(e), o = s.length; o-- > 0; )
        (l = s[o]), (!r || r(l, e, t)) && !a[l] && ((t[l] = e[l]), (a[l] = !0));
      e = n !== !1 && Ec(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  oS = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  lS = (e) => {
    if (!e) return null;
    if (Fr(e)) return e;
    let t = e.length;
    if (!Cy(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  iS = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && Ec(Uint8Array)),
  aS = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let s;
    for (; (s = r.next()) && !s.done; ) {
      const o = s.value;
      t.call(e, o[0], o[1]);
    }
  },
  uS = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  cS = jt("HTMLFormElement"),
  dS = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, s) {
      return r.toUpperCase() + s;
    }),
  wf = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  fS = jt("RegExp"),
  _y = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    Vs(n, (s, o) => {
      let l;
      (l = t(s, o, e)) !== !1 && (r[o] = l || s);
    }),
      Object.defineProperties(e, r);
  },
  pS = (e) => {
    _y(e, (t, n) => {
      if (Ve(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (Ve(r)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  hS = (e, t) => {
    const n = {},
      r = (s) => {
        s.forEach((o) => {
          n[o] = !0;
        });
      };
    return Fr(e) ? r(e) : r(String(e).split(t)), n;
  },
  mS = () => {},
  yS = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t),
  Ui = "abcdefghijklmnopqrstuvwxyz",
  jf = "0123456789",
  Ry = { DIGIT: jf, ALPHA: Ui, ALPHA_DIGIT: Ui + Ui.toUpperCase() + jf },
  gS = (e = 16, t = Ry.ALPHA_DIGIT) => {
    let n = "";
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function vS(e) {
  return !!(
    e &&
    Ve(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const xS = (e) => {
    const t = new Array(10),
      n = (r, s) => {
        if (Yl(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            t[s] = r;
            const o = Fr(r) ? [] : {};
            return (
              Vs(r, (l, a) => {
                const u = n(l, s + 1);
                !Is(u) && (o[a] = u);
              }),
              (t[s] = void 0),
              o
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  wS = jt("AsyncFunction"),
  jS = (e) => e && (Yl(e) || Ve(e)) && Ve(e.then) && Ve(e.catch),
  Py = ((e, t) =>
    e
      ? setImmediate
      : t
      ? ((n, r) => (
          Tn.addEventListener(
            "message",
            ({ source: s, data: o }) => {
              s === Tn && o === n && r.length && r.shift()();
            },
            !1
          ),
          (s) => {
            r.push(s), Tn.postMessage(n, "*");
          }
        ))(`axios@${Math.random()}`, [])
      : (n) => setTimeout(n))(
    typeof setImmediate == "function",
    Ve(Tn.postMessage)
  ),
  SS =
    typeof queueMicrotask < "u"
      ? queueMicrotask.bind(Tn)
      : (typeof process < "u" && process.nextTick) || Py,
  E = {
    isArray: Fr,
    isArrayBuffer: Ey,
    isBuffer: zj,
    isFormData: Qj,
    isArrayBufferView: Uj,
    isString: Bj,
    isNumber: Cy,
    isBoolean: bj,
    isObject: Yl,
    isPlainObject: Po,
    isReadableStream: qj,
    isRequest: Xj,
    isResponse: Yj,
    isHeaders: Zj,
    isUndefined: Is,
    isDate: Wj,
    isFile: Hj,
    isBlob: Vj,
    isRegExp: fS,
    isFunction: Ve,
    isStream: Gj,
    isURLSearchParams: Jj,
    isTypedArray: iS,
    isFileList: Kj,
    forEach: Vs,
    merge: eu,
    extend: tS,
    trim: eS,
    stripBOM: nS,
    inherits: rS,
    toFlatObject: sS,
    kindOf: ql,
    kindOfTest: jt,
    endsWith: oS,
    toArray: lS,
    forEachEntry: aS,
    matchAll: uS,
    isHTMLForm: cS,
    hasOwnProperty: wf,
    hasOwnProp: wf,
    reduceDescriptors: _y,
    freezeMethods: pS,
    toObjectSet: hS,
    toCamelCase: dS,
    noop: mS,
    toFiniteNumber: yS,
    findKey: Ny,
    global: Tn,
    isContextDefined: ky,
    ALPHABET: Ry,
    generateString: gS,
    isSpecCompliantForm: vS,
    toJSONObject: xS,
    isAsyncFn: wS,
    isThenable: jS,
    setImmediate: Py,
    asap: SS,
  };
function z(e, t, n, r, s) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    s && (this.response = s);
}
E.inherits(z, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: E.toJSONObject(this.config),
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    };
  },
});
const Oy = z.prototype,
  Ty = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((e) => {
  Ty[e] = { value: e };
});
Object.defineProperties(z, Ty);
Object.defineProperty(Oy, "isAxiosError", { value: !0 });
z.from = (e, t, n, r, s, o) => {
  const l = Object.create(Oy);
  return (
    E.toFlatObject(
      e,
      l,
      function (u) {
        return u !== Error.prototype;
      },
      (a) => a !== "isAxiosError"
    ),
    z.call(l, e.message, t, n, r, s),
    (l.cause = e),
    (l.name = e.name),
    o && Object.assign(l, o),
    l
  );
};
const ES = null;
function tu(e) {
  return E.isPlainObject(e) || E.isArray(e);
}
function Ly(e) {
  return E.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Sf(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (s, o) {
          return (s = Ly(s)), !n && o ? "[" + s + "]" : s;
        })
        .join(n ? "." : "")
    : t;
}
function CS(e) {
  return E.isArray(e) && !e.some(tu);
}
const NS = E.toFlatObject(E, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function Zl(e, t, n) {
  if (!E.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (n = E.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (j, w) {
        return !E.isUndefined(w[j]);
      }
    ));
  const r = n.metaTokens,
    s = n.visitor || d,
    o = n.dots,
    l = n.indexes,
    u = (n.Blob || (typeof Blob < "u" && Blob)) && E.isSpecCompliantForm(t);
  if (!E.isFunction(s)) throw new TypeError("visitor must be a function");
  function c(h) {
    if (h === null) return "";
    if (E.isDate(h)) return h.toISOString();
    if (!u && E.isBlob(h))
      throw new z("Blob is not supported. Use a Buffer instead.");
    return E.isArrayBuffer(h) || E.isTypedArray(h)
      ? u && typeof Blob == "function"
        ? new Blob([h])
        : Buffer.from(h)
      : h;
  }
  function d(h, j, w) {
    let x = h;
    if (h && !w && typeof h == "object") {
      if (E.endsWith(j, "{}"))
        (j = r ? j : j.slice(0, -2)), (h = JSON.stringify(h));
      else if (
        (E.isArray(h) && CS(h)) ||
        ((E.isFileList(h) || E.endsWith(j, "[]")) && (x = E.toArray(h)))
      )
        return (
          (j = Ly(j)),
          x.forEach(function (m, S) {
            !(E.isUndefined(m) || m === null) &&
              t.append(
                l === !0 ? Sf([j], S, o) : l === null ? j : j + "[]",
                c(m)
              );
          }),
          !1
        );
    }
    return tu(h) ? !0 : (t.append(Sf(w, j, o), c(h)), !1);
  }
  const f = [],
    p = Object.assign(NS, {
      defaultVisitor: d,
      convertValue: c,
      isVisitable: tu,
    });
  function v(h, j) {
    if (!E.isUndefined(h)) {
      if (f.indexOf(h) !== -1)
        throw Error("Circular reference detected in " + j.join("."));
      f.push(h),
        E.forEach(h, function (x, g) {
          (!(E.isUndefined(x) || x === null) &&
            s.call(t, x, E.isString(g) ? g.trim() : g, j, p)) === !0 &&
            v(x, j ? j.concat(g) : [g]);
        }),
        f.pop();
    }
  }
  if (!E.isObject(e)) throw new TypeError("data must be an object");
  return v(e), t;
}
function Ef(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function Cc(e, t) {
  (this._pairs = []), e && Zl(e, this, t);
}
const Iy = Cc.prototype;
Iy.append = function (t, n) {
  this._pairs.push([t, n]);
};
Iy.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, Ef);
      }
    : Ef;
  return this._pairs
    .map(function (s) {
      return n(s[0]) + "=" + n(s[1]);
    }, "")
    .join("&");
};
function kS(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function Dy(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || kS,
    s = n && n.serialize;
  let o;
  if (
    (s
      ? (o = s(t, n))
      : (o = E.isURLSearchParams(t) ? t.toString() : new Cc(t, n).toString(r)),
    o)
  ) {
    const l = e.indexOf("#");
    l !== -1 && (e = e.slice(0, l)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + o);
  }
  return e;
}
class Cf {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    E.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const $y = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  _S = typeof URLSearchParams < "u" ? URLSearchParams : Cc,
  RS = typeof FormData < "u" ? FormData : null,
  PS = typeof Blob < "u" ? Blob : null,
  OS = {
    isBrowser: !0,
    classes: { URLSearchParams: _S, FormData: RS, Blob: PS },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  Nc = typeof window < "u" && typeof document < "u",
  TS = ((e) => Nc && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(
    typeof navigator < "u" && navigator.product
  ),
  LS =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  IS = (Nc && window.location.href) || "http://localhost",
  DS = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: Nc,
        hasStandardBrowserEnv: TS,
        hasStandardBrowserWebWorkerEnv: LS,
        origin: IS,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  vt = { ...DS, ...OS };
function $S(e, t) {
  return Zl(
    e,
    new vt.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, s, o) {
          return vt.isNode && E.isBuffer(n)
            ? (this.append(r, n.toString("base64")), !1)
            : o.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function FS(e) {
  return E.matchAll(/\w+|\[(\w*)]/g, e).map((t) =>
    t[0] === "[]" ? "" : t[1] || t[0]
  );
}
function AS(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const s = n.length;
  let o;
  for (r = 0; r < s; r++) (o = n[r]), (t[o] = e[o]);
  return t;
}
function Fy(e) {
  function t(n, r, s, o) {
    let l = n[o++];
    if (l === "__proto__") return !0;
    const a = Number.isFinite(+l),
      u = o >= n.length;
    return (
      (l = !l && E.isArray(s) ? s.length : l),
      u
        ? (E.hasOwnProp(s, l) ? (s[l] = [s[l], r]) : (s[l] = r), !a)
        : ((!s[l] || !E.isObject(s[l])) && (s[l] = []),
          t(n, r, s[l], o) && E.isArray(s[l]) && (s[l] = AS(s[l])),
          !a)
    );
  }
  if (E.isFormData(e) && E.isFunction(e.entries)) {
    const n = {};
    return (
      E.forEachEntry(e, (r, s) => {
        t(FS(r), s, n, 0);
      }),
      n
    );
  }
  return null;
}
function MS(e, t, n) {
  if (E.isString(e))
    try {
      return (t || JSON.parse)(e), E.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (n || JSON.stringify)(e);
}
const Ks = {
  transitional: $y,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        s = r.indexOf("application/json") > -1,
        o = E.isObject(t);
      if ((o && E.isHTMLForm(t) && (t = new FormData(t)), E.isFormData(t)))
        return s ? JSON.stringify(Fy(t)) : t;
      if (
        E.isArrayBuffer(t) ||
        E.isBuffer(t) ||
        E.isStream(t) ||
        E.isFile(t) ||
        E.isBlob(t) ||
        E.isReadableStream(t)
      )
        return t;
      if (E.isArrayBufferView(t)) return t.buffer;
      if (E.isURLSearchParams(t))
        return (
          n.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          t.toString()
        );
      let a;
      if (o) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return $S(t, this.formSerializer).toString();
        if ((a = E.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const u = this.env && this.env.FormData;
          return Zl(
            a ? { "files[]": t } : t,
            u && new u(),
            this.formSerializer
          );
        }
      }
      return o || s ? (n.setContentType("application/json", !1), MS(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || Ks.transitional,
        r = n && n.forcedJSONParsing,
        s = this.responseType === "json";
      if (E.isResponse(t) || E.isReadableStream(t)) return t;
      if (t && E.isString(t) && ((r && !this.responseType) || s)) {
        const l = !(n && n.silentJSONParsing) && s;
        try {
          return JSON.parse(t);
        } catch (a) {
          if (l)
            throw a.name === "SyntaxError"
              ? z.from(a, z.ERR_BAD_RESPONSE, this, null, this.response)
              : a;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: vt.classes.FormData, Blob: vt.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
E.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Ks.headers[e] = {};
});
const zS = E.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  US = (e) => {
    const t = {};
    let n, r, s;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (l) {
            (s = l.indexOf(":")),
              (n = l.substring(0, s).trim().toLowerCase()),
              (r = l.substring(s + 1).trim()),
              !(!n || (t[n] && zS[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ", " + r : r));
          }),
      t
    );
  },
  Nf = Symbol("internals");
function Qr(e) {
  return e && String(e).trim().toLowerCase();
}
function Oo(e) {
  return e === !1 || e == null ? e : E.isArray(e) ? e.map(Oo) : String(e);
}
function BS(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const bS = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Bi(e, t, n, r, s) {
  if (E.isFunction(r)) return r.call(this, t, n);
  if ((s && (t = n), !!E.isString(t))) {
    if (E.isString(r)) return t.indexOf(r) !== -1;
    if (E.isRegExp(r)) return r.test(t);
  }
}
function WS(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function HS(e, t) {
  const n = E.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (s, o, l) {
        return this[r].call(this, t, s, o, l);
      },
      configurable: !0,
    });
  });
}
class Ae {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function o(a, u, c) {
      const d = Qr(u);
      if (!d) throw new Error("header name must be a non-empty string");
      const f = E.findKey(s, d);
      (!f || s[f] === void 0 || c === !0 || (c === void 0 && s[f] !== !1)) &&
        (s[f || u] = Oo(a));
    }
    const l = (a, u) => E.forEach(a, (c, d) => o(c, d, u));
    if (E.isPlainObject(t) || t instanceof this.constructor) l(t, n);
    else if (E.isString(t) && (t = t.trim()) && !bS(t)) l(US(t), n);
    else if (E.isHeaders(t)) for (const [a, u] of t.entries()) o(u, a, r);
    else t != null && o(n, t, r);
    return this;
  }
  get(t, n) {
    if (((t = Qr(t)), t)) {
      const r = E.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n) return s;
        if (n === !0) return BS(s);
        if (E.isFunction(n)) return n.call(this, s, r);
        if (E.isRegExp(n)) return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = Qr(t)), t)) {
      const r = E.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Bi(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function o(l) {
      if (((l = Qr(l)), l)) {
        const a = E.findKey(r, l);
        a && (!n || Bi(r, r[a], a, n)) && (delete r[a], (s = !0));
      }
    }
    return E.isArray(t) ? t.forEach(o) : o(t), s;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      s = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || Bi(this, this[o], o, t, !0)) && (delete this[o], (s = !0));
    }
    return s;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      E.forEach(this, (s, o) => {
        const l = E.findKey(r, o);
        if (l) {
          (n[l] = Oo(s)), delete n[o];
          return;
        }
        const a = t ? WS(o) : String(o).trim();
        a !== o && delete n[o], (n[a] = Oo(s)), (r[a] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      E.forEach(this, (r, s) => {
        r != null && r !== !1 && (n[s] = t && E.isArray(r) ? r.join(", ") : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((s) => r.set(s)), r;
  }
  static accessor(t) {
    const r = (this[Nf] = this[Nf] = { accessors: {} }).accessors,
      s = this.prototype;
    function o(l) {
      const a = Qr(l);
      r[a] || (HS(s, l), (r[a] = !0));
    }
    return E.isArray(t) ? t.forEach(o) : o(t), this;
  }
}
Ae.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
E.reduceDescriptors(Ae.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
E.freezeMethods(Ae);
function bi(e, t) {
  const n = this || Ks,
    r = t || n,
    s = Ae.from(r.headers);
  let o = r.data;
  return (
    E.forEach(e, function (a) {
      o = a.call(n, o, s.normalize(), t ? t.status : void 0);
    }),
    s.normalize(),
    o
  );
}
function Ay(e) {
  return !!(e && e.__CANCEL__);
}
function Ar(e, t, n) {
  z.call(this, e ?? "canceled", z.ERR_CANCELED, t, n),
    (this.name = "CanceledError");
}
E.inherits(Ar, z, { __CANCEL__: !0 });
function My(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new z(
          "Request failed with status code " + n.status,
          [z.ERR_BAD_REQUEST, z.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      );
}
function VS(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function KS(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let s = 0,
    o = 0,
    l;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (u) {
      const c = Date.now(),
        d = r[o];
      l || (l = c), (n[s] = u), (r[s] = c);
      let f = o,
        p = 0;
      for (; f !== s; ) (p += n[f++]), (f = f % e);
      if (((s = (s + 1) % e), s === o && (o = (o + 1) % e), c - l < t)) return;
      const v = d && c - d;
      return v ? Math.round((p * 1e3) / v) : void 0;
    }
  );
}
function GS(e, t) {
  let n = 0,
    r = 1e3 / t,
    s,
    o;
  const l = (c, d = Date.now()) => {
    (n = d), (s = null), o && (clearTimeout(o), (o = null)), e.apply(null, c);
  };
  return [
    (...c) => {
      const d = Date.now(),
        f = d - n;
      f >= r
        ? l(c, d)
        : ((s = c),
          o ||
            (o = setTimeout(() => {
              (o = null), l(s);
            }, r - f)));
    },
    () => s && l(s),
  ];
}
const yl = (e, t, n = 3) => {
    let r = 0;
    const s = KS(50, 250);
    return GS((o) => {
      const l = o.loaded,
        a = o.lengthComputable ? o.total : void 0,
        u = l - r,
        c = s(u),
        d = l <= a;
      r = l;
      const f = {
        loaded: l,
        total: a,
        progress: a ? l / a : void 0,
        bytes: u,
        rate: c || void 0,
        estimated: c && a && d ? (a - l) / c : void 0,
        event: o,
        lengthComputable: a != null,
        [t ? "download" : "upload"]: !0,
      };
      e(f);
    }, n);
  },
  kf = (e, t) => {
    const n = e != null;
    return [(r) => t[0]({ lengthComputable: n, total: e, loaded: r }), t[1]];
  },
  _f =
    (e) =>
    (...t) =>
      E.asap(() => e(...t)),
  QS = vt.hasStandardBrowserEnv
    ? (function () {
        const t = /(msie|trident)/i.test(navigator.userAgent),
          n = document.createElement("a");
        let r;
        function s(o) {
          let l = o;
          return (
            t && (n.setAttribute("href", l), (l = n.href)),
            n.setAttribute("href", l),
            {
              href: n.href,
              protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
              host: n.host,
              search: n.search ? n.search.replace(/^\?/, "") : "",
              hash: n.hash ? n.hash.replace(/^#/, "") : "",
              hostname: n.hostname,
              port: n.port,
              pathname:
                n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname,
            }
          );
        }
        return (
          (r = s(window.location.href)),
          function (l) {
            const a = E.isString(l) ? s(l) : l;
            return a.protocol === r.protocol && a.host === r.host;
          }
        );
      })()
    : (function () {
        return function () {
          return !0;
        };
      })(),
  JS = vt.hasStandardBrowserEnv
    ? {
        write(e, t, n, r, s, o) {
          const l = [e + "=" + encodeURIComponent(t)];
          E.isNumber(n) && l.push("expires=" + new Date(n).toGMTString()),
            E.isString(r) && l.push("path=" + r),
            E.isString(s) && l.push("domain=" + s),
            o === !0 && l.push("secure"),
            (document.cookie = l.join("; "));
        },
        read(e) {
          const t = document.cookie.match(
            new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
          );
          return t ? decodeURIComponent(t[3]) : null;
        },
        remove(e) {
          this.write(e, "", Date.now() - 864e5);
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function qS(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function XS(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function zy(e, t) {
  return e && !qS(t) ? XS(e, t) : t;
}
const Rf = (e) => (e instanceof Ae ? { ...e } : e);
function Wn(e, t) {
  t = t || {};
  const n = {};
  function r(c, d, f) {
    return E.isPlainObject(c) && E.isPlainObject(d)
      ? E.merge.call({ caseless: f }, c, d)
      : E.isPlainObject(d)
      ? E.merge({}, d)
      : E.isArray(d)
      ? d.slice()
      : d;
  }
  function s(c, d, f) {
    if (E.isUndefined(d)) {
      if (!E.isUndefined(c)) return r(void 0, c, f);
    } else return r(c, d, f);
  }
  function o(c, d) {
    if (!E.isUndefined(d)) return r(void 0, d);
  }
  function l(c, d) {
    if (E.isUndefined(d)) {
      if (!E.isUndefined(c)) return r(void 0, c);
    } else return r(void 0, d);
  }
  function a(c, d, f) {
    if (f in t) return r(c, d);
    if (f in e) return r(void 0, c);
  }
  const u = {
    url: o,
    method: o,
    data: o,
    baseURL: l,
    transformRequest: l,
    transformResponse: l,
    paramsSerializer: l,
    timeout: l,
    timeoutMessage: l,
    withCredentials: l,
    withXSRFToken: l,
    adapter: l,
    responseType: l,
    xsrfCookieName: l,
    xsrfHeaderName: l,
    onUploadProgress: l,
    onDownloadProgress: l,
    decompress: l,
    maxContentLength: l,
    maxBodyLength: l,
    beforeRedirect: l,
    transport: l,
    httpAgent: l,
    httpsAgent: l,
    cancelToken: l,
    socketPath: l,
    responseEncoding: l,
    validateStatus: a,
    headers: (c, d) => s(Rf(c), Rf(d), !0),
  };
  return (
    E.forEach(Object.keys(Object.assign({}, e, t)), function (d) {
      const f = u[d] || s,
        p = f(e[d], t[d], d);
      (E.isUndefined(p) && f !== a) || (n[d] = p);
    }),
    n
  );
}
const Uy = (e) => {
    const t = Wn({}, e);
    let {
      data: n,
      withXSRFToken: r,
      xsrfHeaderName: s,
      xsrfCookieName: o,
      headers: l,
      auth: a,
    } = t;
    (t.headers = l = Ae.from(l)),
      (t.url = Dy(zy(t.baseURL, t.url), e.params, e.paramsSerializer)),
      a &&
        l.set(
          "Authorization",
          "Basic " +
            btoa(
              (a.username || "") +
                ":" +
                (a.password ? unescape(encodeURIComponent(a.password)) : "")
            )
        );
    let u;
    if (E.isFormData(n)) {
      if (vt.hasStandardBrowserEnv || vt.hasStandardBrowserWebWorkerEnv)
        l.setContentType(void 0);
      else if ((u = l.getContentType()) !== !1) {
        const [c, ...d] = u
          ? u
              .split(";")
              .map((f) => f.trim())
              .filter(Boolean)
          : [];
        l.setContentType([c || "multipart/form-data", ...d].join("; "));
      }
    }
    if (
      vt.hasStandardBrowserEnv &&
      (r && E.isFunction(r) && (r = r(t)), r || (r !== !1 && QS(t.url)))
    ) {
      const c = s && o && JS.read(o);
      c && l.set(s, c);
    }
    return t;
  },
  YS = typeof XMLHttpRequest < "u",
  ZS =
    YS &&
    function (e) {
      return new Promise(function (n, r) {
        const s = Uy(e);
        let o = s.data;
        const l = Ae.from(s.headers).normalize();
        let { responseType: a, onUploadProgress: u, onDownloadProgress: c } = s,
          d,
          f,
          p,
          v,
          h;
        function j() {
          v && v(),
            h && h(),
            s.cancelToken && s.cancelToken.unsubscribe(d),
            s.signal && s.signal.removeEventListener("abort", d);
        }
        let w = new XMLHttpRequest();
        w.open(s.method.toUpperCase(), s.url, !0), (w.timeout = s.timeout);
        function x() {
          if (!w) return;
          const m = Ae.from(
              "getAllResponseHeaders" in w && w.getAllResponseHeaders()
            ),
            N = {
              data:
                !a || a === "text" || a === "json"
                  ? w.responseText
                  : w.response,
              status: w.status,
              statusText: w.statusText,
              headers: m,
              config: e,
              request: w,
            };
          My(
            function (k) {
              n(k), j();
            },
            function (k) {
              r(k), j();
            },
            N
          ),
            (w = null);
        }
        "onloadend" in w
          ? (w.onloadend = x)
          : (w.onreadystatechange = function () {
              !w ||
                w.readyState !== 4 ||
                (w.status === 0 &&
                  !(w.responseURL && w.responseURL.indexOf("file:") === 0)) ||
                setTimeout(x);
            }),
          (w.onabort = function () {
            w &&
              (r(new z("Request aborted", z.ECONNABORTED, e, w)), (w = null));
          }),
          (w.onerror = function () {
            r(new z("Network Error", z.ERR_NETWORK, e, w)), (w = null);
          }),
          (w.ontimeout = function () {
            let S = s.timeout
              ? "timeout of " + s.timeout + "ms exceeded"
              : "timeout exceeded";
            const N = s.transitional || $y;
            s.timeoutErrorMessage && (S = s.timeoutErrorMessage),
              r(
                new z(
                  S,
                  N.clarifyTimeoutError ? z.ETIMEDOUT : z.ECONNABORTED,
                  e,
                  w
                )
              ),
              (w = null);
          }),
          o === void 0 && l.setContentType(null),
          "setRequestHeader" in w &&
            E.forEach(l.toJSON(), function (S, N) {
              w.setRequestHeader(N, S);
            }),
          E.isUndefined(s.withCredentials) ||
            (w.withCredentials = !!s.withCredentials),
          a && a !== "json" && (w.responseType = s.responseType),
          c && (([p, h] = yl(c, !0)), w.addEventListener("progress", p)),
          u &&
            w.upload &&
            (([f, v] = yl(u)),
            w.upload.addEventListener("progress", f),
            w.upload.addEventListener("loadend", v)),
          (s.cancelToken || s.signal) &&
            ((d = (m) => {
              w &&
                (r(!m || m.type ? new Ar(null, e, w) : m),
                w.abort(),
                (w = null));
            }),
            s.cancelToken && s.cancelToken.subscribe(d),
            s.signal &&
              (s.signal.aborted ? d() : s.signal.addEventListener("abort", d)));
        const g = VS(s.url);
        if (g && vt.protocols.indexOf(g) === -1) {
          r(new z("Unsupported protocol " + g + ":", z.ERR_BAD_REQUEST, e));
          return;
        }
        w.send(o || null);
      });
    },
  eE = (e, t) => {
    let n = new AbortController(),
      r;
    const s = function (u) {
      if (!r) {
        (r = !0), l();
        const c = u instanceof Error ? u : this.reason;
        n.abort(
          c instanceof z ? c : new Ar(c instanceof Error ? c.message : c)
        );
      }
    };
    let o =
      t &&
      setTimeout(() => {
        s(new z(`timeout ${t} of ms exceeded`, z.ETIMEDOUT));
      }, t);
    const l = () => {
      e &&
        (o && clearTimeout(o),
        (o = null),
        e.forEach((u) => {
          u &&
            (u.removeEventListener
              ? u.removeEventListener("abort", s)
              : u.unsubscribe(s));
        }),
        (e = null));
    };
    e.forEach((u) => u && u.addEventListener && u.addEventListener("abort", s));
    const { signal: a } = n;
    return (
      (a.unsubscribe = l),
      [
        a,
        () => {
          o && clearTimeout(o), (o = null);
        },
      ]
    );
  },
  tE = function* (e, t) {
    let n = e.byteLength;
    if (!t || n < t) {
      yield e;
      return;
    }
    let r = 0,
      s;
    for (; r < n; ) (s = r + t), yield e.slice(r, s), (r = s);
  },
  nE = async function* (e, t, n) {
    for await (const r of e)
      yield* tE(ArrayBuffer.isView(r) ? r : await n(String(r)), t);
  },
  Pf = (e, t, n, r, s) => {
    const o = nE(e, t, s);
    let l = 0,
      a,
      u = (c) => {
        a || ((a = !0), r && r(c));
      };
    return new ReadableStream(
      {
        async pull(c) {
          try {
            const { done: d, value: f } = await o.next();
            if (d) {
              u(), c.close();
              return;
            }
            let p = f.byteLength;
            if (n) {
              let v = (l += p);
              n(v);
            }
            c.enqueue(new Uint8Array(f));
          } catch (d) {
            throw (u(d), d);
          }
        },
        cancel(c) {
          return u(c), o.return();
        },
      },
      { highWaterMark: 2 }
    );
  },
  ei =
    typeof fetch == "function" &&
    typeof Request == "function" &&
    typeof Response == "function",
  By = ei && typeof ReadableStream == "function",
  nu =
    ei &&
    (typeof TextEncoder == "function"
      ? (
          (e) => (t) =>
            e.encode(t)
        )(new TextEncoder())
      : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
  by = (e, ...t) => {
    try {
      return !!e(...t);
    } catch {
      return !1;
    }
  },
  rE =
    By &&
    by(() => {
      let e = !1;
      const t = new Request(vt.origin, {
        body: new ReadableStream(),
        method: "POST",
        get duplex() {
          return (e = !0), "half";
        },
      }).headers.has("Content-Type");
      return e && !t;
    }),
  Of = 64 * 1024,
  ru = By && by(() => E.isReadableStream(new Response("").body)),
  gl = { stream: ru && ((e) => e.body) };
ei &&
  ((e) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
      !gl[t] &&
        (gl[t] = E.isFunction(e[t])
          ? (n) => n[t]()
          : (n, r) => {
              throw new z(
                `Response type '${t}' is not supported`,
                z.ERR_NOT_SUPPORT,
                r
              );
            });
    });
  })(new Response());
const sE = async (e) => {
    if (e == null) return 0;
    if (E.isBlob(e)) return e.size;
    if (E.isSpecCompliantForm(e))
      return (await new Request(e).arrayBuffer()).byteLength;
    if (E.isArrayBufferView(e) || E.isArrayBuffer(e)) return e.byteLength;
    if ((E.isURLSearchParams(e) && (e = e + ""), E.isString(e)))
      return (await nu(e)).byteLength;
  },
  oE = async (e, t) => {
    const n = E.toFiniteNumber(e.getContentLength());
    return n ?? sE(t);
  },
  lE =
    ei &&
    (async (e) => {
      let {
        url: t,
        method: n,
        data: r,
        signal: s,
        cancelToken: o,
        timeout: l,
        onDownloadProgress: a,
        onUploadProgress: u,
        responseType: c,
        headers: d,
        withCredentials: f = "same-origin",
        fetchOptions: p,
      } = Uy(e);
      c = c ? (c + "").toLowerCase() : "text";
      let [v, h] = s || o || l ? eE([s, o], l) : [],
        j,
        w;
      const x = () => {
        !j &&
          setTimeout(() => {
            v && v.unsubscribe();
          }),
          (j = !0);
      };
      let g;
      try {
        if (
          u &&
          rE &&
          n !== "get" &&
          n !== "head" &&
          (g = await oE(d, r)) !== 0
        ) {
          let C = new Request(t, { method: "POST", body: r, duplex: "half" }),
            k;
          if (
            (E.isFormData(r) &&
              (k = C.headers.get("content-type")) &&
              d.setContentType(k),
            C.body)
          ) {
            const [P, b] = kf(g, yl(_f(u)));
            r = Pf(C.body, Of, P, b, nu);
          }
        }
        E.isString(f) || (f = f ? "include" : "omit"),
          (w = new Request(t, {
            ...p,
            signal: v,
            method: n.toUpperCase(),
            headers: d.normalize().toJSON(),
            body: r,
            duplex: "half",
            credentials: f,
          }));
        let m = await fetch(w);
        const S = ru && (c === "stream" || c === "response");
        if (ru && (a || S)) {
          const C = {};
          ["status", "statusText", "headers"].forEach((D) => {
            C[D] = m[D];
          });
          const k = E.toFiniteNumber(m.headers.get("content-length")),
            [P, b] = (a && kf(k, yl(_f(a), !0))) || [];
          m = new Response(
            Pf(
              m.body,
              Of,
              P,
              () => {
                b && b(), S && x();
              },
              nu
            ),
            C
          );
        }
        c = c || "text";
        let N = await gl[E.findKey(gl, c) || "text"](m, e);
        return (
          !S && x(),
          h && h(),
          await new Promise((C, k) => {
            My(C, k, {
              data: N,
              headers: Ae.from(m.headers),
              status: m.status,
              statusText: m.statusText,
              config: e,
              request: w,
            });
          })
        );
      } catch (m) {
        throw (
          (x(),
          m && m.name === "TypeError" && /fetch/i.test(m.message)
            ? Object.assign(new z("Network Error", z.ERR_NETWORK, e, w), {
                cause: m.cause || m,
              })
            : z.from(m, m && m.code, e, w))
        );
      }
    }),
  su = { http: ES, xhr: ZS, fetch: lE };
E.forEach(su, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Tf = (e) => `- ${e}`,
  iE = (e) => E.isFunction(e) || e === null || e === !1,
  Wy = {
    getAdapter: (e) => {
      e = E.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      const s = {};
      for (let o = 0; o < t; o++) {
        n = e[o];
        let l;
        if (
          ((r = n),
          !iE(n) && ((r = su[(l = String(n)).toLowerCase()]), r === void 0))
        )
          throw new z(`Unknown adapter '${l}'`);
        if (r) break;
        s[l || "#" + o] = r;
      }
      if (!r) {
        const o = Object.entries(s).map(
          ([a, u]) =>
            `adapter ${a} ` +
            (u === !1
              ? "is not supported by the environment"
              : "is not available in the build")
        );
        let l = t
          ? o.length > 1
            ? `since :
` +
              o.map(Tf).join(`
`)
            : " " + Tf(o[0])
          : "as no adapter specified";
        throw new z(
          "There is no suitable adapter to dispatch the request " + l,
          "ERR_NOT_SUPPORT"
        );
      }
      return r;
    },
    adapters: su,
  };
function Wi(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new Ar(null, e);
}
function Lf(e) {
  return (
    Wi(e),
    (e.headers = Ae.from(e.headers)),
    (e.data = bi.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    Wy.getAdapter(e.adapter || Ks.adapter)(e).then(
      function (r) {
        return (
          Wi(e),
          (r.data = bi.call(e, e.transformResponse, r)),
          (r.headers = Ae.from(r.headers)),
          r
        );
      },
      function (r) {
        return (
          Ay(r) ||
            (Wi(e),
            r &&
              r.response &&
              ((r.response.data = bi.call(e, e.transformResponse, r.response)),
              (r.response.headers = Ae.from(r.response.headers)))),
          Promise.reject(r)
        );
      }
    )
  );
}
const Hy = "1.7.3",
  kc = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    kc[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  }
);
const If = {};
kc.transitional = function (t, n, r) {
  function s(o, l) {
    return (
      "[Axios v" +
      Hy +
      "] Transitional option '" +
      o +
      "'" +
      l +
      (r ? ". " + r : "")
    );
  }
  return (o, l, a) => {
    if (t === !1)
      throw new z(
        s(l, " has been removed" + (n ? " in " + n : "")),
        z.ERR_DEPRECATED
      );
    return (
      n &&
        !If[l] &&
        ((If[l] = !0),
        console.warn(
          s(
            l,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future"
          )
        )),
      t ? t(o, l, a) : !0
    );
  };
};
function aE(e, t, n) {
  if (typeof e != "object")
    throw new z("options must be an object", z.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const o = r[s],
      l = t[o];
    if (l) {
      const a = e[o],
        u = a === void 0 || l(a, o, e);
      if (u !== !0)
        throw new z("option " + o + " must be " + u, z.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new z("Unknown option " + o, z.ERR_BAD_OPTION);
  }
}
const ou = { assertOptions: aE, validators: kc },
  Jt = ou.validators;
class Dn {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new Cf(), response: new Cf() });
  }
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let s;
        Error.captureStackTrace
          ? Error.captureStackTrace((s = {}))
          : (s = new Error());
        const o = s.stack ? s.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack
            ? o &&
              !String(r.stack).endsWith(o.replace(/^.+\n.+\n/, "")) &&
              (r.stack +=
                `
` + o)
            : (r.stack = o);
        } catch {}
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = Wn(this.defaults, n));
    const { transitional: r, paramsSerializer: s, headers: o } = n;
    r !== void 0 &&
      ou.assertOptions(
        r,
        {
          silentJSONParsing: Jt.transitional(Jt.boolean),
          forcedJSONParsing: Jt.transitional(Jt.boolean),
          clarifyTimeoutError: Jt.transitional(Jt.boolean),
        },
        !1
      ),
      s != null &&
        (E.isFunction(s)
          ? (n.paramsSerializer = { serialize: s })
          : ou.assertOptions(
              s,
              { encode: Jt.function, serialize: Jt.function },
              !0
            )),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let l = o && E.merge(o.common, o[n.method]);
    o &&
      E.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (h) => {
          delete o[h];
        }
      ),
      (n.headers = Ae.concat(l, o));
    const a = [];
    let u = !0;
    this.interceptors.request.forEach(function (j) {
      (typeof j.runWhen == "function" && j.runWhen(n) === !1) ||
        ((u = u && j.synchronous), a.unshift(j.fulfilled, j.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function (j) {
      c.push(j.fulfilled, j.rejected);
    });
    let d,
      f = 0,
      p;
    if (!u) {
      const h = [Lf.bind(this), void 0];
      for (
        h.unshift.apply(h, a),
          h.push.apply(h, c),
          p = h.length,
          d = Promise.resolve(n);
        f < p;

      )
        d = d.then(h[f++], h[f++]);
      return d;
    }
    p = a.length;
    let v = n;
    for (f = 0; f < p; ) {
      const h = a[f++],
        j = a[f++];
      try {
        v = h(v);
      } catch (w) {
        j.call(this, w);
        break;
      }
    }
    try {
      d = Lf.call(this, v);
    } catch (h) {
      return Promise.reject(h);
    }
    for (f = 0, p = c.length; f < p; ) d = d.then(c[f++], c[f++]);
    return d;
  }
  getUri(t) {
    t = Wn(this.defaults, t);
    const n = zy(t.baseURL, t.url);
    return Dy(n, t.params, t.paramsSerializer);
  }
}
E.forEach(["delete", "get", "head", "options"], function (t) {
  Dn.prototype[t] = function (n, r) {
    return this.request(
      Wn(r || {}, { method: t, url: n, data: (r || {}).data })
    );
  };
});
E.forEach(["post", "put", "patch"], function (t) {
  function n(r) {
    return function (o, l, a) {
      return this.request(
        Wn(a || {}, {
          method: t,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: o,
          data: l,
        })
      );
    };
  }
  (Dn.prototype[t] = n()), (Dn.prototype[t + "Form"] = n(!0));
});
class _c {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (o) {
      n = o;
    });
    const r = this;
    this.promise.then((s) => {
      if (!r._listeners) return;
      let o = r._listeners.length;
      for (; o-- > 0; ) r._listeners[o](s);
      r._listeners = null;
    }),
      (this.promise.then = (s) => {
        let o;
        const l = new Promise((a) => {
          r.subscribe(a), (o = a);
        }).then(s);
        return (
          (l.cancel = function () {
            r.unsubscribe(o);
          }),
          l
        );
      }),
      t(function (o, l, a) {
        r.reason || ((r.reason = new Ar(o, l, a)), n(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  static source() {
    let t;
    return {
      token: new _c(function (s) {
        t = s;
      }),
      cancel: t,
    };
  }
}
function uE(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function cE(e) {
  return E.isObject(e) && e.isAxiosError === !0;
}
const lu = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(lu).forEach(([e, t]) => {
  lu[t] = e;
});
function Vy(e) {
  const t = new Dn(e),
    n = Sy(Dn.prototype.request, t);
  return (
    E.extend(n, Dn.prototype, t, { allOwnKeys: !0 }),
    E.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (s) {
      return Vy(Wn(e, s));
    }),
    n
  );
}
const F = Vy(Ks);
F.Axios = Dn;
F.CanceledError = Ar;
F.CancelToken = _c;
F.isCancel = Ay;
F.VERSION = Hy;
F.toFormData = Zl;
F.AxiosError = z;
F.Cancel = F.CanceledError;
F.all = function (t) {
  return Promise.all(t);
};
F.spread = uE;
F.isAxiosError = cE;
F.mergeConfig = Wn;
F.AxiosHeaders = Ae;
F.formToJSON = (e) => Fy(E.isHTMLForm(e) ? new FormData(e) : e);
F.getAdapter = Wy.getAdapter;
F.HttpStatusCode = lu;
F.default = F;
const dE = (e) => async (t) => {
    const n = "/products/";
    try {
      t($r()),
        (
          await F.post(n, e, {
            headers: { "content-type": "multipart/form-data" },
          })
        ).status === 201 && t(Sc());
    } catch {
      t(Gn());
    }
  },
  Rc = (e, t, n) => async (r) => {
    const s = `/products/?page=${e}&sort=${t}&by=${n}`;
    try {
      r($r());
      const o = await F.get(s);
      o.status === 200 && r(jy(o.data));
    } catch {
      r(Gn());
    }
  },
  Pc = (e, t, n, r) => async (s) => {
    const o = `/products/?search=${e}&page=${r}&sort=${t}&by=${n}`;
    try {
      s($r());
      const l = await F.get(o);
      l.status === 200 && s(jy(l.data));
    } catch {
      s(Gn());
    }
  },
  fE = (e) => async (t) => {
    const n = `/products/${e}`;
    try {
      t($r());
      const r = await F.get(n);
      r.status === 200 && t($j(r.data));
    } catch {
      t(Gn());
    }
  },
  pE = (e, t) => async (n) => {
    const r = `/products/${e}/`;
    try {
      n($r()),
        (
          await F.patch(r, t, {
            headers: { "content-type": "multipart/form-data" },
          })
        ).status === 200 && n(Sc());
    } catch {
      n(Gn());
    }
  },
  hE = (e, t) => async (n) => {
    const r = `/product-update/${e}`;
    try {
      (
        await F.patch(r, JSON.stringify({ countInStock: t }), {
          headers: { "content-type": "application/json" },
        })
      ).status === 200 && n(Sc());
    } catch {
      n(Gn());
    }
  },
  mE = (e) => async (t) => {
    const n = `/products/${e}`;
    try {
      t($r()), (await F.delete(n)).status === 200 && t(Fj(e));
    } catch {
      t(Gn());
    }
  };
function Qn() {
  const e = Rt(),
    t = Ce(),
    { current_user: n } = V((l) => l.user),
    [r, s] = y.useState("");
  function o() {
    s(""), t(Pc(r, "ASC", "Id")), t(bn());
  }
  return i.jsxs(I, {
    children: [
      i.jsx(cl, {
        bg: "dark",
        "data-bs-theme": "dark",
        collapseOnSelect: !0,
        children: i.jsxs(cc, {
          children: [
            i.jsx(cl.Brand, {
              children: i.jsxs(It, {
                to: "/",
                className: "text-decoration-none",
                style: ({ isActive: l }) => ({ color: l ? "white" : "gray" }),
                onClick: () => t(Rc(1, "ASC", "Id")),
                children: [
                  i.jsx("i", { className: "bi bi-shop-window px-2" }),
                  "Shop",
                ],
              }),
            }),
            i.jsxs(Qm, {
              className: "ml-auto",
              children: [
                i.jsx(_, {
                  className:
                    e.pathname === "/" ? "px-2 visible" : "px-2 invisible",
                  onSubmit: (l) => l.preventDefault(),
                  children: i.jsxs(I, {
                    children: [
                      i.jsx(T, {
                        xs: "auto",
                        children: i.jsx(_.Control, {
                          type: "text",
                          value: r,
                          placeholder: "Search",
                          className: "mr-sm-2",
                          onChange: (l) => s(l.target.value),
                        }),
                      }),
                      i.jsx(T, {
                        xs: "auto",
                        children: i.jsx(K, {
                          type: "submit",
                          variant: "light",
                          onClick: () => o(),
                          children: "Submit",
                        }),
                      }),
                    ],
                  }),
                }),
                Object.keys(n).length
                  ? n.is_superuser
                    ? i.jsxs(It, {
                        className: "text-decoration-none align-self-center",
                        to: "/admin",
                        style: ({ isActive: l }) => ({
                          color: l ? "white" : "gray",
                        }),
                        children: [
                          i.jsx("i", { className: "bi bi-person-gear px-1" }),
                          "Admin",
                        ],
                      })
                    : n.is_admin
                    ? i.jsxs(It, {
                        className: "text-decoration-none align-self-center",
                        to: "/staff",
                        style: ({ isActive: l }) => ({
                          color: l ? "white" : "gray",
                        }),
                        children: [
                          i.jsx("i", { className: "bi bi-person-gear px-1" }),
                          "Staff",
                        ],
                      })
                    : i.jsx(i.Fragment, {})
                  : i.jsx(i.Fragment, {}),
                i.jsxs(It, {
                  to: "/cart",
                  className: "px-3 text-decoration-none align-self-center",
                  style: ({ isActive: l }) => ({ color: l ? "white" : "gray" }),
                  children: [
                    i.jsx("i", { className: "bi bi-cart px-1" }),
                    "Cart",
                  ],
                }),
                Object.keys(n).length
                  ? i.jsxs(It, {
                      to: "/profile",
                      className: "text-decoration-none align-self-center",
                      style: ({ isActive: l }) => ({
                        color: l ? "white" : "gray",
                      }),
                      children: [
                        i.jsx("i", { className: "bi bi-person-fill px-1" }),
                        "User",
                      ],
                    })
                  : i.jsxs(It, {
                      to: "/login",
                      className: "text-decoration-none align-self-center",
                      style: ({ isActive: l }) => ({
                        color: l ? "white" : "gray",
                      }),
                      children: [
                        i.jsx("i", {
                          className: "bi bi-box-arrow-in-right px-1",
                        }),
                        "Login",
                      ],
                    }),
              ],
            }),
          ],
        }),
      }),
      i.jsx(am, {}),
    ],
  });
}
function Xe({ pages: e = 0, page: t = 0, setPage: n = null }) {
  const r = {
    color: "black",
    border: "1px solid",
    borderRadius: "3px",
    margin: "1px",
    fontWeight: "500",
  };
  return i.jsxs("div", {
    className: "mt-auto",
    children: [
      e
        ? i.jsx(I, {
            className: "justify-content-center",
            children: i.jsx(T, {
              md: "auto",
              children: i.jsxs(mo, {
                children: [
                  i.jsx(mo.Prev, {
                    linkStyle: r,
                    onClick: () => {
                      t > 1 && n(t - 1);
                    },
                  }),
                  [...Array(e).keys()].map((s) =>
                    i.jsx(
                      mo.Item,
                      {
                        active: s + 1 === t,
                        linkStyle: {
                          ...r,
                          color: s + 1 === t ? "white" : "black",
                          backgroundColor: s + 1 === t ? "black" : "white",
                        },
                        onClick: () => n(s + 1),
                        children: s + 1,
                      },
                      s
                    )
                  ),
                  i.jsx(mo.Next, {
                    linkStyle: r,
                    onClick: () => {
                      t < e && n(t + 1);
                    },
                  }),
                ],
              }),
            }),
          })
        : i.jsx(I, {}),
      i.jsx(I, {
        children: i.jsx(T, {
          className: "p-2 bg-dark text-center text-white",
          children: "~ Copyright © 2024 ~",
        }),
      }),
    ],
  });
}
function Jr() {
  return i.jsxs("div", {
    className: "vh-100",
    children: [
      i.jsx(Qn, {}),
      i.jsxs("div", {
        className:
          "h-75 d-flex flex-column align-items-center justify-content-center",
        children: [
          i.jsx("h1", { children: "Oops!" }),
          i.jsx("p", { children: "Sorry, an unexpected error has occurred." }),
          i.jsxs("section", {
            className: "text-secondary",
            children: [
              "Go Back to",
              i.jsx(Bs, {
                className: "px-1 text-secondary",
                to: "/",
                children: "home",
              }),
            ],
          }),
        ],
      }),
      i.jsx(Xe, {}),
    ],
  });
}
function yE() {
  return i.jsxs("div", {
    className: "vh-100",
    children: [
      i.jsx(Qn, {}),
      i.jsxs("div", {
        className:
          "h-75 d-flex flex-column align-items-center justify-content-center",
        children: [
          i.jsx("h1", { children: "404! Not Found" }),
          i.jsx("p", { children: "What you are looking is not here!" }),
          i.jsxs("section", {
            className: "text-secondary",
            children: [
              "Go Back to",
              i.jsx(Bs, {
                className: "px-1 text-secondary",
                to: "/",
                children: "home",
              }),
            ],
          }),
        ],
      }),
      i.jsx(Xe, {}),
    ],
  });
}
function gE({ product: e }) {
  const t = Pt();
  return i.jsxs(I, {
    className: "py-2 justify-content-center border shadow-sm rounded",
    children: [
      i.jsx(I, {
        className: "my-2 text-center",
        children: i.jsx(Bs, {
          className: "text-dark text-decoration-none",
          to: `product/${e.Id}`,
          children: i.jsx(Hl, { src: e.image, width: "50%", fluid: !0 }),
        }),
      }),
      i.jsx(I, {
        as: "h5",
        className: "my-2 justify-content-center",
        children: e.name,
      }),
      i.jsxs(I, {
        className: "mb-2",
        children: [
          i.jsx(T, {
            md: 8,
            children: i.jsx("i", {
              className: "bi bi-currency-dollar",
              children: e.price,
            }),
          }),
          i.jsx(T, {
            md: 4,
            children: i.jsx("i", {
              className: "bi bi-star-half",
              children: e.rating,
            }),
          }),
        ],
      }),
      i.jsx(I, {
        className: "mb-2",
        children: i.jsx(K, {
          variant: "dark",
          onClick: () => t(`/product/${e.Id}`),
          children: "Details",
        }),
      }),
    ],
  });
}
function Q({ variant: e, message: t }) {
  return i.jsx(J1, { variant: e, children: t });
}
function _e() {
  return i.jsxs("div", {
    className: "p-2 d-flex flex-row justify-content-center",
    children: [i.jsx(iy, { animation: "border" }), ";"],
  });
}
function vE() {
  const e = Ce(),
    {
      products: t,
      pages: n,
      loading: r,
      success: s,
      error: o,
    } = V((u) => u.product),
    [l, a] = y.useState(1);
  return (
    y.useEffect(
      () => (
        e(Rc(l, "ASC", "Id")),
        () => {
          e(bn());
        }
      ),
      [l]
    ),
    i.jsxs("div", {
      className: "d-flex flex-column min-vh-100",
      children: [
        i.jsx(Qn, {}),
        i.jsx("h1", {
          className: "text-center text-dark border py-2",
          children: "Product List",
        }),
        i.jsx(I, {
          className: "p-3",
          children: o
            ? i.jsx(Q, { variant: "danger", message: "Error loading products" })
            : r
            ? i.jsx(_e, {})
            : s
            ? Object.keys(t).length
              ? t.map((u) =>
                  i.jsx(
                    T,
                    {
                      className: "p-3 d-flex",
                      sm: 3,
                      md: 2,
                      children: i.jsx(gE, { product: u }),
                    },
                    u.Id
                  )
                )
              : i.jsx(Q, {
                  className: "p-3",
                  variant: "warning",
                  message: "No products to show",
                })
            : i.jsx(I, {}),
        }),
        i.jsx(Xe, { pages: n, page: l, setPage: a }),
      ],
    })
  );
}
const Ky = Hs({
    name: "cart",
    initialState: {
      product_list: [],
      stored_list: [],
      products: 0,
      items: 0,
      price: 0,
      pages: 0,
      loading: !1,
      success: !1,
      error: !1,
    },
    reducers: {
      Initial: (e) => {
        (e.loading = !1), (e.success = !1), (e.error = !1);
      },
      Loading: (e) => {
        (e.loading = !0), (e.success = !1), (e.error = !1);
      },
      Success: (e) => {
        (e.loading = !1), (e.success = !0), (e.error = !1);
      },
      ListProducts: (e, t) => {
        (e.product_list = t.payload.cart),
          (e.stored_list = e.product_list),
          (e.products = t.payload.products),
          (e.items = t.payload.items),
          (e.price = t.payload.price),
          (e.pages = t.payload.pages),
          (e.loading = !1),
          (e.success = !0),
          (e.error = !1);
      },
      Update: (e, t) => {
        let n = e.items,
          r = e.price;
        (e.product_list = e.product_list.map((s) =>
          s.Id === t.payload.Id
            ? ((n += t.payload.cartItem.items - s.items),
              (r += s.product.price * (t.payload.cartItem.items - s.items)),
              { ...s, ...t.payload.cartItem })
            : s
        )),
          (e.stored_list = e.product_list),
          (e.items = n),
          (e.price = r),
          (e.loading = !1),
          (e.success = !0),
          (e.error = !1);
      },
      Delete: (e, t) => {
        let n = e.items,
          r = e.price;
        (e.product_list = e.product_list.filter((s) =>
          s.Id === t.payload
            ? ((n -= s.items), (r -= s.items * s.product.price), !1)
            : !0
        )),
          (e.products = e.products - 1),
          (e.stored_list = e.product_list),
          (e.items = n),
          (e.price = r),
          (e.loading = !1),
          (e.success = !0),
          (e.error = !1);
      },
      Error: (e) => {
        (e.loading = !1), (e.success = !1), (e.error = !0);
      },
    },
  }),
  {
    Initial: Gy,
    Loading: Gs,
    Success: iu,
    ListProducts: xE,
    Update: wE,
    Delete: jE,
    Error: gn,
  } = Ky.actions,
  SE = Ky.reducer,
  EE = (e) => async (t) => {
    const n = "/cart/";
    try {
      t(Gs());
      const r = await F.post(n, JSON.stringify(e), {
        headers: { "content-type": "application/json" },
      });
      r.status === 201 || r.status === 200 ? t(iu()) : t(gn());
    } catch {
      t(gn());
    }
  },
  CE = (e, t) => async (n) => {
    const r = `/cart/${e}/?page=${t}`;
    try {
      n(Gs());
      const s = await F.get(r);
      s.status === 200 ? n(xE(s.data)) : n(gn());
    } catch {
      n(gn());
    }
  },
  NE = (e, t) => async (n) => {
    const r = `/cart/${e}/`;
    try {
      n(Gs()),
        (
          await F.patch(r, JSON.stringify(t), {
            headers: { "content-type": "application/json" },
          })
        ).status === 200 && n(wE({ Id: e, cartItem: t }));
    } catch {
      n(gn());
    }
  },
  kE = (e) => async (t) => {
    const n = `/cart/${e}`;
    try {
      t(Gs()), (await F.delete(n)).status === 200 && t(jE(e));
    } catch {
      t(gn());
    }
  },
  _E = (e) => async (t) => {
    const n = `/cart-delete/${e}/`;
    try {
      t(Gs()), (await F.delete(n)).status === 200 ? t(iu()) : t(gn());
    } catch {
      t(gn());
    }
  };
function RE() {
  const { Id: e } = O0(),
    t = Ce(),
    { current_user: n } = V((u) => u.user),
    { product: r } = V((u) => u.product),
    { loading: s, success: o, error: l } = V((u) => u.cart);
  function a() {
    Object.keys(n).length &&
      t(
        EE({
          product: {
            name: r.name,
            image: r.image,
            price: r.price,
            countInStock: r.countInStock,
          },
          userId: n.Id,
          productId: r.Id,
        })
      );
  }
  return (
    y.useEffect(() => (t(fE(e)), () => t(Gy())), []),
    i.jsxs("div", {
      className: "d-flex flex-column min-vh-100",
      children: [
        i.jsx(Qn, {}),
        i.jsxs(I, {
          className: "p-3",
          children: [
            i.jsx(T, {
              className: "p-4 align-items-center",
              md: 4,
              lg: 6,
              children: i.jsx(Hl, { src: r.image, fluid: !0, rounded: !0 }),
            }),
            i.jsxs(T, {
              className: "p-4",
              md: 4,
              lg: 6,
              children: [
                i.jsx(I, {
                  children: i.jsx(wt, {
                    striped: !0,
                    bordered: !0,
                    children: i.jsxs("tbody", {
                      children: [
                        i.jsx("tr", {
                          children: i.jsx("td", {
                            children: i.jsx("h4", { children: r.name }),
                          }),
                        }),
                        i.jsx("tr", {
                          children: i.jsx("td", {
                            children: i.jsx("strong", {
                              children: "Price : " + r.price,
                            }),
                          }),
                        }),
                        i.jsx("tr", {
                          children: i.jsx("td", {
                            children: i.jsx("section", {
                              children: r.description,
                            }),
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
                i.jsx(I, {
                  children: i.jsx(wt, {
                    striped: !0,
                    bordered: !0,
                    children: i.jsxs("tbody", {
                      children: [
                        i.jsxs("tr", {
                          children: [
                            i.jsx("td", { children: "Category" }),
                            i.jsx("td", { children: r.category }),
                          ],
                        }),
                        i.jsxs("tr", {
                          children: [
                            i.jsx("td", { children: "Brand" }),
                            i.jsx("td", { children: r.brand }),
                          ],
                        }),
                        i.jsxs("tr", {
                          children: [
                            i.jsx("td", { children: "Price" }),
                            i.jsx("td", { children: r.price }),
                          ],
                        }),
                        i.jsxs("tr", {
                          children: [
                            i.jsx("td", { children: "In Stock" }),
                            i.jsx("td", { children: r.countInStock }),
                          ],
                        }),
                        i.jsxs("tr", {
                          children: [
                            i.jsx("td", { children: "Rating" }),
                            i.jsx("td", { children: r.rating }),
                          ],
                        }),
                        i.jsx("tr", {
                          children: i.jsx("td", {
                            colSpan: 2,
                            children: i.jsx(Dr, {
                              className: "d-flex",
                              children: i.jsx(K, {
                                variant: "dark",
                                onClick: () => a(),
                                children: "Add to cart",
                              }),
                            }),
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
                Object.keys(n).length
                  ? l
                    ? i.jsx(Q, {
                        variant: "danger",
                        message: "Error loading product",
                      })
                    : s
                    ? i.jsx(_e, {})
                    : o
                    ? i.jsx(Q, {
                        variant: "success",
                        message: "Successfully added product to cart",
                      })
                    : i.jsx(i.Fragment, {})
                  : i.jsx(Q, {
                      variant: "warning",
                      message: "Login to Add items to cart",
                    }),
              ],
            }),
          ],
        }),
        i.jsx(Xe, {}),
      ],
    })
  );
}
function PE() {
  const e = Pt(),
    t = Ce(),
    { current_user: n } = V((p) => p.user),
    {
      product_list: r,
      products: s,
      items: o,
      price: l,
      pages: a,
      loading: u,
      error: c,
    } = V((p) => p.cart),
    [d, f] = y.useState(1);
  return (
    y.useEffect(() => (t(CE(n.Id, d)), () => t(Gy())), [d]),
    Object.keys(n).length
      ? i.jsxs("div", {
          className: "d-flex flex-column min-vh-100",
          children: [
            i.jsx(Qn, {}),
            i.jsxs(I, {
              className: "p-3",
              children: [
                i.jsxs(T, {
                  md: 8,
                  children: [
                    i.jsx("h2", {
                      className: "py-2",
                      children: "Shopping Cart",
                    }),
                    r.length
                      ? i.jsx(Be, {
                          children: r.map((p) =>
                            i.jsxs(
                              Be.Item,
                              {
                                children: [
                                  i.jsxs(I, {
                                    children: [
                                      i.jsx(T, {
                                        className: "d-flex align-items-center",
                                        md: 2,
                                        children: i.jsx(Hl, {
                                          src: p.product.image,
                                          width: "50%",
                                          fluid: !0,
                                          rounded: !0,
                                        }),
                                      }),
                                      i.jsx(T, {
                                        className: "d-flex align-items-center",
                                        md: 2,
                                        children: i.jsx("strong", {
                                          children: p.product.name,
                                        }),
                                      }),
                                      i.jsx(T, {
                                        className: "d-flex align-items-center",
                                        md: 2,
                                        children: p.product.price,
                                      }),
                                      i.jsx(T, {
                                        className: "d-flex align-items-center",
                                        md: 2,
                                        children: i.jsx(_.Control, {
                                          as: "select",
                                          value: p.items,
                                          onChange: (v) => {
                                            t(
                                              NE(p.Id, {
                                                items: v.target.value,
                                              })
                                            );
                                          },
                                          children: [
                                            ...Array(
                                              p.product.countInStock
                                            ).keys(),
                                          ].map((v) =>
                                            i.jsx(
                                              "option",
                                              { value: v + 1, children: v + 1 },
                                              v + 1
                                            )
                                          ),
                                        }),
                                      }),
                                      i.jsx(T, {
                                        className: "d-flex align-items-center",
                                        md: 2,
                                        children:
                                          "Total : " +
                                          p.items * p.product.price,
                                      }),
                                      i.jsx(T, {
                                        className:
                                          "d-flex justify-content-center align-items-center",
                                        md: 2,
                                        children: i.jsx(K, {
                                          variant: "danger",
                                          onClick: () => t(kE(p.Id, p.userId)),
                                          children: "Delete",
                                        }),
                                      }),
                                    ],
                                  }),
                                  c
                                    ? i.jsx(Q, {
                                        variant: "danger",
                                        message: "Couldn't add to cart",
                                      })
                                    : u
                                    ? i.jsx(_e, {})
                                    : i.jsx(i.Fragment, {}),
                                ],
                              },
                              p.Id
                            )
                          ),
                        })
                      : i.jsx(Q, {
                          variant: "warning",
                          message: "Cart is empty",
                        }),
                  ],
                }),
                i.jsxs(T, {
                  md: 4,
                  children: [
                    i.jsxs(I, {
                      className: "px-2",
                      children: [
                        i.jsx("h2", { className: "py-2", children: "Summary" }),
                        i.jsx(wt, {
                          striped: !0,
                          bordered: !0,
                          children: i.jsxs("tbody", {
                            children: [
                              i.jsxs("tr", {
                                children: [
                                  i.jsx("td", { children: "Total Product" }),
                                  i.jsx("td", { children: s }),
                                ],
                              }),
                              i.jsxs("tr", {
                                children: [
                                  i.jsx("td", { children: "Total Items" }),
                                  i.jsx("td", { children: o }),
                                ],
                              }),
                              i.jsxs("tr", {
                                children: [
                                  i.jsx("td", { children: "Total Price" }),
                                  i.jsx("td", { children: l }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    i.jsx(I, {
                      className: "px-2",
                      children: i.jsx(K, {
                        variant: "dark",
                        onClick: () => {
                          if (l) {
                            let p = "";
                            r.map((v) => {
                              p += `${v.productId}:${v.product.name}:${v.product.price}:${v.items}-`;
                            }),
                              (p = p.slice(0, -1)),
                              e("/order", {
                                state: {
                                  products: s,
                                  items: o,
                                  price: l,
                                  encode: p,
                                },
                              });
                          }
                        },
                        children: "Checkout",
                      }),
                    }),
                  ],
                }),
              ],
            }),
            i.jsx(Xe, { pages: a, page: d, setPage: f }),
          ],
        })
      : i.jsx(fe, { to: "/login" })
  );
}
const Qy = Hs({
    name: "order",
    initialState: {
      orders: [],
      pages: 0,
      order_id: 0,
      pending: !0,
      loading: !1,
      success: !1,
      error: !1,
    },
    reducers: {
      Initial: (e) => {
        (e.pending = !0), (e.loading = !1), (e.success = !1), (e.error = !1);
      },
      Loading: (e) => {
        (e.loading = !0), (e.success = !1), (e.error = !1);
      },
      Success: (e) => {
        (e.loading = !1), (e.success = !0), (e.error = !1);
      },
      Error: (e) => {
        (e.loading = !1), (e.success = !1), (e.error = !0);
      },
      ToggleIsShown: (e, t) => {
        const n = t.payload;
        e.orders = e.orders.map(
          (r) => (r.Id === n && (r.isShown = !r.isShown), r)
        );
      },
      CurrentOrder: (e, t) => {
        (e.order_id = t.payload),
          (e.loading = !1),
          (e.success = !0),
          (e.error = !1);
      },
      CurrentOrderState: (e, t) => {
        (e.pending = t.payload),
          (e.loading = !1),
          (e.success = !1),
          (e.error = !1);
      },
      ListOrders: (e, t) => {
        (e.orders = t.payload.orders),
          (e.pages = t.payload.pages),
          (e.loading = !1),
          (e.success = !0),
          (e.error = !1);
      },
      Delete: (e, t) => {
        (e.orders = e.orders.filter((n) => n.Id !== t.payload)),
          (e.loading = !1),
          (e.success = !0),
          (e.error = !1);
      },
    },
  }),
  {
    Initial: Ds,
    Loading: Qs,
    Success: pC,
    Error: Mr,
    ToggleIsShown: Oc,
    CurrentOrder: OE,
    CurrentOrderState: TE,
    ListOrders: Jy,
    Delete: qy,
  } = Qy.actions,
  LE = Qy.reducer,
  IE = (e) => async (t) => {
    const n = "/orders/";
    try {
      t(Qs());
      const r = await F.post(n, JSON.stringify(e), {
        headers: { "content-type": "application/json" },
      });
      r.status === 201 && t(OE(r.data.Id));
    } catch {
      t(Mr());
    }
  },
  Xy = (e, t) => async (n) => {
    const r = `/orders/?page=${e}&status=${t}`;
    try {
      n(Qs());
      const s = await F.get(r);
      s.status === 200 && n(Jy(s.data));
    } catch {
      n(Mr());
    }
  },
  DE = (e, t) => async (n) => {
    const r = `/orders/${e}/?page=${t}`;
    try {
      n(Qs());
      const s = await F.get(r);
      s.status === 200 && n(Jy(s.data));
    } catch {
      n(Mr());
    }
  },
  $E = (e) => async (t) => {
    const n = `/orders/pending/${e}/`;
    try {
      const r = await F.get(n);
      r.status === 200 && t(TE(r.data.pending));
    } catch {
      t(Mr());
    }
  },
  FE = (e) => async (t) => {
    const n = `/orders/pending/${e}/`;
    try {
      t(Qs()),
        (
          await F.patch(n, JSON.stringify({ pending: !1 }), {
            headers: { "content-type": "application/json" },
          })
        ).status === 200 && t(qy(e));
    } catch {
      t(Mr());
    }
  },
  AE = (e) => async (t) => {
    const n = `/orders/pending/${e}`;
    try {
      t(Qs()), (await F.delete(n)).status === 200 && t(qy(e));
    } catch {
      t(Mr());
    }
  },
  Yy = Hs({
    name: "summary",
    initialState: {
      products: [],
      summary: {},
      pages: 0,
      loading: !1,
      success: !1,
      error: !1,
    },
    reducers: {
      Initial: (e) => {
        (e.loading = !1), (e.success = !1), (e.error = !1);
      },
      Loading: (e) => {
        (e.loading = !0), (e.success = !1), (e.error = !1);
      },
      Success: (e) => {
        (e.loading = !1), (e.success = !0), (e.error = !1);
      },
      Error: (e) => {
        (e.loading = !1), (e.success = !1), (e.error = !0);
      },
      ListProducts: (e, t) => {
        (e.products = t.payload.products),
          (e.summary = t.payload.summary),
          (e.pages = t.payload.pages),
          (e.loading = !1),
          (e.success = !0),
          (e.error = !1);
      },
    },
  }),
  {
    Initial: ME,
    Loading: Zy,
    Success: zE,
    Error: eg,
    ListProducts: UE,
  } = Yy.actions,
  BE = Yy.reducer,
  bE = (e) => async (t) => {
    const n = "/summary/";
    try {
      t(Zy()),
        (
          await F.post(n, JSON.stringify(e), {
            headers: { "content-type": "application/json" },
          })
        ).status === 201 && t(zE());
    } catch {
      t(eg());
    }
  },
  WE = (e, t) => async (n) => {
    const r = `/summary/?page=${e}&sort=${t}`;
    try {
      n(Zy());
      const s = await F.get(r);
      s.status === 202 && n(UE(s.data));
    } catch {
      n(eg());
    }
  };
function HE() {
  const e = Rt(),
    t = Ce(),
    { current_user: n } = V((m) => m.user),
    {
      loading: r,
      success: s,
      error: o,
      order_id: l,
      pending: a,
    } = V((m) => m.order),
    { stored_list: u } = V((m) => m.cart),
    c = { products: 0, items: 0, price: 0, encode: "" },
    d = Object.keys(e.state).length ? e.state : c,
    [f, p] = y.useState(!1),
    [v, h] = y.useState(!1),
    [j, w] = y.useState(!1);
  function x() {
    v ||
      (t(
        IE({
          ...d,
          price: d.price + 40,
          userId: n.Id,
          method: "bkash",
          pending: !0,
        })
      ),
      p(!0));
  }
  function g() {
    a || w(!0);
  }
  return (
    y.useEffect(
      () => (
        f &&
          s &&
          (h(!0),
          setTimeout(() => {
            t(Ds()), t(_E(n.Id));
          }, 1500)),
        () => t(Ds())
      ),
      [f, s]
    ),
    y.useEffect(() => {
      const m = setInterval(() => {
        v && a && t($E(l));
      }, 1e3);
      return a || clearInterval(m), () => clearInterval(m);
    }, [a, v]),
    y.useEffect(() => {
      j &&
        u.map((m) => {
          t(hE(m.productId, m.product.countInStock - m.items)),
            t(
              bE({
                _id: m.productId,
                product_name: m.product.name,
                product_price: m.product.price,
                items: m.items,
                date: new Date().toISOString().split("T")[0],
              })
            );
        });
    }, [j]),
    Object.keys(n).length
      ? i.jsxs("div", {
          className: "d-flex flex-column min-vh-100",
          children: [
            i.jsx(Qn, {}),
            i.jsx("h1", { className: "py-2 text-center", children: "ORDER" }),
            i.jsxs(I, {
              className: "px-3",
              children: [
                i.jsx(T, {
                  md: 8,
                  children: i.jsxs(Be, {
                    children: [
                      i.jsx(Be.Item, {
                        children: i.jsx("h2", { children: "Details:" }),
                      }),
                      i.jsxs(Be.Item, {
                        children: [
                          i.jsx("p", { children: "Name : " + n.name }),
                          i.jsx("p", { children: "Email : " + n.email }),
                          i.jsx("p", { children: "Address : " + n.address }),
                        ],
                      }),
                      i.jsx(Be.Item, {
                        children: i.jsx("h2", { children: "Payment Method:" }),
                      }),
                      i.jsx(Be.Item, {
                        children: i.jsx("p", { children: "Method : Bkash" }),
                      }),
                    ],
                  }),
                }),
                i.jsxs(T, {
                  md: 4,
                  children: [
                    i.jsxs(wt, {
                      striped: !0,
                      bordered: !0,
                      children: [
                        i.jsx("thead", {
                          children: i.jsx("tr", {
                            children: i.jsx("th", {
                              colSpan: 2,
                              children: i.jsx("h2", {
                                className: "py-2",
                                children: "Order Summary",
                              }),
                            }),
                          }),
                        }),
                        i.jsxs("tbody", {
                          children: [
                            i.jsxs("tr", {
                              children: [
                                i.jsx("td", { children: "Total Product" }),
                                i.jsx("td", { children: d.products }),
                              ],
                            }),
                            i.jsxs("tr", {
                              children: [
                                i.jsx("td", { children: "Total Items" }),
                                i.jsx("td", { children: d.items }),
                              ],
                            }),
                            i.jsxs("tr", {
                              children: [
                                i.jsx("td", { children: "Price" }),
                                i.jsx("td", { children: d.price }),
                              ],
                            }),
                            i.jsxs("tr", {
                              children: [
                                i.jsx("td", { children: "Delivery Cost" }),
                                i.jsx("td", { children: d.items ? 40 : 0 }),
                              ],
                            }),
                            i.jsxs("tr", {
                              children: [
                                i.jsx("td", { children: "Total Cost" }),
                                i.jsx("td", {
                                  children: d.price ? d.price + 40 : 0,
                                }),
                              ],
                            }),
                            i.jsx("tr", {
                              children: i.jsx("td", {
                                colSpan: 2,
                                children: i.jsx(Dr, {
                                  className: "d-flex",
                                  children: v
                                    ? i.jsx(K, {
                                        disabled: j,
                                        variant: a ? "warning" : "success",
                                        onClick: () => g(),
                                        children: a ? "Processing" : "Payment",
                                      })
                                    : i.jsx(K, {
                                        variant: "dark",
                                        onClick: () => x(),
                                        children: "Order",
                                      }),
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    j
                      ? i.jsx(Q, {
                          variant: "success",
                          message: "Payment Complete!!!",
                        })
                      : o
                      ? i.jsx(Q, {
                          variant: "danger",
                          message: "Error on dealing with order",
                        })
                      : r
                      ? i.jsx(_e, {})
                      : s
                      ? i.jsx(Q, {
                          variant: "success",
                          message: "Successfully ordered your items",
                        })
                      : i.jsx(i.Fragment, {}),
                  ],
                }),
              ],
            }),
            i.jsx(Xe, {}),
          ],
        })
      : i.jsx(fe, { to: "/login" })
  );
}
const tg = Hs({
    name: "user",
    initialState: {
      current_user: localStorage.getItem("current_user")
        ? JSON.parse(localStorage.getItem("current_user"))
        : {},
      users: [],
      pages: 0,
      loading: !1,
      success: !1,
      error: !1,
    },
    reducers: {
      Loading: (e) => {
        (e.loading = !0), (e.success = !1), (e.error = !1);
      },
      Success: (e) => {
        (e.loading = !1), (e.success = !1), (e.error = !1);
      },
      CurrentUser: (e, t) => {
        localStorage.setItem("current_user", JSON.stringify(t.payload)),
          (e.current_user = t.payload),
          (e.loading = !1),
          (e.success = !0),
          (e.error = !1);
      },
      RemoveUser: (e) => {
        localStorage.removeItem("current_user"),
          (e.current_user = {}),
          (e.loading = !1),
          (e.success = !1),
          (e.error = !1);
      },
      ListUser: (e, t) => {
        (e.users = t.payload.users),
          (e.pages = t.payload.pages),
          (e.loading = !1),
          (e.success = !0),
          (e.error = !1);
      },
      Delete: (e, t) => {
        (e.users = e.users.filter((n) => n.Id !== t.payload)),
          (e.loading = !1),
          (e.success = !0),
          (e.error = !1);
      },
      Error: (e) => {
        (e.success = !1), (e.loading = !1), (e.error = !0);
      },
    },
  }),
  {
    Loading: Jn,
    Success: VE,
    CurrentUser: Tc,
    RemoveUser: KE,
    ListUser: ng,
    Delete: GE,
    Error: vn,
  } = tg.actions,
  QE = tg.reducer,
  JE = (e) => async (t) => {
    const n = "/login/";
    try {
      t(Jn());
      const r = await F.post(n, JSON.stringify(e), {
        headers: { "content-type": "application/json" },
      });
      r.status === 200 ? t(Tc(r.data)) : t(vn());
    } catch {
      t(vn());
    }
  },
  qE = (e) => async (t) => {
    const n = "/users/";
    try {
      t(Jn());
      const r = await F.post(n, JSON.stringify(e), {
        headers: { "content-type": "application/json" },
      });
      r.status === 201 && t(Tc(r.data));
    } catch {
      t(vn());
    }
  },
  XE = (e) => async (t) => {
    const n = `/users/?page=${e}`;
    try {
      t(Jn());
      const r = await F.get(n);
      r.status === 200 && t(ng(r.data));
    } catch {
      t(vn());
    }
  },
  rg = (e, t) => async (n) => {
    const r = `/users/?search=${e}&page=${t}`;
    try {
      n(Jn());
      const s = await F.get(r);
      s.status === 200 && n(ng(s.data));
    } catch {
      n(vn());
    }
  },
  Df = (e) => async (t) => {
    const n = `/users/${e.Id}/`;
    try {
      t(Jn());
      const r = await F.patch(n, JSON.stringify(e), {
        headers: { "content-type": "application/json" },
      });
      r.status === 200 && t(Tc(r.data));
    } catch {
      t(vn());
    }
  },
  YE = (e) => async (t) => {
    const n = `/users/${e.Id}/`;
    try {
      t(Jn()),
        (
          await F.patch(n, JSON.stringify(e), {
            headers: { "content-type": "application/json" },
          })
        ).status === 200 && t(VE());
    } catch {
      t(vn());
    }
  },
  ZE = (e) => async (t) => {
    const n = `/users/${e}`;
    try {
      t(Jn()), (await F.delete(n)).status === 200 && t(GE(e));
    } catch {
      t(vn());
    }
  };
function eC() {
  const e = Ce(),
    { current_user: t } = V((v) => v.user),
    { orders: n, pages: r, loading: s, error: o } = V((v) => v.order),
    [l, a] = y.useState(1),
    [u, c] = y.useState({ name: t.name, email: t.email, address: t.address }),
    [d, f] = y.useState({ password: "", confirmPassword: "" });
  function p() {
    d.password === d.confirmPassword &&
      (d.password
        ? e(Df({ ...u, password: d.password, Id: t.Id }))
        : e(Df({ ...u, Id: t.Id })));
  }
  return (
    y.useEffect(() => (e(DE(t.Id, l)), () => e(Ds())), [l]),
    Object.keys(t).length
      ? i.jsxs("div", {
          className: "d-flex flex-column min-vh-100",
          children: [
            i.jsx(Qn, {}),
            i.jsxs(I, {
              className: "p-4",
              children: [
                i.jsxs(T, {
                  md: 4,
                  children: [
                    i.jsxs("section", {
                      className: "p-2 d-flex flex-row justify-content-between",
                      children: [
                        i.jsx("h1", { children: "User Profile" }),
                        i.jsx("span", {
                          children: i.jsx(K, {
                            variant: "dark",
                            onClick: () => e(KE()),
                            children: "Logout",
                          }),
                        }),
                      ],
                    }),
                    i.jsxs(_, {
                      className: "p-3 bg-light text-secondary",
                      onSubmit: (v) => v.preventDefault(),
                      children: [
                        i.jsxs(_.Group, {
                          as: I,
                          className: "mb-3",
                          controlId: "name",
                          children: [
                            i.jsx(_.Label, {
                              column: !0,
                              sm: "3",
                              className: "fw-bold",
                              children: "Name",
                            }),
                            i.jsx(T, {
                              sm: 9,
                              children: i.jsx(_.Control, {
                                plaintext: !0,
                                type: "text",
                                value: u.name,
                                onChange: (v) =>
                                  c({ ...u, name: v.target.value }),
                              }),
                            }),
                          ],
                        }),
                        i.jsxs(_.Group, {
                          as: I,
                          className: "mb-3",
                          controlId: "email",
                          children: [
                            i.jsx(_.Label, {
                              column: !0,
                              sm: "3",
                              className: "fw-bold",
                              children: "Email",
                            }),
                            i.jsx(T, {
                              sm: 9,
                              children: i.jsx(_.Control, {
                                plaintext: !0,
                                readOnly: !0,
                                type: "email",
                                value: u.email,
                                onChange: (v) =>
                                  c({ ...u, email: v.target.value }),
                              }),
                            }),
                          ],
                        }),
                        i.jsxs(_.Group, {
                          as: I,
                          className: "mb-3",
                          controlId: "address",
                          children: [
                            i.jsx(_.Label, {
                              column: !0,
                              sm: "3",
                              className: "fw-bold",
                              children: "Address",
                            }),
                            i.jsx(T, {
                              sm: 9,
                              children: i.jsx(_.Control, {
                                plaintext: !0,
                                as: "textarea",
                                rows: 2,
                                value: u.address,
                                onChange: (v) =>
                                  c({ ...u, address: v.target.value }),
                              }),
                            }),
                          ],
                        }),
                        i.jsxs(_.Group, {
                          className: "mb-3",
                          controlId: "password",
                          children: [
                            i.jsx(_.Label, {
                              className: "fw-bold",
                              children: "Password",
                            }),
                            i.jsx(_.Control, {
                              type: "password",
                              placeholder: "New Password",
                              value: d.password,
                              onChange: (v) =>
                                f({ ...d, password: v.target.value }),
                            }),
                          ],
                        }),
                        i.jsxs(_.Group, {
                          className: "mb-3",
                          controlId: "confirmPassword",
                          children: [
                            i.jsx(_.Label, {
                              className: "fw-bold",
                              children: "Confirm Password",
                            }),
                            i.jsx(_.Control, {
                              type: "password",
                              placeholder: "Confirm Password",
                              value: d.confirmPassword,
                              onChange: (v) =>
                                f({ ...d, confirmPassword: v.target.value }),
                            }),
                          ],
                        }),
                        i.jsx(Dr, {
                          className: "d-flex",
                          children: i.jsx(K, {
                            type: "submit",
                            variant: "dark",
                            onClick: p,
                            children: "Update",
                          }),
                        }),
                      ],
                    }),
                    o
                      ? i.jsx(Q, {
                          variant: "danger",
                          message: "Couldn't update profile",
                        })
                      : s
                      ? i.jsx(_e, {})
                      : i.jsx(i.Fragment, {}),
                  ],
                }),
                i.jsxs(T, {
                  md: 8,
                  children: [
                    i.jsx("h1", { className: "p-2", children: "My Orders" }),
                    s
                      ? i.jsx(_e, {})
                      : o
                      ? i.jsx(Q, {
                          variant: "danger",
                          message: "Error loading your orders",
                        })
                      : n.length
                      ? i.jsxs(wt, {
                          striped: !0,
                          responsive: !0,
                          children: [
                            i.jsx("thead", {
                              children: i.jsxs("tr", {
                                children: [
                                  i.jsx("th", {
                                    className: "text-center",
                                    children: "ID",
                                  }),
                                  i.jsx("th", {
                                    className: "text-center",
                                    children: "Date",
                                  }),
                                  i.jsx("th", {
                                    className: "text-center",
                                    children: "Products",
                                  }),
                                  i.jsx("th", {
                                    className: "text-center",
                                    children: "Items",
                                  }),
                                  i.jsx("th", {
                                    className: "text-center",
                                    children: "Total",
                                  }),
                                ],
                              }),
                            }),
                            i.jsx("tbody", {
                              children: n.map((v) =>
                                i.jsxs(i.Fragment, {
                                  children: [
                                    i.jsxs(
                                      "tr",
                                      {
                                        onClick: () => e(Oc(v.Id)),
                                        children: [
                                          i.jsx("td", {
                                            className: "text-center",
                                            children: v.Id,
                                          }),
                                          i.jsx("td", {
                                            className: "text-center",
                                            children: v.date,
                                          }),
                                          i.jsx("td", {
                                            className: "text-center",
                                            children: v.products,
                                          }),
                                          i.jsx("td", {
                                            className: "text-center",
                                            children: v.items,
                                          }),
                                          i.jsx("td", {
                                            className: "text-center",
                                            children: v.price,
                                          }),
                                        ],
                                      },
                                      v.Id
                                    ),
                                    v.isShown
                                      ? v.encode.split("-").map((h) =>
                                          i.jsxs(
                                            "tr",
                                            {
                                              children: [
                                                i.jsx("td", { colSpan: 1 }),
                                                i.jsx("td", {
                                                  colSpan: 1,
                                                  className:
                                                    "text-center text-white bg-secondary",
                                                  children: h.split(":")[0],
                                                }),
                                                i.jsx("td", {
                                                  colSpan: 1,
                                                  className:
                                                    "text-center text-white bg-secondary",
                                                  children: h.split(":")[1],
                                                }),
                                                i.jsx("td", {
                                                  colSpan: 1,
                                                  className:
                                                    "text-center text-white bg-secondary",
                                                  children: h.split(":")[2],
                                                }),
                                                i.jsx("td", {
                                                  colSpan: 1,
                                                  className:
                                                    "text-center text-white bg-secondary",
                                                  children: h.split(":")[3],
                                                }),
                                              ],
                                            },
                                            h.split(":")[0]
                                          )
                                        )
                                      : i.jsx(i.Fragment, {}),
                                  ],
                                })
                              ),
                            }),
                          ],
                        })
                      : i.jsx(Q, {
                          variant: "warning",
                          message: "No products to show",
                        }),
                  ],
                }),
              ],
            }),
            i.jsx(Xe, { pages: r, page: l, setPage: a }),
          ],
        })
      : i.jsx(fe, { to: "/" })
  );
}
function tC() {
  const e = Pt(),
    t = Ce(),
    { current_user: n, loading: r, success: s, error: o } = V((d) => d.user),
    l = { email: "", password: "" },
    [a, u] = y.useState(l);
  function c() {
    t(JE({ ...a, password: a.password }));
  }
  return (
    y.useEffect(() => {
      s && e("/");
    }, [n]),
    i.jsxs(I, {
      className: "bg-light justify-content-center align-items-center vh-100",
      children: [
        i.jsx(T, {
          md: 1,
          className: "position-absolute top-0 start-0 py-2",
          children: i.jsx(K, {
            variant: "dark",
            onClick: () => (Object.keys(n).length ? e(-1) : e("/")),
            children: i.jsx("i", { className: "bi bi-arrow-left" }),
          }),
        }),
        i.jsxs(T, {
          className: "bg-white rounded shadow-lg",
          md: 4,
          children: [
            i.jsx("h1", { className: "text-center p-2", children: "Sign In" }),
            i.jsxs(_, {
              onSubmit: (d) => d.preventDefault(),
              children: [
                i.jsxs(_.Group, {
                  className: "p-3",
                  controlId: "formBasicEmail",
                  children: [
                    i.jsx(_.Label, {
                      className: "fw-bold",
                      children: "Email address",
                    }),
                    i.jsx(_.Control, {
                      required: !0,
                      type: "email",
                      placeholder: "Enter email",
                      value: a.email,
                      onChange: (d) => u({ ...a, email: d.target.value }),
                    }),
                  ],
                }),
                i.jsxs(_.Group, {
                  className: "p-3",
                  controlId: "formBasicPassword",
                  children: [
                    i.jsx(_.Label, {
                      className: "fw-bold",
                      children: "Password",
                    }),
                    i.jsx(_.Control, {
                      required: !0,
                      type: "password",
                      placeholder: "Password",
                      value: a.password,
                      onChange: (d) => u({ ...a, password: d.target.value }),
                    }),
                  ],
                }),
                i.jsx(Dr, {
                  className: "d-flex p-3",
                  children: i.jsx(K, {
                    variant: "dark",
                    type: "submit",
                    onClick: () => c(),
                    children: "Submit",
                  }),
                }),
              ],
            }),
            i.jsxs("section", {
              className: "p-3",
              children: [
                "Looking to",
                i.jsx(Bs, {
                  to: "/register",
                  className: "text-primary px-1",
                  children: "create an account",
                }),
                "?",
              ],
            }),
            i.jsx("section", {
              className: "p-2",
              children: o
                ? i.jsx(Q, { variant: "danger", message: "Wrong Credentials" })
                : r
                ? i.jsx(_e, {})
                : i.jsx(i.Fragment, {}),
            }),
          ],
        }),
      ],
    })
  );
}
function nC() {
  const e = Pt(),
    t = Ce(),
    { current_user: n, loading: r, success: s, error: o } = V((d) => d.user),
    l = { name: "", email: "", address: "", password: "" },
    [a, u] = y.useState(l);
  function c() {
    t(qE({ ...a, password: a.password }));
  }
  return (
    y.useEffect(() => {
      s && e("/");
    }, [n]),
    i.jsxs(I, {
      className: "bg-light justify-content-center align-items-center vh-100",
      children: [
        i.jsx(T, {
          md: 1,
          className: "position-absolute top-0 start-0 py-2",
          children: i.jsx(K, {
            variant: "dark",
            onClick: () => e(-1),
            children: i.jsx("i", { className: "bi bi-arrow-left" }),
          }),
        }),
        i.jsxs(T, {
          className: "bg-white rounded shadow-lg",
          md: 4,
          children: [
            i.jsx("h1", { className: "text-center p-2", children: "Sign Up" }),
            i.jsxs(_, {
              onSubmit: (d) => d.preventDefault(),
              children: [
                i.jsxs(_.Group, {
                  className: "p-2",
                  controlId: "formBasicFirstName",
                  children: [
                    i.jsx(_.Label, { className: "fw-bold", children: "Name" }),
                    i.jsx(_.Control, {
                      required: !0,
                      type: "name",
                      placeholder: "Name",
                      value: a.name,
                      onChange: (d) => u({ ...a, name: d.target.value }),
                    }),
                  ],
                }),
                i.jsxs(_.Group, {
                  className: "p-2",
                  controlId: "formBasicEmail",
                  children: [
                    i.jsx(_.Label, {
                      className: "fw-bold",
                      children: "Email address",
                    }),
                    i.jsx(_.Control, {
                      required: !0,
                      type: "email",
                      placeholder: "Enter email",
                      value: a.email,
                      onChange: (d) => u({ ...a, email: d.target.value }),
                    }),
                  ],
                }),
                i.jsxs(_.Group, {
                  className: "p-2",
                  controlId: "formBasicLastName",
                  children: [
                    i.jsx(_.Label, {
                      className: "fw-bold",
                      children: "Address",
                    }),
                    i.jsx(_.Control, {
                      required: !0,
                      as: "textarea",
                      rows: 2,
                      placeholder: "Address",
                      value: a.address,
                      onChange: (d) => u({ ...a, address: d.target.value }),
                    }),
                  ],
                }),
                i.jsxs(_.Group, {
                  className: "p-2",
                  controlId: "formBasicPassword",
                  children: [
                    i.jsx(_.Label, {
                      className: "fw-bold",
                      children: "Password",
                    }),
                    i.jsx(_.Control, {
                      required: !0,
                      type: "password",
                      placeholder: "Password",
                      value: a.password,
                      onChange: (d) => u({ ...a, password: d.target.value }),
                    }),
                  ],
                }),
                i.jsx(Dr, {
                  className: "d-flex p-3",
                  children: i.jsx(K, {
                    variant: "dark",
                    type: "submit",
                    onClick: () => c(),
                    children: "Submit",
                  }),
                }),
              ],
            }),
            r
              ? i.jsx(_e, {})
              : o
              ? i.jsx(Q, { variant: "danger", message: "Wrong info" })
              : i.jsx(i.Fragment, {}),
          ],
        }),
      ],
    })
  );
}
function Sn() {
  const e = Rt(),
    t = Ce(),
    { current_user: n } = V((l) => l.user),
    [r, s] = y.useState("");
  function o() {
    s(""),
      e.pathname === "/admin/products" ? (t(Pc(r)), t(Initial())) : t(rg(r));
  }
  return i.jsxs(i.Fragment, {
    children: [
      i.jsx(cl, {
        bg: "dark",
        "data-bs-theme": "dark",
        collapseOnSelect: !0,
        children: i.jsxs(cc, {
          children: [
            i.jsx(cl.Brand, {
              children: i.jsxs(It, {
                hidden: !n.is_superuser,
                to: "/admin",
                className: "text-decoration-none",
                style: ({ isActive: l }) => ({ color: l ? "white" : "gray" }),
                children: [
                  i.jsx("i", { className: "bi bi-person-gear px-2" }),
                  "Admin",
                ],
              }),
            }),
            i.jsxs(Qm, {
              className: "ml-auto",
              children: [
                i.jsx(_, {
                  className:
                    e.pathname === "/admin/products" ||
                    e.pathname === "/admin/users"
                      ? "px-2 visible"
                      : "px-2 invisible",
                  onSubmit: (l) => l.preventDefault(),
                  children: i.jsxs(I, {
                    children: [
                      i.jsx(T, {
                        xs: "auto",
                        children: i.jsx(_.Control, {
                          type: "text",
                          value: r,
                          placeholder: "Search",
                          className: "mr-sm-2",
                          onChange: (l) => s(l.target.value),
                        }),
                      }),
                      i.jsx(T, {
                        xs: "auto",
                        children: i.jsx(K, {
                          type: "submit",
                          variant: "light",
                          onClick: () => o(),
                          children: "Submit",
                        }),
                      }),
                    ],
                  }),
                }),
                i.jsxs(It, {
                  to: "/profile",
                  className: "px-3 text-decoration-none align-self-center",
                  style: ({ isActive: l }) => ({ color: l ? "white" : "gray" }),
                  children: [
                    i.jsx("i", { className: "bi bi-person-fill px-1" }),
                    "User",
                  ],
                }),
                i.jsxs(It, {
                  to: "/",
                  className: "text-decoration-none align-self-center",
                  style: ({ isActive: l }) => ({ color: l ? "white" : "gray" }),
                  children: [
                    i.jsx("i", { className: "bi bi-shop-window px-1" }),
                    "Shop",
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
      i.jsx(am, {}),
    ],
  });
}
function rC() {
  const e = Pt(),
    { current_user: t } = V((n) => n.user);
  return Object.keys(t).length
    ? t.is_superuser
      ? i.jsxs("div", {
          className: "d-flex flex-column min-vh-100",
          children: [
            i.jsx(Sn, {}),
            i.jsx(I, {
              className: "justify-content-center",
              children: i.jsxs(T, {
                md: 8,
                children: [
                  i.jsx("h1", {
                    className: "py-3 text-center",
                    children: "Admin Pages",
                  }),
                  i.jsxs(Be, {
                    className: "py-2",
                    children: [
                      i.jsx(Be.Item, {
                        className: "bg-light",
                        children: i.jsxs(I, {
                          children: [
                            i.jsx(T, {
                              md: 8,
                              as: "h3",
                              className: "text-center",
                              children: "Pages",
                            }),
                            i.jsx(T, {
                              md: 4,
                              as: "h3",
                              className: "text-center",
                              children: "Details",
                            }),
                          ],
                        }),
                      }),
                      i.jsx(Be.Item, {
                        children: i.jsxs(I, {
                          children: [
                            i.jsx(T, {
                              md: 8,
                              as: "h6",
                              className:
                                "d-flex flex-row justify-content-center align-items-center",
                              children: "Product List",
                            }),
                            i.jsx(T, {
                              md: 4,
                              className: "d-flex justify-content-center",
                              children: i.jsx(K, {
                                variant: "dark",
                                onClick: () => e("/admin/products"),
                                children: "Show",
                              }),
                            }),
                          ],
                        }),
                      }),
                      i.jsx(Be.Item, {
                        children: i.jsxs(I, {
                          children: [
                            i.jsx(T, {
                              md: 8,
                              as: "h6",
                              className:
                                "d-flex flex-row justify-content-center align-items-center",
                              children: "User List",
                            }),
                            i.jsx(T, {
                              md: 4,
                              className: "d-flex justify-content-center",
                              children: i.jsx(K, {
                                variant: "dark",
                                onClick: () => e("/admin/users"),
                                children: "Show",
                              }),
                            }),
                          ],
                        }),
                      }),
                      i.jsx(Be.Item, {
                        children: i.jsxs(I, {
                          children: [
                            i.jsx(T, {
                              md: 8,
                              as: "h6",
                              className:
                                "d-flex flex-row justify-content-center align-items-center",
                              children: "Order List",
                            }),
                            i.jsx(T, {
                              md: 4,
                              className: "d-flex justify-content-center",
                              children: i.jsx(K, {
                                variant: "dark",
                                onClick: () => e("/admin/orders"),
                                children: "Show",
                              }),
                            }),
                          ],
                        }),
                      }),
                      i.jsx(Be.Item, {
                        children: i.jsxs(I, {
                          children: [
                            i.jsx(T, {
                              md: 8,
                              as: "h6",
                              className:
                                "d-flex flex-row justify-content-center align-items-center",
                              children: "Summary",
                            }),
                            i.jsx(T, {
                              md: 4,
                              className: "d-flex justify-content-center",
                              children: i.jsx(K, {
                                variant: "dark",
                                onClick: () => e("/admin/summary"),
                                children: "Show",
                              }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
            i.jsx(Xe, {}),
          ],
        })
      : i.jsx(fe, { to: "/" })
    : i.jsx(fe, { to: "/login" });
}
function sC() {
  const e = Pt(),
    t = Ce(),
    { current_user: n } = V((w) => w.user),
    { products: r, pages: s, loading: o, error: l } = V((w) => w.product),
    [a, u] = y.useState(""),
    [c, d] = y.useState("DESC"),
    [f, p] = y.useState("price"),
    [v, h] = y.useState(1);
  function j() {
    u(""), t(Pc(a, c, f, 1)), t(bn());
  }
  return (
    y.useEffect(() => (t(Rc(v, c, f)), () => t(bn())), [v, c, f]),
    Object.keys(n).length
      ? n.is_superuser
        ? i.jsxs("div", {
            className: "d-flex flex-column min-vh-100",
            children: [
              i.jsx(Sn, {}),
              i.jsxs(I, {
                children: [
                  i.jsx("h2", {
                    className: "p-2 text-center",
                    children: "Search Products",
                  }),
                  i.jsxs(I, {
                    className: "justify-content-center",
                    children: [
                      i.jsx(T, {
                        md: 5,
                        children: i.jsx(_, {
                          className: "py-3",
                          onSubmit: (w) => w.preventDefault(),
                          children: i.jsx(_.Control, {
                            type: "text",
                            value: a,
                            placeholder: "Search",
                            className: "mr-sm-2",
                            onChange: (w) => u(w.target.value),
                          }),
                        }),
                      }),
                      i.jsx(T, {
                        md: 1,
                        className:
                          "d-flex justify-content-center align-items-center",
                        children: i.jsx(K, {
                          type: "submit",
                          variant: "dark",
                          onClick: () => j(),
                          children: i.jsx("i", { className: "bi bi-search" }),
                        }),
                      }),
                    ],
                  }),
                  i.jsx("hr", {}),
                ],
              }),
              i.jsxs(I, {
                className: "justify-content-center",
                children: [
                  i.jsxs(I, {
                    md: 10,
                    className: "p-2",
                    children: [
                      i.jsx(T, {
                        md: 6,
                        children: i.jsx("h1", { children: "Products" }),
                      }),
                      i.jsx(T, {
                        md: 2,
                        children: i.jsxs(_.Control, {
                          as: "select",
                          value: f,
                          onChange: (w) => p(w.target.value),
                          children: [
                            i.jsx("option", {
                              value: "price",
                              children: "Price",
                            }),
                            i.jsx("option", {
                              value: "countInStock",
                              children: "Items",
                            }),
                          ],
                        }),
                      }),
                      i.jsx(T, {
                        md: 2,
                        children: i.jsxs(_.Control, {
                          as: "select",
                          value: c,
                          onChange: (w) => d(w.target.value),
                          children: [
                            i.jsx("option", {
                              value: "DESC",
                              children: "DESC",
                            }),
                            i.jsx("option", { value: "ASC", children: "ASC" }),
                          ],
                        }),
                      }),
                      i.jsx(T, {
                        md: 2,
                        children: i.jsx(K, {
                          type: "submit",
                          variant: "dark",
                          onClick: () => e("/admin/create-product"),
                          children: "Create Product",
                        }),
                      }),
                    ],
                  }),
                  r.length
                    ? l
                      ? i.jsx(Q, {
                          variant: "danger",
                          message: "Error loading products",
                        })
                      : o
                      ? i.jsx(_e, {})
                      : i.jsx(I, {
                          md: 10,
                          className: "px-3",
                          children: i.jsxs(wt, {
                            striped: !0,
                            responsive: !0,
                            children: [
                              i.jsx("thead", {
                                children: i.jsxs("tr", {
                                  children: [
                                    i.jsx("th", {
                                      className: "text-center",
                                      children: "ID",
                                    }),
                                    i.jsx("th", {
                                      className: "text-center",
                                      children: "Name",
                                    }),
                                    i.jsx("th", {
                                      className: "text-center",
                                      children: "Price",
                                    }),
                                    i.jsx("th", {
                                      className: "text-center",
                                      children: "Category",
                                    }),
                                    i.jsx("th", {
                                      className: "text-center",
                                      children: "Brand",
                                    }),
                                    i.jsx("th", {
                                      className: "text-center",
                                      children: "In Stock",
                                    }),
                                    i.jsx("th", {
                                      className: "text-center",
                                      children: "Update",
                                    }),
                                    i.jsx("th", {
                                      className: "text-center",
                                      children: "Delete",
                                    }),
                                  ],
                                }),
                              }),
                              i.jsx("tbody", {
                                children: r.map((w) =>
                                  i.jsxs(
                                    "tr",
                                    {
                                      children: [
                                        i.jsx("td", {
                                          className: "text-center",
                                          children: w.Id,
                                        }),
                                        i.jsx("td", {
                                          className: "text-center",
                                          children: i.jsx("strong", {
                                            children: w.name,
                                          }),
                                        }),
                                        i.jsx("td", {
                                          className: "text-center",
                                          children: w.price,
                                        }),
                                        i.jsx("td", {
                                          className: "text-center",
                                          children: w.category,
                                        }),
                                        i.jsx("td", {
                                          className: "text-center",
                                          children: w.brand,
                                        }),
                                        i.jsx("td", {
                                          className: "text-center",
                                          children: w.countInStock,
                                        }),
                                        i.jsx("td", {
                                          className: "text-center",
                                          children: i.jsx(K, {
                                            type: "submit",
                                            variant: "secondary",
                                            onClick: () =>
                                              e("/admin/update-product/", {
                                                state: w,
                                              }),
                                            children: "Update",
                                          }),
                                        }),
                                        i.jsx("td", {
                                          className: "text-center",
                                          children: i.jsx(K, {
                                            type: "submit",
                                            variant: "danger",
                                            onClick: () => t(mE(w.Id)),
                                            children: "Delete",
                                          }),
                                        }),
                                      ],
                                    },
                                    w.Id
                                  )
                                ),
                              }),
                            ],
                          }),
                        })
                    : i.jsx(I, {
                        md: 10,
                        className: "py-3",
                        children: i.jsx(Q, {
                          variant: "warning",
                          message: "No products to show",
                        }),
                      }),
                ],
              }),
              i.jsx(Xe, { pages: s, page: v, setPage: h }),
            ],
          })
        : i.jsx(fe, { to: "/" })
      : i.jsx(fe, { to: "/login" })
  );
}
function oC() {
  const e = Ce(),
    { orders: t, pages: n, loading: r, error: s } = V((u) => u.order),
    { current_user: o } = V((u) => u.user),
    [l, a] = y.useState(1);
  return (
    y.useEffect(() => (e(Xy(l, !1)), () => e(Ds())), [l]),
    Object.keys(o).length
      ? o.is_superuser
        ? i.jsxs("div", {
            className: "d-flex flex-column min-vh-100",
            children: [
              i.jsx(Sn, {}),
              i.jsx(I, {
                className: "justify-content-center",
                children: t.length
                  ? s
                    ? i.jsx(Q, {
                        variant: "danger",
                        message: "Error loading orders",
                      })
                    : r
                    ? i.jsx(_e, {})
                    : i.jsxs(T, {
                        md: 10,
                        children: [
                          i.jsx("h1", {
                            className: "py-3",
                            children: "Orders",
                          }),
                          i.jsxs(wt, {
                            striped: !0,
                            responsive: !0,
                            children: [
                              i.jsx("thead", {
                                children: i.jsxs("tr", {
                                  children: [
                                    i.jsx("th", {
                                      className: "text-center",
                                      children: "ID",
                                    }),
                                    i.jsx("th", {
                                      className: "text-center",
                                      children: "User",
                                    }),
                                    i.jsx("th", {
                                      className: "text-center",
                                      children: "Products",
                                    }),
                                    i.jsx("th", {
                                      className: "text-center",
                                      children: "Items",
                                    }),
                                    i.jsx("th", {
                                      className: "text-center",
                                      children: "Price",
                                    }),
                                    i.jsx("th", {
                                      className: "text-center",
                                      children: "Method",
                                    }),
                                    i.jsx("th", {
                                      className: "text-center",
                                      children: "Date",
                                    }),
                                  ],
                                }),
                              }),
                              i.jsx("tbody", {
                                children: t.map((u) =>
                                  i.jsxs(i.Fragment, {
                                    children: [
                                      i.jsxs(
                                        "tr",
                                        {
                                          onClick: () => e(Oc(u.Id)),
                                          children: [
                                            i.jsx("td", {
                                              className: "text-center",
                                              children: u.Id,
                                            }),
                                            i.jsx("td", {
                                              className: "text-center",
                                              children: u.userId,
                                            }),
                                            i.jsx("td", {
                                              className: "text-center",
                                              children: u.products,
                                            }),
                                            i.jsx("td", {
                                              className: "text-center",
                                              children: u.items,
                                            }),
                                            i.jsx("td", {
                                              className: "text-center",
                                              children: u.price,
                                            }),
                                            i.jsx("td", {
                                              className: "text-center",
                                              children: u.method,
                                            }),
                                            i.jsx("td", {
                                              className: "text-center",
                                              children: u.date,
                                            }),
                                          ],
                                        },
                                        u.Id
                                      ),
                                      u.isShown
                                        ? u.encode.split("-").map((c) =>
                                            i.jsxs(
                                              "tr",
                                              {
                                                children: [
                                                  i.jsx("td", { colSpan: 2 }),
                                                  i.jsx("td", {
                                                    colSpan: 1,
                                                    className:
                                                      "text-center text-white bg-secondary",
                                                    children: c.split(":")[0],
                                                  }),
                                                  i.jsx("td", {
                                                    colSpan: 1,
                                                    className:
                                                      "text-center text-white bg-secondary",
                                                    children: c.split(":")[1],
                                                  }),
                                                  i.jsx("td", {
                                                    colSpan: 1,
                                                    className:
                                                      "text-center text-white bg-secondary",
                                                    children: c.split(":")[2],
                                                  }),
                                                  i.jsx("td", {
                                                    colSpan: 1,
                                                    className:
                                                      "text-center text-white bg-secondary",
                                                    children: c.split(":")[3],
                                                  }),
                                                  i.jsx("td", { colSpan: 1 }),
                                                ],
                                              },
                                              c.split(":")[0]
                                            )
                                          )
                                        : i.jsx(i.Fragment, {}),
                                    ],
                                  })
                                ),
                              }),
                            ],
                          }),
                        ],
                      })
                  : i.jsx(T, {
                      md: 10,
                      className: "py-3",
                      children: i.jsx(Q, {
                        variant: "warning",
                        message: "No order is made yet",
                      }),
                    }),
              }),
              i.jsx(Xe, { pages: n, page: l, setPage: a }),
            ],
          })
        : i.jsx(fe, { to: "/" })
      : i.jsx(fe, { to: "/login" })
  );
}
function lC() {
  const e = Ce(),
    {
      current_user: t,
      users: n,
      pages: r,
      loading: s,
      error: o,
    } = V((h) => h.user),
    [l, a] = y.useState(!1),
    [u, c] = y.useState(""),
    [d, f] = y.useState(1);
  function p() {
    c(""), e(rg(u, 1));
  }
  function v(h) {
    return e(YE({ Id: h.Id, is_admin: !0 })), a(!l);
  }
  return (
    y.useEffect(() => {
      e(XE(d));
    }, [l, d]),
    Object.keys(t).length
      ? t.is_superuser
        ? i.jsxs("div", {
            className: "d-flex flex-column min-vh-100",
            children: [
              i.jsx(Sn, {}),
              i.jsxs(I, {
                children: [
                  i.jsx("h2", {
                    className: "p-2 text-center",
                    children: "Search Users",
                  }),
                  i.jsx(_, {
                    className: "p-3",
                    onSubmit: (h) => h.preventDefault(),
                    children: i.jsxs(I, {
                      className: "justify-content-center ",
                      children: [
                        i.jsx(T, {
                          md: 5,
                          children: i.jsx(_.Control, {
                            type: "text",
                            value: u,
                            placeholder: "Search",
                            className: "mr-sm-2",
                            onChange: (h) => c(h.target.value),
                          }),
                        }),
                        i.jsx(T, {
                          md: 1,
                          className:
                            "d-flex justify-content-start align-items-center",
                          children: i.jsx(K, {
                            type: "submit",
                            variant: "dark",
                            onClick: () => p(),
                            children: i.jsx("i", { className: "bi bi-search" }),
                          }),
                        }),
                      ],
                    }),
                  }),
                  i.jsx("hr", {}),
                ],
              }),
              i.jsx(I, {
                className: "justify-content-center",
                children: i.jsxs(T, {
                  md: 10,
                  children: [
                    i.jsx("h1", { className: "py-3", children: "Users" }),
                    s
                      ? i.jsx(_e, {})
                      : o
                      ? i.jsx(Q, {
                          variant: "danger",
                          message: "Error loading users",
                        })
                      : i.jsxs(wt, {
                          striped: !0,
                          responsive: !0,
                          children: [
                            i.jsx("thead", {
                              children: i.jsxs("tr", {
                                children: [
                                  i.jsx("th", {
                                    className: "text-center",
                                    children: "ID",
                                  }),
                                  i.jsx("th", {
                                    className: "text-center",
                                    children: "Name",
                                  }),
                                  i.jsx("th", {
                                    className: "text-center",
                                    children: "Email",
                                  }),
                                  i.jsx("th", {
                                    className: "text-center",
                                    children: "Address",
                                  }),
                                  i.jsx("th", {
                                    className: "text-center",
                                    children: "Admin",
                                  }),
                                  i.jsx("th", {
                                    className: "text-center",
                                    children: "Make Admin",
                                  }),
                                  i.jsx("th", {
                                    className: "text-center",
                                    children: "Delete",
                                  }),
                                ],
                              }),
                            }),
                            i.jsx("tbody", {
                              children: n.map((h) =>
                                i.jsxs(
                                  "tr",
                                  {
                                    children: [
                                      i.jsx("td", {
                                        className: "text-center",
                                        children: h.Id,
                                      }),
                                      i.jsx("td", {
                                        className: "text-center",
                                        children: h.name,
                                      }),
                                      i.jsx("td", {
                                        className: "text-center",
                                        children: h.email,
                                      }),
                                      i.jsx("td", {
                                        className: "text-center",
                                        children: h.address,
                                      }),
                                      i.jsx("td", {
                                        className: "text-center",
                                        children: h.is_admin ? "Yes" : "No",
                                      }),
                                      i.jsx("td", {
                                        className: "text-center",
                                        children: i.jsx(_, {
                                          className:
                                            "d-flex flex-row justify-content-center",
                                          children: i.jsx(_.Check, {
                                            type: "switch",
                                            defaultChecked: h.is_admin,
                                            onChange: () => v(h),
                                          }),
                                        }),
                                      }),
                                      i.jsx("td", {
                                        className: "text-center",
                                        children: i.jsx(K, {
                                          type: "submit",
                                          variant: "danger",
                                          onClick: () => e(ZE(h.Id)),
                                          children: "Delete",
                                        }),
                                      }),
                                    ],
                                  },
                                  h.Id
                                )
                              ),
                            }),
                          ],
                        }),
                  ],
                }),
              }),
              i.jsx(Xe, { pages: r, page: d, setPage: f }),
            ],
          })
        : i.jsx(fe, { to: "/" })
      : i.jsx(fe, { to: "/login" })
  );
}
function iC() {
  const e = Ce(),
    { current_user: t } = V((p) => p.user),
    {
      products: n,
      summary: r,
      pages: s,
      loading: o,
      success: l,
      error: a,
    } = V((p) => p.summary),
    [u, c] = y.useState(1),
    [d, f] = y.useState("DESC");
  return (
    y.useEffect(() => (e(WE(u, d)), () => e(ME())), [u, d]),
    Object.keys(t).length
      ? t.is_superuser
        ? i.jsxs("div", {
            className: "d-flex flex-column min-vh-100",
            children: [
              i.jsx(Sn, {}),
              i.jsxs(I, {
                className: "px-3 pt-2",
                children: [
                  i.jsx(T, {
                    md: 6,
                    children: i.jsx("h2", {
                      children:
                        d === "DESC"
                          ? "Top Sold Products"
                          : "Less Sold Products",
                    }),
                  }),
                  i.jsx(T, {
                    md: 1,
                    className: "d-flex justify-content-end align-items-center",
                    children: i.jsx("strong", { children: "Sort:" }),
                  }),
                  i.jsx(T, {
                    md: 2,
                    className:
                      "d-flex justify-content-start align-items-center",
                    children: i.jsxs(_.Control, {
                      as: "select",
                      value: d,
                      onChange: (p) => f(p.target.value),
                      children: [
                        i.jsx("option", { value: "DESC", children: "DESC" }),
                        i.jsx("option", { value: "ASC", children: "ASC" }),
                      ],
                    }),
                  }),
                ],
              }),
              i.jsxs(I, {
                className: "p-3",
                children: [
                  i.jsx(T, {
                    md: 8,
                    lg: 8,
                    children: l
                      ? i.jsxs(wt, {
                          striped: !0,
                          responsive: !0,
                          children: [
                            i.jsx("thead", {
                              children: i.jsxs("tr", {
                                children: [
                                  i.jsx("th", {
                                    className: "text-center",
                                    children: "Product ID",
                                  }),
                                  i.jsx("th", {
                                    className: "text-center",
                                    children: "Name",
                                  }),
                                  i.jsx("th", {
                                    className: "text-center",
                                    children: "Price",
                                  }),
                                  i.jsx("th", {
                                    className: "text-center",
                                    children: "Items",
                                  }),
                                  i.jsx("th", {
                                    className: "text-center",
                                    children: "Latest Date",
                                  }),
                                ],
                              }),
                            }),
                            i.jsx("tbody", {
                              children: n.map((p) =>
                                i.jsxs(
                                  "tr",
                                  {
                                    children: [
                                      i.jsx("td", {
                                        className: "text-center",
                                        children: p._id,
                                      }),
                                      i.jsx("td", {
                                        className: "text-center",
                                        children: i.jsx("strong", {
                                          children: p.product_name,
                                        }),
                                      }),
                                      i.jsx("td", {
                                        className: "text-center",
                                        children: p.product_price,
                                      }),
                                      i.jsx("td", {
                                        className: "text-center",
                                        children: p.items,
                                      }),
                                      i.jsx("td", {
                                        className: "text-center",
                                        children: p.date,
                                      }),
                                    ],
                                  },
                                  p._id
                                )
                              ),
                            }),
                          ],
                        })
                      : o
                      ? i.jsx(_e, {})
                      : a
                      ? i.jsx(Q, {
                          variant: "danger",
                          message: "Error loading data",
                        })
                      : i.jsx(i.Fragment, {}),
                  }),
                  i.jsx(T, {
                    md: 4,
                    children: i.jsxs(wt, {
                      striped: !0,
                      bordered: !0,
                      children: [
                        i.jsx("thead", {
                          children: i.jsx("tr", {
                            children: i.jsx("th", {
                              colSpan: 3,
                              children: i.jsx("h2", {
                                className: "py-2",
                                children: "Sales Summary",
                              }),
                            }),
                          }),
                        }),
                        i.jsxs("tbody", {
                          children: [
                            i.jsxs("tr", {
                              children: [
                                i.jsx("td", {
                                  rowSpan: 3,
                                  className: "align-middle",
                                  align: "center",
                                  children: "Today",
                                }),
                                i.jsx("td", { children: "Products Sold" }),
                                i.jsx("td", { children: r.today_products }),
                              ],
                            }),
                            i.jsxs("tr", {
                              children: [
                                i.jsx("td", { children: "Items Sold" }),
                                i.jsx("td", { children: r.today_items }),
                              ],
                            }),
                            i.jsxs("tr", {
                              children: [
                                i.jsx("td", { children: "Price" }),
                                i.jsx("td", { children: r.today_price }),
                              ],
                            }),
                            i.jsxs("tr", {
                              children: [
                                i.jsx("td", {
                                  rowSpan: 3,
                                  className: "align-middle",
                                  align: "center",
                                  children: "This Month",
                                }),
                                i.jsx("td", { children: "Products Sold" }),
                                i.jsx("td", { children: r.month_products }),
                              ],
                            }),
                            i.jsxs("tr", {
                              children: [
                                i.jsx("td", { children: "Items Sold" }),
                                i.jsx("td", { children: r.month_items }),
                              ],
                            }),
                            i.jsxs("tr", {
                              children: [
                                i.jsx("td", { children: "Price" }),
                                i.jsx("td", { children: r.month_price }),
                              ],
                            }),
                            i.jsxs("tr", {
                              children: [
                                i.jsx("td", {
                                  rowSpan: 3,
                                  className: "align-middle",
                                  align: "center",
                                  children: "This Year",
                                }),
                                i.jsx("td", { children: "Products Sold" }),
                                i.jsx("td", { children: r.year_products }),
                              ],
                            }),
                            i.jsxs("tr", {
                              children: [
                                i.jsx("td", { children: "Items Sold" }),
                                i.jsx("td", { children: r.year_items }),
                              ],
                            }),
                            i.jsxs("tr", {
                              children: [
                                i.jsx("td", { children: "Price" }),
                                i.jsx("td", { children: r.year_price }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              i.jsx(Xe, { pages: s, page: u, setPage: c }),
            ],
          })
        : i.jsx(fe, { to: "/" })
      : i.jsx(fe, { to: "/login" })
  );
}
function aC() {
  const e = Pt(),
    t = Ce(),
    { loading: n, success: r, error: s } = V((p) => p.product),
    { current_user: o } = V((p) => p.user),
    l = {
      name: "",
      description: "",
      price: 0,
      image: "",
      brand: "",
      category: "",
      countInStock: 0,
    },
    [a, u] = y.useState(l),
    [c, d] = y.useState(!1),
    f = async () => {
      const p = new FormData();
      a.image && p.append("image", a.image),
        p.append("name", a.name),
        p.append("description", a.description),
        p.append("price", Number(a.price)),
        p.append("brand", a.brand),
        p.append("category", a.category),
        p.append("countInStock", Number(a.countInStock)),
        p.append("rating", Math.round(Math.random() * 5)),
        t(dE(p)),
        d(!0);
    };
  return (
    y.useEffect(
      () => (
        c &&
          setTimeout(() => {
            r && (t(bn()), u(l));
          }, 1e3),
        () => {
          r && t(bn());
        }
      ),
      [r, c]
    ),
    Object.keys(o).length
      ? o.is_superuser
        ? i.jsxs("div", {
            className: "d-flex flex-column min-vh-100",
            children: [
              i.jsx(Sn, {}),
              i.jsxs(I, {
                className: "justify-content-center px-5 py-3",
                children: [
                  i.jsxs("section", {
                    className:
                      "py-3 d-flex flex-row justify-content-between align-items-center",
                    children: [
                      i.jsx("h1", { children: "Create Product" }),
                      i.jsx("span", {
                        children: i.jsx(K, {
                          variant: "dark",
                          size: "lg",
                          onClick: () => e("/admin/products"),
                          children: "Products",
                        }),
                      }),
                    ],
                  }),
                  i.jsx(T, {
                    md: 6,
                    children: i.jsxs(_, {
                      onSubmit: (p) => p.preventDefault(),
                      children: [
                        i.jsxs(_.Group, {
                          className: "p-2",
                          controlId: "name",
                          children: [
                            i.jsx(_.Label, {
                              className: "fw-bold",
                              children: "Name",
                            }),
                            i.jsx(_.Control, {
                              type: "name",
                              placeholder: "Enter name",
                              value: a.name,
                              onChange: (p) =>
                                u({ ...a, name: p.target.value }),
                            }),
                          ],
                        }),
                        i.jsxs(_.Group, {
                          className: "p-2",
                          controlId: "price",
                          children: [
                            i.jsx(_.Label, {
                              className: "fw-bold",
                              children: "Price",
                            }),
                            i.jsx(_.Control, {
                              type: "number",
                              placeholder: "Enter price",
                              value: a.price,
                              onChange: (p) =>
                                u({ ...a, price: p.target.value }),
                            }),
                          ],
                        }),
                        i.jsxs(_.Group, {
                          className: "p-2",
                          controlId: "brand",
                          children: [
                            i.jsx(_.Label, {
                              className: "fw-bold",
                              children: "Brand",
                            }),
                            i.jsx(_.Control, {
                              type: "text",
                              placeholder: "Enter brand",
                              value: a.brand,
                              onChange: (p) =>
                                u({ ...a, brand: p.target.value }),
                            }),
                          ],
                        }),
                        i.jsxs(_.Group, {
                          className: "p-2",
                          controlId: "countinstock",
                          children: [
                            i.jsx(_.Label, {
                              className: "fw-bold",
                              children: "Stock",
                            }),
                            i.jsx(_.Control, {
                              type: "number",
                              placeholder: "Enter stock",
                              value: a.countInStock,
                              onChange: (p) =>
                                u({ ...a, countInStock: p.target.value }),
                            }),
                          ],
                        }),
                        i.jsxs(_.Group, {
                          className: "p-2",
                          controlId: "category",
                          children: [
                            i.jsx(_.Label, {
                              className: "fw-bold",
                              children: "Category",
                            }),
                            i.jsx(_.Control, {
                              type: "text",
                              placeholder: "Enter category",
                              value: a.category,
                              onChange: (p) =>
                                u({ ...a, category: p.target.value }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  i.jsx(T, {
                    md: 6,
                    children: i.jsxs(_, {
                      onSubmit: (p) => p.preventDefault(),
                      children: [
                        i.jsxs(_.Group, {
                          className: "p-2",
                          controlId: "image",
                          children: [
                            i.jsx(_.Label, {
                              className: "fw-bold",
                              children: "Image",
                            }),
                            i.jsx(_.Control, {
                              type: "file",
                              placeholder: "Enter image",
                              onChange: (p) =>
                                u({ ...a, image: p.target.files[0] }),
                            }),
                          ],
                        }),
                        i.jsxs(_.Group, {
                          className: "p-2",
                          controlId: "description",
                          children: [
                            i.jsx(_.Label, {
                              className: "fw-bold",
                              children: "Description",
                            }),
                            i.jsx(_.Control, {
                              as: "textarea",
                              rows: 5,
                              placeholder: "Enter description",
                              value: a.description,
                              onChange: (p) =>
                                u({ ...a, description: p.target.value }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  s
                    ? i.jsx("div", {
                        className: "pt-2",
                        children: i.jsx(Q, {
                          variant: "danger",
                          message: "Could not create product",
                        }),
                      })
                    : n
                    ? i.jsx(_e, {})
                    : r
                    ? i.jsx("div", {
                        className: "pt-2",
                        children: i.jsx(Q, {
                          variant: "success",
                          message: "Successfully created product",
                        }),
                      })
                    : i.jsx(i.Fragment, {}),
                  i.jsx("center", {
                    className: "py-3",
                    children: i.jsx(K, {
                      onClick: () => f(),
                      type: "submit",
                      variant: "dark",
                      children: "Create",
                    }),
                  }),
                ],
              }),
            ],
          })
        : i.jsx(fe, { to: "/" })
      : i.jsx(fe, { to: "/login" })
  );
}
function uC() {
  const e = Pt(),
    t = Rt(),
    n = Ce(),
    { loading: r, success: s, error: o } = V((h) => h.product),
    { current_user: l } = V((h) => h.user),
    a = t.state,
    u = {
      name: a.name,
      description: a.description,
      price: a.price,
      image: "",
      brand: a.brand,
      category: a.category,
      countInStock: a.countInStock,
    },
    [c, d] = y.useState(u),
    [f, p] = y.useState(!1),
    v = async () => {
      const h = new FormData();
      c.image && h.append("image", c.image),
        h.append("name", c.name),
        h.append("description", c.description),
        h.append("price", Number(c.price)),
        h.append("brand", c.brand),
        h.append("category", c.category),
        h.append("countInStock", Number(c.countInStock)),
        h.append("rating", Math.round(Math.random() * 5)),
        n(pE(a.Id, h)),
        p(!0);
    };
  return (
    y.useEffect(
      () => (
        f &&
          setTimeout(() => {
            s && e("/admin/products");
          }, 1e3),
        () => {
          s && n(bn());
        }
      ),
      [s, f]
    ),
    Object.keys(l).length
      ? l.is_superuser
        ? i.jsxs("div", {
            className: "d-flex flex-column min-vh-100",
            children: [
              i.jsx(Sn, {}),
              i.jsxs(I, {
                className: "justify-content-center px-5 py-3",
                children: [
                  i.jsx("center", {
                    children: i.jsx("h1", {
                      className: "py-3",
                      children: "Update Product",
                    }),
                  }),
                  i.jsx(T, {
                    md: 6,
                    className: "py-2",
                    children: i.jsxs(_, {
                      onSubmit: (h) => h.preventDefault(),
                      children: [
                        i.jsxs(_.Group, {
                          as: I,
                          className: "p-2",
                          controlId: "name",
                          children: [
                            i.jsx(_.Label, {
                              column: !0,
                              sm: "2",
                              className: "fw-bold",
                              children: "Name",
                            }),
                            i.jsx(T, {
                              sm: 10,
                              children: i.jsx(_.Control, {
                                type: "name",
                                placeholder: "Enter name",
                                value: c.name,
                                onChange: (h) =>
                                  d({ ...c, name: h.target.value }),
                              }),
                            }),
                          ],
                        }),
                        i.jsxs(_.Group, {
                          as: I,
                          className: "p-2",
                          controlId: "price",
                          children: [
                            i.jsx(_.Label, {
                              column: !0,
                              sm: "2",
                              className: "fw-bold",
                              children: "Price",
                            }),
                            i.jsx(T, {
                              sm: 10,
                              children: i.jsx(_.Control, {
                                type: "number",
                                placeholder: "Enter price",
                                value: c.price,
                                onChange: (h) =>
                                  d({ ...c, price: h.target.value }),
                              }),
                            }),
                          ],
                        }),
                        i.jsxs(_.Group, {
                          as: I,
                          className: "p-2",
                          controlId: "brand",
                          children: [
                            i.jsx(_.Label, {
                              column: !0,
                              sm: "2",
                              className: "fw-bold",
                              children: "Brand",
                            }),
                            i.jsx(T, {
                              sm: 10,
                              children: i.jsx(_.Control, {
                                type: "text",
                                placeholder: "Enter brand",
                                value: c.brand,
                                onChange: (h) =>
                                  d({ ...c, brand: h.target.value }),
                              }),
                            }),
                          ],
                        }),
                        i.jsxs(_.Group, {
                          as: I,
                          className: "p-2",
                          controlId: "countinstock",
                          children: [
                            i.jsx(_.Label, {
                              column: !0,
                              sm: "2",
                              className: "fw-bold",
                              children: "Stock",
                            }),
                            i.jsx(T, {
                              sm: 10,
                              children: i.jsx(_.Control, {
                                type: "number",
                                placeholder: "Enter stock",
                                value: c.countInStock,
                                onChange: (h) =>
                                  d({ ...c, countInStock: h.target.value }),
                              }),
                            }),
                          ],
                        }),
                        i.jsxs(_.Group, {
                          as: I,
                          className: "p-2",
                          controlId: "category",
                          children: [
                            i.jsx(_.Label, {
                              column: !0,
                              sm: "2",
                              className: "fw-bold",
                              children: "Category",
                            }),
                            i.jsx(T, {
                              sm: 10,
                              children: i.jsx(_.Control, {
                                type: "text",
                                placeholder: "Enter category",
                                value: c.category,
                                onChange: (h) =>
                                  d({ ...c, category: h.target.value }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  i.jsx(T, {
                    md: 6,
                    className: "py-2",
                    children: i.jsxs(_, {
                      onSubmit: (h) => h.preventDefault(),
                      children: [
                        i.jsxs(_.Group, {
                          className: "p-2",
                          controlId: "image",
                          children: [
                            i.jsx(_.Label, {
                              className: "fw-bold",
                              children: "Image",
                            }),
                            i.jsx(_.Control, {
                              type: "file",
                              placeholder: "Enter image",
                              onChange: (h) =>
                                d({ ...c, image: h.target.files[0] }),
                            }),
                          ],
                        }),
                        i.jsxs(_.Group, {
                          className: "p-2",
                          controlId: "description",
                          children: [
                            i.jsx(_.Label, {
                              className: "fw-bold",
                              children: "Description",
                            }),
                            i.jsx(_.Control, {
                              as: "textarea",
                              rows: 5,
                              placeholder: "Enter description",
                              value: c.description,
                              onChange: (h) =>
                                d({ ...c, description: h.target.value }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  o
                    ? i.jsx(Q, {
                        className: "pt-2",
                        variant: "danger",
                        message: "Could not update product",
                      })
                    : r
                    ? i.jsx(_e, {})
                    : s
                    ? i.jsx(Q, {
                        className: "pt-2",
                        variant: "success",
                        message: "Successfully updated product",
                      })
                    : i.jsx(i.Fragment, {}),
                  i.jsx("center", {
                    className: "py-3",
                    children: i.jsx(K, {
                      onClick: () => v(),
                      type: "submit",
                      variant: "warning",
                      children: "Update",
                    }),
                  }),
                ],
              }),
            ],
          })
        : i.jsx(fe, { to: "/" })
      : i.jsx(fe, { to: "/login" })
  );
}
function cC() {
  const e = Ce(),
    { orders: t, pages: n, loading: r, error: s } = V((u) => u.order),
    { current_user: o } = V((u) => u.user),
    [l, a] = y.useState(1);
  return (
    y.useEffect(() => (e(Xy(l, !0)), () => e(Ds())), [l]),
    Object.keys(o).length
      ? o.is_admin
        ? i.jsxs("div", {
            className: "d-flex flex-column min-vh-100",
            children: [
              i.jsx(Sn, {}),
              i.jsx(I, {
                className: "justify-content-center",
                children: t.length
                  ? s
                    ? i.jsx(Q, {
                        variant: "danger",
                        message: "Error loading orders",
                      })
                    : r
                    ? i.jsx(_e, {})
                    : i.jsxs(T, {
                        md: 10,
                        children: [
                          i.jsx("h1", {
                            className: "py-3",
                            children: " Pending Orders",
                          }),
                          i.jsxs(wt, {
                            striped: !0,
                            bordered: !0,
                            responsive: !0,
                            children: [
                              i.jsx("thead", {
                                children: i.jsxs("tr", {
                                  children: [
                                    i.jsx("th", {
                                      className: "text-center",
                                      children: "ID",
                                    }),
                                    i.jsx("th", {
                                      className: "text-center",
                                      children: "User",
                                    }),
                                    i.jsx("th", {
                                      className: "text-center",
                                      children: "Products",
                                    }),
                                    i.jsx("th", {
                                      className: "text-center",
                                      children: "Items",
                                    }),
                                    i.jsx("th", {
                                      className: "text-center",
                                      children: "Date",
                                    }),
                                    i.jsx("th", {
                                      className: "text-center",
                                      children: "Complete",
                                    }),
                                    i.jsx("th", {
                                      className: "text-center",
                                      children: "Terminate",
                                    }),
                                  ],
                                }),
                              }),
                              i.jsx("tbody", {
                                children: t.map((u) =>
                                  i.jsxs(i.Fragment, {
                                    children: [
                                      i.jsxs(
                                        "tr",
                                        {
                                          onClick: () => e(Oc(u.Id)),
                                          children: [
                                            i.jsx("td", {
                                              className: "text-center",
                                              children: u.Id,
                                            }),
                                            i.jsx("td", {
                                              className: "text-center",
                                              children: u.userId,
                                            }),
                                            i.jsx("td", {
                                              className: "text-center",
                                              children: u.products,
                                            }),
                                            i.jsx("td", {
                                              className: "text-center",
                                              children: u.items,
                                            }),
                                            i.jsx("td", {
                                              className: "text-center",
                                              children: u.date,
                                            }),
                                            i.jsx("td", {
                                              onClick: () => {
                                                e(FE(u.Id));
                                              },
                                              className:
                                                "text-center text-success",
                                              children: "Deliver",
                                            }),
                                            i.jsx("td", {
                                              onClick: () => {
                                                e(AE(u.Id));
                                              },
                                              className:
                                                "text-center text-danger",
                                              children: "Delete",
                                            }),
                                          ],
                                        },
                                        u.Id
                                      ),
                                      u.isShown
                                        ? u.encode.split("-").map((c) =>
                                            i.jsxs(
                                              "tr",
                                              {
                                                children: [
                                                  i.jsx("td", { colSpan: 2 }),
                                                  i.jsx("td", {
                                                    colSpan: 1,
                                                    className:
                                                      "text-center text-white bg-secondary",
                                                    children: c.split(":")[0],
                                                  }),
                                                  i.jsx("td", {
                                                    colSpan: 1,
                                                    className:
                                                      "text-center text-white bg-secondary",
                                                    children: c.split(":")[1],
                                                  }),
                                                  i.jsx("td", {
                                                    colSpan: 1,
                                                    className:
                                                      "text-center text-white bg-secondary",
                                                    children: c.split(":")[2],
                                                  }),
                                                  i.jsx("td", {
                                                    colSpan: 1,
                                                    className:
                                                      "text-center text-white bg-secondary",
                                                    children: c.split(":")[3],
                                                  }),
                                                  i.jsx("td", { colSpan: 1 }),
                                                ],
                                              },
                                              c.split(":")[0]
                                            )
                                          )
                                        : i.jsx(i.Fragment, {}),
                                    ],
                                  })
                                ),
                              }),
                            ],
                          }),
                        ],
                      })
                  : i.jsx(T, {
                      md: 10,
                      className: "py-3",
                      children: i.jsx(Q, {
                        variant: "warning",
                        message: "No order is made yet",
                      }),
                    }),
              }),
              i.jsx(Xe, { pages: n, page: l, setPage: a }),
            ],
          })
        : i.jsx(fe, { to: "/" })
      : i.jsx(fe, { to: "/login" })
  );
}
function dC() {
  return i.jsx(Y0, {
    children: i.jsxs(H0, {
      children: [
        i.jsxs(ue, {
          path: "/",
          errorElement: i.jsx(Jr, {}),
          children: [
            i.jsx(ue, { index: !0, element: i.jsx(vE, {}) }),
            i.jsx(ue, { path: "product/:Id", element: i.jsx(RE, {}) }),
            i.jsx(ue, { path: "cart", element: i.jsx(PE, {}) }),
            i.jsx(ue, { path: "order", element: i.jsx(HE, {}) }),
            i.jsx(ue, { path: "profile/", element: i.jsx(eC, {}) }),
          ],
        }),
        i.jsxs(ue, {
          path: "admin",
          errorElement: i.jsx(Jr, {}),
          children: [
            i.jsx(ue, { index: !0, element: i.jsx(rC, {}) }),
            i.jsx(ue, { path: "products", element: i.jsx(sC, {}) }),
            i.jsx(ue, { path: "orders", element: i.jsx(oC, {}) }),
            i.jsx(ue, { path: "users", element: i.jsx(lC, {}) }),
            i.jsx(ue, { path: "summary", element: i.jsx(iC, {}) }),
            i.jsx(ue, { path: "create-product", element: i.jsx(aC, {}) }),
            i.jsx(ue, { path: "update-product", element: i.jsx(uC, {}) }),
          ],
        }),
        i.jsx(ue, {
          path: "staff",
          element: i.jsx(cC, {}),
          errorElement: i.jsx(Jr, {}),
        }),
        i.jsx(ue, {
          path: "login",
          element: i.jsx(tC, {}),
          errorElement: i.jsx(Jr, {}),
        }),
        i.jsx(ue, {
          path: "register",
          element: i.jsx(nC, {}),
          errorElement: i.jsx(Jr, {}),
        }),
        i.jsx(ue, { path: "*", element: i.jsx(yE, {}) }),
      ],
    }),
  });
}
const fC = Ej({
  reducer: { user: QE, product: Aj, order: LE, cart: SE, summary: BE },
});
Vi.createRoot(document.getElementById("root")).render(
  i.jsx(Yx, {
    store: fC,
    children: i.jsx(tt.StrictMode, { children: i.jsx(dC, {}) }),
  })
);
