import {
  init_chunk_4bd36a8f,
  y
} from "/build/_shared/chunk-3KZTRC5K.js";
import {
  __esm
} from "/build/_shared/chunk-DPSM2F2X.js";

// node_modules/.pnpm/@jspm+core@2.0.1/node_modules/@jspm/core/nodelibs/browser/events.js
var EventEmitter, defaultMaxListeners, init, listenerCount, on, once;
var init_events = __esm({
  "node_modules/.pnpm/@jspm+core@2.0.1/node_modules/@jspm/core/nodelibs/browser/events.js"() {
    init_chunk_4bd36a8f();
    init_chunk_4bd36a8f();
    y.once = function(emitter, event) {
      return new Promise((resolve, reject) => {
        function eventListener(...args) {
          if (errorListener !== void 0) {
            emitter.removeListener("error", errorListener);
          }
          resolve(args);
        }
        let errorListener;
        if (event !== "error") {
          errorListener = (err) => {
            emitter.removeListener(name, eventListener);
            reject(err);
          };
          emitter.once("error", errorListener);
        }
        emitter.once(event, eventListener);
      });
    };
    y.on = function(emitter, event) {
      const unconsumedEventValues = [];
      const unconsumedPromises = [];
      let error = null;
      let finished = false;
      const iterator = {
        async next() {
          const value = unconsumedEventValues.shift();
          if (value) {
            return createIterResult(value, false);
          }
          if (error) {
            const p4 = Promise.reject(error);
            error = null;
            return p4;
          }
          if (finished) {
            return createIterResult(void 0, true);
          }
          return new Promise((resolve, reject) => unconsumedPromises.push({ resolve, reject }));
        },
        async return() {
          emitter.removeListener(event, eventHandler);
          emitter.removeListener("error", errorHandler);
          finished = true;
          for (const promise of unconsumedPromises) {
            promise.resolve(createIterResult(void 0, true));
          }
          return createIterResult(void 0, true);
        },
        throw(err) {
          error = err;
          emitter.removeListener(event, eventHandler);
          emitter.removeListener("error", errorHandler);
        },
        [Symbol.asyncIterator]() {
          return this;
        }
      };
      emitter.on(event, eventHandler);
      emitter.on("error", errorHandler);
      return iterator;
      function eventHandler(...args) {
        const promise = unconsumedPromises.shift();
        if (promise) {
          promise.resolve(createIterResult(args, false));
        } else {
          unconsumedEventValues.push(args);
        }
      }
      function errorHandler(err) {
        finished = true;
        const toError = unconsumedPromises.shift();
        if (toError) {
          toError.reject(err);
        } else {
          error = err;
        }
        iterator.return();
      }
    };
    ({
      EventEmitter,
      defaultMaxListeners,
      init,
      listenerCount,
      on,
      once
    } = y);
  }
});

// node_modules/.pnpm/@jspm+core@2.0.1/node_modules/@jspm/core/nodelibs/browser/chunk-5decc758.js
function i() {
  throw new Error("setTimeout has not been defined");
}
function u() {
  throw new Error("clearTimeout has not been defined");
}
function c(e4) {
  if (t === setTimeout)
    return setTimeout(e4, 0);
  if ((t === i || !t) && setTimeout)
    return t = setTimeout, setTimeout(e4, 0);
  try {
    return t(e4, 0);
  } catch (n4) {
    try {
      return t.call(null, e4, 0);
    } catch (n5) {
      return t.call(this || r, e4, 0);
    }
  }
}
function h() {
  f && l && (f = false, l.length ? s = l.concat(s) : a = -1, s.length && d());
}
function d() {
  if (!f) {
    var e4 = c(h);
    f = true;
    for (var t4 = s.length; t4; ) {
      for (l = s, s = []; ++a < t4; )
        l && l[a].run();
      a = -1, t4 = s.length;
    }
    l = null, f = false, function(e5) {
      if (n === clearTimeout)
        return clearTimeout(e5);
      if ((n === u || !n) && clearTimeout)
        return n = clearTimeout, clearTimeout(e5);
      try {
        n(e5);
      } catch (t5) {
        try {
          return n.call(null, e5);
        } catch (t6) {
          return n.call(this || r, e5);
        }
      }
    }(e4);
  }
}
function m(e4, t4) {
  (this || r).fun = e4, (this || r).array = t4;
}
function p() {
}
var e, t, n, r, o, l, s, f, a, T;
var init_chunk_5decc758 = __esm({
  "node_modules/.pnpm/@jspm+core@2.0.1/node_modules/@jspm/core/nodelibs/browser/chunk-5decc758.js"() {
    r = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : globalThis;
    o = e = {};
    !function() {
      try {
        t = "function" == typeof setTimeout ? setTimeout : i;
      } catch (e4) {
        t = i;
      }
      try {
        n = "function" == typeof clearTimeout ? clearTimeout : u;
      } catch (e4) {
        n = u;
      }
    }();
    s = [];
    f = false;
    a = -1;
    o.nextTick = function(e4) {
      var t4 = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var n4 = 1; n4 < arguments.length; n4++)
          t4[n4 - 1] = arguments[n4];
      s.push(new m(e4, t4)), 1 !== s.length || f || c(d);
    }, m.prototype.run = function() {
      (this || r).fun.apply(null, (this || r).array);
    }, o.title = "browser", o.browser = true, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = p, o.addListener = p, o.once = p, o.off = p, o.removeListener = p, o.removeAllListeners = p, o.emit = p, o.prependListener = p, o.prependOnceListener = p, o.listeners = function(e4) {
      return [];
    }, o.binding = function(e4) {
      throw new Error("process.binding is not supported");
    }, o.cwd = function() {
      return "/";
    }, o.chdir = function(e4) {
      throw new Error("process.chdir is not supported");
    }, o.umask = function() {
      return 0;
    };
    T = e;
    T.addListener;
    T.argv;
    T.binding;
    T.browser;
    T.chdir;
    T.cwd;
    T.emit;
    T.env;
    T.listeners;
    T.nextTick;
    T.off;
    T.on;
    T.once;
    T.prependListener;
    T.prependOnceListener;
    T.removeAllListeners;
    T.removeListener;
    T.title;
    T.umask;
    T.version;
    T.versions;
  }
});

// node_modules/.pnpm/@jspm+core@2.0.1/node_modules/@jspm/core/nodelibs/browser/chunk-b4205b57.js
function c$1(e4) {
  return e4.call.bind(e4);
}
function O(e4, t4) {
  if ("object" != typeof e4)
    return false;
  try {
    return t4(e4), true;
  } catch (e5) {
    return false;
  }
}
function S(e4) {
  return l$1 && y2 ? void 0 !== b(e4) : B(e4) || k(e4) || E(e4) || D(e4) || U(e4) || P(e4) || x(e4) || I(e4) || M(e4) || z(e4) || F(e4);
}
function B(e4) {
  return l$1 && y2 ? "Uint8Array" === b(e4) : "[object Uint8Array]" === m2(e4) || u$1(e4) && void 0 !== e4.buffer;
}
function k(e4) {
  return l$1 && y2 ? "Uint8ClampedArray" === b(e4) : "[object Uint8ClampedArray]" === m2(e4);
}
function E(e4) {
  return l$1 && y2 ? "Uint16Array" === b(e4) : "[object Uint16Array]" === m2(e4);
}
function D(e4) {
  return l$1 && y2 ? "Uint32Array" === b(e4) : "[object Uint32Array]" === m2(e4);
}
function U(e4) {
  return l$1 && y2 ? "Int8Array" === b(e4) : "[object Int8Array]" === m2(e4);
}
function P(e4) {
  return l$1 && y2 ? "Int16Array" === b(e4) : "[object Int16Array]" === m2(e4);
}
function x(e4) {
  return l$1 && y2 ? "Int32Array" === b(e4) : "[object Int32Array]" === m2(e4);
}
function I(e4) {
  return l$1 && y2 ? "Float32Array" === b(e4) : "[object Float32Array]" === m2(e4);
}
function M(e4) {
  return l$1 && y2 ? "Float64Array" === b(e4) : "[object Float64Array]" === m2(e4);
}
function z(e4) {
  return l$1 && y2 ? "BigInt64Array" === b(e4) : "[object BigInt64Array]" === m2(e4);
}
function F(e4) {
  return l$1 && y2 ? "BigUint64Array" === b(e4) : "[object BigUint64Array]" === m2(e4);
}
function T2(e4) {
  return "[object Map]" === m2(e4);
}
function N(e4) {
  return "[object Set]" === m2(e4);
}
function W(e4) {
  return "[object WeakMap]" === m2(e4);
}
function $(e4) {
  return "[object WeakSet]" === m2(e4);
}
function C(e4) {
  return "[object ArrayBuffer]" === m2(e4);
}
function V(e4) {
  return "undefined" != typeof ArrayBuffer && (C.working ? C(e4) : e4 instanceof ArrayBuffer);
}
function G(e4) {
  return "[object DataView]" === m2(e4);
}
function R(e4) {
  return "undefined" != typeof DataView && (G.working ? G(e4) : e4 instanceof DataView);
}
function J(e4) {
  return "[object SharedArrayBuffer]" === m2(e4);
}
function _(e4) {
  return "undefined" != typeof SharedArrayBuffer && (J.working ? J(e4) : e4 instanceof SharedArrayBuffer);
}
function H(e4) {
  return O(e4, h2);
}
function Z(e4) {
  return O(e4, j);
}
function q(e4) {
  return O(e4, A);
}
function K(e4) {
  return s2 && O(e4, w);
}
function L(e4) {
  return p2 && O(e4, v);
}
function oe(e4, t4) {
  var r4 = { seen: [], stylize: fe };
  return arguments.length >= 3 && (r4.depth = arguments[2]), arguments.length >= 4 && (r4.colors = arguments[3]), ye(t4) ? r4.showHidden = t4 : t4 && X._extend(r4, t4), be(r4.showHidden) && (r4.showHidden = false), be(r4.depth) && (r4.depth = 2), be(r4.colors) && (r4.colors = false), be(r4.customInspect) && (r4.customInspect = true), r4.colors && (r4.stylize = ue), ae(r4, e4, r4.depth);
}
function ue(e4, t4) {
  var r4 = oe.styles[t4];
  return r4 ? "\x1B[" + oe.colors[r4][0] + "m" + e4 + "\x1B[" + oe.colors[r4][1] + "m" : e4;
}
function fe(e4, t4) {
  return e4;
}
function ae(e4, t4, r4) {
  if (e4.customInspect && t4 && we(t4.inspect) && t4.inspect !== X.inspect && (!t4.constructor || t4.constructor.prototype !== t4)) {
    var n4 = t4.inspect(r4, e4);
    return ge(n4) || (n4 = ae(e4, n4, r4)), n4;
  }
  var i4 = function(e5, t5) {
    if (be(t5))
      return e5.stylize("undefined", "undefined");
    if (ge(t5)) {
      var r5 = "'" + JSON.stringify(t5).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
      return e5.stylize(r5, "string");
    }
    if (de(t5))
      return e5.stylize("" + t5, "number");
    if (ye(t5))
      return e5.stylize("" + t5, "boolean");
    if (le(t5))
      return e5.stylize("null", "null");
  }(e4, t4);
  if (i4)
    return i4;
  var o4 = Object.keys(t4), u4 = function(e5) {
    var t5 = {};
    return e5.forEach(function(e6, r5) {
      t5[e6] = true;
    }), t5;
  }(o4);
  if (e4.showHidden && (o4 = Object.getOwnPropertyNames(t4)), Ae(t4) && (o4.indexOf("message") >= 0 || o4.indexOf("description") >= 0))
    return ce(t4);
  if (0 === o4.length) {
    if (we(t4)) {
      var f4 = t4.name ? ": " + t4.name : "";
      return e4.stylize("[Function" + f4 + "]", "special");
    }
    if (me(t4))
      return e4.stylize(RegExp.prototype.toString.call(t4), "regexp");
    if (je(t4))
      return e4.stylize(Date.prototype.toString.call(t4), "date");
    if (Ae(t4))
      return ce(t4);
  }
  var a4, c4 = "", s4 = false, p4 = ["{", "}"];
  (pe(t4) && (s4 = true, p4 = ["[", "]"]), we(t4)) && (c4 = " [Function" + (t4.name ? ": " + t4.name : "") + "]");
  return me(t4) && (c4 = " " + RegExp.prototype.toString.call(t4)), je(t4) && (c4 = " " + Date.prototype.toUTCString.call(t4)), Ae(t4) && (c4 = " " + ce(t4)), 0 !== o4.length || s4 && 0 != t4.length ? r4 < 0 ? me(t4) ? e4.stylize(RegExp.prototype.toString.call(t4), "regexp") : e4.stylize("[Object]", "special") : (e4.seen.push(t4), a4 = s4 ? function(e5, t5, r5, n5, i5) {
    for (var o5 = [], u5 = 0, f5 = t5.length; u5 < f5; ++u5)
      ke(t5, String(u5)) ? o5.push(se(e5, t5, r5, n5, String(u5), true)) : o5.push("");
    return i5.forEach(function(i6) {
      i6.match(/^\d+$/) || o5.push(se(e5, t5, r5, n5, i6, true));
    }), o5;
  }(e4, t4, r4, u4, o4) : o4.map(function(n5) {
    return se(e4, t4, r4, u4, n5, s4);
  }), e4.seen.pop(), function(e5, t5, r5) {
    var n5 = 0;
    if (e5.reduce(function(e6, t6) {
      return n5++, t6.indexOf("\n") >= 0 && n5++, e6 + t6.replace(/\u001b\[\d\d?m/g, "").length + 1;
    }, 0) > 60)
      return r5[0] + ("" === t5 ? "" : t5 + "\n ") + " " + e5.join(",\n  ") + " " + r5[1];
    return r5[0] + t5 + " " + e5.join(", ") + " " + r5[1];
  }(a4, c4, p4)) : p4[0] + c4 + p4[1];
}
function ce(e4) {
  return "[" + Error.prototype.toString.call(e4) + "]";
}
function se(e4, t4, r4, n4, i4, o4) {
  var u4, f4, a4;
  if ((a4 = Object.getOwnPropertyDescriptor(t4, i4) || { value: t4[i4] }).get ? f4 = a4.set ? e4.stylize("[Getter/Setter]", "special") : e4.stylize("[Getter]", "special") : a4.set && (f4 = e4.stylize("[Setter]", "special")), ke(n4, i4) || (u4 = "[" + i4 + "]"), f4 || (e4.seen.indexOf(a4.value) < 0 ? (f4 = le(r4) ? ae(e4, a4.value, null) : ae(e4, a4.value, r4 - 1)).indexOf("\n") > -1 && (f4 = o4 ? f4.split("\n").map(function(e5) {
    return "  " + e5;
  }).join("\n").substr(2) : "\n" + f4.split("\n").map(function(e5) {
    return "   " + e5;
  }).join("\n")) : f4 = e4.stylize("[Circular]", "special")), be(u4)) {
    if (o4 && i4.match(/^\d+$/))
      return f4;
    (u4 = JSON.stringify("" + i4)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (u4 = u4.substr(1, u4.length - 2), u4 = e4.stylize(u4, "name")) : (u4 = u4.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), u4 = e4.stylize(u4, "string"));
  }
  return u4 + ": " + f4;
}
function pe(e4) {
  return Array.isArray(e4);
}
function ye(e4) {
  return "boolean" == typeof e4;
}
function le(e4) {
  return null === e4;
}
function de(e4) {
  return "number" == typeof e4;
}
function ge(e4) {
  return "string" == typeof e4;
}
function be(e4) {
  return void 0 === e4;
}
function me(e4) {
  return he(e4) && "[object RegExp]" === ve(e4);
}
function he(e4) {
  return "object" == typeof e4 && null !== e4;
}
function je(e4) {
  return he(e4) && "[object Date]" === ve(e4);
}
function Ae(e4) {
  return he(e4) && ("[object Error]" === ve(e4) || e4 instanceof Error);
}
function we(e4) {
  return "function" == typeof e4;
}
function ve(e4) {
  return Object.prototype.toString.call(e4);
}
function Oe(e4) {
  return e4 < 10 ? "0" + e4.toString(10) : e4.toString(10);
}
function Be() {
  var e4 = /* @__PURE__ */ new Date(), t4 = [Oe(e4.getHours()), Oe(e4.getMinutes()), Oe(e4.getSeconds())].join(":");
  return [e4.getDate(), Se[e4.getMonth()], t4].join(" ");
}
function ke(e4, t4) {
  return Object.prototype.hasOwnProperty.call(e4, t4);
}
function De(e4, t4) {
  if (!e4) {
    var r4 = new Error("Promise was rejected with a falsy value");
    r4.reason = e4, e4 = r4;
  }
  return t4(e4);
}
var t2, e2, o2, n2, r2, l2, t$1, o$1, n$1, e$1, r$1, c2, u2, i2, t$2, i$1, o$2, u$1, f2, a2, s2, p2, y2, l$1, d2, m2, h2, j, A, Q, X, Y, ee, te, re, ne, ie, Se, Ee;
var init_chunk_b4205b57 = __esm({
  "node_modules/.pnpm/@jspm+core@2.0.1/node_modules/@jspm/core/nodelibs/browser/chunk-b4205b57.js"() {
    init_chunk_5decc758();
    t2 = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag;
    e2 = Object.prototype.toString;
    o2 = function(o4) {
      return !(t2 && o4 && "object" == typeof o4 && Symbol.toStringTag in o4) && "[object Arguments]" === e2.call(o4);
    };
    n2 = function(t4) {
      return !!o2(t4) || null !== t4 && "object" == typeof t4 && "number" == typeof t4.length && t4.length >= 0 && "[object Array]" !== e2.call(t4) && "[object Function]" === e2.call(t4.callee);
    };
    r2 = function() {
      return o2(arguments);
    }();
    o2.isLegacyArguments = n2;
    l2 = r2 ? o2 : n2;
    t$1 = Object.prototype.toString;
    o$1 = Function.prototype.toString;
    n$1 = /^\s*(?:function)?\*/;
    e$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag;
    r$1 = Object.getPrototypeOf;
    c2 = function() {
      if (!e$1)
        return false;
      try {
        return Function("return function*() {}")();
      } catch (t4) {
      }
    }();
    u2 = c2 ? r$1(c2) : {};
    i2 = function(c4) {
      return "function" == typeof c4 && (!!n$1.test(o$1.call(c4)) || (e$1 ? r$1(c4) === u2 : "[object GeneratorFunction]" === t$1.call(c4)));
    };
    t$2 = "function" == typeof Object.create ? function(t4, e4) {
      e4 && (t4.super_ = e4, t4.prototype = Object.create(e4.prototype, { constructor: { value: t4, enumerable: false, writable: true, configurable: true } }));
    } : function(t4, e4) {
      if (e4) {
        t4.super_ = e4;
        var o4 = function() {
        };
        o4.prototype = e4.prototype, t4.prototype = new o4(), t4.prototype.constructor = t4;
      }
    };
    i$1 = function(e4) {
      return e4 && "object" == typeof e4 && "function" == typeof e4.copy && "function" == typeof e4.fill && "function" == typeof e4.readUInt8;
    };
    o$2 = {};
    u$1 = i$1;
    f2 = l2;
    a2 = i2;
    s2 = "undefined" != typeof BigInt;
    p2 = "undefined" != typeof Symbol;
    y2 = p2 && void 0 !== Symbol.toStringTag;
    l$1 = "undefined" != typeof Uint8Array;
    d2 = "undefined" != typeof ArrayBuffer;
    if (l$1 && y2)
      var g = Object.getPrototypeOf(Uint8Array.prototype), b = c$1(Object.getOwnPropertyDescriptor(g, Symbol.toStringTag).get);
    m2 = c$1(Object.prototype.toString);
    h2 = c$1(Number.prototype.valueOf);
    j = c$1(String.prototype.valueOf);
    A = c$1(Boolean.prototype.valueOf);
    if (s2)
      var w = c$1(BigInt.prototype.valueOf);
    if (p2)
      var v = c$1(Symbol.prototype.valueOf);
    o$2.isArgumentsObject = f2, o$2.isGeneratorFunction = a2, o$2.isPromise = function(e4) {
      return "undefined" != typeof Promise && e4 instanceof Promise || null !== e4 && "object" == typeof e4 && "function" == typeof e4.then && "function" == typeof e4.catch;
    }, o$2.isArrayBufferView = function(e4) {
      return d2 && ArrayBuffer.isView ? ArrayBuffer.isView(e4) : S(e4) || R(e4);
    }, o$2.isTypedArray = S, o$2.isUint8Array = B, o$2.isUint8ClampedArray = k, o$2.isUint16Array = E, o$2.isUint32Array = D, o$2.isInt8Array = U, o$2.isInt16Array = P, o$2.isInt32Array = x, o$2.isFloat32Array = I, o$2.isFloat64Array = M, o$2.isBigInt64Array = z, o$2.isBigUint64Array = F, T2.working = "undefined" != typeof Map && T2(/* @__PURE__ */ new Map()), o$2.isMap = function(e4) {
      return "undefined" != typeof Map && (T2.working ? T2(e4) : e4 instanceof Map);
    }, N.working = "undefined" != typeof Set && N(/* @__PURE__ */ new Set()), o$2.isSet = function(e4) {
      return "undefined" != typeof Set && (N.working ? N(e4) : e4 instanceof Set);
    }, W.working = "undefined" != typeof WeakMap && W(/* @__PURE__ */ new WeakMap()), o$2.isWeakMap = function(e4) {
      return "undefined" != typeof WeakMap && (W.working ? W(e4) : e4 instanceof WeakMap);
    }, $.working = "undefined" != typeof WeakSet && $(/* @__PURE__ */ new WeakSet()), o$2.isWeakSet = function(e4) {
      return $(e4);
    }, C.working = "undefined" != typeof ArrayBuffer && C(new ArrayBuffer()), o$2.isArrayBuffer = V, G.working = "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView && G(new DataView(new ArrayBuffer(1), 0, 1)), o$2.isDataView = R, J.working = "undefined" != typeof SharedArrayBuffer && J(new SharedArrayBuffer()), o$2.isSharedArrayBuffer = _, o$2.isAsyncFunction = function(e4) {
      return "[object AsyncFunction]" === m2(e4);
    }, o$2.isMapIterator = function(e4) {
      return "[object Map Iterator]" === m2(e4);
    }, o$2.isSetIterator = function(e4) {
      return "[object Set Iterator]" === m2(e4);
    }, o$2.isGeneratorObject = function(e4) {
      return "[object Generator]" === m2(e4);
    }, o$2.isWebAssemblyCompiledModule = function(e4) {
      return "[object WebAssembly.Module]" === m2(e4);
    }, o$2.isNumberObject = H, o$2.isStringObject = Z, o$2.isBooleanObject = q, o$2.isBigIntObject = K, o$2.isSymbolObject = L, o$2.isBoxedPrimitive = function(e4) {
      return H(e4) || Z(e4) || q(e4) || K(e4) || L(e4);
    }, o$2.isAnyArrayBuffer = function(e4) {
      return l$1 && (V(e4) || _(e4));
    }, ["isProxy", "isExternal", "isModuleNamespaceObject"].forEach(function(e4) {
      Object.defineProperty(o$2, e4, { enumerable: false, value: function() {
        throw new Error(e4 + " is not supported in userland");
      } });
    });
    Q = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : globalThis;
    X = {};
    Y = T;
    ee = Object.getOwnPropertyDescriptors || function(e4) {
      for (var t4 = Object.keys(e4), r4 = {}, n4 = 0; n4 < t4.length; n4++)
        r4[t4[n4]] = Object.getOwnPropertyDescriptor(e4, t4[n4]);
      return r4;
    };
    te = /%[sdj%]/g;
    X.format = function(e4) {
      if (!ge(e4)) {
        for (var t4 = [], r4 = 0; r4 < arguments.length; r4++)
          t4.push(oe(arguments[r4]));
        return t4.join(" ");
      }
      r4 = 1;
      for (var n4 = arguments, i4 = n4.length, o4 = String(e4).replace(te, function(e5) {
        if ("%%" === e5)
          return "%";
        if (r4 >= i4)
          return e5;
        switch (e5) {
          case "%s":
            return String(n4[r4++]);
          case "%d":
            return Number(n4[r4++]);
          case "%j":
            try {
              return JSON.stringify(n4[r4++]);
            } catch (e6) {
              return "[Circular]";
            }
          default:
            return e5;
        }
      }), u4 = n4[r4]; r4 < i4; u4 = n4[++r4])
        le(u4) || !he(u4) ? o4 += " " + u4 : o4 += " " + oe(u4);
      return o4;
    }, X.deprecate = function(e4, t4) {
      if (void 0 !== Y && true === Y.noDeprecation)
        return e4;
      if (void 0 === Y)
        return function() {
          return X.deprecate(e4, t4).apply(this || Q, arguments);
        };
      var r4 = false;
      return function() {
        if (!r4) {
          if (Y.throwDeprecation)
            throw new Error(t4);
          Y.traceDeprecation ? console.trace(t4) : console.error(t4), r4 = true;
        }
        return e4.apply(this || Q, arguments);
      };
    };
    re = {};
    ne = /^$/;
    if (Y.env.NODE_DEBUG) {
      ie = Y.env.NODE_DEBUG;
      ie = ie.replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replace(/\*/g, ".*").replace(/,/g, "$|^").toUpperCase(), ne = new RegExp("^" + ie + "$", "i");
    }
    X.debuglog = function(e4) {
      if (e4 = e4.toUpperCase(), !re[e4])
        if (ne.test(e4)) {
          var t4 = Y.pid;
          re[e4] = function() {
            var r4 = X.format.apply(X, arguments);
            console.error("%s %d: %s", e4, t4, r4);
          };
        } else
          re[e4] = function() {
          };
      return re[e4];
    }, X.inspect = oe, oe.colors = { bold: [1, 22], italic: [3, 23], underline: [4, 24], inverse: [7, 27], white: [37, 39], grey: [90, 39], black: [30, 39], blue: [34, 39], cyan: [36, 39], green: [32, 39], magenta: [35, 39], red: [31, 39], yellow: [33, 39] }, oe.styles = { special: "cyan", number: "yellow", boolean: "yellow", undefined: "grey", null: "bold", string: "green", date: "magenta", regexp: "red" }, X.types = o$2, X.isArray = pe, X.isBoolean = ye, X.isNull = le, X.isNullOrUndefined = function(e4) {
      return null == e4;
    }, X.isNumber = de, X.isString = ge, X.isSymbol = function(e4) {
      return "symbol" == typeof e4;
    }, X.isUndefined = be, X.isRegExp = me, X.types.isRegExp = me, X.isObject = he, X.isDate = je, X.types.isDate = je, X.isError = Ae, X.types.isNativeError = Ae, X.isFunction = we, X.isPrimitive = function(e4) {
      return null === e4 || "boolean" == typeof e4 || "number" == typeof e4 || "string" == typeof e4 || "symbol" == typeof e4 || void 0 === e4;
    }, X.isBuffer = i$1;
    Se = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    X.log = function() {
      console.log("%s - %s", Be(), X.format.apply(X, arguments));
    }, X.inherits = t$2, X._extend = function(e4, t4) {
      if (!t4 || !he(t4))
        return e4;
      for (var r4 = Object.keys(t4), n4 = r4.length; n4--; )
        e4[r4[n4]] = t4[r4[n4]];
      return e4;
    };
    Ee = "undefined" != typeof Symbol ? Symbol("util.promisify.custom") : void 0;
    X.promisify = function(e4) {
      if ("function" != typeof e4)
        throw new TypeError('The "original" argument must be of type Function');
      if (Ee && e4[Ee]) {
        var t4;
        if ("function" != typeof (t4 = e4[Ee]))
          throw new TypeError('The "util.promisify.custom" argument must be of type Function');
        return Object.defineProperty(t4, Ee, { value: t4, enumerable: false, writable: false, configurable: true }), t4;
      }
      function t4() {
        for (var t5, r4, n4 = new Promise(function(e5, n5) {
          t5 = e5, r4 = n5;
        }), i4 = [], o4 = 0; o4 < arguments.length; o4++)
          i4.push(arguments[o4]);
        i4.push(function(e5, n5) {
          e5 ? r4(e5) : t5(n5);
        });
        try {
          e4.apply(this || Q, i4);
        } catch (e5) {
          r4(e5);
        }
        return n4;
      }
      return Object.setPrototypeOf(t4, Object.getPrototypeOf(e4)), Ee && Object.defineProperty(t4, Ee, { value: t4, enumerable: false, writable: false, configurable: true }), Object.defineProperties(t4, ee(e4));
    }, X.promisify.custom = Ee, X.callbackify = function(e4) {
      if ("function" != typeof e4)
        throw new TypeError('The "original" argument must be of type Function');
      function t4() {
        for (var t5 = [], r4 = 0; r4 < arguments.length; r4++)
          t5.push(arguments[r4]);
        var n4 = t5.pop();
        if ("function" != typeof n4)
          throw new TypeError("The last argument must be of type Function");
        var i4 = this || Q, o4 = function() {
          return n4.apply(i4, arguments);
        };
        e4.apply(this || Q, t5).then(function(e5) {
          Y.nextTick(o4.bind(null, null, e5));
        }, function(e5) {
          Y.nextTick(De.bind(null, e5, o4));
        });
      }
      return Object.setPrototypeOf(t4, Object.getPrototypeOf(e4)), Object.defineProperties(t4, ee(e4)), t4;
    };
  }
});

