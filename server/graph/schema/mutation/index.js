const message = require('./message')

const getMutation = () => `type Mutation {
  ${message}
}`

module.exports = {
  getMutation,
  message
}
