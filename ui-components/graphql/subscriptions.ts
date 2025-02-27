/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCurrentUser = /* GraphQL */ `
  subscription OnCreateCurrentUser(
    $filter: ModelSubscriptionCurrentUserFilterInput
    $profileOwner: String
  ) {
    onCreateCurrentUser(filter: $filter, profileOwner: $profileOwner) {
      bio
      birthdate
      createdAt
      email
      id
      imagePath
      loginID
      name
      profileOwner
      sub
      updatedAt
      __typename
    }
  }
`;
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost(
    $filter: ModelSubscriptionPostFilterInput
    $owner: String
  ) {
    onCreatePost(filter: $filter, owner: $owner) {
      content
      createdAt
      id
      owner
      updatedAt
      __typename
    }
  }
`;
export const onDeleteCurrentUser = /* GraphQL */ `
  subscription OnDeleteCurrentUser(
    $filter: ModelSubscriptionCurrentUserFilterInput
    $profileOwner: String
  ) {
    onDeleteCurrentUser(filter: $filter, profileOwner: $profileOwner) {
      bio
      birthdate
      createdAt
      email
      id
      imagePath
      loginID
      name
      profileOwner
      sub
      updatedAt
      __typename
    }
  }
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost(
    $filter: ModelSubscriptionPostFilterInput
    $owner: String
  ) {
    onDeletePost(filter: $filter, owner: $owner) {
      content
      createdAt
      id
      owner
      updatedAt
      __typename
    }
  }
`;
export const onUpdateCurrentUser = /* GraphQL */ `
  subscription OnUpdateCurrentUser(
    $filter: ModelSubscriptionCurrentUserFilterInput
    $profileOwner: String
  ) {
    onUpdateCurrentUser(filter: $filter, profileOwner: $profileOwner) {
      bio
      birthdate
      createdAt
      email
      id
      imagePath
      loginID
      name
      profileOwner
      sub
      updatedAt
      __typename
    }
  }
`;
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost(
    $filter: ModelSubscriptionPostFilterInput
    $owner: String
  ) {
    onUpdatePost(filter: $filter, owner: $owner) {
      content
      createdAt
      id
      owner
      updatedAt
      __typename
    }
  }
`;
