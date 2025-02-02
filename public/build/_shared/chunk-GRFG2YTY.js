import {
  cva
} from "/build/_shared/chunk-GKLF6JPE.js";
import {
  $8927f6f2acc4f386$export$250ffa63cdc0d034
} from "/build/_shared/chunk-DTH62TLO.js";
import {
  _extends
} from "/build/_shared/chunk-UYNRCM5D.js";
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

// node_modules/.pnpm/@radix-ui+react-label@2.0.2_@types+react-dom@18.2.18_@types+react@18.2.47_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@radix-ui/react-label/dist/index.mjs
var import_react = __toESM(require_react(), 1);
var $b73a6c6685e72184$export$b04be29aa201d4f5 = /* @__PURE__ */ (0, import_react.forwardRef)((props, forwardedRef) => {
  return /* @__PURE__ */ (0, import_react.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.label, _extends({}, props, {
    ref: forwardedRef,
    onMouseDown: (event) => {
      var _props$onMouseDown;
      (_props$onMouseDown = props.onMouseDown) === null || _props$onMouseDown === void 0 || _props$onMouseDown.call(props, event);
      if (!event.defaultPrevented && event.detail > 1)
        event.preventDefault();
    }
  }));
});
var $b73a6c6685e72184$export$be92b6f5f03c0fe9 = $b73a6c6685e72184$export$b04be29aa201d4f5;

// app/components/ui/label.tsx
var React = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ui/label.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ui/label.tsx"
  );
  import.meta.hot.lastModified = "1738409028324.369";
}
var labelVariants = cva("text-sm font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70", {
  variants: {
    variant: {
      default: "",
      disabled: "opacity-50"
    }
  },
  defaultVariants: {
    variant: "default"
  }
});
var Label = React.forwardRef(_c = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($b73a6c6685e72184$export$be92b6f5f03c0fe9, { ref, className: cn(labelVariants(), className), ...props }, void 0, false, {
  fileName: "app/components/ui/label.tsx",
  lineNumber: 39,
  columnNumber: 12
}, this));
_c2 = Label;
Label.displayName = $b73a6c6685e72184$export$be92b6f5f03c0fe9.displayName;
var _c;
var _c2;
$RefreshReg$(_c, "Label$React.forwardRef");
$RefreshReg$(_c2, "Label");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  labelVariants,
  Label
};
//# sourceMappingURL=/build/_shared/chunk-GRFG2YTY.js.map