// node_modules/.pnpm/@jspm+core@2.0.1/node_modules/@jspm/core/nodelibs/browser/chunk-ce0fbc82.js
var _extend, callbackify, debuglog, deprecate, format, inherits, inspect, isArray, isBoolean, isBuffer, isDate, isError, isFunction, isNull, isNullOrUndefined, isNumber, isObject, isPrimitive, isRegExp, isString, isSymbol, isUndefined, log, promisify, types, TextEncoder, TextDecoder;
var init_chunk_ce0fbc82 = __esm({
  "node_modules/.pnpm/@jspm+core@2.0.1/node_modules/@jspm/core/nodelibs/browser/chunk-ce0fbc82.js"() {
    init_chunk_b4205b57();
    init_chunk_5decc758();
    X._extend;
    X.callbackify;
    X.debuglog;
    X.deprecate;
    X.format;
    X.inherits;
    X.inspect;
    X.isArray;
    X.isBoolean;
    X.isBuffer;
    X.isDate;
    X.isError;
    X.isFunction;
    X.isNull;
    X.isNullOrUndefined;
    X.isNumber;
    X.isObject;
    X.isPrimitive;
    X.isRegExp;
    X.isString;
    X.isSymbol;
    X.isUndefined;
    X.log;
    X.promisify;
    _extend = X._extend;
    callbackify = X.callbackify;
    debuglog = X.debuglog;
    deprecate = X.deprecate;
    format = X.format;
    inherits = X.inherits;
    inspect = X.inspect;
    isArray = X.isArray;
    isBoolean = X.isBoolean;
    isBuffer = X.isBuffer;
    isDate = X.isDate;
    isError = X.isError;
    isFunction = X.isFunction;
    isNull = X.isNull;
    isNullOrUndefined = X.isNullOrUndefined;
    isNumber = X.isNumber;
    isObject = X.isObject;
    isPrimitive = X.isPrimitive;
    isRegExp = X.isRegExp;
    isString = X.isString;
    isSymbol = X.isSymbol;
    isUndefined = X.isUndefined;
    log = X.log;
    promisify = X.promisify;
    types = X.types;
    TextEncoder = self.TextEncoder;
    TextDecoder = self.TextDecoder;
  }
});

// node_modules/.pnpm/@jspm+core@2.0.1/node_modules/@jspm/core/nodelibs/browser/chunk-2eac56ff.js
function dew() {
  if (_dewExec)
    return exports;
  _dewExec = true;
  var process2 = exports = {};
  var cachedSetTimeout;
  var cachedClearTimeout;
  function defaultSetTimout() {
    throw new Error("setTimeout has not been defined");
  }
  function defaultClearTimeout() {
    throw new Error("clearTimeout has not been defined");
  }
  (function() {
    try {
      if (typeof setTimeout === "function") {
        cachedSetTimeout = setTimeout;
      } else {
        cachedSetTimeout = defaultSetTimout;
      }
    } catch (e4) {
      cachedSetTimeout = defaultSetTimout;
    }
    try {
      if (typeof clearTimeout === "function") {
        cachedClearTimeout = clearTimeout;
      } else {
        cachedClearTimeout = defaultClearTimeout;
      }
    } catch (e4) {
      cachedClearTimeout = defaultClearTimeout;
    }
  })();
  function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
      return setTimeout(fun, 0);
    }
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
      cachedSetTimeout = setTimeout;
      return setTimeout(fun, 0);
    }
    try {
      return cachedSetTimeout(fun, 0);
    } catch (e4) {
      try {
        return cachedSetTimeout.call(null, fun, 0);
      } catch (e5) {
        return cachedSetTimeout.call(this || _global, fun, 0);
      }
    }
  }
  function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
      return clearTimeout(marker);
    }
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
      cachedClearTimeout = clearTimeout;
      return clearTimeout(marker);
    }
    try {
      return cachedClearTimeout(marker);
    } catch (e4) {
      try {
        return cachedClearTimeout.call(null, marker);
      } catch (e5) {
        return cachedClearTimeout.call(this || _global, marker);
      }
    }
  }
  var queue = [];
  var draining = false;
  var currentQueue;
  var queueIndex = -1;
  function cleanUpNextTick() {
    if (!draining || !currentQueue) {
      return;
    }
    draining = false;
    if (currentQueue.length) {
      queue = currentQueue.concat(queue);
    } else {
      queueIndex = -1;
    }
    if (queue.length) {
      drainQueue();
    }
  }
  function drainQueue() {
    if (draining) {
      return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while (len) {
      currentQueue = queue;
      queue = [];
      while (++queueIndex < len) {
        if (currentQueue) {
          currentQueue[queueIndex].run();
        }
      }
      queueIndex = -1;
      len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
  }
  process2.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
      for (var i4 = 1; i4 < arguments.length; i4++) {
        args[i4 - 1] = arguments[i4];
      }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
      runTimeout(drainQueue);
    }
  };
  function Item(fun, array) {
    (this || _global).fun = fun;
    (this || _global).array = array;
  }
  Item.prototype.run = function() {
    (this || _global).fun.apply(null, (this || _global).array);
  };
  process2.title = "browser";
  process2.browser = true;
  process2.env = {};
  process2.argv = [];
  process2.version = "";
  process2.versions = {};
  function noop() {
  }
  process2.on = noop;
  process2.addListener = noop;
  process2.once = noop;
  process2.off = noop;
  process2.removeListener = noop;
  process2.removeAllListeners = noop;
  process2.emit = noop;
  process2.prependListener = noop;
  process2.prependOnceListener = noop;
  process2.listeners = function(name2) {
    return [];
  };
  process2.binding = function(name2) {
    throw new Error("process.binding is not supported");
  };
  process2.cwd = function() {
    return "/";
  };
  process2.chdir = function(dir) {
    throw new Error("process.chdir is not supported");
  };
  process2.umask = function() {
    return 0;
  };
  return exports;
}
var exports, _dewExec, _global, process;
var init_chunk_2eac56ff = __esm({
  "node_modules/.pnpm/@jspm+core@2.0.1/node_modules/@jspm/core/nodelibs/browser/chunk-2eac56ff.js"() {
    exports = {};
    _dewExec = false;
    _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : globalThis;
    process = dew();
    process.platform = "browser";
    process.addListener;
    process.argv;
    process.binding;
    process.browser;
    process.chdir;
    process.cwd;
    process.emit;
    process.env;
    process.listeners;
    process.nextTick;
    process.off;
    process.on;
    process.once;
    process.prependListener;
    process.prependOnceListener;
    process.removeAllListeners;
    process.removeListener;
    process.title;
    process.umask;
    process.version;
    process.versions;
  }
});

