import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

const schema = a.schema({
  User: a
    .model({
      id: a.id(),
      sub: a.string(),
      name: a.string(),
      email: a.email(),
      profile: a.string(),
      birthdate: a.date(),
    }).authorization((allow) => [
      allow.publicApiKey(),
      // allow.authenticated().to(["read"]),
      // allow.ownerDefinedIn("profileOwner"),

    ])
});

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
