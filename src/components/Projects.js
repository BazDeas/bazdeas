import React from 'react'
import styled from 'styled-components'
import bp from '../brand/breakpoints'
import colors from '../brand/colors'

const projects = [
  {
    name: "PayBear",
    description: "Improving the cryptocurrency payment experience",
    branding: "",
    url: "https://www.behance.net/gallery/69565183/PayBear-Crypto-Payment-Processor"
  },
  {
    name: "Appetize",
    description: "Reimaging the restaurant experience",
    branding: "",
    url: "https://www.behance.net/gallery/69603507/Appetize-Restaurant-Point-of-Service-App"
  },
  {
    name: "Lab",
    description: "Self-initiated projects for research and development",
    branding: "",
    url: "https://www.behance.net/gallery/69603507/Appetize-Restaurant-Point-of-Service-App"
  },
]

const Container = styled.div`

  @media ${bp.large} {
  }

`

export default () => {
  return(
    <Container>
      <ul className="projects">
        {projects.map(({ name, description, branding, url }, i) =>
          <li key={i} className="project">
            <img src={branding} alt={`Branding for ${name}`} />
            <h4>{name}</h4>
            <h5>{description}</h5>
          </li>
        )}
      </ul>
    </Container>
  )
}
