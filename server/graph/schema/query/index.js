const helloWorld = require('./hello-world')
const rollDice = require('./roll-dice')
const message = require('./message')

const getQuery = () => `type Query {
  ${helloWorld}
  ${rollDice}
  ${message}
}`

module.exports = {
  getQuery,
  helloWorld,
  rollDice
}
