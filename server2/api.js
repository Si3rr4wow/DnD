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
    images: []
  },
  "2": {
    id: "2",
    name: 'Article No. 2 Name',
    thumbnailUrl: 'https://img.articles.com/2',
    brand: {
      name: 'Brand2',
      logo: 'https://img.articles.com/Brand2'
    },
    genders: ['FEMALE'],
    images: []
  },
  "3": {
    id: "3",
    name: 'Article No. 3 Name',
    thumbnailUrl: 'https://img.articles.com/3',
    brand: {
      name: 'Brand3',
      logo: 'https://img.articles.com/Brand3'
    },
    genders: ['FEMALE'],
    images: []
  }
}

const universalize = (node, resourceKey) => {
  return {
    ...node,
    id: `${resourceKey}_${node.id}`
  }
}

const resourceMap = {
  'art': articles
}

exports.fetchNode = id => {
  const [resourceKey, _id] = id.split('_')
  const doc = resourceMap[resourceKey][_id]
  return universalize(doc, resourceKey)
}

exports.fetchArticleRecommendations = (id) => {
  const recommendations = { ...articles }
  const [, _id] = id.split('_')
  delete recommendations[_id]
  return Object.values(recommendations)
}
