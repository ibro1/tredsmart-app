import {
  cn
} from "/build/_shared/chunk-X65FW46X.js";
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

// app/components/ui/input.tsx
var React = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ui/input.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ui/input.tsx"
  );
  import.meta.hot.lastModified = "1738409028324.369";
}
var Input = React.forwardRef(_c = ({
  className,
  ...props
}, ref) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { className: cn("flex h-9 rounded-md border border-input bg-background px-3 py-1 text-sm", "transition-colors placeholder:text-muted-foreground/50 disabled:cursor-not-allowed disabled:opacity-50", "focus:border-primary focus:outline-none focus:ring focus:ring-ring/20", "autofill:shadow-fill-background autofill:text-fill-foreground", "file:border-0 file:bg-transparent file:text-sm file:font-medium", className), ref, ...props }, void 0, false, {
    fileName: "app/components/ui/input.tsx",
    lineNumber: 27,
    columnNumber: 10
  }, this);
});
_c2 = Input;
Input.displayName = "Input";
var _c;
var _c2;
$RefreshReg$(_c, "Input$React.forwardRef");
$RefreshReg$(_c2, "Input");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  Input
};
//# sourceMappingURL=/build/_shared/chunk-AXH33LJC.js.map
