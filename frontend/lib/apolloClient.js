"use client";
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";


const client = new ApolloClient({
  link: new HttpLink({
    // uri: "http://localhost:4000/graphql", 
     uri: "https://event-management-2-e1to.onrender.com/graphql", 
  }),
  cache: new InMemoryCache(),
});

export default client;
