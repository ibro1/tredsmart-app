import {
  Badge
} from "/build/_shared/chunk-UNALZBNT.js";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from "/build/_shared/chunk-DERNVLJX.js";
import {
  ButtonLoading
} from "/build/_shared/chunk-5BR6CKWI.js";
import {
  $cf1ac5d9fe0e8206$export$722aac194ae923,
  $cf1ac5d9fe0e8206$export$7c6e2c02157bb7d2,
  $cf1ac5d9fe0e8206$export$b688253958b8dfe7,
  $cf1ac5d9fe0e8206$export$be92b6f5f03c0fe9,
  $e02a7d9cb1dc128c$export$c74125a8e3af6bb2,
  $f631663db3294ace$export$b39126d51d94e6f3
} from "/build/_shared/chunk-GO2JLU7Q.js";
import {
  $3db38b7d1fb3fe6a$export$b7ece24a22aeda8c,
  $5cb92bef7577960e$export$177fb62ff3ec1f22,
  $d3863c46a17e8a28$export$20e40289641fbbb6,
  $f1701beae083dbae$export$602eac185826482c,
  Combination_default,
  hideOthers
} from "/build/_shared/chunk-LXYT7BAQ.js";
import {
  $1746a345f3d73bb7$export$f680877a34711e37,
  $71cd76cc60e0454e$export$6f32135080cb4c3,
  $e42e1063c40fb3ef$export$b9ecd428b558ff10
} from "/build/_shared/chunk-2SNMQAJI.js";
import {
  $9f79659886946c16$export$e5c5a5f917a5871c,
  $b1b2314f5f9a1d84$export$25bec8c6f54ee79a,
  $c512c27ab02ef895$export$50c7b4e9d9f19c1
} from "/build/_shared/chunk-ZGCIAMRY.js";
import {
  $8927f6f2acc4f386$export$250ffa63cdc0d034
} from "/build/_shared/chunk-DTH62TLO.js";
import {
  IconMatch
} from "/build/_shared/chunk-MNDIBQ26.js";
import {
  $5e63c961fc1ce211$export$8c6ed5c666ac1360,
  $6ed0406888f73fc4$export$c7b2cbe3552a0d05,
  _extends
} from "/build/_shared/chunk-UYNRCM5D.js";
import {
  cn
} from "/build/_shared/chunk-X65FW46X.js";
import {
  useFetcher
} from "/build/_shared/chunk-64BCTWQL.js";
import {
  require_react_dom
} from "/build/_shared/chunk-NRZYIDDW.js";
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

