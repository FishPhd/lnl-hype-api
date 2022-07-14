import { Ctx, Query, Resolver } from 'type-graphql';
import { Context } from '../context';
import { Restaurant } from '../generated/models/Restaurant';

@Resolver()
export class RestaurantResolver {
  @Query(() => [Restaurant], { nullable: true })
  async restaurants(@Ctx() {prisma }: Context): Promise<Restaurant[] | null> {
    return prisma.restaurant.findMany();
  }
}
