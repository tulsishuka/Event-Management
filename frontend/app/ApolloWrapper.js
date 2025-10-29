"use client";
import React from "react";
import { ApolloProvider } from "@apollo/client";
import client from "../lib/apolloClient";

export default function ApolloWrapper({ children }) {
  if (!client) return null; 
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
