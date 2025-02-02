import {
  esm_default
} from "/build/_shared/chunk-W7GMESVK.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-SAB7BZTA.js";
import {
  createHotContext
} from "/build/_shared/chunk-LGIRSWQ5.js";
import {
  __toESM
} from "/build/_shared/chunk-DPSM2F2X.js";

// app/components/shared/view-html.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/shared/view-html.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/shared/view-html.tsx"
  );
  import.meta.hot.lastModified = "1738409028320.369";
}
function ViewHTML({
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", { className: "prose-config whitespace-pre-wrap", children: esm_default(children) }, void 0, false, {
    fileName: "app/components/shared/view-html.tsx",
    lineNumber: 25,
    columnNumber: 10
  }, this);
}
_c = ViewHTML;
var _c;
$RefreshReg$(_c, "ViewHTML");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  ViewHTML
};
//# sourceMappingURL=/build/_shared/chunk-CI64TXSM.js.map
