import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'


const MovieCard = ({poster_path}) => {
  return (
    <div className='w-40 mx-2 flex overflow-x-scroll [&::-webkit-scrollbar]:hidden'>
        <img src={IMG_CDN_URL + poster_path} alt="Movie Card" />
    </div>
  )
}

export default MovieCard