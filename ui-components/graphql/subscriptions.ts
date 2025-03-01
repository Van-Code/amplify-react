/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser(
    $filter: ModelSubscriptionUserFilterInput
    $profileOwner: String
  ) {
    onCreateUser(filter: $filter, profileOwner: $profileOwner) {
      bio
      birthdate
      createdAt
      email
      id
      imagePath
      name
      profileOwner
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser(
    $filter: ModelSubscriptionUserFilterInput
    $profileOwner: String
  ) {
    onDeleteUser(filter: $filter, profileOwner: $profileOwner) {
      bio
      birthdate
      createdAt
      email
      id
      imagePath
      name
      profileOwner
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser(
    $filter: ModelSubscriptionUserFilterInput
    $profileOwner: String
  ) {
    onUpdateUser(filter: $filter, profileOwner: $profileOwner) {
      bio
      birthdate
      createdAt
      email
      id
      imagePath
      name
      profileOwner
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
