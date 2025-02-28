/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCurrentUser = /* GraphQL */ `
  mutation CreateCurrentUser(
    $condition: ModelCurrentUserConditionInput
    $input: CreateCurrentUserInput!
  ) {
    createCurrentUser(condition: $condition, input: $input) {
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
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $condition: ModelPostConditionInput
    $input: CreatePostInput!
  ) {
    createPost(condition: $condition, input: $input) {
      content
      createdAt
      id
      owner
      updatedAt
      __typename
    }
  }
`;
export const deleteCurrentUser = /* GraphQL */ `
  mutation DeleteCurrentUser(
    $condition: ModelCurrentUserConditionInput
    $input: DeleteCurrentUserInput!
  ) {
    deleteCurrentUser(condition: $condition, input: $input) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $condition: ModelPostConditionInput
    $input: DeletePostInput!
  ) {
    deletePost(condition: $condition, input: $input) {
      content
      createdAt
      id
      owner
      updatedAt
      __typename
    }
  }
`;
export const updateCurrentUser = /* GraphQL */ `
  mutation UpdateCurrentUser(
    $condition: ModelCurrentUserConditionInput
    $input: UpdateCurrentUserInput!
  ) {
    updateCurrentUser(condition: $condition, input: $input) {
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $condition: ModelPostConditionInput
    $input: UpdatePostInput!
  ) {
    updatePost(condition: $condition, input: $input) {
      content
      createdAt
      id
      owner
      updatedAt
      __typename
    }
  }
`;
