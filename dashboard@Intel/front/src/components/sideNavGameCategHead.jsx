import React from 'react'
import Span from './Span'
import Image from './Image'

const SideNavGameCategHead = ({handlePinStatus, pinStatus}) => {
  return (
    <div className="header">
        <Span spanInput="Categories" />
        <div onClick={handlePinStatus} className="pin">
          <Image s={pinStatus} h="13" w="12" />
        </div>
      </div>
  )
}

export default SideNavGameCategHead