import { defineStorage } from "@aws-amplify/backend";

export const storage = defineStorage({
  name: "amplify-react-files",
  access: (allow) => ({
    "images/*": [allow.authenticated.to(["read", "write", "delete"])],
    "profile-pictures/*": [allow.authenticated.to(["read", "write", "delete"])],
  }),
});