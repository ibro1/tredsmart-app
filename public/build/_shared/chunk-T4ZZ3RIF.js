import {
  formatTimestamp
} from "/build/_shared/chunk-YECPFCXQ.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-SAB7BZTA.js";
import {
  createHotContext
} from "/build/_shared/chunk-LGIRSWQ5.js";
import {
  __toESM
} from "/build/_shared/chunk-DPSM2F2X.js";

// app/components/shared/timestamp.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/shared/timestamp.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/shared/timestamp.tsx"
  );
  import.meta.hot.lastModified = "1738409028320.369";
}
function Timestamp({
  className,
  isUpdated,
  createdAt,
  updatedAt
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    !isUpdated && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className, children: [
      "Created ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("time", { children: formatTimestamp(createdAt) }, void 0, false, {
        fileName: "app/components/shared/timestamp.tsx",
        lineNumber: 30,
        columnNumber: 19
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/shared/timestamp.tsx",
      lineNumber: 29,
      columnNumber: 22
    }, this),
    isUpdated && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className, children: [
      "Updated ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("time", { children: formatTimestamp(updatedAt) }, void 0, false, {
        fileName: "app/components/shared/timestamp.tsx",
        lineNumber: 33,
        columnNumber: 19
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/shared/timestamp.tsx",
      lineNumber: 32,
      columnNumber: 21
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/shared/timestamp.tsx",
    lineNumber: 28,
    columnNumber: 10
  }, this);
}
_c = Timestamp;
var _c;
$RefreshReg$(_c, "Timestamp");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  Timestamp
};
//# sourceMappingURL=/build/_shared/chunk-T4ZZ3RIF.js.map
