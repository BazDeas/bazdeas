import React from 'react'
import styled from 'styled-components'
import bp from '../brand/breakpoints'

const Container = styled.div`
  padding: 2rem;


  .branding {
    font-size: 28px;
    letter-spacing: -0.42px;

    color: #434343;
    font-weight: 700;
  }

  @media ${bp.large} {

    .branding {
      font-size: 36px;
    }

  }
`

export default () => {
  return(
    <Container>
      <h2 className="branding">Baz Deas</h2>
      <nav className="navigation">
        <a href="/">Hello</a>
        <a href="https://medium.com/@bazdeas">Writing</a>
      </nav>
    </Container>
  )
}
