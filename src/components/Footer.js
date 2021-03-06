import React from 'react'
import styled from 'styled-components'
import bp from '../brand/breakpoints'
import colors from '../brand/colors'
import Icon from '../assets/icons/Icon'

import Container from './Container'

const social = [
  {
    name: "Medium",
    icon: "medium",
    link: "https://medium.com/@bazdeas"
  },
  {
    name: "Dribbble",
    icon: "dribbble",
    link: "https://dribbble.com/BazDeas"
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/bazdeas/"
  },
  {
    name: "Twitter",
    icon: "twitter",
    link: "https://twitter.com/BazDeas"
  },
  {
    name: "Behance",
    icon: "behance",
    link: "https://www.behance.net/BazDeas"
  },

]

const Styling = styled.div`

  .title {
    font-weight: 700;
    font-size: 43px;
    color: white;
    letter-spacing: -1.72px;
    line-height: 1.1;
  }

  .subtitle {
    margin: 1rem 0 0 0;
    font-weight: 300;
    font-size: 18px;
    color: rgba(255, 255, 255, 0.6);
    letter-spacing: -0.22px;
    line-height: 26px;
    .email-address {
      color: white;
      &:hover {
        color: ${colors.primary};
      }
    }
  }

  .send-message-button {
    display: inline-block;
    padding: 1rem 1.25rem 1.1rem; margin: 2rem 0;
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 4px;
    font-weight: 500;
    font-size: 18px;
    color: #636363;
    letter-spacing: 0.22px;
    line-height: 1;
    text-decoration: none;
    &:hover {
      background: white;
      color: rgba(0, 0, 0, 0.9);
    }
  }

  .social {
    margin: 0 0 2rem 0;
    list-style-type: none;
    display: flex;
    transform: translateX(-9px);

    .social-item {
      margin: 0 1rem 0 0;
      a {
        text-decoration: none;
        .icon {
          display: block;
          width: 44px;
          fill: rgba(255, 255, 255, 0.3);
          transition: all 0.3s ease-out;
        }
        .name {
          transform: translateY(-4px);
          display: block;
          font-weight: 400;
          font-size: 10px;
          color: rgba(255, 255, 255, 0.3);
          text-align: center;
          transition: all 0.3s ease-out;
        }
        &:hover {
          .icon {
            fill: rgba(255, 255, 255, 1);
          }
          .name {
            color: rgba(255, 255, 255, 0.7);
          }
        }
      }
    }
  }


  @media ${bp.medium} {
    margin: 3rem 0;
    .title {
      font-size: 72px;
      letter-spacing: -3.53px;
      line-height: 1;
      width: 80%;
    }
    .subtitle {
      width: 80%;
      margin: 2rem 0 0 0;
      font-weight: 200;
      font-size: 28px;
      letter-spacing: -0.35px;
      line-height: 1.3;
    }
    .send-message-button {
      font-size: 22px;
      padding: 1.2rem 1.5rem 1.3rem; margin: 3rem 0;
      border-width: 1.5px;
      transition: all 0.1s ease-out;

    }
    .social {
      margin: 0 0 6rem 0;
      .social-item {
        margin: 0 1.5rem 0 0;
        a {
          .icon {
            width: 60px;
          }
          .name {
            font-size: 14px;
          }
        }
      }
    }
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
    }
    .social {
      margin: 0 0 6rem 0;
      .social-item {
        margin: 0 1.5rem 0 0;
        a {
          .icon {
            width: 100px;
          }
          .name {
            font-size: 17px;
          }
        }
      }
    }
  }
`

export default () => {
  return(
    <Container separator={false} dark={true} fullWidth={true}>
      <Styling>
        <h4 className="title">Let's Make Great Things Together</h4>
        <h5 className="subtitle">I'd love to hear about your project at <a href="mailto:hello@bazdeas.com" className="email-address">hello@bazdeas.com</a></h5>
        <a className="send-message-button" href="mailto:hello@bazdeas.com">Send Message</a>
        <ul className="social">
          {social.map(({name, icon, link}, i) =>
            <li key={i} className="social-item">
              <a href={link}>
                <Icon className="icon" icon={icon} />
                <span className="name">{name}</span>
              </a>
            </li>
          )}
        </ul>
      </Styling>
    </Container>
  )
}
