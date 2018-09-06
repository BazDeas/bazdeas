import React from 'react'
import styled from 'styled-components'
import bp from '../brand/breakpoints'

const margin = 2.5

const OuterContainer = styled.div`
  background: ${props => props.dark ? 'rgba(0, 0, 0, 0.90)' : 'white'};

`

const InnerContainer = styled.div`

  ${'' /* margin: ${props => props.fullWidth ? ` 0` : `${margin}rem`}; */}

  ${props => props.separator &&
  `&::after {
    content: "";
    width: 50%;
    height: 6px;
    background: #F2F2F2;
    display: block;
    margin: 3rem 0;
  }`
  }

  @media ${bp.medium} {
    width: 720px; margin: 0 auto;
  }

  @media ${bp.large} {
    width: 1280px; margin: 0 auto;
    padding: 0;
    &::after {
      width: 30%;
      height: 10px;
      margin: 6rem 0;
    }
  }

`

export default ({children, separator, dark, fullWidth}) => {
  return(
    <OuterContainer dark={dark} >
      <InnerContainer separator={separator} fullWidth={fullWidth}>
        {children}
      </InnerContainer>
    </OuterContainer>
  )
}
