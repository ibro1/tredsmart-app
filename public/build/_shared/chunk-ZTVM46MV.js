import {
  Input
} from "/build/_shared/chunk-AXH33LJC.js";
import {
  ButtonLoading
} from "/build/_shared/chunk-5BR6CKWI.js";
import {
  Button
} from "/build/_shared/chunk-GKLF6JPE.js";
import {
  IconMatch
} from "/build/_shared/chunk-MNDIBQ26.js";
import {
  cn
} from "/build/_shared/chunk-X65FW46X.js";
import {
  Link,
  useFetcher
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

// app/components/shared/form-button-oauth.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/shared/form-button-oauth.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/shared/form-button-oauth.tsx"
  );
  import.meta.hot.lastModified = "1738409028320.369";
}
function FormButtonOAuth({
  provider,
  label
}) {
  _s();
  const fetcher = useFetcher();
  const isSubmitting = fetcher.state === "submitting";
  const isMatch = provider === fetcher.formData?.get("formId");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(fetcher.Form, { method: "POST", action: `/auth/${provider}`, className: "flex", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "formId", defaultValue: provider }, void 0, false, {
      fileName: "app/components/shared/form-button-oauth.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ButtonLoading, { isIconText: true, className: "flex-[auto]", isLoading: isMatch && isSubmitting, loadingText: `Continuing with ${label}...`, icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconMatch, { icon: provider, className: "size-4" }, void 0, false, {
      fileName: "app/components/shared/form-button-oauth.tsx",
      lineNumber: 35,
      columnNumber: 143
    }, this), children: [
      "Continue with ",
      label
    ] }, void 0, true, {
      fileName: "app/components/shared/form-button-oauth.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/shared/form-button-oauth.tsx",
    lineNumber: 33,
    columnNumber: 10
  }, this);
}
_s(FormButtonOAuth, "2WHaGQTcUOgkXDaibwUgjUp1MBY=", false, function() {
  return [useFetcher];
});
_c = FormButtonOAuth;
var _c;
$RefreshReg$(_c, "FormButtonOAuth");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/services/auth-strategies/index.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/services/auth-strategies/index.ts"
  );
  import.meta.hot.lastModified = "1738409028332.369";
}
var AuthStrategies = {
  FORM: "form",
  GOOGLE: "google",
  GITHUB: "github"
};

// app/configs/auth.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/configs/auth.ts"
  );
  import.meta.hot.lastModified = "1738409028324.369";
}
var configAuth = {
  services: [
    {
      label: "Google",
      provider: AuthStrategies.GOOGLE,
      isEnabled: true
    },
    {
      label: "GitHub",
      provider: AuthStrategies.GITHUB,
      isEnabled: true
    }
  ]
};

// app/components/shared/auth-buttons.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/shared/auth-buttons.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/shared/auth-buttons.tsx"
  );
  import.meta.hot.lastModified = "1738409028320.369";
}
function AuthButtons() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: configAuth.services.filter((service) => service.isEnabled).map((service) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(FormButtonOAuth, { label: service.label, provider: service.provider }, service.provider, false, {
    fileName: "app/components/shared/auth-buttons.tsx",
    lineNumber: 25,
    columnNumber: 80
  }, this)) }, void 0, false, {
    fileName: "app/components/shared/auth-buttons.tsx",
    lineNumber: 24,
    columnNumber: 10
  }, this);
}
_c2 = AuthButtons;
var _c2;
$RefreshReg$(_c2, "AuthButtons");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/shared/section-or.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/shared/section-or.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/shared/section-or.tsx"
  );
  import.meta.hot.lastModified = "1738409028320.369";
}
function SectionOr({
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("section", { className: cn("flex flex-col", className), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("hr", { className: "h-0 border-t" }, void 0, false, {
      fileName: "app/components/shared/section-or.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "-mt-2 text-center text-xs", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "bg-background px-2 text-muted-foreground", children: "OR" }, void 0, false, {
      fileName: "app/components/shared/section-or.tsx",
      lineNumber: 28,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/shared/section-or.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/shared/section-or.tsx",
    lineNumber: 25,
    columnNumber: 10
  }, this);
}
_c3 = SectionOr;
var _c3;
$RefreshReg$(_c3, "SectionOr");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/ui/input-password.tsx
var import_react2 = __toESM(require_react(), 1);
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ui/input-password.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ui/input-password.tsx"
  );
  import.meta.hot.lastModified = "1738409028324.369";
}
function InputPassword({
  placeholder = "Enter password",
  className,
  ...props
}) {
  _s2();
  const [isShown, setIsShown] = (0, import_react2.useState)(false);
  function handleClick() {
    setIsShown(!isShown);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "relative", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Input, { type: isShown ? "text" : "password", placeholder, className: cn(className), ...props }, void 0, false, {
      fileName: "app/components/ui/input-password.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Button, { size: "xs", type: "button", variant: "secondary", onClick: handleClick, className: "absolute inset-y-0 right-0 my-1.5 me-1.5 flex w-20 gap-2", children: [
      isShown ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(IconMatch, { icon: "eye-slash" }, void 0, false, {
        fileName: "app/components/ui/input-password.tsx",
        lineNumber: 40,
        columnNumber: 20
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(IconMatch, { icon: "eye" }, void 0, false, {
        fileName: "app/components/ui/input-password.tsx",
        lineNumber: 40,
        columnNumber: 53
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "text-xs", children: isShown ? "Hide" : "Show" }, void 0, false, {
        fileName: "app/components/ui/input-password.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/ui/input-password.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/ui/input-password.tsx",
    lineNumber: 37,
    columnNumber: 10
  }, this);
}
_s2(InputPassword, "AfL4AMulNN2iutG1qDR77gnp7oc=");
_c4 = InputPassword;
var _c4;
$RefreshReg$(_c4, "InputPassword");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/ui/link-text.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ui/link-text.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ui/link-text.tsx"
  );
  import.meta.hot.lastModified = "1738409028324.369";
}
function LinkText({
  to = "/",
  disabled = false,
  children,
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Link, { to, className: cn("prose-a-styles font-semibold", disabled && "cursor-not-allowed opacity-75", className), children }, void 0, false, {
    fileName: "app/components/ui/link-text.tsx",
    lineNumber: 37,
    columnNumber: 10
  }, this);
}
_c5 = LinkText;
var _c5;
$RefreshReg$(_c5, "LinkText");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  AuthButtons,
  SectionOr,
  InputPassword,
  LinkText
};
//# sourceMappingURL=/build/_shared/chunk-ZTVM46MV.js.map