// app/components/shared/icon-post-status.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/shared/icon-post-status.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/shared/icon-post-status.tsx"
  );
  import.meta.hot.lastModified = "1738409028320.369";
}
function IconPostStatus({
  status
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconMatch, { icon: status.symbol, className: "inline" }, void 0, false, {
    fileName: "app/components/shared/icon-post-status.tsx",
    lineNumber: 25,
    columnNumber: 10
  }, this);
}
_c = IconPostStatus;
var _c;
$RefreshReg$(_c, "IconPostStatus");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/shared/badge-post-status.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/shared/badge-post-status.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/shared/badge-post-status.tsx"
  );
  import.meta.hot.lastModified = "1738409028320.369";
}
function BadgePostStatus({
  status,
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Badge, { variant: "secondary", className: cn("inline-flex items-center gap-1", className), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(IconPostStatus, { status }, void 0, false, {
      fileName: "app/components/shared/badge-post-status.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: status.name }, void 0, false, {
      fileName: "app/components/shared/badge-post-status.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/shared/badge-post-status.tsx",
    lineNumber: 28,
    columnNumber: 10
  }, this);
}
_c2 = BadgePostStatus;
var _c2;
$RefreshReg$(_c2, "BadgePostStatus");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/shared/form-update-status.tsx
var import_react5 = __toESM(require_react(), 1);

// node_modules/.pnpm/@radix-ui+react-select@2.0.0_@types+react-dom@18.2.18_@types+react@18.2.47_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@radix-ui/react-select/dist/index.mjs
var import_react3 = __toESM(require_react(), 1);
var import_react_dom = __toESM(require_react_dom(), 1);

// node_modules/.pnpm/@radix-ui+number@1.0.1/node_modules/@radix-ui/number/dist/index.mjs
function $ae6933e535247d3d$export$7d15b64cf5a3a4c4(value, [min, max]) {
  return Math.min(max, Math.max(min, value));
}

// node_modules/.pnpm/@radix-ui+react-use-previous@1.0.1_@types+react@18.2.47_react@18.2.0/node_modules/@radix-ui/react-use-previous/dist/index.mjs
var import_react = __toESM(require_react(), 1);
function $010c2913dbd2fe3d$export$5cae361ad82dce8b(value) {
  const ref = (0, import_react.useRef)({
    value,
    previous: value
  });
  return (0, import_react.useMemo)(() => {
    if (ref.current.value !== value) {
      ref.current.previous = ref.current.value;
      ref.current.value = value;
    }
    return ref.current.previous;
  }, [
    value
  ]);
}

// node_modules/.pnpm/@radix-ui+react-visually-hidden@1.0.3_@types+react-dom@18.2.18_@types+react@18.2.47_react-dom_ovrxoxyhzkj2crns274dt56a54/node_modules/@radix-ui/react-visually-hidden/dist/index.mjs
var import_react2 = __toESM(require_react(), 1);
var $ea1ef594cf570d83$export$439d29a4e110a164 = /* @__PURE__ */ (0, import_react2.forwardRef)((props, forwardedRef) => {
  return /* @__PURE__ */ (0, import_react2.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.span, _extends({}, props, {
    ref: forwardedRef,
    style: {
      // See: https://github.com/twbs/bootstrap/blob/master/scss/mixins/_screen-reader.scss
      position: "absolute",
      border: 0,
      width: 1,
      height: 1,
      padding: 0,
      margin: -1,
      overflow: "hidden",
      clip: "rect(0, 0, 0, 0)",
      whiteSpace: "nowrap",
      wordWrap: "normal",
      ...props.style
    }
  }));
});

// node_modules/.pnpm/@radix-ui+react-select@2.0.0_@types+react-dom@18.2.18_@types+react@18.2.47_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@radix-ui/react-select/dist/index.mjs
var $cc7e05a45900e73f$var$OPEN_KEYS = [
  " ",
  "Enter",
  "ArrowUp",
  "ArrowDown"
];
var $cc7e05a45900e73f$var$SELECTION_KEYS = [
  " ",
  "Enter"
];
var $cc7e05a45900e73f$var$SELECT_NAME = "Select";
var [$cc7e05a45900e73f$var$Collection, $cc7e05a45900e73f$var$useCollection, $cc7e05a45900e73f$var$createCollectionScope] = $e02a7d9cb1dc128c$export$c74125a8e3af6bb2($cc7e05a45900e73f$var$SELECT_NAME);
var [$cc7e05a45900e73f$var$createSelectContext, $cc7e05a45900e73f$export$286727a75dc039bd] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($cc7e05a45900e73f$var$SELECT_NAME, [
  $cc7e05a45900e73f$var$createCollectionScope,
  $cf1ac5d9fe0e8206$export$722aac194ae923
]);
var $cc7e05a45900e73f$var$usePopperScope = $cf1ac5d9fe0e8206$export$722aac194ae923();
var [$cc7e05a45900e73f$var$SelectProvider, $cc7e05a45900e73f$var$useSelectContext] = $cc7e05a45900e73f$var$createSelectContext($cc7e05a45900e73f$var$SELECT_NAME);
var [$cc7e05a45900e73f$var$SelectNativeOptionsProvider, $cc7e05a45900e73f$var$useSelectNativeOptionsContext] = $cc7e05a45900e73f$var$createSelectContext($cc7e05a45900e73f$var$SELECT_NAME);
var $cc7e05a45900e73f$export$ef9b1a59e592288f = (props) => {
  const { __scopeSelect, children, open: openProp, defaultOpen, onOpenChange, value: valueProp, defaultValue, onValueChange, dir, name, autoComplete, disabled, required } = props;
  const popperScope = $cc7e05a45900e73f$var$usePopperScope(__scopeSelect);
  const [trigger, setTrigger] = (0, import_react3.useState)(null);
  const [valueNode, setValueNode] = (0, import_react3.useState)(null);
  const [valueNodeHasChildren, setValueNodeHasChildren] = (0, import_react3.useState)(false);
  const direction = $f631663db3294ace$export$b39126d51d94e6f3(dir);
  const [open = false, setOpen] = $71cd76cc60e0454e$export$6f32135080cb4c3({
    prop: openProp,
    defaultProp: defaultOpen,
    onChange: onOpenChange
  });
  const [value, setValue] = $71cd76cc60e0454e$export$6f32135080cb4c3({
    prop: valueProp,
    defaultProp: defaultValue,
    onChange: onValueChange
  });
  const triggerPointerDownPosRef = (0, import_react3.useRef)(null);
  const isFormControl = trigger ? Boolean(trigger.closest("form")) : true;
  const [nativeOptionsSet, setNativeOptionsSet] = (0, import_react3.useState)(/* @__PURE__ */ new Set());
  const nativeSelectKey = Array.from(nativeOptionsSet).map(
    (option) => option.props.value
  ).join(";");
  return /* @__PURE__ */ (0, import_react3.createElement)($cf1ac5d9fe0e8206$export$be92b6f5f03c0fe9, popperScope, /* @__PURE__ */ (0, import_react3.createElement)($cc7e05a45900e73f$var$SelectProvider, {
    required,
    scope: __scopeSelect,
    trigger,
    onTriggerChange: setTrigger,
    valueNode,
    onValueNodeChange: setValueNode,
    valueNodeHasChildren,
    onValueNodeHasChildrenChange: setValueNodeHasChildren,
    contentId: $1746a345f3d73bb7$export$f680877a34711e37(),
    value,
    onValueChange: setValue,
    open,
    onOpenChange: setOpen,
    dir: direction,
    triggerPointerDownPosRef,
    disabled
  }, /* @__PURE__ */ (0, import_react3.createElement)($cc7e05a45900e73f$var$Collection.Provider, {
    scope: __scopeSelect
  }, /* @__PURE__ */ (0, import_react3.createElement)($cc7e05a45900e73f$var$SelectNativeOptionsProvider, {
    scope: props.__scopeSelect,
    onNativeOptionAdd: (0, import_react3.useCallback)((option) => {
      setNativeOptionsSet(
        (prev) => new Set(prev).add(option)
      );
    }, []),
    onNativeOptionRemove: (0, import_react3.useCallback)((option) => {
      setNativeOptionsSet((prev) => {
        const optionsSet = new Set(prev);
        optionsSet.delete(option);
        return optionsSet;
      });
    }, [])
  }, children)), isFormControl ? /* @__PURE__ */ (0, import_react3.createElement)($cc7e05a45900e73f$var$BubbleSelect, {
    key: nativeSelectKey,
    "aria-hidden": true,
    required,
    tabIndex: -1,
    name,
    autoComplete,
    value,
    onChange: (event) => setValue(event.target.value),
    disabled
  }, value === void 0 ? /* @__PURE__ */ (0, import_react3.createElement)("option", {
    value: ""
  }) : null, Array.from(nativeOptionsSet)) : null));
};
var $cc7e05a45900e73f$var$TRIGGER_NAME = "SelectTrigger";
var $cc7e05a45900e73f$export$3ac1e88a1c0b9f1 = /* @__PURE__ */ (0, import_react3.forwardRef)((props, forwardedRef) => {
  const { __scopeSelect, disabled = false, ...triggerProps } = props;
  const popperScope = $cc7e05a45900e73f$var$usePopperScope(__scopeSelect);
  const context = $cc7e05a45900e73f$var$useSelectContext($cc7e05a45900e73f$var$TRIGGER_NAME, __scopeSelect);
  const isDisabled = context.disabled || disabled;
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, context.onTriggerChange);
  const getItems = $cc7e05a45900e73f$var$useCollection(__scopeSelect);
  const [searchRef, handleTypeaheadSearch, resetTypeahead] = $cc7e05a45900e73f$var$useTypeaheadSearch((search) => {
    const enabledItems = getItems().filter(
      (item) => !item.disabled
    );
    const currentItem = enabledItems.find(
      (item) => item.value === context.value
    );
    const nextItem = $cc7e05a45900e73f$var$findNextItem(enabledItems, search, currentItem);
    if (nextItem !== void 0)
      context.onValueChange(nextItem.value);
  });
  const handleOpen = () => {
    if (!isDisabled) {
      context.onOpenChange(true);
      resetTypeahead();
    }
  };
  return /* @__PURE__ */ (0, import_react3.createElement)($cf1ac5d9fe0e8206$export$b688253958b8dfe7, _extends({
    asChild: true
  }, popperScope), /* @__PURE__ */ (0, import_react3.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.button, _extends({
    type: "button",
    role: "combobox",
    "aria-controls": context.contentId,
    "aria-expanded": context.open,
    "aria-required": context.required,
    "aria-autocomplete": "none",
    dir: context.dir,
    "data-state": context.open ? "open" : "closed",
    disabled: isDisabled,
    "data-disabled": isDisabled ? "" : void 0,
    "data-placeholder": $cc7e05a45900e73f$var$shouldShowPlaceholder(context.value) ? "" : void 0
  }, triggerProps, {
    ref: composedRefs,
    onClick: $e42e1063c40fb3ef$export$b9ecd428b558ff10(triggerProps.onClick, (event) => {
      event.currentTarget.focus();
    }),
    onPointerDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(triggerProps.onPointerDown, (event) => {
      const target = event.target;
      if (target.hasPointerCapture(event.pointerId))
        target.releasePointerCapture(event.pointerId);
      if (event.button === 0 && event.ctrlKey === false) {
        handleOpen();
        context.triggerPointerDownPosRef.current = {
          x: Math.round(event.pageX),
          y: Math.round(event.pageY)
        };
        event.preventDefault();
      }
    }),
    onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(triggerProps.onKeyDown, (event) => {
      const isTypingAhead = searchRef.current !== "";
      const isModifierKey = event.ctrlKey || event.altKey || event.metaKey;
      if (!isModifierKey && event.key.length === 1)
        handleTypeaheadSearch(event.key);
      if (isTypingAhead && event.key === " ")
        return;
      if ($cc7e05a45900e73f$var$OPEN_KEYS.includes(event.key)) {
        handleOpen();
        event.preventDefault();
      }
    })
  })));
});
var $cc7e05a45900e73f$var$VALUE_NAME = "SelectValue";
var $cc7e05a45900e73f$export$e288731fd71264f0 = /* @__PURE__ */ (0, import_react3.forwardRef)((props, forwardedRef) => {
  const { __scopeSelect, className, style, children, placeholder = "", ...valueProps } = props;
  const context = $cc7e05a45900e73f$var$useSelectContext($cc7e05a45900e73f$var$VALUE_NAME, __scopeSelect);
  const { onValueNodeHasChildrenChange } = context;
  const hasChildren = children !== void 0;
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, context.onValueNodeChange);
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    onValueNodeHasChildrenChange(hasChildren);
  }, [
    onValueNodeHasChildrenChange,
    hasChildren
  ]);
  return /* @__PURE__ */ (0, import_react3.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.span, _extends({}, valueProps, {
    ref: composedRefs,
    style: {
      pointerEvents: "none"
    }
  }), $cc7e05a45900e73f$var$shouldShowPlaceholder(context.value) ? /* @__PURE__ */ (0, import_react3.createElement)(import_react3.Fragment, null, placeholder) : children);
});
var $cc7e05a45900e73f$export$99b400cabb58c515 = /* @__PURE__ */ (0, import_react3.forwardRef)((props, forwardedRef) => {
  const { __scopeSelect, children, ...iconProps } = props;
  return /* @__PURE__ */ (0, import_react3.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.span, _extends({
    "aria-hidden": true
  }, iconProps, {
    ref: forwardedRef
  }), children || "\u25BC");
});
var $cc7e05a45900e73f$export$b2af6c9944296213 = (props) => {
  return /* @__PURE__ */ (0, import_react3.createElement)($f1701beae083dbae$export$602eac185826482c, _extends({
    asChild: true
  }, props));
};
var $cc7e05a45900e73f$var$CONTENT_NAME = "SelectContent";
var $cc7e05a45900e73f$export$c973a4b3cb86a03d = /* @__PURE__ */ (0, import_react3.forwardRef)((props, forwardedRef) => {
  const context = $cc7e05a45900e73f$var$useSelectContext($cc7e05a45900e73f$var$CONTENT_NAME, props.__scopeSelect);
  const [fragment, setFragment] = (0, import_react3.useState)();
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    setFragment(new DocumentFragment());
  }, []);
  if (!context.open) {
    const frag = fragment;
    return frag ? /* @__PURE__ */ (0, import_react_dom.createPortal)(/* @__PURE__ */ (0, import_react3.createElement)($cc7e05a45900e73f$var$SelectContentProvider, {
      scope: props.__scopeSelect
    }, /* @__PURE__ */ (0, import_react3.createElement)($cc7e05a45900e73f$var$Collection.Slot, {
      scope: props.__scopeSelect
    }, /* @__PURE__ */ (0, import_react3.createElement)("div", null, props.children))), frag) : null;
  }
  return /* @__PURE__ */ (0, import_react3.createElement)($cc7e05a45900e73f$var$SelectContentImpl, _extends({}, props, {
    ref: forwardedRef
  }));
});
var $cc7e05a45900e73f$var$CONTENT_MARGIN = 10;
var [$cc7e05a45900e73f$var$SelectContentProvider, $cc7e05a45900e73f$var$useSelectContentContext] = $cc7e05a45900e73f$var$createSelectContext($cc7e05a45900e73f$var$CONTENT_NAME);
var $cc7e05a45900e73f$var$SelectContentImpl = /* @__PURE__ */ (0, import_react3.forwardRef)((props, forwardedRef) => {
  const {
    __scopeSelect,
    position = "item-aligned",
    onCloseAutoFocus,
    onEscapeKeyDown,
    onPointerDownOutside,
    side,
    sideOffset,
    align,
    alignOffset,
    arrowPadding,
    collisionBoundary,
    collisionPadding,
    sticky,
    hideWhenDetached,
    avoidCollisions,
    //
    ...contentProps
  } = props;
  const context = $cc7e05a45900e73f$var$useSelectContext($cc7e05a45900e73f$var$CONTENT_NAME, __scopeSelect);
  const [content, setContent] = (0, import_react3.useState)(null);
  const [viewport, setViewport] = (0, import_react3.useState)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
    forwardedRef,
    (node) => setContent(node)
  );
  const [selectedItem, setSelectedItem] = (0, import_react3.useState)(null);
  const [selectedItemText, setSelectedItemText] = (0, import_react3.useState)(null);
  const getItems = $cc7e05a45900e73f$var$useCollection(__scopeSelect);
  const [isPositioned, setIsPositioned] = (0, import_react3.useState)(false);
  const firstValidItemFoundRef = (0, import_react3.useRef)(false);
  (0, import_react3.useEffect)(() => {
    if (content)
      return hideOthers(content);
  }, [
    content
  ]);
  $3db38b7d1fb3fe6a$export$b7ece24a22aeda8c();
  const focusFirst = (0, import_react3.useCallback)((candidates) => {
    const [firstItem, ...restItems] = getItems().map(
      (item) => item.ref.current
    );
    const [lastItem] = restItems.slice(-1);
    const PREVIOUSLY_FOCUSED_ELEMENT = document.activeElement;
    for (const candidate of candidates) {
      if (candidate === PREVIOUSLY_FOCUSED_ELEMENT)
        return;
      candidate === null || candidate === void 0 || candidate.scrollIntoView({
        block: "nearest"
      });
      if (candidate === firstItem && viewport)
        viewport.scrollTop = 0;
      if (candidate === lastItem && viewport)
        viewport.scrollTop = viewport.scrollHeight;
      candidate === null || candidate === void 0 || candidate.focus();
      if (document.activeElement !== PREVIOUSLY_FOCUSED_ELEMENT)
        return;
    }
  }, [
    getItems,
    viewport
  ]);
  const focusSelectedItem = (0, import_react3.useCallback)(
    () => focusFirst([
      selectedItem,
      content
    ]),
    [
      focusFirst,
      selectedItem,
      content
    ]
  );
  (0, import_react3.useEffect)(() => {
    if (isPositioned)
      focusSelectedItem();
  }, [
    isPositioned,
    focusSelectedItem
  ]);
  const { onOpenChange, triggerPointerDownPosRef } = context;
  (0, import_react3.useEffect)(() => {
    if (content) {
      let pointerMoveDelta = {
        x: 0,
        y: 0
      };
      const handlePointerMove = (event) => {
        var _triggerPointerDownPo, _triggerPointerDownPo2, _triggerPointerDownPo3, _triggerPointerDownPo4;
        pointerMoveDelta = {
          x: Math.abs(Math.round(event.pageX) - ((_triggerPointerDownPo = (_triggerPointerDownPo2 = triggerPointerDownPosRef.current) === null || _triggerPointerDownPo2 === void 0 ? void 0 : _triggerPointerDownPo2.x) !== null && _triggerPointerDownPo !== void 0 ? _triggerPointerDownPo : 0)),
          y: Math.abs(Math.round(event.pageY) - ((_triggerPointerDownPo3 = (_triggerPointerDownPo4 = triggerPointerDownPosRef.current) === null || _triggerPointerDownPo4 === void 0 ? void 0 : _triggerPointerDownPo4.y) !== null && _triggerPointerDownPo3 !== void 0 ? _triggerPointerDownPo3 : 0))
        };
      };
      const handlePointerUp = (event) => {
        if (pointerMoveDelta.x <= 10 && pointerMoveDelta.y <= 10)
          event.preventDefault();
        else if (!content.contains(event.target))
          onOpenChange(false);
        document.removeEventListener("pointermove", handlePointerMove);
        triggerPointerDownPosRef.current = null;
      };
      if (triggerPointerDownPosRef.current !== null) {
        document.addEventListener("pointermove", handlePointerMove);
        document.addEventListener("pointerup", handlePointerUp, {
          capture: true,
          once: true
        });
      }
      return () => {
        document.removeEventListener("pointermove", handlePointerMove);
        document.removeEventListener("pointerup", handlePointerUp, {
          capture: true
        });
      };
    }
  }, [
    content,
    onOpenChange,
    triggerPointerDownPosRef
  ]);
  (0, import_react3.useEffect)(() => {
    const close = () => onOpenChange(false);
    window.addEventListener("blur", close);
    window.addEventListener("resize", close);
    return () => {
      window.removeEventListener("blur", close);
      window.removeEventListener("resize", close);
    };
  }, [
    onOpenChange
  ]);
  const [searchRef, handleTypeaheadSearch] = $cc7e05a45900e73f$var$useTypeaheadSearch((search) => {
    const enabledItems = getItems().filter(
      (item) => !item.disabled
    );
    const currentItem = enabledItems.find(
      (item) => item.ref.current === document.activeElement
    );
    const nextItem = $cc7e05a45900e73f$var$findNextItem(enabledItems, search, currentItem);
    if (nextItem)
      setTimeout(
        () => nextItem.ref.current.focus()
      );
  });
  const itemRefCallback = (0, import_react3.useCallback)((node, value, disabled) => {
    const isFirstValidItem = !firstValidItemFoundRef.current && !disabled;
    const isSelectedItem = context.value !== void 0 && context.value === value;
    if (isSelectedItem || isFirstValidItem) {
      setSelectedItem(node);
      if (isFirstValidItem)
        firstValidItemFoundRef.current = true;
    }
  }, [
    context.value
  ]);
  const handleItemLeave = (0, import_react3.useCallback)(
    () => content === null || content === void 0 ? void 0 : content.focus(),
    [
      content
    ]
  );
  const itemTextRefCallback = (0, import_react3.useCallback)((node, value, disabled) => {
    const isFirstValidItem = !firstValidItemFoundRef.current && !disabled;
    const isSelectedItem = context.value !== void 0 && context.value === value;
    if (isSelectedItem || isFirstValidItem)
      setSelectedItemText(node);
  }, [
    context.value
  ]);
  const SelectPosition = position === "popper" ? $cc7e05a45900e73f$var$SelectPopperPosition : $cc7e05a45900e73f$var$SelectItemAlignedPosition;
  const popperContentProps = SelectPosition === $cc7e05a45900e73f$var$SelectPopperPosition ? {
    side,
    sideOffset,
    align,
    alignOffset,
    arrowPadding,
    collisionBoundary,
    collisionPadding,
    sticky,
    hideWhenDetached,
    avoidCollisions
  } : {};
  return /* @__PURE__ */ (0, import_react3.createElement)($cc7e05a45900e73f$var$SelectContentProvider, {
    scope: __scopeSelect,
    content,
    viewport,
    onViewportChange: setViewport,
    itemRefCallback,
    selectedItem,
    onItemLeave: handleItemLeave,
    itemTextRefCallback,
    focusSelectedItem,
    selectedItemText,
    position,
    isPositioned,
    searchRef
  }, /* @__PURE__ */ (0, import_react3.createElement)(Combination_default, {
    as: $5e63c961fc1ce211$export$8c6ed5c666ac1360,
    allowPinchZoom: true
  }, /* @__PURE__ */ (0, import_react3.createElement)($d3863c46a17e8a28$export$20e40289641fbbb6, {
    asChild: true,
    trapped: context.open,
    onMountAutoFocus: (event) => {
      event.preventDefault();
    },
    onUnmountAutoFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(onCloseAutoFocus, (event) => {
      var _context$trigger;
      (_context$trigger = context.trigger) === null || _context$trigger === void 0 || _context$trigger.focus({
        preventScroll: true
      });
      event.preventDefault();
    })
  }, /* @__PURE__ */ (0, import_react3.createElement)($5cb92bef7577960e$export$177fb62ff3ec1f22, {
    asChild: true,
    disableOutsidePointerEvents: true,
    onEscapeKeyDown,
    onPointerDownOutside,
    onFocusOutside: (event) => event.preventDefault(),
    onDismiss: () => context.onOpenChange(false)
  }, /* @__PURE__ */ (0, import_react3.createElement)(SelectPosition, _extends({
    role: "listbox",
    id: context.contentId,
    "data-state": context.open ? "open" : "closed",
    dir: context.dir,
    onContextMenu: (event) => event.preventDefault()
  }, contentProps, popperContentProps, {
    onPlaced: () => setIsPositioned(true),
    ref: composedRefs,
    style: {
      // flex layout so we can place the scroll buttons properly
      display: "flex",
      flexDirection: "column",
      // reset the outline by default as the content MAY get focused
      outline: "none",
      ...contentProps.style
    },
    onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(contentProps.onKeyDown, (event) => {
      const isModifierKey = event.ctrlKey || event.altKey || event.metaKey;
      if (event.key === "Tab")
        event.preventDefault();
      if (!isModifierKey && event.key.length === 1)
        handleTypeaheadSearch(event.key);
      if ([
        "ArrowUp",
        "ArrowDown",
        "Home",
        "End"
      ].includes(event.key)) {
        const items = getItems().filter(
          (item) => !item.disabled
        );
        let candidateNodes = items.map(
          (item) => item.ref.current
        );
        if ([
          "ArrowUp",
          "End"
        ].includes(event.key))
          candidateNodes = candidateNodes.slice().reverse();
        if ([
          "ArrowUp",
          "ArrowDown"
        ].includes(event.key)) {
          const currentElement = event.target;
          const currentIndex = candidateNodes.indexOf(currentElement);
          candidateNodes = candidateNodes.slice(currentIndex + 1);
        }
        setTimeout(
          () => focusFirst(candidateNodes)
        );
        event.preventDefault();
      }
    })
  }))))));
});
var $cc7e05a45900e73f$var$SelectItemAlignedPosition = /* @__PURE__ */ (0, import_react3.forwardRef)((props, forwardedRef) => {
  const { __scopeSelect, onPlaced, ...popperProps } = props;
  const context = $cc7e05a45900e73f$var$useSelectContext($cc7e05a45900e73f$var$CONTENT_NAME, __scopeSelect);
  const contentContext = $cc7e05a45900e73f$var$useSelectContentContext($cc7e05a45900e73f$var$CONTENT_NAME, __scopeSelect);
  const [contentWrapper, setContentWrapper] = (0, import_react3.useState)(null);
  const [content, setContent] = (0, import_react3.useState)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
    forwardedRef,
    (node) => setContent(node)
  );
  const getItems = $cc7e05a45900e73f$var$useCollection(__scopeSelect);
  const shouldExpandOnScrollRef = (0, import_react3.useRef)(false);
  const shouldRepositionRef = (0, import_react3.useRef)(true);
  const { viewport, selectedItem, selectedItemText, focusSelectedItem } = contentContext;
  const position = (0, import_react3.useCallback)(() => {
    if (context.trigger && context.valueNode && contentWrapper && content && viewport && selectedItem && selectedItemText) {
      const triggerRect = context.trigger.getBoundingClientRect();
      const contentRect = content.getBoundingClientRect();
      const valueNodeRect = context.valueNode.getBoundingClientRect();
      const itemTextRect = selectedItemText.getBoundingClientRect();
      if (context.dir !== "rtl") {
        const itemTextOffset = itemTextRect.left - contentRect.left;
        const left = valueNodeRect.left - itemTextOffset;
        const leftDelta = triggerRect.left - left;
        const minContentWidth = triggerRect.width + leftDelta;
        const contentWidth = Math.max(minContentWidth, contentRect.width);
        const rightEdge = window.innerWidth - $cc7e05a45900e73f$var$CONTENT_MARGIN;
        const clampedLeft = $ae6933e535247d3d$export$7d15b64cf5a3a4c4(left, [
          $cc7e05a45900e73f$var$CONTENT_MARGIN,
          rightEdge - contentWidth
        ]);
        contentWrapper.style.minWidth = minContentWidth + "px";
        contentWrapper.style.left = clampedLeft + "px";
      } else {
        const itemTextOffset = contentRect.right - itemTextRect.right;
        const right = window.innerWidth - valueNodeRect.right - itemTextOffset;
        const rightDelta = window.innerWidth - triggerRect.right - right;
        const minContentWidth = triggerRect.width + rightDelta;
        const contentWidth = Math.max(minContentWidth, contentRect.width);
        const leftEdge = window.innerWidth - $cc7e05a45900e73f$var$CONTENT_MARGIN;
        const clampedRight = $ae6933e535247d3d$export$7d15b64cf5a3a4c4(right, [
          $cc7e05a45900e73f$var$CONTENT_MARGIN,
          leftEdge - contentWidth
        ]);
        contentWrapper.style.minWidth = minContentWidth + "px";
        contentWrapper.style.right = clampedRight + "px";
      }
      const items = getItems();
      const availableHeight = window.innerHeight - $cc7e05a45900e73f$var$CONTENT_MARGIN * 2;
      const itemsHeight = viewport.scrollHeight;
      const contentStyles = window.getComputedStyle(content);
      const contentBorderTopWidth = parseInt(contentStyles.borderTopWidth, 10);
      const contentPaddingTop = parseInt(contentStyles.paddingTop, 10);
      const contentBorderBottomWidth = parseInt(contentStyles.borderBottomWidth, 10);
      const contentPaddingBottom = parseInt(contentStyles.paddingBottom, 10);
      const fullContentHeight = contentBorderTopWidth + contentPaddingTop + itemsHeight + contentPaddingBottom + contentBorderBottomWidth;
      const minContentHeight = Math.min(selectedItem.offsetHeight * 5, fullContentHeight);
      const viewportStyles = window.getComputedStyle(viewport);
      const viewportPaddingTop = parseInt(viewportStyles.paddingTop, 10);
      const viewportPaddingBottom = parseInt(viewportStyles.paddingBottom, 10);
      const topEdgeToTriggerMiddle = triggerRect.top + triggerRect.height / 2 - $cc7e05a45900e73f$var$CONTENT_MARGIN;
      const triggerMiddleToBottomEdge = availableHeight - topEdgeToTriggerMiddle;
      const selectedItemHalfHeight = selectedItem.offsetHeight / 2;
      const itemOffsetMiddle = selectedItem.offsetTop + selectedItemHalfHeight;
      const contentTopToItemMiddle = contentBorderTopWidth + contentPaddingTop + itemOffsetMiddle;
      const itemMiddleToContentBottom = fullContentHeight - contentTopToItemMiddle;
      const willAlignWithoutTopOverflow = contentTopToItemMiddle <= topEdgeToTriggerMiddle;
      if (willAlignWithoutTopOverflow) {
        const isLastItem = selectedItem === items[items.length - 1].ref.current;
        contentWrapper.style.bottom = "0px";
        const viewportOffsetBottom = content.clientHeight - viewport.offsetTop - viewport.offsetHeight;
        const clampedTriggerMiddleToBottomEdge = Math.max(triggerMiddleToBottomEdge, selectedItemHalfHeight + (isLastItem ? viewportPaddingBottom : 0) + viewportOffsetBottom + contentBorderBottomWidth);
        const height = contentTopToItemMiddle + clampedTriggerMiddleToBottomEdge;
        contentWrapper.style.height = height + "px";
      } else {
        const isFirstItem = selectedItem === items[0].ref.current;
        contentWrapper.style.top = "0px";
        const clampedTopEdgeToTriggerMiddle = Math.max(topEdgeToTriggerMiddle, contentBorderTopWidth + viewport.offsetTop + (isFirstItem ? viewportPaddingTop : 0) + selectedItemHalfHeight);
        const height = clampedTopEdgeToTriggerMiddle + itemMiddleToContentBottom;
        contentWrapper.style.height = height + "px";
        viewport.scrollTop = contentTopToItemMiddle - topEdgeToTriggerMiddle + viewport.offsetTop;
      }
      contentWrapper.style.margin = `${$cc7e05a45900e73f$var$CONTENT_MARGIN}px 0`;
      contentWrapper.style.minHeight = minContentHeight + "px";
      contentWrapper.style.maxHeight = availableHeight + "px";
      onPlaced === null || onPlaced === void 0 || onPlaced();
      requestAnimationFrame(
        () => shouldExpandOnScrollRef.current = true
      );
    }
  }, [
    getItems,
    context.trigger,
    context.valueNode,
    contentWrapper,
    content,
    viewport,
    selectedItem,
    selectedItemText,
    context.dir,
    onPlaced
  ]);
  $9f79659886946c16$export$e5c5a5f917a5871c(
    () => position(),
    [
      position
    ]
  );
  const [contentZIndex, setContentZIndex] = (0, import_react3.useState)();
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    if (content)
      setContentZIndex(window.getComputedStyle(content).zIndex);
  }, [
    content
  ]);
  const handleScrollButtonChange = (0, import_react3.useCallback)((node) => {
    if (node && shouldRepositionRef.current === true) {
      position();
      focusSelectedItem === null || focusSelectedItem === void 0 || focusSelectedItem();
      shouldRepositionRef.current = false;
    }
  }, [
    position,
    focusSelectedItem
  ]);
  return /* @__PURE__ */ (0, import_react3.createElement)($cc7e05a45900e73f$var$SelectViewportProvider, {
    scope: __scopeSelect,
    contentWrapper,
    shouldExpandOnScrollRef,
    onScrollButtonChange: handleScrollButtonChange
  }, /* @__PURE__ */ (0, import_react3.createElement)("div", {
    ref: setContentWrapper,
    style: {
      display: "flex",
      flexDirection: "column",
      position: "fixed",
      zIndex: contentZIndex
    }
  }, /* @__PURE__ */ (0, import_react3.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({}, popperProps, {
    ref: composedRefs,
    style: {
      // When we get the height of the content, it includes borders. If we were to set
      // the height without having `boxSizing: 'border-box'` it would be too big.
      boxSizing: "border-box",
      // We need to ensure the content doesn't get taller than the wrapper
      maxHeight: "100%",
      ...popperProps.style
    }
  }))));
});
var $cc7e05a45900e73f$var$SelectPopperPosition = /* @__PURE__ */ (0, import_react3.forwardRef)((props, forwardedRef) => {
  const { __scopeSelect, align = "start", collisionPadding = $cc7e05a45900e73f$var$CONTENT_MARGIN, ...popperProps } = props;
  const popperScope = $cc7e05a45900e73f$var$usePopperScope(__scopeSelect);
  return /* @__PURE__ */ (0, import_react3.createElement)($cf1ac5d9fe0e8206$export$7c6e2c02157bb7d2, _extends({}, popperScope, popperProps, {
    ref: forwardedRef,
    align,
    collisionPadding,
    style: {
      // Ensure border-box for floating-ui calculations
      boxSizing: "border-box",
      ...popperProps.style,
      "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-select-content-available-width": "var(--radix-popper-available-width)",
      "--radix-select-content-available-height": "var(--radix-popper-available-height)",
      "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }));
});
var [$cc7e05a45900e73f$var$SelectViewportProvider, $cc7e05a45900e73f$var$useSelectViewportContext] = $cc7e05a45900e73f$var$createSelectContext($cc7e05a45900e73f$var$CONTENT_NAME, {});
var $cc7e05a45900e73f$var$VIEWPORT_NAME = "SelectViewport";
var $cc7e05a45900e73f$export$9ed6e7b40248d36d = /* @__PURE__ */ (0, import_react3.forwardRef)((props, forwardedRef) => {
  const { __scopeSelect, ...viewportProps } = props;
  const contentContext = $cc7e05a45900e73f$var$useSelectContentContext($cc7e05a45900e73f$var$VIEWPORT_NAME, __scopeSelect);
  const viewportContext = $cc7e05a45900e73f$var$useSelectViewportContext($cc7e05a45900e73f$var$VIEWPORT_NAME, __scopeSelect);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, contentContext.onViewportChange);
  const prevScrollTopRef = (0, import_react3.useRef)(0);
  return /* @__PURE__ */ (0, import_react3.createElement)(import_react3.Fragment, null, /* @__PURE__ */ (0, import_react3.createElement)("style", {
    dangerouslySetInnerHTML: {
      __html: `[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}`
    }
  }), /* @__PURE__ */ (0, import_react3.createElement)($cc7e05a45900e73f$var$Collection.Slot, {
    scope: __scopeSelect
  }, /* @__PURE__ */ (0, import_react3.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    "data-radix-select-viewport": "",
    role: "presentation"
  }, viewportProps, {
    ref: composedRefs,
    style: {
      // we use position: 'relative' here on the `viewport` so that when we call
      // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
      // (independent of the scrollUpButton).
      position: "relative",
      flex: 1,
      overflow: "auto",
      ...viewportProps.style
    },
    onScroll: $e42e1063c40fb3ef$export$b9ecd428b558ff10(viewportProps.onScroll, (event) => {
      const viewport = event.currentTarget;
      const { contentWrapper, shouldExpandOnScrollRef } = viewportContext;
      if (shouldExpandOnScrollRef !== null && shouldExpandOnScrollRef !== void 0 && shouldExpandOnScrollRef.current && contentWrapper) {
        const scrolledBy = Math.abs(prevScrollTopRef.current - viewport.scrollTop);
        if (scrolledBy > 0) {
          const availableHeight = window.innerHeight - $cc7e05a45900e73f$var$CONTENT_MARGIN * 2;
          const cssMinHeight = parseFloat(contentWrapper.style.minHeight);
          const cssHeight = parseFloat(contentWrapper.style.height);
          const prevHeight = Math.max(cssMinHeight, cssHeight);
          if (prevHeight < availableHeight) {
            const nextHeight = prevHeight + scrolledBy;
            const clampedNextHeight = Math.min(availableHeight, nextHeight);
            const heightDiff = nextHeight - clampedNextHeight;
            contentWrapper.style.height = clampedNextHeight + "px";
            if (contentWrapper.style.bottom === "0px") {
              viewport.scrollTop = heightDiff > 0 ? heightDiff : 0;
              contentWrapper.style.justifyContent = "flex-end";
            }
          }
        }
      }
      prevScrollTopRef.current = viewport.scrollTop;
    })
  }))));
});
var $cc7e05a45900e73f$var$GROUP_NAME = "SelectGroup";
var [$cc7e05a45900e73f$var$SelectGroupContextProvider, $cc7e05a45900e73f$var$useSelectGroupContext] = $cc7e05a45900e73f$var$createSelectContext($cc7e05a45900e73f$var$GROUP_NAME);
var $cc7e05a45900e73f$export$ee25a334c55de1f4 = /* @__PURE__ */ (0, import_react3.forwardRef)((props, forwardedRef) => {
  const { __scopeSelect, ...groupProps } = props;
  const groupId = $1746a345f3d73bb7$export$f680877a34711e37();
  return /* @__PURE__ */ (0, import_react3.createElement)($cc7e05a45900e73f$var$SelectGroupContextProvider, {
    scope: __scopeSelect,
    id: groupId
  }, /* @__PURE__ */ (0, import_react3.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    role: "group",
    "aria-labelledby": groupId
  }, groupProps, {
    ref: forwardedRef
  })));
});
var $cc7e05a45900e73f$var$LABEL_NAME = "SelectLabel";
var $cc7e05a45900e73f$export$f67338d29bd972f8 = /* @__PURE__ */ (0, import_react3.forwardRef)((props, forwardedRef) => {
  const { __scopeSelect, ...labelProps } = props;
  const groupContext = $cc7e05a45900e73f$var$useSelectGroupContext($cc7e05a45900e73f$var$LABEL_NAME, __scopeSelect);
  return /* @__PURE__ */ (0, import_react3.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    id: groupContext.id
  }, labelProps, {
    ref: forwardedRef
  }));
});
var $cc7e05a45900e73f$var$ITEM_NAME = "SelectItem";
var [$cc7e05a45900e73f$var$SelectItemContextProvider, $cc7e05a45900e73f$var$useSelectItemContext] = $cc7e05a45900e73f$var$createSelectContext($cc7e05a45900e73f$var$ITEM_NAME);
var $cc7e05a45900e73f$export$13ef48a934230896 = /* @__PURE__ */ (0, import_react3.forwardRef)((props, forwardedRef) => {
  const { __scopeSelect, value, disabled = false, textValue: textValueProp, ...itemProps } = props;
  const context = $cc7e05a45900e73f$var$useSelectContext($cc7e05a45900e73f$var$ITEM_NAME, __scopeSelect);
  const contentContext = $cc7e05a45900e73f$var$useSelectContentContext($cc7e05a45900e73f$var$ITEM_NAME, __scopeSelect);
  const isSelected = context.value === value;
  const [textValue, setTextValue] = (0, import_react3.useState)(textValueProp !== null && textValueProp !== void 0 ? textValueProp : "");
  const [isFocused, setIsFocused] = (0, import_react3.useState)(false);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, (node) => {
    var _contentContext$itemR;
    return (_contentContext$itemR = contentContext.itemRefCallback) === null || _contentContext$itemR === void 0 ? void 0 : _contentContext$itemR.call(contentContext, node, value, disabled);
  });
  const textId = $1746a345f3d73bb7$export$f680877a34711e37();
  const handleSelect = () => {
    if (!disabled) {
      context.onValueChange(value);
      context.onOpenChange(false);
    }
  };
  if (value === "")
    throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
  return /* @__PURE__ */ (0, import_react3.createElement)($cc7e05a45900e73f$var$SelectItemContextProvider, {
    scope: __scopeSelect,
    value,
    disabled,
    textId,
    isSelected,
    onItemTextChange: (0, import_react3.useCallback)((node) => {
      setTextValue((prevTextValue) => {
        var _node$textContent;
        return prevTextValue || ((_node$textContent = node === null || node === void 0 ? void 0 : node.textContent) !== null && _node$textContent !== void 0 ? _node$textContent : "").trim();
      });
    }, [])
  }, /* @__PURE__ */ (0, import_react3.createElement)($cc7e05a45900e73f$var$Collection.ItemSlot, {
    scope: __scopeSelect,
    value,
    disabled,
    textValue
  }, /* @__PURE__ */ (0, import_react3.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    role: "option",
    "aria-labelledby": textId,
    "data-highlighted": isFocused ? "" : void 0,
    "aria-selected": isSelected && isFocused,
    "data-state": isSelected ? "checked" : "unchecked",
    "aria-disabled": disabled || void 0,
    "data-disabled": disabled ? "" : void 0,
    tabIndex: disabled ? void 0 : -1
  }, itemProps, {
    ref: composedRefs,
    onFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
      itemProps.onFocus,
      () => setIsFocused(true)
    ),
    onBlur: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
      itemProps.onBlur,
      () => setIsFocused(false)
    ),
    onPointerUp: $e42e1063c40fb3ef$export$b9ecd428b558ff10(itemProps.onPointerUp, handleSelect),
    onPointerMove: $e42e1063c40fb3ef$export$b9ecd428b558ff10(itemProps.onPointerMove, (event) => {
      if (disabled) {
        var _contentContext$onIte;
        (_contentContext$onIte = contentContext.onItemLeave) === null || _contentContext$onIte === void 0 || _contentContext$onIte.call(contentContext);
      } else
        event.currentTarget.focus({
          preventScroll: true
        });
    }),
    onPointerLeave: $e42e1063c40fb3ef$export$b9ecd428b558ff10(itemProps.onPointerLeave, (event) => {
      if (event.currentTarget === document.activeElement) {
        var _contentContext$onIte2;
        (_contentContext$onIte2 = contentContext.onItemLeave) === null || _contentContext$onIte2 === void 0 || _contentContext$onIte2.call(contentContext);
      }
    }),
    onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(itemProps.onKeyDown, (event) => {
      var _contentContext$searc;
      const isTypingAhead = ((_contentContext$searc = contentContext.searchRef) === null || _contentContext$searc === void 0 ? void 0 : _contentContext$searc.current) !== "";
      if (isTypingAhead && event.key === " ")
        return;
      if ($cc7e05a45900e73f$var$SELECTION_KEYS.includes(event.key))
        handleSelect();
      if (event.key === " ")
        event.preventDefault();
    })
  }))));
});
var $cc7e05a45900e73f$var$ITEM_TEXT_NAME = "SelectItemText";
var $cc7e05a45900e73f$export$3572fb0fb821ff49 = /* @__PURE__ */ (0, import_react3.forwardRef)((props, forwardedRef) => {
  const { __scopeSelect, className, style, ...itemTextProps } = props;
  const context = $cc7e05a45900e73f$var$useSelectContext($cc7e05a45900e73f$var$ITEM_TEXT_NAME, __scopeSelect);
  const contentContext = $cc7e05a45900e73f$var$useSelectContentContext($cc7e05a45900e73f$var$ITEM_TEXT_NAME, __scopeSelect);
  const itemContext = $cc7e05a45900e73f$var$useSelectItemContext($cc7e05a45900e73f$var$ITEM_TEXT_NAME, __scopeSelect);
  const nativeOptionsContext = $cc7e05a45900e73f$var$useSelectNativeOptionsContext($cc7e05a45900e73f$var$ITEM_TEXT_NAME, __scopeSelect);
  const [itemTextNode, setItemTextNode] = (0, import_react3.useState)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
    forwardedRef,
    (node) => setItemTextNode(node),
    itemContext.onItemTextChange,
    (node) => {
      var _contentContext$itemT;
      return (_contentContext$itemT = contentContext.itemTextRefCallback) === null || _contentContext$itemT === void 0 ? void 0 : _contentContext$itemT.call(contentContext, node, itemContext.value, itemContext.disabled);
    }
  );
  const textContent = itemTextNode === null || itemTextNode === void 0 ? void 0 : itemTextNode.textContent;
  const nativeOption = (0, import_react3.useMemo)(
    () => /* @__PURE__ */ (0, import_react3.createElement)("option", {
      key: itemContext.value,
      value: itemContext.value,
      disabled: itemContext.disabled
    }, textContent),
    [
      itemContext.disabled,
      itemContext.value,
      textContent
    ]
  );
  const { onNativeOptionAdd, onNativeOptionRemove } = nativeOptionsContext;
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    onNativeOptionAdd(nativeOption);
    return () => onNativeOptionRemove(nativeOption);
  }, [
    onNativeOptionAdd,
    onNativeOptionRemove,
    nativeOption
  ]);
  return /* @__PURE__ */ (0, import_react3.createElement)(import_react3.Fragment, null, /* @__PURE__ */ (0, import_react3.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.span, _extends({
    id: itemContext.textId
  }, itemTextProps, {
    ref: composedRefs
  })), itemContext.isSelected && context.valueNode && !context.valueNodeHasChildren ? /* @__PURE__ */ (0, import_react_dom.createPortal)(itemTextProps.children, context.valueNode) : null);
});
var $cc7e05a45900e73f$var$ITEM_INDICATOR_NAME = "SelectItemIndicator";
var $cc7e05a45900e73f$export$6b9198de19accfe6 = /* @__PURE__ */ (0, import_react3.forwardRef)((props, forwardedRef) => {
  const { __scopeSelect, ...itemIndicatorProps } = props;
  const itemContext = $cc7e05a45900e73f$var$useSelectItemContext($cc7e05a45900e73f$var$ITEM_INDICATOR_NAME, __scopeSelect);
  return itemContext.isSelected ? /* @__PURE__ */ (0, import_react3.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.span, _extends({
    "aria-hidden": true
  }, itemIndicatorProps, {
    ref: forwardedRef
  })) : null;
});
var $cc7e05a45900e73f$export$eba4b1df07cb1d3 = /* @__PURE__ */ (0, import_react3.forwardRef)((props, forwardedRef) => {
  const { __scopeSelect, ...separatorProps } = props;
  return /* @__PURE__ */ (0, import_react3.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    "aria-hidden": true
  }, separatorProps, {
    ref: forwardedRef
  }));
});
function $cc7e05a45900e73f$var$shouldShowPlaceholder(value) {
  return value === "" || value === void 0;
}
var $cc7e05a45900e73f$var$BubbleSelect = /* @__PURE__ */ (0, import_react3.forwardRef)((props, forwardedRef) => {
  const { value, ...selectProps } = props;
  const ref = (0, import_react3.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref);
  const prevValue = $010c2913dbd2fe3d$export$5cae361ad82dce8b(value);
  (0, import_react3.useEffect)(() => {
    const select = ref.current;
    const selectProto = window.HTMLSelectElement.prototype;
    const descriptor = Object.getOwnPropertyDescriptor(selectProto, "value");
    const setValue = descriptor.set;
    if (prevValue !== value && setValue) {
      const event = new Event("change", {
        bubbles: true
      });
      setValue.call(select, value);
      select.dispatchEvent(event);
    }
  }, [
    prevValue,
    value
  ]);
  return /* @__PURE__ */ (0, import_react3.createElement)($ea1ef594cf570d83$export$439d29a4e110a164, {
    asChild: true
  }, /* @__PURE__ */ (0, import_react3.createElement)("select", _extends({}, selectProps, {
    ref: composedRefs,
    defaultValue: value
  })));
});
$cc7e05a45900e73f$var$BubbleSelect.displayName = "BubbleSelect";
function $cc7e05a45900e73f$var$useTypeaheadSearch(onSearchChange) {
  const handleSearchChange = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onSearchChange);
  const searchRef = (0, import_react3.useRef)("");
  const timerRef = (0, import_react3.useRef)(0);
  const handleTypeaheadSearch = (0, import_react3.useCallback)((key) => {
    const search = searchRef.current + key;
    handleSearchChange(search);
    (function updateSearch(value) {
      searchRef.current = value;
      window.clearTimeout(timerRef.current);
      if (value !== "")
        timerRef.current = window.setTimeout(
          () => updateSearch(""),
          1e3
        );
    })(search);
  }, [
    handleSearchChange
  ]);
  const resetTypeahead = (0, import_react3.useCallback)(() => {
    searchRef.current = "";
    window.clearTimeout(timerRef.current);
  }, []);
  (0, import_react3.useEffect)(() => {
    return () => window.clearTimeout(timerRef.current);
  }, []);
  return [
    searchRef,
    handleTypeaheadSearch,
    resetTypeahead
  ];
}
function $cc7e05a45900e73f$var$findNextItem(items, search, currentItem) {
  const isRepeated = search.length > 1 && Array.from(search).every(
    (char) => char === search[0]
  );
  const normalizedSearch = isRepeated ? search[0] : search;
  const currentItemIndex = currentItem ? items.indexOf(currentItem) : -1;
  let wrappedItems = $cc7e05a45900e73f$var$wrapArray(items, Math.max(currentItemIndex, 0));
  const excludeCurrentItem = normalizedSearch.length === 1;
  if (excludeCurrentItem)
    wrappedItems = wrappedItems.filter(
      (v) => v !== currentItem
    );
  const nextItem = wrappedItems.find(
    (item) => item.textValue.toLowerCase().startsWith(normalizedSearch.toLowerCase())
  );
  return nextItem !== currentItem ? nextItem : void 0;
}
function $cc7e05a45900e73f$var$wrapArray(array, startIndex) {
  return array.map(
    (_, index) => array[(startIndex + index) % array.length]
  );
}
var $cc7e05a45900e73f$export$be92b6f5f03c0fe9 = $cc7e05a45900e73f$export$ef9b1a59e592288f;
var $cc7e05a45900e73f$export$41fb9f06171c75f4 = $cc7e05a45900e73f$export$3ac1e88a1c0b9f1;
var $cc7e05a45900e73f$export$4c8d1a57a761ef94 = $cc7e05a45900e73f$export$e288731fd71264f0;
var $cc7e05a45900e73f$export$f04a61298a47a40f = $cc7e05a45900e73f$export$99b400cabb58c515;
var $cc7e05a45900e73f$export$602eac185826482c = $cc7e05a45900e73f$export$b2af6c9944296213;
var $cc7e05a45900e73f$export$7c6e2c02157bb7d2 = $cc7e05a45900e73f$export$c973a4b3cb86a03d;
var $cc7e05a45900e73f$export$d5c6c08dc2d3ca7 = $cc7e05a45900e73f$export$9ed6e7b40248d36d;
var $cc7e05a45900e73f$export$eb2fcfdbd7ba97d4 = $cc7e05a45900e73f$export$ee25a334c55de1f4;
var $cc7e05a45900e73f$export$b04be29aa201d4f5 = $cc7e05a45900e73f$export$f67338d29bd972f8;
var $cc7e05a45900e73f$export$6d08773d2e66f8f2 = $cc7e05a45900e73f$export$13ef48a934230896;
var $cc7e05a45900e73f$export$d6e5bf9c43ea9319 = $cc7e05a45900e73f$export$3572fb0fb821ff49;
var $cc7e05a45900e73f$export$c3468e2714d175fa = $cc7e05a45900e73f$export$6b9198de19accfe6;
var $cc7e05a45900e73f$export$1ff3c3f08ae963c0 = $cc7e05a45900e73f$export$eba4b1df07cb1d3;

