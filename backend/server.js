
// import { ApolloServer } from "@apollo/server";
// import { startStandaloneServer } from "@apollo/server/standalone";
// import { typeDefs, resolvers } from "./schema.js";
// import { connectDB } from "./db.js";

// const startServer = async () => {
//   await connectDB();

//   const server = new ApolloServer({ typeDefs, resolvers });

//   const { url } = await startStandaloneServer(server, {
//     listen: { port: process.env.PORT || 3000 },
//   });

//   console.log(`🚀 Server ready at ${url}`);
// };

// startServer();



import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs, resolvers } from "./schema.js";
import { connectDB } from "./db.js";

const startServer = async () => {
  await connectDB();

  const server = new ApolloServer({ typeDefs, resolvers });

  const { url } = await startStandaloneServer(server, {
    listen: { port: process.env.PORT || 3000 },
    context: async ({ req, res }) => ({ req, res }),
    cors: {
      origin: "*", // allow requests from all origins
      credentials: true,
    },
  });

  console.log(`🚀 Server ready at ${url}`);
};

startServer();
