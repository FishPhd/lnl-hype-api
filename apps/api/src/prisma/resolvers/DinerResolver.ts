import { Arg, Ctx, Mutation, Query, Resolver } from 'type-graphql';
import { Context } from '../context';
import { Diner } from '../generated/models/Diner';

@Resolver()
export class DinerResolver {
  @Query(() => [Diner], { nullable: true })
  async diners(@Ctx() { prisma }: Context): Promise<Diner[] | null> {
    return prisma.diner.findMany()
  }

  @Mutation(() => Diner)
  async addDiner(
    @Arg("restaurantId") restaurantId: number, 
    @Arg("name") name: string, 
    @Ctx() { prisma}: Context): Promise<Diner> {
    return await prisma.diner.create({data: {name, restaurantId}})
  }
}