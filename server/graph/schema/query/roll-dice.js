const namespace = require('../../namespace')

const query = `
  ${namespace.rollDice}(numDice: Int!, numSides: Int) : [Int]
`

module.exports = query
