import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

const schema = a.schema({
  User: a
    .model({
      id: a.id(),
      sub: a.string(),
      name: a.string(),
      email: a.email(),
      about: a.string(),
      birthdate: a.string(),
    }).authorization((allow) => [
      allow.publicApiKey(),
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
