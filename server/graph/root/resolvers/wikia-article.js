const fetch = require('node-fetch')

exports.getWikiaArticleResolver = async ({ _id }) => {
  const res = await fetch(`https://forgottenrealms.fandom.com/api/v1/Articles/AsSimpleJson?id=${_id}`)
  const json = await res.json()
  return json
}

exports.searchWikiaArticlesResolver = async ({ searchTerm }) => {
  const res = await fetch(`https://forgottenrealms.fandom.com/api/v1/Search/List?query=${searchTerm}`)
  const json = await res.json()
  return json
}