// node_modules/.pnpm/@jspm+core@2.0.1/node_modules/@jspm/core/nodelibs/browser/chunk-4ccc3a29.js
function u$2(r4) {
  var t4 = r4.length;
  if (t4 % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var e4 = r4.indexOf("=");
  return -1 === e4 && (e4 = t4), [e4, e4 === t4 ? 0 : 4 - e4 % 4];
}
function c$12(r4, e4, n4) {
  for (var o4, a4, h4 = [], u4 = e4; u4 < n4; u4 += 3)
    o4 = (r4[u4] << 16 & 16711680) + (r4[u4 + 1] << 8 & 65280) + (255 & r4[u4 + 2]), h4.push(t$12[(a4 = o4) >> 18 & 63] + t$12[a4 >> 12 & 63] + t$12[a4 >> 6 & 63] + t$12[63 & a4]);
  return h4.join("");
}
function f$2(t4) {
  if (t4 > 2147483647)
    throw new RangeError('The value "' + t4 + '" is invalid for option "size"');
  var r4 = new Uint8Array(t4);
  return Object.setPrototypeOf(r4, u$1$1.prototype), r4;
}
function u$1$1(t4, r4, e4) {
  if ("number" == typeof t4) {
    if ("string" == typeof r4)
      throw new TypeError('The "string" argument must be of type string. Received type number');
    return a$2(t4);
  }
  return s$1(t4, r4, e4);
}
function s$1(t4, r4, e4) {
  if ("string" == typeof t4)
    return function(t5, r5) {
      "string" == typeof r5 && "" !== r5 || (r5 = "utf8");
      if (!u$1$1.isEncoding(r5))
        throw new TypeError("Unknown encoding: " + r5);
      var e5 = 0 | y3(t5, r5), n5 = f$2(e5), i5 = n5.write(t5, r5);
      i5 !== e5 && (n5 = n5.slice(0, i5));
      return n5;
    }(t4, r4);
  if (ArrayBuffer.isView(t4))
    return p3(t4);
  if (null == t4)
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t4);
  if (F2(t4, ArrayBuffer) || t4 && F2(t4.buffer, ArrayBuffer))
    return c$1$1(t4, r4, e4);
  if ("undefined" != typeof SharedArrayBuffer && (F2(t4, SharedArrayBuffer) || t4 && F2(t4.buffer, SharedArrayBuffer)))
    return c$1$1(t4, r4, e4);
  if ("number" == typeof t4)
    throw new TypeError('The "value" argument must not be of type number. Received type number');
  var n4 = t4.valueOf && t4.valueOf();
  if (null != n4 && n4 !== t4)
    return u$1$1.from(n4, r4, e4);
  var i4 = function(t5) {
    if (u$1$1.isBuffer(t5)) {
      var r5 = 0 | l$12(t5.length), e5 = f$2(r5);
      return 0 === e5.length || t5.copy(e5, 0, 0, r5), e5;
    }
    if (void 0 !== t5.length)
      return "number" != typeof t5.length || N2(t5.length) ? f$2(0) : p3(t5);
    if ("Buffer" === t5.type && Array.isArray(t5.data))
      return p3(t5.data);
  }(t4);
  if (i4)
    return i4;
  if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof t4[Symbol.toPrimitive])
    return u$1$1.from(t4[Symbol.toPrimitive]("string"), r4, e4);
  throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t4);
}
function h$1$1(t4) {
  if ("number" != typeof t4)
    throw new TypeError('"size" argument must be of type number');
  if (t4 < 0)
    throw new RangeError('The value "' + t4 + '" is invalid for option "size"');
}
function a$2(t4) {
  return h$1$1(t4), f$2(t4 < 0 ? 0 : 0 | l$12(t4));
}
function p3(t4) {
  for (var r4 = t4.length < 0 ? 0 : 0 | l$12(t4.length), e4 = f$2(r4), n4 = 0; n4 < r4; n4 += 1)
    e4[n4] = 255 & t4[n4];
  return e4;
}
function c$1$1(t4, r4, e4) {
  if (r4 < 0 || t4.byteLength < r4)
    throw new RangeError('"offset" is outside of buffer bounds');
  if (t4.byteLength < r4 + (e4 || 0))
    throw new RangeError('"length" is outside of buffer bounds');
  var n4;
  return n4 = void 0 === r4 && void 0 === e4 ? new Uint8Array(t4) : void 0 === e4 ? new Uint8Array(t4, r4) : new Uint8Array(t4, r4, e4), Object.setPrototypeOf(n4, u$1$1.prototype), n4;
}
function l$12(t4) {
  if (t4 >= 2147483647)
    throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + 2147483647 .toString(16) + " bytes");
  return 0 | t4;
}
function y3(t4, r4) {
  if (u$1$1.isBuffer(t4))
    return t4.length;
  if (ArrayBuffer.isView(t4) || F2(t4, ArrayBuffer))
    return t4.byteLength;
  if ("string" != typeof t4)
    throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof t4);
  var e4 = t4.length, n4 = arguments.length > 2 && true === arguments[2];
  if (!n4 && 0 === e4)
    return 0;
  for (var i4 = false; ; )
    switch (r4) {
      case "ascii":
      case "latin1":
      case "binary":
        return e4;
      case "utf8":
      case "utf-8":
        return _2(t4).length;
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return 2 * e4;
      case "hex":
        return e4 >>> 1;
      case "base64":
        return z2(t4).length;
      default:
        if (i4)
          return n4 ? -1 : _2(t4).length;
        r4 = ("" + r4).toLowerCase(), i4 = true;
    }
}
function g2(t4, r4, e4) {
  var n4 = false;
  if ((void 0 === r4 || r4 < 0) && (r4 = 0), r4 > this.length)
    return "";
  if ((void 0 === e4 || e4 > this.length) && (e4 = this.length), e4 <= 0)
    return "";
  if ((e4 >>>= 0) <= (r4 >>>= 0))
    return "";
  for (t4 || (t4 = "utf8"); ; )
    switch (t4) {
      case "hex":
        return O2(this, r4, e4);
      case "utf8":
      case "utf-8":
        return I2(this, r4, e4);
      case "ascii":
        return S2(this, r4, e4);
      case "latin1":
      case "binary":
        return R2(this, r4, e4);
      case "base64":
        return T3(this, r4, e4);
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return L2(this, r4, e4);
      default:
        if (n4)
          throw new TypeError("Unknown encoding: " + t4);
        t4 = (t4 + "").toLowerCase(), n4 = true;
    }
}
function w2(t4, r4, e4) {
  var n4 = t4[r4];
  t4[r4] = t4[e4], t4[e4] = n4;
}
function d3(t4, r4, e4, n4, i4) {
  if (0 === t4.length)
    return -1;
  if ("string" == typeof e4 ? (n4 = e4, e4 = 0) : e4 > 2147483647 ? e4 = 2147483647 : e4 < -2147483648 && (e4 = -2147483648), N2(e4 = +e4) && (e4 = i4 ? 0 : t4.length - 1), e4 < 0 && (e4 = t4.length + e4), e4 >= t4.length) {
    if (i4)
      return -1;
    e4 = t4.length - 1;
  } else if (e4 < 0) {
    if (!i4)
      return -1;
    e4 = 0;
  }
  if ("string" == typeof r4 && (r4 = u$1$1.from(r4, n4)), u$1$1.isBuffer(r4))
    return 0 === r4.length ? -1 : v2(t4, r4, e4, n4, i4);
  if ("number" == typeof r4)
    return r4 &= 255, "function" == typeof Uint8Array.prototype.indexOf ? i4 ? Uint8Array.prototype.indexOf.call(t4, r4, e4) : Uint8Array.prototype.lastIndexOf.call(t4, r4, e4) : v2(t4, [r4], e4, n4, i4);
  throw new TypeError("val must be string, number or Buffer");
}
function v2(t4, r4, e4, n4, i4) {
  var o4, f4 = 1, u4 = t4.length, s4 = r4.length;
  if (void 0 !== n4 && ("ucs2" === (n4 = String(n4).toLowerCase()) || "ucs-2" === n4 || "utf16le" === n4 || "utf-16le" === n4)) {
    if (t4.length < 2 || r4.length < 2)
      return -1;
    f4 = 2, u4 /= 2, s4 /= 2, e4 /= 2;
  }
  function h4(t5, r5) {
    return 1 === f4 ? t5[r5] : t5.readUInt16BE(r5 * f4);
  }
  if (i4) {
    var a4 = -1;
    for (o4 = e4; o4 < u4; o4++)
      if (h4(t4, o4) === h4(r4, -1 === a4 ? 0 : o4 - a4)) {
        if (-1 === a4 && (a4 = o4), o4 - a4 + 1 === s4)
          return a4 * f4;
      } else
        -1 !== a4 && (o4 -= o4 - a4), a4 = -1;
  } else
    for (e4 + s4 > u4 && (e4 = u4 - s4), o4 = e4; o4 >= 0; o4--) {
      for (var p4 = true, c4 = 0; c4 < s4; c4++)
        if (h4(t4, o4 + c4) !== h4(r4, c4)) {
          p4 = false;
          break;
        }
      if (p4)
        return o4;
    }
  return -1;
}
function b2(t4, r4, e4, n4) {
  e4 = Number(e4) || 0;
  var i4 = t4.length - e4;
  n4 ? (n4 = Number(n4)) > i4 && (n4 = i4) : n4 = i4;
  var o4 = r4.length;
  n4 > o4 / 2 && (n4 = o4 / 2);
  for (var f4 = 0; f4 < n4; ++f4) {
    var u4 = parseInt(r4.substr(2 * f4, 2), 16);
    if (N2(u4))
      return f4;
    t4[e4 + f4] = u4;
  }
  return f4;
}
function m3(t4, r4, e4, n4) {
  return D2(_2(r4, t4.length - e4), t4, e4, n4);
}
function E2(t4, r4, e4, n4) {
  return D2(function(t5) {
    for (var r5 = [], e5 = 0; e5 < t5.length; ++e5)
      r5.push(255 & t5.charCodeAt(e5));
    return r5;
  }(r4), t4, e4, n4);
}
function B2(t4, r4, e4, n4) {
  return E2(t4, r4, e4, n4);
}
function A2(t4, r4, e4, n4) {
  return D2(z2(r4), t4, e4, n4);
}
function U2(t4, r4, e4, n4) {
  return D2(function(t5, r5) {
    for (var e5, n5, i4, o4 = [], f4 = 0; f4 < t5.length && !((r5 -= 2) < 0); ++f4)
      e5 = t5.charCodeAt(f4), n5 = e5 >> 8, i4 = e5 % 256, o4.push(i4), o4.push(n5);
    return o4;
  }(r4, t4.length - e4), t4, e4, n4);
}
function T3(t4, r4, e4) {
  return 0 === r4 && e4 === t4.length ? n$1$1.fromByteArray(t4) : n$1$1.fromByteArray(t4.slice(r4, e4));
}
function I2(t4, r4, e4) {
  e4 = Math.min(t4.length, e4);
  for (var n4 = [], i4 = r4; i4 < e4; ) {
    var o4, f4, u4, s4, h4 = t4[i4], a4 = null, p4 = h4 > 239 ? 4 : h4 > 223 ? 3 : h4 > 191 ? 2 : 1;
    if (i4 + p4 <= e4)
      switch (p4) {
        case 1:
          h4 < 128 && (a4 = h4);
          break;
        case 2:
          128 == (192 & (o4 = t4[i4 + 1])) && (s4 = (31 & h4) << 6 | 63 & o4) > 127 && (a4 = s4);
          break;
        case 3:
          o4 = t4[i4 + 1], f4 = t4[i4 + 2], 128 == (192 & o4) && 128 == (192 & f4) && (s4 = (15 & h4) << 12 | (63 & o4) << 6 | 63 & f4) > 2047 && (s4 < 55296 || s4 > 57343) && (a4 = s4);
          break;
        case 4:
          o4 = t4[i4 + 1], f4 = t4[i4 + 2], u4 = t4[i4 + 3], 128 == (192 & o4) && 128 == (192 & f4) && 128 == (192 & u4) && (s4 = (15 & h4) << 18 | (63 & o4) << 12 | (63 & f4) << 6 | 63 & u4) > 65535 && s4 < 1114112 && (a4 = s4);
      }
    null === a4 ? (a4 = 65533, p4 = 1) : a4 > 65535 && (a4 -= 65536, n4.push(a4 >>> 10 & 1023 | 55296), a4 = 56320 | 1023 & a4), n4.push(a4), i4 += p4;
  }
  return function(t5) {
    var r5 = t5.length;
    if (r5 <= 4096)
      return String.fromCharCode.apply(String, t5);
    var e5 = "", n5 = 0;
    for (; n5 < r5; )
      e5 += String.fromCharCode.apply(String, t5.slice(n5, n5 += 4096));
    return e5;
  }(n4);
}
function S2(t4, r4, e4) {
  var n4 = "";
  e4 = Math.min(t4.length, e4);
  for (var i4 = r4; i4 < e4; ++i4)
    n4 += String.fromCharCode(127 & t4[i4]);
  return n4;
}
function R2(t4, r4, e4) {
  var n4 = "";
  e4 = Math.min(t4.length, e4);
  for (var i4 = r4; i4 < e4; ++i4)
    n4 += String.fromCharCode(t4[i4]);
  return n4;
}
function O2(t4, r4, e4) {
  var n4 = t4.length;
  (!r4 || r4 < 0) && (r4 = 0), (!e4 || e4 < 0 || e4 > n4) && (e4 = n4);
  for (var i4 = "", o4 = r4; o4 < e4; ++o4)
    i4 += Y2[t4[o4]];
  return i4;
}
function L2(t4, r4, e4) {
  for (var n4 = t4.slice(r4, e4), i4 = "", o4 = 0; o4 < n4.length; o4 += 2)
    i4 += String.fromCharCode(n4[o4] + 256 * n4[o4 + 1]);
  return i4;
}
function x2(t4, r4, e4) {
  if (t4 % 1 != 0 || t4 < 0)
    throw new RangeError("offset is not uint");
  if (t4 + r4 > e4)
    throw new RangeError("Trying to access beyond buffer length");
}
function C2(t4, r4, e4, n4, i4, o4) {
  if (!u$1$1.isBuffer(t4))
    throw new TypeError('"buffer" argument must be a Buffer instance');
  if (r4 > i4 || r4 < o4)
    throw new RangeError('"value" argument is out of bounds');
  if (e4 + n4 > t4.length)
    throw new RangeError("Index out of range");
}
function P2(t4, r4, e4, n4, i4, o4) {
  if (e4 + n4 > t4.length)
    throw new RangeError("Index out of range");
  if (e4 < 0)
    throw new RangeError("Index out of range");
}
function k2(t4, r4, e4, n4, o4) {
  return r4 = +r4, e4 >>>= 0, o4 || P2(t4, 0, e4, 4), i$12.write(t4, r4, e4, n4, 23, 4), e4 + 4;
}
function M2(t4, r4, e4, n4, o4) {
  return r4 = +r4, e4 >>>= 0, o4 || P2(t4, 0, e4, 8), i$12.write(t4, r4, e4, n4, 52, 8), e4 + 8;
}
function _2(t4, r4) {
  var e4;
  r4 = r4 || 1 / 0;
  for (var n4 = t4.length, i4 = null, o4 = [], f4 = 0; f4 < n4; ++f4) {
    if ((e4 = t4.charCodeAt(f4)) > 55295 && e4 < 57344) {
      if (!i4) {
        if (e4 > 56319) {
          (r4 -= 3) > -1 && o4.push(239, 191, 189);
          continue;
        }
        if (f4 + 1 === n4) {
          (r4 -= 3) > -1 && o4.push(239, 191, 189);
          continue;
        }
        i4 = e4;
        continue;
      }
      if (e4 < 56320) {
        (r4 -= 3) > -1 && o4.push(239, 191, 189), i4 = e4;
        continue;
      }
      e4 = 65536 + (i4 - 55296 << 10 | e4 - 56320);
    } else
      i4 && (r4 -= 3) > -1 && o4.push(239, 191, 189);
    if (i4 = null, e4 < 128) {
      if ((r4 -= 1) < 0)
        break;
      o4.push(e4);
    } else if (e4 < 2048) {
      if ((r4 -= 2) < 0)
        break;
      o4.push(e4 >> 6 | 192, 63 & e4 | 128);
    } else if (e4 < 65536) {
      if ((r4 -= 3) < 0)
        break;
      o4.push(e4 >> 12 | 224, e4 >> 6 & 63 | 128, 63 & e4 | 128);
    } else {
      if (!(e4 < 1114112))
        throw new Error("Invalid code point");
      if ((r4 -= 4) < 0)
        break;
      o4.push(e4 >> 18 | 240, e4 >> 12 & 63 | 128, e4 >> 6 & 63 | 128, 63 & e4 | 128);
    }
  }
  return o4;
}
function z2(t4) {
  return n$1$1.toByteArray(function(t5) {
    if ((t5 = (t5 = t5.split("=")[0]).trim().replace(j2, "")).length < 2)
      return "";
    for (; t5.length % 4 != 0; )
      t5 += "=";
    return t5;
  }(t4));
}
function D2(t4, r4, e4, n4) {
  for (var i4 = 0; i4 < n4 && !(i4 + e4 >= r4.length || i4 >= t4.length); ++i4)
    r4[i4 + e4] = t4[i4];
  return i4;
}
function F2(t4, r4) {
  return t4 instanceof r4 || null != t4 && null != t4.constructor && null != t4.constructor.name && t4.constructor.name === r4.name;
}
function N2(t4) {
  return t4 != t4;
}
function t3(r4, e4) {
  for (var n4 in r4)
    e4[n4] = r4[n4];
}
function f3(r4, e4, n4) {
  return o3(r4, e4, n4);
}
function a3(t4) {
  var e4;
  switch (this.encoding = function(t5) {
    var e5 = function(t6) {
      if (!t6)
        return "utf8";
      for (var e6; ; )
        switch (t6) {
          case "utf8":
          case "utf-8":
            return "utf8";
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return "utf16le";
          case "latin1":
          case "binary":
            return "latin1";
          case "base64":
          case "ascii":
          case "hex":
            return t6;
          default:
            if (e6)
              return;
            t6 = ("" + t6).toLowerCase(), e6 = true;
        }
    }(t5);
    if ("string" != typeof e5 && (s3.isEncoding === i3 || !i3(t5)))
      throw new Error("Unknown encoding: " + t5);
    return e5 || t5;
  }(t4), this.encoding) {
    case "utf16le":
      this.text = h3, this.end = l3, e4 = 4;
      break;
    case "utf8":
      this.fillLast = n$12, e4 = 4;
      break;
    case "base64":
      this.text = u$12, this.end = o$12, e4 = 3;
      break;
    default:
      return this.write = f$1, this.end = c3, void 0;
  }
  this.lastNeed = 0, this.lastTotal = 0, this.lastChar = s3.allocUnsafe(e4);
}
function r3(t4) {
  return t4 <= 127 ? 0 : t4 >> 5 == 6 ? 2 : t4 >> 4 == 14 ? 3 : t4 >> 3 == 30 ? 4 : t4 >> 6 == 2 ? -1 : -2;
}
function n$12(t4) {
  var e4 = this.lastTotal - this.lastNeed, s4 = function(t5, e5, s5) {
    if (128 != (192 & e5[0]))
      return t5.lastNeed = 0, "\uFFFD";
    if (t5.lastNeed > 1 && e5.length > 1) {
      if (128 != (192 & e5[1]))
        return t5.lastNeed = 1, "\uFFFD";
      if (t5.lastNeed > 2 && e5.length > 2 && 128 != (192 & e5[2]))
        return t5.lastNeed = 2, "\uFFFD";
    }
  }(this, t4);
  return void 0 !== s4 ? s4 : this.lastNeed <= t4.length ? (t4.copy(this.lastChar, e4, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal)) : (t4.copy(this.lastChar, e4, 0, t4.length), this.lastNeed -= t4.length, void 0);
}
function h3(t4, e4) {
  if ((t4.length - e4) % 2 == 0) {
    var s4 = t4.toString("utf16le", e4);
    if (s4) {
      var i4 = s4.charCodeAt(s4.length - 1);
      if (i4 >= 55296 && i4 <= 56319)
        return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = t4[t4.length - 2], this.lastChar[1] = t4[t4.length - 1], s4.slice(0, -1);
    }
    return s4;
  }
  return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = t4[t4.length - 1], t4.toString("utf16le", e4, t4.length - 1);
}
function l3(t4) {
  var e4 = t4 && t4.length ? this.write(t4) : "";
  if (this.lastNeed) {
    var s4 = this.lastTotal - this.lastNeed;
    return e4 + this.lastChar.toString("utf16le", 0, s4);
  }
  return e4;
}
function u$12(t4, e4) {
  var s4 = (t4.length - e4) % 3;
  return 0 === s4 ? t4.toString("base64", e4) : (this.lastNeed = 3 - s4, this.lastTotal = 3, 1 === s4 ? this.lastChar[0] = t4[t4.length - 1] : (this.lastChar[0] = t4[t4.length - 2], this.lastChar[1] = t4[t4.length - 1]), t4.toString("base64", e4, t4.length - s4));
}
function o$12(t4) {
  var e4 = t4 && t4.length ? this.write(t4) : "";
  return this.lastNeed ? e4 + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : e4;
}
function f$1(t4) {
  return t4.toString(this.encoding);
}
function c3(t4) {
  return t4 && t4.length ? this.write(t4) : "";
}
var r$12, t$12, e$2, n$2, o$22, a$1, h$1, a$1$1, e$1$1, n$1$1, i$12, o$1$1, j2, Y2, e3, n3, o3, u3, e$12, s3, i3;
var init_chunk_4ccc3a29 = __esm({
  "node_modules/.pnpm/@jspm+core@2.0.1/node_modules/@jspm/core/nodelibs/browser/chunk-4ccc3a29.js"() {
    for (r$12 = { byteLength: function(r4) {
      var t4 = u$2(r4), e4 = t4[0], n4 = t4[1];
      return 3 * (e4 + n4) / 4 - n4;
    }, toByteArray: function(r4) {
      var t4, o4, a4 = u$2(r4), h4 = a4[0], c4 = a4[1], d4 = new n$2(function(r5, t5, e4) {
        return 3 * (t5 + e4) / 4 - e4;
      }(0, h4, c4)), f4 = 0, A3 = c4 > 0 ? h4 - 4 : h4;
      for (o4 = 0; o4 < A3; o4 += 4)
        t4 = e$2[r4.charCodeAt(o4)] << 18 | e$2[r4.charCodeAt(o4 + 1)] << 12 | e$2[r4.charCodeAt(o4 + 2)] << 6 | e$2[r4.charCodeAt(o4 + 3)], d4[f4++] = t4 >> 16 & 255, d4[f4++] = t4 >> 8 & 255, d4[f4++] = 255 & t4;
      2 === c4 && (t4 = e$2[r4.charCodeAt(o4)] << 2 | e$2[r4.charCodeAt(o4 + 1)] >> 4, d4[f4++] = 255 & t4);
      1 === c4 && (t4 = e$2[r4.charCodeAt(o4)] << 10 | e$2[r4.charCodeAt(o4 + 1)] << 4 | e$2[r4.charCodeAt(o4 + 2)] >> 2, d4[f4++] = t4 >> 8 & 255, d4[f4++] = 255 & t4);
      return d4;
    }, fromByteArray: function(r4) {
      for (var e4, n4 = r4.length, o4 = n4 % 3, a4 = [], h4 = 0, u4 = n4 - o4; h4 < u4; h4 += 16383)
        a4.push(c$12(r4, h4, h4 + 16383 > u4 ? u4 : h4 + 16383));
      1 === o4 ? (e4 = r4[n4 - 1], a4.push(t$12[e4 >> 2] + t$12[e4 << 4 & 63] + "==")) : 2 === o4 && (e4 = (r4[n4 - 2] << 8) + r4[n4 - 1], a4.push(t$12[e4 >> 10] + t$12[e4 >> 4 & 63] + t$12[e4 << 2 & 63] + "="));
      return a4.join("");
    } }, t$12 = [], e$2 = [], n$2 = "undefined" != typeof Uint8Array ? Uint8Array : Array, o$22 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a$1 = 0, h$1 = o$22.length; a$1 < h$1; ++a$1)
      t$12[a$1] = o$22[a$1], e$2[o$22.charCodeAt(a$1)] = a$1;
    e$2["-".charCodeAt(0)] = 62, e$2["_".charCodeAt(0)] = 63;
    a$1$1 = { read: function(a4, t4, o4, r4, h4) {
      var M3, f4, p4 = 8 * h4 - r4 - 1, w3 = (1 << p4) - 1, e4 = w3 >> 1, i4 = -7, N3 = o4 ? h4 - 1 : 0, n4 = o4 ? -1 : 1, u4 = a4[t4 + N3];
      for (N3 += n4, M3 = u4 & (1 << -i4) - 1, u4 >>= -i4, i4 += p4; i4 > 0; M3 = 256 * M3 + a4[t4 + N3], N3 += n4, i4 -= 8)
        ;
      for (f4 = M3 & (1 << -i4) - 1, M3 >>= -i4, i4 += r4; i4 > 0; f4 = 256 * f4 + a4[t4 + N3], N3 += n4, i4 -= 8)
        ;
      if (0 === M3)
        M3 = 1 - e4;
      else {
        if (M3 === w3)
          return f4 ? NaN : 1 / 0 * (u4 ? -1 : 1);
        f4 += Math.pow(2, r4), M3 -= e4;
      }
      return (u4 ? -1 : 1) * f4 * Math.pow(2, M3 - r4);
    }, write: function(a4, t4, o4, r4, h4, M3) {
      var f4, p4, w3, e4 = 8 * M3 - h4 - 1, i4 = (1 << e4) - 1, N3 = i4 >> 1, n4 = 23 === h4 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, u4 = r4 ? 0 : M3 - 1, l4 = r4 ? 1 : -1, s4 = t4 < 0 || 0 === t4 && 1 / t4 < 0 ? 1 : 0;
      for (t4 = Math.abs(t4), isNaN(t4) || t4 === 1 / 0 ? (p4 = isNaN(t4) ? 1 : 0, f4 = i4) : (f4 = Math.floor(Math.log(t4) / Math.LN2), t4 * (w3 = Math.pow(2, -f4)) < 1 && (f4--, w3 *= 2), (t4 += f4 + N3 >= 1 ? n4 / w3 : n4 * Math.pow(2, 1 - N3)) * w3 >= 2 && (f4++, w3 /= 2), f4 + N3 >= i4 ? (p4 = 0, f4 = i4) : f4 + N3 >= 1 ? (p4 = (t4 * w3 - 1) * Math.pow(2, h4), f4 += N3) : (p4 = t4 * Math.pow(2, N3 - 1) * Math.pow(2, h4), f4 = 0)); h4 >= 8; a4[o4 + u4] = 255 & p4, u4 += l4, p4 /= 256, h4 -= 8)
        ;
      for (f4 = f4 << h4 | p4, e4 += h4; e4 > 0; a4[o4 + u4] = 255 & f4, u4 += l4, f4 /= 256, e4 -= 8)
        ;
      a4[o4 + u4 - l4] |= 128 * s4;
    } };
    e$1$1 = {};
    n$1$1 = r$12;
    i$12 = a$1$1;
    o$1$1 = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;
    e$1$1.Buffer = u$1$1, e$1$1.SlowBuffer = function(t4) {
      +t4 != t4 && (t4 = 0);
      return u$1$1.alloc(+t4);
    }, e$1$1.INSPECT_MAX_BYTES = 50;
    e$1$1.kMaxLength = 2147483647, u$1$1.TYPED_ARRAY_SUPPORT = function() {
      try {
        var t4 = new Uint8Array(1), r4 = { foo: function() {
          return 42;
        } };
        return Object.setPrototypeOf(r4, Uint8Array.prototype), Object.setPrototypeOf(t4, r4), 42 === t4.foo();
      } catch (t5) {
        return false;
      }
    }(), u$1$1.TYPED_ARRAY_SUPPORT || "undefined" == typeof console || "function" != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(u$1$1.prototype, "parent", { enumerable: true, get: function() {
      if (u$1$1.isBuffer(this))
        return this.buffer;
    } }), Object.defineProperty(u$1$1.prototype, "offset", { enumerable: true, get: function() {
      if (u$1$1.isBuffer(this))
        return this.byteOffset;
    } }), u$1$1.poolSize = 8192, u$1$1.from = function(t4, r4, e4) {
      return s$1(t4, r4, e4);
    }, Object.setPrototypeOf(u$1$1.prototype, Uint8Array.prototype), Object.setPrototypeOf(u$1$1, Uint8Array), u$1$1.alloc = function(t4, r4, e4) {
      return function(t5, r5, e5) {
        return h$1$1(t5), t5 <= 0 ? f$2(t5) : void 0 !== r5 ? "string" == typeof e5 ? f$2(t5).fill(r5, e5) : f$2(t5).fill(r5) : f$2(t5);
      }(t4, r4, e4);
    }, u$1$1.allocUnsafe = function(t4) {
      return a$2(t4);
    }, u$1$1.allocUnsafeSlow = function(t4) {
      return a$2(t4);
    }, u$1$1.isBuffer = function(t4) {
      return null != t4 && true === t4._isBuffer && t4 !== u$1$1.prototype;
    }, u$1$1.compare = function(t4, r4) {
      if (F2(t4, Uint8Array) && (t4 = u$1$1.from(t4, t4.offset, t4.byteLength)), F2(r4, Uint8Array) && (r4 = u$1$1.from(r4, r4.offset, r4.byteLength)), !u$1$1.isBuffer(t4) || !u$1$1.isBuffer(r4))
        throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
      if (t4 === r4)
        return 0;
      for (var e4 = t4.length, n4 = r4.length, i4 = 0, o4 = Math.min(e4, n4); i4 < o4; ++i4)
        if (t4[i4] !== r4[i4]) {
          e4 = t4[i4], n4 = r4[i4];
          break;
        }
      return e4 < n4 ? -1 : n4 < e4 ? 1 : 0;
    }, u$1$1.isEncoding = function(t4) {
      switch (String(t4).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return true;
        default:
          return false;
      }
    }, u$1$1.concat = function(t4, r4) {
      if (!Array.isArray(t4))
        throw new TypeError('"list" argument must be an Array of Buffers');
      if (0 === t4.length)
        return u$1$1.alloc(0);
      var e4;
      if (void 0 === r4)
        for (r4 = 0, e4 = 0; e4 < t4.length; ++e4)
          r4 += t4[e4].length;
      var n4 = u$1$1.allocUnsafe(r4), i4 = 0;
      for (e4 = 0; e4 < t4.length; ++e4) {
        var o4 = t4[e4];
        if (F2(o4, Uint8Array) && (o4 = u$1$1.from(o4)), !u$1$1.isBuffer(o4))
          throw new TypeError('"list" argument must be an Array of Buffers');
        o4.copy(n4, i4), i4 += o4.length;
      }
      return n4;
    }, u$1$1.byteLength = y3, u$1$1.prototype._isBuffer = true, u$1$1.prototype.swap16 = function() {
      var t4 = this.length;
      if (t4 % 2 != 0)
        throw new RangeError("Buffer size must be a multiple of 16-bits");
      for (var r4 = 0; r4 < t4; r4 += 2)
        w2(this, r4, r4 + 1);
      return this;
    }, u$1$1.prototype.swap32 = function() {
      var t4 = this.length;
      if (t4 % 4 != 0)
        throw new RangeError("Buffer size must be a multiple of 32-bits");
      for (var r4 = 0; r4 < t4; r4 += 4)
        w2(this, r4, r4 + 3), w2(this, r4 + 1, r4 + 2);
      return this;
    }, u$1$1.prototype.swap64 = function() {
      var t4 = this.length;
      if (t4 % 8 != 0)
        throw new RangeError("Buffer size must be a multiple of 64-bits");
      for (var r4 = 0; r4 < t4; r4 += 8)
        w2(this, r4, r4 + 7), w2(this, r4 + 1, r4 + 6), w2(this, r4 + 2, r4 + 5), w2(this, r4 + 3, r4 + 4);
      return this;
    }, u$1$1.prototype.toString = function() {
      var t4 = this.length;
      return 0 === t4 ? "" : 0 === arguments.length ? I2(this, 0, t4) : g2.apply(this, arguments);
    }, u$1$1.prototype.toLocaleString = u$1$1.prototype.toString, u$1$1.prototype.equals = function(t4) {
      if (!u$1$1.isBuffer(t4))
        throw new TypeError("Argument must be a Buffer");
      return this === t4 || 0 === u$1$1.compare(this, t4);
    }, u$1$1.prototype.inspect = function() {
      var t4 = "", r4 = e$1$1.INSPECT_MAX_BYTES;
      return t4 = this.toString("hex", 0, r4).replace(/(.{2})/g, "$1 ").trim(), this.length > r4 && (t4 += " ... "), "<Buffer " + t4 + ">";
    }, o$1$1 && (u$1$1.prototype[o$1$1] = u$1$1.prototype.inspect), u$1$1.prototype.compare = function(t4, r4, e4, n4, i4) {
      if (F2(t4, Uint8Array) && (t4 = u$1$1.from(t4, t4.offset, t4.byteLength)), !u$1$1.isBuffer(t4))
        throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof t4);
      if (void 0 === r4 && (r4 = 0), void 0 === e4 && (e4 = t4 ? t4.length : 0), void 0 === n4 && (n4 = 0), void 0 === i4 && (i4 = this.length), r4 < 0 || e4 > t4.length || n4 < 0 || i4 > this.length)
        throw new RangeError("out of range index");
      if (n4 >= i4 && r4 >= e4)
        return 0;
      if (n4 >= i4)
        return -1;
      if (r4 >= e4)
        return 1;
      if (this === t4)
        return 0;
      for (var o4 = (i4 >>>= 0) - (n4 >>>= 0), f4 = (e4 >>>= 0) - (r4 >>>= 0), s4 = Math.min(o4, f4), h4 = this.slice(n4, i4), a4 = t4.slice(r4, e4), p4 = 0; p4 < s4; ++p4)
        if (h4[p4] !== a4[p4]) {
          o4 = h4[p4], f4 = a4[p4];
          break;
        }
      return o4 < f4 ? -1 : f4 < o4 ? 1 : 0;
    }, u$1$1.prototype.includes = function(t4, r4, e4) {
      return -1 !== this.indexOf(t4, r4, e4);
    }, u$1$1.prototype.indexOf = function(t4, r4, e4) {
      return d3(this, t4, r4, e4, true);
    }, u$1$1.prototype.lastIndexOf = function(t4, r4, e4) {
      return d3(this, t4, r4, e4, false);
    }, u$1$1.prototype.write = function(t4, r4, e4, n4) {
      if (void 0 === r4)
        n4 = "utf8", e4 = this.length, r4 = 0;
      else if (void 0 === e4 && "string" == typeof r4)
        n4 = r4, e4 = this.length, r4 = 0;
      else {
        if (!isFinite(r4))
          throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
        r4 >>>= 0, isFinite(e4) ? (e4 >>>= 0, void 0 === n4 && (n4 = "utf8")) : (n4 = e4, e4 = void 0);
      }
      var i4 = this.length - r4;
      if ((void 0 === e4 || e4 > i4) && (e4 = i4), t4.length > 0 && (e4 < 0 || r4 < 0) || r4 > this.length)
        throw new RangeError("Attempt to write outside buffer bounds");
      n4 || (n4 = "utf8");
      for (var o4 = false; ; )
        switch (n4) {
          case "hex":
            return b2(this, t4, r4, e4);
          case "utf8":
          case "utf-8":
            return m3(this, t4, r4, e4);
          case "ascii":
            return E2(this, t4, r4, e4);
          case "latin1":
          case "binary":
            return B2(this, t4, r4, e4);
          case "base64":
            return A2(this, t4, r4, e4);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return U2(this, t4, r4, e4);
          default:
            if (o4)
              throw new TypeError("Unknown encoding: " + n4);
            n4 = ("" + n4).toLowerCase(), o4 = true;
        }
    }, u$1$1.prototype.toJSON = function() {
      return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
    };
    u$1$1.prototype.slice = function(t4, r4) {
      var e4 = this.length;
      (t4 = ~~t4) < 0 ? (t4 += e4) < 0 && (t4 = 0) : t4 > e4 && (t4 = e4), (r4 = void 0 === r4 ? e4 : ~~r4) < 0 ? (r4 += e4) < 0 && (r4 = 0) : r4 > e4 && (r4 = e4), r4 < t4 && (r4 = t4);
      var n4 = this.subarray(t4, r4);
      return Object.setPrototypeOf(n4, u$1$1.prototype), n4;
    }, u$1$1.prototype.readUIntLE = function(t4, r4, e4) {
      t4 >>>= 0, r4 >>>= 0, e4 || x2(t4, r4, this.length);
      for (var n4 = this[t4], i4 = 1, o4 = 0; ++o4 < r4 && (i4 *= 256); )
        n4 += this[t4 + o4] * i4;
      return n4;
    }, u$1$1.prototype.readUIntBE = function(t4, r4, e4) {
      t4 >>>= 0, r4 >>>= 0, e4 || x2(t4, r4, this.length);
      for (var n4 = this[t4 + --r4], i4 = 1; r4 > 0 && (i4 *= 256); )
        n4 += this[t4 + --r4] * i4;
      return n4;
    }, u$1$1.prototype.readUInt8 = function(t4, r4) {
      return t4 >>>= 0, r4 || x2(t4, 1, this.length), this[t4];
    }, u$1$1.prototype.readUInt16LE = function(t4, r4) {
      return t4 >>>= 0, r4 || x2(t4, 2, this.length), this[t4] | this[t4 + 1] << 8;
    }, u$1$1.prototype.readUInt16BE = function(t4, r4) {
      return t4 >>>= 0, r4 || x2(t4, 2, this.length), this[t4] << 8 | this[t4 + 1];
    }, u$1$1.prototype.readUInt32LE = function(t4, r4) {
      return t4 >>>= 0, r4 || x2(t4, 4, this.length), (this[t4] | this[t4 + 1] << 8 | this[t4 + 2] << 16) + 16777216 * this[t4 + 3];
    }, u$1$1.prototype.readUInt32BE = function(t4, r4) {
      return t4 >>>= 0, r4 || x2(t4, 4, this.length), 16777216 * this[t4] + (this[t4 + 1] << 16 | this[t4 + 2] << 8 | this[t4 + 3]);
    }, u$1$1.prototype.readIntLE = function(t4, r4, e4) {
      t4 >>>= 0, r4 >>>= 0, e4 || x2(t4, r4, this.length);
      for (var n4 = this[t4], i4 = 1, o4 = 0; ++o4 < r4 && (i4 *= 256); )
        n4 += this[t4 + o4] * i4;
      return n4 >= (i4 *= 128) && (n4 -= Math.pow(2, 8 * r4)), n4;
    }, u$1$1.prototype.readIntBE = function(t4, r4, e4) {
      t4 >>>= 0, r4 >>>= 0, e4 || x2(t4, r4, this.length);
      for (var n4 = r4, i4 = 1, o4 = this[t4 + --n4]; n4 > 0 && (i4 *= 256); )
        o4 += this[t4 + --n4] * i4;
      return o4 >= (i4 *= 128) && (o4 -= Math.pow(2, 8 * r4)), o4;
    }, u$1$1.prototype.readInt8 = function(t4, r4) {
      return t4 >>>= 0, r4 || x2(t4, 1, this.length), 128 & this[t4] ? -1 * (255 - this[t4] + 1) : this[t4];
    }, u$1$1.prototype.readInt16LE = function(t4, r4) {
      t4 >>>= 0, r4 || x2(t4, 2, this.length);
      var e4 = this[t4] | this[t4 + 1] << 8;
      return 32768 & e4 ? 4294901760 | e4 : e4;
    }, u$1$1.prototype.readInt16BE = function(t4, r4) {
      t4 >>>= 0, r4 || x2(t4, 2, this.length);
      var e4 = this[t4 + 1] | this[t4] << 8;
      return 32768 & e4 ? 4294901760 | e4 : e4;
    }, u$1$1.prototype.readInt32LE = function(t4, r4) {
      return t4 >>>= 0, r4 || x2(t4, 4, this.length), this[t4] | this[t4 + 1] << 8 | this[t4 + 2] << 16 | this[t4 + 3] << 24;
    }, u$1$1.prototype.readInt32BE = function(t4, r4) {
      return t4 >>>= 0, r4 || x2(t4, 4, this.length), this[t4] << 24 | this[t4 + 1] << 16 | this[t4 + 2] << 8 | this[t4 + 3];
    }, u$1$1.prototype.readFloatLE = function(t4, r4) {
      return t4 >>>= 0, r4 || x2(t4, 4, this.length), i$12.read(this, t4, true, 23, 4);
    }, u$1$1.prototype.readFloatBE = function(t4, r4) {
      return t4 >>>= 0, r4 || x2(t4, 4, this.length), i$12.read(this, t4, false, 23, 4);
    }, u$1$1.prototype.readDoubleLE = function(t4, r4) {
      return t4 >>>= 0, r4 || x2(t4, 8, this.length), i$12.read(this, t4, true, 52, 8);
    }, u$1$1.prototype.readDoubleBE = function(t4, r4) {
      return t4 >>>= 0, r4 || x2(t4, 8, this.length), i$12.read(this, t4, false, 52, 8);
    }, u$1$1.prototype.writeUIntLE = function(t4, r4, e4, n4) {
      (t4 = +t4, r4 >>>= 0, e4 >>>= 0, n4) || C2(this, t4, r4, e4, Math.pow(2, 8 * e4) - 1, 0);
      var i4 = 1, o4 = 0;
      for (this[r4] = 255 & t4; ++o4 < e4 && (i4 *= 256); )
        this[r4 + o4] = t4 / i4 & 255;
      return r4 + e4;
    }, u$1$1.prototype.writeUIntBE = function(t4, r4, e4, n4) {
      (t4 = +t4, r4 >>>= 0, e4 >>>= 0, n4) || C2(this, t4, r4, e4, Math.pow(2, 8 * e4) - 1, 0);
      var i4 = e4 - 1, o4 = 1;
      for (this[r4 + i4] = 255 & t4; --i4 >= 0 && (o4 *= 256); )
        this[r4 + i4] = t4 / o4 & 255;
      return r4 + e4;
    }, u$1$1.prototype.writeUInt8 = function(t4, r4, e4) {
      return t4 = +t4, r4 >>>= 0, e4 || C2(this, t4, r4, 1, 255, 0), this[r4] = 255 & t4, r4 + 1;
    }, u$1$1.prototype.writeUInt16LE = function(t4, r4, e4) {
      return t4 = +t4, r4 >>>= 0, e4 || C2(this, t4, r4, 2, 65535, 0), this[r4] = 255 & t4, this[r4 + 1] = t4 >>> 8, r4 + 2;
    }, u$1$1.prototype.writeUInt16BE = function(t4, r4, e4) {
      return t4 = +t4, r4 >>>= 0, e4 || C2(this, t4, r4, 2, 65535, 0), this[r4] = t4 >>> 8, this[r4 + 1] = 255 & t4, r4 + 2;
    }, u$1$1.prototype.writeUInt32LE = function(t4, r4, e4) {
      return t4 = +t4, r4 >>>= 0, e4 || C2(this, t4, r4, 4, 4294967295, 0), this[r4 + 3] = t4 >>> 24, this[r4 + 2] = t4 >>> 16, this[r4 + 1] = t4 >>> 8, this[r4] = 255 & t4, r4 + 4;
    }, u$1$1.prototype.writeUInt32BE = function(t4, r4, e4) {
      return t4 = +t4, r4 >>>= 0, e4 || C2(this, t4, r4, 4, 4294967295, 0), this[r4] = t4 >>> 24, this[r4 + 1] = t4 >>> 16, this[r4 + 2] = t4 >>> 8, this[r4 + 3] = 255 & t4, r4 + 4;
    }, u$1$1.prototype.writeIntLE = function(t4, r4, e4, n4) {
      if (t4 = +t4, r4 >>>= 0, !n4) {
        var i4 = Math.pow(2, 8 * e4 - 1);
        C2(this, t4, r4, e4, i4 - 1, -i4);
      }
      var o4 = 0, f4 = 1, u4 = 0;
      for (this[r4] = 255 & t4; ++o4 < e4 && (f4 *= 256); )
        t4 < 0 && 0 === u4 && 0 !== this[r4 + o4 - 1] && (u4 = 1), this[r4 + o4] = (t4 / f4 >> 0) - u4 & 255;
      return r4 + e4;
    }, u$1$1.prototype.writeIntBE = function(t4, r4, e4, n4) {
      if (t4 = +t4, r4 >>>= 0, !n4) {
        var i4 = Math.pow(2, 8 * e4 - 1);
        C2(this, t4, r4, e4, i4 - 1, -i4);
      }
      var o4 = e4 - 1, f4 = 1, u4 = 0;
      for (this[r4 + o4] = 255 & t4; --o4 >= 0 && (f4 *= 256); )
        t4 < 0 && 0 === u4 && 0 !== this[r4 + o4 + 1] && (u4 = 1), this[r4 + o4] = (t4 / f4 >> 0) - u4 & 255;
      return r4 + e4;
    }, u$1$1.prototype.writeInt8 = function(t4, r4, e4) {
      return t4 = +t4, r4 >>>= 0, e4 || C2(this, t4, r4, 1, 127, -128), t4 < 0 && (t4 = 255 + t4 + 1), this[r4] = 255 & t4, r4 + 1;
    }, u$1$1.prototype.writeInt16LE = function(t4, r4, e4) {
      return t4 = +t4, r4 >>>= 0, e4 || C2(this, t4, r4, 2, 32767, -32768), this[r4] = 255 & t4, this[r4 + 1] = t4 >>> 8, r4 + 2;
    }, u$1$1.prototype.writeInt16BE = function(t4, r4, e4) {
      return t4 = +t4, r4 >>>= 0, e4 || C2(this, t4, r4, 2, 32767, -32768), this[r4] = t4 >>> 8, this[r4 + 1] = 255 & t4, r4 + 2;
    }, u$1$1.prototype.writeInt32LE = function(t4, r4, e4) {
      return t4 = +t4, r4 >>>= 0, e4 || C2(this, t4, r4, 4, 2147483647, -2147483648), this[r4] = 255 & t4, this[r4 + 1] = t4 >>> 8, this[r4 + 2] = t4 >>> 16, this[r4 + 3] = t4 >>> 24, r4 + 4;
    }, u$1$1.prototype.writeInt32BE = function(t4, r4, e4) {
      return t4 = +t4, r4 >>>= 0, e4 || C2(this, t4, r4, 4, 2147483647, -2147483648), t4 < 0 && (t4 = 4294967295 + t4 + 1), this[r4] = t4 >>> 24, this[r4 + 1] = t4 >>> 16, this[r4 + 2] = t4 >>> 8, this[r4 + 3] = 255 & t4, r4 + 4;
    }, u$1$1.prototype.writeFloatLE = function(t4, r4, e4) {
      return k2(this, t4, r4, true, e4);
    }, u$1$1.prototype.writeFloatBE = function(t4, r4, e4) {
      return k2(this, t4, r4, false, e4);
    }, u$1$1.prototype.writeDoubleLE = function(t4, r4, e4) {
      return M2(this, t4, r4, true, e4);
    }, u$1$1.prototype.writeDoubleBE = function(t4, r4, e4) {
      return M2(this, t4, r4, false, e4);
    }, u$1$1.prototype.copy = function(t4, r4, e4, n4) {
      if (!u$1$1.isBuffer(t4))
        throw new TypeError("argument should be a Buffer");
      if (e4 || (e4 = 0), n4 || 0 === n4 || (n4 = this.length), r4 >= t4.length && (r4 = t4.length), r4 || (r4 = 0), n4 > 0 && n4 < e4 && (n4 = e4), n4 === e4)
        return 0;
      if (0 === t4.length || 0 === this.length)
        return 0;
      if (r4 < 0)
        throw new RangeError("targetStart out of bounds");
      if (e4 < 0 || e4 >= this.length)
        throw new RangeError("Index out of range");
      if (n4 < 0)
        throw new RangeError("sourceEnd out of bounds");
      n4 > this.length && (n4 = this.length), t4.length - r4 < n4 - e4 && (n4 = t4.length - r4 + e4);
      var i4 = n4 - e4;
      if (this === t4 && "function" == typeof Uint8Array.prototype.copyWithin)
        this.copyWithin(r4, e4, n4);
      else if (this === t4 && e4 < r4 && r4 < n4)
        for (var o4 = i4 - 1; o4 >= 0; --o4)
          t4[o4 + r4] = this[o4 + e4];
      else
        Uint8Array.prototype.set.call(t4, this.subarray(e4, n4), r4);
      return i4;
    }, u$1$1.prototype.fill = function(t4, r4, e4, n4) {
      if ("string" == typeof t4) {
        if ("string" == typeof r4 ? (n4 = r4, r4 = 0, e4 = this.length) : "string" == typeof e4 && (n4 = e4, e4 = this.length), void 0 !== n4 && "string" != typeof n4)
          throw new TypeError("encoding must be a string");
        if ("string" == typeof n4 && !u$1$1.isEncoding(n4))
          throw new TypeError("Unknown encoding: " + n4);
        if (1 === t4.length) {
          var i4 = t4.charCodeAt(0);
          ("utf8" === n4 && i4 < 128 || "latin1" === n4) && (t4 = i4);
        }
      } else
        "number" == typeof t4 ? t4 &= 255 : "boolean" == typeof t4 && (t4 = Number(t4));
      if (r4 < 0 || this.length < r4 || this.length < e4)
        throw new RangeError("Out of range index");
      if (e4 <= r4)
        return this;
      var o4;
      if (r4 >>>= 0, e4 = void 0 === e4 ? this.length : e4 >>> 0, t4 || (t4 = 0), "number" == typeof t4)
        for (o4 = r4; o4 < e4; ++o4)
          this[o4] = t4;
      else {
        var f4 = u$1$1.isBuffer(t4) ? t4 : u$1$1.from(t4, n4), s4 = f4.length;
        if (0 === s4)
          throw new TypeError('The value "' + t4 + '" is invalid for argument "value"');
        for (o4 = 0; o4 < e4 - r4; ++o4)
          this[o4 + r4] = f4[o4 % s4];
      }
      return this;
    };
    j2 = /[^+/0-9A-Za-z-_]/g;
    Y2 = function() {
      for (var t4 = new Array(256), r4 = 0; r4 < 16; ++r4)
        for (var e4 = 16 * r4, n4 = 0; n4 < 16; ++n4)
          t4[e4 + n4] = "0123456789abcdef"[r4] + "0123456789abcdef"[n4];
      return t4;
    }();
    e$1$1.Buffer;
    e$1$1.INSPECT_MAX_BYTES;
    e$1$1.kMaxLength;
    e3 = {};
    n3 = e$1$1;
    o3 = n3.Buffer;
    o3.from && o3.alloc && o3.allocUnsafe && o3.allocUnsafeSlow ? e3 = n3 : (t3(n3, e3), e3.Buffer = f3), f3.prototype = Object.create(o3.prototype), t3(o3, f3), f3.from = function(r4, e4, n4) {
      if ("number" == typeof r4)
        throw new TypeError("Argument must not be a number");
      return o3(r4, e4, n4);
    }, f3.alloc = function(r4, e4, n4) {
      if ("number" != typeof r4)
        throw new TypeError("Argument must be a number");
      var t4 = o3(r4);
      return void 0 !== e4 ? "string" == typeof n4 ? t4.fill(e4, n4) : t4.fill(e4) : t4.fill(0), t4;
    }, f3.allocUnsafe = function(r4) {
      if ("number" != typeof r4)
        throw new TypeError("Argument must be a number");
      return o3(r4);
    }, f3.allocUnsafeSlow = function(r4) {
      if ("number" != typeof r4)
        throw new TypeError("Argument must be a number");
      return n3.SlowBuffer(r4);
    };
    u3 = e3;
    e$12 = {};
    s3 = u3.Buffer;
    i3 = s3.isEncoding || function(t4) {
      switch ((t4 = "" + t4) && t4.toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
        case "raw":
          return true;
        default:
          return false;
      }
    };
    e$12.StringDecoder = a3, a3.prototype.write = function(t4) {
      if (0 === t4.length)
        return "";
      var e4, s4;
      if (this.lastNeed) {
        if (void 0 === (e4 = this.fillLast(t4)))
          return "";
        s4 = this.lastNeed, this.lastNeed = 0;
      } else
        s4 = 0;
      return s4 < t4.length ? e4 ? e4 + this.text(t4, s4) : this.text(t4, s4) : e4 || "";
    }, a3.prototype.end = function(t4) {
      var e4 = t4 && t4.length ? this.write(t4) : "";
      return this.lastNeed ? e4 + "\uFFFD" : e4;
    }, a3.prototype.text = function(t4, e4) {
      var s4 = function(t5, e5, s5) {
        var i5 = e5.length - 1;
        if (i5 < s5)
          return 0;
        var a4 = r3(e5[i5]);
        if (a4 >= 0)
          return a4 > 0 && (t5.lastNeed = a4 - 1), a4;
        if (--i5 < s5 || -2 === a4)
          return 0;
        if ((a4 = r3(e5[i5])) >= 0)
          return a4 > 0 && (t5.lastNeed = a4 - 2), a4;
        if (--i5 < s5 || -2 === a4)
          return 0;
        if ((a4 = r3(e5[i5])) >= 0)
          return a4 > 0 && (2 === a4 ? a4 = 0 : t5.lastNeed = a4 - 3), a4;
        return 0;
      }(this, t4, e4);
      if (!this.lastNeed)
        return t4.toString("utf8", e4);
      this.lastTotal = s4;
      var i4 = t4.length - (s4 - this.lastNeed);
      return t4.copy(this.lastChar, 0, i4), t4.toString("utf8", e4, i4);
    }, a3.prototype.fillLast = function(t4) {
      if (this.lastNeed <= t4.length)
        return t4.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
      t4.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, t4.length), this.lastNeed -= t4.length;
    };
    e$12.StringDecoder;
    e$12.StringDecoder;
  }
});

