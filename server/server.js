module.exports = {
  1: {
    id: 1,
    content: 'I am the default message.',
    author: 'Yahweh'
  }
};

require('dotenv').config()
const express = require('express')
require('./mongoose')
const Graph = require('./graph')

const app = express()
app.use('/graphql', Graph.buildGraph())

app.listen(4000)
console.log('Running a GraphQL API server at http://localhost:4000/graphql');
