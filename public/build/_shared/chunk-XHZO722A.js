import {
  createHotContext
} from "/build/_shared/chunk-LGIRSWQ5.js";

// app/utils/sitemap.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/utils/sitemap.ts"
  );
  import.meta.hot.lastModified = "1738409028332.369";
}
function createSitemap(route, priority) {
  return {
    getSitemapEntries: () => {
      return route ? [{ route, priority }] : null;
    }
  };
}

export {
  createSitemap
};
//# sourceMappingURL=/build/_shared/chunk-XHZO722A.js.map
