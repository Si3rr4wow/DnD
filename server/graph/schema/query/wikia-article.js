const query = `
  GetWikiaArticle(_id: ID!): WikiaArticle
  searchWikiaArticles(searchTerm: String): WikiaSearchResults
`
module.exports = query
