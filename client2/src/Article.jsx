import React from 'react'
import { graphql, QueryRenderer } from 'react-relay'

import environment from './relay-environment'

const Article = () => {
  return (
    <QueryRenderer
    environment={environment}
    query={graphql`
      query ArticleQuery {
        node(id: "art_3"){
          id
          ...on Article {
            name
            genders
            brand {
              name
            }
            recommendations(first: 1) {
              edges {
                node {
                  id
                }
              }
            }
          }
        }
      }
      `}
      variables={{}}
      render={({error, props}) => {
        console.log('PROPS', props)
        if (error) {
          return <div>Error!</div>
        }
        if (!props) {
          return <div>Loading...</div>
        }
        return (
          <div>
            <h3>{props.node.name}<i style={{color: 'grey'}}> - {props.node.brand.name}</i></h3>
          </div>
        )
      }}
      />
  )
}

export default Article
