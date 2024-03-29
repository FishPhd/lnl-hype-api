import { Arg, Ctx, Mutation, Query, Resolver } from 'type-graphql';
import { Context } from '../context';
import { Restaurant } from '../generated/models/Restaurant';

@Resolver()
export class RestaurantResolver {
  @Query(() => [Restaurant], { nullable: true })
  async restaurants(@Ctx() { prisma }: Context): Promise<Restaurant[] | null> {
    return prisma.restaurant.findMany({where : {id: 2}, include: {diners: true}})
  }

  @Query(() => [Restaurant], { nullable: true })
  async restaurantsByCuisine(
    @Ctx() { prisma }: Context, 
    @Arg("cuisine") cuisine: string): Promise<Restaurant[] | null> {
    return prisma.restaurant.findMany({where: {cuisine}})
  }
}