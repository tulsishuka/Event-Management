// import { ApolloServer } from "@apollo/server";
// import { startStandaloneServer } from "@apollo/server/standalone";
// import { typeDefs, resolvers } from "./schema.js";
// import { connectDB } from "./db.js";

// async function startServer() {
//   const db = await connectDB();

//   const server = new ApolloServer({ typeDefs, resolvers });

//   const { url } = await startStandaloneServer(server, {
//     listen: { port: 4000 },
//     context: async () => ({ db }),
//   });

//   console.log(`Server running at ${url}`);
// }

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
  });

  console.log(`🚀 Server ready at ${url}`);
};

startServer();
