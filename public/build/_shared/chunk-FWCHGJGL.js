import {
  require_user
} from "/build/_shared/chunk-YDCMGUKP.js";
import {
  require_auth
} from "/build/_shared/chunk-GSQBLGK7.js";
import {
  createHotContext
} from "/build/_shared/chunk-LGIRSWQ5.js";
import {
  __toESM
} from "/build/_shared/chunk-DPSM2F2X.js";

// app/helpers/auth.ts
var import_user = __toESM(require_user(), 1);
var import_auth = __toESM(require_auth(), 1);
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/helpers/auth.ts"
  );
  import.meta.hot.lastModified = "1738409028324.369";
}
function checkAllowance(expectedRoleSymbols, userData) {
  if (!userData)
    return false;
  const foundRoles = expectedRoleSymbols.find(
    (symbolToFind) => userData.roles.find((role) => role.symbol === symbolToFind)
  );
  return foundRoles ? true : false;
}

export {
  checkAllowance
};
//# sourceMappingURL=/build/_shared/chunk-FWCHGJGL.js.map
