import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
    

    
    // Prevent errors by checking if movies exist and is not empty
    if (!movies || movies.length === 0) {
        return <p>Loading movies...</p>;  // or some placeholder content
    }
    

  return (
    <div className='pl-4 text-white'>
        <h1 className='text-2xl py-2'>{title}</h1>
        <div className='flex overflow-x-scroll [&::-webkit-scrollbar]:hidden'>
            <div className='flex '>
                { movies.map(movies => <MovieCard key={movies.id} poster_path={movies.poster_path} /> ) }
                
            </div>
        </div>    
    </div>
  );
};

export default MovieList