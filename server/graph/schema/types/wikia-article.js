module.exports = `
type WikiaSearchResult {
  id: Int
  title: String
  snippet: String
  url: String
}

type WikiaSearchResults {
  batches: Int
  currentBatch: Int
  next: Int
  total: Int
  items: [WikiaSearchResult]
}

type WikiaAtricleContent {
  type: String
  text: String
}

type WikiaArticleImage {
  src: String
  caption: String
}

type WikiaArticleSection {
  title: String
  level: Int
  content: [WikiaAtricleContent]
  images: [WikiaArticleImage]
}

type WikiaArticle {
  _id: ID!
  sections: [WikiaArticleSection]
}`
