/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPlant = /* GraphQL */ `
  query GetPlant($id: ID!) {
    getPlant(id: $id) {
      id
      name
      lastWatered
      nextWatered
      photo
      createdAt
      updatedAt
    }
  }
`;
export const listPlants = /* GraphQL */ `
  query ListPlants(
    $filter: ModelPlantFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlants(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        lastWatered
        nextWatered
        photo
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
