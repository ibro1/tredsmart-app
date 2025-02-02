import {
  z
} from "/build/_shared/chunk-CEALXEBS.js";
import {
  createHotContext
} from "/build/_shared/chunk-LGIRSWQ5.js";

// app/schemas/general.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/schemas/general.ts"
  );
  import.meta.hot.lastModified = "1738409028328.369";
}
var id = z.string({ required_error: "ID is required" });
var userId = z.string({ required_error: "User ID is required" });
var intent = z.string().optional();
var redirectTo = z.string().optional();
var schemaGeneralId = z.object({ id, intent });

export {
  id,
  redirectTo
};
//# sourceMappingURL=/build/_shared/chunk-267CVLDZ.js.map
