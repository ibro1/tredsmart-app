import {
  $9f79659886946c16$export$e5c5a5f917a5871c,
  $b1b2314f5f9a1d84$export$25bec8c6f54ee79a,
  $c512c27ab02ef895$export$50c7b4e9d9f19c1
} from "/build/_shared/chunk-ZGCIAMRY.js";
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
  getNameInitials
} from "/build/_shared/chunk-2OMQDMHI.js";
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

// node_modules/.pnpm/@radix-ui+react-avatar@1.0.4_@types+react-dom@18.2.18_@types+react@18.2.47_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@radix-ui/react-avatar/dist/index.mjs
var import_react = __toESM(require_react(), 1);
var $cddcb0b647441e34$var$AVATAR_NAME = "Avatar";
var [$cddcb0b647441e34$var$createAvatarContext, $cddcb0b647441e34$export$90370d16b488820f] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($cddcb0b647441e34$var$AVATAR_NAME);
var [$cddcb0b647441e34$var$AvatarProvider, $cddcb0b647441e34$var$useAvatarContext] = $cddcb0b647441e34$var$createAvatarContext($cddcb0b647441e34$var$AVATAR_NAME);
var $cddcb0b647441e34$export$e2255cf6045e8d47 = /* @__PURE__ */ (0, import_react.forwardRef)((props, forwardedRef) => {
  const { __scopeAvatar, ...avatarProps } = props;
  const [imageLoadingStatus, setImageLoadingStatus] = (0, import_react.useState)("idle");
  return /* @__PURE__ */ (0, import_react.createElement)($cddcb0b647441e34$var$AvatarProvider, {
    scope: __scopeAvatar,
    imageLoadingStatus,
    onImageLoadingStatusChange: setImageLoadingStatus
  }, /* @__PURE__ */ (0, import_react.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.span, _extends({}, avatarProps, {
    ref: forwardedRef
  })));
});
var $cddcb0b647441e34$var$IMAGE_NAME = "AvatarImage";
var $cddcb0b647441e34$export$2cd8ae1985206fe8 = /* @__PURE__ */ (0, import_react.forwardRef)((props, forwardedRef) => {
  const { __scopeAvatar, src, onLoadingStatusChange = () => {
  }, ...imageProps } = props;
  const context = $cddcb0b647441e34$var$useAvatarContext($cddcb0b647441e34$var$IMAGE_NAME, __scopeAvatar);
  const imageLoadingStatus = $cddcb0b647441e34$var$useImageLoadingStatus(src);
  const handleLoadingStatusChange = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a((status) => {
    onLoadingStatusChange(status);
    context.onImageLoadingStatusChange(status);
  });
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    if (imageLoadingStatus !== "idle")
      handleLoadingStatusChange(imageLoadingStatus);
  }, [
    imageLoadingStatus,
    handleLoadingStatusChange
  ]);
  return imageLoadingStatus === "loaded" ? /* @__PURE__ */ (0, import_react.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.img, _extends({}, imageProps, {
    ref: forwardedRef,
    src
  })) : null;
});
var $cddcb0b647441e34$var$FALLBACK_NAME = "AvatarFallback";
var $cddcb0b647441e34$export$69fffb6a9571fbfe = /* @__PURE__ */ (0, import_react.forwardRef)((props, forwardedRef) => {
  const { __scopeAvatar, delayMs, ...fallbackProps } = props;
  const context = $cddcb0b647441e34$var$useAvatarContext($cddcb0b647441e34$var$FALLBACK_NAME, __scopeAvatar);
  const [canRender, setCanRender] = (0, import_react.useState)(delayMs === void 0);
  (0, import_react.useEffect)(() => {
    if (delayMs !== void 0) {
      const timerId = window.setTimeout(
        () => setCanRender(true),
        delayMs
      );
      return () => window.clearTimeout(timerId);
    }
  }, [
    delayMs
  ]);
  return canRender && context.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ (0, import_react.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.span, _extends({}, fallbackProps, {
    ref: forwardedRef
  })) : null;
});
function $cddcb0b647441e34$var$useImageLoadingStatus(src) {
  const [loadingStatus, setLoadingStatus] = (0, import_react.useState)("idle");
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    if (!src) {
      setLoadingStatus("error");
      return;
    }
    let isMounted = true;
    const image = new window.Image();
    const updateStatus = (status) => () => {
      if (!isMounted)
        return;
      setLoadingStatus(status);
    };
    setLoadingStatus("loading");
    image.onload = updateStatus("loaded");
    image.onerror = updateStatus("error");
    image.src = src;
    return () => {
      isMounted = false;
    };
  }, [
    src
  ]);
  return loadingStatus;
}
var $cddcb0b647441e34$export$be92b6f5f03c0fe9 = $cddcb0b647441e34$export$e2255cf6045e8d47;
var $cddcb0b647441e34$export$3e431a229df88919 = $cddcb0b647441e34$export$2cd8ae1985206fe8;
var $cddcb0b647441e34$export$fb8d7f40caaeea67 = $cddcb0b647441e34$export$69fffb6a9571fbfe;

