import React from 'react';

function MovieListEntry(props) {
  return (
    <ul>
      {props.movie.title}
    </ul>
  );
}

export default MovieListEntry;