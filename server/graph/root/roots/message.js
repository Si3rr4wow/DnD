const {
  getMessageResolver,
  getAnyMessageResolver,
  createMessageResolver,
  updateMessageResolver
} = require('../resolvers/message')

module.exports = {
  getMessage: getMessageResolver,
  getAnyMessage: getAnyMessageResolver,
  createMessage: createMessageResolver,
  updateMessage: updateMessageResolver
}
