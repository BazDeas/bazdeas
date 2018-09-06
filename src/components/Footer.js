import React from 'react'
import styled from 'styled-components'
import bp from '../brand/breakpoints'
import colors from '../brand/colors'

import Container from './Container'

const Styling = styled.div`

  .title {
    font-weight: 500;
    font-size: 43px;
    color: #131313;
    letter-spacing: -1.72px;
    line-height: 1.1;
  }

  .subtitle {
    margin: 1rem 0 0 0;
    font-weight: 300;
    font-size: 18px;
    color: #464646;
    letter-spacing: -0.22px;
    line-height: 26px;
    .email-address {
      color: #464646;
      &:hover {
        color: ${colors.primary};
      }
    }
  }

  .send-message-button {
    display: inline-block;
    padding: 1rem 1.25rem 1.1rem; margin: 2rem 0;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    font-weight: 500;
    font-size: 18px;
    color: #636363;
    letter-spacing: 0.22px;
    line-height: 1;
  }


  @media ${bp.large} {
    margin: 3rem 0;
    .title {
      font-size: 88px;
      letter-spacing: -3.53px;
      line-height: 1;
      width: 50%;
    }
    .subtitle {
      margin: 2rem 0 0 0;
      font-weight: 200;
      font-size: 28px;
      letter-spacing: -0.35px;
      line-height: 1;
    }
    .send-message-button {
      font-size: 26px;
      padding: 1.5rem 2rem 1.8rem; margin: 5rem 0;
      border-width: 1.5px;
      transition: all 0.1s ease-out;
      &:hover {
        background: rgba(0, 0, 0, 0.9);
        color: white;
      }
    }
  }
`

export default () => {
  return(
    <Container separator={false}>
      <Styling>
        <h4 className="title">Let's Make Great Things Together</h4>
        <h5 className="subtitle">I'd love to hear about your project at <a href="" className="email-address">hello@bazdeas.com</a></h5>
        <a className="send-message-button">Send Message</a>
      </Styling>
    </Container>
  )
}
