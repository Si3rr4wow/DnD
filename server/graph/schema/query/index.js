const helloWorld = require('./hello-world')
const rollDice = require('./roll-dice')
const message = require('./message')
const wikiaArticle = require('./wikia-article')

const getQuery = () => `type Query {
  ${helloWorld}
  ${rollDice}
  ${message}
  ${wikiaArticle}
}`

module.exports = {
  getQuery,
  helloWorld,
  rollDice,
  wikiaArticle
}
