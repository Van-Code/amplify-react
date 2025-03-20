/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $condition: ModelUserConditionInput
    $input: CreateUserInput!
  ) {
    createUser(condition: $condition, input: $input) {
      birthdate
      createdAt
      email
      id
      name
      about
      sub
      updatedAt
      __typename
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $condition: ModelUserConditionInput
    $input: DeleteUserInput!
  ) {
    deleteUser(condition: $condition, input: $input) {
      birthdate
      createdAt
      email
      id
      name
      about
      sub
      updatedAt
      __typename
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $condition: ModelUserConditionInput
    $input: UpdateUserInput!
  ) {
    updateUser(condition: $condition, input: $input) {
      birthdate
      createdAt
      email
      id
      name
      about
      sub
      updatedAt
      __typename
    }
  }
`;
