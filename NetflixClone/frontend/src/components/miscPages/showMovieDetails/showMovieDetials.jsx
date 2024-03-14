import React from 'react'
import SmdMovieTrailer from './smd-movie-trailer'
import SmdMovieAbout from './smd-movie-about'
import SmdMoreMovies from './smd-more-movies'

const ShowMovieDetials = () => {
  return (
    <div className='showMovieDetails' >
      <div className="movieDetails-cont">
        <SmdMovieTrailer />
        <SmdMovieAbout />
        <SmdMoreMovies />
      </div>
    </div>
  )
}

export default ShowMovieDetials