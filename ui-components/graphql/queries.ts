/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getJoke = /* GraphQL */ `
  query GetJoke($id: ID!) {
    getJoke(id: $id) {
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
export const listJokes = /* GraphQL */ `
  query ListJokes(
    $filter: ModelJokeFilterInput
    $id: ID
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listJokes(
      filter: $filter
      id: $id
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        body
        createdAt
        date
        id
        owner
        punchline
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
