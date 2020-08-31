const articles = {
  "1": {
    id: "1",
    name: 'Article No. 1 Name',
    thumbnailUrl: 'https://img.articles.com/1',
    brand: {
      name: 'Brand1',
      logo: 'https://img.articles.com/Brand1'
    },
    genders: ['MALE', 'FEMALE'],
    images: [],
    recommendations: []
  },
  "2": {
    id: "2",
    name: 'Article No. 2 Name',
    thumbnailUrl: 'https://img.articles.com/2',
    brand: {
      name: 'Brand2',
      logo: 'https://img.articles.com/Brand2'
    },
    genders: ['MALE', 'FEMALE'],
    images: [],
    recommendations: []
  },
  "3": {
    id: "3",
    name: 'Article No. 3 Name',
    thumbnailUrl: 'https://img.articles.com/3',
    brand: {
      name: 'Brand3',
      logo: 'https://img.articles.com/Brand3'
    },
    genders: ['MALE', 'FEMALE'],
    images: [],
    recommendations: []
  }
}

// curl -X POST -H "Content-Type: text/plain" -d "{ Article(id: 1) { name } }" http://localhost:3001/graphql -v
exports.fetchArticle = id => {
  return articles[id]
}

exports.fetchNode = id => {
  console.log('ID', id)
  return articles[id]
}

// curl -X POST -H "Content-Type: text/plain" -d "{ Articles{ name } }" http://localhost:3001/graphql -v
exports.fetchArticles = () => {
  console.log('fetch called')
  return Object.values(articles)
}
