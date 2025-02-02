import {
  $8927f6f2acc4f386$export$250ffa63cdc0d034
} from "/build/_shared/chunk-DTH62TLO.js";
import {
  IconMatch
} from "/build/_shared/chunk-MNDIBQ26.js";
import {
  _extends
} from "/build/_shared/chunk-UYNRCM5D.js";
import {
  cn
} from "/build/_shared/chunk-X65FW46X.js";
import {
  NavLink
} from "/build/_shared/chunk-64BCTWQL.js";
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

// app/components/shared/sidebar-nav-items.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/shared/sidebar-nav-items.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/shared/sidebar-nav-items.tsx"
  );
  import.meta.hot.lastModified = "1738409028320.369";
}
function SidebarNavItems({
  items
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "space-y-2", children: items.map((item) => {
    const isLogout = item.path === "/logout";
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: item.path, prefetch: "intent", className: ({
      isActive
    }) => cn("focus-ring flex w-full items-center gap-2 rounded-md px-2 py-1 transition", !isLogout && !isActive && "hover:bg-secondary", !isLogout && isActive && "bg-secondary text-secondary-foreground", isLogout && "hover:bg-destructive hover:text-destructive-foreground"), children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconMatch, { icon: item.icon, className: "shrink-0" }, void 0, false, {
        fileName: "app/components/shared/sidebar-nav-items.tsx",
        lineNumber: 34,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "hidden whitespace-nowrap sm:inline", children: item.text }, void 0, false, {
        fileName: "app/components/shared/sidebar-nav-items.tsx",
        lineNumber: 35,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/shared/sidebar-nav-items.tsx",
      lineNumber: 31,
      columnNumber: 13
    }, this) }, item.path, false, {
      fileName: "app/components/shared/sidebar-nav-items.tsx",
      lineNumber: 30,
      columnNumber: 14
    }, this);
  }) }, void 0, false, {
    fileName: "app/components/shared/sidebar-nav-items.tsx",
    lineNumber: 27,
    columnNumber: 10
  }, this);
}
_c = SidebarNavItems;
var _c;
$RefreshReg$(_c, "SidebarNavItems");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// node_modules/.pnpm/@radix-ui+react-separator@1.0.3_@types+react-dom@18.2.18_@types+react@18.2.47_react-dom@18.2._ojcgyjjy4tt2f4nyc27eyvat5i/node_modules/@radix-ui/react-separator/dist/index.mjs
var import_react2 = __toESM(require_react(), 1);
var $89eedd556c436f6a$var$DEFAULT_ORIENTATION = "horizontal";
var $89eedd556c436f6a$var$ORIENTATIONS = [
  "horizontal",
  "vertical"
];
var $89eedd556c436f6a$export$1ff3c3f08ae963c0 = /* @__PURE__ */ (0, import_react2.forwardRef)((props, forwardedRef) => {
  const { decorative, orientation: orientationProp = $89eedd556c436f6a$var$DEFAULT_ORIENTATION, ...domProps } = props;
  const orientation = $89eedd556c436f6a$var$isValidOrientation(orientationProp) ? orientationProp : $89eedd556c436f6a$var$DEFAULT_ORIENTATION;
  const ariaOrientation = orientation === "vertical" ? orientation : void 0;
  const semanticProps = decorative ? {
    role: "none"
  } : {
    "aria-orientation": ariaOrientation,
    role: "separator"
  };
  return /* @__PURE__ */ (0, import_react2.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    "data-orientation": orientation
  }, semanticProps, domProps, {
    ref: forwardedRef
  }));
});
$89eedd556c436f6a$export$1ff3c3f08ae963c0.propTypes = {
  orientation(props, propName, componentName) {
    const propValue = props[propName];
    const strVal = String(propValue);
    if (propValue && !$89eedd556c436f6a$var$isValidOrientation(propValue))
      return new Error($89eedd556c436f6a$var$getInvalidOrientationError(strVal, componentName));
    return null;
  }
};
function $89eedd556c436f6a$var$getInvalidOrientationError(value, componentName) {
  return `Invalid prop \`orientation\` of value \`${value}\` supplied to \`${componentName}\`, expected one of:
  - horizontal
  - vertical

Defaulting to \`${$89eedd556c436f6a$var$DEFAULT_ORIENTATION}\`.`;
}
function $89eedd556c436f6a$var$isValidOrientation(orientation) {
  return $89eedd556c436f6a$var$ORIENTATIONS.includes(orientation);
}
var $89eedd556c436f6a$export$be92b6f5f03c0fe9 = $89eedd556c436f6a$export$1ff3c3f08ae963c0;

// app/components/ui/separator.tsx
var React = __toESM(require_react(), 1);
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ui/separator.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ui/separator.tsx"
  );
  import.meta.hot.lastModified = "1738409028324.369";
}
var Separator = React.forwardRef(_c2 = ({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)($89eedd556c436f6a$export$be92b6f5f03c0fe9, { ref, decorative, orientation, className: cn("shrink-0 bg-border", orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", className), ...props }, void 0, false, {
  fileName: "app/components/ui/separator.tsx",
  lineNumber: 29,
  columnNumber: 12
}, this));
_c22 = Separator;
Separator.displayName = $89eedd556c436f6a$export$be92b6f5f03c0fe9.displayName;
var _c2;
var _c22;
$RefreshReg$(_c2, "Separator$React.forwardRef");
$RefreshReg$(_c22, "Separator");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  SidebarNavItems,
  Separator
};
//# sourceMappingURL=/build/_shared/chunk-EOOS6BI6.js.map
