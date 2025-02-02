import {
  id,
  redirectTo
} from "/build/_shared/chunk-267CVLDZ.js";
import {
  z
} from "/build/_shared/chunk-CEALXEBS.js";
import {
  createHotContext
} from "/build/_shared/chunk-LGIRSWQ5.js";

// app/schemas/user.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/schemas/user.ts"
  );
  import.meta.hot.lastModified = "1738409028328.369";
}
var email = z.string({ required_error: "Email is required" }).min(1).email("This is not an email");
var username = z.string({ required_error: "Username is required" }).regex(/^[a-zA-Z0-9_]+$/, "Only alphabet, number, underscore allowed").min(4, "Username require at least 4 characters").max(20, "Username limited to 20 characters");
var fullname = z.string({ required_error: "Full name is required" }).min(1).max(50, "Full name limited to 50 characters");
var nickname = z.string().max(50, "Nick name limited to 50 characters");
var password = z.string({ required_error: "Password is required" }).min(8, "Password at least 8 characters").max(100, "Password max of 100 characters");
var confirmPassword = z.string();
var currentPassword = z.string({ required_error: "Current password is required" }).min(1);
var remember = z.boolean().optional();
var roleSymbol = z.string().min(1, "Role is required");
var tag = z.object({ id, symbol: z.string().optional() });
var tags = z.array(tag).optional();
var modeName = z.string().min(1, "Profile mode name is required");
var headline = z.string().max(50, "Headline limited to 50 characters");
var bio = z.string().max(1e3, "Bio limited to 1000 characters").optional();
var link = z.object({
  url: z.string().url({ message: "Please enter a valid URL." }),
  text: z.string().optional()
});
var links = z.array(link).optional();
var schemaUserSignUp = z.object({
  fullname,
  username,
  email,
  password,
  remember
});
var schemaUserLogIn = z.object({
  email,
  password,
  remember,
  redirectTo
});
var schemaUserUsername = z.object({ id, username });
var schemaUserFullName = z.object({ id, fullname });
var schemaUserNickName = z.object({ id, nickname });
var schemaUserEmail = z.object({ id, email });
var schemaUserProfileModeName = z.object({ id, modeName });
var schemaUserProfileHeadline = z.object({ id, headline });
var schemaUserProfileBio = z.object({ id, bio });
var schemaUserProfileLinks = z.object({ id, links });
var schemaUserPassword = z.object({
  id,
  currentPassword,
  password,
  confirmPassword
}).superRefine(({ password: password2, confirmPassword: confirmPassword2 }, ctx) => {
  if (password2 !== confirmPassword2) {
    ctx.addIssue({
      path: ["confirmPassword"],
      code: "custom",
      message: "The passwords did not match"
    });
  }
});
var schemaUserUpdateTags = z.object({
  id,
  tags
});
var schemaRootUserUpdate = z.object({
  id,
  email,
  username,
  fullname,
  nickname,
  links,
  roleSymbol
});
var issueUsernameUnallowed = {
  path: ["username"],
  code: z.ZodIssueCode.custom,
  message: "Username is not allowed, please change"
};

export {
  schemaUserLogIn,
  schemaUserUsername,
  schemaUserFullName,
  schemaUserNickName
};
//# sourceMappingURL=/build/_shared/chunk-YZM4AKJB.js.map
