import 'reflect-metadata';
import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';
import { PrismaClient } from '@prisma/client';
import { RestaurantResolver } from './prisma/resolvers/RestaurantResolver';
import { DinerResolver } from './prisma/resolvers/DinerResolver';

async function startApolloServer() {
  const prisma = new PrismaClient();

  const server = new ApolloServer({
    schema: await buildSchema({
      resolvers: [RestaurantResolver, DinerResolver],
      validate: false,
    }),
    context: () => ({ prisma }),
    csrfPrevention: true,
  });


  const { url } = await server.listen(4000);
  console.log(`🚀  Server ready at ${url}`);
}

startApolloServer().catch((err) => {
  console.error(err);
});