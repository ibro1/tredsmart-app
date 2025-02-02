import {
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

// app/components/shared/theme.tsx
var import_react2 = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/shared/theme.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
var _s2 = $RefreshSig$();
var _s3 = $RefreshSig$();
var _s4 = $RefreshSig$();
var _s5 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/shared/theme.tsx"
  );
  import.meta.hot.lastModified = "1738409028320.369";
}
var Theme = /* @__PURE__ */ function(Theme2) {
  Theme2["DARK"] = "dark";
  Theme2["LIGHT"] = "light";
  return Theme2;
}(Theme || {});
var themes = Object.values(Theme);
var ThemeContext = (0, import_react2.createContext)(void 0);
var prefersDarkMQ = "(prefers-color-scheme: dark)";
var getPreferredTheme = () => window.matchMedia(prefersDarkMQ).matches ? Theme.DARK : Theme.LIGHT;
function ThemeProvider({
  children,
  specifiedTheme
}) {
  _s();
  const [theme, setTheme] = (0, import_react2.useState)(() => {
    if (specifiedTheme) {
      if (themes.includes(specifiedTheme)) {
        return specifiedTheme;
      } else {
        return null;
      }
    }
    if (typeof document === "undefined") {
      return null;
    }
    return getPreferredTheme();
  });
  const persistTheme = useFetcher();
  const persistThemeRef = (0, import_react2.useRef)(persistTheme);
  (0, import_react2.useEffect)(() => {
    persistThemeRef.current = persistTheme;
  }, [persistTheme]);
  const mountRun = (0, import_react2.useRef)(false);
  (0, import_react2.useEffect)(() => {
    if (!mountRun.current) {
      mountRun.current = true;
      return;
    }
    if (!theme) {
      return;
    }
    persistThemeRef.current.submit({
      theme
    }, {
      action: "action/theme",
      method: "post"
    });
  }, [theme]);
  (0, import_react2.useEffect)(() => {
    const mediaQuery = window.matchMedia(prefersDarkMQ);
    const handleChange = () => {
      setTheme(mediaQuery.matches ? Theme.DARK : Theme.LIGHT);
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ThemeContext.Provider, { value: [theme, setTheme], children }, void 0, false, {
    fileName: "app/components/shared/theme.tsx",
    lineNumber: 100,
    columnNumber: 10
  }, this);
}
_s(ThemeProvider, "SN8ZJmzl+pcTD5fzlarL+ZpYdPU=", false, function() {
  return [useFetcher];
});
_c = ThemeProvider;
var clientThemeCode = `
;(() => {
  const theme = window.matchMedia(${JSON.stringify(prefersDarkMQ)}).matches
    ? 'dark'
    : 'light';
  const cl = document.documentElement.classList;
  const themeAlreadyApplied = cl.contains('light') || cl.contains('dark');
  if (themeAlreadyApplied) {
    // this script shouldn't exist if the theme is already applied!
    console.warn(
      "Hi there, could you let me know you're seeing this message? Thanks!",
    );
  } else {
    cl.add(theme);
  }
  const meta = document.querySelector('meta[name=color-scheme]');
  if (meta) {
    if (theme === 'dark') {
      meta.content = 'dark light';
    } else if (theme === 'light') {
      meta.content = 'light dark';
    }
  } else {
    console.warn(
      "Hey, could you let me know you're seeing this message? Thanks!",
    );
  }
})();
`;
function ThemeHead({
  ssrTheme
}) {
  _s2();
  const [theme] = useTheme();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", { name: "color-scheme", content: theme === "light" ? "light dark" : "dark light" }, void 0, false, {
      fileName: "app/components/shared/theme.tsx",
      lineNumber: 145,
      columnNumber: 7
    }, this),
    ssrTheme ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "script",
      {
        dangerouslySetInnerHTML: {
          __html: clientThemeCode
        }
      },
      void 0,
      false,
      {
        fileName: "app/components/shared/theme.tsx",
        lineNumber: 150,
        columnNumber: 26
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/components/shared/theme.tsx",
    lineNumber: 140,
    columnNumber: 10
  }, this);
}
_s2(ThemeHead, "tTTAODy8wohSLSpq8pa8WNTieJI=", false, function() {
  return [useTheme];
});
_c2 = ThemeHead;
function useTheme() {
  _s3();
  const context = (0, import_react2.useContext)(ThemeContext);
  if (context === void 0) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
_s3(useTheme, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
function ThemedComponent({
  dark,
  light,
  initialOnly = false
}) {
  _s4();
  const [theme] = useTheme();
  const [initialTheme] = (0, import_react2.useState)(theme);
  const themeToReference = initialOnly ? initialTheme : theme;
  const serverRenderWithUnknownTheme = !theme && typeof document === "undefined";
  if (serverRenderWithUnknownTheme) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
      (0, import_react2.createElement)("dark-mode", null, dark),
      (0, import_react2.createElement)("light-mode", null, light)
    ] }, void 0, true, {
      fileName: "app/components/shared/theme.tsx",
      lineNumber: 193,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: themeToReference === "light" ? light : dark }, void 0, false, {
    fileName: "app/components/shared/theme.tsx",
    lineNumber: 198,
    columnNumber: 10
  }, this);
}
_s4(ThemedComponent, "2JShMsZqQ0sw6KTRaRifYubBr5w=", false, function() {
  return [useTheme];
});
_c3 = ThemedComponent;
function NonFlashOfWrongTheme({
  ssrTheme
}) {
  _s5();
  const [theme] = useTheme();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", { name: "color-scheme", content: theme === "light" ? "light dark" : "dark light" }, void 0, false, {
      fileName: "app/components/shared/theme.tsx",
      lineNumber: 213,
      columnNumber: 7
    }, this),
    ssrTheme ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("script", { dangerouslySetInnerHTML: {
      __html: clientThemeCode
    } }, void 0, false, {
      fileName: "app/components/shared/theme.tsx",
      lineNumber: 214,
      columnNumber: 26
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/shared/theme.tsx",
    lineNumber: 212,
    columnNumber: 10
  }, this);
}
_s5(NonFlashOfWrongTheme, "tTTAODy8wohSLSpq8pa8WNTieJI=", false, function() {
  return [useTheme];
});
_c4 = NonFlashOfWrongTheme;
var _c;
var _c2;
var _c3;
var _c4;
$RefreshReg$(_c, "ThemeProvider");
$RefreshReg$(_c2, "ThemeHead");
$RefreshReg$(_c3, "ThemedComponent");
$RefreshReg$(_c4, "NonFlashOfWrongTheme");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  Theme,
  ThemeProvider,
  ThemeHead,
  useTheme
};
//# sourceMappingURL=/build/_shared/chunk-CPLPBTJQ.js.map
