const { projects, clients } = require('../sampleData.js');

const { GraphQLObjectType } = require('graphql');

//Client Type
const ClientType = new GraphQLObjectType({
  name: 'Clinet',
});
