import React from 'react'

const BgVideo = () => {
  return (
    <div className='home-page-video'>
        <video
        autoPlay
        muted
        id="home-page-video"
        height='600'
        width='1500'
        
      >
        <source src="./videos/IM-trailer.mp4" type="video/mp4"/>
      </video>
    </div>
  )
}

export default BgVideo