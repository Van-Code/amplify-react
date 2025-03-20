/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser(
    $filter: ModelSubscriptionUserFilterInput
    $profileOwner: String
  ) {
    onCreateUser(filter: $filter, profileOwner: $profileOwner) {
      birthdate
      createdAt
      email
      id
      name
      about
      profileOwner
      sub
      updatedAt
      __typename
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser(
    $filter: ModelSubscriptionUserFilterInput
    $profileOwner: String
  ) {
    onDeleteUser(filter: $filter, profileOwner: $profileOwner) {
      birthdate
      createdAt
      email
      id
      name
      owner
      about
      profileOwner
      sub
      updatedAt
      __typename
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser(
    $filter: ModelSubscriptionUserFilterInput
    $profileOwner: String
  ) {
    onUpdateUser(filter: $filter, profileOwner: $profileOwner) {
      birthdate
      createdAt
      email
      id
      name
      owner
      about
      profileOwner
      sub
      updatedAt
      __typename
    }
  }
`;
