const {
  GetWikiaArticleResolver,
  searchWikiaArticlesResolver
} = require('../resolvers/wikia-article')

module.exports = {
  GetWikiaArticle: GetWikiaArticleResolver,
  searchWikiaArticles: searchWikiaArticlesResolver
}
