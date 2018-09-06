import React from 'react'
import styled from 'styled-components'
import bp from '../brand/breakpoints'
import colors from '../brand/colors'
import Branding from '../assets/branding/Branding'

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
  {
    name: "Lab",
    description: "Self-initiated projects for research and development",
    branding: "lab",
    url: "https://www.behance.net/gallery/69603507/Appetize-Restaurant-Point-of-Service-App"
  },
]

const Styling = styled.div`

  .project {
    display: flex;
    flex-wrap: nowrap;
    list-style-type: none;
    align-items: center;
    margin: 1.5rem 0;

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
      }
    }

  }

  @media ${bp.large} {
    .project {
      margin: 2rem 0;
      .branding {
        width: 128px;
        transform: translatex(-32px);
      }
      .title {
        margin: 0 0 0 1rem;
        .name {
          display: inline;
          font-weight: 700;
          font-size: 40px;
        }
        .description {
          display: inline;
          margin: 0 0 0 1.5rem;
          font-weight: 200;
          font-size: 32px;
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
              <Branding className="branding" logo={branding} />
              <div className="title">
                <h4 className="name">{name}</h4>
                <h5 className="description">{description}</h5>
              </div>
            </li>
          )}
        </ul>
      </Styling>
    </Container>
  )
}
