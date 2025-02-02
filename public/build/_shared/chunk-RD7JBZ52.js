import {
  cn
} from "/build/_shared/chunk-X65FW46X.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-SAB7BZTA.js";
import {
  createHotContext
} from "/build/_shared/chunk-LGIRSWQ5.js";
import {
  __toESM
} from "/build/_shared/chunk-DPSM2F2X.js";

// app/components/shared/image-cover.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/shared/image-cover.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/shared/image-cover.tsx"
  );
  import.meta.hot.lastModified = "1738409028320.369";
}
function ImageCover({
  src,
  alt,
  className,
  width = 200,
  height = 150,
  ...props
}) {
  const sourceWidth = Number(width) * 2;
  const sourceHeight = Number(height) * 2;
  const placeholder = `https://picsum.photos/${sourceWidth}/${sourceHeight}`;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: src || placeholder, alt, className: cn("w-full select-none rounded-md bg-secondary object-cover", className), width, height, ...props }, void 0, false, {
    fileName: "app/components/shared/image-cover.tsx",
    lineNumber: 33,
    columnNumber: 10
  }, this);
}
_c = ImageCover;
var _c;
$RefreshReg$(_c, "ImageCover");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  ImageCover
};
//# sourceMappingURL=/build/_shared/chunk-RD7JBZ52.js.map
