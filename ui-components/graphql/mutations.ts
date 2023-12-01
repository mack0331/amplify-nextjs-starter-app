/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createJoke = /* GraphQL */ `
  mutation CreateJoke(
    $condition: ModelJokeConditionInput
    $input: CreateJokeInput!
  ) {
    createJoke(condition: $condition, input: $input) {
      body
      createdAt
      date
      id
      owner
      punchline
      updatedAt
      __typename
    }
  }
`;
export const deleteJoke = /* GraphQL */ `
  mutation DeleteJoke(
    $condition: ModelJokeConditionInput
    $input: DeleteJokeInput!
  ) {
    deleteJoke(condition: $condition, input: $input) {
      body
      createdAt
      date
      id
      owner
      punchline
      updatedAt
      __typename
    }
  }
`;
export const updateJoke = /* GraphQL */ `
  mutation UpdateJoke(
    $condition: ModelJokeConditionInput
    $input: UpdateJokeInput!
  ) {
    updateJoke(condition: $condition, input: $input) {
      body
      createdAt
      date
      id
      owner
      punchline
      updatedAt
      __typename
    }
  }
`;
