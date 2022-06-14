// Vendor
import { useState } from 'react';
import { useQuery } from 'react-query';
// Internal
import { DISCOVER_KEY } from '../../constants';
import { discoverMovies } from '../../services';

export function useDiscoverQuery() {
  const [movies, setMovies] = useState([]);

  const onSuccess = (data) => {
    if (data && data.results) {
      setMovies(data.results);
    }
  };

  const { isLoading, isError } = useQuery(DISCOVER_KEY, discoverMovies, {
    onSuccess,
  });

  return {
    movies,
    isLoading,
    isError,
  };
}
