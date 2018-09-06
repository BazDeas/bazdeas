import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  padding: 2rem;
`

export default () => {
  return(
    <Container>
      <h2>Baz Deas</h2>
      <nav className="navigation">
        <a href="/">Hello</a>
        <a href="https://medium.com/@bazdeas">Writing</a>
      </nav>
    </Container>
  )
}
