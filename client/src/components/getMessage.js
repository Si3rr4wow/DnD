import React from 'react'
import { QueryRenderer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro'

import environment from '../relay/environment'

const Search = (props) => {
  const numDice = 3
  const _id = "5f3c34c5942b0155fcf9ecb1"

  return (
    <QueryRenderer
      environment={environment}
      query={graphql`
        query getMessageQuery($_id: ID!) {
          _id
        }
      `}
      variables={{_id}}
      render={({e, p}) => {
        console.log('props', p)
        if (e) {
          return <div>Error!</div>;
        }
        if (!p) {
          return <div>Loading...</div>;
        }
        return <div>first section title: {p}</div>;
      }} />
  )
}

export default Search