// node_modules/.pnpm/@jspm+core@2.0.1/node_modules/@jspm/core/nodelibs/browser/chunk-44e51b61.js
function dew$2$1() {
  if (_dewExec$2$1)
    return exports$2$1;
  _dewExec$2$1 = true;
  exports$2$1.byteLength = byteLength;
  exports$2$1.toByteArray = toByteArray;
  exports$2$1.fromByteArray = fromByteArray;
  var lookup = [];
  var revLookup = [];
  var Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
  var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  for (var i4 = 0, len = code.length; i4 < len; ++i4) {
    lookup[i4] = code[i4];
    revLookup[code.charCodeAt(i4)] = i4;
  }
  revLookup["-".charCodeAt(0)] = 62;
  revLookup["_".charCodeAt(0)] = 63;
  function getLens(b64) {
    var len2 = b64.length;
    if (len2 % 4 > 0) {
      throw new Error("Invalid string. Length must be a multiple of 4");
    }
    var validLen = b64.indexOf("=");
    if (validLen === -1)
      validLen = len2;
    var placeHoldersLen = validLen === len2 ? 0 : 4 - validLen % 4;
    return [validLen, placeHoldersLen];
  }
  function byteLength(b64) {
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
  }
  function _byteLength(b64, validLen, placeHoldersLen) {
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
  }
  function toByteArray(b64) {
    var tmp;
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
    var curByte = 0;
    var len2 = placeHoldersLen > 0 ? validLen - 4 : validLen;
    var i5;
    for (i5 = 0; i5 < len2; i5 += 4) {
      tmp = revLookup[b64.charCodeAt(i5)] << 18 | revLookup[b64.charCodeAt(i5 + 1)] << 12 | revLookup[b64.charCodeAt(i5 + 2)] << 6 | revLookup[b64.charCodeAt(i5 + 3)];
      arr[curByte++] = tmp >> 16 & 255;
      arr[curByte++] = tmp >> 8 & 255;
      arr[curByte++] = tmp & 255;
    }
    if (placeHoldersLen === 2) {
      tmp = revLookup[b64.charCodeAt(i5)] << 2 | revLookup[b64.charCodeAt(i5 + 1)] >> 4;
      arr[curByte++] = tmp & 255;
    }
    if (placeHoldersLen === 1) {
      tmp = revLookup[b64.charCodeAt(i5)] << 10 | revLookup[b64.charCodeAt(i5 + 1)] << 4 | revLookup[b64.charCodeAt(i5 + 2)] >> 2;
      arr[curByte++] = tmp >> 8 & 255;
      arr[curByte++] = tmp & 255;
    }
    return arr;
  }
  function tripletToBase64(num) {
    return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[num & 63];
  }
  function encodeChunk(uint8, start, end) {
    var tmp;
    var output = [];
    for (var i5 = start; i5 < end; i5 += 3) {
      tmp = (uint8[i5] << 16 & 16711680) + (uint8[i5 + 1] << 8 & 65280) + (uint8[i5 + 2] & 255);
      output.push(tripletToBase64(tmp));
    }
    return output.join("");
  }
  function fromByteArray(uint8) {
    var tmp;
    var len2 = uint8.length;
    var extraBytes = len2 % 3;
    var parts = [];
    var maxChunkLength = 16383;
    for (var i5 = 0, len22 = len2 - extraBytes; i5 < len22; i5 += maxChunkLength) {
      parts.push(encodeChunk(uint8, i5, i5 + maxChunkLength > len22 ? len22 : i5 + maxChunkLength));
    }
    if (extraBytes === 1) {
      tmp = uint8[len2 - 1];
      parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 63] + "==");
    } else if (extraBytes === 2) {
      tmp = (uint8[len2 - 2] << 8) + uint8[len2 - 1];
      parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 63] + lookup[tmp << 2 & 63] + "=");
    }
    return parts.join("");
  }
  return exports$2$1;
}
function dew$1$1() {
  if (_dewExec$1$1)
    return exports$1$1;
  _dewExec$1$1 = true;
  exports$1$1.read = function(buffer2, offset, isLE, mLen, nBytes) {
    var e4, m4;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var nBits = -7;
    var i4 = isLE ? nBytes - 1 : 0;
    var d4 = isLE ? -1 : 1;
    var s4 = buffer2[offset + i4];
    i4 += d4;
    e4 = s4 & (1 << -nBits) - 1;
    s4 >>= -nBits;
    nBits += eLen;
    for (; nBits > 0; e4 = e4 * 256 + buffer2[offset + i4], i4 += d4, nBits -= 8) {
    }
    m4 = e4 & (1 << -nBits) - 1;
    e4 >>= -nBits;
    nBits += mLen;
    for (; nBits > 0; m4 = m4 * 256 + buffer2[offset + i4], i4 += d4, nBits -= 8) {
    }
    if (e4 === 0) {
      e4 = 1 - eBias;
    } else if (e4 === eMax) {
      return m4 ? NaN : (s4 ? -1 : 1) * Infinity;
    } else {
      m4 = m4 + Math.pow(2, mLen);
      e4 = e4 - eBias;
    }
    return (s4 ? -1 : 1) * m4 * Math.pow(2, e4 - mLen);
  };
  exports$1$1.write = function(buffer2, value, offset, isLE, mLen, nBytes) {
    var e4, m4, c4;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
    var i4 = isLE ? 0 : nBytes - 1;
    var d4 = isLE ? 1 : -1;
    var s4 = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
    value = Math.abs(value);
    if (isNaN(value) || value === Infinity) {
      m4 = isNaN(value) ? 1 : 0;
      e4 = eMax;
    } else {
      e4 = Math.floor(Math.log(value) / Math.LN2);
      if (value * (c4 = Math.pow(2, -e4)) < 1) {
        e4--;
        c4 *= 2;
      }
      if (e4 + eBias >= 1) {
        value += rt / c4;
      } else {
        value += rt * Math.pow(2, 1 - eBias);
      }
      if (value * c4 >= 2) {
        e4++;
        c4 /= 2;
      }
      if (e4 + eBias >= eMax) {
        m4 = 0;
        e4 = eMax;
      } else if (e4 + eBias >= 1) {
        m4 = (value * c4 - 1) * Math.pow(2, mLen);
        e4 = e4 + eBias;
      } else {
        m4 = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
        e4 = 0;
      }
    }
    for (; mLen >= 8; buffer2[offset + i4] = m4 & 255, i4 += d4, m4 /= 256, mLen -= 8) {
    }
    e4 = e4 << mLen | m4;
    eLen += mLen;
    for (; eLen > 0; buffer2[offset + i4] = e4 & 255, i4 += d4, e4 /= 256, eLen -= 8) {
    }
    buffer2[offset + i4 - d4] |= s4 * 128;
  };
  return exports$1$1;
}
function dew$g() {
  if (_dewExec$g)
    return exports$g;
  _dewExec$g = true;
  const base64 = dew$2$1();
  const ieee754 = dew$1$1();
  const customInspectSymbol = typeof Symbol === "function" && typeof Symbol["for"] === "function" ? Symbol["for"]("nodejs.util.inspect.custom") : null;
  exports$g.Buffer = Buffer;
  exports$g.SlowBuffer = SlowBuffer;
  exports$g.INSPECT_MAX_BYTES = 50;
  const K_MAX_LENGTH = 2147483647;
  exports$g.kMaxLength = K_MAX_LENGTH;
  Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();
  if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") {
    console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
  }
  function typedArraySupport() {
    try {
      const arr = new Uint8Array(1);
      const proto = {
        foo: function() {
          return 42;
        }
      };
      Object.setPrototypeOf(proto, Uint8Array.prototype);
      Object.setPrototypeOf(arr, proto);
      return arr.foo() === 42;
    } catch (e4) {
      return false;
    }
  }
  Object.defineProperty(Buffer.prototype, "parent", {
    enumerable: true,
    get: function() {
      if (!Buffer.isBuffer(this))
        return void 0;
      return this.buffer;
    }
  });
  Object.defineProperty(Buffer.prototype, "offset", {
    enumerable: true,
    get: function() {
      if (!Buffer.isBuffer(this))
        return void 0;
      return this.byteOffset;
    }
  });
  function createBuffer(length) {
    if (length > K_MAX_LENGTH) {
      throw new RangeError('The value "' + length + '" is invalid for option "size"');
    }
    const buf = new Uint8Array(length);
    Object.setPrototypeOf(buf, Buffer.prototype);
    return buf;
  }
  function Buffer(arg, encodingOrOffset, length) {
    if (typeof arg === "number") {
      if (typeof encodingOrOffset === "string") {
        throw new TypeError('The "string" argument must be of type string. Received type number');
      }
      return allocUnsafe(arg);
    }
    return from(arg, encodingOrOffset, length);
  }
  Buffer.poolSize = 8192;
  function from(value, encodingOrOffset, length) {
    if (typeof value === "string") {
      return fromString(value, encodingOrOffset);
    }
    if (ArrayBuffer.isView(value)) {
      return fromArrayView(value);
    }
    if (value == null) {
      throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
    }
    if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) {
      return fromArrayBuffer(value, encodingOrOffset, length);
    }
    if (typeof SharedArrayBuffer !== "undefined" && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) {
      return fromArrayBuffer(value, encodingOrOffset, length);
    }
    if (typeof value === "number") {
      throw new TypeError('The "value" argument must not be of type number. Received type number');
    }
    const valueOf = value.valueOf && value.valueOf();
    if (valueOf != null && valueOf !== value) {
      return Buffer.from(valueOf, encodingOrOffset, length);
    }
    const b3 = fromObject(value);
    if (b3)
      return b3;
    if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === "function") {
      return Buffer.from(value[Symbol.toPrimitive]("string"), encodingOrOffset, length);
    }
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
  }
  Buffer.from = function(value, encodingOrOffset, length) {
    return from(value, encodingOrOffset, length);
  };
  Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype);
  Object.setPrototypeOf(Buffer, Uint8Array);
  function assertSize(size) {
    if (typeof size !== "number") {
      throw new TypeError('"size" argument must be of type number');
    } else if (size < 0) {
      throw new RangeError('The value "' + size + '" is invalid for option "size"');
    }
  }
  function alloc(size, fill, encoding) {
    assertSize(size);
    if (size <= 0) {
      return createBuffer(size);
    }
    if (fill !== void 0) {
      return typeof encoding === "string" ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
    }
    return createBuffer(size);
  }
  Buffer.alloc = function(size, fill, encoding) {
    return alloc(size, fill, encoding);
  };
  function allocUnsafe(size) {
    assertSize(size);
    return createBuffer(size < 0 ? 0 : checked(size) | 0);
  }
  Buffer.allocUnsafe = function(size) {
    return allocUnsafe(size);
  };
  Buffer.allocUnsafeSlow = function(size) {
    return allocUnsafe(size);
  };
  function fromString(string, encoding) {
    if (typeof encoding !== "string" || encoding === "") {
      encoding = "utf8";
    }
    if (!Buffer.isEncoding(encoding)) {
      throw new TypeError("Unknown encoding: " + encoding);
    }
    const length = byteLength(string, encoding) | 0;
    let buf = createBuffer(length);
    const actual = buf.write(string, encoding);
    if (actual !== length) {
      buf = buf.slice(0, actual);
    }
    return buf;
  }
  function fromArrayLike(array) {
    const length = array.length < 0 ? 0 : checked(array.length) | 0;
    const buf = createBuffer(length);
    for (let i4 = 0; i4 < length; i4 += 1) {
      buf[i4] = array[i4] & 255;
    }
    return buf;
  }
  function fromArrayView(arrayView) {
    if (isInstance(arrayView, Uint8Array)) {
      const copy = new Uint8Array(arrayView);
      return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
    }
    return fromArrayLike(arrayView);
  }
  function fromArrayBuffer(array, byteOffset, length) {
    if (byteOffset < 0 || array.byteLength < byteOffset) {
      throw new RangeError('"offset" is outside of buffer bounds');
    }
    if (array.byteLength < byteOffset + (length || 0)) {
      throw new RangeError('"length" is outside of buffer bounds');
    }
    let buf;
    if (byteOffset === void 0 && length === void 0) {
      buf = new Uint8Array(array);
    } else if (length === void 0) {
      buf = new Uint8Array(array, byteOffset);
    } else {
      buf = new Uint8Array(array, byteOffset, length);
    }
    Object.setPrototypeOf(buf, Buffer.prototype);
    return buf;
  }
  function fromObject(obj) {
    if (Buffer.isBuffer(obj)) {
      const len = checked(obj.length) | 0;
      const buf = createBuffer(len);
      if (buf.length === 0) {
        return buf;
      }
      obj.copy(buf, 0, 0, len);
      return buf;
    }
    if (obj.length !== void 0) {
      if (typeof obj.length !== "number" || numberIsNaN(obj.length)) {
        return createBuffer(0);
      }
      return fromArrayLike(obj);
    }
    if (obj.type === "Buffer" && Array.isArray(obj.data)) {
      return fromArrayLike(obj.data);
    }
  }
  function checked(length) {
    if (length >= K_MAX_LENGTH) {
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + " bytes");
    }
    return length | 0;
  }
  function SlowBuffer(length) {
    if (+length != length) {
      length = 0;
    }
    return Buffer.alloc(+length);
  }
  Buffer.isBuffer = function isBuffer3(b3) {
    return b3 != null && b3._isBuffer === true && b3 !== Buffer.prototype;
  };
  Buffer.compare = function compare(a4, b3) {
    if (isInstance(a4, Uint8Array))
      a4 = Buffer.from(a4, a4.offset, a4.byteLength);
    if (isInstance(b3, Uint8Array))
      b3 = Buffer.from(b3, b3.offset, b3.byteLength);
    if (!Buffer.isBuffer(a4) || !Buffer.isBuffer(b3)) {
      throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
    }
    if (a4 === b3)
      return 0;
    let x3 = a4.length;
    let y4 = b3.length;
    for (let i4 = 0, len = Math.min(x3, y4); i4 < len; ++i4) {
      if (a4[i4] !== b3[i4]) {
        x3 = a4[i4];
        y4 = b3[i4];
        break;
      }
    }
    if (x3 < y4)
      return -1;
    if (y4 < x3)
      return 1;
    return 0;
  };
  Buffer.isEncoding = function isEncoding(encoding) {
    switch (String(encoding).toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "latin1":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return true;
      default:
        return false;
    }
  };
  Buffer.concat = function concat(list, length) {
    if (!Array.isArray(list)) {
      throw new TypeError('"list" argument must be an Array of Buffers');
    }
    if (list.length === 0) {
      return Buffer.alloc(0);
    }
    let i4;
    if (length === void 0) {
      length = 0;
      for (i4 = 0; i4 < list.length; ++i4) {
        length += list[i4].length;
      }
    }
    const buffer2 = Buffer.allocUnsafe(length);
    let pos = 0;
    for (i4 = 0; i4 < list.length; ++i4) {
      let buf = list[i4];
      if (isInstance(buf, Uint8Array)) {
        if (pos + buf.length > buffer2.length) {
          if (!Buffer.isBuffer(buf))
            buf = Buffer.from(buf);
          buf.copy(buffer2, pos);
        } else {
          Uint8Array.prototype.set.call(buffer2, buf, pos);
        }
      } else if (!Buffer.isBuffer(buf)) {
        throw new TypeError('"list" argument must be an Array of Buffers');
      } else {
        buf.copy(buffer2, pos);
      }
      pos += buf.length;
    }
    return buffer2;
  };
  function byteLength(string, encoding) {
    if (Buffer.isBuffer(string)) {
      return string.length;
    }
    if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
      return string.byteLength;
    }
    if (typeof string !== "string") {
      throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof string);
    }
    const len = string.length;
    const mustMatch = arguments.length > 2 && arguments[2] === true;
    if (!mustMatch && len === 0)
      return 0;
    let loweredCase = false;
    for (; ; ) {
      switch (encoding) {
        case "ascii":
        case "latin1":
        case "binary":
          return len;
        case "utf8":
        case "utf-8":
          return utf8ToBytes(string).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return len * 2;
        case "hex":
          return len >>> 1;
        case "base64":
          return base64ToBytes(string).length;
        default:
          if (loweredCase) {
            return mustMatch ? -1 : utf8ToBytes(string).length;
          }
          encoding = ("" + encoding).toLowerCase();
          loweredCase = true;
      }
    }
  }
  Buffer.byteLength = byteLength;
  function slowToString(encoding, start, end) {
    let loweredCase = false;
    if (start === void 0 || start < 0) {
      start = 0;
    }
    if (start > this.length) {
      return "";
    }
    if (end === void 0 || end > this.length) {
      end = this.length;
    }
    if (end <= 0) {
      return "";
    }
    end >>>= 0;
    start >>>= 0;
    if (end <= start) {
      return "";
    }
    if (!encoding)
      encoding = "utf8";
    while (true) {
      switch (encoding) {
        case "hex":
          return hexSlice(this, start, end);
        case "utf8":
        case "utf-8":
          return utf8Slice(this, start, end);
        case "ascii":
          return asciiSlice(this, start, end);
        case "latin1":
        case "binary":
          return latin1Slice(this, start, end);
        case "base64":
          return base64Slice(this, start, end);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return utf16leSlice(this, start, end);
        default:
          if (loweredCase)
            throw new TypeError("Unknown encoding: " + encoding);
          encoding = (encoding + "").toLowerCase();
          loweredCase = true;
      }
    }
  }
  Buffer.prototype._isBuffer = true;
  function swap(b3, n4, m4) {
    const i4 = b3[n4];
    b3[n4] = b3[m4];
    b3[m4] = i4;
  }
  Buffer.prototype.swap16 = function swap16() {
    const len = this.length;
    if (len % 2 !== 0) {
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    }
    for (let i4 = 0; i4 < len; i4 += 2) {
      swap(this, i4, i4 + 1);
    }
    return this;
  };
  Buffer.prototype.swap32 = function swap32() {
    const len = this.length;
    if (len % 4 !== 0) {
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    }
    for (let i4 = 0; i4 < len; i4 += 4) {
      swap(this, i4, i4 + 3);
      swap(this, i4 + 1, i4 + 2);
    }
    return this;
  };
  Buffer.prototype.swap64 = function swap64() {
    const len = this.length;
    if (len % 8 !== 0) {
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    }
    for (let i4 = 0; i4 < len; i4 += 8) {
      swap(this, i4, i4 + 7);
      swap(this, i4 + 1, i4 + 6);
      swap(this, i4 + 2, i4 + 5);
      swap(this, i4 + 3, i4 + 4);
    }
    return this;
  };
  Buffer.prototype.toString = function toString() {
    const length = this.length;
    if (length === 0)
      return "";
    if (arguments.length === 0)
      return utf8Slice(this, 0, length);
    return slowToString.apply(this, arguments);
  };
  Buffer.prototype.toLocaleString = Buffer.prototype.toString;
  Buffer.prototype.equals = function equals(b3) {
    if (!Buffer.isBuffer(b3))
      throw new TypeError("Argument must be a Buffer");
    if (this === b3)
      return true;
    return Buffer.compare(this, b3) === 0;
  };
  Buffer.prototype.inspect = function inspect3() {
    let str = "";
    const max = exports$g.INSPECT_MAX_BYTES;
    str = this.toString("hex", 0, max).replace(/(.{2})/g, "$1 ").trim();
    if (this.length > max)
      str += " ... ";
    return "<Buffer " + str + ">";
  };
  if (customInspectSymbol) {
    Buffer.prototype[customInspectSymbol] = Buffer.prototype.inspect;
  }
  Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
    if (isInstance(target, Uint8Array)) {
      target = Buffer.from(target, target.offset, target.byteLength);
    }
    if (!Buffer.isBuffer(target)) {
      throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof target);
    }
    if (start === void 0) {
      start = 0;
    }
    if (end === void 0) {
      end = target ? target.length : 0;
    }
    if (thisStart === void 0) {
      thisStart = 0;
    }
    if (thisEnd === void 0) {
      thisEnd = this.length;
    }
    if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
      throw new RangeError("out of range index");
    }
    if (thisStart >= thisEnd && start >= end) {
      return 0;
    }
    if (thisStart >= thisEnd) {
      return -1;
    }
    if (start >= end) {
      return 1;
    }
    start >>>= 0;
    end >>>= 0;
    thisStart >>>= 0;
    thisEnd >>>= 0;
    if (this === target)
      return 0;
    let x3 = thisEnd - thisStart;
    let y4 = end - start;
    const len = Math.min(x3, y4);
    const thisCopy = this.slice(thisStart, thisEnd);
    const targetCopy = target.slice(start, end);
    for (let i4 = 0; i4 < len; ++i4) {
      if (thisCopy[i4] !== targetCopy[i4]) {
        x3 = thisCopy[i4];
        y4 = targetCopy[i4];
        break;
      }
    }
    if (x3 < y4)
      return -1;
    if (y4 < x3)
      return 1;
    return 0;
  };
  function bidirectionalIndexOf(buffer2, val, byteOffset, encoding, dir) {
    if (buffer2.length === 0)
      return -1;
    if (typeof byteOffset === "string") {
      encoding = byteOffset;
      byteOffset = 0;
    } else if (byteOffset > 2147483647) {
      byteOffset = 2147483647;
    } else if (byteOffset < -2147483648) {
      byteOffset = -2147483648;
    }
    byteOffset = +byteOffset;
    if (numberIsNaN(byteOffset)) {
      byteOffset = dir ? 0 : buffer2.length - 1;
    }
    if (byteOffset < 0)
      byteOffset = buffer2.length + byteOffset;
    if (byteOffset >= buffer2.length) {
      if (dir)
        return -1;
      else
        byteOffset = buffer2.length - 1;
    } else if (byteOffset < 0) {
      if (dir)
        byteOffset = 0;
      else
        return -1;
    }
    if (typeof val === "string") {
      val = Buffer.from(val, encoding);
    }
    if (Buffer.isBuffer(val)) {
      if (val.length === 0) {
        return -1;
      }
      return arrayIndexOf(buffer2, val, byteOffset, encoding, dir);
    } else if (typeof val === "number") {
      val = val & 255;
      if (typeof Uint8Array.prototype.indexOf === "function") {
        if (dir) {
          return Uint8Array.prototype.indexOf.call(buffer2, val, byteOffset);
        } else {
          return Uint8Array.prototype.lastIndexOf.call(buffer2, val, byteOffset);
        }
      }
      return arrayIndexOf(buffer2, [val], byteOffset, encoding, dir);
    }
    throw new TypeError("val must be string, number or Buffer");
  }
  function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
    let indexSize = 1;
    let arrLength = arr.length;
    let valLength = val.length;
    if (encoding !== void 0) {
      encoding = String(encoding).toLowerCase();
      if (encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le") {
        if (arr.length < 2 || val.length < 2) {
          return -1;
        }
        indexSize = 2;
        arrLength /= 2;
        valLength /= 2;
        byteOffset /= 2;
      }
    }
    function read(buf, i5) {
      if (indexSize === 1) {
        return buf[i5];
      } else {
        return buf.readUInt16BE(i5 * indexSize);
      }
    }
    let i4;
    if (dir) {
      let foundIndex = -1;
      for (i4 = byteOffset; i4 < arrLength; i4++) {
        if (read(arr, i4) === read(val, foundIndex === -1 ? 0 : i4 - foundIndex)) {
          if (foundIndex === -1)
            foundIndex = i4;
          if (i4 - foundIndex + 1 === valLength)
            return foundIndex * indexSize;
        } else {
          if (foundIndex !== -1)
            i4 -= i4 - foundIndex;
          foundIndex = -1;
        }
      }
    } else {
      if (byteOffset + valLength > arrLength)
        byteOffset = arrLength - valLength;
      for (i4 = byteOffset; i4 >= 0; i4--) {
        let found = true;
        for (let j3 = 0; j3 < valLength; j3++) {
          if (read(arr, i4 + j3) !== read(val, j3)) {
            found = false;
            break;
          }
        }
        if (found)
          return i4;
      }
    }
    return -1;
  }
  Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
    return this.indexOf(val, byteOffset, encoding) !== -1;
  };
  Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
  };
  Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
  };
  function hexWrite(buf, string, offset, length) {
    offset = Number(offset) || 0;
    const remaining = buf.length - offset;
    if (!length) {
      length = remaining;
    } else {
      length = Number(length);
      if (length > remaining) {
        length = remaining;
      }
    }
    const strLen = string.length;
    if (length > strLen / 2) {
      length = strLen / 2;
    }
    let i4;
    for (i4 = 0; i4 < length; ++i4) {
      const parsed = parseInt(string.substr(i4 * 2, 2), 16);
      if (numberIsNaN(parsed))
        return i4;
      buf[offset + i4] = parsed;
    }
    return i4;
  }
  function utf8Write(buf, string, offset, length) {
    return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
  }
  function asciiWrite(buf, string, offset, length) {
    return blitBuffer(asciiToBytes(string), buf, offset, length);
  }
  function base64Write(buf, string, offset, length) {
    return blitBuffer(base64ToBytes(string), buf, offset, length);
  }
  function ucs2Write(buf, string, offset, length) {
    return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
  }
  Buffer.prototype.write = function write(string, offset, length, encoding) {
    if (offset === void 0) {
      encoding = "utf8";
      length = this.length;
      offset = 0;
    } else if (length === void 0 && typeof offset === "string") {
      encoding = offset;
      length = this.length;
      offset = 0;
    } else if (isFinite(offset)) {
      offset = offset >>> 0;
      if (isFinite(length)) {
        length = length >>> 0;
        if (encoding === void 0)
          encoding = "utf8";
      } else {
        encoding = length;
        length = void 0;
      }
    } else {
      throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
    }
    const remaining = this.length - offset;
    if (length === void 0 || length > remaining)
      length = remaining;
    if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
      throw new RangeError("Attempt to write outside buffer bounds");
    }
    if (!encoding)
      encoding = "utf8";
    let loweredCase = false;
    for (; ; ) {
      switch (encoding) {
        case "hex":
          return hexWrite(this, string, offset, length);
        case "utf8":
        case "utf-8":
          return utf8Write(this, string, offset, length);
        case "ascii":
        case "latin1":
        case "binary":
          return asciiWrite(this, string, offset, length);
        case "base64":
          return base64Write(this, string, offset, length);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return ucs2Write(this, string, offset, length);
        default:
          if (loweredCase)
            throw new TypeError("Unknown encoding: " + encoding);
          encoding = ("" + encoding).toLowerCase();
          loweredCase = true;
      }
    }
  };
  Buffer.prototype.toJSON = function toJSON() {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };
  function base64Slice(buf, start, end) {
    if (start === 0 && end === buf.length) {
      return base64.fromByteArray(buf);
    } else {
      return base64.fromByteArray(buf.slice(start, end));
    }
  }
  function utf8Slice(buf, start, end) {
    end = Math.min(buf.length, end);
    const res = [];
    let i4 = start;
    while (i4 < end) {
      const firstByte = buf[i4];
      let codePoint = null;
      let bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
      if (i4 + bytesPerSequence <= end) {
        let secondByte, thirdByte, fourthByte, tempCodePoint;
        switch (bytesPerSequence) {
          case 1:
            if (firstByte < 128) {
              codePoint = firstByte;
            }
            break;
          case 2:
            secondByte = buf[i4 + 1];
            if ((secondByte & 192) === 128) {
              tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
              if (tempCodePoint > 127) {
                codePoint = tempCodePoint;
              }
            }
            break;
          case 3:
            secondByte = buf[i4 + 1];
            thirdByte = buf[i4 + 2];
            if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
              tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
              if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) {
                codePoint = tempCodePoint;
              }
            }
            break;
          case 4:
            secondByte = buf[i4 + 1];
            thirdByte = buf[i4 + 2];
            fourthByte = buf[i4 + 3];
            if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
              tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
              if (tempCodePoint > 65535 && tempCodePoint < 1114112) {
                codePoint = tempCodePoint;
              }
            }
        }
      }
      if (codePoint === null) {
        codePoint = 65533;
        bytesPerSequence = 1;
      } else if (codePoint > 65535) {
        codePoint -= 65536;
        res.push(codePoint >>> 10 & 1023 | 55296);
        codePoint = 56320 | codePoint & 1023;
      }
      res.push(codePoint);
      i4 += bytesPerSequence;
    }
    return decodeCodePointsArray(res);
  }
  const MAX_ARGUMENTS_LENGTH = 4096;
  function decodeCodePointsArray(codePoints) {
    const len = codePoints.length;
    if (len <= MAX_ARGUMENTS_LENGTH) {
      return String.fromCharCode.apply(String, codePoints);
    }
    let res = "";
    let i4 = 0;
    while (i4 < len) {
      res += String.fromCharCode.apply(String, codePoints.slice(i4, i4 += MAX_ARGUMENTS_LENGTH));
    }
    return res;
  }
  function asciiSlice(buf, start, end) {
    let ret = "";
    end = Math.min(buf.length, end);
    for (let i4 = start; i4 < end; ++i4) {
      ret += String.fromCharCode(buf[i4] & 127);
    }
    return ret;
  }
  function latin1Slice(buf, start, end) {
    let ret = "";
    end = Math.min(buf.length, end);
    for (let i4 = start; i4 < end; ++i4) {
      ret += String.fromCharCode(buf[i4]);
    }
    return ret;
  }
  function hexSlice(buf, start, end) {
    const len = buf.length;
    if (!start || start < 0)
      start = 0;
    if (!end || end < 0 || end > len)
      end = len;
    let out = "";
    for (let i4 = start; i4 < end; ++i4) {
      out += hexSliceLookupTable[buf[i4]];
    }
    return out;
  }
  function utf16leSlice(buf, start, end) {
    const bytes = buf.slice(start, end);
    let res = "";
    for (let i4 = 0; i4 < bytes.length - 1; i4 += 2) {
      res += String.fromCharCode(bytes[i4] + bytes[i4 + 1] * 256);
    }
    return res;
  }
  Buffer.prototype.slice = function slice(start, end) {
    const len = this.length;
    start = ~~start;
    end = end === void 0 ? len : ~~end;
    if (start < 0) {
      start += len;
      if (start < 0)
        start = 0;
    } else if (start > len) {
      start = len;
    }
    if (end < 0) {
      end += len;
      if (end < 0)
        end = 0;
    } else if (end > len) {
      end = len;
    }
    if (end < start)
      end = start;
    const newBuf = this.subarray(start, end);
    Object.setPrototypeOf(newBuf, Buffer.prototype);
    return newBuf;
  };
  function checkOffset(offset, ext, length) {
    if (offset % 1 !== 0 || offset < 0)
      throw new RangeError("offset is not uint");
    if (offset + ext > length)
      throw new RangeError("Trying to access beyond buffer length");
  }
  Buffer.prototype.readUintLE = Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength2, noAssert) {
    offset = offset >>> 0;
    byteLength2 = byteLength2 >>> 0;
    if (!noAssert)
      checkOffset(offset, byteLength2, this.length);
    let val = this[offset];
    let mul = 1;
    let i4 = 0;
    while (++i4 < byteLength2 && (mul *= 256)) {
      val += this[offset + i4] * mul;
    }
    return val;
  };
  Buffer.prototype.readUintBE = Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength2, noAssert) {
    offset = offset >>> 0;
    byteLength2 = byteLength2 >>> 0;
    if (!noAssert) {
      checkOffset(offset, byteLength2, this.length);
    }
    let val = this[offset + --byteLength2];
    let mul = 1;
    while (byteLength2 > 0 && (mul *= 256)) {
      val += this[offset + --byteLength2] * mul;
    }
    return val;
  };
  Buffer.prototype.readUint8 = Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert)
      checkOffset(offset, 1, this.length);
    return this[offset];
  };
  Buffer.prototype.readUint16LE = Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert)
      checkOffset(offset, 2, this.length);
    return this[offset] | this[offset + 1] << 8;
  };
  Buffer.prototype.readUint16BE = Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert)
      checkOffset(offset, 2, this.length);
    return this[offset] << 8 | this[offset + 1];
  };
  Buffer.prototype.readUint32LE = Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert)
      checkOffset(offset, 4, this.length);
    return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 16777216;
  };
  Buffer.prototype.readUint32BE = Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert)
      checkOffset(offset, 4, this.length);
    return this[offset] * 16777216 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
  };
  Buffer.prototype.readBigUInt64LE = defineBigIntMethod(function readBigUInt64LE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === void 0 || last === void 0) {
      boundsError(offset, this.length - 8);
    }
    const lo = first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24;
    const hi = this[++offset] + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + last * 2 ** 24;
    return BigInt(lo) + (BigInt(hi) << BigInt(32));
  });
  Buffer.prototype.readBigUInt64BE = defineBigIntMethod(function readBigUInt64BE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === void 0 || last === void 0) {
      boundsError(offset, this.length - 8);
    }
    const hi = first * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + this[++offset];
    const lo = this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last;
    return (BigInt(hi) << BigInt(32)) + BigInt(lo);
  });
  Buffer.prototype.readIntLE = function readIntLE(offset, byteLength2, noAssert) {
    offset = offset >>> 0;
    byteLength2 = byteLength2 >>> 0;
    if (!noAssert)
      checkOffset(offset, byteLength2, this.length);
    let val = this[offset];
    let mul = 1;
    let i4 = 0;
    while (++i4 < byteLength2 && (mul *= 256)) {
      val += this[offset + i4] * mul;
    }
    mul *= 128;
    if (val >= mul)
      val -= Math.pow(2, 8 * byteLength2);
    return val;
  };
  Buffer.prototype.readIntBE = function readIntBE(offset, byteLength2, noAssert) {
    offset = offset >>> 0;
    byteLength2 = byteLength2 >>> 0;
    if (!noAssert)
      checkOffset(offset, byteLength2, this.length);
    let i4 = byteLength2;
    let mul = 1;
    let val = this[offset + --i4];
    while (i4 > 0 && (mul *= 256)) {
      val += this[offset + --i4] * mul;
    }
    mul *= 128;
    if (val >= mul)
      val -= Math.pow(2, 8 * byteLength2);
    return val;
  };
  Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert)
      checkOffset(offset, 1, this.length);
    if (!(this[offset] & 128))
      return this[offset];
    return (255 - this[offset] + 1) * -1;
  };
  Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert)
      checkOffset(offset, 2, this.length);
    const val = this[offset] | this[offset + 1] << 8;
    return val & 32768 ? val | 4294901760 : val;
  };
  Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert)
      checkOffset(offset, 2, this.length);
    const val = this[offset + 1] | this[offset] << 8;
    return val & 32768 ? val | 4294901760 : val;
  };
  Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert)
      checkOffset(offset, 4, this.length);
    return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
  };
  Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert)
      checkOffset(offset, 4, this.length);
    return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
  };
  Buffer.prototype.readBigInt64LE = defineBigIntMethod(function readBigInt64LE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === void 0 || last === void 0) {
      boundsError(offset, this.length - 8);
    }
    const val = this[offset + 4] + this[offset + 5] * 2 ** 8 + this[offset + 6] * 2 ** 16 + (last << 24);
    return (BigInt(val) << BigInt(32)) + BigInt(first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24);
  });
  Buffer.prototype.readBigInt64BE = defineBigIntMethod(function readBigInt64BE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === void 0 || last === void 0) {
      boundsError(offset, this.length - 8);
    }
    const val = (first << 24) + // Overflow
    this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + this[++offset];
    return (BigInt(val) << BigInt(32)) + BigInt(this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last);
  });
  Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert)
      checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, true, 23, 4);
  };
  Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert)
      checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, false, 23, 4);
  };
  Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert)
      checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, true, 52, 8);
  };
  Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert)
      checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, false, 52, 8);
  };
  function checkInt(buf, value, offset, ext, max, min) {
    if (!Buffer.isBuffer(buf))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (value > max || value < min)
      throw new RangeError('"value" argument is out of bounds');
    if (offset + ext > buf.length)
      throw new RangeError("Index out of range");
  }
  Buffer.prototype.writeUintLE = Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength2, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength2 = byteLength2 >>> 0;
    if (!noAssert) {
      const maxBytes = Math.pow(2, 8 * byteLength2) - 1;
      checkInt(this, value, offset, byteLength2, maxBytes, 0);
    }
    let mul = 1;
    let i4 = 0;
    this[offset] = value & 255;
    while (++i4 < byteLength2 && (mul *= 256)) {
      this[offset + i4] = value / mul & 255;
    }
    return offset + byteLength2;
  };
  Buffer.prototype.writeUintBE = Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength2, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength2 = byteLength2 >>> 0;
    if (!noAssert) {
      const maxBytes = Math.pow(2, 8 * byteLength2) - 1;
      checkInt(this, value, offset, byteLength2, maxBytes, 0);
    }
    let i4 = byteLength2 - 1;
    let mul = 1;
    this[offset + i4] = value & 255;
    while (--i4 >= 0 && (mul *= 256)) {
      this[offset + i4] = value / mul & 255;
    }
    return offset + byteLength2;
  };
  Buffer.prototype.writeUint8 = Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert)
      checkInt(this, value, offset, 1, 255, 0);
    this[offset] = value & 255;
    return offset + 1;
  };
  Buffer.prototype.writeUint16LE = Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert)
      checkInt(this, value, offset, 2, 65535, 0);
    this[offset] = value & 255;
    this[offset + 1] = value >>> 8;
    return offset + 2;
  };
  Buffer.prototype.writeUint16BE = Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert)
      checkInt(this, value, offset, 2, 65535, 0);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 255;
    return offset + 2;
  };
  Buffer.prototype.writeUint32LE = Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert)
      checkInt(this, value, offset, 4, 4294967295, 0);
    this[offset + 3] = value >>> 24;
    this[offset + 2] = value >>> 16;
    this[offset + 1] = value >>> 8;
    this[offset] = value & 255;
    return offset + 4;
  };
  Buffer.prototype.writeUint32BE = Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert)
      checkInt(this, value, offset, 4, 4294967295, 0);
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 255;
    return offset + 4;
  };
  function wrtBigUInt64LE(buf, value, offset, min, max) {
    checkIntBI(value, min, max, buf, offset, 7);
    let lo = Number(value & BigInt(4294967295));
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    let hi = Number(value >> BigInt(32) & BigInt(4294967295));
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    return offset;
  }
  function wrtBigUInt64BE(buf, value, offset, min, max) {
    checkIntBI(value, min, max, buf, offset, 7);
    let lo = Number(value & BigInt(4294967295));
    buf[offset + 7] = lo;
    lo = lo >> 8;
    buf[offset + 6] = lo;
    lo = lo >> 8;
    buf[offset + 5] = lo;
    lo = lo >> 8;
    buf[offset + 4] = lo;
    let hi = Number(value >> BigInt(32) & BigInt(4294967295));
    buf[offset + 3] = hi;
    hi = hi >> 8;
    buf[offset + 2] = hi;
    hi = hi >> 8;
    buf[offset + 1] = hi;
    hi = hi >> 8;
    buf[offset] = hi;
    return offset + 8;
  }
  Buffer.prototype.writeBigUInt64LE = defineBigIntMethod(function writeBigUInt64LE(value, offset = 0) {
    return wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
  });
  Buffer.prototype.writeBigUInt64BE = defineBigIntMethod(function writeBigUInt64BE(value, offset = 0) {
    return wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
  });
  Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength2, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
      const limit = Math.pow(2, 8 * byteLength2 - 1);
      checkInt(this, value, offset, byteLength2, limit - 1, -limit);
    }
    let i4 = 0;
    let mul = 1;
    let sub = 0;
    this[offset] = value & 255;
    while (++i4 < byteLength2 && (mul *= 256)) {
      if (value < 0 && sub === 0 && this[offset + i4 - 1] !== 0) {
        sub = 1;
      }
      this[offset + i4] = (value / mul >> 0) - sub & 255;
    }
    return offset + byteLength2;
  };
  Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength2, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
      const limit = Math.pow(2, 8 * byteLength2 - 1);
      checkInt(this, value, offset, byteLength2, limit - 1, -limit);
    }
    let i4 = byteLength2 - 1;
    let mul = 1;
    let sub = 0;
    this[offset + i4] = value & 255;
    while (--i4 >= 0 && (mul *= 256)) {
      if (value < 0 && sub === 0 && this[offset + i4 + 1] !== 0) {
        sub = 1;
      }
      this[offset + i4] = (value / mul >> 0) - sub & 255;
    }
    return offset + byteLength2;
  };
  Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert)
      checkInt(this, value, offset, 1, 127, -128);
    if (value < 0)
      value = 255 + value + 1;
    this[offset] = value & 255;
    return offset + 1;
  };
  Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert)
      checkInt(this, value, offset, 2, 32767, -32768);
    this[offset] = value & 255;
    this[offset + 1] = value >>> 8;
    return offset + 2;
  };
  Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert)
      checkInt(this, value, offset, 2, 32767, -32768);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 255;
    return offset + 2;
  };
  Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert)
      checkInt(this, value, offset, 4, 2147483647, -2147483648);
    this[offset] = value & 255;
    this[offset + 1] = value >>> 8;
    this[offset + 2] = value >>> 16;
    this[offset + 3] = value >>> 24;
    return offset + 4;
  };
  Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert)
      checkInt(this, value, offset, 4, 2147483647, -2147483648);
    if (value < 0)
      value = 4294967295 + value + 1;
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 255;
    return offset + 4;
  };
  Buffer.prototype.writeBigInt64LE = defineBigIntMethod(function writeBigInt64LE(value, offset = 0) {
    return wrtBigUInt64LE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  });
  Buffer.prototype.writeBigInt64BE = defineBigIntMethod(function writeBigInt64BE(value, offset = 0) {
    return wrtBigUInt64BE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  });
  function checkIEEE754(buf, value, offset, ext, max, min) {
    if (offset + ext > buf.length)
      throw new RangeError("Index out of range");
    if (offset < 0)
      throw new RangeError("Index out of range");
  }
  function writeFloat(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
      checkIEEE754(buf, value, offset, 4);
    }
    ieee754.write(buf, value, offset, littleEndian, 23, 4);
    return offset + 4;
  }
  Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
    return writeFloat(this, value, offset, true, noAssert);
  };
  Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
    return writeFloat(this, value, offset, false, noAssert);
  };
  function writeDouble(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
      checkIEEE754(buf, value, offset, 8);
    }
    ieee754.write(buf, value, offset, littleEndian, 52, 8);
    return offset + 8;
  }
  Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
    return writeDouble(this, value, offset, true, noAssert);
  };
  Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
    return writeDouble(this, value, offset, false, noAssert);
  };
  Buffer.prototype.copy = function copy(target, targetStart, start, end) {
    if (!Buffer.isBuffer(target))
      throw new TypeError("argument should be a Buffer");
    if (!start)
      start = 0;
    if (!end && end !== 0)
      end = this.length;
    if (targetStart >= target.length)
      targetStart = target.length;
    if (!targetStart)
      targetStart = 0;
    if (end > 0 && end < start)
      end = start;
    if (end === start)
      return 0;
    if (target.length === 0 || this.length === 0)
      return 0;
    if (targetStart < 0) {
      throw new RangeError("targetStart out of bounds");
    }
    if (start < 0 || start >= this.length)
      throw new RangeError("Index out of range");
    if (end < 0)
      throw new RangeError("sourceEnd out of bounds");
    if (end > this.length)
      end = this.length;
    if (target.length - targetStart < end - start) {
      end = target.length - targetStart + start;
    }
    const len = end - start;
    if (this === target && typeof Uint8Array.prototype.copyWithin === "function") {
      this.copyWithin(targetStart, start, end);
    } else {
      Uint8Array.prototype.set.call(target, this.subarray(start, end), targetStart);
    }
    return len;
  };
  Buffer.prototype.fill = function fill(val, start, end, encoding) {
    if (typeof val === "string") {
      if (typeof start === "string") {
        encoding = start;
        start = 0;
        end = this.length;
      } else if (typeof end === "string") {
        encoding = end;
        end = this.length;
      }
      if (encoding !== void 0 && typeof encoding !== "string") {
        throw new TypeError("encoding must be a string");
      }
      if (typeof encoding === "string" && !Buffer.isEncoding(encoding)) {
        throw new TypeError("Unknown encoding: " + encoding);
      }
      if (val.length === 1) {
        const code = val.charCodeAt(0);
        if (encoding === "utf8" && code < 128 || encoding === "latin1") {
          val = code;
        }
      }
    } else if (typeof val === "number") {
      val = val & 255;
    } else if (typeof val === "boolean") {
      val = Number(val);
    }
    if (start < 0 || this.length < start || this.length < end) {
      throw new RangeError("Out of range index");
    }
    if (end <= start) {
      return this;
    }
    start = start >>> 0;
    end = end === void 0 ? this.length : end >>> 0;
    if (!val)
      val = 0;
    let i4;
    if (typeof val === "number") {
      for (i4 = start; i4 < end; ++i4) {
        this[i4] = val;
      }
    } else {
      const bytes = Buffer.isBuffer(val) ? val : Buffer.from(val, encoding);
      const len = bytes.length;
      if (len === 0) {
        throw new TypeError('The value "' + val + '" is invalid for argument "value"');
      }
      for (i4 = 0; i4 < end - start; ++i4) {
        this[i4 + start] = bytes[i4 % len];
      }
    }
    return this;
  };
  const errors = {};
  function E3(sym, getMessage, Base) {
    errors[sym] = class NodeError extends Base {
      constructor() {
        super();
        Object.defineProperty(this, "message", {
          value: getMessage.apply(this, arguments),
          writable: true,
          configurable: true
        });
        this.name = `${this.name} [${sym}]`;
        this.stack;
        delete this.name;
      }
      get code() {
        return sym;
      }
      set code(value) {
        Object.defineProperty(this, "code", {
          configurable: true,
          enumerable: true,
          value,
          writable: true
        });
      }
      toString() {
        return `${this.name} [${sym}]: ${this.message}`;
      }
    };
  }
  E3("ERR_BUFFER_OUT_OF_BOUNDS", function(name2) {
    if (name2) {
      return `${name2} is outside of buffer bounds`;
    }
    return "Attempt to access memory outside buffer bounds";
  }, RangeError);
  E3("ERR_INVALID_ARG_TYPE", function(name2, actual) {
    return `The "${name2}" argument must be of type number. Received type ${typeof actual}`;
  }, TypeError);
  E3("ERR_OUT_OF_RANGE", function(str, range, input) {
    let msg = `The value of "${str}" is out of range.`;
    let received = input;
    if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) {
      received = addNumericalSeparator(String(input));
    } else if (typeof input === "bigint") {
      received = String(input);
      if (input > BigInt(2) ** BigInt(32) || input < -(BigInt(2) ** BigInt(32))) {
        received = addNumericalSeparator(received);
      }
      received += "n";
    }
    msg += ` It must be ${range}. Received ${received}`;
    return msg;
  }, RangeError);
  function addNumericalSeparator(val) {
    let res = "";
    let i4 = val.length;
    const start = val[0] === "-" ? 1 : 0;
    for (; i4 >= start + 4; i4 -= 3) {
      res = `_${val.slice(i4 - 3, i4)}${res}`;
    }
    return `${val.slice(0, i4)}${res}`;
  }
  function checkBounds(buf, offset, byteLength2) {
    validateNumber(offset, "offset");
    if (buf[offset] === void 0 || buf[offset + byteLength2] === void 0) {
      boundsError(offset, buf.length - (byteLength2 + 1));
    }
  }
  function checkIntBI(value, min, max, buf, offset, byteLength2) {
    if (value > max || value < min) {
      const n4 = typeof min === "bigint" ? "n" : "";
      let range;
      if (byteLength2 > 3) {
        if (min === 0 || min === BigInt(0)) {
          range = `>= 0${n4} and < 2${n4} ** ${(byteLength2 + 1) * 8}${n4}`;
        } else {
          range = `>= -(2${n4} ** ${(byteLength2 + 1) * 8 - 1}${n4}) and < 2 ** ${(byteLength2 + 1) * 8 - 1}${n4}`;
        }
      } else {
        range = `>= ${min}${n4} and <= ${max}${n4}`;
      }
      throw new errors.ERR_OUT_OF_RANGE("value", range, value);
    }
    checkBounds(buf, offset, byteLength2);
  }
  function validateNumber(value, name2) {
    if (typeof value !== "number") {
      throw new errors.ERR_INVALID_ARG_TYPE(name2, "number", value);
    }
  }
  function boundsError(value, length, type) {
    if (Math.floor(value) !== value) {
      validateNumber(value, type);
      throw new errors.ERR_OUT_OF_RANGE(type || "offset", "an integer", value);
    }
    if (length < 0) {
      throw new errors.ERR_BUFFER_OUT_OF_BOUNDS();
    }
    throw new errors.ERR_OUT_OF_RANGE(type || "offset", `>= ${type ? 1 : 0} and <= ${length}`, value);
  }
  const INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
  function base64clean(str) {
    str = str.split("=")[0];
    str = str.trim().replace(INVALID_BASE64_RE, "");
    if (str.length < 2)
      return "";
    while (str.length % 4 !== 0) {
      str = str + "=";
    }
    return str;
  }
  function utf8ToBytes(string, units) {
    units = units || Infinity;
    let codePoint;
    const length = string.length;
    let leadSurrogate = null;
    const bytes = [];
    for (let i4 = 0; i4 < length; ++i4) {
      codePoint = string.charCodeAt(i4);
      if (codePoint > 55295 && codePoint < 57344) {
        if (!leadSurrogate) {
          if (codePoint > 56319) {
            if ((units -= 3) > -1)
              bytes.push(239, 191, 189);
            continue;
          } else if (i4 + 1 === length) {
            if ((units -= 3) > -1)
              bytes.push(239, 191, 189);
            continue;
          }
          leadSurrogate = codePoint;
          continue;
        }
        if (codePoint < 56320) {
          if ((units -= 3) > -1)
            bytes.push(239, 191, 189);
          leadSurrogate = codePoint;
          continue;
        }
        codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
      } else if (leadSurrogate) {
        if ((units -= 3) > -1)
          bytes.push(239, 191, 189);
      }
      leadSurrogate = null;
      if (codePoint < 128) {
        if ((units -= 1) < 0)
          break;
        bytes.push(codePoint);
      } else if (codePoint < 2048) {
        if ((units -= 2) < 0)
          break;
        bytes.push(codePoint >> 6 | 192, codePoint & 63 | 128);
      } else if (codePoint < 65536) {
        if ((units -= 3) < 0)
          break;
        bytes.push(codePoint >> 12 | 224, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
      } else if (codePoint < 1114112) {
        if ((units -= 4) < 0)
          break;
        bytes.push(codePoint >> 18 | 240, codePoint >> 12 & 63 | 128, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
      } else {
        throw new Error("Invalid code point");
      }
    }
    return bytes;
  }
  function asciiToBytes(str) {
    const byteArray = [];
    for (let i4 = 0; i4 < str.length; ++i4) {
      byteArray.push(str.charCodeAt(i4) & 255);
    }
    return byteArray;
  }
  function utf16leToBytes(str, units) {
    let c4, hi, lo;
    const byteArray = [];
    for (let i4 = 0; i4 < str.length; ++i4) {
      if ((units -= 2) < 0)
        break;
      c4 = str.charCodeAt(i4);
      hi = c4 >> 8;
      lo = c4 % 256;
      byteArray.push(lo);
      byteArray.push(hi);
    }
    return byteArray;
  }
  function base64ToBytes(str) {
    return base64.toByteArray(base64clean(str));
  }
  function blitBuffer(src, dst, offset, length) {
    let i4;
    for (i4 = 0; i4 < length; ++i4) {
      if (i4 + offset >= dst.length || i4 >= src.length)
        break;
      dst[i4 + offset] = src[i4];
    }
    return i4;
  }
  function isInstance(obj, type) {
    return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
  }
  function numberIsNaN(obj) {
    return obj !== obj;
  }
  const hexSliceLookupTable = function() {
    const alphabet = "0123456789abcdef";
    const table = new Array(256);
    for (let i4 = 0; i4 < 16; ++i4) {
      const i16 = i4 * 16;
      for (let j3 = 0; j3 < 16; ++j3) {
        table[i16 + j3] = alphabet[i4] + alphabet[j3];
      }
    }
    return table;
  }();
  function defineBigIntMethod(fn) {
    return typeof BigInt === "undefined" ? BufferBigIntNotDefined : fn;
  }
  function BufferBigIntNotDefined() {
    throw new Error("BigInt not supported");
  }
  return exports$g;
}
function dew$f() {
  if (_dewExec$f)
    return exports$f;
  _dewExec$f = true;
  if (typeof Object.create === "function") {
    exports$f = function inherits3(ctor, superCtor) {
      if (superCtor) {
        ctor.super_ = superCtor;
        ctor.prototype = Object.create(superCtor.prototype, {
          constructor: {
            value: ctor,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
      }
    };
  } else {
    exports$f = function inherits3(ctor, superCtor) {
      if (superCtor) {
        ctor.super_ = superCtor;
        var TempCtor = function() {
        };
        TempCtor.prototype = superCtor.prototype;
        ctor.prototype = new TempCtor();
        ctor.prototype.constructor = ctor;
      }
    };
  }
  return exports$f;
}
function dew$e() {
  if (_dewExec$e)
    return exports$e;
  _dewExec$e = true;
  exports$e = y.EventEmitter;
  return exports$e;
}
function dew$d() {
  if (_dewExec$d)
    return exports$d;
  _dewExec$d = true;
  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly)
        symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread(target) {
    for (var i4 = 1; i4 < arguments.length; i4++) {
      var source = arguments[i4] != null ? arguments[i4] : {};
      if (i4 % 2) {
        ownKeys(Object(source), true).forEach(function(key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }
    return target;
  }
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i4 = 0; i4 < props.length; i4++) {
      var descriptor = props[i4];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties(Constructor, staticProps);
    return Constructor;
  }
  var _require = buffer, Buffer = _require.Buffer;
  var _require2 = X, inspect3 = _require2.inspect;
  var custom = inspect3 && inspect3.custom || "inspect";
  function copyBuffer(src, target, offset) {
    Buffer.prototype.copy.call(src, target, offset);
  }
  exports$d = /* @__PURE__ */ function() {
    function BufferList() {
      _classCallCheck(this, BufferList);
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
    _createClass(BufferList, [{
      key: "push",
      value: function push(v3) {
        var entry = {
          data: v3,
          next: null
        };
        if (this.length > 0)
          this.tail.next = entry;
        else
          this.head = entry;
        this.tail = entry;
        ++this.length;
      }
    }, {
      key: "unshift",
      value: function unshift(v3) {
        var entry = {
          data: v3,
          next: this.head
        };
        if (this.length === 0)
          this.tail = entry;
        this.head = entry;
        ++this.length;
      }
    }, {
      key: "shift",
      value: function shift() {
        if (this.length === 0)
          return;
        var ret = this.head.data;
        if (this.length === 1)
          this.head = this.tail = null;
        else
          this.head = this.head.next;
        --this.length;
        return ret;
      }
    }, {
      key: "clear",
      value: function clear() {
        this.head = this.tail = null;
        this.length = 0;
      }
    }, {
      key: "join",
      value: function join(s4) {
        if (this.length === 0)
          return "";
        var p4 = this.head;
        var ret = "" + p4.data;
        while (p4 = p4.next) {
          ret += s4 + p4.data;
        }
        return ret;
      }
    }, {
      key: "concat",
      value: function concat(n4) {
        if (this.length === 0)
          return Buffer.alloc(0);
        var ret = Buffer.allocUnsafe(n4 >>> 0);
        var p4 = this.head;
        var i4 = 0;
        while (p4) {
          copyBuffer(p4.data, ret, i4);
          i4 += p4.data.length;
          p4 = p4.next;
        }
        return ret;
      }
      // Consumes a specified amount of bytes or characters from the buffered data.
    }, {
      key: "consume",
      value: function consume(n4, hasStrings) {
        var ret;
        if (n4 < this.head.data.length) {
          ret = this.head.data.slice(0, n4);
          this.head.data = this.head.data.slice(n4);
        } else if (n4 === this.head.data.length) {
          ret = this.shift();
        } else {
          ret = hasStrings ? this._getString(n4) : this._getBuffer(n4);
        }
        return ret;
      }
    }, {
      key: "first",
      value: function first() {
        return this.head.data;
      }
      // Consumes a specified amount of characters from the buffered data.
    }, {
      key: "_getString",
      value: function _getString(n4) {
        var p4 = this.head;
        var c4 = 1;
        var ret = p4.data;
        n4 -= ret.length;
        while (p4 = p4.next) {
          var str = p4.data;
          var nb = n4 > str.length ? str.length : n4;
          if (nb === str.length)
            ret += str;
          else
            ret += str.slice(0, n4);
          n4 -= nb;
          if (n4 === 0) {
            if (nb === str.length) {
              ++c4;
              if (p4.next)
                this.head = p4.next;
              else
                this.head = this.tail = null;
            } else {
              this.head = p4;
              p4.data = str.slice(nb);
            }
            break;
          }
          ++c4;
        }
        this.length -= c4;
        return ret;
      }
      // Consumes a specified amount of bytes from the buffered data.
    }, {
      key: "_getBuffer",
      value: function _getBuffer(n4) {
        var ret = Buffer.allocUnsafe(n4);
        var p4 = this.head;
        var c4 = 1;
        p4.data.copy(ret);
        n4 -= p4.data.length;
        while (p4 = p4.next) {
          var buf = p4.data;
          var nb = n4 > buf.length ? buf.length : n4;
          buf.copy(ret, ret.length - n4, 0, nb);
          n4 -= nb;
          if (n4 === 0) {
            if (nb === buf.length) {
              ++c4;
              if (p4.next)
                this.head = p4.next;
              else
                this.head = this.tail = null;
            } else {
              this.head = p4;
              p4.data = buf.slice(nb);
            }
            break;
          }
          ++c4;
        }
        this.length -= c4;
        return ret;
      }
      // Make sure the linked list only shows the minimal necessary information.
    }, {
      key: custom,
      value: function value(_3, options) {
        return inspect3(this, _objectSpread({}, options, {
          // Only inspect one level.
          depth: 0,
          // It should not recurse.
          customInspect: false
        }));
      }
    }]);
    return BufferList;
  }();
  return exports$d;
}
function dew$c() {
  if (_dewExec$c)
    return exports$c;
  _dewExec$c = true;
  var process$1 = process;
  function destroy(err, cb) {
    var _this = this;
    var readableDestroyed = this._readableState && this._readableState.destroyed;
    var writableDestroyed = this._writableState && this._writableState.destroyed;
    if (readableDestroyed || writableDestroyed) {
      if (cb) {
        cb(err);
      } else if (err) {
        if (!this._writableState) {
          process$1.nextTick(emitErrorNT, this, err);
        } else if (!this._writableState.errorEmitted) {
          this._writableState.errorEmitted = true;
          process$1.nextTick(emitErrorNT, this, err);
        }
      }
      return this;
    }
    if (this._readableState) {
      this._readableState.destroyed = true;
    }
    if (this._writableState) {
      this._writableState.destroyed = true;
    }
    this._destroy(err || null, function(err2) {
      if (!cb && err2) {
        if (!_this._writableState) {
          process$1.nextTick(emitErrorAndCloseNT, _this, err2);
        } else if (!_this._writableState.errorEmitted) {
          _this._writableState.errorEmitted = true;
          process$1.nextTick(emitErrorAndCloseNT, _this, err2);
        } else {
          process$1.nextTick(emitCloseNT, _this);
        }
      } else if (cb) {
        process$1.nextTick(emitCloseNT, _this);
        cb(err2);
      } else {
        process$1.nextTick(emitCloseNT, _this);
      }
    });
    return this;
  }
  function emitErrorAndCloseNT(self2, err) {
    emitErrorNT(self2, err);
    emitCloseNT(self2);
  }
  function emitCloseNT(self2) {
    if (self2._writableState && !self2._writableState.emitClose)
      return;
    if (self2._readableState && !self2._readableState.emitClose)
      return;
    self2.emit("close");
  }
  function undestroy() {
    if (this._readableState) {
      this._readableState.destroyed = false;
      this._readableState.reading = false;
      this._readableState.ended = false;
      this._readableState.endEmitted = false;
    }
    if (this._writableState) {
      this._writableState.destroyed = false;
      this._writableState.ended = false;
      this._writableState.ending = false;
      this._writableState.finalCalled = false;
      this._writableState.prefinished = false;
      this._writableState.finished = false;
      this._writableState.errorEmitted = false;
    }
  }
  function emitErrorNT(self2, err) {
    self2.emit("error", err);
  }
  function errorOrDestroy(stream, err) {
    var rState = stream._readableState;
    var wState = stream._writableState;
    if (rState && rState.autoDestroy || wState && wState.autoDestroy)
      stream.destroy(err);
    else
      stream.emit("error", err);
  }
  exports$c = {
    destroy,
    undestroy,
    errorOrDestroy
  };
  return exports$c;
}
function dew$b() {
  if (_dewExec$b)
    return exports$b;
  _dewExec$b = true;
  const codes = {};
  function createErrorType(code, message, Base) {
    if (!Base) {
      Base = Error;
    }
    function getMessage(arg1, arg2, arg3) {
      if (typeof message === "string") {
        return message;
      } else {
        return message(arg1, arg2, arg3);
      }
    }
    class NodeError extends Base {
      constructor(arg1, arg2, arg3) {
        super(getMessage(arg1, arg2, arg3));
      }
    }
    NodeError.prototype.name = Base.name;
    NodeError.prototype.code = code;
    codes[code] = NodeError;
  }
  function oneOf(expected, thing) {
    if (Array.isArray(expected)) {
      const len = expected.length;
      expected = expected.map((i4) => String(i4));
      if (len > 2) {
        return `one of ${thing} ${expected.slice(0, len - 1).join(", ")}, or ` + expected[len - 1];
      } else if (len === 2) {
        return `one of ${thing} ${expected[0]} or ${expected[1]}`;
      } else {
        return `of ${thing} ${expected[0]}`;
      }
    } else {
      return `of ${thing} ${String(expected)}`;
    }
  }
  function startsWith(str, search, pos) {
    return str.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search;
  }
  function endsWith(str, search, this_len) {
    if (this_len === void 0 || this_len > str.length) {
      this_len = str.length;
    }
    return str.substring(this_len - search.length, this_len) === search;
  }
  function includes(str, search, start) {
    if (typeof start !== "number") {
      start = 0;
    }
    if (start + search.length > str.length) {
      return false;
    } else {
      return str.indexOf(search, start) !== -1;
    }
  }
  createErrorType("ERR_INVALID_OPT_VALUE", function(name2, value) {
    return 'The value "' + value + '" is invalid for option "' + name2 + '"';
  }, TypeError);
  createErrorType("ERR_INVALID_ARG_TYPE", function(name2, expected, actual) {
    let determiner;
    if (typeof expected === "string" && startsWith(expected, "not ")) {
      determiner = "must not be";
      expected = expected.replace(/^not /, "");
    } else {
      determiner = "must be";
    }
    let msg;
    if (endsWith(name2, " argument")) {
      msg = `The ${name2} ${determiner} ${oneOf(expected, "type")}`;
    } else {
      const type = includes(name2, ".") ? "property" : "argument";
      msg = `The "${name2}" ${type} ${determiner} ${oneOf(expected, "type")}`;
    }
    msg += `. Received type ${typeof actual}`;
    return msg;
  }, TypeError);
  createErrorType("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF");
  createErrorType("ERR_METHOD_NOT_IMPLEMENTED", function(name2) {
    return "The " + name2 + " method is not implemented";
  });
  createErrorType("ERR_STREAM_PREMATURE_CLOSE", "Premature close");
  createErrorType("ERR_STREAM_DESTROYED", function(name2) {
    return "Cannot call " + name2 + " after a stream was destroyed";
  });
  createErrorType("ERR_MULTIPLE_CALLBACK", "Callback called multiple times");
  createErrorType("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable");
  createErrorType("ERR_STREAM_WRITE_AFTER_END", "write after end");
  createErrorType("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError);
  createErrorType("ERR_UNKNOWN_ENCODING", function(arg) {
    return "Unknown encoding: " + arg;
  }, TypeError);
  createErrorType("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event");
  exports$b.codes = codes;
  return exports$b;
}
function dew$a() {
  if (_dewExec$a)
    return exports$a;
  _dewExec$a = true;
  var ERR_INVALID_OPT_VALUE = dew$b().codes.ERR_INVALID_OPT_VALUE;
  function highWaterMarkFrom(options, isDuplex, duplexKey) {
    return options.highWaterMark != null ? options.highWaterMark : isDuplex ? options[duplexKey] : null;
  }
  function getHighWaterMark(state, options, duplexKey, isDuplex) {
    var hwm = highWaterMarkFrom(options, isDuplex, duplexKey);
    if (hwm != null) {
      if (!(isFinite(hwm) && Math.floor(hwm) === hwm) || hwm < 0) {
        var name2 = isDuplex ? duplexKey : "highWaterMark";
        throw new ERR_INVALID_OPT_VALUE(name2, hwm);
      }
      return Math.floor(hwm);
    }
    return state.objectMode ? 16 : 16 * 1024;
  }
  exports$a = {
    getHighWaterMark
  };
  return exports$a;
}
function dew$9() {
  if (_dewExec$9)
    return exports$9;
  _dewExec$9 = true;
  exports$9 = deprecate3;
  function deprecate3(fn, msg) {
    if (config("noDeprecation")) {
      return fn;
    }
    var warned = false;
    function deprecated() {
      if (!warned) {
        if (config("throwDeprecation")) {
          throw new Error(msg);
        } else if (config("traceDeprecation")) {
          console.trace(msg);
        } else {
          console.warn(msg);
        }
        warned = true;
      }
      return fn.apply(this || _global$2, arguments);
    }
    return deprecated;
  }
  function config(name2) {
    try {
      if (!_global$2.localStorage)
        return false;
    } catch (_3) {
      return false;
    }
    var val = _global$2.localStorage[name2];
    if (null == val)
      return false;
    return String(val).toLowerCase() === "true";
  }
  return exports$9;
}
function dew$8() {
  if (_dewExec$8)
    return exports$8;
  _dewExec$8 = true;
  var process$1 = process;
  exports$8 = Writable;
  function CorkedRequest(state) {
    var _this = this;
    this.next = null;
    this.entry = null;
    this.finish = function() {
      onCorkedFinish(_this, state);
    };
  }
  var Duplex;
  Writable.WritableState = WritableState;
  var internalUtil = {
    deprecate: dew$9()
  };
  var Stream = dew$e();
  var Buffer = buffer.Buffer;
  var OurUint8Array = _global$1.Uint8Array || function() {
  };
  function _uint8ArrayToBuffer(chunk) {
    return Buffer.from(chunk);
  }
  function _isUint8Array(obj) {
    return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
  }
  var destroyImpl = dew$c();
  var _require = dew$a(), getHighWaterMark = _require.getHighWaterMark;
  var _require$codes = dew$b().codes, ERR_INVALID_ARG_TYPE = _require$codes.ERR_INVALID_ARG_TYPE, ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED, ERR_MULTIPLE_CALLBACK = _require$codes.ERR_MULTIPLE_CALLBACK, ERR_STREAM_CANNOT_PIPE = _require$codes.ERR_STREAM_CANNOT_PIPE, ERR_STREAM_DESTROYED = _require$codes.ERR_STREAM_DESTROYED, ERR_STREAM_NULL_VALUES = _require$codes.ERR_STREAM_NULL_VALUES, ERR_STREAM_WRITE_AFTER_END = _require$codes.ERR_STREAM_WRITE_AFTER_END, ERR_UNKNOWN_ENCODING = _require$codes.ERR_UNKNOWN_ENCODING;
  var errorOrDestroy = destroyImpl.errorOrDestroy;
  dew$f()(Writable, Stream);
  function nop() {
  }
  function WritableState(options, stream, isDuplex) {
    Duplex = Duplex || dew$7();
    options = options || {};
    if (typeof isDuplex !== "boolean")
      isDuplex = stream instanceof Duplex;
    this.objectMode = !!options.objectMode;
    if (isDuplex)
      this.objectMode = this.objectMode || !!options.writableObjectMode;
    this.highWaterMark = getHighWaterMark(this, options, "writableHighWaterMark", isDuplex);
    this.finalCalled = false;
    this.needDrain = false;
    this.ending = false;
    this.ended = false;
    this.finished = false;
    this.destroyed = false;
    var noDecode = options.decodeStrings === false;
    this.decodeStrings = !noDecode;
    this.defaultEncoding = options.defaultEncoding || "utf8";
    this.length = 0;
    this.writing = false;
    this.corked = 0;
    this.sync = true;
    this.bufferProcessing = false;
    this.onwrite = function(er) {
      onwrite(stream, er);
    };
    this.writecb = null;
    this.writelen = 0;
    this.bufferedRequest = null;
    this.lastBufferedRequest = null;
    this.pendingcb = 0;
    this.prefinished = false;
    this.errorEmitted = false;
    this.emitClose = options.emitClose !== false;
    this.autoDestroy = !!options.autoDestroy;
    this.bufferedRequestCount = 0;
    this.corkedRequestsFree = new CorkedRequest(this);
  }
  WritableState.prototype.getBuffer = function getBuffer() {
    var current = this.bufferedRequest;
    var out = [];
    while (current) {
      out.push(current);
      current = current.next;
    }
    return out;
  };
  (function() {
    try {
      Object.defineProperty(WritableState.prototype, "buffer", {
        get: internalUtil.deprecate(function writableStateBufferGetter() {
          return this.getBuffer();
        }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
      });
    } catch (_3) {
    }
  })();
  var realHasInstance;
  if (typeof Symbol === "function" && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] === "function") {
    realHasInstance = Function.prototype[Symbol.hasInstance];
    Object.defineProperty(Writable, Symbol.hasInstance, {
      value: function value(object) {
        if (realHasInstance.call(this, object))
          return true;
        if (this !== Writable)
          return false;
        return object && object._writableState instanceof WritableState;
      }
    });
  } else {
    realHasInstance = function realHasInstance2(object) {
      return object instanceof this;
    };
  }
  function Writable(options) {
    Duplex = Duplex || dew$7();
    var isDuplex = this instanceof Duplex;
    if (!isDuplex && !realHasInstance.call(Writable, this))
      return new Writable(options);
    this._writableState = new WritableState(options, this, isDuplex);
    this.writable = true;
    if (options) {
      if (typeof options.write === "function")
        this._write = options.write;
      if (typeof options.writev === "function")
        this._writev = options.writev;
      if (typeof options.destroy === "function")
        this._destroy = options.destroy;
      if (typeof options.final === "function")
        this._final = options.final;
    }
    Stream.call(this);
  }
  Writable.prototype.pipe = function() {
    errorOrDestroy(this, new ERR_STREAM_CANNOT_PIPE());
  };
  function writeAfterEnd(stream, cb) {
    var er = new ERR_STREAM_WRITE_AFTER_END();
    errorOrDestroy(stream, er);
    process$1.nextTick(cb, er);
  }
  function validChunk(stream, state, chunk, cb) {
    var er;
    if (chunk === null) {
      er = new ERR_STREAM_NULL_VALUES();
    } else if (typeof chunk !== "string" && !state.objectMode) {
      er = new ERR_INVALID_ARG_TYPE("chunk", ["string", "Buffer"], chunk);
    }
    if (er) {
      errorOrDestroy(stream, er);
      process$1.nextTick(cb, er);
      return false;
    }
    return true;
  }
  Writable.prototype.write = function(chunk, encoding, cb) {
    var state = this._writableState;
    var ret = false;
    var isBuf = !state.objectMode && _isUint8Array(chunk);
    if (isBuf && !Buffer.isBuffer(chunk)) {
      chunk = _uint8ArrayToBuffer(chunk);
    }
    if (typeof encoding === "function") {
      cb = encoding;
      encoding = null;
    }
    if (isBuf)
      encoding = "buffer";
    else if (!encoding)
      encoding = state.defaultEncoding;
    if (typeof cb !== "function")
      cb = nop;
    if (state.ending)
      writeAfterEnd(this, cb);
    else if (isBuf || validChunk(this, state, chunk, cb)) {
      state.pendingcb++;
      ret = writeOrBuffer(this, state, isBuf, chunk, encoding, cb);
    }
    return ret;
  };
  Writable.prototype.cork = function() {
    this._writableState.corked++;
  };
  Writable.prototype.uncork = function() {
    var state = this._writableState;
    if (state.corked) {
      state.corked--;
      if (!state.writing && !state.corked && !state.bufferProcessing && state.bufferedRequest)
        clearBuffer(this, state);
    }
  };
  Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
    if (typeof encoding === "string")
      encoding = encoding.toLowerCase();
    if (!(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((encoding + "").toLowerCase()) > -1))
      throw new ERR_UNKNOWN_ENCODING(encoding);
    this._writableState.defaultEncoding = encoding;
    return this;
  };
  Object.defineProperty(Writable.prototype, "writableBuffer", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
      return this._writableState && this._writableState.getBuffer();
    }
  });
  function decodeChunk(state, chunk, encoding) {
    if (!state.objectMode && state.decodeStrings !== false && typeof chunk === "string") {
      chunk = Buffer.from(chunk, encoding);
    }
    return chunk;
  }
  Object.defineProperty(Writable.prototype, "writableHighWaterMark", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
      return this._writableState.highWaterMark;
    }
  });
  function writeOrBuffer(stream, state, isBuf, chunk, encoding, cb) {
    if (!isBuf) {
      var newChunk = decodeChunk(state, chunk, encoding);
      if (chunk !== newChunk) {
        isBuf = true;
        encoding = "buffer";
        chunk = newChunk;
      }
    }
    var len = state.objectMode ? 1 : chunk.length;
    state.length += len;
    var ret = state.length < state.highWaterMark;
    if (!ret)
      state.needDrain = true;
    if (state.writing || state.corked) {
      var last = state.lastBufferedRequest;
      state.lastBufferedRequest = {
        chunk,
        encoding,
        isBuf,
        callback: cb,
        next: null
      };
      if (last) {
        last.next = state.lastBufferedRequest;
      } else {
        state.bufferedRequest = state.lastBufferedRequest;
      }
      state.bufferedRequestCount += 1;
    } else {
      doWrite(stream, state, false, len, chunk, encoding, cb);
    }
    return ret;
  }
  function doWrite(stream, state, writev, len, chunk, encoding, cb) {
    state.writelen = len;
    state.writecb = cb;
    state.writing = true;
    state.sync = true;
    if (state.destroyed)
      state.onwrite(new ERR_STREAM_DESTROYED("write"));
    else if (writev)
      stream._writev(chunk, state.onwrite);
    else
      stream._write(chunk, encoding, state.onwrite);
    state.sync = false;
  }
  function onwriteError(stream, state, sync, er, cb) {
    --state.pendingcb;
    if (sync) {
      process$1.nextTick(cb, er);
      process$1.nextTick(finishMaybe, stream, state);
      stream._writableState.errorEmitted = true;
      errorOrDestroy(stream, er);
    } else {
      cb(er);
      stream._writableState.errorEmitted = true;
      errorOrDestroy(stream, er);
      finishMaybe(stream, state);
    }
  }
  function onwriteStateUpdate(state) {
    state.writing = false;
    state.writecb = null;
    state.length -= state.writelen;
    state.writelen = 0;
  }
  function onwrite(stream, er) {
    var state = stream._writableState;
    var sync = state.sync;
    var cb = state.writecb;
    if (typeof cb !== "function")
      throw new ERR_MULTIPLE_CALLBACK();
    onwriteStateUpdate(state);
    if (er)
      onwriteError(stream, state, sync, er, cb);
    else {
      var finished = needFinish(state) || stream.destroyed;
      if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
        clearBuffer(stream, state);
      }
      if (sync) {
        process$1.nextTick(afterWrite, stream, state, finished, cb);
      } else {
        afterWrite(stream, state, finished, cb);
      }
    }
  }
  function afterWrite(stream, state, finished, cb) {
    if (!finished)
      onwriteDrain(stream, state);
    state.pendingcb--;
    cb();
    finishMaybe(stream, state);
  }
  function onwriteDrain(stream, state) {
    if (state.length === 0 && state.needDrain) {
      state.needDrain = false;
      stream.emit("drain");
    }
  }
  function clearBuffer(stream, state) {
    state.bufferProcessing = true;
    var entry = state.bufferedRequest;
    if (stream._writev && entry && entry.next) {
      var l4 = state.bufferedRequestCount;
      var buffer2 = new Array(l4);
      var holder = state.corkedRequestsFree;
      holder.entry = entry;
      var count = 0;
      var allBuffers = true;
      while (entry) {
        buffer2[count] = entry;
        if (!entry.isBuf)
          allBuffers = false;
        entry = entry.next;
        count += 1;
      }
      buffer2.allBuffers = allBuffers;
      doWrite(stream, state, true, state.length, buffer2, "", holder.finish);
      state.pendingcb++;
      state.lastBufferedRequest = null;
      if (holder.next) {
        state.corkedRequestsFree = holder.next;
        holder.next = null;
      } else {
        state.corkedRequestsFree = new CorkedRequest(state);
      }
      state.bufferedRequestCount = 0;
    } else {
      while (entry) {
        var chunk = entry.chunk;
        var encoding = entry.encoding;
        var cb = entry.callback;
        var len = state.objectMode ? 1 : chunk.length;
        doWrite(stream, state, false, len, chunk, encoding, cb);
        entry = entry.next;
        state.bufferedRequestCount--;
        if (state.writing) {
          break;
        }
      }
      if (entry === null)
        state.lastBufferedRequest = null;
    }
    state.bufferedRequest = entry;
    state.bufferProcessing = false;
  }
  Writable.prototype._write = function(chunk, encoding, cb) {
    cb(new ERR_METHOD_NOT_IMPLEMENTED("_write()"));
  };
  Writable.prototype._writev = null;
  Writable.prototype.end = function(chunk, encoding, cb) {
    var state = this._writableState;
    if (typeof chunk === "function") {
      cb = chunk;
      chunk = null;
      encoding = null;
    } else if (typeof encoding === "function") {
      cb = encoding;
      encoding = null;
    }
    if (chunk !== null && chunk !== void 0)
      this.write(chunk, encoding);
    if (state.corked) {
      state.corked = 1;
      this.uncork();
    }
    if (!state.ending)
      endWritable(this, state, cb);
    return this;
  };
  Object.defineProperty(Writable.prototype, "writableLength", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
      return this._writableState.length;
    }
  });
  function needFinish(state) {
    return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
  }
  function callFinal(stream, state) {
    stream._final(function(err) {
      state.pendingcb--;
      if (err) {
        errorOrDestroy(stream, err);
      }
      state.prefinished = true;
      stream.emit("prefinish");
      finishMaybe(stream, state);
    });
  }
  function prefinish(stream, state) {
    if (!state.prefinished && !state.finalCalled) {
      if (typeof stream._final === "function" && !state.destroyed) {
        state.pendingcb++;
        state.finalCalled = true;
        process$1.nextTick(callFinal, stream, state);
      } else {
        state.prefinished = true;
        stream.emit("prefinish");
      }
    }
  }
  function finishMaybe(stream, state) {
    var need = needFinish(state);
    if (need) {
      prefinish(stream, state);
      if (state.pendingcb === 0) {
        state.finished = true;
        stream.emit("finish");
        if (state.autoDestroy) {
          var rState = stream._readableState;
          if (!rState || rState.autoDestroy && rState.endEmitted) {
            stream.destroy();
          }
        }
      }
    }
    return need;
  }
  function endWritable(stream, state, cb) {
    state.ending = true;
    finishMaybe(stream, state);
    if (cb) {
      if (state.finished)
        process$1.nextTick(cb);
      else
        stream.once("finish", cb);
    }
    state.ended = true;
    stream.writable = false;
  }
  function onCorkedFinish(corkReq, state, err) {
    var entry = corkReq.entry;
    corkReq.entry = null;
    while (entry) {
      var cb = entry.callback;
      state.pendingcb--;
      cb(err);
      entry = entry.next;
    }
    state.corkedRequestsFree.next = corkReq;
  }
  Object.defineProperty(Writable.prototype, "destroyed", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
      if (this._writableState === void 0) {
        return false;
      }
      return this._writableState.destroyed;
    },
    set: function set(value) {
      if (!this._writableState) {
        return;
      }
      this._writableState.destroyed = value;
    }
  });
  Writable.prototype.destroy = destroyImpl.destroy;
  Writable.prototype._undestroy = destroyImpl.undestroy;
  Writable.prototype._destroy = function(err, cb) {
    cb(err);
  };
  return exports$8;
}
function dew$7() {
  if (_dewExec$7)
    return exports$7;
  _dewExec$7 = true;
  var process$1 = process;
  var objectKeys = Object.keys || function(obj) {
    var keys2 = [];
    for (var key in obj) {
      keys2.push(key);
    }
    return keys2;
  };
  exports$7 = Duplex;
  var Readable = dew$3();
  var Writable = dew$8();
  dew$f()(Duplex, Readable);
  {
    var keys = objectKeys(Writable.prototype);
    for (var v3 = 0; v3 < keys.length; v3++) {
      var method = keys[v3];
      if (!Duplex.prototype[method])
        Duplex.prototype[method] = Writable.prototype[method];
    }
  }
  function Duplex(options) {
    if (!(this instanceof Duplex))
      return new Duplex(options);
    Readable.call(this, options);
    Writable.call(this, options);
    this.allowHalfOpen = true;
    if (options) {
      if (options.readable === false)
        this.readable = false;
      if (options.writable === false)
        this.writable = false;
      if (options.allowHalfOpen === false) {
        this.allowHalfOpen = false;
        this.once("end", onend);
      }
    }
  }
  Object.defineProperty(Duplex.prototype, "writableHighWaterMark", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
      return this._writableState.highWaterMark;
    }
  });
  Object.defineProperty(Duplex.prototype, "writableBuffer", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
      return this._writableState && this._writableState.getBuffer();
    }
  });
  Object.defineProperty(Duplex.prototype, "writableLength", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
      return this._writableState.length;
    }
  });
  function onend() {
    if (this._writableState.ended)
      return;
    process$1.nextTick(onEndNT, this);
  }
  function onEndNT(self2) {
    self2.end();
  }
  Object.defineProperty(Duplex.prototype, "destroyed", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
      if (this._readableState === void 0 || this._writableState === void 0) {
        return false;
      }
      return this._readableState.destroyed && this._writableState.destroyed;
    },
    set: function set(value) {
      if (this._readableState === void 0 || this._writableState === void 0) {
        return;
      }
      this._readableState.destroyed = value;
      this._writableState.destroyed = value;
    }
  });
  return exports$7;
}
function dew$6() {
  if (_dewExec$6)
    return exports$6;
  _dewExec$6 = true;
  var ERR_STREAM_PREMATURE_CLOSE = dew$b().codes.ERR_STREAM_PREMATURE_CLOSE;
  function once2(callback) {
    var called = false;
    return function() {
      if (called)
        return;
      called = true;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      callback.apply(this, args);
    };
  }
  function noop() {
  }
  function isRequest(stream) {
    return stream.setHeader && typeof stream.abort === "function";
  }
  function eos(stream, opts, callback) {
    if (typeof opts === "function")
      return eos(stream, null, opts);
    if (!opts)
      opts = {};
    callback = once2(callback || noop);
    var readable = opts.readable || opts.readable !== false && stream.readable;
    var writable = opts.writable || opts.writable !== false && stream.writable;
    var onlegacyfinish = function onlegacyfinish2() {
      if (!stream.writable)
        onfinish();
    };
    var writableEnded = stream._writableState && stream._writableState.finished;
    var onfinish = function onfinish2() {
      writable = false;
      writableEnded = true;
      if (!readable)
        callback.call(stream);
    };
    var readableEnded = stream._readableState && stream._readableState.endEmitted;
    var onend = function onend2() {
      readable = false;
      readableEnded = true;
      if (!writable)
        callback.call(stream);
    };
    var onerror = function onerror2(err) {
      callback.call(stream, err);
    };
    var onclose = function onclose2() {
      var err;
      if (readable && !readableEnded) {
        if (!stream._readableState || !stream._readableState.ended)
          err = new ERR_STREAM_PREMATURE_CLOSE();
        return callback.call(stream, err);
      }
      if (writable && !writableEnded) {
        if (!stream._writableState || !stream._writableState.ended)
          err = new ERR_STREAM_PREMATURE_CLOSE();
        return callback.call(stream, err);
      }
    };
    var onrequest = function onrequest2() {
      stream.req.on("finish", onfinish);
    };
    if (isRequest(stream)) {
      stream.on("complete", onfinish);
      stream.on("abort", onclose);
      if (stream.req)
        onrequest();
      else
        stream.on("request", onrequest);
    } else if (writable && !stream._writableState) {
      stream.on("end", onlegacyfinish);
      stream.on("close", onlegacyfinish);
    }
    stream.on("end", onend);
    stream.on("finish", onfinish);
    if (opts.error !== false)
      stream.on("error", onerror);
    stream.on("close", onclose);
    return function() {
      stream.removeListener("complete", onfinish);
      stream.removeListener("abort", onclose);
      stream.removeListener("request", onrequest);
      if (stream.req)
        stream.req.removeListener("finish", onfinish);
      stream.removeListener("end", onlegacyfinish);
      stream.removeListener("close", onlegacyfinish);
      stream.removeListener("finish", onfinish);
      stream.removeListener("end", onend);
      stream.removeListener("error", onerror);
      stream.removeListener("close", onclose);
    };
  }
  exports$6 = eos;
  return exports$6;
}
function dew$5() {
  if (_dewExec$5)
    return exports$5;
  _dewExec$5 = true;
  var process$1 = process;
  var _Object$setPrototypeO;
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  var finished = dew$6();
  var kLastResolve = Symbol("lastResolve");
  var kLastReject = Symbol("lastReject");
  var kError = Symbol("error");
  var kEnded = Symbol("ended");
  var kLastPromise = Symbol("lastPromise");
  var kHandlePromise = Symbol("handlePromise");
  var kStream = Symbol("stream");
  function createIterResult2(value, done) {
    return {
      value,
      done
    };
  }
  function readAndResolve(iter) {
    var resolve = iter[kLastResolve];
    if (resolve !== null) {
      var data = iter[kStream].read();
      if (data !== null) {
        iter[kLastPromise] = null;
        iter[kLastResolve] = null;
        iter[kLastReject] = null;
        resolve(createIterResult2(data, false));
      }
    }
  }
  function onReadable(iter) {
    process$1.nextTick(readAndResolve, iter);
  }
  function wrapForNext(lastPromise, iter) {
    return function(resolve, reject) {
      lastPromise.then(function() {
        if (iter[kEnded]) {
          resolve(createIterResult2(void 0, true));
          return;
        }
        iter[kHandlePromise](resolve, reject);
      }, reject);
    };
  }
  var AsyncIteratorPrototype = Object.getPrototypeOf(function() {
  });
  var ReadableStreamAsyncIteratorPrototype = Object.setPrototypeOf((_Object$setPrototypeO = {
    get stream() {
      return this[kStream];
    },
    next: function next() {
      var _this = this;
      var error = this[kError];
      if (error !== null) {
        return Promise.reject(error);
      }
      if (this[kEnded]) {
        return Promise.resolve(createIterResult2(void 0, true));
      }
      if (this[kStream].destroyed) {
        return new Promise(function(resolve, reject) {
          process$1.nextTick(function() {
            if (_this[kError]) {
              reject(_this[kError]);
            } else {
              resolve(createIterResult2(void 0, true));
            }
          });
        });
      }
      var lastPromise = this[kLastPromise];
      var promise;
      if (lastPromise) {
        promise = new Promise(wrapForNext(lastPromise, this));
      } else {
        var data = this[kStream].read();
        if (data !== null) {
          return Promise.resolve(createIterResult2(data, false));
        }
        promise = new Promise(this[kHandlePromise]);
      }
      this[kLastPromise] = promise;
      return promise;
    }
  }, _defineProperty(_Object$setPrototypeO, Symbol.asyncIterator, function() {
    return this;
  }), _defineProperty(_Object$setPrototypeO, "return", function _return() {
    var _this2 = this;
    return new Promise(function(resolve, reject) {
      _this2[kStream].destroy(null, function(err) {
        if (err) {
          reject(err);
          return;
        }
        resolve(createIterResult2(void 0, true));
      });
    });
  }), _Object$setPrototypeO), AsyncIteratorPrototype);
  var createReadableStreamAsyncIterator = function createReadableStreamAsyncIterator2(stream) {
    var _Object$create;
    var iterator = Object.create(ReadableStreamAsyncIteratorPrototype, (_Object$create = {}, _defineProperty(_Object$create, kStream, {
      value: stream,
      writable: true
    }), _defineProperty(_Object$create, kLastResolve, {
      value: null,
      writable: true
    }), _defineProperty(_Object$create, kLastReject, {
      value: null,
      writable: true
    }), _defineProperty(_Object$create, kError, {
      value: null,
      writable: true
    }), _defineProperty(_Object$create, kEnded, {
      value: stream._readableState.endEmitted,
      writable: true
    }), _defineProperty(_Object$create, kHandlePromise, {
      value: function value(resolve, reject) {
        var data = iterator[kStream].read();
        if (data) {
          iterator[kLastPromise] = null;
          iterator[kLastResolve] = null;
          iterator[kLastReject] = null;
          resolve(createIterResult2(data, false));
        } else {
          iterator[kLastResolve] = resolve;
          iterator[kLastReject] = reject;
        }
      },
      writable: true
    }), _Object$create));
    iterator[kLastPromise] = null;
    finished(stream, function(err) {
      if (err && err.code !== "ERR_STREAM_PREMATURE_CLOSE") {
        var reject = iterator[kLastReject];
        if (reject !== null) {
          iterator[kLastPromise] = null;
          iterator[kLastResolve] = null;
          iterator[kLastReject] = null;
          reject(err);
        }
        iterator[kError] = err;
        return;
      }
      var resolve = iterator[kLastResolve];
      if (resolve !== null) {
        iterator[kLastPromise] = null;
        iterator[kLastResolve] = null;
        iterator[kLastReject] = null;
        resolve(createIterResult2(void 0, true));
      }
      iterator[kEnded] = true;
    });
    stream.on("readable", onReadable.bind(null, iterator));
    return iterator;
  };
  exports$5 = createReadableStreamAsyncIterator;
  return exports$5;
}
function dew$4() {
  if (_dewExec$4)
    return exports$4;
  _dewExec$4 = true;
  exports$4 = function() {
    throw new Error("Readable.from is not available in the browser");
  };
  return exports$4;
}
function dew$3() {
  if (_dewExec$3)
    return exports$3;
  _dewExec$3 = true;
  var process$1 = process;
  exports$3 = Readable;
  var Duplex;
  Readable.ReadableState = ReadableState;
  y.EventEmitter;
  var EElistenerCount = function EElistenerCount2(emitter, type) {
    return emitter.listeners(type).length;
  };
  var Stream = dew$e();
  var Buffer = buffer.Buffer;
  var OurUint8Array = _global2.Uint8Array || function() {
  };
  function _uint8ArrayToBuffer(chunk) {
    return Buffer.from(chunk);
  }
  function _isUint8Array(obj) {
    return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
  }
  var debugUtil = X;
  var debug;
  if (debugUtil && debugUtil.debuglog) {
    debug = debugUtil.debuglog("stream");
  } else {
    debug = function debug2() {
    };
  }
  var BufferList = dew$d();
  var destroyImpl = dew$c();
  var _require = dew$a(), getHighWaterMark = _require.getHighWaterMark;
  var _require$codes = dew$b().codes, ERR_INVALID_ARG_TYPE = _require$codes.ERR_INVALID_ARG_TYPE, ERR_STREAM_PUSH_AFTER_EOF = _require$codes.ERR_STREAM_PUSH_AFTER_EOF, ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED, ERR_STREAM_UNSHIFT_AFTER_END_EVENT = _require$codes.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
  var StringDecoder;
  var createReadableStreamAsyncIterator;
  var from;
  dew$f()(Readable, Stream);
  var errorOrDestroy = destroyImpl.errorOrDestroy;
  var kProxyEvents = ["error", "close", "destroy", "pause", "resume"];
  function prependListener(emitter, event, fn) {
    if (typeof emitter.prependListener === "function")
      return emitter.prependListener(event, fn);
    if (!emitter._events || !emitter._events[event])
      emitter.on(event, fn);
    else if (Array.isArray(emitter._events[event]))
      emitter._events[event].unshift(fn);
    else
      emitter._events[event] = [fn, emitter._events[event]];
  }
  function ReadableState(options, stream, isDuplex) {
    Duplex = Duplex || dew$7();
    options = options || {};
    if (typeof isDuplex !== "boolean")
      isDuplex = stream instanceof Duplex;
    this.objectMode = !!options.objectMode;
    if (isDuplex)
      this.objectMode = this.objectMode || !!options.readableObjectMode;
    this.highWaterMark = getHighWaterMark(this, options, "readableHighWaterMark", isDuplex);
    this.buffer = new BufferList();
    this.length = 0;
    this.pipes = null;
    this.pipesCount = 0;
    this.flowing = null;
    this.ended = false;
    this.endEmitted = false;
    this.reading = false;
    this.sync = true;
    this.needReadable = false;
    this.emittedReadable = false;
    this.readableListening = false;
    this.resumeScheduled = false;
    this.paused = true;
    this.emitClose = options.emitClose !== false;
    this.autoDestroy = !!options.autoDestroy;
    this.destroyed = false;
    this.defaultEncoding = options.defaultEncoding || "utf8";
    this.awaitDrain = 0;
    this.readingMore = false;
    this.decoder = null;
    this.encoding = null;
    if (options.encoding) {
      if (!StringDecoder)
        StringDecoder = e$12.StringDecoder;
      this.decoder = new StringDecoder(options.encoding);
      this.encoding = options.encoding;
    }
  }
  function Readable(options) {
    Duplex = Duplex || dew$7();
    if (!(this instanceof Readable))
      return new Readable(options);
    var isDuplex = this instanceof Duplex;
    this._readableState = new ReadableState(options, this, isDuplex);
    this.readable = true;
    if (options) {
      if (typeof options.read === "function")
        this._read = options.read;
      if (typeof options.destroy === "function")
        this._destroy = options.destroy;
    }
    Stream.call(this);
  }
  Object.defineProperty(Readable.prototype, "destroyed", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
      if (this._readableState === void 0) {
        return false;
      }
      return this._readableState.destroyed;
    },
    set: function set(value) {
      if (!this._readableState) {
        return;
      }
      this._readableState.destroyed = value;
    }
  });
  Readable.prototype.destroy = destroyImpl.destroy;
  Readable.prototype._undestroy = destroyImpl.undestroy;
  Readable.prototype._destroy = function(err, cb) {
    cb(err);
  };
  Readable.prototype.push = function(chunk, encoding) {
    var state = this._readableState;
    var skipChunkCheck;
    if (!state.objectMode) {
      if (typeof chunk === "string") {
        encoding = encoding || state.defaultEncoding;
        if (encoding !== state.encoding) {
          chunk = Buffer.from(chunk, encoding);
          encoding = "";
        }
        skipChunkCheck = true;
      }
    } else {
      skipChunkCheck = true;
    }
    return readableAddChunk(this, chunk, encoding, false, skipChunkCheck);
  };
  Readable.prototype.unshift = function(chunk) {
    return readableAddChunk(this, chunk, null, true, false);
  };
  function readableAddChunk(stream, chunk, encoding, addToFront, skipChunkCheck) {
    debug("readableAddChunk", chunk);
    var state = stream._readableState;
    if (chunk === null) {
      state.reading = false;
      onEofChunk(stream, state);
    } else {
      var er;
      if (!skipChunkCheck)
        er = chunkInvalid(state, chunk);
      if (er) {
        errorOrDestroy(stream, er);
      } else if (state.objectMode || chunk && chunk.length > 0) {
        if (typeof chunk !== "string" && !state.objectMode && Object.getPrototypeOf(chunk) !== Buffer.prototype) {
          chunk = _uint8ArrayToBuffer(chunk);
        }
        if (addToFront) {
          if (state.endEmitted)
            errorOrDestroy(stream, new ERR_STREAM_UNSHIFT_AFTER_END_EVENT());
          else
            addChunk(stream, state, chunk, true);
        } else if (state.ended) {
          errorOrDestroy(stream, new ERR_STREAM_PUSH_AFTER_EOF());
        } else if (state.destroyed) {
          return false;
        } else {
          state.reading = false;
          if (state.decoder && !encoding) {
            chunk = state.decoder.write(chunk);
            if (state.objectMode || chunk.length !== 0)
              addChunk(stream, state, chunk, false);
            else
              maybeReadMore(stream, state);
          } else {
            addChunk(stream, state, chunk, false);
          }
        }
      } else if (!addToFront) {
        state.reading = false;
        maybeReadMore(stream, state);
      }
    }
    return !state.ended && (state.length < state.highWaterMark || state.length === 0);
  }
  function addChunk(stream, state, chunk, addToFront) {
    if (state.flowing && state.length === 0 && !state.sync) {
      state.awaitDrain = 0;
      stream.emit("data", chunk);
    } else {
      state.length += state.objectMode ? 1 : chunk.length;
      if (addToFront)
        state.buffer.unshift(chunk);
      else
        state.buffer.push(chunk);
      if (state.needReadable)
        emitReadable(stream);
    }
    maybeReadMore(stream, state);
  }
  function chunkInvalid(state, chunk) {
    var er;
    if (!_isUint8Array(chunk) && typeof chunk !== "string" && chunk !== void 0 && !state.objectMode) {
      er = new ERR_INVALID_ARG_TYPE("chunk", ["string", "Buffer", "Uint8Array"], chunk);
    }
    return er;
  }
  Readable.prototype.isPaused = function() {
    return this._readableState.flowing === false;
  };
  Readable.prototype.setEncoding = function(enc) {
    if (!StringDecoder)
      StringDecoder = e$12.StringDecoder;
    var decoder = new StringDecoder(enc);
    this._readableState.decoder = decoder;
    this._readableState.encoding = this._readableState.decoder.encoding;
    var p4 = this._readableState.buffer.head;
    var content = "";
    while (p4 !== null) {
      content += decoder.write(p4.data);
      p4 = p4.next;
    }
    this._readableState.buffer.clear();
    if (content !== "")
      this._readableState.buffer.push(content);
    this._readableState.length = content.length;
    return this;
  };
  var MAX_HWM = 1073741824;
  function computeNewHighWaterMark(n4) {
    if (n4 >= MAX_HWM) {
      n4 = MAX_HWM;
    } else {
      n4--;
      n4 |= n4 >>> 1;
      n4 |= n4 >>> 2;
      n4 |= n4 >>> 4;
      n4 |= n4 >>> 8;
      n4 |= n4 >>> 16;
      n4++;
    }
    return n4;
  }
  function howMuchToRead(n4, state) {
    if (n4 <= 0 || state.length === 0 && state.ended)
      return 0;
    if (state.objectMode)
      return 1;
    if (n4 !== n4) {
      if (state.flowing && state.length)
        return state.buffer.head.data.length;
      else
        return state.length;
    }
    if (n4 > state.highWaterMark)
      state.highWaterMark = computeNewHighWaterMark(n4);
    if (n4 <= state.length)
      return n4;
    if (!state.ended) {
      state.needReadable = true;
      return 0;
    }
    return state.length;
  }
  Readable.prototype.read = function(n4) {
    debug("read", n4);
    n4 = parseInt(n4, 10);
    var state = this._readableState;
    var nOrig = n4;
    if (n4 !== 0)
      state.emittedReadable = false;
    if (n4 === 0 && state.needReadable && ((state.highWaterMark !== 0 ? state.length >= state.highWaterMark : state.length > 0) || state.ended)) {
      debug("read: emitReadable", state.length, state.ended);
      if (state.length === 0 && state.ended)
        endReadable(this);
      else
        emitReadable(this);
      return null;
    }
    n4 = howMuchToRead(n4, state);
    if (n4 === 0 && state.ended) {
      if (state.length === 0)
        endReadable(this);
      return null;
    }
    var doRead = state.needReadable;
    debug("need readable", doRead);
    if (state.length === 0 || state.length - n4 < state.highWaterMark) {
      doRead = true;
      debug("length less than watermark", doRead);
    }
    if (state.ended || state.reading) {
      doRead = false;
      debug("reading or ended", doRead);
    } else if (doRead) {
      debug("do read");
      state.reading = true;
      state.sync = true;
      if (state.length === 0)
        state.needReadable = true;
      this._read(state.highWaterMark);
      state.sync = false;
      if (!state.reading)
        n4 = howMuchToRead(nOrig, state);
    }
    var ret;
    if (n4 > 0)
      ret = fromList(n4, state);
    else
      ret = null;
    if (ret === null) {
      state.needReadable = state.length <= state.highWaterMark;
      n4 = 0;
    } else {
      state.length -= n4;
      state.awaitDrain = 0;
    }
    if (state.length === 0) {
      if (!state.ended)
        state.needReadable = true;
      if (nOrig !== n4 && state.ended)
        endReadable(this);
    }
    if (ret !== null)
      this.emit("data", ret);
    return ret;
  };
  function onEofChunk(stream, state) {
    debug("onEofChunk");
    if (state.ended)
      return;
    if (state.decoder) {
      var chunk = state.decoder.end();
      if (chunk && chunk.length) {
        state.buffer.push(chunk);
        state.length += state.objectMode ? 1 : chunk.length;
      }
    }
    state.ended = true;
    if (state.sync) {
      emitReadable(stream);
    } else {
      state.needReadable = false;
      if (!state.emittedReadable) {
        state.emittedReadable = true;
        emitReadable_(stream);
      }
    }
  }
  function emitReadable(stream) {
    var state = stream._readableState;
    debug("emitReadable", state.needReadable, state.emittedReadable);
    state.needReadable = false;
    if (!state.emittedReadable) {
      debug("emitReadable", state.flowing);
      state.emittedReadable = true;
      process$1.nextTick(emitReadable_, stream);
    }
  }
  function emitReadable_(stream) {
    var state = stream._readableState;
    debug("emitReadable_", state.destroyed, state.length, state.ended);
    if (!state.destroyed && (state.length || state.ended)) {
      stream.emit("readable");
      state.emittedReadable = false;
    }
    state.needReadable = !state.flowing && !state.ended && state.length <= state.highWaterMark;
    flow(stream);
  }
  function maybeReadMore(stream, state) {
    if (!state.readingMore) {
      state.readingMore = true;
      process$1.nextTick(maybeReadMore_, stream, state);
    }
  }
  function maybeReadMore_(stream, state) {
    while (!state.reading && !state.ended && (state.length < state.highWaterMark || state.flowing && state.length === 0)) {
      var len = state.length;
      debug("maybeReadMore read 0");
      stream.read(0);
      if (len === state.length)
        break;
    }
    state.readingMore = false;
  }
  Readable.prototype._read = function(n4) {
    errorOrDestroy(this, new ERR_METHOD_NOT_IMPLEMENTED("_read()"));
  };
  Readable.prototype.pipe = function(dest, pipeOpts) {
    var src = this;
    var state = this._readableState;
    switch (state.pipesCount) {
      case 0:
        state.pipes = dest;
        break;
      case 1:
        state.pipes = [state.pipes, dest];
        break;
      default:
        state.pipes.push(dest);
        break;
    }
    state.pipesCount += 1;
    debug("pipe count=%d opts=%j", state.pipesCount, pipeOpts);
    var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process$1.stdout && dest !== process$1.stderr;
    var endFn = doEnd ? onend : unpipe;
    if (state.endEmitted)
      process$1.nextTick(endFn);
    else
      src.once("end", endFn);
    dest.on("unpipe", onunpipe);
    function onunpipe(readable, unpipeInfo) {
      debug("onunpipe");
      if (readable === src) {
        if (unpipeInfo && unpipeInfo.hasUnpiped === false) {
          unpipeInfo.hasUnpiped = true;
          cleanup();
        }
      }
    }
    function onend() {
      debug("onend");
      dest.end();
    }
    var ondrain = pipeOnDrain(src);
    dest.on("drain", ondrain);
    var cleanedUp = false;
    function cleanup() {
      debug("cleanup");
      dest.removeListener("close", onclose);
      dest.removeListener("finish", onfinish);
      dest.removeListener("drain", ondrain);
      dest.removeListener("error", onerror);
      dest.removeListener("unpipe", onunpipe);
      src.removeListener("end", onend);
      src.removeListener("end", unpipe);
      src.removeListener("data", ondata);
      cleanedUp = true;
      if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain))
        ondrain();
    }
    src.on("data", ondata);
    function ondata(chunk) {
      debug("ondata");
      var ret = dest.write(chunk);
      debug("dest.write", ret);
      if (ret === false) {
        if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1) && !cleanedUp) {
          debug("false write response, pause", state.awaitDrain);
          state.awaitDrain++;
        }
        src.pause();
      }
    }
    function onerror(er) {
      debug("onerror", er);
      unpipe();
      dest.removeListener("error", onerror);
      if (EElistenerCount(dest, "error") === 0)
        errorOrDestroy(dest, er);
    }
    prependListener(dest, "error", onerror);
    function onclose() {
      dest.removeListener("finish", onfinish);
      unpipe();
    }
    dest.once("close", onclose);
    function onfinish() {
      debug("onfinish");
      dest.removeListener("close", onclose);
      unpipe();
    }
    dest.once("finish", onfinish);
    function unpipe() {
      debug("unpipe");
      src.unpipe(dest);
    }
    dest.emit("pipe", src);
    if (!state.flowing) {
      debug("pipe resume");
      src.resume();
    }
    return dest;
  };
  function pipeOnDrain(src) {
    return function pipeOnDrainFunctionResult() {
      var state = src._readableState;
      debug("pipeOnDrain", state.awaitDrain);
      if (state.awaitDrain)
        state.awaitDrain--;
      if (state.awaitDrain === 0 && EElistenerCount(src, "data")) {
        state.flowing = true;
        flow(src);
      }
    };
  }
  Readable.prototype.unpipe = function(dest) {
    var state = this._readableState;
    var unpipeInfo = {
      hasUnpiped: false
    };
    if (state.pipesCount === 0)
      return this;
    if (state.pipesCount === 1) {
      if (dest && dest !== state.pipes)
        return this;
      if (!dest)
        dest = state.pipes;
      state.pipes = null;
      state.pipesCount = 0;
      state.flowing = false;
      if (dest)
        dest.emit("unpipe", this, unpipeInfo);
      return this;
    }
    if (!dest) {
      var dests = state.pipes;
      var len = state.pipesCount;
      state.pipes = null;
      state.pipesCount = 0;
      state.flowing = false;
      for (var i4 = 0; i4 < len; i4++) {
        dests[i4].emit("unpipe", this, {
          hasUnpiped: false
        });
      }
      return this;
    }
    var index = indexOf(state.pipes, dest);
    if (index === -1)
      return this;
    state.pipes.splice(index, 1);
    state.pipesCount -= 1;
    if (state.pipesCount === 1)
      state.pipes = state.pipes[0];
    dest.emit("unpipe", this, unpipeInfo);
    return this;
  };
  Readable.prototype.on = function(ev, fn) {
    var res = Stream.prototype.on.call(this, ev, fn);
    var state = this._readableState;
    if (ev === "data") {
      state.readableListening = this.listenerCount("readable") > 0;
      if (state.flowing !== false)
        this.resume();
    } else if (ev === "readable") {
      if (!state.endEmitted && !state.readableListening) {
        state.readableListening = state.needReadable = true;
        state.flowing = false;
        state.emittedReadable = false;
        debug("on readable", state.length, state.reading);
        if (state.length) {
          emitReadable(this);
        } else if (!state.reading) {
          process$1.nextTick(nReadingNextTick, this);
        }
      }
    }
    return res;
  };
  Readable.prototype.addListener = Readable.prototype.on;
  Readable.prototype.removeListener = function(ev, fn) {
    var res = Stream.prototype.removeListener.call(this, ev, fn);
    if (ev === "readable") {
      process$1.nextTick(updateReadableListening, this);
    }
    return res;
  };
  Readable.prototype.removeAllListeners = function(ev) {
    var res = Stream.prototype.removeAllListeners.apply(this, arguments);
    if (ev === "readable" || ev === void 0) {
      process$1.nextTick(updateReadableListening, this);
    }
    return res;
  };
  function updateReadableListening(self2) {
    var state = self2._readableState;
    state.readableListening = self2.listenerCount("readable") > 0;
    if (state.resumeScheduled && !state.paused) {
      state.flowing = true;
    } else if (self2.listenerCount("data") > 0) {
      self2.resume();
    }
  }
  function nReadingNextTick(self2) {
    debug("readable nexttick read 0");
    self2.read(0);
  }
  Readable.prototype.resume = function() {
    var state = this._readableState;
    if (!state.flowing) {
      debug("resume");
      state.flowing = !state.readableListening;
      resume(this, state);
    }
    state.paused = false;
    return this;
  };
  function resume(stream, state) {
    if (!state.resumeScheduled) {
      state.resumeScheduled = true;
      process$1.nextTick(resume_, stream, state);
    }
  }
  function resume_(stream, state) {
    debug("resume", state.reading);
    if (!state.reading) {
      stream.read(0);
    }
    state.resumeScheduled = false;
    stream.emit("resume");
    flow(stream);
    if (state.flowing && !state.reading)
      stream.read(0);
  }
  Readable.prototype.pause = function() {
    debug("call pause flowing=%j", this._readableState.flowing);
    if (this._readableState.flowing !== false) {
      debug("pause");
      this._readableState.flowing = false;
      this.emit("pause");
    }
    this._readableState.paused = true;
    return this;
  };
  function flow(stream) {
    var state = stream._readableState;
    debug("flow", state.flowing);
    while (state.flowing && stream.read() !== null) {
    }
  }
  Readable.prototype.wrap = function(stream) {
    var _this = this;
    var state = this._readableState;
    var paused = false;
    stream.on("end", function() {
      debug("wrapped end");
      if (state.decoder && !state.ended) {
        var chunk = state.decoder.end();
        if (chunk && chunk.length)
          _this.push(chunk);
      }
      _this.push(null);
    });
    stream.on("data", function(chunk) {
      debug("wrapped data");
      if (state.decoder)
        chunk = state.decoder.write(chunk);
      if (state.objectMode && (chunk === null || chunk === void 0))
        return;
      else if (!state.objectMode && (!chunk || !chunk.length))
        return;
      var ret = _this.push(chunk);
      if (!ret) {
        paused = true;
        stream.pause();
      }
    });
    for (var i4 in stream) {
      if (this[i4] === void 0 && typeof stream[i4] === "function") {
        this[i4] = function methodWrap(method) {
          return function methodWrapReturnFunction() {
            return stream[method].apply(stream, arguments);
          };
        }(i4);
      }
    }
    for (var n4 = 0; n4 < kProxyEvents.length; n4++) {
      stream.on(kProxyEvents[n4], this.emit.bind(this, kProxyEvents[n4]));
    }
    this._read = function(n5) {
      debug("wrapped _read", n5);
      if (paused) {
        paused = false;
        stream.resume();
      }
    };
    return this;
  };
  if (typeof Symbol === "function") {
    Readable.prototype[Symbol.asyncIterator] = function() {
      if (createReadableStreamAsyncIterator === void 0) {
        createReadableStreamAsyncIterator = dew$5();
      }
      return createReadableStreamAsyncIterator(this);
    };
  }
  Object.defineProperty(Readable.prototype, "readableHighWaterMark", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
      return this._readableState.highWaterMark;
    }
  });
  Object.defineProperty(Readable.prototype, "readableBuffer", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
      return this._readableState && this._readableState.buffer;
    }
  });
  Object.defineProperty(Readable.prototype, "readableFlowing", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
      return this._readableState.flowing;
    },
    set: function set(state) {
      if (this._readableState) {
        this._readableState.flowing = state;
      }
    }
  });
  Readable._fromList = fromList;
  Object.defineProperty(Readable.prototype, "readableLength", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
      return this._readableState.length;
    }
  });
  function fromList(n4, state) {
    if (state.length === 0)
      return null;
    var ret;
    if (state.objectMode)
      ret = state.buffer.shift();
    else if (!n4 || n4 >= state.length) {
      if (state.decoder)
        ret = state.buffer.join("");
      else if (state.buffer.length === 1)
        ret = state.buffer.first();
      else
        ret = state.buffer.concat(state.length);
      state.buffer.clear();
    } else {
      ret = state.buffer.consume(n4, state.decoder);
    }
    return ret;
  }
  function endReadable(stream) {
    var state = stream._readableState;
    debug("endReadable", state.endEmitted);
    if (!state.endEmitted) {
      state.ended = true;
      process$1.nextTick(endReadableNT, state, stream);
    }
  }
  function endReadableNT(state, stream) {
    debug("endReadableNT", state.endEmitted, state.length);
    if (!state.endEmitted && state.length === 0) {
      state.endEmitted = true;
      stream.readable = false;
      stream.emit("end");
      if (state.autoDestroy) {
        var wState = stream._writableState;
        if (!wState || wState.autoDestroy && wState.finished) {
          stream.destroy();
        }
      }
    }
  }
  if (typeof Symbol === "function") {
    Readable.from = function(iterable, opts) {
      if (from === void 0) {
        from = dew$4();
      }
      return from(Readable, iterable, opts);
    };
  }
  function indexOf(xs, x3) {
    for (var i4 = 0, l4 = xs.length; i4 < l4; i4++) {
      if (xs[i4] === x3)
        return i4;
    }
    return -1;
  }
  return exports$3;
}
function dew$2() {
  if (_dewExec$2)
    return exports$2;
  _dewExec$2 = true;
  exports$2 = Transform;
  var _require$codes = dew$b().codes, ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED, ERR_MULTIPLE_CALLBACK = _require$codes.ERR_MULTIPLE_CALLBACK, ERR_TRANSFORM_ALREADY_TRANSFORMING = _require$codes.ERR_TRANSFORM_ALREADY_TRANSFORMING, ERR_TRANSFORM_WITH_LENGTH_0 = _require$codes.ERR_TRANSFORM_WITH_LENGTH_0;
  var Duplex = dew$7();
  dew$f()(Transform, Duplex);
  function afterTransform(er, data) {
    var ts = this._transformState;
    ts.transforming = false;
    var cb = ts.writecb;
    if (cb === null) {
      return this.emit("error", new ERR_MULTIPLE_CALLBACK());
    }
    ts.writechunk = null;
    ts.writecb = null;
    if (data != null)
      this.push(data);
    cb(er);
    var rs = this._readableState;
    rs.reading = false;
    if (rs.needReadable || rs.length < rs.highWaterMark) {
      this._read(rs.highWaterMark);
    }
  }
  function Transform(options) {
    if (!(this instanceof Transform))
      return new Transform(options);
    Duplex.call(this, options);
    this._transformState = {
      afterTransform: afterTransform.bind(this),
      needTransform: false,
      transforming: false,
      writecb: null,
      writechunk: null,
      writeencoding: null
    };
    this._readableState.needReadable = true;
    this._readableState.sync = false;
    if (options) {
      if (typeof options.transform === "function")
        this._transform = options.transform;
      if (typeof options.flush === "function")
        this._flush = options.flush;
    }
    this.on("prefinish", prefinish);
  }
  function prefinish() {
    var _this = this;
    if (typeof this._flush === "function" && !this._readableState.destroyed) {
      this._flush(function(er, data) {
        done(_this, er, data);
      });
    } else {
      done(this, null, null);
    }
  }
  Transform.prototype.push = function(chunk, encoding) {
    this._transformState.needTransform = false;
    return Duplex.prototype.push.call(this, chunk, encoding);
  };
  Transform.prototype._transform = function(chunk, encoding, cb) {
    cb(new ERR_METHOD_NOT_IMPLEMENTED("_transform()"));
  };
  Transform.prototype._write = function(chunk, encoding, cb) {
    var ts = this._transformState;
    ts.writecb = cb;
    ts.writechunk = chunk;
    ts.writeencoding = encoding;
    if (!ts.transforming) {
      var rs = this._readableState;
      if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark)
        this._read(rs.highWaterMark);
    }
  };
  Transform.prototype._read = function(n4) {
    var ts = this._transformState;
    if (ts.writechunk !== null && !ts.transforming) {
      ts.transforming = true;
      this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
    } else {
      ts.needTransform = true;
    }
  };
  Transform.prototype._destroy = function(err, cb) {
    Duplex.prototype._destroy.call(this, err, function(err2) {
      cb(err2);
    });
  };
  function done(stream, er, data) {
    if (er)
      return stream.emit("error", er);
    if (data != null)
      stream.push(data);
    if (stream._writableState.length)
      throw new ERR_TRANSFORM_WITH_LENGTH_0();
    if (stream._transformState.transforming)
      throw new ERR_TRANSFORM_ALREADY_TRANSFORMING();
    return stream.push(null);
  }
  return exports$2;
}
function dew$1() {
  if (_dewExec$1)
    return exports$1;
  _dewExec$1 = true;
  exports$1 = PassThrough;
  var Transform = dew$2();
  dew$f()(PassThrough, Transform);
  function PassThrough(options) {
    if (!(this instanceof PassThrough))
      return new PassThrough(options);
    Transform.call(this, options);
  }
  PassThrough.prototype._transform = function(chunk, encoding, cb) {
    cb(null, chunk);
  };
  return exports$1;
}
function dew2() {
  if (_dewExec2)
    return exports2;
  _dewExec2 = true;
  var eos;
  function once2(callback) {
    var called = false;
    return function() {
      if (called)
        return;
      called = true;
      callback.apply(void 0, arguments);
    };
  }
  var _require$codes = dew$b().codes, ERR_MISSING_ARGS = _require$codes.ERR_MISSING_ARGS, ERR_STREAM_DESTROYED = _require$codes.ERR_STREAM_DESTROYED;
  function noop(err) {
    if (err)
      throw err;
  }
  function isRequest(stream) {
    return stream.setHeader && typeof stream.abort === "function";
  }
  function destroyer(stream, reading, writing, callback) {
    callback = once2(callback);
    var closed = false;
    stream.on("close", function() {
      closed = true;
    });
    if (eos === void 0)
      eos = dew$6();
    eos(stream, {
      readable: reading,
      writable: writing
    }, function(err) {
      if (err)
        return callback(err);
      closed = true;
      callback();
    });
    var destroyed = false;
    return function(err) {
      if (closed)
        return;
      if (destroyed)
        return;
      destroyed = true;
      if (isRequest(stream))
        return stream.abort();
      if (typeof stream.destroy === "function")
        return stream.destroy();
      callback(err || new ERR_STREAM_DESTROYED("pipe"));
    };
  }
  function call(fn) {
    fn();
  }
  function pipe(from, to) {
    return from.pipe(to);
  }
  function popCallback(streams) {
    if (!streams.length)
      return noop;
    if (typeof streams[streams.length - 1] !== "function")
      return noop;
    return streams.pop();
  }
  function pipeline() {
    for (var _len = arguments.length, streams = new Array(_len), _key = 0; _key < _len; _key++) {
      streams[_key] = arguments[_key];
    }
    var callback = popCallback(streams);
    if (Array.isArray(streams[0]))
      streams = streams[0];
    if (streams.length < 2) {
      throw new ERR_MISSING_ARGS("streams");
    }
    var error;
    var destroys = streams.map(function(stream, i4) {
      var reading = i4 < streams.length - 1;
      var writing = i4 > 0;
      return destroyer(stream, reading, writing, function(err) {
        if (!error)
          error = err;
        if (err)
          destroys.forEach(call);
        if (reading)
          return;
        destroys.forEach(call);
        callback(error);
      });
    });
    return streams.reduce(pipe);
  }
  exports2 = pipeline;
  return exports2;
}
var exports$2$1, _dewExec$2$1, exports$1$1, _dewExec$1$1, exports$g, _dewExec$g, buffer, exports$f, _dewExec$f, exports$e, _dewExec$e, exports$d, _dewExec$d, exports$c, _dewExec$c, exports$b, _dewExec$b, exports$a, _dewExec$a, exports$9, _dewExec$9, _global$2, exports$8, _dewExec$8, _global$1, exports$7, _dewExec$7, exports$6, _dewExec$6, exports$5, _dewExec$5, exports$4, _dewExec$4, exports$3, _dewExec$3, _global2, exports$2, _dewExec$2, exports$1, _dewExec$1, exports2, _dewExec2;
var init_chunk_44e51b61 = __esm({
  "node_modules/.pnpm/@jspm+core@2.0.1/node_modules/@jspm/core/nodelibs/browser/chunk-44e51b61.js"() {
    init_chunk_4bd36a8f();
    init_chunk_ce0fbc82();
    init_chunk_b4205b57();
    init_chunk_2eac56ff();
    init_chunk_4ccc3a29();
    exports$2$1 = {};
    _dewExec$2$1 = false;
    exports$1$1 = {};
    _dewExec$1$1 = false;
    exports$g = {};
    _dewExec$g = false;
    buffer = dew$g();
    buffer.Buffer;
    buffer.INSPECT_MAX_BYTES;
    buffer.kMaxLength;
    exports$f = {};
    _dewExec$f = false;
    exports$e = {};
    _dewExec$e = false;
    exports$d = {};
    _dewExec$d = false;
    exports$c = {};
    _dewExec$c = false;
    exports$b = {};
    _dewExec$b = false;
    exports$a = {};
    _dewExec$a = false;
    exports$9 = {};
    _dewExec$9 = false;
    _global$2 = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : globalThis;
    exports$8 = {};
    _dewExec$8 = false;
    _global$1 = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : globalThis;
    exports$7 = {};
    _dewExec$7 = false;
    exports$6 = {};
    _dewExec$6 = false;
    exports$5 = {};
    _dewExec$5 = false;
    exports$4 = {};
    _dewExec$4 = false;
    exports$3 = {};
    _dewExec$3 = false;
    _global2 = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : globalThis;
    exports$2 = {};
    _dewExec$2 = false;
    exports$1 = {};
    _dewExec$1 = false;
    exports2 = {};
    _dewExec2 = false;
  }
});

