import { Ctx, Query, Resolver } from 'type-graphql';
import { Context } from '../context';
import { Restaurants } from '../generated/models/Restaurants';
@Resolver()
export class RestaurantResolver {
 @Query(() => [Restaurants], { nullable: true })
 async restaurants(@Ctx() { prisma }: Context): Promise<Restaurants[] | null> {
    return prisma.restaurants.findMany();
 }
}