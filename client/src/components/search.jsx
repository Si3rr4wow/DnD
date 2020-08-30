import React from 'react'
import { QueryRenderer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro'

import environment from '../relay/environment'

const Search = ({ _id }) => {
  return (
    <QueryRenderer
      environment={environment}
      query={graphql`
        query getWikiaArticleQuery($_id: ID!) {
          sections {
            images {
              src
              caption
            }
          }
        }
      `}
      variables={{_id}}
      render={({error, props}) => {
        console.log(props)
        if (error) {
          return <div>Error!</div>;
        }
        if (!props) {
          return <div>Loading...</div>;
        }
        return <div>first section title: {props.sections[0].title}</div>;
      }} />
  )
}

export default Search
