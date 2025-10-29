import { gql } from "graphql-tag";

export const typeDefs = gql`
  type Employee {
    id: ID!
    name: String!
    position: String!
    department: String!
    salary: Float!
  }

  type Query {
    getAllEmployees: [Employee]
    getEmployeeDetails(id: ID!): Employee
    getEmployeesByDepartment(department: String!): [Employee]
  }

  type Mutation {
    addEmployee(name: String!, position: String!, department: String!, salary: Float!): Employee
  }
`;

export const resolvers = {
  Query: {
    getAllEmployees: async (_, __, { db }) => {
      return db.collection("employees").find().toArray();
    },
    getEmployeeDetails: async (_, { id }, { db }) => {
      return db.collection("employees").findOne({ id });
    },
    getEmployeesByDepartment: async (_, { department }, { db }) => {
      return db.collection("employees").find({ department }).toArray();
    },
  },
  Mutation: {
    addEmployee: async (_, { name, position, department, salary }, { db }) => {
      const newEmployee = { id: Date.now().toString(), name, position, department, salary };
      await db.collection("employees").insertOne(newEmployee);
      return newEmployee;
    },
  },
};
