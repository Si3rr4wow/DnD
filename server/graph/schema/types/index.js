const message = require('./message')
const wikiaArticle = require('./wikia-article')

const getTypes = () => `
  ${message}
  ${wikiaArticle}
`

module.exports = {
  getTypes,
  message,
  wikiaArticle
}
