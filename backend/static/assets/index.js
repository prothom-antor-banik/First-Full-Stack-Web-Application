function Jy(e, t) {
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
function bl(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var op = { exports: {} },
  Ul = {},
  lp = { exports: {} },
  K = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ys = Symbol.for("react.element"),
  Xy = Symbol.for("react.portal"),
  qy = Symbol.for("react.fragment"),
  Yy = Symbol.for("react.strict_mode"),
  Zy = Symbol.for("react.profiler"),
  ex = Symbol.for("react.provider"),
  tx = Symbol.for("react.context"),
  nx = Symbol.for("react.forward_ref"),
  rx = Symbol.for("react.suspense"),
  sx = Symbol.for("react.memo"),
  ox = Symbol.for("react.lazy"),
  td = Symbol.iterator;
function lx(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (td && e[td]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ip = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  ap = Object.assign,
  up = {};
function Hr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = up),
    (this.updater = n || ip);
}
Hr.prototype.isReactComponent = {};
Hr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Hr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function cp() {}
cp.prototype = Hr.prototype;
function Pu(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = up),
    (this.updater = n || ip);
}
var Ou = (Pu.prototype = new cp());
Ou.constructor = Pu;
ap(Ou, Hr.prototype);
Ou.isPureReactComponent = !0;
var nd = Array.isArray,
  dp = Object.prototype.hasOwnProperty,
  Tu = { current: null },
  fp = { key: !0, ref: !0, __self: !0, __source: !0 };
function pp(e, t, n) {
  var r,
    s = {},
    o = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      dp.call(t, r) && !fp.hasOwnProperty(r) && (s[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) s.children = n;
  else if (1 < a) {
    for (var u = Array(a), c = 0; c < a; c++) u[c] = arguments[c + 2];
    s.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) s[r] === void 0 && (s[r] = a[r]);
  return {
    $$typeof: Ys,
    type: e,
    key: o,
    ref: i,
    props: s,
    _owner: Tu.current,
  };
}
function ix(e, t) {
  return {
    $$typeof: Ys,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Iu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ys;
}
function ax(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var rd = /\/+/g;
function Ci(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? ax("" + e.key)
    : t.toString(36);
}
function Mo(e, t, n, r, s) {
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
          case Ys:
          case Xy:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (s = s(i)),
      (e = r === "" ? "." + Ci(i, 0) : r),
      nd(s)
        ? ((n = ""),
          e != null && (n = e.replace(rd, "$&/") + "/"),
          Mo(s, t, n, "", function (c) {
            return c;
          }))
        : s != null &&
          (Iu(s) &&
            (s = ix(
              s,
              n +
                (!s.key || (i && i.key === s.key)
                  ? ""
                  : ("" + s.key).replace(rd, "$&/") + "/") +
                e
            )),
          t.push(s)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), nd(e)))
    for (var a = 0; a < e.length; a++) {
      o = e[a];
      var u = r + Ci(o, a);
      i += Mo(o, t, n, u, s);
    }
  else if (((u = lx(e)), typeof u == "function"))
    for (e = u.call(e), a = 0; !(o = e.next()).done; )
      (o = o.value), (u = r + Ci(o, a++)), (i += Mo(o, t, n, u, s));
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
function xo(e, t, n) {
  if (e == null) return e;
  var r = [],
    s = 0;
  return (
    Mo(e, r, "", "", function (o) {
      return t.call(n, o, s++);
    }),
    r
  );
}
function ux(e) {
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
var Fe = { current: null },
  bo = { transition: null },
  cx = {
    ReactCurrentDispatcher: Fe,
    ReactCurrentBatchConfig: bo,
    ReactCurrentOwner: Tu,
  };
function hp() {
  throw Error("act(...) is not supported in production builds of React.");
}
K.Children = {
  map: xo,
  forEach: function (e, t, n) {
    xo(
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
      xo(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      xo(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Iu(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
K.Component = Hr;
K.Fragment = qy;
K.Profiler = Zy;
K.PureComponent = Pu;
K.StrictMode = Yy;
K.Suspense = rx;
K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = cx;
K.act = hp;
K.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = ap({}, e.props),
    s = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = Tu.current)),
      t.key !== void 0 && (s = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (u in t)
      dp.call(t, u) &&
        !fp.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && a !== void 0 ? a[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    a = Array(u);
    for (var c = 0; c < u; c++) a[c] = arguments[c + 2];
    r.children = a;
  }
  return { $$typeof: Ys, type: e.type, key: s, ref: o, props: r, _owner: i };
};
K.createContext = function (e) {
  return (
    (e = {
      $$typeof: tx,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: ex, _context: e }),
    (e.Consumer = e)
  );
};
K.createElement = pp;
K.createFactory = function (e) {
  var t = pp.bind(null, e);
  return (t.type = e), t;
};
K.createRef = function () {
  return { current: null };
};
K.forwardRef = function (e) {
  return { $$typeof: nx, render: e };
};
K.isValidElement = Iu;
K.lazy = function (e) {
  return { $$typeof: ox, _payload: { _status: -1, _result: e }, _init: ux };
};
K.memo = function (e, t) {
  return { $$typeof: sx, type: e, compare: t === void 0 ? null : t };
};
K.startTransition = function (e) {
  var t = bo.transition;
  bo.transition = {};
  try {
    e();
  } finally {
    bo.transition = t;
  }
};
K.unstable_act = hp;
K.useCallback = function (e, t) {
  return Fe.current.useCallback(e, t);
};
K.useContext = function (e) {
  return Fe.current.useContext(e);
};
K.useDebugValue = function () {};
K.useDeferredValue = function (e) {
  return Fe.current.useDeferredValue(e);
};
K.useEffect = function (e, t) {
  return Fe.current.useEffect(e, t);
};
K.useId = function () {
  return Fe.current.useId();
};
K.useImperativeHandle = function (e, t, n) {
  return Fe.current.useImperativeHandle(e, t, n);
};
K.useInsertionEffect = function (e, t) {
  return Fe.current.useInsertionEffect(e, t);
};
K.useLayoutEffect = function (e, t) {
  return Fe.current.useLayoutEffect(e, t);
};
K.useMemo = function (e, t) {
  return Fe.current.useMemo(e, t);
};
K.useReducer = function (e, t, n) {
  return Fe.current.useReducer(e, t, n);
};
K.useRef = function (e) {
  return Fe.current.useRef(e);
};
K.useState = function (e) {
  return Fe.current.useState(e);
};
K.useSyncExternalStore = function (e, t, n) {
  return Fe.current.useSyncExternalStore(e, t, n);
};
K.useTransition = function () {
  return Fe.current.useTransition();
};
K.version = "18.3.1";
lp.exports = K;
var p = lp.exports;
const dt = bl(p),
  fa = Jy({ __proto__: null, default: dt }, [p]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var dx = p,
  fx = Symbol.for("react.element"),
  px = Symbol.for("react.fragment"),
  hx = Object.prototype.hasOwnProperty,
  mx = dx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  gx = { key: !0, ref: !0, __self: !0, __source: !0 };
function mp(e, t, n) {
  var r,
    s = {},
    o = null,
    i = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) hx.call(t, r) && !gx.hasOwnProperty(r) && (s[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) s[r] === void 0 && (s[r] = t[r]);
  return {
    $$typeof: fx,
    type: e,
    key: o,
    ref: i,
    props: s,
    _owner: mx.current,
  };
}
Ul.Fragment = px;
Ul.jsx = mp;
Ul.jsxs = mp;
op.exports = Ul;
var l = op.exports,
  pa = {},
  gp = { exports: {} },
  st = {},
  yp = { exports: {} },
  xp = {};
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
      var J = (M - 1) >>> 1,
        re = I[J];
      if (0 < s(re, A)) (I[J] = A), (I[M] = re), (M = J);
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
      e: for (var J = 0, re = I.length, Ne = re >>> 1; J < Ne; ) {
        var Z = 2 * (J + 1) - 1,
          ze = I[Z],
          ee = Z + 1,
          on = I[ee];
        if (0 > s(ze, M))
          ee < re && 0 > s(on, ze)
            ? ((I[J] = on), (I[ee] = M), (J = ee))
            : ((I[J] = ze), (I[Z] = M), (J = Z));
        else if (ee < re && 0 > s(on, M)) (I[J] = on), (I[ee] = M), (J = ee);
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
    h = 3,
    v = !1,
    m = !1,
    S = !1,
    j = typeof setTimeout == "function" ? setTimeout : null,
    x = typeof clearTimeout == "function" ? clearTimeout : null,
    y = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function g(I) {
    for (var A = n(c); A !== null; ) {
      if (A.callback === null) r(c);
      else if (A.startTime <= I)
        r(c), (A.sortIndex = A.expirationTime), t(u, A);
      else break;
      A = n(c);
    }
  }
  function w(I) {
    if (((S = !1), g(I), !m))
      if (n(u) !== null) (m = !0), Oe(k);
      else {
        var A = n(c);
        A !== null && pe(w, A.startTime - I);
      }
  }
  function k(I, A) {
    (m = !1), S && ((S = !1), x(T), (T = -1)), (v = !0);
    var M = h;
    try {
      for (
        g(A), f = n(u);
        f !== null && (!(f.expirationTime > A) || (I && !fe()));

      ) {
        var J = f.callback;
        if (typeof J == "function") {
          (f.callback = null), (h = f.priorityLevel);
          var re = J(f.expirationTime <= A);
          (A = e.unstable_now()),
            typeof re == "function" ? (f.callback = re) : f === n(u) && r(u),
            g(A);
        } else r(u);
        f = n(u);
      }
      if (f !== null) var Ne = !0;
      else {
        var Z = n(c);
        Z !== null && pe(w, Z.startTime - A), (Ne = !1);
      }
      return Ne;
    } finally {
      (f = null), (h = M), (v = !1);
    }
  }
  var _ = !1,
    R = null,
    T = -1,
    H = 5,
    D = -1;
  function fe() {
    return !(e.unstable_now() - D < H);
  }
  function it() {
    if (R !== null) {
      var I = e.unstable_now();
      D = I;
      var A = !0;
      try {
        A = R(!0, I);
      } finally {
        A ? Ue() : ((_ = !1), (R = null));
      }
    } else _ = !1;
  }
  var Ue;
  if (typeof y == "function")
    Ue = function () {
      y(it);
    };
  else if (typeof MessageChannel < "u") {
    var At = new MessageChannel(),
      Ft = At.port2;
    (At.port1.onmessage = it),
      (Ue = function () {
        Ft.postMessage(null);
      });
  } else
    Ue = function () {
      j(it, 0);
    };
  function Oe(I) {
    (R = I), _ || ((_ = !0), Ue());
  }
  function pe(I, A) {
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
      m || v || ((m = !0), Oe(k));
    }),
    (e.unstable_forceFrameRate = function (I) {
      0 > I || 125 < I
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (H = 0 < I ? Math.floor(1e3 / I) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (I) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var A = 3;
          break;
        default:
          A = h;
      }
      var M = h;
      h = A;
      try {
        return I();
      } finally {
        h = M;
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
      var M = h;
      h = I;
      try {
        return A();
      } finally {
        h = M;
      }
    }),
    (e.unstable_scheduleCallback = function (I, A, M) {
      var J = e.unstable_now();
      switch (
        (typeof M == "object" && M !== null
          ? ((M = M.delay), (M = typeof M == "number" && 0 < M ? J + M : J))
          : (M = J),
        I)
      ) {
        case 1:
          var re = -1;
          break;
        case 2:
          re = 250;
          break;
        case 5:
          re = 1073741823;
          break;
        case 4:
          re = 1e4;
          break;
        default:
          re = 5e3;
      }
      return (
        (re = M + re),
        (I = {
          id: d++,
          callback: A,
          priorityLevel: I,
          startTime: M,
          expirationTime: re,
          sortIndex: -1,
        }),
        M > J
          ? ((I.sortIndex = M),
            t(c, I),
            n(u) === null &&
              I === n(c) &&
              (S ? (x(T), (T = -1)) : (S = !0), pe(w, M - J)))
          : ((I.sortIndex = re), t(u, I), m || v || ((m = !0), Oe(k))),
        I
      );
    }),
    (e.unstable_shouldYield = fe),
    (e.unstable_wrapCallback = function (I) {
      var A = h;
      return function () {
        var M = h;
        h = A;
        try {
          return I.apply(this, arguments);
        } finally {
          h = M;
        }
      };
    });
})(xp);
yp.exports = xp;
var yx = yp.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var xx = p,
  tt = yx;
function O(e) {
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
var vp = new Set(),
  Rs = {};
function sr(e, t) {
  $r(e, t), $r(e + "Capture", t);
}
function $r(e, t) {
  for (Rs[e] = t, e = 0; e < t.length; e++) vp.add(t[e]);
}
var Qt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  ha = Object.prototype.hasOwnProperty,
  vx =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  sd = {},
  od = {};
function jx(e) {
  return ha.call(od, e)
    ? !0
    : ha.call(sd, e)
    ? !1
    : vx.test(e)
    ? (od[e] = !0)
    : ((sd[e] = !0), !1);
}
function wx(e, t, n, r) {
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
function Sx(e, t, n, r) {
  if (t === null || typeof t > "u" || wx(e, t, n, r)) return !0;
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
function Me(e, t, n, r, s, o, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = s),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i);
}
var Re = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Re[e] = new Me(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Re[t] = new Me(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Re[e] = new Me(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Re[e] = new Me(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Re[e] = new Me(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Re[e] = new Me(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Re[e] = new Me(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Re[e] = new Me(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Re[e] = new Me(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Lu = /[\-:]([a-z])/g;
function $u(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Lu, $u);
    Re[t] = new Me(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Lu, $u);
    Re[t] = new Me(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Lu, $u);
  Re[t] = new Me(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Re[e] = new Me(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Re.xlinkHref = new Me(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Re[e] = new Me(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Du(e, t, n, r) {
  var s = Re.hasOwnProperty(t) ? Re[t] : null;
  (s !== null
    ? s.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Sx(t, n, s, r) && (n = null),
    r || s === null
      ? jx(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
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
var en = xx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  vo = Symbol.for("react.element"),
  mr = Symbol.for("react.portal"),
  gr = Symbol.for("react.fragment"),
  Au = Symbol.for("react.strict_mode"),
  ma = Symbol.for("react.profiler"),
  jp = Symbol.for("react.provider"),
  wp = Symbol.for("react.context"),
  Fu = Symbol.for("react.forward_ref"),
  ga = Symbol.for("react.suspense"),
  ya = Symbol.for("react.suspense_list"),
  Mu = Symbol.for("react.memo"),
  un = Symbol.for("react.lazy"),
  Sp = Symbol.for("react.offscreen"),
  ld = Symbol.iterator;
function rs(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ld && e[ld]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ce = Object.assign,
  ki;
function ps(e) {
  if (ki === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      ki = (t && t[1]) || "";
    }
  return (
    `
` +
    ki +
    e
  );
}
var _i = !1;
function Ri(e, t) {
  if (!e || _i) return "";
  _i = !0;
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
    (_i = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? ps(e) : "";
}
function Nx(e) {
  switch (e.tag) {
    case 5:
      return ps(e.type);
    case 16:
      return ps("Lazy");
    case 13:
      return ps("Suspense");
    case 19:
      return ps("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Ri(e.type, !1)), e;
    case 11:
      return (e = Ri(e.type.render, !1)), e;
    case 1:
      return (e = Ri(e.type, !0)), e;
    default:
      return "";
  }
}
function xa(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case gr:
      return "Fragment";
    case mr:
      return "Portal";
    case ma:
      return "Profiler";
    case Au:
      return "StrictMode";
    case ga:
      return "Suspense";
    case ya:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case wp:
        return (e.displayName || "Context") + ".Consumer";
      case jp:
        return (e._context.displayName || "Context") + ".Provider";
      case Fu:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Mu:
        return (
          (t = e.displayName || null), t !== null ? t : xa(e.type) || "Memo"
        );
      case un:
        (t = e._payload), (e = e._init);
        try {
          return xa(e(t));
        } catch {}
    }
  return null;
}
function Ex(e) {
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
      return xa(t);
    case 8:
      return t === Au ? "StrictMode" : "Mode";
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
function kn(e) {
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
function Np(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Cx(e) {
  var t = Np(e) ? "checked" : "value",
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
function jo(e) {
  e._valueTracker || (e._valueTracker = Cx(e));
}
function Ep(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Np(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Yo(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function va(e, t) {
  var n = t.checked;
  return ce({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function id(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = kn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Cp(e, t) {
  (t = t.checked), t != null && Du(e, "checked", t, !1);
}
function ja(e, t) {
  Cp(e, t);
  var n = kn(t.value),
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
    ? wa(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && wa(e, t.type, kn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function ad(e, t, n) {
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
function wa(e, t, n) {
  (t !== "number" || Yo(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var hs = Array.isArray;
function Rr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var s = 0; s < n.length; s++) t["$" + n[s]] = !0;
    for (n = 0; n < e.length; n++)
      (s = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== s && (e[n].selected = s),
        s && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + kn(n), t = null, s = 0; s < e.length; s++) {
      if (e[s].value === n) {
        (e[s].selected = !0), r && (e[s].defaultSelected = !0);
        return;
      }
      t !== null || e[s].disabled || (t = e[s]);
    }
    t !== null && (t.selected = !0);
  }
}
function Sa(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(O(91));
  return ce({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function ud(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(O(92));
      if (hs(n)) {
        if (1 < n.length) throw Error(O(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: kn(n) };
}
function kp(e, t) {
  var n = kn(t.value),
    r = kn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function cd(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function _p(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Na(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? _p(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var wo,
  Rp = (function (e) {
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
        wo = wo || document.createElement("div"),
          wo.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = wo.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Ps(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var vs = {
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
  kx = ["Webkit", "ms", "Moz", "O"];
Object.keys(vs).forEach(function (e) {
  kx.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (vs[t] = vs[e]);
  });
});
function Pp(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (vs.hasOwnProperty(e) && vs[e])
    ? ("" + t).trim()
    : t + "px";
}
function Op(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        s = Pp(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, s) : (e[n] = s);
    }
}
var _x = ce(
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
function Ea(e, t) {
  if (t) {
    if (_x[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(O(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(O(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(O(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(O(62));
  }
}
function Ca(e, t) {
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
var ka = null;
function bu(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var _a = null,
  Pr = null,
  Or = null;
function dd(e) {
  if ((e = to(e))) {
    if (typeof _a != "function") throw Error(O(280));
    var t = e.stateNode;
    t && ((t = Vl(t)), _a(e.stateNode, e.type, t));
  }
}
function Tp(e) {
  Pr ? (Or ? Or.push(e) : (Or = [e])) : (Pr = e);
}
function Ip() {
  if (Pr) {
    var e = Pr,
      t = Or;
    if (((Or = Pr = null), dd(e), t)) for (e = 0; e < t.length; e++) dd(t[e]);
  }
}
function Lp(e, t) {
  return e(t);
}
function $p() {}
var Pi = !1;
function Dp(e, t, n) {
  if (Pi) return e(t, n);
  Pi = !0;
  try {
    return Lp(e, t, n);
  } finally {
    (Pi = !1), (Pr !== null || Or !== null) && ($p(), Ip());
  }
}
function Os(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Vl(n);
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
  if (n && typeof n != "function") throw Error(O(231, t, typeof n));
  return n;
}
var Ra = !1;
if (Qt)
  try {
    var ss = {};
    Object.defineProperty(ss, "passive", {
      get: function () {
        Ra = !0;
      },
    }),
      window.addEventListener("test", ss, ss),
      window.removeEventListener("test", ss, ss);
  } catch {
    Ra = !1;
  }
function Rx(e, t, n, r, s, o, i, a, u) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (d) {
    this.onError(d);
  }
}
var js = !1,
  Zo = null,
  el = !1,
  Pa = null,
  Px = {
    onError: function (e) {
      (js = !0), (Zo = e);
    },
  };
function Ox(e, t, n, r, s, o, i, a, u) {
  (js = !1), (Zo = null), Rx.apply(Px, arguments);
}
function Tx(e, t, n, r, s, o, i, a, u) {
  if ((Ox.apply(this, arguments), js)) {
    if (js) {
      var c = Zo;
      (js = !1), (Zo = null);
    } else throw Error(O(198));
    el || ((el = !0), (Pa = c));
  }
}
function or(e) {
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
function Ap(e) {
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
function fd(e) {
  if (or(e) !== e) throw Error(O(188));
}
function Ix(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = or(e)), t === null)) throw Error(O(188));
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
        if (o === n) return fd(s), e;
        if (o === r) return fd(s), t;
        o = o.sibling;
      }
      throw Error(O(188));
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
        if (!i) throw Error(O(189));
      }
    }
    if (n.alternate !== r) throw Error(O(190));
  }
  if (n.tag !== 3) throw Error(O(188));
  return n.stateNode.current === n ? e : t;
}
function Fp(e) {
  return (e = Ix(e)), e !== null ? Mp(e) : null;
}
function Mp(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Mp(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var bp = tt.unstable_scheduleCallback,
  pd = tt.unstable_cancelCallback,
  Lx = tt.unstable_shouldYield,
  $x = tt.unstable_requestPaint,
  me = tt.unstable_now,
  Dx = tt.unstable_getCurrentPriorityLevel,
  Uu = tt.unstable_ImmediatePriority,
  Up = tt.unstable_UserBlockingPriority,
  tl = tt.unstable_NormalPriority,
  Ax = tt.unstable_LowPriority,
  zp = tt.unstable_IdlePriority,
  zl = null,
  It = null;
function Fx(e) {
  if (It && typeof It.onCommitFiberRoot == "function")
    try {
      It.onCommitFiberRoot(zl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var St = Math.clz32 ? Math.clz32 : Ux,
  Mx = Math.log,
  bx = Math.LN2;
function Ux(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Mx(e) / bx) | 0)) | 0;
}
var So = 64,
  No = 4194304;
function ms(e) {
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
function nl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    s = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var a = i & ~s;
    a !== 0 ? (r = ms(a)) : ((o &= i), o !== 0 && (r = ms(o)));
  } else (i = n & ~s), i !== 0 ? (r = ms(i)) : o !== 0 && (r = ms(o));
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
      (n = 31 - St(t)), (s = 1 << n), (r |= e[n]), (t &= ~s);
  return r;
}
function zx(e, t) {
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
function Bx(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      s = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var i = 31 - St(o),
      a = 1 << i,
      u = s[i];
    u === -1
      ? (!(a & n) || a & r) && (s[i] = zx(a, t))
      : u <= t && (e.expiredLanes |= a),
      (o &= ~a);
  }
}
function Oa(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Bp() {
  var e = So;
  return (So <<= 1), !(So & 4194240) && (So = 64), e;
}
function Oi(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Zs(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - St(t)),
    (e[t] = n);
}
function Wx(e, t) {
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
    var s = 31 - St(n),
      o = 1 << s;
    (t[s] = 0), (r[s] = -1), (e[s] = -1), (n &= ~o);
  }
}
function zu(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - St(n),
      s = 1 << r;
    (s & t) | (e[r] & t) && (e[r] |= t), (n &= ~s);
  }
}
var Y = 0;
function Wp(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Hp,
  Bu,
  Vp,
  Kp,
  Gp,
  Ta = !1,
  Eo = [],
  yn = null,
  xn = null,
  vn = null,
  Ts = new Map(),
  Is = new Map(),
  fn = [],
  Hx =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function hd(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      yn = null;
      break;
    case "dragenter":
    case "dragleave":
      xn = null;
      break;
    case "mouseover":
    case "mouseout":
      vn = null;
      break;
    case "pointerover":
    case "pointerout":
      Ts.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Is.delete(t.pointerId);
  }
}
function os(e, t, n, r, s, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [s],
      }),
      t !== null && ((t = to(t)), t !== null && Bu(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      s !== null && t.indexOf(s) === -1 && t.push(s),
      e);
}
function Vx(e, t, n, r, s) {
  switch (t) {
    case "focusin":
      return (yn = os(yn, e, t, n, r, s)), !0;
    case "dragenter":
      return (xn = os(xn, e, t, n, r, s)), !0;
    case "mouseover":
      return (vn = os(vn, e, t, n, r, s)), !0;
    case "pointerover":
      var o = s.pointerId;
      return Ts.set(o, os(Ts.get(o) || null, e, t, n, r, s)), !0;
    case "gotpointercapture":
      return (
        (o = s.pointerId), Is.set(o, os(Is.get(o) || null, e, t, n, r, s)), !0
      );
  }
  return !1;
}
function Qp(e) {
  var t = Bn(e.target);
  if (t !== null) {
    var n = or(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Ap(n)), t !== null)) {
          (e.blockedOn = t),
            Gp(e.priority, function () {
              Vp(n);
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
function Uo(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ia(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (ka = r), n.target.dispatchEvent(r), (ka = null);
    } else return (t = to(n)), t !== null && Bu(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function md(e, t, n) {
  Uo(e) && n.delete(t);
}
function Kx() {
  (Ta = !1),
    yn !== null && Uo(yn) && (yn = null),
    xn !== null && Uo(xn) && (xn = null),
    vn !== null && Uo(vn) && (vn = null),
    Ts.forEach(md),
    Is.forEach(md);
}
function ls(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Ta ||
      ((Ta = !0),
      tt.unstable_scheduleCallback(tt.unstable_NormalPriority, Kx)));
}
function Ls(e) {
  function t(s) {
    return ls(s, e);
  }
  if (0 < Eo.length) {
    ls(Eo[0], e);
    for (var n = 1; n < Eo.length; n++) {
      var r = Eo[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    yn !== null && ls(yn, e),
      xn !== null && ls(xn, e),
      vn !== null && ls(vn, e),
      Ts.forEach(t),
      Is.forEach(t),
      n = 0;
    n < fn.length;
    n++
  )
    (r = fn[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < fn.length && ((n = fn[0]), n.blockedOn === null); )
    Qp(n), n.blockedOn === null && fn.shift();
}
var Tr = en.ReactCurrentBatchConfig,
  rl = !0;
function Gx(e, t, n, r) {
  var s = Y,
    o = Tr.transition;
  Tr.transition = null;
  try {
    (Y = 1), Wu(e, t, n, r);
  } finally {
    (Y = s), (Tr.transition = o);
  }
}
function Qx(e, t, n, r) {
  var s = Y,
    o = Tr.transition;
  Tr.transition = null;
  try {
    (Y = 4), Wu(e, t, n, r);
  } finally {
    (Y = s), (Tr.transition = o);
  }
}
function Wu(e, t, n, r) {
  if (rl) {
    var s = Ia(e, t, n, r);
    if (s === null) Ui(e, t, r, sl, n), hd(e, r);
    else if (Vx(s, e, t, n, r)) r.stopPropagation();
    else if ((hd(e, r), t & 4 && -1 < Hx.indexOf(e))) {
      for (; s !== null; ) {
        var o = to(s);
        if (
          (o !== null && Hp(o),
          (o = Ia(e, t, n, r)),
          o === null && Ui(e, t, r, sl, n),
          o === s)
        )
          break;
        s = o;
      }
      s !== null && r.stopPropagation();
    } else Ui(e, t, r, null, n);
  }
}
var sl = null;
function Ia(e, t, n, r) {
  if (((sl = null), (e = bu(r)), (e = Bn(e)), e !== null))
    if (((t = or(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Ap(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (sl = e), null;
}
function Jp(e) {
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
      switch (Dx()) {
        case Uu:
          return 1;
        case Up:
          return 4;
        case tl:
        case Ax:
          return 16;
        case zp:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var hn = null,
  Hu = null,
  zo = null;
function Xp() {
  if (zo) return zo;
  var e,
    t = Hu,
    n = t.length,
    r,
    s = "value" in hn ? hn.value : hn.textContent,
    o = s.length;
  for (e = 0; e < n && t[e] === s[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === s[o - r]; r++);
  return (zo = s.slice(e, 1 < r ? 1 - r : void 0));
}
function Bo(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Co() {
  return !0;
}
function gd() {
  return !1;
}
function ot(e) {
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
        ? Co
        : gd),
      (this.isPropagationStopped = gd),
      this
    );
  }
  return (
    ce(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Co));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Co));
      },
      persist: function () {},
      isPersistent: Co,
    }),
    t
  );
}
var Vr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Vu = ot(Vr),
  eo = ce({}, Vr, { view: 0, detail: 0 }),
  Jx = ot(eo),
  Ti,
  Ii,
  is,
  Bl = ce({}, eo, {
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
    getModifierState: Ku,
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
        : (e !== is &&
            (is && e.type === "mousemove"
              ? ((Ti = e.screenX - is.screenX), (Ii = e.screenY - is.screenY))
              : (Ii = Ti = 0),
            (is = e)),
          Ti);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Ii;
    },
  }),
  yd = ot(Bl),
  Xx = ce({}, Bl, { dataTransfer: 0 }),
  qx = ot(Xx),
  Yx = ce({}, eo, { relatedTarget: 0 }),
  Li = ot(Yx),
  Zx = ce({}, Vr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  ev = ot(Zx),
  tv = ce({}, Vr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  nv = ot(tv),
  rv = ce({}, Vr, { data: 0 }),
  xd = ot(rv),
  sv = {
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
  ov = {
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
  lv = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function iv(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = lv[e]) ? !!t[e] : !1;
}
function Ku() {
  return iv;
}
var av = ce({}, eo, {
    key: function (e) {
      if (e.key) {
        var t = sv[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Bo(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? ov[e.keyCode] || "Unidentified"
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
    getModifierState: Ku,
    charCode: function (e) {
      return e.type === "keypress" ? Bo(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Bo(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  uv = ot(av),
  cv = ce({}, Bl, {
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
  vd = ot(cv),
  dv = ce({}, eo, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ku,
  }),
  fv = ot(dv),
  pv = ce({}, Vr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  hv = ot(pv),
  mv = ce({}, Bl, {
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
  gv = ot(mv),
  yv = [9, 13, 27, 32],
  Gu = Qt && "CompositionEvent" in window,
  ws = null;
Qt && "documentMode" in document && (ws = document.documentMode);
var xv = Qt && "TextEvent" in window && !ws,
  qp = Qt && (!Gu || (ws && 8 < ws && 11 >= ws)),
  jd = " ",
  wd = !1;
function Yp(e, t) {
  switch (e) {
    case "keyup":
      return yv.indexOf(t.keyCode) !== -1;
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
function Zp(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var yr = !1;
function vv(e, t) {
  switch (e) {
    case "compositionend":
      return Zp(t);
    case "keypress":
      return t.which !== 32 ? null : ((wd = !0), jd);
    case "textInput":
      return (e = t.data), e === jd && wd ? null : e;
    default:
      return null;
  }
}
function jv(e, t) {
  if (yr)
    return e === "compositionend" || (!Gu && Yp(e, t))
      ? ((e = Xp()), (zo = Hu = hn = null), (yr = !1), e)
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
      return qp && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var wv = {
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
function Sd(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!wv[e.type] : t === "textarea";
}
function eh(e, t, n, r) {
  Tp(r),
    (t = ol(t, "onChange")),
    0 < t.length &&
      ((n = new Vu("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Ss = null,
  $s = null;
function Sv(e) {
  dh(e, 0);
}
function Wl(e) {
  var t = jr(e);
  if (Ep(t)) return e;
}
function Nv(e, t) {
  if (e === "change") return t;
}
var th = !1;
if (Qt) {
  var $i;
  if (Qt) {
    var Di = "oninput" in document;
    if (!Di) {
      var Nd = document.createElement("div");
      Nd.setAttribute("oninput", "return;"),
        (Di = typeof Nd.oninput == "function");
    }
    $i = Di;
  } else $i = !1;
  th = $i && (!document.documentMode || 9 < document.documentMode);
}
function Ed() {
  Ss && (Ss.detachEvent("onpropertychange", nh), ($s = Ss = null));
}
function nh(e) {
  if (e.propertyName === "value" && Wl($s)) {
    var t = [];
    eh(t, $s, e, bu(e)), Dp(Sv, t);
  }
}
function Ev(e, t, n) {
  e === "focusin"
    ? (Ed(), (Ss = t), ($s = n), Ss.attachEvent("onpropertychange", nh))
    : e === "focusout" && Ed();
}
function Cv(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Wl($s);
}
function kv(e, t) {
  if (e === "click") return Wl(t);
}
function _v(e, t) {
  if (e === "input" || e === "change") return Wl(t);
}
function Rv(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var kt = typeof Object.is == "function" ? Object.is : Rv;
function Ds(e, t) {
  if (kt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var s = n[r];
    if (!ha.call(t, s) || !kt(e[s], t[s])) return !1;
  }
  return !0;
}
function Cd(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function kd(e, t) {
  var n = Cd(e);
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
    n = Cd(n);
  }
}
function rh(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? rh(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function sh() {
  for (var e = window, t = Yo(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Yo(e.document);
  }
  return t;
}
function Qu(e) {
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
function Pv(e) {
  var t = sh(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    rh(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Qu(n)) {
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
          (s = kd(n, o));
        var i = kd(n, r);
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
var Ov = Qt && "documentMode" in document && 11 >= document.documentMode,
  xr = null,
  La = null,
  Ns = null,
  $a = !1;
function _d(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  $a ||
    xr == null ||
    xr !== Yo(r) ||
    ((r = xr),
    "selectionStart" in r && Qu(r)
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
    (Ns && Ds(Ns, r)) ||
      ((Ns = r),
      (r = ol(La, "onSelect")),
      0 < r.length &&
        ((t = new Vu("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = xr))));
}
function ko(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var vr = {
    animationend: ko("Animation", "AnimationEnd"),
    animationiteration: ko("Animation", "AnimationIteration"),
    animationstart: ko("Animation", "AnimationStart"),
    transitionend: ko("Transition", "TransitionEnd"),
  },
  Ai = {},
  oh = {};
Qt &&
  ((oh = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete vr.animationend.animation,
    delete vr.animationiteration.animation,
    delete vr.animationstart.animation),
  "TransitionEvent" in window || delete vr.transitionend.transition);
function Hl(e) {
  if (Ai[e]) return Ai[e];
  if (!vr[e]) return e;
  var t = vr[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in oh) return (Ai[e] = t[n]);
  return e;
}
var lh = Hl("animationend"),
  ih = Hl("animationiteration"),
  ah = Hl("animationstart"),
  uh = Hl("transitionend"),
  ch = new Map(),
  Rd =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function In(e, t) {
  ch.set(e, t), sr(t, [e]);
}
for (var Fi = 0; Fi < Rd.length; Fi++) {
  var Mi = Rd[Fi],
    Tv = Mi.toLowerCase(),
    Iv = Mi[0].toUpperCase() + Mi.slice(1);
  In(Tv, "on" + Iv);
}
In(lh, "onAnimationEnd");
In(ih, "onAnimationIteration");
In(ah, "onAnimationStart");
In("dblclick", "onDoubleClick");
In("focusin", "onFocus");
In("focusout", "onBlur");
In(uh, "onTransitionEnd");
$r("onMouseEnter", ["mouseout", "mouseover"]);
$r("onMouseLeave", ["mouseout", "mouseover"]);
$r("onPointerEnter", ["pointerout", "pointerover"]);
$r("onPointerLeave", ["pointerout", "pointerover"]);
sr(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
sr(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
sr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
sr(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
sr(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
sr(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var gs =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Lv = new Set("cancel close invalid load scroll toggle".split(" ").concat(gs));
function Pd(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Tx(r, t, void 0, e), (e.currentTarget = null);
}
function dh(e, t) {
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
          Pd(s, a, c), (o = u);
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
          Pd(s, a, c), (o = u);
        }
    }
  }
  if (el) throw ((e = Pa), (el = !1), (Pa = null), e);
}
function se(e, t) {
  var n = t[ba];
  n === void 0 && (n = t[ba] = new Set());
  var r = e + "__bubble";
  n.has(r) || (fh(t, e, 2, !1), n.add(r));
}
function bi(e, t, n) {
  var r = 0;
  t && (r |= 4), fh(n, e, r, t);
}
var _o = "_reactListening" + Math.random().toString(36).slice(2);
function As(e) {
  if (!e[_o]) {
    (e[_o] = !0),
      vp.forEach(function (n) {
        n !== "selectionchange" && (Lv.has(n) || bi(n, !1, e), bi(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[_o] || ((t[_o] = !0), bi("selectionchange", !1, t));
  }
}
function fh(e, t, n, r) {
  switch (Jp(t)) {
    case 1:
      var s = Gx;
      break;
    case 4:
      s = Qx;
      break;
    default:
      s = Wu;
  }
  (n = s.bind(null, t, n, e)),
    (s = void 0),
    !Ra ||
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
function Ui(e, t, n, r, s) {
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
          if (((i = Bn(a)), i === null)) return;
          if (((u = i.tag), u === 5 || u === 6)) {
            r = o = i;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  Dp(function () {
    var c = o,
      d = bu(n),
      f = [];
    e: {
      var h = ch.get(e);
      if (h !== void 0) {
        var v = Vu,
          m = e;
        switch (e) {
          case "keypress":
            if (Bo(n) === 0) break e;
          case "keydown":
          case "keyup":
            v = uv;
            break;
          case "focusin":
            (m = "focus"), (v = Li);
            break;
          case "focusout":
            (m = "blur"), (v = Li);
            break;
          case "beforeblur":
          case "afterblur":
            v = Li;
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
            v = yd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = qx;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = fv;
            break;
          case lh:
          case ih:
          case ah:
            v = ev;
            break;
          case uh:
            v = hv;
            break;
          case "scroll":
            v = Jx;
            break;
          case "wheel":
            v = gv;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = nv;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = vd;
        }
        var S = (t & 4) !== 0,
          j = !S && e === "scroll",
          x = S ? (h !== null ? h + "Capture" : null) : h;
        S = [];
        for (var y = c, g; y !== null; ) {
          g = y;
          var w = g.stateNode;
          if (
            (g.tag === 5 &&
              w !== null &&
              ((g = w),
              x !== null && ((w = Os(y, x)), w != null && S.push(Fs(y, w, g)))),
            j)
          )
            break;
          y = y.return;
        }
        0 < S.length &&
          ((h = new v(h, m, null, n, d)), f.push({ event: h, listeners: S }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((h = e === "mouseover" || e === "pointerover"),
          (v = e === "mouseout" || e === "pointerout"),
          h &&
            n !== ka &&
            (m = n.relatedTarget || n.fromElement) &&
            (Bn(m) || m[Jt]))
        )
          break e;
        if (
          (v || h) &&
          ((h =
            d.window === d
              ? d
              : (h = d.ownerDocument)
              ? h.defaultView || h.parentWindow
              : window),
          v
            ? ((m = n.relatedTarget || n.toElement),
              (v = c),
              (m = m ? Bn(m) : null),
              m !== null &&
                ((j = or(m)), m !== j || (m.tag !== 5 && m.tag !== 6)) &&
                (m = null))
            : ((v = null), (m = c)),
          v !== m)
        ) {
          if (
            ((S = yd),
            (w = "onMouseLeave"),
            (x = "onMouseEnter"),
            (y = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((S = vd),
              (w = "onPointerLeave"),
              (x = "onPointerEnter"),
              (y = "pointer")),
            (j = v == null ? h : jr(v)),
            (g = m == null ? h : jr(m)),
            (h = new S(w, y + "leave", v, n, d)),
            (h.target = j),
            (h.relatedTarget = g),
            (w = null),
            Bn(d) === c &&
              ((S = new S(x, y + "enter", m, n, d)),
              (S.target = g),
              (S.relatedTarget = j),
              (w = S)),
            (j = w),
            v && m)
          )
            t: {
              for (S = v, x = m, y = 0, g = S; g; g = dr(g)) y++;
              for (g = 0, w = x; w; w = dr(w)) g++;
              for (; 0 < y - g; ) (S = dr(S)), y--;
              for (; 0 < g - y; ) (x = dr(x)), g--;
              for (; y--; ) {
                if (S === x || (x !== null && S === x.alternate)) break t;
                (S = dr(S)), (x = dr(x));
              }
              S = null;
            }
          else S = null;
          v !== null && Od(f, h, v, S, !1),
            m !== null && j !== null && Od(f, j, m, S, !0);
        }
      }
      e: {
        if (
          ((h = c ? jr(c) : window),
          (v = h.nodeName && h.nodeName.toLowerCase()),
          v === "select" || (v === "input" && h.type === "file"))
        )
          var k = Nv;
        else if (Sd(h))
          if (th) k = _v;
          else {
            k = Cv;
            var _ = Ev;
          }
        else
          (v = h.nodeName) &&
            v.toLowerCase() === "input" &&
            (h.type === "checkbox" || h.type === "radio") &&
            (k = kv);
        if (k && (k = k(e, c))) {
          eh(f, k, n, d);
          break e;
        }
        _ && _(e, h, c),
          e === "focusout" &&
            (_ = h._wrapperState) &&
            _.controlled &&
            h.type === "number" &&
            wa(h, "number", h.value);
      }
      switch (((_ = c ? jr(c) : window), e)) {
        case "focusin":
          (Sd(_) || _.contentEditable === "true") &&
            ((xr = _), (La = c), (Ns = null));
          break;
        case "focusout":
          Ns = La = xr = null;
          break;
        case "mousedown":
          $a = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ($a = !1), _d(f, n, d);
          break;
        case "selectionchange":
          if (Ov) break;
        case "keydown":
        case "keyup":
          _d(f, n, d);
      }
      var R;
      if (Gu)
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
        yr
          ? Yp(e, n) && (T = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T &&
        (qp &&
          n.locale !== "ko" &&
          (yr || T !== "onCompositionStart"
            ? T === "onCompositionEnd" && yr && (R = Xp())
            : ((hn = d),
              (Hu = "value" in hn ? hn.value : hn.textContent),
              (yr = !0))),
        (_ = ol(c, T)),
        0 < _.length &&
          ((T = new xd(T, e, null, n, d)),
          f.push({ event: T, listeners: _ }),
          R ? (T.data = R) : ((R = Zp(n)), R !== null && (T.data = R)))),
        (R = xv ? vv(e, n) : jv(e, n)) &&
          ((c = ol(c, "onBeforeInput")),
          0 < c.length &&
            ((d = new xd("onBeforeInput", "beforeinput", null, n, d)),
            f.push({ event: d, listeners: c }),
            (d.data = R)));
    }
    dh(f, t);
  });
}
function Fs(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ol(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var s = e,
      o = s.stateNode;
    s.tag === 5 &&
      o !== null &&
      ((s = o),
      (o = Os(e, n)),
      o != null && r.unshift(Fs(e, o, s)),
      (o = Os(e, t)),
      o != null && r.push(Fs(e, o, s))),
      (e = e.return);
  }
  return r;
}
function dr(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Od(e, t, n, r, s) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var a = n,
      u = a.alternate,
      c = a.stateNode;
    if (u !== null && u === r) break;
    a.tag === 5 &&
      c !== null &&
      ((a = c),
      s
        ? ((u = Os(n, o)), u != null && i.unshift(Fs(n, u, a)))
        : s || ((u = Os(n, o)), u != null && i.push(Fs(n, u, a)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var $v = /\r\n?/g,
  Dv = /\u0000|\uFFFD/g;
function Td(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      $v,
      `
`
    )
    .replace(Dv, "");
}
function Ro(e, t, n) {
  if (((t = Td(t)), Td(e) !== t && n)) throw Error(O(425));
}
function ll() {}
var Da = null,
  Aa = null;
function Fa(e, t) {
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
var Ma = typeof setTimeout == "function" ? setTimeout : void 0,
  Av = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Id = typeof Promise == "function" ? Promise : void 0,
  Fv =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Id < "u"
      ? function (e) {
          return Id.resolve(null).then(e).catch(Mv);
        }
      : Ma;
function Mv(e) {
  setTimeout(function () {
    throw e;
  });
}
function zi(e, t) {
  var n = t,
    r = 0;
  do {
    var s = n.nextSibling;
    if ((e.removeChild(n), s && s.nodeType === 8))
      if (((n = s.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(s), Ls(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = s;
  } while (n);
  Ls(t);
}
function jn(e) {
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
function Ld(e) {
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
var Kr = Math.random().toString(36).slice(2),
  Tt = "__reactFiber$" + Kr,
  Ms = "__reactProps$" + Kr,
  Jt = "__reactContainer$" + Kr,
  ba = "__reactEvents$" + Kr,
  bv = "__reactListeners$" + Kr,
  Uv = "__reactHandles$" + Kr;
function Bn(e) {
  var t = e[Tt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Jt] || n[Tt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Ld(e); e !== null; ) {
          if ((n = e[Tt])) return n;
          e = Ld(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function to(e) {
  return (
    (e = e[Tt] || e[Jt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function jr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(O(33));
}
function Vl(e) {
  return e[Ms] || null;
}
var Ua = [],
  wr = -1;
function Ln(e) {
  return { current: e };
}
function oe(e) {
  0 > wr || ((e.current = Ua[wr]), (Ua[wr] = null), wr--);
}
function ne(e, t) {
  wr++, (Ua[wr] = e.current), (e.current = t);
}
var _n = {},
  $e = Ln(_n),
  Ve = Ln(!1),
  Jn = _n;
function Dr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return _n;
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
function Ke(e) {
  return (e = e.childContextTypes), e != null;
}
function il() {
  oe(Ve), oe($e);
}
function $d(e, t, n) {
  if ($e.current !== _n) throw Error(O(168));
  ne($e, t), ne(Ve, n);
}
function ph(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var s in r) if (!(s in t)) throw Error(O(108, Ex(e) || "Unknown", s));
  return ce({}, n, r);
}
function al(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || _n),
    (Jn = $e.current),
    ne($e, e),
    ne(Ve, Ve.current),
    !0
  );
}
function Dd(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(O(169));
  n
    ? ((e = ph(e, t, Jn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      oe(Ve),
      oe($e),
      ne($e, e))
    : oe(Ve),
    ne(Ve, n);
}
var zt = null,
  Kl = !1,
  Bi = !1;
function hh(e) {
  zt === null ? (zt = [e]) : zt.push(e);
}
function zv(e) {
  (Kl = !0), hh(e);
}
function $n() {
  if (!Bi && zt !== null) {
    Bi = !0;
    var e = 0,
      t = Y;
    try {
      var n = zt;
      for (Y = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (zt = null), (Kl = !1);
    } catch (s) {
      throw (zt !== null && (zt = zt.slice(e + 1)), bp(Uu, $n), s);
    } finally {
      (Y = t), (Bi = !1);
    }
  }
  return null;
}
var Sr = [],
  Nr = 0,
  ul = null,
  cl = 0,
  ut = [],
  ct = 0,
  Xn = null,
  Ht = 1,
  Vt = "";
function Mn(e, t) {
  (Sr[Nr++] = cl), (Sr[Nr++] = ul), (ul = e), (cl = t);
}
function mh(e, t, n) {
  (ut[ct++] = Ht), (ut[ct++] = Vt), (ut[ct++] = Xn), (Xn = e);
  var r = Ht;
  e = Vt;
  var s = 32 - St(r) - 1;
  (r &= ~(1 << s)), (n += 1);
  var o = 32 - St(t) + s;
  if (30 < o) {
    var i = s - (s % 5);
    (o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (s -= i),
      (Ht = (1 << (32 - St(t) + s)) | (n << s) | r),
      (Vt = o + e);
  } else (Ht = (1 << o) | (n << s) | r), (Vt = e);
}
function Ju(e) {
  e.return !== null && (Mn(e, 1), mh(e, 1, 0));
}
function Xu(e) {
  for (; e === ul; )
    (ul = Sr[--Nr]), (Sr[Nr] = null), (cl = Sr[--Nr]), (Sr[Nr] = null);
  for (; e === Xn; )
    (Xn = ut[--ct]),
      (ut[ct] = null),
      (Vt = ut[--ct]),
      (ut[ct] = null),
      (Ht = ut[--ct]),
      (ut[ct] = null);
}
var Ze = null,
  qe = null,
  le = !1,
  vt = null;
function gh(e, t) {
  var n = ft(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Ad(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ze = e), (qe = jn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ze = e), (qe = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Xn !== null ? { id: Ht, overflow: Vt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = ft(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ze = e),
            (qe = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function za(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ba(e) {
  if (le) {
    var t = qe;
    if (t) {
      var n = t;
      if (!Ad(e, t)) {
        if (za(e)) throw Error(O(418));
        t = jn(n.nextSibling);
        var r = Ze;
        t && Ad(e, t)
          ? gh(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (le = !1), (Ze = e));
      }
    } else {
      if (za(e)) throw Error(O(418));
      (e.flags = (e.flags & -4097) | 2), (le = !1), (Ze = e);
    }
  }
}
function Fd(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ze = e;
}
function Po(e) {
  if (e !== Ze) return !1;
  if (!le) return Fd(e), (le = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Fa(e.type, e.memoizedProps))),
    t && (t = qe))
  ) {
    if (za(e)) throw (yh(), Error(O(418)));
    for (; t; ) gh(e, t), (t = jn(t.nextSibling));
  }
  if ((Fd(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(O(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              qe = jn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      qe = null;
    }
  } else qe = Ze ? jn(e.stateNode.nextSibling) : null;
  return !0;
}
function yh() {
  for (var e = qe; e; ) e = jn(e.nextSibling);
}
function Ar() {
  (qe = Ze = null), (le = !1);
}
function qu(e) {
  vt === null ? (vt = [e]) : vt.push(e);
}
var Bv = en.ReactCurrentBatchConfig;
function as(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(O(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(O(147, e));
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
    if (typeof e != "string") throw Error(O(284));
    if (!n._owner) throw Error(O(290, e));
  }
  return e;
}
function Oo(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      O(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Md(e) {
  var t = e._init;
  return t(e._payload);
}
function xh(e) {
  function t(x, y) {
    if (e) {
      var g = x.deletions;
      g === null ? ((x.deletions = [y]), (x.flags |= 16)) : g.push(y);
    }
  }
  function n(x, y) {
    if (!e) return null;
    for (; y !== null; ) t(x, y), (y = y.sibling);
    return null;
  }
  function r(x, y) {
    for (x = new Map(); y !== null; )
      y.key !== null ? x.set(y.key, y) : x.set(y.index, y), (y = y.sibling);
    return x;
  }
  function s(x, y) {
    return (x = En(x, y)), (x.index = 0), (x.sibling = null), x;
  }
  function o(x, y, g) {
    return (
      (x.index = g),
      e
        ? ((g = x.alternate),
          g !== null
            ? ((g = g.index), g < y ? ((x.flags |= 2), y) : g)
            : ((x.flags |= 2), y))
        : ((x.flags |= 1048576), y)
    );
  }
  function i(x) {
    return e && x.alternate === null && (x.flags |= 2), x;
  }
  function a(x, y, g, w) {
    return y === null || y.tag !== 6
      ? ((y = Ji(g, x.mode, w)), (y.return = x), y)
      : ((y = s(y, g)), (y.return = x), y);
  }
  function u(x, y, g, w) {
    var k = g.type;
    return k === gr
      ? d(x, y, g.props.children, w, g.key)
      : y !== null &&
        (y.elementType === k ||
          (typeof k == "object" &&
            k !== null &&
            k.$$typeof === un &&
            Md(k) === y.type))
      ? ((w = s(y, g.props)), (w.ref = as(x, y, g)), (w.return = x), w)
      : ((w = Jo(g.type, g.key, g.props, null, x.mode, w)),
        (w.ref = as(x, y, g)),
        (w.return = x),
        w);
  }
  function c(x, y, g, w) {
    return y === null ||
      y.tag !== 4 ||
      y.stateNode.containerInfo !== g.containerInfo ||
      y.stateNode.implementation !== g.implementation
      ? ((y = Xi(g, x.mode, w)), (y.return = x), y)
      : ((y = s(y, g.children || [])), (y.return = x), y);
  }
  function d(x, y, g, w, k) {
    return y === null || y.tag !== 7
      ? ((y = Gn(g, x.mode, w, k)), (y.return = x), y)
      : ((y = s(y, g)), (y.return = x), y);
  }
  function f(x, y, g) {
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return (y = Ji("" + y, x.mode, g)), (y.return = x), y;
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case vo:
          return (
            (g = Jo(y.type, y.key, y.props, null, x.mode, g)),
            (g.ref = as(x, null, y)),
            (g.return = x),
            g
          );
        case mr:
          return (y = Xi(y, x.mode, g)), (y.return = x), y;
        case un:
          var w = y._init;
          return f(x, w(y._payload), g);
      }
      if (hs(y) || rs(y))
        return (y = Gn(y, x.mode, g, null)), (y.return = x), y;
      Oo(x, y);
    }
    return null;
  }
  function h(x, y, g, w) {
    var k = y !== null ? y.key : null;
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return k !== null ? null : a(x, y, "" + g, w);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case vo:
          return g.key === k ? u(x, y, g, w) : null;
        case mr:
          return g.key === k ? c(x, y, g, w) : null;
        case un:
          return (k = g._init), h(x, y, k(g._payload), w);
      }
      if (hs(g) || rs(g)) return k !== null ? null : d(x, y, g, w, null);
      Oo(x, g);
    }
    return null;
  }
  function v(x, y, g, w, k) {
    if ((typeof w == "string" && w !== "") || typeof w == "number")
      return (x = x.get(g) || null), a(y, x, "" + w, k);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case vo:
          return (x = x.get(w.key === null ? g : w.key) || null), u(y, x, w, k);
        case mr:
          return (x = x.get(w.key === null ? g : w.key) || null), c(y, x, w, k);
        case un:
          var _ = w._init;
          return v(x, y, g, _(w._payload), k);
      }
      if (hs(w) || rs(w)) return (x = x.get(g) || null), d(y, x, w, k, null);
      Oo(y, w);
    }
    return null;
  }
  function m(x, y, g, w) {
    for (
      var k = null, _ = null, R = y, T = (y = 0), H = null;
      R !== null && T < g.length;
      T++
    ) {
      R.index > T ? ((H = R), (R = null)) : (H = R.sibling);
      var D = h(x, R, g[T], w);
      if (D === null) {
        R === null && (R = H);
        break;
      }
      e && R && D.alternate === null && t(x, R),
        (y = o(D, y, T)),
        _ === null ? (k = D) : (_.sibling = D),
        (_ = D),
        (R = H);
    }
    if (T === g.length) return n(x, R), le && Mn(x, T), k;
    if (R === null) {
      for (; T < g.length; T++)
        (R = f(x, g[T], w)),
          R !== null &&
            ((y = o(R, y, T)), _ === null ? (k = R) : (_.sibling = R), (_ = R));
      return le && Mn(x, T), k;
    }
    for (R = r(x, R); T < g.length; T++)
      (H = v(R, x, T, g[T], w)),
        H !== null &&
          (e && H.alternate !== null && R.delete(H.key === null ? T : H.key),
          (y = o(H, y, T)),
          _ === null ? (k = H) : (_.sibling = H),
          (_ = H));
    return (
      e &&
        R.forEach(function (fe) {
          return t(x, fe);
        }),
      le && Mn(x, T),
      k
    );
  }
  function S(x, y, g, w) {
    var k = rs(g);
    if (typeof k != "function") throw Error(O(150));
    if (((g = k.call(g)), g == null)) throw Error(O(151));
    for (
      var _ = (k = null), R = y, T = (y = 0), H = null, D = g.next();
      R !== null && !D.done;
      T++, D = g.next()
    ) {
      R.index > T ? ((H = R), (R = null)) : (H = R.sibling);
      var fe = h(x, R, D.value, w);
      if (fe === null) {
        R === null && (R = H);
        break;
      }
      e && R && fe.alternate === null && t(x, R),
        (y = o(fe, y, T)),
        _ === null ? (k = fe) : (_.sibling = fe),
        (_ = fe),
        (R = H);
    }
    if (D.done) return n(x, R), le && Mn(x, T), k;
    if (R === null) {
      for (; !D.done; T++, D = g.next())
        (D = f(x, D.value, w)),
          D !== null &&
            ((y = o(D, y, T)), _ === null ? (k = D) : (_.sibling = D), (_ = D));
      return le && Mn(x, T), k;
    }
    for (R = r(x, R); !D.done; T++, D = g.next())
      (D = v(R, x, T, D.value, w)),
        D !== null &&
          (e && D.alternate !== null && R.delete(D.key === null ? T : D.key),
          (y = o(D, y, T)),
          _ === null ? (k = D) : (_.sibling = D),
          (_ = D));
    return (
      e &&
        R.forEach(function (it) {
          return t(x, it);
        }),
      le && Mn(x, T),
      k
    );
  }
  function j(x, y, g, w) {
    if (
      (typeof g == "object" &&
        g !== null &&
        g.type === gr &&
        g.key === null &&
        (g = g.props.children),
      typeof g == "object" && g !== null)
    ) {
      switch (g.$$typeof) {
        case vo:
          e: {
            for (var k = g.key, _ = y; _ !== null; ) {
              if (_.key === k) {
                if (((k = g.type), k === gr)) {
                  if (_.tag === 7) {
                    n(x, _.sibling),
                      (y = s(_, g.props.children)),
                      (y.return = x),
                      (x = y);
                    break e;
                  }
                } else if (
                  _.elementType === k ||
                  (typeof k == "object" &&
                    k !== null &&
                    k.$$typeof === un &&
                    Md(k) === _.type)
                ) {
                  n(x, _.sibling),
                    (y = s(_, g.props)),
                    (y.ref = as(x, _, g)),
                    (y.return = x),
                    (x = y);
                  break e;
                }
                n(x, _);
                break;
              } else t(x, _);
              _ = _.sibling;
            }
            g.type === gr
              ? ((y = Gn(g.props.children, x.mode, w, g.key)),
                (y.return = x),
                (x = y))
              : ((w = Jo(g.type, g.key, g.props, null, x.mode, w)),
                (w.ref = as(x, y, g)),
                (w.return = x),
                (x = w));
          }
          return i(x);
        case mr:
          e: {
            for (_ = g.key; y !== null; ) {
              if (y.key === _)
                if (
                  y.tag === 4 &&
                  y.stateNode.containerInfo === g.containerInfo &&
                  y.stateNode.implementation === g.implementation
                ) {
                  n(x, y.sibling),
                    (y = s(y, g.children || [])),
                    (y.return = x),
                    (x = y);
                  break e;
                } else {
                  n(x, y);
                  break;
                }
              else t(x, y);
              y = y.sibling;
            }
            (y = Xi(g, x.mode, w)), (y.return = x), (x = y);
          }
          return i(x);
        case un:
          return (_ = g._init), j(x, y, _(g._payload), w);
      }
      if (hs(g)) return m(x, y, g, w);
      if (rs(g)) return S(x, y, g, w);
      Oo(x, g);
    }
    return (typeof g == "string" && g !== "") || typeof g == "number"
      ? ((g = "" + g),
        y !== null && y.tag === 6
          ? (n(x, y.sibling), (y = s(y, g)), (y.return = x), (x = y))
          : (n(x, y), (y = Ji(g, x.mode, w)), (y.return = x), (x = y)),
        i(x))
      : n(x, y);
  }
  return j;
}
var Fr = xh(!0),
  vh = xh(!1),
  dl = Ln(null),
  fl = null,
  Er = null,
  Yu = null;
function Zu() {
  Yu = Er = fl = null;
}
function ec(e) {
  var t = dl.current;
  oe(dl), (e._currentValue = t);
}
function Wa(e, t, n) {
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
function Ir(e, t) {
  (fl = e),
    (Yu = Er = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (He = !0), (e.firstContext = null));
}
function ht(e) {
  var t = e._currentValue;
  if (Yu !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Er === null)) {
      if (fl === null) throw Error(O(308));
      (Er = e), (fl.dependencies = { lanes: 0, firstContext: e });
    } else Er = Er.next = e;
  return t;
}
var Wn = null;
function tc(e) {
  Wn === null ? (Wn = [e]) : Wn.push(e);
}
function jh(e, t, n, r) {
  var s = t.interleaved;
  return (
    s === null ? ((n.next = n), tc(t)) : ((n.next = s.next), (s.next = n)),
    (t.interleaved = n),
    Xt(e, r)
  );
}
function Xt(e, t) {
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
var cn = !1;
function nc(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function wh(e, t) {
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
function Kt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function wn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), Q & 2)) {
    var s = r.pending;
    return (
      s === null ? (t.next = t) : ((t.next = s.next), (s.next = t)),
      (r.pending = t),
      Xt(e, n)
    );
  }
  return (
    (s = r.interleaved),
    s === null ? ((t.next = t), tc(r)) : ((t.next = s.next), (s.next = t)),
    (r.interleaved = t),
    Xt(e, n)
  );
}
function Wo(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), zu(e, n);
  }
}
function bd(e, t) {
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
function pl(e, t, n, r) {
  var s = e.updateQueue;
  cn = !1;
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
      var h = a.lane,
        v = a.eventTime;
      if ((r & h) === h) {
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
          switch (((h = t), (v = n), S.tag)) {
            case 1:
              if (((m = S.payload), typeof m == "function")) {
                f = m.call(v, f, h);
                break e;
              }
              f = m;
              break e;
            case 3:
              m.flags = (m.flags & -65537) | 128;
            case 0:
              if (
                ((m = S.payload),
                (h = typeof m == "function" ? m.call(v, f, h) : m),
                h == null)
              )
                break e;
              f = ce({}, f, h);
              break e;
            case 2:
              cn = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (h = s.effects),
          h === null ? (s.effects = [a]) : h.push(a));
      } else
        (v = {
          eventTime: v,
          lane: h,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          d === null ? ((c = d = v), (u = f)) : (d = d.next = v),
          (i |= h);
      if (((a = a.next), a === null)) {
        if (((a = s.shared.pending), a === null)) break;
        (h = a),
          (a = h.next),
          (h.next = null),
          (s.lastBaseUpdate = h),
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
    (Yn |= i), (e.lanes = i), (e.memoizedState = f);
  }
}
function Ud(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        s = r.callback;
      if (s !== null) {
        if (((r.callback = null), (r = n), typeof s != "function"))
          throw Error(O(191, s));
        s.call(r);
      }
    }
}
var no = {},
  Lt = Ln(no),
  bs = Ln(no),
  Us = Ln(no);
function Hn(e) {
  if (e === no) throw Error(O(174));
  return e;
}
function rc(e, t) {
  switch ((ne(Us, t), ne(bs, e), ne(Lt, no), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Na(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Na(t, e));
  }
  oe(Lt), ne(Lt, t);
}
function Mr() {
  oe(Lt), oe(bs), oe(Us);
}
function Sh(e) {
  Hn(Us.current);
  var t = Hn(Lt.current),
    n = Na(t, e.type);
  t !== n && (ne(bs, e), ne(Lt, n));
}
function sc(e) {
  bs.current === e && (oe(Lt), oe(bs));
}
var ie = Ln(0);
function hl(e) {
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
var Wi = [];
function oc() {
  for (var e = 0; e < Wi.length; e++)
    Wi[e]._workInProgressVersionPrimary = null;
  Wi.length = 0;
}
var Ho = en.ReactCurrentDispatcher,
  Hi = en.ReactCurrentBatchConfig,
  qn = 0,
  ae = null,
  ve = null,
  we = null,
  ml = !1,
  Es = !1,
  zs = 0,
  Wv = 0;
function Te() {
  throw Error(O(321));
}
function lc(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!kt(e[n], t[n])) return !1;
  return !0;
}
function ic(e, t, n, r, s, o) {
  if (
    ((qn = o),
    (ae = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Ho.current = e === null || e.memoizedState === null ? Gv : Qv),
    (e = n(r, s)),
    Es)
  ) {
    o = 0;
    do {
      if (((Es = !1), (zs = 0), 25 <= o)) throw Error(O(301));
      (o += 1),
        (we = ve = null),
        (t.updateQueue = null),
        (Ho.current = Jv),
        (e = n(r, s));
    } while (Es);
  }
  if (
    ((Ho.current = gl),
    (t = ve !== null && ve.next !== null),
    (qn = 0),
    (we = ve = ae = null),
    (ml = !1),
    t)
  )
    throw Error(O(300));
  return e;
}
function ac() {
  var e = zs !== 0;
  return (zs = 0), e;
}
function Pt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return we === null ? (ae.memoizedState = we = e) : (we = we.next = e), we;
}
function mt() {
  if (ve === null) {
    var e = ae.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ve.next;
  var t = we === null ? ae.memoizedState : we.next;
  if (t !== null) (we = t), (ve = e);
  else {
    if (e === null) throw Error(O(310));
    (ve = e),
      (e = {
        memoizedState: ve.memoizedState,
        baseState: ve.baseState,
        baseQueue: ve.baseQueue,
        queue: ve.queue,
        next: null,
      }),
      we === null ? (ae.memoizedState = we = e) : (we = we.next = e);
  }
  return we;
}
function Bs(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Vi(e) {
  var t = mt(),
    n = t.queue;
  if (n === null) throw Error(O(311));
  n.lastRenderedReducer = e;
  var r = ve,
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
      if ((qn & d) === d)
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
          (ae.lanes |= d),
          (Yn |= d);
      }
      c = c.next;
    } while (c !== null && c !== o);
    u === null ? (i = r) : (u.next = a),
      kt(r, t.memoizedState) || (He = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    s = e;
    do (o = s.lane), (ae.lanes |= o), (Yn |= o), (s = s.next);
    while (s !== e);
  } else s === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Ki(e) {
  var t = mt(),
    n = t.queue;
  if (n === null) throw Error(O(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    s = n.pending,
    o = t.memoizedState;
  if (s !== null) {
    n.pending = null;
    var i = (s = s.next);
    do (o = e(o, i.action)), (i = i.next);
    while (i !== s);
    kt(o, t.memoizedState) || (He = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function Nh() {}
function Eh(e, t) {
  var n = ae,
    r = mt(),
    s = t(),
    o = !kt(r.memoizedState, s);
  if (
    (o && ((r.memoizedState = s), (He = !0)),
    (r = r.queue),
    uc(_h.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (we !== null && we.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Ws(9, kh.bind(null, n, r, s, t), void 0, null),
      Se === null)
    )
      throw Error(O(349));
    qn & 30 || Ch(n, t, s);
  }
  return s;
}
function Ch(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ae.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ae.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function kh(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Rh(t) && Ph(e);
}
function _h(e, t, n) {
  return n(function () {
    Rh(t) && Ph(e);
  });
}
function Rh(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !kt(e, n);
  } catch {
    return !0;
  }
}
function Ph(e) {
  var t = Xt(e, 1);
  t !== null && Nt(t, e, 1, -1);
}
function zd(e) {
  var t = Pt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Bs,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Kv.bind(null, ae, e)),
    [t.memoizedState, e]
  );
}
function Ws(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ae.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ae.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Oh() {
  return mt().memoizedState;
}
function Vo(e, t, n, r) {
  var s = Pt();
  (ae.flags |= e),
    (s.memoizedState = Ws(1 | t, n, void 0, r === void 0 ? null : r));
}
function Gl(e, t, n, r) {
  var s = mt();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (ve !== null) {
    var i = ve.memoizedState;
    if (((o = i.destroy), r !== null && lc(r, i.deps))) {
      s.memoizedState = Ws(t, n, o, r);
      return;
    }
  }
  (ae.flags |= e), (s.memoizedState = Ws(1 | t, n, o, r));
}
function Bd(e, t) {
  return Vo(8390656, 8, e, t);
}
function uc(e, t) {
  return Gl(2048, 8, e, t);
}
function Th(e, t) {
  return Gl(4, 2, e, t);
}
function Ih(e, t) {
  return Gl(4, 4, e, t);
}
function Lh(e, t) {
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
function $h(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Gl(4, 4, Lh.bind(null, t, e), n)
  );
}
function cc() {}
function Dh(e, t) {
  var n = mt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && lc(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Ah(e, t) {
  var n = mt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && lc(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Fh(e, t, n) {
  return qn & 21
    ? (kt(n, t) || ((n = Bp()), (ae.lanes |= n), (Yn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (He = !0)), (e.memoizedState = n));
}
function Hv(e, t) {
  var n = Y;
  (Y = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Hi.transition;
  Hi.transition = {};
  try {
    e(!1), t();
  } finally {
    (Y = n), (Hi.transition = r);
  }
}
function Mh() {
  return mt().memoizedState;
}
function Vv(e, t, n) {
  var r = Nn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    bh(e))
  )
    Uh(t, n);
  else if (((n = jh(e, t, n, r)), n !== null)) {
    var s = Ae();
    Nt(n, e, r, s), zh(n, t, r);
  }
}
function Kv(e, t, n) {
  var r = Nn(e),
    s = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (bh(e)) Uh(t, s);
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
        if (((s.hasEagerState = !0), (s.eagerState = a), kt(a, i))) {
          var u = t.interleaved;
          u === null
            ? ((s.next = s), tc(t))
            : ((s.next = u.next), (u.next = s)),
            (t.interleaved = s);
          return;
        }
      } catch {
      } finally {
      }
    (n = jh(e, t, s, r)),
      n !== null && ((s = Ae()), Nt(n, e, r, s), zh(n, t, r));
  }
}
function bh(e) {
  var t = e.alternate;
  return e === ae || (t !== null && t === ae);
}
function Uh(e, t) {
  Es = ml = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function zh(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), zu(e, n);
  }
}
var gl = {
    readContext: ht,
    useCallback: Te,
    useContext: Te,
    useEffect: Te,
    useImperativeHandle: Te,
    useInsertionEffect: Te,
    useLayoutEffect: Te,
    useMemo: Te,
    useReducer: Te,
    useRef: Te,
    useState: Te,
    useDebugValue: Te,
    useDeferredValue: Te,
    useTransition: Te,
    useMutableSource: Te,
    useSyncExternalStore: Te,
    useId: Te,
    unstable_isNewReconciler: !1,
  },
  Gv = {
    readContext: ht,
    useCallback: function (e, t) {
      return (Pt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: ht,
    useEffect: Bd,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Vo(4194308, 4, Lh.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Vo(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Vo(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Pt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Pt();
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
        (e = e.dispatch = Vv.bind(null, ae, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Pt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: zd,
    useDebugValue: cc,
    useDeferredValue: function (e) {
      return (Pt().memoizedState = e);
    },
    useTransition: function () {
      var e = zd(!1),
        t = e[0];
      return (e = Hv.bind(null, e[1])), (Pt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ae,
        s = Pt();
      if (le) {
        if (n === void 0) throw Error(O(407));
        n = n();
      } else {
        if (((n = t()), Se === null)) throw Error(O(349));
        qn & 30 || Ch(r, t, n);
      }
      s.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (s.queue = o),
        Bd(_h.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Ws(9, kh.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Pt(),
        t = Se.identifierPrefix;
      if (le) {
        var n = Vt,
          r = Ht;
        (n = (r & ~(1 << (32 - St(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = zs++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Wv++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Qv = {
    readContext: ht,
    useCallback: Dh,
    useContext: ht,
    useEffect: uc,
    useImperativeHandle: $h,
    useInsertionEffect: Th,
    useLayoutEffect: Ih,
    useMemo: Ah,
    useReducer: Vi,
    useRef: Oh,
    useState: function () {
      return Vi(Bs);
    },
    useDebugValue: cc,
    useDeferredValue: function (e) {
      var t = mt();
      return Fh(t, ve.memoizedState, e);
    },
    useTransition: function () {
      var e = Vi(Bs)[0],
        t = mt().memoizedState;
      return [e, t];
    },
    useMutableSource: Nh,
    useSyncExternalStore: Eh,
    useId: Mh,
    unstable_isNewReconciler: !1,
  },
  Jv = {
    readContext: ht,
    useCallback: Dh,
    useContext: ht,
    useEffect: uc,
    useImperativeHandle: $h,
    useInsertionEffect: Th,
    useLayoutEffect: Ih,
    useMemo: Ah,
    useReducer: Ki,
    useRef: Oh,
    useState: function () {
      return Ki(Bs);
    },
    useDebugValue: cc,
    useDeferredValue: function (e) {
      var t = mt();
      return ve === null ? (t.memoizedState = e) : Fh(t, ve.memoizedState, e);
    },
    useTransition: function () {
      var e = Ki(Bs)[0],
        t = mt().memoizedState;
      return [e, t];
    },
    useMutableSource: Nh,
    useSyncExternalStore: Eh,
    useId: Mh,
    unstable_isNewReconciler: !1,
  };
function yt(e, t) {
  if (e && e.defaultProps) {
    (t = ce({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Ha(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ce({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ql = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? or(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ae(),
      s = Nn(e),
      o = Kt(r, s);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = wn(e, o, s)),
      t !== null && (Nt(t, e, s, r), Wo(t, e, s));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ae(),
      s = Nn(e),
      o = Kt(r, s);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = wn(e, o, s)),
      t !== null && (Nt(t, e, s, r), Wo(t, e, s));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Ae(),
      r = Nn(e),
      s = Kt(n, r);
    (s.tag = 2),
      t != null && (s.callback = t),
      (t = wn(e, s, r)),
      t !== null && (Nt(t, e, r, n), Wo(t, e, r));
  },
};
function Wd(e, t, n, r, s, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Ds(n, r) || !Ds(s, o)
      : !0
  );
}
function Bh(e, t, n) {
  var r = !1,
    s = _n,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = ht(o))
      : ((s = Ke(t) ? Jn : $e.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? Dr(e, s) : _n)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Ql),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = s),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Hd(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Ql.enqueueReplaceState(t, t.state, null);
}
function Va(e, t, n, r) {
  var s = e.stateNode;
  (s.props = n), (s.state = e.memoizedState), (s.refs = {}), nc(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (s.context = ht(o))
    : ((o = Ke(t) ? Jn : $e.current), (s.context = Dr(e, o))),
    (s.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (Ha(e, t, o, n), (s.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function" ||
      (typeof s.UNSAFE_componentWillMount != "function" &&
        typeof s.componentWillMount != "function") ||
      ((t = s.state),
      typeof s.componentWillMount == "function" && s.componentWillMount(),
      typeof s.UNSAFE_componentWillMount == "function" &&
        s.UNSAFE_componentWillMount(),
      t !== s.state && Ql.enqueueReplaceState(s, s.state, null),
      pl(e, n, s, r),
      (s.state = e.memoizedState)),
    typeof s.componentDidMount == "function" && (e.flags |= 4194308);
}
function br(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Nx(r)), (r = r.return);
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
function Gi(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ka(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Xv = typeof WeakMap == "function" ? WeakMap : Map;
function Wh(e, t, n) {
  (n = Kt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      xl || ((xl = !0), (nu = r)), Ka(e, t);
    }),
    n
  );
}
function Hh(e, t, n) {
  (n = Kt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var s = t.value;
    (n.payload = function () {
      return r(s);
    }),
      (n.callback = function () {
        Ka(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        Ka(e, t),
          typeof r != "function" &&
            (Sn === null ? (Sn = new Set([this])) : Sn.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function Vd(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Xv();
    var s = new Set();
    r.set(t, s);
  } else (s = r.get(t)), s === void 0 && ((s = new Set()), r.set(t, s));
  s.has(n) || (s.add(n), (e = c0.bind(null, e, t, n)), t.then(e, e));
}
function Kd(e) {
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
function Gd(e, t, n, r, s) {
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
              : ((t = Kt(-1, 1)), (t.tag = 2), wn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var qv = en.ReactCurrentOwner,
  He = !1;
function De(e, t, n, r) {
  t.child = e === null ? vh(t, null, n, r) : Fr(t, e.child, n, r);
}
function Qd(e, t, n, r, s) {
  n = n.render;
  var o = t.ref;
  return (
    Ir(t, s),
    (r = ic(e, t, n, r, o, s)),
    (n = ac()),
    e !== null && !He
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~s),
        qt(e, t, s))
      : (le && n && Ju(t), (t.flags |= 1), De(e, t, r, s), t.child)
  );
}
function Jd(e, t, n, r, s) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !xc(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), Vh(e, t, o, r, s))
      : ((e = Jo(n.type, null, r, t, t.mode, s)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & s))) {
    var i = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Ds), n(i, r) && e.ref === t.ref)
    )
      return qt(e, t, s);
  }
  return (
    (t.flags |= 1),
    (e = En(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Vh(e, t, n, r, s) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Ds(o, r) && e.ref === t.ref)
      if (((He = !1), (t.pendingProps = r = o), (e.lanes & s) !== 0))
        e.flags & 131072 && (He = !0);
      else return (t.lanes = e.lanes), qt(e, t, s);
  }
  return Ga(e, t, n, r, s);
}
function Kh(e, t, n) {
  var r = t.pendingProps,
    s = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ne(kr, Xe),
        (Xe |= n);
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
          ne(kr, Xe),
          (Xe |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        ne(kr, Xe),
        (Xe |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      ne(kr, Xe),
      (Xe |= r);
  return De(e, t, s, n), t.child;
}
function Gh(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Ga(e, t, n, r, s) {
  var o = Ke(n) ? Jn : $e.current;
  return (
    (o = Dr(t, o)),
    Ir(t, s),
    (n = ic(e, t, n, r, o, s)),
    (r = ac()),
    e !== null && !He
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~s),
        qt(e, t, s))
      : (le && r && Ju(t), (t.flags |= 1), De(e, t, n, s), t.child)
  );
}
function Xd(e, t, n, r, s) {
  if (Ke(n)) {
    var o = !0;
    al(t);
  } else o = !1;
  if ((Ir(t, s), t.stateNode === null))
    Ko(e, t), Bh(t, n, r), Va(t, n, r, s), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      a = t.memoizedProps;
    i.props = a;
    var u = i.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = ht(c))
      : ((c = Ke(n) ? Jn : $e.current), (c = Dr(t, c)));
    var d = n.getDerivedStateFromProps,
      f =
        typeof d == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((a !== r || u !== c) && Hd(t, i, r, c)),
      (cn = !1);
    var h = t.memoizedState;
    (i.state = h),
      pl(t, r, i, s),
      (u = t.memoizedState),
      a !== r || h !== u || Ve.current || cn
        ? (typeof d == "function" && (Ha(t, n, d, r), (u = t.memoizedState)),
          (a = cn || Wd(t, n, a, r, h, u, c))
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
      wh(e, t),
      (a = t.memoizedProps),
      (c = t.type === t.elementType ? a : yt(t.type, a)),
      (i.props = c),
      (f = t.pendingProps),
      (h = i.context),
      (u = n.contextType),
      typeof u == "object" && u !== null
        ? (u = ht(u))
        : ((u = Ke(n) ? Jn : $e.current), (u = Dr(t, u)));
    var v = n.getDerivedStateFromProps;
    (d =
      typeof v == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((a !== f || h !== u) && Hd(t, i, r, u)),
      (cn = !1),
      (h = t.memoizedState),
      (i.state = h),
      pl(t, r, i, s);
    var m = t.memoizedState;
    a !== f || h !== m || Ve.current || cn
      ? (typeof v == "function" && (Ha(t, n, v, r), (m = t.memoizedState)),
        (c = cn || Wd(t, n, c, r, h, m, u) || !1)
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
              (a === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = m)),
        (i.props = r),
        (i.state = m),
        (i.context = u),
        (r = c))
      : (typeof i.componentDidUpdate != "function" ||
          (a === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Qa(e, t, n, r, o, s);
}
function Qa(e, t, n, r, s, o) {
  Gh(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return s && Dd(t, n, !1), qt(e, t, o);
  (r = t.stateNode), (qv.current = t);
  var a =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = Fr(t, e.child, null, o)), (t.child = Fr(t, null, a, o)))
      : De(e, t, a, o),
    (t.memoizedState = r.state),
    s && Dd(t, n, !0),
    t.child
  );
}
function Qh(e) {
  var t = e.stateNode;
  t.pendingContext
    ? $d(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && $d(e, t.context, !1),
    rc(e, t.containerInfo);
}
function qd(e, t, n, r, s) {
  return Ar(), qu(s), (t.flags |= 256), De(e, t, n, r), t.child;
}
var Ja = { dehydrated: null, treeContext: null, retryLane: 0 };
function Xa(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Jh(e, t, n) {
  var r = t.pendingProps,
    s = ie.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    a;
  if (
    ((a = i) ||
      (a = e !== null && e.memoizedState === null ? !1 : (s & 2) !== 0),
    a
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (s |= 1),
    ne(ie, s & 1),
    e === null)
  )
    return (
      Ba(t),
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
                : (o = ql(i, r, 0, null)),
              (e = Gn(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Xa(n)),
              (t.memoizedState = Ja),
              e)
            : dc(t, i))
    );
  if (((s = e.memoizedState), s !== null && ((a = s.dehydrated), a !== null)))
    return Yv(e, t, i, r, a, s, n);
  if (o) {
    (o = r.fallback), (i = t.mode), (s = e.child), (a = s.sibling);
    var u = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== s
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = En(s, u)), (r.subtreeFlags = s.subtreeFlags & 14680064)),
      a !== null ? (o = En(a, o)) : ((o = Gn(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? Xa(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Ja),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = En(o, { mode: "visible", children: r.children })),
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
function dc(e, t) {
  return (
    (t = ql({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function To(e, t, n, r) {
  return (
    r !== null && qu(r),
    Fr(t, e.child, null, n),
    (e = dc(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Yv(e, t, n, r, s, o, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Gi(Error(O(422)))), To(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (s = t.mode),
        (r = ql({ mode: "visible", children: r.children }, s, 0, null)),
        (o = Gn(o, s, i, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && Fr(t, e.child, null, i),
        (t.child.memoizedState = Xa(i)),
        (t.memoizedState = Ja),
        o);
  if (!(t.mode & 1)) return To(e, t, i, null);
  if (s.data === "$!") {
    if (((r = s.nextSibling && s.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (o = Error(O(419))), (r = Gi(o, r, void 0)), To(e, t, i, r);
  }
  if (((a = (i & e.childLanes) !== 0), He || a)) {
    if (((r = Se), r !== null)) {
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
          ((o.retryLane = s), Xt(e, s), Nt(r, e, s, -1));
    }
    return yc(), (r = Gi(Error(O(421)))), To(e, t, i, r);
  }
  return s.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = d0.bind(null, e)),
      (s._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (qe = jn(s.nextSibling)),
      (Ze = t),
      (le = !0),
      (vt = null),
      e !== null &&
        ((ut[ct++] = Ht),
        (ut[ct++] = Vt),
        (ut[ct++] = Xn),
        (Ht = e.id),
        (Vt = e.overflow),
        (Xn = t)),
      (t = dc(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Yd(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Wa(e.return, t, n);
}
function Qi(e, t, n, r, s) {
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
function Xh(e, t, n) {
  var r = t.pendingProps,
    s = r.revealOrder,
    o = r.tail;
  if ((De(e, t, r.children, n), (r = ie.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Yd(e, n, t);
        else if (e.tag === 19) Yd(e, n, t);
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
  if ((ne(ie, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (s) {
      case "forwards":
        for (n = t.child, s = null; n !== null; )
          (e = n.alternate),
            e !== null && hl(e) === null && (s = n),
            (n = n.sibling);
        (n = s),
          n === null
            ? ((s = t.child), (t.child = null))
            : ((s = n.sibling), (n.sibling = null)),
          Qi(t, !1, s, n, o);
        break;
      case "backwards":
        for (n = null, s = t.child, t.child = null; s !== null; ) {
          if (((e = s.alternate), e !== null && hl(e) === null)) {
            t.child = s;
            break;
          }
          (e = s.sibling), (s.sibling = n), (n = s), (s = e);
        }
        Qi(t, !0, n, null, o);
        break;
      case "together":
        Qi(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Ko(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function qt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Yn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(O(153));
  if (t.child !== null) {
    for (
      e = t.child, n = En(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = En(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Zv(e, t, n) {
  switch (t.tag) {
    case 3:
      Qh(t), Ar();
      break;
    case 5:
      Sh(t);
      break;
    case 1:
      Ke(t.type) && al(t);
      break;
    case 4:
      rc(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        s = t.memoizedProps.value;
      ne(dl, r._currentValue), (r._currentValue = s);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (ne(ie, ie.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Jh(e, t, n)
          : (ne(ie, ie.current & 1),
            (e = qt(e, t, n)),
            e !== null ? e.sibling : null);
      ne(ie, ie.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Xh(e, t, n);
        t.flags |= 128;
      }
      if (
        ((s = t.memoizedState),
        s !== null &&
          ((s.rendering = null), (s.tail = null), (s.lastEffect = null)),
        ne(ie, ie.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Kh(e, t, n);
  }
  return qt(e, t, n);
}
var qh, qa, Yh, Zh;
qh = function (e, t) {
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
qa = function () {};
Yh = function (e, t, n, r) {
  var s = e.memoizedProps;
  if (s !== r) {
    (e = t.stateNode), Hn(Lt.current);
    var o = null;
    switch (n) {
      case "input":
        (s = va(e, s)), (r = va(e, r)), (o = []);
        break;
      case "select":
        (s = ce({}, s, { value: void 0 })),
          (r = ce({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (s = Sa(e, s)), (r = Sa(e, r)), (o = []);
        break;
      default:
        typeof s.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = ll);
    }
    Ea(n, r);
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
            (Rs.hasOwnProperty(c)
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
              (Rs.hasOwnProperty(c)
                ? (u != null && c === "onScroll" && se("scroll", e),
                  o || a === u || (o = []))
                : (o = o || []).push(c, u));
    }
    n && (o = o || []).push("style", n);
    var c = o;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Zh = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function us(e, t) {
  if (!le)
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
function Ie(e) {
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
function e0(e, t, n) {
  var r = t.pendingProps;
  switch ((Xu(t), t.tag)) {
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
      return Ie(t), null;
    case 1:
      return Ke(t.type) && il(), Ie(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Mr(),
        oe(Ve),
        oe($e),
        oc(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Po(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), vt !== null && (ou(vt), (vt = null)))),
        qa(e, t),
        Ie(t),
        null
      );
    case 5:
      sc(t);
      var s = Hn(Us.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Yh(e, t, n, r, s),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(O(166));
          return Ie(t), null;
        }
        if (((e = Hn(Lt.current)), Po(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[Tt] = t), (r[Ms] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              se("cancel", r), se("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              se("load", r);
              break;
            case "video":
            case "audio":
              for (s = 0; s < gs.length; s++) se(gs[s], r);
              break;
            case "source":
              se("error", r);
              break;
            case "img":
            case "image":
            case "link":
              se("error", r), se("load", r);
              break;
            case "details":
              se("toggle", r);
              break;
            case "input":
              id(r, o), se("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                se("invalid", r);
              break;
            case "textarea":
              ud(r, o), se("invalid", r);
          }
          Ea(n, o), (s = null);
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var a = o[i];
              i === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (o.suppressHydrationWarning !== !0 &&
                      Ro(r.textContent, a, e),
                    (s = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (o.suppressHydrationWarning !== !0 &&
                      Ro(r.textContent, a, e),
                    (s = ["children", "" + a]))
                : Rs.hasOwnProperty(i) &&
                  a != null &&
                  i === "onScroll" &&
                  se("scroll", r);
            }
          switch (n) {
            case "input":
              jo(r), ad(r, o, !0);
              break;
            case "textarea":
              jo(r), cd(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = ll);
          }
          (r = s), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = s.nodeType === 9 ? s : s.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = _p(n)),
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
            (e[Tt] = t),
            (e[Ms] = r),
            qh(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = Ca(n, r)), n)) {
              case "dialog":
                se("cancel", e), se("close", e), (s = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                se("load", e), (s = r);
                break;
              case "video":
              case "audio":
                for (s = 0; s < gs.length; s++) se(gs[s], e);
                s = r;
                break;
              case "source":
                se("error", e), (s = r);
                break;
              case "img":
              case "image":
              case "link":
                se("error", e), se("load", e), (s = r);
                break;
              case "details":
                se("toggle", e), (s = r);
                break;
              case "input":
                id(e, r), (s = va(e, r)), se("invalid", e);
                break;
              case "option":
                s = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (s = ce({}, r, { value: void 0 })),
                  se("invalid", e);
                break;
              case "textarea":
                ud(e, r), (s = Sa(e, r)), se("invalid", e);
                break;
              default:
                s = r;
            }
            Ea(n, s), (a = s);
            for (o in a)
              if (a.hasOwnProperty(o)) {
                var u = a[o];
                o === "style"
                  ? Op(e, u)
                  : o === "dangerouslySetInnerHTML"
                  ? ((u = u ? u.__html : void 0), u != null && Rp(e, u))
                  : o === "children"
                  ? typeof u == "string"
                    ? (n !== "textarea" || u !== "") && Ps(e, u)
                    : typeof u == "number" && Ps(e, "" + u)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (Rs.hasOwnProperty(o)
                      ? u != null && o === "onScroll" && se("scroll", e)
                      : u != null && Du(e, o, u, i));
              }
            switch (n) {
              case "input":
                jo(e), ad(e, r, !1);
                break;
              case "textarea":
                jo(e), cd(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + kn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Rr(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      Rr(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof s.onClick == "function" && (e.onclick = ll);
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
      return Ie(t), null;
    case 6:
      if (e && t.stateNode != null) Zh(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(O(166));
        if (((n = Hn(Us.current)), Hn(Lt.current), Po(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Tt] = t),
            (o = r.nodeValue !== n) && ((e = Ze), e !== null))
          )
            switch (e.tag) {
              case 3:
                Ro(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Ro(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Tt] = t),
            (t.stateNode = r);
      }
      return Ie(t), null;
    case 13:
      if (
        (oe(ie),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (le && qe !== null && t.mode & 1 && !(t.flags & 128))
          yh(), Ar(), (t.flags |= 98560), (o = !1);
        else if (((o = Po(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(O(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(O(317));
            o[Tt] = t;
          } else
            Ar(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Ie(t), (o = !1);
        } else vt !== null && (ou(vt), (vt = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ie.current & 1 ? je === 0 && (je = 3) : yc())),
          t.updateQueue !== null && (t.flags |= 4),
          Ie(t),
          null);
    case 4:
      return (
        Mr(), qa(e, t), e === null && As(t.stateNode.containerInfo), Ie(t), null
      );
    case 10:
      return ec(t.type._context), Ie(t), null;
    case 17:
      return Ke(t.type) && il(), Ie(t), null;
    case 19:
      if ((oe(ie), (o = t.memoizedState), o === null)) return Ie(t), null;
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) us(o, !1);
        else {
          if (je !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = hl(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    us(o, !1),
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
                return ne(ie, (ie.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            me() > Ur &&
            ((t.flags |= 128), (r = !0), us(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = hl(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              us(o, !0),
              o.tail === null && o.tailMode === "hidden" && !i.alternate && !le)
            )
              return Ie(t), null;
          } else
            2 * me() - o.renderingStartTime > Ur &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), us(o, !1), (t.lanes = 4194304));
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
          (o.renderingStartTime = me()),
          (t.sibling = null),
          (n = ie.current),
          ne(ie, r ? (n & 1) | 2 : n & 1),
          t)
        : (Ie(t), null);
    case 22:
    case 23:
      return (
        gc(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Xe & 1073741824 && (Ie(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Ie(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(O(156, t.tag));
}
function t0(e, t) {
  switch ((Xu(t), t.tag)) {
    case 1:
      return (
        Ke(t.type) && il(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Mr(),
        oe(Ve),
        oe($e),
        oc(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return sc(t), null;
    case 13:
      if (
        (oe(ie), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(O(340));
        Ar();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return oe(ie), null;
    case 4:
      return Mr(), null;
    case 10:
      return ec(t.type._context), null;
    case 22:
    case 23:
      return gc(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Io = !1,
  Le = !1,
  n0 = typeof WeakSet == "function" ? WeakSet : Set,
  L = null;
function Cr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        de(e, t, r);
      }
    else n.current = null;
}
function Ya(e, t, n) {
  try {
    n();
  } catch (r) {
    de(e, t, r);
  }
}
var Zd = !1;
function r0(e, t) {
  if (((Da = rl), (e = sh()), Qu(e))) {
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
            h = null;
          t: for (;;) {
            for (
              var v;
              f !== n || (s !== 0 && f.nodeType !== 3) || (a = i + s),
                f !== o || (r !== 0 && f.nodeType !== 3) || (u = i + r),
                f.nodeType === 3 && (i += f.nodeValue.length),
                (v = f.firstChild) !== null;

            )
              (h = f), (f = v);
            for (;;) {
              if (f === e) break t;
              if (
                (h === n && ++c === s && (a = i),
                h === o && ++d === r && (u = i),
                (v = f.nextSibling) !== null)
              )
                break;
              (f = h), (h = f.parentNode);
            }
            f = v;
          }
          n = a === -1 || u === -1 ? null : { start: a, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Aa = { focusedElem: e, selectionRange: n }, rl = !1, L = t; L !== null; )
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
                    y = x.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? S : yt(t.type, S),
                      j
                    );
                  x.__reactInternalSnapshotBeforeUpdate = y;
                }
                break;
              case 3:
                var g = t.stateNode.containerInfo;
                g.nodeType === 1
                  ? (g.textContent = "")
                  : g.nodeType === 9 &&
                    g.documentElement &&
                    g.removeChild(g.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(O(163));
            }
        } catch (w) {
          de(t, t.return, w);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (L = e);
          break;
        }
        L = t.return;
      }
  return (m = Zd), (Zd = !1), m;
}
function Cs(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var s = (r = r.next);
    do {
      if ((s.tag & e) === e) {
        var o = s.destroy;
        (s.destroy = void 0), o !== void 0 && Ya(t, n, o);
      }
      s = s.next;
    } while (s !== r);
  }
}
function Jl(e, t) {
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
function Za(e) {
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
function em(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), em(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Tt], delete t[Ms], delete t[ba], delete t[bv], delete t[Uv])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function tm(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ef(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || tm(e.return)) return null;
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
function eu(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = ll));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (eu(e, t, n), e = e.sibling; e !== null; ) eu(e, t, n), (e = e.sibling);
}
function tu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (tu(e, t, n), e = e.sibling; e !== null; ) tu(e, t, n), (e = e.sibling);
}
var ke = null,
  xt = !1;
function ln(e, t, n) {
  for (n = n.child; n !== null; ) nm(e, t, n), (n = n.sibling);
}
function nm(e, t, n) {
  if (It && typeof It.onCommitFiberUnmount == "function")
    try {
      It.onCommitFiberUnmount(zl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Le || Cr(n, t);
    case 6:
      var r = ke,
        s = xt;
      (ke = null),
        ln(e, t, n),
        (ke = r),
        (xt = s),
        ke !== null &&
          (xt
            ? ((e = ke),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ke.removeChild(n.stateNode));
      break;
    case 18:
      ke !== null &&
        (xt
          ? ((e = ke),
            (n = n.stateNode),
            e.nodeType === 8
              ? zi(e.parentNode, n)
              : e.nodeType === 1 && zi(e, n),
            Ls(e))
          : zi(ke, n.stateNode));
      break;
    case 4:
      (r = ke),
        (s = xt),
        (ke = n.stateNode.containerInfo),
        (xt = !0),
        ln(e, t, n),
        (ke = r),
        (xt = s);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Le &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        s = r = r.next;
        do {
          var o = s,
            i = o.destroy;
          (o = o.tag),
            i !== void 0 && (o & 2 || o & 4) && Ya(n, t, i),
            (s = s.next);
        } while (s !== r);
      }
      ln(e, t, n);
      break;
    case 1:
      if (
        !Le &&
        (Cr(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          de(n, t, a);
        }
      ln(e, t, n);
      break;
    case 21:
      ln(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Le = (r = Le) || n.memoizedState !== null), ln(e, t, n), (Le = r))
        : ln(e, t, n);
      break;
    default:
      ln(e, t, n);
  }
}
function tf(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new n0()),
      t.forEach(function (r) {
        var s = f0.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(s, s));
      });
  }
}
function gt(e, t) {
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
              (ke = a.stateNode), (xt = !1);
              break e;
            case 3:
              (ke = a.stateNode.containerInfo), (xt = !0);
              break e;
            case 4:
              (ke = a.stateNode.containerInfo), (xt = !0);
              break e;
          }
          a = a.return;
        }
        if (ke === null) throw Error(O(160));
        nm(o, i, s), (ke = null), (xt = !1);
        var u = s.alternate;
        u !== null && (u.return = null), (s.return = null);
      } catch (c) {
        de(s, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) rm(t, e), (t = t.sibling);
}
function rm(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((gt(t, e), Rt(e), r & 4)) {
        try {
          Cs(3, e, e.return), Jl(3, e);
        } catch (S) {
          de(e, e.return, S);
        }
        try {
          Cs(5, e, e.return);
        } catch (S) {
          de(e, e.return, S);
        }
      }
      break;
    case 1:
      gt(t, e), Rt(e), r & 512 && n !== null && Cr(n, n.return);
      break;
    case 5:
      if (
        (gt(t, e),
        Rt(e),
        r & 512 && n !== null && Cr(n, n.return),
        e.flags & 32)
      ) {
        var s = e.stateNode;
        try {
          Ps(s, "");
        } catch (S) {
          de(e, e.return, S);
        }
      }
      if (r & 4 && ((s = e.stateNode), s != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          a = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            a === "input" && o.type === "radio" && o.name != null && Cp(s, o),
              Ca(a, i);
            var c = Ca(a, o);
            for (i = 0; i < u.length; i += 2) {
              var d = u[i],
                f = u[i + 1];
              d === "style"
                ? Op(s, f)
                : d === "dangerouslySetInnerHTML"
                ? Rp(s, f)
                : d === "children"
                ? Ps(s, f)
                : Du(s, d, f, c);
            }
            switch (a) {
              case "input":
                ja(s, o);
                break;
              case "textarea":
                kp(s, o);
                break;
              case "select":
                var h = s._wrapperState.wasMultiple;
                s._wrapperState.wasMultiple = !!o.multiple;
                var v = o.value;
                v != null
                  ? Rr(s, !!o.multiple, v, !1)
                  : h !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Rr(s, !!o.multiple, o.defaultValue, !0)
                      : Rr(s, !!o.multiple, o.multiple ? [] : "", !1));
            }
            s[Ms] = o;
          } catch (S) {
            de(e, e.return, S);
          }
      }
      break;
    case 6:
      if ((gt(t, e), Rt(e), r & 4)) {
        if (e.stateNode === null) throw Error(O(162));
        (s = e.stateNode), (o = e.memoizedProps);
        try {
          s.nodeValue = o;
        } catch (S) {
          de(e, e.return, S);
        }
      }
      break;
    case 3:
      if (
        (gt(t, e), Rt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Ls(t.containerInfo);
        } catch (S) {
          de(e, e.return, S);
        }
      break;
    case 4:
      gt(t, e), Rt(e);
      break;
    case 13:
      gt(t, e),
        Rt(e),
        (s = e.child),
        s.flags & 8192 &&
          ((o = s.memoizedState !== null),
          (s.stateNode.isHidden = o),
          !o ||
            (s.alternate !== null && s.alternate.memoizedState !== null) ||
            (hc = me())),
        r & 4 && tf(e);
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Le = (c = Le) || d), gt(t, e), (Le = c)) : gt(t, e),
        Rt(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !d && e.mode & 1)
        )
          for (L = e, d = e.child; d !== null; ) {
            for (f = L = d; L !== null; ) {
              switch (((h = L), (v = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Cs(4, h, h.return);
                  break;
                case 1:
                  Cr(h, h.return);
                  var m = h.stateNode;
                  if (typeof m.componentWillUnmount == "function") {
                    (r = h), (n = h.return);
                    try {
                      (t = r),
                        (m.props = t.memoizedProps),
                        (m.state = t.memoizedState),
                        m.componentWillUnmount();
                    } catch (S) {
                      de(r, n, S);
                    }
                  }
                  break;
                case 5:
                  Cr(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    rf(f);
                    continue;
                  }
              }
              v !== null ? ((v.return = h), (L = v)) : rf(f);
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
                      (a.style.display = Pp("display", i)));
              } catch (S) {
                de(e, e.return, S);
              }
            }
          } else if (f.tag === 6) {
            if (d === null)
              try {
                f.stateNode.nodeValue = c ? "" : f.memoizedProps;
              } catch (S) {
                de(e, e.return, S);
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
      gt(t, e), Rt(e), r & 4 && tf(e);
      break;
    case 21:
      break;
    default:
      gt(t, e), Rt(e);
  }
}
function Rt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (tm(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(O(160));
      }
      switch (r.tag) {
        case 5:
          var s = r.stateNode;
          r.flags & 32 && (Ps(s, ""), (r.flags &= -33));
          var o = ef(e);
          tu(e, o, s);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            a = ef(e);
          eu(e, a, i);
          break;
        default:
          throw Error(O(161));
      }
    } catch (u) {
      de(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function s0(e, t, n) {
  (L = e), sm(e);
}
function sm(e, t, n) {
  for (var r = (e.mode & 1) !== 0; L !== null; ) {
    var s = L,
      o = s.child;
    if (s.tag === 22 && r) {
      var i = s.memoizedState !== null || Io;
      if (!i) {
        var a = s.alternate,
          u = (a !== null && a.memoizedState !== null) || Le;
        a = Io;
        var c = Le;
        if (((Io = i), (Le = u) && !c))
          for (L = s; L !== null; )
            (i = L),
              (u = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? sf(s)
                : u !== null
                ? ((u.return = i), (L = u))
                : sf(s);
        for (; o !== null; ) (L = o), sm(o), (o = o.sibling);
        (L = s), (Io = a), (Le = c);
      }
      nf(e);
    } else
      s.subtreeFlags & 8772 && o !== null ? ((o.return = s), (L = o)) : nf(e);
  }
}
function nf(e) {
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
              Le || Jl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Le)
                if (n === null) r.componentDidMount();
                else {
                  var s =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : yt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    s,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && Ud(t, o, r);
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
                Ud(t, i, n);
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
                    f !== null && Ls(f);
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
              throw Error(O(163));
          }
        Le || (t.flags & 512 && Za(t));
      } catch (h) {
        de(t, t.return, h);
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
function rf(e) {
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
function sf(e) {
  for (; L !== null; ) {
    var t = L;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Jl(4, t);
          } catch (u) {
            de(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var s = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              de(t, s, u);
            }
          }
          var o = t.return;
          try {
            Za(t);
          } catch (u) {
            de(t, o, u);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Za(t);
          } catch (u) {
            de(t, i, u);
          }
      }
    } catch (u) {
      de(t, t.return, u);
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
var o0 = Math.ceil,
  yl = en.ReactCurrentDispatcher,
  fc = en.ReactCurrentOwner,
  pt = en.ReactCurrentBatchConfig,
  Q = 0,
  Se = null,
  ye = null,
  _e = 0,
  Xe = 0,
  kr = Ln(0),
  je = 0,
  Hs = null,
  Yn = 0,
  Xl = 0,
  pc = 0,
  ks = null,
  Be = null,
  hc = 0,
  Ur = 1 / 0,
  Ut = null,
  xl = !1,
  nu = null,
  Sn = null,
  Lo = !1,
  mn = null,
  vl = 0,
  _s = 0,
  ru = null,
  Go = -1,
  Qo = 0;
function Ae() {
  return Q & 6 ? me() : Go !== -1 ? Go : (Go = me());
}
function Nn(e) {
  return e.mode & 1
    ? Q & 2 && _e !== 0
      ? _e & -_e
      : Bv.transition !== null
      ? (Qo === 0 && (Qo = Bp()), Qo)
      : ((e = Y),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Jp(e.type))),
        e)
    : 1;
}
function Nt(e, t, n, r) {
  if (50 < _s) throw ((_s = 0), (ru = null), Error(O(185)));
  Zs(e, n, r),
    (!(Q & 2) || e !== Se) &&
      (e === Se && (!(Q & 2) && (Xl |= n), je === 4 && pn(e, _e)),
      Ge(e, r),
      n === 1 && Q === 0 && !(t.mode & 1) && ((Ur = me() + 500), Kl && $n()));
}
function Ge(e, t) {
  var n = e.callbackNode;
  Bx(e, t);
  var r = nl(e, e === Se ? _e : 0);
  if (r === 0)
    n !== null && pd(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && pd(n), t === 1))
      e.tag === 0 ? zv(of.bind(null, e)) : hh(of.bind(null, e)),
        Fv(function () {
          !(Q & 6) && $n();
        }),
        (n = null);
    else {
      switch (Wp(r)) {
        case 1:
          n = Uu;
          break;
        case 4:
          n = Up;
          break;
        case 16:
          n = tl;
          break;
        case 536870912:
          n = zp;
          break;
        default:
          n = tl;
      }
      n = fm(n, om.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function om(e, t) {
  if (((Go = -1), (Qo = 0), Q & 6)) throw Error(O(327));
  var n = e.callbackNode;
  if (Lr() && e.callbackNode !== n) return null;
  var r = nl(e, e === Se ? _e : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = jl(e, r);
  else {
    t = r;
    var s = Q;
    Q |= 2;
    var o = im();
    (Se !== e || _e !== t) && ((Ut = null), (Ur = me() + 500), Kn(e, t));
    do
      try {
        a0();
        break;
      } catch (a) {
        lm(e, a);
      }
    while (!0);
    Zu(),
      (yl.current = o),
      (Q = s),
      ye !== null ? (t = 0) : ((Se = null), (_e = 0), (t = je));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((s = Oa(e)), s !== 0 && ((r = s), (t = su(e, s)))), t === 1)
    )
      throw ((n = Hs), Kn(e, 0), pn(e, r), Ge(e, me()), n);
    if (t === 6) pn(e, r);
    else {
      if (
        ((s = e.current.alternate),
        !(r & 30) &&
          !l0(s) &&
          ((t = jl(e, r)),
          t === 2 && ((o = Oa(e)), o !== 0 && ((r = o), (t = su(e, o)))),
          t === 1))
      )
        throw ((n = Hs), Kn(e, 0), pn(e, r), Ge(e, me()), n);
      switch (((e.finishedWork = s), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(O(345));
        case 2:
          bn(e, Be, Ut);
          break;
        case 3:
          if (
            (pn(e, r), (r & 130023424) === r && ((t = hc + 500 - me()), 10 < t))
          ) {
            if (nl(e, 0) !== 0) break;
            if (((s = e.suspendedLanes), (s & r) !== r)) {
              Ae(), (e.pingedLanes |= e.suspendedLanes & s);
              break;
            }
            e.timeoutHandle = Ma(bn.bind(null, e, Be, Ut), t);
            break;
          }
          bn(e, Be, Ut);
          break;
        case 4:
          if ((pn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, s = -1; 0 < r; ) {
            var i = 31 - St(r);
            (o = 1 << i), (i = t[i]), i > s && (s = i), (r &= ~o);
          }
          if (
            ((r = s),
            (r = me() - r),
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
                : 1960 * o0(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Ma(bn.bind(null, e, Be, Ut), r);
            break;
          }
          bn(e, Be, Ut);
          break;
        case 5:
          bn(e, Be, Ut);
          break;
        default:
          throw Error(O(329));
      }
    }
  }
  return Ge(e, me()), e.callbackNode === n ? om.bind(null, e) : null;
}
function su(e, t) {
  var n = ks;
  return (
    e.current.memoizedState.isDehydrated && (Kn(e, t).flags |= 256),
    (e = jl(e, t)),
    e !== 2 && ((t = Be), (Be = n), t !== null && ou(t)),
    e
  );
}
function ou(e) {
  Be === null ? (Be = e) : Be.push.apply(Be, e);
}
function l0(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var s = n[r],
            o = s.getSnapshot;
          s = s.value;
          try {
            if (!kt(o(), s)) return !1;
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
function pn(e, t) {
  for (
    t &= ~pc,
      t &= ~Xl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - St(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function of(e) {
  if (Q & 6) throw Error(O(327));
  Lr();
  var t = nl(e, 0);
  if (!(t & 1)) return Ge(e, me()), null;
  var n = jl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Oa(e);
    r !== 0 && ((t = r), (n = su(e, r)));
  }
  if (n === 1) throw ((n = Hs), Kn(e, 0), pn(e, t), Ge(e, me()), n);
  if (n === 6) throw Error(O(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    bn(e, Be, Ut),
    Ge(e, me()),
    null
  );
}
function mc(e, t) {
  var n = Q;
  Q |= 1;
  try {
    return e(t);
  } finally {
    (Q = n), Q === 0 && ((Ur = me() + 500), Kl && $n());
  }
}
function Zn(e) {
  mn !== null && mn.tag === 0 && !(Q & 6) && Lr();
  var t = Q;
  Q |= 1;
  var n = pt.transition,
    r = Y;
  try {
    if (((pt.transition = null), (Y = 1), e)) return e();
  } finally {
    (Y = r), (pt.transition = n), (Q = t), !(Q & 6) && $n();
  }
}
function gc() {
  (Xe = kr.current), oe(kr);
}
function Kn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Av(n)), ye !== null))
    for (n = ye.return; n !== null; ) {
      var r = n;
      switch ((Xu(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && il();
          break;
        case 3:
          Mr(), oe(Ve), oe($e), oc();
          break;
        case 5:
          sc(r);
          break;
        case 4:
          Mr();
          break;
        case 13:
          oe(ie);
          break;
        case 19:
          oe(ie);
          break;
        case 10:
          ec(r.type._context);
          break;
        case 22:
        case 23:
          gc();
      }
      n = n.return;
    }
  if (
    ((Se = e),
    (ye = e = En(e.current, null)),
    (_e = Xe = t),
    (je = 0),
    (Hs = null),
    (pc = Xl = Yn = 0),
    (Be = ks = null),
    Wn !== null)
  ) {
    for (t = 0; t < Wn.length; t++)
      if (((n = Wn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var s = r.next,
          o = n.pending;
        if (o !== null) {
          var i = o.next;
          (o.next = s), (r.next = i);
        }
        n.pending = r;
      }
    Wn = null;
  }
  return e;
}
function lm(e, t) {
  do {
    var n = ye;
    try {
      if ((Zu(), (Ho.current = gl), ml)) {
        for (var r = ae.memoizedState; r !== null; ) {
          var s = r.queue;
          s !== null && (s.pending = null), (r = r.next);
        }
        ml = !1;
      }
      if (
        ((qn = 0),
        (we = ve = ae = null),
        (Es = !1),
        (zs = 0),
        (fc.current = null),
        n === null || n.return === null)
      ) {
        (je = 1), (Hs = t), (ye = null);
        break;
      }
      e: {
        var o = e,
          i = n.return,
          a = n,
          u = t;
        if (
          ((t = _e),
          (a.flags |= 32768),
          u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var c = u,
            d = a,
            f = d.tag;
          if (!(d.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var h = d.alternate;
            h
              ? ((d.updateQueue = h.updateQueue),
                (d.memoizedState = h.memoizedState),
                (d.lanes = h.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var v = Kd(i);
          if (v !== null) {
            (v.flags &= -257),
              Gd(v, i, a, o, t),
              v.mode & 1 && Vd(o, c, t),
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
              Vd(o, c, t), yc();
              break e;
            }
            u = Error(O(426));
          }
        } else if (le && a.mode & 1) {
          var j = Kd(i);
          if (j !== null) {
            !(j.flags & 65536) && (j.flags |= 256),
              Gd(j, i, a, o, t),
              qu(br(u, a));
            break e;
          }
        }
        (o = u = br(u, a)),
          je !== 4 && (je = 2),
          ks === null ? (ks = [o]) : ks.push(o),
          (o = i);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var x = Wh(o, u, t);
              bd(o, x);
              break e;
            case 1:
              a = u;
              var y = o.type,
                g = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof y.getDerivedStateFromError == "function" ||
                  (g !== null &&
                    typeof g.componentDidCatch == "function" &&
                    (Sn === null || !Sn.has(g))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var w = Hh(o, a, t);
                bd(o, w);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      um(n);
    } catch (k) {
      (t = k), ye === n && n !== null && (ye = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function im() {
  var e = yl.current;
  return (yl.current = gl), e === null ? gl : e;
}
function yc() {
  (je === 0 || je === 3 || je === 2) && (je = 4),
    Se === null || (!(Yn & 268435455) && !(Xl & 268435455)) || pn(Se, _e);
}
function jl(e, t) {
  var n = Q;
  Q |= 2;
  var r = im();
  (Se !== e || _e !== t) && ((Ut = null), Kn(e, t));
  do
    try {
      i0();
      break;
    } catch (s) {
      lm(e, s);
    }
  while (!0);
  if ((Zu(), (Q = n), (yl.current = r), ye !== null)) throw Error(O(261));
  return (Se = null), (_e = 0), je;
}
function i0() {
  for (; ye !== null; ) am(ye);
}
function a0() {
  for (; ye !== null && !Lx(); ) am(ye);
}
function am(e) {
  var t = dm(e.alternate, e, Xe);
  (e.memoizedProps = e.pendingProps),
    t === null ? um(e) : (ye = t),
    (fc.current = null);
}
function um(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = t0(n, t)), n !== null)) {
        (n.flags &= 32767), (ye = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (je = 6), (ye = null);
        return;
      }
    } else if (((n = e0(n, t, Xe)), n !== null)) {
      ye = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ye = t;
      return;
    }
    ye = t = e;
  } while (t !== null);
  je === 0 && (je = 5);
}
function bn(e, t, n) {
  var r = Y,
    s = pt.transition;
  try {
    (pt.transition = null), (Y = 1), u0(e, t, n, r);
  } finally {
    (pt.transition = s), (Y = r);
  }
  return null;
}
function u0(e, t, n, r) {
  do Lr();
  while (mn !== null);
  if (Q & 6) throw Error(O(327));
  n = e.finishedWork;
  var s = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(O(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (Wx(e, o),
    e === Se && ((ye = Se = null), (_e = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Lo ||
      ((Lo = !0),
      fm(tl, function () {
        return Lr(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = pt.transition), (pt.transition = null);
    var i = Y;
    Y = 1;
    var a = Q;
    (Q |= 4),
      (fc.current = null),
      r0(e, n),
      rm(n, e),
      Pv(Aa),
      (rl = !!Da),
      (Aa = Da = null),
      (e.current = n),
      s0(n),
      $x(),
      (Q = a),
      (Y = i),
      (pt.transition = o);
  } else e.current = n;
  if (
    (Lo && ((Lo = !1), (mn = e), (vl = s)),
    (o = e.pendingLanes),
    o === 0 && (Sn = null),
    Fx(n.stateNode),
    Ge(e, me()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (s = t[n]), r(s.value, { componentStack: s.stack, digest: s.digest });
  if (xl) throw ((xl = !1), (e = nu), (nu = null), e);
  return (
    vl & 1 && e.tag !== 0 && Lr(),
    (o = e.pendingLanes),
    o & 1 ? (e === ru ? _s++ : ((_s = 0), (ru = e))) : (_s = 0),
    $n(),
    null
  );
}
function Lr() {
  if (mn !== null) {
    var e = Wp(vl),
      t = pt.transition,
      n = Y;
    try {
      if (((pt.transition = null), (Y = 16 > e ? 16 : e), mn === null))
        var r = !1;
      else {
        if (((e = mn), (mn = null), (vl = 0), Q & 6)) throw Error(O(331));
        var s = Q;
        for (Q |= 4, L = e.current; L !== null; ) {
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
                      Cs(8, d, o);
                  }
                  var f = d.child;
                  if (f !== null) (f.return = d), (L = f);
                  else
                    for (; L !== null; ) {
                      d = L;
                      var h = d.sibling,
                        v = d.return;
                      if ((em(d), d === c)) {
                        L = null;
                        break;
                      }
                      if (h !== null) {
                        (h.return = v), (L = h);
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
                    Cs(9, o, o.return);
                }
              var x = o.sibling;
              if (x !== null) {
                (x.return = o.return), (L = x);
                break e;
              }
              L = o.return;
            }
        }
        var y = e.current;
        for (L = y; L !== null; ) {
          i = L;
          var g = i.child;
          if (i.subtreeFlags & 2064 && g !== null) (g.return = i), (L = g);
          else
            e: for (i = y; L !== null; ) {
              if (((a = L), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Jl(9, a);
                  }
                } catch (k) {
                  de(a, a.return, k);
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
          ((Q = s), $n(), It && typeof It.onPostCommitFiberRoot == "function")
        )
          try {
            It.onPostCommitFiberRoot(zl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (Y = n), (pt.transition = t);
    }
  }
  return !1;
}
function lf(e, t, n) {
  (t = br(n, t)),
    (t = Wh(e, t, 1)),
    (e = wn(e, t, 1)),
    (t = Ae()),
    e !== null && (Zs(e, 1, t), Ge(e, t));
}
function de(e, t, n) {
  if (e.tag === 3) lf(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        lf(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Sn === null || !Sn.has(r)))
        ) {
          (e = br(n, e)),
            (e = Hh(t, e, 1)),
            (t = wn(t, e, 1)),
            (e = Ae()),
            t !== null && (Zs(t, 1, e), Ge(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function c0(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Ae()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Se === e &&
      (_e & n) === n &&
      (je === 4 || (je === 3 && (_e & 130023424) === _e && 500 > me() - hc)
        ? Kn(e, 0)
        : (pc |= n)),
    Ge(e, t);
}
function cm(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = No), (No <<= 1), !(No & 130023424) && (No = 4194304))
      : (t = 1));
  var n = Ae();
  (e = Xt(e, t)), e !== null && (Zs(e, t, n), Ge(e, n));
}
function d0(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), cm(e, n);
}
function f0(e, t) {
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
      throw Error(O(314));
  }
  r !== null && r.delete(t), cm(e, n);
}
var dm;
dm = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ve.current) He = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (He = !1), Zv(e, t, n);
      He = !!(e.flags & 131072);
    }
  else (He = !1), le && t.flags & 1048576 && mh(t, cl, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Ko(e, t), (e = t.pendingProps);
      var s = Dr(t, $e.current);
      Ir(t, n), (s = ic(null, t, r, e, s, n));
      var o = ac();
      return (
        (t.flags |= 1),
        typeof s == "object" &&
        s !== null &&
        typeof s.render == "function" &&
        s.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ke(r) ? ((o = !0), al(t)) : (o = !1),
            (t.memoizedState =
              s.state !== null && s.state !== void 0 ? s.state : null),
            nc(t),
            (s.updater = Ql),
            (t.stateNode = s),
            (s._reactInternals = t),
            Va(t, r, e, n),
            (t = Qa(null, t, r, !0, o, n)))
          : ((t.tag = 0), le && o && Ju(t), De(null, t, s, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Ko(e, t),
          (e = t.pendingProps),
          (s = r._init),
          (r = s(r._payload)),
          (t.type = r),
          (s = t.tag = h0(r)),
          (e = yt(r, e)),
          s)
        ) {
          case 0:
            t = Ga(null, t, r, e, n);
            break e;
          case 1:
            t = Xd(null, t, r, e, n);
            break e;
          case 11:
            t = Qd(null, t, r, e, n);
            break e;
          case 14:
            t = Jd(null, t, r, yt(r.type, e), n);
            break e;
        }
        throw Error(O(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : yt(r, s)),
        Ga(e, t, r, s, n)
      );
    case 1:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : yt(r, s)),
        Xd(e, t, r, s, n)
      );
    case 3:
      e: {
        if ((Qh(t), e === null)) throw Error(O(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (s = o.element),
          wh(e, t),
          pl(t, r, null, n);
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
            (s = br(Error(O(423)), t)), (t = qd(e, t, r, n, s));
            break e;
          } else if (r !== s) {
            (s = br(Error(O(424)), t)), (t = qd(e, t, r, n, s));
            break e;
          } else
            for (
              qe = jn(t.stateNode.containerInfo.firstChild),
                Ze = t,
                le = !0,
                vt = null,
                n = vh(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Ar(), r === s)) {
            t = qt(e, t, n);
            break e;
          }
          De(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Sh(t),
        e === null && Ba(t),
        (r = t.type),
        (s = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = s.children),
        Fa(r, s) ? (i = null) : o !== null && Fa(r, o) && (t.flags |= 32),
        Gh(e, t),
        De(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && Ba(t), null;
    case 13:
      return Jh(e, t, n);
    case 4:
      return (
        rc(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Fr(t, null, r, n)) : De(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : yt(r, s)),
        Qd(e, t, r, s, n)
      );
    case 7:
      return De(e, t, t.pendingProps, n), t.child;
    case 8:
      return De(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return De(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (s = t.pendingProps),
          (o = t.memoizedProps),
          (i = s.value),
          ne(dl, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (kt(o.value, i)) {
            if (o.children === s.children && !Ve.current) {
              t = qt(e, t, n);
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
                      (u = Kt(-1, n & -n)), (u.tag = 2);
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
                      Wa(o.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(O(341));
                (i.lanes |= n),
                  (a = i.alternate),
                  a !== null && (a.lanes |= n),
                  Wa(i, n, t),
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
        De(e, t, s.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (s = t.type),
        (r = t.pendingProps.children),
        Ir(t, n),
        (s = ht(s)),
        (r = r(s)),
        (t.flags |= 1),
        De(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (s = yt(r, t.pendingProps)),
        (s = yt(r.type, s)),
        Jd(e, t, r, s, n)
      );
    case 15:
      return Vh(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : yt(r, s)),
        Ko(e, t),
        (t.tag = 1),
        Ke(r) ? ((e = !0), al(t)) : (e = !1),
        Ir(t, n),
        Bh(t, r, s),
        Va(t, r, s, n),
        Qa(null, t, r, !0, e, n)
      );
    case 19:
      return Xh(e, t, n);
    case 22:
      return Kh(e, t, n);
  }
  throw Error(O(156, t.tag));
};
function fm(e, t) {
  return bp(e, t);
}
function p0(e, t, n, r) {
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
function ft(e, t, n, r) {
  return new p0(e, t, n, r);
}
function xc(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function h0(e) {
  if (typeof e == "function") return xc(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Fu)) return 11;
    if (e === Mu) return 14;
  }
  return 2;
}
function En(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = ft(e.tag, t, e.key, e.mode)),
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
function Jo(e, t, n, r, s, o) {
  var i = 2;
  if (((r = e), typeof e == "function")) xc(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case gr:
        return Gn(n.children, s, o, t);
      case Au:
        (i = 8), (s |= 8);
        break;
      case ma:
        return (
          (e = ft(12, n, t, s | 2)), (e.elementType = ma), (e.lanes = o), e
        );
      case ga:
        return (e = ft(13, n, t, s)), (e.elementType = ga), (e.lanes = o), e;
      case ya:
        return (e = ft(19, n, t, s)), (e.elementType = ya), (e.lanes = o), e;
      case Sp:
        return ql(n, s, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case jp:
              i = 10;
              break e;
            case wp:
              i = 9;
              break e;
            case Fu:
              i = 11;
              break e;
            case Mu:
              i = 14;
              break e;
            case un:
              (i = 16), (r = null);
              break e;
          }
        throw Error(O(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = ft(i, n, t, s)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function Gn(e, t, n, r) {
  return (e = ft(7, e, r, t)), (e.lanes = n), e;
}
function ql(e, t, n, r) {
  return (
    (e = ft(22, e, r, t)),
    (e.elementType = Sp),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Ji(e, t, n) {
  return (e = ft(6, e, null, t)), (e.lanes = n), e;
}
function Xi(e, t, n) {
  return (
    (t = ft(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function m0(e, t, n, r, s) {
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
    (this.eventTimes = Oi(0)),
    (this.expirationTimes = Oi(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Oi(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = s),
    (this.mutableSourceEagerHydrationData = null);
}
function vc(e, t, n, r, s, o, i, a, u) {
  return (
    (e = new m0(e, t, n, a, u)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = ft(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    nc(o),
    e
  );
}
function g0(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: mr,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function pm(e) {
  if (!e) return _n;
  e = e._reactInternals;
  e: {
    if (or(e) !== e || e.tag !== 1) throw Error(O(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ke(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(O(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ke(n)) return ph(e, n, t);
  }
  return t;
}
function hm(e, t, n, r, s, o, i, a, u) {
  return (
    (e = vc(n, r, !0, e, s, o, i, a, u)),
    (e.context = pm(null)),
    (n = e.current),
    (r = Ae()),
    (s = Nn(n)),
    (o = Kt(r, s)),
    (o.callback = t ?? null),
    wn(n, o, s),
    (e.current.lanes = s),
    Zs(e, s, r),
    Ge(e, r),
    e
  );
}
function Yl(e, t, n, r) {
  var s = t.current,
    o = Ae(),
    i = Nn(s);
  return (
    (n = pm(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Kt(o, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = wn(s, t, i)),
    e !== null && (Nt(e, s, i, o), Wo(e, s, i)),
    i
  );
}
function wl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function af(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function jc(e, t) {
  af(e, t), (e = e.alternate) && af(e, t);
}
function y0() {
  return null;
}
var mm =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function wc(e) {
  this._internalRoot = e;
}
Zl.prototype.render = wc.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(O(409));
  Yl(e, t, null, null);
};
Zl.prototype.unmount = wc.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Zn(function () {
      Yl(null, e, null, null);
    }),
      (t[Jt] = null);
  }
};
function Zl(e) {
  this._internalRoot = e;
}
Zl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Kp();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < fn.length && t !== 0 && t < fn[n].priority; n++);
    fn.splice(n, 0, e), n === 0 && Qp(e);
  }
};
function Sc(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function ei(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function uf() {}
function x0(e, t, n, r, s) {
  if (s) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var c = wl(i);
        o.call(c);
      };
    }
    var i = hm(t, r, e, 0, null, !1, !1, "", uf);
    return (
      (e._reactRootContainer = i),
      (e[Jt] = i.current),
      As(e.nodeType === 8 ? e.parentNode : e),
      Zn(),
      i
    );
  }
  for (; (s = e.lastChild); ) e.removeChild(s);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var c = wl(u);
      a.call(c);
    };
  }
  var u = vc(e, 0, !1, null, null, !1, !1, "", uf);
  return (
    (e._reactRootContainer = u),
    (e[Jt] = u.current),
    As(e.nodeType === 8 ? e.parentNode : e),
    Zn(function () {
      Yl(t, u, n, r);
    }),
    u
  );
}
function ti(e, t, n, r, s) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof s == "function") {
      var a = s;
      s = function () {
        var u = wl(i);
        a.call(u);
      };
    }
    Yl(t, i, e, s);
  } else i = x0(n, t, e, s, r);
  return wl(i);
}
Hp = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = ms(t.pendingLanes);
        n !== 0 &&
          (zu(t, n | 1), Ge(t, me()), !(Q & 6) && ((Ur = me() + 500), $n()));
      }
      break;
    case 13:
      Zn(function () {
        var r = Xt(e, 1);
        if (r !== null) {
          var s = Ae();
          Nt(r, e, 1, s);
        }
      }),
        jc(e, 1);
  }
};
Bu = function (e) {
  if (e.tag === 13) {
    var t = Xt(e, 134217728);
    if (t !== null) {
      var n = Ae();
      Nt(t, e, 134217728, n);
    }
    jc(e, 134217728);
  }
};
Vp = function (e) {
  if (e.tag === 13) {
    var t = Nn(e),
      n = Xt(e, t);
    if (n !== null) {
      var r = Ae();
      Nt(n, e, t, r);
    }
    jc(e, t);
  }
};
Kp = function () {
  return Y;
};
Gp = function (e, t) {
  var n = Y;
  try {
    return (Y = e), t();
  } finally {
    Y = n;
  }
};
_a = function (e, t, n) {
  switch (t) {
    case "input":
      if ((ja(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
            var s = Vl(r);
            if (!s) throw Error(O(90));
            Ep(r), ja(r, s);
          }
        }
      }
      break;
    case "textarea":
      kp(e, n);
      break;
    case "select":
      (t = n.value), t != null && Rr(e, !!n.multiple, t, !1);
  }
};
Lp = mc;
$p = Zn;
var v0 = { usingClientEntryPoint: !1, Events: [to, jr, Vl, Tp, Ip, mc] },
  cs = {
    findFiberByHostInstance: Bn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  j0 = {
    bundleType: cs.bundleType,
    version: cs.version,
    rendererPackageName: cs.rendererPackageName,
    rendererConfig: cs.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: en.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Fp(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: cs.findFiberByHostInstance || y0,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var $o = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!$o.isDisabled && $o.supportsFiber)
    try {
      (zl = $o.inject(j0)), (It = $o);
    } catch {}
}
st.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = v0;
st.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Sc(t)) throw Error(O(200));
  return g0(e, t, null, n);
};
st.createRoot = function (e, t) {
  if (!Sc(e)) throw Error(O(299));
  var n = !1,
    r = "",
    s = mm;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (s = t.onRecoverableError)),
    (t = vc(e, 1, !1, null, null, n, !1, r, s)),
    (e[Jt] = t.current),
    As(e.nodeType === 8 ? e.parentNode : e),
    new wc(t)
  );
};
st.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(O(188))
      : ((e = Object.keys(e).join(",")), Error(O(268, e)));
  return (e = Fp(t)), (e = e === null ? null : e.stateNode), e;
};
st.flushSync = function (e) {
  return Zn(e);
};
st.hydrate = function (e, t, n) {
  if (!ei(t)) throw Error(O(200));
  return ti(null, e, t, !0, n);
};
st.hydrateRoot = function (e, t, n) {
  if (!Sc(e)) throw Error(O(405));
  var r = (n != null && n.hydratedSources) || null,
    s = !1,
    o = "",
    i = mm;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (s = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = hm(t, null, e, 1, n ?? null, s, !1, o, i)),
    (e[Jt] = t.current),
    As(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (s = n._getVersion),
        (s = s(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, s])
          : t.mutableSourceEagerHydrationData.push(n, s);
  return new Zl(t);
};
st.render = function (e, t, n) {
  if (!ei(t)) throw Error(O(200));
  return ti(null, e, t, !1, n);
};
st.unmountComponentAtNode = function (e) {
  if (!ei(e)) throw Error(O(40));
  return e._reactRootContainer
    ? (Zn(function () {
        ti(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Jt] = null);
        });
      }),
      !0)
    : !1;
};
st.unstable_batchedUpdates = mc;
st.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!ei(n)) throw Error(O(200));
  if (e == null || e._reactInternals === void 0) throw Error(O(38));
  return ti(e, t, n, !1, r);
};
st.version = "18.3.1-next-f1338f8080-20240426";
function gm() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(gm);
    } catch (e) {
      console.error(e);
    }
}
gm(), (gp.exports = st);
var ym = gp.exports;
const _r = bl(ym);
var cf = ym;
(pa.createRoot = cf.createRoot), (pa.hydrateRoot = cf.hydrateRoot);
var xm = { exports: {} },
  vm = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ro = p;
function w0(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var S0 = typeof Object.is == "function" ? Object.is : w0,
  N0 = ro.useSyncExternalStore,
  E0 = ro.useRef,
  C0 = ro.useEffect,
  k0 = ro.useMemo,
  _0 = ro.useDebugValue;
vm.useSyncExternalStoreWithSelector = function (e, t, n, r, s) {
  var o = E0(null);
  if (o.current === null) {
    var i = { hasValue: !1, value: null };
    o.current = i;
  } else i = o.current;
  o = k0(
    function () {
      function u(v) {
        if (!c) {
          if (((c = !0), (d = v), (v = r(v)), s !== void 0 && i.hasValue)) {
            var m = i.value;
            if (s(m, v)) return (f = m);
          }
          return (f = v);
        }
        if (((m = f), S0(d, v))) return m;
        var S = r(v);
        return s !== void 0 && s(m, S) ? m : ((d = v), (f = S));
      }
      var c = !1,
        d,
        f,
        h = n === void 0 ? null : n;
      return [
        function () {
          return u(t());
        },
        h === null
          ? void 0
          : function () {
              return u(h());
            },
      ];
    },
    [t, n, r, s]
  );
  var a = N0(e, o[0], o[1]);
  return (
    C0(
      function () {
        (i.hasValue = !0), (i.value = a);
      },
      [a]
    ),
    _0(a),
    a
  );
};
xm.exports = vm;
var R0 = xm.exports,
  Ye = "default" in fa ? dt : fa,
  df = Symbol.for("react-redux-context"),
  ff = typeof globalThis < "u" ? globalThis : {};
function P0() {
  if (!Ye.createContext) return {};
  const e = ff[df] ?? (ff[df] = new Map());
  let t = e.get(Ye.createContext);
  return t || ((t = Ye.createContext(null)), e.set(Ye.createContext, t)), t;
}
var Rn = P0(),
  O0 = () => {
    throw new Error("uSES not initialized!");
  };
function Nc(e = Rn) {
  return function () {
    return Ye.useContext(e);
  };
}
var jm = Nc(),
  wm = O0,
  T0 = (e) => {
    wm = e;
  },
  I0 = (e, t) => e === t;
function L0(e = Rn) {
  const t = e === Rn ? jm : Nc(e),
    n = (r, s = {}) => {
      const { equalityFn: o = I0, devModeChecks: i = {} } =
          typeof s == "function" ? { equalityFn: s } : s,
        {
          store: a,
          subscription: u,
          getServerState: c,
          stabilityCheck: d,
          identityFunctionCheck: f,
        } = t();
      Ye.useRef(!0);
      const h = Ye.useCallback(
          {
            [r.name](m) {
              return r(m);
            },
          }[r.name],
          [r, d, i.stabilityCheck]
        ),
        v = wm(u.addNestedSub, a.getState, c || a.getState, h, o);
      return Ye.useDebugValue(v), v;
    };
  return Object.assign(n, { withTypes: () => n }), n;
}
var V = L0();
function $0(e) {
  e();
}
function D0() {
  let e = null,
    t = null;
  return {
    clear() {
      (e = null), (t = null);
    },
    notify() {
      $0(() => {
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
var pf = { notify() {}, get: () => [] };
function A0(e, t) {
  let n,
    r = pf,
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
    s++, n || ((n = e.subscribe(u)), (r = D0()));
  }
  function f() {
    s--, n && s === 0 && (n(), (n = void 0), r.clear(), (r = pf));
  }
  function h() {
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
    trySubscribe: h,
    tryUnsubscribe: v,
    getListeners: () => r,
  };
  return m;
}
var F0 =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  M0 = typeof navigator < "u" && navigator.product === "ReactNative",
  b0 = F0 || M0 ? Ye.useLayoutEffect : Ye.useEffect;
function U0({
  store: e,
  context: t,
  children: n,
  serverState: r,
  stabilityCheck: s = "once",
  identityFunctionCheck: o = "once",
}) {
  const i = Ye.useMemo(() => {
      const c = A0(e);
      return {
        store: e,
        subscription: c,
        getServerState: r ? () => r : void 0,
        stabilityCheck: s,
        identityFunctionCheck: o,
      };
    }, [e, r, s, o]),
    a = Ye.useMemo(() => e.getState(), [e]);
  b0(() => {
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
  const u = t || Rn;
  return Ye.createElement(u.Provider, { value: i }, n);
}
var z0 = U0;
function Sm(e = Rn) {
  const t = e === Rn ? jm : Nc(e),
    n = () => {
      const { store: r } = t();
      return r;
    };
  return Object.assign(n, { withTypes: () => n }), n;
}
var B0 = Sm();
function W0(e = Rn) {
  const t = e === Rn ? B0 : Sm(e),
    n = () => t().dispatch;
  return Object.assign(n, { withTypes: () => n }), n;
}
var xe = W0();
T0(R0.useSyncExternalStoreWithSelector);
/**
 * @remix-run/router v1.19.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Vs() {
  return (
    (Vs = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Vs.apply(this, arguments)
  );
}
var gn;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(gn || (gn = {}));
const hf = "popstate";
function H0(e) {
  e === void 0 && (e = {});
  function t(r, s) {
    let { pathname: o, search: i, hash: a } = r.location;
    return lu(
      "",
      { pathname: o, search: i, hash: a },
      (s.state && s.state.usr) || null,
      (s.state && s.state.key) || "default"
    );
  }
  function n(r, s) {
    return typeof s == "string" ? s : Sl(s);
  }
  return K0(t, n, null, e);
}
function ue(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Nm(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function V0() {
  return Math.random().toString(36).substr(2, 8);
}
function mf(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function lu(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Vs(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Gr(t) : t,
      { state: n, key: (t && t.key) || r || V0() }
    )
  );
}
function Sl(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Gr(e) {
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
function K0(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: s = document.defaultView, v5Compat: o = !1 } = r,
    i = s.history,
    a = gn.Pop,
    u = null,
    c = d();
  c == null && ((c = 0), i.replaceState(Vs({}, i.state, { idx: c }), ""));
  function d() {
    return (i.state || { idx: null }).idx;
  }
  function f() {
    a = gn.Pop;
    let j = d(),
      x = j == null ? null : j - c;
    (c = j), u && u({ action: a, location: S.location, delta: x });
  }
  function h(j, x) {
    a = gn.Push;
    let y = lu(S.location, j, x);
    c = d() + 1;
    let g = mf(y, c),
      w = S.createHref(y);
    try {
      i.pushState(g, "", w);
    } catch (k) {
      if (k instanceof DOMException && k.name === "DataCloneError") throw k;
      s.location.assign(w);
    }
    o && u && u({ action: a, location: S.location, delta: 1 });
  }
  function v(j, x) {
    a = gn.Replace;
    let y = lu(S.location, j, x);
    c = d();
    let g = mf(y, c),
      w = S.createHref(y);
    i.replaceState(g, "", w),
      o && u && u({ action: a, location: S.location, delta: 0 });
  }
  function m(j) {
    let x = s.location.origin !== "null" ? s.location.origin : s.location.href,
      y = typeof j == "string" ? j : Sl(j);
    return (
      (y = y.replace(/ $/, "%20")),
      ue(
        x,
        "No window.location.(origin|href) available to create URL for href: " +
          y
      ),
      new URL(y, x)
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
        s.addEventListener(hf, f),
        (u = j),
        () => {
          s.removeEventListener(hf, f), (u = null);
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
    push: h,
    replace: v,
    go(j) {
      return i.go(j);
    },
  };
  return S;
}
var gf;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(gf || (gf = {}));
function G0(e, t, n) {
  return n === void 0 && (n = "/"), Q0(e, t, n, !1);
}
function Q0(e, t, n, r) {
  let s = typeof t == "string" ? Gr(t) : t,
    o = zr(s.pathname || "/", n);
  if (o == null) return null;
  let i = Em(e);
  J0(i);
  let a = null;
  for (let u = 0; a == null && u < i.length; ++u) {
    let c = lj(o);
    a = sj(i[u], c, r);
  }
  return a;
}
function Em(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let s = (o, i, a) => {
    let u = {
      relativePath: a === void 0 ? o.path || "" : a,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: i,
      route: o,
    };
    u.relativePath.startsWith("/") &&
      (ue(
        u.relativePath.startsWith(r),
        'Absolute route path "' +
          u.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (u.relativePath = u.relativePath.slice(r.length)));
    let c = Cn([r, u.relativePath]),
      d = n.concat(u);
    o.children &&
      o.children.length > 0 &&
      (ue(
        o.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + c + '".')
      ),
      Em(o.children, t, d, c)),
      !(o.path == null && !o.index) &&
        t.push({ path: c, score: nj(c, o.index), routesMeta: d });
  };
  return (
    e.forEach((o, i) => {
      var a;
      if (o.path === "" || !((a = o.path) != null && a.includes("?"))) s(o, i);
      else for (let u of Cm(o.path)) s(o, i, u);
    }),
    t
  );
}
function Cm(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    s = n.endsWith("?"),
    o = n.replace(/\?$/, "");
  if (r.length === 0) return s ? [o, ""] : [o];
  let i = Cm(r.join("/")),
    a = [];
  return (
    a.push(...i.map((u) => (u === "" ? o : [o, u].join("/")))),
    s && a.push(...i),
    a.map((u) => (e.startsWith("/") && u === "" ? "/" : u))
  );
}
function J0(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : rj(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const X0 = /^:[\w-]+$/,
  q0 = 3,
  Y0 = 2,
  Z0 = 1,
  ej = 10,
  tj = -2,
  yf = (e) => e === "*";
function nj(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(yf) && (r += tj),
    t && (r += Y0),
    n
      .filter((s) => !yf(s))
      .reduce((s, o) => s + (X0.test(o) ? q0 : o === "" ? Z0 : ej), r)
  );
}
function rj(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, s) => r === t[s])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function sj(e, t, n) {
  let { routesMeta: r } = e,
    s = {},
    o = "/",
    i = [];
  for (let a = 0; a < r.length; ++a) {
    let u = r[a],
      c = a === r.length - 1,
      d = o === "/" ? t : t.slice(o.length) || "/",
      f = Nl(
        { path: u.relativePath, caseSensitive: u.caseSensitive, end: c },
        d
      ),
      h = u.route;
    if (
      (!f &&
        c &&
        n &&
        !r[r.length - 1].route.index &&
        (f = Nl(
          { path: u.relativePath, caseSensitive: u.caseSensitive, end: !1 },
          d
        )),
      !f)
    )
      return null;
    Object.assign(s, f.params),
      i.push({
        params: s,
        pathname: Cn([o, f.pathname]),
        pathnameBase: cj(Cn([o, f.pathnameBase])),
        route: h,
      }),
      f.pathnameBase !== "/" && (o = Cn([o, f.pathnameBase]));
  }
  return i;
}
function Nl(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = oj(e.path, e.caseSensitive, e.end),
    s = t.match(n);
  if (!s) return null;
  let o = s[0],
    i = o.replace(/(.)\/+$/, "$1"),
    a = s.slice(1);
  return {
    params: r.reduce((c, d, f) => {
      let { paramName: h, isOptional: v } = d;
      if (h === "*") {
        let S = a[f] || "";
        i = o.slice(0, o.length - S.length).replace(/(.)\/+$/, "$1");
      }
      const m = a[f];
      return (
        v && !m ? (c[h] = void 0) : (c[h] = (m || "").replace(/%2F/g, "/")), c
      );
    }, {}),
    pathname: o,
    pathnameBase: i,
    pattern: e,
  };
}
function oj(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Nm(
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
function lj(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      Nm(
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
function zr(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function ij(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: s = "",
  } = typeof e == "string" ? Gr(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : aj(n, t)) : t,
    search: dj(r),
    hash: fj(s),
  };
}
function aj(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((s) => {
      s === ".." ? n.length > 1 && n.pop() : s !== "." && n.push(s);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function qi(e, t, n, r) {
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
function uj(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function Ec(e, t) {
  let n = uj(e);
  return t
    ? n.map((r, s) => (s === n.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function Cc(e, t, n, r) {
  r === void 0 && (r = !1);
  let s;
  typeof e == "string"
    ? (s = Gr(e))
    : ((s = Vs({}, e)),
      ue(
        !s.pathname || !s.pathname.includes("?"),
        qi("?", "pathname", "search", s)
      ),
      ue(
        !s.pathname || !s.pathname.includes("#"),
        qi("#", "pathname", "hash", s)
      ),
      ue(!s.search || !s.search.includes("#"), qi("#", "search", "hash", s)));
  let o = e === "" || s.pathname === "",
    i = o ? "/" : s.pathname,
    a;
  if (i == null) a = n;
  else {
    let f = t.length - 1;
    if (!r && i.startsWith("..")) {
      let h = i.split("/");
      for (; h[0] === ".."; ) h.shift(), (f -= 1);
      s.pathname = h.join("/");
    }
    a = f >= 0 ? t[f] : "/";
  }
  let u = ij(s, a),
    c = i && i !== "/" && i.endsWith("/"),
    d = (o || i === ".") && n.endsWith("/");
  return !u.pathname.endsWith("/") && (c || d) && (u.pathname += "/"), u;
}
const Cn = (e) => e.join("/").replace(/\/\/+/g, "/"),
  cj = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  dj = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  fj = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function pj(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const km = ["post", "put", "patch", "delete"];
new Set(km);
const hj = ["get", ...km];
new Set(hj);
/**
 * React Router v6.26.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ks() {
  return (
    (Ks = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ks.apply(this, arguments)
  );
}
const ni = p.createContext(null),
  _m = p.createContext(null),
  tn = p.createContext(null),
  ri = p.createContext(null),
  Dt = p.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Rm = p.createContext(null);
function mj(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  Qr() || ue(!1);
  let { basename: r, navigator: s } = p.useContext(tn),
    { hash: o, pathname: i, search: a } = si(e, { relative: n }),
    u = i;
  return (
    r !== "/" && (u = i === "/" ? r : Cn([r, i])),
    s.createHref({ pathname: u, search: a, hash: o })
  );
}
function Qr() {
  return p.useContext(ri) != null;
}
function nn() {
  return Qr() || ue(!1), p.useContext(ri).location;
}
function Pm(e) {
  p.useContext(tn).static || p.useLayoutEffect(e);
}
function lt() {
  let { isDataRoute: e } = p.useContext(Dt);
  return e ? Tj() : gj();
}
function gj() {
  Qr() || ue(!1);
  let e = p.useContext(ni),
    { basename: t, future: n, navigator: r } = p.useContext(tn),
    { matches: s } = p.useContext(Dt),
    { pathname: o } = nn(),
    i = JSON.stringify(Ec(s, n.v7_relativeSplatPath)),
    a = p.useRef(!1);
  return (
    Pm(() => {
      a.current = !0;
    }),
    p.useCallback(
      function (c, d) {
        if ((d === void 0 && (d = {}), !a.current)) return;
        if (typeof c == "number") {
          r.go(c);
          return;
        }
        let f = Cc(c, JSON.parse(i), o, d.relative === "path");
        e == null &&
          t !== "/" &&
          (f.pathname = f.pathname === "/" ? t : Cn([t, f.pathname])),
          (d.replace ? r.replace : r.push)(f, d.state, d);
      },
      [t, r, i, o, e]
    )
  );
}
const yj = p.createContext(null);
function xj(e) {
  let t = p.useContext(Dt).outlet;
  return t && p.createElement(yj.Provider, { value: e }, t);
}
function vj() {
  let { matches: e } = p.useContext(Dt),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function si(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = p.useContext(tn),
    { matches: s } = p.useContext(Dt),
    { pathname: o } = nn(),
    i = JSON.stringify(Ec(s, r.v7_relativeSplatPath));
  return p.useMemo(() => Cc(e, JSON.parse(i), o, n === "path"), [e, i, o, n]);
}
function jj(e, t) {
  return wj(e, t);
}
function wj(e, t, n, r) {
  Qr() || ue(!1);
  let { navigator: s } = p.useContext(tn),
    { matches: o } = p.useContext(Dt),
    i = o[o.length - 1],
    a = i ? i.params : {};
  i && i.pathname;
  let u = i ? i.pathnameBase : "/";
  i && i.route;
  let c = nn(),
    d;
  if (t) {
    var f;
    let j = typeof t == "string" ? Gr(t) : t;
    u === "/" || ((f = j.pathname) != null && f.startsWith(u)) || ue(!1),
      (d = j);
  } else d = c;
  let h = d.pathname || "/",
    v = h;
  if (u !== "/") {
    let j = u.replace(/^\//, "").split("/");
    v = "/" + h.replace(/^\//, "").split("/").slice(j.length).join("/");
  }
  let m = G0(e, { pathname: v }),
    S = kj(
      m &&
        m.map((j) =>
          Object.assign({}, j, {
            params: Object.assign({}, a, j.params),
            pathname: Cn([
              u,
              s.encodeLocation
                ? s.encodeLocation(j.pathname).pathname
                : j.pathname,
            ]),
            pathnameBase:
              j.pathnameBase === "/"
                ? u
                : Cn([
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
    ? p.createElement(
        ri.Provider,
        {
          value: {
            location: Ks(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              d
            ),
            navigationType: gn.Pop,
          },
        },
        S
      )
    : S;
}
function Sj() {
  let e = Oj(),
    t = pj(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    s = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return p.createElement(
    p.Fragment,
    null,
    p.createElement("h2", null, "Unexpected Application Error!"),
    p.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? p.createElement("pre", { style: s }, n) : null,
    null
  );
}
const Nj = p.createElement(Sj, null);
class Ej extends p.Component {
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
      ? p.createElement(
          Dt.Provider,
          { value: this.props.routeContext },
          p.createElement(Rm.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function Cj(e) {
  let { routeContext: t, match: n, children: r } = e,
    s = p.useContext(ni);
  return (
    s &&
      s.static &&
      s.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (s.staticContext._deepestRenderedBoundaryId = n.route.id),
    p.createElement(Dt.Provider, { value: t }, r)
  );
}
function kj(e, t, n, r) {
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
    d >= 0 || ue(!1), (i = i.slice(0, Math.min(i.length, d + 1)));
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
        let { loaderData: h, errors: v } = n,
          m =
            f.route.loader &&
            h[f.route.id] === void 0 &&
            (!v || v[f.route.id] === void 0);
        if (f.route.lazy || m) {
          (u = !0), c >= 0 ? (i = i.slice(0, c + 1)) : (i = [i[0]]);
          break;
        }
      }
    }
  return i.reduceRight((d, f, h) => {
    let v,
      m = !1,
      S = null,
      j = null;
    n &&
      ((v = a && f.route.id ? a[f.route.id] : void 0),
      (S = f.route.errorElement || Nj),
      u &&
        (c < 0 && h === 0
          ? ((m = !0), (j = null))
          : c === h &&
            ((m = !0), (j = f.route.hydrateFallbackElement || null))));
    let x = t.concat(i.slice(0, h + 1)),
      y = () => {
        let g;
        return (
          v
            ? (g = S)
            : m
            ? (g = j)
            : f.route.Component
            ? (g = p.createElement(f.route.Component, null))
            : f.route.element
            ? (g = f.route.element)
            : (g = d),
          p.createElement(Cj, {
            match: f,
            routeContext: { outlet: d, matches: x, isDataRoute: n != null },
            children: g,
          })
        );
      };
    return n && (f.route.ErrorBoundary || f.route.errorElement || h === 0)
      ? p.createElement(Ej, {
          location: n.location,
          revalidation: n.revalidation,
          component: S,
          error: v,
          children: y(),
          routeContext: { outlet: null, matches: x, isDataRoute: !0 },
        })
      : y();
  }, null);
}
var Om = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(Om || {}),
  El = (function (e) {
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
  })(El || {});
function _j(e) {
  let t = p.useContext(ni);
  return t || ue(!1), t;
}
function Rj(e) {
  let t = p.useContext(_m);
  return t || ue(!1), t;
}
function Pj(e) {
  let t = p.useContext(Dt);
  return t || ue(!1), t;
}
function Tm(e) {
  let t = Pj(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || ue(!1), n.route.id;
}
function Oj() {
  var e;
  let t = p.useContext(Rm),
    n = Rj(El.UseRouteError),
    r = Tm(El.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function Tj() {
  let { router: e } = _j(Om.UseNavigateStable),
    t = Tm(El.UseNavigateStable),
    n = p.useRef(!1);
  return (
    Pm(() => {
      n.current = !0;
    }),
    p.useCallback(
      function (s, o) {
        o === void 0 && (o = {}),
          n.current &&
            (typeof s == "number"
              ? e.navigate(s)
              : e.navigate(s, Ks({ fromRouteId: t }, o)));
      },
      [e, t]
    )
  );
}
function ge(e) {
  let { to: t, replace: n, state: r, relative: s } = e;
  Qr() || ue(!1);
  let { future: o, static: i } = p.useContext(tn),
    { matches: a } = p.useContext(Dt),
    { pathname: u } = nn(),
    c = lt(),
    d = Cc(t, Ec(a, o.v7_relativeSplatPath), u, s === "path"),
    f = JSON.stringify(d);
  return (
    p.useEffect(
      () => c(JSON.parse(f), { replace: n, state: r, relative: s }),
      [c, f, s, n, r]
    ),
    null
  );
}
function Im(e) {
  return xj(e.context);
}
function he(e) {
  ue(!1);
}
function Ij(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: s = gn.Pop,
    navigator: o,
    static: i = !1,
    future: a,
  } = e;
  Qr() && ue(!1);
  let u = t.replace(/^\/*/, "/"),
    c = p.useMemo(
      () => ({
        basename: u,
        navigator: o,
        static: i,
        future: Ks({ v7_relativeSplatPath: !1 }, a),
      }),
      [u, a, o, i]
    );
  typeof r == "string" && (r = Gr(r));
  let {
      pathname: d = "/",
      search: f = "",
      hash: h = "",
      state: v = null,
      key: m = "default",
    } = r,
    S = p.useMemo(() => {
      let j = zr(d, u);
      return j == null
        ? null
        : {
            location: { pathname: j, search: f, hash: h, state: v, key: m },
            navigationType: s,
          };
    }, [u, d, f, h, v, m, s]);
  return S == null
    ? null
    : p.createElement(
        tn.Provider,
        { value: c },
        p.createElement(ri.Provider, { children: n, value: S })
      );
}
function Lj(e) {
  let { children: t, location: n } = e;
  return jj(iu(t), n);
}
new Promise(() => {});
function iu(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    p.Children.forEach(e, (r, s) => {
      if (!p.isValidElement(r)) return;
      let o = [...t, s];
      if (r.type === p.Fragment) {
        n.push.apply(n, iu(r.props.children, o));
        return;
      }
      r.type !== he && ue(!1), !r.props.index || !r.props.children || ue(!1);
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
      r.props.children && (i.children = iu(r.props.children, o)), n.push(i);
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
 */ function Cl() {
  return (
    (Cl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Cl.apply(this, arguments)
  );
}
function Lm(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    s,
    o;
  for (o = 0; o < r.length; o++)
    (s = r[o]), !(t.indexOf(s) >= 0) && (n[s] = e[s]);
  return n;
}
function $j(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Dj(e, t) {
  return e.button === 0 && (!t || t === "_self") && !$j(e);
}
const Aj = [
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
  Fj = [
    "aria-current",
    "caseSensitive",
    "className",
    "end",
    "style",
    "to",
    "unstable_viewTransition",
    "children",
  ],
  Mj = "6";
try {
  window.__reactRouterVersion = Mj;
} catch {}
const bj = p.createContext({ isTransitioning: !1 }),
  Uj = "startTransition",
  xf = fa[Uj];
function zj(e) {
  let { basename: t, children: n, future: r, window: s } = e,
    o = p.useRef();
  o.current == null && (o.current = H0({ window: s, v5Compat: !0 }));
  let i = o.current,
    [a, u] = p.useState({ action: i.action, location: i.location }),
    { v7_startTransition: c } = r || {},
    d = p.useCallback(
      (f) => {
        c && xf ? xf(() => u(f)) : u(f);
      },
      [u, c]
    );
  return (
    p.useLayoutEffect(() => i.listen(d), [i, d]),
    p.createElement(Ij, {
      basename: t,
      children: n,
      location: a.location,
      navigationType: a.action,
      navigator: i,
      future: r,
    })
  );
}
const Bj =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Wj = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  so = p.forwardRef(function (t, n) {
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
      h = Lm(t, Aj),
      { basename: v } = p.useContext(tn),
      m,
      S = !1;
    if (typeof c == "string" && Wj.test(c) && ((m = c), Bj))
      try {
        let g = new URL(window.location.href),
          w = c.startsWith("//") ? new URL(g.protocol + c) : new URL(c),
          k = zr(w.pathname, v);
        w.origin === g.origin && k != null
          ? (c = k + w.search + w.hash)
          : (S = !0);
      } catch {}
    let j = mj(c, { relative: s }),
      x = Vj(c, {
        replace: i,
        state: a,
        target: u,
        preventScrollReset: d,
        relative: s,
        unstable_viewTransition: f,
      });
    function y(g) {
      r && r(g), g.defaultPrevented || x(g);
    }
    return p.createElement(
      "a",
      Cl({}, h, { href: m || j, onClick: S || o ? r : y, ref: n, target: u })
    );
  }),
  Ot = p.forwardRef(function (t, n) {
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
      f = Lm(t, Fj),
      h = si(u, { relative: f.relative }),
      v = nn(),
      m = p.useContext(_m),
      { navigator: S, basename: j } = p.useContext(tn),
      x = m != null && Kj(h) && c === !0,
      y = S.encodeLocation ? S.encodeLocation(h).pathname : h.pathname,
      g = v.pathname,
      w =
        m && m.navigation && m.navigation.location
          ? m.navigation.location.pathname
          : null;
    s ||
      ((g = g.toLowerCase()),
      (w = w ? w.toLowerCase() : null),
      (y = y.toLowerCase())),
      w && j && (w = zr(w, j) || w);
    const k = y !== "/" && y.endsWith("/") ? y.length - 1 : y.length;
    let _ = g === y || (!i && g.startsWith(y) && g.charAt(k) === "/"),
      R =
        w != null &&
        (w === y || (!i && w.startsWith(y) && w.charAt(y.length) === "/")),
      T = { isActive: _, isPending: R, isTransitioning: x },
      H = _ ? r : void 0,
      D;
    typeof o == "function"
      ? (D = o(T))
      : (D = [
          o,
          _ ? "active" : null,
          R ? "pending" : null,
          x ? "transitioning" : null,
        ]
          .filter(Boolean)
          .join(" "));
    let fe = typeof a == "function" ? a(T) : a;
    return p.createElement(
      so,
      Cl({}, f, {
        "aria-current": H,
        className: D,
        ref: n,
        style: fe,
        to: u,
        unstable_viewTransition: c,
      }),
      typeof d == "function" ? d(T) : d
    );
  });
var au;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(au || (au = {}));
var vf;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(vf || (vf = {}));
function Hj(e) {
  let t = p.useContext(ni);
  return t || ue(!1), t;
}
function Vj(e, t) {
  let {
      target: n,
      replace: r,
      state: s,
      preventScrollReset: o,
      relative: i,
      unstable_viewTransition: a,
    } = t === void 0 ? {} : t,
    u = lt(),
    c = nn(),
    d = si(e, { relative: i });
  return p.useCallback(
    (f) => {
      if (Dj(f, n)) {
        f.preventDefault();
        let h = r !== void 0 ? r : Sl(c) === Sl(d);
        u(e, {
          replace: h,
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
function Kj(e, t) {
  t === void 0 && (t = {});
  let n = p.useContext(bj);
  n == null && ue(!1);
  let { basename: r } = Hj(au.useViewTransitionState),
    s = si(e, { relative: t.relative });
  if (!n.isTransitioning) return !1;
  let o = zr(n.currentLocation.pathname, r) || n.currentLocation.pathname,
    i = zr(n.nextLocation.pathname, r) || n.nextLocation.pathname;
  return Nl(s.pathname, i) != null || Nl(s.pathname, o) != null;
}
var $m = { exports: {} };
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
})($m);
var Gj = $m.exports;
const F = bl(Gj);
function uu() {
  return (
    (uu = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    uu.apply(null, arguments)
  );
}
function Dm(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.includes(r)) continue;
      n[r] = e[r];
    }
  return n;
}
function jf(e) {
  return "default" + e.charAt(0).toUpperCase() + e.substr(1);
}
function Qj(e) {
  var t = Jj(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
function Jj(e, t) {
  if (typeof e != "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function Xj(e, t, n) {
  var r = p.useRef(e !== void 0),
    s = p.useState(t),
    o = s[0],
    i = s[1],
    a = e !== void 0,
    u = r.current;
  return (
    (r.current = a),
    !a && u && o !== t && i(t),
    [
      a ? e : o,
      p.useCallback(
        function (c) {
          for (
            var d = arguments.length, f = new Array(d > 1 ? d - 1 : 0), h = 1;
            h < d;
            h++
          )
            f[h - 1] = arguments[h];
          n && n.apply(void 0, [c].concat(f)), i(c);
        },
        [n]
      ),
    ]
  );
}
function oo(e, t) {
  return Object.keys(t).reduce(function (n, r) {
    var s,
      o = n,
      i = o[jf(r)],
      a = o[r],
      u = Dm(o, [jf(r), r].map(Qj)),
      c = t[r],
      d = Xj(a, i, e[c]),
      f = d[0],
      h = d[1];
    return uu({}, u, ((s = {}), (s[r] = f), (s[c] = h), s));
  }, e);
}
function cu(e, t) {
  return (
    (cu = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, r) {
          return (n.__proto__ = r), n;
        }),
    cu(e, t)
  );
}
function qj(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    cu(e, t);
}
const Yj = ["xxl", "xl", "lg", "md", "sm", "xs"],
  Zj = "xs",
  oi = p.createContext({ prefixes: {}, breakpoints: Yj, minBreakpoint: Zj });
function z(e, t) {
  const { prefixes: n } = p.useContext(oi);
  return e || n[t] || t;
}
function Am() {
  const { breakpoints: e } = p.useContext(oi);
  return e;
}
function Fm() {
  const { minBreakpoint: e } = p.useContext(oi);
  return e;
}
function e1() {
  const { dir: e } = p.useContext(oi);
  return e === "rtl";
}
function kc(e) {
  return (e && e.ownerDocument) || document;
}
function t1(e) {
  var t = kc(e);
  return (t && t.defaultView) || window;
}
function n1(e, t) {
  return t1(e).getComputedStyle(e, t);
}
var r1 = /([A-Z])/g;
function s1(e) {
  return e.replace(r1, "-$1").toLowerCase();
}
var o1 = /^ms-/;
function Do(e) {
  return s1(e).replace(o1, "-ms-");
}
var l1 =
  /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function i1(e) {
  return !!(e && l1.test(e));
}
function Gt(e, t) {
  var n = "",
    r = "";
  if (typeof t == "string")
    return e.style.getPropertyValue(Do(t)) || n1(e).getPropertyValue(Do(t));
  Object.keys(t).forEach(function (s) {
    var o = t[s];
    !o && o !== 0
      ? e.style.removeProperty(Do(s))
      : i1(s)
      ? (r += s + "(" + o + ") ")
      : (n += Do(s) + ": " + o + ";");
  }),
    r && (n += "transform: " + r + ";"),
    (e.style.cssText += ";" + n);
}
var Mm = { exports: {} },
  a1 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  u1 = a1,
  c1 = u1;
function bm() {}
function Um() {}
Um.resetWarningCache = bm;
var d1 = function () {
  function e(r, s, o, i, a, u) {
    if (u !== c1) {
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
    checkPropTypes: Um,
    resetWarningCache: bm,
  };
  return (n.PropTypes = n), n;
};
Mm.exports = d1();
var f1 = Mm.exports;
const We = bl(f1),
  wf = { disabled: !1 },
  zm = dt.createContext(null);
var p1 = function (t) {
    return t.scrollTop;
  },
  ys = "unmounted",
  dn = "exited",
  jt = "entering",
  Bt = "entered",
  Gs = "exiting",
  rn = (function (e) {
    qj(t, e);
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
            ? ((u = dn), (o.appearStatus = jt))
            : (u = Bt)
          : r.unmountOnExit || r.mountOnEnter
          ? (u = ys)
          : (u = dn),
        (o.state = { status: u }),
        (o.nextCallback = null),
        o
      );
    }
    t.getDerivedStateFromProps = function (s, o) {
      var i = s.in;
      return i && o.status === ys ? { status: dn } : null;
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
            ? i !== jt && i !== Bt && (o = jt)
            : (i === jt || i === Bt) && (o = Gs);
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
          if ((this.cancelNextCallback(), o === jt)) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
              var i = this.props.nodeRef
                ? this.props.nodeRef.current
                : _r.findDOMNode(this);
              i && p1(i);
            }
            this.performEnter(s);
          } else this.performExit();
        else
          this.props.unmountOnExit &&
            this.state.status === dn &&
            this.setState({ status: ys });
      }),
      (n.performEnter = function (s) {
        var o = this,
          i = this.props.enter,
          a = this.context ? this.context.isMounting : s,
          u = this.props.nodeRef ? [a] : [_r.findDOMNode(this), a],
          c = u[0],
          d = u[1],
          f = this.getTimeouts(),
          h = a ? f.appear : f.enter;
        if ((!s && !i) || wf.disabled) {
          this.safeSetState({ status: Bt }, function () {
            o.props.onEntered(c);
          });
          return;
        }
        this.props.onEnter(c, d),
          this.safeSetState({ status: jt }, function () {
            o.props.onEntering(c, d),
              o.onTransitionEnd(h, function () {
                o.safeSetState({ status: Bt }, function () {
                  o.props.onEntered(c, d);
                });
              });
          });
      }),
      (n.performExit = function () {
        var s = this,
          o = this.props.exit,
          i = this.getTimeouts(),
          a = this.props.nodeRef ? void 0 : _r.findDOMNode(this);
        if (!o || wf.disabled) {
          this.safeSetState({ status: dn }, function () {
            s.props.onExited(a);
          });
          return;
        }
        this.props.onExit(a),
          this.safeSetState({ status: Gs }, function () {
            s.props.onExiting(a),
              s.onTransitionEnd(i.exit, function () {
                s.safeSetState({ status: dn }, function () {
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
            : _r.findDOMNode(this),
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
        if (s === ys) return null;
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
        var a = Dm(o, [
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
        return dt.createElement(
          zm.Provider,
          { value: null },
          typeof i == "function"
            ? i(s, a)
            : dt.cloneElement(dt.Children.only(i), a)
        );
      }),
      t
    );
  })(dt.Component);
rn.contextType = zm;
rn.propTypes = {};
function fr() {}
rn.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: fr,
  onEntering: fr,
  onEntered: fr,
  onExit: fr,
  onExiting: fr,
  onExited: fr,
};
rn.UNMOUNTED = ys;
rn.EXITED = dn;
rn.ENTERING = jt;
rn.ENTERED = Bt;
rn.EXITING = Gs;
function h1(e) {
  return e.code === "Escape" || e.keyCode === 27;
}
function m1() {
  const e = p.version.split(".");
  return { major: +e[0], minor: +e[1], patch: +e[2] };
}
function li(e) {
  if (!e || typeof e == "function") return null;
  const { major: t } = m1();
  return t >= 19 ? e.props.ref : e.ref;
}
const ii = !!(
  typeof window < "u" &&
  window.document &&
  window.document.createElement
);
var du = !1,
  fu = !1;
try {
  var Yi = {
    get passive() {
      return (du = !0);
    },
    get once() {
      return (fu = du = !0);
    },
  };
  ii &&
    (window.addEventListener("test", Yi, Yi),
    window.removeEventListener("test", Yi, !0));
} catch {}
function g1(e, t, n, r) {
  if (r && typeof r != "boolean" && !fu) {
    var s = r.once,
      o = r.capture,
      i = n;
    !fu &&
      s &&
      ((i =
        n.__once ||
        function a(u) {
          this.removeEventListener(t, a, o), n.call(this, u);
        }),
      (n.__once = i)),
      e.addEventListener(t, i, du ? r : o);
  }
  e.addEventListener(t, n, r);
}
function y1(e, t, n, r) {
  var s = r && typeof r != "boolean" ? r.capture : r;
  e.removeEventListener(t, n, s),
    n.__once && e.removeEventListener(t, n.__once, s);
}
function kl(e, t, n, r) {
  return (
    g1(e, t, n, r),
    function () {
      y1(e, t, n, r);
    }
  );
}
function x1(e, t, n, r) {
  if ((r === void 0 && (r = !0), e)) {
    var s = document.createEvent("HTMLEvents");
    s.initEvent(t, n, r), e.dispatchEvent(s);
  }
}
function v1(e) {
  var t = Gt(e, "transitionDuration") || "",
    n = t.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(t) * n;
}
function j1(e, t, n) {
  n === void 0 && (n = 5);
  var r = !1,
    s = setTimeout(function () {
      r || x1(e, "transitionend", !0);
    }, t + n),
    o = kl(
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
function w1(e, t, n, r) {
  n == null && (n = v1(e) || 0);
  var s = j1(e, n, r),
    o = kl(e, "transitionend", t);
  return function () {
    s(), o();
  };
}
function Sf(e, t) {
  const n = Gt(e, t) || "",
    r = n.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(n) * r;
}
function ai(e, t) {
  const n = Sf(e, "transitionDuration"),
    r = Sf(e, "transitionDelay"),
    s = w1(
      e,
      (o) => {
        o.target === e && (s(), t(o));
      },
      n + r
    );
}
function ds(...e) {
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
function _c(e) {
  e.offsetHeight;
}
const Nf = (e) =>
  !e || typeof e == "function"
    ? e
    : (t) => {
        e.current = t;
      };
function S1(e, t) {
  const n = Nf(e),
    r = Nf(t);
  return (s) => {
    n && n(s), r && r(s);
  };
}
function N1(e, t) {
  return p.useMemo(() => S1(e, t), [e, t]);
}
function E1(e) {
  return e && "setState" in e ? _r.findDOMNode(e) : e ?? null;
}
const ui = dt.forwardRef(
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
      const f = p.useRef(null),
        h = N1(f, u),
        v = (_) => {
          h(E1(_));
        },
        m = (_) => (R) => {
          _ && f.current && _(f.current, R);
        },
        S = p.useCallback(m(e), [e]),
        j = p.useCallback(m(t), [t]),
        x = p.useCallback(m(n), [n]),
        y = p.useCallback(m(r), [r]),
        g = p.useCallback(m(s), [s]),
        w = p.useCallback(m(o), [o]),
        k = p.useCallback(m(i), [i]);
      return l.jsx(rn, {
        ref: d,
        ...c,
        onEnter: S,
        onEntered: x,
        onEntering: j,
        onExit: y,
        onExited: w,
        onExiting: g,
        addEndListener: k,
        nodeRef: f,
        children:
          typeof a == "function"
            ? (_, R) => a(_, { ...R, ref: v })
            : dt.cloneElement(a, { ref: v }),
      });
    }
  ),
  C1 = {
    height: ["marginTop", "marginBottom"],
    width: ["marginLeft", "marginRight"],
  };
function k1(e, t) {
  const n = `offset${e[0].toUpperCase()}${e.slice(1)}`,
    r = t[n],
    s = C1[e];
  return r + parseInt(Gt(t, s[0]), 10) + parseInt(Gt(t, s[1]), 10);
}
const _1 = {
    [dn]: "collapse",
    [Gs]: "collapsing",
    [jt]: "collapsing",
    [Bt]: "collapse show",
  },
  R1 = dt.forwardRef(
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
        appear: h = !1,
        getDimensionValue: v = k1,
        ...m
      },
      S
    ) => {
      const j = typeof a == "function" ? a() : a,
        x = p.useMemo(
          () =>
            ds((_) => {
              _.style[j] = "0";
            }, e),
          [j, e]
        ),
        y = p.useMemo(
          () =>
            ds((_) => {
              const R = `scroll${j[0].toUpperCase()}${j.slice(1)}`;
              _.style[j] = `${_[R]}px`;
            }, t),
          [j, t]
        ),
        g = p.useMemo(
          () =>
            ds((_) => {
              _.style[j] = null;
            }, n),
          [j, n]
        ),
        w = p.useMemo(
          () =>
            ds((_) => {
              (_.style[j] = `${v(j, _)}px`), _c(_);
            }, r),
          [r, v, j]
        ),
        k = p.useMemo(
          () =>
            ds((_) => {
              _.style[j] = null;
            }, s),
          [j, s]
        );
      return l.jsx(ui, {
        ref: S,
        addEndListener: ai,
        ...m,
        "aria-expanded": m.role ? u : null,
        onEnter: x,
        onEntering: y,
        onEntered: g,
        onExit: w,
        onExiting: k,
        childRef: li(i),
        in: u,
        timeout: c,
        mountOnEnter: d,
        unmountOnExit: f,
        appear: h,
        children: (_, R) =>
          dt.cloneElement(i, {
            ...R,
            className: F(
              o,
              i.props.className,
              _1[_],
              j === "width" && "collapse-horizontal"
            ),
          }),
      });
    }
  );
function Bm(e) {
  const t = p.useRef(e);
  return (
    p.useEffect(() => {
      t.current = e;
    }, [e]),
    t
  );
}
function Pn(e) {
  const t = Bm(e);
  return p.useCallback(
    function (...n) {
      return t.current && t.current(...n);
    },
    [t]
  );
}
const Wm = (e) =>
    p.forwardRef((t, n) =>
      l.jsx("div", { ...t, ref: n, className: F(t.className, e) })
    ),
  Hm = Wm("h4");
Hm.displayName = "DivStyledAsH4";
const Vm = p.forwardRef(
  ({ className: e, bsPrefix: t, as: n = Hm, ...r }, s) => (
    (t = z(t, "alert-heading")), l.jsx(n, { ref: s, className: F(e, t), ...r })
  )
);
Vm.displayName = "AlertHeading";
function P1(e) {
  const t = p.useRef(e);
  return (
    p.useEffect(() => {
      t.current = e;
    }, [e]),
    t
  );
}
function Wt(e) {
  const t = P1(e);
  return p.useCallback(
    function (...n) {
      return t.current && t.current(...n);
    },
    [t]
  );
}
function O1() {
  const e = p.useRef(!0),
    t = p.useRef(() => e.current);
  return (
    p.useEffect(
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
function T1(e) {
  const t = p.useRef(null);
  return (
    p.useEffect(() => {
      t.current = e;
    }),
    t.current
  );
}
const I1 =
    typeof global < "u" &&
    global.navigator &&
    global.navigator.product === "ReactNative",
  L1 = typeof document < "u",
  Ef = L1 || I1 ? p.useLayoutEffect : p.useEffect,
  $1 = ["as", "disabled"];
function D1(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function A1(e) {
  return !e || e.trim() === "#";
}
function Rc({
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
  const d = (h) => {
      if (((t || (e === "a" && A1(n))) && h.preventDefault(), t)) {
        h.stopPropagation();
        return;
      }
      i == null || i(h);
    },
    f = (h) => {
      h.key === " " && (h.preventDefault(), d(h));
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
const Km = p.forwardRef((e, t) => {
  let { as: n, disabled: r } = e,
    s = D1(e, $1);
  const [o, { tagName: i }] = Rc(Object.assign({ tagName: n, disabled: r }, s));
  return l.jsx(i, Object.assign({}, s, o, { ref: t }));
});
Km.displayName = "Button";
const F1 = ["onKeyDown"];
function M1(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function b1(e) {
  return !e || e.trim() === "#";
}
const Br = p.forwardRef((e, t) => {
  let { onKeyDown: n } = e,
    r = M1(e, F1);
  const [s] = Rc(Object.assign({ tagName: "a" }, r)),
    o = Wt((i) => {
      s.onKeyDown(i), n == null || n(i);
    });
  return b1(r.href) || r.role === "button"
    ? l.jsx("a", Object.assign({ ref: t }, r, s, { onKeyDown: o }))
    : l.jsx("a", Object.assign({ ref: t }, r, { onKeyDown: n }));
});
Br.displayName = "Anchor";
const Gm = p.forwardRef(
  ({ className: e, bsPrefix: t, as: n = Br, ...r }, s) => (
    (t = z(t, "alert-link")), l.jsx(n, { ref: s, className: F(e, t), ...r })
  )
);
Gm.displayName = "AlertLink";
const U1 = { [jt]: "show", [Bt]: "show" },
  _l = p.forwardRef(
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
        a = p.useCallback(
          (u, c) => {
            _c(u), r == null || r(u, c);
          },
          [r]
        );
      return l.jsx(ui, {
        ref: o,
        addEndListener: ai,
        ...i,
        onEnter: a,
        childRef: li(t),
        children: (u, c) =>
          p.cloneElement(t, {
            ...c,
            className: F("fade", e, t.props.className, U1[u], n[u]),
          }),
      });
    }
  );
_l.displayName = "Fade";
const z1 = {
    "aria-label": We.string,
    onClick: We.func,
    variant: We.oneOf(["white"]),
  },
  ci = p.forwardRef(
    ({ className: e, variant: t, "aria-label": n = "Close", ...r }, s) =>
      l.jsx("button", {
        ref: s,
        type: "button",
        className: F("btn-close", t && `btn-close-${t}`, e),
        "aria-label": n,
        ...r,
      })
  );
ci.displayName = "CloseButton";
ci.propTypes = z1;
const Qm = p.forwardRef((e, t) => {
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
      transition: f = _l,
      ...h
    } = oo(e, { show: "onClose" }),
    v = z(n, "alert"),
    m = Pn((x) => {
      c && c(!1, x);
    }),
    S = f === !0 ? _l : f,
    j = l.jsxs("div", {
      role: "alert",
      ...(S ? void 0 : h),
      ref: t,
      className: F(i, v, u && `${v}-${u}`, d && `${v}-dismissible`),
      children: [
        d && l.jsx(ci, { onClick: m, "aria-label": s, variant: o }),
        a,
      ],
    });
  return S
    ? l.jsx(S, { unmountOnExit: !0, ...h, ref: void 0, in: r, children: j })
    : r
    ? j
    : null;
});
Qm.displayName = "Alert";
const B1 = Object.assign(Qm, { Link: Gm, Heading: Vm }),
  G = p.forwardRef(
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
      const c = z(t, "btn"),
        [d, { tagName: f }] = Rc({ tagName: e, disabled: o, ...a }),
        h = f;
      return l.jsx(h, {
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
const Jr = p.forwardRef(
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
    const u = z(e, "btn-group");
    let c = u;
    return (
      n && (c = `${u}-vertical`),
      l.jsx(o, { ...i, ref: a, role: s, className: F(r, c, t && `${u}-${t}`) })
    );
  }
);
Jr.displayName = "ButtonGroup";
const Jm = p.createContext(null);
Jm.displayName = "CardHeaderContext";
function W1(e, t) {
  const n = p.useRef(!0);
  p.useEffect(() => {
    if (n.current) {
      n.current = !1;
      return;
    }
    return e();
  }, t);
}
function H1() {
  const e = p.useRef(!0),
    t = p.useRef(() => e.current);
  return (
    p.useEffect(
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
function V1(e) {
  const t = p.useRef(e);
  return (t.current = e), t;
}
function K1(e) {
  const t = V1(e);
  p.useEffect(() => () => t.current(), []);
}
const pu = 2 ** 31 - 1;
function Xm(e, t, n) {
  const r = n - Date.now();
  e.current = r <= pu ? setTimeout(t, r) : setTimeout(() => Xm(e, t, n), pu);
}
function G1() {
  const e = H1(),
    t = p.useRef();
  return (
    K1(() => clearTimeout(t.current)),
    p.useMemo(() => {
      const n = () => clearTimeout(t.current);
      function r(s, o = 0) {
        e() &&
          (n(),
          o <= pu ? (t.current = setTimeout(s, o)) : Xm(t, s, Date.now() + o));
      }
      return { set: r, clear: n, handleRef: t };
    }, [])
  );
}
const qm = p.forwardRef(
  ({ className: e, bsPrefix: t, as: n = "div", ...r }, s) => (
    (t = z(t, "carousel-caption")),
    l.jsx(n, { ref: s, className: F(e, t), ...r })
  )
);
qm.displayName = "CarouselCaption";
const Ym = p.forwardRef(
  ({ as: e = "div", bsPrefix: t, className: n, ...r }, s) => {
    const o = F(n, z(t, "carousel-item"));
    return l.jsx(e, { ref: s, ...r, className: o });
  }
);
Ym.displayName = "CarouselItem";
function Cf(e, t) {
  let n = 0;
  return p.Children.map(e, (r) => (p.isValidElement(r) ? t(r, n++) : r));
}
function Q1(e, t) {
  let n = 0;
  p.Children.forEach(e, (r) => {
    p.isValidElement(r) && t(r, n++);
  });
}
function J1(e, t) {
  return p.Children.toArray(e).some((n) => p.isValidElement(n) && n.type === t);
}
const X1 = 40;
function q1(e) {
  if (!e || !e.style || !e.parentNode || !e.parentNode.style) return !1;
  const t = getComputedStyle(e);
  return (
    t.display !== "none" &&
    t.visibility !== "hidden" &&
    getComputedStyle(e.parentNode).display !== "none"
  );
}
const Zm = p.forwardRef(({ defaultActiveIndex: e = 0, ...t }, n) => {
  const {
      as: r = "div",
      bsPrefix: s,
      slide: o = !0,
      fade: i = !1,
      controls: a = !0,
      indicators: u = !0,
      indicatorLabels: c = [],
      activeIndex: d,
      onSelect: f,
      onSlide: h,
      onSlid: v,
      interval: m = 5e3,
      keyboard: S = !0,
      onKeyDown: j,
      pause: x = "hover",
      onMouseOver: y,
      onMouseOut: g,
      wrap: w = !0,
      touch: k = !0,
      onTouchStart: _,
      onTouchMove: R,
      onTouchEnd: T,
      prevIcon: H = l.jsx("span", {
        "aria-hidden": "true",
        className: "carousel-control-prev-icon",
      }),
      prevLabel: D = "Previous",
      nextIcon: fe = l.jsx("span", {
        "aria-hidden": "true",
        className: "carousel-control-next-icon",
      }),
      nextLabel: it = "Next",
      variant: Ue,
      className: At,
      children: Ft,
      ...Oe
    } = oo({ defaultActiveIndex: e, ...t }, { activeIndex: "onSelect" }),
    pe = z(s, "carousel"),
    I = e1(),
    A = p.useRef(null),
    [M, J] = p.useState("next"),
    [re, Ne] = p.useState(!1),
    [Z, ze] = p.useState(!1),
    [ee, on] = p.useState(d || 0);
  p.useEffect(() => {
    !Z &&
      d !== ee &&
      (A.current ? J(A.current) : J((d || 0) > ee ? "next" : "prev"),
      o && ze(!0),
      on(d || 0));
  }, [d, Z, ee, o]),
    p.useEffect(() => {
      A.current && (A.current = null);
    });
  let Mt = 0,
    ur;
  Q1(Ft, (b, te) => {
    ++Mt, te === d && (ur = b.props.interval);
  });
  const cr = Bm(ur),
    at = p.useCallback(
      (b) => {
        if (Z) return;
        let te = ee - 1;
        if (te < 0) {
          if (!w) return;
          te = Mt - 1;
        }
        (A.current = "prev"), f == null || f(te, b);
      },
      [Z, ee, f, w, Mt]
    ),
    Je = Pn((b) => {
      if (Z) return;
      let te = ee + 1;
      if (te >= Mt) {
        if (!w) return;
        te = 0;
      }
      (A.current = "next"), f == null || f(te, b);
    }),
    An = p.useRef();
  p.useImperativeHandle(n, () => ({ element: An.current, prev: at, next: Je }));
  const Fn = Pn(() => {
      !document.hidden && q1(An.current) && (I ? at() : Je());
    }),
    q = M === "next" ? "start" : "end";
  W1(() => {
    o || (h == null || h(ee, q), v == null || v(ee, q));
  }, [ee]);
  const go = `${pe}-item-${M}`,
    ts = `${pe}-item-${q}`,
    Uy = p.useCallback(
      (b) => {
        _c(b), h == null || h(ee, q);
      },
      [h, ee, q]
    ),
    zy = p.useCallback(() => {
      ze(!1), v == null || v(ee, q);
    }, [v, ee, q]),
    By = p.useCallback(
      (b) => {
        if (S && !/input|textarea/i.test(b.target.tagName))
          switch (b.key) {
            case "ArrowLeft":
              b.preventDefault(), I ? Je(b) : at(b);
              return;
            case "ArrowRight":
              b.preventDefault(), I ? at(b) : Je(b);
              return;
          }
        j == null || j(b);
      },
      [S, j, at, Je, I]
    ),
    Wy = p.useCallback(
      (b) => {
        x === "hover" && Ne(!0), y == null || y(b);
      },
      [x, y]
    ),
    Hy = p.useCallback(
      (b) => {
        Ne(!1), g == null || g(b);
      },
      [g]
    ),
    qc = p.useRef(0),
    yo = p.useRef(0),
    Yc = G1(),
    Vy = p.useCallback(
      (b) => {
        (qc.current = b.touches[0].clientX),
          (yo.current = 0),
          x === "hover" && Ne(!0),
          _ == null || _(b);
      },
      [x, _]
    ),
    Ky = p.useCallback(
      (b) => {
        b.touches && b.touches.length > 1
          ? (yo.current = 0)
          : (yo.current = b.touches[0].clientX - qc.current),
          R == null || R(b);
      },
      [R]
    ),
    Gy = p.useCallback(
      (b) => {
        if (k) {
          const te = yo.current;
          Math.abs(te) > X1 && (te > 0 ? at(b) : Je(b));
        }
        x === "hover" &&
          Yc.set(() => {
            Ne(!1);
          }, m || void 0),
          T == null || T(b);
      },
      [k, x, at, Je, Yc, m, T]
    ),
    Zc = m != null && !re && !Z,
    Ei = p.useRef();
  p.useEffect(() => {
    var b, te;
    if (!Zc) return;
    const bt = I ? at : Je;
    return (
      (Ei.current = window.setInterval(
        document.visibilityState ? Fn : bt,
        (b = (te = cr.current) != null ? te : m) != null ? b : void 0
      )),
      () => {
        Ei.current !== null && clearInterval(Ei.current);
      }
    );
  }, [Zc, at, Je, cr, m, Fn, I]);
  const ed = p.useMemo(
    () =>
      u &&
      Array.from({ length: Mt }, (b, te) => (bt) => {
        f == null || f(te, bt);
      }),
    [u, Mt, f]
  );
  return l.jsxs(r, {
    ref: An,
    ...Oe,
    onKeyDown: By,
    onMouseOver: Wy,
    onMouseOut: Hy,
    onTouchStart: Vy,
    onTouchMove: Ky,
    onTouchEnd: Gy,
    className: F(At, pe, o && "slide", i && `${pe}-fade`, Ue && `${pe}-${Ue}`),
    children: [
      u &&
        l.jsx("div", {
          className: `${pe}-indicators`,
          children: Cf(Ft, (b, te) =>
            l.jsx(
              "button",
              {
                type: "button",
                "data-bs-target": "",
                "aria-label": c != null && c.length ? c[te] : `Slide ${te + 1}`,
                className: te === ee ? "active" : void 0,
                onClick: ed ? ed[te] : void 0,
                "aria-current": te === ee,
              },
              te
            )
          ),
        }),
      l.jsx("div", {
        className: `${pe}-inner`,
        children: Cf(Ft, (b, te) => {
          const bt = te === ee;
          return o
            ? l.jsx(ui, {
                in: bt,
                onEnter: bt ? Uy : void 0,
                onEntered: bt ? zy : void 0,
                addEndListener: ai,
                children: (ns, Qy) =>
                  p.cloneElement(b, {
                    ...Qy,
                    className: F(
                      b.props.className,
                      bt && ns !== "entered" && go,
                      (ns === "entered" || ns === "exiting") && "active",
                      (ns === "entering" || ns === "exiting") && ts
                    ),
                  }),
              })
            : p.cloneElement(b, {
                className: F(b.props.className, bt && "active"),
              });
        }),
      }),
      a &&
        l.jsxs(l.Fragment, {
          children: [
            (w || d !== 0) &&
              l.jsxs(Br, {
                className: `${pe}-control-prev`,
                onClick: at,
                children: [
                  H,
                  D &&
                    l.jsx("span", {
                      className: "visually-hidden",
                      children: D,
                    }),
                ],
              }),
            (w || d !== Mt - 1) &&
              l.jsxs(Br, {
                className: `${pe}-control-next`,
                onClick: Je,
                children: [
                  fe,
                  it &&
                    l.jsx("span", {
                      className: "visually-hidden",
                      children: it,
                    }),
                ],
              }),
          ],
        }),
    ],
  });
});
Zm.displayName = "Carousel";
const Zi = Object.assign(Zm, { Caption: qm, Item: Ym });
function Y1({ as: e, bsPrefix: t, className: n, ...r }) {
  t = z(t, "col");
  const s = Am(),
    o = Fm(),
    i = [],
    a = [];
  return (
    s.forEach((u) => {
      const c = r[u];
      delete r[u];
      let d, f, h;
      typeof c == "object" && c != null
        ? ({ span: d, offset: f, order: h } = c)
        : (d = c);
      const v = u !== o ? `-${u}` : "";
      d && i.push(d === !0 ? `${t}${v}` : `${t}${v}-${d}`),
        h != null && a.push(`order${v}-${h}`),
        f != null && a.push(`offset${v}-${f}`);
    }),
    [
      { ...r, className: F(n, ...i, ...a) },
      { as: e, bsPrefix: t, spans: i },
    ]
  );
}
const N = p.forwardRef((e, t) => {
  const [{ className: n, ...r }, { as: s = "div", bsPrefix: o, spans: i }] =
    Y1(e);
  return l.jsx(s, { ...r, ref: t, className: F(n, !i.length && o) });
});
N.displayName = "Col";
const Pc = p.forwardRef(
  ({ bsPrefix: e, fluid: t = !1, as: n = "div", className: r, ...s }, o) => {
    const i = z(e, "container"),
      a = typeof t == "string" ? `-${t}` : "-fluid";
    return l.jsx(n, { ref: o, ...s, className: F(r, t ? `${i}${a}` : i) });
  }
);
Pc.displayName = "Container";
var Z1 = Function.prototype.bind.call(Function.prototype.call, [].slice);
function Un(e, t) {
  return Z1(e.querySelectorAll(t));
}
function ew() {
  const [, e] = p.useReducer((t) => t + 1, 0);
  return e;
}
function kf(e, t) {
  if (e.contains) return e.contains(t);
  if (e.compareDocumentPosition)
    return e === t || !!(e.compareDocumentPosition(t) & 16);
}
const Rl = p.createContext(null),
  di = (e, t = null) => (e != null ? String(e) : t || null),
  Oc = p.createContext(null);
Oc.displayName = "NavContext";
const tw = "data-rr-ui-",
  nw = "rrUi";
function fi(e) {
  return `${tw}${e}`;
}
function rw(e) {
  return `${nw}${e}`;
}
const eg = p.createContext(ii ? window : void 0);
eg.Provider;
function Tc() {
  return p.useContext(eg);
}
const sw =
    typeof global < "u" &&
    global.navigator &&
    global.navigator.product === "ReactNative",
  ow = typeof document < "u",
  lw = ow || sw ? p.useLayoutEffect : p.useEffect,
  Xr = p.createContext(null);
Xr.displayName = "NavbarContext";
We.string, We.bool, We.bool, We.bool, We.bool;
const lo = p.forwardRef(
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
    (e = z(e, "img")),
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
lo.displayName = "Image";
const iw = { type: We.string, tooltip: We.bool, as: We.elementType },
  pi = p.forwardRef(
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
pi.displayName = "Feedback";
pi.propTypes = iw;
const Yt = p.createContext({}),
  Ic = p.forwardRef(
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
      const { controlId: c } = p.useContext(Yt);
      return (
        (t = z(t, "form-check-input")),
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
Ic.displayName = "FormCheckInput";
const Pl = p.forwardRef(
  ({ bsPrefix: e, className: t, htmlFor: n, ...r }, s) => {
    const { controlId: o } = p.useContext(Yt);
    return (
      (e = z(e, "form-check-label")),
      l.jsx("label", { ...r, ref: s, htmlFor: n || o, className: F(t, e) })
    );
  }
);
Pl.displayName = "FormCheckLabel";
const tg = p.forwardRef(
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
      style: h,
      title: v = "",
      type: m = "checkbox",
      label: S,
      children: j,
      as: x = "input",
      ...y
    },
    g
  ) => {
    (t = z(t, "form-check")), (n = z(n, "form-switch"));
    const { controlId: w } = p.useContext(Yt),
      k = p.useMemo(() => ({ controlId: e || w }), [w, e]),
      _ = (!j && S != null && S !== !1) || J1(j, Pl),
      R = l.jsx(Ic, {
        ...y,
        type: m === "switch" ? "checkbox" : m,
        ref: g,
        isValid: i,
        isInvalid: a,
        disabled: o,
        as: x,
      });
    return l.jsx(Yt.Provider, {
      value: k,
      children: l.jsx("div", {
        style: h,
        className: F(
          f,
          _ && t,
          r && `${t}-inline`,
          s && `${t}-reverse`,
          m === "switch" && n
        ),
        children:
          j ||
          l.jsxs(l.Fragment, {
            children: [
              R,
              _ && l.jsx(Pl, { title: v, children: S }),
              c && l.jsx(pi, { type: d, tooltip: u, children: c }),
            ],
          }),
      }),
    });
  }
);
tg.displayName = "FormCheck";
const Ol = Object.assign(tg, { Input: Ic, Label: Pl }),
  ng = p.forwardRef(
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
      h
    ) => {
      const { controlId: v } = p.useContext(Yt);
      return (
        (e = z(e, "form-control")),
        l.jsx(d, {
          ...f,
          type: t,
          size: r,
          ref: h,
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
ng.displayName = "FormControl";
const aw = Object.assign(ng, { Feedback: pi }),
  rg = p.forwardRef(
    ({ className: e, bsPrefix: t, as: n = "div", ...r }, s) => (
      (t = z(t, "form-floating")),
      l.jsx(n, { ref: s, className: F(e, t), ...r })
    )
  );
rg.displayName = "FormFloating";
const Lc = p.forwardRef(({ controlId: e, as: t = "div", ...n }, r) => {
  const s = p.useMemo(() => ({ controlId: e }), [e]);
  return l.jsx(Yt.Provider, { value: s, children: l.jsx(t, { ...n, ref: r }) });
});
Lc.displayName = "FormGroup";
const sg = p.forwardRef(
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
    const { controlId: u } = p.useContext(Yt);
    t = z(t, "form-label");
    let c = "col-form-label";
    typeof n == "string" && (c = `${c} ${c}-${n}`);
    const d = F(s, t, r && "visually-hidden", n && c);
    return (
      (o = o || u),
      n
        ? l.jsx(N, { ref: a, as: "label", className: d, htmlFor: o, ...i })
        : l.jsx(e, { ref: a, className: d, htmlFor: o, ...i })
    );
  }
);
sg.displayName = "FormLabel";
const og = p.forwardRef(({ bsPrefix: e, className: t, id: n, ...r }, s) => {
  const { controlId: o } = p.useContext(Yt);
  return (
    (e = z(e, "form-range")),
    l.jsx("input", {
      ...r,
      type: "range",
      ref: s,
      className: F(t, e),
      id: n || o,
    })
  );
});
og.displayName = "FormRange";
const lg = p.forwardRef(
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
    const { controlId: c } = p.useContext(Yt);
    return (
      (e = z(e, "form-select")),
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
lg.displayName = "FormSelect";
const ig = p.forwardRef(
  ({ bsPrefix: e, className: t, as: n = "small", muted: r, ...s }, o) => (
    (e = z(e, "form-text")),
    l.jsx(n, { ...s, ref: o, className: F(t, e, r && "text-muted") })
  )
);
ig.displayName = "FormText";
const ag = p.forwardRef((e, t) => l.jsx(Ol, { ...e, ref: t, type: "switch" }));
ag.displayName = "Switch";
const uw = Object.assign(ag, { Input: Ol.Input, Label: Ol.Label }),
  ug = p.forwardRef(
    (
      { bsPrefix: e, className: t, children: n, controlId: r, label: s, ...o },
      i
    ) => (
      (e = z(e, "form-floating")),
      l.jsxs(Lc, {
        ref: i,
        className: F(t, e),
        controlId: r,
        ...o,
        children: [n, l.jsx("label", { htmlFor: r, children: s })],
      })
    )
  );
ug.displayName = "FloatingLabel";
const cw = { _ref: We.any, validated: We.bool, as: We.elementType },
  $c = p.forwardRef(({ className: e, validated: t, as: n = "form", ...r }, s) =>
    l.jsx(n, { ...r, ref: s, className: F(e, t && "was-validated") })
  );
$c.displayName = "Form";
$c.propTypes = cw;
const C = Object.assign($c, {
    Group: Lc,
    Control: aw,
    Floating: rg,
    Check: Ol,
    Switch: uw,
    Label: sg,
    Text: ig,
    Range: og,
    Select: lg,
    FloatingLabel: ug,
  }),
  _f = (e) =>
    !e || typeof e == "function"
      ? e
      : (t) => {
          e.current = t;
        };
function dw(e, t) {
  const n = _f(e),
    r = _f(t);
  return (s) => {
    n && n(s), r && r(s);
  };
}
function hi(e, t) {
  return p.useMemo(() => dw(e, t), [e, t]);
}
const cg = p.createContext(null),
  fw = ["as", "active", "eventKey"];
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
function Dc({ key: e, onClick: t, active: n, id: r, role: s, disabled: o }) {
  const i = p.useContext(Rl),
    a = p.useContext(Oc),
    u = p.useContext(cg);
  let c = n;
  const d = { role: s };
  if (a) {
    !s && a.role === "tablist" && (d.role = "tab");
    const f = a.getControllerId(e ?? null),
      h = a.getControlledId(e ?? null);
    (d[fi("event-key")] = e),
      (d.id = f || r),
      (c = n == null && e != null ? a.activeKey === e : n),
      (c ||
        (!(u != null && u.unmountOnExit) && !(u != null && u.mountOnEnter))) &&
        (d["aria-controls"] = h);
  }
  return (
    d.role === "tab" &&
      ((d["aria-selected"] = c),
      c || (d.tabIndex = -1),
      o && ((d.tabIndex = -1), (d["aria-disabled"] = !0))),
    (d.onClick = Wt((f) => {
      o ||
        (t == null || t(f),
        e != null && i && !f.isPropagationStopped() && i(e, f));
    })),
    [d, { isActive: c }]
  );
}
const dg = p.forwardRef((e, t) => {
  let { as: n = Km, active: r, eventKey: s } = e,
    o = pw(e, fw);
  const [i, a] = Dc(Object.assign({ key: di(s, o.href), active: r }, o));
  return (
    (i[fi("active")] = a.isActive),
    l.jsx(n, Object.assign({}, o, i, { ref: t }))
  );
});
dg.displayName = "NavItem";
const hw = dg,
  mw = ["as", "onSelect", "activeKey", "role", "onKeyDown"];
function gw(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
const Rf = () => {},
  Pf = fi("event-key"),
  fg = p.forwardRef((e, t) => {
    let { as: n = "div", onSelect: r, activeKey: s, role: o, onKeyDown: i } = e,
      a = gw(e, mw);
    const u = ew(),
      c = p.useRef(!1),
      d = p.useContext(Rl),
      f = p.useContext(cg);
    let h, v;
    f &&
      ((o = o || "tablist"),
      (s = f.activeKey),
      (h = f.getControlledId),
      (v = f.getControllerId));
    const m = p.useRef(null),
      S = (g) => {
        const w = m.current;
        if (!w) return null;
        const k = Un(w, `[${Pf}]:not([aria-disabled=true])`),
          _ = w.querySelector("[aria-selected=true]");
        if (!_ || _ !== document.activeElement) return null;
        const R = k.indexOf(_);
        if (R === -1) return null;
        let T = R + g;
        return T >= k.length && (T = 0), T < 0 && (T = k.length - 1), k[T];
      },
      j = (g, w) => {
        g != null && (r == null || r(g, w), d == null || d(g, w));
      },
      x = (g) => {
        if ((i == null || i(g), !f)) return;
        let w;
        switch (g.key) {
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
          (g.preventDefault(),
          j(w.dataset[rw("EventKey")] || null, g),
          (c.current = !0),
          u());
      };
    p.useEffect(() => {
      if (m.current && c.current) {
        const g = m.current.querySelector(`[${Pf}][aria-selected=true]`);
        g == null || g.focus();
      }
      c.current = !1;
    });
    const y = hi(t, m);
    return l.jsx(Rl.Provider, {
      value: j,
      children: l.jsx(Oc.Provider, {
        value: {
          role: o,
          activeKey: di(s),
          getControlledId: h || Rf,
          getControllerId: v || Rf,
        },
        children: l.jsx(
          n,
          Object.assign({}, a, { onKeyDown: x, ref: y, role: o })
        ),
      }),
    });
  });
fg.displayName = "Nav";
const pg = Object.assign(fg, { Item: hw }),
  hg = p.forwardRef(
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
      e = z(e, "list-group-item");
      const [d, f] = Dc({ key: di(r, u.href), active: t, ...u }),
        h = Pn((m) => {
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
        onClick: h,
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
hg.displayName = "ListGroupItem";
const mg = p.forwardRef((e, t) => {
  const {
      className: n,
      bsPrefix: r,
      variant: s,
      horizontal: o,
      numbered: i,
      as: a = "div",
      ...u
    } = oo(e, { activeKey: "onSelect" }),
    c = z(r, "list-group");
  let d;
  return (
    o && (d = o === !0 ? "horizontal" : `horizontal-${o}`),
    l.jsx(pg, {
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
mg.displayName = "ListGroup";
const B = Object.assign(mg, { Item: hg });
function ea(e) {
  e === void 0 && (e = kc());
  try {
    var t = e.activeElement;
    return !t || !t.nodeName ? null : t;
  } catch {
    return e.body;
  }
}
function yw(e) {
  const t = p.useRef(e);
  return (t.current = e), t;
}
function xw(e) {
  const t = yw(e);
  p.useEffect(() => () => t.current(), []);
}
function vw(e = document) {
  const t = e.defaultView;
  return Math.abs(t.innerWidth - e.documentElement.clientWidth);
}
const Of = fi("modal-open");
class Ac {
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
    return vw(this.ownerDocument);
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
        (n[r] = `${parseInt(Gt(s, r) || "0", 10) + t.scrollBarWidth}px`),
      s.setAttribute(Of, ""),
      Gt(s, n);
  }
  reset() {
    [...this.modals].forEach((t) => this.remove(t));
  }
  removeContainerStyle(t) {
    const n = this.getElement();
    n.removeAttribute(Of), Object.assign(n.style, t.style);
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
const ta = (e, t) =>
  ii
    ? e == null
      ? (t || kc()).body
      : (typeof e == "function" && (e = e()),
        e && "current" in e && (e = e.current),
        e && ("nodeType" in e || e.getBoundingClientRect) ? e : null)
    : null;
function jw(e, t) {
  const n = Tc(),
    [r, s] = p.useState(() => ta(e, n == null ? void 0 : n.document));
  if (!r) {
    const o = ta(e);
    o && s(o);
  }
  return (
    p.useEffect(() => {}, [t, r]),
    p.useEffect(() => {
      const o = ta(e);
      o !== r && s(o);
    }, [e, r]),
    r
  );
}
function ww({
  children: e,
  in: t,
  onExited: n,
  mountOnEnter: r,
  unmountOnExit: s,
}) {
  const o = p.useRef(null),
    i = p.useRef(t),
    a = Wt(n);
  p.useEffect(() => {
    t ? (i.current = !0) : a(o.current);
  }, [t, a]);
  const u = hi(o, e.ref),
    c = p.cloneElement(e, { ref: u });
  return t ? c : s || (!i.current && r) ? null : c;
}
const Sw = [
  "onEnter",
  "onEntering",
  "onEntered",
  "onExit",
  "onExiting",
  "onExited",
  "addEndListener",
  "children",
];
function Nw(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function Ew(e) {
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
    c = Nw(e, Sw);
  const d = p.useRef(null),
    f = hi(d, li(u)),
    h = (w) => (k) => {
      w && d.current && w(d.current, k);
    },
    v = p.useCallback(h(t), [t]),
    m = p.useCallback(h(n), [n]),
    S = p.useCallback(h(r), [r]),
    j = p.useCallback(h(s), [s]),
    x = p.useCallback(h(o), [o]),
    y = p.useCallback(h(i), [i]),
    g = p.useCallback(h(a), [a]);
  return Object.assign(
    {},
    c,
    { nodeRef: d },
    t && { onEnter: v },
    n && { onEntering: m },
    r && { onEntered: S },
    s && { onExit: j },
    o && { onExiting: x },
    i && { onExited: y },
    a && { addEndListener: g },
    {
      children:
        typeof u == "function"
          ? (w, k) => u(w, Object.assign({}, k, { ref: f }))
          : p.cloneElement(u, { ref: f }),
    }
  );
}
const Cw = ["component"];
function kw(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
const _w = p.forwardRef((e, t) => {
  let { component: n } = e,
    r = kw(e, Cw);
  const s = Ew(r);
  return l.jsx(n, Object.assign({ ref: t }, s));
});
function Rw({ in: e, onTransition: t }) {
  const n = p.useRef(null),
    r = p.useRef(!0),
    s = Wt(t);
  return (
    Ef(() => {
      if (!n.current) return;
      let o = !1;
      return (
        s({ in: e, element: n.current, initial: r.current, isStale: () => o }),
        () => {
          o = !0;
        }
      );
    }, [e, s]),
    Ef(
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
function Pw({ children: e, in: t, onExited: n, onEntered: r, transition: s }) {
  const [o, i] = p.useState(!t);
  t && o && i(!1);
  const a = Rw({
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
    u = hi(a, e.ref);
  return o && !t ? null : p.cloneElement(e, { ref: u });
}
function Tf(e, t, n) {
  return e
    ? l.jsx(_w, Object.assign({}, n, { component: e }))
    : t
    ? l.jsx(Pw, Object.assign({}, n, { transition: t }))
    : l.jsx(ww, Object.assign({}, n));
}
const Ow = [
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
function Tw(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
let na;
function Iw(e) {
  return (
    na || (na = new Ac({ ownerDocument: e == null ? void 0 : e.document })), na
  );
}
function Lw(e) {
  const t = Tc(),
    n = e || Iw(t),
    r = p.useRef({ dialog: null, backdrop: null });
  return Object.assign(r.current, {
    add: () => n.add(r.current),
    remove: () => n.remove(r.current),
    isTopModal: () => n.isTopModal(r.current),
    setDialogRef: p.useCallback((s) => {
      r.current.dialog = s;
    }, []),
    setBackdropRef: p.useCallback((s) => {
      r.current.backdrop = s;
    }, []),
  });
}
const gg = p.forwardRef((e, t) => {
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
      runTransition: h,
      backdropTransition: v,
      runBackdropTransition: m,
      autoFocus: S = !0,
      enforceFocus: j = !0,
      restoreFocus: x = !0,
      restoreFocusOptions: y,
      renderDialog: g,
      renderBackdrop: w = (q) => l.jsx("div", Object.assign({}, q)),
      manager: k,
      container: _,
      onShow: R,
      onHide: T = () => {},
      onExit: H,
      onExited: D,
      onExiting: fe,
      onEnter: it,
      onEntering: Ue,
      onEntered: At,
    } = e,
    Ft = Tw(e, Ow);
  const Oe = Tc(),
    pe = jw(_),
    I = Lw(k),
    A = O1(),
    M = T1(n),
    [J, re] = p.useState(!n),
    Ne = p.useRef(null);
  p.useImperativeHandle(t, () => I, [I]),
    ii && !M && n && (Ne.current = ea(Oe == null ? void 0 : Oe.document)),
    n && J && re(!1);
  const Z = Wt(() => {
      if (
        (I.add(),
        (cr.current = kl(document, "keydown", Mt)),
        (ur.current = kl(document, "focus", () => setTimeout(ee), !0)),
        R && R(),
        S)
      ) {
        var q, go;
        const ts = ea(
          (q = (go = I.dialog) == null ? void 0 : go.ownerDocument) != null
            ? q
            : Oe == null
            ? void 0
            : Oe.document
        );
        I.dialog &&
          ts &&
          !kf(I.dialog, ts) &&
          ((Ne.current = ts), I.dialog.focus());
      }
    }),
    ze = Wt(() => {
      if (
        (I.remove(),
        cr.current == null || cr.current(),
        ur.current == null || ur.current(),
        x)
      ) {
        var q;
        (q = Ne.current) == null || q.focus == null || q.focus(y),
          (Ne.current = null);
      }
    });
  p.useEffect(() => {
    !n || !pe || Z();
  }, [n, pe, Z]),
    p.useEffect(() => {
      J && ze();
    }, [J, ze]),
    xw(() => {
      ze();
    });
  const ee = Wt(() => {
      if (!j || !A() || !I.isTopModal()) return;
      const q = ea(Oe == null ? void 0 : Oe.document);
      I.dialog && q && !kf(I.dialog, q) && I.dialog.focus();
    }),
    on = Wt((q) => {
      q.target === q.currentTarget && (c == null || c(q), a === !0 && T());
    }),
    Mt = Wt((q) => {
      u &&
        h1(q) &&
        I.isTopModal() &&
        (d == null || d(q), q.defaultPrevented || T());
    }),
    ur = p.useRef(),
    cr = p.useRef(),
    at = (...q) => {
      re(!0), D == null || D(...q);
    };
  if (!pe) return null;
  const Je = Object.assign(
    {
      role: r,
      ref: I.setDialogRef,
      "aria-modal": r === "dialog" ? !0 : void 0,
    },
    Ft,
    { style: o, className: s, tabIndex: -1 }
  );
  let An = g
    ? g(Je)
    : l.jsx(
        "div",
        Object.assign({}, Je, {
          children: p.cloneElement(i, { role: "document" }),
        })
      );
  An = Tf(f, h, {
    unmountOnExit: !0,
    mountOnEnter: !0,
    appear: !0,
    in: !!n,
    onExit: H,
    onExiting: fe,
    onExited: at,
    onEnter: it,
    onEntering: Ue,
    onEntered: At,
    children: An,
  });
  let Fn = null;
  return (
    a &&
      ((Fn = w({ ref: I.setBackdropRef, onClick: on })),
      (Fn = Tf(v, m, {
        in: !!n,
        appear: !0,
        mountOnEnter: !0,
        unmountOnExit: !0,
        children: Fn,
      }))),
    l.jsx(l.Fragment, {
      children: _r.createPortal(l.jsxs(l.Fragment, { children: [Fn, An] }), pe),
    })
  );
});
gg.displayName = "Modal";
const $w = Object.assign(gg, { Manager: Ac });
function Dw(e, t) {
  return e.classList
    ? e.classList.contains(t)
    : (" " + (e.className.baseVal || e.className) + " ").indexOf(
        " " + t + " "
      ) !== -1;
}
function Aw(e, t) {
  e.classList
    ? e.classList.add(t)
    : Dw(e, t) ||
      (typeof e.className == "string"
        ? (e.className = e.className + " " + t)
        : e.setAttribute(
            "class",
            ((e.className && e.className.baseVal) || "") + " " + t
          ));
}
function If(e, t) {
  return e
    .replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1")
    .replace(/\s+/g, " ")
    .replace(/^\s*|\s*$/g, "");
}
function Fw(e, t) {
  e.classList
    ? e.classList.remove(t)
    : typeof e.className == "string"
    ? (e.className = If(e.className, t))
    : e.setAttribute(
        "class",
        If((e.className && e.className.baseVal) || "", t)
      );
}
const pr = {
  FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
  STICKY_CONTENT: ".sticky-top",
  NAVBAR_TOGGLER: ".navbar-toggler",
};
class yg extends Ac {
  adjustAndStore(t, n, r) {
    const s = n.style[t];
    (n.dataset[t] = s), Gt(n, { [t]: `${parseFloat(Gt(n, t)) + r}px` });
  }
  restore(t, n) {
    const r = n.dataset[t];
    r !== void 0 && (delete n.dataset[t], Gt(n, { [t]: r }));
  }
  setContainerStyle(t) {
    super.setContainerStyle(t);
    const n = this.getElement();
    if ((Aw(n, "modal-open"), !t.scrollBarWidth)) return;
    const r = this.isRTL ? "paddingLeft" : "paddingRight",
      s = this.isRTL ? "marginLeft" : "marginRight";
    Un(n, pr.FIXED_CONTENT).forEach((o) =>
      this.adjustAndStore(r, o, t.scrollBarWidth)
    ),
      Un(n, pr.STICKY_CONTENT).forEach((o) =>
        this.adjustAndStore(s, o, -t.scrollBarWidth)
      ),
      Un(n, pr.NAVBAR_TOGGLER).forEach((o) =>
        this.adjustAndStore(s, o, t.scrollBarWidth)
      );
  }
  removeContainerStyle(t) {
    super.removeContainerStyle(t);
    const n = this.getElement();
    Fw(n, "modal-open");
    const r = this.isRTL ? "paddingLeft" : "paddingRight",
      s = this.isRTL ? "marginLeft" : "marginRight";
    Un(n, pr.FIXED_CONTENT).forEach((o) => this.restore(r, o)),
      Un(n, pr.STICKY_CONTENT).forEach((o) => this.restore(s, o)),
      Un(n, pr.NAVBAR_TOGGLER).forEach((o) => this.restore(s, o));
  }
}
let ra;
function Mw(e) {
  return ra || (ra = new yg(e)), ra;
}
const xg = p.createContext({ onHide() {} }),
  bw = p.forwardRef(
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
      const a = p.useContext(xg),
        u = Pn(() => {
          a == null || a.onHide(), r == null || r();
        });
      return l.jsxs("div", {
        ref: i,
        ...o,
        children: [
          s,
          n && l.jsx(ci, { "aria-label": e, variant: t, onClick: u }),
        ],
      });
    }
  ),
  vg = p.forwardRef(
    ({ className: e, bsPrefix: t, as: n = "div", ...r }, s) => (
      (t = z(t, "nav-item")), l.jsx(n, { ref: s, className: F(e, t), ...r })
    )
  );
vg.displayName = "NavItem";
const jg = p.forwardRef(
  (
    {
      bsPrefix: e,
      className: t,
      as: n = Br,
      active: r,
      eventKey: s,
      disabled: o = !1,
      ...i
    },
    a
  ) => {
    e = z(e, "nav-link");
    const [u, c] = Dc({ key: di(s, i.href), active: r, disabled: o, ...i });
    return l.jsx(n, {
      ...i,
      ...u,
      ref: a,
      disabled: o,
      className: F(t, e, o && "disabled", c.isActive && "active"),
    });
  }
);
jg.displayName = "NavLink";
const wg = p.forwardRef((e, t) => {
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
    } = oo(e, { activeKey: "onSelect" }),
    h = z(r, "nav");
  let v,
    m,
    S = !1;
  const j = p.useContext(Xr),
    x = p.useContext(Jm);
  return (
    j
      ? ((v = j.bsPrefix), (S = a ?? !0))
      : x && ({ cardHeaderBsPrefix: m } = x),
    l.jsx(pg, {
      as: n,
      ref: t,
      activeKey: d,
      className: F(c, {
        [h]: !S,
        [`${v}-nav`]: S,
        [`${v}-nav-scroll`]: S && u,
        [`${m}-${s}`]: !!m,
        [`${h}-${s}`]: !!s,
        [`${h}-fill`]: o,
        [`${h}-justified`]: i,
      }),
      ...f,
    })
  );
});
wg.displayName = "Nav";
const Sg = Object.assign(wg, { Item: vg, Link: jg }),
  Ng = p.forwardRef(({ bsPrefix: e, className: t, as: n, ...r }, s) => {
    e = z(e, "navbar-brand");
    const o = n || (r.href ? "a" : "span");
    return l.jsx(o, { ...r, ref: s, className: F(t, e) });
  });
Ng.displayName = "NavbarBrand";
const Eg = p.forwardRef(({ children: e, bsPrefix: t, ...n }, r) => {
  t = z(t, "navbar-collapse");
  const s = p.useContext(Xr);
  return l.jsx(R1, {
    in: !!(s && s.expanded),
    ...n,
    children: l.jsx("div", { ref: r, className: t, children: e }),
  });
});
Eg.displayName = "NavbarCollapse";
const Cg = p.forwardRef(
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
    e = z(e, "navbar-toggler");
    const { onToggle: u, expanded: c } = p.useContext(Xr) || {},
      d = Pn((f) => {
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
Cg.displayName = "NavbarToggle";
const hu = new WeakMap(),
  Lf = (e, t) => {
    if (!e || !t) return;
    const n = hu.get(t) || new Map();
    hu.set(t, n);
    let r = n.get(e);
    return r || ((r = t.matchMedia(e)), (r.refCount = 0), n.set(r.media, r)), r;
  };
function Uw(e, t = typeof window > "u" ? void 0 : window) {
  const n = Lf(e, t),
    [r, s] = p.useState(() => (n ? n.matches : !1));
  return (
    lw(() => {
      let o = Lf(e, t);
      if (!o) return s(!1);
      let i = hu.get(t);
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
  function i(a, u, c) {
    let d;
    typeof a == "object"
      ? ((d = a), (c = u), (u = !0))
      : ((u = u || !0), (d = { [a]: u }));
    let f = p.useMemo(
      () =>
        Object.entries(d).reduce(
          (h, [v, m]) => (
            (m === "up" || m === !0) && (h = n(h, o(v))),
            (m === "down" || m === !0) && (h = n(h, s(v))),
            h
          ),
          ""
        ),
      [JSON.stringify(d)]
    );
    return Uw(f, c);
  }
  return i;
}
const Bw = zw({ xs: 0, sm: 576, md: 768, lg: 992, xl: 1200, xxl: 1400 }),
  kg = p.forwardRef(
    ({ className: e, bsPrefix: t, as: n = "div", ...r }, s) => (
      (t = z(t, "offcanvas-body")),
      l.jsx(n, { ref: s, className: F(e, t), ...r })
    )
  );
kg.displayName = "OffcanvasBody";
const Ww = { [jt]: "show", [Bt]: "show" },
  _g = p.forwardRef(
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
      (e = z(e, "offcanvas")),
      l.jsx(ui, {
        ref: u,
        addEndListener: ai,
        in: r,
        mountOnEnter: s,
        unmountOnExit: o,
        appear: i,
        ...a,
        childRef: li(n),
        children: (c, d) =>
          p.cloneElement(n, {
            ...d,
            className: F(
              t,
              n.props.className,
              (c === jt || c === Gs) && `${e}-toggling`,
              Ww[c]
            ),
          }),
      })
    )
  );
_g.displayName = "OffcanvasToggling";
const Rg = p.forwardRef(
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
    (e = z(e, "offcanvas-header")),
    l.jsx(bw, {
      ref: o,
      ...s,
      className: F(t, e),
      closeLabel: n,
      closeButton: r,
    })
  )
);
Rg.displayName = "OffcanvasHeader";
const Hw = Wm("h5"),
  Pg = p.forwardRef(
    ({ className: e, bsPrefix: t, as: n = Hw, ...r }, s) => (
      (t = z(t, "offcanvas-title")),
      l.jsx(n, { ref: s, className: F(e, t), ...r })
    )
  );
Pg.displayName = "OffcanvasTitle";
function Vw(e) {
  return l.jsx(_g, { ...e });
}
function Kw(e) {
  return l.jsx(_l, { ...e });
}
const Og = p.forwardRef(
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
      onHide: h,
      container: v,
      autoFocus: m = !0,
      enforceFocus: S = !0,
      restoreFocus: j = !0,
      restoreFocusOptions: x,
      onEntered: y,
      onExit: g,
      onExiting: w,
      onEnter: k,
      onEntering: _,
      onExited: R,
      backdropClassName: T,
      manager: H,
      renderStaticNode: D = !1,
      ...fe
    },
    it
  ) => {
    const Ue = p.useRef();
    e = z(e, "offcanvas");
    const [At, Ft] = p.useState(!1),
      Oe = Pn(h),
      pe = Bw(o || "xs", "up");
    p.useEffect(() => {
      Ft(o ? i && !pe : i);
    }, [i, o, pe]);
    const I = p.useMemo(() => ({ onHide: Oe }), [Oe]);
    function A() {
      return (
        H ||
        (c
          ? (Ue.current ||
              (Ue.current = new yg({ handleContainerOverflow: !1 })),
            Ue.current)
          : Mw())
      );
    }
    const M = (Z, ...ze) => {
        Z && (Z.style.visibility = "visible"), k == null || k(Z, ...ze);
      },
      J = (Z, ...ze) => {
        Z && (Z.style.visibility = ""), R == null || R(...ze);
      },
      re = p.useCallback(
        (Z) => l.jsx("div", { ...Z, className: F(`${e}-backdrop`, T) }),
        [T, e]
      ),
      Ne = (Z) =>
        l.jsx("div", {
          ...Z,
          ...fe,
          className: F(t, o ? `${e}-${o}` : e, `${e}-${s}`),
          "aria-labelledby": r,
          children: n,
        });
    return l.jsxs(l.Fragment, {
      children: [
        !At && (o || D) && Ne({}),
        l.jsx(xg.Provider, {
          value: I,
          children: l.jsx($w, {
            show: At,
            ref: it,
            backdrop: a,
            container: v,
            keyboard: u,
            autoFocus: m,
            enforceFocus: S && !c,
            restoreFocus: j,
            restoreFocusOptions: x,
            onEscapeKeyDown: d,
            onShow: f,
            onHide: Oe,
            onEnter: M,
            onEntering: _,
            onEntered: y,
            onExit: g,
            onExiting: w,
            onExited: J,
            manager: A(),
            transition: Vw,
            backdropTransition: Kw,
            renderBackdrop: re,
            renderDialog: Ne,
          }),
        }),
      ],
    });
  }
);
Og.displayName = "Offcanvas";
const Gw = Object.assign(Og, { Body: kg, Header: Rg, Title: Pg }),
  Tg = p.forwardRef(({ onHide: e, ...t }, n) => {
    const r = p.useContext(Xr),
      s = Pn(() => {
        r == null || r.onToggle == null || r.onToggle(), e == null || e();
      });
    return l.jsx(Gw, {
      ref: n,
      show: !!(r != null && r.expanded),
      ...t,
      renderStaticNode: !0,
      onHide: s,
    });
  });
Tg.displayName = "NavbarOffcanvas";
const Ig = p.forwardRef(
  ({ className: e, bsPrefix: t, as: n = "span", ...r }, s) => (
    (t = z(t, "navbar-text")), l.jsx(n, { ref: s, className: F(e, t), ...r })
  )
);
Ig.displayName = "NavbarText";
const Lg = p.forwardRef((e, t) => {
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
      onSelect: h,
      collapseOnSelect: v = !1,
      ...m
    } = oo(e, { expanded: "onToggle" }),
    S = z(n, "navbar"),
    j = p.useCallback(
      (...g) => {
        h == null || h(...g), v && d && (f == null || f(!1));
      },
      [h, v, d, f]
    );
  m.role === void 0 && c !== "nav" && (m.role = "navigation");
  let x = `${S}-expand`;
  typeof r == "string" && (x = `${x}-${r}`);
  const y = p.useMemo(
    () => ({
      onToggle: () => (f == null ? void 0 : f(!d)),
      bsPrefix: S,
      expanded: !!d,
      expand: r,
    }),
    [S, d, r, f]
  );
  return l.jsx(Xr.Provider, {
    value: y,
    children: l.jsx(Rl.Provider, {
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
Lg.displayName = "Navbar";
const Tl = Object.assign(Lg, {
    Brand: Ng,
    Collapse: Eg,
    Offcanvas: Tg,
    Text: Ig,
    Toggle: Cg,
  }),
  Fc = p.forwardRef(
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
        as: u = Br,
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
Fc.displayName = "PageItem";
const Qw = Fc;
function io(e, t, n = e) {
  const r = p.forwardRef(({ children: s, ...o }, i) =>
    l.jsxs(Fc, {
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
const Jw = io("First", "«"),
  Xw = io("Prev", "‹", "Previous"),
  qw = io("Ellipsis", "…", "More"),
  Yw = io("Next", "›"),
  Zw = io("Last", "»"),
  $g = p.forwardRef(({ bsPrefix: e, className: t, size: n, ...r }, s) => {
    const o = z(e, "pagination");
    return l.jsx("ul", { ref: s, ...r, className: F(t, o, n && `${o}-${n}`) });
  });
$g.displayName = "Pagination";
const Ao = Object.assign($g, {
    First: Jw,
    Prev: Xw,
    Ellipsis: qw,
    Item: Qw,
    Next: Yw,
    Last: Zw,
  }),
  P = p.forwardRef(({ bsPrefix: e, className: t, as: n = "div", ...r }, s) => {
    const o = z(e, "row"),
      i = Am(),
      a = Fm(),
      u = `${o}-cols`,
      c = [];
    return (
      i.forEach((d) => {
        const f = r[d];
        delete r[d];
        let h;
        f != null && typeof f == "object" ? ({ cols: h } = f) : (h = f);
        const v = d !== a ? `-${d}` : "";
        h != null && c.push(`${u}${v}-${h}`);
      }),
      l.jsx(n, { ref: s, ...r, className: F(t, o, ...c) })
    );
  });
P.displayName = "Row";
const Dg = p.forwardRef(
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
    e = z(e, "spinner");
    const u = `${e}-${n}`;
    return l.jsx(s, {
      ref: a,
      ...i,
      className: F(o, u, r && `${u}-${r}`, t && `text-${t}`),
    });
  }
);
Dg.displayName = "Spinner";
const $t = p.forwardRef(
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
    const f = z(e, "table"),
      h = F(
        t,
        f,
        a && `${f}-${a}`,
        i && `${f}-${i}`,
        n && `${f}-${typeof n == "string" ? `striped-${n}` : "striped"}`,
        r && `${f}-bordered`,
        s && `${f}-borderless`,
        o && `${f}-hover`
      ),
      v = l.jsx("table", { ...c, className: h, ref: d });
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
function Ce(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var eS = (typeof Symbol == "function" && Symbol.observable) || "@@observable",
  $f = eS,
  sa = () => Math.random().toString(36).substring(7).split("").join("."),
  tS = {
    INIT: `@@redux/INIT${sa()}`,
    REPLACE: `@@redux/REPLACE${sa()}`,
    PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${sa()}`,
  },
  Il = tS;
function Mc(e) {
  if (typeof e != "object" || e === null) return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; ) t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function Ag(e, t, n) {
  if (typeof e != "function") throw new Error(Ce(2));
  if (
    (typeof t == "function" && typeof n == "function") ||
    (typeof n == "function" && typeof arguments[3] == "function")
  )
    throw new Error(Ce(0));
  if (
    (typeof t == "function" && typeof n > "u" && ((n = t), (t = void 0)),
    typeof n < "u")
  ) {
    if (typeof n != "function") throw new Error(Ce(1));
    return n(Ag)(e, t);
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
    if (u) throw new Error(Ce(3));
    return s;
  }
  function f(j) {
    if (typeof j != "function") throw new Error(Ce(4));
    if (u) throw new Error(Ce(5));
    let x = !0;
    c();
    const y = a++;
    return (
      i.set(y, j),
      function () {
        if (x) {
          if (u) throw new Error(Ce(6));
          (x = !1), c(), i.delete(y), (o = null);
        }
      }
    );
  }
  function h(j) {
    if (!Mc(j)) throw new Error(Ce(7));
    if (typeof j.type > "u") throw new Error(Ce(8));
    if (typeof j.type != "string") throw new Error(Ce(17));
    if (u) throw new Error(Ce(9));
    try {
      (u = !0), (s = r(s, j));
    } finally {
      u = !1;
    }
    return (
      (o = i).forEach((y) => {
        y();
      }),
      j
    );
  }
  function v(j) {
    if (typeof j != "function") throw new Error(Ce(10));
    (r = j), h({ type: Il.REPLACE });
  }
  function m() {
    const j = f;
    return {
      subscribe(x) {
        if (typeof x != "object" || x === null) throw new Error(Ce(11));
        function y() {
          const w = x;
          w.next && w.next(d());
        }
        return y(), { unsubscribe: j(y) };
      },
      [$f]() {
        return this;
      },
    };
  }
  return (
    h({ type: Il.INIT }),
    { dispatch: h, subscribe: f, getState: d, replaceReducer: v, [$f]: m }
  );
}
function nS(e) {
  Object.keys(e).forEach((t) => {
    const n = e[t];
    if (typeof n(void 0, { type: Il.INIT }) > "u") throw new Error(Ce(12));
    if (typeof n(void 0, { type: Il.PROBE_UNKNOWN_ACTION() }) > "u")
      throw new Error(Ce(13));
  });
}
function rS(e) {
  const t = Object.keys(e),
    n = {};
  for (let o = 0; o < t.length; o++) {
    const i = t[o];
    typeof e[i] == "function" && (n[i] = e[i]);
  }
  const r = Object.keys(n);
  let s;
  try {
    nS(n);
  } catch (o) {
    s = o;
  }
  return function (i = {}, a) {
    if (s) throw s;
    let u = !1;
    const c = {};
    for (let d = 0; d < r.length; d++) {
      const f = r[d],
        h = n[f],
        v = i[f],
        m = h(v, a);
      if (typeof m > "u") throw (a && a.type, new Error(Ce(14)));
      (c[f] = m), (u = u || m !== v);
    }
    return (u = u || r.length !== Object.keys(i).length), u ? c : i;
  };
}
function Ll(...e) {
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
function sS(...e) {
  return (t) => (n, r) => {
    const s = t(n, r);
    let o = () => {
      throw new Error(Ce(15));
    };
    const i = { getState: s.getState, dispatch: (u, ...c) => o(u, ...c) },
      a = e.map((u) => u(i));
    return (o = Ll(...a)(s.dispatch)), { ...s, dispatch: o };
  };
}
function oS(e) {
  return Mc(e) && "type" in e && typeof e.type == "string";
}
var Fg = Symbol.for("immer-nothing"),
  Df = Symbol.for("immer-draftable"),
  nt = Symbol.for("immer-state");
function wt(e, ...t) {
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var Wr = Object.getPrototypeOf;
function er(e) {
  return !!e && !!e[nt];
}
function Zt(e) {
  var t;
  return e
    ? Mg(e) ||
        Array.isArray(e) ||
        !!e[Df] ||
        !!((t = e.constructor) != null && t[Df]) ||
        gi(e) ||
        yi(e)
    : !1;
}
var lS = Object.prototype.constructor.toString();
function Mg(e) {
  if (!e || typeof e != "object") return !1;
  const t = Wr(e);
  if (t === null) return !0;
  const n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return n === Object
    ? !0
    : typeof n == "function" && Function.toString.call(n) === lS;
}
function $l(e, t) {
  mi(e) === 0
    ? Reflect.ownKeys(e).forEach((n) => {
        t(n, e[n], e);
      })
    : e.forEach((n, r) => t(r, n, e));
}
function mi(e) {
  const t = e[nt];
  return t ? t.type_ : Array.isArray(e) ? 1 : gi(e) ? 2 : yi(e) ? 3 : 0;
}
function mu(e, t) {
  return mi(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function bg(e, t, n) {
  const r = mi(e);
  r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : (e[t] = n);
}
function iS(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function gi(e) {
  return e instanceof Map;
}
function yi(e) {
  return e instanceof Set;
}
function zn(e) {
  return e.copy_ || e.base_;
}
function gu(e, t) {
  if (gi(e)) return new Map(e);
  if (yi(e)) return new Set(e);
  if (Array.isArray(e)) return Array.prototype.slice.call(e);
  const n = Mg(e);
  if (t === !0 || (t === "class_only" && !n)) {
    const r = Object.getOwnPropertyDescriptors(e);
    delete r[nt];
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
    return Object.create(Wr(e), r);
  } else {
    const r = Wr(e);
    if (r !== null && n) return { ...e };
    const s = Object.create(r);
    return Object.assign(s, e);
  }
}
function bc(e, t = !1) {
  return (
    xi(e) ||
      er(e) ||
      !Zt(e) ||
      (mi(e) > 1 && (e.set = e.add = e.clear = e.delete = aS),
      Object.freeze(e),
      t && Object.entries(e).forEach(([n, r]) => bc(r, !0))),
    e
  );
}
function aS() {
  wt(2);
}
function xi(e) {
  return Object.isFrozen(e);
}
var uS = {};
function tr(e) {
  const t = uS[e];
  return t || wt(0, e), t;
}
var Qs;
function Ug() {
  return Qs;
}
function cS(e, t) {
  return {
    drafts_: [],
    parent_: e,
    immer_: t,
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0,
  };
}
function Af(e, t) {
  t &&
    (tr("Patches"),
    (e.patches_ = []),
    (e.inversePatches_ = []),
    (e.patchListener_ = t));
}
function yu(e) {
  xu(e), e.drafts_.forEach(dS), (e.drafts_ = null);
}
function xu(e) {
  e === Qs && (Qs = e.parent_);
}
function Ff(e) {
  return (Qs = cS(Qs, e));
}
function dS(e) {
  const t = e[nt];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : (t.revoked_ = !0);
}
function Mf(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const n = t.drafts_[0];
  return (
    e !== void 0 && e !== n
      ? (n[nt].modified_ && (yu(t), wt(4)),
        Zt(e) && ((e = Dl(t, e)), t.parent_ || Al(t, e)),
        t.patches_ &&
          tr("Patches").generateReplacementPatches_(
            n[nt].base_,
            e,
            t.patches_,
            t.inversePatches_
          ))
      : (e = Dl(t, n, [])),
    yu(t),
    t.patches_ && t.patchListener_(t.patches_, t.inversePatches_),
    e !== Fg ? e : void 0
  );
}
function Dl(e, t, n) {
  if (xi(t)) return t;
  const r = t[nt];
  if (!r) return $l(t, (s, o) => bf(e, r, t, s, o, n)), t;
  if (r.scope_ !== e) return t;
  if (!r.modified_) return Al(e, r.base_, !0), r.base_;
  if (!r.finalized_) {
    (r.finalized_ = !0), r.scope_.unfinalizedDrafts_--;
    const s = r.copy_;
    let o = s,
      i = !1;
    r.type_ === 3 && ((o = new Set(s)), s.clear(), (i = !0)),
      $l(o, (a, u) => bf(e, r, s, a, u, n, i)),
      Al(e, s, !1),
      n &&
        e.patches_ &&
        tr("Patches").generatePatches_(r, n, e.patches_, e.inversePatches_);
  }
  return r.copy_;
}
function bf(e, t, n, r, s, o, i) {
  if (er(s)) {
    const a =
        o && t && t.type_ !== 3 && !mu(t.assigned_, r) ? o.concat(r) : void 0,
      u = Dl(e, s, a);
    if ((bg(n, r, u), er(u))) e.canAutoFreeze_ = !1;
    else return;
  } else i && n.add(s);
  if (Zt(s) && !xi(s)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1) return;
    Dl(e, s),
      (!t || !t.scope_.parent_) &&
        typeof r != "symbol" &&
        Object.prototype.propertyIsEnumerable.call(n, r) &&
        Al(e, s);
  }
}
function Al(e, t, n = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && bc(t, n);
}
function fS(e, t) {
  const n = Array.isArray(e),
    r = {
      type_: n ? 1 : 0,
      scope_: t ? t.scope_ : Ug(),
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
    o = Uc;
  n && ((s = [r]), (o = Js));
  const { revoke: i, proxy: a } = Proxy.revocable(s, o);
  return (r.draft_ = a), (r.revoke_ = i), a;
}
var Uc = {
    get(e, t) {
      if (t === nt) return e;
      const n = zn(e);
      if (!mu(n, t)) return pS(e, n, t);
      const r = n[t];
      return e.finalized_ || !Zt(r)
        ? r
        : r === oa(e.base_, t)
        ? (la(e), (e.copy_[t] = ju(r, e)))
        : r;
    },
    has(e, t) {
      return t in zn(e);
    },
    ownKeys(e) {
      return Reflect.ownKeys(zn(e));
    },
    set(e, t, n) {
      const r = zg(zn(e), t);
      if (r != null && r.set) return r.set.call(e.draft_, n), !0;
      if (!e.modified_) {
        const s = oa(zn(e), t),
          o = s == null ? void 0 : s[nt];
        if (o && o.base_ === n)
          return (e.copy_[t] = n), (e.assigned_[t] = !1), !0;
        if (iS(n, s) && (n !== void 0 || mu(e.base_, t))) return !0;
        la(e), vu(e);
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
        oa(e.base_, t) !== void 0 || t in e.base_
          ? ((e.assigned_[t] = !1), la(e), vu(e))
          : delete e.assigned_[t],
        e.copy_ && delete e.copy_[t],
        !0
      );
    },
    getOwnPropertyDescriptor(e, t) {
      const n = zn(e),
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
      wt(11);
    },
    getPrototypeOf(e) {
      return Wr(e.base_);
    },
    setPrototypeOf() {
      wt(12);
    },
  },
  Js = {};
$l(Uc, (e, t) => {
  Js[e] = function () {
    return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
  };
});
Js.deleteProperty = function (e, t) {
  return Js.set.call(this, e, t, void 0);
};
Js.set = function (e, t, n) {
  return Uc.set.call(this, e[0], t, n, e[0]);
};
function oa(e, t) {
  const n = e[nt];
  return (n ? zn(n) : e)[t];
}
function pS(e, t, n) {
  var s;
  const r = zg(t, n);
  return r
    ? "value" in r
      ? r.value
      : (s = r.get) == null
      ? void 0
      : s.call(e.draft_)
    : void 0;
}
function zg(e, t) {
  if (!(t in e)) return;
  let n = Wr(e);
  for (; n; ) {
    const r = Object.getOwnPropertyDescriptor(n, t);
    if (r) return r;
    n = Wr(n);
  }
}
function vu(e) {
  e.modified_ || ((e.modified_ = !0), e.parent_ && vu(e.parent_));
}
function la(e) {
  e.copy_ || (e.copy_ = gu(e.base_, e.scope_.immer_.useStrictShallowCopy_));
}
var hS = class {
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
        typeof n != "function" && wt(6),
          r !== void 0 && typeof r != "function" && wt(7);
        let s;
        if (Zt(t)) {
          const o = Ff(this),
            i = ju(t, void 0);
          let a = !0;
          try {
            (s = n(i)), (a = !1);
          } finally {
            a ? yu(o) : xu(o);
          }
          return Af(o, r), Mf(s, o);
        } else if (!t || typeof t != "object") {
          if (
            ((s = n(t)),
            s === void 0 && (s = t),
            s === Fg && (s = void 0),
            this.autoFreeze_ && bc(s, !0),
            r)
          ) {
            const o = [],
              i = [];
            tr("Patches").generateReplacementPatches_(t, s, o, i), r(o, i);
          }
          return s;
        } else wt(1, t);
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
    Zt(e) || wt(8), er(e) && (e = mS(e));
    const t = Ff(this),
      n = ju(e, void 0);
    return (n[nt].isManual_ = !0), xu(t), n;
  }
  finishDraft(e, t) {
    const n = e && e[nt];
    (!n || !n.isManual_) && wt(9);
    const { scope_: r } = n;
    return Af(r, t), Mf(void 0, r);
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
    const r = tr("Patches").applyPatches_;
    return er(e) ? r(e, t) : this.produce(e, (s) => r(s, t));
  }
};
function ju(e, t) {
  const n = gi(e)
    ? tr("MapSet").proxyMap_(e, t)
    : yi(e)
    ? tr("MapSet").proxySet_(e, t)
    : fS(e, t);
  return (t ? t.scope_ : Ug()).drafts_.push(n), n;
}
function mS(e) {
  return er(e) || wt(10, e), Bg(e);
}
function Bg(e) {
  if (!Zt(e) || xi(e)) return e;
  const t = e[nt];
  let n;
  if (t) {
    if (!t.modified_) return t.base_;
    (t.finalized_ = !0), (n = gu(e, t.scope_.immer_.useStrictShallowCopy_));
  } else n = gu(e, !0);
  return (
    $l(n, (r, s) => {
      bg(n, r, Bg(s));
    }),
    t && (t.finalized_ = !1),
    n
  );
}
var rt = new hS(),
  Wg = rt.produce;
rt.produceWithPatches.bind(rt);
rt.setAutoFreeze.bind(rt);
rt.setUseStrictShallowCopy.bind(rt);
rt.applyPatches.bind(rt);
rt.createDraft.bind(rt);
rt.finishDraft.bind(rt);
function Hg(e) {
  return ({ dispatch: n, getState: r }) =>
    (s) =>
    (o) =>
      typeof o == "function" ? o(n, r, e) : s(o);
}
var gS = Hg(),
  yS = Hg,
  xS =
    typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (arguments.length !== 0)
            return typeof arguments[0] == "object"
              ? Ll
              : Ll.apply(null, arguments);
        };
function Uf(e, t) {
  function n(...r) {
    if (t) {
      let s = t(...r);
      if (!s) throw new Error(Et(0));
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
    (n.match = (r) => oS(r) && r.type === e),
    n
  );
}
var Vg = class xs extends Array {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, xs.prototype);
  }
  static get [Symbol.species]() {
    return xs;
  }
  concat(...t) {
    return super.concat.apply(this, t);
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0])
      ? new xs(...t[0].concat(this))
      : new xs(...t.concat(this));
  }
};
function zf(e) {
  return Zt(e) ? Wg(e, () => {}) : e;
}
function Bf(e, t, n) {
  if (e.has(t)) {
    let s = e.get(t);
    return n.update && ((s = n.update(s, t, e)), e.set(t, s)), s;
  }
  if (!n.insert) throw new Error(Et(10));
  const r = n.insert(t, e);
  return e.set(t, r), r;
}
function vS(e) {
  return typeof e == "boolean";
}
var jS = () =>
    function (t) {
      const {
        thunk: n = !0,
        immutableCheck: r = !0,
        serializableCheck: s = !0,
        actionCreatorCheck: o = !0,
      } = t ?? {};
      let i = new Vg();
      return n && (vS(n) ? i.push(gS) : i.push(yS(n.extraArgument))), i;
    },
  wS = "RTK_autoBatch",
  Kg = (e) => (t) => {
    setTimeout(t, e);
  },
  SS =
    typeof window < "u" && window.requestAnimationFrame
      ? window.requestAnimationFrame
      : Kg(10),
  NS =
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
            ? SS
            : e.type === "callback"
            ? e.queueNotification
            : Kg(e.timeout),
        c = () => {
          (i = !1), o && ((o = !1), a.forEach((d) => d()));
        };
      return Object.assign({}, r, {
        subscribe(d) {
          const f = () => s && d(),
            h = r.subscribe(f);
          return (
            a.add(d),
            () => {
              h(), a.delete(d);
            }
          );
        },
        dispatch(d) {
          var f;
          try {
            return (
              (s = !((f = d == null ? void 0 : d.meta) != null && f[wS])),
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
  ES = (e) =>
    function (n) {
      const { autoBatch: r = !0 } = n ?? {};
      let s = new Vg(e);
      return r && s.push(NS(typeof r == "object" ? r : void 0)), s;
    };
function CS(e) {
  const t = jS(),
    {
      reducer: n = void 0,
      middleware: r,
      devTools: s = !0,
      preloadedState: o = void 0,
      enhancers: i = void 0,
    } = e || {};
  let a;
  if (typeof n == "function") a = n;
  else if (Mc(n)) a = rS(n);
  else throw new Error(Et(1));
  let u;
  typeof r == "function" ? (u = r(t)) : (u = t());
  let c = Ll;
  s && (c = xS({ trace: !1, ...(typeof s == "object" && s) }));
  const d = sS(...u),
    f = ES(d);
  let h = typeof i == "function" ? i(f) : f();
  const v = c(...h);
  return Ag(a, o, v);
}
function Gg(e) {
  const t = {},
    n = [];
  let r;
  const s = {
    addCase(o, i) {
      const a = typeof o == "string" ? o : o.type;
      if (!a) throw new Error(Et(28));
      if (a in t) throw new Error(Et(29));
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
function kS(e) {
  return typeof e == "function";
}
function _S(e, t) {
  let [n, r, s] = Gg(t),
    o;
  if (kS(e)) o = () => zf(e());
  else {
    const a = zf(e);
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
          if (er(d)) {
            const v = f(d, u);
            return v === void 0 ? d : v;
          } else {
            if (Zt(d)) return Wg(d, (h) => f(h, u));
            {
              const h = f(d, u);
              if (h === void 0) {
                if (d === null) return d;
                throw new Error(Et(9));
              }
              return h;
            }
          }
        return d;
      }, a)
    );
  }
  return (i.getInitialState = o), i;
}
var RS = Symbol.for("rtk-slice-createasyncthunk");
function PS(e, t) {
  return `${e}/${t}`;
}
function OS({ creators: e } = {}) {
  var n;
  const t = (n = e == null ? void 0 : e.asyncThunk) == null ? void 0 : n[RS];
  return function (s) {
    const { name: o, reducerPath: i = o } = s;
    if (!o) throw new Error(Et(11));
    typeof process < "u";
    const a =
        (typeof s.reducers == "function" ? s.reducers(IS()) : s.reducers) || {},
      u = Object.keys(a),
      c = {
        sliceCaseReducersByName: {},
        sliceCaseReducersByType: {},
        actionCreators: {},
        sliceMatchers: [],
      },
      d = {
        addCase(g, w) {
          const k = typeof g == "string" ? g : g.type;
          if (!k) throw new Error(Et(12));
          if (k in c.sliceCaseReducersByType) throw new Error(Et(13));
          return (c.sliceCaseReducersByType[k] = w), d;
        },
        addMatcher(g, w) {
          return c.sliceMatchers.push({ matcher: g, reducer: w }), d;
        },
        exposeAction(g, w) {
          return (c.actionCreators[g] = w), d;
        },
        exposeCaseReducer(g, w) {
          return (c.sliceCaseReducersByName[g] = w), d;
        },
      };
    u.forEach((g) => {
      const w = a[g],
        k = {
          reducerName: g,
          type: PS(o, g),
          createNotation: typeof s.reducers == "function",
        };
      $S(w) ? AS(k, w, d, t) : LS(k, w, d);
    });
    function f() {
      const [g = {}, w = [], k = void 0] =
          typeof s.extraReducers == "function"
            ? Gg(s.extraReducers)
            : [s.extraReducers],
        _ = { ...g, ...c.sliceCaseReducersByType };
      return _S(s.initialState, (R) => {
        for (let T in _) R.addCase(T, _[T]);
        for (let T of c.sliceMatchers) R.addMatcher(T.matcher, T.reducer);
        for (let T of w) R.addMatcher(T.matcher, T.reducer);
        k && R.addDefaultCase(k);
      });
    }
    const h = (g) => g,
      v = new Map();
    let m;
    function S(g, w) {
      return m || (m = f()), m(g, w);
    }
    function j() {
      return m || (m = f()), m.getInitialState();
    }
    function x(g, w = !1) {
      function k(R) {
        let T = R[g];
        return typeof T > "u" && w && (T = j()), T;
      }
      function _(R = h) {
        const T = Bf(v, w, { insert: () => new WeakMap() });
        return Bf(T, R, {
          insert: () => {
            const H = {};
            for (const [D, fe] of Object.entries(s.selectors ?? {}))
              H[D] = TS(fe, R, j, w);
            return H;
          },
        });
      }
      return {
        reducerPath: g,
        getSelectors: _,
        get selectors() {
          return _(k);
        },
        selectSlice: k,
      };
    }
    const y = {
      name: o,
      reducer: S,
      actions: c.actionCreators,
      caseReducers: c.sliceCaseReducersByName,
      getInitialState: j,
      ...x(i),
      injectInto(g, { reducerPath: w, ...k } = {}) {
        const _ = w ?? i;
        return (
          g.inject({ reducerPath: _, reducer: S }, k), { ...y, ...x(_, !0) }
        );
      },
    };
    return y;
  };
}
function TS(e, t, n, r) {
  function s(o, ...i) {
    let a = t(o);
    return typeof a > "u" && r && (a = n()), e(a, ...i);
  }
  return (s.unwrapped = e), s;
}
var lr = OS();
function IS() {
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
function LS({ type: e, reducerName: t, createNotation: n }, r, s) {
  let o, i;
  if ("reducer" in r) {
    if (n && !DS(r)) throw new Error(Et(17));
    (o = r.reducer), (i = r.prepare);
  } else o = r;
  s.addCase(e, o)
    .exposeCaseReducer(t, o)
    .exposeAction(t, i ? Uf(e, i) : Uf(e));
}
function $S(e) {
  return e._reducerDefinitionType === "asyncThunk";
}
function DS(e) {
  return e._reducerDefinitionType === "reducerWithPrepare";
}
function AS({ type: e, reducerName: t }, n, r, s) {
  if (!s) throw new Error(Et(18));
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
      fulfilled: i || Fo,
      pending: a || Fo,
      rejected: u || Fo,
      settled: c || Fo,
    });
}
function Fo() {}
function Et(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
const Qg = lr({
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
    Initial: nr,
    Loading: qr,
    ListProduct: Jg,
    GetProduct: FS,
    Delete: MS,
    Success: zc,
    Error: ir,
  } = Qg.actions,
  bS = Qg.reducer;
function Xg(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: US } = Object.prototype,
  { getPrototypeOf: Bc } = Object,
  vi = ((e) => (t) => {
    const n = US.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  _t = (e) => ((e = e.toLowerCase()), (t) => vi(t) === e),
  ji = (e) => (t) => typeof t === e,
  { isArray: Yr } = Array,
  Xs = ji("undefined");
function zS(e) {
  return (
    e !== null &&
    !Xs(e) &&
    e.constructor !== null &&
    !Xs(e.constructor) &&
    et(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const qg = _t("ArrayBuffer");
function BS(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && qg(e.buffer)),
    t
  );
}
const WS = ji("string"),
  et = ji("function"),
  Yg = ji("number"),
  wi = (e) => e !== null && typeof e == "object",
  HS = (e) => e === !0 || e === !1,
  Xo = (e) => {
    if (vi(e) !== "object") return !1;
    const t = Bc(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  VS = _t("Date"),
  KS = _t("File"),
  GS = _t("Blob"),
  QS = _t("FileList"),
  JS = (e) => wi(e) && et(e.pipe),
  XS = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (et(e.append) &&
          ((t = vi(e)) === "formdata" ||
            (t === "object" &&
              et(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  qS = _t("URLSearchParams"),
  [YS, ZS, eN, tN] = ["ReadableStream", "Request", "Response", "Headers"].map(
    _t
  ),
  nN = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function ao(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let r, s;
  if ((typeof e != "object" && (e = [e]), Yr(e)))
    for (r = 0, s = e.length; r < s; r++) t.call(null, e[r], r, e);
  else {
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      i = o.length;
    let a;
    for (r = 0; r < i; r++) (a = o[r]), t.call(null, e[a], a, e);
  }
}
function Zg(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    s;
  for (; r-- > 0; ) if (((s = n[r]), t === s.toLowerCase())) return s;
  return null;
}
const Vn =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global,
  ey = (e) => !Xs(e) && e !== Vn;
function wu() {
  const { caseless: e } = (ey(this) && this) || {},
    t = {},
    n = (r, s) => {
      const o = (e && Zg(t, s)) || s;
      Xo(t[o]) && Xo(r)
        ? (t[o] = wu(t[o], r))
        : Xo(r)
        ? (t[o] = wu({}, r))
        : Yr(r)
        ? (t[o] = r.slice())
        : (t[o] = r);
    };
  for (let r = 0, s = arguments.length; r < s; r++)
    arguments[r] && ao(arguments[r], n);
  return t;
}
const rN = (e, t, n, { allOwnKeys: r } = {}) => (
    ao(
      t,
      (s, o) => {
        n && et(s) ? (e[o] = Xg(s, n)) : (e[o] = s);
      },
      { allOwnKeys: r }
    ),
    e
  ),
  sN = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  oN = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  lN = (e, t, n, r) => {
    let s, o, i;
    const a = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (s = Object.getOwnPropertyNames(e), o = s.length; o-- > 0; )
        (i = s[o]), (!r || r(i, e, t)) && !a[i] && ((t[i] = e[i]), (a[i] = !0));
      e = n !== !1 && Bc(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  iN = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  aN = (e) => {
    if (!e) return null;
    if (Yr(e)) return e;
    let t = e.length;
    if (!Yg(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  uN = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && Bc(Uint8Array)),
  cN = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let s;
    for (; (s = r.next()) && !s.done; ) {
      const o = s.value;
      t.call(e, o[0], o[1]);
    }
  },
  dN = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  fN = _t("HTMLFormElement"),
  pN = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, s) {
      return r.toUpperCase() + s;
    }),
  Wf = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  hN = _t("RegExp"),
  ty = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    ao(n, (s, o) => {
      let i;
      (i = t(s, o, e)) !== !1 && (r[o] = i || s);
    }),
      Object.defineProperties(e, r);
  },
  mN = (e) => {
    ty(e, (t, n) => {
      if (et(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (et(r)) {
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
  gN = (e, t) => {
    const n = {},
      r = (s) => {
        s.forEach((o) => {
          n[o] = !0;
        });
      };
    return Yr(e) ? r(e) : r(String(e).split(t)), n;
  },
  yN = () => {},
  xN = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t),
  ia = "abcdefghijklmnopqrstuvwxyz",
  Hf = "0123456789",
  ny = { DIGIT: Hf, ALPHA: ia, ALPHA_DIGIT: ia + ia.toUpperCase() + Hf },
  vN = (e = 16, t = ny.ALPHA_DIGIT) => {
    let n = "";
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function jN(e) {
  return !!(
    e &&
    et(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const wN = (e) => {
    const t = new Array(10),
      n = (r, s) => {
        if (wi(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            t[s] = r;
            const o = Yr(r) ? [] : {};
            return (
              ao(r, (i, a) => {
                const u = n(i, s + 1);
                !Xs(u) && (o[a] = u);
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
  SN = _t("AsyncFunction"),
  NN = (e) => e && (wi(e) || et(e)) && et(e.then) && et(e.catch),
  ry = ((e, t) =>
    e
      ? setImmediate
      : t
      ? ((n, r) => (
          Vn.addEventListener(
            "message",
            ({ source: s, data: o }) => {
              s === Vn && o === n && r.length && r.shift()();
            },
            !1
          ),
          (s) => {
            r.push(s), Vn.postMessage(n, "*");
          }
        ))(`axios@${Math.random()}`, [])
      : (n) => setTimeout(n))(
    typeof setImmediate == "function",
    et(Vn.postMessage)
  ),
  EN =
    typeof queueMicrotask < "u"
      ? queueMicrotask.bind(Vn)
      : (typeof process < "u" && process.nextTick) || ry,
  E = {
    isArray: Yr,
    isArrayBuffer: qg,
    isBuffer: zS,
    isFormData: XS,
    isArrayBufferView: BS,
    isString: WS,
    isNumber: Yg,
    isBoolean: HS,
    isObject: wi,
    isPlainObject: Xo,
    isReadableStream: YS,
    isRequest: ZS,
    isResponse: eN,
    isHeaders: tN,
    isUndefined: Xs,
    isDate: VS,
    isFile: KS,
    isBlob: GS,
    isRegExp: hN,
    isFunction: et,
    isStream: JS,
    isURLSearchParams: qS,
    isTypedArray: uN,
    isFileList: QS,
    forEach: ao,
    merge: wu,
    extend: rN,
    trim: nN,
    stripBOM: sN,
    inherits: oN,
    toFlatObject: lN,
    kindOf: vi,
    kindOfTest: _t,
    endsWith: iN,
    toArray: aN,
    forEachEntry: cN,
    matchAll: dN,
    isHTMLForm: fN,
    hasOwnProperty: Wf,
    hasOwnProp: Wf,
    reduceDescriptors: ty,
    freezeMethods: mN,
    toObjectSet: gN,
    toCamelCase: pN,
    noop: yN,
    toFiniteNumber: xN,
    findKey: Zg,
    global: Vn,
    isContextDefined: ey,
    ALPHABET: ny,
    generateString: vN,
    isSpecCompliantForm: jN,
    toJSONObject: wN,
    isAsyncFn: SN,
    isThenable: NN,
    setImmediate: ry,
    asap: EN,
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
E.inherits(U, Error, {
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
const sy = U.prototype,
  oy = {};
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
  oy[e] = { value: e };
});
Object.defineProperties(U, oy);
Object.defineProperty(sy, "isAxiosError", { value: !0 });
U.from = (e, t, n, r, s, o) => {
  const i = Object.create(sy);
  return (
    E.toFlatObject(
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
const CN = null;
function Su(e) {
  return E.isPlainObject(e) || E.isArray(e);
}
function ly(e) {
  return E.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Vf(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (s, o) {
          return (s = ly(s)), !n && o ? "[" + s + "]" : s;
        })
        .join(n ? "." : "")
    : t;
}
function kN(e) {
  return E.isArray(e) && !e.some(Su);
}
const _N = E.toFlatObject(E, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function Si(e, t, n) {
  if (!E.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (n = E.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (S, j) {
        return !E.isUndefined(j[S]);
      }
    ));
  const r = n.metaTokens,
    s = n.visitor || d,
    o = n.dots,
    i = n.indexes,
    u = (n.Blob || (typeof Blob < "u" && Blob)) && E.isSpecCompliantForm(t);
  if (!E.isFunction(s)) throw new TypeError("visitor must be a function");
  function c(m) {
    if (m === null) return "";
    if (E.isDate(m)) return m.toISOString();
    if (!u && E.isBlob(m))
      throw new U("Blob is not supported. Use a Buffer instead.");
    return E.isArrayBuffer(m) || E.isTypedArray(m)
      ? u && typeof Blob == "function"
        ? new Blob([m])
        : Buffer.from(m)
      : m;
  }
  function d(m, S, j) {
    let x = m;
    if (m && !j && typeof m == "object") {
      if (E.endsWith(S, "{}"))
        (S = r ? S : S.slice(0, -2)), (m = JSON.stringify(m));
      else if (
        (E.isArray(m) && kN(m)) ||
        ((E.isFileList(m) || E.endsWith(S, "[]")) && (x = E.toArray(m)))
      )
        return (
          (S = ly(S)),
          x.forEach(function (g, w) {
            !(E.isUndefined(g) || g === null) &&
              t.append(
                i === !0 ? Vf([S], w, o) : i === null ? S : S + "[]",
                c(g)
              );
          }),
          !1
        );
    }
    return Su(m) ? !0 : (t.append(Vf(j, S, o), c(m)), !1);
  }
  const f = [],
    h = Object.assign(_N, {
      defaultVisitor: d,
      convertValue: c,
      isVisitable: Su,
    });
  function v(m, S) {
    if (!E.isUndefined(m)) {
      if (f.indexOf(m) !== -1)
        throw Error("Circular reference detected in " + S.join("."));
      f.push(m),
        E.forEach(m, function (x, y) {
          (!(E.isUndefined(x) || x === null) &&
            s.call(t, x, E.isString(y) ? y.trim() : y, S, h)) === !0 &&
            v(x, S ? S.concat(y) : [y]);
        }),
        f.pop();
    }
  }
  if (!E.isObject(e)) throw new TypeError("data must be an object");
  return v(e), t;
}
function Kf(e) {
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
function Wc(e, t) {
  (this._pairs = []), e && Si(e, this, t);
}
const iy = Wc.prototype;
iy.append = function (t, n) {
  this._pairs.push([t, n]);
};
iy.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, Kf);
      }
    : Kf;
  return this._pairs
    .map(function (s) {
      return n(s[0]) + "=" + n(s[1]);
    }, "")
    .join("&");
};
function RN(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function ay(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || RN,
    s = n && n.serialize;
  let o;
  if (
    (s
      ? (o = s(t, n))
      : (o = E.isURLSearchParams(t) ? t.toString() : new Wc(t, n).toString(r)),
    o)
  ) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + o);
  }
  return e;
}
class Gf {
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
const uy = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  PN = typeof URLSearchParams < "u" ? URLSearchParams : Wc,
  ON = typeof FormData < "u" ? FormData : null,
  TN = typeof Blob < "u" ? Blob : null,
  IN = {
    isBrowser: !0,
    classes: { URLSearchParams: PN, FormData: ON, Blob: TN },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  Hc = typeof window < "u" && typeof document < "u",
  LN = ((e) => Hc && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(
    typeof navigator < "u" && navigator.product
  ),
  $N =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  DN = (Hc && window.location.href) || "http://localhost",
  AN = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: Hc,
        hasStandardBrowserEnv: LN,
        hasStandardBrowserWebWorkerEnv: $N,
        origin: DN,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Ct = { ...AN, ...IN };
function FN(e, t) {
  return Si(
    e,
    new Ct.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, s, o) {
          return Ct.isNode && E.isBuffer(n)
            ? (this.append(r, n.toString("base64")), !1)
            : o.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function MN(e) {
  return E.matchAll(/\w+|\[(\w*)]/g, e).map((t) =>
    t[0] === "[]" ? "" : t[1] || t[0]
  );
}
function bN(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const s = n.length;
  let o;
  for (r = 0; r < s; r++) (o = n[r]), (t[o] = e[o]);
  return t;
}
function cy(e) {
  function t(n, r, s, o) {
    let i = n[o++];
    if (i === "__proto__") return !0;
    const a = Number.isFinite(+i),
      u = o >= n.length;
    return (
      (i = !i && E.isArray(s) ? s.length : i),
      u
        ? (E.hasOwnProp(s, i) ? (s[i] = [s[i], r]) : (s[i] = r), !a)
        : ((!s[i] || !E.isObject(s[i])) && (s[i] = []),
          t(n, r, s[i], o) && E.isArray(s[i]) && (s[i] = bN(s[i])),
          !a)
    );
  }
  if (E.isFormData(e) && E.isFunction(e.entries)) {
    const n = {};
    return (
      E.forEachEntry(e, (r, s) => {
        t(MN(r), s, n, 0);
      }),
      n
    );
  }
  return null;
}
function UN(e, t, n) {
  if (E.isString(e))
    try {
      return (t || JSON.parse)(e), E.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (n || JSON.stringify)(e);
}
const uo = {
  transitional: uy,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        s = r.indexOf("application/json") > -1,
        o = E.isObject(t);
      if ((o && E.isHTMLForm(t) && (t = new FormData(t)), E.isFormData(t)))
        return s ? JSON.stringify(cy(t)) : t;
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
          return FN(t, this.formSerializer).toString();
        if ((a = E.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const u = this.env && this.env.FormData;
          return Si(
            a ? { "files[]": t } : t,
            u && new u(),
            this.formSerializer
          );
        }
      }
      return o || s ? (n.setContentType("application/json", !1), UN(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || uo.transitional,
        r = n && n.forcedJSONParsing,
        s = this.responseType === "json";
      if (E.isResponse(t) || E.isReadableStream(t)) return t;
      if (t && E.isString(t) && ((r && !this.responseType) || s)) {
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
  env: { FormData: Ct.classes.FormData, Blob: Ct.classes.Blob },
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
  uo.headers[e] = {};
});
const zN = E.toObjectSet([
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
  BN = (e) => {
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
              !(!n || (t[n] && zN[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ", " + r : r));
          }),
      t
    );
  },
  Qf = Symbol("internals");
function fs(e) {
  return e && String(e).trim().toLowerCase();
}
function qo(e) {
  return e === !1 || e == null ? e : E.isArray(e) ? e.map(qo) : String(e);
}
function WN(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const HN = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function aa(e, t, n, r, s) {
  if (E.isFunction(r)) return r.call(this, t, n);
  if ((s && (t = n), !!E.isString(t))) {
    if (E.isString(r)) return t.indexOf(r) !== -1;
    if (E.isRegExp(r)) return r.test(t);
  }
}
function VN(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function KN(e, t) {
  const n = E.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (s, o, i) {
        return this[r].call(this, t, s, o, i);
      },
      configurable: !0,
    });
  });
}
class Qe {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function o(a, u, c) {
      const d = fs(u);
      if (!d) throw new Error("header name must be a non-empty string");
      const f = E.findKey(s, d);
      (!f || s[f] === void 0 || c === !0 || (c === void 0 && s[f] !== !1)) &&
        (s[f || u] = qo(a));
    }
    const i = (a, u) => E.forEach(a, (c, d) => o(c, d, u));
    if (E.isPlainObject(t) || t instanceof this.constructor) i(t, n);
    else if (E.isString(t) && (t = t.trim()) && !HN(t)) i(BN(t), n);
    else if (E.isHeaders(t)) for (const [a, u] of t.entries()) o(u, a, r);
    else t != null && o(n, t, r);
    return this;
  }
  get(t, n) {
    if (((t = fs(t)), t)) {
      const r = E.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n) return s;
        if (n === !0) return WN(s);
        if (E.isFunction(n)) return n.call(this, s, r);
        if (E.isRegExp(n)) return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = fs(t)), t)) {
      const r = E.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || aa(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function o(i) {
      if (((i = fs(i)), i)) {
        const a = E.findKey(r, i);
        a && (!n || aa(r, r[a], a, n)) && (delete r[a], (s = !0));
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
      (!t || aa(this, this[o], o, t, !0)) && (delete this[o], (s = !0));
    }
    return s;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      E.forEach(this, (s, o) => {
        const i = E.findKey(r, o);
        if (i) {
          (n[i] = qo(s)), delete n[o];
          return;
        }
        const a = t ? VN(o) : String(o).trim();
        a !== o && delete n[o], (n[a] = qo(s)), (r[a] = !0);
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
    const r = (this[Qf] = this[Qf] = { accessors: {} }).accessors,
      s = this.prototype;
    function o(i) {
      const a = fs(i);
      r[a] || (KN(s, i), (r[a] = !0));
    }
    return E.isArray(t) ? t.forEach(o) : o(t), this;
  }
}
Qe.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
E.reduceDescriptors(Qe.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
E.freezeMethods(Qe);
function ua(e, t) {
  const n = this || uo,
    r = t || n,
    s = Qe.from(r.headers);
  let o = r.data;
  return (
    E.forEach(e, function (a) {
      o = a.call(n, o, s.normalize(), t ? t.status : void 0);
    }),
    s.normalize(),
    o
  );
}
function dy(e) {
  return !!(e && e.__CANCEL__);
}
function Zr(e, t, n) {
  U.call(this, e ?? "canceled", U.ERR_CANCELED, t, n),
    (this.name = "CanceledError");
}
E.inherits(Zr, U, { __CANCEL__: !0 });
function fy(e, t, n) {
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
function GN(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function QN(e, t) {
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
        h = 0;
      for (; f !== s; ) (h += n[f++]), (f = f % e);
      if (((s = (s + 1) % e), s === o && (o = (o + 1) % e), c - i < t)) return;
      const v = d && c - d;
      return v ? Math.round((h * 1e3) / v) : void 0;
    }
  );
}
function JN(e, t) {
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
const Fl = (e, t, n = 3) => {
    let r = 0;
    const s = QN(50, 250);
    return JN((o) => {
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
  Jf = (e, t) => {
    const n = e != null;
    return [(r) => t[0]({ lengthComputable: n, total: e, loaded: r }), t[1]];
  },
  Xf =
    (e) =>
    (...t) =>
      E.asap(() => e(...t)),
  XN = Ct.hasStandardBrowserEnv
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
            const a = E.isString(i) ? s(i) : i;
            return a.protocol === r.protocol && a.host === r.host;
          }
        );
      })()
    : (function () {
        return function () {
          return !0;
        };
      })(),
  qN = Ct.hasStandardBrowserEnv
    ? {
        write(e, t, n, r, s, o) {
          const i = [e + "=" + encodeURIComponent(t)];
          E.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()),
            E.isString(r) && i.push("path=" + r),
            E.isString(s) && i.push("domain=" + s),
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
function YN(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function ZN(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function py(e, t) {
  return e && !YN(t) ? ZN(e, t) : t;
}
const qf = (e) => (e instanceof Qe ? { ...e } : e);
function rr(e, t) {
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
  function i(c, d) {
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
    headers: (c, d) => s(qf(c), qf(d), !0),
  };
  return (
    E.forEach(Object.keys(Object.assign({}, e, t)), function (d) {
      const f = u[d] || s,
        h = f(e[d], t[d], d);
      (E.isUndefined(h) && f !== a) || (n[d] = h);
    }),
    n
  );
}
const hy = (e) => {
    const t = rr({}, e);
    let {
      data: n,
      withXSRFToken: r,
      xsrfHeaderName: s,
      xsrfCookieName: o,
      headers: i,
      auth: a,
    } = t;
    (t.headers = i = Qe.from(i)),
      (t.url = ay(py(t.baseURL, t.url), e.params, e.paramsSerializer)),
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
    if (E.isFormData(n)) {
      if (Ct.hasStandardBrowserEnv || Ct.hasStandardBrowserWebWorkerEnv)
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
      Ct.hasStandardBrowserEnv &&
      (r && E.isFunction(r) && (r = r(t)), r || (r !== !1 && XN(t.url)))
    ) {
      const c = s && o && qN.read(o);
      c && i.set(s, c);
    }
    return t;
  },
  eE = typeof XMLHttpRequest < "u",
  tE =
    eE &&
    function (e) {
      return new Promise(function (n, r) {
        const s = hy(e);
        let o = s.data;
        const i = Qe.from(s.headers).normalize();
        let { responseType: a, onUploadProgress: u, onDownloadProgress: c } = s,
          d,
          f,
          h,
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
          const g = Qe.from(
              "getAllResponseHeaders" in j && j.getAllResponseHeaders()
            ),
            k = {
              data:
                !a || a === "text" || a === "json"
                  ? j.responseText
                  : j.response,
              status: j.status,
              statusText: j.statusText,
              headers: g,
              config: e,
              request: j,
            };
          fy(
            function (R) {
              n(R), S();
            },
            function (R) {
              r(R), S();
            },
            k
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
            const k = s.transitional || uy;
            s.timeoutErrorMessage && (w = s.timeoutErrorMessage),
              r(
                new U(
                  w,
                  k.clarifyTimeoutError ? U.ETIMEDOUT : U.ECONNABORTED,
                  e,
                  j
                )
              ),
              (j = null);
          }),
          o === void 0 && i.setContentType(null),
          "setRequestHeader" in j &&
            E.forEach(i.toJSON(), function (w, k) {
              j.setRequestHeader(k, w);
            }),
          E.isUndefined(s.withCredentials) ||
            (j.withCredentials = !!s.withCredentials),
          a && a !== "json" && (j.responseType = s.responseType),
          c && (([h, m] = Fl(c, !0)), j.addEventListener("progress", h)),
          u &&
            j.upload &&
            (([f, v] = Fl(u)),
            j.upload.addEventListener("progress", f),
            j.upload.addEventListener("loadend", v)),
          (s.cancelToken || s.signal) &&
            ((d = (g) => {
              j &&
                (r(!g || g.type ? new Zr(null, e, j) : g),
                j.abort(),
                (j = null));
            }),
            s.cancelToken && s.cancelToken.subscribe(d),
            s.signal &&
              (s.signal.aborted ? d() : s.signal.addEventListener("abort", d)));
        const y = GN(s.url);
        if (y && Ct.protocols.indexOf(y) === -1) {
          r(new U("Unsupported protocol " + y + ":", U.ERR_BAD_REQUEST, e));
          return;
        }
        j.send(o || null);
      });
    },
  nE = (e, t) => {
    let n = new AbortController(),
      r;
    const s = function (u) {
      if (!r) {
        (r = !0), i();
        const c = u instanceof Error ? u : this.reason;
        n.abort(
          c instanceof U ? c : new Zr(c instanceof Error ? c.message : c)
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
  rE = function* (e, t) {
    let n = e.byteLength;
    if (!t || n < t) {
      yield e;
      return;
    }
    let r = 0,
      s;
    for (; r < n; ) (s = r + t), yield e.slice(r, s), (r = s);
  },
  sE = async function* (e, t, n) {
    for await (const r of e)
      yield* rE(ArrayBuffer.isView(r) ? r : await n(String(r)), t);
  },
  Yf = (e, t, n, r, s) => {
    const o = sE(e, t, s);
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
            let h = f.byteLength;
            if (n) {
              let v = (i += h);
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
  Ni =
    typeof fetch == "function" &&
    typeof Request == "function" &&
    typeof Response == "function",
  my = Ni && typeof ReadableStream == "function",
  Nu =
    Ni &&
    (typeof TextEncoder == "function"
      ? (
          (e) => (t) =>
            e.encode(t)
        )(new TextEncoder())
      : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
  gy = (e, ...t) => {
    try {
      return !!e(...t);
    } catch {
      return !1;
    }
  },
  oE =
    my &&
    gy(() => {
      let e = !1;
      const t = new Request(Ct.origin, {
        body: new ReadableStream(),
        method: "POST",
        get duplex() {
          return (e = !0), "half";
        },
      }).headers.has("Content-Type");
      return e && !t;
    }),
  Zf = 64 * 1024,
  Eu = my && gy(() => E.isReadableStream(new Response("").body)),
  Ml = { stream: Eu && ((e) => e.body) };
Ni &&
  ((e) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
      !Ml[t] &&
        (Ml[t] = E.isFunction(e[t])
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
const lE = async (e) => {
    if (e == null) return 0;
    if (E.isBlob(e)) return e.size;
    if (E.isSpecCompliantForm(e))
      return (await new Request(e).arrayBuffer()).byteLength;
    if (E.isArrayBufferView(e) || E.isArrayBuffer(e)) return e.byteLength;
    if ((E.isURLSearchParams(e) && (e = e + ""), E.isString(e)))
      return (await Nu(e)).byteLength;
  },
  iE = async (e, t) => {
    const n = E.toFiniteNumber(e.getContentLength());
    return n ?? lE(t);
  },
  aE =
    Ni &&
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
        fetchOptions: h,
      } = hy(e);
      c = c ? (c + "").toLowerCase() : "text";
      let [v, m] = s || o || i ? nE([s, o], i) : [],
        S,
        j;
      const x = () => {
        !S &&
          setTimeout(() => {
            v && v.unsubscribe();
          }),
          (S = !0);
      };
      let y;
      try {
        if (
          u &&
          oE &&
          n !== "get" &&
          n !== "head" &&
          (y = await iE(d, r)) !== 0
        ) {
          let _ = new Request(t, { method: "POST", body: r, duplex: "half" }),
            R;
          if (
            (E.isFormData(r) &&
              (R = _.headers.get("content-type")) &&
              d.setContentType(R),
            _.body)
          ) {
            const [T, H] = Jf(y, Fl(Xf(u)));
            r = Yf(_.body, Zf, T, H, Nu);
          }
        }
        E.isString(f) || (f = f ? "include" : "omit"),
          (j = new Request(t, {
            ...h,
            signal: v,
            method: n.toUpperCase(),
            headers: d.normalize().toJSON(),
            body: r,
            duplex: "half",
            credentials: f,
          }));
        let g = await fetch(j);
        const w = Eu && (c === "stream" || c === "response");
        if (Eu && (a || w)) {
          const _ = {};
          ["status", "statusText", "headers"].forEach((D) => {
            _[D] = g[D];
          });
          const R = E.toFiniteNumber(g.headers.get("content-length")),
            [T, H] = (a && Jf(R, Fl(Xf(a), !0))) || [];
          g = new Response(
            Yf(
              g.body,
              Zf,
              T,
              () => {
                H && H(), w && x();
              },
              Nu
            ),
            _
          );
        }
        c = c || "text";
        let k = await Ml[E.findKey(Ml, c) || "text"](g, e);
        return (
          !w && x(),
          m && m(),
          await new Promise((_, R) => {
            fy(_, R, {
              data: k,
              headers: Qe.from(g.headers),
              status: g.status,
              statusText: g.statusText,
              config: e,
              request: j,
            });
          })
        );
      } catch (g) {
        throw (
          (x(),
          g && g.name === "TypeError" && /fetch/i.test(g.message)
            ? Object.assign(new U("Network Error", U.ERR_NETWORK, e, j), {
                cause: g.cause || g,
              })
            : U.from(g, g && g.code, e, j))
        );
      }
    }),
  Cu = { http: CN, xhr: tE, fetch: aE };
E.forEach(Cu, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const ep = (e) => `- ${e}`,
  uE = (e) => E.isFunction(e) || e === null || e === !1,
  yy = {
    getAdapter: (e) => {
      e = E.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      const s = {};
      for (let o = 0; o < t; o++) {
        n = e[o];
        let i;
        if (
          ((r = n),
          !uE(n) && ((r = Cu[(i = String(n)).toLowerCase()]), r === void 0))
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
              o.map(ep).join(`
`)
            : " " + ep(o[0])
          : "as no adapter specified";
        throw new U(
          "There is no suitable adapter to dispatch the request " + i,
          "ERR_NOT_SUPPORT"
        );
      }
      return r;
    },
    adapters: Cu,
  };
function ca(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new Zr(null, e);
}
function tp(e) {
  return (
    ca(e),
    (e.headers = Qe.from(e.headers)),
    (e.data = ua.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    yy
      .getAdapter(e.adapter || uo.adapter)(e)
      .then(
        function (r) {
          return (
            ca(e),
            (r.data = ua.call(e, e.transformResponse, r)),
            (r.headers = Qe.from(r.headers)),
            r
          );
        },
        function (r) {
          return (
            dy(r) ||
              (ca(e),
              r &&
                r.response &&
                ((r.response.data = ua.call(
                  e,
                  e.transformResponse,
                  r.response
                )),
                (r.response.headers = Qe.from(r.response.headers)))),
            Promise.reject(r)
          );
        }
      )
  );
}
const xy = "1.7.3",
  Vc = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    Vc[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  }
);
const np = {};
Vc.transitional = function (t, n, r) {
  function s(o, i) {
    return (
      "[Axios v" +
      xy +
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
        !np[i] &&
        ((np[i] = !0),
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
function cE(e, t, n) {
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
const ku = { assertOptions: cE, validators: Vc },
  an = ku.validators;
class Qn {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new Gf(), response: new Gf() });
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
      (n = rr(this.defaults, n));
    const { transitional: r, paramsSerializer: s, headers: o } = n;
    r !== void 0 &&
      ku.assertOptions(
        r,
        {
          silentJSONParsing: an.transitional(an.boolean),
          forcedJSONParsing: an.transitional(an.boolean),
          clarifyTimeoutError: an.transitional(an.boolean),
        },
        !1
      ),
      s != null &&
        (E.isFunction(s)
          ? (n.paramsSerializer = { serialize: s })
          : ku.assertOptions(
              s,
              { encode: an.function, serialize: an.function },
              !0
            )),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let i = o && E.merge(o.common, o[n.method]);
    o &&
      E.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (m) => {
          delete o[m];
        }
      ),
      (n.headers = Qe.concat(i, o));
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
      h;
    if (!u) {
      const m = [tp.bind(this), void 0];
      for (
        m.unshift.apply(m, a),
          m.push.apply(m, c),
          h = m.length,
          d = Promise.resolve(n);
        f < h;

      )
        d = d.then(m[f++], m[f++]);
      return d;
    }
    h = a.length;
    let v = n;
    for (f = 0; f < h; ) {
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
      d = tp.call(this, v);
    } catch (m) {
      return Promise.reject(m);
    }
    for (f = 0, h = c.length; f < h; ) d = d.then(c[f++], c[f++]);
    return d;
  }
  getUri(t) {
    t = rr(this.defaults, t);
    const n = py(t.baseURL, t.url);
    return ay(n, t.params, t.paramsSerializer);
  }
}
E.forEach(["delete", "get", "head", "options"], function (t) {
  Qn.prototype[t] = function (n, r) {
    return this.request(
      rr(r || {}, { method: t, url: n, data: (r || {}).data })
    );
  };
});
E.forEach(["post", "put", "patch"], function (t) {
  function n(r) {
    return function (o, i, a) {
      return this.request(
        rr(a || {}, {
          method: t,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: o,
          data: i,
        })
      );
    };
  }
  (Qn.prototype[t] = n()), (Qn.prototype[t + "Form"] = n(!0));
});
class Kc {
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
        r.reason || ((r.reason = new Zr(o, i, a)), n(r.reason));
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
      token: new Kc(function (s) {
        t = s;
      }),
      cancel: t,
    };
  }
}
function dE(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function fE(e) {
  return E.isObject(e) && e.isAxiosError === !0;
}
const _u = {
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
Object.entries(_u).forEach(([e, t]) => {
  _u[t] = e;
});
function vy(e) {
  const t = new Qn(e),
    n = Xg(Qn.prototype.request, t);
  return (
    E.extend(n, Qn.prototype, t, { allOwnKeys: !0 }),
    E.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (s) {
      return vy(rr(e, s));
    }),
    n
  );
}
const $ = vy(uo);
$.Axios = Qn;
$.CanceledError = Zr;
$.CancelToken = Kc;
$.isCancel = dy;
$.VERSION = xy;
$.toFormData = Si;
$.AxiosError = U;
$.Cancel = $.CanceledError;
$.all = function (t) {
  return Promise.all(t);
};
$.spread = dE;
$.isAxiosError = fE;
$.mergeConfig = rr;
$.AxiosHeaders = Qe;
$.formToJSON = (e) => cy(E.isHTMLForm(e) ? new FormData(e) : e);
$.getAdapter = yy.getAdapter;
$.HttpStatusCode = _u;
$.default = $;
const W = "",
  pE = (e) => async (t) => {
    const n = `${W}/products/`;
    try {
      t(qr()),
        (
          await $.post(n, e, {
            headers: { "content-type": "multipart/form-data" },
          })
        ).status === 201 && t(zc());
    } catch {
      t(ir());
    }
  },
  Gc = (e, t, n) => async (r) => {
    const s = `${W}/products/?page=${e}&sort=${t}&by=${n}`;
    try {
      r(qr());
      const o = await $.get(s);
      o.status === 200 && r(Jg(o.data));
    } catch {
      r(ir());
    }
  },
  Qc = (e, t, n, r) => async (s) => {
    const o = `${W}/products/?search=${e}&page=${r}&sort=${t}&by=${n}`;
    try {
      s(qr());
      const i = await $.get(o);
      i.status === 200 && s(Jg(i.data));
    } catch {
      s(ir());
    }
  },
  hE = (e) => async (t) => {
    const n = `${W}/products/${e}/`;
    try {
      t(qr());
      const r = await $.get(n);
      r.status === 200 && t(FS(r.data));
    } catch {
      t(ir());
    }
  },
  mE = (e, t) => async (n) => {
    const r = `${W}/products/${e}/`;
    try {
      n(qr()),
        (
          await $.patch(r, t, {
            headers: { "content-type": "multipart/form-data" },
          })
        ).status === 200 && n(zc());
    } catch {
      n(ir());
    }
  },
  jy = (e, t) => async (n) => {
    const r = `${W}/product-update/${e}/`;
    try {
      (
        await $.patch(r, JSON.stringify(t), {
          headers: { "content-type": "application/json" },
        })
      ).status === 200 && n(zc());
    } catch {
      n(ir());
    }
  },
  gE = (e) => async (t) => {
    const n = `${W}/products/${e}/`;
    try {
      t(qr()), (await $.delete(n)).status === 200 && t(MS(e));
    } catch {
      t(ir());
    }
  };
function sn() {
  const e = nn(),
    t = xe(),
    { current_user: n } = V((i) => i.user),
    [r, s] = p.useState("");
  function o() {
    s(""), t(Qc(r, "ASC", "Id")), t(nr());
  }
  return l.jsxs(P, {
    children: [
      l.jsx(Tl, {
        bg: "dark",
        "data-bs-theme": "dark",
        collapseOnSelect: !0,
        children: l.jsxs(Pc, {
          children: [
            l.jsx(Tl.Brand, {
              children: l.jsxs(Ot, {
                to: "/",
                className: "text-decoration-none",
                style: ({ isActive: i }) => ({ color: i ? "white" : "gray" }),
                onClick: () => t(Gc(1, "ASC", "Id")),
                children: [
                  l.jsx("i", { className: "bi bi-shop-window px-2" }),
                  "Shop",
                ],
              }),
            }),
            l.jsxs(Sg, {
              className: "ml-auto",
              children: [
                l.jsx(C, {
                  className:
                    e.pathname === "/" ? "px-2 visible" : "px-2 invisible",
                  onSubmit: (i) => i.preventDefault(),
                  children: l.jsxs(P, {
                    children: [
                      l.jsx(N, {
                        xs: "auto",
                        children: l.jsx(C.Control, {
                          type: "text",
                          value: r,
                          placeholder: "Search",
                          className: "mr-sm-2",
                          onChange: (i) => s(i.target.value),
                        }),
                      }),
                      l.jsx(N, {
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
                    ? l.jsxs(Ot, {
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
                    ? l.jsxs(Ot, {
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
                    : n.is_staff
                    ? l.jsxs(Ot, {
                        className: "text-decoration-none align-self-center",
                        to: "/rider",
                        style: ({ isActive: i }) => ({
                          color: i ? "white" : "gray",
                        }),
                        children: [
                          l.jsx("i", { className: "bi bi-person-gear px-1" }),
                          "Rider",
                        ],
                      })
                    : l.jsx(l.Fragment, {})
                  : l.jsx(l.Fragment, {}),
                l.jsxs(Ot, {
                  to: "/cart",
                  className: "px-3 text-decoration-none align-self-center",
                  style: ({ isActive: i }) => ({ color: i ? "white" : "gray" }),
                  children: [
                    l.jsx("i", { className: "bi bi-cart px-1" }),
                    "Cart",
                  ],
                }),
                Object.keys(n).length
                  ? l.jsxs(Ot, {
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
                  : l.jsxs(Ot, {
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
      l.jsx(Im, {}),
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
        ? l.jsx(P, {
            className: "justify-content-center",
            children: l.jsx(N, {
              md: "auto",
              children: l.jsxs(Ao, {
                children: [
                  l.jsx(Ao.Prev, {
                    linkStyle: r,
                    onClick: () => {
                      t > 1 && n(t - 1);
                    },
                  }),
                  [...Array(e).keys()].map((s) =>
                    l.jsx(
                      Ao.Item,
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
                  l.jsx(Ao.Next, {
                    linkStyle: r,
                    onClick: () => {
                      t < e && n(t + 1);
                    },
                  }),
                ],
              }),
            }),
          })
        : l.jsx(P, {}),
      l.jsx(P, {
        children: l.jsx(N, {
          className: "p-2 bg-dark text-center text-white",
          children: "~ Copyright © 2024 ~",
        }),
      }),
    ],
  });
}
function hr() {
  return l.jsxs("div", {
    className: "vh-100",
    children: [
      l.jsx(sn, {}),
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
              l.jsx(so, {
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
function yE() {
  return l.jsxs("div", {
    className: "vh-100",
    children: [
      l.jsx(sn, {}),
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
              l.jsx(so, {
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
function xE({ product: e }) {
  const t = lt();
  return l.jsxs(P, {
    className: "py-2 justify-content-center border shadow-sm rounded",
    children: [
      l.jsx(P, {
        className: "my-2 text-center",
        children: l.jsx(so, {
          className: "text-dark text-decoration-none",
          to: `product/${e.Id}`,
          children: l.jsx(lo, { src: W + e.image, width: "50%", fluid: !0 }),
        }),
      }),
      l.jsx(P, {
        as: "h5",
        className: "my-2 justify-content-center",
        children: e.name,
      }),
      l.jsxs(P, {
        className: "mb-2",
        children: [
          l.jsx(N, {
            md: 8,
            children: l.jsx("i", {
              className: "bi bi-currency-dollar",
              children: e.price,
            }),
          }),
          l.jsx(N, {
            md: 4,
            children: l.jsx("i", {
              className: "bi bi-star-half",
              children: e.rating,
            }),
          }),
        ],
      }),
      l.jsx(P, {
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
function X({ variant: e, message: t }) {
  return l.jsx(B1, { variant: e, children: t });
}
function Pe() {
  return l.jsx("div", {
    className: "p-2 d-flex flex-row justify-content-center",
    children: l.jsx(Dg, { animation: "border" }),
  });
}
function vE() {
  const e = xe(),
    {
      products: t,
      pages: n,
      loading: r,
      success: s,
      error: o,
    } = V((u) => u.product),
    [i, a] = p.useState(1);
  return (
    p.useEffect(
      () => (
        e(Gc(i, "ASC", "Id")),
        () => {
          e(nr());
        }
      ),
      [i]
    ),
    l.jsxs("div", {
      className: "d-flex flex-column min-vh-100",
      children: [
        l.jsx(sn, {}),
        l.jsx("h1", {
          className: "text-center text-dark border py-2",
          children: "Product List",
        }),
        l.jsx(P, {
          className: "p-3",
          children: o
            ? l.jsx(X, { variant: "danger", message: "Error loading products" })
            : r
            ? l.jsx(Pe, {})
            : s
            ? Object.keys(t).length
              ? t.map((u) =>
                  l.jsx(
                    N,
                    {
                      className: "p-3 d-flex",
                      sm: 3,
                      md: 2,
                      children: l.jsx(xE, { product: u }),
                    },
                    u.Id
                  )
                )
              : l.jsx(X, {
                  className: "p-3",
                  variant: "warning",
                  message: "No products to show",
                })
            : l.jsx(P, {}),
        }),
        l.jsx(be, { pages: n, page: i, setPage: a }),
      ],
    })
  );
}
const wy = lr({
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
    Initial: Sy,
    Loading: co,
    Success: Ru,
    ListProducts: jE,
    Update: wE,
    Delete: SE,
    Error: On,
  } = wy.actions,
  NE = wy.reducer,
  EE = (e) => async (t) => {
    const n = `${W}/cart/`;
    try {
      t(co());
      const r = await $.post(n, JSON.stringify(e), {
        headers: { "content-type": "application/json" },
      });
      r.status === 201 || r.status === 200 ? t(Ru()) : t(On());
    } catch {
      t(On());
    }
  },
  CE = (e, t) => async (n) => {
    const r = `${W}/cart/${e}/?page=${t}`;
    try {
      n(co());
      const s = await $.get(r);
      s.status === 200 ? n(jE(s.data)) : n(On());
    } catch {
      n(On());
    }
  },
  kE = (e, t) => async (n) => {
    const r = `${W}/cart/${e}/`;
    try {
      n(co()),
        (
          await $.patch(r, JSON.stringify(t), {
            headers: { "content-type": "application/json" },
          })
        ).status === 200 && n(wE({ Id: e, cartItem: t }));
    } catch {
      n(On());
    }
  },
  _E = (e) => async (t) => {
    const n = `${W}/cart/${e}`;
    try {
      t(co()), (await $.delete(n)).status === 200 && t(SE(e));
    } catch {
      t(On());
    }
  },
  RE = (e) => async (t) => {
    const n = `${W}/cart-delete/${e}/`;
    try {
      t(co()), (await $.delete(n)).status === 200 ? t(Ru()) : t(On());
    } catch {
      t(On());
    }
  },
  Ny = lr({
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
    Initial: MC,
    Loading: Ey,
    Success: PE,
    Error: Cy,
    ListComments: OE,
    Delete: bC,
  } = Ny.actions,
  TE = Ny.reducer,
  IE = (e, t) => async (n) => {
    const r = `${W}/comment/${t}/`;
    try {
      n(Ey()),
        (
          await $.post(r, e, {
            headers: { "content-type": "application/json" },
          })
        ).status === 201 && n(PE());
    } catch {
      n(Cy());
    }
  },
  LE = (e, t) => async (n) => {
    const r = `${W}/comment/${e}/?page=${t}`;
    try {
      n(Ey());
      const s = await $.get(r);
      s.status === 202 && n(OE(s.data));
    } catch {
      n(Cy());
    }
  },
  Ee = [];
for (let e = 0; e < 256; ++e) Ee.push((e + 256).toString(16).slice(1));
function $E(e, t = 0) {
  return (
    Ee[e[t + 0]] +
    Ee[e[t + 1]] +
    Ee[e[t + 2]] +
    Ee[e[t + 3]] +
    "-" +
    Ee[e[t + 4]] +
    Ee[e[t + 5]] +
    "-" +
    Ee[e[t + 6]] +
    Ee[e[t + 7]] +
    "-" +
    Ee[e[t + 8]] +
    Ee[e[t + 9]] +
    "-" +
    Ee[e[t + 10]] +
    Ee[e[t + 11]] +
    Ee[e[t + 12]] +
    Ee[e[t + 13]] +
    Ee[e[t + 14]] +
    Ee[e[t + 15]]
  ).toLowerCase();
}
let da;
const DE = new Uint8Array(16);
function AE() {
  if (!da) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error(
        "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
      );
    da = crypto.getRandomValues.bind(crypto);
  }
  return da(DE);
}
const FE =
    typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto),
  rp = { randomUUID: FE };
function ME(e, t, n) {
  if (rp.randomUUID && !t && !e) return rp.randomUUID();
  e = e || {};
  const r = e.random || (e.rng || AE)();
  return (r[6] = (r[6] & 15) | 64), (r[8] = (r[8] & 63) | 128), $E(r);
}
function fo({ rating: e = 0, setRating: t = null }) {
  return l.jsx(P, {
    children: l.jsxs(N, {
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
function bE({ productId: e, setToggle: t = null, toggle: n = null }) {
  const r = xe(),
    { current_user: s } = V((f) => f.user),
    { product: o } = V((f) => f.product),
    [i, a] = p.useState(""),
    [u, c] = p.useState(0);
  function d() {
    r(
      IE(
        {
          _id: ME().toString(),
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
        jy(e, {
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
  return l.jsx(B, {
    className: "p-2",
    children: l.jsx(B.Item, {
      children: l.jsxs(P, {
        className: "p-2 justify-content-center",
        children: [
          l.jsxs(N, {
            md: 10,
            children: [
              l.jsx(P, {
                children: l.jsx(C, {
                  children: l.jsxs(C.Group, {
                    className: "p-2",
                    children: [
                      l.jsx(C.Label, {
                        as: "h6",
                        className: "fw-bold",
                        children: "Write a review here:",
                      }),
                      l.jsx(C.Control, {
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
              l.jsxs(P, {
                children: [
                  l.jsx(N, {
                    as: "h6",
                    md: 3,
                    children: "Give a rating where:",
                  }),
                  l.jsx(N, {
                    children: l.jsx(fo, { rating: u, setRating: c }),
                  }),
                ],
              }),
            ],
          }),
          l.jsx(N, {
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
function UE({ comments: e }) {
  return l.jsxs(P, {
    className: "px-3",
    children: [
      l.jsx("hr", {}),
      l.jsx("h2", { className: "pb-2 px-3", children: "All reviews" }),
      e.length
        ? l.jsx(l.Fragment, {})
        : l.jsx(X, { variant: "warning", message: "No reviews yet!" }),
      e.map((t) =>
        l.jsx(
          B,
          {
            className: "px-2 pb-2",
            children: l.jsx(B.Item, {
              children: l.jsxs(P, {
                className: "px-2",
                children: [
                  l.jsxs(N, {
                    md: 2,
                    children: [
                      l.jsx(P, { children: t.userName }),
                      l.jsx(P, { children: t.date }),
                    ],
                  }),
                  l.jsxs(N, {
                    md: 8,
                    children: [
                      l.jsx(P, { children: l.jsx(fo, { rating: t.rating }) }),
                      l.jsx(P, { children: t.message }),
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
function zE() {
  const { Id: e } = vj(),
    t = xe(),
    { current_user: n } = V((m) => m.user),
    { product: r } = V((m) => m.product),
    { loading: s, success: o, error: i } = V((m) => m.cart),
    { comments: a, pages: u } = V((m) => m.comment),
    [c, d] = p.useState(1),
    [f, h] = p.useState(!0);
  function v() {
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
    p.useEffect(() => (t(hE(e)), t(LE(e, c)), () => t(Sy())), [c, f]),
    l.jsxs("div", {
      className: "d-flex flex-column min-vh-100",
      children: [
        l.jsx(sn, {}),
        l.jsxs(P, {
          className: "p-3",
          children: [
            l.jsx(N, {
              className: "p-4 align-items-center",
              md: 4,
              lg: 6,
              children: l.jsx(lo, { src: W + r.image, fluid: !0, rounded: !0 }),
            }),
            l.jsxs(N, {
              className: "p-4",
              md: 4,
              lg: 6,
              children: [
                l.jsx(P, {
                  children: l.jsx($t, {
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
                l.jsx(P, {
                  children: l.jsx($t, {
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
                                l.jsx(fo, { rating: r.rating }),
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
                            children: l.jsx(Jr, {
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
                    ? l.jsx(X, {
                        variant: "danger",
                        message: "Error loading product",
                      })
                    : s
                    ? l.jsx(Pe, {})
                    : o
                    ? l.jsx(X, {
                        variant: "success",
                        message: "Successfully added product to cart",
                      })
                    : l.jsx(l.Fragment, {})
                  : l.jsx(X, {
                      variant: "warning",
                      message: "Login to Add items to cart",
                    }),
              ],
            }),
          ],
        }),
        Object.keys(n).length
          ? l.jsx(bE, { productId: e, setToggle: h, toggle: !f })
          : l.jsx(l.Fragment, {}),
        l.jsx(UE, { comments: a }),
        l.jsx(be, { pages: u, page: c, setPage: d }),
      ],
    })
  );
}
function BE() {
  const e = lt(),
    t = xe(),
    { current_user: n } = V((h) => h.user),
    {
      product_list: r,
      products: s,
      items: o,
      price: i,
      pages: a,
      loading: u,
      error: c,
    } = V((h) => h.cart),
    [d, f] = p.useState(1);
  return (
    p.useEffect(() => (t(CE(n.Id, d)), () => t(Sy())), [d]),
    Object.keys(n).length
      ? l.jsxs("div", {
          className: "d-flex flex-column min-vh-100",
          children: [
            l.jsx(sn, {}),
            l.jsxs(P, {
              className: "p-3",
              children: [
                l.jsxs(N, {
                  md: 8,
                  children: [
                    l.jsx("h2", {
                      className: "py-2",
                      children: "Shopping Cart",
                    }),
                    r.length
                      ? l.jsx(B, {
                          children: r.map((h) =>
                            l.jsxs(
                              B.Item,
                              {
                                children: [
                                  l.jsxs(P, {
                                    children: [
                                      l.jsx(N, {
                                        className: "d-flex align-items-center",
                                        md: 2,
                                        children: l.jsx(lo, {
                                          src: W + h.product.image,
                                          width: "50%",
                                          fluid: !0,
                                          rounded: !0,
                                        }),
                                      }),
                                      l.jsx(N, {
                                        className: "d-flex align-items-center",
                                        md: 2,
                                        children: l.jsx("strong", {
                                          children: h.product.name,
                                        }),
                                      }),
                                      l.jsx(N, {
                                        className: "d-flex align-items-center",
                                        md: 2,
                                        children: h.product.price,
                                      }),
                                      l.jsx(N, {
                                        className: "d-flex align-items-center",
                                        md: 2,
                                        children: l.jsx(C.Control, {
                                          as: "select",
                                          value: h.items,
                                          onChange: (v) => {
                                            t(
                                              kE(h.Id, {
                                                items: v.target.value,
                                              })
                                            );
                                          },
                                          children: [
                                            ...Array(
                                              h.product.countInStock
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
                                      l.jsx(N, {
                                        className: "d-flex align-items-center",
                                        md: 2,
                                        children:
                                          "Total : " +
                                          h.items * h.product.price,
                                      }),
                                      l.jsx(N, {
                                        className:
                                          "d-flex justify-content-center align-items-center",
                                        md: 2,
                                        children: l.jsx(G, {
                                          variant: "danger",
                                          onClick: () => t(_E(h.Id, h.userId)),
                                          children: "Delete",
                                        }),
                                      }),
                                    ],
                                  }),
                                  c
                                    ? l.jsx(X, {
                                        variant: "danger",
                                        message: "Couldn't add to cart",
                                      })
                                    : u
                                    ? l.jsx(Pe, {})
                                    : l.jsx(l.Fragment, {}),
                                ],
                              },
                              h.Id
                            )
                          ),
                        })
                      : l.jsx(X, {
                          variant: "warning",
                          message: "Cart is empty",
                        }),
                  ],
                }),
                l.jsxs(N, {
                  md: 4,
                  children: [
                    l.jsxs(P, {
                      className: "px-2",
                      children: [
                        l.jsx("h2", { className: "py-2", children: "Summary" }),
                        l.jsx($t, {
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
                    l.jsx(P, {
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
      : l.jsx(ge, { to: "/login" })
  );
}
const ky = lr({
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
    Initial: qs,
    Loading: po,
    Success: UC,
    Error: es,
    CurrentOrder: WE,
    CurrentOrderState: HE,
    ListOrders: _y,
    Delete: Ry,
  } = ky.actions,
  VE = ky.reducer,
  KE = (e) => async (t) => {
    const n = `${W}/orders/`;
    try {
      t(po());
      const r = await $.post(n, JSON.stringify(e), {
        headers: { "content-type": "application/json" },
      });
      r.status === 201 && t(WE(r.data.Id));
    } catch {
      t(es());
    }
  },
  Py = (e, t, n) => async (r) => {
    const s = `${W}/orders/?page=${e}&pending=${t}&show_delivery=${n}`;
    try {
      r(po());
      const o = await $.get(s);
      o.status === 200 && r(_y(o.data));
    } catch {
      r(es());
    }
  },
  GE = (e, t) => async (n) => {
    const r = `${W}/orders/${e}/?page=${t}`;
    try {
      n(po());
      const s = await $.get(r);
      s.status === 200 && n(_y(s.data));
    } catch {
      n(es());
    }
  },
  QE = (e) => async (t) => {
    const n = `${W}/orders/pending/${e}/`;
    try {
      const r = await $.get(n);
      r.status === 200 && t(HE(r.data.pending));
    } catch {
      t(es());
    }
  },
  JE = (e) => async (t) => {
    const n = `${W}/orders/pending/${e}/`;
    try {
      t(po()),
        (
          await $.patch(n, JSON.stringify({ show_delivery: !0 }), {
            headers: { "content-type": "application/json" },
          })
        ).status === 200 && t(Ry(e));
    } catch {
      t(es());
    }
  },
  Oy = (e) => async (t) => {
    const n = `${W}/orders/pending/${e}`;
    try {
      t(po()), (await $.delete(n)).status === 200 && t(Ry(e));
    } catch {
      t(es());
    }
  },
  Ty = lr({
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
    Initial: XE,
    Loading: Iy,
    Success: qE,
    Error: Ly,
    ListProducts: YE,
  } = Ty.actions,
  ZE = Ty.reducer,
  eC = (e) => async (t) => {
    const n = `${W}/summary/`;
    try {
      t(Iy()),
        (
          await $.post(n, JSON.stringify(e), {
            headers: { "content-type": "application/json" },
          })
        ).status === 201 && t(qE());
    } catch {
      t(Ly());
    }
  },
  $y = (e, t, n) => async (r) => {
    const s = `${W}/summary/?page=${e}&by=${t}&sort=${n}`;
    try {
      r(Iy());
      const o = await $.get(s);
      o.status === 202 && r(YE(o.data));
    } catch {
      r(Ly());
    }
  };
function tC() {
  const e = xe(),
    t = lt(),
    { current_user: n } = V((w) => w.user),
    {
      loading: r,
      success: s,
      error: o,
      order_id: i,
      pending: a,
    } = V((w) => w.order),
    { stored_list: u, products: c, items: d, price: f } = V((w) => w.cart),
    [h, v] = p.useState(!1),
    [m, S] = p.useState(!1),
    [j, x] = p.useState(!1);
  function y() {
    if (!m) {
      let w = [];
      u.map((k) => w.push([k.productId, k.items])),
        e(
          KE({
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
  function g() {
    a || (x(!0), setTimeout(() => t("/lastpage"), 2e3));
  }
  return (
    p.useEffect(
      () => (
        h &&
          s &&
          (S(!0),
          setTimeout(() => {
            e(qs()), e(RE(n.Id));
          }, 1500)),
        () => e(qs())
      ),
      [h, s]
    ),
    p.useEffect(() => {
      const w = setInterval(() => {
        m && a && e(QE(i));
      }, 1e3);
      return a || clearInterval(w), () => clearInterval(w);
    }, [a, m]),
    p.useEffect(() => {
      j &&
        u.map((w) => {
          e(
            jy(w.productId, { countInStock: w.product.countInStock - w.items })
          ),
            e(
              eC({
                _id: w.productId,
                product_name: w.product.name,
                product_price: w.product.price,
                product_image: w.product.image,
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
            l.jsx(sn, {}),
            l.jsx("h1", { className: "py-2 text-center", children: "ORDER" }),
            l.jsxs(P, {
              className: "px-3",
              children: [
                l.jsx(N, {
                  md: 8,
                  children: l.jsxs(B, {
                    children: [
                      l.jsx(B.Item, {
                        children: l.jsx("h2", { children: "Details:" }),
                      }),
                      l.jsxs(B.Item, {
                        children: [
                          l.jsx("p", { children: "Name : " + n.name }),
                          l.jsx("p", { children: "Email : " + n.email }),
                          l.jsx("p", {
                            children: `Address : ${n.city} | ${n.street} | ${n.apartment}`,
                          }),
                        ],
                      }),
                      l.jsx(B.Item, {
                        children: l.jsx("h2", { children: "Payment Method:" }),
                      }),
                      l.jsx(B.Item, {
                        children: l.jsx("p", { children: "Method : Bkash" }),
                      }),
                      l.jsx(B.Item, {
                        children: l.jsx("h2", { children: "Ordered Items" }),
                      }),
                      u.map((w) =>
                        l.jsx(
                          B.Item,
                          {
                            children: l.jsxs(P, {
                              children: [
                                l.jsx(N, {
                                  md: 4,
                                  children: `Product: ${w.product.name}`,
                                }),
                                l.jsx(N, {
                                  md: 4,
                                  children: `Price : ${w.product.price}`,
                                }),
                                l.jsx(N, {
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
                l.jsxs(N, {
                  md: 4,
                  children: [
                    l.jsxs($t, {
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
                                children: l.jsx(Jr, {
                                  className: "d-flex",
                                  children: m
                                    ? l.jsx(G, {
                                        disabled: j,
                                        variant: a ? "warning" : "success",
                                        onClick: () => g(),
                                        children: a ? "Processing" : "Payment",
                                      })
                                    : l.jsx(G, {
                                        variant: "dark",
                                        onClick: () => y(),
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
                      ? l.jsx(X, {
                          variant: "success",
                          message: "Payment Complete!!!",
                        })
                      : o
                      ? l.jsx(X, {
                          variant: "danger",
                          message: "Error on dealing with order",
                        })
                      : r
                      ? l.jsx(Pe, {})
                      : s
                      ? l.jsx(X, {
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
      : l.jsx(ge, { to: "/login" })
  );
}
const Dy = lr({
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
    Loading: ar,
    Success: nC,
    CurrentUser: Jc,
    RemoveUser: rC,
    ListUser: Ay,
    Delete: sC,
    Error: Tn,
  } = Dy.actions,
  oC = Dy.reducer,
  lC = (e) => async (t) => {
    const n = `${W}/login/`;
    try {
      t(ar());
      const r = await $.post(n, JSON.stringify(e), {
        headers: { "content-type": "application/json" },
      });
      r.status === 200 ? t(Jc(r.data)) : t(Tn());
    } catch {
      t(Tn());
    }
  },
  iC = (e) => async (t) => {
    const n = `${W}/users/`;
    try {
      t(ar());
      const r = await $.post(n, JSON.stringify(e), {
        headers: { "content-type": "application/json" },
      });
      r.status === 201 && t(Jc(r.data));
    } catch {
      t(Tn());
    }
  },
  aC = (e) => async (t) => {
    const n = `${W}/users/?page=${e}`;
    try {
      t(ar());
      const r = await $.get(n);
      r.status === 200 && t(Ay(r.data));
    } catch {
      t(Tn());
    }
  },
  Fy = (e, t) => async (n) => {
    const r = `${W}/users/?search=${e}&page=${t}`;
    try {
      n(ar());
      const s = await $.get(r);
      s.status === 200 && n(Ay(s.data));
    } catch {
      n(Tn());
    }
  },
  sp = (e) => async (t) => {
    const n = `${W}/users/${e.Id}/`;
    try {
      t(ar());
      const r = await $.patch(n, JSON.stringify(e), {
        headers: { "content-type": "application/json" },
      });
      r.status === 200 && t(Jc(r.data));
    } catch {
      t(Tn());
    }
  },
  uC = (e) => async (t) => {
    const n = `${W}/users/${e.Id}/`;
    try {
      t(ar()),
        (
          await $.patch(n, JSON.stringify(e), {
            headers: { "content-type": "application/json" },
          })
        ).status === 200 && t(nC());
    } catch {
      t(Tn());
    }
  },
  cC = (e) => async (t) => {
    const n = `${W}/users/${e}`;
    try {
      t(ar()), (await $.delete(n)).status === 200 && t(sC(e));
    } catch {
      t(Tn());
    }
  };
function dC({ isShown: e, order: t }) {
  const n = lt();
  return l.jsx(P, {
    className: "p-3",
    hidden: e,
    children: l.jsx(B, {
      children: t.product_list.map((r) =>
        l.jsx(
          B.Item,
          {
            children: l.jsxs(P, {
              className: "p-2",
              children: [
                l.jsx(N, {
                  md: 2,
                  children: l.jsx(lo, {
                    src: W + r.image,
                    width: "50%",
                    fluid: !0,
                  }),
                }),
                l.jsx(N, {
                  md: 2,
                  className: "text-center",
                  children: t.user.name,
                }),
                l.jsx(N, { md: 2, className: "text-center", children: r.name }),
                l.jsx(N, {
                  md: 2,
                  className: "text-center",
                  children: `${t.user.city} - ${t.user.street}`,
                }),
                l.jsx(N, {
                  md: 1,
                  className: "text-center",
                  children: r.price,
                }),
                l.jsx(N, {
                  md: 1,
                  className: "text-center",
                  children: r.items,
                }),
                l.jsx(N, {
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
function Xc({ type: e, order: t }) {
  const n = xe(),
    [r, s] = p.useState(!0);
  return l.jsxs(
    B.Item,
    {
      children: [
        l.jsxs(P, {
          onClick: () => s(!r),
          children: [
            l.jsx(N, { className: "text-center", children: t.Id }),
            l.jsx(N, {
              hidden: e === "user",
              className: "text-center",
              children: t.userId,
            }),
            l.jsx(N, { className: "text-center", children: t.date }),
            l.jsx(N, { className: "text-center", children: t.products }),
            l.jsx(N, { className: "text-center", children: t.items }),
            l.jsx(N, { className: "text-center", children: t.price }),
            l.jsx(N, {
              hidden: e !== "staff",
              onClick: () => {
                n(JE(t.Id));
              },
              className: "text-center text-success",
              children: "Assign",
            }),
            l.jsx(N, {
              hidden: e !== "staff",
              onClick: () => {
                n(Oy(t.Id));
              },
              className: "text-center text-danger",
              children: "Delete",
            }),
            l.jsx(N, {
              hidden: e !== "admin",
              className: "text-center",
              children: t.method,
            }),
            l.jsx(N, {
              hidden: e !== "admin",
              className: "text-center",
              children: t.rider,
            }),
          ],
        }),
        l.jsx(dC, { isShown: r, order: t }),
      ],
    },
    t.Id
  );
}
function fC() {
  const e = xe(),
    { current_user: t } = V((v) => v.user),
    { orders: n, pages: r, loading: s, error: o } = V((v) => v.order),
    [i, a] = p.useState(1),
    [u, c] = p.useState({
      name: t.name,
      email: t.email,
      division: t.division,
      city: t.city,
      street: t.street,
      apartment: t.apartment,
    }),
    [d, f] = p.useState({ password: "", confirmPassword: "" });
  function h() {
    d.password === d.confirmPassword &&
      (d.password
        ? e(sp({ ...u, password: d.password, Id: t.Id }))
        : e(sp({ ...u, Id: t.Id })));
  }
  return (
    p.useEffect(() => (e(GE(t.Id, i)), () => e(qs())), [i]),
    Object.keys(t).length
      ? l.jsxs("div", {
          className: "d-flex flex-column min-vh-100",
          children: [
            l.jsx(sn, {}),
            l.jsxs(P, {
              className: "p-4",
              children: [
                l.jsxs(N, {
                  md: 4,
                  children: [
                    l.jsxs("section", {
                      className: "p-2 d-flex flex-row justify-content-between",
                      children: [
                        l.jsx("h1", { children: "User Profile" }),
                        l.jsx("span", {
                          children: l.jsx(G, {
                            variant: "dark",
                            onClick: () => e(rC()),
                            children: "Logout",
                          }),
                        }),
                      ],
                    }),
                    l.jsxs(C, {
                      className: "p-3 bg-light text-secondary",
                      onSubmit: (v) => v.preventDefault(),
                      children: [
                        l.jsxs(C.Group, {
                          as: P,
                          className: "mb-3",
                          children: [
                            l.jsx(C.Label, {
                              column: !0,
                              sm: "3",
                              className: "fw-bold",
                              children: "Name",
                            }),
                            l.jsx(N, {
                              sm: 9,
                              children: l.jsx(C.Control, {
                                plaintext: !0,
                                type: "text",
                                value: u.name,
                                onChange: (v) =>
                                  c({ ...u, name: v.target.value }),
                              }),
                            }),
                          ],
                        }),
                        l.jsxs(C.Group, {
                          as: P,
                          className: "mb-3",
                          children: [
                            l.jsx(C.Label, {
                              column: !0,
                              sm: "3",
                              className: "fw-bold",
                              children: "Email",
                            }),
                            l.jsx(N, {
                              sm: 9,
                              children: l.jsx(C.Control, {
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
                        l.jsxs(P, {
                          children: [
                            l.jsx(N, {
                              children: l.jsxs(C.Group, {
                                className: "mb-3",
                                children: [
                                  l.jsx(C.Label, {
                                    column: !0,
                                    sm: "3",
                                    className: "fw-bold",
                                    children: "Division",
                                  }),
                                  l.jsx(C.Control, {
                                    plaintext: !0,
                                    type: "text",
                                    value: u.division,
                                    onChange: (v) =>
                                      c({ ...u, division: v.target.value }),
                                  }),
                                ],
                              }),
                            }),
                            l.jsx(N, {
                              children: l.jsxs(C.Group, {
                                className: "mb-3",
                                children: [
                                  l.jsx(C.Label, {
                                    column: !0,
                                    sm: "3",
                                    className: "fw-bold",
                                    children: "City",
                                  }),
                                  l.jsx(C.Control, {
                                    plaintext: !0,
                                    type: "text",
                                    value: u.city,
                                    onChange: (v) =>
                                      c({ ...u, city: v.target.value }),
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                        l.jsxs(P, {
                          children: [
                            l.jsx(N, {
                              children: l.jsxs(C.Group, {
                                className: "mb-3",
                                children: [
                                  l.jsx(C.Label, {
                                    column: !0,
                                    sm: "3",
                                    className: "fw-bold",
                                    children: "Street",
                                  }),
                                  l.jsx(C.Control, {
                                    plaintext: !0,
                                    type: "text",
                                    value: u.street,
                                    onChange: (v) =>
                                      c({ ...u, street: v.target.value }),
                                  }),
                                ],
                              }),
                            }),
                            l.jsx(N, {
                              children: l.jsxs(C.Group, {
                                className: "mb-3",
                                children: [
                                  l.jsx(C.Label, {
                                    column: !0,
                                    sm: "3",
                                    className: "fw-bold",
                                    children: "Apartment",
                                  }),
                                  l.jsx(C.Control, {
                                    plaintext: !0,
                                    type: "text",
                                    value: u.apartment,
                                    onChange: (v) =>
                                      c({ ...u, apartment: v.target.value }),
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                        l.jsxs(C.Group, {
                          className: "mb-3",
                          children: [
                            l.jsx(C.Label, {
                              className: "fw-bold",
                              children: "Password",
                            }),
                            l.jsx(C.Control, {
                              type: "password",
                              placeholder: "New Password",
                              value: d.password,
                              onChange: (v) =>
                                f({ ...d, password: v.target.value }),
                            }),
                          ],
                        }),
                        l.jsxs(C.Group, {
                          className: "mb-3",
                          children: [
                            l.jsx(C.Label, {
                              className: "fw-bold",
                              children: "Confirm Password",
                            }),
                            l.jsx(C.Control, {
                              type: "password",
                              placeholder: "Confirm Password",
                              value: d.confirmPassword,
                              onChange: (v) =>
                                f({ ...d, confirmPassword: v.target.value }),
                            }),
                          ],
                        }),
                        l.jsx(Jr, {
                          className: "d-flex",
                          children: l.jsx(G, {
                            type: "submit",
                            variant: "dark",
                            onClick: h,
                            children: "Update",
                          }),
                        }),
                      ],
                    }),
                    o
                      ? l.jsx(X, {
                          variant: "danger",
                          message: "Couldn't update profile",
                        })
                      : s
                      ? l.jsx(Pe, {})
                      : l.jsx(l.Fragment, {}),
                  ],
                }),
                l.jsxs(N, {
                  md: 8,
                  children: [
                    l.jsx("h1", { className: "p-2", children: "My Orders" }),
                    s
                      ? l.jsx(Pe, {})
                      : o
                      ? l.jsx(X, {
                          variant: "danger",
                          message: "Error loading your orders",
                        })
                      : n.length
                      ? l.jsxs(B, {
                          children: [
                            l.jsx(B.Item, {
                              children: l.jsxs(P, {
                                children: [
                                  l.jsx(N, {
                                    as: "h5",
                                    className: "text-center",
                                    children: "ID",
                                  }),
                                  l.jsx(N, {
                                    as: "h5",
                                    className: "text-center",
                                    children: "Date",
                                  }),
                                  l.jsx(N, {
                                    as: "h5",
                                    className: "text-center",
                                    children: "Products",
                                  }),
                                  l.jsx(N, {
                                    as: "h5",
                                    className: "text-center",
                                    children: "Items",
                                  }),
                                  l.jsx(N, {
                                    as: "h5",
                                    className: "text-center",
                                    children: "Total",
                                  }),
                                ],
                              }),
                            }),
                            n.map((v) =>
                              l.jsx(Xc, { type: "user", order: v }, v.Id)
                            ),
                          ],
                        })
                      : l.jsx(X, {
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
      : l.jsx(ge, { to: "/" })
  );
}
function pC() {
  const e = lt(),
    t = xe(),
    { current_user: n, loading: r, success: s, error: o } = V((d) => d.user),
    i = { email: "", password: "" },
    [a, u] = p.useState(i);
  function c() {
    t(lC({ ...a, password: a.password }));
  }
  return (
    p.useEffect(() => {
      s && e("/");
    }, [n]),
    l.jsxs(P, {
      className: "bg-light justify-content-center align-items-center vh-100",
      children: [
        l.jsx(N, {
          md: 1,
          className: "position-absolute top-0 start-0 py-2",
          children: l.jsx(G, {
            variant: "dark",
            onClick: () => (Object.keys(n).length ? e(-1) : e("/")),
            children: l.jsx("i", { className: "bi bi-arrow-left" }),
          }),
        }),
        l.jsxs(N, {
          className: "bg-white rounded shadow-lg",
          md: 4,
          children: [
            l.jsx("h1", { className: "text-center p-2", children: "Sign In" }),
            l.jsxs(C, {
              onSubmit: (d) => d.preventDefault(),
              children: [
                l.jsxs(C.Group, {
                  className: "p-3",
                  controlId: "formBasicEmail",
                  children: [
                    l.jsx(C.Label, {
                      className: "fw-bold",
                      children: "Email address",
                    }),
                    l.jsx(C.Control, {
                      required: !0,
                      type: "email",
                      placeholder: "Enter email",
                      value: a.email,
                      onChange: (d) => u({ ...a, email: d.target.value }),
                    }),
                  ],
                }),
                l.jsxs(C.Group, {
                  className: "p-3",
                  controlId: "formBasicPassword",
                  children: [
                    l.jsx(C.Label, {
                      className: "fw-bold",
                      children: "Password",
                    }),
                    l.jsx(C.Control, {
                      required: !0,
                      type: "password",
                      placeholder: "Password",
                      value: a.password,
                      onChange: (d) => u({ ...a, password: d.target.value }),
                    }),
                  ],
                }),
                l.jsx(Jr, {
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
                l.jsx(so, {
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
                ? l.jsx(X, { variant: "danger", message: "Wrong Credentials" })
                : r
                ? l.jsx(Pe, {})
                : l.jsx(l.Fragment, {}),
            }),
          ],
        }),
      ],
    })
  );
}
function hC() {
  const e = lt(),
    t = xe(),
    { current_user: n, loading: r, success: s, error: o } = V((d) => d.user),
    i = {
      name: "",
      email: "",
      division: "",
      city: "",
      street: "",
      apartment: "",
      password: "",
    },
    [a, u] = p.useState(i);
  function c() {
    t(iC(a));
  }
  return (
    p.useEffect(() => {
      s && e("/");
    }, [n]),
    l.jsxs(P, {
      className: "bg-light justify-content-center align-items-center vh-100",
      children: [
        l.jsx(N, {
          md: 1,
          className: "position-absolute top-0 start-0 py-2",
          children: l.jsx(G, {
            variant: "dark",
            onClick: () => e(-1),
            children: l.jsx("i", { className: "bi bi-arrow-left" }),
          }),
        }),
        l.jsxs(N, {
          className: "bg-white rounded shadow-lg",
          md: 4,
          children: [
            l.jsx("h1", { className: "text-center p-2", children: "Sign Up" }),
            l.jsxs(C, {
              onSubmit: (d) => d.preventDefault(),
              children: [
                l.jsxs(C.Group, {
                  className: "p-2",
                  children: [
                    l.jsx(C.Label, { className: "fw-bold", children: "Name" }),
                    l.jsx(C.Control, {
                      required: !0,
                      type: "name",
                      placeholder: "Name",
                      value: a.name,
                      onChange: (d) => u({ ...a, name: d.target.value }),
                    }),
                  ],
                }),
                l.jsxs(C.Group, {
                  className: "p-2",
                  children: [
                    l.jsx(C.Label, {
                      className: "fw-bold",
                      children: "Email address",
                    }),
                    l.jsx(C.Control, {
                      required: !0,
                      type: "email",
                      placeholder: "Enter email",
                      value: a.email,
                      onChange: (d) => u({ ...a, email: d.target.value }),
                    }),
                  ],
                }),
                l.jsxs(P, {
                  className: "px-3",
                  children: [
                    l.jsxs(P, {
                      className: "p-2",
                      children: [
                        l.jsx(N, {
                          children: l.jsxs(C.Group, {
                            children: [
                              l.jsx(C.Label, {
                                className: "fw-bold",
                                children: "Division",
                              }),
                              l.jsxs(C.Control, {
                                required: !0,
                                as: "select",
                                placeholder: "Division",
                                value: a.division,
                                onChange: (d) => {
                                  u({ ...a, division: d.target.value });
                                },
                                children: [
                                  l.jsx("option", {
                                    value: "Dhaka",
                                    children: "Dhaka",
                                  }),
                                  l.jsx("option", {
                                    value: "Rajshahi",
                                    children: "Rajshahi",
                                  }),
                                  l.jsx("option", {
                                    value: "Chittagong",
                                    children: "Chittagong",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        l.jsx(N, {
                          children: l.jsxs(C.Group, {
                            children: [
                              l.jsx(C.Label, {
                                className: "fw-bold",
                                children: "City",
                              }),
                              l.jsxs(C.Control, {
                                required: !0,
                                as: "select",
                                placeholder: "City",
                                value: a.city,
                                onChange: (d) => {
                                  u({ ...a, city: d.target.value });
                                },
                                children: [
                                  l.jsx("option", {
                                    value: "Dhaka",
                                    children: "Dhaka",
                                  }),
                                  l.jsx("option", {
                                    value: "Rajshahi",
                                    children: "Rajshahi",
                                  }),
                                  l.jsx("option", {
                                    value: "Chittagong",
                                    children: "Chittagong",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    l.jsxs(P, {
                      className: "p-2",
                      children: [
                        l.jsx(N, {
                          children:
                            a.city === "Chittagong"
                              ? l.jsxs(C.Group, {
                                  children: [
                                    l.jsx(C.Label, {
                                      className: "fw-bold",
                                      children: "Street",
                                    }),
                                    l.jsxs(C.Control, {
                                      required: !0,
                                      as: "select",
                                      placeholder: "Street",
                                      value: a.street,
                                      onChange: (d) =>
                                        u({ ...a, street: d.target.value }),
                                      children: [
                                        l.jsx("option", {
                                          value: "Agrabad",
                                          children: "Agrabad",
                                        }),
                                        l.jsx("option", {
                                          value: "Bhatiari",
                                          children: "Bhatiari",
                                        }),
                                        l.jsx("option", {
                                          value: "Faujdarhat",
                                          children: "Faujdarhat",
                                        }),
                                      ],
                                    }),
                                  ],
                                })
                              : a.city === "Rajshahi"
                              ? l.jsxs(C.Group, {
                                  children: [
                                    l.jsx(C.Label, {
                                      className: "fw-bold",
                                      children: "Street",
                                    }),
                                    l.jsxs(C.Control, {
                                      required: !0,
                                      as: "select",
                                      placeholder: "Street",
                                      value: a.street,
                                      onChange: (d) =>
                                        u({ ...a, street: d.target.value }),
                                      children: [
                                        l.jsx("option", {
                                          value: "Kazla",
                                          children: "Kazla",
                                        }),
                                        l.jsx("option", {
                                          value: "Nohata",
                                          children: "Nohata",
                                        }),
                                        l.jsx("option", {
                                          value: "Puthia",
                                          children: "Puthia",
                                        }),
                                      ],
                                    }),
                                  ],
                                })
                              : l.jsxs(C.Group, {
                                  children: [
                                    l.jsx(C.Label, {
                                      className: "fw-bold",
                                      children: "Street",
                                    }),
                                    l.jsxs(C.Control, {
                                      required: !0,
                                      as: "select",
                                      placeholder: "Street",
                                      value: a.street,
                                      onChange: (d) =>
                                        u({ ...a, street: d.target.value }),
                                      children: [
                                        l.jsx("option", {
                                          value: "Arambagh",
                                          children: "Arambagh",
                                        }),
                                        l.jsx("option", {
                                          value: "Ramna",
                                          children: "Ramna",
                                        }),
                                        l.jsx("option", {
                                          value: "Banani",
                                          children: "Banani",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                        }),
                        l.jsx(N, {
                          children: l.jsxs(C.Group, {
                            children: [
                              l.jsx(C.Label, {
                                className: "fw-bold",
                                children: "Apartment",
                              }),
                              l.jsx(C.Control, {
                                required: !0,
                                placeholder: "Apartment",
                                value: a.apartment,
                                onChange: (d) =>
                                  u({ ...a, apartment: d.target.value }),
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                l.jsxs(C.Group, {
                  className: "p-2",
                  children: [
                    l.jsx(C.Label, {
                      className: "fw-bold",
                      children: "Password",
                    }),
                    l.jsx(C.Control, {
                      required: !0,
                      type: "password",
                      placeholder: "Password",
                      value: a.password,
                      onChange: (d) => u({ ...a, password: d.target.value }),
                    }),
                  ],
                }),
                l.jsx(Jr, {
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
              ? l.jsx(Pe, {})
              : o
              ? l.jsx(X, { variant: "danger", message: "Wrong info" })
              : l.jsx(l.Fragment, {}),
          ],
        }),
      ],
    })
  );
}
function mC() {
  const { current_user: e } = V((s) => s.user),
    { order_id: t } = V((s) => s.order),
    { stored_list: n, price: r } = V((s) => s.cart);
  return l.jsxs("div", {
    className: "d-flex flex-column min-vh-100",
    children: [
      l.jsx(sn, {}),
      l.jsxs(P, {
        className: "p-3 justify-content-center align-items-center",
        children: [
          l.jsxs(N, {
            md: 5,
            className: "pt-3",
            children: [
              l.jsx(P, {
                as: "h1",
                className: "pb-2",
                children: "Thank You For Your Purchase!",
              }),
              l.jsx(P, {
                children: l.jsxs(B, {
                  children: [
                    l.jsx(B.Item, {
                      children: l.jsx(P, {
                        as: "h2",
                        className: "p-2",
                        children: "Billing Details",
                      }),
                    }),
                    l.jsx(B.Item, {
                      children: l.jsxs(P, {
                        children: [
                          l.jsx(N, { as: "h5", md: 8, children: "Name" }),
                          l.jsx(N, {
                            md: 4,
                            className: "text-end text-secondary",
                            children: e.name,
                          }),
                        ],
                      }),
                    }),
                    l.jsx(B.Item, {
                      children: l.jsxs(P, {
                        children: [
                          l.jsx(N, { as: "h5", md: 4, children: "Address" }),
                          l.jsx(N, {
                            md: 8,
                            className: "text-end text-secondary",
                            children: `${e.division} | ${e.city} | ${e.street}`,
                          }),
                        ],
                      }),
                    }),
                    l.jsx(B.Item, {
                      children: l.jsxs(P, {
                        children: [
                          l.jsx(N, { as: "h5", md: 6, children: "Email" }),
                          l.jsx(N, {
                            md: 6,
                            className: "text-end text-secondary",
                            children: e.email,
                          }),
                        ],
                      }),
                    }),
                    l.jsx(B.Item, {
                      children: l.jsxs(P, {
                        children: [
                          l.jsx(N, { as: "h5", md: 8, children: "Method" }),
                          l.jsx(N, {
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
          l.jsx(N, {
            md: 6,
            className: "pt-4",
            children: l.jsxs(B, {
              children: [
                l.jsx(B.Item, {
                  children: l.jsx(P, {
                    as: "h2",
                    className: "p-2",
                    children: "Order Summary",
                  }),
                }),
                l.jsxs(B.Item, {
                  children: [
                    l.jsxs(P, {
                      className: "pt-2",
                      children: [
                        l.jsx(N, {
                          md: 4,
                          className: "text-start text-secondary",
                          children: "Date",
                        }),
                        l.jsx(N, {
                          md: 4,
                          className: "text-center text-secondary",
                          children: "Order Number",
                        }),
                        l.jsx(N, {
                          md: 4,
                          className: "text-end text-secondary",
                          children: "Payment Method",
                        }),
                      ],
                    }),
                    l.jsxs(P, {
                      className: "pb-2",
                      children: [
                        l.jsx(N, {
                          as: "h6",
                          md: 4,
                          className: "text-start",
                          children: new Date().toISOString().split("T")[0],
                        }),
                        l.jsx(N, {
                          as: "h6",
                          md: 4,
                          className: "text-center",
                          children: t,
                        }),
                        l.jsx(N, {
                          as: "h6",
                          md: 4,
                          className: "text-center",
                          children: "Bkash",
                        }),
                      ],
                    }),
                  ],
                }),
                l.jsx(B.Item, {
                  children: n.map((s) =>
                    l.jsxs(
                      P,
                      {
                        className: "pt-2",
                        children: [
                          l.jsxs(P, {
                            children: [
                              l.jsx(N, {
                                as: "h5",
                                md: 8,
                                children: s.product.name,
                              }),
                              l.jsx(N, {
                                md: 4,
                                className: "text-center",
                                children: l.jsxs("strong", {
                                  children: [s.product.price * s.items, " Tk."],
                                }),
                              }),
                            ],
                          }),
                          l.jsx(P, {
                            children: l.jsx(N, {
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
                l.jsxs(B.Item, {
                  children: [
                    l.jsxs(P, {
                      children: [
                        l.jsx(N, {
                          md: 8,
                          as: "p",
                          className: "text-secondary",
                          children: "Sub Total",
                        }),
                        l.jsx(N, {
                          md: 4,
                          as: "p",
                          className: "text-secondary",
                          children: r,
                        }),
                      ],
                    }),
                    l.jsxs(P, {
                      children: [
                        l.jsx(N, {
                          md: 8,
                          as: "p",
                          className: "text-secondary",
                          children: "Extra",
                        }),
                        l.jsx(N, {
                          md: 4,
                          as: "p",
                          className: "text-secondary",
                          children: "40",
                        }),
                      ],
                    }),
                  ],
                }),
                l.jsx(B.Item, {
                  children: l.jsxs(P, {
                    children: [
                      l.jsx(N, { md: 8, as: "h4", children: "Order Total" }),
                      l.jsx(N, { md: 4, as: "h4", children: r + 40 }),
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
function Dn() {
  const e = nn(),
    t = xe(),
    { current_user: n } = V((i) => i.user),
    [r, s] = p.useState("");
  function o() {
    s(""),
      e.pathname === "/admin/products" ? (t(Qc(r)), t(Initial())) : t(Fy(r));
  }
  return l.jsxs(l.Fragment, {
    children: [
      l.jsx(Tl, {
        bg: "dark",
        "data-bs-theme": "dark",
        collapseOnSelect: !0,
        children: l.jsxs(Pc, {
          children: [
            l.jsx(Tl.Brand, {
              children: l.jsxs(Ot, {
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
            l.jsxs(Sg, {
              className: "ml-auto",
              children: [
                l.jsx(C, {
                  className:
                    e.pathname === "/admin/products" ||
                    e.pathname === "/admin/users"
                      ? "px-2 visible"
                      : "px-2 invisible",
                  onSubmit: (i) => i.preventDefault(),
                  children: l.jsxs(P, {
                    children: [
                      l.jsx(N, {
                        xs: "auto",
                        children: l.jsx(C.Control, {
                          type: "text",
                          value: r,
                          placeholder: "Search",
                          className: "mr-sm-2",
                          onChange: (i) => s(i.target.value),
                        }),
                      }),
                      l.jsx(N, {
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
                l.jsxs(Ot, {
                  to: "/profile",
                  className: "px-3 text-decoration-none align-self-center",
                  style: ({ isActive: i }) => ({ color: i ? "white" : "gray" }),
                  children: [
                    l.jsx("i", { className: "bi bi-person-fill px-1" }),
                    "User",
                  ],
                }),
                l.jsxs(Ot, {
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
      l.jsx(Im, {}),
    ],
  });
}
function gC() {
  const e = lt(),
    t = xe(),
    { products: n, pages: r } = V((u) => u.summary),
    [s, o] = p.useState("items"),
    [i, a] = p.useState("DESC");
  return (
    p.useEffect(() => {
      t($y(i === "DESC" && r > 1 ? r - 1 : 1, s, i));
    }, [s, i]),
    l.jsxs(P, {
      children: [
        l.jsx(P, { as: "h2", className: "p-2", children: "Products" }),
        l.jsxs(P, {
          className: "p-2",
          children: [
            l.jsx(N, {
              md: 2,
              children: l.jsx("strong", { children: "Sort:" }),
            }),
            l.jsx(N, {
              md: 4,
              children: l.jsxs(C.Control, {
                as: "select",
                value: i,
                onChange: (u) => a(u.target.value),
                children: [
                  l.jsx("option", { value: "DESC", children: "DESC" }),
                  l.jsx("option", { value: "ASC", children: "ASC" }),
                ],
              }),
            }),
            l.jsx(N, {
              md: 2,
              children: l.jsx("strong", { children: "Field:" }),
            }),
            l.jsx(N, {
              md: 4,
              children: l.jsxs(C.Control, {
                as: "select",
                value: s,
                onChange: (u) => o(u.target.value),
                children: [
                  l.jsx("option", { value: "items", children: "Items" }),
                  l.jsx("option", { value: "rating", children: "Rating" }),
                ],
              }),
            }),
          ],
        }),
        l.jsx(P, {
          className: "p-2",
          children: l.jsx(Zi, {
            fade: !0,
            children: n
              .slice(0, 5)
              .map((u) =>
                l.jsxs(
                  Zi.Item,
                  {
                    onClick: () => e(`/product/${u._id}`),
                    interval: 1e3,
                    className: "d-flex justify-content-center",
                    children: [
                      l.jsx("img", {
                        height: 150,
                        width: 200,
                        src: W + u.product_image,
                      }),
                      l.jsx(Zi.Caption, {
                        children: l.jsx("h6", { children: u.product_name }),
                      }),
                    ],
                  },
                  u.Id
                )
              ),
          }),
        }),
      ],
    })
  );
}
function yC() {
  const e = lt(),
    { current_user: t } = V((n) => n.user);
  return Object.keys(t).length
    ? t.is_superuser
      ? l.jsxs("div", {
          className: "d-flex flex-column min-vh-100",
          children: [
            l.jsx(Dn, {}),
            l.jsxs(P, {
              className: "p-3 justify-content-center",
              children: [
                l.jsxs(N, {
                  md: 8,
                  children: [
                    l.jsx("h1", {
                      className: "py-3 text-center",
                      children: "Admin Pages",
                    }),
                    l.jsxs(B, {
                      className: "py-2",
                      children: [
                        l.jsx(B.Item, {
                          className: "bg-light",
                          children: l.jsxs(P, {
                            children: [
                              l.jsx(N, {
                                md: 8,
                                as: "h3",
                                className: "text-center",
                                children: "Pages",
                              }),
                              l.jsx(N, {
                                md: 4,
                                as: "h3",
                                className: "text-center",
                                children: "Details",
                              }),
                            ],
                          }),
                        }),
                        l.jsx(B.Item, {
                          children: l.jsxs(P, {
                            children: [
                              l.jsx(N, {
                                md: 8,
                                as: "h6",
                                className:
                                  "d-flex flex-row justify-content-center align-items-center",
                                children: "Product List",
                              }),
                              l.jsx(N, {
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
                        l.jsx(B.Item, {
                          children: l.jsxs(P, {
                            children: [
                              l.jsx(N, {
                                md: 8,
                                as: "h6",
                                className:
                                  "d-flex flex-row justify-content-center align-items-center",
                                children: "User List",
                              }),
                              l.jsx(N, {
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
                        l.jsx(B.Item, {
                          children: l.jsxs(P, {
                            children: [
                              l.jsx(N, {
                                md: 8,
                                as: "h6",
                                className:
                                  "d-flex flex-row justify-content-center align-items-center",
                                children: "Order List",
                              }),
                              l.jsx(N, {
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
                        l.jsx(B.Item, {
                          children: l.jsxs(P, {
                            children: [
                              l.jsx(N, {
                                md: 8,
                                as: "h6",
                                className:
                                  "d-flex flex-row justify-content-center align-items-center",
                                children: "Summary",
                              }),
                              l.jsx(N, {
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
                l.jsx(N, { md: 4, children: l.jsx(gC, {}) }),
              ],
            }),
            l.jsx(be, {}),
          ],
        })
      : l.jsx(ge, { to: "/" })
    : l.jsx(ge, { to: "/login" });
}
function xC() {
  const e = lt(),
    t = xe(),
    { current_user: n } = V((j) => j.user),
    { products: r, pages: s, loading: o, error: i } = V((j) => j.product),
    [a, u] = p.useState(""),
    [c, d] = p.useState("DESC"),
    [f, h] = p.useState("price"),
    [v, m] = p.useState(1);
  function S() {
    u(""), t(Qc(a, c, f, 1)), t(nr());
  }
  return (
    p.useEffect(() => (t(Gc(v, c, f)), () => t(nr())), [v, c, f]),
    Object.keys(n).length
      ? n.is_superuser
        ? l.jsxs("div", {
            className: "d-flex flex-column min-vh-100",
            children: [
              l.jsx(Dn, {}),
              l.jsxs(P, {
                children: [
                  l.jsx("h2", {
                    className: "p-2 text-center",
                    children: "Search Products",
                  }),
                  l.jsxs(P, {
                    className: "justify-content-center",
                    children: [
                      l.jsx(N, {
                        md: 5,
                        children: l.jsx(C, {
                          className: "py-3",
                          onSubmit: (j) => j.preventDefault(),
                          children: l.jsx(C.Control, {
                            type: "text",
                            value: a,
                            placeholder: "Search",
                            className: "mr-sm-2",
                            onChange: (j) => u(j.target.value),
                          }),
                        }),
                      }),
                      l.jsx(N, {
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
              l.jsxs(P, {
                className: "justify-content-center",
                children: [
                  l.jsxs(P, {
                    md: 10,
                    className: "p-2",
                    children: [
                      l.jsx(N, {
                        md: 6,
                        children: l.jsx("h1", { children: "Products" }),
                      }),
                      l.jsx(N, {
                        md: 2,
                        children: l.jsxs(C.Control, {
                          as: "select",
                          value: f,
                          onChange: (j) => h(j.target.value),
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
                      l.jsx(N, {
                        md: 2,
                        children: l.jsxs(C.Control, {
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
                      l.jsx(N, {
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
                      ? l.jsx(X, {
                          variant: "danger",
                          message: "Error loading products",
                        })
                      : o
                      ? l.jsx(Pe, {})
                      : l.jsx(P, {
                          md: 10,
                          className: "px-3",
                          children: l.jsxs($t, {
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
                                          children: l.jsx(fo, {
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
                                            onClick: () => t(gE(j.Id)),
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
                    : l.jsx(P, {
                        md: 10,
                        className: "py-3",
                        children: l.jsx(X, {
                          variant: "warning",
                          message: "No products to show",
                        }),
                      }),
                ],
              }),
              l.jsx(be, { pages: s, page: v, setPage: m }),
            ],
          })
        : l.jsx(ge, { to: "/" })
      : l.jsx(ge, { to: "/login" })
  );
}
function vC() {
  const e = xe(),
    { orders: t, pages: n, loading: r, error: s } = V((u) => u.order),
    { current_user: o } = V((u) => u.user),
    [i, a] = p.useState(1);
  return (
    p.useEffect(() => (e(Py(i, !1, !1)), () => e(qs())), [i]),
    Object.keys(o).length
      ? o.is_superuser
        ? l.jsxs("div", {
            className: "d-flex flex-column min-vh-100",
            children: [
              l.jsx(Dn, {}),
              l.jsx(P, {
                className: "justify-content-center",
                children: t.length
                  ? s
                    ? l.jsx(X, {
                        variant: "danger",
                        message: "Error loading orders",
                      })
                    : r
                    ? l.jsx(Pe, {})
                    : l.jsxs(N, {
                        md: 11,
                        children: [
                          l.jsx("h1", {
                            className: "py-3",
                            children: "Orders",
                          }),
                          l.jsxs(B, {
                            children: [
                              l.jsx(B.Item, {
                                children: l.jsxs(P, {
                                  children: [
                                    l.jsx(N, {
                                      as: "h5",
                                      className: "text-center",
                                      children: "ID",
                                    }),
                                    l.jsx(N, {
                                      as: "h5",
                                      className: "text-center",
                                      children: "User",
                                    }),
                                    l.jsx(N, {
                                      as: "h5",
                                      className: "text-center",
                                      children: "Date",
                                    }),
                                    l.jsx(N, {
                                      as: "h5",
                                      className: "text-center",
                                      children: "Products",
                                    }),
                                    l.jsx(N, {
                                      as: "h5",
                                      className: "text-center",
                                      children: "Items",
                                    }),
                                    l.jsx(N, {
                                      as: "h5",
                                      className: "text-center",
                                      children: "Price",
                                    }),
                                    l.jsx(N, {
                                      as: "h5",
                                      className: "text-center",
                                      children: "Method",
                                    }),
                                    l.jsx(N, {
                                      as: "h5",
                                      className: "text-center",
                                      children: "Rider",
                                    }),
                                  ],
                                }),
                              }),
                              t.map((u) =>
                                l.jsx(Xc, { type: "admin", order: u }, u.Id)
                              ),
                            ],
                          }),
                        ],
                      })
                  : l.jsx(N, {
                      md: 11,
                      className: "py-3",
                      children: l.jsx(X, {
                        variant: "warning",
                        message: "No order is made yet",
                      }),
                    }),
              }),
              l.jsx(be, { pages: n, page: i, setPage: a }),
            ],
          })
        : l.jsx(ge, { to: "/" })
      : l.jsx(ge, { to: "/login" })
  );
}
function jC() {
  const e = xe(),
    {
      current_user: t,
      users: n,
      pages: r,
      loading: s,
      error: o,
    } = V((m) => m.user),
    [i, a] = p.useState(!1),
    [u, c] = p.useState(""),
    [d, f] = p.useState(1);
  function h() {
    c(""), e(Fy(u, 1));
  }
  function v(m) {
    return e(uC(m)), a(!i);
  }
  return (
    p.useEffect(() => {
      e(aC(d));
    }, [i, d]),
    Object.keys(t).length
      ? t.is_superuser
        ? l.jsxs("div", {
            className: "d-flex flex-column min-vh-100",
            children: [
              l.jsx(Dn, {}),
              l.jsxs(P, {
                children: [
                  l.jsx("h2", {
                    className: "p-2 text-center",
                    children: "Search Users",
                  }),
                  l.jsx(C, {
                    className: "p-3",
                    onSubmit: (m) => m.preventDefault(),
                    children: l.jsxs(P, {
                      className: "justify-content-center ",
                      children: [
                        l.jsx(N, {
                          md: 5,
                          children: l.jsx(C.Control, {
                            type: "text",
                            value: u,
                            placeholder: "Search",
                            className: "mr-sm-2",
                            onChange: (m) => c(m.target.value),
                          }),
                        }),
                        l.jsx(N, {
                          md: 1,
                          className:
                            "d-flex justify-content-start align-items-center",
                          children: l.jsx(G, {
                            type: "submit",
                            variant: "dark",
                            onClick: () => h(),
                            children: l.jsx("i", { className: "bi bi-search" }),
                          }),
                        }),
                      ],
                    }),
                  }),
                  l.jsx("hr", {}),
                ],
              }),
              l.jsx(P, {
                className: "px-3",
                children: l.jsxs(N, {
                  md: 12,
                  children: [
                    l.jsx("h1", { className: "py-3", children: "Users" }),
                    s
                      ? l.jsx(Pe, {})
                      : o
                      ? l.jsx(X, {
                          variant: "danger",
                          message: "Error loading users",
                        })
                      : l.jsxs($t, {
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
                                    children: "Division",
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
                                    children: "Apartment",
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
                                    children: "Make Rider",
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
                                        children: m.division,
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
                                        children: m.apartment,
                                      }),
                                      l.jsx("td", {
                                        className: m.is_superuser
                                          ? "text-center text-success"
                                          : "text-center text-dark",
                                        children: m.is_superuser ? "Yes" : "No",
                                      }),
                                      l.jsx("td", {
                                        className: "text-center",
                                        children: l.jsx(C, {
                                          className:
                                            "d-flex flex-row justify-content-center",
                                          children: l.jsx(C.Check, {
                                            type: "switch",
                                            defaultChecked: m.is_admin,
                                            onChange: () =>
                                              v({ Id: m.Id, is_admin: !0 }),
                                          }),
                                        }),
                                      }),
                                      l.jsx("td", {
                                        className: "text-center",
                                        children: l.jsx(C, {
                                          className:
                                            "d-flex flex-row justify-content-center",
                                          children: l.jsx(C.Check, {
                                            type: "switch",
                                            defaultChecked: m.is_staff,
                                            onChange: () =>
                                              v({ Id: m.Id, is_staff: !0 }),
                                          }),
                                        }),
                                      }),
                                      l.jsx("td", {
                                        className: "text-center",
                                        children: l.jsx(G, {
                                          type: "submit",
                                          variant: "danger",
                                          onClick: () => e(cC(m.Id)),
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
        : l.jsx(ge, { to: "/" })
      : l.jsx(ge, { to: "/login" })
  );
}
function wC() {
  const e = xe(),
    { current_user: t } = V((m) => m.user),
    {
      products: n,
      summary: r,
      pages: s,
      loading: o,
      success: i,
      error: a,
    } = V((m) => m.summary),
    [u, c] = p.useState(1),
    [d, f] = p.useState("items"),
    [h, v] = p.useState("DESC");
  return (
    p.useEffect(() => (e($y(u, d, h)), () => e(XE())), [u, d, h]),
    Object.keys(t).length
      ? t.is_superuser
        ? l.jsxs("div", {
            className: "d-flex flex-column min-vh-100",
            children: [
              l.jsx(Dn, {}),
              l.jsxs(P, {
                className: "px-3 pt-2",
                children: [
                  l.jsx(N, {
                    md: 4,
                    children: l.jsx("h2", {
                      children:
                        h === "DESC"
                          ? "Top Sold Products"
                          : "Less Sold Products",
                    }),
                  }),
                  l.jsx(N, {
                    md: 1,
                    className: "d-flex justify-content-end align-items-center",
                    children: l.jsx("strong", { children: "Sort:" }),
                  }),
                  l.jsx(N, {
                    md: 2,
                    className:
                      "d-flex justify-content-start align-items-center",
                    children: l.jsxs(C.Control, {
                      as: "select",
                      value: h,
                      onChange: (m) => v(m.target.value),
                      children: [
                        l.jsx("option", { value: "DESC", children: "DESC" }),
                        l.jsx("option", { value: "ASC", children: "ASC" }),
                      ],
                    }),
                  }),
                  l.jsx(N, {
                    md: 1,
                    className: "d-flex justify-content-end align-items-center",
                    children: l.jsx("strong", { children: "Field:" }),
                  }),
                  l.jsx(N, {
                    md: 2,
                    className:
                      "d-flex justify-content-start align-items-center",
                    children: l.jsxs(C.Control, {
                      as: "select",
                      value: d,
                      onChange: (m) => f(m.target.value),
                      children: [
                        l.jsx("option", { value: "items", children: "Items" }),
                        l.jsx("option", {
                          value: "rating",
                          children: "Rating",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              l.jsxs(P, {
                className: "p-3",
                children: [
                  l.jsx(N, {
                    md: 8,
                    lg: 8,
                    children: i
                      ? l.jsxs($t, {
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
                              children: n.map((m) =>
                                l.jsxs(
                                  "tr",
                                  {
                                    children: [
                                      l.jsx("td", {
                                        className: "text-center",
                                        children: m._id,
                                      }),
                                      l.jsx("td", {
                                        className: "text-center",
                                        children: l.jsx("strong", {
                                          children: m.product_name,
                                        }),
                                      }),
                                      l.jsx("td", {
                                        className: "text-center",
                                        children: m.product_price,
                                      }),
                                      l.jsx("td", {
                                        className: "text-center",
                                        children: m.items,
                                      }),
                                      l.jsx("td", {
                                        className: "text-center",
                                        children: m.date,
                                      }),
                                      l.jsx("td", {
                                        className: "text-center",
                                        children: l.jsx(fo, {
                                          rating: m.rating,
                                        }),
                                      }),
                                    ],
                                  },
                                  m._id
                                )
                              ),
                            }),
                          ],
                        })
                      : o
                      ? l.jsx(Pe, {})
                      : a
                      ? l.jsx(X, {
                          variant: "danger",
                          message: "Error loading data",
                        })
                      : l.jsx(l.Fragment, {}),
                  }),
                  l.jsx(N, {
                    md: 4,
                    children: l.jsxs($t, {
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
        : l.jsx(ge, { to: "/" })
      : l.jsx(ge, { to: "/login" })
  );
}
function SC() {
  const e = lt(),
    t = xe(),
    { loading: n, success: r, error: s } = V((h) => h.product),
    { current_user: o } = V((h) => h.user),
    i = {
      name: "",
      description: "",
      price: 0,
      image: "",
      brand: "",
      category: "",
      countInStock: 0,
    },
    [a, u] = p.useState(i),
    [c, d] = p.useState(!1),
    f = async () => {
      const h = new FormData();
      a.image && h.append("image", a.image),
        h.append("name", a.name),
        h.append("description", a.description),
        h.append("price", Number(a.price)),
        h.append("brand", a.brand),
        h.append("category", a.category),
        h.append("countInStock", Number(a.countInStock)),
        t(pE(h)),
        d(!0);
    };
  return (
    p.useEffect(
      () => (
        c &&
          setTimeout(() => {
            r && (t(nr()), u(i));
          }, 1e3),
        () => {
          r && t(nr());
        }
      ),
      [r, c]
    ),
    Object.keys(o).length
      ? o.is_superuser
        ? l.jsxs("div", {
            className: "d-flex flex-column min-vh-100",
            children: [
              l.jsx(Dn, {}),
              l.jsxs(P, {
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
                  l.jsx(N, {
                    md: 6,
                    children: l.jsxs(C, {
                      onSubmit: (h) => h.preventDefault(),
                      children: [
                        l.jsxs(C.Group, {
                          className: "p-2",
                          controlId: "name",
                          children: [
                            l.jsx(C.Label, {
                              className: "fw-bold",
                              children: "Name",
                            }),
                            l.jsx(C.Control, {
                              type: "name",
                              placeholder: "Enter name",
                              value: a.name,
                              onChange: (h) =>
                                u({ ...a, name: h.target.value }),
                            }),
                          ],
                        }),
                        l.jsxs(C.Group, {
                          className: "p-2",
                          controlId: "price",
                          children: [
                            l.jsx(C.Label, {
                              className: "fw-bold",
                              children: "Price",
                            }),
                            l.jsx(C.Control, {
                              type: "number",
                              placeholder: "Enter price",
                              value: a.price,
                              onChange: (h) =>
                                u({ ...a, price: h.target.value }),
                            }),
                          ],
                        }),
                        l.jsxs(C.Group, {
                          className: "p-2",
                          controlId: "brand",
                          children: [
                            l.jsx(C.Label, {
                              className: "fw-bold",
                              children: "Brand",
                            }),
                            l.jsx(C.Control, {
                              type: "text",
                              placeholder: "Enter brand",
                              value: a.brand,
                              onChange: (h) =>
                                u({ ...a, brand: h.target.value }),
                            }),
                          ],
                        }),
                        l.jsxs(C.Group, {
                          className: "p-2",
                          controlId: "countinstock",
                          children: [
                            l.jsx(C.Label, {
                              className: "fw-bold",
                              children: "Stock",
                            }),
                            l.jsx(C.Control, {
                              type: "number",
                              placeholder: "Enter stock",
                              value: a.countInStock,
                              onChange: (h) =>
                                u({ ...a, countInStock: h.target.value }),
                            }),
                          ],
                        }),
                        l.jsxs(C.Group, {
                          className: "p-2",
                          controlId: "category",
                          children: [
                            l.jsx(C.Label, {
                              className: "fw-bold",
                              children: "Category",
                            }),
                            l.jsx(C.Control, {
                              type: "text",
                              placeholder: "Enter category",
                              value: a.category,
                              onChange: (h) =>
                                u({ ...a, category: h.target.value }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  l.jsx(N, {
                    md: 6,
                    children: l.jsxs(C, {
                      onSubmit: (h) => h.preventDefault(),
                      children: [
                        l.jsxs(C.Group, {
                          className: "p-2",
                          controlId: "image",
                          children: [
                            l.jsx(C.Label, {
                              className: "fw-bold",
                              children: "Image",
                            }),
                            l.jsx(C.Control, {
                              type: "file",
                              placeholder: "Enter image",
                              onChange: (h) =>
                                u({ ...a, image: h.target.files[0] }),
                            }),
                          ],
                        }),
                        l.jsxs(C.Group, {
                          className: "p-2",
                          controlId: "description",
                          children: [
                            l.jsx(C.Label, {
                              className: "fw-bold",
                              children: "Description",
                            }),
                            l.jsx(C.Control, {
                              as: "textarea",
                              rows: 5,
                              placeholder: "Enter description",
                              value: a.description,
                              onChange: (h) =>
                                u({ ...a, description: h.target.value }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  s
                    ? l.jsx("div", {
                        className: "pt-2",
                        children: l.jsx(X, {
                          variant: "danger",
                          message: "Could not create product",
                        }),
                      })
                    : n
                    ? l.jsx(Pe, {})
                    : r
                    ? l.jsx("div", {
                        className: "pt-2",
                        children: l.jsx(X, {
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
        : l.jsx(ge, { to: "/" })
      : l.jsx(ge, { to: "/login" })
  );
}
function NC() {
  const e = lt(),
    t = nn(),
    n = xe(),
    { loading: r, success: s, error: o } = V((m) => m.product),
    { current_user: i } = V((m) => m.user),
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
    [c, d] = p.useState(u),
    [f, h] = p.useState(!1),
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
        n(mE(a.Id, m)),
        h(!0);
    };
  return (
    p.useEffect(
      () => (
        f &&
          setTimeout(() => {
            s && e("/admin/products");
          }, 1e3),
        () => {
          s && n(nr());
        }
      ),
      [s, f]
    ),
    Object.keys(i).length
      ? i.is_superuser
        ? l.jsxs("div", {
            className: "d-flex flex-column min-vh-100",
            children: [
              l.jsx(Dn, {}),
              l.jsxs(P, {
                className: "justify-content-center px-5 py-3",
                children: [
                  l.jsx("center", {
                    children: l.jsx("h1", {
                      className: "py-3",
                      children: "Update Product",
                    }),
                  }),
                  l.jsx(N, {
                    md: 6,
                    className: "py-2",
                    children: l.jsxs(C, {
                      onSubmit: (m) => m.preventDefault(),
                      children: [
                        l.jsxs(C.Group, {
                          as: P,
                          className: "p-2",
                          controlId: "name",
                          children: [
                            l.jsx(C.Label, {
                              column: !0,
                              sm: "2",
                              className: "fw-bold",
                              children: "Name",
                            }),
                            l.jsx(N, {
                              sm: 10,
                              children: l.jsx(C.Control, {
                                type: "name",
                                placeholder: "Enter name",
                                value: c.name,
                                onChange: (m) =>
                                  d({ ...c, name: m.target.value }),
                              }),
                            }),
                          ],
                        }),
                        l.jsxs(C.Group, {
                          as: P,
                          className: "p-2",
                          controlId: "price",
                          children: [
                            l.jsx(C.Label, {
                              column: !0,
                              sm: "2",
                              className: "fw-bold",
                              children: "Price",
                            }),
                            l.jsx(N, {
                              sm: 10,
                              children: l.jsx(C.Control, {
                                type: "number",
                                placeholder: "Enter price",
                                value: c.price,
                                onChange: (m) =>
                                  d({ ...c, price: m.target.value }),
                              }),
                            }),
                          ],
                        }),
                        l.jsxs(C.Group, {
                          as: P,
                          className: "p-2",
                          controlId: "brand",
                          children: [
                            l.jsx(C.Label, {
                              column: !0,
                              sm: "2",
                              className: "fw-bold",
                              children: "Brand",
                            }),
                            l.jsx(N, {
                              sm: 10,
                              children: l.jsx(C.Control, {
                                type: "text",
                                placeholder: "Enter brand",
                                value: c.brand,
                                onChange: (m) =>
                                  d({ ...c, brand: m.target.value }),
                              }),
                            }),
                          ],
                        }),
                        l.jsxs(C.Group, {
                          as: P,
                          className: "p-2",
                          controlId: "countinstock",
                          children: [
                            l.jsx(C.Label, {
                              column: !0,
                              sm: "2",
                              className: "fw-bold",
                              children: "Stock",
                            }),
                            l.jsx(N, {
                              sm: 10,
                              children: l.jsx(C.Control, {
                                type: "number",
                                placeholder: "Enter stock",
                                value: c.countInStock,
                                onChange: (m) =>
                                  d({ ...c, countInStock: m.target.value }),
                              }),
                            }),
                          ],
                        }),
                        l.jsxs(C.Group, {
                          as: P,
                          className: "p-2",
                          controlId: "category",
                          children: [
                            l.jsx(C.Label, {
                              column: !0,
                              sm: "2",
                              className: "fw-bold",
                              children: "Category",
                            }),
                            l.jsx(N, {
                              sm: 10,
                              children: l.jsx(C.Control, {
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
                  l.jsx(N, {
                    md: 6,
                    className: "py-2",
                    children: l.jsxs(C, {
                      onSubmit: (m) => m.preventDefault(),
                      children: [
                        l.jsxs(C.Group, {
                          className: "p-2",
                          controlId: "image",
                          children: [
                            l.jsx(C.Label, {
                              className: "fw-bold",
                              children: "Image",
                            }),
                            l.jsx(C.Control, {
                              type: "file",
                              placeholder: "Enter image",
                              onChange: (m) =>
                                d({ ...c, image: m.target.files[0] }),
                            }),
                          ],
                        }),
                        l.jsxs(C.Group, {
                          className: "p-2",
                          controlId: "description",
                          children: [
                            l.jsx(C.Label, {
                              className: "fw-bold",
                              children: "Description",
                            }),
                            l.jsx(C.Control, {
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
                    ? l.jsx(X, {
                        className: "pt-2",
                        variant: "danger",
                        message: "Could not update product",
                      })
                    : r
                    ? l.jsx(Pe, {})
                    : s
                    ? l.jsx(X, {
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
        : l.jsx(ge, { to: "/" })
      : l.jsx(ge, { to: "/login" })
  );
}
function EC() {
  const e = xe(),
    { orders: t, pages: n, loading: r, error: s } = V((u) => u.order),
    { current_user: o } = V((u) => u.user),
    [i, a] = p.useState(1);
  return (
    p.useEffect(() => (e(Py(i, !0, !1)), () => e(qs())), [i]),
    Object.keys(o).length
      ? o.is_admin
        ? l.jsxs("div", {
            className: "d-flex flex-column min-vh-100",
            children: [
              l.jsx(Dn, {}),
              l.jsx(P, {
                className: "justify-content-center",
                children: t.length
                  ? s
                    ? l.jsx(X, {
                        variant: "danger",
                        message: "Error loading orders",
                      })
                    : r
                    ? l.jsx(Pe, {})
                    : l.jsxs(N, {
                        md: 11,
                        children: [
                          l.jsx("h1", {
                            className: "py-3",
                            children: " Pending Orders",
                          }),
                          l.jsxs(B, {
                            children: [
                              l.jsx(B.Item, {
                                children: l.jsxs(P, {
                                  children: [
                                    l.jsx(N, {
                                      as: "h6",
                                      className: "text-center",
                                      children: "ID",
                                    }),
                                    l.jsx(N, {
                                      as: "h6",
                                      className: "text-center",
                                      children: "User",
                                    }),
                                    l.jsx(N, {
                                      as: "h6",
                                      className: "text-center",
                                      children: "Date",
                                    }),
                                    l.jsx(N, {
                                      as: "h6",
                                      className: "text-center",
                                      children: "Products",
                                    }),
                                    l.jsx(N, {
                                      as: "h6",
                                      className: "text-center",
                                      children: "Items",
                                    }),
                                    l.jsx(N, {
                                      as: "h6",
                                      className: "text-center",
                                      children: "Price",
                                    }),
                                    l.jsx(N, {
                                      as: "h6",
                                      className: "text-center",
                                      children: "Assign Rider",
                                    }),
                                    l.jsx(N, {
                                      as: "h6",
                                      className: "text-center",
                                      children: "Terminate",
                                    }),
                                  ],
                                }),
                              }),
                              t.map((u) =>
                                l.jsx(Xc, { type: "staff", order: u }, u.Id)
                              ),
                            ],
                          }),
                        ],
                      })
                  : l.jsx(N, {
                      md: 11,
                      className: "py-3",
                      children: l.jsx(X, {
                        variant: "warning",
                        message: "No order is made yet",
                      }),
                    }),
              }),
              l.jsx(be, { pages: n, page: i, setPage: a }),
            ],
          })
        : l.jsx(ge, { to: "/" })
      : l.jsx(ge, { to: "/login" })
  );
}
const My = lr({
    name: "delivery",
    initialState: {
      deliveries: [],
      rider_deliveries: [],
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
      ListDeliveries: (e, t) => {
        (e.deliveries = t.payload.deliveries),
          (e.pages = t.payload.pages),
          (e.loading = !1),
          (e.success = !0),
          (e.error = !1);
      },
      RiderDeliveries: (e, t) => {
        (e.rider_deliveries = t.payload),
          (e.loading = !1),
          (e.success = !0),
          (e.error = !1);
      },
      Delete: (e, t) => {
        (e.deliveries = e.deliveries.filter((n) => n.Id !== t.payload)),
          (e.loading = !1),
          (e.success = !0),
          (e.error = !1);
      },
    },
  }),
  {
    Initial: CC,
    Loading: ho,
    Success: by,
    Error: mo,
    ListDeliveries: kC,
    RiderDeliveries: _C,
    Delete: RC,
  } = My.actions,
  PC = My.reducer,
  OC = (e, t, n) => async (r) => {
    const s = `${W}/delivery/?page=${e}&city=${t}&street=${n}`;
    try {
      r(ho());
      const o = await $.get(s);
      o.status === 200 && r(kC(o.data));
    } catch {
      r(mo());
    }
  },
  TC = (e) => async (t) => {
    const n = `${W}/delivery/${e}/`;
    try {
      t(ho());
      const r = await $.get(n);
      r.status === 200 && t(_C(r.data));
    } catch {
      t(mo());
    }
  },
  IC = (e, t) => async (n) => {
    const r = `${W}/delivery/${e}/`;
    try {
      n(ho()),
        (
          await $.patch(r, JSON.stringify({ rider: t }), {
            headers: { "content-type": "application/json" },
          })
        ).status === 200 && n(by());
    } catch {
      n(mo());
    }
  },
  LC = (e) => async (t) => {
    const n = `${W}/delivery/${e}/`;
    try {
      t(ho()),
        (
          await $.patch(n, JSON.stringify({ pending: !1, show_delivery: !1 }), {
            headers: { "content-type": "application/json" },
          })
        ).status === 200 && t(RC(e));
    } catch {
      t(mo());
    }
  },
  $C = (e) => async (t) => {
    const n = `${W}/delivery/${e}/`;
    try {
      t(ho()),
        (
          await $.patch(n, JSON.stringify({ rider: null }), {
            headers: { "content-type": "application/json" },
          })
        ).status === 200 && t(by());
    } catch {
      t(mo());
    }
  };
function DC() {
  const e = xe(),
    {
      deliveries: t,
      rider_deliveries: n,
      pages: r,
      loading: s,
    } = V((d) => d.delivery),
    { current_user: o } = V((d) => d.user),
    [i, a] = p.useState(1),
    [u, c] = p.useState(!1);
  return (
    p.useEffect(
      () => (e(OC(i, o.city, o.street)), e(TC(o.Id)), () => e(CC())),
      [i, u]
    ),
    Object.keys(o).length
      ? o.is_staff
        ? l.jsxs("div", {
            className: "d-flex flex-column min-vh-100",
            children: [
              l.jsx(sn, {}),
              l.jsxs(P, {
                className: "p-3 justify-content-center",
                children: [
                  l.jsxs(N, {
                    md: 5,
                    children: [
                      l.jsx("h2", { children: "Orders Dashboard" }),
                      s
                        ? l.jsx(Pe, {})
                        : t.length
                        ? l.jsxs($t, {
                            striped: !0,
                            bordered: !0,
                            hover: !0,
                            size: "sm",
                            children: [
                              l.jsx("thead", {
                                children: l.jsxs("tr", {
                                  children: [
                                    l.jsx("th", {
                                      className: "text-center",
                                      children: "Id",
                                    }),
                                    l.jsx("th", {
                                      className: "text-center",
                                      children: "Name",
                                    }),
                                    l.jsx("th", {
                                      className: "text-center",
                                      children: "Products",
                                    }),
                                    l.jsx("th", {
                                      className: "text-center",
                                      children: "Price",
                                    }),
                                    l.jsx("th", {
                                      className: "text-center",
                                      children: "Street",
                                    }),
                                    l.jsx("th", {
                                      className: "text-center",
                                      children: "Apartment",
                                    }),
                                    l.jsx("th", {
                                      className: "text-center",
                                      children: "Ride",
                                    }),
                                  ],
                                }),
                              }),
                              l.jsx("tbody", {
                                children: t.map((d) =>
                                  l.jsxs(
                                    "tr",
                                    {
                                      children: [
                                        l.jsx("td", {
                                          className: "text-center",
                                          children: d.Id,
                                        }),
                                        l.jsx("td", {
                                          className: "text-center",
                                          children: d.user_name,
                                        }),
                                        l.jsx("td", {
                                          className: "text-center",
                                          children: d.products,
                                        }),
                                        l.jsx("td", {
                                          className: "text-center",
                                          children: d.price,
                                        }),
                                        l.jsx("td", {
                                          className: "text-center",
                                          children: d.user_street,
                                        }),
                                        l.jsx("td", {
                                          className: "text-center",
                                          children: d.user_apartment,
                                        }),
                                        l.jsx("td", {
                                          className: "text-center",
                                          children: l.jsx(G, {
                                            variant: "dark",
                                            onClick: () => {
                                              e(IC(d.Id, o.Id)), c(!u);
                                            },
                                            children: "Accept",
                                          }),
                                        }),
                                      ],
                                    },
                                    d.Id
                                  )
                                ),
                              }),
                            ],
                          })
                        : l.jsx(X, {
                            variant: "warning",
                            message: "No orders to show",
                          }),
                    ],
                  }),
                  l.jsxs(N, {
                    md: 7,
                    children: [
                      l.jsx("h2", { children: "My Deliveries" }),
                      s
                        ? l.jsx(Pe, {})
                        : n.length
                        ? l.jsxs($t, {
                            striped: !0,
                            bordered: !0,
                            hover: !0,
                            size: "sm",
                            children: [
                              l.jsx("thead", {
                                children: l.jsxs("tr", {
                                  children: [
                                    l.jsx("th", {
                                      className: "text-center",
                                      children: "Id",
                                    }),
                                    l.jsx("th", {
                                      className: "text-center",
                                      children: "Name",
                                    }),
                                    l.jsx("th", {
                                      className: "text-center",
                                      children: "Products",
                                    }),
                                    l.jsx("th", {
                                      className: "text-center",
                                      children: "Street",
                                    }),
                                    l.jsx("th", {
                                      className: "text-center",
                                      children: "Apartment",
                                    }),
                                    l.jsx("th", {
                                      className: "text-center",
                                      children: "Deliver",
                                    }),
                                    l.jsx("th", {
                                      className: "text-center",
                                      children: "Reassign",
                                    }),
                                    l.jsx("th", {
                                      className: "text-center",
                                      children: "Cancel",
                                    }),
                                  ],
                                }),
                              }),
                              l.jsx("tbody", {
                                children: n.map((d) =>
                                  l.jsxs(
                                    "tr",
                                    {
                                      children: [
                                        l.jsx("td", {
                                          className: "text-center",
                                          children: d.Id,
                                        }),
                                        l.jsx("td", {
                                          className: "text-center",
                                          children: d.user_name,
                                        }),
                                        l.jsx("td", {
                                          className: "text-center",
                                          children: d.products,
                                        }),
                                        l.jsx("td", {
                                          className: "text-center",
                                          children: d.user_street,
                                        }),
                                        l.jsx("td", {
                                          className: "text-center",
                                          children: d.user_apartment,
                                        }),
                                        l.jsx("td", {
                                          className: "text-center",
                                          children: l.jsx(G, {
                                            variant: "success",
                                            onClick: () => {
                                              e(LC(d.Id)), c(!u);
                                            },
                                            children: "Complete",
                                          }),
                                        }),
                                        l.jsx("td", {
                                          className: "text-center",
                                          children: l.jsx(G, {
                                            variant: "danger",
                                            onClick: () => {
                                              e($C(d.Id)), c(!u);
                                            },
                                            children: "Reassign",
                                          }),
                                        }),
                                        l.jsx("td", {
                                          className: "text-center",
                                          children: l.jsx(G, {
                                            variant: "danger",
                                            onClick: () => {
                                              e(Oy(d.Id)), c(!u);
                                            },
                                            children: "Cancel",
                                          }),
                                        }),
                                      ],
                                    },
                                    d.Id
                                  )
                                ),
                              }),
                            ],
                          })
                        : l.jsx(X, {
                            variant: "warning",
                            message: "No pending delivery",
                          }),
                    ],
                  }),
                ],
              }),
              l.jsx(be, { pages: r, page: i, setPage: a }),
            ],
          })
        : l.jsx(ge, { to: "/" })
      : l.jsx(ge, { to: "/login" })
  );
}
function AC() {
  return l.jsx(zj, {
    children: l.jsxs(Lj, {
      children: [
        l.jsxs(he, {
          path: "/",
          errorElement: l.jsx(hr, {}),
          children: [
            l.jsx(he, { index: !0, element: l.jsx(vE, {}) }),
            l.jsx(he, { path: "product/:Id", element: l.jsx(zE, {}) }),
            l.jsx(he, { path: "cart", element: l.jsx(BE, {}) }),
            l.jsx(he, { path: "order", element: l.jsx(tC, {}) }),
            l.jsx(he, { path: "profile/", element: l.jsx(fC, {}) }),
            l.jsx(he, { path: "lastpage", element: l.jsx(mC, {}) }),
          ],
        }),
        l.jsxs(he, {
          path: "admin",
          errorElement: l.jsx(hr, {}),
          children: [
            l.jsx(he, { index: !0, element: l.jsx(yC, {}) }),
            l.jsx(he, { path: "products", element: l.jsx(xC, {}) }),
            l.jsx(he, { path: "orders", element: l.jsx(vC, {}) }),
            l.jsx(he, { path: "users", element: l.jsx(jC, {}) }),
            l.jsx(he, { path: "summary", element: l.jsx(wC, {}) }),
            l.jsx(he, { path: "create-product", element: l.jsx(SC, {}) }),
            l.jsx(he, { path: "update-product", element: l.jsx(NC, {}) }),
          ],
        }),
        l.jsx(he, {
          path: "staff",
          element: l.jsx(EC, {}),
          errorElement: l.jsx(hr, {}),
        }),
        l.jsx(he, {
          path: "rider",
          element: l.jsx(DC, {}),
          errorElement: l.jsx(hr, {}),
        }),
        l.jsx(he, {
          path: "login",
          element: l.jsx(pC, {}),
          errorElement: l.jsx(hr, {}),
        }),
        l.jsx(he, {
          path: "register",
          element: l.jsx(hC, {}),
          errorElement: l.jsx(hr, {}),
        }),
        l.jsx(he, { path: "*", element: l.jsx(yE, {}) }),
      ],
    }),
  });
}
const FC = CS({
  reducer: {
    user: oC,
    product: bS,
    order: VE,
    cart: NE,
    summary: ZE,
    comment: TE,
    delivery: PC,
  },
});
pa.createRoot(document.getElementById("root")).render(
  l.jsx(z0, {
    store: FC,
    children: l.jsx(dt.StrictMode, { children: l.jsx(AC, {}) }),
  })
);
