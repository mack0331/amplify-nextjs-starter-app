/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateJoke = /* GraphQL */ `
  subscription OnCreateJoke(
    $filter: ModelSubscriptionJokeFilterInput
    $owner: String
  ) {
    onCreateJoke(filter: $filter, owner: $owner) {
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
export const onDeleteJoke = /* GraphQL */ `
  subscription OnDeleteJoke(
    $filter: ModelSubscriptionJokeFilterInput
    $owner: String
  ) {
    onDeleteJoke(filter: $filter, owner: $owner) {
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
export const onUpdateJoke = /* GraphQL */ `
  subscription OnUpdateJoke(
    $filter: ModelSubscriptionJokeFilterInput
    $owner: String
  ) {
    onUpdateJoke(filter: $filter, owner: $owner) {
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
