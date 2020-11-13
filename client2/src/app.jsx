import React, { useEffect } from 'react'
import { graphql, useFragment } from 'react-relay/hooks'

import ArticleList from './ArticleList.jsx'
import Article from './Article.jsx'

const App = () => {
  const data = useFragment(graphql`
    fragment app on Viewer {
      articles {
        edges {
          node {
            id
          }
        }
      }
    }
  `)
  console.log('DATA', data)

  return (
    <div>
      <ArticleList articles={data}/>
      <Article/>
    </div>
  )
}

export default App
