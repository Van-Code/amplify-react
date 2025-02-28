import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

const schema = a.schema({
  Post: a.model({
    id: a.id(),
    content: a.string(),
  })
  .authorization(allow => [allow.owner()]),
  CurrentUser: a
    .model({
      name: a.string(),   
      email: a.email(),
      bio: a.string(),
      birthdate: a.date(),
      imagePath: a.string().default('./src/assets/avatar.jpg')
    })
    .authorization((allow) => [
      allow.ownerDefinedIn("profileOwner"), 
    ])
  })
;

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "apiKey",
    // API Key is used for a.allow.public() rules
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});
