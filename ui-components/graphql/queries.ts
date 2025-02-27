/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCurrentUser = /* GraphQL */ `
  query GetCurrentUser($id: ID!) {
    getCurrentUser(id: $id) {
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
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      content
      createdAt
      id
      owner
      updatedAt
      __typename
    }
  }
`;
export const listCurrentUsers = /* GraphQL */ `
  query ListCurrentUsers(
    $filter: ModelCurrentUserFilterInput
    $id: ID
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listCurrentUsers(
      filter: $filter
      id: $id
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $id: ID
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listPosts(
      filter: $filter
      id: $id
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        content
        createdAt
        id
        owner
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
