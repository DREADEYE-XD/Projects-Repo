import React from 'react'
import SmdMovieTrailer from './smd-movie-trailer'
import SmdMovieAbout from './smd-movie-about'

const ShowMovieDetials = () => {
  return (
    <div className='showMovieDetails' >
      <div className="movieDetails-cont">
        <SmdMovieTrailer />
        <SmdMovieAbout />
        {/* More Movies like this */}

      </div>
    </div>
  )
}

export default ShowMovieDetials