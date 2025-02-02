import {
  useMatches
} from "/build/_shared/chunk-64BCTWQL.js";
import {
  require_react
} from "/build/_shared/chunk-ZPXNLZE6.js";
import {
  createHotContext
} from "/build/_shared/chunk-LGIRSWQ5.js";
import {
  __toESM
} from "/build/_shared/chunk-DPSM2F2X.js";

// app/hooks/use-root-loader-data.tsx
var import_react2 = __toESM(require_react(), 1);
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/hooks/use-root-loader-data.tsx"
  );
  import.meta.hot.lastModified = "1738409028328.369";
}
function useMatchesData(routeId) {
  const matchingRoutes = useMatches();
  const route = (0, import_react2.useMemo)(
    () => matchingRoutes.find((route2) => route2.id === routeId),
    [matchingRoutes, routeId]
  );
  return route?.data;
}
function useRootLoaderData() {
  const data = useMatchesData("root");
  return {
    ENV: data?.ENV,
    userSession: data?.userSession,
    userData: data?.userData
  };
}

export {
  useMatchesData,
  useRootLoaderData
};
//# sourceMappingURL=/build/_shared/chunk-NNRR3JX2.js.map
