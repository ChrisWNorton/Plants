/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreatePlantInput = {
  id?: string | null,
  name: string,
  lastWatered: string,
  nextWatered: string,
  photo: string,
};

export type ModelPlantConditionInput = {
  name?: ModelStringInput | null,
  lastWatered?: ModelStringInput | null,
  nextWatered?: ModelStringInput | null,
  photo?: ModelStringInput | null,
  and?: Array< ModelPlantConditionInput | null > | null,
  or?: Array< ModelPlantConditionInput | null > | null,
  not?: ModelPlantConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UpdatePlantInput = {
  id: string,
  name?: string | null,
  lastWatered?: string | null,
  nextWatered?: string | null,
  photo?: string | null,
};

export type DeletePlantInput = {
  id?: string | null,
};

export type ModelPlantFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  lastWatered?: ModelStringInput | null,
  nextWatered?: ModelStringInput | null,
  photo?: ModelStringInput | null,
  and?: Array< ModelPlantFilterInput | null > | null,
  or?: Array< ModelPlantFilterInput | null > | null,
  not?: ModelPlantFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type CreatePlantMutationVariables = {
  input: CreatePlantInput,
  condition?: ModelPlantConditionInput | null,
};

export type CreatePlantMutation = {
  createPlant:  {
    __typename: "Plant",
    id: string,
    name: string,
    lastWatered: string,
    nextWatered: string,
    photo: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePlantMutationVariables = {
  input: UpdatePlantInput,
  condition?: ModelPlantConditionInput | null,
};

export type UpdatePlantMutation = {
  updatePlant:  {
    __typename: "Plant",
    id: string,
    name: string,
    lastWatered: string,
    nextWatered: string,
    photo: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePlantMutationVariables = {
  input: DeletePlantInput,
  condition?: ModelPlantConditionInput | null,
};

export type DeletePlantMutation = {
  deletePlant:  {
    __typename: "Plant",
    id: string,
    name: string,
    lastWatered: string,
    nextWatered: string,
    photo: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetPlantQueryVariables = {
  id: string,
};

export type GetPlantQuery = {
  getPlant:  {
    __typename: "Plant",
    id: string,
    name: string,
    lastWatered: string,
    nextWatered: string,
    photo: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPlantsQueryVariables = {
  filter?: ModelPlantFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPlantsQuery = {
  listPlants:  {
    __typename: "ModelPlantConnection",
    items:  Array< {
      __typename: "Plant",
      id: string,
      name: string,
      lastWatered: string,
      nextWatered: string,
      photo: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreatePlantSubscription = {
  onCreatePlant:  {
    __typename: "Plant",
    id: string,
    name: string,
    lastWatered: string,
    nextWatered: string,
    photo: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePlantSubscription = {
  onUpdatePlant:  {
    __typename: "Plant",
    id: string,
    name: string,
    lastWatered: string,
    nextWatered: string,
    photo: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePlantSubscription = {
  onDeletePlant:  {
    __typename: "Plant",
    id: string,
    name: string,
    lastWatered: string,
    nextWatered: string,
    photo: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
