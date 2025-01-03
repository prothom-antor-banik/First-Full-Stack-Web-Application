function yg(e, t) {
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
        for (const i of o.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
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
function Si(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var bf = { exports: {} },
  Ei = {},
  Bf = { exports: {} },
  B = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Us = Symbol.for("react.element"),
  gg = Symbol.for("react.portal"),
  xg = Symbol.for("react.fragment"),
  vg = Symbol.for("react.strict_mode"),
  jg = Symbol.for("react.profiler"),
  wg = Symbol.for("react.provider"),
  Sg = Symbol.for("react.context"),
  Eg = Symbol.for("react.forward_ref"),
  Ng = Symbol.for("react.suspense"),
  Cg = Symbol.for("react.memo"),
  kg = Symbol.for("react.lazy"),
  Mc = Symbol.iterator;
function _g(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Mc && e[Mc]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Wf = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Hf = Object.assign,
  Vf = {};
function Pr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Vf),
    (this.updater = n || Wf);
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
function Kf() {}
Kf.prototype = Pr.prototype;
function fu(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Vf),
    (this.updater = n || Wf);
}
var pu = (fu.prototype = new Kf());
pu.constructor = fu;
Hf(pu, Pr.prototype);
pu.isPureReactComponent = !0;
var Uc = Array.isArray,
  Gf = Object.prototype.hasOwnProperty,
  hu = { current: null },
  Qf = { key: !0, ref: !0, __self: !0, __source: !0 };
function Jf(e, t, n) {
  var r,
    s = {},
    o = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      Gf.call(t, r) && !Qf.hasOwnProperty(r) && (s[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) s.children = n;
  else if (1 < a) {
    for (var u = Array(a), c = 0; c < a; c++) u[c] = arguments[c + 2];
    s.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) s[r] === void 0 && (s[r] = a[r]);
  return {
    $$typeof: Us,
    type: e,
    key: o,
    ref: i,
    props: s,
    _owner: hu.current,
  };
}
function Rg(e, t) {
  return {
    $$typeof: Us,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function mu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Us;
}
function Pg(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var zc = /\/+/g;
function cl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Pg("" + e.key)
    : t.toString(36);
}
function wo(e, t, n, r, s) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (o) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Us:
          case gg:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (s = s(i)),
      (e = r === "" ? "." + cl(i, 0) : r),
      Uc(s)
        ? ((n = ""),
          e != null && (n = e.replace(zc, "$&/") + "/"),
          wo(s, t, n, "", function (c) {
            return c;
          }))
        : s != null &&
          (mu(s) &&
            (s = Rg(
              s,
              n +
                (!s.key || (i && i.key === s.key)
                  ? ""
                  : ("" + s.key).replace(zc, "$&/") + "/") +
                e
            )),
          t.push(s)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), Uc(e)))
    for (var a = 0; a < e.length; a++) {
      o = e[a];
      var u = r + cl(o, a);
      i += wo(o, t, n, u, s);
    }
  else if (((u = _g(e)), typeof u == "function"))
    for (e = u.call(e), a = 0; !(o = e.next()).done; )
      (o = o.value), (u = r + cl(o, a++)), (i += wo(o, t, n, u, s));
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
  return i;
}
function eo(e, t, n) {
  if (e == null) return e;
  var r = [],
    s = 0;
  return (
    wo(e, r, "", "", function (o) {
      return t.call(n, o, s++);
    }),
    r
  );
}
function Og(e) {
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
var Te = { current: null },
  So = { transition: null },
  Tg = {
    ReactCurrentDispatcher: Te,
    ReactCurrentBatchConfig: So,
    ReactCurrentOwner: hu,
  };
function qf() {
  throw Error("act(...) is not supported in production builds of React.");
}
B.Children = {
  map: eo,
  forEach: function (e, t, n) {
    eo(
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
      eo(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      eo(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!mu(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
B.Component = Pr;
B.Fragment = xg;
B.Profiler = jg;
B.PureComponent = fu;
B.StrictMode = vg;
B.Suspense = Ng;
B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Tg;
B.act = qf;
B.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Hf({}, e.props),
    s = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = hu.current)),
      t.key !== void 0 && (s = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (u in t)
      Gf.call(t, u) &&
        !Qf.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && a !== void 0 ? a[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    a = Array(u);
    for (var c = 0; c < u; c++) a[c] = arguments[c + 2];
    r.children = a;
  }
  return { $$typeof: Us, type: e.type, key: s, ref: o, props: r, _owner: i };
};
B.createContext = function (e) {
  return (
    (e = {
      $$typeof: Sg,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: wg, _context: e }),
    (e.Consumer = e)
  );
};
B.createElement = Jf;
B.createFactory = function (e) {
  var t = Jf.bind(null, e);
  return (t.type = e), t;
};
B.createRef = function () {
  return { current: null };
};
B.forwardRef = function (e) {
  return { $$typeof: Eg, render: e };
};
B.isValidElement = mu;
B.lazy = function (e) {
  return { $$typeof: kg, _payload: { _status: -1, _result: e }, _init: Og };
};
B.memo = function (e, t) {
  return { $$typeof: Cg, type: e, compare: t === void 0 ? null : t };
};
B.startTransition = function (e) {
  var t = So.transition;
  So.transition = {};
  try {
    e();
  } finally {
    So.transition = t;
  }
};
B.unstable_act = qf;
B.useCallback = function (e, t) {
  return Te.current.useCallback(e, t);
};
B.useContext = function (e) {
  return Te.current.useContext(e);
};
B.useDebugValue = function () {};
B.useDeferredValue = function (e) {
  return Te.current.useDeferredValue(e);
};
B.useEffect = function (e, t) {
  return Te.current.useEffect(e, t);
};
B.useId = function () {
  return Te.current.useId();
};
B.useImperativeHandle = function (e, t, n) {
  return Te.current.useImperativeHandle(e, t, n);
};
B.useInsertionEffect = function (e, t) {
  return Te.current.useInsertionEffect(e, t);
};
B.useLayoutEffect = function (e, t) {
  return Te.current.useLayoutEffect(e, t);
};
B.useMemo = function (e, t) {
  return Te.current.useMemo(e, t);
};
B.useReducer = function (e, t, n) {
  return Te.current.useReducer(e, t, n);
};
B.useRef = function (e) {
  return Te.current.useRef(e);
};
B.useState = function (e) {
  return Te.current.useState(e);
};
B.useSyncExternalStore = function (e, t, n) {
  return Te.current.useSyncExternalStore(e, t, n);
};
B.useTransition = function () {
  return Te.current.useTransition();
};
B.version = "18.3.1";
Bf.exports = B;
var h = Bf.exports;
const tt = Si(h),
  ql = yg({ __proto__: null, default: tt }, [h]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ig = h,
  Lg = Symbol.for("react.element"),
  $g = Symbol.for("react.fragment"),
  Dg = Object.prototype.hasOwnProperty,
  Fg = Ig.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Ag = { key: !0, ref: !0, __self: !0, __source: !0 };
function Xf(e, t, n) {
  var r,
    s = {},
    o = null,
    i = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) Dg.call(t, r) && !Ag.hasOwnProperty(r) && (s[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) s[r] === void 0 && (s[r] = t[r]);
  return {
    $$typeof: Lg,
    type: e,
    key: o,
    ref: i,
    props: s,
    _owner: Fg.current,
  };
}
Ei.Fragment = $g;
Ei.jsx = Xf;
Ei.jsxs = Xf;
bf.exports = Ei;
var l = bf.exports,
  Xl = {},
  Yf = { exports: {} },
  qe = {},
  Zf = { exports: {} },
  ep = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(I, A) {
    var M = I.length;
    I.push(A);
    e: for (; 0 < M; ) {
      var q = (M - 1) >>> 1,
        te = I[q];
      if (0 < s(te, A)) (I[q] = A), (I[M] = te), (M = q);
      else break e;
    }
  }
  function n(I) {
    return I.length === 0 ? null : I[0];
  }
  function r(I) {
    if (I.length === 0) return null;
    var A = I[0],
      M = I.pop();
    if (M !== A) {
      I[0] = M;
      e: for (var q = 0, te = I.length, Ye = te >>> 1; q < Ye; ) {
        var le = 2 * (q + 1) - 1,
          ut = I[le],
          Pt = le + 1,
          Xn = I[Pt];
        if (0 > s(ut, M))
          Pt < te && 0 > s(Xn, ut)
            ? ((I[q] = Xn), (I[Pt] = M), (q = Pt))
            : ((I[q] = ut), (I[le] = M), (q = le));
        else if (Pt < te && 0 > s(Xn, M)) (I[q] = Xn), (I[Pt] = M), (q = Pt);
        else break e;
      }
    }
    return A;
  }
  function s(I, A) {
    var M = I.sortIndex - A.sortIndex;
    return M !== 0 ? M : I.id - A.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var i = Date,
      a = i.now();
    e.unstable_now = function () {
      return i.now() - a;
    };
  }
  var u = [],
    c = [],
    d = 1,
    f = null,
    p = 3,
    v = !1,
    m = !1,
    S = !1,
    j = typeof setTimeout == "function" ? setTimeout : null,
    x = typeof clearTimeout == "function" ? clearTimeout : null,
    g = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function y(I) {
    for (var A = n(c); A !== null; ) {
      if (A.callback === null) r(c);
      else if (A.startTime <= I)
        r(c), (A.sortIndex = A.expirationTime), t(u, A);
      else break;
      A = n(c);
    }
  }
  function w(I) {
    if (((S = !1), y(I), !m))
      if (n(u) !== null) (m = !0), Le(C);
      else {
        var A = n(c);
        A !== null && at(w, A.startTime - I);
      }
  }
  function C(I, A) {
    (m = !1), S && ((S = !1), x(T), (T = -1)), (v = !0);
    var M = p;
    try {
      for (
        y(A), f = n(u);
        f !== null && (!(f.expirationTime > A) || (I && !fe()));

      ) {
        var q = f.callback;
        if (typeof q == "function") {
          (f.callback = null), (p = f.priorityLevel);
          var te = q(f.expirationTime <= A);
          (A = e.unstable_now()),
            typeof te == "function" ? (f.callback = te) : f === n(u) && r(u),
            y(A);
        } else r(u);
        f = n(u);
      }
      if (f !== null) var Ye = !0;
      else {
        var le = n(c);
        le !== null && at(w, le.startTime - A), (Ye = !1);
      }
      return Ye;
    } finally {
      (f = null), (p = M), (v = !1);
    }
  }
  var k = !1,
    R = null,
    T = -1,
    W = 5,
    $ = -1;
  function fe() {
    return !(e.unstable_now() - $ < W);
  }
  function Rt() {
    if (R !== null) {
      var I = e.unstable_now();
      $ = I;
      var A = !0;
      try {
        A = R(!0, I);
      } finally {
        A ? lt() : ((k = !1), (R = null));
      }
    } else k = !1;
  }
  var lt;
  if (typeof g == "function")
    lt = function () {
      g(Rt);
    };
  else if (typeof MessageChannel < "u") {
    var kn = new MessageChannel(),
      Br = kn.port2;
    (kn.port1.onmessage = Rt),
      (lt = function () {
        Br.postMessage(null);
      });
  } else
    lt = function () {
      j(Rt, 0);
    };
  function Le(I) {
    (R = I), k || ((k = !0), lt());
  }
  function at(I, A) {
    T = j(function () {
      I(e.unstable_now());
    }, A);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (I) {
      I.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      m || v || ((m = !0), Le(C));
    }),
    (e.unstable_forceFrameRate = function (I) {
      0 > I || 125 < I
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (W = 0 < I ? Math.floor(1e3 / I) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (I) {
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
        return I();
      } finally {
        p = M;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (I, A) {
      switch (I) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          I = 3;
      }
      var M = p;
      p = I;
      try {
        return A();
      } finally {
        p = M;
      }
    }),
    (e.unstable_scheduleCallback = function (I, A, M) {
      var q = e.unstable_now();
      switch (
        (typeof M == "object" && M !== null
          ? ((M = M.delay), (M = typeof M == "number" && 0 < M ? q + M : q))
          : (M = q),
        I)
      ) {
        case 1:
          var te = -1;
          break;
        case 2:
          te = 250;
          break;
        case 5:
          te = 1073741823;
          break;
        case 4:
          te = 1e4;
          break;
        default:
          te = 5e3;
      }
      return (
        (te = M + te),
        (I = {
          id: d++,
          callback: A,
          priorityLevel: I,
          startTime: M,
          expirationTime: te,
          sortIndex: -1,
        }),
        M > q
          ? ((I.sortIndex = M),
            t(c, I),
            n(u) === null &&
              I === n(c) &&
              (S ? (x(T), (T = -1)) : (S = !0), at(w, M - q)))
          : ((I.sortIndex = te), t(u, I), m || v || ((m = !0), Le(C))),
        I
      );
    }),
    (e.unstable_shouldYield = fe),
    (e.unstable_wrapCallback = function (I) {
      var A = p;
      return function () {
        var M = p;
        p = A;
        try {
          return I.apply(this, arguments);
        } finally {
          p = M;
        }
      };
    });
})(ep);
Zf.exports = ep;
var Mg = Zf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ug = h,
  Ge = Mg;
function P(e) {
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
var tp = new Set(),
  ms = {};
function Gn(e, t) {
  jr(e, t), jr(e + "Capture", t);
}
function jr(e, t) {
  for (ms[e] = t, e = 0; e < t.length; e++) tp.add(t[e]);
}
var Ut = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Yl = Object.prototype.hasOwnProperty,
  zg =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  bc = {},
  Bc = {};
function bg(e) {
  return Yl.call(Bc, e)
    ? !0
    : Yl.call(bc, e)
    ? !1
    : zg.test(e)
    ? (Bc[e] = !0)
    : ((bc[e] = !0), !1);
}
function Bg(e, t, n, r) {
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
function Wg(e, t, n, r) {
  if (t === null || typeof t > "u" || Bg(e, t, n, r)) return !0;
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
function Ie(e, t, n, r, s, o, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = s),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i);
}
var Ee = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Ee[e] = new Ie(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Ee[t] = new Ie(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Ee[e] = new Ie(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Ee[e] = new Ie(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Ee[e] = new Ie(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Ee[e] = new Ie(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Ee[e] = new Ie(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Ee[e] = new Ie(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Ee[e] = new Ie(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var yu = /[\-:]([a-z])/g;
function gu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(yu, gu);
    Ee[t] = new Ie(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(yu, gu);
    Ee[t] = new Ie(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(yu, gu);
  Ee[t] = new Ie(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Ee[e] = new Ie(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ee.xlinkHref = new Ie(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Ee[e] = new Ie(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function xu(e, t, n, r) {
  var s = Ee.hasOwnProperty(t) ? Ee[t] : null;
  (s !== null
    ? s.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Wg(t, n, s, r) && (n = null),
    r || s === null
      ? bg(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
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
var Vt = Ug.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  to = Symbol.for("react.element"),
  tr = Symbol.for("react.portal"),
  nr = Symbol.for("react.fragment"),
  vu = Symbol.for("react.strict_mode"),
  Zl = Symbol.for("react.profiler"),
  np = Symbol.for("react.provider"),
  rp = Symbol.for("react.context"),
  ju = Symbol.for("react.forward_ref"),
  ea = Symbol.for("react.suspense"),
  ta = Symbol.for("react.suspense_list"),
  wu = Symbol.for("react.memo"),
  Xt = Symbol.for("react.lazy"),
  sp = Symbol.for("react.offscreen"),
  Wc = Symbol.iterator;
function Wr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Wc && e[Wc]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var oe = Object.assign,
  dl;
function es(e) {
  if (dl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      dl = (t && t[1]) || "";
    }
  return (
    `
` +
    dl +
    e
  );
}
var fl = !1;
function pl(e, t) {
  if (!e || fl) return "";
  fl = !0;
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
          i = s.length - 1,
          a = o.length - 1;
        1 <= i && 0 <= a && s[i] !== o[a];

      )
        a--;
      for (; 1 <= i && 0 <= a; i--, a--)
        if (s[i] !== o[a]) {
          if (i !== 1 || a !== 1)
            do
              if ((i--, a--, 0 > a || s[i] !== o[a])) {
                var u =
                  `
` + s[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    u.includes("<anonymous>") &&
                    (u = u.replace("<anonymous>", e.displayName)),
                  u
                );
              }
            while (1 <= i && 0 <= a);
          break;
        }
    }
  } finally {
    (fl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? es(e) : "";
}
function Hg(e) {
  switch (e.tag) {
    case 5:
      return es(e.type);
    case 16:
      return es("Lazy");
    case 13:
      return es("Suspense");
    case 19:
      return es("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = pl(e.type, !1)), e;
    case 11:
      return (e = pl(e.type.render, !1)), e;
    case 1:
      return (e = pl(e.type, !0)), e;
    default:
      return "";
  }
}
function na(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case nr:
      return "Fragment";
    case tr:
      return "Portal";
    case Zl:
      return "Profiler";
    case vu:
      return "StrictMode";
    case ea:
      return "Suspense";
    case ta:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case rp:
        return (e.displayName || "Context") + ".Consumer";
      case np:
        return (e._context.displayName || "Context") + ".Provider";
      case ju:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case wu:
        return (
          (t = e.displayName || null), t !== null ? t : na(e.type) || "Memo"
        );
      case Xt:
        (t = e._payload), (e = e._init);
        try {
          return na(e(t));
        } catch {}
    }
  return null;
}
function Vg(e) {
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
      return na(t);
    case 8:
      return t === vu ? "StrictMode" : "Mode";
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
function mn(e) {
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
function op(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Kg(e) {
  var t = op(e) ? "checked" : "value",
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
        set: function (i) {
          (r = "" + i), o.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = "" + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function no(e) {
  e._valueTracker || (e._valueTracker = Kg(e));
}
function ip(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = op(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Do(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ra(e, t) {
  var n = t.checked;
  return oe({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Hc(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = mn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function lp(e, t) {
  (t = t.checked), t != null && xu(e, "checked", t, !1);
}
function sa(e, t) {
  lp(e, t);
  var n = mn(t.value),
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
    ? oa(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && oa(e, t.type, mn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Vc(e, t, n) {
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
function oa(e, t, n) {
  (t !== "number" || Do(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var ts = Array.isArray;
function hr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var s = 0; s < n.length; s++) t["$" + n[s]] = !0;
    for (n = 0; n < e.length; n++)
      (s = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== s && (e[n].selected = s),
        s && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + mn(n), t = null, s = 0; s < e.length; s++) {
      if (e[s].value === n) {
        (e[s].selected = !0), r && (e[s].defaultSelected = !0);
        return;
      }
      t !== null || e[s].disabled || (t = e[s]);
    }
    t !== null && (t.selected = !0);
  }
}
function ia(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(P(91));
  return oe({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Kc(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(P(92));
      if (ts(n)) {
        if (1 < n.length) throw Error(P(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: mn(n) };
}
function ap(e, t) {
  var n = mn(t.value),
    r = mn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Gc(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function up(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function la(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? up(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var ro,
  cp = (function (e) {
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
        ro = ro || document.createElement("div"),
          ro.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = ro.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function ys(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var is = {
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
  Gg = ["Webkit", "ms", "Moz", "O"];
Object.keys(is).forEach(function (e) {
  Gg.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (is[t] = is[e]);
  });
});
function dp(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (is.hasOwnProperty(e) && is[e])
    ? ("" + t).trim()
    : t + "px";
}
function fp(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        s = dp(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, s) : (e[n] = s);
    }
}
var Qg = oe(
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
function aa(e, t) {
  if (t) {
    if (Qg[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(P(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(P(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(P(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(P(62));
  }
}
function ua(e, t) {
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
var ca = null;
function Su(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var da = null,
  mr = null,
  yr = null;
function Qc(e) {
  if ((e = Bs(e))) {
    if (typeof da != "function") throw Error(P(280));
    var t = e.stateNode;
    t && ((t = Ri(t)), da(e.stateNode, e.type, t));
  }
}
function pp(e) {
  mr ? (yr ? yr.push(e) : (yr = [e])) : (mr = e);
}
function hp() {
  if (mr) {
    var e = mr,
      t = yr;
    if (((yr = mr = null), Qc(e), t)) for (e = 0; e < t.length; e++) Qc(t[e]);
  }
}
function mp(e, t) {
  return e(t);
}
function yp() {}
var hl = !1;
function gp(e, t, n) {
  if (hl) return e(t, n);
  hl = !0;
  try {
    return mp(e, t, n);
  } finally {
    (hl = !1), (mr !== null || yr !== null) && (yp(), hp());
  }
}
function gs(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Ri(n);
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
  if (n && typeof n != "function") throw Error(P(231, t, typeof n));
  return n;
}
var fa = !1;
if (Ut)
  try {
    var Hr = {};
    Object.defineProperty(Hr, "passive", {
      get: function () {
        fa = !0;
      },
    }),
      window.addEventListener("test", Hr, Hr),
      window.removeEventListener("test", Hr, Hr);
  } catch {
    fa = !1;
  }
function Jg(e, t, n, r, s, o, i, a, u) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (d) {
    this.onError(d);
  }
}
var ls = !1,
  Fo = null,
  Ao = !1,
  pa = null,
  qg = {
    onError: function (e) {
      (ls = !0), (Fo = e);
    },
  };
function Xg(e, t, n, r, s, o, i, a, u) {
  (ls = !1), (Fo = null), Jg.apply(qg, arguments);
}
function Yg(e, t, n, r, s, o, i, a, u) {
  if ((Xg.apply(this, arguments), ls)) {
    if (ls) {
      var c = Fo;
      (ls = !1), (Fo = null);
    } else throw Error(P(198));
    Ao || ((Ao = !0), (pa = c));
  }
}
function Qn(e) {
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
function xp(e) {
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
function Jc(e) {
  if (Qn(e) !== e) throw Error(P(188));
}
function Zg(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Qn(e)), t === null)) throw Error(P(188));
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
        if (o === n) return Jc(s), e;
        if (o === r) return Jc(s), t;
        o = o.sibling;
      }
      throw Error(P(188));
    }
    if (n.return !== r.return) (n = s), (r = o);
    else {
      for (var i = !1, a = s.child; a; ) {
        if (a === n) {
          (i = !0), (n = s), (r = o);
          break;
        }
        if (a === r) {
          (i = !0), (r = s), (n = o);
          break;
        }
        a = a.sibling;
      }
      if (!i) {
        for (a = o.child; a; ) {
          if (a === n) {
            (i = !0), (n = o), (r = s);
            break;
          }
          if (a === r) {
            (i = !0), (r = o), (n = s);
            break;
          }
          a = a.sibling;
        }
        if (!i) throw Error(P(189));
      }
    }
    if (n.alternate !== r) throw Error(P(190));
  }
  if (n.tag !== 3) throw Error(P(188));
  return n.stateNode.current === n ? e : t;
}
function vp(e) {
  return (e = Zg(e)), e !== null ? jp(e) : null;
}
function jp(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = jp(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var wp = Ge.unstable_scheduleCallback,
  qc = Ge.unstable_cancelCallback,
  ex = Ge.unstable_shouldYield,
  tx = Ge.unstable_requestPaint,
  ue = Ge.unstable_now,
  nx = Ge.unstable_getCurrentPriorityLevel,
  Eu = Ge.unstable_ImmediatePriority,
  Sp = Ge.unstable_UserBlockingPriority,
  Mo = Ge.unstable_NormalPriority,
  rx = Ge.unstable_LowPriority,
  Ep = Ge.unstable_IdlePriority,
  Ni = null,
  Ct = null;
function sx(e) {
  if (Ct && typeof Ct.onCommitFiberRoot == "function")
    try {
      Ct.onCommitFiberRoot(Ni, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var yt = Math.clz32 ? Math.clz32 : lx,
  ox = Math.log,
  ix = Math.LN2;
function lx(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((ox(e) / ix) | 0)) | 0;
}
var so = 64,
  oo = 4194304;
function ns(e) {
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
function Uo(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    s = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var a = i & ~s;
    a !== 0 ? (r = ns(a)) : ((o &= i), o !== 0 && (r = ns(o)));
  } else (i = n & ~s), i !== 0 ? (r = ns(i)) : o !== 0 && (r = ns(o));
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
      (n = 31 - yt(t)), (s = 1 << n), (r |= e[n]), (t &= ~s);
  return r;
}
function ax(e, t) {
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
function ux(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      s = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var i = 31 - yt(o),
      a = 1 << i,
      u = s[i];
    u === -1
      ? (!(a & n) || a & r) && (s[i] = ax(a, t))
      : u <= t && (e.expiredLanes |= a),
      (o &= ~a);
  }
}
function ha(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Np() {
  var e = so;
  return (so <<= 1), !(so & 4194240) && (so = 64), e;
}
function ml(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function zs(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - yt(t)),
    (e[t] = n);
}
function cx(e, t) {
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
    var s = 31 - yt(n),
      o = 1 << s;
    (t[s] = 0), (r[s] = -1), (e[s] = -1), (n &= ~o);
  }
}
function Nu(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - yt(n),
      s = 1 << r;
    (s & t) | (e[r] & t) && (e[r] |= t), (n &= ~s);
  }
}
var Q = 0;
function Cp(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var kp,
  Cu,
  _p,
  Rp,
  Pp,
  ma = !1,
  io = [],
  on = null,
  ln = null,
  an = null,
  xs = new Map(),
  vs = new Map(),
  en = [],
  dx =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Xc(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      on = null;
      break;
    case "dragenter":
    case "dragleave":
      ln = null;
      break;
    case "mouseover":
    case "mouseout":
      an = null;
      break;
    case "pointerover":
    case "pointerout":
      xs.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      vs.delete(t.pointerId);
  }
}
function Vr(e, t, n, r, s, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [s],
      }),
      t !== null && ((t = Bs(t)), t !== null && Cu(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      s !== null && t.indexOf(s) === -1 && t.push(s),
      e);
}
function fx(e, t, n, r, s) {
  switch (t) {
    case "focusin":
      return (on = Vr(on, e, t, n, r, s)), !0;
    case "dragenter":
      return (ln = Vr(ln, e, t, n, r, s)), !0;
    case "mouseover":
      return (an = Vr(an, e, t, n, r, s)), !0;
    case "pointerover":
      var o = s.pointerId;
      return xs.set(o, Vr(xs.get(o) || null, e, t, n, r, s)), !0;
    case "gotpointercapture":
      return (
        (o = s.pointerId), vs.set(o, Vr(vs.get(o) || null, e, t, n, r, s)), !0
      );
  }
  return !1;
}
function Op(e) {
  var t = Tn(e.target);
  if (t !== null) {
    var n = Qn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = xp(n)), t !== null)) {
          (e.blockedOn = t),
            Pp(e.priority, function () {
              _p(n);
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
function Eo(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ya(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (ca = r), n.target.dispatchEvent(r), (ca = null);
    } else return (t = Bs(n)), t !== null && Cu(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Yc(e, t, n) {
  Eo(e) && n.delete(t);
}
function px() {
  (ma = !1),
    on !== null && Eo(on) && (on = null),
    ln !== null && Eo(ln) && (ln = null),
    an !== null && Eo(an) && (an = null),
    xs.forEach(Yc),
    vs.forEach(Yc);
}
function Kr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    ma ||
      ((ma = !0),
      Ge.unstable_scheduleCallback(Ge.unstable_NormalPriority, px)));
}
function js(e) {
  function t(s) {
    return Kr(s, e);
  }
  if (0 < io.length) {
    Kr(io[0], e);
    for (var n = 1; n < io.length; n++) {
      var r = io[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    on !== null && Kr(on, e),
      ln !== null && Kr(ln, e),
      an !== null && Kr(an, e),
      xs.forEach(t),
      vs.forEach(t),
      n = 0;
    n < en.length;
    n++
  )
    (r = en[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < en.length && ((n = en[0]), n.blockedOn === null); )
    Op(n), n.blockedOn === null && en.shift();
}
var gr = Vt.ReactCurrentBatchConfig,
  zo = !0;
function hx(e, t, n, r) {
  var s = Q,
    o = gr.transition;
  gr.transition = null;
  try {
    (Q = 1), ku(e, t, n, r);
  } finally {
    (Q = s), (gr.transition = o);
  }
}
function mx(e, t, n, r) {
  var s = Q,
    o = gr.transition;
  gr.transition = null;
  try {
    (Q = 4), ku(e, t, n, r);
  } finally {
    (Q = s), (gr.transition = o);
  }
}
function ku(e, t, n, r) {
  if (zo) {
    var s = ya(e, t, n, r);
    if (s === null) Cl(e, t, r, bo, n), Xc(e, r);
    else if (fx(s, e, t, n, r)) r.stopPropagation();
    else if ((Xc(e, r), t & 4 && -1 < dx.indexOf(e))) {
      for (; s !== null; ) {
        var o = Bs(s);
        if (
          (o !== null && kp(o),
          (o = ya(e, t, n, r)),
          o === null && Cl(e, t, r, bo, n),
          o === s)
        )
          break;
        s = o;
      }
      s !== null && r.stopPropagation();
    } else Cl(e, t, r, null, n);
  }
}
var bo = null;
function ya(e, t, n, r) {
  if (((bo = null), (e = Su(r)), (e = Tn(e)), e !== null))
    if (((t = Qn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = xp(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (bo = e), null;
}
function Tp(e) {
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
      switch (nx()) {
        case Eu:
          return 1;
        case Sp:
          return 4;
        case Mo:
        case rx:
          return 16;
        case Ep:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var nn = null,
  _u = null,
  No = null;
function Ip() {
  if (No) return No;
  var e,
    t = _u,
    n = t.length,
    r,
    s = "value" in nn ? nn.value : nn.textContent,
    o = s.length;
  for (e = 0; e < n && t[e] === s[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === s[o - r]; r++);
  return (No = s.slice(e, 1 < r ? 1 - r : void 0));
}
function Co(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function lo() {
  return !0;
}
function Zc() {
  return !1;
}
function Xe(e) {
  function t(n, r, s, o, i) {
    (this._reactName = n),
      (this._targetInst = s),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = i),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(o) : o[a]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? lo
        : Zc),
      (this.isPropagationStopped = Zc),
      this
    );
  }
  return (
    oe(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = lo));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = lo));
      },
      persist: function () {},
      isPersistent: lo,
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
  Ru = Xe(Or),
  bs = oe({}, Or, { view: 0, detail: 0 }),
  yx = Xe(bs),
  yl,
  gl,
  Gr,
  Ci = oe({}, bs, {
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
    getModifierState: Pu,
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
        : (e !== Gr &&
            (Gr && e.type === "mousemove"
              ? ((yl = e.screenX - Gr.screenX), (gl = e.screenY - Gr.screenY))
              : (gl = yl = 0),
            (Gr = e)),
          yl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : gl;
    },
  }),
  ed = Xe(Ci),
  gx = oe({}, Ci, { dataTransfer: 0 }),
  xx = Xe(gx),
  vx = oe({}, bs, { relatedTarget: 0 }),
  xl = Xe(vx),
  jx = oe({}, Or, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  wx = Xe(jx),
  Sx = oe({}, Or, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Ex = Xe(Sx),
  Nx = oe({}, Or, { data: 0 }),
  td = Xe(Nx),
  Cx = {
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
  kx = {
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
  _x = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Rx(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = _x[e]) ? !!t[e] : !1;
}
function Pu() {
  return Rx;
}
var Px = oe({}, bs, {
    key: function (e) {
      if (e.key) {
        var t = Cx[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Co(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? kx[e.keyCode] || "Unidentified"
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
    getModifierState: Pu,
    charCode: function (e) {
      return e.type === "keypress" ? Co(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Co(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Ox = Xe(Px),
  Tx = oe({}, Ci, {
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
  nd = Xe(Tx),
  Ix = oe({}, bs, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Pu,
  }),
  Lx = Xe(Ix),
  $x = oe({}, Or, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Dx = Xe($x),
  Fx = oe({}, Ci, {
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
  Ax = Xe(Fx),
  Mx = [9, 13, 27, 32],
  Ou = Ut && "CompositionEvent" in window,
  as = null;
Ut && "documentMode" in document && (as = document.documentMode);
var Ux = Ut && "TextEvent" in window && !as,
  Lp = Ut && (!Ou || (as && 8 < as && 11 >= as)),
  rd = " ",
  sd = !1;
function $p(e, t) {
  switch (e) {
    case "keyup":
      return Mx.indexOf(t.keyCode) !== -1;
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
function Dp(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var rr = !1;
function zx(e, t) {
  switch (e) {
    case "compositionend":
      return Dp(t);
    case "keypress":
      return t.which !== 32 ? null : ((sd = !0), rd);
    case "textInput":
      return (e = t.data), e === rd && sd ? null : e;
    default:
      return null;
  }
}
function bx(e, t) {
  if (rr)
    return e === "compositionend" || (!Ou && $p(e, t))
      ? ((e = Ip()), (No = _u = nn = null), (rr = !1), e)
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
      return Lp && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Bx = {
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
function od(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Bx[e.type] : t === "textarea";
}
function Fp(e, t, n, r) {
  pp(r),
    (t = Bo(t, "onChange")),
    0 < t.length &&
      ((n = new Ru("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var us = null,
  ws = null;
function Wx(e) {
  Gp(e, 0);
}
function ki(e) {
  var t = ir(e);
  if (ip(t)) return e;
}
function Hx(e, t) {
  if (e === "change") return t;
}
var Ap = !1;
if (Ut) {
  var vl;
  if (Ut) {
    var jl = "oninput" in document;
    if (!jl) {
      var id = document.createElement("div");
      id.setAttribute("oninput", "return;"),
        (jl = typeof id.oninput == "function");
    }
    vl = jl;
  } else vl = !1;
  Ap = vl && (!document.documentMode || 9 < document.documentMode);
}
function ld() {
  us && (us.detachEvent("onpropertychange", Mp), (ws = us = null));
}
function Mp(e) {
  if (e.propertyName === "value" && ki(ws)) {
    var t = [];
    Fp(t, ws, e, Su(e)), gp(Wx, t);
  }
}
function Vx(e, t, n) {
  e === "focusin"
    ? (ld(), (us = t), (ws = n), us.attachEvent("onpropertychange", Mp))
    : e === "focusout" && ld();
}
function Kx(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return ki(ws);
}
function Gx(e, t) {
  if (e === "click") return ki(t);
}
function Qx(e, t) {
  if (e === "input" || e === "change") return ki(t);
}
function Jx(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var jt = typeof Object.is == "function" ? Object.is : Jx;
function Ss(e, t) {
  if (jt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var s = n[r];
    if (!Yl.call(t, s) || !jt(e[s], t[s])) return !1;
  }
  return !0;
}
function ad(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function ud(e, t) {
  var n = ad(e);
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
    n = ad(n);
  }
}
function Up(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Up(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function zp() {
  for (var e = window, t = Do(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Do(e.document);
  }
  return t;
}
function Tu(e) {
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
function qx(e) {
  var t = zp(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Up(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Tu(n)) {
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
          (s = ud(n, o));
        var i = ud(n, r);
        s &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== s.node ||
            e.anchorOffset !== s.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(s.node, s.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
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
var Xx = Ut && "documentMode" in document && 11 >= document.documentMode,
  sr = null,
  ga = null,
  cs = null,
  xa = !1;
function cd(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  xa ||
    sr == null ||
    sr !== Do(r) ||
    ((r = sr),
    "selectionStart" in r && Tu(r)
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
    (cs && Ss(cs, r)) ||
      ((cs = r),
      (r = Bo(ga, "onSelect")),
      0 < r.length &&
        ((t = new Ru("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = sr))));
}
function ao(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var or = {
    animationend: ao("Animation", "AnimationEnd"),
    animationiteration: ao("Animation", "AnimationIteration"),
    animationstart: ao("Animation", "AnimationStart"),
    transitionend: ao("Transition", "TransitionEnd"),
  },
  wl = {},
  bp = {};
Ut &&
  ((bp = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete or.animationend.animation,
    delete or.animationiteration.animation,
    delete or.animationstart.animation),
  "TransitionEvent" in window || delete or.transitionend.transition);
function _i(e) {
  if (wl[e]) return wl[e];
  if (!or[e]) return e;
  var t = or[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in bp) return (wl[e] = t[n]);
  return e;
}
var Bp = _i("animationend"),
  Wp = _i("animationiteration"),
  Hp = _i("animationstart"),
  Vp = _i("transitionend"),
  Kp = new Map(),
  dd =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function wn(e, t) {
  Kp.set(e, t), Gn(t, [e]);
}
for (var Sl = 0; Sl < dd.length; Sl++) {
  var El = dd[Sl],
    Yx = El.toLowerCase(),
    Zx = El[0].toUpperCase() + El.slice(1);
  wn(Yx, "on" + Zx);
}
wn(Bp, "onAnimationEnd");
wn(Wp, "onAnimationIteration");
wn(Hp, "onAnimationStart");
wn("dblclick", "onDoubleClick");
wn("focusin", "onFocus");
wn("focusout", "onBlur");
wn(Vp, "onTransitionEnd");
jr("onMouseEnter", ["mouseout", "mouseover"]);
jr("onMouseLeave", ["mouseout", "mouseover"]);
jr("onPointerEnter", ["pointerout", "pointerover"]);
jr("onPointerLeave", ["pointerout", "pointerover"]);
Gn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Gn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Gn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Gn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Gn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Gn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var rs =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  ev = new Set("cancel close invalid load scroll toggle".split(" ").concat(rs));
function fd(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Yg(r, t, void 0, e), (e.currentTarget = null);
}
function Gp(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      s = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var a = r[i],
            u = a.instance,
            c = a.currentTarget;
          if (((a = a.listener), u !== o && s.isPropagationStopped())) break e;
          fd(s, a, c), (o = u);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((a = r[i]),
            (u = a.instance),
            (c = a.currentTarget),
            (a = a.listener),
            u !== o && s.isPropagationStopped())
          )
            break e;
          fd(s, a, c), (o = u);
        }
    }
  }
  if (Ao) throw ((e = pa), (Ao = !1), (pa = null), e);
}
function Y(e, t) {
  var n = t[Ea];
  n === void 0 && (n = t[Ea] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Qp(t, e, 2, !1), n.add(r));
}
function Nl(e, t, n) {
  var r = 0;
  t && (r |= 4), Qp(n, e, r, t);
}
var uo = "_reactListening" + Math.random().toString(36).slice(2);
function Es(e) {
  if (!e[uo]) {
    (e[uo] = !0),
      tp.forEach(function (n) {
        n !== "selectionchange" && (ev.has(n) || Nl(n, !1, e), Nl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[uo] || ((t[uo] = !0), Nl("selectionchange", !1, t));
  }
}
function Qp(e, t, n, r) {
  switch (Tp(t)) {
    case 1:
      var s = hx;
      break;
    case 4:
      s = mx;
      break;
    default:
      s = ku;
  }
  (n = s.bind(null, t, n, e)),
    (s = void 0),
    !fa ||
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
function Cl(e, t, n, r, s) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var a = r.stateNode.containerInfo;
        if (a === s || (a.nodeType === 8 && a.parentNode === s)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var u = i.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = i.stateNode.containerInfo),
              u === s || (u.nodeType === 8 && u.parentNode === s))
            )
              return;
            i = i.return;
          }
        for (; a !== null; ) {
          if (((i = Tn(a)), i === null)) return;
          if (((u = i.tag), u === 5 || u === 6)) {
            r = o = i;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  gp(function () {
    var c = o,
      d = Su(n),
      f = [];
    e: {
      var p = Kp.get(e);
      if (p !== void 0) {
        var v = Ru,
          m = e;
        switch (e) {
          case "keypress":
            if (Co(n) === 0) break e;
          case "keydown":
          case "keyup":
            v = Ox;
            break;
          case "focusin":
            (m = "focus"), (v = xl);
            break;
          case "focusout":
            (m = "blur"), (v = xl);
            break;
          case "beforeblur":
          case "afterblur":
            v = xl;
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
            v = ed;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = xx;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = Lx;
            break;
          case Bp:
          case Wp:
          case Hp:
            v = wx;
            break;
          case Vp:
            v = Dx;
            break;
          case "scroll":
            v = yx;
            break;
          case "wheel":
            v = Ax;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = Ex;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = nd;
        }
        var S = (t & 4) !== 0,
          j = !S && e === "scroll",
          x = S ? (p !== null ? p + "Capture" : null) : p;
        S = [];
        for (var g = c, y; g !== null; ) {
          y = g;
          var w = y.stateNode;
          if (
            (y.tag === 5 &&
              w !== null &&
              ((y = w),
              x !== null && ((w = gs(g, x)), w != null && S.push(Ns(g, w, y)))),
            j)
          )
            break;
          g = g.return;
        }
        0 < S.length &&
          ((p = new v(p, m, null, n, d)), f.push({ event: p, listeners: S }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === "mouseover" || e === "pointerover"),
          (v = e === "mouseout" || e === "pointerout"),
          p &&
            n !== ca &&
            (m = n.relatedTarget || n.fromElement) &&
            (Tn(m) || m[zt]))
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
            ? ((m = n.relatedTarget || n.toElement),
              (v = c),
              (m = m ? Tn(m) : null),
              m !== null &&
                ((j = Qn(m)), m !== j || (m.tag !== 5 && m.tag !== 6)) &&
                (m = null))
            : ((v = null), (m = c)),
          v !== m)
        ) {
          if (
            ((S = ed),
            (w = "onMouseLeave"),
            (x = "onMouseEnter"),
            (g = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((S = nd),
              (w = "onPointerLeave"),
              (x = "onPointerEnter"),
              (g = "pointer")),
            (j = v == null ? p : ir(v)),
            (y = m == null ? p : ir(m)),
            (p = new S(w, g + "leave", v, n, d)),
            (p.target = j),
            (p.relatedTarget = y),
            (w = null),
            Tn(d) === c &&
              ((S = new S(x, g + "enter", m, n, d)),
              (S.target = y),
              (S.relatedTarget = j),
              (w = S)),
            (j = w),
            v && m)
          )
            t: {
              for (S = v, x = m, g = 0, y = S; y; y = Yn(y)) g++;
              for (y = 0, w = x; w; w = Yn(w)) y++;
              for (; 0 < g - y; ) (S = Yn(S)), g--;
              for (; 0 < y - g; ) (x = Yn(x)), y--;
              for (; g--; ) {
                if (S === x || (x !== null && S === x.alternate)) break t;
                (S = Yn(S)), (x = Yn(x));
              }
              S = null;
            }
          else S = null;
          v !== null && pd(f, p, v, S, !1),
            m !== null && j !== null && pd(f, j, m, S, !0);
        }
      }
      e: {
        if (
          ((p = c ? ir(c) : window),
          (v = p.nodeName && p.nodeName.toLowerCase()),
          v === "select" || (v === "input" && p.type === "file"))
        )
          var C = Hx;
        else if (od(p))
          if (Ap) C = Qx;
          else {
            C = Kx;
            var k = Vx;
          }
        else
          (v = p.nodeName) &&
            v.toLowerCase() === "input" &&
            (p.type === "checkbox" || p.type === "radio") &&
            (C = Gx);
        if (C && (C = C(e, c))) {
          Fp(f, C, n, d);
          break e;
        }
        k && k(e, p, c),
          e === "focusout" &&
            (k = p._wrapperState) &&
            k.controlled &&
            p.type === "number" &&
            oa(p, "number", p.value);
      }
      switch (((k = c ? ir(c) : window), e)) {
        case "focusin":
          (od(k) || k.contentEditable === "true") &&
            ((sr = k), (ga = c), (cs = null));
          break;
        case "focusout":
          cs = ga = sr = null;
          break;
        case "mousedown":
          xa = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (xa = !1), cd(f, n, d);
          break;
        case "selectionchange":
          if (Xx) break;
        case "keydown":
        case "keyup":
          cd(f, n, d);
      }
      var R;
      if (Ou)
        e: {
          switch (e) {
            case "compositionstart":
              var T = "onCompositionStart";
              break e;
            case "compositionend":
              T = "onCompositionEnd";
              break e;
            case "compositionupdate":
              T = "onCompositionUpdate";
              break e;
          }
          T = void 0;
        }
      else
        rr
          ? $p(e, n) && (T = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T &&
        (Lp &&
          n.locale !== "ko" &&
          (rr || T !== "onCompositionStart"
            ? T === "onCompositionEnd" && rr && (R = Ip())
            : ((nn = d),
              (_u = "value" in nn ? nn.value : nn.textContent),
              (rr = !0))),
        (k = Bo(c, T)),
        0 < k.length &&
          ((T = new td(T, e, null, n, d)),
          f.push({ event: T, listeners: k }),
          R ? (T.data = R) : ((R = Dp(n)), R !== null && (T.data = R)))),
        (R = Ux ? zx(e, n) : bx(e, n)) &&
          ((c = Bo(c, "onBeforeInput")),
          0 < c.length &&
            ((d = new td("onBeforeInput", "beforeinput", null, n, d)),
            f.push({ event: d, listeners: c }),
            (d.data = R)));
    }
    Gp(f, t);
  });
}
function Ns(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Bo(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var s = e,
      o = s.stateNode;
    s.tag === 5 &&
      o !== null &&
      ((s = o),
      (o = gs(e, n)),
      o != null && r.unshift(Ns(e, o, s)),
      (o = gs(e, t)),
      o != null && r.push(Ns(e, o, s))),
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
function pd(e, t, n, r, s) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var a = n,
      u = a.alternate,
      c = a.stateNode;
    if (u !== null && u === r) break;
    a.tag === 5 &&
      c !== null &&
      ((a = c),
      s
        ? ((u = gs(n, o)), u != null && i.unshift(Ns(n, u, a)))
        : s || ((u = gs(n, o)), u != null && i.push(Ns(n, u, a)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var tv = /\r\n?/g,
  nv = /\u0000|\uFFFD/g;
function hd(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      tv,
      `
`
    )
    .replace(nv, "");
}
function co(e, t, n) {
  if (((t = hd(t)), hd(e) !== t && n)) throw Error(P(425));
}
function Wo() {}
var va = null,
  ja = null;
function wa(e, t) {
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
var Sa = typeof setTimeout == "function" ? setTimeout : void 0,
  rv = typeof clearTimeout == "function" ? clearTimeout : void 0,
  md = typeof Promise == "function" ? Promise : void 0,
  sv =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof md < "u"
      ? function (e) {
          return md.resolve(null).then(e).catch(ov);
        }
      : Sa;
function ov(e) {
  setTimeout(function () {
    throw e;
  });
}
function kl(e, t) {
  var n = t,
    r = 0;
  do {
    var s = n.nextSibling;
    if ((e.removeChild(n), s && s.nodeType === 8))
      if (((n = s.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(s), js(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = s;
  } while (n);
  js(t);
}
function un(e) {
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
function yd(e) {
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
  Nt = "__reactFiber$" + Tr,
  Cs = "__reactProps$" + Tr,
  zt = "__reactContainer$" + Tr,
  Ea = "__reactEvents$" + Tr,
  iv = "__reactListeners$" + Tr,
  lv = "__reactHandles$" + Tr;
function Tn(e) {
  var t = e[Nt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[zt] || n[Nt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = yd(e); e !== null; ) {
          if ((n = e[Nt])) return n;
          e = yd(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Bs(e) {
  return (
    (e = e[Nt] || e[zt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function ir(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(P(33));
}
function Ri(e) {
  return e[Cs] || null;
}
var Na = [],
  lr = -1;
function Sn(e) {
  return { current: e };
}
function Z(e) {
  0 > lr || ((e.current = Na[lr]), (Na[lr] = null), lr--);
}
function X(e, t) {
  lr++, (Na[lr] = e.current), (e.current = t);
}
var yn = {},
  _e = Sn(yn),
  Ae = Sn(!1),
  Mn = yn;
function wr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return yn;
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
function Me(e) {
  return (e = e.childContextTypes), e != null;
}
function Ho() {
  Z(Ae), Z(_e);
}
function gd(e, t, n) {
  if (_e.current !== yn) throw Error(P(168));
  X(_e, t), X(Ae, n);
}
function Jp(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var s in r) if (!(s in t)) throw Error(P(108, Vg(e) || "Unknown", s));
  return oe({}, n, r);
}
function Vo(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || yn),
    (Mn = _e.current),
    X(_e, e),
    X(Ae, Ae.current),
    !0
  );
}
function xd(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(P(169));
  n
    ? ((e = Jp(e, t, Mn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      Z(Ae),
      Z(_e),
      X(_e, e))
    : Z(Ae),
    X(Ae, n);
}
var Tt = null,
  Pi = !1,
  _l = !1;
function qp(e) {
  Tt === null ? (Tt = [e]) : Tt.push(e);
}
function av(e) {
  (Pi = !0), qp(e);
}
function En() {
  if (!_l && Tt !== null) {
    _l = !0;
    var e = 0,
      t = Q;
    try {
      var n = Tt;
      for (Q = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Tt = null), (Pi = !1);
    } catch (s) {
      throw (Tt !== null && (Tt = Tt.slice(e + 1)), wp(Eu, En), s);
    } finally {
      (Q = t), (_l = !1);
    }
  }
  return null;
}
var ar = [],
  ur = 0,
  Ko = null,
  Go = 0,
  Ze = [],
  et = 0,
  Un = null,
  Dt = 1,
  Ft = "";
function _n(e, t) {
  (ar[ur++] = Go), (ar[ur++] = Ko), (Ko = e), (Go = t);
}
function Xp(e, t, n) {
  (Ze[et++] = Dt), (Ze[et++] = Ft), (Ze[et++] = Un), (Un = e);
  var r = Dt;
  e = Ft;
  var s = 32 - yt(r) - 1;
  (r &= ~(1 << s)), (n += 1);
  var o = 32 - yt(t) + s;
  if (30 < o) {
    var i = s - (s % 5);
    (o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (s -= i),
      (Dt = (1 << (32 - yt(t) + s)) | (n << s) | r),
      (Ft = o + e);
  } else (Dt = (1 << o) | (n << s) | r), (Ft = e);
}
function Iu(e) {
  e.return !== null && (_n(e, 1), Xp(e, 1, 0));
}
function Lu(e) {
  for (; e === Ko; )
    (Ko = ar[--ur]), (ar[ur] = null), (Go = ar[--ur]), (ar[ur] = null);
  for (; e === Un; )
    (Un = Ze[--et]),
      (Ze[et] = null),
      (Ft = Ze[--et]),
      (Ze[et] = null),
      (Dt = Ze[--et]),
      (Ze[et] = null);
}
var Ve = null,
  We = null,
  ee = !1,
  pt = null;
function Yp(e, t) {
  var n = nt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function vd(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ve = e), (We = un(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ve = e), (We = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Un !== null ? { id: Dt, overflow: Ft } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = nt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ve = e),
            (We = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Ca(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ka(e) {
  if (ee) {
    var t = We;
    if (t) {
      var n = t;
      if (!vd(e, t)) {
        if (Ca(e)) throw Error(P(418));
        t = un(n.nextSibling);
        var r = Ve;
        t && vd(e, t)
          ? Yp(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (ee = !1), (Ve = e));
      }
    } else {
      if (Ca(e)) throw Error(P(418));
      (e.flags = (e.flags & -4097) | 2), (ee = !1), (Ve = e);
    }
  }
}
function jd(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ve = e;
}
function fo(e) {
  if (e !== Ve) return !1;
  if (!ee) return jd(e), (ee = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !wa(e.type, e.memoizedProps))),
    t && (t = We))
  ) {
    if (Ca(e)) throw (Zp(), Error(P(418)));
    for (; t; ) Yp(e, t), (t = un(t.nextSibling));
  }
  if ((jd(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(P(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              We = un(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      We = null;
    }
  } else We = Ve ? un(e.stateNode.nextSibling) : null;
  return !0;
}
function Zp() {
  for (var e = We; e; ) e = un(e.nextSibling);
}
function Sr() {
  (We = Ve = null), (ee = !1);
}
function $u(e) {
  pt === null ? (pt = [e]) : pt.push(e);
}
var uv = Vt.ReactCurrentBatchConfig;
function Qr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(P(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(P(147, e));
      var s = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (i) {
            var a = s.refs;
            i === null ? delete a[o] : (a[o] = i);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(P(284));
    if (!n._owner) throw Error(P(290, e));
  }
  return e;
}
function po(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      P(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function wd(e) {
  var t = e._init;
  return t(e._payload);
}
function eh(e) {
  function t(x, g) {
    if (e) {
      var y = x.deletions;
      y === null ? ((x.deletions = [g]), (x.flags |= 16)) : y.push(g);
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
    return (x = pn(x, g)), (x.index = 0), (x.sibling = null), x;
  }
  function o(x, g, y) {
    return (
      (x.index = y),
      e
        ? ((y = x.alternate),
          y !== null
            ? ((y = y.index), y < g ? ((x.flags |= 2), g) : y)
            : ((x.flags |= 2), g))
        : ((x.flags |= 1048576), g)
    );
  }
  function i(x) {
    return e && x.alternate === null && (x.flags |= 2), x;
  }
  function a(x, g, y, w) {
    return g === null || g.tag !== 6
      ? ((g = $l(y, x.mode, w)), (g.return = x), g)
      : ((g = s(g, y)), (g.return = x), g);
  }
  function u(x, g, y, w) {
    var C = y.type;
    return C === nr
      ? d(x, g, y.props.children, w, y.key)
      : g !== null &&
        (g.elementType === C ||
          (typeof C == "object" &&
            C !== null &&
            C.$$typeof === Xt &&
            wd(C) === g.type))
      ? ((w = s(g, y.props)), (w.ref = Qr(x, g, y)), (w.return = x), w)
      : ((w = Io(y.type, y.key, y.props, null, x.mode, w)),
        (w.ref = Qr(x, g, y)),
        (w.return = x),
        w);
  }
  function c(x, g, y, w) {
    return g === null ||
      g.tag !== 4 ||
      g.stateNode.containerInfo !== y.containerInfo ||
      g.stateNode.implementation !== y.implementation
      ? ((g = Dl(y, x.mode, w)), (g.return = x), g)
      : ((g = s(g, y.children || [])), (g.return = x), g);
  }
  function d(x, g, y, w, C) {
    return g === null || g.tag !== 7
      ? ((g = Fn(y, x.mode, w, C)), (g.return = x), g)
      : ((g = s(g, y)), (g.return = x), g);
  }
  function f(x, g, y) {
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return (g = $l("" + g, x.mode, y)), (g.return = x), g;
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case to:
          return (
            (y = Io(g.type, g.key, g.props, null, x.mode, y)),
            (y.ref = Qr(x, null, g)),
            (y.return = x),
            y
          );
        case tr:
          return (g = Dl(g, x.mode, y)), (g.return = x), g;
        case Xt:
          var w = g._init;
          return f(x, w(g._payload), y);
      }
      if (ts(g) || Wr(g))
        return (g = Fn(g, x.mode, y, null)), (g.return = x), g;
      po(x, g);
    }
    return null;
  }
  function p(x, g, y, w) {
    var C = g !== null ? g.key : null;
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return C !== null ? null : a(x, g, "" + y, w);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case to:
          return y.key === C ? u(x, g, y, w) : null;
        case tr:
          return y.key === C ? c(x, g, y, w) : null;
        case Xt:
          return (C = y._init), p(x, g, C(y._payload), w);
      }
      if (ts(y) || Wr(y)) return C !== null ? null : d(x, g, y, w, null);
      po(x, y);
    }
    return null;
  }
  function v(x, g, y, w, C) {
    if ((typeof w == "string" && w !== "") || typeof w == "number")
      return (x = x.get(y) || null), a(g, x, "" + w, C);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case to:
          return (x = x.get(w.key === null ? y : w.key) || null), u(g, x, w, C);
        case tr:
          return (x = x.get(w.key === null ? y : w.key) || null), c(g, x, w, C);
        case Xt:
          var k = w._init;
          return v(x, g, y, k(w._payload), C);
      }
      if (ts(w) || Wr(w)) return (x = x.get(y) || null), d(g, x, w, C, null);
      po(g, w);
    }
    return null;
  }
  function m(x, g, y, w) {
    for (
      var C = null, k = null, R = g, T = (g = 0), W = null;
      R !== null && T < y.length;
      T++
    ) {
      R.index > T ? ((W = R), (R = null)) : (W = R.sibling);
      var $ = p(x, R, y[T], w);
      if ($ === null) {
        R === null && (R = W);
        break;
      }
      e && R && $.alternate === null && t(x, R),
        (g = o($, g, T)),
        k === null ? (C = $) : (k.sibling = $),
        (k = $),
        (R = W);
    }
    if (T === y.length) return n(x, R), ee && _n(x, T), C;
    if (R === null) {
      for (; T < y.length; T++)
        (R = f(x, y[T], w)),
          R !== null &&
            ((g = o(R, g, T)), k === null ? (C = R) : (k.sibling = R), (k = R));
      return ee && _n(x, T), C;
    }
    for (R = r(x, R); T < y.length; T++)
      (W = v(R, x, T, y[T], w)),
        W !== null &&
          (e && W.alternate !== null && R.delete(W.key === null ? T : W.key),
          (g = o(W, g, T)),
          k === null ? (C = W) : (k.sibling = W),
          (k = W));
    return (
      e &&
        R.forEach(function (fe) {
          return t(x, fe);
        }),
      ee && _n(x, T),
      C
    );
  }
  function S(x, g, y, w) {
    var C = Wr(y);
    if (typeof C != "function") throw Error(P(150));
    if (((y = C.call(y)), y == null)) throw Error(P(151));
    for (
      var k = (C = null), R = g, T = (g = 0), W = null, $ = y.next();
      R !== null && !$.done;
      T++, $ = y.next()
    ) {
      R.index > T ? ((W = R), (R = null)) : (W = R.sibling);
      var fe = p(x, R, $.value, w);
      if (fe === null) {
        R === null && (R = W);
        break;
      }
      e && R && fe.alternate === null && t(x, R),
        (g = o(fe, g, T)),
        k === null ? (C = fe) : (k.sibling = fe),
        (k = fe),
        (R = W);
    }
    if ($.done) return n(x, R), ee && _n(x, T), C;
    if (R === null) {
      for (; !$.done; T++, $ = y.next())
        ($ = f(x, $.value, w)),
          $ !== null &&
            ((g = o($, g, T)), k === null ? (C = $) : (k.sibling = $), (k = $));
      return ee && _n(x, T), C;
    }
    for (R = r(x, R); !$.done; T++, $ = y.next())
      ($ = v(R, x, T, $.value, w)),
        $ !== null &&
          (e && $.alternate !== null && R.delete($.key === null ? T : $.key),
          (g = o($, g, T)),
          k === null ? (C = $) : (k.sibling = $),
          (k = $));
    return (
      e &&
        R.forEach(function (Rt) {
          return t(x, Rt);
        }),
      ee && _n(x, T),
      C
    );
  }
  function j(x, g, y, w) {
    if (
      (typeof y == "object" &&
        y !== null &&
        y.type === nr &&
        y.key === null &&
        (y = y.props.children),
      typeof y == "object" && y !== null)
    ) {
      switch (y.$$typeof) {
        case to:
          e: {
            for (var C = y.key, k = g; k !== null; ) {
              if (k.key === C) {
                if (((C = y.type), C === nr)) {
                  if (k.tag === 7) {
                    n(x, k.sibling),
                      (g = s(k, y.props.children)),
                      (g.return = x),
                      (x = g);
                    break e;
                  }
                } else if (
                  k.elementType === C ||
                  (typeof C == "object" &&
                    C !== null &&
                    C.$$typeof === Xt &&
                    wd(C) === k.type)
                ) {
                  n(x, k.sibling),
                    (g = s(k, y.props)),
                    (g.ref = Qr(x, k, y)),
                    (g.return = x),
                    (x = g);
                  break e;
                }
                n(x, k);
                break;
              } else t(x, k);
              k = k.sibling;
            }
            y.type === nr
              ? ((g = Fn(y.props.children, x.mode, w, y.key)),
                (g.return = x),
                (x = g))
              : ((w = Io(y.type, y.key, y.props, null, x.mode, w)),
                (w.ref = Qr(x, g, y)),
                (w.return = x),
                (x = w));
          }
          return i(x);
        case tr:
          e: {
            for (k = y.key; g !== null; ) {
              if (g.key === k)
                if (
                  g.tag === 4 &&
                  g.stateNode.containerInfo === y.containerInfo &&
                  g.stateNode.implementation === y.implementation
                ) {
                  n(x, g.sibling),
                    (g = s(g, y.children || [])),
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
            (g = Dl(y, x.mode, w)), (g.return = x), (x = g);
          }
          return i(x);
        case Xt:
          return (k = y._init), j(x, g, k(y._payload), w);
      }
      if (ts(y)) return m(x, g, y, w);
      if (Wr(y)) return S(x, g, y, w);
      po(x, y);
    }
    return (typeof y == "string" && y !== "") || typeof y == "number"
      ? ((y = "" + y),
        g !== null && g.tag === 6
          ? (n(x, g.sibling), (g = s(g, y)), (g.return = x), (x = g))
          : (n(x, g), (g = $l(y, x.mode, w)), (g.return = x), (x = g)),
        i(x))
      : n(x, g);
  }
  return j;
}
var Er = eh(!0),
  th = eh(!1),
  Qo = Sn(null),
  Jo = null,
  cr = null,
  Du = null;
function Fu() {
  Du = cr = Jo = null;
}
function Au(e) {
  var t = Qo.current;
  Z(Qo), (e._currentValue = t);
}
function _a(e, t, n) {
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
function xr(e, t) {
  (Jo = e),
    (Du = cr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Fe = !0), (e.firstContext = null));
}
function st(e) {
  var t = e._currentValue;
  if (Du !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), cr === null)) {
      if (Jo === null) throw Error(P(308));
      (cr = e), (Jo.dependencies = { lanes: 0, firstContext: e });
    } else cr = cr.next = e;
  return t;
}
var In = null;
function Mu(e) {
  In === null ? (In = [e]) : In.push(e);
}
function nh(e, t, n, r) {
  var s = t.interleaved;
  return (
    s === null ? ((n.next = n), Mu(t)) : ((n.next = s.next), (s.next = n)),
    (t.interleaved = n),
    bt(e, r)
  );
}
function bt(e, t) {
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
var Yt = !1;
function Uu(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function rh(e, t) {
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
function cn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), V & 2)) {
    var s = r.pending;
    return (
      s === null ? (t.next = t) : ((t.next = s.next), (s.next = t)),
      (r.pending = t),
      bt(e, n)
    );
  }
  return (
    (s = r.interleaved),
    s === null ? ((t.next = t), Mu(r)) : ((t.next = s.next), (s.next = t)),
    (r.interleaved = t),
    bt(e, n)
  );
}
function ko(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Nu(e, n);
  }
}
function Sd(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var s = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (s = o = i) : (o = o.next = i), (n = n.next);
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
function qo(e, t, n, r) {
  var s = e.updateQueue;
  Yt = !1;
  var o = s.firstBaseUpdate,
    i = s.lastBaseUpdate,
    a = s.shared.pending;
  if (a !== null) {
    s.shared.pending = null;
    var u = a,
      c = u.next;
    (u.next = null), i === null ? (o = c) : (i.next = c), (i = u);
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (a = d.lastBaseUpdate),
      a !== i &&
        (a === null ? (d.firstBaseUpdate = c) : (a.next = c),
        (d.lastBaseUpdate = u)));
  }
  if (o !== null) {
    var f = s.baseState;
    (i = 0), (d = c = u = null), (a = o);
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
          var m = e,
            S = a;
          switch (((p = t), (v = n), S.tag)) {
            case 1:
              if (((m = S.payload), typeof m == "function")) {
                f = m.call(v, f, p);
                break e;
              }
              f = m;
              break e;
            case 3:
              m.flags = (m.flags & -65537) | 128;
            case 0:
              if (
                ((m = S.payload),
                (p = typeof m == "function" ? m.call(v, f, p) : m),
                p == null)
              )
                break e;
              f = oe({}, f, p);
              break e;
            case 2:
              Yt = !0;
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
          (i |= p);
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
      do (i |= s.lane), (s = s.next);
      while (s !== t);
    } else o === null && (s.shared.lanes = 0);
    (bn |= i), (e.lanes = i), (e.memoizedState = f);
  }
}
function Ed(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        s = r.callback;
      if (s !== null) {
        if (((r.callback = null), (r = n), typeof s != "function"))
          throw Error(P(191, s));
        s.call(r);
      }
    }
}
var Ws = {},
  kt = Sn(Ws),
  ks = Sn(Ws),
  _s = Sn(Ws);
function Ln(e) {
  if (e === Ws) throw Error(P(174));
  return e;
}
function zu(e, t) {
  switch ((X(_s, t), X(ks, e), X(kt, Ws), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : la(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = la(t, e));
  }
  Z(kt), X(kt, t);
}
function Nr() {
  Z(kt), Z(ks), Z(_s);
}
function sh(e) {
  Ln(_s.current);
  var t = Ln(kt.current),
    n = la(t, e.type);
  t !== n && (X(ks, e), X(kt, n));
}
function bu(e) {
  ks.current === e && (Z(kt), Z(ks));
}
var ne = Sn(0);
function Xo(e) {
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
var Rl = [];
function Bu() {
  for (var e = 0; e < Rl.length; e++)
    Rl[e]._workInProgressVersionPrimary = null;
  Rl.length = 0;
}
var _o = Vt.ReactCurrentDispatcher,
  Pl = Vt.ReactCurrentBatchConfig,
  zn = 0,
  re = null,
  pe = null,
  ye = null,
  Yo = !1,
  ds = !1,
  Rs = 0,
  cv = 0;
function Ne() {
  throw Error(P(321));
}
function Wu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!jt(e[n], t[n])) return !1;
  return !0;
}
function Hu(e, t, n, r, s, o) {
  if (
    ((zn = o),
    (re = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (_o.current = e === null || e.memoizedState === null ? hv : mv),
    (e = n(r, s)),
    ds)
  ) {
    o = 0;
    do {
      if (((ds = !1), (Rs = 0), 25 <= o)) throw Error(P(301));
      (o += 1),
        (ye = pe = null),
        (t.updateQueue = null),
        (_o.current = yv),
        (e = n(r, s));
    } while (ds);
  }
  if (
    ((_o.current = Zo),
    (t = pe !== null && pe.next !== null),
    (zn = 0),
    (ye = pe = re = null),
    (Yo = !1),
    t)
  )
    throw Error(P(300));
  return e;
}
function Vu() {
  var e = Rs !== 0;
  return (Rs = 0), e;
}
function Et() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ye === null ? (re.memoizedState = ye = e) : (ye = ye.next = e), ye;
}
function ot() {
  if (pe === null) {
    var e = re.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = pe.next;
  var t = ye === null ? re.memoizedState : ye.next;
  if (t !== null) (ye = t), (pe = e);
  else {
    if (e === null) throw Error(P(310));
    (pe = e),
      (e = {
        memoizedState: pe.memoizedState,
        baseState: pe.baseState,
        baseQueue: pe.baseQueue,
        queue: pe.queue,
        next: null,
      }),
      ye === null ? (re.memoizedState = ye = e) : (ye = ye.next = e);
  }
  return ye;
}
function Ps(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Ol(e) {
  var t = ot(),
    n = t.queue;
  if (n === null) throw Error(P(311));
  n.lastRenderedReducer = e;
  var r = pe,
    s = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (s !== null) {
      var i = s.next;
      (s.next = o.next), (o.next = i);
    }
    (r.baseQueue = s = o), (n.pending = null);
  }
  if (s !== null) {
    (o = s.next), (r = r.baseState);
    var a = (i = null),
      u = null,
      c = o;
    do {
      var d = c.lane;
      if ((zn & d) === d)
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
        u === null ? ((a = u = f), (i = r)) : (u = u.next = f),
          (re.lanes |= d),
          (bn |= d);
      }
      c = c.next;
    } while (c !== null && c !== o);
    u === null ? (i = r) : (u.next = a),
      jt(r, t.memoizedState) || (Fe = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    s = e;
    do (o = s.lane), (re.lanes |= o), (bn |= o), (s = s.next);
    while (s !== e);
  } else s === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Tl(e) {
  var t = ot(),
    n = t.queue;
  if (n === null) throw Error(P(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    s = n.pending,
    o = t.memoizedState;
  if (s !== null) {
    n.pending = null;
    var i = (s = s.next);
    do (o = e(o, i.action)), (i = i.next);
    while (i !== s);
    jt(o, t.memoizedState) || (Fe = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function oh() {}
function ih(e, t) {
  var n = re,
    r = ot(),
    s = t(),
    o = !jt(r.memoizedState, s);
  if (
    (o && ((r.memoizedState = s), (Fe = !0)),
    (r = r.queue),
    Ku(uh.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (ye !== null && ye.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Os(9, ah.bind(null, n, r, s, t), void 0, null),
      ge === null)
    )
      throw Error(P(349));
    zn & 30 || lh(n, t, s);
  }
  return s;
}
function lh(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = re.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (re.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function ah(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), ch(t) && dh(e);
}
function uh(e, t, n) {
  return n(function () {
    ch(t) && dh(e);
  });
}
function ch(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !jt(e, n);
  } catch {
    return !0;
  }
}
function dh(e) {
  var t = bt(e, 1);
  t !== null && gt(t, e, 1, -1);
}
function Nd(e) {
  var t = Et();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ps,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = pv.bind(null, re, e)),
    [t.memoizedState, e]
  );
}
function Os(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = re.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (re.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function fh() {
  return ot().memoizedState;
}
function Ro(e, t, n, r) {
  var s = Et();
  (re.flags |= e),
    (s.memoizedState = Os(1 | t, n, void 0, r === void 0 ? null : r));
}
function Oi(e, t, n, r) {
  var s = ot();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (pe !== null) {
    var i = pe.memoizedState;
    if (((o = i.destroy), r !== null && Wu(r, i.deps))) {
      s.memoizedState = Os(t, n, o, r);
      return;
    }
  }
  (re.flags |= e), (s.memoizedState = Os(1 | t, n, o, r));
}
function Cd(e, t) {
  return Ro(8390656, 8, e, t);
}
function Ku(e, t) {
  return Oi(2048, 8, e, t);
}
function ph(e, t) {
  return Oi(4, 2, e, t);
}
function hh(e, t) {
  return Oi(4, 4, e, t);
}
function mh(e, t) {
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
function yh(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Oi(4, 4, mh.bind(null, t, e), n)
  );
}
function Gu() {}
function gh(e, t) {
  var n = ot();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Wu(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function xh(e, t) {
  var n = ot();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Wu(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function vh(e, t, n) {
  return zn & 21
    ? (jt(n, t) || ((n = Np()), (re.lanes |= n), (bn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Fe = !0)), (e.memoizedState = n));
}
function dv(e, t) {
  var n = Q;
  (Q = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Pl.transition;
  Pl.transition = {};
  try {
    e(!1), t();
  } finally {
    (Q = n), (Pl.transition = r);
  }
}
function jh() {
  return ot().memoizedState;
}
function fv(e, t, n) {
  var r = fn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    wh(e))
  )
    Sh(t, n);
  else if (((n = nh(e, t, n, r)), n !== null)) {
    var s = Pe();
    gt(n, e, r, s), Eh(n, t, r);
  }
}
function pv(e, t, n) {
  var r = fn(e),
    s = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (wh(e)) Sh(t, s);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var i = t.lastRenderedState,
          a = o(i, n);
        if (((s.hasEagerState = !0), (s.eagerState = a), jt(a, i))) {
          var u = t.interleaved;
          u === null
            ? ((s.next = s), Mu(t))
            : ((s.next = u.next), (u.next = s)),
            (t.interleaved = s);
          return;
        }
      } catch {
      } finally {
      }
    (n = nh(e, t, s, r)),
      n !== null && ((s = Pe()), gt(n, e, r, s), Eh(n, t, r));
  }
}
function wh(e) {
  var t = e.alternate;
  return e === re || (t !== null && t === re);
}
function Sh(e, t) {
  ds = Yo = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Eh(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Nu(e, n);
  }
}
var Zo = {
    readContext: st,
    useCallback: Ne,
    useContext: Ne,
    useEffect: Ne,
    useImperativeHandle: Ne,
    useInsertionEffect: Ne,
    useLayoutEffect: Ne,
    useMemo: Ne,
    useReducer: Ne,
    useRef: Ne,
    useState: Ne,
    useDebugValue: Ne,
    useDeferredValue: Ne,
    useTransition: Ne,
    useMutableSource: Ne,
    useSyncExternalStore: Ne,
    useId: Ne,
    unstable_isNewReconciler: !1,
  },
  hv = {
    readContext: st,
    useCallback: function (e, t) {
      return (Et().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: st,
    useEffect: Cd,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Ro(4194308, 4, mh.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Ro(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Ro(4, 2, e, t);
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
        (e = e.dispatch = fv.bind(null, re, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Et();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Nd,
    useDebugValue: Gu,
    useDeferredValue: function (e) {
      return (Et().memoizedState = e);
    },
    useTransition: function () {
      var e = Nd(!1),
        t = e[0];
      return (e = dv.bind(null, e[1])), (Et().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = re,
        s = Et();
      if (ee) {
        if (n === void 0) throw Error(P(407));
        n = n();
      } else {
        if (((n = t()), ge === null)) throw Error(P(349));
        zn & 30 || lh(r, t, n);
      }
      s.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (s.queue = o),
        Cd(uh.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Os(9, ah.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Et(),
        t = ge.identifierPrefix;
      if (ee) {
        var n = Ft,
          r = Dt;
        (n = (r & ~(1 << (32 - yt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Rs++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = cv++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  mv = {
    readContext: st,
    useCallback: gh,
    useContext: st,
    useEffect: Ku,
    useImperativeHandle: yh,
    useInsertionEffect: ph,
    useLayoutEffect: hh,
    useMemo: xh,
    useReducer: Ol,
    useRef: fh,
    useState: function () {
      return Ol(Ps);
    },
    useDebugValue: Gu,
    useDeferredValue: function (e) {
      var t = ot();
      return vh(t, pe.memoizedState, e);
    },
    useTransition: function () {
      var e = Ol(Ps)[0],
        t = ot().memoizedState;
      return [e, t];
    },
    useMutableSource: oh,
    useSyncExternalStore: ih,
    useId: jh,
    unstable_isNewReconciler: !1,
  },
  yv = {
    readContext: st,
    useCallback: gh,
    useContext: st,
    useEffect: Ku,
    useImperativeHandle: yh,
    useInsertionEffect: ph,
    useLayoutEffect: hh,
    useMemo: xh,
    useReducer: Tl,
    useRef: fh,
    useState: function () {
      return Tl(Ps);
    },
    useDebugValue: Gu,
    useDeferredValue: function (e) {
      var t = ot();
      return pe === null ? (t.memoizedState = e) : vh(t, pe.memoizedState, e);
    },
    useTransition: function () {
      var e = Tl(Ps)[0],
        t = ot().memoizedState;
      return [e, t];
    },
    useMutableSource: oh,
    useSyncExternalStore: ih,
    useId: jh,
    unstable_isNewReconciler: !1,
  };
function dt(e, t) {
  if (e && e.defaultProps) {
    (t = oe({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Ra(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : oe({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ti = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Qn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Pe(),
      s = fn(e),
      o = At(r, s);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = cn(e, o, s)),
      t !== null && (gt(t, e, s, r), ko(t, e, s));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Pe(),
      s = fn(e),
      o = At(r, s);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = cn(e, o, s)),
      t !== null && (gt(t, e, s, r), ko(t, e, s));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Pe(),
      r = fn(e),
      s = At(n, r);
    (s.tag = 2),
      t != null && (s.callback = t),
      (t = cn(e, s, r)),
      t !== null && (gt(t, e, r, n), ko(t, e, r));
  },
};
function kd(e, t, n, r, s, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Ss(n, r) || !Ss(s, o)
      : !0
  );
}
function Nh(e, t, n) {
  var r = !1,
    s = yn,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = st(o))
      : ((s = Me(t) ? Mn : _e.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? wr(e, s) : yn)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Ti),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = s),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function _d(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Ti.enqueueReplaceState(t, t.state, null);
}
function Pa(e, t, n, r) {
  var s = e.stateNode;
  (s.props = n), (s.state = e.memoizedState), (s.refs = {}), Uu(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (s.context = st(o))
    : ((o = Me(t) ? Mn : _e.current), (s.context = wr(e, o))),
    (s.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (Ra(e, t, o, n), (s.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function" ||
      (typeof s.UNSAFE_componentWillMount != "function" &&
        typeof s.componentWillMount != "function") ||
      ((t = s.state),
      typeof s.componentWillMount == "function" && s.componentWillMount(),
      typeof s.UNSAFE_componentWillMount == "function" &&
        s.UNSAFE_componentWillMount(),
      t !== s.state && Ti.enqueueReplaceState(s, s.state, null),
      qo(e, n, s, r),
      (s.state = e.memoizedState)),
    typeof s.componentDidMount == "function" && (e.flags |= 4194308);
}
function Cr(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Hg(r)), (r = r.return);
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
function Il(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Oa(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var gv = typeof WeakMap == "function" ? WeakMap : Map;
function Ch(e, t, n) {
  (n = At(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      ti || ((ti = !0), (za = r)), Oa(e, t);
    }),
    n
  );
}
function kh(e, t, n) {
  (n = At(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var s = t.value;
    (n.payload = function () {
      return r(s);
    }),
      (n.callback = function () {
        Oa(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        Oa(e, t),
          typeof r != "function" &&
            (dn === null ? (dn = new Set([this])) : dn.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function Rd(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new gv();
    var s = new Set();
    r.set(t, s);
  } else (s = r.get(t)), s === void 0 && ((s = new Set()), r.set(t, s));
  s.has(n) || (s.add(n), (e = Tv.bind(null, e, t, n)), t.then(e, e));
}
function Pd(e) {
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
function Od(e, t, n, r, s) {
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
              : ((t = At(-1, 1)), (t.tag = 2), cn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var xv = Vt.ReactCurrentOwner,
  Fe = !1;
function Re(e, t, n, r) {
  t.child = e === null ? th(t, null, n, r) : Er(t, e.child, n, r);
}
function Td(e, t, n, r, s) {
  n = n.render;
  var o = t.ref;
  return (
    xr(t, s),
    (r = Hu(e, t, n, r, o, s)),
    (n = Vu()),
    e !== null && !Fe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~s),
        Bt(e, t, s))
      : (ee && n && Iu(t), (t.flags |= 1), Re(e, t, r, s), t.child)
  );
}
function Id(e, t, n, r, s) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !tc(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), _h(e, t, o, r, s))
      : ((e = Io(n.type, null, r, t, t.mode, s)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & s))) {
    var i = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Ss), n(i, r) && e.ref === t.ref)
    )
      return Bt(e, t, s);
  }
  return (
    (t.flags |= 1),
    (e = pn(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function _h(e, t, n, r, s) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Ss(o, r) && e.ref === t.ref)
      if (((Fe = !1), (t.pendingProps = r = o), (e.lanes & s) !== 0))
        e.flags & 131072 && (Fe = !0);
      else return (t.lanes = e.lanes), Bt(e, t, s);
  }
  return Ta(e, t, n, r, s);
}
function Rh(e, t, n) {
  var r = t.pendingProps,
    s = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        X(fr, Be),
        (Be |= n);
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
          X(fr, Be),
          (Be |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        X(fr, Be),
        (Be |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      X(fr, Be),
      (Be |= r);
  return Re(e, t, s, n), t.child;
}
function Ph(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Ta(e, t, n, r, s) {
  var o = Me(n) ? Mn : _e.current;
  return (
    (o = wr(t, o)),
    xr(t, s),
    (n = Hu(e, t, n, r, o, s)),
    (r = Vu()),
    e !== null && !Fe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~s),
        Bt(e, t, s))
      : (ee && r && Iu(t), (t.flags |= 1), Re(e, t, n, s), t.child)
  );
}
function Ld(e, t, n, r, s) {
  if (Me(n)) {
    var o = !0;
    Vo(t);
  } else o = !1;
  if ((xr(t, s), t.stateNode === null))
    Po(e, t), Nh(t, n, r), Pa(t, n, r, s), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      a = t.memoizedProps;
    i.props = a;
    var u = i.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = st(c))
      : ((c = Me(n) ? Mn : _e.current), (c = wr(t, c)));
    var d = n.getDerivedStateFromProps,
      f =
        typeof d == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((a !== r || u !== c) && _d(t, i, r, c)),
      (Yt = !1);
    var p = t.memoizedState;
    (i.state = p),
      qo(t, r, i, s),
      (u = t.memoizedState),
      a !== r || p !== u || Ae.current || Yt
        ? (typeof d == "function" && (Ra(t, n, d, r), (u = t.memoizedState)),
          (a = Yt || kd(t, n, a, r, p, u, c))
            ? (f ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = u)),
          (i.props = r),
          (i.state = u),
          (i.context = c),
          (r = a))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      rh(e, t),
      (a = t.memoizedProps),
      (c = t.type === t.elementType ? a : dt(t.type, a)),
      (i.props = c),
      (f = t.pendingProps),
      (p = i.context),
      (u = n.contextType),
      typeof u == "object" && u !== null
        ? (u = st(u))
        : ((u = Me(n) ? Mn : _e.current), (u = wr(t, u)));
    var v = n.getDerivedStateFromProps;
    (d =
      typeof v == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((a !== f || p !== u) && _d(t, i, r, u)),
      (Yt = !1),
      (p = t.memoizedState),
      (i.state = p),
      qo(t, r, i, s);
    var m = t.memoizedState;
    a !== f || p !== m || Ae.current || Yt
      ? (typeof v == "function" && (Ra(t, n, v, r), (m = t.memoizedState)),
        (c = Yt || kd(t, n, c, r, p, m, u) || !1)
          ? (d ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, m, u),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, m, u)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (a === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = m)),
        (i.props = r),
        (i.state = m),
        (i.context = u),
        (r = c))
      : (typeof i.componentDidUpdate != "function" ||
          (a === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Ia(e, t, n, r, o, s);
}
function Ia(e, t, n, r, s, o) {
  Ph(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return s && xd(t, n, !1), Bt(e, t, o);
  (r = t.stateNode), (xv.current = t);
  var a =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = Er(t, e.child, null, o)), (t.child = Er(t, null, a, o)))
      : Re(e, t, a, o),
    (t.memoizedState = r.state),
    s && xd(t, n, !0),
    t.child
  );
}
function Oh(e) {
  var t = e.stateNode;
  t.pendingContext
    ? gd(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && gd(e, t.context, !1),
    zu(e, t.containerInfo);
}
function $d(e, t, n, r, s) {
  return Sr(), $u(s), (t.flags |= 256), Re(e, t, n, r), t.child;
}
var La = { dehydrated: null, treeContext: null, retryLane: 0 };
function $a(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Th(e, t, n) {
  var r = t.pendingProps,
    s = ne.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    a;
  if (
    ((a = i) ||
      (a = e !== null && e.memoizedState === null ? !1 : (s & 2) !== 0),
    a
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (s |= 1),
    X(ne, s & 1),
    e === null)
  )
    return (
      ka(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (i = { mode: "hidden", children: i }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = i))
                : (o = $i(i, r, 0, null)),
              (e = Fn(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = $a(n)),
              (t.memoizedState = La),
              e)
            : Qu(t, i))
    );
  if (((s = e.memoizedState), s !== null && ((a = s.dehydrated), a !== null)))
    return vv(e, t, i, r, a, s, n);
  if (o) {
    (o = r.fallback), (i = t.mode), (s = e.child), (a = s.sibling);
    var u = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== s
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = pn(s, u)), (r.subtreeFlags = s.subtreeFlags & 14680064)),
      a !== null ? (o = pn(a, o)) : ((o = Fn(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? $a(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = La),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = pn(o, { mode: "visible", children: r.children })),
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
function Qu(e, t) {
  return (
    (t = $i({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function ho(e, t, n, r) {
  return (
    r !== null && $u(r),
    Er(t, e.child, null, n),
    (e = Qu(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function vv(e, t, n, r, s, o, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Il(Error(P(422)))), ho(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (s = t.mode),
        (r = $i({ mode: "visible", children: r.children }, s, 0, null)),
        (o = Fn(o, s, i, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && Er(t, e.child, null, i),
        (t.child.memoizedState = $a(i)),
        (t.memoizedState = La),
        o);
  if (!(t.mode & 1)) return ho(e, t, i, null);
  if (s.data === "$!") {
    if (((r = s.nextSibling && s.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (o = Error(P(419))), (r = Il(o, r, void 0)), ho(e, t, i, r);
  }
  if (((a = (i & e.childLanes) !== 0), Fe || a)) {
    if (((r = ge), r !== null)) {
      switch (i & -i) {
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
      (s = s & (r.suspendedLanes | i) ? 0 : s),
        s !== 0 &&
          s !== o.retryLane &&
          ((o.retryLane = s), bt(e, s), gt(r, e, s, -1));
    }
    return ec(), (r = Il(Error(P(421)))), ho(e, t, i, r);
  }
  return s.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Iv.bind(null, e)),
      (s._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (We = un(s.nextSibling)),
      (Ve = t),
      (ee = !0),
      (pt = null),
      e !== null &&
        ((Ze[et++] = Dt),
        (Ze[et++] = Ft),
        (Ze[et++] = Un),
        (Dt = e.id),
        (Ft = e.overflow),
        (Un = t)),
      (t = Qu(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Dd(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), _a(e.return, t, n);
}
function Ll(e, t, n, r, s) {
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
function Ih(e, t, n) {
  var r = t.pendingProps,
    s = r.revealOrder,
    o = r.tail;
  if ((Re(e, t, r.children, n), (r = ne.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Dd(e, n, t);
        else if (e.tag === 19) Dd(e, n, t);
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
  if ((X(ne, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (s) {
      case "forwards":
        for (n = t.child, s = null; n !== null; )
          (e = n.alternate),
            e !== null && Xo(e) === null && (s = n),
            (n = n.sibling);
        (n = s),
          n === null
            ? ((s = t.child), (t.child = null))
            : ((s = n.sibling), (n.sibling = null)),
          Ll(t, !1, s, n, o);
        break;
      case "backwards":
        for (n = null, s = t.child, t.child = null; s !== null; ) {
          if (((e = s.alternate), e !== null && Xo(e) === null)) {
            t.child = s;
            break;
          }
          (e = s.sibling), (s.sibling = n), (n = s), (s = e);
        }
        Ll(t, !0, n, null, o);
        break;
      case "together":
        Ll(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Po(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Bt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (bn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(P(153));
  if (t.child !== null) {
    for (
      e = t.child, n = pn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = pn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function jv(e, t, n) {
  switch (t.tag) {
    case 3:
      Oh(t), Sr();
      break;
    case 5:
      sh(t);
      break;
    case 1:
      Me(t.type) && Vo(t);
      break;
    case 4:
      zu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        s = t.memoizedProps.value;
      X(Qo, r._currentValue), (r._currentValue = s);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (X(ne, ne.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Th(e, t, n)
          : (X(ne, ne.current & 1),
            (e = Bt(e, t, n)),
            e !== null ? e.sibling : null);
      X(ne, ne.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Ih(e, t, n);
        t.flags |= 128;
      }
      if (
        ((s = t.memoizedState),
        s !== null &&
          ((s.rendering = null), (s.tail = null), (s.lastEffect = null)),
        X(ne, ne.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Rh(e, t, n);
  }
  return Bt(e, t, n);
}
var Lh, Da, $h, Dh;
Lh = function (e, t) {
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
Da = function () {};
$h = function (e, t, n, r) {
  var s = e.memoizedProps;
  if (s !== r) {
    (e = t.stateNode), Ln(kt.current);
    var o = null;
    switch (n) {
      case "input":
        (s = ra(e, s)), (r = ra(e, r)), (o = []);
        break;
      case "select":
        (s = oe({}, s, { value: void 0 })),
          (r = oe({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (s = ia(e, s)), (r = ia(e, r)), (o = []);
        break;
      default:
        typeof s.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Wo);
    }
    aa(n, r);
    var i;
    n = null;
    for (c in s)
      if (!r.hasOwnProperty(c) && s.hasOwnProperty(c) && s[c] != null)
        if (c === "style") {
          var a = s[c];
          for (i in a) a.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (ms.hasOwnProperty(c)
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
            for (i in a)
              !a.hasOwnProperty(i) ||
                (u && u.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in u)
              u.hasOwnProperty(i) &&
                a[i] !== u[i] &&
                (n || (n = {}), (n[i] = u[i]));
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
              (ms.hasOwnProperty(c)
                ? (u != null && c === "onScroll" && Y("scroll", e),
                  o || a === u || (o = []))
                : (o = o || []).push(c, u));
    }
    n && (o = o || []).push("style", n);
    var c = o;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Dh = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Jr(e, t) {
  if (!ee)
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
function Ce(e) {
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
function wv(e, t, n) {
  var r = t.pendingProps;
  switch ((Lu(t), t.tag)) {
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
      return Ce(t), null;
    case 1:
      return Me(t.type) && Ho(), Ce(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Nr(),
        Z(Ae),
        Z(_e),
        Bu(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (fo(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), pt !== null && (Wa(pt), (pt = null)))),
        Da(e, t),
        Ce(t),
        null
      );
    case 5:
      bu(t);
      var s = Ln(_s.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        $h(e, t, n, r, s),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(P(166));
          return Ce(t), null;
        }
        if (((e = Ln(kt.current)), fo(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[Nt] = t), (r[Cs] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              Y("cancel", r), Y("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              Y("load", r);
              break;
            case "video":
            case "audio":
              for (s = 0; s < rs.length; s++) Y(rs[s], r);
              break;
            case "source":
              Y("error", r);
              break;
            case "img":
            case "image":
            case "link":
              Y("error", r), Y("load", r);
              break;
            case "details":
              Y("toggle", r);
              break;
            case "input":
              Hc(r, o), Y("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                Y("invalid", r);
              break;
            case "textarea":
              Kc(r, o), Y("invalid", r);
          }
          aa(n, o), (s = null);
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var a = o[i];
              i === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (o.suppressHydrationWarning !== !0 &&
                      co(r.textContent, a, e),
                    (s = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (o.suppressHydrationWarning !== !0 &&
                      co(r.textContent, a, e),
                    (s = ["children", "" + a]))
                : ms.hasOwnProperty(i) &&
                  a != null &&
                  i === "onScroll" &&
                  Y("scroll", r);
            }
          switch (n) {
            case "input":
              no(r), Vc(r, o, !0);
              break;
            case "textarea":
              no(r), Gc(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Wo);
          }
          (r = s), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = s.nodeType === 9 ? s : s.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = up(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = i.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = i.createElement(n, { is: r.is }))
                : ((e = i.createElement(n)),
                  n === "select" &&
                    ((i = e),
                    r.multiple
                      ? (i.multiple = !0)
                      : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[Nt] = t),
            (e[Cs] = r),
            Lh(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = ua(n, r)), n)) {
              case "dialog":
                Y("cancel", e), Y("close", e), (s = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                Y("load", e), (s = r);
                break;
              case "video":
              case "audio":
                for (s = 0; s < rs.length; s++) Y(rs[s], e);
                s = r;
                break;
              case "source":
                Y("error", e), (s = r);
                break;
              case "img":
              case "image":
              case "link":
                Y("error", e), Y("load", e), (s = r);
                break;
              case "details":
                Y("toggle", e), (s = r);
                break;
              case "input":
                Hc(e, r), (s = ra(e, r)), Y("invalid", e);
                break;
              case "option":
                s = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (s = oe({}, r, { value: void 0 })),
                  Y("invalid", e);
                break;
              case "textarea":
                Kc(e, r), (s = ia(e, r)), Y("invalid", e);
                break;
              default:
                s = r;
            }
            aa(n, s), (a = s);
            for (o in a)
              if (a.hasOwnProperty(o)) {
                var u = a[o];
                o === "style"
                  ? fp(e, u)
                  : o === "dangerouslySetInnerHTML"
                  ? ((u = u ? u.__html : void 0), u != null && cp(e, u))
                  : o === "children"
                  ? typeof u == "string"
                    ? (n !== "textarea" || u !== "") && ys(e, u)
                    : typeof u == "number" && ys(e, "" + u)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (ms.hasOwnProperty(o)
                      ? u != null && o === "onScroll" && Y("scroll", e)
                      : u != null && xu(e, o, u, i));
              }
            switch (n) {
              case "input":
                no(e), Vc(e, r, !1);
                break;
              case "textarea":
                no(e), Gc(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + mn(r.value));
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
                typeof s.onClick == "function" && (e.onclick = Wo);
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
      return Ce(t), null;
    case 6:
      if (e && t.stateNode != null) Dh(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(P(166));
        if (((n = Ln(_s.current)), Ln(kt.current), fo(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Nt] = t),
            (o = r.nodeValue !== n) && ((e = Ve), e !== null))
          )
            switch (e.tag) {
              case 3:
                co(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  co(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Nt] = t),
            (t.stateNode = r);
      }
      return Ce(t), null;
    case 13:
      if (
        (Z(ne),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ee && We !== null && t.mode & 1 && !(t.flags & 128))
          Zp(), Sr(), (t.flags |= 98560), (o = !1);
        else if (((o = fo(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(P(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(P(317));
            o[Nt] = t;
          } else
            Sr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Ce(t), (o = !1);
        } else pt !== null && (Wa(pt), (pt = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ne.current & 1 ? he === 0 && (he = 3) : ec())),
          t.updateQueue !== null && (t.flags |= 4),
          Ce(t),
          null);
    case 4:
      return (
        Nr(), Da(e, t), e === null && Es(t.stateNode.containerInfo), Ce(t), null
      );
    case 10:
      return Au(t.type._context), Ce(t), null;
    case 17:
      return Me(t.type) && Ho(), Ce(t), null;
    case 19:
      if ((Z(ne), (o = t.memoizedState), o === null)) return Ce(t), null;
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) Jr(o, !1);
        else {
          if (he !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = Xo(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    Jr(o, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (i = o.alternate),
                    i === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = i.childLanes),
                        (o.lanes = i.lanes),
                        (o.child = i.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = i.memoizedProps),
                        (o.memoizedState = i.memoizedState),
                        (o.updateQueue = i.updateQueue),
                        (o.type = i.type),
                        (e = i.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return X(ne, (ne.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            ue() > kr &&
            ((t.flags |= 128), (r = !0), Jr(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Xo(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Jr(o, !0),
              o.tail === null && o.tailMode === "hidden" && !i.alternate && !ee)
            )
              return Ce(t), null;
          } else
            2 * ue() - o.renderingStartTime > kr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Jr(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = o.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (o.last = i));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = ue()),
          (t.sibling = null),
          (n = ne.current),
          X(ne, r ? (n & 1) | 2 : n & 1),
          t)
        : (Ce(t), null);
    case 22:
    case 23:
      return (
        Zu(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Be & 1073741824 && (Ce(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Ce(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(P(156, t.tag));
}
function Sv(e, t) {
  switch ((Lu(t), t.tag)) {
    case 1:
      return (
        Me(t.type) && Ho(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Nr(),
        Z(Ae),
        Z(_e),
        Bu(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return bu(t), null;
    case 13:
      if ((Z(ne), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(P(340));
        Sr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return Z(ne), null;
    case 4:
      return Nr(), null;
    case 10:
      return Au(t.type._context), null;
    case 22:
    case 23:
      return Zu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var mo = !1,
  ke = !1,
  Ev = typeof WeakSet == "function" ? WeakSet : Set,
  L = null;
function dr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        ie(e, t, r);
      }
    else n.current = null;
}
function Fa(e, t, n) {
  try {
    n();
  } catch (r) {
    ie(e, t, r);
  }
}
var Fd = !1;
function Nv(e, t) {
  if (((va = zo), (e = zp()), Tu(e))) {
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
          var i = 0,
            a = -1,
            u = -1,
            c = 0,
            d = 0,
            f = e,
            p = null;
          t: for (;;) {
            for (
              var v;
              f !== n || (s !== 0 && f.nodeType !== 3) || (a = i + s),
                f !== o || (r !== 0 && f.nodeType !== 3) || (u = i + r),
                f.nodeType === 3 && (i += f.nodeValue.length),
                (v = f.firstChild) !== null;

            )
              (p = f), (f = v);
            for (;;) {
              if (f === e) break t;
              if (
                (p === n && ++c === s && (a = i),
                p === o && ++d === r && (u = i),
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
  for (ja = { focusedElem: e, selectionRange: n }, zo = !1, L = t; L !== null; )
    if (((t = L), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (L = e);
    else
      for (; L !== null; ) {
        t = L;
        try {
          var m = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (m !== null) {
                  var S = m.memoizedProps,
                    j = m.memoizedState,
                    x = t.stateNode,
                    g = x.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? S : dt(t.type, S),
                      j
                    );
                  x.__reactInternalSnapshotBeforeUpdate = g;
                }
                break;
              case 3:
                var y = t.stateNode.containerInfo;
                y.nodeType === 1
                  ? (y.textContent = "")
                  : y.nodeType === 9 &&
                    y.documentElement &&
                    y.removeChild(y.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(P(163));
            }
        } catch (w) {
          ie(t, t.return, w);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (L = e);
          break;
        }
        L = t.return;
      }
  return (m = Fd), (Fd = !1), m;
}
function fs(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var s = (r = r.next);
    do {
      if ((s.tag & e) === e) {
        var o = s.destroy;
        (s.destroy = void 0), o !== void 0 && Fa(t, n, o);
      }
      s = s.next;
    } while (s !== r);
  }
}
function Ii(e, t) {
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
function Aa(e) {
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
function Fh(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Fh(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Nt], delete t[Cs], delete t[Ea], delete t[iv], delete t[lv])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Ah(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ad(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Ah(e.return)) return null;
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
function Ma(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = Wo));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ma(e, t, n), e = e.sibling; e !== null; ) Ma(e, t, n), (e = e.sibling);
}
function Ua(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ua(e, t, n), e = e.sibling; e !== null; ) Ua(e, t, n), (e = e.sibling);
}
var we = null,
  ft = !1;
function Jt(e, t, n) {
  for (n = n.child; n !== null; ) Mh(e, t, n), (n = n.sibling);
}
function Mh(e, t, n) {
  if (Ct && typeof Ct.onCommitFiberUnmount == "function")
    try {
      Ct.onCommitFiberUnmount(Ni, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ke || dr(n, t);
    case 6:
      var r = we,
        s = ft;
      (we = null),
        Jt(e, t, n),
        (we = r),
        (ft = s),
        we !== null &&
          (ft
            ? ((e = we),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : we.removeChild(n.stateNode));
      break;
    case 18:
      we !== null &&
        (ft
          ? ((e = we),
            (n = n.stateNode),
            e.nodeType === 8
              ? kl(e.parentNode, n)
              : e.nodeType === 1 && kl(e, n),
            js(e))
          : kl(we, n.stateNode));
      break;
    case 4:
      (r = we),
        (s = ft),
        (we = n.stateNode.containerInfo),
        (ft = !0),
        Jt(e, t, n),
        (we = r),
        (ft = s);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ke &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        s = r = r.next;
        do {
          var o = s,
            i = o.destroy;
          (o = o.tag),
            i !== void 0 && (o & 2 || o & 4) && Fa(n, t, i),
            (s = s.next);
        } while (s !== r);
      }
      Jt(e, t, n);
      break;
    case 1:
      if (
        !ke &&
        (dr(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          ie(n, t, a);
        }
      Jt(e, t, n);
      break;
    case 21:
      Jt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ke = (r = ke) || n.memoizedState !== null), Jt(e, t, n), (ke = r))
        : Jt(e, t, n);
      break;
    default:
      Jt(e, t, n);
  }
}
function Md(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Ev()),
      t.forEach(function (r) {
        var s = Lv.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(s, s));
      });
  }
}
function ct(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var s = n[r];
      try {
        var o = e,
          i = t,
          a = i;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (we = a.stateNode), (ft = !1);
              break e;
            case 3:
              (we = a.stateNode.containerInfo), (ft = !0);
              break e;
            case 4:
              (we = a.stateNode.containerInfo), (ft = !0);
              break e;
          }
          a = a.return;
        }
        if (we === null) throw Error(P(160));
        Mh(o, i, s), (we = null), (ft = !1);
        var u = s.alternate;
        u !== null && (u.return = null), (s.return = null);
      } catch (c) {
        ie(s, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Uh(t, e), (t = t.sibling);
}
function Uh(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ct(t, e), St(e), r & 4)) {
        try {
          fs(3, e, e.return), Ii(3, e);
        } catch (S) {
          ie(e, e.return, S);
        }
        try {
          fs(5, e, e.return);
        } catch (S) {
          ie(e, e.return, S);
        }
      }
      break;
    case 1:
      ct(t, e), St(e), r & 512 && n !== null && dr(n, n.return);
      break;
    case 5:
      if (
        (ct(t, e),
        St(e),
        r & 512 && n !== null && dr(n, n.return),
        e.flags & 32)
      ) {
        var s = e.stateNode;
        try {
          ys(s, "");
        } catch (S) {
          ie(e, e.return, S);
        }
      }
      if (r & 4 && ((s = e.stateNode), s != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          a = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            a === "input" && o.type === "radio" && o.name != null && lp(s, o),
              ua(a, i);
            var c = ua(a, o);
            for (i = 0; i < u.length; i += 2) {
              var d = u[i],
                f = u[i + 1];
              d === "style"
                ? fp(s, f)
                : d === "dangerouslySetInnerHTML"
                ? cp(s, f)
                : d === "children"
                ? ys(s, f)
                : xu(s, d, f, c);
            }
            switch (a) {
              case "input":
                sa(s, o);
                break;
              case "textarea":
                ap(s, o);
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
            s[Cs] = o;
          } catch (S) {
            ie(e, e.return, S);
          }
      }
      break;
    case 6:
      if ((ct(t, e), St(e), r & 4)) {
        if (e.stateNode === null) throw Error(P(162));
        (s = e.stateNode), (o = e.memoizedProps);
        try {
          s.nodeValue = o;
        } catch (S) {
          ie(e, e.return, S);
        }
      }
      break;
    case 3:
      if (
        (ct(t, e), St(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          js(t.containerInfo);
        } catch (S) {
          ie(e, e.return, S);
        }
      break;
    case 4:
      ct(t, e), St(e);
      break;
    case 13:
      ct(t, e),
        St(e),
        (s = e.child),
        s.flags & 8192 &&
          ((o = s.memoizedState !== null),
          (s.stateNode.isHidden = o),
          !o ||
            (s.alternate !== null && s.alternate.memoizedState !== null) ||
            (Xu = ue())),
        r & 4 && Md(e);
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ke = (c = ke) || d), ct(t, e), (ke = c)) : ct(t, e),
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
                  fs(4, p, p.return);
                  break;
                case 1:
                  dr(p, p.return);
                  var m = p.stateNode;
                  if (typeof m.componentWillUnmount == "function") {
                    (r = p), (n = p.return);
                    try {
                      (t = r),
                        (m.props = t.memoizedProps),
                        (m.state = t.memoizedState),
                        m.componentWillUnmount();
                    } catch (S) {
                      ie(r, n, S);
                    }
                  }
                  break;
                case 5:
                  dr(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    zd(f);
                    continue;
                  }
              }
              v !== null ? ((v.return = p), (L = v)) : zd(f);
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
                      (i =
                        u != null && u.hasOwnProperty("display")
                          ? u.display
                          : null),
                      (a.style.display = dp("display", i)));
              } catch (S) {
                ie(e, e.return, S);
              }
            }
          } else if (f.tag === 6) {
            if (d === null)
              try {
                f.stateNode.nodeValue = c ? "" : f.memoizedProps;
              } catch (S) {
                ie(e, e.return, S);
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
      ct(t, e), St(e), r & 4 && Md(e);
      break;
    case 21:
      break;
    default:
      ct(t, e), St(e);
  }
}
function St(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Ah(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(P(160));
      }
      switch (r.tag) {
        case 5:
          var s = r.stateNode;
          r.flags & 32 && (ys(s, ""), (r.flags &= -33));
          var o = Ad(e);
          Ua(e, o, s);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            a = Ad(e);
          Ma(e, a, i);
          break;
        default:
          throw Error(P(161));
      }
    } catch (u) {
      ie(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Cv(e, t, n) {
  (L = e), zh(e);
}
function zh(e, t, n) {
  for (var r = (e.mode & 1) !== 0; L !== null; ) {
    var s = L,
      o = s.child;
    if (s.tag === 22 && r) {
      var i = s.memoizedState !== null || mo;
      if (!i) {
        var a = s.alternate,
          u = (a !== null && a.memoizedState !== null) || ke;
        a = mo;
        var c = ke;
        if (((mo = i), (ke = u) && !c))
          for (L = s; L !== null; )
            (i = L),
              (u = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? bd(s)
                : u !== null
                ? ((u.return = i), (L = u))
                : bd(s);
        for (; o !== null; ) (L = o), zh(o), (o = o.sibling);
        (L = s), (mo = a), (ke = c);
      }
      Ud(e);
    } else
      s.subtreeFlags & 8772 && o !== null ? ((o.return = s), (L = o)) : Ud(e);
  }
}
function Ud(e) {
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
              ke || Ii(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ke)
                if (n === null) r.componentDidMount();
                else {
                  var s =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : dt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    s,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && Ed(t, o, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Ed(t, i, n);
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
                    f !== null && js(f);
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
              throw Error(P(163));
          }
        ke || (t.flags & 512 && Aa(t));
      } catch (p) {
        ie(t, t.return, p);
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
function zd(e) {
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
function bd(e) {
  for (; L !== null; ) {
    var t = L;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ii(4, t);
          } catch (u) {
            ie(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var s = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              ie(t, s, u);
            }
          }
          var o = t.return;
          try {
            Aa(t);
          } catch (u) {
            ie(t, o, u);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Aa(t);
          } catch (u) {
            ie(t, i, u);
          }
      }
    } catch (u) {
      ie(t, t.return, u);
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
var kv = Math.ceil,
  ei = Vt.ReactCurrentDispatcher,
  Ju = Vt.ReactCurrentOwner,
  rt = Vt.ReactCurrentBatchConfig,
  V = 0,
  ge = null,
  de = null,
  Se = 0,
  Be = 0,
  fr = Sn(0),
  he = 0,
  Ts = null,
  bn = 0,
  Li = 0,
  qu = 0,
  ps = null,
  $e = null,
  Xu = 0,
  kr = 1 / 0,
  Ot = null,
  ti = !1,
  za = null,
  dn = null,
  yo = !1,
  rn = null,
  ni = 0,
  hs = 0,
  ba = null,
  Oo = -1,
  To = 0;
function Pe() {
  return V & 6 ? ue() : Oo !== -1 ? Oo : (Oo = ue());
}
function fn(e) {
  return e.mode & 1
    ? V & 2 && Se !== 0
      ? Se & -Se
      : uv.transition !== null
      ? (To === 0 && (To = Np()), To)
      : ((e = Q),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Tp(e.type))),
        e)
    : 1;
}
function gt(e, t, n, r) {
  if (50 < hs) throw ((hs = 0), (ba = null), Error(P(185)));
  zs(e, n, r),
    (!(V & 2) || e !== ge) &&
      (e === ge && (!(V & 2) && (Li |= n), he === 4 && tn(e, Se)),
      Ue(e, r),
      n === 1 && V === 0 && !(t.mode & 1) && ((kr = ue() + 500), Pi && En()));
}
function Ue(e, t) {
  var n = e.callbackNode;
  ux(e, t);
  var r = Uo(e, e === ge ? Se : 0);
  if (r === 0)
    n !== null && qc(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && qc(n), t === 1))
      e.tag === 0 ? av(Bd.bind(null, e)) : qp(Bd.bind(null, e)),
        sv(function () {
          !(V & 6) && En();
        }),
        (n = null);
    else {
      switch (Cp(r)) {
        case 1:
          n = Eu;
          break;
        case 4:
          n = Sp;
          break;
        case 16:
          n = Mo;
          break;
        case 536870912:
          n = Ep;
          break;
        default:
          n = Mo;
      }
      n = Qh(n, bh.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function bh(e, t) {
  if (((Oo = -1), (To = 0), V & 6)) throw Error(P(327));
  var n = e.callbackNode;
  if (vr() && e.callbackNode !== n) return null;
  var r = Uo(e, e === ge ? Se : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = ri(e, r);
  else {
    t = r;
    var s = V;
    V |= 2;
    var o = Wh();
    (ge !== e || Se !== t) && ((Ot = null), (kr = ue() + 500), Dn(e, t));
    do
      try {
        Pv();
        break;
      } catch (a) {
        Bh(e, a);
      }
    while (!0);
    Fu(),
      (ei.current = o),
      (V = s),
      de !== null ? (t = 0) : ((ge = null), (Se = 0), (t = he));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((s = ha(e)), s !== 0 && ((r = s), (t = Ba(e, s)))), t === 1)
    )
      throw ((n = Ts), Dn(e, 0), tn(e, r), Ue(e, ue()), n);
    if (t === 6) tn(e, r);
    else {
      if (
        ((s = e.current.alternate),
        !(r & 30) &&
          !_v(s) &&
          ((t = ri(e, r)),
          t === 2 && ((o = ha(e)), o !== 0 && ((r = o), (t = Ba(e, o)))),
          t === 1))
      )
        throw ((n = Ts), Dn(e, 0), tn(e, r), Ue(e, ue()), n);
      switch (((e.finishedWork = s), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(P(345));
        case 2:
          Rn(e, $e, Ot);
          break;
        case 3:
          if (
            (tn(e, r), (r & 130023424) === r && ((t = Xu + 500 - ue()), 10 < t))
          ) {
            if (Uo(e, 0) !== 0) break;
            if (((s = e.suspendedLanes), (s & r) !== r)) {
              Pe(), (e.pingedLanes |= e.suspendedLanes & s);
              break;
            }
            e.timeoutHandle = Sa(Rn.bind(null, e, $e, Ot), t);
            break;
          }
          Rn(e, $e, Ot);
          break;
        case 4:
          if ((tn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, s = -1; 0 < r; ) {
            var i = 31 - yt(r);
            (o = 1 << i), (i = t[i]), i > s && (s = i), (r &= ~o);
          }
          if (
            ((r = s),
            (r = ue() - r),
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
                : 1960 * kv(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Sa(Rn.bind(null, e, $e, Ot), r);
            break;
          }
          Rn(e, $e, Ot);
          break;
        case 5:
          Rn(e, $e, Ot);
          break;
        default:
          throw Error(P(329));
      }
    }
  }
  return Ue(e, ue()), e.callbackNode === n ? bh.bind(null, e) : null;
}
function Ba(e, t) {
  var n = ps;
  return (
    e.current.memoizedState.isDehydrated && (Dn(e, t).flags |= 256),
    (e = ri(e, t)),
    e !== 2 && ((t = $e), ($e = n), t !== null && Wa(t)),
    e
  );
}
function Wa(e) {
  $e === null ? ($e = e) : $e.push.apply($e, e);
}
function _v(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var s = n[r],
            o = s.getSnapshot;
          s = s.value;
          try {
            if (!jt(o(), s)) return !1;
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
function tn(e, t) {
  for (
    t &= ~qu,
      t &= ~Li,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - yt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Bd(e) {
  if (V & 6) throw Error(P(327));
  vr();
  var t = Uo(e, 0);
  if (!(t & 1)) return Ue(e, ue()), null;
  var n = ri(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ha(e);
    r !== 0 && ((t = r), (n = Ba(e, r)));
  }
  if (n === 1) throw ((n = Ts), Dn(e, 0), tn(e, t), Ue(e, ue()), n);
  if (n === 6) throw Error(P(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Rn(e, $e, Ot),
    Ue(e, ue()),
    null
  );
}
function Yu(e, t) {
  var n = V;
  V |= 1;
  try {
    return e(t);
  } finally {
    (V = n), V === 0 && ((kr = ue() + 500), Pi && En());
  }
}
function Bn(e) {
  rn !== null && rn.tag === 0 && !(V & 6) && vr();
  var t = V;
  V |= 1;
  var n = rt.transition,
    r = Q;
  try {
    if (((rt.transition = null), (Q = 1), e)) return e();
  } finally {
    (Q = r), (rt.transition = n), (V = t), !(V & 6) && En();
  }
}
function Zu() {
  (Be = fr.current), Z(fr);
}
function Dn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), rv(n)), de !== null))
    for (n = de.return; n !== null; ) {
      var r = n;
      switch ((Lu(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Ho();
          break;
        case 3:
          Nr(), Z(Ae), Z(_e), Bu();
          break;
        case 5:
          bu(r);
          break;
        case 4:
          Nr();
          break;
        case 13:
          Z(ne);
          break;
        case 19:
          Z(ne);
          break;
        case 10:
          Au(r.type._context);
          break;
        case 22:
        case 23:
          Zu();
      }
      n = n.return;
    }
  if (
    ((ge = e),
    (de = e = pn(e.current, null)),
    (Se = Be = t),
    (he = 0),
    (Ts = null),
    (qu = Li = bn = 0),
    ($e = ps = null),
    In !== null)
  ) {
    for (t = 0; t < In.length; t++)
      if (((n = In[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var s = r.next,
          o = n.pending;
        if (o !== null) {
          var i = o.next;
          (o.next = s), (r.next = i);
        }
        n.pending = r;
      }
    In = null;
  }
  return e;
}
function Bh(e, t) {
  do {
    var n = de;
    try {
      if ((Fu(), (_o.current = Zo), Yo)) {
        for (var r = re.memoizedState; r !== null; ) {
          var s = r.queue;
          s !== null && (s.pending = null), (r = r.next);
        }
        Yo = !1;
      }
      if (
        ((zn = 0),
        (ye = pe = re = null),
        (ds = !1),
        (Rs = 0),
        (Ju.current = null),
        n === null || n.return === null)
      ) {
        (he = 1), (Ts = t), (de = null);
        break;
      }
      e: {
        var o = e,
          i = n.return,
          a = n,
          u = t;
        if (
          ((t = Se),
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
          var v = Pd(i);
          if (v !== null) {
            (v.flags &= -257),
              Od(v, i, a, o, t),
              v.mode & 1 && Rd(o, c, t),
              (t = v),
              (u = c);
            var m = t.updateQueue;
            if (m === null) {
              var S = new Set();
              S.add(u), (t.updateQueue = S);
            } else m.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              Rd(o, c, t), ec();
              break e;
            }
            u = Error(P(426));
          }
        } else if (ee && a.mode & 1) {
          var j = Pd(i);
          if (j !== null) {
            !(j.flags & 65536) && (j.flags |= 256),
              Od(j, i, a, o, t),
              $u(Cr(u, a));
            break e;
          }
        }
        (o = u = Cr(u, a)),
          he !== 4 && (he = 2),
          ps === null ? (ps = [o]) : ps.push(o),
          (o = i);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var x = Ch(o, u, t);
              Sd(o, x);
              break e;
            case 1:
              a = u;
              var g = o.type,
                y = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof g.getDerivedStateFromError == "function" ||
                  (y !== null &&
                    typeof y.componentDidCatch == "function" &&
                    (dn === null || !dn.has(y))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var w = kh(o, a, t);
                Sd(o, w);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Vh(n);
    } catch (C) {
      (t = C), de === n && n !== null && (de = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Wh() {
  var e = ei.current;
  return (ei.current = Zo), e === null ? Zo : e;
}
function ec() {
  (he === 0 || he === 3 || he === 2) && (he = 4),
    ge === null || (!(bn & 268435455) && !(Li & 268435455)) || tn(ge, Se);
}
function ri(e, t) {
  var n = V;
  V |= 2;
  var r = Wh();
  (ge !== e || Se !== t) && ((Ot = null), Dn(e, t));
  do
    try {
      Rv();
      break;
    } catch (s) {
      Bh(e, s);
    }
  while (!0);
  if ((Fu(), (V = n), (ei.current = r), de !== null)) throw Error(P(261));
  return (ge = null), (Se = 0), he;
}
function Rv() {
  for (; de !== null; ) Hh(de);
}
function Pv() {
  for (; de !== null && !ex(); ) Hh(de);
}
function Hh(e) {
  var t = Gh(e.alternate, e, Be);
  (e.memoizedProps = e.pendingProps),
    t === null ? Vh(e) : (de = t),
    (Ju.current = null);
}
function Vh(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Sv(n, t)), n !== null)) {
        (n.flags &= 32767), (de = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (he = 6), (de = null);
        return;
      }
    } else if (((n = wv(n, t, Be)), n !== null)) {
      de = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      de = t;
      return;
    }
    de = t = e;
  } while (t !== null);
  he === 0 && (he = 5);
}
function Rn(e, t, n) {
  var r = Q,
    s = rt.transition;
  try {
    (rt.transition = null), (Q = 1), Ov(e, t, n, r);
  } finally {
    (rt.transition = s), (Q = r);
  }
  return null;
}
function Ov(e, t, n, r) {
  do vr();
  while (rn !== null);
  if (V & 6) throw Error(P(327));
  n = e.finishedWork;
  var s = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(P(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (cx(e, o),
    e === ge && ((de = ge = null), (Se = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      yo ||
      ((yo = !0),
      Qh(Mo, function () {
        return vr(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = rt.transition), (rt.transition = null);
    var i = Q;
    Q = 1;
    var a = V;
    (V |= 4),
      (Ju.current = null),
      Nv(e, n),
      Uh(n, e),
      qx(ja),
      (zo = !!va),
      (ja = va = null),
      (e.current = n),
      Cv(n),
      tx(),
      (V = a),
      (Q = i),
      (rt.transition = o);
  } else e.current = n;
  if (
    (yo && ((yo = !1), (rn = e), (ni = s)),
    (o = e.pendingLanes),
    o === 0 && (dn = null),
    sx(n.stateNode),
    Ue(e, ue()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (s = t[n]), r(s.value, { componentStack: s.stack, digest: s.digest });
  if (ti) throw ((ti = !1), (e = za), (za = null), e);
  return (
    ni & 1 && e.tag !== 0 && vr(),
    (o = e.pendingLanes),
    o & 1 ? (e === ba ? hs++ : ((hs = 0), (ba = e))) : (hs = 0),
    En(),
    null
  );
}
function vr() {
  if (rn !== null) {
    var e = Cp(ni),
      t = rt.transition,
      n = Q;
    try {
      if (((rt.transition = null), (Q = 16 > e ? 16 : e), rn === null))
        var r = !1;
      else {
        if (((e = rn), (rn = null), (ni = 0), V & 6)) throw Error(P(331));
        var s = V;
        for (V |= 4, L = e.current; L !== null; ) {
          var o = L,
            i = o.child;
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
                      fs(8, d, o);
                  }
                  var f = d.child;
                  if (f !== null) (f.return = d), (L = f);
                  else
                    for (; L !== null; ) {
                      d = L;
                      var p = d.sibling,
                        v = d.return;
                      if ((Fh(d), d === c)) {
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
              var m = o.alternate;
              if (m !== null) {
                var S = m.child;
                if (S !== null) {
                  m.child = null;
                  do {
                    var j = S.sibling;
                    (S.sibling = null), (S = j);
                  } while (S !== null);
                }
              }
              L = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (L = i);
          else
            e: for (; L !== null; ) {
              if (((o = L), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    fs(9, o, o.return);
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
          i = L;
          var y = i.child;
          if (i.subtreeFlags & 2064 && y !== null) (y.return = i), (L = y);
          else
            e: for (i = g; L !== null; ) {
              if (((a = L), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ii(9, a);
                  }
                } catch (C) {
                  ie(a, a.return, C);
                }
              if (a === i) {
                L = null;
                break e;
              }
              var w = a.sibling;
              if (w !== null) {
                (w.return = a.return), (L = w);
                break e;
              }
              L = a.return;
            }
        }
        if (
          ((V = s), En(), Ct && typeof Ct.onPostCommitFiberRoot == "function")
        )
          try {
            Ct.onPostCommitFiberRoot(Ni, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (Q = n), (rt.transition = t);
    }
  }
  return !1;
}
function Wd(e, t, n) {
  (t = Cr(n, t)),
    (t = Ch(e, t, 1)),
    (e = cn(e, t, 1)),
    (t = Pe()),
    e !== null && (zs(e, 1, t), Ue(e, t));
}
function ie(e, t, n) {
  if (e.tag === 3) Wd(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Wd(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (dn === null || !dn.has(r)))
        ) {
          (e = Cr(n, e)),
            (e = kh(t, e, 1)),
            (t = cn(t, e, 1)),
            (e = Pe()),
            t !== null && (zs(t, 1, e), Ue(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Tv(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Pe()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ge === e &&
      (Se & n) === n &&
      (he === 4 || (he === 3 && (Se & 130023424) === Se && 500 > ue() - Xu)
        ? Dn(e, 0)
        : (qu |= n)),
    Ue(e, t);
}
function Kh(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = oo), (oo <<= 1), !(oo & 130023424) && (oo = 4194304))
      : (t = 1));
  var n = Pe();
  (e = bt(e, t)), e !== null && (zs(e, t, n), Ue(e, n));
}
function Iv(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Kh(e, n);
}
function Lv(e, t) {
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
      throw Error(P(314));
  }
  r !== null && r.delete(t), Kh(e, n);
}
var Gh;
Gh = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ae.current) Fe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Fe = !1), jv(e, t, n);
      Fe = !!(e.flags & 131072);
    }
  else (Fe = !1), ee && t.flags & 1048576 && Xp(t, Go, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Po(e, t), (e = t.pendingProps);
      var s = wr(t, _e.current);
      xr(t, n), (s = Hu(null, t, r, e, s, n));
      var o = Vu();
      return (
        (t.flags |= 1),
        typeof s == "object" &&
        s !== null &&
        typeof s.render == "function" &&
        s.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Me(r) ? ((o = !0), Vo(t)) : (o = !1),
            (t.memoizedState =
              s.state !== null && s.state !== void 0 ? s.state : null),
            Uu(t),
            (s.updater = Ti),
            (t.stateNode = s),
            (s._reactInternals = t),
            Pa(t, r, e, n),
            (t = Ia(null, t, r, !0, o, n)))
          : ((t.tag = 0), ee && o && Iu(t), Re(null, t, s, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Po(e, t),
          (e = t.pendingProps),
          (s = r._init),
          (r = s(r._payload)),
          (t.type = r),
          (s = t.tag = Dv(r)),
          (e = dt(r, e)),
          s)
        ) {
          case 0:
            t = Ta(null, t, r, e, n);
            break e;
          case 1:
            t = Ld(null, t, r, e, n);
            break e;
          case 11:
            t = Td(null, t, r, e, n);
            break e;
          case 14:
            t = Id(null, t, r, dt(r.type, e), n);
            break e;
        }
        throw Error(P(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : dt(r, s)),
        Ta(e, t, r, s, n)
      );
    case 1:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : dt(r, s)),
        Ld(e, t, r, s, n)
      );
    case 3:
      e: {
        if ((Oh(t), e === null)) throw Error(P(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (s = o.element),
          rh(e, t),
          qo(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (s = Cr(Error(P(423)), t)), (t = $d(e, t, r, n, s));
            break e;
          } else if (r !== s) {
            (s = Cr(Error(P(424)), t)), (t = $d(e, t, r, n, s));
            break e;
          } else
            for (
              We = un(t.stateNode.containerInfo.firstChild),
                Ve = t,
                ee = !0,
                pt = null,
                n = th(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Sr(), r === s)) {
            t = Bt(e, t, n);
            break e;
          }
          Re(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        sh(t),
        e === null && ka(t),
        (r = t.type),
        (s = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = s.children),
        wa(r, s) ? (i = null) : o !== null && wa(r, o) && (t.flags |= 32),
        Ph(e, t),
        Re(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && ka(t), null;
    case 13:
      return Th(e, t, n);
    case 4:
      return (
        zu(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Er(t, null, r, n)) : Re(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : dt(r, s)),
        Td(e, t, r, s, n)
      );
    case 7:
      return Re(e, t, t.pendingProps, n), t.child;
    case 8:
      return Re(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Re(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (s = t.pendingProps),
          (o = t.memoizedProps),
          (i = s.value),
          X(Qo, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (jt(o.value, i)) {
            if (o.children === s.children && !Ae.current) {
              t = Bt(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var a = o.dependencies;
              if (a !== null) {
                i = o.child;
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
                      _a(o.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(P(341));
                (i.lanes |= n),
                  (a = i.alternate),
                  a !== null && (a.lanes |= n),
                  _a(i, n, t),
                  (i = o.sibling);
              } else i = o.child;
              if (i !== null) i.return = o;
              else
                for (i = o; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((o = i.sibling), o !== null)) {
                    (o.return = i.return), (i = o);
                    break;
                  }
                  i = i.return;
                }
              o = i;
            }
        Re(e, t, s.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (s = t.type),
        (r = t.pendingProps.children),
        xr(t, n),
        (s = st(s)),
        (r = r(s)),
        (t.flags |= 1),
        Re(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (s = dt(r, t.pendingProps)),
        (s = dt(r.type, s)),
        Id(e, t, r, s, n)
      );
    case 15:
      return _h(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : dt(r, s)),
        Po(e, t),
        (t.tag = 1),
        Me(r) ? ((e = !0), Vo(t)) : (e = !1),
        xr(t, n),
        Nh(t, r, s),
        Pa(t, r, s, n),
        Ia(null, t, r, !0, e, n)
      );
    case 19:
      return Ih(e, t, n);
    case 22:
      return Rh(e, t, n);
  }
  throw Error(P(156, t.tag));
};
function Qh(e, t) {
  return wp(e, t);
}
function $v(e, t, n, r) {
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
  return new $v(e, t, n, r);
}
function tc(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Dv(e) {
  if (typeof e == "function") return tc(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === ju)) return 11;
    if (e === wu) return 14;
  }
  return 2;
}
function pn(e, t) {
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
function Io(e, t, n, r, s, o) {
  var i = 2;
  if (((r = e), typeof e == "function")) tc(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case nr:
        return Fn(n.children, s, o, t);
      case vu:
        (i = 8), (s |= 8);
        break;
      case Zl:
        return (
          (e = nt(12, n, t, s | 2)), (e.elementType = Zl), (e.lanes = o), e
        );
      case ea:
        return (e = nt(13, n, t, s)), (e.elementType = ea), (e.lanes = o), e;
      case ta:
        return (e = nt(19, n, t, s)), (e.elementType = ta), (e.lanes = o), e;
      case sp:
        return $i(n, s, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case np:
              i = 10;
              break e;
            case rp:
              i = 9;
              break e;
            case ju:
              i = 11;
              break e;
            case wu:
              i = 14;
              break e;
            case Xt:
              (i = 16), (r = null);
              break e;
          }
        throw Error(P(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = nt(i, n, t, s)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function Fn(e, t, n, r) {
  return (e = nt(7, e, r, t)), (e.lanes = n), e;
}
function $i(e, t, n, r) {
  return (
    (e = nt(22, e, r, t)),
    (e.elementType = sp),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function $l(e, t, n) {
  return (e = nt(6, e, null, t)), (e.lanes = n), e;
}
function Dl(e, t, n) {
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
function Fv(e, t, n, r, s) {
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
    (this.eventTimes = ml(0)),
    (this.expirationTimes = ml(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = ml(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = s),
    (this.mutableSourceEagerHydrationData = null);
}
function nc(e, t, n, r, s, o, i, a, u) {
  return (
    (e = new Fv(e, t, n, a, u)),
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
    Uu(o),
    e
  );
}
function Av(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: tr,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Jh(e) {
  if (!e) return yn;
  e = e._reactInternals;
  e: {
    if (Qn(e) !== e || e.tag !== 1) throw Error(P(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Me(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(P(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Me(n)) return Jp(e, n, t);
  }
  return t;
}
function qh(e, t, n, r, s, o, i, a, u) {
  return (
    (e = nc(n, r, !0, e, s, o, i, a, u)),
    (e.context = Jh(null)),
    (n = e.current),
    (r = Pe()),
    (s = fn(n)),
    (o = At(r, s)),
    (o.callback = t ?? null),
    cn(n, o, s),
    (e.current.lanes = s),
    zs(e, s, r),
    Ue(e, r),
    e
  );
}
function Di(e, t, n, r) {
  var s = t.current,
    o = Pe(),
    i = fn(s);
  return (
    (n = Jh(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = At(o, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = cn(s, t, i)),
    e !== null && (gt(e, s, i, o), ko(e, s, i)),
    i
  );
}
function si(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Hd(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function rc(e, t) {
  Hd(e, t), (e = e.alternate) && Hd(e, t);
}
function Mv() {
  return null;
}
var Xh =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function sc(e) {
  this._internalRoot = e;
}
Fi.prototype.render = sc.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(P(409));
  Di(e, t, null, null);
};
Fi.prototype.unmount = sc.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Bn(function () {
      Di(null, e, null, null);
    }),
      (t[zt] = null);
  }
};
function Fi(e) {
  this._internalRoot = e;
}
Fi.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Rp();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < en.length && t !== 0 && t < en[n].priority; n++);
    en.splice(n, 0, e), n === 0 && Op(e);
  }
};
function oc(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Ai(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Vd() {}
function Uv(e, t, n, r, s) {
  if (s) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var c = si(i);
        o.call(c);
      };
    }
    var i = qh(t, r, e, 0, null, !1, !1, "", Vd);
    return (
      (e._reactRootContainer = i),
      (e[zt] = i.current),
      Es(e.nodeType === 8 ? e.parentNode : e),
      Bn(),
      i
    );
  }
  for (; (s = e.lastChild); ) e.removeChild(s);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var c = si(u);
      a.call(c);
    };
  }
  var u = nc(e, 0, !1, null, null, !1, !1, "", Vd);
  return (
    (e._reactRootContainer = u),
    (e[zt] = u.current),
    Es(e.nodeType === 8 ? e.parentNode : e),
    Bn(function () {
      Di(t, u, n, r);
    }),
    u
  );
}
function Mi(e, t, n, r, s) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof s == "function") {
      var a = s;
      s = function () {
        var u = si(i);
        a.call(u);
      };
    }
    Di(t, i, e, s);
  } else i = Uv(n, t, e, s, r);
  return si(i);
}
kp = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = ns(t.pendingLanes);
        n !== 0 &&
          (Nu(t, n | 1), Ue(t, ue()), !(V & 6) && ((kr = ue() + 500), En()));
      }
      break;
    case 13:
      Bn(function () {
        var r = bt(e, 1);
        if (r !== null) {
          var s = Pe();
          gt(r, e, 1, s);
        }
      }),
        rc(e, 1);
  }
};
Cu = function (e) {
  if (e.tag === 13) {
    var t = bt(e, 134217728);
    if (t !== null) {
      var n = Pe();
      gt(t, e, 134217728, n);
    }
    rc(e, 134217728);
  }
};
_p = function (e) {
  if (e.tag === 13) {
    var t = fn(e),
      n = bt(e, t);
    if (n !== null) {
      var r = Pe();
      gt(n, e, t, r);
    }
    rc(e, t);
  }
};
Rp = function () {
  return Q;
};
Pp = function (e, t) {
  var n = Q;
  try {
    return (Q = e), t();
  } finally {
    Q = n;
  }
};
da = function (e, t, n) {
  switch (t) {
    case "input":
      if ((sa(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
            var s = Ri(r);
            if (!s) throw Error(P(90));
            ip(r), sa(r, s);
          }
        }
      }
      break;
    case "textarea":
      ap(e, n);
      break;
    case "select":
      (t = n.value), t != null && hr(e, !!n.multiple, t, !1);
  }
};
mp = Yu;
yp = Bn;
var zv = { usingClientEntryPoint: !1, Events: [Bs, ir, Ri, pp, hp, Yu] },
  qr = {
    findFiberByHostInstance: Tn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  bv = {
    bundleType: qr.bundleType,
    version: qr.version,
    rendererPackageName: qr.rendererPackageName,
    rendererConfig: qr.rendererConfig,
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
      return (e = vp(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: qr.findFiberByHostInstance || Mv,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var go = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!go.isDisabled && go.supportsFiber)
    try {
      (Ni = go.inject(bv)), (Ct = go);
    } catch {}
}
qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = zv;
qe.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!oc(t)) throw Error(P(200));
  return Av(e, t, null, n);
};
qe.createRoot = function (e, t) {
  if (!oc(e)) throw Error(P(299));
  var n = !1,
    r = "",
    s = Xh;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (s = t.onRecoverableError)),
    (t = nc(e, 1, !1, null, null, n, !1, r, s)),
    (e[zt] = t.current),
    Es(e.nodeType === 8 ? e.parentNode : e),
    new sc(t)
  );
};
qe.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(P(188))
      : ((e = Object.keys(e).join(",")), Error(P(268, e)));
  return (e = vp(t)), (e = e === null ? null : e.stateNode), e;
};
qe.flushSync = function (e) {
  return Bn(e);
};
qe.hydrate = function (e, t, n) {
  if (!Ai(t)) throw Error(P(200));
  return Mi(null, e, t, !0, n);
};
qe.hydrateRoot = function (e, t, n) {
  if (!oc(e)) throw Error(P(405));
  var r = (n != null && n.hydratedSources) || null,
    s = !1,
    o = "",
    i = Xh;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (s = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = qh(t, null, e, 1, n ?? null, s, !1, o, i)),
    (e[zt] = t.current),
    Es(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (s = n._getVersion),
        (s = s(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, s])
          : t.mutableSourceEagerHydrationData.push(n, s);
  return new Fi(t);
};
qe.render = function (e, t, n) {
  if (!Ai(t)) throw Error(P(200));
  return Mi(null, e, t, !1, n);
};
qe.unmountComponentAtNode = function (e) {
  if (!Ai(e)) throw Error(P(40));
  return e._reactRootContainer
    ? (Bn(function () {
        Mi(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[zt] = null);
        });
      }),
      !0)
    : !1;
};
qe.unstable_batchedUpdates = Yu;
qe.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Ai(n)) throw Error(P(200));
  if (e == null || e._reactInternals === void 0) throw Error(P(38));
  return Mi(e, t, n, !1, r);
};
qe.version = "18.3.1-next-f1338f8080-20240426";
function Yh() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Yh);
    } catch (e) {
      console.error(e);
    }
}
Yh(), (Yf.exports = qe);
var Zh = Yf.exports;
const pr = Si(Zh);
var Kd = Zh;
(Xl.createRoot = Kd.createRoot), (Xl.hydrateRoot = Kd.hydrateRoot);
var em = { exports: {} },
  tm = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Hs = h;
function Bv(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Wv = typeof Object.is == "function" ? Object.is : Bv,
  Hv = Hs.useSyncExternalStore,
  Vv = Hs.useRef,
  Kv = Hs.useEffect,
  Gv = Hs.useMemo,
  Qv = Hs.useDebugValue;
tm.useSyncExternalStoreWithSelector = function (e, t, n, r, s) {
  var o = Vv(null);
  if (o.current === null) {
    var i = { hasValue: !1, value: null };
    o.current = i;
  } else i = o.current;
  o = Gv(
    function () {
      function u(v) {
        if (!c) {
          if (((c = !0), (d = v), (v = r(v)), s !== void 0 && i.hasValue)) {
            var m = i.value;
            if (s(m, v)) return (f = m);
          }
          return (f = v);
        }
        if (((m = f), Wv(d, v))) return m;
        var S = r(v);
        return s !== void 0 && s(m, S) ? m : ((d = v), (f = S));
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
  var a = Hv(e, o[0], o[1]);
  return (
    Kv(
      function () {
        (i.hasValue = !0), (i.value = a);
      },
      [a]
    ),
    Qv(a),
    a
  );
};
em.exports = tm;
var Jv = em.exports,
  He = "default" in ql ? tt : ql,
  Gd = Symbol.for("react-redux-context"),
  Qd = typeof globalThis < "u" ? globalThis : {};
function qv() {
  if (!He.createContext) return {};
  const e = Qd[Gd] ?? (Qd[Gd] = new Map());
  let t = e.get(He.createContext);
  return t || ((t = He.createContext(null)), e.set(He.createContext, t)), t;
}
var gn = qv(),
  Xv = () => {
    throw new Error("uSES not initialized!");
  };
function ic(e = gn) {
  return function () {
    return He.useContext(e);
  };
}
var nm = ic(),
  rm = Xv,
  Yv = (e) => {
    rm = e;
  },
  Zv = (e, t) => e === t;
function e0(e = gn) {
  const t = e === gn ? nm : ic(e),
    n = (r, s = {}) => {
      const { equalityFn: o = Zv, devModeChecks: i = {} } =
          typeof s == "function" ? { equalityFn: s } : s,
        {
          store: a,
          subscription: u,
          getServerState: c,
          stabilityCheck: d,
          identityFunctionCheck: f,
        } = t();
      He.useRef(!0);
      const p = He.useCallback(
          {
            [r.name](m) {
              return r(m);
            },
          }[r.name],
          [r, d, i.stabilityCheck]
        ),
        v = rm(u.addNestedSub, a.getState, c || a.getState, p, o);
      return He.useDebugValue(v), v;
    };
  return Object.assign(n, { withTypes: () => n }), n;
}
var H = e0();
function t0(e) {
  e();
}
function n0() {
  let e = null,
    t = null;
  return {
    clear() {
      (e = null), (t = null);
    },
    notify() {
      t0(() => {
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
var Jd = { notify() {}, get: () => [] };
function r0(e, t) {
  let n,
    r = Jd,
    s = 0,
    o = !1;
  function i(S) {
    d();
    const j = r.subscribe(S);
    let x = !1;
    return () => {
      x || ((x = !0), j(), f());
    };
  }
  function a() {
    r.notify();
  }
  function u() {
    m.onStateChange && m.onStateChange();
  }
  function c() {
    return o;
  }
  function d() {
    s++, n || ((n = e.subscribe(u)), (r = n0()));
  }
  function f() {
    s--, n && s === 0 && (n(), (n = void 0), r.clear(), (r = Jd));
  }
  function p() {
    o || ((o = !0), d());
  }
  function v() {
    o && ((o = !1), f());
  }
  const m = {
    addNestedSub: i,
    notifyNestedSubs: a,
    handleChangeWrapper: u,
    isSubscribed: c,
    trySubscribe: p,
    tryUnsubscribe: v,
    getListeners: () => r,
  };
  return m;
}
var s0 =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  o0 = typeof navigator < "u" && navigator.product === "ReactNative",
  i0 = s0 || o0 ? He.useLayoutEffect : He.useEffect;
function l0({
  store: e,
  context: t,
  children: n,
  serverState: r,
  stabilityCheck: s = "once",
  identityFunctionCheck: o = "once",
}) {
  const i = He.useMemo(() => {
      const c = r0(e);
      return {
        store: e,
        subscription: c,
        getServerState: r ? () => r : void 0,
        stabilityCheck: s,
        identityFunctionCheck: o,
      };
    }, [e, r, s, o]),
    a = He.useMemo(() => e.getState(), [e]);
  i0(() => {
    const { subscription: c } = i;
    return (
      (c.onStateChange = c.notifyNestedSubs),
      c.trySubscribe(),
      a !== e.getState() && c.notifyNestedSubs(),
      () => {
        c.tryUnsubscribe(), (c.onStateChange = void 0);
      }
    );
  }, [i, a]);
  const u = t || gn;
  return He.createElement(u.Provider, { value: i }, n);
}
var a0 = l0;
function sm(e = gn) {
  const t = e === gn ? nm : ic(e),
    n = () => {
      const { store: r } = t();
      return r;
    };
  return Object.assign(n, { withTypes: () => n }), n;
}
var u0 = sm();
function c0(e = gn) {
  const t = e === gn ? u0 : sm(e),
    n = () => t().dispatch;
  return Object.assign(n, { withTypes: () => n }), n;
}
var xe = c0();
Yv(Jv.useSyncExternalStoreWithSelector);
/**
 * @remix-run/router v1.19.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Is() {
  return (
    (Is = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Is.apply(this, arguments)
  );
}
var sn;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(sn || (sn = {}));
const qd = "popstate";
function d0(e) {
  e === void 0 && (e = {});
  function t(r, s) {
    let { pathname: o, search: i, hash: a } = r.location;
    return Ha(
      "",
      { pathname: o, search: i, hash: a },
      (s.state && s.state.usr) || null,
      (s.state && s.state.key) || "default"
    );
  }
  function n(r, s) {
    return typeof s == "string" ? s : oi(s);
  }
  return p0(t, n, null, e);
}
function se(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function om(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function f0() {
  return Math.random().toString(36).substr(2, 8);
}
function Xd(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Ha(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Is(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Ir(t) : t,
      { state: n, key: (t && t.key) || r || f0() }
    )
  );
}
function oi(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Ir(e) {
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
function p0(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: s = document.defaultView, v5Compat: o = !1 } = r,
    i = s.history,
    a = sn.Pop,
    u = null,
    c = d();
  c == null && ((c = 0), i.replaceState(Is({}, i.state, { idx: c }), ""));
  function d() {
    return (i.state || { idx: null }).idx;
  }
  function f() {
    a = sn.Pop;
    let j = d(),
      x = j == null ? null : j - c;
    (c = j), u && u({ action: a, location: S.location, delta: x });
  }
  function p(j, x) {
    a = sn.Push;
    let g = Ha(S.location, j, x);
    c = d() + 1;
    let y = Xd(g, c),
      w = S.createHref(g);
    try {
      i.pushState(y, "", w);
    } catch (C) {
      if (C instanceof DOMException && C.name === "DataCloneError") throw C;
      s.location.assign(w);
    }
    o && u && u({ action: a, location: S.location, delta: 1 });
  }
  function v(j, x) {
    a = sn.Replace;
    let g = Ha(S.location, j, x);
    c = d();
    let y = Xd(g, c),
      w = S.createHref(g);
    i.replaceState(y, "", w),
      o && u && u({ action: a, location: S.location, delta: 0 });
  }
  function m(j) {
    let x = s.location.origin !== "null" ? s.location.origin : s.location.href,
      g = typeof j == "string" ? j : oi(j);
    return (
      (g = g.replace(/ $/, "%20")),
      se(
        x,
        "No window.location.(origin|href) available to create URL for href: " +
          g
      ),
      new URL(g, x)
    );
  }
  let S = {
    get action() {
      return a;
    },
    get location() {
      return e(s, i);
    },
    listen(j) {
      if (u) throw new Error("A history only accepts one active listener");
      return (
        s.addEventListener(qd, f),
        (u = j),
        () => {
          s.removeEventListener(qd, f), (u = null);
        }
      );
    },
    createHref(j) {
      return t(s, j);
    },
    createURL: m,
    encodeLocation(j) {
      let x = m(j);
      return { pathname: x.pathname, search: x.search, hash: x.hash };
    },
    push: p,
    replace: v,
    go(j) {
      return i.go(j);
    },
  };
  return S;
}
var Yd;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(Yd || (Yd = {}));
function h0(e, t, n) {
  return n === void 0 && (n = "/"), m0(e, t, n, !1);
}
function m0(e, t, n, r) {
  let s = typeof t == "string" ? Ir(t) : t,
    o = _r(s.pathname || "/", n);
  if (o == null) return null;
  let i = im(e);
  y0(i);
  let a = null;
  for (let u = 0; a == null && u < i.length; ++u) {
    let c = _0(o);
    a = C0(i[u], c, r);
  }
  return a;
}
function im(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let s = (o, i, a) => {
    let u = {
      relativePath: a === void 0 ? o.path || "" : a,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: i,
      route: o,
    };
    u.relativePath.startsWith("/") &&
      (se(
        u.relativePath.startsWith(r),
        'Absolute route path "' +
          u.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (u.relativePath = u.relativePath.slice(r.length)));
    let c = hn([r, u.relativePath]),
      d = n.concat(u);
    o.children &&
      o.children.length > 0 &&
      (se(
        o.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + c + '".')
      ),
      im(o.children, t, d, c)),
      !(o.path == null && !o.index) &&
        t.push({ path: c, score: E0(c, o.index), routesMeta: d });
  };
  return (
    e.forEach((o, i) => {
      var a;
      if (o.path === "" || !((a = o.path) != null && a.includes("?"))) s(o, i);
      else for (let u of lm(o.path)) s(o, i, u);
    }),
    t
  );
}
function lm(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    s = n.endsWith("?"),
    o = n.replace(/\?$/, "");
  if (r.length === 0) return s ? [o, ""] : [o];
  let i = lm(r.join("/")),
    a = [];
  return (
    a.push(...i.map((u) => (u === "" ? o : [o, u].join("/")))),
    s && a.push(...i),
    a.map((u) => (e.startsWith("/") && u === "" ? "/" : u))
  );
}
function y0(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : N0(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const g0 = /^:[\w-]+$/,
  x0 = 3,
  v0 = 2,
  j0 = 1,
  w0 = 10,
  S0 = -2,
  Zd = (e) => e === "*";
function E0(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Zd) && (r += S0),
    t && (r += v0),
    n
      .filter((s) => !Zd(s))
      .reduce((s, o) => s + (g0.test(o) ? x0 : o === "" ? j0 : w0), r)
  );
}
function N0(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, s) => r === t[s])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function C0(e, t, n) {
  let { routesMeta: r } = e,
    s = {},
    o = "/",
    i = [];
  for (let a = 0; a < r.length; ++a) {
    let u = r[a],
      c = a === r.length - 1,
      d = o === "/" ? t : t.slice(o.length) || "/",
      f = ii(
        { path: u.relativePath, caseSensitive: u.caseSensitive, end: c },
        d
      ),
      p = u.route;
    if (
      (!f &&
        c &&
        n &&
        !r[r.length - 1].route.index &&
        (f = ii(
          { path: u.relativePath, caseSensitive: u.caseSensitive, end: !1 },
          d
        )),
      !f)
    )
      return null;
    Object.assign(s, f.params),
      i.push({
        params: s,
        pathname: hn([o, f.pathname]),
        pathnameBase: T0(hn([o, f.pathnameBase])),
        route: p,
      }),
      f.pathnameBase !== "/" && (o = hn([o, f.pathnameBase]));
  }
  return i;
}
function ii(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = k0(e.path, e.caseSensitive, e.end),
    s = t.match(n);
  if (!s) return null;
  let o = s[0],
    i = o.replace(/(.)\/+$/, "$1"),
    a = s.slice(1);
  return {
    params: r.reduce((c, d, f) => {
      let { paramName: p, isOptional: v } = d;
      if (p === "*") {
        let S = a[f] || "";
        i = o.slice(0, o.length - S.length).replace(/(.)\/+$/, "$1");
      }
      const m = a[f];
      return (
        v && !m ? (c[p] = void 0) : (c[p] = (m || "").replace(/%2F/g, "/")), c
      );
    }, {}),
    pathname: o,
    pathnameBase: i,
    pattern: e,
  };
}
function k0(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    om(
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
          (i, a, u) => (
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
function _0(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      om(
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
function R0(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: s = "",
  } = typeof e == "string" ? Ir(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : P0(n, t)) : t,
    search: I0(r),
    hash: L0(s),
  };
}
function P0(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((s) => {
      s === ".." ? n.length > 1 && n.pop() : s !== "." && n.push(s);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function Fl(e, t, n, r) {
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
function O0(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function lc(e, t) {
  let n = O0(e);
  return t
    ? n.map((r, s) => (s === n.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function ac(e, t, n, r) {
  r === void 0 && (r = !1);
  let s;
  typeof e == "string"
    ? (s = Ir(e))
    : ((s = Is({}, e)),
      se(
        !s.pathname || !s.pathname.includes("?"),
        Fl("?", "pathname", "search", s)
      ),
      se(
        !s.pathname || !s.pathname.includes("#"),
        Fl("#", "pathname", "hash", s)
      ),
      se(!s.search || !s.search.includes("#"), Fl("#", "search", "hash", s)));
  let o = e === "" || s.pathname === "",
    i = o ? "/" : s.pathname,
    a;
  if (i == null) a = n;
  else {
    let f = t.length - 1;
    if (!r && i.startsWith("..")) {
      let p = i.split("/");
      for (; p[0] === ".."; ) p.shift(), (f -= 1);
      s.pathname = p.join("/");
    }
    a = f >= 0 ? t[f] : "/";
  }
  let u = R0(s, a),
    c = i && i !== "/" && i.endsWith("/"),
    d = (o || i === ".") && n.endsWith("/");
  return !u.pathname.endsWith("/") && (c || d) && (u.pathname += "/"), u;
}
const hn = (e) => e.join("/").replace(/\/\/+/g, "/"),
  T0 = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  I0 = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  L0 = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function $0(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const am = ["post", "put", "patch", "delete"];
new Set(am);
const D0 = ["get", ...am];
new Set(D0);
/**
 * React Router v6.26.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ls() {
  return (
    (Ls = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ls.apply(this, arguments)
  );
}
const Ui = h.createContext(null),
  um = h.createContext(null),
  Kt = h.createContext(null),
  zi = h.createContext(null),
  _t = h.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  cm = h.createContext(null);
function F0(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  Lr() || se(!1);
  let { basename: r, navigator: s } = h.useContext(Kt),
    { hash: o, pathname: i, search: a } = bi(e, { relative: n }),
    u = i;
  return (
    r !== "/" && (u = i === "/" ? r : hn([r, i])),
    s.createHref({ pathname: u, search: a, hash: o })
  );
}
function Lr() {
  return h.useContext(zi) != null;
}
function Gt() {
  return Lr() || se(!1), h.useContext(zi).location;
}
function dm(e) {
  h.useContext(Kt).static || h.useLayoutEffect(e);
}
function it() {
  let { isDataRoute: e } = h.useContext(_t);
  return e ? Y0() : A0();
}
function A0() {
  Lr() || se(!1);
  let e = h.useContext(Ui),
    { basename: t, future: n, navigator: r } = h.useContext(Kt),
    { matches: s } = h.useContext(_t),
    { pathname: o } = Gt(),
    i = JSON.stringify(lc(s, n.v7_relativeSplatPath)),
    a = h.useRef(!1);
  return (
    dm(() => {
      a.current = !0;
    }),
    h.useCallback(
      function (c, d) {
        if ((d === void 0 && (d = {}), !a.current)) return;
        if (typeof c == "number") {
          r.go(c);
          return;
        }
        let f = ac(c, JSON.parse(i), o, d.relative === "path");
        e == null &&
          t !== "/" &&
          (f.pathname = f.pathname === "/" ? t : hn([t, f.pathname])),
          (d.replace ? r.replace : r.push)(f, d.state, d);
      },
      [t, r, i, o, e]
    )
  );
}
const M0 = h.createContext(null);
function U0(e) {
  let t = h.useContext(_t).outlet;
  return t && h.createElement(M0.Provider, { value: e }, t);
}
function z0() {
  let { matches: e } = h.useContext(_t),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function bi(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = h.useContext(Kt),
    { matches: s } = h.useContext(_t),
    { pathname: o } = Gt(),
    i = JSON.stringify(lc(s, r.v7_relativeSplatPath));
  return h.useMemo(() => ac(e, JSON.parse(i), o, n === "path"), [e, i, o, n]);
}
function b0(e, t) {
  return B0(e, t);
}
function B0(e, t, n, r) {
  Lr() || se(!1);
  let { navigator: s } = h.useContext(Kt),
    { matches: o } = h.useContext(_t),
    i = o[o.length - 1],
    a = i ? i.params : {};
  i && i.pathname;
  let u = i ? i.pathnameBase : "/";
  i && i.route;
  let c = Gt(),
    d;
  if (t) {
    var f;
    let j = typeof t == "string" ? Ir(t) : t;
    u === "/" || ((f = j.pathname) != null && f.startsWith(u)) || se(!1),
      (d = j);
  } else d = c;
  let p = d.pathname || "/",
    v = p;
  if (u !== "/") {
    let j = u.replace(/^\//, "").split("/");
    v = "/" + p.replace(/^\//, "").split("/").slice(j.length).join("/");
  }
  let m = h0(e, { pathname: v }),
    S = G0(
      m &&
        m.map((j) =>
          Object.assign({}, j, {
            params: Object.assign({}, a, j.params),
            pathname: hn([
              u,
              s.encodeLocation
                ? s.encodeLocation(j.pathname).pathname
                : j.pathname,
            ]),
            pathnameBase:
              j.pathnameBase === "/"
                ? u
                : hn([
                    u,
                    s.encodeLocation
                      ? s.encodeLocation(j.pathnameBase).pathname
                      : j.pathnameBase,
                  ]),
          })
        ),
      o,
      n,
      r
    );
  return t && S
    ? h.createElement(
        zi.Provider,
        {
          value: {
            location: Ls(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              d
            ),
            navigationType: sn.Pop,
          },
        },
        S
      )
    : S;
}
function W0() {
  let e = X0(),
    t = $0(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    s = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return h.createElement(
    h.Fragment,
    null,
    h.createElement("h2", null, "Unexpected Application Error!"),
    h.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? h.createElement("pre", { style: s }, n) : null,
    null
  );
}
const H0 = h.createElement(W0, null);
class V0 extends h.Component {
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
      ? h.createElement(
          _t.Provider,
          { value: this.props.routeContext },
          h.createElement(cm.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function K0(e) {
  let { routeContext: t, match: n, children: r } = e,
    s = h.useContext(Ui);
  return (
    s &&
      s.static &&
      s.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (s.staticContext._deepestRenderedBoundaryId = n.route.id),
    h.createElement(_t.Provider, { value: t }, r)
  );
}
function G0(e, t, n, r) {
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
  let i = e,
    a = (s = n) == null ? void 0 : s.errors;
  if (a != null) {
    let d = i.findIndex(
      (f) => f.route.id && (a == null ? void 0 : a[f.route.id]) !== void 0
    );
    d >= 0 || se(!1), (i = i.slice(0, Math.min(i.length, d + 1)));
  }
  let u = !1,
    c = -1;
  if (n && r && r.v7_partialHydration)
    for (let d = 0; d < i.length; d++) {
      let f = i[d];
      if (
        ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (c = d),
        f.route.id)
      ) {
        let { loaderData: p, errors: v } = n,
          m =
            f.route.loader &&
            p[f.route.id] === void 0 &&
            (!v || v[f.route.id] === void 0);
        if (f.route.lazy || m) {
          (u = !0), c >= 0 ? (i = i.slice(0, c + 1)) : (i = [i[0]]);
          break;
        }
      }
    }
  return i.reduceRight((d, f, p) => {
    let v,
      m = !1,
      S = null,
      j = null;
    n &&
      ((v = a && f.route.id ? a[f.route.id] : void 0),
      (S = f.route.errorElement || H0),
      u &&
        (c < 0 && p === 0
          ? ((m = !0), (j = null))
          : c === p &&
            ((m = !0), (j = f.route.hydrateFallbackElement || null))));
    let x = t.concat(i.slice(0, p + 1)),
      g = () => {
        let y;
        return (
          v
            ? (y = S)
            : m
            ? (y = j)
            : f.route.Component
            ? (y = h.createElement(f.route.Component, null))
            : f.route.element
            ? (y = f.route.element)
            : (y = d),
          h.createElement(K0, {
            match: f,
            routeContext: { outlet: d, matches: x, isDataRoute: n != null },
            children: y,
          })
        );
      };
    return n && (f.route.ErrorBoundary || f.route.errorElement || p === 0)
      ? h.createElement(V0, {
          location: n.location,
          revalidation: n.revalidation,
          component: S,
          error: v,
          children: g(),
          routeContext: { outlet: null, matches: x, isDataRoute: !0 },
        })
      : g();
  }, null);
}
var fm = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(fm || {}),
  li = (function (e) {
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
  })(li || {});
function Q0(e) {
  let t = h.useContext(Ui);
  return t || se(!1), t;
}
function J0(e) {
  let t = h.useContext(um);
  return t || se(!1), t;
}
function q0(e) {
  let t = h.useContext(_t);
  return t || se(!1), t;
}
function pm(e) {
  let t = q0(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || se(!1), n.route.id;
}
function X0() {
  var e;
  let t = h.useContext(cm),
    n = J0(li.UseRouteError),
    r = pm(li.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function Y0() {
  let { router: e } = Q0(fm.UseNavigateStable),
    t = pm(li.UseNavigateStable),
    n = h.useRef(!1);
  return (
    dm(() => {
      n.current = !0;
    }),
    h.useCallback(
      function (s, o) {
        o === void 0 && (o = {}),
          n.current &&
            (typeof s == "number"
              ? e.navigate(s)
              : e.navigate(s, Ls({ fromRouteId: t }, o)));
      },
      [e, t]
    )
  );
}
function me(e) {
  let { to: t, replace: n, state: r, relative: s } = e;
  Lr() || se(!1);
  let { future: o, static: i } = h.useContext(Kt),
    { matches: a } = h.useContext(_t),
    { pathname: u } = Gt(),
    c = it(),
    d = ac(t, lc(a, o.v7_relativeSplatPath), u, s === "path"),
    f = JSON.stringify(d);
  return (
    h.useEffect(
      () => c(JSON.parse(f), { replace: n, state: r, relative: s }),
      [c, f, s, n, r]
    ),
    null
  );
}
function hm(e) {
  return U0(e.context);
}
function ce(e) {
  se(!1);
}
function Z0(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: s = sn.Pop,
    navigator: o,
    static: i = !1,
    future: a,
  } = e;
  Lr() && se(!1);
  let u = t.replace(/^\/*/, "/"),
    c = h.useMemo(
      () => ({
        basename: u,
        navigator: o,
        static: i,
        future: Ls({ v7_relativeSplatPath: !1 }, a),
      }),
      [u, a, o, i]
    );
  typeof r == "string" && (r = Ir(r));
  let {
      pathname: d = "/",
      search: f = "",
      hash: p = "",
      state: v = null,
      key: m = "default",
    } = r,
    S = h.useMemo(() => {
      let j = _r(d, u);
      return j == null
        ? null
        : {
            location: { pathname: j, search: f, hash: p, state: v, key: m },
            navigationType: s,
          };
    }, [u, d, f, p, v, m, s]);
  return S == null
    ? null
    : h.createElement(
        Kt.Provider,
        { value: c },
        h.createElement(zi.Provider, { children: n, value: S })
      );
}
function e1(e) {
  let { children: t, location: n } = e;
  return b0(Va(t), n);
}
new Promise(() => {});
function Va(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    h.Children.forEach(e, (r, s) => {
      if (!h.isValidElement(r)) return;
      let o = [...t, s];
      if (r.type === h.Fragment) {
        n.push.apply(n, Va(r.props.children, o));
        return;
      }
      r.type !== ce && se(!1), !r.props.index || !r.props.children || se(!1);
      let i = {
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
      r.props.children && (i.children = Va(r.props.children, o)), n.push(i);
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
 */ function ai() {
  return (
    (ai = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ai.apply(this, arguments)
  );
}
function mm(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    s,
    o;
  for (o = 0; o < r.length; o++)
    (s = r[o]), !(t.indexOf(s) >= 0) && (n[s] = e[s]);
  return n;
}
function t1(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function n1(e, t) {
  return e.button === 0 && (!t || t === "_self") && !t1(e);
}
const r1 = [
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
  s1 = [
    "aria-current",
    "caseSensitive",
    "className",
    "end",
    "style",
    "to",
    "unstable_viewTransition",
    "children",
  ],
  o1 = "6";
try {
  window.__reactRouterVersion = o1;
} catch {}
const i1 = h.createContext({ isTransitioning: !1 }),
  l1 = "startTransition",
  ef = ql[l1];
function a1(e) {
  let { basename: t, children: n, future: r, window: s } = e,
    o = h.useRef();
  o.current == null && (o.current = d0({ window: s, v5Compat: !0 }));
  let i = o.current,
    [a, u] = h.useState({ action: i.action, location: i.location }),
    { v7_startTransition: c } = r || {},
    d = h.useCallback(
      (f) => {
        c && ef ? ef(() => u(f)) : u(f);
      },
      [u, c]
    );
  return (
    h.useLayoutEffect(() => i.listen(d), [i, d]),
    h.createElement(Z0, {
      basename: t,
      children: n,
      location: a.location,
      navigationType: a.action,
      navigator: i,
      future: r,
    })
  );
}
const u1 =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  c1 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Vs = h.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: s,
        reloadDocument: o,
        replace: i,
        state: a,
        target: u,
        to: c,
        preventScrollReset: d,
        unstable_viewTransition: f,
      } = t,
      p = mm(t, r1),
      { basename: v } = h.useContext(Kt),
      m,
      S = !1;
    if (typeof c == "string" && c1.test(c) && ((m = c), u1))
      try {
        let y = new URL(window.location.href),
          w = c.startsWith("//") ? new URL(y.protocol + c) : new URL(c),
          C = _r(w.pathname, v);
        w.origin === y.origin && C != null
          ? (c = C + w.search + w.hash)
          : (S = !0);
      } catch {}
    let j = F0(c, { relative: s }),
      x = f1(c, {
        replace: i,
        state: a,
        target: u,
        preventScrollReset: d,
        relative: s,
        unstable_viewTransition: f,
      });
    function g(y) {
      r && r(y), y.defaultPrevented || x(y);
    }
    return h.createElement(
      "a",
      ai({}, p, { href: m || j, onClick: S || o ? r : g, ref: n, target: u })
    );
  }),
  It = h.forwardRef(function (t, n) {
    let {
        "aria-current": r = "page",
        caseSensitive: s = !1,
        className: o = "",
        end: i = !1,
        style: a,
        to: u,
        unstable_viewTransition: c,
        children: d,
      } = t,
      f = mm(t, s1),
      p = bi(u, { relative: f.relative }),
      v = Gt(),
      m = h.useContext(um),
      { navigator: S, basename: j } = h.useContext(Kt),
      x = m != null && p1(p) && c === !0,
      g = S.encodeLocation ? S.encodeLocation(p).pathname : p.pathname,
      y = v.pathname,
      w =
        m && m.navigation && m.navigation.location
          ? m.navigation.location.pathname
          : null;
    s ||
      ((y = y.toLowerCase()),
      (w = w ? w.toLowerCase() : null),
      (g = g.toLowerCase())),
      w && j && (w = _r(w, j) || w);
    const C = g !== "/" && g.endsWith("/") ? g.length - 1 : g.length;
    let k = y === g || (!i && y.startsWith(g) && y.charAt(C) === "/"),
      R =
        w != null &&
        (w === g || (!i && w.startsWith(g) && w.charAt(g.length) === "/")),
      T = { isActive: k, isPending: R, isTransitioning: x },
      W = k ? r : void 0,
      $;
    typeof o == "function"
      ? ($ = o(T))
      : ($ = [
          o,
          k ? "active" : null,
          R ? "pending" : null,
          x ? "transitioning" : null,
        ]
          .filter(Boolean)
          .join(" "));
    let fe = typeof a == "function" ? a(T) : a;
    return h.createElement(
      Vs,
      ai({}, f, {
        "aria-current": W,
        className: $,
        ref: n,
        style: fe,
        to: u,
        unstable_viewTransition: c,
      }),
      typeof d == "function" ? d(T) : d
    );
  });
var Ka;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(Ka || (Ka = {}));
var tf;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(tf || (tf = {}));
function d1(e) {
  let t = h.useContext(Ui);
  return t || se(!1), t;
}
function f1(e, t) {
  let {
      target: n,
      replace: r,
      state: s,
      preventScrollReset: o,
      relative: i,
      unstable_viewTransition: a,
    } = t === void 0 ? {} : t,
    u = it(),
    c = Gt(),
    d = bi(e, { relative: i });
  return h.useCallback(
    (f) => {
      if (n1(f, n)) {
        f.preventDefault();
        let p = r !== void 0 ? r : oi(c) === oi(d);
        u(e, {
          replace: p,
          state: s,
          preventScrollReset: o,
          relative: i,
          unstable_viewTransition: a,
        });
      }
    },
    [c, u, d, r, s, n, e, o, i, a]
  );
}
function p1(e, t) {
  t === void 0 && (t = {});
  let n = h.useContext(i1);
  n == null && se(!1);
  let { basename: r } = d1(Ka.useViewTransitionState),
    s = bi(e, { relative: t.relative });
  if (!n.isTransitioning) return !1;
  let o = _r(n.currentLocation.pathname, r) || n.currentLocation.pathname,
    i = _r(n.nextLocation.pathname, r) || n.nextLocation.pathname;
  return ii(s.pathname, i) != null || ii(s.pathname, o) != null;
}
var ym = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (function (e) {
  (function () {
    var t = {}.hasOwnProperty;
    function n() {
      for (var o = "", i = 0; i < arguments.length; i++) {
        var a = arguments[i];
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
      var i = "";
      for (var a in o) t.call(o, a) && o[a] && (i = s(i, a));
      return i;
    }
    function s(o, i) {
      return i ? (o ? o + " " + i : o + i) : o;
    }
    e.exports ? ((n.default = n), (e.exports = n)) : (window.classNames = n);
  })();
})(ym);
var h1 = ym.exports;
const F = Si(h1);
function Ga() {
  return (
    (Ga = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ga.apply(null, arguments)
  );
}
function gm(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.includes(r)) continue;
      n[r] = e[r];
    }
  return n;
}
function nf(e) {
  return "default" + e.charAt(0).toUpperCase() + e.substr(1);
}
function m1(e) {
  var t = y1(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
function y1(e, t) {
  if (typeof e != "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function g1(e, t, n) {
  var r = h.useRef(e !== void 0),
    s = h.useState(t),
    o = s[0],
    i = s[1],
    a = e !== void 0,
    u = r.current;
  return (
    (r.current = a),
    !a && u && o !== t && i(t),
    [
      a ? e : o,
      h.useCallback(
        function (c) {
          for (
            var d = arguments.length, f = new Array(d > 1 ? d - 1 : 0), p = 1;
            p < d;
            p++
          )
            f[p - 1] = arguments[p];
          n && n.apply(void 0, [c].concat(f)), i(c);
        },
        [n]
      ),
    ]
  );
}
function Bi(e, t) {
  return Object.keys(t).reduce(function (n, r) {
    var s,
      o = n,
      i = o[nf(r)],
      a = o[r],
      u = gm(o, [nf(r), r].map(m1)),
      c = t[r],
      d = g1(a, i, e[c]),
      f = d[0],
      p = d[1];
    return Ga({}, u, ((s = {}), (s[r] = f), (s[c] = p), s));
  }, e);
}
function Qa(e, t) {
  return (
    (Qa = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, r) {
          return (n.__proto__ = r), n;
        }),
    Qa(e, t)
  );
}
function x1(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    Qa(e, t);
}
const v1 = ["xxl", "xl", "lg", "md", "sm", "xs"],
  j1 = "xs",
  uc = h.createContext({ prefixes: {}, breakpoints: v1, minBreakpoint: j1 });
function b(e, t) {
  const { prefixes: n } = h.useContext(uc);
  return e || n[t] || t;
}
function xm() {
  const { breakpoints: e } = h.useContext(uc);
  return e;
}
function vm() {
  const { minBreakpoint: e } = h.useContext(uc);
  return e;
}
function cc(e) {
  return (e && e.ownerDocument) || document;
}
function w1(e) {
  var t = cc(e);
  return (t && t.defaultView) || window;
}
function S1(e, t) {
  return w1(e).getComputedStyle(e, t);
}
var E1 = /([A-Z])/g;
function N1(e) {
  return e.replace(E1, "-$1").toLowerCase();
}
var C1 = /^ms-/;
function xo(e) {
  return N1(e).replace(C1, "-ms-");
}
var k1 =
  /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function _1(e) {
  return !!(e && k1.test(e));
}
function Mt(e, t) {
  var n = "",
    r = "";
  if (typeof t == "string")
    return e.style.getPropertyValue(xo(t)) || S1(e).getPropertyValue(xo(t));
  Object.keys(t).forEach(function (s) {
    var o = t[s];
    !o && o !== 0
      ? e.style.removeProperty(xo(s))
      : _1(s)
      ? (r += s + "(" + o + ") ")
      : (n += xo(s) + ": " + o + ";");
  }),
    r && (n += "transform: " + r + ";"),
    (e.style.cssText += ";" + n);
}
var jm = { exports: {} },
  R1 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  P1 = R1,
  O1 = P1;
function wm() {}
function Sm() {}
Sm.resetWarningCache = wm;
var T1 = function () {
  function e(r, s, o, i, a, u) {
    if (u !== O1) {
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
    checkPropTypes: Sm,
    resetWarningCache: wm,
  };
  return (n.PropTypes = n), n;
};
jm.exports = T1();
var I1 = jm.exports;
const De = Si(I1),
  rf = { disabled: !1 },
  Em = tt.createContext(null);
var L1 = function (t) {
    return t.scrollTop;
  },
  ss = "unmounted",
  Zt = "exited",
  ht = "entering",
  Lt = "entered",
  $s = "exiting",
  Qt = (function (e) {
    x1(t, e);
    function t(r, s) {
      var o;
      o = e.call(this, r, s) || this;
      var i = s,
        a = i && !i.isMounting ? r.enter : r.appear,
        u;
      return (
        (o.appearStatus = null),
        r.in
          ? a
            ? ((u = Zt), (o.appearStatus = ht))
            : (u = Lt)
          : r.unmountOnExit || r.mountOnEnter
          ? (u = ss)
          : (u = Zt),
        (o.state = { status: u }),
        (o.nextCallback = null),
        o
      );
    }
    t.getDerivedStateFromProps = function (s, o) {
      var i = s.in;
      return i && o.status === ss ? { status: Zt } : null;
    };
    var n = t.prototype;
    return (
      (n.componentDidMount = function () {
        this.updateStatus(!0, this.appearStatus);
      }),
      (n.componentDidUpdate = function (s) {
        var o = null;
        if (s !== this.props) {
          var i = this.state.status;
          this.props.in
            ? i !== ht && i !== Lt && (o = ht)
            : (i === ht || i === Lt) && (o = $s);
        }
        this.updateStatus(!1, o);
      }),
      (n.componentWillUnmount = function () {
        this.cancelNextCallback();
      }),
      (n.getTimeouts = function () {
        var s = this.props.timeout,
          o,
          i,
          a;
        return (
          (o = i = a = s),
          s != null &&
            typeof s != "number" &&
            ((o = s.exit),
            (i = s.enter),
            (a = s.appear !== void 0 ? s.appear : i)),
          { exit: o, enter: i, appear: a }
        );
      }),
      (n.updateStatus = function (s, o) {
        if ((s === void 0 && (s = !1), o !== null))
          if ((this.cancelNextCallback(), o === ht)) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
              var i = this.props.nodeRef
                ? this.props.nodeRef.current
                : pr.findDOMNode(this);
              i && L1(i);
            }
            this.performEnter(s);
          } else this.performExit();
        else
          this.props.unmountOnExit &&
            this.state.status === Zt &&
            this.setState({ status: ss });
      }),
      (n.performEnter = function (s) {
        var o = this,
          i = this.props.enter,
          a = this.context ? this.context.isMounting : s,
          u = this.props.nodeRef ? [a] : [pr.findDOMNode(this), a],
          c = u[0],
          d = u[1],
          f = this.getTimeouts(),
          p = a ? f.appear : f.enter;
        if ((!s && !i) || rf.disabled) {
          this.safeSetState({ status: Lt }, function () {
            o.props.onEntered(c);
          });
          return;
        }
        this.props.onEnter(c, d),
          this.safeSetState({ status: ht }, function () {
            o.props.onEntering(c, d),
              o.onTransitionEnd(p, function () {
                o.safeSetState({ status: Lt }, function () {
                  o.props.onEntered(c, d);
                });
              });
          });
      }),
      (n.performExit = function () {
        var s = this,
          o = this.props.exit,
          i = this.getTimeouts(),
          a = this.props.nodeRef ? void 0 : pr.findDOMNode(this);
        if (!o || rf.disabled) {
          this.safeSetState({ status: Zt }, function () {
            s.props.onExited(a);
          });
          return;
        }
        this.props.onExit(a),
          this.safeSetState({ status: $s }, function () {
            s.props.onExiting(a),
              s.onTransitionEnd(i.exit, function () {
                s.safeSetState({ status: Zt }, function () {
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
          i = !0;
        return (
          (this.nextCallback = function (a) {
            i && ((i = !1), (o.nextCallback = null), s(a));
          }),
          (this.nextCallback.cancel = function () {
            i = !1;
          }),
          this.nextCallback
        );
      }),
      (n.onTransitionEnd = function (s, o) {
        this.setNextCallback(o);
        var i = this.props.nodeRef
            ? this.props.nodeRef.current
            : pr.findDOMNode(this),
          a = s == null && !this.props.addEndListener;
        if (!i || a) {
          setTimeout(this.nextCallback, 0);
          return;
        }
        if (this.props.addEndListener) {
          var u = this.props.nodeRef
              ? [this.nextCallback]
              : [i, this.nextCallback],
            c = u[0],
            d = u[1];
          this.props.addEndListener(c, d);
        }
        s != null && setTimeout(this.nextCallback, s);
      }),
      (n.render = function () {
        var s = this.state.status;
        if (s === ss) return null;
        var o = this.props,
          i = o.children;
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
        var a = gm(o, [
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
          Em.Provider,
          { value: null },
          typeof i == "function"
            ? i(s, a)
            : tt.cloneElement(tt.Children.only(i), a)
        );
      }),
      t
    );
  })(tt.Component);
Qt.contextType = Em;
Qt.propTypes = {};
function Zn() {}
Qt.defaultProps = {
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
Qt.UNMOUNTED = ss;
Qt.EXITED = Zt;
Qt.ENTERING = ht;
Qt.ENTERED = Lt;
Qt.EXITING = $s;
function $1(e) {
  return e.code === "Escape" || e.keyCode === 27;
}
function D1() {
  const e = h.version.split(".");
  return { major: +e[0], minor: +e[1], patch: +e[2] };
}
function Wi(e) {
  if (!e || typeof e == "function") return null;
  const { major: t } = D1();
  return t >= 19 ? e.props.ref : e.ref;
}
const Hi = !!(
  typeof window < "u" &&
  window.document &&
  window.document.createElement
);
var Ja = !1,
  qa = !1;
try {
  var Al = {
    get passive() {
      return (Ja = !0);
    },
    get once() {
      return (qa = Ja = !0);
    },
  };
  Hi &&
    (window.addEventListener("test", Al, Al),
    window.removeEventListener("test", Al, !0));
} catch {}
function F1(e, t, n, r) {
  if (r && typeof r != "boolean" && !qa) {
    var s = r.once,
      o = r.capture,
      i = n;
    !qa &&
      s &&
      ((i =
        n.__once ||
        function a(u) {
          this.removeEventListener(t, a, o), n.call(this, u);
        }),
      (n.__once = i)),
      e.addEventListener(t, i, Ja ? r : o);
  }
  e.addEventListener(t, n, r);
}
function A1(e, t, n, r) {
  var s = r && typeof r != "boolean" ? r.capture : r;
  e.removeEventListener(t, n, s),
    n.__once && e.removeEventListener(t, n.__once, s);
}
function ui(e, t, n, r) {
  return (
    F1(e, t, n, r),
    function () {
      A1(e, t, n, r);
    }
  );
}
function M1(e, t, n, r) {
  if ((r === void 0 && (r = !0), e)) {
    var s = document.createEvent("HTMLEvents");
    s.initEvent(t, n, r), e.dispatchEvent(s);
  }
}
function U1(e) {
  var t = Mt(e, "transitionDuration") || "",
    n = t.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(t) * n;
}
function z1(e, t, n) {
  n === void 0 && (n = 5);
  var r = !1,
    s = setTimeout(function () {
      r || M1(e, "transitionend", !0);
    }, t + n),
    o = ui(
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
function b1(e, t, n, r) {
  n == null && (n = U1(e) || 0);
  var s = z1(e, n, r),
    o = ui(e, "transitionend", t);
  return function () {
    s(), o();
  };
}
function sf(e, t) {
  const n = Mt(e, t) || "",
    r = n.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(n) * r;
}
function dc(e, t) {
  const n = sf(e, "transitionDuration"),
    r = sf(e, "transitionDelay"),
    s = b1(
      e,
      (o) => {
        o.target === e && (s(), t(o));
      },
      n + r
    );
}
function Xr(...e) {
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
function Nm(e) {
  e.offsetHeight;
}
const of = (e) =>
  !e || typeof e == "function"
    ? e
    : (t) => {
        e.current = t;
      };
function B1(e, t) {
  const n = of(e),
    r = of(t);
  return (s) => {
    n && n(s), r && r(s);
  };
}
function W1(e, t) {
  return h.useMemo(() => B1(e, t), [e, t]);
}
function H1(e) {
  return e && "setState" in e ? pr.findDOMNode(e) : e ?? null;
}
const fc = tt.forwardRef(
    (
      {
        onEnter: e,
        onEntering: t,
        onEntered: n,
        onExit: r,
        onExiting: s,
        onExited: o,
        addEndListener: i,
        children: a,
        childRef: u,
        ...c
      },
      d
    ) => {
      const f = h.useRef(null),
        p = W1(f, u),
        v = (k) => {
          p(H1(k));
        },
        m = (k) => (R) => {
          k && f.current && k(f.current, R);
        },
        S = h.useCallback(m(e), [e]),
        j = h.useCallback(m(t), [t]),
        x = h.useCallback(m(n), [n]),
        g = h.useCallback(m(r), [r]),
        y = h.useCallback(m(s), [s]),
        w = h.useCallback(m(o), [o]),
        C = h.useCallback(m(i), [i]);
      return l.jsx(Qt, {
        ref: d,
        ...c,
        onEnter: S,
        onEntered: x,
        onEntering: j,
        onExit: g,
        onExited: w,
        onExiting: y,
        addEndListener: C,
        nodeRef: f,
        children:
          typeof a == "function"
            ? (k, R) => a(k, { ...R, ref: v })
            : tt.cloneElement(a, { ref: v }),
      });
    }
  ),
  V1 = {
    height: ["marginTop", "marginBottom"],
    width: ["marginLeft", "marginRight"],
  };
function K1(e, t) {
  const n = `offset${e[0].toUpperCase()}${e.slice(1)}`,
    r = t[n],
    s = V1[e];
  return r + parseInt(Mt(t, s[0]), 10) + parseInt(Mt(t, s[1]), 10);
}
const G1 = {
    [Zt]: "collapse",
    [$s]: "collapsing",
    [ht]: "collapsing",
    [Lt]: "collapse show",
  },
  Q1 = tt.forwardRef(
    (
      {
        onEnter: e,
        onEntering: t,
        onEntered: n,
        onExit: r,
        onExiting: s,
        className: o,
        children: i,
        dimension: a = "height",
        in: u = !1,
        timeout: c = 300,
        mountOnEnter: d = !1,
        unmountOnExit: f = !1,
        appear: p = !1,
        getDimensionValue: v = K1,
        ...m
      },
      S
    ) => {
      const j = typeof a == "function" ? a() : a,
        x = h.useMemo(
          () =>
            Xr((k) => {
              k.style[j] = "0";
            }, e),
          [j, e]
        ),
        g = h.useMemo(
          () =>
            Xr((k) => {
              const R = `scroll${j[0].toUpperCase()}${j.slice(1)}`;
              k.style[j] = `${k[R]}px`;
            }, t),
          [j, t]
        ),
        y = h.useMemo(
          () =>
            Xr((k) => {
              k.style[j] = null;
            }, n),
          [j, n]
        ),
        w = h.useMemo(
          () =>
            Xr((k) => {
              (k.style[j] = `${v(j, k)}px`), Nm(k);
            }, r),
          [r, v, j]
        ),
        C = h.useMemo(
          () =>
            Xr((k) => {
              k.style[j] = null;
            }, s),
          [j, s]
        );
      return l.jsx(fc, {
        ref: S,
        addEndListener: dc,
        ...m,
        "aria-expanded": m.role ? u : null,
        onEnter: x,
        onEntering: g,
        onEntered: y,
        onExit: w,
        onExiting: C,
        childRef: Wi(i),
        in: u,
        timeout: c,
        mountOnEnter: d,
        unmountOnExit: f,
        appear: p,
        children: (k, R) =>
          tt.cloneElement(i, {
            ...R,
            className: F(
              o,
              i.props.className,
              G1[k],
              j === "width" && "collapse-horizontal"
            ),
          }),
      });
    }
  );
function J1(e) {
  const t = h.useRef(e);
  return (
    h.useEffect(() => {
      t.current = e;
    }, [e]),
    t
  );
}
function $r(e) {
  const t = J1(e);
  return h.useCallback(
    function (...n) {
      return t.current && t.current(...n);
    },
    [t]
  );
}
const Cm = (e) =>
    h.forwardRef((t, n) =>
      l.jsx("div", { ...t, ref: n, className: F(t.className, e) })
    ),
  km = Cm("h4");
km.displayName = "DivStyledAsH4";
const _m = h.forwardRef(
  ({ className: e, bsPrefix: t, as: n = km, ...r }, s) => (
    (t = b(t, "alert-heading")), l.jsx(n, { ref: s, className: F(e, t), ...r })
  )
);
_m.displayName = "AlertHeading";
function q1(e) {
  const t = h.useRef(e);
  return (
    h.useEffect(() => {
      t.current = e;
    }, [e]),
    t
  );
}
function $t(e) {
  const t = q1(e);
  return h.useCallback(
    function (...n) {
      return t.current && t.current(...n);
    },
    [t]
  );
}
function X1() {
  const e = h.useRef(!0),
    t = h.useRef(() => e.current);
  return (
    h.useEffect(
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
function Y1(e) {
  const t = h.useRef(null);
  return (
    h.useEffect(() => {
      t.current = e;
    }),
    t.current
  );
}
const Z1 =
    typeof global < "u" &&
    global.navigator &&
    global.navigator.product === "ReactNative",
  ej = typeof document < "u",
  lf = ej || Z1 ? h.useLayoutEffect : h.useEffect,
  tj = ["as", "disabled"];
function nj(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function rj(e) {
  return !e || e.trim() === "#";
}
function pc({
  tagName: e,
  disabled: t,
  href: n,
  target: r,
  rel: s,
  role: o,
  onClick: i,
  tabIndex: a = 0,
  type: u,
}) {
  e || (n != null || r != null || s != null ? (e = "a") : (e = "button"));
  const c = { tagName: e };
  if (e === "button") return [{ type: u || "button", disabled: t }, c];
  const d = (p) => {
      if (((t || (e === "a" && rj(n))) && p.preventDefault(), t)) {
        p.stopPropagation();
        return;
      }
      i == null || i(p);
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
const Rm = h.forwardRef((e, t) => {
  let { as: n, disabled: r } = e,
    s = nj(e, tj);
  const [o, { tagName: i }] = pc(Object.assign({ tagName: n, disabled: r }, s));
  return l.jsx(i, Object.assign({}, s, o, { ref: t }));
});
Rm.displayName = "Button";
const sj = ["onKeyDown"];
function oj(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function ij(e) {
  return !e || e.trim() === "#";
}
const Vi = h.forwardRef((e, t) => {
  let { onKeyDown: n } = e,
    r = oj(e, sj);
  const [s] = pc(Object.assign({ tagName: "a" }, r)),
    o = $t((i) => {
      s.onKeyDown(i), n == null || n(i);
    });
  return ij(r.href) || r.role === "button"
    ? l.jsx("a", Object.assign({ ref: t }, r, s, { onKeyDown: o }))
    : l.jsx("a", Object.assign({ ref: t }, r, { onKeyDown: n }));
});
Vi.displayName = "Anchor";
const Pm = h.forwardRef(
  ({ className: e, bsPrefix: t, as: n = Vi, ...r }, s) => (
    (t = b(t, "alert-link")), l.jsx(n, { ref: s, className: F(e, t), ...r })
  )
);
Pm.displayName = "AlertLink";
const lj = { [ht]: "show", [Lt]: "show" },
  ci = h.forwardRef(
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
      const i = {
          in: !1,
          timeout: 300,
          mountOnEnter: !1,
          unmountOnExit: !1,
          appear: !1,
          ...s,
        },
        a = h.useCallback(
          (u, c) => {
            Nm(u), r == null || r(u, c);
          },
          [r]
        );
      return l.jsx(fc, {
        ref: o,
        addEndListener: dc,
        ...i,
        onEnter: a,
        childRef: Wi(t),
        children: (u, c) =>
          h.cloneElement(t, {
            ...c,
            className: F("fade", e, t.props.className, lj[u], n[u]),
          }),
      });
    }
  );
ci.displayName = "Fade";
const aj = {
    "aria-label": De.string,
    onClick: De.func,
    variant: De.oneOf(["white"]),
  },
  Ki = h.forwardRef(
    ({ className: e, variant: t, "aria-label": n = "Close", ...r }, s) =>
      l.jsx("button", {
        ref: s,
        type: "button",
        className: F("btn-close", t && `btn-close-${t}`, e),
        "aria-label": n,
        ...r,
      })
  );
Ki.displayName = "CloseButton";
Ki.propTypes = aj;
const Om = h.forwardRef((e, t) => {
  const {
      bsPrefix: n,
      show: r = !0,
      closeLabel: s = "Close alert",
      closeVariant: o,
      className: i,
      children: a,
      variant: u = "primary",
      onClose: c,
      dismissible: d,
      transition: f = ci,
      ...p
    } = Bi(e, { show: "onClose" }),
    v = b(n, "alert"),
    m = $r((x) => {
      c && c(!1, x);
    }),
    S = f === !0 ? ci : f,
    j = l.jsxs("div", {
      role: "alert",
      ...(S ? void 0 : p),
      ref: t,
      className: F(i, v, u && `${v}-${u}`, d && `${v}-dismissible`),
      children: [
        d && l.jsx(Ki, { onClick: m, "aria-label": s, variant: o }),
        a,
      ],
    });
  return S
    ? l.jsx(S, { unmountOnExit: !0, ...p, ref: void 0, in: r, children: j })
    : r
    ? j
    : null;
});
Om.displayName = "Alert";
const uj = Object.assign(Om, { Link: Pm, Heading: _m }),
  G = h.forwardRef(
    (
      {
        as: e,
        bsPrefix: t,
        variant: n = "primary",
        size: r,
        active: s = !1,
        disabled: o = !1,
        className: i,
        ...a
      },
      u
    ) => {
      const c = b(t, "btn"),
        [d, { tagName: f }] = pc({ tagName: e, disabled: o, ...a }),
        p = f;
      return l.jsx(p, {
        ...d,
        ...a,
        ref: u,
        disabled: o,
        className: F(
          i,
          c,
          s && "active",
          n && `${c}-${n}`,
          r && `${c}-${r}`,
          a.href && o && "disabled"
        ),
      });
    }
  );
G.displayName = "Button";
const Dr = h.forwardRef(
  (
    {
      bsPrefix: e,
      size: t,
      vertical: n = !1,
      className: r,
      role: s = "group",
      as: o = "div",
      ...i
    },
    a
  ) => {
    const u = b(e, "btn-group");
    let c = u;
    return (
      n && (c = `${u}-vertical`),
      l.jsx(o, { ...i, ref: a, role: s, className: F(r, c, t && `${u}-${t}`) })
    );
  }
);
Dr.displayName = "ButtonGroup";
const Tm = h.createContext(null);
Tm.displayName = "CardHeaderContext";
function cj(e, t) {
  return h.Children.toArray(e).some((n) => h.isValidElement(n) && n.type === t);
}
function dj({ as: e, bsPrefix: t, className: n, ...r }) {
  t = b(t, "col");
  const s = xm(),
    o = vm(),
    i = [],
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
      d && i.push(d === !0 ? `${t}${v}` : `${t}${v}-${d}`),
        p != null && a.push(`order${v}-${p}`),
        f != null && a.push(`offset${v}-${f}`);
    }),
    [
      { ...r, className: F(n, ...i, ...a) },
      { as: e, bsPrefix: t, spans: i },
    ]
  );
}
const E = h.forwardRef((e, t) => {
  const [{ className: n, ...r }, { as: s = "div", bsPrefix: o, spans: i }] =
    dj(e);
  return l.jsx(s, { ...r, ref: t, className: F(n, !i.length && o) });
});
E.displayName = "Col";
const hc = h.forwardRef(
  ({ bsPrefix: e, fluid: t = !1, as: n = "div", className: r, ...s }, o) => {
    const i = b(e, "container"),
      a = typeof t == "string" ? `-${t}` : "-fluid";
    return l.jsx(n, { ref: o, ...s, className: F(r, t ? `${i}${a}` : i) });
  }
);
hc.displayName = "Container";
var fj = Function.prototype.bind.call(Function.prototype.call, [].slice);
function Pn(e, t) {
  return fj(e.querySelectorAll(t));
}
function pj() {
  const [, e] = h.useReducer((t) => t + 1, 0);
  return e;
}
function af(e, t) {
  if (e.contains) return e.contains(t);
  if (e.compareDocumentPosition)
    return e === t || !!(e.compareDocumentPosition(t) & 16);
}
const di = h.createContext(null),
  Gi = (e, t = null) => (e != null ? String(e) : t || null),
  mc = h.createContext(null);
mc.displayName = "NavContext";
const hj = "data-rr-ui-",
  mj = "rrUi";
function Qi(e) {
  return `${hj}${e}`;
}
function yj(e) {
  return `${mj}${e}`;
}
const Im = h.createContext(Hi ? window : void 0);
Im.Provider;
function yc() {
  return h.useContext(Im);
}
const gj =
    typeof global < "u" &&
    global.navigator &&
    global.navigator.product === "ReactNative",
  xj = typeof document < "u",
  vj = xj || gj ? h.useLayoutEffect : h.useEffect,
  Fr = h.createContext(null);
Fr.displayName = "NavbarContext";
De.string, De.bool, De.bool, De.bool, De.bool;
const Ks = h.forwardRef(
  (
    {
      bsPrefix: e,
      className: t,
      fluid: n = !1,
      rounded: r = !1,
      roundedCircle: s = !1,
      thumbnail: o = !1,
      ...i
    },
    a
  ) => (
    (e = b(e, "img")),
    l.jsx("img", {
      ref: a,
      ...i,
      className: F(
        t,
        n && `${e}-fluid`,
        r && "rounded",
        s && "rounded-circle",
        o && `${e}-thumbnail`
      ),
    })
  )
);
Ks.displayName = "Image";
const jj = { type: De.string, tooltip: De.bool, as: De.elementType },
  Ji = h.forwardRef(
    (
      { as: e = "div", className: t, type: n = "valid", tooltip: r = !1, ...s },
      o
    ) =>
      l.jsx(e, {
        ...s,
        ref: o,
        className: F(t, `${n}-${r ? "tooltip" : "feedback"}`),
      })
  );
Ji.displayName = "Feedback";
Ji.propTypes = jj;
const Wt = h.createContext({}),
  gc = h.forwardRef(
    (
      {
        id: e,
        bsPrefix: t,
        className: n,
        type: r = "checkbox",
        isValid: s = !1,
        isInvalid: o = !1,
        as: i = "input",
        ...a
      },
      u
    ) => {
      const { controlId: c } = h.useContext(Wt);
      return (
        (t = b(t, "form-check-input")),
        l.jsx(i, {
          ...a,
          ref: u,
          type: r,
          id: e || c,
          className: F(n, t, s && "is-valid", o && "is-invalid"),
        })
      );
    }
  );
gc.displayName = "FormCheckInput";
const fi = h.forwardRef(
  ({ bsPrefix: e, className: t, htmlFor: n, ...r }, s) => {
    const { controlId: o } = h.useContext(Wt);
    return (
      (e = b(e, "form-check-label")),
      l.jsx("label", { ...r, ref: s, htmlFor: n || o, className: F(t, e) })
    );
  }
);
fi.displayName = "FormCheckLabel";
const Lm = h.forwardRef(
  (
    {
      id: e,
      bsPrefix: t,
      bsSwitchPrefix: n,
      inline: r = !1,
      reverse: s = !1,
      disabled: o = !1,
      isValid: i = !1,
      isInvalid: a = !1,
      feedbackTooltip: u = !1,
      feedback: c,
      feedbackType: d,
      className: f,
      style: p,
      title: v = "",
      type: m = "checkbox",
      label: S,
      children: j,
      as: x = "input",
      ...g
    },
    y
  ) => {
    (t = b(t, "form-check")), (n = b(n, "form-switch"));
    const { controlId: w } = h.useContext(Wt),
      C = h.useMemo(() => ({ controlId: e || w }), [w, e]),
      k = (!j && S != null && S !== !1) || cj(j, fi),
      R = l.jsx(gc, {
        ...g,
        type: m === "switch" ? "checkbox" : m,
        ref: y,
        isValid: i,
        isInvalid: a,
        disabled: o,
        as: x,
      });
    return l.jsx(Wt.Provider, {
      value: C,
      children: l.jsx("div", {
        style: p,
        className: F(
          f,
          k && t,
          r && `${t}-inline`,
          s && `${t}-reverse`,
          m === "switch" && n
        ),
        children:
          j ||
          l.jsxs(l.Fragment, {
            children: [
              R,
              k && l.jsx(fi, { title: v, children: S }),
              c && l.jsx(Ji, { type: d, tooltip: u, children: c }),
            ],
          }),
      }),
    });
  }
);
Lm.displayName = "FormCheck";
const pi = Object.assign(Lm, { Input: gc, Label: fi }),
  $m = h.forwardRef(
    (
      {
        bsPrefix: e,
        type: t,
        size: n,
        htmlSize: r,
        id: s,
        className: o,
        isValid: i = !1,
        isInvalid: a = !1,
        plaintext: u,
        readOnly: c,
        as: d = "input",
        ...f
      },
      p
    ) => {
      const { controlId: v } = h.useContext(Wt);
      return (
        (e = b(e, "form-control")),
        l.jsx(d, {
          ...f,
          type: t,
          size: r,
          ref: p,
          readOnly: c,
          id: s || v,
          className: F(
            o,
            u ? `${e}-plaintext` : e,
            n && `${e}-${n}`,
            t === "color" && `${e}-color`,
            i && "is-valid",
            a && "is-invalid"
          ),
        })
      );
    }
  );
$m.displayName = "FormControl";
const wj = Object.assign($m, { Feedback: Ji }),
  Dm = h.forwardRef(
    ({ className: e, bsPrefix: t, as: n = "div", ...r }, s) => (
      (t = b(t, "form-floating")),
      l.jsx(n, { ref: s, className: F(e, t), ...r })
    )
  );
Dm.displayName = "FormFloating";
const xc = h.forwardRef(({ controlId: e, as: t = "div", ...n }, r) => {
  const s = h.useMemo(() => ({ controlId: e }), [e]);
  return l.jsx(Wt.Provider, { value: s, children: l.jsx(t, { ...n, ref: r }) });
});
xc.displayName = "FormGroup";
const Fm = h.forwardRef(
  (
    {
      as: e = "label",
      bsPrefix: t,
      column: n = !1,
      visuallyHidden: r = !1,
      className: s,
      htmlFor: o,
      ...i
    },
    a
  ) => {
    const { controlId: u } = h.useContext(Wt);
    t = b(t, "form-label");
    let c = "col-form-label";
    typeof n == "string" && (c = `${c} ${c}-${n}`);
    const d = F(s, t, r && "visually-hidden", n && c);
    return (
      (o = o || u),
      n
        ? l.jsx(E, { ref: a, as: "label", className: d, htmlFor: o, ...i })
        : l.jsx(e, { ref: a, className: d, htmlFor: o, ...i })
    );
  }
);
Fm.displayName = "FormLabel";
const Am = h.forwardRef(({ bsPrefix: e, className: t, id: n, ...r }, s) => {
  const { controlId: o } = h.useContext(Wt);
  return (
    (e = b(e, "form-range")),
    l.jsx("input", {
      ...r,
      type: "range",
      ref: s,
      className: F(t, e),
      id: n || o,
    })
  );
});
Am.displayName = "FormRange";
const Mm = h.forwardRef(
  (
    {
      bsPrefix: e,
      size: t,
      htmlSize: n,
      className: r,
      isValid: s = !1,
      isInvalid: o = !1,
      id: i,
      ...a
    },
    u
  ) => {
    const { controlId: c } = h.useContext(Wt);
    return (
      (e = b(e, "form-select")),
      l.jsx("select", {
        ...a,
        size: n,
        ref: u,
        className: F(
          r,
          e,
          t && `${e}-${t}`,
          s && "is-valid",
          o && "is-invalid"
        ),
        id: i || c,
      })
    );
  }
);
Mm.displayName = "FormSelect";
const Um = h.forwardRef(
  ({ bsPrefix: e, className: t, as: n = "small", muted: r, ...s }, o) => (
    (e = b(e, "form-text")),
    l.jsx(n, { ...s, ref: o, className: F(t, e, r && "text-muted") })
  )
);
Um.displayName = "FormText";
const zm = h.forwardRef((e, t) => l.jsx(pi, { ...e, ref: t, type: "switch" }));
zm.displayName = "Switch";
const Sj = Object.assign(zm, { Input: pi.Input, Label: pi.Label }),
  bm = h.forwardRef(
    (
      { bsPrefix: e, className: t, children: n, controlId: r, label: s, ...o },
      i
    ) => (
      (e = b(e, "form-floating")),
      l.jsxs(xc, {
        ref: i,
        className: F(t, e),
        controlId: r,
        ...o,
        children: [n, l.jsx("label", { htmlFor: r, children: s })],
      })
    )
  );
bm.displayName = "FloatingLabel";
const Ej = { _ref: De.any, validated: De.bool, as: De.elementType },
  vc = h.forwardRef(({ className: e, validated: t, as: n = "form", ...r }, s) =>
    l.jsx(n, { ...r, ref: s, className: F(e, t && "was-validated") })
  );
vc.displayName = "Form";
vc.propTypes = Ej;
const _ = Object.assign(vc, {
    Group: xc,
    Control: wj,
    Floating: Dm,
    Check: pi,
    Switch: Sj,
    Label: Fm,
    Text: Um,
    Range: Am,
    Select: Mm,
    FloatingLabel: bm,
  }),
  uf = (e) =>
    !e || typeof e == "function"
      ? e
      : (t) => {
          e.current = t;
        };
function Nj(e, t) {
  const n = uf(e),
    r = uf(t);
  return (s) => {
    n && n(s), r && r(s);
  };
}
function qi(e, t) {
  return h.useMemo(() => Nj(e, t), [e, t]);
}
const Bm = h.createContext(null),
  Cj = ["as", "active", "eventKey"];
function kj(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function jc({ key: e, onClick: t, active: n, id: r, role: s, disabled: o }) {
  const i = h.useContext(di),
    a = h.useContext(mc),
    u = h.useContext(Bm);
  let c = n;
  const d = { role: s };
  if (a) {
    !s && a.role === "tablist" && (d.role = "tab");
    const f = a.getControllerId(e ?? null),
      p = a.getControlledId(e ?? null);
    (d[Qi("event-key")] = e),
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
    (d.onClick = $t((f) => {
      o ||
        (t == null || t(f),
        e != null && i && !f.isPropagationStopped() && i(e, f));
    })),
    [d, { isActive: c }]
  );
}
const Wm = h.forwardRef((e, t) => {
  let { as: n = Rm, active: r, eventKey: s } = e,
    o = kj(e, Cj);
  const [i, a] = jc(Object.assign({ key: Gi(s, o.href), active: r }, o));
  return (
    (i[Qi("active")] = a.isActive),
    l.jsx(n, Object.assign({}, o, i, { ref: t }))
  );
});
Wm.displayName = "NavItem";
const _j = Wm,
  Rj = ["as", "onSelect", "activeKey", "role", "onKeyDown"];
function Pj(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
const cf = () => {},
  df = Qi("event-key"),
  Hm = h.forwardRef((e, t) => {
    let { as: n = "div", onSelect: r, activeKey: s, role: o, onKeyDown: i } = e,
      a = Pj(e, Rj);
    const u = pj(),
      c = h.useRef(!1),
      d = h.useContext(di),
      f = h.useContext(Bm);
    let p, v;
    f &&
      ((o = o || "tablist"),
      (s = f.activeKey),
      (p = f.getControlledId),
      (v = f.getControllerId));
    const m = h.useRef(null),
      S = (y) => {
        const w = m.current;
        if (!w) return null;
        const C = Pn(w, `[${df}]:not([aria-disabled=true])`),
          k = w.querySelector("[aria-selected=true]");
        if (!k || k !== document.activeElement) return null;
        const R = C.indexOf(k);
        if (R === -1) return null;
        let T = R + y;
        return T >= C.length && (T = 0), T < 0 && (T = C.length - 1), C[T];
      },
      j = (y, w) => {
        y != null && (r == null || r(y, w), d == null || d(y, w));
      },
      x = (y) => {
        if ((i == null || i(y), !f)) return;
        let w;
        switch (y.key) {
          case "ArrowLeft":
          case "ArrowUp":
            w = S(-1);
            break;
          case "ArrowRight":
          case "ArrowDown":
            w = S(1);
            break;
          default:
            return;
        }
        w &&
          (y.preventDefault(),
          j(w.dataset[yj("EventKey")] || null, y),
          (c.current = !0),
          u());
      };
    h.useEffect(() => {
      if (m.current && c.current) {
        const y = m.current.querySelector(`[${df}][aria-selected=true]`);
        y == null || y.focus();
      }
      c.current = !1;
    });
    const g = qi(t, m);
    return l.jsx(di.Provider, {
      value: j,
      children: l.jsx(mc.Provider, {
        value: {
          role: o,
          activeKey: Gi(s),
          getControlledId: p || cf,
          getControllerId: v || cf,
        },
        children: l.jsx(
          n,
          Object.assign({}, a, { onKeyDown: x, ref: g, role: o })
        ),
      }),
    });
  });
Hm.displayName = "Nav";
const Vm = Object.assign(Hm, { Item: _j }),
  Km = h.forwardRef(
    (
      {
        bsPrefix: e,
        active: t,
        disabled: n,
        eventKey: r,
        className: s,
        variant: o,
        action: i,
        as: a,
        ...u
      },
      c
    ) => {
      e = b(e, "list-group-item");
      const [d, f] = jc({ key: Gi(r, u.href), active: t, ...u }),
        p = $r((m) => {
          if (n) {
            m.preventDefault(), m.stopPropagation();
            return;
          }
          d.onClick(m);
        });
      n &&
        u.tabIndex === void 0 &&
        ((u.tabIndex = -1), (u["aria-disabled"] = !0));
      const v = a || (i ? (u.href ? "a" : "button") : "div");
      return l.jsx(v, {
        ref: c,
        ...u,
        ...d,
        onClick: p,
        className: F(
          s,
          e,
          f.isActive && "active",
          n && "disabled",
          o && `${e}-${o}`,
          i && `${e}-action`
        ),
      });
    }
  );
Km.displayName = "ListGroupItem";
const Gm = h.forwardRef((e, t) => {
  const {
      className: n,
      bsPrefix: r,
      variant: s,
      horizontal: o,
      numbered: i,
      as: a = "div",
      ...u
    } = Bi(e, { activeKey: "onSelect" }),
    c = b(r, "list-group");
  let d;
  return (
    o && (d = o === !0 ? "horizontal" : `horizontal-${o}`),
    l.jsx(Vm, {
      ref: t,
      ...u,
      as: a,
      className: F(
        n,
        c,
        s && `${c}-${s}`,
        d && `${c}-${d}`,
        i && `${c}-numbered`
      ),
    })
  );
});
Gm.displayName = "ListGroup";
const z = Object.assign(Gm, { Item: Km });
function Ml(e) {
  e === void 0 && (e = cc());
  try {
    var t = e.activeElement;
    return !t || !t.nodeName ? null : t;
  } catch {
    return e.body;
  }
}
function Oj(e) {
  const t = h.useRef(e);
  return (t.current = e), t;
}
function Tj(e) {
  const t = Oj(e);
  h.useEffect(() => () => t.current(), []);
}
function Ij(e = document) {
  const t = e.defaultView;
  return Math.abs(t.innerWidth - e.documentElement.clientWidth);
}
const ff = Qi("modal-open");
class wc {
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
    return Ij(this.ownerDocument);
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
      s.setAttribute(ff, ""),
      Mt(s, n);
  }
  reset() {
    [...this.modals].forEach((t) => this.remove(t));
  }
  removeContainerStyle(t) {
    const n = this.getElement();
    n.removeAttribute(ff), Object.assign(n.style, t.style);
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
const Ul = (e, t) =>
  Hi
    ? e == null
      ? (t || cc()).body
      : (typeof e == "function" && (e = e()),
        e && "current" in e && (e = e.current),
        e && ("nodeType" in e || e.getBoundingClientRect) ? e : null)
    : null;
function Lj(e, t) {
  const n = yc(),
    [r, s] = h.useState(() => Ul(e, n == null ? void 0 : n.document));
  if (!r) {
    const o = Ul(e);
    o && s(o);
  }
  return (
    h.useEffect(() => {}, [t, r]),
    h.useEffect(() => {
      const o = Ul(e);
      o !== r && s(o);
    }, [e, r]),
    r
  );
}
function $j({
  children: e,
  in: t,
  onExited: n,
  mountOnEnter: r,
  unmountOnExit: s,
}) {
  const o = h.useRef(null),
    i = h.useRef(t),
    a = $t(n);
  h.useEffect(() => {
    t ? (i.current = !0) : a(o.current);
  }, [t, a]);
  const u = qi(o, e.ref),
    c = h.cloneElement(e, { ref: u });
  return t ? c : s || (!i.current && r) ? null : c;
}
const Dj = [
  "onEnter",
  "onEntering",
  "onEntered",
  "onExit",
  "onExiting",
  "onExited",
  "addEndListener",
  "children",
];
function Fj(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function Aj(e) {
  let {
      onEnter: t,
      onEntering: n,
      onEntered: r,
      onExit: s,
      onExiting: o,
      onExited: i,
      addEndListener: a,
      children: u,
    } = e,
    c = Fj(e, Dj);
  const d = h.useRef(null),
    f = qi(d, Wi(u)),
    p = (w) => (C) => {
      w && d.current && w(d.current, C);
    },
    v = h.useCallback(p(t), [t]),
    m = h.useCallback(p(n), [n]),
    S = h.useCallback(p(r), [r]),
    j = h.useCallback(p(s), [s]),
    x = h.useCallback(p(o), [o]),
    g = h.useCallback(p(i), [i]),
    y = h.useCallback(p(a), [a]);
  return Object.assign(
    {},
    c,
    { nodeRef: d },
    t && { onEnter: v },
    n && { onEntering: m },
    r && { onEntered: S },
    s && { onExit: j },
    o && { onExiting: x },
    i && { onExited: g },
    a && { addEndListener: y },
    {
      children:
        typeof u == "function"
          ? (w, C) => u(w, Object.assign({}, C, { ref: f }))
          : h.cloneElement(u, { ref: f }),
    }
  );
}
const Mj = ["component"];
function Uj(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
const zj = h.forwardRef((e, t) => {
  let { component: n } = e,
    r = Uj(e, Mj);
  const s = Aj(r);
  return l.jsx(n, Object.assign({ ref: t }, s));
});
function bj({ in: e, onTransition: t }) {
  const n = h.useRef(null),
    r = h.useRef(!0),
    s = $t(t);
  return (
    lf(() => {
      if (!n.current) return;
      let o = !1;
      return (
        s({ in: e, element: n.current, initial: r.current, isStale: () => o }),
        () => {
          o = !0;
        }
      );
    }, [e, s]),
    lf(
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
function Bj({ children: e, in: t, onExited: n, onEntered: r, transition: s }) {
  const [o, i] = h.useState(!t);
  t && o && i(!1);
  const a = bj({
      in: !!t,
      onTransition: (c) => {
        const d = () => {
          c.isStale() ||
            (c.in
              ? r == null || r(c.element, c.initial)
              : (i(!0), n == null || n(c.element)));
        };
        Promise.resolve(s(c)).then(d, (f) => {
          throw (c.in || i(!0), f);
        });
      },
    }),
    u = qi(a, e.ref);
  return o && !t ? null : h.cloneElement(e, { ref: u });
}
function pf(e, t, n) {
  return e
    ? l.jsx(zj, Object.assign({}, n, { component: e }))
    : t
    ? l.jsx(Bj, Object.assign({}, n, { transition: t }))
    : l.jsx($j, Object.assign({}, n));
}
const Wj = [
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
function Hj(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
let zl;
function Vj(e) {
  return (
    zl || (zl = new wc({ ownerDocument: e == null ? void 0 : e.document })), zl
  );
}
function Kj(e) {
  const t = yc(),
    n = e || Vj(t),
    r = h.useRef({ dialog: null, backdrop: null });
  return Object.assign(r.current, {
    add: () => n.add(r.current),
    remove: () => n.remove(r.current),
    isTopModal: () => n.isTopModal(r.current),
    setDialogRef: h.useCallback((s) => {
      r.current.dialog = s;
    }, []),
    setBackdropRef: h.useCallback((s) => {
      r.current.backdrop = s;
    }, []),
  });
}
const Qm = h.forwardRef((e, t) => {
  let {
      show: n = !1,
      role: r = "dialog",
      className: s,
      style: o,
      children: i,
      backdrop: a = !0,
      keyboard: u = !0,
      onBackdropClick: c,
      onEscapeKeyDown: d,
      transition: f,
      runTransition: p,
      backdropTransition: v,
      runBackdropTransition: m,
      autoFocus: S = !0,
      enforceFocus: j = !0,
      restoreFocus: x = !0,
      restoreFocusOptions: g,
      renderDialog: y,
      renderBackdrop: w = (ae) => l.jsx("div", Object.assign({}, ae)),
      manager: C,
      container: k,
      onShow: R,
      onHide: T = () => {},
      onExit: W,
      onExited: $,
      onExiting: fe,
      onEnter: Rt,
      onEntering: lt,
      onEntered: kn,
    } = e,
    Br = Hj(e, Wj);
  const Le = yc(),
    at = Lj(k),
    I = Kj(C),
    A = X1(),
    M = Y1(n),
    [q, te] = h.useState(!n),
    Ye = h.useRef(null);
  h.useImperativeHandle(t, () => I, [I]),
    Hi && !M && n && (Ye.current = Ml(Le == null ? void 0 : Le.document)),
    n && q && te(!1);
  const le = $t(() => {
      if (
        (I.add(),
        (ll.current = ui(document, "keydown", hg)),
        (il.current = ui(document, "focus", () => setTimeout(Pt), !0)),
        R && R(),
        S)
      ) {
        var ae, Ac;
        const ul = Ml(
          (ae = (Ac = I.dialog) == null ? void 0 : Ac.ownerDocument) != null
            ? ae
            : Le == null
            ? void 0
            : Le.document
        );
        I.dialog &&
          ul &&
          !af(I.dialog, ul) &&
          ((Ye.current = ul), I.dialog.focus());
      }
    }),
    ut = $t(() => {
      if (
        (I.remove(),
        ll.current == null || ll.current(),
        il.current == null || il.current(),
        x)
      ) {
        var ae;
        (ae = Ye.current) == null || ae.focus == null || ae.focus(g),
          (Ye.current = null);
      }
    });
  h.useEffect(() => {
    !n || !at || le();
  }, [n, at, le]),
    h.useEffect(() => {
      q && ut();
    }, [q, ut]),
    Tj(() => {
      ut();
    });
  const Pt = $t(() => {
      if (!j || !A() || !I.isTopModal()) return;
      const ae = Ml(Le == null ? void 0 : Le.document);
      I.dialog && ae && !af(I.dialog, ae) && I.dialog.focus();
    }),
    Xn = $t((ae) => {
      ae.target === ae.currentTarget && (c == null || c(ae), a === !0 && T());
    }),
    hg = $t((ae) => {
      u &&
        $1(ae) &&
        I.isTopModal() &&
        (d == null || d(ae), ae.defaultPrevented || T());
    }),
    il = h.useRef(),
    ll = h.useRef(),
    mg = (...ae) => {
      te(!0), $ == null || $(...ae);
    };
  if (!at) return null;
  const Fc = Object.assign(
    {
      role: r,
      ref: I.setDialogRef,
      "aria-modal": r === "dialog" ? !0 : void 0,
    },
    Br,
    { style: o, className: s, tabIndex: -1 }
  );
  let al = y
    ? y(Fc)
    : l.jsx(
        "div",
        Object.assign({}, Fc, {
          children: h.cloneElement(i, { role: "document" }),
        })
      );
  al = pf(f, p, {
    unmountOnExit: !0,
    mountOnEnter: !0,
    appear: !0,
    in: !!n,
    onExit: W,
    onExiting: fe,
    onExited: mg,
    onEnter: Rt,
    onEntering: lt,
    onEntered: kn,
    children: al,
  });
  let Zs = null;
  return (
    a &&
      ((Zs = w({ ref: I.setBackdropRef, onClick: Xn })),
      (Zs = pf(v, m, {
        in: !!n,
        appear: !0,
        mountOnEnter: !0,
        unmountOnExit: !0,
        children: Zs,
      }))),
    l.jsx(l.Fragment, {
      children: pr.createPortal(l.jsxs(l.Fragment, { children: [Zs, al] }), at),
    })
  );
});
Qm.displayName = "Modal";
const Gj = Object.assign(Qm, { Manager: wc });
function Qj(e, t) {
  return e.classList
    ? e.classList.contains(t)
    : (" " + (e.className.baseVal || e.className) + " ").indexOf(
        " " + t + " "
      ) !== -1;
}
function Jj(e, t) {
  e.classList
    ? e.classList.add(t)
    : Qj(e, t) ||
      (typeof e.className == "string"
        ? (e.className = e.className + " " + t)
        : e.setAttribute(
            "class",
            ((e.className && e.className.baseVal) || "") + " " + t
          ));
}
function hf(e, t) {
  return e
    .replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1")
    .replace(/\s+/g, " ")
    .replace(/^\s*|\s*$/g, "");
}
function qj(e, t) {
  e.classList
    ? e.classList.remove(t)
    : typeof e.className == "string"
    ? (e.className = hf(e.className, t))
    : e.setAttribute(
        "class",
        hf((e.className && e.className.baseVal) || "", t)
      );
}
const er = {
  FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
  STICKY_CONTENT: ".sticky-top",
  NAVBAR_TOGGLER: ".navbar-toggler",
};
class Jm extends wc {
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
    if ((Jj(n, "modal-open"), !t.scrollBarWidth)) return;
    const r = this.isRTL ? "paddingLeft" : "paddingRight",
      s = this.isRTL ? "marginLeft" : "marginRight";
    Pn(n, er.FIXED_CONTENT).forEach((o) =>
      this.adjustAndStore(r, o, t.scrollBarWidth)
    ),
      Pn(n, er.STICKY_CONTENT).forEach((o) =>
        this.adjustAndStore(s, o, -t.scrollBarWidth)
      ),
      Pn(n, er.NAVBAR_TOGGLER).forEach((o) =>
        this.adjustAndStore(s, o, t.scrollBarWidth)
      );
  }
  removeContainerStyle(t) {
    super.removeContainerStyle(t);
    const n = this.getElement();
    qj(n, "modal-open");
    const r = this.isRTL ? "paddingLeft" : "paddingRight",
      s = this.isRTL ? "marginLeft" : "marginRight";
    Pn(n, er.FIXED_CONTENT).forEach((o) => this.restore(r, o)),
      Pn(n, er.STICKY_CONTENT).forEach((o) => this.restore(s, o)),
      Pn(n, er.NAVBAR_TOGGLER).forEach((o) => this.restore(s, o));
  }
}
let bl;
function Xj(e) {
  return bl || (bl = new Jm(e)), bl;
}
const qm = h.createContext({ onHide() {} }),
  Yj = h.forwardRef(
    (
      {
        closeLabel: e = "Close",
        closeVariant: t,
        closeButton: n = !1,
        onHide: r,
        children: s,
        ...o
      },
      i
    ) => {
      const a = h.useContext(qm),
        u = $r(() => {
          a == null || a.onHide(), r == null || r();
        });
      return l.jsxs("div", {
        ref: i,
        ...o,
        children: [
          s,
          n && l.jsx(Ki, { "aria-label": e, variant: t, onClick: u }),
        ],
      });
    }
  ),
  Xm = h.forwardRef(
    ({ className: e, bsPrefix: t, as: n = "div", ...r }, s) => (
      (t = b(t, "nav-item")), l.jsx(n, { ref: s, className: F(e, t), ...r })
    )
  );
Xm.displayName = "NavItem";
const Ym = h.forwardRef(
  (
    {
      bsPrefix: e,
      className: t,
      as: n = Vi,
      active: r,
      eventKey: s,
      disabled: o = !1,
      ...i
    },
    a
  ) => {
    e = b(e, "nav-link");
    const [u, c] = jc({ key: Gi(s, i.href), active: r, disabled: o, ...i });
    return l.jsx(n, {
      ...i,
      ...u,
      ref: a,
      disabled: o,
      className: F(t, e, o && "disabled", c.isActive && "active"),
    });
  }
);
Ym.displayName = "NavLink";
const Zm = h.forwardRef((e, t) => {
  const {
      as: n = "div",
      bsPrefix: r,
      variant: s,
      fill: o = !1,
      justify: i = !1,
      navbar: a,
      navbarScroll: u,
      className: c,
      activeKey: d,
      ...f
    } = Bi(e, { activeKey: "onSelect" }),
    p = b(r, "nav");
  let v,
    m,
    S = !1;
  const j = h.useContext(Fr),
    x = h.useContext(Tm);
  return (
    j
      ? ((v = j.bsPrefix), (S = a ?? !0))
      : x && ({ cardHeaderBsPrefix: m } = x),
    l.jsx(Vm, {
      as: n,
      ref: t,
      activeKey: d,
      className: F(c, {
        [p]: !S,
        [`${v}-nav`]: S,
        [`${v}-nav-scroll`]: S && u,
        [`${m}-${s}`]: !!m,
        [`${p}-${s}`]: !!s,
        [`${p}-fill`]: o,
        [`${p}-justified`]: i,
      }),
      ...f,
    })
  );
});
Zm.displayName = "Nav";
const ey = Object.assign(Zm, { Item: Xm, Link: Ym }),
  ty = h.forwardRef(({ bsPrefix: e, className: t, as: n, ...r }, s) => {
    e = b(e, "navbar-brand");
    const o = n || (r.href ? "a" : "span");
    return l.jsx(o, { ...r, ref: s, className: F(t, e) });
  });
ty.displayName = "NavbarBrand";
const ny = h.forwardRef(({ children: e, bsPrefix: t, ...n }, r) => {
  t = b(t, "navbar-collapse");
  const s = h.useContext(Fr);
  return l.jsx(Q1, {
    in: !!(s && s.expanded),
    ...n,
    children: l.jsx("div", { ref: r, className: t, children: e }),
  });
});
ny.displayName = "NavbarCollapse";
const ry = h.forwardRef(
  (
    {
      bsPrefix: e,
      className: t,
      children: n,
      label: r = "Toggle navigation",
      as: s = "button",
      onClick: o,
      ...i
    },
    a
  ) => {
    e = b(e, "navbar-toggler");
    const { onToggle: u, expanded: c } = h.useContext(Fr) || {},
      d = $r((f) => {
        o && o(f), u && u();
      });
    return (
      s === "button" && (i.type = "button"),
      l.jsx(s, {
        ...i,
        ref: a,
        onClick: d,
        "aria-label": r,
        className: F(t, e, !c && "collapsed"),
        children: n || l.jsx("span", { className: `${e}-icon` }),
      })
    );
  }
);
ry.displayName = "NavbarToggle";
const Xa = new WeakMap(),
  mf = (e, t) => {
    if (!e || !t) return;
    const n = Xa.get(t) || new Map();
    Xa.set(t, n);
    let r = n.get(e);
    return r || ((r = t.matchMedia(e)), (r.refCount = 0), n.set(r.media, r)), r;
  };
function Zj(e, t = typeof window > "u" ? void 0 : window) {
  const n = mf(e, t),
    [r, s] = h.useState(() => (n ? n.matches : !1));
  return (
    vj(() => {
      let o = mf(e, t);
      if (!o) return s(!1);
      let i = Xa.get(t);
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
            o.refCount <= 0 && (i == null || i.delete(o.media)),
            (o = void 0);
        }
      );
    }, [e]),
    r
  );
}
function ew(e) {
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
  function i(a, u, c) {
    let d;
    typeof a == "object"
      ? ((d = a), (c = u), (u = !0))
      : ((u = u || !0), (d = { [a]: u }));
    let f = h.useMemo(
      () =>
        Object.entries(d).reduce(
          (p, [v, m]) => (
            (m === "up" || m === !0) && (p = n(p, o(v))),
            (m === "down" || m === !0) && (p = n(p, s(v))),
            p
          ),
          ""
        ),
      [JSON.stringify(d)]
    );
    return Zj(f, c);
  }
  return i;
}
const tw = ew({ xs: 0, sm: 576, md: 768, lg: 992, xl: 1200, xxl: 1400 }),
  sy = h.forwardRef(
    ({ className: e, bsPrefix: t, as: n = "div", ...r }, s) => (
      (t = b(t, "offcanvas-body")),
      l.jsx(n, { ref: s, className: F(e, t), ...r })
    )
  );
sy.displayName = "OffcanvasBody";
const nw = { [ht]: "show", [Lt]: "show" },
  oy = h.forwardRef(
    (
      {
        bsPrefix: e,
        className: t,
        children: n,
        in: r = !1,
        mountOnEnter: s = !1,
        unmountOnExit: o = !1,
        appear: i = !1,
        ...a
      },
      u
    ) => (
      (e = b(e, "offcanvas")),
      l.jsx(fc, {
        ref: u,
        addEndListener: dc,
        in: r,
        mountOnEnter: s,
        unmountOnExit: o,
        appear: i,
        ...a,
        childRef: Wi(n),
        children: (c, d) =>
          h.cloneElement(n, {
            ...d,
            className: F(
              t,
              n.props.className,
              (c === ht || c === $s) && `${e}-toggling`,
              nw[c]
            ),
          }),
      })
    )
  );
oy.displayName = "OffcanvasToggling";
const iy = h.forwardRef(
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
    (e = b(e, "offcanvas-header")),
    l.jsx(Yj, {
      ref: o,
      ...s,
      className: F(t, e),
      closeLabel: n,
      closeButton: r,
    })
  )
);
iy.displayName = "OffcanvasHeader";
const rw = Cm("h5"),
  ly = h.forwardRef(
    ({ className: e, bsPrefix: t, as: n = rw, ...r }, s) => (
      (t = b(t, "offcanvas-title")),
      l.jsx(n, { ref: s, className: F(e, t), ...r })
    )
  );
ly.displayName = "OffcanvasTitle";
function sw(e) {
  return l.jsx(oy, { ...e });
}
function ow(e) {
  return l.jsx(ci, { ...e });
}
const ay = h.forwardRef(
  (
    {
      bsPrefix: e,
      className: t,
      children: n,
      "aria-labelledby": r,
      placement: s = "start",
      responsive: o,
      show: i = !1,
      backdrop: a = !0,
      keyboard: u = !0,
      scroll: c = !1,
      onEscapeKeyDown: d,
      onShow: f,
      onHide: p,
      container: v,
      autoFocus: m = !0,
      enforceFocus: S = !0,
      restoreFocus: j = !0,
      restoreFocusOptions: x,
      onEntered: g,
      onExit: y,
      onExiting: w,
      onEnter: C,
      onEntering: k,
      onExited: R,
      backdropClassName: T,
      manager: W,
      renderStaticNode: $ = !1,
      ...fe
    },
    Rt
  ) => {
    const lt = h.useRef();
    e = b(e, "offcanvas");
    const [kn, Br] = h.useState(!1),
      Le = $r(p),
      at = tw(o || "xs", "up");
    h.useEffect(() => {
      Br(o ? i && !at : i);
    }, [i, o, at]);
    const I = h.useMemo(() => ({ onHide: Le }), [Le]);
    function A() {
      return (
        W ||
        (c
          ? (lt.current ||
              (lt.current = new Jm({ handleContainerOverflow: !1 })),
            lt.current)
          : Xj())
      );
    }
    const M = (le, ...ut) => {
        le && (le.style.visibility = "visible"), C == null || C(le, ...ut);
      },
      q = (le, ...ut) => {
        le && (le.style.visibility = ""), R == null || R(...ut);
      },
      te = h.useCallback(
        (le) => l.jsx("div", { ...le, className: F(`${e}-backdrop`, T) }),
        [T, e]
      ),
      Ye = (le) =>
        l.jsx("div", {
          ...le,
          ...fe,
          className: F(t, o ? `${e}-${o}` : e, `${e}-${s}`),
          "aria-labelledby": r,
          children: n,
        });
    return l.jsxs(l.Fragment, {
      children: [
        !kn && (o || $) && Ye({}),
        l.jsx(qm.Provider, {
          value: I,
          children: l.jsx(Gj, {
            show: kn,
            ref: Rt,
            backdrop: a,
            container: v,
            keyboard: u,
            autoFocus: m,
            enforceFocus: S && !c,
            restoreFocus: j,
            restoreFocusOptions: x,
            onEscapeKeyDown: d,
            onShow: f,
            onHide: Le,
            onEnter: M,
            onEntering: k,
            onEntered: g,
            onExit: y,
            onExiting: w,
            onExited: q,
            manager: A(),
            transition: sw,
            backdropTransition: ow,
            renderBackdrop: te,
            renderDialog: Ye,
          }),
        }),
      ],
    });
  }
);
ay.displayName = "Offcanvas";
const iw = Object.assign(ay, { Body: sy, Header: iy, Title: ly }),
  uy = h.forwardRef(({ onHide: e, ...t }, n) => {
    const r = h.useContext(Fr),
      s = $r(() => {
        r == null || r.onToggle == null || r.onToggle(), e == null || e();
      });
    return l.jsx(iw, {
      ref: n,
      show: !!(r != null && r.expanded),
      ...t,
      renderStaticNode: !0,
      onHide: s,
    });
  });
uy.displayName = "NavbarOffcanvas";
const cy = h.forwardRef(
  ({ className: e, bsPrefix: t, as: n = "span", ...r }, s) => (
    (t = b(t, "navbar-text")), l.jsx(n, { ref: s, className: F(e, t), ...r })
  )
);
cy.displayName = "NavbarText";
const dy = h.forwardRef((e, t) => {
  const {
      bsPrefix: n,
      expand: r = !0,
      variant: s = "light",
      bg: o,
      fixed: i,
      sticky: a,
      className: u,
      as: c = "nav",
      expanded: d,
      onToggle: f,
      onSelect: p,
      collapseOnSelect: v = !1,
      ...m
    } = Bi(e, { expanded: "onToggle" }),
    S = b(n, "navbar"),
    j = h.useCallback(
      (...y) => {
        p == null || p(...y), v && d && (f == null || f(!1));
      },
      [p, v, d, f]
    );
  m.role === void 0 && c !== "nav" && (m.role = "navigation");
  let x = `${S}-expand`;
  typeof r == "string" && (x = `${x}-${r}`);
  const g = h.useMemo(
    () => ({
      onToggle: () => (f == null ? void 0 : f(!d)),
      bsPrefix: S,
      expanded: !!d,
      expand: r,
    }),
    [S, d, r, f]
  );
  return l.jsx(Fr.Provider, {
    value: g,
    children: l.jsx(di.Provider, {
      value: j,
      children: l.jsx(c, {
        ref: t,
        ...m,
        className: F(
          u,
          S,
          r && x,
          s && `${S}-${s}`,
          o && `bg-${o}`,
          a && `sticky-${a}`,
          i && `fixed-${i}`
        ),
      }),
    }),
  });
});
dy.displayName = "Navbar";
const hi = Object.assign(dy, {
    Brand: ty,
    Collapse: ny,
    Offcanvas: uy,
    Text: cy,
    Toggle: ry,
  }),
  Sc = h.forwardRef(
    (
      {
        active: e = !1,
        disabled: t = !1,
        className: n,
        style: r,
        activeLabel: s = "(current)",
        children: o,
        linkStyle: i,
        linkClassName: a,
        as: u = Vi,
        ...c
      },
      d
    ) => {
      const f = e || t ? "span" : u;
      return l.jsx("li", {
        ref: d,
        style: r,
        className: F(n, "page-item", { active: e, disabled: t }),
        children: l.jsxs(f, {
          className: F("page-link", a),
          style: i,
          ...c,
          children: [
            o,
            e &&
              s &&
              l.jsx("span", { className: "visually-hidden", children: s }),
          ],
        }),
      });
    }
  );
Sc.displayName = "PageItem";
const lw = Sc;
function Gs(e, t, n = e) {
  const r = h.forwardRef(({ children: s, ...o }, i) =>
    l.jsxs(Sc, {
      ...o,
      ref: i,
      children: [
        l.jsx("span", { "aria-hidden": "true", children: s || t }),
        l.jsx("span", { className: "visually-hidden", children: n }),
      ],
    })
  );
  return (r.displayName = e), r;
}
const aw = Gs("First", "«"),
  uw = Gs("Prev", "‹", "Previous"),
  cw = Gs("Ellipsis", "…", "More"),
  dw = Gs("Next", "›"),
  fw = Gs("Last", "»"),
  fy = h.forwardRef(({ bsPrefix: e, className: t, size: n, ...r }, s) => {
    const o = b(e, "pagination");
    return l.jsx("ul", { ref: s, ...r, className: F(t, o, n && `${o}-${n}`) });
  });
fy.displayName = "Pagination";
const vo = Object.assign(fy, {
    First: aw,
    Prev: uw,
    Ellipsis: cw,
    Item: lw,
    Next: dw,
    Last: fw,
  }),
  O = h.forwardRef(({ bsPrefix: e, className: t, as: n = "div", ...r }, s) => {
    const o = b(e, "row"),
      i = xm(),
      a = vm(),
      u = `${o}-cols`,
      c = [];
    return (
      i.forEach((d) => {
        const f = r[d];
        delete r[d];
        let p;
        f != null && typeof f == "object" ? ({ cols: p } = f) : (p = f);
        const v = d !== a ? `-${d}` : "";
        p != null && c.push(`${u}${v}-${p}`);
      }),
      l.jsx(n, { ref: s, ...r, className: F(t, o, ...c) })
    );
  });
O.displayName = "Row";
const py = h.forwardRef(
  (
    {
      bsPrefix: e,
      variant: t,
      animation: n = "border",
      size: r,
      as: s = "div",
      className: o,
      ...i
    },
    a
  ) => {
    e = b(e, "spinner");
    const u = `${e}-${n}`;
    return l.jsx(s, {
      ref: a,
      ...i,
      className: F(o, u, r && `${u}-${r}`, t && `text-${t}`),
    });
  }
);
py.displayName = "Spinner";
const xn = h.forwardRef(
  (
    {
      bsPrefix: e,
      className: t,
      striped: n,
      bordered: r,
      borderless: s,
      hover: o,
      size: i,
      variant: a,
      responsive: u,
      ...c
    },
    d
  ) => {
    const f = b(e, "table"),
      p = F(
        t,
        f,
        a && `${f}-${a}`,
        i && `${f}-${i}`,
        n && `${f}-${typeof n == "string" ? `striped-${n}` : "striped"}`,
        r && `${f}-bordered`,
        s && `${f}-borderless`,
        o && `${f}-hover`
      ),
      v = l.jsx("table", { ...c, className: p, ref: d });
    if (u) {
      let m = `${f}-responsive`;
      return (
        typeof u == "string" && (m = `${m}-${u}`),
        l.jsx("div", { className: m, children: v })
      );
    }
    return v;
  }
);
function je(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var pw = (typeof Symbol == "function" && Symbol.observable) || "@@observable",
  yf = pw,
  Bl = () => Math.random().toString(36).substring(7).split("").join("."),
  hw = {
    INIT: `@@redux/INIT${Bl()}`,
    REPLACE: `@@redux/REPLACE${Bl()}`,
    PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${Bl()}`,
  },
  mi = hw;
function Ec(e) {
  if (typeof e != "object" || e === null) return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; ) t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function hy(e, t, n) {
  if (typeof e != "function") throw new Error(je(2));
  if (
    (typeof t == "function" && typeof n == "function") ||
    (typeof n == "function" && typeof arguments[3] == "function")
  )
    throw new Error(je(0));
  if (
    (typeof t == "function" && typeof n > "u" && ((n = t), (t = void 0)),
    typeof n < "u")
  ) {
    if (typeof n != "function") throw new Error(je(1));
    return n(hy)(e, t);
  }
  let r = e,
    s = t,
    o = new Map(),
    i = o,
    a = 0,
    u = !1;
  function c() {
    i === o &&
      ((i = new Map()),
      o.forEach((j, x) => {
        i.set(x, j);
      }));
  }
  function d() {
    if (u) throw new Error(je(3));
    return s;
  }
  function f(j) {
    if (typeof j != "function") throw new Error(je(4));
    if (u) throw new Error(je(5));
    let x = !0;
    c();
    const g = a++;
    return (
      i.set(g, j),
      function () {
        if (x) {
          if (u) throw new Error(je(6));
          (x = !1), c(), i.delete(g), (o = null);
        }
      }
    );
  }
  function p(j) {
    if (!Ec(j)) throw new Error(je(7));
    if (typeof j.type > "u") throw new Error(je(8));
    if (typeof j.type != "string") throw new Error(je(17));
    if (u) throw new Error(je(9));
    try {
      (u = !0), (s = r(s, j));
    } finally {
      u = !1;
    }
    return (
      (o = i).forEach((g) => {
        g();
      }),
      j
    );
  }
  function v(j) {
    if (typeof j != "function") throw new Error(je(10));
    (r = j), p({ type: mi.REPLACE });
  }
  function m() {
    const j = f;
    return {
      subscribe(x) {
        if (typeof x != "object" || x === null) throw new Error(je(11));
        function g() {
          const w = x;
          w.next && w.next(d());
        }
        return g(), { unsubscribe: j(g) };
      },
      [yf]() {
        return this;
      },
    };
  }
  return (
    p({ type: mi.INIT }),
    { dispatch: p, subscribe: f, getState: d, replaceReducer: v, [yf]: m }
  );
}
function mw(e) {
  Object.keys(e).forEach((t) => {
    const n = e[t];
    if (typeof n(void 0, { type: mi.INIT }) > "u") throw new Error(je(12));
    if (typeof n(void 0, { type: mi.PROBE_UNKNOWN_ACTION() }) > "u")
      throw new Error(je(13));
  });
}
function yw(e) {
  const t = Object.keys(e),
    n = {};
  for (let o = 0; o < t.length; o++) {
    const i = t[o];
    typeof e[i] == "function" && (n[i] = e[i]);
  }
  const r = Object.keys(n);
  let s;
  try {
    mw(n);
  } catch (o) {
    s = o;
  }
  return function (i = {}, a) {
    if (s) throw s;
    let u = !1;
    const c = {};
    for (let d = 0; d < r.length; d++) {
      const f = r[d],
        p = n[f],
        v = i[f],
        m = p(v, a);
      if (typeof m > "u") throw (a && a.type, new Error(je(14)));
      (c[f] = m), (u = u || m !== v);
    }
    return (u = u || r.length !== Object.keys(i).length), u ? c : i;
  };
}
function yi(...e) {
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
function gw(...e) {
  return (t) => (n, r) => {
    const s = t(n, r);
    let o = () => {
      throw new Error(je(15));
    };
    const i = { getState: s.getState, dispatch: (u, ...c) => o(u, ...c) },
      a = e.map((u) => u(i));
    return (o = yi(...a)(s.dispatch)), { ...s, dispatch: o };
  };
}
function xw(e) {
  return Ec(e) && "type" in e && typeof e.type == "string";
}
var my = Symbol.for("immer-nothing"),
  gf = Symbol.for("immer-draftable"),
  Qe = Symbol.for("immer-state");
function mt(e, ...t) {
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var Rr = Object.getPrototypeOf;
function Wn(e) {
  return !!e && !!e[Qe];
}
function Ht(e) {
  var t;
  return e
    ? yy(e) ||
        Array.isArray(e) ||
        !!e[gf] ||
        !!((t = e.constructor) != null && t[gf]) ||
        Yi(e) ||
        Zi(e)
    : !1;
}
var vw = Object.prototype.constructor.toString();
function yy(e) {
  if (!e || typeof e != "object") return !1;
  const t = Rr(e);
  if (t === null) return !0;
  const n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return n === Object
    ? !0
    : typeof n == "function" && Function.toString.call(n) === vw;
}
function gi(e, t) {
  Xi(e) === 0
    ? Reflect.ownKeys(e).forEach((n) => {
        t(n, e[n], e);
      })
    : e.forEach((n, r) => t(r, n, e));
}
function Xi(e) {
  const t = e[Qe];
  return t ? t.type_ : Array.isArray(e) ? 1 : Yi(e) ? 2 : Zi(e) ? 3 : 0;
}
function Ya(e, t) {
  return Xi(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function gy(e, t, n) {
  const r = Xi(e);
  r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : (e[t] = n);
}
function jw(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Yi(e) {
  return e instanceof Map;
}
function Zi(e) {
  return e instanceof Set;
}
function On(e) {
  return e.copy_ || e.base_;
}
function Za(e, t) {
  if (Yi(e)) return new Map(e);
  if (Zi(e)) return new Set(e);
  if (Array.isArray(e)) return Array.prototype.slice.call(e);
  const n = yy(e);
  if (t === !0 || (t === "class_only" && !n)) {
    const r = Object.getOwnPropertyDescriptors(e);
    delete r[Qe];
    let s = Reflect.ownKeys(r);
    for (let o = 0; o < s.length; o++) {
      const i = s[o],
        a = r[i];
      a.writable === !1 && ((a.writable = !0), (a.configurable = !0)),
        (a.get || a.set) &&
          (r[i] = {
            configurable: !0,
            writable: !0,
            enumerable: a.enumerable,
            value: e[i],
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
function Nc(e, t = !1) {
  return (
    el(e) ||
      Wn(e) ||
      !Ht(e) ||
      (Xi(e) > 1 && (e.set = e.add = e.clear = e.delete = ww),
      Object.freeze(e),
      t && Object.entries(e).forEach(([n, r]) => Nc(r, !0))),
    e
  );
}
function ww() {
  mt(2);
}
function el(e) {
  return Object.isFrozen(e);
}
var Sw = {};
function Hn(e) {
  const t = Sw[e];
  return t || mt(0, e), t;
}
var Ds;
function xy() {
  return Ds;
}
function Ew(e, t) {
  return {
    drafts_: [],
    parent_: e,
    immer_: t,
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0,
  };
}
function xf(e, t) {
  t &&
    (Hn("Patches"),
    (e.patches_ = []),
    (e.inversePatches_ = []),
    (e.patchListener_ = t));
}
function eu(e) {
  tu(e), e.drafts_.forEach(Nw), (e.drafts_ = null);
}
function tu(e) {
  e === Ds && (Ds = e.parent_);
}
function vf(e) {
  return (Ds = Ew(Ds, e));
}
function Nw(e) {
  const t = e[Qe];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : (t.revoked_ = !0);
}
function jf(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const n = t.drafts_[0];
  return (
    e !== void 0 && e !== n
      ? (n[Qe].modified_ && (eu(t), mt(4)),
        Ht(e) && ((e = xi(t, e)), t.parent_ || vi(t, e)),
        t.patches_ &&
          Hn("Patches").generateReplacementPatches_(
            n[Qe].base_,
            e,
            t.patches_,
            t.inversePatches_
          ))
      : (e = xi(t, n, [])),
    eu(t),
    t.patches_ && t.patchListener_(t.patches_, t.inversePatches_),
    e !== my ? e : void 0
  );
}
function xi(e, t, n) {
  if (el(t)) return t;
  const r = t[Qe];
  if (!r) return gi(t, (s, o) => wf(e, r, t, s, o, n)), t;
  if (r.scope_ !== e) return t;
  if (!r.modified_) return vi(e, r.base_, !0), r.base_;
  if (!r.finalized_) {
    (r.finalized_ = !0), r.scope_.unfinalizedDrafts_--;
    const s = r.copy_;
    let o = s,
      i = !1;
    r.type_ === 3 && ((o = new Set(s)), s.clear(), (i = !0)),
      gi(o, (a, u) => wf(e, r, s, a, u, n, i)),
      vi(e, s, !1),
      n &&
        e.patches_ &&
        Hn("Patches").generatePatches_(r, n, e.patches_, e.inversePatches_);
  }
  return r.copy_;
}
function wf(e, t, n, r, s, o, i) {
  if (Wn(s)) {
    const a =
        o && t && t.type_ !== 3 && !Ya(t.assigned_, r) ? o.concat(r) : void 0,
      u = xi(e, s, a);
    if ((gy(n, r, u), Wn(u))) e.canAutoFreeze_ = !1;
    else return;
  } else i && n.add(s);
  if (Ht(s) && !el(s)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1) return;
    xi(e, s),
      (!t || !t.scope_.parent_) &&
        typeof r != "symbol" &&
        Object.prototype.propertyIsEnumerable.call(n, r) &&
        vi(e, s);
  }
}
function vi(e, t, n = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && Nc(t, n);
}
function Cw(e, t) {
  const n = Array.isArray(e),
    r = {
      type_: n ? 1 : 0,
      scope_: t ? t.scope_ : xy(),
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
    o = Cc;
  n && ((s = [r]), (o = Fs));
  const { revoke: i, proxy: a } = Proxy.revocable(s, o);
  return (r.draft_ = a), (r.revoke_ = i), a;
}
var Cc = {
    get(e, t) {
      if (t === Qe) return e;
      const n = On(e);
      if (!Ya(n, t)) return kw(e, n, t);
      const r = n[t];
      return e.finalized_ || !Ht(r)
        ? r
        : r === Wl(e.base_, t)
        ? (Hl(e), (e.copy_[t] = ru(r, e)))
        : r;
    },
    has(e, t) {
      return t in On(e);
    },
    ownKeys(e) {
      return Reflect.ownKeys(On(e));
    },
    set(e, t, n) {
      const r = vy(On(e), t);
      if (r != null && r.set) return r.set.call(e.draft_, n), !0;
      if (!e.modified_) {
        const s = Wl(On(e), t),
          o = s == null ? void 0 : s[Qe];
        if (o && o.base_ === n)
          return (e.copy_[t] = n), (e.assigned_[t] = !1), !0;
        if (jw(n, s) && (n !== void 0 || Ya(e.base_, t))) return !0;
        Hl(e), nu(e);
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
        Wl(e.base_, t) !== void 0 || t in e.base_
          ? ((e.assigned_[t] = !1), Hl(e), nu(e))
          : delete e.assigned_[t],
        e.copy_ && delete e.copy_[t],
        !0
      );
    },
    getOwnPropertyDescriptor(e, t) {
      const n = On(e),
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
      mt(11);
    },
    getPrototypeOf(e) {
      return Rr(e.base_);
    },
    setPrototypeOf() {
      mt(12);
    },
  },
  Fs = {};
gi(Cc, (e, t) => {
  Fs[e] = function () {
    return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
  };
});
Fs.deleteProperty = function (e, t) {
  return Fs.set.call(this, e, t, void 0);
};
Fs.set = function (e, t, n) {
  return Cc.set.call(this, e[0], t, n, e[0]);
};
function Wl(e, t) {
  const n = e[Qe];
  return (n ? On(n) : e)[t];
}
function kw(e, t, n) {
  var s;
  const r = vy(t, n);
  return r
    ? "value" in r
      ? r.value
      : (s = r.get) == null
      ? void 0
      : s.call(e.draft_)
    : void 0;
}
function vy(e, t) {
  if (!(t in e)) return;
  let n = Rr(e);
  for (; n; ) {
    const r = Object.getOwnPropertyDescriptor(n, t);
    if (r) return r;
    n = Rr(n);
  }
}
function nu(e) {
  e.modified_ || ((e.modified_ = !0), e.parent_ && nu(e.parent_));
}
function Hl(e) {
  e.copy_ || (e.copy_ = Za(e.base_, e.scope_.immer_.useStrictShallowCopy_));
}
var _w = class {
  constructor(e) {
    (this.autoFreeze_ = !0),
      (this.useStrictShallowCopy_ = !1),
      (this.produce = (t, n, r) => {
        if (typeof t == "function" && typeof n != "function") {
          const o = n;
          n = t;
          const i = this;
          return function (u = o, ...c) {
            return i.produce(u, (d) => n.call(this, d, ...c));
          };
        }
        typeof n != "function" && mt(6),
          r !== void 0 && typeof r != "function" && mt(7);
        let s;
        if (Ht(t)) {
          const o = vf(this),
            i = ru(t, void 0);
          let a = !0;
          try {
            (s = n(i)), (a = !1);
          } finally {
            a ? eu(o) : tu(o);
          }
          return xf(o, r), jf(s, o);
        } else if (!t || typeof t != "object") {
          if (
            ((s = n(t)),
            s === void 0 && (s = t),
            s === my && (s = void 0),
            this.autoFreeze_ && Nc(s, !0),
            r)
          ) {
            const o = [],
              i = [];
            Hn("Patches").generateReplacementPatches_(t, s, o, i), r(o, i);
          }
          return s;
        } else mt(1, t);
      }),
      (this.produceWithPatches = (t, n) => {
        if (typeof t == "function")
          return (i, ...a) => this.produceWithPatches(i, (u) => t(u, ...a));
        let r, s;
        return [
          this.produce(t, n, (i, a) => {
            (r = i), (s = a);
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
    Ht(e) || mt(8), Wn(e) && (e = Rw(e));
    const t = vf(this),
      n = ru(e, void 0);
    return (n[Qe].isManual_ = !0), tu(t), n;
  }
  finishDraft(e, t) {
    const n = e && e[Qe];
    (!n || !n.isManual_) && mt(9);
    const { scope_: r } = n;
    return xf(r, t), jf(void 0, r);
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
    const r = Hn("Patches").applyPatches_;
    return Wn(e) ? r(e, t) : this.produce(e, (s) => r(s, t));
  }
};
function ru(e, t) {
  const n = Yi(e)
    ? Hn("MapSet").proxyMap_(e, t)
    : Zi(e)
    ? Hn("MapSet").proxySet_(e, t)
    : Cw(e, t);
  return (t ? t.scope_ : xy()).drafts_.push(n), n;
}
function Rw(e) {
  return Wn(e) || mt(10, e), jy(e);
}
function jy(e) {
  if (!Ht(e) || el(e)) return e;
  const t = e[Qe];
  let n;
  if (t) {
    if (!t.modified_) return t.base_;
    (t.finalized_ = !0), (n = Za(e, t.scope_.immer_.useStrictShallowCopy_));
  } else n = Za(e, !0);
  return (
    gi(n, (r, s) => {
      gy(n, r, jy(s));
    }),
    t && (t.finalized_ = !1),
    n
  );
}
var Je = new _w(),
  wy = Je.produce;
Je.produceWithPatches.bind(Je);
Je.setAutoFreeze.bind(Je);
Je.setUseStrictShallowCopy.bind(Je);
Je.applyPatches.bind(Je);
Je.createDraft.bind(Je);
Je.finishDraft.bind(Je);
function Sy(e) {
  return ({ dispatch: n, getState: r }) =>
    (s) =>
    (o) =>
      typeof o == "function" ? o(n, r, e) : s(o);
}
var Pw = Sy(),
  Ow = Sy,
  Tw =
    typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (arguments.length !== 0)
            return typeof arguments[0] == "object"
              ? yi
              : yi.apply(null, arguments);
        };
function Sf(e, t) {
  function n(...r) {
    if (t) {
      let s = t(...r);
      if (!s) throw new Error(xt(0));
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
    (n.match = (r) => xw(r) && r.type === e),
    n
  );
}
var Ey = class os extends Array {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, os.prototype);
  }
  static get [Symbol.species]() {
    return os;
  }
  concat(...t) {
    return super.concat.apply(this, t);
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0])
      ? new os(...t[0].concat(this))
      : new os(...t.concat(this));
  }
};
function Ef(e) {
  return Ht(e) ? wy(e, () => {}) : e;
}
function Nf(e, t, n) {
  if (e.has(t)) {
    let s = e.get(t);
    return n.update && ((s = n.update(s, t, e)), e.set(t, s)), s;
  }
  if (!n.insert) throw new Error(xt(10));
  const r = n.insert(t, e);
  return e.set(t, r), r;
}
function Iw(e) {
  return typeof e == "boolean";
}
var Lw = () =>
    function (t) {
      const {
        thunk: n = !0,
        immutableCheck: r = !0,
        serializableCheck: s = !0,
        actionCreatorCheck: o = !0,
      } = t ?? {};
      let i = new Ey();
      return n && (Iw(n) ? i.push(Pw) : i.push(Ow(n.extraArgument))), i;
    },
  $w = "RTK_autoBatch",
  Ny = (e) => (t) => {
    setTimeout(t, e);
  },
  Dw =
    typeof window < "u" && window.requestAnimationFrame
      ? window.requestAnimationFrame
      : Ny(10),
  Fw =
    (e = { type: "raf" }) =>
    (t) =>
    (...n) => {
      const r = t(...n);
      let s = !0,
        o = !1,
        i = !1;
      const a = new Set(),
        u =
          e.type === "tick"
            ? queueMicrotask
            : e.type === "raf"
            ? Dw
            : e.type === "callback"
            ? e.queueNotification
            : Ny(e.timeout),
        c = () => {
          (i = !1), o && ((o = !1), a.forEach((d) => d()));
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
              (s = !((f = d == null ? void 0 : d.meta) != null && f[$w])),
              (o = !s),
              o && (i || ((i = !0), u(c))),
              r.dispatch(d)
            );
          } finally {
            s = !0;
          }
        },
      });
    },
  Aw = (e) =>
    function (n) {
      const { autoBatch: r = !0 } = n ?? {};
      let s = new Ey(e);
      return r && s.push(Fw(typeof r == "object" ? r : void 0)), s;
    };
function Mw(e) {
  const t = Lw(),
    {
      reducer: n = void 0,
      middleware: r,
      devTools: s = !0,
      preloadedState: o = void 0,
      enhancers: i = void 0,
    } = e || {};
  let a;
  if (typeof n == "function") a = n;
  else if (Ec(n)) a = yw(n);
  else throw new Error(xt(1));
  let u;
  typeof r == "function" ? (u = r(t)) : (u = t());
  let c = yi;
  s && (c = Tw({ trace: !1, ...(typeof s == "object" && s) }));
  const d = gw(...u),
    f = Aw(d);
  let p = typeof i == "function" ? i(f) : f();
  const v = c(...p);
  return hy(a, o, v);
}
function Cy(e) {
  const t = {},
    n = [];
  let r;
  const s = {
    addCase(o, i) {
      const a = typeof o == "string" ? o : o.type;
      if (!a) throw new Error(xt(28));
      if (a in t) throw new Error(xt(29));
      return (t[a] = i), s;
    },
    addMatcher(o, i) {
      return n.push({ matcher: o, reducer: i }), s;
    },
    addDefaultCase(o) {
      return (r = o), s;
    },
  };
  return e(s), [t, n, r];
}
function Uw(e) {
  return typeof e == "function";
}
function zw(e, t) {
  let [n, r, s] = Cy(t),
    o;
  if (Uw(e)) o = () => Ef(e());
  else {
    const a = Ef(e);
    o = () => a;
  }
  function i(a = o(), u) {
    let c = [
      n[u.type],
      ...r.filter(({ matcher: d }) => d(u)).map(({ reducer: d }) => d),
    ];
    return (
      c.filter((d) => !!d).length === 0 && (c = [s]),
      c.reduce((d, f) => {
        if (f)
          if (Wn(d)) {
            const v = f(d, u);
            return v === void 0 ? d : v;
          } else {
            if (Ht(d)) return wy(d, (p) => f(p, u));
            {
              const p = f(d, u);
              if (p === void 0) {
                if (d === null) return d;
                throw new Error(xt(9));
              }
              return p;
            }
          }
        return d;
      }, a)
    );
  }
  return (i.getInitialState = o), i;
}
var bw = Symbol.for("rtk-slice-createasyncthunk");
function Bw(e, t) {
  return `${e}/${t}`;
}
function Ww({ creators: e } = {}) {
  var n;
  const t = (n = e == null ? void 0 : e.asyncThunk) == null ? void 0 : n[bw];
  return function (s) {
    const { name: o, reducerPath: i = o } = s;
    if (!o) throw new Error(xt(11));
    typeof process < "u";
    const a =
        (typeof s.reducers == "function" ? s.reducers(Vw()) : s.reducers) || {},
      u = Object.keys(a),
      c = {
        sliceCaseReducersByName: {},
        sliceCaseReducersByType: {},
        actionCreators: {},
        sliceMatchers: [],
      },
      d = {
        addCase(y, w) {
          const C = typeof y == "string" ? y : y.type;
          if (!C) throw new Error(xt(12));
          if (C in c.sliceCaseReducersByType) throw new Error(xt(13));
          return (c.sliceCaseReducersByType[C] = w), d;
        },
        addMatcher(y, w) {
          return c.sliceMatchers.push({ matcher: y, reducer: w }), d;
        },
        exposeAction(y, w) {
          return (c.actionCreators[y] = w), d;
        },
        exposeCaseReducer(y, w) {
          return (c.sliceCaseReducersByName[y] = w), d;
        },
      };
    u.forEach((y) => {
      const w = a[y],
        C = {
          reducerName: y,
          type: Bw(o, y),
          createNotation: typeof s.reducers == "function",
        };
      Gw(w) ? Jw(C, w, d, t) : Kw(C, w, d);
    });
    function f() {
      const [y = {}, w = [], C = void 0] =
          typeof s.extraReducers == "function"
            ? Cy(s.extraReducers)
            : [s.extraReducers],
        k = { ...y, ...c.sliceCaseReducersByType };
      return zw(s.initialState, (R) => {
        for (let T in k) R.addCase(T, k[T]);
        for (let T of c.sliceMatchers) R.addMatcher(T.matcher, T.reducer);
        for (let T of w) R.addMatcher(T.matcher, T.reducer);
        C && R.addDefaultCase(C);
      });
    }
    const p = (y) => y,
      v = new Map();
    let m;
    function S(y, w) {
      return m || (m = f()), m(y, w);
    }
    function j() {
      return m || (m = f()), m.getInitialState();
    }
    function x(y, w = !1) {
      function C(R) {
        let T = R[y];
        return typeof T > "u" && w && (T = j()), T;
      }
      function k(R = p) {
        const T = Nf(v, w, { insert: () => new WeakMap() });
        return Nf(T, R, {
          insert: () => {
            const W = {};
            for (const [$, fe] of Object.entries(s.selectors ?? {}))
              W[$] = Hw(fe, R, j, w);
            return W;
          },
        });
      }
      return {
        reducerPath: y,
        getSelectors: k,
        get selectors() {
          return k(C);
        },
        selectSlice: C,
      };
    }
    const g = {
      name: o,
      reducer: S,
      actions: c.actionCreators,
      caseReducers: c.sliceCaseReducersByName,
      getInitialState: j,
      ...x(i),
      injectInto(y, { reducerPath: w, ...C } = {}) {
        const k = w ?? i;
        return (
          y.inject({ reducerPath: k, reducer: S }, C), { ...g, ...x(k, !0) }
        );
      },
    };
    return g;
  };
}
function Hw(e, t, n, r) {
  function s(o, ...i) {
    let a = t(o);
    return typeof a > "u" && r && (a = n()), e(a, ...i);
  }
  return (s.unwrapped = e), s;
}
var Ar = Ww();
function Vw() {
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
function Kw({ type: e, reducerName: t, createNotation: n }, r, s) {
  let o, i;
  if ("reducer" in r) {
    if (n && !Qw(r)) throw new Error(xt(17));
    (o = r.reducer), (i = r.prepare);
  } else o = r;
  s.addCase(e, o)
    .exposeCaseReducer(t, o)
    .exposeAction(t, i ? Sf(e, i) : Sf(e));
}
function Gw(e) {
  return e._reducerDefinitionType === "asyncThunk";
}
function Qw(e) {
  return e._reducerDefinitionType === "reducerWithPrepare";
}
function Jw({ type: e, reducerName: t }, n, r, s) {
  if (!s) throw new Error(xt(18));
  const {
      payloadCreator: o,
      fulfilled: i,
      pending: a,
      rejected: u,
      settled: c,
      options: d,
    } = n,
    f = s(e, o, d);
  r.exposeAction(t, f),
    i && r.addCase(f.fulfilled, i),
    a && r.addCase(f.pending, a),
    u && r.addCase(f.rejected, u),
    c && r.addMatcher(f.settled, c),
    r.exposeCaseReducer(t, {
      fulfilled: i || jo,
      pending: a || jo,
      rejected: u || jo,
      settled: c || jo,
    });
}
function jo() {}
function xt(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
const ky = Ar({
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
    Initial: Vn,
    Loading: Mr,
    ListProduct: _y,
    GetProduct: qw,
    Delete: Xw,
    Success: kc,
    Error: Jn,
  } = ky.actions,
  Yw = ky.reducer;
function Ry(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: Zw } = Object.prototype,
  { getPrototypeOf: _c } = Object,
  tl = ((e) => (t) => {
    const n = Zw.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  wt = (e) => ((e = e.toLowerCase()), (t) => tl(t) === e),
  nl = (e) => (t) => typeof t === e,
  { isArray: Ur } = Array,
  As = nl("undefined");
function eS(e) {
  return (
    e !== null &&
    !As(e) &&
    e.constructor !== null &&
    !As(e.constructor) &&
    Ke(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const Py = wt("ArrayBuffer");
function tS(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && Py(e.buffer)),
    t
  );
}
const nS = nl("string"),
  Ke = nl("function"),
  Oy = nl("number"),
  rl = (e) => e !== null && typeof e == "object",
  rS = (e) => e === !0 || e === !1,
  Lo = (e) => {
    if (tl(e) !== "object") return !1;
    const t = _c(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  sS = wt("Date"),
  oS = wt("File"),
  iS = wt("Blob"),
  lS = wt("FileList"),
  aS = (e) => rl(e) && Ke(e.pipe),
  uS = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (Ke(e.append) &&
          ((t = tl(e)) === "formdata" ||
            (t === "object" &&
              Ke(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  cS = wt("URLSearchParams"),
  [dS, fS, pS, hS] = ["ReadableStream", "Request", "Response", "Headers"].map(
    wt
  ),
  mS = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Qs(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let r, s;
  if ((typeof e != "object" && (e = [e]), Ur(e)))
    for (r = 0, s = e.length; r < s; r++) t.call(null, e[r], r, e);
  else {
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      i = o.length;
    let a;
    for (r = 0; r < i; r++) (a = o[r]), t.call(null, e[a], a, e);
  }
}
function Ty(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    s;
  for (; r-- > 0; ) if (((s = n[r]), t === s.toLowerCase())) return s;
  return null;
}
const $n =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global,
  Iy = (e) => !As(e) && e !== $n;
function su() {
  const { caseless: e } = (Iy(this) && this) || {},
    t = {},
    n = (r, s) => {
      const o = (e && Ty(t, s)) || s;
      Lo(t[o]) && Lo(r)
        ? (t[o] = su(t[o], r))
        : Lo(r)
        ? (t[o] = su({}, r))
        : Ur(r)
        ? (t[o] = r.slice())
        : (t[o] = r);
    };
  for (let r = 0, s = arguments.length; r < s; r++)
    arguments[r] && Qs(arguments[r], n);
  return t;
}
const yS = (e, t, n, { allOwnKeys: r } = {}) => (
    Qs(
      t,
      (s, o) => {
        n && Ke(s) ? (e[o] = Ry(s, n)) : (e[o] = s);
      },
      { allOwnKeys: r }
    ),
    e
  ),
  gS = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  xS = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  vS = (e, t, n, r) => {
    let s, o, i;
    const a = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (s = Object.getOwnPropertyNames(e), o = s.length; o-- > 0; )
        (i = s[o]), (!r || r(i, e, t)) && !a[i] && ((t[i] = e[i]), (a[i] = !0));
      e = n !== !1 && _c(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  jS = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  wS = (e) => {
    if (!e) return null;
    if (Ur(e)) return e;
    let t = e.length;
    if (!Oy(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  SS = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && _c(Uint8Array)),
  ES = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let s;
    for (; (s = r.next()) && !s.done; ) {
      const o = s.value;
      t.call(e, o[0], o[1]);
    }
  },
  NS = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  CS = wt("HTMLFormElement"),
  kS = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, s) {
      return r.toUpperCase() + s;
    }),
  Cf = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  _S = wt("RegExp"),
  Ly = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    Qs(n, (s, o) => {
      let i;
      (i = t(s, o, e)) !== !1 && (r[o] = i || s);
    }),
      Object.defineProperties(e, r);
  },
  RS = (e) => {
    Ly(e, (t, n) => {
      if (Ke(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (Ke(r)) {
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
  PS = (e, t) => {
    const n = {},
      r = (s) => {
        s.forEach((o) => {
          n[o] = !0;
        });
      };
    return Ur(e) ? r(e) : r(String(e).split(t)), n;
  },
  OS = () => {},
  TS = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t),
  Vl = "abcdefghijklmnopqrstuvwxyz",
  kf = "0123456789",
  $y = { DIGIT: kf, ALPHA: Vl, ALPHA_DIGIT: Vl + Vl.toUpperCase() + kf },
  IS = (e = 16, t = $y.ALPHA_DIGIT) => {
    let n = "";
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function LS(e) {
  return !!(
    e &&
    Ke(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const $S = (e) => {
    const t = new Array(10),
      n = (r, s) => {
        if (rl(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            t[s] = r;
            const o = Ur(r) ? [] : {};
            return (
              Qs(r, (i, a) => {
                const u = n(i, s + 1);
                !As(u) && (o[a] = u);
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
  DS = wt("AsyncFunction"),
  FS = (e) => e && (rl(e) || Ke(e)) && Ke(e.then) && Ke(e.catch),
  Dy = ((e, t) =>
    e
      ? setImmediate
      : t
      ? ((n, r) => (
          $n.addEventListener(
            "message",
            ({ source: s, data: o }) => {
              s === $n && o === n && r.length && r.shift()();
            },
            !1
          ),
          (s) => {
            r.push(s), $n.postMessage(n, "*");
          }
        ))(`axios@${Math.random()}`, [])
      : (n) => setTimeout(n))(
    typeof setImmediate == "function",
    Ke($n.postMessage)
  ),
  AS =
    typeof queueMicrotask < "u"
      ? queueMicrotask.bind($n)
      : (typeof process < "u" && process.nextTick) || Dy,
  N = {
    isArray: Ur,
    isArrayBuffer: Py,
    isBuffer: eS,
    isFormData: uS,
    isArrayBufferView: tS,
    isString: nS,
    isNumber: Oy,
    isBoolean: rS,
    isObject: rl,
    isPlainObject: Lo,
    isReadableStream: dS,
    isRequest: fS,
    isResponse: pS,
    isHeaders: hS,
    isUndefined: As,
    isDate: sS,
    isFile: oS,
    isBlob: iS,
    isRegExp: _S,
    isFunction: Ke,
    isStream: aS,
    isURLSearchParams: cS,
    isTypedArray: SS,
    isFileList: lS,
    forEach: Qs,
    merge: su,
    extend: yS,
    trim: mS,
    stripBOM: gS,
    inherits: xS,
    toFlatObject: vS,
    kindOf: tl,
    kindOfTest: wt,
    endsWith: jS,
    toArray: wS,
    forEachEntry: ES,
    matchAll: NS,
    isHTMLForm: CS,
    hasOwnProperty: Cf,
    hasOwnProp: Cf,
    reduceDescriptors: Ly,
    freezeMethods: RS,
    toObjectSet: PS,
    toCamelCase: kS,
    noop: OS,
    toFiniteNumber: TS,
    findKey: Ty,
    global: $n,
    isContextDefined: Iy,
    ALPHABET: $y,
    generateString: IS,
    isSpecCompliantForm: LS,
    toJSONObject: $S,
    isAsyncFn: DS,
    isThenable: FS,
    setImmediate: Dy,
    asap: AS,
  };
function U(e, t, n, r, s) {
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
N.inherits(U, Error, {
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
      config: N.toJSONObject(this.config),
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    };
  },
});
const Fy = U.prototype,
  Ay = {};
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
  Ay[e] = { value: e };
});
Object.defineProperties(U, Ay);
Object.defineProperty(Fy, "isAxiosError", { value: !0 });
U.from = (e, t, n, r, s, o) => {
  const i = Object.create(Fy);
  return (
    N.toFlatObject(
      e,
      i,
      function (u) {
        return u !== Error.prototype;
      },
      (a) => a !== "isAxiosError"
    ),
    U.call(i, e.message, t, n, r, s),
    (i.cause = e),
    (i.name = e.name),
    o && Object.assign(i, o),
    i
  );
};
const MS = null;
function ou(e) {
  return N.isPlainObject(e) || N.isArray(e);
}
function My(e) {
  return N.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function _f(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (s, o) {
          return (s = My(s)), !n && o ? "[" + s + "]" : s;
        })
        .join(n ? "." : "")
    : t;
}
function US(e) {
  return N.isArray(e) && !e.some(ou);
}
const zS = N.toFlatObject(N, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function sl(e, t, n) {
  if (!N.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (n = N.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (S, j) {
        return !N.isUndefined(j[S]);
      }
    ));
  const r = n.metaTokens,
    s = n.visitor || d,
    o = n.dots,
    i = n.indexes,
    u = (n.Blob || (typeof Blob < "u" && Blob)) && N.isSpecCompliantForm(t);
  if (!N.isFunction(s)) throw new TypeError("visitor must be a function");
  function c(m) {
    if (m === null) return "";
    if (N.isDate(m)) return m.toISOString();
    if (!u && N.isBlob(m))
      throw new U("Blob is not supported. Use a Buffer instead.");
    return N.isArrayBuffer(m) || N.isTypedArray(m)
      ? u && typeof Blob == "function"
        ? new Blob([m])
        : Buffer.from(m)
      : m;
  }
  function d(m, S, j) {
    let x = m;
    if (m && !j && typeof m == "object") {
      if (N.endsWith(S, "{}"))
        (S = r ? S : S.slice(0, -2)), (m = JSON.stringify(m));
      else if (
        (N.isArray(m) && US(m)) ||
        ((N.isFileList(m) || N.endsWith(S, "[]")) && (x = N.toArray(m)))
      )
        return (
          (S = My(S)),
          x.forEach(function (y, w) {
            !(N.isUndefined(y) || y === null) &&
              t.append(
                i === !0 ? _f([S], w, o) : i === null ? S : S + "[]",
                c(y)
              );
          }),
          !1
        );
    }
    return ou(m) ? !0 : (t.append(_f(j, S, o), c(m)), !1);
  }
  const f = [],
    p = Object.assign(zS, {
      defaultVisitor: d,
      convertValue: c,
      isVisitable: ou,
    });
  function v(m, S) {
    if (!N.isUndefined(m)) {
      if (f.indexOf(m) !== -1)
        throw Error("Circular reference detected in " + S.join("."));
      f.push(m),
        N.forEach(m, function (x, g) {
          (!(N.isUndefined(x) || x === null) &&
            s.call(t, x, N.isString(g) ? g.trim() : g, S, p)) === !0 &&
            v(x, S ? S.concat(g) : [g]);
        }),
        f.pop();
    }
  }
  if (!N.isObject(e)) throw new TypeError("data must be an object");
  return v(e), t;
}
function Rf(e) {
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
function Rc(e, t) {
  (this._pairs = []), e && sl(e, this, t);
}
const Uy = Rc.prototype;
Uy.append = function (t, n) {
  this._pairs.push([t, n]);
};
Uy.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, Rf);
      }
    : Rf;
  return this._pairs
    .map(function (s) {
      return n(s[0]) + "=" + n(s[1]);
    }, "")
    .join("&");
};
function bS(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function zy(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || bS,
    s = n && n.serialize;
  let o;
  if (
    (s
      ? (o = s(t, n))
      : (o = N.isURLSearchParams(t) ? t.toString() : new Rc(t, n).toString(r)),
    o)
  ) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + o);
  }
  return e;
}
class Pf {
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
    N.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const by = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  BS = typeof URLSearchParams < "u" ? URLSearchParams : Rc,
  WS = typeof FormData < "u" ? FormData : null,
  HS = typeof Blob < "u" ? Blob : null,
  VS = {
    isBrowser: !0,
    classes: { URLSearchParams: BS, FormData: WS, Blob: HS },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  Pc = typeof window < "u" && typeof document < "u",
  KS = ((e) => Pc && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(
    typeof navigator < "u" && navigator.product
  ),
  GS =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  QS = (Pc && window.location.href) || "http://localhost",
  JS = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: Pc,
        hasStandardBrowserEnv: KS,
        hasStandardBrowserWebWorkerEnv: GS,
        origin: QS,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  vt = { ...JS, ...VS };
function qS(e, t) {
  return sl(
    e,
    new vt.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, s, o) {
          return vt.isNode && N.isBuffer(n)
            ? (this.append(r, n.toString("base64")), !1)
            : o.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function XS(e) {
  return N.matchAll(/\w+|\[(\w*)]/g, e).map((t) =>
    t[0] === "[]" ? "" : t[1] || t[0]
  );
}
function YS(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const s = n.length;
  let o;
  for (r = 0; r < s; r++) (o = n[r]), (t[o] = e[o]);
  return t;
}
function By(e) {
  function t(n, r, s, o) {
    let i = n[o++];
    if (i === "__proto__") return !0;
    const a = Number.isFinite(+i),
      u = o >= n.length;
    return (
      (i = !i && N.isArray(s) ? s.length : i),
      u
        ? (N.hasOwnProp(s, i) ? (s[i] = [s[i], r]) : (s[i] = r), !a)
        : ((!s[i] || !N.isObject(s[i])) && (s[i] = []),
          t(n, r, s[i], o) && N.isArray(s[i]) && (s[i] = YS(s[i])),
          !a)
    );
  }
  if (N.isFormData(e) && N.isFunction(e.entries)) {
    const n = {};
    return (
      N.forEachEntry(e, (r, s) => {
        t(XS(r), s, n, 0);
      }),
      n
    );
  }
  return null;
}
function ZS(e, t, n) {
  if (N.isString(e))
    try {
      return (t || JSON.parse)(e), N.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (n || JSON.stringify)(e);
}
const Js = {
  transitional: by,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        s = r.indexOf("application/json") > -1,
        o = N.isObject(t);
      if ((o && N.isHTMLForm(t) && (t = new FormData(t)), N.isFormData(t)))
        return s ? JSON.stringify(By(t)) : t;
      if (
        N.isArrayBuffer(t) ||
        N.isBuffer(t) ||
        N.isStream(t) ||
        N.isFile(t) ||
        N.isBlob(t) ||
        N.isReadableStream(t)
      )
        return t;
      if (N.isArrayBufferView(t)) return t.buffer;
      if (N.isURLSearchParams(t))
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
          return qS(t, this.formSerializer).toString();
        if ((a = N.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const u = this.env && this.env.FormData;
          return sl(
            a ? { "files[]": t } : t,
            u && new u(),
            this.formSerializer
          );
        }
      }
      return o || s ? (n.setContentType("application/json", !1), ZS(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || Js.transitional,
        r = n && n.forcedJSONParsing,
        s = this.responseType === "json";
      if (N.isResponse(t) || N.isReadableStream(t)) return t;
      if (t && N.isString(t) && ((r && !this.responseType) || s)) {
        const i = !(n && n.silentJSONParsing) && s;
        try {
          return JSON.parse(t);
        } catch (a) {
          if (i)
            throw a.name === "SyntaxError"
              ? U.from(a, U.ERR_BAD_RESPONSE, this, null, this.response)
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
N.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Js.headers[e] = {};
});
const eE = N.toObjectSet([
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
  tE = (e) => {
    const t = {};
    let n, r, s;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (i) {
            (s = i.indexOf(":")),
              (n = i.substring(0, s).trim().toLowerCase()),
              (r = i.substring(s + 1).trim()),
              !(!n || (t[n] && eE[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ", " + r : r));
          }),
      t
    );
  },
  Of = Symbol("internals");
function Yr(e) {
  return e && String(e).trim().toLowerCase();
}
function $o(e) {
  return e === !1 || e == null ? e : N.isArray(e) ? e.map($o) : String(e);
}
function nE(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const rE = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Kl(e, t, n, r, s) {
  if (N.isFunction(r)) return r.call(this, t, n);
  if ((s && (t = n), !!N.isString(t))) {
    if (N.isString(r)) return t.indexOf(r) !== -1;
    if (N.isRegExp(r)) return r.test(t);
  }
}
function sE(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function oE(e, t) {
  const n = N.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (s, o, i) {
        return this[r].call(this, t, s, o, i);
      },
      configurable: !0,
    });
  });
}
class ze {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function o(a, u, c) {
      const d = Yr(u);
      if (!d) throw new Error("header name must be a non-empty string");
      const f = N.findKey(s, d);
      (!f || s[f] === void 0 || c === !0 || (c === void 0 && s[f] !== !1)) &&
        (s[f || u] = $o(a));
    }
    const i = (a, u) => N.forEach(a, (c, d) => o(c, d, u));
    if (N.isPlainObject(t) || t instanceof this.constructor) i(t, n);
    else if (N.isString(t) && (t = t.trim()) && !rE(t)) i(tE(t), n);
    else if (N.isHeaders(t)) for (const [a, u] of t.entries()) o(u, a, r);
    else t != null && o(n, t, r);
    return this;
  }
  get(t, n) {
    if (((t = Yr(t)), t)) {
      const r = N.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n) return s;
        if (n === !0) return nE(s);
        if (N.isFunction(n)) return n.call(this, s, r);
        if (N.isRegExp(n)) return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = Yr(t)), t)) {
      const r = N.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Kl(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function o(i) {
      if (((i = Yr(i)), i)) {
        const a = N.findKey(r, i);
        a && (!n || Kl(r, r[a], a, n)) && (delete r[a], (s = !0));
      }
    }
    return N.isArray(t) ? t.forEach(o) : o(t), s;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      s = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || Kl(this, this[o], o, t, !0)) && (delete this[o], (s = !0));
    }
    return s;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      N.forEach(this, (s, o) => {
        const i = N.findKey(r, o);
        if (i) {
          (n[i] = $o(s)), delete n[o];
          return;
        }
        const a = t ? sE(o) : String(o).trim();
        a !== o && delete n[o], (n[a] = $o(s)), (r[a] = !0);
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
      N.forEach(this, (r, s) => {
        r != null && r !== !1 && (n[s] = t && N.isArray(r) ? r.join(", ") : r);
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
    const r = (this[Of] = this[Of] = { accessors: {} }).accessors,
      s = this.prototype;
    function o(i) {
      const a = Yr(i);
      r[a] || (oE(s, i), (r[a] = !0));
    }
    return N.isArray(t) ? t.forEach(o) : o(t), this;
  }
}
ze.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
N.reduceDescriptors(ze.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
N.freezeMethods(ze);
function Gl(e, t) {
  const n = this || Js,
    r = t || n,
    s = ze.from(r.headers);
  let o = r.data;
  return (
    N.forEach(e, function (a) {
      o = a.call(n, o, s.normalize(), t ? t.status : void 0);
    }),
    s.normalize(),
    o
  );
}
function Wy(e) {
  return !!(e && e.__CANCEL__);
}
function zr(e, t, n) {
  U.call(this, e ?? "canceled", U.ERR_CANCELED, t, n),
    (this.name = "CanceledError");
}
N.inherits(zr, U, { __CANCEL__: !0 });
function Hy(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new U(
          "Request failed with status code " + n.status,
          [U.ERR_BAD_REQUEST, U.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      );
}
function iE(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function lE(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let s = 0,
    o = 0,
    i;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (u) {
      const c = Date.now(),
        d = r[o];
      i || (i = c), (n[s] = u), (r[s] = c);
      let f = o,
        p = 0;
      for (; f !== s; ) (p += n[f++]), (f = f % e);
      if (((s = (s + 1) % e), s === o && (o = (o + 1) % e), c - i < t)) return;
      const v = d && c - d;
      return v ? Math.round((p * 1e3) / v) : void 0;
    }
  );
}
function aE(e, t) {
  let n = 0,
    r = 1e3 / t,
    s,
    o;
  const i = (c, d = Date.now()) => {
    (n = d), (s = null), o && (clearTimeout(o), (o = null)), e.apply(null, c);
  };
  return [
    (...c) => {
      const d = Date.now(),
        f = d - n;
      f >= r
        ? i(c, d)
        : ((s = c),
          o ||
            (o = setTimeout(() => {
              (o = null), i(s);
            }, r - f)));
    },
    () => s && i(s),
  ];
}
const ji = (e, t, n = 3) => {
    let r = 0;
    const s = lE(50, 250);
    return aE((o) => {
      const i = o.loaded,
        a = o.lengthComputable ? o.total : void 0,
        u = i - r,
        c = s(u),
        d = i <= a;
      r = i;
      const f = {
        loaded: i,
        total: a,
        progress: a ? i / a : void 0,
        bytes: u,
        rate: c || void 0,
        estimated: c && a && d ? (a - i) / c : void 0,
        event: o,
        lengthComputable: a != null,
        [t ? "download" : "upload"]: !0,
      };
      e(f);
    }, n);
  },
  Tf = (e, t) => {
    const n = e != null;
    return [(r) => t[0]({ lengthComputable: n, total: e, loaded: r }), t[1]];
  },
  If =
    (e) =>
    (...t) =>
      N.asap(() => e(...t)),
  uE = vt.hasStandardBrowserEnv
    ? (function () {
        const t = /(msie|trident)/i.test(navigator.userAgent),
          n = document.createElement("a");
        let r;
        function s(o) {
          let i = o;
          return (
            t && (n.setAttribute("href", i), (i = n.href)),
            n.setAttribute("href", i),
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
          function (i) {
            const a = N.isString(i) ? s(i) : i;
            return a.protocol === r.protocol && a.host === r.host;
          }
        );
      })()
    : (function () {
        return function () {
          return !0;
        };
      })(),
  cE = vt.hasStandardBrowserEnv
    ? {
        write(e, t, n, r, s, o) {
          const i = [e + "=" + encodeURIComponent(t)];
          N.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()),
            N.isString(r) && i.push("path=" + r),
            N.isString(s) && i.push("domain=" + s),
            o === !0 && i.push("secure"),
            (document.cookie = i.join("; "));
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
function dE(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function fE(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Vy(e, t) {
  return e && !dE(t) ? fE(e, t) : t;
}
const Lf = (e) => (e instanceof ze ? { ...e } : e);
function Kn(e, t) {
  t = t || {};
  const n = {};
  function r(c, d, f) {
    return N.isPlainObject(c) && N.isPlainObject(d)
      ? N.merge.call({ caseless: f }, c, d)
      : N.isPlainObject(d)
      ? N.merge({}, d)
      : N.isArray(d)
      ? d.slice()
      : d;
  }
  function s(c, d, f) {
    if (N.isUndefined(d)) {
      if (!N.isUndefined(c)) return r(void 0, c, f);
    } else return r(c, d, f);
  }
  function o(c, d) {
    if (!N.isUndefined(d)) return r(void 0, d);
  }
  function i(c, d) {
    if (N.isUndefined(d)) {
      if (!N.isUndefined(c)) return r(void 0, c);
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
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: a,
    headers: (c, d) => s(Lf(c), Lf(d), !0),
  };
  return (
    N.forEach(Object.keys(Object.assign({}, e, t)), function (d) {
      const f = u[d] || s,
        p = f(e[d], t[d], d);
      (N.isUndefined(p) && f !== a) || (n[d] = p);
    }),
    n
  );
}
const Ky = (e) => {
    const t = Kn({}, e);
    let {
      data: n,
      withXSRFToken: r,
      xsrfHeaderName: s,
      xsrfCookieName: o,
      headers: i,
      auth: a,
    } = t;
    (t.headers = i = ze.from(i)),
      (t.url = zy(Vy(t.baseURL, t.url), e.params, e.paramsSerializer)),
      a &&
        i.set(
          "Authorization",
          "Basic " +
            btoa(
              (a.username || "") +
                ":" +
                (a.password ? unescape(encodeURIComponent(a.password)) : "")
            )
        );
    let u;
    if (N.isFormData(n)) {
      if (vt.hasStandardBrowserEnv || vt.hasStandardBrowserWebWorkerEnv)
        i.setContentType(void 0);
      else if ((u = i.getContentType()) !== !1) {
        const [c, ...d] = u
          ? u
              .split(";")
              .map((f) => f.trim())
              .filter(Boolean)
          : [];
        i.setContentType([c || "multipart/form-data", ...d].join("; "));
      }
    }
    if (
      vt.hasStandardBrowserEnv &&
      (r && N.isFunction(r) && (r = r(t)), r || (r !== !1 && uE(t.url)))
    ) {
      const c = s && o && cE.read(o);
      c && i.set(s, c);
    }
    return t;
  },
  pE = typeof XMLHttpRequest < "u",
  hE =
    pE &&
    function (e) {
      return new Promise(function (n, r) {
        const s = Ky(e);
        let o = s.data;
        const i = ze.from(s.headers).normalize();
        let { responseType: a, onUploadProgress: u, onDownloadProgress: c } = s,
          d,
          f,
          p,
          v,
          m;
        function S() {
          v && v(),
            m && m(),
            s.cancelToken && s.cancelToken.unsubscribe(d),
            s.signal && s.signal.removeEventListener("abort", d);
        }
        let j = new XMLHttpRequest();
        j.open(s.method.toUpperCase(), s.url, !0), (j.timeout = s.timeout);
        function x() {
          if (!j) return;
          const y = ze.from(
              "getAllResponseHeaders" in j && j.getAllResponseHeaders()
            ),
            C = {
              data:
                !a || a === "text" || a === "json"
                  ? j.responseText
                  : j.response,
              status: j.status,
              statusText: j.statusText,
              headers: y,
              config: e,
              request: j,
            };
          Hy(
            function (R) {
              n(R), S();
            },
            function (R) {
              r(R), S();
            },
            C
          ),
            (j = null);
        }
        "onloadend" in j
          ? (j.onloadend = x)
          : (j.onreadystatechange = function () {
              !j ||
                j.readyState !== 4 ||
                (j.status === 0 &&
                  !(j.responseURL && j.responseURL.indexOf("file:") === 0)) ||
                setTimeout(x);
            }),
          (j.onabort = function () {
            j &&
              (r(new U("Request aborted", U.ECONNABORTED, e, j)), (j = null));
          }),
          (j.onerror = function () {
            r(new U("Network Error", U.ERR_NETWORK, e, j)), (j = null);
          }),
          (j.ontimeout = function () {
            let w = s.timeout
              ? "timeout of " + s.timeout + "ms exceeded"
              : "timeout exceeded";
            const C = s.transitional || by;
            s.timeoutErrorMessage && (w = s.timeoutErrorMessage),
              r(
                new U(
                  w,
                  C.clarifyTimeoutError ? U.ETIMEDOUT : U.ECONNABORTED,
                  e,
                  j
                )
              ),
              (j = null);
          }),
          o === void 0 && i.setContentType(null),
          "setRequestHeader" in j &&
            N.forEach(i.toJSON(), function (w, C) {
              j.setRequestHeader(C, w);
            }),
          N.isUndefined(s.withCredentials) ||
            (j.withCredentials = !!s.withCredentials),
          a && a !== "json" && (j.responseType = s.responseType),
          c && (([p, m] = ji(c, !0)), j.addEventListener("progress", p)),
          u &&
            j.upload &&
            (([f, v] = ji(u)),
            j.upload.addEventListener("progress", f),
            j.upload.addEventListener("loadend", v)),
          (s.cancelToken || s.signal) &&
            ((d = (y) => {
              j &&
                (r(!y || y.type ? new zr(null, e, j) : y),
                j.abort(),
                (j = null));
            }),
            s.cancelToken && s.cancelToken.subscribe(d),
            s.signal &&
              (s.signal.aborted ? d() : s.signal.addEventListener("abort", d)));
        const g = iE(s.url);
        if (g && vt.protocols.indexOf(g) === -1) {
          r(new U("Unsupported protocol " + g + ":", U.ERR_BAD_REQUEST, e));
          return;
        }
        j.send(o || null);
      });
    },
  mE = (e, t) => {
    let n = new AbortController(),
      r;
    const s = function (u) {
      if (!r) {
        (r = !0), i();
        const c = u instanceof Error ? u : this.reason;
        n.abort(
          c instanceof U ? c : new zr(c instanceof Error ? c.message : c)
        );
      }
    };
    let o =
      t &&
      setTimeout(() => {
        s(new U(`timeout ${t} of ms exceeded`, U.ETIMEDOUT));
      }, t);
    const i = () => {
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
      (a.unsubscribe = i),
      [
        a,
        () => {
          o && clearTimeout(o), (o = null);
        },
      ]
    );
  },
  yE = function* (e, t) {
    let n = e.byteLength;
    if (!t || n < t) {
      yield e;
      return;
    }
    let r = 0,
      s;
    for (; r < n; ) (s = r + t), yield e.slice(r, s), (r = s);
  },
  gE = async function* (e, t, n) {
    for await (const r of e)
      yield* yE(ArrayBuffer.isView(r) ? r : await n(String(r)), t);
  },
  $f = (e, t, n, r, s) => {
    const o = gE(e, t, s);
    let i = 0,
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
              let v = (i += p);
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
  ol =
    typeof fetch == "function" &&
    typeof Request == "function" &&
    typeof Response == "function",
  Gy = ol && typeof ReadableStream == "function",
  iu =
    ol &&
    (typeof TextEncoder == "function"
      ? (
          (e) => (t) =>
            e.encode(t)
        )(new TextEncoder())
      : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
  Qy = (e, ...t) => {
    try {
      return !!e(...t);
    } catch {
      return !1;
    }
  },
  xE =
    Gy &&
    Qy(() => {
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
  Df = 64 * 1024,
  lu = Gy && Qy(() => N.isReadableStream(new Response("").body)),
  wi = { stream: lu && ((e) => e.body) };
ol &&
  ((e) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
      !wi[t] &&
        (wi[t] = N.isFunction(e[t])
          ? (n) => n[t]()
          : (n, r) => {
              throw new U(
                `Response type '${t}' is not supported`,
                U.ERR_NOT_SUPPORT,
                r
              );
            });
    });
  })(new Response());
const vE = async (e) => {
    if (e == null) return 0;
    if (N.isBlob(e)) return e.size;
    if (N.isSpecCompliantForm(e))
      return (await new Request(e).arrayBuffer()).byteLength;
    if (N.isArrayBufferView(e) || N.isArrayBuffer(e)) return e.byteLength;
    if ((N.isURLSearchParams(e) && (e = e + ""), N.isString(e)))
      return (await iu(e)).byteLength;
  },
  jE = async (e, t) => {
    const n = N.toFiniteNumber(e.getContentLength());
    return n ?? vE(t);
  },
  wE =
    ol &&
    (async (e) => {
      let {
        url: t,
        method: n,
        data: r,
        signal: s,
        cancelToken: o,
        timeout: i,
        onDownloadProgress: a,
        onUploadProgress: u,
        responseType: c,
        headers: d,
        withCredentials: f = "same-origin",
        fetchOptions: p,
      } = Ky(e);
      c = c ? (c + "").toLowerCase() : "text";
      let [v, m] = s || o || i ? mE([s, o], i) : [],
        S,
        j;
      const x = () => {
        !S &&
          setTimeout(() => {
            v && v.unsubscribe();
          }),
          (S = !0);
      };
      let g;
      try {
        if (
          u &&
          xE &&
          n !== "get" &&
          n !== "head" &&
          (g = await jE(d, r)) !== 0
        ) {
          let k = new Request(t, { method: "POST", body: r, duplex: "half" }),
            R;
          if (
            (N.isFormData(r) &&
              (R = k.headers.get("content-type")) &&
              d.setContentType(R),
            k.body)
          ) {
            const [T, W] = Tf(g, ji(If(u)));
            r = $f(k.body, Df, T, W, iu);
          }
        }
        N.isString(f) || (f = f ? "include" : "omit"),
          (j = new Request(t, {
            ...p,
            signal: v,
            method: n.toUpperCase(),
            headers: d.normalize().toJSON(),
            body: r,
            duplex: "half",
            credentials: f,
          }));
        let y = await fetch(j);
        const w = lu && (c === "stream" || c === "response");
        if (lu && (a || w)) {
          const k = {};
          ["status", "statusText", "headers"].forEach(($) => {
            k[$] = y[$];
          });
          const R = N.toFiniteNumber(y.headers.get("content-length")),
            [T, W] = (a && Tf(R, ji(If(a), !0))) || [];
          y = new Response(
            $f(
              y.body,
              Df,
              T,
              () => {
                W && W(), w && x();
              },
              iu
            ),
            k
          );
        }
        c = c || "text";
        let C = await wi[N.findKey(wi, c) || "text"](y, e);
        return (
          !w && x(),
          m && m(),
          await new Promise((k, R) => {
            Hy(k, R, {
              data: C,
              headers: ze.from(y.headers),
              status: y.status,
              statusText: y.statusText,
              config: e,
              request: j,
            });
          })
        );
      } catch (y) {
        throw (
          (x(),
          y && y.name === "TypeError" && /fetch/i.test(y.message)
            ? Object.assign(new U("Network Error", U.ERR_NETWORK, e, j), {
                cause: y.cause || y,
              })
            : U.from(y, y && y.code, e, j))
        );
      }
    }),
  au = { http: MS, xhr: hE, fetch: wE };
N.forEach(au, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Ff = (e) => `- ${e}`,
  SE = (e) => N.isFunction(e) || e === null || e === !1,
  Jy = {
    getAdapter: (e) => {
      e = N.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      const s = {};
      for (let o = 0; o < t; o++) {
        n = e[o];
        let i;
        if (
          ((r = n),
          !SE(n) && ((r = au[(i = String(n)).toLowerCase()]), r === void 0))
        )
          throw new U(`Unknown adapter '${i}'`);
        if (r) break;
        s[i || "#" + o] = r;
      }
      if (!r) {
        const o = Object.entries(s).map(
          ([a, u]) =>
            `adapter ${a} ` +
            (u === !1
              ? "is not supported by the environment"
              : "is not available in the build")
        );
        let i = t
          ? o.length > 1
            ? `since :
` +
              o.map(Ff).join(`
`)
            : " " + Ff(o[0])
          : "as no adapter specified";
        throw new U(
          "There is no suitable adapter to dispatch the request " + i,
          "ERR_NOT_SUPPORT"
        );
      }
      return r;
    },
    adapters: au,
  };
function Ql(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new zr(null, e);
}
function Af(e) {
  return (
    Ql(e),
    (e.headers = ze.from(e.headers)),
    (e.data = Gl.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    Jy.getAdapter(e.adapter || Js.adapter)(e).then(
      function (r) {
        return (
          Ql(e),
          (r.data = Gl.call(e, e.transformResponse, r)),
          (r.headers = ze.from(r.headers)),
          r
        );
      },
      function (r) {
        return (
          Wy(r) ||
            (Ql(e),
            r &&
              r.response &&
              ((r.response.data = Gl.call(e, e.transformResponse, r.response)),
              (r.response.headers = ze.from(r.response.headers)))),
          Promise.reject(r)
        );
      }
    )
  );
}
const qy = "1.7.3",
  Oc = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    Oc[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  }
);
const Mf = {};
Oc.transitional = function (t, n, r) {
  function s(o, i) {
    return (
      "[Axios v" +
      qy +
      "] Transitional option '" +
      o +
      "'" +
      i +
      (r ? ". " + r : "")
    );
  }
  return (o, i, a) => {
    if (t === !1)
      throw new U(
        s(i, " has been removed" + (n ? " in " + n : "")),
        U.ERR_DEPRECATED
      );
    return (
      n &&
        !Mf[i] &&
        ((Mf[i] = !0),
        console.warn(
          s(
            i,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future"
          )
        )),
      t ? t(o, i, a) : !0
    );
  };
};
function EE(e, t, n) {
  if (typeof e != "object")
    throw new U("options must be an object", U.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const o = r[s],
      i = t[o];
    if (i) {
      const a = e[o],
        u = a === void 0 || i(a, o, e);
      if (u !== !0)
        throw new U("option " + o + " must be " + u, U.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new U("Unknown option " + o, U.ERR_BAD_OPTION);
  }
}
const uu = { assertOptions: EE, validators: Oc },
  qt = uu.validators;
class An {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new Pf(), response: new Pf() });
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
      (n = Kn(this.defaults, n));
    const { transitional: r, paramsSerializer: s, headers: o } = n;
    r !== void 0 &&
      uu.assertOptions(
        r,
        {
          silentJSONParsing: qt.transitional(qt.boolean),
          forcedJSONParsing: qt.transitional(qt.boolean),
          clarifyTimeoutError: qt.transitional(qt.boolean),
        },
        !1
      ),
      s != null &&
        (N.isFunction(s)
          ? (n.paramsSerializer = { serialize: s })
          : uu.assertOptions(
              s,
              { encode: qt.function, serialize: qt.function },
              !0
            )),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let i = o && N.merge(o.common, o[n.method]);
    o &&
      N.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (m) => {
          delete o[m];
        }
      ),
      (n.headers = ze.concat(i, o));
    const a = [];
    let u = !0;
    this.interceptors.request.forEach(function (S) {
      (typeof S.runWhen == "function" && S.runWhen(n) === !1) ||
        ((u = u && S.synchronous), a.unshift(S.fulfilled, S.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function (S) {
      c.push(S.fulfilled, S.rejected);
    });
    let d,
      f = 0,
      p;
    if (!u) {
      const m = [Af.bind(this), void 0];
      for (
        m.unshift.apply(m, a),
          m.push.apply(m, c),
          p = m.length,
          d = Promise.resolve(n);
        f < p;

      )
        d = d.then(m[f++], m[f++]);
      return d;
    }
    p = a.length;
    let v = n;
    for (f = 0; f < p; ) {
      const m = a[f++],
        S = a[f++];
      try {
        v = m(v);
      } catch (j) {
        S.call(this, j);
        break;
      }
    }
    try {
      d = Af.call(this, v);
    } catch (m) {
      return Promise.reject(m);
    }
    for (f = 0, p = c.length; f < p; ) d = d.then(c[f++], c[f++]);
    return d;
  }
  getUri(t) {
    t = Kn(this.defaults, t);
    const n = Vy(t.baseURL, t.url);
    return zy(n, t.params, t.paramsSerializer);
  }
}
N.forEach(["delete", "get", "head", "options"], function (t) {
  An.prototype[t] = function (n, r) {
    return this.request(
      Kn(r || {}, { method: t, url: n, data: (r || {}).data })
    );
  };
});
N.forEach(["post", "put", "patch"], function (t) {
  function n(r) {
    return function (o, i, a) {
      return this.request(
        Kn(a || {}, {
          method: t,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: o,
          data: i,
        })
      );
    };
  }
  (An.prototype[t] = n()), (An.prototype[t + "Form"] = n(!0));
});
class Tc {
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
        const i = new Promise((a) => {
          r.subscribe(a), (o = a);
        }).then(s);
        return (
          (i.cancel = function () {
            r.unsubscribe(o);
          }),
          i
        );
      }),
      t(function (o, i, a) {
        r.reason || ((r.reason = new zr(o, i, a)), n(r.reason));
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
      token: new Tc(function (s) {
        t = s;
      }),
      cancel: t,
    };
  }
}
function NE(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function CE(e) {
  return N.isObject(e) && e.isAxiosError === !0;
}
const cu = {
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
Object.entries(cu).forEach(([e, t]) => {
  cu[t] = e;
});
function Xy(e) {
  const t = new An(e),
    n = Ry(An.prototype.request, t);
  return (
    N.extend(n, An.prototype, t, { allOwnKeys: !0 }),
    N.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (s) {
      return Xy(Kn(e, s));
    }),
    n
  );
}
const D = Xy(Js);
D.Axios = An;
D.CanceledError = zr;
D.CancelToken = Tc;
D.isCancel = Wy;
D.VERSION = qy;
D.toFormData = sl;
D.AxiosError = U;
D.Cancel = D.CanceledError;
D.all = function (t) {
  return Promise.all(t);
};
D.spread = NE;
D.isAxiosError = CE;
D.mergeConfig = Kn;
D.AxiosHeaders = ze;
D.formToJSON = (e) => By(N.isHTMLForm(e) ? new FormData(e) : e);
D.getAdapter = Jy.getAdapter;
D.HttpStatusCode = cu;
D.default = D;
const K = "",
  kE = (e) => async (t) => {
    const n = `${K}/products/`;
    try {
      t(Mr()),
        (
          await D.post(n, e, {
            headers: { "content-type": "multipart/form-data" },
          })
        ).status === 201 && t(kc());
    } catch {
      t(Jn());
    }
  },
  Ic = (e, t, n) => async (r) => {
    const s = `${K}/products/?page=${e}&sort=${t}&by=${n}`;
    try {
      r(Mr());
      const o = await D.get(s);
      o.status === 200 && r(_y(o.data));
    } catch {
      r(Jn());
    }
  },
  Lc = (e, t, n, r) => async (s) => {
    const o = `${K}/products/?search=${e}&page=${r}&sort=${t}&by=${n}`;
    try {
      s(Mr());
      const i = await D.get(o);
      i.status === 200 && s(_y(i.data));
    } catch {
      s(Jn());
    }
  },
  _E = (e) => async (t) => {
    const n = `${K}/products/${e}`;
    try {
      t(Mr());
      const r = await D.get(n);
      r.status === 200 && t(qw(r.data));
    } catch {
      t(Jn());
    }
  },
  RE = (e, t) => async (n) => {
    const r = `${K}/products/${e}/`;
    try {
      n(Mr()),
        (
          await D.patch(r, t, {
            headers: { "content-type": "multipart/form-data" },
          })
        ).status === 200 && n(kc());
    } catch {
      n(Jn());
    }
  },
  Yy = (e, t) => async (n) => {
    const r = `${K}/product-update/${e}`;
    try {
      (
        await D.patch(r, JSON.stringify(t), {
          headers: { "content-type": "application/json" },
        })
      ).status === 200 && n(kc());
    } catch {
      n(Jn());
    }
  },
  PE = (e) => async (t) => {
    const n = `${K}/products/${e}`;
    try {
      t(Mr()), (await D.delete(n)).status === 200 && t(Xw(e));
    } catch {
      t(Jn());
    }
  };
function Nn() {
  const e = Gt(),
    t = xe(),
    { current_user: n } = H((i) => i.user),
    [r, s] = h.useState("");
  function o() {
    s(""), t(Lc(r, "ASC", "Id")), t(Vn());
  }
  return l.jsxs(O, {
    children: [
      l.jsx(hi, {
        bg: "dark",
        "data-bs-theme": "dark",
        collapseOnSelect: !0,
        children: l.jsxs(hc, {
          children: [
            l.jsx(hi.Brand, {
              children: l.jsxs(It, {
                to: "/",
                className: "text-decoration-none",
                style: ({ isActive: i }) => ({ color: i ? "white" : "gray" }),
                onClick: () => t(Ic(1, "ASC", "Id")),
                children: [
                  l.jsx("i", { className: "bi bi-shop-window px-2" }),
                  "Shop",
                ],
              }),
            }),
            l.jsxs(ey, {
              className: "ml-auto",
              children: [
                l.jsx(_, {
                  className:
                    e.pathname === "/" ? "px-2 visible" : "px-2 invisible",
                  onSubmit: (i) => i.preventDefault(),
                  children: l.jsxs(O, {
                    children: [
                      l.jsx(E, {
                        xs: "auto",
                        children: l.jsx(_.Control, {
                          type: "text",
                          value: r,
                          placeholder: "Search",
                          className: "mr-sm-2",
                          onChange: (i) => s(i.target.value),
                        }),
                      }),
                      l.jsx(E, {
                        xs: "auto",
                        children: l.jsx(G, {
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
                    ? l.jsxs(It, {
                        className: "text-decoration-none align-self-center",
                        to: "/admin",
                        style: ({ isActive: i }) => ({
                          color: i ? "white" : "gray",
                        }),
                        children: [
                          l.jsx("i", { className: "bi bi-person-gear px-1" }),
                          "Admin",
                        ],
                      })
                    : n.is_admin
                    ? l.jsxs(It, {
                        className: "text-decoration-none align-self-center",
                        to: "/staff",
                        style: ({ isActive: i }) => ({
                          color: i ? "white" : "gray",
                        }),
                        children: [
                          l.jsx("i", { className: "bi bi-person-gear px-1" }),
                          "Staff",
                        ],
                      })
                    : l.jsx(l.Fragment, {})
                  : l.jsx(l.Fragment, {}),
                l.jsxs(It, {
                  to: "/cart",
                  className: "px-3 text-decoration-none align-self-center",
                  style: ({ isActive: i }) => ({ color: i ? "white" : "gray" }),
                  children: [
                    l.jsx("i", { className: "bi bi-cart px-1" }),
                    "Cart",
                  ],
                }),
                Object.keys(n).length
                  ? l.jsxs(It, {
                      to: "/profile",
                      className: "text-decoration-none align-self-center",
                      style: ({ isActive: i }) => ({
                        color: i ? "white" : "gray",
                      }),
                      children: [
                        l.jsx("i", { className: "bi bi-person-fill px-1" }),
                        "User",
                      ],
                    })
                  : l.jsxs(It, {
                      to: "/login",
                      className: "text-decoration-none align-self-center",
                      style: ({ isActive: i }) => ({
                        color: i ? "white" : "gray",
                      }),
                      children: [
                        l.jsx("i", {
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
      l.jsx(hm, {}),
    ],
  });
}
function be({ pages: e = 0, page: t = 0, setPage: n = null }) {
  const r = {
    color: "black",
    border: "1px solid",
    borderRadius: "3px",
    margin: "1px",
    fontWeight: "500",
  };
  return l.jsxs("div", {
    className: "mt-auto",
    children: [
      e
        ? l.jsx(O, {
            className: "justify-content-center",
            children: l.jsx(E, {
              md: "auto",
              children: l.jsxs(vo, {
                children: [
                  l.jsx(vo.Prev, {
                    linkStyle: r,
                    onClick: () => {
                      t > 1 && n(t - 1);
                    },
                  }),
                  [...Array(e).keys()].map((s) =>
                    l.jsx(
                      vo.Item,
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
                  l.jsx(vo.Next, {
                    linkStyle: r,
                    onClick: () => {
                      t < e && n(t + 1);
                    },
                  }),
                ],
              }),
            }),
          })
        : l.jsx(O, {}),
      l.jsx(O, {
        children: l.jsx(E, {
          className: "p-2 bg-dark text-center text-white",
          children: "~ Copyright © 2024 ~",
        }),
      }),
    ],
  });
}
function Zr() {
  return l.jsxs("div", {
    className: "vh-100",
    children: [
      l.jsx(Nn, {}),
      l.jsxs("div", {
        className:
          "h-75 d-flex flex-column align-items-center justify-content-center",
        children: [
          l.jsx("h1", { children: "Oops!" }),
          l.jsx("p", { children: "Sorry, an unexpected error has occurred." }),
          l.jsxs("section", {
            className: "text-secondary",
            children: [
              "Go Back to",
              l.jsx(Vs, {
                className: "px-1 text-secondary",
                to: "/",
                children: "home",
              }),
            ],
          }),
        ],
      }),
      l.jsx(be, {}),
    ],
  });
}
function OE() {
  return l.jsxs("div", {
    className: "vh-100",
    children: [
      l.jsx(Nn, {}),
      l.jsxs("div", {
        className:
          "h-75 d-flex flex-column align-items-center justify-content-center",
        children: [
          l.jsx("h1", { children: "404! Not Found" }),
          l.jsx("p", { children: "What you are looking is not here!" }),
          l.jsxs("section", {
            className: "text-secondary",
            children: [
              "Go Back to",
              l.jsx(Vs, {
                className: "px-1 text-secondary",
                to: "/",
                children: "home",
              }),
            ],
          }),
        ],
      }),
      l.jsx(be, {}),
    ],
  });
}
function TE({ product: e }) {
  const t = it();
  return l.jsxs(O, {
    className: "py-2 justify-content-center border shadow-sm rounded",
    children: [
      l.jsx(O, {
        className: "my-2 text-center",
        children: l.jsx(Vs, {
          className: "text-dark text-decoration-none",
          to: `product/${e.Id}`,
          children: l.jsx(Ks, { src: K + e.image, width: "50%", fluid: !0 }),
        }),
      }),
      l.jsx(O, {
        as: "h5",
        className: "my-2 justify-content-center",
        children: e.name,
      }),
      l.jsxs(O, {
        className: "mb-2",
        children: [
          l.jsx(E, {
            md: 8,
            children: l.jsx("i", {
              className: "bi bi-currency-dollar",
              children: e.price,
            }),
          }),
          l.jsx(E, {
            md: 4,
            children: l.jsx("i", {
              className: "bi bi-star-half",
              children: e.rating,
            }),
          }),
        ],
      }),
      l.jsx(O, {
        className: "mb-2",
        children: l.jsx(G, {
          variant: "dark",
          onClick: () => t(`/product/${e.Id}`),
          children: "Details",
        }),
      }),
    ],
  });
}
function J({ variant: e, message: t }) {
  return l.jsx(uj, { variant: e, children: t });
}
function Oe() {
  return l.jsxs("div", {
    className: "p-2 d-flex flex-row justify-content-center",
    children: [l.jsx(py, { animation: "border" }), ";"],
  });
}
function IE() {
  const e = xe(),
    {
      products: t,
      pages: n,
      loading: r,
      success: s,
      error: o,
    } = H((u) => u.product),
    [i, a] = h.useState(1);
  return (
    h.useEffect(
      () => (
        e(Ic(i, "ASC", "Id")),
        () => {
          e(Vn());
        }
      ),
      [i]
    ),
    l.jsxs("div", {
      className: "d-flex flex-column min-vh-100",
      children: [
        l.jsx(Nn, {}),
        l.jsx("h1", {
          className: "text-center text-dark border py-2",
          children: "Product List",
        }),
        l.jsx(O, {
          className: "p-3",
          children: o
            ? l.jsx(J, { variant: "danger", message: "Error loading products" })
            : r
            ? l.jsx(Oe, {})
            : s
            ? Object.keys(t).length
              ? t.map((u) =>
                  l.jsx(
                    E,
                    {
                      className: "p-3 d-flex",
                      sm: 3,
                      md: 2,
                      children: l.jsx(TE, { product: u }),
                    },
                    u.Id
                  )
                )
              : l.jsx(J, {
                  className: "p-3",
                  variant: "warning",
                  message: "No products to show",
                })
            : l.jsx(O, {}),
        }),
        l.jsx(be, { pages: n, page: i, setPage: a }),
      ],
    })
  );
}
const Zy = Ar({
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
    Initial: eg,
    Loading: qs,
    Success: du,
    ListProducts: LE,
    Update: $E,
    Delete: DE,
    Error: vn,
  } = Zy.actions,
  FE = Zy.reducer,
  AE = (e) => async (t) => {
    const n = `${K}/cart/`;
    try {
      t(qs());
      const r = await D.post(n, JSON.stringify(e), {
        headers: { "content-type": "application/json" },
      });
      r.status === 201 || r.status === 200 ? t(du()) : t(vn());
    } catch {
      t(vn());
    }
  },
  ME = (e, t) => async (n) => {
    const r = `${K}/cart/${e}/?page=${t}`;
    try {
      n(qs());
      const s = await D.get(r);
      s.status === 200 ? n(LE(s.data)) : n(vn());
    } catch {
      n(vn());
    }
  },
  UE = (e, t) => async (n) => {
    const r = `${K}/cart/${e}/`;
    try {
      n(qs()),
        (
          await D.patch(r, JSON.stringify(t), {
            headers: { "content-type": "application/json" },
          })
        ).status === 200 && n($E({ Id: e, cartItem: t }));
    } catch {
      n(vn());
    }
  },
  zE = (e) => async (t) => {
    const n = `${K}/cart/${e}`;
    try {
      t(qs()), (await D.delete(n)).status === 200 && t(DE(e));
    } catch {
      t(vn());
    }
  },
  bE = (e) => async (t) => {
    const n = `${K}/cart-delete/${e}/`;
    try {
      t(qs()), (await D.delete(n)).status === 200 ? t(du()) : t(vn());
    } catch {
      t(vn());
    }
  },
  tg = Ar({
    name: "comment",
    initialState: {
      comments: [],
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
      ListComments: (e, t) => {
        (e.comments = t.payload.comments),
          (e.pages = t.payload.pages),
          (e.loading = !1),
          (e.success = !0),
          (e.error = !1);
      },
      Delete: (e, t) => {
        (e.comments = e.comments.filter((n) => n._id !== t.payload)),
          (e.loading = !1),
          (e.success = !0),
          (e.error = !1);
      },
    },
  }),
  {
    Initial: bN,
    Loading: ng,
    Success: BE,
    Error: rg,
    ListComments: WE,
    Delete: BN,
  } = tg.actions,
  HE = tg.reducer,
  VE = (e, t) => async (n) => {
    const r = `${K}/comment/${t}`;
    try {
      n(ng()),
        (
          await D.post(r, e, {
            headers: { "content-type": "application/json" },
          })
        ).status === 201 && n(BE());
    } catch {
      n(rg());
    }
  },
  KE = (e, t) => async (n) => {
    const r = `${K}/comment/${e}?page=${t}`;
    try {
      n(ng());
      const s = await D.get(r);
      s.status === 202 && n(WE(s.data));
    } catch {
      n(rg());
    }
  },
  ve = [];
for (let e = 0; e < 256; ++e) ve.push((e + 256).toString(16).slice(1));
function GE(e, t = 0) {
  return (
    ve[e[t + 0]] +
    ve[e[t + 1]] +
    ve[e[t + 2]] +
    ve[e[t + 3]] +
    "-" +
    ve[e[t + 4]] +
    ve[e[t + 5]] +
    "-" +
    ve[e[t + 6]] +
    ve[e[t + 7]] +
    "-" +
    ve[e[t + 8]] +
    ve[e[t + 9]] +
    "-" +
    ve[e[t + 10]] +
    ve[e[t + 11]] +
    ve[e[t + 12]] +
    ve[e[t + 13]] +
    ve[e[t + 14]] +
    ve[e[t + 15]]
  ).toLowerCase();
}
let Jl;
const QE = new Uint8Array(16);
function JE() {
  if (!Jl) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error(
        "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
      );
    Jl = crypto.getRandomValues.bind(crypto);
  }
  return Jl(QE);
}
const qE =
    typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto),
  Uf = { randomUUID: qE };
function XE(e, t, n) {
  if (Uf.randomUUID && !t && !e) return Uf.randomUUID();
  e = e || {};
  const r = e.random || (e.rng || JE)();
  return (r[6] = (r[6] & 15) | 64), (r[8] = (r[8] & 63) | 128), GE(r);
}
function Xs({ rating: e = 0, setRating: t = null }) {
  return l.jsx(O, {
    children: l.jsxs(E, {
      children: [
        l.jsx("i", {
          onClick: () => t(1),
          className: e >= 1 ? "px-1 bi bi-star-fill" : "px-1 bi bi-star",
        }),
        l.jsx("i", {
          onClick: () => t(2),
          className: e >= 2 ? "px-1 bi bi-star-fill" : "px-1 bi bi-star",
        }),
        l.jsx("i", {
          onClick: () => t(3),
          className: e >= 3 ? "px-1 bi bi-star-fill" : "px-1 bi bi-star",
        }),
        l.jsx("i", {
          onClick: () => t(4),
          className: e >= 4 ? "px-1 bi bi-star-fill" : "px-1 bi bi-star",
        }),
        l.jsx("i", {
          onClick: () => t(5),
          className: e >= 5 ? "px-1 bi bi-star-fill" : "px-1 bi bi-star",
        }),
      ],
    }),
  });
}
function YE({ productId: e, setToggle: t = null, toggle: n = null }) {
  const r = xe(),
    { current_user: s } = H((f) => f.user),
    { product: o } = H((f) => f.product),
    [i, a] = h.useState(""),
    [u, c] = h.useState(0);
  function d() {
    r(
      VE(
        {
          _id: XE().toString(),
          userId: s.Id,
          userName: s.name,
          productId: e,
          message: i,
          rating: u,
          date: new Date().toISOString().split("T")[0],
        },
        e
      )
    ),
      r(
        Yy(e, {
          rating: ((o.rating * o.rate_count + u) / (o.rate_count + 1)).toFixed(
            2
          ),
          rate_count: o.rate_count + 1,
        })
      ),
      a(""),
      c(0),
      t && t(n);
  }
  return l.jsx(z, {
    className: "p-2",
    children: l.jsx(z.Item, {
      children: l.jsxs(O, {
        className: "p-2 justify-content-center",
        children: [
          l.jsxs(E, {
            md: 10,
            children: [
              l.jsx(O, {
                children: l.jsx(_, {
                  children: l.jsxs(_.Group, {
                    className: "p-2",
                    children: [
                      l.jsx(_.Label, {
                        as: "h6",
                        className: "fw-bold",
                        children: "Write a review here:",
                      }),
                      l.jsx(_.Control, {
                        as: "textarea",
                        rows: 2,
                        placeholder: "Nice and Attractive",
                        value: i,
                        onChange: (f) => a(f.target.value),
                      }),
                    ],
                  }),
                }),
              }),
              l.jsxs(O, {
                children: [
                  l.jsx(E, {
                    as: "h6",
                    md: 3,
                    children: "Give a rating where:",
                  }),
                  l.jsx(E, {
                    children: l.jsx(Xs, { rating: u, setRating: c }),
                  }),
                ],
              }),
            ],
          }),
          l.jsx(E, {
            className: "d-flex align-items-center",
            children: l.jsx(G, {
              variant: "dark",
              onClick: () => d(),
              children: "Submit",
            }),
          }),
        ],
      }),
    }),
  });
}
function ZE({ comments: e }) {
  return l.jsxs(O, {
    className: "px-3",
    children: [
      l.jsx("hr", {}),
      l.jsx("h2", { className: "pb-2 px-3", children: "All reviews" }),
      e.length
        ? l.jsx(l.Fragment, {})
        : l.jsx(J, { variant: "warning", message: "No reviews yet!" }),
      e.map((t) =>
        l.jsx(
          z,
          {
            className: "px-2 pb-2",
            children: l.jsx(z.Item, {
              children: l.jsxs(O, {
                className: "px-2",
                children: [
                  l.jsxs(E, {
                    md: 2,
                    children: [
                      l.jsx(O, { children: t.userName }),
                      l.jsx(O, { children: t.date }),
                    ],
                  }),
                  l.jsxs(E, {
                    md: 8,
                    children: [
                      l.jsx(O, { children: l.jsx(Xs, { rating: t.rating }) }),
                      l.jsx(O, { children: t.message }),
                    ],
                  }),
                ],
              }),
            }),
          },
          t._id
        )
      ),
      l.jsx("hr", { className: "p-2" }),
    ],
  });
}
function eN() {
  const { Id: e } = z0(),
    t = xe(),
    { current_user: n } = H((m) => m.user),
    { product: r } = H((m) => m.product),
    { loading: s, success: o, error: i } = H((m) => m.cart),
    { comments: a, pages: u } = H((m) => m.comment),
    [c, d] = h.useState(1),
    [f, p] = h.useState(!0);
  function v() {
    Object.keys(n).length &&
      t(
        AE({
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
    h.useEffect(() => (t(_E(e)), t(KE(e, c)), () => t(eg())), [c, f]),
    l.jsxs("div", {
      className: "d-flex flex-column min-vh-100",
      children: [
        l.jsx(Nn, {}),
        l.jsxs(O, {
          className: "p-3",
          children: [
            l.jsx(E, {
              className: "p-4 align-items-center",
              md: 4,
              lg: 6,
              children: l.jsx(Ks, { src: K + r.image, fluid: !0, rounded: !0 }),
            }),
            l.jsxs(E, {
              className: "p-4",
              md: 4,
              lg: 6,
              children: [
                l.jsx(O, {
                  children: l.jsx(xn, {
                    striped: !0,
                    bordered: !0,
                    children: l.jsxs("tbody", {
                      children: [
                        l.jsx("tr", {
                          children: l.jsx("td", {
                            children: l.jsx("h4", { children: r.name }),
                          }),
                        }),
                        l.jsx("tr", {
                          children: l.jsx("td", {
                            children: l.jsx("strong", {
                              children: "Price : " + r.price,
                            }),
                          }),
                        }),
                        l.jsx("tr", {
                          children: l.jsx("td", {
                            children: l.jsx("section", {
                              children: r.description,
                            }),
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
                l.jsx(O, {
                  children: l.jsx(xn, {
                    striped: !0,
                    bordered: !0,
                    children: l.jsxs("tbody", {
                      children: [
                        l.jsxs("tr", {
                          children: [
                            l.jsx("td", { children: "Category" }),
                            l.jsx("td", { children: r.category }),
                          ],
                        }),
                        l.jsxs("tr", {
                          children: [
                            l.jsx("td", { children: "Brand" }),
                            l.jsx("td", { children: r.brand }),
                          ],
                        }),
                        l.jsxs("tr", {
                          children: [
                            l.jsx("td", { children: "Price" }),
                            l.jsx("td", { children: r.price }),
                          ],
                        }),
                        l.jsxs("tr", {
                          children: [
                            l.jsx("td", { children: "In Stock" }),
                            l.jsx("td", { children: r.countInStock }),
                          ],
                        }),
                        l.jsxs("tr", {
                          children: [
                            l.jsx("td", { children: "Rating" }),
                            l.jsxs("td", {
                              className: "d-flex flex-row",
                              children: [
                                l.jsx(Xs, { rating: r.rating }),
                                l.jsxs("p", {
                                  className: "px-2 text-secondary",
                                  children: [
                                    "(",
                                    r.rating,
                                    "/",
                                    r.rate_count,
                                    ")",
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        l.jsx("tr", {
                          children: l.jsx("td", {
                            colSpan: 2,
                            children: l.jsx(Dr, {
                              className: "d-flex",
                              children: l.jsx(G, {
                                variant: "dark",
                                onClick: () => v(),
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
                  ? i
                    ? l.jsx(J, {
                        variant: "danger",
                        message: "Error loading product",
                      })
                    : s
                    ? l.jsx(Oe, {})
                    : o
                    ? l.jsx(J, {
                        variant: "success",
                        message: "Successfully added product to cart",
                      })
                    : l.jsx(l.Fragment, {})
                  : l.jsx(J, {
                      variant: "warning",
                      message: "Login to Add items to cart",
                    }),
              ],
            }),
          ],
        }),
        Object.keys(n).length
          ? l.jsx(YE, { productId: e, setToggle: p, toggle: !f })
          : l.jsx(l.Fragment, {}),
        l.jsx(ZE, { comments: a }),
        l.jsx(be, { pages: u, page: c, setPage: d }),
      ],
    })
  );
}
function tN() {
  const e = it(),
    t = xe(),
    { current_user: n } = H((p) => p.user),
    {
      product_list: r,
      products: s,
      items: o,
      price: i,
      pages: a,
      loading: u,
      error: c,
    } = H((p) => p.cart),
    [d, f] = h.useState(1);
  return (
    h.useEffect(() => (t(ME(n.Id, d)), () => t(eg())), [d]),
    Object.keys(n).length
      ? l.jsxs("div", {
          className: "d-flex flex-column min-vh-100",
          children: [
            l.jsx(Nn, {}),
            l.jsxs(O, {
              className: "p-3",
              children: [
                l.jsxs(E, {
                  md: 8,
                  children: [
                    l.jsx("h2", {
                      className: "py-2",
                      children: "Shopping Cart",
                    }),
                    r.length
                      ? l.jsx(z, {
                          children: r.map((p) =>
                            l.jsxs(
                              z.Item,
                              {
                                children: [
                                  l.jsxs(O, {
                                    children: [
                                      l.jsx(E, {
                                        className: "d-flex align-items-center",
                                        md: 2,
                                        children: l.jsx(Ks, {
                                          src: K + p.product.image,
                                          width: "50%",
                                          fluid: !0,
                                          rounded: !0,
                                        }),
                                      }),
                                      l.jsx(E, {
                                        className: "d-flex align-items-center",
                                        md: 2,
                                        children: l.jsx("strong", {
                                          children: p.product.name,
                                        }),
                                      }),
                                      l.jsx(E, {
                                        className: "d-flex align-items-center",
                                        md: 2,
                                        children: p.product.price,
                                      }),
                                      l.jsx(E, {
                                        className: "d-flex align-items-center",
                                        md: 2,
                                        children: l.jsx(_.Control, {
                                          as: "select",
                                          value: p.items,
                                          onChange: (v) => {
                                            t(
                                              UE(p.Id, {
                                                items: v.target.value,
                                              })
                                            );
                                          },
                                          children: [
                                            ...Array(
                                              p.product.countInStock
                                            ).keys(),
                                          ].map((v) =>
                                            l.jsx(
                                              "option",
                                              { value: v + 1, children: v + 1 },
                                              v + 1
                                            )
                                          ),
                                        }),
                                      }),
                                      l.jsx(E, {
                                        className: "d-flex align-items-center",
                                        md: 2,
                                        children:
                                          "Total : " +
                                          p.items * p.product.price,
                                      }),
                                      l.jsx(E, {
                                        className:
                                          "d-flex justify-content-center align-items-center",
                                        md: 2,
                                        children: l.jsx(G, {
                                          variant: "danger",
                                          onClick: () => t(zE(p.Id, p.userId)),
                                          children: "Delete",
                                        }),
                                      }),
                                    ],
                                  }),
                                  c
                                    ? l.jsx(J, {
                                        variant: "danger",
                                        message: "Couldn't add to cart",
                                      })
                                    : u
                                    ? l.jsx(Oe, {})
                                    : l.jsx(l.Fragment, {}),
                                ],
                              },
                              p.Id
                            )
                          ),
                        })
                      : l.jsx(J, {
                          variant: "warning",
                          message: "Cart is empty",
                        }),
                  ],
                }),
                l.jsxs(E, {
                  md: 4,
                  children: [
                    l.jsxs(O, {
                      className: "px-2",
                      children: [
                        l.jsx("h2", { className: "py-2", children: "Summary" }),
                        l.jsx(xn, {
                          striped: !0,
                          bordered: !0,
                          children: l.jsxs("tbody", {
                            children: [
                              l.jsxs("tr", {
                                children: [
                                  l.jsx("td", { children: "Total Product" }),
                                  l.jsx("td", { children: s }),
                                ],
                              }),
                              l.jsxs("tr", {
                                children: [
                                  l.jsx("td", { children: "Total Items" }),
                                  l.jsx("td", { children: o }),
                                ],
                              }),
                              l.jsxs("tr", {
                                children: [
                                  l.jsx("td", { children: "Total Price" }),
                                  l.jsx("td", { children: i }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    l.jsx(O, {
                      className: "px-2",
                      children: l.jsx(G, {
                        variant: "dark",
                        onClick: () => {
                          i && e("/order");
                        },
                        children: "Checkout",
                      }),
                    }),
                  ],
                }),
              ],
            }),
            l.jsx(be, { pages: a, page: d, setPage: f }),
          ],
        })
      : l.jsx(me, { to: "/login" })
  );
}
const sg = Ar({
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
    Initial: Ms,
    Loading: Ys,
    Success: WN,
    Error: br,
    ToggleIsShown: HN,
    CurrentOrder: nN,
    CurrentOrderState: rN,
    ListOrders: og,
    Delete: ig,
  } = sg.actions,
  sN = sg.reducer,
  oN = (e) => async (t) => {
    const n = `${K}/orders/`;
    try {
      t(Ys());
      const r = await D.post(n, JSON.stringify(e), {
        headers: { "content-type": "application/json" },
      });
      r.status === 201 && t(nN(r.data.Id));
    } catch {
      t(br());
    }
  },
  lg = (e, t) => async (n) => {
    const r = `${K}/orders/?page=${e}&status=${t}`;
    try {
      n(Ys());
      const s = await D.get(r);
      s.status === 200 && n(og(s.data));
    } catch {
      n(br());
    }
  },
  iN = (e, t) => async (n) => {
    const r = `${K}/orders/${e}/?page=${t}`;
    try {
      n(Ys());
      const s = await D.get(r);
      s.status === 200 && n(og(s.data));
    } catch {
      n(br());
    }
  },
  lN = (e) => async (t) => {
    const n = `${K}/orders/pending/${e}/`;
    try {
      const r = await D.get(n);
      r.status === 200 && t(rN(r.data.pending));
    } catch {
      t(br());
    }
  },
  aN = (e) => async (t) => {
    const n = `${K}/orders/pending/${e}/`;
    try {
      t(Ys()),
        (
          await D.patch(n, JSON.stringify({ pending: !1 }), {
            headers: { "content-type": "application/json" },
          })
        ).status === 200 && t(ig(e));
    } catch {
      t(br());
    }
  },
  uN = (e) => async (t) => {
    const n = `${K}/orders/pending/${e}`;
    try {
      t(Ys()), (await D.delete(n)).status === 200 && t(ig(e));
    } catch {
      t(br());
    }
  },
  ag = Ar({
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
    Initial: cN,
    Loading: ug,
    Success: dN,
    Error: cg,
    ListProducts: fN,
  } = ag.actions,
  pN = ag.reducer,
  hN = (e) => async (t) => {
    const n = `${K}/summary/`;
    try {
      t(ug()),
        (
          await D.post(n, JSON.stringify(e), {
            headers: { "content-type": "application/json" },
          })
        ).status === 201 && t(dN());
    } catch {
      t(cg());
    }
  },
  mN = (e, t) => async (n) => {
    const r = `${K}/summary/?page=${e}&sort=${t}`;
    try {
      n(ug());
      const s = await D.get(r);
      s.status === 202 && n(fN(s.data));
    } catch {
      n(cg());
    }
  };
function yN() {
  const e = xe(),
    t = it(),
    { current_user: n } = H((w) => w.user),
    {
      loading: r,
      success: s,
      error: o,
      order_id: i,
      pending: a,
    } = H((w) => w.order),
    { stored_list: u, products: c, items: d, price: f } = H((w) => w.cart),
    [p, v] = h.useState(!1),
    [m, S] = h.useState(!1),
    [j, x] = h.useState(!1);
  function g() {
    if (!m) {
      let w = [];
      u.map((C) => w.push([C.productId, C.items])),
        e(
          oN({
            products: c,
            items: d,
            price: f + 40,
            userId: n.Id,
            method: "bkash",
            pending: !0,
            product_list: w,
          })
        ),
        v(!0);
    }
  }
  function y() {
    a || (x(!0), setTimeout(() => t("/lastpage"), 2e3));
  }
  return (
    h.useEffect(
      () => (
        p &&
          s &&
          (S(!0),
          setTimeout(() => {
            e(Ms()), e(bE(n.Id));
          }, 1500)),
        () => e(Ms())
      ),
      [p, s]
    ),
    h.useEffect(() => {
      const w = setInterval(() => {
        m && a && e(lN(i));
      }, 1e3);
      return a || clearInterval(w), () => clearInterval(w);
    }, [a, m]),
    h.useEffect(() => {
      j &&
        u.map((w) => {
          e(
            Yy(w.productId, { countInStock: w.product.countInStock - w.items })
          ),
            e(
              hN({
                _id: w.productId,
                product_name: w.product.name,
                product_price: w.product.price,
                items: w.items,
                rating: w.product.rating,
                date: new Date().toISOString().split("T")[0],
              })
            );
        });
    }, [j]),
    Object.keys(n).length
      ? l.jsxs("div", {
          className: "d-flex flex-column min-vh-100",
          children: [
            l.jsx(Nn, {}),
            l.jsx("h1", { className: "py-2 text-center", children: "ORDER" }),
            l.jsxs(O, {
              className: "px-3",
              children: [
                l.jsx(E, {
                  md: 8,
                  children: l.jsxs(z, {
                    children: [
                      l.jsx(z.Item, {
                        children: l.jsx("h2", { children: "Details:" }),
                      }),
                      l.jsxs(z.Item, {
                        children: [
                          l.jsx("p", { children: "Name : " + n.name }),
                          l.jsx("p", { children: "Email : " + n.email }),
                          l.jsx("p", {
                            children: `Address : ${n.city} | ${n.street} | ${n.zip_code}`,
                          }),
                        ],
                      }),
                      l.jsx(z.Item, {
                        children: l.jsx("h2", { children: "Payment Method:" }),
                      }),
                      l.jsx(z.Item, {
                        children: l.jsx("p", { children: "Method : Bkash" }),
                      }),
                      l.jsx(z.Item, {
                        children: l.jsx("h2", { children: "Ordered Items" }),
                      }),
                      u.map((w) =>
                        l.jsx(
                          z.Item,
                          {
                            children: l.jsxs(O, {
                              children: [
                                l.jsx(E, {
                                  md: 4,
                                  children: `Product: ${w.product.name}`,
                                }),
                                l.jsx(E, {
                                  md: 4,
                                  children: `Price : ${w.product.price}`,
                                }),
                                l.jsx(E, {
                                  md: 4,
                                  children: `Quantity : ${w.items}`,
                                }),
                              ],
                            }),
                          },
                          w.Id
                        )
                      ),
                    ],
                  }),
                }),
                l.jsxs(E, {
                  md: 4,
                  children: [
                    l.jsxs(xn, {
                      striped: !0,
                      bordered: !0,
                      children: [
                        l.jsx("thead", {
                          children: l.jsx("tr", {
                            children: l.jsx("th", {
                              colSpan: 2,
                              children: l.jsx("h2", {
                                className: "py-2",
                                children: "Order Summary",
                              }),
                            }),
                          }),
                        }),
                        l.jsxs("tbody", {
                          children: [
                            l.jsxs("tr", {
                              children: [
                                l.jsx("td", { children: "Total Product" }),
                                l.jsx("td", { children: c }),
                              ],
                            }),
                            l.jsxs("tr", {
                              children: [
                                l.jsx("td", { children: "Total Items" }),
                                l.jsx("td", { children: d }),
                              ],
                            }),
                            l.jsxs("tr", {
                              children: [
                                l.jsx("td", { children: "Price" }),
                                l.jsx("td", { children: f }),
                              ],
                            }),
                            l.jsxs("tr", {
                              children: [
                                l.jsx("td", { children: "Delivery Cost" }),
                                l.jsx("td", { children: d ? 40 : 0 }),
                              ],
                            }),
                            l.jsxs("tr", {
                              children: [
                                l.jsx("td", { children: "Total Cost" }),
                                l.jsx("td", { children: f ? f + 40 : 0 }),
                              ],
                            }),
                            l.jsx("tr", {
                              children: l.jsx("td", {
                                colSpan: 2,
                                children: l.jsx(Dr, {
                                  className: "d-flex",
                                  children: m
                                    ? l.jsx(G, {
                                        disabled: j,
                                        variant: a ? "warning" : "success",
                                        onClick: () => y(),
                                        children: a ? "Processing" : "Payment",
                                      })
                                    : l.jsx(G, {
                                        variant: "dark",
                                        onClick: () => g(),
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
                      ? l.jsx(J, {
                          variant: "success",
                          message: "Payment Complete!!!",
                        })
                      : o
                      ? l.jsx(J, {
                          variant: "danger",
                          message: "Error on dealing with order",
                        })
                      : r
                      ? l.jsx(Oe, {})
                      : s
                      ? l.jsx(J, {
                          variant: "success",
                          message: "Successfully ordered your items",
                        })
                      : l.jsx(l.Fragment, {}),
                  ],
                }),
              ],
            }),
            l.jsx(be, {}),
          ],
        })
      : l.jsx(me, { to: "/login" })
  );
}
const dg = Ar({
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
    Loading: qn,
    Success: gN,
    CurrentUser: $c,
    RemoveUser: xN,
    ListUser: fg,
    Delete: vN,
    Error: jn,
  } = dg.actions,
  jN = dg.reducer,
  wN = (e) => async (t) => {
    const n = `${K}/login/`;
    try {
      t(qn());
      const r = await D.post(n, JSON.stringify(e), {
        headers: { "content-type": "application/json" },
      });
      r.status === 200 ? t($c(r.data)) : t(jn());
    } catch {
      t(jn());
    }
  },
  SN = (e) => async (t) => {
    const n = `${K}/users/`;
    try {
      t(qn());
      const r = await D.post(n, JSON.stringify(e), {
        headers: { "content-type": "application/json" },
      });
      r.status === 201 && t($c(r.data));
    } catch {
      t(jn());
    }
  },
  EN = (e) => async (t) => {
    const n = `${K}/users/?page=${e}`;
    try {
      t(qn());
      const r = await D.get(n);
      r.status === 200 && t(fg(r.data));
    } catch {
      t(jn());
    }
  },
  pg = (e, t) => async (n) => {
    const r = `${K}/users/?search=${e}&page=${t}`;
    try {
      n(qn());
      const s = await D.get(r);
      s.status === 200 && n(fg(s.data));
    } catch {
      n(jn());
    }
  },
  zf = (e) => async (t) => {
    const n = `${K}/users/${e.Id}/`;
    try {
      t(qn());
      const r = await D.patch(n, JSON.stringify(e), {
        headers: { "content-type": "application/json" },
      });
      r.status === 200 && t($c(r.data));
    } catch {
      t(jn());
    }
  },
  NN = (e) => async (t) => {
    const n = `${K}/users/${e.Id}/`;
    try {
      t(qn()),
        (
          await D.patch(n, JSON.stringify(e), {
            headers: { "content-type": "application/json" },
          })
        ).status === 200 && t(gN());
    } catch {
      t(jn());
    }
  },
  CN = (e) => async (t) => {
    const n = `${K}/users/${e}`;
    try {
      t(qn()), (await D.delete(n)).status === 200 && t(vN(e));
    } catch {
      t(jn());
    }
  };
function kN({ isShown: e, order: t }) {
  const n = it();
  return l.jsx(O, {
    className: "p-3",
    hidden: e,
    children: l.jsx(z, {
      children: t.product_list.map((r) =>
        l.jsx(
          z.Item,
          {
            children: l.jsxs(O, {
              className: "p-2",
              children: [
                l.jsx(E, {
                  md: 2,
                  children: l.jsx(Ks, {
                    src: K + r.image,
                    width: "50%",
                    fluid: !0,
                  }),
                }),
                l.jsx(E, {
                  md: 2,
                  className: "text-center",
                  children: t.user.name,
                }),
                l.jsx(E, { md: 2, className: "text-center", children: r.name }),
                l.jsx(E, {
                  md: 2,
                  className: "text-center",
                  children: `${t.user.city} - ${t.user.street}`,
                }),
                l.jsx(E, {
                  md: 1,
                  className: "text-center",
                  children: r.price,
                }),
                l.jsx(E, {
                  md: 1,
                  className: "text-center",
                  children: r.items,
                }),
                l.jsx(E, {
                  md: 1,
                  className: "text-center",
                  children: l.jsx(G, {
                    onClick: () => n(`/product/${r.Id}`),
                    variant: "dark",
                    children: "Review",
                  }),
                }),
              ],
            }),
          },
          r.Id
        )
      ),
    }),
  });
}
function Dc({ type: e, order: t }) {
  const n = xe(),
    [r, s] = h.useState(!0);
  return l.jsxs(
    z.Item,
    {
      children: [
        l.jsxs(O, {
          onClick: () => s(!r),
          children: [
            l.jsx(E, { className: "text-center", children: t.Id }),
            l.jsx(E, {
              hidden: e === "user",
              className: "text-center",
              children: t.userId,
            }),
            l.jsx(E, { className: "text-center", children: t.date }),
            l.jsx(E, { className: "text-center", children: t.products }),
            l.jsx(E, { className: "text-center", children: t.items }),
            l.jsx(E, { className: "text-center", children: t.price }),
            l.jsx(E, {
              hidden: e !== "staff",
              onClick: () => {
                n(aN(t.Id));
              },
              className: "text-center text-success",
              children: "Deliver",
            }),
            l.jsx(E, {
              hidden: e !== "staff",
              onClick: () => {
                n(uN(t.Id));
              },
              className: "text-center text-danger",
              children: "Delete",
            }),
            l.jsx(E, {
              hidden: e !== "admin",
              className: "text-center",
              children: t.method,
            }),
            l.jsx(E, {
              hidden: e !== "admin",
              className: t.pending
                ? "text-center text-danger"
                : "text-center text-success",
              children: t.pending ? "True" : "False",
            }),
          ],
        }),
        l.jsx(kN, { isShown: r, order: t }),
      ],
    },
    t.Id
  );
}
function _N() {
  const e = xe(),
    { current_user: t } = H((v) => v.user),
    { orders: n, pages: r, loading: s, error: o } = H((v) => v.order),
    [i, a] = h.useState(1),
    [u, c] = h.useState({ name: t.name, email: t.email, address: t.address }),
    [d, f] = h.useState({ password: "", confirmPassword: "" });
  function p() {
    d.password === d.confirmPassword &&
      (d.password
        ? e(zf({ ...u, password: d.password, Id: t.Id }))
        : e(zf({ ...u, Id: t.Id })));
  }
  return (
    h.useEffect(() => (e(iN(t.Id, i)), () => e(Ms())), [i]),
    Object.keys(t).length
      ? l.jsxs("div", {
          className: "d-flex flex-column min-vh-100",
          children: [
            l.jsx(Nn, {}),
            l.jsxs(O, {
              className: "p-4",
              children: [
                l.jsxs(E, {
                  md: 4,
                  children: [
                    l.jsxs("section", {
                      className: "p-2 d-flex flex-row justify-content-between",
                      children: [
                        l.jsx("h1", { children: "User Profile" }),
                        l.jsx("span", {
                          children: l.jsx(G, {
                            variant: "dark",
                            onClick: () => e(xN()),
                            children: "Logout",
                          }),
                        }),
                      ],
                    }),
                    l.jsxs(_, {
                      className: "p-3 bg-light text-secondary",
                      onSubmit: (v) => v.preventDefault(),
                      children: [
                        l.jsxs(_.Group, {
                          as: O,
                          className: "mb-3",
                          controlId: "name",
                          children: [
                            l.jsx(_.Label, {
                              column: !0,
                              sm: "3",
                              className: "fw-bold",
                              children: "Name",
                            }),
                            l.jsx(E, {
                              sm: 9,
                              children: l.jsx(_.Control, {
                                plaintext: !0,
                                type: "text",
                                value: u.name,
                                onChange: (v) =>
                                  c({ ...u, name: v.target.value }),
                              }),
                            }),
                          ],
                        }),
                        l.jsxs(_.Group, {
                          as: O,
                          className: "mb-3",
                          controlId: "email",
                          children: [
                            l.jsx(_.Label, {
                              column: !0,
                              sm: "3",
                              className: "fw-bold",
                              children: "Email",
                            }),
                            l.jsx(E, {
                              sm: 9,
                              children: l.jsx(_.Control, {
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
                        l.jsxs(_.Group, {
                          as: O,
                          className: "mb-3",
                          controlId: "address",
                          children: [
                            l.jsx(_.Label, {
                              column: !0,
                              sm: "3",
                              className: "fw-bold",
                              children: "Address",
                            }),
                            l.jsx(E, {
                              sm: 9,
                              children: l.jsx(_.Control, {
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
                        l.jsxs(_.Group, {
                          className: "mb-3",
                          controlId: "password",
                          children: [
                            l.jsx(_.Label, {
                              className: "fw-bold",
                              children: "Password",
                            }),
                            l.jsx(_.Control, {
                              type: "password",
                              placeholder: "New Password",
                              value: d.password,
                              onChange: (v) =>
                                f({ ...d, password: v.target.value }),
                            }),
                          ],
                        }),
                        l.jsxs(_.Group, {
                          className: "mb-3",
                          controlId: "confirmPassword",
                          children: [
                            l.jsx(_.Label, {
                              className: "fw-bold",
                              children: "Confirm Password",
                            }),
                            l.jsx(_.Control, {
                              type: "password",
                              placeholder: "Confirm Password",
                              value: d.confirmPassword,
                              onChange: (v) =>
                                f({ ...d, confirmPassword: v.target.value }),
                            }),
                          ],
                        }),
                        l.jsx(Dr, {
                          className: "d-flex",
                          children: l.jsx(G, {
                            type: "submit",
                            variant: "dark",
                            onClick: p,
                            children: "Update",
                          }),
                        }),
                      ],
                    }),
                    o
                      ? l.jsx(J, {
                          variant: "danger",
                          message: "Couldn't update profile",
                        })
                      : s
                      ? l.jsx(Oe, {})
                      : l.jsx(l.Fragment, {}),
                  ],
                }),
                l.jsxs(E, {
                  md: 8,
                  children: [
                    l.jsx("h1", { className: "p-2", children: "My Orders" }),
                    s
                      ? l.jsx(Oe, {})
                      : o
                      ? l.jsx(J, {
                          variant: "danger",
                          message: "Error loading your orders",
                        })
                      : n.length
                      ? l.jsxs(z, {
                          children: [
                            l.jsxs(O, {
                              children: [
                                l.jsx(E, {
                                  className: "text-center",
                                  children: "ID",
                                }),
                                l.jsx(E, {
                                  className: "text-center",
                                  children: "Date",
                                }),
                                l.jsx(E, {
                                  className: "text-center",
                                  children: "Products",
                                }),
                                l.jsx(E, {
                                  className: "text-center",
                                  children: "Items",
                                }),
                                l.jsx(E, {
                                  className: "text-center",
                                  children: "Total",
                                }),
                              ],
                            }),
                            n.map((v) =>
                              l.jsx(Dc, { type: "user", order: v }, v.Id)
                            ),
                          ],
                        })
                      : l.jsx(J, {
                          variant: "warning",
                          message: "No products to show",
                        }),
                  ],
                }),
              ],
            }),
            l.jsx(be, { pages: r, page: i, setPage: a }),
          ],
        })
      : l.jsx(me, { to: "/" })
  );
}
function RN() {
  const e = it(),
    t = xe(),
    { current_user: n, loading: r, success: s, error: o } = H((d) => d.user),
    i = { email: "", password: "" },
    [a, u] = h.useState(i);
  function c() {
    t(wN({ ...a, password: a.password }));
  }
  return (
    h.useEffect(() => {
      s && e("/");
    }, [n]),
    l.jsxs(O, {
      className: "bg-light justify-content-center align-items-center vh-100",
      children: [
        l.jsx(E, {
          md: 1,
          className: "position-absolute top-0 start-0 py-2",
          children: l.jsx(G, {
            variant: "dark",
            onClick: () => (Object.keys(n).length ? e(-1) : e("/")),
            children: l.jsx("i", { className: "bi bi-arrow-left" }),
          }),
        }),
        l.jsxs(E, {
          className: "bg-white rounded shadow-lg",
          md: 4,
          children: [
            l.jsx("h1", { className: "text-center p-2", children: "Sign In" }),
            l.jsxs(_, {
              onSubmit: (d) => d.preventDefault(),
              children: [
                l.jsxs(_.Group, {
                  className: "p-3",
                  controlId: "formBasicEmail",
                  children: [
                    l.jsx(_.Label, {
                      className: "fw-bold",
                      children: "Email address",
                    }),
                    l.jsx(_.Control, {
                      required: !0,
                      type: "email",
                      placeholder: "Enter email",
                      value: a.email,
                      onChange: (d) => u({ ...a, email: d.target.value }),
                    }),
                  ],
                }),
                l.jsxs(_.Group, {
                  className: "p-3",
                  controlId: "formBasicPassword",
                  children: [
                    l.jsx(_.Label, {
                      className: "fw-bold",
                      children: "Password",
                    }),
                    l.jsx(_.Control, {
                      required: !0,
                      type: "password",
                      placeholder: "Password",
                      value: a.password,
                      onChange: (d) => u({ ...a, password: d.target.value }),
                    }),
                  ],
                }),
                l.jsx(Dr, {
                  className: "d-flex p-3",
                  children: l.jsx(G, {
                    variant: "dark",
                    type: "submit",
                    onClick: () => c(),
                    children: "Submit",
                  }),
                }),
              ],
            }),
            l.jsxs("section", {
              className: "p-3",
              children: [
                "Looking to",
                l.jsx(Vs, {
                  to: "/register",
                  className: "text-primary px-1",
                  children: "create an account",
                }),
                "?",
              ],
            }),
            l.jsx("section", {
              className: "p-2",
              children: o
                ? l.jsx(J, { variant: "danger", message: "Wrong Credentials" })
                : r
                ? l.jsx(Oe, {})
                : l.jsx(l.Fragment, {}),
            }),
          ],
        }),
      ],
    })
  );
}
function PN() {
  const e = it(),
    t = xe(),
    { current_user: n, loading: r, success: s, error: o } = H((d) => d.user),
    i = {
      name: "",
      email: "",
      country: "",
      city: "",
      street: "",
      zip_code: "",
      password: "",
    },
    [a, u] = h.useState(i);
  function c() {
    t(SN(a));
  }
  return (
    h.useEffect(() => {
      s && e("/");
    }, [n]),
    l.jsxs(O, {
      className: "bg-light justify-content-center align-items-center vh-100",
      children: [
        l.jsx(E, {
          md: 1,
          className: "position-absolute top-0 start-0 py-2",
          children: l.jsx(G, {
            variant: "dark",
            onClick: () => e(-1),
            children: l.jsx("i", { className: "bi bi-arrow-left" }),
          }),
        }),
        l.jsxs(E, {
          className: "bg-white rounded shadow-lg",
          md: 4,
          children: [
            l.jsx("h1", { className: "text-center p-2", children: "Sign Up" }),
            l.jsxs(_, {
              onSubmit: (d) => d.preventDefault(),
              children: [
                l.jsxs(_.Group, {
                  className: "p-2",
                  children: [
                    l.jsx(_.Label, { className: "fw-bold", children: "Name" }),
                    l.jsx(_.Control, {
                      required: !0,
                      type: "name",
                      placeholder: "Name",
                      value: a.name,
                      onChange: (d) => u({ ...a, name: d.target.value }),
                    }),
                  ],
                }),
                l.jsxs(_.Group, {
                  className: "p-2",
                  children: [
                    l.jsx(_.Label, {
                      className: "fw-bold",
                      children: "Email address",
                    }),
                    l.jsx(_.Control, {
                      required: !0,
                      type: "email",
                      placeholder: "Enter email",
                      value: a.email,
                      onChange: (d) => u({ ...a, email: d.target.value }),
                    }),
                  ],
                }),
                l.jsxs(O, {
                  className: "p-2",
                  children: [
                    l.jsxs(O, {
                      children: [
                        l.jsx(E, {
                          children: l.jsxs(_.Group, {
                            children: [
                              l.jsx(_.Label, {
                                className: "fw-bold",
                                children: "Country",
                              }),
                              l.jsx(_.Control, {
                                required: !0,
                                rows: 2,
                                placeholder: "Country",
                                value: a.country,
                                onChange: (d) =>
                                  u({ ...a, country: d.target.value }),
                              }),
                            ],
                          }),
                        }),
                        l.jsx(E, {
                          children: l.jsxs(_.Group, {
                            children: [
                              l.jsx(_.Label, {
                                className: "fw-bold",
                                children: "City",
                              }),
                              l.jsx(_.Control, {
                                required: !0,
                                rows: 2,
                                placeholder: "City",
                                value: a.city,
                                onChange: (d) =>
                                  u({ ...a, city: d.target.value }),
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    l.jsxs(O, {
                      children: [
                        l.jsx(E, {
                          children: l.jsxs(_.Group, {
                            children: [
                              l.jsx(_.Label, {
                                className: "fw-bold",
                                children: "Street",
                              }),
                              l.jsx(_.Control, {
                                required: !0,
                                rows: 2,
                                placeholder: "Street",
                                value: a.street,
                                onChange: (d) =>
                                  u({ ...a, street: d.target.value }),
                              }),
                            ],
                          }),
                        }),
                        l.jsx(E, {
                          children: l.jsxs(_.Group, {
                            children: [
                              l.jsx(_.Label, {
                                className: "fw-bold",
                                children: "Zip Code",
                              }),
                              l.jsx(_.Control, {
                                required: !0,
                                rows: 2,
                                placeholder: "Zip Code",
                                value: a.zip_code,
                                onChange: (d) =>
                                  u({ ...a, zip_code: d.target.value }),
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                l.jsxs(_.Group, {
                  className: "p-2",
                  children: [
                    l.jsx(_.Label, {
                      className: "fw-bold",
                      children: "Password",
                    }),
                    l.jsx(_.Control, {
                      required: !0,
                      type: "password",
                      placeholder: "Password",
                      value: a.password,
                      onChange: (d) => u({ ...a, password: d.target.value }),
                    }),
                  ],
                }),
                l.jsx(Dr, {
                  className: "d-flex p-3",
                  children: l.jsx(G, {
                    variant: "dark",
                    type: "submit",
                    onClick: () => c(),
                    children: "Submit",
                  }),
                }),
              ],
            }),
            r
              ? l.jsx(Oe, {})
              : o
              ? l.jsx(J, { variant: "danger", message: "Wrong info" })
              : l.jsx(l.Fragment, {}),
          ],
        }),
      ],
    })
  );
}
function ON() {
  const { current_user: e } = H((s) => s.user),
    { order_id: t } = H((s) => s.order),
    { stored_list: n, price: r } = H((s) => s.cart);
  return l.jsxs("div", {
    className: "d-flex flex-column min-vh-100",
    children: [
      l.jsx(Nn, {}),
      l.jsxs(O, {
        className: "p-3 justify-content-center align-items-center",
        children: [
          l.jsxs(E, {
            md: 5,
            className: "pt-3",
            children: [
              l.jsx(O, {
                as: "h1",
                className: "pb-2",
                children: "Thank You For Your Purchase!",
              }),
              l.jsx(O, {
                children: l.jsxs(z, {
                  children: [
                    l.jsx(z.Item, {
                      children: l.jsx(O, {
                        as: "h2",
                        className: "p-2",
                        children: "Billing Details",
                      }),
                    }),
                    l.jsx(z.Item, {
                      children: l.jsxs(O, {
                        children: [
                          l.jsx(E, { as: "h5", md: 8, children: "Name" }),
                          l.jsx(E, {
                            md: 4,
                            className: "text-end text-secondary",
                            children: e.name,
                          }),
                        ],
                      }),
                    }),
                    l.jsx(z.Item, {
                      children: l.jsxs(O, {
                        children: [
                          l.jsx(E, { as: "h5", md: 4, children: "Address" }),
                          l.jsx(E, {
                            md: 8,
                            className: "text-end text-secondary",
                            children: `${e.country} | ${e.city} | ${e.street}`,
                          }),
                        ],
                      }),
                    }),
                    l.jsx(z.Item, {
                      children: l.jsxs(O, {
                        children: [
                          l.jsx(E, { as: "h5", md: 8, children: "Email" }),
                          l.jsx(E, {
                            md: 4,
                            className: "text-end text-secondary",
                            children: e.email,
                          }),
                        ],
                      }),
                    }),
                    l.jsx(z.Item, {
                      children: l.jsxs(O, {
                        children: [
                          l.jsx(E, { as: "h5", md: 8, children: "Method" }),
                          l.jsx(E, {
                            md: 4,
                            className: "text-end text-secondary",
                            children: "Bkash",
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            ],
          }),
          l.jsx(E, {
            md: 6,
            className: "pt-4",
            children: l.jsxs(z, {
              children: [
                l.jsx(z.Item, {
                  children: l.jsx(O, {
                    as: "h2",
                    className: "p-2",
                    children: "Order Summary",
                  }),
                }),
                l.jsxs(z.Item, {
                  children: [
                    l.jsxs(O, {
                      className: "pt-2",
                      children: [
                        l.jsx(E, {
                          md: 4,
                          className: "text-start text-secondary",
                          children: "Date",
                        }),
                        l.jsx(E, {
                          md: 4,
                          className: "text-center text-secondary",
                          children: "Order Number",
                        }),
                        l.jsx(E, {
                          md: 4,
                          className: "text-end text-secondary",
                          children: "Payment Method",
                        }),
                      ],
                    }),
                    l.jsxs(O, {
                      className: "pb-2",
                      children: [
                        l.jsx(E, {
                          as: "h6",
                          md: 4,
                          className: "text-start",
                          children: new Date().toISOString().split("T")[0],
                        }),
                        l.jsx(E, {
                          as: "h6",
                          md: 4,
                          className: "text-center",
                          children: t,
                        }),
                        l.jsx(E, {
                          as: "h6",
                          md: 4,
                          className: "text-center",
                          children: "Bkash",
                        }),
                      ],
                    }),
                  ],
                }),
                l.jsx(z.Item, {
                  children: n.map((s) =>
                    l.jsxs(
                      O,
                      {
                        className: "pt-2",
                        children: [
                          l.jsxs(O, {
                            children: [
                              l.jsx(E, {
                                as: "h5",
                                md: 8,
                                children: s.product.name,
                              }),
                              l.jsx(E, {
                                md: 4,
                                className: "text-center",
                                children: l.jsxs("strong", {
                                  children: ["$", s.product.price * s.items],
                                }),
                              }),
                            ],
                          }),
                          l.jsx(O, {
                            children: l.jsx(E, {
                              className: "text-secondary",
                              md: 12,
                              children: `Qty: ${s.items}`,
                            }),
                          }),
                        ],
                      },
                      s.Id
                    )
                  ),
                }),
                l.jsxs(z.Item, {
                  children: [
                    l.jsxs(O, {
                      children: [
                        l.jsx(E, {
                          md: 8,
                          as: "p",
                          className: "text-secondary",
                          children: "Sub Total",
                        }),
                        l.jsx(E, {
                          md: 4,
                          as: "p",
                          className: "text-secondary",
                          children: r,
                        }),
                      ],
                    }),
                    l.jsxs(O, {
                      children: [
                        l.jsx(E, {
                          md: 8,
                          as: "p",
                          className: "text-secondary",
                          children: "Extra",
                        }),
                        l.jsx(E, {
                          md: 4,
                          as: "p",
                          className: "text-secondary",
                          children: "40",
                        }),
                      ],
                    }),
                  ],
                }),
                l.jsx(z.Item, {
                  children: l.jsxs(O, {
                    children: [
                      l.jsx(E, { md: 8, as: "h4", children: "Order Total" }),
                      l.jsx(E, { md: 4, as: "h4", children: r + 40 }),
                    ],
                  }),
                }),
              ],
            }),
          }),
        ],
      }),
      l.jsx(be, {}),
    ],
  });
}
function Cn() {
  const e = Gt(),
    t = xe(),
    { current_user: n } = H((i) => i.user),
    [r, s] = h.useState("");
  function o() {
    s(""),
      e.pathname === "/admin/products" ? (t(Lc(r)), t(Initial())) : t(pg(r));
  }
  return l.jsxs(l.Fragment, {
    children: [
      l.jsx(hi, {
        bg: "dark",
        "data-bs-theme": "dark",
        collapseOnSelect: !0,
        children: l.jsxs(hc, {
          children: [
            l.jsx(hi.Brand, {
              children: l.jsxs(It, {
                hidden: !n.is_superuser,
                to: "/admin",
                className: "text-decoration-none",
                style: ({ isActive: i }) => ({ color: i ? "white" : "gray" }),
                children: [
                  l.jsx("i", { className: "bi bi-person-gear px-2" }),
                  "Admin",
                ],
              }),
            }),
            l.jsxs(ey, {
              className: "ml-auto",
              children: [
                l.jsx(_, {
                  className:
                    e.pathname === "/admin/products" ||
                    e.pathname === "/admin/users"
                      ? "px-2 visible"
                      : "px-2 invisible",
                  onSubmit: (i) => i.preventDefault(),
                  children: l.jsxs(O, {
                    children: [
                      l.jsx(E, {
                        xs: "auto",
                        children: l.jsx(_.Control, {
                          type: "text",
                          value: r,
                          placeholder: "Search",
                          className: "mr-sm-2",
                          onChange: (i) => s(i.target.value),
                        }),
                      }),
                      l.jsx(E, {
                        xs: "auto",
                        children: l.jsx(G, {
                          type: "submit",
                          variant: "light",
                          onClick: () => o(),
                          children: "Submit",
                        }),
                      }),
                    ],
                  }),
                }),
                l.jsxs(It, {
                  to: "/profile",
                  className: "px-3 text-decoration-none align-self-center",
                  style: ({ isActive: i }) => ({ color: i ? "white" : "gray" }),
                  children: [
                    l.jsx("i", { className: "bi bi-person-fill px-1" }),
                    "User",
                  ],
                }),
                l.jsxs(It, {
                  to: "/",
                  className: "text-decoration-none align-self-center",
                  style: ({ isActive: i }) => ({ color: i ? "white" : "gray" }),
                  children: [
                    l.jsx("i", { className: "bi bi-shop-window px-1" }),
                    "Shop",
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
      l.jsx(hm, {}),
    ],
  });
}
function TN() {
  const e = it(),
    { current_user: t } = H((n) => n.user);
  return Object.keys(t).length
    ? t.is_superuser
      ? l.jsxs("div", {
          className: "d-flex flex-column min-vh-100",
          children: [
            l.jsx(Cn, {}),
            l.jsx(O, {
              className: "justify-content-center",
              children: l.jsxs(E, {
                md: 8,
                children: [
                  l.jsx("h1", {
                    className: "py-3 text-center",
                    children: "Admin Pages",
                  }),
                  l.jsxs(z, {
                    className: "py-2",
                    children: [
                      l.jsx(z.Item, {
                        className: "bg-light",
                        children: l.jsxs(O, {
                          children: [
                            l.jsx(E, {
                              md: 8,
                              as: "h3",
                              className: "text-center",
                              children: "Pages",
                            }),
                            l.jsx(E, {
                              md: 4,
                              as: "h3",
                              className: "text-center",
                              children: "Details",
                            }),
                          ],
                        }),
                      }),
                      l.jsx(z.Item, {
                        children: l.jsxs(O, {
                          children: [
                            l.jsx(E, {
                              md: 8,
                              as: "h6",
                              className:
                                "d-flex flex-row justify-content-center align-items-center",
                              children: "Product List",
                            }),
                            l.jsx(E, {
                              md: 4,
                              className: "d-flex justify-content-center",
                              children: l.jsx(G, {
                                variant: "dark",
                                onClick: () => e("/admin/products"),
                                children: "Show",
                              }),
                            }),
                          ],
                        }),
                      }),
                      l.jsx(z.Item, {
                        children: l.jsxs(O, {
                          children: [
                            l.jsx(E, {
                              md: 8,
                              as: "h6",
                              className:
                                "d-flex flex-row justify-content-center align-items-center",
                              children: "User List",
                            }),
                            l.jsx(E, {
                              md: 4,
                              className: "d-flex justify-content-center",
                              children: l.jsx(G, {
                                variant: "dark",
                                onClick: () => e("/admin/users"),
                                children: "Show",
                              }),
                            }),
                          ],
                        }),
                      }),
                      l.jsx(z.Item, {
                        children: l.jsxs(O, {
                          children: [
                            l.jsx(E, {
                              md: 8,
                              as: "h6",
                              className:
                                "d-flex flex-row justify-content-center align-items-center",
                              children: "Order List",
                            }),
                            l.jsx(E, {
                              md: 4,
                              className: "d-flex justify-content-center",
                              children: l.jsx(G, {
                                variant: "dark",
                                onClick: () => e("/admin/orders"),
                                children: "Show",
                              }),
                            }),
                          ],
                        }),
                      }),
                      l.jsx(z.Item, {
                        children: l.jsxs(O, {
                          children: [
                            l.jsx(E, {
                              md: 8,
                              as: "h6",
                              className:
                                "d-flex flex-row justify-content-center align-items-center",
                              children: "Summary",
                            }),
                            l.jsx(E, {
                              md: 4,
                              className: "d-flex justify-content-center",
                              children: l.jsx(G, {
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
            l.jsx(be, {}),
          ],
        })
      : l.jsx(me, { to: "/" })
    : l.jsx(me, { to: "/login" });
}
function IN() {
  const e = it(),
    t = xe(),
    { current_user: n } = H((j) => j.user),
    { products: r, pages: s, loading: o, error: i } = H((j) => j.product),
    [a, u] = h.useState(""),
    [c, d] = h.useState("DESC"),
    [f, p] = h.useState("price"),
    [v, m] = h.useState(1);
  function S() {
    u(""), t(Lc(a, c, f, 1)), t(Vn());
  }
  return (
    h.useEffect(() => (t(Ic(v, c, f)), () => t(Vn())), [v, c, f]),
    Object.keys(n).length
      ? n.is_superuser
        ? l.jsxs("div", {
            className: "d-flex flex-column min-vh-100",
            children: [
              l.jsx(Cn, {}),
              l.jsxs(O, {
                children: [
                  l.jsx("h2", {
                    className: "p-2 text-center",
                    children: "Search Products",
                  }),
                  l.jsxs(O, {
                    className: "justify-content-center",
                    children: [
                      l.jsx(E, {
                        md: 5,
                        children: l.jsx(_, {
                          className: "py-3",
                          onSubmit: (j) => j.preventDefault(),
                          children: l.jsx(_.Control, {
                            type: "text",
                            value: a,
                            placeholder: "Search",
                            className: "mr-sm-2",
                            onChange: (j) => u(j.target.value),
                          }),
                        }),
                      }),
                      l.jsx(E, {
                        md: 1,
                        className:
                          "d-flex justify-content-center align-items-center",
                        children: l.jsx(G, {
                          type: "submit",
                          variant: "dark",
                          onClick: () => S(),
                          children: l.jsx("i", { className: "bi bi-search" }),
                        }),
                      }),
                    ],
                  }),
                  l.jsx("hr", {}),
                ],
              }),
              l.jsxs(O, {
                className: "justify-content-center",
                children: [
                  l.jsxs(O, {
                    md: 10,
                    className: "p-2",
                    children: [
                      l.jsx(E, {
                        md: 6,
                        children: l.jsx("h1", { children: "Products" }),
                      }),
                      l.jsx(E, {
                        md: 2,
                        children: l.jsxs(_.Control, {
                          as: "select",
                          value: f,
                          onChange: (j) => p(j.target.value),
                          children: [
                            l.jsx("option", {
                              value: "price",
                              children: "Price",
                            }),
                            l.jsx("option", {
                              value: "countInStock",
                              children: "Items",
                            }),
                            l.jsx("option", {
                              value: "rating",
                              children: "Rating",
                            }),
                          ],
                        }),
                      }),
                      l.jsx(E, {
                        md: 2,
                        children: l.jsxs(_.Control, {
                          as: "select",
                          value: c,
                          onChange: (j) => d(j.target.value),
                          children: [
                            l.jsx("option", {
                              value: "DESC",
                              children: "DESC",
                            }),
                            l.jsx("option", { value: "ASC", children: "ASC" }),
                          ],
                        }),
                      }),
                      l.jsx(E, {
                        md: 2,
                        children: l.jsx(G, {
                          type: "submit",
                          variant: "dark",
                          onClick: () => e("/admin/create-product"),
                          children: "Create Product",
                        }),
                      }),
                    ],
                  }),
                  r.length
                    ? i
                      ? l.jsx(J, {
                          variant: "danger",
                          message: "Error loading products",
                        })
                      : o
                      ? l.jsx(Oe, {})
                      : l.jsx(O, {
                          md: 10,
                          className: "px-3",
                          children: l.jsxs(xn, {
                            striped: !0,
                            responsive: !0,
                            children: [
                              l.jsx("thead", {
                                children: l.jsxs("tr", {
                                  children: [
                                    l.jsx("th", {
                                      className: "text-center",
                                      children: "ID",
                                    }),
                                    l.jsx("th", {
                                      className: "text-center",
                                      children: "Name",
                                    }),
                                    l.jsx("th", {
                                      className: "text-center",
                                      children: "Price",
                                    }),
                                    l.jsx("th", {
                                      className: "text-center",
                                      children: "Category",
                                    }),
                                    l.jsx("th", {
                                      className: "text-center",
                                      children: "Brand",
                                    }),
                                    l.jsx("th", {
                                      className: "text-center",
                                      children: "In Stock",
                                    }),
                                    l.jsx("th", {
                                      className: "text-center",
                                      children: "Rating",
                                    }),
                                    l.jsx("th", {
                                      className: "text-center",
                                      children: "Update",
                                    }),
                                    l.jsx("th", {
                                      className: "text-center",
                                      children: "Delete",
                                    }),
                                  ],
                                }),
                              }),
                              l.jsx("tbody", {
                                children: r.map((j) =>
                                  l.jsxs(
                                    "tr",
                                    {
                                      children: [
                                        l.jsx("td", {
                                          className: "text-center",
                                          children: j.Id,
                                        }),
                                        l.jsx("td", {
                                          className: "text-center",
                                          children: l.jsx("strong", {
                                            children: j.name,
                                          }),
                                        }),
                                        l.jsx("td", {
                                          className: "text-center",
                                          children: j.price,
                                        }),
                                        l.jsx("td", {
                                          className: "text-center",
                                          children: j.category,
                                        }),
                                        l.jsx("td", {
                                          className: "text-center",
                                          children: j.brand,
                                        }),
                                        l.jsx("td", {
                                          className: "text-center",
                                          children: j.countInStock,
                                        }),
                                        l.jsx("td", {
                                          className: "text-center",
                                          children: l.jsx(Xs, {
                                            rating: j.rating,
                                          }),
                                        }),
                                        l.jsx("td", {
                                          className: "text-center",
                                          children: l.jsx(G, {
                                            type: "submit",
                                            variant: "secondary",
                                            onClick: () =>
                                              e("/admin/update-product/", {
                                                state: j,
                                              }),
                                            children: "Update",
                                          }),
                                        }),
                                        l.jsx("td", {
                                          className: "text-center",
                                          children: l.jsx(G, {
                                            type: "submit",
                                            variant: "danger",
                                            onClick: () => t(PE(j.Id)),
                                            children: "Delete",
                                          }),
                                        }),
                                      ],
                                    },
                                    j.Id
                                  )
                                ),
                              }),
                            ],
                          }),
                        })
                    : l.jsx(O, {
                        md: 10,
                        className: "py-3",
                        children: l.jsx(J, {
                          variant: "warning",
                          message: "No products to show",
                        }),
                      }),
                ],
              }),
              l.jsx(be, { pages: s, page: v, setPage: m }),
            ],
          })
        : l.jsx(me, { to: "/" })
      : l.jsx(me, { to: "/login" })
  );
}
function LN() {
  const e = xe(),
    { orders: t, pages: n, loading: r, error: s } = H((u) => u.order),
    { current_user: o } = H((u) => u.user),
    [i, a] = h.useState(1);
  return (
    h.useEffect(() => (e(lg(i, !1)), () => e(Ms())), [i]),
    Object.keys(o).length
      ? o.is_superuser
        ? l.jsxs("div", {
            className: "d-flex flex-column min-vh-100",
            children: [
              l.jsx(Cn, {}),
              l.jsx(O, {
                className: "justify-content-center",
                children: t.length
                  ? s
                    ? l.jsx(J, {
                        variant: "danger",
                        message: "Error loading orders",
                      })
                    : r
                    ? l.jsx(Oe, {})
                    : l.jsxs(E, {
                        md: 11,
                        children: [
                          l.jsx("h1", {
                            className: "py-3",
                            children: "Orders",
                          }),
                          l.jsxs(z, {
                            children: [
                              l.jsx(z.Item, {
                                children: l.jsxs(O, {
                                  children: [
                                    l.jsx(E, {
                                      as: "h5",
                                      className: "text-center",
                                      children: "ID",
                                    }),
                                    l.jsx(E, {
                                      as: "h5",
                                      className: "text-center",
                                      children: "User",
                                    }),
                                    l.jsx(E, {
                                      as: "h5",
                                      className: "text-center",
                                      children: "Date",
                                    }),
                                    l.jsx(E, {
                                      as: "h5",
                                      className: "text-center",
                                      children: "Products",
                                    }),
                                    l.jsx(E, {
                                      as: "h5",
                                      className: "text-center",
                                      children: "Items",
                                    }),
                                    l.jsx(E, {
                                      as: "h5",
                                      className: "text-center",
                                      children: "Price",
                                    }),
                                    l.jsx(E, {
                                      as: "h5",
                                      className: "text-center",
                                      children: "Method",
                                    }),
                                    l.jsx(E, {
                                      as: "h5",
                                      className: "text-center",
                                      children: "Pending",
                                    }),
                                  ],
                                }),
                              }),
                              t.map((u) =>
                                l.jsx(Dc, { type: "admin", order: u }, u.Id)
                              ),
                            ],
                          }),
                        ],
                      })
                  : l.jsx(E, {
                      md: 11,
                      className: "py-3",
                      children: l.jsx(J, {
                        variant: "warning",
                        message: "No order is made yet",
                      }),
                    }),
              }),
              l.jsx(be, { pages: n, page: i, setPage: a }),
            ],
          })
        : l.jsx(me, { to: "/" })
      : l.jsx(me, { to: "/login" })
  );
}
function $N() {
  const e = xe(),
    {
      current_user: t,
      users: n,
      pages: r,
      loading: s,
      error: o,
    } = H((m) => m.user),
    [i, a] = h.useState(!1),
    [u, c] = h.useState(""),
    [d, f] = h.useState(1);
  function p() {
    c(""), e(pg(u, 1));
  }
  function v(m) {
    return e(NN({ Id: m.Id, is_admin: !0 })), a(!i);
  }
  return (
    h.useEffect(() => {
      e(EN(d));
    }, [i, d]),
    Object.keys(t).length
      ? t.is_superuser
        ? l.jsxs("div", {
            className: "d-flex flex-column min-vh-100",
            children: [
              l.jsx(Cn, {}),
              l.jsxs(O, {
                children: [
                  l.jsx("h2", {
                    className: "p-2 text-center",
                    children: "Search Users",
                  }),
                  l.jsx(_, {
                    className: "p-3",
                    onSubmit: (m) => m.preventDefault(),
                    children: l.jsxs(O, {
                      className: "justify-content-center ",
                      children: [
                        l.jsx(E, {
                          md: 5,
                          children: l.jsx(_.Control, {
                            type: "text",
                            value: u,
                            placeholder: "Search",
                            className: "mr-sm-2",
                            onChange: (m) => c(m.target.value),
                          }),
                        }),
                        l.jsx(E, {
                          md: 1,
                          className:
                            "d-flex justify-content-start align-items-center",
                          children: l.jsx(G, {
                            type: "submit",
                            variant: "dark",
                            onClick: () => p(),
                            children: l.jsx("i", { className: "bi bi-search" }),
                          }),
                        }),
                      ],
                    }),
                  }),
                  l.jsx("hr", {}),
                ],
              }),
              l.jsx(O, {
                className: "px-3",
                children: l.jsxs(E, {
                  md: 12,
                  children: [
                    l.jsx("h1", { className: "py-3", children: "Users" }),
                    s
                      ? l.jsx(Oe, {})
                      : o
                      ? l.jsx(J, {
                          variant: "danger",
                          message: "Error loading users",
                        })
                      : l.jsxs(xn, {
                          striped: !0,
                          responsive: !0,
                          children: [
                            l.jsx("thead", {
                              children: l.jsxs("tr", {
                                children: [
                                  l.jsx("th", {
                                    className: "text-center",
                                    children: "ID",
                                  }),
                                  l.jsx("th", {
                                    className: "text-center",
                                    children: "Name",
                                  }),
                                  l.jsx("th", {
                                    className: "text-center",
                                    children: "Email",
                                  }),
                                  l.jsx("th", {
                                    className: "text-center",
                                    children: "Country",
                                  }),
                                  l.jsx("th", {
                                    className: "text-center",
                                    children: "City",
                                  }),
                                  l.jsx("th", {
                                    className: "text-center",
                                    children: "Street",
                                  }),
                                  l.jsx("th", {
                                    className: "text-center",
                                    children: "Zip",
                                  }),
                                  l.jsx("th", {
                                    className: "text-center",
                                    children: "Admin",
                                  }),
                                  l.jsx("th", {
                                    className: "text-center",
                                    children: "Make Staff",
                                  }),
                                  l.jsx("th", {
                                    className: "text-center",
                                    children: "Delete",
                                  }),
                                ],
                              }),
                            }),
                            l.jsx("tbody", {
                              children: n.map((m) =>
                                l.jsxs(
                                  "tr",
                                  {
                                    children: [
                                      l.jsx("td", {
                                        className: "text-center",
                                        children: m.Id,
                                      }),
                                      l.jsx("td", {
                                        className: "text-center",
                                        children: m.name,
                                      }),
                                      l.jsx("td", {
                                        className: "text-center",
                                        children: m.email,
                                      }),
                                      l.jsx("td", {
                                        className: "text-center",
                                        children: m.country,
                                      }),
                                      l.jsx("td", {
                                        className: "text-center",
                                        children: m.city,
                                      }),
                                      l.jsx("td", {
                                        className: "text-center",
                                        children: m.street,
                                      }),
                                      l.jsx("td", {
                                        className: "text-center",
                                        children: m.zip_code,
                                      }),
                                      l.jsx("td", {
                                        className: m.is_superuser
                                          ? "text-center text-success"
                                          : "text-center text-dark",
                                        children: m.is_superuser ? "Yes" : "No",
                                      }),
                                      l.jsx("td", {
                                        className: "text-center",
                                        children: l.jsx(_, {
                                          className:
                                            "d-flex flex-row justify-content-center",
                                          children: l.jsx(_.Check, {
                                            type: "switch",
                                            defaultChecked: m.is_admin,
                                            onChange: () => v(m),
                                          }),
                                        }),
                                      }),
                                      l.jsx("td", {
                                        className: "text-center",
                                        children: l.jsx(G, {
                                          type: "submit",
                                          variant: "danger",
                                          onClick: () => e(CN(m.Id)),
                                          children: "Delete",
                                        }),
                                      }),
                                    ],
                                  },
                                  m.Id
                                )
                              ),
                            }),
                          ],
                        }),
                  ],
                }),
              }),
              l.jsx(be, { pages: r, page: d, setPage: f }),
            ],
          })
        : l.jsx(me, { to: "/" })
      : l.jsx(me, { to: "/login" })
  );
}
function DN() {
  const e = xe(),
    { current_user: t } = H((p) => p.user),
    {
      products: n,
      summary: r,
      pages: s,
      loading: o,
      success: i,
      error: a,
    } = H((p) => p.summary),
    [u, c] = h.useState(1),
    [d, f] = h.useState("DESC");
  return (
    h.useEffect(() => (e(mN(u, d)), () => e(cN())), [u, d]),
    Object.keys(t).length
      ? t.is_superuser
        ? l.jsxs("div", {
            className: "d-flex flex-column min-vh-100",
            children: [
              l.jsx(Cn, {}),
              l.jsxs(O, {
                className: "px-3 pt-2",
                children: [
                  l.jsx(E, {
                    md: 6,
                    children: l.jsx("h2", {
                      children:
                        d === "DESC"
                          ? "Top Sold Products"
                          : "Less Sold Products",
                    }),
                  }),
                  l.jsx(E, {
                    md: 1,
                    className: "d-flex justify-content-end align-items-center",
                    children: l.jsx("strong", { children: "Sort:" }),
                  }),
                  l.jsx(E, {
                    md: 2,
                    className:
                      "d-flex justify-content-start align-items-center",
                    children: l.jsxs(_.Control, {
                      as: "select",
                      value: d,
                      onChange: (p) => f(p.target.value),
                      children: [
                        l.jsx("option", { value: "DESC", children: "DESC" }),
                        l.jsx("option", { value: "ASC", children: "ASC" }),
                      ],
                    }),
                  }),
                ],
              }),
              l.jsxs(O, {
                className: "p-3",
                children: [
                  l.jsx(E, {
                    md: 8,
                    lg: 8,
                    children: i
                      ? l.jsxs(xn, {
                          striped: !0,
                          responsive: !0,
                          children: [
                            l.jsx("thead", {
                              children: l.jsxs("tr", {
                                children: [
                                  l.jsx("th", {
                                    className: "text-center",
                                    children: "Product ID",
                                  }),
                                  l.jsx("th", {
                                    className: "text-center",
                                    children: "Name",
                                  }),
                                  l.jsx("th", {
                                    className: "text-center",
                                    children: "Price",
                                  }),
                                  l.jsx("th", {
                                    className: "text-center",
                                    children: "Items",
                                  }),
                                  l.jsx("th", {
                                    className: "text-center",
                                    children: "Latest Date",
                                  }),
                                  l.jsx("th", {
                                    className: "text-center",
                                    children: "Rating",
                                  }),
                                ],
                              }),
                            }),
                            l.jsx("tbody", {
                              children: n.map((p) =>
                                l.jsxs(
                                  "tr",
                                  {
                                    children: [
                                      l.jsx("td", {
                                        className: "text-center",
                                        children: p._id,
                                      }),
                                      l.jsx("td", {
                                        className: "text-center",
                                        children: l.jsx("strong", {
                                          children: p.product_name,
                                        }),
                                      }),
                                      l.jsx("td", {
                                        className: "text-center",
                                        children: p.product_price,
                                      }),
                                      l.jsx("td", {
                                        className: "text-center",
                                        children: p.items,
                                      }),
                                      l.jsx("td", {
                                        className: "text-center",
                                        children: p.date,
                                      }),
                                      l.jsx("td", {
                                        className: "text-center",
                                        children: l.jsx(Xs, {
                                          rating: p.rating,
                                        }),
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
                      ? l.jsx(Oe, {})
                      : a
                      ? l.jsx(J, {
                          variant: "danger",
                          message: "Error loading data",
                        })
                      : l.jsx(l.Fragment, {}),
                  }),
                  l.jsx(E, {
                    md: 4,
                    children: l.jsxs(xn, {
                      striped: !0,
                      bordered: !0,
                      children: [
                        l.jsx("thead", {
                          children: l.jsx("tr", {
                            children: l.jsx("th", {
                              colSpan: 3,
                              children: l.jsx("h2", {
                                className: "py-2",
                                children: "Sales Summary",
                              }),
                            }),
                          }),
                        }),
                        l.jsxs("tbody", {
                          children: [
                            l.jsxs("tr", {
                              children: [
                                l.jsx("td", {
                                  rowSpan: 3,
                                  className: "align-middle",
                                  align: "center",
                                  children: "Today",
                                }),
                                l.jsx("td", { children: "Products Sold" }),
                                l.jsx("td", { children: r.today_products }),
                              ],
                            }),
                            l.jsxs("tr", {
                              children: [
                                l.jsx("td", { children: "Items Sold" }),
                                l.jsx("td", { children: r.today_items }),
                              ],
                            }),
                            l.jsxs("tr", {
                              children: [
                                l.jsx("td", { children: "Price" }),
                                l.jsx("td", { children: r.today_price }),
                              ],
                            }),
                            l.jsxs("tr", {
                              children: [
                                l.jsx("td", {
                                  rowSpan: 3,
                                  className: "align-middle",
                                  align: "center",
                                  children: "This Month",
                                }),
                                l.jsx("td", { children: "Products Sold" }),
                                l.jsx("td", { children: r.month_products }),
                              ],
                            }),
                            l.jsxs("tr", {
                              children: [
                                l.jsx("td", { children: "Items Sold" }),
                                l.jsx("td", { children: r.month_items }),
                              ],
                            }),
                            l.jsxs("tr", {
                              children: [
                                l.jsx("td", { children: "Price" }),
                                l.jsx("td", { children: r.month_price }),
                              ],
                            }),
                            l.jsxs("tr", {
                              children: [
                                l.jsx("td", {
                                  rowSpan: 3,
                                  className: "align-middle",
                                  align: "center",
                                  children: "This Year",
                                }),
                                l.jsx("td", { children: "Products Sold" }),
                                l.jsx("td", { children: r.year_products }),
                              ],
                            }),
                            l.jsxs("tr", {
                              children: [
                                l.jsx("td", { children: "Items Sold" }),
                                l.jsx("td", { children: r.year_items }),
                              ],
                            }),
                            l.jsxs("tr", {
                              children: [
                                l.jsx("td", { children: "Price" }),
                                l.jsx("td", { children: r.year_price }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              l.jsx(be, { pages: s, page: u, setPage: c }),
            ],
          })
        : l.jsx(me, { to: "/" })
      : l.jsx(me, { to: "/login" })
  );
}
function FN() {
  const e = it(),
    t = xe(),
    { loading: n, success: r, error: s } = H((p) => p.product),
    { current_user: o } = H((p) => p.user),
    i = {
      name: "",
      description: "",
      price: 0,
      image: "",
      brand: "",
      category: "",
      countInStock: 0,
    },
    [a, u] = h.useState(i),
    [c, d] = h.useState(!1),
    f = async () => {
      const p = new FormData();
      a.image && p.append("image", a.image),
        p.append("name", a.name),
        p.append("description", a.description),
        p.append("price", Number(a.price)),
        p.append("brand", a.brand),
        p.append("category", a.category),
        p.append("countInStock", Number(a.countInStock)),
        t(kE(p)),
        d(!0);
    };
  return (
    h.useEffect(
      () => (
        c &&
          setTimeout(() => {
            r && (t(Vn()), u(i));
          }, 1e3),
        () => {
          r && t(Vn());
        }
      ),
      [r, c]
    ),
    Object.keys(o).length
      ? o.is_superuser
        ? l.jsxs("div", {
            className: "d-flex flex-column min-vh-100",
            children: [
              l.jsx(Cn, {}),
              l.jsxs(O, {
                className: "justify-content-center px-5 py-3",
                children: [
                  l.jsxs("section", {
                    className:
                      "py-3 d-flex flex-row justify-content-between align-items-center",
                    children: [
                      l.jsx("h1", { children: "Create Product" }),
                      l.jsx("span", {
                        children: l.jsx(G, {
                          variant: "dark",
                          size: "lg",
                          onClick: () => e("/admin/products"),
                          children: "Products",
                        }),
                      }),
                    ],
                  }),
                  l.jsx(E, {
                    md: 6,
                    children: l.jsxs(_, {
                      onSubmit: (p) => p.preventDefault(),
                      children: [
                        l.jsxs(_.Group, {
                          className: "p-2",
                          controlId: "name",
                          children: [
                            l.jsx(_.Label, {
                              className: "fw-bold",
                              children: "Name",
                            }),
                            l.jsx(_.Control, {
                              type: "name",
                              placeholder: "Enter name",
                              value: a.name,
                              onChange: (p) =>
                                u({ ...a, name: p.target.value }),
                            }),
                          ],
                        }),
                        l.jsxs(_.Group, {
                          className: "p-2",
                          controlId: "price",
                          children: [
                            l.jsx(_.Label, {
                              className: "fw-bold",
                              children: "Price",
                            }),
                            l.jsx(_.Control, {
                              type: "number",
                              placeholder: "Enter price",
                              value: a.price,
                              onChange: (p) =>
                                u({ ...a, price: p.target.value }),
                            }),
                          ],
                        }),
                        l.jsxs(_.Group, {
                          className: "p-2",
                          controlId: "brand",
                          children: [
                            l.jsx(_.Label, {
                              className: "fw-bold",
                              children: "Brand",
                            }),
                            l.jsx(_.Control, {
                              type: "text",
                              placeholder: "Enter brand",
                              value: a.brand,
                              onChange: (p) =>
                                u({ ...a, brand: p.target.value }),
                            }),
                          ],
                        }),
                        l.jsxs(_.Group, {
                          className: "p-2",
                          controlId: "countinstock",
                          children: [
                            l.jsx(_.Label, {
                              className: "fw-bold",
                              children: "Stock",
                            }),
                            l.jsx(_.Control, {
                              type: "number",
                              placeholder: "Enter stock",
                              value: a.countInStock,
                              onChange: (p) =>
                                u({ ...a, countInStock: p.target.value }),
                            }),
                          ],
                        }),
                        l.jsxs(_.Group, {
                          className: "p-2",
                          controlId: "category",
                          children: [
                            l.jsx(_.Label, {
                              className: "fw-bold",
                              children: "Category",
                            }),
                            l.jsx(_.Control, {
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
                  l.jsx(E, {
                    md: 6,
                    children: l.jsxs(_, {
                      onSubmit: (p) => p.preventDefault(),
                      children: [
                        l.jsxs(_.Group, {
                          className: "p-2",
                          controlId: "image",
                          children: [
                            l.jsx(_.Label, {
                              className: "fw-bold",
                              children: "Image",
                            }),
                            l.jsx(_.Control, {
                              type: "file",
                              placeholder: "Enter image",
                              onChange: (p) =>
                                u({ ...a, image: p.target.files[0] }),
                            }),
                          ],
                        }),
                        l.jsxs(_.Group, {
                          className: "p-2",
                          controlId: "description",
                          children: [
                            l.jsx(_.Label, {
                              className: "fw-bold",
                              children: "Description",
                            }),
                            l.jsx(_.Control, {
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
                    ? l.jsx("div", {
                        className: "pt-2",
                        children: l.jsx(J, {
                          variant: "danger",
                          message: "Could not create product",
                        }),
                      })
                    : n
                    ? l.jsx(Oe, {})
                    : r
                    ? l.jsx("div", {
                        className: "pt-2",
                        children: l.jsx(J, {
                          variant: "success",
                          message: "Successfully created product",
                        }),
                      })
                    : l.jsx(l.Fragment, {}),
                  l.jsx("center", {
                    className: "py-3",
                    children: l.jsx(G, {
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
        : l.jsx(me, { to: "/" })
      : l.jsx(me, { to: "/login" })
  );
}
function AN() {
  const e = it(),
    t = Gt(),
    n = xe(),
    { loading: r, success: s, error: o } = H((m) => m.product),
    { current_user: i } = H((m) => m.user),
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
    [c, d] = h.useState(u),
    [f, p] = h.useState(!1),
    v = async () => {
      const m = new FormData();
      c.image && m.append("image", c.image),
        m.append("name", c.name),
        m.append("description", c.description),
        m.append("price", Number(c.price)),
        m.append("brand", c.brand),
        m.append("category", c.category),
        m.append("countInStock", Number(c.countInStock)),
        m.append("rating", Math.round(Math.random() * 5)),
        n(RE(a.Id, m)),
        p(!0);
    };
  return (
    h.useEffect(
      () => (
        f &&
          setTimeout(() => {
            s && e("/admin/products");
          }, 1e3),
        () => {
          s && n(Vn());
        }
      ),
      [s, f]
    ),
    Object.keys(i).length
      ? i.is_superuser
        ? l.jsxs("div", {
            className: "d-flex flex-column min-vh-100",
            children: [
              l.jsx(Cn, {}),
              l.jsxs(O, {
                className: "justify-content-center px-5 py-3",
                children: [
                  l.jsx("center", {
                    children: l.jsx("h1", {
                      className: "py-3",
                      children: "Update Product",
                    }),
                  }),
                  l.jsx(E, {
                    md: 6,
                    className: "py-2",
                    children: l.jsxs(_, {
                      onSubmit: (m) => m.preventDefault(),
                      children: [
                        l.jsxs(_.Group, {
                          as: O,
                          className: "p-2",
                          controlId: "name",
                          children: [
                            l.jsx(_.Label, {
                              column: !0,
                              sm: "2",
                              className: "fw-bold",
                              children: "Name",
                            }),
                            l.jsx(E, {
                              sm: 10,
                              children: l.jsx(_.Control, {
                                type: "name",
                                placeholder: "Enter name",
                                value: c.name,
                                onChange: (m) =>
                                  d({ ...c, name: m.target.value }),
                              }),
                            }),
                          ],
                        }),
                        l.jsxs(_.Group, {
                          as: O,
                          className: "p-2",
                          controlId: "price",
                          children: [
                            l.jsx(_.Label, {
                              column: !0,
                              sm: "2",
                              className: "fw-bold",
                              children: "Price",
                            }),
                            l.jsx(E, {
                              sm: 10,
                              children: l.jsx(_.Control, {
                                type: "number",
                                placeholder: "Enter price",
                                value: c.price,
                                onChange: (m) =>
                                  d({ ...c, price: m.target.value }),
                              }),
                            }),
                          ],
                        }),
                        l.jsxs(_.Group, {
                          as: O,
                          className: "p-2",
                          controlId: "brand",
                          children: [
                            l.jsx(_.Label, {
                              column: !0,
                              sm: "2",
                              className: "fw-bold",
                              children: "Brand",
                            }),
                            l.jsx(E, {
                              sm: 10,
                              children: l.jsx(_.Control, {
                                type: "text",
                                placeholder: "Enter brand",
                                value: c.brand,
                                onChange: (m) =>
                                  d({ ...c, brand: m.target.value }),
                              }),
                            }),
                          ],
                        }),
                        l.jsxs(_.Group, {
                          as: O,
                          className: "p-2",
                          controlId: "countinstock",
                          children: [
                            l.jsx(_.Label, {
                              column: !0,
                              sm: "2",
                              className: "fw-bold",
                              children: "Stock",
                            }),
                            l.jsx(E, {
                              sm: 10,
                              children: l.jsx(_.Control, {
                                type: "number",
                                placeholder: "Enter stock",
                                value: c.countInStock,
                                onChange: (m) =>
                                  d({ ...c, countInStock: m.target.value }),
                              }),
                            }),
                          ],
                        }),
                        l.jsxs(_.Group, {
                          as: O,
                          className: "p-2",
                          controlId: "category",
                          children: [
                            l.jsx(_.Label, {
                              column: !0,
                              sm: "2",
                              className: "fw-bold",
                              children: "Category",
                            }),
                            l.jsx(E, {
                              sm: 10,
                              children: l.jsx(_.Control, {
                                type: "text",
                                placeholder: "Enter category",
                                value: c.category,
                                onChange: (m) =>
                                  d({ ...c, category: m.target.value }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  l.jsx(E, {
                    md: 6,
                    className: "py-2",
                    children: l.jsxs(_, {
                      onSubmit: (m) => m.preventDefault(),
                      children: [
                        l.jsxs(_.Group, {
                          className: "p-2",
                          controlId: "image",
                          children: [
                            l.jsx(_.Label, {
                              className: "fw-bold",
                              children: "Image",
                            }),
                            l.jsx(_.Control, {
                              type: "file",
                              placeholder: "Enter image",
                              onChange: (m) =>
                                d({ ...c, image: m.target.files[0] }),
                            }),
                          ],
                        }),
                        l.jsxs(_.Group, {
                          className: "p-2",
                          controlId: "description",
                          children: [
                            l.jsx(_.Label, {
                              className: "fw-bold",
                              children: "Description",
                            }),
                            l.jsx(_.Control, {
                              as: "textarea",
                              rows: 5,
                              placeholder: "Enter description",
                              value: c.description,
                              onChange: (m) =>
                                d({ ...c, description: m.target.value }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  o
                    ? l.jsx(J, {
                        className: "pt-2",
                        variant: "danger",
                        message: "Could not update product",
                      })
                    : r
                    ? l.jsx(Oe, {})
                    : s
                    ? l.jsx(J, {
                        className: "pt-2",
                        variant: "success",
                        message: "Successfully updated product",
                      })
                    : l.jsx(l.Fragment, {}),
                  l.jsx("center", {
                    className: "py-3",
                    children: l.jsx(G, {
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
        : l.jsx(me, { to: "/" })
      : l.jsx(me, { to: "/login" })
  );
}
function MN() {
  const e = xe(),
    { orders: t, pages: n, loading: r, error: s } = H((u) => u.order),
    { current_user: o } = H((u) => u.user),
    [i, a] = h.useState(1);
  return (
    h.useEffect(() => (e(lg(i, !0)), () => e(Ms())), [i]),
    Object.keys(o).length
      ? o.is_admin
        ? l.jsxs("div", {
            className: "d-flex flex-column min-vh-100",
            children: [
              l.jsx(Cn, {}),
              l.jsx(O, {
                className: "justify-content-center",
                children: t.length
                  ? s
                    ? l.jsx(J, {
                        variant: "danger",
                        message: "Error loading orders",
                      })
                    : r
                    ? l.jsx(Oe, {})
                    : l.jsxs(E, {
                        md: 11,
                        children: [
                          l.jsx("h1", {
                            className: "py-3",
                            children: " Pending Orders",
                          }),
                          l.jsxs(z, {
                            children: [
                              l.jsxs(O, {
                                children: [
                                  l.jsx(E, {
                                    className: "text-center",
                                    children: "ID",
                                  }),
                                  l.jsx(E, {
                                    className: "text-center",
                                    children: "User",
                                  }),
                                  l.jsx(E, {
                                    className: "text-center",
                                    children: "Date",
                                  }),
                                  l.jsx(E, {
                                    className: "text-center",
                                    children: "Products",
                                  }),
                                  l.jsx(E, {
                                    className: "text-center",
                                    children: "Items",
                                  }),
                                  l.jsx(E, {
                                    className: "text-center",
                                    children: "Price",
                                  }),
                                  l.jsx(E, {
                                    className: "text-center",
                                    children: "Complete",
                                  }),
                                  l.jsx(E, {
                                    className: "text-center",
                                    children: "Terminate",
                                  }),
                                ],
                              }),
                              t.map((u) =>
                                l.jsx(Dc, { type: "staff", order: u }, u.Id)
                              ),
                            ],
                          }),
                        ],
                      })
                  : l.jsx(E, {
                      md: 11,
                      className: "py-3",
                      children: l.jsx(J, {
                        variant: "warning",
                        message: "No order is made yet",
                      }),
                    }),
              }),
              l.jsx(be, { pages: n, page: i, setPage: a }),
            ],
          })
        : l.jsx(me, { to: "/" })
      : l.jsx(me, { to: "/login" })
  );
}
function UN() {
  return l.jsx(a1, {
    children: l.jsxs(e1, {
      children: [
        l.jsxs(ce, {
          path: "/",
          errorElement: l.jsx(Zr, {}),
          children: [
            l.jsx(ce, { index: !0, element: l.jsx(IE, {}) }),
            l.jsx(ce, { path: "product/:Id", element: l.jsx(eN, {}) }),
            l.jsx(ce, { path: "cart", element: l.jsx(tN, {}) }),
            l.jsx(ce, { path: "order", element: l.jsx(yN, {}) }),
            l.jsx(ce, { path: "profile/", element: l.jsx(_N, {}) }),
            l.jsx(ce, { path: "lastpage", element: l.jsx(ON, {}) }),
          ],
        }),
        l.jsxs(ce, {
          path: "admin",
          errorElement: l.jsx(Zr, {}),
          children: [
            l.jsx(ce, { index: !0, element: l.jsx(TN, {}) }),
            l.jsx(ce, { path: "products", element: l.jsx(IN, {}) }),
            l.jsx(ce, { path: "orders", element: l.jsx(LN, {}) }),
            l.jsx(ce, { path: "users", element: l.jsx($N, {}) }),
            l.jsx(ce, { path: "summary", element: l.jsx(DN, {}) }),
            l.jsx(ce, { path: "create-product", element: l.jsx(FN, {}) }),
            l.jsx(ce, { path: "update-product", element: l.jsx(AN, {}) }),
          ],
        }),
        l.jsx(ce, {
          path: "staff",
          element: l.jsx(MN, {}),
          errorElement: l.jsx(Zr, {}),
        }),
        l.jsx(ce, {
          path: "login",
          element: l.jsx(RN, {}),
          errorElement: l.jsx(Zr, {}),
        }),
        l.jsx(ce, {
          path: "register",
          element: l.jsx(PN, {}),
          errorElement: l.jsx(Zr, {}),
        }),
        l.jsx(ce, { path: "*", element: l.jsx(OE, {}) }),
      ],
    }),
  });
}
const zN = Mw({
  reducer: {
    user: jN,
    product: Yw,
    order: sN,
    cart: FE,
    summary: pN,
    comment: HE,
  },
});
Xl.createRoot(document.getElementById("root")).render(
  l.jsx(a0, {
    store: zN,
    children: l.jsx(tt.StrictMode, { children: l.jsx(UN, {}) }),
  })
);
