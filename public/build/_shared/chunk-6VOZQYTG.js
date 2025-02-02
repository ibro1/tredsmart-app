import {
  Link,
  useNavigation
} from "/build/_shared/chunk-64BCTWQL.js";
import {
  createMeta
} from "/build/_shared/chunk-OXE6IA6G.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-SAB7BZTA.js";
import {
  createHotContext
} from "/build/_shared/chunk-LGIRSWQ5.js";
import {
  __toESM
} from "/build/_shared/chunk-DPSM2F2X.js";

// app/routes/_site+/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_site+/index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_site+/index.tsx"
  );
  import.meta.hot.lastModified = "1738409028328.369";
}
var meta = () => createMeta({
  title: "TredSmarter - Crypto Influencer Trading Platform",
  description: "Real-time crypto influencer tracking platform with AI-powered analysis and automated trading. Monitor influencers, analyze tweets, and execute trades with advanced risk management."
});
function IndexRoute() {
  _s();
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen", children: [
    isLoading && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-80", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-8 w-8 animate-spin rounded-full border-4 border-primary-600 border-t-transparent" }, void 0, false, {
        fileName: "app/routes/_site+/index.tsx",
        lineNumber: 35,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-sm text-gray-600", children: "Loading..." }, void 0, false, {
        fileName: "app/routes/_site+/index.tsx",
        lineNumber: 36,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_site+/index.tsx",
      lineNumber: 34,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/_site+/index.tsx",
      lineNumber: 33,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "bg-gradient-primary py-20 text-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container mx-auto px-4 text-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "mb-6 text-5xl font-bold md:text-7xl", children: "Smart Crypto Trading with Influencer Insights" }, void 0, false, {
        fileName: "app/routes/_site+/index.tsx",
        lineNumber: 43,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mb-8 text-xl text-gray-200", children: "Monitor crypto influencers in real-time, analyze their recommendations with AI, and automate your trading with advanced risk management features." }, void 0, false, {
        fileName: "app/routes/_site+/index.tsx",
        lineNumber: 46,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-x-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/dashboard", className: "inline-block rounded-full bg-gradient-bitcoin px-8 py-4 font-semibold text-white transition hover:opacity-90", children: "Start Trading" }, void 0, false, {
          fileName: "app/routes/_site+/index.tsx",
          lineNumber: 50,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/docs", className: "inline-block rounded-full border border-white/20 px-8 py-4 font-semibold text-white transition hover:bg-white/10", children: "Learn More" }, void 0, false, {
          fileName: "app/routes/_site+/index.tsx",
          lineNumber: 53,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_site+/index.tsx",
        lineNumber: 49,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_site+/index.tsx",
      lineNumber: 42,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_site+/index.tsx",
      lineNumber: 41,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "bg-gradient-secondary py-20 text-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "mb-12 text-center text-4xl font-bold", children: "Core Features" }, void 0, false, {
        fileName: "app/routes/_site+/index.tsx",
        lineNumber: 63,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-8 md:grid-cols-3", children: features.map((feature, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-2xl bg-white/10 backdrop-blur-lg p-6 transition-all hover:scale-105", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-4 text-4xl", children: feature.icon }, void 0, false, {
          fileName: "app/routes/_site+/index.tsx",
          lineNumber: 66,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "mb-2 text-xl font-semibold", children: feature.title }, void 0, false, {
          fileName: "app/routes/_site+/index.tsx",
          lineNumber: 67,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-300", children: feature.description }, void 0, false, {
          fileName: "app/routes/_site+/index.tsx",
          lineNumber: 68,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "mt-4 space-y-2 text-sm text-gray-400", children: feature.points.map((point, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "flex items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "mr-2", children: "\u2022" }, void 0, false, {
            fileName: "app/routes/_site+/index.tsx",
            lineNumber: 71,
            columnNumber: 23
          }, this),
          point
        ] }, i, true, {
          fileName: "app/routes/_site+/index.tsx",
          lineNumber: 70,
          columnNumber: 53
        }, this)) }, void 0, false, {
          fileName: "app/routes/_site+/index.tsx",
          lineNumber: 69,
          columnNumber: 17
        }, this)
      ] }, index, true, {
        fileName: "app/routes/_site+/index.tsx",
        lineNumber: 65,
        columnNumber: 47
      }, this)) }, void 0, false, {
        fileName: "app/routes/_site+/index.tsx",
        lineNumber: 64,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_site+/index.tsx",
      lineNumber: 62,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_site+/index.tsx",
      lineNumber: 61,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "py-20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "mb-12 text-center text-4xl font-bold", children: "Advanced Trading Features" }, void 0, false, {
        fileName: "app/routes/_site+/index.tsx",
        lineNumber: 83,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-8 md:grid-cols-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-lg border border-gray-200 p-6 dark:border-gray-800", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "mb-4 text-2xl font-semibold", children: "Order Types" }, void 0, false, {
              fileName: "app/routes/_site+/index.tsx",
              lineNumber: 87,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "space-y-3 text-gray-600 dark:text-gray-400", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "flex items-center", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "mr-2", children: "\u2022" }, void 0, false, {
                  fileName: "app/routes/_site+/index.tsx",
                  lineNumber: 90,
                  columnNumber: 21
                }, this),
                "Market & Limit Orders"
              ] }, void 0, true, {
                fileName: "app/routes/_site+/index.tsx",
                lineNumber: 89,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "flex items-center", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "mr-2", children: "\u2022" }, void 0, false, {
                  fileName: "app/routes/_site+/index.tsx",
                  lineNumber: 94,
                  columnNumber: 21
                }, this),
                "Stop-loss with Auto Execution"
              ] }, void 0, true, {
                fileName: "app/routes/_site+/index.tsx",
                lineNumber: 93,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "flex items-center", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "mr-2", children: "\u2022" }, void 0, false, {
                  fileName: "app/routes/_site+/index.tsx",
                  lineNumber: 98,
                  columnNumber: 21
                }, this),
                "Take-profit Orders"
              ] }, void 0, true, {
                fileName: "app/routes/_site+/index.tsx",
                lineNumber: 97,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "flex items-center", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "mr-2", children: "\u2022" }, void 0, false, {
                  fileName: "app/routes/_site+/index.tsx",
                  lineNumber: 102,
                  columnNumber: 21
                }, this),
                "DCA with Customizable Intervals"
              ] }, void 0, true, {
                fileName: "app/routes/_site+/index.tsx",
                lineNumber: 101,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/_site+/index.tsx",
              lineNumber: 88,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_site+/index.tsx",
            lineNumber: 86,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-lg border border-gray-200 p-6 dark:border-gray-800", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "mb-4 text-2xl font-semibold", children: "Risk Management" }, void 0, false, {
              fileName: "app/routes/_site+/index.tsx",
              lineNumber: 108,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "space-y-3 text-gray-600 dark:text-gray-400", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "flex items-center", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "mr-2", children: "\u2022" }, void 0, false, {
                  fileName: "app/routes/_site+/index.tsx",
                  lineNumber: 111,
                  columnNumber: 21
                }, this),
                "Position Size Limits"
              ] }, void 0, true, {
                fileName: "app/routes/_site+/index.tsx",
                lineNumber: 110,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "flex items-center", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "mr-2", children: "\u2022" }, void 0, false, {
                  fileName: "app/routes/_site+/index.tsx",
                  lineNumber: 115,
                  columnNumber: 21
                }, this),
                "Maximum Allocation per Token"
              ] }, void 0, true, {
                fileName: "app/routes/_site+/index.tsx",
                lineNumber: 114,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "flex items-center", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "mr-2", children: "\u2022" }, void 0, false, {
                  fileName: "app/routes/_site+/index.tsx",
                  lineNumber: 119,
                  columnNumber: 21
                }, this),
                "Previous Purchase Detection"
              ] }, void 0, true, {
                fileName: "app/routes/_site+/index.tsx",
                lineNumber: 118,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "flex items-center", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "mr-2", children: "\u2022" }, void 0, false, {
                  fileName: "app/routes/_site+/index.tsx",
                  lineNumber: 123,
                  columnNumber: 21
                }, this),
                "Trading Frequency Limits"
              ] }, void 0, true, {
                fileName: "app/routes/_site+/index.tsx",
                lineNumber: 122,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/_site+/index.tsx",
              lineNumber: 109,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_site+/index.tsx",
            lineNumber: 107,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_site+/index.tsx",
          lineNumber: 85,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-lg border border-gray-200 p-6 dark:border-gray-800", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "mb-4 text-2xl font-semibold", children: "Wallet Management" }, void 0, false, {
              fileName: "app/routes/_site+/index.tsx",
              lineNumber: 131,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "space-y-3 text-gray-600 dark:text-gray-400", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "flex items-center", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "mr-2", children: "\u2022" }, void 0, false, {
                  fileName: "app/routes/_site+/index.tsx",
                  lineNumber: 134,
                  columnNumber: 21
                }, this),
                "Import & Generate Wallets"
              ] }, void 0, true, {
                fileName: "app/routes/_site+/index.tsx",
                lineNumber: 133,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "flex items-center", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "mr-2", children: "\u2022" }, void 0, false, {
                  fileName: "app/routes/_site+/index.tsx",
                  lineNumber: 138,
                  columnNumber: 21
                }, this),
                "Hardware Wallet Support"
              ] }, void 0, true, {
                fileName: "app/routes/_site+/index.tsx",
                lineNumber: 137,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "flex items-center", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "mr-2", children: "\u2022" }, void 0, false, {
                  fileName: "app/routes/_site+/index.tsx",
                  lineNumber: 142,
                  columnNumber: 21
                }, this),
                "Multi-signature Support"
              ] }, void 0, true, {
                fileName: "app/routes/_site+/index.tsx",
                lineNumber: 141,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "flex items-center", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "mr-2", children: "\u2022" }, void 0, false, {
                  fileName: "app/routes/_site+/index.tsx",
                  lineNumber: 146,
                  columnNumber: 21
                }, this),
                "2FA & IP Whitelisting"
              ] }, void 0, true, {
                fileName: "app/routes/_site+/index.tsx",
                lineNumber: 145,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/_site+/index.tsx",
              lineNumber: 132,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_site+/index.tsx",
            lineNumber: 130,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-lg border border-gray-200 p-6 dark:border-gray-800", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "mb-4 text-2xl font-semibold", children: "Fee Management" }, void 0, false, {
              fileName: "app/routes/_site+/index.tsx",
              lineNumber: 152,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "space-y-3 text-gray-600 dark:text-gray-400", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "flex items-center", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "mr-2", children: "\u2022" }, void 0, false, {
                  fileName: "app/routes/_site+/index.tsx",
                  lineNumber: 155,
                  columnNumber: 21
                }, this),
                "0.1% Base Fee per Trade"
              ] }, void 0, true, {
                fileName: "app/routes/_site+/index.tsx",
                lineNumber: 154,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "flex items-center", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "mr-2", children: "\u2022" }, void 0, false, {
                  fileName: "app/routes/_site+/index.tsx",
                  lineNumber: 159,
                  columnNumber: 21
                }, this),
                "5% Success Fee on Profits"
              ] }, void 0, true, {
                fileName: "app/routes/_site+/index.tsx",
                lineNumber: 158,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "flex items-center", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "mr-2", children: "\u2022" }, void 0, false, {
                  fileName: "app/routes/_site+/index.tsx",
                  lineNumber: 163,
                  columnNumber: 21
                }, this),
                "Network Gas Fee Estimation"
              ] }, void 0, true, {
                fileName: "app/routes/_site+/index.tsx",
                lineNumber: 162,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "flex items-center", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "mr-2", children: "\u2022" }, void 0, false, {
                  fileName: "app/routes/_site+/index.tsx",
                  lineNumber: 167,
                  columnNumber: 21
                }, this),
                "Fee Analytics & Reporting"
              ] }, void 0, true, {
                fileName: "app/routes/_site+/index.tsx",
                lineNumber: 166,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/_site+/index.tsx",
              lineNumber: 153,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_site+/index.tsx",
            lineNumber: 151,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_site+/index.tsx",
          lineNumber: 129,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_site+/index.tsx",
        lineNumber: 84,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_site+/index.tsx",
      lineNumber: 82,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_site+/index.tsx",
      lineNumber: 81,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_site+/index.tsx",
    lineNumber: 32,
    columnNumber: 10
  }, this);
}
_s(IndexRoute, "I2WaJhUM5KV32aS1+j3KKeVsgyA=", false, function() {
  return [useNavigation];
});
_c = IndexRoute;
var features = [{
  icon: "\u{1F3AF}",
  title: "Influencer Monitoring",
  description: "Real-time tracking and analysis of crypto influencers on Twitter",
  points: ["Automated tweet collection", "Historical analysis", "Performance metrics", "Influencer rankings"]
}, {
  icon: "\u{1F916}",
  title: "AI-Powered Analysis",
  description: "Advanced natural language processing for crypto-related content",
  points: ["Token identification", "Sentiment analysis", "Price impact prediction", "Trade suggestions"]
}, {
  icon: "\u26A1",
  title: "Automated Trading",
  description: "Execute trades automatically with comprehensive risk management",
  points: ["Multiple order types", "Position management", "Risk controls", "Helius RPC integration"]
}];
var _c;
$RefreshReg$(_c, "IndexRoute");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  meta,
  IndexRoute
};
//# sourceMappingURL=/build/_shared/chunk-6VOZQYTG.js.map
