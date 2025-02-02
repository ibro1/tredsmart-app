import {
  cva
} from "/build/_shared/chunk-GKLF6JPE.js";
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

// app/components/ui/alert.tsx
var React = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ui/alert.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ui/alert.tsx"
  );
  import.meta.hot.lastModified = "1738409028320.369";
}
var alertVariants = cva("relative w-full rounded-md border-l-2 px-2 py-1 text-xs [&:has(svg)]:pl-11 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground", {
  variants: {
    variant: {
      default: "border-l-primary bg-secondary text-foreground",
      destructive: "border-l-red-600 bg-destructive/30 text-red-900 dark:text-red-300 [&>svg]:text-destructive"
    }
  },
  defaultVariants: {
    variant: "default"
  }
});
var Alert = React.forwardRef(_c = ({
  className,
  variant,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { ref, role: "alert", className: cn(alertVariants({
  variant
}), className), ...props }, void 0, false, {
  fileName: "app/components/ui/alert.tsx",
  lineNumber: 39,
  columnNumber: 12
}, this));
_c2 = Alert;
Alert.displayName = "Alert";
var AlertTitle = React.forwardRef(_c3 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h5", { ref, className: cn("mb-1 font-medium leading-none tracking-tight", className), ...props }, void 0, false, {
  fileName: "app/components/ui/alert.tsx",
  lineNumber: 47,
  columnNumber: 12
}, this));
_c4 = AlertTitle;
AlertTitle.displayName = "AlertTitle";
var AlertDescription = React.forwardRef(_c5 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { ref, className: cn("text-sm [&_p]:leading-relaxed", className), ...props }, void 0, false, {
  fileName: "app/components/ui/alert.tsx",
  lineNumber: 53,
  columnNumber: 12
}, this));
_c6 = AlertDescription;
AlertDescription.displayName = "AlertDescription";
var _c;
var _c2;
var _c3;
var _c4;
var _c5;
var _c6;
$RefreshReg$(_c, "Alert$React.forwardRef");
$RefreshReg$(_c2, "Alert");
$RefreshReg$(_c3, "AlertTitle$React.forwardRef");
$RefreshReg$(_c4, "AlertTitle");
$RefreshReg$(_c5, "AlertDescription$React.forwardRef");
$RefreshReg$(_c6, "AlertDescription");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  Alert
};
//# sourceMappingURL=/build/_shared/chunk-QUZUN6TT.js.map
