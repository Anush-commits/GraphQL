const graphql = require('graphql');
const { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLSchema } = graphql;
const axios = require('axios');


const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLString },
    firstName: { type: GraphQLString },
    age: { type: GraphQLInt }
  }
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLString } },
      resolve(parentValuw, args) {
        return axios.get(`http://localhost:3000/users/${args.id}`)
      }
    }
  }
});

module.exports =  new GraphQLSchema({
  query: RootQuery
}); 