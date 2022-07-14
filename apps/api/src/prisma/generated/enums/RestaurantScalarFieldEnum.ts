import * as TypeGraphQL from "type-graphql";

export enum RestaurantScalarFieldEnum {
  id = "id",
  name = "name",
  rating = "rating",
  guide = "guide",
  img = "img",
  link = "link",
  location = "location",
  lat = "lat",
  long = "long",
  year = "year",
  cuisine = "cuisine"
}
TypeGraphQL.registerEnumType(RestaurantScalarFieldEnum, {
  name: "RestaurantScalarFieldEnum",
  description: undefined,
});
