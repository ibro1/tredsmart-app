import {
  $5d3850c4d0b4e6c7$export$393edc798c47379d,
  $5d3850c4d0b4e6c7$export$41fb9f06171c75f4,
  $5d3850c4d0b4e6c7$export$602eac185826482c,
  $5d3850c4d0b4e6c7$export$69b62a49393917d6,
  $5d3850c4d0b4e6c7$export$7c6e2c02157bb7d2,
  $5d3850c4d0b4e6c7$export$be92b6f5f03c0fe9,
  $5d3850c4d0b4e6c7$export$c6fdb837b070b4ff,
  $5d3850c4d0b4e6c7$export$cc702773b8ea3e41,
  $5d3850c4d0b4e6c7$export$f39c2d165cd861fe,
  $5d3850c4d0b4e6c7$export$f99233281efd08a0
} from "/build/_shared/chunk-ITWYGFH5.js";
import {
  $e42e1063c40fb3ef$export$b9ecd428b558ff10
} from "/build/_shared/chunk-2SNMQAJI.js";
import {
  $c512c27ab02ef895$export$50c7b4e9d9f19c1
} from "/build/_shared/chunk-ZGCIAMRY.js";
import {
  buttonVariants
} from "/build/_shared/chunk-GKLF6JPE.js";
import {
  $5e63c961fc1ce211$export$d9f1ccf0bdb05d45,
  $6ed0406888f73fc4$export$c7b2cbe3552a0d05,
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

// node_modules/.pnpm/@radix-ui+react-alert-dialog@1.0.5_@types+react-dom@18.2.18_@types+react@18.2.47_react-dom@18_xvw6uojfufftmcz2cscaxsmxj4/node_modules/@radix-ui/react-alert-dialog/dist/index.mjs
var import_react = __toESM(require_react(), 1);
var $905f4ae918aab1aa$var$ROOT_NAME = "AlertDialog";
var [$905f4ae918aab1aa$var$createAlertDialogContext, $905f4ae918aab1aa$export$b8891880751c2c5b] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($905f4ae918aab1aa$var$ROOT_NAME, [
  $5d3850c4d0b4e6c7$export$cc702773b8ea3e41
]);
var $905f4ae918aab1aa$var$useDialogScope = $5d3850c4d0b4e6c7$export$cc702773b8ea3e41();
var $905f4ae918aab1aa$export$de466dd8317b0b75 = (props) => {
  const { __scopeAlertDialog, ...alertDialogProps } = props;
  const dialogScope = $905f4ae918aab1aa$var$useDialogScope(__scopeAlertDialog);
  return /* @__PURE__ */ (0, import_react.createElement)($5d3850c4d0b4e6c7$export$be92b6f5f03c0fe9, _extends({}, dialogScope, alertDialogProps, {
    modal: true
  }));
};
var $905f4ae918aab1aa$export$6edd7a623ef0f40b = /* @__PURE__ */ (0, import_react.forwardRef)((props, forwardedRef) => {
  const { __scopeAlertDialog, ...triggerProps } = props;
  const dialogScope = $905f4ae918aab1aa$var$useDialogScope(__scopeAlertDialog);
  return /* @__PURE__ */ (0, import_react.createElement)($5d3850c4d0b4e6c7$export$41fb9f06171c75f4, _extends({}, dialogScope, triggerProps, {
    ref: forwardedRef
  }));
});
var $905f4ae918aab1aa$export$660f2bfdb986706c = (props) => {
  const { __scopeAlertDialog, ...portalProps } = props;
  const dialogScope = $905f4ae918aab1aa$var$useDialogScope(__scopeAlertDialog);
  return /* @__PURE__ */ (0, import_react.createElement)($5d3850c4d0b4e6c7$export$602eac185826482c, _extends({}, dialogScope, portalProps));
};
var $905f4ae918aab1aa$export$a707a4895ce23256 = /* @__PURE__ */ (0, import_react.forwardRef)((props, forwardedRef) => {
  const { __scopeAlertDialog, ...overlayProps } = props;
  const dialogScope = $905f4ae918aab1aa$var$useDialogScope(__scopeAlertDialog);
  return /* @__PURE__ */ (0, import_react.createElement)($5d3850c4d0b4e6c7$export$c6fdb837b070b4ff, _extends({}, dialogScope, overlayProps, {
    ref: forwardedRef
  }));
});
var $905f4ae918aab1aa$var$CONTENT_NAME = "AlertDialogContent";
var [$905f4ae918aab1aa$var$AlertDialogContentProvider, $905f4ae918aab1aa$var$useAlertDialogContentContext] = $905f4ae918aab1aa$var$createAlertDialogContext($905f4ae918aab1aa$var$CONTENT_NAME);
var $905f4ae918aab1aa$export$94e6af45f0af4efd = /* @__PURE__ */ (0, import_react.forwardRef)((props, forwardedRef) => {
  const { __scopeAlertDialog, children, ...contentProps } = props;
  const dialogScope = $905f4ae918aab1aa$var$useDialogScope(__scopeAlertDialog);
  const contentRef = (0, import_react.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, contentRef);
  const cancelRef = (0, import_react.useRef)(null);
  return /* @__PURE__ */ (0, import_react.createElement)($5d3850c4d0b4e6c7$export$69b62a49393917d6, {
    contentName: $905f4ae918aab1aa$var$CONTENT_NAME,
    titleName: $905f4ae918aab1aa$var$TITLE_NAME,
    docsSlug: "alert-dialog"
  }, /* @__PURE__ */ (0, import_react.createElement)($905f4ae918aab1aa$var$AlertDialogContentProvider, {
    scope: __scopeAlertDialog,
    cancelRef
  }, /* @__PURE__ */ (0, import_react.createElement)($5d3850c4d0b4e6c7$export$7c6e2c02157bb7d2, _extends({
    role: "alertdialog"
  }, dialogScope, contentProps, {
    ref: composedRefs,
    onOpenAutoFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(contentProps.onOpenAutoFocus, (event) => {
      var _cancelRef$current;
      event.preventDefault();
      (_cancelRef$current = cancelRef.current) === null || _cancelRef$current === void 0 || _cancelRef$current.focus({
        preventScroll: true
      });
    }),
    onPointerDownOutside: (event) => event.preventDefault(),
    onInteractOutside: (event) => event.preventDefault()
  }), /* @__PURE__ */ (0, import_react.createElement)($5e63c961fc1ce211$export$d9f1ccf0bdb05d45, null, children), false)));
});
var $905f4ae918aab1aa$var$TITLE_NAME = "AlertDialogTitle";
var $905f4ae918aab1aa$export$225e0da62d314b7 = /* @__PURE__ */ (0, import_react.forwardRef)((props, forwardedRef) => {
  const { __scopeAlertDialog, ...titleProps } = props;
  const dialogScope = $905f4ae918aab1aa$var$useDialogScope(__scopeAlertDialog);
  return /* @__PURE__ */ (0, import_react.createElement)($5d3850c4d0b4e6c7$export$f99233281efd08a0, _extends({}, dialogScope, titleProps, {
    ref: forwardedRef
  }));
});
var $905f4ae918aab1aa$export$a23b55cde55ad9a5 = /* @__PURE__ */ (0, import_react.forwardRef)((props, forwardedRef) => {
  const { __scopeAlertDialog, ...descriptionProps } = props;
  const dialogScope = $905f4ae918aab1aa$var$useDialogScope(__scopeAlertDialog);
  return /* @__PURE__ */ (0, import_react.createElement)($5d3850c4d0b4e6c7$export$393edc798c47379d, _extends({}, dialogScope, descriptionProps, {
    ref: forwardedRef
  }));
});
var $905f4ae918aab1aa$export$b454f818c58ee85d = /* @__PURE__ */ (0, import_react.forwardRef)((props, forwardedRef) => {
  const { __scopeAlertDialog, ...actionProps } = props;
  const dialogScope = $905f4ae918aab1aa$var$useDialogScope(__scopeAlertDialog);
  return /* @__PURE__ */ (0, import_react.createElement)($5d3850c4d0b4e6c7$export$f39c2d165cd861fe, _extends({}, dialogScope, actionProps, {
    ref: forwardedRef
  }));
});
var $905f4ae918aab1aa$var$CANCEL_NAME = "AlertDialogCancel";
var $905f4ae918aab1aa$export$2f67a923571aaea0 = /* @__PURE__ */ (0, import_react.forwardRef)((props, forwardedRef) => {
  const { __scopeAlertDialog, ...cancelProps } = props;
  const { cancelRef } = $905f4ae918aab1aa$var$useAlertDialogContentContext($905f4ae918aab1aa$var$CANCEL_NAME, __scopeAlertDialog);
  const dialogScope = $905f4ae918aab1aa$var$useDialogScope(__scopeAlertDialog);
  const ref = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, cancelRef);
  return /* @__PURE__ */ (0, import_react.createElement)($5d3850c4d0b4e6c7$export$f39c2d165cd861fe, _extends({}, dialogScope, cancelProps, {
    ref
  }));
});
var $905f4ae918aab1aa$export$be92b6f5f03c0fe9 = $905f4ae918aab1aa$export$de466dd8317b0b75;
var $905f4ae918aab1aa$export$41fb9f06171c75f4 = $905f4ae918aab1aa$export$6edd7a623ef0f40b;
var $905f4ae918aab1aa$export$602eac185826482c = $905f4ae918aab1aa$export$660f2bfdb986706c;
var $905f4ae918aab1aa$export$c6fdb837b070b4ff = $905f4ae918aab1aa$export$a707a4895ce23256;
var $905f4ae918aab1aa$export$7c6e2c02157bb7d2 = $905f4ae918aab1aa$export$94e6af45f0af4efd;
var $905f4ae918aab1aa$export$e19cd5f9376f8cee = $905f4ae918aab1aa$export$b454f818c58ee85d;
var $905f4ae918aab1aa$export$848c9b7ead0df967 = $905f4ae918aab1aa$export$2f67a923571aaea0;
var $905f4ae918aab1aa$export$f99233281efd08a0 = $905f4ae918aab1aa$export$225e0da62d314b7;
var $905f4ae918aab1aa$export$393edc798c47379d = $905f4ae918aab1aa$export$a23b55cde55ad9a5;

