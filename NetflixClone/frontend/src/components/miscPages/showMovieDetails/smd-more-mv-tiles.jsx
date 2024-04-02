import React from 'react'

const SmdMoreMvTiles = ({movieData}) => {
  const imageUrl=''
  const movieThumb = ''
  const movieName = ''
  if (movieData) 
  {console.log(movieData)}
  

  return (
    <div className='smdMoreMvTiles-cont'>
      <img src={imageUrl + movieThumb} alt="" />
      <div className="smdMoreMvTiles-layer">
        <span>{movieName}</span>
      </div>
    </div>
  )
}

export default SmdMoreMvTiles