// app/components/ui/select.tsx
var React = __toESM(require_react(), 1);
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ui/select.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ui/select.tsx"
  );
  import.meta.hot.lastModified = "1738409028324.369";
}
var Select = $cc7e05a45900e73f$export$be92b6f5f03c0fe9;
var SelectGroup = $cc7e05a45900e73f$export$eb2fcfdbd7ba97d4;
var SelectValue = $cc7e05a45900e73f$export$4c8d1a57a761ef94;
var SelectTrigger = React.forwardRef(_c3 = ({
  className,
  children,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)($cc7e05a45900e73f$export$41fb9f06171c75f4, { ref, className: cn("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground/30 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", className), ...props, children: [
  children,
  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)($cc7e05a45900e73f$export$f04a61298a47a40f, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(IconMatch, { icon: "caret-down", className: "size-4 opacity-50" }, void 0, false, {
    fileName: "app/components/ui/select.tsx",
    lineNumber: 35,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/ui/select.tsx",
    lineNumber: 34,
    columnNumber: 5
  }, this)
] }, void 0, true, {
  fileName: "app/components/ui/select.tsx",
  lineNumber: 32,
  columnNumber: 12
}, this));
_c22 = SelectTrigger;
SelectTrigger.displayName = $cc7e05a45900e73f$export$41fb9f06171c75f4.displayName;
var SelectContent = React.forwardRef(_c32 = ({
  className,
  children,
  position = "popper",
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)($cc7e05a45900e73f$export$602eac185826482c, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)($cc7e05a45900e73f$export$7c6e2c02157bb7d2, { ref, className: cn("relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className), position, ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)($cc7e05a45900e73f$export$d5c6c08dc2d3ca7, { className: cn("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"), children }, void 0, false, {
  fileName: "app/components/ui/select.tsx",
  lineNumber: 47,
  columnNumber: 7
}, this) }, void 0, false, {
  fileName: "app/components/ui/select.tsx",
  lineNumber: 46,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "app/components/ui/select.tsx",
  lineNumber: 45,
  columnNumber: 12
}, this));
_c4 = SelectContent;
SelectContent.displayName = $cc7e05a45900e73f$export$7c6e2c02157bb7d2.displayName;
var SelectLabel = React.forwardRef(_c5 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)($cc7e05a45900e73f$export$b04be29aa201d4f5, { ref, className: cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className), ...props }, void 0, false, {
  fileName: "app/components/ui/select.tsx",
  lineNumber: 57,
  columnNumber: 12
}, this));
_c6 = SelectLabel;
SelectLabel.displayName = $cc7e05a45900e73f$export$b04be29aa201d4f5.displayName;
var SelectItem = React.forwardRef(_c7 = ({
  className,
  children,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)($cc7e05a45900e73f$export$6d08773d2e66f8f2, { ref, className: cn("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className), ...props, children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)($cc7e05a45900e73f$export$c3468e2714d175fa, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(IconMatch, { icon: "check", className: "size-4" }, void 0, false, {
    fileName: "app/components/ui/select.tsx",
    lineNumber: 67,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/ui/select.tsx",
    lineNumber: 66,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/ui/select.tsx",
    lineNumber: 65,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)($cc7e05a45900e73f$export$d6e5bf9c43ea9319, { children }, void 0, false, {
    fileName: "app/components/ui/select.tsx",
    lineNumber: 71,
    columnNumber: 5
  }, this)
] }, void 0, true, {
  fileName: "app/components/ui/select.tsx",
  lineNumber: 64,
  columnNumber: 12
}, this));
_c8 = SelectItem;
SelectItem.displayName = $cc7e05a45900e73f$export$6d08773d2e66f8f2.displayName;
var SelectSeparator = React.forwardRef(_c9 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)($cc7e05a45900e73f$export$1ff3c3f08ae963c0, { ref, className: cn("-mx-1 my-1 h-px bg-muted", className), ...props }, void 0, false, {
  fileName: "app/components/ui/select.tsx",
  lineNumber: 78,
  columnNumber: 12
}, this));
_c10 = SelectSeparator;
SelectSeparator.displayName = $cc7e05a45900e73f$export$1ff3c3f08ae963c0.displayName;
var _c3;
var _c22;
var _c32;
var _c4;
var _c5;
var _c6;
var _c7;
var _c8;
var _c9;
var _c10;
$RefreshReg$(_c3, "SelectTrigger$React.forwardRef");
$RefreshReg$(_c22, "SelectTrigger");
$RefreshReg$(_c32, "SelectContent$React.forwardRef");
$RefreshReg$(_c4, "SelectContent");
$RefreshReg$(_c5, "SelectLabel$React.forwardRef");
$RefreshReg$(_c6, "SelectLabel");
$RefreshReg$(_c7, "SelectItem$React.forwardRef");
$RefreshReg$(_c8, "SelectItem");
$RefreshReg$(_c9, "SelectSeparator$React.forwardRef");
$RefreshReg$(_c10, "SelectSeparator");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/shared/form-update-status.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/shared/form-update-status.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/shared/form-update-status.tsx"
  );
  import.meta.hot.lastModified = "1738409028320.369";
}
function FormUpdateStatus({
  itemId = "itemId",
  action = "/user/items/update",
  intentValue = "update-item-status",
  dialogTitle = "Update Status",
  dialogDescription = "Update the status of this item",
  dialogAction = "Update",
  item,
  itemStatuses,
  className
}) {
  _s();
  const [open, setOpen] = (0, import_react5.useState)();
  const fetcher = useFetcher();
  const isLoading = fetcher.state !== "submitting" && fetcher.formMethod === "POST";
  if (!item)
    return null;
  const statusSymbol = fetcher.formData ? fetcher.formData.get("statusSymbol") : item.status.symbol;
  const hasItemStatuses = Array.isArray(itemStatuses);
  if (!hasItemStatuses)
    return null;
  const statusOptimistic = itemStatuses.find((status) => status.symbol === statusSymbol) || item.status;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(AlertDialog, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(AlertDialogTrigger, { className: cn("focus-ring rounded-full", className), children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(BadgePostStatus, { status: statusOptimistic, className: "cursor-pointer" }, void 0, false, {
      fileName: "app/components/shared/form-update-status.tsx",
      lineNumber: 52,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/shared/form-update-status.tsx",
      lineNumber: 51,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(AlertDialogContent, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(AlertDialogHeader, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(AlertDialogTitle, { children: dialogTitle }, void 0, false, {
          fileName: "app/components/shared/form-update-status.tsx",
          lineNumber: 57,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(AlertDialogDescription, { children: dialogDescription }, void 0, false, {
          fileName: "app/components/shared/form-update-status.tsx",
          lineNumber: 58,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/shared/form-update-status.tsx",
        lineNumber: 56,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(fetcher.Form, { method: "PATCH", action, onSubmit: (event) => {
        fetcher.submit(event.currentTarget.form, {
          method: "POST"
        });
        setOpen(false);
      }, className: "space-y-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("input", { type: "hidden", name: itemId, defaultValue: item.id }, void 0, false, {
            fileName: "app/components/shared/form-update-status.tsx",
            lineNumber: 68,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Select, { name: "statusSymbol", defaultValue: item.status.symbol, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(SelectTrigger, { className: "w-[180px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(SelectValue, { placeholder: "Select a status" }, void 0, false, {
              fileName: "app/components/shared/form-update-status.tsx",
              lineNumber: 72,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "app/components/shared/form-update-status.tsx",
              lineNumber: 71,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(SelectContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(SelectGroup, { children: itemStatuses.map((status) => {
              return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(SelectItem, { value: status.symbol, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "inline-flex items-center gap-2", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(IconPostStatus, { status }, void 0, false, {
                  fileName: "app/components/shared/form-update-status.tsx",
                  lineNumber: 79,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { children: status.name }, void 0, false, {
                  fileName: "app/components/shared/form-update-status.tsx",
                  lineNumber: 80,
                  columnNumber: 27
                }, this)
              ] }, void 0, true, {
                fileName: "app/components/shared/form-update-status.tsx",
                lineNumber: 78,
                columnNumber: 25
              }, this) }, status.id, false, {
                fileName: "app/components/shared/form-update-status.tsx",
                lineNumber: 77,
                columnNumber: 26
              }, this);
            }) }, void 0, false, {
              fileName: "app/components/shared/form-update-status.tsx",
              lineNumber: 75,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "app/components/shared/form-update-status.tsx",
              lineNumber: 74,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/shared/form-update-status.tsx",
            lineNumber: 70,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/shared/form-update-status.tsx",
          lineNumber: 67,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { className: "space-y-1", children: itemStatuses.map((status) => {
          return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "text-xs text-muted-foreground", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(IconPostStatus, { status }, void 0, false, {
              fileName: "app/components/shared/form-update-status.tsx",
              lineNumber: 94,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "font-semibold", children: [
              " ",
              status.name,
              ":"
            ] }, void 0, true, {
              fileName: "app/components/shared/form-update-status.tsx",
              lineNumber: 95,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { children: [
              " ",
              status.description
            ] }, void 0, true, {
              fileName: "app/components/shared/form-update-status.tsx",
              lineNumber: 96,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/shared/form-update-status.tsx",
            lineNumber: 93,
            columnNumber: 21
          }, this) }, status.id, false, {
            fileName: "app/components/shared/form-update-status.tsx",
            lineNumber: 92,
            columnNumber: 22
          }, this);
        }) }, void 0, false, {
          fileName: "app/components/shared/form-update-status.tsx",
          lineNumber: 90,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/components/shared/form-update-status.tsx",
          lineNumber: 89,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(AlertDialogFooter, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(AlertDialogCancel, { type: "button", children: "Cancel" }, void 0, false, {
            fileName: "app/components/shared/form-update-status.tsx",
            lineNumber: 104,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ButtonLoading, { type: "submit", size: "sm", loadingText: "Updating...", name: "intent", value: intentValue, isLoading, children: dialogAction }, void 0, false, {
            fileName: "app/components/shared/form-update-status.tsx",
            lineNumber: 106,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/shared/form-update-status.tsx",
          lineNumber: 103,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/shared/form-update-status.tsx",
        lineNumber: 61,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/shared/form-update-status.tsx",
      lineNumber: 55,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/shared/form-update-status.tsx",
    lineNumber: 50,
    columnNumber: 10
  }, this);
}
_s(FormUpdateStatus, "jJbL+SpDT5WPjjx4u9vZJiD55h4=", false, function() {
  return [useFetcher];
});
_c11 = FormUpdateStatus;
var _c11;
$RefreshReg$(_c11, "FormUpdateStatus");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  BadgePostStatus,
  FormUpdateStatus
};
//# sourceMappingURL=/build/_shared/chunk-STUW7EGB.js.map
