import React from 'react'

import Medium from './Medium'

const icons = {
  medium: <Medium />,
}

export default (props) => {
  return(
    <svg className={props.className} viewBox="0 0 128 128">
      {icons[props.icon]}
    </svg>
  )
}
