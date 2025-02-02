import {
  Input
} from "/build/_shared/chunk-AXH33LJC.js";
import {
  Label
} from "/build/_shared/chunk-GRFG2YTY.js";
import {
  IconMatch
} from "/build/_shared/chunk-MNDIBQ26.js";
import {
  cn
} from "/build/_shared/chunk-X65FW46X.js";
import {
  pluralizeWord
} from "/build/_shared/chunk-2OMQDMHI.js";
import {
  Form,
  Link,
  useLocation,
  useSearchParams
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

// app/components/shared/form-search.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/shared/form-search.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/shared/form-search.tsx"
  );
  import.meta.hot.lastModified = "1738409028320.369";
}
function FormSearch({
  action = "/search",
  placeholder = "Search...",
  autoFocus = false
}) {
  _s();
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") ?? "";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "GET", action, className: "w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("fieldset", { className: "group relative flex items-center gap-1", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { htmlFor: "search", className: "sr-only", children: "Search" }, void 0, false, {
      fileName: "app/components/shared/form-search.tsx",
      lineNumber: 36,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { id: "search", type: "search", name: "q", placeholder, defaultValue: query, autoFocus, autoComplete: "off", className: "w-full py-2 pe-3 ps-10" }, void 0, false, {
      fileName: "app/components/shared/form-search.tsx",
      lineNumber: 39,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "pointer-events-none absolute flex ps-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconMatch, { icon: "magnifying-glass", className: "text-muted-foreground group-focus-within:text-primary" }, void 0, false, {
      fileName: "app/components/shared/form-search.tsx",
      lineNumber: 41,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/shared/form-search.tsx",
      lineNumber: 40,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/shared/form-search.tsx",
    lineNumber: 35,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/shared/form-search.tsx",
    lineNumber: 34,
    columnNumber: 10
  }, this);
}
_s(FormSearch, "HWxNQEGJGSlsPJ3ubBB3081mtng=", false, function() {
  return [useSearchParams];
});
_c = FormSearch;
var _c;
$RefreshReg$(_c, "FormSearch");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/shared/pagination-search.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/shared/pagination-search.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
var _s22 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/shared/pagination-search.tsx"
  );
  import.meta.hot.lastModified = "1738409028320.369";
}
function PaginationNavigation({
  queryParam,
  limitParam,
  pageParam,
  totalPages,
  paginationItems
}) {
  _s2();
  const location = useLocation();
  function renderArrowLink(direction, icon, targetPage) {
    const isPrev = direction === "prev";
    const isNext = direction === "next";
    const isFirst = direction === "first";
    const isLast = direction === "last";
    const newPage = isPrev ? pageParam - 1 : isNext ? pageParam + 1 : targetPage;
    const isPossible = isFirst && pageParam !== 1 || isLast && pageParam !== totalPages || !isFirst && !isLast && pageParam === newPage || isPrev && pageParam > 1 || isNext && pageParam < totalPages;
    if (!isPossible) {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "flex w-8 select-none justify-center rounded-md p-2 opacity-20", children: icon }, void 0, false, {
        fileName: "app/components/shared/pagination-search.tsx",
        lineNumber: 115,
        columnNumber: 14
      }, this);
    }
    const searchParams = new URLSearchParams({
      q: queryParam,
      limit: String(limitParam),
      page: String(targetPage)
    }).toString();
    return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: `${location.pathname}?${searchParams}`, className: "focus-ring flex w-8 justify-center rounded-md p-2 text-muted-foreground transition hover:bg-secondary hover:opacity-75", children: icon }, void 0, false, {
      fileName: "app/components/shared/pagination-search.tsx",
      lineNumber: 124,
      columnNumber: 12
    }, this);
  }
  function renderArrowMostLink(direction, icon) {
    const targetPage = direction === "first" ? 1 : totalPages;
    return renderArrowLink(direction, icon, targetPage);
  }
  if (paginationItems.length <= 0)
    return null;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("nav", { className: "flex items-center justify-center gap-4", children: [
    renderArrowMostLink("first", /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(IconMatch, { icon: "caret-double-left" }, void 0, false, {
      fileName: "app/components/shared/pagination-search.tsx",
      lineNumber: 136,
      columnNumber: 37
    }, this)),
    renderArrowLink("prev", /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(IconMatch, { icon: "caret-left" }, void 0, false, {
      fileName: "app/components/shared/pagination-search.tsx",
      lineNumber: 137,
      columnNumber: 32
    }, this), pageParam - 1),
    pageParam > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { className: "flex flex-wrap gap-4", children: paginationItems.map(({
      pageNumber,
      to
    }, index) => {
      const isActive = pageParam === pageNumber;
      return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to, className: cn(
        // Use width to have consistent width although different numbers
        "focus-ring flex w-8 justify-center rounded-md p-1 transition hover:opacity-75",
        isActive && "bg-secondary text-primary",
        !isActive && "text-muted-foreground hover:bg-secondary"
      ), children: pageNumber }, void 0, false, {
        fileName: "app/components/shared/pagination-search.tsx",
        lineNumber: 146,
        columnNumber: 17
      }, this) }, index, false, {
        fileName: "app/components/shared/pagination-search.tsx",
        lineNumber: 145,
        columnNumber: 16
      }, this);
    }) }, void 0, false, {
      fileName: "app/components/shared/pagination-search.tsx",
      lineNumber: 139,
      columnNumber: 25
    }, this),
    renderArrowLink("next", /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(IconMatch, { icon: "caret-right" }, void 0, false, {
      fileName: "app/components/shared/pagination-search.tsx",
      lineNumber: 155,
      columnNumber: 32
    }, this), pageParam + 1),
    renderArrowMostLink("last", /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(IconMatch, { icon: "caret-double-right" }, void 0, false, {
      fileName: "app/components/shared/pagination-search.tsx",
      lineNumber: 156,
      columnNumber: 36
    }, this))
  ] }, void 0, true, {
    fileName: "app/components/shared/pagination-search.tsx",
    lineNumber: 135,
    columnNumber: 10
  }, this);
}
_s2(PaginationNavigation, "pkHmaVRPskBaU4tMJuJJpV42k1I=", false, function() {
  return [useLocation];
});
_c2 = PaginationNavigation;
function PaginationSearch({
  itemName = "item",
  searchPlaceholder = "Search with keyword...",
  count,
  queryParam,
  pageParam,
  totalItems,
  totalPages,
  isVerbose = false,
  isDefaultShow = true
}) {
  _s22();
  const location = useLocation();
  const pluralItemsText = pluralizeWord(itemName, count);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("section", { className: "w-full space-y-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(FormSearch, { action: location.pathname, placeholder: searchPlaceholder }, void 0, false, {
      fileName: "app/components/shared/pagination-search.tsx",
      lineNumber: 178,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-full space-y-2 text-sm", children: [
      !queryParam && count <= 0 && isDefaultShow && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-muted-foreground", children: [
        "No ",
        itemName,
        " found"
      ] }, void 0, true, {
        fileName: "app/components/shared/pagination-search.tsx",
        lineNumber: 182,
        columnNumber: 56
      }, this),
      queryParam && count <= 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-muted-foreground", children: [
        "No ",
        itemName,
        ' found with keyword "',
        queryParam,
        '"'
      ] }, void 0, true, {
        fileName: "app/components/shared/pagination-search.tsx",
        lineNumber: 185,
        columnNumber: 38
      }, this),
      !queryParam && count > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "space-x-2 text-muted-foreground", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: [
          pluralItemsText,
          " in page ",
          pageParam
        ] }, void 0, true, {
          fileName: "app/components/shared/pagination-search.tsx",
          lineNumber: 191,
          columnNumber: 13
        }, this),
        isVerbose && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "text-muted-foreground/50", children: [
          "(from total of ",
          pluralizeWord(itemName, totalItems),
          " in",
          " ",
          pluralizeWord("page", totalPages),
          ")"
        ] }, void 0, true, {
          fileName: "app/components/shared/pagination-search.tsx",
          lineNumber: 195,
          columnNumber: 27
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/shared/pagination-search.tsx",
        lineNumber: 190,
        columnNumber: 38
      }, this),
      queryParam && count > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "space-x-2 text-muted-foreground", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: [
          '"',
          queryParam,
          '" found ',
          pluralItemsText,
          " in page ",
          pageParam
        ] }, void 0, true, {
          fileName: "app/components/shared/pagination-search.tsx",
          lineNumber: 203,
          columnNumber: 13
        }, this),
        isVerbose && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: [
          "(from total of ",
          pluralizeWord(itemName, totalItems),
          " in",
          " ",
          pluralizeWord("page", totalPages),
          ")"
        ] }, void 0, true, {
          fileName: "app/components/shared/pagination-search.tsx",
          lineNumber: 206,
          columnNumber: 27
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/shared/pagination-search.tsx",
        lineNumber: 202,
        columnNumber: 37
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/shared/pagination-search.tsx",
      lineNumber: 180,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/shared/pagination-search.tsx",
    lineNumber: 177,
    columnNumber: 10
  }, this);
}
_s22(PaginationSearch, "pkHmaVRPskBaU4tMJuJJpV42k1I=", false, function() {
  return [useLocation];
});
_c22 = PaginationSearch;
var _c2;
var _c22;
$RefreshReg$(_c2, "PaginationNavigation");
$RefreshReg$(_c22, "PaginationSearch");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  PaginationNavigation,
  PaginationSearch
};
//# sourceMappingURL=/build/_shared/chunk-A3QJBVMI.js.map
