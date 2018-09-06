import React from 'react'
import styled from 'styled-components'
import bp from '../brand/breakpoints'
import colors from '../brand/colors'

import Container from './Container'

const Styling = styled.div`

  @media ${bp.large} {

  }
`

export default () => {
  return(
    <Container separator={false}>
      <Styling>
        <h4>Let's Make Great Things Together</h4>
        <h5>I'd love to hear about your project at <a href="" className="email-address">hello@bazdeas.com</a></h5>
      </Styling>
    </Container>
  )
}
