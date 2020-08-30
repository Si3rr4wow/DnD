const {
  getWikiaArticleResolver,
  searchWikiaArticlesResolver
} = require('../resolvers/wikia-article')

module.exports = {
  getWikiaArticle: getWikiaArticleResolver,
  searchWikiaArticles: searchWikiaArticlesResolver
}
