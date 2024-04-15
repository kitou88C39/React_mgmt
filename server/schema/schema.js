const { query } = require('express');
const { projects, clients } = require('../sampleData.js');

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphOLSchema,
  GraphQLNonNull,
  GraphQLList,
} = require('graphql');

//Client Type
const ClientType = new GraphQLObjectType({
  name: 'Clinet',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    clients: {
      type: new GraphQLList(ClientType),
    },
    client: {
      type: ClientType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return clients.find((client) => client.id === args.id);
      },
    },
  },
});

module.exports = new GraphOLSchema({
  query: RootQuery,
});
