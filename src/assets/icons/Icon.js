import React from 'react'

import Medium from './Medium'
import Dribbble from './Dribbble'
import Instagram from './Instagram'
import Twitter from './Twitter'
import Behance from './Behance'
import Back from './Back'

const icons = {
  medium: <Medium />,
  dribbble: <Dribbble />,
  instagram: <Instagram />,
  twitter: <Twitter />,
  behance: <Behance />,
  back: <Back />,
}

export default (props) => {
  return(
    <svg className={props.className} viewBox="0 0 128 128">
      {icons[props.icon]}
    </svg>
  )
}
