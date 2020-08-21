const namespace = require('../../namespace')
const resolver = require('../resolvers/hello-world')

module.exports = {
  [namespace.hello]: resolver
}
