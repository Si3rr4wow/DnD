const { graphqlHTTP } = require('express-graphql')

const namespace = require('./namespace')
const schema = require('./schema')
const root = require('./root')

module.exports = () => graphqlHTTP({
  schema: schema.getSchema(),
  rootValue: root.getRoot(),
  graphiql: process.env.NODE_ENV === 'development'
})