// node_modules/.pnpm/@jspm+core@2.0.1/node_modules/@jspm/core/nodelibs/browser/chunk-6c718bbe.js
function dew3() {
  if (_dewExec3)
    return exports$12;
  _dewExec3 = true;
  exports$12 = Stream;
  var EE = y.EventEmitter;
  var inherits3 = dew$f();
  inherits3(Stream, EE);
  Stream.Readable = dew$3();
  Stream.Writable = dew$8();
  Stream.Duplex = dew$7();
  Stream.Transform = dew$2();
  Stream.PassThrough = dew$1();
  Stream.finished = dew$6();
  Stream.pipeline = dew2();
  Stream.Stream = Stream;
  function Stream() {
    EE.call(this || _global3);
  }
  Stream.prototype.pipe = function(dest, options) {
    var source = this || _global3;
    function ondata(chunk) {
      if (dest.writable) {
        if (false === dest.write(chunk) && source.pause) {
          source.pause();
        }
      }
    }
    source.on("data", ondata);
    function ondrain() {
      if (source.readable && source.resume) {
        source.resume();
      }
    }
    dest.on("drain", ondrain);
    if (!dest._isStdio && (!options || options.end !== false)) {
      source.on("end", onend);
      source.on("close", onclose);
    }
    var didOnEnd = false;
    function onend() {
      if (didOnEnd)
        return;
      didOnEnd = true;
      dest.end();
    }
    function onclose() {
      if (didOnEnd)
        return;
      didOnEnd = true;
      if (typeof dest.destroy === "function")
        dest.destroy();
    }
    function onerror(er) {
      cleanup();
      if (EE.listenerCount(this || _global3, "error") === 0) {
        throw er;
      }
    }
    source.on("error", onerror);
    dest.on("error", onerror);
    function cleanup() {
      source.removeListener("data", ondata);
      dest.removeListener("drain", ondrain);
      source.removeListener("end", onend);
      source.removeListener("close", onclose);
      source.removeListener("error", onerror);
      dest.removeListener("error", onerror);
      source.removeListener("end", cleanup);
      source.removeListener("close", cleanup);
      dest.removeListener("close", cleanup);
    }
    source.on("end", cleanup);
    source.on("close", cleanup);
    dest.on("close", cleanup);
    dest.emit("pipe", source);
    return dest;
  };
  return exports$12;
}
var exports$12, _dewExec3, _global3, exports3;
var init_chunk_6c718bbe = __esm({
  "node_modules/.pnpm/@jspm+core@2.0.1/node_modules/@jspm/core/nodelibs/browser/chunk-6c718bbe.js"() {
    init_events();
    init_chunk_44e51b61();
    init_chunk_4bd36a8f();
    exports$12 = {};
    _dewExec3 = false;
    _global3 = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : globalThis;
    exports3 = dew3();
  }
});