// app/components/ui/alert-dialog.tsx
var React = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ui/alert-dialog.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ui/alert-dialog.tsx"
  );
  import.meta.hot.lastModified = "1738409028320.369";
}
var AlertDialog = $905f4ae918aab1aa$export$be92b6f5f03c0fe9;
var AlertDialogTrigger = $905f4ae918aab1aa$export$41fb9f06171c75f4;
var AlertDialogPortal = $905f4ae918aab1aa$export$602eac185826482c;
var AlertDialogOverlay = React.forwardRef(_c = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($905f4ae918aab1aa$export$c6fdb837b070b4ff, { className: cn("fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className), ...props, ref }, void 0, false, {
  fileName: "app/components/ui/alert-dialog.tsx",
  lineNumber: 31,
  columnNumber: 12
}, this));
_c2 = AlertDialogOverlay;
AlertDialogOverlay.displayName = $905f4ae918aab1aa$export$c6fdb837b070b4ff.displayName;
var AlertDialogContent = React.forwardRef(_c3 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AlertDialogPortal, { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AlertDialogOverlay, {}, void 0, false, {
    fileName: "app/components/ui/alert-dialog.tsx",
    lineNumber: 38,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($905f4ae918aab1aa$export$7c6e2c02157bb7d2, { ref, className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:w-full sm:rounded-lg", className), ...props }, void 0, false, {
    fileName: "app/components/ui/alert-dialog.tsx",
    lineNumber: 39,
    columnNumber: 5
  }, this)
] }, void 0, true, {
  fileName: "app/components/ui/alert-dialog.tsx",
  lineNumber: 37,
  columnNumber: 12
}, this));
_c4 = AlertDialogContent;
AlertDialogContent.displayName = $905f4ae918aab1aa$export$7c6e2c02157bb7d2.displayName;
var AlertDialogHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: cn("flex flex-col space-y-2 text-left", className), ...props }, void 0, false, {
  fileName: "app/components/ui/alert-dialog.tsx",
  lineNumber: 46,
  columnNumber: 7
}, this);
_c5 = AlertDialogHeader;
AlertDialogHeader.displayName = "AlertDialogHeader";
var AlertDialogFooter = ({
  className,
  ...props
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: cn("flex flex-row items-center justify-end space-x-2", className), ...props }, void 0, false, {
  fileName: "app/components/ui/alert-dialog.tsx",
  lineNumber: 52,
  columnNumber: 7
}, this);
_c6 = AlertDialogFooter;
AlertDialogFooter.displayName = "AlertDialogFooter";
var AlertDialogTitle = React.forwardRef(_c7 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($905f4ae918aab1aa$export$f99233281efd08a0, { ref, className: cn("text-lg font-semibold", className), ...props }, void 0, false, {
  fileName: "app/components/ui/alert-dialog.tsx",
  lineNumber: 58,
  columnNumber: 12
}, this));
_c8 = AlertDialogTitle;
AlertDialogTitle.displayName = $905f4ae918aab1aa$export$f99233281efd08a0.displayName;
var AlertDialogDescription = React.forwardRef(_c9 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($905f4ae918aab1aa$export$393edc798c47379d, { ref, className: cn("text-sm text-muted-foreground", className), ...props }, void 0, false, {
  fileName: "app/components/ui/alert-dialog.tsx",
  lineNumber: 64,
  columnNumber: 12
}, this));
_c10 = AlertDialogDescription;
AlertDialogDescription.displayName = $905f4ae918aab1aa$export$393edc798c47379d.displayName;
var AlertDialogAction = React.forwardRef(_c11 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($905f4ae918aab1aa$export$e19cd5f9376f8cee, { ref, className: cn(buttonVariants(), className), ...props }, void 0, false, {
  fileName: "app/components/ui/alert-dialog.tsx",
  lineNumber: 70,
  columnNumber: 12
}, this));
_c12 = AlertDialogAction;
AlertDialogAction.displayName = $905f4ae918aab1aa$export$e19cd5f9376f8cee.displayName;
var AlertDialogCancel = React.forwardRef(_c13 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($905f4ae918aab1aa$export$848c9b7ead0df967, { ref, className: cn(buttonVariants({
  variant: "ghost",
  size: "sm"
}), className), ...props }, void 0, false, {
  fileName: "app/components/ui/alert-dialog.tsx",
  lineNumber: 76,
  columnNumber: 12
}, this));
_c14 = AlertDialogCancel;
AlertDialogCancel.displayName = $905f4ae918aab1aa$export$848c9b7ead0df967.displayName;
var _c;
var _c2;
var _c3;
var _c4;
var _c5;
var _c6;
var _c7;
var _c8;
var _c9;
var _c10;
var _c11;
var _c12;
var _c13;
var _c14;
$RefreshReg$(_c, "AlertDialogOverlay$React.forwardRef");
$RefreshReg$(_c2, "AlertDialogOverlay");
$RefreshReg$(_c3, "AlertDialogContent$React.forwardRef");
$RefreshReg$(_c4, "AlertDialogContent");
$RefreshReg$(_c5, "AlertDialogHeader");
$RefreshReg$(_c6, "AlertDialogFooter");
$RefreshReg$(_c7, "AlertDialogTitle$React.forwardRef");
$RefreshReg$(_c8, "AlertDialogTitle");
$RefreshReg$(_c9, "AlertDialogDescription$React.forwardRef");
$RefreshReg$(_c10, "AlertDialogDescription");
$RefreshReg$(_c11, "AlertDialogAction$React.forwardRef");
$RefreshReg$(_c12, "AlertDialogAction");
$RefreshReg$(_c13, "AlertDialogCancel$React.forwardRef");
$RefreshReg$(_c14, "AlertDialogCancel");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel
};
//# sourceMappingURL=/build/_shared/chunk-DERNVLJX.js.map
