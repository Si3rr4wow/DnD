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
  GraphQLID
} = require('graphql')
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
    images: { type: new GraphQLList(imageType) }
  }
})

const schemaElems = {
  articleType,
  imageType,
  brandType,
  nodeType,
  genderEnum
}

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
      resolve: () => api.fetchArticles()
    },
    Article: {
      type: articleType,
      args: {
        id: { type: GraphQLString }
      },
      resolve: (_, { id }) => {
        return api.fetchArticle(id)
      }
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
