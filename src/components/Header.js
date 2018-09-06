import React from 'react'
import styled from 'styled-components'
import bp from '../brand/breakpoints'
import colors from '../brand/colors'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .branding {
    font-size: 20px;
    letter-spacing: -0.5px;
    font-weight: 500;
    a {
      color: #434343;
      text-decoration: none;
      &:hover {
        color: ${colors.primary};
      }
    }
  }

  .navigation {
    a {
      text-decoration: none;
      font-weight: 300;
      font-size: 16px;

      color: #8D8D8D;
      letter-spacing: 0.5px;
      &:hover {
        color: ${colors.primary};
      }
    }
  }

  @media ${bp.large} {

    width: 1280px;
    margin: 0 auto;
    padding: 4rem 0;

    .branding {
      font-size: 32px;
    }

    .navigation {
      a {
      font-size: 20px;
      }
    }

  }
`

export default () => {
  return(
    <Container>
      <h2 className="branding">
        <a href="/">Baz Deas</a>
      </h2>
      <nav className="navigation">
        <a href="https://medium.com/@bazdeas">Writing</a>
      </nav>
    </Container>
  )
}
