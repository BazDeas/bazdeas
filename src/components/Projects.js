import React from 'react'
import styled from 'styled-components'
import bp from '../brand/breakpoints'
import colors from '../brand/colors'
import Branding from '../assets/branding/Branding'
import Icon from '../assets/icons/Icon'

import Container from './Container'

const projects = [
  {
    name: "PayBear",
    description: "Improving the cryptocurrency experience",
    branding: "paybear",
    url: "https://www.behance.net/gallery/69565183/PayBear-Crypto-Payment-Processor"
  },
  {
    name: "Appetize",
    description: "Reimaging the restaurant experience",
    branding: "appetize",
    url: "https://www.behance.net/gallery/69603507/Appetize-Restaurant-Point-of-Service-App"
  },
  // {
  //   name: "Lab",
  //   description: "Self-initiated projects for research and development",
  //   branding: "lab",
  //   url: "https://www.behance.net/gallery/69603507/Appetize-Restaurant-Point-of-Service-App"
  // },
]

const Styling = styled.div`

  .project {
    margin: 1.5rem 0;
    list-style-type: none;
    a {
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
      text-decoration: none;
      .branding {
        width: 80px;
        transform: translatex(-20px);
      }
      .title {
        width: 70%;
        .name {
          font-weight: 700;
          font-size: 20px;
          color: #181818;
          letter-spacing: -0.8px;
        }
        .description {
          font-weight: 400;
          font-size: 13px;
          color: #A2A2A2;
          letter-spacing: 0.15px;
          line-height: 1.4;
          transition: color 0.3s ease-out;
        }
      }
      .back-icon {
        display: inline;
        line-height: 1;
        width: 28px;
        fill: rgba(0, 0, 0, 0.15);
        position: absolute;
        transform: translate(2px, -3px);
        transition: fill 0.3s ease-out;
      }
      &:hover {
        .back-icon {
          fill: rgba(0, 0, 0, 0.8);
        }
        .title {
          .description {
            color: rgba(0, 0, 0, 0.75);
          }
        }
      }
    }



  }

  @media ${bp.large} {
    .project {
      margin: 2rem 0;
      a {
        .branding {
          width: 128px;
          transform: translatex(-32px);
        }
        .title {
          margin: 0 0 0 1rem;
          width: 100%;
          .name {
            display: inline;
            font-weight: 700;
            font-size: 40px;
          }
          .description {
            display: inline;
            margin: 0 0 0 1.5rem;
            font-weight: 200;
            font-size: 30px;
          }
        }
        .back-icon {
          width: 58px;
          transform: translate(12px, 8px);
        }
      }

    }

  }

`

export default () => {
  return(
    <Container separator={true}>
      <Styling>
        <ul className="projects">
          {projects.map(({ name, description, branding, url }, i) =>
            <li key={i} className="project">
              <a href={url}>
                <Branding className="branding" logo={branding} />
                <div className="title">
                  <h4 className="name">{name}</h4>
                  <h5 className="description">{description}
                    <Icon className="back-icon" icon="back" />
                  </h5>

                </div>

              </a>
            </li>
          )}
        </ul>
      </Styling>
    </Container>
  )
}
