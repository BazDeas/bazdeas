import React from 'react'
import styled from 'styled-components'
import bp from '../brand/breakpoints'
import colors from '../brand/colors'

import Header from './Header'

const Container = styled.div`

  padding: 2rem;

  .title {
    transform: translateX(-4px);
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

  .subtitle {
    font-weight: 300;
    font-size: 18px;
    color: #606060;
    letter-spacing: -0.1px;
    line-height: 1.4;
    .contact-button {
      color: #151515;
      font-weight: 500;
      &:hover {
        color: ${colors.primary};
      }
    }
  }


  @media ${bp.large} {
    width: 1280px; margin: 0 auto;
    .title {
      transform: translateX(-16px);
      .first-word, .second-word {
        font-size: 164px;
        letter-spacing: -4px;
      }
      .third-word {
        font-size: 200px;
        letter-spacing: -13px;
      }
    }
    .subtitle {
      font-size: 27px;
      font-weight: 100;
      width: 50%;
      .contact-button {
        letter-spacing: 0.1px;
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
      <h3 className="subtitle">I work with startups and entrepreneurs on design and strategy. Need help on a project? <a href="/" className="contact-button">Let's talk</a></h3>
    </Container>
  )
}