// node_modules/.pnpm/@jspm+core@2.0.1/node_modules/@jspm/core/nodelibs/browser/util.js
var _extend2, callbackify2, debuglog2, deprecate2, format2, inherits2, inspect2, isArray2, isBoolean2, isBuffer2, isDate2, isError2, isFunction2, isNull2, isNullOrUndefined2, isNumber2, isObject2, isPrimitive2, isRegExp2, isString2, isSymbol2, isUndefined2, log2, promisify2, types2, TextEncoder2, TextDecoder2;
var init_util = __esm({
  "node_modules/.pnpm/@jspm+core@2.0.1/node_modules/@jspm/core/nodelibs/browser/util.js"() {
    init_chunk_ce0fbc82();
    init_chunk_b4205b57();
    init_chunk_b4205b57();
    init_chunk_5decc758();
    _extend2 = X._extend;
    callbackify2 = X.callbackify;
    debuglog2 = X.debuglog;
    deprecate2 = X.deprecate;
    format2 = X.format;
    inherits2 = X.inherits;
    inspect2 = X.inspect;
    isArray2 = X.isArray;
    isBoolean2 = X.isBoolean;
    isBuffer2 = X.isBuffer;
    isDate2 = X.isDate;
    isError2 = X.isError;
    isFunction2 = X.isFunction;
    isNull2 = X.isNull;
    isNullOrUndefined2 = X.isNullOrUndefined;
    isNumber2 = X.isNumber;
    isObject2 = X.isObject;
    isPrimitive2 = X.isPrimitive;
    isRegExp2 = X.isRegExp;
    isString2 = X.isString;
    isSymbol2 = X.isSymbol;
    isUndefined2 = X.isUndefined;
    log2 = X.log;
    promisify2 = X.promisify;
    types2 = X.types;
    TextEncoder2 = X.TextEncoder = globalThis.TextEncoder;
    TextDecoder2 = X.TextDecoder = globalThis.TextDecoder;
  }
});

export {
  init_events,
  T,
  init_chunk_5decc758,
  X,
  init_chunk_b4205b57,
  init_chunk_ce0fbc82,
  process,
  init_chunk_2eac56ff,
  e$12 as e$1,
  init_chunk_4ccc3a29,
  buffer,
  dew$f,
  dew$8,
  dew$7,
  dew$6,
  dew$3,
  dew$2,
  dew$1,
  dew2 as dew,
  init_chunk_44e51b61,
  exports3 as exports,
  init_chunk_6c718bbe,
  promisify2 as promisify,
  init_util
};
/*! Bundled license information:

@jspm/core/nodelibs/browser/chunk-44e51b61.js:
  (*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> *)
*/
//# sourceMappingURL=/build/_shared/chunk-R65GGW5O.js.map
