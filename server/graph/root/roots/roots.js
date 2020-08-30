const helloWorld = require('./hello-world')
const rollDice = require('./roll-dice')
const message = require('./message')
const wikiaArticle = require('./wikia-article')

module.exports = {
  ...helloWorld,
  ...rollDice,
  ...message,
  ...wikiaArticle
}
