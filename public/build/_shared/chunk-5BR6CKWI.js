import {
  Button
} from "/build/_shared/chunk-GKLF6JPE.js";
import {
  IconMatch
} from "/build/_shared/chunk-MNDIBQ26.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-SAB7BZTA.js";
import {
  require_react
} from "/build/_shared/chunk-ZPXNLZE6.js";
import {
  createHotContext
} from "/build/_shared/chunk-LGIRSWQ5.js";
import {
  __toESM
} from "/build/_shared/chunk-DPSM2F2X.js";

// app/components/ui/button-loading.tsx
var React = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ui/button-loading.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ui/button-loading.tsx"
  );
  import.meta.hot.lastModified = "1738409028324.369";
}
var ButtonLoading = React.forwardRef(_c = ({
  isDisabledWhenLoading = true,
  isLoading = false,
  loadingText = "",
  icon,
  children,
  ...props
}, ref) => {
  const isActive = isDisabledWhenLoading ? isLoading : isDisabledWhenLoading;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { ref, disabled: isActive, ...props, children: [
    icon && icon,
    !icon && isActive && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconMatch, { icon: "spinner-gap", className: "animate-spin" }, void 0, false, {
      fileName: "app/components/ui/button-loading.tsx",
      lineNumber: 38,
      columnNumber: 31
    }, this),
    isLoading ? loadingText : children
  ] }, void 0, true, {
    fileName: "app/components/ui/button-loading.tsx",
    lineNumber: 36,
    columnNumber: 10
  }, this);
});
_c2 = ButtonLoading;
ButtonLoading.displayName = "ButtonLoading";
var _c;
var _c2;
$RefreshReg$(_c, "ButtonLoading$React.forwardRef");
$RefreshReg$(_c2, "ButtonLoading");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  ButtonLoading
};
//# sourceMappingURL=/build/_shared/chunk-5BR6CKWI.js.map
