/*
  The way a query works in a nutshell is that for every object returned, it will
  call a resolver function for requested attributes, and repeat the process on
  the returned objects until only scalar types (Int, String…) are left.

  https://engineering.zalando.com/posts/2017/02/building-a-relay-compatible-graphql-server.html

  https://github.com/prayerslayer/zalando-graphql-relay
*/

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

function toConnection(apiCall, params) {
  const {before, after, first, last} = params;
  return apiCall.then(items => {
    // before/after filter
    let filteredItems = items
    if (before || after) {
      let beforeIdx = items.findIndex(r => r.id === before);
      let afterIdx = items.findIndex(r => r.id === after);
      if (beforeIdx === -1) {
        beforeIdx = Infinity
      }
      filteredItems = items.filter((_, i) => i < beforeIdx && i > afterIdx)
    }
    const pageInfo = {
      hasPreviousPage: !last ? false : filteredItems.length > last,
      hasNextPage: !first ? false : filteredItems.length > first
    };
    return [filteredItems, pageInfo]
  })
  .then(([items, pageInfo]) => {
    // first/last filter
    if (first || last) {
      if (first > 0) {
        return [items.slice(0, first), pageInfo]
      } else if (last > 0) {
        return [items.slice(last * -1), pageInfo]
      }
      throw new Error(`first or last has zero or negative value`)
    }
    return [items, pageInfo]
  })
  .then(([items, pageInfo]) => ({
    pageInfo,
    edges: items.map(r => ({
      node: r,
      cursor: r.id
    }))
  }))
}

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
        return connectionFromArray(
          api.fetchArticleRecommendations(article.id),
          args
        )
      }
    }
  },
})

const viewerType = new GraphQLObjectType({
  name: 'Viewer',
  fields: {
    article: {
      type: articleType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID)
        }
      },
      resolve: (_, {id}) => api.fetchArticle(id)
    },
    articles: {
      type: articleConnectionType,
      args: {
        first: {
          type: GraphQLInt
        },
        last: {
          type: GraphQLInt
        },
        before: {
          type: GraphQLID
        },
        after: {
          type: GraphQLID
        }
      },
      resolve: (_, params) => toConnection(api.fetchArticles(), params)
    }
  }
});

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
    Viewer: {
      type: viewerType,
      resolve: () => ({
        articles: {},
        article: {}
      })
    },
    Articles: {
      type: articleConnectionType,
      args: {
        first: {
          type: GraphQLInt
        },
        last: {
          type: GraphQLInt
        },
        before: {
          type: GraphQLID
        },
        after: {
          type: GraphQLID
        }
      },
      resolve: (_, params) => toConnection(api.fetchArticles(), params)
    },
    Article: {
      type: articleType
    }
  }
})

const schema = new GraphQLSchema({
  query: queryType
})

const app = express()

const corsOrigin = 'http://localhost:8080'
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', corsOrigin);
  res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, X-Auth-Token, Accept');
  next();
});

app.post('/graphql', graphqlHTTP({
  schema
}));

app.get('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(process.env.PORT || 3001);
