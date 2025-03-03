import { defineStorage } from "@aws-amplify/backend";

export const storage = defineStorage({
  name: "amplify-react-files",
  access: (allow) => ({
    "images/*": [allow.authenticated.to(["read"])],
    'profile-pictures/{entity_id}/*': [
      allow.guest.to(['read']),
      allow.entity('identity').to(['read', 'write', 'delete'])
    ],
  }),
});


