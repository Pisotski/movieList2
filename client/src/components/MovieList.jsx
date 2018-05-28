import React from 'react';
import MovieListEntry from './MovieListEntry.jsx'

function MovieList(props) {
  return (
    <div>
    {props.collection.map((movie, index) => 
      <MovieListEntry movie={movie} key={index} />
        )}
      </div>
    )
}

export default MovieList;