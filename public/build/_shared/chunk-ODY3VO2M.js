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
  Button
} from "/build/_shared/chunk-GKLF6JPE.js";
import {
  IconMatch
} from "/build/_shared/chunk-MNDIBQ26.js";
import {
  useFetcher,
  useLocation
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

// app/components/shared/form-delete.tsx
var import_react2 = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/shared/form-delete.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/shared/form-delete.tsx"
  );
  import.meta.hot.lastModified = "1738409028320.369";
}
function FormDelete({
  dialogTrigger,
  action,
  intentValue,
  itemText,
  name = "id",
  defaultValue,
  buttonText = "Delete",
  disabled,
  extraComponent,
  className
}) {
  _s();
  const [open, setOpen] = (0, import_react2.useState)();
  const location = useLocation();
  const fetcher = useFetcher();
  const isSubmitting = fetcher.state === "submitting" && fetcher.formMethod === "DELETE";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AlertDialog, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AlertDialogTrigger, { asChild: true, className, children: dialogTrigger ? dialogTrigger : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "outline", size: "xs", disabled, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconMatch, { icon: "trash" }, void 0, false, {
        fileName: "app/components/shared/form-delete.tsx",
        lineNumber: 48,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: buttonText }, void 0, false, {
        fileName: "app/components/shared/form-delete.tsx",
        lineNumber: 49,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/shared/form-delete.tsx",
      lineNumber: 47,
      columnNumber: 42
    }, this) }, void 0, false, {
      fileName: "app/components/shared/form-delete.tsx",
      lineNumber: 46,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AlertDialogContent, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AlertDialogHeader, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AlertDialogTitle, { children: [
          "Delete ",
          itemText,
          "?"
        ] }, void 0, true, {
          fileName: "app/components/shared/form-delete.tsx",
          lineNumber: 55,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AlertDialogDescription, { children: [
          "This will permanently delete ",
          itemText,
          ". This action cannot be undone."
        ] }, void 0, true, {
          fileName: "app/components/shared/form-delete.tsx",
          lineNumber: 56,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/shared/form-delete.tsx",
        lineNumber: 54,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AlertDialogFooter, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AlertDialogCancel, { children: "Cancel" }, void 0, false, {
          fileName: "app/components/shared/form-delete.tsx",
          lineNumber: 61,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(fetcher.Form, { action: action || location.pathname, method: "DELETE", onSubmit: (event) => {
          fetcher.submit(event.currentTarget.form, {
            method: "DELETE"
          });
          setOpen(false);
        }, children: [
          name && defaultValue && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name, defaultValue }, void 0, false, {
            fileName: "app/components/shared/form-delete.tsx",
            lineNumber: 68,
            columnNumber: 38
          }, this),
          extraComponent,
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ButtonLoading, { type: "submit", size: "sm", variant: "destructive", name: "intent", value: intentValue, loadingText: "Deleting", isLoading: isSubmitting, children: "Delete" }, void 0, false, {
            fileName: "app/components/shared/form-delete.tsx",
            lineNumber: 72,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/shared/form-delete.tsx",
          lineNumber: 62,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/shared/form-delete.tsx",
        lineNumber: 60,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/shared/form-delete.tsx",
      lineNumber: 53,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/shared/form-delete.tsx",
    lineNumber: 45,
    columnNumber: 10
  }, this);
}
_s(FormDelete, "FwE8+IFQxhNYAnFmaz3RG4aQ5SM=", false, function() {
  return [useLocation, useFetcher];
});
_c = FormDelete;
var _c;
$RefreshReg$(_c, "FormDelete");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  FormDelete
};
//# sourceMappingURL=/build/_shared/chunk-ODY3VO2M.js.map
