import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Diner } from "../models/Diner";

@TypeGraphQL.ObjectType("Restaurant", {
  isAbstract: true
})
export class Restaurant {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  id!: bigint;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  rating?: bigint | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  guide?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  img?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  link?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  location?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  cuisine?: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  lat?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  long?: number | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  year?: bigint | null;

  @TypeGraphQL.Field(_type => [Diner], {
    nullable: true
  })
  diners?: Diner[];
}
