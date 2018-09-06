import React from 'react'

import PayBear from './PayBear'

const logos = {
  paybear: <PayBear />,
}

export default (props) => {
  return(
    <svg className={props.className} viewBox="0 0 128 128">
      {logos[props.logo]}
    </svg>
  )
}
