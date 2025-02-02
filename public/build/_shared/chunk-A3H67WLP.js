import {
  useMatchesData
} from "/build/_shared/chunk-NNRR3JX2.js";
import {
  createHotContext
} from "/build/_shared/chunk-LGIRSWQ5.js";

// app/hooks/use-app-loader-data.tsx
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/hooks/use-app-loader-data.tsx"
  );
  import.meta.hot.lastModified = "1738409028324.369";
}
function useAppAdminLoaderData() {
  const appAdminData = useMatchesData("routes/_app.admin");
  return {
    pageStatuses: appAdminData?.pageStatuses,
    postStatuses: appAdminData?.postStatuses
  };
}

export {
  useAppAdminLoaderData
};
//# sourceMappingURL=/build/_shared/chunk-A3H67WLP.js.map
