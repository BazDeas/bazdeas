import React from 'react'

import PayBear from './PayBear'
import Lab from './Lab'
import Appetize from './Appetize'

const logos = {
  paybear: <PayBear />,
  lab: <Lab />,
  appetize: <Appetize />,
}

export default (props) => {
  return(
    <svg className={props.className} viewBox="0 0 128 128">
      {logos[props.logo]}
    </svg>
  )
}
