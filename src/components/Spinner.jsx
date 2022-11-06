import React from 'react'

import '../scss/section/spinner.scss'

const Spinner = () => {
  return (
    <div className="spinner">
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default Spinner
