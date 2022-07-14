import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";

@TypeGraphQL.ObjectType("Restaurants", {
  isAbstract: true
})
export class Restaurants {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  id!: bigint;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  rating!: bigint;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  guide!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  img!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  link!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  location!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  lat?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  long?: number | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  year!: bigint;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  cuisine!: string;
}
