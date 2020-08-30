const { buildSchema } = require('graphql')
const { getQuery } = require('./query')
const { getMutation } = require('./mutation')
const { getTypes } = require('./types')
const { getInputs } = require('./inputs')

const schemaString = `
  ${getQuery()}

  ${getMutation()}

  ${getTypes()}

  ${getInputs()}
`

const getSchema = () => buildSchema(schemaString)

module.exports = getSchema
