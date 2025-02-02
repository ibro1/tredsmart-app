import {
  captureRemixErrorBoundaryError
} from "/build/_shared/chunk-5ZXJ2JKP.js";
import {
  ButtonLink
} from "/build/_shared/chunk-7MYZRLDO.js";
import {
  IconMatch
} from "/build/_shared/chunk-MNDIBQ26.js";
import {
  cn
} from "/build/_shared/chunk-X65FW46X.js";
import {
  isRouteErrorResponse,
  useLocation,
  useParams,
  useRouteError
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

// app/components/ui/anchor.tsx
var React = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ui/anchor.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ui/anchor.tsx"
  );
  import.meta.hot.lastModified = "1738409028320.369";
}
var Anchor = React.forwardRef(_c = ({
  href,
  className,
  children,
  ...props
}, ref) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href, target: "_blank", rel: "noreferrer", className: cn(className), ref, ...props, children }, void 0, false, {
    fileName: "app/components/ui/anchor.tsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
});
_c2 = Anchor;
Anchor.displayName = "Anchor";
var _c;
var _c2;
$RefreshReg$(_c, "Anchor$React.forwardRef");
$RefreshReg$(_c2, "Anchor");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/shared/error-boundary.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/shared/error-boundary.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/shared/error-boundary.tsx"
  );
  import.meta.hot.lastModified = "1738409028320.369";
}
function GeneralErrorBoundary({
  defaultStatusHandler = ({
    error
  }) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(GeneralErrorMessage, { error }, void 0, false, {
    fileName: "app/components/shared/error-boundary.tsx",
    lineNumber: 31,
    columnNumber: 9
  }, this),
  statusHandlers,
  unexpectedErrorHandler = (error) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(GeneralErrorMessage, { error }, void 0, false, {
    fileName: "app/components/shared/error-boundary.tsx",
    lineNumber: 33,
    columnNumber: 37
  }, this)
}) {
  _s();
  const params = useParams();
  const error = useRouteError();
  captureRemixErrorBoundaryError(error);
  if (typeof document !== "undefined") {
    console.error(error);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "site-container pb-20", children: isRouteErrorResponse(error) ? (statusHandlers?.[error.status] ?? defaultStatusHandler)({
    error,
    params
  }) : unexpectedErrorHandler(error) }, void 0, false, {
    fileName: "app/components/shared/error-boundary.tsx",
    lineNumber: 42,
    columnNumber: 10
  }, this);
}
_s(GeneralErrorBoundary, "zdr1Q18Q8gvmYGshq8PhZqIbfWs=", false, function() {
  return [useParams, useRouteError];
});
_c3 = GeneralErrorBoundary;
function GeneralErrorMessage({
  error
}) {
  _s2();
  const location = useLocation();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("section", { className: "prose-config site-section", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { children: "Sorry, something went wrong" }, void 0, false, {
        fileName: "app/components/shared/error-boundary.tsx",
        lineNumber: 68,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "The requested page either doesn\u2019t exist or you don\u2019t have access to it." }, void 0, false, {
        fileName: "app/components/shared/error-boundary.tsx",
        lineNumber: 69,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: [
          "Something wrong on ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("code", { children: location.pathname }, void 0, false, {
            fileName: "app/components/shared/error-boundary.tsx",
            lineNumber: 72,
            columnNumber: 32
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/shared/error-boundary.tsx",
          lineNumber: 71,
          columnNumber: 11
        }, this),
        error.status && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: [
          error.status,
          " ",
          error.data
        ] }, void 0, true, {
          fileName: "app/components/shared/error-boundary.tsx",
          lineNumber: 74,
          columnNumber: 28
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/shared/error-boundary.tsx",
        lineNumber: 70,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/shared/error-boundary.tsx",
      lineNumber: 67,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ErrorHelpInformation, {}, void 0, false, {
      fileName: "app/components/shared/error-boundary.tsx",
      lineNumber: 80,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/shared/error-boundary.tsx",
    lineNumber: 66,
    columnNumber: 10
  }, this);
}
_s2(GeneralErrorMessage, "pkHmaVRPskBaU4tMJuJJpV42k1I=", false, function() {
  return [useLocation];
});
_c22 = GeneralErrorMessage;
function ErrorHelpInformation({
  extraButtonLinks
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("section", { className: "site-section mb-20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ButtonLink, { size: "sm", variant: "secondary", to: "/", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(IconMatch, { icon: "house" }, void 0, false, {
          fileName: "app/components/shared/error-boundary.tsx",
          lineNumber: 94,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: "Go to Home" }, void 0, false, {
          fileName: "app/components/shared/error-boundary.tsx",
          lineNumber: 95,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/shared/error-boundary.tsx",
        lineNumber: 93,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ButtonLink, { size: "sm", variant: "secondary", to: "/help", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(IconMatch, { icon: "question" }, void 0, false, {
          fileName: "app/components/shared/error-boundary.tsx",
          lineNumber: 98,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: "Go to Help" }, void 0, false, {
          fileName: "app/components/shared/error-boundary.tsx",
          lineNumber: 99,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/shared/error-boundary.tsx",
        lineNumber: 97,
        columnNumber: 11
      }, this),
      extraButtonLinks
    ] }, void 0, true, {
      fileName: "app/components/shared/error-boundary.tsx",
      lineNumber: 92,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/shared/error-boundary.tsx",
      lineNumber: 91,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("section", { className: "site-section prose-config", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { children: "Did you follow a link from here?" }, void 0, false, {
        fileName: "app/components/shared/error-boundary.tsx",
        lineNumber: 106,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "If you reached this page from another part of Dogokit, please let us know so we can correct our mistake." }, void 0, false, {
        fileName: "app/components/shared/error-boundary.tsx",
        lineNumber: 107,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { children: "Did you follow a link from another site?" }, void 0, false, {
        fileName: "app/components/shared/error-boundary.tsx",
        lineNumber: 112,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "Links from other sites can sometimes be outdated or misspelled. Let us know where you came from and we can try to contact the other site in order to fix the problem." }, void 0, false, {
        fileName: "app/components/shared/error-boundary.tsx",
        lineNumber: 113,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { children: "Did you type the URL?" }, void 0, false, {
        fileName: "app/components/shared/error-boundary.tsx",
        lineNumber: 118,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "You may have typed the address (URL) incorrectly. Check to make sure you\u2019ve got the exact right spelling, capitalization, etc." }, void 0, false, {
        fileName: "app/components/shared/error-boundary.tsx",
        lineNumber: 119,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("small", { children: [
        "This error information is inspired by",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Anchor, { href: "https://basecamp.com", children: "Basecamp" }, void 0, false, {
          fileName: "app/components/shared/error-boundary.tsx",
          lineNumber: 126,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/shared/error-boundary.tsx",
        lineNumber: 124,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/shared/error-boundary.tsx",
      lineNumber: 105,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/shared/error-boundary.tsx",
    lineNumber: 90,
    columnNumber: 10
  }, this);
}
_c32 = ErrorHelpInformation;
var _c3;
var _c22;
var _c32;
$RefreshReg$(_c3, "GeneralErrorBoundary");
$RefreshReg$(_c22, "GeneralErrorMessage");
$RefreshReg$(_c32, "ErrorHelpInformation");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  GeneralErrorBoundary,
  ErrorHelpInformation
};
//# sourceMappingURL=/build/_shared/chunk-OIHPCGYC.js.map
