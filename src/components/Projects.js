import React from 'react'
import styled from 'styled-components'
import bp from '../brand/breakpoints'
import colors from '../brand/colors'
import Branding from '../assets/branding/Branding'

const projects = [
  {
    name: "PayBear",
    description: "Improving the cryptocurrency payment experience",
    branding: "paybear",
    url: "https://www.behance.net/gallery/69565183/PayBear-Crypto-Payment-Processor"
  },
  {
    name: "Appetize",
    description: "Reimaging the restaurant experience",
    branding: "paybear",
    url: "https://www.behance.net/gallery/69603507/Appetize-Restaurant-Point-of-Service-App"
  },
  {
    name: "Lab",
    description: "Self-initiated projects for research and development",
    branding: "paybear",
    url: "https://www.behance.net/gallery/69603507/Appetize-Restaurant-Point-of-Service-App"
  },
]

const Container = styled.div`

  .project {
    .branding {
      width: 64px;
    }
  }

  @media ${bp.large} {
  }

`

export default () => {
  return(
    <Container>
      <ul className="projects">
        {projects.map(({ name, description, branding, url }, i) =>
          <li key={i} className="project">
            <Branding className="branding" logo={branding} />
            <h4>{name}</h4>
            <h5>{description}</h5>
          </li>
        )}
      </ul>
    </Container>
  )
}
