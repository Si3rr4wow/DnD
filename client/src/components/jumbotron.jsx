import styled from '@emotion/styled'

import BorderDiv from './border-div'

const Jumbotron = styled(BorderDiv)`
  padding: 2rem;
  margin: auto;
  display: flex;
  flex-direction: column;

  user-select: none;

  h1 {
    margin: 0;
    font-weight: 100;
    font-size: 5rem;
    text-align: center;
  }
  div {
    margin: auto;
  }
`

export default Jumbotron
