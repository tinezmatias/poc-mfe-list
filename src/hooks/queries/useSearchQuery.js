// Vendor
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
// Internal
import { MOVIE_BY_QUERY_KEY } from '../../constants';
import { findMoviesByString } from '../../services';

export function useSearchQuery(queryString) {
  const [movies, setMovies] = useState();

  const onSuccess = (data) => setMovies(data.results);

  const {
    isLoading,
    isError,
    refetch: searchMovies,
  } = useQuery(
    [MOVIE_BY_QUERY_KEY, queryString],
    async () => findMoviesByString(queryString),
    { enabled: false, onSuccess }
  );

  useEffect(() => {
    if (queryString) {
      searchMovies();
    } else {
      setMovies([]);
    }
  }, [queryString, searchMovies]);

  return {
    movies,
    isLoading,
    isError,
  };
}
