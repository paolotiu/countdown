import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import * as types from '@modules/index';
import { makeSchema } from 'nexus';
import path from 'path';

const startServer = async () => {
  const app = express();

  const schema = makeSchema({
    types,
    sourceTypes: {
      modules: [{ module: '.prisma/client', alias: 'PrismaClient' }],
    },
    outputs: {
      typegen: path.join(
        __dirname,
        '../node_modules/@types/nexus-typegen/index.d.ts'
      ),
      schema: path.join(__dirname, './api.graphql'),
    },
  });

  const apolloServer = new ApolloServer({
    schema,
  });

  apolloServer.start();

  apolloServer.applyMiddleware({ app });

  await new Promise((resolve) =>
    app.listen({ port: 4000 }, () => resolve(null))
  );

  console.log(
    `🎉 Server ready at http://localhost:4000${apolloServer.graphqlPath}`
  );
};

startServer();