// app/components/ui/avatar.tsx
var React = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ui/avatar.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ui/avatar.tsx"
  );
  import.meta.hot.lastModified = "1738409028324.369";
}
var Avatar = React.forwardRef(_c = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($cddcb0b647441e34$export$be92b6f5f03c0fe9, { ref, className: cn("relative flex size-8 shrink-0 select-none overflow-hidden rounded-full", className), ...props }, void 0, false, {
  fileName: "app/components/ui/avatar.tsx",
  lineNumber: 27,
  columnNumber: 12
}, this));
_c2 = Avatar;
Avatar.displayName = $cddcb0b647441e34$export$be92b6f5f03c0fe9.displayName;
var AvatarImage = React.forwardRef(_c3 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($cddcb0b647441e34$export$3e431a229df88919, { ref, className: cn("aspect-square h-full w-full", className), ...props }, void 0, false, {
  fileName: "app/components/ui/avatar.tsx",
  lineNumber: 33,
  columnNumber: 12
}, this));
_c4 = AvatarImage;
AvatarImage.displayName = $cddcb0b647441e34$export$3e431a229df88919.displayName;
var AvatarFallback = React.forwardRef(_c5 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($cddcb0b647441e34$export$fb8d7f40caaeea67, { ref, className: cn("flex h-full w-full items-center justify-center rounded-full bg-muted", className), ...props }, void 0, false, {
  fileName: "app/components/ui/avatar.tsx",
  lineNumber: 39,
  columnNumber: 12
}, this));
_c6 = AvatarFallback;
AvatarFallback.displayName = $cddcb0b647441e34$export$fb8d7f40caaeea67.displayName;
var _c;
var _c2;
var _c3;
var _c4;
var _c5;
var _c6;
$RefreshReg$(_c, "Avatar$React.forwardRef");
$RefreshReg$(_c2, "Avatar");
$RefreshReg$(_c3, "AvatarImage$React.forwardRef");
$RefreshReg$(_c4, "AvatarImage");
$RefreshReg$(_c5, "AvatarFallback$React.forwardRef");
$RefreshReg$(_c6, "AvatarFallback");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/utils/placeholder.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/utils/placeholder.ts"
  );
  import.meta.hot.lastModified = "1738409028332.369";
}
function getPlaceholderAvatarUrl(username = "username", styleName = "thumbs") {
  const url = new URL(`https://api.dicebear.com/6.x/${styleName}/svg`);
  url.searchParams.append("seed", username);
  url.searchParams.append("flip", String(true));
  return url.toString();
}

// app/components/ui/avatar-auto.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ui/avatar-auto.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ui/avatar-auto.tsx"
  );
  import.meta.hot.lastModified = "1738409028320.369";
}
var avatarAutoVariants = cva("", {
  variants: {
    size: {
      xs: "size-6",
      sm: "size-8",
      default: "size-12",
      lg: "size-20",
      xl: "size-28"
    }
  },
  compoundVariants: [{
    size: "xs",
    class: "text-base"
  }, {
    size: "sm",
    class: "text-lg"
  }, {
    size: "default",
    class: "text-3xl"
  }, {
    size: "lg",
    class: "text-4xl"
  }, {
    size: "xl",
    class: "text-5xl"
  }],
  defaultVariants: {
    size: "default"
  }
});
function AvatarAuto({
  user,
  imageUrl,
  size,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Avatar, { ...props, className: cn(avatarAutoVariants({
    size
  }), "bg-secondary"), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AvatarImage, { src: imageUrl || getPlaceholderAvatarUrl(user.username), alt: user.fullname }, void 0, false, {
      fileName: "app/components/ui/avatar-auto.tsx",
      lineNumber: 71,
      columnNumber: 7
    }, this),
    !imageUrl && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AvatarFallback, { children: getNameInitials(user.fullname) }, void 0, false, {
      fileName: "app/components/ui/avatar-auto.tsx",
      lineNumber: 73,
      columnNumber: 21
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/ui/avatar-auto.tsx",
    lineNumber: 68,
    columnNumber: 10
  }, this);
}
_c7 = AvatarAuto;
var _c7;
$RefreshReg$(_c7, "AvatarAuto");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  AvatarAuto
};
//# sourceMappingURL=/build/_shared/chunk-KL5TYB5S.js.map
