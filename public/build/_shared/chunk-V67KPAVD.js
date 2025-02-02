import {
  useRootLoaderData
} from "/build/_shared/chunk-NNRR3JX2.js";
import {
  useSearchParams
} from "/build/_shared/chunk-64BCTWQL.js";
import {
  createHotContext
} from "/build/_shared/chunk-LGIRSWQ5.js";

// app/hooks/use-app-mode.tsx
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/hooks/use-app-mode.tsx"
  );
  import.meta.hot.lastModified = "1738409028324.369";
}
function useAppMode(mode) {
  const { ENV } = useRootLoaderData();
  const [searchParams] = useSearchParams();
  const paramsMode = searchParams.get("mode");
  return {
    mode: paramsMode || mode,
    isModeEdit: mode === "edit",
    isModeDevelopment: ENV?.NODE_ENV === "development" || searchParams.get("mode") === "dev"
  };
}

export {
  useAppMode
};
//# sourceMappingURL=/build/_shared/chunk-V67KPAVD.js.map
