// Vendor
import React from 'react';
import { useNavigate } from 'react-router-dom';
// Internal
import { MovieCard, MovieCardLoader } from '..';
import { useDispatchMovie } from '../../hooks';
import './styles.css';

export function MoviesList({ movies, isLoading }) {
  const navigate = useNavigate();
  const dispatchMovie = useDispatchMovie();

  const onClick = (movie) => {
    dispatchMovie(movie);
    navigate(`/movie/${movie.id}`);
  };

  const showLoading = isLoading;
  const showList = !isLoading && movies;

  const placeHolderArray = Array.from(Array(20).keys());

  return (
    <div className='ds-movies-list'>
      {showLoading &&
        React.Children.toArray(placeHolderArray.map(() => <MovieCardLoader />))}
      {showList &&
        React.Children.toArray(
          movies.map((movie) => <MovieCard movie={movie} onClick={onClick} />)
        )}
    </div>
  );
}

MoviesList.defaultProps = {
  isLoading: false,
  movies: [],
};
