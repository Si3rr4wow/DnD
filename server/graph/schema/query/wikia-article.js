const query = `
  getWikiaArticle(_id: ID!): WikiaArticle
  searchWikiaArticles(searchTerm: String): WikiaSearchResults
`
module.exports = query
