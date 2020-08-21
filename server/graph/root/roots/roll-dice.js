const namespace = require('../../namespace')
const resolver = require('../resolvers/roll-dice')

const root = {
  [namespace.rollDice]: resolver
}

module.exports = root
