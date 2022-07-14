import 'reflect-metadata';
import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';
import { PrismaClient } from '@prisma/client';

async function startApolloServer() {
  const prisma = new PrismaClient();

  const server = new ApolloServer({
    schema: await buildSchema({
      resolvers: undefined,
      validate: false,
    }),
    context: () => ({ prisma }),
    csrfPrevention: true,
  });


  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
}

startApolloServer().catch((err) => {
  console.error(err);
});