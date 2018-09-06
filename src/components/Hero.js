import React from 'react'
import styled from 'styled-components'
import bp from '../brand/breakpoints'
import colors from '../brand/colors'

import Header from './Header'

const Container = styled.div`

  padding: 2rem;

  .title {
    line-height: 0.9;
    padding: 3rem 0;
    .first-word, .second-word {
      font-weight: 300;
      font-size: 64px;
      display: block;
      color: #333333;
      letter-spacing: -1.5px;
    }
    .third-word {
      font-weight: 600;
      font-size: 80px;
      color: #0D0D0D;
      letter-spacing: -5px;
    }
  }


  @media ${bp.large} {
    width: 1280px; margin: 0 auto;
    .title {
      .first-word, .second-word {
        font-size: 164px;
        letter-spacing: -4px;
      }
      .third-word {
        font-size: 200px;
        letter-spacing: -13px;
      }
    }
  }
`

export default () => {
  return(
    <Container>
      <Header />
      <h1 className="title">
        <span className="first-word">Digital</span>
        <span className="second-word">Product</span>
        <span className="third-word">Designer</span>
      </h1>
      
    </Container>
  )
}
