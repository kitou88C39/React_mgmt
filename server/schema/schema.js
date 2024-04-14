const { projects, clients } = require('../sampleData.js');

const { GraphQLObjectType, GraphQLID } = require('graphql');

//Client Type
const ClientType = new GraphQLObjectType({
  name: 'Clinet',
  fields: () => ({
    id: { type: GraphQLID },
  }),
});
