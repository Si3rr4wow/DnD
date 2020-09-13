/*
  The way a query works in a nutshell is that for every object returned, it will
  call a resolver function for requested attributes, and repeat the process on
  the returned objects until only scalar types (Int, String…) are left.

  https://engineering.zalando.com/posts/2017/02/building-a-relay-compatible-graphql-server.html
*/

// const fs = require('fs')
// const bodyParser = require('body-parser')
const {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInterfaceType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLEnumType,
  GraphQLList,
  GraphQLID,
  GraphQLInt,
  GraphQLBoolean
} = require('graphql')
const { connectionFromArray } = require('graphql-relay')
const express = require('express')
const { graphqlHTTP } = require('express-graphql');
const api = require('./api')

// const Schema = String(fs.readFileSync('./data/schema.graphql'))
// const jsSchema = buildSchema(Schema);
//
// const queryResolver = {
//   Article: ({ id }) => api.fetchArticle(id),
//   Articles: () => api.fetchArticles(),
//   node: ({ id }) => api.fetchArticle(id)
// };

const nodeType = new GraphQLInterfaceType({
  name: 'Node',
  fields: {
    id: { type: GraphQLString }
  }
})

const brandType = new GraphQLObjectType({
  name: 'Brand',
  fields: {
    name: { type: GraphQLString },
    logoUrl: { type: GraphQLString }
  }
})

const genderEnum = new GraphQLEnumType({
  name: 'Gender',
  values: {
    MALE: { value: 'MALE' },
    FEMALE: { value: 'FEMALE' }
  }
})

const imageType = new GraphQLObjectType({
  name: 'Image',
  fields: {
    thumbnailUrl: { type: GraphQLString },
    smallUrl: { type: GraphQLString },
    mediumUrl: { type: GraphQLString },
    largeUrl: { type: GraphQLString }
  }
})

/*
  This isTypeOf definition is very simple because because there is only one type
  that can be interfaced with via the node. This would be the place to impliment
  type discrimination logic.

  When adding a new type try prefacing distributed ids with a 3 character string
  representing its underlying type.
*/

const pageInfoType = new GraphQLObjectType({
  name: 'PageInfo',
  fields: {
    hasNextPage: { type: GraphQLBoolean },
    hasPreviousPage: { type: GraphQLBoolean }
  }
})

const articleEdgeType = new GraphQLObjectType({
  name: 'ArticleEdge',
  fields: {
    node: { type: nodeType },
    cursor: { type: GraphQLID }
  }
})

const articleConnectionType = new GraphQLObjectType({
  name: 'ArticleConnection',
  fields: {
    pageInfo: { type: pageInfoType },
    edges: { type: new GraphQLList(articleEdgeType) }
  }
})

const articleType = new GraphQLObjectType({
  name: 'Article',
  interfaces: [nodeType],
  isTypeOf: value => !!(value.id),
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    thumbnailUrl: { type: GraphQLString },
    brand: { type: brandType },
    genders: { type: new GraphQLList(genderEnum) },
    images: { type: new GraphQLList(imageType) },
    recommendations: {
      type: articleConnectionType,
      args: {
        first: { type: GraphQLInt },
        last: { type: GraphQLInt },
        before: { type: GraphQLID },
        after: { type: GraphQLID }
      },
      resolve: (article, args) => {
        console.log('resolver')
        return connectionFromArray(
          api.fetchRecommendations(article.id),
          args
        )
      }
    }
  },
})

/*
  Notice that resolvers and arguments are no longer required for rootQueryFields
  once they are accessible via a node interface.
*/

const queryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    node: {
      type: nodeType,
      args: {
        id: { type: GraphQLString }
      },
      resolve: (_, { id }) => api.fetchNode(id)
    },
    Articles: {
      type: new GraphQLList(articleType),
      // resolve: () => api.fetchArticles()
    },
    Article: {
      type: articleType,
      // args: {
      //   id: { type: GraphQLString }
      // },
      // resolve: (_, { id }) => {
      //   return api.fetchArticle(id)
      // }
    }
  }
})

const schema = new GraphQLSchema({
  query: queryType
})

const app = express()
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(process.env.PORT || 3001);
