import React from 'react';
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const SecondaryContainer = () => {
    const movies = useSelector((store) => store.movies);

  return (
    <div className='bg-black'>
        <div className='-mt-50 relative z-20'>
            <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}  />
            <MovieList title={"Top Rated"} movies={movies.TopRatedMovies}  />
            <MovieList title={"Popular"} movies={movies.PopularMovies}  />
            <MovieList title={"Upcomming"} movies={movies.UpcommingMovies}  />
            <MovieList title={"Horror"} movies={movies.nowPlayingMovies}  />

        </div>
    </div>
  )
}

export default SecondaryContainer