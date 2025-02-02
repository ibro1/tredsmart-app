import {
  Button,
  buttonVariants
} from "/build/_shared/chunk-GKLF6JPE.js";
import {
  cn
} from "/build/_shared/chunk-X65FW46X.js";
import {
  Link
} from "/build/_shared/chunk-64BCTWQL.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-SAB7BZTA.js";
import {
  createHotContext
} from "/build/_shared/chunk-LGIRSWQ5.js";
import {
  __toESM
} from "/build/_shared/chunk-DPSM2F2X.js";

// app/components/ui/button-link.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ui/button-link.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ui/button-link.tsx"
  );
  import.meta.hot.lastModified = "1738409028324.369";
}
var ButtonLink = ({
  variant = "default",
  size = "default",
  className,
  children,
  disabled,
  ...props
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { className: cn(buttonVariants({
    variant,
    size,
    className
  }), disabled && "pointer-events-none opacity-50"), ...props, children }, void 0, false, {
    fileName: "app/components/ui/button-link.tsx",
    lineNumber: 32,
    columnNumber: 10
  }, this);
};
_c = ButtonLink;
ButtonLink.displayName = "ButtonLink";
var ButtonNavLink = ({
  variant = "default",
  size = "default",
  className,
  children,
  ...props
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { className: cn(buttonVariants({
    variant,
    size,
    className
  })), ...props, children }, void 0, false, {
    fileName: "app/components/ui/button-link.tsx",
    lineNumber: 49,
    columnNumber: 10
  }, this);
};
_c2 = ButtonNavLink;
ButtonNavLink.displayName = "ButtonNavLink";
function ButtonChildLink({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { ...props, children: "Back to Home" }, void 0, false, {
    fileName: "app/components/ui/button-link.tsx",
    lineNumber: 63,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/ui/button-link.tsx",
    lineNumber: 62,
    columnNumber: 10
  }, this);
}
_c3 = ButtonChildLink;
var _c;
var _c2;
var _c3;
$RefreshReg$(_c, "ButtonLink");
$RefreshReg$(_c2, "ButtonNavLink");
$RefreshReg$(_c3, "ButtonChildLink");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  ButtonLink
};
//# sourceMappingURL=/build/_shared/chunk-7MYZRLDO.js.map
