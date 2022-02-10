const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Note {
    _id: ID
    name: String
    date: String
    noteData: String
    userId: User
  }

  type Query {
    users: [User]
    user(id: ID!): User
    me: User
    note(id: ID!): Note
    notes: [Note] 
  }

  type Mutation {
    addUser(email:String!, username:String!, password:String!): Auth
    login(email:String!, password:String!): Auth
    addNote(name:String!, noteData:String!): Note
    updateNote(id:ID!): Note
    deleteNote(id:ID!): Note
  }
`;

module.exports = typeDefs;
