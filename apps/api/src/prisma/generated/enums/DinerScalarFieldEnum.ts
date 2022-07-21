import * as TypeGraphQL from "type-graphql";

export enum DinerScalarFieldEnum {
  id = "id",
  restaurantId = "restaurantId",
  name = "name",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(DinerScalarFieldEnum, {
  name: "DinerScalarFieldEnum",
  description: undefined,
});
